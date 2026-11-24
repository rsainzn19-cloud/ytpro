// Tema 53 · Endocarditis infecciosa (Infectología, semana 9)
const T = { topic: 'endocarditis', subj: 'infecto' };
const q = (o) => ({ ...T, ...o });
const SRC = { short: 'De tu Guía Infecto', vs: 'tu guía', name: 'Guía Infecto · Ximena Cors Cepeda (EMIS 5)', url: 'https://docs.google.com/document/d/1z8GAmFxqoyJtS21XWHwMlvykDNaoEMW07PgJh45aMwY/edit' };

export default {
  lessons: {
    endocarditis: {
      hook: 'Fiebre + soplo nuevo = endocarditis hasta demostrar lo contrario. Tres hemocultivos antes del antibiótico y ecocardiograma (transesofágico si el transtorácico no basta). Criterios de Duke. Cirugía si hay IC, absceso, vegetación grande con embolia o infección no controlada.',
      nn: [], yt: 'infective endocarditis Duke criteria treatment',
      video: [
        { ch: 'Quién y por qué', sc: [
          { v: { k: 'title', t: 'Endocarditis infecciosa', s: 'Semana 9 · Infectología' },
            say: 'Semana nueve: la endocarditis infecciosa. Es una infección del endocardio, casi siempre de una válvula, que forma vegetaciones de plaquetas, fibrina y bacterias. Mata por tres vías: destruye la válvula, lanza émbolos y siembra infección. Vas a aprender a sospecharla, confirmarla con Duke y decidir cuándo operar.' },
          { v: { k: 'case', t: 'Fiebre y soplo', p: { name: 'Saúl', age: 29, sex: 'H', skin: '#D9A07A', hair: '#2A1A12', gown: '#5EEAD4' }, text: 'Usa heroína intravenosa. Dos semanas con fiebre, escalofríos, tos y dolor pleurítico. Soplo holosistólico en foco tricuspídeo que aumenta con la inspiración.', vit: { T: '39.4', FC: '116', PA: '104/62' } },
            say: 'Saúl tiene veintinueve años y se inyecta heroína. Lleva dos semanas con fiebre, escalofríos, tos y dolor al respirar. Tiene un soplo holosistólico en el foco tricuspídeo que aumenta con la inspiración. La radiografía muestra varios nódulos pulmonares, algunos cavitados.' },
          { v: { k: 'list', t: 'Factores de riesgo', items: ['Válvula protésica', 'Endocarditis previa', 'Drogas intravenosas', 'Valvulopatía y cardiopatía congénita', 'Catéteres, hemodiálisis, dispositivos'] },
            say: 'Los factores de riesgo son una válvula protésica, una endocarditis previa, el uso de drogas intravenosas, las valvulopatías y cardiopatías congénitas, y la puerta de entrada hospitalaria: catéteres, hemodiálisis y dispositivos intracardiacos.' },
          { v: { k: 'vs', a: 'Agente', b: 'Pista', rows: [['S. aureus', 'La causa #1; aguda y destructiva', 'Drogas IV, catéteres'], ['Estreptococo viridans', 'Subaguda en válvula dañada', 'Después del dentista'], ['Enterococo', 'Ancianos', 'Procedimiento urinario'], ['S. gallolyticus', 'Buscar cáncer de colon', 'Colonoscopia'], ['Coagulasa negativo', 'Prótesis temprana', '—']] },
            say: 'El agente número uno es el estafilococo dorado, que da una endocarditis aguda y destructiva, típica de drogas intravenosas y catéteres. El estreptococo viridans da la forma subaguda en una válvula ya dañada, después de procedimientos dentales. El enterococo, en ancianos tras procedimientos urinarios. Streptococcus gallolyticus obliga a buscar cáncer de colon. Y el estafilococo coagulasa negativo, en prótesis recientes.' },
          { v: { k: 'list', t: 'Hemocultivos negativos', items: ['Antibiótico previo: lo más común', 'HACEK', 'Coxiella (fiebre Q): ganado', 'Bartonella: gatos, indigentes', 'Brucella: leche sin pasteurizar'] },
            say: 'Si los hemocultivos salen negativos, la causa más común es un antibiótico previo. Luego, gérmenes difíciles de cultivar: el grupo HACEK, Coxiella de la fiebre Q en quien trabaja con ganado, Bartonella en contacto con gatos o personas en situación de calle, y Brucella por leche sin pasteurizar.' }
        ] },
        { ch: 'Clínica', sc: [
          { v: { k: 'list', t: 'Clínica', items: ['Fiebre: 90%', 'Soplo nuevo o que cambia', 'Embolias: cerebro, riñón, bazo, pulmón', 'Insuficiencia cardiaca', 'Anemia, esplenomegalia, hematuria'] },
            say: 'La clínica: fiebre en noventa por ciento, un soplo nuevo o que cambia, embolias al cerebro, riñón, bazo o, si es del lado derecho, al pulmón, insuficiencia cardiaca por destrucción valvular, anemia, esplenomegalia y hematuria.' },
          { v: { k: 'vs', a: 'Lesiones de Janeway', b: 'Nódulos de Osler', rows: [['Dolor', 'Indoloras', 'Dolorosos'], ['Dónde', 'Palmas y plantas', 'Pulpejos de los dedos'], ['Mecanismo', 'Émbolos sépticos', 'Inmunocomplejos'], ['Duke', 'Fenómeno vascular', 'Fenómeno inmunológico']] },
            say: 'Dos estigmas que se confunden: las lesiones de Janeway son máculas indoloras en palmas y plantas, causadas por émbolos sépticos. Los nódulos de Osler son dolorosos, en los pulpejos, y se deben a inmunocomplejos. Junto con las manchas de Roth en la retina y las hemorragias en astilla, completan los estigmas periféricos.' },
          { v: { k: 'tip', kind: 'pearl', t: 'Drogas IV: válvula tricúspide, S. aureus, émbolos sépticos pulmonares (nódulos cavitados). Soplo que aumenta con la inspiración.' },
            say: 'Perla: en quien usa drogas intravenosas, la válvula más afectada es la tricúspide, por estafilococo dorado. Los émbolos van al pulmón y aparecen como nódulos que cavitan. El soplo de insuficiencia tricuspídea aumenta con la inspiración. En el resto de los pacientes, la más afectada es la mitral.' }
        ] },
        { ch: 'Diagnóstico con Duke', sc: [
          { v: { k: 'flow', t: 'Confirmar', steps: ['3 sets de hemocultivos de sitios distintos', 'Antes del antibiótico', 'Eco transtorácico', 'Transesofágico: prótesis, S. aureus, TT negativo', 'PET-CT en prótesis'] },
            say: 'El diagnóstico empieza con tres sets de hemocultivos de sitios distintos, antes del antibiótico. Luego, ecocardiograma transtorácico. Si sale negativo con sospecha alta, o hay prótesis, estafilococo dorado o sospecha de absceso, ecocardiograma transesofágico, que es mucho más sensible. En prótesis, el PET CT ayuda.' },
          { v: { k: 'vs', a: 'Duke mayores', b: 'Duke menores', rows: [['Microbiología', 'Germen típico en 2 sets o persistente', 'Hemocultivo que no cumple mayor'], ['Imagen', 'Vegetación, absceso, dehiscencia', '—'], ['Otros', '—', 'Predisposición, fiebre de 38'], ['Fenómenos', '—', 'Vasculares e inmunológicos']] },
            say: 'Los criterios de Duke modificados. Mayores: hemocultivos con un germen típico en dos sets, o bacteriemia persistente, y una imagen con vegetación, absceso o dehiscencia de prótesis. Menores: predisposición, fiebre de treinta y ocho o más, fenómenos vasculares, fenómenos inmunológicos y hemocultivos que no cumplen el criterio mayor.' },
          { v: { k: 'big', h: 'Endocarditis definitiva', t: '2 mayores', s: 'o 1 mayor + 3 menores, o 5 menores.' },
            say: 'La endocarditis es definitiva con dos criterios mayores, con uno mayor y tres menores, o con cinco menores.' },
          { v: { k: 'quiz', q: 'Fiebre, soplo nuevo y S. aureus en 3 hemocultivos. Eco transtorácico normal. ¿Siguiente paso?', opts: ['Descartar endocarditis', 'Ecocardiograma transesofágico', 'Repetir transtorácico en un mes'], a: 1 },
            say: 'Pausa. Paciente con fiebre, soplo nuevo y estafilococo dorado en tres hemocultivos. El ecocardiograma transtorácico es normal. ¿Qué sigue?',
            exp: 'Ecocardiograma transesofágico. El transtorácico no ve vegetaciones pequeñas ni abscesos. Con estafilococo dorado en sangre y sospecha, siempre se completa con transesofágico.' }
        ] },
        { ch: 'Tratamiento y cirugía', sc: [
          { v: { k: 'vs', a: 'Situación', b: 'Antibiótico', rows: [['Empírico, válvula nativa', 'Vancomicina + ceftriaxona', '—'], ['Empírico, prótesis', 'Vancomicina + gentamicina + rifampicina', '—'], ['S. aureus sensible', 'Cefazolina u oxacilina', '4 a 6 semanas'], ['MRSA', 'Vancomicina o daptomicina', '—'], ['Estreptococo', 'Penicilina G o ceftriaxona', '—'], ['Enterococo', 'Ampicilina + ceftriaxona', '—']] },
            say: 'El tratamiento empírico en válvula nativa es vancomicina más ceftriaxona; en prótesis, vancomicina, gentamicina y rifampicina. Con el cultivo se dirige: estafilococo sensible, cefazolina u oxacilina; resistente, vancomicina o daptomicina; estreptococo, penicilina G o ceftriaxona; enterococo, ampicilina más ceftriaxona. Son cuatro a seis semanas, y seis en prótesis. En pacientes estables seleccionados se puede pasar a vía oral.' },
          { v: { k: 'list', t: 'Indicaciones de cirugía', items: ['Insuficiencia cardiaca: la más común', 'Absceso, bloqueo AV, fístula', 'Hongos o multirresistentes', 'Bacteriemia persistente más de 7 días', 'Vegetación mayor de 10 mm con embolia'] },
            say: 'Se opera por tres motivos. Insuficiencia cardiaca por destrucción valvular, la indicación más común. Infección no controlada: absceso perivalvular, bloqueo auriculoventricular nuevo, fístula, hongos, gérmenes multirresistentes o bacteriemia que persiste más de siete días. Y prevención de embolias: vegetación de más de diez milímetros que ya embolizó.' },
          { v: { k: 'tip', kind: 'trap', t: 'No se anticoagula ni se da aspirina por la endocarditis: los émbolos cerebrales pueden sangrar.' },
            say: 'Trampa: no se inicia anticoagulación ni aspirina para prevenir embolias en la endocarditis. No las reduce y los infartos cerebrales sépticos pueden transformarse en hemorragia.' },
          { v: { k: 'quiz', q: 'Endocarditis aórtica por S. aureus con edema pulmonar agudo por insuficiencia aórtica grave. ¿Qué haces?', opts: ['Antibiótico 6 semanas y luego valorar', 'Cirugía valvular urgente', 'Agregar rifampicina'], a: 1 },
            say: 'Pausa. Paciente con endocarditis aórtica por estafilococo que desarrolla edema pulmonar por insuficiencia aórtica grave. ¿Qué haces?',
            exp: 'Cirugía valvular urgente. La insuficiencia cardiaca por destrucción de la válvula es la indicación quirúrgica más común y la más urgente; el antibiótico no repara la válvula.' }
        ] },
        { ch: 'Profilaxis y cierre', sc: [
          { v: { k: 'list', t: 'Profilaxis: solo alto riesgo', items: ['Válvula o material protésico', 'Endocarditis previa', 'Cardiopatía congénita cianógena no reparada', 'Trasplante cardiaco con valvulopatía', 'Amoxicilina 2 g antes del dentista'] },
            say: 'La profilaxis antibiótica solo se da a pacientes de alto riesgo: válvula o material protésico, endocarditis previa, cardiopatía congénita cianógena no reparada o reparada con material, y trasplante cardiaco con valvulopatía. Solo antes de procedimientos dentales que manipulan la encía: amoxicilina dos gramos de treinta a sesenta minutos antes.' },
          { v: { k: 'list', t: 'Saúl: final del caso', items: ['3 hemocultivos: S. aureus resistente a meticilina', 'Eco: vegetación tricuspídea de 14 mm', 'Vancomicina, luego daptomicina', 'Hemocultivos negativos al día 4', '6 semanas; programa de reducción de daños'] },
            say: 'Los tres hemocultivos de Saúl crecen estafilococo dorado resistente a meticilina, y el ecocardiograma muestra una vegetación de catorce milímetros en la tricúspide. Recibe vancomicina y luego daptomicina; los hemocultivos se negativizan al cuarto día y completa seis semanas. Además se le vincula a un programa de reducción de daños.' },
          { v: { k: 'mnemo', t: 'Duke: 2 mayores, o 1 + 3, o 5 menores', d: 'Mayores: hemocultivos + imagen. Cirugía: IC, infección no controlada, embolias. Profilaxis: prótesis, previa, cianógena.' },
            say: 'Llévate Duke: dos mayores, uno más tres, o cinco menores. Cirugía por insuficiencia cardiaca, infección no controlada o embolias. Y profilaxis solo en alto riesgo. Ahora practica en el algoritmo de Duke del taller y escucha el soplo de insuficiencia mitral.' }
        ] }
      ],
      sections: [
        { h: 'Factores de riesgo y agentes', html: `
<ul>
<li>Riesgo: <b>válvula protésica</b>, endocarditis previa, cardiopatía congénita, valvulopatía (reumática, degenerativa), <b>drogas IV</b> (tricúspide, <i>S. aureus</i>), catéteres, hemodiálisis, dispositivos intracardiacos, DM, inmunosupresión.</li>
<li><b><i>S. aureus</i></b>: la causa #1 (aguda, destructiva, embolias). <b>Estreptococos viridans</b>: subaguda en válvula dañada, tras procedimientos dentales. <b>Coagulasa negativo</b>: prótesis temprana. <b>Enterococo</b>: ancianos, procedimientos GU. <b><i>S. gallolyticus</i> (bovis)</b>: <b>cáncer de colon</b>. <b>Hongos</b>: drogas IV, NPT, prótesis.</li>
<li>Cultivo negativo: antibiótico previo, <b>HACEK</b> (<i>Haemophilus, Aggregatibacter, Cardiobacterium, Eikenella, Kingella</i>), <i>Coxiella</i> (fiebre Q), <i>Bartonella</i>, <i>Brucella</i>, <i>Tropheryma</i>.</li>
<li>Válvula más afectada: <b>mitral</b> &gt; aórtica; <b>tricúspide en drogas IV</b> (émbolos sépticos pulmonares).</li>
<li>No infecciosa (marántica): cáncer (mucinosos), lupus (Libman-Sacks).</li>
</ul>` },
        { h: 'Clínica y diagnóstico', html: `
<ul>
<li>Fiebre (90 %), <b>soplo nuevo</b> o cambiante, IC, embolias (EVC, renal, esplénica, pulmonar), esplenomegalia, anemia, hematuria.</li>
<li>Estigmas: hemorragias en astilla, <b>lesiones de Janeway</b> (máculas indoloras en palmas/plantas: émbolos), <b>nódulos de Osler</b> (dolorosos, pulpejos: inmunes), <b>manchas de Roth</b> (retina), glomerulonefritis, factor reumatoide positivo.</li>
<li><b>3 sets de hemocultivos</b> de sitios distintos (separados ≥1 h si está estable) <b>antes</b> del antibiótico.</li>
<li><b>Eco transtorácico</b> inicial; <b>transesofágico</b> si el TT es negativo con sospecha alta, prótesis, <i>S. aureus</i>, sospecha de absceso. PET-CT en prótesis.</li>
<li><b>Duke modificados</b> (2023): mayores = hemocultivos (típico en 2 sets, o persistente; <i>Coxiella</i> IgG &gt;1:800 o 1 cultivo) + imagen (vegetación, absceso, dehiscencia; PET/TC). Menores = predisposición, fiebre ≥38 °C, fenómenos vasculares, fenómenos inmunológicos, hemocultivo no mayor. Definitiva: 2 mayores, 1 mayor + 3 menores, o 5 menores.</li>
</ul>` },
        { h: 'Tratamiento', html: `
<ul>
<li>Empírico: <b>válvula nativa</b> → vancomicina + ceftriaxona (o ampicilina-sulbactam + gentamicina). <b>Prótesis</b> → vancomicina + gentamicina + rifampicina (± cefepime).</li>
<li>Dirigido (4–6 semanas IV; 6 en prótesis): MSSA → <b>cefazolina u oxacilina</b>; MRSA → vancomicina o daptomicina; estreptococos sensibles → penicilina G o ceftriaxona; enterococo → ampicilina + ceftriaxona (o + gentamicina). Paso a vía oral en pacientes estables seleccionados (POET).</li>
<li><b>Cirugía</b> (temprana): <b>IC</b> por disfunción valvular (la indicación más común), infección no controlada (absceso, bloqueo AV, fístula, vegetación creciente, hongos, gérmenes multirresistentes, bacteriemia persistente &gt;7 días), prevención de embolias (vegetación &gt;10 mm con embolia, o &gt;30 mm).</li>
<li>No anticoagular por la endocarditis (riesgo de hemorragia en embolias cerebrales); no se inicia aspirina.</li>
<li><b>Profilaxis</b> (amoxicilina 2 g 30–60 min antes de procedimientos dentales con manipulación gingival) solo en alto riesgo: <b>prótesis o material protésico</b>, endocarditis previa, cardiopatía congénita cianógena no reparada o reparada con material (6 meses o con defecto residual), trasplante cardiaco con valvulopatía.</li>
</ul>` },
        { h: 'Cómo lo preguntan en el examen', html: `
<ul>
<li>Usuario de drogas IV con fiebre, soplo tricuspídeo y nódulos pulmonares → <b><i>S. aureus</i></b>, tricúspide.</li>
<li>Endocarditis por <i>S. gallolyticus</i> → <b>colonoscopia</b>.</li>
<li>Eco TT negativo con alta sospecha → <b>eco transesofágico</b>.</li>
<li>Endocarditis aórtica con IC aguda → <b>cirugía urgente</b>.</li>
<li>Prótesis valvular antes de extracción dental → <b>amoxicilina 2 g</b>.</li>
<li>Hemocultivos negativos y contacto con ganado → <i>Coxiella</i> (fiebre Q).</li>
</ul>` }
      ],
      mnemo: { t: 'Janeway indoloras (émbolos) · Osler dolorosos (inmunes) · Roth (retina)', d: 'Y siempre: 3 hemocultivos antes del antibiótico, eco (TE si hace falta), vancomicina + ceftriaxona empírico.' },
      pearl: 'S. gallolyticus (bovis) en hemocultivo o endocarditis = colonoscopia: se asocia a cáncer colorrectal.',
      trap: 'En la endocarditis tricuspídea por drogas IV los émbolos van al pulmón (nódulos cavitados), no al cerebro.',
      guide: [
        'ESC 2023: criterios de Duke actualizados incorporan PET/TC y TC cardiaca, y se acepta paso a vía oral en pacientes estables.',
        'Tu guía usa “cirugía si vegetación >10 mm”; la indicación es >10 mm con embolia (o >30 mm aislada), además de IC e infección no controlada.'
      ],
      refs: [
        'Delgado V, et al. 2023 ESC Guidelines for the management of endocarditis. Eur Heart J 2023.',
        'Fowler VG, et al. The 2023 Duke-ISCVID criteria for infective endocarditis. Clin Infect Dis 2023.',
        'Baddour LM, et al. Infective endocarditis in adults: AHA Scientific Statement. Circulation 2015.',
        'Iversen K, et al. Partial oral versus intravenous antibiotic treatment of endocarditis (POET). N Engl J Med 2019.'
      ]
    }
  },

  guias: {
    endocarditis: { src: SRC,
      puntos: [
        'Riesgo: fiebre reumática, valvulopatía, prótesis, procedimientos dentales, drogas IV, inmunocompromiso.',
        'S. aureus (drogas IV, nativa), viridans (dental en válvula dañada), epidermidis (prótesis), S. bovis (cáncer de colon), hongos (SIDA, trasplantes); cultivo negativo: Coxiella, Bartonella, Legionella.',
        'Mitral en general; tricúspide en drogas IV. Hemorragias en astilla, Janeway (palmas/plantas), Osler (dolorosos), Roth.',
        'Duke: 2 mayores, 1 mayor + 3 menores o 5 menores; 3 cultivos; eco TT.',
        'Nativa: vancomicina + ceftriaxona/cefepime; prótesis: vancomicina + betalactámico + gentamicina + rifampicina; cirugía si vegetación &gt;10 mm; profilaxis con amoxicilina dental, cefazolina en cirugía.'
      ],
      ojo: ['La profilaxis dental solo se da a pacientes de <b>alto riesgo</b> (prótesis, endocarditis previa, ciertas cardiopatías congénitas), no a toda valvulopatía.'],
      cards: [['HACEK', 'Haemophilus, Aggregatibacter, Cardiobacterium, Eikenella, Kingella: endocarditis con cultivo negativo']] }
  },

  cards: [
    ['Agente #1 de endocarditis', 'Staphylococcus aureus'],
    ['Endocarditis subaguda tras procedimiento dental', 'Estreptococo viridans'],
    ['Endocarditis de prótesis temprana', 'Estafilococo coagulasa negativo'],
    ['S. gallolyticus (bovis)', 'Colonoscopia (cáncer de colon)'],
    ['Válvula afectada en drogas IV', 'Tricúspide (émbolos pulmonares)'],
    ['Lesiones de Janeway', 'Máculas indoloras en palmas y plantas (émbolos)'],
    ['Nódulos de Osler', 'Dolorosos en pulpejos (inmunológicos)'],
    ['Hemocultivos en endocarditis', '3 sets antes del antibiótico'],
    ['Eco TT negativo con alta sospecha', 'Eco transesofágico'],
    ['Empírico en válvula nativa', 'Vancomicina + ceftriaxona'],
    ['Empírico en prótesis', 'Vancomicina + gentamicina + rifampicina'],
    ['Indicación quirúrgica más común', 'Insuficiencia cardiaca por disfunción valvular'],
    ['Profilaxis dental (alto riesgo)', 'Amoxicilina 2 g 30–60 min antes'],
    ['Cultivo negativo', 'Antibiótico previo, HACEK, Coxiella, Bartonella']
  ],

  questions: [
    q({ id: 'endocarditis-01', dif: 1, stem: 'Usuario de drogas IV con fiebre, soplo holosistólico que aumenta con la inspiración y nódulos pulmonares cavitados. ¿Agente y válvula?', opts: ['Viridans; mitral', 'S. aureus; tricúspide', 'Enterococo; aórtica', 'Candida; pulmonar', 'S. epidermidis; mitral'], ans: 1,
      exp: 'Drogas IV: S. aureus en tricúspide con émbolos sépticos pulmonares.', why: ['No en este contexto.', '', 'No.', 'Posible, menos frecuente.', 'Prótesis.'], ref: 'ESC 2023' }),
    q({ id: 'endocarditis-02', dif: 2, stem: 'Paciente con fiebre, soplo nuevo y hemocultivos con S. gallolyticus. ¿Estudio adicional?', opts: ['TC de cráneo', 'Colonoscopia', 'Biopsia de médula', 'Gammagrama óseo', 'Ninguno'], ans: 1,
      exp: 'Asociación con neoplasia colorrectal.', why: ['No.', '', 'No.', 'No.', 'Hay que buscar cáncer.'], ref: 'ESC 2023' }),
    q({ id: 'endocarditis-03', dif: 2, stem: 'Sospecha clínica alta de endocarditis con eco transtorácico normal. ¿Siguiente paso?', opts: ['Descartar', 'Eco transesofágico', 'RX de tórax', 'Repetir en 1 año', 'Biopsia'], ans: 1,
      exp: 'El ETE es mucho más sensible para vegetaciones y abscesos.', why: ['No descarta.', '', 'No.', 'No.', 'No.'], ref: 'ESC 2023' }),
    q({ id: 'endocarditis-04', dif: 2, stem: '¿Cuál es el tratamiento empírico de la endocarditis de válvula nativa en un paciente estable tras tomar hemocultivos?', opts: ['Ceftriaxona sola', 'Vancomicina + ceftriaxona', 'Amoxicilina oral', 'Metronidazol', 'Fluconazol'], ans: 1,
      exp: 'Cubre S. aureus (incluido MRSA), estreptococos y HACEK.', why: ['No cubre MRSA.', '', 'Insuficiente.', 'No.', 'No.'], ref: 'ESC 2023' }),
    q({ id: 'endocarditis-05', dif: 2, stem: 'Endocarditis aórtica por S. aureus con edema pulmonar agudo por insuficiencia aórtica grave. ¿Conducta?', opts: ['Antibiótico 6 semanas y luego valorar', 'Cirugía urgente + antibiótico', 'Solo diurético', 'Anticoagular', 'Esteroide'], ans: 1,
      exp: 'IC por disfunción valvular es indicación de cirugía urgente.', why: ['Mortalidad alta.', '', 'Insuficiente.', 'No.', 'No.'], ref: 'ESC 2023' }),
    q({ id: 'endocarditis-06', dif: 1, stem: '¿Qué hallazgo es una lesión indolora en palmas y plantas en la endocarditis?', opts: ['Nódulos de Osler', 'Lesiones de Janeway', 'Manchas de Roth', 'Hemorragias en astilla', 'Eritema nodoso'], ans: 1,
      exp: 'Janeway: microémbolos sépticos, indoloras.', why: ['Dolorosos.', '', 'Retina.', 'Uñas.', 'No.'], ref: 'ESC 2023' }),
    q({ id: 'endocarditis-07', dif: 2, stem: 'Paciente con válvula aórtica mecánica que se realizará extracción dental. ¿Profilaxis?', opts: ['Ninguna', 'Amoxicilina 2 g VO 30–60 min antes', 'Vancomicina 1 semana', 'Ciprofloxacino', 'Doxiciclina'], ans: 1,
      exp: 'Alto riesgo (prótesis): profilaxis con amoxicilina (clindamicina ya no se recomienda en alergia: azitromicina/doxiciclina).', why: ['Requiere.', '', 'Excesivo.', 'No.', 'Alternativa en alergia.'], ref: 'AHA 2021' }),
    q({ id: 'endocarditis-08', dif: 2, stem: 'Paciente con prolapso mitral sin insuficiencia que se hará limpieza dental. ¿Profilaxis?', opts: ['Amoxicilina', 'No está indicada', 'Vancomicina', 'Clindamicina', 'Ceftriaxona'], ans: 1,
      exp: 'Solo pacientes de alto riesgo reciben profilaxis.', why: ['No es alto riesgo.', '', 'No.', 'No.', 'No.'], ref: 'AHA 2021' }),
    q({ id: 'endocarditis-09', dif: 2, stem: 'Endocarditis por MSSA confirmada. ¿Antibiótico de elección?', opts: ['Vancomicina', 'Cefazolina u oxacilina', 'Ceftriaxona', 'Linezolid', 'Clindamicina'], ans: 1,
      exp: 'Para MSSA los betalactámicos antiestafilocócicos son superiores a la vancomicina.', why: ['Inferior para MSSA.', '', 'No es la elección.', 'No de primera línea.', 'No.'], ref: 'ESC 2023' }),
    q({ id: 'endocarditis-10', dif: 2, stem: 'Endocarditis con hemocultivos negativos en un ganadero (sin antibiótico previo). ¿Agente a buscar?', opts: ['S. aureus', 'Coxiella burnetii (fiebre Q)', 'E. coli', 'Pseudomonas', 'Candida'], ans: 1,
      exp: 'Serología de Coxiella (IgG fase I) es criterio mayor.', why: ['Crece.', '', 'Crece.', 'Crece.', 'Crece.'], ref: 'ESC 2023' }),
    q({ id: 'endocarditis-11', dif: 2, stem: 'Paciente con endocarditis mitral, vegetación de 14 mm y un EVC embólico previo. ¿Conducta?', opts: ['Anticoagular', 'Cirugía temprana para prevenir nuevas embolias (valorar el riesgo hemorrágico cerebral)', 'Solo antibiótico', 'Aspirina', 'Trombólisis'], ans: 1,
      exp: 'Vegetación >10 mm con embolia: cirugía temprana.', why: ['Riesgo de hemorragia.', '', 'Riesgo de nuevas embolias.', 'No.', 'Contraindicada.'], ref: 'ESC 2023' }),
    q({ id: 'endocarditis-12', dif: 2, stem: '¿Cuántos sets de hemocultivos se toman ante la sospecha de endocarditis?', opts: ['1', '3 de sitios distintos', '10', 'Ninguno', '2 del mismo sitio'], ans: 1,
      exp: 'Tres sets antes del antibiótico (bacteriemia continua).', why: ['Insuficiente.', '', 'Excesivo.', 'No.', 'No.'], ref: 'ESC 2023' }),
    q({ id: 'endocarditis-13', dif: 2, stem: 'Paciente con endocarditis aórtica que desarrolla bloqueo AV de primer grado progresivo. ¿Qué sospechas?', opts: ['Efecto del antibiótico', 'Absceso perivalvular', 'Hipotiroidismo', 'Embolia coronaria', 'Pericarditis'], ans: 1,
      exp: 'El absceso del anillo aórtico afecta el sistema de conducción: indicación quirúrgica.', why: ['No.', '', 'No.', 'Menos probable.', 'No.'], ref: 'ESC 2023' }),
    q({ id: 'endocarditis-14', dif: 2, stem: 'Paciente con lupus y vegetaciones estériles en la mitral. ¿Diagnóstico?', opts: ['Endocarditis bacteriana', 'Endocarditis de Libman-Sacks', 'Fiebre reumática', 'Mixoma', 'Prolapso'], ans: 1,
      exp: 'Endocarditis no infecciosa asociada a LES y síndrome antifosfolípido.', why: ['Cultivos negativos sin fiebre.', '', 'No.', 'No.', 'No.'], ref: 'ESC 2023' }),
    q({ id: 'endocarditis-15', dif: 1, stem: '¿Qué válvula se afecta con más frecuencia en la endocarditis en general?', opts: ['Tricúspide', 'Mitral', 'Pulmonar', 'Aórtica sola', 'Ninguna'], ans: 1,
      exp: 'Mitral > aórtica; tricúspide en drogas IV.', why: ['Drogas IV.', '', 'Rara.', 'Segunda.', 'No.'], ref: 'ESC 2023' })
  ]
};
