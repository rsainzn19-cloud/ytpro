// ═══════════ Valvulopatía mitral
// Corazón izquierdo en corte: aurícula (AI) arriba, válvula mitral, ventrículo (VI) abajo, aorta a la izquierda,
// pulmón y vena pulmonar a la derecha, manómetro de presión de la AI y monitor con ECG + fonocardiograma.
// El ciclo cardiaco sale del monitor: el borde derecho del trazo es "ahora" y mueve válvulas y flujo.
const MI_RR = [];
for (let k = 0; k < 24; k++) MI_RR.push(18 + Math.floor(rnd(k, 97) * 17));
const MI_RRSUM = MI_RR.reduce((a, b) => a + b, 0);
const MI_LA = [60, 30], MI_LV = [60, 72], MI_VY = 50;

function miBeat(u, af, rr) {
  if (!af) return [((u % rr) + rr) % rr, rr];
  let m = ((u % MI_RRSUM) + MI_RRSUM) % MI_RRSUM;
  for (let k = 0; k < MI_RR.length; k++) { if (m < MI_RR[k]) return [m, MI_RR[k]]; m -= MI_RR[k]; }
  return [0, MI_RR[0]];
}
// ECG con el QRS en el índice 0 del latido; en FA no hay P y la línea de base tiembla (ondas f)
function miEcgV(idx, RR, af, u) {
  const Q = [1, -11, -13, 3, 1], T = [-1, -2, -3, -3, -2, -1], Pw = [-1, -2, -2, -1];
  if (idx < 5) return Q[idx];
  if (idx >= 9 && idx < 15) return T[idx - 9];
  if (af) return Math.round((rnd(u, 98) - 0.5) * 2.4);
  if (idx >= RR - 7 && idx < RR - 3) return Pw[idx - (RR - 7)];
  return 0;
}
// Fonocardiograma: R1 en 1, R2 en 17. em = chasquido + retumbo (+ refuerzo presistólico si hay ritmo sinusal);
// im = holosistólico + R3; ima = soplo sistólico breve y decreciente (IM aguda)
function miPhono(idx, RR, kind, af, u) {
  const j = 0.6 + rnd(u, 99) * 0.8;
  if (idx === 1) return kind === 'em' ? 4 : kind === 'im' || kind === 'ima' ? 2 : 3;
  if (idx === 17) return 3;
  if (kind === 'em') {
    if (idx === 20) return 4;
    if (idx > 20) {
      if (!af && idx >= RR - 6) return Math.max(1, Math.round((1 + (idx - (RR - 6)) * 0.45) * j));
      return Math.max(1, Math.round(lerp(2.2, 0.8, (idx - 21) / Math.max(1, RR - 21)) * j));
    }
  }
  if (kind === 'im') { if (idx >= 2 && idx <= 16) return Math.max(1, Math.round(2.2 * j)); if (idx === 23) return 2; }
  if (kind === 'ima' && idx >= 2 && idx <= 10) return Math.max(1, Math.round(lerp(3, 1, (idx - 2) / 8) * j));
  return 0;
}
function miMonitor(g, t, o) {
  g.r(0, 96, 160, 24, COL.mon);
  for (let x = 0; x < 160; x += 8) { g.p(x, 99, COL.grid); g.p(x, 108, COL.grid); g.p(x, 117, COL.grid); }
  const off = Math.floor(t * 30), rr = o.rr || 40;
  let py = null;
  for (let x = 0; x < 160; x++) {
    const u = x + off, [idx, RR] = miBeat(u, o.af, rr);
    const y = Math.round(103 + miEcgV(idx, RR, o.af, u) * 0.55);
    if (py !== null && Math.abs(y - py) > 1) g.r(x, Math.min(y, py), 1, Math.abs(y - py) + 1, COL.ecg); else g.p(x, y, COL.ecg);
    py = y;
    const a = miPhono(idx, RR, o.kind, o.af, u);
    const snd = idx === 1 || idx === 17 || (o.kind === 'em' && idx === 20) || (o.kind === 'im' && idx === 23);
    if (a) g.r(x, 114 - a, 1, 2 * a + 1, snd ? COL.white : COL.gold); else g.p(x, 114, '#2E6A4A');
  }
  return miBeat(159 + off, o.af, rr)[0];
}
function miLung(g, t, edema) {
  g.disk(128, 18, 12, '#6B2A45'); g.disk(144, 24, 12, '#6B2A45'); g.disk(132, 32, 10, '#6B2A45');
  for (let i = 0; i < 12; i++) g.ring(120 + rnd(i, 140) * 30, 10 + rnd(i, 141) * 26, 2, COL.pink);
  const n = Math.round(edema * 26);
  for (let i = 0; i < n; i++) g.r(118 + rnd(i, 142) * 34, 9 + rnd(i, 143) * 30, 2, 2, edema > 0.8 && blink(t + i * 0.07, 2) ? COL.cyan : COL.na);
}
function miLeaflets(g, t, kind, sys, thick) {
  const c = thick ? '#E0DCC8' : COL.cap, L = [51, MI_VY], R = [69, MI_VY];
  let l, r;
  if (kind === 'em') { l = sys ? [60, 52] : [57, 57]; r = sys ? [60, 52] : [63, 57]; }
  else if (kind === 'im') { l = sys ? [56, 51] : [53, 60]; r = sys ? [64, 51] : [67, 60]; }
  else if (kind === 'flail') { l = sys ? [59, 52] : [53, 60]; r = sys ? [63, 39] : [68, 62]; }
  else { l = sys ? [60, 52] : [53, 60]; r = sys ? [60, 52] : [67, 60]; }
  [[L, l], [R, r]].forEach(([a, b]) => {
    g.line(a[0], a[1], b[0], b[1], c);
    if (thick) { g.line(a[0] + 1, a[1], b[0] + (b[0] < 60 ? 1 : -1), b[1], c); g.line(a[0], a[1] + 1, b[0], b[1] + 1, c); }
  });
  if (thick) { g.r(52, 51, 2, 2, COL.white); g.r(66, 52, 2, 2, COL.white); }
  return [l, r];
}
// o: la [rx, ry], lv [rx, ry], valve, kind (fono), af, rr, edema, pres, mr (0–2), cong, fib, clot, flail
function miHeart(g, t, o) {
  g.clear(COL.bg);
  miLung(g, t, o.edema || 0);
  g.r(84, 27, 36, 8, COL.wall); g.r(84, 29, 36, 4, COL.lumen);
  // aorta
  g.r(11, 0, 12, 72, COL.wall); g.r(13, 0, 8, 70, COL.lumen); g.r(13, 60, 30, 10, COL.wall);
  const idx = miMonitor(g, t, { af: o.af, rr: o.rr, kind: o.kind });
  const sys = idx >= 1 && idx <= 16, sq = sys ? Math.sin(Math.PI * (idx - 1) / 16) : 0;
  // aurícula
  const [arx, ary] = o.la;
  ell(g, MI_LA[0], MI_LA[1], arx + 2, ary + 2, COL.myo);
  if (o.fib) for (let i = 0; i < 44; i++) { const a = i * Math.PI * 2 / 44, d = rnd(i, Math.floor(t * 14)) > 0.5 ? 3 : 2; g.p(MI_LA[0] + Math.cos(a) * (arx + d), MI_LA[1] + Math.sin(a) * (ary + d), blink(t + i * 0.1, 7) ? COL.pink : COL.myo); }
  if (o.clot) { ell(g, 34, 22, 7, 6, COL.myo); ell(g, 34, 22, 5, 4, COL.lumen); }
  ell(g, MI_LA[0], MI_LA[1], arx, ary, COL.lumen);
  // ventrículo (se contrae en sístole)
  const vrx = o.lv[0] - Math.round(3 * sq), vry = o.lv[1] - Math.round(2 * sq);
  g.r(48, 42, 24, 16, COL.myo);
  ell(g, MI_LV[0], MI_LV[1], vrx + 4, vry + 4, COL.myo); ell(g, MI_LV[0], MI_LV[1], vrx, vry, COL.lumen);
  g.r(50, 42, 20, 16, COL.lumen);
  g.r(15, 62, 32, 6, COL.lumen);
  // válvula aórtica
  if (sys) { g.r(28, 62, 4, 1, COL.cap); g.r(28, 67, 4, 1, COL.cap); } else { g.r(29, 62, 1, 3, COL.cap); g.r(29, 65, 1, 3, COL.cap); }
  // músculos papilares y cuerdas
  const pb = MI_LV[1] + vry, tips = [[52, pb - 7], [68, pb - 7]];
  g.r(50, pb - 6, 5, 6, COL.myo); g.r(51, pb - 7, 3, 1, COL.myo);
  if (!o.flail) { g.r(65, pb - 6, 5, 6, COL.myo); g.r(66, pb - 7, 3, 1, COL.myo); }
  else { g.r(65, pb - 3, 5, 3, COL.myo); if (blink(t, 3)) g.r(65, pb - 4, 5, 1, COL.red); }
  const [l, r] = miLeaflets(g, t, o.valve, sys, o.valve === 'em');
  g.line(tips[0][0], tips[0][1], l[0], l[1], '#9A8FB0');
  if (!o.flail) g.line(tips[1][0], tips[1][1], r[0], r[1], '#9A8FB0');
  else { const hx = r[0] + 2, hy = r[1] + 7; g.line(r[0], r[1], hx, hy, '#9A8FB0'); g.disk(hx, hy, 2, COL.myo); }
  // flujo
  const em = o.valve === 'em';
  if (!sys) for (let i = 0; i < 9; i++) {
    const p = (t * 1.1 + i / 9) % 1, ow = em ? 2 : 10;
    const [x, y] = along([[46 + rnd(i, 144) * 28, 22 + rnd(i, 145) * 12], [60 + (rnd(i, 146) - 0.5) * ow, MI_VY + 2], [48 + rnd(i, 147) * 24, 64 + rnd(i, 148) * 12]], p);
    const jit = em && y > MI_VY + 2 ? Math.round(Math.sin(t * 30 + i) * 2) : 0;
    g.r(x - 1 + jit, y - 1, 2, 2, em && y > MI_VY + 2 ? (i % 2 ? COL.gold : COL.orange) : COL.rbc);
  }
  if (sys) {
    const nf = o.mr > 1 ? 3 : 8;
    for (let i = 0; i < nf; i++) { const [x, y] = along([[54 + rnd(i, 149) * 12, 76], [40, 65], [17, 65], [17, 2]], (t * 1.4 + i / nf) % 1); g.r(x - 1, y - 1, 2, 2, COL.rbc); }
    const nr = Math.round((o.mr || 0) * 9);
    for (let i = 0; i < nr; i++) {
      const p = (t * 1.3 + i / nr) % 1, far = o.mr > 1 && i % 3 === 0;
      const pts = [[60, 53], [60 + (rnd(i, 150) - 0.5) * 34, 20 + rnd(i, 151) * 16]];
      if (far) pts.push([96 + rnd(i, 152) * 16, 30]);
      const [x, y] = along(pts, p);
      g.r(x - 1, y - 1, 2, 2, i % 2 ? COL.gold : COL.orange);
    }
  }
  // venas pulmonares que llegan a la AI (más lentas si hay congestión)
  for (let i = 0; i < 5; i++) { const x = 118 - ((t * (o.cong ? 7 : 18) + i * 7) % 34); g.r(x, 30, 2, 2, COL.rbc); }
  // presión de la AI
  const pv = o.pres, pc = pv < 0.45 ? COL.green : pv < 0.7 ? COL.gold : COL.red;
  gauge(g, 148, 54, 6, 34, pv, o.alarm && !blink(t, 3) ? COL.white : pc);
  return sys;
}
// Corazón pequeño para el paso de tratamiento (mitad izquierda o derecha)
function miMini(g, t, x0, mode) {
  const cx = x0 + 46, c = mode === 'balon' ? '#E0DCC8' : COL.cap;
  ell(g, cx, 28, 19, 13, COL.myo); ell(g, cx, 28, 17, 11, COL.lumen);
  g.r(cx - 9, 38, 18, 12, COL.myo);
  ell(g, cx, 62, 21, 16, COL.myo); ell(g, cx, 62, 18, 13, COL.lumen);
  g.r(cx - 7, 38, 14, 12, COL.lumen);
  const path = [[x0 + 6, 119], [x0 + 6, 24], [cx - 12, 24], [cx - 3, 32], [cx, 40]];
  for (let k = 1; k < path.length; k++) { g.line(path[k - 1][0], path[k - 1][1], path[k][0], path[k][1], COL.cap); g.line(path[k - 1][0] + 1, path[k - 1][1], path[k][0] + 1, path[k][1], '#8A8FA6'); }
  if (mode === 'balon') {
    const c6 = t % 6, infl = c6 < 1.5 ? c6 / 1.5 : c6 < 4 ? 1 : c6 < 4.5 ? (4.5 - c6) / 0.5 : 0;
    const open = c6 < 1.5 ? infl : 1, w = 2 + Math.round(open * 4);
    g.line(cx - 7, 44, cx - w, 51, c); g.line(cx - 6, 44, cx - w + 1, 51, c);
    g.line(cx + 7, 44, cx + w, 51, c); g.line(cx + 6, 44, cx + w - 1, 51, c);
    if (infl > 0) {
      const r = Math.max(1, Math.round(infl * 6));
      ell(g, cx, 39, r, 4, COL.plt); ell(g, cx, 49, r, 4, COL.plt); ell(g, cx, 44, Math.max(1, r - 2), 2, COL.plt);
      g.p(cx - r + 1, 38, COL.white); g.p(cx - r + 1, 48, COL.white);
    } else for (let i = 0; i < 8; i++) {
      const [x, y] = along([[cx - 12 + rnd(i, 153) * 24, 22 + rnd(i, 154) * 10], [cx + (rnd(i, 155) - 0.5) * (2 * w - 2), 50], [cx - 12 + rnd(i, 156) * 24, 60 + rnd(i, 157) * 10]], (t * 1.1 + i / 8) % 1);
      g.r(x - 1, y - 1, 2, 2, COL.rbc);
    }
  } else {
    const sys = (t * 0.8) % 1 < 0.45;
    g.line(cx - 7, 44, cx - 1, 48, c); g.line(cx + 7, 44, cx + 1, 48, c);
    g.r(cx - 1, 45, 3, 5, '#AEBBD0'); g.r(cx - 1, 45, 3, 1, COL.white);
    if (!sys) for (let i = 0; i < 8; i++) {
      const side = i % 2 ? 1 : -1, [x, y] = along([[cx + side * (4 + rnd(i, 158) * 8), 22 + rnd(i, 159) * 10], [cx + side * 4, 48], [cx + side * (4 + rnd(i, 160) * 10), 60 + rnd(i, 161) * 10]], (t * 1.1 + i / 8) % 1);
      g.r(x - 1, y - 1, 2, 2, COL.rbc);
    }
    else if (blink(t, 2)) { g.r(cx - 4, 41, 2, 2, COL.green); g.r(cx + 3, 41, 2, 2, COL.green); }
  }
}

