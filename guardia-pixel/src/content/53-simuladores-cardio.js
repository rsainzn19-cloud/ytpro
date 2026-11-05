// Simuladores de cardio por tema (pestaña Taller): ECG de 12 derivaciones y soplos que cambian al mover un control.
// ecgsim.<tema> = { title, scen: [{ id, l, sub, slider, stages: [{ l, P?, m?, hl?, t }] }] }
//   P: parámetros globales del trazo (rate, rhythm 'sinus'|'af', pr, qrsW, ext, pW, tMul); m: cambios por derivación
//   (llave con varias derivaciones separadas por coma): st, t, tAdd, q, rMul, s, r2, s2, p, pt (componente terminal de la P).
// hssim.<tema> = { title, scen: [{ id, l, sub, foco, slider?, man?, stages: [{ l, foco?, s, f: [hallazgos], t }] }] }
//   s: s1, a2, p2, split (s), para, fixed, s3, s4, ec [amplitud] (clic de eyección), ecR (clic pulmonar: baja al inspirar),
//   os [tiempo, amplitud] (chasquido), mur: [[tipo, amplitud, inicio, fin, pico]] con tiempos dentro del ciclo de 0.83 s
//   (S1 en 0, S2 en 0.32). man: multiplicadores del soplo por maniobra (insp, valsalva, cuclillas, handgrip).
const PRE = ['V1', 'V2', 'V3', 'V4', 'V5', 'V6'];

// IAM con elevación del ST: la misma secuencia en el tiempo para cada territorio
function iam(terr, recip, extra) {
  const k = (w, f) => Object.fromEntries(Object.entries(w).map(([l, x]) => [l, f(x)]));
  return [
    { l: 'Antes de ocluirse', m: {}, t: 'Trazo normal: ST en la línea de base y T positivas.' },
    { l: 'Minutos: T hiperagudas', P: { rate: 88 }, m: k(terr, (x) => ({ tAdd: 0.55 * x / 0.3, st: 0.04 })), hl: Object.keys(terr),
      t: '<b>Lo primero que cambia es la T</b>: alta, ancha y simétrica en el territorio, antes que el ST. Es fácil de pasar por alto: repite el ECG cada 15–30 min si el dolor sigue.' },
    { l: '1–6 h: ST elevado + espejo', P: { rate: 92 }, m: { ...k(terr, (x) => ({ st: x, tAdd: 0.25 })), ...k(recip, (x) => ({ st: -x, t: -0.05 })) }, hl: [...Object.keys(terr), ...Object.keys(recip)],
      t: '<b>IAMCEST</b>: ST elevado ≥1 mm en 2 derivaciones contiguas (≥2 mm en V2–V3 en hombres) con <b>infradesnivel en espejo</b> en las opuestas. Es el momento de reperfundir: ICP en ≤120 min o fibrinólisis en ≤10.' },
    { l: '6–24 h: aparecen las Q', P: { rate: 88 }, m: { ...k(terr, (x) => ({ st: x * 0.8, tAdd: 0.1, q: -0.32, rMul: 0.45 })), ...k(recip, (x) => ({ st: -x * 0.6 })) }, hl: Object.keys(terr),
      t: 'La <b>onda Q patológica</b> (≥40 ms o ≥25 % de la R) y la pérdida de R indican necrosis. El ST todavía está arriba: si el dolor dura &lt;12 h, aún se reperfunde.' },
    { l: 'Días: el ST baja y la T se invierte', P: { rate: 78 }, m: k(terr, () => ({ st: 0.06, q: -0.32, rMul: 0.35, t: -0.32 })), hl: Object.keys(terr),
      t: 'El ST regresa casi a la base y la <b>T se invierte</b>, profunda y simétrica. Si el ST sigue elevado semanas después, piensa en <b>aneurisma ventricular</b>.' },
    { l: 'Semanas: queda la Q', P: { rate: 72 }, m: k(terr, () => ({ q: -0.32, rMul: 0.35, t: -0.08 })), hl: Object.keys(terr),
      t: 'La <b>Q se queda</b> como cicatriz del infarto (IAM antiguo); la T puede normalizarse. Q en un ECG de rutina = infarto previo aunque el paciente no lo recuerde.' }
  ].map((s) => (extra ? { ...s, t: s.t + (s.l.startsWith('1–6') ? ' ' + extra : '') } : s));
}

