// ═══════════ Linfomas y LLC: ganglio, Reed-Sternberg, diseminación, Lugano y LLC
SCENES.linfo = (() => {
  const NODE = '#2A2350', FOL = '#3A4A9A', GC = '#7A8AE0', SKIN = '#C98E66', LIT = COL.gold;
  const lympho = (g, x, y) => { g.disk(x, y, 2, '#9FC8FF'); g.r(x - 1, y - 1, 2, 2, '#3A2A8A'); };
  // Silueta con ganglios: cx = centro, s = escala (1 = grande, 0.7 = chica)
  function body(g, cx, s, dia) {
    const k = (v) => Math.round(v * s);
    g.disk(cx, k(14), k(7), SKIN);
    g.r(cx - k(15), k(22), k(30), k(52), SKIN);
    g.r(cx - k(23), k(24), k(8), k(36), SKIN); g.r(cx + k(15), k(24), k(8), k(36), SKIN);
    g.r(cx - k(13), k(74), k(11), k(40), SKIN); g.r(cx + k(2), k(74), k(11), k(40), SKIN);
    if (dia) for (let x = cx - k(15); x < cx + k(15); x += 4) g.r(x, k(50), 2, 1, COL.cyan);
  }
  // posiciones relativas (x, y) en escala 1
  const N = { cerv: [-6, 24], cervR: [6, 24], axi: [-11, 32], axiR: [11, 32], med: [0, 38], pao: [0, 60], ingL: [-7, 76], ingR: [7, 76] };
  function nodeAt(g, t, cx, s, key, on, ph = 0) {
    const [dx, dy] = N[key], x = cx + Math.round(dx * s), y = Math.round(dy * s);
    g.disk(x, y, 2, on ? (blink(t + ph, 2) ? LIT : COL.orange) : '#8A5A40');
  }
  return [
    // 1. Ganglio normal
    (g, t) => {
      g.clear(COL.bg);
      ell(g, 76, 60, 56, 44, COL.cap); ell(g, 76, 60, 54, 42, NODE);
      ell(g, 78, 60, 30, 22, '#33305E');
      ell(g, 102, 60, 16, 16, '#3E2A4E');
      for (let k = 0; k < 4; k++) g.r(90 + k * 6, 50 + (k % 2) * 6, 10, 2, '#6A4A6A');
      [[40, 40], [60, 28], [88, 26], [40, 80], [60, 92], [88, 94], [30, 60]].forEach(([x, y], k) => { g.disk(x, y, 8, FOL); g.disk(x, y, 4 + (blink(t + k * 0.3, 1) ? 1 : 0), GC); });
      for (let i = 0; i < 10; i++) g.r(60 + rnd(i, 401) * 34, 48 + rnd(i, 402) * 24, 2, 2, COL.cyan);
      g.r(128, 56, 32, 4, '#3A4AA0'); g.r(128, 64, 32, 3, COL.red);
      const AF = [[[2, 14], [32, 30]], [[2, 108], [34, 92]], [[2, 60], [22, 60]]];
      AF.forEach(([a, b]) => g.line(a[0], a[1], b[0], b[1], '#7A8AB0'));
      for (let i = 0; i < 9; i++) {
        const p = (t * 0.25 + i / 9) % 1, [a, b] = AF[i % 3];
        if (p < 0.4) lympho(g, lerp(a[0], b[0], p / 0.4), lerp(a[1], b[1], p / 0.4));
        else if (p < 0.75) lympho(g, lerp(b[0], 100, (p - 0.4) / 0.35), lerp(b[1], 60, (p - 0.4) / 0.35));
        else lympho(g, lerp(128, 160, (p - 0.75) / 0.25), 58);
      }
    },
    // 2. Hodgkin: pocas células de Reed-Sternberg en un fondo inflamatorio
    (g, t) => {
      g.clear('#2A1E40');
      g.line(0, 20, 160, 6, '#C9C2A8'); g.line(0, 21, 160, 7, '#C9C2A8');
      g.line(0, 112, 160, 98, '#C9C2A8'); g.line(0, 113, 160, 99, '#C9C2A8');
      const RS = [[52, 54], [118, 74]];
      for (let i = 0; i < 80; i++) {
        let x = 4 + rnd(i, 410) * 152, y = 24 + rnd(i, 411) * 72;
        const R = RS[i % 2], d = Math.hypot(x - R[0], y - R[1]);
        if (d < 13) continue;
        const pull = 0.06 * Math.sin(t * 1.2 + i);
        x += (R[0] - x) * pull; y += (R[1] - y) * pull;
        if (i % 5 === 0) { g.r(x - 1, y - 1, 3, 3, '#FF8A6A'); g.p(x - 1, y - 1, COL.red); g.p(x + 1, y + 1, COL.red); }
        else g.r(x, y, 2, 2, '#6A5AD0');
      }
      RS.forEach(([x, y], k) => {
        g.disk(x, y, 9, '#D8C8EC');
        g.disk(x - 4, y, 3, '#7A5AB8'); g.disk(x + 4, y, 3, '#7A5AB8');
        g.r(x - 5, y - 1, 2, 2, COL.red); g.r(x + 3, y - 1, 2, 2, COL.red);
        for (let a = 0; a < 6; a++) { const an = a * 1.05 + t * 0.6; g.p(x + Math.round(Math.cos(an) * 10), y + Math.round(Math.sin(an) * 10), k ? COL.cyan : LIT); }
        for (let i = 0; i < 5; i++) { const p = (t * 0.5 + i / 5) % 1, an = i * 1.26 + k; g.r(x + Math.cos(an) * lerp(10, 24, p), y + Math.sin(an) * lerp(10, 24, p), 1, 1, LIT); }
      });
    },
    // 3. Diseminación: Hodgkin contigua vs no Hodgkin que salta y sale del ganglio
    (g, t) => {
      g.clear(COL.bg);
      body(g, 40, 0.92, false); body(g, 120, 0.92, false);
      const CH = ['cerv', 'axi', 'med', 'pao', 'ingL'];
      const on = 1 + Math.floor((t * 0.9) % 5);
      for (let i = 0; i < CH.length - 1; i++) { const [a, b] = [N[CH[i]], N[CH[i + 1]]]; g.line(40 + a[0] * 0.92, a[1] * 0.92, 40 + b[0] * 0.92, b[1] * 0.92, '#7A4A30'); }
      CH.forEach((c, i) => nodeAt(g, t, 40, 0.92, c, i < on));
      if (on < CH.length) { const a = N[CH[on - 1]], b = N[CH[on]], p = (t * 0.9) % 1; g.r(40 + lerp(a[0], b[0], p) * 0.92 - 1, lerp(a[1], b[1], p) * 0.92 - 1, 2, 2, COL.white); }
      ['cerv', 'axi', 'med', 'pao', 'ingL', 'cervR', 'axiR', 'ingR'].forEach((c) => nodeAt(g, t, 120, 0.92, c, ['cervR', 'ingL'].includes(c), 0.4));
      ell(g, 127, 52, 5, 4, blink(t + 0.2, 2) ? LIT : COL.violet);
      g.r(138, 40, 4, 4, blink(t + 0.6, 2) ? LIT : COL.violet);
      for (let y = 80; y < 102; y += 4) { g.p(113, y, blink(t + y * 0.05, 2) ? LIT : COL.violet); g.p(127, y, blink(t + y * 0.05 + 0.5, 2) ? LIT : COL.violet); }
    },
    // 4. Estadios de Lugano: I, II, III y IV respecto al diafragma
    (g, t) => {
      g.clear(COL.bg);
      const S = 0.82, X = [20, 60, 100, 140];
      X.forEach((cx) => body(g, cx, S, false));
      for (let x = 0; x < 160; x += 4) g.r(x, Math.round(50 * S), 2, 1, COL.cyan);
      const ON = [['cerv'], ['cerv', 'axi', 'med'], ['cerv', 'med', 'pao', 'ingR'], ['cerv', 'med', 'pao']];
      X.forEach((cx, i) => Object.keys(N).forEach((c) => nodeAt(g, t, cx, S, c, ON[i].includes(c), i * 0.25)));
      ell(g, 106, 44, 3, 3, blink(t, 2) ? LIT : COL.violet);
      ell(g, 135, 46, 7, 4, COL.liver);
      for (let i = 0; i < 8; i++) g.p(130 + rnd(i, 420) * 10, 43 + rnd(i, 421) * 6, blink(t + i * 0.2, 2) ? LIT : COL.orange);
      for (let y = 66; y < 92; y += 4) { g.p(134, y, blink(t + y * 0.04, 2) ? LIT : COL.violet); g.p(146, y, blink(t + y * 0.04 + 0.5, 2) ? LIT : COL.violet); }
    },
    // 5. LLC: linfocitos B pequeños y maduros; frágiles → células en mancha en el frotis
    (g, t) => {
      g.clear('#1A1438');
      const edge = (t * 28) % 190 - 15;
      for (let i = 0; i < 18; i++) { const x = 6 + rnd(i, 430) * 148, y = 22 + rnd(i, 431) * 92; g.ring(x, y, 3, COL.pink); }
      for (let i = 0; i < 34; i++) {
        const x = 6 + rnd(i, 432) * 148, y = 22 + rnd(i, 433) * 92, frag = rnd(i, 434) < 0.35;
        if (frag && x < edge) { g.disk(x, y, 3, '#5A4A90'); for (let k = 0; k < 5; k++) g.p(x - 4 + rnd(k + i, 435) * 8, y - 4 + rnd(k + i, 436) * 8, '#8A7AC0'); g.r(x - 4, y + 2, 3, 1, '#5A4A90'); }
        else { g.disk(x, y, 3, '#9FC8FF'); g.disk(x, y, 2, '#3A2A8A'); }
      }
      g.disk(30, 60, 5, '#9FC8FF'); g.disk(30, 60, 4, '#3A2A8A');
      for (let a = 0; a < 6; a++) { const an = a * 1.05; g.p(30 + Math.round(Math.cos(an) * 6), 60 + Math.round(Math.sin(an) * 6), a % 2 ? COL.cyan : LIT); }
      g.r(edge, 18, 2, 102, COL.cap);
      frameBox(g, 104, 2, 52, 12); text3(g, '22000', 109, 5, COL.gold);
    }
  ];
})();
