// TEP en 1 minuto (tema tep). De la TVP al VD que falla, y el algoritmo según la estabilidad.
// T.s(i)/T.e(i)/T.d(i): inicio, fin y duración de la escena i; T.f(i, a, b): avance 0→1 entre las fracciones a y b de la escena i.
window.CLIP = {
  topic: 'tep', title: 'TEP en 1 minuto', sub: 'De la pierna al ventrículo derecho, y qué hacer según la estabilidad', color: '#4DB8FF',
  scenes: [
    { say: 'La tromboembolia pulmonar, en un minuto.', min: 3.5 },
    { say: 'Casi siempre empieza en la pierna: una trombosis venosa profunda, por estasis, daño endotelial o hipercoagulabilidad.' },
    { say: 'El trombo se desprende, sube por la vena cava, cruza el corazón derecho y se atora en la arteria pulmonar.' },
    { say: 'Las zonas ventiladas que ya no reciben sangre son espacio muerto: hay hipoxemia, taquicardia y disnea súbita.' },
    { say: 'Sube la resistencia pulmonar: el ventrículo derecho, de pared delgada, se dilata, empuja el tabique hacia el izquierdo y cae el gasto. Se muere de falla del ventrículo derecho.' },
    { say: 'Por eso todo se decide por la estabilidad: con choque o presión sistólica menor de noventa, es de alto riesgo y va a trombólisis sistémica.' },
    { say: 'Si está estable, usa Wells: si es probable, angiotomografía directa; si es improbable, dímero D, y si sale negativo, descartas. Confirmado, anticoagula.' },
    { say: 'Trampa: un TEP estable con ventrículo derecho dilatado y troponina alta no se tromboliza. Se anticoagula y se vigila.', min: 7 }
  ],
  draw(t, T) {
    const { C, ease, inOut, lerp, clamp, text, pill, arrow, ring, organ, shapes, titleCard, headline, bg, with_, rr } = MK;
    const main = MK.g; let g = main;
    bg(t);
    const k = T.cur;
    if (k === 0) { titleCard(t - T.s(0), this.title, this.sub, this.color); return; }
    const heads = ['', 'TVP: la tríada de Virchow', 'El émbolo viaja a la arteria pulmonar', 'Espacio muerto → hipoxemia', 'VD dilatado → cae el gasto', 'Inestable → trombólisis', 'Estable → Wells, dímero D, anticoagular', 'Trampa del examen'];
    headline(heads[k], t - T.s(k), this.color);
    const all = k >= 6;
    const dimOf = (...ids) => (all || ids.includes(k) ? 1 : 0.42);

    // Camino venoso: pantorrilla → ingle → cava → VD → arteria pulmonar → hilio
    const P = [[205, 820], [205, 600], [260, 634], [330, 648], [400, 632], [440, 575], [450, 500], [500, 412], [600, 356], [720, 344], [830, 352], [882, 380]];
    const segL = []; let LT = 0; for (let i = 1; i < P.length; i++) { const d = Math.hypot(P[i][0] - P[i - 1][0], P[i][1] - P[i - 1][1]); segL.push(d); LT += d; }
    const at = (u) => { let d = clamp(u) * LT, i = 0; while (i < segL.length - 1 && d > segL[i]) { d -= segL[i]; i++; } const f = d / segL[i]; return [lerp(P[i][0], P[i + 1][0], f), lerp(P[i][1], P[i + 1][1], f)]; };
    const poly = (a, b) => { g.beginPath(); let first = true; for (let i = 0; i <= 80; i++) { const [x, y] = at(lerp(a, b, i / 80)); if (first) { g.moveTo(x, y); first = false; } else g.lineTo(x, y); } };
    const uGroin = segL[0] / LT, uHeartIn = (segL[0] + segL[1] + segL[2] + segL[3]) / LT, uRV = (LT - segL.slice(5).reduce((a, b) => a + b, 0)) / LT;
    const uPA = (LT - segL.slice(6).reduce((a, b) => a + b, 0)) / LT;

    const emb = inOut(T.f(2, 0.1, 0.75));            // viaje del émbolo
    const lodged = T.f(2, 0.75, 0.8) >= 1 ? 1 : 0;
    const dead = ease(T.f(3, 0.1, 0.4));
    const rvDil = ease(T.f(4, 0.15, 0.55));
    const dvt = ease(T.f(1, 0.3, 0.6));

    const oc = this._oc || (this._oc = Object.assign(document.createElement('canvas'), { width: MK.W, height: MK.H }));
    const ox = oc.getContext('2d'); ox.setTransform(1, 0, 0, 1, 0, 0); ox.globalAlpha = 1; ox.clearRect(0, 0, MK.W, MK.H);
    MK.use(ox); g = ox;
    (() => {
      // pierna
      g.fillStyle = '#D9A07A'; g.beginPath(); g.moveTo(140, 560); g.lineTo(270, 560); g.bezierCurveTo(268, 640, 250, 690, 245, 725);
      g.bezierCurveTo(262, 770, 250, 820, 232, 862); g.lineTo(300, 872); g.quadraticCurveTo(310, 896, 290, 900); g.lineTo(178, 900);
      g.bezierCurveTo(172, 860, 150, 800, 165, 725); g.bezierCurveTo(152, 690, 140, 640, 140, 560); g.fill();
      text('Pierna', 205, 935, { size: 24, color: C.dim, weight: 600 });
      // vena, cava y arteria pulmonar
      g.lineCap = 'round'; g.lineJoin = 'round';
      poly(0, uRV); g.strokeStyle = '#2F4FA8'; g.lineWidth = 30; g.stroke();
      poly(0, uRV); g.strokeStyle = '#1B2350'; g.lineWidth = 18; g.stroke();
      // corazón: VI y VD (el VD crece y aplasta al VI)
      g.fillStyle = C.organ; g.beginPath(); g.ellipse(578, 595, 108, 128, 0, 0, Math.PI * 2); g.fill();
      g.fillStyle = '#3A1220'; g.beginPath(); g.ellipse(585, 598, 82, 104, 0, 0, Math.PI * 2); g.fill();
      const rvx = 445 + 40 * rvDil, rvr = lerp(64, 112, rvDil);
      g.fillStyle = '#B9404C'; g.beginPath(); g.ellipse(rvx, 600, rvr + 18, lerp(112, 128, rvDil) + 18, 0, 0, Math.PI * 2); g.fill();
      g.fillStyle = '#2A1530'; g.beginPath(); g.ellipse(rvx, 600, rvr, lerp(112, 128, rvDil), 0, 0, Math.PI * 2); g.fill();
      text('VD', rvx, 610, { size: 34, color: 'rgba(244,241,255,0.65)' });
      text('VI', 600 + 20 * rvDil, 610, { size: 30, color: 'rgba(244,241,255,0.65)' });
      poly(uPA, 1); g.strokeStyle = '#4A6FD8'; g.lineWidth = 40; g.stroke();
      poly(uPA, 1); g.strokeStyle = '#1B2350'; g.lineWidth = 24; g.stroke();
      // pulmones
      organ(shapes.lungs, 830, 372, 0.95, 1);
      // zona sin flujo: espacio muerto
      if (dead > 0) {
        g.save(); g.translate(830, 372); g.scale(0.95, 0.95); g.fillStyle = `rgba(70,74,110,${0.85 * dead})`;
        g.beginPath(); g.moveTo(30, -70); g.bezierCurveTo(120, -80, 140, 60, 110, 110); g.bezierCurveTo(80, 130, 30, 110, 25, 60); g.closePath(); g.fill(); g.restore();
      }
      // flujo venoso (se corta después del émbolo)
      for (let i = 0; i < 24; i++) {
        const u = (t * 0.09 + i / 24) % 1; if (lodged && u > 0.985) continue;
        const [x, y] = at(u); g.fillStyle = '#8FA8FF'; g.beginPath(); g.arc(x, y, 6, 0, Math.PI * 2); g.fill();
      }
      // trombo en la pantorrilla y émbolo viajero
      if (dvt > 0) { g.fillStyle = '#9E1F35'; g.beginPath(); g.ellipse(205, 790, 8 * dvt, 34 * dvt, 0, 0, Math.PI * 2); g.fill(); }
      if (T.f(2) > 0) {
        const [ex, ey] = at(lerp(0.03, 1, emb));
        g.fillStyle = '#C42A45'; g.beginPath(); g.ellipse(ex, ey, 17, 12, Math.atan2(ey - 380, ex - 700) * 0.3, 0, Math.PI * 2); g.fill();
        g.strokeStyle = '#FFB3C0'; g.lineWidth = 3; g.stroke();
      }
    })();
    MK.use(main); g = main;
    with_(dimOf(1, 2, 3, 4) * ease(T.f(1, 0, 0.2)), () => g.drawImage(oc, 0, 0));

    // ── Escena 1: Virchow
    with_(dimOf(1), () => {
      with_(ease(T.f(1, 0.35, 0.5)), () => text('Tríada de Virchow', 200, 222, { size: 30, color: C.gold }));
      ['estasis', 'daño endotelial', 'hipercoagulabilidad'].forEach((s, i) => with_(ease(T.f(1, 0.5 + i * 0.13, 0.62 + i * 0.13)), () => text('· ' + s, 200, 270 + i * 40, { size: 26, color: C.ink2, weight: 600 })));
      pill('TVP', 305, 862, ease(T.f(1, 0.25, 0.45)), { fill: C.red, color: '#fff', size: 28 });
      if (k === 1) { g.save(); ring(205, 790, 50, t, { color: C.red }); g.restore(); }
    });
    // ── Escena 2: émbolo
    with_(dimOf(2), () => {
      pill('Émbolo', 935, 215, ease(T.f(2, 0.75, 0.9)), { fill: C.red, color: '#fff', size: 28 });
      if (k === 2 && lodged) { g.save(); ring(882, 380, 36, t, { color: C.red }); g.restore(); }
      with_(ease(T.f(2, 0.3, 0.45)), () => text('vena cava', 300, 690, { size: 22, color: C.dim, weight: 600 }));
    });
    // ── Escena 3: espacio muerto
    with_(dimOf(3), () => {
      pill('Espacio muerto', 890, 545, ease(T.f(3, 0.3, 0.45)), { fill: '#A9B0D9', size: 27 });
      with_(ease(T.f(3, 0.55, 0.7)), () => { text('hipoxemia · taquicardia', 870, 600, { size: 23, color: C.ink2, weight: 600 }); text('disnea súbita', 870, 632, { size: 23, color: C.ink2, weight: 600 }); });
    });
    // ── Escena 4: VD
    with_(dimOf(4), () => {
      pill('VD dilatado', 440, 785, ease(T.f(4, 0.35, 0.5)), { fill: C.gold, size: 27 });
      pill('Gasto ↓', 700, 785, ease(T.f(4, 0.6, 0.75)), { fill: C.red, color: '#fff', size: 27 });
      with_(ease(T.f(4, 0.2, 0.35)), () => text('↑ resistencia pulmonar', 610, 290, { size: 23, color: C.gold, weight: 600 }));
      if (k === 4) { g.save(); ring(445 + 40 * rvDil, 600, 120, t, { color: C.gold }); g.restore(); }
    });

    // ── Algoritmo (escenas 5–6)
    const node = (x1, y1, x2, y2, pr, col) => { if (pr > 0) with_(pr, () => arrow(x1, y1, x2, y2, pr, { color: col || C.ink2, width: 5 })); };
    with_(dimOf(5, 6), () => {
      if (T.f(5) <= 0) return;
      with_(ease(T.f(5, 0, 0.1)), () => { g.strokeStyle = 'rgba(201,206,255,0.2)'; g.lineWidth = 2; g.beginPath(); g.moveTo(80, 905); g.lineTo(1000, 905); g.stroke(); });
      pill('¿Choque o PAS <90?', 540, 960, ease(T.f(5, 0.1, 0.25)), { fill: C.gold, size: 30 });
    });
    with_(dimOf(5), () => {
      if (T.f(5) <= 0) return;
      node(430, 990, 300, 1035, ease(T.f(5, 0.35, 0.5)), C.red);
      with_(ease(T.f(5, 0.35, 0.5)), () => text('Sí', 335, 995, { size: 26, color: C.red }));
      pill('Trombólisis sistémica', 280, 1075, ease(T.f(5, 0.55, 0.7)), { fill: C.red, color: '#fff', size: 28 });
      with_(ease(T.f(5, 0.65, 0.8)), () => { text('alto riesgo', 280, 1130, { size: 24, color: C.ink2, weight: 600 }); text('+ heparina no fraccionada', 280, 1165, { size: 22, color: C.dim, weight: 600 }); });
    });
    with_(dimOf(6), () => {
      if (T.f(6) <= 0) return;
      node(650, 990, 780, 1035, ease(T.f(6, 0, 0.12)), C.green);
      with_(ease(T.f(6, 0, 0.12)), () => text('No', 745, 995, { size: 26, color: C.green }));
      pill('Estable: Wells', 800, 1068, ease(T.f(6, 0.08, 0.2)), { fill: C.blue, size: 28 });
      with_(ease(T.f(6, 0.2, 0.32)), () => text('Probable (>4): angio-TC', 800, 1124, { size: 25, color: C.ink, weight: 700 }));
      with_(ease(T.f(6, 0.38, 0.5)), () => text('Improbable (≤4): dímero D', 800, 1164, { size: 25, color: C.ink, weight: 700 }));
      with_(ease(T.f(6, 0.55, 0.65)), () => text('negativo = descartado', 800, 1200, { size: 22, color: C.green, weight: 600 }));
      pill('Confirmado: anticoagular', 800, 1258, ease(T.f(6, 0.72, 0.85)), { fill: C.green, size: 27 });
    });

    // ── Trampa
    if (k === 7) {
      const a = ease(T.f(7, 0, 0.15));
      with_(a, () => {
        bg(t); g.fillStyle = 'rgba(11,14,42,0.35)'; g.fillRect(0, 0, MK.W, MK.H);
        headline(heads[7], t - T.s(7), C.gold);
        text('TEP estable', 540, 400, { size: 60, color: C.ink });
        text('VD dilatado + troponina alta', 540, 480, { size: 46, color: C.gold, maxW: 960 });
        text('No trombolices', 540, 600, { size: 72, color: C.red });
        with_(ease(T.f(7, 0.45, 0.6)), () => {
          text('Anticoagula y vigila', 540, 790, { size: 64, color: C.green });
          text('Riesgo intermedio-alto: PEITHO, más sangrado sin menos muertes', 540, 880, { size: 32, color: C.ink2, weight: 600, maxW: 880 });
        });
      });
    }
  }
};
