"""Limpieza de valores del portal y mapeo analito -> fila de la plantilla."""
from __future__ import annotations

import re
from dataclasses import dataclass, field
from datetime import datetime

from .nombres import normalizar

# ---------------------------------------------------------------- valores ---

_ANOTACIONES = re.compile(
    r"\b(anormal|cr[ií]tico|critico)\s+(por\s+)?(encima|debajo|arriba|abajo)\b"
    r"(\s*\((num[eé]rico|texto)\))?",
    re.IGNORECASE,
)
_SUELTAS = re.compile(r"^\s*(normal|anormal|cr[ií]tico)\s*$", re.IGNORECASE)


def limpiar_valor(crudo: str) -> str | None:
    """Quita 'Anormal/Crítico por encima/debajo (Numérico)' y regresa el valor
    como texto. None si no hay valor (vacío o NA)."""
    if crudo is None:
        return None
    v = _ANOTACIONES.sub("", str(crudo))
    v = re.sub(r"\(\s*(num[eé]rico|texto)\s*\)", "", v, flags=re.IGNORECASE)
    v = re.sub(r"\s+", " ", v).strip(" \t-|")
    if not v or _SUELTAS.match(v) or v.upper() in {"NA", "N/A", "N.A.", "--"}:
        return None
    return v


# --------------------------------------------------------------- secciones ---
# Encabezados de sección en la columna A de la plantilla (pestaña 202).
SECCIONES = {
    "HEM": ["BIOMETRIA HEMATICA"],
    "QUI": ["PB24"],
    "COA": ["COAGULACION"],
    "VERIFY": ["VERIFY NOW"],
    "GA": ["GA"],
    "GV": ["GV"],
    "BIO": ["BIOMARCADORES"],
    "AISL": ["AISLAMIENTOS"],
    "LIP": ["P DE LIPIDOS"],
    "TIR": ["PERFIL TIROIDEO"],
    "EGO": ["EGO"],
    "FE": ["PERFIL DE HIERRO"],
    "CHOQUE": ["CHOQUE CARDIOGENICO"],
    "EXTRAS": ["EXTRAS"],
}


def secciones_de_estudio(codigo: str, titulo: str) -> list[str]:
    """Secciones donde buscar primero, según código y nombre del estudio.
    Si el analito no está ahí, se busca en toda la plantilla (si el nombre
    es único) y si no, va a EXTRAS."""
    c = (codigo or "").upper()
    t = normalizar(titulo or "")
    if "VENOS" in t:
        return ["GV"]
    if "ARTERIAL" in t:
        return ["GA"]
    if "ORINA" in t or "EGO" in t.split() or c.startswith("LABURI") or c == "LABEGO":
        return ["EGO"]
    if "LIPID" in t:
        return ["LIP", "QUI"]
    if "TIROID" in t:
        return ["TIR"]
    if "HIERRO" in t or "FERRITINA" in t:
        return ["FE", "QUI"]
    tabla = {
        "LABHEM": ["HEM"],
        "LABQUI": ["QUI", "BIO", "LIP", "FE"],
        "LABCOA": ["COA"],
        "LABEAB": ["GA", "GV"],   # equilibrio ácido-base; el título decide arriba
        "LABINM": ["BIO", "TIR", "FE"],
    }
    return tabla.get(c, ["BIO", "QUI"])


