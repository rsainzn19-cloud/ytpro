// ═══════════ Pixel art: utilidades de dibujo, ECG y escenas de las animaciones
// Todo se dibuja en un lienzo de baja resolución (160×120) que el CSS escala con image-rendering: pixelated.

const COL = {
  bg: '#0B0E2A', blood: '#121845', cellIn: '#3B1626', mem: '#E46A7E', cyan: '#62E3FF', gold: '#F2C14E',
  goldD: '#B9832A', white: '#F4F4FF', green: '#4BE38F', greenD: '#1E6B45', red: '#FF5C70', wall: '#8A2B3E',
  endo: '#E46A7E', lumen: '#3A1020', rbc: '#FF4D5E', rbcD: '#B32638', fat: '#F2C14E', fatD: '#B9832A',
  cap: '#D9D2E6', plt: '#C9B8FF', fibrin: '#7A1424', myo: '#B93A4E', dead: '#5A5F7E', liver: '#7A3A22',
  liverD: '#5A2814', violet: '#B48CFF', pink: '#E79AB3', tub: '#E9A0A8', urine: '#E8D25A', na: '#4DB8FF',
  cast: '#9A6A35', stone: '#C9C2A8', grid: '#0F3A2A', ecg: '#4BE38F', mon: '#03110B', bow: '#9FD8FF',
  orange: '#FF9B3D', frame: '#2D3680', panel: '#10153A', brainD: '#B8607C'
};
const rnd = (i, s = 1) => { const x = Math.sin(i * 127.1 + s * 311.7) * 43758.5453; return x - Math.floor(x); };
const tri = (v, L) => { const m = ((v % (2 * L)) + 2 * L) % (2 * L); return m < L ? m : 2 * L - m; };
const lerp = (a, b, p) => a + (b - a) * p;
const blink = (t, hz = 2) => Math.floor(t * hz) % 2 === 0;

function Pix(ctx) {
  const W = ctx.canvas.width, H = ctx.canvas.height;
  const r = (x, y, w, h, c) => { ctx.fillStyle = c; ctx.fillRect(Math.round(x), Math.round(y), Math.max(1, Math.round(w)), Math.max(1, Math.round(h))); };
  const g = {
    W, H, r,
    p: (x, y, c) => r(x, y, 1, 1, c),
    clear: (c) => { ctx.fillStyle = c || COL.bg; ctx.fillRect(0, 0, W, H); },
    disk(cx, cy, rad, c) { for (let y = -rad; y <= rad; y++) { const w = Math.round(Math.sqrt(Math.max(0, rad * rad - y * y))); r(cx - w, cy + y, 2 * w + 1, 1, c); } },
    ring(cx, cy, rad, c, th = 1) {
      for (let y = -rad - 1; y <= rad + 1; y++) for (let x = -rad - 1; x <= rad + 1; x++) {
        const d = Math.sqrt(x * x + y * y); if (d <= rad + 0.5 && d > rad - th + 0.5 - 1) r(cx + x, cy + y, 1, 1, c);
      }
    },
    line(x0, y0, x1, y1, c) {
      x0 = Math.round(x0); y0 = Math.round(y0); x1 = Math.round(x1); y1 = Math.round(y1);
      const dx = Math.abs(x1 - x0), sx = x0 < x1 ? 1 : -1, dy = -Math.abs(y1 - y0), sy = y0 < y1 ? 1 : -1;
      let err = dx + dy;
      for (;;) { r(x0, y0, 1, 1, c); if (x0 === x1 && y0 === y1) break; const e2 = 2 * err; if (e2 >= dy) { err += dy; x0 += sx; } if (e2 <= dx) { err += dx; y0 += sy; } }
    },
    spr(rows, x, y, pal) { rows.forEach((row, j) => { for (let i = 0; i < row.length; i++) { const ch = row[i]; if (ch !== '.' && pal[ch]) r(x + i, y + j, 1, 1, pal[ch]); } }); }
  };
  return g;
}

