"""Pruebas sin red. Nombres de pacientes ficticios."""
import sys
from datetime import datetime
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parents[1]))

from zb.censo import Pestana, elegir_pestana, leer_censo, planear  # noqa: E402
from zb.modelo import Estudio, Paciente  # noqa: E402
from zb.nombres import iniciales, mismo_paciente, separar, variantes_busqueda  # noqa: E402
from zb.portal import _datos_tarjeta, _valores_de_filas, rango_busqueda  # noqa: E402
from zb.sheets import Libro  # noqa: E402
from zb.valores import Plantilla, leer_fecha_portal, limpiar_valor  # noqa: E402

HOY = datetime(2026, 11, 25, 12, 0)

# Columna A de la plantilla 202 según la skill (filas 1..197) + EXTRAS
PLANTILLA = {1: "Paciente", 2: "Fecha", 3: "Biometría Hemática", 4: "LEU", 5: "ERIT", 6: "HB", 7: "HTC",
             8: "VCM", 9: "Hb. C. M.", 10: "CMHC", 11: "PLT", 12: "RDW", 13: "MPV", 14: "NEU %",
             15: "LINF %", 20: "NEU #", 27: "PB24", 28: "GLUCOSA", 29: "CREATININA", 30: "UREA", 31: "BUN",
             46: "SODIO", 47: "POTASIO", 48: "CLORO", 54: "MAGNESIO", 56: "COAGULACION",
             57: "TIEMPO PARCIAL DE TROMBOPLASTINA", 59: "TIEMPO DE PROTROMBINA", 61: "INR",
             70: "GA", 71: "PH", 72: "PCO2", 76: "NA.", 77: "K.", 79: "HEMATOCRITO", 80: "HEMOGLOBINA",
             84: "LACTATO", 86: "GV", 87: "pH", 92: "SODIO_2", 93: "POTASIO_2", 96: "HEMATOCRITO_2",
             97: "HEMOGLOBINA TOTAL", 106: "LACTATO", 108: "BIOMARCADORES", 109: "CPK", 110: "CK-MB",
             112: "cTnT", 116: "NT-proBNP", 117: "PCR", 119: "PROCAL", 122: "AISLAMIENTOS:",
             126: "P. de Lípidos", 144: "EGO", 147: "PH", 153: "ERITROCITOS", 157: "ERITROCITOS",
             158: "LEUCOCITOS", 166: "Perfil de Hierro", 174: "Choque Cardiogénico", 197: "Impella",
             199: "EXTRAS"}


def col_a(extra=None):
    d = {**PLANTILLA, **(extra or {})}
    return [d.get(i, "") for i in range(1, max(d) + 1)]


def pestana(fila2=None, extra=None):
    return Pestana("202", 11, 220, 30, col_a(extra), fila2 or ["Fecha"], "Juan Pérez López")


PAC = Paciente("202", "Juan Pérez López")


# ---------------------------------------------------------------- nombres ---

def test_separar_con_particulas():
    assert separar("Rosa Elena De la Garza Treviño") == ("Rosa Elena", "De la Garza", "Treviño")
    assert separar("Laura Saenz de Tapia") == ("Laura", "Saenz", "de Tapia")
    assert separar("Pedro Luis Gomez Salinas") == ("Pedro Luis", "Gomez", "Salinas")


def test_variantes_en_orden():
    v = variantes_busqueda("José Pérez López")
    assert v[0] == ("José", "Pérez", "López")
    assert v[1] == ("Jose", "Perez", "Lopez")
    assert v[-1] == ("Jose", "", "")
    assert len(v) == len(set(v))


def test_iniciales_y_match():
    assert iniciales("Rosa Elena De la Garza Treviño") == "REGT"
    assert mismo_paciente("Juan Pérez López", "PEREZ LOPEZ JUAN")
    assert not mismo_paciente("Juan Pérez López", "Juan García Ruiz")


# ---------------------------------------------------------------- valores ---

def test_limpiar_valor():
    assert limpiar_valor("1.07 Anormal por encima") == "1.07"
    assert limpiar_valor("312 Crítico por encima (Numérico)") == "312"
    assert limpiar_valor("4.2 Anormal por debajo") == "4.2"
    assert limpiar_valor("Menor que 1.0") == "Menor que 1.0"
    assert limpiar_valor("NA") is None
    assert limpiar_valor("") is None


def test_fecha_portal():
    assert leer_fecha_portal("Fecha de creación: 25/11/2026 07:31:00") == datetime(2026, 11, 25, 7, 31)
    assert leer_fecha_portal("25/11/2026 01:05 p. m.") == datetime(2026, 11, 25, 13, 5)


