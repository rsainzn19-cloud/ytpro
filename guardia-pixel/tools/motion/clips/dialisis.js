// Diálisis en 1 minuto (tema dialisis): indicaciones urgentes (AEIOU), cómo limpia la hemodiálisis, acceso y diálisis peritoneal.
// T.s(i)/T.e(i)/T.d(i): inicio, fin y duración de la escena i; T.f(i, a, b): avance 0→1 entre las fracciones a y b de la escena i.
window.CLIP = {
  topic: 'dialisis', title: 'Diálisis en 1 minuto', sub: 'Cuándo dializar de urgencia (AEIOU) y cómo funciona cada modalidad', color: '#62E38C',
  scenes: [
    { say: 'La diálisis, en un minuto.', min: 3.5 },
    { say: 'Se dializa de urgencia cuando falla el manejo médico: A, acidosis grave. E, electrólitos, sobre todo potasio. I, intoxicaciones como litio o metanol. O, sobrecarga de volumen. U, uremia.' },
    { say: 'En la hemodiálisis, la sangre y el dializado corren en sentidos opuestos a los lados de una membrana. La urea y el potasio cruzan por difusión; los eritrocitos y la albúmina, no.' },
    { say: 'Además, la presión empuja agua al dializado: es la ultrafiltración, que quita volumen hasta el peso seco.' },
    { say: 'El mejor acceso es la fístula arteriovenosa. Después, el injerto, y al final el catéter, con más infecciones y trombosis.' },
    { say: 'En la diálisis peritoneal, la membrana es el peritoneo. El líquido con glucosa entra, saca urea y potasio, jala agua y se drena. Se hace en casa.' },
    { say: 'Perla: la pericarditis urémica se trata con diálisis, no con antiinflamatorios. Se dializa por AEIOU, no por una cifra. Y el mejor tratamiento de la enfermedad renal terminal es el trasplante.', min: 8 }
  ],
  draw(t, T) {
    const { C, ease, inOut, lerp, clamp, text, pill, arrow, ring, titleCard, headline, bg, with_, rr } = MK;
    const g = MK.g;
    bg(t);
    const k = T.cur;
    if (k === 0) { titleCard(t - T.s(0), this.title, this.sub, this.color); return; }
    const heads = ['', 'Diálisis urgente: AEIOU', 'Hemodiálisis: difusión', 'Ultrafiltración: sale el agua', 'El acceso vascular', 'Diálisis peritoneal', 'Perla para el examen'];
    headline(heads[k], t - T.s(k), this.color);
    const back = k >= 6 ? 1 : k === 5 ? ease(T.f(5, 0.78, 0.96)) : 0;
    const zone = (...sc) => (sc.includes(k) ? 1 : lerp(0.42, 1, back));
    const dot = (x, y, r, col, a = 1) => with_(a, () => { g.fillStyle = col; g.beginPath(); g.arc(x, y, r, 0, 7); g.fill(); });
    const drop = (x, y, s, col) => { g.save(); g.translate(x, y); g.scale(s, s); g.fillStyle = col; g.beginPath(); g.moveTo(0, -12); g.bezierCurveTo(8, -2, 10, 4, 0, 10); g.bezierCurveTo(-10, 4, -8, -2, 0, -12); g.fill(); g.restore(); };

    // ── 1 · AEIOU (columna izquierda)
    with_(zone(1), () => {
      const items = [['A', 'Acidosis grave', C.gold], ['E', 'K⁺ refractario', C.green], ['I', 'Intoxicaciones', C.purple], ['O', 'Sobrecarga', C.blue], ['U', 'Uremia', C.red]];
      items.forEach(([l, w, col], i) => {
        const p = ease(T.f(1, 0.1 + i * 0.16, 0.22 + i * 0.16));
        if (p <= 0) return;
        const y = 240 + i * 92;
        with_(p, () => {
          g.save(); g.translate(78, y); const s = MK.pop(p); g.scale(s, s);
          g.fillStyle = col; rr(-36, -36, 72, 72, 18); g.fill();
          text(l, 0, 2, { size: 46, color: '#1A1530', shadow: false }); g.restore();
          text(w, 130, y, { size: 26, color: C.ink, align: 'left' });
        });
        if (k === 1 && T.f(1, 0.1 + i * 0.16, 0.26 + i * 0.16) > 0 && T.f(1, 0.26 + i * 0.16, 0.27 + i * 0.16) < 1) ring(78, y, 50, t, { color: col });
      });
      with_(ease(T.f(1, 0.9, 1)), () => text('si no responde al manejo médico', 212, 700, { size: 22, color: C.ink2, weight: 600 }));
    });

    // ── 2-3 · Dializador: sangre arriba →, dializado abajo ←
    const X0 = 380, X1 = 1030, BY0 = 250, MY = 380, DY1 = 510;
    const uf = k >= 3 ? ease(T.f(3, 0.2, 0.45)) : 0;
    with_(zone(2, 3), () => {
      const a = ease(T.f(2, 0, 0.15));
      if (a <= 0) return;
      with_(a, () => {
        g.fillStyle = '#3A1220'; rr(X0, BY0, X1 - X0, MY - BY0 - 6, 26); g.fill();
        g.fillStyle = '#103A48'; rr(X0, MY + 6, X1 - X0, DY1 - MY - 6, 26); g.fill();
        // Membrana con poros
        g.strokeStyle = '#E8E2FF'; g.lineWidth = 6; g.setLineDash([26, 14]); g.beginPath(); g.moveTo(X0 + 10, MY); g.lineTo(X1 - 10, MY); g.stroke(); g.setLineDash([]);
        text('Sangre →', 470, 222, { size: 26, color: C.pink });
        text('← Dializado', 935, 540, { size: 26, color: C.cyan });
        // Eritrocitos y albúmina se quedan
        for (let i = 0; i < 7; i++) { const u = (t * 0.12 + i / 7) % 1; g.fillStyle = C.blood; g.beginPath(); g.ellipse(X0 + 30 + u * (X1 - X0 - 60), BY0 + 35 + (i % 3) * 30, 15, 10, 0, 0, 7); g.fill(); }
        for (let i = 0; i < 3; i++) { const u = (t * 0.12 + i / 3 + 0.1) % 1; dot(X0 + 30 + u * (X1 - X0 - 60), BY0 + 82, 13, C.gold); }
        // Urea (blanca) y potasio (verde): cruzan hacia el dializado
        const dif = ease(T.f(2, 0.25, 0.45));
        for (let i = 0; i < 10; i++) {
          const u = (t * 0.22 + i / 10) % 1, x = X0 + 40 + u * (X1 - X0 - 80), col = i % 2 ? C.green : '#FFFFFF';
          const cross = clamp((u - 0.15 - (i % 3) * 0.12) / 0.25) * dif;
          dot(x, lerp(BY0 + 55 + (i % 4) * 15, MY + 40 + (i % 3) * 22, inOut(cross)), 8, col);
        }
        // Dializado: solutos que se van hacia la izquierda
        for (let i = 0; i < 6; i++) { const u = (t * 0.2 + i / 6) % 1; dot(X1 - 40 - u * (X1 - X0 - 80), MY + 95, 7, i % 2 ? C.green : '#FFFFFF', 0.7 * dif); }
        // 3 · Ultrafiltración: gotas de agua empujadas por la presión
        if (uf > 0) for (let i = 0; i < 6; i++) {
          const u = (t * 0.5 + i / 6) % 1, x = X0 + 90 + i * 100;
          with_(uf * (1 - u * 0.4), () => drop(x, lerp(BY0 + 30, MY + 70, inOut(u)), 1.6, C.blue));
        }
      });
      pill('Membrana', 965, MY, ease(T.f(2, 0.12, 0.3)), { fill: '#E8E2FF', size: 20 });
      with_(ease(T.f(2, 0.55, 0.75)), () => {
        dot(430, 590, 9, '#FFFFFF'); text('urea', 470, 590, { size: 22, color: C.ink2, weight: 700 });
        dot(530, 590, 9, C.green); text('K⁺ cruzan', 595, 590, { size: 22, color: C.ink2, weight: 700 });
        g.fillStyle = C.blood; g.beginPath(); g.ellipse(690, 590, 13, 9, 0, 0, 7); g.fill(); dot(718, 590, 11, C.gold);
        text('se quedan', 790, 590, { size: 22, color: C.ink2, weight: 700 });
      });
      if (k >= 3) {
        [520, 700, 880].forEach((x, i) => arrow(x, 270, x, 340, T.f(3, 0.08 + i * 0.05, 0.25 + i * 0.05), { color: C.ink, width: 6 }));
        pill('Ultrafiltración → peso seco', 705, 648, ease(T.f(3, 0.45, 0.65)), { fill: C.blue, size: 24 });
      }
    });

    // ── 4 · Fístula AV (derecha abajo)
    with_(zone(4), () => {
      const a = ease(T.f(4, 0, 0.18));
      if (a <= 0) return;
      const AX0 = 590, AX1 = 1030, AY = 870;
      with_(a, () => {
        // Antebrazo
        g.fillStyle = '#C98B62'; rr(AX0, AY - 80, AX1 - AX0, 165, 80); g.fill();
        g.fillStyle = 'rgba(255,255,255,0.1)'; rr(AX0 + 30, AY - 70, AX1 - AX0 - 60, 30, 15); g.fill();
        // Arteria (abajo) y vena (arriba), unidas cerca de la muñeca
        g.lineCap = 'round';
        g.strokeStyle = C.red; g.lineWidth = 14; g.beginPath(); g.moveTo(AX0 + 50, AY + 40); g.lineTo(AX1 - 40, AY + 40); g.stroke();
        const thick = lerp(12, 26, ease(T.f(4, 0.2, 0.45)));
        g.strokeStyle = '#4D7CFF'; g.lineWidth = thick; g.beginPath(); g.moveTo(AX0 + 50, AY - 25); g.lineTo(AX1 - 40, AY - 25); g.stroke();
        g.strokeStyle = '#9B6BFF'; g.lineWidth = 14; g.beginPath(); g.moveTo(AX0 + 90, AY + 40); g.quadraticCurveTo(AX0 + 80, AY + 5, AX0 + 110, AY - 25); g.stroke();
        // Frémito: ondas sobre la vena
        for (let i = 0; i < 3; i++) { const ph = (t * 1.5 + i / 3) % 1; g.strokeStyle = `rgba(255,255,255,${0.5 * (1 - ph)})`; g.lineWidth = 3; g.beginPath(); g.arc(AX0 + 260 + ph * 120, AY - 25, 18 + ph * 10, -Math.PI * 0.8, -Math.PI * 0.2); g.stroke(); }
        text('Vena', AX1 - 80, AY - 58, { size: 22, color: '#1A1530', weight: 700, shadow: false });
        text('Arteria', AX1 - 90, AY + 74, { size: 22, color: '#1A1530', weight: 700, shadow: false });
      });
      pill('Fístula AV', AX0 + 105, AY - 125, ease(T.f(4, 0.1, 0.28)), { fill: C.green, size: 26 });
      if (k === 4) ring(AX0 + 100, AY + 5, 55, t, { color: C.green });
      const rows = [['1', 'Fístula AV', 'la mejor', C.green], ['2', 'Injerto', '', C.gold], ['3', 'Catéter', 'más infecciones', C.red]];
      rows.forEach(([n, l, s, col], i) => {
        const p = ease(T.f(4, 0.35 + i * 0.17, 0.5 + i * 0.17));
        if (p <= 0) return;
        const y = 1050 + i * 78;
        with_(p, () => {
          g.fillStyle = col; g.beginPath(); g.arc(AX0 + 30, y, 26, 0, 7); g.fill();
          text(n, AX0 + 30, y + 1, { size: 28, color: '#1A1530', shadow: false });
          text(l, AX0 + 75, y, { size: 30, color: C.ink, align: 'left' });
          if (s) text(s, AX0 + 270, y, { size: 22, color: col, weight: 700, align: 'left' });
        });
      });
    });

    // ── 5 · Diálisis peritoneal (izquierda abajo)
    with_(zone(5), () => {
      const a = ease(T.f(5, 0, 0.15));
      if (a <= 0) return;
      const CX = 270, CY = 1010;
      const fill = ease(T.f(5, 0.1, 0.35)) * (1 - 0.7 * ease(T.f(5, 0.72, 0.9)));
      with_(a, () => {
        // Abdomen
        g.fillStyle = '#B9805C'; rr(70, 770, 400, 480, 120); g.fill();
        // Cavidad peritoneal
        g.fillStyle = '#4A2A30'; g.beginPath(); g.ellipse(CX, CY, 165, 175, 0, 0, 7); g.fill();
        g.save(); g.beginPath(); g.ellipse(CX, CY, 165, 175, 0, 0, 7); g.clip();
        g.fillStyle = 'rgba(242,212,92,0.55)'; g.fillRect(CX - 170, CY + 175 - 350 * fill, 340, 350 * fill); g.restore();
        g.strokeStyle = C.pink; g.lineWidth = 8; g.beginPath(); g.ellipse(CX, CY, 165, 175, 0, 0, 7); g.stroke();
        // Capilares del peritoneo
        g.strokeStyle = C.blood; g.lineWidth = 5;
        for (let i = 0; i < 5; i++) { const an = -2.4 + i * 0.5; g.beginPath(); g.arc(CX + Math.cos(an) * 182, CY + Math.sin(an) * 192, 12, 0, 7); g.stroke(); }
        // Catéter
        g.strokeStyle = '#E8E2FF'; g.lineWidth = 9; g.lineCap = 'round'; g.beginPath(); g.moveTo(CX + 110, CY + 120); g.quadraticCurveTo(CX + 190, CY + 190, CX + 250, CY + 230); g.stroke();
        text('Peritoneo', CX, 795, { size: 22, color: '#1A1530', weight: 700, shadow: false });
      });
      // Solutos que pasan de los capilares al líquido y agua que jala la glucosa
      const sw = ease(T.f(5, 0.3, 0.45)) * (fill > 0.3 ? 1 : 0);
      with_(sw, () => {
        for (let i = 0; i < 6; i++) {
          const u = (t * 0.45 + i / 6) % 1, an = -2.4 + (i % 5) * 0.5;
          dot(lerp(CX + Math.cos(an) * 175, CX + Math.cos(an) * 60, u), lerp(CY + Math.sin(an) * 185, CY + Math.sin(an) * 50 + 40, u), 7, i % 2 ? C.green : '#FFFFFF');
        }
        for (let i = 0; i < 3; i++) { const u = (t * 0.4 + i / 3) % 1; drop(lerp(CX + 175, CX + 60, u), CY + 40 + i * 40, 1.3, C.blue); }
      });
      pill('Glucosa jala agua', CX, CY + 60, ease(T.f(5, 0.45, 0.6)), { fill: C.gold, size: 22 });
      pill('En casa, diaria', CX, 1290 - 10, ease(T.f(5, 0.62, 0.78)), { fill: C.green, size: 22 });
      // Flechas de entrada y drenaje junto al catéter
      arrow(CX + 245, CY + 215, CX + 135, CY + 135, T.f(5, 0.1, 0.25) * (1 - ease(T.f(5, 0.68, 0.72))), { color: C.gold, width: 5 });
      arrow(CX + 140, CY + 150, CX + 245, CY + 238, T.f(5, 0.72, 0.85), { color: C.gold, width: 5 });
    });

    // ── 6 · Perla
    if (k === 6) {
      const a = ease(T.f(6, 0, 0.12));
      with_(a, () => {
        g.fillStyle = 'rgba(11,14,42,0.93)'; g.fillRect(0, 0, MK.W, MK.H);
        headline(heads[6], t - T.s(6), C.gold);
        text('Pericarditis urémica', 540, 320, { size: 48, color: C.ink2 });
        text('= diálisis, no AINE', 540, 410, { size: 66, color: C.gold });
        with_(ease(T.f(6, 0.32, 0.45)), () => {
          text('Se dializa por AEIOU refractario', 540, 620, { size: 46, color: C.green });
          text('no por una cifra de creatinina o TFG', 540, 690, { size: 34, color: C.ink2, weight: 600 });
        });
        with_(ease(T.f(6, 0.62, 0.75)), () => {
          text('ERC terminal: lo mejor es', 540, 900, { size: 40, color: C.ink2 });
          text('el trasplante', 540, 975, { size: 66, color: C.cyan });
        });
      });
    }
  }
};
