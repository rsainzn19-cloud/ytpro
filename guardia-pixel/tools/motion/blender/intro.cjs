// Pone una toma 3D (cuadros PNG de Blender) al inicio de un clip “en 1 minuto”:
//   node tools/motion/blender/intro.cjs <tema> <carpeta de cuadros> intro.json
// intro.json: { "say": "narración", "captions": [[desde_s, hasta_s, "texto"], ...] }
// Escala a 1080 × 1350, rotula, narra (Piper, como render.cjs), mezcla lo-fi y concatena con motion/<tema>.mp4.
const fs = require('fs'), path = require('path'), os = require('os'), { execFileSync } = require('child_process');
const [tid, frames, cfgPath] = process.argv.slice(2);
const here = path.join(__dirname, '..'), root = path.join(here, '..', '..'), FPS = 30;
const cfg = JSON.parse(fs.readFileSync(cfgPath, 'utf8')), tmp = fs.mkdtempSync(path.join(os.tmpdir(), 'intro-'));
const FONT = '/usr/share/fonts/opentype/inter/InterDisplay-Bold.otf';
const ff = (args) => execFileSync('ffmpeg', ['-v', 'error', '-y', ...args], { stdio: 'inherit' });
const probe = (f) => +execFileSync('ffprobe', ['-v', 'error', '-show_entries', 'format=duration', '-of', 'csv=p=0', f]).toString();
// 1. Narración
fs.writeFileSync(path.join(tmp, 'say.json'), JSON.stringify([cfg.say]));
execFileSync(process.env.PIPER_PY, [path.join(here, 'tts.py'), path.join(tmp, 'say.json'), process.env.PIPER_VOICE, tmp], { stdio: 'inherit' });
const voice = JSON.parse(fs.readFileSync(path.join(tmp, 'dur.json')))[0];
const nFrames = fs.readdirSync(frames).filter((f) => f.endsWith('.png')).length, shot = nFrames / FPS;
const total = Math.max(shot, 0.4 + voice + 0.8);
// 2. Video: cuadros → 1080 × 1350, se sostiene el último cuadro si la voz dura más, rótulos abajo
const esc = (s) => s.replace(/\\/g, '\\\\').replace(/:/g, '\\:').replace(/'/g, '\u2019');
const labels = cfg.captions.map(([a, b, txt]) => `drawtext=fontfile=${FONT}:text='${esc(txt)}':fontsize=54:fontcolor=white:box=1:boxcolor=0x0B0E2A@0.82:boxborderw=26:x=(w-text_w)/2:y=h-230:alpha='if(lt(t,${a}),0,if(lt(t,${a + 0.25}),(t-${a})/0.25,if(lt(t,${b - 0.25}),1,if(lt(t,${b}),(${b}-t)/0.25,0))))'`).join(',');
const vid = path.join(tmp, 'v.mp4');
ff(['-framerate', String(FPS), '-i', path.join(frames, 'f%04d.png'), '-vf', `scale=1080:1350:flags=lanczos,tpad=stop_mode=clone:stop_duration=${Math.max(0, total - shot).toFixed(2)},${labels},fade=t=in:st=0:d=0.4,fade=t=out:st=${(total - 0.35).toFixed(2)}:d=0.35`, '-t', total.toFixed(2), '-c:v', 'libx264', '-preset', 'medium', '-crf', '22', '-pix_fmt', 'yuv420p', '-r', String(FPS), vid]);
// 3. Audio: voz + lo-fi
const aud = path.join(tmp, 'a.m4a');
ff(['-i', path.join(tmp, 's0.wav'), '-stream_loop', '-1', '-i', path.join(here, 'lofi.mp3'), '-filter_complex', `[0:a]adelay=400:all=1[v];[1:a]volume=0.22,atrim=0:${total.toFixed(2)}[m];[v][m]amix=inputs=2:normalize=0,alimiter=limit=0.89:level=false,atrim=0:${total.toFixed(2)}[out]`, '-map', '[out]', '-ac', '1', '-ar', '44100', '-c:a', 'aac', '-b:a', '96k', aud]);
const intro = path.join(tmp, 'intro.mp4');
ff(['-i', vid, '-i', aud, '-c:v', 'copy', '-c:a', 'copy', '-shortest', intro]);
// 4. Intro + clip (mismo formato) → motion/<tema>.mp4; se conserva el clip original como <tema>-2d.mp4
const clip = path.join(root, 'motion', `${tid}.mp4`), base = path.join(root, 'motion', `${tid}-2d.mp4`);
if (!fs.existsSync(base)) fs.copyFileSync(clip, base);
ff(['-i', intro, '-i', base, '-filter_complex', '[0:v][0:a][1:v][1:a]concat=n=2:v=1:a=1[v][a]', '-map', '[v]', '-map', '[a]', '-c:v', 'libx264', '-preset', 'medium', '-crf', '24', '-pix_fmt', 'yuv420p', '-c:a', 'aac', '-b:a', '96k', '-movflags', '+faststart', clip]);
const meta = path.join(root, 'motion', `${tid}.json`), j = JSON.parse(fs.readFileSync(meta, 'utf8'));
j.dur = +probe(clip).toFixed(1); j.intro3d = +total.toFixed(1); fs.writeFileSync(meta, JSON.stringify(j));
fs.rmSync(tmp, { recursive: true, force: true });
console.log(`${clip} · intro 3D ${total.toFixed(1)} s · total ${j.dur} s`);