def test_mapeo_por_seccion():
    pl = Plantilla.desde_columna_a(col_a())
    assert pl.fila_para("LEUCOCITOS", ["HEM"], set()) == 4
    assert pl.fila_para("HEMOGLOBINA", ["HEM"], set()) == 6
    assert pl.fila_para("HEMOGLOBINA", ["GA"], set()) == 80
    assert pl.fila_para("SODIO", ["QUI"], set()) == 46
    assert pl.fila_para("SODIO", ["GA"], set()) == 76
    assert pl.fila_para("SODIO", ["GV"], set()) == 92
    assert pl.fila_para("TROPONINA T ULTRASENSIBLE", ["BIO"], set()) == 112
    assert pl.fila_para("NT-proBNP", ["QUI"], set()) == 116          # única: fuera de sección vale
    assert pl.fila_para("ERITROCITOS", ["EGO"], {153}) == 157       # segunda aparición en EGO
    assert pl.fila_para("TACROLIMUS", ["QUI"], set()) is None


def test_desfase_pestana_204():
    # la 204 tiene una fila extra antes de PB24: el mapeo se recorre solo
    d = {k + (1 if k >= 27 else 0): v for k, v in PLANTILLA.items()}
    d[27] = "HEMOGLOBINA LIBRE"
    pl = Plantilla.desde_columna_a([d.get(i, "") for i in range(1, max(d) + 1)])
    assert pl.fila_para("GLUCOSA", ["QUI"], set()) == 29


# ------------------------------------------------------------------- plan ---

def est(cod, f, vals, titulo="", estatus="Validada"):
    return Estudio(cod, titulo, f, estatus, vals)


def test_plan_basico_y_extras():
    f = datetime(2026, 11, 25, 7, 31)
    es = [est("LABHEM", f, [("LEUCOCITOS", "12.3"), ("HEMOGLOBINA", "9.1")]),
          est("LABQUI", f, [("CREATININA", "1.07"), ("TACROLIMUS", "8.2")])]
    pl = planear(pestana(["Fecha", "24/11 (06:00)"]), PAC, es, HOY)
    assert pl.insertar_columnas == [2]
    assert pl.celdas[(2, 2)] == "25/11 (07:31)"
    assert pl.celdas[(4, 2)] == "12.3"
    assert pl.celdas[(29, 2)] == "1.07"
    assert pl.celdas[(200, 0)] == "TACROLIMUS" and (200, 0) in pl.amarillas
    assert pl.celdas[(200, 2)] == "8.2"
    assert pl.extras == ["TACROLIMUS=8.2"]


def test_no_duplica_columna_existente():
    f = datetime(2026, 11, 25, 7, 31)
    pl = planear(pestana(["Fecha", "25/11 (07:31)"]), PAC, [est("LABHEM", f, [("LEUCOCITOS", "1")])], HOY)
    assert pl.vacio and pl.insertar_columnas == []


def test_columna_sin_hora_cuenta_como_la_misma_muestra():
    f = datetime(2026, 11, 25, 7, 31)
    pl = planear(pestana(["Fecha", "25/11"]), PAC, [est("LABHEM", f, [("LEUCOCITOS", "1")])], HOY)
    assert pl.vacio


def test_orden_por_fecha_inserta_en_medio():
    # ya hay 23/11 y 25/11; llega 24/11 (traslado) y 25/11 tarde
    es = [est("LABHEM", datetime(2026, 11, 24, 6, 0), [("LEUCOCITOS", "7")]),
          est("LABHEM", datetime(2026, 11, 25, 18, 0), [("LEUCOCITOS", "8")])]
    pl = planear(pestana(["Fecha", "23/11 (06:00)", "25/11 (06:00)"]), PAC, es, HOY)
    assert pl.insertar_columnas == [2, 4]
    assert pl.celdas[(2, 2)] == "24/11 (06:00)"
    assert pl.celdas[(2, 4)] == "25/11 (18:00)"


def test_mismo_minuto_va_en_una_columna():
    f = datetime(2026, 11, 25, 7, 31)
    es = [est("LABHEM", f, [("LEUCOCITOS", "1")]), est("LABCOA", f, [("INR", "1.2")])]
    pl = planear(pestana(), PAC, es, HOY)
    assert pl.insertar_columnas == [1]
    assert pl.celdas[(61, 1)] == "1.2"


def test_extras_reutiliza_etiqueta_existente():
    f = datetime(2026, 11, 25, 7, 31)
    pl = planear(pestana(extra={200: "GGT"}), PAC, [est("LABQUI", f, [("GGT", "50")])], HOY)
    assert pl.celdas[(200, 1)] == "50" and (200, 0) not in pl.celdas


def test_panel_negativo_va_a_aislamientos():
    f = datetime(2026, 11, 25, 7, 31)
    vals = [(f"PATOGENO {i}", "No Detectado") for i in range(8)]
    pl = planear(pestana(), PAC, [est("LABMOL", f, vals, titulo="Panel neumonía")], HOY)
    assert "todo No detectado" in pl.celdas[(123, 1)]
    assert not pl.extras


