// Práctica de Cardiología (semanas 7, 10 y 11): simuladores de ECG por etapas (formato en 53-simuladores-cardio.js),
// algoritmos con casos, guardias con monitor y simuladores de un control.
const PRE = ['V1', 'V2', 'V3', 'V4', 'V5', 'V6'];
const each = (leads, f) => Object.fromEntries(leads.map((l) => [l, f]));
// Morfologías de bloqueo de rama e hipertrofia (las mismas que usa la lectura de ECG)
const BRD = { V1: { r2: 0.75, s: -0.45, t: -0.2 }, V2: { r2: 0.6, s: -0.8, t: -0.12 }, ...each(['I', 'V5', 'V6', 'aVL'], { s2: -0.35 }) };
const BRI = { V1: { rMul: 0.15, s: -1.5, st: 0.18, t: 0.4 }, V2: { rMul: 0.2, s: -1.9, st: 0.24, t: 0.5 }, V3: { rMul: 0.25, s: -1.5, st: 0.16, t: 0.4 },
  ...each(['I', 'aVL', 'V5', 'V6'], { q: 0, s: 0, r2: 0.7, st: -0.08, t: -0.3 }), V4: { s: -0.3, t: -0.15 }, II: { t: 0.08 }, aVF: { t: 0.08 } };
const HVI = { V1: { s: -1.7, t: 0.12 }, V2: { s: -2.1 }, V5: { rMul: 1.6, st: -0.12, t: -0.3 }, V6: { rMul: 1.75, st: -0.12, t: -0.28 }, I: { rMul: 1.4, st: -0.06, t: -0.15 }, aVL: { rMul: 1.4, st: -0.06, t: -0.15 } };
const TV = { ...each(['V1', 'V2', 'V3'], { rMul: 0.3, s: -1.7 }), ...each(['I', 'V5', 'V6', 'aVL'], { rMul: 1.3, s: -0.05, q: 0 }) };
const WPW = { ...each(['I', 'II', 'III', 'aVR', 'aVL', 'aVF', ...PRE], { q: 0 }), V1: { rMul: 2.5, s: -0.7, q: 0 } };

