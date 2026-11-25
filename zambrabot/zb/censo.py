"""Lógica del censo, sin red: leer la pestaña CENSO, ubicar la pestaña de
cada cama y planear qué celdas escribir. Todo se puede probar sin Google."""
from __future__ import annotations

import re
from collections import defaultdict
from dataclasses import dataclass, field
from datetime import datetime

from .modelo import Estudio, Paciente
from .nombres import mismo_paciente, normalizar
from .valores import Plantilla, encabezado, fecha_de_encabezado, leer_encabezado, secciones_de_estudio

# ------------------------------------------------------------------ CENSO ---


def _fecha_censo(texto: str) -> datetime | None:
    m = re.match(r"\s*(\d{1,2})/(\d{1,2})/(\d{4})", str(texto or ""))
    if not m:
        return None
    try:
        return datetime(int(m.group(3)), int(m.group(2)), int(m.group(1)))
    except ValueError:
        return None


def leer_censo(filas: list[list[str]]) -> tuple[list[Paciente], list[str]]:
    """Devuelve (pacientes activos con cama numérica, avisos).
    Busca la fila de encabezados ('Cama', 'Nombre', 'Egreso'...)."""
    avisos: list[str] = []
    idx = {}
    inicio = None
    for i, fila in enumerate(filas):
        norm = [normalizar(c) for c in fila]
        if "CAMA" in norm and "NOMBRE" in norm:
            idx = {n: j for j, n in enumerate(norm)}
            inicio = i + 1
            break
    if inicio is None:
        raise ValueError("No encontré la fila de encabezados (Cama / Nombre) en CENSO")

    def col(fila, nombre):
        j = idx.get(nombre)
        return (fila[j] if j is not None and j < len(fila) else "").strip()

    pacientes = []
    for fila in filas[inicio:]:
        cama, nombre = col(fila, "CAMA"), col(fila, "NOMBRE")
        if not nombre or not cama:
            continue                                   # filas de sección (UTIA, PISO...)
        if col(fila, "EGRESO"):
            continue                                   # egresado
        if not re.match(r"^\d{3}", cama):
            avisos.append(f"Cama '{cama}': no es cama numerada (UTIM/HD), no se procesa")
            continue
        pacientes.append(Paciente(cama=re.match(r"^\d{3}", cama).group(0), nombre=nombre,
                                  ingreso=_fecha_censo(col(fila, "INGRESO"))))
    return pacientes, avisos


# --------------------------------------------------------- pestaña de cama ---


@dataclass
class Pestana:
    titulo: str
    sheet_id: int
    filas_grid: int
    columnas_grid: int
    col_a: list[str]
    fila2: list[str]          # encabezados (fila 2) desde la columna A
    b1: str = ""              # nombre del paciente

    @property
    def plantilla(self) -> Plantilla:
        return Plantilla.desde_columna_a(self.col_a)


def elegir_pestana(cama: str, paciente: Paciente, pestanas: dict[str, Pestana]) -> tuple[Pestana | None, str]:
    """('202', '202 (12/11)', '443.') -> la pestaña de esa cama cuyo B1 es el
    paciente. Regresa (pestaña|None, motivo)."""
    cands = [p for t, p in pestanas.items() if re.match(rf"^{cama}(\D|$)", t.strip())]
    if not cands:
        return None, "sin_pestana"
    for p in cands:
        if p.b1.strip() and mismo_paciente(paciente.nombre, p.b1):
            return p, "ok"
    vacias = [p for p in cands if not p.b1.strip()]
    if vacias:
        return vacias[0], "b1_vacio"
    return None, "otro_paciente"


def titulo_nueva_pestana(cama: str, hoy: datetime, existentes: set[str]) -> str:
    t = cama if cama not in existentes else f"{cama} ({hoy:%d/%m})"
    n = 2
    while t in existentes:
        t = f"{cama} ({hoy:%d/%m}) {n}"
        n += 1
    return t


