// ═══════════ ERGE: barrera antirreflujo, esofagitis (Los Ángeles), Barrett y tratamiento
// Todo vive dentro de una función para no chocar con nombres de otros archivos de escenas.
SCENES.erge = (() => {
  const GL = '#2A1430', SQ = '#F2C9D2', SQD = '#D9A3B0', SAL = '#E8785A', SALD = '#B04A36', WRAP = '#C0566E';

  // Estómago bajo el diafragma, con jugo gástrico en el fondo
  function stomach(g) {
    ell(g, 104, 92, 50, 25, COL.pink); ell(g, 104, 92, 46, 21, GL);
    ell(g, 104, 106, 34, 5, '#4A1428');
  }
  // Esófago vertical: paredes rosas y luz oscura
  function tube(g, y0, y1) {
    g.r(68, y0, 4, y1 - y0, COL.pink); g.r(88, y0, 4, y1 - y0, COL.pink); g.r(72, y0, 16, y1 - y0, GL);
  }
  // EEI: banda muscular gruesa (x 64–96, 12 px de alto) que se abre de 0 a 1
  function les(g, y, open) {
    const h = Math.round(lerp(0, 6, clamp01(open)));
    g.r(64, y, 16 - h, 12, COL.wall); g.r(80 + h, y, 16 - h, 12, COL.wall);
    for (let k = 1; k < 12; k += 3) { g.r(64, y + k, 16 - h, 1, COL.myo); g.r(80 + h, y + k, 16 - h, 1, COL.myo); }
    if (h > 0) g.r(80 - h, y, 2 * h, 12, GL);
  }
  // Diafragma con hiato entre hl y hr
  function diaphragm(g, y, hl, hr) {
    g.r(0, y, hl, 6, COL.myo); g.r(hr, y, 160 - hr, 6, COL.myo);
    for (let x = 3; x < hl - 3; x += 5) g.r(x, y + 1, 1, 4, COL.wall);
    for (let x = hr + 3; x < 158; x += 5) g.r(x, y + 1, 1, 4, COL.wall);
    g.disk(hl, y + 3, 3, COL.myo); g.disk(hr, y + 3, 3, COL.myo);
  }
  // Ácido (H⁺) que se mueve dentro del estómago
  function acidSt(g, t, n) {
    for (let i = 0; i < n; i++) {
      const a = rnd(i, 101) * 6.283 + t * (0.4 + rnd(i, 102) * 0.5) * (i % 2 ? 1 : -1);
      const rr = 0.25 + 0.65 * tri(rnd(i, 103) * 2 + t * 0.15, 1);
      g.r(104 + Math.cos(a) * 40 * rr, 93 + Math.sin(a) * 15 * rr, 2, 2, COL.red);
    }
  }
  // Sector de anillo (erosiones vistas por endoscopia)
  function sector(g, cx, cy, r0, r1, a0, a1, c) {
    for (let y = -r1; y <= r1; y++) for (let x = -r1; x <= r1; x++) {
      const d = Math.hypot(x, y); if (d < r0 || d > r1) continue;
      let a = Math.atan2(y, x); while (a < a0) a += 2 * Math.PI;
      if (a <= a1) g.p(cx + x, cy + y, c);
    }
  }
  // Erosiones por grado: [ángulo inicial, amplitud, radio interno, radio externo]
  const LA = [
    [[-1.75, 0.3, 9, 13]],
    [[-2.35, 0.28, 7, 16], [0.45, 0.28, 7, 16]],
    [[-3.1, 3.1, 7, 16]],
    [[-2.7, 5.6, 7, 16]]
  ];

  return [
    // 1 · Barrera competente: el bolo pasa, el EEI se cierra y el ácido se queda abajo
    (g, t) => {
      g.clear(COL.bg);
      stomach(g); diaphragm(g, 52, 62, 98); tube(g, 0, 46); tube(g, 58, 74);
      const p = (t % 4) / 4;
      const open = p < 0.42 ? 0 : p < 0.5 ? (p - 0.42) / 0.08 : p < 0.7 ? 1 : p < 0.78 ? 1 - (p - 0.7) / 0.08 : 0;
      les(g, 46, open); acidSt(g, t, 14);
      let by = null;
      if (p < 0.42) by = lerp(-8, 38, p / 0.42); else if (p < 0.5) by = 38; else if (p < 0.72) by = lerp(38, 82, (p - 0.5) / 0.22);
      if (by !== null) { g.r(76, by, 8, 7, COL.goldD); g.r(77, by + 1, 6, 5, COL.gold); }
    },
    // 2 · Relajación transitoria + hernia hiatal: el ácido sube al esófago
    (g, t) => {
      g.clear(COL.bg);
      stomach(g); diaphragm(g, 52, 54, 106);
      tube(g, 44, 74);
      ell(g, 80, 42, 21, 10, COL.pink); ell(g, 80, 42, 17, 7, GL);
      tube(g, 0, 20);
      const q = (t % 3) / 3, open = q < 0.12 ? q / 0.12 : q < 0.6 ? 1 : q < 0.7 ? 1 - (q - 0.6) / 0.1 : 0;
      les(g, 20, open); acidSt(g, t, 10);
      for (let i = 0; i < 12; i++) {
        const pp = (t * 0.3 + i / 12) % 1, x = 78 + (rnd(i, 104) - 0.5) * 10;
        let y = lerp(98, -4, pp);
        if (y < 33 && y > 16 && open < 0.5) y = 34 + rnd(i, 105) * 6;
        g.r(x, y, 2, 2, COL.red);
      }
      if (open > 0.5) for (let k = 0; k < 4; k++) g.r(k % 2 ? 87 : 72, 2 + k * 4, 1, 3, COL.red);
    },
    // 3 · Los Ángeles A–D: cortes del esófago con erosiones cada vez más extensas
    (g, t) => {
      g.clear(COL.bg);
      const cur = Math.floor(t / 1.5) % 4;
      [22, 61, 100, 139].forEach((cx, k) => {
        const cy = 48;
        g.disk(cx, cy, 17, COL.pink);
        for (let j = 0; j < 8; j++) { const an = j * 0.785 + 0.39; g.line(cx + Math.cos(an) * 8, cy + Math.sin(an) * 8, cx + Math.cos(an) * 16, cy + Math.sin(an) * 16, SQD); }
        const hot = blink(t + k * 0.3, 1.5) ? COL.red : '#C8324A';
        LA[k].forEach(([a0, span, r0, r1]) => sector(g, cx, cy, r0, r1, a0, a0 + span, hot));
        g.disk(cx, cy, 6, GL);
        if (k === cur) g.ring(cx, cy, 19, COL.gold);
        gauge(g, cx - 4, 90, 8, 24, [0.12, 0.3, 0.55, 0.9][k], COL.red);
        for (let i = 0; i < 2; i++) { const p = (t * 0.6 + i / 2 + k * 0.25) % 1; g.r(cx + (i ? 2 : -3), lerp(2, 40, p), 1, 2, COL.red); }
      });
    },
    // 4 · Barrett: lengüetas color salmón con células caliciformes suben desde la línea Z
    (g, t) => {
      g.clear(COL.bg);
      g.r(22, 0, 116, 120, COL.myo); g.r(28, 0, 104, 120, SQ);
      for (let y = 2; y < 90; y += 5) for (let x = 28 + (Math.floor(y / 5) % 2) * 4; x < 130; x += 8) g.r(x, y, 6, 1, SQD);
      g.r(28, 92, 104, 28, SAL);
      for (let i = 0; i < 26; i++) g.r(30 + rnd(i, 106) * 98, 96 + rnd(i, 107) * 22, 2, 1, SALD);
      for (let x = 28; x < 132; x++) g.p(x, 90 + tri(x, 3), SALD);
      const k = Math.min(1, (t % 10) / 3), H = lerp(20, 46, k);
      [52, 80, 108].forEach((cx, j) => {
        const h = Math.round(H - (j === 1 ? 0 : 8)), top = 92 - h;
        g.r(cx - 8, top + 7, 17, h - 5, SAL); g.disk(cx, top + 7, 8, SAL);
        for (let m = 0; m < 5; m++) {
          const gy = 88 - m * 9, gx = cx + (m % 2 ? 3 : -3);
          if (gy - 3 > top + 2) { g.disk(gx, gy, 2, COL.white); g.p(gx, gy, COL.cyan); }
        }
      });
      for (let i = 0; i < 7; i++) { const p = (t * 0.5 + i / 7) % 1; g.r(34 + rnd(i, 108) * 92, lerp(-2, 40, p), 2, 2, COL.red); }
    },
    // 5 · Tratamiento: IBP bloquea la bomba (izquierda) y funduplicatura de Nissen (derecha)
    (g, t) => {
      g.clear(COL.bg);
      frameBox(g, 2, 2, 76, 116); frameBox(g, 82, 2, 76, 116);
      g.r(3, 3, 74, 26, GL);
      g.disk(40, 72, 30, '#6B2A45'); g.ring(40, 72, 30, COL.pink, 2);
      g.disk(26, 86, 6, COL.violet);
      g.r(32, 36, 16, 8, COL.goldD); g.r(34, 38, 12, 4, COL.gold); xMark(g, t, 40, 40, 5);
      for (let i = 0; i < 3; i++) { const p = (t * 0.25 + i / 3) % 1; g.r(14 + i * 24, lerp(26, 6, p), 2, 2, COL.red); }
      for (let i = 0; i < 4; i++) {
        const p = (t * 0.3 + i / 4) % 1, x = lerp(14 + i * 16, 40, p), y = lerp(112, 48, p);
        g.r(x - 3, y - 1, 3, 3, COL.white); g.r(x, y - 1, 3, 3, COL.cyan);
      }
      ell(g, 120, 94, 32, 18, COL.pink); ell(g, 120, 94, 28, 14, GL);
      g.r(112, 3, 4, 78, COL.pink); g.r(124, 3, 4, 78, COL.pink); g.r(116, 3, 8, 82, GL);
      g.r(96, 56, 10, 26, WRAP);
      g.disk(102, 52, 9, WRAP); g.disk(138, 52, 9, WRAP); g.r(102, 43, 36, 19, WRAP);
      for (let y = 46; y < 60; y += 4) g.r(96, y, 50, 1, COL.wall);
      for (let y = 45; y < 61; y += 4) g.r(119, y, 2, 2, COL.white);
      for (let i = 0; i < 8; i++) {
        const a = rnd(i, 109) * 6.283 + t * (0.5 + rnd(i, 110) * 0.4) * (i % 2 ? 1 : -1);
        g.r(120 + Math.cos(a) * 20, 96 + Math.sin(a) * 8, 2, 2, COL.red);
      }
    }
  ];
})();
