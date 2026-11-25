"""Google Sheets: lectura en lote y escritura en lote (2 llamadas: estructura
y valores). Los valores se escriben con RAW para que queden como texto."""
from __future__ import annotations

from pathlib import Path

from .censo import Pestana, PlanCama, col_letra

SCOPES = ["https://www.googleapis.com/auth/spreadsheets"]


def _rango(titulo: str, a1: str) -> str:
    return "'" + titulo.replace("'", "''") + "'!" + a1


def conectar(credenciales: Path, token: Path):
    """OAuth de escritorio: la primera vez abre el navegador para autorizar
    con TU cuenta de Google (la que puede editar el censo); luego usa token.json."""
    from google.auth.transport.requests import Request
    from google.oauth2.credentials import Credentials
    from google_auth_oauthlib.flow import InstalledAppFlow
    from googleapiclient.discovery import build

    creds = None
    if token.exists():
        creds = Credentials.from_authorized_user_file(str(token), SCOPES)
    if not creds or not creds.valid:
        if creds and creds.expired and creds.refresh_token:
            creds.refresh(Request())
        else:
            if not credenciales.exists():
                raise SystemExit(f"Falta {credenciales}. Ver README, sección 'Google'.")
            flow = InstalledAppFlow.from_client_secrets_file(str(credenciales), SCOPES)
            creds = flow.run_local_server(port=0)
        token.write_text(creds.to_json())
    return build("sheets", "v4", credentials=creds, cache_discovery=False).spreadsheets()


class Libro:
    def __init__(self, api, spreadsheet_id: str):
        self.api = api
        self.id = spreadsheet_id
        self.meta = api.get(spreadsheetId=spreadsheet_id,
                            fields="sheets(properties(sheetId,title,index,gridProperties))").execute()
        self.hojas = {s["properties"]["title"]: s["properties"] for s in self.meta["sheets"]}

    def valores(self, rangos: list[str]) -> list[list[list[str]]]:
        salida = []
        for i in range(0, len(rangos), 100):
            r = self.api.values().batchGet(spreadsheetId=self.id, ranges=rangos[i:i + 100],
                                           valueRenderOption="FORMATTED_VALUE").execute()
            salida += [vr.get("values", []) for vr in r.get("valueRanges", [])]
        return salida

    def leer_censo(self) -> list[list[str]]:
        return self.valores([_rango("CENSO", "A1:Z300")])[0]

    def leer_pestanas(self, titulos: list[str]) -> dict[str, Pestana]:
        rangos = []
        for t in titulos:
            rangos += [_rango(t, "A1:A600"), _rango(t, "2:2"), _rango(t, "B1")]
        vals = self.valores(rangos)
        out = {}
        for k, t in enumerate(titulos):
            col_a, fila2, b1 = vals[3 * k], vals[3 * k + 1], vals[3 * k + 2]
            p = self.hojas[t]
            g = p.get("gridProperties", {})
            out[t] = Pestana(
                titulo=t, sheet_id=p["sheetId"],
                filas_grid=g.get("rowCount", 1000), columnas_grid=g.get("columnCount", 26),
                col_a=[(f[0] if f else "") for f in col_a],
                fila2=fila2[0] if fila2 else [],
                b1=(b1[0][0] if b1 and b1[0] else ""),
            )
        return out

    # ------------------------------------------------------------ escritura --

    def solicitudes_estructura(self, planes: list[PlanCama], pestanas: dict[str, Pestana]) -> list[dict]:
        req: list[dict] = []
        for p in planes:
            if p.vacio:
                continue
            pe = pestanas[p.titulo]
            for c in p.insertar_columnas:                    # ascendente: ver censo.planear
                req.append({"insertDimension": {
                    "range": {"sheetId": p.sheet_id, "dimension": "COLUMNS",
                              "startIndex": c, "endIndex": c + 1},
                    "inheritFromBefore": True}})
            if p.filas_necesarias > pe.filas_grid:
                req.append({"appendDimension": {"sheetId": p.sheet_id, "dimension": "ROWS",
                                                "length": p.filas_necesarias - pe.filas_grid + 5}})
            for (r, c) in p.amarillas:
                req.append({"repeatCell": {
                    "range": {"sheetId": p.sheet_id, "startRowIndex": r - 1, "endRowIndex": r,
                              "startColumnIndex": c, "endColumnIndex": c + 1},
                    "cell": {"userEnteredFormat": {"backgroundColor": {"red": 1, "green": 1, "blue": 0}}},
                    "fields": "userEnteredFormat.backgroundColor"}})
        return req

    def solicitudes_pestana_nueva(self, plantilla: Pestana, titulo: str, nuevo_id: int,
                                  indice: int, nombre: str) -> list[dict]:
        """Duplica la 202 completa (formato, congeladas, anchos) y borra sus
        valores de la columna B en adelante, menos la fila 1 que lleva el nombre."""
        return [
            {"duplicateSheet": {"sourceSheetId": plantilla.sheet_id, "newSheetId": nuevo_id,
                                "insertSheetIndex": indice, "newSheetName": titulo}},
            {"updateCells": {"range": {"sheetId": nuevo_id, "startRowIndex": 1, "startColumnIndex": 1},
                             "fields": "userEnteredValue"}},
            {"updateCells": {"range": {"sheetId": nuevo_id, "startRowIndex": 0, "endRowIndex": 1,
                                       "startColumnIndex": 1, "endColumnIndex": 2},
                             "rows": [{"values": [{"userEnteredValue": {"stringValue": nombre}}]}],
                             "fields": "userEnteredValue"}},
        ]

    def datos_valores(self, planes: list[PlanCama]) -> list[dict]:
        data = []
        for p in planes:
            for (r, c), v in sorted(p.celdas.items()):
                data.append({"range": _rango(p.titulo, f"{col_letra(c)}{r}"), "values": [[str(v)]]})
        return data

    def escribir(self, estructura: list[dict], datos: list[dict]) -> None:
        if estructura:
            self.api.batchUpdate(spreadsheetId=self.id, body={"requests": estructura}).execute()
        if datos:
            # RAW = se guarda exactamente el texto ("1.07" no se vuelve fecha).
            self.api.values().batchUpdate(spreadsheetId=self.id, body={
                "valueInputOption": "RAW", "data": datos}).execute()

    def verificar_escrito(self, datos: list[dict]) -> list[str]:
        """Relee cada celda escrita y regresa las que no coinciden."""
        if not datos:
            return []
        leidos = self.valores([d["range"] for d in datos])
        malos = []
        for d, v in zip(datos, leidos):
            real = v[0][0] if v and v[0] else ""
            if str(real) != str(d["values"][0][0]):
                malos.append(d["range"].split("!")[1])
        return malos
