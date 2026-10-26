// Nefrótico contra nefrítico en 1 minuto (tema glomerulo). La barrera de filtración se construye arriba;
// la mitad izquierda se vuelve nefrótica (podocito) y la derecha nefrítica (inflamación). Abajo: hallazgos, C3 y el reloj.
(() => {
  const X0 = 245, X1 = 1035, XM = 640;
  const Y = { lum0: 200, lum1: 320, en0: 330, en1: 350, gbm0: 362, gbm1: 392, pd0: 404, pd1: 436, pb0: 440, pb1: 470, bw0: 482, bw1: 560 };

  // Barrera glomerular en corte. nef: fusión de pedicelos (mitad izquierda); nit: inflamación (mitad derecha); rup: rotura capilar
  function barrier(t, nef, nit, rup) {
    const { C, rr, lerp, text } = MK, g = MK.g;
    // Luz capilar con eritrocitos y albúmina
    g.fillStyle = '#3A1220'; rr(X0, Y.lum0, X1 - X0, Y.lum1 - Y.lum0, 24); g.fill();
    if (nit > 0) { g.save(); g.globalAlpha *= 0.32 * nit; g.fillStyle = C.red; rr(XM, Y.lum0, X1 - XM, Y.lum1 - Y.lum0, 24); g.fill(); g.restore(); }
    g.save(); rr(X0, Y.lum0, X1 - X0, Y.lum1 - Y.lum0, 24); g.clip();
    for (let i = 0; i < 12; i++) {
      const u = (t * 0.05 + i / 12) % 1, x = lerp(X0 - 40, X1 + 40, u), y = Y.lum0 + 32 + ((i * 37) % 64);
      g.fillStyle = C.blood; g.beginPath(); g.ellipse(x, y, 22, 13, 0, 0, 7); g.fill();
      g.fillStyle = 'rgba(0,0,0,0.25)'; g.beginPath(); g.ellipse(x, y, 9, 5, 0, 0, 7); g.fill();
    }
    for (let i = 0; i < 16; i++) {
      const u = (t * 0.07 + i / 16 + 0.03) % 1, x = lerp(X0 - 20, X1 + 20, u), y = Y.lum0 + 20 + ((i * 53) % 84);
      g.fillStyle = C.gold; g.beginPath(); g.arc(x, y, 7, 0, 7); g.fill();
    }
    g.restore();
    // Endotelio fenestrado
    g.fillStyle = '#E58A9A';
    for (let x = X0 + 6; x < X1 - 20; x += 56) { rr(x, Y.en0, 42, Y.en1 - Y.en0, 6); g.fill(); }
    // Membrana basal con cargas negativas
    g.fillStyle = '#6E5BC0'; rr(X0, Y.gbm0, X1 - X0, Y.gbm1 - Y.gbm0, 8); g.fill();
    for (let x = X0 + 40; x < X1 - 20; x += 70) {
      const a = x < XM ? 1 - nef : 1;
      if (a > 0.02) MK.with_(a, () => text('−', x, (Y.gbm0 + Y.gbm1) / 2 - 1, { size: 30, color: '#fff', shadow: false }));
    }
    // Depósitos subendoteliales (lado de la sangre) en la mitad inflamada
    if (nit > 0) MK.with_(nit, () => {
      g.fillStyle = C.gold2;
      for (let x = XM + 30; x < X1 - 20; x += 46) { g.beginPath(); g.arc(x, Y.gbm0 - 3, 8, 0, 7); g.fill(); }
    });
    // Pedicelos y cuerpo del podocito
    g.fillStyle = '#3FAF73';
    for (let x = X0 + 6; x < X1 - 20; x += 34) {
      const f = x + 30 < XM ? nef : 0, w = lerp(24, 35, f), h = lerp(32, 22, f);
      rr(x, Y.pd0, w, h, 8); g.fill();
    }
    g.fillStyle = '#2E8F5C'; rr(X0, Y.pb0, X1 - X0, Y.pb1 - Y.pb0, 14); g.fill();
    // Espacio de Bowman (orina)
    g.fillStyle = '#1B2560'; rr(X0, Y.bw0, X1 - X0, Y.bw1 - Y.bw0, 20); g.fill();
    // Rotura capilar en la mitad nefrítica
    if (rup > 0) {
      const w = lerp(0, 56, rup), cx = 850;
      g.fillStyle = '#3A1220'; g.beginPath();
      g.moveTo(cx - w / 2, Y.en0); g.lineTo(cx + w / 2, Y.en0); g.lineTo(cx + w / 2 - 8, Y.gbm1); g.lineTo(cx + w / 2 + 4, Y.pb1); g.lineTo(cx - w / 2 - 4, Y.pb1); g.lineTo(cx - w / 2 + 8, Y.gbm1); g.closePath(); g.fill();
    }
    // Agua y solutos pequeños: pasan por toda la barrera
    for (let i = 0; i < 14; i++) {
      const u = (t * 0.45 + i / 14) % 1, x = X0 + 30 + ((i * 131) % (X1 - X0 - 60)), y = lerp(Y.lum1 - 10, Y.bw1 - 14, u);
      g.globalAlpha *= 0.7; g.fillStyle = C.cyan; g.beginPath(); g.arc(x, y, 4, 0, 7); g.fill(); g.globalAlpha /= 0.7;
    }
    // Fuga de albúmina (nefrótico)
    if (nef > 0) MK.with_(nef, () => {
      for (let i = 0; i < 12; i++) {
        const u = (t * 0.32 + i / 12) % 1, x = X0 + 30 + ((i * 73) % (XM - X0 - 60)), y = lerp(Y.lum1 - 20, Y.bw1 - 14, u);
        g.fillStyle = C.gold; g.beginPath(); g.arc(x, y, 8, 0, 7); g.fill();
      }
    });
    // Eritrocitos que caen por la rotura (nefrítico)
    if (rup > 0) MK.with_(rup, () => {
      for (let i = 0; i < 4; i++) {
        const u = (t * 0.35 + i / 4) % 1, x = 850 + Math.sin(i * 2.3) * 14 + (u > 0.6 ? (i - 1.5) * 60 * (u - 0.6) : 0), y = lerp(Y.lum1 - 30, Y.bw1 - 20, u);
        g.fillStyle = C.blood; g.beginPath(); g.ellipse(x, y, 18, 11, 0.3, 0, 7); g.fill();
      }
    });
  }
  // Neutrófilo (núcleo multilobulado)
  function neutro(x, y, a) {
    if (a <= 0) return;
    const g = MK.g;
    MK.with_(a, () => {
      g.fillStyle = '#D9C8FF'; g.beginPath(); g.arc(x, y, 20, 0, 7); g.fill();
      g.fillStyle = '#7A4FD0'; [[-7, -4], [6, -6], [2, 7]].forEach(([dx, dy]) => { g.beginPath(); g.arc(x + dx, y + dy, 6.5, 0, 7); g.fill(); });
    });
  }

  window.CLIP = {
    topic: 'glomerulo', title: 'Nefrótico vs nefrítico en 1 minuto', sub: 'Dónde se rompe el glomérulo, y qué te dicen el complemento y el reloj', color: '#62E3FF',
    scenes: [
      { say: 'Nefrótico contra nefrítico, en un minuto.', min: 3.5 },
      { say: 'La sangre cruza el endotelio, la membrana basal y los podocitos. La albúmina y los eritrocitos se quedan.' },
      { say: 'Si se daña el podocito, los pedicelos se fusionan y se fuga la albúmina, sin inflamación: es el nefrótico, con más de tres punto cinco gramos al día.' },
      { say: 'Si el glomérulo se inflama, el complemento atrae neutrófilos, se rompen los capilares y pasan eritrocitos: es el nefrítico, con hematuria, hipertensión y creatinina que sube.' },
      { say: 'En el nefrítico, mide el C3. Bajo en PoLiMeroS: postinfecciosa, lupus y membranoproliferativa. Normal en IgA, anti membrana basal y ANCA.' },
      { say: 'Y el reloj: hematuria uno o dos días después de la infección, IgA; de una a tres semanas, postestreptocócica.' },
      { say: 'Resumen: patrón, complemento y reloj.', min: 4.5 },
      { say: 'Trampa: la hemoptisis con glomerulonefritis rápidamente progresiva se trata sin esperar la biopsia. Y un C3 bajo a las ocho semanas no era postestreptocócica.', min: 8 }
    ],
    draw(t, T) {
      const { C, ease, text, pill, arrow, titleCard, headline, bg, with_, lerp, rr, ring } = MK, g = MK.g;
      bg(t);
      const k = T.cur, dimFor = (i) => (k >= 6 ? 1 : k === i ? 1 : 0.42);
      if (k === 0) { titleCard(t - T.s(0), this.title, this.sub, this.color); return; }
      const heads = ['', 'La barrera de filtración', 'Podocito dañado → nefrótico', 'Glomérulo inflamado → nefrítico', 'Nefrítico: ¿cómo está el C3?', 'El reloj: ¿cuándo empezó la hematuria?', 'Resumen: patrón, complemento y reloj', 'Trampa del examen'];
      headline(heads[k], t - T.s(k), this.color);
      const nef = ease(T.f(2, 0.1, 0.45)), nit = ease(T.f(3, 0.05, 0.4)), rup = ease(T.f(3, 0.35, 0.6));

      // 1 · Barrera (queda brillante mientras se construye: escenas 1 a 3)
      with_(k <= 3 || k >= 6 ? 1 : 0.42, () => {
        const a = ease(T.f(1, 0, 0.25));
        with_(a, () => {
          g.save(); g.translate(0, (1 - a) * 30); barrier(t, nef, nit, rup); g.restore();
        });
        const labs = [['Sangre', 260], ['Endotelio', 340], ['Membrana basal', 377], ['Podocito', 437], ['Orina', 521]];
        labs.forEach(([s, y], i) => with_(ease(T.f(1, 0.15 + i * 0.1, 0.35 + i * 0.1)), () => text(s, 40, y, { size: 24, color: C.ink2, align: 'left', weight: 600 })));
        if (k === 1) with_(ease(T.f(1, 0.6, 0.8)), () => text('Pasan agua y solutos pequeños', XM, 521, { size: 26, color: C.cyan }));
        // Divisor entre las dos mitades
        with_(ease(T.f(2, 0, 0.15)), () => { g.strokeStyle = 'rgba(244,241,255,0.55)'; g.lineWidth = 3; g.setLineDash([10, 10]); g.beginPath(); g.moveTo(XM, 188); g.lineTo(XM, 572); g.stroke(); g.setLineDash([]); });
        if (k >= 2) with_(ease(T.f(2, 0.4, 0.6)), () => text('Fuga de albúmina', 442, 521, { size: 26, color: C.gold }));
        if (k >= 3) {
          with_(ease(T.f(3, 0.6, 0.8)), () => text('Pasan eritrocitos', 960, 521, { size: 24, color: C.pink }));
          [[720, 0.1], [930, 0.2], [1000, 0.3]].forEach(([x, d]) => neutro(x, lerp(230, 296, ease(T.f(3, d, d + 0.3))), ease(T.f(3, d, d + 0.15))));
          pill('C3', 790, 262, ease(T.f(3, 0.15, 0.35)), { fill: C.gold, size: 24 });
        }
        if (k === 2) { g.save(); ring(442, 420, 70, t, { color: C.green }); g.restore(); }
      });

      // 2 · Hallazgos del nefrótico
      with_(dimFor(2), () => {
        pill('Nefrótico', 442, 615, ease(T.f(2, 0.3, 0.45)), { fill: C.gold, size: 34 });
        ['Proteína >3.5 g/día', 'Albúmina <3 g/dL', 'Edema intenso', 'Lípidos altos'].forEach((s, i) =>
          with_(ease(T.f(2, 0.45 + i * 0.1, 0.6 + i * 0.1)), () => text(s, 442, 690 + i * 55, { size: 30, maxW: 380 })));
      });
      // 3 · Hallazgos del nefrítico
      with_(dimFor(3), () => {
        pill('Nefrítico', 837, 615, ease(T.f(3, 0.5, 0.62)), { fill: C.red, color: '#fff', size: 34 });
        ['Hematuria dismórfica', 'Cilindros hemáticos', 'HTA y oliguria', 'Creatinina sube'].forEach((s, i) =>
          with_(ease(T.f(3, 0.6 + i * 0.08, 0.72 + i * 0.08)), () => text(s, 837, 690 + i * 55, { size: 30, maxW: 380 })));
      });
      // 4 · Complemento
      with_(dimFor(4), () => {
        const a = ease(T.f(4, 0, 0.2));
        with_(a, () => { arrow(837, 875, 837, 935, a, { color: C.red, width: 6 }); });
        const box = (x, w, col, pr) => { if (pr <= 0) return; with_(pr, () => { rr(x, 950, w, 140, 26); g.fillStyle = 'rgba(20,26,66,0.9)'; g.fill(); g.lineWidth = 4; g.strokeStyle = col; g.stroke(); }); };
        const l = ease(T.f(4, 0.15, 0.35)), r = ease(T.f(4, 0.6, 0.8));
        box(60, 465, C.red, l); box(555, 465, C.green, r);
        with_(l, () => { text('C3 bajo', 292, 982, { size: 30, color: C.red }); text('PoLiMeroS', 292, 1026, { size: 40, color: C.gold }); text('Postinfecciosa · Lupus · GNMP', 292, 1066, { size: 24, color: C.ink2, weight: 600 }); });
        with_(r, () => { text('C3 normal', 787, 982, { size: 30, color: C.green }); text('IgA · anti-MBG · ANCA', 787, 1040, { size: 34 }); });
      });
      // 5 · El reloj
      with_(dimFor(5), () => {
        const a = ease(T.f(5, 0, 0.2)), L0 = 110, L1 = 1000, yy = 1180;
        with_(a, () => {
          g.strokeStyle = C.ink2; g.lineWidth = 6; g.lineCap = 'round'; g.beginPath(); g.moveTo(L0, yy); g.lineTo(lerp(L0, L1, a), yy); g.stroke();
          g.fillStyle = C.ink; g.beginPath(); g.arc(L0, yy, 12, 0, 7); g.fill();
          text('Infección', L0 + 10, yy - 42, { size: 26, color: C.ink2 });
        });
        const m1 = ease(T.f(5, 0.2, 0.4)), m2 = ease(T.f(5, 0.55, 0.75));
        with_(m1, () => {
          g.fillStyle = C.green; g.fillRect(328, yy - 18, 6, 36);
          text('1–2 días', 331, yy - 42, { size: 28 });
        });
        pill('IgA', 331, yy + 58, m1, { fill: C.green, size: 30 });
        with_(m1, () => text('C3 normal', 331, yy + 112, { size: 24, color: C.green }));
        with_(m2, () => {
          g.fillStyle = C.red; g.fillRect(767, yy - 18, 6, 36);
          text('1–3 semanas', 770, yy - 42, { size: 28 });
        });
        pill('Postestreptocócica', 770, yy + 58, m2, { fill: C.pink, size: 28 });
        with_(m2, () => text('C3 bajo', 770, yy + 112, { size: 24, color: C.red }));
        if (k === 5) {
          const u = T.f(5, 0.1, 0.8), x = lerp(L0, 770, u);
          g.fillStyle = C.gold; g.beginPath(); g.arc(x, yy, 11, 0, 7); g.fill();
        }
      });

      // 7 · Trampa
      if (k === 7) {
        const a = ease(T.f(7, 0, 0.12));
        with_(a, () => {
          g.fillStyle = 'rgba(11,14,42,0.9)'; g.fillRect(0, 0, MK.W, MK.H);
          headline(heads[7], t - T.s(7), C.gold);
          text('Hemoptisis + GNRP', 540, 440, { size: 68, color: C.red });
          text('No esperes la biopsia: pulsos de esteroide y recambio plasmático de inmediato (anti-MBG o ANCA)', 540, 545, { size: 34, color: C.ink2, weight: 600, maxW: 860 });
          with_(ease(T.f(7, 0.55, 0.68)), () => {
            text('C3 bajo a las 8 semanas', 540, 800, { size: 62, color: C.gold, maxW: 940 });
            text('No era postestreptocócica: piensa en membranoproliferativa y pide biopsia', 540, 900, { size: 34, color: C.ink2, weight: 600, maxW: 860 });
          });
        });
      }
    }
  };
})();