// Fuente de 3×5 para cifras cortas dentro del lienzo
const FONT = {
  0: ['111', '101', '101', '101', '111'], 1: ['010', '110', '010', '010', '111'], 2: ['111', '001', '111', '100', '111'],
  3: ['111', '001', '111', '001', '111'], 4: ['101', '101', '111', '001', '001'], 5: ['111', '100', '111', '001', '111'],
  6: ['111', '100', '111', '101', '111'], 7: ['111', '001', '010', '010', '010'], 8: ['111', '101', '111', '101', '111'],
  9: ['111', '101', '111', '001', '111'], '%': ['101', '001', '010', '100', '101'], T: ['111', '010', '010', '010', '010'],
  F: ['111', '100', '110', '100', '100'], G: ['111', '100', '101', '101', '111'], ' ': ['000', '000', '000', '000', '000']
};
function text3(g, s, x, y, c) {
  [...String(s)].forEach((ch, k) => { const gl = FONT[ch]; if (!gl) return; gl.forEach((row, j) => { for (let i = 0; i < 3; i++) if (row[i] === '1') g.p(x + k * 4 + i, y + j, c); }); });
}
const ARROW_UP = ['..X..', '.XXX.', 'XXXXX', '..X..', '..X..'];
const ARROW_DN = ['..X..', '..X..', 'XXXXX', '.XXX.', '..X..'];

// ───── ECG: forma de un latido por tipo de trazo
const BEATS = {};
function beat(type) {
  if (BEATS[type]) return BEATS[type];
  const P = { tachy: 26, brady: 58 }[type] || 40;
  const a = new Array(P).fill(0);
  const set = (i, v) => { if (i >= 0 && i < P) a[i] = v; };
  [4, 5, 6, 7].forEach((i, k) => set(i, [-1, -2, -2, -1][k]));
  const q = 11;
  let s0;
  if (type === 'wide') { [1, -3, -7, -10, -8, -3, 2, 4, 2].forEach((v, k) => set(q + k, v)); s0 = q + 9; }
  else { [1, -11, -13, 3, 1].forEach((v, k) => set(q + k, v)); s0 = q + 5; }
  const st = type === 'stemi' ? -4 : type === 'stdep' ? 2 : 0;
  for (let i = s0; i < s0 + 4; i++) set(i, st);
  const T = type === 'peakedT' ? [-2, -6, -10, -6, -2] : type === 'stemi' ? [-5, -6, -6, -5, -3, -1]
    : type === 'stdep' ? [2, 1, 0, 1, 1] : [-1, -2, -3, -3, -2, -1];
  T.forEach((v, k) => set(s0 + 4 + k, v));
  return (BEATS[type] = a);
}
function ecgTrace(g, type, t, y0, x0, x1, col, sy = 1) {
  const sh = beat(type || 'normal'), P = sh.length;
  const off = Math.floor(t * (type === 'tachy' ? 44 : type === 'brady' ? 22 : 32));
  let py = null;
  for (let x = x0; x < x1; x++) {
    const y = Math.round(y0 + sh[(((x + off) % P) + P) % P] * sy);
    if (py !== null && Math.abs(y - py) > 1) g.r(x, Math.min(y, py), 1, Math.abs(y - py) + 1, col);
    else g.p(x, y, col);
    py = y;
  }
}
function ecgStrip(g, type, t) {
  g.r(0, 96, 160, 24, COL.mon);
  for (let x = 0; x < 160; x += 8) { g.p(x, 100, COL.grid); g.p(x, 108, COL.grid); g.p(x, 116, COL.grid); }
  ecgTrace(g, type, t, 109, 0, 160, COL.ecg, 0.8);
}
function gauge(g, x, y, w, h, v, c) {
  g.r(x - 2, y - 2, w + 4, h + 4, COL.frame); g.r(x, y, w, h, COL.bg);
  const fh = Math.round(h * Math.max(0, Math.min(1, v)));
  for (let yy = 0; yy < fh; yy += 3) g.r(x, y + h - yy - 2, w, 2, c);
}
function frameBox(g, x, y, w, h) { g.r(x, y, w, h, COL.panel); g.r(x, y, w, 1, COL.frame); g.r(x, y + h - 1, w, 1, COL.frame); g.r(x, y, 1, h, COL.frame); g.r(x + w - 1, y, 1, h, COL.frame); }