SCENES.mitral = [
  // 1. Estenosis mitral: válvula estrecha, AI dilatada con presión alta y congestión pulmonar
  (g, t) => miHeart(g, t, { la: [25, 15], lv: [20, 14], valve: 'em', kind: 'em', edema: 0.45, pres: 0.78, cong: true }),
  // 2. FA y trombo en la orejuela: émbolo que sale por la aorta
  (g, t) => {
    miHeart(g, t, { la: [26, 15], lv: [20, 14], valve: 'em', kind: 'em', af: true, fib: true, clot: true, edema: 0.5, pres: 0.82, cong: true });
    g.disk(34, 23, 3, COL.fibrin); g.r(33, 22, 2, 1, '#B32638');
    const p = (t * 0.25) % 1, [x, y] = along([[36, 26], [56, 40], [60, 52], [56, 68], [40, 65], [17, 65], [17, -4]], p);
    g.r(x - 2, y - 2, 5, 5, '#FF9BA8'); g.r(x - 1, y - 1, 3, 3, COL.fibrin);
  },
  // 3. Insuficiencia mitral crónica: reflujo en sístole, AI y VI dilatados
  (g, t) => miHeart(g, t, { la: [25, 15], lv: [26, 17], valve: 'im', kind: 'im', mr: 1, edema: 0.2, pres: 0.55 }),
  // 4. Ruptura del músculo papilar: valva flácida, reflujo masivo en una AI pequeña → edema pulmonar
  (g, t) => miHeart(g, t, { la: [19, 12], lv: [20, 14], valve: 'flail', kind: 'ima', flail: true, mr: 2, rr: 28, edema: 1, pres: 0.98, alarm: true }),
  // 5. Tratamiento percutáneo: balón en la estenosis, clip borde a borde en la insuficiencia
  (g, t) => {
    g.clear(COL.bg);
    miMini(g, t, 0, 'balon'); miMini(g, t, 80, 'clip');
    g.r(79, 0, 2, 120, COL.frame);
  }
];