export default {
  ecgsim: {
    bradi: {
      title: 'Simulador de ECG · Del nodo al bloqueo completo',
      scen: [
        { id: 'av', l: 'Bloqueos AV', sub: 'De arriba hacia abajo', slider: 'Gravedad del bloqueo',
          stages: [
            { l: 'Ritmo sinusal normal', P: { rate: 72 }, t: 'Cada P va seguida de un QRS con PR de 120 a 200 ms. FC de 60 a 100.' },
            { l: 'Bradicardia sinusal', P: { rate: 44 }, hl: ['II'], t: 'Ritmo sinusal a menos de 60. Normal en atletas y al dormir. Busca fármacos (BB, verapamilo, digoxina), hipotiroidismo, hiperkalemia, hipertensión intracraneal. Solo se trata si da síntomas.' },
            { l: 'BAV de 1er grado', P: { rate: 64, pr: 0.32 }, hl: ['II'], t: '<b>PR mayor de 200 ms</b>, pero todas las P conducen. Retraso en el nodo AV: se observa.' },
            { l: 'Mobitz I (Wenckebach)', P: { rate: 72, prSeq: [0.16, 0.25, 0.31, null] }, hl: ['II'], t: '<b>El PR se alarga</b> latido a latido hasta que una P no conduce, y el ciclo vuelve a empezar. Es nodal: benigno, responde a atropina; marcapasos solo con síntomas.' },
            { l: 'Mobitz II', P: { rate: 80, prSeq: [0.17, 0.17, null], qrsW: 1.9 }, hl: ['II', 'V1'], t: '<b>PR fijo</b> y de pronto una P sin QRS, a menudo con QRS ancho. Es infranodal (His-Purkinje): <b>marcapasos aunque no haya síntomas</b>.' },
            { l: 'Bloqueo AV 2:1', P: { rate: 84, prSeq: [0.18, null], qrsW: 1.6 }, hl: ['II'], t: 'Una P conduce y la siguiente no: no se puede saber si es Mobitz I o II. Con QRS ancho, asume infranodal.' },
            { l: 'Bloqueo AV completo', P: { rhythm: 'chb', arate: 82, rate: 38, qrsW: 1.9, tMul: -0.7 }, hl: ['II', 'V1'], t: '<b>Disociación AV</b>: las P van a su ritmo y los QRS anchos a 38 por minuto al suyo. Escape ventricular inestable: atropina casi no sirve → <b>marcapasos</b> transcutáneo y luego definitivo.' }
          ] },
        { id: 'rama', l: 'Bloqueos de rama', sub: 'QRS de 120 ms o más', slider: 'Rama afectada',
          stages: [
            { l: 'Conducción normal', P: { rate: 72 }, t: 'QRS menor de 120 ms: ambas ramas conducen a la vez.' },
            { l: 'Bloqueo de rama derecha', P: { rate: 72, qrsW: 1.35, ext: 0.035 }, m: BRD, hl: ['V1', 'V2', 'I', 'V6'], t: '<b>rSR′ en V1</b> (orejas de conejo) y S ancha en DI y V6. Puede ser normal; si es nuevo, piensa en TEP.' },
            { l: 'Bloqueo de rama izquierda', P: { rate: 72, qrsW: 1.75, ext: 0.02 }, m: BRI, hl: ['V1', 'V2', 'I', 'aVL', 'V5', 'V6'], t: '<b>V1 negativo</b> y R ancha y mellada en DI, aVL, V5 y V6. Casi siempre hay cardiopatía. Nuevo con dolor torácico: tratar como SCA de alto riesgo. Con FEVI ≤35% y QRS ≥150: resincronización.' }
          ] }
      ]
    },
    taqui: {
      title: 'Simulador de ECG · Taquicardias',
      scen: [
        { id: 'fa', l: 'Fibrilación auricular', sub: 'Control de frecuencia', slider: 'Tratamiento',
          stages: [
            { l: 'FA rápida', P: { rhythm: 'af', rate: 150 }, hl: ['II', 'V1'], t: '<b>RR irregularmente irregular</b>, sin P, línea de base fibrilatoria. FC de 150: controla frecuencia.' },
            { l: 'Tras betabloqueador IV', P: { rhythm: 'af', rate: 118 }, hl: ['II'], t: 'Sigue irregular pero más lenta. Meta: menos de 110 en reposo. En FEVI reducida: BB, digoxina o amiodarona (no verapamilo ni diltiazem).' },
            { l: 'Frecuencia controlada', P: { rhythm: 'af', rate: 86 }, hl: ['II'], t: 'Controlada. Ahora decide la <b>anticoagulación</b> con CHA₂DS₂-VASc (≥2 hombre, ≥3 mujer).' },
            { l: 'Tras cardioversión', P: { rate: 74 }, hl: ['II'], t: 'Ritmo sinusal: vuelven las P. Si la FA duró 48 h o más: 3 semanas de anticoagulación antes (o eco TE) y 4 después.' }
          ] },
        { id: 'tsv', l: 'TSV y flutter', sub: 'QRS estrecho regular', slider: 'Qué pasa',
          stages: [
            { l: 'Taquicardia por reentrada nodal', P: { rhythm: 'svt', rate: 182 }, hl: ['II', 'V1'], t: 'Regular a 182, QRS estrecho, <b>sin P visibles</b> (escondidas en el QRS). Valsalva modificada → <b>adenosina 6 mg</b> en bolo rápido → 12 mg.' },
            { l: 'Tras adenosina', P: { rate: 82 }, hl: ['II'], t: 'Se corta la reentrada y vuelve el ritmo sinusal. Curación: ablación de la vía lenta.' },
            { l: 'Flutter auricular 2:1', P: { rhythm: 'flutter', rate: 150 }, hl: ['II', 'III', 'aVF'], t: '<b>Dientes de sierra</b> en DII, DIII y aVF; ventrículo a 150. Si ves una TSV regular a 150 exacta, piensa en flutter. Se anticoagula como la FA; curación: ablación del istmo.' }
          ] },
        { id: 'ancho', l: 'QRS ancho', sub: 'WPW, TV y QT largo', slider: 'Patrón',
          stages: [
            { l: 'WPW en ritmo sinusal', P: { rate: 76, pr: 0.13, delta: 0.32, qrsW: 1.4, tMul: 0.7 }, m: WPW, hl: ['I', 'II', 'V1', 'V4'], t: '<b>PR corto y onda delta</b>: vía accesoria. Si hace FA preexcitada: procainamida o cardioversión; nunca adenosina, BB, verapamilo ni digoxina.' },
            { l: 'Taquicardia ventricular', P: { rhythm: 'vt', rate: 168, qrsW: 2.3, tMul: -1.1 }, m: TV, hl: ['V1', 'V2', 'V3', 'V6'], t: 'Regular, <b>QRS muy ancho</b>, sin P. Asume TV. Con pulso inestable: cardioversión sincronizada; estable: amiodarona 150 mg IV. Sin pulso: desfibrilar.' },
            { l: 'QT largo', P: { rate: 62, qt: 2.1, tw: 1.4 }, hl: ['II', 'V2', 'V3'], t: '<b>QT corregido largo</b>: riesgo de torsades de pointes. Suspende macrólidos, quinolonas, haloperidol, ondansetrón, metadona; corrige K y Mg. Torsades: sulfato de magnesio 2 g IV.' }
          ] }
      ]
    },
    ic: {
      title: 'Simulador de ECG · Lo que se ve en la insuficiencia cardiaca',
      scen: [
        { id: 'ic', l: 'De la HTA a la falla', sub: 'El ECG cuenta la historia', slider: 'Evolución',
          stages: [
            { l: 'Normal', P: { rate: 72 }, t: 'Un ECG normal hace poco probable la IC con FEVI reducida, pero no la descarta: pide BNP y eco.' },
            { l: 'Hipertrofia del VI', P: { rate: 74 }, m: HVI, hl: ['V1', 'V5', 'V6', 'I', 'aVL'], t: '<b>S profunda en V1 + R alta en V5–V6</b> (Sokolow ≥35 mm) con patrón de sobrecarga (ST abajo y T invertida). HTA de años: la causa #1 de IC con FEVI preservada.' },
            { l: 'Hipertrofia + FA', P: { rhythm: 'af', rate: 124 }, m: HVI, hl: ['II', 'V1'], t: 'La FA es la causa más común de descompensación: pierdes la patada auricular y se acorta el llenado. Controla frecuencia y anticoagula.' },
            { l: 'Bloqueo de rama izquierda', P: { rate: 78, qrsW: 1.75, ext: 0.02 }, m: BRI, hl: ['V1', 'I', 'aVL', 'V5', 'V6'], t: 'Los ventrículos se contraen desfasados. Con <b>FEVI ≤35% y QRS ≥150 ms</b> pese a tratamiento óptimo: <b>resincronización</b>.' },
            { l: 'Hiperkalemia por espironolactona', P: { rate: 70, tMul: 1.9, tw: 0.75, pMul: 0.6 }, hl: ['V2', 'V3', 'V4', 'II'], t: '<b>T picudas</b>: vigila el K con espironolactona + ARNI, sobre todo si la TFG baja. Suspende si K ≥5.5.' }
          ] }
      ]
    }
  },
  algos: {
    icalgo: {
      title: 'Insuficiencia cardiaca: ¿qué le das?', topics: ['ic'], start: 'agudo',
      nodes: {
        agudo: { q: '¿Cómo llega?', opts: [{ t: 'Estable en consulta', go: 'fevi' }, { t: 'Descompensado', go: 'perfil' }] },
        fevi: { q: 'Ecocardiograma: ¿FEVI?', opts: [{ t: '40% o menos', go: 'reducida' }, { t: '50% o más', go: 'preservada' }] },
        reducida: { q: 'Con los 4 pilares por 3 meses: ¿FEVI?', opts: [{ t: 'Sigue en 35% o menos con BRI y QRS ≥150', go: 'trc' }, { t: 'Sigue en 35% o menos con QRS estrecho', go: 'dai' }, { t: 'Recién diagnosticada, sin tratamiento', go: 'pilares' }] },
        perfil: { q: '¿Perfil hemodinámico?', opts: [{ t: 'Caliente y húmedo, PA alta (edema agudo)', go: 'eap' }, { t: 'Frío y húmedo, PA baja', go: 'choque' }] },
        pilares: { end: 'Iniciar los 4 pilares', d: 'ARNI (o IECA/ARA), betabloqueador, espironolactona e iSGLT2 a dosis bajas; titular. Diurético para la congestión.' },
        dai: { end: 'Desfibrilador automático implantable', d: 'Prevención primaria de muerte súbita con FEVI ≤35% tras 3 meses de tratamiento óptimo.' },
        trc: { end: 'Resincronización (con desfibrilador)', d: 'BRI con QRS ≥150 ms y FEVI ≤35%.' },
        preservada: { end: 'FEVI preservada', d: 'iSGLT2, controlar la PA, diurético para la congestión y tratar la FA o la isquemia.' },
        eap: { end: 'CPAP + nitroglicerina IV + furosemida IV', d: 'Sentado, VMNI, nitroglicerina a dosis alta. Busca el desencadenante.' },
        choque: { end: 'Choque cardiogénico: dobutamina ± norepinefrina', d: 'UCI; busca isquemia (coronariografía) y causas mecánicas.' }
      },
      cases: [
        { t: 'Alfonso, 67 años, recién diagnosticado.', data: [['FEVI', '30%'], ['Tratamiento', 'Solo IECA y furosemida']], path: { agudo: 0, fevi: 0, reducida: 2 }, end: 'pilares' },
        { t: 'Mujer de 70 años en urgencias, ahogada, con estertores hasta los vértices.', data: [['PA', '210/120'], ['SpO2', '84%'], ['Extremidades', 'Calientes']], path: { agudo: 1, perfil: 0 }, end: 'eap' },
        { t: 'Hombre con 4 pilares por 4 meses.', data: [['FEVI', '28%'], ['ECG', 'BRI, QRS 168 ms']], path: { agudo: 0, fevi: 0, reducida: 0 }, end: 'trc' },
        { t: 'Mujer de 78 años hipertensa con disnea y edema.', data: [['FEVI', '62%'], ['NT-proBNP', '1800']], path: { agudo: 0, fevi: 1 }, end: 'preservada' },
        { t: 'Hombre tras infarto extenso, frío, confuso y con estertores.', data: [['PA', '78/50'], ['Lactato', '5.2']], path: { agudo: 1, perfil: 1 }, end: 'choque' }
      ]
    },
    bradialgo: {
      title: 'Bradicardia: ¿observar, atropina o marcapasos?', topics: ['bradi'], start: 'inest',
      nodes: {
        inest: { q: '¿Hay inestabilidad? (hipotensión, alteración mental, choque, dolor isquémico, IC aguda)', opts: [{ t: 'Sí', go: 'atro' }, { t: 'No', go: 'tipo' }] },
        atro: { q: 'Atropina 1 mg IV (hasta 3 mg). ¿Responde?', opts: [{ t: 'Sí', go: 'causa' }, { t: 'No', go: 'mp' }] },
        tipo: { q: 'Estable: ¿qué muestra el ECG?', opts: [{ t: 'BAV 1er grado o Mobitz I', go: 'obs' }, { t: 'Mobitz II o BAV completo', go: 'mpd' }, { t: 'Bradicardia sinusal con fármaco que la causa', go: 'causa' }] },
        mp: { end: 'Marcapasos transcutáneo o dopamina/epinefrina', d: 'Puente a marcapasos transvenoso y luego definitivo si no hay causa reversible.' },
        causa: { end: 'Corregir la causa', d: 'Suspende BB, verapamilo, diltiazem o digoxina; revisa K, TSH, isquemia. Antídotos: calcio, glucagón, antidigoxina.' },
        obs: { end: 'Observar', d: 'Bloqueo nodal y benigno. Marcapasos solo si hay síntomas que coinciden.' },
        mpd: { end: 'Marcapasos definitivo', d: 'Bloqueo infranodal: aunque no haya síntomas.' }
      },
      cases: [
        { t: 'Don Rafael, 79 años, con síncope.', data: [['FC', '36'], ['PA', '84/50'], ['ECG', 'BAV completo, QRS ancho'], ['Atropina', 'Sin respuesta']], path: { inest: 0, atro: 1 }, end: 'mp' },
        { t: 'Hombre de 50 años en chequeo.', data: [['FC', '62'], ['ECG', 'PR de 240 ms, todas conducen'], ['Síntomas', 'Ninguno']], path: { inest: 1, tipo: 0 }, end: 'obs' },
        { t: 'Mujer de 74 años, asintomática.', data: [['ECG', 'PR fijo con P bloqueadas; QRS ancho'], ['PA', '128/76']], path: { inest: 1, tipo: 1 }, end: 'mpd' },
        { t: 'Hombre con metoprolol y verapamilo que se marea.', data: [['FC', '46'], ['PA', '112/70'], ['ECG', 'Bradicardia sinusal']], path: { inest: 1, tipo: 2 }, end: 'causa' }
      ]
    },
    taquialgo: {
      title: 'Taquicardia: estable o no, ancho o estrecho', topics: ['taqui'], start: 'inest',
      nodes: {
        inest: { q: '¿Inestable por la taquicardia?', opts: [{ t: 'Sí, con pulso', go: 'cv' }, { t: 'Sin pulso', go: 'desf' }, { t: 'No, estable', go: 'qrs' }] },
        qrs: { q: 'QRS:', opts: [{ t: 'Estrecho y regular', go: 'vagal' }, { t: 'Estrecho e irregular', go: 'fa' }, { t: 'Ancho y regular', go: 'tv' }, { t: 'Ancho e irregular con onda delta previa', go: 'wpw' }] },
        fa: { q: 'FA: ¿cuánto tiempo y CHA₂DS₂-VASc?', opts: [{ t: 'Controlar frecuencia y anticoagular según puntaje', go: 'faT' }, { t: 'Cardiovertir de inmediato aunque lleve días', go: 'faX' }] },
        cv: { end: 'Cardioversión eléctrica sincronizada', d: 'Sedación si es posible. FA 120 a 200 J bifásico; flutter y TSV menos energía.' },
        desf: { end: 'Desfibrilación (no sincronizada) y RCP', d: 'FV o TV sin pulso: epinefrina y amiodarona 300 mg tras el 3er choque.' },
        vagal: { end: 'Maniobra vagal → adenosina 6 mg → 12 mg', d: 'Si es flutter, la adenosina lo desenmascara pero no lo corta.' },
        faT: { end: 'Control de frecuencia + anticoagulación', d: 'BB o diltiazem (no en FEVI reducida). ACOD si CHA₂DS₂-VASc ≥2 en hombres o ≥3 en mujeres. Ritmo: si ≥48 h, anticoagular 3 semanas antes.' },
        faX: { end: 'Riesgo de embolia', d: 'Con 48 h o más sin anticoagulación previa, cardiovertir puede soltar un trombo. Anticoagula 3 semanas o haz eco TE.' },
        tv: { end: 'Asume TV: amiodarona 150 mg IV', d: 'O procainamida. Nunca verapamilo.' },
        wpw: { end: 'FA preexcitada: procainamida o cardioversión', d: 'Prohibidos adenosina, BB, verapamilo y digoxina.' }
      },
      cases: [
        { t: 'Lucía, 71 años, con palpitaciones de 1 día.', data: [['ECG', 'Irregular, sin P, QRS estrecho'], ['FC', '132'], ['PA', '128/80'], ['CHA₂DS₂-VASc', '4']], path: { inest: 2, qrs: 1, fa: 0 }, end: 'faT' },
        { t: 'Mujer de 26 años con palpitaciones súbitas.', data: [['ECG', 'Regular a 186, QRS estrecho, sin P'], ['PA', '118/72']], path: { inest: 2, qrs: 0 }, end: 'vagal' },
        { t: 'Hombre de 62 años con infarto previo y palpitaciones.', data: [['ECG', 'Regular a 170, QRS 160 ms, disociación AV'], ['PA', '122/78']], path: { inest: 2, qrs: 2 }, end: 'tv' },
        { t: 'Hombre de 70 años con FA a 170, confuso.', data: [['PA', '72/40']], path: { inest: 0 }, end: 'cv' },
        { t: 'Joven de 22 años con WPW conocido.', data: [['ECG', 'Irregular a 240, QRS ancho y cambiante']], path: { inest: 2, qrs: 3 }, end: 'wpw' }
      ]
    }
  },
  sliders: {
    chads: { title: 'FA: CHA₂DS₂-VASc', topics: ['taqui'], label: 'Puntaje CHA₂DS₂-VASc', unit: 'puntos', min: 0, max: 9, step: 1, start: 2,
      intro: 'IC 1 · HTA 1 · edad ≥75 2 · DM 1 · EVC/AIT 2 · vascular 1 · edad 65–74 1 · mujer 1. Las mujeres suman 1 solo por el sexo.',
      bands: [[0, '0: bajo riesgo', 'ok', 'No anticoagular (hombre con 0, o mujer con 1 que solo es por el sexo).'], [1, '1: considerar', 'warn', 'Hombre con 1 (o mujer con 2): considera anticoagulación según preferencia y riesgo de sangrado.'], [9, '2 o más: anticoagular', 'bad', 'Hombre ≥2 o mujer ≥3: ACOD (apixabán, rivaroxabán). Warfarina solo con estenosis mitral moderada-grave o válvula mecánica. La aspirina no sirve.']] },
    fevi: { title: 'IC: la fracción de expulsión', topics: ['ic'], label: 'FEVI', unit: '%', min: 10, max: 75, step: 1, start: 30,
      intro: 'La FEVI decide qué fármacos y dispositivos sirven.',
      bands: [[35, 'Reducida, 35% o menos', 'bad', 'Los 4 pilares (ARNI, BB, ARM, iSGLT2). Si sigue ≤35% tras 3 meses: DAI; con BRI y QRS ≥150: resincronización.'], [40, 'Reducida, 36 a 40%', 'bad', 'Los 4 pilares. Evita AINE, glitazonas y verapamilo o diltiazem.'], [49, 'Levemente reducida', 'warn', '41 a 49%. iSGLT2 y diurético; considera ARNI, BB y ARM.'], [75, 'Preservada', 'ok', '50% o más. iSGLT2, control de la PA, diurético para la congestión y tratar FA o isquemia.']] }
  },
  cases: [
    { id: 'g-taqui', topic: 'taqui', subj: 'cardio',
      title: 'El pulso que no se ordena', place: 'Urgencias',
      patient: { name: 'Lucía', age: 71, sex: 'M', skin: '#E2B08A', hair: '#B0B0B0', gown: '#F2A0B8' },
      intro: 'Hipertensa y diabética. Palpitaciones desde ayer. Pulso irregular a 132.',
      extra: { label: 'CHA₂DS₂', unit: '' },
      start: { FC: 132, PAS: 128, PAD: 80, SpO2: 96, FR: 18, X: '?' },
      nodes: [
        { tag: 'Llegada', ecg: 'tachy',
          text: 'ECG: FA a 132, QRS estrecho. Estable.',
          q: '¿Qué haces primero?',
          A: { t: 'Cardioversión eléctrica de inmediato', ok: false, res: 'Lleva más de un día sin anticoagular: embolia cerebral tras la cardioversión.', vit: { PAS: 150 } },
          B: { t: 'Control de frecuencia con metoprolol', ok: true, res: 'FC 92.', vit: { FC: 92 } },
          why: 'Estable y con más de 24 a 48 h: control de frecuencia; el ritmo después de anticoagular.' },
        { tag: 'Anticoagulación', ecg: 'normal', vit: { X: 4 },
          text: 'CHA₂DS₂-VASc: HTA 1, DM 1, 71 años 1, mujer 1 = 4. TFG 68.',
          q: '¿Qué indicas?',
          A: { t: 'Aspirina 100 mg', ok: false, res: 'La aspirina no previene embolias en FA y también sangra.' },
          B: { t: 'Apixabán 5 mg c/12 h', ok: true, res: 'Inicia apixabán.' },
          why: 'Mujer con ≥3 puntos: anticoagulante oral directo.' },
        { tag: 'Estudio', ecg: 'normal',
          text: 'Pregunta por qué le dio.',
          q: '¿Qué estudios pides?',
          A: { t: 'TSH, ecocardiograma y electrolitos', ok: true, res: 'TSH normal; FEVI 58% con aurícula izquierda dilatada.' },
          B: { t: 'Ninguno: es la edad', ok: false, res: 'No buscaste hipertiroidismo ni cardiopatía estructural.' },
          why: 'Toda FA nueva: TSH y ecocardiograma.' },
        { tag: 'Un mes después', ecg: 'tachy', vit: { FC: 98, PAS: 132, PAD: 78, SpO2: 97, FR: 16, X: 4 },
          text: 'Sigue con palpitaciones molestas pese al BB. Lleva 4 semanas con apixabán sin faltar dosis.',
          q: '¿Qué le ofreces?',
          A: { t: 'Cardioversión electiva (ya anticoaguló 3 semanas) y seguir anticoagulada', ok: true, res: 'Recupera ritmo sinusal; sigue con apixabán por su puntaje.', ecg: 'normal', vit: { FC: 72 } },
          B: { t: 'Suspender el apixabán si recupera el ritmo', ok: false, res: 'El riesgo de embolia depende del puntaje, no del ritmo.' },
          why: 'Tras 3 semanas de anticoagulación se puede cardiovertir; la anticoagulación crónica sigue por el CHA₂DS₂-VASc.' }
      ] },
    { id: 'g-bradi', topic: 'bradi', subj: 'cardio',
      title: 'Síncope en el mercado', place: 'Urgencias',
      patient: { name: 'Don Rafael', age: 79, sex: 'H', skin: '#C98B62', hair: '#B0B0B0', gown: '#5BA7E0' },
      intro: 'Síncope sin pródromo; mareo de una semana. Toma metoprolol.',
      extra: { label: 'K', unit: 'mEq/L' },
      start: { FC: 36, PAS: 84, PAD: 50, SpO2: 94, FR: 18, X: 4.6 },
      nodes: [
        { tag: 'Llegada', ecg: 'brady',
          text: 'ECG: bloqueo AV completo con escape de QRS ancho.',
          q: '¿Qué das primero?',
          A: { t: 'Atropina 1 mg IV mientras preparas el marcapasos transcutáneo', ok: true, res: 'No responde: FC 38.', vit: { FC: 38 } },
          B: { t: 'Esperar a cardiología sin tratar', ok: false, res: 'Hace una pausa de 8 segundos y convulsiona.', vit: { FC: 20, PAS: 60 } },
          why: 'Bradicardia inestable: atropina; sin respuesta, marcapasos o dopamina.' },
        { tag: 'Minuto 10', ecg: 'brady',
          text: 'Atropina 3 mg sin respuesta.',
          q: '¿Siguiente paso?',
          A: { t: 'Marcapasos transcutáneo o dopamina', ok: true, res: 'Captura a 70; PA 112/66.', ecg: 'normal', vit: { FC: 70, PAS: 112, PAD: 66 } },
          B: { t: 'Otra dosis de atropina de 1 mg', ok: false, res: 'Ya llegaste al máximo y el bloqueo es infranodal.' },
          why: 'Escape ancho = infranodal: la atropina no sirve.' },
        { tag: 'Hora 2', ecg: 'normal',
          text: 'K 4.6, TSH normal, troponina normal.',
          q: '¿Qué haces con el metoprolol?',
          A: { t: 'Suspenderlo y esperar 48 h a ver si se recupera', ok: true, res: 'A las 48 h sigue en bloqueo completo.' },
          B: { t: 'Seguir dándolo', ok: false, res: 'El betabloqueador empeora cualquier bloqueo.' },
          why: 'Antes del marcapasos definitivo, descarta causas reversibles como fármacos.' },
        { tag: 'Día 3', ecg: 'normal', vit: { FC: 70, PAS: 126, PAD: 74, SpO2: 97, FR: 16 },
          text: 'Persiste el bloqueo completo sin el fármaco.',
          q: '¿Qué indicas?',
          A: { t: 'Marcapasos definitivo', ok: true, res: 'Se implanta; egresa sin síncopes.' },
          B: { t: 'Alta con atropina oral', ok: false, res: 'No existe tratamiento oral para un bloqueo completo infranodal.' },
          why: 'BAV completo sin causa reversible: marcapasos definitivo.' }
      ] },
    { id: 'g-ic', topic: 'ic', subj: 'cardio',
      title: 'Ahogado a medianoche', place: 'Urgencias',
      patient: { name: 'Alfonso', age: 67, sex: 'H', skin: '#C98B62', hair: '#9A9A9A', gown: '#5BA7E0' },
      intro: 'IC con FEVI 30% por infarto previo. Comió en una fiesta y dejó la furosemida 3 días. Llega sentado, sin poder hablar.',
      extra: { label: 'NT-proBNP', unit: '' },
      start: { FC: 118, PAS: 188, PAD: 104, SpO2: 82, FR: 34, X: 9800 },
      nodes: [
        { tag: 'Llegada', ecg: 'tachy',
          text: 'Estertores hasta los vértices, extremidades calientes.',
          q: '¿Qué haces?',
          A: { t: 'CPAP, nitroglicerina IV a dosis alta y furosemida IV', ok: true, res: 'En 40 minutos: SpO2 93%, PA 142/86.', vit: { SpO2: 93, PAS: 142, PAD: 86, FR: 24 } },
          B: { t: 'Solo oxígeno por puntas y morfina', ok: false, res: 'Se agota y hay que intubarlo.', vit: { SpO2: 78 } },
          why: 'Edema agudo hipertensivo: VMNI, vasodilatador y diurético.' },
        { tag: 'Hora 2', ecg: 'tachy', vit: { FC: 102 },
          text: 'Toma carvedilol. Mejora la congestión; PA 136/80.',
          q: '¿Qué haces con el carvedilol?',
          A: { t: 'Suspenderlo siempre en la descompensación', ok: false, res: 'Al suspenderlo pierde el beneficio y hay rebote de taquicardia.' },
          B: { t: 'Continuarlo (solo se suspende si hay choque o bradicardia grave)', ok: true, res: 'Lo mantiene.' },
          why: 'En la IC aguda sin choque se continúa el betabloqueador.' },
        { tag: 'Día 3', ecg: 'normal', vit: { FC: 84, PAS: 124, PAD: 74, SpO2: 96, FR: 18, X: 2100 },
          text: 'Sin congestión. Toma IECA, carvedilol y furosemida. K 4.4, TFG 58.',
          q: '¿Qué ajustas antes del egreso?',
          A: { t: 'Cambiar IECA por ARNI (36 h después) y agregar espironolactona e iSGLT2', ok: true, res: 'Egresa con los 4 pilares.' },
          B: { t: 'Dejar igual y subir la furosemida', ok: false, res: 'La furosemida no cambia la sobrevida.' },
          why: 'Antes del egreso se completan los 4 pilares.' },
        { tag: 'Seguimiento', ecg: 'normal',
          text: 'Pregunta cómo evitar volver.',
          q: '¿Qué le enseñas?',
          A: { t: 'Pesarse diario; si sube 2 kg en 3 días, avisar. Sal menor de 2 g y apego a los fármacos', ok: true, res: 'Sin reingresos en 6 meses.' },
          B: { t: 'Tomar AINE para el dolor de rodillas', ok: false, res: 'Los AINE retienen sodio: reingresa en 2 semanas.' },
          why: 'Educación y evitar desencadenantes reducen reingresos.' }
      ] }
  ]
};
