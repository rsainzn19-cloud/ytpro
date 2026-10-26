// Linfomas en 1 minuto (tema linfo). Mismo formato que hta.js.
// Dibujos propios: ganglio linfático con folículos, célula de Reed-Sternberg con fondo inflamatorio, silueta con ganglios.
(() => {
  const { C, clamp, lerp, ease, pop, with_, rr } = MK;
  function node(x, y, s, a, t, hl) {
    if (a <= 0) return; const g = MK.g;
    g.save(); g.translate(x, y); const k = s * lerp(0.6, 1, pop(a)); g.scale(k, k); g.globalAlpha *= clamp(a * 2);
    const bean = () => { g.beginPath(); g.moveTo(-170, 0); g.bezierCurveTo(-170, -110, 170, -120, 175, -10); g.bezierCurveTo(178, 30, 150, 20, 140, 40); g.bezierCurveTo(130, 70, 160, 100, 120, 110); g.bezierCurveTo(40, 130, -170, 120, -170, 0); g.closePath(); };
    bean(); g.fillStyle = '#2E4F8F'; g.fill(); g.lineWidth = 8; g.strokeStyle = '#8FB8FF'; g.stroke();
    // paracorteza (zona T)
    g.fillStyle = 'rgba(98,227,140,0.22)'; g.beginPath(); g.ellipse(-5, 25, 105, 55, 0, 0, 7); g.fill();
    // folículos B en la corteza
    const F = [[-125, -20], [-85, -72], [-20, -92], [50, -88], [110, -55], [-115, 60], [-55, 98], [25, 105]];
    F.forEach(([fx, fy], i) => { g.fillStyle = '#6F98E8'; g.beginPath(); g.arc(fx, fy, 28, 0, 7); g.fill(); g.fillStyle = '#BFD6FF'; g.beginPath(); g.arc(fx + 4, fy + 2, 13 + (hl ? 3 * Math.sin(t * 3 + i) : 0), 0, 7); g.fill(); });
    // hilio
    g.strokeStyle = C.organ; g.lineWidth = 9; g.beginPath(); g.moveTo(145, 45); g.lineTo(215, 60); g.stroke();
    g.restore();
  }
  function rsField(x, y, a, t) {
    if (a <= 0) return; const g = MK.g;
    g.save(); g.globalAlpha *= clamp(a);
    g.fillStyle = 'rgba(255,143,163,0.10)'; g.beginPath(); g.arc(x, y, 160, 0, 7); g.fill();
    for (let i = 0; i < 34; i++) {
      const th = i * 2.399, d = 95 + (i * 37 % 60), px = x + Math.cos(th) * d, py = y + Math.sin(th) * d * 0.9;
      if (i % 5 === 0) { g.fillStyle = '#F7B7A3'; g.beginPath(); g.arc(px, py, 14, 0, 7); g.fill(); g.fillStyle = C.orange; for (let j = 0; j < 5; j++) { g.beginPath(); g.arc(px - 6 + (j % 3) * 6, py - 4 + Math.floor(j / 3) * 8, 2.6, 0, 7); g.fill(); } }
      else { g.fillStyle = '#4B3A9E'; g.beginPath(); g.arc(px, py, 10, 0, 7); g.fill(); }
    }
    g.restore();
  }
  function rsCell(x, y, a) {
    if (a <= 0) return; const g = MK.g;
    g.save(); g.translate(x, y); const s = lerp(0.5, 1, pop(a)); g.scale(s, s); g.globalAlpha *= clamp(a * 2);
    g.fillStyle = '#F2E1F0'; g.beginPath(); g.ellipse(0, 0, 82, 70, 0, 0, 7); g.fill(); g.lineWidth = 4; g.strokeStyle = '#B48CFF'; g.stroke();
    for (const sx of [-1, 1]) { g.fillStyle = '#7A5FC9'; g.beginPath(); g.ellipse(sx * 30, 0, 27, 38, sx * 0.15, 0, 7); g.fill(); g.fillStyle = C.red; g.beginPath(); g.arc(sx * 30, -2, 11, 0, 7); g.fill(); }
    g.restore();
  }
  // Silueta con cadenas ganglionares; lit = {índice: intensidad}
  const NODES = (cx) => [[cx - 26, 765], [cx + 26, 765], [cx - 50, 790], [cx, 830], [cx + 74, 830], [cx - 74, 830], [cx, 925], [cx - 40, 985], [cx + 40, 985]];
  function body(cx, a) {
    if (a <= 0) return; const g = MK.g;
    with_(a, () => {
      g.fillStyle = '#2A3170';
      g.beginPath(); g.arc(cx, 720, 34, 0, 7); g.fill();
      g.fillRect(cx - 14, 750, 28, 20);
      rr(cx - 78, 768, 156, 222, 40); g.fill();
      rr(cx - 112, 778, 32, 175, 16); g.fill(); rr(cx + 80, 778, 32, 175, 16); g.fill();
      rr(cx - 70, 975, 60, 175, 22); g.fill(); rr(cx + 10, 975, 60, 175, 22); g.fill();
      g.strokeStyle = 'rgba(201,206,255,0.25)'; g.lineWidth = 3; g.setLineDash([8, 8]); g.beginPath(); g.moveTo(cx - 80, 880); g.lineTo(cx + 80, 880); g.stroke(); g.setLineDash([]);
      NODES(cx).forEach(([x, y]) => { g.fillStyle = '#4A5AA8'; g.beginPath(); g.arc(x, y, 10, 0, 7); g.fill(); });
    });
  }
  function lit(x, y, p, col, t) {
    if (p <= 0) return; const g = MK.g;
    g.save(); g.globalAlpha *= clamp(p); g.fillStyle = col; g.beginPath(); g.arc(x, y, 10 + 6 * pop(p), 0, 7); g.fill();
    g.globalAlpha *= 0.35; g.beginPath(); g.arc(x, y, 24 + 3 * Math.sin(t * 4), 0, 7); g.fill(); g.restore();
  }

  window.CLIP = {
    topic: 'linfo', title: 'Linfomas en 1 minuto', sub: 'Hodgkin contra no Hodgkin, y los síntomas B', color: '#62E38C',
    scenes: [
      { say: 'Los linfomas, en un minuto.', min: 3.5 },
      { say: 'Un ganglio normal tiene folículos de linfocitos B en la corteza y linfocitos T en la paracorteza. Casi todos los linfomas vienen de linfocitos B.' },
      { say: 'En el linfoma de Hodgkin hay pocas células de Reed Sternberg, con dos núcleos en ojos de búho, CD quince y CD treinta positivas, en un fondo inflamatorio.' },
      { say: 'El Hodgkin avanza de forma contigua, de un grupo de ganglios al vecino. Lo típico: cuello o mediastino en un adulto joven.' },
      { say: 'El no Hodgkin es más común, en adultos mayores. Salta a ganglios lejanos y sale del ganglio: estómago, piel o médula.' },
      { say: 'Los síntomas B son fiebre mayor de treinta y ocho grados, diaforesis nocturna y pérdida de más del diez por ciento del peso en seis meses.' },
      { say: 'Resumen: el Hodgkin tiene Reed Sternberg y avanza contiguo. El no Hodgkin salta y es extraganglionar.' },
      { say: 'Trampa: no diagnostiques linfoma con aspiración con aguja fina. Necesitas la arquitectura del ganglio: biopsia escisional.', min: 7 }
    ],
    draw(t, T) {
      const { text, pill, arrow, ring, titleCard, headline, bg } = MK;
      const g = MK.g;
      bg(t);
      const k = T.cur, dimFor = (i) => (k >= 6 ? 1 : k === i ? 1 : 0.42);
      if (k === 0) { titleCard(t - T.s(0), this.title, this.sub, this.color); return; }
      const heads = ['', 'El ganglio: folículos B y zona T', 'Hodgkin: Reed-Sternberg', 'Hodgkin: de ganglio a ganglio', 'No Hodgkin: salta y sale del ganglio', 'Síntomas B', 'Resumen: Hodgkin contra no Hodgkin', 'Trampa del examen'];
      headline(heads[k], t - T.s(k), this.color);

      // 1 · Ganglio normal
      with_(dimFor(1), () => {
        node(270, 400, 1, ease(T.f(1, 0, 0.25)), t, k === 1);
        pill('Folículos B', 150, 570, ease(T.f(1, 0.25, 0.45)), { fill: '#8FB8FF', size: 26 });
        pill('Zona T', 380, 570, ease(T.f(1, 0.4, 0.6)), { fill: C.green, size: 26 });
        with_(ease(T.f(1, 0.65, 0.85)), () => text('Casi todos: linfocitos B', 270, 230, { size: 28, color: '#BFD6FF' }));
      });

      // 2 · Reed-Sternberg
      with_(dimFor(2), () => {
        rsField(790, 400, ease(T.f(2, 0.35, 0.65)), t);
        rsCell(790, 400, ease(T.f(2, 0.05, 0.3)));
        if (k === 2) ring(790, 400, 95, t, { color: C.purple });
        pill('Reed-Sternberg', 790, 578, ease(T.f(2, 0.15, 0.35)), { fill: C.purple, color: '#fff', size: 28 });
        with_(ease(T.f(2, 0.45, 0.65)), () => text('CD15+ · CD30+', 790, 225, { size: 30, color: C.gold }));
      });

      // 3 · Hodgkin: diseminación contigua
      with_(dimFor(3), () => {
        const cx = 270, N = NODES(cx), a = ease(T.f(3, 0, 0.2));
        with_(a, () => text('Hodgkin: contiguo', cx, 660, { size: 32, color: C.purple }));
        body(cx, a);
        const seq = [0, 2, 3, 4];
        seq.forEach((ni, i) => {
          const p = ease(T.f(3, 0.2 + i * 0.15, 0.32 + i * 0.15));
          lit(N[ni][0], N[ni][1], p, C.purple, t);
          if (i > 0) { const [x1, y1] = N[seq[i - 1]], [x2, y2] = N[ni]; arrow(x1, y1, x2, y2, T.f(3, 0.12 + i * 0.15, 0.24 + i * 0.15), { color: C.purple, width: 4 }); }
        });
        if (k === 3) with_(ease(T.f(3, 0.8, 0.95)), () => text('cuello · mediastino', cx, 1180, { size: 26, color: C.ink2, weight: 600 }));
      });

      // 4 · No Hodgkin: salta y extraganglionar
      with_(dimFor(4), () => {
        const cx = 790, N = NODES(cx), a = ease(T.f(4, 0, 0.2));
        with_(a, () => text('No Hodgkin: salta', cx, 660, { size: 32, color: C.green }));
        body(cx, a);
        // ganglios lejanos
        lit(N[1][0], N[1][1], ease(T.f(4, 0.15, 0.3)), C.green, t);
        lit(N[7][0], N[7][1], ease(T.f(4, 0.3, 0.45)), C.green, t);
        arrow(N[1][0], N[1][1], N[7][0] + 6, N[7][1] - 14, T.f(4, 0.22, 0.38), { color: C.green, width: 4, cx: cx + 170, cy: 880, dash: [10, 8] });
        // extraganglionar: estómago, piel, médula
        const eg = ease(T.f(4, 0.5, 0.7));
        if (eg > 0) with_(eg, () => {
          g.fillStyle = C.orange; g.beginPath(); g.ellipse(cx + 30, 862, 26, 16, -0.3, 0, 7); g.fill();
          g.fillStyle = C.gold; rr(cx + 84, 880, 24, 34, 10); g.fill();
          g.fillStyle = C.red; rr(cx - 62, 1040, 44, 70, 14); g.fill();
        });
        with_(ease(T.f(4, 0.55, 0.75)), () => { text('Estómago', cx + 172, 845, { size: 24, color: C.orange }); text('Piel', cx + 170, 915, { size: 24, color: C.gold }); text('Médula', cx - 150, 1075, { size: 24, color: C.red }); });
        arrow(cx + 118, 850, cx + 62, 860, T.f(4, 0.6, 0.75), { color: C.orange, width: 3 });
        if (k === 4) with_(ease(T.f(4, 0.8, 0.95)), () => text('adultos mayores · más común', cx, 1180, { size: 26, color: C.ink2, weight: 600 }));
      });

      // 5 · Síntomas B
      with_(dimFor(5), () => {
        with_(ease(T.f(5, 0, 0.15)), () => text('Síntomas B', 540, 1200, { size: 30, color: C.ink }));
        pill('Fiebre > 38 °C', 190, 1265, ease(T.f(5, 0.1, 0.3)), { fill: C.red, color: '#fff', size: 26 });
        pill('Diaforesis nocturna', 535, 1265, ease(T.f(5, 0.35, 0.55)), { fill: C.blue, size: 26 });
        pill('Peso ↓ >10% en 6 m', 875, 1265, ease(T.f(5, 0.6, 0.8)), { fill: C.gold, size: 26 });
      });

      // 6 · Resumen: etiquetas finales
      if (k === 6) with_(ease(T.f(6, 0.1, 0.35)), () => {
        g.lineWidth = 4; g.strokeStyle = C.purple; rr(565, 182, 450, 438, 28); g.stroke();
        g.strokeStyle = C.purple; rr(60, 632, 420, 535, 28); g.stroke();
        g.strokeStyle = C.green; rr(545, 632, 490, 535, 28); g.stroke();
      });

      // 7 · Trampa
      if (k === 7) {
        const a = ease(T.f(7, 0, 0.15));
        with_(a, () => {
          g.fillStyle = 'rgba(11,14,42,0.88)'; g.fillRect(0, 0, MK.W, MK.H);
          headline(heads[7], t - T.s(7), C.gold);
          text('Aguja fina: NO', 540, 470, { size: 76, color: C.red });
          text('pierde la arquitectura del ganglio', 540, 560, { size: 36, color: C.ink2, weight: 600 });
          with_(ease(T.f(7, 0.45, 0.6)), () => {
            text('Biopsia escisional', 540, 790, { size: 70, color: C.green });
            text('o con aguja gruesa, nunca solo citología', 540, 880, { size: 34, color: C.ink2, weight: 600, maxW: 860 });
          });
        });
      }
    }
  };
})();
