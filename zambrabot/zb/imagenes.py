"""PNG por cama: tabla de valores por muestra + iniciales + marca de agua."""
from __future__ import annotations

from datetime import datetime
from pathlib import Path

from PIL import Image, ImageDraw, ImageFont

_FUENTES = [
    "arial.ttf", "Arial.ttf", "DejaVuSans.ttf",
    "/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf",
    "/System/Library/Fonts/Supplemental/Arial.ttf",
    "C:/Windows/Fonts/arial.ttf",
]


def _fuente(tam: int, negrita: bool = False) -> ImageFont.FreeTypeFont:
    nombres = (["arialbd.ttf", "Arial Bold.ttf", "DejaVuSans-Bold.ttf",
                "/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf",
                "C:/Windows/Fonts/arialbd.ttf"] if negrita else []) + _FUENTES
    for n in nombres:
        try:
            return ImageFont.truetype(n, tam)
        except OSError:
            continue
    return ImageFont.load_default(size=tam)


def generar_png(carpeta: Path, cama: str, iniciales: str,
                muestras: list[tuple[datetime, list[tuple[str, str]]]]) -> Path:
    """Una imagen por cama; una columna por muestra nueva (fecha/hora de la
    muestra en el encabezado). Nombre: cama-NNN_DD-MM_HHMM.png (última muestra)."""
    carpeta.mkdir(parents=True, exist_ok=True)
    muestras = sorted(muestras, key=lambda m: m[0])
    analitos: list[str] = []
    for _, vals in muestras:
        for a, _ in vals:
            if a not in analitos:
                analitos.append(a)
    tabla = {(a, i): v for i, (_, vals) in enumerate(muestras) for a, v in vals}

    f_tit, f_enc, f_txt = _fuente(34, True), _fuente(22, True), _fuente(21)
    alto_fila, margen = 32, 30
    ancho_analito = max([int(f_txt.getlength(a)) for a in analitos] + [220]) + 30
    ancho_col = max([int(f_txt.getlength(v)) for v in tabla.values()] + [150]) + 30
    ancho = margen * 2 + ancho_analito + ancho_col * len(muestras)
    ancho = max(ancho, 700)
    alto = margen * 2 + 70 + alto_fila * (len(analitos) + 1)

    img = Image.new("RGB", (ancho, alto), "white")
    d = ImageDraw.Draw(img)
    d.text((margen, margen), f"CAMA {cama}  ·  {iniciales}", fill="#111", font=f_tit)
    y = margen + 70
    d.rectangle([margen, y, ancho - margen, y + alto_fila], fill="#1f3b5c")
    d.text((margen + 8, y + 4), "Analito", fill="white", font=f_enc)
    for i, (f, _) in enumerate(muestras):
        d.text((margen + ancho_analito + i * ancho_col + 8, y + 4), f.strftime("%d/%m %H:%M"),
               fill="white", font=f_enc)
    for k, a in enumerate(analitos):
        y += alto_fila
        if k % 2:
            d.rectangle([margen, y, ancho - margen, y + alto_fila], fill="#eef2f7")
        d.text((margen + 8, y + 5), a, fill="#111", font=f_txt)
        for i in range(len(muestras)):
            v = tabla.get((a, i), "")
            d.text((margen + ancho_analito + i * ancho_col + 8, y + 5), v, fill="#111", font=f_txt)

    # marca de agua grande, diagonal y semitransparente
    marca = f"CAMA {cama}"
    capa = Image.new("RGBA", img.size, (0, 0, 0, 0))
    tam = max(60, int(min(ancho, alto) / 3.2))
    f_marca = _fuente(tam, True)
    cd = ImageDraw.Draw(capa)
    w = cd.textlength(marca, font=f_marca)
    txt = Image.new("RGBA", (int(w) + 40, tam + 40), (0, 0, 0, 0))
    ImageDraw.Draw(txt).text((20, 10), marca, font=f_marca, fill=(200, 30, 30, 70))
    txt = txt.rotate(30, expand=True)
    capa.paste(txt, ((ancho - txt.width) // 2, (alto - txt.height) // 2), txt)
    img = Image.alpha_composite(img.convert("RGBA"), capa).convert("RGB")

    ultima = muestras[-1][0]
    ruta = carpeta / f"cama-{cama}_{ultima:%d-%m_%H%M}.png"
    img.save(ruta)
    return ruta
