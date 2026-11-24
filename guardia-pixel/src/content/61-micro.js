// Tema 47 · Laboratorio de microbiología (Infectología, semana 3)
const T = { topic: 'micro', subj: 'infecto' };
const q = (o) => ({ ...T, ...o });
const SRC = { short: 'De tu Guía Infecto', vs: 'tu guía', name: 'Guía Infecto · Ximena Cors Cepeda (EMIS 5)', url: 'https://docs.google.com/document/d/1z8GAmFxqoyJtS21XWHwMlvykDNaoEMW07PgJh45aMwY/edit' };

export default {
  lessons: {
    micro: {
      hook: 'El laboratorio de micro se pregunta por asociaciones: qué tinción ve qué bicho, qué medio lo cultiva y cómo se lee un antibiograma (CMI). Y las reglas de oro: cultivos antes del antibiótico y hemocultivos pareados.',
      nn: [], yt: 'gram stain culture media microbiology lab',
      video: [
        { ch: 'El viaje de una muestra', sc: [
          { v: { k: 'title', t: 'Laboratorio de microbiología', s: 'Semana 3 · Infectología' },
            say: 'Semana tres: el laboratorio de microbiología. Cuando pides un cultivo, la muestra pasa por tres estaciones: la tinción, que da una pista en minutos; el cultivo, que identifica en uno o dos días; y el antibiograma, que dice qué sirve. Vamos a recorrerlas con un caso.' },
          { v: { k: 'case', t: 'Uretritis', p: { name: 'Iván', age: 24, sex: 'H', skin: '#D9A07A', hair: '#2A1A12', gown: '#5EEAD4' }, text: 'Secreción uretral purulenta y disuria de 3 días. Relaciones sin condón hace una semana.', vit: { T: '37.2' } },
            say: 'Iván, de veinticuatro años, tiene tres días con secreción purulenta por la uretra y ardor al orinar. Hace una semana tuvo relaciones sin condón. Tomas la secreción. ¿Qué tinción pides y en qué medio se cultiva?' },
          { v: { k: 'list', t: 'Antes de tomar la muestra', items: ['Antes del antibiótico', 'Hemocultivos: 2 a 3 sets de sitios distintos', '20 a 30 mL por set, aerobio + anaerobio', 'Orina: chorro medio', 'Esputo: más de 25 PMN, menos de 10 epiteliales'] },
            say: 'Primero, la muestra. Siempre antes del antibiótico. Los hemocultivos se toman en dos o tres sets de sitios distintos, con veinte a treinta mililitros cada uno, en frasco aerobio y anaerobio. La orina, del chorro medio. Y el esputo es adecuado si tiene más de veinticinco neutrófilos y menos de diez células epiteliales por campo; si no, es saliva.' }
        ] },
        { ch: 'Tinciones', sc: [
          { v: { k: 'vs', a: 'Grampositivo', b: 'Gramnegativo', rows: [['Color', 'Morado', 'Rosa'], ['Pared', 'Peptidoglucano grueso', 'Delgado + membrana externa'], ['Molécula clave', 'Ácido teicoico', 'Lipopolisacárido (endotoxina)'], ['Ejemplos', 'Estafilococo, estreptococo', 'E. coli, Neisseria, Pseudomonas']] },
            say: 'La tinción de Gram separa a las bacterias por su pared. Las grampositivas tienen un peptidoglucano grueso que retiene el cristal violeta y se ven moradas. Las gramnegativas tienen una pared delgada con membrana externa y lipopolisacárido; el alcohol les quita el violeta y la safranina las pinta de rosa.' },
          { v: { k: 'list', t: 'No se ven bien con Gram', items: ['Micobacterias: Ziehl-Neelsen', 'Mycoplasma: no tiene pared', 'Treponema y Leptospira: campo oscuro', 'Intracelulares: Chlamydia, Rickettsia', 'Legionella: plata'] },
            say: 'Algunas no se ven con Gram. Las micobacterias tienen ácidos micólicos y se tiñen con Ziehl Neelsen. Mycoplasma no tiene pared. Treponema y Leptospira son tan delgadas que se ven en campo oscuro. Las intracelulares, como Chlamydia y Rickettsia, y Legionella, que se ve con plata.' },
          { v: { k: 'vs', a: 'Tinción', b: 'Qué busca', rows: [['Ziehl-Neelsen', 'Micobacterias, Nocardia débil', 'Cryptosporidium'], ['Tinta china', 'Cryptococcus', 'Cápsula'], ['Plata', 'Pneumocystis, hongos', 'Legionella, H. pylori'], ['Giemsa', 'Plasmodium, Babesia', 'Trypanosoma'], ['KOH', 'Hongos de piel y uñas', 'Hifas']] },
            say: 'Las otras tinciones: Ziehl Neelsen para ácido alcohol resistentes. Tinta china para la cápsula de Cryptococcus en líquido cefalorraquídeo. Plata para Pneumocystis, hongos, Legionella y Helicobacter. Giemsa para parásitos de la sangre como el plasmodio. Y hidróxido de potasio para hifas en piel y uñas.' },
          { v: { k: 'quiz', q: 'Iván: diplococos gramnegativos dentro de neutrófilos. ¿Qué es?', opts: ['Chlamydia trachomatis', 'Neisseria gonorrhoeae', 'Treponema pallidum'], a: 1 },
            say: 'Pausa. En el Gram de Iván se ven diplococos gramnegativos dentro de los neutrófilos. ¿Qué es?',
            exp: 'Neisseria gonorrhoeae. Diplococos gramnegativos intracelulares en una uretritis purulenta son gonococo. Chlamydia no se ve con Gram porque es intracelular obligada, y suele coexistir, por eso se tratan ambas.' }
        ] },
        { ch: 'Medios de cultivo', sc: [
          { v: { k: 'list', t: 'Agar sangre: hemólisis', items: ['Alfa (verde): neumococo, viridans', 'Beta (total): S. pyogenes, agalactiae, aureus', 'Gamma (ninguna): enterococo'] },
            say: 'En agar sangre se ve la hemólisis. Alfa es parcial y deja un halo verde: neumococo y estreptococos viridans. Beta es total y deja un halo transparente: Streptococcus pyogenes, agalactiae y estafilococo dorado. Gamma es ninguna: enterococo.' },
          { v: { k: 'vs', a: 'Medio', b: 'Para qué', rows: [['Chocolate', 'H. influenzae, Neisseria', 'Factores V y X'], ['Thayer-Martin', 'Gonococo', 'Selectivo'], ['MacConkey', 'Gramnegativos', 'Lactosa positivo: rosa'], ['BCYE', 'Legionella', 'Carbón y cisteína'], ['Löwenstein-Jensen', 'M. tuberculosis', '2 a 6 semanas'], ['Sabouraud', 'Hongos', '—']] },
            say: 'Los medios que preguntan: agar chocolate para Haemophilus y Neisseria, porque aporta los factores cinco y diez. Thayer Martin, selectivo para gonococo. MacConkey para gramnegativos, donde los que fermentan lactosa, como E. coli y Klebsiella, se ven rosas. BCYE con carbón y cisteína para Legionella. Löwenstein Jensen para tuberculosis. Y Sabouraud para hongos.' },
          { v: { k: 'list', t: 'Pistas de color y olor', items: ['Pseudomonas: azul-verde, olor a uvas', 'S. aureus: colonias doradas', 'Serratia: rojo', 'E. coli en EMB: verde metálico', 'Actinomyces: gránulos de azufre'] },
            say: 'Y pistas de color: pseudomonas da pigmento azul verde y huele a uvas; el estafilococo dorado hace colonias doradas; Serratia, rojas; E. coli brilla verde metálico en EMB; y Actinomyces forma gránulos amarillos como de azufre.' }
        ] },
        { ch: 'Antibiograma', sc: [
          { v: { k: 'big', h: 'CMI', t: 'Concentración mínima inhibitoria', s: 'La menor concentración que impide el crecimiento. Se compara con el punto de corte: sensible, intermedio o resistente.' },
            say: 'El antibiograma reporta la concentración mínima inhibitoria: la menor concentración del antibiótico que impide que la bacteria crezca. Se compara con el punto de corte de ese antibiótico para decir si es sensible, intermedio o resistente.' },
          { v: { k: 'tip', kind: 'trap', t: 'No compares la CMI de un antibiótico con la de otro: cada uno tiene su punto de corte. Elige por S/I/R, sitio y toxicidad.' },
            say: 'Trampa: no elijas el antibiótico con la CMI más baja. Cada fármaco tiene su propio punto de corte, así que comparar números entre antibióticos no sirve. Elige entre los sensibles según el sitio de infección, la toxicidad y el espectro.' },
          { v: { k: 'list', t: '¿Contaminante o real?', items: ['1 de 2 sets con estafilococo coagulasa negativo: contaminante', 'S. aureus: nunca contaminante', 'Candida: nunca contaminante', 'Gramnegativos: nunca contaminantes'] },
            say: 'Un hemocultivo positivo en un solo set con estafilococo coagulasa negativo suele ser contaminante de la piel. Pero estafilococo dorado, Candida o un gramnegativo en sangre nunca se consideran contaminantes: siempre se tratan.' },
          { v: { k: 'quiz', q: 'Hemocultivo: 1 de 2 sets con S. aureus. ¿Qué haces?', opts: ['Repetir y no tratar: contaminante', 'Tratar como bacteriemia real', 'Esperar al tercer set'], a: 1 },
            say: 'Pausa. Uno de dos sets de hemocultivo creció estafilococo dorado. ¿Contaminante?',
            exp: 'No. El estafilococo dorado en sangre siempre es real: se trata como bacteriemia, se repiten hemocultivos para ver que se negativicen y se pide ecocardiograma para descartar endocarditis.' }
        ] },
        { ch: 'Cierre', sc: [
          { v: { k: 'list', t: 'Iván: final del caso', items: ['Gram: diplococos gramnegativos intracelulares', 'Cultivo en Thayer-Martin o NAAT', 'Ceftriaxona 500 mg IM dosis única', '+ doxiciclina por Chlamydia', 'Tratar a la pareja; VIH y sífilis'] },
            say: 'Iván tiene gonorrea. Se confirma con cultivo en Thayer Martin o con prueba de amplificación de ácidos nucleicos. Recibe ceftriaxona quinientos miligramos intramuscular en dosis única, más doxiciclina siete días para cubrir Chlamydia. Se trata a su pareja y se le ofrecen pruebas de VIH y sífilis.' },
          { v: { k: 'tip', kind: 'pearl', t: 'Tinta china en LCR = Cryptococcus en VIH con CD4 <100. Hoy se prefiere el antígeno criptocócico, más sensible.' },
            say: 'Perla: levaduras encapsuladas con tinta china en el líquido cefalorraquídeo de un paciente con VIH avanzado es Cryptococcus. Hoy se prefiere medir el antígeno criptocócico, que es más sensible.' },
          { v: { k: 'mnemo', t: 'Chocolate para Haemophilus, carbón para Legionella', d: 'Thayer-Martin: gonococo. MacConkey rosa: fermenta lactosa. Löwenstein: TB. Tinta china: Cryptococcus.' },
            say: 'Llévate los pares: chocolate para Haemophilus, carbón para Legionella, Thayer Martin para gonococo, Löwenstein para tuberculosis y tinta china para Cryptococcus. Ahora prueba el algoritmo del Gram en el taller.' }
        ] }
      ],
      sections: [
        { h: 'Tinciones', html: `
<div class="tablewrap"><table class="mini">
<tr><th>Tinción</th><th>Qué ve</th></tr>
<tr><td><b>Gram</b> (cristal violeta, lugol, alcohol-acetona, safranina)</td><td>Grampositivos morados (peptidoglucano grueso, ácido teicoico); gramnegativos rosas (LPS, membrana externa). No tiñen bien: micobacterias, <i>Mycoplasma</i> (sin pared), <i>Treponema</i>, <i>Legionella</i>, <i>Rickettsia</i>, <i>Chlamydia</i> (intracelulares)</td></tr>
<tr><td><b>Ziehl-Neelsen</b> / Kinyoun / auramina-rodamina</td><td>Ácido-alcohol resistentes: <i>Mycobacterium</i>, <i>Nocardia</i> (débil), <i>Cryptosporidium</i></td></tr>
<tr><td><b>Tinta china</b></td><td><i>Cryptococcus</i> (cápsula); hoy se prefiere antígeno criptocócico</td></tr>
<tr><td><b>Plata</b> (Grocott/metenamina)</td><td>Hongos, <i>Pneumocystis</i>, <i>Legionella</i>, <i>H. pylori</i>, <i>Bartonella</i></td></tr>
<tr><td><b>Giemsa/Wright</b></td><td><i>Plasmodium</i>, <i>Babesia</i>, <i>Trypanosoma</i>, <i>Borrelia</i>, <i>Chlamydia</i>, <i>Rickettsia</i></td></tr>
<tr><td><b>KOH</b></td><td>Hongos en piel, uñas y secreción vaginal</td></tr>
<tr><td><b>PAS</b></td><td><i>Tropheryma whipplei</i> (Whipple), hongos</td></tr>
<tr><td><b>Campo oscuro</b></td><td><i>Treponema pallidum</i>, <i>Leptospira</i></td></tr>
</table></div>` },
        { h: 'Medios de cultivo', html: `
<ul>
<li><b>Agar sangre</b>: hemólisis α (verde, parcial: <i>S. pneumoniae</i>, viridans), β (total: <i>S. pyogenes</i>, <i>S. agalactiae</i>, <i>S. aureus</i>), γ (ninguna: enterococo).</li>
<li><b>Chocolate</b> (factores V y X): <i>H. influenzae</i>, <i>Neisseria</i>. <b>Thayer-Martin</b> (selectivo: vancomicina, colistina, nistatina): <i>Neisseria</i> (gonococo).</li>
<li><b>MacConkey</b>: gramnegativos; fermentadores de lactosa rosas (<i>E. coli</i>, <i>Klebsiella</i>, <i>Enterobacter</i>). <b>EMB</b>: <i>E. coli</i> verde metálico. <b>Hektoen/XLD</b>: <i>Salmonella</i> y <i>Shigella</i>. <b>TCBS</b>: <i>Vibrio</i>.</li>
<li><b>Sal-manitol</b>: <i>S. aureus</i> (amarillo). <b>Löwenstein-Jensen/Middlebrook</b>: <i>M. tuberculosis</i>. <b>BCYE</b> (carbón, cisteína, hierro): <i>Legionella</i>, <i>Francisella</i>, <i>Brucella</i>. <b>Bordet-Gengou/Regan-Lowe</b>: <i>B. pertussis</i>. <b>Löffler/telurito</b>: <i>C. diphtheriae</i>. <b>Sabouraud</b>: hongos. <b>Eaton</b>: <i>Mycoplasma</i>. <b>Mueller-Hinton</b>: antibiogramas.</li>
<li>Pigmentos: <i>Pseudomonas</i> azul-verde (piocianina, olor a uvas), <i>S. aureus</i> dorado, <i>Serratia</i> rojo, <i>Actinomyces</i> gránulos de azufre.</li>
</ul>` },
        { h: 'Antibiograma y toma de muestras', html: `
<ul>
<li><b>CMI</b> (concentración mínima inhibitoria): la menor concentración que inhibe el crecimiento visible; se compara con <b>puntos de corte</b> (CLSI/EUCAST) → sensible, intermedio (sensible a dosis aumentada), resistente. No se comparan CMI de distintos antibióticos entre sí. <b>CMB</b>: concentración bactericida.</li>
<li>Métodos: dilución (en caldo/agar), difusión en disco (Kirby-Bauer, halo), E-test, automatizados (VITEK); identificación rápida por <b>MALDI-TOF</b> y PCR multiplex.</li>
<li><b>Hemocultivos</b>: 2–3 sets (aerobio + anaerobio) de sitios distintos, <b>antes del antibiótico</b>, 20–30 mL por set. Un solo set con estafilococo coagulasa negativo suele ser contaminante; <i>S. aureus</i>, <i>Candida</i> o gramnegativos nunca se consideran contaminantes.</li>
<li><b>Urocultivo</b> del chorro medio; &gt;10⁵ UFC/mL en mujer sintomática (menos en sondas o con piuria). <b>Esputo</b> adecuado: &gt;25 PMN y &lt;10 células epiteliales por campo.</li>
<li>Serología: IgM aguda, IgG pasada; seroconversión ×4 en sueros pareados. PCR: rápida, no distingue organismo vivo de muerto.</li>
</ul>` },
        { h: 'Cómo lo preguntan en el examen', html: `
<ul>
<li>Diplococos gramnegativos en uretritis → <i>N. gonorrhoeae</i>; cultivo en <b>Thayer-Martin</b>.</li>
<li>Cocobacilo gramnegativo que crece en <b>chocolate</b> → <i>H. influenzae</i>.</li>
<li>LCR con levaduras encapsuladas en <b>tinta china</b> → <i>Cryptococcus</i>.</li>
<li>Neumonía grave con antígeno urinario + y cultivo en <b>BCYE</b> → <i>Legionella</i>.</li>
<li>Colonias verde metálico en EMB → <i>E. coli</i>.</li>
<li>Un hemocultivo con <i>S. epidermidis</i> de 2 sets → probable <b>contaminante</b>.</li>
</ul>` }
      ],
      mnemo: { t: 'Gram morado = grueso; rosa = LPS', d: 'Grampositivos: peptidoglucano grueso. Gramnegativos: membrana externa con LPS (endotoxina). Ziehl-Neelsen: micobacterias. Tinta china: Cryptococcus. Plata: Pneumocystis.' },
      pearl: 'Toma los hemocultivos (2 sets de sitios distintos) antes de la primera dosis de antibiótico: una sola dosis puede negativizarlos.',
      trap: 'S. aureus en un solo hemocultivo nunca es contaminante: requiere tratamiento, eco y búsqueda de foco.',
      guide: [
        'CLSI/EUCAST: la categoría “I” ahora significa “sensible a exposición aumentada” (dosis altas), no “dudoso”.',
        'Tu guía incluye medios clásicos; en la práctica la identificación se hace cada vez más por MALDI-TOF y PCR.'
      ],
      refs: [
        'Murray PR, Rosenthal KS, Pfaller MA. Medical Microbiology, 9th ed.',
        'Miller JM, et al. Guide to utilization of the microbiology laboratory for diagnosis of infectious diseases: IDSA/ASM 2024. Clin Infect Dis 2024.',
        'CLSI M100: Performance Standards for Antimicrobial Susceptibility Testing, 2024.'
      ]
    }
  },

  guias: {
    micro: { src: SRC,
      puntos: [
        'Gram: cristal violeta → lugol → alcohol → safranina; positivos con peptidoglucano grueso, negativos con LPS y 2 membranas.',
        'Ziehl-Neelsen (TB), Giemsa (Chlamydia, Rickettsia, Plasmodium, Borrelia), plata (hongos, Pneumocystis, Legionella, H. pylori), tinta china (Cryptococcus), campo oscuro (sífilis).',
        'Medios: sangre (hemólisis α/β/γ), chocolate (H. flu, Neisseria), Thayer-Martin, Bordet-Gengou, Löffler, Löwenstein-Jensen, MacConkey, EMB, TCBS, XLD, Sabouraud, Mueller-Hinton.',
        'Pigmentos: Actinomyces (azufre), S. aureus (oro), Pseudomonas (azul-verde), Serratia (rojo).',
        'CMI: concentración más baja que inhibe; inóculo 5 × 10⁵ UFC/mL; a mayor inóculo, mayor CMI. CMB: bactericida.'
      ],
      ojo: ['Para Cryptococcus hoy se prefiere el <b>antígeno criptocócico</b> en LCR o sangre sobre la tinta china (más sensible).'],
      cards: [['Gránulos de azufre', 'Actinomyces']] }
  },

  cards: [
    ['Grampositivo', 'Morado; peptidoglucano grueso'],
    ['Gramnegativo', 'Rosa; membrana externa con LPS'],
    ['Ziehl-Neelsen', 'Micobacterias, Nocardia (débil)'],
    ['Tinta china', 'Cryptococcus'],
    ['Tinción de plata', 'Pneumocystis, hongos, Legionella'],
    ['Giemsa', 'Plasmodium, Babesia, Borrelia, Chlamydia'],
    ['Campo oscuro', 'Treponema pallidum'],
    ['Thayer-Martin', 'Neisseria gonorrhoeae'],
    ['Agar chocolate', 'Haemophilus influenzae (factores V y X)'],
    ['BCYE', 'Legionella'],
    ['Löwenstein-Jensen', 'M. tuberculosis'],
    ['TCBS', 'Vibrio cholerae'],
    ['MacConkey', 'Gramnegativos; fermentadores de lactosa rosas'],
    ['Hemólisis α', 'S. pneumoniae, viridans'],
    ['Hemólisis β', 'S. pyogenes, S. agalactiae, S. aureus'],
    ['CMI', 'Menor concentración que inhibe el crecimiento'],
    ['Esputo adecuado', '>25 PMN y <10 células epiteliales']
  ],

  questions: [
    q({ id: 'micro-01', dif: 1, stem: 'Hombre con uretritis purulenta. Gram: diplococos gramnegativos intracelulares. ¿En qué medio se cultiva el agente?', opts: ['MacConkey', 'Thayer-Martin', 'Löwenstein-Jensen', 'TCBS', 'Sabouraud'], ans: 1,
      exp: 'N. gonorrhoeae: agar chocolate selectivo (Thayer-Martin).', why: ['No.', '', 'TB.', 'Vibrio.', 'Hongos.'], ref: 'Murray 9ª ed.' }),
    q({ id: 'micro-02', dif: 1, stem: 'Paciente con VIH y meningitis; en el LCR se ven levaduras con cápsula en tinta china. ¿Agente?', opts: ['Candida', 'Cryptococcus neoformans', 'Histoplasma', 'Aspergillus', 'Toxoplasma'], ans: 1,
      exp: 'Levadura encapsulada en tinta china: Cryptococcus. Antígeno criptocócico es más sensible.', why: ['No tiene cápsula.', '', 'No.', 'Moho.', 'Parásito.'], ref: 'Murray 9ª ed.' }),
    q({ id: 'micro-03', dif: 2, stem: '¿Qué tinción usarías para identificar Pneumocystis jirovecii en lavado broncoalveolar?', opts: ['Gram', 'Plata (metenamina) o inmunofluorescencia', 'Ziehl-Neelsen', 'Tinta china', 'Campo oscuro'], ans: 1,
      exp: 'Los quistes de Pneumocystis se tiñen con plata o inmunofluorescencia.', why: ['No.', '', 'No.', 'No.', 'No.'], ref: 'Murray 9ª ed.' }),
    q({ id: 'micro-04', dif: 2, stem: 'Organismo que no se ve en la tinción de Gram porque carece de pared celular.', opts: ['S. aureus', 'Mycoplasma pneumoniae', 'E. coli', 'Pseudomonas', 'Klebsiella'], ans: 1,
      exp: 'Mycoplasma no tiene peptidoglucano (por eso tampoco responde a betalactámicos).', why: ['Grampositivo.', '', 'Gramnegativo.', 'Gramnegativo.', 'Gramnegativo.'], ref: 'Murray 9ª ed.' }),
    q({ id: 'micro-05', dif: 2, stem: 'Colonias con pigmento azul-verde y olor a uvas en un paciente quemado. ¿Agente?', opts: ['S. aureus', 'Pseudomonas aeruginosa', 'Serratia', 'Klebsiella', 'Proteus'], ans: 1,
      exp: 'Pseudomonas: piocianina y pioverdina; olor a uva; quemados y fibrosis quística.', why: ['Dorado.', '', 'Rojo.', 'Mucoide.', 'Swarming y olor a pescado.'], ref: 'Murray 9ª ed.' }),
    q({ id: 'micro-06', dif: 2, stem: 'Neumonía grave con hiponatremia; el laboratorio usa agar con carbón, cisteína y hierro. ¿Agente?', opts: ['Neumococo', 'Legionella', 'Mycoplasma', 'Klebsiella', 'Haemophilus'], ans: 1,
      exp: 'BCYE: Legionella (requiere cisteína y hierro).', why: ['Agar sangre.', '', 'Eaton.', 'MacConkey.', 'Chocolate.'], ref: 'Murray 9ª ed.' }),
    q({ id: 'micro-07', dif: 2, stem: 'Hemocultivos: 1 de 2 sets con Staphylococcus epidermidis, paciente sin catéter ni prótesis y asintomático. ¿Interpretación?', opts: ['Bacteriemia verdadera; vancomicina', 'Probable contaminante', 'Endocarditis segura', 'Sepsis', 'Repetir antibiótico de amplio espectro'], ans: 1,
      exp: 'Estafilococo coagulasa negativo en un solo set sin dispositivos suele ser contaminación de la piel.', why: ['Poco probable.', '', 'No.', 'No.', 'No.'], ref: 'IDSA/ASM 2024' }),
    q({ id: 'micro-08', dif: 2, stem: 'Hemocultivo positivo en 1 de 2 sets con Staphylococcus aureus. ¿Conducta?', opts: ['Contaminante: ignorar', 'Tratar como bacteriemia verdadera, repetir hemocultivos y ecocardiograma', 'Solo repetir en 1 semana', 'Antibiótico oral 3 días', 'Nada'], ans: 1,
      exp: 'S. aureus nunca se considera contaminante.', why: ['Peligroso.', '', 'Insuficiente.', 'Insuficiente.', 'Peligroso.'], ref: 'IDSA/ASM 2024' }),
    q({ id: 'micro-09', dif: 2, stem: '¿Qué indica una CMI por debajo del punto de corte?', opts: ['Resistencia', 'Sensibilidad', 'Que es el antibiótico más potente comparado con otros', 'Contaminación', 'Tolerancia'], ans: 1,
      exp: 'Se compara con el punto de corte de ese antibiótico; no se comparan CMI entre distintos antibióticos.', why: ['Al revés.', '', 'Error común.', 'No.', 'No.'], ref: 'CLSI 2024' }),
    q({ id: 'micro-10', dif: 1, stem: '¿Qué tipo de hemólisis produce Streptococcus pneumoniae en agar sangre?', opts: ['Beta', 'Alfa (verde)', 'Gamma', 'Doble', 'Ninguna crece'], ans: 1,
      exp: 'Hemólisis parcial (α); sensible a optoquina, soluble en bilis.', why: ['S. pyogenes.', '', 'Enterococo.', 'No.', 'No.'], ref: 'Murray 9ª ed.' }),
    q({ id: 'micro-11', dif: 2, stem: '¿Qué muestra de esputo es adecuada para cultivo?', opts: ['<10 PMN y >25 epiteliales', '>25 PMN y <10 células epiteliales por campo', 'Cualquiera', 'Solo saliva', 'Con >25 epiteliales'], ans: 1,
      exp: 'Muchas células epiteliales indican contaminación con saliva.', why: ['Es saliva.', '', 'No.', 'No.', 'Contaminada.'], ref: 'IDSA/ASM 2024' }),
    q({ id: 'micro-12', dif: 2, stem: 'Absceso con gránulos amarillos (“de azufre”) y fístulas en la mandíbula. ¿Agente?', opts: ['Nocardia', 'Actinomyces israelii', 'S. aureus', 'TB', 'Candida'], ans: 1,
      exp: 'Actinomyces: grampositivo ramificado anaerobio; penicilina prolongada.', why: ['Es aerobio, ácido-alcohol débil y en inmunosuprimidos.', '', 'No da gránulos de azufre.', 'No.', 'No.'], ref: 'Murray 9ª ed.' }),
    q({ id: 'micro-13', dif: 2, stem: '¿Qué medio se usa para Vibrio cholerae?', opts: ['TCBS', 'Thayer-Martin', 'Löffler', 'Eaton', 'BCYE'], ans: 0,
      exp: 'Tiosulfato-citrato-sales biliares-sacarosa.', why: ['', 'Neisseria.', 'Difteria.', 'Mycoplasma.', 'Legionella.'], ref: 'Murray 9ª ed.' }),
    q({ id: 'micro-14', dif: 2, stem: 'Paciente inmunosuprimido con absceso cerebral y pulmonar; bacilos grampositivos ramificados que se tiñen débilmente con ácido-alcohol. ¿Agente y tratamiento?', opts: ['Actinomyces; penicilina', 'Nocardia; TMP-SMX', 'TB; RIPE', 'Aspergillus; voriconazol', 'Listeria; ampicilina'], ans: 1,
      exp: 'Nocardia: aerobio, ácido-alcohol débil, en inmunosuprimidos; TMP-SMX.', why: ['No es ácido-alcohol resistente.', '', 'No ramificado.', 'Hongo.', 'No ramificado.'], ref: 'Murray 9ª ed.' }),
    q({ id: 'micro-15', dif: 1, stem: '¿Cuándo se deben tomar los hemocultivos en un paciente con sospecha de sepsis?', opts: ['Después de 3 días de antibiótico', 'Antes de la primera dosis de antibiótico (sin retrasarla)', 'Solo si hay fiebre >40', 'Nunca', 'Al alta'], ans: 1,
      exp: 'Aumenta el rendimiento; no deben retrasar el antibiótico más de ~45 min.', why: ['Baja el rendimiento.', '', 'No.', 'No.', 'No.'], ref: 'IDSA/ASM 2024' })
  ]
};
