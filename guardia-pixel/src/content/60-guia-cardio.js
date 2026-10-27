// Complemento de la “Guía Cardio” de la rotación (Ximena Cors Cepeda, EMIS 5; Google Drive).
// guias.<tema>: { puntos (HTML), ojo (dónde tu guía difiere de las guías actuales), cards [frente, reverso] }
// Se muestra en la lección como “De tu guía de la rotación”; las preguntas se suman al banco del tema.
const SRC = { name: 'Guía Cardio · Ximena Cors Cepeda (EMIS 5)', url: 'https://docs.google.com/document/d/1KD6KncWKFzExg3jRxPwSSYhywjqoqJN6KhAD_fr6TWk/edit' };
const REF = 'Guía Cardio de la rotación (X. Cors) + guías actuales';
const C = { subj: 'cardio' };
const q = (topic, o) => ({ ...C, topic, ref: REF, ...o });

export default {
  guias: {
    scc: { src: SRC,
      puntos: [
        '<b>Clasificación canadiense (CCS)</b> de la angina: I solo con esfuerzo extenuante · II con actividad ordinaria (subir escaleras rápido), limitación leve · III con poca actividad (caminar una o dos cuadras), limitación marcada · IV en reposo o con cualquier actividad.',
        '<b>Signo de Levine</b>: el paciente señala el dolor con el puño cerrado sobre el esternón.',
        '<b>Prueba de esfuerzo</b>: meta de 85% de la FC máxima (220 − edad); suspende betabloqueador y calcioantagonista 48 h antes. Es de <b>alto riesgo</b> si hay infradesnivel del ST ≥2 mm o a baja carga, en ≥5 derivaciones, elevación del ST, caída de la PAS >10 mmHg o no completa la prueba.',
        '<b>Robo coronario</b>: la adenosina y el dipiridamol dilatan solo las arterias sanas (las estenóticas ya están al máximo) y desvían el flujo; por eso revelan la isquemia en el estrés farmacológico.',
        '<b>FFR</b> (reserva fraccional de flujo): presión distal ÷ proximal con adenosina; <b>≤0.80</b> = estenosis que limita el flujo → revascularizar.',
        'Antecedente familiar de cardiopatía prematura: familiar de primer grado hombre <55 años o mujer <65 años.'
      ],
      ojo: [
        'Tu guía dice que los betabloqueadores son “los únicos que reducen mortalidad” en angina estable. Hoy (ESC 2024) alivian la angina, pero solo mejoran el pronóstico si hay IC con FEVI reducida o infarto reciente; lo que mejora el pronóstico en todos es la aspirina y la estatina.',
        'Meta de LDL: tu guía pone <70 mg/dL; la ESC (2019 y 2024) pide <55 mg/dL y bajar ≥50% en riesgo muy alto, como el síndrome coronario crónico.',
        'Tu guía pone la prueba de esfuerzo con ECG como el estudio más usado; la ESC 2024 prefiere angio-TC o imagen funcional (lo verás así en la lección).'
      ],
      cards: [
        ['Clase CCS III', 'Angina con poca actividad (caminar 1–2 cuadras): limitación marcada'],
        ['Prueba de esfuerzo de alto riesgo', 'ST ↓ ≥2 mm o a baja carga, en ≥5 derivaciones, ST ↑, PAS cae >10 mmHg, no completa'],
        ['Qué suspender 48 h antes de la prueba de esfuerzo', 'Betabloqueador y calcioantagonista'],
        ['FFR significativa', '≤0.80 → revascularizar'],
        ['Robo coronario', 'El vasodilatador dilata las arterias sanas y quita flujo a la estenótica: revela la isquemia']
      ] },
    sca: { src: SRC,
      puntos: [
        '<b>Tipos de infarto</b> (4ª definición universal): 1 aterotrombótico (rotura de placa) · 2 desequilibrio aporte/demanda (anemia, taquiarritmia, hipotensión) · 3 muerte súbita antes de tener biomarcadores · 4a por ICP, 4b trombosis del stent · 5 por cirugía de revascularización.',
        '<b>Evolución del ECG</b> en el IAMCEST: T hiperaguda → elevación del ST → onda Q patológica (≥40 ms o >¼ de la R) → T invertida → el ST se normaliza; la Q puede quedar para siempre.',
        '<b>Localización</b>: V1–V2 septal y V3–V4 anterior (descendente anterior) · I, aVL, V5–V6 lateral (circunfleja o diagonal) · II, III, aVF inferior (coronaria derecha en ~80%) · V7–V9 posterior · V3R–V4R ventrículo derecho.',
        '<b>Infarto del VD</b> (con el inferior): hipotensión + yugulares ingurgitadas + pulmones limpios → líquidos IV; evita nitratos y diuréticos.',
        '<b>Fibrinólisis fallida</b>: el ST no baja ≥50% a los 60–90 min → ICP de rescate. Si fue exitosa → coronariografía en 2–24 h.',
        '<b>Complicaciones mecánicas</b> (casi siempre en la primera semana): rotura de músculo papilar (IAM inferior → IM aguda y edema pulmonar) · rotura septal (soplo holosistólico nuevo con frémito) · rotura de pared libre (taponamiento) · pericarditis temprana (frote y ST difuso) o Dressler a las semanas.'
      ],
      ojo: [
        'Mioglobina: tu guía dice “lo primero que baja”; en realidad es el primer marcador que <b>sube</b> (1–3 h), pero es inespecífico y ya no se usa: el estándar es la troponina de alta sensibilidad.',
        'Doble antiagregación: tu guía da 12 meses con ICP y 9 sin ICP; la ESC 2023 da 12 meses de forma estándar en ambos casos (acortable si hay alto riesgo de sangrado).',
        'Inhibidores GP IIb/IIIa: ya no son de rutina en el SCASEST; solo de rescate en la sala de hemodinamia (trombo grande o no reflujo).',
        'Betabloqueador “para todos al alta”: la ESC 2023 lo indica sobre todo con FEVI ≤40%; con FEVI conservada el beneficio es dudoso (REDUCE-AMI, 2024).',
        'Elevación del ST en V2–V3: tu guía da 2.5 mm en hombres y 1.5 mm en mujeres; la 4ª definición da ≥2 mm en hombres ≥40 años, ≥2.5 mm en hombres <40 y ≥1.5 mm en mujeres (≥1 mm en las demás derivaciones).'
      ],
      cards: [
        ['Infarto tipo 2', 'Desequilibrio aporte/demanda sin rotura de placa (anemia, taquiarritmia, hipotensión)'],
        ['Infarto del VD: tríada', 'Hipotensión + yugulares ingurgitadas + pulmones limpios → líquidos, sin nitratos'],
        ['Fibrinólisis fallida', 'ST no baja ≥50% a los 60–90 min → ICP de rescate'],
        ['Tras fibrinólisis exitosa', 'Coronariografía en 2–24 h'],
        ['Onda Q patológica', '≥40 ms o >¼ de la altura de la R'],
        ['Rotura de músculo papilar', 'IAM inferior, primera semana: IM aguda con edema pulmonar']
      ] },
    aortica: { src: SRC,
      puntos: [
        '<b>Grados de un soplo</b> (Levine): 1 apenas audible · 2 suave · 3 moderado sin frémito · 4 fuerte <b>con frémito</b> · 5 se oye con el borde del estetoscopio · 6 se oye sin tocar el tórax.',
        '<b>Desdoblamiento del S2</b>: fisiológico (en inspiración) · amplio (bloqueo de rama derecha, estenosis pulmonar) · <b>fijo</b> (CIA) · <b>paradójico</b>, en espiración (estenosis aórtica grave o bloqueo de rama izquierda).',
        '<b>Fenómeno de Gallavardin</b>: la estenosis aórtica se irradia al ápex y suena como insuficiencia mitral.',
        '<b>Estadios de la EA</b>: A en riesgo · B progresiva · C1 grave asintomática con FEVI normal · C2 grave asintomática con FEVI <50% · D sintomática. Grave = área ≤1 cm², velocidad ≥4 m/s o gradiente medio ≥40 mmHg.',
        'Supervivencia media sin cambio valvular una vez que aparecen los síntomas: angina 5 años, síncope 3, insuficiencia cardiaca 2.',
        'Eco de seguimiento en la EA asintomática: B leve cada 3–5 años · B moderada cada 1–2 años · C cada 6–12 meses.',
        '<b>Insuficiencia aórtica</b>: signo de <b>Hill</b> (PAS poplítea >60 mmHg por arriba de la braquial = IA grave). Si el soplo se oye mejor en el borde esternal <b>derecho</b>, piensa en la raíz aórtica (dilatación, disección); en el izquierdo, en la válvula.',
        '<b>Prótesis mecánica</b>: warfarina de por vida (nunca ACOD). Aórtica sin factores de riesgo: INR 2.5 (2–3); con FA, embolia previa, FEVI baja o prótesis mitral: INR 3 (2.5–3.5). Bioprótesis: aspirina (o AVK 3–6 meses).'
      ],
      ojo: [
        'Tu guía pone aspirina + warfarina de por vida a todas las prótesis mecánicas; la ACC/AHA 2020 ya no la indica de rutina (solo se puede considerar si el riesgo de sangrado es bajo) y la ESC 2021 la reserva para enfermedad aterosclerótica.',
        'Tu guía reserva el TAVI para riesgo quirúrgico alto; hoy se decide sobre todo por edad (ESC/EACTS 2025: ≥70 años). Lo verás en “Depende de la guía”.'
      ],
      cards: [
        ['Soplo grado 4', 'Fuerte, con frémito palpable'],
        ['Desdoblamiento paradójico del S2', 'EA grave o bloqueo de rama izquierda: se desdobla en espiración'],
        ['Fenómeno de Gallavardin', 'EA irradiada al ápex que imita una IM'],
        ['Signo de Hill', 'PAS poplítea >60 mmHg sobre la braquial: IA grave'],
        ['INR en prótesis mecánica aórtica sin factores de riesgo', '2.5 (2–3), de por vida'],
        ['Supervivencia en EA sintomática', 'Angina 5 años · síncope 3 · IC 2']
      ] },
    mitral: { src: SRC,
      puntos: [
        '<b>Facies mitral</b>: chapetas violáceas en las mejillas por gasto bajo y vasoconstricción (estenosis mitral avanzada).',
        '<b>Síndrome de Ortner</b>: disfonía por compresión del nervio laríngeo recurrente por una aurícula izquierda grande; también da disfagia (esófago) y hemoptisis.',
        '<b>ECG y Rx en EM</b>: P mitral (≥120 ms, bimodal en DII), FA, hipertrofia del VD; doble contorno de la AI y carina abierta.',
        'Eco de seguimiento en la EM: área >1.5 cm² cada 3–5 años · 1–1.5 cm² cada 1–2 años · <1 cm² cada año.',
        '<b>Valvuloplastia percutánea con balón</b> de primera elección si la anatomía es favorable; cirugía si hay trombo en la AI, IM moderada o grave o mucho calcio.',
        '<b>IM aguda</b> (rotura de papilar o de cuerdas, endocarditis): edema pulmonar o choque con un soplo que puede ser corto; puente con nitroprusiato y balón intraaórtico mientras llega la cirugía urgente.',
        '<b>Prolapso mitral</b>: degeneración mixomatosa (sobre todo de la valva posterior), mujeres delgadas, Marfan y Ehlers-Danlos. De pie o con Valsalva el clic se adelanta y el soplo se alarga; en cuclillas se atrasa.'
      ],
      ojo: [
        'Tu guía dice que la reparación de la IM está contraindicada con FEVI <30%; no es absoluta: con FEVI muy baja se valora el caso (reparación quirúrgica o percutánea borde a borde).',
        'Anticoagulación en EM con FA: warfarina, no ACOD, en la estenosis mitral reumática moderada o grave (INVICTUS, 2022).'
      ],
      cards: [
        ['Síndrome de Ortner', 'Disfonía por compresión del laríngeo recurrente por la AI grande'],
        ['P mitral', '≥120 ms y bimodal en DII: crecimiento de la AI'],
        ['EM: tratamiento de elección', 'Valvuloplastia percutánea con balón (si no hay trombo en AI ni IM importante)'],
        ['Prolapso mitral de pie o con Valsalva', 'El clic se adelanta y el soplo se alarga'],
        ['IM aguda: puente a cirugía', 'Nitroprusiato + balón intraaórtico']
      ] },
    tep: { src: SRC,
      puntos: [
        '<b>Tríada de Virchow</b>: estasis (inmovilidad, el factor clínico más importante), daño endotelial e hipercoagulabilidad.',
        '<b>Exploración</b>: taquicardia, taquipnea, P2 fuerte o S2 desdoblado, ingurgitación yugular; en el TEP masivo, hipotensión y signo de Kussmaul.',
        '<b>Gasometría</b>: hipoxemia con gradiente A-a aumentado y alcalosis respiratoria (hipocapnia por la taquipnea).',
        '<b>Eco</b>: VD dilatado (VD/VI >1), septo plano y <b>signo de McConnell</b> (acinesia de la pared libre del VD con el ápex respetado).',
        '<b>Inestable (alto riesgo)</b>: PAS <90 mmHg por >15 min, caída ≥40 mmHg o necesidad de vasopresor → trombólisis sistémica.',
        '<b>Contraindicaciones absolutas de trombólisis</b>: EVC hemorrágico o de causa desconocida, EVC isquémico reciente, tumor del SNC, trauma, cirugía o TCE recientes, sangrado activo y diátesis hemorrágica. Si está contraindicada: embolectomía quirúrgica o tratamiento por catéter.',
        '<b>Filtro de vena cava</b>: solo si no se puede anticoagular o si recurre pese a una buena anticoagulación.'
      ],
      ojo: [
        'Tu guía dice que no se haga angio-TC en el embarazo; la ESC 2019 sí la permite (o el gammagrama V/Q) si la sospecha persiste, después del Doppler si hay síntomas de TVP. La radiación al feto es baja.',
        'EVC isquémico como contraindicación de trombólisis: tu guía dice ≤3 meses; la ESC 2019 dice en los últimos 6 meses.'
      ],
      cards: [
        ['Signo de McConnell', 'Pared libre del VD acinética con ápex respetado: TEP'],
        ['Gasometría típica del TEP', 'Hipoxemia, gradiente A-a ↑ y alcalosis respiratoria'],
        ['TEP de alto riesgo', 'PAS <90 mmHg >15 min, caída ≥40 mmHg o vasopresor → trombólisis'],
        ['Filtro de vena cava', 'Solo si no se puede anticoagular o recurre pese a anticoagulación'],
        ['Factor clínico más importante de la tríada de Virchow', 'Estasis por inmovilidad']
      ] },
    hp: { src: SRC,
      puntos: [
        '<b>Por cateterismo derecho</b>: PAPm >20 mmHg. Precapilar: PCP ≤15 mmHg y RVP >2 UW · poscapilar (cardiopatía izquierda): PCP >15 mmHg.',
        '<b>Clínica</b>: disnea y síncope de esfuerzo, angina (isquemia del VD), ronquera (Ortner cardiovocal), P2 intenso, levantamiento paraesternal y datos de falla derecha.',
        '<b>Eco</b>: velocidad de la regurgitación tricuspídea >3.4 m/s = probabilidad alta (2.9–3.4 intermedia).',
        '<b>Prueba de vasorreactividad</b> (solo HAP idiopática, hereditaria o por fármacos): positiva si la PAPm baja ≥10 mmHg hasta ≤40 mmHg con gasto igual o mayor → calcioantagonista a dosis altas (≈10% de los pacientes).',
        '<b>Fármacos</b>: bosentán (hepatotóxico y teratógeno: PFH cada mes) · sildenafil (nunca con nitratos; visión azul) · prostaciclinas como epoprostenol IV (rubor, dolor mandibular, diarrea).',
        '<b>Grupo 4 (HPTEC)</b>: el gammagrama V/Q es el estudio de tamizaje; la endarterectomía pulmonar es curativa, con anticoagulación de por vida.'
      ],
      ojo: [
        'RVP: tu guía usa ≥3 UW; la ESC/ERS 2022 la bajó a >2 UW.',
        'Tu guía dice “calcioantagonistas de primera línea”: solo en los que responden a la prueba de vasorreactividad (≈10%); en los demás, el tratamiento es con fármacos específicos (antagonista de endotelina + inhibidor de PDE-5).'
      ],
      cards: [
        ['Vasorreactividad positiva', 'PAPm baja ≥10 mmHg hasta ≤40 con gasto igual o mayor → calcioantagonista'],
        ['Bosentán: vigilancia', 'PFH cada mes (hepatotóxico) y anticoncepción (teratógeno)'],
        ['Sildenafil: contraindicación', 'Nitratos (hipotensión grave)'],
        ['HPTEC: estudio de tamizaje', 'Gammagrama V/Q'],
        ['HP precapilar', 'PAPm >20, PCP ≤15 y RVP >2 UW']
      ] }
  },

  // Chuleta de lectura de ECG y arritmias de tu guía: se muestra en el Taller de electros
  chuletas: {
    ecg: { src: SRC, title: 'Chuleta de tu guía', html: `
<ul>
<li><b>Papel</b>: cuadrito = 40 ms; cuadro grande = 200 ms. <b>FC</b>: 300 entre los cuadros grandes de R a R (300-150-100-75-60-50) o 1500 entre los cuadritos.</li>
<li><b>Ritmo sinusal</b>: P positiva en II, III y aVF (negativa en aVR), una P antes de cada QRS y un QRS después de cada P.</li>
<li><b>Eje</b> con DI y aVF: ambos + normal · DI + y aVF − izquierda (si DII también es −, menor de −30°) · DI − y aVF + derecha · ambos − extremo.</li>
<li><b>Intervalos</b>: PR 120–200 ms (largo en BAV, corto en WPW) · QRS <120 ms · QTc normal hasta ~440 ms (largo con ↓K, ↓Ca, ↓Mg, fármacos).</li>
<li><b>Aurículas</b>: P pulmonar >2.5 mm en DII (AD) · P mitral ≥120 ms y mellada (AI).</li>
<li><b>Ramas</b>: BRI = QS o rS en V1 (“W”) y R ancha mellada en I, V5–V6 (“M”) · BRD = rSR′ en V1 (“M”) y S ancha en I, V5–V6 (“W”). Truco: Wi<b>LL</b>ia<b>M</b> y Ma<b>RR</b>o<b>W</b>.</li>
<li><b>Hipertrofia</b>: HVI = S en V1 + R en V5 o V6 ≥35 mm · HVD = eje a la derecha + R >7 mm en V1.</li>
<li><b>Bloqueos AV</b>: si la R está lejos de la P → 1er grado · más lejos, más lejos, se cae → Wenckebach · algunas P no pasan (PR fijo) → Mobitz II · P y QRS no se hablan → 3er grado.</li>
<li><b>Marcapasos</b>: disfunción sinusal o Mobitz I <b>con</b> síntomas; Mobitz II y BAV completo aunque no haya síntomas.</li>
<li><b>QRS ancho = ventricular</b> hasta demostrar lo contrario; a favor de TV: cardiopatía estructural o infarto previo, disociación AV, latidos de fusión o captura, QRS >160 ms.</li>
<li><b>Torsade de pointes</b>: magnesio IV, corrige K y Mg, suspende lo que alarga el QT; si recurre, sube la FC (isoproterenol o marcapasos).</li>
</ul>` }
  },

  questions: [
    q('scc', { id: 'scc-g01', dif: 1,
      stem: 'Hombre de 64 años con angina que aparece al caminar una o dos cuadras en plano y le obliga a detenerse. ¿Qué clase de la Sociedad Cardiovascular Canadiense tiene?',
      opts: ['Clase I', 'Clase II', 'Clase III', 'Clase IV', 'No aplica: es angina inestable'],
      ans: 2,
      exp: 'Clase III: angina con poca actividad, como caminar una o dos cuadras, con limitación marcada. La II aparece con actividad ordinaria (escaleras rápido) y la IV en reposo.',
      why: ['Solo con esfuerzo extenuante.', 'Con actividad ordinaria, limitación leve.', '', 'Sería angina con cualquier actividad o en reposo.', 'Es estable: predecible con el mismo esfuerzo.'] }),
    q('scc', { id: 'scc-g02', dif: 2,
      stem: 'Durante una prueba de esfuerzo, un hombre de 58 años presenta infradesnivel del ST de 2.5 mm en 6 derivaciones a los 3 minutos y su PAS baja 15 mmHg. ¿Qué sigue?',
      opts: ['Repetir la prueba en 6 meses', 'Coronariografía invasiva', 'Agregar ranolazina y observar', 'Holter de 24 h', 'Angio-TC coronaria'],
      ans: 1,
      exp: 'Es una prueba de alto riesgo: infradesnivel ≥2 mm, a baja carga, en ≥5 derivaciones y caída de la PAS. Sugiere enfermedad de tronco o de tres vasos: va directo a coronariografía.',
      why: ['Es de alto riesgo: no se espera.', '', 'No resuelve el riesgo anatómico.', 'No aporta para isquemia de esfuerzo.', 'Ya tiene una prueba funcional de alto riesgo; necesita anatomía invasiva para revascularizar.'] }),
    q('scc', { id: 'scc-g03', dif: 2,
      stem: 'En la coronariografía, una lesión intermedia (60%) de la descendente anterior tiene una FFR de 0.72 con adenosina. ¿Cómo se interpreta?',
      opts: ['No significativa: solo tratamiento médico', 'Significativa: está indicado revascularizarla', 'Es un artefacto por la adenosina', 'Indica espasmo coronario', 'Obliga a cirugía de revascularización'],
      ans: 1,
      exp: 'Una FFR ≤0.80 indica que la estenosis limita el flujo de forma importante: se revasculariza (casi siempre con ICP). La FFR guía la decisión mejor que el porcentaje visual.',
      why: ['El corte es 0.80; 0.72 está por debajo.', '', 'La adenosina se usa justo para medirla.', 'La FFR no evalúa espasmo.', 'Una sola lesión de la DA se trata con ICP; la cirugía es para enfermedad más extensa.'] }),
    q('scc', { id: 'scc-g04', dif: 3,
      stem: 'Mujer de 61 años con angina estable que va a hacerse una prueba de esfuerzo diagnóstica. Toma metoprolol y amlodipino. ¿Qué le indicas?',
      opts: ['Suspender ambos 48 h antes si es seguro', 'Duplicar el metoprolol el día de la prueba', 'Agregar nitrato de acción prolongada', 'Hacer la prueba sin cambios', 'Cambiar a una prueba con dipiridamol bajo betabloqueo'],
      ans: 0,
      exp: 'Para una prueba diagnóstica se suspenden betabloqueadores y calcioantagonistas unas 48 h antes (si es seguro): frenan la FC y pueden ocultar la isquemia y no dejar llegar al 85% de la FC máxima.',
      why: ['', 'Haría la prueba aún menos sensible.', 'También ocultaría la isquemia.', 'Podría no alcanzar la FC meta y salir falsamente negativa.', 'No hay razón para cambiar de prueba; basta con suspender.'] }),

    q('sca', { id: 'sca-g01', dif: 2,
      stem: 'Hombre de 70 años con neumonía, Hb 6.8 g/dL y FC 128. Troponina de alta sensibilidad elevada con curva de ascenso, sin dolor, con infradesnivel difuso del ST. La coronariografía previa era normal. ¿Qué tipo de infarto es?',
      opts: ['Tipo 1', 'Tipo 2', 'Tipo 3', 'Tipo 4a', 'Tipo 5'],
      ans: 1,
      exp: 'Tipo 2: necrosis por desequilibrio entre aporte y demanda (anemia grave y taquicardia), sin rotura de placa. Se trata la causa; no se lleva a ICP urgente de rutina.',
      why: ['Requiere rotura de placa con trombo.', '', 'Es la muerte súbita antes de tener biomarcadores.', 'Es el asociado a ICP.', 'Es el asociado a cirugía de revascularización.'] }),
    q('sca', { id: 'sca-g02', dif: 2,
      stem: 'IAMCEST inferior. TA 78/50, yugulares ingurgitadas y campos pulmonares limpios. Elevación del ST en V4R. ¿Qué haces primero?',
      opts: ['Nitroglicerina sublingual', 'Furosemida IV', 'Bolo de cristaloide IV', 'Morfina IV', 'Metoprolol IV'],
      ans: 2,
      exp: 'Es un infarto del VD: el ventrículo depende de la precarga. Se dan líquidos IV mientras se reperfunde; los nitratos, diuréticos y morfina bajan la precarga y empeoran la hipotensión.',
      why: ['Baja la precarga: hipotensión grave.', 'También baja la precarga.', '', 'Venodilata y baja la presión.', 'Contraindicado en hipotensión.'] }),
    q('sca', { id: 'sca-g03', dif: 2,
      stem: 'IAMCEST anterior en un hospital sin hemodinamia; recibió tenecteplasa. A los 90 minutos sigue con dolor y el ST bajó solo 20%. ¿Qué sigue?',
      opts: ['Segunda dosis de tenecteplasa', 'Observar 24 h y coronariografía electiva', 'Traslado para ICP de rescate', 'Agregar un inhibidor GP IIb/IIIa y esperar', 'Cirugía de revascularización urgente'],
      ans: 2,
      exp: 'Fibrinólisis fallida (el ST no bajó ≥50% a los 60–90 min y persiste el dolor) → ICP de rescate inmediata. No se repite el fibrinolítico.',
      why: ['No mejora la reperfusión y aumenta el sangrado.', 'Es para una fibrinólisis exitosa (2–24 h).', '', 'No sustituye la reperfusión mecánica.', 'No es el siguiente paso de rutina.'] }),
    q('sca', { id: 'sca-g04', dif: 1,
      stem: '¿Cuál es el primer biomarcador que se eleva tras un infarto, aunque ya no se usa por ser inespecífico?',
      opts: ['Troponina I', 'CK-MB', 'Mioglobina', 'LDH', 'BNP'],
      ans: 2,
      exp: 'La mioglobina sube en 1–3 h, pero también sube con cualquier daño muscular. Hoy se usa la troponina de alta sensibilidad, que es igual de temprana con los protocolos 0/1 h y mucho más específica.',
      why: ['Sube después, pero es la que se usa.', 'Sube a las 4–6 h; sirve para reinfarto.', '', 'Es tardía.', 'No es un marcador de necrosis.'] }),

    q('aortica', { id: 'aortica-g01', dif: 2,
      stem: 'Hombre de 80 años con soplo sistólico rudo en el foco aórtico. En la espiración el S2 se escucha desdoblado y en la inspiración se oye único. ¿Qué indica?',
      opts: ['Desdoblamiento fisiológico', 'Desdoblamiento fijo por CIA', 'Desdoblamiento paradójico: estenosis aórtica grave', 'Desdoblamiento amplio por bloqueo de rama derecha', 'Hipertensión pulmonar'],
      ans: 2,
      exp: 'El cierre aórtico se retrasa tanto que queda después del pulmonar: se desdobla en espiración y se junta en inspiración. Pasa en la estenosis aórtica grave y en el bloqueo de rama izquierda.',
      why: ['El fisiológico se desdobla en inspiración.', 'El fijo no cambia con la respiración.', '', 'El amplio se desdobla en ambas fases y más en inspiración.', 'Da un P2 fuerte, no un desdoblamiento paradójico.'] }),
    q('aortica', { id: 'aortica-g02', dif: 1,
      stem: 'Un soplo sistólico fuerte en el foco aórtico se acompaña de frémito palpable, pero no se oye si el estetoscopio no toca el tórax. ¿De qué grado es?',
      opts: ['Grado 2', 'Grado 3', 'Grado 4', 'Grado 6', 'No se gradúa si hay frémito'],
      ans: 2,
      exp: 'Desde el grado 4 hay frémito. El 5 se oye con el borde del estetoscopio y el 6 sin tocar el tórax.',
      why: ['Es suave, sin frémito.', 'Moderado, sin frémito.', '', 'El 6 se oye sin tocar el tórax.', 'El frémito es justo lo que define el 4 o más.'] }),
    q('aortica', { id: 'aortica-g03', dif: 2,
      stem: 'Hombre de 55 años con prótesis aórtica mecánica, en ritmo sinusal, FEVI normal y sin embolias previas. ¿Qué anticoagulación le corresponde?',
      opts: ['Apixabán de por vida', 'Warfarina con INR meta 2.5', 'Warfarina con INR meta 3.5', 'Aspirina sola', 'Warfarina solo 3 meses'],
      ans: 1,
      exp: 'Prótesis mecánica aórtica sin factores de riesgo: warfarina de por vida con INR 2.5 (2–3). Con FA, embolia previa, FEVI baja o prótesis mitral, el INR meta es 3. Los ACOD están contraindicados en prótesis mecánicas.',
      why: ['Los ACOD están contraindicados en prótesis mecánicas.', '', 'Es demasiado alto para una prótesis aórtica sin factores de riesgo.', 'No basta para una prótesis mecánica.', 'Así se maneja una bioprótesis, no una mecánica.'] }),
    q('aortica', { id: 'aortica-g04', dif: 2,
      stem: 'Hombre de 50 años con insuficiencia aórtica. Al tomar la presión, la sistólica poplítea es 75 mmHg más alta que la braquial. ¿Cómo se llama este signo?',
      opts: ['Signo de Quincke', 'Signo de Hill', 'Signo de de Musset', 'Soplo de Austin Flint', 'Pulso de Corrigan'],
      ans: 1,
      exp: 'Signo de Hill: la PAS poplítea supera a la braquial por más de 60 mmHg; sugiere insuficiencia aórtica grave.',
      why: ['Es el pulso capilar en el lecho ungueal.', '', 'Es el cabeceo con cada latido.', 'Es un retumbo diastólico en el ápex.', 'Es el pulso en martillo de agua.'] }),

    q('mitral', { id: 'mitral-g01', dif: 1,
      stem: 'Mujer de 40 años con estenosis mitral reumática y aurícula izquierda muy dilatada que nota la voz ronca desde hace meses. ¿Cómo se llama?',
      opts: ['Síndrome de Ortner', 'Síndrome de Lutembacher', 'Síndrome de Eisenmenger', 'Síndrome de Horner', 'Síndrome de Dressler'],
      ans: 0,
      exp: 'Síndrome de Ortner (cardiovocal): la AI grande o la arteria pulmonar dilatada comprimen el nervio laríngeo recurrente izquierdo.',
      why: ['', 'Es EM + CIA.', 'Es la inversión del cortocircuito por HP.', 'Ptosis, miosis y anhidrosis por lesión simpática.', 'Es la pericarditis tardía posinfarto.'] }),
    q('mitral', { id: 'mitral-g02', dif: 2,
      stem: 'Mujer de 34 años con estenosis mitral grave sintomática; el eco transesofágico muestra un trombo en la orejuela izquierda. ¿Qué tratamiento definitivo procede?',
      opts: ['Valvuloplastia percutánea con balón', 'Cirugía de la válvula mitral', 'Solo betabloqueador', 'Rivaroxabán y valvuloplastia en una semana', 'Clip mitral percutáneo'],
      ans: 1,
      exp: 'El trombo en la AI contraindica la valvuloplastia con balón (riesgo de embolia): va a cirugía, con anticoagulación con warfarina mientras tanto.',
      why: ['Contraindicada con trombo en la AI.', '', 'Solo controla la frecuencia; no resuelve la estenosis.', 'En EM reumática moderada-grave se usa warfarina, no ACOD.', 'Es para insuficiencia mitral, no para estenosis.'] }),
    q('mitral', { id: 'mitral-g03', dif: 2,
      stem: 'Mujer de 25 años con clic mesosistólico y soplo telesistólico en el ápex. ¿Qué pasa cuando se pone de pie?',
      opts: ['El clic se atrasa y el soplo se acorta', 'El clic se adelanta y el soplo se alarga', 'Desaparece el clic', 'No cambia', 'Aparece un chasquido de apertura'],
      ans: 1,
      exp: 'Al ponerse de pie (o con Valsalva) baja el volumen del VI y la válvula prolapsa antes: el clic se acerca al S1 y el soplo dura más. En cuclillas pasa lo contrario.',
      why: ['Eso pasa en cuclillas.', '', 'No desaparece; cambia de momento.', 'El prolapso cambia con la precarga.', 'Es propio de la estenosis mitral.'] }),

    q('tep', { id: 'tep-g01', dif: 2,
      stem: 'Mujer de 55 años con disnea súbita tras una cirugía de cadera. El eco muestra el VD dilatado con acinesia de la pared libre y ápex que se contrae bien. ¿Cómo se llama este hallazgo?',
      opts: ['Signo de Westermark', 'Signo de McConnell', 'Joroba de Hampton', 'Signo de Kussmaul', 'Patrón S1Q3T3'],
      ans: 1,
      exp: 'Signo de McConnell: acinesia de la pared libre del VD con el ápex respetado; es muy específico de TEP agudo.',
      why: ['Es la oligohemia en la radiografía.', '', 'Es la opacidad en cuña en la radiografía.', 'Es la yugular que sube en inspiración.', 'Es un hallazgo del ECG, no del eco.'] }),
    q('tep', { id: 'tep-g02', dif: 2,
      stem: 'Hombre con TEP masivo (TA 72/40) que tuvo un EVC hemorrágico hace 4 meses. ¿Qué tratamiento de reperfusión eliges?',
      opts: ['Alteplasa sistémica a dosis completa', 'Embolectomía quirúrgica o tratamiento dirigido por catéter', 'Solo heparina no fraccionada', 'Filtro de vena cava como único tratamiento', 'Rivaroxabán VO'],
      ans: 1,
      exp: 'Necesita reperfusión, pero el EVC hemorrágico previo es una contraindicación absoluta de la trombólisis sistémica. La alternativa es la embolectomía quirúrgica o la trombectomía o trombólisis por catéter.',
      why: ['Contraindicada por el EVC hemorrágico.', '', 'Insuficiente para un TEP de alto riesgo.', 'No reperfunde.', 'No sirve en un paciente inestable.'] }),
    q('tep', { id: 'tep-g03', dif: 1,
      stem: '¿Qué gasometría esperas en un TEP agudo sin choque?',
      opts: ['Acidosis respiratoria con hipercapnia', 'Hipoxemia con alcalosis respiratoria y gradiente A-a aumentado', 'Gasometría siempre normal', 'Acidosis metabólica con anión gap alto', 'Alcalosis metabólica'],
      ans: 1,
      exp: 'La alteración V/Q da hipoxemia con gradiente A-a aumentado, y la taquipnea baja el CO₂: alcalosis respiratoria. Una gasometría normal no descarta TEP.',
      why: ['Solo en el paciente agotado o en paro.', '', 'Puede serlo, pero no es lo típico ni lo descarta.', 'Aparece con choque e hipoperfusión.', 'No tiene relación con el TEP.'] }),

    q('hp', { id: 'hp-g01', dif: 2,
      stem: 'Mujer de 32 años con HAP idiopática. En el cateterismo derecho, con óxido nítrico inhalado, la PAPm baja de 52 a 36 mmHg y el gasto cardiaco aumenta. ¿Qué tratamiento oral inicias?',
      opts: ['Bosentán', 'Nifedipino o diltiazem a dosis altas', 'Sildenafil', 'Warfarina sola', 'Furosemida sola'],
      ans: 1,
      exp: 'Prueba de vasorreactividad positiva (baja ≥10 mmHg hasta ≤40 con gasto igual o mayor): se trata con calcioantagonista a dosis altas. Solo ocurre en ≈10% de los pacientes y hay que confirmar la respuesta en 3–6 meses.',
      why: ['Se usa si la prueba es negativa.', '', 'También es para los no respondedores.', 'No trata la vasculopatía.', 'Solo trata la sobrecarga de volumen.'] }),
    q('hp', { id: 'hp-g02', dif: 1,
      stem: 'Hombre con HAP tratado con sildenafil que llega a urgencias con dolor torácico. ¿Qué fármaco está contraindicado?',
      opts: ['Aspirina', 'Nitroglicerina', 'Morfina', 'Oxígeno', 'Heparina'],
      ans: 1,
      exp: 'Los inhibidores de PDE-5 con nitratos causan hipotensión grave y potencialmente mortal.',
      why: ['No interactúa.', '', 'Se puede usar con cuidado.', 'Está indicado si hay hipoxemia.', 'No interactúa.'] }),
    q('hp', { id: 'hp-g03', dif: 2,
      stem: 'Mujer con HAP que inicia bosentán. ¿Qué vigilancia requiere?',
      opts: ['Creatinina semanal', 'Pruebas de función hepática cada mes y anticoncepción eficaz', 'Ecocardiograma semanal', 'Niveles séricos del fármaco', 'Biometría hemática diaria'],
      ans: 1,
      exp: 'El bosentán es hepatotóxico (PFH cada mes) y teratógeno (anticoncepción eficaz y prueba de embarazo). Además interactúa con anticonceptivos hormonales, que pierden eficacia.',
      why: ['No es nefrotóxico.', '', 'No es necesario.', 'No se monitorizan.', 'Puede bajar algo la Hb, pero no requiere control diario.'] })
  ]
};