def test_parcial_genera_aviso():
    f = datetime(2026, 11, 25, 7, 31)
    pl = planear(pestana(), PAC, [est("LABQUI", f, [("GLUCOSA", "99")], estatus="Parcialmente validada")], HOY)
    assert any("parcial" in a for a in pl.avisos)


# ----------------------------------------------------------------- censo ---

def test_leer_censo():
    filas = [["F", "x"], ["Cama", "Edo", "Gen", "Nombre", "Edad", "Ingreso", "Egreso"],
             ["", "", "", "UTIA"],
             ["202", "G", "M", "Juan Pérez López", "65", "11/11/2026", ""],
             ["429", "A", "M", "Pedro Ruiz Soto", "63", "8/11/2026", "12/11/2026"],
             ["CUB 11/UTIM", "D", "M", "Luis Mora Gil", "53", "12/11/2026", ""],
             ["443", "D", "M", "Ana Díaz Paz", "39", "28/10/2026", ""]]
    pacs, avisos = leer_censo(filas)
    assert [p.cama for p in pacs] == ["202", "443"]
    assert pacs[0].ingreso == datetime(2026, 11, 11)
    assert any("UTIM" in a for a in avisos)


def test_elegir_pestana():
    pes = {"443.": Pestana("443.", 1, 200, 26, [], [], "Ana Díaz Paz"),
           "212": Pestana("212", 2, 200, 26, [], [], "Otra Persona Distinta")}
    assert elegir_pestana("443", Paciente("443", "Ana Díaz Paz"), pes)[0].titulo == "443."
    assert elegir_pestana("212", Paciente("212", "Ana Díaz Paz"), pes) == (None, "otro_paciente")
    assert elegir_pestana("999", Paciente("999", "X Y Z"), pes) == (None, "sin_pestana")


# ---------------------------------------------------------------- portal ---

def test_tarjeta_y_filas():
    t = _datos_tarjeta("LABQUI - QUIMICA SANGUINEA 24\nFecha de creación: 25/11/2026 07:31\nValidada")
    assert t["codigo"] == "LABQUI" and t["fecha"] == datetime(2026, 11, 25, 7, 31)
    assert t["titulo"] == "QUIMICA SANGUINEA 24" and t["estatus"] == "Validada"
    filas = [["Prueba", "Resultado"], ["CREATININA", "1.07", "Anormal por encima"],
             ["POTASIO", "6.1 Crítico por encima (Numérico)"], ["CLORO", "NA"]]
    assert _valores_de_filas(filas) == [("CREATININA", "1.07"), ("POTASIO", "6.1")]


def test_rango_busqueda():
    assert rango_busqueda(datetime(2026, 11, 24, 6), None, HOY) == datetime(2026, 11, 24)
    assert rango_busqueda(None, datetime(2026, 11, 1), HOY) == datetime(2026, 11, 18)


# --------------------------------------------------------- Sheets (falso) ---

class _Exec:
    def __init__(self, f): self.f = f
    def execute(self): return self.f()


class SheetFalso:
    """Imita lo mínimo de la API: guarda lo que se escribe."""
    def __init__(self):
        self.requests, self.data = [], []
    def get(self, **k):
        return _Exec(lambda: {"sheets": [{"properties": {"sheetId": 11, "title": "202", "index": 2,
                                                          "gridProperties": {"rowCount": 199, "columnCount": 3}}}]})
    def batchUpdate(self, spreadsheetId, body):
        return _Exec(lambda: self.requests.extend(body["requests"]))
    def values(self):
        falso = self
        class V:
            def batchUpdate(self, spreadsheetId, body):
                assert body["valueInputOption"] == "RAW"
                return _Exec(lambda: falso.data.extend(body["data"]))
        return V()


def test_escritura_en_lote_raw_y_texto():
    api = SheetFalso()
    libro = Libro(api, "x")
    f = datetime(2026, 11, 25, 7, 31)
    pe = pestana(["Fecha", "24/11 (06:00)"])
    pe.filas_grid = 199
    pl = planear(pe, PAC, [est("LABQUI", f, [("CREATININA", "1.07"), ("TACROLIMUS", "8.2")])], HOY)
    estructura = libro.solicitudes_estructura([pl], {"202": pe})
    datos = libro.datos_valores([pl])
    libro.escribir(estructura, datos)
    tipos = [list(r)[0] for r in api.requests]
    assert tipos.count("insertDimension") == 1 and "appendDimension" in tipos and "repeatCell" in tipos
    assert {"range": "'202'!C29", "values": [["1.07"]]} in api.data
    assert all(isinstance(d["values"][0][0], str) and d["values"][0][0] for d in api.data)  # nunca celdas vacías


def test_png(tmp_path):
    from zb.imagenes import generar_png
    r = generar_png(tmp_path, "202", "JPL", [(datetime(2026, 11, 25, 7, 31), [("LEUCOCITOS", "12.3")])])
    assert r.name == "cama-202_25-11_0731.png" and r.stat().st_size > 1000
