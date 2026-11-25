"""zambrabot.py completo: portal falso + Google Sheets simulado en memoria."""
import asyncio, os, re, sys
from pathlib import Path
from types import SimpleNamespace

import pytest

sys.path.insert(0, str(Path(__file__).resolve().parents[1]))
pytest.importorskip("playwright")
from test_logica import PLANTILLA  # noqa: E402
from test_portal_falso import url  # noqa: E402,F401  (fixture)

import zambrabot  # noqa: E402
from zb import sheets as zsheets  # noqa: E402


def _a1(a1):
    m = re.match(r"([A-Z]+)?(\d+)?(?::([A-Z]+)?(\d+)?)?$", a1)
    def col(s):
        n = 0
        for ch in s: n = n * 26 + ord(ch) - 64
        return n - 1
    c1, r1, c2, r2 = m.groups()
    return (int(r1) if r1 else 1, col(c1) if c1 else 0,
            int(r2) if r2 else (int(r1) if r1 and not m.group(3) else 999),
            col(c2) if c2 else (col(c1) if c1 and not m.group(3) else 99))


class _E:
    def __init__(self, v): self.v = v
    def execute(self): return self.v() if callable(self.v) else self.v


class SheetsMemoria:
    def __init__(self, hojas):
        self.hojas = hojas  # titulo -> {"id":, "celdas": {(r,c): v}}
        self.llamadas_escritura = 0
    def _t(self, rng):
        t, a1 = rng.rsplit("!", 1); return t.strip("'").replace("''", "'"), a1
    def get(self, **k):
        return _E({"sheets": [{"properties": {"sheetId": h["id"], "title": t, "index": i,
                   "gridProperties": {"rowCount": 210, "columnCount": 10}}} for i, (t, h) in enumerate(self.hojas.items())]})
    def _leer(self, rng):
        t, a1 = self._t(rng); r1, c1, r2, c2 = _a1(a1); cel = self.hojas[t]["celdas"]
        filas = []
        for r in range(r1, min(r2, 600) + 1):
            fila = [cel.get((r, c), "") for c in range(c1, min(c2, 60) + 1)]
            while fila and fila[-1] == "": fila.pop()
            filas.append(fila)
        while filas and not filas[-1]: filas.pop()
        return {"values": filas} if filas else {}
    def values(self):
        s = self
        class V:
            def batchGet(self, spreadsheetId, ranges, **k):
                return _E(lambda: {"valueRanges": [s._leer(r) for r in ranges]})
            def batchUpdate(self, spreadsheetId, body):
                def f():
                    s.llamadas_escritura += 1
                    assert body["valueInputOption"] == "RAW"
                    for d in body["data"]:
                        t, a1 = s._t(d["range"]); r, c, _, _ = _a1(a1)
                        s.hojas[t]["celdas"][(r, c)] = d["values"][0][0]
                return _E(f)
        return V()
    def batchUpdate(self, spreadsheetId, body):
        def f():
            s = self; s.llamadas_escritura += 1
            por_id = {h["id"]: t for t, h in s.hojas.items()}
            for rq in body["requests"]:
                if "insertDimension" in rq and rq["insertDimension"]["range"]["dimension"] == "COLUMNS":
                    rg = rq["insertDimension"]["range"]; cel = s.hojas[por_id[rg["sheetId"]]]["celdas"]
                    nuevo = {(r, c + (1 if c >= rg["startIndex"] else 0)): v for (r, c), v in cel.items()}
                    cel.clear(); cel.update(nuevo)
        return _E(f)


def test_corrida_completa(url, tmp_path, monkeypatch, capsys):
    plantilla = {(r, 0): v for r, v in PLANTILLA.items()}
    hojas = {
        "CENSO": {"id": 1, "celdas": {(c[0], c[1]): c[2] for c in [
            (4, 0, "Cama"), (4, 3, "Nombre"), (4, 5, "Ingreso"), (4, 6, "Egreso"),
            (5, 0, "202"), (5, 3, "Juan Pérez López"), (5, 5, "20/11/2026"),
            (6, 0, "443"), (6, 3, "Ana Díaz Paz"), (6, 5, "20/11/2026"),
            (7, 0, "212"), (7, 3, "Nadie Inexistente Mas"), (7, 5, "20/11/2026")]}},
        "202": {"id": 11, "celdas": {**plantilla, (1, 1): "Juan Pérez López", (2, 1): "24/11 (06:00)", (4, 1): "10.0"}},
        "212": {"id": 12, "celdas": {**plantilla, (1, 1): "Nadie Inexistente Mas"}},
        "443.": {"id": 13, "celdas": {**plantilla, (1, 1): "Ana Díaz Paz", (2, 1): "24/11 (18:05)", (61, 1): "1.2"}},
    }
    mem = SheetsMemoria(hojas)
    monkeypatch.setattr(zsheets, "conectar", lambda *a: mem)
    monkeypatch.setattr(zambrabot, "load_dotenv", lambda *a: None)
    for k, v in {"PORTAL_URL": url, "PORTAL_USUARIO": "u", "PORTAL_PASSWORD": "p", "SHEET_ID": "x",
                 "DIAS_MAX": "30", "CARPETA_PNG": str(tmp_path)}.items():
        monkeypatch.setenv(k, v)
    a = SimpleNamespace(prueba=False, sheet=None, simular=False, camas=None, verificar=None,
                        descubrir=False, una_lectura=False, ver=False)
    assert asyncio.run(zambrabot.principal(a)) == 0
    out = capsys.readouterr().out

    c202 = hojas["202"]["celdas"]
    assert c202[(2, 1)] == "24/11 (06:00)" and c202[(4, 1)] == "10.0"      # lo previo intacto
    assert c202[(2, 2)] == "25/11 (07:31)"                                  # columna nueva a la derecha
    assert c202[(4, 2)] == "12.3" and c202[(29, 2)] == "1.07" and c202[(47, 2)] == "6.1"
    assert c202[(200, 0)] == "TACROLIMUS" and c202[(200, 2)] == "8.2"
    assert (2, 2) not in hojas["443."]["celdas"]                             # ya cargada: no duplica
    assert mem.llamadas_escritura == 2                                       # estructura + valores, una vez
    assert list(tmp_path.rglob("cama-202_25-11_0731.png"))
    # el resumen nunca muestra nombres
    for nombre in ["Juan", "Pérez", "Ana", "Díaz", "Nadie"]:
        assert nombre not in out
    assert "Cama 202 (JPL): 25/11 (07:31)" in out and "Cama 212 (NIM)" in out
    assert "TACROLIMUS=8.2" in out and "parcialmente validada" in out

    # segunda corrida: nada nuevo, no se duplica nada
    mem.llamadas_escritura = 0
    assert asyncio.run(zambrabot.principal(a)) == 0
    assert mem.llamadas_escritura == 0 and (2, 3) not in c202

    # verificación de 2 camas contra el portal
    a.verificar = "202,443"
    assert asyncio.run(zambrabot.principal(a)) == 1          # 443 tiene un TP que falta en el Sheet
    out = capsys.readouterr().out
    assert "Cama 202 (JPL): 6/6 coinciden" in out
    assert "Cama 443 (ADP): 1/2 coinciden" in out and "TP: Sheet=(vacío) portal=13.1" in out
