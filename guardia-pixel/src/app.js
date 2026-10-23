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
function load() {
  try {
    const raw = localStorage.getItem(KEY);
    if (raw) {
      const o = JSON.parse(raw), f = fresh();
      return { ...f, ...o, settings: { ...f.settings, ...o.settings, budget: { ...f.settings.budget, ...(o.settings && o.settings.budget) } }, diag: { ...f.diag, ...o.diag } };
    }
  } catch (e) { /* sin almacenamiento: se juega sin guardar */ }
  return fresh();
}
let S = load();
function save() { try { localStorage.setItem(KEY, JSON.stringify(S)); } catch (e) { /* ignorar */ } }

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
const topicCost = (t, f = 1) => Math.max(15, Math.round((f * P_BASE[t.pri] * (1.2 - 0.5 * mastery(t.id))) / 5) * 5);
const topicScore = (t) => P_W[t.pri] * (1.25 - mastery(t.id)) - t.n * 0.001;
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
      const av = pending.filter((t) => !sched.has(t.id) && (!availFrom(t) || d >= availFrom(t)));
      if (!av.length) break;
      av.sort((a, b) => topicScore(b) - topicScore(a));
      // El de mayor prioridad si cabe al menos el 60% de su tiempo; si no, el siguiente que quepa completo.
      const t = topicCost(av[0], f) * 0.6 <= rem ? av[0] : av.find((x) => topicCost(x, f) <= rem);
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
    case 'topic': return { title: `Tema ${t.n} · ${t.title}`, sub: topicParts(t.id), go: ['topic', t.id] };
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
  stopLoops(); stopVideo();
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
  <div class="duo">
    <button class="tile" data-go="repaso"><span class="eyebrow">Repaso de hoy</span><span class="n">${cq.due.length + cq.fresh.length}</span><span class="t">tarjetas</span><span class="d">${ed} en el cuaderno de errores</span></button>
    <button class="tile" data-go="ruleta"><span class="eyebrow">Ruleta</span><span class="row" style="gap:4px">${C.subjects.map((s) => subjIcon(s.id, 2)).join('')}</span><span class="t">¿Cuál será tu enfermedad?</span><span class="d">Un caso al azar</span></button>
  </div>
  <button class="carta gold${daily.done ? ' done' : ''}" data-act="carta">${GEMS}<span class="medal">${svgSpr(SPR.mask, MASK_PAL, 4, 'El Enmascarado')}</span><span class="stack" style="gap:6px"><span class="eyebrow" style="color:var(--gold-3)">Carta misteriosa del día</span><span class="h2">${daily.done ? 'Vuelve mañana' : 'El Enmascarado te reta'}</span><span class="small">${daily.done ? (daily.ok ? 'La resolviste: XP doble.' : 'Hoy ganó él. Mañana hay otra.') : 'Una pregunta difícil de cualquier materia · XP doble'}</span></span></button>
  ${S.diag.done ? `<section class="panel"><div class="row"><h2 class="grow">Cómo vas por materia</h2><button class="btn small ghost" data-go="diagres">Mapa de calor</button></div>${subjBars()}</section>` : ''}`;
  ACT.startDiag = startDiag;
  ACT.carta = openCarta;
};
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
  <p class="muted">Ordenado por prioridad y por tus puntos débiles. Los temas de las semanas 5 y 6 aparecen después de su clase (27 oct y 3 nov). El 7 y 8 de noviembre son de simulacro.</p>
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
  const tabs = [['video', 'Video'], ['leccion', 'Lección'], ['anim', 'Animación'], ['preguntas', 'Preguntas'], ['guardia', 'Guardia'], ['tarjetas', 'Tarjetas'], ['jefe', 'Jefe']]
    .filter(([k]) => (k !== 'anim' || L.anim) && (k !== 'guardia' || hasCase) && (k !== 'video' || L.video));
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
const VOICE = C.voice || {};
let VA = null;
function recAudio(tid) {
  if (!VOICE[tid]) return null;
  if (VA && VA.tid === tid) return VA.ok ? VA.el : null;
  hushRec();
  const el = new Audio();
  el.preload = 'auto'; el.setAttribute('playsinline', ''); el.src = `audio/${tid}.mp3`;
  VA = { tid, el, ok: true };
  el.addEventListener('error', () => { if (VA && VA.el === el) VA.ok = false; });
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
  el.innerHTML = `<h2>${esc(A.title)}</h2><div class="awrap" id="awrap"><div class="stage"><canvas width="160" height="120" aria-hidden="true"></canvas><div class="labels"></div></div>
  <div class="cap" aria-live="polite"></div>
  <div class="actrl"><button class="btn small" data-act="aprev">◀ Paso</button><button class="btn small" data-act="aplay"></button><span class="stepn"></span><button class="btn small gold-btn" data-act="anext">Paso ▶</button></div>
  <div class="actrl2"><button class="btn small" data-act="aauto" aria-pressed="false">▶ Reproducir todo</button><button class="btn small" data-act="anarr" aria-pressed="false">Narrar</button><button class="btn small" data-act="acine" aria-pressed="false">⛶ Pantalla</button></div>
  <div class="pips" role="group" aria-label="Pasos">${steps.map((_, i) => `<button data-act="apip" data-i="${i}" aria-label="Paso ${i + 1}"></button>`).join('')}</div></div>
  <p class="small muted">“Reproducir todo” avanza solo; con “Narrar”, una voz lee cada paso.</p>`;
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
  set(0);
  if (!reduce) loop((ts) => { if (last == null) last = ts; const dt = (ts - last) / 1000; last = ts; if (playing) t += Math.min(dt, 0.1); draw(); });
}

// ═══════════ Videos: escenas en pixel art con narración, subtítulos, capítulos y pausas con pregunta
let VS = null, VAUTO = false, VQUEUE = [];
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
function stopVideo() { hush(); clearLater(); if (CINE) setCine(CINE, false); if (VS) VS.dead = true; VS = null; }
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
// Popups de alta retención: 2–4 palabras que brincan al ritmo de la voz, palabra por palabra (karaoke),
// con las palabras clave en grande y ⛔/✅ en prohibiciones y elecciones
function chunks(s) {
  const out = []; let cur = [];
  for (const w of String(s).split(/\s+/).filter(Boolean)) {
    cur.push(w);
    if (cur.length >= 4 || (cur.length >= 2 && /[,;:.?!]$/.test(w))) { out.push(cur.join(' ')); cur = []; }
  }
  if (cur.length) { if (cur.length === 1 && out.length && out[out.length - 1].split(' ').length < 5) out[out.length - 1] += ' ' + cur[0]; else out.push(cur.join(' ')); }
  return out;
}
const KWW = /^(\d[\d.,]*|nunca|siempre|contraindicad[oa]s?|elección|primera|línea|urgencia|urgente|inmediat[oa]|trampa|perla|clave|meta|jamás|evita|prohibid[oa]s?)$/i;
function vPop(c, secs) {
  const el = $('#vsub');
  if (!el) return;
  if (!VS || !VS.cc || !c) { el.innerHTML = ''; return; }
  const words = c.split(' '), low = c.toLowerCase();
  const icon = /\b(nunca|jamás|contraindicad|nada de|evita|prohibid)/.test(low) ? '⛔ ' : /\b(de elección|primera línea|siempre)\b/.test(low) ? '✅ ' : '';
  VS.popN = (VS.popN || 0) + 1;
  el.innerHTML = `<span class="pop r${VS.popN % 3}">${icon}${words.map((w) => `<i class="w${KWW.test(w.replace(/[^\p{L}\d.,]/gu, '').replace(/[.,]$/, '')) ? ' kw' : ''}${secs ? '' : ' on'}">${esc(w)}</i>`).join(' ')}</span>`;
  if (!secs) return;
  const ws = el.querySelectorAll('.w'), lens = words.map((w) => w.length + 2), tot = lens.reduce((a, b) => a + b, 0);
  let acc = 0;
  ws.forEach((w, k) => { const at = (acc / tot) * secs * 1000; acc += lens[k]; if (k === 0) w.classList.add('on'); else later(() => w.classList.add('on'), at); });
}
function vCaption(s, secs) {
  const cs = chunks(s), n = (c) => c.length + 2, tot = cs.reduce((a, c) => a + n(c), 0);
  let acc = 0;
  cs.forEach((c, k) => { const at = (acc / tot) * secs * 1000, d = (n(c) / tot) * secs; acc += n(c); if (k === 0) vPop(c, d); else later(() => vPop(c, d), at); });
}
function vSub(s) { vPop(s, 0); }
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
  vSub(VS.started ? '' : chunks(sentences(x.sc.say)[0] || '')[0] || ''); vReveal(); vProgress(); vDraw(reduce ? 3 : VS.t);
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
  if (first && !$('#vp').classList.contains('cine')) $('#vp').scrollIntoView({ block: 'start', behavior: reduce ? 'auto' : 'smooth' });
  if (VS.sfx) { try { audio(); } catch (e) { /* sin audio */ } }
  if (first && VS.flat[VS.i].si === 0) { vfx('chapter'); const card = $('#vccard'); if (card) { const x = VS.flat[VS.i]; card.innerHTML = `<span>Capítulo ${x.ci + 1}</span><b>${esc(x.ch)}</b>`; card.classList.remove('on'); void card.offsetWidth; card.classList.add('on'); } }
  if (VS.voice) pickVoice();
  if (VS.phase === 'wait') vQuizWait(); else vStep();
}
function vPause() { if (!VS) return; VS.playing = false; hush(); clearLater(); vBtn(); }
function vStep() {
  if (!VS || !VS.playing) return;
  const x = VS.flat[VS.i];
  if (VS.sent >= VS.sents.length) {
    if (VS.phase === 'say' && x.sc.v.k === 'quiz') { VS.phase = 'wait'; vQuizWait(); return; }
    later(() => vGo(VS.i + 1), 650 / VS.speed); return;
  }
  const s = VS.sents[VS.sent];
  vReveal(); vProgress();
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
  if (VS.playing) vStep(); else vSub(chunks(sentences(x.sc.exp)[0] || '')[0] || '');
}
function vEnd() {
  const tid = VS.tid, prev = S.vid[tid] || {}, first = !prev.done;
  VS.playing = false; hush(); clearLater(); vBtn();
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
if (location.hash === '#preview') window.__gp = { show: (i) => { VS.started = true; vBtn(); vShow(i); document.querySelectorAll('#vslide [data-r]').forEach((r) => r.classList.add('on')); const x = VS.flat[VS.i]; vSub(chunks(sentences(x.sc.say)[0] || '')[0] || ''); if (x.sc.v.k === 'quiz') document.querySelectorAll('#vslide .vopt').forEach((b, j) => j === x.sc.v.a && b.classList.add('ok')); return VS.flat.length; },
  // Frases que se graban por tema (tools/narrate): video, explicaciones de quiz, repasos y pasos de la animación
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
  VS = { tid, flat, secs, total, chStart, i: startI, sent: 0, sents: [], phase: 'say', playing: false, started: false, speed: vRate(), voice: S.settings.vvoice !== false, cc: S.settings.vcc !== false, sfx: S.settings.vsfx !== false, combo: 0, t: 0, picked: null };
  let acc = 0;
  const ticks = chSecs.slice(0, -1).map((s) => { acc += s; return `<b style="left:${(acc / total) * 100}%"></b>`; }).join('');
  el.innerHTML = `<div class="vp" id="vp" style="--sc:${SUBJ[t.subj].color}">
    <div class="vscreen" id="vscreen"><div class="vsq" id="vsq"><canvas width="160" height="160" aria-hidden="true"></canvas><div class="vlabels" id="vlabels"></div><div class="vslide" id="vslide"></div><span class="vchip" id="vchip"></span><div class="vccard" id="vccard" aria-hidden="true"></div><div class="vcombo" id="vcombo" aria-live="polite"></div></div>
      <div class="vcap" id="vsub" aria-live="polite"></div>
      <button class="vbig" data-act="vplay" id="vbig"><span class="pl">▶</span>${startI ? 'Continuar el video' : 'Ver el video'}<small>${mmss(total)} · ${chs.length} capítulos · con voz y subtítulos</small></button></div>
    <div class="vbar" id="vbar" data-act="vseek" role="progressbar" aria-label="Avance del video">${ticks}<i id="vfill"></i></div>
    <div class="vctrl">
      <button class="vb" data-act="vprev" aria-label="Capítulo anterior">⏮</button><button class="vb vmain" data-act="vplay" id="vplaybtn" aria-label="Reproducir">▶</button><button class="vb" data-act="vnext" aria-label="Siguiente capítulo">⏭</button>
      <span class="vtime" id="vtime">0:00 / ${mmss(total)}</span>
      <button class="vb" data-act="vspeed" aria-label="Velocidad">${VS.speed}×</button><button class="vb" data-act="vvoice" aria-pressed="${VS.voice}">Voz</button><button class="vb" data-act="vcc" aria-pressed="${VS.cc}">CC</button><button class="vb" data-act="vsfx" aria-pressed="${VS.sfx}" aria-label="Efectos de sonido">♪</button><button class="vb" data-act="vcine" aria-pressed="false" aria-label="Modo cine">⛶</button>
    </div>
  </div>
  <section class="panel tight"><h2>Capítulos</h2><ol class="vchaps" id="vchaps">${chs.map((c, ci) => `<li><button data-act="vch" data-i="${ci}"><span>${ci + 1}. ${esc(c.ch)}</span><span class="small muted">${mmss(chSecs[ci])}</span></button></li>`).join('')}</ol>
  <p class="small muted">${VOICE[tid] ? 'La narración está grabada: sube el volumen. Con “Voz” apagada, el video avanza solo con subtítulos.' : TTS.ok ? 'La voz es la de tu teléfono. ¿No se escucha? Sube el volumen o apaga “Voz” y sigue con subtítulos.' : 'Este navegador no tiene voz: el video avanza con subtítulos.'} ${VQUEUE.length ? `Maratón: quedan ${VQUEUE.length} video(s) después de este.` : ''}</p></section>`;
  VS.g = Pix(el.querySelector('canvas').getContext('2d'));
  recAudio(tid);
  const restart = () => { if (VS.playing) { hush(); clearLater(); if (VS.phase === 'wait') vQuizWait(); else vStep(); } };
  ACT.vplay = () => (VS.playing ? vPause() : vPlay());
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
  ACT.vcc = (b) => { VS.cc = !VS.cc; S.settings.vcc = VS.cc; save(); b.setAttribute('aria-pressed', VS.cc); vSub(VS.cc && VS.sents[VS.sent] ? VS.sents[VS.sent] : ''); };
  ACT.vsfx = (b) => { VS.sfx = !VS.sfx; S.settings.vsfx = VS.sfx; save(); b.setAttribute('aria-pressed', VS.sfx); if (VS.sfx) vfx('pop', 3); };
  ACT.vcine = (b) => { const on = !$('#vp').classList.contains('cine'); setCine($('#vp'), on); b.setAttribute('aria-pressed', on); b.textContent = on ? '✕' : '⛶'; };
  ACT.vpick = (b) => vQuizReveal(+b.dataset.k);
  ACT.vagain = () => { S.vid[tid].pos = 0; save(); VAUTO = true; go('topic', { a: tid, b: 'video' }); };
  ACT.vqstop = () => { VQUEUE = []; clearLater(); toast('Maratón detenido'); vSub(''); const p = document.querySelector('.vs-end p'); if (p) p.remove(); };
  vShow(startI);
  if (!reduce) { let last = null; loop((ts) => { if (!VS) return; if (last == null) last = ts; VS.t += Math.min((ts - last) / 1000, 0.1); last = ts; vDraw(VS.t); }); }
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
  <section class="panel"><h2>Tarjetas</h2><p class="muted">${cq.due.length} para repasar y ${cq.fresh.length} nuevas hoy (máximo 20 nuevas al día). Vuelven a 1, 2, 4, 7 y 12 días según qué tan bien te las sepas.</p><button class="btn gold-btn big" data-act="cardsAll"${tot ? '' : ' disabled'}>${tot ? 'Repasar tarjetas' : 'Al día por hoy'}</button></section>
  <section class="panel"><h2>Cuaderno de errores</h2><p class="muted">${ed.length} para hoy · ${all} en total. Cada pregunta que fallas regresa en 1, 3 y 7 días; a la tercera vez que la aciertas, sale del cuaderno.</p><button class="btn gold-btn big" data-act="errToday"${ed.length ? '' : ' disabled'}>${ed.length ? `Repasar las ${ed.length} de hoy` : 'Nada pendiente hoy'}</button>${all ? '<button class="btn" data-go="errores">Ver el cuaderno completo</button>' : ''}</section>
  <section class="panel"><h2>Videos</h2><p class="muted">Un video por tema con narración, subtítulos y pausas para preguntarte. Ideal para el camino o antes de dormir.</p><button class="btn" data-go="videos">Abrir videos</button></section>
  <section class="panel"><h2>Perlas para el final</h2><p class="muted">Mnemotecnias, perlas y trampas de todos los temas disponibles en una sola página. Para la noche del 9 de noviembre.</p><button class="btn" data-go="perlas">Abrir perlas</button></section>`;
  ACT.cardsAll = () => { FS = makeCardSession(null); go('tarjetas'); };
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
  }).join('')}`;
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
    ['sim', 'Simulacro', 'Con reloj, como el examen'], ['calc', 'Calculadoras', 'Escalas que te explican el resultado'],
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
  <section class="panel"><h2>Respaldo</h2><p class="muted">Tu progreso vive solo en este navegador. Copia el código para pasarlo a otro dispositivo o guardarlo.</p><button class="btn" data-act="bkCopy">Copiar mi respaldo</button><div class="field"><label for="bk">Pega aquí un respaldo para restaurarlo</label><textarea id="bk" spellcheck="false"></textarea></div><button class="btn" data-act="bkLoad">Restaurar</button></section>
  <section class="panel"><h2>Empezar de cero</h2><button class="btn" data-act="wipe" style="border-color:var(--bad);color:var(--bad)">Borrar todo mi progreso</button></section>`;
  CHG.timer = (el) => { S.settings.timer = +el.value; save(); toast(+el.value ? `Reloj: ${el.value} s por decisión` : 'Reloj apagado'); };
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
  ACT.wipe = () => confirmBox('¿Borrar todo?', 'Se pierden XP, diagnóstico, plan, tarjetas y cuaderno de errores. No se puede deshacer.', 'Borrar', () => { S = fresh(); buildPlan(); save(); go('home'); });
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
}
if (hot && typeof hot.ready === 'function') hot.ready(start); else start((hot && hot.data) || {});
