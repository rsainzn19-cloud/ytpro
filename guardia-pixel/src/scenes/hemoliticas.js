// ═══════════ Anemias hemolíticas: intravascular, extravascular, esferocitos, G6PD y Coombs
{
  const hmRbc = (g, x, y, r) => { g.disk(x, y, r, COL.rbc); g.disk(x, y, Math.max(1, r - 2), '#FF8A98'); };
  const hmSph = (g, x, y) => { g.disk(x, y, 3, '#C2283A'); g.p(x - 1, y - 1, '#E04A5A'); };
  const hmY = (g, x, y, c) => { g.line(x, y, x, y + 3, c); g.line(x, y, x - 2, y - 2, c); g.line(x, y, x + 2, y - 2, c); };
  SCENES.hemoliticas = [
    // 1. Intravascular: ruptura en el vaso, haptoglobina se agota, hemoglobinuria
    (g, t) => {
      g.clear(COL.bg);
      const ph = (t % 10) / 10;
      g.r(0, 10, 160, 2, COL.wall); g.r(0, 12, 160, 36, COL.lumen); g.r(0, 48, 160, 2, COL.wall);
      for (let i = 0; i < 10; i++) {
        const x = (t * 24 + i * 17.3) % 176 - 8, y = 18 + Math.floor(rnd(i, 301) * 24);
        if (i % 3 === 0 && x > 60) {
          if (x < 74) { g.ring(x, y, 3 + Math.round((x - 60) / 4), COL.rbc); }
          else for (let k = 0; k < 4; k++) g.r(x + (rnd(k + i, 302) - 0.5) * 14, y + (rnd(k + i, 303) - 0.5) * 10, 2, 2, '#A0303C');
        } else hmRbc(g, x, y, 3);
      }
      const hp = Math.max(0, Math.round(5 * (1 - ph * 2)));
      for (let i = 0; i < hp; i++) { const x = 8 + ((t * 10 + i * 22) % 150), y = 16 + (i % 3) * 12; g.ring(x, y, 2, COL.cyan); }
      g.disk(30, 86, 14, '#A0405A'); g.disk(43, 86, 5, COL.bg); g.r(40, 84, 4, 4, '#E07A8A');
      g.line(44, 88, 72, 100, COL.tub);
      const nf = ph > 0.2 ? 5 : 2;
      for (let i = 0; i < nf; i++) { const p = (t * 0.4 + i / 5) % 1, [x, y] = along([[40, 50], [32, 72], [44, 88], [72, 100]], p); g.r(x - 1, y - 1, 2, 2, '#A0303C'); }
      const uc = ph < 0.15 ? COL.urine : ph < 0.35 ? '#C27A2A' : '#5A2A14';
      g.r(72, 62, 1, 46, COL.cap); g.r(84, 62, 1, 46, COL.cap); g.r(72, 108, 13, 1, COL.cap); g.r(73, 72, 11, 36, uc);
      gauge(g, 118, 62, 8, 40, Math.max(0.05, 0.6 - ph), COL.cyan); g.spr(ARROW_DN, 129, 64, { X: COL.red });
      gauge(g, 140, 62, 8, 40, lerp(0.2, 0.95, ph), COL.gold); g.spr(ARROW_UP, 151, 64, { X: COL.gold });
    },
    // 2. Extravascular: macrófagos del bazo, bilirrubina indirecta, ictericia
    (g, t) => {
      g.clear(COL.bg);
      const ph = (t % 10) / 10, gr = 1 + ph * 0.2;
      g.r(0, 54, 22, 2, COL.wall); g.r(0, 56, 22, 8, COL.lumen); g.r(0, 64, 22, 2, COL.wall);
      ell(g, 52, 60, Math.round(32 * gr), Math.round(24 * gr), COL.pink);
      ell(g, 52, 60, Math.round(30 * gr), Math.round(22 * gr), '#7A2A4A');
      const MC = [[36, 50], [70, 50], [52, 76]];
      MC.forEach(([x, y], k) => { g.disk(x, y, 6 + (blink(t + k * 0.4, 1.5) ? 1 : 0), '#5A3A8A'); g.ring(x, y, 6, COL.violet); });
      for (let i = 0; i < 6; i++) {
        const p = (t * 0.3 + i / 6) % 1, [mx, my] = MC[i % 3], [x, y] = along([[0, 60], [20, 60], [mx, my]], p);
        const r = p > 0.75 ? Math.max(0, Math.round(3 * (1 - (p - 0.75) / 0.25))) : 3;
        if (r) hmRbc(g, x, y, r);
      }
      g.disk(128, 24, 12, COL.liver); g.disk(141, 28, 8, COL.liver);
      for (let i = 0; i < 6; i++) { const p = (t * 0.3 + i / 6) % 1, [x, y] = along([[84, 56], [116, 34], [126, 26], [128, 82]], p); g.r(x - 1, y - 1, 3, 3, COL.orange); }
      const sc = ph < 0.35 ? COL.white : ph < 0.7 ? '#F0E6A0' : '#E8D25A';
      ell(g, 128, 94, 16, 8, sc); g.disk(128, 94, 5, '#5A3A22'); g.disk(128, 94, 2, '#0B0B10');
    },
    // 3. Esferocitosis: el esferocito no se deforma y queda atrapado en el cordón esplénico
    (g, t) => {
      g.clear('#3A1626');
      g.r(84, 0, 76, 120, COL.lumen);
      for (let y = 2; y < 120; y += 10) g.r(80, y, 4, 7, COL.endo);
      [22, 98].forEach((ly, k) => {
        for (let i = 0; i < 3; i++) {
          const x = (t * 22 + i * 58 + k * 29) % 174 - 8;
          if (x > 72 && x < 90) { ell(g, x, ly, 1, 4, COL.rbc); }
          else hmRbc(g, x, ly, 4);
        }
      });
      for (let i = 0; i < 9; i++) {
        const p = (t * 0.25 + i / 9) % 1, y = 50 + (i % 4) * 5;
        const stuck = 70 - (i % 3) * 5;
        const x = Math.min(lerp(4, 100, p), stuck) + (p * 100 > stuck ? Math.sin(t * 6 + i) * 0.8 : 0);
        hmSph(g, x, y);
      }
      const mx = 44 + Math.round(Math.sin(t * 1.2) * 3);
      g.disk(mx, 60, 9, '#5A3A8A'); g.ring(mx, 60, 9, COL.violet); g.r(mx + 8, 56, 6, 3, '#5A3A8A');
    },
    // 4. G6PD: oxidantes, cuerpos de Heinz y célula mordida
    (g, t) => {
      g.clear(COL.bg);
      const ph = (t % 10) / 10, k = clamp01(0.45 + ph);
      ell(g, 10, 22, 6, 4, COL.green); ell(g, 24, 28, 6, 4, COL.green); g.r(6, 34, 6, 5, COL.white); g.r(12, 34, 6, 5, COL.orange);
      g.disk(70, 60, 30, '#C23A4E'); g.ring(70, 60, 30, COL.rbc);
      for (let i = 0; i < 8; i++) { const p = (t * 0.35 + i / 8) % 1, [x, y] = along([[20, 32], [52 + rnd(i, 311) * 20, 46 + rnd(i, 312) * 24]], p); g.r(x - 1, y - 1, 2, 2, COL.orange); }
      for (let i = 0; i < 2; i++) { const a = t * 1.5 + i * 3; g.r(70 + Math.cos(a) * 8, 52 + Math.sin(a) * 4, 2, 2, COL.cyan); }
      const nh = 3 + Math.floor(ph * 8);
      for (let i = 0; i < nh; i++) { const a = 1.6 + i * 0.26, r = 25; g.disk(70 + Math.cos(a) * r, 60 + Math.sin(a) * r, 2, '#3A1A4A'); }
      g.disk(100, 60, Math.round(k * 9), COL.bg);
      const mx = Math.round(lerp(146, 114, k));
      g.disk(mx, 60, 12, '#5A3A8A'); g.ring(mx, 60, 12, COL.violet); g.disk(mx - 4, 64, 3, '#8A6AC0');
    },
    // 5. Coombs directo: la antiglobulina une eritrocitos recubiertos y los aglutina
    (g, t) => {
      g.clear(COL.bg);
      const ph = (t % 8) / 8, k = clamp01(ph * 2);
      frameBox(g, 3, 14, 74, 84); frameBox(g, 83, 14, 74, 84);
      g.r(4, 15, 72, 82, '#1E2E5A'); g.r(84, 15, 72, 82, '#1E2E5A');
      const P = [[18, 32], [52, 30], [30, 56], [62, 60], [16, 80], [46, 84]];
      const C = [[-7, -6], [6, -6], [0, 0], [-7, 7], [7, 6], [0, 12]];
      P.forEach(([x, y], i) => {
        const lx = x + Math.sin(t + i) * 1.5, ly = y + Math.cos(t * 0.8 + i) * 1.5;
        hmRbc(g, lx, ly, 5); hmY(g, lx - 3, ly - 7, COL.white); hmY(g, lx + 4, ly - 6, COL.white);
        const rx = lerp(x + 80, 120 + C[i][0] * 1.4, k), ry = lerp(y, 58 + C[i][1] * 1.4, k);
        hmRbc(g, rx, ry, 5); hmY(g, rx - 3, ry - 7, COL.white);
      });
      if (k > 0.7) for (let i = 0; i < 5; i++) { const [a, b] = [C[i], C[i + 1]]; g.line(120 + a[0] * 1.4, 58 + a[1] * 1.4, 120 + b[0] * 1.4, 58 + b[1] * 1.4, COL.gold); }
      g.r(140, 0, 8, 12, COL.cap); g.r(142, 12, 4, 4, COL.cap);
      for (let i = 0; i < 4; i++) { const p = (t * 0.5 + i / 4) % 1; hmY(g, lerp(144, 110 + i * 8, p), lerp(18, 50 + (i % 2) * 14, p), COL.gold); }
    }
  ];
}
