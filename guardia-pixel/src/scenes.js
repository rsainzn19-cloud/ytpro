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

// ═══════════ Utilidades compartidas por las escenas nuevas
function ell(g, cx, cy, rx, ry, c) {
  for (let y = -ry; y <= ry; y++) { const w = Math.round(rx * Math.sqrt(Math.max(0, 1 - (y * y) / (ry * ry)))); g.r(cx - w, cy + y, 2 * w + 1, 1, c); }
}
function xMark(g, t, x, y, s = 4) {
  if (!blink(t)) return;
  g.line(x - s, y - s, x + s, y + s, COL.red); g.line(x + s, y - s, x - s, y + s, COL.red);
  g.line(x - s + 1, y - s, x + s + 1, y + s, COL.red); g.line(x + s + 1, y - s, x - s + 1, y + s, COL.red);
}
function along(pts, p) {
  const seg = []; let L = 0;
  for (let i = 1; i < pts.length; i++) { const d = Math.hypot(pts[i][0] - pts[i - 1][0], pts[i][1] - pts[i - 1][1]); seg.push(d); L += d; }
  let s = clamp01(p) * L;
  for (let i = 0; i < seg.length; i++) { if (s <= seg[i]) { const q = seg[i] ? s / seg[i] : 0; return [lerp(pts[i][0], pts[i + 1][0], q), lerp(pts[i][1], pts[i + 1][1], q)]; } s -= seg[i]; }
  return pts[pts.length - 1];
}
const clamp01 = (v) => Math.max(0, Math.min(1, v));
function kidneyBean(g, x, y, c) { g.disk(x, y, 9, c); g.disk(x + 8, y, 3, COL.bg); }
function neutro(g, x, y) { g.disk(x, y, 3, COL.white); g.p(x - 1, y - 1, COL.violet); g.p(x + 1, y, COL.violet); g.p(x - 1, y + 1, COL.violet); }

// ═══════════ Dislipidemia: el receptor de LDL
const REC4 = [28, 64, 100, 136], REC8 = [12, 32, 52, 72, 92, 112, 132, 150];
function hepato(g) {
  g.clear(COL.bg); g.r(0, 0, 160, 56, COL.blood); g.r(0, 56, 160, 4, COL.liver); g.r(0, 60, 160, 60, '#3A1C14');
  for (let i = 0; i < 20; i++) g.r(4 + rnd(i, 21) * 150, 66 + rnd(i, 22) * 26, 2, 2, COL.liverD);
  g.disk(22, 96, 7, '#5A2814'); g.disk(22, 96, 5, COL.liver);
}
function ldlRec(g, x, c) { c = c || COL.cyan; g.r(x - 3, 50, 1, 6, c); g.r(x + 3, 50, 1, 6, c); g.r(x - 3, 55, 7, 1, c); g.r(x, 56, 1, 5, c); }
function ldlDot(g, x, y) { g.disk(x, y, 2, COL.fat); g.p(x - 1, y - 1, '#FFE7A6'); }
function ldlFlow(g, t, recs, n, speed = 0.25) {
  for (let i = 0; i < n; i++) {
    const p = (t * speed + i / n) % 1, R = recs[i % recs.length], x0 = 8 + rnd(i, 23) * 144, y0 = 8 + rnd(i, 24) * 30;
    if (p < 0.6) { const q = p / 0.6; ldlDot(g, lerp(x0, R, q), lerp(y0, 47, q)); }
    else g.ring(R, Math.round(lerp(60, 86, (p - 0.6) / 0.4)), 2, COL.fat);
  }
}
SCENES.smdl = [
  (g, t) => { hepato(g); REC4.forEach((x) => ldlRec(g, x)); ldlFlow(g, t, REC4, 10); },
  (g, t) => {
    hepato(g); REC8.forEach((x) => ldlRec(g, x)); ldlFlow(g, t, REC8, 5, 0.35);
    g.r(64, 82, 32, 10, COL.goldD); g.r(66, 84, 28, 6, COL.gold); xMark(g, t, 80, 87, 5);
  },
  (g, t) => {
    hepato(g); REC4.slice(1).forEach((x) => ldlRec(g, x)); ldlFlow(g, t, REC4.slice(1), 7);
    const p = (t * 0.25) % 1, x = 28;
    if (p < 0.4) { ldlRec(g, x); g.r(x - 1, Math.round(lerp(12, 45, p / 0.4)), 3, 3, COL.violet); }
    else {
      const q = (p - 0.4) / 0.6, y = Math.round(lerp(52, 90, q)), c = q > 0.5 ? COL.dead : COL.cyan;
      g.r(x - 3, y, 7, 1, c); g.r(x, y + 1, 1, 4, c); g.r(x - 1, y - 3, 3, 3, COL.violet);
      if (q > 0.7 && blink(t, 4)) g.ring(x, y, 6, COL.red);
    }
    for (let k = 0; k < 3; k++) {
      const ax = 100 + k * 20, ay = 24 + Math.round(Math.sin(t * 2 + k) * 3);
      g.line(ax, ay, ax, ay + 6, COL.white); g.line(ax, ay, ax - 3, ay - 3, COL.white); g.line(ax, ay, ax + 3, ay - 3, COL.white); g.r(ax - 1, ay - 7, 3, 3, COL.violet);
    }
    g.ring(100, 76, 7, COL.cyan); const a = t * 3; g.r(100 + Math.cos(a) * 7 - 1, 76 + Math.sin(a) * 7 - 1, 3, 3, COL.white);
  },
  (g, t) => {
    g.clear(COL.bg); g.r(0, 0, 160, 50, '#2E2414');
    for (let x = 0; x < 160; x += 6) g.r(x, 50, 4, 6, COL.pink);
    g.r(0, 56, 160, 64, '#5A1E30');
    for (let x = 0; x < 160; x += 20) { g.r(x, 56, 1, 64, '#3B1626'); g.disk(x + 10, 92, 3, COL.violet); }
    [40, 80, 120].forEach((x) => { g.r(x - 3, 48, 2, 12, COL.green); g.r(x + 2, 48, 2, 12, COL.green); if (x !== 80) xMark(g, t, x, 42, 3); });
    for (let i = 0; i < 14; i++) g.r(6 + rnd(i, 25) * 148, 4 + tri(rnd(i, 26) * 80 + t * (10 + rnd(i, 27) * 10), 38), 2, 2, COL.white);
  }
];

