// ═══════════ Enfermedad renal crónica: hiperfiltración, nefroprotección y complicaciones
// Todo lleva el prefijo erc para no chocar con las utilidades de otras escenas.
const ERC_U = [[28, 34], [80, 34], [132, 34], [28, 82], [80, 82], [132, 82]];
const ERC_GRAY = '#3A3F5E', ERC_DARK = '#1A1D3A', ERC_SPACE = '#151A3E', ERC_TUB = '#2A2350';

// Una nefrona en miniatura: aferente, glomérulo con cápsula de Bowman y túbulo
function ercUnit(g, t, x, y, i, o) {
  const dead = o.dead, r = o.r, cap = r + 4;
  const wall = dead ? ERC_GRAY : COL.wall, lum = dead ? ERC_DARK : COL.lumen;
  const tw = dead ? ERC_GRAY : COL.tub, tl = dead ? ERC_DARK : ERC_TUB;
  const th = dead ? 2 : o.hot ? 6 : 3;
  g.r(x - 26, y - th / 2 - 1, 27 - cap, th + 2, wall); g.r(x - 26, y - th / 2, 27 - cap, th, lum);
  const tx = x + 4, ty = y + cap - 1;
  g.r(tx - 2, ty, 5, 11, tw); g.r(tx - 1, ty, 3, 10, tl);
  g.r(tx - 2, ty + 8, 20, 5, tw); g.r(tx - 1, ty + 9, 19, 3, tl);
  g.disk(x, y, cap, ERC_SPACE); g.ring(x, y, cap, dead ? COL.dead : COL.bow, 2);
  if (dead) {
    g.disk(x, y, r, ERC_GRAY);
    g.line(x - r + 2, y - 1, x + r - 2, y + 1, COL.dead); g.line(x - 1, y - r + 2, x + 1, y + r - 2, COL.dead);
    return;
  }
  g.disk(x, y, r, '#5A1626');
  const q = Math.max(2, Math.round(r / 3)), d = Math.round(r / 2.4);
  [[-d, -d], [d, -d], [-d, d], [d, d]].forEach(([dx, dy]) => g.ring(x + dx, y + dy, q, '#C24A5E'));
  if (o.hot && blink(t + i * 0.3, 2)) g.ring(x, y, cap + 2, COL.gold);
  const n = o.hot ? 4 : 2, sp = o.hot ? 0.8 : 0.4;
  for (let k = 0; k < n; k++) { const p = (t * sp + k / n + i * 0.17) % 1; g.r(lerp(x - 26, x - cap, p), y - 1 + (th > 3 ? (k % 2 ? 1 : -2) : 0), 2, 2, COL.rbc); }
  const m = o.hot ? 6 : 2;
  for (let k = 0; k < m; k++) {
    const p = (t * sp + k / m + i * 0.23) % 1, [px, py] = along([[tx, ty], [tx, ty + 10], [tx + 18, ty + 10]], p);
    g.r(px, py - 1, 2, 2, COL.urine);
  }
}

