// Vista previa: compila solo los temas pedidos y captura cada escena del video y cada paso de la animación.
// Uso: node tools/preview.cjs scc,mitral [carpeta-de-salida]
// Deja PNG por escena y hojas de contacto (video-<tema>.png, anim-<id>.png) para revisarlas de un vistazo.
const { execFileSync } = require('child_process');
const fs = require('fs'), path = require('path');
const { chromium } = require('/opt/node-tools/node_modules/playwright');
const ids = (process.argv[2] || '').split(',').filter(Boolean);
if (!ids.length) { console.error('Uso: node tools/preview.cjs tema1,tema2 [salida]'); process.exit(1); }
const out = path.resolve(process.argv[3] || '/tmp/guardia-preview/' + ids.join('-'));
fs.mkdirSync(out, { recursive: true });
const root = path.resolve(__dirname, '..'), raw = path.join(out, 'raw.html'), page = path.join(out, 'page.html');
execFileSync('node', [path.join(root, 'build.mjs'), '--only', ids.join(','), '--out', raw], { stdio: 'inherit' });
fs.writeFileSync(page, '<!doctype html><html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head><body>' + fs.readFileSync(raw, 'utf8') + '</body></html>');
(async () => {
  const browser = await chromium.launch();
  const ctx = await browser.newContext({ viewport: { width: 390, height: 844 }, deviceScaleFactor: 2 });
  const pg = await ctx.newPage();
  const errs = [];
  pg.on('pageerror', (e) => errs.push(e.message));
  await pg.clock.install({ time: new Date('2026-10-23T19:00:00') });
  await pg.goto('file://' + page + '#preview');
  await pg.waitForTimeout(200);
  await pg.addStyleTag({ content: '#tabs,#hud{display:none!important} *{animation:none!important;transition:none!important}' });
  const nav = (v, a, b) => pg.evaluate(([v, a, b]) => { const x = document.createElement('button'); x.dataset.go = v; if (a) x.dataset.a = a; if (b) x.dataset.b = b; document.body.appendChild(x); x.click(); x.remove(); }, [v, a, b]);
  const sheets = [];
  for (const tid of ids) {
    const info = await pg.evaluate((tid) => { const c = JSON.parse(document.getElementById('contenido').textContent); const L = c.lessons[tid]; return L ? { video: !!L.video, anim: L.anim || null, steps: L.anim ? c.anims[L.anim].steps.length : 0 } : null; }, tid);
    if (!info) { console.log(`${tid}: sin lección`); continue; }
    for (const tab of ['leccion', 'preguntas', 'tarjetas']) { await nav('topic', tid, tab); const w = await pg.evaluate(() => document.documentElement.scrollWidth); if (w > 390) errs.push(`${tid} ${tab}: se desborda a ${w}px`); }
    if (info.video) {
      await nav('topic', tid, 'video'); await pg.clock.runFor(300);
      const n = await pg.evaluate(() => window.__gp.show(0));
      const files = [];
      for (let i = 0; i < n; i++) {
        await pg.evaluate((i) => window.__gp.show(i), i); await pg.clock.runFor(1200);
        const f = path.join(out, `video-${tid}-${String(i + 1).padStart(2, '0')}.png`);
        await pg.locator('#vp').screenshot({ path: f }); files.push(f);
        const over = await pg.evaluate(() => { const s = document.getElementById('vslide'), sc = document.getElementById('vscreen'); return s.scrollHeight > sc.clientHeight + 2 || [...s.querySelectorAll('*')].some((e) => e.getBoundingClientRect().bottom > sc.getBoundingClientRect().bottom + 1 || e.getBoundingClientRect().right > sc.getBoundingClientRect().right + 1); });
        if (over) errs.push(`${tid} escena ${i + 1}: el contenido no cabe en la pantalla del video (acorta el texto o quita elementos)`);
      }
      sheets.push([`video-${tid}.png`, files, 4]);
    }
    if (info.anim) {
      await nav('topic', tid, 'anim'); await pg.clock.runFor(800);
      const files = [];
      for (let i = 0; i < info.steps; i++) {
        await pg.evaluate((i) => document.querySelector(`[data-act=apip][data-i="${i}"]`).click(), i); await pg.clock.runFor(2500);
        const f = path.join(out, `anim-${info.anim}-${i + 1}.png`); await pg.locator('.stage').screenshot({ path: f }); files.push(f);
      }
      sheets.push([`anim-${info.anim}.png`, files, 3]);
    }
  }
  await browser.close();
  for (const [name, files, cols] of sheets) {
    execFileSync('python3', ['-c', `
import sys
from PIL import Image
fs=sys.argv[3:]; cols=int(sys.argv[2]); w=360
ims=[Image.open(f).convert('RGB') for f in fs]; ims=[im.resize((w,int(im.height*w/im.width))) for im in ims]
h=max(im.height for im in ims); rows=(len(ims)+cols-1)//cols
o=Image.new('RGB',(cols*w,rows*h),(5,6,26))
for k,im in enumerate(ims): o.paste(im,((k%cols)*w,(k//cols)*h))
o.save(sys.argv[1])`, path.join(out, name), String(cols), ...files]);
    console.log('hoja:', path.join(out, name));
  }
  console.log(errs.length ? 'PROBLEMAS:\n- ' + errs.join('\n- ') : 'Sin errores de página ni desbordes.');
})();