// ═══════════ HTA: renina-angiotensina-aldosterona
function raas(g, t, o = {}) {
  g.clear(COL.bg);
  g.disk(20, 34, 12, COL.liver); g.disk(30, 30, 8, COL.liver);
  for (let i = 0; i < 6; i++) g.p(12 + rnd(i, 31) * 22, 26 + rnd(i, 32) * 14, COL.liverD);
  kidneyBean(g, 20, 86, '#A0405A'); g.r(12, 92, 6, 2, COL.cyan);
  g.r(78, 44, 4, 10, COL.cap); g.disk(68, 64, 10, COL.pink); g.disk(92, 64, 10, COL.pink);
  for (let i = 0; i < 6; i++) { g.p(64 + (i % 3) * 4, 60 + Math.floor(i / 3) * 6, COL.brainD); g.p(88 + (i % 3) * 4, 60 + Math.floor(i / 3) * 6, COL.brainD); }
  const end = o.end || [134, 72];
  for (let i = 0; i < 5; i++) {
    const p = (t * 0.22 + i / 5) % 1;
    if (p < 0.34) { const q = p / 0.34; g.r(lerp(34, 78, q), lerp(30, 26, q), 3, 3, COL.white); }
    else if (o.eca && p > 0.57) g.r(77 + (i % 2) * 4, 38 - Math.floor(i / 2) * 4, 3, 3, COL.gold);
    else if (p < 0.67) g.r(79, lerp(28, 46, (p - 0.34) / 0.33), 3, 3, COL.gold);
    else { const q = (p - 0.67) / 0.33; g.r(lerp(96, end[0], q), lerp(62, end[1], q), 3, 3, COL.red); }
  }
  for (let i = 0; i < 3; i++) { const p = (t * 0.3 + i / 3) % 1; g.r(lerp(24, 60, p), lerp(76, 32, p), 2, 2, COL.cyan); }
}
SCENES.hta = [
  (g, t) => raas(g, t),
  (g, t) => {
    g.clear(COL.bg);
    const th = Math.round(lerp(14, 6, (Math.sin(t * 1.2) + 1) / 2));
    vessel(g, 0, 84, 50, th); mark(g, t, 40, 50, th, 'con');
    for (let i = 0; i < 6; i++) { const p = (t * 0.4 + i / 6) % 1; g.r(lerp(0, 84, p), 50 + (rnd(i, 33) - 0.5) * (th - 3), 2, 2, COL.rbc); }
    for (let i = 0; i < 5; i++) g.r(8 + i * 16, 30 + (i % 2) * 34, 3, 3, COL.red);
    kidneyBean(g, 118, 66, '#A0405A');
    for (let k = 0; k < 7; k++) g.r(113 - Math.floor(k / 2) + 0, 50 + k, 10 + k, 1, COL.orange);
    g.r(86, 90, 74, 2, COL.tub); g.r(86, 92, 74, 6, '#2A2350'); g.r(86, 98, 74, 2, COL.tub);
    for (let i = 0; i < 4; i++) { const p = (t * 0.35 + i / 4) % 1; g.r(118 + (i - 1.5) * 4, lerp(58, 90, p), 2, 2, COL.gold); }
    for (let i = 0; i < 6; i++) { const p = (t * 0.3 + i / 6) % 1, x = 156 - p * 70; g.r(x, p > 0.6 ? lerp(94, 78, (p - 0.6) / 0.4) : 94, 2, 2, COL.na); }
    gauge(g, 8, 72, 8, 40, 0.35 + 0.55 * ((t % 8) / 8), COL.red);
  },
  (g, t) => {
    raas(g, t, { eca: true }); xMark(g, t, 80, 64, 5);
    const n = Math.min(16, 3 + Math.floor((t % 8) * 2));
    for (let i = 0; i < n; i++) g.r(108 + rnd(i, 34) * 36, 78 + rnd(i, 35) * 12, 2, 2, COL.pink);
  },
  (g, t) => {
    raas(g, t, { end: [114, 50] });
    g.r(112, 48, 1, 8, COL.cyan); g.r(124, 48, 1, 8, COL.cyan); g.r(112, 55, 13, 1, COL.cyan); g.r(118, 56, 1, 6, COL.cyan);
    xMark(g, t, 118, 52, 5);
  },
  (g, t) => {
    g.clear(COL.bg);
    g.r(0, 0, 40, 120, '#3A3416'); g.r(124, 0, 36, 120, COL.blood);
    g.r(40, 20, 84, 76, '#6B2A45'); g.r(40, 20, 84, 2, COL.pink); g.r(40, 94, 84, 2, COL.pink); g.r(40, 20, 2, 76, COL.pink); g.r(122, 20, 2, 76, COL.pink);
    g.disk(64, 70, 7, COL.violet);
    g.r(38, 40, 5, 10, COL.green);
    g.r(94, 54, 1, 8, COL.cyan); g.r(106, 54, 1, 8, COL.cyan); g.r(94, 61, 13, 1, COL.cyan); xMark(g, t, 100, 58, 5);
    for (let i = 0; i < 3; i++) { const p = (t * 0.3 + i / 3) % 1; g.r(lerp(150, 101, p) - 1, lerp(30, 50, p), 3, 3, COL.gold); }
    for (let i = 0; i < 6; i++) g.r(10 + rnd(i, 36) * 24, (t * 18 + i * 20) % 120, 2, 2, COL.na);
    const k = Math.min(10, 3 + Math.floor((t % 8)));
    for (let i = 0; i < k; i++) g.r(128 + rnd(i, 37) * 14, 64 + rnd(i, 38) * 50, 2, 2, COL.green);
    gauge(g, 148, 64, 6, 40, 0.3 + 0.6 * ((t % 8) / 8), COL.green);
  }
];

