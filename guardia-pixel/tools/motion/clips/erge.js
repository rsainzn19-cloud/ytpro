// ERGE en 1 minuto (tema erge). Esófago, EEI, diafragma y estómago dibujados aquí: barrera competente, relajación
// transitoria y hernia hiatal, síntomas, datos de alarma (DOPA-V), prueba con IBP vs endoscopia, y Barrett.
window.CLIP = {
  topic: 'erge', title: 'ERGE en 1 minuto', sub: 'El esfínter que se abre a destiempo, y cuándo pedir endoscopia', color: '#B48CFF',
  scenes: [
    { say: 'Reflujo gastroesofágico, en un minuto.', min: 3.5 },
    { say: 'El esfínter esofágico inferior solo se abre para dejar pasar el bolo. El diafragma lo abraza y refuerza la barrera.' },
    { say: 'En la ERGE, el esfínter se relaja sin deglutir: es lo más frecuente. Con hernia hiatal, sube al tórax, pierde el diafragma, y el ácido sube.' },
    { say: 'Los síntomas típicos son pirosis y regurgitación. También tos crónica, ronquera, asma y dolor torácico no cardiaco.' },
    { say: 'Datos de alarma, DOPA V: disfagia, odinofagia, pérdida de peso, anemia o sangrado, y vómito persistente.' },
    { say: 'Sin alarma, no pidas endoscopia: inhibidor de bomba ocho semanas, antes del desayuno. Con alarma, o sin respuesta, endoscopia.' },
    { say: 'Con años de reflujo aparece Barrett: metaplasia intestinal en el esófago distal, precursora del adenocarcinoma. Sin displasia, se vigila con endoscopia.' },
    { say: 'Trampa: dolor torácico por reflujo en un hombre de cincuenta y ocho años con factores de riesgo. Primero descarta isquemia: electrocardiograma y troponina.', min: 7 }
  ],
  draw(t, T) {
    const { C, ease, inOut, lerp, clamp, text, pill, arrow, flow, ring, titleCard, headline, bg, with_, rr } = MK;
    const g = MK.g;
    bg(t);
    const k = T.cur, dimFor = (i) => (k >= 6 ? 1 : k === i ? 1 : 0.42);
    if (k === 0) { titleCard(t - T.s(0), this.title, this.sub, this.color); return; }
    const heads = ['', 'La barrera: EEI y diafragma', 'Se relaja a destiempo + hernia hiatal', 'Síntomas típicos y atípicos', 'Datos de alarma: DOPA-V', 'Sin alarma: IBP, no endoscopia', 'Barrett: precursor de adenocarcinoma', 'Trampa del examen'];
    headline(heads[k], t - T.s(k), this.color);

    const EX = 330, ACID = 'rgba(200,235,90,0.85)';
    const her = ease(T.f(2, 0.55, 0.8)), dy = 0, eY = 580 - 80 * her;
    // apertura del EEI: el bolo en la escena 1; relajaciones transitorias en la 2; reflujo de fondo después
    const bolY = lerp(190, 700, inOut(T.f(1, 0.45, 0.85)));
    let open = k === 1 ? clamp(1 - Math.abs(bolY - eY) / 90) : 0;
    if (k === 2) open = ease(T.f(2, 0.15, 0.3)) * (0.75 + 0.25 * Math.sin(t * 3));
    if (k > 2) open = 0.6;
    const reflux = k === 2 ? ease(T.f(2, 0.25, 0.45)) : k > 2 ? 0.8 : 0;
    const bar = ease(T.f(6, 0.15, 0.5));

    const stomach = () => {
      g.beginPath(); g.moveTo(298, 592 + dy);
      g.bezierCurveTo(240, 600 + dy, 175, 640 + dy, 180, 730 + dy); g.bezierCurveTo(185, 850 + dy, 300, 930 + dy, 450, 915 + dy);
      g.bezierCurveTo(560, 905 + dy, 640, 840 + dy, 650, 770 + dy); g.lineTo(668, 742 + dy);
      g.bezierCurveTo(600, 755 + dy, 560, 790 + dy, 500, 780 + dy); g.bezierCurveTo(420, 765 + dy, 370, 700 + dy, 362, 592 + dy); g.closePath();
    };

    // 1 · Anatomía: esófago, EEI, diafragma, estómago con ácido
    with_(k === 2 ? 1 : dimFor(1), () => {
      const a = ease(T.f(1, 0, 0.25));
      with_(a, () => {
        // estómago
        stomach(); g.fillStyle = '#C9606E'; g.fill();
        g.save(); stomach(); g.clip();
        g.fillStyle = ACID; g.beginPath(); g.moveTo(150, 960 + dy);
        for (let x = 150; x <= 700; x += 10) g.lineTo(x, 815 + dy + Math.sin(x / 35 + t * 2) * 6);
        g.lineTo(700, 960 + dy); g.closePath(); g.fill();
        g.restore();
        // hernia hiatal: bolsa de estómago que sube por el hiato junto con el EEI
        if (her > 0) {
          g.fillStyle = '#C9606E'; g.beginPath(); g.moveTo(EX - 32, 600);
          g.bezierCurveTo(EX - 40, 580, EX - 62, eY + 40, EX - 36, eY + 4); g.lineTo(EX + 36, eY + 4);
          g.bezierCurveTo(EX + 62, eY + 40, EX + 40, 580, EX + 32, 600); g.closePath(); g.fill();
        }
        // esófago (pared y luz)
        g.fillStyle = '#D98A96'; rr(EX - 45, 190, 90, eY - 190 + 16, 20); g.fill();
        g.fillStyle = '#3A1220';
        const lw = lerp(4, 44, open);
        rr(EX - 23, 190, 46, eY - 190 - 30, 14); g.fill();
        g.beginPath(); g.moveTo(EX - 23, eY - 45); g.lineTo(EX - lw / 2, eY); g.lineTo(EX - lw / 2, eY + 14); g.lineTo(EX + lw / 2, eY + 14); g.lineTo(EX + lw / 2, eY); g.lineTo(EX + 23, eY - 45); g.closePath(); g.fill();
        // EEI: anillo muscular
        g.fillStyle = C.purple;
        rr(EX - 50 - 6 * (1 - open), eY - 22, 26, 40, 12); g.fill(); rr(EX + 24 + 6 * (1 - open), eY - 22, 26, 40, 12); g.fill();
        // diafragma (hiato que abraza al EEI)
        g.strokeStyle = '#A8455A'; g.lineWidth = 26; g.lineCap = 'round';
        g.beginPath(); g.moveTo(60, 640); g.quadraticCurveTo(170, 575, 272, 588); g.stroke();
        g.beginPath(); g.moveTo(388, 588); g.quadraticCurveTo(520, 575, 640, 640); g.stroke();
      });
      // bolo que baja
      if (k === 1 && T.f(1, 0.45, 0.85) > 0 && T.f(1, 0.45, 0.85) < 1) { g.fillStyle = '#E2B87A'; g.beginPath(); g.ellipse(EX, bolY, 18, 24, 0, 0, 7); g.fill(); }
      with_(ease(T.f(1, 0.2, 0.4)), () => text('Esófago', 480, 250, { size: 30, color: C.ink2 }));
      pill('EEI', 490, 495, ease(T.f(1, 0.3, 0.5)), { fill: C.purple, color: '#fff', size: 30 });
      arrow(446, 497, EX + 58, eY, T.f(1, 0.35, 0.5), { color: C.purple, width: 5 });
      with_(ease(T.f(1, 0.55, 0.75)), () => text('Diafragma', 140, 548, { size: 28, color: C.pink }));
      pill('Ácido', 470, 862 + dy, ease(T.f(1, 0.6, 0.8)), { fill: '#C8EB5A', size: 28 });
    });

    // 2 · Relajación transitoria y hernia hiatal: el ácido sube
    with_(dimFor(2), () => {
      if (reflux > 0) with_(reflux, () => flow([[EX, 700], [EX, eY], [EX, 230]], t, { n: 9, speed: 0.35, color: '#C8EB5A', r: 9 }));
      with_(ease(T.f(2, 0.1, 0.3)), () => { text('Relajación', 165, 300, { size: 28, color: C.purple }); text('transitoria', 165, 334, { size: 28, color: C.purple }); });
      with_(ease(T.f(2, 0.6, 0.8)), () => text('Hernia hiatal', 160, 440, { size: 28, color: C.orange }));
      if (k === 2 && her > 0) ring(EX, eY + 30, 70, t, { color: C.orange });
    });

    // 3 · Síntomas (columna derecha)
    with_(dimFor(3), () => {
      with_(ease(T.f(3, 0, 0.15)), () => text('Síntomas', 870, 222, { size: 32, color: C.gold }));
      pill('Pirosis', 870, 285, ease(T.f(3, 0.08, 0.25)), { fill: C.orange, size: 30 });
      pill('Regurgitación', 870, 352, ease(T.f(3, 0.2, 0.37)), { fill: C.orange, size: 30 });
      with_(ease(T.f(3, 0.45, 0.65)), () => {
        text('Atípicos:', 870, 420, { size: 26, color: C.dim });
        text('tos, ronquera, asma', 870, 456, { size: 26, color: C.ink2, weight: 600 });
        text('dolor torácico', 870, 490, { size: 26, color: C.ink2, weight: 600 });
      });
    });

    // 4 · Datos de alarma: DOPA-V
    with_(dimFor(4), () => {
      const a = ease(T.f(4, 0, 0.15));
      if (a > 0) with_(a, () => { rr(705, 545, 330, 330, 26); g.fillStyle = 'rgba(20,26,66,0.92)'; g.fill(); g.lineWidth = 5; g.strokeStyle = C.red; g.stroke(); text('Alarma', 870, 585, { size: 32, color: C.red }); });
      ['Disfagia', 'Odinofagia', 'Pérdida de peso', 'Anemia o sangrado', 'Vómito persistente'].forEach((l, i) => {
        with_(ease(T.f(4, 0.12 + i * 0.13, 0.25 + i * 0.13)), () => {
          text(l[0], 735, 640 + i * 48, { size: 30, color: C.red, align: 'left' });
          const w = g.measureText(l[0]).width + 1;
          text(l.slice(1), 735 + w, 640 + i * 48, { size: 30, color: C.ink, align: 'left', weight: 600 });
        });
      });
    });

    // 5 · Manejo: sin alarma → IBP; con alarma o sin respuesta → endoscopia
    with_(dimFor(5), () => {
      pill('Sin alarma', 180, 1000, ease(T.f(5, 0.02, 0.18)), { fill: C.green, size: 30 });
      arrow(285, 1000, 395, 1000, T.f(5, 0.15, 0.27), { color: C.ink2, width: 6 });
      pill('IBP 8 sem, antes del desayuno', 690, 1000, ease(T.f(5, 0.22, 0.4)), { fill: C.purple, color: '#fff', size: 30 });
      pill('Alarma o sin respuesta', 245, 1105, ease(T.f(5, 0.55, 0.7)), { fill: C.red, color: '#fff', size: 30 });
      arrow(440, 1105, 560, 1105, T.f(5, 0.68, 0.78), { color: C.ink2, width: 6 });
      pill('Endoscopia', 700, 1105, ease(T.f(5, 0.75, 0.9)), { fill: C.cyan, size: 30 });
    });

    // 6 · Barrett: lengüetas color salmón en el esófago distal
    with_(dimFor(6), () => {
      if (bar > 0) {
        g.save(); rr(EX - 45, 190, 90, eY - 190 + 16, 20); g.clip();
        g.fillStyle = '#FF9470';
        g.fillRect(EX - 45, eY - 30, 90, 60);
        [[-30, 120], [-8, 160], [14, 105], [32, 140]].forEach(([ox, h]) => {
          const hh = h * bar; g.beginPath(); g.moveTo(EX + ox - 14, eY - 20); g.quadraticCurveTo(EX + ox - 10, eY - 20 - hh, EX + ox, eY - 22 - hh); g.quadraticCurveTo(EX + ox + 10, eY - 20 - hh, EX + ox + 14, eY - 20); g.closePath(); g.fill();
        });
        g.restore();
      }
      pill('Barrett', 495, 385, ease(T.f(6, 0.3, 0.5)), { fill: '#FF9470', size: 30 });
      arrow(430, 390, EX + 50, 430, T.f(6, 0.35, 0.5), { color: '#FF9470', width: 5 });
      with_(ease(T.f(6, 0.5, 0.7)), () => text('Metaplasia intestinal → adenocarcinoma', 540, 1210, { size: 30, color: '#FF9470', maxW: 960 }));
      with_(ease(T.f(6, 0.75, 0.92)), () => text('Sin displasia: vigilancia con endoscopia', 540, 1262, { size: 28, color: C.ink2, weight: 600 }));
    });

    // 7 · Trampa
    if (k === 7) {
      const a = ease(T.f(7, 0, 0.15));
      with_(a, () => {
        g.fillStyle = 'rgba(11,14,42,0.88)'; g.fillRect(0, 0, MK.W, MK.H);
        headline(heads[7], t - T.s(7), C.gold);
        text('Dolor torácico “por reflujo”', 540, 470, { size: 60, color: C.red, maxW: 960 });
        text('Hombre de 58 años con factores de riesgo', 540, 560, { size: 34, color: C.ink2, weight: 600 });
        with_(ease(T.f(7, 0.45, 0.6)), () => {
          text('Primero ECG y troponina', 540, 790, { size: 66, color: C.gold });
          text('Descarta isquemia; después piensa en el esófago', 540, 880, { size: 34, color: C.ink2, weight: 600, maxW: 900 });
        });
      });
    }
  }
};
