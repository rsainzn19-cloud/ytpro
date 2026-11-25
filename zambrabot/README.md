# Zambrabot

La skill `labs-cardiologia-censo` convertida en un script de Python. Corre en tu PC y no gasta tokens.

```
python zambrabot.py
```

Hace lo mismo que la skill:

1. Lee la pestaña **CENSO** (se salta a los egresados y las camas que no tienen número, como UTIM/HD).
2. Entra al portal Resultados iPLUS y busca a **varios pacientes a la vez** (`PARALELO`). Primero prueba el nombre tal cual, luego sin acentos, luego con variantes del apellido y al final solo con el nombre. Si busca solo por nombre, acepta el resultado únicamente si el nombre del portal coincide con el del censo.
3. Lee cada paciente **dos veces** (es tu regla) y solo se queda con los estudios que salen iguales en las dos lecturas.
4. Limpia los valores, quitando "Anormal/Crítico por encima/debajo (Numérico)". Los "NA" no se escriben.
5. Prepara las columnas `DD/MM (HH:MM)` con la "Fecha de creación", ordenadas por fecha de izquierda a derecha:
   - Si ya existe una columna con esa fecha y hora, **no la repite**.
   - Si ya existe una columna `DD/MM` sin hora y ese día solo hubo una muestra, la toma como la misma muestra. Si ese día hubo más de una, te avisa y no escribe nada.
   - Si un analito no tiene fila en la plantilla, lo pone en **EXTRAS** con la etiqueta en amarillo. Si la etiqueta ya existe, usa esa fila.
   - Si un panel sale todo "No detectado", lo anota en AISLAMIENTOS.
   - Si un paciente no tiene pestaña, la crea copiando la 202. Si la pestaña de esa cama es de un paciente anterior, crea una nueva `NNN (DD/MM)` y no toca la anterior.
6. Escribe en el Sheet **una sola vez al final, en lote**: una llamada para la estructura (columnas, filas y amarillo) y otra para los valores. Los valores se mandan con `RAW`, así que se guardan como texto y "1.07" no se convierte en fecha. Nunca escribe celdas vacías. Después relee lo que escribió y lo compara.
7. Genera un PNG por cama en `salida/png/AAAA-MM-DD/cama-NNN_DD-MM_HHMM.png`, con los valores, la fecha y hora de la muestra, las iniciales y la marca de agua "CAMA NNN".
8. Imprime un resumen **solo con cama e iniciales**: qué camas se actualizaron, quién no se encontró, qué fue a EXTRAS y los avisos (muestras parcialmente validadas, lecturas que no coincidieron). Nunca muestra nombres ni diagnósticos.

## Instalación (una vez)

```
cd zambrabot
python -m venv .venv
.venv\Scripts\activate            # Windows
# source .venv/bin/activate       # Mac/Linux
pip install -r requirements.txt
python -m playwright install chromium
copy .env.example .env            # (cp en Mac/Linux) y llénalo
mkdir salida
```

### Google (para escribir en el Sheet)
El script entra con **tu** cuenta de Google, la que ya puede editar el censo:
1. En https://console.cloud.google.com crea un proyecto y activa la **Google Sheets API**.
2. Ve a *APIs y servicios → Credenciales → Crear credenciales → ID de cliente OAuth → App de escritorio*.
3. Descarga el JSON y guárdalo como `zambrabot/credentials.json`.
4. La primera vez que corras el script se abre el navegador para autorizar. Después usa `token.json` y ya no lo pide.

`.env`, `credentials.json` y `token.json` están en `.gitignore`: las credenciales nunca van en el código.

## Antes de usar el Sheet real

