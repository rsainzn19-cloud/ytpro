# Guardia Pixel

Herramienta de estudio en pixel art para el parcial regional de Medicina Interna
(martes 10 de noviembre de 2026): diagnóstico inicial, plan día por día, lecciones,
animaciones, modo guardia, tarjetas con repetición espaciada, cuaderno de errores,
ruleta, carta misteriosa, calculadoras y simulacro.

`index.html` es el archivo final: una sola página autocontenida. No lo edites a mano;
se genera con:

```
node build.mjs
```

## Contenido

Los 30 temas tienen:

- **Video completo** (≈6–9 min, ~210 min en total): escenas en pixel art, narración con la voz del
  teléfono, conceptos clave en pantalla, música lo-fi sincronizada, capítulos, pausas con pregunta, modo cine y maratón por materia (ver `VIDEOS.md`).
- **Lección** con fisiopatología, diagnóstico diferencial, fármacos clave, “cómo lo preguntan en el
  examen”, mnemotecnia, perla, trampa y caja de “Depende de la guía”.
- **Animación** paso a paso (30), con reproducción automática, narración y pantalla completa.
- **Preguntas** tipo caso clínico con explicación por distractor: 20 por tema de prioridad alta y 15 por
  tema de prioridad media o baja (540 en total), además de tarjetas con repetición espaciada.
- **Videos de repaso externos** en inglés (Ninja Nerd y Dirty Medicine).

Calculadoras: TIMI, CKD-EPI 2021, KDIGO (LRA), FENa/FEUrea, IMC, síndrome metabólico,
meta de LDL (ESC/EAS), Mentzer, Glasgow-Blatchford, BISAP, ACR/EULAR 2010, Wells y sPESI.

El plan acomoda la primera vuelta de los 30 temas antes de los simulacros (7 y 8 de
noviembre); si el tiempo diario no alcanza, acorta los bloques y, como último recurso,
deja los temas que falten como "perlas rápidas" y lo avisa.

## Estructura

- `src/content/00-meta.js`: examen, materias, los 30 temas del temario y rangos.
- `src/content/01-diagnostico.js`: las 30 preguntas del diagnóstico (5 por materia).
- `src/content/10-…39-<tema>.js`: un archivo por tema con `lessons`, `compares`, `anims`,
  `cards`, `questions` y `cases`. En `lessons`, `nn` lista las clases de Ninja Nerd
  (`[slug, título]`) y `yt` es el término de búsqueda en YouTube.
- `src/scenes.js`: utilidades de dibujo, ECG y escenas base; `src/scenes/<id>.js`: una animación por archivo.
- `tools/preview.cjs`: captura cada escena de video y cada paso de animación para revisarlos.
- `src/app.js`: la lógica (plan, preguntas, guardia, tarjetas, ruleta, calculadoras).
- `src/style.css` y `src/shell.html`: estilos y esqueleto.

## Editar o agregar contenido

1. Usa el mismo formato que `10-dm2.js`. El id del tema sale del nombre del archivo.
2. Si el tema tiene animación, agrega un dibujo por paso en `SCENES.<id>` dentro de
   `src/scenes.js`.
3. Corre `node build.mjs`: valida que cada tema tenga lección y videos, ids,
   respuestas, explicaciones por distractor, el mínimo de preguntas y que cada
   animación tenga un dibujo por paso.

El progreso se guarda en el navegador (`localStorage`); desde Ajustes se puede copiar
un respaldo y restaurarlo en otro dispositivo.
