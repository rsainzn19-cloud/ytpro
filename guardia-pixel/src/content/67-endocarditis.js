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
        { ch: 'Diagnóstico', sc: [
          { v: { k: 'title', t: 'Endocarditis infecciosa', s: 'Semana 9 · Infectología' },
            say: 'Semana nueve: la endocarditis. Es la infección del endocardio, casi siempre de las válvulas. Se sospecha con fiebre y un soplo nuevo, o con fiebre en un usuario de drogas intravenosas o con prótesis valvular.' },
          { v: { k: 'list', t: 'Agentes', items: ['S. aureus: el más común, agudo, drogas IV', 'Estreptococo viridans: válvula dañada, dental, subagudo', 'Estafilococo coagulasa negativo: prótesis', 'Enterococo: procedimientos urológicos', 'S. gallolyticus: cáncer de colon'] },
            say: 'El agente más común es Staphylococcus aureus, agresivo, sobre todo en usuarios de drogas intravenosas, donde afecta la tricúspide. El estreptococo viridans da una forma subaguda en válvulas dañadas tras procedimientos dentales. El estafilococo coagulasa negativo en prótesis. Y si sale Streptococcus gallolyticus, busca cáncer de colon.' },
          { v: { k: 'list', t: 'Criterios mayores de Duke', items: ['Hemocultivos típicos positivos', 'Eco con vegetación, absceso o dehiscencia', 'Insuficiencia valvular nueva'] },
            say: 'Criterios mayores de Duke: hemocultivos positivos con un germen típico, y evidencia en el eco de vegetación, absceso o insuficiencia nueva. Se diagnostica con dos mayores, uno mayor y tres menores, o cinco menores.' }
        ] },
        { ch: 'Tratamiento', sc: [
          { v: { k: 'list', t: 'Empírico', items: ['Válvula nativa: vancomicina más ceftriaxona', 'Prótesis: vancomicina más gentamicina más rifampicina', 'Después: según cultivo, 4 a 6 semanas'] },
            say: 'El tratamiento empírico en válvula nativa es vancomicina más ceftriaxona. En prótesis, vancomicina, gentamicina y rifampicina. Después se ajusta al cultivo, por cuatro a seis semanas.' },
          { v: { k: 'list', t: 'Cirugía si', items: ['Insuficiencia cardiaca por daño valvular', 'Absceso o bloqueo AV', 'Hongos o germen muy resistente', 'Vegetación mayor de 10 mm con embolia', 'Bacteriemia persistente'] },
            say: 'La cirugía se indica si hay insuficiencia cardiaca por la válvula, absceso perivalvular o bloqueo, hongos o gérmenes muy resistentes, vegetaciones grandes con embolias, o bacteriemia que persiste pese al antibiótico.' },
          { v: { k: 'mnemo', t: 'Janeway indoloras, Osler dolorosos', d: 'Janeway: máculas en palmas y plantas (émbolos). Osler: nódulos dolorosos en pulpejos (inmunológicos). Roth: retina.' },
            say: 'Los estigmas: lesiones de Janeway indoloras en palmas y plantas, nódulos de Osler dolorosos en los dedos, y manchas de Roth en la retina.' }
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
