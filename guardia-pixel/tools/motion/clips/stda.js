// Úlcera y STDA en 1 minuto (tema stda). Corte de la pared gástrica: ácido contra defensa, los dos agresores,
// la úlcera que sangra y el manejo (Glasgow-Blatchford, reanimación, IBP IV y endoscopia en 24 h).
window.CLIP = {
  topic: 'stda', title: 'STDA en 1 minuto', sub: 'Úlcera: ácido contra defensa, y qué hacer cuando sangra', color: '#FF8FA3',
  scenes: [
    { say: 'Úlcera péptica y sangrado alto, en un minuto.', min: 3.5 },
    { say: 'Tu estómago produce ácido todo el día. Lo protege el moco con bicarbonato, sostenido por las prostaglandinas.' },
    { say: 'Primer agresor: Helicobacter pylori. Su ureasa fabrica amoníaco, que lo protege del ácido, e inflama la mucosa.' },
    { say: 'Segundo agresor: los AINE, incluida la aspirina. Bloquean la ciclooxigenasa uno, y sin prostaglandinas hay menos moco.' },
    { say: 'Cuando el ácido gana y llega a la submucosa, es una úlcera. Si erosiona un vaso, sangra: hematemesis o melena.' },
    { say: 'Glasgow-Blatchford decide quién se va a casa. Suma nitrógeno ureico, hemoglobina, presión, pulso, melena, síncope, hepatopatía e insuficiencia cardiaca. Cero o un punto: ambulatorio.' },
    { say: 'Primero reanima, y transfunde si la hemoglobina es menor de siete. Luego, inhibidor de bomba intravenoso y endoscopia en veinticuatro horas.' },
    { say: 'Perla: toda úlcera es por Helicobacter o AINE hasta demostrar lo contrario. Trampa: endoscopia antes de seis horas no baja la mortalidad. Primero reanima.', min: 7 }
  ],
  draw(t, T) {
    const { C, ease, lerp, clamp, text, pill, arrow, flow, ring, block, titleCard, headline, bg, with_, rr } = MK;
    const g = MK.g;
    bg(t);
    const k = T.cur, dimFor = (i) => (k >= 6 ? 1 : k === i ? 1 : 0.42);
    if (k === 0) { titleCard(t - T.s(0), this.title, this.sub, this.color); return; }
    const heads = ['', 'Ácido contra defensa', 'Agresor 1: H. pylori', 'Agresor 2: AINE bloquean la COX-1', 'Úlcera: el ácido llega al vaso', 'Glasgow-Blatchford: ¿se va a casa?', 'Reanima, IBP IV y endoscopia ≤24 h', 'Perla y trampa del examen'];
    headline(heads[k], t - T.s(k), this.color);

    // Geometría del corte de la pared gástrica
    const X0 = 290, X1 = 1030, Y0 = 200, yMuc = 480, yEpi = 552, ySub = 760, yVes = 712, UX = 680;
    const bump = (x, c, w) => Math.exp(-Math.pow((x - c) / w, 2));
    const thin = ease(T.f(3, 0.3, 0.7));                 // AINE: menos moco a la derecha
    const ulc = ease(T.f(4, 0.05, 0.45));                // la úlcera se excava
    const inflam = ease(T.f(2, 0.4, 0.8));               // H. pylori inflama
    const acid = k >= 6 ? lerp(1, 0.3, ease(T.f(6, 0.35, 0.55))) : 1;
    const bleed = k >= 6 ? 1 - ease(T.f(6, 0.75, 0.95)) : 1;
    const crater = () => {
      const d = lerp(0, yVes - 6 - (yMuc - 52), ulc), w = lerp(15, 70, ulc);
      g.moveTo(UX - w - 22, yMuc - 52); g.bezierCurveTo(UX - w, yMuc - 30, UX - w * 0.6, yMuc - 52 + d, UX, yMuc - 52 + d);
      g.bezierCurveTo(UX + w * 0.6, yMuc - 52 + d, UX + w, yMuc - 30, UX + w + 22, yMuc - 52);
    };

    // 1 · Pared gástrica: ácido, moco con bicarbonato, epitelio (célula parietal) y vaso
    with_(dimFor(1), () => {
      const a = ease(T.f(1, 0, 0.25));
      with_(a, () => {
        g.save();
        rr(X0, Y0, X1 - X0, ySub - Y0, 28); g.clip();
        if (ulc > 0) { g.beginPath(); g.rect(0, 0, MK.W, MK.H); crater(); g.clip('evenodd'); }
        g.fillStyle = 'rgba(98,227,255,0.05)'; g.fillRect(X0, Y0, X1 - X0, yMuc - Y0);
        // moco
        g.fillStyle = 'rgba(98,227,255,0.55)'; g.beginPath(); g.moveTo(X0, yMuc);
        for (let x = X0; x <= X1; x += 8) {
          const def = 1 - 0.75 * thin * bump(x, 910, 110);
          g.lineTo(x, yMuc - 6 - 44 * def + Math.sin(x / 40 + t * 1.5) * 4 * def);
        }
        g.lineTo(X1, yMuc); g.closePath(); g.fill();
        // submucosa y vaso
        g.fillStyle = '#2A1838'; g.fillRect(X0, yEpi, X1 - X0, ySub - yEpi);
        g.fillStyle = '#7A2E44'; g.fillRect(X0, yVes - 24, X1 - X0, 48);
        g.fillStyle = C.blood; g.fillRect(X0, yVes - 16, X1 - X0, 32);
        for (let i = 0; i < 10; i++) { const u = (t * 0.12 + i / 10) % 1; g.fillStyle = '#FF8FA3'; g.beginPath(); g.ellipse(X0 + u * (X1 - X0), yVes + Math.sin(i * 2.3) * 6, 12, 7, 0, 0, 7); g.fill(); }
        // epitelio
        for (let x = X0, i = 0; x < X1; x += 62, i++) {
          const cx = x + 31, inf = inflam * bump(cx, 470, 70);
          g.fillStyle = i === 0 ? C.purple : `rgb(${Math.round(lerp(233, 255, inf))},${Math.round(lerp(162, 84, inf))},${Math.round(lerp(176, 112, inf))})`;
          rr(x + 3, yMuc + 4, 56, yEpi - yMuc - 8, 14); g.fill();
          g.fillStyle = 'rgba(60,20,60,0.45)'; g.beginPath(); g.ellipse(cx, yMuc + 42, 10, 8, 0, 0, 7); g.fill();
        }
        g.restore();
      });
      // ácido que cae desde la luz
      const n = Math.round(26 * acid);
      for (let i = 0; i < n; i++) {
        const x = X0 + 30 + ((i * 173) % 680), ph = (t * 0.28 + i * 0.37) % 1;
        const deep = ulc > 0 && Math.abs(x - UX) < 80 ? lerp(0, 150, ulc) : 0;
        const y = Y0 + 20 + ph * (yMuc - 70 - Y0 + deep);
        if (t >= T.s(3) && x > 820 && y < 390) continue;
        g.globalAlpha *= 1; g.fillStyle = C.orange;
        with_(a * Math.min(1, ph * 5, (1 - ph) * 5), () => { g.beginPath(); g.arc(x, y, 8, 0, 7); g.fill(); });
      }
      // leyenda a la izquierda
      with_(ease(T.f(1, 0.15, 0.4)), () => pill('Ácido', 155, 300, 1, { fill: C.orange, size: 30, noPop: true }));
      with_(ease(T.f(1, 0.4, 0.6)), () => { text('Moco +', 155, 440, { size: 28, color: C.cyan }); text('bicarbonato', 155, 474, { size: 28, color: C.cyan }); });
      with_(ease(T.f(1, 0.55, 0.75)), () => { text('Célula', 155, 520, { size: 26, color: C.purple }); text('parietal', 155, 552, { size: 26, color: C.purple }); });
      with_(ease(T.f(1, 0.65, 0.85)), () => text('Vaso', 155, yVes, { size: 28, color: C.pink }));
    });

    // 2 · H. pylori: ureasa → amoníaco, inflama
    with_(dimFor(2), () => {
      const a = ease(T.f(2, 0, 0.3));
      if (a > 0) {
        const hx = 470, hy = 438;
        with_(ease(T.f(2, 0.25, 0.5)) * (0.6 + 0.4 * Math.sin(t * 3)), () => {
          const gr = g.createRadialGradient(hx, hy, 10, hx, hy, 80); gr.addColorStop(0, 'rgba(98,227,140,0.45)'); gr.addColorStop(1, 'rgba(98,227,140,0)');
          g.fillStyle = gr; g.beginPath(); g.arc(hx, hy, 80, 0, 7); g.fill();
        });
        g.save(); g.translate(hx, hy); g.rotate(-0.25 + Math.sin(t * 2) * 0.06); g.scale(lerp(0.5, 1, a), lerp(0.5, 1, a)); g.globalAlpha *= clamp(a * 2);
        g.strokeStyle = C.green; g.lineWidth = 4; g.lineCap = 'round';
        for (let j = -1; j <= 1; j++) { g.beginPath(); for (let u = 0; u <= 1; u += 0.05) { const xx = -36 - u * 46, yy = j * 7 + Math.sin(u * 12 + t * 8 + j) * 5; if (u) g.lineTo(xx, yy); else g.moveTo(xx, yy); } g.stroke(); }
        g.fillStyle = C.green; rr(-38, -14, 76, 28, 14); g.fill(); g.strokeStyle = '#1F6B3A'; g.lineWidth = 3; g.stroke();
        g.restore();
      }
      pill('Ureasa → NH₃', 470, 332, ease(T.f(2, 0.3, 0.55)), { fill: C.green, size: 28 });
      if (k === 2) ring(470, 438, 60, t, { color: C.green });
    });

    // 3 · AINE: bloquean la COX-1, menos moco
    with_(dimFor(3), () => {
      pill('AINE', 910, 250, ease(T.f(3, 0, 0.25)), { fill: C.red, color: '#fff', size: 32 });
      with_(ease(T.f(3, 0.2, 0.4)), () => text('COX-1 ✕', 910, 314, { size: 30, color: C.red }));
      with_(ease(T.f(3, 0.5, 0.7)), () => text('Menos moco', 910, 360, { size: 26, color: C.ink2 }));
    });

    // 4 · Úlcera que sangra
    with_(dimFor(4), () => {
      if (ulc > 0) {
        g.save(); g.beginPath(); crater(); g.strokeStyle = 'rgba(255,84,112,0.9)'; g.lineWidth = 6; g.stroke(); g.restore();
        if (bleed > 0) with_(ease(T.f(4, 0.5, 0.65)) * bleed, () => flow([[UX, yVes - 10], [UX, yMuc - 40], [UX - 40, 360]], t, { n: 9, speed: 0.45, color: C.blood, r: 9 }));
      }
      pill('Úlcera', UX, 300, ease(T.f(4, 0.3, 0.5)), { fill: C.pink, size: 30 });
      if (k === 4) ring(UX, yVes, 50, t, { color: C.red });
      with_(ease(T.f(4, 0.65, 0.85)), () => text('Hematemesis o melena', 540, 812, { size: 36, color: C.pink }));
    });

    // 5 · Glasgow-Blatchford
    with_(dimFor(5), () => {
      with_(ease(T.f(5, 0, 0.15)), () => text('Glasgow-Blatchford', 540, 888, { size: 36, color: C.gold }));
      const items = [['BUN · Hb', 330, 952], ['PAS · FC', 750, 952], ['Melena · síncope', 330, 1020], ['Hepatopatía · IC', 750, 1020]];
      items.forEach(([l, x, y], i) => pill(l, x, y, ease(T.f(5, 0.12 + i * 0.1, 0.27 + i * 0.1)), { fill: '#3B4590', color: C.ink, size: 28 }));
      pill('0–1 puntos → ambulatorio', 540, 1095, ease(T.f(5, 0.75, 0.92)), { fill: C.green, size: 30 });
    });

    // 6 · Manejo: reanima, IBP IV, endoscopia ≤24 h
    if (k >= 6) {
      pill('Reanima · Hb <7', 200, 1205, ease(T.f(6, 0.02, 0.18)), { fill: C.gold, size: 28 });
      arrow(342, 1205, 462, 1205, T.f(6, 0.2, 0.3), { color: C.ink2, width: 6 });
      pill('IBP IV', 540, 1205, ease(T.f(6, 0.28, 0.42)), { fill: C.purple, color: '#fff', size: 28 });
      block('IBP', 321, 516, ease(T.f(6, 0.3, 0.45)));
      arrow(618, 1205, 738, 1205, T.f(6, 0.6, 0.7), { color: C.ink2, width: 6 });
      pill('Endoscopia ≤24 h', 885, 1205, ease(T.f(6, 0.68, 0.82)), { fill: C.cyan, size: 28 });
    }

    // 7 · Perla y trampa
    if (k === 7) {
      const a = ease(T.f(7, 0, 0.15));
      with_(a, () => {
        g.fillStyle = 'rgba(11,14,42,0.88)'; g.fillRect(0, 0, MK.W, MK.H);
        headline(heads[7], t - T.s(7), C.gold);
        text('H. pylori o AINE', 540, 470, { size: 70, color: C.gold });
        text('Toda úlcera, hasta demostrar lo contrario', 540, 560, { size: 34, color: C.ink2, weight: 600 });
        with_(ease(T.f(7, 0.4, 0.55)), () => {
          text('Primero reanima', 540, 800, { size: 70, color: C.red });
          text('Endoscopia antes de 6 h no baja la mortalidad', 540, 890, { size: 34, color: C.ink2, weight: 600, maxW: 900 });
          text('Y nada de ácido tranexámico', 540, 945, { size: 34, color: C.ink2, weight: 600 });
        });
      });
    }
  }
};