// ═══════════ Diabetes tipo 2
const CH = [96, 116, 136];
function dmCell(g) {
  g.clear(COL.bg); g.r(0, 0, 160, 60, COL.blood); g.r(0, 60, 160, 60, COL.cellIn); g.r(0, 60, 160, 2, COL.mem);
  g.disk(22, 98, 8, '#2A0F1C'); g.disk(22, 98, 6, '#6B2A45');
}
function receptor(g, bound) {
  const c = COL.cyan; g.r(35, 46, 2, 7, c); g.r(43, 46, 2, 7, c); g.r(35, 52, 10, 2, c); g.r(39, 54, 2, 12, c);
  if (bound) g.r(38, 47, 4, 4, COL.gold);
}
function glut(g, x) { g.r(x, 55, 1, 9, COL.green); g.r(x + 3, 55, 1, 9, COL.green); }

const SCENES = {};
SCENES.dm2 = [
  (g, t) => {
    dmCell(g); receptor(g, true);
    for (let i = 0; i < 2; i++) { const y = (t * 14 + i * 22) % 42; if (y < 40) g.r(38 + Math.round(Math.sin(t * 2 + i * 3) * 3), y, 4, 4, COL.gold); }
    for (let k = 0; k < 6; k++) g.r(42 + ((t * 30 + k * 12) % 56), 70, 2, 2, COL.cyan);
    CH.forEach((x) => glut(g, x));
    for (let k = 0; k < 2; k++) { const p = (t * 0.4 + k * 0.5) % 1; g.ring(106 + k * 22, Math.round(lerp(104, 68, p)), 3, COL.green); }
    for (let i = 0; i < 14; i++) {
      const p = (t * 0.3 + i / 14) % 1, ch = CH[i % 3], sx = ch - 14 + rnd(i) * 30, sy = 6 + rnd(i, 2) * 16;
      let x, y;
      if (p < 0.55) { const q = p / 0.55; x = lerp(sx, ch + 1, q); y = lerp(sy, 57, q); }
      else { const q = (p - 0.55) / 0.45; x = lerp(ch + 1, ch + 1 + (rnd(i, 3) - 0.5) * 30, q); y = lerp(64, 98 + rnd(i, 4) * 12, q); }
      g.r(x, y, 2, 2, COL.white);
    }
  },
  (g, t) => {
    dmCell(g); receptor(g, true);
    g.r(38, 0, 4, 4, COL.gold); g.r(70, 8, 4, 4, COL.gold);
    for (let k = 0; k < 3; k++) g.r(42 + ((t * 30 + k * 6) % 16), 70, 2, 2, COL.cyan);
    if (blink(t)) for (let d = -3; d <= 3; d++) { g.r(64 + d, 70 + d, 2, 1, COL.red); g.r(64 + d, 70 - d, 2, 1, COL.red); }
    CH.forEach((x, k) => g.ring(x + 2 + Math.round(Math.sin(t * 3 + k)), 90 + (k % 2) * 8, 3, COL.green));
    for (let i = 0; i < 30; i++) {
      const x = 4 + tri(rnd(i) * 150 + t * (8 + rnd(i, 4) * 16), 150), y = 4 + tri(rnd(i, 5) * 48 + t * (6 + rnd(i, 6) * 10), 48);
      g.r(x, y, 2, 2, COL.white);
    }
  },
  (g, t) => {
    g.clear(COL.bg);
    const ph = (t % 10) / 10, alive = ph < 0.5 ? 1 : lerp(1, 0.25, (ph - 0.5) / 0.5);
    g.disk(40, 42, 24, '#4A1D35'); g.ring(40, 42, 24, COL.pink, 2);
    let k = 0;
    for (let y = -16; y <= 16; y += 6) for (let x = -16; x <= 16; x += 6) {
      if (x * x + y * y > 18 * 18) continue;
      g.r(40 + x - 2, 42 + y - 2, 4, 4, rnd(k, 7) < alive ? COL.gold : COL.dead); k++;
    }
    const n = Math.round((ph < 0.5 ? 16 : 16 * alive * alive));
    for (let i = 0; i < n; i++) { const p = (t * 0.5 + i / Math.max(1, n)) % 1; g.r(lerp(66, 106, p), 42 + Math.sin(i * 1.7 + p * 6) * 12, 3, 3, COL.gold); }
    const ins = ph < 0.5 ? 0.9 : lerp(0.9, 0.25, (ph - 0.5) / 0.5);
    const glu = ph < 0.5 ? 0.35 : lerp(0.35, 0.92, (ph - 0.5) / 0.5);
    gauge(g, 121, 24, 10, 70, ins, COL.gold); gauge(g, 141, 24, 10, 70, glu, COL.white);
  },
  (g, t) => {
    g.clear(COL.bg);
    const ph = t % 9, met = ph >= 4;
    g.r(86, 46, 74, 24, COL.lumen); g.r(86, 44, 74, 2, COL.wall); g.r(86, 70, 74, 2, COL.wall);
    g.disk(42, 62, 30, COL.liver); g.disk(64, 54, 20, COL.liver);
    for (let i = 0; i < 26; i++) g.r(18 + rnd(i) * 56, 40 + rnd(i, 2) * 44, 2, 2, COL.liverD);
    const n = met ? 3 : 11;
    for (let i = 0; i < n; i++) g.r(82 + ((t * 26 + i * (78 / n)) % 78), 50 + rnd(i, 3) * 16, 2, 2, COL.white);
    let px = -20, py = 0;
    if (ph >= 2 && ph < 4) { const q = (ph - 2) / 2; px = lerp(150, 58, q); py = lerp(14, 40, q); }
    else if (met) { px = 58; py = 40; }
    if (px > -10) { g.r(px, py, 5, 5, COL.white); g.r(px + 5, py, 5, 5, COL.na); }
    if (met && blink(t)) g.ring(63, 42, 9, COL.cyan);
  },
  (g, t) => {
    g.clear(COL.bg);
    const blocked = (t % 10) >= 5;
    g.r(0, 16, 160, 14, COL.lumen); g.r(0, 14, 160, 2, COL.wall); g.r(0, 30, 160, 2, COL.wall);
    for (let x = 0; x < 146; x += 10) { g.r(x, 52, 9, 8, COL.tub); g.r(x, 78, 9, 8, COL.tub); }
    g.r(0, 60, 146, 18, '#2A2350'); g.r(146, 52, 14, 34, COL.urine);
    const TR = [24, 48, 72, 96];
    TR.forEach((x) => { g.r(x, 52, 4, 8, COL.green); if (blocked) { g.r(x - 1, 49, 6, 3, COL.red); if (blink(t, 3)) g.r(x, 55, 4, 2, COL.red); } });
    for (let i = 0; i < 16; i++) {
      const c = i % 3 === 0 ? COL.na : COL.white, tg = TR[i % 4];
      let x = (t * 22 + i * 10.7) % 170 - 6, y = 63 + rnd(i) * 11;
      if (!blocked && x > tg) {
        const p = (x - tg) / 30;
        if (p < 1) { y = lerp(y, 22, p); x = tg + 1; } else { x = tg + 1 + (p - 1) * 30; y = 19 + rnd(i, 2) * 8; if (x > 160) continue; }
      } else if (x > 146) { x = Math.min(x, 156); y = 56 + rnd(i, 3) * 26; }
      g.r(x, y, 2, 2, c);
    }
  },
  (g, t) => {
    g.clear(COL.bg);
    [4, 56, 108].forEach((x) => frameBox(g, x, 14, 48, 82));
    g.disk(28, 60, 12, '#4A1D35'); g.ring(28, 60, 12, COL.pink, 2);
    for (let i = 0; i < 8; i++) { const p = (t * 0.6 + i / 8) % 1; g.r(26 + Math.cos(i * 2.1) * p * 14, 58 - p * 36, 3, 3, COL.gold); }
    g.r(36, 80, 3, 3, COL.violet);
    if (blink(t)) { g.line(33, 77, 41, 85, COL.red); g.line(41, 77, 33, 85, COL.red); }
    g.spr(ARROW_UP, 10, 18, { X: COL.gold }); g.spr(ARROW_DN, 40, 18, { X: COL.violet });
    g.disk(76, 50, 6, COL.orange); g.disk(81, 60, 12, COL.orange); g.r(90, 66, 10, 4, COL.orange);
    for (let i = 0; i < 6; i++) { const a = t * 0.5 + i * 1.05; g.r(80 + Math.cos(a) * 7, 60 + Math.sin(a) * 5, 2, 2, '#6B3A1A'); }
    const pq = (t % 4) / 4; g.r(lerp(92, 102, pq), 67, 2, 2, '#6B3A1A');
    g.disk(126, 52, 11, COL.pink); g.disk(138, 52, 11, COL.pink);
    for (let i = 0; i < 5; i++) { g.line(120 + i * 4, 46, 122 + i * 4, 56, COL.brainD); }
    g.ring(132, 52, 18 + (blink(t, 1.5) ? 1 : 0), COL.gold);
  }
];

