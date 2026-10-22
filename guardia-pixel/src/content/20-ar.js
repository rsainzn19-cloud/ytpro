// Tema 11 · Artritis reumatoide (Reumatología, semana 5)
const T = { topic: 'ar', subj: 'reuma' };
const q = (o) => ({ ...T, ...o });

export default {
  lessons: {
    ar: {
      hook: 'Poliartritis simétrica de manos que respeta las IFD, anti-CCP positivo y metotrexato lo antes posible: esa es la columna del tema.',
      anim: 'ar',
      compare: ['ar-oa'],
      nn: [],
      yt: 'rheumatoid arthritis',
      sections: [
        { h: 'Clínica', html: `
<ul>
<li><b>Poliartritis simétrica</b> de articulaciones pequeñas: MCF, IFP, muñecas y MTF. <b>Respeta las IFD</b> y la columna lumbar.</li>
<li>Rigidez matutina &gt;1 h, mejora con el movimiento; fatiga, febrícula.</li>
<li><b>Deformidades</b>: cuello de cisne, en ojal (boutonnière), desviación cubital, pulgar en Z.</li>
<li><b>Columna cervical</b>: subluxación atlantoaxoidea (C1–C2). Pide Rx en flexión y extensión antes de intubar o de una cirugía.</li>
<li><b>Extraarticular</b>: nódulos reumatoides, enfermedad pulmonar intersticial (patrón NIU), Sjögren secundario, escleritis, vasculitis, <b>síndrome de Felty</b> (AR + esplenomegalia + neutropenia), anemia de inflamación, túnel del carpo.</li>
<li><b>La enfermedad cardiovascular es la principal causa de muerte</b>: controla factores de riesgo.</li>
</ul>` },
        { h: 'Laboratorio e imagen', html: `
<ul>
<li><b>Factor reumatoide</b>: sensibilidad ~70%, poco específico (adultos mayores, hepatitis C, endocarditis, Sjögren).</li>
<li><b>Anti-CCP (ACPA)</b>: especificidad &gt;95%; predice erosiones y enfermedad más agresiva.</li>
<li>VSG y PCR elevadas.</li>
<li><b>Rx</b>: osteopenia yuxtaarticular, erosiones marginales y disminución simétrica del espacio articular. USG y RM detectan sinovitis temprana.</li>
</ul>` },
        { h: 'Criterios ACR/EULAR 2010 (≥6/10)', html: `
<p>Se aplican a un paciente con ≥1 articulación con sinovitis no explicada por otra causa.</p>
<div class="tablewrap"><table class="mini">
<tr><th>Dominio</th><th>Puntos</th></tr>
<tr><td><b>Articulaciones</b>: 1 grande 0 · 2–10 grandes 1 · 1–3 pequeñas 2 · 4–10 pequeñas 3 · &gt;10 (≥1 pequeña) 5</td><td>0–5</td></tr>
<tr><td><b>Serología</b>: FR y ACPA negativos 0 · positivo bajo 2 · positivo alto (&gt;3× el límite) 3</td><td>0–3</td></tr>
<tr><td><b>Reactantes de fase aguda</b>: normales 0 · PCR o VSG altas 1</td><td>0–1</td></tr>
<tr><td><b>Duración</b>: &lt;6 semanas 0 · ≥6 semanas 1</td><td>0–1</td></tr>
</table></div>
<p>La calculadora está en Más → Calculadoras.</p>` },
        { h: 'Tratamiento', html: `
<ul>
<li><b>Tratar a una meta</b> (remisión o baja actividad, medida con DAS28 o CDAI) e iniciar FAME en cuanto se diagnostica.</li>
<li><b>Metotrexato</b>: el ancla. 15–25 mg <b>a la semana</b> + ácido fólico. Vigila BH, PFH y creatinina. Efectos: hepatotoxicidad, mielosupresión, neumonitis, estomatitis. Teratogénico: suspender antes de buscar embarazo. Evitar en ERC grave y con alcohol.</li>
<li><b>Alternativas</b>: leflunomida (teratogénica; se “lava” con colestiramina), sulfasalazina (segura en embarazo), hidroxicloroquina (fondo de ojo basal y anual desde los 5 años de uso).</li>
<li><b>Glucocorticoides</b> a dosis bajas, solo como puente y por el menor tiempo posible.</li>
<li><b>Si no llega a la meta en 3–6 meses</b>: agregar biológico (anti-TNF: adalimumab, etanercept, infliximab, certolizumab; abatacept; tocilizumab; rituximab) o inhibidor de JAK (tofacitinib, baricitinib, upadacitinib).</li>
<li><b>Antes de biológicos o JAK</b>: tamizaje de TB latente (IGRA o PPD), VHB y VHC; vacunas inactivadas al día; nada de vacunas vivas.</li>
<li>Anti-TNF: evitar en IC NYHA III–IV y en enfermedades desmielinizantes. JAK: más eventos CV y trombosis en &gt;50 años con factores de riesgo (ORAL Surveillance).</li>
<li>Los AINE alivian síntomas, pero no frenan el daño articular.</li>
<li><b>Embarazo</b>: la AR suele mejorar. Metotrexato y leflunomida contraindicados; hidroxicloroquina, sulfasalazina, prednisona a dosis baja y certolizumab sí.</li>
</ul>` }
      ],
      mnemo: { t: 'AR: “MANOS que no tocan la última falange”', d: 'MCF, IFP y muñecas en ambos lados; la IFD se respeta (si está la IFD, piensa en OA o artritis psoriásica). Metotrexato es el primer paso, con ácido fólico, una vez a la semana.' },
      pearl: 'El anti-CCP es la prueba más específica de AR y predice erosiones. El factor reumatoide es más sensible, pero aparece en adultos mayores sanos y en hepatitis C.',
      trap: 'Escribir metotrexato “diario” es un error que puede ser mortal: la dosis es semanal.',
      guide: [
        'Glucocorticoides: el ACR 2021 desaconseja su uso prolongado; EULAR 2022 los acepta como puente al iniciar o cambiar de FAME, reduciéndolos lo antes posible.',
        'Después de metotrexato: el ACR 2021 prefiere agregar un biológico o JAK; EULAR 2022 permite triple terapia convencional en pacientes sin factores de mal pronóstico. ⚠️ Pregunta a tu profesor cuál esquema prefiere.'
      ],
      refs: [
        'Aletaha D, et al. 2010 Rheumatoid arthritis classification criteria (ACR/EULAR). Arthritis Rheum 2010.',
        'Fraenkel L, et al. 2021 American College of Rheumatology Guideline for the Treatment of Rheumatoid Arthritis. Arthritis Care Res 2021.',
        'Smolen JS, et al. EULAR recommendations for the management of rheumatoid arthritis: 2022 update. Ann Rheum Dis 2023.'
      ]
    }
  },

  compares: {
    'ar-oa': {
      topic: 'ar', a: 'Artritis reumatoide', b: 'Osteoartritis',
      rows: [
        ['Naturaleza', 'Inflamatoria, autoinmune', 'Degenerativa, mecánica'],
        ['Rigidez matutina', '>1 h', '<30 min'],
        ['Dolor', 'Mejora con el movimiento', 'Empeora con el uso y mejora con reposo'],
        ['Manos', 'MCF, IFP y muñecas; respeta IFD', 'IFD (Heberden), IFP (Bouchard), 1ª carpometacarpiana'],
        ['Simetría', 'Simétrica', 'Asimétrica, suele dominar un lado'],
        ['Laboratorio', 'FR, anti-CCP, VSG/PCR altas', 'Normal'],
        ['Rx', 'Osteopenia yuxtaarticular, erosiones marginales, espacio reducido simétrico', 'Osteofitos, esclerosis y quistes subcondrales, espacio reducido asimétrico'],
        ['Tratamiento', 'FAME (metotrexato), biológicos', 'Ejercicio, bajar de peso, AINE tópico, infiltración']
      ]
    }
  },

  anims: {
    ar: {
      title: 'Del sinovio al pannus',
      steps: [
        { cap: '<b>Articulación sana.</b> Dos huesos cubiertos de cartílago, separados por líquido sinovial. La membrana sinovial es delgada.',
          labels: [[80, 12, 'Hueso'], [36, 60, 'Sinovial'], [126, 60, 'Cartílago'], [80, 108, 'Hueso']] },
        { cap: '<b>Inflamación.</b> Linfocitos T y B y macrófagos llegan al sinovio y liberan TNF, IL-6 e IL-1. El sinovio se engrosa y produce más líquido: la articulación se hincha y duele.',
          labels: [[36, 60, 'Sinovitis'], [120, 30, 'TNF · IL-6']] },
        { cap: '<b>Pannus.</b> El sinovio inflamado crece como un tejido invasor que se come el cartílago y erosiona el hueso en los bordes (erosiones marginales). El daño es irreversible.',
          labels: [[50, 46, 'Pannus'], [120, 76, 'Erosión']] },
        { cap: '<b>Tratamiento.</b> El metotrexato y los biológicos (anti-TNF, anti-IL-6) apagan la inflamación: el pannus retrocede y se detiene el daño. Por eso se trata temprano.',
          labels: [[80, 12, 'Metotrexato / anti-TNF'], [36, 60, 'Sinovio en calma']] }
      ]
    }
  },

  cards: [
    ['Articulaciones típicas de la AR', 'MCF, IFP, muñecas y MTF, simétricas; respeta IFD'],
    ['Prueba más específica de AR', 'Anti-CCP (ACPA)'],
    ['Criterios ACR/EULAR 2010: puntaje para AR', '≥6 de 10'],
    ['Rx de la AR', 'Osteopenia yuxtaarticular, erosiones marginales, espacio reducido simétrico'],
    ['FAME ancla', 'Metotrexato semanal + ácido fólico'],
    ['Antes de un biológico', 'Tamizaje de TB latente (IGRA/PPD), VHB y VHC'],
    ['Síndrome de Felty', 'AR + esplenomegalia + neutropenia'],
    ['Antes de intubar a un paciente con AR', 'Rx cervical en flexión-extensión (subluxación C1–C2)'],
    ['Principal causa de muerte en AR', 'Enfermedad cardiovascular'],
    ['Hidroxicloroquina: vigilancia', 'Fondo de ojo basal y anual desde los 5 años de uso'],
    ['Leflunomida en mujer que quiere embarazarse', 'Teratogénica: lavado con colestiramina'],
    ['FAME seguros en el embarazo', 'Hidroxicloroquina, sulfasalazina (y certolizumab)']
  ],

  questions: [
    q({ id: 'ar-01', dif: 2,
      stem: 'Mujer de 45 años con sinovitis en 2 MCF y 1 IFP de 8 semanas. Anti-CCP 5 veces el límite superior, FR negativo, PCR elevada. ¿Puntaje ACR/EULAR 2010 y conclusión?',
      opts: ['5: no es AR', '7: cumple criterios de AR', '4: posible AR', '10: AR grave', 'No se puede calcular sin Rx'],
      ans: 1,
      exp: '3 articulaciones pequeñas (1–3) = 2 puntos; serología positiva alta (>3× el límite) = 3; PCR alta = 1; ≥6 semanas = 1. Total: 2 + 3 + 1 + 1 = 7. Cumple criterios de AR (≥6).',
      why: ['Subestimaste los dominios.', '', 'Supera el umbral de 6.', 'El puntaje no mide gravedad.', 'Los criterios no requieren Rx.'],
      ref: 'ACR/EULAR 2010' }),

    q({ id: 'ar-02', dif: 1,
      stem: '¿Cuál es la prueba de laboratorio más específica para artritis reumatoide?',
      opts: ['Factor reumatoide', 'Anti-CCP', 'ANA', 'VSG', 'HLA-B27'],
      ans: 1,
      exp: 'El anti-CCP (ACPA) tiene especificidad >95% y se asocia a enfermedad erosiva. El factor reumatoide es menos específico.',
      why: ['Es más sensible pero menos específico.', '', 'Es de LES y conectivopatías.', 'Es inespecífica.', 'Se asocia a espondiloartritis.'],
      ref: 'ACR' }),

    q({ id: 'ar-03', dif: 1,
      stem: 'Mujer de 60 años con dolor en las IFD de ambas manos, nódulos duros en el dorso de esas articulaciones y rigidez matutina de 10 minutos. ¿Qué es más probable?',
      opts: ['Artritis reumatoide', 'Osteoartritis (nódulos de Heberden)', 'Gota', 'Lupus', 'Fiebre reumática'],
      ans: 1,
      exp: 'La AR respeta las IFD. Nódulos óseos en IFD (Heberden) con rigidez breve = osteoartritis. En IFD con onicopatía piensa también en artritis psoriásica.',
      why: ['La AR respeta las IFD y da rigidez prolongada.', '', 'Puede afectar dedos, pero con ataques inflamatorios agudos.', 'No da nódulos óseos en IFD.', 'No es el cuadro.'],
      ref: 'ACR' }),

    q({ id: 'ar-04', dif: 1,
      stem: 'Mujer de 38 años con AR recién diagnosticada, PFH y creatinina normales, sin planes de embarazo. ¿Tratamiento de base?',
      opts: ['Metotrexato semanal + ácido fólico', 'Metotrexato diario', 'Prednisona 40 mg/día por 1 año', 'Solo AINE', 'Infliximab de inicio'],
      ans: 0,
      exp: 'Metotrexato 15–25 mg una vez a la semana (oral o subcutáneo) con ácido fólico para reducir efectos adversos. Puede usarse prednisona a dosis baja como puente breve.',
      why: ['', 'La dosis diaria es un error grave y puede ser mortal.', 'Dosis y duración excesivas.', 'No modifican la enfermedad.', 'Los biológicos van tras falla al FAME convencional.'],
      ref: 'ACR 2021 · EULAR 2022' }),

    q({ id: 'ar-05', dif: 2,
      stem: 'Paciente con AR en metotrexato desde hace 4 meses. Presenta tos seca, disnea progresiva y fiebre leve. La TC muestra opacidades en vidrio despulido bilaterales. ¿Qué sospechas?',
      opts: ['Nódulos reumatoides', 'Neumonitis por metotrexato', 'Asma', 'TEP', 'Insuficiencia cardiaca'],
      ans: 1,
      exp: 'La neumonitis por hipersensibilidad al metotrexato suele aparecer en el primer año: tos, disnea, fiebre y vidrio despulido. Se suspende el fármaco, se descarta infección (incluida Pneumocystis) y se dan esteroides.',
      why: ['No dan vidrio despulido difuso con fiebre.', '', 'No da vidrio despulido.', 'No encaja con la imagen.', 'Menos probable sin otros datos.'],
      ref: 'ACR' }),

    q({ id: 'ar-06', dif: 1,
      stem: 'Hombre con AR que va a iniciar adalimumab. ¿Qué estudio es obligatorio antes?',
      opts: ['Densitometría', 'Tamizaje de TB latente (IGRA o PPD) y hepatitis B', 'Ecocardiograma', 'Colonoscopia', 'Electromiografía'],
      ans: 1,
      exp: 'Los anti-TNF pueden reactivar TB latente y hepatitis B. Si el IGRA o el PPD son positivos, se trata la TB latente antes (o junto) de iniciar el biológico.',
      why: ['No es requisito.', '', 'Solo si hay sospecha de IC.', 'No es requisito.', 'No tiene relación.'],
      ref: 'ACR 2021' }),

    q({ id: 'ar-07', dif: 2,
      stem: 'Mujer de 30 años con AR controlada con metotrexato que desea embarazarse el próximo año. ¿Qué haces?',
      opts: ['Seguir igual durante el embarazo', 'Suspender el metotrexato al menos 1–3 meses antes de la concepción y cambiar a hidroxicloroquina o sulfasalazina', 'Cambiar a leflunomida', 'Suspender todo tratamiento', 'Cambiar a prednisona 60 mg/día'],
      ans: 1,
      exp: 'El metotrexato es teratogénico (abortos, malformaciones). Se suspende antes de buscar el embarazo y se cambia por fármacos compatibles: hidroxicloroquina, sulfasalazina, prednisona a dosis baja o certolizumab.',
      why: ['Está contraindicado en el embarazo.', '', 'También es teratogénica.', 'Puede recaer; hay opciones seguras.', 'Dosis excesiva y riesgosa.'],
      ref: 'ACR 2020 salud reproductiva' }),

    q({ id: 'ar-08', dif: 2,
      stem: 'Hombre de 60 años con AR de 15 años, esplenomegalia y neutrófilos de 900/µL con infecciones recurrentes. ¿Diagnóstico?',
      opts: ['Leucemia mieloide', 'Síndrome de Felty', 'Sjögren', 'Lupus inducido', 'Linfoma'],
      ans: 1,
      exp: 'AR de larga evolución + esplenomegalia + neutropenia = síndrome de Felty. Se asocia a FR alto y nódulos; se trata la AR (metotrexato, rituximab).',
      why: ['No hay blastos ni datos de leucemia.', '', 'Da sequedad, no neutropenia con esplenomegalia.', 'Se asocia a fármacos (hidralazina, procainamida).', 'Posible en AR, pero la tríada es de Felty.'],
      ref: 'Reumatología clínica' }),

    q({ id: 'ar-09', dif: 2,
      stem: 'Mujer con AR erosiva de larga evolución que será operada con intubación. Refiere dolor cervical y parestesias en las manos. ¿Qué estudio pides antes?',
      opts: ['Ninguno', 'Rx de columna cervical en flexión y extensión', 'Densitometría', 'USG de cuello', 'Electrocardiograma'],
      ans: 1,
      exp: 'La AR afecta la articulación atlantoaxoidea: la hiperextensión al intubar puede comprimir la médula. Se pide Rx en flexión-extensión (o RM) y se planea la intubación.',
      why: ['Es un riesgo neurológico real.', '', 'No evalúa la inestabilidad.', 'No evalúa la columna.', 'No evalúa este riesgo.'],
      ref: 'Reumatología clínica' }),

    q({ id: 'ar-10', dif: 1,
      stem: 'Paciente con AR que tomará hidroxicloroquina por tiempo prolongado. ¿Qué vigilancia necesita?',
      opts: ['Audiometría', 'Exploración oftalmológica basal y anual a partir de los 5 años de uso', 'Biopsia hepática', 'Espirometría', 'Ecocardiograma'],
      ans: 1,
      exp: 'La hidroxicloroquina puede causar retinopatía (maculopatía en “ojo de buey”) dependiente de dosis y tiempo. Se pide examen basal y anual a partir de los 5 años (antes si hay factores de riesgo).',
      why: ['No es el efecto clásico.', '', 'No tiene relación.', 'No tiene relación.', 'Rara vez cardiotóxica; no es la vigilancia de rutina.'],
      ref: 'AAO 2016' }),

    q({ id: 'ar-11', dif: 2,
      stem: 'Mujer de 50 años con AR tratada 6 meses con metotrexato 25 mg semanales y buen apego. Sigue con 8 articulaciones inflamadas y DAS28 de 5.4. ¿Siguiente paso?',
      opts: ['Esperar otros 6 meses', 'Agregar un biológico (o JAK) o, según la guía, pasar a triple terapia convencional', 'Suspender el metotrexato y dar solo AINE', 'Prednisona 30 mg/día crónica', 'Cirugía'],
      ans: 1,
      exp: 'Tratar a una meta: si no hay remisión o baja actividad tras 3–6 meses con dosis óptimas de metotrexato, se escala (biológico o JAK; EULAR acepta triple terapia si no hay mal pronóstico).',
      why: ['Seguir con actividad alta acumula daño.', '', 'Retroceso sin justificación.', 'Los esteroides crónicos tienen muchos efectos adversos.', 'No es la indicación.'],
      ref: 'ACR 2021 · EULAR 2022' }),

    q({ id: 'ar-12', dif: 1,
      stem: 'Hombre de 55 años con AR de 10 años. ¿Cuál es la principal causa de muerte en pacientes con AR?',
      opts: ['Infecciones', 'Enfermedad cardiovascular', 'Linfoma', 'Enfermedad pulmonar intersticial', 'Insuficiencia renal'],
      ans: 1,
      exp: 'La inflamación crónica acelera la aterosclerosis: la ECV es la principal causa de muerte. Controla PA, lípidos, tabaco y glucosa, y apaga la inflamación.',
      why: ['Son importantes, pero no la primera causa.', '', 'Aumenta su riesgo, pero no es la principal.', 'Importante, pero no la primera.', 'No es la principal.'],
      ref: 'EULAR 2022 riesgo CV en enfermedades inflamatorias' }),

    q({ id: 'ar-13', dif: 2,
      stem: 'Mujer de 33 años con AR en leflunomida que quiere embarazarse. ¿Qué debes hacer?',
      opts: ['Nada especial', 'Suspender la leflunomida y hacer lavado con colestiramina, confirmando niveles bajos', 'Cambiar a metotrexato', 'Duplicar la dosis', 'Suspenderla solo cuando se confirme el embarazo'],
      ans: 1,
      exp: 'La leflunomida es teratogénica y tiene vida media muy larga por recirculación enterohepática. Antes de buscar el embarazo se suspende y se hace lavado con colestiramina hasta tener niveles indetectables.',
      why: ['Riesgo de malformaciones.', '', 'También teratogénico.', 'Absurdo.', 'Su efecto dura meses; hay que lavarla antes.'],
      ref: 'ACR 2020 salud reproductiva' }),

    q({ id: 'ar-14', dif: 2,
      stem: 'Hombre de 62 años, fumador, con AR anti-CCP positivo. Tiene disnea progresiva y estertores “en velcro” en las bases. ¿Qué complicación extraarticular sospechas?',
      opts: ['Derrame pericárdico', 'Enfermedad pulmonar intersticial', 'Asma', 'Bronquiectasias aisladas', 'Neumotórax'],
      ans: 1,
      exp: 'La enfermedad pulmonar intersticial es una complicación frecuente y grave de la AR (más en hombres, fumadores, anti-CCP alto); el patrón más común es NIU. Se estudia con TC de alta resolución y pruebas funcionales.',
      why: ['No da estertores en velcro.', '', 'No es el cuadro.', 'Posibles, pero los estertores en velcro sugieren intersticial.', 'Daría dolor súbito.'],
      ref: 'ACR/CHEST 2023 EPI en enfermedades reumáticas' }),

    q({ id: 'ar-15', dif: 1,
      stem: 'Paciente con AR activa que inicia metotrexato. Su médico agrega prednisona 7.5 mg/día. ¿Cuál es el papel de la prednisona?',
      opts: ['Tratamiento de mantenimiento indefinido', 'Puente mientras actúa el FAME, a la menor dosis y por el menor tiempo posible', 'Sustituye al metotrexato', 'Previene la enfermedad cardiovascular', 'Previene la osteoporosis'],
      ans: 1,
      exp: 'El metotrexato tarda semanas en actuar. Los glucocorticoides a dosis bajas controlan síntomas mientras tanto y se retiran lo antes posible por sus efectos adversos.',
      why: ['El uso crónico causa osteoporosis, DM, infecciones.', '', 'No modifica la enfermedad a largo plazo como el FAME.', 'La aumenta.', 'La causa.'],
      ref: 'EULAR 2022' })
  ],

  cases: [
    { id: 'g-ar', topic: 'ar', subj: 'reuma',
      title: 'Las manos de Mariana', place: 'Consulta de Reumatología',
      patient: { name: 'Mariana', age: 34, sex: 'M', skin: '#E2B08A', hair: '#3A2418', gown: '#C6E84A' },
      intro: 'Contadora. Lleva 10 semanas con dolor e inflamación en ambas manos y muñecas, peor en las mañanas: tarda 2 horas en “soltarse”.',
      extra: { label: 'DAS28', unit: '' },
      start: { FC: 82, PAS: 118, PAD: 74, SpO2: 98, FR: 16, X: 5.6 },
      nodes: [
        { tag: 'Consulta 1', ecg: 'normal',
          text: 'Sinovitis en 6 MCF/IFP y ambas muñecas. FR positivo alto, anti-CCP positivo, PCR elevada. Rx con osteopenia yuxtaarticular.',
          q: '¿Qué indicas?',
          A: { t: 'Metotrexato semanal + ácido fólico, con prednisona a dosis baja como puente', ok: true, res: 'Le explicas la dosis semanal y pides BH, PFH y creatinina de control.' },
          B: { t: 'Solo AINE y ver evolución en 6 meses', ok: false, res: 'A los 6 meses ya tiene erosiones en la Rx.', vit: { X: 6.1 } },
          why: 'AR establecida (ACR/EULAR ≥6): FAME lo antes posible. El metotrexato es el ancla; los AINE no frenan el daño.' },
        { tag: '6 meses después', ecg: 'normal', vit: { X: 5.2 },
          text: 'Toma metotrexato 25 mg semanales con buen apego. Sigue con 7 articulaciones inflamadas (DAS28 5.2).',
          q: '¿Qué haces?',
          A: { t: 'Escalar: agregar un biológico (anti-TNF) después del tamizaje de TB y hepatitis', ok: true, res: 'Pides IGRA y serologías antes de iniciar.' },
          B: { t: 'Seguir igual otro año', ok: false, res: 'Acumula daño articular.', vit: { X: 5.6 } },
          why: 'Tratar a una meta: sin remisión o baja actividad en 3–6 meses con metotrexato óptimo, se escala.' },
        { tag: 'Tamizaje', ecg: 'normal',
          text: 'IGRA positivo. Rx de tórax normal, sin síntomas respiratorios.',
          q: '¿Qué haces con el anti-TNF?',
          A: { t: 'Iniciar ya el anti-TNF, sin tratar la TB latente', ok: false, res: 'A los 4 meses desarrolla TB pulmonar.' },
          B: { t: 'Tratar la TB latente (p. ej., rifampicina 4 meses o isoniazida) e iniciar el anti-TNF tras al menos 1 mes de tratamiento', ok: true, res: 'Inicia adalimumab al mes; a los 3 meses DAS28 2.4 (remisión).', vit: { X: 2.4 } },
          why: 'Los anti-TNF reactivan TB latente: se trata antes (o al menos un mes antes) de iniciarlos.' },
        { tag: '1 año después', ecg: 'normal', vit: { X: 2.2 },
          text: 'En remisión. Quiere embarazarse en los próximos meses.',
          q: '¿Qué ajustas?',
          A: { t: 'Suspender el metotrexato al menos 1–3 meses antes de buscar el embarazo; mantener o cambiar a fármacos compatibles (p. ej., certolizumab, hidroxicloroquina)', ok: true, res: 'Planean el embarazo con Reumatología y Ginecología.' },
          B: { t: 'Mantener el metotrexato y suspenderlo al confirmar el embarazo', ok: false, res: 'El metotrexato es teratogénico desde etapas tempranas.' },
          why: 'Metotrexato y leflunomida son teratogénicos: se suspenden antes de la concepción.' }
      ] }
  ]
};
