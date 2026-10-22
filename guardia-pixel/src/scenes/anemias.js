// ═══════════ Anemias: ciclo del hierro, hepcidina, ferropenia, megaloblastos y respuesta reticulocitaria
{
  const ENT = [11, 29, 47];
  const MAC = [30, 97];
  const PALE = '#FFB3BC';
  const anRbc = (g, x, y, r, pale) => { g.disk(x, y, r, COL.rbc); if (pale) g.disk(x, y, pale, PALE); };
  const anGate = (g, x, y, blocked, t) => {
    g.r(x - 3, y, 2, 5, COL.cyan); g.r(x + 2, y, 2, 5, COL.cyan);
    if (blocked) { g.r(x - 1, y + 1, 3, 3, COL.red); if (blink(t, 2)) g.ring(x, y + 2, 5, COL.red); }
  };
  // Escenario común: duodeno con enterocitos, vaso, hígado, macrófago y médula ósea
  const anIron = (g, t, o) => {
    g.clear(COL.bg);
    g.r(0, 0, 58, 12, '#4A3416');
    for (let i = 0; i < 8; i++) g.p(3 + rnd(i, 101) * 52, 2 + rnd(i, 102) * 8, '#8A6A2A');
    ENT.forEach((x) => {
      g.r(x - 8, 12, 16, 32, COL.pink); g.r(x - 8, 12, 16, 2, '#F8D2DE'); g.r(x - 8, 12, 1, 32, COL.brainD);
      g.disk(x, 34, 2, COL.brainD);
    });
    g.r(0, 50, 160, 2, COL.wall); g.r(0, 52, 160, 16, COL.lumen); g.r(0, 68, 160, 2, COL.wall);
    g.r(ENT[0] - 1, 44, 3, 6, COL.lumen); g.r(ENT[1] - 1, 44, 3, 6, COL.lumen); g.r(ENT[2] - 1, 44, 3, 6, COL.lumen);
    g.disk(126, 24, 15, COL.liver); g.disk(143, 30, 9, COL.liver);
    for (let i = 0; i < 10; i++) g.p(114 + rnd(i, 103) * 34, 13 + rnd(i, 104) * 24, COL.liverD);
    for (let i = 0; i < (o.block ? 9 : 5); i++) g.r(118 + rnd(i, 105) * 22, 18 + rnd(i, 106) * 14, 2, 2, COL.gold);
    if (o.block && blink(t, 1.5)) g.ring(128, 25, 18, COL.red);
    g.r(MAC[0] - 2, 70, 5, 14, '#4A2E5E');
    g.disk(MAC[0], MAC[1], 13, '#4A2E5E'); g.ring(MAC[0], MAC[1], 13, COL.violet); g.disk(MAC[0] - 5, MAC[1] + 4, 4, '#7A5AA0');
    g.r(124, 70, 5, 10, COL.lumen);
    g.r(104, 78, 56, 42, '#D9CBA8'); g.r(108, 82, 52, 38, '#5A1E30');
    g.disk(126, 98, 7, o.block ? '#5A3A4A' : '#9A3A5A'); g.disk(126, 98, 3, o.block ? COL.dead : COL.violet);
    ENT.forEach((x) => anGate(g, x, 45, o.block, t)); anGate(g, MAC[0], 74, o.block, t);
  };
  SCENES.anemias = [
    // 1. Ciclo normal del hierro
    (g, t) => {
      anIron(g, t, {});
      for (let i = 0; i < 6; i++) {
        const p = (t * 0.22 + i / 6) % 1, ex = ENT[i % 3], x0 = ex + (rnd(i, 107) - 0.5) * 10;
        const [x, y] = along([[x0, 2], [x0, 38], [ex, 46], [ex, 58]], p);
        g.r(x - 1, y - 1, 2, 2, COL.gold);
      }
      for (let i = 0; i < 7; i++) {
        const x = (t * 18 + i * 25) % 174 - 7, y = 56 + (i % 3) * 4;
        g.ring(x, y, 2, COL.cyan); g.r(x, y, 1, 1, COL.gold);
      }
      for (let i = 0; i < 3; i++) { const p = (t * 0.3 + i / 3) % 1; g.r(125, lerp(64, 94, p), 2, 2, COL.gold); }
      for (let i = 0; i < 3; i++) { const p = (t * 0.25 + i / 3) % 1, [x, y] = along([[134, 96], [152, 92], [152, 62]], p); anRbc(g, x, y, 2, 0); }
      { const p = (t * 0.2) % 1;
        if (p < 0.6) { const [x, y] = along([[60, 60], [44, 72], [MAC[0] + 4, MAC[1] - 2]], p / 0.6); g.disk(x, y, 3, COL.dead); }
        else { const q = (p - 0.6) / 0.4; g.r(MAC[0] - 1, lerp(MAC[1] - 6, 58, q), 2, 2, COL.gold); } }
      { const p = (t * 0.25) % 1, [x, y] = along([[100, 58], [112, 40], [120, 28]], p); g.r(x - 1, y - 1, 2, 2, COL.gold); }
    },
    // 2. Inflamación: IL-6 → hepcidina → ferroportina bloqueada
    (g, t) => {
      anIron(g, t, { block: true });
      ENT.forEach((x, k) => { for (let i = 0; i < 7; i++) g.r(x - 6 + rnd(i + k * 7, 108) * 11, 16 + rnd(i + k * 7, 109) * 24 + Math.sin(t * 3 + i) * 0.8, 2, 2, COL.gold); });
      for (let i = 0; i < 10; i++) { const a = i * 0.63, r = 3 + (i % 3) * 3; g.r(MAC[0] + Math.cos(a) * r, MAC[1] + Math.sin(a) * r * 0.9, 2, 2, COL.gold); }
      for (let i = 0; i < 5; i++) { const p = (t * 0.25 + i / 5) % 1, [x, y] = along([[0, 60], [96, 60], [116, 34]], p); g.r(x - 1, y - 1, 2, 2, COL.orange); }
      const tgt = [ENT[0], ENT[1], ENT[2], MAC[0]];
      for (let i = 0; i < 8; i++) {
        const p = (t * 0.2 + i / 8) % 1, tx = tgt[i % 4], ty = i % 4 === 3 ? 76 : 48;
        const [x, y] = along([[118, 38], [104, 56], [tx + 4, 56], [tx, ty]], p);
        g.r(x - 1, y - 1, 2, 2, COL.red);
      }
      for (let i = 0; i < 6; i++) { const x = (t * 18 + i * 29) % 174 - 7, y = 55 + (i % 3) * 5; g.ring(x, y, 2, COL.cyan); }
    },
    // 3. Ferropenia: eritrocitos pequeños y pálidos, depósitos vacíos
    (g, t) => {
      g.clear(COL.bg);
      frameBox(g, 3, 14, 74, 78); frameBox(g, 83, 14, 74, 78);
      g.r(4, 15, 72, 76, '#232046'); g.r(84, 15, 72, 76, '#232046');
      for (let i = 0; i < 8; i++) {
        const x = 14 + (i % 4) * 17 + Math.sin(t * 0.8 + i) * 1.5, y = 30 + Math.floor(i / 4) * 30 + Math.cos(t * 0.7 + i * 2) * 1.5;
        g.disk(x, y, 6, '#E8485C'); g.disk(x, y, 2, PALE);
      }
      for (let i = 0; i < 13; i++) {
        const x = 92 + (i % 5) * 14 + Math.sin(t * 0.8 + i) * 1.5, y = 26 + Math.floor(i / 5) * 22 + rnd(i, 110) * 6 + Math.cos(t * 0.6 + i) * 1.5;
        const r = 2 + Math.floor(rnd(i, 111) * 3);
        g.disk(x, y, r, '#F07A88'); g.disk(x, y, Math.max(1, r - 1), '#FFD0D6');
      }
      ell(g, 130, 82, 7, 2, '#F07A88'); ell(g, 130, 82, 5, 1, '#FFD0D6');
      g.r(6, 98, 68, 8, COL.frame); g.r(8, 100, 64, 4, COL.gold);
      g.r(86, 98, 68, 8, COL.frame); g.r(88, 100, 5, 4, blink(t, 1.5) ? COL.red : COL.goldD);
    },
    // 4. Déficit de B12 o folato: asincronía núcleo-citoplasma
    (g, t) => {
      g.clear(COL.bg);
      const pulse = Math.round(Math.sin(t * 2) * 1);
      g.disk(32, 54, 18 + pulse, '#C25A78'); g.disk(30, 52, 11, '#6A4AA0');
      for (let i = 0; i < 18; i++) g.p(21 + rnd(i, 112) * 18, 43 + rnd(i, 113) * 18, i % 2 ? '#B48CFF' : '#3A2A60');
      if (blink(t, 1)) { g.line(30, 33, 30, 72, COL.white); xMark(g, t, 52, 30, 3); }
      for (let y = 30; y <= 70; y++) {
        const a = y * 0.32 + t * 2, x1 = 80 + Math.sin(a) * 8, x2 = 80 - Math.sin(a) * 8;
        if (y % 4 === 0) { const gap = rnd(y, 114) < 0.45; g.line(Math.min(x1, x2), y, Math.max(x1, x2), y, gap ? COL.red : '#4A5AA0'); }
        g.p(x1, y, COL.cyan); g.p(x2, y, COL.green);
      }
      xMark(g, t + 0.25, 80, 24, 3);
      g.disk(130, 46, 13, '#E8E2F0');
      const L = [[122, 40], [128, 37], [135, 39], [138, 46], [133, 52], [124, 50]];
      for (let k = 0; k < L.length - 1; k++) g.line(L[k][0], L[k][1], L[k + 1][0], L[k + 1][1], '#6A4AA0');
      L.forEach(([x, y]) => g.disk(x, y, 2, COL.violet));
      for (let i = 0; i < 5; i++) {
        const x = (t * 14 + i * 36) % 190 - 12, y = 98 + (i % 2) * 6;
        ell(g, x, y, 8, 4, COL.rbc); ell(g, x, y, 3, 1, '#FF8A98');
      }
    },
    // 5. Respuesta reticulocitaria tras reponer hierro o B12
    (g, t) => {
      g.clear(COL.bg);
      const ph = (t % 10) / 10;
      const ret = ph < 0.4 ? lerp(0.1, 0.95, ph / 0.4) : lerp(0.95, 0.45, (ph - 0.4) / 0.6);
      const hb = lerp(0.2, 0.85, Math.min(1, Math.max(0, (ph - 0.15) / 0.85)));
      g.r(4, 22, 52, 78, '#D9CBA8'); g.r(8, 26, 44, 70, '#5A1E30');
      for (let i = 0; i < 7; i++) {
        const x = 16 + (i % 3) * 13 + (Math.floor(i / 3) % 2) * 6, y = 36 + Math.floor(i / 3) * 20, r = 5 + (blink(t + i * 0.3, 2) ? 1 : 0);
        g.disk(x, y, r, '#9A3A5A'); g.disk(x, y, 2, COL.violet);
      }
      for (let i = 0; i < 4; i++) { const p = (t * 0.45 + i / 4) % 1; g.r(18 + i * 7, lerp(2, 30, p), 3, 3, i % 2 ? COL.gold : COL.pink); }
      g.r(56, 48, 70, 2, COL.wall); g.r(56, 50, 70, 18, COL.lumen); g.r(56, 68, 70, 2, COL.wall);
      const n = Math.round(lerp(2, 9, ret));
      for (let i = 0; i < n; i++) {
        const x = 56 + ((t * 22 + i * (70 / n)) % 70), y = 54 + (i % 3) * 5;
        g.disk(x, y, 3, COL.rbc); g.p(x - 1, y - 1, COL.cyan); g.p(x + 1, y, COL.cyan); g.p(x, y + 1, COL.cyan);
      }
      gauge(g, 132, 30, 8, 62, ret, COL.cyan); gauge(g, 148, 30, 8, 62, hb, COL.rbc);
    }
  ];
}