// ═══════════ Glomerulopatías: la barrera de filtración
function barrier(g, t, o = {}) {
  g.clear(COL.bg);
  g.r(0, 0, 160, 40, COL.lumen);
  for (let x = 0; x < 160; x += 8) g.r(x, 40, 6, 5, COL.endo);
  g.r(0, 50, 160, 8, o.igg ? '#3A6AB0' : '#6A5AA0');
  if (o.fused) g.r(0, 62, 160, 6, COL.violet); else for (let x = 1; x < 160; x += 6) g.r(x, 62, 4, 6, COL.violet);
  for (let x = 14; x < 160; x += 36) g.disk(x, 74, 5, COL.violet);
  g.r(0, 82, 160, 38, '#2A2350');
  if (o.igg) for (let x = 2; x < 160; x += 5) { g.r(x, 50, 3, 1, COL.cyan); g.p(x + 1, 49, COL.cyan); }
  for (let i = 0; i < 6; i++) { const x = (t * 26 + i * 29) % 172 - 8; g.r(x, 8 + (i % 3) * 10, 5, 3, COL.rbc); g.r(x + 1, 9 + (i % 3) * 10, 3, 1, COL.rbcD); }
  for (let i = 0; i < 8; i++) {
    const x = 6 + rnd(i, 41) * 148;
    if (o.alb && i % 2 === 0) g.r(x, lerp(6, 114, (t * 0.25 + i / 8) % 1), 3, 3, COL.gold);
    else g.r(x, 4 + tri(rnd(i, 42) * 60 + t * 12, 32), 3, 3, COL.gold);
  }
  for (let i = 0; i < 10; i++) g.r(4 + rnd(i, 43) * 150, lerp(4, 116, (t * 0.3 + i / 10) % 1), 1, 2, COL.cyan);
}
function antiY(g, x, y, c) { g.line(x, y, x, y + 4, c); g.line(x, y, x - 2, y - 2, c); g.line(x, y, x + 2, y - 2, c); }
SCENES.glomerulo = [
  (g, t) => barrier(g, t),
  (g, t) => barrier(g, t, { fused: true, alb: true }),
  (g, t) => {
    barrier(g, t);
    [26, 62, 98, 134].forEach((x) => { g.disk(x, 61, 4, COL.plt); g.p(x, 60, COL.white); });
    for (let k = 0; k < 3; k++) { const p = (t * 0.25 + k / 3) % 1, x = 24 + k * 14, y = Math.round(lerp(14, 46, p)); antiY(g, x, y, COL.white); g.r(x - 1, y - 4, 3, 2, COL.gold); }
  },
  (g, t) => {
    barrier(g, t);
    [20, 60, 100, 140].forEach((x) => g.r(x - 5, 45, 11, 5, COL.plt));
    for (let k = 0; k < 3; k++) neutro(g, (t * 18 + k * 56) % 172 - 6, 22 + (k % 2) * 8);
    for (let k = 0; k < 3; k++) { const p = (t * 0.3 + k / 3) % 1; g.r(56 + k * 8, lerp(30, 112, p), 3, 2, COL.rbc); }
  },
  (g, t) => {
    g.clear('#2A2350');
    g.disk(80, 70, 15, '#5A3A6A');
    [[44, 54], [116, 54], [80, 32]].forEach(([x, y], k) => {
      g.disk(x, y, 17, COL.endo); g.disk(x, y, 14, '#6A5AA0'); g.disk(x, y, 12, COL.lumen);
      for (let i = 0; i < 3; i++) { const a = t * 1.4 + i * 2.1 + k; g.r(x + Math.cos(a) * 7 - 2, y + Math.sin(a) * 7 - 1, 4, 3, COL.rbc); }
    });
    const n = Math.min(14, 4 + Math.floor((t % 8) * 1.5));
    for (let i = 0; i < n; i++) g.r(70 + rnd(i, 44) * 20, 62 + rnd(i, 45) * 16, 2, 2, COL.gold);
    const p = (t * 0.3) % 1; g.r(lerp(44, 30, p), lerp(70, 114, p), 3, 2, COL.rbc);
  },
  (g, t) => {
    barrier(g, t, { igg: true });
    for (let k = 0; k < 4; k++) { const p = (t * 0.25 + k / 4) % 1; antiY(g, 18 + k * 12, Math.round(lerp(14, 44, p)), COL.cyan); }
  }
];