// Infarto posterior: en V1–V3 todo se ve “al revés” (espejo de la pared posterior)
const POST = [
  { l: 'Antes de ocluirse', m: {}, t: 'Trazo normal. En V1–V3 la R es pequeña y la S profunda.' },
  { l: 'Minutos a horas: infra en V1–V3', P: { rate: 90 }, m: { V1: { st: -0.22, t: 0.3 }, V2: { st: -0.28, t: 0.42 }, V3: { st: -0.2, t: 0.38 } }, hl: ['V1', 'V2', 'V3'],
    t: '<b>Infradesnivel horizontal en V1–V3 con T positivas</b>: no es isquemia subendocárdica, es el espejo de una elevación posterior. Pide <b>V7–V9</b>: ST ≥0.5 mm ahí = IAMCEST posterior y se reperfunde.' },
  { l: 'Horas: crece la R en V1–V2', P: { rate: 86 }, m: { V1: { rMul: 2.6, s: -0.4, st: -0.2, t: 0.35 }, V2: { rMul: 2.2, s: -0.6, st: -0.24, t: 0.45 }, V3: { rMul: 1.3, s: -0.5, st: -0.16, t: 0.4 } }, hl: ['V1', 'V2', 'V3'],
    t: 'La <b>R alta en V1–V2</b> (R/S &gt;1) es la “Q” posterior vista en espejo. Suele acompañar a un infarto inferior o lateral (circunfleja o coronaria derecha).' },
  { l: 'Semanas: R alta que se queda', P: { rate: 72 }, m: { V1: { rMul: 2.6, s: -0.4, t: 0.25 }, V2: { rMul: 2.2, s: -0.6, t: 0.35 } }, hl: ['V1', 'V2'],
    t: 'Queda la R alta en V1–V2. Diferencial de R alta en V1: infarto posterior, hipertrofia del VD, bloqueo de rama derecha, WPW y dextrocardia.' }
];

// Prueba de esfuerzo (Bruce): la FC sube por etapa; el ST depende de las coronarias
const BRUCE = [['Reposo', 72], ['Etapa 1 (3 min)', 102], ['Etapa 2 (6 min)', 124], ['Etapa 3 (9 min)', 146], ['Etapa 4 (12 min)', 164], ['Recuperación 3 min', 112], ['Recuperación 6 min', 88]];
const esfuerzo = (st, txt, hl, aVR) => BRUCE.map(([l, rate], i) => ({ l, P: { rate }, hl: st[i] ? hl : [],
  m: st[i] ? { ...Object.fromEntries(hl.filter((x) => x !== 'aVR').map((x) => [x, { st: st[i], t: st[i] < -0.15 ? -0.05 : undefined }])), ...(aVR && st[i] < -0.15 ? { aVR: { st: 0.16 } } : {}) } : {},
  t: txt[i] }));

