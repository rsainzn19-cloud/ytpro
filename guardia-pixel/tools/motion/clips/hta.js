// SRAA en 1 minuto (tema hta). Cada escena tiene su narración (say); draw(t, T) dibuja el cuadro del segundo t.
// T.s(i)/T.e(i)/T.d(i): inicio, fin y duración de la escena i; T.f(i, a, b): avance 0→1 entre las fracciones a y b de la escena i.
window.CLIP = {
  topic: 'hta', title: 'SRAA en 1 minuto', sub: 'Del riñón a la presión arterial, y dónde actúa cada fármaco', color: '#4DB8FF',
  scenes: [
    { say: 'El sistema renina angiotensina aldosterona, en un minuto.', min: 3.5 },
    { say: 'Cuando baja la perfusión del riñón, el aparato yuxtaglomerular libera renina.' },
    { say: 'La renina corta al angiotensinógeno que fabrica el hígado, y se forma angiotensina uno.' },
    { say: 'En el pulmón, la enzima convertidora, la ECA, la transforma en angiotensina dos.' },
    { say: 'La angiotensina dos actúa en su receptor A T uno: contrae las arteriolas y hace que la suprarrenal libere aldosterona.' },
    { say: 'En el túbulo colector, la aldosterona retiene sodio y agua, y elimina potasio. Resultado: sube la presión.' },
    { say: 'Ahí actúan los antihipertensivos: los IECA bloquean la ECA, los ARA dos bloquean el receptor A T uno, y la espironolactona bloquea el receptor de aldosterona.' },
    { say: 'Perla: los IECA dan tos porque acumulan bradicinina. Y nunca combines un IECA con un ARA dos.', min: 7 }
  ],
  draw(t, T) {
    const { C, p, ease, inOut, text, pill, arrow, flow, ring, block, gauge, organ, shapes, vessel, duct, titleCard, headline, bg, with_, lerp } = MK;
    bg(t);
    const k = T.cur, on = (i) => (t >= T.s(i) ? 1 : 0), dimFor = (i) => (k >= 6 ? 1 : k === i ? 1 : 0.42);
    if (k === 0) { titleCard(t - T.s(0), this.title, this.sub, this.color); return; }
    const heads = ['', 'Baja la perfusión → renina', 'Angiotensinógeno → angiotensina I', 'La ECA del pulmón → angiotensina II', 'Receptor AT1: vasoconstricción y aldosterona', 'Aldosterona: retiene Na y agua, sale K', 'Dónde actúan los fármacos', 'Perla para el examen'];
    headline(heads[k], t - T.s(k), this.color);

    // 1 · Riñón y renina
    with_(dimFor(1), () => {
      organ(shapes.kidney, 230, 920, 0.95, ease(T.f(1, 0, 0.25)));
      flow([[60, 905], [130, 910]], t, { n: 4, speed: k === 1 ? 0.12 : 0.3, r: 8 });
      if (k === 1) ring(205, 880, 70, t, { color: C.gold });
      const rp = ease(T.f(1, 0.45, 0.9));
      pill('Renina', lerp(250, 300, rp), lerp(860, 660, rp), rp, { fill: C.cyan });
    });
    // 2 · Hígado, angiotensinógeno → angiotensina I
    with_(dimFor(2), () => {
      organ(shapes.liver, 250, 400, 0.95, ease(T.f(2, 0, 0.2)));
      const ag = ease(T.f(2, 0.15, 0.4)), cut = ease(T.f(2, 0.5, 0.8));
      if (cut < 1) pill('Angiotensinógeno', 300, 530, ag * (1 - cut), { size: 30 });
      arrow(300, 640, 395, 548, T.f(2, 0.35, 0.55), { color: C.cyan, width: 6, cx: 330, cy: 580 });
      pill('Angiotensina I', 505, 530, cut, { fill: C.pink });
    });
    // 3 · Pulmón, ECA → angiotensina II
    with_(dimFor(3), () => {
      organ(shapes.lungs, 830, 400, 0.85, ease(T.f(3, 0, 0.2)));
      arrow(630, 505, 735, 440, T.f(3, 0.15, 0.45), { color: C.pink, width: 7 });
      pill('ECA', 830, 330, ease(T.f(3, 0.3, 0.55)), { fill: C.purple, color: '#fff', size: 28 });
      if (k === 3) ring(830, 330, 60, t, { color: C.purple });
      pill('Angiotensina II', 830, 590, ease(T.f(3, 0.6, 0.9)), { fill: C.red, color: '#fff' });
    });
    // 4 · AT1: arteriola que se contrae y suprarrenal que libera aldosterona
    with_(dimFor(4), () => {
      const c4 = on(4);
      vessel(800, 820, 360, ease(T.f(4, 0, 0.25)), inOut(T.f(4, 0.25, 0.6)) * (k >= 6 ? lerp(1, 0.25, ease(T.f(6, 0.35, 0.6))) : 1), t);
      arrow(830, 640, 820, 750, T.f(4, 0.1, 0.3) * c4, { color: C.red, width: 7 });
      pill('AT1', 930, 760, ease(T.f(4, 0.15, 0.35)), { fill: C.orange, size: 26 });
      organ(shapes.adrenal, 250, 815, 0.9, ease(T.f(4, 0.45, 0.65)));
      arrow(740, 600, 330, 770, T.f(4, 0.45, 0.7) * c4, { color: C.red, width: 7, cx: 480, cy: 640 });
      pill('Aldosterona', 330, 1060, ease(T.f(4, 0.7, 0.95)), { fill: C.gold });
    });
    // 5 · Túbulo colector y presión
    with_(dimFor(5), () => {
      duct(560, 1130, 240, ease(T.f(5, 0, 0.2)), t, k >= 5 ? ease(T.f(5, 0.2, 0.4)) * (k >= 6 ? lerp(1, 0.2, ease(T.f(6, 0.7, 0.95))) : 1) : 0);
      arrow(420, 1080, 500, 1100, T.f(5, 0.1, 0.3), { color: C.gold, width: 6 });
      if (k >= 5) { text('Na⁺ y agua →', 650, 970, { size: 26, color: C.gold }); text('← K⁺', 650, 1004, { size: 26, color: C.purple }); }
      let bp = lerp(0.35, 0.82, inOut(T.f(5, 0.5, 0.95)));
      if (k >= 6) bp = lerp(0.82, 0.45, inOut(T.f(6, 0.4, 1)));
      if (t >= T.s(5)) with_(ease(T.f(5, 0.4, 0.55)), () => gauge(930, 1170, bp, 'Presión'));
    });
    // 6 · Fármacos
    if (k >= 6) {
      block('IECA', 700, 450, ease(T.f(6, 0.25, 0.4)));
      block('ARA II', 640, 680, ease(T.f(6, 0.5, 0.65)));
      block('Espironolactona', 450, 1120, ease(T.f(6, 0.75, 0.9)));
    }
    // 7 · Perla
    if (k === 7) {
      const a = ease(T.f(7, 0, 0.15));
      with_(a, () => {
        MK.g.fillStyle = 'rgba(11,14,42,0.88)'; MK.g.fillRect(0, 0, MK.W, MK.H);
        headline(heads[7], t - T.s(7), C.gold);
        text('IECA → tos', 540, 470, { size: 70, color: C.gold });
        text('(se acumula bradicinina; si hay tos, cambia a ARA II)', 540, 560, { size: 34, color: C.ink2, weight: 600 });
        with_(ease(T.f(7, 0.45, 0.6)), () => {
          text('IECA + ARA II', 540, 800, { size: 70, color: C.red });
          text('Nunca juntos: más hiperkalemia y daño renal, sin beneficio', 540, 890, { size: 34, color: C.ink2, weight: 600, maxW: 860 });
        });
      });
    }
  }
};