// ═══════════ Úlcera péptica y STDA
function gastric(g, t, o = {}) {
  g.clear(COL.bg);
  g.r(0, 0, 160, 36, '#2A1430');
  const m = o.mucus ?? 22, top = 60 - m;
  g.r(0, top, 160, m, '#2E6A72');
  for (let i = 0; i < 12; i++) g.p(rnd(i, 51) * 160, top + rnd(i, 52) * m, '#62C3C8');
  for (let x = 0; x < 160; x += 8) { g.r(x, 60, 7, 24, o.infl && blink(t + x * 0.013, 2) ? '#FF7A8A' : COL.pink); g.disk(x + 3, 76, 1, COL.brainD); }
  g.r(0, 84, 160, 36, '#5A1E30');
  g.r(0, 97, 114, 2, COL.wall); g.r(0, 99, 114, 4, COL.rbc); g.r(0, 103, 114, 2, COL.wall);
  g.disk(132, 96, 9, '#E46A7E'); g.ring(132, 96, 9, COL.pink); g.r(130, 86, 4, 6, '#3A1626');
  const n = o.acid ?? 14;
  for (let i = 0; i < n; i++) {
    const lim = top - 6 + (o.pen && i % 3 === 0 ? m + 4 : 0);
    g.r(4 + rnd(i, 53) * 150, 4 + tri(rnd(i, 54) * 90 + t * (12 + rnd(i, 55) * 8), lim), 2, 2, COL.red);
  }
  for (let i = 0; i < Math.round(m / 4); i++) g.r((t * 10 + i * 27) % 160, top + 3 + (i % 3) * Math.max(2, m / 4), 2, 2, COL.cyan);
  if (!o.noSec) for (let i = 0; i < 3; i++) { const p = (t * 0.4 + i / 3) % 1; g.r(131, lerp(86, 40, p), 2, 2, COL.red); }
}
function crater(g, depth) {
  for (let x = 62; x <= 98; x++) { const k = 1 - ((x - 80) / 18) ** 2; g.r(x, 34, 1, Math.round(lerp(0, depth, k)) + 4, '#2A1430'); }
}
SCENES.stda = [
  (g, t) => gastric(g, t),
  (g, t) => {
    gastric(g, t, { infl: true });
    for (let k = 0; k < 6; k++) {
      const x = 12 + k * 24 + Math.round(Math.sin(t * 2 + k) * 2), y = 46 + (k % 2) * 6;
      g.r(x, y, 4, 2, COL.green); g.r(x + 4, y - 1, 2, 2, COL.green); g.p(x - 1, y + 1, COL.greenD); g.p(x - 2, y + 2, COL.greenD);
    }
    const r = 6 + (blink(t, 1.5) ? 1 : 0); g.ring(100, 40, r, COL.cyan);
    for (let i = 0; i < 6; i++) g.p(100 + Math.cos(i + t) * 4, 40 + Math.sin(i * 2 + t) * 4, COL.cyan);
    for (let i = 0; i < 6; i++) g.disk(64 + i * 6, 89 + (i % 2) * 3, 1, COL.white);
  },
  (g, t) => {
    gastric(g, t, { mucus: 8, pen: true });
    g.r(30, 86, 20, 9, COL.goldD); g.r(32, 88, 16, 5, COL.gold); xMark(g, t, 40, 90, 5);
    g.r(6, 88, 7, 5, COL.white); g.r(13, 88, 7, 5, COL.orange);
  },
  (g, t) => {
    gastric(g, t, { mucus: 14 }); crater(g, 62);
    if (blink(t, 3)) g.r(76, 97, 8, 8, COL.red);
    for (let i = 0; i < 6; i++) { const p = (t * 0.45 + i / 6) % 1; g.r(78 + (rnd(i, 56) - 0.5) * 8, lerp(96, 8, p), 2, 2, COL.rbc); }
  },
  (g, t) => {
    gastric(g, t, { acid: 4, noSec: true }); crater(g, Math.round(lerp(40, 4, (t % 10) / 10)));
    g.r(128, 84, 8, 4, COL.gold); xMark(g, t, 132, 86, 4);
  }
];

