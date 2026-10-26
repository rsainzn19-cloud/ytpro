// LRA en 1 minuto (tema lra): prerrenal, intrínseca (NTA) y posrenal sobre una nefrona, con la FENa.
// T.s(i)/T.e(i)/T.d(i): inicio, fin y duración de la escena i; T.f(i, a, b): avance 0→1 entre las fracciones a y b de la escena i.
window.CLIP = {
  topic: 'lra', title: 'LRA en 1 minuto', sub: 'Prerrenal, intrínseca o posrenal: dónde está el problema y qué dice la FENa', color: '#4DB8FF',
  scenes: [
    { say: 'La lesión renal aguda, en un minuto.', min: 3.5 },
    { say: 'Según KDIGO basta uno: creatinina que sube cero punto tres en dos días, o una vez y media su basal en una semana, u oliguria por seis horas.' },
    { say: 'Prerrenal: llega menos sangre. Las prostaglandinas dilatan la aferente y la angiotensina dos contrae la eferente para sostener la filtración.' },
    { say: 'Si el AINE cierra la aferente, el IECA o ARA dos abre la eferente y el diurético quita volumen, la filtración cae: es el triple golpe.' },
    { say: 'En la prerrenal el túbulo está sano y reabsorbe sodio con avidez: la fracción excretada de sodio es menor de uno por ciento.' },
    { say: 'Si la isquemia se prolonga o hay tóxicos, el túbulo muere: necrosis tubular aguda, cilindros café lodoso y fracción excretada de sodio mayor de dos.' },
    { say: 'Posrenal: la próstata o un lito tapan la salida, la presión se regresa y la filtración se detiene. Busca hidronefrosis.' },
    { say: 'Perla: si toma diurético, pide la fracción excretada de urea; menor de treinta y cinco es prerrenal. Y la creatinina sola nunca indica diálisis.', min: 8 }
  ],
  draw(t, T) {
    const { C, ease, inOut, lerp, clamp, text, pill, arrow, ring, titleCard, headline, bg, with_, rr } = MK;
    const g = MK.g;
    bg(t);
    const k = T.cur;
    if (k === 0) { titleCard(t - T.s(0), this.title, this.sub, this.color); return; }
    const heads = ['', 'LRA: criterios KDIGO', 'Prerrenal: el riñón se defiende', 'El triple golpe', 'Túbulo sano: FENa <1%', 'NTA: el túbulo muere', 'Posrenal: algo tapa la salida', 'Perla para el examen'];
    headline(heads[k], t - T.s(k), this.color);
    const back = k >= 7 ? 1 : k === 6 ? ease(T.f(6, 0.78, 0.96)) : 0;
    const zone = (...sc) => (sc.includes(k) ? 1 : lerp(0.42, 1, back));

    const stamp = (label, x, y, px, py, prog, size = 26) => {
      if (prog <= 0) return;
      const s = lerp(1.8, 1, ease(prog));
      g.save(); g.translate(x, y); g.rotate(-0.12); g.scale(s, s); g.globalAlpha *= clamp(prog * 3);
      g.strokeStyle = C.red; g.lineWidth = 12; g.lineCap = 'round';
      g.beginPath(); g.moveTo(-30, -30); g.lineTo(30, 30); g.moveTo(30, -30); g.lineTo(-30, 30); g.stroke(); g.restore();
      pill(label, px, py, prog, { fill: C.red, color: '#fff', size });
    };
    // Punto a lo largo de una polilínea (u de 0 a 1)
    const along = (pts, u) => {
      const L = []; let tot = 0;
      for (let i = 1; i < pts.length; i++) { const d = Math.hypot(pts[i][0] - pts[i - 1][0], pts[i][1] - pts[i - 1][1]); L.push(d); tot += d; }
      let s = clamp(u) * tot, i = 0;
      while (i < L.length - 1 && s > L[i]) { s -= L[i]; i++; }
      const f = s / L[i]; return [lerp(pts[i][0], pts[i + 1][0], f), lerp(pts[i][1], pts[i + 1][1], f)];
    };
    const tube = (pts, r, wall, lumen) => {
      g.lineCap = 'round'; g.lineJoin = 'round';
      g.strokeStyle = wall; g.lineWidth = 2 * r + 16; g.beginPath(); pts.forEach(([x, y], i) => (i ? g.lineTo(x, y) : g.moveTo(x, y))); g.stroke();
      g.strokeStyle = lumen; g.lineWidth = 2 * r; g.beginPath(); pts.forEach(([x, y], i) => (i ? g.lineTo(x, y) : g.moveTo(x, y))); g.stroke();
    };

    // ── Estado hemodinámico por escena
    // Radio de la aferente y eferente, flujo y TFG (0-1)
    let ra = 26, re = 20, vol = 1, tfg = 0.8;
    if (k >= 2) { const c = inOut(T.f(2, 0.15, 0.4)), d = inOut(T.f(2, 0.4, 0.65)); vol = lerp(1, 0.6, c); ra = lerp(26, 36, d); re = lerp(20, 12, inOut(T.f(2, 0.6, 0.85))); tfg = lerp(0.8, 0.55, c) + 0.15 * inOut(T.f(2, 0.55, 0.85)); }
    if (k >= 3) { ra = lerp(36, 14, inOut(T.f(3, 0.1, 0.3))); re = lerp(12, 26, inOut(T.f(3, 0.3, 0.5))); vol = lerp(0.6, 0.4, inOut(T.f(3, 0.5, 0.7))); tfg = lerp(0.7, 0.22, inOut(T.f(3, 0.15, 0.85))); }
    if (k >= 5) tfg = 0.22 - 0.06 * inOut(T.f(5, 0.2, 0.6));
    if (k >= 6) tfg = lerp(0.16, 0.08, inOut(T.f(6, 0.3, 0.6)));

    // ── 1 · Criterios KDIGO
    with_(zone(1), () => {
      const ch = [['Cr ↑ ≥0.3 en 48 h', 185], ['Cr ≥1.5× en 7 días', 540], ['Orina <0.5 mL/kg/h · 6 h', 885]];
      ch.forEach(([l, x], i) => pill(l, x, 212, ease(T.f(1, 0.1 + i * 0.22, 0.25 + i * 0.22)), { fill: C.blue, size: 22 }));
      with_(ease(T.f(1, 0.75, 0.9)), () => text('Basta uno', 540, 268, { size: 24, color: C.ink2, weight: 600 }));
    });

    const GX = 400, GY = 590, AFF = [[50, 590], [312, 590]], EFF = [[482, 548], [760, 462]];
    const TUB = [[400, 690], [400, 800], [780, 800], [880, 1045]];
    const build = ease(T.f(1, 0.05, 0.4));

    // ── Prerrenal: volumen, aferente, eferente y glomérulo
    with_(zone(1, 2, 3), () => {
      if (build <= 0) return;
      with_(build, () => {
        // Volumen (gota)
        const dv = lerp(0.55, 1, vol);
        g.save(); g.translate(115, 400); g.scale(dv, dv); g.fillStyle = C.blood;
        g.beginPath(); g.moveTo(0, -50); g.bezierCurveTo(30, -10, 42, 12, 0, 46); g.bezierCurveTo(-42, 12, -30, -10, 0, -50); g.fill(); g.restore();
        text('Volumen', 115, 470, { size: 22, color: C.pink, weight: 700 });
        // Arteriolas
        tube(AFF, ra, C.organ, '#3A1220');
        tube(EFF, re, C.organ, '#3A1220');
        const nb = Math.round(3 + 5 * vol * (ra / 30));
        for (let i = 0; i < nb; i++) { const u = (t * 0.35 * vol + i / nb) % 1; const [x, y] = along(AFF, u); g.fillStyle = C.blood; g.beginPath(); g.ellipse(x, y + Math.sin(i * 2) * ra * 0.4, 11, 7, 0, 0, 7); g.fill(); }
        for (let i = 0; i < 4; i++) { const u = (t * 0.3 + i / 4) % 1; const [x, y] = along(EFF, u); g.fillStyle = C.blood; g.beginPath(); g.ellipse(x, y, 9, 6, -0.3, 0, 7); g.fill(); }
        text('Aferente', 120, 590 + 62, { size: 22, color: C.ink2, weight: 700 });
        text('Eferente', 820, 500, { size: 22, color: C.ink2, weight: 700 });
        // Cápsula de Bowman y glomérulo
        g.strokeStyle = '#8FA8FF'; g.lineWidth = 8; g.beginPath(); g.arc(GX, GY, 100, Math.PI * 0.62, Math.PI * 2.38); g.stroke();
        g.strokeStyle = C.blood; g.lineWidth = 9;
        for (let i = 0; i < 6; i++) { const a = i * 1.05 + 0.3; g.beginPath(); g.arc(GX + Math.cos(a) * 30, GY + Math.sin(a) * 30, 32, 0, 7); g.stroke(); }
        text('Glomérulo', GX, GY - 125, { size: 22, color: C.ink2, weight: 700 });
      });
      // Defensa: PG dilata la aferente, Ang II contrae la eferente
      if (k >= 2) {
        pill('PG: dilata', 190, 525, ease(T.f(2, 0.4, 0.55)), { fill: C.cyan, size: 22 });
        pill('Ang II: contrae', 765, 545, ease(T.f(2, 0.6, 0.75)), { fill: C.orange, size: 22 });
        if (k === 2) { const r = T.f(2, 0.4, 0.6) < 1 ? [190, 590] : [620, 505]; ring(r[0], r[1], 55, t, { color: C.gold }); }
      }
      if (k >= 3) {
        stamp('AINE', 190, 590, 190, 680, ease(T.f(3, 0.08, 0.22)));
        stamp('IECA / ARA II', 620, 505, 625, 405, ease(T.f(3, 0.28, 0.42)), 24);
        stamp('Diurético', 115, 400, 115, 312 + 0, ease(T.f(3, 0.48, 0.62)), 22);
        with_(ease(T.f(3, 0.75, 0.9)), () => text('Triple golpe', 175, 765, { size: 28, color: C.red }));
      }
    });

    // ── Medidor de TFG (alto = bueno)
    with_(build, () => {
      const x = 900, y = 690, r = 62;
      g.lineWidth = 18; g.lineCap = 'round';
      g.strokeStyle = 'rgba(201,206,255,0.18)'; g.beginPath(); g.arc(x, y, r, Math.PI, 2 * Math.PI); g.stroke();
      const col = tfg > 0.6 ? C.green : tfg > 0.35 ? C.gold : C.red;
      g.strokeStyle = col; g.beginPath(); g.arc(x, y, r, Math.PI, Math.PI + Math.PI * clamp(tfg)); g.stroke();
      const a = Math.PI + Math.PI * clamp(tfg);
      g.strokeStyle = C.ink; g.lineWidth = 7; g.beginPath(); g.moveTo(x, y); g.lineTo(x + Math.cos(a) * (r - 24), y + Math.sin(a) * (r - 24)); g.stroke();
      g.fillStyle = C.ink; g.beginPath(); g.arc(x, y, 10, 0, 7); g.fill();
      text('TFG', x, y + 36, { size: 26, color: C.ink2 });
    });

    // ── Túbulo (escenas 4 y 5) y salida (6)
    const nta = k >= 5 ? ease(T.f(5, 0.1, 0.35)) : 0;
    const obst = k >= 6 ? ease(T.f(6, 0.15, 0.4)) : 0;
    with_(zone(1, 4, 5), () => {
      if (build <= 0) return;
      with_(build, () => {
        const lr = 24 + 8 * obst;
        tube(TUB, lr, '#5C6BC0', '#2A3170');
        // Células tubulares en el tramo horizontal: sanas (azules) o muertas (grises)
        for (let i = 0; i < 9; i++) {
          const x = 440 + i * 38;
          [[800 - lr - 8], [800 + lr + 8]].forEach(([y], s) => {
            const dead = nta * (((i + s) % 3) !== 1 ? 1 : 0.6);
            g.fillStyle = dead > 0.5 ? '#6E6A80' : '#8FA8FF'; rr(x - 15, y - 8, 30, 16, 5); g.fill();
          });
        }
        text('Túbulo', 590, 868, { size: 22, color: C.ink2, weight: 700 });
        // Filtrado que avanza (se detiene con la obstrucción)
        const fs = 0.22 * (1 - 0.85 * obst);
        for (let i = 0; i < 8; i++) { const [x, y] = along(TUB, (t * fs + i / 8) % 1); g.fillStyle = 'rgba(242,212,92,0.8)'; g.beginPath(); g.arc(x, y, 6, 0, 7); g.fill(); }
      });
      // 4 · Na reabsorbido
      const na = k >= 4 ? ease(T.f(4, 0.15, 0.35)) * (1 - nta) : 0;
      if (na > 0) with_(na, () => {
        [480, 580, 680].forEach((x, i) => {
          for (let j = 0; j < 2; j++) { const u = (t * 0.7 + j / 2 + i * 0.3) % 1; g.fillStyle = C.gold; g.beginPath(); g.arc(x, lerp(800, 735, u), 8, 0, 7); g.fill(); }
        });
        text('Reabsorbe Na', 580, 712, { size: 22, color: C.gold, weight: 700 });
      });
      // 5 · Cilindros café lodoso y Na que se escapa
      if (nta > 0) with_(nta, () => {
        for (let i = 0; i < 3; i++) { const [x, y] = along(TUB, (t * 0.12 + i / 3) % 1); g.fillStyle = '#8A5A34'; rr(x - 18, y - 8, 36, 16, 8); g.fill(); }
        for (let i = 0; i < 6; i++) { const [x, y] = along(TUB, (t * 0.3 + i / 6 + 0.05) % 1); g.fillStyle = C.gold; g.beginPath(); g.arc(x + 8, y + 8, 7, 0, 7); g.fill(); }
        text('Células muertas', 580, 712, { size: 22, color: '#B0ACC8', weight: 700 });
      });
    });

    // Tarjetas de índices urinarios
    const card = (x0, title, col, lines, a) => with_(a, () => {
      g.fillStyle = 'rgba(20,26,66,0.92)'; rr(x0, 975, 270, 300, 22); g.fill();
      g.strokeStyle = col; g.lineWidth = 4; rr(x0, 975, 270, 300, 22); g.stroke();
      text(title, x0 + 135, 1015, { size: 28, color: col });
      text(lines[0], x0 + 135, 1085, { size: 40, color: C.ink });
      text(lines[1], x0 + 135, 1160, { size: 22, color: C.ink2, weight: 600 });
      text(lines[2], x0 + 135, 1210, { size: 22, color: C.ink2, weight: 600 });
    });
    with_(zone(4), () => card(40, 'Prerrenal', C.blue, ['FENa <1%', 'orina concentrada', 'cilindros hialinos'], ease(T.f(4, 0.45, 0.65))));
    with_(zone(5), () => card(330, 'NTA', C.orange, ['FENa >2%', 'orina ≈300 mOsm', 'cilindros café lodoso'], ease(T.f(5, 0.5, 0.7))));

    // ── 6 · Posrenal: vejiga y próstata
    with_(zone(6), () => {
      const a = ease(T.f(6, 0, 0.15));
      if (a <= 0) return;
      with_(a, () => {
        const pr = lerp(1, 1.45, obst);
        // Uretra
        const uw = lerp(14, 3, obst);
        g.fillStyle = '#F2D45C'; g.fillRect(880 - uw / 2, 1180, uw, 120);
        // Próstata
        g.fillStyle = '#C97A8A'; g.beginPath(); g.ellipse(880 - 38 * pr, 1222, 34 * pr, 30 * pr, 0, 0, 7); g.fill(); g.beginPath(); g.ellipse(880 + 38 * pr, 1222, 34 * pr, 30 * pr, 0, 0, 7); g.fill();
        // Vejiga
        const bw = lerp(170, 210, obst), bh = lerp(120, 150, obst);
        g.fillStyle = '#E8D9A0'; rr(880 - bw / 2, 1180 - bh, bw, bh, 50); g.fill();
        g.save(); rr(880 - bw / 2, 1180 - bh, bw, bh, 50); g.clip(); g.fillStyle = '#F2D45C'; g.fillRect(880 - bw / 2, 1180 - bh * lerp(0.4, 0.95, obst), bw, bh); g.restore();
        text('Vejiga', 880, 1180 - bh / 2, { size: 22, color: '#5A4500', weight: 700, shadow: false });
        text('Próstata', 700, 1222, { size: 22, color: '#E8A8B6', weight: 700 });
      });
      // Presión que se regresa
      arrow(905, 1020, 800, 820, T.f(6, 0.4, 0.62), { color: C.red, width: 6, dash: [10, 8], cx: 880, cy: 900 });
      with_(ease(T.f(6, 0.45, 0.6)), () => { text('Presión', 990, 905, { size: 22, color: C.red, weight: 700 }); text('retrógrada', 990, 933, { size: 22, color: C.red, weight: 700 }); });
      pill('USG: hidronefrosis', 690, 932, ease(T.f(6, 0.62, 0.78)), { fill: C.cyan, size: 22 });
      if (k === 6) ring(880, 1222, 70, t, { color: C.gold });
    });

    // ── 7 · Perla
    if (k === 7) {
      const a = ease(T.f(7, 0, 0.12));
      with_(a, () => {
        g.fillStyle = 'rgba(11,14,42,0.93)'; g.fillRect(0, 0, MK.W, MK.H);
        headline(heads[7], t - T.s(7), C.gold);
        text('¿Toma diurético?', 540, 330, { size: 46, color: C.ink2 });
        text('Pide FEUrea, no FENa', 540, 425, { size: 64, color: C.gold });
        text('FEUrea <35% = prerrenal · >50% = NTA', 540, 515, { size: 34, color: C.ink2, weight: 600 });
        with_(ease(T.f(7, 0.62, 0.75)), () => {
          text('Cr de 6 sin AEIOU', 540, 800, { size: 60, color: C.red });
          text('no es diálisis urgente', 540, 880, { size: 46, color: C.red });
          text('Acidosis · Electrolitos · Intoxicación · Sobrecarga · Uremia', 540, 975, { size: 30, color: C.ink2, weight: 600, maxW: 900 });
        });
      });
    }
  }
};
