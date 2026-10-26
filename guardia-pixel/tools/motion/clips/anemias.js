// Ciclo del hierro en 1 minuto (tema anemias). Mismo formato que hta.js.
// Células propias del clip: enterocito, médula ósea (hueso), macrófago, eritrocito y transferrina.
(() => {
  const { C, clamp, lerp, ease, pop, with_, rr } = MK;
  // Eritrocito (disco bicóncavo); pale = pálido y pequeño
  function rbc(x, y, r, a = 1, pale = 0) {
    if (a <= 0) return; const g = MK.g;
    g.save(); g.globalAlpha *= clamp(a); g.translate(x, y);
    g.fillStyle = pale ? '#E7A3AE' : C.blood; g.beginPath(); g.ellipse(0, 0, r, r * 0.82, 0, 0, 7); g.fill();
    g.fillStyle = pale ? 'rgba(255,255,255,0.45)' : 'rgba(0,0,0,0.2)'; g.beginPath(); g.ellipse(0, 0, r * (pale ? 0.6 : 0.45), r * (pale ? 0.5 : 0.37), 0, 0, 7); g.fill();
    g.restore();
  }
  // Átomo de hierro
  function fe(x, y, r = 9, a = 1) { if (a <= 0) return; const g = MK.g; g.save(); g.globalAlpha *= clamp(a); g.fillStyle = C.gold; g.beginPath(); g.arc(x, y, r, 0, 7); g.fill(); g.strokeStyle = '#8A6410'; g.lineWidth = 2; g.stroke(); g.restore(); }
  // Hierro que viaja en línea recta, en bucle (respeta la transparencia, a diferencia de MK.flow)
  function dots(x1, y1, x2, y2, t, n, speed, a) { if (a <= 0) return; for (let i = 0; i < n; i++) { const u = (t * speed + i / n) % 1; fe(lerp(x1, x2, u), lerp(y1, y2, u), 8, a); } }
  // Enterocitos del duodeno: 3 células columnares con borde en cepillo
  function enterocytes(x, y, a) {
    if (a <= 0) return; const g = MK.g;
    with_(clamp(a * 2), () => {
      for (let i = 0; i < 3; i++) {
        const cx = x + i * 112;
        g.fillStyle = '#E3A27A'; rr(cx, y, 106, 150, 14); g.fill();
        g.strokeStyle = '#9C5A3C'; g.lineWidth = 3; g.stroke();
        g.strokeStyle = '#F2C7A6'; g.lineWidth = 4; g.lineCap = 'round';
        for (let m = 0; m < 7; m++) { g.beginPath(); g.moveTo(cx + 12 + m * 14, y + 2); g.lineTo(cx + 12 + m * 14, y - 12); g.stroke(); }
        g.fillStyle = '#7A3E5C'; g.beginPath(); g.ellipse(cx + 53, y + 100, 20, 26, 0, 0, 7); g.fill();
      }
    });
  }
  // Ferroportina: compuerta en la membrana; shut 0→1 = bloqueada por hepcidina
  function gate(x, y, a, shut) {
    if (a <= 0) return; const g = MK.g;
    with_(clamp(a * 2), () => {
      g.fillStyle = C.orange; rr(x - 26, y - 14, 18, 28, 6); g.fill(); rr(x + 8, y - 14, 18, 28, 6); g.fill();
      if (shut > 0) with_(shut, () => { g.fillStyle = C.red; g.beginPath(); g.arc(x, y, 14, 0, 7); g.fill(); g.strokeStyle = '#fff'; g.lineWidth = 3; g.stroke(); });
    });
  }
  // Hueso largo con médula roja
  function bone(x, y, a, pale) {
    if (a <= 0) return; const g = MK.g;
    g.save(); g.translate(x, y); g.scale(lerp(0.6, 1, pop(a)), lerp(0.6, 1, pop(a))); g.globalAlpha *= clamp(a * 2);
    g.fillStyle = '#E9E2D0';
    g.beginPath();
    for (const sx of [-150, 150]) for (const sy of [-26, 26]) { g.moveTo(sx + 38, sy); g.arc(sx, sy, 38, 0, Math.PI * 2); }
    g.rect(-150, -42, 300, 84); g.fill('nonzero');
    g.fillStyle = '#7E1F33'; rr(-118, -26, 236, 52, 22); g.fill();
    for (let i = 0; i < 6; i++) { g.fillStyle = pale ? '#E7A3AE' : C.blood; g.beginPath(); g.ellipse(-92 + i * 37, (i % 2 ? 8 : -8), pale ? 11 : 15, pale ? 9 : 12, 0, 0, 7); g.fill(); }
    g.restore();
  }
  // Macrófago: célula ameboide con núcleo; full = hierro guardado dentro
  function macrophage(x, y, r, a, t, full) {
    if (a <= 0) return; const g = MK.g;
    g.save(); g.translate(x, y); const s = lerp(0.6, 1, pop(a)); g.scale(s, s); g.globalAlpha *= clamp(a * 2);
    g.fillStyle = '#5A8FD0'; g.beginPath();
    for (let i = 0; i <= 64; i++) { const th = (i / 64) * Math.PI * 2, rad = r * (1 + 0.1 * Math.sin(5 * th + t * 1.3) + 0.06 * Math.sin(3 * th - t)); const px = Math.cos(th) * rad, py = Math.sin(th) * rad * 0.85; if (i) g.lineTo(px, py); else g.moveTo(px, py); }
    g.closePath(); g.fill(); g.strokeStyle = '#2E5C99'; g.lineWidth = 4; g.stroke();
    g.fillStyle = '#2B3F7A'; g.beginPath(); g.ellipse(r * 0.28, r * 0.12, r * 0.3, r * 0.22, 0.5, 0, 7); g.fill();
    const n = Math.round(lerp(2, 9, full));
    for (let i = 0; i < n; i++) fe(-r * 0.45 + (i % 3) * 26, -r * 0.3 + Math.floor(i / 3) * 26, 9);
    g.restore();
  }

  window.CLIP = {
    topic: 'anemias', title: 'Hierro en 1 minuto', sub: 'Del duodeno a la médula, y por qué la inflamación lo deja atrapado', color: '#FF8FA3',
    scenes: [
      { say: 'El ciclo del hierro, en un minuto.', min: 3.5 },
      { say: 'El hierro de la dieta se absorbe en el duodeno, como hierro ferroso, y entra al enterocito.' },
      { say: 'Para salir del enterocito a la sangre usa una sola puerta: la ferroportina.' },
      { say: 'En la sangre viaja unido a la transferrina hasta la médula ósea, que lo usa para fabricar hemoglobina.' },
      { say: 'Casi todo el hierro de cada día viene del reciclaje: los macrófagos se comen a los eritrocitos viejos. Lo que sobra se guarda como ferritina, en el hígado y en los macrófagos.' },
      { say: 'En la inflamación, la interleucina seis hace que el hígado produzca hepcidina, y la hepcidina cierra la ferroportina.' },
      { say: 'El hierro queda atrapado: ferritina normal o alta, transferrina baja y médula sin hierro. En la ferropenia, en cambio, la ferritina baja y la transferrina sube.' },
      { say: 'Perla: la ferritina es el mejor estudio aislado. Menor de treinta confirma ferropenia. Pero con inflamación, hasta cien puede seguir siendo ferropenia.', min: 7 }
    ],
    draw(t, T) {
      const { text, pill, arrow, flow, ring, organ, shapes, titleCard, headline, bg } = MK;
      const g = MK.g;
      bg(t);
      const k = T.cur, dimFor = (i) => (k >= 6 ? 1 : k === i ? 1 : 0.42);
      if (k === 0) { titleCard(t - T.s(0), this.title, this.sub, this.color); return; }
      const heads = ['', 'Se absorbe en el duodeno', 'Ferroportina: la única salida', 'Transferrina → médula ósea', 'Reciclaje y depósito (ferritina)', 'Inflamación: IL-6 → hepcidina', 'Atrapado no es lo mismo que faltante', 'Perla para el examen'];
      headline(heads[k], t - T.s(k), this.color);
      const shut = k >= 5 ? ease(T.f(5, 0.65, 0.85)) : 0;   // ferroportina bloqueada
      const trap = k >= 6 ? ease(T.f(6, 0, 0.3)) : 0;        // hierro atrapado

      // Vaso sanguíneo de fondo (aparece en la escena 2)
      with_(k >= 3 ? 1 : 0.42, () => {
        const va = ease(T.f(2, 0.3, 0.6));
        if (va > 0) with_(va, () => {
          g.fillStyle = '#3A1220'; rr(40, 545, 1000, 60, 30); g.fill();
          g.fillStyle = C.organ; g.fillRect(70, 537, 940, 8); g.fillRect(70, 605, 940, 8);
        });
      });

      // 1 · Duodeno y enterocito
      with_(dimFor(1), () => {
        with_(ease(T.f(1, 0, 0.25)), () => text('Luz del duodeno', 255, 196, { size: 26, color: C.dim, weight: 600 }));
        enterocytes(90, 270, ease(T.f(1, 0, 0.25)));
        // hierro de la dieta que entra
        if (t >= T.s(1)) for (let i = 0; i < 4; i++) {
          const u = ((t * 0.35 + i / 4) % 1), x = 140 + i * 75;
          fe(x, lerp(215, 330, u), 9, ease(T.f(1, 0.25, 0.4)) * (u < 0.85 ? 1 : (1 - u) / 0.15));
        }
        pill('Fe²⁺', 560, 260, ease(T.f(1, 0.35, 0.6)), { fill: C.gold, size: 30 });
        arrow(510, 262, 430, 300, T.f(1, 0.45, 0.65), { color: C.gold, width: 6 });
        // hierro dentro del enterocito (más si queda atrapado)
        const nIn = Math.round(lerp(2, 8, trap));
        if (t >= T.s(1)) for (let i = 0; i < nIn; i++) fe(118 + (i % 4) * 86, 360 + Math.floor(i / 4) * 34, 9, ease(T.f(1, 0.5, 0.7)));
      });

      // 2 · Ferroportina (salida basolateral)
      with_(dimFor(2), () => {
        gate(302, 422, ease(T.f(2, 0, 0.25)), shut);
        if (k === 2) ring(302, 422, 46, t, { color: C.orange });
        pill('Ferroportina', 470, 470, ease(T.f(2, 0.2, 0.45)), { fill: C.orange, size: 28 });
        // hierro que sale al vaso (se detiene si se bloquea)
        if (t >= T.s(2) + T.d(2) * 0.45) dots(302, 435, 302, 570, t, 3, 0.6, 1 - shut);
      });

      // 3 · Transferrina → médula ósea
      with_(dimFor(3), () => {
        if (t >= T.s(3)) {
          const a = ease(T.f(3, 0, 0.25));
          with_(a, () => {
            // transferrina: círculo morado, con hierro (dorado) o vacía
            for (let i = 0; i < 6; i++) {
              const u = ((t * 0.09 + i / 6) % 1), x = lerp(80, 1000, u);
              g.fillStyle = C.purple; g.beginPath(); g.arc(x, 575, 17, 0, 7); g.fill();
              if (trap < 0.5) { fe(x - 6, 572, 6); fe(x + 6, 578, 6); }
              else { g.fillStyle = '#3A1220'; g.beginPath(); g.arc(x, 575, 9, 0, 7); g.fill(); }
            }
          });
        }
        pill('Transferrina', 700, 500, ease(T.f(3, 0.15, 0.4)), { fill: C.purple, color: '#fff', size: 28 });
        bone(830, 330, ease(T.f(3, 0.3, 0.55)), trap > 0.5);
        with_(ease(T.f(3, 0.3, 0.55)), () => text('Médula ósea', 830, 222, { size: 30, color: C.ink2 }));
        arrow(960, 540, 960, 400, T.f(3, 0.45, 0.65), { color: C.purple, width: 7 });
        // eritrocitos nuevos que salen de la médula
        if (t >= T.s(3) + T.d(3) * 0.6) for (let i = 0; i < 3; i++) rbc(700 + i * 50, 425, trap > 0.5 ? 14 : 19, ease(T.f(3, 0.6 + i * 0.08, 0.75 + i * 0.08)), trap > 0.5);
      });

      // 4 · Macrófago (reciclaje) y ferritina (hígado)
      with_(dimFor(4), () => {
        const ma = ease(T.f(4, 0, 0.2));
        // eritrocitos viejos que entra al macrófago
        if (t >= T.s(4)) with_(ma * (k === 5 ? 0.6 : 1), () => {
          for (let i = 0; i < 3; i++) { const u = ((t * 0.25 + i / 3) % 1); rbc(lerp(80, 165, u), lerp(1005, 880, u), 17, u < 0.8 ? 1 : (1 - u) / 0.2); }
        });
        macrophage(250, 820, 105, ma, t, Math.max(ease(T.f(4, 0.1, 0.4)) * 0.3, trap));
        gate(250, 728, ease(T.f(4, 0.15, 0.3)), shut);
        if (t >= T.s(4) + T.d(4) * 0.3) dots(250, 715, 250, 580, t, 3, 0.6, 1 - shut);
        pill('Macrófago', 250, 965, ease(T.f(4, 0.1, 0.3)), { fill: C.blue, size: 28 });
        with_(ma, () => text('Eritrocitos viejos', 150, 1045, { size: 24, color: C.dim, weight: 600 }));
        organ(shapes.liver, 820, 840, 0.75, ease(T.f(4, 0.5, 0.7)));
        arrow(820, 615, 820, 755, T.f(4, 0.55, 0.75), { color: C.gold, width: 7 });
        pill('Ferritina', 820, 950, ease(T.f(4, 0.7, 0.9)), { fill: C.gold, size: 30 });
      });

      // 5 · IL-6 → hepcidina → cierra la ferroportina
      if (k >= 5) with_(k === 5 || k >= 6 ? 1 : 0.42, () => {
        pill('IL-6', 560, 900, ease(T.f(5, 0, 0.15)), { fill: C.orange, size: 30 });
        arrow(610, 885, 700, 860, T.f(5, 0.1, 0.25), { color: C.orange, width: 6 });
        pill('Hepcidina', 560, 745, ease(T.f(5, 0.25, 0.45)), { fill: C.red, color: '#fff', size: 30 });
        arrow(730, 790, 650, 760, T.f(5, 0.25, 0.4), { color: C.red, width: 6 });
        arrow(470, 725, 320, 450, T.f(5, 0.45, 0.65), { color: C.red, width: 6, cx: 380, cy: 600, dash: [14, 10] });
        arrow(455, 750, 285, 735, T.f(5, 0.45, 0.65), { color: C.red, width: 6, dash: [14, 10] });
        if (k === 5) { ring(302, 422, 46, t, { color: C.red }); ring(250, 728, 46, t, { color: C.red }); }
      });

      // 6 · Laboratorio: ferropenia vs inflamación
      if (k >= 6) {
        const la = ease(T.f(6, 0.3, 0.5)), lb = ease(T.f(6, 0.6, 0.8));
        const card = (x, a, title, col, rows) => with_(a, () => {
          g.fillStyle = 'rgba(20,26,66,0.92)'; rr(x, 1090, 460, 200, 26); g.fill(); g.lineWidth = 4; g.strokeStyle = col; g.stroke();
          text(title, x + 230, 1130, { size: 32, color: col });
          rows.forEach((r, i) => text(r, x + 230, 1185 + i * 46, { size: 30, color: C.ink, weight: 600 }));
        });
        card(560, la, 'Inflamación', C.red, ['Ferritina normal o ↑', 'Transferrina ↓']);
        card(60, lb, 'Ferropenia', C.gold, ['Ferritina ↓', 'Transferrina ↑']);
      }

      // 7 · Perla
      if (k === 7) {
        const a = ease(T.f(7, 0, 0.15));
        with_(a, () => {
          g.fillStyle = 'rgba(11,14,42,0.88)'; g.fillRect(0, 0, MK.W, MK.H);
          headline(heads[7], t - T.s(7), C.gold);
          text('Ferritina < 30', 540, 470, { size: 76, color: C.gold });
          text('= ferropenia (el mejor estudio aislado)', 540, 560, { size: 36, color: C.ink2, weight: 600 });
          with_(ease(T.f(7, 0.5, 0.65)), () => {
            text('Con inflamación', 540, 790, { size: 62, color: C.red });
            text('hasta 100 puede seguir siendo ferropenia: la ferritina sube como reactante de fase aguda', 540, 885, { size: 34, color: C.ink2, weight: 600, maxW: 860 });
          });
        });
      }
    }
  };
})();
