// Disfagia en 1 minuto (tema deglucion). Cada escena tiene su narración (say); draw(t, T) dibuja el cuadro del segundo t.
// Tres esófagos: normal (arriba), obstrucción mecánica (abajo izq.) y trastorno motor / acalasia (abajo der.).
window.CLIP = {
  topic: 'deglucion', title: 'Disfagia en 1 minuto', sub: 'Dónde se atora, qué no pasa y cómo reconocer la acalasia', color: '#FF9B3D',
  scenes: [
    { say: 'La disfagia, en un minuto.', min: 3.5 },
    { say: 'Al tragar, una onda empuja el bolo, y el esfínter esofágico inferior se relaja por el óxido nítrico.' },
    { say: 'Primero, dónde se atora. Si cuesta iniciar el trago, con tos, es orofaríngea: videofluoroscopia. Si se atora después, detrás del esternón, es esofágica: endoscopia.' },
    { say: 'Luego, qué no pasa. Si solo se atoran los sólidos, algo físico estorba, como un tumor o un anillo; los líquidos pasan. Si progresa y bajó de peso, piensa en cáncer.' },
    { say: 'Si fallan sólidos y líquidos desde el inicio, falla el motor. La causa clásica: la acalasia.' },
    { say: 'En la acalasia se pierden las neuronas inhibitorias. El esfínter no se relaja, no hay peristalsis, y el esófago se dilata en pico de pájaro. Se confirma con manometría.' },
    { say: 'El tratamiento abre el esfínter: dilatación neumática, miotomía de Heller o POEM, y el esófago se vacía por gravedad.' },
    { say: 'Trampa: adulto mayor con acalasia de pocos meses y pérdida de peso rápida. Puede ser pseudoacalasia por cáncer: endoscopia antes de tratar.', min: 7 }
  ],
  draw(t, T) {
    const { C, ease, lerp, clamp, text, pill, arrow, flow, ring, titleCard, headline, bg, with_ } = MK;
    const g = MK.g;
    bg(t);
    const k = T.cur;
    if (k === 0) { titleCard(t - T.s(0), this.title, this.sub, this.color); return; }
    const heads = ['', 'Deglución normal: onda y EEI que se relaja', '¿Dónde se atora? Orofaríngea o esofágica', 'Solo sólidos → obstrucción mecánica', 'Sólidos y líquidos → trastorno motor', 'Acalasia: el EEI no se relaja', 'Tratamiento: abrir el EEI', 'Trampa del examen'];
    headline(heads[k], t - T.s(k), this.color);
    const sm = (x) => { x = clamp(x); return x * x * (3 - 2 * x); };
    const gau = (d) => Math.exp(-d * d);
    const font = (px, w = 700) => `${w} ${px}px "Inter Display", Inter, "DejaVu Sans", sans-serif`;
    const all = k >= 6;
    const dimFor = (...ii) => (all || ii.includes(k) ? 1 : 0.42);

    // ── Estómago (entrada en x, y)
    function stomach(x, y, a) {
      if (a <= 0) return;
      g.save(); g.translate(x, y); g.globalAlpha *= clamp(a * 2);
      g.beginPath(); g.moveTo(-26, -6);
      g.bezierCurveTo(-54, 56, -6, 112, 70, 106);
      g.bezierCurveTo(146, 100, 166, 34, 142, -12);
      g.bezierCurveTo(122, -48, 56, -38, 26, -6);
      g.closePath(); g.fillStyle = '#B9505E'; g.fill();
      g.beginPath(); g.ellipse(68, 44, 58, 34, -0.3, 0, 7); g.fillStyle = 'rgba(58,18,32,0.55)'; g.fill();
      g.fillStyle = 'rgba(255,255,255,0.12)'; g.beginPath(); g.ellipse(100, 0, 26, 12, -0.5, 0, 7); g.fill();
      g.restore();
    }
    // ── Esófago: tubo de y0 al EEI (yL) con ancho de luz wf(y). Devuelve la ruta de la luz (para recortar contenido).
    function tube(x, y0, yL, wf, a) {
      const N = 70, pts = [], W = 13, yEnd = yL + 12;
      for (let i = 0; i <= N; i++) { const y = y0 + (yEnd - y0) * i / N; pts.push([y, wf(y)]); }
      const lumen = () => { g.beginPath(); pts.forEach(([y, w], i) => (i ? g.lineTo(x - w, y) : g.moveTo(x - w, y))); for (let i = N; i >= 0; i--) g.lineTo(x + pts[i][1], pts[i][0]); g.closePath(); };
      g.save(); g.globalAlpha *= clamp(a * 2);
      g.beginPath(); pts.forEach(([y, w], i) => (i ? g.lineTo(x - w - W, y) : g.moveTo(x - w - W, y))); for (let i = N; i >= 0; i--) g.lineTo(x + pts[i][1] + W, pts[i][0]); g.closePath();
      g.fillStyle = C.organ; g.fill();
      lumen(); g.fillStyle = '#3A1220'; g.fill();
      // EEI: bandas moradas
      const wl = wf(yL - 8); g.fillStyle = C.purple;
      MK.rr(x - wl - W - 2, yL - 30, W + 4, 34, 6); g.fill(); MK.rr(x + wl - 2, yL - 30, W + 4, 34, 6); g.fill();
      g.restore();
      return lumen;
    }
    function blob(x, y, r, col) { g.fillStyle = col; g.beginPath(); g.arc(x, y, r, 0, 7); g.fill(); g.fillStyle = 'rgba(255,255,255,0.22)'; g.beginPath(); g.arc(x - r * 0.3, y - r * 0.3, r * 0.35, 0, 7); g.fill(); }

    // ══ 1 · Esófago normal (arriba, centro) + 2 · orofaríngea vs esofágica
    const nx = 540, n0 = 200, nL = 585;
    with_(dimFor(1, 2), () => {
      const a = ease(T.f(1, 0, 0.2));
      const P = 3.4, u = (t % P) / P;
      const yb = lerp(n0 + 40, nL + 50, sm(u * 1.08));
      const open = sm((u - 0.25) / 0.2) * (1 - sm((u - 0.92) / 0.08));
      const wL = lerp(5, 20, open);
      const wf = (y) => {
        let w = 20 + 30 * Math.pow(clamp(1 - (y - n0) / 70), 2);
        w += 13 * gau((y - yb) / 34) - 11 * gau((y - (yb - 78)) / 26);
        w = lerp(w, Math.min(w, wL), gau((y - (nL - 10)) / 20));
        return Math.max(4, w);
      };
      stomach(nx, nL + 18, a);
      tube(nx, n0, nL, wf, a);
      if (a > 0.5) {
        if (yb < nL + 30) blob(nx, yb, 17, C.orange);
        else with_(1 - clamp((yb - nL - 30) / 20), () => blob(nx + 30, yb + 20, 15, C.orange));
      }
    });
    with_(dimFor(1), () => {
      pill('Onda peristáltica', 270, 345, ease(T.f(1, 0.2, 0.4)), { fill: C.cyan, size: 28 });
      arrow(400, 360, 505, 400, T.f(1, 0.3, 0.45), { color: C.cyan, width: 5 });
      pill('EEI se relaja', 290, 560, ease(T.f(1, 0.5, 0.7)), { fill: C.purple, color: '#fff', size: 28 });
      with_(ease(T.f(1, 0.6, 0.8)), () => text('óxido nítrico', 290, 615, { size: 26, color: C.ink2, weight: 600 }));
      arrow(400, 565, 495, 568, T.f(1, 0.55, 0.7), { color: C.purple, width: 5 });
    });
    with_(dimFor(2), () => {
      if (k === 2 && T.f(2, 0.1, 0.5) > 0 && T.f(2, 0.5, 1) <= 0) ring(nx, n0 + 28, 52, t, { color: C.orange });
      pill('Orofaríngea', 820, 225, ease(T.f(2, 0.1, 0.25)), { fill: C.orange, size: 30 });
      arrow(690, 228, 600, 222, T.f(2, 0.15, 0.3), { color: C.orange, width: 5 });
      with_(ease(T.f(2, 0.2, 0.35)), () => {
        text('Inicia el trago: tos, nariz', 820, 285, { size: 26, color: C.ink2, weight: 600 });
        text('Videofluoroscopia', 820, 322, { size: 26, color: C.gold });
      });
      if (k === 2 && T.f(2, 0.55, 1) > 0) ring(nx, 440, 48, t, { color: C.cyan });
      pill('Esofágica', 820, 430, ease(T.f(2, 0.55, 0.7)), { fill: C.cyan, size: 30 });
      arrow(715, 432, 590, 440, T.f(2, 0.6, 0.72), { color: C.cyan, width: 5 });
      with_(ease(T.f(2, 0.65, 0.8)), () => {
        text('Se atora tras el esternón', 820, 485, { size: 26, color: C.ink2, weight: 600, maxW: 420 });
        text('Endoscopia', 820, 527, { size: 26, color: C.gold });
      });
    });

    // ══ 3 · Obstrucción mecánica (abajo izquierda)
    const mx = 250, m0 = 745, mL = 1075, yt = m0 + 0.52 * (mL - m0);
    with_(dimFor(3), () => {
      const a = ease(T.f(3, 0, 0.2));
      const nar = ease(T.f(3, 0.1, 0.35));
      const wf = (y) => {
        let w = 20 - 12 * nar * gau((y - yt) / 26) + 6 * nar * gau((y - (yt - 56)) / 26);
        w = lerp(w, Math.min(w, 13), gau((y - (mL - 8)) / 20));
        return w;
      };
      stomach(mx, mL + 18, a);
      tube(mx, m0, mL, wf, a);
      if (a > 0.3) {
        // tumor o anillo
        with_(nar, () => {
          g.fillStyle = '#7E2A4E'; g.strokeStyle = 'rgba(0,0,0,0.35)'; g.lineWidth = 3;
          g.beginPath(); g.ellipse(mx - 27, yt, 20, 40, 0, 0, 7); g.fill(); g.stroke();
          g.beginPath(); g.ellipse(mx + 25, yt + 6, 16, 30, 0, 0, 7); g.fill(); g.stroke();
        });
        const lq = ease(T.f(3, 0.45, 0.6));
        if (lq > 0) with_(lq, () => flow([[mx + 6, m0 + 10], [mx + 14, yt - 80], [mx + 15, yt - 40], [mx + 2, yt - 12], [mx, yt + 30], [mx, mL + 10], [mx + 40, mL + 60]], t, { alpha: g.globalAlpha, n: 8, speed: 0.35, color: C.cyan, r: 6 }));
        const sb = ease(T.f(3, 0.25, 0.45));
        if (sb > 0) with_(sb, () => blob(mx + Math.sin(t * 7) * 1.5, lerp(m0 + 20, yt - 54, sb), 20, C.orange));
      }
      with_(ease(T.f(3, 0.3, 0.45)), () => text('Sólido', 140, yt - 54, { size: 26, color: C.orange }));
      with_(ease(T.f(3, 0.5, 0.65)), () => text('Líquido', 140, yt + 70, { size: 26, color: C.cyan }));
      pill('Tumor o anillo', 425, yt, ease(T.f(3, 0.2, 0.35)), { fill: '#C46A92', color: '#fff', size: 26 });
      with_(ease(T.f(3, 0.75, 0.9)), () => text('Si progresa y baja de peso: cáncer', 425, yt + 74, { size: 26, color: C.red, maxW: 240 }));
      with_(ease(T.f(3, 0.55, 0.75)), () => text('Solo sólidos → mecánica', 290, 1262, { size: 30, color: C.ink }));
    });

    // ══ 4–6 · Trastorno motor → acalasia → miotomía (abajo derecha)
    const ax = 700, a0 = 745, aL = 1075;
    with_(dimFor(4, 5), () => {
      const a = ease(T.f(4, 0, 0.2));
      const dil = ease(T.f(5, 0.12, 0.5));
      const cut = ease(T.f(6, 0.2, 0.45));
      const wL = lerp(4, 15, cut);
      const wf = (y) => {
        const b = 52 * sm((y - (a0 + 20)) / 150) * sm((aL - 12 - y) / 115);
        let w = 20 + dil * b;
        w = lerp(w, Math.min(w, wL), gau((y - (aL - 8)) / 22));
        return w;
      };
      stomach(ax, aL + 18, a);
      const lumen = tube(ax, a0, aL, wf, a);
      // contenido retenido: nivel que sube al dilatarse y baja tras la miotomía
      const lv = lerp(lerp(aL - 48, a0 + 150, ease(T.f(5, 0.3, 0.75))), aL - 80, ease(T.f(6, 0.45, 0.95)));
      const cIn = ease(T.f(4, 0.25, 0.5));
      if (cIn > 0) with_(cIn, () => {
        g.save(); lumen(); g.clip();
        g.fillStyle = 'rgba(98,227,255,0.55)'; g.fillRect(ax - 90, lv, 180, aL + 30 - lv);
        g.fillStyle = 'rgba(201,138,58,0.75)'; g.fillRect(ax - 90, lv + 16, 180, aL + 30 - lv);
        g.fillStyle = C.cyan; g.fillRect(ax - 90, lv - 2, 180, 5);
        [[-6, 30], [20, 64], [-22, 98], [10, 140], [-14, 185]].forEach(([dx, dy]) => { if (lv + dy < aL - 24) blob(ax + dx * (0.5 + dil), lv + dy, 13, C.orange); });
        g.restore();
        if (k === 4) blob(ax, lv - 26 + Math.sin(t * 6) * 1.5, 17, C.orange);
      });
      if (cut > 0) {
        with_(cut, () => {
          g.strokeStyle = C.gold; g.lineWidth = 5; g.setLineDash([8, 6]);
          g.beginPath(); g.moveTo(ax - wL - 7, aL - 34); g.lineTo(ax - wL - 7, aL + 8); g.moveTo(ax + wL + 7, aL - 34); g.lineTo(ax + wL + 7, aL + 8); g.stroke(); g.setLineDash([]);
        });
        const dr = ease(T.f(6, 0.4, 0.55));
        if (dr > 0) with_(dr, () => flow([[ax, aL - 30], [ax, aL + 20], [ax + 50, aL + 62]], t, { alpha: g.globalAlpha, n: 4, speed: 0.45, color: C.orange, r: 7 }));
      }
      with_(ease(T.f(4, 0.5, 0.7)), () => text('Sólidos y líquidos → motora', 790, 1262, { size: 30, color: C.ink }));
    });
    with_(dimFor(5), () => {
      pill('Manometría', 920, 790, ease(T.f(5, 0.8, 0.95)), { fill: C.purple, color: '#fff', size: 26 });
      pill('Pico de pájaro', 905, 900, ease(T.f(5, 0.45, 0.6)), { fill: C.gold, size: 26 });
      arrow(830, 925, 745, 1030, T.f(5, 0.5, 0.65), { color: C.gold, width: 5, cx: 790, cy: 960 });
      const cutp = ease(T.f(6, 0.15, 0.3));
      with_(1 - cutp, () => pill('EEI cerrado', 905, 1000, ease(T.f(5, 0.3, 0.45)), { fill: C.red, color: '#fff', size: 26 }));
    });
    if (k >= 6) {
      pill('Miotomía', 905, 1000, ease(T.f(6, 0.15, 0.3)), { fill: C.gold, size: 28 });
      with_(ease(T.f(6, 0.3, 0.45)), () => text('Heller, POEM o dilatación', 905, 1062, { size: 26, color: C.ink2, weight: 600, maxW: 240 }));
    }

    // ══ 7 · Trampa
    if (k === 7) {
      const a = ease(T.f(7, 0, 0.15));
      with_(a, () => {
        g.fillStyle = 'rgba(11,14,42,0.9)'; g.fillRect(0, 0, MK.W, MK.H);
        headline(heads[7], t - T.s(7), C.gold);
        text('¿Acalasia en un adulto mayor?', 540, 450, { size: 60, color: C.gold, maxW: 940 });
        text('Pocos meses y pérdida de peso rápida: puede ser pseudoacalasia por cáncer', 540, 560, { size: 34, color: C.ink2, weight: 600, maxW: 860 });
        with_(ease(T.f(7, 0.5, 0.65)), () => {
          text('Endoscopia antes de tratar', 540, 800, { size: 62, color: C.cyan, maxW: 940 });
          text('La manometría confirma; la endoscopia descarta el tumor', 540, 890, { size: 34, color: C.ink2, weight: 600, maxW: 960 });
        });
      });
    }
  }
};
