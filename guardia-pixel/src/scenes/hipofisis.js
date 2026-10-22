// ═══════════ Tumores hipofisarios: silla turca, quiasma y los tres adenomas funcionantes
const HIPO_GLAND = '#D77A92', HIPO_GLAND2 = '#E58FA5', HIPO_NERVE = '#E8DDB5', HIPO_ADE = '#9A5AC0', HIPO_ADE2 = '#B98AE0', HIPO_GH = '#3FBF7A', HIPO_SKIN = '#C98E66';

// Corte coronal: hipotálamo, tallo, senos cavernosos, silla turca y seno esfenoidal
function hipoBase(g) {
  g.clear(COL.bg);
  g.r(0, 0, 160, 24, '#151034');
  ell(g, 80, 11, 24, 9, '#5A2A4A'); ell(g, 80, 11, 20, 7, '#7A3A5E');
  g.r(78, 18, 4, 50, COL.pink);
  [34, 126].forEach((x) => {
    ell(g, x, 80, 12, 14, '#2E2466');
    g.disk(x + (x < 80 ? 3 : -3), 75, 4, COL.rbc); g.p(x + (x < 80 ? 2 : -4), 74, '#FF9AA5');
    [[-5, 85], [0, 89], [5, 86]].forEach(([dx, y]) => g.r(x + dx - 1, y, 2, 2, COL.gold));
  });
  g.r(46, 102, 68, 18, '#1E2550');
  g.r(50, 60, 6, 42, COL.stone); g.r(104, 60, 6, 42, COL.stone); g.r(50, 96, 60, 6, COL.stone);
  g.r(47, 58, 11, 3, COL.stone); g.r(102, 58, 11, 3, COL.stone);
  g.r(58, 62, 19, 1, '#8A8FB0'); g.r(83, 62, 19, 1, '#8A8FB0');
}
function hipoGland(g) { ell(g, 80, 80, 21, 13, HIPO_GLAND); ell(g, 80, 78, 17, 9, HIPO_GLAND2); }
// Quiasma en X: las fibras nasales se cruzan en el centro (cy)
function hipoChiasm(g, t, cy, hurt) {
  for (let d = 0; d < 3; d++) {
    g.line(50, 31 + d, 80, cy - 1 + d, HIPO_NERVE); g.line(80, cy - 1 + d, 110, 43 + d, HIPO_NERVE);
    g.line(50, 43 + d, 80, cy - 1 + d, HIPO_NERVE); g.line(80, cy - 1 + d, 110, 31 + d, HIPO_NERVE);
  }
  if (hurt > 0) { g.disk(80, cy, 2, COL.red); if (blink(t, 3)) g.ring(80, cy, 4 + Math.round(hurt), COL.red); }
}
function hipoSignals(g, t, cy, blocked) {
  const P1 = [[50, 32], [80, cy], [110, 44]], P2 = [[50, 44], [80, cy], [110, 32]];
  for (let i = 0; i < 6; i++) {
    const path = i % 2 ? P2 : P1, p = (t * 0.4 + i / 6) % 1;
    if (blocked && p > 0.4) { if (p < 0.7 && blink(t + i * 0.3, 3)) { const [x, y] = along(path, 0.4); g.r(x - 1, y - 1, 2, 2, COL.red); } continue; }
    const [x, y] = along(path, p); g.r(x - 1, y - 1, 2, 2, COL.white);
  }
}
// Campo visual de un ojo; side −1: el lado temporal está a la izquierda (OI), +1 a la derecha (OD)
function hipoField(g, cx, cy, side, loss) {
  g.disk(cx, cy, 9, COL.bow);
  for (let y = -9; y <= 9; y++) {
    const f = clamp01(y < 0 ? loss / 0.5 : (loss - 0.5) / 0.5);
    if (f <= 0) continue;
    const w = Math.round(Math.sqrt(Math.max(0, 81 - y * y))), len = Math.round(w * f);
    if (len <= 0) continue;
    if (side < 0) g.r(cx - w, cy + y, len, 1, '#1B1636'); else g.r(cx + w - len + 1, cy + y, len, 1, '#1B1636');
  }
  g.r(cx, cy - 9, 1, 19, COL.frame); g.disk(cx, cy, 1, COL.white); g.ring(cx, cy, 9, COL.frame);
}
// Silla turca pequeña (para los ejes hormonales)
function hipoMini(g, cx, cy, ade) {
  g.r(cx - 16, cy - 8, 3, 18, COL.stone); g.r(cx + 13, cy - 8, 3, 18, COL.stone); g.r(cx - 16, cy + 8, 32, 3, COL.stone);
  g.r(cx - 1, cy - 26, 3, 20, COL.pink); ell(g, cx, cy - 28, 10, 5, '#7A3A5E');
  ell(g, cx, cy, 12, 7, HIPO_GLAND); g.disk(cx + 3, cy, 5, ade);
}
function hipoPill(g, x, y, c) { g.r(x - 3, y - 1, 3, 3, COL.white); g.r(x, y - 1, 3, 3, c); }
function hipoHand(g, x, y, s) {
  const pw = Math.round(15 * s), ph = Math.round(12 * s), fw = Math.max(2, Math.round(3 * s)), fh = Math.round(10 * s);
  g.r(x, y - ph, pw, ph, HIPO_SKIN);
  for (let k = 0; k < 4; k++) g.r(x + k * Math.round(pw / 4), y - ph - fh + (k === 0 || k === 3 ? 2 : 0), fw, fh, HIPO_SKIN);
  g.r(x - Math.round(5 * s), y - ph + 2, Math.round(6 * s), fw, HIPO_SKIN);
  const rx = x + Math.round(pw / 4), ry = y - ph - Math.round(fh / 2);
  g.r(rx - 1, ry, 5, 2, fw > 3 ? COL.red : COL.gold);
}

