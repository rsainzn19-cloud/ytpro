#!/usr/bin/env python3
"""Zambrabot: labs del portal Resultados iPLUS -> censo de Cardiología.

    python zambrabot.py               corrida normal (escribe en SHEET_ID)
    python zambrabot.py --prueba      escribe en SHEET_ID_PRUEBA (copia)
    python zambrabot.py --simular     lee todo y muestra el plan, no escribe
    python zambrabot.py --verificar 202,212,443   compara Sheet vs portal
    python zambrabot.py --descubrir   graba la pestaña Network del portal

En pantalla solo aparecen camas e iniciales."""
from __future__ import annotations

import argparse
import asyncio
import os
import sys
from datetime import datetime
from pathlib import Path

from dotenv import load_dotenv

AQUI = Path(__file__).resolve().parent
sys.path.insert(0, str(AQUI))

from zb import portal as zportal  # noqa: E402
from zb.censo import (Pestana, PlanCama, col_letra, elegir_pestana, leer_censo,  # noqa: E402
                      planear, titulo_nueva_pestana)
from zb.imagenes import generar_png  # noqa: E402
from zb.nombres import normalizar  # noqa: E402
from zb.valores import encabezado, fecha_de_encabezado, secciones_de_estudio  # noqa: E402


def env(nombre: str, defecto: str | None = None, requerido: bool = True) -> str:
    v = os.getenv(nombre, defecto)
    if requerido and not v:
        raise SystemExit(f"Falta {nombre} en .env (ver .env.example)")
    return v or ""


def args():
    ap = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    ap.add_argument("--prueba", action="store_true", help="usar SHEET_ID_PRUEBA")
    ap.add_argument("--sheet", help="ID del Sheet (sobrescribe .env)")
    ap.add_argument("--simular", action="store_true", help="no escribir nada en el Sheet")
    ap.add_argument("--camas", help="solo estas camas, ej. 202,212")
    ap.add_argument("--verificar", metavar="CAMAS", help="comparar Sheet vs portal en estas camas")
    ap.add_argument("--descubrir", action="store_true", help="grabar tráfico del portal (DevTools/Network)")
    ap.add_argument("--una-lectura", action="store_true", help="no hacer la doble lectura")
    ap.add_argument("--ver", action="store_true", help="mostrar el navegador")
    return ap.parse_args()


def ultima_fecha(pe: Pestana, hoy: datetime) -> datetime | None:
    fechas = [fecha_de_encabezado(t, hoy) for t in pe.fila2[1:] if str(t).strip()]
    fechas = [f for f in fechas if f]
    return max(fechas) if fechas else None


