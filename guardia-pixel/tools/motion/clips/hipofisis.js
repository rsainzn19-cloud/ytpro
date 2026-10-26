// Adenoma hipofisario en 1 minuto (tema hipofisis). Cada escena tiene su narración (say); draw(t, T) dibuja el cuadro del segundo t.
// Arriba: corte esquemático de la silla turca (hipotálamo, tallo, quiasma, hipófisis, senos) · abajo: campos visuales, lo que falta y lo que sobra.
window.CLIP = {
  topic: 'hipofisis', title: 'Adenoma hipofisario en 1 minuto', sub: 'Lo que comprime, lo que secreta y qué hormona sobra o falta', color: '#B48CFF',
  scenes: [
    { say: 'Los adenomas de hipófisis, en un minuto.', min: 3.5 },
    { say: 'La hipófisis vive en la silla turca. Arriba tiene el quiasma óptico, a los lados los senos cavernosos, y el hipotálamo la controla por el tallo.' },
    { say: 'Un macroadenoma, de un centímetro o más, crece hacia arriba y aplasta el centro del quiasma, donde cruzan las fibras nasales.' },
    { say: 'Esas fibras ven el campo temporal. Por eso se pierden los dos: hemianopsia bitemporal.' },
    { say: 'También aplasta la hipófisis sana. Las hormonas se apagan en orden: crecimiento, gonadotropinas, tirotropina y al final corticotropina.' },
    { say: 'El funcionante más común es el prolactinoma. La dopamina frena a la prolactina, y la cabergolina imita esa señal: baja la prolactina y encoge el tumor.' },
    { say: 'Si el tumor secreta, sobra una hormona. Prolactina: cabergolina. Hormona de crecimiento o corticotropina, es decir, acromegalia y Cushing: cirugía transesfenoidal.' },
    { say: 'Perla: la cabergolina va aunque sea macroadenoma y comprima el quiasma. Y en el hipopituitarismo, repón el cortisol antes que la levotiroxina.', min: 7 }
  ],
  draw(t, T) {
    const { C, ease, pop, lerp, clamp, text, pill, arrow, flow, ring, titleCard, headline, bg, with_, rr } = MK;
    const g = MK.g;
    bg(t);
    const k = T.cur;
    if (k === 0) { titleCard(t - T.s(0), this.title, this.sub, this.color); return; }
    const heads = ['', 'La hipófisis y sus vecinos', 'Macroadenoma: aplasta el quiasma', 'Hemianopsia bitemporal', 'Hipopituitarismo: se apagan en orden', 'Prolactinoma: cabergolina', '¿Qué hormona sobra y cuál falta?', 'Perla para el examen'];
    headline(heads[k], t - T.s(k), this.color);
    const all = k >= 6;
    const dimFor = (...ii) => (all || ii.includes(k) ? 1 : 0.42);
    const lead = (x1, y1, x2, y2, a) => { if (a <= 0) return; with_(a, () => { g.strokeStyle = 'rgba(201,206,255,0.45)'; g.lineWidth = 3; g.beginPath(); g.moveTo(x1, y1); g.lineTo(x2, y2); g.stroke(); }); };

    // Estado del tumor
    const grow = ease(T.f(2, 0.1, 0.55)) * (k >= 2 ? 1 : 0);
    const shrink = 1 - 0.14 * ease(T.f(5, 0.55, 0.9)) * (k >= 5 ? 1 : 0);
    const R = lerp(20, 145, grow) * shrink, tcy = lerp(600, 520, grow) + (145 - R) * 0.5 * grow;
    const tTop = tcy - R;
    const chY = Math.min(395, tTop - 12), comp = clamp((395 - chY) / 18);

    // ══ 1 · Anatomía (todo lo de arriba)
    with_(dimFor(1, 2, 5), () => {
      const a = ease(T.f(1, 0, 0.25));
      if (a > 0) with_(clamp(a * 2), () => {
        // seno esfenoidal
        rr(440, 700, 200, 66, 22); g.fillStyle = 'rgba(98,227,255,0.10)'; g.fill(); g.lineWidth = 3; g.strokeStyle = 'rgba(98,227,255,0.45)'; g.stroke();
        // senos cavernosos
        [370, 710].forEach((x) => {
          rr(x - 36, 568, 72, 92, 26); g.fillStyle = '#4A1830'; g.fill();
          g.fillStyle = C.blood; g.beginPath(); g.arc(x, 598, 15, 0, 7); g.fill();
          g.fillStyle = C.gold; [[-14, 632], [2, 640], [16, 628]].forEach(([dx, y]) => { g.beginPath(); g.arc(x + dx, y, 6, 0, 7); g.fill(); });
        });
        // silla turca (hueso)
        g.strokeStyle = '#D9CBA8'; g.lineWidth = 22; g.lineCap = 'round';
        g.beginPath(); g.moveTo(420, 525); g.lineTo(420, 560); g.arc(540, 560, 120, Math.PI, 0, true); g.lineTo(660, 525); g.stroke();
        // hipotálamo y tallo
        g.fillStyle = '#D88AA6'; rr(531, 262, 18, (grow > 0 ? Math.min(562, tTop + 24) : 562) - 262, 9); g.fill();
        g.fillStyle = '#8E6CC9'; g.beginPath(); g.ellipse(540, 228, 130, 46, 0, 0, 7); g.fill();
        g.fillStyle = 'rgba(255,255,255,0.14)'; g.beginPath(); g.ellipse(500, 214, 50, 14, -0.1, 0, 7); g.fill();
      });
      // tumor (escena 2+)
      if (grow > 0) with_(clamp(grow * 3), () => {
        g.fillStyle = '#C46A92'; g.beginPath(); g.ellipse(540, tcy, R * 0.76, R, 0, 0, 7); g.fill();
        g.lineWidth = 4; g.strokeStyle = 'rgba(0,0,0,0.3)'; g.stroke();
        g.fillStyle = 'rgba(255,255,255,0.14)'; g.beginPath(); g.ellipse(510, tcy - R * 0.45, R * 0.28, R * 0.14, -0.4, 0, 7); g.fill();
      });
      // hipófisis sana (se aplasta)
      if (a > 0) with_(clamp(a * 2), () => {
        const ry = lerp(55, 15, grow), cy = lerp(610, 662, grow), rx = lerp(80, 96, grow);
        g.fillStyle = '#E7A0B4'; g.beginPath(); g.ellipse(540, cy, rx, ry, 0, 0, 7); g.fill();
      });
      // quiasma (X) que se deforma hacia arriba
      const ca = ease(T.f(1, 0.25, 0.45));
      if (ca > 0) with_(clamp(ca * 2), () => {
        const arm = (x1, y1, x2, y2) => { g.beginPath(); g.moveTo(x1, y1); g.quadraticCurveTo(540, chY - (395 - chY) * 0.8, x2, y2); };
        g.lineCap = 'round';
        [[400, 345, 680, 445], [400, 445, 680, 345]].forEach(([x1, y1, x2, y2]) => { arm(x1, y1, x2, y2); g.lineWidth = 26; g.strokeStyle = '#F3E7C8'; g.stroke(); });
        [[400, 345, 680, 445], [400, 445, 680, 345]].forEach(([x1, y1, x2, y2]) => { arm(x1, y1, x2, y2); g.lineWidth = 7; g.strokeStyle = C.cyan; g.stroke(); });
        if (comp > 0) { g.fillStyle = `rgba(255,84,112,${0.55 * comp})`; g.beginPath(); g.arc(540, chY, 26, 0, 7); g.fill(); }
      });
    });
    with_(dimFor(1), () => {
      with_(ease(T.f(1, 0.1, 0.25)), () => text('Hipotálamo', 830, 228, { size: 28, color: C.ink2 }));
      with_(ease(T.f(1, 0.25, 0.4)), () => text('Quiasma óptico', 860, 395, { size: 28, color: C.ink2 }));
      lead(712, 395, 740, 395, ease(T.f(1, 0.25, 0.4)));
      with_(ease(T.f(1, 0.4, 0.55)), () => text('Silla turca', 195, 545, { size: 28, color: C.ink2 }));
      lead(285, 545, 404, 545, ease(T.f(1, 0.4, 0.55)));
      with_(ease(T.f(1, 0.05, 0.2)), () => text('Hipófisis', 860, 712, { size: 28, color: '#E7A0B4' }));
      lead(785, 708, lerp(612, 630, grow), lerp(640, 668, grow), ease(T.f(1, 0.05, 0.2)));
      with_(ease(T.f(1, 0.55, 0.7)), () => text('Seno cavernoso', 175, 640, { size: 26, color: C.ink2 }));
      lead(292, 632, 333, 615, ease(T.f(1, 0.55, 0.7)));
      with_(ease(T.f(1, 0.75, 0.9)), () => text('Seno esfenoidal', 190, 735, { size: 26, color: C.ink2 }));
      lead(305, 735, 438, 735, ease(T.f(1, 0.75, 0.9)));
    });
    with_(dimFor(2), () => {
      pill('Macroadenoma', 860, 520, ease(T.f(2, 0.3, 0.45)), { fill: '#C46A92', color: '#fff', size: 28 });
      with_(ease(T.f(2, 0.4, 0.55)), () => text('≥ 1 cm', 860, 574, { size: 28, color: C.ink2 }));
      if (k === 2 && comp > 0.5) ring(540, chY, 46, t, { color: C.red });
    });

    // ══ 3 · Campos visuales
    const B = 930;
    with_(dimFor(3), () => {
      const a = ease(T.f(3, 0, 0.2)), lost = ease(T.f(3, 0.3, 0.6));
      [[130, 'OI', -1], [310, 'OD', 1]].forEach(([x, lab, side]) => {
        if (a <= 0) return;
        with_(clamp(a * 2), () => {
          const y = B + 100, r = 78;
          g.fillStyle = '#4FA9C9'; g.beginPath(); g.arc(x, y, r, 0, 7); g.fill();
          if (lost > 0) { g.save(); g.globalAlpha *= lost; g.fillStyle = '#05060F'; g.beginPath(); g.moveTo(x, y - r); g.arc(x, y, r, -Math.PI / 2, Math.PI / 2, side < 0); g.closePath(); g.fill(); g.restore(); }
          g.strokeStyle = C.ink2; g.lineWidth = 4; g.beginPath(); g.arc(x, y, r, 0, 7); g.stroke();
          g.strokeStyle = 'rgba(201,206,255,0.4)'; g.lineWidth = 2; g.beginPath(); g.moveTo(x, y - r); g.lineTo(x, y + r); g.stroke();
          text(lab, x, B - 2, { size: 28, color: C.ink2 });
        });
      });
      with_(ease(T.f(3, 0.55, 0.75)), () => { text('Hemianopsia', 220, B + 222, { size: 30, color: C.red }); text('bitemporal', 220, B + 258, { size: 30, color: C.red }); });
    });

    // ══ 4 · Lo que falta (hipopituitarismo)
    with_(dimFor(4), () => {
      pill('Falta', 565, B, ease(T.f(4, 0, 0.12)), { fill: C.blue, size: 28 });
      ['GH', 'LH/FSH', 'TSH', 'ACTH'].forEach((h, i) => {
        const y = B + 72 + i * 64, on = ease(T.f(4, 0.08 + i * 0.04, 0.18 + i * 0.04)), off = ease(T.f(4, 0.38 + i * 0.13, 0.46 + i * 0.13));
        if (on <= 0) return;
        with_(1 - off, () => pill(h, 565, y, on, { fill: C.ink2, size: 27 }));
        if (off > 0) {
          pill(h, 565, y, 1, { fill: '#3A4070', color: C.dim, size: 27, noPop: true });
          with_(off, () => { g.strokeStyle = C.red; g.lineWidth = 5; g.beginPath(); g.moveTo(500, y + 2); g.lineTo(lerp(500, 630, off), y + 2); g.stroke(); });
        }
      });
      arrow(460, B + 60, 460, B + 270, T.f(4, 0.35, 0.9), { color: C.blue, width: 5 });
    });

    // ══ 5 · Prolactinoma y cabergolina
    with_(dimFor(5), () => {
      const da = ease(T.f(5, 0.15, 0.3));
      if (da > 0) with_(da, () => flow([[540, 276], [540, Math.max(300, tTop + 30)]], t, { alpha: g.globalAlpha, n: 4, speed: 0.6, color: C.gold, r: 8 }));
      pill('Dopamina', 315, 300, da, { fill: C.gold, size: 26 });
      pill('Cabergolina', 190, 455, ease(T.f(5, 0.45, 0.6)), { fill: C.green, size: 28 });
      arrow(300, 465, 425, 500, T.f(5, 0.5, 0.65), { color: C.green, width: 6 });
      if (k === 5 && T.f(5, 0.5, 1) > 0) {
        ring(540, tcy, R * 0.9, t, { color: C.green });
        const ia = ease(T.f(5, 0.6, 0.75));
        [[0, -1], [1, 0], [0, 1], [-1, 0]].forEach(([dx, dy]) => arrow(540 + dx * (R * 0.76 + 60), tcy + dy * (R + 40), 540 + dx * (R * 0.76 + 14), tcy + dy * (R + 6), ia, { color: C.green, width: 5 }));
      }
    });
    // ══ 5–6 · Lo que sobra
    with_(dimFor(5), () => {
      pill('Sobra', 885, B, ease(T.f(5, 0.75, 0.88)), { fill: C.gold, size: 28 });
      pill('PRL', 790, B + 72, ease(T.f(5, 0.8, 0.92)), { fill: C.pink, size: 27 });
      with_(ease(T.f(5, 0.85, 0.97)), () => text('Cabergolina', 940, B + 72, { size: 26, color: C.green }));
    });
    if (k >= 6) {
      pill('GH', 790, B + 136, ease(T.f(6, 0.3, 0.42)), { fill: C.orange, size: 27 });
      with_(ease(T.f(6, 0.35, 0.47)), () => text('Acromegalia', 940, B + 136, { size: 26, color: C.ink }));
      pill('ACTH', 790, B + 200, ease(T.f(6, 0.45, 0.57)), { fill: C.cyan, size: 27 });
      with_(ease(T.f(6, 0.5, 0.62)), () => text('Cushing', 940, B + 200, { size: 26, color: C.ink }));
      with_(ease(T.f(6, 0.68, 0.82)), () => text('GH y ACTH: cirugía transesfenoidal', 865, B + 268, { size: 25, color: C.gold, maxW: 300 }));
    }

    // ══ 7 · Perla
    if (k === 7) {
      const a = ease(T.f(7, 0, 0.15));
      with_(a, () => {
        g.fillStyle = 'rgba(11,14,42,0.9)'; g.fillRect(0, 0, MK.W, MK.H);
        headline(heads[7], t - T.s(7), C.gold);
        text('Prolactinoma → cabergolina', 540, 450, { size: 60, color: C.gold, maxW: 960 });
        text('Aunque sea macroadenoma y comprima el quiasma', 540, 540, { size: 34, color: C.ink2, weight: 600, maxW: 860 });
        with_(ease(T.f(7, 0.5, 0.65)), () => {
          text('Cortisol antes que levotiroxina', 540, 790, { size: 58, color: C.cyan, maxW: 960 });
          text('En el hipopituitarismo: si no, crisis suprarrenal', 540, 885, { size: 34, color: C.ink2, weight: 600, maxW: 860 });
        });
      });
    }
  }
};
