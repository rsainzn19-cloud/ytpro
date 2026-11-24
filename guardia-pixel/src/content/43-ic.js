// Tema 34 · Insuficiencia cardiaca (Cardiología, semana 7)
const T = { topic: 'ic', subj: 'cardio' };
const q = (o) => ({ ...T, ...o });
const SRC = { short: 'De tu Guía Cardio', vs: 'tu guía', name: 'Guía Cardio · Ximena Cors Cepeda (EMIS 5)', url: 'https://docs.google.com/document/d/1KD6KncWKFzExg3jRxPwSSYhywjqoqJN6KhAD_fr6TWk/edit' };

export default {
  lessons: {
    ic: {
      hook: 'El corazón que no alcanza: con FEVI reducida hay cuatro fármacos que salvan vidas (los “4 pilares”) y en la descompensación aguda lo que manda es si está húmedo o seco y frío o caliente.',
      nn: [], yt: 'heart failure HFrEF guideline directed medical therapy',
      video: [
        { ch: 'Qué es la insuficiencia cardiaca', sc: [
          { v: { k: 'title', t: 'Insuficiencia cardiaca', s: 'Semana 7 · Cardiología' },
            say: 'Semana siete de Cardio: la insuficiencia cardiaca. Es la causa más común de hospitalización en mayores de sesenta y cinco años. En este video vas a aprender a clasificarla por fracción de expulsión, a reconocer la congestión y a armar los cuatro pilares que salvan vidas, además de manejar el edema agudo de pulmón.' },
          { v: { k: 'case', t: 'No puede acostarse', p: { name: 'Alfonso', age: 67, sex: 'H', skin: '#C98B62', hair: '#9A9A9A', gown: '#5BA7E0' }, text: 'Infarto anterior hace 2 años. Disnea de medianos esfuerzos, duerme con 3 almohadas, despierta ahogado, edema de piernas. Ingurgitación yugular, crepitantes, S3.', vit: { FC: '98', PA: '118/74', FEVI: '30%', NTproBNP: '4200' } },
            say: 'Alfonso tiene sesenta y siete años y tuvo un infarto anterior hace dos años. Se ahoga con medianos esfuerzos, duerme con tres almohadas, despierta en la noche sin aire y tiene las piernas hinchadas. Tiene ingurgitación yugular, crepitantes en ambas bases y un tercer ruido. Su ecocardiograma muestra fracción de expulsión de treinta por ciento.' },
          { v: { k: 'vs', a: 'FEVI', b: 'Tipo', rows: [['40% o menos', 'Reducida', 'Causa #1: isquemia'], ['41 a 49%', 'Levemente reducida', '—'], ['50% o más', 'Preservada', 'Causa #1: HTA'], ['Subió de 40 a más', 'Con mejoría', 'No suspender el tratamiento']] },
            say: 'Se clasifica por la fracción de expulsión: reducida con cuarenta por ciento o menos, cuya causa número uno es la cardiopatía isquémica; levemente reducida de cuarenta y uno a cuarenta y nueve; y preservada con cincuenta o más, cuya causa número uno es la hipertensión. Si subió de cuarenta o menos a más de cuarenta, es con mejoría, y el tratamiento no se suspende.' },
          { v: { k: 'vs', a: 'Falla izquierda', b: 'Falla derecha', rows: [['Síntomas', 'Disnea, ortopnea, DPN', 'Edema, distensión abdominal'], ['Signos', 'Estertores, S3', 'Ingurgitación yugular, hepatomegalia'], ['Causa', 'Isquemia, HTA, válvulas', 'La #1: falla izquierda']] },
            say: 'La falla izquierda congestiona el pulmón: disnea, ortopnea, disnea paroxística nocturna, estertores y tercer ruido. La falla derecha congestiona el sistema venoso: ingurgitación yugular, reflujo hepatoyugular, hepatomegalia, ascitis y edema de piernas. Y la causa número uno de falla derecha es la falla izquierda.' },
          { v: { k: 'vs', a: 'NYHA (síntomas)', b: 'ACC/AHA (etapas)', rows: [['I', 'Sin limitación', 'A: riesgo (HTA, DM)'], ['II', 'Con actividad ordinaria', 'B: daño sin síntomas'], ['III', 'Con actividad menor', 'C: síntomas'], ['IV', 'En reposo', 'D: refractaria']] },
            say: 'Dos clasificaciones. La NYHA mide síntomas y puede subir o bajar: uno, sin limitación; dos, con actividad ordinaria; tres, con actividad menor que la ordinaria; cuatro, en reposo. Las etapas de la ACC y AHA no regresan: A, en riesgo; B, daño estructural sin síntomas; C, con síntomas; D, refractaria.' }
        ] },
        { ch: 'Diagnóstico', sc: [
          { v: { k: 'big', h: 'Péptidos natriuréticos', t: 'NT-proBNP >125', s: 'Crónico (BNP >35). Agudo: NT-proBNP >300 o BNP >100. Normal casi descarta IC.' },
            say: 'Los péptidos natriuréticos se liberan cuando el ventrículo se estira. En el contexto crónico, NT pro BNP mayor de ciento veinticinco o BNP mayor de treinta y cinco; en el agudo, NT pro BNP mayor de trescientos. Su gran valor es negativo: si son normales, casi descartan insuficiencia cardiaca. Suben con la edad y la enfermedad renal, bajan con la obesidad, y el sacubitrilo eleva el BNP, por eso con él se usa NT pro BNP.' },
          { v: { k: 'list', t: 'Estudios', items: ['Ecocardiograma: confirma y mide FEVI', 'ECG: isquemia, FA, BRI', 'Rx: cardiomegalia, Kerley, derrame', 'Na, K, creatinina, TSH', 'Ferritina y saturación: déficit de hierro'] },
            say: 'El ecocardiograma confirma y mide la fracción de expulsión. El electrocardiograma busca isquemia, fibrilación auricular y bloqueo de rama izquierda. La radiografía muestra cardiomegalia, líneas B de Kerley y derrame. Y el laboratorio incluye sodio, potasio, creatinina, TSH y ferritina con saturación, porque el déficit de hierro es común y se trata.' },
          { v: { k: 'list', t: 'Por qué se descompensa', items: ['Falta de apego: sal, fármacos', 'Arritmias: FA', 'Isquemia', 'Infección', 'HTA descontrolada, AINE, embolia'] },
            say: 'Cuando se descompensa, busca el desencadenante: falta de apego a la dieta sin sal o a los fármacos, arritmias como fibrilación auricular, isquemia, infección, hipertensión descontrolada, antiinflamatorios o embolia pulmonar.' }
        ] },
        { ch: 'Los cuatro pilares', sc: [
          { v: { k: 'list', t: 'FEVI reducida: cuatro pilares', items: ['ARNI: sacubitrilo-valsartán (o IECA/ARA)', 'Betabloqueador: carvedilol, bisoprolol, metoprolol', 'Antagonista mineralocorticoide: espironolactona', 'iSGLT2: dapagliflozina, empagliflozina'] },
            say: 'En la fracción reducida, cuatro fármacos reducen la mortalidad y se inician pronto, en semanas, a dosis bajas: un inhibidor de neprilisina y receptor de angiotensina, sacubitrilo con valsartán, o si no, un IECA o ARA; un betabloqueador como carvedilol, bisoprolol o metoprolol succinato; un antagonista de mineralocorticoides como espironolactona; y un inhibidor de SGLT dos, con o sin diabetes.' },
          { v: { k: 'list', t: 'Cuidados de cada pilar', items: ['ARNI: 36 h sin IECA antes (angioedema)', 'BB: iniciar estable y sin congestión', 'Espironolactona: K menor de 5 y TFG mayor de 30', 'iSGLT2: TFG 20 o más', 'Diurético: solo para la congestión'] },
            say: 'Los cuidados: el sacubitrilo se inicia treinta y seis horas después de suspender el IECA, por riesgo de angioedema. El betabloqueador se inicia cuando el paciente está estable y sin congestión. La espironolactona requiere potasio menor de cinco y filtrado mayor de treinta. Los inhibidores de SGLT dos se usan con filtrado de veinte o más. Y el diurético de asa solo quita congestión: no cambia la mortalidad.' },
          { v: { k: 'list', t: 'Además', items: ['Ivabradina: sinusal con FC 70 o más pese a BB', 'Hidralazina + nitrato: afroamericanos o intolerancia', 'Hierro IV si ferritina menor de 100', 'DAI: FEVI 35% o menos tras 3 meses', 'Resincronización: + BRI con QRS 150 o más'] },
            say: 'Además: ivabradina si sigue en ritmo sinusal con frecuencia de setenta o más pese al betabloqueador; hidralazina con nitrato en afroamericanos o intolerantes a IECA; hierro intravenoso si la ferritina es menor de cien. Y dispositivos: desfibrilador si la fracción sigue en treinta y cinco o menos tras tres meses de tratamiento óptimo, y resincronizador si además hay bloqueo de rama izquierda con QRS de ciento cincuenta o más.' },
          { v: { k: 'tip', kind: 'trap', t: 'En FEVI reducida evita AINE, glitazonas y verapamilo o diltiazem: empeoran la falla.' },
            say: 'Trampa: en la fracción reducida se evitan antiinflamatorios, glitazonas y los calcioantagonistas no dihidropiridínicos como verapamilo y diltiazem, porque empeoran la falla.' },
          { v: { k: 'quiz', q: 'Alfonso, estable, FEVI 30%, con IECA y furosemida. ¿Qué cambia la mortalidad?', opts: ['Subir la furosemida', 'Cambiar a ARNI y agregar BB, espironolactona e iSGLT2', 'Agregar digoxina'], a: 1 },
            say: 'Pausa. Alfonso está estable, con fracción de treinta, y toma IECA y furosemida. ¿Qué agregas para reducir su mortalidad?',
            exp: 'Cambiar el IECA a sacubitrilo con valsartán, esperando treinta y seis horas, y agregar betabloqueador, espironolactona y un inhibidor de SGLT dos. La furosemida y la digoxina mejoran síntomas pero no la sobrevida.' }
        ] },
        { ch: 'Insuficiencia cardiaca aguda', sc: [
          { v: { k: 'vs', a: 'Perfil', b: 'Manejo', rows: [['Caliente y húmedo (el más común)', 'Diurético IV ± vasodilatador', '—'], ['Frío y húmedo', 'Inotrópico (dobutamina) ± vasopresor', 'Choque cardiogénico'], ['Caliente y seco', 'Ajustar tratamiento oral', '—'], ['Frío y seco', 'Volumen con cuidado', '—']] },
            say: 'En la falla aguda se clasifica al paciente por perfusión y congestión. Caliente y húmedo, el más común: bien perfundido y congestionado, se trata con diurético intravenoso y vasodilatador. Frío y húmedo: hipoperfundido y congestionado, es el choque cardiogénico y necesita inotrópico como dobutamina. Caliente y seco: compensado. Frío y seco: hipovolémico, volumen con cuidado.' },
          { v: { k: 'flow', t: 'Edema agudo de pulmón hipertensivo', steps: ['Sentado, O2 o VMNI (CPAP)', 'Nitroglicerina IV a dosis alta', 'Furosemida IV (2 veces su dosis oral)', 'Busca el desencadenante', 'No suspender el BB salvo choque'] },
            say: 'El edema agudo de pulmón hipertensivo: paciente sentado, oxígeno o ventilación no invasiva con CPAP, que reduce la intubación; nitroglicerina intravenosa a dosis alta, que es lo que más rápido baja la presión de llenado; y furosemida intravenosa, al menos el doble de su dosis oral. Busca el desencadenante, y no suspendas el betabloqueador salvo choque.' },
          { v: { k: 'quiz', q: 'Edema agudo de pulmón con PA 210/120 y SpO2 84%. ¿Qué es lo primero?', opts: ['Morfina y esperar', 'CPAP + nitroglicerina IV a dosis alta + furosemida', 'Dobutamina'], a: 1 },
            say: 'Pausa. Paciente con edema agudo de pulmón, presión de doscientos diez sobre ciento veinte y saturación de ochenta y cuatro. ¿Qué haces primero?',
            exp: 'CPAP o ventilación no invasiva, nitroglicerina intravenosa a dosis alta y furosemida intravenosa. La morfina ya no se recomienda de rutina, y la dobutamina es para el paciente frío y con presión baja.' }
        ] },
        { ch: 'Cierre del caso', sc: [
          { v: { k: 'list', t: 'Alfonso: final del caso', items: ['Sacubitrilo-valsartán, carvedilol, espironolactona, dapagliflozina', 'Furosemida según congestión', 'Ferritina 60: hierro IV', 'A los 3 meses FEVI 32%: DAI', 'Sal menor de 2 g, pesarse diario'] },
            say: 'Alfonso recibe los cuatro pilares y furosemida según su congestión. Su ferritina es de sesenta, así que recibe hierro intravenoso. A los tres meses su fracción es de treinta y dos por ciento con QRS estrecho: se le coloca un desfibrilador. Aprende a pesarse diario y a consultar si sube dos kilos en tres días.' },
          { v: { k: 'tip', kind: 'pearl', t: 'Los iSGLT2 reducen hospitalizaciones también en FEVI preservada: son el único fármaco con beneficio claro ahí.' },
            say: 'Perla: los inhibidores de SGLT dos reducen hospitalizaciones también en la fracción preservada, donde casi nada más funciona. Ahí, además, se controla la presión y se trata la congestión.' },
          { v: { k: 'mnemo', t: 'Cuatro pilares: ARNI, BB, ARM, iSGLT2', d: 'FEVI ≤40% reducida. BNP normal casi descarta. Edema agudo: CPAP + nitroglicerina + furosemida. DAI si FEVI ≤35% tras 3 meses.' },
            say: 'Llévate los cuatro pilares: ARNI, betabloqueador, antagonista de mineralocorticoides e inhibidor de SGLT dos. Ahora prueba el simulador de ECG de la insuficiencia cardiaca y el algoritmo del taller.' }
        ] }
      ],
      sections: [
        { h: 'Definición y causas', html: `
<ul>
<li>Síndrome clínico (disnea, fatiga, congestión) por una alteración estructural o funcional del corazón, con <b>BNP elevado</b> o congestión demostrada.</li>
<li>Por FEVI: <b>reducida (≤40 %)</b>, levemente reducida (41–49 %), <b>preservada (≥50 %)</b> y con mejoría (subió de ≤40 a &gt;40).</li>
<li>Causas: <b>cardiopatía isquémica</b> (la #1 en FEVI reducida), <b>HTA</b> (la #1 en preservada), valvulopatías, miocardiopatías (dilatada, alcohol, Chagas, periparto), taquicardiomiopatía.</li>
<li><b>Gasto alto</b>: anemia, tirotoxicosis, fístula AV, beriberi, embarazo, sepsis.</li>
<li>Desencadenantes de la descompensación (“FAILURE”): falta de apego (sal, fármacos), arritmias (FA), isquemia, infección, HTA descontrolada, embolia, AINE.</li>
</ul>` },
        { h: 'Clínica y clasificación', html: `
<ul>
<li><b>Izquierda</b>: disnea, <b>ortopnea</b>, disnea paroxística nocturna, estertores, S3, edema pulmonar. <b>Derecha</b>: ingurgitación yugular, reflujo hepatoyugular, hepatomegalia, ascitis, edema de piernas. Causa #1 de falla derecha: la izquierda.</li>
<li><b>NYHA</b> (síntomas): I sin limitación · II con actividad ordinaria · III con actividad menor · IV en reposo.</li>
<li><b>ACC/AHA</b> (etapas, no regresan): A riesgo (HTA, DM) · B daño estructural sin síntomas · C síntomas · D refractaria.</li>
</ul>` },
        { h: 'Diagnóstico', html: `
<ul>
<li><b>BNP &gt;35 pg/mL o NT-proBNP &gt;125</b> (crónico); en agudo BNP &gt;100 o NT-proBNP &gt;300. Su valor predictivo <b>negativo</b> es alto: normal casi descarta IC. Suben con ERC y edad; bajan con obesidad. El sacubitrilo eleva el BNP (usa NT-proBNP).</li>
<li><b>Ecocardiograma</b>: confirma y mide la FEVI, valvas, presión pulmonar.</li>
<li>ECG (isquemia, FA, BRIHH), RX de tórax (cardiomegalia, líneas B de Kerley, redistribución, derrame), BH, creatinina, electrolitos (la <b>hiponatremia</b> da mal pronóstico), TSH, ferritina y saturación (déficit de hierro), glucosa, lípidos.</li>
</ul>` },
        { h: 'Tratamiento crónico con FEVI reducida', html: `
<div class="tablewrap"><table class="mini">
<tr><th>Pilar</th><th>Ejemplos</th><th>Cuidado</th></tr>
<tr><td><b>ARNI</b> (o IECA/ARA)</td><td>Sacubitrilo/valsartán</td><td>36 h sin IECA antes (angioedema); K y creatinina</td></tr>
<tr><td><b>Betabloqueador</b></td><td>Carvedilol, bisoprolol, metoprolol succinato</td><td>Iniciar estable y euvolémico; dosis baja y subir</td></tr>
<tr><td><b>Antagonista de mineralocorticoides</b></td><td>Espironolactona, eplerenona</td><td>K &lt;5.0 y TFG &gt;30; ginecomastia (espironolactona)</td></tr>
<tr><td><b>iSGLT2</b></td><td>Dapagliflozina, empagliflozina</td><td>Con o sin diabetes; TFG ≥20–25</td></tr>
</table></div>
<ul>
<li>Iniciar los cuatro pronto (en semanas), a dosis bajas, y titular. Diurético de asa solo para la congestión.</li>
<li>Otros: <b>ivabradina</b> (ritmo sinusal con FC ≥70 pese a BB), <b>hidralazina + nitrato</b> (afroamericanos o intolerancia a IECA/ARA), <b>hierro IV</b> si ferritina &lt;100 (o 100–299 con saturación &lt;20 %), digoxina (síntomas, FA).</li>
<li>Dispositivos: <b>DAI</b> si FEVI ≤35 % tras ≥3 meses de tratamiento óptimo; <b>resincronización</b> si además BRIHH con QRS ≥150 ms (o ≥130).</li>
<li>Evitar: AINE, glitazonas, calcioantagonistas no dihidropiridínicos (verapamilo, diltiazem) en FEVI reducida.</li>
<li>FEVI preservada: <b>iSGLT2</b>, diurético para la congestión, controlar HTA, FA y peso; finerenona en levemente reducida o preservada.</li>
</ul>` },
        { h: 'Insuficiencia cardiaca aguda', html: `
<ul>
<li>Perfiles por congestión (húmedo/seco) y perfusión (caliente/frío). <b>Húmedo y caliente</b> (el más común): <b>furosemida IV</b> (dosis IV = 1–2.5 veces la oral diaria) ± <b>nitroglicerina</b> si PAS &gt;110.</li>
<li><b>Húmedo y frío</b> (choque cardiogénico): <b>inotrópico</b> (dobutamina, milrinona) ± vasopresor (norepinefrina) y diurético.</li>
<li>O₂ si SatO₂ &lt;90 %; <b>VMNI</b> (CPAP/BiPAP) en edema pulmonar con trabajo respiratorio.</li>
<li>No se inicia el betabloqueador en plena descompensación (si ya lo tomaba, se mantiene salvo choque). Busca y trata el desencadenante.</li>
<li>Al egreso: iniciar/optimizar los 4 pilares y revisión temprana (1–2 semanas).</li>
</ul>` },
        { h: 'Cómo lo preguntan en el examen', html: `
<ul>
<li>FEVI 30 % ya con IECA, BB y diurético → agrega <b>espironolactona</b> e <b>iSGLT2</b> (o cambia IECA por sacubitrilo/valsartán).</li>
<li>Fármaco que <b>no</b> reduce mortalidad → furosemida (o digoxina).</li>
<li>Disnea con BNP normal → busca otra causa.</li>
<li>Edema pulmonar con PA alta → furosemida IV + nitroglicerina.</li>
<li>FEVI 32 % tras 3 meses de tratamiento óptimo → <b>DAI</b>; con BRIHH y QRS 160 → <b>resincronización</b>.</li>
</ul>` }
      ],
      mnemo: { t: 'Los 4 pilares: ARNI · BB · ARM · iSGLT2', d: 'Sacubitrilo/valsartán (o IECA/ARA), betabloqueador, espironolactona e iSGLT2: todos reducen la mortalidad en FEVI ≤40 %. El diurético solo quita síntomas.' },
      pearl: 'BNP normal casi descarta insuficiencia cardiaca: su fuerza es el valor predictivo negativo.',
      trap: 'Verapamilo y diltiazem están contraindicados con FEVI reducida (inotrópicos negativos). Para controlar la FC usa betabloqueador o digoxina.',
      guide: [
        'Guías ESC 2021/2023 y AHA 2022: los cuatro pilares se inician juntos o en secuencia rápida; ya no se espera a maximizar uno antes del siguiente.',
        'Tu guía usa los cortes BNP >35 y NT-proBNP >125 (ambulatorio); en urgencias los cortes son BNP >100 y NT-proBNP >300.'
      ],
      refs: [
        'McDonagh TA, et al. 2021 ESC Guidelines for heart failure (y actualización 2023). Eur Heart J.',
        'Heidenreich PA, et al. 2022 AHA/ACC/HFSA Guideline for the management of heart failure. Circulation 2022.',
        'McMurray JJV, et al. Dapagliflozin in patients with heart failure and reduced ejection fraction (DAPA-HF). N Engl J Med 2019.',
        'McMurray JJV, et al. Angiotensin–neprilysin inhibition versus enalapril in heart failure (PARADIGM-HF). N Engl J Med 2014.'
      ]
    }
  },

  guias: {
    ic: { src: SRC,
      puntos: [
        'Causas más comunes: <b>enfermedad coronaria, DM e HTA</b>; la diastólica (FEVI preservada) se debe sobre todo a HTA.',
        'Gasto alto: embarazo, anemia, fístulas AV, hipertiroidismo, beriberi, sepsis.',
        'BNP &gt;35 y NT-proBNP &gt;125 pg/mL; alto valor predictivo negativo. Eco TT es el mejor estudio inicial; RX con índice cardiotorácico &gt;0.5 y líneas B de Kerley.',
        'Mal pronóstico: BNP alto, <b>hiponatremia</b>, PAS &lt;120, DM, anemia, S3, hospitalizaciones frecuentes.',
        'Aguda descompensada: furosemida y nitroglicerina; evitar BB en esa etapa. Crónica: BB, IECA/ARA, espironolactona, iSGLT2 reducen mortalidad; diuréticos y digoxina solo síntomas.'
      ],
      ojo: [
        'Tu guía pone FEVI reducida en ≤35–40 %; hoy el corte es <b>≤40 %</b> y existe la categoría “levemente reducida” (41–49 %).',
        'El sacubitrilo/valsartán es hoy el bloqueador del SRAA preferido (en lugar del IECA) en FEVI reducida sintomática.'
      ],
      cards: [['Signo de Kussmaul', 'La yugular se ingurgita al inspirar: falla derecha, pericarditis constrictiva']] }
  },

  cards: [
    ['FEVI reducida', '≤40 %'],
    ['FEVI preservada', '≥50 %'],
    ['Causa #1 de IC con FEVI reducida', 'Cardiopatía isquémica'],
    ['Causa #1 de falla derecha', 'Falla izquierda'],
    ['NYHA III', 'Síntomas con actividad menor que la ordinaria; cómodo en reposo'],
    ['Etapa B (ACC/AHA)', 'Daño estructural sin síntomas'],
    ['BNP para descartar IC crónica', '<35 pg/mL (NT-proBNP <125)'],
    ['Los 4 pilares de FEVI reducida', 'ARNI/IECA/ARA, betabloqueador, espironolactona, iSGLT2'],
    ['Betabloqueadores con evidencia en IC', 'Carvedilol, bisoprolol, metoprolol succinato'],
    ['Del IECA al ARNI', 'Suspender el IECA 36 h antes (angioedema)'],
    ['Diurético de asa en IC', 'Quita congestión; no reduce mortalidad'],
    ['Indicación de DAI', 'FEVI ≤35 % tras ≥3 meses de tratamiento óptimo'],
    ['Indicación de resincronización', 'FEVI ≤35 %, BRIHH y QRS ≥150 ms'],
    ['IC aguda húmeda y caliente', 'Furosemida IV ± nitroglicerina'],
    ['IC aguda húmeda y fría', 'Choque cardiogénico: dobutamina/milrinona ± norepinefrina'],
    ['Contraindicados en FEVI reducida', 'Verapamilo, diltiazem, glitazonas, AINE']
  ],

  questions: [
    q({ id: 'ic-01', dif: 1, stem: 'Hombre de 66 años con infarto previo, disnea de medianos esfuerzos y FEVI de 30 %. Toma enalapril y furosemida. ¿Qué fármaco agregas que reduce la mortalidad?', opts: ['Digoxina', 'Bisoprolol', 'Verapamilo', 'Hidroclorotiazida', 'Amlodipino'], ans: 1,
      exp: 'El betabloqueador (carvedilol, bisoprolol o metoprolol succinato) es uno de los cuatro pilares que reducen la mortalidad en FEVI reducida.', why: ['Mejora síntomas y hospitalizaciones, no la mortalidad.', '', 'Contraindicado: inotrópico negativo.', 'No reduce mortalidad.', 'Neutral; no reduce mortalidad.'], ref: 'ESC 2021' }),
    q({ id: 'ic-02', dif: 1, stem: '¿Cuál de estos fármacos NO reduce la mortalidad en insuficiencia cardiaca con FEVI reducida?', opts: ['Espironolactona', 'Dapagliflozina', 'Furosemida', 'Sacubitrilo/valsartán', 'Carvedilol'], ans: 2,
      exp: 'El diurético de asa alivia la congestión, pero no ha demostrado reducir la mortalidad.', why: ['Reduce mortalidad (RALES).', 'Reduce mortalidad (DAPA-HF).', '', 'Reduce mortalidad (PARADIGM-HF).', 'Reduce mortalidad.'], ref: 'ESC 2021' }),
    q({ id: 'ic-03', dif: 2, stem: 'Paciente en urgencias con disnea aguda. NT-proBNP de 80 pg/mL. ¿Qué concluyes?', opts: ['IC aguda confirmada', 'La IC es muy poco probable; busca otra causa', 'Debe repetirse en 1 h', 'Indica IC con FEVI preservada', 'Indica que el paciente es obeso'], ans: 1,
      exp: 'NT-proBNP <300 pg/mL en agudo tiene alto valor predictivo negativo: hace muy improbable la IC.', why: ['Está debajo del corte.', '', 'No es necesario.', 'También elevaría el péptido.', 'La obesidad lo baja, pero no es lo que concluyes.'], ref: 'ESC 2021' }),
    q({ id: 'ic-04', dif: 2, stem: 'Mujer de 72 años con edema pulmonar agudo, SatO₂ 86 %, PA 172/94, piel caliente. ¿Tratamiento inicial?', opts: ['Dobutamina', 'Furosemida IV, nitroglicerina y VMNI', 'Metoprolol IV', 'Bolo de solución salina', 'Digoxina IV'], ans: 1,
      exp: 'Perfil húmedo y caliente con PA alta: diurético IV, vasodilatador y ventilación no invasiva.', why: ['Es para el paciente frío (hipoperfusión).', '', 'No se inicia BB en la descompensación.', 'Empeora la congestión.', 'No es el tratamiento inicial.'], ref: 'ESC 2021' }),
    q({ id: 'ic-05', dif: 2, stem: 'Paciente con IC y FEVI 25 %, PA 78/50, extremidades frías, confusión y oliguria, con estertores. ¿Qué indicas?', opts: ['Nitroglicerina IV', 'Inotrópico (dobutamina) ± norepinefrina', 'Carvedilol', 'Solo furosemida oral', 'Sacubitrilo/valsartán'], ans: 1,
      exp: 'Húmedo y frío = choque cardiogénico: requiere inotrópico (y vasopresor si persiste la hipotensión).', why: ['Hipotensión: contraindicada.', '', 'Empeoraría el gasto.', 'Insuficiente y no trata la hipoperfusión.', 'Contraindicado con hipotensión.'], ref: 'ESC 2021' }),
    q({ id: 'ic-06', dif: 2, stem: 'Paciente con FEVI 30 % tras 3 meses de tratamiento óptimo con los 4 pilares. ECG: ritmo sinusal, QRS 110 ms. ¿Qué agregas?', opts: ['Resincronización', 'Desfibrilador automático implantable', 'Marcapasos bicameral', 'Trasplante inmediato', 'Nada más'], ans: 1,
      exp: 'FEVI ≤35 % persistente pese a tratamiento óptimo: DAI para prevención primaria de muerte súbita. La resincronización requiere QRS ancho.', why: ['Requiere QRS ≥130–150 ms con BRIHH.', '', 'No está indicado.', 'No es lo inmediato.', 'Tiene indicación de DAI.'], ref: 'ESC 2021' }),
    q({ id: 'ic-07', dif: 2, stem: 'Paciente con FEVI 28 %, BRIHH con QRS de 168 ms y NYHA III pese a tratamiento óptimo. ¿Qué dispositivo?', opts: ['Marcapasos unicameral', 'Terapia de resincronización (con desfibrilador)', 'Solo DAI', 'Balón intraaórtico', 'Ninguno'], ans: 1,
      exp: 'FEVI ≤35 %, BRIHH y QRS ≥150 ms: resincronización (generalmente con DAI).', why: ['No está indicado.', '', 'Se perdería el beneficio de resincronizar.', 'Es para choque agudo.', 'Tiene indicación clara.'], ref: 'ESC 2021' }),
    q({ id: 'ic-08', dif: 3, stem: 'Paciente con IC de FEVI reducida que tomaba enalapril; se cambiará a sacubitrilo/valsartán. ¿Qué precaución?', opts: ['Darlos juntos la primera semana', 'Suspender el enalapril 36 horas antes', 'Duplicar el diurético', 'Suspender el betabloqueador', 'Ninguna'], ans: 1,
      exp: 'IECA + inhibidor de neprilisina aumenta mucho el riesgo de angioedema (bradicinina): se deja un lavado de 36 h.', why: ['Riesgo alto de angioedema.', '', 'No es necesario.', 'Debe continuar.', 'Sí hay precaución.'], ref: 'AHA 2022' }),
    q({ id: 'ic-09', dif: 2, stem: 'Paciente con IC, FEVI 30 % y FA con respuesta rápida. ¿Qué fármaco evitas para controlar la frecuencia?', opts: ['Bisoprolol', 'Digoxina', 'Diltiazem', 'Amiodarona', 'Carvedilol'], ans: 2,
      exp: 'Los calcioantagonistas no dihidropiridínicos deprimen la contractilidad y empeoran la IC con FEVI reducida.', why: ['Es de elección.', 'Puede usarse.', '', 'Puede usarse para ritmo.', 'Es de elección.'], ref: 'ESC 2021' }),
    q({ id: 'ic-10', dif: 1, stem: '¿Cuál es la causa más común de insuficiencia cardiaca derecha?', opts: ['Hipertensión pulmonar primaria', 'Insuficiencia cardiaca izquierda', 'TEP', 'EPOC', 'Estenosis pulmonar'], ans: 1,
      exp: 'La congestión pulmonar crónica de la falla izquierda eleva la poscarga del VD.', why: ['Mucho menos frecuente.', '', 'Causa aguda, menos frecuente.', 'Causa de cor pulmonale, pero no la más común.', 'Rara.'], ref: 'AHA 2022' }),
    q({ id: 'ic-11', dif: 2, stem: 'Mujer de 70 años con HTA, disnea, BNP 420, FEVI 58 %, hipertrofia ventricular y disfunción diastólica. ¿Qué fármaco ha mostrado reducir hospitalizaciones?', opts: ['Digoxina', 'Empagliflozina', 'Ivabradina', 'Sacubitrilo/valsartán a dosis máxima siempre', 'Verapamilo'], ans: 1,
      exp: 'En FEVI preservada los iSGLT2 (EMPEROR-Preserved, DELIVER) reducen hospitalización y muerte cardiovascular. Además: diurético si hay congestión y control de HTA.', why: ['Sin beneficio.', '', 'Es para FEVI reducida en sinusal.', 'Beneficio limitado en preservada.', 'No tiene beneficio demostrado.'], ref: 'ESC 2023' }),
    q({ id: 'ic-12', dif: 2, stem: 'Paciente con IC de FEVI reducida en tratamiento óptimo, ritmo sinusal y FC de 82 lpm con bisoprolol a dosis máxima. ¿Qué agregas para bajar la FC?', opts: ['Verapamilo', 'Ivabradina', 'Diltiazem', 'Atropina', 'Más bisoprolol'], ans: 1,
      exp: 'La ivabradina (bloqueo de la corriente If) reduce hospitalizaciones si la FC sigue ≥70 lpm en ritmo sinusal pese a BB máximo.', why: ['Contraindicado.', '', 'Contraindicado.', 'Subiría la FC.', 'Ya está en dosis máxima.'], ref: 'ESC 2021' }),
    q({ id: 'ic-13', dif: 2, stem: 'Paciente con IC y FEVI 35 %, ferritina 60 ng/mL, saturación de transferrina 14 %, Hb 12.6. ¿Qué agregas?', opts: ['Hierro oral', 'Hierro IV (carboximaltosa o derisomaltosa)', 'Eritropoyetina', 'Transfusión', 'Nada: no tiene anemia'], ans: 1,
      exp: 'El déficit de hierro en IC (ferritina <100 o 100–299 con saturación <20 %) se trata con hierro IV aunque no haya anemia: mejora síntomas y reduce hospitalizaciones.', why: ['Se absorbe mal en IC y no mostró beneficio.', '', 'No está indicada.', 'No está indicada.', 'El déficit de hierro se trata aun sin anemia.'], ref: 'ESC 2023' }),
    q({ id: 'ic-14', dif: 1, stem: '¿Qué hallazgo de la RX de tórax sugiere congestión por insuficiencia cardiaca?', opts: ['Hiperinsuflación con diafragmas planos', 'Líneas B de Kerley y redistribución vascular', 'Neumotórax', 'Adenopatías hiliares bilaterales', 'Cavitación apical'], ans: 1,
      exp: 'Edema intersticial: líneas B de Kerley, redistribución a lóbulos superiores, cardiomegalia, derrame pleural.', why: ['Sugiere EPOC.', '', 'No relacionado.', 'Sugiere sarcoidosis o linfoma.', 'Sugiere TB.'], ref: 'AHA 2022' }),
    q({ id: 'ic-15', dif: 2, stem: 'Paciente con IC estable que inicia espironolactona. ¿Qué vigilas?', opts: ['Glucosa', 'Potasio y creatinina', 'Calcio', 'Pruebas hepáticas', 'Plaquetas'], ans: 1,
      exp: 'Riesgo de hiperkalemia y deterioro renal: K y creatinina a la semana, al mes y después periódicamente. No iniciar si K ≥5.0 o TFG <30.', why: ['No es el efecto principal.', '', 'No es el efecto principal.', 'No es el efecto principal.', 'No es el efecto principal.'], ref: 'ESC 2021' }),
    q({ id: 'ic-16', dif: 1, stem: 'Paciente que puede caminar al baño, pero se ahoga al caminar media cuadra; en reposo está bien. ¿Qué clase NYHA?', opts: ['I', 'II', 'III', 'IV', 'Etapa D'], ans: 2,
      exp: 'Síntomas con actividad menor a la ordinaria, sin síntomas en reposo: NYHA III.', why: ['Sin limitación.', 'Síntomas con actividad ordinaria.', '', 'Síntomas en reposo.', 'Es clasificación ACC/AHA y significa refractaria.'], ref: 'AHA 2022' }),
    q({ id: 'ic-17', dif: 2, stem: 'Paciente con IC compensada que se descompensa tras iniciar un medicamento para su artrosis de rodilla. ¿Cuál fue más probablemente?', opts: ['Paracetamol', 'Naproxeno', 'Duloxetina', 'Diclofenaco en gel', 'Tramadol'], ans: 1,
      exp: 'Los AINE sistémicos retienen sodio y agua, antagonizan diuréticos e IECA y descompensan la IC.', why: ['Seguro.', '', 'No retiene sodio.', 'Absorción sistémica mínima.', 'No retiene sodio.'], ref: 'AHA 2022' }),
    q({ id: 'ic-18', dif: 3, stem: 'Hombre afroamericano con IC de FEVI 30 % que tuvo angioedema con IECA. ¿Qué combinación reduce la mortalidad como alternativa?', opts: ['Hidralazina + dinitrato de isosorbida', 'Nifedipino + digoxina', 'Diltiazem + furosemida', 'Clonidina', 'Minoxidil'], ans: 0,
      exp: 'Hidralazina + nitrato reduce mortalidad en afroamericanos (A-HeFT) y es alternativa si no se toleran IECA/ARA/ARNI.', why: ['', 'Sin beneficio en mortalidad.', 'El diltiazem está contraindicado.', 'Sin beneficio.', 'Sin beneficio y retiene líquidos.'], ref: 'AHA 2022' }),
    q({ id: 'ic-19', dif: 2, stem: 'Paciente hospitalizado por IC descompensada que ya tomaba carvedilol, ahora congestivo pero con buena perfusión y PA 128/80. ¿Qué haces con el carvedilol?', opts: ['Suspenderlo definitivamente', 'Mantenerlo (reducir solo si hay choque o bradicardia)', 'Duplicar la dosis', 'Cambiarlo por verapamilo', 'Cambiarlo por atenolol'], ans: 1,
      exp: 'Si ya lo tomaba se mantiene; suspenderlo aumenta la mortalidad. Solo se reduce o suspende con choque, hipotensión o bradicardia importante.', why: ['Aumenta la mortalidad.', '', 'No se titula en la descompensación.', 'Contraindicado.', 'Sin evidencia en IC.'], ref: 'ESC 2021' }),
    q({ id: 'ic-20', dif: 2, stem: '¿Qué hallazgo de laboratorio se asocia con peor pronóstico en insuficiencia cardiaca?', opts: ['Hipernatremia', 'Hiponatremia', 'Hipercalcemia', 'Hipoglucemia', 'Trombocitosis'], ans: 1,
      exp: 'La hiponatremia refleja activación neurohormonal intensa (ADH) y predice mayor mortalidad.', why: ['No es típica.', '', 'No es típica.', 'No es marcador pronóstico típico.', 'No es marcador pronóstico típico.'], ref: 'AHA 2022' })
  ]
};
