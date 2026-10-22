// ═══════════ Síndromes coronarios crónicos: aporte contra demanda de oxígeno
// Arteria con placa estable, miocardio que irriga, barras de aporte y demanda, y monitor de ECG abajo.
// Los 14 px de arriba a la izquierda quedan libres: en el video ahí va la etiqueta del capítulo.
const SCC_ECG = {};
const SCC_PC = 84, SCC_PW = 24, SCC_B = 46; // centro y semiancho de la placa; base de la luz
function sccWave(P, st) {
  const k = P + ':' + st;
  if (SCC_ECG[k]) return SCC_ECG[k];
  const a = new Array(P).fill(0), set = (i, v) => { if (i >= 0 && i < P) a[i] = v; };
  [-1, -2, -2, -1].forEach((v, j) => set(2 + j, v));
  [1, -11, -13, 3, 1].forEach((v, j) => set(7 + j, v));
  for (let i = 12; i < 15; i++) set(i, st);
  (st > 0 ? [st, st, 2, 1, 0] : [-1, -2, -3, -3, -2, -1]).forEach((v, j) => set(15 + j, v));
  return (SCC_ECG[k] = a);
}
function sccMonitor(g, t, P, st) {
  g.r(0, 96, 160, 24, COL.mon);
  for (let x = 0; x < 160; x += 8) { g.p(x, 100, COL.grid); g.p(x, 108, COL.grid); g.p(x, 116, COL.grid); }
  const w = sccWave(P, st), off = Math.floor(t * 30);
  let py = null;
  for (let x = 0; x < 160; x++) {
    const y = Math.round(109 + w[(x + off) % P] * 0.8);
    if (py !== null && Math.abs(y - py) > 1) g.r(x, Math.min(y, py), 1, Math.abs(y - py) + 1, COL.ecg); else g.p(x, y, COL.ecg);
    py = y;
  }
}
function sccTop(x, h) { const d = (x - SCC_PC) / SCC_PW; return Math.abs(d) >= 1 ? SCC_B : Math.round(SCC_B - h * (1 - d * d)); }
function sccBar(g, y, v, c) {
  g.r(60, y - 1, 96, 8, COL.frame); g.r(61, y, 94, 6, COL.bg);
  g.r(61, y, Math.round(94 * clamp01(v)), 6, c);
}
function sccArtery(g, t, o) {
  g.r(0, 16, 160, 6, COL.wall); g.r(0, 22, 160, 2, COL.endo);
  g.r(0, 24, 160, 22, COL.lumen);
  g.r(0, 46, 160, 2, COL.endo); g.r(0, 48, 160, 4, COL.wall);
  const h = o.h ?? 15, cap = o.cap ?? 3;
  for (let x = SCC_PC - SCC_PW; x <= SCC_PC + SCC_PW; x++) {
    const top = sccTop(x, h); if (top >= SCC_B) continue;
    g.r(x, top, 1, SCC_B - top, COL.fat); g.r(x, top, 1, Math.min(cap, SCC_B - top), COL.cap);
  }
  for (let i = 0; i < 9; i++) { const x = SCC_PC - 14 + rnd(i, 131) * 28, top = sccTop(x, h); if (top + cap + 2 < SCC_B - 1) g.p(x, top + cap + 2 + rnd(i, 132) * (SCC_B - 2 - top - cap - 2), COL.fatD); }
  // eritrocitos: se aprietan para pasar por encima de la placa
  const n = o.n ?? 16;
  for (let i = 0; i < n; i++) {
    const x = (i * 11.3 + t * (o.speed ?? 30)) % 176 - 8;
    let y = 25 + Math.floor(rnd(i, 133) * 17);
    const top = sccTop(Math.max(0, Math.min(159, x + 2)), h);
    if (y + 3 > top - 1) y = Math.max(25, top - 4 - (i % 3));
    g.r(x, y, 4, 3, COL.rbc); g.r(x + 1, y + 1, 2, 1, COL.rbcD);
  }
}
function sccMyo(g, t, isch) {
  for (let x = 0; x < 160; x += 6) {
    const bad = isch && x >= 110;
    g.r(x, 56, 5, 10, bad ? (blink(t + x * 0.013, 2) ? COL.violet : '#6A3A78') : COL.myo);
    g.r(x, 56, 5, 1, bad ? '#C9B8FF' : '#D25A6E');
  }
  // oxígeno que baja de la arteria al músculo: casi no llega al territorio distal si hay isquemia
  for (let i = 0; i < 14; i++) {
    const x = 4 + rnd(i, 134) * 150, p = (t * 0.5 + rnd(i, 135)) % 1;
    if (isch && x >= 106 && i % 4) continue;
    g.r(x, Math.round(lerp(52, 63, p)), 2, 2, COL.cyan);
  }
}
function sccBars(g, t, sup, dem) {
  sccBar(g, 70, sup, COL.rbc); sccBar(g, 80, dem, COL.gold);
  const xs = 61 + Math.round(94 * sup);
  for (let y = 67; y <= 88; y += 2) g.p(xs, y, COL.white);
  if (dem > sup && blink(t, 3)) g.r(xs + 1, 80, Math.round(94 * (dem - sup)), 6, COL.red);
}
function sccScene(g, t, o) {
  g.clear(COL.bg);
  sccArtery(g, t, o);
  sccMyo(g, t, o.isch);
  sccBars(g, t, o.sup, o.dem);
  sccMonitor(g, t, o.P || 36, o.st || 0);
}
// Fase del esfuerzo: sube en 2 s, se sostiene y baja al final del ciclo
function sccExert(t) { const c = t % 12; return c < 2 ? c / 2 : c < 10 ? 1 : (12 - c) / 2; }
function sccDonut(g, cx, cy, defect, t) {
  for (let y = -13; y <= 13; y++) for (let x = -13; x <= 13; x++) {
    const d = Math.sqrt(x * x + y * y); if (d > 13 || d < 6.5) continue;
    const a = Math.atan2(y, x); let c = d > 10 ? COL.orange : COL.gold;
    if (defect && a > 0.25 && a < 1.9) c = blink(t, 1.5) ? '#1E3A6A' : '#2A2350';
    g.p(cx + x, cy + y, c);
  }
}
// Angio-TC: una coronaria con contraste (blanca) que se estrecha en la placa
const SCC_CT = [[10, 22], [26, 30], [38, 44], [46, 60], [56, 74], [70, 84]];
function sccCT(g, t) {
  g.r(3, 3, 74, 88, '#15182A');
  ell(g, 42, 52, 30, 34, '#22263A');
  for (let i = 0; i < 40; i++) g.p(4 + rnd(i, 136) * 72, 4 + rnd(i, 137) * 86, '#2E3348');
  const N = 90, sten = (p) => Math.max(0, 1 - Math.abs(p - 0.5) / 0.12);
  for (let k = 0; k <= N; k++) { const [x, y] = along(SCC_CT, k / N); g.disk(Math.round(x), Math.round(y), 4, '#7E8399'); }
  for (let k = 0; k <= N; k++) { const p = k / N; if (sten(p) > 0) { const [x, y] = along(SCC_CT, p); g.disk(Math.round(x), Math.round(y), 6, '#4A4652'); } }
  for (let k = 0; k <= N; k++) { const p = k / N, [x, y] = along(SCC_CT, p); g.disk(Math.round(x), Math.round(y), sten(p) > 0.3 ? 0 : sten(p) > 0 ? 1 : 2, '#EEF1F8'); }
  const [cx, cy] = along(SCC_CT, 0.5); g.r(cx + 3, cy - 2, 2, 2, COL.white); g.r(cx - 5, cy + 1, 2, 2, COL.white);
  g.ring(Math.round(cx), Math.round(cy), 10 + (blink(t, 1.5) ? 1 : 0), COL.gold);
  g.r(4, 4 + Math.floor((t * 22) % 86), 72, 1, COL.cyan);
}