// Un glomérulo de cerca: aferente, eferente, túbulo proximal, túbulo distal con mácula densa y manómetro
const ERC_PATH = [[75, 60], [75, 72], [75, 92], [134, 92]];
function ercZoom(g, t, o) {
  g.clear(COL.bg);
  vessel(g, 0, 60, 50, o.aff); vessel(g, 80, 160, 28, o.eff);
  // túbulo distal que pasa junto a la aferente: la mácula densa
  g.r(0, 70, 52, 9, COL.tub); g.r(0, 72, 52, 5, ERC_TUB); g.r(40, 70, 12, 2, COL.gold);
  // túbulo proximal: baja de la cápsula y gira a la derecha
  g.r(69, 64, 12, 30, COL.tub); g.r(71, 64, 8, 28, ERC_TUB);
  g.r(69, 86, 67, 12, COL.tub); g.r(71, 88, 65, 8, ERC_TUB);
  // cápsula de Bowman y ovillo capilar
  g.disk(74, 50, 18, ERC_SPACE); g.ring(74, 50, 19, COL.bow, 2);
  g.disk(74, 50, 12, '#5A1626');
  [[70, 46], [78, 46], [70, 54], [78, 54], [74, 50]].forEach(([x, y]) => g.ring(x, y, 3, '#C24A5E'));
  if (o.scar) { g.disk(68, 44, 4, ERC_GRAY); g.p(67, 43, COL.dead); g.p(69, 45, COL.dead); }
  if (o.press > 0.6 && blink(t, 3)) g.ring(74, 50, 14, COL.red);
  // sangre: eritrocitos y albúmina del plasma que siguen de largo
  const fl = o.press > 0.6 ? 1 : 0.7;
  for (let i = 0; i < 7; i++) g.r((t * 26 * fl + i * 60 / 7) % 60, 50 + (rnd(i, 91) - 0.5) * Math.max(1, o.aff - 3) - 1, 2, 2, i % 3 === 2 ? COL.gold : COL.rbc);
  for (let i = 0; i < 6; i++) g.r(88 + ((t * 24 * fl + i * 72 / 6) % 72), 28 + (rnd(i, 92) - 0.5) * Math.max(1, o.eff - 2) - 1, 2, 2, i % 3 === 1 ? COL.gold : COL.rbc);
  // filtrado normal
  for (let i = 0; i < 7; i++) { const p = (t * 0.25 + i / 7) % 1, [x, y] = along(ERC_PATH, p); g.r(x - 1 + (rnd(i, 93) - 0.5) * 4, y - 1, 2, 2, COL.urine); }
  // albúmina que se escapa a la orina
  for (let i = 0; i < o.alb; i++) { const p = (t * 0.2 + i / o.alb + 0.07) % 1, [x, y] = along(ERC_PATH, p); g.r(x - 1, y - 2, 3, 3, COL.gold); }
  // sodio que llega a la mácula densa y, si hay iSGLT2, la señal que contrae la aferente
  for (let i = 0; i < o.na; i++) { const p = (t * 0.3 + i / o.na) % 1; g.r(lerp(0, 44, p), 73 + (i % 2), 2, 2, COL.na); }
  if (o.signal) for (let i = 0; i < 2; i++) { const p = (t * 0.6 + i / 2) % 1; g.r(45, Math.round(lerp(68, 59, p)), 2, 2, COL.gold); }
  mark(g, t, 30, 50, o.aff, o.am); mark(g, t, 124, 28, o.eff, o.em);
  gauge(g, 146, 46, 8, 34, o.press, o.press > 0.6 ? COL.red : COL.green);
}

function ercKidney(g, x, y, ry) {
  ell(g, x, y, 13, ry, '#7A3046'); ell(g, x - 2, y, 8, ry - 5, '#5A2236');
  g.disk(x + 13, y, 5, COL.bg);
  for (let k = 0; k < 6; k++) g.r(x - 9 + rnd(k, 94) * 14, y - ry + 4 + rnd(k, 95) * (2 * ry - 8), 2, 2, ERC_GRAY);
}
function ercDots(g, pts, c) { for (let k = 0; k <= 12; k++) { const [x, y] = along(pts, k / 12); g.p(x, y, c); } }

