# Videos, animaciones y vista previa

## Video de un tema (`lessons.<id>.video`)

Un video es una lista de capítulos; cada capítulo tiene escenas. Cada escena tiene un visual (`v`) y una
narración (`say`) que la voz del teléfono lee frase por frase, con subtítulos. Ejemplo completo:
`src/content/11-sca.js` (≈8 min).

```js
video: [
  { ch: 'Título del capítulo', sc: [
    { v: { k: 'title', t: 'Síndromes coronarios agudos', s: 'Tema 2 · Cardiología' }, say: '…' },
    …
  ] }
]
```

### Visuales (`v.k`)

| k | Campos | Uso |
|---|---|---|
| `title` | `t`, `s?` | Portada del video |
| `list` | `t`, `items` (1–6) | Puntos que aparecen uno a uno mientras se narra |
| `flow` | `t`, `steps` (2–6) | Algoritmo con flechas, paso a paso |
| `big` | `t` (muy corto), `h?`, `u?`, `s?` | Un número o umbral clave (“<55”, “≥50%”) |
| `vs` | `cmp` (id de `compares`) + `rows?` (índices) **o** `a`, `b`, `rows: [[fila, a, b]]` | Comparador lado a lado (máx. 3–4 filas) |
| `anim` | `id`, `step`, `cap?` | Un paso de una animación del tema, con sus etiquetas |
| `case` | `text`, `t?`, `p?` (paciente como en `cases`), `vit?` ({FC: '98', …}) | Viñeta clínica con paciente en pixel art |
| `quiz` | `q`, `opts` (2–4), `a` + **`exp`** en la escena | Pausa: 6 s para elegir, luego se narra `exp` |
| `mnemo` | `t`, `d` | Mnemotecnia |
| `tip` | `kind: 'pearl' \| 'trap'`, `t` | Perla o trampa |

### Reglas

- `say` y `exp` se leen en voz alta: sin símbolos (el build rechaza `< > ≥ ≤ ↑ ↓ → × ± = % / & * # @ _ ~ ^ | [ ]`),
  siglas desarrolladas (“electrocardiograma”, “tasa de filtración glomerular”), decimales con palabras
  (“uno punto cinco”) y frases de 30 palabras o menos.
- El texto en pantalla (`v`) sí puede llevar símbolos y siglas, pero debe ser corto: la pantalla es
  cuadrada y del ancho de un iPhone. La vista previa avisa si algo no cabe.
- Duración: 1000–1400 palabras para prioridad alta (≈7–9 min) y 800–1100 para media o baja.

## Retención (automática en todos los videos)

El reproductor agrega, sin tocar los guiones: efectos 8-bit (cambio de escena, capítulo, cada punto que
aparece, cifra clave, trampa, perla, mnemotecnia, tic-tac del quiz, acierto/error y final; botón “♪”),
tarjeta de capítulo, “Repaso relámpago” al final de cada capítulo (con las cifras, listas, algoritmos y
comparadores que se vieron), “3 cosas para recordar” al final, racha de aciertos en los quizzes y palabras
clave resaltadas en los subtítulos.

## Animaciones

`anims.<id>` en el archivo del tema (pasos con `cap` y `labels` `[x, y, texto]` en un lienzo de 160×120)
y el dibujo en `src/scenes/<id>.js`:

```js
SCENES.<id> = [
  (g, t) => { /* paso 1: t = segundos */ },
  …
];
```

Utilidades en `src/scenes.js`: `g.clear`, `g.r`, `g.p`, `g.disk`, `g.ring`, `g.line`, `g.spr`, `ell`, `xMark`,
`along`, `gauge`, `frameBox`, `ecgStrip`, `kidneyBean`, `neutro`, `text3`, `rnd`, `tri`, `lerp`, `blink`, `COL`.
Todo determinista: usa `rnd(i, semilla)`, nunca `Math.random`.

## Probar sin tocar los demás temas

```
node build.mjs --only scc,mitral --out /tmp/prueba.html      # valida y compila solo esos temas
node tools/preview.cjs scc,mitral /tmp/prev                  # PNG de cada escena y cada paso + hojas de contacto
```

## Narración grabada

Cada video tiene su audio en `audio/<tema>.mp3` (voz Piper es_MX “claude-high”) y un mapa de tiempos por
frase en `src/voice/<tema>.json`; el reproductor toca cada frase desde el audio (funciona en cualquier
teléfono, también con el modo silencio) y muestra los subtítulos dentro del video, en fragmentos cortos
sincronizados. Si una frase cambia, se vuelve a grabar:

```
python3 -m venv venv && venv/bin/pip install piper-tts
# modelo: https://github.com/k2-fsa/sherpa-onnx/releases/download/tts-models/vits-piper-es_MX-claude-high.tar.bz2
PIPER_PY=venv/bin/python PIPER_VOICE=vits-piper-es_MX-claude-high node tools/narrate.cjs [tema1,tema2]
node build.mjs
```

Al publicar, los MP3 van junto a la página en la carpeta `audio/`.
