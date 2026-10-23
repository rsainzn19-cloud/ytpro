// ═══════════ Trastornos de la deglución: peristalsis, acalasia, miotomía, obstrucción y Zenker
const DG_Y = 50, DG_L0 = 116, DG_L1 = 128, DG_TIGHT = '#D25A6E', DG_FLUID = '#2E5A62';
function dgStomach(g, fill) {
  ell(g, 146, 56, 17, 27, COL.myo); ell(g, 146, 56, 14, 24, COL.lumen);
  for (let k = 0; k < 4; k++) g.line(138 + k * 5, 44, 136 + k * 5, 74, '#5A1A2E');
  for (let i = 0; i < (fill || 0); i++) g.r(136 + rnd(i, 301) * 18, 66 + rnd(i, 302) * 10, 2, 2, COL.cast);
}
// Esófago horizontal: hf(x) = mitad de la luz (0 = cerrado)
function dgEso(g, hf, o = {}) {
  for (let x = 0; x <= 133; x++) {
    const h = hf(x), les = x >= DG_L0 && x <= DG_L1, w = les ? 5 : (o.thin ? 2 : 3);
    const c = les ? (o.lesC || COL.myo) : ((o.wallC && o.wallC(x)) || COL.myo);
    g.r(x, DG_Y - h - w, 1, w, c); g.r(x, DG_Y + h, 1, w, c);
    if (h > 0) g.r(x, DG_Y - h, 1, 2 * h, COL.lumen);
  }
}
// Plexo mientérico: verde = neuronas inhibitorias sanas; gris = perdidas
function dgPlexus(g, alive, t) {
  g.r(6, 73, 110, 1, alive ? COL.greenD : '#33364F');
  for (let x = 8; x <= 112; x += 13) g.disk(x, 73, 1, alive ? (blink(t + x * 0.02, 2) ? COL.green : COL.greenD) : COL.dead);
}
// Manometría: presión (0–1) a lo largo del esófago
function dgMano(g, pf) {
  frameBox(g, 2, 82, 156, 36);
  for (let x = 6; x < 154; x += 8) g.p(x, 112, COL.frame);
  g.r(6 + DG_L0 * 1.1, 84, Math.round((DG_L1 - DG_L0) * 1.1), 32, '#1A1F4A');
  let py = null;
  for (let sx = 6; sx < 154; sx++) {
    const x = (sx - 6) / 1.1, y = Math.round(112 - clamp01(pf(x)) * 24);
    if (py !== null && Math.abs(y - py) > 1) g.r(sx, Math.min(y, py), 1, Math.abs(y - py) + 1, COL.gold); else g.p(sx, y, COL.gold);
    py = y;
  }
}
const dgAcal = (x, lesH) => x >= DG_L0 ? lesH : x < 12 ? 6 : x < 28 ? Math.round(lerp(6, 15, (x - 12) / 16)) : x < 98 ? 15 : Math.max(Math.max(1, lesH), Math.round(lerp(15, 1, (x - 98) / 18)));

