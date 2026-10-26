// Estenosis aórtica en 1 minuto (tema aortica). Orificio fijo, VI que se engrosa, tríada y cuándo intervenir.
// T.s(i)/T.e(i)/T.d(i): inicio, fin y duración de la escena i; T.f(i, a, b): avance 0→1 entre las fracciones a y b de la escena i.
window.CLIP = {
  topic: 'aortica', title: 'Estenosis aórtica en 1 minuto', sub: 'Orificio fijo, ventrículo que se engrosa y la tríada que obliga a intervenir', color: '#FF9B3D',
  scenes: [
    { say: 'La estenosis aórtica, en un minuto.', min: 3.5 },
    { say: 'Las valvas se calcifican y casi no se abren. En mayores la causa es degenerativa; en menores de sesenta y cinco, la válvula bicúspide.' },
    { say: 'La sangre sale a chorro por un orificio estrecho: soplo sistólico expulsivo que se irradia a las carótidas, con un pulso débil y tardío.' },
    { say: 'Para vencer ese orificio fijo, el ventrículo izquierdo engruesa su pared: hipertrofia concéntrica, por sobrecarga de presión.' },
    { say: 'De ahí la tríada: angina, porque el músculo grueso gasta más oxígeno; síncope de esfuerzo, porque el gasto no puede subir; y disnea por insuficiencia cardiaca.' },
    { say: 'Por eco es grave con velocidad de cuatro metros por segundo o más, gradiente medio de cuarenta o más, o área de un centímetro cuadrado o menos.' },
    { say: 'Grave y con síntomas, se interviene: TAVI por catéter en mayores o de alto riesgo, y cirugía en jóvenes de bajo riesgo o con válvula bicúspide.' },
    { say: 'Trampa: no des nitroglicerina en la estenosis aórtica grave. El ventrículo depende de la precarga y puede caer en hipotensión grave.', min: 7 }
  ],
  draw(t, T) {
    const { C, ease, inOut, lerp, clamp, text, pill, ring, titleCard, headline, bg, with_, rr } = MK;
    const main = MK.g; let g = main;
    bg(t);
    const k = T.cur;
    if (k === 0) { titleCard(t - T.s(0), this.title, this.sub, this.color); return; }
    const heads = ['', 'Valvas calcificadas: orificio estrecho', 'Chorro rápido: soplo a carótidas', 'VI: hipertrofia concéntrica', 'Angina · Síncope · Disnea', 'Grave por ecocardiograma', 'Grave sintomática → TAVI o cirugía', 'Trampa del examen'];
    headline(heads[k], t - T.s(k), this.color);
    const all = k >= 6;
    const dimOf = (...ids) => (all || ids.includes(k) ? 1 : 0.42);
    const lead = (x1, y1, x2, y2) => { g.save(); g.strokeStyle = 'rgba(244,241,255,0.7)'; g.lineWidth = 3; g.setLineDash([8, 8]); g.beginPath(); g.moveTo(x1, y1); g.lineTo(x2, y2); g.stroke(); g.restore(); };

    const VX = 540, VY = 610, LH = 40;            // válvula y media luz de la aorta
    const calc = ease(T.f(1, 0.2, 0.7)), tav = ease(T.f(6, 0.3, 0.6));
    const sten = calc * (1 - tav);
    const maxOpen = lerp(1, 0.18, sten);
    const cyc = (t * 1.1) % 1, sys = cyc < 0.42 ? Math.sin((Math.PI * cyc) / 0.42) : 0;
    const hyp = ease(T.f(3, 0.1, 0.6));
    const appear = ease(T.f(1, 0, 0.2));

    // ── Aorta (ascendente + cayado + rama a carótidas) y VI
    const aortaPath = () => { g.beginPath(); g.moveTo(VX, VY + 4); g.lineTo(VX, 370); g.quadraticCurveTo(VX, 245, 680, 245); g.lineTo(985, 245); };
    // Se dibuja en un lienzo aparte a opacidad completa y luego se atenúa entero (sin costuras entre capas)
    const oc = this._oc || (this._oc = Object.assign(document.createElement('canvas'), { width: MK.W, height: MK.H }));
    const ox = oc.getContext('2d'); ox.setTransform(1, 0, 0, 1, 0, 0); ox.globalAlpha = 1; ox.clearRect(0, 0, MK.W, MK.H);
    MK.use(ox); g = ox;
    (() => {
      g.lineCap = 'butt';
      g.strokeStyle = C.organ; g.lineWidth = 40; g.beginPath(); g.moveTo(705, 245); g.lineTo(705, 168); g.stroke();
      g.strokeStyle = '#3A1220'; g.lineWidth = 22; g.beginPath(); g.moveTo(705, 245); g.lineTo(705, 168); g.stroke();
      aortaPath(); g.strokeStyle = C.organ; g.lineWidth = 2 * LH + 40; g.stroke();
      aortaPath(); g.strokeStyle = '#3A1220'; g.lineWidth = 2 * LH; g.stroke();
      // VI: pared que se engruesa hacia dentro
      const wt = lerp(24, 62, hyp), sq = 1 - 0.05 * sys;
      g.fillStyle = C.organ; g.beginPath(); g.ellipse(VX, 850, 210, 240, 0, 0, Math.PI * 2); g.fill();
      g.fillStyle = 'rgba(255,255,255,0.08)'; g.beginPath(); g.ellipse(VX - 90, 760, 50, 26, -0.6, 0, Math.PI * 2); g.fill();
      g.fillStyle = '#3A1220'; g.beginPath(); g.ellipse(VX, 850 + wt * 0.15, (210 - wt) * sq, (240 - wt) * sq, 0, 0, Math.PI * 2); g.fill();
      g.fillStyle = '#3A1220'; g.fillRect(VX - LH, VY - 6, 2 * LH, 40);
      text('VI', VX, 900, { size: 44, color: 'rgba(244,241,255,0.55)' });
      // sangre: chorro que sube por la aorta (estrecho y rápido si hay estenosis)
      const n = 22, speed = lerp(0.45, 1.25, sten);
      for (let i = 0; i < n; i++) {
        const u = (t * speed + i / n) % 1, y = lerp(700, 360, u), lane = ((i * 0.618) % 1) * 2 - 1;
        const nearV = y > VY - 10;
        let spread = nearV ? lerp(LH - 10, 30, clamp((y - VY) / 90)) : lerp(LH - 10, 10, sten) + (VY - y) * 0.12 * sten;
        spread = Math.min(spread, LH - 8);
        const wob = sten * Math.sin(t * 9 + i * 1.7) * clamp((VY - y) / 80) * 10;
        g.fillStyle = C.blood; g.beginPath(); g.ellipse(VX + lane * spread + wob, y, 10, 7, 0, 0, Math.PI * 2); g.fill();
      }
      // válvula
      const op = sys * maxOpen;
      const leaf = (s) => {
        const hx = VX + s * LH, hy = VY + 2, tx = VX + s * lerp(4, LH - 6, op), ty = VY - lerp(6, 62, op);
        g.strokeStyle = lerp(0, 1, sten) > 0.5 ? '#F4E9DC' : '#F7B6C2'; g.lineWidth = lerp(8, 15, sten); g.lineCap = 'round';
        g.beginPath(); g.moveTo(hx, hy); g.quadraticCurveTo((hx + tx) / 2 + s * 4, (hy + ty) / 2 - 8, tx, ty); g.stroke();
        if (sten > 0.05) with_(sten, () => { g.fillStyle = C.gold; [0.35, 0.65].forEach((f) => { g.beginPath(); g.arc(lerp(hx, tx, f), lerp(hy, ty, f) - 4, 7, 0, Math.PI * 2); g.fill(); }); });
      };
      leaf(-1); leaf(1);
      // prótesis TAVI (stent con valvas finas) y catéter por la aorta
      if (tav > 0) with_(tav, () => {
        g.strokeStyle = '#D9E2FF'; g.lineWidth = 4;
        for (let i = 0; i < 6; i++) { const y = VY + 20 - i * 16; g.beginPath(); g.moveTo(VX - LH + 2, y); g.lineTo(VX - LH + 12, y - 8); g.moveTo(VX + LH - 2, y); g.lineTo(VX + LH - 12, y - 8); g.stroke(); }
        g.beginPath(); g.moveTo(VX - LH + 2, VY + 24); g.lineTo(VX - LH + 2, VY - 70); g.moveTo(VX + LH - 2, VY + 24); g.lineTo(VX + LH - 2, VY - 70); g.stroke();
      });
      const cat = ease(T.f(6, 0.05, 0.3)) * (1 - ease(T.f(6, 0.65, 0.85)));
      if (cat > 0) with_(cat, () => { aortaPath(); g.strokeStyle = '#E8ECFF'; g.lineWidth = 6; g.setLineDash([]); g.stroke(); });
    })();
    MK.use(main); g = main;
    with_(dimOf(1, 2, 3, 6) * appear, () => g.drawImage(oc, 0, 0));

    // ── Escena 1: causa
    with_(dimOf(1), () => {
      const a = ease(T.f(1, 0.45, 0.65));
      if (a > 0) with_(a, () => lead(370, 600, VX - LH - 6, VY - 10));
      pill('Valvas calcificadas', 230, 600, a, { fill: C.gold, size: 28 });
      with_(ease(T.f(1, 0.6, 0.75)), () => text('Mayor: degenerativa', 230, 660, { size: 26, color: C.ink2, weight: 600 }));
      with_(ease(T.f(1, 0.75, 0.9)), () => text('<65 años: bicúspide', 230, 700, { size: 26, color: C.ink2, weight: 600 }));
      if (k === 1) { g.save(); ring(VX, VY - 10, 60, t, { color: C.gold }); g.restore(); }
    });
    // ── Escena 2: soplo y pulso
    with_(dimOf(2), () => {
      pill('Soplo sistólico', 260, 340, ease(T.f(2, 0.15, 0.35)), { fill: C.orange, size: 28 });
      with_(ease(T.f(2, 0.3, 0.45)), () => { text('expulsivo, irradia', 260, 400, { size: 25, color: C.ink2, weight: 600 }); text('a carótidas', 260, 434, { size: 25, color: C.ink2, weight: 600 }); });
      const pa = ease(T.f(2, 0.55, 0.75));
      pill('Pulso parvus et tardus', 875, 700, pa, { fill: C.cyan, size: 26 });
      if (pa > 0) with_(pa, () => {
        const x0 = 780, x1 = 980, y0 = 800;
        g.strokeStyle = 'rgba(201,206,255,0.35)'; g.lineWidth = 4; g.beginPath();
        for (let i = 0; i <= 50; i++) { const u = i / 50, y = y0 - 55 * Math.sin(Math.PI * Math.min(1, u / 0.5)) * (u < 0.5 ? 1 : Math.max(0, 1 - (u - 0.5) * 1.6)); const x = lerp(x0, x1, u); if (i) g.lineTo(x, y); else g.moveTo(x, y); }
        g.stroke();
        g.strokeStyle = C.cyan; g.lineWidth = 6; g.beginPath();
        for (let i = 0; i <= 50; i++) { const u = i / 50, y = y0 - 26 * Math.pow(Math.sin(Math.PI * Math.min(1, u / 0.9)), 1.5); const x = lerp(x0, x1, u); if (i) g.lineTo(x, y); else g.moveTo(x, y); }
        g.stroke();
        text('débil y tardío', 880, 832, { size: 22, color: C.dim, weight: 600 });
      });
      if (k === 2) { g.save(); ring(VX, 470, 60, t, { color: C.orange }); g.restore(); }
    });
    // ── Escena 3: hipertrofia
    with_(dimOf(3), () => {
      const a = ease(T.f(3, 0.4, 0.6));
      with_(a, () => {
        text('Hipertrofia', 190, 800, { size: 32, color: C.ink });
        text('concéntrica', 190, 840, { size: 32, color: C.ink });
        text('sobrecarga de presión', 190, 890, { size: 23, color: C.dim, weight: 600, maxW: 250 });
      });
    });
    // ── Escena 4: tríada
    with_(dimOf(4), () => {
      const it = [['Angina', '↑ consumo de O₂', '5 años', C.red], ['Síncope', 'el gasto no sube', '3 años', C.orange], ['Disnea (IC)', 'insuficiencia cardiaca', '2 años', C.purple]];
      it.forEach(([n, d, yrs, col], i) => {
        const x = 200 + i * 340, pr = ease(T.f(4, 0.1 + i * 0.27, 0.25 + i * 0.27));
        pill(n, x, 1160, pr, { fill: col, color: i === 2 ? '#fff' : '#241500', size: 32 });
        with_(pr, () => text(d, x, 1222, { size: 24, color: C.ink2, weight: 600, maxW: 300 }));
      });
      with_(ease(T.f(4, 0.85, 1)), () => text('Sobrevida sin tratamiento: 5 · 3 · 2 años', 540, 1278, { size: 24, color: C.gold, weight: 600 }));
    });
    // ── Escena 5: criterios de gravedad
    with_(dimOf(5), () => {
      const a = ease(T.f(5, 0.05, 0.2)); if (a <= 0) return;
      with_(a, () => { g.fillStyle = 'rgba(20,26,66,0.9)'; rr(690, 320, 340, 300, 26); g.fill(); g.strokeStyle = C.gold; g.lineWidth = 3; g.stroke(); text('Grave si…', 860, 356, { size: 26, color: C.gold }); });
      [['≥ 4 m/s', 'velocidad pico'], ['≥ 40 mmHg', 'gradiente medio'], ['≤ 1 cm²', 'área valvular']].forEach(([v, l], i) => {
        const pr = ease(T.f(5, 0.15 + i * 0.22, 0.3 + i * 0.22));
        with_(pr, () => { text(v, 860, 412 + i * 74, { size: 38, color: C.ink }); text(l, 860, 446 + i * 74, { size: 21, color: C.dim, weight: 600 }); });
      });
    });
    // ── Escena 6: tratamiento
    with_(dimOf(6), () => {
      if (T.f(6) <= 0) return;
      pill('TAVI', 890, 900, ease(T.f(6, 0.3, 0.45)), { fill: C.cyan, size: 30 });
      with_(ease(T.f(6, 0.35, 0.5)), () => text('mayor o alto riesgo', 890, 950, { size: 24, color: C.ink2, weight: 600, maxW: 270 }));
      pill('Cirugía', 890, 1015, ease(T.f(6, 0.55, 0.7)), { fill: '#D9E2FF', size: 30 });
      with_(ease(T.f(6, 0.6, 0.75)), () => text('joven, bajo riesgo o bicúspide', 890, 1072, { size: 24, color: C.ink2, weight: 600, maxW: 270 }));
    });

    // ── Trampa
    if (k === 7) {
      const a = ease(T.f(7, 0, 0.15));
      with_(a, () => {
        bg(t); g.fillStyle = 'rgba(11,14,42,0.35)'; g.fillRect(0, 0, MK.W, MK.H);
        headline(heads[7], t - T.s(7), C.gold);
        text('Estenosis aórtica grave', 540, 430, { size: 60, color: C.gold });
        text('+ nitroglicerina', 540, 510, { size: 66, color: C.red });
        text('= hipotensión grave', 540, 590, { size: 66, color: C.red });
        with_(ease(T.f(7, 0.4, 0.55)), () => {
          text('El VI hipertrófico depende de la precarga', 540, 760, { size: 38, color: C.ink, maxW: 900 });
          text('Cuidado también con vasodilatadores potentes', 540, 850, { size: 32, color: C.ink2, weight: 600, maxW: 860 });
        });
      });
    }
  }
};
