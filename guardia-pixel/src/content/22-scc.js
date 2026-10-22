// Tema 13 · Síndromes coronarios crónicos (Cardiología, semana 1)
const T = { topic: 'scc', subj: 'cardio' };
const q = (o) => ({ ...T, ...o });

export default {
  lessons: {
    scc: {
      hook: 'Angina estable: decide qué estudio pedir según la probabilidad, qué fármacos mejoran el pronóstico y cuáles solo quitan síntomas, y cuándo revascularizar.',
      nn: [['ischemic-heart-disease', 'Coronary Artery Disease']],
      yt: 'stable angina',
      sections: [
        { h: 'Clínica', html: `
<ul>
<li><b>Angina típica</b> (3 de 3): molestia retroesternal característica, desencadenada por esfuerzo o estrés emocional, y que cede con reposo o nitroglicerina en minutos. <b>Atípica</b>: 2 de 3. <b>No anginoso</b>: 0–1.</li>
<li>Clasificación de la Sociedad Canadiense (CCS) I–IV según el esfuerzo que la provoca.</li>
<li><b>Angina vasoespástica</b> (Prinzmetal): en reposo, de madrugada, con elevación transitoria del ST; fumadores, cocaína. Tratamiento: calcioantagonista y nitratos; evita betabloqueadores no selectivos.</li>
<li><b>Angina microvascular</b> (INOCA): síntomas con coronarias sin obstrucción; más en mujeres.</li>
</ul>` },
        { h: 'Estudios (ESC 2024)', html: `
<ul>
<li>Base: ECG en reposo, ecocardiograma (FEVI, alteraciones de movilidad, valvulopatía), lípidos, glucosa o A1c, creatinina, BH.</li>
<li>Se estima la <b>probabilidad clínica</b> con edad, sexo, tipo de síntoma y factores de riesgo (± calcio coronario).</li>
<li>Muy baja (≤5%): no se necesitan más pruebas. <b>Baja a moderada (&gt;5–50%)</b>: <b>angio-TC coronaria</b>. <b>Moderada a alta (&gt;15–85%)</b>: imagen funcional (eco de estrés, SPECT, RM de estrés). <b>Muy alta</b> o datos de alto riesgo: coronariografía invasiva.</li>
<li>La prueba de esfuerzo con ECG sola tiene menor sensibilidad; no sirve si el ECG basal no es interpretable (BRIHH, marcapasos, WPW, digoxina, infradesnivel ≥1 mm): usa imagen.</li>
<li>Contraindicaciones de la prueba de esfuerzo: SCA reciente, estenosis aórtica grave sintomática, IC descompensada, arritmias no controladas, TEP agudo, disección aórtica.</li>
</ul>` },
        { h: 'Tratamiento', html: `
<p><b>Mejoran el pronóstico</b> (prevención de eventos):</p>
<ul>
<li>Aspirina 75–100 mg (clopidogrel si no la tolera).</li>
<li>Estatina de alta intensidad: LDL &lt;55 mg/dL y ↓ ≥50%; ezetimiba e iPCSK9 si no llega.</li>
<li>IECA o ARA-II si hay HTA, DM, IC, FEVI ≤40% o ERC.</li>
<li>Colchicina 0.5 mg/día puede considerarse (LoDoCo2).</li>
<li>Dejar de fumar, ejercicio, rehabilitación, vacuna de influenza.</li>
</ul>
<p><b>Controlan síntomas</b> (antianginosos):</p>
<ul>
<li><b>Primera línea</b>: betabloqueador y/o calcioantagonista; nitroglicerina SL de rescate (nunca con sildenafil o tadalafil).</li>
<li>Combinar betabloqueador + dihidropiridina (amlodipino); evitar betabloqueador + verapamilo o diltiazem (bradicardia y bloqueo).</li>
<li>Segunda línea: nitratos de acción prolongada, ranolazina, ivabradina (ritmo sinusal con FC &gt;70), trimetazidina, nicorandil.</li>
</ul>` },
        { h: 'Revascularización', html: `
<ul>
<li>Para <b>síntomas</b> que persisten pese a tratamiento médico óptimo.</li>
<li>Para <b>pronóstico</b>: lesión del tronco &gt;50%, enfermedad de 3 vasos o DA proximal con FEVI ≤35%, isquemia extensa.</li>
<li><b>ISCHEMIA (2020)</b>: en enfermedad estable sin lesión de tronco, la revascularización de rutina no redujo muerte ni IAM frente al tratamiento médico óptimo, aunque sí mejoró la angina.</li>
<li><b>Cirugía de revascularización (CABG)</b> preferida en multivaso con DM (FREEDOM), tronco con anatomía compleja y FEVI baja. <b>ICP</b> en enfermedad menos compleja.</li>
</ul>` }
      ],
      mnemo: { t: 'Pronóstico: “A-E-I” · Síntomas: “B-C-N”', d: 'Lo que salva vidas: Aspirina, Estatina, IECA (si hay indicación). Lo que quita la angina: Betabloqueador, Calcioantagonista, Nitratos.' },
      pearl: 'La nitroglicerina, la ranolazina y la ivabradina no reducen eventos: si te preguntan qué mejora el pronóstico, la respuesta es estatina (o aspirina, o IECA si hay indicación).',
      trap: 'Betabloqueador + verapamilo o diltiazem: bradicardia y bloqueo AV. Si necesitas dos antianginosos, combina el betabloqueador con amlodipino.',
      guide: [
        'Estudio inicial: la ESC 2024 favorece angio-TC coronaria con probabilidad baja-moderada y prueba de imagen funcional con probabilidad moderada-alta. Libros previos ponían la prueba de esfuerzo con ECG como primer estudio; la ESC ya no.'
      ],
      refs: [
        'Vrints C, et al. 2024 ESC Guidelines for the management of chronic coronary syndromes. Eur Heart J 2024.',
        'Maron DJ, et al. ISCHEMIA. N Engl J Med 2020.'
      ]
    }
  },

  cards: [
    ['Angina típica', 'Dolor retroesternal + desencadenado por esfuerzo/estrés + cede con reposo o nitroglicerina'],
    ['Fármacos que mejoran el pronóstico en SCC', 'Aspirina, estatina de alta intensidad, IECA/ARA-II si hay indicación'],
    ['Antianginosos de primera línea', 'Betabloqueador y/o calcioantagonista'],
    ['Combinación a evitar', 'Betabloqueador + verapamilo o diltiazem'],
    ['Nitratos: contraindicación clásica', 'Sildenafil (24 h) o tadalafil (48 h)'],
    ['ECG basal no interpretable para prueba de esfuerzo', 'BRIHH, marcapasos, WPW, digoxina, infradesnivel ≥1 mm → prueba con imagen'],
    ['Probabilidad baja-moderada (ESC 2024)', 'Angio-TC coronaria'],
    ['Angina en reposo de madrugada con elevación transitoria del ST', 'Vasoespástica (Prinzmetal): calcioantagonista + nitratos'],
    ['Ivabradina', 'Bloquea la corriente If del nodo sinusal; requiere ritmo sinusal'],
    ['Resultado de ISCHEMIA', 'Revascularizar de rutina no reduce muerte/IAM en estables; mejora la angina'],
    ['Multivaso + DM', 'Cirugía de revascularización (FREEDOM)']
  ],

  questions: [
    q({ id: 'scc-01', dif: 1,
      stem: 'Hombre de 60 años con opresión retroesternal al subir dos pisos, que cede con 3 minutos de reposo. ¿Cómo se clasifica el dolor?',
      opts: ['No anginoso', 'Angina atípica', 'Angina típica', 'Angina inestable', 'Dolor pleurítico'],
      ans: 2,
      exp: 'Cumple los 3 criterios: localización retroesternal, desencadenado por esfuerzo y alivio con reposo. Al ser estable y predecible, es angina estable típica.',
      why: ['Cumple los 3 criterios.', 'Atípica sería con 2 de 3.', '', 'La inestable es de reposo, nueva o en aumento.', 'No cambia con la respiración.'],
      ref: 'ESC 2024 SCC' }),

    q({ id: 'scc-02', dif: 2,
      stem: 'Mujer de 58 años con angina típica, ECG normal y probabilidad clínica moderada (≈25%). Según la ESC 2024, ¿qué estudio inicial prefieres?',
      opts: ['Coronariografía invasiva directa', 'Angio-TC coronaria', 'Ninguno; tratamiento empírico', 'Dímero D', 'Troponinas seriadas'],
      ans: 1,
      exp: 'Con probabilidad baja a moderada, la angio-TC coronaria tiene muy buen valor predictivo negativo y permite iniciar prevención si hay placa. Con probabilidad moderada-alta también es válida una prueba funcional de imagen.',
      why: ['Se reserva para probabilidad muy alta o alto riesgo.', '', 'Con probabilidad moderada se estudia.', 'No tiene relación.', 'Son para SCA, no para angina estable.'],
      ref: 'ESC 2024 SCC' }),

    q({ id: 'scc-03', dif: 2,
      stem: 'Hombre de 66 años con angina de esfuerzo y bloqueo de rama izquierda en el ECG basal. ¿Qué prueba funcional eliges?',
      opts: ['Prueba de esfuerzo con ECG', 'Prueba de imagen (eco de estrés o SPECT con vasodilatador)', 'Holter de 24 h', 'Tilt test', 'Ninguna'],
      ans: 1,
      exp: 'Con BRIHH el ST basal no se puede interpretar durante el esfuerzo. Se usa imagen; con BRIHH se prefiere estrés farmacológico vasodilatador en SPECT (el ejercicio da defectos septales falsos).',
      why: ['El ECG basal no es interpretable.', '', 'No diagnostica isquemia de esfuerzo.', 'Es para síncope.', 'Necesita estudio.'],
      ref: 'ESC 2024 SCC' }),

    q({ id: 'scc-04', dif: 1,
      stem: 'Hombre con angina estable que ya recibe aspirina y estatina. Persisten los síntomas. ¿Antianginoso de primera línea?',
      opts: ['Ranolazina', 'Betabloqueador o calcioantagonista', 'Ivabradina', 'Trimetazidina', 'Nitrato de acción prolongada'],
      ans: 1,
      exp: 'Betabloqueadores y calcioantagonistas son la primera línea para controlar la angina. El resto se agrega si no basta o hay contraindicaciones.',
      why: ['Segunda línea.', '', 'Segunda línea; requiere ritmo sinusal.', 'Segunda línea.', 'Segunda línea.'],
      ref: 'ESC 2024 SCC' }),

    q({ id: 'scc-05', dif: 2,
      stem: 'Paciente con angina estable en metoprolol. Para agregar un segundo antianginoso, ¿cuál evitas?',
      opts: ['Amlodipino', 'Verapamilo', 'Nitrato de acción prolongada', 'Ranolazina', 'Ivabradina'],
      ans: 1,
      exp: 'Verapamilo y diltiazem (calcioantagonistas no dihidropiridínicos) + betabloqueador causan bradicardia grave, bloqueo AV y depresión de la contractilidad. Con betabloqueador se combina una dihidropiridina.',
      why: ['Es la combinación recomendada.', '', 'Combinable.', 'Combinable.', 'Combinable con precaución de FC.'],
      ref: 'ESC 2024 SCC' }),

    q({ id: 'scc-06', dif: 2,
      stem: 'Mujer de 42 años, fumadora, con dolor torácico en reposo a las 4 a. m. que dura 10 minutos. Durante un episodio, el Holter muestra elevación transitoria del ST que se normaliza. Coronariografía sin obstrucciones. ¿Tratamiento?',
      opts: ['Betabloqueador no selectivo', 'Calcioantagonista + nitratos y dejar de fumar', 'Doble antiagregación por 12 meses', 'ICP', 'Fibrinólisis'],
      ans: 1,
      exp: 'Angina vasoespástica (Prinzmetal). Los calcioantagonistas y nitratos previenen el espasmo; se suspende el tabaco (y cocaína). Los betabloqueadores no selectivos pueden empeorarlo (vasoconstricción alfa sin oposición).',
      why: ['Pueden empeorar el espasmo.', '', 'No hay placa ni stent.', 'No hay lesión obstructiva.', 'No hay trombo.'],
      ref: 'ESC 2024 SCC' }),

    q({ id: 'scc-07', dif: 1,
      stem: 'Hombre con angina estable que usa nitroglicerina SL de rescate. Pregunta si puede tomar sildenafil. ¿Qué le dices?',
      opts: ['No hay problema', 'No debe usar nitratos dentro de las 24 h siguientes al sildenafil (48 h con tadalafil): riesgo de hipotensión grave', 'Solo si toma aspirina', 'Solo si toma betabloqueador', 'Puede tomarlos juntos a mitad de dosis'],
      ans: 1,
      exp: 'Los inhibidores de la PDE5 potencian el efecto vasodilatador de los nitratos (más GMPc): hipotensión profunda, síncope, isquemia.',
      why: ['La combinación es peligrosa.', '', 'No tiene relación.', 'No tiene relación.', 'No es seguro.'],
      ref: 'ESC 2024 SCC' }),

    q({ id: 'scc-08', dif: 2,
      stem: 'Hombre de 64 años con angina estable leve, controlada con tratamiento médico óptimo. Angio-TC: estenosis de 70% en la circunfleja media, sin lesión de tronco; FEVI normal. ¿Qué indica la evidencia actual?',
      opts: ['ICP inmediata para reducir mortalidad', 'Continuar tratamiento médico óptimo; revascularizar si los síntomas no se controlan', 'Cirugía de revascularización urgente', 'Suspender la estatina', 'Fibrinólisis'],
      ans: 1,
      exp: 'ISCHEMIA: en enfermedad estable sin lesión de tronco, revascularizar de rutina no redujo muerte ni IAM. Se revasculariza por síntomas refractarios o anatomía de alto riesgo.',
      why: ['No reduce mortalidad en este escenario.', '', 'No hay indicación urgente.', 'La estatina es pilar del pronóstico.', 'No es un SCA.'],
      ref: 'ISCHEMIA, NEJM 2020' }),

    q({ id: 'scc-09', dif: 2,
      stem: 'Hombre de 60 años con DM2 y enfermedad de 3 vasos con FEVI de 45%. ¿Qué tipo de revascularización se prefiere?',
      opts: ['ICP con balón sin stent', 'Cirugía de revascularización coronaria (CABG)', 'Solo tratamiento médico', 'Trombólisis', 'ICP solo de la lesión más grave'],
      ans: 1,
      exp: 'En diabéticos con enfermedad multivaso, la cirugía de revascularización redujo muerte e IAM frente a la ICP (FREEDOM).',
      why: ['Técnica obsoleta para esta anatomía.', '', 'Con 3 vasos y DM la cirugía tiene beneficio.', 'No es un SCA.', 'Revascularización incompleta.'],
      ref: 'FREEDOM, NEJM 2012 · ESC 2024' }),

    q({ id: 'scc-10', dif: 1,
      stem: '¿Cuál es el mecanismo de la ivabradina y su requisito?',
      opts: ['Bloquea canales de calcio; ninguno', 'Inhibe la corriente If del nodo sinusal y baja la FC; requiere ritmo sinusal', 'Bloquea receptores β1; FC >50', 'Inhibe la corriente tardía de sodio; ninguno', 'Es un nitrato; evitar sildenafil'],
      ans: 1,
      exp: 'La ivabradina reduce la FC sin efecto inotrópico negativo al bloquear la corriente “funny” (If). No sirve en fibrilación auricular. Se usa en angina con FC >70 y en IC con FE reducida.',
      why: ['Es el mecanismo de los calcioantagonistas.', '', 'Es el de los betabloqueadores.', 'Es el de la ranolazina.', 'No es un nitrato.'],
      ref: 'ESC 2024 SCC' })
  ]
};
