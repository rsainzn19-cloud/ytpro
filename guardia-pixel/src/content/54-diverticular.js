// Tema 45 · Enfermedad diverticular (Gastroenterología, semana 11)
const T = { topic: 'diverticular', subj: 'gastro' };
const q = (o) => ({ ...T, ...o });
const SRC = { short: 'De tu Guía Gastro', vs: 'tu guía', name: 'Guía Gastro · Ximena Cors Cepeda (EMIS 5)', url: 'https://docs.google.com/document/d/16oAVd4UCRwVvWLOsO8DuHlzTN2RKAGSIKTtHIAqqnq4/edit' };

export default {
  lessons: {
    diverticular: {
      hook: 'Los divertículos sangran (sangrado indoloro, abundante) o se inflaman (diverticulitis: dolor en fosa iliaca izquierda, fiebre y leucocitosis). La diverticulitis se confirma con TC, nunca con colonoscopia en la fase aguda.',
      nn: [], yt: 'diverticulitis diverticular bleeding Hinchey',
      video: [
        { ch: 'Diverticulosis', sc: [
          { v: { k: 'title', t: 'Enfermedad diverticular', s: 'Semana 11 · Gastroenterología' },
            say: 'Semana once: la enfermedad diverticular. Tener divertículos es muy común después de los sesenta y casi nunca da síntomas. Lo que importa son sus dos complicaciones, que se comportan al revés: la diverticulitis duele y no sangra, y el sangrado diverticular sangra y no duele.' },
          { v: { k: 'case', t: 'Dolor en fosa iliaca izquierda', p: { name: 'Don Julio', age: 64, sex: 'H', skin: '#C98B62', hair: '#9A9A9A', gown: '#5BA7E0' }, text: 'Dos días con dolor en fosa iliaca izquierda, náusea y fiebre. Dolor a la palpación profunda sin rebote.', vit: { T: '38.3', FC: '98', Leucos: '15 000', PCR: '120' } },
            say: 'Don Julio tiene sesenta y cuatro años y dos días con dolor en la fosa iliaca izquierda, náusea y fiebre de treinta y ocho punto tres. Le duele a la palpación profunda pero no tiene rebote. Sus leucocitos son de quince mil.' },
          { v: { k: 'list', t: 'Por qué aparecen', items: ['Divertículos falsos: mucosa y submucosa', 'Presión alta dentro del colon', 'Salen donde entran los vasos', 'Sigmoides en occidente', 'Factores: poca fibra, estreñimiento, obesidad, AINE'] },
            say: 'Son divertículos falsos: solo la mucosa y la submucosa se hernian por los puntos débiles donde los vasos atraviesan la pared, empujadas por la presión alta dentro del colon. En occidente predominan en el sigmoides. Los favorecen la dieta baja en fibra, el estreñimiento, la obesidad, el sedentarismo, el tabaco y los antiinflamatorios. Las semillas y las nueces no aumentan el riesgo.' }
        ] },
        { ch: 'Diverticulitis', sc: [
          { v: { k: 'list', t: 'Clínica', items: ['Dolor en fosa iliaca izquierda', 'Fiebre y leucocitosis', 'Cambio del hábito intestinal', 'Masa palpable', 'Disuria si toca la vejiga'] },
            say: 'La diverticulitis es la inflamación por microperforación de un divertículo: dolor en la fosa iliaca izquierda, fiebre, leucocitosis y cambio del hábito intestinal. Puede palparse una masa, y si la inflamación toca la vejiga, hay disuria.' },
          { v: { k: 'big', h: 'Estudio de elección', t: 'TC con contraste', s: 'Engrosamiento, grasa inflamada, absceso, aire libre. Nada de colonoscopia ni enema en fase aguda.' },
            say: 'El estudio de elección es la tomografía de abdomen y pelvis con contraste: muestra engrosamiento de la pared, grasa inflamada y complicaciones como absceso o aire libre. En la fase aguda no se hace colonoscopia ni enema, porque pueden perforar.' },
          { v: { k: 'list', t: 'Clasificación de Hinchey', items: ['I: absceso pericólico', 'II: absceso pélvico o a distancia', 'III: peritonitis purulenta', 'IV: peritonitis fecal'] },
            say: 'Las complicadas se clasifican con Hinchey: uno, absceso pericólico; dos, absceso pélvico o a distancia; tres, peritonitis purulenta; y cuatro, peritonitis fecal.' },
          { v: { k: 'vs', a: 'No complicada', b: 'Complicada', rows: [['Dónde', 'Casa si tolera la vía oral', 'Hospital'], ['Antibiótico', 'Selectivo: solo si hay riesgo', 'IV siempre'], ['Absceso mayor de 3 a 4 cm', '—', 'Drenaje percutáneo'], ['Peritonitis', '—', 'Cirugía: Hartmann o resección']] },
            say: 'La no complicada se trata en casa si tolera la vía oral, con dieta líquida y analgesia, y el antibiótico es selectivo: solo en inmunosuprimidos, ancianos frágiles, sepsis o datos de riesgo en la tomografía, con amoxicilina clavulanato. La complicada se hospitaliza con antibiótico intravenoso; un absceso de más de tres o cuatro centímetros se drena por vía percutánea; y la peritonitis purulenta o fecal va a cirugía.' },
          { v: { k: 'quiz', q: 'Don Julio: TC con absceso pericólico de 5 cm, estable. ¿Qué haces?', opts: ['Antibiótico oral en casa', 'Antibiótico IV + drenaje percutáneo', 'Colectomía de urgencia'], a: 1 },
            say: 'Pausa. La tomografía de don Julio muestra un absceso pericólico de cinco centímetros. Está estable. ¿Qué haces?',
            exp: 'Hospitalizar con antibiótico intravenoso y drenaje percutáneo guiado por imagen. Es Hinchey uno con absceso mayor de cuatro centímetros. La cirugía urgente queda para la peritonitis.' }
        ] },
        { ch: 'Sangrado diverticular', sc: [
          { v: { k: 'list', t: 'Sangrado diverticular', items: ['Causa #1 de sangrado bajo en adultos', 'Hematoquecia abundante e INDOLORA', 'Más en colon derecho', 'Cede solo en 80%'] },
            say: 'El sangrado diverticular es la causa más común de sangrado digestivo bajo en adultos: hematoquecia abundante y sin dolor, más del colon derecho, que cede solo en ochenta por ciento de los casos. Duele la diverticulitis; el sangrado, no.' },
          { v: { k: 'flow', t: 'Manejo', steps: ['Reanimar', 'Sangrado masivo: descartar fuente alta', 'Estable: colonoscopia tras preparación en 24 h', 'Inestable: angio-TC y embolización', 'Persiste: cirugía'] },
            say: 'Se reanima primero. Si el sangrado es masivo, se descarta una fuente alta con endoscopia, porque un sangrado alto rápido también puede salir rojo. Si está estable, colonoscopia en las primeras veinticuatro horas tras preparación, que diagnostica y puede poner clips. Si está inestable, angiotomografía y embolización. Y si persiste, cirugía.' },
          { v: { k: 'quiz', q: 'Mujer de 78 años con hematoquecia abundante sin dolor, PA 86/50 que no mejora con volumen. ¿Siguiente paso?', opts: ['Colonoscopia mañana tras preparación', 'Angio-TC para localizar y embolizar', 'Observar: cede sola'], a: 1 },
            say: 'Pausa. Mujer de setenta y ocho años con hematoquecia abundante sin dolor, presión de ochenta y seis sobre cincuenta que no mejora con volumen. ¿Qué sigue?',
            exp: 'Angiotomografía para localizar el sitio y embolizar. Inestable a pesar de la reanimación no puede esperar la preparación de una colonoscopia.' }
        ] },
        { ch: 'Después y cierre', sc: [
          { v: { k: 'list', t: 'Después de la diverticulitis', items: ['Colonoscopia a las 6 a 8 semanas', 'Descartar cáncer', 'Cirugía electiva individualizada', 'Fístula colovesical: neumaturia, fecaluria', 'Prevención: fibra, ejercicio, peso'] },
            say: 'Seis a ocho semanas después de una diverticulitis se hace colonoscopia si no tiene una reciente, porque un cáncer puede simularla. La cirugía electiva ya no se decide por número de episodios, sino por fístula, estenosis, recurrencias que afectan la calidad de vida o inmunosupresión. Una fístula colovesical da aire y heces en la orina e infecciones urinarias repetidas.' },
          { v: { k: 'list', t: 'Don Julio: final del caso', items: ['TC: absceso de 5 cm, Hinchey I', 'Drenaje percutáneo + antibiótico IV', 'Alta al día 5 con antibiótico oral', 'Colonoscopia a las 8 semanas: sin cáncer', 'Fibra y ejercicio'] },
            say: 'Don Julio tiene un absceso de cinco centímetros, Hinchey uno. Le colocan drenaje percutáneo y recibe antibiótico intravenoso. Se va al quinto día con antibiótico oral. A las ocho semanas, la colonoscopia no muestra cáncer.' },
          { v: { k: 'tip', kind: 'trap', t: 'Diverticulitis aguda: NO colonoscopia ni enema. TC con contraste; colonoscopia hasta 6 a 8 semanas después.' },
            say: 'La trampa de siempre: pedir colonoscopia en la diverticulitis aguda. Primero tomografía; la colonoscopia hasta seis a ocho semanas después.' },
          { v: { k: 'mnemo', t: 'Diverticulitis duele, sangrado no', d: 'Diverticulitis: TC, absceso >3–4 cm drenaje, peritonitis cirugía. Sangrado: indoloro, derecho; inestable → angio-TC.' },
            say: 'Llévate esto: la diverticulitis duele, el sangrado diverticular no. Ahora practica en el algoritmo del taller.' }
        ] }
      ],
      sections: [
        { h: 'Diverticulosis', html: `
<ul>
<li>Divertículos falsos (mucosa y submucosa) por presión intraluminal alta; sigmoides (occidente). Factores: edad, <b>dieta baja en fibra</b>, estreñimiento, obesidad, sedentarismo, tabaco, AINE.</li>
<li>Casi siempre asintomática; prevención: <b>fibra</b>, ejercicio, bajar de peso. Las semillas y nueces no aumentan el riesgo.</li>
</ul>` },
        { h: 'Sangrado diverticular', html: `
<ul>
<li>La <b>causa más común de sangrado digestivo bajo</b> en adultos: hematoquecia abundante e <b>indolora</b>; más en colon derecho; cede espontáneamente en ~80 %.</li>
<li>Manejo: reanimación; descartar fuente alta (si es masivo, endoscopia alta); <b>colonoscopia</b> tras preparación en 24 h (diagnóstica y terapéutica con clips). Si es masivo e inestable: <b>angio-TC</b> → embolización. Cirugía si persiste.</li>
</ul>` },
        { h: 'Diverticulitis', html: `
<ul>
<li>Microperforación inflamada: <b>dolor en FII</b>, fiebre, leucocitosis, cambio del hábito, náusea; masa palpable; disuria si toca la vejiga.</li>
<li>Diagnóstico: <b>TC abdominopélvica con contraste</b> (engrosamiento, grasa inflamada, absceso, aire libre). <b>No colonoscopia ni enema</b> en la fase aguda.</li>
<li><b>Hinchey</b>: I absceso pericólico · II absceso pélvico/a distancia · III peritonitis purulenta · IV peritonitis fecal.</li>
<li><b>No complicada</b>: ambulatoria si tolera vía oral, sin comorbilidades; dieta líquida y analgesia; <b>antibiótico selectivo</b> (amoxicilina-clavulanato o ciprofloxacino + metronidazol) en inmunosuprimidos, ancianos frágiles, sepsis, PCR muy alta o TC con datos de riesgo.</li>
<li><b>Complicada</b>: hospitalización, antibiótico IV; <b>absceso &gt;3–4 cm → drenaje percutáneo</b>; peritonitis purulenta o fecal → <b>cirugía</b> (Hartmann o resección con anastomosis).</li>
<li>Colonoscopia 6–8 semanas después (descartar cáncer) si no tiene una reciente. Cirugía electiva individualizada (fístula, estenosis, recurrencias que afectan la calidad de vida, inmunosupresión).</li>
<li>Complicaciones: absceso, perforación, obstrucción, <b>fístula colovesical</b> (neumaturia, fecaluria, IVU recurrentes).</li>
</ul>` },
        { h: 'Cómo lo preguntan en el examen', html: `
<ul>
<li>Anciano con hematoquecia abundante e indolora → <b>sangrado diverticular</b>.</li>
<li>Dolor en FII, fiebre, leucocitosis → <b>TC</b>; no colonoscopia.</li>
<li>Absceso de 5 cm → <b>drenaje percutáneo</b> + antibiótico.</li>
<li>Aire libre y peritonitis generalizada → <b>cirugía</b>.</li>
<li>Neumaturia y fecaluria tras diverticulitis → <b>fístula colovesical</b>.</li>
</ul>` }
      ],
      mnemo: { t: 'Diverticulitis: FII + fiebre + leucocitosis → TC', d: 'Hinchey I–II absceso (drenar si >3–4 cm), III–IV peritonitis (cirugía). Colonoscopia hasta 6–8 semanas después.' },
      pearl: 'El sangrado diverticular es indoloro y la diverticulitis casi nunca sangra: si hay dolor y sangrado juntos, piensa en colitis isquémica o EII.',
      trap: 'La colonoscopia está contraindicada en la diverticulitis aguda por riesgo de perforación.',
      guide: [
        'AGA 2021 y ASCRS 2020: los antibióticos ya no son obligatorios en la diverticulitis no complicada en pacientes inmunocompetentes sin datos de riesgo.',
        'Tu guía indica ayuno 3 días y antibiótico 7–12 días para todos; hoy se usa dieta líquida y antibiótico selectivo.'
      ],
      refs: [
        'Peery AF, et al. AGA Clinical Practice Update on medical management of colonic diverticulitis. Gastroenterology 2021.',
        'Hall J, et al. ASCRS Clinical Practice Guidelines for the management of left-sided colonic diverticulitis. Dis Colon Rectum 2020.',
        'Sengupta N, et al. Management of patients with acute lower GI bleeding: ACG Guideline. Am J Gastroenterol 2023.'
      ]
    }
  },

  guias: {
    diverticular: { src: SRC,
      puntos: [
        'Diverticulosis: la causa más común de sangrado del tubo digestivo bajo; sigmoides; hematoquecia indolora; colonoscopia; fibra y ablandadores.',
        'Diverticulitis: inflamación con microperforación por fecalito; colon izquierdo; tríada dolor en CII + fiebre + leucocitosis.',
        'Diagnóstico con TC con contraste (escala de Hinchey); NO colonoscopia por riesgo de perforación.',
        'Abscesos &gt;3 cm: drenar. Complicaciones: abscesos, perforación, fístula colovesical.'
      ],
      ojo: ['Tu guía indica ayuno 3 días y antibiótico 7–12 días; hoy en la no complicada se usa <b>dieta líquida</b> y antibiótico <b>solo en pacientes de riesgo</b>.'],
      cards: [['Fístula colovesical', 'Neumaturia, fecaluria, IVU recurrentes tras diverticulitis']] }
  },

  cards: [
    ['Causa #1 de sangrado digestivo bajo', 'Diverticulosis'],
    ['Sangrado diverticular', 'Hematoquecia abundante indolora; cede sola ~80 %'],
    ['Diverticulitis: tríada', 'Dolor en FII + fiebre + leucocitosis'],
    ['Diverticulitis: estudio', 'TC con contraste (no colonoscopia aguda)'],
    ['Hinchey I–II', 'Absceso pericólico o pélvico'],
    ['Hinchey III–IV', 'Peritonitis purulenta o fecal → cirugía'],
    ['Absceso diverticular >3–4 cm', 'Drenaje percutáneo + antibiótico'],
    ['Diverticulitis no complicada en sano', 'Ambulatoria, dieta líquida; antibiótico selectivo'],
    ['Después de una diverticulitis', 'Colonoscopia a las 6–8 semanas'],
    ['Prevención de diverticulosis', 'Fibra, ejercicio, bajar de peso']
  ],

  questions: [
    q({ id: 'diverticular-01', dif: 1, stem: 'Hombre de 72 años con hematoquecia abundante e indolora, hemodinámicamente estable. ¿Causa más probable?', opts: ['Cáncer de colon', 'Sangrado diverticular', 'Hemorroides', 'Colitis isquémica', 'EII'], ans: 1,
      exp: 'La diverticulosis es la causa más común de sangrado digestivo bajo agudo y abundante en adultos mayores.', why: ['Suele dar sangrado lento u oculto.', '', 'Sangrado escaso, rojo, al defecar.', 'Se acompaña de dolor.', 'Menos probable a esta edad sin antecedentes.'], ref: 'ACG 2023' }),
    q({ id: 'diverticular-02', dif: 1, stem: 'Mujer de 65 años con dolor en fosa iliaca izquierda, fiebre y leucocitosis. ¿Estudio de elección?', opts: ['Colonoscopia urgente', 'TC abdominopélvica con contraste', 'Enema baritado', 'Rx simple únicamente', 'USG transvaginal'], ans: 1,
      exp: 'La TC confirma la diverticulitis, descarta complicaciones (absceso, perforación) y diagnósticos alternos.', why: ['Contraindicada en la fase aguda.', '', 'Contraindicado.', 'Insuficiente.', 'No es el estudio.'], ref: 'AGA 2021' }),
    q({ id: 'diverticular-03', dif: 2, stem: 'Paciente sano de 55 años con diverticulitis no complicada en TC, tolera vía oral, sin datos de sepsis. ¿Manejo?', opts: ['Cirugía', 'Ambulatorio: dieta líquida y analgésico; antibiótico solo si hay factores de riesgo', 'Hospitalizar y meropenem', 'Colonoscopia inmediata', 'Ayuno 7 días'], ans: 1,
      exp: 'La diverticulitis no complicada en inmunocompetentes puede manejarse sin antibiótico de rutina.', why: ['No está indicada.', '', 'Excesivo.', 'Contraindicada.', 'Innecesario.'], ref: 'AGA 2021' }),
    q({ id: 'diverticular-04', dif: 2, stem: 'TC: diverticulitis con absceso pericólico de 6 cm. ¿Tratamiento?', opts: ['Solo antibiótico oral', 'Antibiótico IV + drenaje percutáneo guiado por imagen', 'Colectomía urgente siempre', 'Colonoscopia', 'Observación'], ans: 1,
      exp: 'Abscesos >3–4 cm: drenaje percutáneo y antibiótico; los pequeños pueden responder solo a antibiótico.', why: ['Insuficiente para ese tamaño.', '', 'No es lo inicial si es drenable.', 'Contraindicada.', 'Peligroso.'], ref: 'ASCRS 2020' }),
    q({ id: 'diverticular-05', dif: 2, stem: 'Paciente con diverticulitis, abdomen en tabla, aire libre subdiafragmático y peritonitis fecal. ¿Hinchey y conducta?', opts: ['I; antibiótico', 'II; drenaje', 'IV; cirugía urgente', 'III; observación', 'No aplica'], ans: 2,
      exp: 'Peritonitis fecal = Hinchey IV: cirugía urgente (Hartmann o resección).', why: ['Es absceso pericólico.', 'Es absceso a distancia.', '', 'Purulenta, y también requiere cirugía.', 'Aplica.'], ref: 'ASCRS 2020' }),
    q({ id: 'diverticular-06', dif: 2, stem: 'Paciente con antecedente de diverticulitis que refiere burbujas en la orina e IVU recurrentes. ¿Diagnóstico?', opts: ['Cistitis intersticial', 'Fístula colovesical', 'Cáncer de vejiga', 'Litiasis', 'Prostatitis'], ans: 1,
      exp: 'La fístula colovesical es la fístula más común de la diverticulitis: neumaturia, fecaluria e IVU polimicrobianas.', why: ['No da neumaturia.', '', 'No explica.', 'No explica.', 'No explica.'], ref: 'ASCRS 2020' }),
    q({ id: 'diverticular-07', dif: 2, stem: 'Paciente con diverticulitis resuelta sin colonoscopia reciente. ¿Qué recomiendas?', opts: ['Nada', 'Colonoscopia 6–8 semanas después', 'Colonoscopia durante el internamiento', 'TC cada mes', 'Colectomía electiva siempre'], ans: 1,
      exp: 'Para descartar cáncer que simule diverticulitis, una vez resuelta la inflamación.', why: ['Puede ocultar un cáncer.', '', 'Riesgo de perforación.', 'Innecesario.', 'No siempre.'], ref: 'AGA 2021' }),
    q({ id: 'diverticular-08', dif: 1, stem: '¿Qué medida reduce el riesgo de enfermedad diverticular?', opts: ['Evitar semillas', 'Dieta alta en fibra y ejercicio', 'Dieta baja en residuo', 'Uso regular de AINE', 'Opioides'], ans: 1,
      exp: 'La fibra reduce la presión intraluminal; las semillas no aumentan el riesgo (mito).', why: ['Es un mito.', '', 'Aumenta el riesgo.', 'Aumentan el riesgo.', 'Aumentan el estreñimiento.'], ref: 'AGA 2021' }),
    q({ id: 'diverticular-09', dif: 2, stem: 'Paciente con hematoquecia masiva, PA 80/50 pese a 2 L, endoscopia alta normal. ¿Siguiente estudio?', opts: ['Colonoscopia sin preparación inmediata', 'Angio-TC (y embolización)', 'Enema baritado', 'Cápsula endoscópica', 'Esperar'], ans: 1,
      exp: 'Sangrado bajo masivo con inestabilidad: angio-TC localiza el sitio y permite embolización.', why: ['Mala visualización.', '', 'Contraindicado.', 'No en inestables.', 'Peligroso.'], ref: 'ACG 2023' }),
    q({ id: 'diverticular-10', dif: 2, stem: '¿Qué tipo de divertículo es el colónico típico?', opts: ['Verdadero (todas las capas)', 'Falso (mucosa y submucosa)', 'De Meckel', 'De Zenker', 'Epifrénico'], ans: 1,
      exp: 'Son falsos: la mucosa y submucosa protruyen por donde entran los vasos rectos.', why: ['No.', '', 'Es del íleon.', 'Es faríngeo.', 'Es esofágico.'], ref: 'AGA 2021' }),
    q({ id: 'diverticular-11', dif: 2, stem: 'Paciente inmunosuprimido (trasplantado) con diverticulitis no complicada. ¿Manejo?', opts: ['Sin antibiótico', 'Hospitalización y antibiótico (y valorar cirugía electiva después)', 'Colonoscopia urgente', 'Solo analgésico', 'Alta inmediata'], ans: 1,
      exp: 'Los inmunosuprimidos tienen más riesgo de complicaciones: antibiótico siempre y menor umbral para cirugía.', why: ['Alto riesgo.', '', 'Contraindicada.', 'Insuficiente.', 'Peligroso.'], ref: 'ASCRS 2020' }),
    q({ id: 'diverticular-12', dif: 2, stem: '¿Cuál es el antibiótico oral adecuado para una diverticulitis que lo requiere?', opts: ['Amoxicilina sola', 'Amoxicilina-clavulanato o ciprofloxacino + metronidazol', 'Vancomicina oral', 'Nitrofurantoína', 'Doxiciclina sola'], ans: 1,
      exp: 'Se cubren gramnegativos y anaerobios.', why: ['No cubre anaerobios productores de betalactamasa.', '', 'Es para C. difficile.', 'Solo urinario.', 'Cobertura inadecuada.'], ref: 'AGA 2021' }),
    q({ id: 'diverticular-13', dif: 1, stem: '¿Cuál es la localización más frecuente de los divertículos en occidente?', opts: ['Ciego', 'Colon sigmoides', 'Recto', 'Transverso', 'Íleon'], ans: 1,
      exp: 'El sigmoides tiene el menor diámetro y la mayor presión intraluminal.', why: ['Más en Asia.', '', 'Raro.', 'Menos frecuente.', 'Es intestino delgado.'], ref: 'AGA 2021' }),
    q({ id: 'diverticular-14', dif: 2, stem: 'Paciente con sangrado diverticular que cede. ¿Siguiente paso?', opts: ['Colectomía', 'Colonoscopia con preparación (diagnóstica y terapéutica)', 'TC cada mes', 'Nada', 'Anticoagular'], ans: 1,
      exp: 'La colonoscopia confirma la fuente, descarta neoplasia y permite hemostasia con clips si hay estigmas.', why: ['No de entrada.', '', 'No.', 'Hay que descartar otras causas.', 'No.'], ref: 'ACG 2023' }),
    q({ id: 'diverticular-15', dif: 3, stem: 'Paciente con diverticulitis que desarrolla distensión, vómito y estreñimiento absoluto semanas después de varios episodios. TC: estenosis del sigmoides. ¿Complicación?', opts: ['Perforación', 'Obstrucción por estenosis inflamatoria crónica', 'Fístula', 'Absceso', 'Sangrado'], ans: 1,
      exp: 'Los episodios repetidos producen fibrosis y estenosis; hay que descartar cáncer y suele requerir resección.', why: ['No hay aire libre.', '', 'No hay trayecto.', 'No hay colección.', 'No hay sangrado.'], ref: 'ASCRS 2020' })
  ]
};
