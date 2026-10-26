// ERC en 1 minuto (tema erc): definición, clasificación G × A (mapa de riesgo) y las complicaciones que aparecen al perder nefronas.
// T.s(i)/T.e(i)/T.d(i): inicio, fin y duración de la escena i; T.f(i, a, b): avance 0→1 entre las fracciones a y b de la escena i.
window.CLIP = {
  topic: 'erc', title: 'ERC en 1 minuto', sub: 'TFG y albuminuria: el mapa G × A y lo que aparece cuando el riñón se apaga', color: '#62E3FF',
  scenes: [
    { say: 'La enfermedad renal crónica, en un minuto.', min: 3.5 },
    { say: 'Es una filtración menor de sesenta, o una albuminuria de treinta o más, que dura más de tres meses.' },
    { say: 'Se clasifica por filtración, de G uno a G cinco. G tres a empieza debajo de sesenta, G cuatro debajo de treinta, y G cinco debajo de quince.' },
    { say: 'Y por albuminuria: A uno, menor de treinta. A dos, de treinta a trescientos. A tres, mayor de trescientos.' },
    { say: 'Juntas forman el mapa de riesgo: menos filtración y más albuminuria, más riesgo. G cuatro y G cinco ya son muy alto.' },
    { say: 'Al perder nefronas, el riñón deja de fabricar eritropoyetina y calcitriol: aparece anemia normocítica y se absorbe menos calcio.' },
    { say: 'Y deja de eliminar fósforo, potasio y ácido: sube la paratohormona, hay hiperkalemia y acidosis. Con filtración muy baja llega la uremia.' },
    { say: 'Perla: si la creatinina sube hasta treinta por ciento al iniciar un IECA, un ARA dos o un inhibidor de SGLT dos, no lo suspendas. Y en la anemia, primero hierro y luego eritropoyetina.', min: 8 }
  ],
  draw(t, T) {
    const { C, ease, inOut, lerp, clamp, text, pill, arrow, ring, organ, shapes, titleCard, headline, bg, with_, rr } = MK;
    const g = MK.g;
    bg(t);
    const k = T.cur;
    if (k === 0) { titleCard(t - T.s(0), this.title, this.sub, this.color); return; }
    const heads = ['', 'Definición: más de 3 meses', 'G: la tasa de filtración', 'A: la albuminuria', 'El mapa de riesgo G × A', 'Lo que deja de fabricar', 'Lo que deja de eliminar', 'Perla para el examen'];
    headline(heads[k], t - T.s(k), this.color);
    const back = k >= 7 ? 1 : k === 6 ? ease(T.f(6, 0.75, 0.95)) : 0;
    const zone = (...sc) => (sc.includes(k) ? 1 : lerp(0.42, 1, back));

    // ── 1 · Riñón y definición
    with_(zone(1), () => {
      // El riñón se encoge un poco al perder nefronas (escenas 5 y 6)
      const shrink = 0.12 * ease(T.f(5, 0, 1)) + 0.1 * ease(T.f(6, 0, 1));
      organ(shapes.kidney, 200, 335, 0.9 - shrink, ease(T.f(1, 0, 0.2)));
      const d1 = ease(T.f(1, 0.1, 0.3)), d2 = ease(T.f(1, 0.3, 0.5)), d3 = ease(T.f(1, 0.55, 0.75));
      with_(d1, () => text('TFG <60', 640, 240, { size: 54, color: C.gold }));
      with_(d2, () => text('o albuminuria ≥30 mg/g', 640, 312, { size: 34, color: C.ink2, weight: 600 }));
      // Reloj de 3 meses
      with_(d3, () => {
        const cx = 455, cy = 400;
        g.strokeStyle = C.cyan; g.lineWidth = 6; g.beginPath(); g.arc(cx, cy, 30, 0, 7); g.stroke();
        const ang = -Math.PI / 2 + Math.PI * 2 * ((t * 0.5) % 1);
        g.beginPath(); g.moveTo(cx, cy); g.lineTo(cx + Math.cos(ang) * 22, cy + Math.sin(ang) * 22); g.moveTo(cx, cy); g.lineTo(cx, cy - 14); g.stroke();
        text('por más de 3 meses', 690, 400, { size: 38, color: C.cyan });
      });
    });

    // ── 2-4 · Mapa G × A
    const GX0 = 60, GX1 = 300, AX0 = 300, AW = 240, HY = 548, RY0 = 580, RH = 52;
    const Gs = [['G1', '≥90'], ['G2', '60–89'], ['G3a', '45–59'], ['G3b', '30–44'], ['G4', '15–29'], ['G5', '<15']];
    const As = [['A1', '<30'], ['A2', '30–300'], ['A3', '>300']];
    // Riesgo KDIGO: 0 bajo, 1 moderado, 2 alto, 3 muy alto
    const risk = [[0, 1, 2], [0, 1, 2], [1, 2, 3], [2, 3, 3], [3, 3, 3], [3, 3, 3]];
    const rcol = [C.green, C.gold, C.orange, C.red];
    with_(zone(2, 3, 4), () => {
      Gs.forEach(([gname, rng], i) => {
        const p = ease(T.f(2, 0.08 + i * 0.1, 0.2 + i * 0.1));
        if (p <= 0) return;
        const y = RY0 + i * RH;
        with_(p, () => {
          g.fillStyle = 'rgba(98,227,255,' + (0.1 + i * 0.05) + ')'; rr(GX0, y + 3, GX1 - GX0 - 8, RH - 6, 12); g.fill();
          text(gname, GX0 + 52, y + RH / 2, { size: 30, color: C.ink });
          text(rng, GX0 + 165, y + RH / 2, { size: 26, color: C.ink2, weight: 600 });
        });
      });
      with_(ease(T.f(2, 0.05, 0.2)), () => text('TFG', GX0 + 110, HY, { size: 26, color: C.cyan }));
      // Flecha: la filtración baja
      arrow(GX0 - 8, RY0 + 10, GX0 - 8, RY0 + 6 * RH - 10, T.f(2, 0.1, 0.7), { color: 'rgba(98,227,255,0.5)', width: 5 });
      As.forEach(([aname, rng], j) => {
        const p = ease(T.f(3, 0.1 + j * 0.22, 0.28 + j * 0.22));
        if (p <= 0) return;
        const x = AX0 + j * AW + AW / 2;
        with_(p, () => {
          text(aname + '  ' + rng, x, HY, { size: 28, color: C.gold });
          // Columna vacía antes de colorear
          g.strokeStyle = 'rgba(242,193,78,0.35)'; g.lineWidth = 2; rr(AX0 + j * AW + 6, RY0 + 3, AW - 12, 6 * RH - 6, 12); g.stroke();
        });
      });
      with_(ease(T.f(3, 0.75, 0.9)), () => text('albúmina/creatinina en orina, mg/g', AX0 + 360, RY0 + 6 * RH + 20, { size: 22, color: C.dim, weight: 600 }));
      // Celdas de riesgo: se pintan en diagonal
      for (let i = 0; i < 6; i++) for (let j = 0; j < 3; j++) {
        const p = ease(T.f(4, 0.08 + (i + j) * 0.06, 0.2 + (i + j) * 0.06));
        if (p <= 0) continue;
        const x = AX0 + j * AW + 8, y = RY0 + i * RH + 4;
        with_(p * 0.92, () => { g.fillStyle = rcol[risk[i][j]]; rr(x, y, AW - 16, RH - 8, 10); g.fill(); });
      }
      const lg = ease(T.f(4, 0.62, 0.8));
      with_(lg, () => {
        let x = 392;
        ['Bajo', 'Moderado', 'Alto', 'Muy alto'].forEach((l, i) => {
          g.fillStyle = rcol[i]; rr(x, 503 - 13, 26, 26, 6); g.fill();
          text(l, x + 36, 503, { size: 22, color: C.ink2, weight: 600, align: 'left' });
          x += 36 + [50, 98, 45, 88][i] + 40;
        });
      });
      if (k === 4) with_(ease(T.f(4, 0.7, 0.85)), () => { g.strokeStyle = C.ink; g.lineWidth = 5; rr(GX0 - 2, RY0 + 4 * RH, AX0 + 3 * AW - GX0 + 4, 2 * RH, 14); g.stroke(); });
      // Marcador: la TFG baja mientras aparecen las complicaciones (escenas 5 y 6)
      if (k >= 5) {
        const pos = lerp(1, 3.2, inOut(T.f(5, 0.05, 0.9))) + (k >= 6 ? lerp(0, 1.8, inOut(T.f(6, 0.05, 0.85))) : 0);
        const y = RY0 + pos * RH + RH / 2;
        g.fillStyle = C.ink; g.beginPath(); g.moveTo(GX0 - 4, y); g.lineTo(GX0 - 30, y - 16); g.lineTo(GX0 - 30, y + 16); g.closePath(); g.fill();
      }
    });

    // ── 5 · Deja de fabricar (caja izquierda)
    const BY = 950, BH = 345;
    const box = (x0, w, title, col, a) => with_(a, () => {
      g.fillStyle = 'rgba(20,26,66,0.9)'; rr(x0, BY, w, BH, 24); g.fill();
      g.strokeStyle = col; g.lineWidth = 4; rr(x0, BY, w, BH, 24); g.stroke();
      text(title, x0 + w / 2, BY + 40, { size: 30, color: col });
    });
    with_(zone(5), () => {
      const a = ease(T.f(5, 0, 0.15));
      if (a <= 0) return;
      box(40, 470, 'Deja de fabricar', C.cyan, a);
      // EPO ↓ → anemia
      const p1 = ease(T.f(5, 0.15, 0.35));
      pill('EPO ↓', 150, BY + 120, p1, { fill: C.cyan, size: 26 });
      arrow(220, BY + 120, 268, BY + 120, T.f(5, 0.25, 0.4), { color: C.ink2, width: 5 });
      with_(ease(T.f(5, 0.3, 0.45)), () => {
        // Eritrocitos que se vuelven escasos
        const n = Math.round(lerp(5, 2, ease(T.f(5, 0.35, 0.6))));
        for (let i = 0; i < n; i++) { g.fillStyle = C.blood; g.beginPath(); g.ellipse(310 + i * 34, BY + 105, 14, 10, 0, 0, 7); g.fill(); g.fillStyle = '#9A2A3C'; g.beginPath(); g.ellipse(310 + i * 34, BY + 105, 6, 4, 0, 0, 7); g.fill(); }
        text('Anemia normocítica', 380, BY + 150, { size: 24, color: C.pink, weight: 700 });
      });
      // Calcitriol ↓ → menos calcio
      const p2 = ease(T.f(5, 0.5, 0.7));
      pill('Calcitriol ↓', 165, BY + 250, p2, { fill: C.gold, size: 26 });
      arrow(262, BY + 250, 300, BY + 250, T.f(5, 0.6, 0.75), { color: C.ink2, width: 5 });
      with_(ease(T.f(5, 0.65, 0.8)), () => { text('Absorbe', 400, BY + 232, { size: 24, color: C.ink2, weight: 700 }); text('menos Ca', 400, BY + 266, { size: 24, color: C.ink2, weight: 700 }); });
    });

    // ── 6 · Deja de eliminar (caja derecha)
    with_(zone(6), () => {
      const a = ease(T.f(6, 0, 0.12));
      if (a <= 0) return;
      box(550, 490, 'Deja de eliminar', C.orange, a);
      const items = [['Fósforo ↑', 'PTH ↑', C.purple, 0.1], ['Potasio ↑', 'T picudas', C.green, 0.25], ['Ácido ↑', 'Acidosis', C.gold, 0.38], ['Toxinas', 'Uremia', C.red, 0.6]];
      items.forEach(([l, r, col, f], i) => {
        const y = BY + 100 + i * 66, p = ease(T.f(6, f, f + 0.12));
        pill(l, 680, y, p, { fill: col, color: col === C.red || col === C.purple ? '#fff' : '#241500', size: 24 });
        arrow(770, y, 820, y, T.f(6, f + 0.05, f + 0.15), { color: C.ink2, width: 5 });
        with_(ease(T.f(6, f + 0.08, f + 0.18)), () => text(r, 905, y, { size: 26, color: col === C.purple ? '#D9C6FF' : col, weight: 700 }));
      });
    });

    // ── 7 · Perla
    if (k === 7) {
      const a = ease(T.f(7, 0, 0.12));
      with_(a, () => {
        g.fillStyle = 'rgba(11,14,42,0.93)'; g.fillRect(0, 0, MK.W, MK.H);
        headline(heads[7], t - T.s(7), C.gold);
        text('IECA · ARA II · iSGLT2', 540, 330, { size: 46, color: C.ink2 });
        text('Cr ↑ hasta 30% al iniciar', 540, 425, { size: 62, color: C.gold });
        text('No lo suspendas: es el efecto hemodinámico esperado', 540, 520, { size: 32, color: C.ink2, weight: 600, maxW: 860 });
        with_(ease(T.f(7, 0.62, 0.75)), () => {
          text('Anemia de la ERC', 540, 790, { size: 46, color: C.ink2 });
          text('Primero hierro, luego EPO', 540, 880, { size: 62, color: C.red });
          text('Meta de Hb ≤11.5: normalizarla aumenta EVC y trombosis', 540, 975, { size: 32, color: C.ink2, weight: 600, maxW: 860 });
        });
      });
    }
  }
};
