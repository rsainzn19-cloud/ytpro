// ═══════════ Osteoartritis: desgaste del cartílago, Rx, manos y descarga mecánica
const OB = '#D9CBA8', OBD = '#B8A880', OSK = '#C98E66', OSKD = '#9E6A48';
// Rodilla de frente. o: thM (cartílago medial), gapM (espacio medial), xray, osteo (0–1), scler, cysts, fis (fisuras 0–1)
function oaKnee(g, t, o = {}) {
  const xr = !!o.xray, bone = xr ? '#C8CCD8' : OB, boneD = xr ? '#9AA0B4' : OBD;
  g.clear(xr ? '#04050C' : COL.bg);
  const thL = 4, gapL = 4, thM = o.thM ?? 4, gapM = o.gapM ?? 4;
  const TOP = 60 + thL + gapL + thL;
  const drop = TOP - (60 + thM + gapM + thM);
  const off = (x) => Math.round(drop * clamp01((100 - x) / 42));
  const CX = [58, 102], R = 20;
  const bot = (x) => { let y = -1; CX.forEach((cx) => { const d = x - cx; if (Math.abs(d) <= R) y = Math.max(y, 40 + Math.sqrt(R * R - d * d)); }); return y < 0 ? 44 : Math.round(y); };
  for (let x = 38; x <= 122; x++) {
    const top = x >= 62 && x <= 98 ? 0 : Math.round(40 - Math.sqrt(Math.max(0, R * R - (x - (x < 80 ? 58 : 102)) ** 2)));
    const yb = bot(x), dy = off(x);
    if (top === 0) g.r(x, 0, 1, yb + dy, bone); else g.r(x, top + dy, 1, yb - top, bone);
    const near = Math.min(Math.abs(x - 58), Math.abs(x - 102)) < 17;
    if (near && !xr) g.r(x, yb + dy, 1, x < 80 ? thM : thL, COL.bow);
    if (near && o.scler && x < 80) g.r(x, yb + dy - 4, 1, 4, xr ? '#FFFFFF' : COL.white);
  }
  g.r(34, TOP, 92, 18, bone); g.r(62, TOP + 18, 36, 120 - TOP - 18, bone);
  if (!xr) { g.r(36, TOP - thM, 44, thM, COL.bow); g.r(80, TOP - thL, 44, thL, COL.bow); }
  if (o.scler) g.r(36, TOP, 42, 4, xr ? '#FFFFFF' : COL.white);
  for (let i = 0; i < 26; i++) g.p(40 + rnd(i, 111) * 80, TOP + 4 + rnd(i, 112) * 12, boneD);
  for (let i = 0; i < 14; i++) g.p(64 + rnd(i, 113) * 32, 4 + rnd(i, 114) * 26, boneD);
  if (!xr) for (let x = 38; x < 122; x += 3) { const yb = bot(x) + off(x) + (x < 80 ? thM : thL); if (yb < TOP - 1 && Math.min(Math.abs(x - 58), Math.abs(x - 102)) < 17) g.p(x, yb + 1, '#2A6A9A'); }
  if (o.fis) for (let k = 0; k < 6; k++) { const x = 42 + k * 6; if (rnd(k, 115) < o.fis) { g.r(x, TOP - thM, 1, thM, COL.bg); g.p(x, bot(x) + off(x), COL.bg); } }
  if (o.osteo) {
    const s = Math.round(3 + 6 * o.osteo);
    for (let k = 0; k < s; k++) { g.r(34 - k, TOP + k, k + 1, 1, bone); g.r(38 - k, bot(40) + off(40) - 6 + k, k + 1, 1, bone); }
    const s2 = Math.round(s / 2);
    for (let k = 0; k < s2; k++) { g.r(126, TOP + k, s2 - k, 1, bone); g.r(122, 48 + k, s2 - k, 1, bone); }
  }
  if (o.cysts) { g.disk(46, TOP + 9, 2, xr ? '#2A2E40' : '#7A6A50'); g.disk(64, bot(64) + off(64) - 8, 2, xr ? '#2A2E40' : '#7A6A50'); }
  return { TOP, drop, off, bot };
}
function oaDownArrow(g, x, y, len, w, c) { g.r(x - Math.floor(w / 2), y, w, len, c); for (let k = 0; k < w + 2; k++) g.r(x - Math.floor(w / 2) - 2 + Math.ceil(k / 2), y + len + Math.floor(k / 2), w + 4 - 2 * Math.ceil(k / 2), 1, c); }
SCENES.oa = [
  (g, t) => {
    oaKnee(g, t, {});
    for (let i = 0; i < 6; i++) { const p = (t * 0.5 + i / 6) % 1; g.r(lerp(40, 120, p), 70 + Math.sin(p * 9 + i) * 1.5, 2, 1, COL.cyan); }
    const c = blink(t, 1) ? COL.gold : COL.goldD;
    oaDownArrow(g, 50, 2, 10, 3, c); oaDownArrow(g, 110, 2, 10, 3, c);
  },
  (g, t) => {
    const k = 0.45 + 0.55 * clamp01((t % 10) / 6);
    const thM = Math.max(1, Math.round(lerp(4, 1, k))), gapM = Math.max(1, Math.round(lerp(4, 1, k)));
    const K = oaKnee(g, t, { thM, gapM, fis: k });
    for (let i = 0; i < 5; i++) { const p = (t * 0.4 + i / 5) % 1; g.r(lerp(84, 112, p), K.TOP - 6 + Math.sin(p * 7 + i) * 1.5, 2, 1, COL.bow); }
    const c4 = t % 4, load = c4 < 2;
    const pain = load ? lerp(0.2, 0.85, c4 / 2) : lerp(0.85, 0.2, (c4 - 2) / 2);
    if (load) oaDownArrow(g, 50, 2, 10, 4, blink(t, 3) ? COL.red : COL.orange);
    gauge(g, 146, 24, 8, 70, pain, pain > 0.55 ? COL.red : COL.green);
  },
  (g, t) => {
    const k = 0.4 + 0.6 * clamp01((t % 8) / 5);
    oaKnee(g, t, { xray: true, thM: 1, gapM: 1, osteo: k, scler: true, cysts: true });
    if (blink(t, 1)) g.ring(46, 81, 4, COL.cyan);
  },
  (g, t) => {
    g.clear(COL.bg);
    g.r(0, 34, 26, 36, OSK); g.r(0, 70, 22, 50, OSK);
    g.r(26, 42, 112, 18, OSK); g.disk(138, 51, 9, OSK);
    g.r(132, 45, 8, 10, '#E8C8B0');
    [26, 74, 112].forEach((x) => g.r(x, 44, 1, 14, OSKD));
    const s = Math.round(4 + (0.5 + 0.5 * Math.sin(t * 2)));
    [[74, 'B'], [112, 'H']].forEach(([x]) => { g.disk(x, 41, s, '#E6D2B8'); g.disk(x, 61, s, '#E6D2B8'); g.ring(x, 41, s, OBD); g.ring(x, 61, s, OBD); });
    g.ring(26, 51, 11, blink(t, 1.5) ? COL.green : COL.greenD);
    g.r(20, 92, 52, 14, OSK); g.disk(72, 99, 7, OSK); g.r(70, 94, 6, 9, '#E8C8B0');
    g.line(40, 92, 40, 105, OSKD);
    g.disk(16, 96, blink(t, 2) ? 7 : 6, '#C24A5E'); g.disk(16, 96, 3, COL.red);
  },
  (g, t) => {
    const p = clamp01((t % 10) / 7) * 0.8 + 0.2;
    const K = oaKnee(g, t, { thM: 2, gapM: 2 });
    const mw = Math.round(lerp(3, 9, p));
    g.r(61 - mw, 0, mw, 34, '#C24A5E'); g.r(99, 0, mw, 34, '#C24A5E');
    for (let y = 2; y < 34; y += 4) { g.p(61 - mw + 1, y, '#E46A7E'); g.p(99 + mw - 2, y, '#E46A7E'); }
    const len = Math.round(lerp(20, 6, p)), w = Math.max(2, Math.round(lerp(8, 3, p)));
    oaDownArrow(g, 80, 0, len, w, COL.gold);
    gauge(g, 12, 24, 8, 70, lerp(0.9, 0.55, p), COL.orange);
    gauge(g, 146, 24, 8, 70, lerp(0.85, 0.3, p), p > 0.6 ? COL.green : COL.red);
    return K;
  }
];
