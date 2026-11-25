"""Portal Resultados iPLUS (resultados.tecsalud.mx).

  * `descubrir()`: equivalente a DevTools > Network. Graba el tráfico mientras
    haces una búsqueda y deja un resumen SIN datos de pacientes. Si ahí aparece
    una API JSON, se agrega aquí una clase PortalAPI con esas rutas (misma
    interfaz `leer_varios`) y el resto del script no cambia.
  * PortalUI: Playwright llena la búsqueda, abre cada tarjeta y lee la tabla.
    Los selectores están en SEL y se pueden ajustar en portal_sel.json.

Nada de este módulo imprime nombres: solo cama/iniciales."""
from __future__ import annotations

import asyncio
import json
import os
import re
from datetime import datetime, timedelta
from pathlib import Path
from urllib.parse import urlsplit

from .modelo import Estudio, Lectura, Paciente
from .nombres import mismo_paciente, variantes_busqueda
from .valores import leer_fecha_portal, limpiar_valor

CODIGO = re.compile(r"\bLAB[A-Z]{2,6}\b")

# Selectores por defecto. Se sobrescriben con portal_sel.json si existe.
SEL = {
    "usuario": "input[type=email], input[name*=usu i], input[id*=usu i], input[name*=user i], "
               "input[id*=user i], input[type=text]",
    "password": "input[type=password]",
    "entrar": "button[type=submit], input[type=submit], button:has-text('Ingresar'), "
              "button:has-text('Iniciar'), button:has-text('Entrar')",
    "nombres": r"nombre",
    "paterno": r"apellido\s*paterno|paterno",
    "materno": r"apellido\s*materno|materno",
    "fecha_ini": r"fecha\s*inicial|desde|fecha\s*inicio",
    "fecha_fin": r"fecha\s*final|hasta|fecha\s*fin",
    "buscar": r"buscar|consultar",
    "detalle_filas": "tr",
}


def cargar_selectores(ruta: Path) -> None:
    if ruta.exists():
        SEL.update(json.loads(ruta.read_text(encoding="utf-8")))


# ------------------------------------------------------------ utilidades ----

async def _campo(page, patron: str):
    """Campo por etiqueta, placeholder, name o id (en ese orden)."""
    rx = re.compile(patron, re.IGNORECASE)
    for loc in (page.get_by_label(rx), page.get_by_placeholder(rx)):
        if await loc.count():
            return loc.first
    css = ", ".join(f"input[{a}*='{p}' i]" for a in ("name", "id", "formcontrolname")
                    for p in re.split(r"\W+", patron.split("|")[-1]) if p)
    loc = page.locator(css)
    return loc.first if await loc.count() else None


async def _llenar(page, patron: str, valor: str) -> bool:
    c = await _campo(page, patron)
    if c is None:
        return False
    await c.fill("")
    if valor:
        await c.fill(valor)
    return True


async def _llenar_fecha(page, patron: str, f: datetime) -> None:
    c = await _campo(page, patron)
    if c is None:
        return
    tipo = (await c.get_attribute("type")) or ""
    await c.fill(f.strftime("%Y-%m-%d") if tipo == "date" else f.strftime("%d/%m/%Y"))
    await c.press("Tab")


# Marca con data-zb las "tarjetas": el contenedor más chico que tiene un
# código LABxxx y una fecha.
_JS_TARJETAS = r"""
() => {
  const cod = /\bLAB[A-Z]{2,6}\b/, fec = /\d{1,2}[\/-]\d{1,2}[\/-]\d{2,4}/;
  document.querySelectorAll('[data-zb]').forEach(e => e.removeAttribute('data-zb'));
  const todos = [...document.querySelectorAll('body *')].filter(e => {
    const t = e.innerText || ''; return e.offsetParent !== null && cod.test(t) && fec.test(t);
  });
  const minimos = todos.filter(e => !todos.some(o => o !== e && e.contains(o)));
  minimos.forEach((e, i) => e.setAttribute('data-zb', String(i)));
  return minimos.map(e => e.innerText);
}
"""

_JS_FILAS = r"""
(sel) => [...document.querySelectorAll(sel)]
  .filter(r => r.offsetParent !== null)
  .map(r => [...r.querySelectorAll('td,th')].map(c => (c.innerText || '').trim()))
  .filter(c => c.length >= 2)
"""