SCENES.hipofisis = [
  // 1. Anatomía: la hipófisis bajo el quiasma, entre los senos cavernosos
  (g, t) => {
    hipoBase(g); hipoGland(g); hipoChiasm(g, t, 38, 0); hipoSignals(g, t, 38, false);
    for (let i = 0; i < 4; i++) { const p = (t * 0.5 + i / 4) % 1; g.r(79, Math.round(lerp(20, 66, p)), 2, 2, COL.cyan); }
    for (let i = 0; i < 8; i++) {
      const p = (t * 0.35 + i / 8) % 1, sx = i % 2 ? 1 : -1;
      g.r(80 + sx * lerp(10, 40, p), 80 + Math.sin(p * 6 + i) * 4, 2, 2, COL.gold);
    }
    hipoField(g, 14, 27, -1, 0); hipoField(g, 146, 27, 1, 0);
  },
  // 2. Macroadenoma: crece hacia arriba, aplasta el quiasma y la hipófisis sana
  (g, t) => {
    const p = clamp01(0.35 + (t % 9) / 2.5), hurt = clamp01((p - 0.55) / 0.45);
    hipoBase(g);
    g.r(61, 92, 38, 4, HIPO_GLAND);
    const top = Math.round(lerp(74, 43, p)), r2 = Math.round(lerp(6, 15, p));
    ell(g, 80, 82, 20, 10, HIPO_ADE); ell(g, 80, top + r2, r2, r2, HIPO_ADE);
    for (let i = 0; i < 10; i++) g.p(66 + rnd(i, 91) * 28, Math.max(top + 3, 50) + rnd(i, 92) * (90 - Math.max(top + 3, 50)), HIPO_ADE2);
    const cy = 38 - Math.round(hurt * 3);
    hipoChiasm(g, t, cy, hurt); hipoSignals(g, t, cy, hurt > 0.2);
    hipoField(g, 14, 27, -1, hurt); hipoField(g, 146, 27, 1, hurt);
  },
  // 3. Prolactinoma: la dopamina frena la PRL; la cabergolina encoge el tumor
  (g, t) => {
    const cab = clamp01((t % 10) / 5);
    hipoBase(g); hipoGland(g); hipoChiasm(g, t, 38, 0);
    for (let i = 0; i < 5; i++) { const p = (t * 0.5 + i / 5) % 1; g.r(79, Math.round(lerp(20, 68, p)), 2, 2, COL.cyan); }
    const r = Math.round(lerp(9, 4, cab)); g.disk(91, 81, r, HIPO_ADE); g.ring(91, 81, r, HIPO_ADE2);
    const n = Math.round(lerp(10, 2, cab));
    for (let i = 0; i < n; i++) { const p = (t * 0.45 + i / n) % 1, [x, y] = along([[98, 80], [126, 70], [142, 66]], p); g.r(x - 1, y - 1, 2, 2, COL.gold); }
    for (let k = 0; k < 3; k++) {
      const q = (t * 0.45 + k / 3) % 1, [x, y] = along([[4, 44], [44, 50], [91 - r - 3, 77 + (k - 1) * 4]], q);
      hipoPill(g, x, y, COL.orange);
    }
    gauge(g, 146, 34, 8, 62, lerp(0.92, 0.2, cab), cab > 0.6 ? COL.green : COL.gold);
  },
  // 4. Acromegalia: GH → hígado → IGF-1; la glucosa no frena la GH
  (g, t) => {
    g.clear(COL.bg);
    hipoMini(g, 28, 40, HIPO_GH);
    for (let i = 0; i < 8; i++) { const p = (t * 0.4 + i / 8) % 1, [x, y] = along([[36, 44], [52, 60], [64, 72]], p); g.r(x - 1, y - 1, 3, 2, COL.green); }
    g.disk(64, 84, 15, COL.liver); g.disk(82, 80, 10, COL.liver);
    for (let i = 0; i < 12; i++) g.r(52 + rnd(i, 93) * 36, 74 + rnd(i, 94) * 20, 2, 2, COL.liverD);
    for (let i = 0; i < 7; i++) { const p = (t * 0.4 + i / 7) % 1, [x, y] = along([[90, 76], [104, 70], [116, 80]], p); g.r(x - 1, y - 1, 2, 2, COL.orange); }
    hipoHand(g, 118, 112, lerp(1, 1.45, clamp01((t % 10) / 8)));
    for (let k = 0; k < 6; k++) {
      const q = (t * 0.35 + k / 6) % 1, x = lerp(70 + (k % 3) * 10, 38 + (k % 3) * 4, q), y = lerp(0, 22, q);
      g.r(x, y, 3, 3, COL.white);
    }
    gauge(g, 148, 12, 6, 50, 0.82 + Math.sin(t * 3) * 0.04, COL.green);
    g.r(144, 57, 14, 1, COL.red);
    xMark(g, t, 46, 26, 3);
  },
  // 5. Enfermedad de Cushing: ACTH → suprarrenales → cortisol; el cortisol ya no frena al tumor
  (g, t) => {
    g.clear(COL.bg);
    hipoMini(g, 28, 40, HIPO_ADE);
    [70, 110].forEach((x) => { kidneyBean(g, x, 102, '#A0405A'); for (let k = 0; k <= 7; k++) g.r(x - k, 84 + k, 2 * k + 1, 1, COL.orange); });
    for (let i = 0; i < 8; i++) {
      const p = (t * 0.35 + i / 8) % 1, X = i % 2 ? 110 : 70, [x, y] = along([[38, 44], [56, 62], [X, 82]], p);
      g.r(x - 1, y - 1, 3, 2, COL.violet);
    }
    for (let i = 0; i < 8; i++) {
      const p = (t * 0.4 + i / 8) % 1, X = i % 2 ? 110 : 70, [x, y] = along([[X, 86], [132, 66], [142, 56]], p);
      g.r(x - 1, y - 1, 2, 2, COL.gold);
    }
    for (let x = 46; x < 140; x += 6) g.r(x, 24, 3, 1, COL.goldD);
    { const q = clamp01(((t * 0.3) % 1) / 0.8); hipoPill(g, lerp(136, 50, q), 22, COL.cyan); }
    xMark(g, t, 46, 28, 3);
    gauge(g, 148, 20, 8, 60, 0.9, COL.gold);
  }
];