1. **¿El portal tiene API JSON? (lo mismo que ver la pestaña Network de las DevTools)**
   ```
   python zambrabot.py --descubrir
   ```
   Se abre el navegador, inicia sesión y graba todo el tráfico. Busca un paciente, abre 2 o 3 estudios y presiona Enter en la terminal. Al final te dice si vio una API JSON y deja estos archivos en `descubrimiento/`:
   - `resumen_red.txt`: método, ruta y forma del JSON, **sin valores** (sí se puede compartir).
   - `dom.txt`: estructura de la página **sin texto** (sí se puede compartir).
   - `red.har`: el tráfico completo. **Tiene datos de pacientes: no lo compartas.**

   Si hay API, pásame `resumen_red.txt` y agrego un lector por API en `zb/portal.py` con la misma interfaz, así que el resto no cambia. Si no la hay, se queda el modo navegador. Si algún selector no coincide con el portal real, se ajusta en `portal_sel.json` (mismas claves que `SEL` en `zb/portal.py`) sin tocar el código.

2. **Prueba contra la copia del Sheet** (pon su ID en `SHEET_ID_PRUEBA`):
   ```
   python zambrabot.py --prueba --simular --ver     # navegador visible, no escribe
   python zambrabot.py --prueba                     # escribe en la copia
   python zambrabot.py --prueba --verificar 202,212,443
   ```
   `--verificar` vuelve a leer esas camas en el portal y compara cada valor con su celda del Sheet. Imprime `Cama 202 (JPL): 18/18 coinciden` o la lista de diferencias con su celda (ej. `TP: Sheet=(vacío) portal=13.1 [B59]`). Si algo no coincide, termina con código 1.

3. Si todo coincide, quita `--prueba`.

## Opciones

| | |
|---|---|
| `--prueba` | usa `SHEET_ID_PRUEBA` |
| `--sheet ID` | usa otro Sheet (por ejemplo, el censo de otro día) |
| `--simular` | lee todo y muestra el resumen, pero no escribe nada |
| `--camas 202,212` | procesa solo esas camas |
| `--verificar 202,212,443` | compara el Sheet contra el portal |
| `--una-lectura` | se salta la doble lectura (más rápido) |
| `--ver` | muestra el navegador |

Códigos de salida: 0 = bien; 1 = hubo diferencias al releer o al verificar.

## Programarlo para que corra solo

La PC tiene que estar encendida y con sesión iniciada.

**Windows (Programador de tareas):** en una terminal, desde la carpeta `zambrabot`:
```
schtasks /Create /TN "Zambrabot" /SC HOURLY /MO 2 /ST 07:00 ^
  /TR "\"%CD%\.venv\Scripts\python.exe\" \"%CD%\zambrabot.py\" >> \"%CD%\salida\log.txt\" 2>&1"
```
Así corre cada 2 horas desde las 7:00. Para quitarlo: `schtasks /Delete /TN "Zambrabot" /F`. Para pausarlo en los días que no estás de guardia: Programador de tareas → Zambrabot → Deshabilitar.

**Mac / Linux (cron):** `crontab -e` y agrega:
```
0 7-21/2 * * * cd /ruta/a/zambrabot && .venv/bin/python zambrabot.py >> salida/log.txt 2>&1
```
(cada 2 horas, de 7:00 a 21:00). En Mac, dale "Acceso total al disco" a `cron` si no corre.

El log también contiene solo camas e iniciales.

## Pruebas

```
pip install pytest
python -m pytest -q tests
```
Las pruebas usan datos ficticios: un portal falso local, para probar el login, la búsqueda sin acentos, los pacientes en paralelo, la doble lectura y la limpieza de valores, y un Google Sheet simulado en memoria, para probar la columna nueva, que no duplique, EXTRAS, la escritura en 2 llamadas, el PNG, que el resumen no tenga nombres y `--verificar`.

## Archivos

```
zambrabot.py      el comando
zb/portal.py      portal (navegador + --descubrir); selectores en SEL
zb/censo.py       CENSO, pestaña de cada cama, plan de columnas y EXTRAS
zb/valores.py     limpieza de valores, alias portal→fila, secciones, fechas
zb/sheets.py      Google Sheets: lectura y escritura en lote
zb/imagenes.py    PNG con marca de agua
zb/nombres.py     variantes de búsqueda, iniciales
```
