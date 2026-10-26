// Estenosis mitral en 1 minuto (tema mitral). Válvula estrecha → aurícula grande, FA y trombo → pulmón → VD.
// T.s(i)/T.e(i)/T.d(i): inicio, fin y duración de la escena i; T.f(i, a, b): avance 0→1 entre las fracciones a y b de la escena i.
window.CLIP = {
  topic: 'mitral', title: 'Estenosis mitral en 1 minuto', sub: 'Válvula estrecha, aurícula grande, FA y un pulmón congestionado', color: '#B48CFF',
  scenes: [
    { say: 'La estenosis mitral, en un minuto.', min: 3.5 },
    { say: 'La causa principal es la fiebre reumática: fusiona las comisuras, engruesa las valvas y estrecha la mitral.' },
    { say: 'En diástole, la sangre pasa a chorro al ventrículo: chasquido de apertura y retumbo diastólico. El ventrículo izquierdo queda protegido.' },
    { say: 'La presión se acumula en la aurícula izquierda, que se dilata y fibrila. La sangre se estanca, se forma un trombo y puede embolizar al cerebro.' },
    { say: 'La presión sigue hacia atrás: congestión pulmonar, disnea e hipertensión pulmonar, y al final falla el ventrículo derecho.' },
    { say: 'Todo lo que acorta la diástole la descompensa: taquicardia, fibrilación auricular, embarazo. Por eso el betabloqueador mejora los síntomas.' },
    { say: 'Con fibrilación auricular o trombo, warfarina. Con área de uno punto cinco o menos y síntomas, valvuloplastia con balón si la anatomía es favorable.' },
    { say: 'Trampa: en la estenosis mitral reumática con fibrilación auricular, el anticoagulante es warfarina, no apixabán ni rivaroxabán.', min: 7 }
  ],
  draw(t, T) {
    const { C, ease, inOut, lerp, clamp, text, pill, arrow, ring, gauge, organ, shapes, titleCard, headline, bg, with_, rr } = MK;
    const main = MK.g; let g = main;
    bg(t);
    const k = T.cur;
    if (k === 0) { titleCard(t - T.s(0), this.title, this.sub, this.color); return; }
    const heads = ['', 'Fiebre reumática: mitral estrecha', 'Diástole: chasquido y retumbo', 'AI grande → FA y trombo', 'Congestión → HP → falla del VD', 'Diástole corta = descompensación', 'Warfarina y valvuloplastia con balón', 'Trampa del examen'];
    headline(heads[k], t - T.s(k), this.color);
    const all = k >= 6;
    const dimOf = (...ids) => (all || ids.includes(k) ? 1 : 0.42);

    const VX = 540, VY = 660;
    const rheum = ease(T.f(1, 0.2, 0.7)), bal = ease(T.f(6, 0.72, 0.9));
    const sten = rheum * (1 - 0.55 * bal);
    const laGrow = ease(T.f(3, 0.05, 0.4)), ra = lerp(150, 205, laGrow), ry = ra * 0.8, cy = VY - ry + 14;
    const rvDil = ease(T.f(4, 0.55, 0.85));
    const thr = ease(T.f(3, 0.45, 0.65));
    const fa = ease(T.f(3, 0.15, 0.35));
    const cyc = (t * (fa > 0.5 ? 1.5 : 1.1)) % 1, dia = cyc > 0.38 ? Math.sin((Math.PI * (cyc - 0.38)) / 0.62) : 0;
    const ear = [VX - ra * 0.82, cy - ry * 0.62];

    // ── Corazón: se dibuja aparte y se atenúa entero
    const oc = this._oc || (this._oc = Object.assign(document.createElement('canvas'), { width: MK.W, height: MK.H }));
    const ox = oc.getContext('2d'); ox.setTransform(1, 0, 0, 1, 0, 0); ox.globalAlpha = 1; ox.clearRect(0, 0, MK.W, MK.H);
    MK.use(ox); g = ox;
    (() => {
      // VD (detrás)
      const rx = lerp(70, 120, rvDil);
      g.fillStyle = C.organ; g.beginPath(); g.ellipse(VX - 170 - rx * 0.55, 920, rx + 22, 192, 0, 0, Math.PI * 2); g.fill();
      g.fillStyle = '#3A1220'; g.beginPath(); g.ellipse(VX - 170 - rx * 0.55, 920, rx, 170, 0, 0, Math.PI * 2); g.fill();
      // VI (normal)
      g.fillStyle = C.organ; g.beginPath(); g.ellipse(VX, 900, 170, 220, 0, 0, Math.PI * 2); g.fill();
      g.fillStyle = '#3A1220'; g.beginPath(); g.ellipse(VX, 905, 142, 192, 0, 0, Math.PI * 2); g.fill();
      // AI que crece + orejuela
      g.fillStyle = C.organ; g.beginPath(); g.ellipse(VX, cy, ra + 20, ry + 20, 0, 0, Math.PI * 2); g.fill();
      g.beginPath(); g.ellipse(ear[0], ear[1], 52, 38, -0.5, 0, Math.PI * 2); g.fill();
      g.fillStyle = '#3A1220'; g.beginPath(); g.ellipse(VX, cy, ra, ry, 0, 0, Math.PI * 2); g.fill();
      g.beginPath(); g.ellipse(ear[0], ear[1], 34, 22, -0.5, 0, Math.PI * 2); g.fill();
      // cuello valvular
      g.fillStyle = C.organ; g.fillRect(VX - 80, VY - 20, 160, 50);
      g.fillStyle = '#3A1220'; g.fillRect(VX - 58, VY - 24, 116, 58);
      // sangre AI → VI (chorro estrecho y turbulento si hay estenosis)
      for (let i = 0; i < 26; i++) {
        const u = (t * lerp(0.35, 0.7, sten) + i / 26) % 1, lane = ((i * 0.618) % 1) * 2 - 1;
        let x, y;
        if (u < 0.55) { const q = u / 0.55; y = lerp(cy - ry * 0.5, VY - 6, q); x = VX + lane * lerp(ra * 0.7, lerp(50, 14, sten), q * q); }
        else { const q = (u - 0.55) / 0.45; y = lerp(VY - 6, 1020, q); x = VX + lane * lerp(lerp(50, 14, sten), 110, q) + sten * Math.sin(t * 8 + i) * 18 * q; }
        g.fillStyle = C.blood; g.beginPath(); g.ellipse(x, y, 10, 7, 0, 0, Math.PI * 2); g.fill();
      }
      // valvas (domo en diástole)
      const open = dia;
      [-1, 1].forEach((s) => {
        const hx = VX + s * 58, hy = VY, tx = VX + s * lerp(6, lerp(46, 14, sten), open), ty = VY + lerp(14, 70, open);
        g.strokeStyle = sten > 0.4 ? '#F4E9DC' : '#F7B6C2'; g.lineWidth = lerp(8, 16, sten); g.lineCap = 'round';
        g.beginPath(); g.moveTo(hx, hy); g.quadraticCurveTo(VX + s * 54, (hy + ty) / 2 + 10, tx, ty); g.stroke();
      });
      // trombo en la orejuela
      if (thr > 0) { g.fillStyle = '#9E1F35'; g.beginPath(); g.ellipse(ear[0] + 4, ear[1] + 2, 22 * thr, 15 * thr, -0.5, 0, Math.PI * 2); g.fill(); }
      // balón de valvuloplastia
      const bl = ease(T.f(6, 0.55, 0.72)) * (1 - ease(T.f(6, 0.9, 1)));
      if (bl > 0.01) with_(clamp(bl * 3), () => { g.fillStyle = 'rgba(98,227,255,0.85)'; g.beginPath(); g.ellipse(VX, VY + 22, 46 * bl, 34 * bl, 0, 0, Math.PI * 2); g.fill(); g.strokeStyle = '#E8ECFF'; g.lineWidth = 5; g.beginPath(); g.moveTo(VX, VY + 22); g.lineTo(VX, 1100); g.stroke(); });
      text('AI', VX, cy - ry * 0.2, { size: 44, color: 'rgba(244,241,255,0.6)' });
      text('VI', VX, 960, { size: 44, color: 'rgba(244,241,255,0.6)' });
      text('VD', VX - 170 - rx * 0.55, 960, { size: 36, color: 'rgba(244,241,255,0.6)' });
    })();
    MK.use(main); g = main;
    with_(dimOf(1, 2, 3, 4, 6) * ease(T.f(1, 0, 0.2)), () => g.drawImage(oc, 0, 0));

    // ── Escena 1
    with_(dimOf(1), () => {
      pill('Fiebre reumática', 190, 600, ease(T.f(1, 0.15, 0.35)), { fill: C.purple, color: '#fff', size: 28 });
      with_(ease(T.f(1, 0.5, 0.7)), () => { text('comisuras fusionadas', 190, 652, { size: 24, color: C.ink2, weight: 600 }); text('valvas gruesas', 190, 684, { size: 24, color: C.ink2, weight: 600 }); });
      if (k === 1) { g.save(); ring(VX, VY + 20, 70, t, { color: C.purple }); g.restore(); }
    });
    // ── Escena 2
    with_(dimOf(2), () => {
      pill('Chasquido + retumbo', 870, 650, ease(T.f(2, 0.3, 0.5)), { fill: C.gold, size: 27 });
      with_(ease(T.f(2, 0.4, 0.55)), () => text('diastólico, en el ápex', 870, 705, { size: 23, color: C.ink2, weight: 600 }));
      with_(ease(T.f(2, 0.7, 0.85)), () => text('normal', VX, 1010, { size: 26, color: C.green }));
    });
    // ── Escena 3: AI dilatada, FA, trombo, embolia
    with_(dimOf(3), () => {
      with_(ease(T.f(3, 0.2, 0.4)), () => text('P ↑', VX, cy + ry * 0.3, { size: 38, color: C.gold }));
      const em = ease(T.f(3, 0.65, 0.85));
      arrow(ear[0] - 30, ear[1] - 20, 230, 260, em, { color: C.red, width: 6, cx: 240, cy: ear[1] - 10 });
      pill('Embolia al cerebro', 230, 215, ease(T.f(3, 0.75, 0.9)), { fill: C.red, color: '#fff', size: 26 });
      with_(ease(T.f(3, 0.5, 0.65)), () => text('trombo', ear[0] - 100, ear[1] + 8, { size: 24, color: C.pink }));
      // ECG en FA
      if (fa > 0) with_(fa, () => {
        const x0 = 90, x1 = 470, y0 = 1215;
        g.fillStyle = 'rgba(11,14,42,0.75)'; rr(x0 - 20, y0 - 70, x1 - x0 + 40, 115, 16); g.fill();
        const qrs = [0.12, 0.33, 0.47, 0.71, 0.86];
        g.strokeStyle = C.green; g.lineWidth = 4; g.lineJoin = 'round'; g.beginPath();
        for (let i = 0; i <= 300; i++) {
          const u = i / 300; let y = 4 * Math.sin(u * 95) + 3 * Math.sin(u * 61 + 1);
          qrs.forEach((q) => { const d = (u - q) * 300; if (d > -3 && d < 0) y += lerp(0, 46, (d + 3) / 3); else if (d >= 0 && d < 3) y += lerp(46, -12, d / 3); else if (d >= 3 && d < 5) y += lerp(-12, 0, (d - 3) / 2); });
          const x = lerp(x0, x1, u); if (i) g.lineTo(x, y0 - y); else g.moveTo(x, y0 - y);
        }
        g.stroke();
      });
      pill('FA', 270, 1135, fa, { fill: C.green, size: 26 });
    });
    // ── Escena 4: pulmón, presión pulmonar, VD
    with_(dimOf(4), () => {
      const lg = ease(T.f(4, 0, 0.2));
      organ(shapes.lungs, 890, 320, 0.62, lg);
      const cg = ease(T.f(4, 0.15, 0.4));
      if (cg > 0) with_(cg, () => { for (let i = 0; i < 14; i++) { const a = i * 2.4, r = 20 + (i * 13) % 55; g.fillStyle = 'rgba(98,227,255,0.8)'; g.beginPath(); g.arc(890 + (i % 2 ? 1 : -1) * (40 + r * 0.6), 330 + Math.sin(a) * 40, 6, 0, Math.PI * 2); g.fill(); } });
      arrow(VX + ra * 0.75, cy - ry * 0.4, 800, 380, ease(T.f(4, 0.05, 0.25)), { color: C.gold, width: 6, cx: 760, cy: cy - ry * 0.7 });
      pill('Congestión', 890, 470, ease(T.f(4, 0.2, 0.35)), { fill: C.cyan, size: 26 });
      if (T.f(4) > 0) with_(ease(T.f(4, 0.3, 0.45)), () => gauge(900, 990, lerp(0.35, 0.85, inOut(T.f(4, 0.35, 0.65))), 'P pulmonar', { r: 90 }));
      with_(ease(T.f(4, 0.7, 0.85)), () => text('VD dilatado', VX - 170 - lerp(70, 120, rvDil) * 0.55, 870, { size: 24, color: C.gold }));
    });
    // ── Escena 5: diástole corta
    with_(dimOf(5), () => {
      if (T.f(5) <= 0) return;
      const hr = ease(T.f(5, 0.1, 0.4)) * (1 - ease(T.f(5, 0.6, 0.85)));
      const x0 = 590, ys = 1170, sw = 130, dw = lerp(280, 110, hr);
      with_(ease(T.f(5, 0, 0.12)), () => {
        g.fillStyle = C.orange; rr(x0, ys - 26, sw, 52, 14); g.fill();
        g.fillStyle = C.blue; rr(x0 + sw + 6, ys - 26, dw, 52, 14); g.fill();
        text('Sístole', x0 + sw / 2, ys, { size: 22, color: '#241500', shadow: false });
        if (dw > 120) text('Diástole', x0 + sw + 6 + dw / 2, ys, { size: 22, color: '#0B1A33', shadow: false });
        text(hr > 0.5 ? 'FC ↑: menos tiempo para llenar' : 'Ciclo cardiaco', 790, ys - 55, { size: 23, color: hr > 0.5 ? C.red : C.ink2, weight: 600 });
      });
      pill('Betabloqueador', 790, 1252, ease(T.f(5, 0.6, 0.75)), { fill: C.green, size: 26 });
    });
    // ── Escena 6: tratamiento
    with_(dimOf(6), () => {
      if (T.f(6) <= 0) return;
      pill('Warfarina', 180, 470, ease(T.f(6, 0.1, 0.28)), { fill: C.gold, size: 28 });
      with_(ease(T.f(6, 0.18, 0.32)), () => text('si FA o trombo', 180, 522, { size: 23, color: C.ink2, weight: 600 }));
      pill('Balón', 870, 760, ease(T.f(6, 0.5, 0.65)), { fill: C.cyan, size: 28 });
      with_(ease(T.f(6, 0.55, 0.7)), () => { text('área ≤1.5 cm² + síntomas', 870, 812, { size: 22, color: C.ink2, weight: 600, maxW: 300 }); text('anatomía favorable', 870, 844, { size: 22, color: C.dim, weight: 600 }); });
    });

    // ── Trampa
    if (k === 7) {
      const a = ease(T.f(7, 0, 0.15));
      with_(a, () => {
        bg(t); g.fillStyle = 'rgba(11,14,42,0.35)'; g.fillRect(0, 0, MK.W, MK.H);
        headline(heads[7], t - T.s(7), C.gold);
        text('Estenosis mitral reumática + FA', 540, 420, { size: 52, color: C.ink, maxW: 960 });
        text('Warfarina', 540, 540, { size: 88, color: C.gold });
        with_(ease(T.f(7, 0.45, 0.6)), () => {
          text('No apixabán ni rivaroxabán', 540, 760, { size: 56, color: C.red, maxW: 960 });
          text('INVICTUS: más eventos con rivaroxabán', 540, 850, { size: 34, color: C.ink2, weight: 600, maxW: 860 });
        });
      });
    }
  }
};