// ═══════════ Síndrome coronario agudo
function artery(g, t, o) {
  g.clear(COL.bg);
  g.r(0, 20, 160, 12, COL.wall); g.r(0, 30, 160, 2, COL.endo);
  g.r(0, 68, 160, 12, COL.wall); g.r(0, 68, 160, 2, COL.endo);
  g.r(0, 32, 160, 36, COL.lumen);
  for (let x = 0; x < 160; x += 6) {
    let c = COL.myo;
    if (o.necro && x >= 96) {
      const k = o.necro; c = k > 0.66 ? COL.dead : k > 0.33 ? '#7E4058' : COL.myo;
      if (o.scar && (x < 102 || x > 114)) c = COL.myo;
    }
    g.r(x, 82, 5, 11, c); g.r(x, 82, 5, 1, '#D25A6E');
  }
  ecgStrip(g, o.ecg || 'normal', t);
}
function plaqueTop(x, h) { const d = (x - 80) / 28; return Math.abs(d) >= 1 ? 68 : Math.round(68 - h * (1 - d * d)); }
function drawPlaque(g, h, capTh) {
  for (let x = 52; x <= 108; x++) {
    const top = plaqueTop(x, h); if (top >= 68) continue;
    g.r(x, top, 1, 68 - top, COL.fat); g.r(x, top, 1, Math.min(capTh, 68 - top), COL.cap);
  }
  for (let i = 0; i < 12; i++) { const x = 60 + rnd(i, 9) * 40; g.p(x, Math.min(67, plaqueTop(x, h) + capTh + 2 + rnd(i, 8) * 5), COL.fatD); }
}
function rbcs(g, t, o = {}) {
  const n = o.n ?? 18;
  for (let i = 0; i < n; i++) {
    let x = (i * 17.3 + t * (o.speed ?? 34)) % 176 - 8, y = 35 + Math.floor(rnd(i) * 28);
    if (o.h) { const top = plaqueTop(Math.max(0, Math.min(159, x + 2)), o.h); if (y + 3 > top - 1) y = Math.max(34, top - 4 - (i % 3)); }
    if (o.stopAt != null && x > o.stopAt - 4) x = o.stopAt - 4 - ((i * 5) % 34);
    g.r(x, y, 4, 3, COL.rbc); g.r(x + 1, y + 1, 2, 1, COL.rbcD);
  }
}
SCENES.sca = [
  (g, t) => { artery(g, t, {}); rbcs(g, t); },
  (g, t) => {
    artery(g, t, {}); rbcs(g, t, { n: 14 });
    for (let i = 0; i < 8; i++) { const p = (t * 0.35 + i / 8) % 1; g.r(58 + i * 6, lerp(44, 74, p), 2, 2, COL.gold); }
    [62, 80, 98].forEach((x, k) => { g.r(x, 71, 6, 5, COL.cap); if (blink(t + k * 0.3)) { g.p(x + 1, 72, COL.gold); g.p(x + 4, 74, COL.gold); } g.p(x + 2, 74, COL.gold); });
  },
  (g, t) => { artery(g, t, {}); drawPlaque(g, 20, 3); rbcs(g, t, { h: 20 }); },
  (g, t) => {
    artery(g, t, { ecg: 'stdep' }); drawPlaque(g, 20, 1); rbcs(g, t, { h: 28, speed: 26 });
    const top = plaqueTop(80, 20);
    if (blink(t, 3)) { g.r(78, top, 5, 1, COL.red); g.p(80, top + 1, COL.red); }
    const n = Math.min(30, Math.floor((t % 8) * 8));
    for (let k = 0; k < n; k++) g.r(80 + (rnd(k, 11) - 0.5) * 22, top - 1 - rnd(k, 12) * 9, 2, 2, COL.plt);
  },
  (g, t) => {
    const nec = Math.min(1, (t % 9) / 6);
    artery(g, t, { ecg: 'stemi', necro: nec }); drawPlaque(g, 20, 1);
    g.r(96, 32, 64, 36, '#22091A');
    for (let x = 70; x <= 94; x++) { const top = Math.min(plaqueTop(x, 20), 68); g.r(x, 32, 1, top - 32, COL.fibrin); }
    for (let i = 0; i < 18; i++) g.r(71 + rnd(i, 13) * 21, 34 + rnd(i, 14) * 18, 2, 2, COL.rbc);
    rbcs(g, t, { stopAt: 70, speed: 30 });
  },
  (g, t) => {
    artery(g, t, { necro: 1, scar: true }); drawPlaque(g, 5, 2); rbcs(g, t, { h: 6 });
    for (let x = 56; x < 104; x += 6) { g.line(x, 33, x + 3, 36, COL.cap); g.line(x + 3, 36, x + 6, 33, COL.cap); g.line(x, 66, x + 3, 63, COL.cap); g.line(x + 3, 63, x + 6, 66, COL.cap); }
    for (let i = 0; i < 2; i++) { const x = (t * 30 + i * 80) % 170 - 5; g.disk(x, 44, 2, COL.white); g.r(x + 40, 56, 4, 4, COL.gold); }
  }
];