// ═══════════ Pancreatitis
function acinar(g, o = {}) {
  g.clear(COL.bg);
  g.disk(40, 62, 30, o.broken ? '#4A1D2A' : '#6B2A45'); g.ring(40, 62, 30, o.broken ? COL.red : COL.pink, 2);
  g.disk(28, 82, 6, COL.violet);
  g.r(68, 56, 76, 10, '#2A2350'); g.r(68, 54, 80, 2, COL.tub); g.r(68, 66, 68, 2, COL.tub);
  g.r(136, 66, 10, 32, '#2A2350'); g.r(134, 66, 2, 32, COL.tub); g.r(146, 54, 2, 44, COL.tub);
  g.r(96, 98, 64, 22, COL.lumen); for (let x = 98; x < 160; x += 8) g.r(x, 98, 4, 3, COL.pink);
}
const PDUCT = [[64, 61], [140, 61], [140, 110], [110, 112]];
function granulesIn(g, t, red) {
  for (let k = 0; k < 16; k++) {
    const a = k * 2.4, r = 6 + (k % 4) * 5, x = 40 + Math.cos(a) * r, y = 58 + Math.sin(a) * r * 0.8;
    const on = red && rnd(k, 57) < red;
    g.r(x, y, 3, 3, on ? (blink(t + k * 0.1, 3) ? COL.red : '#B32638') : COL.gold);
  }
}
SCENES.pancrea = [
  (g, t) => {
    acinar(g); granulesIn(g, t, 0);
    for (let i = 0; i < 7; i++) { const p = (t * 0.2 + i / 7) % 1, [x, y] = along(PDUCT, p); g.r(x - 1, y - 1, 3, 3, y > 98 ? COL.green : COL.gold); }
  },
  (g, t) => {
    acinar(g); granulesIn(g, t, Math.min(1, (t % 8) / 6));
    g.disk(141, 86, 5, COL.stone); g.r(137, 84, 3, 2, '#7A7460');
    for (let i = 0; i < 7; i++) { const p = Math.min(0.66, (t * 0.2 + i / 7) % 1 + i * 0.01), [x, y] = along(PDUCT, Math.min(p, 0.5 - i * 0.03)); g.r(x - 1, y - 1, 3, 3, COL.gold); }
  },
  (g, t) => {
    acinar(g, { broken: true }); granulesIn(g, t, 1);
    const k = Math.min(1, (t % 9) / 6);
    for (let i = 0; i < 6; i++) g.disk(92 + rnd(i, 58) * 50, 18 + rnd(i, 59) * 30, Math.round(2 + k * 5 * rnd(i, 60)), '#2A2030');
    for (let i = 0; i < 10; i++) g.r(96 + rnd(i, 61) * 50, 16 + rnd(i, 62) * 34, 2, 2, '#E8E2D0');
    for (let i = 0; i < 10; i++) { const p = (t * 0.35 + i / 10) % 1, a = -1.2 + rnd(i, 63) * 1.6; g.r(40 + Math.cos(a) * lerp(26, 70, p), 62 + Math.sin(a) * lerp(26, 50, p), 2, 2, COL.red); }
  },
  (g, t) => {
    g.clear(COL.bg);
    g.disk(72, 32, 8, '#6B2A45'); g.disk(84, 30, 9, '#6B2A45'); g.disk(96, 33, 6, '#6B2A45');
    g.r(0, 60, 160, 2, COL.wall); g.r(0, 62, 160, 5, COL.lumen); g.r(0, 67, 160, 2, COL.wall);
    for (let i = 0; i < 6; i++) { const p = (t * 0.4 + i / 6) % 1; g.r(10 + i * 26, lerp(70, 78, p), 2, 3, COL.na); }
    const alarm = blink(t, 1.5);
    g.disk(30, 92, 10, COL.pink); g.disk(48, 92, 10, COL.pink); g.r(38, 78, 2, 8, COL.cap);
    kidneyBean(g, 112, 92, '#A0405A'); kidneyBean(g, 136, 92, '#A0405A');
    if (alarm) { g.ring(39, 92, 21, COL.red); g.ring(124, 92, 22, COL.red); }
    for (let i = 0; i < 10; i++) {
      const p = (t * 0.3 + i / 10) % 1, to = i % 2 ? [124, 86] : [40, 86];
      g.r(lerp(84, to[0], p), lerp(36, to[1], p), 2, 2, COL.orange);
    }
  }
];

