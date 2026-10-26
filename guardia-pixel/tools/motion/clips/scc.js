// Angina estable en 1 minuto (tema scc). Aporte contra demanda de O2 y qué hace cada antianginoso.
// T.s(i)/T.e(i)/T.d(i): inicio, fin y duración de la escena i; T.f(i, a, b): avance 0→1 entre las fracciones a y b de la escena i.
window.CLIP = {
  topic: 'scc', title: 'Angina estable en 1 minuto', sub: 'Aporte contra demanda de oxígeno, y qué hace cada antianginoso', color: '#62E3FF',
  scenes: [
    { say: 'La angina estable, en un minuto.', min: 3.5 },
    { say: 'En reposo, una placa estable estrecha la coronaria, pero el flujo que pasa alcanza: el aporte de oxígeno cubre la demanda.' },
    { say: 'La demanda depende de tres cosas: la frecuencia cardiaca, que es la principal, la contractilidad y la tensión de la pared.' },
    { say: 'Con el esfuerzo sube la demanda, pero la placa no deja que el flujo aumente, y la taquicardia acorta la diástole, que es cuando se perfunde el ventrículo. Hay isquemia: duele y el ese te baja.' },
    { say: 'Los antianginosos bajan la demanda: el betabloqueador baja la frecuencia y alarga la diástole; el calcioantagonista dilata arteriolas y coronarias; y el nitrato dilata las venas y baja la precarga.' },
    { say: 'Pero solo quitan síntomas. Lo que mejora el pronóstico es la aspirina, la estatina de alta intensidad y el IECA si hay indicación.' },
    { say: 'Trampa: betabloqueador con verapamilo o diltiazem da bradicardia y bloqueo. Si necesitas dos, combina el betabloqueador con amlodipino.', min: 7 }
  ],
  draw(t, T) {
    const { C, ease, inOut, lerp, clamp, text, pill, ring, titleCard, headline, bg, with_, rr } = MK;
    const g = MK.g;
    bg(t);
    const k = T.cur;
    if (k === 0) { titleCard(t - T.s(0), this.title, this.sub, this.color); return; }
    const heads = ['', 'Reposo: el aporte alcanza', 'Demanda: FC, contractilidad y pared', 'Esfuerzo: la demanda supera al aporte', 'Antianginosos: bajar la demanda', 'Pronóstico: aspirina, estatina, IECA', 'Trampa del examen'];
    headline(heads[k], t - T.s(k), this.color);
    const all = k >= 5;
    const dimOf = (...ids) => (all || ids.includes(k) ? 1 : 0.42);
    const ex = inOut(T.f(3, 0.1, 0.5)), rx = inOut(T.f(4, 0.2, 0.9));
    const demand = lerp(0.8, 1.45, ex) - lerp(0, 0.6, rx), supply = 1;

    // ── Coronaria con placa estable
    const AY = 290, LR = 58, WT = 20, X0 = 60, X1 = 680, PX = 370, PW = 150, base = AY + LR, top = AY - LR;
    const grow = ease(T.f(1, 0.05, 0.4));
    const bell = (x) => { const u = (x - PX) / PW; return Math.abs(u) >= 1 ? 0 : 0.5 + 0.5 * Math.cos(Math.PI * u); };
    const yP = (x) => base - 78 * grow * bell(x);
    with_(dimOf(1, 3), () => {
      with_(ease(T.f(1, 0, 0.2)), () => {
        g.fillStyle = '#3A1220'; g.fillRect(X0, top, X1 - X0, 2 * LR);
        g.fillStyle = C.organ; rr(X0, top - WT, X1 - X0, WT, 10); g.fill(); rr(X0, base, X1 - X0, WT, 10); g.fill();
        g.strokeStyle = C.lung; g.lineWidth = 3; g.beginPath(); g.moveTo(X0, top); g.lineTo(X1, top); g.moveTo(X0, base); g.lineTo(X1, base); g.stroke();
        for (let i = 0; i < 20; i++) {
          const lane = ((i * 0.618) % 1) * 0.8 + 0.1, x = X0 + 14 + ((t * 0.12 + i / 20) % 1) * (X1 - X0 - 28);
          const lo = top + 10, hi = yP(x) - 10; if (hi - lo < 8) continue;
          g.fillStyle = C.blood; g.beginPath(); g.ellipse(x, lo + lane * (hi - lo), 11, 7, 0, 0, Math.PI * 2); g.fill();
        }
        if (grow > 0) {
          g.beginPath(); for (let i = 0; i <= 60; i++) { const x = PX - PW + (2 * PW * i) / 60; if (i) g.lineTo(x, yP(x)); else g.moveTo(x, yP(x)); }
          g.lineTo(PX + PW, base); g.lineTo(PX - PW, base); g.closePath(); g.fillStyle = '#E9B949'; g.fill();
          g.beginPath(); for (let i = 0; i <= 60; i++) { const x = PX - PW + (2 * PW * i) / 60; if (i) g.lineTo(x, yP(x)); else g.moveTo(x, yP(x)); }
          g.strokeStyle = '#F4E9DC'; g.lineWidth = 16; g.lineCap = 'round'; g.stroke();
        }
      });
      pill('Placa estable', PX, 192, ease(T.f(1, 0.35, 0.55)), { fill: '#F4E9DC', size: 28 });
      if (k === 3) with_(ease(T.f(3, 0.3, 0.45)), () => text('el flujo no puede subir', PX, AY + LR + 50, { size: 26, color: C.gold, weight: 600 }));
    });

    // ── ECG (normal → ST bajo con esfuerzo → normal con fármacos)
    with_(dimOf(1, 3), () => {
      const a = ease(T.f(1, 0.4, 0.6)); if (a <= 0) return;
      const stv = -16 * ease(T.f(3, 0.6, 0.8)) * (1 - ease(T.f(4, 0.5, 0.8)));
      const x0 = 750, y0 = 300, w = 250;
      const sh = (f) => {
        if (f < 0.08) return 0; if (f < 0.18) return 7 * Math.sin((Math.PI * (f - 0.08)) / 0.1); if (f < 0.26) return 0;
        if (f < 0.29) return lerp(0, -7, (f - 0.26) / 0.03); if (f < 0.32) return lerp(-7, 50, (f - 0.29) / 0.03);
        if (f < 0.35) return lerp(50, -16, (f - 0.32) / 0.03); if (f < 0.38) return lerp(-16, stv, (f - 0.35) / 0.03);
        if (f < 0.48) return stv; if (f < 0.68) { const q = (f - 0.48) / 0.2; return stv * (1 - q) + lerp(14, 5, -stv / 16) * Math.sin(Math.PI * q); } return 0;
      };
      with_(a, () => {
        g.fillStyle = 'rgba(11,14,42,0.75)'; rr(x0 - 20, y0 - 72, w + 40, 124, 16); g.fill();
        g.strokeStyle = C.green; g.lineWidth = 5; g.lineJoin = 'round'; g.beginPath();
        for (let i = 0; i <= 200; i++) { const u = (i / 200) * 2, x = x0 + (i / 200) * w, y = y0 - sh(u % 1); if (i) g.lineTo(x, y); else g.moveTo(x, y); }
        g.stroke();
      });
      pill('ECG', 875, 192, a, { fill: C.green, size: 28 });
      const isq = ease(T.f(3, 0.65, 0.8)) * (1 - ease(T.f(4, 0.5, 0.8)));
      pill('ST ↓ · angina', 875, 405, isq, { fill: C.red, color: '#fff', size: 28 });
    });

    // ── Balanza aporte / demanda
    with_(dimOf(1, 2, 3, 4), () => {
      const a = ease(T.f(1, 0.5, 0.75)); if (a <= 0) return;
      const PXv = 540, PY = 470, HL = 260, th = clamp((demand - supply) * 0.32, -0.2, 0.2);
      with_(a, () => {
        g.fillStyle = '#5A6199'; g.fillRect(PXv - 9, PY, 18, 330); rr(PXv - 90, 795, 180, 24, 10); g.fill();
        const L = [PXv - HL * Math.cos(th), PY - HL * Math.sin(th)], R = [PXv + HL * Math.cos(th), PY + HL * Math.sin(th)];
        g.strokeStyle = '#C9CEFF'; g.lineWidth = 14; g.lineCap = 'round'; g.beginPath(); g.moveTo(L[0], L[1]); g.lineTo(R[0], R[1]); g.stroke();
        g.fillStyle = C.gold; g.beginPath(); g.arc(PXv, PY, 16, 0, Math.PI * 2); g.fill();
        const pan = ([x, y], v, col, lab, glyph) => {
          const py = y + 170;
          g.strokeStyle = 'rgba(201,206,255,0.7)'; g.lineWidth = 3; g.beginPath(); g.moveTo(x, y); g.lineTo(x - 105, py); g.moveTo(x, y); g.lineTo(x + 105, py); g.stroke();
          const h = 100 * v; g.fillStyle = col; rr(x - 70, py - h, 140, h, 14); g.fill();
          text(glyph, x, py - h / 2, { size: 34, color: '#14182F', shadow: false });
          g.fillStyle = '#C9CEFF'; g.beginPath(); g.moveTo(x - 115, py); g.quadraticCurveTo(x, py + 40, x + 115, py); g.closePath(); g.fill();
          pill(lab, x, py + 62, 1, { fill: col, size: 28, noPop: true });
        };
        pan(L, supply, C.blue, 'Aporte O₂', 'O₂');
        pan(R, demand, C.orange, 'Demanda', demand > 1.1 ? '↑' : demand < 0.95 ? '' : '');
      });
      if (k === 3) { const Rx = PXv + HL * Math.cos(th), Ry = PY + HL * Math.sin(th) + 100; g.save(); ring(Rx, Ry, 70, t, { color: C.red }); g.restore(); }
    });

    // ── Determinantes de la demanda
    with_(dimOf(2, 3, 4), () => {
      const arrowOf = k >= 4 || all ? ' ↓' : k === 3 ? ' ↑' : '';
      const sx = [195, 540, 885], labs = ['FC', 'Contractilidad', 'Tensión de pared'];
      labs.forEach((l, i) => {
        const pr = ease(T.f(2, 0.2 + i * 0.2, 0.35 + i * 0.2));
        pill(l + (pr >= 1 ? arrowOf : ''), sx[i], 878, pr, { fill: i === 0 ? C.gold : '#FFC48A', size: 28 });
      });
      with_(ease(T.f(2, 0.35, 0.5)), () => text('la principal', 195, 930, { size: 24, color: C.dim, weight: 600 }));
      with_(ease(T.f(2, 0.85, 1)), () => text('precarga y poscarga', 885, 930, { size: 24, color: C.dim, weight: 600 }));
      if (k === 3) with_(ease(T.f(3, 0.4, 0.55)), () => text('diástole más corta', 540, 930, { size: 24, color: C.gold, weight: 600 }));
    });

    // ── Antianginosos
    with_(dimOf(4), () => {
      const items = [['Betabloqueador', '↓ FC, alarga la diástole', C.green], ['Calcioantagonista', 'dilata arteriolas y coronarias', C.green], ['Nitratos', 'venodilatan: ↓ precarga', C.green]];
      const sx = [195, 540, 885];
      items.forEach(([n, d, col], i) => {
        const pr = ease(T.f(4, 0.1 + i * 0.25, 0.25 + i * 0.25));
        pill(n, sx[i], 995, pr, { fill: col, size: 27 });
        with_(pr, () => text(d, sx[i], 1052, { size: 23, color: C.ink2, weight: 600, maxW: 300 }));
      });
      with_(ease(T.f(5, 0.1, 0.3)), () => text('Solo quitan síntomas', 540, 1110, { size: 26, color: C.orange }));
    });

    // ── Pronóstico
    with_(dimOf(5), () => {
      if (T.f(5) <= 0) return;
      with_(ease(T.f(5, 0.3, 0.45)), () => {
        g.strokeStyle = 'rgba(242,193,78,0.5)'; g.lineWidth = 3; rr(70, 1140, 940, 160, 28); g.stroke();
        text('Mejoran el pronóstico', 540, 1172, { size: 28, color: C.gold });
      });
      ['Aspirina', 'Estatina', 'IECA'].forEach((n, i) => pill(n, 300 + i * 240, 1232, ease(T.f(5, 0.4 + i * 0.13, 0.52 + i * 0.13)), { fill: C.gold, size: 30 }));
      with_(ease(T.f(5, 0.8, 0.92)), () => text('si hay indicación', 780, 1280, { size: 22, color: C.dim, weight: 600 }));
    });

    // ── Trampa
    if (k === 6) {
      const a = ease(T.f(6, 0, 0.15));
      with_(a, () => {
        bg(t); g.fillStyle = 'rgba(11,14,42,0.35)'; g.fillRect(0, 0, MK.W, MK.H);
        headline(heads[6], t - T.s(6), C.gold);
        text('Betabloqueador +', 540, 420, { size: 66, color: C.red });
        text('verapamilo o diltiazem', 540, 500, { size: 66, color: C.red });
        text('Bradicardia y bloqueo AV', 540, 590, { size: 36, color: C.ink2, weight: 600, maxW: 860 });
        with_(ease(T.f(6, 0.5, 0.65)), () => {
          text('Betabloqueador + amlodipino', 540, 820, { size: 62, color: C.green, maxW: 940 });
          text('Si necesitas dos antianginosos, esta es la combinación', 540, 905, { size: 34, color: C.ink2, weight: 600, maxW: 860 });
        });
      });
    }
  }
};
