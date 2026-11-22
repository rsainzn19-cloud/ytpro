// Tema 38 · Hipertiroidismo y tormenta tiroidea (Endocrinología, semana 9)
const T = { topic: 'hipertiroidismo', subj: 'endo' };
const q = (o) => ({ ...T, ...o });
const ENDO = { short: 'De tu Guía Endocrino', vs: 'tu guía', name: 'Guía Endocrino · Ximena Cors Cepeda (EMIS 5)', url: 'https://docs.google.com/document/d/1ng1BpGOd1JywQaChMt0YWLQIRemXzi5hyUV_XVmYpsM/edit' };

export default {
  lessons: {
    hipertiroidismo: {
      hook: 'TSH baja y T4 libre alta = tirotoxicosis. La captación de yodo separa lo que fabrica de más (Graves, nódulos: captación alta) de lo que solo se derrama (tiroiditis, hormona exógena: captación baja). La tormenta tiroidea mata: propranolol, antitiroideo, yodo y esteroide.',
      nn: [], yt: 'hyperthyroidism Graves disease thyroid storm',
      video: [
        { ch: 'Diagnóstico', sc: [
          { v: { k: 'title', t: 'Hipertiroidismo', s: 'Semana 9 · Endocrinología' },
            say: 'Semana nueve: la tiroides acelerada. Todo va rápido: palpitaciones, pérdida de peso con hambre, calor, sudor, temblor, diarrea, ansiedad e insomnio.' },
          { v: { k: 'case', t: 'Ojos saltones', p: { name: 'Daniela', age: 29, sex: 'M', skin: '#E2B08A', hair: '#2A1A12', gown: '#F2A0B8' }, text: 'Bajó 6 kg comiendo más, palpitaciones, temblor fino, exoftalmos y bocio difuso con soplo.', vit: { TSH: '0.01', T4L: '4.2' } },
            say: 'Daniela tiene veintinueve años. Bajó seis kilos aunque come más, tiene palpitaciones, temblor fino, ojos saltones y un bocio difuso con soplo. TSH suprimida y T4 libre alta.' },
          { v: { k: 'vs', a: 'Captación alta', b: 'Captación baja', rows: [['Qué pasa', 'Fabrica de más', 'Se derrama o viene de fuera'], ['Causas', 'Graves, bocio multinodular, adenoma tóxico', 'Tiroiditis, levotiroxina de más, yodo'], ['Antitiroideo', 'Sí', 'No: solo betabloqueador']] },
            say: 'La captación de yodo divide las causas. Alta: la glándula fabrica de más, como en Graves, difusa, o en los nódulos tóxicos, focal. Baja: la hormona se derrama por inflamación, como en las tiroiditis, o viene de fuera, como la levotiroxina de más. En estas no sirven los antitiroideos.' },
          { v: { k: 'list', t: 'Solo Graves', items: ['Exoftalmos', 'Mixedema pretibial', 'Bocio difuso con soplo', 'Anticuerpos contra el receptor de TSH'] },
            say: 'Hay hallazgos que solo da Graves: exoftalmos, mixedema pretibial y anticuerpos contra el receptor de TSH, llamados TRAb.' }
        ] },
        { ch: 'Tratamiento y tormenta', sc: [
          { v: { k: 'flow', t: 'Graves', steps: ['Betabloqueador para síntomas', 'Metimazol 12 a 18 meses', 'Si recae: yodo radiactivo o cirugía'] },
            say: 'Para Graves: propranolol para los síntomas y metimazol por doce a dieciocho meses. Si recae, el definitivo es yodo radiactivo o tiroidectomía. El propiltiouracilo se reserva para el primer trimestre del embarazo y la tormenta.' },
          { v: { k: 'tip', kind: 'trap', t: 'Fiebre y dolor de garganta con metimazol o PTU: suspende y pide biometría (agranulocitosis).' },
            say: 'Una advertencia: si un paciente con metimazol o propiltiouracilo tiene fiebre o dolor de garganta, suspende el fármaco y pide una biometría hemática. Puede ser agranulocitosis.' },
          { v: { k: 'list', t: 'Tormenta tiroidea', items: ['Propranolol', 'PTU o metimazol', 'Yodo una hora después', 'Hidrocortisona', 'Enfriar y tratar el desencadenante'] },
            say: 'La tormenta tiroidea es fiebre alta, taquicardia o fibrilación auricular, insuficiencia cardiaca y delirio. Se tratan las cuatro P: propranolol, propiltiouracilo, yoduro de potasio una hora después del antitiroideo, y prednisona o hidrocortisona.' },
          { v: { k: 'mnemo', t: 'Las 4 P de la tormenta', d: 'Propranolol, PTU, Potasio yoduro (1 h después), Prednisona/hidrocortisona.' },
            say: 'Las cuatro P: propranolol, PTU, yoduro de potasio y prednisona. El yodo siempre después del antitiroideo, para no darle materia prima a la glándula.' }
        ] }
      ],
      sections: [
        { h: 'Causas y diagnóstico', html: `
<ul>
<li><b>Graves</b> (60–80 %): TRAb estimulantes; mujer joven; bocio difuso con soplo, <b>oftalmopatía</b>, mixedema pretibial, acropaquia.</li>
<li><b>Bocio multinodular tóxico</b> (ancianos) y <b>adenoma tóxico</b> (nódulo “caliente”).</li>
<li>Tirotoxicosis sin hiperproducción: <b>tiroiditis</b> (De Quervain dolorosa, silente/posparto indolora), <b>levotiroxina exógena</b> (tiroglobulina baja), yodo (amiodarona, contraste: Jod-Basedow), struma ovarii, mola/coriocarcinoma (hCG).</li>
<li>Laboratorio: <b>TSH suprimida, T4 libre (y T3) alta</b>. Subclínico: TSH baja con T4/T3 normales. TSH alta con T4 alta → adenoma productor de TSH.</li>
<li>Para la causa: <b>TRAb</b> (si es positivo, es Graves); si no es claro, <b>gammagrama/captación</b>: difusa alta (Graves), varios nódulos calientes (BMNT), un nódulo caliente (adenoma), baja (tiroiditis o exógena).</li>
</ul>` },
        { h: 'Clínica', html: `
<ul>
<li>Pérdida de peso con hiperfagia, intolerancia al calor, sudoración, palpitaciones, <b>taquicardia sinusal o FA</b>, temblor fino, hiperreflexia, diarrea, ansiedad, insomnio, oligomenorrea, debilidad proximal, retracción palpebral.</li>
<li>Ancianos: <b>“apático”</b> (pérdida de peso, FA, IC, depresión sin síntomas adrenérgicos).</li>
<li>Laboratorio acompañante: hipercalcemia leve, FA alta, hiperglucemia, leucopenia; a largo plazo <b>osteoporosis</b>.</li>
</ul>` },
        { h: 'Tratamiento', html: `
<ul>
<li><b>Betabloqueador</b> (propranolol, atenolol) para los síntomas en todos (salvo contraindicación).</li>
<li><b>Metimazol</b> de elección (12–18 meses en Graves). <b>PTU</b> solo en el <b>1er trimestre del embarazo</b> y en la tormenta (además bloquea la conversión de T4 a T3). Efectos: <b>agranulocitosis</b> (ambos), hepatotoxicidad grave (PTU), colestasis y embriopatía (metimazol en el 1er trimestre).</li>
<li><b>Yodo radiactivo</b>: definitivo en BMNT, adenoma tóxico y Graves que recae; contraindicado en embarazo/lactancia; <b>empeora la oftalmopatía</b> (dar prednisona profiláctica si hay oftalmopatía leve; evitar si es activa grave). Casi siempre deja hipotiroidismo → levotiroxina.</li>
<li><b>Tiroidectomía</b>: bocio grande compresivo, nódulo sospechoso, oftalmopatía grave, embarazo (2º trimestre) o preferencia. Antes: eutiroideo con metimazol (+ yoduro de potasio en Graves). Complicaciones: <b>hipocalcemia</b> (hipoparatiroidismo) y lesión del laríngeo recurrente.</li>
<li>Tiroiditis: solo <b>BB</b> (y AINE/esteroide en De Quervain); los antitiroideos no sirven.</li>
<li>Oftalmopatía: dejar de fumar, selenio (leve), esteroides IV (moderada-grave activa), teprotumumab.</li>
</ul>` },
        { h: 'Tormenta tiroidea', html: `
<ul>
<li>Tirotoxicosis descompensada (cirugía, infección, parto, yodo, suspensión del antitiroideo): <b>fiebre</b>, taquicardia/FA, IC, náusea-vómito-diarrea, ictericia, <b>delirio</b>, coma. Escala de <b>Burch-Wartofsky ≥45</b>.</li>
<li>Tratamiento en UCI: <b>propranolol</b> (también bloquea la conversión periférica), <b>PTU</b> (o metimazol), <b>yoduro de potasio/Lugol 1 h después</b> del antitiroideo, <b>hidrocortisona</b> (bloquea conversión y cubre insuficiencia suprarrenal relativa), enfriamiento (paracetamol, no aspirina), líquidos, tratar el desencadenante.</li>
</ul>` },
        { h: 'Cómo lo preguntan en el examen', html: `
<ul>
<li>Mujer joven con exoftalmos y bocio difuso → Graves → <b>metimazol + BB</b>.</li>
<li>Embarazada en el 1er trimestre con Graves → <b>PTU</b>.</li>
<li>Tirotoxicosis con tiroides dolorosa y captación baja → De Quervain → <b>BB + AINE</b>.</li>
<li>Tirotoxicosis con tiroglobulina baja y captación baja → <b>levotiroxina facticia</b>.</li>
<li>Fiebre y faringitis con metimazol → <b>suspender y BH</b> (agranulocitosis).</li>
<li>Fiebre de 40, FA y delirio en Graves tras cirugía → tormenta → <b>las 4 P</b>.</li>
</ul>` }
      ],
      mnemo: { t: 'Las 4 P de la tormenta: Propranolol, PTU, Potasio yoduro, Prednisona', d: 'Y el yodo siempre 1 h después del antitiroideo para no darle materia prima a la glándula.' },
      pearl: 'La captación de yodo separa lo que fabrica de más (alta: Graves, nódulos) de lo que se derrama o viene de fuera (baja: tiroiditis, exógena). Solo en la primera sirven los antitiroideos.',
      trap: 'El yodo radiactivo empeora la oftalmopatía de Graves: si es activa y moderada-grave, prefiere metimazol o cirugía; si es leve, cúbrelo con prednisona.',
      guide: [
        'ATA 2016: metimazol es de elección salvo 1er trimestre del embarazo, tormenta tiroidea o reacción al metimazol.',
        'Tu guía menciona PTU “1º, metimazol 2º, PTU 3º” en embarazo; la recomendación actual es PTU en el 1er trimestre y metimazol desde el 2º.'
      ],
      refs: [
        'Ross DS, et al. 2016 ATA Guidelines for diagnosis and management of hyperthyroidism and other causes of thyrotoxicosis. Thyroid 2016.',
        'Kahaly GJ, et al. 2018 ETA Guideline for the management of Graves’ hyperthyroidism. Eur Thyroid J 2018.',
        'Burch HB, Wartofsky L. Life-threatening thyrotoxicosis: thyroid storm. Endocrinol Metab Clin North Am 1993.',
        'Bartalena L, et al. 2021 EUGOGO guidelines for Graves’ orbitopathy. Eur J Endocrinol 2021.'
      ]
    }
  },

  guias: {
    hipertiroidismo: { src: ENDO,
      puntos: [
        'Graves (anti-receptor de TSH) 60–80 %; adenoma tóxico y bocio multinodular; tiroiditis transitoria.',
        'Exoftalmos, mixedema pretibial y soplo tiroideo: solo Graves. Tormenta: FA, fiebre, delirio.',
        'Captación de yodo: Graves difusa alta, BMN múltiples nódulos, adenoma un área, tiroiditis y hormona exógena baja.',
        'Metimazol (inhibe peroxidasa) o PTU (además inhibe la desyodinasa); BB para síntomas; yodo 131 o tiroidectomía como definitivos.',
        'Tormenta: escala de Burch-Wartofsky &gt;45; propranolol, antipiréticos, líquidos IV con dextrosa, PTU, yoduro de potasio, glucocorticoides.'
      ],
      ojo: ['En embarazo: <b>PTU en el 1er trimestre y metimazol a partir del 2º</b> (ATA 2016), por la hepatotoxicidad del PTU.'],
      cards: [['Hipocalcemia tras tiroidectomía', 'Hipoparatiroidismo: gluconato de calcio']] }
  },

  cards: [
    ['Tirotoxicosis', 'TSH suprimida + T4/T3 libres altas'],
    ['Causa #1 de hipertiroidismo', 'Enfermedad de Graves'],
    ['Anticuerpo de Graves', 'TRAb (anti-receptor de TSH, estimulante)'],
    ['Hallazgos exclusivos de Graves', 'Oftalmopatía, mixedema pretibial, acropaquia'],
    ['Captación alta difusa', 'Graves'],
    ['Captación baja + tiroglobulina baja', 'Levotiroxina exógena (facticia)'],
    ['Captación baja + tiroides dolorosa', 'Tiroiditis de De Quervain'],
    ['Antitiroideo de elección', 'Metimazol'],
    ['Cuándo PTU', 'Embarazo 1er trimestre y tormenta tiroidea'],
    ['Efecto grave de ambos antitiroideos', 'Agranulocitosis (fiebre + faringitis → BH)'],
    ['Efecto específico del PTU', 'Hepatotoxicidad grave'],
    ['Yodo radiactivo: contraindicación', 'Embarazo y lactancia; empeora oftalmopatía activa'],
    ['Las 4 P de la tormenta', 'Propranolol, PTU, Potasio yoduro (1 h después), Prednisona/hidrocortisona'],
    ['Hipertiroidismo apático', 'Anciano con pérdida de peso, FA e IC sin síntomas adrenérgicos'],
    ['Complicaciones de tiroidectomía', 'Hipocalcemia (hipoparatiroidismo) y lesión del laríngeo recurrente']
  ],

  questions: [
    q({ id: 'hipertiroidismo-01', dif: 1, stem: 'Mujer de 28 años con pérdida de peso, palpitaciones, temblor, exoftalmos y bocio difuso con soplo. TSH <0.01, T4 libre alta. ¿Diagnóstico?', opts: ['Bocio multinodular tóxico', 'Enfermedad de Graves', 'Tiroiditis de De Quervain', 'Adenoma tóxico', 'Hashimoto'], ans: 1,
      exp: 'Bocio difuso con soplo y oftalmopatía son característicos de Graves (TRAb).', why: ['Es de ancianos y nodular.', '', 'Es dolorosa y sin oftalmopatía.', 'Nódulo único.', 'Da hipotiroidismo (puede tener fase tóxica breve).'], ref: 'ATA 2016' }),
    q({ id: 'hipertiroidismo-02', dif: 2, stem: 'Paciente con tirotoxicosis, tiroides no dolorosa, tiroglobulina baja y captación de yodo baja. ¿Causa?', opts: ['Graves', 'Ingesta de levotiroxina exógena', 'Tiroiditis silente', 'Adenoma tóxico', 'Struma ovarii'], ans: 1,
      exp: 'La hormona exógena suprime la glándula: captación baja y tiroglobulina baja. En la tiroiditis la tiroglobulina está alta.', why: ['Captación alta.', '', 'Tiroglobulina alta.', 'Captación alta focal.', 'Captación en pelvis.'], ref: 'ATA 2016' }),
    q({ id: 'hipertiroidismo-03', dif: 2, stem: 'Mujer con Graves en la semana 8 de embarazo. ¿Antitiroideo de elección?', opts: ['Metimazol', 'Propiltiouracilo', 'Yodo radiactivo', 'Tiroidectomía inmediata', 'Solo yodo'], ans: 1,
      exp: 'En el 1er trimestre se prefiere PTU (el metimazol se asocia a embriopatía); desde el 2º trimestre se cambia a metimazol.', why: ['Riesgo de embriopatía en el 1er trimestre.', '', 'Contraindicado.', 'Se reserva para el 2º trimestre si es necesaria.', 'No es tratamiento de mantenimiento.'], ref: 'ATA 2016' }),
    q({ id: 'hipertiroidismo-04', dif: 1, stem: 'Paciente con Graves tratada con metimazol que presenta fiebre y odinofagia. ¿Qué haces?', opts: ['Antibiótico y continuar el metimazol', 'Suspender el metimazol y pedir BH con diferencial', 'Duplicar la dosis', 'Cambiar a PTU', 'Agregar propranolol'], ans: 1,
      exp: 'Sospecha de agranulocitosis: suspender y pedir neutrófilos. No cambiar a PTU (reacción cruzada).', why: ['Peligroso.', '', 'Absurdo.', 'Puede haber reacción cruzada.', 'No resuelve el problema.'], ref: 'ATA 2016' }),
    q({ id: 'hipertiroidismo-05', dif: 2, stem: 'Hombre de 75 años con FA nueva, pérdida de peso e IC, sin temblor ni ansiedad. TSH suprimida. ¿Cómo se llama esta presentación?', opts: ['Tormenta tiroidea', 'Hipertiroidismo apático', 'Tiroiditis subaguda', 'Coma mixedematoso', 'Eutiroideo enfermo'], ans: 1,
      exp: 'En ancianos el hipertiroidismo se presenta con pérdida de peso, FA o IC y pocos síntomas adrenérgicos.', why: ['No hay fiebre ni delirio.', '', 'No hay dolor.', 'Es hipotiroideo.', 'La TSH estaría normal o baja sin T4 alta.'], ref: 'ATA 2016' }),
    q({ id: 'hipertiroidismo-06', dif: 3, stem: 'Paciente con Graves no controlado operado de apendicitis que presenta T 40.5 °C, FA a 160, ictericia y agitación. ¿Tratamiento?', opts: ['Solo paracetamol', 'Propranolol, PTU, yoduro de potasio 1 h después, hidrocortisona y medidas de soporte', 'Yodo antes del PTU', 'Aspirina para la fiebre', 'Yodo radiactivo urgente'], ans: 1,
      exp: 'Tormenta tiroidea: las 4 P y enfriamiento; el yodo va después del antitiroideo y la aspirina se evita (desplaza la hormona de su proteína).', why: ['Insuficiente.', '', 'Daría materia prima a la glándula.', 'Aumenta la hormona libre.', 'No es tratamiento agudo.'], ref: 'ATA 2016' }),
    q({ id: 'hipertiroidismo-07', dif: 2, stem: 'Mujer de 68 años con bocio multinodular tóxico. ¿Tratamiento definitivo preferido?', opts: ['Metimazol de por vida como única opción', 'Yodo radiactivo o tiroidectomía', 'Solo propranolol', 'Levotiroxina', 'Observación'], ans: 1,
      exp: 'Los nódulos autónomos no remiten con antitiroideos: el tratamiento definitivo es yodo radiactivo o cirugía (esta si es compresivo).', why: ['No induce remisión.', '', 'Solo síntomas.', 'Empeora.', 'Riesgo de FA y osteoporosis.'], ref: 'ATA 2016' }),
    q({ id: 'hipertiroidismo-08', dif: 2, stem: 'Paciente con Graves y oftalmopatía activa moderada-grave que fuma. ¿Qué tratamiento definitivo debe evitarse?', opts: ['Metimazol', 'Yodo radiactivo', 'Tiroidectomía total', 'Propranolol', 'Esteroides IV'], ans: 1,
      exp: 'El yodo radiactivo puede empeorar la oftalmopatía (más con tabaquismo). Se prefieren metimazol o cirugía; los esteroides IV tratan la órbita.', why: ['Es opción.', '', 'Es opción.', 'Solo síntomas.', 'Es tratamiento de la oftalmopatía.'], ref: 'EUGOGO 2021' }),
    q({ id: 'hipertiroidismo-09', dif: 2, stem: 'Dos días después de una tiroidectomía total la paciente refiere parestesias peribucales y espasmo carpopedal. ¿Qué das?', opts: ['Levotiroxina IV', 'Gluconato de calcio IV', 'Magnesio solo', 'Potasio', 'Propranolol'], ans: 1,
      exp: 'Hipocalcemia por lesión o resección de paratiroides: calcio IV, después calcio oral y calcitriol.', why: ['No corrige el calcio.', '', 'Solo si hay hipomagnesemia.', 'No es el problema.', 'No es el problema.'], ref: 'ATA 2016' }),
    q({ id: 'hipertiroidismo-10', dif: 2, stem: 'Paciente con palpitaciones, tiroides dolorosa a la palpación, fiebre, VSG 90 y captación de yodo baja. ¿Tratamiento?', opts: ['Metimazol', 'Betabloqueador y AINE (esteroide si es grave)', 'Yodo radiactivo', 'Tiroidectomía', 'Levotiroxina'], ans: 1,
      exp: 'Tiroiditis de De Quervain: la tirotoxicosis es por liberación, no por síntesis; los antitiroideos no sirven.', why: ['No sirve: no hay síntesis aumentada.', '', 'No capta.', 'Innecesaria.', 'No en la fase tóxica.'], ref: 'ATA 2016' }),
    q({ id: 'hipertiroidismo-11', dif: 2, stem: '¿Qué antitiroideo además de inhibir la síntesis bloquea la conversión periférica de T4 a T3?', opts: ['Metimazol', 'Propiltiouracilo', 'Carbimazol', 'Yoduro de potasio', 'Perclorato'], ans: 1,
      exp: 'El PTU inhibe la desyodinasa tipo 1 periférica; por eso se prefiere en la tormenta. Los BB (propranolol) y los esteroides también la bloquean.', why: ['Solo inhibe la peroxidasa.', '', 'Es profármaco del metimazol.', 'Bloquea la liberación (Wolff-Chaikoff).', 'Bloquea la captación de yodo.'], ref: 'ATA 2016' }),
    q({ id: 'hipertiroidismo-12', dif: 1, stem: 'Paciente con hipertiroidismo y palpitaciones. ¿Qué fármaco das para el control sintomático mientras actúa el antitiroideo?', opts: ['Propranolol', 'Digoxina', 'Diltiazem siempre', 'Amiodarona', 'Furosemida'], ans: 0,
      exp: 'El betabloqueador controla temblor, taquicardia y ansiedad; el propranolol además reduce la conversión de T4 a T3.', why: ['', 'Poco eficaz en tirotoxicosis.', 'Alternativa solo si no puede recibir BB.', 'Aporta yodo y no está indicada.', 'No está indicada.'], ref: 'ATA 2016' }),
    q({ id: 'hipertiroidismo-13', dif: 2, stem: 'Paciente con TSH alta y T4 libre alta, con síntomas de tirotoxicosis y macroadenoma hipofisario. ¿Diagnóstico?', opts: ['Graves', 'Adenoma hipofisario productor de TSH', 'Hashimoto', 'Hipertiroidismo facticio', 'Eutiroideo enfermo'], ans: 1,
      exp: 'TSH inapropiadamente alta con T4 alta indica hipertiroidismo central (TSHoma) o resistencia a hormona tiroidea.', why: ['La TSH estaría suprimida.', '', 'Da hipotiroidismo.', 'La TSH estaría suprimida.', 'No eleva la T4 libre así.'], ref: 'ATA 2016' }),
    q({ id: 'hipertiroidismo-14', dif: 3, stem: 'Paciente con bocio multinodular que recibe contraste yodado para una TC y 3 semanas después desarrolla tirotoxicosis. ¿Fenómeno?', opts: ['Wolff-Chaikoff', 'Jod-Basedow', 'Efecto Somogyi', 'Efecto tallo', 'Efecto gancho'], ans: 1,
      exp: 'Jod-Basedow: el exceso de yodo en una glándula con nódulos autónomos aumenta la síntesis hormonal.', why: ['Es la inhibición de la síntesis por exceso de yodo.', '', 'Es de la insulina.', 'Es de la hipófisis.', 'Es de la prolactina.'], ref: 'ATA 2016' }),
    q({ id: 'hipertiroidismo-15', dif: 2, stem: 'Paciente con Graves tratada con yodo radiactivo. 4 meses después tiene fatiga y TSH de 18. ¿Qué pasó y qué haces?', opts: ['Recaída: segunda dosis de yodo', 'Hipotiroidismo posablación: levotiroxina', 'Tormenta tiroidea', 'Eutiroideo enfermo', 'Hashimoto agregado: metimazol'], ans: 1,
      exp: 'El hipotiroidismo es la consecuencia esperada (y buscada) del yodo radiactivo en Graves; se trata con levotiroxina.', why: ['La TSH alta indica hipotiroidismo.', '', 'No hay tirotoxicosis.', 'No hay enfermedad grave.', 'Absurdo.'], ref: 'ATA 2016' }),
    q({ id: 'hipertiroidismo-16', dif: 2, stem: 'Paciente con tirotoxicosis y TRAb positivos. ¿Es necesario el gammagrama para diagnosticar Graves?', opts: ['Sí, siempre', 'No: TRAb positivos con clínica típica confirman Graves', 'Solo si hay oftalmopatía', 'Solo en hombres', 'Solo con biopsia'], ans: 1,
      exp: 'Los TRAb positivos confirman Graves; la captación se reserva para cuando la causa no es clara o se planea yodo radiactivo.', why: ['No es necesario.', '', 'No es la indicación.', 'No es la indicación.', 'No se biopsia.'], ref: 'ATA 2016' }),
    q({ id: 'hipertiroidismo-17', dif: 2, stem: '¿Qué efecto adverso es característico del propiltiouracilo y limita su uso?', opts: ['Embriopatía', 'Hepatotoxicidad grave (falla hepática)', 'Hipoglucemia', 'Hipertensión', 'Hipercalcemia'], ans: 1,
      exp: 'El PTU puede causar falla hepática fulminante; por eso solo se usa en el 1er trimestre y en la tormenta.', why: ['Es del metimazol.', '', 'No.', 'No.', 'No.'], ref: 'ATA 2016' }),
    q({ id: 'hipertiroidismo-18', dif: 1, stem: '¿Qué arritmia es la complicación cardiaca más común del hipertiroidismo?', opts: ['Bloqueo AV completo', 'Fibrilación auricular', 'TV', 'Bradicardia sinusal', 'Torsades'], ans: 1,
      exp: 'La FA aparece en 10–15 % de los hipertiroideos, sobre todo ancianos. Pide TSH en toda FA nueva.', why: ['No es típica.', '', 'No es típica.', 'Es del hipotiroidismo.', 'No es típica.'], ref: 'ATA 2016' }),
    q({ id: 'hipertiroidismo-19', dif: 2, stem: 'Antes de una tiroidectomía por Graves se administra yoduro de potasio (Lugol) por 10 días. ¿Para qué?', opts: ['Aumentar la síntesis hormonal', 'Disminuir la vascularidad de la glándula y la liberación hormonal', 'Prevenir la hipocalcemia', 'Tratar la oftalmopatía', 'Evitar la agranulocitosis'], ans: 1,
      exp: 'El yodo en dosis altas reduce la liberación hormonal y la vascularidad de la tiroides (menos sangrado); se da con el paciente ya eutiroideo con metimazol.', why: ['Al contrario.', '', 'No.', 'No.', 'No.'], ref: 'ATA 2016' }),
    q({ id: 'hipertiroidismo-20', dif: 2, stem: 'Paciente con hipertiroidismo subclínico persistente (TSH <0.1, T4 normal) de 70 años con osteoporosis. ¿Conducta?', opts: ['Observar siempre', 'Tratar (riesgo de FA y fracturas)', 'Levotiroxina', 'Solo calcio', 'Repetir en 5 años'], ans: 1,
      exp: 'En mayores de 65 años con TSH <0.1 se recomienda tratar por el riesgo de FA, osteoporosis y mortalidad cardiovascular.', why: ['El riesgo es alto en este grupo.', '', 'Absurdo.', 'No trata la causa.', 'Demasiado tiempo.'], ref: 'ATA 2016' })
  ]
};
