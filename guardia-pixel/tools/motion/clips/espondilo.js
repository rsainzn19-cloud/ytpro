// Espondiloartritis en 1 minuto (tema espondilo). Izquierda: columna y pelvis (sacroileítis → sindesmofitos).
// Derecha: talón (entesitis), lumbalgia inflamatoria, HLA-B27 y uveítis. Abajo: tratamiento escalonado.
(() => {
  const SX = 230;
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
  const glow = (x, y, r, col, a) => { if (a <= 0) return; const g = MK.g, gr = g.createRadialGradient(x, y, 2, x, y, r); gr.addColorStop(0, col.replace('A', String(a))); gr.addColorStop(1, col.replace('A', '0')); g.fillStyle = gr; g.beginPath(); g.arc(x, y, r, 0, 7); g.fill(); };

  // Columna lumbar: syn = sindesmofitos (0→1)
  function spine(syn) {
    const g = MK.g;
    for (let i = 0; i < 5; i++) {
      const y = 200 + i * 100;
      if (i < 4) { g.fillStyle = '#5C7BD9'; g.beginPath(); g.ellipse(SX, y + 83, 62, 14, 0, 0, 7); g.fill(); }
      g.fillStyle = '#E9DCC4'; MK.rr(SX - 70, y, 140, 66, 16); g.fill();
      g.fillStyle = 'rgba(0,0,0,0.08)'; MK.rr(SX - 70, y + 46, 140, 20, 10); g.fill();
    }
    if (syn > 0) {
      g.strokeStyle = '#FFF4DC'; g.lineWidth = 9; g.lineCap = 'round';
      for (let i = 0; i < 4; i++) {
        const y0 = 200 + i * 100 + 60, y1 = y0 + 46, h = (y1 - y0) / 2 * syn;
        [-1, 1].forEach((s) => { const x = SX + s * 70; g.beginPath(); g.moveTo(x, y0); g.lineTo(x + s * 4, y0 + h); g.moveTo(x, y1); g.lineTo(x + s * 4, y1 - h); g.stroke(); });
      }
    }
  }
  // Pelvis: sacro e iliacos; ed = edema de médula ósea en las sacroiliacas (0→1)
  function pelvis(t, ed) {
    const g = MK.g;
    g.fillStyle = '#D8C9AE';
    [-1, 1].forEach((s) => {
      g.beginPath(); g.moveTo(SX + s * 70, 748); g.bezierCurveTo(SX + s * 110, 700, SX + s * 175, 705, SX + s * 178, 770);
      g.bezierCurveTo(SX + s * 180, 840, SX + s * 160, 900, SX + s * 140, 950); g.quadraticCurveTo(SX + s * 105, 975, SX + s * 85, 945);
      g.bezierCurveTo(SX + s * 80, 910, SX + s * 62, 885, SX + s * 52, 860); g.closePath(); g.fill();
      g.fillStyle = '#C2B293'; g.beginPath(); g.arc(SX + s * 135, 930, 18, 0, 7); g.fill(); g.fillStyle = '#D8C9AE';
    });
    g.fillStyle = '#E9DCC4'; g.beginPath(); g.moveTo(SX - 72, 742); g.lineTo(SX + 72, 742); g.lineTo(SX + 50, 880); g.quadraticCurveTo(SX, 990, SX - 50, 880); g.closePath(); g.fill();
    g.fillStyle = 'rgba(0,0,0,0.12)'; for (let i = 0; i < 3; i++) { g.beginPath(); g.ellipse(SX, 785 + i * 38, 30 - i * 5, 7, 0, 0, 7); g.fill(); }
    // líneas de las sacroiliacas
    g.strokeStyle = '#3A3F70'; g.lineWidth = 6;
    [-1, 1].forEach((s) => { g.beginPath(); g.moveTo(SX + s * 74, 752); g.lineTo(SX + s * 58, 860); g.stroke(); });
    if (ed > 0) [-1, 1].forEach((s) => { glow(SX + s * 82, 800, 46 + Math.sin(t * 3) * 3, 'rgba(240,250,255,A)', 0.85 * ed); glow(SX + s * 58, 810, 34, 'rgba(240,250,255,A)', 0.7 * ed); });
  }
  // Talón: tendón de Aquiles y fascia plantar; inf = entesitis
  function heel(t, inf) {
    const g = MK.g;
    g.fillStyle = '#B07A5B'; g.beginPath();
    g.moveTo(745, 180); g.lineTo(870, 180); g.lineTo(882, 330); g.quadraticCurveTo(940, 420, 905, 470); g.quadraticCurveTo(890, 495, 850, 495);
    g.lineTo(585, 495); g.quadraticCurveTo(552, 495, 558, 470); g.quadraticCurveTo(572, 440, 640, 425); g.quadraticCurveTo(722, 400, 745, 330); g.closePath(); g.fill();
    g.fillStyle = '#E9DCC4'; g.beginPath(); g.ellipse(830, 440, 72, 40, 0.12, 0, 7); g.fill();
    g.beginPath(); g.ellipse(770, 385, 48, 30, 0, 0, 7); g.fill();
    g.strokeStyle = '#F4EEFF'; g.lineCap = 'round';
    g.lineWidth = 22; g.beginPath(); g.moveTo(852, 185); g.quadraticCurveTo(880, 330, 890, 425); g.stroke();
    g.lineWidth = 10; g.beginPath(); g.moveTo(805, 478); g.quadraticCurveTo(700, 488, 600, 476); g.stroke();
    if (inf > 0) { glow(892, 428, 52 + Math.sin(t * 4) * 4 * inf, 'rgba(255,84,112,A)', 0.95 * inf); glow(805, 480, 34, 'rgba(255,84,112,A)', 0.7 * inf); }
  }
  // Ojo con inyección ciliar (uveítis anterior)
  function eye(x, y, a, red) {
    if (a <= 0) return;
    const g = MK.g;
    MK.with_(a, () => {
      g.save(); g.beginPath(); g.moveTo(x - 110, y); g.quadraticCurveTo(x, y - 80, x + 110, y); g.quadraticCurveTo(x, y + 80, x - 110, y); g.closePath();
      g.fillStyle = '#F6F0F2'; g.fill(); g.clip();
      const gr = g.createRadialGradient(x, y, 30, x, y, 90); gr.addColorStop(0, `rgba(230,40,70,${0.95 * red})`); gr.addColorStop(1, 'rgba(230,40,70,0)'); g.fillStyle = gr; g.fillRect(x - 110, y - 80, 220, 160);
      g.fillStyle = '#6B4A2E'; g.beginPath(); g.arc(x, y, 34, 0, 7); g.fill(); g.fillStyle = '#111'; g.beginPath(); g.arc(x, y, 14, 0, 7); g.fill();
      g.fillStyle = 'rgba(255,255,255,0.8)'; g.beginPath(); g.arc(x + 10, y - 10, 6, 0, 7); g.fill();
      g.restore();
      g.strokeStyle = '#D9A47E'; g.lineWidth = 6; g.beginPath(); g.moveTo(x - 110, y); g.quadraticCurveTo(x, y - 80, x + 110, y); g.quadraticCurveTo(x, y + 80, x - 110, y); g.stroke();
    });
  }

  window.CLIP = {
    topic: 'espondilo', title: 'Espondiloartritis en 1 minuto', sub: 'Entesitis, sacroileítis y HLA-B27: la lumbalgia inflamatoria del joven', color: '#62E38C',
    scenes: [
      { say: 'Las espondiloartritis, en un minuto.', min: 3.5 },
      { say: 'La inflamación empieza en la entesis, donde el tendón se inserta en el hueso, no en el sinovio. Por eso duele el talón.' },
      { say: 'En la columna, primero se inflama la sacroiliaca. La resonancia ve el edema óseo años antes que la radiografía.' },
      { say: 'Su lumbalgia es inflamatoria: empieza antes de los cuarenta y cinco, despierta de madrugada y mejora con el ejercicio.' },
      { say: 'Luego se forma hueso nuevo: los sindesmofitos unen las vértebras, y la columna queda en caña de bambú.' },
      { say: 'Comparten el HLA-B veintisiete, y lo extraarticular más común es la uveítis anterior: ojo rojo, doloroso, con fotofobia.' },
      { say: 'Trata con antiinflamatorios a dosis plenas y ejercicio; si fallan dos, anti factor de necrosis tumoral o anti interleucina diecisiete.' },
      { say: 'Trampa: el HLA-B veintisiete solo no diagnostica; lo tiene hasta el ocho por ciento de la gente sana. Y el metotrexato no sirve para la columna.', min: 8 }
    ],
    draw(t, T) {
      const { C, ease, inOut, text, pill, arrow, titleCard, headline, bg, with_, lerp, rr, ring } = MK, g = MK.g;
      bg(t);
      const k = T.cur, dimFor = (i) => (k >= 6 ? 1 : k === i ? 1 : 0.42);
      if (k === 0) { titleCard(t - T.s(0), this.title, this.sub, this.color); return; }
      const heads = ['', 'Empieza en la entesis', 'Sacroileítis: la RM la ve primero', 'Lumbalgia inflamatoria', 'Sindesmofitos: caña de bambú', 'HLA-B27 y uveítis anterior', 'AINE primero; luego biológico', 'Trampa del examen'];
      headline(heads[k], t - T.s(k), this.color);
      const calm = k >= 6 ? 1 - inOut(T.f(6, 0.5, 0.95)) * 0.75 : 1;
      const lab = (str, x, y, tx, ty, a, col, size = 28) => { if (a <= 0) return; with_(a, () => { g.strokeStyle = col; g.lineWidth = 3; g.beginPath(); g.moveTo(x - 12, y); g.lineTo(tx, ty); g.stroke(); g.fillStyle = col; g.beginPath(); g.arc(tx, ty, 6, 0, 7); g.fill(); text(str, x, y, { size, align: 'left', color: col }); }); };

      // 1 · Talón: entesitis
      with_(dimFor(1), () => {
        const a = ease(T.f(1, 0, 0.25));
        layer(a * MK.g.globalAlpha, () => heel(t, ease(T.f(1, 0.35, 0.6)) * calm));
        with_(ease(T.f(1, 0.25, 0.4)), () => text('Aquiles', 975, 290, { size: 28, color: C.ink2 }));
        pill('Entesis', 975, 530, ease(T.f(1, 0.45, 0.6)), { fill: C.red, color: '#fff', size: 30 });
        arrow(960, 505, 905, 445, T.f(1, 0.5, 0.65), { color: C.red, width: 5 });
        with_(ease(T.f(1, 0.65, 0.8)), () => text('Fascia plantar', 690, 530, { size: 24, color: C.ink2, weight: 600 }));
      });
      // 2 · Columna y sacroiliacas
      with_(k === 1 ? 0 : (k <= 4 || k >= 6 ? 1 : 0.42), () => {
        const a = ease(T.f(2, 0, 0.25));
        layer(a * MK.g.globalAlpha, () => { spine(ease(T.f(4, 0.1, 0.6))); pelvis(t, ease(T.f(2, 0.35, 0.65)) * calm); });
      });
      with_(dimFor(2), () => {
        with_(ease(T.f(2, 0.3, 0.45)), () => text('Sacroiliacas', SX, 1000, { size: 28, color: C.ink }));
        pill('RM: edema óseo', SX, 1062, ease(T.f(2, 0.55, 0.7)), { fill: C.cyan, size: 26 });
        if (k === 2) { g.save(); ring(SX - 80, 805, 52, t, { color: C.cyan }); ring(SX + 80, 805, 52, t, { color: C.cyan }); g.restore(); }
      });
      // 3 · Lumbalgia inflamatoria
      with_(dimFor(3), () => {
        [['Inicio <45 años', C.ink], ['Despierta de madrugada', C.ink], ['Mejora con ejercicio', C.green], ['No mejora con reposo', C.ink2]].forEach(([s, col], i) => {
          with_(ease(T.f(3, 0.1 + i * 0.15, 0.25 + i * 0.15)), () => { g.fillStyle = C.green; g.beginPath(); g.arc(585, 605 + i * 52, 9, 0, 7); g.fill(); text(s, 608, 605 + i * 52, { size: 30, align: 'left', color: col }); });
        });
      });
      // 4 · Sindesmofitos
      with_(dimFor(4), () => {
        lab('Sindesmofitos', 345, 410, 304, 385, ease(T.f(4, 0.3, 0.45)), C.gold2);
        with_(ease(T.f(4, 0.6, 0.75)), () => text('Caña de bambú', 345, 470, { size: 28, align: 'left', color: C.gold }));
      });
      // 5 · HLA-B27 y uveítis
      with_(dimFor(5), () => {
        pill('HLA-B27', 790, 840, ease(T.f(5, 0.05, 0.22)), { fill: C.purple, color: '#fff', size: 34 });
        with_(ease(T.f(5, 0.15, 0.3)), () => text('FR y anti-CCP negativos', 790, 894, { size: 24, color: C.ink2, weight: 600 }));
        eye(700, 985, ease(T.f(5, 0.4, 0.55)), ease(T.f(5, 0.5, 0.75)) * lerp(0.4, 1, calm));
        [['Ojo rojo', C.red], ['Dolor', C.ink], ['Fotofobia', C.gold]].forEach(([s, col], i) =>
          with_(ease(T.f(5, 0.55 + i * 0.1, 0.68 + i * 0.1)), () => text(s, 845, 948 + i * 38, { size: 26, align: 'left', color: col })));
        with_(ease(T.f(5, 0.5, 0.65)), () => text('Uveítis anterior', 700, 1075, { size: 26, color: C.pink }));
      });
      // 6 · Tratamiento escalonado
      if (k >= 6) {
        const b1 = ease(T.f(6, 0.05, 0.25)), b2 = ease(T.f(6, 0.4, 0.6));
        const box = (x, w, col, a) => with_(a, () => { rr(x, 1150, w, 130, 26); g.fillStyle = 'rgba(20,26,66,0.92)'; g.fill(); g.lineWidth = 4; g.strokeStyle = col; g.stroke(); });
        box(60, 430, C.green, b1); box(600, 420, C.purple, b2);
        with_(b1, () => { text('AINE a dosis plenas', 275, 1195, { size: 30, color: C.green }); text('+ ejercicio diario', 275, 1240, { size: 26, color: C.ink2 }); });
        arrow(498, 1215, 590, 1215, T.f(6, 0.3, 0.42), { color: C.ink2, width: 6 });
        with_(ease(T.f(6, 0.3, 0.42)), () => text('Fallan 2 AINE', 545, 1118, { size: 24, color: C.ink2, weight: 600 }));
        with_(b2, () => { text('Anti-TNF', 810, 1195, { size: 32, color: C.purple }); text('o anti-IL-17', 810, 1240, { size: 28, color: C.ink }); });
      }
      // 7 · Trampa
      if (k === 7) {
        const a = ease(T.f(7, 0, 0.12));
        with_(a, () => {
          g.fillStyle = 'rgba(11,14,42,0.94)'; g.fillRect(0, 0, MK.W, MK.H);
          headline(heads[7], t - T.s(7), C.gold);
          text('HLA-B27 solo no diagnostica', 540, 450, { size: 60, color: C.gold, maxW: 960 });
          text('Hasta ~8% de la población sana lo tiene: interprétalo con la clínica y la imagen', 540, 555, { size: 34, color: C.ink2, weight: 600, maxW: 860 });
          with_(ease(T.f(7, 0.55, 0.68)), () => {
            text('Metotrexato en la columna', 540, 800, { size: 60, color: C.red, maxW: 960 });
            text('No sirve para la enfermedad axial: solo para la artritis periférica', 540, 900, { size: 34, color: C.ink2, weight: 600, maxW: 860 });
          });
        });
      }
    }
  };
})();
