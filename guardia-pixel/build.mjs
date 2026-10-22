// Arma index.html: une shell + CSS + contenido (como JSON) + app, y valida el contenido.
// Uso: node build.mjs
import { readFileSync, writeFileSync, readdirSync } from 'node:fs';

const src = new URL('./src/', import.meta.url);
const read = (p) => readFileSync(new URL(p, src), 'utf8');

const C = { questions: [], cards: [], cases: [], lessons: {}, compares: {}, anims: {} };
for (const f of readdirSync(new URL('content/', src)).filter((f) => f.endsWith('.js')).sort()) {
  const part = (await import(new URL('content/' + f, src))).default;
  for (const [k, v] of Object.entries(part)) {
    if (k === 'cards') {
      // Tarjetas: [frente, reverso] → objetos con id estable por tema
      const tid = f.replace(/^\d+-|\.js$/g, '');
      v.forEach(([fr, bk], i) => C.cards.push({ id: `${tid}-c${String(i + 1).padStart(2, '0')}`, topic: tid, f: fr, b: bk }));
    } else if (Array.isArray(v)) C[k] = (C[k] || []).concat(v);
    else if (typeof v === 'object' && ['lessons', 'compares', 'anims'].includes(k)) Object.assign(C[k], v);
    else C[k] = v;
  }
}

// ───── Validación
const errs = [];
const topics = new Map(C.topics.map((t) => [t.id, t]));
const seen = new Set();
for (const q of C.questions) {
  if (seen.has(q.id)) errs.push(`id repetido: ${q.id}`);
  seen.add(q.id);
  const t = topics.get(q.topic);
  if (!t) errs.push(`${q.id}: tema ${q.topic} no existe`);
  else if (t.subj !== q.subj) errs.push(`${q.id}: materia ${q.subj} ≠ ${t.subj}`);
  if (!(q.ans >= 0 && q.ans < q.opts.length)) errs.push(`${q.id}: ans fuera de rango`);
  if (!q.why || q.why.length !== q.opts.length) errs.push(`${q.id}: why tiene ${q.why?.length} y opts ${q.opts.length}`);
  q.why?.forEach((w, i) => { if (i !== q.ans && !w) errs.push(`${q.id}: falta why[${i}]`); });
  if (q.why && q.why[q.ans]) errs.push(`${q.id}: why[${q.ans}] debe ir vacío (es la correcta); revisa el orden`);
  if (!q.exp || !q.stem || !q.ref) errs.push(`${q.id}: falta stem/exp/ref`);
  if (![1, 2, 3].includes(q.dif)) errs.push(`${q.id}: dif inválida`);
}
for (const tid of Object.keys(C.lessons)) {
  if (!topics.has(tid)) errs.push(`lección de tema inexistente: ${tid}`);
  const L = C.lessons[tid];
  for (const cid of L.compare || []) if (!C.compares[cid]) errs.push(`${tid}: comparador ${cid} no existe`);
  if (L.anim && !C.anims[L.anim]) errs.push(`${tid}: animación ${L.anim} no existe`);
}
for (const t of C.topics) if (!C.lessons[t.id]) errs.push(`tema ${t.id} sin lección`);
for (const [tid, L] of Object.entries(C.lessons)) {
  if (!Array.isArray(L.nn) || typeof L.yt !== 'string' || !L.yt) errs.push(`${tid}: faltan videos (nn/yt)`);
  for (const k of ['hook', 'sections', 'mnemo', 'pearl', 'trap', 'guide', 'refs']) if (!L[k]) errs.push(`${tid}: falta ${k}`);
}
for (const cs of C.cases) {
  if (!topics.has(cs.topic)) errs.push(`${cs.id}: tema no existe`);
  cs.nodes.forEach((n, i) => {
    if (!n.A || !n.B) errs.push(`${cs.id} nodo ${i}: faltan opciones`);
    else if (n.A.ok === n.B.ok) errs.push(`${cs.id} nodo ${i}: debe haber exactamente una opción correcta`);
    if (!n.why || !n.q) errs.push(`${cs.id} nodo ${i}: falta q/why`);
  });
}
// Cada animación necesita un dibujo por paso en scenes.js
const SCENES = new Function(read('scenes.js') + '\nreturn SCENES;')();
for (const [id, a] of Object.entries(C.anims)) {
  if (!SCENES[id]) errs.push(`animación ${id}: falta SCENES.${id} en scenes.js`);
  else if (SCENES[id].length !== a.steps.length) errs.push(`animación ${id}: ${a.steps.length} pasos y ${SCENES[id].length} dibujos`);
}
const diag = C.questions.filter((q) => q.diag);
if (diag.length !== 30) errs.push(`el diagnóstico tiene ${diag.length} preguntas, no 30`);
for (const s of C.subjects) {
  const n = diag.filter((q) => q.subj === s.id).length;
  if (n !== 5) errs.push(`diagnóstico: ${s.id} tiene ${n} preguntas, no 5`);
}
for (const tid of Object.keys(C.lessons)) {
  const n = C.questions.filter((q) => q.topic === tid && !q.diag).length;
  const need = topics.get(tid)?.pri === 'alta' ? 15 : 10;
  if (n < need) errs.push(`${tid}: ${n} preguntas, mínimo ${need}`);
}
if (errs.length) {
  console.error('Errores de contenido:\n- ' + errs.join('\n- '));
  process.exit(1);
}

const json = JSON.stringify(C).replace(/</g, '\\u003c');
const html = read('shell.html')
  .replace('/*CSS*/', () => read('style.css'))
  .replace('/*JSON*/', () => json)
  .replace('/*APP*/', () => "(() => {\n'use strict';\n" + read('scenes.js') + '\n' + read('app.js') + '\n})();');
writeFileSync(new URL('./index.html', import.meta.url), html);
console.log(`index.html listo · ${(html.length / 1024).toFixed(0)} KB · ${C.questions.length} preguntas · ${C.cards.length} tarjetas · ${C.cases.length} casos · ${Object.keys(C.lessons).length} lecciones`);
