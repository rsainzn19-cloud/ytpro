// ═══════════ Paciente con sangrado: hemostasia primaria, cascada, prueba de mezcla, PTT y CID
{
  const sgPlt = (g, x, y) => { g.r(x, y, 3, 2, COL.plt); g.p(x + 1, y, COL.white); };
  const sgFrag = (g, x, y, k) => {
    if (k % 2) { g.r(x, y, 3, 2, COL.rbc); g.p(x + 3, y + 1, COL.rbc); }
    else { g.p(x + 1, y, COL.rbc); g.r(x, y + 1, 3, 1, COL.rbc); g.r(x + 1, y + 2, 2, 1, COL.rbcD); }
  };
  const sgTube = (g, x, y, h, fill, c) => {
    g.r(x - 6, y, 1, h, COL.cap); g.r(x + 6, y, 1, h, COL.cap); g.r(x - 6, y + h, 13, 1, COL.cap);
    g.r(x - 5, y + h - fill, 11, fill, c);
  };
  const sgClock = (g, x, y, a, c) => {
    g.disk(x, y, 9, COL.panel); g.ring(x, y, 9, c);
    g.line(x, y, x + Math.round(Math.cos(a) * 7), y + Math.round(Math.sin(a) * 7), COL.white); g.p(x, y, c);
  };
  SCENES.sangrado = [
    // 1. Hemostasia primaria: colágeno expuesto, FvW y tapón plaquetario
    (g, t) => {
      g.clear(COL.bg);
      const ph = (t % 9) / 9, plug = Math.min(1, ph * 1.7), h = Math.round(plug * 18);
      g.r(0, 92, 160, 28, '#2A1430');
      g.r(0, 12, 160, 6, COL.wall); g.r(0, 18, 160, 2, COL.endo); g.r(0, 20, 160, 60, COL.lumen);
      g.r(0, 80, 66, 2, COL.endo); g.r(94, 80, 66, 2, COL.endo); g.r(0, 82, 66, 10, COL.wall); g.r(94, 82, 66, 10, COL.wall);
      g.r(66, 82, 28, 10, '#3A2030');
      for (let x = 66; x < 94; x += 4) g.line(x, 83, x + 2, 91, '#E8D9A8');
      [70, 80, 90].forEach((k) => { for (let y = 64; y <= 82; y++) g.p(k + Math.round(Math.sin(y * 0.6 + t * 3 + k) * 2), y, COL.cyan); });
      for (let i = 0; i < Math.round(plug * 34); i++) sgPlt(g, 64 + rnd(i, 201) * 28, 79 - rnd(i, 202) * h);
      for (let i = 0; i < 12; i++) { const x = (t * 30 + i * 14.3) % 176 - 8, y = 24 + Math.floor(rnd(i, 203) * 50); g.r(x, y, 4, 3, COL.rbc); g.r(x + 1, y + 1, 2, 1, COL.rbcD); }
      for (let i = 0; i < 8; i++) {
        const p = (t * 0.3 + i / 8) % 1, x0 = (i * 21) % 60;
        if (i % 2 && p > 0.5) { const q = (p - 0.5) / 0.5; sgPlt(g, lerp(x0 + 40, 64 + rnd(i, 204) * 26, q), lerp(40, 78 - rnd(i, 205) * h, q)); }
        else sgPlt(g, (x0 + p * 170) % 168 - 4, 30 + rnd(i, 206) * 40);
      }
      const leak = Math.round((1 - plug) * 6);
      for (let i = 0; i < leak; i++) { const p = (t * 0.6 + i / 6) % 1; g.r(76 + (rnd(i, 207) - 0.5) * 14, lerp(84, 116, p), 3, 2, COL.rbc); }
    },
    // 2. Cascada: vía extrínseca (TP), intrínseca (TTPa), común y fibrina
    (g, t) => {
      g.clear(COL.bg);
      const ph = (t % 9) / 9;
      const EXT = [[14, 24], [30, 32], [80, 50]], INT = [[144, 22], [130, 28], [116, 34], [102, 40], [80, 50]], COM = [[80, 50], [80, 62], [80, 74]];
      for (let k = 0; k < EXT.length - 1; k++) g.line(EXT[k][0], EXT[k][1], EXT[k + 1][0], EXT[k + 1][1], COL.goldD);
      for (let k = 0; k < INT.length - 1; k++) g.line(INT[k][0], INT[k][1], INT[k + 1][0], INT[k + 1][1], '#2A7A9A');
      g.line(80, 50, 80, 74, COL.cap);
      g.r(10, 20, 8, 8, COL.orange); g.disk(30, 32, 4, COL.gold);
      INT.slice(0, 4).forEach(([x, y]) => g.disk(x, y, 4, COL.cyan));
      g.disk(80, 50, 5, COL.white); g.disk(80, 62, 3, COL.cap); g.disk(80, 74, 5, COL.red);
      if (blink(t, 2)) g.ring(80, 74, 7, COL.red);
      for (let i = 0; i < 3; i++) { const [x, y] = along(EXT, (t * 0.35 + i / 3) % 1); g.r(x - 1, y - 1, 3, 3, COL.gold); }
      for (let i = 0; i < 3; i++) { const [x, y] = along(INT, (t * 0.3 + i / 3) % 1); g.r(x - 1, y - 1, 3, 3, COL.cyan); }
      for (let i = 0; i < 2; i++) { const [x, y] = along(COM, (t * 0.5 + i / 2) % 1); g.r(x - 1, y - 1, 3, 3, COL.white); }
      for (let i = 0; i < 16; i++) g.p(16 + rnd(i, 211) * 128, 86 + rnd(i, 212) * 26, COL.white);
      const n = 6 + Math.floor(ph * 14);
      for (let i = 0; i < n; i++) {
        const x = 16 + rnd(i, 213) * 120, y = 86 + rnd(i, 214) * 26;
        g.line(x, y, x + 8 + rnd(i, 215) * 14, y + (rnd(i, 216) - 0.5) * 12, '#E0606E');
      }
      for (let i = 0; i < 4; i++) { const p = (t * 0.5 + i / 4) % 1; g.r(lerp(80, 30 + i * 30, p), lerp(78, 96, p), 2, 2, COL.red); }
    },
    // 3. Prueba de mezcla: corrige (déficit) vs no corrige (inhibidor)
    (g, t) => {
      g.clear(COL.bg);
      const ph = (t % 8) / 8;
      g.r(79, 14, 2, 92, COL.frame);
      [0, 80].forEach((ox, side) => {
        sgTube(g, ox + 14, 16, 22, 14, '#E8D25A'); sgTube(g, ox + 40, 16, 22, 14, '#F6E9A8');
        for (let i = 0; i < 4; i++) {
          const p = (t * 0.5 + i / 4) % 1, src = i % 2 ? ox + 40 : ox + 14;
          const [x, y] = along([[src, 26], [src, 14], [ox + 27, 14], [ox + 27, 58]], p);
          g.r(x - 1, y - 1, 2, 2, i % 2 ? '#F6E9A8' : '#E8D25A');
        }
        sgTube(g, ox + 27, 52, 40, 30, '#EEDC7A');
        if (side === 0) {
          const k = Math.min(1, ph * 2.2);
          for (let i = 0; i < Math.round(k * 10); i++) g.line(ox + 22 + rnd(i, 221) * 8, 64 + rnd(i, 222) * 26, ox + 26 + rnd(i, 223) * 8, 64 + rnd(i, 224) * 26, '#C0303C');
          sgClock(g, ox + 62, 72, -Math.PI / 2 + Math.min(ph, 0.3) * 2 * Math.PI * 1.4, COL.green);
        } else {
          for (let i = 0; i < 4; i++) {
            const x = ox + 23 + (i % 2) * 7, y = 66 + Math.floor(i / 2) * 12 + Math.round(Math.sin(t * 3 + i) * 2);
            g.line(x, y, x, y + 4, COL.red); g.line(x, y, x - 2, y - 2, COL.red); g.line(x, y, x + 2, y - 2, COL.red);
          }
          sgClock(g, ox + 62, 72, -Math.PI / 2 + t * 2.2, blink(t, 2) ? COL.red : '#8A2030');
        }
      });
    },
    // 4. PTT: multímeros gigantes de FvW, microtrombos y esquistocitos
    (g, t) => {
      g.clear(COL.bg);
      g.r(0, 26, 160, 4, COL.wall); g.r(0, 30, 160, 1, COL.endo); g.r(0, 31, 160, 59, COL.lumen); g.r(0, 90, 160, 1, COL.endo); g.r(0, 91, 160, 4, COL.wall);
      for (let x = 4; x < 110; x++) { g.p(x, 33 + Math.round(Math.sin(x * 0.7 + t * 2) * 1.5), COL.cyan); g.p(x, 87 + Math.round(Math.sin(x * 0.7 + 1 + t * 2) * 1.5), COL.cyan); }
      for (let x = 10; x < 64; x += 9) { sgPlt(g, x, 34); sgPlt(g, x + 4, 84); }
      for (let x = 62; x <= 98; x++) { const d = (x - 80) / 18, hh = Math.round(22 * (1 - d * d)); g.r(x, 31, 1, hh, '#7A6AB0'); }
      for (let x = 70; x <= 102; x++) { const d = (x - 86) / 16, hh = Math.round(16 * (1 - d * d)); g.r(x, 90 - hh, 1, hh, '#7A6AB0'); }
      for (let i = 0; i < 26; i++) { sgPlt(g, 66 + rnd(i, 231) * 28, 32 + rnd(i, 232) * 14); if (i < 16) sgPlt(g, 74 + rnd(i, 233) * 24, 80 - rnd(i, 234) * 9); }
      for (let i = 0; i < 12; i++) {
        const x = (t * 26 + i * 15.7) % 176 - 8;
        let y = 40 + Math.floor(rnd(i, 235) * 40);
        if (x > 56 && x < 104) y = Math.round(lerp(y, 60, Math.min(1, (x - 56) / 12)));
        if (x < 96) { g.disk(x, y, 3, COL.rbc); g.p(x, y, '#FF9AA6'); }
        else { sgFrag(g, x, y - 2, i); sgFrag(g, x + 4 + (i % 3), y + 3, i + 1); }
      }
      const sx = 34, sy = 106;
      g.line(sx - 8, sy - 6, sx + 8, sy + 6, COL.cap); g.line(sx - 8, sy + 6, sx + 8, sy - 6, COL.cap);
      g.ring(sx - 10, sy - 7, 2, COL.cap); g.ring(sx - 10, sy + 7, 2, COL.cap);
      xMark(g, t, sx + 14, sy, 4);
    },
    // 5. CID: microtrombos difusos, consumo y sangrado
    (g, t) => {
      g.clear(COL.bg);
      const ph = (t % 10) / 10;
      [12, 30, 48].forEach((y) => { g.r(28, y - 4, 132, 1, COL.wall); g.r(28, y - 3, 132, 6, COL.lumen); g.r(28, y + 3, 132, 1, COL.wall); });
      for (let i = 0; i < 6; i++) {
        const x = 4 + (i % 2) * 10 + Math.round(Math.sin(t * 2 + i) * 1), y = 18 + Math.floor(i / 2) * 10;
        g.r(x, y, 6, 2, COL.green); g.p(x + 6, y + 1, COL.greenD);
      }
      const nc = 5 + Math.floor(ph * 12);
      for (let i = 0; i < nc; i++) {
        const x = 34 + rnd(i, 241) * 120, y = [12, 30, 48][i % 3] - 2;
        g.r(x, y, 5, 4, '#9A3A4A'); g.p(x + 1, y + 1, COL.plt); g.p(x + 3, y + 2, COL.plt);
      }
      for (let i = 0; i < 9; i++) { const x = 28 + ((t * (24 - ph * 14) + i * 15) % 132), y = [12, 30, 48][i % 3] - 1; g.r(x, y, 3, 2, COL.rbc); }
      gauge(g, 12, 70, 8, 32, lerp(0.85, 0.15, ph), COL.plt); g.spr(ARROW_DN, 23, 72, { X: COL.red });
      gauge(g, 34, 70, 8, 32, lerp(0.8, 0.15, ph), COL.gold); g.spr(ARROW_DN, 45, 72, { X: COL.red });
      gauge(g, 56, 70, 8, 32, lerp(0.15, 0.95, ph), COL.cyan); g.spr(ARROW_UP, 67, 72, { X: COL.gold });
      g.r(92, 76, 64, 24, '#C98E66'); g.r(92, 76, 64, 2, '#E0A87E');
      ell(g, 124, 88, Math.round(6 + ph * 10), Math.round(3 + ph * 4), '#7A3A6A');
      g.disk(124, 82, 2, '#3A1020');
      for (let i = 0; i < 3; i++) { const p = (t * 0.6 + i / 3) % 1; g.r(123, lerp(84, 104, p), 2, 3, COL.rbc); }
    }
  ];
}
