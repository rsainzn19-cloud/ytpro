// Tema 19 · Enfermedad por reflujo gastroesofágico (Gastroenterología, semana 2)
const T = { topic: 'erge', subj: 'gastro' };
const q = (o) => ({ ...T, ...o });

export default {
  lessons: {
    erge: {
      hook: 'Pirosis sin datos de alarma: prueba con IBP y no pidas endoscopia. Aprende cuándo sí, cómo se clasifica la esofagitis y qué hacer con un Barrett.',
      nn: [['gerd', 'Gastroesophageal Reflux Disease (GERD)'], ['esophagitis', 'Esophagitis']],
      yt: 'GERD Barrett esophagus',
      anim: 'erge',
      compare: ['erge-eeo'],
      video: [
        { ch: 'Por qué refluye', sc: [
          { v: { k: 'title', t: 'Reflujo gastroesofágico (ERGE)', s: 'Tema 19 · Gastroenterología' },
            say: 'Bienvenido a la guardia. Hoy toca la enfermedad por reflujo gastroesofágico, o ERGE. Vas a aprender cuándo basta una prueba con inhibidor de la bomba de protones, cuándo pedir endoscopia y qué hacer con un esófago de Barrett.' },
          { v: { k: 'case', t: 'Consulta externa', p: { name: 'Julián', age: 54, sex: 'H', skin: '#C9956B', hair: '#3A2A1A', gown: '#8FB8E8' }, text: 'Pirosis y regurgitación tras cenar y al acostarse, desde hace 6 meses. Obesidad y tabaquismo. Sin disfagia ni pérdida de peso.', vit: { IMC: '33', FC: '76' } },
            say: 'Conoce a Julián, de cincuenta y cuatro años, con obesidad y tabaquismo. Desde hace seis meses tiene ardor retroesternal y regurgitación después de cenar y al acostarse. No tiene disfagia ni ha bajado de peso. Veamos por qué le sube el ácido.' },
          { v: { k: 'anim', id: 'erge', step: 0 },
            say: 'Normalmente, el esfínter esofágico inferior se mantiene cerrado y solo se abre para dejar pasar el bolo. El diafragma lo abraza desde afuera y refuerza la barrera. Así, el ácido se queda en el estómago.' },
          { v: { k: 'anim', id: 'erge', step: 1 },
            say: 'En la ERGE, el esfínter se relaja sin que haya deglución. Son las relajaciones transitorias, el mecanismo más frecuente. Si además hay hernia hiatal, el esfínter sube al tórax y pierde el apoyo del diafragma. Entonces el ácido sube al esófago.' },
          { v: { k: 'list', t: 'Lo empeora', items: ['Obesidad y hernia hiatal', 'Comidas abundantes o nocturnas', 'Tabaco y embarazo', 'Calcioantagonistas, nitratos, anticolinérgicos'] },
            say: 'Empeoran el reflujo la obesidad, la hernia hiatal, las comidas abundantes o tarde en la noche, el tabaco y el embarazo. También los fármacos que relajan el esfínter, como los calcioantagonistas, los nitratos y los anticolinérgicos. Julián tiene dos de estos factores.' }
        ] },
        { ch: 'Síntomas y datos de alarma', sc: [
          { v: { k: 'list', t: 'Síntomas', items: ['Típicos: pirosis y regurgitación', 'Tos crónica y ronquera', 'Asma de difícil control', 'Erosiones dentales', 'Dolor torácico no cardiaco'] },
            say: 'Los síntomas típicos son la pirosis y la regurgitación. Pero el reflujo también da manifestaciones atípicas: tos crónica, ronquera, asma de difícil control, erosiones dentales y dolor torácico no cardiaco.' },
          { v: { k: 'tip', kind: 'trap', t: 'Dolor torácico “por reflujo” en un hombre de 58 años con factores de riesgo: primero descarta isquemia (ECG y troponina).' },
            say: 'Ojo con esta trampa. Si un hombre de cincuenta y ocho años con factores de riesgo dice que su dolor torácico es por reflujo, primero descarta isquemia con electrocardiograma y troponina. Después piensa en el esófago.' },
          { v: { k: 'mnemo', t: 'Alarma = “DOPA-V”', d: 'Disfagia · Odinofagia · Pérdida de peso · Anemia o sangrado · Vómito persistente → endoscopia.' },
            say: 'Ahora, los datos de alarma. Recuerda DOPA-V: disfagia, odinofagia, pérdida de peso, anemia o sangrado, y vómito persistente. Cualquiera de ellos manda directo a endoscopia, no a una prueba con inhibidor de bomba.' },
          { v: { k: 'quiz', q: 'Pirosis de años; ahora disfagia a sólidos y pérdida de 6 kg. ¿Qué sigue?', opts: ['Doble dosis de IBP', 'Endoscopia con biopsias'], a: 1 },
            say: 'Pausa. Un hombre con pirosis de años ahora tiene disfagia progresiva a sólidos y bajó seis kilos. ¿Qué sigue?',
            exp: 'Endoscopia con biopsias. La disfagia y la pérdida de peso son datos de alarma. Hay que descartar una estenosis péptica o un adenocarcinoma sobre Barrett.' }
        ] },
        { ch: 'La prueba con IBP', sc: [
          { v: { k: 'flow', t: 'Sin datos de alarma', steps: ['IBP 1 vez al día por 8 semanas', '30–60 min antes del desayuno', 'Peso, cabecera alta, no cenar tarde', '¿Responde? → dosis mínima eficaz', '¿No responde? → endoscopia'] },
            say: 'Julián no tiene datos de alarma, así que empiezas una prueba con inhibidor de bomba. Una vez al día por ocho semanas, de treinta a sesenta minutos antes del desayuno. Además, que baje de peso, eleve la cabecera y no cene dos o tres horas antes de acostarse. Si responde, bajas a la dosis mínima eficaz. Si no responde, endoscopia.' },
          { v: { k: 'quiz', q: 'Toma omeprazol en la noche y sigue con pirosis. ¿Primer ajuste?', opts: ['Cirugía antirreflujo', 'Tomarlo antes del desayuno'], a: 1 },
            say: 'Pausa. Una paciente toma omeprazol en la noche, antes de dormir, y sigue con pirosis. ¿Cuál es el primer ajuste?',
            exp: 'Tomarlo de treinta a sesenta minutos antes del desayuno, y revisar que lo tome diario. El inhibidor de bomba solo bloquea las bombas activas, y estas se activan con la comida.' }
        ] },
        { ch: 'Endoscopia y Los Ángeles', sc: [
          { v: { k: 'list', t: 'Endoscopia si…', items: ['Datos de alarma', 'Sin respuesta a 8 semanas de IBP', 'Tamizaje de Barrett: ≥3 factores de riesgo', 'Antes de cirugía antirreflujo'] },
            say: 'Pides endoscopia si hay datos de alarma, si no responde a ocho semanas de inhibidor de bomba o antes de una cirugía antirreflujo. También para tamizaje de Barrett, si hay reflujo crónico y tres o más factores de riesgo. Por ejemplo: hombre, mayor de cincuenta años, raza blanca, obesidad central, tabaquismo o un familiar con Barrett o adenocarcinoma.' },
          { v: { k: 'anim', id: 'erge', step: 2 },
            say: 'En la endoscopia, la esofagitis se clasifica con Los Ángeles. Grado A: erosiones de cinco milímetros o menos. Grado B: más de cinco milímetros, sin unirse entre pliegues. Grado C: confluyen, pero en menos del setenta y cinco por ciento de la circunferencia. Grado D: setenta y cinco por ciento o más.' },
          { v: { k: 'list', t: 'Confirman ERGE', items: ['Esofagitis LA B, C o D (Lyon 2.0)', 'Barrett largo (≥3 cm) en la biopsia', 'Estenosis péptica', 'pH-impedancia: ácido >6% del tiempo'] },
            say: 'Hay hallazgos que confirman la ERGE: esofagitis Los Ángeles B, C o D, un Barrett largo y una estenosis péptica. Si la endoscopia es normal y hay duda, pide pH-impedancia de veinticuatro horas sin inhibidor de bomba. Un tiempo de exposición al ácido mayor de seis por ciento es concluyente.' },
          { v: { k: 'vs', cmp: 'erge-eeo', rows: [0, 1, 3] },
            say: 'Un diferencial que siempre preguntan es la esofagitis eosinofílica. Piensa en ella en un hombre joven con atopia, disfagia e impactación de alimento. En la endoscopia hay anillos y surcos, y la biopsia muestra quince o más eosinófilos por campo de alto poder.' }
        ] },
        { ch: 'Esófago de Barrett', sc: [
          { v: { k: 'anim', id: 'erge', step: 3 },
            say: 'Con años de reflujo, el epitelio escamoso del esófago distal puede cambiar a epitelio columnar con células caliciformes. Eso es Barrett: metaplasia intestinal de un centímetro o más por arriba de la unión esofagogástrica. Se ve como lengüetas color salmón y es el precursor del adenocarcinoma.' },
          { v: { k: 'list', t: 'Barrett: qué hacer', items: ['Sin displasia <3 cm: endoscopia c/5 años', 'Sin displasia ≥3 cm: c/3 años', 'Bajo grado: ablación o vigilancia anual', 'Alto grado: resección endoscópica + ablación', 'Todos: IBP'] },
            say: 'El manejo depende de la displasia. Sin displasia, inhibidor de bomba y vigilancia endoscópica: cada cinco años si mide menos de tres centímetros, y cada tres si mide tres o más. Con displasia de bajo grado confirmada, ablación o vigilancia anual. Con displasia de alto grado, resección endoscópica de lo visible y ablación del resto.' },
          { v: { k: 'quiz', q: 'Barrett de 4 cm, metaplasia intestinal sin displasia. ¿Qué haces?', opts: ['Esofagectomía', 'IBP y endoscopia cada 3 años', 'Ablación inmediata'], a: 1 },
            say: 'Pausa. En la endoscopia hay una lengüeta color salmón de cuatro centímetros. La biopsia muestra metaplasia intestinal sin displasia. ¿Qué haces?',
            exp: 'Inhibidor de bomba y vigilancia endoscópica cada tres años, porque mide tres centímetros o más. Sin displasia no se opera ni se hace ablación.' }
        ] },
        { ch: 'Tratamiento a largo plazo', sc: [
          { v: { k: 'anim', id: 'erge', step: 4 },
            say: 'Los inhibidores de bomba bloquean la bomba de hidrógeno y potasio de la célula parietal. Por eso se toman antes del desayuno, cuando las bombas se activan. La funduplicatura de Nissen, en cambio, envuelve el esófago distal con el fondo gástrico y rehace la barrera.' },
          { v: { k: 'list', t: 'Mantenimiento y cirugía', items: ['IBP indefinido: LA C o D y Barrett', 'Resto: dosis mínima o a demanda', 'Cirugía: ERGE confirmada y no controlada', 'Antes: pH-impedancia + manometría', 'Obesidad mórbida: bypass en Y de Roux'] },
            say: 'Si tuvo esofagitis Los Ángeles C o D, o Barrett, el inhibidor de bomba se mantiene de forma indefinida. En los demás, la dosis mínima eficaz o a demanda. La cirugía es para la ERGE confirmada que no se controla, o si el paciente no quiere medicamento de por vida. Antes de operar, confirma el reflujo con pH-impedancia y descarta acalasia con manometría. Con obesidad mórbida, la cirugía de elección es el bypass gástrico en Y de Roux.' },
          { v: { k: 'tip', kind: 'pearl', t: 'Sin alarma: IBP 8 semanas antes del desayuno, sin endoscopia. Con alarma o sin respuesta: endoscopia. Barrett se vigila; la displasia se trata por endoscopia.' },
            say: 'La perla para el examen: la pirosis sin datos de alarma se trata con inhibidor de bomba por ocho semanas, sin endoscopia. Con alarma o sin respuesta, endoscopia. Y el Barrett se vigila; la displasia se trata por endoscopia. Ahora ve a las preguntas del tema.' }
        ] }
      ],
      sections: [
        { h: 'Clínica', html: `
<ul>
<li><b>Típicos</b>: pirosis y regurgitación, peor después de comer y al acostarse.</li>
<li><b>Atípicos y extraesofágicos</b>: tos crónica, ronquera (laringitis), asma de difícil control, erosiones dentales, <b>dolor torácico no cardiaco</b> (descarta primero origen cardiaco).</li>
<li><b>Fisiopatología</b>: falla la barrera antirreflujo (EEI + crura diafragmáticas + ángulo de His). El mecanismo más frecuente son las <b>relajaciones transitorias del EEI</b> no deglutorias; la hernia hiatal separa el EEI del diafragma y atrapa ácido; un EEI hipotenso y el mal aclaramiento esofágico aumentan el daño.</li>
<li>Factores: obesidad, hernia hiatal, embarazo, tabaco, comidas abundantes o nocturnas, fármacos que relajan el esfínter (calcioantagonistas, nitratos, anticolinérgicos).</li>
</ul>` },
        { h: 'Datos de alarma → endoscopia', html: `
<ul>
<li><b>Disfagia</b>, odinofagia, pérdida de peso no intencional, sangrado digestivo o anemia ferropénica, vómito persistente, masa.</li>
<li>Síntomas que no responden a IBP en 8 semanas.</li>
<li>Tamizaje de <b>Barrett</b> (ACG 2022): ERGE crónica + ≥3 factores: hombre, &gt;50 años, raza blanca, obesidad central, tabaquismo, familiar de primer grado con Barrett o adenocarcinoma.</li>
<li><b>Clasificación de Los Ángeles</b> (A–D según la extensión de las erosiones). LA B, C o D (Lyon 2.0; Lyon 1.0 solo aceptaba C o D), Barrett largo (≥3 cm) o estenosis péptica confirman ERGE.</li>
<li><b>pH-impedancia ambulatoria</b> (sin IBP): cuando el diagnóstico es dudoso, endoscopia normal con síntomas refractarios, o antes de cirugía. Tiempo de exposición al ácido &gt;6% es concluyente.</li>
</ul>` },
        { h: 'Tratamiento', html: `
<ul>
<li>Bajar de peso, elevar la cabecera de la cama, no cenar 2–3 h antes de acostarse, dejar de fumar. Excluir alimentos solo si provocan síntomas.</li>
<li><b>IBP</b> una vez al día, 30–60 min antes del desayuno, por 8 semanas. Si la respuesta es parcial: ajustar el horario o dar dos dosis.</li>
<li>Después: bajar a la dosis mínima eficaz o a demanda. <b>Mantenimiento</b> indefinido en esofagitis LA C/D y Barrett.</li>
<li><b>Cirugía</b> (funduplicatura de Nissen, esfínter magnético): ERGE confirmada que no se controla o el paciente no quiere IBP de por vida; útil sobre todo para regurgitación. Obesidad mórbida: bypass gástrico en Y de Roux.</li>
<li>Vonoprazán (bloqueador de ácido competitivo con el potasio): opción en esofagitis erosiva grave.</li>
</ul>` },
        { h: 'Esófago de Barrett', html: `
<ul>
<li>Metaplasia <b>intestinal</b> (células caliciformes) que reemplaza al epitelio escamoso ≥1 cm por arriba de la unión esofagogástrica. Precursor de <b>adenocarcinoma</b>.</li>
<li>Sin displasia: vigilancia endoscópica cada 5 años si mide &lt;3 cm y cada 3 años si ≥3 cm (ACG 2022), con IBP.</li>
<li>Displasia de bajo grado (confirmada por segundo patólogo): terapia endoscópica de erradicación (ablación) o vigilancia a 12 meses.</li>
<li>Displasia de alto grado o cáncer intramucoso: resección endoscópica de lesiones visibles + ablación.</li>
</ul>` },
        { h: 'Diagnóstico diferencial', html: `
<div class="tablewrap"><table class="mini">
<tr><th>Diagnóstico</th><th>Pista</th><th>Cómo se confirma</th></tr>
<tr><td>Cardiopatía isquémica</td><td>Dolor torácico con esfuerzo, factores de riesgo</td><td>ECG y troponina: descártala primero</td></tr>
<tr><td>Esofagitis eosinofílica</td><td>Hombre joven atópico, disfagia, impactación de alimento</td><td>Biopsias: ≥15 eosinófilos por campo de alto poder</td></tr>
<tr><td>Esofagitis infecciosa</td><td>Inmunosupresión (VIH, esteroides); <b>odinofagia</b></td><td>Endoscopia: placas blancas (<i>Candida</i>), úlceras grandes y superficiales (CMV) o pequeñas en sacabocado (VHS)</td></tr>
<tr><td>Esofagitis por pastilla</td><td>Doxiciclina, AINE, bisfosfonatos o KCl con poca agua, al acostarse</td><td>Clínica; úlcera en el esófago medio</td></tr>
<tr><td>Acalasia</td><td>Disfagia a sólidos <b>y</b> líquidos, regurgitación de comida sin digerir</td><td>Manometría; esofagograma en “pico de pájaro”</td></tr>
<tr><td>Hipersensibilidad al reflujo o pirosis funcional</td><td>Pirosis con endoscopia normal y exposición al ácido normal</td><td>pH-impedancia (Roma IV)</td></tr>
<tr><td>Úlcera péptica o dispepsia</td><td>Dolor epigástrico más que retroesternal</td><td>Probar y tratar <i>H. pylori</i> o endoscopia</td></tr>
</table></div>` },
        { h: 'Fármacos clave', html: `
<div class="tablewrap"><table class="mini">
<tr><th>Fármaco</th><th>Mecanismo</th><th>Efecto adverso clave</th><th>Ojo</th></tr>
<tr><td>IBP (omeprazol, pantoprazol, esomeprazol)</td><td>Bloqueo irreversible de la H⁺/K⁺ ATPasa activa</td><td>Uso prolongado: hipomagnesemia, déficit de B12, <i>C. difficile</i>, fracturas (asociación)</td><td>30–60 min antes del desayuno; usar la dosis mínima eficaz</td></tr>
<tr><td>Vonoprazán</td><td>Bloqueador de ácido competitivo con el potasio; no necesita comida</td><td>Hipergastrinemia</td><td>Opción en esofagitis erosiva grave</td></tr>
<tr><td>Antagonistas H2 (famotidina)</td><td>Bloquean el receptor H2 de la célula parietal</td><td>Taquifilaxia en semanas</td><td>Menos potentes que el IBP; síntomas leves o nocturnos</td></tr>
<tr><td>Antiácidos y alginatos</td><td>Neutralizan el ácido o forman una balsa sobre el contenido gástrico</td><td>Mg: diarrea · Al: estreñimiento</td><td>Alivio rápido a demanda; útiles en el embarazo</td></tr>
<tr><td>Baclofeno</td><td>Agonista GABA-B: reduce las relajaciones transitorias del EEI</td><td>Somnolencia, mareo</td><td>Solo casos seleccionados</td></tr>
<tr><td>Metoclopramida</td><td>Procinético (antagonista D2)</td><td>Discinesia tardía</td><td>No se recomienda en ERGE sin gastroparesia</td></tr>
</table></div>` },
        { h: 'Cómo lo preguntan en el examen', html: `
<ul>
<li><b>Pirosis típica, sin alarma</b> → IBP 8 semanas antes del desayuno. La trampa: endoscopia o pH-metría de entrada.</li>
<li><b>Pirosis + disfagia, pérdida de peso o anemia</b> → endoscopia con biopsias.</li>
<li><b>“No responde al IBP”</b> → primero revisa horario y apego; luego dos dosis; luego endoscopia y pH-impedancia sin IBP.</li>
<li><b>Lengüeta color salmón con células caliciformes</b> → Barrett: vigilancia (sin displasia) o terapia endoscópica (con displasia). La trampa: esofagectomía.</li>
<li><b>Hombre joven con asma, disfagia e impactación de bolo</b> → esofagitis eosinofílica (biopsias); no es ERGE.</li>
<li><b>Antes de una funduplicatura</b> → pH-impedancia y manometría (descartar acalasia). Con obesidad mórbida → bypass en Y de Roux, no manga gástrica.</li>
</ul>` }
      ],
      mnemo: { t: 'Alarma = “DOPA-V”', d: 'Disfagia, Odinofagia, Pérdida de peso, Anemia o sangrado, Vómito persistente: cualquiera manda a endoscopia.' },
      pearl: 'La respuesta a la prueba con IBP apoya el diagnóstico pero no lo confirma: sensibilidad ~70% y especificidad baja.',
      trap: 'Dolor torácico “por reflujo” en un hombre de 58 años con factores de riesgo: primero descarta isquemia, luego piensa en el esófago.',
      guide: [
        'Vigilancia de Barrett sin displasia: ACG 2022 propone 3–5 años según longitud; la BSG 2013 usa 2–5 años. Dato de examen: Barrett se vigila con endoscopia y biopsias, no se opera.',
        'Tamizaje de Barrett: ACG 2022 pide ≥3 factores de riesgo; guías previas solo pedían hombre >50 años con ERGE crónica.',
        'Esofagitis que confirma ERGE: el consenso de Lyon 1.0 (2018) solo aceptaba LA C o D; Lyon 2.0 (2024) ya incluye LA B. ⚠️ Depende de la guía: con la versión antigua, la respuesta es C o D.'
      ],
      refs: [
        'Katz PO, et al. ACG Clinical Guideline for the Diagnosis and Management of GERD. Am J Gastroenterol 2022.',
        'Shaheen NJ, et al. ACG Clinical Guideline: Diagnosis and Management of Barrett\'s Esophagus. Am J Gastroenterol 2022.',
        'Gyawali CP, et al. Lyon Consensus 2.0. Gut 2024.'
      ]
    }
  },

  cards: [
    ['Síntomas típicos de ERGE', 'Pirosis y regurgitación'],
    ['Prueba inicial sin datos de alarma', 'IBP por 8 semanas antes del desayuno'],
    ['Datos de alarma', 'Disfagia, odinofagia, pérdida de peso, sangrado/anemia, vómito persistente'],
    ['Clasificación endoscópica de esofagitis', 'Los Ángeles A–D'],
    ['Hallazgos que confirman ERGE en endoscopia', 'Esofagitis LA B, C o D (Lyon 2.0), Barrett largo, estenosis péptica'],
    ['pH-impedancia: valor concluyente', 'Exposición al ácido >6% del tiempo'],
    ['Esófago de Barrett', 'Metaplasia intestinal (células caliciformes) ≥1 cm sobre la unión esofagogástrica'],
    ['Cáncer asociado a Barrett', 'Adenocarcinoma de esófago distal'],
    ['Barrett sin displasia <3 cm', 'Vigilancia cada 5 años + IBP'],
    ['Barrett con displasia de alto grado', 'Resección endoscópica + ablación'],
    ['Cirugía antirreflujo clásica', 'Funduplicatura de Nissen'],
    ['ERGE en obesidad mórbida', 'Bypass gástrico en Y de Roux'],
    ['Mecanismo más frecuente de la ERGE', 'Relajaciones transitorias del EEI (no deglutorias)'],
    ['Hombre joven atópico con disfagia e impactación de alimento', 'Esofagitis eosinofílica: biopsias con ≥15 eosinófilos por campo'],
    ['Efectos adversos del IBP a largo plazo', 'Hipomagnesemia, déficit de B12, C. difficile, fracturas (asociación)'],
    ['Barrett con displasia de bajo grado confirmada', 'Ablación endoscópica (vigilancia cada 12 meses es alternativa)'],
    ['Antes de una funduplicatura', 'pH-impedancia (confirma reflujo) + manometría (descarta acalasia)']
  ],

  questions: [
    q({ id: 'erge-01', dif: 1,
      stem: 'Mujer de 32 años con pirosis postprandial 3 veces por semana, sin disfagia ni pérdida de peso. ¿Siguiente paso?',
      opts: ['Endoscopia', 'IBP por 8 semanas y medidas generales', 'pH-metría de 24 h', 'Manometría esofágica', 'Serie esofagogastroduodenal'],
      ans: 1,
      exp: 'ERGE típica sin datos de alarma: tratamiento empírico con IBP. La endoscopia se reserva para alarma, falta de respuesta o tamizaje de Barrett.',
      why: ['No es necesaria sin alarma.', '', 'Se usa si hay duda diagnóstica o refractariedad.', 'Se usa en disfagia sin obstrucción o antes de cirugía.', 'No es el estudio de elección.'],
      ref: 'ACG 2022 ERGE' }),

    q({ id: 'erge-02', dif: 1,
      stem: 'Hombre de 62 años con pirosis de años que ahora tiene disfagia a sólidos progresiva y pérdida de 6 kg. ¿Qué haces?',
      opts: ['Doble dosis de IBP', 'Endoscopia alta', 'Funduplicatura', 'Antiácidos', 'Repetir la prueba con IBP'],
      ans: 1,
      exp: 'Disfagia y pérdida de peso son datos de alarma: estenosis péptica o adenocarcinoma sobre Barrett. Se requiere endoscopia con biopsias.',
      why: ['No antes de descartar cáncer.', '', 'No sin diagnóstico.', 'Insuficiente.', 'Retrasa el diagnóstico.'],
      ref: 'ACG 2022 ERGE' }),

    q({ id: 'erge-03', dif: 2,
      stem: 'Endoscopia en un hombre de 55 años con ERGE: lengüeta de mucosa color salmón de 4 cm sobre la unión esofagogástrica. Biopsia con metaplasia intestinal sin displasia. ¿Manejo?',
      opts: ['Esofagectomía', 'IBP y vigilancia endoscópica cada 3 años', 'Ablación inmediata', 'Ningún seguimiento', 'Endoscopia cada 6 meses'],
      ans: 1,
      exp: 'Barrett largo (≥3 cm) sin displasia: IBP y vigilancia cada 3 años (cada 5 si mide menos de 3 cm). La ablación se reserva para displasia.',
      why: ['Excesivo para Barrett sin displasia.', '', 'No está indicada sin displasia.', 'Requiere vigilancia.', 'Demasiado frecuente.'],
      ref: 'ACG 2022 Barrett' }),

    q({ id: 'erge-04', dif: 2,
      stem: 'Paciente con Barrett y displasia de alto grado confirmada, con una lesión nodular visible. ¿Tratamiento?',
      opts: ['Vigilancia a 12 meses', 'Resección endoscópica de la lesión + ablación del Barrett restante', 'Esofagectomía de entrada', 'Aumentar el IBP', 'Quimiorradioterapia'],
      ans: 1,
      exp: 'La terapia endoscópica de erradicación es el estándar: resección mucosa de lesiones visibles (estadifica) y ablación por radiofrecuencia del resto.',
      why: ['Riesgo alto de progresión.', '', 'Se reserva para invasión profunda.', 'No trata la displasia.', 'No indicada en displasia.'],
      ref: 'ACG 2022 Barrett' }),

    q({ id: 'erge-05', dif: 2,
      stem: 'Mujer de 45 años con pirosis que persiste pese a omeprazol 20 mg que toma por la noche. Endoscopia normal. ¿Primer ajuste?',
      opts: ['Cirugía antirreflujo', 'Tomar el IBP 30–60 min antes del desayuno y verificar adherencia', 'Agregar antibióticos', 'Suspender el IBP', 'Manometría urgente'],
      ans: 1,
      exp: 'El IBP actúa sobre bombas activas: se toma antes de la primera comida. Muchas “refractariedades” son por mal horario o mala adherencia. Si persiste: dos dosis y luego pH-impedancia.',
      why: ['No antes de optimizar y confirmar ERGE.', '', 'No hay indicación.', 'Primero optimiza.', 'No es el primer paso.'],
      ref: 'ACG 2022 ERGE' }),

    q({ id: 'erge-06', dif: 2,
      stem: 'Hombre con pirosis refractaria y endoscopia normal. Se planea cirugía antirreflujo. ¿Qué estudio es indispensable antes?',
      opts: ['pH-impedancia sin IBP y manometría esofágica', 'TC de abdomen', 'Colonoscopia', 'Ultrasonido de vesícula', 'Prueba de aliento para H. pylori'],
      ans: 0,
      exp: 'Antes de operar hay que confirmar reflujo patológico (pH-impedancia) y descartar acalasia u otro trastorno motor (manometría), que empeorarían con una funduplicatura.',
      why: ['', 'No evalúa reflujo.', 'No tiene relación.', 'No evalúa reflujo.', 'No confirma ERGE.'],
      ref: 'ACG 2022 ERGE' }),

    q({ id: 'erge-07', dif: 1,
      stem: '¿Cuál de estos pacientes con ERGE crónica cumple criterios de tamizaje de Barrett según la ACG 2022?',
      opts: ['Mujer de 30 años sin otros factores', 'Hombre de 58 años, fumador, con obesidad central', 'Mujer de 40 años delgada', 'Hombre de 25 años con pirosis ocasional', 'Ninguno; nunca se tamiza'],
      ans: 1,
      exp: 'Se tamiza a quien tiene ERGE crónica y ≥3 factores: hombre, >50 años, raza blanca, obesidad central, tabaquismo, antecedente familiar. Este paciente reúne cuatro.',
      why: ['No reúne factores.', '', 'Solo uno o ninguno.', 'Joven y sin factores.', 'Sí se tamiza en grupos de riesgo.'],
      ref: 'ACG 2022 Barrett' }),

    q({ id: 'erge-08', dif: 2,
      stem: 'Hombre de 50 años con tos crónica nocturna y ronquera. Rx de tórax normal, sin asma ni goteo posnasal, no usa IECA. ¿Qué causa consideras?',
      opts: ['Cáncer de pulmón', 'ERGE con manifestaciones extraesofágicas', 'Insuficiencia cardiaca', 'Tuberculosis', 'Sarcoidosis'],
      ans: 1,
      exp: 'Tos crónica con Rx normal: las tres causas principales son goteo posnasal, asma y ERGE. Excluidas las otras, el reflujo es probable. Si hay pirosis, prueba con IBP; si no, confirma con pH-impedancia.',
      why: ['La Rx es normal.', '', 'No hay datos.', 'La Rx es normal.', 'La Rx es normal.'],
      ref: 'ACG 2022 ERGE' }),

    q({ id: 'erge-09', dif: 1,
      stem: 'Endoscopia: erosiones confluentes que abarcan más del 75% de la circunferencia del esófago. ¿Grado de Los Ángeles?',
      opts: ['A', 'B', 'C', 'D', 'No se clasifica'],
      ans: 3,
      exp: 'LA A: erosiones <5 mm. B: >5 mm sin confluir. C: confluyen pero <75% de la circunferencia. D: ≥75% de la circunferencia.',
      why: ['Erosiones <5 mm.', 'Erosiones >5 mm sin confluencia.', 'Confluyen pero <75%.', '', 'Sí se clasifica.'],
      ref: 'Clasificación de Los Ángeles' }),

    q({ id: 'erge-10', dif: 2,
      stem: 'Paciente con esofagitis LA grado C que cicatrizó tras 8 semanas de IBP. ¿Qué sigue?',
      opts: ['Suspender el IBP', 'IBP de mantenimiento a largo plazo', 'IBP solo a demanda', 'Cirugía obligatoria', 'Cambiar a antiácidos'],
      ans: 1,
      exp: 'La esofagitis grave (LA C/D) recae casi siempre al suspender: se mantiene IBP a la dosis mínima eficaz de forma indefinida (o cirugía si el paciente lo prefiere).',
      why: ['Alta recaída.', '', 'Solo para ERGE no erosiva o LA A/B.', 'Es una alternativa, no obligatoria.', 'Insuficiente.'],
      ref: 'ACG 2022 ERGE' }),
    q({ id: 'erge-11', dif: 2,
      stem: 'Hombre de 24 años con asma y rinitis alérgica. Tiene disfagia a sólidos intermitente desde hace 2 años y hoy llega por un bolo de carne impactado. Endoscopia: anillos concéntricos y surcos longitudinales. ¿Qué confirma el diagnóstico más probable?',
      opts: ['pH-impedancia con exposición al ácido >6%', 'Biopsias esofágicas con ≥15 eosinófilos por campo de alto poder', 'Manometría con aperistalsis y falta de relajación del EEI', 'Esofagograma en “pico de pájaro”', 'Serología para H. pylori'],
      ans: 1,
      exp: 'Hombre joven atópico con disfagia, impactación de alimento, anillos y surcos = esofagitis eosinofílica. Se confirma con biopsias de varios niveles del esófago (≥15 eosinófilos por campo de alto poder). Tratamiento: IBP, budesonida deglutida, dieta de eliminación o dupilumab; dilatación si hay estenosis.',
      why: ['Confirmaría ERGE, que no explica los anillos ni la impactación en un joven atópico.', '', 'Es el patrón de la acalasia.', 'Es la imagen de la acalasia.', 'No tiene relación.'],
      ref: 'Consenso AGREE 2018 · AGA/JTF 2020' }),

    q({ id: 'erge-12', dif: 2,
      stem: 'Mujer de 22 años que toma doxiciclina para acné. Anoche tomó la cápsula con un sorbo de agua y se acostó. Hoy tiene dolor intenso al tragar. Sin fiebre ni inmunosupresión. ¿Diagnóstico más probable?',
      opts: ['ERGE con esofagitis LA D', 'Esofagitis por pastilla (doxiciclina)', 'Esofagitis por Candida', 'Acalasia', 'Esofagitis eosinofílica'],
      ans: 1,
      exp: 'La odinofagia súbita tras tomar doxiciclina, AINE, bisfosfonatos o cloruro de potasio con poca agua y acostarse es típica de esofagitis por pastilla (úlcera en el esófago medio). Se indica tomar el fármaco con un vaso de agua y permanecer erguida 30 min, o cambiarlo; suele curar en días.',
      why: ['La ERGE da pirosis crónica, no odinofagia súbita tras una cápsula.', '', 'Aparece en inmunosupresión (VIH, esteroides, diabetes descontrolada).', 'Da disfagia progresiva a sólidos y líquidos, no odinofagia aguda.', 'Da disfagia e impactación, no odinofagia aguda tras una pastilla.'],
      ref: 'Sleisenger y Fordtran, 11.ª ed.' }),

    q({ id: 'erge-13', dif: 2,
      stem: 'Hombre de 70 años que toma omeprazol 40 mg diarios desde hace 8 años “por gastritis”. Presenta calambres, temblor y QT prolongado. Calcio 7.6 mg/dL y K 3.1 mEq/L que no corrigen con reposición. ¿Qué alteración buscas primero?',
      opts: ['Hipermagnesemia', 'Hipomagnesemia por IBP', 'Hiperparatiroidismo primario', 'Déficit de vitamina A', 'Hipernatremia'],
      ans: 1,
      exp: 'El uso prolongado de IBP puede causar hipomagnesemia (menor absorción intestinal de Mg). La hipomagnesemia baja la secreción y el efecto de la PTH (hipocalcemia) y causa hipokalemia refractaria. Se repone Mg y se replantea el IBP: dosis mínima eficaz o suspenderlo si no hay indicación.',
      why: ['Es al revés: el IBP baja el magnesio.', '', 'Daría hipercalcemia.', 'No se relaciona con el IBP ni explica el cuadro.', 'No explica la hipocalcemia ni la hipokalemia.'],
      ref: 'Alerta FDA 2011 · ACG 2022 ERGE' }),

    q({ id: 'erge-14', dif: 2,
      stem: 'Mujer de 41 años con IMC 43, DM2 y ERGE confirmada con esofagitis LA C. Quiere cirugía bariátrica. ¿Qué procedimiento conviene más?',
      opts: ['Manga gástrica (gastrectomía vertical)', 'Bypass gástrico en Y de Roux', 'Funduplicatura de Nissen sola', 'Banda gástrica ajustable', 'Balón intragástrico'],
      ans: 1,
      exp: 'En obesidad grave con ERGE, el bypass gástrico en Y de Roux controla el reflujo (deja un reservorio pequeño con poco ácido y desvía la bilis) y además trata la obesidad y la DM2. La manga gástrica puede empeorar o provocar ERGE.',
      why: ['Aumenta la presión intragástrica y suele empeorar el reflujo.', '', 'Con IMC alto falla más y no trata la obesidad.', 'Menos eficaz y con más complicaciones; casi en desuso.', 'Es temporal y no trata el reflujo.'],
      ref: 'ACG 2022 ERGE' }),

    q({ id: 'erge-15', dif: 2,
      stem: 'Hombre de 63 años con Barrett de 2 cm. Un segundo patólogo experto confirma displasia de bajo grado, sin lesiones visibles. ¿Manejo preferido según la ACG?',
      opts: ['Solo IBP y endoscopia en 5 años', 'Terapia endoscópica de erradicación (ablación por radiofrecuencia)', 'Esofagectomía', 'Funduplicatura para que regrese el Barrett', 'Quimioterapia'],
      ans: 1,
      exp: 'La displasia de bajo grado confirmada puede progresar: la ACG 2022 sugiere terapia endoscópica de erradicación (ablación), con la vigilancia endoscópica cada 12 meses como alternativa aceptable. La esofagectomía se reserva para cáncer invasor profundo.',
      why: ['Es el intervalo del Barrett corto sin displasia.', '', 'Excesiva para displasia de bajo grado.', 'La cirugía antirreflujo no hace regresar el Barrett ni la displasia.', 'No está indicada en displasia.'],
      ref: 'ACG 2022 Barrett' })
  ],

  compares: {
    'erge-eeo': {
      topic: 'erge', a: 'ERGE', b: 'Esofagitis eosinofílica',
      rows: [
        ['Paciente típico', 'Adulto con obesidad o hernia hiatal', 'Hombre joven con atopia (asma, rinitis)'],
        ['Síntoma clave', 'Pirosis y regurgitación', 'Disfagia e impactación de alimento'],
        ['Endoscopia', 'Erosiones distales (Los Ángeles)', 'Anillos, surcos y exudados blancos'],
        ['Biopsia', 'Inflamación; Barrett si hay metaplasia', '≥15 eosinófilos por campo de alto poder'],
        ['Tratamiento', 'IBP y medidas generales', 'IBP, budesonida deglutida, dieta o dupilumab']
      ]
    }
  },

  anims: {
    erge: {
      title: 'Del reflujo al Barrett',
      steps: [
        { cap: '<b>Barrera competente.</b> El esfínter esofágico inferior (EEI) está cerrado y solo se abre para dejar pasar el bolo. El diafragma lo abraza y refuerza la barrera: el ácido se queda en el estómago.',
          labels: [[80, 14, 'Esófago'], [80, 52, 'EEI'], [24, 55, 'Diafragma'], [112, 94, 'Ácido gástrico']] },
        { cap: '<b>Relajación transitoria y hernia hiatal.</b> El EEI se abre sin que haya deglución (el mecanismo más frecuente). Con hernia hiatal, el EEI sube al tórax, pierde el apoyo del diafragma y el ácido refluye al esófago.',
          labels: [[80, 8, 'Reflujo ácido'], [80, 26, 'EEI se relaja'], [80, 42, 'Hernia hiatal'], [24, 55, 'Diafragma']] },
        { cap: '<b>Esofagitis erosiva (Los Ángeles).</b> El ácido erosiona la mucosa. A: erosiones ≤5 mm · B: >5 mm sin unirse entre pliegues · C: confluyen en <75% de la circunferencia · D: ≥75%.',
          labels: [[22, 78, 'A ≤5 mm'], [61, 78, 'B >5 mm'], [100, 78, 'C <75%'], [139, 78, 'D ≥75%']] },
        { cap: '<b>Esófago de Barrett.</b> Con años de reflujo, el epitelio escamoso (rosa pálido) se reemplaza por epitelio columnar color salmón con células caliciformes: metaplasia intestinal ≥1 cm sobre la unión esofagogástrica. Es precursor de adenocarcinoma.',
          labels: [[80, 14, 'Epitelio escamoso'], [80, 56, 'Barrett (salmón)'], [80, 80, 'Células caliciformes'], [80, 108, 'Mucosa gástrica']] },
        { cap: '<b>Tratamiento.</b> El IBP bloquea la bomba H⁺/K⁺ ATPasa de la célula parietal: menos ácido y la mucosa cicatriza. La funduplicatura de Nissen envuelve el esófago distal con el fondo gástrico y rehace la barrera.',
          labels: [[40, 14, 'Menos ácido'], [40, 50, 'Bomba H⁺/K⁺ ✕'], [40, 104, 'IBP'], [120, 52, 'Nissen'], [120, 94, 'Estómago']] }
      ]
    }
  }
};
