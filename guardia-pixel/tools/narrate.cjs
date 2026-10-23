// Graba la narración de los videos: extrae del build las frases exactas que dice cada video
// (con el mismo corte y normalización que usa el reproductor) y llama a tools/narrate.py.
// Uso: PIPER_PY=/ruta/venv/bin/python PIPER_VOICE=/ruta/es_MX-claude-high node tools/narrate.cjs [tema1,tema2]
const { execFileSync } = require('child_process');
const fs = require('fs'), os = require('os'), path = require('path');
const { chromium } = require('/opt/node-tools/node_modules/playwright');
const root = path.resolve(__dirname, '..'), tmp = fs.mkdtempSync(path.join(os.tmpdir(), 'narrar-'));
const only = process.argv[2] || '';
const py = process.env.PIPER_PY || 'python3', voice = process.env.PIPER_VOICE;
if (!voice) { console.error('Falta PIPER_VOICE (carpeta del modelo Piper)'); process.exit(1); }
execFileSync('node', [path.join(root, 'build.mjs'), '--out', path.join(tmp, 'raw.html')], { stdio: 'inherit' });
fs.writeFileSync(path.join(tmp, 'page.html'), '<!doctype html><html><head><meta charset="utf-8"></head><body>' + fs.readFileSync(path.join(tmp, 'raw.html'), 'utf8') + '</body></html>');
(async () => {
  const browser = await chromium.launch(), pg = await browser.newPage();
  await pg.goto('file://' + path.join(tmp, 'page.html') + '#preview');
  await pg.waitForTimeout(300);
  const segs = await pg.evaluate((only) => {
    const c = JSON.parse(document.getElementById('contenido').textContent), out = {};
    for (const tid of Object.keys(c.lessons)) if (c.lessons[tid].video && (!only || only.split(',').includes(tid))) out[tid] = window.__gp.segs(tid);
    return out;
  }, only);
  await browser.close();
  const f = path.join(tmp, 'segs.json');
  fs.writeFileSync(f, JSON.stringify(segs));
  console.log(`${Object.keys(segs).length} temas, ${Object.values(segs).reduce((a, s) => a + s.length, 0)} frases`);
  execFileSync(py, [path.join(__dirname, 'narrate.py'), f, voice, ...(only ? [only] : [])], { stdio: 'inherit' });
})();
