// ═══════════ Diálisis y trasplante renal: membrana, ultrafiltración, fístula, peritoneo e injerto
// Todo vive dentro de una función para no chocar con las utilidades de otras escenas.
SCENES.dialisis = (() => {
  const DIA = '#123A5A', DIAL = '#3A8AC0', WATER = '#7FD0FF', SKIN = '#C98E66', SKIND = '#9A6A4A';
  const VEIN = '#4A5AC0', ART = '#A0263A', FLUID = '#1F5A8A', BAG = '#1C3A66';
  const BT = 14, MY = 43, DT = 48, DB = 78; // sangre 14–42 · membrana 43–47 · dializado 48–78
  const thick = (g, x0, y0, x1, y1, c) => { g.line(x0, y0, x1, y1, c); g.line(x0 + 1, y0, x1 + 1, y1, c); };
  const arrowR = (g, x, y, c) => { g.r(x - 7, y, 7, 1, c); g.line(x - 3, y - 3, x, y, c); g.line(x - 3, y + 3, x, y, c); };
  const arrowL = (g, x, y, c) => { g.r(x, y, 7, 1, c); g.line(x + 3, y - 3, x, y, c); g.line(x + 3, y + 3, x, y, c); };
  const pores = (x1) => { const a = []; for (let x = 4; x < x1 - 2; x += 6) a.push(x); return a; };

  // Filtro: sangre arriba (→), membrana con poros, dializado abajo (←)
  function filterBase(g, t, x1) {
    g.clear(COL.bg);
    g.r(0, BT - 2, x1, 2, COL.wall); g.r(0, BT, x1, MY - BT, COL.lumen);
    for (let x = 0; x < x1; x += 6) g.r(x, MY, 4, 5, COL.cap);
    g.r(0, DT, x1, DB - DT, DIA); g.r(0, DB, x1, 2, DIAL);
    for (let i = 0; i < 14; i++) { const x = x1 - ((t * 24 + i * 13) % (x1 + 4)), y = DT + 3 + rnd(i, 102) * 26; g.r(x, y, 2, 1, DIAL); }
    for (let i = 0; i < 8; i++) {
      const x = (t * 20 + i * 21) % (x1 + 8) - 6, y = BT + 3 + rnd(i, 101) * 22;
      g.r(x, y, 4, 3, COL.rbc); g.r(x + 1, y + 1, 2, 1, COL.rbcD);
    }
    for (let i = 0; i < 3; i++) { const x = (t * 20 + i * 47 + 11) % (x1 + 8) - 4; g.disk(x, BT + 8 + i * 8, 2, COL.gold); }
  }
  // Urea (blanca) y potasio (verde) cruzan los poros y se van con el dializado
  function solutes(g, t, x1, n, sp) {
    const P = pores(x1);
    for (let i = 0; i < n; i++) {
      const p = (t * sp + i / n) % 1, px = P[(i * 7) % P.length], y0 = BT + 4 + rnd(i, 104) * 20, c = i % 3 === 0 ? COL.green : COL.white;
      let x, y;
      if (p < 0.45) { const q = p / 0.45; x = lerp(px - 34, px, q); y = lerp(y0, 40, q * q); }
      else if (p < 0.6) { x = px; y = lerp(40, 54, (p - 0.45) / 0.15); }
      else { const q = (p - 0.6) / 0.4; x = px - q * 40; y = lerp(54, 54 + rnd(i, 105) * 20, q); }
      if (x > -2 && x < x1) g.r(x, y, 2, 2, c);
    }
  }

  return [
    // 1 · Difusión a contracorriente
    (g, t) => {
      filterBase(g, t, 160); solutes(g, t, 160, 16, 0.22);
      arrowR(g, 156, 6, COL.rbc); arrowL(g, 4, 84, DIAL);
      frameBox(g, 4, 88, 152, 30);
      g.line(12, 93, 148, 103, COL.rbc); g.line(12, 94, 148, 104, COL.rbc);
      g.line(12, 103, 148, 113, DIAL); g.line(12, 104, 148, 114, DIAL);
      for (let k = 0; k < 5; k++) {
        const x = 24 + k * 28, yt = 95 + (x - 12) * 10 / 136, on = Math.floor(t * 2 + k) % 5 === 0;
        for (let y = yt + 3; y < yt + 8; y += 2) g.p(x, y, on ? COL.white : COL.frame);
      }
    },
    // 2 · Ultrafiltración: la presión saca agua (y arrastra solutos)
    (g, t) => {
      const x1 = 124, k = (t % 8) / 8;
      filterBase(g, t, x1);
      [10, 30, 100, 118].forEach((x, i) => { if (blink(t + i * 0.25, 2)) g.spr(ARROW_DN, x - 2, 2, { X: COL.gold }); });
      const P = pores(x1);
      for (let i = 0; i < 18; i++) {
        const p = (t * 0.55 + i / 18) % 1, px = P[(i * 5) % P.length];
        const y = lerp(BT + 4 + rnd(i, 106) * 12, DB - 4, p), x = y < DT ? px : px - (y - DT) * 0.4;
        g.r(x, y, 2, 2, i % 5 === 0 ? COL.white : WATER);
      }
      gauge(g, 138, 16, 12, 58, lerp(0.92, 0.42, k), COL.na);
      frameBox(g, 8, 88, 108, 30);
      const lv = Math.round(lerp(3, 24, k));
      g.r(10, 116 - lv, 104, lv, '#1C4A70');
      for (let i = 0; i < 6; i++) g.p(14 + rnd(i, 107) * 96, 116 - rnd(i, 108) * lv, WATER);
      for (let i = 0; i < 3; i++) { const p = (t * 0.8 + i / 3) % 1; g.r(60, lerp(80, 116 - lv, p), 2, 2, WATER); }
    },
    // 3 · Fístula arteriovenosa y circuito al dializador
    (g, t) => {
      g.clear(COL.bg);
      g.r(14, 50, 146, 50, SKIN); g.r(14, 50, 146, 1, '#E0A884'); g.r(14, 99, 146, 1, SKIND);
      ell(g, 10, 75, 10, 22, SKIN); g.r(0, 62, 6, 4, SKIN); g.r(0, 70, 4, 4, SKIN); g.r(0, 78, 4, 4, SKIN);
      const vt = blink(t, 1.5) ? 8 : 7;
      g.r(22, 58, 138, vt, VEIN); g.r(22, 58, 138, 1, '#7A8AE0');
      g.r(22, 86, 138, 4, ART);
      g.r(22, 58, 5, 32, VEIN); g.r(22, 86, 5, 4, ART);
      for (let i = 0; i < 12; i++) {
        const p = (t * 0.18 + i / 12) % 1, [x, y] = along([[160, 88], [24, 88], [24, 62], [160, 62]], p);
        g.r(x - 1, y - 1, 3, 2, COL.rbc);
      }
      if (blink(t, 6)) { g.line(30, 54, 33, 51, COL.gold); g.line(33, 51, 36, 54, COL.gold); g.line(36, 54, 39, 51, COL.gold); }
      g.r(54, 8, 4, 14, COL.cap); g.r(102, 8, 4, 14, COL.cap);
      g.r(58, 9, 44, 12, '#2A3A6A'); for (let y = 11; y < 20; y += 2) g.r(58, y, 44, 1, '#3A5A9A');
      g.r(66, 3, 2, 6, DIAL); g.r(92, 3, 2, 6, DIAL);
      for (let i = 0; i < 2; i++) { const p = (t * 0.6 + i / 2) % 1; g.r(92, lerp(9, 1, p), 2, 2, COL.white); g.r(66, lerp(1, 9, p), 2, 2, WATER); }
      const AL = [[71, 58], [71, 36], [48, 36], [48, 15], [56, 15]], VL = [[104, 15], [118, 15], [118, 36], [111, 36], [111, 58]];
      for (let i = 1; i < AL.length; i++) thick(g, AL[i - 1][0], AL[i - 1][1], AL[i][0], AL[i][1], ART);
      for (let i = 1; i < VL.length; i++) thick(g, VL[i - 1][0], VL[i - 1][1], VL[i][0], VL[i][1], VEIN);
      g.r(69, 40, 6, 6, COL.red); g.r(109, 40, 6, 6, COL.na);
      g.line(72, 46, 72, 60, COL.cap); g.line(112, 46, 112, 60, COL.cap);
      const LOOP = [...AL, [102, 15], ...VL];
      for (let i = 0; i < 10; i++) {
        const p = (t * 0.16 + i / 10) % 1, [x, y] = along(LOOP, p);
        g.r(x - 1, y - 1, 3, 2, COL.rbc);
      }
    },
    // 4 · Diálisis peritoneal: llenado, permanencia y drenaje
    (g, t) => {
      g.clear(COL.bg);
      const cx = 66, cy = 66, ph = t % 12;
      let lvl, mode;
      if (ph < 2) { lvl = ph / 2; mode = 'in'; } else if (ph < 8.5) { lvl = 1 + 0.1 * ((ph - 2) / 6.5); mode = 'dwell'; } else { lvl = 1.1 * (1 - (ph - 8.5) / 3.5); mode = 'out'; }
      ell(g, cx, cy, 60, 44, SKIN); ell(g, cx, cy, 55, 39, '#7A2E40'); ell(g, cx, cy, 50, 34, COL.pink); ell(g, cx, cy, 47, 31, '#24102A');
      const top = Math.round(cy + 31 - lvl * 50);
      for (let y = Math.max(top, cy - 31); y <= cy + 31; y++) { const w = Math.round(47 * Math.sqrt(Math.max(0, 1 - ((y - cy) / 31) ** 2))); g.r(cx - w, y, 2 * w + 1, 1, FLUID); }
      const CAP = [];
      for (let k = 0; k < 9; k++) { const a = Math.PI * (0.95 + k * 0.13); CAP.push([Math.round(cx + Math.cos(a) * 52), Math.round(cy + Math.sin(a) * 36)]); }
      for (let k = 0; k < 5; k++) { const a = Math.PI * (0.1 + k * 0.17); CAP.push([Math.round(cx + Math.cos(a) * 52), Math.round(cy + Math.sin(a) * 36)]); }
      CAP.forEach(([x, y], k) => g.disk(x, y, 2, blink(t + k * 0.2, 1.5) ? COL.rbc : COL.rbcD));
      for (let i = 0; i < 10; i++) {
        const x = cx - 30 + rnd(i, 111) * 60, y = cy + 26 - rnd(i, 112) * 30;
        if (y >= top + 2) g.r(x + Math.sin(t * 2 + i) * 2, y, 2, 2, COL.gold);
      }
      if (lvl > 0.35) {
        for (let i = 0; i < 12; i++) {
          const p = (t * 0.3 + i / 12) % 1, [sx, sy] = CAP[(i * 5) % CAP.length];
          const ex = cx - 28 + rnd(i, 113) * 56, ey = Math.max(top + 3, cy + 22 - rnd(i, 114) * 26);
          g.r(lerp(sx, ex, p), lerp(sy, ey, p), 2, 2, i % 4 === 0 ? WATER : i % 3 === 0 ? COL.green : COL.white);
        }
      }
      const IN = [[144, 28], [144, 62], [122, 72], [98, 90]], OUT = [[98, 90], [122, 72], [144, 62], [144, 92]];
      for (let i = 1; i < IN.length; i++) thick(g, IN[i - 1][0], IN[i - 1][1], IN[i][0], IN[i][1], COL.cap);
      thick(g, 144, 62, 144, 92, COL.cap);
      frameBox(g, 132, 4, 24, 24); frameBox(g, 132, 92, 24, 24);
      const hin = Math.round(20 * (mode === 'in' ? 1 - lvl : 0.05));
      g.r(134, 26 - hin, 20, hin, '#5AB0E8');
      const hout = mode === 'out' ? Math.round(20 * (ph - 8.5) / 3.5) : 0;
      g.r(134, 114 - hout, 20, hout, '#C8C070');
      if (mode === 'in') for (let i = 0; i < 6; i++) { const [x, y] = along(IN, (t * 0.5 + i / 6) % 1); g.r(x - 1, y - 1, 2, 2, WATER); }
      if (mode === 'out') for (let i = 0; i < 6; i++) { const [x, y] = along(OUT, (t * 0.5 + i / 6) % 1); g.r(x - 1, y - 1, 2, 2, '#E8D25A'); }
    },
    // 5 · Trasplante: injerto en la fosa ilíaca e inmunosupresión
    (g, t) => {
      g.clear(COL.bg);
      thick(g, 82, 46, 120, 100, '#5A1A28'); thick(g, 74, 46, 128, 100, '#262C66');
      g.r(72, 0, 5, 46, VEIN); g.r(80, 0, 5, 46, ART);
      thick(g, 73, 46, 46, 100, VEIN); thick(g, 81, 46, 54, 100, ART);
      ell(g, 46, 18, 6, 10, COL.dead); ell(g, 114, 18, 6, 10, COL.dead);
      g.line(52, 18, 72, 20, '#262C66'); g.line(108, 18, 85, 20, '#5A1A28');
      ell(g, 82, 106, 15, 9, COL.pink); ell(g, 82, 107, 12, 6, '#8A7A30');
      ell(g, 30, 62, 11, 16, '#C24A5E'); ell(g, 39, 62, 3, 5, COL.bg);
      for (let i = 0; i < 4; i++) g.p(24 + (i % 2) * 6, 54 + i * 5, '#E46A7E');
      thick(g, 40, 59, 69, 64, ART); thick(g, 40, 65, 61, 74, VEIN);
      const URE = [[32, 78], [44, 96], [70, 104]];
      for (let i = 1; i < URE.length; i++) g.line(URE[i - 1][0], URE[i - 1][1], URE[i][0], URE[i][1], COL.urine);
      for (let i = 0; i < 4; i++) { const [x, y] = along(URE, (t * 0.3 + i / 4) % 1); g.r(x - 1, y - 1, 2, 2, COL.urine); }
      for (let i = 0; i < 4; i++) { const p = (t * 0.35 + i / 4) % 1, [x, y] = along([[82, 20], [82, 46], [69, 64], [42, 59]], p); g.r(x - 1, y - 1, 2, 2, COL.rbc); }
      const sh = Math.floor(t * 4) % 3;
      for (let a = 0; a < 36; a++) { if ((a + sh) % 3 === 0) continue; const an = a / 36 * Math.PI * 2; g.r(30 + Math.cos(an) * 23, 62 + Math.sin(an) * 23, 2, 1, COL.cyan); }
      [-0.7, 0, 0.7].forEach((an, k) => { const x = 30 + Math.cos(an) * 23, y = 62 + Math.sin(an) * 23; g.r(x - 2, y - 1, 3, 3, COL.white); g.r(x + 1, y - 1, 3, 3, [COL.gold, COL.green, COL.pink][k]); });
      for (let i = 0; i < 4; i++) {
        const p = Math.min(1, ((t * 0.2 + i / 4) % 1) / 0.75), y0 = 36 + i * 18, ang = (-0.6 + i * 0.4);
        const tx = 30 + Math.cos(ang) * 29, ty = 62 + Math.sin(ang) * 29;
        const x = lerp(158, tx, p), y = lerp(y0, ty, p);
        g.disk(x, y, 4, COL.violet); g.disk(x, y, 2, '#5A3A8A');
        if (p >= 1) xMark(g, t + i * 0.3, x, y, 3);
      }
    }
  ];
})();