def _datos_tarjeta(texto: str) -> dict:
    cod = CODIGO.search(texto)
    m = re.search(r"creaci[oó]n\W*([^\n]+)", texto, re.IGNORECASE)
    fecha = leer_fecha_portal(m.group(1)) if m else leer_fecha_portal(texto)
    est = re.search(r"(parcialmente\s+validad[ao]|validad[ao]|pendiente|en\s+proceso)", texto, re.I)
    lineas = [l.strip() for l in texto.splitlines() if l.strip()]
    titulo = ""
    for i, l in enumerate(lineas):
        if cod and cod.group(0) in l:
            resto = l.replace(cod.group(0), "").strip(" -:|")
            titulo = resto or (lineas[i + 1] if i + 1 < len(lineas) else "")
            break
    return {"codigo": cod.group(0) if cod else "", "fecha": fecha, "titulo": titulo,
            "estatus": est.group(1) if est else "", "texto": texto}


def _valores_de_filas(filas: list[list[str]]) -> list[tuple[str, str]]:
    out, vistos = [], set()
    for celdas in filas:
        analito = celdas[0].strip()
        if not analito or re.match(r"^(prueba|analito|estudio|par[aá]metro|resultado)$", analito, re.I):
            continue
        v = limpiar_valor(celdas[1])
        if v is None or (analito, v) in vistos:
            continue
        vistos.add((analito, v))
        out.append((analito, v))
    return out


# --------------------------------------------------------------- PortalUI ---

