// ═══════════ Intestino irritable: eje intestino-cerebro, hipersensibilidad, Bristol, FODMAP y fármacos
const SII_BR = '#9A6A35', SII_BRD = '#6B3A1A', SII_SOFT = '#B07A45', SII_LIQ = '#C89060';
function siiBrain(g, x, y, r, hot, t) {
  const o = Math.round(r * 0.6);
  g.disk(x - o, y, r, COL.pink); g.disk(x + o, y, r, COL.pink);
  for (let i = 0; i < 4; i++) { const lx = x - r + i * Math.round(r / 1.4) + 1; g.line(lx, y - Math.round(r / 2), lx + 2, y + Math.round(r / 2), COL.brainD); }
  if (hot && blink(t, 3)) g.ring(x, y, r + o + 3, COL.red);
}
// Segmento de intestino horizontal con haustras
function siiTube(g, x0, x1, cy, h) {
  g.r(x0, cy - h - 3, x1 - x0, 3, COL.myo); g.r(x0, cy + h, x1 - x0, 3, COL.myo); g.r(x0, cy - h, x1 - x0, 2 * h, COL.lumen);
  for (let x = x0 + 6; x < x1; x += 10) { g.r(x, cy - h, 1, 2, COL.myo); g.r(x, cy + h - 2, 1, 2, COL.myo); }
}