const ERC_EPO = [[36, 50], [62, 30], [98, 22]], ERC_D = [[36, 74], [62, 86], [90, 90]];
const ERC_GUT = [[94, 86], [148, 86], [148, 102], [94, 102], [84, 102]];
SCENES.erc = [
  // 1. Pérdida de nefronas e hiperfiltración
  (g, t) => {
    g.clear(COL.bg);
    ERC_U.forEach(([x, y], i) => ercUnit(g, t, x, y, i, i % 2 ? { dead: true, r: 6 } : { hot: true, r: 10 }));
  },
  // 2. Presión glomerular alta y albuminuria
  (g, t) => ercZoom(g, t, { aff: 12, eff: 5, press: 0.9, alb: 4, scar: true, na: 2, am: 'dil', em: 'con' }),
  // 3. Nefroprotección: IECA/ARA-II dilatan la eferente, iSGLT2 contrae la aferente
  (g, t) => ercZoom(g, t, { aff: 6, eff: 10, press: 0.35, alb: 0, scar: true, na: 7, signal: true, am: 'con', em: 'dil' }),
  // 4. Lo que deja de fabricar: eritropoyetina y calcitriol
  (g, t) => {
    g.clear(COL.bg);
    ercKidney(g, 24, 62, 20);
    g.disk(100, 20, 7, COL.cap); g.disk(150, 20, 7, COL.cap); g.r(100, 15, 50, 10, COL.cap); g.r(103, 17, 44, 6, '#7A2A3A');
    vessel(g, 84, 160, 44, 6);
    for (let k = 0; k < 2; k++) g.r(84 + ((t * 18 + k * 38) % 76), 43, 3, 2, COL.rbc);
    { const p = (t * 0.3) % 1; g.r(124, Math.round(lerp(24, 40, p)), 2, 2, COL.rbc); }
    ercDots(g, ERC_EPO, COL.frame);
    { const p = (t * 0.22) % 1, [x, y] = along(ERC_EPO, p); g.r(x - 1, y - 1, 3, 3, COL.cyan); }
    g.spr(ARROW_DN, 50, 30, { X: COL.red });
    // intestino con calcio que pasa de largo
    g.r(92, 82, 60, 9, COL.pink); g.r(144, 82, 8, 25, COL.pink); g.r(84, 98, 68, 9, COL.pink);
    g.r(94, 84, 56, 5, '#5A1E30'); g.r(146, 84, 4, 21, '#5A1E30'); g.r(84, 100, 66, 5, '#5A1E30');
    for (let k = 0; k < 7; k++) { const p = (t * 0.18 + k / 7) % 1, [x, y] = along(ERC_GUT, p); g.r(x - 1, y - 1, 2, 2, COL.white); }
    if (blink(t, 1)) g.r(118, 78, 2, 2, COL.white);
    ercDots(g, ERC_D, COL.frame);
    { const p = (t * 0.22 + 0.5) % 1, [x, y] = along(ERC_D, p); g.r(x - 1, y - 1, 3, 3, COL.gold); }
    g.spr(ARROW_DN, 56, 72, { X: COL.red });
  },
  // 5. Lo que deja de eliminar: fósforo, potasio y ácido; la PTH saca calcio del hueso
  (g, t) => {
    g.clear(COL.bg);
    g.r(0, 6, 160, 2, COL.wall); g.r(0, 8, 160, 26, COL.blood); g.r(0, 34, 160, 2, COL.wall);
    const fill = Math.min(1, 0.6 + (t % 8) / 20);
    const DOT = [[COL.violet, 14, 3], [COL.green, 11, 3], [COL.red, 11, 2], [COL.cyan, 3, 2]];
    DOT.forEach(([c, n, s], j) => {
      const m = j === 3 ? n : Math.round(n * fill);
      for (let i = 0; i < m; i++) g.r(2 + tri(rnd(i, 96 + j) * 300 + t * (6 + rnd(i, 100 + j) * 6), 154), 10 + tri(rnd(i, 104 + j) * 40 + t * (4 + rnd(i, 108 + j) * 5), 21), s, s, c);
    });
    ercKidney(g, 22, 70, 15);
    g.r(19, 85, 6, 18, COL.tub); g.r(21, 85, 2, 16, ERC_TUB); xMark(g, t, 22, 96, 4);
    ell(g, 74, 66, 7, 11, COL.pink); ell(g, 92, 66, 7, 11, COL.pink); g.r(74, 64, 18, 5, COL.pink);
    const pr = blink(t, 1.5) ? 4 : 3;
    [[67, 58], [99, 58], [67, 74], [99, 74]].forEach(([x, y]) => g.disk(x, y, pr, COL.orange));
    for (let k = 0; k < 5; k++) { const p = (t * 0.35 + k / 5) % 1, [x, y] = along([[83, 78], [83, 92], [52 + k * 14, 102]], p); g.r(x - 1, y - 1, 2, 2, COL.orange); }
    g.r(40, 102, 86, 14, COL.cap);
    const holes = 6 + Math.floor((t % 8) * 1.5);
    for (let k = 0; k < holes; k++) g.r(43 + rnd(k, 97) * 78, 104 + rnd(k, 98) * 9, 3, 2, ERC_TUB);
    for (let k = 0; k < 3; k++) { const p = (t * 0.3 + k / 3) % 1; g.r(48, Math.round(lerp(100, 38, p)), 2, 2, COL.white); }
    frameBox(g, 118, 50, 40, 30); ecgTrace(g, 'peakedT', t, 70, 120, 156, COL.ecg, 0.8);
  }
];
