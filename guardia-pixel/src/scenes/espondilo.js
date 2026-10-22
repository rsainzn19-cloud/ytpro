// ═══════════ Espondiloartritis: entesitis, sacroileítis, sindesmofitos, uveítis y tratamiento
const EB = '#D9CBA8', EBD = '#B8A880', ESKIN = '#C98E66';
function espHeel(g) {
  g.clear(COL.bg);
  g.r(64, 0, 20, 56, EB);
  ell(g, 76, 62, 16, 9, EB);
  ell(g, 92, 84, 30, 15, EB);
  g.r(8, 80, 66, 11, EB); g.disk(10, 85, 5, EB);
  for (let i = 0; i < 30; i++) g.p(14 + rnd(i, 91) * 100, 74 + rnd(i, 92) * 20, EBD);
  for (let i = 0; i < 10; i++) g.p(66 + rnd(i, 93) * 16, 4 + rnd(i, 94) * 48, EBD);
  g.r(108, 0, 9, 74, COL.cap);
  for (let x = 110; x < 116; x += 2) g.r(x, 0, 1, 72, '#A8A0BC');
  g.line(14, 93, 86, 100, '#A8A0BC');
}
function espSpine(g, t, grow) {
  g.clear(COL.bg);
  const V = [4, 24, 44, 64, 84, 104];
  V.forEach((y) => { g.r(60, y, 40, 14, EB); for (let i = 0; i < 6; i++) g.p(62 + rnd(i + y, 95) * 36, y + 2 + rnd(i + y, 96) * 10, EBD); });
  V.slice(0, 5).forEach((y, j) => {
    g.r(62, y + 14, 36, 6, '#3A3F7A');
    const p = clamp01(grow - j * 0.12), h = Math.round(3 * p);
    if (p < 1 && blink(t + j * 0.3, 1.5)) { g.r(58, y + 12, 3, 3, COL.red); g.r(99, y + 12, 3, 3, COL.red); g.r(58, y + 19, 3, 3, COL.red); g.r(99, y + 19, 3, 3, COL.red); }
    [57, 100].forEach((x) => { g.r(x, y + 14, 3, h, COL.white); g.r(x, y + 20 - h, 3, h, COL.white); });
    if (p >= 1) { g.r(57, y + 11, 3, 12, COL.white); g.r(100, y + 11, 3, 12, COL.white); }
  });
}
function espPelvis(g, t, edema) {
  g.clear('#05050C');
  const bone = '#6E6E80', boneD = '#55556A';
  for (let y = 10; y <= 106; y++) {
    const k = clamp01((y - 16) / 88), hw = Math.round(lerp(24, 8, k)), inner = 80 - hw - 3;
    const outer = Math.round(lerp(6, 50, clamp01((y - 10) / 96)));
    if (y >= 16) g.r(80 - hw, y, 2 * hw + 1, 1, bone);
    if (inner > outer) { g.r(outer, y, inner - outer, 1, boneD); g.r(161 - inner, y, inner - outer, 1, boneD); }
  }
  for (let i = 0; i < 40; i++) { const y = 18 + rnd(i, 97) * 84, hw = lerp(22, 8, (y - 16) / 88); g.p(80 + (rnd(i, 98) - 0.5) * 2 * hw, y, '#8A8AA0'); }
  for (let i = 0; i < 30; i++) g.p(10 + rnd(i, 99) * 34, 14 + rnd(i, 100) * 60, '#45455A');
  if (!edema) return;
  const e = edema * (0.6 + 0.4 * tri(t * 0.6, 1));
  [-1, 1].forEach((sd) => {
    for (let y = 40; y <= 92; y++) {
      const k = clamp01((y - 16) / 88), jx = 80 + sd * (Math.round(lerp(24, 8, k)) + 2);
      const fy = 1 - Math.abs(y - 66) / 27;
      for (let dx = -9; dx <= 9; dx++) {
        if (dx === 0 || dx === sd || dx === -sd) continue;
        const f = fy * (1 - Math.abs(dx) / 10);
        if (rnd(y * 37 + dx * 11 + sd * 5, 101) < e * f * 1.4) g.p(jx + dx, y, f > 0.5 ? COL.white : '#BFD0FF');
      }
    }
  });
}
function espEye(g, t) {
  g.clear(COL.bg);
  ell(g, 80, 64, 70, 40, ESKIN);
  ell(g, 80, 64, 50, 24, '#EDE8F2');
  for (let k = 0; k < 18; k++) {
    const a = (k / 18) * Math.PI * 2 + 0.1, L = 6 + rnd(k, 102) * 12;
    let px = 80 + Math.cos(a) * 21, py = 64 + Math.sin(a) * 21;
    for (let s = 0; s < L; s++) {
      const x = 80 + Math.cos(a) * (21 + s), y = 64 + Math.sin(a) * (21 + s) * 0.9;
      if (((x - 80) / 49) ** 2 + ((y - 64) / 23) ** 2 > 1) break;
      g.line(px, py, x, y, s < 4 ? '#E0405A' : '#E88A9A'); px = x; py = y;
    }
  }
  g.ring(80, 64, 21, blink(t, 1.5) ? '#E0405A' : '#C22E48', 3);
  g.disk(80, 64, 18, '#6A8CB4'); g.ring(80, 64, 18, '#3E5E86');
  for (let i = 0; i < 10; i++) { const a = i * 0.63; g.line(80 + Math.cos(a) * 6, 64 + Math.sin(a) * 6, 80 + Math.cos(a) * 16, 64 + Math.sin(a) * 16, '#557AA4'); }
  g.disk(80, 64, 4, '#05050A');
  for (let i = 0; i < 9; i++) {
    const a = rnd(i, 103) * 6.28 + t * (0.3 + rnd(i, 104) * 0.3), r = 7 + rnd(i, 105) * 9;
    g.r(80 + Math.cos(a) * r, 64 + Math.sin(a) * r * 0.9, 1, 1, COL.white);
  }
  const lid = Math.round(6 + 6 * (0.5 + 0.5 * Math.sin(t * 2)));
  for (let x = 30; x <= 130; x++) { const top = 64 - Math.round(24 * Math.sqrt(Math.max(0, 1 - ((x - 80) / 50) ** 2))); g.r(x, top, 1, lid, ESKIN); g.p(x, top + lid, '#8A5A3A'); }
  g.disk(14, 14, 6, COL.gold);
  for (let k = 0; k < 4; k++) { const p = (t * 0.6 + k / 4) % 1; g.r(lerp(22, 52, p), lerp(20, 44, p), 3, 2, COL.gold); }
}
SCENES.espondilo = [
  (g, t) => {
    espHeel(g);
    const pulse = blink(t, 2);
    g.disk(113, 76, pulse ? 7 : 6, '#C24A5E'); g.disk(113, 76, 3, COL.red);
    g.ring(113, 76, pulse ? 10 : 9, COL.red);
    for (let i = 0; i < 5; i++) { const p = (t * 0.35 + i / 5) % 1; neutro(g, Math.round(lerp(150, 118, p)), Math.round(lerp(100 - i * 12, 78, p))); }
    for (let i = 0; i < 6; i++) { const a = t * 1.5 + i; g.r(113 + Math.cos(a) * 13, 76 + Math.sin(a) * 9, 2, 2, COL.orange); }
  },
  (g, t) => espPelvis(g, t, 0.35 + 0.5 * clamp01(0.5 + (t % 8) / 8)),
  (g, t) => espSpine(g, t, 0.45 + (t % 10) / 6),
  (g, t) => espEye(g, t),
  (g, t) => {
    g.clear(COL.bg);
    const ph = (t % 10) / 10, bio = ph >= 0.5;
    frameBox(g, 2, 20, 50, 96); frameBox(g, 55, 20, 50, 96); frameBox(g, 108, 20, 50, 96);
    if (!bio) { g.r(2, 20, 50, 1, COL.gold); g.r(2, 115, 50, 1, COL.gold); } else { g.r(55, 20, 50, 1, COL.cyan); g.r(55, 115, 50, 1, COL.cyan); }
    const s = Math.sin(t * 3);
    g.disk(27, 38, 4, ESKIN); g.line(27, 42, 27, 62, COL.white); g.line(27, 62, 21, 76, COL.white); g.line(27, 62, 33, 76, COL.white);
    g.line(27, 46, 27 - 10, Math.round(46 - 10 * s), COL.white); g.line(27, 46, 27 + 10, Math.round(46 - 10 * s), COL.white);
    g.r(14, 92, 12, 7, COL.white); g.r(26, 92, 12, 7, COL.orange); g.r(15, 93, 3, 2, '#FFFFFF');
    g.r(62, 44, 26, 9, COL.white); g.r(63, 45, 24, 7, '#2A6A9A'); g.r(64, 46, Math.round(8 + 12 * (bio ? (ph - 0.5) * 2 : 0)), 5, COL.cyan);
    g.r(56, 46, 6, 5, COL.cap); g.r(54, 44, 2, 9, COL.cap); g.line(88, 48, 98, 48, COL.cap);
    for (let i = 0; i < 4; i++) antiY(g, 64 + i * 10, 74 + (i % 2) * 8, COL.cyan);
    const nT = bio ? 2 : 6;
    for (let i = 0; i < nT; i++) { const p = (t * 0.4 + i / nT) % 1; g.r(lerp(100, 66 + (i % 4) * 10, p), lerp(108, 80, p), 2, 2, COL.orange); }
    const inf = bio ? lerp(0.55, 0.15, (ph - 0.5) * 2) : lerp(0.9, 0.55, ph * 2);
    [40, 58, 76].forEach((y) => { g.r(116, y, 20, 12, EB); if (y < 76) g.r(118, y + 12, 16, 6, '#3A3F7A'); });
    if (inf > 0.3 || blink(t, 2)) [[114, 50], [136, 50], [114, 70], [136, 70]].forEach(([x, y]) => g.disk(x, y, Math.max(1, Math.round(inf * 4)), COL.red));
    gauge(g, 146, 34, 6, 70, inf, inf < 0.35 ? COL.green : COL.red);
  }
];