# Nombre en el portal -> posibles etiquetas en la columna A (ya normalizadas).
# Se prueban en orden; también se intenta siempre la etiqueta idéntica.
ALIAS = {
    "LEUCOCITOS": ["LEU", "LEUCOCITOS"],
    "ERITROCITOS": ["ERIT", "ERITROCITOS"],
    "HEMOGLOBINA": ["HB", "HEMOGLOBINA", "HEMOGLOBINA TOTAL"],
    "HEMATOCRITO": ["HTC", "HEMATOCRITO"],
    "PLAQUETAS": ["PLT"],
    "VOLUMEN CORPUSCULAR MEDIO": ["VCM"],
    "VOLUMEN GLOBULAR MEDIO": ["VCM"],
    "HEMOGLOBINA CORPUSCULAR MEDIA": ["HB C M"],
    "CONCENTRACION MEDIA DE HEMOGLOBINA CORPUSCULAR": ["CMHC"],
    "CONCENTRACION DE HEMOGLOBINA CORPUSCULAR MEDIA": ["CMHC"],
    "ANCHO DE DISTRIBUCION ERITROCITARIA": ["RDW"],
    "RDW CV": ["RDW"],
    "VOLUMEN PLAQUETARIO MEDIO": ["MPV"],
    "NEUTROFILOS %": ["NEU %"], "NEUTROFILOS": ["NEU %"],
    "LINFOCITOS %": ["LINF %"], "LINFOCITOS": ["LINF %"],
    "MONOCITOS %": ["MON %"], "MONOCITOS": ["MON %"],
    "EOSINOFILOS %": ["EOS %"], "EOSINOFILOS": ["EOS %"],
    "BASOFILOS %": ["BAS %"], "BASOFILOS": ["BAS %"],
    "GRANULOCITOS INMADUROS %": ["GRAN INM %"], "GRANULOCITOS INMADUROS": ["GRAN INM %"],
    "NEUTROFILOS #": ["NEU #"], "NEUTROFILOS ABSOLUTOS": ["NEU #"],
    "LINFOCITOS #": ["LINF #"], "LINFOCITOS ABSOLUTOS": ["LINF #"],
    "MONOCITOS #": ["MON #"], "MONOCITOS ABSOLUTOS": ["MON #"],
    "EOSINOFILOS #": ["EOS #"], "EOSINOFILOS ABSOLUTOS": ["EOS #"],
    "BASOFILOS #": ["BAS #"], "BASOFILOS ABSOLUTOS": ["BAS #"],
    "GRANULOCITOS INMADUROS #": ["GRAN INM #"],
    "NITROGENO UREICO": ["BUN"], "NITROGENO UREICO BUN": ["BUN"],
    "RELACION BUN/CREATININA": ["BUN/CR"],
    "ALBUMINA/GLOBULINA": ["ALBUMINA/GLOBULINA"], "RELACION A/G": ["ALBUMINA/GLOBULINA"],
    "PROTEINAS TOTALES": ["PROTEINAS"],
    "ASPARTATO AMINOTRANSFERASA": ["AST"], "TGO": ["AST"], "AST TGO": ["AST"],
    "ALANINO AMINOTRANSFERASA": ["ALT"], "TGP": ["ALT"], "ALT TGP": ["ALT"],
    "FOSFATASA ALCALINA": ["FA"],
    "DESHIDROGENASA LACTICA": ["DHL"], "LDH": ["DHL"],
    "CLORURO": ["CLORO"], "CLORO": ["CLORO"],
    "CALCIO SERICO": ["CALCIO"],
    "TIEMPO DE TROMBOPLASTINA PARCIAL": ["TIEMPO PARCIAL DE TROMBOPLASTINA"],
    "TTP": ["TIEMPO PARCIAL DE TROMBOPLASTINA"], "TPT": ["TIEMPO PARCIAL DE TROMBOPLASTINA"],
    "TP": ["TIEMPO DE PROTROMBINA"],
    "TT": ["TIEMPO DE TROMBINA"],
    "PH": ["PH"],
    "SODIO": ["SODIO", "NA"],
    "POTASIO": ["POTASIO", "K"],
    "CALCIO IONIZADO": ["CALCIO IONICO"],
    "SATURACION DE O2": ["SAT O2"], "SATURACION DE OXIGENO": ["SAT O2"], "SO2": ["SAT O2"],
    "EXCESO DE BASE": ["EXCESO DE BASE"], "BE": ["EXCESO DE BASE"], "BEECF": ["EXCESO DE BASE"],
    "BICARBONATO": ["HCO3"], "HCO3 ACT": ["HCO3"],
    "CO2 TOTAL": ["CO2T"], "TCO2": ["CO2T"],
    "ACIDO LACTICO": ["LACTATO"],
    "OXIHEMOGLOBINA": ["O2HB"], "DESOXIHEMOGLOBINA": ["HHB"],
    "CARBOXIHEMOGLOBINA": ["COHB"], "METAHEMOGLOBINA": ["METHB"],
    "CREATINFOSFOQUINASA": ["CPK"], "CK TOTAL": ["CPK"], "CREATIN CINASA": ["CPK"],
    "CK MB": ["CK MB"], "CPK MB": ["CK MB"],
    "TROPONINA T ULTRASENSIBLE": ["CTNT"], "TROPONINA T": ["CTNT"],
    "TROPONINA I": ["CTNI"], "TROPONINA I ULTRASENSIBLE": ["CTNI"],
    "DIMERO D": ["DIMERO D"],
    "PEPTIDO NATRIURETICO TIPO B": ["BNP"],
    "NT PROBNP": ["NT PROBNP"], "PRO BNP": ["NT PROBNP"], "NT PRO BNP": ["NT PROBNP"],
    "PROTEINA C REACTIVA": ["PCR"], "PROTEINA C REACTIVA ULTRASENSIBLE": ["PCR"],
    "VELOCIDAD DE SEDIMENTACION GLOBULAR": ["VSG"],
    "PROCALCITONINA": ["PROCAL"],
    "HEMOGLOBINA GLICOSILADA": ["HBA1C"], "HBA1C": ["HBA1C"],
    "COLESTEROL HDL": ["HDL"], "COLESTEROL LDL": ["LDL"],
    "TIROXINA LIBRE": ["T4 LIBRE"], "TRIYODOTIRONINA LIBRE": ["T3 LIBRE"],
    "HORMONA ESTIMULANTE DE TIROIDES": ["TSH"],
    "CAPACIDAD TOTAL DE FIJACION DE HIERRO": ["TIBC"],
    "PORCENTAJE DE SATURACION DE TRANSFERRINA": ["% SAT TRANSFERRINA"],
    "DENSIDAD": ["DENSIDAD URINARIA"],
    "PROTEINAS": ["PROTEINAS"],
    "ESTERASA LEUCOCITARIA": ["LEUCOCITOS ESTERASA"],
    "HEMOGLOBINA EN ORINA": ["ERITROCITOS"], "SANGRE": ["ERITROCITOS"],
    "CELULAS EPITELIALES": ["CELULAS EPITELIALES"],
    "UROBILINOGENO": ["UROBILINOGENO"],
}


