// Arma index.html: une shell + CSS + contenido (como JSON) + app, y valida el contenido.
// Uso: node build.mjs                       → index.html con los 30 temas
//      node build.mjs --only sca,scc --out /ruta/prueba.html
//        → compila solo esos temas (más meta y diagnóstico) para probarlos sin depender del resto.
import { readFileSync, writeFileSync, readdirSync } from 'node:fs';

const src = new URL('./src/', import.meta.url);
const read = (p) => readFileSync(new URL(p, src), 'utf8');
const args = process.argv.slice(2);
const opt = (k) => { const i = args.indexOf(k); return i >= 0 ? args[i + 1] : null; };
const OUT = opt('--out');
const ONLY = opt('--only') ? new Set(opt('--only').split(',').map((x) => x.trim())) : null;
const keepTopic = (tid) => !ONLY || ['meta', 'diagnostico'].includes(tid) || ONLY.has(tid);

const C = { questions: [], cards: [], cases: [], lessons: {}, compares: {}, anims: {}, paths: {}, algos: {}, ecg: {}, frotis: {} };
for (const f of readdirSync(new URL('content/', src)).filter((f) => f.endsWith('.js')).sort()) {
  const part = (await import(new URL('content/' + f, src))).default;
  // Con --only se cargan solo esos temas, pero los comparadores de todos (una lección puede usar uno ajeno)
  if (!keepTopic(f.replace(/^\d+-|\.js$/g, ''))) { Object.assign(C.compares, part.compares || {}); continue; }
  for (const [k, v] of Object.entries(part)) {
    if (k === 'cards') {
      // Tarjetas: [frente, reverso] → objetos con id estable por tema
      const tid = f.replace(/^\d+-|\.js$/g, '');
      v.forEach(([fr, bk], i) => C.cards.push({ id: `${tid}-c${String(i + 1).padStart(2, '0')}`, topic: tid, f: fr, b: bk }));
    } else if (Array.isArray(v)) C[k] = (C[k] || []).concat(v);
    else if (typeof v === 'object' && ['lessons', 'compares', 'anims', 'paths', 'algos', 'ecg', 'frotis'].includes(k)) Object.assign(C[k], v);
    else C[k] = v;
  }
}

// Narración grabada: src/voice/<tema>.json → C.voice (mapa hash de frase → [inicio, fin] en audio/<tema>.mp3)
C.voice = {};
try { for (const f of readdirSync(new URL('voice/', src)).filter((f) => f.endsWith('.json'))) { const tid = f.replace(/\.json$/, ''); if (C.lessons[tid]) C.voice[tid] = JSON.parse(read('voice/' + f)); } } catch (e) { /* sin grabaciones */ }