class PortalUI:
    def __init__(self, url: str, usuario: str, password: str, headless: bool = True,
                 paralelo: int = 4, carpeta_debug: Path | None = None):
        self.url, self.usuario, self.password = url.rstrip("/"), usuario, password
        self.headless, self.paralelo, self.debug = headless, paralelo, carpeta_debug

    async def __aenter__(self):
        from playwright.async_api import async_playwright
        self._pw = await async_playwright().start()
        self.browser = await self._pw.chromium.launch(
            headless=self.headless, executable_path=os.getenv("CHROMIUM_PATH") or None)
        ctx = await self.browser.new_context(locale="es-MX")
        page = await ctx.new_page()
        await self.login(page)
        self.estado = await ctx.storage_state()
        await ctx.close()
        return self

    async def __aexit__(self, *a):
        await self.browser.close()
        await self._pw.stop()

    async def login(self, page) -> None:
        await page.goto(self.url + "/login", wait_until="networkidle")
        await page.locator(SEL["usuario"]).first.fill(self.usuario)
        await page.locator(SEL["password"]).first.fill(self.password)
        await page.locator(SEL["entrar"]).first.click()
        await page.wait_for_load_state("networkidle")
        await page.wait_for_timeout(1000)
        if await page.locator(SEL["password"]).count() and await page.locator(SEL["password"]).first.is_visible():
            raise SystemExit("No pude iniciar sesión en el portal: revisa PORTAL_USUARIO/PORTAL_PASSWORD en .env")

    async def _pagina(self):
        ctx = await self.browser.new_context(locale="es-MX", storage_state=self.estado)
        return ctx, await ctx.new_page()

    async def _buscar(self, page, n: str, p: str, m: str, desde: datetime, hasta: datetime) -> list[dict]:
        if "/login" in page.url or page.url == "about:blank":
            await page.goto(self.url, wait_until="networkidle")
        await _llenar(page, SEL["nombres"], n)
        await _llenar(page, SEL["paterno"], p)
        await _llenar(page, SEL["materno"], m)
        await _llenar_fecha(page, SEL["fecha_ini"], desde)
        await _llenar_fecha(page, SEL["fecha_fin"], hasta)
        await page.get_by_role("button", name=re.compile(SEL["buscar"], re.I)).first.click()
        await page.wait_for_load_state("networkidle")
        await page.wait_for_timeout(800)
        textos = await page.evaluate(_JS_TARJETAS)
        return [dict(_datos_tarjeta(t), idx=i) for i, t in enumerate(textos)]

    async def _abrir(self, page, tarjeta: dict) -> list[tuple[str, str]]:
        antes = {tuple(f) for f in await page.evaluate(_JS_FILAS, SEL["detalle_filas"])}
        url_antes = page.url
        await page.locator(f"[data-zb='{tarjeta['idx']}']").click()
        await page.wait_for_load_state("networkidle")
        await page.wait_for_timeout(600)
        filas = [f for f in await page.evaluate(_JS_FILAS, SEL["detalle_filas"]) if tuple(f) not in antes]
        valores = _valores_de_filas(filas)
        # cerrar: modal -> Escape; página nueva -> atrás; acordeón -> clic otra vez
        if page.url != url_antes:
            await page.go_back(wait_until="networkidle")
            await page.evaluate(_JS_TARJETAS)
        elif await page.locator("[role=dialog]").count():
            await page.keyboard.press("Escape")
        else:
            loc = page.locator(f"[data-zb='{tarjeta['idx']}']")
            if await loc.count():
                await loc.click()
        await page.wait_for_timeout(300)
        return valores

    async def _una_lectura(self, page, pac: Paciente, desde: datetime, hasta: datetime) -> Lectura:
        lec = Lectura(paciente=pac)
        for n, p, m in variantes_busqueda(pac.nombre):
            tarjetas = await self._buscar(page, n, p, m, desde, hasta)
            if not tarjetas:
                continue
            if not p:   # búsqueda solo por nombre: aceptar solo si el nombre coincide
                tarjetas = [t for t in tarjetas if mismo_paciente(pac.nombre, t["texto"])]
                if not tarjetas:
                    continue
            lec.encontrado = True
            for t in tarjetas:
                if not t["codigo"] or not t["fecha"]:
                    continue
                if t["estatus"] and not re.search("validad", t["estatus"], re.I):
                    lec.avisos.append(f"{t['codigo']} {t['fecha']:%d/%m %H:%M}: {t['estatus']} (sin resultados)")
                    continue
                vals = await self._abrir(page, t)
                if vals:
                    lec.estudios.append(Estudio(t["codigo"], t["titulo"], t["fecha"], t["estatus"], vals))
                else:
                    lec.avisos.append(f"{t['codigo']} {t['fecha']:%d/%m %H:%M}: no pude leer valores")
            break
        return lec

    async def leer(self, pac: Paciente, desde: datetime, hasta: datetime, doble: bool = True) -> Lectura:
        ctx, page = await self._pagina()
        try:
            a = await self._una_lectura(page, pac, desde, hasta)
            if not doble or not a.encontrado:
                return a
            # Regla de Rick: segunda lectura y comparar. Solo se queda lo que coincide.
            b = await self._una_lectura(page, pac, desde, hasta)
            claves_b = {e.clave() for e in b.estudios}
            ok = [e for e in a.estudios if e.clave() in claves_b]
            for e in a.estudios:
                if e.clave() not in claves_b:
                    a.avisos.append(f"{e.codigo} {e.fecha:%d/%m %H:%M}: las 2 lecturas no coinciden, no se escribe")
            a.estudios = ok
            return a
        except Exception as ex:  # noqa: BLE001
            if self.debug:
                self.debug.mkdir(parents=True, exist_ok=True)
                await page.screenshot(path=str(self.debug / f"error-cama-{pac.cama}.png"))
            lec = Lectura(paciente=pac)
            lec.avisos.append(f"error leyendo el portal: {type(ex).__name__}")
            return lec
        finally:
            await ctx.close()

    async def leer_varios(self, pacientes: list[tuple[Paciente, datetime]], hasta: datetime,
                          doble: bool = True) -> list[Lectura]:
        sem = asyncio.Semaphore(self.paralelo)

        async def uno(pac, desde):
            async with sem:
                return await self.leer(pac, desde, hasta, doble)
        return await asyncio.gather(*(uno(p, d) for p, d in pacientes))


# -------------------------------------------------------------- descubrir ---

def _forma(obj, prof=0):
    """Estructura de un JSON sin valores (para no exponer datos)."""
    if prof > 4:
        return "…"
    if isinstance(obj, dict):
        return {k: _forma(v, prof + 1) for k, v in list(obj.items())[:40]}
    if isinstance(obj, list):
        return [_forma(obj[0], prof + 1), f"x{len(obj)}"] if obj else []
    return type(obj).__name__


