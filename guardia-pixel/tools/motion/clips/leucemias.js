// Leucemia aguda en 1 minuto (tema leucemias). Mismo formato que hta.js.
// Dibujos propios: médula ósea, célula madre, blasto, neutrófilo, plaquetas, promielocito con bastones de Auer.
(() => {
  const { C, clamp, lerp, ease, pop, with_, rr } = MK;
  const g_ = () => MK.g;
  function rbc(x, y, r, a = 1) {
    if (a <= 0) return; const g = g_();
    g.save(); g.globalAlpha *= clamp(a); g.translate(x, y);
    g.fillStyle = C.blood; g.beginPath(); g.ellipse(0, 0, r, r * 0.8, 0, 0, 7); g.fill();
    g.fillStyle = 'rgba(0,0,0,0.2)'; g.beginPath(); g.ellipse(0, 0, r * 0.45, r * 0.36, 0, 0, 7); g.fill(); g.restore();
  }
  function neutro(x, y, r, a = 1) {
    if (a <= 0) return; const g = g_();
    g.save(); g.globalAlpha *= clamp(a); g.translate(x, y);
    g.fillStyle = '#F3D9E6'; g.beginPath(); g.arc(0, 0, r, 0, 7); g.fill();
    g.fillStyle = '#7A4FB8'; for (const [dx, dy] of [[-r * 0.4, -r * 0.15], [0, r * 0.2], [r * 0.4, -r * 0.15]]) { g.beginPath(); g.arc(dx, dy, r * 0.27, 0, 7); g.fill(); }
    g.strokeStyle = '#7A4FB8'; g.lineWidth = 3; g.beginPath(); g.moveTo(-r * 0.4, -r * 0.15); g.lineTo(0, r * 0.2); g.lineTo(r * 0.4, -r * 0.15); g.stroke(); g.restore();
  }
  function plts(x, y, a = 1) {
    if (a <= 0) return; const g = g_();
    g.save(); g.globalAlpha *= clamp(a); g.fillStyle = '#D9C2FF';
    for (const [dx, dy] of [[-12, -4], [8, -8], [0, 9], [14, 6]]) { g.beginPath(); g.ellipse(x + dx, y + dy, 8, 6, 0.4, 0, 7); g.fill(); }
    g.restore();
  }
  function stem(x, y, r, a = 1) {
    if (a <= 0) return; const g = g_();
    g.save(); g.globalAlpha *= clamp(a); g.translate(x, y); const s = lerp(0.6, 1, pop(a)); g.scale(s, s);
    g.fillStyle = '#9EE6FF'; g.beginPath(); g.arc(0, 0, r, 0, 7); g.fill(); g.strokeStyle = '#3BA6CC'; g.lineWidth = 4; g.stroke();
    g.fillStyle = '#2C6E99'; g.beginPath(); g.arc(0, 0, r * 0.55, 0, 7); g.fill(); g.restore();
  }
  function blast(x, y, r, a = 1) {
    if (a <= 0) return; const g = g_();
    g.save(); g.globalAlpha *= clamp(a); g.translate(x, y); const s = lerp(0.5, 1, pop(a)); g.scale(s, s);
    g.fillStyle = '#B9A3F0'; g.beginPath(); g.arc(0, 0, r, 0, 7); g.fill();
    g.fillStyle = '#5B3DA8'; g.beginPath(); g.arc(1, 1, r * 0.78, 0, 7); g.fill();
    g.fillStyle = '#C9B8FF'; g.beginPath(); g.arc(-r * 0.25, -r * 0.2, r * 0.16, 0, 7); g.fill(); g.beginPath(); g.arc(r * 0.3, r * 0.2, r * 0.12, 0, 7); g.fill();
    g.restore();
  }
  function promielo(x, y, r, a = 1, t = 0) {
    if (a <= 0) return; const g = g_();
    g.save(); g.globalAlpha *= clamp(a); g.translate(x, y); const s = lerp(0.6, 1, pop(a)); g.scale(s, s);
    g.fillStyle = '#E9B8D0'; g.beginPath(); g.arc(0, 0, r, 0, 7); g.fill();
    g.fillStyle = '#6B3A8E'; g.beginPath(); g.ellipse(-r * 0.15, 0, r * 0.5, r * 0.55, 0, 0, 7); g.fill();
    g.fillStyle = '#B0306A'; for (let i = 0; i < 14; i++) { const th = i * 2.4, d = r * (0.55 + (i % 3) * 0.12); g.beginPath(); g.arc(Math.cos(th) * d, Math.sin(th) * d, 3.5, 0, 7); g.fill(); }
    g.strokeStyle = C.red; g.lineWidth = 4; g.lineCap = 'round';
    for (const [dx, dy, an] of [[r * 0.45, -r * 0.3, 0.7], [r * 0.5, r * 0.1, -0.4], [r * 0.3, r * 0.45, 0.3], [r * 0.6, -r * 0.05, 1.2]]) { g.beginPath(); g.moveTo(dx - Math.cos(an) * 14, dy - Math.sin(an) * 14); g.lineTo(dx + Math.cos(an) * 14, dy + Math.sin(an) * 14); g.stroke(); }
    g.restore();
  }
  function bloodDrop(x, y, s, a) {
    if (a <= 0) return; const g = g_();
    g.save(); g.globalAlpha *= clamp(a); g.translate(x, y); g.scale(s, s); g.fillStyle = C.blood;
    g.beginPath(); g.moveTo(0, -30); g.bezierCurveTo(8, -14, 22, 0, 22, 12); g.bezierCurveTo(22, 26, 12, 32, 0, 32); g.bezierCurveTo(-12, 32, -22, 26, -22, 12); g.bezierCurveTo(-22, 0, -8, -14, 0, -30); g.fill(); g.restore();
  }
  // Posiciones de blastos dentro de la médula (deterministas)
  const BL = [];
  for (let r = 0; r < 5; r++) for (let c = 0; c < 8; c++) BL.push([112 + c * 66 + (r % 2) * 22 + Math.sin(r * 7 + c * 3) * 8, 285 + r * 64 + Math.cos(r * 5 + c) * 8]);
  BL.sort((a, b) => Math.hypot(a[0] - 180, a[1] - 440) - Math.hypot(b[0] - 180, b[1] - 440));

  window.CLIP = {
    topic: 'leucemias', title: 'Leucemia aguda en 1 minuto', sub: 'De la médula sana a la urgencia de la LPA', color: '#B48CFF',
    scenes: [
      { say: 'La leucemia aguda, en un minuto.', min: 3.5 },
      { say: 'En la médula sana, la célula madre da tres líneas: eritrocitos, neutrófilos y plaquetas, que salen maduros a la sangre.' },
      { say: 'En la leucemia aguda, un clon de blastos que no madura llena la médula, veinte por ciento o más, y desplaza a las células normales.' },
      { say: 'Caen las tres líneas: anemia con fatiga, neutropenia con infecciones y trombocitopenia con sangrado. Aunque los leucocitos estén altos.' },
      { say: 'Ojo con la leucemia promielocítica, la LPA, con la translocación quince diecisiete. Sus promielocitos con bastones de Auer desatan una coagulación intravascular diseminada, y el paciente sangra.' },
      { say: 'Su tratamiento es el ácido transretinoico, o ATRA, que hace madurar al promielocito. Inícialo con la sola sospecha, sin esperar la genética.' },
      { say: 'Resumen: blastos que llenan la médula, citopenias en la sangre y, en la LPA, ATRA de inmediato.' },
      { say: 'Perla: fiebre con neutrófilos menores de quinientos es urgencia. Hemocultivos y antibiótico antipseudomonas en menos de sesenta minutos.', min: 7 }
    ],
    draw(t, T) {
      const { text, pill, arrow, ring, titleCard, headline, bg } = MK;
      const g = MK.g;
      bg(t);
      const k = T.cur, dimFor = (i) => (k >= 6 ? 1 : k === i ? 1 : 0.42);
      if (k === 0) { titleCard(t - T.s(0), this.title, this.sub, this.color); return; }
      const heads = ['', 'Médula sana: tres líneas', 'Blastos ≥20% llenan la médula', 'Pancitopenia: fatiga, fiebre, sangrado', 'LPA: t(15;17) y CID', 'ATRA: madura al promielocito', 'Resumen', 'Perla para el examen'];
      headline(heads[k], t - T.s(k), this.color);
      const leuk = k >= 2 ? ease(T.f(2, 0.15, 0.8)) : 0;      // médula invadida
      const cyto = k >= 3 ? ease(T.f(3, 0.1, 0.7)) : 0;      // citopenias en sangre

      // 1 · Médula sana y sangre
      with_(k <= 3 || k >= 6 ? 1 : 0.42, () => {
        const a = ease(T.f(1, 0, 0.2));
        with_(a, () => {
          g.fillStyle = '#3B1830'; rr(60, 190, 580, 470, 40); g.fill(); g.lineWidth = 10; g.strokeStyle = '#E9E2D0'; g.stroke();
          text('Médula ósea', 350, 232, { size: 30, color: C.ink2 });
          g.fillStyle = '#3A1220'; rr(720, 190, 300, 470, 40); g.fill(); g.lineWidth = 6; g.strokeStyle = C.organ; g.stroke();
          text('Sangre', 870, 232, { size: 30, color: C.ink2 });
        });
        const norm = 1 - leuk * 0.85;
        stem(170, 450, 38, ease(T.f(1, 0.1, 0.3)) * norm);
        const prod = [[470, 310], [470, 450], [470, 590]];
        prod.forEach(([x, y], i) => {
          const pa = ease(T.f(1, 0.3 + i * 0.12, 0.5 + i * 0.12)) * norm;
          arrow(215, 450 + (i - 1) * 25, x - 50, y, T.f(1, 0.25 + i * 0.12, 0.45 + i * 0.12) * norm, { color: C.ink2, width: 5 });
          if (i === 0) rbc(x, y, 26, pa); else if (i === 1) neutro(x, y, 26, pa); else plts(x, y, pa);
        });
        arrow(560, 450, 700, 450, T.f(1, 0.65, 0.85) * norm, { color: C.ink2, width: 6 });
        // células circulando (bajan por la sangre); con leucemia: blastos y menos células normales
        if (t >= T.s(1) + T.d(1) * 0.65) for (let i = 0; i < 12; i++) {
          const u = (t * 0.06 + i / 12) % 1, x = 800 + (i % 3) * 70, y = lerp(270, 640, u), fade = Math.min(1, u * 6, (1 - u) * 6);
          const type = i % 3, isBlast = i % 2 === 0 && leuk > 0.3, gone = cyto > (i % 4 + 1) / 5;
          if (isBlast) blast(x, y, 22, fade * leuk);
          else if (!gone) { if (type === 0) rbc(x, y, 18, fade); else if (type === 1) neutro(x, y, 18, fade); else plts(x, y, fade); }
        }
      });

      // 2 · Blastos que llenan la médula
      with_(k <= 3 || k >= 6 ? 1 : 0.42, () => {
        const n = Math.floor(leuk * BL.length);
        for (let i = 0; i < n; i++) blast(BL[i][0], BL[i][1], 26, Math.min(1, (leuk * BL.length - i) / 3));
        if (k === 2) with_(ease(T.f(2, 0.5, 0.7)), () => pill('Blastos ≥ 20%', 350, 620, 1, { fill: C.purple, color: '#fff', size: 30, noPop: true }));
        if (k >= 3) pill('Blastos ≥ 20%', 350, 620, 1, { fill: C.purple, color: '#fff', size: 30, noPop: true });
      });

      // 3 · Citopenias
      with_(dimFor(3), () => {
        const rows = [['Eritrocitos', 'Fatiga', C.blood], ['Neutrófilos', 'Infecciones', '#F3D9E6'], ['Plaquetas', 'Sangrado', '#D9C2FF']];
        rows.forEach(([lab, cons, col], i) => {
          const y = 745 + i * 82, a = ease(T.f(3, 0.05 + i * 0.1, 0.25 + i * 0.1));
          with_(a, () => {
            text(lab, 190, y, { size: 30, color: C.ink });
            g.fillStyle = 'rgba(201,206,255,0.15)'; rr(320, y - 16, 420, 32, 16); g.fill();
            const v = lerp(1, 0.22, ease(T.f(3, 0.2 + i * 0.12, 0.6 + i * 0.12)));
            g.fillStyle = col; rr(320, y - 16, 420 * v, 32, 16); g.fill();
          });
          with_(ease(T.f(3, 0.45 + i * 0.12, 0.65 + i * 0.12)), () => text('→ ' + cons, 890, y, { size: 30, color: C.gold }));
        });
      });

      // 4 · LPA: promielocito con bastones de Auer → CID
      with_(dimFor(4), () => {
        const a = ease(T.f(4, 0, 0.2));
        with_(a, () => { g.fillStyle = 'rgba(20,26,66,0.85)'; rr(50, 1010, 980, 295, 28); g.fill(); g.lineWidth = 3; g.strokeStyle = 'rgba(255,84,112,0.45)'; g.stroke(); });
        with_(a, () => text('LPA · t(15;17)', 190, 1050, { size: 30, color: C.pink }));
        promielo(190, 1160, 62, ease(T.f(4, 0.1, 0.35)), t);
        with_(ease(T.f(4, 0.35, 0.55)), () => text('Bastones de Auer', 190, 1268, { size: 24, color: C.ink2, weight: 600 }));
        if (k === 4) ring(225, 1150, 60, t, { color: C.red });
        arrow(270, 1205, 400, 1250, T.f(4, 0.55, 0.7), { color: C.red, width: 6 });
        pill('CID', 455, 1255, ease(T.f(4, 0.6, 0.8)), { fill: C.red, color: '#fff', size: 30 });
        for (let i = 0; i < 3; i++) bloodDrop(540 + i * 40, 1250 + (i % 2) * 10, 0.7, ease(T.f(4, 0.7 + i * 0.06, 0.85 + i * 0.05)));
      });

      // 5 · ATRA → neutrófilo
      with_(dimFor(5), () => {
        arrow(280, 1130, 760, 1130, T.f(5, 0.05, 0.4), { color: C.green, width: 7 });
        pill('ATRA', 520, 1080, ease(T.f(5, 0.1, 0.3)), { fill: C.green, size: 32 });
        neutro(860, 1150, 56, ease(T.f(5, 0.35, 0.6)));
        with_(ease(T.f(5, 0.45, 0.65)), () => text('Neutrófilo maduro', 860, 1255, { size: 26, color: C.ink2, weight: 600 }));
        with_(ease(T.f(5, 0.65, 0.85)), () => text('Sin esperar PML::RARA', 530, 1178, { size: 24, color: C.green, weight: 700 }));
      });

      // 7 · Perla
      if (k === 7) {
        const a = ease(T.f(7, 0, 0.15));
        with_(a, () => {
          g.fillStyle = 'rgba(11,14,42,0.88)'; g.fillRect(0, 0, MK.W, MK.H);
          headline(heads[7], t - T.s(7), C.gold);
          text('Fiebre + neutrófilos < 500', 540, 470, { size: 60, color: C.gold });
          text('= urgencia (neutropenia febril)', 540, 555, { size: 36, color: C.ink2, weight: 600 });
          with_(ease(T.f(7, 0.45, 0.6)), () => {
            text('< 60 minutos', 540, 790, { size: 70, color: C.red });
            text('Hemocultivos + antibiótico antipseudomonas (cefepime, piperacilina-tazobactam o meropenem)', 540, 890, { size: 34, color: C.ink2, weight: 600, maxW: 880 });
          });
        });
      }
    }
  };
})();