# ------------------------------------------------------------------ plan ---


def col_letra(idx0: int) -> str:
    s, n = "", idx0 + 1
    while n:
        n, r = divmod(n - 1, 26)
        s = chr(65 + r) + s
    return s


@dataclass
class PlanCama:
    cama: str
    iniciales: str
    titulo: str
    sheet_id: int
    insertar_columnas: list[int] = field(default_factory=list)   # índices 0-based, en orden
    celdas: dict[tuple[int, int], str] = field(default_factory=dict)  # (fila 1-based, col 0-based) -> texto
    amarillas: list[tuple[int, int]] = field(default_factory=list)    # etiquetas de EXTRAS
    filas_necesarias: int = 0
    columnas_nuevas: list[str] = field(default_factory=list)          # encabezados nuevos
    extras: list[str] = field(default_factory=list)                   # "ANALITO=valor"
    avisos: list[str] = field(default_factory=list)
    muestras: list[tuple[datetime, list[tuple[str, str]]]] = field(default_factory=list)  # para el PNG

    @property
    def vacio(self) -> bool:
        return not self.celdas


def _agrupar_por_hora(estudios: list[Estudio]) -> dict[datetime, list[Estudio]]:
    g: dict[datetime, list[Estudio]] = defaultdict(list)
    for e in estudios:
        g[e.fecha.replace(second=0, microsecond=0)].append(e)
    return dict(sorted(g.items()))


def _es_panel_negativo(e: Estudio) -> bool:
    neg = re.compile(r"^(no detectad[oa]|negativ[oa])$", re.IGNORECASE)
    return len(e.valores) >= 5 and all(neg.match(v.strip()) for _, v in e.valores)