async def descubrir(url: str, usuario: str, password: str, carpeta: Path) -> Path:
    """Equivalente a DevTools > Network: abre el navegador visible, inicia
    sesión, y graba TODO el tráfico mientras tú haces una búsqueda y abres un
    estudio. Guarda:
      red.har            tráfico completo (tiene datos de pacientes: no lo compartas)
      resumen_red.txt    solo método, ruta, estado y forma del JSON (sin valores)
      dom.txt            estructura de la página (etiquetas/clases, sin texto)"""
    from playwright.async_api import async_playwright
    carpeta.mkdir(parents=True, exist_ok=True)
    resumen: list[str] = []

    async with async_playwright() as pw:
        browser = await pw.chromium.launch(headless=False, executable_path=os.getenv("CHROMIUM_PATH") or None)
        ctx = await browser.new_context(locale="es-MX", record_har_path=str(carpeta / "red.har"))
        page = await ctx.new_page()

        async def on_resp(resp):
            req = resp.request
            if req.resource_type not in ("xhr", "fetch"):
                return
            ct = resp.headers.get("content-type", "")
            u = urlsplit(resp.url)
            params = sorted({kv.split("=")[0] for kv in u.query.split("&") if kv})
            linea = f"{req.method} {u.netloc}{u.path} params={params} -> {resp.status} {ct.split(';')[0]}"
            if req.post_data:
                try:
                    linea += f"\n    cuerpo: {json.dumps(_forma(json.loads(req.post_data)), ensure_ascii=False)}"
                except Exception:  # noqa: BLE001
                    linea += "\n    cuerpo: (form) campos=" + str(sorted({kv.split('=')[0] for kv in req.post_data.split('&')}))
            if "json" in ct:
                try:
                    linea += f"\n    respuesta: {json.dumps(_forma(await resp.json()), ensure_ascii=False)[:1500]}"
                except Exception:  # noqa: BLE001
                    pass
            resumen.append(linea)
        page.on("response", lambda r: asyncio.ensure_future(on_resp(r)))

        await page.goto(url.rstrip("/") + "/login", wait_until="networkidle")
        try:
            await page.locator(SEL["usuario"]).first.fill(usuario)
            await page.locator(SEL["password"]).first.fill(password)
            await page.locator(SEL["entrar"]).first.click()
        except Exception:  # noqa: BLE001
            print("No pude llenar el login solo; inicia sesión a mano en la ventana.")
        print("\n>>> En la ventana: busca UN paciente, abre 2-3 estudios (LABHEM, LABQUI...).")
        await asyncio.get_event_loop().run_in_executor(None, input, ">>> Cuando termines, presiona Enter aquí... ")
        dom = await page.evaluate("""() => [...document.querySelectorAll('body *')].slice(0, 3000).map(e => {
            let d = 0, p = e; while (p.parentElement) { d++; p = p.parentElement; }
            return '  '.repeat(Math.min(d, 30)) + e.tagName.toLowerCase()
              + (e.id ? '#' + e.id : '') + (e.className && typeof e.className === 'string'
                 ? '.' + e.className.trim().split(/\\s+/).join('.') : '')
              + (e.getAttribute('role') ? '[role=' + e.getAttribute('role') + ']' : '')
              + (e.getAttribute('formcontrolname') ? '[fc=' + e.getAttribute('formcontrolname') + ']' : '');
          }).join('\\n')""")
        (carpeta / "dom.txt").write_text(dom, encoding="utf-8")
        await ctx.close()
        await browser.close()

    (carpeta / "resumen_red.txt").write_text("\n".join(resumen), encoding="utf-8")
    return carpeta / "resumen_red.txt"


def hay_api(resumen: Path) -> bool:
    """¿El portal pidió datos a una API JSON?"""
    return resumen.exists() and "application/json" in resumen.read_text(encoding="utf-8")


def rango_busqueda(ultima_cargada: datetime | None, ingreso: datetime | None, hoy: datetime,
                   dias_max: int = 7) -> datetime:
    """Desde cuándo buscar: el día de la última columna cargada; si no hay,
    el ingreso (para traer labs de días previos), con tope de dias_max."""
    tope = hoy - timedelta(days=dias_max)
    base = ultima_cargada or ingreso or hoy
    return max(base.replace(hour=0, minute=0), tope.replace(hour=0, minute=0))
