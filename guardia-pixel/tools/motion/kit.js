// Kit de motion graphics para los clips “en 1 minuto” (se ejecuta en el navegador; tools/motion/render.cjs lo usa).
// Lienzo de 1080 × 1350 (4:5, como el reproductor). Todo se dibuja en función del tiempo, sin estado:
// draw(t) debe dar siempre el mismo cuadro para el mismo t.
(() => {
  const W = 1080, H = 1350;
  const C = {
    bg: '#0B0E2A', bg2: '#141A42', ink: '#F4F1FF', ink2: '#C9CEFF', dim: '#8790CC', gold: '#F2C14E', gold2: '#FFE29A',
    red: '#FF5470', pink: '#FF8FA3', blue: '#4DB8FF', cyan: '#62E3FF', green: '#62E38C', purple: '#B48CFF', orange: '#FF9B3D',
    organ: '#C2484E', liver: '#A9473A', lung: '#F28FA6', blood: '#E04A5F'
  };
  const clamp = (x, a = 0, b = 1) => Math.max(a, Math.min(b, x));
  const lerp = (a, b, p) => a + (b - a) * p;
  // p(t, a, b): avance 0→1 entre los segundos a y b
  const p = (t, a, b) => clamp((t - a) / Math.max(1e-6, b - a));
  const ease = (x) => 1 - Math.pow(1 - clamp(x), 3);
  const inOut = (x) => { x = clamp(x); return x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2; };
  const pop = (x) => { x = clamp(x); const c1 = 1.70158, c3 = c1 + 1; return 1 + c3 * Math.pow(x - 1, 3) + c1 * Math.pow(x - 1, 2); };

  let g = null;
  const font = (px, w = 700, fam = 'Inter Display') => `${w} ${px}px "${fam}", Inter, "DejaVu Sans", sans-serif`;
  function with_(alpha, fn) { g.save(); g.globalAlpha *= clamp(alpha); fn(); g.restore(); }
  function rr(x, y, w, h, r) { g.beginPath(); g.moveTo(x + r, y); g.arcTo(x + w, y, x + w, y + h, r); g.arcTo(x + w, y + h, x, y + h, r); g.arcTo(x, y + h, x, y, r); g.arcTo(x, y, x + w, y, r); g.closePath(); }

  // Fondo con retícula tenue que respira
  function bg(t) {
    const gr = g.createLinearGradient(0, 0, 0, H); gr.addColorStop(0, C.bg2); gr.addColorStop(1, C.bg);
    g.fillStyle = gr; g.fillRect(0, 0, W, H);
    g.strokeStyle = 'rgba(201,206,255,0.05)'; g.lineWidth = 1;
    const off = (t * 12) % 60;
    for (let x = -60 + off; x < W; x += 60) { g.beginPath(); g.moveTo(x, 0); g.lineTo(x, H); g.stroke(); }
    for (let y = -60 + off; y < H; y += 60) { g.beginPath(); g.moveTo(0, y); g.lineTo(W, y); g.stroke(); }
  }
  // Texto centrado con ajuste de líneas
  function text(str, x, y, o = {}) {
    const size = o.size || 44, maxW = o.maxW || 900, lh = o.lh || size * 1.18;
    g.font = font(size, o.weight || 700, o.fam); g.fillStyle = o.color || C.ink; g.textAlign = o.align || 'center'; g.textBaseline = 'middle';
    const words = String(str).split(' '), lines = []; let cur = '';
    for (const w of words) { const tryL = cur ? cur + ' ' + w : w; if (g.measureText(tryL).width > maxW && cur) { lines.push(cur); cur = w; } else cur = tryL; }
    if (cur) lines.push(cur);
    const y0 = y - ((lines.length - 1) * lh) / 2;
    lines.forEach((l, i) => { if (o.shadow !== false) { g.fillStyle = 'rgba(0,0,0,0.45)'; g.fillText(l, x + 3, y0 + i * lh + 3); } g.fillStyle = o.color || C.ink; g.fillText(l, x, y0 + i * lh); });
    return lines.length * lh;
  }
  // Etiqueta tipo píldora (moléculas, hormonas, fármacos)
  function pill(label, x, y, prog, o = {}) {
    if (prog <= 0) return;
    const s = o.noPop ? 1 : pop(prog), size = o.size || 34;
    g.save(); g.translate(x, y); g.scale(s, s); g.globalAlpha *= clamp(prog * 2);
    g.font = font(size, 700); const w = g.measureText(label).width + size * 1.1, h = size * 1.7;
    rr(-w / 2, -h / 2, w, h, h / 2); g.fillStyle = o.fill || C.gold; g.fill();
    g.lineWidth = 4; g.strokeStyle = 'rgba(0,0,0,0.35)'; g.stroke();
    g.fillStyle = o.color || '#241500'; g.textAlign = 'center'; g.textBaseline = 'middle'; g.fillText(label, 0, 2);
    g.restore();
  }
  // Flecha que se dibuja sola (prog 0→1), recta o curva (con control cx, cy)
  function arrow(x1, y1, x2, y2, prog, o = {}) {
    if (prog <= 0) return;
    const col = o.color || C.ink2, lw = o.width || 8, cx = o.cx ?? (x1 + x2) / 2, cy = o.cy ?? (y1 + y2) / 2;
    const pt = (u) => [(1 - u) * (1 - u) * x1 + 2 * (1 - u) * u * cx + u * u * x2, (1 - u) * (1 - u) * y1 + 2 * (1 - u) * u * cy + u * u * y2];
    const e = clamp(prog); g.strokeStyle = col; g.lineWidth = lw; g.lineCap = 'round'; g.setLineDash(o.dash || []);
    g.beginPath(); for (let i = 0; i <= 40; i++) { const [x, y] = pt((i / 40) * e); if (i) g.lineTo(x, y); else g.moveTo(x, y); } g.stroke(); g.setLineDash([]);
    if (e > 0.05) { const [ax, ay] = pt(e), [bx, by] = pt(Math.max(0, e - 0.04)), ang = Math.atan2(ay - by, ax - bx), hs = lw * 2.6;
      g.fillStyle = col; g.beginPath(); g.moveTo(ax + Math.cos(ang) * hs * 0.6, ay + Math.sin(ang) * hs * 0.6); g.lineTo(ax - Math.cos(ang - 0.5) * hs, ay - Math.sin(ang - 0.5) * hs); g.lineTo(ax - Math.cos(ang + 0.5) * hs, ay - Math.sin(ang + 0.5) * hs); g.closePath(); g.fill(); }
  }
  // Partículas que viajan por un camino (lista de puntos), en bucle
  function flow(pts, t, o = {}) {
    const n = o.n || 10, speed = o.speed || 0.25, col = o.color || C.blood, r = o.r || 7;
    const segs = []; let L = 0;
    for (let i = 1; i < pts.length; i++) { const d = Math.hypot(pts[i][0] - pts[i - 1][0], pts[i][1] - pts[i - 1][1]); segs.push(d); L += d; }
    for (let k = 0; k < n; k++) {
      let u = ((t * speed + k / n) % 1) * L, i = 0;
      while (i < segs.length - 1 && u > segs[i]) { u -= segs[i]; i++; }
      const f = u / segs[i], x = lerp(pts[i][0], pts[i + 1][0], f), y = lerp(pts[i][1], pts[i + 1][1], f);
      const a0 = g.globalAlpha; g.fillStyle = col; g.globalAlpha = o.alpha ?? a0; g.beginPath(); g.arc(x, y, r, 0, Math.PI * 2); g.fill(); g.globalAlpha = a0;
    }
  }
  // Anillo que pulsa para señalar algo
  function ring(x, y, r, t, o = {}) {
    const ph = (t * (o.speed || 1.2)) % 1;
    const a0 = g.globalAlpha; g.strokeStyle = o.color || C.gold; g.lineWidth = 6 * (1 - ph); g.globalAlpha = a0 * (1 - ph);
    g.beginPath(); g.arc(x, y, r * (1 + ph * 0.5), 0, Math.PI * 2); g.stroke(); g.globalAlpha = a0;
  }
  // Sello rojo de bloqueo con el nombre del fármaco
  function block(label, x, y, prog) {
    if (prog <= 0) return;
    const s = lerp(1.8, 1, ease(prog)), a = clamp(prog * 3);
    g.save(); g.translate(x, y); g.rotate(-0.12); g.scale(s, s); g.globalAlpha *= a;
    g.strokeStyle = C.red; g.lineWidth = 14; g.lineCap = 'round';
    g.beginPath(); g.moveTo(-42, -42); g.lineTo(42, 42); g.moveTo(42, -42); g.lineTo(-42, 42); g.stroke();
    g.restore();
    pill(label, x, y + 80, prog, { fill: C.red, color: '#fff', size: 30 });
  }
  // Velocímetro (presión, potasio, lo que sea): value 0→1
  function gauge(x, y, value, label, o = {}) {
    const r = o.r || 110;
    g.lineWidth = 22; g.lineCap = 'round';
    g.strokeStyle = 'rgba(201,206,255,0.18)'; g.beginPath(); g.arc(x, y, r, Math.PI, 2 * Math.PI); g.stroke();
    const col = value > 0.66 ? C.red : value > 0.4 ? C.gold : C.green;
    g.strokeStyle = col; g.beginPath(); g.arc(x, y, r, Math.PI, Math.PI + Math.PI * clamp(value)); g.stroke();
    const a = Math.PI + Math.PI * clamp(value);
    g.strokeStyle = C.ink; g.lineWidth = 8; g.beginPath(); g.moveTo(x, y); g.lineTo(x + Math.cos(a) * (r - 30), y + Math.sin(a) * (r - 30)); g.stroke();
    g.fillStyle = C.ink; g.beginPath(); g.arc(x, y, 12, 0, Math.PI * 2); g.fill();
    if (label) text(label, x, y + 50, { size: 30, color: C.ink2 });
  }

  // ── Órganos (vectoriales, estilizados). s = escala, a = aparición 0→1
  function organ(fn, x, y, s, a, extra) { if (a <= 0) return; g.save(); g.translate(x, y); const k = s * lerp(0.6, 1, pop(a)); g.scale(k, k); g.globalAlpha *= clamp(a * 2); fn(extra || {}); g.restore(); }
  const shapes = {
    kidney() {
      g.fillStyle = C.organ; g.beginPath(); g.moveTo(0, -110);
      g.bezierCurveTo(90, -120, 110, -20, 80, 40); g.bezierCurveTo(60, 100, 0, 120, -30, 90);
      g.bezierCurveTo(-20, 50, -40, 20, -45, 0); g.bezierCurveTo(-50, -20, -30, -40, -30, -60); g.bezierCurveTo(-50, -100, -30, -110, 0, -110); g.fill();
      g.fillStyle = 'rgba(255,255,255,0.15)'; g.beginPath(); g.ellipse(30, -50, 30, 18, -0.6, 0, Math.PI * 2); g.fill();
      g.strokeStyle = '#7A2E44'; g.lineWidth = 10; g.beginPath(); g.moveTo(-40, 0); g.lineTo(-110, -10); g.moveTo(-40, 20); g.lineTo(-110, 40); g.stroke();
    },
    adrenal() { g.fillStyle = C.gold; g.beginPath(); g.moveTo(-60, 0); g.quadraticCurveTo(0, -80, 60, 0); g.quadraticCurveTo(0, -20, -60, 0); g.fill(); },
    liver() {
      g.fillStyle = C.liver; g.beginPath(); g.moveTo(-150, -30);
      g.bezierCurveTo(-120, -110, 60, -110, 150, -70); g.bezierCurveTo(170, -40, 120, 10, 40, 60); g.bezierCurveTo(-20, 95, -120, 70, -150, -30); g.fill();
      g.fillStyle = 'rgba(255,255,255,0.12)'; g.beginPath(); g.ellipse(-30, -55, 70, 20, -0.15, 0, Math.PI * 2); g.fill();
    },
    lungs() {
      g.strokeStyle = '#E8D9E0'; g.lineWidth = 14; g.lineCap = 'round'; g.beginPath(); g.moveTo(0, -120); g.lineTo(0, -40); g.moveTo(0, -40); g.lineTo(-40, -10); g.moveTo(0, -40); g.lineTo(40, -10); g.stroke();
      g.fillStyle = C.lung;
      g.beginPath(); g.moveTo(-30, -70); g.bezierCurveTo(-120, -80, -140, 60, -110, 110); g.bezierCurveTo(-80, 130, -30, 110, -25, 60); g.closePath(); g.fill();
      g.beginPath(); g.moveTo(30, -70); g.bezierCurveTo(120, -80, 140, 60, 110, 110); g.bezierCurveTo(80, 130, 30, 110, 25, 60); g.closePath(); g.fill();
    },
    heart() {
      g.fillStyle = C.red; g.beginPath(); g.moveTo(0, 90); g.bezierCurveTo(-130, 0, -90, -110, 0, -50); g.bezierCurveTo(90, -110, 130, 0, 0, 90); g.fill();
      g.fillStyle = 'rgba(255,255,255,0.18)'; g.beginPath(); g.ellipse(-45, -40, 22, 14, -0.6, 0, Math.PI * 2); g.fill();
    }
  };
  // Arteriola: tubo horizontal; constrict 0 (abierta) → 1 (cerrada a la mitad); con sangre fluyendo
  function vessel(x, y, len, a, constrict, t) {
    if (a <= 0) return;
    with_(clamp(a * 2), () => {
      const r = lerp(46, 22, clamp(constrict)), w = 14;
      g.fillStyle = '#3A1220'; rr(x - len / 2, y - r, len, 2 * r, r); g.fill();
      g.fillStyle = C.organ; g.fillRect(x - len / 2, y - r - w, len, w); g.fillRect(x - len / 2, y + r, len, w);
      for (let k = 0; k < 9; k++) { const u = ((t * 0.35 + k / 9) % 1); g.fillStyle = C.blood; g.beginPath(); g.ellipse(x - len / 2 + u * len, y + Math.sin(k * 2.1) * r * 0.45, 14, 9, 0, 0, Math.PI * 2); g.fill(); }
    });
  }
  // Túbulo colector vertical con capilar al lado; na = sodio que sale al capilar, k = potasio que entra al túbulo
  function duct(x, y, h, a, t, on) {
    if (a <= 0) return;
    with_(clamp(a * 2), () => {
      g.fillStyle = '#2A3170'; rr(x - 45, y - h / 2, 90, h, 30); g.fill();
      g.fillStyle = '#5C6BC0'; g.fillRect(x - 45, y - h / 2, 12, h); g.fillRect(x + 33, y - h / 2, 12, h);
      g.fillStyle = '#3A1220'; rr(x + 110, y - h / 2, 70, h, 30); g.fill();
      text('Túbulo', x, y + h / 2 + 34, { size: 26, color: C.dim, weight: 600 }); text('Sangre', x + 145, y + h / 2 + 34, { size: 26, color: C.dim, weight: 600 });
      if (on > 0) for (let k = 0; k < 6; k++) {
        const u = (t * 0.5 + k / 6) % 1, yy = y - h / 2 + 30 + ((k * 97) % (h - 60));
        with_(on, () => { g.fillStyle = C.gold; g.beginPath(); g.arc(lerp(x, x + 145, u), yy, 11, 0, 7); g.fill(); g.fillStyle = C.purple; g.beginPath(); g.arc(lerp(x + 145, x, u), yy + 26, 9, 0, 7); g.fill(); });
      }
    });
  }

  // Cuadro de título y tarjeta final
  function titleCard(t, title, sub, color) {
    const a = ease(p(t, 0, 0.6));
    with_(a, () => {
      g.fillStyle = color || C.gold; rr(W / 2 - 110, H / 2 - 260 - (1 - a) * 40, 220, 14, 7); g.fill();
      text(title, W / 2, H / 2 - 120, { size: 92, maxW: 900 });
      if (sub) text(sub, W / 2, H / 2 + 40, { size: 40, color: C.ink2, weight: 600, maxW: 860 });
    });
  }
  // Barra superior con la idea de la escena
  function headline(str, t, color) {
    const a = ease(p(t, 0, 0.45));
    with_(a, () => {
      g.font = font(40, 700); const w = Math.min(980, g.measureText(str).width + 70);
      rr(W / 2 - w / 2, 70 - (1 - a) * 30, w, 76, 38); g.fillStyle = 'rgba(20,26,66,0.92)'; g.fill();
      g.lineWidth = 4; g.strokeStyle = color || C.gold; g.stroke();
      text(str, W / 2, 108 - (1 - a) * 30, { size: 40, maxW: 940, shadow: false });
    });
  }

  window.MK = { W, H, C, clamp, lerp, p, ease, inOut, pop, text, pill, arrow, flow, ring, block, gauge, organ, shapes, vessel, duct, titleCard, headline, bg, with_, rr,
    use(ctx) { g = ctx; }, get g() { return g; } };
})();
