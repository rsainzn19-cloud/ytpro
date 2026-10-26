// Pancreatitis en 1 minuto (tema pancrea). Páncreas y duodeno dibujados aquí: tripsinógeno → tripsina antes de tiempo
// (lito o alcohol), autodigestión, criterios 2 de 3, citocinas y falla orgánica, y gravedad por Atlanta revisada.
window.CLIP = {
  topic: 'pancrea', title: 'Pancreatitis en\u00a01\u00a0minuto', sub: 'Autodigestión, diagnóstico con 2 de 3 y gravedad de Atlanta', color: '#FF9B3D',
  scenes: [
    { say: 'Pancreatitis aguda, en un minuto.', min: 3.5 },
    { say: 'El páncreas fabrica tripsinógeno, una enzima inactiva, y lo manda al duodeno. Solo ahí debe activarse.' },
    { say: 'Si un lito tapa la ampolla, o el alcohol daña la célula, el tripsinógeno se activa dentro del páncreas: se vuelve tripsina.' },
    { say: 'La tripsina activa a otras enzimas y el páncreas se digiere a sí mismo: edema y, en los graves, necrosis.' },
    { say: 'Diagnóstico con dos de tres: dolor epigástrico hacia la espalda, lipasa o amilasa de tres veces el límite o más, o imagen compatible.' },
    { say: 'Las citocinas dan fuga capilar y respuesta inflamatoria sistémica, hasta la falla orgánica: pulmón, riñón o choque.' },
    { say: 'Atlanta revisada: leve, sin falla orgánica. Moderadamente grave, falla menor de cuarenta y ocho horas o complicaciones. Grave, falla de más de cuarenta y ocho horas.' },
    { say: 'Perla: la gravedad la marca la falla orgánica, no la lipasa. Trampa: no dejes ayuno hasta que baje la lipasa, ni antibióticos por necrosis estéril.', min: 7 }
  ],
  draw(t, T) {
    const { C, ease, inOut, lerp, clamp, text, pill, arrow, flow, ring, organ, shapes, titleCard, headline, bg, with_, rr } = MK;
    const g = MK.g;
    bg(t);
    const k = T.cur, dimFor = (i) => (k >= 6 ? 1 : k === i ? 1 : 0.42);
    if (k === 0) { titleCard(t - T.s(0), this.title, this.sub, this.color); return; }
    const heads = ['', 'Enzimas inactivas hacia el duodeno', 'Lito o alcohol: tripsina antes de tiempo', 'Autodigestión: edema y necrosis', 'Diagnóstico: 2 de 3 criterios', 'Citocinas → falla orgánica', 'Gravedad: Atlanta revisada', 'Perla y trampa del examen'];
    headline(heads[k], t - T.s(k), this.color);

    const DX = 250, DY = 420, DR = 135, AMP = [164, 500];
    const duct = [[930, 282], [760, 322], [520, 362], [340, 410], [230, 466], AMP, [150, 511]];
    const block = ease(T.f(2, 0.1, 0.35));            // el lito tapa la ampolla
    const act = ease(T.f(2, 0.45, 0.75));             // tripsinógeno → tripsina
    const dig = ease(T.f(3, 0.1, 0.7));               // autodigestión
    const panc = (sw) => {
      g.beginPath(); g.moveTo(178, 352);
      g.bezierCurveTo(250, 330, 300, 345, 340, 342); g.bezierCurveTo(470, 330, 620, 300, 760, 278);
      g.bezierCurveTo(860, 262, 940, 236, 968, 262); g.bezierCurveTo(985, 285, 965, 312, 940, 320);
      g.bezierCurveTo(860, 342, 700, 372, 560, 398); g.bezierCurveTo(440, 420, 370, 440, 330, 486);
      g.bezierCurveTo(300, 528, 220, 540, 190, 512); g.bezierCurveTo(160, 480, 150, 400, 178, 352); g.closePath();
    };

    // 1 · Anatomía: duodeno, páncreas, conducto; tripsinógeno que viaja al duodeno
    with_(dimFor(1), () => {
      const a = ease(T.f(1, 0, 0.25));
      with_(a, () => {
        // duodeno en C
        g.lineCap = 'round'; g.strokeStyle = '#B85A66'; g.lineWidth = 58; g.beginPath(); g.arc(DX, DY, DR, 1.0, Math.PI * 2 - 1.0); g.stroke();
        g.strokeStyle = '#3A1220'; g.lineWidth = 26; g.beginPath(); g.arc(DX, DY, DR, 1.0, Math.PI * 2 - 1.0); g.stroke();
        // páncreas (se hincha y se tiñe con la autodigestión)
        g.save(); const s = 1 + 0.05 * dig * (0.7 + 0.3 * Math.sin(t * 4));
        g.translate(560, 390); g.scale(s, s); g.translate(-560, -390);
        panc(); g.fillStyle = '#E8B66A'; g.fill();
        g.save(); panc(); g.clip();
        for (let i = 0; i < 46; i++) { const x = 170 + ((i * 97) % 800), y = 250 + ((i * 53) % 290); g.fillStyle = 'rgba(160,100,40,0.22)'; g.beginPath(); g.arc(x, y, 16, 0, 7); g.fill(); }
        if (dig > 0) {
          g.fillStyle = `rgba(255,84,112,${0.45 * dig})`; g.fillRect(0, 0, MK.W, MK.H);
          for (let i = 0; i < 9; i++) { const x = 300 + ((i * 131) % 620), y = 300 + ((i * 71) % 170); g.fillStyle = `rgba(40,10,20,${0.75 * clamp(dig * 2 - i * 0.1)})`; g.beginPath(); g.ellipse(x, y, 22, 14, i, 0, 7); g.fill(); }
        }
        g.restore(); g.restore();
        // conducto pancreático
        g.strokeStyle = '#8A5A2A'; g.lineWidth = 10; g.beginPath(); duct.forEach(([x, y], i) => (i ? g.lineTo(x, y) : g.moveTo(x, y))); g.stroke();
      });
      // tripsinógeno: fluye hasta el duodeno; con el lito se queda y se activa
      const go = ease(T.f(1, 0.25, 0.4));
      if (go > 0 && block < 1) with_(go * (1 - block), () => flow(duct, t, { n: 7, speed: 0.22, color: C.gold, r: 10 }));
      if (block > 0) {
        for (let i = 0; i < 8; i++) {
          const x = 300 + i * 80 + Math.sin(t * 2 + i) * 6, y = lerp(420, 300, i / 7) + 8 + Math.cos(t * 2.4 + i) * 6;
          with_(block, () => { g.fillStyle = act > 0.5 ? C.red : C.gold; g.beginPath(); g.arc(x, y, 10, 0, 7); g.fill(); });
        }
      }
      with_(ease(T.f(1, 0.2, 0.4)), () => { text('Páncreas', 770, 222, { size: 30, color: C.ink2 }); text('Duodeno', 120, 222, { size: 30, color: C.ink2 }); });
      const tg = ease(T.f(1, 0.35, 0.6));
      if (act < 0.5) pill('Tripsinógeno', 600, 470, tg * (1 - act * 2), { fill: C.gold, size: 30 });
    });

    // 2 · Lito en la ampolla (o alcohol): tripsina dentro del páncreas
    with_(dimFor(2), () => {
      if (block > 0) {
        g.save(); g.translate(AMP[0], AMP[1]); g.scale(lerp(0.4, 1, block), lerp(0.4, 1, block)); g.globalAlpha *= clamp(block * 2);
        g.fillStyle = '#D9C27A'; g.beginPath(); g.moveTo(-20, -6); g.quadraticCurveTo(-14, -22, 6, -20); g.quadraticCurveTo(24, -14, 20, 6); g.quadraticCurveTo(12, 22, -6, 20); g.quadraticCurveTo(-24, 12, -20, -6); g.fill();
        g.strokeStyle = '#6B5A2A'; g.lineWidth = 3; g.stroke(); g.restore();
      }
      pill('Lito o alcohol', 175, 640, ease(T.f(2, 0.15, 0.35)), { fill: C.gold, size: 28 });
      arrow(175, 612, 172, 530, T.f(2, 0.25, 0.4), { color: C.gold, width: 5 });
      if (k === 2) ring(AMP[0], AMP[1], 40, t, { color: C.gold });
      pill('Tripsina', 600, 470, clamp(act * 2 - 1), { fill: C.red, color: '#fff', size: 32 });
    });

    // 3 · Autodigestión
    with_(dimFor(3), () => {
      pill('Elastasa', 470, 560, ease(T.f(3, 0.15, 0.35)), { fill: C.pink, size: 28 });
      pill('Fosfolipasa', 760, 560, ease(T.f(3, 0.3, 0.5)), { fill: C.pink, size: 28 });
      with_(ease(T.f(3, 0.55, 0.75)), () => text('Edema · necrosis', 880, 470, { size: 28, color: C.red }));
    });

    // 4 · Diagnóstico: 2 de 3
    with_(dimFor(4), () => {
      const cards = [['Dolor en cinturón', 190], ['Lipasa ≥3×', 540], ['Imagen', 890]];
      cards.forEach(([l, x], i) => {
        const a = ease(T.f(4, 0.1 + i * 0.22, 0.25 + i * 0.22));
        if (a <= 0) return;
        with_(a, () => {
          rr(x - 150, 690 - (1 - a) * 20, 300, 76, 22); g.fillStyle = 'rgba(20,26,66,0.95)'; g.fill(); g.lineWidth = 4; g.strokeStyle = C.orange; g.stroke();
          text(l, x, 728 - (1 - a) * 20, { size: 30, color: C.ink });
        });
      });
      with_(ease(T.f(4, 0.8, 0.95)), () => text('Basta con 2 de 3', 540, 806, { size: 36, color: C.gold }));
    });

    // 5 · Citocinas → falla orgánica
    with_(dimFor(5), () => {
      pill('Citocinas · SRIS', 540, 878, ease(T.f(5, 0, 0.2)), { fill: C.purple, color: '#fff', size: 30 });
      const tg = [[230, 990, shapes.lungs, 'Pulmón'], [540, 990, shapes.kidney, 'Riñón'], [850, 990, shapes.heart, 'Choque']];
      tg.forEach(([x, y, fn, l], i) => {
        const a0 = 0.25 + i * 0.18;
        if (i !== 1) arrow(540 + (i - 1) * 130, 900, x + (i - 1) * -60, y - 50, T.f(5, a0, a0 + 0.12), { color: C.purple, width: 5 });
        organ(fn, x + (i === 1 ? 20 : 0), y, 0.42, ease(T.f(5, a0 + 0.08, a0 + 0.22)));
        with_(ease(T.f(5, a0 + 0.12, a0 + 0.25)), () => text(l, x, y + 80, { size: 28, color: C.ink2 }));
      });
    });

    // 6 · Atlanta revisada
    with_(dimFor(6), () => {
      const cs = [['Leve', 'Sin falla orgánica', C.green, 190], ['Mod. grave', 'Falla <48 h o complicaciones', C.gold, 540], ['Grave', 'Falla orgánica >48 h', C.red, 890]];
      cs.forEach(([h, s, col, x], i) => {
        const a = ease(T.f(6, 0.05 + i * 0.27, 0.2 + i * 0.27));
        if (a <= 0) return;
        with_(a, () => {
          rr(x - 150, 1130 - (1 - a) * 20, 300, 160, 24); g.fillStyle = 'rgba(20,26,66,0.95)'; g.fill(); g.lineWidth = 5; g.strokeStyle = col; g.stroke();
          text(h, x, 1170 - (1 - a) * 20, { size: 34, color: col });
          text(s, x, 1238 - (1 - a) * 20, { size: 26, color: C.ink2, weight: 600, maxW: 260 });
        });
      });
    });

    // 7 · Perla y trampa
    if (k === 7) {
      const a = ease(T.f(7, 0, 0.15));
      with_(a, () => {
        g.fillStyle = 'rgba(11,14,42,0.88)'; g.fillRect(0, 0, MK.W, MK.H);
        headline(heads[7], t - T.s(7), C.gold);
        text('Grave = falla >48 h', 540, 450, { size: 70, color: C.gold });
        text('La lipasa no predice la gravedad', 540, 540, { size: 34, color: C.ink2, weight: 600 });
        with_(ease(T.f(7, 0.4, 0.55)), () => {
          text('Nada de “por si acaso”', 540, 770, { size: 66, color: C.red });
          text('No esperes a que baje la lipasa para comer', 540, 860, { size: 34, color: C.ink2, weight: 600, maxW: 900 });
          text('Necrosis estéril: sin antibióticos profilácticos', 540, 912, { size: 34, color: C.ink2, weight: 600, maxW: 900 });
        });
      });
    }
  }
};
