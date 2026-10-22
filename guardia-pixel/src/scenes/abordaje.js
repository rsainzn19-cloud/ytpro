// ═══════════ Abordaje reumatológico: articular vs periarticular, ritmo del dolor, patrón y líquido sinovial
// Todo vive dentro de una función para no chocar con las utilidades de otras escenas.
SCENES.abordaje = (() => {
  const BONE = '#D9CBA8', BONED = '#B8A880', SKIN = '#C98E66', EFF = '#C9A24A', EFFD = '#9A7A30', CART = '#62C3C8';
  const GL = {
    A: ['010', '101', '111', '101', '101'], C: ['011', '100', '100', '100', '011'], T: ['111', '010', '010', '010', '010'],
    I: ['111', '010', '010', '010', '111'], V: ['101', '101', '101', '101', '010'], O: ['010', '101', '101', '101', '010'],
    P: ['110', '101', '110', '100', '100'], S: ['011', '100', '010', '001', '110']
  };
  const word = (g, s, x, y, c) => [...s].forEach((ch, k) => { const gl = GL[ch]; if (gl) gl.forEach((row, j) => { for (let i = 0; i < 3; i++) if (row[i] === '1') g.p(x + k * 4 + i, y + j, c); }); });

  // Una articulación que se flexiona; la mitad del ciclo la mueve el paciente (activo) y la otra el explorador (pasivo)
  function limb(g, t, cx, peri) {
    frameBox(g, cx - 37, 14, 74, 90);
    const per = 4, active = Math.floor(t / per) % 2 === 0;
    const k = (1 - Math.cos(((t % per) / per) * Math.PI * 2)) / 2, th = k * 1.9, deg = (th * 180) / Math.PI;
    const px = cx - 8, py = 50;
    g.r(px - 3, 22, 7, py - 22, BONE); g.r(px - 3, 22, 1, py - 22, BONED);
    for (let s = 0; s <= 34; s++) g.disk(Math.round(px + Math.sin(th) * s), Math.round(py + Math.cos(th) * s), 3, BONE);
    g.disk(px, py, 5, BONE);
    word(g, active ? 'ACTIVO' : 'PASIVO', cx - 11, 18, active ? COL.cyan : COL.gold);
    if (!active) { const hx = px + Math.sin(th) * 30, hy = py + Math.cos(th) * 30; g.disk(hx, hy, 5, SKIN); g.disk(hx, hy, 3, '#E0A884'); }
    let pain;
    if (!peri) {
      pain = true;
      g.ring(px, py, 9, blink(t, 3) ? COL.red : '#B32638', 2);
      for (let i = 0; i < 4; i++) { const a = t * 2 + i * 1.57; g.p(px + Math.cos(a) * 12, py + Math.sin(a) * 12, COL.red); }
    } else {
      const tx = px + 3 + Math.sin(th) * 14, ty = py + Math.cos(th) * 14;
      g.line(px + 4, 26, px + 7, py - 2, COL.gold); g.line(px + 7, py - 2, tx, ty, COL.gold);
      g.disk(px + 7, py - 4, 2, '#7A5A9A');
      pain = active && deg > 55 && deg < 100;
      if (pain) { g.disk(px + 7, py - 4, 4, blink(t, 4) ? COL.red : '#B32638'); }
    }
    g.r(cx - 30, 96, 60, 4, COL.bg); g.r(cx - 30, 96, pain ? 60 : 10, 4, pain ? COL.red : COL.green);
  }

  // Esqueleto en palitos; lit = articulaciones inflamadas [dx, y]
  function skel(g, t, cx, lit, n) {
    const L = (a, b, c, d) => g.line(cx + a, b, cx + c, d, BONE);
    g.disk(cx, 13, 5, BONE); g.p(cx - 2, 12, COL.bg); g.p(cx + 2, 12, COL.bg);
    L(0, 18, 0, 60); L(-9, 24, 9, 24);
    for (let y = 30; y <= 44; y += 5) L(-5, y, 5, y);
    for (const s of [-1, 1]) {
      L(s * 9, 24, s * 12, 39); L(s * 12, 39, s * 14, 52);
      L(s * 14, 52, s * 17, 58); L(s * 14, 52, s * 14, 59); L(s * 14, 52, s * 11, 58);
      L(0, 60, s * 5, 60); L(s * 5, 60, s * 6, 80); L(s * 6, 80, s * 6, 99); L(s * 6, 99, s * 11, 102);
    }
    [[-9, 24], [9, 24], [-12, 39], [12, 39], [-14, 52], [14, 52], [-5, 60], [5, 60], [-6, 80], [6, 80], [-6, 99], [6, 99]].forEach(([dx, y]) => g.p(cx + dx, y, COL.frame));
    lit.slice(0, n).forEach(([dx, y], k) => {
      const on = blink(t + k * 0.17, 2);
      g.disk(cx + dx, y, 2, on ? COL.red : '#B32638'); g.ring(cx + dx, y, 3, on ? '#FF8A9A' : '#7A1A2A');
    });
    text3(g, String(n), cx - (n > 9 ? 3 : 1), 1, COL.gold);
  }

  // Tubo de líquido sinovial
  function tube(g, t, cx, col, n, pmn, i) {
    g.r(cx - 9, 26, 1, 66, COL.cap); g.r(cx + 9, 26, 1, 66, COL.cap); g.r(cx - 10, 25, 21, 2, COL.cap);
    g.disk(cx, 92, 9, COL.cap); g.disk(cx, 92, 8, col);
    g.r(cx - 8, 40, 17, 52, col);
    g.r(cx - 8, 40, 17, 1, '#FFFFFF');
    for (let k = 0; k < n; k++) {
      const x = cx - 6 + rnd(k, 120 + i) * 12 + Math.sin(t * 1.3 + k) * 1.2;
      const y = 43 + tri(rnd(k, 130 + i) * 48 + t * (2 + rnd(k, 140 + i) * 3), 50);
      g.r(x, y, 2, 2, k % 3 ? COL.white : '#E8D0FF'); if (k % 2 === 0) g.p(x, y, COL.violet);
    }
    g.r(cx - 10, 100, 21, 3, COL.frame); g.r(cx - 10, 100, Math.max(1, Math.round(21 * pmn)), 3, COL.violet);
  }

  return [
    // 1 · Articular vs periarticular
    (g, t) => { g.clear(COL.bg); limb(g, t, 40, false); limb(g, t, 120, true); },
    // 2 · Inflamatorio vs mecánico a lo largo del día
    (g, t) => {
      g.clear(COL.bg); frameBox(g, 4, 4, 152, 100);
      const X0 = 14, X1 = 150, Y0 = 90, H = 66;
      const xh = (h) => X0 + (X1 - X0) * (h < 2 ? (h / 2) * 0.4 : 0.4 + ((h - 2) / 14) * 0.6);
      const hx = (x) => { const p = (x - X0) / (X1 - X0); return p < 0.4 ? (p / 0.4) * 2 : 2 + ((p - 0.4) / 0.6) * 14; };
      const fi = (h) => (h < 1 ? 0.9 : h < 2.5 ? lerp(0.9, 0.22, (h - 1) / 1.5) : 0.22 + (0.06 * (h - 2.5)) / 13.5);
      const fm = (h) => (h < 0.4 ? lerp(0.35, 0.12, h / 0.4) : lerp(0.12, 0.85, (h - 0.4) / 15.6));
      g.r(X0, Y0, X1 - X0, 1, COL.frame); g.r(X0, Y0 - H - 2, 1, H + 2, COL.frame);
      for (let y = Y0 - H; y < Y0; y += 3) g.p(Math.round(xh(2)), y, COL.frame);
      for (let x = X0 + 1; x < xh(1); x += 2) { const top = Math.round(Y0 - fi(hx(x)) * H); g.r(x, top + 2, 1, Y0 - top - 2, '#4A1A2E'); }
      for (let x = X0 + 1; x < xh(0.4); x += 2) { const top = Math.round(Y0 - fm(hx(x)) * H); g.r(x, top + 2, 1, Y0 - top - 2, '#163A5A'); }
      for (let x = X0; x < X1 - 1; x++) {
        const a = Y0 - fi(hx(x)) * H, b = Y0 - fi(hx(x + 1)) * H, c = Y0 - fm(hx(x)) * H, d = Y0 - fm(hx(x + 1)) * H;
        g.line(x, a, x + 1, b, COL.red); g.line(x, a + 1, x + 1, b + 1, COL.red);
        g.line(x, c, x + 1, d, COL.cyan); g.line(x, c + 1, x + 1, d + 1, COL.cyan);
      }
      [[0.5, '30', COL.cyan], [1, '60', COL.red]].forEach(([h, s, c]) => { const x = Math.round(xh(h)); g.r(x, Y0 + 1, 1, 2, c); text3(g, s, x - 3, Y0 + 5, c); });
      g.disk(20, 13, 3, COL.gold); [[0, -5], [0, 5], [-5, 0], [5, 0]].forEach(([dx, dy]) => g.p(20 + dx, 13 + dy, COL.gold));
      g.disk(144, 13, 3, '#E8E2D0'); g.disk(146, 12, 3, COL.panel);
      const xc = X0 + ((t % 10) / 10) * (X1 - X0 - 1);
      for (let y = Y0 - H; y < Y0; y += 3) g.p(xc, y, COL.white);
      g.disk(xc, Y0 - fi(hx(xc)) * H, 2, COL.white); g.disk(xc, Y0 - fi(hx(xc)) * H, 1, COL.red);
      g.disk(xc, Y0 - fm(hx(xc)) * H, 2, COL.white); g.disk(xc, Y0 - fm(hx(xc)) * H, 1, COL.cyan);
    },
    // 3 · Mono, oligo y poli
    (g, t) => {
      g.clear(COL.bg);
      skel(g, t, 27, [[-6, 80]], 1);
      skel(g, t, 80, [[6, 80], [-6, 99], [-11, 102]], 3);
      const POLI = [[-14, 52], [14, 52], [-14, 56], [14, 56], [-16, 57], [16, 57], [-11, 102], [11, 102]];
      skel(g, t, 133, POLI, Math.min(POLI.length, 1 + Math.floor((t % 8) * 1.4)));
    },
    // 4 · Artrocentesis de rodilla
    (g, t) => {
      g.clear(COL.bg);
      const k = (t % 8) / 8, e = lerp(1, 0.6, k);
      g.r(30, 0, 52, 120, SKIN); ell(g, 58, 56, 32, 24, SKIN); ell(g, 74, 32, 14, 20, SKIN);
      ell(g, 60, 56, Math.round(24 * e + 4), Math.round(13 * e + 3), EFF);
      ell(g, 72, 32, Math.round(8 * e + 3), Math.round(15 * e + 4), EFF);
      g.r(46, 0, 20, 46, BONE); ell(g, 56, 48, 13, 8, BONE); g.r(46, 0, 1, 46, BONED);
      g.r(48, 64, 16, 56, BONE); g.r(43, 60, 26, 5, BONE);
      g.r(44, 55, 24, 1, CART); g.r(43, 59, 26, 1, CART);
      ell(g, 80, 50, 4, 8, BONE); g.r(77, 46, 1, 8, BONED);
      for (let i = 0; i < 6; i++) {
        const a = t * 0.8 + i * 1.05, x = 72 + Math.cos(a) * 4 * e, y = 30 + Math.sin(a * 1.3) * 10 * e;
        if (i % 2) g.r(x, y, 2, 2, COL.white); else g.line(x, y, x + 3, y - 2, '#FFFFFF');
      }
      for (let i = 0; i < 4; i++) { const x = 36 + i * 4 + Math.sin(t + i) * 1.5, y = 62 + (i % 2) * 3; g.r(x, y, 2, 2, COL.white); }
      g.r(76, 31, 34, 1, COL.cap);
      g.r(110, 25, 38, 13, COL.cap); g.r(111, 26, 36, 11, COL.panel);
      const fill = Math.round(2 + k * 32);
      g.r(111, 27, fill, 9, EFF); for (let i = 0; i < 4; i++) g.p(112 + rnd(i, 150) * fill, 28 + rnd(i, 151) * 7, COL.white);
      g.r(111 + fill, 26, 2, 11, '#6A6A80'); g.r(113 + fill, 30, 46, 3, '#9A9AB0');
      for (let i = 0; i < 3; i++) { const p = (t * 0.9 + i / 3) % 1; g.r(lerp(76, 108, p), 30, 2, 2, '#F2D27A'); }
      [[112, COL.violet], [124, COL.red], [136, COL.green], [148, COL.na]].forEach(([x, c], i) => {
        g.r(x - 4, 72, 8, 3, c); g.r(x - 3, 75, 6, 30, COL.cap); g.r(x - 2, 76, 4, 28, COL.panel);
        const h = Math.round(Math.min(1, Math.max(0, k * 1.6 - i * 0.15)) * 26);
        g.r(x - 2, 104 - h, 4, h, EFF);
      });
    },
    // 5 · Cuatro líquidos sinoviales
    (g, t) => {
      g.clear(COL.bg);
      tube(g, t, 22, '#3A3A28', 1, 0.15, 0);
      tube(g, t, 61, '#8A7A30', 5, 0.2, 1);
      tube(g, t, 100, '#B08A3A', 18, 0.65, 2);
      tube(g, t, 139, '#C8BC92', 44, 0.92, 3);
      for (let i = 0; i < 26; i++) g.p(132 + rnd(i, 160) * 14, 42 + rnd(i, 161) * 48, '#E8E2C8');
    }
  ];
})();