async def principal(a) -> int:
    load_dotenv(AQUI / ".env")
    url = env("PORTAL_URL", "https://resultados.tecsalud.mx")
    usuario, password = env("PORTAL_USUARIO"), env("PORTAL_PASSWORD")
    zportal.cargar_selectores(AQUI / "portal_sel.json")

    if a.descubrir:
        r = await zportal.descubrir(url, usuario, password, AQUI / "descubrimiento")
        print(f"Listo: {r}")
        print("Hay API JSON: SÍ" if zportal.hay_api(r) else
              "No vi respuestas JSON: se queda el modo navegador (Playwright).")
        print("resumen_red.txt y dom.txt no tienen valores de pacientes; red.har SÍ, no lo compartas.")
        return 0

    from zb.sheets import Libro, conectar
    sheet_id = a.sheet or (env("SHEET_ID_PRUEBA") if a.prueba else env("SHEET_ID"))
    api = conectar(AQUI / env("GOOGLE_CREDENCIALES", "credentials.json"), AQUI / "token.json")
    libro = Libro(api, sheet_id)
    hoy = datetime.now()

    pacientes, avisos_censo = leer_censo(libro.leer_censo())
    filtro = a.verificar or a.camas
    if filtro:
        quiero = {c.strip() for c in filtro.split(",")}
        pacientes = [p for p in pacientes if p.cama in quiero]

    titulos_cama = [t for t in libro.hojas if t[:3].isdigit()]
    pestanas = libro.leer_pestanas(titulos_cama)
    if "202" not in pestanas:
        raise SystemExit("No encontré la pestaña 202 (plantilla)")

    # ---- pestaña de cada paciente (creando la que falte, copia de la 202)
    estructura_nuevas: list[dict] = []
    asignadas: dict[str, Pestana] = {}
    b1_por_escribir: dict[str, str] = {}
    siguiente_id = max(p["sheetId"] for p in libro.hojas.values()) + 1
    existentes = set(libro.hojas)
    for p in pacientes:
        pe, motivo = elegir_pestana(p.cama, p, pestanas)
        if pe:
            asignadas[p.cama] = pe
            if motivo == "b1_vacio":
                b1_por_escribir[p.cama] = p.nombre
            continue
        if a.verificar:
            continue
        titulo = titulo_nueva_pestana(p.cama, hoy, existentes)
        existentes.add(titulo)
        base = pestanas["202"]
        orden = sorted([t for t in libro.hojas if t[:3].isdigit()] + [titulo], key=lambda t: (t[:3], t))
        vecina = orden[orden.index(titulo) - 1] if orden.index(titulo) else None
        indice = libro.hojas[vecina]["index"] + 1 if vecina in libro.hojas else 2
        estructura_nuevas += libro.solicitudes_pestana_nueva(base, titulo, siguiente_id, indice, p.nombre)
        nueva = Pestana(titulo=titulo, sheet_id=siguiente_id, filas_grid=base.filas_grid,
                        columnas_grid=base.columnas_grid, col_a=base.col_a, fila2=[base.fila2[0] if base.fila2 else "Fecha"],
                        b1=p.nombre)
        pestanas[titulo] = nueva
        asignadas[p.cama] = nueva
        avisos_censo.append(f"Cama {p.cama} ({p.iniciales}): pestaña nueva '{titulo}' (copia de la 202)")
        siguiente_id += 1

    # ---- leer portal en paralelo
    trabajo = []
    for p in pacientes:
        if p.cama not in asignadas:
            continue
        desde = zportal.rango_busqueda(ultima_fecha(asignadas[p.cama], hoy), p.ingreso, hoy,
                                       int(env("DIAS_MAX", "7")))
        trabajo.append((p, desde))
    print(f"Leyendo {len(trabajo)} pacientes del portal ({env('PARALELO', '4')} en paralelo)...")
    async with zportal.PortalUI(url, usuario, password, headless=not a.ver,
                                paralelo=int(env("PARALELO", "4")),
                                carpeta_debug=AQUI / "salida" / "errores") as portal:
        lecturas = await portal.leer_varios(trabajo, hoy, doble=not a.una_lectura)

    if a.verificar:
        return verificar(lecturas, asignadas, libro)

    # ---- planear
    planes: list[PlanCama] = []
    for lec in lecturas:
        p = lec.paciente
        if not lec.encontrado:
            continue
        plan = planear(asignadas[p.cama], p, lec.estudios, hoy)
        if p.cama in b1_por_escribir and not plan.vacio:
            plan.celdas[(1, 1)] = b1_por_escribir[p.cama]
        plan.avisos += lec.avisos
        planes.append(plan)

    estructura = estructura_nuevas + libro.solicitudes_estructura(planes, pestanas)
    datos = libro.datos_valores([pl for pl in planes if not pl.vacio])

    # ---- escribir (una sola vez, en lote)
    malos: list[str] = []
    if a.simular:
        print("\n[SIMULACIÓN] No se escribió nada en el Sheet.")
    elif datos or estructura_nuevas:
        libro.escribir(estructura, datos)
        malos = libro.verificar_escrito(datos)

    # ---- imágenes
    carpeta_png = AQUI / env("CARPETA_PNG", "salida/png", requerido=False) / hoy.strftime("%Y-%m-%d")
    pngs = [generar_png(carpeta_png, pl.cama, pl.iniciales, pl.muestras) for pl in planes if pl.muestras]

    resumen(lecturas, planes, avisos_censo, malos, pngs, carpeta_png, a.simular)
    return 1 if malos else 0


