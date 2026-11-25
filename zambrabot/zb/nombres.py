"""Nombres de pacientes: separar en nombres/apellidos, generar variantes de
búsqueda e iniciales. Nada de aquí imprime nombres completos."""
from __future__ import annotations

import re
import unicodedata

# Partículas que forman parte de un apellido compuesto ("De la Garza", "del Río").
PARTICULAS = {"de", "del", "la", "las", "los", "y", "san", "santa", "van", "von", "di", "da"}


def sin_acentos(texto: str) -> str:
    nfkd = unicodedata.normalize("NFKD", texto)
    return "".join(c for c in nfkd if not unicodedata.combining(c))


def normalizar(texto: str) -> str:
    """Mayúsculas, sin acentos, sin signos, espacios simples."""
    t = sin_acentos(str(texto)).upper()
    t = re.sub(r"[^A-Z0-9%#/ ]+", " ", t)
    return re.sub(r"\s+", " ", t).strip()


def _agrupar_apellidos(tokens: list[str]) -> list[list[str]]:
    """Agrupa tokens desde el final para que las partículas se peguen al
    apellido que sigue: ['Rosa','Elena','De','la','Garza','Soto'] ->
    [['Rosa'],['Elena'],['De','la','Garza'],['Soto']]."""
    grupos: list[list[str]] = []
    i = len(tokens) - 1
    while i >= 0:
        grupo = [tokens[i]]
        i -= 1
        while i >= 0 and tokens[i].lower() in PARTICULAS:
            grupo.insert(0, tokens[i])
            i -= 1
        grupos.insert(0, grupo)
    return grupos


def separar(nombre_completo: str) -> tuple[str, str, str]:
    """(nombres, apellido_paterno, apellido_materno). Supone que los dos
    últimos grupos son apellidos."""
    tokens = nombre_completo.split()
    if len(tokens) <= 1:
        return (nombre_completo.strip(), "", "")
    grupos = _agrupar_apellidos(tokens)
    if len(grupos) == 2:
        return (" ".join(grupos[0]), " ".join(grupos[1]), "")
    nombres = " ".join(t for g in grupos[:-2] for t in g)
    return (nombres, " ".join(grupos[-2]), " ".join(grupos[-1]))


def variantes_busqueda(nombre_completo: str) -> list[tuple[str, str, str]]:
    """Orden de la skill: tal cual -> sin acentos -> variantes del apellido
    -> solo el nombre. Sin repetidos."""
    n, p, m = separar(nombre_completo)
    candidatos = [
        (n, p, m),
        (sin_acentos(n), sin_acentos(p), sin_acentos(m)),
        # solo paterno (pacientes registrados sin materno o con otro materno)
        (sin_acentos(n), sin_acentos(p), ""),
        # solo materno como paterno (apellidos invertidos)
        (sin_acentos(n), sin_acentos(m), ""),
        # primer nombre + paterno
        (sin_acentos(n.split()[0]) if n else "", sin_acentos(p), ""),
        # solo nombre(s)
        (sin_acentos(n), "", ""),
    ]
    vistos, salida = set(), []
    for c in candidatos:
        clave = tuple(x.strip().lower() for x in c)
        if not any(clave) or clave in vistos:
            continue
        vistos.add(clave)
        salida.append(tuple(x.strip() for x in c))
    return salida


def iniciales(nombre_completo: str) -> str:
    tokens = [t for t in nombre_completo.split() if t.lower() not in PARTICULAS]
    return "".join(sin_acentos(t)[0].upper() for t in tokens if t)


def mismo_paciente(nombre_censo: str, nombre_portal: str) -> bool:
    """¿El nombre que regresa el portal corresponde al del censo?
    Pide al menos 2 palabras en común y que una sea apellido."""
    a = set(normalizar(nombre_censo).split()) - {p.upper() for p in PARTICULAS}
    b = set(normalizar(nombre_portal).split()) - {p.upper() for p in PARTICULAS}
    comunes = a & b
    if len(comunes) < 2:
        return False
    _, p, m = separar(nombre_censo)
    apellidos = set(normalizar(p + " " + m).split())
    return bool(comunes & apellidos)
