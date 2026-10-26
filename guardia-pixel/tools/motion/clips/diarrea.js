// Diarrea crónica en 1 minuto (tema diarrea). Cuatro paneles de mucosa intestinal dibujados aquí: osmótica, secretora,
// inflamatoria y malabsortiva; al final la celiaca (gluten → vellosidades planas) y cómo se diagnostica.
window.CLIP = {
  topic: 'diarrea', title: 'Diarrea en 1 minuto', sub: 'Cuatro mecanismos de la diarrea crónica, y cómo reconocer la celiaca', color: '#62E3FF',
  scenes: [
    { say: 'Diarrea crónica, en un minuto.', min: 3.5 },
    { say: 'Diarrea: tres o más evacuaciones blandas al día. Si dura más de cuatro semanas es crónica, y ahí buscas el mecanismo.' },
    { say: 'Osmótica: un soluto que no se absorbe, como la lactosa, jala agua. Cede con el ayuno; brecha osmótica mayor de ciento veinticinco.' },
    { say: 'Secretora: una toxina, el VIP o los ácidos biliares abren los canales de cloro. Persiste en ayuno y de noche; brecha menor de cincuenta.' },
    { say: 'Inflamatoria: la mucosa dañada deja salir sangre y leucocitos. Hay fiebre y sube la calprotectina.' },
    { say: 'Malabsortiva: sin lipasa, o sin superficie de absorción, la grasa llega al colon. Hay esteatorrea, y faltan las vitaminas A, D, E y K.' },
    { say: 'Celiaca: el gluten aplana las vellosidades. Pide antitransglutaminasa IgA con IgA total mientras come gluten, y confirma con biopsia de duodeno.' },
    { say: 'Perla: anemia por falta de hierro que no responde al hierro oral, sin sangrado: busca celiaca. Y si ya dejó el gluten, reintrodúcelo antes de la biopsia.', min: 7 }
  ],
  draw(t, T) {
    const { C, ease, lerp, clamp, text, pill, arrow, ring, titleCard, headline, bg, with_, rr } = MK;
    const g = MK.g;
    bg(t);
    const k = T.cur, dimFor = (i) => (k >= 6 ? 1 : k === i ? 1 : 0.42);
    if (k === 0) { titleCard(t - T.s(0), this.title, this.sub, this.color); return; }
    const heads = ['', 'Diarrea crónica: más de 4 semanas', 'Osmótica: un soluto jala agua', 'Secretora: el enterocito saca agua', 'Inflamatoria: sangre y leucocitos', 'Malabsortiva: grasa sin absorber', 'Celiaca: gluten → vellosidades planas', 'Perla del examen'];
    headline(heads[k], t - T.s(k), this.color);

    const VX = [52, 127, 202, 277, 352, 427], GAP = [90, 165, 240, 315, 390];
    const WATER = '#4DB8FF';
    // Un panel de mucosa: lumen arriba, vellosidades, capilar abajo. h = alto de las vellosidades (0→1)
    const panel = (x0, y0, a, o, inner) => {
      if (a <= 0) return;
      with_(clamp(a * 1.5), () => {
        g.save(); g.translate(x0, y0 + (1 - a) * 20);
        rr(0, 0, 480, 390, 26); g.fillStyle = 'rgba(20,26,66,0.75)'; g.fill(); g.lineWidth = 4; g.strokeStyle = o.col; g.stroke();
        g.save(); rr(0, 0, 480, 390, 26); g.clip();
        g.fillStyle = '#2A1838'; g.fillRect(0, 262, 480, 70);
        g.fillStyle = '#7A2E44'; g.fillRect(0, 298, 480, 26); g.fillStyle = C.blood; g.fillRect(0, 303, 480, 16);
        VX.forEach((vx, i) => {
          const h = o.vh * (o.ragged ? (0.6 + 0.4 * ((i * 37) % 5) / 4) : 1);
          g.fillStyle = o.vcol; rr(vx - 26, 268 - h, 52, h + 12, Math.min(26, h / 2 + 6)); g.fill();
          g.fillStyle = 'rgba(255,255,255,0.18)'; rr(vx - 18, 274 - h, 12, Math.max(4, h - 14), 6); g.fill();
        });
        g.fillStyle = o.vcol; g.fillRect(0, 262, 480, 10);
        inner();
        g.restore();
        pill(o.name, 240, 38, 1, { fill: o.col, color: o.ink || '#241500', size: 30, noPop: true });
        text(o.c1, 240, 352, { size: 26, color: C.ink, weight: 700, maxW: 450 });
        g.restore();
      });
    };
    const drop = (x, y, r, col) => { g.fillStyle = col; g.beginPath(); g.arc(x, y, r, 0, 7); g.fill(); };
    const loop = (sp, i, n) => (t * sp + i / n) % 1;
    const PX = [45, 555], PY = [300, 712];

    // 1 · Definición
    with_(dimFor(1), () => {
      pill('≥3 al día, blandas', 230, 222, ease(T.f(1, 0.05, 0.25)), { fill: C.blue, size: 30 });
      with_(ease(T.f(1, 0.3, 0.5)), () => text('Aguda <14 d', 545, 222, { size: 30, color: C.dim }));
      pill('Crónica >4 sem', 855, 222, ease(T.f(1, 0.45, 0.65)), { fill: C.gold, size: 30 });
    });
    // marcadores de los cuatro mecanismos, mientras su panel no aparece
    [[0, 0], [1, 0], [0, 1], [1, 1]].forEach(([c, r], i) => {
      if (t >= T.s(2 + i)) return;
      with_(ease(T.f(1, 0.6 + i * 0.08, 0.75 + i * 0.08)) * 0.6, () => {
        g.setLineDash([14, 12]); g.lineWidth = 4; g.strokeStyle = C.dim; rr(PX[c], PY[r], 480, 390, 26); g.stroke(); g.setLineDash([]);
        text('?', PX[c] + 240, PY[r] + 195, { size: 110, color: C.dim });
      });
    });

    // 2 · Osmótica
    with_(dimFor(2), () => panel(PX[0], PY[0], ease(T.f(2, 0, 0.2)), { name: 'Osmótica', col: C.purple, vcol: '#E9A2B0', vh: 105, c1: 'Cede con ayuno · brecha >125' }, () => {
      for (let i = 0; i < 9; i++) drop(40 + i * 50 + Math.sin(t * 1.5 + i) * 8, 100 + ((i * 41) % 50) + Math.cos(t * 1.2 + i) * 6, 11, C.purple);
      with_(ease(T.f(2, 0.25, 0.45)), () => GAP.forEach((gx, i) => { for (let j = 0; j < 2; j++) { const u = loop(0.35, j + i * 0.37, 2); drop(gx, lerp(310, 90, u), 8, WATER); } }));
    }));
    // 3 · Secretora
    with_(dimFor(3), () => panel(PX[1], PY[0], ease(T.f(3, 0, 0.2)), { name: 'Secretora', col: C.cyan, vcol: '#E9A2B0', vh: 105, c1: 'Persiste en ayuno · brecha <50' }, () => {
      VX.forEach((vx, i) => { if (i % 2 === 0) { g.fillStyle = C.green; g.beginPath(); g.ellipse(vx, 158, 20, 12, 0, 0, 7); g.fill(); } });
      with_(ease(T.f(3, 0.25, 0.45)), () => VX.forEach((vx, i) => { for (let j = 0; j < 2; j++) { const u = loop(0.4, j + i * 0.29, 2); drop(vx + (j ? 12 : -12), lerp(160, 118, u), 8, WATER); } }));
      with_(ease(T.f(3, 0.35, 0.55)), () => { text('Cl⁻ + agua', 360, 86, { size: 26, color: C.cyan }); text('Toxina', 110, 86, { size: 26, color: C.green }); });
    }));
    // 4 · Inflamatoria
    with_(dimFor(4), () => panel(PX[0], PY[1], ease(T.f(4, 0, 0.2)), { name: 'Inflamatoria', col: C.red, ink: '#fff', vcol: '#E0607A', vh: 80, ragged: true, c1: 'Sangre, fiebre · calprotectina ↑' }, () => {
      with_(ease(T.f(4, 0.2, 0.4)), () => {
        for (let i = 0; i < 10; i++) { const u = loop(0.25, i, 10), x = 40 + ((i * 89) % 400); drop(x, lerp(250, 80, u), i % 3 === 0 ? 10 : 8, i % 3 === 0 ? '#F4F1FF' : C.blood); }
      });
      g.strokeStyle = 'rgba(255,155,61,0.7)'; g.lineWidth = 4;
      VX.forEach((vx) => { g.beginPath(); g.arc(vx, 210, 30 + 4 * Math.sin(t * 4 + vx), 0, 7); g.stroke(); });
    }));
    // 5 · Malabsortiva (vellosidades planas en la celiaca)
    with_(dimFor(5), () => {
      const flat = lerp(105, 22, ease(T.f(6, 0.1, 0.4)));
      panel(PX[1], PY[1], ease(T.f(5, 0, 0.2)), { name: 'Malabsortiva', col: C.gold, vcol: '#E9A2B0', vh: flat, c1: 'Esteatorrea · faltan A, D, E, K' }, () => {
        with_(ease(T.f(5, 0.2, 0.4)), () => { for (let i = 0; i < 8; i++) { const u = loop(0.12, i, 8); g.fillStyle = '#FFE29A'; g.beginPath(); g.ellipse(lerp(-20, 500, u), 120 + ((i * 37) % 90), 16, 12, 0, 0, 7); g.fill(); g.strokeStyle = '#B8902A'; g.lineWidth = 3; g.stroke(); } });
      });
      if (k >= 5) with_(ease(T.f(5, 0.35, 0.55)), () => text('Grasa', PX[1] + 400, PY[1] + 92, { size: 26, color: C.gold2 }));
    });

    // 6 · Celiaca: gluten, HLA, anti-tTG, biopsia
    if (k >= 6) {
      pill('Celiaca', PX[1] + 110, PY[1] + 92, ease(T.f(6, 0.05, 0.2)), { fill: C.orange, size: 28 });
      pill('Anti-tTG IgA + IgA total', 300, 1160, ease(T.f(6, 0.35, 0.5)), { fill: C.cyan, size: 28 });
      arrow(495, 1160, 650, 1160, T.f(6, 0.55, 0.65), { color: C.ink2, width: 6 });
      pill('Biopsia de duodeno', 820, 1160, ease(T.f(6, 0.7, 0.85)), { fill: C.pink, size: 28 });
      with_(ease(T.f(6, 0.45, 0.6)), () => text('Siempre comiendo gluten', 540, 1245, { size: 32, color: C.gold }));
    }

    // 7 · Perla
    if (k === 7) {
      const a = ease(T.f(7, 0, 0.15));
      with_(a, () => {
        g.fillStyle = 'rgba(11,14,42,0.88)'; g.fillRect(0, 0, MK.W, MK.H);
        headline(heads[7], t - T.s(7), C.gold);
        text('Ferropenia que no responde', 540, 440, { size: 60, color: C.gold, maxW: 960 });
        text('al hierro oral, sin sangrado → busca celiaca', 540, 525, { size: 34, color: C.ink2, weight: 600, maxW: 900 });
        with_(ease(T.f(7, 0.5, 0.65)), () => {
          text('¿Ya dejó el gluten?', 540, 780, { size: 64, color: C.red });
          text('Reintrodúcelo antes de la biopsia', 540, 870, { size: 34, color: C.ink2, weight: 600 });
          text('Sin gluten, la biopsia puede salir normal', 540, 922, { size: 34, color: C.ink2, weight: 600 });
        });
      });
    }
  }
};
