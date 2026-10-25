# Clips “en 1 minuto” (motion graphics)

Cada tema tiene un clip corto, vertical (1080 × 1350, 4:5), que explica **el mecanismo central** con
animación vectorial fluida, narración grabada (voz Piper es_MX) y lo-fi de fondo. El diagrama se **construye
escena por escena** y al final queda completo, como resumen visual. Referencia: `clips/hta.js` (SRAA).

## Cómo se renderiza

```
PIPER_PY=<python con piper-tts> PIPER_VOICE=<carpeta del modelo es_MX-claude-high> \
  node tools/motion/render.cjs <tema> --frames 3,12,20      # PNG de esos segundos en motion/preview/
PIPER_PY=... PIPER_VOICE=... node tools/motion/render.cjs <tema>   # MP4 final en motion/<tema>.mp4
```

`--frames` también imprime en qué segundo empieza cada escena: úsalo para elegir cuadros a la mitad de cada una.

## Formato de un clip (`clips/<tema>.js`)

```js
window.CLIP = {
  topic: 'hta', title: 'SRAA en 1 minuto', sub: 'Una línea que diga qué vas a entender', color: '#4DB8FF',
  scenes: [ { say: 'Narración de la escena 0 (título).', min: 3.5 }, { say: '...' }, ... ],
  draw(t, T) { /* dibuja el cuadro del segundo t */ }
};
```

- La duración de cada escena sale de su narración (+0.35 s antes y +0.9 s después); `min` fuerza un mínimo.
- `T.cur` es la escena actual; `T.s(i)`, `T.e(i)`, `T.d(i)` inicio, fin y duración de la escena i;
  `T.f(i, a, b)` avance 0→1 entre las fracciones `a` y `b` de la escena i (úsalo para TODO lo que aparece).
- `draw` debe ser **determinista** (mismo t → mismo cuadro): nada de `Math.random()` ni estado entre cuadros.
- Patrón recomendado (ver `hta.js`): escena 0 = `titleCard`; luego cada escena agrega un bloque del diagrama con
  `headline` arriba; lo de escenas anteriores queda atenuado (`with_(0.42, ...)`) y en la escena de resumen
  todo vuelve a 1; última escena = perla o trampa del examen sobre un velo oscuro.

## Kit (`MK`, en `kit.js`)

- Utilidades: `p(t,a,b)`, `ease(x)`, `inOut(x)`, `pop(x)`, `lerp`, `clamp`, `with_(alpha, fn)`, `rr(x,y,w,h,r)` (ruta redondeada), `MK.g` (el contexto 2D).
- Escena: `bg(t)`, `titleCard(tLocal, title, sub, color)`, `headline(text, tLocal, color)`.
- Texto: `text(str, x, y, {size, color, weight, maxW, align})` (centrado y con saltos de línea).
- Elementos: `pill(label, x, y, prog, {fill, color, size})`, `arrow(x1,y1,x2,y2, prog, {color, width, cx, cy})`
  (curva con control cx,cy), `flow(puntos, t, {n, speed, color, r})`, `ring(x,y,r,t,{color})`,
  `block(label, x, y, prog)` (sello rojo de fármaco), `gauge(x, y, valor0a1, etiqueta)`.
- Órganos: `organ(MK.shapes.kidney|adrenal|liver|lungs|heart, x, y, escala, aparición)`,
  `vessel(x, y, largo, aparición, constricción0a1, t)`, `duct(x, y, alto, aparición, t, transporte0a1)`.
- Colores: `MK.C` (`gold`, `red`, `pink`, `blue`, `cyan`, `green`, `purple`, `orange`, `ink`, `ink2`, `dim`, `organ`, `liver`, `lung`, `blood`).
- ¿Falta un órgano o célula (estómago, páncreas, glomérulo, articulación, plaqueta, válvula…)? **Dibújalo dentro de
  tu clip** con `MK.g` (Canvas 2D: `beginPath`, `bezierCurveTo`, `ellipse`, `fill`…), en una función local con
  `save/translate/scale/restore`. **No edites `kit.js`** (lo usan todos los clips).

## Reglas de contenido

- Los hechos salen de la lección del tema (`src/content/NN-<tema>.js`: `lessons`, `pearl`, `trap`, y su
  animación en `anims`). Nada que contradiga la lección; cifras y cortes iguales.
- 6 a 9 escenas, 50 a 80 s en total. Una idea por escena. Lenguaje claro, español de México, tú.
- La narración debe poder **leerse en voz alta**: escribe “angiotensina dos”, “A T uno”, “mayor de treinta”,
  “uno punto cinco”; nada de símbolos (→, ≥, %, /, ⁺) ni siglas raras en `say` (en pantalla sí se permiten).
- En pantalla, poco texto: `headline` corto (máx. ~45 caracteres) y etiquetas de 1 a 3 palabras.

## Revisión obligatoria antes del MP4

1. `--frames` con un cuadro a la mitad de cada escena y otro al final; **mira cada PNG**.
2. Nada encimado (etiquetas sobre etiquetas, texto sobre órganos), nada cortado en los bordes
   (márgenes de 40 px), todo legible en un teléfono, y la escena de resumen debe leerse como un diagrama completo.
3. Corrige y repite hasta que esté limpio; después renderiza el MP4.
