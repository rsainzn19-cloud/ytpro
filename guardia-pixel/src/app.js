// ═══════════ Guardia Pixel · lógica de la app
const C = JSON.parse(document.getElementById('contenido').textContent);
const $ = (s, r = document) => r.querySelector(s);
const esc = (s) => String(s ?? '').replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
const clamp = (v, a, b) => Math.max(a, Math.min(b, v));
const reduce = !!(window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches);
const shuffle = (a) => { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
const pct = (x) => Math.round(x * 100);
const LET = 'ABCDE';
const GEMS = '<i class="gem tl"></i><i class="gem tr"></i><i class="gem bl"></i><i class="gem br"></i>';

// ───── Fechas (siempre en formato AAAA-MM-DD, hora local)
const pad = (n) => String(n).padStart(2, '0');
const iso = (d) => `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
const pdate = (s) => { const [y, m, d] = s.split('-').map(Number); return new Date(y, m - 1, d); };
const addDays = (s, n) => { const d = pdate(s); d.setDate(d.getDate() + n); return iso(d); };
const diffDays = (a, b) => Math.round((pdate(b) - pdate(a)) / 864e5);
const today = () => iso(new Date());
const DOW = ['dom', 'lun', 'mar', 'mié', 'jue', 'vie', 'sáb'];
const DOWL = ['domingo', 'lunes', 'martes', 'miércoles', 'jueves', 'viernes', 'sábado'];
const MES = ['ene', 'feb', 'mar', 'abr', 'may', 'jun', 'jul', 'ago', 'sep', 'oct', 'nov', 'dic'];
const MESL = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'];
const fmtDay = (s) => { const d = pdate(s); return `${DOW[d.getDay()]} ${d.getDate()} ${MES[d.getMonth()]}`; };
const fmtLong = (s) => { const d = pdate(s); return `${DOWL[d.getDay()]} ${d.getDate()} de ${MESL[d.getMonth()]}`; };
const dayType = (s) => { const w = pdate(s).getDay(); return w === 2 ? 'tue' : w === 0 || w === 6 ? 'we' : 'wk'; };
const TYPE_LABEL = { wk: 'Hospital 7–15 h', tue: 'Martes académico', we: 'Fin de semana' };

// ───── Índices del contenido
const SUBJ = Object.fromEntries(C.subjects.map((s) => [s.id, s]));
const TOP = Object.fromEntries(C.topics.map((t) => [t.id, t]));
const QMAP = Object.fromEntries(C.questions.map((q) => [q.id, q]));
const DIAG = C.questions.filter((q) => q.diag);
const bank = (tid) => C.questions.filter((q) => q.topic === tid && !q.diag);
const hasContent = (tid) => !!C.lessons[tid];

// ───── Estado guardado en este navegador
const KEY = 'guardia-pixel-v1';
const fresh = () => ({
  v: 1, xp: 0,
  settings: { sound: false, timer: 10, budget: { wk: 90, tue: 150, we: 240 }, vspeed: 1, vvoice: true, vcc: true },
  act: {}, diag: { done: false, ans: {} }, qs: {}, tp: {}, cards: {}, newCards: { date: '', n: 0 },
  err: {}, errFixed: 0, cases: {}, plan: null, checks: {}, ach: {}, spins: 0, sims: [], cardRev: 0,
  daily: {}, cartas: 0, paid: {}, vid: {}
});
const normalize = (o) => { const f = fresh(); return { ...f, ...o, settings: { ...f.settings, ...o.settings, budget: { ...f.settings.budget, ...(o.settings && o.settings.budget) } }, diag: { ...f.diag, ...o.diag } }; };
function load() {
  try {
    const raw = localStorage.getItem(KEY);
    if (raw) return normalize(JSON.parse(raw));
  } catch (e) { /* sin almacenamiento: se juega sin guardar */ }
  return fresh();
}
let S = load();
// Firma del progreso (sin el plan, que se rehace solo): S._at cambia solo cuando cambia tu progreso de verdad
function sig(o) {
  const t = JSON.stringify({ ...o, plan: null, _at: 0 });
  let h = 2166136261;
  for (let i = 0; i < t.length; i++) { h ^= t.charCodeAt(i); h = Math.imul(h, 16777619); }
  return h >>> 0;
}
let SIG = sig(S);
function save() {
  const g = sig(S);
  if (g !== SIG) { SIG = g; S._at = Date.now(); }
  try { localStorage.setItem(KEY, JSON.stringify(S)); } catch (e) { /* ignorar */ }
  syncSoon();
}

// ───── Tu progreso en tu cuenta: un documento privado (data/users/<tu id>/progreso) que siguen todos tus dispositivos.
// Gana el progreso más reciente; un dispositivo nuevo (sin progreso) toma el de la cuenta.
const SY = { ref: null, state: 'off', pushed: 0, timer: null, busy: false, pending: null, last: 0 };
const hasProgress = (o) => !!o && (o.xp > 0 || Object.keys(o.qs || {}).length > 0 || Object.keys((o.diag && o.diag.ans) || {}).length > 0);
async function syncInit() {
  try {
    if (!window.claude || !window.claude.use) return;
    const [db, user] = await Promise.all([window.claude.use('db'), window.claude.use('user')]);
    const id = user && (await user.id());
    if (!db || !id) return;
    SY.ref = db.doc(`data/users/${id}/progreso`); SY.state = 'on';
    syncTake(await SY.ref.get(), true);
    SY.ref.onSnapshot((snap) => syncTake(snap, false), () => { SY.state = 'err'; syncUI(); });
    if ((S._at || 0) > SY.pushed && hasProgress(S)) syncSoon(500);
  } catch (e) { SY.state = SY.ref ? 'err' : 'off'; }
  syncUI();
}
function syncTake(snap, first) {
  if (!snap || !snap.exists) return;
  const d = snap.data() || {}, at = +d.at || 0;
  SY.pushed = Math.max(SY.pushed, at); SY.last = SY.last || at;
  let o = null;
  try { o = JSON.parse(d.s); } catch (e) { return; }
  if (!o || typeof o.xp !== 'number') return;
  const newer = at > (S._at || 0) || (!hasProgress(S) && hasProgress(o));
  if (!newer || at === (S._at || 0)) return;
  o._at = at;
  if (syncBusy()) { SY.pending = o; return; }
  syncAdopt(o, first ? 'Recuperé tu progreso de tu cuenta' : 'Tu progreso se actualizó desde otro dispositivo');
}
const syncBusy = () => (QS && !QS.finished) || (FS && route.v === 'tarjetas') || (VS && VS.playing) || route.v === 'caso';
function syncAdopt(o, msg) {
  const plan = S.plan;
  S = normalize(o); S.plan = plan; SIG = sig(S);
  try { localStorage.setItem(KEY, JSON.stringify(S)); } catch (e) { /* ignorar */ }
  SY.pending = null;
  buildPlan();
  if (msg) toast(msg);
  if (started) render();
}
function syncSoon(ms = 4000) {
  if (!SY.ref) return;
  clearTimeout(SY.timer); SY.timer = setTimeout(syncPush, ms);
}
async function syncPush() {
  if (!SY.ref || !(S._at > SY.pushed)) return;
  if (SY.busy) { syncSoon(1500); return; }
  const at = S._at, body = { v: 1, at, s: JSON.stringify({ ...S, plan: null }) };
  if (body.s.length > 230000) { SY.state = 'big'; syncUI(); return; }
  SY.busy = true;
  try { await SY.ref.set(body); SY.pushed = at; SY.last = Date.now(); SY.state = 'on'; }
  catch (e) { if (e && e.code === 'unavailable') syncSoon(6000); else SY.state = e && e.code === 'revoked' ? 'off' : 'err'; }
  SY.busy = false; syncUI();
}
document.addEventListener('visibilitychange', () => { if (document.hidden) syncPush(); });
function syncText() {
  const t = SY.last ? new Date(SY.last).toLocaleString('es-MX', { weekday: 'short', hour: '2-digit', minute: '2-digit' }) : '';
  return { on: `Activa: tu progreso se guarda en tu cuenta y aparece igual en tu iPhone, tu compu o donde abras esta página.${t ? ` Último guardado: ${t.replace(/\.$/, '')}.` : ''}`,
    err: 'No se pudo sincronizar ahora; se vuelve a intentar sola. Tu progreso sigue guardado en este dispositivo.',
    big: 'Tu progreso ya es muy grande para sincronizarlo; sigue guardado en este dispositivo. Usa el respaldo para pasarlo.',
    off: 'No disponible en esta vista (por ejemplo, fuera de Claude o sin sesión): tu progreso vive solo en este navegador. Usa el respaldo para pasarlo.' }[SY.state];
}
function syncUI() { const el = document.getElementById('syncst'); if (el) el.textContent = syncText(); }

// ───── Sonido 8-bit (apagado de inicio)
let AC = null;
const SFX = {
  ok: [[660, 0.08], [990, 0.14]], bad: [[200, 0.16, 'sawtooth', 0.04], [130, 0.22, 'sawtooth', 0.04]],
  click: [[880, 0.025, 'square', 0.025]], tick: [[1400, 0.02, 'square', 0.025]],
  up: [[523, 0.08], [659, 0.08], [784, 0.08], [1047, 0.22]], flip: [[520, 0.04], [780, 0.05]]
};
function audio() {
  AC = AC || new (window.AudioContext || window.webkitAudioContext)();
  if (AC.state === 'suspended') AC.resume();
  return AC;
}
function tones(seq) {
  try {
    const ac = audio();
    let t = ac.currentTime;
    for (const [f, d, type = 'square', vol = 0.05] of seq || []) {
      const o = ac.createOscillator(), g = ac.createGain();
      o.type = type; o.frequency.value = f;
      g.gain.setValueAtTime(vol, t); g.gain.exponentialRampToValueAtTime(0.0001, t + d);
      o.connect(g).connect(ac.destination); o.start(t); o.stop(t + d + 0.02); t += d * 0.9;
    }
  } catch (e) { /* sin audio */ }
}
function beep(name) { if (S.settings.sound) tones(SFX[name]); }
// Barrido de ruido filtrado: el “fiuuu” de los cambios de escena
function whoosh(vol = 0.05) {
  try {
    const ac = audio(), n = Math.floor(ac.sampleRate * 0.22), buf = ac.createBuffer(1, n, ac.sampleRate), d = buf.getChannelData(0);
    for (let i = 0; i < n; i++) d[i] = (Math.random() * 2 - 1) * (1 - i / n);
    const src = ac.createBufferSource(), f = ac.createBiquadFilter(), g = ac.createGain(), t = ac.currentTime;
    f.type = 'bandpass'; f.Q.value = 1.2; f.frequency.setValueAtTime(500, t); f.frequency.exponentialRampToValueAtTime(3200, t + 0.2);
    g.gain.setValueAtTime(vol, t); g.gain.exponentialRampToValueAtTime(0.0001, t + 0.22);
    src.buffer = buf; src.connect(f).connect(g).connect(ac.destination); src.start(t);
  } catch (e) { /* sin audio */ }
}
// Efectos del video: suenan aunque el sonido general esté apagado; se controlan con “♪” en el reproductor
const VSFX = {
  chapter: [[392, 0.08], [523, 0.08], [659, 0.08], [784, 0.2]],
  pop: [[640, 0.045, 'square', 0.03]],
  big: [[1047, 0.06, 'square', 0.04], [1568, 0.24, 'triangle', 0.05]],
  trap: [[880, 0.11, 'square', 0.035], [660, 0.11, 'square', 0.035], [880, 0.11, 'square', 0.035], [660, 0.15, 'square', 0.035]],
  pearl: [[1319, 0.05, 'triangle', 0.045], [1760, 0.05, 'triangle', 0.045], [2093, 0.18, 'triangle', 0.045]],
  mnemo: [[988, 0.07, 'square', 0.04], [1319, 0.2, 'square', 0.04]],
  recap: [[784, 0.06], [988, 0.06], [1175, 0.06], [1568, 0.16]],
  beat: [[1046, 0.06, 'sine', 0.05]],
  tick: [[1100, 0.03, 'square', 0.03]], tock: [[1650, 0.05, 'square', 0.04]],
  ok: [[523, 0.07], [659, 0.07], [784, 0.07], [1047, 0.22]],
  bad: [[220, 0.15, 'sawtooth', 0.04], [165, 0.26, 'sawtooth', 0.04]],
  end: [[523, 0.1], [523, 0.1], [784, 0.1], [1047, 0.14], [784, 0.08], [1047, 0.34]]
};
function vfx(name, k = 0) {
  if (!VS || !VS.sfx) return;
  if (name === 'scene') { whoosh(); return; }
  if (name === 'pop') { tones([[620 + Math.min(k, 6) * 85, 0.045, 'square', 0.03]]); return; }
  if (name === 'combo') { tones([[784 + k * 60, 0.06], [988 + k * 60, 0.06], [1319 + k * 60, 0.16]]); return; }
  tones(VSFX[name]);
}

// ───── Música de fondo del video: lo-fi tranquilo a 80 BPM, generado una sola vez en el teléfono (sin archivos).
// Suena como <audio> (igual que la voz, también en modo silencio) y los efectos visuales caen en su pulso.
const BPM = 80, BEAT = 60 / BPM, LOOP = 32 * 4 * BEAT;
const MU = { el: null, url: null, busy: null, want: false, ct: 0, at: 0 };
function wavURL(data, sr) {
  const n = data.length, b = new ArrayBuffer(44 + n * 2), v = new DataView(b);
  const str = (o, x) => { for (let i = 0; i < x.length; i++) v.setUint8(o + i, x.charCodeAt(i)); };
  str(0, 'RIFF'); v.setUint32(4, 36 + n * 2, true); str(8, 'WAVEfmt '); v.setUint32(16, 16, true); v.setUint16(20, 1, true); v.setUint16(22, 1, true);
  v.setUint32(24, sr, true); v.setUint32(28, sr * 2, true); v.setUint16(32, 2, true); v.setUint16(34, 16, true); str(36, 'data'); v.setUint32(40, n * 2, true);
  for (let i = 0; i < n; i++) v.setInt16(44 + i * 2, Math.max(-1, Math.min(1, data[i])) * 32767, true);
  return URL.createObjectURL(new Blob([b], { type: 'audio/wav' }));
}
function musicRender() {
  if (MU.busy) return MU.busy;
  const OAC = window.OfflineAudioContext || window.webkitOfflineAudioContext, tail = 4;
  let ac = null, sr = 22050;
  for (const r of [22050, 44100]) { try { ac = new OAC(1, Math.ceil((LOOP + tail) * r), r); sr = r; break; } catch (e) { /* otra tasa */ } }
  if (!ac) return (MU.busy = Promise.resolve(null));
  const hz = (m) => 440 * Math.pow(2, (m - 69) / 12);
  const out = ac.createGain(), warm = ac.createBiquadFilter();
  warm.type = 'lowpass'; warm.frequency.value = 4200; out.gain.value = 1; out.connect(warm).connect(ac.destination);
  const noise = ac.createBuffer(1, Math.floor(sr * 0.5), sr), nd = noise.getChannelData(0);
  for (let i = 0; i < nd.length; i++) nd[i] = Math.random() * 2 - 1;
  const env = (g, t, a, peak, d) => { g.gain.setValueAtTime(0.0001, t); g.gain.linearRampToValueAtTime(peak, t + a); g.gain.exponentialRampToValueAtTime(0.0001, t + a + d); };
  // Eco suave para los arpegios
  const dl = ac.createDelay(2), fb = ac.createGain(), wet = ac.createGain();
  dl.delayTime.value = BEAT * 0.75; fb.gain.value = 0.32; wet.gain.value = 0.5; dl.connect(fb).connect(dl); dl.connect(wet).connect(out);
  const pad = ac.createBiquadFilter(); pad.type = 'lowpass'; pad.frequency.value = 2200; pad.connect(out);
  // Fa maj7 – Mi m7 – Re m7 – Do maj7: misma tonalidad (Do) que los efectos del video
  const CH = [[53, 57, 60, 64], [52, 55, 59, 62], [50, 53, 57, 60], [48, 52, 55, 59]], ROOT = [41, 40, 38, 36];
  const ARP = [[0, 2, 1, 3, -1, 2, 1, -1], [3, -1, 2, 1, 0, -1, 2, -1], [0, 1, 2, 3, 2, -1, 1, -1], [2, -1, 3, -1, 1, 0, -1, -1]];
  const tone = (type, f, t, a, peak, d, dest, det = 0) => { const o = ac.createOscillator(), g = ac.createGain(); o.type = type; o.frequency.value = f; o.detune.value = det; env(g, t, a, peak, d); o.connect(g).connect(dest); o.start(t); o.stop(t + a + d + 0.05); };
  const bus = (type, fq) => { const f = ac.createBiquadFilter(); f.type = type; f.frequency.value = fq; f.connect(out); return f; };
  const HAT = bus('highpass', 7000), RIM = bus('bandpass', 1900), DUST = bus('highpass', 2500), ARPF = bus('lowpass', 2400);
  ARPF.connect(dl);
  const hit = (t, peak, d, dest) => { const sN = ac.createBufferSource(), g = ac.createGain(); sN.buffer = noise; env(g, t, 0.002, peak, d); sN.connect(g).connect(dest); sN.start(t, Math.random() * 0.3); sN.stop(t + d + 0.05); };
  for (let bar = 0; bar < 32; bar++) {
    const t0 = bar * 4 * BEAT, c = CH[bar % 4], sec = bar >> 3;
    c.forEach((m) => { tone('triangle', hz(m), t0, 0.5, 0.07, 4 * BEAT + 0.4, pad, -7); tone('sawtooth', hz(m), t0, 0.5, 0.025, 4 * BEAT + 0.4, pad, 7); });
    tone('triangle', hz(ROOT[bar % 4] + 12), t0, 0.01, 0.11, 1.6 * BEAT, out); tone('triangle', hz(ROOT[bar % 4] + (bar % 2 ? 19 : 24)), t0 + 2.5 * BEAT, 0.01, 0.08, 1.2 * BEAT, out);
    for (const k of [0, 2]) {
      const t = t0 + k * BEAT, o = ac.createOscillator(), g = ac.createGain();
      o.frequency.setValueAtTime(150, t); o.frequency.exponentialRampToValueAtTime(55, t + 0.12); env(g, t, 0.003, 0.14, 0.22);
      o.connect(g).connect(out); o.start(t); o.stop(t + 0.35);
    }
    for (let e = 0; e < 8; e++) hit(t0 + e * BEAT / 2 + (e % 2 ? 0.035 : 0), e % 2 ? 0.06 : 0.03, 0.04, HAT);
    if (sec >= 1) for (const k of [1, 3]) hit(t0 + k * BEAT, 0.1, 0.09, RIM);
    if (sec >= 1) ARP[(bar + sec) % 4].forEach((ix, e) => {
      if (ix < 0 || (sec === 3 && e > 5)) return;
      tone('square', hz(c[ix] + 12), t0 + e * BEAT / 2, 0.005, 0.05, 0.42, ARPF);
    });
    for (let k = 0; k < 6; k++) hit(t0 + Math.random() * 4 * BEAT, 0.015 + Math.random() * 0.015, 0.004, DUST);
  }
  MU.busy = new Promise((res) => {
    let fired = false;
    const fin = (buf) => {
      if (fired) return; fired = true;
      if (!buf) { res(null); return; }
      const all = buf.getChannelData(0), n = Math.round(LOOP * sr), d = all.slice(0, n);
      for (let i = n; i < all.length; i++) d[i - n] += all[i];   // la cola del final entra al inicio: el bucle no salta
      let pk = 0; for (let i = 0; i < n; i++) pk = Math.max(pk, Math.abs(d[i]));
      const k = pk ? 0.4 / pk : 1; for (let i = 0; i < n; i++) d[i] *= k;   // volumen fijo de fondo, debajo de la voz
      res(wavURL(d, sr));
    };
    ac.oncomplete = (e) => fin(e.renderedBuffer);
    try { const p = ac.startRendering(); if (p && p.then) p.then(fin, () => fin(null)); } catch (e) { fin(null); }
  });
  return MU.busy;
}
// Se llama desde el toque de ▶: desbloquea el <audio> aunque la pista aún se esté generando
function musicStart() {
  if (!VS || !VS.music) return;
  MU.want = true;
  if (!MU.el) { MU.el = new Audio(); MU.el.loop = true; MU.el.preload = 'auto'; MU.el.setAttribute('playsinline', ''); }
  const play = () => { try { const p = MU.el.play(); if (p && p.catch) p.catch(() => {}); } catch (e) { /* sin música */ } };
  if (MU.url) { if (MU.el.src !== MU.url) MU.el.src = MU.url; play(); return; }
  MU.el.src = MU.mute || (MU.mute = wavURL(new Float32Array(2205), 22050)); play();
  musicRender().then((url) => { if (!url) return; MU.url = url; if (MU.want && VS && VS.playing && VS.music) { MU.el.src = url; play(); } });
}
function musicStop() { MU.want = false; if (MU.el) try { MU.el.pause(); } catch (e) { /* nada */ } }
// Posición en pulsos (interpolada entre lecturas de currentTime), o null si la música no suena
function musicBeat() {
  const el = MU.el;
  if (!el || el.paused || !MU.url || el.src !== MU.url) return null;
  const now = performance.now(), ct = el.currentTime;
  if (ct !== MU.ct) { MU.ct = ct; MU.at = now; }
  return (ct + Math.min(0.5, (now - MU.at) / 1000)) / BEAT;
}
// Retraso (ms) para que algo que tocaba en `ms` caiga en el siguiente pulso (step = 0.5 → corcheas)
function musicSnap(ms, step = 0.5) {
  const b = musicBeat();
  if (b == null) return ms;
  const at = b + ms / 1000 / BEAT;
  return Math.max(0, (Math.ceil(at / step - 0.02) * step - b) * BEAT * 1000);
}

// ───── Sprites (cuadrícula de texto → SVG nítido)
const SPR = {
  heart: ['.XX...XX.', 'XWXX.XXXX', 'XXXXXXXXX', 'XXXXXXXXX', '.XXXXXXX.', '..XXXXX..', '...XXX...', '....X....'],
  thyroid: ['.XX...XX.', 'XXXX.XXXX', 'XWXXXXXXX', 'XXXXXXXXX', 'XXXX.XXXX', '.XXX.XXX.', '..X...X..'],
  stomach: ['..XX.....', '..XX.....', '..XXX....', '.XXXXXX..', 'XXWXXXXX.', 'XXXXXXXXX', '.XXXXXXXX', '..XXXX.XX', '.......XX'],
  drop: ['...X...', '...X...', '..XXX..', '..XXX..', '.XXXXX.', 'XXWXXXX', 'XWXXXXX', 'XXXXXXX', '.XXXXX.'],
  kidney: ['.XXXX...', 'XXXXXX..', 'XWXXXXX.', 'XXXXX.D.', 'XXXX..DD', 'XXXXX.D.', 'XXXXXXX.', 'XXXXXX..', '.XXXX...'],
  bone: ['XX.....XX', 'XXX...XXX', '.XXXXXXX.', 'XXX...XXX', 'XX.....XX'],
  life: ['.XX.XX.', 'XWXXXXX', 'XXXXXXX', '.XXXXX.', '..XXX..', '...X...'],
  flame: ['...Y...', '...YY..', '..YYY..', '.YYOYY.', '.YOOOY.', 'YOORROY', 'YORRROY', '.YORRY.', '..YYY..'],
  star: ['...X...', '..XXX..', 'XXXXXXX', '.XXXXX.', '..XXX..', '.XX.XX.', 'XX...XX'],
  lock: ['..XXX..', '.X...X.', '.X...X.', 'XXXXXXX', 'XXX.XXX', 'XXX.XXX', 'XXXXXXX'],
  home: ['....X....', '...XXX...', '..XXXXX..', '.XXXXXXX.', 'XXXXXXXXX', '.XX...XX.', '.XX.X.XX.', '.XX.X.XX.', '.XXXXXXX.'],
  book: ['XXXX.XXXX', 'X..X.X..X', 'X.XX.XX.X', 'X..X.X..X', 'X.XX.XX.X', 'X..X.X..X', 'XXXX.XXXX', '....X....'],
  monitor: ['XXXXXXXXX', 'X.......X', 'X...X...X', 'X..X.X..X', 'XXX...XXX', 'X.......X', 'XXXXXXXXX', '...XXX...'],
  cards: ['..XXXXXXX', '..X.....X', 'XXXXXXX.X', 'X.....X.X', 'X.XXX.X.X', 'X.....XXX', 'X.XX..X..', 'X.....X..', 'XXXXXXX..'],
  grid: ['XX.XX.XX.', 'XX.XX.XX.', '.........', 'XX.XX.XX.', 'XX.XX.XX.', '.........', 'XX.XX.XX.', 'XX.XX.XX.'],
  mask: ['....RRRRRRRR....', '..RRRRGGGGRRRR..', '.RRRRGWWGGGRRRR.', '.RRRRGWGGGGRRRR.', 'RRRRRRGGGGRRRRRR', 'RYYYRRRRRRRRYYYR',
    'YWWWYRRRRRRYWWWY', 'YWKWYRRYYRRYWKWY', 'RYYYRRRYYRRRYYYR', 'RRRRRRRYYRRRRRRR', '.RRRRRRYYRRRRRR.', '.RRRRYYYYYYRRRR.',
    '..RRYSSSSSSYRR..', '..RRYSKKKKSYRR..', '...RRYYYYYYRR...', '.....RRRRRR.....'],
  patient: ['.....HHHHHH.....', '....HHHHHHHH....', '....HSSSSSSH....', '....SSKSSKSS....', '....SSSSSSSS....', '.....SSMMSS.....',
    '......SSSS......', '...BBBBBBBBBB...', '..BBBBBBBBBBBB..', '..BBBWBBBBWBBB..', '..BB.BBBBBB.BB..', '..BB.BBBBBB.BB..',
    '..SS.BBBBBB.SS..', '.....BBBBBB.....', '.....BBBBBB.....', '.....BB..BB.....', '.....SS..SS.....', '.....SS..SS.....', '....KKK..KKK....']
};
const MASK_PAL = { R: '#C8283C', Y: '#F2C14E', W: '#FFFFFF', K: '#10122B', G: '#AEBBD0', S: '#E0A27A' };
const FLAME_PAL = { Y: '#FFD166', O: '#FF9B3D', R: '#FF5C70' };
function svgSpr(rows, pal, scale = 2, label) {
  const h = rows.length, w = Math.max(...rows.map((r) => r.length));
  let rects = '';
  rows.forEach((row, y) => {
    let x = 0;
    while (x < row.length) {
      const ch = row[x];
      if (ch === '.' || !pal[ch]) { x++; continue; }
      let x2 = x; while (x2 + 1 < row.length && row[x2 + 1] === ch) x2++;
      rects += `<rect x="${x}" y="${y}" width="${x2 - x + 1}" height="1" fill="${pal[ch]}"/>`;
      x = x2 + 1;
    }
  });
  const a11y = label ? `role="img" aria-label="${esc(label)}"` : 'aria-hidden="true" focusable="false"';
  return `<svg class="spr" width="${w * scale}" height="${h * scale}" viewBox="0 0 ${w} ${h}" shape-rendering="crispEdges" ${a11y}>${rects}</svg>`;
}
function shade(hex, f = 0.6) {
  const n = parseInt(hex.slice(1), 16);
  return '#' + [n >> 16, (n >> 8) & 255, n & 255].map((v) => Math.round(v * f).toString(16).padStart(2, '0')).join('');
}
const icon = (name, color, scale = 2) => svgSpr(SPR[name], { X: color, W: '#FFFFFF', D: shade(color) }, scale);
const subjIcon = (sid, scale = 2) => icon(SUBJ[sid].icon, SUBJ[sid].color, scale);
const lifeIcon = (on) => svgSpr(SPR.life, { X: on ? '#FF5C70' : '#2D3680', W: on ? '#FFFFFF' : '#2D3680' }, 3, on ? 'vida' : 'vida perdida');
const subjChip = (sid) => `<span class="chip" style="--sc:${SUBJ[sid].color}">${subjIcon(sid, 1)} ${esc(SUBJ[sid].short)}</span>`;
const difStars = (d) => `<span class="stars-d" aria-label="Dificultad ${d} de 3">${'■'.repeat(d)}${'□'.repeat(3 - d)}</span>`;

// ───── Cielo estrellado de fondo
function stars() {
  const cv = $('#stars'), ctx = cv.getContext('2d');
  let pts = [];
  const size = () => {
    const s = 3, w = Math.ceil(innerWidth / s), h = Math.ceil(innerHeight / s);
    cv.width = w; cv.height = h; cv.style.width = innerWidth + 'px'; cv.style.height = innerHeight + 'px';
    pts = [];
    const n = Math.round((w * h) / 420);
    for (let i = 0; i < n; i++) pts.push({ x: Math.floor(Math.random() * w), y: Math.floor(Math.random() * h), k: Math.random() < 0.04 ? 2 : Math.random() < 0.35 ? 1 : 0, ph: Math.random() * 6 });
    draw(0);
  };
  const draw = (t) => {
    ctx.clearRect(0, 0, cv.width, cv.height);
    for (const p of pts) {
      const on = reduce || Math.sin(t * 1.3 + p.ph) > -0.6;
      if (!on) continue;
      if (p.k === 2) { ctx.fillStyle = '#FFE7A6'; ctx.fillRect(p.x - 1, p.y, 3, 1); ctx.fillRect(p.x, p.y - 1, 1, 3); }
      else { ctx.fillStyle = p.k ? '#B9BFEC' : '#4A5296'; ctx.fillRect(p.x, p.y, 1, 1); }
    }
  };
  size();
  addEventListener('resize', size);
  if (!reduce) setInterval(() => draw(performance.now() / 1000), 700);
}

// ───── Bucles de animación (uno solo para toda la página)
const loops = new Set();
let rafId = null;
function tick(ts) { for (const f of loops) f(ts); rafId = loops.size ? requestAnimationFrame(tick) : null; }
function loop(fn) { if (reduce) { fn(2500); return; } loops.add(fn); if (!rafId) rafId = requestAnimationFrame(tick); }
function stopLoops() { loops.clear(); }
const timers = new Set();
function every(ms, fn) { const id = setInterval(fn, ms); timers.add(id); return id; }
function clearTimers() { timers.forEach(clearInterval); timers.clear(); }

// ───── Toast y diálogos
let toastT = null;
function toast(msg) { const el = $('#toast'); el.textContent = msg; el.classList.add('on'); clearTimeout(toastT); toastT = setTimeout(() => el.classList.remove('on'), 2600); }
function modal(html, acts = {}) {
  const m = $('#modal');
  m.innerHTML = `<div class="panel" role="dialog" aria-modal="true">${html}</div>`;
  m.hidden = false; Object.assign(ACT, acts);
  const b = m.querySelector('button'); if (b) b.focus();
}
function closeModal() { const m = $('#modal'); m.hidden = true; m.innerHTML = ''; }
function confirmBox(title, msg, okLabel, onOk) {
  modal(`<h2>${esc(title)}</h2><p>${esc(msg)}</p><div class="row"><button class="btn" data-act="mclose">Cancelar</button><button class="btn gold-btn" data-act="mok">${esc(okLabel)}</button></div>`,
    { mok: () => { closeModal(); onOk(); } });
}

// ───── XP, rangos, racha y logros
const rankIdx = (xp) => C.ranks.reduce((i, r, k) => (xp >= r.xp ? k : i), 0);
function gain(n, msg) {
  const before = rankIdx(S.xp);
  S.xp += n;
  const d = today(); S.act[d] = (S.act[d] || 0) + n;
  if (msg) toast(`+${n} XP · ${msg}`);
  const after = rankIdx(S.xp);
  if (after > before) {
    beep('up');
    const nx = C.ranks[after + 1];
    setTimeout(() => modal(`<p class="eyebrow">Subiste de rango</p><h2>${esc(C.ranks[after].long)}</h2><p class="muted">Ahora eres ${esc(C.ranks[after].name)}. ${nx ? `Siguiente: ${esc(nx.long)} en ${nx.xp - S.xp} XP.` : 'Llegaste al rango máximo.'}</p><button class="btn gold-btn" data-act="mclose">Seguir</button>`), 350);
  }
  checkAch(); save(); hud();
}
function streak() {
  let n = 0, d = today();
  if (!S.act[d]) d = addDays(d, -1);
  while (S.act[d]) { n++; d = addDays(d, -1); }
  return n;
}
const subjOk = (sid) => Object.entries(S.qs).reduce((a, [id, s]) => a + (QMAP[id] && QMAP[id].subj === sid ? s.ok : 0), 0);
const SUBJ_ACH = { cardio: 'Corazón de acero', endo: 'Glándula maestra', gastro: 'Estómago de hierro', hemato: 'Sangre fría', nefro: 'Riñón de titanio', reuma: 'Articulación de diamante' };
const ACH = [
  ['diag', 'Signos vitales', 'Termina el diagnóstico inicial', () => S.diag.done],
  ['lec1', 'Primera lección', 'Lee una lección completa', () => Object.values(S.tp).some((t) => t.read)],
  ['lec3', 'Lector de guardia', 'Lee 3 lecciones', () => Object.values(S.tp).filter((t) => t.read).length >= 3],
  ['g1', 'Primera guardia', 'Completa un caso del modo guardia', () => Object.values(S.cases).some((c) => c.done)],
  ['g3', 'Sin bajas', 'Termina un caso sin perder vidas', () => Object.values(S.cases).some((c) => c.best === 3)],
  ['boss', 'Le quitaste la máscara', 'Vence al Enmascarado en un tema', () => Object.values(S.tp).some((t) => t.boss)],
  ['carta', 'Carta abierta', 'Resuelve una carta misteriosa', () => S.cartas > 0],
  ['spin5', 'Ruletero', 'Gira la ruleta 5 veces', () => S.spins >= 5],
  ['cards50', 'Tarjetero', 'Repasa 50 tarjetas', () => S.cardRev >= 50],
  ['err5', 'Cuaderno limpio', 'Saca 5 preguntas del cuaderno de errores', () => S.errFixed >= 5],
  ['r3', 'Constancia', 'Racha de 3 días', () => streak() >= 3],
  ['r7', 'Semana de guardia', 'Racha de 7 días', () => streak() >= 7],
  ['vid1', 'Primera función', 'Ve un video completo', () => Object.values(S.vid).some((v) => v.done)],
  ['vid10', 'Maratonista', 'Ve 10 videos completos', () => Object.values(S.vid).filter((v) => v.done).length >= 10],
  ['sim80', 'Listo para el aula 3', 'Saca ≥80% en un simulacro de 20 o más', () => S.sims.some((s) => s.n >= 20 && s.ok / s.n >= 0.8)],
  ...C.subjects.map((s) => [`s-${s.id}`, SUBJ_ACH[s.id], `15 aciertos en ${s.name}`, () => subjOk(s.id) >= 15])
];
function checkAch() {
  for (const [id, name, , ok] of ACH) {
    if (S.ach[id]) continue;
    let got = false; try { got = ok(); } catch (e) { got = false; }
    if (got) { S.ach[id] = today(); S.xp += 25; setTimeout(() => toast(`Logro: ${name} · +25 XP`), 900); }
  }
}

// ───── Dominio por tema (diagnóstico + práctica)
function diagAvg(filter) {
  const qs = DIAG.filter(filter).filter((q) => q.id in S.diag.ans);
  return qs.length ? qs.reduce((a, q) => a + (S.diag.ans[q.id] ? 1 : 0), 0) / qs.length : null;
}
function prior(tid) {
  if (!S.diag.done) return 0.4;
  const own = diagAvg((q) => q.topic === tid);
  if (own !== null) return 0.2 + 0.6 * own;
  const sub = diagAvg((q) => q.subj === TOP[tid].subj);
  return 0.2 + 0.55 * (sub ?? 0.4);
}
function mastery(tid) {
  let n = 0, ok = 0;
  for (const q of C.questions) if (q.topic === tid && !q.diag && S.qs[q.id]) { n += S.qs[q.id].n; ok += S.qs[q.id].ok; }
  return (ok + 3 * prior(tid)) / (n + 3);
}
const known = (tid) => S.diag.done || bank(tid).some((q) => S.qs[q.id]);
const mClass = (m) => (m < 0.45 ? 'lo' : m < 0.7 ? 'mid' : 'hi');
const bkey = (date, b) => `${date}|${b.k}|${b.t}`;
function topicsDone() {
  const s = new Set();
  for (const t of C.topics) if (S.tp[t.id] && S.tp[t.id].done) s.add(t.id);
  for (const [k, v] of Object.entries(S.checks)) { if (!v) continue; const [, kind, tid] = k.split('|'); if (kind === 'topic' && tid) s.add(tid); }
  return s;
}
const answeredIn = (tid) => bank(tid).filter((q) => S.qs[q.id]).length;
function checkTopicDone(tid) {
  const tp = S.tp[tid] || (S.tp[tid] = {});
  if (tp.done || !tp.read || answeredIn(tid) < 10) return;
  tp.done = true; tp.doneOn = today();
  for (const d of (S.plan && S.plan.days) || []) for (const b of d.blocks) if (b.k === 'topic' && b.t === tid) S.checks[bkey(d.date, b)] = true;
  save(); toast(`Tema completado: ${TOP[tid].title}`);
}

// ═══════════ Plan de estudio día por día
const P_BASE = { alta: 60, media: 40, baja: 25 };
const P_W = { alta: 3, media: 2, baja: 1 };
function availFrom(t) {
  const mn = Math.min(...t.weeks);
  if (mn >= 6) return addDays(C.exam.classes[6], 1);
  if (mn >= 5) return addDays(C.exam.classes[5], 1);
  return null;
}
// Tema empezado y sin terminar: ya leíste la lección, viste (parte de) el video o contestaste preguntas
function begun(tid) {
  const tp = S.tp[tid] || {}, v = S.vid[tid] || {};
  return !tp.done && !!(tp.read || v.done || v.pos || answeredIn(tid));
}
// Lo que ya llevas de un tema empezado se descuenta de su bloque
function partLeft(tid) {
  const tp = S.tp[tid] || {}, v = S.vid[tid] || {};
  return Math.max(0.5, 1 - (tp.read ? 0.25 : 0) - (v.done ? 0.2 : v.pos ? 0.1 : 0) - Math.min(0.2, answeredIn(tid) * 0.02));
}
const topicCost = (t, f = 1) => Math.max(15, Math.round((f * partLeft(t.id) * P_BASE[t.pri] * (1.2 - 0.5 * mastery(t.id))) / 5) * 5);
// Lo ya empezado va primero; después, prioridad y puntos débiles
const topicScore = (t) => (begun(t.id) ? 10 : 0) + P_W[t.pri] * (1.25 - mastery(t.id)) - t.n * 0.001;
// Arma los días desde `from`. Con f < 1 los bloques de tema se acortan para que la primera vuelta
// de los 30 temas quepa antes del examen; buildPlan prueba de f = 1 hacia abajo.
function planDays(from, last, firstOn0, pending, f) {
  const firstOn = { ...firstOn0 }, sched = new Set(), second = new Set(), w6 = new Set(), days = [];
  const after6 = addDays(C.exam.classes[6], 1);
  for (let d = from; d <= last; d = addDays(d, 1)) {
    const type = dayType(d), blocks = [];
    let rem = S.settings.budget[type];
    const add = (k, t, min, title, x) => { blocks.push({ k, t: t || '', min, title: title || '', x: x || null }); rem -= min; };
    if (d === last) {
      add('final', '', 40, 'Perlas, trampas y mnemotecnias de prioridad alta');
      add('cards', '', 20, 'Tarjetas y errores pendientes');
      add('rest', '', 0, 'Duerme 7–8 h. Mañana: aula 3, llega 20 min antes');
      days.push({ date: d, type, blocks }); continue;
    }
    const isSim = C.exam.sim.includes(d);
    if (!S.diag.done && d === from) add('diag', '', 30);
    if (isSim) add('sim', '', 90, d === C.exam.sim[0] ? 'Simulacro 1 · las seis materias' : 'Simulacro 2 · las seis materias');
    if (Object.keys(firstOn).length && !isSim) {
      // El repaso espaciado no se come el día: máximo ~20% del tiempo disponible (mínimo 10 min)
      const due = Object.entries(firstOn).filter(([, fd]) => [2, 6].includes(diffDays(fd, d))).map(([tid]) => tid);
      add('review', '', Math.max(10, Math.min(30, 10 + 5 * due.length, Math.round(S.settings.budget[type] * 0.2 / 5) * 5)), '', due);
    }
    while (rem >= 15) {
      const av = pending.filter((t) => !sched.has(t.id) && (!availFrom(t) || d >= availFrom(t) || begun(t.id)));
      if (!av.length) break;
      av.sort((a, b) => topicScore(b) - topicScore(a));
      // El de mayor prioridad si cabe al menos el 60% de su tiempo; si no, el siguiente que quepa completo
      // (pero un tema nuevo no se mete antes de uno que ya empezaste).
      const t = topicCost(av[0], f) * 0.6 <= rem ? av[0] : av.find((x) => topicCost(x, f) <= rem && (begun(x.id) || !begun(av[0].id)));
      if (!t) break;
      const cost = topicCost(t, f);
      add('topic', t.id, Math.min(cost, rem)); sched.add(t.id); firstOn[t.id] = d;
    }
    if (isSim && rem >= 15) add('errs', '', Math.min(30, rem));
    if (d >= after6) for (const t of C.topics) {
      if (rem >= 20 && t.weeks.includes(5) && t.weeks.includes(6) && firstOn[t.id] && firstOn[t.id] < after6 && !w6.has(t.id)) {
        add('second', t.id, 20, 'Lo nuevo de la semana 6 (3 nov)'); w6.add(t.id);
      }
    }
    // Tiempo sobrante: segunda vuelta de los temas más débiles (en simulacro, o si ya no hay temas nuevos que quepan)
    const weak = C.topics.filter((t) => firstOn[t.id] && firstOn[t.id] < d && !second.has(t.id))
      .sort((a, b) => mastery(a.id) - mastery(b.id) || P_W[b.pri] - P_W[a.pri]);
    for (const t of weak.slice(0, isSim ? 6 : 3)) { if (rem < 20) break; add('second', t.id, 20, isSim ? 'Tema débil según tu práctica' : 'Segunda vuelta: preguntas falladas y perlas'); second.add(t.id); }
    days.push({ date: d, type, blocks });
  }
  return { days, left: pending.filter((t) => !sched.has(t.id)).map((t) => t.id) };
}
function buildPlan() {
  const td = today(), start = C.exam.start, last = addDays(C.exam.date, -1);
  const from = td > start ? td : start;
  const keep = ((S.plan && S.plan.days) || []).filter((d) => d.date < from && d.date >= start);
  const done = topicsDone();
  const firstOn = {};
  for (const d of keep) for (const b of d.blocks) if (b.k === 'topic' && done.has(b.t) && !firstOn[b.t]) firstOn[b.t] = d.date;
  for (const tid of done) if (!firstOn[tid]) firstOn[tid] = (S.tp[tid] && S.tp[tid].doneOn) || addDays(from, -1);
  const pending = C.topics.filter((t) => !done.has(t.id));
  let r = null, f = 1;
  for (f of [1, 0.85, 0.7, 0.55, 0.4]) { r = planDays(from, last, firstOn, pending, f); if (!r.left.length) break; }
  const { days, left } = r;
  // Si ni comprimido alcanza (poco tiempo por día), lo que falte entra como perlas rápidas antes del examen.
  const simDay = days.find((x) => x.date === C.exam.sim[1]) || days[days.length - 2] || days[days.length - 1];
  if (simDay) for (const tid of left) simDay.blocks.push({ k: 'quick', t: tid, min: 10, title: '', x: null });
  S.plan = { built: td, start, days: [...keep, ...days], left, fit: f };
  save();
}
function topicParts(tid) {
  if (!hasContent(tid)) return 'Con tus apuntes';
  const p = C.lessons[tid].video ? ['Video', 'lección'] : ['Lección'];
  if (C.lessons[tid].anim) p.push('animación');
  p.push('preguntas');
  if (C.cases.some((c) => c.topic === tid)) p.push('guardia');
  p.push('tarjetas', 'videos');
  return p.join(', ').replace(/, ([^,]+)$/, ' y $1');
}
function blockInfo(b) {
  const t = TOP[b.t];
  switch (b.k) {
    case 'topic': return { title: `Tema ${t.n} · ${t.title}`, sub: (begun(t.id) ? 'Continúa lo que empezaste · ' : '') + topicParts(t.id), go: ['topic', t.id] };
    case 'second': return { title: `2ª vuelta · ${t.title}`, sub: b.title, go: ['topic', t.id] };
    case 'quick': return { title: `Perlas rápidas · ${t.title}`, sub: 'No alcanzó el tiempo para la vuelta completa', go: ['topic', t.id] };
    case 'review': return { title: 'Repaso espaciado', sub: b.x && b.x.length ? 'Toca: ' + b.x.map((id) => TOP[id].title).join(', ') : 'Tarjetas y cuaderno de errores del día', go: ['repaso'] };
    case 'diag': return { title: 'Diagnóstico inicial', sub: '30 preguntas · ajusta tu plan', go: ['diag'] };
    case 'sim': return { title: b.title, sub: 'Con reloj, como el examen', go: ['sim'] };
    case 'errs': return { title: 'Cuaderno de errores', sub: 'Todo lo pendiente', go: ['errores'] };
    case 'final': return { title: 'Repaso final', sub: b.title, go: ['perlas'] };
    case 'cards': return { title: 'Tarjetas', sub: b.title, go: ['repaso'] };
    default: return { title: 'Descanso', sub: b.title, go: null };
  }
}
function blockRow(date, b) {
  const k = bkey(date, b), on = !!S.checks[k], info = blockInfo(b);
  const goBtn = info.go ? `<button class="btn small" data-go="${info.go[0]}"${info.go[1] ? ` data-a="${info.go[1]}"` : ''}>Ir</button>` : '';
  return `<li class="blk${on ? ' done' : ''}"><label><input type="checkbox" data-chg="chk" data-k="${esc(k)}"${on ? ' checked' : ''}><span class="blk-t">${esc(info.title)}<small>${esc(info.sub)}</small></span></label>${b.min ? `<span class="blk-m">${b.min}′</span>` : ''}${goBtn}</li>`;
}
function dayCard(d, cls = '') {
  const mins = d.blocks.reduce((a, b) => a + b.min, 0);
  return `<li class="day ${cls}"><div class="day-h"><b>${fmtDay(d.date)}</b><span class="dtype">${TYPE_LABEL[d.type]}</span><span class="mins">${Math.floor(mins / 60)} h ${pad(mins % 60)}</span></div><ul class="blks">${d.blocks.map((b) => blockRow(d.date, b)).join('')}</ul></li>`;
}

// ═══════════ Navegación
let route = { v: 'home' };
let ACT = {}, CHG = {};
const VIEWS = {};
let QS = null, CS = null, FS = null;
const STATIC = {
  mclose: closeModal,
  snd: () => { S.settings.sound = !S.settings.sound; save(); if (route.v === 'ajustes') render(); else hud(); beep('ok'); toast(S.settings.sound ? 'Sonido activado' : 'Sonido apagado'); }
};
const STATIC_CHG = {
  chk: (el) => {
    const k = el.dataset.k; S.checks[k] = el.checked;
    el.closest('.blk').classList.toggle('done', el.checked);
    if (el.checked && !S.paid[k]) { S.paid[k] = 1; gain(5); } else save();
    beep(el.checked ? 'ok' : 'click');
  }
};
function go(v, p = {}) { clearTimers(); route = { v, ...p }; render(); window.scrollTo(0, 0); }
function render() {
  stopLoops(); stopVideo(); hsStop();
  if (SY.pending && !(QS && !QS.finished)) { const o = SY.pending; SY.pending = null; const plan = S.plan; S = normalize(o); S.plan = plan; SIG = sig(S); try { localStorage.setItem(KEY, JSON.stringify(S)); } catch (e) { /* ignorar */ } buildPlan(); toast('Tu progreso se actualizó desde otro dispositivo'); }
  ACT = { ...STATIC }; CHG = { ...STATIC_CHG };
  const m = $('#main'); m.innerHTML = '';
  (VIEWS[route.v] || VIEWS.home)(m);
  hud(); nav();
}
function hud() {
  const i = rankIdx(S.xp), r = C.ranks[i], nx = C.ranks[i + 1];
  const p = nx ? (S.xp - r.xp) / (nx.xp - r.xp) : 1;
  $('#hud').innerHTML = `<div class="hud-in wrap">
    <button class="rank" data-go="logros" aria-label="Rango: ${esc(r.long)}. Ver logros">${esc(r.name)}</button>
    <div class="xp"><div class="xp-top"><b>${S.xp} XP</b><span>${nx ? `${esc(nx.name)} en ${nx.xp - S.xp}` : 'Rango máximo'}</span></div><div class="seg" style="--p:${p}"><i></i></div></div>
    <div class="streak" aria-label="Racha de ${streak()} días">${svgSpr(SPR.flame, FLAME_PAL, 2)}<span>${streak()}</span></div>
    <button class="snd" data-act="snd" aria-pressed="${S.settings.sound}" aria-label="Sonido">♪ ${S.settings.sound ? 'sí' : 'no'}</button>
  </div>`;
}
const TABS = [['home', 'Inicio', 'home'], ['temario', 'Temario', 'book'], ['guardia', 'Guardia', 'monitor'], ['repaso', 'Repaso', 'cards'], ['mas', 'Más', 'grid']];
const TAB_OF = { home: 'home', diag: 'home', diagres: 'home', plan: 'home', temario: 'temario', topic: 'temario', guardia: 'guardia', caso: 'guardia', repaso: 'repaso', tarjetas: 'repaso', errores: 'repaso', perlas: 'repaso', videos: 'repaso' };
function nav() {
  const cur = route.v === 'quiz' ? (QS && QS.tab) || 'home' : TAB_OF[route.v] || 'mas';
  $('#tabs').innerHTML = `<div class="tabs-in">${TABS.map(([v, l, ic]) => `<button class="tab" data-go="${v}"${cur === v ? ' aria-current="page"' : ''}>${icon(ic, cur === v ? '#F2C14E' : '#8790CC', 2)}<span>${l}</span></button>`).join('')}</div>`;
}
document.addEventListener('click', (e) => {
  const g = e.target.closest('[data-go]');
  if (g) { e.preventDefault(); beep('click'); go(g.dataset.go, { a: g.dataset.a, b: g.dataset.b }); return; }
  const a = e.target.closest('[data-act]');
  if (a && ACT[a.dataset.act] && !a.disabled) ACT[a.dataset.act](a, e);
});
document.addEventListener('change', (e) => { const c = e.target.closest('[data-chg]'); if (c && CHG[c.dataset.chg]) CHG[c.dataset.chg](c, e); });
document.addEventListener('input', (e) => { const c = e.target.closest('[data-inp]'); if (c && CHG[c.dataset.inp]) CHG[c.dataset.inp](c, e); });
document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && !$('#modal').hidden) closeModal(); });

// ═══════════ Inicio
function cardQueue(tid) {
  const d = today();
  const pool = C.cards.filter((c) => hasContent(c.topic) && (!tid || c.topic === tid));
  const due = pool.filter((c) => S.cards[c.id] && S.cards[c.id].due <= d);
  const fresh = pool.filter((c) => !S.cards[c.id]);
  const used = S.newCards.date === d ? S.newCards.n : 0;
  return { due, fresh: tid ? fresh : fresh.slice(0, Math.max(0, 20 - used)) };
}
const errorsDue = () => Object.entries(S.err).filter(([id, e]) => QMAP[id] && e.due <= today()).map(([id]) => id);
const hashStr = (s) => [...s].reduce((h, c) => (h * 31 + c.charCodeAt(0)) >>> 0, 7);
function dailyCard() {
  const d = today();
  if (S.daily.date !== d) {
    const pool = C.questions.filter((q) => q.dif >= 2 && !(S.qs[q.id] && S.qs[q.id].ok));
    const p = pool.length ? pool : C.questions;
    S.daily = { date: d, qid: p[hashStr(d) % p.length].id, done: false, ok: false };
    save();
  }
  return S.daily;
}
function todayBlocks() {
  const td = today();
  if (td >= C.exam.date) return '<p class="muted">El parcial ya pasó. Puedes seguir practicando con todo lo que hay en la app.</p>';
  const d = S.plan && S.plan.days.find((x) => x.date === td);
  if (!d) return td < C.exam.start
    ? `<p>Tu plan empieza ${diffDays(td, C.exam.start) === 1 ? 'mañana, ' : 'el '}<b>${fmtLong(C.exam.start)}</b>, con ${S.diag.done ? 'tu primer tema' : 'el diagnóstico de 30 preguntas (~30 min) y tu primer tema'}. Hoy descansa; si te sobran 5 minutos, abre la carta misteriosa.</p>`
    : `<p class="muted">Tu plan empieza el ${fmtLong(C.exam.start)}.</p>`;
  return `<ul class="blks">${d.blocks.map((b) => blockRow(td, b)).join('')}</ul>`;
}
function subjBars() {
  return `<div class="subjbars">${C.subjects.map((s) => {
    const ts = C.topics.filter((t) => t.subj === s.id), m = ts.reduce((a, t) => a + mastery(t.id), 0) / ts.length;
    return `<div class="sbar" style="--sc:${s.color}"><span class="nm">${subjIcon(s.id, 1)} ${esc(s.short)}</span><span class="seg ${m < 0.45 ? 'bad' : m < 0.7 ? '' : 'ok'}" style="--p:${m}"><i></i></span><span>${pct(m)}%</span></div>`;
  }).join('')}</div>`;
}
function heatMap() {
  return `<div class="heat">${C.subjects.map((s) => `<div class="hrow" style="--sc:${s.color}"><span class="hs">${subjIcon(s.id, 1)} ${esc(s.short)}</span><div class="hcells">${C.topics.filter((t) => t.subj === s.id).map((t) => {
    const kn = known(t.id), m = mastery(t.id);
    return `<button class="hc ${kn ? mClass(m) : 'na'}" data-go="topic" data-a="${t.id}" aria-label="Tema ${t.n}, ${esc(t.title)}: ${kn ? pct(m) + '%' : 'sin datos'}"><small>${pad(t.n)}</small>${kn ? pct(m) : '—'}</button>`;
  }).join('')}</div></div>`).join('')}</div>
  <div class="legend"><span><i style="background:var(--bad)"></i>Débil (&lt;45%)</span><span><i style="background:var(--warn)"></i>En proceso</span><span><i style="background:var(--ok)"></i>Dominado (≥70%)</span><span><i style="background:var(--line)"></i>Sin datos</span></div>`;
}
VIEWS.home = (m) => {
  const td = today(), left = Math.max(0, diffDays(td, C.exam.date)), tot = diffDays(C.exam.start, C.exam.date);
  const el = clamp(diffDays(C.exam.start, td), 0, tot), done = topicsDone().size;
  const diagN = Object.keys(S.diag.ans).length, cq = cardQueue(), ed = errorsDue().length, daily = dailyCard();
  m.innerHTML = `
  <section class="count gold" aria-label="Cuenta regresiva al parcial">${GEMS}
    <p class="eyebrow">${esc(C.exam.label)} · ${esc(C.exam.weight)}</p>
    <div class="count-row"><div class="bignum">${left}</div><div class="stack" style="gap:4px"><p class="px">${left === 1 ? 'día' : 'días'} para el parcial</p><p class="muted small">${fmtLong(C.exam.date)} · ${esc(C.exam.place)}</p></div></div>
    <div class="meter"><span>Tiempo</span><div class="seg" style="--p:${el / tot}"><i></i></div><span>${el}/${tot} d</span></div>
    <div class="meter"><span>Temario</span><div class="seg ok" style="--p:${done / C.topics.length}"><i></i></div><span>${done}/${C.topics.length}</span></div>
  </section>
  ${S.diag.done ? '' : `<section class="panel cta-diag"><p class="eyebrow">Empieza aquí</p><h2>${diagN ? 'Termina tu diagnóstico' : 'Diagnóstico inicial'}</h2><p class="muted">30 preguntas, 5 por materia, con explicación al momento. Al final ves tus temas débiles en un mapa de calor y el plan se reacomoda día por día hasta el ${fmtLong(addDays(C.exam.date, -1))}.</p>${diagN ? `<div class="seg cy" style="--p:${diagN / 30}"><i></i></div><p class="small muted">${diagN} de 30 respondidas · tu avance se guarda</p>` : ''}<button class="btn gold-btn big" data-act="startDiag">${diagN ? 'Continuar' : 'Empezar'} · unos 25 min</button></section>`}
  <section class="panel"><div class="row"><h2 class="grow">Hoy · ${fmtDay(td)}</h2><span class="dtype">${TYPE_LABEL[dayType(td)]}</span></div>${todayBlocks()}<button class="btn small ghost" data-go="plan" style="align-self:flex-start">Ver el plan completo</button></section>
  ${mixPanel()}
  <div class="duo">
    <button class="tile" data-go="repaso"><span class="eyebrow">Repaso de hoy</span><span class="n">${cq.due.length + cq.fresh.length}</span><span class="t">tarjetas</span><span class="d">${ed} en el cuaderno de errores</span></button>
    <button class="tile" data-go="ruleta"><span class="eyebrow">Ruleta</span><span class="row" style="gap:4px">${C.subjects.map((s) => subjIcon(s.id, 2)).join('')}</span><span class="t">¿Cuál será tu enfermedad?</span><span class="d">Un caso al azar</span></button>
  </div>
  <button class="carta gold${daily.done ? ' done' : ''}" data-act="carta">${GEMS}<span class="medal">${svgSpr(SPR.mask, MASK_PAL, 4, 'El Enmascarado')}</span><span class="stack" style="gap:6px"><span class="eyebrow" style="color:var(--gold-3)">Carta misteriosa del día</span><span class="h2">${daily.done ? 'Vuelve mañana' : 'El Enmascarado te reta'}</span><span class="small">${daily.done ? (daily.ok ? 'La resolviste: XP doble.' : 'Hoy ganó él. Mañana hay otra.') : 'Una pregunta difícil de cualquier materia · XP doble'}</span></span></button>
  ${S.diag.done ? `<section class="panel"><div class="row"><h2 class="grow">Cómo vas por materia</h2><button class="btn small ghost" data-go="diagres">Mapa de calor</button></div>${subjBars()}</section>` : ''}`;
  ACT.startDiag = startDiag;
  ACT.carta = openCarta;
  ACT.mix = startMix;
};
// Ronda mezclada: 10 preguntas revueltas de temas que ya viste; primero las falladas y las nuevas
function mixPick() {
  const td = today();
  let pool = C.topics.filter((t) => hasContent(t.id) && (begun(t.id) || (S.tp[t.id] && S.tp[t.id].done) || answeredIn(t.id) || (S.vid[t.id] && S.vid[t.id].done))).map((t) => t.id);
  if (pool.length < 3) pool = [...new Set([...pool, ...((S.plan && S.plan.days) || []).filter((d) => d.date <= td).flatMap((d) => d.blocks).filter((b) => b.k === 'topic').map((b) => b.t)])];
  if (pool.length < 3) pool = [...new Set([...pool, ...C.topics.filter((t) => t.pri === 'alta' && hasContent(t.id)).map((t) => t.id)])];
  const w = (q) => (S.qs[q.id] ? S.qs[q.id].ok / S.qs[q.id].n : 0.35) + Math.random() * 0.3;
  const byT = shuffle(pool).map((tid) => bank(tid).map((q) => [w(q), q.id]).sort((a, b) => a[0] - b[0]).map((x) => x[1]));
  const out = [];
  for (let r = 0; out.length < 10 && byT.some((l) => l.length > r); r++) for (const l of byT) if (l[r] && out.length < 10) out.push(l[r]);
  return { qids: shuffle(out), n: pool.length };
}
function startMix() {
  const { qids, n } = mixPick();
  if (!qids.length) { toast('Todavía no hay preguntas para mezclar'); return; }
  const first = !(S.mix && S.mix.date === today());
  startQuiz({ mode: 'mix', title: `Ronda mezclada · ${n} temas`, qids, tab: 'home', back: 'home', onEnd: (qs) => {
    const ok = qs.res.filter((r) => r && r.ok).length;
    S.mix = { date: today(), ok, n: qs.qids.length };
    if (first) gain(15, 'Ronda mezclada del día');
    save();
  } });
}
function mixPanel() {
  const done = S.mix && S.mix.date === today();
  return `<section class="panel"><div class="row"><h2 class="grow">Ronda mezclada</h2><span class="small muted">${done ? `Hoy: ${S.mix.ok}/${S.mix.n}` : '10 preguntas · 8 min'}</span></div><p class="muted small">Preguntas revueltas de los temas que ya viste, primero las que fallaste. Cuesta más que repasar un solo tema, y por eso se queda mejor; además, así viene el examen.</p><button class="btn ${done ? '' : 'gold-btn '}" data-act="mix">${done ? 'Otra ronda' : 'Empezar la ronda de hoy'}</button></section>`;
}
function openCarta(el) {
  const d = dailyCard();
  if (d.done) { toast('Ya jugaste la carta de hoy. Mañana sale otra.'); return; }
  beep('flip');
  if (!reduce) el.classList.add('flip');
  setTimeout(() => startQuiz({
    mode: 'single', title: 'Carta misteriosa', qids: [d.qid], xpMult: 2, tab: 'home', back: 'home',
    onEnd: (qs) => { S.daily.done = true; S.daily.ok = !!(qs.res[0] && qs.res[0].ok); S.cartas++; checkAch(); save(); }
  }), reduce ? 0 : 480);
}

// ═══════════ Diagnóstico
function startDiag() {
  const order = [], by = C.subjects.map((s) => DIAG.filter((q) => q.subj === s.id));
  for (let i = 0; i < 5; i++) by.forEach((a) => a[i] && order.push(a[i].id));
  const pending = order.filter((id) => !(id in S.diag.ans));
  if (!pending.length) { finishDiag(); return; }
  startQuiz({ mode: 'diag', title: 'Diagnóstico inicial', qids: pending, offset: order.length - pending.length, total: order.length, tab: 'home', back: 'home', onEnd: finishDiag });
}
function finishDiag() {
  if (!S.diag.done) { S.diag.done = true; S.diag.at = today(); buildPlan(); gain(100, 'Diagnóstico terminado'); }
  go('diagres');
}
VIEWS.diag = (m) => {
  if (S.diag.done) { VIEWS.diagres(m); return; }
  const n = Object.keys(S.diag.ans).length;
  m.innerHTML = `<h1>Diagnóstico inicial</h1><section class="panel"><p>30 preguntas tipo caso clínico, 5 de cada materia: Cardiología, Endocrinología, Gastroenterología, Hematología, Nefrología y Reumatología. Después de cada respuesta ves la explicación.</p><p class="muted">Puedes salir cuando quieras: lo que contestes se guarda. Al terminar, el plan pone primero tus temas débiles de prioridad alta.</p><button class="btn gold-btn big" data-act="startDiag">${n ? `Continuar (${n}/30)` : 'Empezar'}</button></section>`;
  ACT.startDiag = startDiag;
};
VIEWS.diagres = (m) => {
  if (!S.diag.done) { VIEWS.diag(m); return; }
  const ok = DIAG.filter((q) => S.diag.ans[q.id]).length, missed = DIAG.filter((q) => S.diag.ans[q.id] === false);
  m.innerHTML = `
  <section class="panel"><p class="eyebrow">Diagnóstico inicial · ${S.diag.at ? fmtDay(S.diag.at) : ''}</p><div class="row"><span class="score">${ok}/30</span><span class="muted">${pct(ok / 30)}% de aciertos</span></div><p>Es tu punto de partida, no una calificación. El plan ya pone primero tus temas débiles de prioridad alta.</p><button class="btn gold-btn big" data-go="plan">Ver mi plan día por día</button></section>
  <section class="panel"><h2>Por materia</h2>${subjBars()}</section>
  <section class="panel"><h2>Mapa de calor por tema</h2><p class="small muted">Cada cuadro es un tema con su número oficial. Se actualiza con lo que practicas.</p>${heatMap()}</section>
  ${missed.length ? `<section class="panel"><h2>Las que fallaste</h2><p class="small muted">También están en tu cuaderno de errores para mañana.</p><ul class="missed">${missed.map(missedItem).join('')}</ul></section>` : ''}
  <button class="btn ghost" data-act="redoDiag">Repetir el diagnóstico</button>`;
  ACT.redoDiag = () => confirmBox('¿Repetir el diagnóstico?', 'Se borran tus respuestas del diagnóstico. Tu XP y tu práctica se quedan.', 'Repetir', () => { S.diag = { done: false, ans: {} }; save(); startDiag(); });
};
function missedItem(q) {
  return `<li><details><summary>${subjChip(q.subj)} ${esc(q.stem.length > 110 ? q.stem.slice(0, 110) + '…' : q.stem)}</summary><div class="stack" style="margin-top:10px"><p><b>Correcta:</b> ${esc(q.opts[q.ans])}</p><p>${esc(q.exp)}</p><p class="ref">${esc(q.ref)}</p></div></details></li>`;
}

// ═══════════ Plan
const BUDGET_OPTS = { wk: [30, 45, 60, 90, 120, 150, 180], tue: [60, 90, 120, 150, 180, 240, 300], we: [60, 120, 180, 240, 300, 360, 420] };
const hm = (min) => (min < 60 ? `${min} min` : `${Math.floor(min / 60)} h${min % 60 ? ' ' + (min % 60) : ''}`);
VIEWS.plan = (m) => {
  if (!S.plan) buildPlan();
  const td = today(), days = S.plan.days.filter((d) => d.date >= C.exam.start);
  const sel = (k, lab) => `<div class="field"><label for="b-${k}">${lab}</label><select id="b-${k}" data-chg="budget" data-k="${k}">${BUDGET_OPTS[k].map((v) => `<option value="${v}"${S.settings.budget[k] === v ? ' selected' : ''}>${hm(v)}</option>`).join('')}</select></div>`;
  const left = S.plan.left || [];
  m.innerHTML = `
  <button class="btn small ghost" data-go="home" style="align-self:flex-start">← Inicio</button>
  <h1>Plan hasta el parcial</h1>
  <p class="muted">Ordenado por prioridad y por tus puntos débiles. Lo que ya empezaste va primero. Los temas nuevos de las semanas 5 y 6 aparecen después de su clase (27 oct y 3 nov). El 7 y 8 de noviembre son de simulacro.</p>
  <section class="panel"><h2>¿Cuánto tiempo tienes al día?</h2><div class="budget">${sel('wk', 'Lun, mié a vie (después del hospital)')}${sel('tue', 'Martes académico')}${sel('we', 'Sábado y domingo')}</div><button class="btn" data-act="replan">Rehacer el plan desde hoy</button>${S.diag.done ? '' : '<p class="small muted">Haz el diagnóstico para que el plan use tus temas débiles; por ahora solo usa la prioridad.</p>'}</section>
  ${left.length ? `<div class="note"><b>Con este tiempo no alcanza la vuelta completa de ${left.length} tema(s)</b>: ${left.map((id) => esc(TOP[id].title)).join(', ')}. Quedaron como “perlas rápidas” el ${fmtDay(C.exam.sim[1])}. Si puedes, sube tu tiempo diario.</div>` : `<div class="note"><b>Los ${C.topics.length} temas entran en el plan antes del examen.</b>${(S.plan.fit || 1) < 1 ? ' Para que quepan, los bloques de tema son más cortos de lo ideal: prioriza preguntas y perlas, y si puedes sube tu tiempo diario.' : ''}</div>`}
  <ol class="days">${days.map((d) => dayCard(d, d.date === td ? 'today' : d.date < td ? 'past' : '')).join('')}</ol>`;
  CHG.budget = (el) => { S.settings.budget[el.dataset.k] = +el.value; buildPlan(); toast('Plan actualizado con tu nuevo tiempo'); render(); };
  ACT.replan = () => { buildPlan(); toast('Plan rehecho desde hoy'); render(); };
  const t = $('.day.today'); if (t) setTimeout(() => t.scrollIntoView({ block: 'start', behavior: reduce ? 'auto' : 'smooth' }), 60);
};

// ═══════════ Temario y tema
function topicItem(t) {
  const m = mastery(t.id), kn = known(t.id);
  return `<li><button class="titem" data-go="topic" data-a="${t.id}"><span class="num">${pad(t.n)}</span><span><span class="tt">${esc(t.title)}</span><span class="meta">${subjChip(t.subj)}<span class="pri ${t.pri}">${t.pri}</span><span class="small muted">Sem ${t.weeks.join('–')}</span>${hasContent(t.id) ? '' : `<span class="locked">${icon('lock', '#8790CC', 1)} Sin lección</span>`}</span><span class="mbar"><span class="seg ${kn ? (m < 0.45 ? 'bad' : m < 0.7 ? '' : 'ok') : ''}" style="--p:${kn ? m : 0}"><i></i></span><span>${kn ? pct(m) + '%' : 'sin datos'}</span></span></span></button></li>`;
}
VIEWS.temario = (m) => {
  const f = route.a && route.a !== 'all' ? route.a : 'all';
  const list = C.topics.filter((t) => f === 'all' || t.subj === f);
  m.innerHTML = `<h1>Temario</h1><p class="muted">Semanas 1 a 6 · 30 temas en orden de prioridad. Neumología no entra en este parcial.</p>
  <div class="filters" role="toolbar" aria-label="Filtrar por materia"><button class="chip${f === 'all' ? ' fill' : ''}" style="--sc:var(--gold)" data-go="temario" data-a="all" aria-pressed="${f === 'all'}">Todas</button>${C.subjects.map((s) => `<button class="chip${f === s.id ? ' fill' : ''}" style="--sc:${s.color}" data-go="temario" data-a="${s.id}" aria-pressed="${f === s.id}">${subjIcon(s.id, 1)} ${esc(s.short)}</button>`).join('')}</div>
  <ul class="tlist">${list.map(topicItem).join('')}</ul>`;
};
function planDateOf(tid) {
  const d = S.plan && S.plan.days.find((x) => x.blocks.some((b) => (b.k === 'topic' || b.k === 'quick') && b.t === tid));
  return d ? d.date : null;
}
const TOPIC_TABS = {};
VIEWS.topic = (m) => {
  const t = TOP[route.a];
  if (!t) { VIEWS.temario(m); return; }
  const s = SUBJ[t.subj], L = C.lessons[t.id], tab = route.b || 'leccion', mm = mastery(t.id), kn = known(t.id);
  const head = `<button class="btn small ghost" data-go="temario" style="align-self:flex-start">← Temario</button>
  <div class="thead"><div class="row">${subjChip(t.subj)}<span class="pri ${t.pri}">Prioridad ${t.pri}</span><span class="small muted">Tema ${t.n} · semana ${t.weeks.join('–')}</span></div><h1>${esc(t.title)}</h1><p class="muted small">${esc(t.sub)}</p>
  <div class="meter" style="grid-template-columns:72px 1fr auto"><span>Dominio</span><div class="seg ${kn ? (mm < 0.45 ? 'bad' : mm < 0.7 ? '' : 'ok') : ''}" style="--p:${kn ? mm : 0}"><i></i></div><span>${kn ? pct(mm) + '%' : '—'}</span></div></div>`;
  if (!L) {
    const dq = DIAG.filter((q) => q.topic === t.id), pd = planDateOf(t.id);
    m.innerHTML = `${head}<section class="panel"><p class="row" style="gap:8px">${icon('lock', '#F2C14E', 2)}<b>Este tema todavía no tiene lección en la app.</b></p><p>Estúdialo con tus apuntes y la clase de ${esc(s.name)}.${pd ? ` Tu plan lo tiene el <b>${fmtLong(pd)}</b>.` : ''}</p><p class="small muted">Qué entra: ${esc(t.sub)}.</p></section>
    ${dq.length ? `<section class="panel"><h2>Tu pregunta del diagnóstico</h2>${dq.map((q) => `<div class="stack"><p>${esc(q.stem)}</p><p><b>Correcta:</b> ${esc(q.opts[q.ans])} ${q.id in S.diag.ans ? (S.diag.ans[q.id] ? '<span class="chip" style="--sc:var(--ok)">La acertaste</span>' : '<span class="chip" style="--sc:var(--bad)">La fallaste</span>') : ''}</p><p class="muted">${esc(q.exp)}</p><p class="ref">${esc(q.ref)}</p></div>`).join('')}</section>` : ''}`;
    return;
  }
  const hasCase = C.cases.some((c) => c.topic === t.id);
  const tabs = [['video', 'Video'], ['leccion', 'Lección'], ['anim', 'Animación'], ['taller', 'Taller'], ['preguntas', 'Preguntas'], ['guardia', 'Guardia'], ['tarjetas', 'Tarjetas'], ['jefe', 'Jefe']]
    .filter(([k]) => (k !== 'anim' || L.anim) && (k !== 'guardia' || hasCase) && (k !== 'video' || L.video) && (k !== 'taller' || hasTaller(t.id)));
  m.innerHTML = `${head}<div class="ttabs" role="tablist" aria-label="Secciones del tema">${tabs.map(([k, l]) => `<button class="ttab" role="tab" aria-selected="${tab === k}" data-go="topic" data-a="${t.id}" data-b="${k}">${l}</button>`).join('')}</div><div id="tbody" class="stack"></div>`;
  (tabs.some(([k]) => k === tab) ? TOPIC_TABS[tab] : TOPIC_TABS.leccion)($('#tbody'), t, L);
};
const NN_URL = 'https://www.ninjanerd.org/lecture/';
const YT_URL = 'https://www.youtube.com/results?search_query=';
function videosHTML(L) {
  const a = (href, src, color, title, sub) => `<li><a class="vid" href="${esc(href)}" target="_blank" rel="noopener noreferrer"><span class="src" style="--sc:${color}">${src}</span><span class="vt">${esc(title)}<small>${esc(sub)}</small></span><span class="go" aria-hidden="true">↗</span></a></li>`;
  const nn = (L.nn || []).map(([slug, title]) => a(NN_URL + slug, 'Ninja Nerd', '#62E3FF', title, 'Clase completa en ninjanerd.org'));
  nn.push(a(YT_URL + encodeURIComponent('Ninja Nerd ' + L.yt), 'Ninja Nerd', '#62E3FF', `Buscar “${L.yt}”`, 'En YouTube · elige el video del canal Ninja Nerd'));
  const dm = a(YT_URL + encodeURIComponent('Dirty Medicine ' + L.yt), 'Dirty Medicine', '#FF9B3D', `Buscar “${L.yt}”`, 'En YouTube · repasos cortos con mnemotecnias');
  return `<section class="lsec"><h3>Videos para repasar</h3><p class="small muted">En inglés. Se abren en otra pestaña o en la app de YouTube. Úsalos después de la lección para reforzar, no en lugar de ella.</p><ul class="vids">${nn.join('')}${dm}</ul></section>`;
}
function compareHTML(cid) {
  const c = C.compares[cid];
  return `<div class="cmp"><div class="cmp-h"><span class="a">${esc(c.a)}</span><span class="x">×</span><span class="b">${esc(c.b)}</span></div>${c.rows.map(([k, a, b]) => `<div class="cmp-r"><span class="k">${esc(k)}</span><div class="v"><span>${esc(a)}</span><span>${esc(b)}</span></div></div>`).join('')}</div>`;
}
TOPIC_TABS.leccion = (el, t, L) => {
  const read = S.tp[t.id] && S.tp[t.id].read;
  el.innerHTML = `${L.video ? `<button class="btn gold-btn big vcta" data-act="vgo">▶ Ver el video del tema · ${vMin(t.id)} min${S.vid[t.id] && S.vid[t.id].done ? ' · visto ✓' : ''}</button>` : ''}<p class="hook">${esc(L.hook)}</p>
  <div class="row">${L.anim ? `<button class="btn small" data-go="topic" data-a="${t.id}" data-b="anim">Ver la animación</button>` : ''}<button class="btn small" data-go="topic" data-a="${t.id}" data-b="preguntas">Ir a las preguntas</button></div>
  ${L.sections.map((s) => `<section class="lsec"><h3>${esc(s.h)}</h3>${s.html}</section>`).join('')}
  ${(L.compare || []).map((cid) => `<section class="lsec"><h3>Comparador</h3>${compareHTML(cid)}</section>`).join('')}
  <div class="box mnemo gold">${GEMS}<span class="lab">Mnemotecnia</span><span class="big">${esc(L.mnemo.t)}</span><p>${esc(L.mnemo.d)}</p></div>
  <div class="box pearl"><span class="lab">Perla de examen</span><p>${esc(L.pearl)}</p></div>
  <div class="box trap"><span class="lab">Trampa típica</span><p>${esc(L.trap)}</p></div>
  <div class="box guide"><span class="lab">⚠️ Depende de la guía</span><ul>${L.guide.map((g) => `<li>${esc(g)}</li>`).join('')}</ul></div>
  ${videosHTML(L)}
  <details class="refs"><summary>Referencias</summary><ol>${L.refs.map((r) => `<li>${esc(r)}</li>`).join('')}</ol></details>
  <button class="btn ${read ? '' : 'gold-btn'} big" data-act="readDone" ${read ? 'disabled' : ''}>${read ? 'Lección leída ✓' : 'Marcar como leída · +30 XP'}</button>`;
  ACT.vgo = () => { VQUEUE = []; VAUTO = true; go('topic', { a: t.id, b: 'video' }); };
  ACT.readDone = () => {
    const tp = S.tp[t.id] || (S.tp[t.id] = {});
    if (tp.read) return;
    tp.read = today(); gain(30, 'Lección leída'); checkTopicDone(t.id); render();
  };
};
TOPIC_TABS.anim = (el, t, L) => { mountAnim(el, L.anim, t.id); };
TOPIC_TABS.video = (el, t) => { mountVideo(el, t.id); };
TOPIC_TABS.preguntas = (el, t) => {
  const qs = bank(t.id), ans = qs.filter((q) => S.qs[q.id]), ok = ans.filter((q) => S.qs[q.id].last === 1), bad = ans.filter((q) => S.qs[q.id].last === 0);
  el.innerHTML = `<section class="panel"><h2>${qs.length} preguntas tipo caso clínico</h2><p class="muted">Cada una explica por qué la correcta es correcta y por qué cada distractor no. ${ans.length ? `Llevas ${ans.length} de ${qs.length}; tu último intento: ${ok.length} bien y ${bad.length} mal.` : 'Todavía no respondes ninguna.'}</p>
  <button class="btn gold-btn big" data-act="practice">Practicar las ${qs.length}</button>${bad.length ? `<button class="btn" data-act="practiceBad">Solo las que fallé (${bad.length})</button>` : ''}
  <p class="small muted">El tema cuenta como completado cuando lees la lección y respondes al menos 10 preguntas.</p></section>`;
  ACT.practice = () => startQuiz({ mode: 'practice', title: t.title, qids: shuffle(qs.map((q) => q.id)), topic: t.id, tab: 'temario', back: ['topic', t.id, 'preguntas'] });
  ACT.practiceBad = () => startQuiz({ mode: 'practice', title: `${t.title} · repaso`, qids: shuffle(bad.map((q) => q.id)), topic: t.id, tab: 'temario', back: ['topic', t.id, 'preguntas'] });
};
TOPIC_TABS.guardia = (el, t) => {
  const cs = C.cases.filter((c) => c.topic === t.id);
  el.innerHTML = cs.map(caseCard).join('') || '<p class="muted">Sin casos todavía.</p>';
  ACT.startCase = (b) => startCase(b.dataset.id);
};
TOPIC_TABS.tarjetas = (el, t) => {
  const cs = C.cards.filter((c) => c.topic === t.id);
  el.innerHTML = `<section class="panel"><h2>${cs.length} tarjetas</h2><p class="muted">Repásalas con repetición espaciada o léelas aquí: toca cada una para ver la respuesta.</p><button class="btn gold-btn big" data-act="cardsTopic">Repasar estas tarjetas</button></section>
  <ul class="missed">${cs.map((c) => `<li><details><summary>${esc(c.f)}</summary><p style="margin-top:8px">${esc(c.b)}</p></details></li>`).join('')}</ul>`;
  ACT.cardsTopic = () => { FS = makeCardSession(t.id); go('tarjetas', { a: t.id }); };
};
TOPIC_TABS.jefe = (el, t) => {
  const won = S.tp[t.id] && S.tp[t.id].boss;
  el.innerHTML = `<section class="carta gold" style="cursor:default">${GEMS}<span class="medal">${svgSpr(SPR.mask, MASK_PAL, 4, 'El Enmascarado')}</span><span class="stack" style="gap:6px"><span class="eyebrow" style="color:var(--gold-3)">Jefe del tema</span><span class="h2">El Enmascarado</span><span class="small">Te lanza las preguntas más difíciles de ${esc(t.title)}. Tiene 4 puntos de vida; tú tienes 3. Cada acierto le quita uno.</span></span></section>
  ${won ? '<p class="chip" style="--sc:var(--ok);align-self:flex-start">Ya le ganaste en este tema</p>' : ''}
  <button class="btn gold-btn big" data-act="boss">${won ? 'Revancha' : 'Pelear'} · +100 XP si ganas</button>`;
  ACT.boss = () => startBoss(t.id);
};

// ═══════════ Voz: narración con la síntesis de voz del navegador (en iPhone, las voces en español del sistema)
const TTS = { ok: typeof window.speechSynthesis !== 'undefined' && typeof window.SpeechSynthesisUtterance === 'function', voice: null, tok: 0, broken: false };
function pickVoice() {
  if (!TTS.ok) return;
  let vs = [];
  try { vs = speechSynthesis.getVoices() || []; } catch (e) { /* sin voces */ }
  const by = (re) => vs.find((v) => re.test(v.lang || ''));
  TTS.voice = by(/^es[-_]MX/i) || by(/^es[-_](US|419)/i) || by(/^es\b/i) || null;
}
if (TTS.ok) { pickVoice(); try { speechSynthesis.addEventListener('voiceschanged', pickVoice); } catch (e) { /* navegador viejo */ } }
// Lo que se lee en voz alta: sin etiquetas, sin símbolos y con las siglas más comunes desarrolladas
const SAYFIX = [
  [/<[^>]+>/g, ''], [/&lt;/g, '<'], [/&gt;/g, '>'], [/&amp;/g, ' y '],
  [/(\d+)\s*\/\s*(\d+)\s*mmHg/g, '$1 sobre $2 milímetros de mercurio'], [/mg\/dL/g, ' miligramos por decilitro'], [/g\/dL/g, ' gramos por decilitro'],
  [/mL\/min(\/1\.73 ?m²)?/g, ' mililitros por minuto'], [/mEq\/L/g, ' miliequivalentes por litro'], [/mmHg/g, ' milímetros de mercurio'],
  [/µg\/L/g, ' microgramos por litro'], [/\/µL/g, ' por microlitro'], [/m\/s/g, ' metros por segundo'],
  [/≥/g, ' mayor o igual a '], [/≤/g, ' menor o igual a '], [/</g, ' menor de '], [/>/g, ' mayor de '], [/↑/g, ' sube '], [/↓/g, ' baja '],
  [/→/g, ', entonces, '], [/×/g, ' por '], [/±/g, ' más o menos '], [/%/g, ' por ciento'], [/[~≈]/g, ' cerca de '], [/[·•]/g, ', '], [/✕/g, ' bloqueado'], [/\s+/g, ' ']
];
const ABBR = { ECG: 'electrocardiograma', IAMCEST: 'infarto con elevación del ST', IAMSEST: 'infarto sin elevación del ST', SCASEST: 'síndrome coronario sin elevación del ST', ICP: 'angioplastia', TFG: 'filtración glomerular', LRA: 'lesión renal aguda', ERC: 'enfermedad renal crónica', NTA: 'necrosis tubular aguda', IBP: 'inhibidores de bomba de protones', AINE: 'antiinflamatorios', FEVI: 'fracción de expulsión', VI: 'ventrículo izquierdo', VD: 'ventrículo derecho', TEP: 'tromboembolia pulmonar', TVP: 'trombosis venosa profunda', HTA: 'hipertensión', DM2: 'diabetes tipo 2', PA: 'presión arterial', FC: 'frecuencia cardiaca', IV: 'intravenoso', VO: 'por vía oral' };
const ABBR_RE = new RegExp('\\b(' + Object.keys(ABBR).join('|') + ')\\b', 'g');
function speakable(s) { let x = String(s); for (const [re, r] of SAYFIX) x = x.replace(re, r); return x.replace(ABBR_RE, (k) => ABBR[k]).trim(); }
// Frases: corta en punto, signo o puntos suspensivos seguidos de mayúscula; las muy largas, en ; : o ,
function sentences(s) {
  const t = String(s).replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim(), out = [];
  let st = 0;
  for (let i = 0; i < t.length; i++) if ('.!?…'.includes(t[i]) && (i === t.length - 1 || (t[i + 1] === ' ' && /[¿¡A-ZÁÉÍÓÚÑ"“]/.test(t[i + 2] || '')))) { out.push(t.slice(st, i + 1).trim()); st = i + 1; }
  if (st < t.length) out.push(t.slice(st).trim());
  return out.filter(Boolean).flatMap((p) => {
    const parts = [];
    while (p.length > 230) { const cut = Math.max(p.lastIndexOf(';', 210), p.lastIndexOf(':', 210), p.lastIndexOf(',', 210)); if (cut < 60) break; parts.push(p.slice(0, cut + 1)); p = p.slice(cut + 1).trim(); }
    return [...parts, p];
  });
}
const WPS = 2.6; // palabras por segundo a velocidad 1, aproximado para español
const estSecs = (s) => (String(s).match(/\S+/g) || []).length / WPS + 0.35;
const VT = new Set();
const later = (fn, ms) => { const id = setTimeout(() => { VT.delete(id); fn(); }, ms); VT.add(id); return id; };
const clearLater = () => { VT.forEach(clearTimeout); VT.clear(); };
function hush() { TTS.tok++; hushRec(); if (TTS.ok) try { speechSynthesis.cancel(); } catch (e) { /* nada */ } }

// ───── Narración grabada: audio/<tema>.mp3 + mapa de tiempos por frase (C.voice[tema][hash] = [inicio, fin])
// Suena en cualquier teléfono (también con el modo silencio); si falta, se usa la voz del navegador.
// Tres timbres con los mismos tiempos (tools/voces.sh): audio/, audio/heroe/, audio/espartano/
const VOICE = C.voice || {};
const TIMBRES = { normal: ['Normal', ''], heroe: ['Héroe', 'heroe/'], espartano: ['Espartano', 'espartano/'] }, TB_BAD = new Set();
const timbre = () => (TIMBRES[S.settings.vtimbre] && !TB_BAD.has(S.settings.vtimbre) ? S.settings.vtimbre : 'normal');
let VA = null;
function recAudio(tid) {
  if (!VOICE[tid]) return null;
  const tb = timbre();
  if (VA && VA.tid === tid && VA.tb === tb) return VA.ok ? VA.el : null;
  hushRec();
  const el = new Audio();
  el.preload = 'auto'; el.setAttribute('playsinline', ''); el.src = `audio/${TIMBRES[tb][1]}${tid}.mp3`;
  VA = { tid, tb, el, ok: true };
  // Si falta el archivo de un timbre, se queda con la voz normal
  el.addEventListener('error', () => { if (!VA || VA.el !== el) return; if (tb !== 'normal') { TB_BAD.add(tb); VA = null; } else VA.ok = false; });
  return el;
}
function hushRec() { if (VA) try { VA.el.pause(); } catch (e) { /* nada */ } }
const recSeg = (tid, text) => (VOICE[tid] ? VOICE[tid][hashStr(speakable(text))] : null);
// Toca una frase grabada y llama done() al terminar. Devuelve su duración, o false si no hay grabación.
function playRec(tid, text, rate, done) {
  const seg = recSeg(tid, text), el = seg ? recAudio(tid) : null;
  if (!el) return false;
  const tok = ++TTS.tok, dur = (seg[1] - seg[0]) / rate;
  let started = false;
  const begin = () => { if (started || tok !== TTS.tok) return; started = true; later(() => { if (tok !== TTS.tok) return; hushRec(); done(); }, dur * 1000 + 60); };
  const seek = () => { try { el.currentTime = seg[0]; } catch (e) { /* aún sin datos */ } };
  try {
    el.playbackRate = rate;
    if (el.readyState >= 1) seek(); else el.addEventListener('loadedmetadata', seek, { once: true });
    el.addEventListener('playing', begin, { once: true });
    const p = el.play();
    if (p && p.catch) p.catch(() => { if (tok === TTS.tok && VA) VA.ok = false; });
  } catch (e) { return false; }
  // Si en 6 s no empezó (sin red o bloqueado), se sigue sin grabación
  later(() => { if (!started && tok === TTS.tok) { if (VA) VA.ok = false; started = true; done(); } }, 6000);
  return dur;
}
// Habla un fragmento y llama done() una vez. Si la voz "termina" casi al instante (no hay voz), se sigue con tiempos.
function speak(text, rate, done) {
  const tok = ++TTS.tok, est = estSecs(text) / rate, t0 = Date.now();
  let fired = false;
  const fin = (why) => {
    if (fired || tok !== TTS.tok) return;
    fired = true; clearTimeout(wd);
    const el = (Date.now() - t0) / 1000;
    if (why !== 'wd' && est > 1.5 && el < est * 0.25) { TTS.broken = true; later(() => { if (tok === TTS.tok) done(); }, (est - el) * 1000); return; }
    // Dos frases seguidas sin que la voz avise que terminó: se sigue sin voz para no trabar el video
    TTS.miss = why === 'wd' ? (TTS.miss || 0) + 1 : 0; if (TTS.miss >= 2) TTS.broken = true;
    done();
  };
  const wd = setTimeout(() => fin('wd'), (est * 1.9 + 2.5) * 1000);
  try {
    if (speechSynthesis.paused) speechSynthesis.resume();
    const u = new SpeechSynthesisUtterance(speakable(text));
    u.lang = (TTS.voice && TTS.voice.lang) || 'es-MX';
    if (TTS.voice) u.voice = TTS.voice;
    u.rate = rate; u.onend = () => fin('end'); u.onerror = () => fin('err');
    speechSynthesis.speak(u);
  } catch (e) { fin('err'); }
}
const SPEEDS = [0.75, 1, 1.25, 1.5];
const vRate = () => S.settings.vspeed || 1;
let CINE = null;
function setCine(el, on) {
  if (CINE && CINE !== el) CINE.classList.remove('cine');
  el.classList.toggle('cine', on); document.body.classList.toggle('cine-on', on); CINE = on ? el : null;
}

// ═══════════ Animaciones paso a paso (manual, automático y narrado)
function mountAnim(el, id, tid) {
  const A = C.anims[id], steps = A.steps, draws = SCENES[id];
  let step = 0, t = 0, last = null, playing = !reduce, auto = false, narr = false;
  const qSteps = steps.map((s, i) => ((s.labels || []).length >= 2 ? i : -1)).filter((i) => i >= 0);
  el.innerHTML = `<h2>${esc(A.title)}</h2><div class="awrap" id="awrap"><div class="stage"><canvas width="160" height="120" aria-hidden="true"></canvas><div class="labels"></div></div>
  <div class="lbank" hidden></div>
  <div class="cap" aria-live="polite"></div>
  <div class="lbank pbank" hidden></div>
  <div class="actrl"><button class="btn small" data-act="aprev">◀ Paso</button><button class="btn small" data-act="aplay"></button><span class="stepn"></span><button class="btn small gold-btn" data-act="anext">Paso ▶</button></div>
  <div class="actrl2"><button class="btn small" data-act="aauto" aria-pressed="false">▶ Reproducir todo</button><button class="btn small" data-act="anarr" aria-pressed="false">Narrar</button><button class="btn small" data-act="acine" aria-pressed="false">⛶ Pantalla</button>${qSteps.length ? '<button class="btn small gold-btn" data-act="aquiz">🧩 Etiquétalo</button>' : ''}${steps.length >= 3 ? '<button class="btn small gold-btn" data-act="apred">🔮 Predice</button>' : ''}</div>
  <div class="pips" role="group" aria-label="Pasos">${steps.map((_, i) => `<button data-act="apip" data-i="${i}" aria-label="Paso ${i + 1}"></button>`).join('')}</div></div>
  <p class="small muted">“Reproducir todo” avanza solo; con “Narrar”, una voz lee cada paso. Con “Etiquétalo” los nombres desaparecen y tú los pones; con “Predice” eliges qué pasa antes de verlo. Recordar y predecir cuestan más que reconocer, y por eso se queda.</p>`;
  const wrap = el.querySelector('#awrap'), g = Pix(el.querySelector('canvas').getContext('2d'));
  const draw = () => draws[step](g, reduce ? 3 : t);
  const sync = () => {
    wrap.querySelector('[data-act=aauto]').setAttribute('aria-pressed', auto); wrap.querySelector('[data-act=aauto]').textContent = auto ? '⏸ Detener' : '▶ Reproducir todo';
    wrap.querySelector('[data-act=anarr]').setAttribute('aria-pressed', narr);
  };
  const narrate = () => {
    const txt = steps[step].cap.replace(/<[^>]+>/g, '');
    const next = () => { if (!auto) return; if (step < steps.length - 1) later(() => set(step + 1), 700); else { auto = false; sync(); } };
    if (narr && playRec(tid, txt, vRate(), next) !== false) return;
    if (narr && TTS.ok && !TTS.broken) speak(txt, vRate(), next);
    else if (auto) later(next, (estSecs(txt) / vRate() + 1.2) * 1000);
  };
  const set = (i) => {
    hush(); clearLater();
    step = clamp(i, 0, steps.length - 1); t = 0; last = null;
    const s = steps[step];
    wrap.querySelector('.labels').innerHTML = (s.labels || []).map(([x, y, txt]) => `<span style="left:${(x / 160) * 100}%;top:${(y / 120) * 100}%">${esc(txt)}</span>`).join('');
    wrap.querySelector('.cap').innerHTML = s.cap;
    wrap.querySelector('.stepn').textContent = `${step + 1}/${steps.length}`;
    wrap.querySelectorAll('.pips button').forEach((b, k) => (k === step ? b.setAttribute('aria-current', 'step') : b.removeAttribute('aria-current')));
    wrap.querySelector('[data-act=aplay]').textContent = playing ? 'Pausa' : 'Animar';
    draw();
    if (auto || narr) narrate();
  };
  ACT.aprev = () => set(step - 1);
  ACT.anext = () => set(step + 1);
  ACT.apip = (b) => set(+b.dataset.i);
  ACT.aplay = (b) => { playing = !playing; b.textContent = playing ? 'Pausa' : 'Animar'; if (playing && reduce) toast('Tu sistema pide reducir el movimiento: se muestran cuadros fijos.'); };
  ACT.aauto = () => { auto = !auto; sync(); if (auto) { pickVoice(); set(step === steps.length - 1 ? 0 : step); } else { hush(); clearLater(); } };
  ACT.anarr = () => { narr = !narr; sync(); if (narr) { pickVoice(); narrate(); } else hush(); };
  ACT.acine = (b) => { const on = !wrap.classList.contains('cine'); setCine(wrap, on); b.setAttribute('aria-pressed', on); b.textContent = on ? '✕ Salir' : '⛶ Pantalla'; };
  // ── Etiquétalo: el mismo dibujo sin nombres; tocas una etiqueta y luego su lugar (o al revés)
  let Q = null;
  const bankEl = wrap.querySelector('.lbank'), capEl = wrap.querySelector('.cap');
  const qfx = (k) => { if (S.settings.vsfx !== false) tones(VSFX[k]); };
  // Los lugares numerados no se salen del dibujo aunque la etiqueta original esté en la orilla
  const pos = (x, y) => `left:${clamp((x / 160) * 100, 8, 92)}%;top:${clamp((y / 120) * 100, 10, 90)}%`;
  const qRender = () => {
    const lab = steps[step].labels, solved = Q.ok.size === lab.length;
    wrap.querySelector('.labels').innerHTML = lab.map(([x, y, txt], j) => (Q.ok.has(j)
      ? `<span class="lok" style="${pos(x, y)}">${esc(txt)}</span>`
      : `<button class="lslot${Q.slot === j ? ' sel' : ''}" data-act="aslot" data-j="${j}" style="${pos(x, y)}" aria-label="Lugar ${j + 1}">${j + 1}</button>`)).join('');
    bankEl.innerHTML = Q.bank.map((b, k) => `<button class="lchip${Q.sel === k ? ' sel' : ''}" data-act="achip" data-k="${k}"${b.used ? ' disabled' : ''}>${esc(b.txt)}</button>`).join('');
    const last = Q.k === qSteps.length - 1;
    capEl.innerHTML = !solved ? `<p class="lhint">Dibujo ${Q.k + 1} de ${qSteps.length} · toca una etiqueta y luego su número en el dibujo.${Q.bank.some((b) => b.decoy) ? ' Ojo: una etiqueta no va aquí.' : ''}</p>`
      : `${steps[step].cap}<div class="actrl"><button class="btn small gold-btn" data-act="${last ? 'aqend' : 'aqnext'}">${last ? 'Ver resultado' : 'Siguiente dibujo ▶'}</button></div>`;
  };
  const qEnter = (k) => {
    Q.k = k; step = qSteps[k]; t = 0; last = null; Q.ok = new Set(); Q.bad = new Set(); Q.sel = null; Q.slot = null;
    const lab = steps[step].labels, mine = new Set(lab.map((l) => l[2]));
    const others = shuffle(steps.flatMap((s) => (s.labels || []).map((l) => l[2])).filter((x) => !mine.has(x)));
    Q.bank = shuffle([...lab.map((l) => ({ txt: l[2] })), ...(others.length && lab.length <= 5 ? [{ txt: others[0], decoy: true }] : [])]);
    wrap.querySelector('.stepn').textContent = `${step + 1}/${steps.length}`;
    draw(); qRender();
  };
  const qTry = () => {
    if (Q.sel == null || Q.slot == null) { qRender(); return; }
    const b = Q.bank[Q.sel], j = Q.slot, lab = steps[step].labels;
    if (b.txt === lab[j][2]) {
      Q.ok.add(j); b.used = true; Q.tot++; if (!Q.bad.has(j)) Q.hits++;
      Q.sel = null; Q.slot = null; qfx(Q.ok.size === lab.length ? 'ok' : 'pop');
      qRender();
    } else {
      Q.bad.add(j); Q.miss++; Q.sel = null; Q.slot = null; qfx('bad'); qRender();
      const el = wrap.querySelector(`.lslot[data-j="${j}"]`); if (el) el.classList.add('no');
    }
  };
  const qBtn = (on) => { const b = wrap.querySelector('[data-act=aquiz]'); if (b) { b.textContent = on ? '✕ Salir de la prueba' : '🧩 Etiquétalo'; b.classList.toggle('on', on); } };
  const qStop = () => { Q = null; wrap.classList.remove('quiz'); bankEl.hidden = true; qBtn(false); set(step); };
  ACT.aquiz = () => {
    if (Q) { qStop(); return; }
    auto = false; narr = false; sync(); hush(); clearLater();
    Q = { k: 0, hits: 0, tot: 0, miss: 0 }; wrap.classList.add('quiz'); bankEl.hidden = false; qBtn(true);
    qEnter(0); wrap.scrollIntoView({ block: 'start', behavior: reduce ? 'auto' : 'smooth' });
  };
  ACT.achip = (b) => { const k = +b.dataset.k; Q.sel = Q.sel === k ? null : k; qTry(); };
  ACT.aslot = (b) => { const j = +b.dataset.j; Q.slot = Q.slot === j ? null : j; qTry(); };
  ACT.aqnext = () => qEnter(Q.k + 1);
  ACT.aqend = () => {
    const p = Q.tot ? Q.hits / Q.tot : 0, tp = S.tp[tid] || (S.tp[tid] = {}), best = Math.max(tp.lab || 0, p);
    tp.lab = best; gain(Math.round(10 + 20 * p), 'Diagrama etiquetado');
    qfx(p >= 0.8 ? 'end' : 'recap');
    wrap.querySelector('.labels').innerHTML = steps[step].labels.map(([x, y, txt]) => `<span class="lok" style="${pos(x, y)}">${esc(txt)}</span>`).join('');
    bankEl.innerHTML = '';
    capEl.innerHTML = `<p><b>${Q.hits} de ${Q.tot}</b> a la primera (${pct(p)}%). ${p >= 0.8 ? '¡Lo dominas!' : p >= 0.5 ? 'Vas bien: repítelo mañana y verás cómo sube.' : 'Míralo otra vez con “Narrar” y vuelve a intentarlo.'} Tu mejor marca: ${pct(best)}%.</p>
      <div class="actrl"><button class="btn small gold-btn" data-act="aqagain">Otra vez</button><button class="btn small" data-act="aquiz">Salir</button></div>`;
  };
  ACT.aqagain = () => { Q = { k: 0, hits: 0, tot: 0, miss: 0 }; qEnter(0); };
  // ── Predice: antes de ver cada paso, eliges qué crees que pasa (título del paso → su explicación)
  let R = null;
  const predEl = wrap.querySelector('.pbank');
  const parts = (i) => {
    const txt = steps[i].cap.replace(/<[^>]+>/g, '').trim(), cut = txt.indexOf('. ');
    if (cut < 0) return null;
    let body = txt.slice(cut + 2).trim();
    if (body.length > 160) { const end = body.lastIndexOf('. ', 160); body = end > 60 ? body.slice(0, end + 1) : body.slice(0, body.lastIndexOf(' ', 155)) + '…'; }
    return body.length >= 20 ? { title: txt.slice(0, cut), body } : null;
  };
  const rBtn = (on) => { const b = wrap.querySelector('[data-act=apred]'); if (b) { b.textContent = on ? '✕ Salir de Predice' : '🔮 Predice'; b.classList.toggle('on', on); } };
  const rAsk = () => {
    while (R.k < steps.length && !parts(R.k)) R.k++;
    if (R.k >= steps.length) { rEnd(); return; }
    const me = parts(R.k), pool = shuffle(steps.map((_, i) => i).filter((i) => i !== R.k && parts(i)));
    const others = [...pool.filter((i) => i !== step), ...pool.filter((i) => i === step)].slice(0, 2);
    R.opts = shuffle([R.k, ...others]); R.pick = null;
    predEl.innerHTML = `<div class="pred"><p class="aq">Lo que sigue: <b>${esc(me.title)}</b>. ¿Qué crees que pasa?</p><div class="aopts">${R.opts.map((i) => `<button class="aopt" data-act="apick" data-i="${i}">${esc(parts(i).body)}</button>`).join('')}</div></div>`;
  };
  const rEnd = () => {
    const p = R.n ? R.hits / R.n : 0, tp = S.tp[tid] || (S.tp[tid] = {});
    tp.pred = Math.max(tp.pred || 0, p); gain(Math.round(8 + 17 * p), 'Predicciones');
    qfx(p >= 0.8 ? 'end' : 'recap');
    predEl.innerHTML = `<div class="pred"><p><b>${R.hits} de ${R.n}</b> predicciones correctas (${pct(p)}%). ${p >= 0.8 ? '¡Entiendes la secuencia!' : 'Vuelve a verla con “Narrar” y repite: la segunda vez se arma sola.'}</p><div class="actrl"><button class="btn small gold-btn" data-act="apred">Salir</button></div></div>`;
  };
  ACT.apred = () => {
    if (R) { R = null; wrap.classList.remove('quiz'); predEl.hidden = true; predEl.innerHTML = ''; rBtn(false); set(step); return; }
    if (Q) qStop();
    auto = false; narr = false; sync(); hush(); clearLater();
    R = { k: 1, hits: 0, n: 0 }; wrap.classList.add('quiz'); predEl.hidden = false; rBtn(true);
    set(0); rAsk(); wrap.scrollIntoView({ block: 'start', behavior: reduce ? 'auto' : 'smooth' });
  };
  ACT.apick = (b) => {
    if (!R || R.pick != null) return;
    const i = +b.dataset.i; R.pick = i; R.n++;
    const ok = i === R.k; if (ok) R.hits++;
    qfx(ok ? 'ok' : 'bad');
    predEl.querySelectorAll('.aopt').forEach((x) => { const j = +x.dataset.i; x.disabled = true; if (j === R.k) x.classList.add('ok'); else if (j === i) x.classList.add('no'); });
    setTimeout(() => { if (!R) return; set(R.k); R.k++; rAsk(); }, ok ? 900 : 1800);
  };
  set(0);
  if (!reduce) loop((ts) => { if (last == null) last = ts; const dt = (ts - last) / 1000; last = ts; if (playing) t += Math.min(dt, 0.1); draw(); });
}

// ═══════════ ¿Dónde actúa? Ubica cada fármaco en su vía (C.paths, src/content/50-mecanismos.js)
const PG = {};
function mountPaths(host, tid, only) {
  for (const [pid, p] of Object.entries(C.paths || {})) {
    if (!(p.topics || []).includes(tid) || (only && pid !== only)) continue;
    const sec = document.createElement('section');
    sec.className = 'panel mech'; sec.style.marginTop = '14px'; host.appendChild(sec);
    PG[pid] = { p, sec, tid, order: shuffle(p.drugs.map((_, i) => i)), k: 0, hits: 0, miss: 0, done: false, ans: null, pick: null, placed: {} };
    pathRender(pid);
  }
  const node = (b) => { const g = PG[b.dataset.p]; return g && pathPick(b.dataset.p, +b.dataset.n); };
  ACT.mnode = node;
  ACT.mnext = (b) => { const g = PG[b.dataset.p]; g.k++; g.miss = 0; g.ans = null; g.pick = null; if (g.k >= g.order.length) pathEnd(b.dataset.p); else pathRender(b.dataset.p); };
  ACT.magain = (b) => { const g = PG[b.dataset.p]; Object.assign(g, { order: shuffle(g.p.drugs.map((_, i) => i)), k: 0, hits: 0, miss: 0, done: false, ans: null, pick: null, placed: {} }); pathRender(b.dataset.p); };
}
function pathRender(pid) {
  const g = PG[pid], p = g.p, cur = g.done ? null : p.drugs[g.order[g.k]];
  const blockAt = g.ans != null && p.chain ? cur.n : -1;
  const cls = (i) => [g.ans === 'ok' && cur.n === i ? 'ok' : '', g.ans === 'bad' && g.pick === i ? 'no' : '', g.ans === 'show' && cur.n === i ? 'hint' : '', blockAt >= 0 && i > blockAt ? 'dim' : '', g.done && g.pick === i ? 'sel' : ''].filter(Boolean).join(' ');
  const nodes = p.nodes.map((nd, i) => `${i && p.chain ? `<li class="marr${blockAt >= 0 && i > blockAt ? ' off' : ''}" aria-hidden="true"><i></i><i></i><i></i></li>` : ''}<li><button class="mnode ${cls(i)}" data-act="mnode" data-p="${pid}" data-n="${i}"><b>${esc(nd.t)}</b><small>${esc(nd.s)}</small>${(g.placed[i] || []).length ? `<span class="mtags">${g.placed[i].map((d) => `<em>${esc(d)}</em>`).join('')}</span>` : ''}</button></li>`).join('');
  let q, exp = '';
  if (g.done) {
    q = `<p class="mq">Toca un paso para ver qué fármacos actúan ahí.</p>`;
    if (g.pick != null) exp = p.drugs.filter((d) => d.n === g.pick).map((d) => `<p><b>${esc(d.d)}</b>: ${esc(d.why)}</p>`).join('') || '<p class="muted">Ninguno de estos fármacos actúa aquí.</p>';
  } else {
    q = `<p class="mq"><span class="small muted">Fármaco ${g.k + 1} de ${g.order.length}</span><b class="mdrug">${esc(cur.d)}</b><span class="small muted">¿Dónde actúa?</span></p>`;
    if (g.ans === 'ok' || g.ans === 'show') exp = `<p>${g.ans === 'ok' ? '✓ ' : 'Era aquí: '}<b>${esc(p.nodes[cur.n].t)}</b>. ${esc(cur.why)}</p>${p.chain ? '<p class="small muted">Todo lo que está debajo se apaga: así se ve el efecto en cascada.</p>' : ''}<div class="actrl"><button class="btn small gold-btn" data-act="mnext" data-p="${pid}">${g.k === g.order.length - 1 ? 'Ver resultado' : 'Siguiente fármaco ▶'}</button></div>`;
    else if (g.ans === 'bad') exp = `<p>No es ahí. Piensa qué hace <b>${esc(cur.d)}</b> e inténtalo otra vez.</p>`;
  }
  g.sec.innerHTML = `<h2>¿Dónde actúa? · ${esc(p.title)}</h2>${q}<ol class="mpath${p.chain ? ' chain' : ''}">${nodes}</ol><div class="mexp" aria-live="polite">${exp}</div>${g.done ? `<div class="actrl"><button class="btn small" data-act="magain" data-p="${pid}">Jugar otra vez</button></div>` : ''}`;
}
function pathPick(pid, i) {
  const g = PG[pid], p = g.p, sfx = (k) => { if (S.settings.vsfx !== false) tones(VSFX[k]); };
  if (g.done) { g.pick = g.pick === i ? null : i; pathRender(pid); return; }
  if (g.ans === 'ok' || g.ans === 'show') return;
  const cur = p.drugs[g.order[g.k]];
  g.pick = i;
  if (cur.n === i) { g.ans = 'ok'; if (!g.miss) g.hits++; sfx('ok'); }
  else { g.miss++; sfx('bad'); g.ans = g.miss >= 2 ? 'show' : 'bad'; }
  if (g.ans === 'ok' || g.ans === 'show') (g.placed[cur.n] = g.placed[cur.n] || []).push(cur.d);
  pathRender(pid);
}
function pathEnd(pid) {
  const g = PG[pid], n = g.order.length, r = g.hits / n, tp = S.tp[g.tid] || (S.tp[g.tid] = {});
  tp.mech = { ...(tp.mech || {}), [pid]: Math.max((tp.mech || {})[pid] || 0, r) };
  g.done = true; g.pick = null; gain(Math.round(10 + 20 * r), 'Mecanismos ubicados');
  if (S.settings.vsfx !== false) tones(VSFX[r >= 0.8 ? 'end' : 'recap']);
  pathRender(pid);
  g.sec.querySelector('.mq').insertAdjacentHTML('beforebegin', `<p class="mres"><b>${g.hits} de ${n}</b> a la primera. ${r >= 0.8 ? '¡Dominas esta vía!' : 'Repásala: es de lo que más preguntan.'}</p>`);
}

// ═══════════ Taller: algoritmos con casos, lectura de ECG y simuladores (src/content/51-taller.js)
const wsfx = (k) => { if (S.settings.vsfx !== false) tones(VSFX[k]); };
const WS = () => S.ws || (S.ws = {});
// ── Algoritmos: recorres el árbol con un caso; en cada bifurcación eliges y te dice si vas bien
const AG = {};
function mountAlgo(host, aid) {
  algoActs();
  const A = C.algos[aid], sec = document.createElement('section');
  sec.className = 'panel algo'; host.appendChild(sec);
  AG[aid] = { A, sec, free: false, order: shuffle(A.cases.map((_, i) => i)), k: 0, hits: 0, steps: 0, fin: false };
  algoGo(aid, 0);
}
function algoActs() {
  ACT.agpick = (b) => algoPick(b.dataset.a, +b.dataset.i);
  ACT.agnext = (b) => algoGo(b.dataset.a, AG[b.dataset.a].k + 1);
  ACT.agend = (b) => {
    const g = AG[b.dataset.a], r = g.steps ? g.hits / g.steps : 0;
    WS()[`algo:${b.dataset.a}`] = Math.max(WS()[`algo:${b.dataset.a}`] || 0, r);
    gain(Math.round(15 + 25 * r), 'Algoritmo resuelto'); wsfx(r >= 0.8 ? 'end' : 'recap');
    g.fin = true; algoRender(b.dataset.a);
  };
  ACT.agagain = (b) => { const g = AG[b.dataset.a]; Object.assign(g, { free: false, order: shuffle(g.A.cases.map((_, i) => i)), hits: 0, steps: 0 }); algoGo(b.dataset.a, 0); };
  ACT.agfree = (b) => { AG[b.dataset.a].free = true; algoGo(b.dataset.a, 0); };
  ACT.agcases = (b) => { const g = AG[b.dataset.a]; if (!g.free) return; Object.assign(g, { free: false, hits: 0, steps: 0 }); algoGo(b.dataset.a, 0); };
  ACT.agtop = (b) => algoGo(b.dataset.a, 0);
  ACT.agback = (b) => { const g = AG[b.dataset.a], s = g.trail.pop(); if (s) { g.cur = s.n; g.msg = ''; algoRender(b.dataset.a); } };
}
function algoGo(aid, k) { const g = AG[aid]; Object.assign(g, { k, cur: g.A.start, trail: [], miss: 0, msg: '', fin: false }); algoRender(aid); }
function algoRender(aid) {
  const g = AG[aid], A = g.A, N = A.nodes, n = N[g.cur], cs = g.free ? null : A.cases[g.order[g.k]];
  const trail = g.trail.map((s) => `<li class="${s.bad ? 'bad' : ''}"><span>${esc(N[s.n].q)}</span><b>${esc(N[s.n].opts[s.o].t)}</b></li>`).join('');
  let body;
  if (g.fin) {
    const r = g.steps ? g.hits / g.steps : 0;
    body = `<p class="mres"><b>${g.hits} de ${g.steps}</b> decisiones a la primera (${pct(r)}%). ${r >= 0.8 ? '¡Ya piensas como en el examen!' : 'Repite los casos: el algoritmo se graba a fuerza de recorrerlo.'}</p><div class="actrl"><button class="btn small gold-btn" data-act="agagain" data-a="${aid}">Otra ronda</button><button class="btn small" data-act="agfree" data-a="${aid}">Explorar libre</button></div>`;
  } else if (n.end) {
    const last = !g.free && g.k === A.cases.length - 1;
    body = `<div class="aleaf"><span class="eyebrow">${g.free ? 'Llegas a' : 'Diagnóstico y conducta'}</span><b>${esc(n.end)}</b><p>${esc(n.d)}</p></div>
      <div class="actrl">${g.free ? `<button class="btn small" data-act="agback" data-a="${aid}">◀ Atrás</button><button class="btn small gold-btn" data-act="agtop" data-a="${aid}">Volver al inicio</button>` : `<button class="btn small gold-btn" data-act="${last ? 'agend' : 'agnext'}" data-a="${aid}">${last ? 'Ver resultado' : 'Siguiente caso ▶'}</button>`}</div>`;
  } else {
    const good = cs ? cs.path[g.cur] : -1;
    body = `<p class="aq">${esc(n.q)}</p>${n.hint ? `<details class="ahint"><summary>Pista</summary><p>${esc(n.hint)}</p></details>` : ''}
      <div class="aopts">${n.opts.map((o, i) => `<button class="aopt${g.miss >= 2 && i === good ? ' hint' : ''}" data-act="agpick" data-a="${aid}" data-i="${i}">${esc(o.t)}</button>`).join('')}</div>
      ${g.free && g.trail.length ? `<div class="actrl"><button class="btn small" data-act="agback" data-a="${aid}">◀ Atrás</button></div>` : ''}`;
  }
  g.sec.innerHTML = `<div class="row"><h2 class="grow">Algoritmo · ${esc(A.title)}</h2></div>
    <div class="seg2" role="group" aria-label="Modo"><button class="btn small${g.free ? '' : ' gold-btn'}" data-act="agcases" data-a="${aid}">Con casos</button><button class="btn small${g.free ? ' gold-btn' : ''}" data-act="agfree" data-a="${aid}">Explorar libre</button></div>
    ${cs && !g.fin ? `<div class="acase"><p class="small muted">Caso ${g.k + 1} de ${A.cases.length}</p><p>${esc(cs.t)}</p><dl>${cs.data.map(([k, v]) => `<div><dt>${esc(k)}</dt><dd>${esc(v)}</dd></div>`).join('')}</dl></div>` : ''}
    ${g.free && !g.trail.length ? '<p class="small muted">Recorre el árbol a tu ritmo: toca cualquier opción para ver a dónde lleva.</p>' : ''}
    ${trail ? `<ol class="atrail">${trail}</ol>` : ''}
    ${g.msg ? `<p class="amsg">${g.msg}</p>` : ''}${body}`;
}
function algoPick(aid, i) {
  const g = AG[aid], N = g.A.nodes, n = N[g.cur];
  if (!n || n.end) return;
  if (g.free) { g.trail.push({ n: g.cur, o: i }); g.cur = n.opts[i].go; g.msg = ''; wsfx('pop'); algoRender(aid); return; }
  const cs = g.A.cases[g.order[g.k]], good = cs.path[g.cur];
  if (i === good) {
    if (!g.miss) g.hits++;
    g.steps++;
    const why = cs.why && cs.why[g.cur];
    g.trail.push({ n: g.cur, o: i, bad: g.miss > 0 }); g.cur = n.opts[i].go; g.miss = 0;
    g.msg = why ? `✓ ${esc(why)}` : '';
    wsfx(N[g.cur].end ? 'ok' : 'pop');
  } else {
    g.miss++; wsfx('bad');
    g.msg = g.miss >= 2 ? 'Te marco la correcta: tócala para seguir.' : 'No. Vuelve a mirar los datos del caso.';
  }
  algoRender(aid);
}

// ── ECG sintético: cada latido es una suma de gaussianas (P, Q, R, S, T, U) con valores por derivación y por patrón
const LEADS = ['I', 'II', 'III', 'aVR', 'aVL', 'aVF', 'V1', 'V2', 'V3', 'V4', 'V5', 'V6'];
const ECG_BASE = { // P, Q, R, S, T en mV
  I: [0.1, -0.05, 0.8, -0.1, 0.25], II: [0.15, -0.05, 1.2, -0.15, 0.3], III: [0.05, -0.05, 0.5, -0.2, 0.1],
  aVR: [-0.1, 0, 0.15, -0.8, -0.2], aVL: [0.05, -0.05, 0.5, -0.3, 0.1], aVF: [0.1, -0.05, 0.8, -0.15, 0.2],
  V1: [0.08, 0, 0.2, -1.0, 0.05], V2: [0.1, 0, 0.4, -1.4, 0.4], V3: [0.1, 0, 0.8, -0.9, 0.45],
  V4: [0.1, -0.05, 1.3, -0.5, 0.4], V5: [0.1, -0.08, 1.4, -0.2, 0.3], V6: [0.1, -0.08, 1.1, -0.1, 0.25]
};
const gs = (x, c, w) => Math.exp(-0.5 * ((x - c) / w) ** 2);
const c01 = (x) => (x < 0 ? 0 : x > 1 ? 1 : x);
function seeded(n) { let a = n >>> 0; return () => { a = (a + 0x6D2B79F5) >>> 0; let t = Math.imul(a ^ (a >>> 15), 1 | a); t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t; return ((t ^ (t >>> 14)) >>> 0) / 4294967296; }; }
// Efecto del potasio sobre el trazo (también lo usa el simulador)
function kEffects(P, k) {
  if (k >= 5.5) { P.tw = 0.62; P.tMul = Math.min(3, 1 + (k - 5.5) * 0.9); }
  if (k >= 6.5) { P.pMul = Math.max(0, 1 - (k - 6.5) / 1.5); P.pr += Math.min(0.08, 0.04 * (k - 6.5)); P.qrsW = 1 + 0.35 * (k - 6.5); }
  if (k >= 8) { P.pMul = 0; P.qrsW = Math.min(3.2, 1.6 + 0.6 * (k - 8)); P.rate = 58; }
  if (k < 3.5) {
    const d = 3.5 - k; P.tMul = Math.max(0.12, 1 - d * 0.6); P.u = Math.min(0.28, 0.06 + d * 0.12); P.qt = 1 + d * 0.1;
    ['II', 'V4', 'V5', 'V6'].forEach((l) => (P.mod[l] = { ...(P.mod[l] || {}), st: -0.04 * d }));
  }
}
function ecgSpec(id, k) {
  const P = { id, rate: 72, rhythm: 'sinus', pr: 0.16, qrsW: 1, tw: 1, qt: 1, pMul: 1, tMul: 1, u: 0, mod: {}, seed: (Math.random() * 1e9) | 0 };
  const m = (leads, f) => leads.forEach((l) => (P.mod[l] = { ...(P.mod[l] || {}), ...f }));
  const pre = ['V1', 'V2', 'V3', 'V4', 'V5', 'V6'];
  switch (id) {
    case 'inf': P.rate = 78; m(['II'], { st: 0.22, tAdd: 0.15 }); m(['III'], { st: 0.3, tAdd: 0.2, q: -0.2 }); m(['aVF'], { st: 0.26, tAdd: 0.18, q: -0.15 }); m(['aVL'], { st: -0.22, t: -0.1 }); m(['I'], { st: -0.05 }); break;
    case 'ant': P.rate = 84; m(['V1'], { st: 0.15 }); m(['V2'], { st: 0.35, rMul: 0.4, tAdd: 0.3 }); m(['V3'], { st: 0.4, rMul: 0.5, tAdd: 0.35 }); m(['V4'], { st: 0.3, tAdd: 0.25 }); m(['V5'], { st: 0.1 }); m(['III'], { st: -0.1 }); m(['aVF'], { st: -0.08 }); break;
    case 'lat': P.rate = 80; m(['I'], { st: 0.28, tAdd: 0.15 }); m(['aVL'], { st: 0.3, tAdd: 0.15, q: -0.12 }); m(['V5', 'V6'], { st: 0.26, tAdd: 0.1 }); m(['III'], { st: -0.26, t: -0.08 }); m(['aVF'], { st: -0.1 }); m(['II'], { st: -0.03 }); break;
    case 'wellens': P.rate = 68; P.tw = 1.1; m(['V1'], { t: -0.15 }); m(['V2'], { t: -0.55, st: 0.03 }); m(['V3'], { t: -0.6, st: 0.02 }); m(['V4'], { t: -0.35 }); break;
    case 'dewinter': P.rate = 82; P.tw = 0.8; m(pre, { st: -0.24, stUp: true }); [0.4, 1.0, 1.1, 1.0, 0.7, 0.5].forEach((t, i) => m([pre[i]], { t })); m(['aVR'], { st: 0.08 }); break;
    case 'pericard': P.rate = 96; m(['I', 'II', 'aVF', 'V2', 'V3', 'V4', 'V5', 'V6'], { st: 0.15, prd: -0.06 }); m(['aVL', 'III', 'V1'], { st: 0.06 }); m(['aVR'], { st: -0.12, prd: 0.06 }); break;
    case 'hiperk': kEffects(P, k || 6.9); break;
    case 'hipok': kEffects(P, k || 2.4); break;
    case 'fa': P.rhythm = 'af'; P.rate = 108; break;
    case 'flutter': P.rhythm = 'flutter'; P.rate = 150; break;
    case 'bavc': P.rhythm = 'chb'; P.arate = 82; P.rate = 38; P.qrsW = 1.9; P.tMul = -0.7; break;
    case 'tep': P.rate = 112; m(['I'], { s: -0.5 }); m(['III'], { q: -0.32, t: -0.3 }); m(['V1'], { t: -0.28 }); m(['V2'], { t: -0.38 }); m(['V3'], { t: -0.26 }); break;
    case 'k': kEffects(P, k); break;
    case 'bradi': P.rate = 44; break;
    case 'taqui': P.rate = 118; break;
    case 'bav1': P.rate = 64; P.pr = 0.32; break;
    case 'mobitz1': P.rate = 72; P.prSeq = [0.16, 0.25, 0.31, null]; break;
    case 'mobitz2': P.rate = 80; P.prSeq = [0.17, 0.17, null]; P.qrsW = 1.9; break;
    case 'tsv': P.rhythm = 'svt'; P.rate = 182; break;
    case 'tv': P.rhythm = 'vt'; P.rate = 168; P.qrsW = 2.3; P.tMul = -1.1; m(['V1', 'V2', 'V3'], { rMul: 0.3, s: -1.7 }); m(['I', 'V5', 'V6', 'aVL'], { rMul: 1.3, s: -0.05, q: 0 }); break;
    case 'wpw': P.pr = 0.13; P.delta = 0.32; P.qrsW = 1.4; P.tMul = 0.7; ['I', 'II', 'III', 'aVR', 'aVL', 'aVF', ...pre].forEach((l) => m([l], { q: 0 })); m(['V1'], { rMul: 2.5, s: -0.7 }); break;
    case 'brd': P.qrsW = 1.35; P.ext = 0.035; m(['V1'], { r2: 0.75, s: -0.45, t: -0.2 }); m(['V2'], { r2: 0.6, s: -0.8, t: -0.12 }); m(['I', 'V5', 'V6', 'aVL'], { s2: -0.35 }); break;
    case 'bri': P.qrsW = 1.75; P.ext = 0.02;
      m(['V1'], { rMul: 0.15, s: -1.5, st: 0.18, t: 0.4 }); m(['V2'], { rMul: 0.2, s: -1.9, st: 0.24, t: 0.5 }); m(['V3'], { rMul: 0.25, s: -1.5, st: 0.16, t: 0.4 });
      m(['I', 'aVL', 'V5', 'V6'], { q: 0, s: 0, r2: 0.7, st: -0.08, t: -0.3 }); m(['V4'], { s: -0.3, t: -0.15 }); m(['II', 'aVF'], { t: 0.08 }); break;
    case 'hvi': P.rate = 70; m(['V1'], { s: -1.7, t: 0.12 }); m(['V2'], { s: -2.1 }); m(['V5'], { rMul: 1.6, st: -0.12, t: -0.3 }); m(['V6'], { rMul: 1.75, st: -0.12, t: -0.28 }); m(['I', 'aVL'], { rMul: 1.4, st: -0.06, t: -0.15 }); break;
    case 'posterior': P.rate = 80; m(['V1'], { rMul: 3.2, s: -0.35, st: -0.22, t: 0.35 }); m(['V2'], { rMul: 2.6, s: -0.6, st: -0.28, t: 0.45 }); m(['V3'], { rMul: 1.3, s: -0.5, st: -0.2, t: 0.4 }); break;
    case 'qtlargo': P.rate = 64; P.qt = 2.1; P.tw = 1.4; break;
    default: break;
  }
  return P;
}
function leadParams(P, l) {
  const b = ECG_BASE[l], o = P.mod[l] || {};
  return { p: b[0] * P.pMul, q: o.q ?? b[1], r: b[2] * (o.rMul ?? 1), s: o.s ?? b[3], r2: o.r2 || 0, s2: o.s2 || 0, t: o.t ?? b[4] * P.tMul + (o.tAdd || 0), st: o.st || 0, stUp: !!o.stUp, prd: o.prd || 0, u: (l === 'V2' || l === 'V3' ? 1.2 : 0.8) * P.u };
}
function ecgBeats(P, dur) {
  if (P.beats && P.beats.dur >= dur) return P.beats;
  const rnd = seeded(P.seed), out = [];
  if (P.rhythm === 'chb') {
    for (let t = 0.12; t < dur; t += 60 / P.arate) out.push({ t, p: true, q: false, rr: 1 });
    for (let t = 0.45; t < dur + 0.5; t += 60 / P.rate) out.push({ t: t - P.pr, p: false, q: true, rr: 60 / P.rate });
  } else {
    for (let t = -0.35; t < dur + 0.5;) {
      const rr = P.rhythm === 'af' ? (60 / P.rate) * (0.62 + 0.76 * rnd()) : 60 / P.rate;
      const pr = P.prSeq ? P.prSeq[out.length % P.prSeq.length] : P.pr; // Mobitz: PR por latido (null = P que no conduce)
      out.push({ t, p: P.rhythm === 'sinus', q: pr != null, rr, pr: pr ?? P.pr }); t += rr;
    }
  }
  out.dur = dur; P.beats = out; return out;
}
function beatV(L, P, u, b) {
  let v = 0;
  if (b.p && L.p) v += L.p * gs(u, 0.05, 0.022);
  if (!b.q) return v;
  const q0 = b.pr ?? P.pr, k = P.qrsW, rr = Math.min(b.rr, 1.6);
  if (L.prd) v += L.prd * c01((u - 0.09) / 0.012) * c01((q0 - 0.004 - u) / 0.012);
  v += L.q * gs(u, q0 + 0.008 * k, 0.007 * k) + L.r * gs(u, q0 + 0.03 * k, 0.009 * k) + L.s * gs(u, q0 + 0.052 * k, 0.009 * k);
  if (L.r2) v += L.r2 * gs(u, q0 + 0.075 * k, 0.011 * k); // R′ (rama derecha) o muesca de la R (rama izquierda)
  if (L.s2) v += L.s2 * gs(u, q0 + 0.08 * k, 0.016 * k); // S ancha y empastada
  if (P.delta && L.r > 0) v += P.delta * Math.min(L.r, 1.2) * c01((u - q0 + 0.045) / 0.065) * (u < q0 + 0.02 ? 1 : gs(u, q0 + 0.02, 0.02)); // onda delta
  const J = q0 + (0.07 + (P.ext || 0)) * k, Tp = J + 0.17 * Math.sqrt(rr) * P.qt, tw = 0.05 * Math.sqrt(rr) * P.tw;
  if (L.st) {
    const on = c01((u - J + 0.006) / 0.012), off = u < Tp ? 1 : gs(u, Tp, tw * 1.1);
    v += L.st * on * off * (L.stUp ? Math.max(0, 1 - (u - J) / (Tp - J)) : 1);
  }
  v += L.t * gs(u, Tp, tw);
  if (L.u) v += L.u * gs(u, Tp + 0.17 * Math.sqrt(rr), 0.035);
  return v;
}
function atrialV(P, l, t) {
  if (P.rhythm === 'af') { const f = { V1: 1.4, II: 1, III: 0.9, aVF: 0.9 }[l] || 0.5; return 0.04 * f * (Math.sin(2 * Math.PI * 5.7 * t + 1.3) + 0.6 * Math.sin(2 * Math.PI * 7.9 * t + 0.4)); }
  if (P.rhythm === 'flutter') {
    const ph = (t * 5) % 1, saw = ph < 0.75 ? ph / 0.75 : (1 - ph) / 0.25;
    const a = { II: -0.22, III: -0.24, aVF: -0.23, V1: 0.14, aVR: 0.12, I: 0.03, aVL: 0.05 }[l] ?? 0.06;
    return a * (saw - 0.5) * 2;
  }
  return 0;
}
function ecgV(P, l, t, L) {
  let v = atrialV(P, l, t);
  for (const b of P.beats) { const u = t - b.t; if (u > -0.05 && u < 1.3) v += beatV(L, P, u, b); }
  return v;
}
// Dibuja: layout '12' (6 × 2 + tira de DII) o una lista de derivaciones en tiras de 5 s
function ecgDraw(cv, P, layout, hl = []) {
  const W = cv.clientWidth || 340, dpr = window.devicePixelRatio || 1;
  const strips = layout === '12' ? null : layout, cols = strips ? 1 : 2, span = strips ? 5 : 2.5;
  const mm = W / cols / (span * 25), rowH = Math.round(22 * mm), rows = strips ? strips.length : 7, H = rowH * rows;
  cv.width = Math.round(W * dpr); cv.height = Math.round(H * dpr); cv.style.height = H + 'px';
  const g = cv.getContext('2d'); g.setTransform(dpr, 0, 0, dpr, 0, 0);
  g.fillStyle = '#0B0E2A'; g.fillRect(0, 0, W, H);
  for (let x = 0, i = 0; x <= W; x += mm, i++) { g.fillStyle = i % 5 ? 'rgba(255,84,112,.07)' : 'rgba(255,84,112,.22)'; if (i % 5 || mm >= 2.4) g.fillRect(Math.round(x), 0, 1, H); }
  for (let y = 0, i = 0; y <= H; y += mm, i++) { g.fillStyle = i % 5 ? 'rgba(255,84,112,.07)' : 'rgba(255,84,112,.22)'; if (i % 5 || mm >= 2.4) g.fillRect(0, Math.round(y), W, 1); }
  ecgBeats(P, 5.2);
  const panels = strips ? strips.map((l, r) => [l, 0, r, W, 0]) : [...LEADS.map((l, i) => [l, (i < 6 ? 0 : 1) * (W / 2), i % 6, W / 2, i < 6 ? 0 : 2.5]), ['II', 0, 6, W, 0]];
  for (const [l, x0, r, w, t0] of panels) {
    const y0 = r * rowH + rowH * 0.58, L = leadParams(P, l), dur = w / (25 * mm), on = hl.includes(l) && !(strips == null && r === 6);
    if (on) { g.strokeStyle = 'rgba(242,193,78,.95)'; g.lineWidth = 2; g.strokeRect(x0 + 2, r * rowH + 2, w - 4, rowH - 4); }
    g.strokeStyle = on ? '#FFE9A8' : '#7CFFB2'; g.lineWidth = 1.5; g.lineJoin = 'round'; g.beginPath();
    const n = Math.ceil(w);
    for (let i = 0; i <= n; i++) { const t = t0 + (i / n) * dur, y = y0 - ecgV(P, l, t, L) * 10 * mm; if (i) g.lineTo(x0 + i * (w / n), y); else g.moveTo(x0, y); }
    g.stroke();
    g.fillStyle = on ? '#F2C14E' : '#C9CEFF'; g.font = `${Math.max(10, Math.round(rowH * 0.2))}px ui-monospace, monospace`;
    g.fillText(r === 6 && !strips ? 'II (tira)' : l, x0 + 5, r * rowH + Math.max(12, rowH * 0.22));
    if (!strips && x0 > 0) { g.fillStyle = 'rgba(201,206,255,.35)'; g.fillRect(x0, r * rowH + 4, 1, rowH - 8); }
  }
}
// ── Lee el estudio (ECG o frotis): un patrón al azar del tema, cuatro opciones y la explicación con lo clave resaltado
const READERS = {
  ecg: { set: () => C.ecg, title: 'Lee el ECG', next: 'Otro ECG ▶', q: '¿Qué muestra este ECG?', cls: 'ecgcv', label: 'Electrocardiograma',
    note: '12 derivaciones a 25 mm/s (DI–aVF a la izquierda, V1–V6 a la derecha) y una tira de DII.',
    make: (id) => ecgSpec(id), draw: (cv, g, on) => ecgDraw(cv, g.P, '12', on ? C.ecg[g.cur].hl : []) },
  frotis: { set: () => C.frotis, title: 'Lee el frotis', next: 'Otro frotis ▶', q: '¿Qué ves en este frotis?', cls: 'smearcv', label: 'Frotis de sangre periférica',
    note: 'Sangre periférica teñida, vista al microscopio. Al responder se marcan las células clave.',
    make: () => (Math.random() * 1e9) | 0, draw: (cv, g, on) => smearDraw(cv, g.cur, g.P, on) }
};
const EG = {};
function mountReader(host, kind, ids, key) {
  if (ids.length < 2) return;
  ACT.egpick = (b) => {
    const g = EG[b.dataset.k]; if (g.ans) return;
    g.ans = b.dataset.id; g.n++;
    if (g.ans === g.cur) { g.hits++; wsfx('ok'); gain(8); } else wsfx('bad');
    WS()[g.kind] = (WS()[g.kind] || 0) + (g.ans === g.cur ? 1 : 0);
    readerRender(b.dataset.k);
  };
  ACT.egnext = (b) => readerNext(b.dataset.k);
  const sec = document.createElement('section');
  sec.className = 'panel ecgq'; host.appendChild(sec);
  EG[kind + ':' + key] = { kind, sec, ids, hits: 0, n: 0, last: null };
  readerNext(kind + ':' + key);
}
const mountEcg = (host, ids, key) => mountReader(host, 'ecg', ids, key);
function readerNext(key) {
  const g = EG[key], R = READERS[g.kind], all = Object.keys(R.set());
  const pick = shuffle(g.ids.filter((id) => id !== g.last))[0];
  const others = shuffle(all.filter((id) => id !== pick)), near = others.filter((id) => g.ids.includes(id));
  g.cur = pick; g.last = pick; g.ans = null; g.P = R.make(pick);
  g.opts = shuffle([pick, ...[...near, ...others.filter((id) => !near.includes(id))].slice(0, 3)]);
  readerRender(key);
}
function readerRender(key) {
  const g = EG[key], R = READERS[g.kind], set = R.set(), e = set[g.cur];
  g.sec.innerHTML = `<div class="row"><h2 class="grow">${R.title}</h2>${g.n ? `<span class="small muted">${g.hits}/${g.n}</span>` : ''}</div>
    <p class="small muted">${R.note}</p>
    <canvas class="${R.cls}" aria-label="${R.label}"></canvas>
    <p class="aq">${R.q}</p>
    <div class="aopts">${g.opts.map((id) => `<button class="aopt${g.ans ? (id === g.cur ? ' ok' : id === g.ans ? ' no' : '') : ''}" data-act="egpick" data-k="${key}" data-id="${id}"${g.ans ? ' disabled' : ''}>${esc(set[id].name)}</button>`).join('')}</div>
    ${g.ans ? `<div class="mexp"><p>${g.ans === g.cur ? '✓ ' : ''}<b>${esc(e.name)}.</b> ${esc(e.why)}</p></div><div class="actrl"><button class="btn small gold-btn" data-act="egnext" data-k="${key}">${R.next}</button></div>` : ''}`;
  const cv = g.sec.querySelector('canvas');
  requestAnimationFrame(() => R.draw(cv, g, !!g.ans));
}
// ── Taller de electros: lectura guiada (frecuencia, ritmo, P, QRS y diagnóstico), modo rápido y galería
const ECG_STEPS = [
  ['Frecuencia ventricular', ['Menos de 60', '60 a 100', 'Más de 100'], 'Cuenta los QRS de la tira de DII (10 s) y multiplica por 6, o divide 300 entre los cuadros grandes que hay de R a R.'],
  ['Ritmo', ['Regular', 'Irregular'], 'Compara las distancias de R a R a lo largo de la tira.'],
  ['Ondas P', ['Una P antes de cada QRS', 'Hay P que no conducen', 'No hay P (o hay ondas f o F)'], 'Busca la P en DII y en V1 antes de cada QRS; marcha P con P para ver cuáles se quedan sin QRS.'],
  ['QRS', ['Estrecho (menos de 3 cuadritos)', 'Ancho (3 cuadritos o más)'], 'A 25 mm/s, 3 cuadritos chicos son 120 ms.']
];
const FACTS = {};
function ecgFacts(id) {
  if (FACTS[id]) return FACTS[id];
  const P = ecgSpec(id), n = ecgBeats(P, 60).filter((b) => b.q && b.t >= 0 && b.t < 60).length;
  return (FACTS[id] = [n < 60 ? 0 : n <= 100 ? 1 : 2, P.rhythm === 'af' || P.prSeq ? 1 : 0, P.rhythm === 'chb' || P.prSeq ? 1 : P.rhythm === 'sinus' && P.pMul > 0.2 ? 0 : 2, P.qrsW >= 1.35 ? 1 : 0]);
}
const LAB = {};
function mountEcgLab(host, ids, key) {
  if (ids.length < 2) return;
  const g = LAB[key] = LAB[key] || { mode: 'guia', hits: 0, n: 0, gal: ids[0] };
  g.ids = ids;
  ACT.lbmode = (b) => { LAB[b.dataset.k].mode = b.dataset.m; labRender(b.dataset.k); };
  ACT.lbstep = (b) => {
    const g = LAB[b.dataset.k], i = +b.dataset.i;
    if (g.pend != null || g.done) return;
    if (g.step < 4) {
      const ok = i === g.facts[g.step];
      g.trail.push({ s: g.step, i, ok }); g.n++;
      if (ok) { g.hits++; g.step++; wsfx('pop'); } else { g.pend = i; wsfx('bad'); }
    } else {
      g.done = g.opts[i]; g.n++;
      const ok = g.done === g.cur;
      if (ok) { g.hits++; wsfx('ok'); gain(g.trail.every((x) => x.ok) ? 12 : 8); } else wsfx('bad');
      WS().ecglab = Math.max(WS().ecglab || 0, g.n >= 10 ? g.hits / g.n : 0);
    }
    labRender(b.dataset.k);
  };
  ACT.lbgo = (b) => { const g = LAB[b.dataset.k]; g.pend = null; g.step++; labRender(b.dataset.k); };
  ACT.lbnext = (b) => { labNew(b.dataset.k); labRender(b.dataset.k); };
  ACT.lbgal = (b) => { LAB[b.dataset.k].gal = b.dataset.id; labRender(b.dataset.k); };
  g.sec = document.createElement('div'); g.sec.className = 'stack'; host.appendChild(g.sec);
  if (!g.cur || !ids.includes(g.cur)) labNew(key);
  labRender(key);
}
function labNew(key) {
  const g = LAB[key], pick = shuffle(g.ids.filter((id) => id !== g.cur))[0], f = ecgFacts(pick);
  const same = (id) => ecgFacts(id).filter((x, i) => x === f[i]).length;
  const others = shuffle(Object.keys(C.ecg).filter((id) => id !== pick)).sort((a, b) => same(b) - same(a));
  g.cur = pick; g.P = ecgSpec(pick); g.facts = f; g.step = 0; g.trail = []; g.pend = null; g.done = null;
  g.opts = shuffle([pick, others[0], others[1], shuffle(others.slice(2))[0]]);
}
function labRender(key) {
  const g = LAB[key], modes = [['guia', 'Lectura guiada'], ['rapido', 'Rápido'], ['galeria', 'Galería']];
  g.sec.innerHTML = `<section class="panel"><div class="row"><h2 class="grow">Taller de electros</h2>${g.n ? `<span class="small muted">${g.hits}/${g.n}</span>` : ''}</div>
    <div class="seg2" role="group" aria-label="Modo">${modes.map(([m, l]) => `<button class="btn small${g.mode === m ? ' gold-btn' : ''}" data-act="lbmode" data-k="${key}" data-m="${m}">${l}</button>`).join('')}</div></section><div class="lbody stack"></div>`;
  const body = g.sec.querySelector('.lbody');
  if (g.mode === 'rapido') { mountEcg(body, g.ids, 'lab' + key); return; }
  const sec = document.createElement('section'); sec.className = 'panel ecgq'; body.appendChild(sec);
  if (g.mode === 'galeria') {
    const e = C.ecg[g.gal];
    sec.innerHTML = `<p class="small muted">Toca un patrón: se resalta dónde mirar.</p>
      <div class="egal">${g.ids.map((id) => `<button class="chip${id === g.gal ? ' fill' : ''}" style="--sc:var(--cyan)" data-act="lbgal" data-k="${key}" data-id="${id}">${esc(C.ecg[id].name)}</button>`).join('')}</div>
      <canvas class="ecgcv" aria-label="Electrocardiograma: ${esc(e.name)}"></canvas><div class="mexp"><p><b>${esc(e.name)}.</b> ${esc(e.why)}</p></div>`;
    const cv = sec.querySelector('canvas'), P = ecgSpec(g.gal);
    requestAnimationFrame(() => ecgDraw(cv, P, '12', e.hl));
    return;
  }
  const e = C.ecg[g.cur], s = g.step, st = ECG_STEPS[s];
  const trail = g.trail.map((x) => `<li${x.ok ? '' : ' class="bad"'}><span>${ECG_STEPS[x.s][0]}</span><b>${x.ok ? '✓ ' : '✗ '}${esc(ECG_STEPS[x.s][1][x.ok ? x.i : g.facts[x.s]])}</b></li>`).join('');
  let q;
  if (s < 4) {
    const marks = (i) => (g.pend == null ? '' : i === g.facts[s] ? ' ok' : i === g.pend ? ' no' : '');
    q = `<p class="aq">Paso ${s + 1} de 5 · ${st[0]}</p>
      <div class="aopts">${st[1].map((o, i) => `<button class="aopt${marks(i)}" data-act="lbstep" data-k="${key}" data-i="${i}"${g.pend != null ? ' disabled' : ''}>${esc(o)}</button>`).join('')}</div>
      ${g.pend != null ? `<div class="mexp"><p>${esc(st[2])}</p></div><div class="actrl"><button class="btn small gold-btn" data-act="lbgo" data-k="${key}">Sigue ▶</button></div>` : `<p class="small muted">${esc(st[2])}</p>`}`;
  } else {
    const marks = (id) => (!g.done ? '' : id === g.cur ? ' ok' : id === g.done ? ' no' : '');
    q = `<p class="aq">Paso 5 de 5 · Con eso, ¿qué es?</p>
      <div class="aopts">${g.opts.map((id, i) => `<button class="aopt${marks(id)}" data-act="lbstep" data-k="${key}" data-i="${i}"${g.done ? ' disabled' : ''}>${esc(C.ecg[id].name)}</button>`).join('')}</div>
      ${g.done ? `<div class="mexp"><p>${g.done === g.cur ? '✓ ' : ''}<b>${esc(e.name)}.</b> ${esc(e.why)}</p><p class="small muted">Lo resaltado en amarillo es donde se ve.</p></div><div class="actrl"><button class="btn small gold-btn" data-act="lbnext" data-k="${key}">Otro ECG ▶</button></div>` : ''}`;
  }
  sec.innerHTML = `<p class="small muted">Léelo como en la guardia, en orden: frecuencia, ritmo, P, QRS y luego el diagnóstico.</p>
    <canvas class="ecgcv" aria-label="Electrocardiograma"></canvas>${trail ? `<ol class="atrail">${trail}</ol>` : ''}${q}`;
  const cv = sec.querySelector('canvas');
  requestAnimationFrame(() => ecgDraw(cv, g.P, '12', g.done ? e.hl : []));
}

// ── Taller de soplos: ruidos cardiacos sintetizados en el teléfono (S1, S2, soplos, chasquidos, galopes y frote).
// Cada sonido es un WAV que se repite en un <audio> (suena en modo silencio). El fonocardiograma sigue al audio.
// Se oye más fuerte en su foco: tocar otro foco vuelve a sintetizar con menos soplo (y S1 o S2 según la zona).
const HS_SR = 22050, HS_T = 0.8333, HS_N = 4; // 72 lpm, 4 ciclos por bucle
const FOCOS = { aortico: ['Aórtico', 82, 64], pulmonar: ['Pulmonar', 118, 64], erb: ['Erb', 118, 88], tricuspideo: ['Tricuspídeo', 108, 122], mitral: ['Mitral', 148, 136] };
const MANIOBRAS = { // multiplicador de intensidad del soplo; en el prolapso mueve el clic
  basal: ['En reposo', {}], valsalva: ['Valsalva', { ea: 0.55, mch: 1.7, im: 0.65, civ: 0.65, ia: 0.65, em: 0.65, cia: 0.7, pvm: 1.2, s3: 0.6, s4: 0.6 }],
  cuclillas: ['Cuclillas', { ea: 1.35, mch: 0.45, im: 1.25, civ: 1.2, ia: 1.25, em: 1.1, pvm: 0.8 }], handgrip: ['Handgrip', { ea: 0.65, mch: 0.55, im: 1.45, civ: 1.4, ia: 1.45, pvm: 0.8 }]
};
const FLAB = { aortico: [-14, 4, 'end'], pulmonar: [14, 4, 'start'], erb: [14, 4, 'start'], tricuspideo: [-14, 4, 'end'], mitral: [0, 24, 'middle'] }; // rótulos sin encimarse
const PVM_CLICK = { basal: 0.17, valsalva: 0.11, cuclillas: 0.22, handgrip: 0.21 };
function hsBand(n, f0, q, seed) { // ruido blanco filtrado pasa-banda (biquad RBJ), normalizado a pico 1
  const rnd = seeded(seed), w = (2 * Math.PI * f0) / HS_SR, al = Math.sin(w) / (2 * q), a0 = 1 + al;
  const b0 = al / a0, b2 = -al / a0, a1 = (-2 * Math.cos(w)) / a0, a2 = (1 - al) / a0, out = new Float32Array(n);
  let x1 = 0, x2 = 0, y1 = 0, y2 = 0, mx = 1e-6;
  for (let i = 0; i < n; i++) { const x = rnd() * 2 - 1, y = b0 * x + b2 * x2 - a1 * y1 - a2 * y2; x2 = x1; x1 = x; y2 = y1; y1 = y; out[i] = y; mx = Math.max(mx, Math.abs(y)); }
  for (let i = 0; i < n; i++) out[i] /= mx;
  return out;
}
const diamond = (p, a, b, pk) => (p < a || p > b ? 0 : p < pk ? (p - a) / (pk - a) : (b - p) / (b - pk));
const edge = (p, a, b, r = 0.012) => c01((p - a) / r) * c01((b - p) / r);
function hsSynth(id, man = 'basal', at = null) {
  const n = Math.round(HS_SR * HS_T * HS_N), out = new Float32Array(n), e = C.soplos[id];
  const fo = FOCOS[at || e.foco], src = FOCOS[e.foco], d = Math.hypot(fo[1] - src[1], fo[2] - src[2]);
  const near = 0.22 + 0.78 * Math.exp(-((d / 42) ** 2)), base = fo[2] < 100 ? 1 : 0.6, apex = fo[2] < 100 ? 0.6 : 1;
  const mul = (MANIOBRAS[man][1][id] ?? 1) * near;
  // Ruidos: senoides amortiguadas (graves de verdad, más un armónico para que se oigan en la bocina del teléfono)
  const thump = (t0, f, amp, dur) => {
    for (let c = 0; c < HS_N; c++) {
      const s0 = Math.round((c * HS_T + t0) * HS_SR), len = Math.round(dur * HS_SR);
      for (let i = 0; i < len && s0 + i < n; i++) {
        const t = i / HS_SR, env = c01(t / 0.004) * Math.exp(-t / (dur / 4));
        out[s0 + i] += amp * env * (Math.sin(2 * Math.PI * f * t) + 0.45 * Math.sin(2 * Math.PI * f * 2.7 * t + 0.6));
      }
    }
  };
  const s1 = id === 'em' ? 1.35 : 1, a2 = id === 'ea' ? 0.35 : 1;
  thump(0, 95, 0.42 * s1 * apex, 0.1); thump(0.022, 120, 0.3 * s1 * apex, 0.09);
  if (id === 'cia') { thump(0.32, 170, 0.36 * base, 0.07); thump(0.375, 150, 0.3 * base, 0.07); }
  else { thump(0.32, 170, 0.36 * a2 * base, 0.07); thump(0.335, 150, 0.16 * base, 0.06); }
  if (id === 's3') thump(0.47, 62, 0.42, 0.09);
  if (id === 's4') thump(0.755, 62, 0.4, 0.08);
  if (id === 'em') thump(0.395, 340, 0.24 * near, 0.03); // chasquido de apertura
  const ck = PVM_CLICK[man];
  if (id === 'pvm') thump(ck, 420, 0.3 * near, 0.025); // clic mesosistólico
  // Soplos: ruido filtrado con su envolvente dentro del ciclo
  const M = {
    ea: [190, 0.8, 0.5, (p) => diamond(p, 0.06, 0.29, 0.15)],
    mch: [210, 0.8, 0.46, (p) => diamond(p, 0.07, 0.3, 0.2)],
    im: [430, 1.1, 0.3, (p) => edge(p, 0.035, 0.32) * 0.95],
    civ: [260, 0.9, 0.42, (p) => edge(p, 0.03, 0.315) * 0.9],
    pvm: [420, 1.1, 0.3, (p) => (p > ck + 0.025 && p < 0.315 ? 0.35 + 0.65 * (p - ck) / (0.315 - ck) : 0) * edge(p, ck + 0.02, 0.315)],
    ia: [560, 1.3, 0.3, (p) => (p > 0.335 ? Math.exp(-(p - 0.335) / 0.13) * edge(p, 0.335, 0.66, 0.008) : 0)],
    em: [110, 0.9, 0.5, (p) => (p > 0.42 && p < 0.6 ? 0.85 * Math.exp(-(p - 0.42) / 0.12) : 0) + (p > 0.62 && p < 0.835 ? 0.3 + 0.7 * (p - 0.62) / 0.21 : 0) * edge(p, 0.62, 0.83)],
    cia: [300, 0.9, 0.16, (p) => diamond(p, 0.07, 0.26, 0.15)],
    roce: [700, 0.7, 0.32, (p) => Math.max(edge(p, 0.08, 0.25, 0.02), edge(p, 0.4, 0.52, 0.02) * 0.8, edge(p, 0.71, 0.8, 0.02) * 0.9)]
  }[id];
  if (M) {
    const [f0, q, amp, env] = M, nz = hsBand(n, f0, q, 7 + id.length), nz2 = id === 'ea' || id === 'mch' || id === 'civ' || id === 'roce' ? hsBand(n, f0 * 2.2, 1.2, 99) : null;
    for (let i = 0; i < n; i++) {
      const p = (i / HS_SR) % HS_T;
      let v = env(p); if (!v) continue;
      if (id === 'roce') v *= 0.55 + 0.45 * Math.sin(2 * Math.PI * 23 * (i / HS_SR)) ** 2; // aspereza
      out[i] += amp * mul * v * (nz2 ? 0.7 * nz[i] + 0.45 * nz2[i] : nz[i]);
    }
  }
  for (let i = 0; i < n; i++) out[i] = Math.tanh(2.3 * out[i]) * 0.92; // más volumen sin recortar feo
  return out;
}
const HS = { el: null, url: null, id: null, man: 'basal', at: null, raf: null, data: null };
function hsStop() {
  if (HS.raf) cancelAnimationFrame(HS.raf); HS.raf = null;
  if (HS.el) { HS.el.pause(); }
}
function hsPlay(id, man, at, keep) {
  const t = keep && HS.el ? HS.el.currentTime : 0;
  HS.data = hsSynth(id, man, at); HS.id = id; HS.man = man; HS.at = at;
  if (HS.url) URL.revokeObjectURL(HS.url);
  HS.url = wavURL(HS.data, HS_SR);
  if (!HS.el) { HS.el = new Audio(); HS.el.loop = true; HS.el.setAttribute('playsinline', ''); }
  HS.el.src = HS.url;
  try { HS.el.currentTime = t; } catch (e) { /* aún sin metadatos */ }
  const p = HS.el.play(); if (p && p.catch) p.catch(() => toast('Toca ▶ otra vez para escuchar'));
}
// Fonocardiograma de 2 ciclos con la línea de reproducción; sístole y diástole marcadas
function hsDraw(cv, data, reveal) {
  const W = cv.clientWidth || 340, H = 120, dpr = window.devicePixelRatio || 1;
  cv.width = Math.round(W * dpr); cv.height = H * dpr; cv.style.height = H + 'px';
  const g = cv.getContext('2d'); g.setTransform(dpr, 0, 0, dpr, 0, 0);
  g.fillStyle = '#0B0E2A'; g.fillRect(0, 0, W, H);
  const span = 2 * HS_T, x = (s) => (s / span) * W;
  for (let c = 0; c < 2; c++) {
    g.fillStyle = 'rgba(77,184,255,.10)'; g.fillRect(x(c * HS_T), 0, x(0.32), H);
    g.fillStyle = '#8790CC'; g.font = '11px ui-monospace, monospace';
    g.fillText('sístole', x(c * HS_T + 0.08), 13); g.fillText('diástole', x(c * HS_T + 0.48), 13);
  }
  if (reveal && data) {
    const per = (span * HS_SR) / W;
    g.fillStyle = '#7CFFB2';
    for (let px = 0; px < W; px++) {
      let mx = 0; for (let i = Math.floor(px * per); i < (px + 1) * per; i++) mx = Math.max(mx, Math.abs(data[i] || 0));
      const h = Math.min(H / 2 - 18, mx * (H / 2 - 18) * 1.25); g.fillRect(px, H / 2 + 6 - h, 1, Math.max(1, 2 * h));
    }
    g.fillStyle = '#F2C14E'; g.font = '11px ui-monospace, monospace';
    for (let c = 0; c < 2; c++) { g.fillText('S1', x(c * HS_T) + 2, H - 4); g.fillText('S2', x(c * HS_T + 0.32) + 2, H - 4); }
  } else {
    g.fillStyle = '#C9CEFF'; g.font = '13px ui-sans-serif, system-ui'; g.textAlign = 'center';
    g.fillText('El fonocardiograma aparece al responder', W / 2, H / 2 + 10); g.textAlign = 'left';
  }
  if (HS.el && !HS.el.paused) { const px = x(HS.el.currentTime % span); g.fillStyle = '#FF5470'; g.fillRect(px, 18, 2, H - 24); }
}
// Tórax con los 5 focos; el foco del soplo y su irradiación se marcan al responder (o siempre en modo aprende)
function chestSVG(key, at, show) {
  const e = show ? C.soplos[show] : null, f = e ? FOCOS[e.foco] : null;
  const irr = e && /car[oó]tida/i.test(e.irradia) ? `<path d="M${f[1]} ${f[2] - 8} L${f[1] - 6} 22" class="cirr"/><text x="${f[1] - 54}" y="18" class="ctx" text-anchor="middle">carótidas</text>`
    : e && /axila/i.test(e.irradia) ? `<path d="M${f[1] + 8} ${f[2]} L186 114" class="cirr"/><text x="182" y="104" class="ctx" text-anchor="middle">axila</text>` : '';
  return `<svg class="chest" viewBox="0 0 200 180" role="group" aria-label="Focos de auscultación">
    <path d="M30 170 L38 40 Q60 20 100 24 Q140 20 162 40 L170 170 Z" class="ctor"/><path d="M58 34 Q80 40 96 38 M104 38 Q120 40 142 34" class="ccla"/>
    <rect x="94" y="40" width="12" height="96" rx="4" class="cste"/>
    ${[60, 84, 108, 132].map((y) => `<path d="M44 ${y} Q70 ${y + 8} 92 ${y} M108 ${y} Q130 ${y + 8} 156 ${y}" class="crib"/>`).join('')}
    ${irr}
    ${Object.entries(FOCOS).map(([k, [l, x, y]]) => `<g class="cfoco${k === at ? ' on' : ''}${e && k === e.foco ? ' src' : ''}" data-act="hsat" data-k="${key}" data-f="${k}" role="button" aria-label="Foco ${l}"><circle cx="${x}" cy="${y}" r="10"/><text x="${x + FLAB[k][0]}" y="${y + FLAB[k][1]}" class="ctx" text-anchor="${FLAB[k][2]}">${l}</text></g>`).join('')}
  </svg>`;
}
const HL = {};
function mountSoplos(host, ids, key) {
  if (ids.length < 2) return;
  const g = HL[key] = HL[key] || { mode: 'aprende', hits: 0, n: 0, sel: ids[0] };
  g.ids = ids;
  ACT.hsmode = (b) => { const g = HL[b.dataset.k]; g.mode = b.dataset.m; hsStop(); hsNew(b.dataset.k); hsRender(b.dataset.k); };
  ACT.hssel = (b) => { const g = HL[b.dataset.k]; g.sel = b.dataset.id; g.at = C.soplos[g.sel].foco; g.man = 'basal'; hsStop(); hsRender(b.dataset.k); };
  ACT.hsplay = (b) => {
    const g = HL[b.dataset.k], id = g.mode === 'aprende' ? g.sel : g.cur;
    if (HS.el && !HS.el.paused && HS.id === id) hsStop(); else { hsPlay(id, g.man, g.at, false); hsLoop(b.dataset.k); }
    hsButtons(b.dataset.k);
  };
  ACT.hsman = (b) => { const g = HL[b.dataset.k]; g.man = b.dataset.m; hsRetune(b.dataset.k); };
  ACT.hsat = (b) => { const g = HL[b.dataset.k]; g.at = b.dataset.f; hsRetune(b.dataset.k); };
  ACT.hspick = (b) => {
    const g = HL[b.dataset.k]; if (g.ans) return;
    g.ans = b.dataset.id; g.n++;
    if (g.ans === g.cur) { g.hits++; wsfx('ok'); gain(8); } else wsfx('bad');
    WS().soplos = Math.max(WS().soplos || 0, g.n >= 8 ? g.hits / g.n : 0);
    hsRender(b.dataset.k);
  };
  ACT.hsnext = (b) => { hsStop(); hsNew(b.dataset.k); hsRender(b.dataset.k); };
  g.sec = document.createElement('section'); g.sec.className = 'panel hslab'; host.appendChild(g.sec);
  hsNew(key); hsRender(key);
}
function hsNew(key) {
  const g = HL[key];
  g.cur = shuffle(g.ids.filter((id) => id !== g.cur))[0]; g.ans = null; g.man = 'basal';
  g.at = g.mode === 'aprende' ? C.soplos[g.sel].foco : C.soplos[g.cur].foco;
  const others = shuffle(Object.keys(C.soplos).filter((id) => id !== g.cur)), near = others.filter((id) => g.ids.includes(id));
  g.opts = shuffle([g.cur, ...[...near, ...others.filter((id) => !near.includes(id))].slice(0, 3)]);
}
function hsRetune(key) { // cambia maniobra o foco sin perder el compás
  const g = HL[key], id = g.mode === 'aprende' ? g.sel : g.cur, on = HS.el && !HS.el.paused && HS.id === id;
  if (on) hsPlay(id, g.man, g.at, true); else HS.data = hsSynth(id, g.man, g.at);
  hsButtons(key);
  if (!on) { const cv = g.sec.querySelector('canvas'); hsDraw(cv, HS.data, g.mode === 'aprende' || !!g.ans); }
}
function hsButtons(key) {
  const g = HL[key], sec = g.sec, id = g.mode === 'aprende' ? g.sel : g.cur, on = HS.el && !HS.el.paused && HS.id === id;
  const pb = sec.querySelector('.hsplay'); if (pb) { pb.textContent = on ? '■ Detener' : '▶ Escuchar'; pb.setAttribute('aria-pressed', on); }
  sec.querySelectorAll('[data-act="hsman"]').forEach((b) => b.classList.toggle('gold-btn', b.dataset.m === g.man));
  const ch = sec.querySelector('.chestbox'); if (ch) ch.innerHTML = chestSVG(key, g.at, g.mode === 'aprende' ? g.sel : g.ans ? g.cur : null);
  const lab = sec.querySelector('.hsat'); if (lab) lab.textContent = `Escuchas en el foco ${FOCOS[g.at][0].toLowerCase()} · ${MANIOBRAS[g.man][0].toLowerCase()}`;
}
function hsLoop(key) {
  const g = HL[key], cv = g.sec.querySelector('canvas');
  if (HS.raf) cancelAnimationFrame(HS.raf);
  const f = () => { if (!cv.isConnected || !HS.el || HS.el.paused) { HS.raf = null; hsDraw(cv, HS.data, g.mode === 'aprende' || !!g.ans); return; } hsDraw(cv, HS.data, g.mode === 'aprende' || !!g.ans); HS.raf = requestAnimationFrame(f); };
  HS.raf = requestAnimationFrame(f);
}
function hsRender(key) {
  const g = HL[key], learn = g.mode === 'aprende', id = learn ? g.sel : g.cur, e = C.soplos[id];
  const modes = [['aprende', 'Escucha y aprende'], ['identifica', 'Identifica']];
  const ctrl = `<div class="row" style="gap:8px;flex-wrap:wrap"><button class="btn gold-btn hsplay" data-act="hsplay" data-k="${key}">▶ Escuchar</button><span class="small muted hsat"></span></div>
    <div class="seg2" role="group" aria-label="Maniobra">${Object.entries(MANIOBRAS).map(([m, [l]]) => `<button class="btn small" data-act="hsman" data-k="${key}" data-m="${m}">${l}</button>`).join('')}</div>`;
  const desc = (x) => `<dl class="hsdl">${[['Dónde', FOCOS[x.foco][0] + (x.irradia ? ' → ' + x.irradia : '')], ['Cuándo', x.momento], ['Cómo suena', x.tono], ['Maniobras', x.maniobras]].filter(([, v]) => v && v !== '—').map(([k, v]) => `<div><dt>${k}</dt><dd>${esc(v)}</dd></div>`).join('')}</dl>`;
  let body;
  if (learn) {
    body = `<div class="egal">${g.ids.map((s) => `<button class="chip${s === g.sel ? ' fill' : ''}" style="--sc:#FF8FB1" data-act="hssel" data-k="${key}" data-id="${s}">${esc(C.soplos[s].name)}</button>`).join('')}</div>
      <p class="aq">${esc(e.name)} <span class="small muted">· ${esc(e.short)}</span></p>${ctrl}
      <div class="hsgrid"><div class="chestbox"></div><canvas class="hscv" aria-label="Fonocardiograma"></canvas></div>${desc(e)}<div class="mexp"><p>${esc(e.why)}</p></div>
      <p class="small muted">Toca otro foco: el soplo baja lejos de donde nace. Prueba las maniobras.</p>`;
  } else {
    body = `<div class="acase"><p>${esc(e.caso)}</p></div>${ctrl}
      <div class="hsgrid"><div class="chestbox"></div><canvas class="hscv" aria-label="Fonocardiograma"></canvas></div>
      <p class="small muted">Empiezas en el foco donde se oye mejor. Muévete entre focos y usa las maniobras si dudas.</p>
      <p class="aq">¿Qué escuchas?</p>
      <div class="aopts">${g.opts.map((s) => `<button class="aopt${g.ans ? (s === g.cur ? ' ok' : s === g.ans ? ' no' : '') : ''}" data-act="hspick" data-k="${key}" data-id="${s}"${g.ans ? ' disabled' : ''}>${esc(C.soplos[s].name)}</button>`).join('')}</div>
      ${g.ans ? `${desc(e)}<div class="mexp"><p>${g.ans === g.cur ? '✓ ' : ''}<b>${esc(e.name)}.</b> ${esc(e.why)}</p></div><div class="actrl"><button class="btn small gold-btn" data-act="hsnext" data-k="${key}">Otro paciente ▶</button></div>` : ''}`;
  }
  g.sec.innerHTML = `<div class="row"><h2 class="grow">Taller de soplos</h2>${g.n ? `<span class="small muted">${g.hits}/${g.n}</span>` : ''}</div>
    <p class="small muted">🎧 Mejor con audífonos: los ruidos del corazón son graves y la bocina del teléfono los apaga.</p>
    <div class="seg2" role="group" aria-label="Modo">${modes.map(([m, l]) => `<button class="btn small${g.mode === m ? ' gold-btn' : ''}" data-act="hsmode" data-k="${key}" data-m="${m}">${l}</button>`).join('')}</div>${body}`;
  HS.data = hsSynth(id, g.man, g.at);
  hsButtons(key);
  const cv = g.sec.querySelector('canvas');
  requestAnimationFrame(() => hsDraw(cv, HS.data, learn || !!g.ans));
  if (HS.el && !HS.el.paused && HS.id === id) hsLoop(key);
}
// ── Frotis en pixel art: un campo de microscopio de 160 × 120 con células dibujadas punto por punto
function smearDraw(cv, id, seed, mark) {
  const W = 160, H = 120, rnd = seeded(seed), hex = (h) => [1, 3, 5].map((i) => parseInt(h.slice(i, i + 2), 16));
  const K = { bg: hex('#F3E7EA'), out: hex('#0B0E2A'), rbc: hex('#E3889A'), edge: hex('#C05C70'), pal: hex('#F5CDD4'), dense: hex('#C9475F'), nuc: hex('#5C3C9E'), nucD: hex('#3F2878'), cyto: hex('#E4D2EE'), blast: hex('#9EB3E6'), auer: hex('#D3184A'), plt: hex('#7A4CB8'), lyc: hex('#A9C3EE'), gold: hex('#F2C14E') };
  cv.width = W; cv.height = H;
  const g = cv.getContext('2d'), img = g.createImageData(W, H), px = img.data;
  const inField = (x, y) => ((x - W / 2) / 78) ** 2 + ((y - H / 2) / 58) ** 2 <= 1;
  const put = (x, y, c) => { x = Math.round(x); y = Math.round(y); if (x < 0 || y < 0 || x >= W || y >= H || !inField(x, y)) return; const i = (y * W + x) * 4; px[i] = c[0]; px[i + 1] = c[1]; px[i + 2] = c[2]; px[i + 3] = 255; };
  for (let y = 0; y < H; y++) for (let x = 0; x < W; x++) { const i = (y * W + x) * 4, c = inField(x, y) ? K.bg : K.out; px[i] = c[0]; px[i + 1] = c[1]; px[i + 2] = c[2]; px[i + 3] = 255; }
  const placed = [], keys = [];
  const spot = (r) => {
    for (let k = 0; k < 80; k++) {
      const x = 8 + rnd() * (W - 16), y = 8 + rnd() * (H - 16);
      if (((x - W / 2) / (78 - r)) ** 2 + ((y - H / 2) / (58 - r)) ** 2 > 1) continue;
      if (placed.every(([a, b, c]) => (a - x) ** 2 + (b - y) ** 2 > (c + r - 1.5) ** 2)) { placed.push([x, y, r]); return [x, y]; }
    }
    return null;
  };
  // Mancha genérica: elipse con borde, palidez, recortes y color por zona
  const blob = (x, y, o) => {
    const rx = o.rx, ry = o.ry || o.rx, R = Math.ceil(Math.max(rx, ry)) + 1, a = o.rot || 0, ca = Math.cos(a), sa = Math.sin(a);
    for (let dy = -R; dy <= R; dy++) for (let dx = -R; dx <= R; dx++) {
      const u = dx * ca + dy * sa, v = -dx * sa + dy * ca, n = Math.sqrt((u / rx) ** 2 + (v / ry) ** 2);
      if (n > 1 || (o.cut && o.cut(u, v))) continue;
      let c = n > 0.8 ? K.edge : o.fill || K.rbc;
      if (o.pal && n < o.pal) c = o.dot && n < o.dot ? K.dense : K.pal;
      if (o.color) c = o.color(n, u, v) || c;
      put(x + dx, y + dy, c);
    }
  };
  const rbc = (o = {}) => { const r = o.r || 5 + rnd() * 0.8, p = spot(o.ry ? Math.max(r, o.ry) : r); if (p) blob(p[0] + 0.5, p[1] + 0.5, { rx: r, ry: o.ry, rot: rnd() * Math.PI, pal: o.pal ?? 0.46, ...o }); return p; };
  const key = (p, r) => { if (p) keys.push([p[0], p[1], r]); };
  const plts = (n) => { for (let k = 0; k < n; k++) { const p = spot(1.5); if (p) { put(p[0], p[1], K.plt); if (rnd() < 0.5) put(p[0] + 1, p[1], K.plt); } } };
  // Neutrófilo: lóbulos separados por puentes finos de cromatina, en arco
  const neut = (lobes) => {
    const R = lobes > 4 ? 10.5 : 8.5, p = spot(R + 0.5); if (!p) return null;
    blob(p[0], p[1], { rx: R, color: () => K.cyto });
    const a0 = rnd() * 6.28, step = (2 * Math.PI * (lobes > 4 ? 0.82 : 0.5)) / lobes, ring = lobes > 4 ? 6 : 4.2, pts = [];
    for (let k = 0; k < lobes; k++) { const t = a0 + (k - (lobes - 1) / 2) * step; pts.push([p[0] + Math.cos(t) * ring, p[1] + Math.sin(t) * ring]); }
    pts.forEach(([x, y], k) => { if (k) { const [px0, py0] = pts[k - 1]; for (let s = 0; s <= 1; s += 0.2) put(px0 + (x - px0) * s, py0 + (y - py0) * s, K.nuc); } });
    pts.forEach(([x, y]) => blob(x, y, { rx: lobes > 4 ? 1.9 : 2.2, color: () => K.nuc }));
    return p;
  };
  const blast = (auer) => {
    const p = spot(10.5); if (!p) return null;
    blob(p[0], p[1], { rx: 10, ry: 9, color: () => K.blast });
    blob(p[0] + 1, p[1], { rx: 7.5, ry: 6.8, color: (n) => (n < 0.25 ? K.cyto : K.nuc) });
    if (auer) { const a = rnd() * 6.28, ox = p[0] + Math.cos(a) * 8.2, oy = p[1] + Math.sin(a) * 7.4, d = a + 1.57; for (let s = -2.5; s <= 2.5; s += 0.5) put(ox + Math.cos(d) * s, oy + Math.sin(d) * s, K.auer); }
    return p;
  };
  const lymph = () => { const p = spot(5.2); if (p) { blob(p[0], p[1], { rx: 5, color: () => K.lyc }); blob(p[0], p[1], { rx: 4.2, color: () => K.nucD }); } return p; };
  const smudge = () => { const p = spot(6.5); if (p) { const j = Array.from({ length: 16 }, () => 0.6 + rnd() * 0.4); blob(p[0], p[1], { rx: 6.5, ry: 5, rot: rnd() * 3, cut: (u, v) => Math.sqrt((u / 6.5) ** 2 + (v / 5) ** 2) > j[Math.floor(((Math.atan2(v, u) + Math.PI) / (2 * Math.PI)) * 16) % 16], color: (n) => (n < 0.6 ? K.nuc : hex('#8D72C4')) }); } return p; };
  const fillRbc = (n, o) => { for (let k = 0; k < n; k++) rbc(o); };
  switch (id) {
    case 'esquisto': {
      for (let k = 0; k < 8; k++) { const t = rnd() * 6.28, ct = Math.cos(t), st = Math.sin(t), tri = rnd() < 0.4; key(rbc({ r: 4.6, pal: 0, cut: (u, v) => u * ct + v * st > 0.6 || (tri && u * Math.cos(t + 2.1) + v * Math.sin(t + 2.1) > 1.2) }), 5); }
      fillRbc(22); plts(2); break;
    }
    case 'esfero': for (let k = 0; k < 11; k++) key(rbc({ r: 3.8, pal: 0, fill: K.dense }), 4); fillRbc(17); plts(6); break;
    case 'diana': for (let k = 0; k < 10; k++) key(rbc({ r: 5.8, pal: 0.74, dot: 0.36 }), 6); fillRbc(18, { r: 4.6 }); plts(6); break;
    case 'ferro': for (let k = 0; k < 3; k++) key(rbc({ r: 7.5, ry: 2.4, pal: 0 }), 7); for (let k = 0; k < 30; k++) rbc({ r: 3.6 + rnd() * 1.8, pal: 0.64 }); plts(9); break;
    case 'lagrima': {
      for (let k = 0; k < 8; k++) { const p = rbc({ r: 4.6 }); if (p) { const t = rnd() * 6.28; for (let s = 4; s < 9; s++) for (let w = -Math.max(0, (8 - s) / 3); w <= Math.max(0, (8 - s) / 3); w += 0.5) put(p[0] + Math.cos(t) * s - Math.sin(t) * w, p[1] + Math.sin(t) * s + Math.cos(t) * w, s > 6 ? K.edge : K.rbc); key(p, 7); } }
      fillRbc(18); plts(5); break;
    }
    case 'hiperseg': key(neut(6), 10); for (let k = 0; k < 20; k++) rbc({ r: 7, ry: 5.6, pal: 0.2 }); plts(4); break;
    case 'auer': for (let k = 0; k < 4; k++) key(blast(true), 11); fillRbc(12); plts(2); break;
    case 'gump': for (let k = 0; k < 4; k++) key(smudge(), 8); for (let k = 0; k < 8; k++) lymph(); fillRbc(12); plts(4); break;
    case 'falci': for (let k = 0; k < 8; k++) { const t = rnd() * 6.28, ox = Math.cos(t) * 3.8, oy = Math.sin(t) * 3.8; key(rbc({ r: 6, ry: 3.2, pal: 0, fill: K.dense, cut: (u, v) => (u - ox) ** 2 + (v - oy) ** 2 < 14 }), 7); } fillRbc(18); plts(6); break;
    case 'mordida': for (let k = 0; k < 6; k++) { const t = rnd() * 6.28, ox = Math.cos(t) * 4.8, oy = Math.sin(t) * 4.8; key(rbc({ r: 5, cut: (u, v) => (u - ox) ** 2 + (v - oy) ** 2 < 6.5 }), 6); } fillRbc(20); plts(6); break;
    default: neut(3); fillRbc(30); plts(8);
  }
  if (mark) for (const [x, y, r] of keys) for (let t = 0; t < 6.28; t += 0.08) put(x + Math.cos(t) * (r + 2), y + Math.sin(t) * (r + 2), K.gold);
  g.putImageData(img, 0, 0);
}

// ── Simuladores: mueves un valor y ves el efecto
const SIMS = {
  potasio: { title: 'Potasio y ECG', topics: ['erc', 'lra', 'dialisis'], mount: simPotasio },
  tfg: { title: 'ERC: la TFG y lo que cambia', topics: ['erc', 'dialisis'], mount: simTfg },
  hierro: { title: 'Ferritina y saturación', topics: ['anemias'], mount: simHierro },
  aortica: { title: 'Estenosis aórtica: velocidad y gravedad', topics: ['aortica'], mount: simAortica }
};
function mountSim(host, sid) {
  const sec = document.createElement('section');
  sec.className = 'panel sim'; host.appendChild(sec);
  SIMS[sid].mount(sec);
}
function simPotasio(sec) {
  let k = 4.2, P = null;
  sec.innerHTML = `<h2>Simulador · Potasio y ECG</h2><label class="sl"><span>Potasio sérico</span><b id="kv"></b><input type="range" min="1.8" max="9" step="0.1" value="${k}" data-inp="simk" aria-label="Potasio sérico"></label>
    <canvas class="ecgcv" aria-label="Tiras de DII y V3"></canvas><div class="simout" aria-live="polite"></div>`;
  const cv = sec.querySelector('canvas'), out = sec.querySelector('.simout');
  const draw = () => {
    P = ecgSpec('k', k); ecgDraw(cv, P, ['II', 'V3']);
    sec.querySelector('#kv').textContent = `${k.toFixed(1)} mEq/L`;
    const st = k < 2.5 ? ['Hipokalemia grave', 'bad', 'T casi planas, ondas U grandes, QT aparente largo. Riesgo de arritmias y debilidad: KCl intravenoso (máximo 10–20 mEq/h por vía periférica) y corrige el magnesio.']
      : k < 3.5 ? ['Hipokalemia', 'warn', 'T más bajas y aparece la onda U. KCl oral; busca la causa (diuréticos, vómito, diarrea).']
      : k <= 5.5 ? ['Normal', 'ok', 'P, QRS y T normales.']
      : k < 6.5 ? ['Hiperkalemia leve a moderada', 'warn', 'Primer signo: T picudas de base estrecha. Suspende lo que sube el K (IECA/ARA II, espironolactona, AINE); quelante y diurético de asa si orina.']
      : k < 8 ? ['Hiperkalemia grave', 'bad', 'P aplanada, PR largo y QRS que se ensancha. Gluconato de calcio 10% IV ya (estabiliza la membrana), insulina regular 10 U con glucosa, salbutamol nebulizado; después elimina K (diálisis si no responde).']
        : ['Hiperkalemia crítica', 'bad', 'Sin P y con QRS muy ancho que se funde con la T (onda sinusoidal): paro inminente. Calcio IV repetido y diálisis urgente.'];
    out.innerHTML = `<p class="chip" style="--sc:var(--${st[1]})">${st[0]}</p><p>${st[2]}</p>`;
  };
  CHG.simk = (el) => { k = +el.value; draw(); };
  requestAnimationFrame(draw);
}
function simTfg(sec) {
  let g = 50, a = 1;
  sec.innerHTML = `<h2>Simulador · ERC: la TFG y lo que cambia</h2><label class="sl"><span>TFG</span><b id="gv"></b><input type="range" min="5" max="120" step="1" value="${g}" data-inp="simg" aria-label="Tasa de filtración glomerular"></label>
    <div class="seg2" role="group" aria-label="Albuminuria">${['A1 <30', 'A2 30–300', 'A3 >300'].map((t, i) => `<button class="btn small${i + 1 === a ? ' gold-btn' : ''}" data-act="sima" data-i="${i + 1}">${t}</button>`).join('')}</div>
    <p class="small muted">Albuminuria en mg/g (cociente albúmina/creatinina).</p><div class="simout" aria-live="polite"></div>`;
  const out = sec.querySelector('.simout');
  const draw = () => {
    sec.querySelector('#gv').textContent = `${g} mL/min/1.73 m²`;
    sec.querySelectorAll('[data-act=sima]').forEach((b) => b.classList.toggle('gold-btn', +b.dataset.i === a));
    const gi = g >= 90 ? 0 : g >= 60 ? 1 : g >= 45 ? 2 : g >= 30 ? 3 : g >= 15 ? 4 : 5;
    // Mapa de calor KDIGO (filas G1 a G5, columnas A1 a A3): verde, amarillo, naranja, rojo
    const heat = [[0, 1, 2], [0, 1, 2], [1, 2, 3], [2, 3, 3], [3, 3, 3], [3, 3, 3]][gi][a - 1];
    const risk = [['Riesgo bajo', 'var(--ok)'], ['Riesgo moderado', 'var(--warn)'], ['Riesgo alto', '#FF9B3D'], ['Riesgo muy alto', 'var(--bad)']][heat];
    const li = [];
    li.push(g >= 45 ? 'Metformina: dosis completa.' : g >= 30 ? 'Metformina: no la inicies; si ya la toma, reduce la dosis.' : 'Metformina: suspéndela.');
    li.push(g >= 20 ? 'iSGLT2: se pueden iniciar (TFG de 20 o más) y protegen el riñón.' : 'iSGLT2: no se inician con TFG menor de 20 (si ya los toma, puede seguir).');
    if (a >= 2) li.push('Albuminuria: IECA o ARA II a dosis máxima tolerada.');
    if (g < 60) li.push('Busca anemia (Hb) y mide calcio, fósforo, PTH y vitamina D.');
    if (g < 60) li.push('Evita AINE; ajusta dosis de fármacos de eliminación renal.');
    if (g < 45) li.push('Vigila el potasio, sobre todo con IECA, ARA II o espironolactona.');
    if (g < 30) li.push('Acidosis metabólica frecuente: bicarbonato oral si el HCO3 está menor de 18.');
    if (g < 30 || a === 3) li.push('Envía a nefrología (TFG menor de 30 o albuminuria A3).');
    if (g < 20) li.push('Prepara la terapia de reemplazo: educación, acceso vascular o catéter de diálisis peritoneal, evaluación para trasplante.');
    if (g < 15) li.push('Diálisis cuando hay síntomas urémicos, sobrecarga, potasio o acidosis refractarios: se decide por la clínica, no solo por la cifra.');
    out.innerHTML = `<p><span class="chip">${['G1', 'G2', 'G3a', 'G3b', 'G4', 'G5'][gi]}A${a}</span> <span class="chip" style="--sc:${risk[1]}">${risk[0]}</span></p><ul class="simlist">${li.map((x) => `<li>${esc(x)}</li>`).join('')}</ul>`;
  };
  CHG.simg = (el) => { g = +el.value; draw(); };
  ACT.sima = (b) => { a = +b.dataset.i; draw(); };
  draw();
}
function simHierro(sec) {
  let fe = 60, ts = 15, inf = false;
  sec.innerHTML = `<h2>Simulador · Ferritina y saturación</h2>
    <label class="sl"><span>Ferritina</span><b id="fv"></b><input type="range" min="3" max="800" step="1" value="${fe}" data-inp="simfe" aria-label="Ferritina"></label>
    <label class="sl"><span>Saturación de transferrina</span><b id="tv"></b><input type="range" min="3" max="80" step="1" value="${ts}" data-inp="simts" aria-label="Saturación de transferrina"></label>
    <div class="seg2" role="group" aria-label="Inflamación"><button class="btn small" data-act="siminf"></button></div><div class="simout" aria-live="polite"></div>`;
  const out = sec.querySelector('.simout');
  const draw = () => {
    sec.querySelector('#fv').textContent = `${fe} ng/mL`; sec.querySelector('#tv').textContent = `${ts}%`;
    const b = sec.querySelector('[data-act=siminf]'); b.textContent = inf ? 'Con inflamación (PCR alta) ✓' : 'Sin inflamación'; b.classList.toggle('gold-btn', inf);
    const r = fe < 30 ? ['Ferropenia', 'bad', 'Ferritina menor de 30: los depósitos están vacíos, haya o no inflamación. Hierro y busca dónde se pierde.']
      : ts > 45 && fe > 300 ? ['Sobrecarga de hierro', 'warn', 'Saturación mayor de 45% con ferritina alta: descarta hemocromatosis (gen HFE).']
      : inf && fe <= 100 && ts < 20 ? ['Probable mixta: ferropenia más inflamación', 'warn', 'Con inflamación, una ferritina de hasta ~100 todavía puede ser ferropenia: la inflamación la sube.']
      : inf && ts < 20 ? ['Anemia de la inflamación', 'warn', 'Ferritina alta con saturación baja: la hepcidina atrapa el hierro. Trata la causa; el hierro oral no se absorbe.']
      : ts < 20 ? ['No concluyente', 'warn', 'Saturación baja con ferritina mayor de 30 y sin inflamación aparente: pide PCR; con ferritina de 30 a 45 aún puede ser ferropenia temprana (la AGA usa menos de 45).']
        : ['Hierro suficiente', 'ok', 'Depósitos y transporte normales: la anemia, si la hay, es por otra causa.'];
    out.innerHTML = `<p class="chip" style="--sc:var(--${r[1]})">${r[0]}</p><p>${esc(r[2])}</p>
      <div class="gauges"><div><span>Depósitos (ferritina)</span><i style="--p:${Math.min(1, fe / 400)}"></i></div><div><span>Transporte (saturación)</span><i style="--p:${Math.min(1, ts / 60)}"></i></div></div>`;
  };
  CHG.simfe = (el) => { fe = +el.value; draw(); };
  CHG.simts = (el) => { ts = +el.value; draw(); };
  ACT.siminf = () => { inf = !inf; draw(); };
  draw();
}
function simAortica(sec) {
  let v = 3.2, last = null;
  sec.innerHTML = `<h2>Simulador · Estenosis aórtica</h2><label class="sl"><span>Velocidad máxima del chorro</span><b id="vv"></b><input type="range" min="1.2" max="5.5" step="0.1" value="${v}" data-inp="simv" aria-label="Velocidad máxima"></label>
    <div class="stage simstage"><canvas width="160" height="80" aria-hidden="true"></canvas></div><div class="simout" aria-live="polite"></div>`;
  const cv = sec.querySelector('canvas'), g = cv.getContext('2d'), out = sec.querySelector('.simout');
  const rnd = seeded(7), parts = Array.from({ length: 40 }, () => [rnd() * 160, 20 + rnd() * 40]);
  const frame = (dt) => {
    const open = Math.max(4, 34 - (v - 1.2) * 7), sp = 18 + v * 22;
    g.fillStyle = '#0B0E2A'; g.fillRect(0, 0, 160, 80);
    g.fillStyle = '#7A2E44'; g.fillRect(0, 10, 160, 6); g.fillRect(0, 64, 160, 6);
    g.fillStyle = '#F2C14E'; g.fillRect(76, 16, 6, 24 - open / 2); g.fillRect(76, 40 + open / 2, 6, 24 - open / 2);
    for (const p of parts) {
      const nearV = Math.abs(p[0] - 79) < 30, s = nearV ? sp : sp * 0.35;
      p[0] += s * dt; if (p[0] > 160) { p[0] = 0; p[1] = 20 + Math.random() * 40; }
      let y = p[1]; if (p[0] > 60 && p[0] < 100) y = 40 + (p[1] - 40) * (open / 40);
      g.fillStyle = p[0] > 82 ? '#FF8FA3' : '#C9CEFF'; g.fillRect(Math.round(p[0]), Math.round(y), 2, 2);
    }
  };
  const draw = () => {
    const pk = Math.round(4 * v * v), sev = v < 2.6 ? ['Sin estenosis significativa (esclerosis)', 'ok'] : v < 3 ? ['Estenosis leve', 'ok'] : v < 4 ? ['Estenosis moderada', 'warn'] : v < 5 ? ['Estenosis grave', 'bad'] : ['Estenosis muy grave', 'bad'];
    sec.querySelector('#vv').textContent = `${v.toFixed(1)} m/s`;
    out.innerHTML = `<p><span class="chip" style="--sc:var(--${sev[1]})">${sev[0]}</span></p><p>Gradiente máximo ≈ 4 × V² = <b>${pk} mmHg</b>. Grave: velocidad de 4 m/s o más, gradiente medio de 40 mmHg o más y área menor de 1 cm².</p>
      <p>${v >= 4 ? 'Si hay síntomas (angina, síncope, disnea) o la FEVI baja de 50%: reemplazo valvular, TAVI en mayores o de alto riesgo quirúrgico y cirugía en jóvenes de bajo riesgo. Sin síntomas: vigilancia estrecha o prueba de esfuerzo para desenmascararlos.' : 'Vigilancia con ecocardiograma periódico; el tratamiento médico no frena la estenosis.'}</p>`;
    frame(0);
  };
  CHG.simv = (el) => { v = +el.value; draw(); };
  draw();
  if (!reduce) loop((ts) => { if (last == null) last = ts; const dt = Math.min((ts - last) / 1000, 0.1); last = ts; frame(dt); });
}

// ── Pestaña Taller del tema y vista con todo (Más → Taller)
const algosOf = (tid) => Object.keys(C.algos || {}).filter((id) => C.algos[id].topics.includes(tid));
const ecgOf = (tid) => Object.keys(C.ecg || {}).filter((id) => C.ecg[id].topics.includes(tid));
const smearOf = (tid) => Object.keys(C.frotis || {}).filter((id) => C.frotis[id].topics.includes(tid));
const simsOf = (tid) => Object.keys(SIMS).filter((id) => SIMS[id].topics.includes(tid));
const soplosOf = (tid) => Object.keys(C.soplos || {}).filter((id) => C.soplos[id].topics.includes(tid));
const pathsOf = (tid) => Object.keys(C.paths || {}).filter((id) => C.paths[id].topics.includes(tid));
const hasTaller = (tid) => !!(algosOf(tid).length || ecgOf(tid).length >= 2 || smearOf(tid).length >= 2 || soplosOf(tid).length >= 2 || simsOf(tid).length || pathsOf(tid).length);
TOPIC_TABS.taller = (el, t) => {
  el.innerHTML = '<p class="muted">Practica con las manos: decide en algoritmos con casos, lee ECG, escucha soplos, mueve valores y ubica fármacos. Cuenta para tu XP.</p>';
  algosOf(t.id).forEach((id) => mountAlgo(el, id));
  mountEcgLab(el, ecgOf(t.id), t.id);
  mountSoplos(el, soplosOf(t.id), t.id);
  mountReader(el, 'frotis', smearOf(t.id), t.id);
  simsOf(t.id).forEach((id) => mountSim(el, id));
  mountPaths(el, t.id);
};
VIEWS.taller = (m) => {
  const a = route.a;
  if (a) {
    m.innerHTML = `<button class="btn small ghost" data-go="taller" style="align-self:flex-start">← Taller</button><div id="tool" class="stack"></div>`;
    const el = $('#tool'), [kind, id] = a.split(':');
    if (kind === 'algo' && C.algos[id]) mountAlgo(el, id);
    else if (kind === 'ecg') mountEcgLab(el, Object.keys(C.ecg), 'all');
    else if (kind === 'soplos') mountSoplos(el, Object.keys(C.soplos), 'all');
    else if (kind === 'frotis') mountReader(el, 'frotis', Object.keys(C.frotis), 'all');
    else if (kind === 'sim' && SIMS[id]) mountSim(el, id);
    else if (kind === 'path' && C.paths[id]) { const tid = C.paths[id].topics[0]; mountPaths(el, tid, id); }
    return;
  }
  const best = (k) => (WS()[k] != null ? ` · mejor ${pct(WS()[k])}%` : '');
  const tile = (go, t, d) => `<button class="tile" data-go="taller" data-a="${go}"><span class="t">${esc(t)}</span><span class="d">${esc(d)}</span></button>`;
  m.innerHTML = `<button class="btn small ghost" data-go="mas" style="align-self:flex-start">← Más</button><h1>Taller</h1>
  <p class="muted">Lo que más se parece a las preguntas del parcial: decidir el siguiente paso, leer un estudio y ubicar un fármaco.</p>
  <h2>Algoritmos con casos</h2><div class="tools">${Object.entries(C.algos).map(([id, A]) => tile('algo:' + id, A.title, `${A.cases.length} casos${best('algo:' + id)}`)).join('')}</div>
  <h2>Lee y escucha</h2><div class="tools">${tile('ecg:all', 'Taller de electros', `${Object.keys(C.ecg).length} patrones · lectura guiada${best('ecglab')}`)}${tile('soplos:all', 'Taller de soplos', `${Object.keys(C.soplos).length} ruidos y soplos para escuchar${best('soplos')}`)}${tile('frotis:all', 'Lee el frotis', `${Object.keys(C.frotis).length} hallazgos al azar`)}${tile('algo:gaso', 'Gasometría paso a paso', `${C.algos.gaso.cases.length} casos`)}</div>
  <h2>Simuladores</h2><div class="tools">${Object.entries(SIMS).map(([id, s]) => tile('sim:' + id, s.title, 'Mueve el valor y mira qué cambia')).join('')}</div>
  <h2>¿Dónde actúa?</h2><div class="tools">${Object.entries(C.paths).map(([id, p]) => tile('path:' + id, p.title, `${p.drugs.length} fármacos`)).join('')}</div>`;
};

// ═══════════ Videos: escenas en pixel art con narración, subtítulos, capítulos y pausas con pregunta
let VS = null, VAUTO = false, VQUEUE = [];
// Clips “en 1 minuto” (motion graphics con voz y lo-fi, tools/motion): un MP4 por tema
const MOTION = C.motion || {};
function clipBox(box, tid) {
  const m = MOTION[tid]; if (!m || !box) return;
  box.hidden = false;
  box.innerHTML = `<video class="mvid" src="${esc(m.url)}" controls playsinline preload="auto" aria-label="${esc(m.title)}"></video>`;
  const v = box.querySelector('video');
  v.addEventListener('ended', () => { const st = S.vid[tid] || (S.vid[tid] = {}); if (!st.clip) { st.clip = today(); gain(10, 'Resumen en 1 minuto'); } else save(); }, { once: true });
  try { const pr = v.play(); if (pr && pr.catch) pr.catch(() => {}); } catch (e) { /* se reproduce con el botón */ }
  box.scrollIntoView({ block: 'nearest', behavior: reduce ? 'auto' : 'smooth' });
}
const hasVideo = (tid) => !!(C.lessons[tid] && C.lessons[tid].video);
// Ideas clave que se ven en pantalla en un grupo de escenas (cifras, listas, algoritmos, mnemotecnias, comparadores)
function vKeys(scs) {
  const out = [];
  for (const { v } of scs) {
    let t = '';
    if (v.k === 'big') t = `${v.h ? v.h + ': ' : ''}${v.t}${v.u ? ' ' + v.u : ''}`;
    else if (v.k === 'list' || v.k === 'flow' || v.k === 'mnemo') t = v.t;
    else if (v.k === 'vs') { const c = vCmp(v); t = `${c.a} × ${c.b}`; }
    t = t.replace(/\s*[·:]\s*$/, '').trim();
    if (t && t.length <= 72 && !out.includes(t)) out.push(t);
  }
  return out.slice(0, 4);
}
const sayList = (items) => items.map((x) => speakable(x.replace(/ × /g, ' contra ')).replace(/[.\s]+$/, '')).join('. ') + '.';
const vFlat = (tid) => {
  const out = [], chs = C.lessons[tid].video;
  chs.forEach((ch, ci) => {
    ch.sc.forEach((sc, si) => out.push({ ci, si, sc, ch: ch.ch }));
    const it = vKeys(ch.sc);
    if (ci < chs.length - 1 && it.length >= 2) out.push({ ci, si: ch.sc.length, ch: ch.ch, auto: 1, sc: { v: { k: 'recap', t: 'Repaso relámpago', items: it }, say: 'Repaso relámpago. ' + sayList(it) } });
  });
  const all = chs.flatMap((c) => c.sc), pearl = all.filter((x) => x.v.k === 'tip' && x.v.kind === 'pearl').pop(), mn = all.find((x) => x.v.k === 'mnemo');
  const f3 = [pearl && pearl.v.t.length <= 150 ? pearl.v.t : '', mn ? mn.v.t : '', ...vKeys(all.filter((x) => x.v.k === 'big'))].filter(Boolean);
  for (const x of vKeys(all)) if (f3.length < 3 && !f3.includes(x)) f3.push(x);
  if (f3.length >= 2) out.push({ ci: chs.length - 1, si: 999, ch: 'Para recordar', auto: 1, sc: { v: { k: 'recap', t: '3 cosas para recordar', items: f3.slice(0, 3), fin: 1 }, say: 'Antes de irte, tres cosas para recordar. ' + sayList(f3.slice(0, 3)) } });
  return out;
};
const sceneSecs = (sc) => estSecs(sc.say) + 0.7 + (sc.v.k === 'quiz' ? 6 + estSecs(sc.exp || '') : 0);
// Con grabación, la duración real de la escena; si falta alguna frase, la estimación por palabras
function recSceneSecs(tid, sc) {
  if (!VOICE[tid]) return 0;
  let t = 0;
  for (const x of [...sentences(sc.say), ...(sc.exp ? sentences(sc.exp) : [])]) { const g = recSeg(tid, x); if (!g) return 0; t += g[1] - g[0]; }
  return t + 0.7 + (sc.v.k === 'quiz' ? 6 : 0);
}
const videoSecs = (tid) => (hasVideo(tid) ? vFlat(tid).reduce((a, x) => a + (recSceneSecs(tid, x.sc) || sceneSecs(x.sc)), 0) : 0);
const vMin = (tid) => Math.max(1, Math.round(videoSecs(tid) / 60));
const mmss = (s) => `${Math.floor(s / 60)}:${pad(Math.floor(s % 60))}`;
function stopVideo() { hush(); clearLater(); musicStop(); if (CINE) setCine(CINE, false); if (VS) VS.dead = true; VS = null; }
document.addEventListener('visibilitychange', () => { if (document.hidden && VS && VS.playing) vPause(); });

function vCmp(v) {
  if (!v.cmp) return v;
  const c = C.compares[v.cmp], rows = v.rows ? v.rows.map((i) => c.rows[i]).filter(Boolean) : c.rows.slice(0, 5);
  return { a: c.a, b: c.b, rows };
}
function vSlideHTML(x) {
  const v = x.sc.v, t = TOP[VS.tid];
  switch (v.k) {
    case 'title': return `<div class="vs-title">${subjIcon(t.subj, 4)}<span class="eyebrow">${esc(v.s || SUBJ[t.subj].name)}</span><span class="t">${esc(v.t)}</span></div>`;
    case 'list': return `<div class="vs-list"><span class="h">${esc(v.t)}</span><ul>${v.items.map((it) => `<li data-r>${esc(it)}</li>`).join('')}</ul></div>`;
    case 'big': return `<div class="vs-big">${v.h ? `<span class="h">${esc(v.h)}</span>` : ''}<span class="n">${esc(v.t)}</span>${v.u ? `<span class="u">${esc(v.u)}</span>` : ''}${v.s ? `<span class="s">${esc(v.s)}</span>` : ''}</div>`;
    case 'vs': { const c = vCmp(v); return `<div class="vs-cmp"><div class="hd"><span class="a">${esc(c.a)}</span><span class="x">×</span><span class="b">${esc(c.b)}</span></div>${c.rows.map(([k, a, b]) => `<div class="r" data-r><span class="k">${esc(k)}</span><span class="va">${esc(a)}</span><span class="vb2">${esc(b)}</span></div>`).join('')}</div>`; }
    case 'flow': return `<div class="vs-flow"><span class="h">${esc(v.t)}</span><ol>${v.steps.map((s) => `<li data-r>${esc(s)}</li>`).join('')}</ol></div>`;
    case 'anim': { const s = C.anims[v.id].steps[v.step], m = /<b>(.*?)<\/b>/.exec(s.cap); return `<div class="vs-anim">${esc(v.cap || (m ? m[1].replace(/\.$/, '') : C.anims[v.id].title))}</div>`; }
    case 'case': { const p = v.p || { name: 'Paciente', age: '', sex: 'H', skin: '#D9A07A', hair: '#2A1A12', gown: '#7FC8A9' }; return `<div class="vs-case"><div class="pt">${patientSpr(p, 5)}<span>${esc(p.name)}${p.age ? `, ${p.age} años` : ''}</span></div><div class="tx"><span class="h">${esc(v.t || 'Caso clínico')}</span><p>${esc(v.text)}</p>${v.vit ? `<div class="vit">${Object.entries(v.vit).map(([k, val]) => `<span><b>${esc(k)}</b> ${esc(val)}</span>`).join('')}</div>` : ''}</div></div>`; }
    case 'quiz': return `<div class="vs-quiz"><span class="h">Pausa · ¿qué harías?</span><p class="q">${esc(v.q)}</p><div class="vopts">${v.opts.map((o, k) => `<button class="vopt" data-act="vpick" data-k="${k}">${LET[k]}. ${esc(o)}</button>`).join('')}</div><div class="vcount"><i></i></div></div>`;
    case 'mnemo': return `<div class="vs-box box mnemo gold">${GEMS}<span class="lab">Mnemotecnia</span><span class="big">${esc(v.t)}</span><p>${esc(v.d)}</p></div>`;
    case 'recap': return `<div class="vs-recap${v.fin ? ' fin' : ''}">${GEMS}<span class="h">${v.fin ? '★ ' : '⚡ '}${esc(v.t)}</span><ol>${v.items.map((it) => `<li data-r>${esc(it)}</li>`).join('')}</ol></div>`;
    case 'tip': return `<div class="vs-box box ${v.kind}"><span class="lab">${v.kind === 'pearl' ? 'Perla de examen' : 'Trampa típica'}</span><p>${esc(v.t)}</p></div>`;
    default: return '';
  }
}
function vDraw(t) {
  if (!VS) return;
  const v = VS.flat[VS.i].sc.v, g = VS.g;
  if (v.k === 'anim') { SCENES[v.id][v.step](g, t); g.r(0, 120, 160, 40, COL.bg); g.r(0, 120, 160, 1, COL.frame); return; }
  g.clear(COL.bg);
  const col = SUBJ[TOP[VS.tid].subj].color;
  for (let i = 0; i < 28; i++) { const x = (rnd(i, 81) * 160 + t * (2 + rnd(i, 82) * 5)) % 160, y = rnd(i, 83) * 160; g.p(x, y, i % 6 ? COL.frame : col); }
  for (let y = 2; y < 160; y += 6) g.r(0, y, 160, 1, '#0E1336');
}
const KEYW = /(\b\d[\d.,]*|\b(?:nunca|siempre|contraindicad[oa]s?|de elección|primera línea|urgencia|urgente|inmediat[oa]|trampa|perla|clave|meta|nada de)\b)/gi;
// Subtítulos en fragmentos cortos (≤9 palabras) repartidos a lo largo de la frase
// Conceptos en pantalla: la voz va de fondo y en la franja del video aparecen, con calma, los términos
// centrales de cada frase (los que también se ven en la escena tienen prioridad), sin texto palabra por palabra
const norm = (w) => w.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[^a-z0-9ñ]/g, '');
const STOPW = new Set('entonces también ejemplo cuando porque después primero segundo tercero mientras pregunta recuerda importante diferencia significa necesitas puedes tienes debes cualquier solamente todavía bienvenido video capítulo examen parcial siguiente anterior aunque siempre nunca alguien ningún ninguna demasiado mucho muchos muchas pocos través dentro afuera además ahora antes luego hacia desde hasta sobre entre contra según durante quieres quiere sirve sirven hacer hace hacen tener tiene tienen estar están puede pueden debe deben cuál cuáles cómo dónde donde mismo misma mismos mismas otra otras otros mejor peor menor mayor nuestro nuestra vamos veamos pausa respuesta correcta incorrecta opción opciones número números paciente pacientes repaso relámpago cosas recordar confirma confirmas descarta descartas clasifica sigue mira dice haces toma tomas tolera según casa cada solo sola activa elevada elevado pistas pista medir bien bloqueas esperes mediciones ambos ambas sentado espalda normal hora horas días meses semanas años dieta tratar causas causa sugiere responde compensan enfermedad veinticuatro cuarenta ochenta noventa cien piensa piensas pide pides busca buscas clave regla truco forma manera parte grupo tipo tipos caso casos fuera estilo todos menos contacto pones indicas necesita evita joven cifra apoyada motivo planea ajusta continua vigila esperado controlada'.split(' ').map(norm));
function sceneText(v) {
  const c = v.k === 'vs' ? vCmp(v) : null;
  return [v.t, v.h, v.s, v.u, v.q, v.d, v.text, ...(v.items || []), ...(v.steps || []), ...(v.opts || []), ...(c ? [c.a, c.b, ...c.rows.flat()] : [])].filter(Boolean).join(' ');
}
function keyTerms(sent, v) {
  const onScreen = new Set(sceneText(v).split(/[\s,;:()/·–-]+/).map(norm).filter((w) => w.length >= 4));
  const words = sent.split(/\s+/), out = [];
  words.forEach((raw, i) => {
    const w = raw.replace(/^[¿¡"“(]+|[.,;:?!"”)]+$/g, ''), n = norm(w);
    if (n.length < 3 || STOPW.has(n) || /^\d+$/.test(n) || out.some((o) => o.n === n)) return;
    const acr = /^[A-ZÁÉÍÓÚÑ0-9]{2,}[A-Za-z0-9]*$/.test(w) && /[A-Z]/.test(w);
    const proper = i > 0 && /^[A-ZÁÉÍÓÚÑ][a-záéíóúñ]{3,}$/.test(w);
    // Verbos (infinitivos, gerundios, enclíticos) casi nunca son el concepto central
    if (!acr && !proper && n !== 'cancer' && /(ar|er|ir|ando|iendo|[aei]rl[ao]s?|amos|emos|imos|aste|iste)$/.test(n)) return;
    const med = /(itis|emia|osis|patia|oma|ina|ismo|asa|grafia|scopia|cito|citos|logia|tropo|lisis|rragia|algia|uria|plasia|terapia)$/.test(n);
    let sc = (onScreen.has(n) ? 3 : 0) + (acr ? 2.5 : 0) + (proper ? 2 : 0) + (med ? 1.5 : 0) + Math.max(0, n.length - 7) * 0.45;
    if (!acr && !proper && !med && n.length < 7 && !onScreen.has(n)) sc = 0;
    if (!acr && n.length < 5) sc = 0;
    if (sc >= 2) out.push({ w: acr ? w : w.charAt(0).toUpperCase() + w.slice(1), n, sc, i: i / words.length });
  });
  return out.sort((a, b) => b.sc - a.sc).slice(0, 2).sort((a, b) => a.i - b.i);
}
function vConcept(term) {
  const el = $('#vsub');
  if (!el || !VS || !VS.cc) return;
  if (!el.querySelector('.kboard')) el.innerHTML = '<div class="kboard"></div>';
  const bd = el.querySelector('.kboard');
  if ([...bd.children].some((c) => c.dataset.n === term.n)) return;
  bd.querySelectorAll('.kc.new').forEach((c) => c.classList.remove('new'));
  const c = document.createElement('span');
  c.className = 'kc new'; c.dataset.n = term.n; c.textContent = term.w;
  bd.appendChild(c);
  while (bd.children.length > 4) bd.firstElementChild.remove();
}
function vCaption(s, secs) {
  if (!VS) return;
  const v = VS.flat[VS.i].sc.v;
  keyTerms(s, v).forEach((t) => { const at = musicSnap(Math.max(0, t.i * secs * 1000 - 150)); if (at < 60) vConcept(t); else later(() => vConcept(t), at); });
}
// Mensajes del reproductor (quiz, final): una línea tranquila en la franja
function vSub(s) {
  const el = $('#vsub');
  if (!el) return;
  el.innerHTML = VS && VS.cc && s ? `<div class="kmsg">${esc(s)}</div>` : '';
}
function vReveal() {
  const items = [...document.querySelectorAll('#vslide [data-r]')];
  if (!items.length) return;
  const n = items.length, ns = Math.max(1, VS.sents.length);
  const shown = VS.phase !== 'say' ? n : clamp(Math.ceil(((VS.sent + 1) / ns) * n), 1, n);
  if (VS.playing && VS.phase === 'say' && shown > (VS.shown || 0)) vfx('pop', shown - 1);
  VS.shown = shown;
  items.forEach((it, k) => { it.classList.toggle('on', k < shown); it.classList.toggle('cur', k === shown - 1 && VS.phase === 'say'); });
}
function vProgress() {
  if (!VS) return;
  const before = VS.secs.slice(0, VS.i).reduce((a, b) => a + b, 0);
  const frac = VS.phase === 'say' ? (VS.sent / Math.max(1, VS.sents.length)) * 0.85 : 0.9;
  const pos = before + VS.secs[VS.i] * frac;
  const f = $('#vfill'); if (f) f.style.setProperty('--p', Math.min(1, pos / VS.total));
  const tm = $('#vtime'); if (tm) tm.textContent = `${mmss(pos)} / ${mmss(VS.total)}`;
}
function vShow(i) {
  VS.i = clamp(i, 0, VS.flat.length - 1); VS.sent = 0; VS.phase = 'say'; VS.picked = null;
  const x = VS.flat[VS.i], v = x.sc.v;
  VS.sents = sentences(x.sc.say);
  const sl = $('#vslide');
  sl.classList.remove('enter'); void sl.offsetWidth; sl.classList.add('enter');
  sl.innerHTML = vSlideHTML(x);
  $('#vscreen').dataset.k = v.k;
  const st = v.k === 'anim' ? C.anims[v.id].steps[v.step] : null;
  $('#vlabels').innerHTML = st ? (st.labels || []).map(([lx, ly, txt]) => `<span style="left:${(lx / 160) * 100}%;top:${(ly / 160) * 100}%">${esc(txt)}</span>`).join('') : '';
  $('#vchip').textContent = x.ch; VS.shown = 0;
  const card = $('#vccard');
  if (x.si === 0 && card) { card.innerHTML = `<span>Capítulo ${x.ci + 1}</span><b>${esc(x.ch)}</b>`; card.classList.remove('on'); void card.offsetWidth; card.classList.add('on'); }
  if (VS.playing) {
    if (x.si === 0) vfx('chapter'); else vfx('scene');
    const fx = { big: 'big', mnemo: 'mnemo', recap: 'recap' }[v.k] || (v.k === 'tip' ? v.kind : null);
    if (fx) later(() => vfx(fx), 380);
    if (v.k === 'case') [500, 1300, 2100].forEach((ms) => later(() => vfx('beat'), ms));
  }
  document.querySelectorAll('#vchaps button').forEach((b) => b.setAttribute('aria-current', +b.dataset.i === x.ci));
  vSub(VS.started ? '' : 'Toca ▶ para empezar'); vReveal(); vProgress(); vDraw(reduce ? 3 : VS.t);
  S.vid[VS.tid] = { ...(S.vid[VS.tid] || {}), pos: VS.i }; save();
}
function vBtn() {
  const b = $('#vplaybtn'); if (b) { b.textContent = VS.playing ? '⏸' : '▶'; b.setAttribute('aria-label', VS.playing ? 'Pausar' : 'Reproducir'); }
  const big = $('#vbig'); if (big) big.hidden = VS.started;
}
function vPlay() {
  if (!VS) return;
  const first = !VS.started;
  VS.playing = true; VS.started = true; vBtn();
  if (first) vSub('');
  if (first && !$('#vp').classList.contains('cine')) $('#vp').scrollIntoView({ block: 'start', behavior: reduce ? 'auto' : 'smooth' });
  if (VS.sfx) { try { audio(); } catch (e) { /* sin audio */ } }
  if (first && VS.flat[VS.i].si === 0) { vfx('chapter'); const card = $('#vccard'); if (card) { const x = VS.flat[VS.i]; card.innerHTML = `<span>Capítulo ${x.ci + 1}</span><b>${esc(x.ch)}</b>`; card.classList.remove('on'); void card.offsetWidth; card.classList.add('on'); } }
  if (VS.voice) pickVoice();
  musicStart();
  if (VS.phase === 'wait') vQuizWait(); else vStep();
}
function vPause() { if (!VS) return; VS.playing = false; hush(); clearLater(); musicStop(); vBtn(); }
function vStep() {
  if (!VS || !VS.playing) return;
  const x = VS.flat[VS.i];
  if (VS.sent >= VS.sents.length) {
    if (VS.phase === 'say' && x.sc.v.k === 'quiz') { VS.phase = 'wait'; vQuizWait(); return; }
    later(() => vGo(VS.i + 1), musicSnap(650 / VS.speed)); return;
  }
  const s = VS.sents[VS.sent], rv = musicSnap(0);
  if (rv > 40) later(vReveal, rv); else vReveal();
  vProgress();
  const next = () => { if (!VS || !VS.playing) return; VS.sent++; vStep(); };
  let dur = VS.voice ? playRec(VS.tid, s, VS.speed, next) : false;
  if (dur === false) {
    dur = estSecs(s) / VS.speed;
    if (VS.voice && TTS.ok && !TTS.broken) speak(s, VS.speed, next); else later(next, dur * 1000);
  }
  vCaption(s, dur);
}
function vGo(i) {
  if (!VS) return;
  hush(); clearLater();
  if (i >= VS.flat.length) { vEnd(); return; }
  vShow(i);
  if (VS.playing) vStep();
}
function vQuizWait() {
  const box = document.querySelector('#vslide .vcount');
  if (box) { box.style.setProperty('--d', 6 / VS.speed + 's'); box.classList.remove('run'); void box.offsetWidth; box.classList.add('run'); }
  vSub('Elige una opción…');
  const step = 1000 / VS.speed;
  for (let k = 1; k <= 5; k++) later(() => vfx(k >= 3 ? 'tock' : 'tick'), k * step);
  later(() => vQuizReveal(null), 6000 / VS.speed);
}
function vQuizReveal(k) {
  if (!VS || VS.phase === 'exp') return;
  hush(); clearLater();
  const x = VS.flat[VS.i], v = x.sc.v;
  VS.phase = 'exp'; VS.picked = k;
  document.querySelectorAll('#vslide .vopt').forEach((b, j) => { b.disabled = true; if (j === v.a) b.classList.add('ok'); else if (j === k) b.classList.add('bad'); });
  const box = document.querySelector('#vslide .vcount'); if (box) box.classList.remove('run');
  if (k === v.a) {
    VS.combo = (VS.combo || 0) + 1; vfx('ok'); if (VS.combo >= 2) later(() => vfx('combo', VS.combo), 450);
    gain(5); const c = $('#vcombo'); if (c) { c.textContent = VS.combo >= 2 ? `Racha ×${VS.combo} 🔥` : '¡Correcto! +5 XP'; c.classList.remove('on'); void c.offsetWidth; c.classList.add('on'); }
  } else { VS.combo = 0; vfx('bad'); }
  VS.sents = sentences(x.sc.exp); VS.sent = 0;
  vSub(''); if (VS.playing) vStep();
}
function vEnd() {
  const tid = VS.tid, prev = S.vid[tid] || {}, first = !prev.done;
  VS.playing = false; hush(); clearLater(); musicStop(); vBtn();
  S.vid[tid] = { done: prev.done || today(), pos: 0, n: (prev.n || 0) + 1 };
  if (first) gain(40, 'Video completo'); else save();
  vfx('end');
  const f = $('#vfill'); if (f) f.style.setProperty('--p', 1);
  const nx = VQUEUE[0];
  $('#vscreen').dataset.k = 'end'; $('#vlabels').innerHTML = '';
  $('#vslide').innerHTML = `<div class="vs-end"><span class="eyebrow">Fin del video</span><span class="t">${esc(TOP[tid].title)}</span>${first ? '<span class="chip" style="--sc:var(--ok)">+40 XP</span>' : ''}
    <button class="btn gold-btn" data-go="topic" data-a="${tid}" data-b="preguntas">Ir a las preguntas</button><button class="btn" data-act="vagain">Ver otra vez</button>
    ${nx ? `<p class="small">Sigue: <b>${esc(TOP[nx].title)}</b> en <b id="vcd">5</b> s</p><button class="btn small" data-act="vqstop">Detener maratón</button>` : ''}</div>`;
  vSub(nx ? 'Maratón: el siguiente video empieza en unos segundos.' : '¡Listo! Ahora contesta las preguntas del tema para fijarlo.');
  if (nx) {
    let n = 5;
    const tickCd = () => { if (!VS || VS.tid !== tid) return; n--; const el = $('#vcd'); if (el) el.textContent = n; if (n <= 0) { VQUEUE.shift(); VAUTO = true; go('topic', { a: nx, b: 'video' }); } else later(tickCd, 1000); };
    later(tickCd, 1000);
  }
}
// Gancho para la herramienta de vista previa (tools/preview.cjs): solo existe con #preview en la URL
if (location.hash === '#preview') window.__gp = { show: (i) => { VS.started = true; vBtn(); vShow(i); document.querySelectorAll('#vslide [data-r]').forEach((r) => r.classList.add('on')); const x = VS.flat[VS.i]; vSub(''); sentences(x.sc.say).forEach((t) => keyTerms(t, x.sc.v).forEach(vConcept)); if (x.sc.v.k === 'quiz') document.querySelectorAll('#vslide .vopt').forEach((b, j) => j === x.sc.v.a && b.classList.add('ok')); return VS.flat.length; },
  // Frases que se graban por tema (tools/narrate): video, explicaciones de quiz, repasos y pasos de la animación
  smear: (id) => { const cv = document.createElement('canvas'); smearDraw(cv, id, 42, true); return cv.toDataURL(); },
  facts: (id) => ecgFacts(id), hsraw: (id, man, at) => Array.from(hsSynth(id, man, at), (v) => Math.round(v * 32767)), hs: (id, man, at) => { const d = hsSynth(id, man, at); let mx = 0, e = 0; for (const v of d) { mx = Math.max(mx, Math.abs(v)); e += v * v; } return [mx, Math.sqrt(e / d.length)]; },
  ecg: (id, k) => { const cv = document.createElement('canvas'); cv.style.width = '358px'; document.body.appendChild(cv); const P = ecgSpec(id, k); P.seed = 42; ecgDraw(cv, P, '12', []); const u = cv.toDataURL(); cv.remove(); return u; },
  mu: () => ({ url: MU.url, paused: MU.el ? MU.el.paused : null, t: MU.el ? MU.el.currentTime : null, src: MU.el ? MU.el.src.slice(0, 30) : null, beat: musicBeat() }),
  render: () => musicRender(),
  terms: (tid) => vFlat(tid).map((x) => sentences(x.sc.say).map((t) => keyTerms(t, x.sc.v).map((k) => k.w).join(' + ')).filter(Boolean).join(' | ')),
  segs: (tid) => {
    const out = [], seen = new Set();
    const add = (t) => { const k = speakable(t), h = hashStr(k); if (k && !seen.has(h)) { seen.add(h); out.push([h, k]); } };
    for (const x of vFlat(tid)) { sentences(x.sc.say).forEach(add); if (x.sc.exp) sentences(x.sc.exp).forEach(add); }
    const L = C.lessons[tid]; if (L.anim) C.anims[L.anim].steps.forEach((st) => add(st.cap.replace(/<[^>]+>/g, '')));
    return out;
  } };
function mountVideo(el, tid) {
  const t = TOP[tid], chs = C.lessons[tid].video, flat = vFlat(tid), secs = flat.map((x) => recSceneSecs(tid, x.sc) || sceneSecs(x.sc)), total = secs.reduce((a, b) => a + b, 0);
  const st = S.vid[tid] || {}, startI = st.pos > 0 && st.pos < flat.length ? st.pos : 0;
  const chStart = chs.map((_, ci) => flat.findIndex((x) => x.ci === ci));
  const chSecs = chs.map((_, ci) => flat.reduce((a, x, k) => a + (x.ci === ci ? secs[k] : 0), 0));
  VS = { tid, flat, secs, total, chStart, i: startI, sent: 0, sents: [], phase: 'say', playing: false, started: false, speed: vRate(), voice: S.settings.vvoice !== false, cc: S.settings.vcc !== false, sfx: S.settings.vsfx !== false, music: S.settings.vmusic !== false, combo: 0, t: 0, picked: null };
  let acc = 0;
  const ticks = chSecs.slice(0, -1).map((s) => { acc += s; return `<b style="left:${(acc / total) * 100}%"></b>`; }).join('');
  el.innerHTML = `<div class="vp" id="vp" style="--sc:${SUBJ[t.subj].color}">
    <div class="vscreen" id="vscreen"><div class="vsq" id="vsq"><canvas width="160" height="160" aria-hidden="true"></canvas><div class="vlabels" id="vlabels"></div><div class="vslide" id="vslide"></div><span class="vchip" id="vchip"></span><div class="vccard" id="vccard" aria-hidden="true"></div><div class="vcombo" id="vcombo" aria-live="polite"></div></div>
      <div class="vcap" id="vsub" aria-live="polite"></div>
      <button class="vbig" data-act="vplay" id="vbig"><span class="pl">▶</span>${startI ? 'Continuar el video' : 'Ver el video'}<small>${mmss(total)} · ${chs.length} capítulos · con voz y música</small></button></div>
    <div class="vbar" id="vbar" data-act="vseek" role="progressbar" aria-label="Avance del video">${ticks}<i id="vfill"></i></div>
    <div class="vctrl">
      <button class="vb" data-act="vprev" aria-label="Capítulo anterior">⏮</button><button class="vb vmain" data-act="vplay" id="vplaybtn" aria-label="Reproducir">▶</button><button class="vb" data-act="vnext" aria-label="Siguiente capítulo">⏭</button>
      <span class="vtime" id="vtime">0:00 / ${mmss(total)}</span>
      <button class="vb" data-act="vspeed" aria-label="Velocidad">${VS.speed}×</button><button class="vb" data-act="vvoice" aria-pressed="${VS.voice}">Voz</button><button class="vb" data-act="vtimbre" aria-label="Tipo de voz">${TIMBRES[timbre()][0]}</button><button class="vb" data-act="vcc" aria-pressed="${VS.cc}" aria-label="Conceptos en pantalla">Aa</button><button class="vb" data-act="vsfx" aria-pressed="${VS.sfx}" aria-label="Efectos de sonido">♪</button><button class="vb" data-act="vmusic" aria-pressed="${VS.music}" aria-label="Música de fondo">Lo-fi</button><button class="vb" data-act="vcine" aria-pressed="false" aria-label="Modo cine">⛶</button>
    </div>
  </div>
  ${MOTION[tid] ? `<section class="panel tight mclip"><div class="row"><h2 class="grow">Resumen en 1 minuto</h2><span class="small muted">${mmss(MOTION[tid].dur)}</span></div><p class="small muted">${esc(MOTION[tid].title)}: el mecanismo central animado, para repasar rápido o antes del examen.</p><button class="btn gold-btn" data-act="mclip">▶ Ver el resumen</button><div class="mbox" hidden></div></section>` : ''}
  <section class="panel tight"><h2>Capítulos</h2><ol class="vchaps" id="vchaps">${chs.map((c, ci) => `<li><button data-act="vch" data-i="${ci}"><span>${ci + 1}. ${esc(c.ch)}</span><span class="small muted">${mmss(chSecs[ci])}</span></button></li>`).join('')}</ol>
  <p class="small muted">${VOICE[tid] ? 'La narración está grabada: sube el volumen. Con “Voz” apagada, el video avanza solo con subtítulos.' : TTS.ok ? 'La voz es la de tu teléfono. ¿No se escucha? Sube el volumen o apaga “Voz” y sigue con subtítulos.' : 'Este navegador no tiene voz: el video avanza con subtítulos.'} ${VQUEUE.length ? `Maratón: quedan ${VQUEUE.length} video(s) después de este.` : ''}</p></section>`;
  VS.g = Pix(el.querySelector('canvas').getContext('2d'));
  recAudio(tid);
  const restart = () => { if (VS.playing) { hush(); clearLater(); if (VS.phase === 'wait') vQuizWait(); else vStep(); } };
  ACT.vplay = () => (VS.playing ? vPause() : vPlay());
  ACT.mclip = () => { vPause(); clipBox(el.querySelector('.mclip .mbox'), tid); };
  ACT.vprev = () => { const ci = VS.flat[VS.i].ci, s0 = VS.chStart[ci]; vGo(VS.i > s0 || VS.sent > 0 ? s0 : VS.chStart[Math.max(0, ci - 1)]); };
  ACT.vnext = () => { const ci = VS.flat[VS.i].ci; if (ci + 1 < VS.chStart.length) vGo(VS.chStart[ci + 1]); else vGo(VS.flat.length); };
  ACT.vch = (b) => { vGo(VS.chStart[+b.dataset.i]); if (!VS.playing) vPlay(); };
  ACT.vseek = (b, e) => {
    const r = b.getBoundingClientRect(), tg = clamp((e.clientX - r.left) / r.width, 0, 1) * VS.total;
    let a = 0, k = 0; while (k < VS.secs.length - 1 && a + VS.secs[k] < tg) { a += VS.secs[k]; k++; }
    vGo(k);
  };
  ACT.vspeed = (b) => { VS.speed = SPEEDS[(SPEEDS.indexOf(VS.speed) + 1) % SPEEDS.length]; S.settings.vspeed = VS.speed; save(); b.textContent = VS.speed + '×'; restart(); };
  ACT.vvoice = (b) => { VS.voice = !VS.voice; S.settings.vvoice = VS.voice; save(); b.setAttribute('aria-pressed', VS.voice); if (VS.voice) TTS.broken = false; restart(); };
  ACT.vtimbre = (b) => { const ks = Object.keys(TIMBRES), k = ks[(ks.indexOf(timbre()) + 1) % ks.length]; S.settings.vtimbre = k; TB_BAD.delete(k); save(); b.textContent = TIMBRES[k][0]; recAudio(tid); restart(); };
  ACT.vcc = (b) => { VS.cc = !VS.cc; S.settings.vcc = VS.cc; save(); b.setAttribute('aria-pressed', VS.cc); vSub(''); };
  ACT.vsfx = (b) => { VS.sfx = !VS.sfx; S.settings.vsfx = VS.sfx; save(); b.setAttribute('aria-pressed', VS.sfx); if (VS.sfx) vfx('pop', 3); };
  ACT.vmusic = (b) => { VS.music = !VS.music; S.settings.vmusic = VS.music; save(); b.setAttribute('aria-pressed', VS.music); if (VS.music && VS.playing) musicStart(); else musicStop(); };
  ACT.vcine = (b) => { const on = !$('#vp').classList.contains('cine'); setCine($('#vp'), on); b.setAttribute('aria-pressed', on); b.textContent = on ? '✕' : '⛶'; };
  ACT.vpick = (b) => vQuizReveal(+b.dataset.k);
  ACT.vagain = () => { S.vid[tid].pos = 0; save(); VAUTO = true; go('topic', { a: tid, b: 'video' }); };
  ACT.vqstop = () => { VQUEUE = []; clearLater(); toast('Maratón detenido'); vSub(''); const p = document.querySelector('.vs-end p'); if (p) p.remove(); };
  vShow(startI);
  const vp = $('#vp');
  if (!reduce) { let last = null; loop((ts) => {
    if (!VS) return; if (last == null) last = ts; VS.t += Math.min((ts - last) / 1000, 0.1); last = ts; vDraw(VS.t);
    // Pulso de la música: el marco y el concepto nuevo respiran con cada tiempo (más en el primero del compás)
    const b = musicBeat(), p = b == null ? 0 : Math.exp(-(b % 1) * 5) * (Math.floor(b) % 4 === 0 ? 1 : 0.5);
    if (Math.abs(p - (VS.pl || 0)) > 0.01) { VS.pl = p; vp.style.setProperty('--pulse', p.toFixed(3)); }
  }); }
  if (VS.music) setTimeout(musicRender, 500);
  if (VAUTO) { VAUTO = false; vPlay(); }
}

// ═══════════ Preguntas (práctica, diagnóstico, jefe, errores, simulacro, una sola)
function startQuiz(o) {
  QS = { ...o, i: 0, res: [], ord: [], lives: o.mode === 'boss' ? 3 : null, hp: o.mode === 'boss' ? 4 : null, finished: false, xp: 0 };
  go('quiz');
}
function startBoss(tid) {
  const qs = bank(tid);
  const ids = [3, 2, 1].flatMap((d) => shuffle(qs.filter((q) => q.dif === d).map((q) => q.id))).slice(0, 7);
  startQuiz({ mode: 'boss', title: `Jefe · ${TOP[tid].title}`, qids: ids, topic: tid, tab: 'temario', back: ['topic', tid, 'jefe'] });
}
function record(q, pick, mode, mult = 1) {
  const ok = pick === q.ans;
  const s = S.qs[q.id] || (S.qs[q.id] = { n: 0, ok: 0 });
  s.n++; if (ok) s.ok++; s.last = ok ? 1 : 0;
  if (q.diag && mode === 'diag') S.diag.ans[q.id] = ok;
  const e = S.err[q.id];
  if (!ok) S.err[q.id] = { box: 0, due: addDays(today(), 1), miss: ((e && e.miss) || 0) + 1 };
  else if (e && mode === 'errors') {
    e.box++;
    if (e.box >= 3) { delete S.err[q.id]; S.errFixed++; } else e.due = addDays(today(), [1, 3, 7][e.box]);
  }
  const xp = ok ? Math.round(10 * [1, 1.5, 2][q.dif - 1] * mult) : 2;
  gain(xp);
  return xp;
}
function goBack(b) { if (Array.isArray(b)) go(b[0], { a: b[1], b: b[2] }); else go(b || 'home'); }
function finishQuiz() {
  if (!QS || QS.finished) return;
  QS.finished = true;
  if (QS.mode === 'sim') {
    const by = {};
    QS.qids.forEach((id, i) => {
      const q = QMAP[id], r = QS.res[i], pick = r ? r.pick : -1;
      const ok = pick === q.ans; QS.res[i] = { pick, ok };
      record(q, pick, 'sim');
      const b = by[q.subj] || (by[q.subj] = { n: 0, ok: 0 }); b.n++; if (ok) b.ok++;
    });
    const ok = QS.res.filter((r) => r.ok).length;
    S.sims.push({ date: today(), n: QS.qids.length, ok, by });
    gain(50, 'Simulacro terminado');
  }
  if (QS.mode === 'practice' && QS.topic) checkTopicDone(QS.topic);
  if (QS.mode === 'boss' && QS.hp <= 0) {
    const tp = S.tp[QS.topic] || (S.tp[QS.topic] = {});
    tp.boss = today(); gain(100, 'Le ganaste al Enmascarado');
  }
  save();
  if (QS.onEnd) { const cb = QS.onEnd; QS.onEnd = null; cb(QS); if (QS.mode === 'diag') return; }
  if (QS.mode === 'single') { goBack(QS.back); return; }
  render();
}
VIEWS.quiz = (m) => {
  if (!QS) { VIEWS.home(m); return; }
  if (QS.finished) { quizResult(m); return; }
  const q = QMAP[QS.qids[QS.i]];
  const ord = QS.ord[QS.i] || (QS.ord[QS.i] = shuffle(q.opts.map((_, k) => k)));
  const r = QS.res[QS.i], sim = QS.mode === 'sim', answered = r && !sim;
  const n = QS.total || QS.qids.length, idx = (QS.offset || 0) + QS.i + 1, t = TOP[q.topic];
  const last = QS.i + 1 >= QS.qids.length || (QS.mode === 'boss' && (QS.hp <= 0 || QS.lives <= 0));
  const optsHTML = ord.map((oi, k) => {
    let cls = '';
    if (answered) cls = oi === q.ans ? ' right' : oi === r.pick ? ' wrong' : '';
    else if (sim && r && r.pick === oi) cls = ' sel';
    return `<button class="opt${cls}" data-act="pick" data-o="${oi}"${answered ? ' disabled' : ''}><span class="key">${LET[k]}</span><span>${esc(q.opts[oi])}</span></button>`;
  }).join('');
  const fb = answered ? `<div class="fb" id="fb">
    <div class="verdict ${r.ok ? 'ok' : 'no'}">${r.ok ? '✓ Correcto' : '✗ Incorrecto'}<span class="xpgain">+${r.xp} XP</span></div>
    <p>${esc(q.exp)}</p>
    <ul class="why">${ord.map((oi, k) => `<li><b>${LET[k]}</b><span>${oi === q.ans ? '<strong>Es la correcta.</strong>' : esc(q.why[oi])}</span></li>`).join('')}</ul>
    <p class="ref">Fuente: ${esc(q.ref)}</p></div>` : '';
  m.innerHTML = `
  <div class="qhead"><button class="btn small ghost" data-act="qexit">Salir</button><div class="grow"><b>${esc(QS.title)}</b><span class="qprog">${QS.mode === 'boss' ? `Pregunta ${QS.i + 1}` : `${idx}/${n}`}</span></div>
  ${QS.mode === 'boss' ? `<div class="lives" aria-label="${QS.lives} vidas">${[0, 1, 2].map((k) => lifeIcon(k < QS.lives)).join('')}</div>` : ''}
  ${sim ? '<span class="timer" id="qtimer" aria-live="off"></span>' : ''}</div>
  ${QS.mode === 'boss' ? `<div class="bosshp"><span class="row" style="gap:8px">${svgSpr(SPR.mask, MASK_PAL, 2)} El Enmascarado</span><div class="seg bad" style="--p:${QS.hp / 4}"><i></i></div></div>` : `<div class="seg cy" style="--p:${(idx - 1) / n}"><i></i></div>`}
  <article class="qcard"><div class="qmeta">${subjChip(q.subj)}<span class="small muted">${esc(t.title)}</span>${difStars(q.dif)}</div>
  <p class="stem">${esc(q.stem)}</p><div class="opts">${optsHTML}</div>${fb}</article>
  ${answered || (sim && r) ? `<button class="btn gold-btn big" data-act="qnext">${last ? (QS.mode === 'single' ? 'Terminar' : 'Ver resultados') : 'Siguiente'}</button>` : ''}`;
  ACT.pick = (el) => {
    const oi = +el.dataset.o;
    if (sim) { QS.res[QS.i] = { pick: oi }; beep('click'); render(); return; }
    if (QS.res[QS.i]) return;
    const ok = oi === q.ans, xp = record(q, oi, QS.mode, QS.xpMult || 1);
    QS.res[QS.i] = { pick: oi, ok, xp }; QS.xp += xp;
    if (QS.mode === 'boss') { if (ok) QS.hp--; else QS.lives--; }
    beep(ok ? 'ok' : 'bad'); render();
    const f = $('#fb'); if (f) f.scrollIntoView({ block: 'nearest', behavior: reduce ? 'auto' : 'smooth' });
  };
  ACT.qnext = () => { if (last) { finishQuiz(); return; } QS.i++; render(); window.scrollTo(0, 0); };
  ACT.qexit = () => {
    if (QS.mode === 'sim' || QS.mode === 'boss') confirmBox('¿Salir?', 'Perderás el avance de esta partida.', 'Salir', () => { const b = QS.back; QS = null; goBack(b); });
    else { const b = QS.back; if (QS.mode === 'diag') toast('Tu avance del diagnóstico quedó guardado'); QS = null; goBack(b); }
  };
  if (sim && !QS.timerOn) {
    QS.timerOn = true;
    const upd = () => {
      if (!QS || QS.finished) return;
      const left = Math.max(0, Math.round((QS.deadline - Date.now()) / 1000)), el = $('#qtimer');
      if (el) { el.textContent = `${Math.floor(left / 60)}:${pad(left % 60)}`; el.classList.toggle('low', left < 60); }
      if (left <= 0) { toast('Se acabó el tiempo'); finishQuiz(); }
    };
    every(1000, upd);
  }
  if (sim) { const el = $('#qtimer'); if (el) { const left = Math.max(0, Math.round((QS.deadline - Date.now()) / 1000)); el.textContent = `${Math.floor(left / 60)}:${pad(left % 60)}`; } }
};
function quizResult(m) {
  const res = QS.res.filter(Boolean), n = res.length, ok = res.filter((r) => r.ok).length;
  const missed = QS.qids.map((id, i) => [QMAP[id], QS.res[i]]).filter(([, r]) => r && !r.ok).map(([q]) => q);
  let head = '';
  if (QS.mode === 'boss') {
    const won = QS.hp <= 0;
    head = `<section class="carta gold" style="cursor:default">${GEMS}<span class="medal">${svgSpr(SPR.mask, MASK_PAL, 4, 'El Enmascarado')}</span><span class="stack" style="gap:6px"><span class="eyebrow" style="color:var(--gold-3)">${won ? 'Victoria' : 'Derrota'}</span><span class="h2">${won ? 'Le quitaste la máscara' : 'El Enmascarado ganó esta vez'}</span><span class="small">${won ? '+100 XP y logro desbloqueado.' : 'Repasa la lección y las preguntas que fallaste, y pide la revancha.'}</span></span></section>`;
  } else if (QS.mode === 'sim') {
    const sm = S.sims[S.sims.length - 1];
    head = `<section class="panel"><p class="eyebrow">Simulacro · ${fmtDay(sm.date)}</p><div class="row"><span class="score">${pct(sm.ok / sm.n)}%</span><span class="muted">${sm.ok} de ${sm.n}</span></div>
    <div class="subjbars">${C.subjects.filter((s) => sm.by[s.id]).map((s) => { const b = sm.by[s.id], p = b.ok / b.n; return `<div class="sbar" style="--sc:${s.color}"><span class="nm">${subjIcon(s.id, 1)} ${esc(s.short)}</span><span class="seg ${p < 0.6 ? 'bad' : p < 0.8 ? '' : 'ok'}" style="--p:${p}"><i></i></span><span>${b.ok}/${b.n}</span></div>`; }).join('')}</div>
    <p class="small muted">Las que fallaste ya están en tu cuaderno de errores.</p></section>`;
  } else {
    head = `<section class="panel"><p class="eyebrow">${esc(QS.title)}</p><div class="row"><span class="score">${ok}/${n}</span><span class="muted">${n ? pct(ok / n) : 0}% · +${QS.xp} XP</span></div>${QS.mode === 'errors' ? `<p class="muted">Las que acertaste avanzan en el cuaderno; a la tercera, salen.</p>` : ''}</section>`;
  }
  m.innerHTML = `${head}
  ${missed.length ? `<section class="panel"><h2>Para repasar</h2><ul class="missed">${missed.map(missedItem).join('')}</ul></section>` : ''}
  <div class="stack">${missed.length && QS.mode !== 'sim' ? '<button class="btn gold-btn big" data-act="redo">Repetir las que fallé</button>' : ''}<button class="btn big" data-act="back">Volver</button></div>`;
  const prev = QS;
  ACT.redo = () => startQuiz({ mode: prev.mode === 'diag' ? 'practice' : prev.mode === 'boss' ? 'practice' : prev.mode, title: `${prev.title} · repaso`, qids: shuffle(missed.map((q) => q.id)), topic: prev.topic, tab: prev.tab, back: prev.back });
  ACT.back = () => { const b = QS.back; QS = null; goBack(b); };
}

// ═══════════ Modo guardia
function caseCard(c) {
  const st = S.cases[c.id], p = c.patient;
  return `<section class="panel"><div class="case-h">${patientSpr(p, 3)}<div class="stack" style="gap:4px">${subjChip(c.subj)}<span class="h2">${esc(c.title)}</span><span class="small muted">${esc(p.name)}, ${p.age} años · ${esc(c.place)}</span></div></div><p>${esc(c.intro)}</p>
  <p class="small muted">${c.nodes.length} decisiones · 3 vidas${st && st.done ? ` · mejor resultado: ${st.best} vida(s)` : ''}</p><button class="btn gold-btn big" data-act="startCase" data-id="${c.id}">${st && st.done ? 'Jugar de nuevo' : 'Entrar a la guardia'}</button></section>`;
}
const patientSpr = (p, sc = 3) => svgSpr(SPR.patient, { H: p.hair, S: p.skin, K: '#1A1020', M: '#8A3B3B', B: p.gown, W: '#FFFFFF' }, sc, `${p.name}, ${p.age} años`);
VIEWS.guardia = (m) => {
  m.innerHTML = `<h1>Modo guardia</h1><p class="muted">Casos con monitor: cada decisión cambia los signos vitales y el desenlace. Tienes 3 vidas y un reloj por decisión (se ajusta en Más → Ajustes).</p>${C.cases.map(caseCard).join('')}`;
  ACT.startCase = (b) => startCase(b.dataset.id);
};
function startCase(id) {
  const c = C.cases.find((x) => x.id === id);
  CS = { c, i: 0, lives: 3, vit: { ...c.start }, ecg: 'normal', pick: null, log: [], done: false };
  enterNode(); go('caso');
}
function enterNode() {
  const n = CS.c.nodes[CS.i];
  if (n.vit) Object.assign(CS.vit, n.vit);
  if (n.ecg) CS.ecg = n.ecg;
  CS.pick = null; CS.timeout = false; CS.t0 = Date.now();
}
function vitalsHTML() {
  const v = CS.vit, c = CS.c;
  const al = { FC: v.FC < 50 || v.FC > 120, PA: v.PAS < 90, Sp: v.SpO2 < 90, FR: v.FR > 28 };
  return `<div class="vitals">
    <div class="vit${al.FC ? ' alarm' : ''}"><span class="l">FC lpm</span><span class="v">${v.FC}</span></div>
    <div class="vit pa${al.PA ? ' alarm' : ''}"><span class="l">PA mmHg</span><span class="v">${v.PAS}<small>/${v.PAD}</small></span></div>
    <div class="vit sat${al.Sp ? ' alarm' : ''}"><span class="l">SpO₂ %</span><span class="v">${v.SpO2}</span></div>
    <div class="vit${al.FR ? ' alarm' : ''}"><span class="l">FR rpm</span><span class="v">${v.FR}</span></div>
    <div class="vit x"><span class="l">${esc(c.extra.label)} ${esc(c.extra.unit)}</span><span class="v">${esc(v.X)}</span></div></div>`;
}
VIEWS.caso = (m) => {
  if (!CS) { VIEWS.guardia(m); return; }
  const c = CS.c, p = c.patient;
  if (CS.done) { caseResult(m); return; }
  const n = c.nodes[CS.i], picked = CS.pick;
  const opt = picked ? n[picked] : null;
  const timerOn = !picked && S.settings.timer > 0;
  m.innerHTML = `
  <div class="qhead"><button class="btn small ghost" data-act="cexit">Salir</button><div class="grow"><b>${esc(c.title)}</b><span class="qprog">Decisión ${CS.i + 1}/${c.nodes.length}</span></div><div class="lives" aria-label="${CS.lives} vidas">${[0, 1, 2].map((k) => lifeIcon(k < CS.lives)).join('')}</div></div>
  <div class="case-h">${patientSpr(p, 3)}<div class="stack" style="gap:2px"><span class="who">${esc(p.name)}, ${p.age} años</span><span class="small muted">${esc(c.place)}</span><span class="eyebrow">${esc(n.tag)}</span></div></div>
  <div class="monitor" aria-label="Monitor de signos vitales"><canvas id="ecg" width="160" height="40" aria-hidden="true"></canvas>${vitalsHTML()}</div>
  ${n.text ? `<p class="scene">${esc(n.text)}</p>` : ''}
  <h2>${esc(n.q)}</h2>
  ${timerOn ? `<div class="tbar" id="tbar" role="progressbar" aria-label="Tiempo para decidir" aria-valuemin="0" aria-valuemax="${S.settings.timer}"><i></i></div>` : ''}
  <div class="ab">${['A', 'B'].map((k) => {
    let cls = '';
    if (picked) cls = n[k].ok ? ' right' : k === picked ? ' wrong' : '';
    return `<button class="abbtn${cls}" data-act="cpick" data-k="${k}"${picked ? ' disabled' : ''}><span class="k">${k}</span><span>${esc(n[k].t)}</span></button>`;
  }).join('')}</div>
  ${picked ? `<div class="outcome ${opt.ok ? 'ok' : 'no'}" id="outc"><div class="verdict ${opt.ok ? 'ok' : 'no'}">${opt.ok ? '✓ Buena decisión' : CS.timeout ? '⏱ Se te fue el tiempo' : '✗ Mala decisión'}</div><p>${esc(opt.res)}</p><p><b>Por qué:</b> ${esc(n.why)}</p></div>
  <button class="btn gold-btn big" data-act="cnext">${CS.i + 1 >= c.nodes.length || CS.lives <= 0 ? 'Ver el resumen' : 'Continuar'}</button>` : ''}`;
  const g = Pix($('#ecg').getContext('2d'));
  const drawEcg = (ts) => {
    const t = ts / 1000; g.clear(COL.mon);
    for (let x = 0; x < 160; x += 8) for (let y = 4; y < 40; y += 8) g.p(x, y, COL.grid);
    ecgTrace(g, CS.ecg, t, 24, 0, 160, COL.ecg, 1);
  };
  loop(drawEcg);
  ACT.cpick = (b) => choose(b.dataset.k, false);
  ACT.cnext = () => {
    if (n.after) { if (n.after.vit) Object.assign(CS.vit, n.after.vit); if (n.after.ecg) CS.ecg = n.after.ecg; }
    if (CS.lives <= 0 || CS.i + 1 >= c.nodes.length) {
      CS.done = true;
      const st = S.cases[c.id] || (S.cases[c.id] = { done: false, best: 0, plays: 0 });
      st.plays++;
      if (CS.lives > 0) { st.done = true; st.best = Math.max(st.best, CS.lives); gain(50 + 10 * CS.lives, 'Guardia terminada'); } else save();
      render(); window.scrollTo(0, 0); return;
    }
    CS.i++; enterNode(); clearTimers(); render(); window.scrollTo(0, 0);
  };
  ACT.cexit = () => confirmBox('¿Salir de la guardia?', 'El caso se reinicia la próxima vez.', 'Salir', () => { CS = null; go('guardia'); });
  if (timerOn) {
    const total = S.settings.timer * 1000;
    every(100, () => {
      const left = total - (Date.now() - CS.t0), bar = $('#tbar');
      if (bar) { bar.querySelector('i').style.width = `${clamp(left / total, 0, 1) * 100}%`; bar.classList.toggle('low', left < total * 0.3); }
      if (left <= 0 && !CS.pick) choose(n.A.ok ? 'B' : 'A', true);
    });
  }
};
function choose(k, timeout) {
  if (CS.pick) return;
  clearTimers();
  const n = CS.c.nodes[CS.i], opt = n[k];
  CS.pick = k; CS.timeout = timeout;
  if (opt.vit) Object.assign(CS.vit, opt.vit);
  if (opt.ecg) CS.ecg = opt.ecg;
  if (!opt.ok) CS.lives--;
  CS.log.push({ tag: n.tag, q: n.q, ok: opt.ok, right: n.A.ok ? n.A.t : n.B.t, why: n.why, timeout });
  beep(opt.ok ? 'ok' : 'bad');
  render();
  const o = $('#outc'); if (o) o.scrollIntoView({ block: 'nearest', behavior: reduce ? 'auto' : 'smooth' });
}
function caseResult(m) {
  const c = CS.c, ok = CS.lives > 0;
  m.innerHTML = `<section class="panel"><p class="eyebrow">${esc(c.title)}</p><span class="h2">${ok ? `${esc(c.patient.name)} salió adelante` : 'Perdiste al paciente'}</span><div class="lives">${[0, 1, 2].map((k) => lifeIcon(k < CS.lives)).join('')}</div><p class="muted">${ok ? `Terminaste con ${CS.lives} vida(s).` : 'Repasa las decisiones y vuelve a intentarlo: así se aprende en guardia.'}</p></section>
  <section class="panel"><h2>Resumen de decisiones</h2><ul class="missed">${CS.log.map((l) => `<li><details${l.ok ? '' : ' open'}><summary>${l.ok ? '✓' : '✗'} ${esc(l.tag)} · ${esc(l.q)}</summary><div class="stack" style="margin-top:8px"><p><b>Lo correcto:</b> ${esc(l.right)}</p><p class="muted">${esc(l.why)}</p></div></details></li>`).join('')}</ul></section>
  <div class="stack"><button class="btn gold-btn big" data-act="again">Jugar de nuevo</button><button class="btn big" data-act="toTopic">Ir al tema</button></div>`;
  ACT.again = () => startCase(c.id);
  ACT.toTopic = () => { CS = null; go('topic', { a: c.topic }); };
}

// ═══════════ Tarjetas y cuaderno de errores
const INT = [0, 1, 2, 4, 7, 12];
function makeCardSession(tid) {
  const cq = cardQueue(tid);
  return { tid: tid || null, ids: [...cq.due, ...cq.fresh].map((c) => c.id), i: 0, flip: false, again: {}, n: 0 };
}
VIEWS.repaso = (m) => {
  const cq = cardQueue(), ed = errorsDue(), all = Object.keys(S.err).filter((id) => QMAP[id]).length, tot = cq.due.length + cq.fresh.length;
  m.innerHTML = `<h1>Repaso</h1>
  ${mixPanel()}
  <section class="panel"><h2>Tarjetas</h2><p class="muted">${cq.due.length} para repasar y ${cq.fresh.length} nuevas hoy (máximo 20 nuevas al día). Vuelven a 1, 2, 4, 7 y 12 días según qué tan bien te las sepas.</p><button class="btn gold-btn big" data-act="cardsAll"${tot ? '' : ' disabled'}>${tot ? 'Repasar tarjetas' : 'Al día por hoy'}</button></section>
  <section class="panel"><h2>Cuaderno de errores</h2><p class="muted">${ed.length} para hoy · ${all} en total. Cada pregunta que fallas regresa en 1, 3 y 7 días; a la tercera vez que la aciertas, sale del cuaderno.</p><button class="btn gold-btn big" data-act="errToday"${ed.length ? '' : ' disabled'}>${ed.length ? `Repasar las ${ed.length} de hoy` : 'Nada pendiente hoy'}</button>${all ? '<button class="btn" data-go="errores">Ver el cuaderno completo</button>' : ''}</section>
  <section class="panel"><h2>Videos</h2><p class="muted">Un video por tema con narración, subtítulos y pausas para preguntarte. Ideal para el camino o antes de dormir.</p><button class="btn" data-go="videos">Abrir videos</button></section>
  <section class="panel"><h2>Perlas para el final</h2><p class="muted">Mnemotecnias, perlas y trampas de todos los temas disponibles en una sola página. Para la noche del 9 de noviembre.</p><button class="btn" data-go="perlas">Abrir perlas</button></section>`;
  ACT.cardsAll = () => { FS = makeCardSession(null); go('tarjetas'); };
  ACT.mix = startMix;
  ACT.errToday = () => startQuiz({ mode: 'errors', title: 'Cuaderno de errores', qids: shuffle(ed), tab: 'repaso', back: 'repaso' });
};
VIEWS.videos = (m) => {
  const vt = C.topics.filter((t) => hasVideo(t.id)), seen = vt.filter((t) => S.vid[t.id] && S.vid[t.id].done).length;
  const status = (tid) => { const v = S.vid[tid]; return v && v.done ? 'Visto ✓' : v && v.pos ? 'Continuar' : 'Nuevo'; };
  m.innerHTML = `<button class="btn small ghost" data-go="repaso" style="align-self:flex-start">← Repaso</button><h1>Videos</h1>
  <p class="muted">Un video por tema: escenas en pixel art, narración con la voz de tu teléfono, subtítulos y pausas para preguntarte. ${seen} de ${vt.length} vistos. El maratón reproduce los pendientes de una materia uno tras otro.</p>
  ${C.subjects.map((s) => {
    const ts = vt.filter((t) => t.subj === s.id); if (!ts.length) return '';
    const min = ts.reduce((a, t) => a + vMin(t.id), 0);
    return `<section class="panel" style="--sc:${s.color}"><div class="row">${subjIcon(s.id, 2)}<h2 class="grow">${esc(s.name)}</h2><button class="btn small" data-act="vmara" data-s="${s.id}">Maratón · ${min} min</button></div>
    <ul class="vlist">${ts.map((t) => `<li><button class="vitem" data-act="vopen" data-t="${t.id}"><span class="vth" aria-hidden="true">▶</span><span class="tt">${esc(t.title)}<small>Tema ${t.n} · ${vMin(t.id)} min · ${status(t.id)}</small></span></button></li>`).join('')}</ul></section>`;
  }).join('')}
  ${Object.keys(MOTION).length ? `<section class="panel"><h2>Resúmenes en 1 minuto</h2><p class="muted small">El mecanismo central de cada tema en motion graphics, con voz. Para repasar en el camino o la noche antes.</p><div class="mbox" hidden></div>
    <ul class="vlist">${C.topics.filter((t) => MOTION[t.id]).map((t) => `<li><button class="vitem" data-act="mopen" data-t="${t.id}"><span class="vth" aria-hidden="true">⚡</span><span class="tt">${esc(MOTION[t.id].title)}<small>Tema ${t.n} · ${mmss(MOTION[t.id].dur)}${S.vid[t.id] && S.vid[t.id].clip ? ' · Visto ✓' : ''}</small></span></button></li>`).join('')}</ul></section>` : ''}`;
  ACT.mopen = (b) => clipBox(m.querySelector('.mbox'), b.dataset.t);
  ACT.vopen = (b) => { VQUEUE = []; VAUTO = true; go('topic', { a: b.dataset.t, b: 'video' }); };
  ACT.vmara = (b) => {
    const ts = vt.filter((t) => t.subj === b.dataset.s), pend = ts.filter((t) => !(S.vid[t.id] && S.vid[t.id].done)), list = (pend.length ? pend : ts).map((t) => t.id);
    VQUEUE = list.slice(1); VAUTO = true; go('topic', { a: list[0], b: 'video' });
  };
};
VIEWS.tarjetas = (m) => {
  if (!FS) FS = makeCardSession(route.a || null);
  const n = FS.ids.length;
  if (FS.i >= n) {
    m.innerHTML = `<section class="panel"><span class="h2">${n ? 'Listo por hoy' : 'No hay tarjetas pendientes'}</span><p class="muted">${n ? `Repasaste ${FS.n} tarjetas. Las que marcaste como fáciles tardarán más en volver.` : 'Vuelve mañana o lee una lección nueva.'}</p><button class="btn gold-btn big" data-act="cardsOut">Volver</button></section>`;
    ACT.cardsOut = () => { const tid = FS.tid; FS = null; tid ? go('topic', { a: tid, b: 'tarjetas' }) : go('repaso'); };
    return;
  }
  const c = C.cards.find((x) => x.id === FS.ids[FS.i]), t = TOP[c.topic];
  m.innerHTML = `<div class="qhead"><button class="btn small ghost" data-act="cardsOut">Salir</button><div class="grow"><b>Tarjetas</b><span class="qprog">${FS.i + 1}/${n}</span></div></div>
  <div class="seg cy" style="--p:${FS.i / n}"><i></i></div>
  <button class="fcard${FS.flip ? ' back' : ''}${FS.flip && !reduce ? ' turn' : ''}" data-act="flip" aria-live="polite"><span class="side">${FS.flip ? 'Respuesta' : 'Pregunta'} · ${esc(t.title)}</span>${FS.flip ? `<span class="small muted">${esc(c.f)}</span>` : ''}<span class="txt">${esc(FS.flip ? c.b : c.f)}</span>${FS.flip ? '' : '<span class="small muted">Piensa la respuesta y toca para voltear</span>'}</button>
  ${FS.flip ? '<div class="grades"><button class="btn" data-act="grade" data-g="0">Otra vez</button><button class="btn" data-act="grade" data-g="1">Difícil</button><button class="btn gold-btn" data-act="grade" data-g="2">Fácil</button></div>' : '<button class="btn gold-btn big" data-act="flip">Voltear</button>'}`;
  ACT.flip = () => { if (FS.flip) return; FS.flip = true; beep('flip'); render(); };
  ACT.grade = (b) => {
    const gr = +b.dataset.g, cur = S.cards[c.id], isNew = !cur, td = today();
    let box = cur ? cur.box : 0;
    if (gr === 0) { box = 0; if (!FS.again[c.id]) { FS.again[c.id] = 1; FS.ids.push(c.id); } }
    else if (gr === 1) box = Math.max(1, box);
    else box = Math.min(5, box + 1);
    S.cards[c.id] = { box, due: gr === 0 ? td : addDays(td, Math.max(1, gr === 1 ? 1 : INT[box])) };
    if (isNew) { if (S.newCards.date !== td) S.newCards = { date: td, n: 0 }; S.newCards.n++; }
    S.cardRev++; FS.n++; FS.i++; FS.flip = false;
    beep(gr === 2 ? 'ok' : 'click'); gain(2); render();
  };
  ACT.cardsOut = () => { const tid = FS.tid; FS = null; tid ? go('topic', { a: tid, b: 'tarjetas' }) : go('repaso'); };
};
VIEWS.errores = (m) => {
  const items = Object.entries(S.err).filter(([id]) => QMAP[id]).sort((a, b) => (a[1].due < b[1].due ? -1 : 1));
  m.innerHTML = `<button class="btn small ghost" data-go="repaso" style="align-self:flex-start">← Repaso</button><h1>Cuaderno de errores</h1><p class="muted">${items.length} preguntas. Las de hoy o antes ya tocan.</p>
  ${items.length ? `<button class="btn gold-btn big" data-act="errAll">Repasar todas (${items.length})</button>` : ''}
  <ul class="missed">${items.map(([id, e]) => `<li><details><summary>${subjChip(QMAP[id].subj)} <span class="small muted">${e.due <= today() ? 'Toca hoy' : 'Vuelve el ' + fmtDay(e.due)} · falladas ${e.miss}</span><br>${esc(QMAP[id].stem.slice(0, 120))}${QMAP[id].stem.length > 120 ? '…' : ''}</summary><div class="stack" style="margin-top:8px"><p><b>Correcta:</b> ${esc(QMAP[id].opts[QMAP[id].ans])}</p><p class="muted">${esc(QMAP[id].exp)}</p></div></details></li>`).join('')}</ul>`;
  ACT.errAll = () => startQuiz({ mode: 'errors', title: 'Cuaderno de errores', qids: shuffle(items.map(([id]) => id)), tab: 'repaso', back: 'errores' });
};
VIEWS.perlas = (m) => {
  const ls = C.topics.filter((t) => hasContent(t.id));
  m.innerHTML = `<button class="btn small ghost" data-go="repaso" style="align-self:flex-start">← Repaso</button><h1>Perlas para el final</h1><p class="muted">Lo que más se olvida y lo que más preguntan, tema por tema: los ${ls.length} temas del parcial.</p>
  ${ls.map((t) => { const L = C.lessons[t.id]; return `<section class="panel"><div class="row">${subjChip(t.subj)}<span class="small muted">Tema ${t.n}</span></div><h2>${esc(t.title)}</h2>
  <div class="box mnemo"><span class="lab">Mnemotecnia</span><span class="big">${esc(L.mnemo.t)}</span><p>${esc(L.mnemo.d)}</p></div>
  <div class="box pearl"><span class="lab">Perla</span><p>${esc(L.pearl)}</p></div><div class="box trap"><span class="lab">Trampa</span><p>${esc(L.trap)}</p></div></section>`; }).join('')}`;
};

// ═══════════ Más: herramientas
VIEWS.mas = (m) => {
  const tiles = [
    ['plan', 'Plan', 'Día por día hasta el parcial'], ['diag', 'Diagnóstico', S.diag.done ? 'Ver tu mapa de calor' : '30 preguntas para empezar'],
    ['sim', 'Simulacro', 'Con reloj, como el examen'], ['taller', 'Taller', 'Algoritmos, ECG, gasometría y simuladores'], ['calc', 'Calculadoras', 'Escalas que te explican el resultado'],
    ['comp', 'Comparadores', 'Lado a lado: × '], ['ruleta', 'Ruleta', '¿Cuál será tu enfermedad?'],
    ['videos', 'Videos', 'Un video por tema, con voz'], ['perlas', 'Perlas', 'Repaso final de un vistazo'], ['logros', 'Logros', `${Object.keys(S.ach).length} de ${ACH.length}`],
    ['ajustes', 'Ajustes', 'Sonido, reloj y respaldo']
  ];
  m.innerHTML = `<h1>Más</h1><div class="tools">${tiles.map(([v, t, d]) => `<button class="tile" data-go="${v}"><span class="t">${t}</span><span class="d">${esc(d)}</span></button>`).join('')}</div>`;
};
VIEWS.comp = (m) => {
  const avail = Object.keys(C.compares).sort((a, b) => TOP[C.compares[a].topic].n - TOP[C.compares[b].topic].n);
  m.innerHTML = `<button class="btn small ghost" data-go="mas" style="align-self:flex-start">← Más</button><h1>Comparadores</h1><p class="muted">Las parejas que más se confunden en el examen, lado a lado.</p>
  ${avail.map((cid) => `<section class="stack"><p class="small muted">Tema ${TOP[C.compares[cid].topic].n} · ${esc(TOP[C.compares[cid].topic].title)}</p>${compareHTML(cid)}</section>`).join('')}`;
};
VIEWS.logros = (m) => {
  const ri = rankIdx(S.xp);
  m.innerHTML = `<button class="btn small ghost" data-go="mas" style="align-self:flex-start">← Más</button><h1>Logros</h1>
  <section class="panel"><h2>Rangos</h2><ul class="ranks">${C.ranks.map((r, k) => `<li class="${k === ri ? 'me' : ''}"><span class="rk">${esc(r.name)}</span><span>${esc(r.long)}</span><span class="rx">${r.xp} XP</span></li>`).join('')}</ul></section>
  <section class="panel"><h2>${Object.keys(S.ach).length} de ${ACH.length} logros</h2><div class="ach">${ACH.map(([id, n, d]) => `<div class="achi${S.ach[id] ? ' got' : ''}"><span class="row" style="gap:6px">${S.ach[id] ? svgSpr(SPR.star, { X: '#F2C14E' }, 2) : icon('lock', '#8790CC', 2)}<span class="t">${esc(n)}</span></span><span class="d">${esc(d)}</span></div>`).join('')}</div></section>`;
};
VIEWS.ajustes = (m) => {
  m.innerHTML = `<button class="btn small ghost" data-go="mas" style="align-self:flex-start">← Más</button><h1>Ajustes</h1>
  <section class="panel"><h2>Sonido</h2><p class="muted">Efectos 8-bit al acertar, fallar y girar la ruleta.</p><button class="btn" data-act="snd">${S.settings.sound ? 'Apagar sonido' : 'Activar sonido'}</button></section>
  <section class="panel"><h2>Reloj del modo guardia</h2><div class="field"><label for="tmr">Segundos para cada decisión A/B</label><select id="tmr" data-chg="timer">${[0, 5, 10, 15, 20, 30].map((v) => `<option value="${v}"${S.settings.timer === v ? ' selected' : ''}>${v ? v + ' segundos' : 'Sin reloj'}</option>`).join('')}</select></div><p class="small muted">5 segundos es modo difícil: primero aprende con 15 o 20.</p></section>
  <section class="panel"><h2>Tiempo de estudio</h2><p class="muted">Se ajusta en el plan, y el plan se rehace solo.</p><button class="btn" data-go="plan">Abrir el plan</button></section>
  <section class="panel"><h2>Tu progreso en tu cuenta</h2><p class="muted" id="syncst">${esc(syncText())}</p>${SY.ref ? '<button class="btn" data-act="syncNow">Sincronizar ahora</button>' : ''}</section>
  <section class="panel"><h2>Respaldo</h2><p class="muted">Tu progreso vive solo en este navegador. Copia el código para pasarlo a otro dispositivo o guardarlo.</p><button class="btn" data-act="bkCopy">Copiar mi respaldo</button><div class="field"><label for="bk">Pega aquí un respaldo para restaurarlo</label><textarea id="bk" spellcheck="false"></textarea></div><button class="btn" data-act="bkLoad">Restaurar</button></section>
  <section class="panel"><h2>Empezar de cero</h2><button class="btn" data-act="wipe" style="border-color:var(--bad);color:var(--bad)">Borrar todo mi progreso</button></section>`;
  CHG.timer = (el) => { S.settings.timer = +el.value; save(); toast(+el.value ? `Reloj: ${el.value} s por decisión` : 'Reloj apagado'); };
  ACT.syncNow = async () => {
    if (!(S._at > SY.pushed)) { toast('Ya está todo guardado en tu cuenta'); return; }
    await syncPush(); toast(SY.state === 'on' ? 'Guardado en tu cuenta' : 'No se pudo ahora; se reintenta sola');
  };
  ACT.bkCopy = () => {
    const code = btoa(unescape(encodeURIComponent(JSON.stringify(S))));
    const ta = $('#bk');
    const fallback = () => { ta.value = code; ta.focus(); ta.select(); toast('Selecciona y copia el texto del cuadro'); };
    try { navigator.clipboard.writeText(code).then(() => toast('Respaldo copiado'), fallback); } catch (e) { fallback(); }
  };
  ACT.bkLoad = () => {
    try {
      const o = JSON.parse(decodeURIComponent(escape(atob($('#bk').value.trim()))));
      if (!o || typeof o.xp !== 'number') throw new Error('x');
      confirmBox('¿Restaurar el respaldo?', 'Se reemplaza tu progreso actual por el del respaldo.', 'Restaurar', () => { localStorage.setItem(KEY, JSON.stringify(o)); S = load(); toast('Respaldo restaurado'); go('home'); });
    } catch (e) { toast('Ese texto no es un respaldo válido. Cópialo completo.'); }
  };
  ACT.wipe = () => confirmBox('¿Borrar todo?', 'Se pierden XP, diagnóstico, plan, tarjetas y cuaderno de errores, aquí y en tu cuenta (en todos tus dispositivos). No se puede deshacer.', 'Borrar', () => { S = fresh(); buildPlan(); save(); go('home'); });
};

// ═══════════ Simulacro
VIEWS.sim = (m) => {
  const pool = C.questions.length, lens = [...new Set([20, 40, pool].filter((v) => v <= pool))];
  m.innerHTML = `<button class="btn small ghost" data-go="mas" style="align-self:flex-start">← Más</button><h1>Simulacro</h1>
  <p class="muted">Como el examen: sin explicaciones hasta el final, con reloj (75 s por pregunta) y resultados por materia. Las que falles entran a tu cuaderno de errores.</p>
  <div class="note">El banco tiene ${pool} preguntas de los 30 temas. El simulacro las mezcla al azar; el de ${pool} es el banco completo.</div>
  <div class="stack">${lens.map((n) => `<button class="btn ${n === 40 ? 'gold-btn ' : ''}big" data-act="simgo" data-n="${n}">${n} preguntas · ${Math.round((n * 75) / 60)} min</button>`).join('')}</div>
  ${S.sims.length ? `<section class="panel"><h2>Tus simulacros</h2><ul class="blks">${S.sims.slice().reverse().map((s) => `<li class="blk"><span class="blk-t">${fmtDay(s.date)} · ${s.n} preguntas</span><span class="blk-m">${pct(s.ok / s.n)}%</span></li>`).join('')}</ul></section>` : ''}`;
  ACT.simgo = (b) => { const n = +b.dataset.n; startQuiz({ mode: 'sim', title: `Simulacro de ${n}`, qids: shuffle(C.questions.map((q) => q.id)).slice(0, n), tab: 'mas', back: 'sim', deadline: Date.now() + n * 75000 }); };
};

// ═══════════ Ruleta
const WHEEL = { rot: -Math.PI / 2 - Math.PI / 6, busy: false, last: null };
VIEWS.ruleta = (m) => {
  WHEEL.busy = false;
  m.innerHTML = `<h1>¿Cuál será tu enfermedad?</h1><p class="muted">Gira: te toca una materia y un caso clínico al azar. Si aciertas, XP ×1.5.</p>
  <div class="wheel-wrap gold">${GEMS}<div class="pointer"></div><canvas id="wheel" width="72" height="72" role="img" aria-label="Ruleta con las seis materias"></canvas></div>
  <button class="btn gold-btn big" data-act="spin">Girar</button><div id="wres" aria-live="polite"></div>`;
  const cv = $('#wheel'), ctx = cv.getContext('2d'), g = Pix(ctx), img = ctx.createImageData(72, 72);
  const seg = Math.PI / 3, TAU = Math.PI * 2, norm = (a) => ((a % TAU) + TAU) % TAU;
  const rgb = (h) => [parseInt(h.slice(1, 3), 16), parseInt(h.slice(3, 5), 16), parseInt(h.slice(5, 7), 16)];
  const cols = C.subjects.map((s) => rgb(s.color)), gold = rgb('#F2C14E'), goldL = rgb('#FFE7A6'), dark = rgb('#090B20');
  const draw = (a) => {
    for (let y = 0; y < 72; y++) for (let x = 0; x < 72; x++) {
      const dx = x - 35.5, dy = y - 35.5, r = Math.hypot(dx, dy), o = (y * 72 + x) * 4;
      let c = null;
      if (r <= 35) {
        if (r > 32) { const ang = norm(Math.atan2(dy, dx)); c = Math.floor(ang / (Math.PI / 12)) % 2 ? gold : goldL; }
        else if (r < 4) c = gold;
        else if (r < 6) c = dark;
        else {
          const ang = norm(Math.atan2(dy, dx) - a), fr = ang % seg;
          c = fr * r < 0.9 || (seg - fr) * r < 0.9 ? dark : cols[Math.floor(ang / seg) % 6];
        }
      }
      if (c) { img.data[o] = c[0]; img.data[o + 1] = c[1]; img.data[o + 2] = c[2]; img.data[o + 3] = 255; } else img.data[o + 3] = 0;
    }
    ctx.putImageData(img, 0, 0);
    C.subjects.forEach((s, k) => {
      const ca = a + (k + 0.5) * seg, rows = SPR[s.icon], w = rows[0].length, h = rows.length;
      g.spr(rows, Math.round(35.5 + Math.cos(ca) * 21 - w / 2), Math.round(35.5 + Math.sin(ca) * 21 - h / 2), { X: '#090B20', W: '#FFFFFF', D: '#090B20' });
    });
  };
  const at = (a) => Math.floor(norm(-Math.PI / 2 - a) / seg) % 6;
  draw(WHEEL.rot);
  if (WHEEL.last) showRes(WHEEL.last);
  ACT.spin = () => {
    if (WHEEL.busy) return;
    WHEEL.busy = true; $('#wres').innerHTML = '';
    const k = Math.floor(Math.random() * 6), a0 = WHEEL.rot, base = -Math.PI / 2 - (k + 0.5) * seg;
    const aT = base + TAU * Math.ceil((a0 + 5 * TAU - base) / TAU);
    const finish = () => { WHEEL.rot = norm(aT); WHEEL.busy = false; WHEEL.last = C.subjects[k].id; S.spins++; checkAch(); save(); beep('up'); showRes(WHEEL.last); };
    if (reduce) { draw(aT); finish(); return; }
    let t0 = null, prev = at(a0);
    loop((ts) => {
      if (t0 == null) t0 = ts;
      const p = Math.min(1, (ts - t0) / 3400), e = 1 - Math.pow(1 - p, 3), a = a0 + (aT - a0) * e;
      draw(a);
      const cur = at(a); if (cur !== prev) { prev = cur; beep('tick'); }
      if (p >= 1) { stopLoops(); finish(); }
    });
  };
  function showRes(sid) {
    const s = SUBJ[sid];
    $('#wres').innerHTML = `<section class="panel" style="border-color:${s.color}"><p class="eyebrow">Te tocó</p><p class="row" style="gap:10px">${subjIcon(sid, 3)}<span class="h2" style="color:${s.color}">${esc(s.name)}</span></p><button class="btn gold-btn big" data-act="wplay">Resolver el caso</button></section>`;
    ACT.wplay = () => {
      const pool = C.questions.filter((q) => q.subj === sid), fresh = pool.filter((q) => !(S.qs[q.id] && S.qs[q.id].last === 1));
      const pick = (fresh.length ? fresh : pool)[Math.floor(Math.random() * (fresh.length || pool.length))];
      WHEEL.last = null;
      startQuiz({ mode: 'single', title: `Ruleta · ${s.short}`, qids: [pick.id], xpMult: 1.5, tab: 'mas', back: 'ruleta' });
    };
  }
};

// ═══════════ Calculadoras
const TIMI_ITEMS = ['Edad ≥65 años', '≥3 factores de riesgo coronario (HTA, DM, dislipidemia, tabaquismo, historia familiar)', 'Enfermedad coronaria conocida (estenosis ≥50%)', 'Aspirina en los últimos 7 días', 'Angina grave reciente (≥2 episodios en 24 h)', 'Desviación del ST ≥0.5 mm', 'Marcador cardiaco positivo'];
const WELLS = [['Signos clínicos de TVP', 3], ['El TEP es el diagnóstico más probable', 3], ['FC >100 lpm', 1.5], ['Inmovilización ≥3 días o cirugía en las últimas 4 semanas', 1.5], ['TVP o TEP previos', 1.5], ['Hemoptisis', 1], ['Cáncer activo', 1]];
const SPESI = ['Edad >80 años', 'Cáncer', 'Insuficiencia cardiaca o enfermedad pulmonar crónica', 'FC ≥110 lpm', 'PAS <100 mmHg', 'SpO2 <90%'];
const num = (id) => { const v = parseFloat(($('#' + id) || {}).value); return Number.isFinite(v) ? v : null; };
const fx = (v, d = 1) => (Math.round(v * 10 ** d) / 10 ** d).toFixed(d);
const CALCS = [
  { id: 'timi', name: 'TIMI para SCASEST', topic: 'sca',
    form: () => `<div class="checks">${TIMI_ITEMS.map((x, i) => `<label><input type="checkbox" id="c-timi-${i}" data-inp="calc"${[0, 1, 5].includes(i) ? ' checked' : ''}><span>${x}</span></label>`).join('')}</div>`,
    run: () => {
      const sc = TIMI_ITEMS.filter((_, i) => $('#c-timi-' + i).checked).length;
      const risk = [4.7, 4.7, 8.3, 13.2, 19.9, 26.2, 40.9, 40.9][sc], cat = sc <= 2 ? 'bajo' : sc <= 4 ? 'intermedio' : 'alto';
      return `<span class="lab">Puntaje TIMI</span><span class="big">${sc}/7</span><p><b>Riesgo ${cat}</b>: ${String(risk).replace('.', '.')}% de muerte, infarto nuevo o isquemia grave que requiere revascularización urgente a 14 días.</p><p class="small">${sc >= 3 ? 'Con TIMI ≥3 se favorece la estrategia invasiva temprana. La ESC 2023 decide el &lt;24 h con GRACE &gt;140 o IAMSEST confirmado.' : 'Riesgo bajo. Si además la troponina de alta sensibilidad descarta infarto, se puede optar por una estrategia selectiva (prueba de isquemia o angio-TC).'}</p>`;
    } },
  { id: 'ckd', name: 'TFG por CKD-EPI 2021', topic: 'dm2',
    form: () => `<div class="fgrid"><div class="field"><label for="c-ckd-age">Edad (años)</label><input id="c-ckd-age" type="number" inputmode="decimal" value="64" data-inp="calc"></div><div class="field"><label for="c-ckd-sex">Sexo</label><select id="c-ckd-sex" data-chg="calc"><option value="h">Hombre</option><option value="m">Mujer</option></select></div><div class="field"><label for="c-ckd-cr">Creatinina (mg/dL)</label><input id="c-ckd-cr" type="number" inputmode="decimal" step="0.1" value="1.8" data-inp="calc"></div></div>`,
    run: () => {
      const age = num('c-ckd-age'), cr = num('c-ckd-cr'), f = $('#c-ckd-sex').value === 'm';
      if (!age || !cr) return '<p>Escribe edad y creatinina.</p>';
      const k = f ? 0.7 : 0.9, al = f ? -0.241 : -0.302;
      const e = 142 * Math.pow(Math.min(cr / k, 1), al) * Math.pow(Math.max(cr / k, 1), -1.2) * Math.pow(0.9938, age) * (f ? 1.012 : 1);
      const G = e >= 90 ? 'G1' : e >= 60 ? 'G2' : e >= 45 ? 'G3a' : e >= 30 ? 'G3b' : e >= 15 ? 'G4' : 'G5';
      const met = e >= 45 ? 'dosis habitual' : e >= 30 ? 'no iniciarla; si ya la toma, máximo 1 000 mg/día' : 'suspenderla';
      return `<span class="lab">TFG estimada</span><span class="big">${Math.round(e)} <small>mL/min/1.73 m²</small></span><p>Categoría <b>${G}</b> (si se mantiene más de 3 meses y con albuminuria para completar la clasificación).</p><ul class="small" style="margin:0;padding-left:18px"><li>Metformina: ${met}.</li><li>iSGLT2: ${e >= 20 ? 'se puede iniciar para proteger riñón y corazón' : 'no iniciar con TFG &lt;20'}.</li></ul><p class="small muted">Solo es válida con creatinina estable: en una LRA la TFG estimada no sirve para estadificar.</p>`;
    } },
  { id: 'kdigo', name: 'Estadio KDIGO de LRA', topic: 'lra',
    form: () => `<div class="fgrid"><div class="field"><label for="c-kd-b">Creatinina basal (mg/dL)</label><input id="c-kd-b" type="number" inputmode="decimal" step="0.1" value="0.9" data-inp="calc"></div><div class="field"><label for="c-kd-a">Creatinina actual (mg/dL)</label><input id="c-kd-a" type="number" inputmode="decimal" step="0.1" value="2.6" data-inp="calc"></div></div>
    <div class="field"><label for="c-kd-u">Uresis</label><select id="c-kd-u" data-chg="calc"><option value="0">Sin dato o normal</option><option value="1">&lt;0.5 mL/kg/h por 6–12 h</option><option value="2">&lt;0.5 mL/kg/h por ≥12 h</option><option value="3">&lt;0.3 mL/kg/h por ≥24 h o anuria ≥12 h</option></select></div>
    <div class="checks"><label><input type="checkbox" id="c-kd-48" data-inp="calc" checked><span>El aumento ocurrió en ≤48 h</span></label><label><input type="checkbox" id="c-kd-trr" data-inp="calc"><span>Se inició terapia de reemplazo renal</span></label></div>`,
    run: () => {
      const b = num('c-kd-b'), a = num('c-kd-a'), u = +$('#c-kd-u').value, h48 = $('#c-kd-48').checked, trr = $('#c-kd-trr').checked;
      if (!b || !a) return '<p>Escribe las dos creatininas.</p>';
      const ratio = a / b;
      const sc = trr || ratio >= 3 || a >= 4 ? 3 : ratio >= 2 ? 2 : ratio >= 1.5 || (h48 && a - b >= 0.3) ? 1 : 0;
      const st = Math.max(sc, u);
      return `<span class="lab">Resultado</span><span class="big">${st ? 'Estadio ' + st : 'Sin LRA'}</span><p>Por creatinina: ${sc ? '<b>estadio ' + sc + '</b>' : 'no cumple'} (${fx(ratio, 2)} veces la basal; cambio de ${fx(a - b)} mg/dL). Por uresis: ${u ? '<b>estadio ' + u + '</b>' : 'no cumple o sin dato'}. Se queda el mayor.</p><p class="small muted">Estadio 1: 1.5–1.9× o ↑ ≥0.3 en 48 h · Estadio 2: 2.0–2.9× · Estadio 3: ≥3×, Cr ≥4.0 o diálisis.</p>`;
    } },
  { id: 'fena', name: 'FENa y FEUrea', topic: 'lra',
    form: () => `<div class="fgrid"><div class="field"><label for="c-f-pna">Na plasmático (mEq/L)</label><input id="c-f-pna" type="number" inputmode="decimal" value="138" data-inp="calc"></div><div class="field"><label for="c-f-una">Na urinario (mEq/L)</label><input id="c-f-una" type="number" inputmode="decimal" value="11" data-inp="calc"></div><div class="field"><label for="c-f-pcr">Cr plasmática (mg/dL)</label><input id="c-f-pcr" type="number" inputmode="decimal" step="0.1" value="2.6" data-inp="calc"></div><div class="field"><label for="c-f-ucr">Cr urinaria (mg/dL)</label><input id="c-f-ucr" type="number" inputmode="decimal" value="120" data-inp="calc"></div><div class="field"><label for="c-f-pu">BUN plasmático (opcional)</label><input id="c-f-pu" type="number" inputmode="decimal" value="64" data-inp="calc"></div><div class="field"><label for="c-f-uu">BUN urinario (opcional)</label><input id="c-f-uu" type="number" inputmode="decimal" value="900" data-inp="calc"></div></div>`,
    run: () => {
      const pna = num('c-f-pna'), una = num('c-f-una'), pcr = num('c-f-pcr'), ucr = num('c-f-ucr'), pu = num('c-f-pu'), uu = num('c-f-uu');
      if (!pna || una == null || !pcr || !ucr) return '<p>Completa sodio y creatinina en plasma y orina.</p>';
      const fe = (una * pcr) / (pna * ucr) * 100;
      const ife = fe < 1 ? 'Sugiere <b>prerrenal</b>. Descarta las excepciones: contraste, mioglobina o hemoglobina, GN aguda, obstrucción temprana.' : fe > 2 ? 'Sugiere <b>NTA</b> (u obstrucción tardía). Ojo si usa diurético.' : 'Zona gris (1–2%).';
      let fu = '';
      if (pu && uu != null) { const v = (uu * pcr) / (pu * ucr) * 100; fu = `<p><b>FEUrea ${fx(v)}%</b>: ${v < 35 ? 'prerrenal' : v > 50 ? 'NTA' : 'indeterminada'}. Úsala si el paciente toma diuréticos.</p>`; }
      return `<span class="lab">FENa</span><span class="big">${fx(fe, 2)}%</span><p>${ife}</p>${fu}<p class="small muted">FENa = (Na orina × Cr plasma) ÷ (Na plasma × Cr orina) × 100. En la FEUrea usa las mismas unidades de urea (o BUN) en plasma y orina.</p>`;
    } },
  { id: 'imc', name: 'IMC', topic: 'dm2',
    form: () => `<div class="fgrid"><div class="field"><label for="c-i-w">Peso (kg)</label><input id="c-i-w" type="number" inputmode="decimal" value="96" data-inp="calc"></div><div class="field"><label for="c-i-h">Talla (cm)</label><input id="c-i-h" type="number" inputmode="decimal" value="170" data-inp="calc"></div></div>`,
    run: () => {
      const w = num('c-i-w'), h = num('c-i-h');
      if (!w || !h) return '<p>Escribe peso y talla.</p>';
      const b = w / Math.pow(h / 100, 2);
      const cl = b < 18.5 ? 'Bajo peso' : b < 25 ? 'Normal' : b < 30 ? 'Sobrepeso' : b < 35 ? 'Obesidad grado I' : b < 40 ? 'Obesidad grado II' : 'Obesidad grado III';
      return `<span class="lab">IMC</span><span class="big">${fx(b)} <small>kg/m²</small></span><p><b>${cl}</b>.</p><p class="small">${b >= 25 ? 'Con IMC ≥25 y algún factor de riesgo, la ADA indica tamizaje de diabetes a cualquier edad (en todos, desde los 35 años).' : 'Tamizaje de diabetes en todos desde los 35 años.'}${b >= 30 ? ' Si tiene DM2 y el peso es prioridad: semaglutida o tirzepatida.' : ''}</p>`;
    } },
  { id: 'smet', name: 'Criterios de síndrome metabólico', topic: 'smdl',
    form: () => `<div class="fgrid"><div class="field"><label for="c-sm-sex">Sexo</label><select id="c-sm-sex" data-chg="calc"><option value="h">Hombre</option><option value="m" selected>Mujer</option></select></div><div class="field"><label for="c-sm-cut">Corte de cintura</label><select id="c-sm-cut" data-chg="calc"><option value="idf">IDF Latinoamérica (90/80)</option><option value="atp">ATP III (102/88)</option></select></div><div class="field"><label for="c-sm-w">Cintura (cm)</label><input id="c-sm-w" type="number" inputmode="decimal" value="92" data-inp="calc"></div><div class="field"><label for="c-sm-tg">Triglicéridos (mg/dL)</label><input id="c-sm-tg" type="number" inputmode="decimal" value="168" data-inp="calc"></div><div class="field"><label for="c-sm-hdl">HDL (mg/dL)</label><input id="c-sm-hdl" type="number" inputmode="decimal" value="46" data-inp="calc"></div><div class="field"><label for="c-sm-glu">Glucosa en ayuno (mg/dL)</label><input id="c-sm-glu" type="number" inputmode="decimal" value="96" data-inp="calc"></div><div class="field"><label for="c-sm-pas">PAS (mmHg)</label><input id="c-sm-pas" type="number" inputmode="decimal" value="124" data-inp="calc"></div><div class="field"><label for="c-sm-pad">PAD (mmHg)</label><input id="c-sm-pad" type="number" inputmode="decimal" value="78" data-inp="calc"></div></div>
    <div class="checks"><label><input type="checkbox" id="c-sm-ttg" data-inp="calc"><span>Toma fármaco para TG o HDL (fibrato, niacina)</span></label><label><input type="checkbox" id="c-sm-tha" data-inp="calc"><span>Toma antihipertensivo</span></label><label><input type="checkbox" id="c-sm-tgl" data-inp="calc"><span>Toma fármaco para la glucosa</span></label></div>`,
    run: () => {
      const f = $('#c-sm-sex').value === 'm', atp = $('#c-sm-cut').value === 'atp';
      const w = num('c-sm-w'), tg = num('c-sm-tg'), hdl = num('c-sm-hdl'), glu = num('c-sm-glu'), pas = num('c-sm-pas'), pad = num('c-sm-pad');
      const tTg = $('#c-sm-ttg').checked, tHa = $('#c-sm-tha').checked, tGl = $('#c-sm-tgl').checked;
      const wc = atp ? (f ? 88 : 102) : (f ? 80 : 90), hc = f ? 50 : 40;
      const items = [
        ['Cintura', w != null && w >= wc, `≥${wc} cm`],
        ['Triglicéridos', (tg != null && tg >= 150) || tTg, '≥150 mg/dL o tratamiento'],
        ['HDL bajo', (hdl != null && hdl < hc) || tTg, `<${hc} mg/dL o tratamiento`],
        ['Presión arterial', (pas != null && pas >= 130) || (pad != null && pad >= 85) || tHa, '≥130/85 mmHg o tratamiento'],
        ['Glucosa', (glu != null && glu >= 100) || tGl, '≥100 mg/dL o tratamiento']
      ];
      const n = items.filter((x) => x[1]).length;
      return `<span class="lab">Criterios cumplidos</span><span class="big">${n}/5</span><p><b>${n >= 3 ? 'Sí tiene síndrome metabólico' : 'No cumple síndrome metabólico'}</b> (se necesitan 3 de 5, criterios armonizados 2009).</p><ul class="small" style="margin:0;padding-left:18px">${items.map(([k, ok, d]) => `<li>${ok ? '✔' : '✘'} ${k}: ${d}</li>`).join('')}</ul><p class="small muted">${n >= 3 ? 'Tratamiento: bajar 5–10% del peso, ejercicio ≥150 min/semana y tratar cada componente; calcula su riesgo cardiovascular.' : 'Aunque no cumpla, trata cada factor que salga alterado.'} El corte de cintura cambia según la guía y la población.</p>`;
    } },
  { id: 'ldl', name: 'Meta de LDL según riesgo (ESC/EAS)', topic: 'smdl',
    form: () => `<div class="field"><label for="c-ldl-r">Categoría de riesgo</label><select id="c-ldl-r" data-chg="calc"><option value="4">Muy alto: ECV aterosclerótica, DM con daño a órgano o ≥3 FR, TFG &lt;30, SCORE2 muy alto</option><option value="3">Alto: LDL &gt;190, PA ≥180/110, HF, DM ≥10 años, TFG 30–59, SCORE2 alto</option><option value="2">Moderado: DM joven &lt;10 años sin FR, SCORE2 moderado</option><option value="1">Bajo</option></select></div>
    <div class="fgrid"><div class="field"><label for="c-ldl-b">LDL basal sin tratamiento (mg/dL)</label><input id="c-ldl-b" type="number" inputmode="decimal" value="160" data-inp="calc"></div><div class="field"><label for="c-ldl-a">LDL actual (mg/dL)</label><input id="c-ldl-a" type="number" inputmode="decimal" value="160" data-inp="calc"></div></div>
    <div class="checks"><label><input type="checkbox" id="c-ldl-2" data-inp="calc"><span>Segundo evento vascular en menos de 2 años con estatina a dosis máxima</span></label></div>`,
    run: () => {
      const r = +$('#c-ldl-r').value, b = num('c-ldl-b'), a = num('c-ldl-a'), rec = $('#c-ldl-2').checked;
      if (!b || !a) return '<p>Escribe el LDL basal y el actual.</p>';
      const goal = r === 4 ? (rec ? 40 : 55) : r === 3 ? 70 : r === 2 ? 100 : 116;
      const need50 = r >= 3, target = need50 ? Math.min(goal, b * 0.5) : goal;
      const ok = a < goal && (!need50 || a <= b * 0.5), drop = a > target ? 1 - target / a : 0;
      const step = drop <= 0 ? 'Ya está en meta: mantén el tratamiento y revisa el perfil cada 6–12 meses.' : drop <= 0.3 ? 'Estatina de intensidad moderada o, si ya la toma, subir a alta intensidad (o agregar ezetimiba, que baja ~20–25% más).' : drop <= 0.5 ? 'Estatina de alta intensidad (atorvastatina 40–80 mg o rosuvastatina 20–40 mg) baja ~50%.' : drop <= 0.65 ? 'Estatina de alta intensidad + ezetimiba (en conjunto ~65%).' : 'Estatina de alta intensidad + ezetimiba y probablemente un iPCSK9 (este baja ~60% adicional).';
      return `<span class="lab">Meta de LDL</span><span class="big">&lt;${goal} <small>mg/dL</small></span><p>${need50 ? `Y además reducir ≥50% de la basal: <b>≤${Math.round(b * 0.5)} mg/dL</b>. ` : ''}<b>${ok ? 'En meta' : 'Fuera de meta'}</b>: ${a > target ? `le falta bajar ${pct(drop)}% (a ${Math.round(target)} mg/dL o menos).` : 'cumple.'}</p><p class="small">${step}</p><p class="small muted">${rec ? 'Con segundo evento en menos de 2 años, la ESC/EAS permite considerar &lt;40 mg/dL. ' : ''}Revisa el LDL 4–6 semanas después de cada cambio. La ACC/AHA usa umbrales por grupo, no metas.</p>`;
    } },
  { id: 'mentzer', name: 'Índice de Mentzer', topic: 'anemias',
    form: () => `<div class="fgrid"><div class="field"><label for="c-mz-v">VCM (fL)</label><input id="c-mz-v" type="number" inputmode="decimal" value="64" data-inp="calc"></div><div class="field"><label for="c-mz-r">Eritrocitos (millones/µL)</label><input id="c-mz-r" type="number" inputmode="decimal" step="0.1" value="5.9" data-inp="calc"></div></div>`,
    run: () => {
      const v = num('c-mz-v'), r = num('c-mz-r');
      if (!v || !r) return '<p>Escribe VCM y eritrocitos.</p>';
      const i = v / r;
      return `<span class="lab">Índice de Mentzer</span><span class="big">${fx(i)}</span><p><b>${i < 13 ? 'Sugiere rasgo talasémico' : i > 13 ? 'Sugiere ferropenia' : 'Indeterminado (=13)'}</b>.</p><p class="small">${i < 13 ? 'La médula produce muchos eritrocitos pequeños. Confirma con ferritina normal y electroforesis de hemoglobina (HbA2 >3.5% en β-talasemia menor). No des hierro.' : 'La médula produce pocos eritrocitos y pequeños. Confirma con ferritina baja y busca la causa del sangrado.'}</p><p class="small muted">Mentzer = VCM ÷ eritrocitos en millones. Es orientativo; solo aplica a anemia microcítica.</p>`;
    } },
  { id: 'gbs', name: 'Glasgow-Blatchford', topic: 'stda',
    form: () => `<div class="fgrid"><div class="field"><label for="c-gb-sex">Sexo</label><select id="c-gb-sex" data-chg="calc"><option value="h">Hombre</option><option value="m">Mujer</option></select></div><div class="field"><label for="c-gb-bun">BUN (mg/dL)</label><input id="c-gb-bun" type="number" inputmode="decimal" value="32" data-inp="calc"></div><div class="field"><label for="c-gb-hb">Hemoglobina (g/dL)</label><input id="c-gb-hb" type="number" inputmode="decimal" step="0.1" value="10.8" data-inp="calc"></div><div class="field"><label for="c-gb-pas">PAS (mmHg)</label><input id="c-gb-pas" type="number" inputmode="decimal" value="104" data-inp="calc"></div><div class="field"><label for="c-gb-fc">FC (lpm)</label><input id="c-gb-fc" type="number" inputmode="decimal" value="104" data-inp="calc"></div></div>
    <div class="checks"><label><input type="checkbox" id="c-gb-mel" data-inp="calc" checked><span>Melena</span></label><label><input type="checkbox" id="c-gb-sin" data-inp="calc"><span>Síncope</span></label><label><input type="checkbox" id="c-gb-hep" data-inp="calc"><span>Enfermedad hepática</span></label><label><input type="checkbox" id="c-gb-ic" data-inp="calc"><span>Insuficiencia cardiaca</span></label></div>`,
    run: () => {
      const f = $('#c-gb-sex').value === 'm', bun = num('c-gb-bun'), hb = num('c-gb-hb'), pas = num('c-gb-pas'), fc = num('c-gb-fc');
      if (bun == null || !hb || !pas || !fc) return '<p>Completa BUN, hemoglobina, PAS y FC.</p>';
      let s = bun >= 70 ? 6 : bun >= 28 ? 4 : bun >= 22.4 ? 3 : bun >= 18.2 ? 2 : 0;
      s += f ? (hb < 10 ? 6 : hb < 12 ? 1 : 0) : (hb < 10 ? 6 : hb < 12 ? 3 : hb < 13 ? 1 : 0);
      s += pas < 90 ? 3 : pas < 100 ? 2 : pas < 110 ? 1 : 0;
      s += fc >= 100 ? 1 : 0;
      s += ($('#c-gb-mel').checked ? 1 : 0) + ($('#c-gb-sin').checked ? 2 : 0) + ($('#c-gb-hep').checked ? 2 : 0) + ($('#c-gb-ic').checked ? 2 : 0);
      return `<span class="lab">Glasgow-Blatchford</span><span class="big">${s}</span><p><b>${s <= 1 ? 'Muy bajo riesgo' : s <= 7 ? 'Requiere hospitalización y endoscopia' : 'Alto riesgo de necesitar intervención'}</b>.</p><p class="small">${s <= 1 ? 'Puede egresar con endoscopia ambulatoria (ESGE 2021).' : 'Reanima, IBP IV y endoscopia en las primeras 24 h tras estabilizar. Transfunde con Hb <7 g/dL (<8 si tiene cardiopatía).'}</p><p class="small muted">El puntaje original usa urea en mmol/L; aquí se convirtió a BUN (urea mmol/L × 2.8).</p>`;
    } },
  { id: 'bisap', name: 'BISAP (pancreatitis)', topic: 'pancrea',
    form: () => `<div class="checks"><label><input type="checkbox" id="c-bi-0" data-inp="calc" checked><span>BUN &gt;25 mg/dL</span></label><label><input type="checkbox" id="c-bi-1" data-inp="calc"><span>Alteración del estado mental (Glasgow &lt;15)</span></label><label><input type="checkbox" id="c-bi-2" data-inp="calc" checked><span>SRIS: ≥2 de T &gt;38 o &lt;36 °C, FC &gt;90, FR &gt;20 o PaCO2 &lt;32, leucocitos &gt;12,000 o &lt;4,000</span></label><label><input type="checkbox" id="c-bi-3" data-inp="calc"><span>Edad &gt;60 años</span></label><label><input type="checkbox" id="c-bi-4" data-inp="calc"><span>Derrame pleural en imagen</span></label></div>`,
    run: () => {
      const s = [0, 1, 2, 3, 4].filter((i) => $('#c-bi-' + i).checked).length;
      return `<span class="lab">BISAP</span><span class="big">${s}/5</span><p><b>${s >= 3 ? 'Riesgo alto' : 'Riesgo bajo'}</b> de pancreatitis grave y muerte${s >= 3 ? ' (mortalidad ~5–20%)' : ' (mortalidad &lt;2%)'}.</p><p class="small">${s >= 3 ? 'Vigilancia estrecha (considera UCI), líquidos guiados por metas y busca falla orgánica persistente (&gt;48 h), que define la pancreatitis grave según Atlanta.' : 'Líquidos moderados, analgesia y vía oral temprana cuando tolere.'}</p><p class="small muted">Se calcula en las primeras 24 h. La gravedad definitiva la da Atlanta revisada (falla orgánica transitoria o persistente y complicaciones locales).</p>`;
    } },
  { id: 'acr', name: 'ACR/EULAR 2010 (AR)', topic: 'ar',
    form: () => `<div class="field"><label for="c-ar-j">Articulaciones con sinovitis</label><select id="c-ar-j" data-chg="calc"><option value="0">1 articulación grande (0)</option><option value="1">2–10 grandes (1)</option><option value="2">1–3 pequeñas (2)</option><option value="3" selected>4–10 pequeñas (3)</option><option value="5">&gt;10, al menos una pequeña (5)</option></select></div>
    <div class="field"><label for="c-ar-s">Serología (FR y anti-CCP)</label><select id="c-ar-s" data-chg="calc"><option value="0">Ambos negativos (0)</option><option value="2" selected>Alguno positivo bajo, ≤3 veces el límite (2)</option><option value="3">Alguno positivo alto, &gt;3 veces el límite (3)</option></select></div>
    <div class="checks"><label><input type="checkbox" id="c-ar-pcr" data-inp="calc"><span>PCR o VSG elevadas (1)</span></label><label><input type="checkbox" id="c-ar-d" data-inp="calc" checked><span>Síntomas ≥6 semanas (1)</span></label></div>`,
    run: () => {
      const s = +$('#c-ar-j').value + +$('#c-ar-s').value + ($('#c-ar-pcr').checked ? 1 : 0) + ($('#c-ar-d').checked ? 1 : 0);
      return `<span class="lab">Puntaje</span><span class="big">${s}/10</span><p><b>${s >= 6 ? 'Clasifica como artritis reumatoide' : 'No clasifica todavía como AR'}</b> (se necesitan ≥6).</p><p class="small">${s >= 6 ? 'Inicia metotrexato lo antes posible (con ácido fólico) y esteroide puente a dosis baja si hace falta. Meta: remisión o baja actividad.' : 'Revalora con el tiempo: muchos pacientes cumplen después. Si hay erosiones típicas en Rx, se clasifica como AR aunque no sume 6.'}</p><p class="small muted">Requisito: al menos una articulación con sinovitis que no se explique por otra enfermedad. Pequeñas: MCF, IFP, 2ª–5ª MTF, IF del pulgar y muñecas. No cuentan IFD, 1ª CMC ni 1ª MTF.</p>`;
    } },
  { id: 'wells', name: 'Wells para TEP', topic: 'tep',
    form: () => `<div class="checks">${WELLS.map(([t, p], i) => `<label><input type="checkbox" id="c-we-${i}" data-inp="calc"${[0, 2].includes(i) ? ' checked' : ''}><span>${t} (${p})</span></label>`).join('')}</div>
    <div class="field"><label for="c-we-age">Edad (para el dímero D ajustado)</label><input id="c-we-age" type="number" inputmode="decimal" value="64" data-inp="calc"></div>`,
    run: () => {
      const s = WELLS.reduce((a, [, p], i) => a + ($('#c-we-' + i).checked ? p : 0), 0), age = num('c-we-age');
      const cut = age && age > 50 ? age * 10 : 500;
      return `<span class="lab">Wells</span><span class="big">${String(s)}</span><p><b>${s > 4 ? 'TEP probable' : 'TEP improbable'}</b> (modelo de 2 niveles) · probabilidad ${s > 6 ? 'alta' : s >= 2 ? 'moderada' : 'baja'} (3 niveles).</p><p class="small">${s > 4 ? 'Angio-TC pulmonar directa; anticoagula mientras si no hay contraindicación. El dímero D no sirve para descartar.' : `Dímero D: si es menor de <b>${cut} µg/L</b>${age && age > 50 ? ' (ajustado por edad: edad × 10)' : ''}, se descarta TEP. Si es positivo, angio-TC.`}</p><p class="small muted">Si el paciente está inestable (choque o PAS &lt;90), no uses Wells: ecocardiograma a la cabecera y trata como TEP de alto riesgo.</p>`;
    } },
  { id: 'spesi', name: 'PESI simplificado (sPESI)', topic: 'tep',
    form: () => `<div class="checks">${SPESI.map((t, i) => `<label><input type="checkbox" id="c-sp-${i}" data-inp="calc"${i === 3 ? ' checked' : ''}><span>${t}</span></label>`).join('')}</div>
    <div class="checks"><label><input type="checkbox" id="c-sp-vd" data-inp="calc"><span>Disfunción del VD en eco o angio-TC</span></label><label><input type="checkbox" id="c-sp-tn" data-inp="calc"><span>Troponina elevada</span></label><label><input type="checkbox" id="c-sp-sh" data-inp="calc"><span>Choque o PAS &lt;90 mmHg sostenida</span></label></div>`,
    run: () => {
      const s = SPESI.filter((_, i) => $('#c-sp-' + i).checked).length, vd = $('#c-sp-vd').checked, tn = $('#c-sp-tn').checked;
      if ($('#c-sp-sh').checked) return '<span class="lab">Riesgo ESC 2019</span><span class="big">Alto</span><p><b>TEP de alto riesgo</b>: heparina no fraccionada + trombólisis sistémica (o embolectomía si está contraindicada).</p>';
      const cat = s === 0 ? (vd || tn ? 'Intermedio' : 'Bajo') : vd && tn ? 'Intermedio-alto' : 'Intermedio-bajo';
      return `<span class="lab">sPESI</span><span class="big">${s}</span><p>${s === 0 ? 'Mortalidad a 30 días ~1%.' : 'Mortalidad a 30 días ~10%.'} <b>Riesgo ESC 2019: ${cat}</b>.</p><p class="small">${cat === 'Bajo' ? 'Apixabán o rivaroxabán; alta temprana o manejo ambulatorio si las condiciones lo permiten.' : cat === 'Intermedio-alto' ? 'Anticoagulación hospitalaria y vigilancia estrecha; trombólisis de rescate solo si se descompensa.' : 'Anticoagulación hospitalaria. La trombólisis no está indicada de rutina.'}</p><p class="small muted">Para riesgo intermedio-alto se necesitan sPESI ≥1 con disfunción del VD y troponina elevada juntas.${s === 0 && (vd || tn) ? ' Con sPESI 0 pero VD o troponina alterados, la ESC 2019 lo deja en riesgo intermedio.' : ''}</p>`;
    } }
];
VIEWS.calc = (m) => {
  const c = CALCS.find((x) => x.id === route.a);
  if (!c) {
    m.innerHTML = `<button class="btn small ghost" data-go="mas" style="align-self:flex-start">← Más</button><h1>Calculadoras</h1><p class="muted">Cada resultado te dice qué significa y qué harías. Vienen con un ejemplo cargado para que veas cómo funcionan.</p>
    <div class="tools">${CALCS.map((x) => `<button class="tile" data-go="calc" data-a="${x.id}"><span class="t">${esc(x.name)}</span><span class="d">Tema ${TOP[x.topic].n} · ${esc(TOP[x.topic].title)}</span></button>`).join('')}</div>`;
    return;
  }
  m.innerHTML = `<button class="btn small ghost" data-go="calc" style="align-self:flex-start">← Calculadoras</button><h1>${esc(c.name)}</h1><section class="panel calc"><p class="example">Ejemplo cargado: cambia los valores con los de tu caso.</p>${c.form()}<div class="out" id="cout" aria-live="polite"></div></section>`;
  const upd = () => { $('#cout').innerHTML = c.run(); };
  CHG.calc = upd; upd();
};

// ═══════════ Arranque
const hot = window.claude && window.claude.hot;
if (hot && typeof hot.snapshot === 'function') {
  hot.snapshot(() => ({ route: ['quiz', 'caso', 'tarjetas'].includes(route.v) ? { v: 'home' } : route }));
}
let started = false;
function start(data) {
  if (!started) { started = true; stars(); }
  const r = data && data.route;
  if (r && VIEWS[r.v]) route = r;
  // El plan se reacomoda una vez al día: lo pendiente de días pasados vuelve a entrar desde hoy.
  if (!S.plan || S.plan.built !== today() || S.plan.start !== C.exam.start) buildPlan();
  render();
  syncInit();
}
if (hot && typeof hot.ready === 'function') hot.ready(start); else start((hot && hot.data) || {});