SCENES.scc = [
  // 1. Placa estable en reposo: el aporte alcanza
  (g, t) => sccScene(g, t, { sup: 0.62, dem: 0.36 + 0.03 * Math.sin(t * 5), P: 38 }),
  // 2. Esfuerzo: la demanda supera al aporte → isquemia, angina e infradesnivel del ST
  (g, t) => {
    const k = sccExert(t), dem = lerp(0.36, 0.92, k), sup = lerp(0.62, 0.68, k), isch = dem > sup + 0.02;
    sccScene(g, t, { sup, dem, isch, P: k > 0.5 ? 22 : 30, st: isch ? 4 : 0, speed: 38, n: 20 });
  },
  // 3. Betabloqueador y nitratos bajan la demanda
  (g, t) => {
    const k = clamp01((t % 10) / 2.5), dem = lerp(0.92, 0.42, k), isch = dem > 0.66;
    sccScene(g, t, { sup: 0.64, dem, isch, P: k < 1 ? 26 : 40, st: isch ? 4 : 0 });
    if (blink(t, 2)) g.spr(ARROW_DN, 61 + Math.round(94 * dem) + 3, 80, { X: COL.cyan });
    // vena que se dilata con el nitrato (menos precarga)
    const th = Math.round(lerp(2, 6, k));
    g.r(0, 95 - th, 160, th, '#3A4AA0'); g.r(0, 95 - th, 160, 1, '#5A6AD0');
    for (let i = 0; i < 6; i++) g.r((t * 14 + i * 27) % 160, 95 - Math.ceil(th / 2) - 1, 2, 2, COL.rbcD);
  },
  // 4. Buscar la enfermedad: anatomía (angio-TC) contra función (perfusión con estrés)
  (g, t) => {
    g.clear(COL.bg);
    frameBox(g, 2, 2, 76, 90); frameBox(g, 82, 2, 76, 90);
    sccCT(g, t);
    sccDonut(g, 130, 28, false, t); sccDonut(g, 130, 66, true, t);
    sccMonitor(g, t, 22, 4);
  },
  // 5. Revascularización: stent en la placa y puente que la rodea
  (g, t) => {
    g.clear(COL.bg);
    // puente (injerto) que sale antes de la lesión y entra después
    g.r(44, 8, 6, 16, COL.wall); g.r(118, 8, 6, 16, COL.wall); g.r(44, 8, 80, 7, COL.wall);
    sccArtery(g, t, { h: 6, cap: 2, speed: 34, n: 18 });
    g.r(46, 10, 2, 16, COL.lumen); g.r(120, 10, 2, 16, COL.lumen); g.r(46, 10, 76, 3, COL.lumen);
    for (let i = 0; i < 6; i++) { const [x, y] = along([[47, 25], [47, 11], [121, 11], [121, 25]], (t * 0.3 + i / 6) % 1); g.r(x - 1, y - 1, 2, 2, COL.rbc); }
    for (let x = SCC_PC - 22; x < SCC_PC + 22; x += 6) {
      g.line(x, 25, x + 3, 28, COL.cap); g.line(x + 3, 28, x + 6, 25, COL.cap);
      const a = sccTop(x, 6) - 1, b = sccTop(x + 3, 6) - 4, c = sccTop(x + 6, 6) - 1;
      g.line(x, a, x + 3, b, COL.cap); g.line(x + 3, b, x + 6, c, COL.cap);
    }
    sccMyo(g, t, false);
    sccBars(g, t, 0.9, 0.8);
    sccMonitor(g, t, 24, 0);
  }
];
