// DM2 en 1 minuto (tema dm2): resistencia a la insulina, falla de la célula β y dónde actúa cada antidiabético.
// T.s(i)/T.e(i)/T.d(i): inicio, fin y duración de la escena i; T.f(i, a, b): avance 0→1 entre las fracciones a y b de la escena i.
window.CLIP = {
  topic: 'dm2', title: 'DM2 en 1 minuto', sub: 'Resistencia a la insulina, falla de la célula β y dónde actúa cada fármaco', color: '#FF9B3D',
  scenes: [
    { say: 'La diabetes tipo dos, en un minuto.', min: 3.5 },
    { say: 'La insulina se une a su receptor en el músculo y manda el GLUT cuatro a la membrana. Por ahí entra la glucosa.' },
    { say: 'En la diabetes tipo dos hay resistencia a la insulina: la señal se bloquea, el GLUT cuatro se queda atrapado y la glucosa sube.' },
    { say: 'Al principio, la célula beta compensa con más insulina. Con los años se agota, y aparece la hiperglucemia.' },
    { say: 'La metformina frena la producción de glucosa en el hígado. Sola no causa hipoglucemia.' },
    { say: 'Las flozinas bloquean el SGLT dos del túbulo proximal: la glucosa y el sodio se van por la orina.' },
    { say: 'Las glutidas imitan a la incretina: más insulina solo con glucosa alta, menos glucagón y más saciedad.' },
    { say: 'Perla: con infarto, evento vascular cerebral, insuficiencia cardiaca o enfermedad renal, agrega flozina o glutida aunque la hemoglobina glucosilada esté en meta. Flozina: falla y filtrado. Glutida: grasa y gordura.', min: 8 }
  ],
  draw(t, T) {
    const { C, ease, inOut, lerp, clamp, text, pill, arrow, ring, block, gauge, organ, shapes, titleCard, headline, bg, with_, rr } = MK;
    const g = MK.g;
    // Sello de bloqueo con la etiqueta a un lado (x, y: la cruz; px, py: la píldora)
    const stamp = (label, x, y, px, py, prog) => {
      if (prog <= 0) return;
      const s = lerp(1.8, 1, ease(prog));
      g.save(); g.translate(x, y); g.rotate(-0.12); g.scale(s, s); g.globalAlpha *= clamp(prog * 3);
      g.strokeStyle = C.red; g.lineWidth = 14; g.lineCap = 'round';
      g.beginPath(); g.moveTo(-38, -38); g.lineTo(38, 38); g.moveTo(38, -38); g.lineTo(-38, 38); g.stroke(); g.restore();
      pill(label, px, py, prog, { fill: C.red, color: '#fff', size: 28 });
    };
    bg(t);
    const k = T.cur;
    if (k === 0) { titleCard(t - T.s(0), this.title, this.sub, this.color); return; }
    const heads = ['', 'Insulina → GLUT4 → entra la glucosa', 'Resistencia: la señal se bloquea', 'La célula β compensa… y se agota', 'Metformina: frena al hígado', 'iSGLT2: la glucosa se va por la orina', 'arGLP-1: imita a la incretina', 'Perla para el examen'];
    headline(heads[k], t - T.s(k), this.color);
    // Atenuación por zona: la zona de la escena actual a 1; al final de la escena 6 todo vuelve a 1 (resumen)
    const back = k >= 7 ? 1 : k === 6 ? ease(T.f(6, 0.72, 0.95)) : 0;
    const zone = (...sc) => (sc.includes(k) ? 1 : lerp(0.42, 1, back));

    // Nivel de glucosa en sangre a lo largo del clip
    let glu = 0.3;
    if (k >= 2) glu = lerp(0.3, 0.6, inOut(T.f(2, 0.45, 0.9)));
    if (k >= 3) glu = lerp(0.6, 0.45, inOut(T.f(3, 0.1, 0.35))) + 0.4 * inOut(T.f(3, 0.5, 0.85));
    if (k >= 4) glu = lerp(0.85, 0.7, inOut(T.f(4, 0.45, 0.85)));
    if (k >= 5) glu = lerp(0.7, 0.55, inOut(T.f(5, 0.5, 0.9)));
    if (k >= 6) glu = lerp(0.55, 0.38, inOut(T.f(6, 0.4, 0.8)));

    // ── Vaso sanguíneo (centro, siempre visible) con glucosa que circula
    const VY = 650, VH = 92;
    with_(ease(T.f(1, 0, 0.15)), () => {
      g.fillStyle = '#3A1220'; rr(40, VY - VH / 2, 1000, VH, VH / 2); g.fill();
      g.fillStyle = C.organ; g.fillRect(70, VY - VH / 2 - 10, 940, 10); g.fillRect(70, VY + VH / 2, 940, 10);
      for (let i = 0; i < 7; i++) { const u = (t * 0.06 + i / 7) % 1; g.fillStyle = 'rgba(224,74,95,0.55)'; g.beginPath(); g.ellipse(80 + u * 920, VY + Math.sin(i * 2.3) * 22, 16, 10, 0, 0, 7); g.fill(); }
      const m = 4 + glu * 26;
      for (let i = 0; i < 30; i++) {
        if (i >= m) break;
        const u = (t * 0.07 + ((i * 7) % 30) / 30) % 1, a = clamp(m - i);
        with_(a, () => { g.fillStyle = C.gold; g.beginPath(); g.arc(80 + u * 920, VY + Math.sin(i * 1.7) * 28, 8, 0, 7); g.fill(); });
      }
      text('Sangre', 975, VY + VH / 2 + 34, { size: 24, color: C.dim, weight: 600 });
    });
    // Medidor de glucosa
    with_(ease(T.f(1, 0.1, 0.3)), () => gauge(540, 480, glu, 'Glucosa', { r: 78 }));

    // ── Músculo (escenas 1 y 2)
    const MX = 70, MY = 790, MW = 430, MH = 360;
    const glutUp = k === 1 ? ease(T.f(1, 0.45, 0.72)) : k >= 2 ? 1 - ease(T.f(2, 0.3, 0.6)) : 0;
    with_(zone(1, 2), () => {
      const a = ease(T.f(1, 0, 0.2));
      if (a <= 0) return;
      with_(a, () => {
        g.fillStyle = '#5A2236'; rr(MX, MY, MW, MH, 44); g.fill();
        g.save(); rr(MX, MY, MW, MH, 44); g.clip(); g.strokeStyle = 'rgba(255,143,163,0.13)'; g.lineWidth = 10;
        for (let x = MX + 30; x < MX + MW; x += 34) { g.beginPath(); g.moveTo(x, MY); g.lineTo(x, MY + MH); g.stroke(); }
        g.restore();
        g.strokeStyle = C.pink; g.lineWidth = 8; rr(MX, MY, MW, MH, 44); g.stroke();
        text('Músculo', MX + MW / 2, MY + MH + 36, { size: 28, color: C.ink2, weight: 700 });
      });
      // Receptor de insulina (Y) en la membrana
      const rx = 150, ry = MY;
      with_(ease(T.f(1, 0.1, 0.3)), () => {
        g.strokeStyle = C.cyan; g.lineWidth = 10; g.lineCap = 'round';
        g.beginPath(); g.moveTo(rx, ry + 34); g.lineTo(rx, ry - 6); g.lineTo(rx - 20, ry - 36); g.moveTo(rx, ry - 6); g.lineTo(rx + 20, ry - 36); g.stroke();
        text('Receptor', rx, ry + 64, { size: 22, color: C.cyan, weight: 600 });
      });
      // Insulina que baja de la sangre al receptor
      const ip = ease(T.f(1, 0.12, 0.35));
      if (ip > 0) pill('Insulina', lerp(220, rx + 70, ip), lerp(VY, ry - 62, ip), ip, { fill: C.cyan, size: 24 });
      // Señal intracelular hacia las vesículas
      const sig = T.f(1, 0.3, 0.5);
      arrow(rx + 10, ry + 80, 290, ry + 210, sig, { color: C.ink2, width: 5, dash: [10, 10], cx: rx + 30, cy: ry + 200 });
      // GLUT4: vesículas que suben a la membrana
      [340, 440].forEach((gx, i) => {
        const yy = lerp(MY + 250, MY, glutUp);
        with_(ease(T.f(1, 0.2, 0.4)), () => {
          g.fillStyle = C.green; rr(gx - 14, yy - 26, 28, 52, 10); g.fill();
          g.fillStyle = '#5A2236'; g.fillRect(gx - 4, yy - 26, 8, 52);
        });
        // Glucosa que entra por el GLUT4
        if (glutUp > 0.85) with_(glutUp, () => {
          for (let j = 0; j < 3; j++) { const u = (t * 0.6 + j / 3 + i * 0.17) % 1; g.fillStyle = C.gold; g.beginPath(); g.arc(gx, lerp(VY + 30, MY + 150, u), 8, 0, 7); g.fill(); }
        });
      });
      with_(ease(T.f(1, 0.3, 0.5)), () => text(k >= 2 && glutUp < 0.5 ? 'GLUT4 atrapado' : 'GLUT4', 390, lerp(MY + 310, MY + 64, glutUp), { size: 24, color: C.green, weight: 700 }));
      if (k === 1) ring(390, MY, 70, t, { color: C.green });
      // Resistencia: la señal se corta
      if (k >= 2) {
        const bp = ease(T.f(2, 0.15, 0.35));
        with_(bp, () => {
          g.save(); g.translate(202, MY + 172); g.scale(lerp(1.6, 1, bp), lerp(1.6, 1, bp)); g.strokeStyle = C.red; g.lineWidth = 12; g.lineCap = 'round';
          g.beginPath(); g.moveTo(-26, -26); g.lineTo(26, 26); g.moveTo(26, -26); g.lineTo(-26, 26); g.stroke(); g.restore();
        });
        with_(ease(T.f(2, 0.3, 0.5)), () => text('Señal bloqueada', 365, MY + 120, { size: 26, color: C.red, weight: 700 }));
        if (k === 2) pill('Glucosa ↑', 760, VY, ease(T.f(2, 0.6, 0.8)), { fill: C.gold, size: 28 });
      }
    });

    // ── Páncreas y célula β (escenas 3 y 6)
    const PX = 230, PY = 300;
    with_(zone(3, 6), () => {
      const a = ease(T.f(3, 0, 0.18));
      if (a <= 0) return;
      g.save(); g.translate(PX, PY); const s = lerp(0.6, 1, MK.pop(a)); g.scale(s, s); g.globalAlpha *= clamp(a * 2);
      g.fillStyle = '#E39B76'; g.beginPath();
      g.moveTo(-150, 10); g.bezierCurveTo(-150, -40, -90, -50, -40, -30); g.bezierCurveTo(10, -10, 60, -60, 110, -55);
      g.bezierCurveTo(160, -50, 170, 10, 130, 30); g.bezierCurveTo(80, 50, 20, 30, -30, 45); g.bezierCurveTo(-90, 60, -150, 55, -150, 10); g.fill();
      g.fillStyle = 'rgba(255,255,255,0.15)'; g.beginPath(); g.ellipse(60, -30, 40, 12, -0.2, 0, 7); g.fill();
      g.restore();
      // Islote: dorado sano → gris agotado
      const tired = k >= 3 ? ease(T.f(3, 0.5, 0.8)) : 0;
      const isl = ease(T.f(3, 0.12, 0.3));
      with_(isl, () => {
        g.fillStyle = tired > 0.5 ? '#8A8FB5' : C.gold; g.strokeStyle = '#241500'; g.lineWidth = 4;
        g.beginPath(); g.arc(PX - 10, PY + 5, lerp(34, 28, tired), 0, 7); g.fill(); g.stroke();
        text('β', PX - 10, PY + 7, { size: 34, color: '#241500', shadow: false });
      });
      if (k === 3) ring(PX - 10, PY + 5, 52, t, { color: C.gold });
      // Insulina que sale a la sangre: mucha al compensar, poca al agotarse
      const flowAmt = k === 3 ? lerp(0.5, 1, T.f(3, 0.1, 0.3)) * (1 - 0.8 * tired) : k >= 6 ? lerp(0.2, 0.75, ease(T.f(6, 0.25, 0.5))) : 0.2;
      const n = Math.round(10 * flowAmt);
      for (let j = 0; j < n; j++) {
        const u = (t * 0.45 + j / 10) % 1;
        g.fillStyle = C.cyan; g.beginPath(); g.arc(lerp(PX + 130, PX + 215, u), lerp(PY + 35, VY - 45, u), 7, 0, 7); g.fill();
      }
      const lab = ease(T.f(3, 0.2, 0.35));
      if (k === 3 && tired < 0.5) pill('Insulina ↑ (compensa)', PX - 10, PY + 120, lab, { fill: C.cyan, size: 24 });
      if (k >= 3 && tired >= 0.5 && k < 6) pill('Se agota: insulina ↓', PX - 10, PY + 120, 1, { fill: '#8A8FB5', size: 24, noPop: true });
      text('Páncreas', PX - 40, PY - 85, { size: 26, color: C.ink2, weight: 700 });
      // arGLP-1
      if (k >= 6) {
        const gp = ease(T.f(6, 0.1, 0.3));
        pill('arGLP-1', PX - 10, PY + 120, gp, { fill: C.green, size: 28 });
        with_(ease(T.f(6, 0.3, 0.5)), () => text('Insulina ↑ si glucosa alta', PX - 10, PY + 178, { size: 22, color: C.cyan, weight: 700 }));
        with_(ease(T.f(6, 0.45, 0.6)), () => text('Glucagón ↓ · saciedad', PX - 10, PY + 212, { size: 22, color: C.green, weight: 700 }));
        if (k === 6) ring(PX - 10, PY + 5, 52, t, { color: C.green });
      }
    });

    // ── Hígado y metformina (escena 4)
    const LX = 830, LY = 320;
    with_(zone(4), () => {
      organ(shapes.liver, LX, LY, 0.78, ease(T.f(4, 0, 0.2)));
      if (t >= T.s(4)) with_(ease(T.f(4, 0.05, 0.2)), () => text('Hígado', LX + 20, LY - 115, { size: 26, color: C.ink2, weight: 700 }));
      // Glucosa que sale del hígado a la sangre
      const out = k >= 4 ? (k === 4 ? lerp(1, 0.34, ease(T.f(4, 0.45, 0.7))) : 0.34) : 0;
      if (out > 0) with_(ease(T.f(4, 0.1, 0.25)), () => {
        const n = Math.round(6 * out);
        for (let j = 0; j < 6; j++) {
          const u = (t * 0.5 + j / 6) % 1, y = lerp(LY + 70, VY - 40, u), pass = j < n;
          if (!pass && y > LY + 150) continue;
          g.fillStyle = C.gold; g.beginPath(); g.arc(LX - 40 + Math.sin(j * 2) * 14, y, 8, 0, 7); g.fill();
        }
      });
      if (k === 4) pill('Produce glucosa', LX + 90, LY + 150, ease(T.f(4, 0.12, 0.3)) * (1 - ease(T.f(4, 0.4, 0.5))), { fill: C.gold, size: 24 });
      stamp('Metformina', LX - 40, LY + 150, LX + 105, LY + 150, ease(T.f(4, 0.35, 0.5)));
    });

    // ── Riñón, túbulo proximal y flozina (escena 5)
    const TX0 = 580, TX1 = 1010, TY = 1000;
    with_(zone(5), () => {
      const a = ease(T.f(5, 0, 0.18));
      if (a <= 0) return;
      organ(shapes.kidney, 650, 1185, 0.42, a);
      with_(a, () => {
        g.fillStyle = '#2A3170'; rr(TX0, TY - 40, TX1 - TX0, 80, 40); g.fill();
        g.fillStyle = '#5C6BC0'; g.fillRect(TX0 + 30, TY - 40, TX1 - TX0 - 60, 10); g.fillRect(TX0 + 30, TY + 30, TX1 - TX0 - 60, 10);
        text('Túbulo proximal', 760, TY + 78, { size: 26, color: C.ink2, weight: 700 });
      });
      const SX = 700;
      // SGLT2 en la pared
      with_(ease(T.f(5, 0.1, 0.25)), () => { g.fillStyle = C.purple; rr(SX - 24, TY - 54, 48, 34, 10); g.fill(); });
      pill('SGLT2', SX + 100, TY - 72, ease(T.f(5, 0.12, 0.3)), { fill: C.purple, color: '#fff', size: 22 });
      const blocked = ease(T.f(5, 0.4, 0.55));
      // Glucosa en el túbulo: se reabsorbe (sube a la sangre) o sigue a la orina
      for (let j = 0; j < 6; j++) {
        const u = (t * 0.35 + j / 6) % 1;
        if (blocked < 0.5) {
          const x = lerp(TX0 + 30, SX, Math.min(1, u * 2)), y = u < 0.5 ? TY : lerp(TY - 40, VY + 50, (u - 0.5) * 2);
          with_(a * (1 - blocked * 2), () => { g.fillStyle = C.gold; g.beginPath(); g.arc(x, y, 8, 0, 7); g.fill(); });
        } else with_((blocked - 0.5) * 2, () => { g.fillStyle = C.gold; g.beginPath(); g.arc(lerp(TX0 + 30, TX1 + 10, u), TY + Math.sin(j * 2.2) * 14, 8, 0, 7); g.fill(); });
      }
      // Gota de orina con glucosa y sodio
      with_(blocked, () => {
        g.fillStyle = '#F2D45C'; g.beginPath(); g.moveTo(975, TY + 110); g.bezierCurveTo(1005, TY + 150, 1010, TY + 175, 975, TY + 190); g.bezierCurveTo(940, TY + 175, 945, TY + 150, 975, TY + 110); g.fill();
        text('Orina: glucosa y Na', 870, TY + 240, { size: 24, color: C.gold, weight: 700 });
      });
      stamp('iSGLT2', SX, TY - 170, SX + 150, TY - 170, ease(T.f(5, 0.35, 0.5)));
    });

    // ── Perla
    if (k === 7) {
      const a = ease(T.f(7, 0, 0.12));
      with_(a, () => {
        g.fillStyle = 'rgba(11,14,42,0.93)'; g.fillRect(0, 0, MK.W, MK.H);
        headline(heads[7], t - T.s(7), C.gold);
        text('IAM · EVC · IC · ERC', 540, 360, { size: 62, color: C.gold });
        text('→ agrega iSGLT2 o arGLP-1', 540, 460, { size: 52, color: C.ink });
        text('aunque la A1c ya esté en meta', 540, 545, { size: 36, color: C.ink2, weight: 600 });
        text('(no subas metformina ni agregues sulfonilurea)', 540, 600, { size: 30, color: C.dim, weight: 600 });
        with_(ease(T.f(7, 0.62, 0.75)), () => {
          text('FLOZINA = Falla y Filtrado', 540, 820, { size: 50, color: C.purple });
          text('insuficiencia cardiaca y ERC', 540, 885, { size: 32, color: C.ink2, weight: 600 });
          text('GLUTIDA = Grasa y Gordura', 540, 1010, { size: 50, color: C.green });
          text('ECV aterosclerótica y obesidad', 540, 1075, { size: 32, color: C.ink2, weight: 600 });
        });
      });
    }
  }
};
