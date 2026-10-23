// Tema 27 · Trastornos de la deglución (Gastroenterología, semana 1)
const T = { topic: 'deglucion', subj: 'gastro' };
const q = (o) => ({ ...T, ...o });

export default {
  lessons: {
    deglucion: {
      hook: 'Tres preguntas resuelven casi toda disfagia: ¿cuesta iniciar el trago o se atora abajo?, ¿solo sólidos o sólidos y líquidos?, ¿progresiva o intermitente?',
      nn: [['dysphagia', 'Dysphagia'], ['esophageal-motility-disorders', 'Esophageal Motility Disorders']],
      yt: 'dysphagia achalasia',
      anim: 'deglucion',
      video: [
        { ch: 'Dos tipos de disfagia', sc: [
          { v: { k: 'title', t: 'Trastornos de la deglución', s: 'Tema 27 · Gastroenterología' },
            say: 'Bienvenido a la guardia. En este video vas a resolver casi cualquier disfagia con tres preguntas, a reconocer la acalasia y a no caer en la trampa de la pseudoacalasia. Disfagia es dificultad para tragar; odinofagia, dolor al tragar.' },
          { v: { k: 'anim', id: 'deglucion', step: 0 },
            say: 'Primero, cómo debe funcionar. Al tragar, una onda peristáltica empuja el bolo hacia abajo. Al mismo tiempo, el esfínter esofágico inferior se relaja gracias a neuronas inhibitorias que liberan óxido nítrico. Abajo ves la manometría: la onda avanza y la presión del esfínter cae.' },
          { v: { k: 'list', t: 'Tres preguntas', items: ['¿Cuesta iniciar el trago o se atora abajo?', '¿Solo sólidos o sólidos y líquidos?', '¿Intermitente o progresiva?'] },
            say: 'Ahora las tres preguntas. ¿Le cuesta iniciar el trago o siente que la comida se atora más abajo? ¿Le pasa solo con sólidos o con sólidos y líquidos? ¿Es intermitente o progresiva? Con eso tienes la mitad del diagnóstico.' },
          { v: { k: 'vs', cmp: 'disfagia-oro-eso', rows: [0, 2, 3] },
            say: 'La disfagia orofaríngea es para iniciar el trago: tos, atragantamiento, regurgitación por la nariz y voz húmeda. Casi siempre es neurológica, como después de un evento vascular cerebral, y se estudia con videofluoroscopia. La esofágica aparece segundos después, detrás del esternón, y se estudia con endoscopia.' }
        ] },
        { ch: 'Orofaríngea y Zenker', sc: [
          { v: { k: 'anim', id: 'deglucion', step: 4 },
            say: 'Una causa estructural de disfagia orofaríngea es el divertículo de Zenker. El músculo cricofaríngeo no se relaja bien, la presión empuja la mucosa por un punto débil de la pared posterior y se forma una bolsa justo arriba del esfínter.' },
          { v: { k: 'case', t: 'Consulta', p: { name: 'Ramón', age: 76, sex: 'H', skin: '#C98E66', hair: '#D8D8E0', gown: '#7FC8A9' }, text: 'Halitosis, gorgoteo en el cuello al tragar y regurgita comida que comió hace días. Tose al acostarse.' },
            say: 'Imagina a don Ramón, de setenta y seis años. Tiene mal aliento, siente un gorgoteo en el cuello al tragar y regurgita comida sin digerir que comió días antes. Es el cuadro clásico de un Zenker.' },
          { v: { k: 'quiz', q: 'Sospechas un divertículo de Zenker. ¿Primer estudio?', opts: ['Esofagograma con bario', 'Endoscopia a ciegas', 'Manometría'], a: 0 },
            say: 'Pausa. Sospechas un divertículo de Zenker. ¿Cuál es el primer estudio?',
            exp: 'El esofagograma con bario: muestra la bolsa sin riesgo. Una endoscopia a ciegas puede meterse al divertículo y perforarlo. El tratamiento es la miotomía del cricofaríngeo, endoscópica o quirúrgica.' }
        ] },
        { ch: 'Esofágica: mecánica o motora', sc: [
          { v: { k: 'flow', t: 'Disfagia esofágica', steps: ['Solo sólidos → mecánica', 'Progresiva + peso ↓ → cáncer', 'Intermitente → Schatzki o EoE', 'Sólidos y líquidos → motora', 'Progresiva + regurgitación → acalasia'] },
            say: 'En la esofágica, la segunda pregunta decide. Si solo pasan mal los sólidos, algo físico estorba. Progresiva con pérdida de peso: cáncer. Intermitente: anillo de Schatzki o esofagitis eosinofílica. Si fallan sólidos y líquidos desde el inicio, el problema es motor, y la causa clásica es la acalasia.' },
          { v: { k: 'anim', id: 'deglucion', step: 3 },
            say: 'Mira por qué. Un tumor o un anillo estrecha la luz. Los líquidos pasan por el hueco, pero el bolo sólido se atora arriba. En cambio, en un trastorno motor no hay onda que empuje, y fallan los dos desde el principio.' },
          { v: { k: 'list', t: 'Obstrucción mecánica', items: ['Epidermoide: tabaco y alcohol', 'Adenocarcinoma: ERGE, Barrett, obesidad', 'Estenosis péptica: pirosis de años', 'Schatzki: disfagia intermitente a la carne', 'EoE: joven atópico con impactación'] },
            say: 'Las causas mecánicas que debes conocer. El cáncer epidermoide, ligado a tabaco y alcohol, y el adenocarcinoma, ligado a reflujo, Barrett y obesidad. La estenosis péptica en quien tuvo pirosis por años. El anillo de Schatzki, con disfagia intermitente a la carne. Y la esofagitis eosinofílica en jóvenes con alergias.' },
          { v: { k: 'quiz', q: 'Hombre de 66 años, fumador: disfagia a sólidos y luego a líquidos en 3 meses; bajó 9 kg. ¿Primer estudio?', opts: ['Manometría', 'Endoscopia con biopsias', 'Prueba con IBP'], a: 1 },
            say: 'Pausa. Hombre de sesenta y seis años, fumador, con disfagia a sólidos que en tres meses avanzó a líquidos, y bajó nueve kilos. ¿Qué estudio pides primero?',
            exp: 'Endoscopia con biopsias. Disfagia mecánica progresiva con pérdida de peso en un adulto mayor es cáncer de esófago hasta demostrar lo contrario. La manometría solo se pide si la endoscopia es normal.' }
        ] },
        { ch: 'Acalasia', sc: [
          { v: { k: 'anim', id: 'deglucion', step: 1 },
            say: 'Ahora la acalasia. Se pierden las neuronas inhibitorias del plexo mientérico. El esfínter esofágico inferior no se relaja y el cuerpo pierde la peristalsis. La comida se queda arriba, el esófago se dilata y el paciente regurgita comida sin digerir.' },
          { v: { k: 'big', h: 'Esofagograma', t: 'Pico', u: 'de pájaro', s: 'Esófago dilatado que se afila en la unión esofagogástrica, a veces con nivel hidroaéreo.' },
            say: 'En el esofagograma con bario verás la imagen clásica en pico de pájaro: un esófago dilatado que se afila al llegar al estómago. Pero el estándar de oro para el diagnóstico es la manometría de alta resolución.' },
          { v: { k: 'list', t: 'Manometría · Chicago 4.0', items: ['IRP alta: el EEI no se relaja', 'Tipo I: cuerpo sin contracciones', 'Tipo II: presurización panesofágica', 'Tipo III: contracciones prematuras', 'El tipo II es el que mejor responde'] },
            say: 'En la manometría, la presión de relajación integrada está alta, es decir, el esfínter no se relaja, y no hay peristalsis normal. La clasificación de Chicago describe tres tipos: el uno, sin contracciones; el dos, con presurización de todo el esófago, que es el que mejor responde; y el tres, espástico.' },
          { v: { k: 'tip', kind: 'trap', t: 'Adulto mayor con “acalasia”, pocos meses de evolución y pérdida de peso rápida: endoscopia ± USE o TC. Puede ser pseudoacalasia por cáncer.' },
            say: 'La trampa más famosa del tema: un adulto mayor con aparente acalasia, pocos meses de evolución y pérdida de peso rápida. Puede ser una pseudoacalasia por un cáncer de la unión esofagogástrica. Antes de tratar, siempre endoscopia, y si hay duda, ultrasonido endoscópico o tomografía.' },
          { v: { k: 'anim', id: 'deglucion', step: 2 },
            say: 'El tratamiento no recupera la peristalsis. Lo que hace es abrir el esfínter para que la comida pase por gravedad. Hay tres opciones con eficacia parecida: la dilatación neumática, la miotomía de Heller por laparoscopia con funduplicatura parcial y la miotomía endoscópica por vía oral, llamada POEM.' },
          { v: { k: 'flow', t: 'Acalasia: tratamiento', steps: ['Tipo I o II → dilatación, Heller o POEM', 'Tipo III → POEM (miotomía larga)', 'Alto riesgo → toxina botulínica', 'Después: vigilar reflujo'] },
            say: 'Cómo elegir. En los tipos uno y dos, cualquiera de las tres funciona, según la experiencia del centro. En el tipo tres se prefiere el POEM, porque permite una miotomía más larga. La toxina botulínica es para quien no tolera un procedimiento invasivo, porque su efecto dura meses. Y después del POEM, vigila el reflujo.' },
          { v: { k: 'mnemo', t: 'Sólidos = Sólido · Ambos = Ambos', d: 'Solo sólidos: algo sólido estorba (mecánica). Sólidos y líquidos desde el inicio: falla el motor (motora).' },
            say: 'Para no olvidarlo: si solo pasan mal los sólidos, algo sólido estorba, y es mecánica. Si fallan sólidos y líquidos desde el principio, falla el motor, y es motora.' }
        ] },
        { ch: 'Otras causas y perlas', sc: [
          { v: { k: 'list', t: 'Más causas que preguntan', items: ['Esclerodermia: cuerpo débil + EEI hipotónico', 'Espasmo distal: disfagia + dolor torácico', 'Chagas: acalasia secundaria', 'Odinofagia: Candida, CMV, herpes, pastillas'] },
            say: 'Otras causas que preguntan. La esclerodermia da lo contrario de la acalasia: cuerpo sin fuerza y esfínter débil, con reflujo grave. El espasmo esofágico distal da disfagia con dolor torácico que imita un infarto. La enfermedad de Chagas causa acalasia secundaria. Y el dolor al tragar sugiere infección o pastillas como doxiciclina o bisfosfonatos.' },
          { v: { k: 'quiz', q: 'Joven con asma y rinitis, carne impactada por segunda vez. ¿Qué esperas en la biopsia?', opts: ['≥15 eosinófilos por campo', 'Metaplasia intestinal', 'Células en anillo de sello'], a: 0 },
            say: 'Pausa. Hombre joven con asma y rinitis llega con un trozo de carne atorado, y ya le había pasado. ¿Qué esperas en las biopsias?',
            exp: 'Quince o más eosinófilos por campo de alto poder: esofagitis eosinofílica. Se trata con inhibidor de bomba de protones, esteroides deglutidos o dieta de eliminación, y se dilata si hay estenosis.' },
          { v: { k: 'tip', kind: 'pearl', t: 'Solo sólidos, progresiva y con pérdida de peso: endoscopia con biopsias. La acalasia se confirma con manometría, pero nunca la trates sin endoscopia.' },
            say: 'La perla para el examen: disfagia solo a sólidos, progresiva y con pérdida de peso, es cáncer hasta demostrar lo contrario, y el primer estudio es la endoscopia. La acalasia se confirma con manometría, pero nunca la trates sin endoscopia. Ahora ve a las preguntas del tema para fijar lo que viste.' }
        ] }
      ],
      compare: ['disfagia-oro-eso'],
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
</ul>` },
        { h: 'Fisiopatología en 1 minuto', html: `
<ul>
<li><b>Tres fases</b>: oral (voluntaria), faríngea (refleja: se cierra la nasofaringe, la epiglotis protege la vía aérea y se abre el esfínter superior) y esofágica (peristalsis).</li>
<li>El <b>tercio superior</b> del esófago es músculo estriado (por eso miastenia, ELA y miopatías dan disfagia alta); los dos tercios inferiores son músculo liso controlado por el plexo mientérico (de Auerbach).</li>
<li><b>Esfínter superior</b> = cricofaríngeo. <b>Esfínter inferior (EEI)</b>: tono basal alto que se relaja al tragar por neuronas inhibitorias (óxido nítrico y VIP).</li>
<li><b>Acalasia</b>: se pierden esas neuronas → EEI que no relaja + aperistalsis. <b>Esclerodermia</b>: fibrosis del músculo liso → cuerpo débil y EEI hipotónico. <b>Mecánica</b>: luz de &lt;13 mm aprox. → se atoran los sólidos.</li>
</ul>
<div class="tablewrap"><table class="mini">
<tr><th>Trastorno motor (Chicago 4.0)</th><th>Relajación del EEI (IRP)</th><th>Cuerpo esofágico</th></tr>
<tr><td>Acalasia I · II · III</td><td>Alta</td><td>I sin contracción · II presurización panesofágica · III contracciones prematuras</td></tr>
<tr><td>Obstrucción del flujo de la unión EG</td><td>Alta</td><td>Peristalsis presente</td></tr>
<tr><td>Espasmo esofágico distal</td><td>Normal</td><td>≥20% contracciones prematuras (“sacacorchos”)</td></tr>
<tr><td>Esófago hipercontráctil</td><td>Normal</td><td>≥20% contracciones de vigor excesivo</td></tr>
<tr><td>Contractilidad ausente</td><td>Normal</td><td>Sin peristalsis (esclerodermia)</td></tr>
</table></div>` },
        { h: 'Tratamientos clave', html: `
<div class="tablewrap"><table class="mini">
<tr><th>Tratamiento</th><th>Cómo actúa</th><th>Riesgo o efecto adverso clave</th><th>Cuándo o cuidado</th></tr>
<tr><td>Dilatación neumática</td><td>Rompe las fibras del EEI con un balón</td><td>Perforación esofágica</td><td>Acalasia I–II; el paciente debe ser candidato a cirugía si perfora</td></tr>
<tr><td>Miotomía de Heller + funduplicatura parcial</td><td>Corta el EEI por laparoscopia; la funduplicatura limita el reflujo</td><td>Reflujo, perforación</td><td>Acalasia I–II</td></tr>
<tr><td>POEM</td><td>Miotomía endoscópica por túnel submucoso; puede ser larga</td><td>Reflujo frecuente</td><td>De elección en acalasia III</td></tr>
<tr><td>Toxina botulínica</td><td>Bloquea la liberación de acetilcolina en el EEI</td><td>Efecto de meses; fibrosis que dificulta una cirugía posterior</td><td>Ancianos o alto riesgo quirúrgico</td></tr>
<tr><td>Nifedipino o nitratos</td><td>Relajan el músculo liso del EEI</td><td>Hipotensión, cefalea, edema</td><td>Poca eficacia; solo si no hay otra opción</td></tr>
<tr><td>IBP</td><td>Inhibe la bomba H⁺/K⁺</td><td>Bien tolerado</td><td>EoE (primera línea) y estenosis péptica</td></tr>
<tr><td>Budesonida o fluticasona deglutidas</td><td>Esteroide tópico sobre la mucosa</td><td>Candidiasis esofágica</td><td>EoE; no comer ni beber 30 min después</td></tr>
<tr><td>Dupilumab</td><td>Anticuerpo contra el receptor de IL-4 (bloquea IL-4 e IL-13)</td><td>Conjuntivitis, reacción local</td><td>EoE que no responde</td></tr>
<tr><td>Fluconazol</td><td>Azol antifúngico</td><td>QT largo, interacciones (CYP)</td><td>Candidiasis esofágica (empírico en VIH)</td></tr>
</table></div>` },
        { h: 'Cómo lo preguntan en el examen', html: `
<ul>
<li>Adulto mayor después de un EVC que tose al tragar → <b>orofaríngea neurológica</b>: videofluoroscopia.</li>
<li>Anciano con halitosis, gorgoteo y regurgitación de comida de días → <b>Zenker</b>: esofagograma; miotomía del cricofaríngeo.</li>
<li>Fumador y bebedor &gt;50 años con disfagia progresiva de sólidos a líquidos y pérdida de peso → <b>cáncer</b>: endoscopia con biopsias.</li>
<li>Disfagia intermitente a la carne, sin pérdida de peso → <b>anillo de Schatzki</b>: dilatación.</li>
<li>Joven atópico con impactación de alimento → <b>esofagitis eosinofílica</b>: ≥15 eos/campo; IBP o esteroides deglutidos.</li>
<li>Sólidos y líquidos + regurgitación + pico de pájaro → <b>acalasia</b>: manometría y endoscopia antes de tratar.</li>
<li>Raynaud, esclerodactilia y pirosis intensa → <b>esclerodermia</b>: hipomotilidad con EEI hipotónico; IBP.</li>
<li>Mujer con anemia ferropénica, glositis y membrana esofágica alta → <b>Plummer-Vinson</b>: hierro y dilatación; vigilar carcinoma epidermoide.</li>
<li>VIH con CD4 bajos y odinofagia → <b>Candida</b>: fluconazol empírico; si no mejora, endoscopia (CMV, herpes).</li>
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
        'Dellon ES, et al. ACG Clinical Guideline: Eosinophilic Esophagitis. Am J Gastroenterol 2025.',
        'Oude Nijhuis RAB, et al. European guidelines on achalasia (UEG/ESNM). United European Gastroenterol J 2020.'
      ]
    }
  },

  compares: {
    'disfagia-oro-eso': {
      topic: 'deglucion', a: 'Orofaríngea', b: 'Esofágica',
      rows: [
        ['Cuándo', 'Al iniciar el trago', 'Segundos después: “se atora”'],
        ['Síntomas', 'Tos, regurgitación nasal, voz húmeda', 'Opresión retroesternal, regurgitación'],
        ['Causas', 'EVC, Parkinson, ELA, miastenia, Zenker', 'Obstrucción mecánica o trastorno motor'],
        ['Primer estudio', 'Videofluoroscopia', 'Endoscopia']
      ]
    }
  },

  anims: {
    deglucion: {
      title: 'Del trago al estómago',
      steps: [
        { cap: '<b>Deglución normal.</b> Una onda peristáltica empuja el bolo y el esfínter esofágico inferior (EEI) se relaja a tiempo gracias a neuronas inhibitorias (óxido nítrico y VIP). En la manometría, la onda avanza y la presión del EEI cae.',
          labels: [[50, 34, 'Onda peristáltica'], [122, 34, 'EEI se relaja'], [146, 70, 'Estómago'], [28, 89, 'Manometría']] },
        { cap: '<b>Acalasia.</b> Se pierden las neuronas inhibitorias del plexo mientérico: el EEI no se relaja y el cuerpo pierde la peristalsis. La comida se queda arriba, el esófago se dilata y se afila en “pico de pájaro”.',
          labels: [[56, 27, 'Sin peristalsis'], [124, 36, 'EEI cerrado'], [56, 58, 'Comida retenida'], [60, 77, 'Plexo sin neuronas'], [28, 89, 'Manometría']] },
        { cap: '<b>Tratamiento: miotomía.</b> La dilatación neumática, la miotomía de Heller o el POEM rompen o cortan las fibras del EEI. La peristalsis no regresa, pero el esófago se vacía por gravedad. El riesgo después es el reflujo.',
          labels: [[122, 36, 'Miotomía'], [56, 27, 'Sigue sin peristalsis'], [146, 70, 'Se vacía'], [28, 89, 'Manometría']] },
        { cap: '<b>Obstrucción mecánica.</b> Un tumor, un anillo o una estenosis estrechan la luz: el bolo sólido se atora, pero los líquidos pasan. Por eso la disfagia es solo a sólidos; si es progresiva con pérdida de peso, piensa en cáncer.',
          labels: [[80, 33, 'Tumor o anillo'], [40, 113, 'Sólidos'], [118, 113, 'Líquidos']] },
        { cap: '<b>Divertículo de Zenker.</b> El cricofaríngeo no se relaja bien y la presión empuja la mucosa por el triángulo de Killian, arriba del esfínter. La bolsa guarda comida: halitosis, gorgoteo y regurgitación de comida sin digerir.',
          labels: [[30, 22, 'Faringe'], [32, 70, 'Cricofaríngeo'], [90, 46, 'Divertículo'], [126, 10, 'Halitosis'], [34, 104, 'Esófago']] }
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
    ['Infección que causa acalasia secundaria', 'Enfermedad de Chagas'],
    ['Membrana esofágica + anemia ferropénica + glositis', 'Plummer-Vinson: riesgo de carcinoma epidermoide'],
    ['Esofagograma en “sacacorchos” con dolor torácico', 'Espasmo esofágico distal (≥20% contracciones prematuras, EEI relaja normal)'],
    ['Sospecha de perforación esofágica: estudio', 'TC o esofagograma con contraste hidrosoluble (no bario)'],
    ['Qué relaja el EEI al tragar', 'Neuronas inhibitorias del plexo mientérico (óxido nítrico y VIP)'],
    ['Acalasia en la radiografía de tórax', 'Sin burbuja gástrica, mediastino ensanchado, nivel hidroaéreo en el esófago']
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
      ref: 'Chicago 4.0' }),

    q({ id: 'deglucion-11', dif: 2,
      stem: 'Mujer de 46 años con acalasia tipo II. Seis horas después de una dilatación neumática presenta dolor torácico intenso, fiebre de 38.6 °C, taquicardia y crepitación en el cuello. ¿Siguiente paso?',
      opts: ['Esofagograma con bario', 'TC de tórax con contraste oral hidrosoluble (o esofagograma hidrosoluble)', 'Repetir la dilatación', 'ECG y alta si la troponina es normal', 'IBP y analgesia'],
      ans: 1,
      exp: 'La complicación más temida de la dilatación neumática es la perforación esofágica: dolor, fiebre y enfisema subcutáneo. Se confirma con TC o esofagograma con contraste hidrosoluble. Manejo: ayuno, antibióticos de amplio espectro, IBP y valoración quirúrgica o endoscópica urgente.',
      why: ['El bario que se fuga al mediastino causa mediastinitis química; primero se usa contraste hidrosoluble.', '', 'Empeoraría una perforación.', 'El antecedente y el enfisema apuntan a perforación; el ECG no la descarta.', 'Retrasa el diagnóstico de una urgencia con alta mortalidad.'],
      ref: 'ACG 2020 Acalasia' }),

    q({ id: 'deglucion-12', dif: 2,
      stem: 'Mujer de 50 años con episodios de dolor retroesternal opresivo y disfagia intermitente a sólidos y líquidos. Coronariografía normal. Esofagograma en “sacacorchos”. Manometría: relajación normal del EEI y ≥20% de contracciones prematuras. ¿Diagnóstico?',
      opts: ['Acalasia tipo III', 'Espasmo esofágico distal', 'Esófago hipercontráctil (en martillo neumático)', 'Esclerodermia', 'Anillo de Schatzki'],
      ans: 1,
      exp: 'Espasmo esofágico distal (Chicago 4.0): relajación normal del EEI con ≥20% de contracciones prematuras (latencia distal corta). Da dolor torácico que imita angina y disfagia intermitente. Tratamiento: IBP si hay reflujo, relajantes del músculo liso (nitratos, bloqueadores de calcio), tricíclico en dosis baja o POEM en casos graves.',
      why: ['En la acalasia tipo III el EEI no se relaja (IRP alta).', '', 'Tiene contracciones de vigor excesivo, pero no prematuras.', 'Da hipomotilidad con EEI hipotónico.', 'Es mecánico y da disfagia solo a sólidos.'],
      ref: 'Chicago 4.0' }),

    q({ id: 'deglucion-13', dif: 1,
      stem: 'Mujer de 19 años que toma doxiciclina para acné. La toma por la noche con poca agua y se acuesta. Desde ayer tiene dolor intenso al tragar. Endoscopia: úlcera única bien delimitada en el tercio medio del esófago. ¿Diagnóstico?',
      opts: ['Esofagitis por Candida', 'Esofagitis por pastillas (doxiciclina)', 'Esofagitis eosinofílica', 'ERGE con esofagitis erosiva', 'Esofagitis por citomegalovirus'],
      ans: 1,
      exp: 'Esofagitis por pastillas: la tableta se detiene en el tercio medio (donde el arco aórtico comprime el esófago) y causa una úlcera local. Clásicas: doxiciclina y tetraciclinas, AINE, bisfosfonatos, cloruro de potasio y hierro. Se suspende o cambia el fármaco y se toma con abundante agua, de pie, sin acostarse en 30 minutos.',
      why: ['Daría placas blancas en una persona inmunosuprimida.', '', 'Da disfagia e impactación, no una úlcera aguda tras una pastilla.', 'La esofagitis por reflujo es distal, no una úlcera aislada en el tercio medio.', 'Ocurre en inmunosupresión grave.'],
      ref: 'Harrison 21e' }),

    q({ id: 'deglucion-14', dif: 2,
      stem: 'Mujer de 88 años con insuficiencia cardiaca (FEVI 20%) y EPOC grave, con acalasia tipo II confirmada y endoscopia sin tumor. No es candidata a anestesia general ni a cirugía. ¿Tratamiento más adecuado?',
      opts: ['Miotomía de Heller laparoscópica', 'Inyección endoscópica de toxina botulínica en el EEI', 'POEM', 'Dilatación neumática', 'Funduplicatura de Nissen'],
      ans: 1,
      exp: 'La toxina botulínica bloquea la liberación de acetilcolina en el EEI. Es segura y rápida, pero su efecto dura meses y hay que repetirla: se reserva para quien no es candidato a tratamientos definitivos. La dilatación neumática exige poder operar al paciente si se perfora.',
      why: ['Requiere anestesia general y cirugía.', '', 'Requiere anestesia general.', 'Si perfora, necesitaría una cirugía urgente que no tolera.', 'Empeora la obstrucción en la acalasia.'],
      ref: 'ACG 2020 Acalasia' }),

    q({ id: 'deglucion-15', dif: 2,
      stem: 'Mujer de 45 años con disfagia alta intermitente a sólidos, fatiga, glositis, queilitis angular y uñas en cuchara. Hb 8.9 g/dL, VCM 68 fL. El esofagograma muestra una membrana en el esófago cervical. ¿Diagnóstico y riesgo a largo plazo?',
      opts: ['Anillo de Schatzki; adenocarcinoma', 'Síndrome de Plummer-Vinson; carcinoma epidermoide de hipofaringe y esófago', 'Divertículo de Zenker; aspiración', 'Acalasia; carcinoma epidermoide', 'Esofagitis eosinofílica; estenosis'],
      ans: 1,
      exp: 'Plummer-Vinson (Paterson-Kelly): membrana esofágica proximal + anemia ferropénica + glositis o queilitis, casi siempre en mujeres. Se trata con hierro y dilatación de la membrana. Aumenta el riesgo de carcinoma epidermoide de hipofaringe y esófago, por lo que requiere vigilancia.',
      why: ['El Schatzki está en la unión esofagogástrica y no se asocia a anemia ferropénica.', '', 'El Zenker da halitosis y regurgitación, no membranas ni anemia.', 'La acalasia da disfagia a sólidos y líquidos con pico de pájaro.', 'No explica la anemia ni la membrana cervical.'],
      ref: 'Harrison 21e' })
  ]
};
