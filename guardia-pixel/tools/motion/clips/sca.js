// SCA en 1 minuto (tema sca). De la placa al trombo, SCASEST contra IAMCEST y la reperfusión.
// T.s(i)/T.e(i)/T.d(i): inicio, fin y duración de la escena i; T.f(i, a, b): avance 0→1 entre las fracciones a y b de la escena i.
window.CLIP = {
  topic: 'sca', title: 'SCA en 1 minuto', sub: 'De la placa al trombo, y por qué el tiempo es miocardio', color: '#FF5470',
  scenes: [
    { say: 'El síndrome coronario agudo, en un minuto.', min: 3.5 },
    { say: 'Todo empieza con una placa: el colesterol entra a la pared de la coronaria y forma un núcleo de grasa con una capa fibrosa.' },
    { say: 'Si la capa se rompe, las plaquetas forman un trombo blanco que tapa la arteria en parte: es el síndrome sin elevación del ese te.' },
    { say: 'Si la fibrina atrapa eritrocitos, el trombo rojo cierra la arteria por completo. El miocardio muere y el ese te se eleva.' },
    { say: 'Tiempo es miocardio: reperfunde ya. Angioplastia primaria si llega en ciento veinte minutos o menos; si no, fibrinólisis en diez minutos.' },
    { say: 'Sin elevación del ese te, nunca fibrinólisis: estratifica con troponina y GRACE; si el riesgo es alto, cateterismo antes de veinticuatro horas.' },
    { say: 'El stent abre la arteria y regresa el flujo. La aspirina más un inhibidor P dos Y doce evitan que las plaquetas vuelvan a agregarse.' },
    { say: 'Perla: con elevación del ese te nunca esperes la troponina, el electro basta. Y sin elevación, la fibrinólisis siempre es la respuesta incorrecta.', min: 7 }
  ],
  draw(t, T) {
    const { C, ease, inOut, lerp, clamp, text, pill, arrow, ring, titleCard, headline, bg, with_, rr } = MK;
    const g = MK.g;
    bg(t);
    const k = T.cur;
    if (k === 0) { titleCard(t - T.s(0), this.title, this.sub, this.color); return; }
    const heads = ['', 'La placa: núcleo de grasa y capa fibrosa', 'Ruptura → trombo blanco (SCASEST)', 'Trombo rojo: oclusión total (IAMCEST)', 'IAMCEST: reperfundir ya', 'SCASEST: estratificar, sin fibrinólisis', 'Stent + doble antiagregación', 'Perla para el examen'];
    headline(heads[k], t - T.s(k), this.color);
    const all = k >= 6;
    const dimOf = (...ids) => (all || ids.includes(k) ? 1 : 0.42);

    // ── Geometría de la coronaria (corte longitudinal)
    const AY = 360, LR = 80, WT = 26, X0 = 60, X1 = 1020, PX = 500, PW = 190, base = AY + LR, top = AY - LR;
    const grow = ease(T.f(1, 0.05, 0.5));
    const crack = ease(T.f(2, 0.05, 0.3));
    const white = ease(T.f(2, 0.25, 0.75));
    const red = ease(T.f(3, 0.1, 0.55));
    const st = inOut(T.f(6, 0.05, 0.4));
    const Hp = 80 * grow * (1 - 0.72 * st), Hw = 44 * white * (1 - st);
    const Hr = (2 * LR - 80 - 44) * red * (1 - st);
    const occ = red * (1 - st);
    const bell = (x, w) => { const u = (x - PX) / w; return Math.abs(u) >= 1 ? 0 : 0.5 + 0.5 * Math.cos(Math.PI * u); };
    const yP = (x) => base - Hp * bell(x, PW);
    const yW = (x) => yP(x) - Hw * bell(x, PW * 0.72);
    const yR = (x) => yW(x) - Hr * Math.pow(bell(x, PW * 0.8), 0.2);
    const band = (fa, fb, col) => {
      g.beginPath();
      for (let i = 0; i <= 60; i++) { const x = PX - PW + (2 * PW * i) / 60; const y = fa(x); if (i) g.lineTo(x, y); else g.moveTo(x, y); }
      for (let i = 60; i >= 0; i--) { const x = PX - PW + (2 * PW * i) / 60; g.lineTo(x, fb(x)); }
      g.closePath(); g.fillStyle = col; g.fill();
    };
    const lead = (x1, y1, x2, y2) => { g.save(); g.strokeStyle = 'rgba(244,241,255,0.7)'; g.lineWidth = 3; g.setLineDash([8, 8]); g.beginPath(); g.moveTo(x1, y1); g.lineTo(x2, y2); g.stroke(); g.restore(); };
    const arterySc = k >= 6 ? 6 : k >= 3 ? 3 : k >= 2 ? 2 : 1;

    with_(dimOf(1, 2, 3, 6), () => {
      const a = ease(T.f(1, 0, 0.2));
      with_(a, () => {
        // pared y luz
        g.fillStyle = '#3A1220'; g.fillRect(X0, top, X1 - X0, 2 * LR);
        g.fillStyle = C.organ; rr(X0, top - WT, X1 - X0, WT, 12); g.fill(); rr(X0, base, X1 - X0, WT, 12); g.fill();
        g.strokeStyle = C.lung; g.lineWidth = 3; g.beginPath(); g.moveTo(X0, top); g.lineTo(X1, top); g.moveTo(X0, base); g.lineTo(X1, base); g.stroke();
        // eritrocitos que fluyen; se detienen si la arteria se cierra
        for (let i = 0; i < 30; i++) {
          const lane = ((i * 0.618) % 1) * 0.8 + 0.1, ph = i / 30;
          const x = X0 + 14 + ((t * 0.11 + ph) % 1) * (X1 - X0 - 28);
          const lo = top + 12, hi = Math.min(base - 12, yR(x) - 12);
          if (hi - lo < 8) continue;
          let al = 1;
          if (x > PX - PW * 0.55) al = 1 - occ;
          if (al <= 0.02) continue;
          const y = lo + lane * (hi - lo);
          g.save(); g.globalAlpha *= al; g.fillStyle = C.blood; g.beginPath(); g.ellipse(x, y, 13, 8, 0, 0, Math.PI * 2); g.fill(); g.restore();
        }
        // placa: cuerpo, núcleo de grasa y capa fibrosa
        if (Hp > 1) {
          band(yP, () => base, '#E9B949');
          g.save(); g.beginPath(); for (let i = 0; i <= 60; i++) { const x = PX - PW + (2 * PW * i) / 60; const y = yP(x); if (i) g.lineTo(x, y); else g.moveTo(x, y); }
          const capW = lerp(14, 6, crack) * (1 - st * 0.4);
          g.strokeStyle = '#F4E9DC'; g.lineWidth = capW; g.lineCap = 'round'; g.stroke(); g.restore();
          if (grow > 0.5) with_(ease((grow - 0.5) * 2) * (1 - st * 0.6), () => {
            [[-60, 0.32], [0, 0.42], [58, 0.3]].forEach(([dx, f]) => {
              g.fillStyle = '#FFF3C4'; g.strokeStyle = '#B98A1E'; g.lineWidth = 3;
              g.beginPath(); g.arc(PX + dx, base - Hp * f, 14, 0, Math.PI * 2); g.fill(); g.stroke();
              g.fillStyle = '#E0A82E'; for (let j = 0; j < 3; j++) { g.beginPath(); g.arc(PX + dx - 5 + j * 5, base - Hp * f + (j % 2 ? 4 : -3), 3, 0, Math.PI * 2); g.fill(); }
            });
          });
        }
        // grieta de la ruptura
        if (crack > 0 && st < 1) with_(crack * (1 - st), () => {
          const cy = yP(PX); g.strokeStyle = C.gold; g.lineWidth = 5; g.beginPath(); g.moveTo(PX - 30, cy + 2); g.lineTo(PX - 12, cy - 6); g.lineTo(PX + 2, cy + 6); g.lineTo(PX + 16, cy - 5); g.lineTo(PX + 32, cy + 3); g.stroke();
        });
        // trombo blanco (plaquetas)
        if (Hw > 1) {
          band(yW, yP, '#E7E1FF');
          for (let i = 0; i < 14; i++) {
            const x = PX - PW * 0.6 + ((i * 0.37) % 1) * PW * 1.2, f = ((i * 0.53) % 1) * 0.7 + 0.15;
            const y = lerp(yP(x), yW(x), f);
            if (yP(x) - yW(x) < 10) continue;
            g.fillStyle = C.purple; g.beginPath(); g.ellipse(x, y, 9, 5, i, 0, Math.PI * 2); g.fill();
          }
        }
        // trombo rojo (fibrina + eritrocitos)
        if (Hr > 1) {
          band(yR, yW, '#9E1F35');
          g.save(); g.strokeStyle = 'rgba(255,200,210,0.55)'; g.lineWidth = 2;
          for (let i = 0; i < 9; i++) { const x = PX - PW * 0.55 + i * PW * 0.14; g.beginPath(); g.moveTo(x, yW(x) - 4); g.lineTo(x + 40, Math.max(yR(x + 40), yW(x + 40) - Hr) + 6); g.stroke(); }
          g.restore();
          for (let i = 0; i < 12; i++) {
            const x = PX - PW * 0.5 + ((i * 0.41) % 1) * PW, f = ((i * 0.29) % 1) * 0.8 + 0.1;
            if (yW(x) - yR(x) < 20) continue;
            g.fillStyle = C.blood; g.beginPath(); g.ellipse(x, lerp(yW(x), yR(x), f), 12, 7, i * 0.7, 0, Math.PI * 2); g.fill();
          }
        }
        // stent: malla en zigzag pegada a la pared
        if (st > 0) with_(st, () => {
          g.strokeStyle = '#D9E2FF'; g.lineWidth = 5; g.lineJoin = 'round';
          [top + 6, base - Hp * 0.98 - 6].forEach((yy, r) => {
            g.beginPath();
            for (let i = 0; i <= 16; i++) { const x = PX - 200 + i * 25; const y = r === 0 ? yy + (i % 2 ? 12 : 0) : Math.min(yP(x) - 6, base - 6) - (i % 2 ? 12 : 0); if (i) g.lineTo(x, y); else g.moveTo(x, y); }
            g.stroke();
          });
        });
        // LDL que entra a la pared (escena 1)
        if (k === 1) for (let i = 0; i < 5; i++) {
          const u = (t * 0.4 + i / 5) % 1, x = lerp(250 + i * 30, PX - 40 + i * 20, u), y = lerp(320, base - 20, u * u);
          g.fillStyle = C.gold2; g.beginPath(); g.arc(x, y, 8, 0, Math.PI * 2); g.fill();
        }
      });
      // etiquetas de la arteria (las de la etapa vigente)
      const L = (label, x, tx, ty, prog, o) => { if (prog <= 0) return; with_(prog, () => lead(x, 232, tx, ty)); pill(label, x, 205, prog, o); };
      if (arterySc === 1) {
        L('LDL', 240, 300, 330, ease(T.f(1, 0.15, 0.35)), { fill: C.gold2, size: 30 });
        L('Capa fibrosa', PX, PX, yP(PX) - 10, ease(T.f(1, 0.45, 0.65)), { fill: '#F4E9DC', size: 30 });
        const nl = ease(T.f(1, 0.65, 0.85));
        with_(nl, () => { lead(PX, 505, PX, base - Hp * 0.35); });
      } else if (arterySc === 2) {
        L('Trombo blanco', PX, PX, yW(PX) - 8, ease(T.f(2, 0.45, 0.65)), { fill: '#E7E1FF', size: 30 });
        if (k === 2) { g.save(); ring(PX, yP(PX), 46, t, { color: C.gold }); g.restore(); }
      } else if (arterySc === 3) {
        L('Trombo rojo', PX, PX, top + 30, ease(T.f(3, 0.35, 0.55)), { fill: C.red, color: '#fff', size: 30 });
        if (k === 3) { g.save(); ring(PX, AY, 70, t, { color: C.red }); g.restore(); }
      } else {
        L('Stent (ICP)', PX, PX, top + 12, ease(T.f(6, 0.25, 0.45)), { fill: '#D9E2FF', size: 30 });
        pill('Aspirina + P2Y12', 830, 205, ease(T.f(6, 0.55, 0.75)), { fill: C.green, size: 30 });
      }
    });

    // ── Miocardio que depende de la arteria
    with_(dimOf(1, 2, 3, 6), () => {
      const a = ease(T.f(1, 0.1, 0.3)), MY = 490, MH = 80;
      with_(a, () => {
        g.fillStyle = '#8E3442'; rr(X0, MY, X1 - X0, MH, 24); g.fill();
        g.save(); rr(X0, MY, X1 - X0, MH, 24); g.clip();
        g.strokeStyle = 'rgba(255,255,255,0.08)'; g.lineWidth = 4;
        for (let x = X0 - 80; x < X1; x += 34) { g.beginPath(); g.moveTo(x, MY + MH); g.lineTo(x + 60, MY); g.stroke(); }
        const isch = ease(T.f(2, 0.5, 0.85)), nec = ease(T.f(3, 0.5, 0.85));
        const xs = lerp(680, 900, st);
        if (isch > 0) { g.fillStyle = `rgba(120,80,200,${0.55 * isch * (1 - nec)})`; g.fillRect(680, MY, X1 - 680, MH); }
        if (nec > 0) { g.fillStyle = `rgba(40,18,40,${0.85 * nec})`; g.fillRect(xs, MY, X1 - xs, MH); }
        g.restore();
        text('Miocardio', 190, MY + MH / 2, { size: 28, color: C.ink });
        const lab = k >= 6 ? 'Cicatriz pequeña' : k >= 3 ? 'Necrosis' : k >= 2 ? 'Isquemia' : '';
        const la = k >= 6 ? ease(T.f(6, 0.4, 0.6)) : k >= 3 ? ease(T.f(3, 0.6, 0.8)) : ease(T.f(2, 0.6, 0.8));
        if (lab) with_(la, () => text(lab, k >= 6 ? 800 : 850, MY + MH / 2, { size: 28, color: C.ink }));
        if (k === 1 || (arterySc === 1)) with_(ease(T.f(1, 0.65, 0.85)), () => {
          g.font = '700 28px "Inter Display", Inter, sans-serif'; const w = g.measureText('Núcleo lipídico').width + 30;
          g.fillStyle = '#E9B949'; rr(PX - w / 2, MY + 18, w, 44, 22); g.fill();
          text('Núcleo lipídico', PX, MY + 41, { size: 28, color: '#241500', shadow: false });
        });
      });
    });

    // ── Mini ECG
    const ecg = (x0, y0, w, stv, tAmp, prog) => {
      if (prog <= 0) return;
      const sh = (f) => {
        if (f < 0.08) return 0;
        if (f < 0.18) return 7 * Math.sin((Math.PI * (f - 0.08)) / 0.1);
        if (f < 0.26) return 0;
        if (f < 0.29) return lerp(0, -7, (f - 0.26) / 0.03);
        if (f < 0.32) return lerp(-7, 52, (f - 0.29) / 0.03);
        if (f < 0.35) return lerp(52, -16, (f - 0.32) / 0.03);
        if (f < 0.38) return lerp(-16, stv, (f - 0.35) / 0.03);
        if (f < 0.48) return stv;
        if (f < 0.68) { const q = (f - 0.48) / 0.2; return stv * (1 - q) + tAmp * Math.sin(Math.PI * q); }
        return 0;
      };
      g.save(); g.fillStyle = 'rgba(11,14,42,0.7)'; rr(x0 - 16, y0 - 70, w + 32, 120, 16); g.fill();
      g.strokeStyle = 'rgba(98,227,140,0.12)'; g.lineWidth = 1;
      for (let x = x0; x <= x0 + w; x += 24) { g.beginPath(); g.moveTo(x, y0 - 66); g.lineTo(x, y0 + 46); g.stroke(); }
      g.strokeStyle = C.green; g.lineWidth = 5; g.lineJoin = 'round'; g.beginPath();
      const n = Math.round(240 * clamp(prog));
      for (let i = 0; i <= n; i++) { const u = (i / 240) * 2, x = x0 + (i / 240) * w, y = y0 - sh(u % 1); if (i) g.lineTo(x, y); else g.moveTo(x, y); }
      g.stroke(); g.restore();
    };

    // ── Tarjetas: SCASEST (izquierda) e IAMCEST (derecha)
    const card = (x, col, prog) => {
      if (prog <= 0) return;
      with_(prog, () => { g.fillStyle = 'rgba(20,26,66,0.85)'; rr(x, 610, 460, 670, 30); g.fill(); g.lineWidth = 4; g.strokeStyle = col; g.stroke(); });
    };
    // izquierda
    with_(dimOf(2, 5), () => {
      const a = ease(T.f(2, 0.55, 0.75));
      card(X0, C.purple, a);
      pill('SCASEST', 290, 660, a, { fill: C.purple, color: '#fff', size: 32 });
      ecg(100, 770, 380, -16, 6, T.f(2, 0.6, 0.85));
      with_(ease(T.f(2, 0.75, 0.9)), () => {
        text('Infradesnivel del ST', 290, 862, { size: 30 });
        text('Trombo blanco, parcial', 290, 902, { size: 26, color: C.dim, weight: 600 });
      });
    });
    with_(dimOf(5), () => {
      if (T.f(5) <= 0) return;
      with_(ease(T.f(5, 0, 0.1)), () => { g.strokeStyle = 'rgba(201,206,255,0.2)'; g.lineWidth = 2; g.beginPath(); g.moveTo(100, 940); g.lineTo(480, 940); g.stroke(); });
      pill('Estratificar el riesgo', 290, 990, ease(T.f(5, 0.25, 0.4)), { fill: C.blue, size: 28 });
      with_(ease(T.f(5, 0.32, 0.45)), () => text('Troponina · GRACE', 290, 1048, { size: 28, color: C.ink2 }));
      pill('Cateterismo <24 h', 290, 1112, ease(T.f(5, 0.55, 0.7)), { fill: C.cyan, size: 28 });
      with_(ease(T.f(5, 0.6, 0.72)), () => text('si el riesgo es alto', 290, 1162, { size: 24, color: C.dim, weight: 600 }));
      pill('Nunca fibrinólisis', 290, 1225, ease(T.f(5, 0.08, 0.22)), { fill: C.red, color: '#fff', size: 28 });
    });
    // derecha
    with_(dimOf(3, 4), () => {
      const a = ease(T.f(3, 0.55, 0.75));
      card(560, C.red, a);
      pill('IAMCEST', 790, 660, a, { fill: C.red, color: '#fff', size: 32 });
      ecg(600, 770, 380, 26, 14, T.f(3, 0.6, 0.85));
      with_(ease(T.f(3, 0.75, 0.9)), () => {
        text('Elevación del ST', 790, 862, { size: 30 });
        text('Trombo rojo, total', 790, 902, { size: 26, color: C.dim, weight: 600 });
      });
    });
    with_(dimOf(4), () => {
      if (T.f(4) <= 0) return;
      with_(ease(T.f(4, 0, 0.1)), () => { g.strokeStyle = 'rgba(201,206,255,0.2)'; g.lineWidth = 2; g.beginPath(); g.moveTo(600, 940); g.lineTo(980, 940); g.stroke(); });
      pill('ICP primaria', 790, 990, ease(T.f(4, 0.25, 0.4)), { fill: C.cyan, size: 28 });
      with_(ease(T.f(4, 0.35, 0.5)), () => text('≤ 120 min', 790, 1052, { size: 46, color: C.gold }));
      with_(ease(T.f(4, 0.55, 0.65)), () => text('si no llega a tiempo:', 790, 1108, { size: 24, color: C.dim, weight: 600 }));
      pill('Fibrinólisis', 790, 1162, ease(T.f(4, 0.62, 0.75)), { fill: C.orange, size: 28 });
      with_(ease(T.f(4, 0.7, 0.82)), () => text('≤ 10 min', 790, 1228, { size: 46, color: C.gold }));
    });

    // ── Perla
    if (k === 7) {
      const a = ease(T.f(7, 0, 0.15));
      with_(a, () => {
        bg(t); g.fillStyle = 'rgba(11,14,42,0.35)'; g.fillRect(0, 0, MK.W, MK.H);
        headline(heads[7], t - T.s(7), C.gold);
        text('IAMCEST: no esperes', 540, 430, { size: 64, color: C.gold });
        text('la troponina', 540, 505, { size: 64, color: C.gold });
        text('El ECG basta para activar la hemodinamia', 540, 590, { size: 34, color: C.ink2, weight: 600, maxW: 860 });
        with_(ease(T.f(7, 0.45, 0.6)), () => {
          text('SCASEST + fibrinólisis', 540, 820, { size: 64, color: C.red });
          text('Siempre es la respuesta incorrecta', 540, 905, { size: 34, color: C.ink2, weight: 600, maxW: 860 });
        });
      });
    }
  }
};
