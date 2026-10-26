// Hemólisis en 1 minuto (tema hemoliticas). Mismo formato que hta.js.
// Dibujos propios: eritrocito (normal, roto y esferocito), bazo con macrófago, gota de orina, IgG y aglutinación.
(() => {
  const { C, clamp, lerp, ease, pop, with_, rr } = MK;
  function rbc(x, y, r, a = 1, sphere = 0) {
    if (a <= 0) return; const g = MK.g;
    g.save(); g.globalAlpha *= clamp(a); g.translate(x, y);
    if (sphere) { g.fillStyle = '#C8303F'; g.beginPath(); g.arc(0, 0, r * 0.8, 0, 7); g.fill(); g.fillStyle = 'rgba(255,255,255,0.22)'; g.beginPath(); g.arc(-r * 0.25, -r * 0.25, r * 0.22, 0, 7); g.fill(); }
    else { g.fillStyle = C.blood; g.beginPath(); g.ellipse(0, 0, r, r * 0.8, 0, 0, 7); g.fill(); g.fillStyle = 'rgba(0,0,0,0.2)'; g.beginPath(); g.ellipse(0, 0, r * 0.45, r * 0.36, 0, 0, 7); g.fill(); }
    g.restore();
  }
  // Eritrocito que estalla: u 0→1 (fragmentos y hemoglobina libre)
  function burst(x, y, r, u, a = 1) {
    const g = MK.g; if (a <= 0) return;
    if (u < 0.3) { rbc(x, y, r * (1 + u), a); return; }
    const v = (u - 0.3) / 0.7;
    g.save(); g.globalAlpha *= clamp(a * (1 - v * 0.6)); g.translate(x, y);
    g.fillStyle = C.blood;
    for (let i = 0; i < 5; i++) { const th = i * 1.26, d = r * 0.4 + v * r * 1.2; g.beginPath(); g.arc(Math.cos(th) * d, Math.sin(th) * d, r * 0.3 * (1 - v * 0.4), th, th + 2.4); g.fill(); }
    g.fillStyle = '#FF8FA3'; for (let i = 0; i < 7; i++) { const th = i * 0.9 + 0.4, d = v * r * 2; g.beginPath(); g.arc(Math.cos(th) * d, Math.sin(th) * d, 5, 0, 7); g.fill(); }
    g.restore();
  }
  function spleen(x, y, s, a, t, eat) {
    if (a <= 0) return; const g = MK.g;
    g.save(); g.translate(x, y); const k = s * lerp(0.6, 1, pop(a)); g.scale(k, k); g.globalAlpha *= clamp(a * 2);
    g.fillStyle = '#8E3B5A'; g.beginPath(); g.moveTo(-120, -30);
    g.bezierCurveTo(-110, -95, 60, -110, 120, -50); g.bezierCurveTo(150, -10, 130, 60, 80, 75);
    g.bezierCurveTo(30, 90, 10, 50, -20, 70); g.bezierCurveTo(-80, 100, -135, 40, -120, -30); g.fill();
    g.fillStyle = 'rgba(255,255,255,0.12)'; g.beginPath(); g.ellipse(-20, -55, 70, 16, -0.1, 0, 7); g.fill();
    // macrófago dentro del bazo
    g.fillStyle = '#5A8FD0'; g.beginPath();
    for (let i = 0; i <= 48; i++) { const th = (i / 48) * Math.PI * 2, rad = 46 * (1 + 0.12 * Math.sin(5 * th + t * 1.4)); const px = 10 + Math.cos(th) * rad, py = Math.sin(th) * rad * 0.8; if (i) g.lineTo(px, py); else g.moveTo(px, py); }
    g.closePath(); g.fill(); g.fillStyle = '#2B3F7A'; g.beginPath(); g.ellipse(28, 6, 15, 11, 0.5, 0, 7); g.fill();
    g.restore();
    // eritrocito que entra al macrófago
    if (eat > 0) { const u = eat % 1; rbc(lerp(x - 120 * s, x + 2, u), y - 4, 16, u < 0.75 ? 1 : (1 - u) * 4, 1); }
  }
  function drop(x, y, s, a, col) {
    if (a <= 0) return; const g = MK.g;
    g.save(); g.translate(x, y); g.scale(s * lerp(0.6, 1, pop(a)), s * lerp(0.6, 1, pop(a))); g.globalAlpha *= clamp(a * 2);
    g.fillStyle = col; g.beginPath(); g.moveTo(0, -55); g.bezierCurveTo(10, -30, 40, -5, 40, 18); g.bezierCurveTo(40, 45, 20, 58, 0, 58); g.bezierCurveTo(-20, 58, -40, 45, -40, 18); g.bezierCurveTo(-40, -5, -10, -30, 0, -55); g.fill();
    g.fillStyle = 'rgba(255,255,255,0.25)'; g.beginPath(); g.ellipse(-15, 15, 8, 16, 0.3, 0, 7); g.fill();
    g.restore();
  }
  // Anticuerpo IgG (Y)
  function igg(x, y, ang, a, col = C.gold) {
    if (a <= 0) return; const g = MK.g;
    g.save(); g.globalAlpha *= clamp(a); g.translate(x, y); g.rotate(ang); g.strokeStyle = col; g.lineWidth = 5; g.lineCap = 'round';
    g.beginPath(); g.moveTo(0, 0); g.lineTo(0, -16); g.lineTo(-10, -28); g.moveTo(0, -16); g.lineTo(10, -28); g.stroke(); g.restore();
  }

  window.CLIP = {
    topic: 'hemoliticas', title: 'Hemólisis en\u00a01\u00a0minuto', sub: '¿Se rompe en el vaso o en el bazo?', color: '#FF9B3D',
    scenes: [
      { say: 'Las anemias hemolíticas, en un minuto.', min: 3.5 },
      { say: 'Cuando el eritrocito se rompe antes de tiempo, suben los reticulocitos, la LDH y la bilirrubina indirecta, y baja la haptoglobina.' },
      { say: 'Si se rompe dentro del vaso, la hemoglobina libre agota la haptoglobina y se filtra en el riñón: orina oscura, hemoglobinuria.' },
      { say: 'Si se rompe fuera del vaso, los macrófagos del bazo se lo comen. El hem se vuelve bilirrubina indirecta: ictericia, y el bazo crece.' },
      { say: 'En el vaso: G seis P D, microangiopatías como el P T T, y H P N. En el bazo: esferocitosis y anemia autoinmune caliente.' },
      { say: 'Para saber si es inmune, pide el Coombs directo: si el eritrocito trae anticuerpos pegados, el reactivo los une y se aglutinan.' },
      { say: 'En resumen: en el vaso, orina oscura; en el bazo, ictericia y bazo grande. Y el Coombs te dice si es inmune.' },
      { say: 'Perla: esferocitos con Coombs negativo, piensa en esferocitosis hereditaria. Esferocitos con Coombs positivo, anemia autoinmune caliente.', min: 7 }
    ],
    draw(t, T) {
      const { text, pill, arrow, ring, organ, shapes, titleCard, headline, bg } = MK;
      const g = MK.g;
      bg(t);
      const k = T.cur, dimFor = (i) => (k >= 6 ? 1 : k === i ? 1 : 0.42);
      if (k === 0) { titleCard(t - T.s(0), this.title, this.sub, this.color); return; }
      const heads = ['', 'Huellas de la hemólisis', 'Intravascular: se rompe en el vaso', 'Extravascular: el bazo se lo come', 'Ejemplos de cada una', 'Coombs directo: ¿es inmune?', 'Resumen: vaso contra bazo', 'Perla para el examen'];
      headline(heads[k], t - T.s(k), this.color);

      // 1 · Laboratorio de hemólisis
      with_(dimFor(1), () => {
        const L = [['Reticulocitos ↑', 290, 215, C.green], ['LDH ↑', 790, 215, C.orange], ['Bilirrubina ind. ↑', 290, 290, C.gold], ['Haptoglobina ↓', 790, 290, C.cyan]];
        if (k === 1) { burst(540, 680, 80, ((t - T.s(1)) / 2.6) % 1, ease(T.f(1, 0, 0.15))); with_(ease(T.f(1, 0, 0.2)), () => text('Vive ~120 días; aquí se rompe antes', 540, 860, { size: 30, color: C.dim, weight: 600 })); }
        L.forEach(([s, x, y, col], i) => pill(s, x, y, ease(T.f(1, 0.25 + i * 0.15, 0.4 + i * 0.15)), { fill: col, size: 28 }));
      });

      // separador de columnas
      with_(ease(T.f(2, 0, 0.2)) * (k >= 3 ? 1 : 0.6), () => { g.strokeStyle = 'rgba(201,206,255,0.18)'; g.lineWidth = 3; g.setLineDash([10, 12]); g.beginPath(); g.moveTo(540, 345); g.lineTo(540, 960); g.stroke(); g.setLineDash([]); });

      // 2 · Intravascular
      with_(dimFor(2), () => {
        const a = ease(T.f(2, 0, 0.2));
        with_(a, () => {
          text('Intravascular', 290, 375, { size: 34, color: C.pink });
          g.fillStyle = '#3A1220'; rr(70, 430, 440, 80, 40); g.fill(); g.fillStyle = C.organ; g.fillRect(90, 422, 400, 8); g.fillRect(90, 510, 400, 8);
          for (let i = 0; i < 4; i++) { const u = (t * 0.12 + i / 4) % 1, x = lerp(100, 480, u); if (Math.abs(x - 290) > 40) rbc(x, 470, 16); }
        });
        const bu = (t - T.s(2)) / 2.2; // estallido en bucle
        if (t >= T.s(2)) burst(290, 470, 20, k === 2 ? (bu % 1) : 1, a);
        if (k === 2) ring(290, 470, 50, t, { color: C.pink });
        arrow(290, 530, 290, 600, T.f(2, 0.3, 0.5), { color: C.pink, width: 6 });
        organ(shapes.kidney, 300, 690, 0.62, ease(T.f(2, 0.35, 0.55)));
        arrow(290, 770, 290, 800, T.f(2, 0.55, 0.7), { color: C.pink, width: 6 });
        drop(290, 860, 0.8, ease(T.f(2, 0.6, 0.8)), '#5C2A12');
        with_(ease(T.f(2, 0.7, 0.9)), () => text('Orina oscura', 290, 935, { size: 30, color: C.ink }));
      });

      // 3 · Extravascular
      with_(dimFor(3), () => {
        const a = ease(T.f(3, 0, 0.2)), grow = k >= 3 ? ease(T.f(3, 0.6, 0.9)) : 0;
        with_(a, () => text('Extravascular', 790, 375, { size: 34, color: C.purple }));
        spleen(790, 520, lerp(0.95, 1.15, grow), ease(T.f(3, 0.05, 0.25)), t, t >= T.s(3) + T.d(3) * 0.2 ? (t - T.s(3)) * 0.45 : 0);
        with_(ease(T.f(3, 0.15, 0.3)), () => text('Bazo + macrófago', 790, 655, { size: 26, color: C.dim }));
        arrow(790, 678, 790, 708, T.f(3, 0.35, 0.5), { color: C.gold, width: 6 });
        pill('Bilirrubina indirecta', 790, 745, ease(T.f(3, 0.4, 0.6)), { fill: C.gold, size: 26 });
        pill('Ictericia', 700, 835, ease(T.f(3, 0.55, 0.75)), { fill: '#F6E27A', size: 28 });
        pill('Bazo grande', 900, 835, ease(T.f(3, 0.7, 0.9)), { fill: C.purple, color: '#fff', size: 26 });
      });

      // 4 · Ejemplos
      with_(dimFor(4), () => {
        const ex = [['G6PD', 120, C.pink], ['PTT', 250, C.pink], ['HPN', 365, C.pink]];
        ex.forEach(([s, x, col], i) => pill(s, x, 1010, ease(T.f(4, 0.05 + i * 0.12, 0.25 + i * 0.12)), { fill: col, size: 28 }));
        with_(ease(T.f(4, 0.05, 0.4)), () => text('microangiopatías', 250, 1065, { size: 22, color: C.dim, weight: 600 }));
        pill('Esferocitosis', 685, 1010, ease(T.f(4, 0.55, 0.75)), { fill: C.purple, color: '#fff', size: 26 });
        pill('AHAI caliente', 905, 1010, ease(T.f(4, 0.7, 0.9)), { fill: C.purple, color: '#fff', size: 26 });
        with_(ease(T.f(4, 0.7, 0.9)), () => text('autoinmune, IgG', 905, 1065, { size: 22, color: C.dim, weight: 600 }));
      });

      // 5 · Coombs directo
      with_(dimFor(5), () => {
        const a = ease(T.f(5, 0, 0.2));
        with_(a, () => { g.fillStyle = 'rgba(20,26,66,0.85)'; rr(50, 1105, 980, 200, 28); g.fill(); g.lineWidth = 3; g.strokeStyle = 'rgba(201,206,255,0.25)'; g.stroke(); });
        // eritrocitos con IgG pegada
        for (let i = 0; i < 2; i++) {
          const x = 140 + i * 150, y = 1205;
          rbc(x, y, 34, a);
          for (let j = 0; j < 4; j++) { const th = -Math.PI / 2 + (j - 1.5) * 0.7; igg(x + Math.cos(th) * 30, y + Math.sin(th) * 26, th + Math.PI / 2, ease(T.f(5, 0.15, 0.35))); }
        }
        with_(ease(T.f(5, 0.15, 0.35)), () => text('Eritrocito + IgG', 215, 1275, { size: 24, color: C.ink2, weight: 600 }));
        arrow(360, 1205, 620, 1205, T.f(5, 0.35, 0.6), { color: C.ink2, width: 6 });
        with_(ease(T.f(5, 0.35, 0.55)), () => text('+ antiglobulina', 482, 1165, { size: 26, color: C.cyan }));
        // aglutinación
        const ag = ease(T.f(5, 0.55, 0.85));
        if (ag > 0) {
          const P = [[760, 1185], [810, 1215], [860, 1180], [790, 1245], [845, 1255], [895, 1225]];
          g.strokeStyle = C.cyan; g.lineWidth = 4;
          with_(ag, () => { for (let i = 1; i < P.length; i++) { g.beginPath(); g.moveTo(P[i - 1][0], P[i - 1][1]); g.lineTo(P[i][0], P[i][1]); g.stroke(); } });
          P.forEach(([x, y], i) => rbc(lerp(x + (i - 2.5) * 30, x, ag), y, 24, ag));
        }
        with_(ease(T.f(5, 0.75, 0.95)), () => text('Se aglutinan = Coombs +', 820, 1135, { size: 26, color: C.cyan }));
      });

      // 6 · Resumen: marcos sobre cada columna
      if (k === 6) {
        const a = ease(T.f(6, 0.05, 0.3));
        with_(a, () => {
          g.lineWidth = 4; g.strokeStyle = C.pink; rr(55, 345, 470, 625, 28); g.stroke();
          g.strokeStyle = C.purple; rr(555, 345, 470, 625, 28); g.stroke();
        });
      }

      // 7 · Perla
      if (k === 7) {
        const a = ease(T.f(7, 0, 0.15));
        with_(a, () => {
          g.fillStyle = 'rgba(11,14,42,0.88)'; g.fillRect(0, 0, MK.W, MK.H);
          headline(heads[7], t - T.s(7), C.gold);
          rbc(540, 330, 46, 1, 1);
          text('Esferocitos + Coombs −', 540, 470, { size: 62, color: C.gold });
          text('= esferocitosis hereditaria', 540, 550, { size: 38, color: C.ink2, weight: 600 });
          with_(ease(T.f(7, 0.45, 0.6)), () => {
            text('Esferocitos + Coombs +', 540, 790, { size: 62, color: C.red });
            text('= anemia hemolítica autoinmune caliente (IgG)', 540, 870, { size: 38, color: C.ink2, weight: 600, maxW: 900 });
          });
        });
      }
    }
  };
})();