SCENES.sii = [
  // 1. Eje intestino-cerebro: señales en ambos sentidos, microbiota y estrés
  (g, t) => {
    g.clear(COL.bg);
    siiBrain(g, 80, 18, 9, false, t);
    g.r(79, 30, 2, 38, COL.cap);
    g.r(33, 67, 94, 14, COL.myo); g.r(33, 67, 14, 53, COL.myo); g.r(113, 67, 14, 53, COL.myo);
    g.r(36, 70, 88, 8, COL.lumen); g.r(36, 70, 8, 50, COL.lumen); g.r(116, 70, 8, 50, COL.lumen);
    for (let x = 52; x < 112; x += 10) { g.r(x, 70, 1, 2, COL.myo); g.r(x, 76, 1, 2, COL.myo); }
    for (let i = 0; i < 14; i++) { const [x, y] = along([[40, 118], [40, 74], [120, 74], [120, 118]], (t * 0.06 + i / 14) % 1); g.r(x - 1, y - 1 + (i % 2), 3, 1, COL.green); }
    for (let i = 0; i < 4; i++) { const p = (t * 0.5 + i / 4) % 1; g.r(75, lerp(31, 64, p), 2, 2, COL.gold); g.r(83, lerp(64, 31, p), 2, 2, COL.cyan); }
    if (blink(t, 1.5)) { g.line(42, 8, 37, 17, COL.gold); g.line(37, 17, 43, 17, COL.gold); g.line(43, 17, 38, 26, COL.gold); }
  },
  // 2. Hipersensibilidad visceral: misma distensión, muchas más señales de dolor en el SII
  (g, t) => {
    g.clear(COL.bg);
    frameBox(g, 3, 14, 74, 104); frameBox(g, 83, 14, 74, 104);
    const k = 0.5 + 0.5 * Math.sin(t * 1.2), h = Math.round(6 + 3 * k);
    [[40, false], [120, true]].forEach(([cx, ibs]) => {
      siiBrain(g, cx, 32, 7, ibs, t);
      g.r(cx - 1, 41, 2, 42, COL.cap);
      siiTube(g, cx - 32, cx + 32, 96, 5);
      ell(g, cx, 96, 12 + Math.round(2 * k), h + 3, COL.myo); ell(g, cx, 96, 10 + Math.round(2 * k), h, COL.lumen);
      g.ring(cx, 96, Math.max(2, h - 2), COL.white);
      const n = ibs ? 8 : 2, sp = ibs ? 0.9 : 0.35;
      for (let i = 0; i < n; i++) { const p = (t * sp + i / n) % 1; g.r(cx - 1, lerp(84, 42, p), 3, 2, ibs ? COL.red : COL.gold); }
      if (ibs && blink(t, 3)) for (let a = 0; a < 6; a++) g.line(cx + Math.cos(a) * 14, 32 + Math.sin(a) * 10, cx + Math.cos(a) * 17, 32 + Math.sin(a) * 13, COL.red);
    });
  },
  // 3. Escala de Bristol: 1–2 duras (SII-E), 3–5 normales, 6–7 líquidas (SII-D)
  (g, t) => {
    g.clear(COL.bg);
    const X = [12, 34, 56, 78, 100, 122, 144], cur = Math.floor(t / 1.2) % 7;
    const x0 = X[cur]; g.r(x0 - 10, 26, 21, 50, COL.panel); g.r(x0 - 10, 26, 21, 1, COL.gold); g.r(x0 - 10, 75, 21, 1, COL.gold);
    [[-4, 34], [3, 41], [-3, 49], [4, 57], [-2, 66]].forEach(([dx, y]) => { g.disk(12 + dx, y, 3, SII_BRD); g.p(11 + dx, y - 1, SII_BR); });
    for (let y = 34; y <= 68; y += 5) g.disk(34 + (y % 2), y, 4, SII_BRD);
    g.r(51, 32, 10, 38, SII_BR); g.disk(56, 32, 5, SII_BR); g.disk(56, 70, 4, SII_BR);
    for (let y = 37; y < 68; y += 6) { g.line(51, y, 55, y + 2, SII_BRD); g.line(61, y + 3, 58, y + 4, SII_BRD); }
    for (let y = 30; y <= 72; y++) g.r(76 + Math.round(Math.sin(y / 6) * 3), y, 5, 1, SII_BR);
    [[-3, 38], [3, 52], [-2, 66]].forEach(([dx, y]) => ell(g, 100 + dx, y, 5, 4, SII_SOFT));
    for (let i = 0; i < 40; i++) g.r(115 + rnd(i, 401) * 14, 40 + rnd(i, 402) * 30, 2, 2, i % 3 ? SII_SOFT : SII_LIQ);
    ell(g, 144, 68, 9, 4, SII_LIQ);
    for (let i = 0; i < 3; i++) { const p = (t * 0.8 + i / 3) % 1; g.r(143 + (i - 1) * 4, lerp(30, 64, p), 2, 3, SII_LIQ); }
    X.forEach((x, i) => text3(g, i + 1, x - 1, 79, i === cur ? COL.gold : COL.white));
    g.r(2, 88, 42, 5, COL.orange); g.r(46, 88, 64, 5, COL.green); g.r(112, 88, 46, 5, COL.cyan);
  },
  // 4. FODMAP: fermentación con gas y agua que distienden el colon
  (g, t) => {
    g.clear(COL.bg);
    const k = (t % 8) / 8, h = Math.round(lerp(14, 22, Math.min(1, k * 1.3))), cy = 54;
    g.r(0, cy - h - 4, 160, 4, COL.myo); g.r(0, cy + h, 160, 4, COL.myo); g.r(0, cy - h, 160, 2 * h, COL.lumen);
    for (let x = 6; x < 160; x += 16) { g.r(x, cy - h, 2, 3, COL.myo); g.r(x, cy + h - 3, 2, 3, COL.myo); }
    for (let i = 0; i < 6; i++) { const p = (t * 0.3 + i / 6) % 1, x = lerp(0, 66, p), y = cy - 6 + (i % 3) * 6; g.r(x, y, 3, 3, COL.gold); g.p(x + 1, y + 1, '#FFE7A6'); }
    for (let i = 0; i < 7; i++) { const x = 60 + (i * 13) % 50 + Math.round(Math.sin(t * 2 + i) * 2), y = cy - 8 + (i * 5) % 16; g.r(x, y, 5, 2, COL.green); g.p(x + 5, y, COL.greenD); }
    for (let i = 0; i < 7; i++) { const p = (t * 0.25 + i / 7) % 1, x = 84 + (i * 11) % 66, y = Math.round(lerp(cy + 6, cy - h + 5, p)); g.ring(x, y, 1 + Math.round(p * 3), COL.white); }
    for (let i = 0; i < 10; i++) {
      const p = (t * 0.5 + i / 10) % 1, x = 14 + (i * 17) % 136, top = i % 2 === 0;
      g.r(x, top ? lerp(cy - h - 10, cy - h + 5, p) : lerp(cy + h + 10, cy + h - 5, p), 2, 2, COL.cyan);
    }
    if (k > 0.3 && blink(t, 3)) for (let i = 0; i < 4; i++) { const x = 94 + i * 14; g.line(x, cy + h + 5, x - 2, cy + h + 9, COL.red); g.line(x - 2, cy + h + 9, x + 1, cy + h + 12, COL.red); }
  },
  // 5. Fármacos por subtipo: linaclotida (SII-E), tricíclico (dolor), rifaximina y loperamida (SII-D)
  (g, t) => {
    g.clear(COL.bg);
    [4, 56, 108].forEach((x) => frameBox(g, x, 14, 48, 84));
    siiTube(g, 7, 49, 58, 7);
    for (let k = 0; k < 3; k++) { const x = 13 + k * 13; g.r(x, 44, 3, 3, COL.gold); g.p(x + 1, 47, COL.gold); }
    for (let i = 0; i < 7; i++) { const p = (t * 0.6 + i / 7) % 1, x = 10 + (i * 6) % 36; g.r(x, lerp(42, 56, p), 2, 2, COL.cyan); }
    for (let i = 0; i < 3; i++) g.disk(8 + ((t * 10 + i * 14) % 38), 59, 2, SII_BR);
    siiBrain(g, 80, 28, 6, false, t);
    g.r(79, 36, 2, 46, COL.cap);
    g.r(74, 57, 6, 5, COL.violet); g.r(80, 57, 6, 5, COL.white);
    for (let i = 0; i < 6; i++) { const p = (t * 0.6 + i / 6) % 1, y = lerp(86, 38, p), above = y < 57; if (above && i % 3) continue; g.r(78, y, 3, 2, above ? COL.dead : COL.red); }
    siiTube(g, 60, 100, 88, 4);
    siiTube(g, 111, 153, 58, 7);
    for (let i = 0; i < 4; i++) g.r(113 + ((t * 4 + i * 10) % 38), 54, 4, 2, SII_LIQ);
    for (let k = 0; k < 3; k++) {
      const x = 118 + k * 12, y = 61;
      g.r(x, y, 5, 2, COL.green);
      g.line(x - 1, y - 2, x + 5, y + 3, COL.red); g.line(x + 5, y - 2, x - 1, y + 3, COL.red);
    }
  }
];
