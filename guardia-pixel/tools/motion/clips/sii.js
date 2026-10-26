// Intestino irritable en 1 minuto (tema sii). Cada escena tiene su narración (say); draw(t, T) dibuja el cuadro del segundo t.
// Arriba izq.: eje intestino-cerebro · arriba der.: Roma IV · centro: escala de Bristol · abajo: con alarma / sin alarma.
window.CLIP = {
  topic: 'sii', title: 'Intestino irritable en 1 minuto', sub: 'Eje intestino-cerebro, Roma IV y los datos de alarma', color: '#62E38C',
  scenes: [
    { say: 'Intestino irritable, en un minuto.', min: 3.5 },
    { say: 'Es un trastorno del eje intestino cerebro, sin lesión visible: cambian la motilidad, la microbiota y las señales.' },
    { say: 'Clave: hipersensibilidad visceral. Con el mismo gas, el intestino manda más dolor. El estrés lo empeora.' },
    { say: 'Roma cuatro: dolor abdominal un día por semana, en los últimos tres meses, con inicio hace seis o más.' },
    { say: 'Más dos de tres: relación con la defecación, con la frecuencia o con la forma de las heces. La distensión no cuenta.' },
    { say: 'Bristol define el subtipo: más de un cuarto duras, estreñimiento; líquidas, diarrea; de ambas, mixto.' },
    { say: 'Alarma: cuarenta y cinco o más, sangrado o anemia, baja de peso, síntomas nocturnos o familiar con cáncer: colonoscopia.' },
    { say: 'Sin alarma, diagnóstico positivo. Con diarrea o mixto: serología de celiaca, calprotectina fecal y proteína C reactiva.' },
    { say: 'Mujer de cincuenta y ocho, colon irritable nuevo y anemia ferropénica. No es intestino irritable: colonoscopia.', min: 7 }
  ],
  draw(t, T) {
    const { C, ease, pop, lerp, clamp, text, pill, arrow, flow, ring, titleCard, headline, bg, with_, rr } = MK;
    const g = MK.g;
    bg(t);
    const k = T.cur;
    if (k === 0) { titleCard(t - T.s(0), this.title, this.sub, this.color); return; }
    const heads = ['', 'Eje intestino-cerebro', 'Hipersensibilidad visceral', 'Roma IV: 1 día · 3 meses · 6 meses', '+ 2 de 3 criterios', 'Subtipo: escala de Bristol', 'Datos de alarma → colonoscopia', 'Sin alarma: diagnóstico positivo', 'Trampa del examen'];
    headline(heads[k], t - T.s(k), this.color);
    const all = k >= 7;
    const dimFor = (...ii) => (all || ii.includes(k) ? 1 : 0.42);
    const font = (px, w = 700) => `${w} ${px}px "Inter Display", Inter, "DejaVu Sans", sans-serif`;
    function chip(label, x, y, prog, col, size = 25) {
      if (prog <= 0) return;
      g.save(); g.translate(x, y); g.globalAlpha *= clamp(prog * 2); const s = lerp(0.85, 1, ease(prog)); g.scale(s, s);
      g.font = font(size); const w = g.measureText(label).width + 34, h = size * 1.75;
      rr(-w / 2, -h / 2, w, h, h / 2); g.fillStyle = 'rgba(20,26,66,0.92)'; g.fill(); g.lineWidth = 3; g.strokeStyle = col; g.stroke();
      g.fillStyle = C.ink; g.textAlign = 'center'; g.textBaseline = 'middle'; g.fillText(label, 0, 2); g.restore();
    }
    // ── Cerebro
    function brain(x, y, s, a, hot) {
      if (a <= 0) return;
      g.save(); g.translate(x, y); const kk = s * lerp(0.6, 1, pop(a)); g.scale(kk, kk); g.globalAlpha *= clamp(a * 2);
      g.fillStyle = '#D07A9C'; rr(-14, 50, 28, 70, 12); g.fill();
      g.fillStyle = hot > 0 ? `rgb(${Math.round(lerp(229, 255, hot))},${Math.round(lerp(143, 110, hot))},${Math.round(lerp(176, 130, hot))})` : '#E58FB0';
      g.beginPath(); g.ellipse(0, 0, 120, 82, 0, 0, 7);
      [[-72, -42, 46], [-12, -60, 48], [52, -48, 46], [94, 2, 38], [-98, 8, 36], [-42, 38, 44], [40, 40, 44]].forEach(([bx, by, r]) => { g.moveTo(bx + r, by); g.arc(bx, by, r, 0, 7); });
      g.fill('nonzero');
      g.strokeStyle = '#B85C84'; g.lineWidth = 6; g.lineCap = 'round';
      g.beginPath(); g.moveTo(0, -100); g.bezierCurveTo(-10, -40, 10, 20, 0, 78); g.stroke();
      [[-80, -40, -40, -20], [-100, 20, -60, 30], [30, -60, 70, -30], [60, 10, 100, 30], [-50, -70, -20, -50], [30, 40, 60, 60]].forEach(([x1, y1, x2, y2]) => { g.beginPath(); g.moveTo(x1, y1); g.quadraticCurveTo((x1 + x2) / 2, y1 - 22, x2, y2); g.stroke(); });
      g.restore();
    }
    // ── Colon (marco) con haustras
    const colonPath = () => { g.beginPath(); g.moveTo(150, 728); g.lineTo(150, 590); g.quadraticCurveTo(150, 550, 190, 550); g.lineTo(370, 550); g.quadraticCurveTo(410, 550, 410, 590); g.lineTo(410, 668); g.bezierCurveTo(410, 718, 330, 690, 322, 738); };
    function colon(a) {
      if (a <= 0) return;
      with_(clamp(a * 2), () => {
        g.lineJoin = 'round'; g.lineCap = 'round';
        colonPath(); g.lineWidth = 50; g.strokeStyle = '#C96A6A'; g.stroke();
        colonPath(); g.lineCap = 'butt'; g.setLineDash([5, 30]); g.lineWidth = 50; g.strokeStyle = 'rgba(90,20,40,0.45)'; g.stroke(); g.setLineDash([]);
        colonPath(); g.lineCap = 'round'; g.lineWidth = 10; g.strokeStyle = 'rgba(255,255,255,0.12)'; g.stroke();
      });
    }

    // ══ 1–2 · Eje intestino-cerebro
    const hot = ease(T.f(2, 0.25, 0.55)) * (k >= 2 ? 1 : 0);
    with_(dimFor(1, 2), () => {
      const a = ease(T.f(1, 0, 0.2));
      brain(280, 290, 0.8, a, hot);
      colon(ease(T.f(1, 0.1, 0.3)));
      const ln = ease(T.f(1, 0.3, 0.5));
      if (ln > 0) with_(ln, () => {
        g.strokeStyle = 'rgba(201,206,255,0.35)'; g.lineWidth = 4;
        g.beginPath(); g.moveTo(262, 395); g.lineTo(262, 522); g.moveTo(298, 395); g.lineTo(298, 522); g.stroke();
        const ga = g.globalAlpha; flow([[262, 395], [262, 522]], t, { alpha: ga, n: 4, speed: 0.4, color: C.purple, r: 7 });
        flow([[298, 522], [298, 395]], t, { alpha: ga, n: hot > 0 ? 9 : 4, speed: lerp(0.4, 0.9, hot), color: hot > 0.5 ? C.red : C.cyan, r: 7 });
      });
      // microbiota
      const mb = ease(T.f(1, 0.6, 0.8));
      if (mb > 0) with_(mb, () => {
        for (let i = 0; i < 9; i++) { const u = (i / 9 + t * 0.02) % 1, pts = [[150, 700], [150, 560], [400, 560], [410, 680]]; const seg = Math.min(2, Math.floor(u * 3)), f = u * 3 - seg; const x = lerp(pts[seg][0], pts[seg + 1][0], f), y = lerp(pts[seg][1], pts[seg + 1][1], f);
          g.fillStyle = C.green; g.beginPath(); g.ellipse(x + Math.sin(i * 3) * 8, y + Math.cos(i * 2) * 8, 7, 4, i, 0, 7); g.fill(); }
        text('Microbiota', 280, 610, { size: 26, color: C.green });
      });
      with_(ease(T.f(1, 0.4, 0.6)), () => text('Señales en 2 vías', 130, 458, { size: 24, color: C.ink2, weight: 600, maxW: 160 }));
    });
    with_(dimFor(2), () => {
      const gs = ease(T.f(2, 0.1, 0.3));
      if (gs > 0) with_(gs, () => {
        [[200, 553, 14], [250, 548, 11], [305, 555, 15], [360, 550, 12], [408, 610, 13], [150, 640, 12]].forEach(([x, y, r], i) => {
          const rr_ = r * (1 + 0.12 * Math.sin(t * 3 + i));
          g.fillStyle = 'rgba(220,230,255,0.75)'; g.beginPath(); g.arc(x, y, rr_, 0, 7); g.fill();
          g.strokeStyle = 'rgba(255,255,255,0.9)'; g.lineWidth = 2; g.stroke();
        });
        text('Gas normal', 280, 668, { size: 24, color: C.ink2, weight: 600 });
      });
      if (k === 2 && hot > 0.3) ring(280, 290, 110, t, { color: C.red });
      pill('Dolor', 105, 290, ease(T.f(2, 0.4, 0.55)), { fill: C.red, color: '#fff', size: 28 });
      with_(ease(T.f(2, 0.2, 0.4)), () => text('Hipersensibilidad visceral', 430, 458, { size: 26, color: C.red, maxW: 200 }));
      pill('Estrés', 450, 215, ease(T.f(2, 0.75, 0.88)), { fill: C.orange, size: 26 });
      arrow(445, 245, 395, 268, T.f(2, 0.78, 0.9), { color: C.orange, width: 5 });
    });

    // ══ 3–4 · Roma IV
    with_(dimFor(3), () => {
      with_(ease(T.f(3, 0, 0.15)), () => text('Roma IV', 800, 205, { size: 38, color: this.color }));
      [['1', 'día por semana'], ['3', 'últimos meses'], ['6', 'meses de inicio']].forEach(([n, cap], i) => {
        const pr = ease(T.f(3, 0.2 + i * 0.22, 0.35 + i * 0.22)); if (pr <= 0) return;
        const x = 655 + i * 145;
        g.save(); g.translate(x, 290); const s = pop(pr); g.scale(s, s); g.globalAlpha *= clamp(pr * 2);
        g.beginPath(); g.arc(0, 0, 56, 0, 7); g.fillStyle = 'rgba(98,227,140,0.16)'; g.fill(); g.lineWidth = 5; g.strokeStyle = this.color; g.stroke();
        g.restore();
        with_(clamp(pr * 2), () => { text(n, x, 292, { size: 64, color: C.ink }); text(cap, x, 387, { size: 25, color: C.ink2, weight: 600, maxW: 135 }); });
      });
    });
    with_(dimFor(4), () => {
      with_(ease(T.f(4, 0, 0.15)), () => text('+ 2 de 3', 800, 462, { size: 36, color: C.gold }));
      ['Defecación', 'Frecuencia', 'Forma'].forEach((l, i) => pill(l, 800, 530 + i * 64, ease(T.f(4, 0.12 + i * 0.15, 0.27 + i * 0.15)), { fill: this.color, size: 27 }));
      const ds = ease(T.f(4, 0.7, 0.85));
      if (ds > 0) with_(ds, () => {
        text('Distensión: no es criterio', 800, 735, { size: 26, color: C.pink, weight: 600 });
      });
    });

    // ══ 5 · Escala de Bristol
    function stool(type, x, y) {
      const br = '#8B5A2B';
      g.fillStyle = br; g.strokeStyle = br; g.lineCap = 'round';
      if (type === 1) [[-24, -8], [0, -12], [22, -6], [-12, 12], [14, 12]].forEach(([dx, dy]) => { g.beginPath(); g.arc(x + dx, y + dy, 9, 0, 7); g.fill(); });
      if (type === 2) [-24, -8, 8, 24].forEach((dx, i) => { g.beginPath(); g.arc(x + dx, y + (i % 2 ? -3 : 3), 13, 0, 7); g.fill(); });
      if (type === 3) { rr(x - 36, y - 12, 72, 24, 12); g.fill(); g.strokeStyle = '#5A3518'; g.lineWidth = 2; [-16, 2, 18].forEach((dx) => { g.beginPath(); g.moveTo(x + dx, y - 12); g.lineTo(x + dx + 4, y - 3); g.stroke(); }); }
      if (type === 4) { g.lineWidth = 20; g.beginPath(); g.moveTo(x - 34, y + 6); g.bezierCurveTo(x - 14, y - 18, x + 10, y + 20, x + 34, y - 6); g.stroke(); }
      if (type === 5) [[-22, -6], [4, 8], [24, -8]].forEach(([dx, dy]) => { g.beginPath(); g.ellipse(x + dx, y + dy, 14, 10, 0.3, 0, 7); g.fill(); });
      if (type === 6) { g.fillStyle = '#9C6A3A'; [[-18, 2, 20, 12], [6, -4, 22, 13], [20, 8, 16, 10]].forEach(([dx, dy, rx, ry]) => { g.beginPath(); g.ellipse(x + dx, y + dy, rx, ry, 0, 0, 7); g.fill(); }); }
      if (type === 7) { g.fillStyle = '#B08050'; g.beginPath(); g.ellipse(x, y + 8, 38, 12, 0, 0, 7); g.fill(); [[-20, -12], [6, -16], [24, -8]].forEach(([dx, dy]) => { g.beginPath(); g.arc(x + dx, y + dy, 5, 0, 7); g.fill(); }); }
    }
    with_(dimFor(5), () => {
      for (let i = 0; i < 7; i++) {
        const pr = ease(T.f(5, 0.05 + i * 0.05, 0.15 + i * 0.05)); if (pr <= 0) continue;
        const x = 160 + i * 126;
        with_(clamp(pr * 2), () => {
          rr(x - 54, 800, 108, 80, 18); g.fillStyle = 'rgba(201,206,255,0.08)'; g.fill();
          g.lineWidth = 3; g.strokeStyle = i < 2 ? C.blue : i > 4 ? C.orange : 'rgba(201,206,255,0.25)'; g.stroke();
          stool(i + 1, x, 840);
          text(String(i + 1), x, 905, { size: 26, color: C.ink2 });
        });
      }
      const br = (x1, x2, col, label, pr) => { if (pr <= 0) return; with_(pr, () => {
        g.strokeStyle = col; g.lineWidth = 4; g.beginPath(); g.moveTo(x1, 924); g.lineTo(x1, 936); g.lineTo(x2, 936); g.lineTo(x2, 924); g.stroke();
        text(label, (x1 + x2) / 2, 966, { size: 28, color: col }); }); };
      br(110, 336, C.blue, 'SII-E', ease(T.f(5, 0.45, 0.6)));
      br(740, 966, C.orange, 'SII-D', ease(T.f(5, 0.6, 0.75)));
      with_(ease(T.f(5, 0.45, 0.6)), () => text('Normal', 538, 966, { size: 26, color: C.dim }));
      with_(ease(T.f(5, 0.78, 0.92)), () => text('Más de 25% de los días · de ambos: SII-M', 540, 1006, { size: 25, color: C.ink2, weight: 600 }));
    });

    // ══ 6 · Con alarma → colonoscopia
    with_(dimFor(6), () => {
      pill('Alarma → colonoscopia', 280, 1072, ease(T.f(6, 0, 0.15)), { fill: C.red, color: '#fff', size: 27 });
      [['≥45 años', 160, 1142], ['Sangrado o anemia', 398, 1142], ['Pérdida de peso', 165, 1204], ['Nocturnos', 398, 1204], ['Familiar: CCR, EII', 280, 1266]]
        .forEach(([l, x, y], i) => chip(l, x, y, ease(T.f(6, 0.15 + i * 0.12, 0.27 + i * 0.12)), C.red));
    });
    // ══ 7 · Sin alarma → diagnóstico positivo
    with_(dimFor(7), () => {
      pill('Sin alarma → Dx positivo', 800, 1072, ease(T.f(7, 0, 0.15)), { fill: this.color, size: 27 });
      [['Cumple Roma IV', 1142], ['D o M: serología celiaca', 1204], ['Calprotectina + PCR', 1266]]
        .forEach(([l, y], i) => chip(l, 800, y, ease(T.f(7, 0.15 + i * 0.2, 0.3 + i * 0.2)), this.color));
    });

    // ══ 8 · Trampa
    if (k === 8) {
      const a = ease(T.f(8, 0, 0.15));
      with_(a, () => {
        g.fillStyle = 'rgba(11,14,42,0.9)'; g.fillRect(0, 0, MK.W, MK.H);
        headline(heads[8], t - T.s(8), C.gold);
        text('58 años + anemia ferropénica', 540, 450, { size: 60, color: C.gold, maxW: 960 });
        text('“Colon irritable” de inicio reciente en un adulto mayor', 540, 545, { size: 34, color: C.ink2, weight: 600, maxW: 860 });
        with_(ease(T.f(8, 0.5, 0.65)), () => {
          text('No es SII: colonoscopia', 540, 790, { size: 64, color: C.red, maxW: 960 });
          text('Cáncer colorrectal hasta demostrar lo contrario', 540, 880, { size: 34, color: C.ink2, weight: 600, maxW: 860 });
        });
      });
    }
  }
};
