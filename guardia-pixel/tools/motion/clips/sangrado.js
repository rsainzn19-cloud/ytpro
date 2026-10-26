// Hemostasia en 1 minuto (tema sangrado). Mismo formato que hta.js.
// Dibujos propios: vaso roto con colágeno, plaquetas (reposo y activadas), factor de von Willebrand y red de fibrina.
(() => {
  const { C, clamp, lerp, ease, with_, rr } = MK;
  const GAP0 = 430, GAP1 = 650, WALL = 432;   // brecha en la pared del vaso
  function rbc(x, y, r, a = 1) {
    if (a <= 0) return; const g = MK.g;
    g.save(); g.globalAlpha *= clamp(a); g.translate(x, y);
    g.fillStyle = C.blood; g.beginPath(); g.ellipse(0, 0, r, r * 0.8, 0, 0, 7); g.fill();
    g.fillStyle = 'rgba(0,0,0,0.2)'; g.beginPath(); g.ellipse(0, 0, r * 0.45, r * 0.36, 0, 0, 7); g.fill();
    g.restore();
  }
  // Plaqueta: act 0 = disco liso; 1 = activada con espículas
  function plt(x, y, r, a, act) {
    if (a <= 0) return; const g = MK.g;
    g.save(); g.globalAlpha *= clamp(a); g.translate(x, y);
    g.fillStyle = '#D9C2FF'; g.strokeStyle = '#8E6CD1'; g.lineWidth = 3; g.beginPath();
    for (let i = 0; i <= 40; i++) { const th = (i / 40) * Math.PI * 2, rad = r * (1 + act * 0.35 * Math.max(0, Math.sin(th * 6))); const px = Math.cos(th) * rad, py = Math.sin(th) * rad * 0.75; if (i) g.lineTo(px, py); else g.moveTo(px, py); }
    g.closePath(); g.fill(); g.stroke();
    g.fillStyle = '#8E6CD1'; for (let i = 0; i < 3; i++) { g.beginPath(); g.arc(-r * 0.35 + i * r * 0.35, (i % 2 ? 3 : -3), 2.5, 0, 7); g.fill(); }
    g.restore();
  }
  // Posiciones del tapón (determinista)
  const PLUG = [];
  for (let row = 0; row < 3; row++) for (let i = 0; i < 7 - row * 2; i++) PLUG.push([GAP0 + 40 + row * 30 + i * 30, WALL - 10 - row * 24]);

  window.CLIP = {
    topic: 'sangrado', title: 'Hemostasia en\u00a01\u00a0minuto', sub: 'Del tapón plaquetario a la red de fibrina', color: '#FF5470',
    scenes: [
      { say: 'La hemostasia primaria y la secundaria, en un minuto.', min: 3.5 },
      { say: 'Cuando se rompe un vaso, la sangre se fuga y queda expuesto el colágeno de la pared.' },
      { say: 'El factor de von Willebrand se pega al colágeno y atrapa a las plaquetas por su receptor. Eso es la adhesión.' },
      { say: 'Las plaquetas se activan y se unen con fibrinógeno: es el tapón plaquetario. Esa es la hemostasia primaria, en segundos.' },
      { say: 'La secundaria es la cascada de factores. La extrínseca, factor tisular y siete, se mide con el te pe; la intrínseca, doce, once, nueve y ocho, con el te te pe a.' },
      { say: 'Las dos llegan a la vía común: diez, cinco y dos. La trombina convierte el fibrinógeno en fibrina, una red que sella el tapón.' },
      { say: 'Si falla la plaqueta, sangran piel y mucosas, de inmediato. Si falla un factor, sangra lo profundo y tarde, como las articulaciones.' },
      { say: 'Perla: menorragia y epistaxis con plaquetas normales es von Willebrand. Un niño con hemartrosis y te te pe a alargado es hemofilia.', min: 7 }
    ],
    draw(t, T) {
      const { text, pill, arrow, ring, titleCard, headline, bg } = MK;
      const g = MK.g;
      bg(t);
      const k = T.cur, dimFor = (i) => (k >= 6 ? 1 : k === i ? 1 : 0.42);
      if (k === 0) { titleCard(t - T.s(0), this.title, this.sub, this.color); return; }
      const heads = ['', 'Se rompe el vaso: colágeno expuesto', 'Adhesión: von Willebrand', 'Agregación: tapón plaquetario', 'Cascada: TP y TTPa', 'Vía común: trombina → fibrina', 'Plaqueta = piel y mucosa · Factor = fondo', 'Perla para el examen'];
      headline(heads[k], t - T.s(k), this.color);
      const plug = k >= 3 ? ease(T.f(3, 0.1, 0.6)) : 0;   // tapón formado
      const mesh = k >= 5 ? ease(T.f(5, 0.6, 0.9)) : 0;   // red de fibrina

      // 1 · Vaso con brecha, colágeno y fuga de sangre
      with_(k <= 1 || k >= 6 ? 1 : (k <= 3 ? 1 : 0.6), () => {
        const a = ease(T.f(1, 0, 0.2)), br = ease(T.f(1, 0.25, 0.5));
        with_(a, () => {
          g.fillStyle = '#3A1220'; g.fillRect(40, 196, 1000, WALL - 196);
          g.fillStyle = C.organ; g.fillRect(40, 182, 1000, 14);
          g.fillStyle = '#2A1B3D'; g.fillRect(40, WALL + 18, 1000, 80);
          // endotelio (pared) con la brecha que se abre
          const gl = lerp(540, GAP0, br), gr = lerp(540, GAP1, br);
          g.fillStyle = C.organ; g.fillRect(40, WALL, gl - 40, 18); g.fillRect(gr, WALL, 1040 - gr, 18);
          // colágeno expuesto
          if (br > 0) with_(br, () => {
            g.strokeStyle = '#E9C46A'; g.lineWidth = 5;
            for (let r = 0; r < 3; r++) { g.beginPath(); for (let x = GAP0; x <= GAP1; x += 6) { const y = WALL + 26 + r * 22 + Math.sin(x / 18 + r) * 6; if (x === GAP0) g.moveTo(x, y); else g.lineTo(x, y); } g.stroke(); }
          });
          // eritrocitos en el vaso
          for (let i = 0; i < 12; i++) { const u = (t * 0.07 + i / 12) % 1; rbc(lerp(70, 1010, u), 240 + ((i * 53) % 150), 17); }
          // fuga por la brecha (se detiene con el tapón)
          const leak = br * (1 - plug);
          if (leak > 0) for (let i = 0; i < 4; i++) { const u = (t * 0.5 + i / 4) % 1; rbc(470 + i * 45, lerp(WALL - 10, WALL + 110, u), 14, leak * (1 - u)); }
        });
        with_(ease(T.f(1, 0.45, 0.7)), () => text('Colágeno', 540, 580, { size: 30, color: '#E9C46A' }));
        if (k === 1) ring(540, WALL + 40, 90, t, { color: C.gold });
      });

      // 2 · Factor de von Willebrand y adhesión de plaquetas
      with_(dimFor(2), () => {
        const vw = ease(T.f(2, 0, 0.3));
        if (vw > 0) with_(vw, () => {
          g.strokeStyle = C.purple; g.lineWidth = 6; g.lineCap = 'round';
          for (let i = 0; i < 4; i++) { const x0 = GAP0 + 30 + i * 52; g.beginPath(); for (let s = 0; s <= 20; s++) { const y = WALL + 30 - s * 3.2 * vw, x = x0 + Math.sin(s * 0.9 + t * 2 + i) * 8; if (s) g.lineTo(x, y); else g.moveTo(x, y); } g.stroke(); }
        });
        pill('FvW', 240, 560, ease(T.f(2, 0.15, 0.35)), { fill: C.purple, color: '#fff', size: 28 });
        arrow(290, 545, GAP0 + 20, WALL + 10, T.f(2, 0.25, 0.45), { color: C.purple, width: 5 });
        // plaquetas que llegan y se pegan (adhesión)
        if (t >= T.s(2)) for (let i = 0; i < 4; i++) {
          const u = ease(T.f(2, 0.3 + i * 0.08, 0.6 + i * 0.08));
          plt(lerp(120 + i * 40, PLUG[i][0], u), lerp(260 + i * 30, PLUG[i][1], u), 16, 1, k >= 3 ? plug : 0);
        }
        pill('Plaqueta', 170, 300, ease(T.f(2, 0.3, 0.5)), { fill: '#D9C2FF', size: 28 });
        with_(ease(T.f(2, 0.6, 0.8)), () => text('GPIb', 740, 400, { size: 28, color: '#D9C2FF' }));
        arrow(705, 400, 600, WALL - 8, T.f(2, 0.62, 0.8), { color: '#D9C2FF', width: 4 });
      });

      // 3 · Agregación: tapón plaquetario
      with_(dimFor(3), () => {
        if (t >= T.s(3)) {
          // puentes de fibrinógeno entre plaquetas
          with_(ease(T.f(3, 0.3, 0.6)), () => { g.strokeStyle = C.gold; g.lineWidth = 3; for (let i = 1; i < PLUG.length; i++) { const [x1, y1] = PLUG[i - 1], [x2, y2] = PLUG[i]; if (Math.abs(x1 - x2) < 40) { g.beginPath(); g.moveTo(x1, y1); g.lineTo(x2, y2); g.stroke(); } } });
          for (let i = 4; i < PLUG.length; i++) { const u = ease(T.f(3, 0.05 + (i - 4) * 0.04, 0.3 + (i - 4) * 0.04)); plt(lerp(PLUG[i][0] - 260, PLUG[i][0], u), lerp(250, PLUG[i][1], u), 16, u, plug); }
        }
        pill('Tapón plaquetario', 840, 300, ease(T.f(3, 0.5, 0.75)), { fill: '#D9C2FF', size: 28 });
        arrow(750, 330, 640, 380, T.f(3, 0.6, 0.8), { color: '#D9C2FF', width: 5 });
        with_(ease(T.f(3, 0.7, 0.9)), () => text('Primaria · segundos', 850, 580, { size: 28, color: C.ink2 }));
      });

      // 4 · Cascada: extrínseca (TP) e intrínseca (TTPa)
      with_(dimFor(4), () => {
        with_(ease(T.f(4, 0, 0.2)), () => { text('Extrínseca', 270, 680, { size: 28, color: C.dim }); text('Secundaria · minutos', 540, 645, { size: 26, color: C.ink2 }); });
        pill('FT + VII', 270, 740, ease(T.f(4, 0.1, 0.3)), { fill: C.cyan, size: 30 });
        pill('TP', 270, 825, ease(T.f(4, 0.25, 0.4)), { fill: C.blue, size: 32 });
        with_(ease(T.f(4, 0.4, 0.55)), () => text('Intrínseca', 790, 680, { size: 28, color: C.dim }));
        pill('XII · XI · IX · VIII', 790, 740, ease(T.f(4, 0.5, 0.7)), { fill: C.pink, size: 30 });
        pill('TTPa', 790, 825, ease(T.f(4, 0.7, 0.85)), { fill: C.pink, size: 32 });
        if (k === 4) { if (t < T.s(4) + T.d(4) * 0.5) ring(270, 825, 50, t, { color: C.blue }); else ring(790, 825, 60, t, { color: C.pink }); }
      });

      // 5 · Vía común → trombina → fibrina
      with_(dimFor(5), () => {
        arrow(320, 860, 470, 935, T.f(5, 0, 0.2), { color: C.cyan, width: 6 });
        arrow(740, 860, 610, 935, T.f(5, 0, 0.2), { color: C.pink, width: 6 });
        pill('X · V · II', 540, 960, ease(T.f(5, 0.1, 0.3)), { fill: C.gold, size: 30 });
        with_(ease(T.f(5, 0.15, 0.3)), () => text('Vía común', 750, 960, { size: 26, color: C.dim }));
        arrow(540, 995, 540, 1025, T.f(5, 0.25, 0.35), { color: C.ink2, width: 5 });
        pill('Trombina', 540, 1055, ease(T.f(5, 0.3, 0.45)), { fill: C.red, color: '#fff', size: 30 });
        arrow(540, 1090, 540, 1118, T.f(5, 0.45, 0.55), { color: C.ink2, width: 5 });
        pill('Fibrinógeno → fibrina', 540, 1145, ease(T.f(5, 0.5, 0.65)), { fill: '#E9C46A', size: 28 });
        // red de fibrina sobre el tapón
        if (mesh > 0) with_(mesh, () => {
          g.strokeStyle = '#F6E7B0'; g.lineWidth = 3;
          for (let i = 0; i < 7; i++) { g.beginPath(); g.moveTo(GAP0 + 20 + i * 30, WALL - 70); g.lineTo(GAP0 + 70 + i * 22, WALL + 8); g.stroke(); g.beginPath(); g.moveTo(GAP0 + 20, WALL - 60 + i * 10); g.lineTo(GAP1 - 20, WALL - 40 + i * 7); g.stroke(); }
        });
        with_(mesh, () => text('Fibrina', 230, 400, { size: 28, color: '#F6E7B0' }));
        arrow(290, 400, 440, 400, mesh, { color: '#F6E7B0', width: 4 });
      });

      // 6 · Clínica: plaqueta vs factor
      if (k >= 6) {
        const card = (x, a, title, col, line) => with_(a, () => {
          g.fillStyle = 'rgba(20,26,66,0.94)'; rr(x, 1195, 460, 110, 24); g.fill(); g.lineWidth = 4; g.strokeStyle = col; g.stroke();
          text(title, x + 230, 1228, { size: 28, color: col });
          text(line, x + 230, 1270, { size: 26, color: C.ink, weight: 600, maxW: 430 });
        });
        card(60, ease(T.f(6, 0.1, 0.3)), 'Falla la plaqueta o FvW', '#D9C2FF', 'Petequias, mucosas · inmediato');
        card(560, ease(T.f(6, 0.5, 0.7)), 'Falla un factor', C.pink, 'Hemartrosis, músculo · tardío');
      }

      // 7 · Perla
      if (k === 7) {
        const a = ease(T.f(7, 0, 0.15));
        with_(a, () => {
          g.fillStyle = 'rgba(11,14,42,0.88)'; g.fillRect(0, 0, MK.W, MK.H);
          headline(heads[7], t - T.s(7), C.gold);
          text('Von Willebrand', 540, 450, { size: 70, color: '#D9C2FF' });
          text('Menorragia y epistaxis, plaquetas normales', 540, 540, { size: 34, color: C.ink2, weight: 600, maxW: 860 });
          with_(ease(T.f(7, 0.45, 0.6)), () => {
            text('Hemofilia', 540, 780, { size: 70, color: C.pink });
            text('Niño con hemartrosis, TTPa alargado, TP normal', 540, 870, { size: 34, color: C.ink2, weight: 600, maxW: 860 });
          });
        });
      }
    }
  };
})();
