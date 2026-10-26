// Gota en 1 minuto (tema gota). Arriba: purinas → ácido úrico y el medidor de urato. En medio: el pie y la
// articulación ampliada (cristales → macrófago → neutrófilos). Abajo: el cristal al microscopio y el tratamiento por fases.
(() => {
  const ZX = 790, ZY = 690, ZR = 200;
  let cv = null;
  // Dibuja fn en un lienzo aparte y lo compone con alfa a (para atenuar sin transparencias encimadas)
  function layer(a, fn) {
    if (a <= 0) return;
    if (a >= 0.999) { fn(); return; }
    if (!cv) { cv = document.createElement('canvas'); cv.width = MK.W; cv.height = MK.H; }
    const main = MK.g, oc = cv.getContext('2d');
    oc.setTransform(1, 0, 0, 1, 0, 0); oc.globalAlpha = 1; oc.clearRect(0, 0, MK.W, MK.H);
    MK.use(oc); fn(); MK.use(main);
    main.save(); main.globalAlpha = a; main.drawImage(cv, 0, 0); main.restore();
  }
  function tag(str, x, y, col, size = 26) { const g = MK.g; g.font = `700 ${size}px "Inter Display", Inter, sans-serif`; const w = g.measureText(str).width + 28; MK.rr(x - w / 2, y - size * 0.8, w, size * 1.6, size * 0.8); g.fillStyle = 'rgba(11,14,42,0.85)'; g.fill(); MK.text(str, x, y, { size, color: col, shadow: false }); }
  const needle = (x, y, ang, len, col) => { const g = MK.g; g.strokeStyle = col; g.lineWidth = 5; g.lineCap = 'round'; g.beginPath(); g.moveTo(x - Math.cos(ang) * len / 2, y - Math.sin(ang) * len / 2); g.lineTo(x + Math.cos(ang) * len / 2, y + Math.sin(ang) * len / 2); g.stroke(); };
  function neutro(x, y) { const g = MK.g; g.fillStyle = '#D9C8FF'; g.beginPath(); g.arc(x, y, 20, 0, 7); g.fill(); g.fillStyle = '#7A4FD0'; [[-7, -4], [6, -6], [2, 7]].forEach(([dx, dy]) => { g.beginPath(); g.arc(x + dx, y + dy, 6.5, 0, 7); g.fill(); }); }

  // Pie de perfil; inf = inflamación de la primera MTF
  function foot(t, inf) {
    const g = MK.g;
    g.fillStyle = '#D9A47E'; g.beginPath();
    g.moveTo(120, 470); g.lineTo(205, 470); g.lineTo(210, 670); g.quadraticCurveTo(240, 725, 330, 755); g.lineTo(420, 788);
    g.quadraticCurveTo(468, 800, 465, 830); g.quadraticCurveTo(462, 856, 420, 856); g.lineTo(150, 856); g.quadraticCurveTo(92, 856, 100, 795); g.lineTo(118, 690); g.closePath(); g.fill();
    g.fillStyle = 'rgba(0,0,0,0.12)'; g.beginPath(); g.ellipse(140, 820, 35, 22, 0, 0, 7); g.fill();
    if (inf > 0) {
      const r = 34 + 6 * inf + Math.sin(t * 5) * 2 * inf, gr = g.createRadialGradient(392, 812, 4, 392, 812, r * 1.6);
      gr.addColorStop(0, `rgba(255,84,112,${0.95 * inf})`); gr.addColorStop(1, 'rgba(255,84,112,0)');
      g.fillStyle = gr; g.beginPath(); g.arc(392, 812, r * 1.6, 0, 7); g.fill();
    }
    g.strokeStyle = MK.C.gold; g.lineWidth = 4; g.beginPath(); g.arc(392, 812, 30, 0, 7); g.stroke();
  }
  // Articulación ampliada: nc = cristales (0→1), mac = macrófago, neu = neutrófilos, inf = inflamación
  function zoom(t, nc, mac, neu, inf) {
    const { C, lerp } = MK, g = MK.g;
    // lupa: líneas desde el dedo
    g.strokeStyle = 'rgba(242,193,78,0.45)'; g.lineWidth = 3; g.beginPath(); g.moveTo(410, 788); g.lineTo(ZX - ZR * 0.93, ZY - ZR * 0.36); g.moveTo(414, 834); g.lineTo(ZX - ZR * 0.6, ZY + ZR * 0.8); g.stroke();
    g.save(); g.beginPath(); g.arc(ZX, ZY, ZR, 0, 7); g.clip();
    g.fillStyle = `rgb(${Math.round(lerp(46, 110, inf))},${Math.round(lerp(74, 52, inf))},${Math.round(lerp(138, 100, inf))})`; g.fillRect(ZX - ZR, ZY - ZR, 2 * ZR, 2 * ZR);
    // hueso y cartílago arriba y abajo
    g.fillStyle = '#E9DCC4'; g.beginPath(); g.ellipse(ZX, ZY - ZR - 40, ZR * 1.3, 120, 0, 0, 7); g.fill(); g.beginPath(); g.ellipse(ZX, ZY + ZR + 40, ZR * 1.3, 120, 0, 0, 7); g.fill();
    g.strokeStyle = '#9FD8F0'; g.lineWidth = 18; g.beginPath(); g.ellipse(ZX, ZY - ZR - 40, ZR * 1.3, 129, 0, 0, 7); g.stroke(); g.beginPath(); g.ellipse(ZX, ZY + ZR + 40, ZR * 1.3, 129, 0, 0, 7); g.stroke();
    // cristales de urato
    const N = 18, n = Math.floor(N * nc);
    for (let i = 0; i < n; i++) {
      const rr_ = 20 + Math.sqrt((i + 0.5) / N) * 150, x = ZX + Math.cos(i * 2.4) * rr_, y = ZY + Math.sin(i * 2.4) * rr_ * 0.55, ang = (i * 0.9) % Math.PI;
      const eaten = mac > 0 && Math.hypot(x - 730, y - 700) < 70;
      if (!eaten) needle(x + Math.sin(t + i) * 2, y, ang + Math.sin(t * 0.7 + i) * 0.05, 40, '#FFF4C2');
    }
    // macrófago que se come los cristales
    if (mac > 0) MK.with_(mac, () => {
      const r = 58 + Math.sin(t * 2) * 3;
      g.fillStyle = C.orange; g.beginPath(); for (let i = 0; i <= 24; i++) { const a = (i / 24) * Math.PI * 2, rr = r + Math.sin(a * 5 + t * 2) * 6; const x = 730 + Math.cos(a) * rr, y = 700 + Math.sin(a) * rr; if (i) g.lineTo(x, y); else g.moveTo(x, y); } g.closePath(); g.fill();
      g.fillStyle = '#B5651D'; g.beginPath(); g.arc(715, 712, 18, 0, 7); g.fill();
      needle(742, 680, 0.6, 34, '#FFF4C2'); needle(748, 718, 2.2, 30, '#FFF4C2');
    });
    // neutrófilos que llegan
    if (neu > 0) MK.with_(neu, () => {
      [[870, 760, 1000, 900], [820, 805, 900, 1000], [900, 660, 1060, 620], [790, 600, 860, 470]].forEach(([x, y, x0, y0], i) => neutro(lerp(x0, x, neu) + Math.sin(t * 2 + i) * 3, lerp(y0, y, neu)));
    });
    g.restore();
    g.strokeStyle = MK.C.gold; g.lineWidth = 6; g.beginPath(); g.arc(ZX, ZY, ZR, 0, 7); g.stroke();
  }

  window.CLIP = {
    topic: 'gota', title: 'Gota en 1 minuto', sub: 'Del ácido úrico al cristal y al ataque, y cómo se trata por fases', color: '#FF9B3D',
    scenes: [
      { say: 'La gota, en un minuto.', min: 3.5 },
      { say: 'Las purinas se vuelven ácido úrico por la xantina oxidasa. Arriba de seis punto ocho, el urato ya no cabe disuelto.' },
      { say: 'Precipita en agujas en las articulaciones frías y periféricas. El sitio clásico es el dedo gordo del pie: la podagra.' },
      { say: 'Los macrófagos fagocitan los cristales y liberan interleucina uno beta; llegan neutrófilos y la articulación se pone roja, caliente y muy dolorosa.' },
      { say: 'Diagnóstico: artrocentesis, con agujas de birrefringencia negativa. Pide Gram y cultivo: gota e infección pueden coexistir.' },
      { say: 'Fase uno, el ataque: colchicina a dosis baja, antiinflamatorio o esteroide, según el riñón, el estómago y los demás fármacos.' },
      { say: 'Fase dos: alopurinol, que inhibe la xantina oxidasa. Empieza bajo, súbelo hasta un urato menor de seis y da profilaxis con colchicina.' },
      { say: 'Trampa: un ácido úrico normal durante el ataque no descarta gota. Y nunca suspendas el alopurinol en un ataque.', min: 7.5 }
    ],
    draw(t, T) {
      const { C, ease, inOut, text, pill, arrow, titleCard, headline, bg, with_, lerp, rr, block, ring } = MK, g = MK.g;
      bg(t);
      const k = T.cur, dimFor = (i) => (k >= 6 ? 1 : k === i ? 1 : 0.42);
      if (k === 0) { titleCard(t - T.s(0), this.title, this.sub, this.color); return; }
      const heads = ['', 'Purinas → ácido úrico', 'El urato cristaliza: podagra', 'Cristales → macrófago → ataque', 'Artrocentesis: agujas negativas', 'Fase 1: apagar el ataque', 'Fase 2: bajar el urato (<6)', 'Trampa del examen'];
      headline(heads[k], t - T.s(k), this.color);
      const calm = k >= 5 ? 1 - inOut(T.f(5, 0.5, 0.95)) : 1;                 // la colchicina apaga el ataque
      const inf = ease(T.f(3, 0.4, 0.8)) * lerp(0.25, 1, calm);

      // 1 · Vía metabólica y medidor de urato
      with_(dimFor(1), () => {
        pill('Purinas', 165, 230, ease(T.f(1, 0, 0.15)), { fill: C.ink2, size: 32 });
        arrow(262, 230, 345, 230, T.f(1, 0.1, 0.22), { color: C.ink2, width: 6 });
        pill('Xantina', 450, 230, ease(T.f(1, 0.15, 0.28)), { fill: C.ink2, size: 32 });
        arrow(555, 230, 640, 230, T.f(1, 0.22, 0.34), { color: C.ink2, width: 6 });
        pill('Ácido úrico', 800, 230, ease(T.f(1, 0.3, 0.42)), { fill: C.gold, size: 36 });
        const xo = ease(T.f(1, 0.35, 0.5));
        with_(xo, () => { g.strokeStyle = C.purple; g.lineWidth = 3; g.setLineDash([6, 8]); g.beginPath(); g.moveTo(300, 290); g.lineTo(305, 242); g.moveTo(420, 296); g.lineTo(597, 242); g.stroke(); g.setLineDash([]); });
        pill('Xantina oxidasa', 330, 310, xo, { fill: C.purple, color: '#fff', size: 26 });
        // medidor
        const ma = ease(T.f(1, 0.5, 0.65));
        let v = lerp(0.35, 0.86, inOut(T.f(1, 0.6, 0.95)));
        if (k >= 6) v = lerp(0.86, 0.5, inOut(T.f(6, 0.35, 0.8)));
        with_(ma, () => {
          text('Urato sérico', 640, 362, { size: 26, color: C.ink2, align: 'left', weight: 600 });
          rr(640, 388, 360, 24, 12); g.fillStyle = 'rgba(201,206,255,0.18)'; g.fill();
          rr(640, 388, 360 * v, 24, 12); g.fillStyle = v > 0.68 ? C.red : C.green; g.fill();
          const tx = 640 + 0.68 * 360; g.fillStyle = C.ink; g.fillRect(tx - 3, 378, 6, 44);
          text('6.8', tx, 358, { size: 26 });
          text(k >= 6 ? 'Meta: menos de 6 mg/dL' : 'Más de 6.8 mg/dL: precipita', 820, 450, { size: 26, color: k >= 6 ? C.green : C.gold });
        });
      });
      // 2 · Pie, cristales en la articulación fría
      with_(k === 4 ? 0.42 : (k >= 2 ? 1 : 0), () => {
        const fa = ease(T.f(2, 0, 0.2));
        layer(fa * MK.g.globalAlpha, () => { foot(t, inf); zoom(t, ease(T.f(2, 0.25, 0.7)), ease(T.f(3, 0.05, 0.3)) * calm, ease(T.f(3, 0.4, 0.75)), inf); });
        if (k >= 2) {
          pill('Podagra · 1ª MTF', 270, 905, ease(T.f(2, 0.6, 0.75)), { fill: C.gold, size: 28 });
          with_(ease(T.f(2, 0.5, 0.65)) * (k === 2 ? 1 : 0.0), () => tag('Cristales en aguja', ZX, ZY + 150, C.gold2));
        }
        if (k >= 3) {
          pill('IL-1β', 890, 560, ease(T.f(3, 0.25, 0.45)), { fill: C.red, color: '#fff', size: 28 });
          with_(ease(T.f(3, 0.1, 0.25)) * (k === 3 ? 1 : 0), () => tag('Macrófago', 680, 620, C.orange, 24));
        }
      });
      // 4 · Microscopio con luz polarizada
      with_(dimFor(4), () => {
        const a = ease(T.f(4, 0, 0.25)), cx = 250, cy = 1135, r = 125;
        with_(a, () => {
          text('Artrocentesis', cx, 968, { size: 28, color: C.ink2 });
          g.save(); g.beginPath(); g.arc(cx, cy, r, 0, 7); g.clip();
          g.fillStyle = '#5A2A6A'; g.fillRect(cx - r, cy - r, 2 * r, 2 * r);
          for (let i = 0; i < 9; i++) needle(cx - 80 + ((i * 53) % 170), cy - 70 + ((i * 37) % 150), -0.5 + Math.sin(i) * 0.08, 52, '#FFE94D');
          g.restore();
          g.strokeStyle = C.ink2; g.lineWidth = 5; g.beginPath(); g.arc(cx, cy, r, 0, 7); g.stroke();
        });
        with_(ease(T.f(4, 0.3, 0.5)), () => text('Agujas, birrefringencia −', cx, 1288, { size: 26, color: C.gold2 }));
        if (k === 4) with_(ease(T.f(4, 0.55, 0.75)), () => tag('+ Gram y cultivo', 660, 1135, C.cyan, 30));
      });
      // 5 · Fase 1: el ataque
      with_(dimFor(5), () => {
        const a = ease(T.f(5, 0.05, 0.25));
        with_(a, () => {
          rr(540, 965, 500, 145, 26); g.fillStyle = 'rgba(20,26,66,0.92)'; g.fill(); g.lineWidth = 4; g.strokeStyle = C.orange; g.stroke();
          text('Fase 1 · Ataque', 790, 1000, { size: 30, color: C.orange });
          text('Colchicina · AINE · esteroide', 790, 1045, { size: 28, maxW: 470 });
          text('según riñón, estómago y fármacos', 790, 1085, { size: 22, color: C.ink2, weight: 600 });
        });
        if (k >= 5) block('Colchicina', 860, 735, ease(T.f(5, 0.3, 0.45)));
      });
      // 6 · Fase 2: bajar el urato
      if (k >= 6) {
        block('Alopurinol', 597, 230, ease(T.f(6, 0.1, 0.25)));
        with_(ease(T.f(6, 0.3, 0.5)), () => {
          rr(540, 1140, 500, 150, 26); g.fillStyle = 'rgba(20,26,66,0.92)'; g.fill(); g.lineWidth = 4; g.strokeStyle = C.green; g.stroke();
          text('Fase 2 · Bajar urato', 790, 1175, { size: 30, color: C.green });
          text('Alopurinol → urato <6', 790, 1220, { size: 28 });
          text('inicio bajo + profilaxis con colchicina', 790, 1262, { size: 22, color: C.ink2, weight: 600, maxW: 470 });
        });
      }
      // 7 · Trampa
      if (k === 7) {
        const a = ease(T.f(7, 0, 0.12));
        with_(a, () => {
          g.fillStyle = 'rgba(11,14,42,0.94)'; g.fillRect(0, 0, MK.W, MK.H);
          headline(heads[7], t - T.s(7), C.gold);
          text('Urato normal en el ataque', 540, 450, { size: 62, color: C.gold, maxW: 960 });
          text('No descarta gota: la inflamación aumenta su excreción. El diagnóstico se hace con los cristales', 540, 555, { size: 34, color: C.ink2, weight: 600, maxW: 860 });
          with_(ease(T.f(7, 0.5, 0.63)), () => {
            text('¿Suspender el alopurinol?', 540, 800, { size: 62, color: C.red, maxW: 960 });
            text('Nunca durante un ataque: suspenderlo (o no dar profilaxis) provoca más ataques', 540, 900, { size: 34, color: C.ink2, weight: 600, maxW: 860 });
          });
        });
      }
    }
  };
})();
