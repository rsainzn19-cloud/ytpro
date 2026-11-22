// Tema 35 · Bradiarritmias y bloqueos (Cardiología, semana 10)
const T = { topic: 'bradi', subj: 'cardio' };
const q = (o) => ({ ...T, ...o });
const SRC = { short: 'De tu Guía Cardio', vs: 'tu guía', name: 'Guía Cardio · Ximena Cors Cepeda (EMIS 5)', url: 'https://docs.google.com/document/d/1KD6KncWKFzExg3jRxPwSSYhywjqoqJN6KhAD_fr6TWk/edit' };

export default {
  lessons: {
    bradi: {
      hook: 'Una bradicardia preocupa por dos cosas: si da síntomas (síncope, hipotensión) y si el bloqueo está debajo del nodo AV (Mobitz II y completo), porque esos terminan en marcapasos.',
      nn: [], yt: 'bradyarrhythmias AV block Mobitz pacemaker',
      video: [
        { ch: 'Del nodo sinusal al bloqueo completo', sc: [
          { v: { k: 'title', t: 'Bradiarritmias y bloqueos', s: 'Semana 10 · Cardiología' },
            say: 'Semana diez: las bradicardias. Hay dos sitios donde puede fallar el sistema: el nodo sinusal, que no dispara, y el nodo auriculoventricular o el sistema de His, que no conduce.' },
          { v: { k: 'list', t: 'Bloqueos AV', items: ['1er grado: PR largo, todas conducen', 'Mobitz I: el PR se alarga hasta que una P no conduce', 'Mobitz II: PR fijo y de pronto una P sin QRS', '3er grado: P y QRS van cada quien a su ritmo'] },
            say: 'Los bloqueos auriculoventriculares. Primer grado: el PR mide más de doscientos milisegundos, pero todas las P conducen. Mobitz uno o Wenckebach: el PR se alarga latido a latido hasta que una P no conduce. Mobitz dos: el PR es fijo y de repente una P se queda sin QRS. Tercer grado: aurículas y ventrículos laten cada quien a su ritmo.' },
          { v: { k: 'vs', a: 'Mobitz I', b: 'Mobitz II', rows: [['Dónde', 'Nodo AV', 'His o ramas'], ['QRS', 'Estrecho', 'A menudo ancho'], ['Atropina', 'Mejora', 'No sirve o empeora'], ['Riesgo', 'Benigno', 'Pasa a completo'], ['Tratamiento', 'Observar', 'Marcapasos']] },
            say: 'La diferencia clave: el Mobitz uno vive en el nodo, suele ser benigno y responde a atropina. El Mobitz dos está debajo del nodo, puede progresar de golpe a bloqueo completo y necesita marcapasos aunque no dé síntomas.' }
        ] },
        { ch: 'Qué hacer en urgencias', sc: [
          { v: { k: 'flow', t: 'Bradicardia inestable', steps: ['Atropina 1 mg IV', 'Si no responde: marcapasos transcutáneo', 'O dopamina o epinefrina en infusión', 'Marcapasos definitivo'] },
            say: 'Si la bradicardia da hipotensión, alteración del estado mental, dolor torácico o falla cardiaca: atropina un miligramo intravenoso, repetible. Si no responde, marcapasos transcutáneo o infusión de dopamina o epinefrina, mientras se coloca un marcapasos transvenoso.' },
          { v: { k: 'tip', kind: 'trap', t: 'Antes de poner marcapasos, busca causas reversibles: fármacos (BB, calcioantagonistas, digoxina), hiperkalemia, hipotiroidismo e infarto inferior.' },
            say: 'Antes de pensar en marcapasos busca lo reversible: betabloqueadores, calcioantagonistas, digoxina, hiperkalemia, hipotiroidismo y el infarto inferior, que da bloqueos que suelen recuperarse.' },
          { v: { k: 'mnemo', t: 'Más largo, más largo, cae: Wenckebach', d: 'PR que se alarga hasta que cae un QRS = Mobitz I. PR fijo con caída súbita = Mobitz II. P y QRS sin relación = completo.' },
            say: 'La rima: más largo, más largo, cae, y es Wenckebach. Si las P y los QRS no se ponen de acuerdo, es bloqueo completo.' }
        ] }
      ],
      sections: [
        { h: 'Disfunción del nodo sinusal', html: `
<ul>
<li><b>Bradicardia sinusal</b> (&lt;60 lpm): fisiológica en atletas y al dormir; patológica si da síntomas. Causas: fármacos (BB, calcioantagonistas no DHP, digoxina, amiodarona), <b>hipotiroidismo</b>, hipotermia, hiperkalemia, <b>hipertensión intracraneal</b> (Cushing), infarto inferior, apnea del sueño.</li>
<li><b>Enfermedad del nodo sinusal</b> (ancianos, fibrosis): bradicardia, pausas &gt;3 s, incompetencia cronotrópica y <b>síndrome taqui-bradi</b> (alterna con FA).</li>
<li>Tratamiento: suspender lo que la causa; <b>marcapasos</b> si hay síntomas que se correlacionan con la bradicardia (es la indicación más común de marcapasos).</li>
</ul>` },
        { h: 'Bloqueos AV', html: `
<div class="tablewrap"><table class="mini">
<tr><th>Bloqueo</th><th>ECG</th><th>Sitio</th><th>Manejo</th></tr>
<tr><td><b>1er grado</b></td><td>PR &gt;200 ms, todas conducen</td><td>Nodo AV</td><td>Observar</td></tr>
<tr><td><b>2º Mobitz I</b> (Wenckebach)</td><td>PR que se alarga hasta que una P no conduce; RR que se acorta</td><td>Nodo AV</td><td>Observar; atropina si hay síntomas</td></tr>
<tr><td><b>2º Mobitz II</b></td><td>PR fijo; P bloqueada de forma súbita; QRS a menudo ancho</td><td>His-Purkinje</td><td><b>Marcapasos</b> aun sin síntomas</td></tr>
<tr><td><b>2:1 y avanzado</b></td><td>2 o más P seguidas sin conducir</td><td>Variable</td><td>Marcapasos si es infranodal o sintomático</td></tr>
<tr><td><b>3er grado</b></td><td>Disociación AV: P regulares, QRS regulares, sin relación</td><td>Nodo o infranodal</td><td><b>Marcapasos</b></td></tr>
</table></div>
<ul>
<li>Escape nodal: QRS estrecho, 40–60 lpm. Escape ventricular: QRS ancho, 20–40 lpm (más inestable).</li>
<li>El infarto <b>inferior</b> (coronaria derecha irriga el nodo AV) da bloqueos nodales transitorios; el <b>anterior</b> da bloqueos infranodales de mal pronóstico.</li>
<li>Bloqueo completo congénito: lupus materno (anti-Ro). Adquirido: degeneración (Lev-Lenègre), Lyme, sarcoidosis, endocarditis aórtica con absceso, post TAVI.</li>
</ul>` },
        { h: 'Bloqueos de rama', html: `
<ul>
<li>QRS ≥120 ms. <b>Derecha (BRDHH)</b>: rSR′ en V1 (“orejas de conejo”), S ancha en DI y V6; puede ser normal; nuevo en TEP.</li>
<li><b>Izquierda (BRIHH)</b>: QS o rS en V1, R ancha y mellada en DI, aVL, V5–V6; casi siempre hay cardiopatía (HTA, isquemia, estenosis aórtica). Nuevo con dolor torácico: tratar como SCA de alto riesgo.</li>
<li>Hemibloqueo anterior izquierdo: eje a la izquierda (–45°). Bifascicular (BRDHH + hemibloqueo) con síncope → estudio y marcapasos.</li>
</ul>` },
        { h: 'Manejo agudo de la bradicardia', html: `
<ol>
<li>¿Hay datos de inestabilidad? Hipotensión, alteración mental, choque, dolor isquémico, falla cardiaca aguda.</li>
<li><b>Atropina 1 mg IV</b> cada 3–5 min (máx 3 mg). Poco útil en bloqueo infranodal y en el corazón trasplantado.</li>
<li>Si no responde: <b>marcapasos transcutáneo</b> o infusión de <b>dopamina</b> (5–20 µg/kg/min) o <b>epinefrina</b> (2–10 µg/min); luego transvenoso.</li>
<li>Causas reversibles: hiperkalemia (calcio IV), intoxicación por BB (glucagón), por calcioantagonistas (calcio, insulina en dosis alta), digoxina (anticuerpos antidigoxina).</li>
</ol>` },
        { h: 'Cómo lo preguntan en el examen', html: `
<ul>
<li>Asintomático con PR de 240 ms → <b>nada</b>.</li>
<li>PR que se alarga y cae un QRS, joven sano dormido → Wenckebach benigno.</li>
<li>PR fijo con caída súbita y QRS ancho, asintomático → <b>marcapasos</b>.</li>
<li>Síncope con disociación AV y FC 35 → bloqueo completo → marcapasos.</li>
<li>Bradicardia con hipotensión → <b>atropina</b>, después transcutáneo.</li>
</ul>` }
      ],
      mnemo: { t: 'Más largo, más largo, cae = Wenckebach', d: 'PR que se alarga hasta que una P no conduce: Mobitz I. Si el PR no cambia y de pronto cae, es Mobitz II. Si P y QRS no se ponen de acuerdo, es completo.' },
      pearl: 'Mobitz II y bloqueo completo van a marcapasos aunque el paciente no tenga síntomas: el bloqueo está debajo del nodo y puede causar asistolia.',
      trap: 'La atropina mejora los bloqueos nodales, pero en el Mobitz II puede empeorar la conducción (más P llegan a un His que no conduce). Ve directo a marcapasos transcutáneo.',
      guide: [
        'ACLS 2020: la dosis de atropina subió a 1 mg (antes 0.5 mg), máximo 3 mg.',
        'Guías ESC 2021 de estimulación: marcapasos en Mobitz II, 2:1 infranodal, avanzado y completo aunque no haya síntomas.'
      ],
      refs: [
        'Glikson M, et al. 2021 ESC Guidelines on cardiac pacing and cardiac resynchronization therapy. Eur Heart J 2021.',
        'Kusumoto FM, et al. 2018 ACC/AHA/HRS Guideline on the evaluation and management of bradycardia. Circulation 2019.',
        'Panchal AR, et al. 2020 AHA Guidelines for CPR and ECC: Adult advanced life support. Circulation 2020.'
      ]
    }
  },

  guias: {
    bradi: { src: SRC,
      puntos: [
        'Bradicardia sinusal patológica cuando &lt;40 o da síntomas; atropina e isoproterenol; marcapasos si es definitiva y sintomática.',
        'Enfermedad del nodo sinusal: síndrome taqui-bradi que coexiste con FA; la indicación más común de marcapasos; anticoagular la FA.',
        'Bloqueos: 1º sin tratamiento; Mobitz I atropina; Mobitz II marcapasos aun asintomático; 3º marcapasos.',
        'Ritmo de escape nodal (QRS estrecho) vs ventricular (QRS ancho).'
      ],
      ojo: ['La atropina ya no se recomienda en dosis de 0.5 mg: <b>1 mg IV</b> cada 3–5 min (ACLS 2020).'],
      cards: [['Asistolia que da síncope', 'Pausa ≥3 s']] }
  },

  cards: [
    ['Bloqueo AV de 1er grado', 'PR >200 ms; todas las P conducen'],
    ['Mobitz I (Wenckebach)', 'PR que se alarga hasta que una P no conduce; nodal, benigno'],
    ['Mobitz II', 'PR fijo con P bloqueada súbita; infranodal → marcapasos'],
    ['Bloqueo AV de 3er grado', 'Disociación AV → marcapasos'],
    ['Primer fármaco en bradicardia inestable', 'Atropina 1 mg IV (máx 3 mg)'],
    ['Bradicardia que no responde a atropina', 'Marcapasos transcutáneo o dopamina/epinefrina'],
    ['Indicación más común de marcapasos', 'Enfermedad del nodo sinusal sintomática'],
    ['Síndrome taqui-bradi', 'Enfermedad del nodo sinusal que alterna con FA'],
    ['IAM inferior y bloqueo AV', 'Nodal, transitorio (coronaria derecha)'],
    ['BRDHH en ECG', 'rSR′ en V1, S ancha en DI y V6'],
    ['BRIHH en ECG', 'QS en V1; R ancha y mellada en DI, aVL, V5–V6'],
    ['Bloqueo completo congénito', 'Lupus materno (anti-Ro)'],
    ['Intoxicación por betabloqueador', 'Glucagón IV']
  ],

  questions: [
    q({ id: 'bradi-01', dif: 1, stem: 'Hombre de 40 años asintomático con PR de 230 ms y todas las P conducidas. ¿Conducta?', opts: ['Marcapasos', 'Atropina', 'Ninguna; vigilancia', 'Isoproterenol', 'Estudio electrofisiológico urgente'], ans: 2,
      exp: 'El bloqueo AV de primer grado asintomático no requiere tratamiento.', why: ['No está indicado.', 'No hay bradicardia sintomática.', '', 'No está indicado.', 'No está indicado.'], ref: 'ACC/AHA/HRS 2018' }),
    q({ id: 'bradi-02', dif: 2, stem: 'ECG: PR que se alarga progresivamente (200, 280, 340 ms) hasta que una P no conduce, y se repite. Paciente asintomático. ¿Diagnóstico y conducta?', opts: ['Mobitz II: marcapasos', 'Mobitz I: observación', 'Bloqueo completo: marcapasos', 'Bloqueo de 1er grado: nada', 'FA: anticoagular'], ans: 1,
      exp: 'Wenckebach: bloqueo nodal, generalmente benigno; en asintomáticos solo se observa y se revisan fármacos.', why: ['El PR no es fijo.', '', 'Hay relación P-QRS.', 'Hay P no conducidas.', 'Hay P regulares.'], ref: 'ACC/AHA/HRS 2018' }),
    q({ id: 'bradi-03', dif: 2, stem: 'Mujer de 74 años asintomática. ECG: PR fijo de 180 ms con P bloqueadas súbitas y QRS de 140 ms. ¿Conducta?', opts: ['Observación', 'Marcapasos definitivo', 'Atropina oral', 'Suspender aspirina', 'Repetir ECG en 1 año'], ans: 1,
      exp: 'Mobitz II (infranodal, QRS ancho) tiene riesgo de progresar a bloqueo completo y asistolia: marcapasos aun sin síntomas.', why: ['Riesgo alto de progresión.', '', 'No es tratamiento.', 'No relacionado.', 'Riesgo alto.'], ref: 'ESC 2021' }),
    q({ id: 'bradi-04', dif: 1, stem: 'Hombre de 80 años con síncope. ECG: P a 80 lpm y QRS anchos a 34 lpm sin relación entre ellos. ¿Diagnóstico?', opts: ['Mobitz I', 'Bloqueo AV de 3er grado', 'Bradicardia sinusal', 'Bloqueo de 1er grado', 'FA lenta'], ans: 1,
      exp: 'Disociación AV con escape ventricular: bloqueo completo. Requiere marcapasos.', why: ['Hay relación P-QRS en Mobitz I.', '', 'Cada P tendría QRS.', 'Todas conducen.', 'Habría ondas f e irregularidad.'], ref: 'ESC 2021' }),
    q({ id: 'bradi-05', dif: 2, stem: 'Paciente con FC 36, PA 76/40 y confusión. ¿Primer fármaco?', opts: ['Adenosina', 'Atropina 1 mg IV', 'Amiodarona', 'Metoprolol', 'Diltiazem'], ans: 1,
      exp: 'Bradicardia inestable: atropina 1 mg IV, repetible hasta 3 mg; si no responde, marcapasos transcutáneo o dopamina/epinefrina.', why: ['Es para TSV.', '', 'Es antiarrítmico para taquicardias.', 'Empeora.', 'Empeora.'], ref: 'AHA 2020' }),
    q({ id: 'bradi-06', dif: 2, stem: 'La bradicardia sintomática del caso anterior no responde a 3 mg de atropina. ¿Siguiente paso?', opts: ['Más atropina', 'Marcapasos transcutáneo o infusión de dopamina/epinefrina', 'Cardioversión', 'Lidocaína', 'Observación'], ans: 1,
      exp: 'Atropina fallida: estimulación transcutánea o cronotrópicos en infusión, como puente al marcapasos transvenoso.', why: ['Ya llegó a la dosis máxima.', '', 'Es para taquiarritmias.', 'Es para TV.', 'Está inestable.'], ref: 'AHA 2020' }),
    q({ id: 'bradi-07', dif: 2, stem: 'Paciente con IAM inferior y bloqueo AV de 2º grado Mobitz I con QRS estrecho, PA normal. ¿Conducta?', opts: ['Marcapasos definitivo inmediato', 'Vigilancia; suele ser transitorio', 'Amiodarona', 'Isoproterenol', 'Desfibrilación'], ans: 1,
      exp: 'El infarto inferior (coronaria derecha irriga el nodo AV) causa bloqueos nodales que suelen resolver con la reperfusión.', why: ['No suele ser necesario.', '', 'No está indicada.', 'Aumenta el consumo de O₂.', 'No es arritmia desfibrilable.'], ref: 'ESC 2023' }),
    q({ id: 'bradi-08', dif: 2, stem: 'Mujer de 78 años con mareo. Holter: episodios de FA rápida que terminan en pausas de 5 segundos. ¿Diagnóstico?', opts: ['Mobitz II', 'Síndrome taqui-bradi (enfermedad del nodo sinusal)', 'WPW', 'Bloqueo completo', 'Taquicardia sinusal inapropiada'], ans: 1,
      exp: 'Alternancia de taquiarritmias auriculares y pausas: enfermedad del nodo sinusal. Marcapasos (para poder dar fármacos para la FA) y anticoagulación según CHA₂DS₂-VASc.', why: ['No hay patrón de bloqueo AV.', '', 'No hay preexcitación.', 'No hay disociación AV.', 'No hay pausas.'], ref: 'ESC 2021' }),
    q({ id: 'bradi-09', dif: 3, stem: 'Paciente con ERC que llega con FC 38, QRS ancho y T picudas. ¿Qué das primero?', opts: ['Atropina', 'Gluconato de calcio IV', 'Marcapasos definitivo', 'Amiodarona', 'Digoxina'], ans: 1,
      exp: 'Bradicardia por hiperkalemia: el calcio estabiliza la membrana de inmediato; después insulina con glucosa y eliminar K.', why: ['No corrige la causa.', '', 'Es una causa reversible.', 'Contraindicada.', 'Empeora.'], ref: 'AHA 2020' }),
    q({ id: 'bradi-10', dif: 2, stem: 'Paciente con intento suicida con propranolol: FC 40, PA 70/40, glucosa baja. ¿Antídoto específico?', opts: ['Naloxona', 'Glucagón IV', 'Flumazenil', 'Atropina sola', 'Bicarbonato'], ans: 1,
      exp: 'El glucagón aumenta el AMPc por una vía independiente del receptor β: es el antídoto de la intoxicación por betabloqueadores.', why: ['Es para opioides.', '', 'Es para benzodiacepinas.', 'Suele ser insuficiente.', 'Es para antidepresivos tricíclicos.'], ref: 'AHA 2020' }),
    q({ id: 'bradi-11', dif: 1, stem: '¿Qué hallazgo del ECG define al bloqueo de rama derecha?', opts: ['QS en V1 y R mellada en V6', 'rSR′ en V1 con S ancha en DI y V6', 'PR corto con onda delta', 'Ondas f', 'T picudas'], ans: 1,
      exp: 'BRDHH: QRS ≥120 ms con rSR′ (“orejas de conejo”) en V1 y S ancha en derivaciones laterales.', why: ['Es BRIHH.', '', 'Es WPW.', 'Es FA.', 'Es hiperkalemia.'], ref: 'Guía Cardio (rotación)' }),
    q({ id: 'bradi-12', dif: 2, stem: 'Recién nacido con bradicardia fetal y bloqueo AV completo. ¿Qué anticuerpo materno buscas?', opts: ['Anti-DNA', 'Anti-Ro (SSA)', 'Anti-centrómero', 'Anti-Jo1', 'ANCA'], ans: 1,
      exp: 'El anti-Ro cruza la placenta y daña el sistema de conducción fetal (lupus neonatal).', why: ['No es el responsable.', '', 'Es de CREST.', 'Es de miositis.', 'Es de vasculitis.'], ref: 'ESC 2021' }),
    q({ id: 'bradi-13', dif: 2, stem: 'Paciente con hipotermia, edema periorbitario, piel seca y FC 48. ¿Qué estudio pides para la causa de la bradicardia?', opts: ['Troponina', 'TSH y T4 libre', 'Dímero D', 'Ecocardiograma transesofágico', 'Cateterismo'], ans: 1,
      exp: 'El hipotiroidismo (mixedema) es causa reversible de bradicardia sinusal.', why: ['No sugiere isquemia.', '', 'No sugiere TEP.', 'No es lo indicado.', 'No es lo indicado.'], ref: 'ACC/AHA/HRS 2018' }),
    q({ id: 'bradi-14', dif: 3, stem: 'Paciente con traumatismo craneoencefálico que presenta HTA, bradicardia y respiración irregular. ¿Qué indica?', opts: ['Hipotiroidismo', 'Hipertensión intracraneal (reflejo de Cushing)', 'Bloqueo AV', 'Intoxicación por BB', 'Síncope vasovagal'], ans: 1,
      exp: 'La tríada de Cushing (HTA, bradicardia, respiración irregular) indica herniación inminente por hipertensión intracraneal.', why: ['No en este contexto.', '', 'No hay datos en el ECG.', 'No hay antecedente.', 'No cursa con HTA.'], ref: 'ACC/AHA/HRS 2018' }),
    q({ id: 'bradi-15', dif: 2, stem: 'Paciente con BRIHH nuevo y dolor torácico típico de 1 hora. ¿Cómo se maneja?', opts: ['Como dolor no cardiaco', 'Como SCA de alto riesgo: valorar reperfusión urgente', 'Solo marcapasos', 'Alta con AINE', 'Holter ambulatorio'], ans: 1,
      exp: 'El BRIHH nuevo con clínica de isquemia se considera equivalente de IAMCEST: angiografía urgente.', why: ['Riesgo alto.', '', 'No es la prioridad.', 'Peligroso.', 'Peligroso.'], ref: 'ESC 2023' })
  ]
};
