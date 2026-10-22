// Tema 27 · Trastornos de la deglución (Gastroenterología, semana 1)
const T = { topic: 'deglucion', subj: 'gastro' };
const q = (o) => ({ ...T, ...o });

export default {
  lessons: {
    deglucion: {
      hook: 'Tres preguntas resuelven casi toda disfagia: ¿cuesta iniciar el trago o se atora abajo?, ¿solo sólidos o sólidos y líquidos?, ¿progresiva o intermitente?',
      nn: [['dysphagia', 'Dysphagia'], ['esophageal-motility-disorders', 'Esophageal Motility Disorders']],
      yt: 'dysphagia achalasia',
      sections: [
        { h: 'Orofaríngea vs esofágica', html: `
<ul>
<li><b>Orofaríngea</b>: dificultad para <b>iniciar</b> el trago, tos o atragantamiento, regurgitación nasal, voz húmeda. Causas neurológicas (EVC, Parkinson, ELA, miastenia) y estructurales (divertículo de Zenker). Estudio: videofluoroscopia.</li>
<li><b>Divertículo de Zenker</b>: adulto mayor, halitosis, regurgitación de comida sin digerir, ruido al tragar. Diagnóstico con esofagograma con bario. Tratamiento: miotomía cricofaríngea (endoscópica o quirúrgica).</li>
<li><b>Esofágica</b>: sensación de comida “atorada” detrás del esternón segundos después de tragar.</li>
</ul>` },
        { h: 'Esofágica: el algoritmo', html: `
<ul>
<li><b>Solo sólidos</b> → <b>obstrucción mecánica</b>:
  <ul>
  <li><b>Progresiva + pérdida de peso + &gt;50 años</b> → <b>cáncer</b> (epidermoide: tabaco y alcohol; adenocarcinoma: ERGE, Barrett, obesidad).</li>
  <li>Progresiva con pirosis crónica → estenosis péptica.</li>
  <li><b>Intermitente</b> → anillo de Schatzki (“síndrome del asador”) o <b>esofagitis eosinofílica</b>.</li>
  </ul></li>
<li><b>Sólidos y líquidos desde el inicio</b> → <b>trastorno motor</b>:
  <ul>
  <li>Progresiva con regurgitación y pérdida de peso → <b>acalasia</b>.</li>
  <li>Con dolor torácico → espasmo esofágico distal, esófago hipercontráctil.</li>
  <li>Con pirosis y Raynaud → esclerodermia (hipomotilidad y esfínter hipotónico).</li>
  </ul></li>
<li>Estudio inicial de la disfagia esofágica: <b>endoscopia</b> (diagnostica, toma biopsias y permite dilatar). Si es normal y persiste: <b>manometría de alta resolución</b>.</li>
<li><b>Odinofagia</b> (dolor al tragar): esofagitis infecciosa (Candida, CMV, herpes) o por pastillas (doxiciclina, AINE, bisfosfonatos, cloruro de potasio).</li>
</ul>` },
        { h: 'Acalasia', html: `
<ul>
<li>Pérdida de neuronas inhibitorias del plexo mientérico: el esfínter esofágico inferior <b>no se relaja</b> y <b>no hay peristalsis</b>.</li>
<li>Esofagograma: dilatación con imagen en <b>“pico de pájaro”</b>.</li>
<li><b>Manometría de alta resolución</b> (diagnóstica): presión de relajación integrada alta + ausencia de peristalsis. Clasificación de Chicago: tipo I (clásica), II (presurización panesofágica, la de mejor respuesta), III (espástica).</li>
<li>Siempre <b>endoscopia</b> para descartar <b>pseudoacalasia</b> (cáncer de la unión esofagogástrica), sobre todo en adultos mayores con pérdida de peso rápida.</li>
<li>Enfermedad de Chagas: acalasia secundaria (y megacolon, miocardiopatía).</li>
<li>Tratamiento: dilatación neumática, <b>miotomía de Heller</b> laparoscópica con funduplicatura parcial, o <b>POEM</b> (de elección en el tipo III). Toxina botulínica en quien no tolera procedimientos invasivos.</li>
</ul>` },
        { h: 'Esofagitis eosinofílica', html: `
<ul>
<li>Hombre joven con atopia (asma, rinitis, dermatitis), disfagia intermitente e <b>impactación de alimentos</b>.</li>
<li>Endoscopia: anillos concéntricos (“traquealización”), surcos longitudinales, exudados blancos. Biopsias: <b>≥15 eosinófilos por campo</b>.</li>
<li>Tratamiento: IBP, esteroides deglutidos (budesonida, fluticasona), dieta de eliminación, dupilumab; dilatación si hay estenosis.</li>
</ul>` }
      ],
      mnemo: { t: 'Sólidos = Sólido (algo físico) · Ambos = Ambos (motor)', d: 'Si solo pasan mal los sólidos, hay algo físico que estorba. Si sólidos y líquidos fallan desde el inicio, el que falla es el motor del esófago.' },
      pearl: 'Hombre de 65 años, fumador y bebedor, con disfagia progresiva de sólidos a líquidos en 3 meses y pérdida de 8 kg: cáncer de esófago hasta demostrar lo contrario.',
      trap: 'Acalasia en un adulto mayor con pérdida de peso rápida: no la trates sin endoscopia; puede ser pseudoacalasia por cáncer.',
      guide: [
        'Primer estudio: la ACG prefiere endoscopia en disfagia esofágica; algunos libros proponen esofagograma primero si se sospecha lesión proximal compleja, Zenker o acalasia.',
        'Esofagitis eosinofílica: el IBP ya se considera tratamiento (no solo prueba diagnóstica) desde el consenso AGREE 2018.'
      ],
      refs: [
        'Vaezi MF, et al. ACG Clinical Guidelines: Diagnosis and Management of Achalasia. Am J Gastroenterol 2020.',
        'Yadlapati R, et al. Esophageal motility disorders on HRM: Chicago Classification 4.0. Neurogastroenterol Motil 2021.',
        'Dellon ES, et al. ACG Clinical Guideline: Eosinophilic Esophagitis. Am J Gastroenterol 2025.'
      ]
    }
  },

  cards: [
    ['Dificultad para iniciar el trago con tos', 'Disfagia orofaríngea'],
    ['Halitosis + regurgitación de comida sin digerir', 'Divertículo de Zenker'],
    ['Disfagia solo a sólidos', 'Obstrucción mecánica'],
    ['Disfagia a sólidos y líquidos desde el inicio', 'Trastorno motor'],
    ['Disfagia progresiva + pérdida de peso en adulto mayor', 'Cáncer de esófago'],
    ['Disfagia intermitente a carne', 'Anillo de Schatzki'],
    ['Hombre joven atópico con impactación alimentaria', 'Esofagitis eosinofílica (≥15 eos/campo)'],
    ['Acalasia: estudio diagnóstico', 'Manometría de alta resolución'],
    ['Esofagograma en acalasia', 'Pico de pájaro'],
    ['Acalasia: estudio obligatorio', 'Endoscopia para descartar pseudoacalasia'],
    ['Tratamientos de acalasia', 'Dilatación neumática, miotomía de Heller o POEM'],
    ['Odinofagia por pastillas', 'Doxiciclina, AINE, bisfosfonatos, KCl'],
    ['Infección que causa acalasia secundaria', 'Enfermedad de Chagas']
  ],

  questions: [
    q({ id: 'deglucion-01', dif: 1,
      stem: 'Hombre de 72 años con EVC previo que tose al tragar líquidos y tiene regurgitación nasal. ¿Tipo de disfagia y estudio?',
      opts: ['Esofágica; endoscopia', 'Orofaríngea; videofluoroscopia de la deglución', 'Esofágica; manometría', 'Orofaríngea; pH-metría', 'Funcional; ninguno'],
      ans: 1,
      exp: 'Tos al tragar y regurgitación nasal tras un EVC: disfagia orofaríngea neurológica. La videofluoroscopia evalúa la fase oral y faríngea y el riesgo de aspiración.',
      why: ['Es orofaríngea.', '', 'Es orofaríngea.', 'No evalúa la deglución.', 'Tiene causa clara.'],
      ref: 'ACG · Harrison 21e' }),

    q({ id: 'deglucion-02', dif: 1,
      stem: 'Mujer de 40 años con disfagia a sólidos y líquidos desde el inicio, regurgitación de comida sin digerir y pérdida de 5 kg en un año. Esofagograma: dilatación con estrechamiento distal en “pico de pájaro”. ¿Diagnóstico?',
      opts: ['Cáncer de esófago', 'Acalasia', 'Esofagitis eosinofílica', 'Anillo de Schatzki', 'ERGE'],
      ans: 1,
      exp: 'Disfagia motora (sólidos y líquidos) + regurgitación + pico de pájaro: acalasia. Se confirma con manometría y se hace endoscopia para descartar pseudoacalasia.',
      why: ['Empezaría con sólidos y sería más rápida.', '', 'Disfagia intermitente a sólidos.', 'Intermitente a sólidos.', 'Pirosis, no esta imagen.'],
      ref: 'ACG 2020 Acalasia' }),

    q({ id: 'deglucion-03', dif: 2,
      stem: 'Hombre de 66 años, fumador, con disfagia de 3 meses primero a sólidos y ahora a líquidos, con pérdida de 9 kg. ¿Estudio inicial?',
      opts: ['Manometría', 'Endoscopia con biopsias', 'pH-metría', 'Prueba con IBP', 'Videofluoroscopia'],
      ans: 1,
      exp: 'Disfagia mecánica progresiva + pérdida de peso: sospecha de cáncer. Endoscopia con biopsias primero.',
      why: ['No es el primer estudio.', '', 'No evalúa obstrucción.', 'Retrasa el diagnóstico.', 'Es para disfagia orofaríngea.'],
      ref: 'ACG' }),

    q({ id: 'deglucion-04', dif: 2,
      stem: 'Hombre de 24 años con asma y rinitis alérgica llega a urgencias con un trozo de carne atorado; ya le pasó antes. ¿Qué esperas en las biopsias?',
      opts: ['Metaplasia intestinal', '≥15 eosinófilos por campo de alto poder', 'Células en anillo de sello', 'Granulomas', 'Inclusiones virales'],
      ans: 1,
      exp: 'Esofagitis eosinofílica: hombre joven, atopia e impactación alimentaria. Se diagnostica con ≥15 eosinófilos por campo en biopsias esofágicas.',
      why: ['Es Barrett.', '', 'Es adenocarcinoma gástrico difuso.', 'Sugiere Crohn.', 'Sugiere CMV o herpes.'],
      ref: 'ACG 2025 EoE' }),

    q({ id: 'deglucion-05', dif: 2,
      stem: 'Hombre de 75 años con halitosis, regurgitación de comida que comió días antes y gorgoteo al tragar. ¿Diagnóstico y estudio?',
      opts: ['Acalasia; manometría', 'Divertículo de Zenker; esofagograma con bario', 'Cáncer; endoscopia', 'ERGE; IBP', 'Esofagitis eosinofílica; biopsias'],
      ans: 1,
      exp: 'El Zenker es una bolsa de pulsión sobre el cricofaríngeo. El esofagograma lo muestra; la endoscopia a ciegas tiene riesgo de perforarlo.',
      why: ['No explica la halitosis ni el gorgoteo.', '', 'La endoscopia tiene riesgo de perforación aquí.', 'No explica el cuadro.', 'No explica el cuadro.'],
      ref: 'Harrison 21e' }),

    q({ id: 'deglucion-06', dif: 2,
      stem: 'Hombre de 50 años con disfagia intermitente a carne desde hace 2 años, sin pérdida de peso. Endoscopia: anillo delgado en la unión esofagogástrica. ¿Diagnóstico y tratamiento?',
      opts: ['Acalasia; Heller', 'Anillo de Schatzki; dilatación endoscópica', 'Cáncer; esofagectomía', 'Zenker; miotomía', 'Espasmo; nitratos'],
      ans: 1,
      exp: 'El anillo de Schatzki causa disfagia intermitente a sólidos (sobre todo carne). Se trata con dilatación y IBP.',
      why: ['No hay trastorno motor.', '', 'Es un anillo benigno.', 'Es proximal.', 'No hay dolor ni patrón motor.'],
      ref: 'Harrison 21e' }),

    q({ id: 'deglucion-07', dif: 3,
      stem: 'Hombre de 70 años con “acalasia” en la manometría pero con disfagia de 2 meses y pérdida de 12 kg. ¿Qué haces antes de tratar?',
      opts: ['POEM de inmediato', 'Endoscopia (± ultrasonido endoscópico o TC) para descartar pseudoacalasia', 'Toxina botulínica', 'Dilatación neumática', 'Nitratos'],
      ans: 1,
      exp: 'Edad avanzada, evolución corta y pérdida de peso marcada sugieren pseudoacalasia por cáncer de la unión esofagogástrica que infiltra el plexo.',
      why: ['No sin descartar cáncer.', '', 'No sin descartar cáncer.', 'Riesgo de perforar un tumor.', 'No resuelve.'],
      ref: 'ACG 2020 Acalasia' }),

    q({ id: 'deglucion-08', dif: 2,
      stem: 'Paciente con VIH y CD4 de 80 refiere dolor intenso al tragar. ¿Causa más probable?',
      opts: ['Acalasia', 'Esofagitis infecciosa (Candida en primer lugar)', 'Anillo de Schatzki', 'Divertículo de Zenker', 'Esófago de Barrett'],
      ans: 1,
      exp: 'Odinofagia en inmunosupresión: Candida (la más común; tratamiento empírico con fluconazol), luego CMV (úlceras grandes) y herpes (úlceras pequeñas).',
      why: ['No causa odinofagia.', '', 'Causa disfagia intermitente.', 'No causa odinofagia.', 'No causa odinofagia.'],
      ref: 'Guías de infecciones oportunistas en VIH' }),

    q({ id: 'deglucion-09', dif: 2,
      stem: 'Mujer con acalasia tipo III (espástica) confirmada por manometría. ¿Tratamiento de elección?',
      opts: ['Dilatación neumática', 'POEM (miotomía endoscópica peroral)', 'IBP', 'Funduplicatura de Nissen', 'Dieta líquida'],
      ans: 1,
      exp: 'En el tipo III, la miotomía debe ser larga (incluye el segmento espástico): el POEM la permite y tiene mejores resultados que la dilatación o Heller.',
      why: ['Menos eficaz en tipo III.', '', 'No trata la acalasia.', 'Agravaría la obstrucción.', 'No es tratamiento.'],
      ref: 'ACG 2020 Acalasia' }),

    q({ id: 'deglucion-10', dif: 1,
      stem: 'Mujer de 52 años con fenómeno de Raynaud, esclerodactilia y pirosis intensa. Disfagia a sólidos y líquidos. ¿Hallazgo manométrico esperado?',
      opts: ['Esfínter inferior hipertónico que no relaja', 'Hipomotilidad del cuerpo esofágico con esfínter inferior hipotónico', 'Contracciones de alta amplitud', 'Manometría normal', 'Relajación incompleta con presurización panesofágica'],
      ans: 1,
      exp: 'En la esclerodermia, la fibrosis del músculo liso causa peristalsis débil o ausente y un esfínter inferior incompetente: reflujo grave y estenosis.',
      why: ['Es acalasia.', '', 'Es esófago hipercontráctil.', 'No en esclerodermia.', 'Es acalasia tipo II.'],
      ref: 'Chicago 4.0' })
  ]
};
