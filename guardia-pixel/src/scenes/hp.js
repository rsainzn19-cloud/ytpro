// ═══════════ Hipertensión pulmonar: arteriola, 5 grupos, VD, cateterismo derecho y dianas de los fármacos
const HP_VEIN = '#3A4AA0';
function hpVessel(g, t, cy, o) {
  const L = 124, lum = o.lum, top = cy - Math.floor(lum / 2), w = o.wall;
  if (o.sick) {
    g.r(0, top - w, L, w - 3, COL.myo); g.r(0, top - 3, L, 3, COL.pink);
    g.r(0, top + lum, L, 3, COL.pink); g.r(0, top + lum + 3, L, w - 3, COL.myo);
    for (let i = 0; i < 18; i++) {
      const x = 2 + rnd(i, 91) * 118;
      g.r(x, top - w + 1 + rnd(i, 92) * (w - 6), 3, 1, COL.brainD);
      g.r(x + 3, top + lum + 4 + rnd(i, 93) * (w - 6), 3, 1, COL.brainD);
    }
  } else {
    g.r(0, top - w, L, w, COL.wall); g.r(0, top + lum, L, w, COL.wall);
    g.r(0, top - 1, L, 1, COL.endo); g.r(0, top + lum, L, 1, COL.endo);
  }
  g.r(0, top, L, lum, COL.lumen);
  for (let i = 0; i < o.n; i++) {
    const x = (i * (L / o.n) + t * o.speed) % (L + 6) - 6, y = top + 1 + Math.floor(rnd(i, 94) * Math.max(1, lum - 3));
    g.r(x, y, 3, 2, COL.rbc);
  }
}
const HP_PANELS = [[3, 3], [55, 3], [107, 3], [29, 62], [81, 62]];
function hpPanel(g, x, y, on) {
  frameBox(g, x, y, 50, 54);
  if (on) { g.r(x, y, 50, 1, COL.gold); g.r(x, y + 53, 50, 1, COL.gold); g.r(x, y, 1, 54, COL.gold); g.r(x + 49, y, 1, 54, COL.gold); }
}
function hpRec(g, x, c) { g.r(x - 3, 53, 1, 6, c); g.r(x + 3, 53, 1, 6, c); g.r(x - 3, 58, 7, 1, c); g.r(x, 59, 1, 4, c); }
const HP_CATH = [[24, 120], [24, 64], [52, 79], [62, 62], [62, 24], [104, 24], [124, 27]];

