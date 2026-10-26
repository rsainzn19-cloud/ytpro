// Osteoartritis en 1 minuto (tema oa). Rodilla de frente a la izquierda (cartílago que se gasta del lado medial,
// osteofitos, esclerosis y quistes); a la derecha el dolor mecánico y la escalera de tratamiento; abajo la mano.
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

  // Rodilla: wear = desgaste medial (0→1), rx = signos radiográficos (0→1), load = carga [medial, lateral]
  function knee(t, wear, rx, load) {
    const { C, lerp, arrow } = MK, g = MK.g;
    const thM = lerp(24, 6, wear), th = 24, drop = (24 - thM) * 1.5, ang = -drop / 235;
    const BONE = '#E9DCC4', CART = '#9FD8F0';
    // Tibia
    g.fillStyle = BONE; g.beginPath();
    g.moveTo(110, 576); g.lineTo(490, 576); g.quadraticCurveTo(495, 625, 440, 650); g.lineTo(375, 680); g.lineTo(370, 830); g.lineTo(230, 830); g.lineTo(225, 680); g.lineTo(160, 650); g.quadraticCurveTo(105, 625, 110, 576); g.closePath(); g.fill();
    // Esclerosis y quistes subcondrales (lado medial)
    if (rx > 0) MK.with_(rx, () => {
      g.fillStyle = '#FFFFFF'; MK.rr(122, 578, 150, 22, 8); g.fill();
      g.fillStyle = '#5B5F8F'; [[165, 622, 11], [210, 615, 8], [240, 630, 6]].forEach(([x, y, r]) => { g.beginPath(); g.arc(x, y, r, 0, 7); g.fill(); });
      // osteofitos de la tibia
      g.fillStyle = BONE; [[-1, 110], [1, 490]].forEach(([s, x]) => { g.beginPath(); g.moveTo(x, 572); g.lineTo(x + s * 26 * rx, 566); g.lineTo(x - s * 4, 600); g.closePath(); g.fill(); });
    });
    // Cartílago de la tibia
    g.fillStyle = CART; MK.rr(125, 576 - thM, 145, thM, Math.min(8, thM / 2)); g.fill(); MK.rr(330, 576 - th, 145, th, 8); g.fill();
    // Fémur (se inclina hacia medial al gastarse el cartílago)
    g.save(); g.translate(415, 528 + (24 - th)); g.rotate(ang); g.translate(-415, -528);
    g.fillStyle = BONE; g.beginPath();
    g.moveTo(230, 190); g.lineTo(370, 190); g.lineTo(375, 370); g.quadraticCurveTo(470, 395, 475, 470); g.lineTo(475, 500); g.quadraticCurveTo(475, 528, 445, 528); g.lineTo(385, 528);
    g.quadraticCurveTo(350, 528, 340, 495); g.quadraticCurveTo(300, 455, 260, 495); g.quadraticCurveTo(250, 528, 215, 528); g.lineTo(155, 528); g.quadraticCurveTo(125, 528, 125, 500); g.lineTo(125, 470); g.quadraticCurveTo(130, 395, 225, 370); g.closePath(); g.fill();
    g.fillStyle = 'rgba(0,0,0,0.07)'; g.fillRect(270, 190, 30, 170);
    if (rx > 0) MK.with_(rx, () => {
      g.fillStyle = '#FFFFFF'; MK.rr(135, 506, 110, 20, 8); g.fill();
      g.fillStyle = BONE; [[-1, 125], [1, 475]].forEach(([s, x]) => { g.beginPath(); g.moveTo(x, 490); g.lineTo(x + s * 24 * rx, 522); g.lineTo(x - s * 4, 526); g.closePath(); g.fill(); });
    });
    g.fillStyle = CART; MK.rr(135, 528, 115, thM, Math.min(8, thM / 2)); g.fill(); MK.rr(350, 528, 115, th, 8); g.fill();
    // grietas en el cartílago medial
    if (wear > 0.2) MK.with_(wear, () => { g.strokeStyle = '#4A6E8C'; g.lineWidth = 3; [150, 185, 220].forEach((x) => { g.beginPath(); g.moveTo(x, 528); g.lineTo(x + 5, 528 + thM); g.stroke(); }); });
    g.restore();
    // Carga
    if (load) [[150, load[0]], [450, load[1]]].forEach(([x, w]) => { if (w > 0) arrow(x, 205, x, 330, 1, { color: C.gold, width: 4 + w * 10 }); });
  }

  // Mano con nódulos de Heberden (IFD) y Bouchard (IFP)
  function hand(cx, by, s, a, nod) {
    if (a <= 0) return;
    const g = MK.g;
    g.save(); g.translate(cx, by); g.scale(s, s); g.globalAlpha *= MK.clamp(a * 2);
    g.fillStyle = '#D9A47E';
    MK.rr(-62, -10, 124, 60, 18); g.fill(); MK.rr(-96, -180, 192, 185, 40); g.fill();
    const F = [[-70, 140], [-23, 165], [24, 155], [70, 120]];
    F.forEach(([x, L]) => { MK.rr(x - 21, -175 - L, 42, L + 20, 21); g.fill(); });
    g.save(); g.translate(80, -40); g.rotate(0.5); MK.rr(-21, -112, 42, 122, 21); g.fill(); g.restore();
    if (nod > 0) {
      F.forEach(([x, L]) => {
        g.fillStyle = '#F2C14E'; [[-1], [1]].forEach(([d]) => { g.beginPath(); g.arc(x + d * 21, -178 - L * 0.8, 9 * nod, 0, 7); g.fill(); });
        g.fillStyle = '#FF8FA3'; [[-1], [1]].forEach(([d]) => { g.beginPath(); g.arc(x + d * 21, -178 - L * 0.45, 9 * nod, 0, 7); g.fill(); });
      });
      g.fillStyle = 'rgba(255,84,112,0.85)'; g.beginPath(); g.arc(70, -28, 16 * nod, 0, 7); g.fill();
    }
    g.restore();
  }

  window.CLIP = {
    topic: 'oa', title: 'Osteoartritis en 1 minuto', sub: 'El cartílago que se gasta, el dolor mecánico y por qué bajar de peso', color: '#FF8FA3',
    scenes: [
      { say: 'La osteoartritis, en un minuto.', min: 3.5 },
      { say: 'Una rodilla sana: cartílago grueso y liso, que reparte la carga por igual entre el lado medial y el lateral.' },
      { say: 'En la osteoartritis no hay ataque inmune: la carga gasta el cartílago, sobre todo el medial, y el espacio se estrecha de un solo lado.' },
      { say: 'El dolor es mecánico: empeora con el uso y mejora con el reposo. La rigidez dura menos de treinta minutos y el laboratorio es normal.' },
      { say: 'El hueso responde: osteofitos en los bordes, esclerosis y quistes bajo el cartílago.' },
      { say: 'En las manos, los osteofitos forman nódulos: Heberden en las interfalángicas distales y Bouchard en las proximales.' },
      { say: 'Se trata quitando carga: bajar de peso y ejercicio, porque cada kilo menos le quita unos cuatro a la rodilla. Luego antiinflamatorio tópico, y al final, prótesis.' },
      { say: 'Trampa: osteoartritis en metacarpofalángicas, muñeca u hombro no es primaria: busca hemocromatosis o pirofosfato de calcio. Y el diagnóstico es clínico.', min: 8 }
    ],
    draw(t, T) {
      const { C, ease, inOut, text, pill, arrow, titleCard, headline, bg, with_, lerp, rr, ring } = MK, g = MK.g;
      bg(t);
      const k = T.cur, dimFor = (i) => (k >= 6 ? 1 : k === i ? 1 : 0.42);
      if (k === 0) { titleCard(t - T.s(0), this.title, this.sub, this.color); return; }
      const heads = ['', 'La rodilla sana', 'El cartílago medial se gasta', 'Dolor mecánico, laboratorio normal', 'Rx: osteofitos, esclerosis, quistes', 'Manos: Heberden y Bouchard', 'Primero quitar carga', 'Trampa del examen'];
      headline(heads[k], t - T.s(k), this.color);
      const wear = ease(T.f(2, 0.15, 0.65)), rx = ease(T.f(4, 0.05, 0.5));
      let lm = lerp(0.45, 1, ease(T.f(2, 0.1, 0.4))), ll = lerp(0.45, 0.3, ease(T.f(2, 0.1, 0.4)));
      if (k >= 6) { const d = inOut(T.f(6, 0.15, 0.45)); lm = lerp(1, 0.35, d); ll = lerp(0.3, 0.2, d); }
      const lab = (str, x, y, tx, ty, a, col, align = 'left') => { if (a <= 0) return; with_(a, () => { g.strokeStyle = col; g.lineWidth = 3; g.beginPath(); g.moveTo(align === 'left' ? x - 12 : x + 12, y); g.lineTo(tx, ty); g.stroke(); g.fillStyle = col; g.beginPath(); g.arc(tx, ty, 6, 0, 7); g.fill(); text(str, x, y, { size: 28, align, color: col }); }); };

      // 1 · Rodilla
      with_(k === 5 ? 0.42 : 1, () => {
        const a = ease(T.f(1, 0, 0.25));
        layer(a * MK.g.globalAlpha, () => { MK.g.save(); MK.g.translate(0, (1 - a) * 30); knee(t, wear, rx, ease(T.f(1, 0.4, 0.6)) > 0 ? [lm * ease(T.f(1, 0.4, 0.6)), ll * ease(T.f(1, 0.4, 0.6))] : null); MK.g.restore(); });
        with_(ease(T.f(1, 0.4, 0.6)), () => { text('Carga', 150, 182, { size: 24, color: C.gold }); text('Carga', 450, 182, { size: 24, color: C.gold }); });
        with_(ease(T.f(1, 0.55, 0.75)), () => { text('Medial', 170, 862, { size: 28, color: C.ink2 }); text('Lateral', 430, 862, { size: 28, color: C.ink2 }); });
        if (k >= 2) with_(ease(T.f(2, 0.55, 0.75)), () => text('se estrecha', 170, 895, { size: 24, color: C.red }));
        if (k === 2) { g.save(); ring(190, 552, 70, t, { color: C.red }); g.restore(); }
      });
      // 3 · Dolor mecánico
      with_(dimFor(3), () => {
        const a = ease(T.f(3, 0, 0.2)), X0 = 610, X1 = 1020, Y0 = 400, Y1 = 210;
        with_(a, () => {
          g.strokeStyle = C.ink2; g.lineWidth = 4; g.beginPath(); g.moveTo(X0, Y1 - 10); g.lineTo(X0, Y0); g.lineTo(X1, Y0); g.stroke();
          text('Dolor', X0 + 8, Y1 - 6, { size: 24, color: C.ink2, align: 'left', weight: 600 });
          text('Mañana', X0 + 50, Y0 + 30, { size: 22, color: C.ink2, weight: 600 }); text('Noche', X1 - 40, Y0 + 30, { size: 22, color: C.ink2, weight: 600 });
        });
        const u = ease(T.f(3, 0.1, 0.5));
        if (u > 0) { g.strokeStyle = C.blue; g.lineWidth = 8; g.lineCap = 'round'; g.beginPath(); for (let i = 0; i <= 40 * u; i++) { const f = i / 40, x = lerp(X0 + 10, X1 - 10, f), y = lerp(Y0 - 30, Y1 + 25, Math.pow(f, 1.4)); if (i) g.lineTo(x, y); else g.moveTo(x, y); } g.stroke(); }
        with_(ease(T.f(3, 0.35, 0.5)), () => text('Peor con el uso', 815, 440, { size: 26, color: C.blue }));
        pill('Rigidez <30 min', 690, 505, ease(T.f(3, 0.55, 0.7)), { fill: C.cyan, size: 26 });
        pill('Lab normal', 930, 505, ease(T.f(3, 0.75, 0.9)), { fill: C.green, size: 26 });
      });
      // 4 · Signos radiográficos
      with_(dimFor(4), () => {
        lab('Osteofitos', 575, 610, 505, 572, ease(T.f(4, 0.25, 0.4)), C.gold2);
        lab('Esclerosis', 60, 700, 140, 590, ease(T.f(4, 0.45, 0.6)), '#FFFFFF');
        lab('Quistes', 60, 780, 162, 624, ease(T.f(4, 0.65, 0.8)), C.purple);
      });
      // 5 · Manos
      with_(dimFor(5), () => {
        const ha = ease(T.f(5, 0, 0.25)), nod = ease(T.f(5, 0.25, 0.55));
        layer(ha * MK.g.globalAlpha, () => hand(165, 1252, 0.95, 1, nod));
        const s = 0.95, dip = 1252 - s * (178 + 0.8 * 165), pip = 1252 - s * (178 + 0.45 * 165);
        lab('Heberden · IFD', 345, dip, 270, dip, ease(T.f(5, 0.35, 0.5)), C.gold);
        lab('Bouchard · IFP', 345, pip, 270, pip, ease(T.f(5, 0.6, 0.75)), C.pink);
        lab('Base del pulgar', 345, 1225, 232, 1225, ease(T.f(5, 0.8, 0.92)), C.red);
      });
      // 6 · Tratamiento
      if (k >= 6) {
        with_(ease(T.f(6, 0.1, 0.25)), () => {
          text('−1 kg = −4 kg', 800, 705, { size: 48, color: C.gold });
          text('de carga en la rodilla, en cada paso', 800, 752, { size: 24, color: C.ink2, weight: 600 });
        });
        const steps = [['Ejercicio + bajar de peso', C.green], ['AINE tópico', C.cyan], ['AINE oral, corto', C.blue], ['Esteroide intraarticular', C.purple], ['Prótesis', C.pink]];
        steps.forEach(([s, col], i) => {
          const a = ease(T.f(6, 0.4 + i * 0.1, 0.52 + i * 0.1)), y = 1236 - i * 84, x = 570 + i * 22;
          with_(a, () => { rr(x, y - 34, 470 - i * 22, 68, 18); g.fillStyle = 'rgba(20,26,66,0.92)'; g.fill(); g.lineWidth = 4; g.strokeStyle = col; g.stroke(); text(`${i + 1} · ${s}`, x + 22, y, { size: 26, align: 'left', color: C.ink }); });
        });
      }
      // 7 · Trampa
      if (k === 7) {
        const a = ease(T.f(7, 0, 0.12));
        with_(a, () => {
          g.fillStyle = 'rgba(11,14,42,0.94)'; g.fillRect(0, 0, MK.W, MK.H);
          headline(heads[7], t - T.s(7), C.gold);
          text('OA en MCF, muñeca u hombro', 540, 450, { size: 58, color: C.red, maxW: 960 });
          text('No es primaria: busca hemocromatosis (ferritina y saturación de transferrina) o pirofosfato de calcio', 540, 560, { size: 34, color: C.ink2, weight: 600, maxW: 860 });
          with_(ease(T.f(7, 0.62, 0.75)), () => {
            text('Diagnóstico clínico', 540, 800, { size: 62, color: C.gold });
            text('≥45 años, dolor con la actividad y rigidez ≤30 min: no necesitas radiografía', 540, 900, { size: 34, color: C.ink2, weight: 600, maxW: 860 });
          });
        });
      }
    }
  };
})();