def etiqueta(texto: str) -> str:
    """Normaliza una etiqueta de la columna A: quita sufijos '_2' y puntos."""
    t = normalizar(texto)
    t = re.sub(r"\s+\d$", "", t.replace("_", " ")).strip()  # 'SODIO 2' -> 'SODIO'
    return t


@dataclass
class Plantilla:
    """Columna A de una pestaña de cama, con secciones detectadas."""
    filas: dict[int, str]                       # fila (1-based) -> etiqueta normalizada
    crudas: dict[int, str]                      # fila -> texto original
    secciones: dict[str, tuple[int, int]] = field(default_factory=dict)  # (ini, fin)
    fila_extras: int | None = None

    @classmethod
    def desde_columna_a(cls, col_a: list[str]) -> "Plantilla":
        crudas = {i + 1: (v or "") for i, v in enumerate(col_a)}
        filas = {r: etiqueta(v) for r, v in crudas.items() if str(v).strip()}
        p = cls(filas=filas, crudas=crudas)
        encabezados = []
        for r, lab in sorted(filas.items()):
            lab_s = lab.rstrip(":").strip()
            for clave, nombres in SECCIONES.items():
                if lab_s in nombres and clave not in [c for c, _ in encabezados]:
                    encabezados.append((clave, r))
                    break
        encabezados.sort(key=lambda x: x[1])
        ultimo = max(crudas) if crudas else 0
        for i, (clave, r) in enumerate(encabezados):
            fin = encabezados[i + 1][1] - 1 if i + 1 < len(encabezados) else ultimo
            p.secciones[clave] = (r + 1, fin)
            if clave == "EXTRAS":
                p.fila_extras = r
        return p

    def _buscar_en(self, candidatos: list[str], ini: int, fin: int, usadas: set[int]) -> int | None:
        for cand in candidatos:
            for r in range(ini, fin + 1):
                if r in usadas:
                    continue
                if self.filas.get(r) == cand:
                    return r
        return None

    def fila_para(self, analito: str, secciones: list[str], usadas: set[int]) -> int | None:
        """Fila para un analito, o None (-> EXTRAS)."""
        n = etiqueta(analito)
        candidatos = [n] + [etiqueta(a) for a in ALIAS.get(n, [])]
        for s in secciones:
            if s in self.secciones:
                ini, fin = self.secciones[s]
                r = self._buscar_en(candidatos, ini, fin, usadas)
                if r:
                    return r
        # fuera de su sección: solo si la etiqueta es única en la plantilla
        # (evita meter un sodio de gases en química o al revés)
        limite = self.fila_extras or (max(self.filas) if self.filas else 0)
        for cand in candidatos:
            hits = [r for r, lab in self.filas.items() if lab == cand and r < limite and r not in usadas]
            todas = [r for r, lab in self.filas.items() if lab == cand and r < limite]
            if len(todas) == 1 and hits:
                return hits[0]
        return None


