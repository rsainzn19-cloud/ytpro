// LDL en 1 minuto (tema smdl): receptor de LDL, PCSK9 y la escalera estatina → ezetimiba → iPCSK9.
// T.s(i)/T.e(i)/T.d(i): inicio, fin y duración de la escena i; T.f(i, a, b): avance 0→1 entre las fracciones a y b de la escena i.
window.CLIP = {
  topic: 'smdl', title: 'LDL en 1 minuto', sub: 'El receptor de LDL, la PCSK9 y la escalera de fármacos', color: '#F2C14E',
  scenes: [
    { say: 'El colesterol LDL y sus fármacos, en un minuto.', min: 3.5 },
    { say: 'El hígado limpia el LDL de la sangre con sus receptores: los atrapa, los mete a la célula y vuelven a la superficie por más.' },
    { say: 'Las estatinas bloquean la HMG CoA reductasa. El hepatocito fabrica menos colesterol y saca más receptores a la membrana.' },
    { say: 'La ezetimiba bloquea la proteína N P C uno L uno del intestino. Llega menos colesterol al hígado, que responde con más receptores.' },
    { say: 'La PCSK nueve se pega al receptor y hace que se destruya. Los anticuerpos contra ella la atrapan, y el receptor se recicla.' },
    { say: 'Es una escalera: estatina de alta intensidad. Si en cuatro a seis semanas no llega a la meta, ezetimiba. Y si aún no, inhibidor de PCSK nueve.' },
    { say: 'Perla: en muy alto riesgo, la meta tiene dos condiciones, LDL menor de cincuenta y cinco y bajar al menos la mitad. Y ojo: estatina con gemfibrozilo da rabdomiólisis; si necesitas fibrato, usa fenofibrato.', min: 8 }
  ],
  draw(t, T) {
    const { C, ease, inOut, lerp, clamp, text, pill, arrow, ring, gauge, titleCard, headline, bg, with_, rr } = MK;
    const g = MK.g;
    bg(t);
    const k = T.cur;
    if (k === 0) { titleCard(t - T.s(0), this.title, this.sub, this.color); return; }
    const heads = ['', 'El receptor de LDL limpia la sangre', 'Estatina: más receptores', 'Ezetimiba: menos colesterol del intestino', 'PCSK9 destruye al receptor', 'La escalera del LDL', 'Perla para el examen'];
    headline(heads[k], t - T.s(k), this.color);
    const zone = (...sc) => (k >= 5 || sc.includes(k) ? 1 : 0.42);

    // Sello de bloqueo con la píldora a un lado
    const stamp = (label, x, y, px, py, prog, size = 28) => {
      if (prog <= 0) return;
      const s = lerp(1.8, 1, ease(prog));
      g.save(); g.translate(x, y); g.rotate(-0.12); g.scale(s, s); g.globalAlpha *= clamp(prog * 3);
      g.strokeStyle = C.red; g.lineWidth = 13; g.lineCap = 'round';
      g.beginPath(); g.moveTo(-34, -34); g.lineTo(34, 34); g.moveTo(34, -34); g.lineTo(-34, 34); g.stroke(); g.restore();
      pill(label, px, py, prog, { fill: C.red, color: '#fff', size });
    };
    const ldl = (x, y, a = 1) => with_(a, () => {
      g.fillStyle = C.gold; g.beginPath(); g.arc(x, y, 19, 0, 7); g.fill();
      g.strokeStyle = C.orange; g.lineWidth = 5; g.beginPath(); g.arc(x, y, 19, 0, 7); g.stroke();
      g.fillStyle = '#FFE29A'; g.beginPath(); g.arc(x - 6, y - 6, 6, 0, 7); g.fill();
    });
    const receptor = (x, y, a = 1) => with_(a, () => {
      g.strokeStyle = C.cyan; g.lineWidth = 9; g.lineCap = 'round';
      g.beginPath(); g.moveTo(x, y + 26); g.lineTo(x, y); g.moveTo(x - 20, y - 22); g.quadraticCurveTo(x, y + 12, x + 20, y - 22); g.stroke();
    });
    const pcsk = (x, y, a = 1) => with_(a, () => {
      g.fillStyle = C.purple; g.beginPath(); g.moveTo(x, y - 17); g.lineTo(x + 17, y); g.lineTo(x, y + 17); g.lineTo(x - 17, y); g.closePath(); g.fill();
    });
    const antibody = (x, y, a = 1) => with_(a, () => {
      g.strokeStyle = C.green; g.lineWidth = 9; g.lineCap = 'round';
      g.beginPath(); g.moveTo(x, y + 40); g.lineTo(x, y + 8); g.lineTo(x - 18, y - 14); g.moveTo(x, y + 8); g.lineTo(x + 18, y - 14); g.stroke();
    });

    // Nivel de LDL en sangre
    let lv = 0.85;
    if (k >= 2) lv = lerp(0.85, 0.62, inOut(T.f(2, 0.5, 0.9)));
    if (k >= 3) lv = lerp(0.62, 0.48, inOut(T.f(3, 0.5, 0.9)));
    if (k >= 4) lv = lerp(0.48, 0.24, inOut(T.f(4, 0.65, 0.95)));

    // ── Sangre (banda superior) con LDL
    const BY0 = 190, BY1 = 420, MEM = 485;
    const a1 = ease(T.f(1, 0, 0.15));
    with_(a1, () => {
      g.fillStyle = 'rgba(224,74,95,0.16)'; rr(40, BY0, 1000, BY1 - BY0, 36); g.fill();
      g.strokeStyle = 'rgba(224,74,95,0.45)'; g.lineWidth = 3; rr(40, BY0, 1000, BY1 - BY0, 36); g.stroke();
      text('Sangre', 110, BY0 + 30, { size: 24, color: C.pink, weight: 700 });
      const m = 3 + lv * 14;
      for (let i = 0; i < 17; i++) {
        if (i >= m) break;
        const u = (t * 0.04 + ((i * 7) % 17) / 17) % 1;
        ldl(80 + u * 920, BY0 + 62 + ((i * 5) % 7) * 23 + Math.sin(t * 1.3 + i) * 5, clamp(m - i));
      }
    });

    // ── Hepatocito con receptores
    const HX0 = 360, HX1 = 1030, HY1 = 960;
    with_(zone(1, 2, 4), () => {
      const a = ease(T.f(1, 0, 0.2));
      if (a <= 0) return;
      with_(a, () => {
        g.fillStyle = '#4A2A30'; rr(HX0, MEM, HX1 - HX0, HY1 - MEM, 46); g.fill();
        g.strokeStyle = C.liver; g.lineWidth = 9; rr(HX0, MEM, HX1 - HX0, HY1 - MEM, 46); g.stroke();
        text('Hepatocito', 850, 922, { size: 26, color: C.ink2, weight: 700 });
      });
      // Receptores: base + los que agrega la estatina
      const base = [450, 640, 830, 960], extra = [545, 735];
      const extraA = ease(T.f(2, 0.55, 0.8));
      const all = base.map((x) => [x, 1]).concat(extra.map((x) => [x, extraA]));
      all.forEach(([x, ra], i) => {
        if (ra <= 0) return;
        let ry = MEM - 4, la = 0, ly = 0, lx = x;
        // Receptor de la demostración de PCSK9 (x = 960) durante la escena 4
        if (x === 960 && k === 4) {
          const bind = ease(T.f(4, 0.08, 0.3)), sink = inOut(T.f(4, 0.32, 0.5)), back = ease(T.f(4, 0.7, 0.85));
          if (back > 0) { receptor(x, MEM - 4, back); with_(ease(T.f(4, 0.72, 0.85)), () => text('Se recicla', x - 10, MEM + 60, { size: 22, color: C.cyan, weight: 700 })); return; }
          const yy = lerp(MEM - 4, 760, sink), fade = 1 - ease(T.f(4, 0.45, 0.55));
          receptor(x, yy, fade);
          pcsk(lerp(x - 70, x, bind), lerp(BY1 - 40, yy - 34, bind), fade * bind);
          return;
        }
        const u = (t * 0.2 + i * 0.27) % 1;
        if (u < 0.35) { const q = u / 0.35; la = 1; lx = lerp(x + 30, x, q); ly = lerp(BY1 - 50, MEM - 30, inOut(q)); }
        else if (u < 0.6) { const q = (u - 0.35) / 0.25; ry = lerp(MEM - 4, MEM + 120, inOut(q)); la = 1 - clamp((q - 0.6) / 0.4); ly = ry - 26; }
        else if (u < 0.85) ry = lerp(MEM + 120, MEM - 4, inOut((u - 0.6) / 0.25));
        receptor(x, ry, ra);
        if (la > 0 && t >= T.s(1) + 0.5) ldl(lx, ly, la * ra * a);
      });
      with_(ease(T.f(1, 0.25, 0.45)), () => text('Receptor de LDL', 520, MEM + 175, { size: 26, color: C.cyan, weight: 700 }));
      if (k === 1) ring(640, MEM, 60, t, { color: C.cyan });
      if (k >= 2) pill('+ receptores', 790, MEM + 220, ease(T.f(2, 0.62, 0.8)), { fill: C.cyan, size: 24 });
    });

    // ── Estatina: HMG-CoA reductasa (escena 2)
    with_(zone(2), () => {
      const a = ease(T.f(2, 0, 0.2));
      if (a <= 0) return;
      const EX = 530, EY = 900;
      pill('HMG-CoA reductasa', EX, EY, a, { fill: C.orange, size: 22 });
      // Colesterol que fabrica (se frena con la estatina)
      const on = 1 - ease(T.f(2, 0.35, 0.5)) * 0.85;
      for (let j = 0; j < 4; j++) { const u = (t * 0.5 + j / 4) % 1; with_(on * (1 - u), () => { g.fillStyle = '#FFE29A'; g.beginPath(); g.arc(EX + (j - 1.5) * 18, EY - 30 - u * 110, 7, 0, 7); g.fill(); }); }
      stamp('Estatina', EX, EY - 85, EX + 160, EY - 85, ease(T.f(2, 0.3, 0.45)));
    });

    // ── Intestino y ezetimiba (escena 3)
    const IX0 = 50, IX1 = 270, IY0 = 545, IY1 = 900;
    with_(zone(3), () => {
      const a = ease(T.f(3, 0, 0.2));
      if (a <= 0) return;
      with_(a, () => {
        g.fillStyle = '#3B2A55'; rr(IX0, IY0, IX1 - IX0, IY1 - IY0, 30); g.fill();
        // Vellosidades hacia la luz
        g.fillStyle = '#5B4580';
        for (let x = IX0 + 10; x < IX1 - 10; x += 40) { g.beginPath(); g.ellipse(x + 20, IY1, 18, 28, 0, 0, 7); g.fill(); }
        text('Intestino', (IX0 + IX1) / 2, IY0 - 30, { size: 26, color: C.ink2, weight: 700 });
        text('Luz', (IX0 + IX1) / 2, IY1 + 75, { size: 24, color: C.dim, weight: 600 });
      });
      const NX = 160, NY = IY1 - 8;
      with_(ease(T.f(3, 0.1, 0.25)), () => { g.fillStyle = C.purple; rr(NX - 22, NY - 20, 44, 40, 10); g.fill(); });
      pill('NPC1L1', NX, IY1 - 105, ease(T.f(3, 0.12, 0.3)), { fill: C.purple, color: '#fff', size: 22 });
      const blocked = ease(T.f(3, 0.35, 0.5));
      for (let j = 0; j < 5; j++) {
        const u = (t * 0.4 + j / 5) % 1;
        let x, y, al = a;
        if (u < 0.4) { x = NX + (j - 2) * 22 * (1 - u / 0.4); y = lerp(IY1 + 45, NY, u / 0.4); }
        else { const q = (u - 0.4) / 0.6; x = lerp(NX, IX1 + 60, q); y = lerp(NY - 20, 650, q); al *= 1 - blocked; }
        with_(al, () => { g.fillStyle = '#FFE29A'; g.beginPath(); g.arc(x, y, 7, 0, 7); g.fill(); });
      }
      arrow(IX1 - 20, 680, HX0 + 15, 640, T.f(3, 0.15, 0.35), { color: '#FFE29A', width: 5, dash: [8, 9], cy: 640 });
      stamp('Ezetimiba', NX, NY, NX, IY1 + 135, ease(T.f(3, 0.3, 0.45)));
    });

    // ── PCSK9 y anticuerpo (escena 4)
    with_(zone(4), () => {
      if (k < 4) return;
      const fp = ease(T.f(4, 0.05, 0.2));
      pill('PCSK9', 870, BY1 - 40, fp, { fill: C.purple, color: '#fff', size: 24 });
      with_(ease(T.f(4, 0.42, 0.55)) * (k === 4 ? 1 - ease(T.f(4, 0.68, 0.75)) : 0), () => {
        g.strokeStyle = C.purple; g.lineWidth = 5; g.setLineDash([8, 8]); g.beginPath(); g.arc(960, 770, 46, 0, 7); g.stroke(); g.setLineDash([]);
        text('Se destruye', 960, 840, { size: 22, color: C.purple, weight: 700 });
      });
      // Anticuerpos que atrapan PCSK9 libres
      const ab = ease(T.f(4, 0.55, 0.72));
      [[620, 345], [770, 345]].forEach(([x, y], i) => {
        pcsk(x, y - 30, fp);
        antibody(lerp(x - 140 + i * 40, x, ab), lerp(y + 60, y, ab), ab);
      });
      pill('iPCSK9 (anticuerpo)', 695, BY0 + 40, ab, { fill: C.green, size: 24 });
      if (k === 4) ring(695, 320, 70, t, { color: C.green });
    });

    // ── Medidor de LDL
    with_(ease(T.f(1, 0.3, 0.5)), () => gauge(170, 1200, lv, 'LDL en sangre', { r: 78 }));

    // ── Escalera (escena 5)
    if (k >= 5) {
      const steps = [['Estatina', C.orange, 'alta intensidad'], ['+ Ezetimiba', C.purple, ''], ['+ iPCSK9', C.green, '']];
      steps.forEach(([lab, col, sub], i) => {
        const p = ease(T.f(5, 0.08 + i * 0.25, 0.25 + i * 0.25));
        if (p <= 0) return;
        const x0 = 380 + i * 215, top = 1230 - i * 85, w = 205;
        with_(p, () => {
          g.fillStyle = col; rr(x0, lerp(1300, top, p), w, 1300 - lerp(1300, top, p), 14); g.fill();
          text(String(i + 1), x0 + w / 2, top + 36, { size: 34, color: '#241500', shadow: false });
          text(lab, x0 + w / 2, top - 32, { size: 28, color: C.ink });
        });
      });
      with_(ease(T.f(5, 0.75, 0.9)), () => text('sube cada 4–6 semanas si no llega a la meta', 595, 1005, { size: 24, color: C.ink2, weight: 600 }));
    }

    // ── Perla
    if (k === 6) {
      const a = ease(T.f(6, 0, 0.12));
      with_(a, () => {
        g.fillStyle = 'rgba(11,14,42,0.93)'; g.fillRect(0, 0, MK.W, MK.H);
        headline(heads[6], t - T.s(6), C.gold);
        text('Muy alto riesgo', 540, 330, { size: 44, color: C.ink2 });
        text('LDL <55  Y  ↓ ≥50%', 540, 430, { size: 72, color: C.gold });
        text('Si bajó de 160 a 60, todavía no cumple: agrega ezetimiba', 540, 540, { size: 32, color: C.ink2, weight: 600, maxW: 860 });
        with_(ease(T.f(6, 0.55, 0.68)), () => {
          text('Estatina + gemfibrozilo', 540, 800, { size: 60, color: C.red });
          text('= rabdomiólisis', 540, 880, { size: 48, color: C.red });
          text('Si necesitas un fibrato con la estatina, usa fenofibrato', 540, 980, { size: 32, color: C.ink2, weight: 600, maxW: 860 });
        });
      });
    }
  }
};