def planear(pestana: Pestana, paciente: Paciente, estudios: list[Estudio], hoy: datetime) -> PlanCama:
    plan = PlanCama(cama=paciente.cama, iniciales=paciente.iniciales,
                    titulo=pestana.titulo, sheet_id=pestana.sheet_id)
    plantilla = pestana.plantilla

    # -- encabezados existentes (fila 2, desde columna B)
    existentes: list[tuple[int, str, datetime | None]] = []
    for j, txt in enumerate(pestana.fila2[1:], start=1):
        if str(txt).strip():
            existentes.append((j, str(txt).strip(), fecha_de_encabezado(txt, hoy)))
    ya = {encabezado(f) for _, t, f in existentes if f and leer_encabezado(t)[2] is not None}
    dias_sin_hora = {(f.day, f.month) for _, t, f in existentes if f and leer_encabezado(t)[2] is None}

    grupos = _agrupar_por_hora(estudios)
    por_dia = defaultdict(int)
    for f in grupos:
        por_dia[(f.day, f.month)] += 1

    nuevas: list[tuple[datetime, list[Estudio]]] = []
    for f, es in grupos.items():
        if encabezado(f) in ya:
            continue                                         # ya cargada: no duplicar
        if (f.day, f.month) in dias_sin_hora:
            if por_dia[(f.day, f.month)] == 1:
                continue                                     # 'DD/MM' sin hora = esa misma muestra
            plan.avisos.append(f"{f:%d/%m}: hay columna sin hora y {por_dia[(f.day, f.month)]} "
                               "muestras ese día; revisar a mano")
            continue
        nuevas.append((f, es))
    if not nuevas:
        return plan

    # -- posiciones finales, ordenadas por fecha de izquierda a derecha
    ultima_col = max([j for j, _, _ in existentes], default=0)
    secuencia = [(f or datetime.min, False, j) for j, _, f in existentes]
    secuencia += [(f, True, None) for f, _ in nuevas]
    # estable: lo existente conserva su orden relativo
    orden_exist = sorted(secuencia, key=lambda x: (x[0], 0 if not x[1] else 1))
    # si lo existente no está ordenado, no lo movemos: solo agregamos al final
    exist_ordenado = [x for x in orden_exist if not x[1]] == [x for x in secuencia if not x[1]]
    if not exist_ordenado:
        plan.avisos.append("columnas existentes fuera de orden; las nuevas van al final")
        orden_exist = [x for x in secuencia if not x[1]] + sorted([x for x in secuencia if x[1]])
    col_de_nueva: dict[datetime, int] = {}
    for pos, (f, es_nueva, _) in enumerate(orden_exist, start=1):
        if es_nueva:
            col_de_nueva[f] = pos
    # Hay columnas vacías entre B y la última con encabezado? Las respetamos:
    # si no hay huecos, pos == índice real; con huecos, insertamos tras la última.
    if ultima_col != len(existentes):
        base = ultima_col
        col_de_nueva = {f: base + i for i, (f, _) in enumerate(sorted(nuevas), start=1)}
        plan.avisos.append("hay columnas sin encabezado en la fila 2; las nuevas van al final")
    plan.insertar_columnas = sorted(col_de_nueva.values())

    # -- filas de EXTRAS
    extras_por_etiqueta: dict[str, int] = {}
    siguiente_extra = None
    if plantilla.fila_extras:
        ini, fin = plantilla.secciones["EXTRAS"]
        for r in range(ini, fin + 1):
            if plantilla.filas.get(r):
                extras_por_etiqueta[plantilla.filas[r]] = r
        ocupadas = [r for r in range(ini, fin + 1) if plantilla.filas.get(r)]
        siguiente_extra = (max(ocupadas) if ocupadas else plantilla.fila_extras) + 1
    else:
        ultima = max(plantilla.filas) if plantilla.filas else 1
        fila_enc = ultima + 2
        plan.celdas[(fila_enc, 0)] = "EXTRAS"
        plan.amarillas.append((fila_enc, 0))
        siguiente_extra = fila_enc + 1

    fila_aisl = None
    if "AISL" in plantilla.secciones:
        fila_aisl = plantilla.secciones["AISL"][0]

    for f, es in nuevas:
        c = col_de_nueva[f]
        plan.celdas[(2, c)] = encabezado(f)
        plan.columnas_nuevas.append(encabezado(f))
        usadas: set[int] = set()
        para_png: list[tuple[str, str]] = []
        for e in es:
            if e.parcial:
                plan.avisos.append(f"{encabezado(f)} {e.codigo}: parcialmente validada")
            if _es_panel_negativo(e) and fila_aisl:
                nota = f"{e.titulo or e.codigo}: todo No detectado"
                previa = plan.celdas.get((fila_aisl, c))
                plan.celdas[(fila_aisl, c)] = f"{previa}; {nota}" if previa else nota
                para_png.append((e.titulo or e.codigo, "todo No detectado"))
                continue
            secs = secciones_de_estudio(e.codigo, e.titulo)
            for analito, valor in e.valores:
                para_png.append((analito, valor))
                r = plantilla.fila_para(analito, secs, usadas)
                if r is None:
                    lab = normalizar(analito)
                    if lab in extras_por_etiqueta:
                        r = extras_por_etiqueta[lab]
                    else:
                        r = siguiente_extra
                        siguiente_extra += 1
                        extras_por_etiqueta[lab] = r
                        plan.celdas[(r, 0)] = analito.strip()
                        plan.amarillas.append((r, 0))
                    plan.extras.append(f"{analito.strip()}={valor}")
                if (r, c) in plan.celdas and plan.celdas[(r, c)] != valor:
                    plan.avisos.append(f"{encabezado(f)} {analito}: dos valores distintos "
                                       f"({plan.celdas[(r, c)]} / {valor}); se deja el primero")
                    continue
                usadas.add(r)
                plan.celdas[(r, c)] = valor
        plan.muestras.append((f, para_png))

    plan.filas_necesarias = max(r for r, _ in plan.celdas)
    return plan