// ───── Validación
const errs = [], warns = [];
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
for (const t of C.topics) if (!C.lessons[t.id] && keepTopic(t.id)) errs.push(`tema ${t.id} sin lección`);
// Algoritmos: cada opción lleva a un nodo que existe y cada caso, siguiendo su camino, llega a su hoja
for (const [aid, A] of Object.entries(C.algos)) {
  const N = A.nodes || {};
  if (!N[A.start]) errs.push(`algoritmo ${aid}: inicio ${A.start} no existe`);
  for (const tid of A.topics || []) if (!C.topics.some((t) => t.id === tid)) errs.push(`algoritmo ${aid}: tema ${tid} no existe`);
  for (const [nid, n] of Object.entries(N)) {
    if (!n.end && !(n.q && n.opts && n.opts.length >= 2)) errs.push(`algoritmo ${aid}: nodo ${nid} sin pregunta u opciones`);
    for (const o of n.opts || []) if (!N[o.go]) errs.push(`algoritmo ${aid}: ${nid} → ${o.go} no existe`);
  }
  (A.cases || []).forEach((cs, i) => {
    let cur = A.start, guard = 0;
    while (N[cur] && !N[cur].end && guard++ < 20) { const k = cs.path[cur]; if (k == null || !N[cur].opts[k]) { errs.push(`algoritmo ${aid}, caso ${i + 1}: sin respuesta en ${cur}`); return; } cur = N[cur].opts[k].go; }
    if (cur !== cs.end) errs.push(`algoritmo ${aid}, caso ${i + 1}: el camino llega a ${cur}, no a ${cs.end}`);
  });
}
for (const [eid, e] of [...Object.entries(C.ecg), ...Object.entries(C.frotis)]) {
  if (!e.name || !e.why) errs.push(`ECG ${eid}: falta nombre o explicación`);
  for (const tid of e.topics || []) if (!C.topics.some((t) => t.id === tid)) errs.push(`ECG ${eid}: tema ${tid} no existe`);
}
// “¿Dónde actúa?”: cada fármaco apunta a un nodo que existe y cada vía a temas que existen
for (const [pid, p] of Object.entries(C.paths)) {
  if (!p.title || !Array.isArray(p.nodes) || p.nodes.length < 3 || !Array.isArray(p.drugs) || p.drugs.length < 3) errs.push(`vía ${pid}: faltan título, nodos o fármacos`);
  for (const tid of p.topics || []) if (!C.topics.some((t) => t.id === tid)) errs.push(`vía ${pid}: tema ${tid} no existe`);
  for (const d of p.drugs || []) if (!(d.n >= 0 && d.n < p.nodes.length) || !d.d || !d.why) errs.push(`vía ${pid}: fármaco ${d.d} mal definido`);
}
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
// Escenas: scenes.js (utilidades + escenas base) y un archivo por animación en src/scenes/<id>.js
const sceneFiles = readdirSync(new URL('scenes/', src)).filter((f) => f.endsWith('.js')).sort()
  .filter((f) => !ONLY || Object.keys(C.anims).includes(f.replace(/\.js$/, '')));
const scenesSrc = [read('scenes.js'), ...sceneFiles.map((f) => `// ─── scenes/${f}\n` + read('scenes/' + f))].join('\n');
// Cada animación necesita un dibujo por paso
const SCENES = new Function('clamp', scenesSrc + '\nreturn SCENES;')((v, a, b) => Math.max(a, Math.min(b, v)));
for (const [id, a] of Object.entries(C.anims)) {
  if (!SCENES[id]) errs.push(`animación ${id}: falta SCENES.${id} (src/scenes/${id}.js)`);
  else if (SCENES[id].length !== a.steps.length) errs.push(`animación ${id}: ${a.steps.length} pasos y ${SCENES[id].length} dibujos`);
}

