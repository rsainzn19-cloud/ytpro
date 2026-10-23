// ═══════════ Diarrea: osmótica, secretora, celiaca, esteatorrea y C. difficile
const DZ_LUM = '#24183A', DZ_LP = '#3B1626', DZ_BRUSH = '#F4B8C8';
// Corte de intestino: luz arriba, enterocitos en medio, lámina propia con capilar abajo
function dzGut(g, t, o = {}) {
  g.clear(COL.bg);
  g.r(0, 0, 160, 60, DZ_LUM);
  g.r(0, 80, 160, 40, DZ_LP);
  for (let x = 0; x < 160; x += 10) {
    const hot = o.hot && x >= (o.hotFrom || 0) && blink(t + x * 0.03, 2);
    g.r(x, 60, 9, 20, hot ? '#FF7A8A' : COL.pink);
    g.r(x, 60, 9, 2, DZ_BRUSH);
    g.disk(x + 4, 73, 1, COL.brainD);
  }
  g.r(0, 99, 160, 2, COL.wall); g.r(0, 101, 160, 5, COL.rbc); g.r(0, 106, 160, 2, COL.wall);
  for (let i = 0; i < 6; i++) { const x = (t * 18 + i * 29) % 174 - 7; g.r(x, 102, 4, 3, COL.rbcD); }
}
const dzDrop = (g, x, y, c) => g.r(x, y, 2, 2, c || COL.cyan);