// ═══════════ Artritis reumatoide
function jointAR(g, t, s) {
  g.clear(COL.bg);
  g.r(12, 28, 136, 64, '#1E2E5A');
  g.r(10, 24, 2, 72, COL.cap); g.r(148, 24, 2, 72, COL.cap);
  g.r(26, 0, 108, 34, '#D9CBA8'); g.r(26, 86, 108, 34, '#D9CBA8');
  for (let i = 0; i < 24; i++) { g.p(28 + rnd(i, 64) * 104, 4 + rnd(i, 65) * 26, '#B8A880'); g.p(28 + rnd(i, 66) * 104, 90 + rnd(i, 67) * 26, '#B8A880'); }
  g.r(26, 34, 108, 6, COL.bow); g.r(26, 80, 108, 6, COL.bow);
  g.r(12, 28, Math.round(s), 64, '#C24A5E'); g.r(148 - Math.round(s), 28, Math.round(s), 64, '#C24A5E');
  for (let i = 0; i < 8; i++) g.p(30 + ((t * 8 + i * 13) % 100), 44 + tri(rnd(i, 68) * 30 + t * 5, 32), '#62C3C8');
}
SCENES.ar = [
  (g, t) => jointAR(g, t, 4),
  (g, t) => {
    jointAR(g, t, 14);
    for (let i = 0; i < 8; i++) { const y = 30 + ((t * 10 + i * 8) % 60); g.disk(16 + (i % 2) * 6, y, 1, i % 3 ? COL.white : COL.cyan); g.disk(140 - (i % 2) * 6, 90 - (y - 30), 1, COL.white); }
    for (let i = 0; i < 8; i++) g.r(96 + rnd(i, 69) * 40, 44 + tri(rnd(i, 70) * 20 + t * 6, 14), 2, 2, COL.gold);
  },
  (g, t) => {
    jointAR(g, t, 16);
    const len = Math.round(30 + 46 * ((t % 8) / 8));
    g.r(26, 34, len, 7, '#C24A5E'); g.r(26, 79, len, 7, '#C24A5E');
    g.r(134 - Math.round(len / 3), 34, Math.round(len / 3), 7, '#C24A5E');
    const c = blink(t, 1.5) ? '#1E2E5A' : '#2A3A6A';
    g.disk(132, 34, 5, c); g.disk(132, 86, 5, c); g.disk(28, 86, 4, c);
  },
  (g, t) => {
    const k = (t % 8) / 8; jointAR(g, t, lerp(16, 4, k));
    for (let i = 0; i < 8; i++) { const p = (t * 0.3 + i / 8) % 1; g.r(30 + i * 14, lerp(18, 52, p), 2, 2, COL.cyan); }
  }
];

// ═══════════ Gota
function uricChain(g, t, blocked) {
  g.disk(30, 32, 5, COL.cyan); g.disk(30, 32, 2, COL.blood);
  g.disk(80, 32, 7, COL.gold); for (let d = -3; d <= 3; d++) g.r(73, 32 + d, 7 - 2 * Math.abs(d), 1, COL.bg);
  g.disk(130, 32, 5, blocked ? COL.dead : COL.white);
  for (let x = 38; x < 70; x += 4) g.p(x, 32, COL.frame);
  for (let x = 90; x < 122; x += 4) g.p(x, 32, COL.frame);
  for (let i = 0; i < 3; i++) {
    const p = (t * 0.35 + i / 3) % 1;
    if (p < 0.5) g.r(lerp(36, 72, p * 2), 31, 3, 3, COL.cyan);
    else if (!blocked) g.r(lerp(88, 124, (p - 0.5) * 2), 31, 3, 3, COL.white);
    else g.r(70 - i * 4, 31, 3, 3, COL.cyan);
  }
  if (blocked) xMark(g, t, 80, 32, 5);
}
function urTank(g, t, level) {
  g.r(40, 52, 2, 54, COL.cap); g.r(118, 52, 2, 54, COL.cap); g.r(40, 104, 80, 2, COL.cap);
  const top = Math.round(104 - level * 48);
  g.r(42, top, 76, 104 - top, '#1E3A6A');
  for (let x = 42; x < 118; x += 4) g.r(x, 71, 2, 1, COL.gold);
  const n = Math.round(level * 16);
  for (let i = 0; i < n; i++) g.p(44 + rnd(i, 71) * 72, top + 2 + rnd(i, 72) * (102 - top), COL.white);
  const nd = Math.max(0, Math.floor((level - 0.68) * 40));
  for (let k = 0; k < nd; k++) { const x = 46 + ((k * 13) % 66); g.line(x, 102, x + 3, 95, COL.white); }
}
function needleField(g, n, x0, y0, w, h) { for (let k = 0; k < n; k++) { const x = x0 + rnd(k, 73) * w, y = y0 + rnd(k, 74) * h; g.line(x, y, x + 4, y - 3, COL.white); g.p(x + 4, y - 3, COL.gold); } }
SCENES.gota = [
  (g, t) => { g.clear(COL.bg); uricChain(g, t, false); urTank(g, t, 0.45 + 0.5 * ((t % 10) / 10)); },
  (g, t) => {
    g.clear(COL.bg);
    g.r(4, 82, 36, 10, '#C98E66'); g.r(4, 72, 14, 12, '#C98E66'); g.r(36, 84, 8, 7, blink(t) ? COL.red : '#C98E66');
    g.line(42, 82, 58, 56, COL.frame); g.line(42, 90, 58, 92, COL.frame);
    frameBox(g, 58, 20, 98, 74); g.r(60, 22, 94, 70, '#1E3A6A');
    needleField(g, Math.min(22, 4 + Math.floor((t % 8) * 3)), 64, 30, 84, 58);
  },
  (g, t) => {
    g.clear(blink(t, 1) ? '#2A0E1E' : COL.bg);
    g.disk(40, 54, 15, '#7A4AB0'); g.disk(40, 54, 5, COL.violet); needleField(g, 5, 30, 50, 18, 10);
    for (let i = 0; i < 10; i++) { const p = (t * 0.4 + i / 10) % 1; g.r(lerp(54, 150, p), 54 + Math.sin(i * 1.7) * lerp(2, 20, p), 2, 2, COL.orange); }
    for (let i = 0; i < 5; i++) { const p = (t * 0.3 + i / 5) % 1; neutro(g, 50 + i * 16, Math.round(lerp(118, 80, p))); }
  },
  (g, t) => {
    g.clear(COL.bg);
    g.disk(40, 54, 15, '#7A4AB0'); g.disk(40, 54, 5, COL.violet);
    for (let i = 0; i < 3; i++) g.r(70 + i * 24, 50 + (i % 2) * 6, 2, 2, COL.orange);
    for (let i = 0; i < 4; i++) {
      const x = 44 + i * 24, y = 86;
      g.disk(x, y, 6, COL.white); g.line(x - 4, y, x + 4, y, COL.green); g.line(x, y - 4, x, y + 4, COL.green); g.p(x - 2, y - 2, COL.violet); g.p(x + 2, y + 2, COL.violet);
      xMark(g, t + i * 0.2, x, y, 3);
    }
    for (let i = 0; i < 6; i++) { const p = (t * 0.4 + i / 6) % 1; g.r(lerp(10, 140, p), 70 + Math.sin(p * 9 + i) * 3, 2, 2, COL.cyan); }
  },
  (g, t) => {
    g.clear(COL.bg); uricChain(g, t, true);
    const lv = lerp(0.95, 0.35, (t % 10) / 10); urTank(g, t, lv);
    gauge(g, 136, 52, 8, 44, lv, lv < 0.6 ? COL.green : COL.gold);
  }
];

