# Órganos en 3D (complemento de los videos)

En la pestaña **Video** de cada tema, “🫀 Míralo en 3D” abre el órgano del tema con lo afectado en rojo (la causa en
naranja), etapas de la enfermedad, toque para explicar y un recorrido narrado con la voz del teléfono.
El contenido está en `src/content/80-organos3d.js` (`cond3d.<tema>`); el visor, en `src/app.js` (`o3mount`).

## De dónde sale

- **Modelos** (`models3d/*.glb`): repositorios de [OrganUI](https://github.com/organui/organui) (`organui/<órgano>-3d` y
  `apps/web/public/models/` del repo principal). Son derivados de **BodyParts3D** (© The Database Center for Life Science),
  con licencia **CC BY 4.0** o **CC BY-SA 2.1 JP / 4.0** según el modelo: la atribución y los cambios de cada uno están en
  `models3d/<órgano>.ATTRIBUTION.md`, y la app muestra el crédito y la licencia debajo del visor. No se modificaron.
- **Metadatos** (`models3d/organs.json`: vistas, estructuras, colores, licencia): generados del registro de OrganUI (MIT) con
  `python3 -I tools/organs3d/gen.py <repo de organui> models3d/organs.json`.
- **three.js r160** (MIT) con GLTFLoader y OrbitControls en un solo módulo: `vendor/three3d.js`
  (`npm i three@0.160.0 esbuild` y `esbuild entry.js --bundle --format=esm --minify`, exportando lo que usa `o3engine`).
  Se carga solo al abrir el visor, igual que el GLB (que se guarda en memoria para no descargarlo dos veces).

## Publicar

La página publicada no sirve `.glb`, así que `python3 -I tools/organs3d/web.py models3d` genera `models3d/web/<órgano>.json`
(el mismo glTF en JSON con el búfer en base64; carpeta ignorada en git). `vendor/three3d.js` y `models3d/web/*.json` se
publican como archivos junto a la página (rutas relativas). Si se suben como
assets, poner sus URL en `models3d/assets.json` (`{ "heart": "/_blob/…" }`) y el build las usa.