// Videos: capítulos → escenas con visual (v) y narración (say) escrita para leerse en voz alta
const VK = { title: ['t'], list: ['t', 'items'], big: ['t'], vs: [], flow: ['t', 'steps'], anim: ['id'], case: ['text'], quiz: ['q', 'opts'], mnemo: ['t', 'd'], tip: ['kind', 't'] };
const SYM = /[<>≥≤↑↓→←×±=%\/&*#@_~^|]|\[|\]/;
const vidWords = {};
for (const [tid, L] of Object.entries(C.lessons)) {
  if (!L.video) { errs.push(`${tid}: sin video`); continue; }
  if (!Array.isArray(L.video) || !L.video.length) { errs.push(`${tid}: video vacío`); continue; }
  let w = 0;
  L.video.forEach((ch, ci) => {
    const at = `${tid} video cap ${ci + 1}`;
    if (!ch.ch || !Array.isArray(ch.sc) || !ch.sc.length) { errs.push(`${at}: falta ch o sc`); return; }
    ch.sc.forEach((s, si) => {
      const here = `${at} escena ${si + 1}`, v = s.v;
      if (!v || !VK[v.k]) { errs.push(`${here}: visual desconocido ${v && v.k}`); return; }
      for (const f of VK[v.k]) if (v[f] == null || v[f] === '') errs.push(`${here}: ${v.k} sin ${f}`);
      if (!s.say) errs.push(`${here}: falta say`);
      else { if (SYM.test(s.say)) errs.push(`${here}: say con símbolos (${s.say.match(SYM)[0]}); escríbelo con palabras`); w += s.say.split(/\s+/).length; }
      if (v.k === 'anim') { const a = C.anims[v.id]; if (!a) errs.push(`${here}: animación ${v.id} no existe`); else if (!(v.step >= 0 && v.step < a.steps.length)) errs.push(`${here}: paso ${v.step} fuera de rango`); }
      if (v.k === 'vs') { if (v.cmp ? !C.compares[v.cmp] : !(v.a && v.b && Array.isArray(v.rows) && v.rows.length)) errs.push(`${here}: vs necesita cmp existente o a, b y rows`); }
      if (v.k === 'list' && !(Array.isArray(v.items) && v.items.length >= 1 && v.items.length <= 6)) errs.push(`${here}: list con 1 a 6 items`);
      if (v.k === 'flow' && !(Array.isArray(v.steps) && v.steps.length >= 2 && v.steps.length <= 6)) errs.push(`${here}: flow con 2 a 6 pasos`);
      if (v.k === 'quiz') { if (!(Array.isArray(v.opts) && v.opts.length >= 2 && v.opts.length <= 4 && v.a >= 0 && v.a < v.opts.length)) errs.push(`${here}: quiz con 2–4 opciones y a válido`); if (!s.exp) errs.push(`${here}: quiz sin exp`); else if (SYM.test(s.exp)) errs.push(`${here}: exp con símbolos`); else w += s.exp.split(/\s+/).length; }
      if (v.k === 'tip' && !['pearl', 'trap'].includes(v.kind)) errs.push(`${here}: tip.kind es pearl o trap`);
    });
  });
  vidWords[tid] = w;
}
const diag = C.questions.filter((q) => q.diag);
if (diag.length !== 30) errs.push(`el diagnóstico tiene ${diag.length} preguntas, no 30`);
for (const s of C.subjects) {
  const n = diag.filter((q) => q.subj === s.id).length;
  if (n !== 5) errs.push(`diagnóstico: ${s.id} tiene ${n} preguntas, no 5`);
}
for (const tid of Object.keys(C.lessons)) {
  const n = C.questions.filter((q) => q.topic === tid && !q.diag).length;
  const need = topics.get(tid)?.pri === 'alta' ? 20 : 15;
  if (n < need) errs.push(`${tid}: ${n} preguntas, mínimo ${need}`);
}
if (warns.length) console.warn('Avisos:\n- ' + warns.join('\n- '));
if (errs.length) {
  console.error('Errores de contenido:\n- ' + errs.join('\n- '));
  process.exit(1);
}

const json = JSON.stringify(C).replace(/</g, '\\u003c');
const html = read('shell.html')
  .replace('/*CSS*/', () => read('style.css'))
  .replace('/*JSON*/', () => json)
  .replace('/*APP*/', () => "(() => {\n'use strict';\n" + scenesSrc + '\n' + read('app.js') + '\n})();');
const out = OUT ? new URL('file://' + (OUT.startsWith('/') ? OUT : process.cwd() + '/' + OUT)) : new URL('./index.html', import.meta.url);
writeFileSync(out, html);
const vids = Object.values(vidWords), vmin = vids.reduce((a, w) => a + w / 150, 0);
console.log(`${out.pathname.split('/').pop()} listo · ${(html.length / 1024).toFixed(0)} KB · ${C.questions.length} preguntas · ${C.cards.length} tarjetas · ${C.cases.length} casos · ${Object.keys(C.lessons).length} lecciones · ${Object.keys(C.anims).length} animaciones · ${vids.length} videos (~${Math.round(vmin)} min)`);
if (ONLY) for (const [tid, w] of Object.entries(vidWords)) console.log(`  video ${tid}: ${w} palabras ≈ ${(w / 150).toFixed(1)} min`);