// ═══════════ Valvulopatía aórtica
function aoHeart(g, t, o) {
  g.clear(COL.bg);
  g.r(70, 4, 90, 18, COL.wall); g.r(72, 6, 88, 14, COL.lumen);
  g.r(70, 4, 20, 56, COL.wall); g.r(72, 6, 16, 56, COL.lumen);
  ell(g, o.cx, o.cy, o.rx + o.wall, o.ry + o.wall, COL.myo);
  ell(g, o.cx, o.cy, o.rx, o.ry, COL.lumen);
  // tracto de salida: une la cavidad del VI con la válvula
  const h = o.cy - o.ry - 58; g.r(70, 58, 2, h, COL.myo); g.r(88, 58, 2, h, COL.myo); g.r(72, 58, 16, h + 4, COL.lumen);
}
function leaflets(g, open, thick, gap) {
  const c = thick ? '#E0DCC8' : COL.cap, w = thick ? 3 : 1;
  if (open) { const o = thick ? 2 : 7; g.r(80 - o - w, 52, w, 8, c); g.r(80 + o, 52, w, 8, c); if (thick) { g.r(73, 54, 5, 6, c); g.r(82, 54, 5, 6, c); g.p(75, 55, COL.white); g.p(84, 57, COL.white); } }
  else { const h = gap || 0; g.r(72, 58, 8 - h, w + 1, c); g.r(80 + h, 58, 8 - h, w + 1, c); }
}
function aoFlow(g, t, n, sp, jitter = 0) {
  for (let i = 0; i < n; i++) {
    const p = (t * sp + i / n) % 1, [x, y] = along([[80, 84], [80, 13], [158, 13]], p);
    const j = jitter && y < 52 && y > 10 && x < 90 ? Math.sin(p * 40 + i) * jitter * (1 - y / 52) * 2 : 0;
    g.r(x - 1 + j, y - 1, 3, 2, COL.rbc);
  }
}
SCENES.aortica = [
  (g, t) => {
    const sys = (t * 0.8) % 1 < 0.45;
    aoHeart(g, t, { cx: 70, cy: 90, rx: sys ? 23 : 27, ry: sys ? 16 : 19, wall: 4 }); leaflets(g, sys, false); aoFlow(g, t, 10, 0.35);
  },
  (g, t) => {
    const sys = (t * 0.8) % 1 < 0.45;
    aoHeart(g, t, { cx: 70, cy: 90, rx: 20, ry: 14, wall: 8 }); leaflets(g, sys, true); aoFlow(g, t, 10, 0.6, 4);
    if (blink(t, 4)) { g.line(96, 26, 104, 22, COL.gold); g.line(96, 34, 106, 34, COL.gold); }
  },
  (g, t) => {
    aoHeart(g, t, { cx: 66, cy: 92, rx: 34, ry: 23, wall: 3 }); leaflets(g, false, false, 3);
    for (let i = 0; i < 8; i++) { const p = (t * 0.35 + i / 8) % 1, [x, y] = along([[158, 13], [80, 13], [80, 72], [62, 94]], p); g.r(x - 1, y - 1, 3, 2, COL.rbc); }
    if (blink(t, 2)) g.spr(ARROW_DN, 92, 58, { X: COL.red });
  },
  (g, t) => {
    const sys = (t * 0.8) % 1 < 0.45;
    aoHeart(g, t, { cx: 70, cy: 90, rx: sys ? 23 : 27, ry: sys ? 16 : 19, wall: 4 }); leaflets(g, sys, false); aoFlow(g, t, 8, 0.35);
    for (let y = 50; y <= 66; y += 4) g.r(72, y, 16, 1, COL.gold);
    for (let x = 72; x <= 88; x += 4) g.r(x, 50, 1, 17, COL.gold);
    g.line(156, 118, 156, 13, '#AEBBD0'); g.line(156, 13, 80, 13, '#AEBBD0'); g.line(80, 13, 80, 48, '#AEBBD0');
    if (blink(t, 2)) g.r(78, 46, 5, 4, COL.white);
  }
];