export default {
  ecgsim: {
    sca: {
      title: 'Simulador de ECG · Infarto en el tiempo',
      scen: [
        { id: 'da', l: 'Descendente anterior', sub: 'Pared anterior', slider: 'Tiempo desde la oclusión',
          stages: iam({ V1: 0.16, V2: 0.36, V3: 0.4, V4: 0.32, V5: 0.12 }, { II: 0.08, III: 0.12, aVF: 0.1 }, 'Territorio <b>V1–V4</b> = descendente anterior, el que más músculo se lleva.') },
        { id: 'cd', l: 'Coronaria derecha', sub: 'Pared inferior', slider: 'Tiempo desde la oclusión',
          stages: iam({ II: 0.22, III: 0.32, aVF: 0.27 }, { I: 0.06, aVL: 0.22 }, 'Inferior (<b>DII, DIII, aVF</b>) con DIII &gt; DII = coronaria derecha. Pide <b>V4R</b>: si hay elevación, es infarto del VD → líquidos y nada de nitratos.') },
        { id: 'cx', l: 'Circunfleja', sub: 'Pared lateral', slider: 'Tiempo desde la oclusión',
          stages: iam({ I: 0.26, aVL: 0.3, V5: 0.24, V6: 0.24 }, { III: 0.26, aVF: 0.1 }, 'Lateral (<b>DI, aVL, V5, V6</b>) con espejo en DIII = circunfleja o diagonal. La circunfleja es la que más “se esconde” en el ECG.') },
        { id: 'post', l: 'Posterior', sub: 'Se ve en espejo en V1–V3', slider: 'Tiempo desde la oclusión', stages: POST }
      ]
    },
    scc: {
      title: 'Simulador de ECG · Prueba de esfuerzo',
      scen: [
        { id: 'sana', l: 'Coronarias sanas', sub: 'Prueba negativa', slider: 'Etapa del protocolo de Bruce',
          stages: BRUCE.map(([l, rate], i) => ({ l, P: { rate }, m: i === 3 || i === 4 ? { II: { st: -0.07, stUp: true }, V5: { st: -0.08, stUp: true }, V6: { st: -0.07, stUp: true } } : {}, hl: i === 3 || i === 4 ? ['II', 'V5', 'V6'] : [],
            t: ['Reposo normal. La prueba de esfuerzo necesita un ECG basal interpretable (sin BRI, marcapasos, preexcitación ni digoxina).', 'La frecuencia sube sin cambios del ST.', 'Sin cambios. La meta es llegar al 85 % de la FC máxima (220 − edad).', 'Infradesnivel del punto J <b>ascendente rápido</b>: es normal con la taquicardia, no cuenta como isquemia.', 'FC máxima alcanzada, sin angina y sin infradesnivel horizontal: <b>prueba negativa</b> (y suficiente).', 'Recuperación: el ST ya está en la base.', 'Todo normal. Buen pronóstico.'][i] })) },
        { id: 'unvaso', l: 'Estenosis significativa', sub: 'Un vaso', slider: 'Etapa del protocolo de Bruce',
          stages: esfuerzo([0, 0, -0.08, -0.13, -0.19, -0.1, 0], [
            'Reposo normal: en el síndrome coronario crónico el ECG basal casi siempre es normal.',
            'Sin cambios todavía: la estenosis no limita el flujo a frecuencias bajas.',
            'Empieza el <b>infradesnivel horizontal</b> en DII, aVF, V4–V6.',
            '≥1 mm horizontal o descendente, 80 ms después del punto J = <b>prueba positiva</b> para isquemia. El infradesnivel no localiza la arteria.',
            'Infradesnivel ~2 mm con angina: se detiene la prueba.',
            'En la recuperación el ST regresa poco a poco.',
            'Normal otra vez. Siguiente paso: tratamiento médico óptimo; revascularizar si persisten los síntomas.'], ['II', 'aVF', 'V4', 'V5', 'V6']) },
        { id: 'tronco', l: 'Tronco común o 3 vasos', sub: 'Alto riesgo', slider: 'Etapa del protocolo de Bruce',
          stages: esfuerzo([0, -0.12, -0.22, -0.3, -0.3, -0.24, -0.16], [
            'Reposo normal, aun con enfermedad grave.',
            '<b>Infradesnivel desde la etapa 1</b> (antes de 6 min): dato de alto riesgo.',
            'Infradesnivel difuso ≥2 mm y <b>elevación del ST en aVR</b>: isquemia global por tronco común o 3 vasos.',
            'Además cae la PA con el esfuerzo: se suspende la prueba ya.',
            'No debería llegar hasta aquí: la prueba se detiene por criterios de alto riesgo.',
            'El infradesnivel <b>persiste en la recuperación</b> (&gt;5 min): otro dato de alto riesgo.',
            'Prueba de alto riesgo → <b>coronariografía</b> y probablemente cirugía de revascularización (CABG).'], ['I', 'II', 'aVF', 'V3', 'V4', 'V5', 'V6', 'aVR'], true) }
      ]
    },
    tep: {
      title: 'Simulador de ECG · TEP y el ventrículo derecho',
      scen: [
        { id: 'tep', l: 'Tromboembolia pulmonar', sub: 'Del émbolo pequeño al masivo', slider: 'Tamaño del émbolo y sobrecarga del VD',
          stages: [
            { l: 'Sin TEP', m: {}, t: 'Ritmo sinusal normal.' },
            { l: 'Émbolo pequeño', P: { rate: 108 }, m: {}, hl: ['II'],
              t: '<b>Taquicardia sinusal</b>: el hallazgo más frecuente. Un ECG normal no descarta TEP; el ECG sirve para buscar otras causas (IAM, pericarditis).' },
            { l: 'Submasivo: VD que sufre', P: { rate: 116 }, m: { I: { s: -0.5 }, III: { q: -0.3, t: -0.28 }, V1: { t: -0.28 }, V2: { t: -0.36 }, V3: { t: -0.26 } }, hl: ['I', 'III', 'V1', 'V2', 'V3'],
              t: '<b>S1Q3T3</b> (S en DI, Q y T negativa en DIII) y <b>T negativas de V1 a V3</b> por sobrecarga del VD. Específico pero poco sensible: aparece en una minoría.' },
            { l: 'Masivo: VD dilatado', P: { rate: 126, qrsW: 1.35, ext: 0.035 }, m: { I: { s: -0.6, rMul: 0.5, s2: -0.3 }, II: { p: 0.28 }, III: { q: -0.3, t: -0.3, p: 0.22 }, aVF: { p: 0.22 }, V1: { r2: 0.75, s: -0.45, t: -0.3 }, V2: { r2: 0.55, s: -0.8, t: -0.4 }, V3: { t: -0.3 }, V4: { t: -0.22 }, V5: { s2: -0.35 }, V6: { s2: -0.35 } }, hl: ['V1', 'V2', 'V3', 'V4', 'I', 'III', 'II'],
              t: '<b>Bloqueo de rama derecha nuevo</b>, eje a la derecha, P pulmonar y T negativas hasta V4: VD dilatado. Con hipotensión = TEP de alto riesgo → <b>trombólisis</b>.' }
          ] }
      ]
    },
    hp: {
      title: 'Simulador de ECG · Hipertensión pulmonar',
      scen: [
        { id: 'hp', l: 'Hipertensión pulmonar', sub: 'Del VD normal al que falla', slider: 'Gravedad (presión pulmonar)',
          stages: [
            { l: 'Normal', m: {}, t: 'Trazo normal. En la HP leve el ECG suele ser normal: no sirve para descartarla.' },
            { l: 'Moderada: aurícula y eje', m: { II: { p: 0.3 }, aVF: { p: 0.27 }, V1: { p: 0.18 }, I: { rMul: 0.45, s: -0.45 }, III: { rMul: 1.9, p: 0.26 } }, hl: ['II', 'III', 'aVF', 'I'],
              t: '<b>P pulmonar</b> (P picuda ≥2.5 mm en DII, DIII, aVF: crece la aurícula derecha) y <b>eje desviado a la derecha</b> (DI casi negativo, DIII alto).' },
            { l: 'Grave: hipertrofia del VD', m: { II: { p: 0.32 }, III: { p: 0.28, rMul: 2 }, aVF: { p: 0.28 }, I: { rMul: 0.4, s: -0.55 }, V1: { p: 0.2, rMul: 4.2, s: -0.2, st: -0.08, t: -0.25 }, V2: { rMul: 2.2, s: -0.7, t: -0.3 }, V3: { t: -0.2 }, V5: { rMul: 0.6, s: -0.7 }, V6: { rMul: 0.55, s: -0.6 } }, hl: ['V1', 'V2', 'V5', 'V6'],
              t: '<b>Hipertrofia del VD</b>: R alta en V1 (R/S &gt;1), S profundas en V5–V6 y T negativas en V1–V3 (patrón de sobrecarga). Con esto la HP ya suele ser grave.' },
            { l: 'Con falla derecha', P: { rate: 104, qrsW: 1.35, ext: 0.035 }, m: { II: { p: 0.32 }, III: { p: 0.28, rMul: 2 }, aVF: { p: 0.28 }, I: { rMul: 0.4, s: -0.55, s2: -0.3 }, V1: { p: 0.2, rMul: 1.8, r2: 1.1, s: -0.3, t: -0.3 }, V2: { r2: 0.7, t: -0.32 }, V3: { t: -0.22 }, V5: { s2: -0.45 }, V6: { s2: -0.4 } }, hl: ['V1', 'V2', 'V5', 'V6'],
              t: 'Taquicardia y <b>bloqueo de rama derecha</b> sobre la hipertrofia del VD. Diferencial con TEP agudo: en la HP los cambios llevan meses (hipertrofia), en el TEP aparecen de golpe.' }
          ] }
      ]
    },
    aortica: {
      title: 'Simulador de ECG · Valvulopatía aórtica',
      scen: [
        { id: 'ea', l: 'Estenosis aórtica', sub: 'Sobrecarga de presión', slider: 'Gravedad',
          stages: [
            { l: 'Leve', m: {}, t: 'ECG normal. El ECG no gradúa la estenosis: eso lo hace el ecocardiograma (área, velocidad, gradiente).' },
            { l: 'Moderada: HVI por voltaje', m: { V1: { s: -1.7 }, V2: { s: -2.0 }, V5: { rMul: 1.6 }, V6: { rMul: 1.6 }, aVL: { rMul: 1.6 } }, hl: ['V1', 'V2', 'V5', 'V6'],
              t: '<b>Hipertrofia del VI por voltaje</b>: Sokolow-Lyon (S de V1 + R de V5 o V6 ≥35 mm) o Cornell (R de aVL + S de V3 &gt;28 mm hombre, &gt;20 mujer).' },
            { l: 'Grave: patrón de sobrecarga', m: { II: { p: 0.16, pt: 0.14 }, V1: { s: -1.8, p: 0.06, pt: -0.18 }, V2: { s: -2.1 }, V5: { rMul: 1.7, st: -0.12, t: -0.3 }, V6: { rMul: 1.75, st: -0.12, t: -0.28 }, I: { rMul: 1.3, st: -0.06, t: -0.15 }, aVL: { rMul: 1.6, st: -0.06, t: -0.18 } }, P: { pW: 1.4 }, hl: ['V5', 'V6', 'I', 'aVL', 'V1'],
              t: '<b>Patrón de sobrecarga (strain)</b>: infra del ST con T asimétricas negativas en V5–V6, DI y aVL, + crecimiento auricular izquierdo (P ancha, negativa al final en V1). Indica VI que ya sufre.' },
            { l: 'Avanzada: bloqueo de rama izquierda', P: { qrsW: 1.75, ext: 0.02, pW: 1.4 }, m: { II: { p: 0.16, pt: 0.14, t: 0.08 }, V1: { rMul: 0.15, s: -1.6, st: 0.18, t: 0.4, p: 0.06, pt: -0.18 }, V2: { rMul: 0.2, s: -2.0, st: 0.24, t: 0.5 }, V3: { rMul: 0.25, s: -1.5, st: 0.16, t: 0.4 }, I: { q: 0, s: 0, r2: 0.7, st: -0.08, t: -0.3 }, aVL: { q: 0, s: 0, r2: 0.7, st: -0.08, t: -0.3 }, V5: { q: 0, s: 0, r2: 0.7, st: -0.08, t: -0.3 }, V6: { q: 0, s: 0, r2: 0.7, st: -0.08, t: -0.3 }, V4: { s: -0.3, t: -0.15 } }, hl: ['V1', 'V2', 'V5', 'V6', 'I', 'aVL'],
              t: '<b>Bloqueo de rama izquierda</b>: QRS ≥120 ms, R ancha y mellada en DI, aVL, V5–V6. El calcio de la válvula puede invadir el sistema de conducción (también da bloqueos AV, sobre todo tras el TAVI).' }
          ] },
        { id: 'ia', l: 'Insuficiencia aórtica', sub: 'Sobrecarga de volumen', slider: 'Gravedad',
          stages: [
            { l: 'Leve', m: {}, t: 'ECG normal.' },
            { l: 'Moderada: VI dilatado', m: { V1: { s: -1.6 }, V5: { rMul: 1.8, q: -0.22, t: 0.6 }, V6: { rMul: 1.7, q: -0.22, t: 0.55 }, I: { q: -0.15, t: 0.4 }, aVL: { q: -0.15 } }, hl: ['V5', 'V6'],
              t: 'Sobrecarga de <b>volumen</b>: R altas en V5–V6 con <b>Q estrechas y profundas y T altas positivas</b> (a diferencia de la sobrecarga de presión de la estenosis).' },
            { l: 'Grave crónica: sobrecarga', P: { pW: 1.4 }, m: { II: { p: 0.16, pt: 0.14 }, V1: { s: -1.9, p: 0.06, pt: -0.18 }, V2: { s: -2.2 }, V5: { rMul: 1.9, q: -0.22, st: -0.1, t: -0.25 }, V6: { rMul: 1.8, q: -0.22, st: -0.1, t: -0.22 }, I: { st: -0.05, t: -0.12 } }, hl: ['V5', 'V6', 'V1'],
              t: 'Con el tiempo aparece el patrón de sobrecarga y crece la aurícula izquierda. Indica operar antes de que caiga la FEVI (≤50 %) o el VI se dilate (&gt;50 mm).' }
          ] }
      ]
    },
    mitral: {
      title: 'Simulador de ECG · Valvulopatía mitral',
      scen: [
        { id: 'em', l: 'Estenosis mitral', sub: 'Aurícula izquierda que crece', slider: 'Gravedad',
          stages: [
            { l: 'Leve', m: {}, t: 'ECG normal.' },
            { l: 'Moderada: P mitral', P: { pW: 1.55 }, m: { II: { p: 0.17, pt: 0.16 }, I: { p: 0.11, pt: 0.1 }, aVF: { p: 0.11, pt: 0.1 }, V1: { p: 0.06, pt: -0.18 } }, hl: ['II', 'V1'],
              t: '<b>P mitral</b>: P ancha (≥120 ms) y bimodal (“en M”) en DII, con <b>componente final negativo profundo en V1</b>. Es el crecimiento de la aurícula izquierda.' },
            { l: 'Grave: fibrilación auricular', P: { rhythm: 'af', rate: 112 }, m: {}, hl: ['II', 'V1'],
              t: 'La aurícula dilatada termina en <b>fibrilación auricular</b>: RR irregular sin P. En EM con FA se anticoagula con <b>warfarina</b> (no DOAC) y se controla la frecuencia.' },
            { l: 'Con hipertensión pulmonar', P: { rhythm: 'af', rate: 104 }, m: { I: { rMul: 0.45, s: -0.45 }, III: { rMul: 1.9 }, V1: { rMul: 3.6, s: -0.25, t: -0.25 }, V2: { rMul: 2, t: -0.25 }, V5: { s: -0.6 }, V6: { s: -0.5 } }, hl: ['V1', 'V2', 'I', 'III'],
              t: 'FA + <b>eje derecho e hipertrofia del VD</b> (R alta en V1): la presión se transmitió al pulmón. Indica intervenir (valvuloplastia con balón si la anatomía lo permite).' }
          ] },
        { id: 'im', l: 'Insuficiencia mitral', sub: 'Aurícula y ventrículo izquierdos', slider: 'Gravedad',
          stages: [
            { l: 'Leve', m: {}, t: 'ECG normal.' },
            { l: 'Moderada: P mitral', P: { pW: 1.5 }, m: { II: { p: 0.16, pt: 0.15 }, V1: { p: 0.06, pt: -0.18 } }, hl: ['II', 'V1'],
              t: 'Crecimiento auricular izquierdo (P mitral) por el volumen que regresa a la aurícula.' },
            { l: 'Grave: + HVI', P: { pW: 1.5 }, m: { II: { p: 0.16, pt: 0.15 }, V1: { p: 0.06, pt: -0.18, s: -1.7 }, V2: { s: -1.9 }, V5: { rMul: 1.7, q: -0.18 }, V6: { rMul: 1.6, q: -0.18 } }, hl: ['V1', 'V5', 'V6', 'II'],
              t: 'Se agrega <b>hipertrofia del VI por volumen</b>. En la IM primaria grave se opera con síntomas, FEVI ≤60 % o diámetro telesistólico ≥40 mm.' },
            { l: 'Descompensada: FA', P: { rhythm: 'af', rate: 116 }, m: { V1: { s: -1.7 }, V2: { s: -1.9 }, V5: { rMul: 1.7, q: -0.18, st: -0.08, t: -0.15 }, V6: { rMul: 1.6, q: -0.18 } }, hl: ['II', 'V5', 'V6'],
              t: '<b>FA</b> sobre la HVI: la FA nueva en IM grave es indicación de cirugía (reparación) aunque haya pocos síntomas.' }
          ] }
      ]
    }
  },

  hssim: {
    sca: {
      title: 'Simulador de soplos · Complicaciones del infarto',
      scen: [
        { id: 'tiempo', l: 'Complicaciones según el día', sub: 'Lo que se oye después del IAM', foco: 'mitral', slider: 'Días desde el infarto', man: { handgrip: 1.4, cuclillas: 1.2, valsalva: 0.65 },
          stages: [
            { l: 'Día 0: IAM no complicado', s: { s4: 0.4 }, f: ['S4'], t: 'El <b>S4</b> (antes del S1) es la aurícula empujando contra un VI rígido por la isquemia. Si aparece un <b>S3</b>, hay falla del VI (Killip II).' },
            { l: 'Días 1–3: pericarditis', s: { s4: 0.25, mur: [['roce', 0.5]] }, f: ['Frote pericárdico'], t: '<b>Frote pericárdico</b> rasposo de 2–3 componentes: pericarditis temprana sobre el infarto transmural. AINE no: <b>aspirina</b> a dosis altas.' },
            { l: 'Días 3–5: rotura de músculo papilar', s: { s4: 0.3, s3: 0.3, p2: 0.75, mur: [['early', 0.5, 0.03, 0.24]] }, f: ['IM aguda', 'Edema pulmonar'], t: 'Soplo <b>sistólico temprano y decreciente</b> en el ápex (la presión de la aurícula sube rápido y el soplo se apaga): <b>IM aguda</b> por rotura del papilar posteromedial (infarto inferior). Edema pulmonar súbito → cirugía urgente.' },
            { l: 'Días 3–7: rotura del septum', foco: 'tricuspideo', s: { s4: 0.25, p2: 0.7, mur: [['civ', 0.55, 0.03, 0.315]] }, f: ['CIV', 'Frémito', 'Choque'], t: 'Soplo <b>holosistólico áspero</b> en el borde esternal izquierdo bajo, con <b>frémito</b>: CIV post-infarto (anterior o inferior). Salto de saturación de O₂ en el VD. Cirugía o cierre percutáneo.' },
            { l: 'Semanas: síndrome de Dressler', s: { mur: [['roce', 0.45]] }, f: ['Frote pericárdico', 'Fiebre'], t: 'Frote otra vez, ahora con fiebre y derrame 2–8 semanas después: pericarditis autoinmune (<b>Dressler</b>). Aspirina y colchicina.' }
          ] }
      ]
    },
    scc: {
      title: 'Simulador de soplos · La angina se oye',
      scen: [
        { id: 'isq', l: 'Durante una crisis de angina', sub: 'Isquemia que se escucha', foco: 'mitral', slider: 'Momento',
          stages: [
            { l: 'Reposo sin dolor', s: {}, f: ['Normal'], t: 'Entre crisis, la exploración del corazón suele ser normal.' },
            { l: 'Esfuerzo: aparece el S4', s: { s4: 0.42 }, f: ['S4'], t: 'Con la isquemia el VI se pone rígido: aparece un <b>S4</b>.' },
            { l: 'Isquemia extensa', s: { s4: 0.42, para: true, split: 0.035, mur: [['holo', 0.28, 0.035, 0.32]] }, f: ['S4', 'IM transitoria', 'S2 paradójico'], t: 'El músculo papilar isquémico deja una <b>IM transitoria</b> (holosistólico apical) y el VI tarda en vaciarse: <b>desdoblamiento paradójico del S2</b> (se cierra al inspirar). Datos de alto riesgo.' },
            { l: 'Después de nitroglicerina', s: { s4: 0.12 }, f: ['Casi normal'], t: 'Al ceder la isquemia desaparecen el soplo y casi todo el S4: lo transitorio es la pista de que era isquemia.' }
          ] },
        { id: 'sop', l: 'Angina con soplo sistólico', sub: '¿Estenosis aórtica o miocardiopatía hipertrófica?', foco: 'aortico', slider: 'Causa',
          stages: [
            { l: 'Estenosis aórtica', foco: 'aortico', s: { a2: 0.3, s4: 0.3, mur: [['diam', 0.6, 0.06, 0.29, 0.18]] }, man: { valsalva: 0.55, cuclillas: 1.35, handgrip: 0.65 }, f: ['Sistólico en diamante', 'A2 apagado'], t: 'Angina con soplo en foco aórtico irradiado a carótidas: <b>estenosis aórtica</b>. Antes de la prueba de esfuerzo, ecocardiograma: en EA grave sintomática la prueba está contraindicada.' },
            { l: 'Miocardiopatía hipertrófica', foco: 'erb', s: { s4: 0.35, mur: [['diam', 0.5, 0.08, 0.3, 0.21]] }, man: { valsalva: 1.7, cuclillas: 0.45, handgrip: 0.55 }, f: ['Sube con Valsalva', 'Baja en cuclillas'], t: 'En el borde esternal izquierdo, sin irradiar a carótidas, y <b>sube con Valsalva</b> (menos precarga = más obstrucción): <b>MCH obstructiva</b>. Prueba las maniobras.' }
          ] }
      ]
    },
    aortica: {
      title: 'Simulador de soplos · Valvulopatía aórtica',
      scen: [
        { id: 'ea', l: 'Estenosis aórtica', sub: 'Foco aórtico → carótidas', foco: 'aortico', slider: 'Gravedad', man: { valsalva: 0.55, cuclillas: 1.35, handgrip: 0.65, insp: 0.9 },
          stages: [
            { l: 'Leve', s: { ec: 0.3, mur: [['diam', 0.38, 0.06, 0.22, 0.11]] }, f: ['Pico temprano', 'Clic de eyección'], t: 'Soplo en diamante con <b>pico temprano</b> y A2 normal. El <b>clic de eyección</b> sugiere válvula bivalva (paciente joven).' },
            { l: 'Moderada', s: { a2: 0.65, mur: [['diam', 0.52, 0.06, 0.26, 0.14]] }, f: ['Pico a mitad de sístole'], t: 'Más intenso y el pico se va retrasando. A2 empieza a apagarse.' },
            { l: 'Grave', s: { a2: 0.12, s4: 0.38, mur: [['diam', 0.62, 0.06, 0.3, 0.2]] }, f: ['Pico tardío', 'S2 apagado', 'S4'], t: '<b>Pico tardío y S2 apagado (o único)</b> = grave; S4 por el VI hipertrófico. Pulso parvus et tardus. Con síntomas → TAVI o cirugía.' },
            { l: 'Grave con FEVI baja', s: { a2: 0.08, s3: 0.32, mur: [['diam', 0.3, 0.07, 0.29, 0.19]] }, f: ['Soplo suave', 'S3'], t: 'El VI ya no genera flujo y <b>el soplo se hace más suave</b>: no confundas suave con leve. Bajo flujo-bajo gradiente → eco con dobutamina.' }
          ] },
        { id: 'ia', l: 'Insuficiencia aórtica', sub: 'Borde esternal izquierdo', foco: 'erb', slider: 'Gravedad', man: { valsalva: 0.65, cuclillas: 1.25, handgrip: 1.45, insp: 0.9 },
          stages: [
            { l: 'Leve', s: { mur: [['decres', 0.3, 0.335, 0.5]] }, f: ['Diastólico corto'], t: 'Soplo <b>diastólico decreciente</b>, agudo y soplante, justo después del S2. Se oye mejor sentado, inclinado hacia adelante y en espiración.' },
            { l: 'Moderada', s: { mur: [['decres', 0.4, 0.335, 0.62], ['diam', 0.2, 0.06, 0.25, 0.13]] }, f: ['Diastólico más largo', 'Soplo sistólico de flujo'], t: 'Más largo, y aparece un <b>soplo sistólico de flujo</b> por el gran volumen que sale (no es estenosis).' },
            { l: 'Grave crónica', s: { s3: 0.25, mur: [['decres', 0.48, 0.335, 0.8], ['diam', 0.25, 0.06, 0.26, 0.13], ['rumble', 0.22, 0.62, 0.82]] }, f: ['Holodiastólico', 'Austin Flint', 'S3'], t: 'Holodiastólico + <b>retumbo de Austin Flint</b> en el ápex (el chorro choca con la valva mitral) + S3. Signos periféricos: pulso saltón, Musset, Quincke. Operar si FEVI ≤50 % o VI &gt;50 mm.' },
            { l: 'Aguda (endocarditis, disección)', s: { s1: 0.45, s3: 0.32, mur: [['decres', 0.28, 0.335, 0.47]] }, f: ['Diastólico corto y suave', 'S1 débil'], t: 'En la aguda el VI no se ha adaptado: la presión diastólica se iguala rápido y <b>el soplo es corto y suave</b>, con S1 débil. Edema pulmonar y choque → <b>cirugía urgente</b>.' }
          ] }
      ]
    },
    mitral: {
      title: 'Simulador de soplos · Valvulopatía mitral',
      scen: [
        { id: 'em', l: 'Estenosis mitral', sub: 'Ápex, decúbito lateral izquierdo', foco: 'mitral', slider: 'Gravedad', man: { valsalva: 0.65, cuclillas: 1.1, handgrip: 1.15, insp: 0.9 },
          stages: [
            { l: 'Leve', s: { s1: 1.35, os: [0.44, 0.22], mur: [['rumble', 0.3, 0.46, 0.58], ['presis', 0.32, 0.66, 0.82]] }, f: ['S1 intenso', 'Chasquido tardío'], t: '<b>S1 intenso</b>, <b>chasquido de apertura</b> lejos del S2 y retumbo corto con <b>refuerzo presistólico</b> (la aurícula empuja al final).' },
            { l: 'Moderada', s: { s1: 1.35, os: [0.405, 0.24], mur: [['rumble', 0.42, 0.42, 0.66], ['presis', 0.4, 0.66, 0.82]] }, f: ['Chasquido más cerca del S2', 'Retumbo más largo'], t: 'El chasquido se acerca al S2 y el retumbo se alarga.' },
            { l: 'Grave', s: { s1: 1.35, p2: 0.8, os: [0.37, 0.26], mur: [['rumble', 0.5, 0.39, 0.83], ['presis', 0.45, 0.66, 0.82]] }, f: ['Chasquido pegado al S2', 'Retumbo holodiastólico', 'P2 fuerte'], t: '<b>Entre más cerca del S2 el chasquido y más largo el retumbo, más grave</b>. P2 fuerte = ya hay hipertensión pulmonar.' },
            { l: 'Grave con FA', s: { s1: 1.2, p2: 0.8, os: [0.37, 0.24], mur: [['rumble', 0.5, 0.39, 0.83]] }, f: ['Sin refuerzo presistólico'], t: 'Con FA <b>desaparece el refuerzo presistólico</b> (ya no hay contracción auricular) y el ritmo es irregular. Warfarina y control de frecuencia.' }
          ] },
        { id: 'im', l: 'Insuficiencia mitral', sub: 'Ápex → axila', foco: 'mitral', slider: 'Gravedad', man: { valsalva: 0.65, cuclillas: 1.25, handgrip: 1.45, insp: 0.9 },
          stages: [
            { l: 'Leve', s: { mur: [['holo', 0.22, 0.035, 0.32]] }, f: ['Holosistólico suave'], t: 'Holosistólico soplante en el ápex que irradia a la axila. <b>Sube con handgrip</b> (más poscarga = más regurgitación).' },
            { l: 'Moderada', s: { s1: 0.8, mur: [['holo', 0.38, 0.035, 0.32]] }, f: ['Más intenso', 'S1 más débil'], t: 'Más intenso; el S1 se apaga porque la válvula no cierra bien.' },
            { l: 'Grave crónica', s: { s1: 0.7, s3: 0.38, mur: [['holo', 0.5, 0.03, 0.325], ['rumble', 0.14, 0.44, 0.54]] }, f: ['S3', 'Retumbo de flujo'], t: '<b>S3</b> y retumbo diastólico corto de flujo: mucho volumen regresa al VI. No es estenosis: es IM grave.' },
            { l: 'Aguda (papilar roto)', s: { s4: 0.3, s3: 0.3, p2: 0.8, mur: [['early', 0.5, 0.03, 0.24]] }, f: ['Temprano y decreciente'], t: 'La aurícula no está dilatada: su presión sube rápido y el soplo se acorta (<b>temprano y decreciente</b>), hasta casi no oírse. Edema pulmonar súbito → cirugía urgente.' }
          ] }
      ]
    },
    tep: {
      title: 'Simulador de soplos · TEP y el corazón derecho',
      scen: [
        { id: 'tep', l: 'Tromboembolia pulmonar', sub: 'Foco pulmonar y tricuspídeo', foco: 'pulmonar', slider: 'Tamaño del émbolo', man: { insp: 1.5, valsalva: 0.7 },
          stages: [
            { l: 'Sin TEP', s: { split: 0.02 }, f: ['Normal'], t: 'S2 normal: el desdoblamiento (A2 y luego P2) <b>se abre al inspirar</b> y se cierra al espirar. Prueba la maniobra “Inspiración”.' },
            { l: 'Émbolo pequeño', s: { split: 0.025 }, f: ['Taquicardia, sin soplos'], t: 'La exploración cardiaca suele ser normal; la pista es la taquicardia y la disnea.' },
            { l: 'Submasivo', s: { p2: 0.75, split: 0.045 }, f: ['P2 fuerte', 'S2 desdoblado'], t: '<b>P2 intenso</b> y S2 más desdoblado: sube la presión pulmonar de golpe.' },
            { l: 'Masivo', foco: 'tricuspideo', s: { p2: 0.85, split: 0.055, fixed: true, s3: 0.3, mur: [['holoR', 0.36, 0.035, 0.32]] }, f: ['IT que sube al inspirar', 'S3 derecho'], t: '<b>Insuficiencia tricuspídea</b> (holosistólico en el borde esternal izquierdo bajo) que <b>sube al inspirar</b> (signo de Carvallo) y S3 derecho: VD dilatado y fallando. Con hipotensión → trombólisis.' }
          ] }
      ]
    },
    hp: {
      title: 'Simulador de soplos · Hipertensión pulmonar',
      scen: [
        { id: 'hp', l: 'Hipertensión pulmonar', sub: 'Foco pulmonar y tricuspídeo', foco: 'pulmonar', slider: 'Gravedad', man: { insp: 1.5, valsalva: 0.7 },
          stages: [
            { l: 'Leve', s: { p2: 0.6, split: 0.02 }, f: ['P2 algo fuerte'], t: 'El primer signo es un <b>P2 intenso</b>, que llega a oírse en el ápex.' },
            { l: 'Moderada', s: { p2: 0.9, split: 0.018, ec: 0.28, ecR: true, mur: [['holoR', 0.24, 0.035, 0.32]] }, f: ['Clic de eyección pulmonar', 'IT'], t: '<b>Clic de eyección pulmonar</b> (el único ruido derecho que <b>baja al inspirar</b>) e insuficiencia tricuspídea que sube al inspirar.' },
            { l: 'Grave', s: { p2: 1, split: 0.016, ec: 0.28, ecR: true, s4: 0.3, mur: [['holoR', 0.42, 0.035, 0.32], ['gs', 0.26, 0.335, 0.6]] }, f: ['Graham Steell', 'IT', 'S4 derecho'], t: '<b>Soplo de Graham Steell</b>: diastólico decreciente agudo en foco pulmonar por insuficiencia pulmonar (la arteria se dilata). Más IT y S4 derecho.' },
            { l: 'Con falla derecha', foco: 'tricuspideo', s: { p2: 1, split: 0.016, s3: 0.36, mur: [['holoR', 0.5, 0.035, 0.32], ['gs', 0.22, 0.335, 0.6]] }, f: ['S3 derecho', 'IT intensa'], t: '<b>S3 derecho</b> e IT intensa con ingurgitación yugular (onda v gigante), hepatomegalia pulsátil y edema. Mal pronóstico: referir a centro de HP.' }
          ] }
      ]
    }
  }
};
