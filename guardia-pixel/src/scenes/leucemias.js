// ═══════════ Leucemias agudas y SMD: la médula ósea
SCENES.leucemias = (() => {
  const BONE = '#D9CBA8', BONED = '#B8A880', MARROW = '#2A1022', BLAST = '#4DB8FF', BLASTN = '#24508E';
  const SX = 114; // centro del sinusoide
  function marrow(g, o = {}) {
    g.clear(COL.bg);
    g.r(0, 6, 102, 108, MARROW);
    g.r(0, 0, 102, 6, BONE); g.r(0, 114, 102, 6, BONE);
    for (let i = 0; i < 16; i++) { g.p(2 + rnd(i, 201) * 98, 1 + rnd(i, 202) * 4, BONED); g.p(2 + rnd(i, 203) * 98, 115 + rnd(i, 204) * 4, BONED); }
    g.r(44, 6, 3, 6, BONE); g.r(82, 108, 3, 6, BONE);
    g.r(102, 0, 3, 120, COL.wall); g.r(123, 0, 3, 120, COL.wall); g.r(105, 0, 18, 120, COL.lumen);
    if (o.fat) [[50, 22], [88, 30], [40, 104], [92, 66], [12, 20]].forEach(([x, y]) => { g.disk(x, y, 4, '#1A0A14'); g.ring(x, y, 4, '#8A7A88'); });
  }
  // Sangre periférica: Hb, neutrófilos y plaquetas
  function blood(g, t, hb, ne, pl, alarm) {
    const G = [[131, hb, COL.rbc], [141, ne, COL.white], [151, pl, COL.plt]];
    G.forEach(([x, v, c]) => gauge(g, x, 24, 4, 74, v, c));
    g.r(131, 13, 5, 3, COL.rbc); g.p(133, 14, COL.rbcD);
    neutro(g, 143, 14);
    g.r(150, 12, 2, 2, COL.plt); g.r(153, 15, 2, 2, COL.plt);
    if (alarm && blink(t, 1.5)) G.forEach(([x]) => g.spr(ARROW_DN, x, 102, { X: COL.red }));
  }
  const rbc = (g, x, y) => { g.r(x - 2, y - 1, 4, 3, COL.rbc); g.r(x - 1, y, 2, 1, COL.rbcD); };
  const eryBlast = (g, x, y) => { g.disk(x, y, 2, '#B04A6A'); g.p(x, y, '#3A1030'); };
  const myelo = (g, x, y) => { g.disk(x, y, 3, '#D8C8E8'); g.disk(x, y, 1, COL.violet); };
  const blast = (g, x, y) => { g.disk(x, y, 4, BLAST); g.disk(x, y, 3, BLASTN); g.p(x - 1, y - 1, COL.white); };
  const hsc = (g, t, x, y) => { g.disk(x, y, 5, '#6A4AB0'); g.disk(x, y, 3, COL.violet); g.ring(x, y, 7 + (blink(t, 1.5) ? 1 : 0), COL.gold); };
  const mega = (g, x, y) => { g.disk(x, y, 7, '#8A6AC0'); g.disk(x - 2, y - 1, 3, '#4A2A80'); g.disk(x + 2, y + 1, 3, '#4A2A80'); };
  const sidero = (g, x, y) => { eryBlast(g, x, y); for (let a = 0; a < 8; a++) g.p(x + Math.round(Math.cos(a * 0.785) * 4), y + Math.round(Math.sin(a * 0.785) * 4), COL.gold); };
  const pelger = (g, x, y) => { g.disk(x, y, 3, '#ECE6F2'); g.r(x - 2, y - 1, 2, 2, COL.violet); g.r(x + 1, y - 1, 2, 2, COL.violet); g.p(x, y, COL.violet); };
  const microMega = (g, x, y) => { g.disk(x, y, 2, '#8A6AC0'); g.p(x, y, '#4A2A80'); };
  const jit = (i, s, x) => (x >= 104 ? (rnd(i, s) - 0.5) * 8 : 0);
  // LPA: promielocito con bastones de Auer
  function promielo(g, x, y, r, rods) {
    g.disk(x, y, r, '#E8C2D6');
    for (let k = 0; k < r * 2; k++) g.p(x + (rnd(k, 260) - 0.5) * r * 1.5, y + (rnd(k, 261) - 0.5) * r * 1.5, '#A03070');
    g.disk(x - Math.round(r / 3), y, Math.max(2, Math.round(r / 2)), '#6A3AA0');
    for (let k = 0; k < rods; k++) { const ax = x - r / 2 + k * 2, ay = y - r / 2 + (k % 2) * 2; g.line(ax, ay, ax + Math.round(r * 0.7), ay + Math.round(r * 0.6), COL.red); }
  }
  return [
    // 1. Médula sana
    (g, t) => {
      marrow(g, { fat: true });
      hsc(g, t, 24, 60); mega(g, 64, 94);
      const ER = [[24, 60], [38, 26], [104, 26], [SX, 30], [SX, 124]], MY = [[24, 60], [104, 60], [SX, 64], [SX, 124]];
      for (let i = 0; i < 7; i++) {
        const p = (t * 0.1 + i / 7) % 1, [x, y] = along(ER, p);
        (x < 102 && p < 0.25 ? eryBlast : rbc)(g, x + jit(i, 205, x), y);
        const q = (t * 0.1 + i / 7 + 0.07) % 1, [x2, y2] = along(MY, q);
        (q < 0.3 ? myelo : neutro)(g, x2 + jit(i, 206, x2), y2);
      }
      for (let i = 0; i < 8; i++) { const p = (t * 0.22 + i / 8) % 1, [x, y] = along([[70, 94], [104, 94], [SX, 98], [SX, 124]], p); g.r(x + jit(i, 207, x), y, 2, 2, COL.plt); }
      blood(g, t, 0.85, 0.8, 0.85, false);
    },
    // 2. Síndrome mielodisplásico: médula llena, células displásicas que mueren antes de salir
    (g, t) => {
      marrow(g);
      const FEAT = [[26, 30], [78, 30], [50, 76]];
      let k = 0;
      for (let y = 14; y <= 106; y += 10) for (let x = 8; x <= 96; x += 10) {
        k++;
        if (FEAT.some(([fx, fy]) => Math.abs(fx - x) < 8 && Math.abs(fy - y) < 8)) continue;
        const jx = x + (rnd(k, 220) - 0.5) * 3, jy = y + (rnd(k, 221) - 0.5) * 3, r = rnd(k, 222), life = (t * 0.25 + rnd(k, 223)) % 1;
        if (life > 0.8) { if (life < 0.9) g.ring(jx, jy, 3, COL.dead); continue; }
        if (r < 0.3) sidero(g, jx, jy); else if (r < 0.6) pelger(g, jx, jy); else if (r < 0.8) eryBlast(g, jx, jy); else microMega(g, jx, jy);
      }
      sidero(g, 26, 30); if (blink(t, 1.5)) g.ring(26, 30, 6, COL.gold);
      pelger(g, 78, 30); if (blink(t + 0.3, 1.5)) g.ring(78, 30, 5, COL.white);
      blast(g, 50, 76); blast(g, 14, 96);
      for (let i = 0; i < 3; i++) { const p = (t * 0.12 + i / 3) % 1, y = lerp(-4, 124, p), x = SX + (rnd(i, 224) - 0.5) * 8; (i === 1 ? pelger : rbc)(g, x, y); }
      for (let i = 0; i < 2; i++) g.r(SX - 3 + i * 5, lerp(-4, 124, (t * 0.2 + i / 2) % 1), 2, 2, COL.plt);
      blood(g, t, 0.3, 0.45, 0.4, true);
    },
    // 3. Leucemia aguda: los blastos llenan la médula y desplazan a las células normales
    (g, t) => {
      marrow(g);
      const pct = 20 + Math.floor((t * 10) % 66);
      let k = 0;
      for (let y = 14; y <= 106; y += 10) for (let x = 8; x <= 96; x += 10) {
        k++;
        const jx = x + (rnd(k, 230) - 0.5) * 3, jy = y + (rnd(k, 231) - 0.5) * 3;
        if (rnd(k, 232) < pct / 100 + 0.08) blast(g, jx, jy); else if (rnd(k, 233) < 0.5) eryBlast(g, jx, jy); else myelo(g, jx, jy);
      }
      frameBox(g, 4, 102, 22, 11); text3(g, pct + '%', 7, 105, BLAST);
      for (let i = 0; i < 5; i++) { const p = (t * 0.16 + i / 5) % 1; blast(g, SX + Math.round((rnd(i, 234) - 0.5) * 8), lerp(-4, 124, p)); }
      rbc(g, SX - 2, lerp(-4, 124, (t * 0.1 + 0.4) % 1));
      blood(g, t, 0.22, 0.15, 0.12, true);
    },
    // 4. LPA: bastones de Auer y CID; el ATRA hace madurar a los promielocitos
    (g, t) => {
      g.clear(COL.bg);
      g.r(0, 0, 160, 10, '#2A1430');
      const bl = Math.min(1, (t % 10) / 6);
      for (let i = 0; i < 5; i++) { const x = 124 + i * 7, rr = Math.round(2 + bl * 2 * rnd(i, 250) + bl); g.disk(x, 5, rr, COL.rbcD); g.disk(x, 5, Math.max(1, rr - 1), COL.rbc); }
      g.r(0, 10, 160, 2, COL.wall); g.r(0, 44, 160, 2, COL.wall); g.r(0, 12, 160, 32, COL.lumen);
      g.r(132, 10, 4, 2, COL.lumen);
      for (let i = 0; i < 3; i++) { const p = (t * 0.5 + i / 3) % 1; rbc(g, 134, Math.round(lerp(22, 6, p))); }
      // microtrombos: hebras de fibrina con plaquetas atrapadas
      const nf = 3 + Math.floor((t * 2) % 7);
      for (let i = 0; i < nf; i++) { const x = 62 + rnd(i, 251) * 40, y = 16 + rnd(i, 252) * 22; g.line(x, y, x + 10 * (rnd(i, 253) - 0.3), y + 8 * (rnd(i, 254) - 0.5), COL.cap); g.r(x, y, 2, 2, COL.plt); }
      for (let i = 0; i < 4; i++) { const x = (t * 20 + i * 40) % 170 - 6; if (x < 60 || x > 106) rbc(g, x, 20 + (i % 2) * 16); }
      for (let i = 0; i < 4; i++) { const x = Math.min(58 + (i % 3) * 3, (t * 16 + i * 14) % 70); g.r(x, 18 + i * 6, 2, 2, COL.plt); }
      promielo(g, 38, 28, 9, 5);
      for (let i = 0; i < 6; i++) { const p = (t * 0.4 + i / 6) % 1; g.r(lerp(48, 70, p), 28 + Math.sin(i * 2.1 + p * 5) * 10, 2, 2, COL.orange); }
      g.r(0, 54, 160, 1, COL.frame);
      // ATRA: maduración de promielocito a neutrófilo
      g.r(6, 84, 7, 6, COL.white); g.r(13, 84, 7, 6, COL.gold);
      for (let i = 0; i < 8; i++) { const p = (t * 0.35 + i / 8) % 1; g.r(lerp(20, 150, p), 76 + rnd(i, 255) * 24 + Math.sin(p * 8 + i) * 2, 2, 2, COL.gold); }
      for (let i = 0; i < 3; i++) {
        const p = (t * 0.12 + i / 3) % 1, x = Math.round(lerp(34, 146, p)), y = 88, st = Math.floor(p * 4);
        if (st === 0) promielo(g, x, y, 6, 3);
        else if (st === 1) { g.disk(x, y, 5, '#E8D8EE'); g.disk(x - 1, y, 3, '#6A3AA0'); }
        else if (st === 2) { g.disk(x, y, 4, '#F0E8F4'); g.r(x - 2, y - 2, 4, 1, COL.violet); g.r(x - 3, y - 1, 1, 3, COL.violet); g.r(x + 2, y - 1, 1, 3, COL.violet); }
        else { g.disk(x, y, 4, COL.white); g.r(x - 3, y - 1, 2, 2, COL.violet); g.r(x, y + 1, 2, 2, COL.violet); g.r(x + 2, y - 2, 2, 2, COL.violet); }
      }
    },
    // 5. Lisis tumoral: los blastos se rompen y liberan K, fósforo y ácido úrico
    (g, t) => {
      g.clear(COL.bg);
      frameBox(g, 4, 1, 12, 14); g.r(6, 3, 8, 10, '#2E6A8A'); g.r(9, 15, 2, 5, COL.cyan);
      for (let i = 0; i < 5; i++) { const p = (t * 0.6 + i / 5) % 1; g.r(lerp(10, 18 + i * 10, p), lerp(20, 50 + (i % 3) * 14, p), 1, 2, COL.cyan); }
      const B = [[16, 34], [36, 30], [56, 36], [24, 54], [46, 56], [14, 74], [34, 76], [56, 72]];
      B.forEach(([x, y], i) => {
        const ph = (t * 0.35 + rnd(i, 240)) % 1;
        if (ph < 0.55) blast(g, x, y);
        else if (ph < 0.75) { const q = (ph - 0.55) / 0.2; g.ring(x, y, Math.round(lerp(4, 9, q)), BLAST); for (let k = 0; k < 6; k++) { const a = k * 1.05 + i; g.r(x + Math.cos(a) * lerp(3, 10, q), y + Math.sin(a) * lerp(3, 10, q), 2, 2, k % 2 ? BLAST : BLASTN); } }
      });
      g.r(66, 46, 50, 2, COL.wall); g.r(66, 56, 50, 2, COL.wall); g.r(66, 48, 50, 8, COL.lumen);
      const ION = [COL.orange, COL.violet, COL.gold];
      for (let i = 0; i < 14; i++) {
        const p = (t * 0.22 + i / 14) % 1, [x, y] = along([[20 + rnd(i, 241) * 40, 30 + rnd(i, 242) * 46], [68, 51], [116, 51], [124 + rnd(i, 243) * 12, 34 + rnd(i, 244) * 32]], p);
        g.r(x, y, 2, 2, ION[i % 3]);
      }
      ell(g, 134, 50, 17, 27, '#A0405A'); ell(g, 137, 50, 10, 18, '#7A2A40'); ell(g, 117, 50, 4, 7, COL.bg);
      const nc = 3 + Math.floor((t * 3) % 16);
      for (let k = 0; k < nc; k++) { const x = 128 + rnd(k, 245) * 16, y = 34 + rnd(k, 246) * 32; g.line(x, y, x + 3, y - 2, k % 2 ? COL.white : COL.gold); }
      if (blink(t, 1.2)) g.ring(136, 50, 24, COL.red);
      ecgStrip(g, 'peakedT', t);
    }
  ];
})();