// ═══════════ Tromboembolia pulmonar
const TEP_PATH = [[24, 106], [24, 66], [56, 66], [66, 56], [66, 25], [146, 25]];
function tepBody(g) {
  g.clear(COL.bg);
  g.r(10, 74, 28, 46, '#C98E66'); g.r(8, 112, 36, 8, '#C98E66');
  g.r(22, 64, 5, 54, '#3A4AA0'); g.r(22, 63, 36, 5, '#3A4AA0');
  g.disk(66, 58, 12, COL.myo); g.disk(66, 58, 9, COL.lumen);
  g.disk(96, 60, 13, COL.myo); g.disk(96, 60, 10, COL.lumen);
  g.r(63, 22, 6, 28, '#3A4AA0'); g.r(63, 22, 84, 6, '#3A4AA0');
  for (let k = 0; k < 3; k++) { g.line(126 + k * 8, 27, 132 + k * 10, 44, '#3A4AA0'); g.line(126 + k * 8, 22, 134 + k * 8, 8, '#3A4AA0'); }
}
function rvlv(g, t, rv, lv) {
  g.clear(COL.bg);
  g.disk(104, 60, lv + 5, COL.myo); g.disk(104, 60, lv, COL.lumen);
  const cx = 62 + Math.round((rv - 14) * 0.9);
  ell(g, cx, 60, rv + 2, Math.round(rv * 0.9) + 2, COL.myo); ell(g, cx, 60, rv, Math.round(rv * 0.9), COL.lumen);
  g.r(cx + rv + 1, 50, 2, 20, COL.myo);
  for (let i = 0; i < 4; i++) { const p = (t * 0.4 + i / 4) % 1; g.r(cx - rv + 4 + i * 6, lerp(60 - rv, 8, p), 2, 2, COL.gold); }
}
SCENES.tep = [
  (g, t) => {
    tepBody(g);
    const p = (t * 0.15) % 1, [x, y] = along(TEP_PATH, p);
    g.r(x - 3, y - 2, 6, 4, COL.fibrin); g.r(x - 2, y - 1, 3, 2, COL.rbcD);
    if (p < 0.08 && blink(t, 3)) g.ring(24, 104, 5, COL.red);
  },
  (g, t) => {
    g.clear(COL.bg);
    g.r(0, 18, 104, 6, '#3A4AA0'); g.line(104, 20, 150, 8, '#3A4AA0'); g.line(104, 21, 124, 32, '#3A4AA0'); g.line(124, 32, 154, 44, '#3A4AA0');
    g.r(118, 28, 8, 6, COL.fibrin);
    for (let i = 0; i < 5; i++) { const p = (t * 0.4 + i / 5) % 1; g.r(lerp(0, 116, p), 20, 3, 2, COL.rbc); }
    for (let y = 60; y <= 104; y += 18) for (let x = 14; x <= 150; x += 18) {
      const perf = x < 80;
      g.ring(x, y, 6, perf ? COL.rbc : COL.dead, 2);
      if (blink(t + (x + y) * 0.01, 1.5)) g.r(x - 1, y - 1, 2, 2, COL.cyan);
    }
  },
  (g, t) => { const k = Math.min(1, (t % 8) / 5); rvlv(g, t, Math.round(lerp(14, 22, k)), Math.round(lerp(16, 12, k))); },
  (g, t) => {
    const ph = (t % 10) / 10, lys = ph > 0.5 ? (ph - 0.5) / 0.5 : 0;
    rvlv(g, t, Math.round(lerp(22, 15, lys)), Math.round(lerp(10, 15, lys)));
    const out = Math.round(lerp(1, 5, lys));
    for (let i = 0; i < out; i++) { const p = (t * 0.5 + i / out) % 1; g.r(118 + p * 20, lerp(46, 20, p), 2, 2, COL.rbc); }
    g.r(70, 88, 20, 6, COL.white); g.r(90, 90, 6, 2, COL.cap); g.r(64, 89, 6, 4, COL.cyan);
    if (ph > 0.5) for (let i = 0; i < 5; i++) { const p = (t * 0.6 + i / 5) % 1; g.r(lerp(96, 66, p), lerp(90, 66, p), 2, 2, COL.cyan); }
    gauge(g, 148, 20, 6, 60, ph < 0.5 ? lerp(0.55, 0.2, ph / 0.5) : lerp(0.2, 0.6, lys), COL.red);
  }
];