SCENES.hp = [
  // 1. Arteriola sana (arriba) vs remodelada (abajo) con su PAPm
  (g, t) => {
    g.clear(COL.bg);
    hpVessel(g, t, 30, { lum: 18, wall: 3, n: 9, speed: 40 });
    g.r(0, 57, 160, 1, COL.frame);
    hpVessel(g, t, 86, { lum: Math.round(5 + Math.sin(t * 2.5)), wall: 11, n: 6, speed: 9, sick: true });
    gauge(g, 136, 14, 10, 30, 0.3, COL.green);
    gauge(g, 136, 68, 10, 30, 0.82 + 0.08 * Math.sin(t * 3), COL.red);
  },
  // 2. Los 5 grupos
  (g, t) => {
    g.clear(COL.bg);
    const act = Math.floor(t / 1.6) % 5;
    HP_PANELS.forEach(([x, y], k) => { hpPanel(g, x, y, k === act); text3(g, k + 1, x + 3, y + 3, COL.gold); });
    let [x, y] = HP_PANELS[0], cx = x + 25, cy = y + 23;
    g.disk(cx, cy, 13, COL.myo); g.ring(cx, cy, 13, COL.wall); g.disk(cx, cy, 6, COL.pink);
    g.disk(cx, cy, 3 + (blink(t, 1.2) ? 1 : 0), COL.lumen); g.r(cx - 1, cy - 1, 2, 2, COL.rbc);
    for (let i = 0; i < 6; i++) { const a = i * 1.05 + 0.3; g.r(cx + Math.cos(a) * 10 - 1, cy + Math.sin(a) * 10, 2, 1, COL.brainD); }
    [x, y] = HP_PANELS[1]; cx = x + 25; cy = y + 23;
    ell(g, cx + 4, cy + 7, 11, 9, COL.myo); ell(g, cx + 4, cy + 7, 7, 5, COL.lumen);
    g.disk(cx + 8, cy - 7, 6, COL.myo); g.disk(cx + 8, cy - 7, 4, COL.lumen);
    g.line(cx + 3, cy - 9, cx - 17, cy - 16, COL.wall); g.line(cx + 3, cy - 8, cx - 17, cy - 15, COL.wall);
    for (let i = 0; i < 4; i++) { const p = (t * 0.6 + i / 4) % 1; g.r(lerp(cx + 3, cx - 17, p), lerp(cy - 9, cy - 16, p), 2, 2, COL.rbc); }
    g.spr(ARROW_UP, cx - 20, cy - 2, { X: COL.gold });
    [x, y] = HP_PANELS[2]; cx = x + 25; cy = y + 23;
    g.r(cx - 1, cy - 15, 2, 8, COL.cap); g.line(cx, cy - 7, cx - 6, cy - 3, COL.cap); g.line(cx, cy - 7, cx + 6, cy - 3, COL.cap);
    ell(g, cx - 9, cy + 3, 7, 11, '#7A3A5A'); ell(g, cx + 9, cy + 3, 7, 11, '#7A3A5A');
    for (let i = 0; i < 8; i++) { const px = cx + (i < 4 ? -11 : 7) + (i % 2) * 4, py = cy - 3 + Math.floor((i % 4) / 2) * 8; g.r(px, py, 2, 2, blink(t + i * 0.37, 1) ? COL.cyan : COL.dead); }
    g.spr(ARROW_DN, cx + 15, cy - 16, { X: COL.cyan });
    [x, y] = HP_PANELS[3]; cx = x + 25; cy = y + 23;
    g.r(cx - 21, cy - 6, 42, 2, COL.wall); g.r(cx - 21, cy + 4, 42, 2, COL.wall); g.r(cx - 21, cy - 4, 42, 8, COL.lumen);
    g.r(cx - 1, cy - 4, 8, 8, COL.fibrin); g.line(cx, cy - 3, cx + 5, cy + 2, COL.cap); g.p(cx + 2, cy + 2, COL.cap);
    for (let i = 0; i < 4; i++) { const xx = Math.min(cx - 5 - i * 4, cx - 21 + ((t * 14 + i * 9) % 34)); g.r(xx, cy - 2 + (i % 2) * 2, 3, 2, COL.rbc); }
    [x, y] = HP_PANELS[4]; cx = x + 25; cy = y + 23;
    g.disk(cx - 12, cy - 6, 9, '#A0405A'); g.disk(cx - 4, cy - 6, 3, COL.panel);
    g.ring(cx + 11, cy - 7, 6, COL.gold); g.disk(cx + 11, cy - 7, 3, COL.violet);
    const sh = Math.round(Math.sin(t * 2) * 1);
    g.r(cx - 8, cy + 9 + sh, 5, 3, COL.rbc); g.r(cx - 1, cy + 11 - sh, 3, 2, COL.rbcD); g.r(cx + 4, cy + 8, 2, 2, COL.rbc); g.r(cx + 8, cy + 10 + sh, 3, 2, COL.rbcD);
  },
  // 3. VD hipertrófico y dilatado, tabique desplazado (VI en D) e insuficiencia tricuspídea
  (g, t) => {
    g.clear(COL.bg);
    const k = clamp01((t % 10) / 2), sys = (t * 1.1) % 1 < 0.4, cy = 62;
    const rx = Math.round(lerp(13, 26, k)) - (sys ? 1 : 0), ry = Math.round(lerp(13, 23, k)) - (sys ? 1 : 0), w = Math.round(lerp(2, 5, k));
    const sx = Math.round(lerp(100, 110, k)), cx = sx - rx;
    g.disk(122, cy, 21, COL.myo); g.disk(122, cy, 16, COL.lumen);
    const pw = Math.round(lerp(7, 10, k)); g.r(cx + 2, 2, pw, cy - ry - w, HP_VEIN);
    const ar = Math.round(lerp(8, 12, k)); g.disk(24, 40, ar + 2, COL.myo); g.disk(24, 40, ar, COL.lumen);
    ell(g, cx, cy, rx + w, ry + w, COL.myo); ell(g, cx, cy, rx, ry, COL.lumen);
    for (let i = 0; i < 10; i++) { const a = 1.9 + i * 0.28; g.r(cx + Math.cos(a) * (rx + w / 2) - 1, cy + Math.sin(a) * (ry + w / 2), 2, 1, COL.brainD); }
    g.r(sx, cy - 18, 5, 37, COL.myo);
    for (let i = 0; i < 3; i++) { const p = (t * 0.5 + i / 3) % 1; g.r(lerp(cx - 4, cx + 2, p), lerp(cy + 8, 4, p), 2, 2, COL.rbc); }
    if (k > 0.5) for (let i = 0; i < 6; i++) { const p = (t * 0.9 + i / 6) % 1; g.r(lerp(cx - rx + 3, 26, p), lerp(cy - 6, 42, p) + Math.sin(p * 9 + i) * 2, 2, 2, COL.gold); }
  },
  // 4. Cateterismo derecho: PAPm en la arteria pulmonar y PAWP con el balón enclavado
  (g, t) => {
    g.clear(COL.bg);
    ell(g, 124, 26, 30, 24, '#24183A');
    [[128, 8], [134, 27], [128, 46]].forEach(([x, y]) => { g.line(104, 24, x, y, HP_VEIN); g.line(104, 25, x, y + 1, HP_VEIN); });
    g.r(58, 20, 48, 8, HP_VEIN); g.r(58, 20, 8, 50, HP_VEIN); g.r(20, 66, 9, 54, HP_VEIN);
    g.disk(26, 62, 12, COL.myo); ell(g, 54, 78, 18, 13, COL.myo);
    g.disk(26, 62, 9, COL.lumen); ell(g, 54, 78, 14, 9, COL.lumen); g.r(58, 64, 8, 8, COL.lumen);
    for (let d = -2; d <= 2; d++) g.line(28, 66 + d, 44, 76 + d, COL.lumen);
    const p = clamp01((t % 10) / 2.2);
    for (let q = 0; q <= p; q += 0.004) { const [x, y] = along(HP_CATH, q); g.p(x, y, COL.white); }
    const [tx, ty] = along(HP_CATH, p);
    if (p >= 1) { g.disk(tx, ty, blink(t, 1.5) ? 3 : 2, COL.white); g.ring(tx, ty, 4, COL.gold); } else g.r(tx - 1, ty - 1, 3, 3, COL.white);
    frameBox(g, 92, 62, 66, 54);
    let hpPrev = 86;
    for (let x = 96; x < 154; x++) {
      const ph = ((x + t * 30) % 16) / 16, v = ph < 0.35 ? Math.sin((ph / 0.35) * Math.PI) : 0;
      const y = 86 - Math.round(v * 8), y0 = x > 96 ? hpPrev : y; g.r(x, Math.min(y, y0), 1, Math.abs(y - y0) + 1, COL.red); hpPrev = y;
      g.p(x, 109 - (p >= 1 ? Math.round(Math.sin((x + t * 30) / 2.5)) : 0), p >= 1 ? COL.green : COL.dead);
    }
  },
  // 5. Dianas: endotelina (bloqueada), óxido nítrico → GMPc (PDE5 bloqueada), prostaciclina (repuesta)
  (g, t) => {
    g.clear(COL.bg);
    g.r(0, 0, 160, 16, COL.lumen);
    for (let i = 0; i < 6; i++) { const x = (t * 24 + i * 29) % 172 - 8; g.r(x, 4 + (i % 2) * 6, 4, 3, COL.rbc); }
    g.r(136, 3, 14, 5, COL.white); g.r(150, 4, 5, 3, COL.cap); g.r(129, 5, 7, 1, COL.cap);
    for (let x = 0; x < 160; x += 13) { g.r(x, 16, 12, 12, COL.endo); g.r(x + 4, 20, 4, 3, COL.brainD); }
    g.r(0, 60, 160, 44, '#5A1E30');
    for (let i = 0; i < 9; i++) for (let j = 0; j < 4; j++) { const x = (i * 18 + j * 9) % 162, y = 64 + j * 10; ell(g, x + 8, y + 3, 7, 2, COL.myo); g.r(x + 7, y + 3, 3, 1, COL.brainD); }
    g.r(0, 60, 160, 1, COL.mem);
    // Endotelina: rebota contra el receptor bloqueado
    hpRec(g, 28, COL.red); xMark(g, t, 28, 56, 4);
    for (let i = 0; i < 7; i++) g.r(18 + rnd(i, 96) * 18, 30 + tri(rnd(i, 95) * 40 + t * 14, 18), 2, 2, COL.red);
    // Óxido nítrico → guanilato ciclasa → GMPc; la PDE5 bloqueada ya no lo degrada
    for (let i = 0; i < 6; i++) { const p = (t * 0.35 + i / 6) % 1; g.r(72 + rnd(i, 97) * 10, lerp(30, 74, p), 2, 2, COL.cyan); }
    g.ring(76, 78, 4, COL.gold);
    const ng = Math.min(14, 4 + Math.floor((t % 8) * 2));
    for (let i = 0; i < ng; i++) g.r(66 + rnd(i, 98) * 26, 84 + rnd(i, 99) * 16, 2, 2, COL.green);
    g.disk(96, 92, 4, COL.orange); g.r(97, 91, 4, 2, '#5A1E30'); xMark(g, t + 0.3, 96, 92, 4);
    // Prostaciclina (endotelio + prostanoide IV) → receptor IP → AMPc
    hpRec(g, 132, COL.gold);
    for (let i = 0; i < 8; i++) { const p = (t * 0.4 + i / 8) % 1, x0 = i % 2 ? 140 : 124 + rnd(i, 100) * 10, y0 = i % 2 ? 8 : 30; g.r(lerp(x0, 132, p * 0.6), lerp(y0, 50, p), 2, 2, COL.gold); }
    for (let i = 0; i < 4; i++) g.ring(122 + i * 7, 80 + (i % 2) * 10 + (blink(t + i * 0.4, 1.5) ? 1 : 0), 2, COL.white);
  }
];
