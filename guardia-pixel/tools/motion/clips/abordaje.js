// Abordaje articular en 1 minuto (tema abordaje). Se arma un tablero de decisiones: inflamatorio vs mecánico,
// cuántas articulaciones, cuánto tiempo, y ante la monoartritis aguda: punciona y lee el líquido.
(() => {
  let cv = null;
  function layer(a, fn) {
    if (a <= 0) return;
    if (a >= 0.999) { fn(); return; }
    if (!cv) { cv = document.createElement('canvas'); cv.width = MK.W; cv.height = MK.H; }
    const main = MK.g, oc = cv.getContext('2d');
    oc.setTransform(1, 0, 0, 1, 0, 0); oc.globalAlpha = 1; oc.clearRect(0, 0, MK.W, MK.H);
    MK.use(oc); fn(); MK.use(main);
    main.save(); main.globalAlpha = a; main.drawImage(cv, 0, 0); main.restore();
  }
  // Rodilla caliente con jeringa: hot = inflamación, nd = aguja que entra (0→1), fl = líquido aspirado
  function knee(t, hot, nd, fl) {
    const g = MK.g, BONE = '#E9DCC4';
    const gr = g.createRadialGradient(230, 1105, 10, 230, 1105, 150); gr.addColorStop(0, `rgba(255,84,112,${0.75 * hot})`); gr.addColorStop(1, 'rgba(255,84,112,0)');
    g.fillStyle = gr; g.beginPath(); g.arc(230, 1105, 150 + Math.sin(t * 4) * 4 * hot, 0, 7); g.fill();
    g.fillStyle = 'rgba(46,74,138,0.95)'; g.beginPath(); g.ellipse(230, 1105, 115, 62, 0, 0, 7); g.fill();
    g.strokeStyle = '#F28FA6'; g.lineWidth = 7; g.stroke();
    g.fillStyle = BONE;
    g.beginPath(); g.moveTo(185, 960); g.lineTo(275, 960); g.lineTo(278, 1040); g.quadraticCurveTo(330, 1055, 325, 1080); g.lineTo(135, 1080); g.quadraticCurveTo(130, 1055, 182, 1040); g.closePath(); g.fill();
    g.beginPath(); g.moveTo(130, 1125); g.lineTo(330, 1125); g.quadraticCurveTo(330, 1155, 280, 1165); g.lineTo(278, 1250); g.lineTo(185, 1250); g.lineTo(182, 1165); g.quadraticCurveTo(130, 1155, 130, 1125); g.closePath(); g.fill();
    g.fillStyle = '#9FD8F0'; MK.rr(140, 1080, 180, 12, 6); g.fill(); MK.rr(140, 1113, 180, 12, 6); g.fill();
    if (nd > 0) {
      const x = MK.lerp(470, 345, nd);
      g.strokeStyle = '#DDE3F0'; g.lineWidth = 4; g.beginPath(); g.moveTo(x - 30, 1102); g.lineTo(x + 30, 1102); g.stroke();       // aguja
      g.fillStyle = 'rgba(230,236,255,0.25)'; g.strokeStyle = '#DDE3F0'; g.lineWidth = 4; MK.rr(x + 30, 1080, 75, 44, 8); g.fill(); g.stroke();
      if (fl > 0) { g.fillStyle = '#F2D36B'; MK.rr(x + 34, 1084, 67 * fl, 36, 6); g.fill(); }
      g.fillStyle = '#DDE3F0'; g.fillRect(x + 105, 1094, 22, 16); g.fillRect(x + 125, 1078, 8, 48);
    }
  }
  // Tubo de líquido sinovial: turb = turbidez (0→1)
  function tube(x, a, col, turb) {
    if (a <= 0) return;
    const g = MK.g;
    MK.with_(a, () => {
      g.fillStyle = col; MK.rr(x - 32, 1040, 64, 130, 28); g.fill();
      if (turb > 0) { g.fillStyle = `rgba(255,255,255,${0.35 * turb})`; for (let i = 0; i < 10; i++) { g.beginPath(); g.arc(x - 18 + ((i * 23) % 40), 1060 + ((i * 37) % 95), 6, 0, 7); g.fill(); } }
      g.strokeStyle = '#C9CEFF'; g.lineWidth = 4; MK.rr(x - 35, 1000, 70, 172, 30); g.stroke();
    });
  }

  window.CLIP = {
    topic: 'abordaje', title: 'Abordaje articular en 1 minuto', sub: 'Inflamatorio o mecánico, cuántas articulaciones, y cuándo puncionar', color: '#F2C14E',
    scenes: [
      { say: 'El abordaje articular, en un minuto.', min: 3.5 },
      { say: 'Primero: ¿inflamatorio o mecánico? El inflamatorio da rigidez al despertar de más de una hora, que mejora al moverse.' },
      { say: 'El mecánico da rigidez de menos de media hora y empeora con el uso, peor al final del día, como la osteoartritis.' },
      { say: 'Luego cuenta. Una: monoartritis, infección o cristales. De dos a cuatro: oligoartritis. Cinco o más: poliartritis, como la reumatoide o el lupus.' },
      { say: 'Y el tiempo: menos de seis semanas es aguda; seis o más, crónica.' },
      { say: 'Ante una monoartritis aguda, punciona: Gram, cultivo, células y cristales. Sin líquido no descartas una artritis séptica.' },
      { say: 'Lee el líquido: menos de doscientos leucocitos, normal; hasta dos mil, no inflamatorio; hasta cincuenta mil, inflamatorio; más, séptico.' },
      { say: 'Trampa: no infiltres esteroide en una articulación caliente sin descartar infección. Y un antinuclear a título bajo, sin clínica, no es lupus.', min: 8 }
    ],
    draw(t, T) {
      const { C, ease, inOut, text, pill, arrow, titleCard, headline, bg, with_, lerp, rr, ring } = MK, g = MK.g;
      bg(t);
      const k = T.cur, dimFor = (i) => (k >= 6 ? 1 : k === i ? 1 : 0.42);
      if (k === 0) { titleCard(t - T.s(0), this.title, this.sub, this.color); return; }
      const heads = ['', '¿Inflamatorio…', '…o mecánico?', '¿Cuántas articulaciones?', '¿Desde cuándo?', 'Monoartritis aguda: punciona', 'Lee el líquido sinovial', 'Trampa del examen'];
      headline(heads[k], t - T.s(k), this.color);
      const box = (x, y, w, h, col, a) => with_(a, () => { rr(x, y, w, h, 24); g.fillStyle = 'rgba(20,26,66,0.92)'; g.fill(); g.lineWidth = 4; g.strokeStyle = col; g.stroke(); });

      // 1–2 · Gráfica de rigidez y dolor a lo largo del día
      const X0 = 90, X1 = 590, YB = 470, YT = 215;
      with_(k <= 2 || k >= 6 ? 1 : 0.42, () => {
        with_(ease(T.f(1, 0, 0.2)), () => {
          g.strokeStyle = C.ink2; g.lineWidth = 4; g.beginPath(); g.moveTo(X0, YT - 15); g.lineTo(X0, YB); g.lineTo(X1, YB); g.stroke();
          text('Rigidez / dolor', X0 + 10, YT - 22, { size: 24, color: C.ink2, align: 'left', weight: 600 });
          text('Despertar', X0 + 60, YB + 30, { size: 22, color: C.ink2, weight: 600 }); text('Noche', X1 - 40, YB + 30, { size: 22, color: C.ink2, weight: 600 });
        });
        const curve = (u, col, fy) => { if (u <= 0) return; g.strokeStyle = col; g.lineWidth = 8; g.lineCap = 'round'; g.beginPath(); for (let i = 0; i <= 50 * u; i++) { const f = i / 50, x = lerp(X0 + 10, X1 - 10, f), y = fy(f); if (i) g.lineTo(x, y); else g.moveTo(x, y); } g.stroke(); };
        curve(ease(T.f(1, 0.15, 0.55)), C.red, (f) => lerp(YT + 15, YB - 70, 1 - Math.exp(-f * 7)));
        curve(ease(T.f(2, 0.1, 0.5)), C.blue, (f) => lerp(YB - 25, YT + 40, Math.pow(f, 1.5)));
      });
      with_(dimFor(1), () => {
        const a = ease(T.f(1, 0.35, 0.55));
        box(640, 200, 400, 140, C.red, a);
        with_(a, () => { text('Inflamatorio', 840, 238, { size: 32, color: C.red }); text('Rigidez >60 min', 840, 280, { size: 28 }); text('mejora al moverse', 840, 316, { size: 24, color: C.ink2, weight: 600 }); });
      });
      with_(dimFor(2), () => {
        const a = ease(T.f(2, 0.35, 0.55));
        box(640, 365, 400, 140, C.blue, a);
        with_(a, () => { text('Mecánico', 840, 403, { size: 32, color: C.blue }); text('Rigidez <30 min', 840, 445, { size: 28 }); text('empeora con el uso', 840, 481, { size: 24, color: C.ink2, weight: 600 }); });
      });
      // 3 · Cuántas articulaciones
      with_(dimFor(3), () => {
        const G = [
          ['Mono · 1', 'Infección o cristales', 200, [[0, 0]], C.red],
          ['Oligo · 2–4', 'Espondiloartritis', 540, [[-40, 0], [40, 0], [0, -30]], C.orange],
          ['Poli · ≥5', 'AR, lupus, virus', 880, [[-75, -18], [-25, -18], [25, -18], [75, -18], [-50, 22], [0, 22], [50, 22]], C.purple]
        ];
        G.forEach(([lb, sub, x, dots, col], i) => {
          const a = ease(T.f(3, 0.08 + i * 0.27, 0.25 + i * 0.27));
          with_(a, () => {
            dots.forEach(([dx, dy], j) => { g.fillStyle = col; g.beginPath(); g.arc(x + dx, 625 + dy, 17 * MK.pop(MK.clamp(a * 1.2 - j * 0.04)), 0, 7); g.fill(); });
            text(sub, x, 755, { size: 26, color: C.ink2, weight: 600, maxW: 320 });
          });
          pill(lb, x, 705, a, { fill: col, color: i === 2 ? '#fff' : '#241500', size: 30 });
        });
      });
      // 4 · Tiempo
      with_(dimFor(4), () => {
        const a = ease(T.f(4, 0, 0.3)), m = 440;
        with_(a, () => {
          rr(90, 815, m - 90, 60, 30); g.fillStyle = C.orange; g.fill();
          rr(m, 815, 990 - m, 60, 30); g.fillStyle = C.purple; g.fill();
          g.fillStyle = C.ink; g.fillRect(m - 3, 805, 6, 80);
        });
        with_(ease(T.f(4, 0.25, 0.45)), () => text('Aguda <6 sem', (90 + m) / 2, 846, { size: 28, color: '#241500', shadow: false }));
        with_(ease(T.f(4, 0.5, 0.7)), () => text('Crónica ≥6 semanas', (m + 990) / 2, 846, { size: 28, color: '#fff', shadow: false }));
      });
      // 5 · Artrocentesis
      with_(dimFor(5), () => {
        const a = ease(T.f(5, 0, 0.2));
        layer(a * MK.g.globalAlpha, () => knee(t, 1, ease(T.f(5, 0.2, 0.45)), ease(T.f(5, 0.45, 0.75))));
        with_(ease(T.f(5, 0.5, 0.7)), () => text('Gram · cultivo · células · cristales', 240, 1290, { size: 24, color: C.cyan, maxW: 420 }));
        if (k === 5) with_(ease(T.f(5, 0.7, 0.85)), () => text('Descarta artritis séptica', 760, 1110, { size: 34, color: C.red }));
      });
      // 6 · Líquido sinovial
      if (k >= 6) {
        with_(ease(T.f(6, 0.05, 0.2)), () => text('Leucocitos por µL', 760, 972, { size: 24, color: C.ink2, weight: 600 }));
        const TB = [[565, '#F7F1D0', 0, '<200', 'Normal', C.green], [695, '#F2DE7A', 0.15, '200–2 mil', 'No inflam.', C.cyan], [825, '#E8C24A', 0.6, '2–50 mil', 'Inflamatorio', C.orange], [955, '#D8D2A0', 1, '>50 mil', 'Séptico', C.red]];
        TB.forEach(([x, col, turb, n, nm, c2], i) => {
          const a = ease(T.f(6, 0.12 + i * 0.18, 0.28 + i * 0.18));
          tube(x, a, col, turb);
          with_(a, () => { text(n, x, 1210, { size: 24, color: C.ink }); text(nm, x, 1250, { size: 22, color: c2 }); });
        });
        if (T.f(6, 0.75, 0.8) > 0) { g.save(); ring(955, 1085, 62, t, { color: C.red }); g.restore(); }
      }
      // 7 · Trampa
      if (k === 7) {
        const a = ease(T.f(7, 0, 0.12));
        with_(a, () => {
          g.fillStyle = 'rgba(11,14,42,0.94)'; g.fillRect(0, 0, MK.W, MK.H);
          headline(heads[7], t - T.s(7), C.gold);
          text('¿Esteroide a una rodilla caliente?', 540, 450, { size: 56, color: C.red, maxW: 960 });
          text('Nunca sin descartar infección con el líquido sinovial: pica antes de pensar', 540, 560, { size: 34, color: C.ink2, weight: 600, maxW: 860 });
          with_(ease(T.f(7, 0.55, 0.68)), () => {
            text('ANA 1:80 sin clínica', 540, 800, { size: 62, color: C.gold, maxW: 960 });
            text('No es lupus: es frecuente en personas sanas, sobre todo mujeres y adultos mayores', 540, 900, { size: 34, color: C.ink2, weight: 600, maxW: 860 });
          });
        });
      }
    }
  };
})();
