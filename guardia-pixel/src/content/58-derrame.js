// Tema 59 · Derrame pleural (Neumología, semana 10)
const T = { topic: 'derrame', subj: 'neumo' };
const q = (o) => ({ ...T, ...o });
const SRC = { short: 'De tu Guía Neumo', vs: 'tu guía', name: 'Guía Neumo · Ximena Cors Cepeda (EMIS 5)', url: 'https://docs.google.com/document/d/1by5z7_drpzSNZPiEH1e9SHIx5ui6osaTPySJ1mnDAWg/edit' };

export default {
  lessons: {
    derrame: {
      hook: 'Ante un derrame: ¿trasudado o exudado? Lo deciden los criterios de Light (proteínas y DHL). El trasudado se trata tratando la causa (IC, cirrosis); el exudado se estudia. Y si un derrame paraneumónico tiene pH <7.2, glucosa <60 o pus: sonda.',
      nn: [], yt: 'pleural effusion Light criteria parapneumonic empyema',
      video: [
        { ch: 'Qué es un derrame', sc: [
          { v: { k: 'title', t: 'Derrame pleural', s: 'Semana 10 · Neumología' },
            say: 'Semana diez: el derrame pleural. Entre las dos pleuras siempre hay unos mililitros de líquido; hay derrame cuando se produce de más o se absorbe de menos. Todo el tema gira alrededor de una pregunta: es trasudado o exudado. Vamos con dos pacientes.' },
          { v: { k: 'case', t: 'Neumonía que no mejora', p: { name: 'Héctor', age: 48, sex: 'H', skin: '#C98B62', hair: '#2A1A12', gown: '#9FD8FF' }, text: 'Día 4 de ceftriaxona + azitromicina por neumonía derecha. Sigue con fiebre y dolor pleurítico. Matidez y murmullo abolido en la base derecha.', vit: { T: '38.8', FR: '26', SpO2: '92%' } },
            say: 'Héctor, de cuarenta y ocho años, lleva cuatro días con ceftriaxona y azitromicina por una neumonía derecha. Sigue con fiebre y le duele el costado al respirar. En la base derecha hay matidez, las vibraciones vocales están disminuidas y no se escucha el murmullo vesicular.' },
          { v: { k: 'list', t: 'Exploración del derrame', items: ['Matidez a la percusión', 'Vibraciones vocales disminuidas', 'Murmullo vesicular abolido', 'Frote pleural al inicio', 'Grande: desvía la tráquea al lado contrario'] },
            say: 'Esa es la exploración del derrame: matidez, vibraciones vocales disminuidas y murmullo abolido. Al inicio puede haber frote pleural. Si es muy grande, empuja el mediastino y desvía la tráquea hacia el lado contrario. Compáralo con la consolidación, donde las vibraciones aumentan.' },
          { v: { k: 'list', t: 'Imagen', items: ['Rx PA: borra el ángulo con más de 200 mL', 'Decúbito lateral: detecta 50 mL', 'USG: el más sensible y guía la punción', 'TC: pleura y pulmón debajo'] },
            say: 'En la radiografía de frente, el ángulo costofrénico se borra cuando hay más de doscientos mililitros; en decúbito lateral se ven desde cincuenta. El ultrasonido es el más sensible, distingue líquido de engrosamiento y guía la punción. La tomografía muestra la pleura y el pulmón que está debajo.' }
        ] },
        { ch: 'Trasudado o exudado', sc: [
          { v: { k: 'vs', a: 'Trasudado', b: 'Exudado', rows: [['Mecanismo', 'Presión hidrostática u oncótica', 'Permeabilidad por inflamación'], ['Causa #1', 'Insuficiencia cardiaca', 'Paraneumónico'], ['Otras', 'Cirrosis, nefrótico, diálisis', 'Cáncer, TB, TEP, pancreatitis, AR'], ['Lado', 'Bilateral casi siempre', 'Unilateral con frecuencia'], ['Qué hacer', 'Tratar la causa', 'Estudiar el líquido']] },
            say: 'El trasudado se debe a presiones: sube la hidrostática o baja la oncótica. La causa número uno de derrame en general es la insuficiencia cardiaca, seguida de cirrosis y síndrome nefrótico. Suele ser bilateral y se trata tratando la causa. El exudado se debe a inflamación de la pleura: el más común es el paraneumónico, y le siguen cáncer, tuberculosis, tromboembolia y pancreatitis. Se estudia.' },
          { v: { k: 'list', t: 'Criterios de Light: exudado si hay uno', items: ['Proteínas pleura entre suero mayor de 0.5', 'DHL pleura entre suero mayor de 0.6', 'DHL pleural mayor de 2/3 del límite normal'] },
            say: 'Los criterios de Light deciden. Es exudado si cumple al menos uno: proteínas del líquido entre las del suero mayor de cero punto cinco; DHL del líquido entre la del suero mayor de cero punto seis; o DHL del líquido mayor de dos tercios del límite superior normal del suero.' },
          { v: { k: 'tip', kind: 'trap', t: 'Con diurético, un trasudado cardiaco puede salir exudado por Light. Gradiente de albúmina suero-pleura >1.2 g/dL o NT-proBNP alto = trasudado.' },
            say: 'Trampa: Light es muy sensible para exudado, y en un paciente con insuficiencia cardiaca que ya recibió diuréticos, el trasudado se concentra y puede parecer exudado. Calcula el gradiente de albúmina entre suero y pleura: si es mayor de uno punto dos, es trasudado.' },
          { v: { k: 'quiz', q: 'Proteínas pleura/suero 0.7, DHL pleura/suero 0.4. ¿Qué es?', opts: ['Trasudado', 'Exudado', 'No se puede saber'], a: 1 },
            say: 'Pausa. El cociente de proteínas es cero punto siete y el de DHL cero punto cuatro. ¿Trasudado o exudado?',
            exp: 'Exudado. Basta un criterio de Light, y el de proteínas es mayor de cero punto cinco. No importa que la DHL no cumpla.' }
        ] },
        { ch: 'Pistas del líquido', sc: [
          { v: { k: 'list', t: 'Qué te dice el líquido', items: ['pH menor de 7.2 y glucosa baja: empiema, AR, TB, cáncer', 'Linfocitos y ADA mayor de 40: tuberculosis', 'Amilasa alta: pancreatitis o rotura esofágica', 'Triglicéridos mayor de 110: quilotórax', 'Hto pleural mayor de 50% del sérico: hemotórax'] },
            say: 'Una vez que es exudado, el líquido da pistas. pH menor de siete punto dos con glucosa baja: empiema, artritis reumatoide, tuberculosis o cáncer. Linfocitos con adenosina desaminasa mayor de cuarenta: tuberculosis. Amilasa alta: pancreatitis o rotura de esófago. Triglicéridos mayores de ciento diez: quilotórax. Y hematocrito pleural mayor de la mitad del de la sangre: hemotórax.' },
          { v: { k: 'case', t: 'Otro paciente: derrame linfocítico', p: { name: 'Lorena', age: 30, sex: 'M', skin: '#D9A07A', hair: '#2A1A12', gown: '#9FD8FF' }, text: 'Fiebre y sudoración nocturna de 3 semanas. Derrame izquierdo moderado. Exudado con 85% linfocitos y ADA 72.', vit: { ADA: '72', Linfos: '85%' } },
            say: 'Lorena, de treinta años, tiene tres semanas con fiebre y sudoración nocturna y un derrame izquierdo. El líquido es exudado, con ochenta y cinco por ciento de linfocitos y adenosina desaminasa de setenta y dos.' },
          { v: { k: 'tip', kind: 'pearl', t: 'Pleuritis TB: exudado linfocítico con ADA >40. El cultivo del líquido casi siempre sale negativo; la biopsia pleural confirma. Se trata con RIPE.' },
            say: 'Perla: eso es pleuritis tuberculosa. El cultivo del líquido casi siempre sale negativo porque hay pocos bacilos; lo que confirma es la biopsia pleural con granulomas. En la práctica, con un exudado linfocítico y adenosina desaminasa alta en zona endémica, se inicia tratamiento antifímico.' }
        ] },
        { ch: 'Paraneumónico y empiema', sc: [
          { v: { k: 'vs', a: 'No complicado', b: 'Complicado o empiema', rows: [['pH', '7.2 o más', 'Menor de 7.2'], ['Glucosa', '60 o más', 'Menor de 60'], ['Gram o cultivo', 'Negativo', 'Positivo o pus franco'], ['Aspecto', 'Libre', 'Tabicado'], ['Manejo', 'Solo antibiótico', 'Antibiótico + sonda pleural']] },
            say: 'El derrame paraneumónico no complicado tiene pH de siete punto dos o más, glucosa de sesenta o más, Gram negativo y corre libre: basta el antibiótico. Si el pH baja de siete punto dos, la glucosa de sesenta, el Gram o el cultivo son positivos, está tabicado o sale pus, es complicado o empiema, y necesita sonda pleural además del antibiótico.' },
          { v: { k: 'flow', t: 'Si es empiema', steps: ['Sonda pleural', 'Antibiótico con anaerobios', 'Tabicado: tPA + DNasa intrapleural', 'Falla: toracoscopia o decorticación'] },
            say: 'En el empiema: sonda pleural y un antibiótico que cubra anaerobios, como ampicilina con sulbactam. Si está tabicado, se instilan alteplasa y desoxirribonucleasa por la sonda. Y si a pesar de eso no drena, cirugía: toracoscopia o decorticación.' },
          { v: { k: 'quiz', q: 'Héctor: líquido turbio, pH 7.05, glucosa 38, Gram con cocos positivos. ¿Qué haces?', opts: ['Cambiar a meropenem y observar', 'Colocar sonda pleural y seguir antibiótico', 'Repetir toracocentesis en una semana'], a: 1 },
            say: 'Pausa. Puncionan a Héctor: líquido turbio, pH de siete punto cero cinco, glucosa de treinta y ocho y cocos grampositivos. ¿Qué haces?',
            exp: 'Colocar sonda pleural y continuar el antibiótico. Es un derrame paraneumónico complicado: el antibiótico solo no penetra bien una colección infectada, hay que drenarla.' }
        ] },
        { ch: 'Cierre y otros escenarios', sc: [
          { v: { k: 'list', t: 'Otros derrames', items: ['Maligno recurrente: catéter tunelizado o pleurodesis', 'Evacuar máximo 1 a 1.5 L por vez', 'Hemotórax: sonda gruesa; cirugía si drena mucho', 'Quilotórax: dieta con TCM, octreotida', 'IC típica bilateral: diurético, sin punción'] },
            say: 'Otros escenarios: el derrame maligno que se reproduce se maneja con catéter pleural tunelizado o pleurodesis con talco. Nunca saques más de uno a uno y medio litros por vez, por el edema de reexpansión. El hemotórax necesita sonda gruesa, y cirugía si drena mucho. El quilotórax, dieta con triglicéridos de cadena media y octreotida. Y el derrame bilateral típico de insuficiencia cardiaca no se punciona: se da diurético.' },
          { v: { k: 'list', t: 'Héctor: final del caso', items: ['Sonda pleural: 600 mL de líquido turbio', 'Tabicado: tPA + DNasa por 3 días', 'Ampicilina-sulbactam', 'Afebril al día 3; se retira la sonda al día 6'] },
            say: 'A Héctor le colocan sonda pleural y drenan seiscientos mililitros de líquido turbio. El ultrasonido muestra tabiques, así que reciben alteplasa y desoxirribonucleasa por la sonda tres días, con ampicilina y sulbactam. Al tercer día ya no tiene fiebre y la sonda se retira al sexto.' },
          { v: { k: 'mnemo', t: 'Light: 0.5 – 0.6 – 2/3', d: 'Uno basta para exudado. Paraneumónico con pH <7.2, glucosa <60, Gram + o pus = sonda.' },
            say: 'Llévate los números de Light: cero punto cinco, cero punto seis y dos tercios; uno basta para exudado. Y en el paraneumónico, pH menor de siete punto dos, glucosa menor de sesenta, Gram positivo o pus significan sonda. Ahora practica con el simulador de pH pleural y el algoritmo del taller.' }
        ] }
      ],
      sections: [
        { h: 'Causas y clínica', html: `
<ul>
<li><b>Trasudado</b> (↑ hidrostática o ↓ oncótica, bilateral): <b>IC</b> (la causa #1 de derrame), cirrosis (hidrotórax hepático, derecho), síndrome nefrótico, diálisis peritoneal, hipoalbuminemia, atelectasia.</li>
<li><b>Exudado</b> (↑ permeabilidad): <b>paraneumónico</b> (#1 exudado), <b>cáncer</b> (pulmón, mama, linfoma; causa #1 de derrame masivo), <b>TB</b>, TEP, pancreatitis (amilasa), LES/AR (glucosa muy baja en AR), post-cardiotomía, quilotórax, hemotórax.</li>
<li>Clínica: disnea, dolor pleurítico, tos seca; <b>matidez</b>, vibraciones vocales <b>disminuidas</b>, murmullo abolido, frote pleural.</li>
<li>Imagen: RX (borramiento del ángulo costofrénico &gt;200 mL en PA; decúbito lateral detecta &gt;50 mL), <b>USG</b> (más sensible y guía la punción), TC (pleura y parénquima).</li>
</ul>` },
        { h: 'Toracocentesis y análisis', html: `
<ul>
<li>Indicada en derrame nuevo de causa no clara con espesor &gt;1 cm en decúbito/USG. No es necesaria en IC típica bilateral que responde a diuréticos.</li>
<li><b>Criterios de Light</b> (exudado si ≥1): proteínas pleura/suero <b>&gt;0.5</b>; DHL pleura/suero <b>&gt;0.6</b>; DHL pleural <b>&gt;2/3</b> del límite superior normal sérico. Si el paciente con IC recibió diuréticos: <b>gradiente de albúmina suero-pleura &gt;1.2 g/dL</b> o NT-proBNP alto → trasudado.</li>
<li>Pistas: <b>pH &lt;7.2</b> y glucosa &lt;60 → empiema, AR, TB, cáncer, rotura esofágica. <b>Linfocitos</b> → TB, cáncer, linfoma; <b>ADA &gt;40</b> → TB. <b>Amilasa</b> alta → pancreatitis o rotura esofágica. <b>Triglicéridos &gt;110</b> → quilotórax (conducto torácico: trauma, linfoma). Hematocrito pleural &gt;50 % del sérico → hemotórax. Citología para cáncer (repetir si negativa; biopsia por toracoscopia).</li>
</ul>` },
        { h: 'Derrame paraneumónico y empiema', html: `
<div class="tablewrap"><table class="mini">
<tr><th>Tipo</th><th>Características</th><th>Manejo</th></tr>
<tr><td>No complicado</td><td>pH ≥7.2, glucosa ≥60, Gram/cultivo negativos, libre</td><td>Solo antibiótico</td></tr>
<tr><td><b>Complicado</b></td><td><b>pH &lt;7.2</b>, glucosa &lt;60, DHL &gt;1000, loculado o Gram/cultivo +</td><td>Antibiótico + <b>sonda pleural</b></td></tr>
<tr><td><b>Empiema</b></td><td>Pus franco</td><td>Sonda; fibrinolíticos (tPA + DNasa) si está tabicado; <b>toracoscopia/decorticación</b> si falla</td></tr>
</table></div>` },
        { h: 'Otros escenarios', html: `
<ul>
<li><b>Derrame maligno</b> recurrente sintomático: toracocentesis evacuadora (máx 1–1.5 L por vez: edema por reexpansión), <b>catéter pleural tunelizado</b> o <b>pleurodesis</b> (talco).</li>
<li><b>Hemotórax</b>: sonda de grueso calibre; toracotomía si drena &gt;1.5 L de entrada o &gt;200 mL/h.</li>
<li><b>Quilotórax</b>: dieta con triglicéridos de cadena media, octreotida, ligadura del conducto torácico.</li>
<li><b>Pleuritis tuberculosa</b>: exudado linfocítico, ADA alta; cultivo del líquido poco sensible → biopsia pleural; RIPE.</li>
</ul>` },
        { h: 'Cómo lo preguntan en el examen', html: `
<ul>
<li>Derrame bilateral en IC descompensada → <b>trasudado</b>: diurético, sin punción.</li>
<li>Proteínas 0.7 y DHL 0.8 de la relación → <b>exudado</b>.</li>
<li>Neumonía con derrame de pH 7.05 → <b>sonda pleural</b>.</li>
<li>Exudado linfocítico con ADA 70 → <b>TB pleural</b>.</li>
<li>Líquido lechoso con triglicéridos 300 → <b>quilotórax</b>.</li>
<li>Derrame con glucosa muy baja en mujer con artritis → <b>AR</b>.</li>
</ul>` }
      ],
      mnemo: { t: 'Light: 0.5 · 0.6 · 2/3', d: 'Proteínas pleura/suero >0.5, DHL pleura/suero >0.6, DHL pleural >2/3 del límite superior: con uno basta para exudado.' },
      pearl: 'La IC es la causa más común de derrame pleural (trasudado bilateral); la neumonía es la causa más común de exudado.',
      trap: 'Los criterios de Light clasifican como exudado hasta 25 % de los trasudados por IC tratados con diuréticos: usa el gradiente de albúmina (>1.2 = trasudado).',
      guide: [
        'BTS 2023: el USG torácico es obligatorio para guiar la toracocentesis; los fibrinolíticos intrapleurales (tPA + DNasa) se usan en infección pleural loculada.',
        'Tu guía usa pH <7 para empiema y pH >7.2 como simple; el corte práctico para colocar sonda es pH <7.2.'
      ],
      refs: [
        'Light RW. Pleural effusion. N Engl J Med 2002.',
        'Roberts ME, et al. British Thoracic Society Guideline for pleural disease. Thorax 2023.',
        'Rahman NM, et al. Intrapleural use of tissue plasminogen activator and DNase in pleural infection (MIST2). N Engl J Med 2011.'
      ]
    }
  },

  guias: {
    derrame: { src: SRC,
      puntos: [
        'Trasudado: ICC, cirrosis, nefrótico, ERC (bilateral). Exudado: infecciones, neoplasias, TEP, autoinmunes, trauma, pancreatitis, hemotórax, quilotórax.',
        'Criterios de Light: proteínas &gt;0.5, DHL &gt;0.6, DHL &gt;2/3 del límite superior; colesterol &gt;55 sugiere exudado.',
        'Linfocítico: neoplasia, TB, ICC, quilotórax; neutrofílico: paraneumónico, TEP; ADA: TB; triglicéridos &gt;100: quilotórax.',
        'Paraneumónico simple (pH &gt;7.2, glucosa &gt;40) → antibiótico; complicado (pH &lt;7, glucosa &lt;40) y empiema → sonda, fibrinolíticos, decorticación.',
        'Toracocentesis si hay &gt;10 mm en decúbito lateral; evacuadora 400–500 mL; pleurodesis con talco o doxiciclina.'
      ],
      ojo: ['El corte práctico para colocar sonda en un paraneumónico es <b>pH &lt;7.2</b> o glucosa &lt;60 (BTS), no pH &lt;7.'],
      cards: [['Gradiente de albúmina suero-pleura >1.2', 'Trasudado (aunque Light diga exudado tras diuréticos)']] }
  },

  cards: [
    ['Causa #1 de derrame pleural', 'Insuficiencia cardiaca (trasudado)'],
    ['Causa #1 de exudado', 'Derrame paraneumónico'],
    ['Causa #1 de derrame masivo', 'Cáncer'],
    ['Criterios de Light (exudado)', 'Proteínas P/S >0.5, DHL P/S >0.6, DHL >2/3 del límite superior'],
    ['Exploración del derrame', 'Matidez, vibraciones disminuidas, murmullo abolido'],
    ['Paraneumónico complicado', 'pH <7.2, glucosa <60, Gram/cultivo + o loculado → sonda'],
    ['Empiema', 'Pus: sonda ± fibrinolíticos; decorticación si falla'],
    ['ADA >40 con linfocitos', 'Pleuritis tuberculosa'],
    ['Triglicéridos >110 en líquido', 'Quilotórax'],
    ['Amilasa alta en líquido', 'Pancreatitis o rotura esofágica'],
    ['Glucosa muy baja en líquido', 'Empiema, AR, TB, cáncer'],
    ['Derrame maligno recurrente', 'Catéter tunelizado o pleurodesis']
  ],

  questions: [
    q({ id: 'derrame-01', dif: 1, stem: 'Paciente con IC descompensada y derrame pleural bilateral pequeño. ¿Conducta?', opts: ['Toracocentesis diagnóstica obligatoria', 'Tratar la IC con diurético y vigilar', 'Sonda pleural', 'Pleurodesis', 'Antibiótico'], ans: 1,
      exp: 'Derrame bilateral típico de IC: trasudado; se punciona solo si es atípico, unilateral, con fiebre o no responde.', why: ['No en el caso típico.', '', 'No.', 'No.', 'No hay infección.'], ref: 'BTS 2023' }),
    q({ id: 'derrame-02', dif: 2, stem: 'Líquido pleural: proteínas 4.2 (suero 6.5), DHL 260 (suero 300; límite superior 220). ¿Clasificación?', opts: ['Trasudado', 'Exudado', 'Quilotórax', 'Hemotórax', 'Indeterminado'], ans: 1,
      exp: 'Proteínas 4.2/6.5 = 0.65 (>0.5) y DHL 260/300 = 0.87 (>0.6): exudado.', why: ['Cumple criterios de exudado.', '', 'No hay datos.', 'No hay datos.', 'Es clasificable.'], ref: 'Light, NEJM 2002' }),
    q({ id: 'derrame-03', dif: 2, stem: 'Paciente con neumonía y derrame: pH 7.05, glucosa 35, Gram negativo. ¿Conducta?', opts: ['Solo antibiótico', 'Antibiótico + sonda pleural', 'Pleurodesis', 'Diurético', 'Observar'], ans: 1,
      exp: 'Derrame paraneumónico complicado (pH <7.2): drenaje con sonda.', why: ['Fracasa con pH bajo.', '', 'No.', 'No.', 'No.'], ref: 'BTS 2023' }),
    q({ id: 'derrame-04', dif: 2, stem: 'Exudado linfocítico con ADA 85 en un joven con fiebre y pérdida de peso. ¿Diagnóstico?', opts: ['Derrame maligno', 'Pleuritis tuberculosa', 'Paraneumónico', 'Quilotórax', 'IC'], ans: 1,
      exp: 'ADA >40 con predominio linfocítico es muy sugestivo de TB pleural.', why: ['ADA no tan alta típicamente.', '', 'Predominio neutrofílico.', 'Triglicéridos altos.', 'Trasudado.'], ref: 'BTS 2023' }),
    q({ id: 'derrame-05', dif: 2, stem: 'Líquido pleural lechoso con triglicéridos de 320 mg/dL tras cirugía torácica. ¿Diagnóstico?', opts: ['Empiema', 'Quilotórax', 'Seudoquilotórax', 'Hemotórax', 'Trasudado'], ans: 1,
      exp: 'Triglicéridos >110 (con quilomicrones): lesión del conducto torácico.', why: ['Pus, no lechoso.', '', 'Tiene colesterol alto, no TG.', 'Sangre.', 'No.'], ref: 'BTS 2023' }),
    q({ id: 'derrame-06', dif: 2, stem: 'Paciente con IC tratado con furosemida; Light clasifica su derrame como exudado, pero el gradiente de albúmina suero-pleura es 1.6. ¿Interpretación?', opts: ['Exudado real', 'Trasudado (efecto de los diuréticos)', 'Empiema', 'Cáncer', 'TB'], ans: 1,
      exp: 'Los diuréticos concentran el líquido; un gradiente de albúmina >1.2 indica trasudado.', why: ['Probablemente falso exudado.', '', 'No.', 'No.', 'No.'], ref: 'BTS 2023' }),
    q({ id: 'derrame-07', dif: 1, stem: '¿Qué hallazgo de exploración física es típico del derrame pleural?', opts: ['Hiperresonancia', 'Matidez con vibraciones vocales disminuidas', 'Vibraciones aumentadas', 'Soplo tubario intenso', 'Estertores crepitantes finos'], ans: 1,
      exp: 'El líquido amortigua la transmisión de las vibraciones.', why: ['Neumotórax.', '', 'Consolidación.', 'Consolidación.', 'Edema o fibrosis.'], ref: 'Light, NEJM 2002' }),
    q({ id: 'derrame-08', dif: 2, stem: 'Empiema loculado que no drena bien con la sonda. ¿Siguiente paso?', opts: ['Retirar la sonda', 'Fibrinolíticos intrapleurales (tPA + DNasa) o toracoscopia/decorticación', 'Diurético', 'Pleurodesis', 'Antibiótico oral solo'], ans: 1,
      exp: 'Infección pleural loculada: fibrinolíticos; si fallan, cirugía (VATS).', why: ['No.', '', 'No.', 'Contraindicada con infección.', 'Insuficiente.'], ref: 'MIST2, NEJM 2011' }),
    q({ id: 'derrame-09', dif: 2, stem: 'Mujer con cáncer de mama y derrame pleural masivo recurrente que la limita. ¿Manejo?', opts: ['Toracocentesis de 4 L de una vez', 'Catéter pleural tunelizado o pleurodesis con talco', 'Diurético', 'Antibiótico', 'Observación'], ans: 1,
      exp: 'Derrame maligno recurrente sintomático: catéter tunelizado o pleurodesis.', why: ['Riesgo de edema por reexpansión (máx 1–1.5 L).', '', 'No.', 'No.', 'Sintomática.'], ref: 'BTS 2023' }),
    q({ id: 'derrame-10', dif: 2, stem: 'Derrame izquierdo con amilasa muy elevada y pH 6.8 tras vómito intenso; dolor torácico. ¿Sospecha?', opts: ['Pancreatitis', 'Rotura esofágica (Boerhaave)', 'Neumonía', 'IC', 'TB'], ans: 1,
      exp: 'Amilasa salival y pH muy bajo con contexto de vómito: perforación esofágica. Urgencia quirúrgica.', why: ['Posible, pero el pH tan bajo y el vómito sugieren Boerhaave.', '', 'No.', 'No.', 'No.'], ref: 'BTS 2023' }),
    q({ id: 'derrame-11', dif: 2, stem: '¿Cuál es el mejor método de imagen para guiar una toracocentesis?', opts: ['RX PA', 'Ultrasonido', 'TC', 'RM', 'Gammagrama'], ans: 1,
      exp: 'El USG localiza el líquido, detecta tabiques y reduce complicaciones (neumotórax).', why: ['Menos preciso.', '', 'No guía en tiempo real.', 'No.', 'No.'], ref: 'BTS 2023' }),
    q({ id: 'derrame-12', dif: 2, stem: 'Mujer con AR seropositiva y derrame exudado con glucosa de 15 mg/dL, cultivo negativo. ¿Causa?', opts: ['Lupus', 'Derrame reumatoide', 'IC', 'Cirrosis', 'Nefrótico'], ans: 1,
      exp: 'La AR da exudados con glucosa muy baja y pH bajo (también colesterol alto, seudoquilotórax).', why: ['Glucosa no tan baja.', '', 'Trasudado.', 'Trasudado.', 'Trasudado.'], ref: 'Light, NEJM 2002' }),
    q({ id: 'derrame-13', dif: 2, stem: 'Paciente con trauma torácico; la sonda drena 1,700 mL de sangre al colocarla. ¿Conducta?', opts: ['Observar', 'Toracotomía', 'Diurético', 'Pleurodesis', 'Retirar la sonda'], ans: 1,
      exp: 'Hemotórax masivo (>1.5 L inicial o >200 mL/h): toracotomía.', why: ['Peligroso.', '', 'No.', 'No.', 'No.'], ref: 'BTS 2023' }),
    q({ id: 'derrame-14', dif: 2, stem: 'Derrame exudado linfocítico con citología negativa en un fumador con pérdida de peso. ¿Siguiente paso si persiste la sospecha?', opts: ['Alta', 'Repetir citología y biopsia pleural (toracoscopia)', 'Antibiótico', 'Diurético', 'Pleurodesis sin diagnóstico'], ans: 1,
      exp: 'La citología detecta ~60 % de los derrames malignos; la toracoscopia aumenta el rendimiento.', why: ['Riesgo de perder un cáncer.', '', 'No.', 'No.', 'Primero diagnóstico.'], ref: 'BTS 2023' }),
    q({ id: 'derrame-15', dif: 1, stem: '¿Cuál es el mecanismo del trasudado?', opts: ['Aumento de la permeabilidad capilar', 'Aumento de la presión hidrostática o disminución de la oncótica', 'Infección', 'Cáncer', 'Lesión del conducto torácico'], ans: 1,
      exp: 'IC (hidrostática), cirrosis y nefrótico (oncótica).', why: ['Es exudado.', '', 'Exudado.', 'Exudado.', 'Quilotórax.'], ref: 'Light, NEJM 2002' })
  ]
};
