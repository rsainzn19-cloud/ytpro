// Hipertensión pulmonar en 1 minuto (tema hp). PAPm >20 mmHg y los 5 grupos, con el VD como destino común.
// T.s(i)/T.e(i)/T.d(i): inicio, fin y duración de la escena i; T.f(i, a, b): avance 0→1 entre las fracciones a y b de la escena i.
window.CLIP = {
  topic: 'hp', title: 'Hipertensión pulmonar en 1 minuto', sub: 'PAPm mayor de 20 y los 5 grupos, de un vistazo', color: '#62E38C',
  scenes: [
    { say: 'La hipertensión pulmonar, en un minuto.', min: 3.5 },
    { say: 'Es una presión media de la arteria pulmonar mayor de veinte milímetros de mercurio, medida por cateterismo derecho.' },
    { say: 'Grupo uno, la arterial pulmonar: más endotelina y menos óxido nítrico y prostaciclina, y la arteriola se cierra. Piensa en esclerosis sistémica.' },
    { say: 'Grupo dos, el corazón izquierdo: la presión se transmite hacia atrás. Es la causa más común.' },
    { say: 'Grupo tres, el pulmón y la hipoxia: EPOC, enfermedad intersticial o apnea del sueño.' },
    { say: 'Grupo cuatro, coágulos crónicos tras un TEP: se buscan con gammagrama. Y grupo cinco, mecanismos múltiples.' },
    { say: 'En todos, el ventrículo derecho primero se hipertrofia, luego se dilata y falla: eso define el pronóstico.' },
    { say: 'El tratamiento va por grupo: vasodilatadores pulmonares en el uno; en el dos y el tres, tratar la causa; en el cuatro, anticoagular y endarterectomía.' },
    { say: 'Trampa: sildenafil en hipertensión pulmonar por insuficiencia cardiaca izquierda. No está indicado y puede causar edema pulmonar.', min: 7 }
  ],
  draw(t, T) {
    const { C, ease, inOut, lerp, clamp, text, pill, arrow, ring, gauge, organ, shapes, titleCard, headline, bg, with_, rr } = MK;
    const main = MK.g; let g = main;
    bg(t);
    const k = T.cur;
    if (k === 0) { titleCard(t - T.s(0), this.title, this.sub, this.color); return; }
    const heads = ['', 'PAPm >20 mmHg por cateterismo derecho', 'Grupo 1: HAP (la arteriola)', 'Grupo 2: corazón izquierdo, el más común', 'Grupo 3: pulmón e hipoxia', 'Grupo 4: coágulos · Grupo 5: otros', 'El VD: hipertrofia → dilatación → falla', 'Tratamiento según el grupo', 'Trampa del examen'];
    headline(heads[k], t - T.s(k), this.color);
    const all = k >= 7;
    const dimOf = (...ids) => (all || ids.includes(k) ? 1 : 0.42);

    // ── Fila A izquierda: manómetro de PAPm con el corte en 20
    with_(dimOf(1), () => {
      const a = ease(T.f(1, 0, 0.2)); if (a <= 0) return;
      const v = lerp(0.28, 0.72, inOut(T.f(1, 0.35, 0.7)));
      with_(a, () => {
        gauge(270, 395, v, 'PAPm', { r: 120 });
        const an = Math.PI + Math.PI * 0.4;
        g.strokeStyle = C.ink; g.lineWidth = 5; g.beginPath(); g.moveTo(270 + Math.cos(an) * 100, 395 + Math.sin(an) * 100); g.lineTo(270 + Math.cos(an) * 148, 395 + Math.sin(an) * 148); g.stroke();
        text('20', 270 + Math.cos(an) * 172, 395 + Math.sin(an) * 172, { size: 28, color: C.gold });
      });
      pill('> 20 mmHg', 270, 500, ease(T.f(1, 0.6, 0.75)), { fill: C.red, color: '#fff', size: 30 });
      with_(ease(T.f(1, 0.7, 0.85)), () => text('en reposo, por cateterismo derecho', 270, 552, { size: 22, color: C.ink2, weight: 600, maxW: 420 }));
    });

    // ── Fila A derecha: VD, arteria pulmonar, pulmones y catéter
    const hyp = ease(T.f(6, 0.08, 0.35)), dil = ease(T.f(6, 0.4, 0.7));
    const oc = this._oc || (this._oc = Object.assign(document.createElement('canvas'), { width: MK.W, height: MK.H }));
    const ox = oc.getContext('2d'); ox.setTransform(1, 0, 0, 1, 0, 0); ox.globalAlpha = 1; ox.clearRect(0, 0, MK.W, MK.H);
    MK.use(ox); g = ox;
    (() => {
      organ(shapes.lungs, 915, 330, 0.55, 1);
      g.lineCap = 'round'; g.strokeStyle = '#4A6FD8'; g.lineWidth = 46; g.beginPath(); g.moveTo(700, 380); g.quadraticCurveTo(720, 300, 915, 318); g.stroke();
      g.strokeStyle = '#1B2350'; g.lineWidth = 28; g.beginPath(); g.moveTo(700, 380); g.quadraticCurveTo(720, 300, 915, 318); g.stroke();
      const rx = lerp(70, 98, dil), ry = lerp(88, 104, dil), wall = lerp(16, 32, hyp) * (1 - 0.5 * dil);
      g.fillStyle = C.organ; g.beginPath(); g.ellipse(690, 440, rx + wall, ry + wall, 0, 0, Math.PI * 2); g.fill();
      g.fillStyle = '#2A1530'; g.beginPath(); g.ellipse(690, 440, rx, ry, 0, 0, Math.PI * 2); g.fill();
      text('VD', 705, 452, { size: 36, color: 'rgba(244,241,255,0.7)' });
      // catéter que entra al VD y a la arteria pulmonar
      const cp = ease(T.f(1, 0.1, 0.45));
      if (cp > 0 && T.f(2, 0, 0.2) < 1) {
        g.globalAlpha = 1 - ease(T.f(2, 0, 0.2));
        g.strokeStyle = '#E8ECFF'; g.lineWidth = 5; g.setLineDash([]); g.beginPath();
        const pts = [[600, 585], [640, 520], [690, 470], [705, 400], [740, 335], [820, 312]];
        const n = Math.round(cp * 50);
        for (let i = 0; i <= n; i++) {
          const u = (i / 50) * (pts.length - 1), j = Math.min(pts.length - 2, Math.floor(u)), f = u - j;
          const x = lerp(pts[j][0], pts[j + 1][0], f), y = lerp(pts[j][1], pts[j + 1][1], f);
          if (i) g.lineTo(x, y); else g.moveTo(x, y);
        }
        g.stroke();
      }
    })();
    MK.use(main); g = main;
    with_(dimOf(1, 6) * ease(T.f(1, 0, 0.2)), () => g.drawImage(oc, 0, 0));
    with_(dimOf(6), () => {
      ['Hipertrofia', 'Dilatación', 'Falla del VD'].forEach((s, i) => {
        const pr = ease(T.f(6, 0.1 + i * 0.27, 0.25 + i * 0.27));
        with_(pr, () => { text(s, 925, 455 + i * 44, { size: 26, color: i === 2 ? C.red : C.gold }); });
      });
      if (k === 6) { g.save(); ring(690, 440, 100, t, { color: C.gold }); g.restore(); }
    });

    // ── Tarjetas de los 5 grupos
    const card = (n, x, top, prog, col, icon, title, sub1, sub2, tx) => {
      if (prog <= 0) return;
      with_(prog, () => {
        g.fillStyle = 'rgba(20,26,66,0.88)'; rr(x - 155, top, 310, 280, 26); g.fill(); g.lineWidth = 4; g.strokeStyle = col; g.stroke();
        g.fillStyle = col; g.beginPath(); g.arc(x - 118, top + 38, 24, 0, Math.PI * 2); g.fill();
        text(String(n), x - 118, top + 40, { size: 30, color: '#14182F', shadow: false });
        g.save(); g.translate(x + 10, top + 78); icon(); g.restore();
        text(title, x, top + 150, { size: 29, color: C.ink, maxW: 290 });
        text(sub1, x, top + 190, { size: 21, color: C.ink2, weight: 600, maxW: 290 });
        if (sub2) text(sub2, x, top + 218, { size: 21, color: C.dim, weight: 600, maxW: 290 });
        const tp = ease(T.f(7, 0.1 + n * 0.14, 0.22 + n * 0.14));
        if (tp > 0) with_(tp, () => { g.strokeStyle = 'rgba(98,227,140,0.35)'; g.lineWidth = 2; g.beginPath(); g.moveTo(x - 125, top + 236); g.lineTo(x + 125, top + 236); g.stroke(); text(tx, x, top + 258, { size: 19, color: C.green, weight: 700, maxW: 296 }); });
      });
    };
    // íconos (dibujados alrededor de 0,0)
    const art = () => { const l = lerp(30, 9, ease(T.f(2, 0.3, 0.7))); g.fillStyle = C.organ; g.beginPath(); g.arc(0, 0, 50, 0, Math.PI * 2); g.fill(); g.fillStyle = '#E8A0A8'; g.beginPath(); g.arc(0, 0, l + 8, 0, Math.PI * 2); g.fill(); g.fillStyle = '#2A1530'; g.beginPath(); g.arc(0, 0, l, 0, Math.PI * 2); g.fill(); };
    const heartL = () => { g.save(); g.scale(0.5, 0.5); shapes.heart(); g.restore(); g.save(); arrow(-6, -30, -60, -58, 1, { color: C.gold, width: 5 }); g.restore(); };
    const lung = () => { g.save(); g.scale(0.42, 0.42); shapes.lungs(); g.restore(); g.fillStyle = 'rgba(70,74,110,0.8)'; [[-30, 10], [32, 22], [-38, 34], [36, -4]].forEach(([a, b]) => { g.beginPath(); g.arc(a, b, 7, 0, Math.PI * 2); g.fill(); }); };
    const clot = () => { g.fillStyle = '#4A6FD8'; rr(-70, -22, 140, 44, 22); g.fill(); g.fillStyle = '#1B2350'; rr(-64, -13, 128, 26, 13); g.fill(); g.fillStyle = '#9E1F35'; g.beginPath(); g.ellipse(4, 0, 30, 13, 0, 0, Math.PI * 2); g.fill(); g.strokeStyle = 'rgba(255,200,210,0.6)'; g.lineWidth = 2; g.beginPath(); g.moveTo(-18, -8); g.lineTo(20, 8); g.moveTo(-10, 8); g.lineTo(24, -6); g.stroke(); };
    const multi = () => { [[-40, 0, C.purple], [0, -18, C.gold], [40, 0, C.cyan], [0, 22, C.pink]].forEach(([a, b, c]) => { g.fillStyle = c; g.beginPath(); g.arc(a, b, 16, 0, Math.PI * 2); g.fill(); }); };
    const R1 = 590, R2 = 900;
    with_(dimOf(2), () => card(1, 200, R1, ease(T.f(2, 0, 0.18)), C.purple, art, 'HAP', 'endotelina ↑ · NO y PGI₂ ↓', 'esclerosis sistémica', 'vasodilatadores pulmonares'));
    with_(dimOf(3), () => card(2, 540, R1, ease(T.f(3, 0, 0.18)), C.red, heartL, 'Corazón izquierdo', 'la causa más común', 'presión de AI hacia atrás', 'tratar el corazón'));
    with_(dimOf(4), () => card(3, 880, R1, ease(T.f(4, 0, 0.18)), C.cyan, lung, 'Pulmón e hipoxia', 'EPOC, intersticial, apnea', 'vasoconstricción hipóxica', 'O₂ y tratar el pulmón'));
    with_(dimOf(5), () => card(4, 370, R2, ease(T.f(5, 0, 0.15)), C.blue, clot, 'Coágulos crónicos', 'HPTEC, tras un TEP', 'gammagrama V/Q', 'anticoagular, endarterectomía'));
    with_(dimOf(5), () => card(5, 710, R2, ease(T.f(5, 0.6, 0.75)), C.gold, multi, 'Multifactorial', 'sarcoidosis, hemólisis', 'ERC en diálisis', 'tratar la causa'));

    // ── Trampa
    if (k === 8) {
      const a = ease(T.f(8, 0, 0.15));
      with_(a, () => {
        bg(t); g.fillStyle = 'rgba(11,14,42,0.35)'; g.fillRect(0, 0, MK.W, MK.H);
        headline(heads[8], t - T.s(8), C.gold);
        text('HP por IC izquierda (grupo 2)', 540, 420, { size: 50, color: C.ink, maxW: 960 });
        text('+ sildenafil', 540, 520, { size: 76, color: C.red });
        text('No está indicado: edema pulmonar', 540, 610, { size: 38, color: C.ink2, weight: 600, maxW: 900 });
        with_(ease(T.f(8, 0.45, 0.6)), () => {
          text('Grupo 2: trata el corazón izquierdo', 540, 800, { size: 52, color: C.green, maxW: 960 });
          text('Los vasodilatadores de HAP son para el grupo 1', 540, 880, { size: 34, color: C.ink2, weight: 600, maxW: 880 });
        });
      });
    }
  }
};
