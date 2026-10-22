// ═══════════ Síndromes coronarios crónicos: aporte contra demanda de oxígeno
// Arteria con placa estable arriba, miocardio que irriga, barras de aporte y demanda, y monitor de ECG abajo.
const SCC_ECG = {};
const SCC_PC = 68, SCC_PW = 24; // centro y semiancho de la placa
function sccWave(P, st) {
  const k = P + ':' + st;
  if (SCC_ECG[k]) return SCC_ECG[k];
  const a = new Array(P).fill(0), set = (i, v) => { if (i >= 0 && i < P) a[i] = v; };
  [-1, -2, -2, -1].forEach((v, j) => set(2 + j, v));
  [1, -11, -13, 3, 1].forEach((v, j) => set(7 + j, v));
  for (let i = 12; i < 15; i++) set(i, st);
  (st > 0 ? [2, 2, 1, 1, 0] : [-1, -2, -3, -3, -2, -1]).forEach((v, j) => set(15 + j, v));
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
function sccTop(x, h) { const d = (x - SCC_PC) / SCC_PW; return Math.abs(d) >= 1 ? 42 : Math.round(42 - h * (1 - d * d)); }
function sccBar(g, y, v, c) {
  g.r(60, y - 1, 96, 8, COL.frame); g.r(61, y, 94, 6, COL.bg);
  g.r(61, y, Math.round(94 * clamp01(v)), 6, c);
}
function sccArtery(g, t, o) {
  g.r(0, 10, 160, 6, COL.wall); g.r(0, 16, 160, 2, COL.endo);
  g.r(0, 18, 160, 24, COL.lumen);
  g.r(0, 42, 160, 2, COL.endo); g.r(0, 44, 160, 4, COL.wall);
  const h = o.h ?? 16, cap = o.cap ?? 3;
  for (let x = SCC_PC - SCC_PW; x <= SCC_PC + SCC_PW; x++) {
    const top = sccTop(x, h); if (top >= 42) continue;
    g.r(x, top, 1, 42 - top, COL.fat); g.r(x, top, 1, Math.min(cap, 42 - top), COL.cap);
  }
  for (let i = 0; i < 9; i++) { const x = SCC_PC - 14 + rnd(i, 131) * 28, top = sccTop(x, h); if (top + cap + 2 < 41) g.p(x, top + cap + 2 + rnd(i, 132) * (40 - top - cap - 2), COL.fatD); }
  // eritrocitos: se aprietan para pasar por encima de la placa
  const n = o.n ?? 16;
  for (let i = 0; i < n; i++) {
    const x = (i * 11.3 + t * (o.speed ?? 30)) % 176 - 8;
    let y = 19 + Math.floor(rnd(i, 133) * 19);
    const top = sccTop(Math.max(0, Math.min(159, x + 2)), h);
    if (y + 3 > top - 1) y = Math.max(19, top - 4 - (i % 3));
    g.r(x, y, 4, 3, COL.rbc); g.r(x + 1, y + 1, 2, 1, COL.rbcD);
  }
}
function sccMyo(g, t, isch, o2) {
  for (let x = 0; x < 160; x += 6) {
    const bad = isch && x >= 96;
    g.r(x, 52, 5, 12, bad ? (blink(t + x * 0.013, 2) ? COL.violet : '#6A3A78') : COL.myo);
    g.r(x, 52, 5, 1, bad ? '#C9B8FF' : '#D25A6E');
  }
  // oxígeno que baja de la arteria al músculo: casi no llega al territorio distal si hay isquemia
  for (let i = 0; i < 14; i++) {
    const x = 4 + rnd(i, 134) * 150, p = (t * 0.5 + rnd(i, 135)) % 1;
    if (isch && x >= 92 && i % 4) continue;
    if (o2 === false) continue;
    g.r(x, Math.round(lerp(47, 60, p)), 2, 2, COL.cyan);
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
  sccMyo(g, t, o.isch, o.o2);
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

SCENES.scc = [
  // 1. Placa estable en reposo: el aporte alcanza
  (g, t) => sccScene(g, t, { sup: 0.62, dem: 0.36 + 0.03 * Math.sin(t * 5), P: 38 }),
  // 2. Esfuerzo: la demanda supera al aporte → isquemia, angina e infradesnivel del ST
  (g, t) => {
    const k = sccExert(t), dem = lerp(0.36, 0.92, k), sup = lerp(0.62, 0.68, k), isch = dem > sup + 0.02;
    sccScene(g, t, { sup, dem, isch, P: k > 0.5 ? 22 : 30, st: isch ? 2 : 0, speed: 38, n: 20 });
    if (isch && blink(t, 2)) g.spr(ARROW_UP, 150, 88, { X: COL.red });
  },
  // 3. Betabloqueador y nitratos bajan la demanda
  (g, t) => {
    const k = clamp01((t % 10) / 2.5), dem = lerp(0.92, 0.42, k), isch = dem > 0.64;
    sccScene(g, t, { sup: 0.64, dem, isch, P: k < 1 ? 26 : 40, st: isch ? 2 : 0 });
    if (blink(t, 2)) g.spr(ARROW_DN, 61 + Math.round(94 * dem) + 3, 80, { X: COL.cyan });
    // vena que se dilata con el nitrato (menos precarga)
    const th = Math.round(lerp(2, 6, k));
    g.r(0, 92 - th, 56, th, '#3A4AA0'); g.r(0, 92 - th, 56, 1, '#5A6AD0');
    for (let i = 0; i < 4; i++) g.r((t * 14 + i * 14) % 56, 92 - Math.ceil(th / 2) - 1, 2, 2, COL.rbcD);
  },
  // 4. Buscar la enfermedad: anatomía (angio-TC) contra función (perfusión con estrés)
  (g, t) => {
    g.clear(COL.bg);
    frameBox(g, 2, 2, 76, 90); frameBox(g, 82, 2, 76, 90);
    g.r(3, 3, 74, 88, '#15182A');
    g.disk(40, 40, 24, '#3A3F55'); g.disk(40, 40, 18, '#8A8FA6'); g.disk(40, 40, 15, '#5A5560');
    g.disk(45, 35, 6, COL.white);
    [[30, 48], [33, 52], [28, 44]].forEach(([x, y]) => g.r(x, y, 2, 2, '#F4F4FF'));
    const sy = 4 + Math.floor((t * 22) % 86); g.r(4, sy, 72, 1, COL.cyan);
    sccDonut(g, 130, 26, false, t); sccDonut(g, 130, 66, true, t);
    sccMonitor(g, t, 22, 2);
  },
  // 5. Revascularización: stent en la placa y puente que la rodea
  (g, t) => {
    g.clear(COL.bg);
    sccArtery(g, t, { h: 6, cap: 2, speed: 34, n: 18 });
    for (let x = 46; x < 90; x += 6) {
      g.line(x, 19, x + 3, 22, COL.cap); g.line(x + 3, 22, x + 6, 19, COL.cap);
      const a = sccTop(x, 6) - 1, b = sccTop(x + 3, 6) - 4, c = sccTop(x + 6, 6) - 1;
      g.line(x, a, x + 3, b, COL.cap); g.line(x + 3, b, x + 6, c, COL.cap);
    }
    // puente (injerto) que sale antes de la lesión y entra después
    g.r(28, 0, 6, 18, COL.wall); g.r(104, 0, 6, 18, COL.wall); g.r(28, 0, 82, 7, COL.wall);
    g.r(30, 2, 2, 16, COL.lumen); g.r(106, 2, 2, 16, COL.lumen); g.r(30, 2, 78, 3, COL.lumen);
    for (let i = 0; i < 6; i++) { const [x, y] = along([[31, 17], [31, 3], [107, 3], [107, 17]], (t * 0.3 + i / 6) % 1); g.r(x - 1, y - 1, 2, 2, COL.rbc); }
    sccMyo(g, t, false);
    sccBars(g, t, 0.9, 0.8);
    sccMonitor(g, t, 24, 0);
  }
];