SCENES.deglucion = [
  // 1. Deglución normal: onda peristáltica y relajación del EEI
  (g, t) => {
    g.clear(COL.bg); dgStomach(g, 2);
    const p = (t % 4.5) / 4.5, bx = lerp(1, 153, p), wx = Math.min(124, bx - 9), open = bx > 12 && bx < 142;
    const hf = (x) => {
      if (x >= DG_L0 && x <= DG_L1) return open ? 5 : 0;
      let h = 6 - 5 * Math.exp(-((x - wx) ** 2) / 10);
      if (Math.abs(x - bx) < 6) h = 7;
      return Math.max(1, Math.round(h));
    };
    dgEso(g, hf, { lesC: open ? COL.myo : DG_TIGHT, wallC: (x) => (Math.abs(x - wx) < 3 ? COL.orange : null) });
    if (bx < 130) ell(g, Math.round(bx), DG_Y, 5, 4, COL.cast);
    else { const q = Math.min(1, (bx - 130) / 18); ell(g, Math.round(lerp(132, 146, q)), Math.round(lerp(50, 66, q)), 4, 3, COL.cast); }
    dgPlexus(g, true, t);
    dgMano(g, (x) => (x >= DG_L0 ? (open ? 0.05 : 0.6) : 0.08 + 0.8 * Math.exp(-((x - wx) ** 2) / 30)));
  },
  // 2. Acalasia: sin peristalsis, EEI cerrado, pico de pájaro y comida retenida
  (g, t) => {
    g.clear(COL.bg); dgStomach(g, 0);
    const hf = (x) => dgAcal(x, 0);
    dgEso(g, hf, { thin: true, lesC: blink(t, 1.5) ? DG_TIGHT : '#B8455A' });
    const lvl = DG_Y + 2 + Math.round(Math.sin(t * 1.5));
    for (let x = 14; x < DG_L0; x++) { const h = hf(x); if (DG_Y + h > lvl) g.r(x, lvl, 1, DG_Y + h - lvl, DG_FLUID); }
    for (let i = 0; i < 26; i++) { const x = 20 + rnd(i, 303) * 80, y = lvl + 1 + rnd(i, 304) * 11; if (y < DG_Y + hf(Math.round(x)) - 1) g.r(x + Math.sin(t + i), y, 2, 2, COL.cast); }
    for (let i = 0; i < 3; i++) { const p = (t * 0.25 + i / 3) % 1; g.r(lerp(40, 0, p), DG_Y - 3 + (i % 2) * 2, 2, 2, COL.cast); }
    dgPlexus(g, false, t);
    dgMano(g, (x) => (x >= DG_L0 ? 0.75 : x < 10 ? 0.1 : 0.14));
  },
  // 3. Miotomía (Heller, POEM o dilatación): el EEI queda abierto y el esófago se vacía por gravedad
  (g, t) => {
    const k = (t % 9) / 9;
    g.clear(COL.bg); dgStomach(g, Math.round(4 + k * 14));
    const hf = (x) => dgAcal(x, 4);
    dgEso(g, hf, { thin: true });
    for (let x = DG_L0 - 4; x <= DG_L1 + 2; x++) g.r(x, DG_Y - hf(x) - 5, 1, 2, x % 2 ? COL.gold : COL.bg);
    const lvl = DG_Y + 2 + Math.round(k * 8);
    for (let x = 14; x < DG_L0; x++) { const h = hf(x); if (DG_Y + h > lvl) g.r(x, lvl, 1, DG_Y + h - lvl, DG_FLUID); }
    for (let i = 0; i < 7; i++) { const p = (t * 0.4 + i / 7) % 1, [x, y] = along([[96, DG_Y + 6], [120, DG_Y + 1], [134, DG_Y + 2], [144, 66]], p); g.r(x, y, 2, 2, COL.cast); }
    dgPlexus(g, false, t);
    dgMano(g, (x) => (x >= DG_L0 ? 0.08 : x < 10 ? 0.1 : 0.12));
  },
  // 4. Obstrucción mecánica: el sólido se atora arriba del tumor; el líquido pasa
  (g, t) => {
    g.clear(COL.bg); dgStomach(g, 0);
    const TX = 80, wx = lerp(-6, 58, (t % 3) / 3);
    const hf = (x) => {
      if (x >= DG_L0 && x <= DG_L1) return 4;
      if (Math.abs(x - TX) <= 7) return 2;
      let h = 6 - 5 * Math.exp(-((x - wx) ** 2) / 10);
      if (Math.abs(x - 66) < 6) h = 7;
      return Math.max(1, Math.round(h));
    };
    dgEso(g, hf, { wallC: (x) => (Math.abs(x - wx) < 3 ? COL.orange : null) });
    for (let i = 0; i < 8; i++) { const x = TX - 7 + i * 2; g.disk(x, DG_Y - 6 - (i % 3 === 0 ? 1 : 0), 3, COL.stone); g.disk(x, DG_Y + 6 + (i % 2), 3, COL.stone); }
    for (let i = 0; i < 5; i++) g.p(TX - 6 + i * 3, DG_Y - 7 + (i % 2) * 14, '#7A7460');
    for (let i = 0; i < 9; i++) {
      const [x, y] = along([[2, DG_Y - 2 + (i % 3) * 2], [72, DG_Y], [130, DG_Y], [146, 66]], (t * 0.3 + i / 9) % 1);
      if (Math.abs(x - 66) > 6) g.r(x, y, 2, 2, COL.cyan);
    }
    ell(g, 66 + Math.round(Math.sin(t * 6)), DG_Y, 5, 5, COL.cast);
    ell(g, 40, 100, 7, 5, COL.cast); for (let d = 0; d < 2; d++) { g.line(33 + d, 93, 45 + d, 107, COL.red); g.line(45 + d, 93, 33 + d, 107, COL.red); }
    g.disk(112, 102, 4, COL.cyan); g.r(111, 95, 3, 3, COL.cyan); g.p(112, 94, COL.cyan);
    g.line(122, 101, 125, 104, COL.green); g.line(125, 104, 131, 96, COL.green); g.line(122, 100, 125, 103, COL.green); g.line(125, 103, 131, 95, COL.green);
  },
  // 5. Divertículo de Zenker: bolsa arriba del cricofaríngeo que guarda comida
  (g, t) => {
    g.clear(COL.bg);
    const CX = 64, wf = (y) => (y < 30 ? 9 : y < 62 ? Math.round(lerp(9, 6, (y - 30) / 32)) : y >= 64 && y <= 76 ? 1 : 5);
    ell(g, 90, 52, 19, 16, COL.myo); ell(g, 90, 52, 16, 13, COL.lumen);
    for (let y = 0; y < 120; y++) {
      const w = wf(y), cp = y >= 64 && y <= 76, th = cp ? 6 : 3, c = cp ? DG_TIGHT : COL.myo;
      g.r(CX - w - th, y, th, 1, c); g.r(CX + w, y, th, 1, c); g.r(CX - w, y, 2 * w, 1, COL.lumen);
    }
    g.r(CX + 5, 46, 12, 12, COL.lumen);
    for (let i = 0; i < 18; i++) g.r(78 + rnd(i, 305) * 22, 56 + rnd(i, 306) * 6, 2, 2, COL.cast);
    for (let i = 0; i < 5; i++) { const [x, y] = along([[64, 0], [64, 44], [82, 50], [90, 56]], (t * 0.3 + i / 5) % 1); g.r(x - 1, y, 2, 2, COL.cast); }
    { const p = (t * 0.2) % 1; if (p > 0.5) { const [x, y] = along([[86, 50], [66, 44], [62, 0]], (p - 0.5) * 2); g.r(x, y, 2, 2, COL.cast); } }
    { const p = (t * 0.25) % 1; if (p < 0.3) g.r(63, lerp(76, 118, p / 0.3), 2, 2, COL.cast); }
    for (let i = 0; i < 6; i++) { const p = (t * 0.35 + i / 6) % 1, x = 80 + p * 40 + Math.sin(p * 9 + i) * 3, y = 22 - p * 18; g.r(x, y, 2, 1, i % 2 ? COL.green : COL.greenD); }
  }
];
