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
        { ch: 'Diverticulosis y diverticulitis', sc: [
          { v: { k: 'title', t: 'Enfermedad diverticular', s: 'Semana 11 · Gastroenterología' },
            say: 'Semana once: los divertículos, bolsitas de mucosa que salen por los puntos débiles del colon, sobre todo en el sigmoides, por la presión alta del estreñimiento crónico y la dieta baja en fibra.' },
          { v: { k: 'vs', a: 'Sangrado diverticular', b: 'Diverticulitis', rows: [['Dolor', 'No', 'FII, fiebre'], ['Lado', 'Más el derecho', 'Más el izquierdo'], ['Estudio', 'Colonoscopia', 'TC con contraste'], ['Tratamiento', 'Suele parar solo', 'Antibiótico o drenaje']] },
            say: 'Pueden dar dos problemas distintos. El sangrado diverticular es abundante e indoloro, es la causa más común de sangrado digestivo bajo y suele parar solo. La diverticulitis es inflamación: dolor en la fosa iliaca izquierda, fiebre y leucocitosis.' },
          { v: { k: 'case', t: 'Dolor en FII', p: { name: 'Julio', age: 64, sex: 'H', skin: '#C98B62', hair: '#9A9A9A', gown: '#5BA7E0' }, text: 'Dolor en fosa iliaca izquierda de 2 días, fiebre 38.3, leucocitos 15,000. TC: engrosamiento del sigmoides sin absceso.', vit: { T: '38.3', Leu: '15K' } },
            say: 'Julio tiene sesenta y cuatro años, dolor en la fosa iliaca izquierda desde hace dos días, fiebre y leucocitosis. La tomografía muestra inflamación del sigmoides sin absceso: diverticulitis no complicada.' }
        ] },
        { ch: 'Tratamiento', sc: [
          { v: { k: 'flow', t: 'Según la TC', steps: ['No complicada: casa, dieta líquida, analgésico', 'Antibiótico si hay riesgo', 'Absceso mayor de 3 a 4 cm: drenaje percutáneo', 'Peritonitis: cirugía'] },
            say: 'La no complicada en un paciente sano se maneja en casa con dieta líquida y analgésico; el antibiótico se da a los de alto riesgo. Un absceso mayor de tres o cuatro centímetros se drena por vía percutánea. Y la peritonitis purulenta o fecal es cirugía urgente.' },
          { v: { k: 'tip', kind: 'trap', t: 'No hagas colonoscopia en la diverticulitis aguda: riesgo de perforación. Hazla 6–8 semanas después para descartar cáncer.' },
            say: 'No hagas colonoscopia en la fase aguda, por el riesgo de perforar. Se hace seis a ocho semanas después, para descartar un cáncer que se pareciera.' },
          { v: { k: 'mnemo', t: 'Diverticulitis: dolor FII + fiebre + leucocitosis', d: 'TC para confirmar y clasificar (Hinchey); colonoscopia diferida.' },
            say: 'Llévate la tríada: dolor en fosa iliaca izquierda, fiebre y leucocitosis. Tomografía para confirmar.' }
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