def verificar(lecturas, asignadas, libro) -> int:
    """Compara, para cada muestra del portal, el valor del Sheet en la columna
    con ese encabezado. Solo muestra cama, iniciales, analito y valores."""
    print("\n=== VERIFICACIÓN Sheet vs portal ===")
    from zb.sheets import _rango
    titulos = sorted({pe.titulo for pe in asignadas.values()})
    hoja = {}
    for t, grid in zip(titulos, libro.valores([_rango(t, "A1:ZZ600") for t in titulos])):
        for r, fila in enumerate(grid, start=1):
            for j, v in enumerate(fila):
                hoja[(t, r, j)] = str(v)
    fallas = 0
    for lec in lecturas:
        p = lec.paciente
        pe = asignadas.get(p.cama)
        if not lec.encontrado or not pe:
            print(f"Cama {p.cama} ({p.iniciales}): no se encontró en el portal")
            continue
        from zb.valores import Plantilla
        plantilla = Plantilla.desde_columna_a(pe.col_a)
        cols = {str(t).strip(): j for j, t in enumerate(pe.fila2) if str(t).strip()}
        total = ok = 0
        difs = []
        for e in lec.estudios:
            j = cols.get(encabezado(e.fecha)) or cols.get(e.fecha.strftime("%d/%m"))
            if j is None:
                difs.append(f"  {encabezado(e.fecha)} {e.codigo}: no hay columna en el Sheet")
                continue
            usadas: set[int] = set()
            for analito, v in e.valores:
                r = plantilla.fila_para(analito, secciones_de_estudio(e.codigo, e.titulo), usadas)
                if r is None and plantilla.fila_extras:            # buscar en EXTRAS
                    lab = normalizar(analito)
                    r = next((f for f, t in plantilla.filas.items()
                              if f > plantilla.fila_extras and t == lab), None)
                if r is None:
                    difs.append(f"  {encabezado(e.fecha)} {analito}: no está en el Sheet (ni en EXTRAS)")
                    continue
                usadas.add(r)
                total += 1
                celda = hoja.get((pe.titulo, r, j), "")
                if celda == v:
                    ok += 1
                else:
                    difs.append(f"  {encabezado(e.fecha)} {analito}: Sheet={celda or '(vacío)'} portal={v} "
                                f"[{col_letra(j)}{r}]")
        fallas += len(difs)
        print(f"Cama {p.cama} ({p.iniciales}): {ok}/{total} coinciden")
        for d in difs:
            print(d)
    return 1 if fallas else 0


def resumen(lecturas, planes, avisos_censo, malos, pngs, carpeta_png, simulado) -> None:
    print("\n" + "=" * 60)
    print(f"ZAMBRABOT · {datetime.now():%d/%m/%Y %H:%M}" + ("  (SIMULACIÓN)" if simulado else ""))
    print("=" * 60)
    act = [pl for pl in planes if not pl.vacio]
    print("\nACTUALIZADAS:" if act else "\nACTUALIZADAS: ninguna (sin labs nuevos)")
    for pl in sorted(act, key=lambda x: x.cama):
        print(f"  Cama {pl.cama} ({pl.iniciales}): {', '.join(pl.columnas_nuevas)}")
    sin_nuevo = [pl for pl in planes if pl.vacio]
    if sin_nuevo:
        print("\nSIN LABS NUEVOS: " + ", ".join(f"{pl.cama} ({pl.iniciales})" for pl in sorted(sin_nuevo, key=lambda x: x.cama)))
    nf = [lec.paciente for lec in lecturas if not lec.encontrado]
    print("\nNO ENCONTRADOS EN EL PORTAL:" + ("" if nf else " ninguno"))
    for p in sorted(nf, key=lambda x: x.cama):
        print(f"  Cama {p.cama} ({p.iniciales})")
    ex = [pl for pl in act if pl.extras]
    print("\nA EXTRAS (amarillo):" + ("" if ex else " nada"))
    for pl in ex:
        print(f"  Cama {pl.cama} ({pl.iniciales}): {'; '.join(pl.extras)}")
    av = [(pl.cama, pl.iniciales, x) for pl in planes for x in pl.avisos]
    av += [(lec.paciente.cama, lec.paciente.iniciales, x) for lec in lecturas if not lec.encontrado for x in lec.avisos]
    if av or avisos_censo:
        print("\nAVISOS:")
        for x in avisos_censo:
            print(f"  {x}")
        for cama, ini, x in av:
            print(f"  Cama {cama} ({ini}): {x}")
    if malos:
        print(f"\n¡OJO! {len(malos)} celdas no coinciden al releer: {', '.join(malos[:20])}")
    elif act and not simulado:
        print("\nVerificación: todo lo escrito se releyó y coincide.")
    if pngs:
        print(f"\nPNG ({len(pngs)}): {carpeta_png}")


if __name__ == "__main__":
    sys.exit(asyncio.run(principal(args())))
