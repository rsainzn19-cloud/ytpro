// Renderiza un clip “en 1 minuto” a MP4: node tools/motion/render.cjs <tema> [--frames 0,5.2,30]
//   PIPER_PY / PIPER_VOICE: Python con piper-tts y carpeta del modelo (como tools/narrate.cjs)
//   PW: ruta de playwright (por defecto /opt/node-tools/node_modules/playwright)
// Salida: motion/<tema>.mp4 (1080 × 1350, 30 fps, voz + lo-fi). Con --frames solo guarda PNG de esos segundos.
const fs = require('fs'), path = require('path'), os = require('os'), { spawn, execFileSync } = require('child_process');
const { chromium } = require(process.env.PW || '/opt/node-tools/node_modules/playwright');
const tid = process.argv[2], fi = process.argv.indexOf('--frames'), only = fi > 0 ? process.argv[fi + 1].split(',').map(Number) : null;
const here = __dirname, root = path.join(here, '..', '..'), FPS = 30, LEAD = 0.35, PAD = 0.9;
if (!tid) { console.error('Falta el tema'); process.exit(1); }
(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1080, height: 1350 } });
  const errs = []; page.on('pageerror', (e) => errs.push(e.message));
  await page.setContent('<!doctype html><html><body style="margin:0;background:#000"><canvas id="c" width="1080" height="1350"></canvas></body></html>');
  await page.addScriptTag({ path: path.join(here, 'kit.js') });
  await page.addScriptTag({ path: path.join(here, 'clips', tid + '.js') });
  const says = await page.evaluate(() => CLIP.scenes.map((s) => s.say));
  const title = await page.evaluate(() => CLIP.title);
  // 1. Narración por escena
  const tmp = fs.mkdtempSync(path.join(os.tmpdir(), 'motion-'));
  fs.writeFileSync(path.join(tmp, 'say.json'), JSON.stringify(says));
  execFileSync(process.env.PIPER_PY || 'python3', [path.join(here, 'tts.py'), path.join(tmp, 'say.json'), process.env.PIPER_VOICE, tmp], { stdio: 'inherit' });
  const nd = JSON.parse(fs.readFileSync(path.join(tmp, 'dur.json')));
  // 2. Línea de tiempo: cada escena dura su narración más un respiro (o su mínimo)
  const mins = await page.evaluate(() => CLIP.scenes.map((s) => s.min || 0));
  const durs = nd.map((d, i) => Math.max(mins[i], LEAD + d + PAD)), starts = [];
  durs.reduce((a, d, i) => { starts[i] = a; return a + d; }, 0);
  const total = starts[starts.length - 1] + durs[durs.length - 1];
  await page.evaluate(([starts, durs]) => {
    const T = { s: (i) => starts[i], d: (i) => durs[i], e: (i) => starts[i] + durs[i], cur: 0, t: 0 };
    T.f = (i, a = 0, b = 1) => MK.clamp((T.t - (starts[i] + a * durs[i])) / Math.max(1e-6, (b - a) * durs[i]));
    const ctx = document.getElementById('c').getContext('2d'); MK.use(ctx);
    window.frame = (t, png) => {
      T.t = t; T.cur = Math.max(0, starts.findIndex((s, i) => t < s + durs[i])); if (t >= starts[starts.length - 1] + durs[durs.length - 1]) T.cur = starts.length - 1;
      ctx.setTransform(1, 0, 0, 1, 0, 0); ctx.globalAlpha = 1; CLIP.draw(t, T);
      return document.getElementById('c').toDataURL(png ? 'image/png' : 'image/jpeg', 0.92);
    };
  }, [starts, durs]);
  if (only) {
    fs.mkdirSync(path.join(root, 'motion', 'preview'), { recursive: true });
    for (const t of only) { const u = await page.evaluate((t) => frame(t, true), t); fs.writeFileSync(path.join(root, 'motion', 'preview', `${tid}-${t}.png`), Buffer.from(u.split(',')[1], 'base64')); }
    console.log(`escenas: ${starts.map((s, i) => `${i}@${s.toFixed(1)}s`).join(' ')} · total ${total.toFixed(1)} s`, errs.join('\n'));
    await browser.close(); return;
  }
  // 3. Cuadros → video
  const vid = path.join(tmp, 'v.mp4');
  const ff = spawn('ffmpeg', ['-v', 'error', '-y', '-f', 'image2pipe', '-framerate', String(FPS), '-c:v', 'mjpeg', '-i', '-', '-c:v', 'libx264', '-preset', 'medium', '-crf', '24', '-pix_fmt', 'yuv420p', vid], { stdio: ['pipe', 'inherit', 'inherit'] });
  const n = Math.ceil(total * FPS);
  for (let i = 0; i < n; i++) {
    const u = await page.evaluate((t) => frame(t), i / FPS);
    if (!ff.stdin.write(Buffer.from(u.split(',')[1], 'base64'))) await new Promise((r) => ff.stdin.once('drain', r));
    if (i % 300 === 0) process.stdout.write(`  cuadro ${i}/${n}\n`);
  }
  ff.stdin.end(); await new Promise((r) => ff.on('close', r));
  await browser.close();
  // 4. Audio: cada narración en su lugar + lo-fi suave que se desvanece al final
  const ins = [], flt = [];
  nd.forEach((_, i) => { ins.push('-i', path.join(tmp, `s${i}.wav`)); flt.push(`[${i}:a]adelay=${Math.round((starts[i] + LEAD) * 1000)}:all=1[a${i}]`); });
  ins.push('-stream_loop', '-1', '-i', path.join(here, 'lofi.mp3'));
  const m = nd.length;
  flt.push(`[${m}:a]volume=0.22,atrim=0:${total.toFixed(2)},afade=t=out:st=${(total - 1.5).toFixed(2)}:d=1.5[mus]`);
  flt.push(`${nd.map((_, i) => `[a${i}]`).join('')}[mus]amix=inputs=${m + 1}:normalize=0,alimiter=limit=0.89:level=false,atrim=0:${total.toFixed(2)}[out]`);
  const aud = path.join(tmp, 'a.m4a');
  execFileSync('ffmpeg', ['-v', 'error', '-y', ...ins, '-filter_complex', flt.join(';'), '-map', '[out]', '-ac', '1', '-ar', '44100', '-c:a', 'aac', '-b:a', '96k', aud]);
  fs.mkdirSync(path.join(root, 'motion'), { recursive: true });
  const out = path.join(root, 'motion', tid + '.mp4');
  execFileSync('ffmpeg', ['-v', 'error', '-y', '-i', vid, '-i', aud, '-c:v', 'copy', '-c:a', 'copy', '-shortest', '-movflags', '+faststart', out]);
  fs.writeFileSync(path.join(root, 'motion', tid + '.json'), JSON.stringify({ dur: +total.toFixed(1), title: await (async () => title)() }));
  fs.rmSync(tmp, { recursive: true, force: true });
  console.log(`${out} · ${total.toFixed(1)} s · ${(fs.statSync(out).size / 1048576).toFixed(1)} MB`, errs.length ? '\nERRORES:\n' + errs.join('\n') : '');
})();