SCENES.diarrea = [
  // 1. Osmótica: el soluto no absorbido se queda en la luz y jala agua
  (g, t) => {
    dzGut(g, t);
    for (let i = 0; i < 16; i++) {
      const p = (t * 0.3 + i / 16) % 1, x = 4 + ((i * 37) % 150), y = lerp(100, 8 + rnd(i, 205) * 44, p);
      dzDrop(g, x + Math.sin(p * 8 + i) * 2 + (y < 60 ? (60 - y) * 0.3 : 0), y);
    }
    for (let i = 0; i < 12; i++) {
      const x = (rnd(i, 201) * 160 + t * (6 + rnd(i, 202) * 6)) % 156;
      const y = 6 + tri(rnd(i, 203) * 100 + t * (8 + rnd(i, 204) * 8), 48);
      g.r(x, y, 3, 3, COL.gold); g.p(x, y, '#FFE7A6');
    }
  },
  // 2. Secretora: la toxina abre canales de cloro; sale Cl⁻ con agua aunque no haya comida
  (g, t) => {
    dzGut(g, t, { hot: true });
    for (let i = 0; i < 20; i++) {
      const p = (t * 0.4 + i / 20) % 1, x = 2 + ((i * 29) % 150), y = lerp(72, 6 + rnd(i, 206) * 46, p);
      dzDrop(g, x + p * 8, y, i % 3 === 0 ? COL.green : COL.cyan);
    }
    [14, 44, 74, 104, 134].forEach((x, k) => {
      const y = Math.round(lerp(2, 56, clamp01(((t + k * 0.7) % 6) / 2)));
      g.r(x, y, 4, 4, COL.violet); g.p(x + 1, y + 1, COL.white);
    });
    g.disk(147, 11, 6, COL.gold); g.disk(150, 9, 5, DZ_LUM);
  },
  // 3. Celiaca: vellosidad sana (izquierda) vs atrofia con criptas largas, linfocitos y anti-tTG (derecha)
  (g, t) => {
    g.clear(DZ_LUM);
    g.r(0, 94, 160, 26, DZ_LP);
    for (let k = 0; k < 4; k++) {
      const x = 4 + k * 18;
      g.r(x, 30, 12, 66, COL.pink); g.disk(x + 6, 30, 6, COL.pink);
      g.r(x + 5, 32, 2, 60, COL.rbc);
      g.r(x, 32, 1, 62, DZ_BRUSH); g.r(x + 11, 32, 1, 62, DZ_BRUSH);
      g.r(x + 13, 96, 4, 7, DZ_LUM);
    }
    for (let i = 0; i < 12; i++) {
      const k = i % 4, cx = 10 + k * 18, p = (t * 0.45 + i / 12) % 1, side = i % 2 ? -1 : 1;
      if (p < 0.75) g.r(lerp(cx + side * 10, cx + side * 5, p / 0.75) - 1, 36 + ((i * 13) % 52), 2, 2, COL.white);
    }
    g.r(78, 0, 2, 120, COL.frame);
    g.r(80, 70, 80, 14, COL.pink); g.r(80, 70, 80, 1, DZ_BRUSH);
    for (let x = 86; x < 160; x += 14) { g.r(x, 84, 6, 24, COL.pink); g.r(x + 2, 84, 2, 22, DZ_LUM); }
    for (let i = 0; i < 14; i++) g.disk(82 + rnd(i, 207) * 76, 73 + Math.round(rnd(i, 208) * 8), 1, blink(t + i * 0.2, 1.5) ? COL.violet : '#8A6AD0');
    for (let i = 0; i < 7; i++) {
      const p = (t * 0.3 + i / 7) % 1, x = 84 + ((i * 23) % 70), y = Math.round(lerp(2, 64, p));
      g.r(x, y, 2, 4, COL.gold); g.p(x + 2, y + 1, COL.goldD); g.p(x - 1, y + 2, COL.goldD);
    }
    for (let k = 0; k < 5; k++) antiY(g, 93 + k * 14, 111 + Math.round(Math.sin(t * 2 + k) * 2), COL.cyan);
  },
  // 4. Esteatorrea: sin lipasa (o sin mucosa) la grasa no se absorbe y las heces flotan
  (g, t) => {
    g.clear(COL.bg);
    g.disk(16, 16, 9, COL.pink); g.disk(30, 13, 8, COL.pink); g.disk(42, 17, 6, COL.pink);
    for (let i = 0; i < 9; i++) g.p(9 + rnd(i, 209) * 38, 9 + rnd(i, 210) * 12, COL.brainD);
    g.r(27, 22, 3, 22, COL.tub);
    g.line(24, 29, 32, 37, COL.red); g.line(32, 29, 24, 37, COL.red); g.line(25, 29, 33, 37, COL.red); g.line(33, 29, 25, 37, COL.red);
    g.r(0, 44, 130, 2, COL.wall); g.r(0, 46, 130, 28, DZ_LUM); g.r(0, 74, 130, 2, COL.wall);
    for (let x = 0; x < 130; x += 6) g.r(x, 76, 5, 4, COL.pink);
    for (let i = 0; i < 12; i++) {
      const x = (t * 18 + i * 13) % 150 - 6, y = 51 + ((i * 7) % 19);
      if (x < 126) { g.ring(Math.round(x), y, 2, COL.fat); g.p(x - 1, y - 1, '#FFE7A6'); }
    }
    for (let i = 0; i < 3; i++) { const p = (t * 0.5 + i / 3) % 1; g.ring(Math.round(130 + p * 8), Math.round(lerp(62, 86, p)), 2, COL.fat); }
    ell(g, 144, 98, 15, 12, COL.cap); ell(g, 144, 96, 12, 8, '#2E5A9A'); g.r(136, 108, 16, 6, COL.cap);
    const bob = Math.round(Math.sin(t * 2));
    ell(g, 144, 92 + bob, 8, 2, COL.cast); g.r(139, 91 + bob, 3, 1, COL.fat); g.r(146, 91 + bob, 2, 1, '#FFE7A6');
    for (let i = 0; i < 4; i++) if (blink(t + i * 0.3, 2)) g.p(136 + i * 5, 96 + (i % 2), COL.gold);
  },
  // 5. C. difficile: el antibiótico barre la flora; la bacteria libera toxinas A y B y forma seudomembranas
  (g, t) => {
    dzGut(g, t, { hot: true, hotFrom: 60 });
    g.r(6, 5, 7, 6, COL.white); g.r(13, 5, 7, 6, COL.red); g.r(7, 6, 5, 1, '#FFFFFF');
    for (let k = 0; k < 5; k++) g.r(4 + k * 10, 24 + (k % 2) * 10, 5, 2, COL.dead);
    xMark(g, t, 26, 30, 5);
    const n = Math.min(16, 6 + Math.floor((t % 8) * 1.5));
    for (let i = 0; i < n; i++) {
      const x = 62 + rnd(i, 211) * 88 + Math.sin(t * 2 + i) * 2, y = 4 + rnd(i, 212) * 18;
      g.r(x, y, 6, 2, COL.orange); g.r(x + 5, y - 1, 2, 4, COL.white);
    }
    for (let i = 0; i < 12; i++) { const p = (t * 0.5 + i / 12) % 1; g.r(66 + ((i * 17) % 88), lerp(26, 50, p), 2, 2, i % 2 ? COL.red : '#FF9B9B'); }
    [80, 112, 144].forEach((x) => { g.r(x - 9, 54, 18, 6, '#E8E2A0'); g.r(x - 6, 52, 12, 2, '#E8E2A0'); g.p(x - 4, 55, '#B9B070'); g.p(x + 3, 57, '#B9B070'); });
    for (let k = 0; k < 3; k++) { const p = (t * 0.3 + k / 3) % 1; neutro(g, 88 + k * 26, Math.round(lerp(96, 84, p))); }
  }
];
