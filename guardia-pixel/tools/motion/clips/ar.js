// Artritis reumatoide en 1 minuto (tema ar). Articulación a la izquierda (sinovio → pannus → erosiones),
// citocinas y serología a la derecha, dos manos simétricas abajo y el metotrexato que apaga el proceso.
(() => {
  const JX = 290, JY = 515;
  const bz = (u, p0, p1, p2, p3) => { const v = 1 - u; return v * v * v * p0 + 3 * v * v * u * p1 + 3 * v * u * u * p2 + u * u * u * p3; };
  const up = (u) => [bz(u, 160, 160, 420, 420), bz(u, 430, 480, 480, 430)];   // superficie del hueso de arriba
  const lo = (u) => [bz(u, 160, 160, 420, 420), bz(u, 600, 555, 555, 600)];   // superficie del hueso de abajo

  // Articulación: sw = engrosamiento del sinovio (0→1), pan = pannus (0→1), ero = erosiones (0→1)
  function joint(t, sw, pan, ero) {
    const { C, lerp } = MK, g = MK.g;
    const rx = lerp(150, 176, sw), ry = lerp(120, 134, sw);
    // Cápsula
    g.strokeStyle = 'rgba(201,206,255,0.45)'; g.lineWidth = 4; g.beginPath(); g.ellipse(JX, JY, rx + 22, ry + 18, 0, 0, 7); g.stroke();
    // Líquido sinovial
    g.fillStyle = sw > 0 ? `rgba(${Math.round(lerp(46, 120, sw))},${Math.round(lerp(74, 60, sw))},${Math.round(lerp(138, 110, sw))},0.95)` : 'rgba(46,74,138,0.95)';
    g.beginPath(); g.ellipse(JX, JY, rx, ry, 0, 0, 7); g.fill();
    // Membrana sinovial (se engrosa y se pone roja)
    g.strokeStyle = sw > 0 ? `rgb(${Math.round(lerp(242, 214, sw))},${Math.round(lerp(143, 70, sw))},${Math.round(lerp(166, 95, sw))})` : '#F28FA6';
    g.lineWidth = lerp(9, 40, sw); g.beginPath(); g.ellipse(JX, JY, rx, ry, 0, 0, 7); g.stroke();
    // Vellosidades
    if (sw > 0) { g.fillStyle = '#D6465F'; for (let i = 0; i < 18; i++) { const a = (i / 18) * Math.PI * 2, wob = Math.sin(t * 2 + i) * 3; g.beginPath(); g.arc(JX + Math.cos(a) * (rx - 18 * sw + wob), JY + Math.sin(a) * (ry - 18 * sw), 11 * sw, 0, 7); g.fill(); } }
    // Linfocitos y macrófagos
    if (sw > 0) MK.with_(sw, () => {
      [[-0.5, 0], [-0.2, 1], [0.15, 0], [0.45, 1], [2.7, 0], [3.0, 1], [3.3, 0], [3.6, 1]].forEach(([a, m], i) => {
        const x = JX + Math.cos(a) * (rx + 4), y = JY + Math.sin(a) * (ry + 2);
        g.fillStyle = m ? C.orange : C.purple; g.beginPath(); g.arc(x + Math.sin(t * 1.5 + i) * 3, y, m ? 12 : 9, 0, 7); g.fill();
      });
    });
    // Huesos
    g.fillStyle = '#E9DCC4';
    g.beginPath(); g.moveTo(225, 185); g.lineTo(355, 185); g.lineTo(355, 350); g.quadraticCurveTo(420, 370, 420, 430); g.bezierCurveTo(420, 480, 160, 480, 160, 430); g.quadraticCurveTo(160, 370, 225, 350); g.closePath(); g.fill();
    g.beginPath(); g.moveTo(225, 800); g.lineTo(225, 660); g.quadraticCurveTo(160, 640, 160, 600); g.bezierCurveTo(160, 555, 420, 555, 420, 600); g.quadraticCurveTo(420, 640, 355, 660); g.lineTo(355, 800); g.closePath(); g.fill();
    g.fillStyle = 'rgba(0,0,0,0.07)'; g.fillRect(250, 185, 30, 160); g.fillRect(250, 670, 30, 130);
    // Cartílago (se adelgaza bajo el pannus)
    const cart = (f, th) => { g.strokeStyle = '#9FD8F0'; g.lineCap = 'round'; for (let i = 0; i < 40; i++) { const u0 = i / 40, u1 = (i + 1) / 40, edge = Math.min(u0, 1 - u1), eaten = edge < 0.32 * pan ? 0.35 : 1; g.lineWidth = th * eaten; const [x0, y0] = f(u0), [x1, y1] = f(u1); g.beginPath(); g.moveTo(x0, y0); g.lineTo(x1, y1); g.stroke(); } };
    cart(up, 20); cart(lo, 20);
    // Pannus: lengua roja que avanza desde los bordes sobre el cartílago
    if (pan > 0) {
      g.strokeStyle = '#C93A55'; g.lineWidth = 16; g.lineCap = 'round';
      [[up, 11], [lo, -11]].forEach(([f, dy]) => [0, 1].forEach((side) => {
        g.beginPath(); for (let i = 0; i <= 20; i++) { const u = side ? 1 - (i / 20) * 0.3 * pan : (i / 20) * 0.3 * pan, [x, y] = f(u); if (i) g.lineTo(x, y + dy); else g.moveTo(x, y + dy); } g.stroke();
      }));
    }
    // Erosiones marginales: mordidas en el hueso, en los bordes
    if (ero > 0) { g.fillStyle = '#7A2E44'; [[166, 425], [414, 425], [166, 605], [414, 605]].forEach(([x, y]) => { g.beginPath(); g.arc(x, y, 17 * ero, 0, 7); g.fill(); }); }
  }

  // Mano estilizada (dedos hacia arriba). inf: articulaciones inflamadas (0→1); mir: espejo
  function hand(cx, by, s, a, inf, mir, t) {
    if (a <= 0) return;
    const { C } = MK, g = MK.g;
    g.save(); g.translate(cx, by); g.scale(mir ? -s : s, s); g.globalAlpha *= MK.clamp(a * 2);
    const skin = '#D9A47E';
    g.fillStyle = skin;
    MK.rr(-62, -10, 124, 60, 18); g.fill();                         // muñeca
    MK.rr(-96, -180, 192, 185, 40); g.fill();                       // palma
    const F = [[-70, 140], [-23, 165], [24, 155], [70, 120]];
    F.forEach(([x, L]) => { MK.rr(x - 21, -175 - L, 42, L + 20, 21); g.fill(); });
    g.save(); g.translate(80, -40); g.rotate(0.5); MK.rr(-21, -112, 42, 122, 21); g.fill(); g.restore(); // pulgar
    const jt = (x, y, on) => {
      if (on) { g.fillStyle = `rgba(255,84,112,${0.35 + 0.65 * inf})`; g.beginPath(); g.arc(x, y, 14 + 6 * inf + Math.sin(t * 4) * 1.5 * inf, 0, 7); g.fill(); }
      else { g.strokeStyle = C.green; g.lineWidth = 5; g.beginPath(); g.arc(x, y, 13, 0, 7); g.stroke(); }
    };
    F.forEach(([x, L]) => { jt(x, -178, true); jt(x, -178 - L * 0.45, true); jt(x, -178 - L * 0.8, false); });
    if (inf > 0) { g.fillStyle = `rgba(255,84,112,${0.8 * inf})`; g.beginPath(); g.ellipse(0, 22, 50, 18, 0, 0, 7); g.fill(); }
    g.restore();
  }

  // Capa: dibuja fn en un lienzo aparte y lo compone con alfa (así lo atenuado no se transparenta encimado)
  let cv = null;
  function layer(a, fn) {
    if (a <= 0) return;
    if (a >= 0.999) { fn(); return; }
    if (!cv) { cv = document.createElement('canvas'); cv.width = MK.W; cv.height = MK.H; }
    const main = MK.g, oc = cv.getContext('2d');
    oc.setTransform(1, 0, 0, 1, 0, 0); oc.globalAlpha = 1; oc.clearRect(0, 0, MK.W, MK.H);
    MK.use(oc); fn(); MK.use(main);
    main.save(); main.globalAlpha = a; main.drawImage(cv, 0, 0); main.restore();
  }

  window.CLIP = {
    topic: 'ar', title: 'Artritis reumatoide en 1 minuto', sub: 'Del sinovio inflamado al pannus, y por qué hay prisa en tratar', color: '#B48CFF',
    scenes: [
      { say: 'La artritis reumatoide, en un minuto.', min: 3.5 },
      { say: 'Una articulación sana: cartílago liso, líquido sinovial y una membrana sinovial delgada.' },
      { say: 'Aquí, el sistema inmune ataca al sinovio. Linfocitos y macrófagos liberan factor de necrosis tumoral, interleucina seis e interleucina uno, y el sinovio se engrosa.' },
      { say: 'Ese sinovio crece como un tejido invasor, el pannus: se come el cartílago y erosiona el hueso en los bordes. Ese daño no se revierte.' },
      { say: 'El patrón: poliartritis simétrica de muñecas, metacarpofalángicas e interfalángicas proximales, que respeta las distales, con rigidez matutina de más de una hora.' },
      { say: 'Confírmala con el anti CCP, el anticuerpo más específico, que además predice erosiones.' },
      { say: 'Trata desde el diagnóstico: metotrexato una vez a la semana, con ácido fólico. Si no llegas a la meta, agrega un biológico, y el pannus retrocede.' },
      { say: 'Trampa: el metotrexato es semanal; diario puede ser mortal. Y un factor reumatoide positivo no basta: sale en adultos mayores sanos.', min: 8 }
    ],
    draw(t, T) {
      const { C, ease, inOut, text, pill, arrow, titleCard, headline, bg, with_, lerp, rr, block, ring } = MK, g = MK.g;
      bg(t);
      const k = T.cur, dimFor = (i) => (k >= 6 ? 1 : k === i ? 1 : 0.42);
      if (k === 0) { titleCard(t - T.s(0), this.title, this.sub, this.color); return; }
      const heads = ['', 'La articulación sana', 'El sinovio se inflama', 'Pannus: come cartílago y hueso', 'Simétrica, de manos; respeta las IFD', 'Anti-CCP: el más específico', 'Metotrexato semanal desde el inicio', 'Trampa del examen'];
      headline(heads[k], t - T.s(k), this.color);
      const off = k >= 6 ? 1 - inOut(T.f(6, 0.55, 0.95)) : 1;      // el tratamiento apaga la inflamación
      const sw = ease(T.f(2, 0.05, 0.5)) * lerp(0.25, 1, off), pan = ease(T.f(3, 0.05, 0.6)) * off, ero = ease(T.f(3, 0.4, 0.75));
      const lab = (str, x, y, tx, ty, a, col) => { if (a <= 0) return; with_(a, () => { g.strokeStyle = col || C.ink2; g.lineWidth = 3; g.beginPath(); g.moveTo(x - 14, y); g.lineTo(tx, ty); g.stroke(); g.fillStyle = col || C.ink2; g.beginPath(); g.arc(tx, ty, 6, 0, 7); g.fill(); text(str, x, y, { size: 30, align: 'left', color: col || C.ink }); }); };

      // 1 · Articulación (siempre visible; las escenas 1–3 y 6 la usan)
      with_(k <= 3 || k >= 6 ? 1 : 0.42, () => {
        const a = ease(T.f(1, 0, 0.25));
        layer(a * MK.g.globalAlpha, () => { MK.g.translate(0, (1 - a) * 30); joint(t, sw, pan, ero); });
        with_(ease(T.f(1, 0.35, 0.55)) * (1 - sw), () => text('Líquido', JX, JY, { size: 26, color: C.ink2 }));
      });
      with_(dimFor(1), () => {
        lab('Cartílago', 575, 440, 426, 440, ease(T.f(1, 0.25, 0.45)), C.cyan);
        lab('Sinovio', 575, 515, 466, 515, ease(T.f(1, 0.5, 0.7)), C.pink);
      });
      // 2 · Citocinas
      with_(dimFor(2), () => {
        [['TNF', 640], ['IL-6', 790], ['IL-1', 940]].forEach(([s, x], i) => {
          const pr = ease(T.f(2, 0.35 + i * 0.12, 0.6 + i * 0.12));
          pill(s, lerp(470, x, pr), lerp(470, 215, pr), pr, { fill: C.orange, size: 32 });
        });
        if (k === 2) { g.save(); ring(JX + 176, JY, 60, t, { color: C.red }); g.restore(); }
      });
      // 3 · Pannus y erosiones
      with_(dimFor(3), () => {
        lab('Pannus', 575, 595, 404, 572, ease(T.f(3, 0.25, 0.45)), C.red);
        lab('Erosión marginal', 575, 665, 420, 620, ease(T.f(3, 0.55, 0.75)), C.gold);
        with_(ease(T.f(3, 0.75, 0.9)), () => text('(irreversible)', 575, 712, { size: 26, color: C.ink2, weight: 600, align: 'left' }));
      });
      // 4 · Patrón en las manos
      with_(dimFor(4), () => {
        const ha = ease(T.f(4, 0, 0.25)), inf = ease(T.f(4, 0.2, 0.5)) * lerp(0.3, 1, off);
        layer(MK.g.globalAlpha, () => { hand(175, 1250, 0.85, ha, inf, true, t); hand(405, 1250, 0.85, ha, inf, false, t); });
        [['Simétrica', C.gold, 0.3], ['MCF · IFP · muñeca', C.pink, 0.42], ['Respeta las IFD', C.green, 0.55], ['Rigidez >1 hora', C.ink, 0.7]].forEach(([s, col, d], i) =>
          with_(ease(T.f(4, d, d + 0.12)), () => text(s, 800, 945 + i * 55, { size: 32, color: col, maxW: 460 })));
      });
      // 5 · Serología
      with_(dimFor(5), () => {
        const a = ease(T.f(5, 0.1, 0.35));
        pill('Anti-CCP', 680, 805, a, { fill: C.purple, color: '#fff', size: 36 });
        with_(ease(T.f(5, 0.35, 0.5)), () => text('>95% específico', 812, 783, { size: 28, align: 'left' }));
        with_(ease(T.f(5, 0.5, 0.65)), () => text('Predice erosiones', 812, 825, { size: 28, align: 'left', color: C.gold }));
      });
      // 6 · Tratamiento
      if (k >= 6) {
        block('Metotrexato', 790, 292, ease(T.f(6, 0.1, 0.3)));
        const b = ease(T.f(6, 0.25, 0.45));
        with_(b, () => {
          rr(560, 1160, 480, 130, 26); g.fillStyle = 'rgba(20,26,66,0.92)'; g.fill(); g.lineWidth = 4; g.strokeStyle = C.red; g.stroke();
          text('1 vez a la semana + ácido fólico', 800, 1198, { size: 28, maxW: 450 });
        });
        with_(ease(T.f(6, 0.5, 0.65)), () => text('Sin meta → biológico', 800, 1250, { size: 28, color: C.gold }));
      }
      // 7 · Trampa
      if (k === 7) {
        const a = ease(T.f(7, 0, 0.12));
        with_(a, () => {
          g.fillStyle = 'rgba(11,14,42,0.94)'; g.fillRect(0, 0, MK.W, MK.H);
          headline(heads[7], t - T.s(7), C.gold);
          text('Metotrexato DIARIO', 540, 450, { size: 70, color: C.red });
          text('Error que puede ser mortal: la dosis es una vez a la semana, con ácido fólico', 540, 550, { size: 34, color: C.ink2, weight: 600, maxW: 860 });
          with_(ease(T.f(7, 0.5, 0.63)), () => {
            text('FR positivo ≠ AR', 540, 800, { size: 70, color: C.gold });
            text('Sale en adultos mayores sanos y en hepatitis C: pide el anti-CCP', 540, 900, { size: 34, color: C.ink2, weight: 600, maxW: 860 });
          });
        });
      }
    }
  };
})();