# -------------------------------------------------------------- encabezados ---

_ENC = re.compile(r"^\s*(\d{1,2})/(\d{1,2})(?:/(\d{2,4}))?\s*(?:\(\s*(\d{1,2}):(\d{2})\s*\))?\s*$")


def leer_encabezado(texto: str) -> tuple[int, int, int | None, int | None] | None:
    """'12/11 (07:30)' -> (12, 11, 7, 30); '12/11' -> (12, 11, None, None)."""
    m = _ENC.match(str(texto or ""))
    if not m:
        return None
    d, mes, _, h, mi = m.groups()
    return (int(d), int(mes), int(h) if h else None, int(mi) if mi else None)


def encabezado(fecha: datetime) -> str:
    return fecha.strftime("%d/%m (%H:%M)")


def fecha_de_encabezado(texto: str, referencia: datetime) -> datetime | None:
    """Convierte un encabezado a datetime; infiere el año (si el mes queda en el
    futuro respecto a la referencia, es del año anterior)."""
    e = leer_encabezado(texto)
    if not e:
        return None
    d, mes, h, mi = e
    anio = referencia.year - (1 if mes > referencia.month + 1 else 0)
    try:
        return datetime(anio, mes, d, h if h is not None else 0, mi if mi is not None else 0)
    except ValueError:
        return None


_FECHA = re.compile(
    r"(\d{1,2})[/-](\d{1,2})[/-](\d{2,4})[ T,]+(\d{1,2}):(\d{2})(?::\d{2})?\s*([ap]\.?\s?m\.?)?",
    re.IGNORECASE,
)


def leer_fecha_portal(texto: str) -> datetime | None:
    """'25/11/2026 07:31:00 a. m.' -> datetime."""
    m = _FECHA.search(texto or "")
    if not m:
        return None
    d, mes, a, h, mi, ampm = m.groups()
    a, h = int(a), int(h)
    if a < 100:
        a += 2000
    if ampm:
        p = ampm.lower().replace(".", "").replace(" ", "")
        if p == "pm" and h < 12:
            h += 12
        if p == "am" and h == 12:
            h = 0
    try:
        return datetime(a, int(mes), int(d), h, int(mi))
    except ValueError:
        return None