// ═══════════ Lesión renal aguda
function vessel(g, x0, x1, cy, th) {
  g.r(x0, cy - th / 2 - 2, x1 - x0, 2, COL.wall); g.r(x0, cy + th / 2, x1 - x0, 2, COL.wall);
  g.r(x0, cy - th / 2, x1 - x0, th, COL.lumen);
}
function mark(g, t, x, cy, th, kind) {
  if (!kind) return;
  if (kind === 'dil') { g.spr(ARROW_UP, x - 2, cy - th / 2 - 9, { X: COL.cyan }); g.spr(ARROW_DN, x - 2, cy + th / 2 + 3, { X: COL.cyan }); }
  if (kind === 'con') { g.spr(ARROW_DN, x - 2, cy - th / 2 - 9, { X: COL.red }); g.spr(ARROW_UP, x - 2, cy + th / 2 + 3, { X: COL.red }); }
  if (kind === 'block' && blink(t)) { g.line(x - 4, cy - 4, x + 4, cy + 4, COL.red); g.line(x + 4, cy - 4, x - 4, cy + 4, COL.red); }
}
function glom(g, t, o) {
  g.clear(COL.bg);
  vessel(g, 0, 62, 50, o.aff); vessel(g, 86, 160, 38, o.eff);
  g.disk(74, 50, 12, '#5A1626');
  for (let k = 0; k < 6; k++) g.ring(70 + (k % 3) * 4, 46 + Math.floor(k / 3) * 8, 3, '#C24A5E');
  const br = o.bowR || 18;
  g.ring(74, 50, br + (o.obs && blink(t, 1.5) ? 1 : 0), COL.bow, 2);
  const lum = o.obs ? [84, 98] : [86, 96];
  g.r(82, 66, 6, lum[0] - 66 + 2, '#2A2350');
  g.r(82, lum[0], 78, lum[1] - lum[0], '#2A2350');
  for (let x = 90, k = 0; x < 158; x += 8, k++) {
    const dead = o.dead, c = dead ? COL.dead : COL.tub;
    if (!(dead && k % 3 === 1)) g.r(x, lum[0] - 6, 7, 6, c);
    if (!(dead && k % 3 === 2)) g.r(x, lum[1], 7, 6, c);
  }
  g.r(80, 66, 2, lum[0] - 66, COL.tub); g.r(88, 66, 2, lum[0] - 72, COL.tub);
  const fl = o.flow, na = Math.round(8 * fl), ne = Math.round(6 * fl);
  for (let i = 0; i < na; i++) g.r((t * 24 * fl + i * 60 / na) % 60, 50 + (rnd(i) - 0.5) * Math.max(1, o.aff - 3) - 1, 2, 2, COL.rbc);
  for (let i = 0; i < ne; i++) g.r(88 + ((t * 24 * fl + i * 72 / ne) % 72), 38 + (rnd(i, 2) - 0.5) * Math.max(1, o.eff - 2) - 1, 2, 2, COL.rbc);
  const nf = Math.max(1, Math.round(10 * o.filt));
  for (let i = 0; i < nf; i++) {
    const p = (t * 0.22 + i / nf) % 1;
    let x, y;
    if (p < 0.2) { x = 84; y = lerp(66, 90, p / 0.2); } else { x = lerp(84, 160, (p - 0.2) / 0.8); y = 90 + (rnd(i) - 0.5) * 6; }
    if (o.obs) { x = Math.min(x, 142 - (i % 6) * 4 + (blink(t + i, 4) ? 1 : 0)); }
    g.r(x, y, 2, 2, COL.urine);
  }
  if (o.na) for (let i = 0; i < 8; i++) {
    let x = 82 + ((t * 22 + i * 10) % 78), y = 90 + (rnd(i, 5) - 0.5) * 4;
    const tg = 96 + (i % 5) * 12;
    if (o.na === 'reab' && x > tg) { const p = (x - tg) / 14; if (p >= 1) continue; x = tg; y = lerp(90, 72, p); }
    g.r(x, y, 2, 2, COL.na);
  }
  if (o.casts) for (let i = 0; i < 3; i++) g.r(82 + ((t * 12 + i * 26) % 74), 88, 6, 4, COL.cast);
  if (o.obs) { g.r(144, lum[0], 10, lum[1] - lum[0], COL.stone); g.r(144, lum[0], 10, 1, '#7A7460'); }
  mark(g, t, 34, 50, o.aff, o.am); mark(g, t, 124, 38, o.eff, o.em);
  const v = o.tfg, c = v >= 80 ? COL.green : v >= 45 ? COL.gold : COL.red;
  text3(g, 'TFG ' + v + '%', 116, 4, c);
  g.r(116, 11, 40, 4, COL.frame); g.r(116, 11, Math.round(40 * v / 100), 4, c);
}
SCENES.lra = [
  { aff: 10, eff: 6, flow: 1, filt: 1, tfg: 100 },
  { aff: 13, eff: 3, flow: 0.55, filt: 0.85, tfg: 85, am: 'dil', em: 'con' },
  { aff: 4, eff: 3, flow: 0.4, filt: 0.4, tfg: 45, am: 'block', em: 'con' },
  { aff: 13, eff: 10, flow: 0.55, filt: 0.5, tfg: 55, am: 'dil', em: 'block' },
  { aff: 4, eff: 10, flow: 0.35, filt: 0.2, tfg: 20, am: 'block', em: 'block' },
  { aff: 10, eff: 6, flow: 0.6, filt: 0.6, tfg: 50, na: 'reab' },
  { aff: 10, eff: 6, flow: 0.6, filt: 0.4, tfg: 20, na: 'leak', dead: true, casts: true },
  { aff: 10, eff: 6, flow: 0.8, filt: 0.35, tfg: 25, obs: true, bowR: 20 }
].map((o) => (g, t) => glom(g, t, o));
