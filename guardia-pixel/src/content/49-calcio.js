// Tema 40 · Hipercalcemia y osteoporosis (Endocrinología, semana 11)
const T = { topic: 'calcio', subj: 'endo' };
const q = (o) => ({ ...T, ...o });
const ENDO = { short: 'De tu Guía Endocrino', vs: 'tu guía', name: 'Guía Endocrino · Ximena Cors Cepeda (EMIS 5)', url: 'https://docs.google.com/document/d/1ng1BpGOd1JywQaChMt0YWLQIRemXzi5hyUV_XVmYpsM/edit' };

export default {
  lessons: {
    calcio: {
      hook: 'Calcio alto: mide la PTH. Alta = hiperparatiroidismo primario (ambulatorio). Baja = cáncer (hospitalizado) u otras causas. La osteoporosis se diagnostica con DXA (T ≤ −2.5) o con una fractura por fragilidad, y se trata con bisfosfonatos.',
      nn: [], yt: 'hypercalcemia approach PTH osteoporosis treatment',
      video: [
        { ch: 'El calcio y quién lo regula', sc: [
          { v: { k: 'title', t: 'Hipercalcemia y osteoporosis', s: 'Semana 11 · Endocrinología' },
            say: 'Semana once: el metabolismo del calcio. Dos temas: la hipercalcemia, que en consulta casi siempre es por paratiroides y en el hospital casi siempre es por cáncer, y la osteoporosis, que se trata para evitar fracturas. Vamos con una paciente de cada uno.' },
          { v: { k: 'case', t: 'Piedras y huesos', p: { name: 'Leticia', age: 58, sex: 'M', skin: '#E2B08A', hair: '#5A4A3A', gown: '#B48CFF' }, text: 'Tercer cálculo renal en dos años. Estreñimiento, cansancio y algo de tristeza. DXA de cadera con T-score de −2.7.', vit: { Ca: '11.4', P: '2.2', PTH: '128', Alb: '4.0' } },
            say: 'Leticia tiene cincuenta y ocho años y va por su tercer cálculo renal en dos años. Tiene estreñimiento, cansancio y se siente triste. Su calcio es de once punto cuatro, el fósforo está bajo y la paratohormona alta. Su densitometría de cadera da una T de menos dos punto siete.' },
          { v: { k: 'flow', t: 'Quién regula el calcio', steps: ['Calcio baja: sube la PTH', 'PTH saca calcio del hueso', 'PTH retiene calcio en el riñón y bota fósforo', 'PTH activa la vitamina D', 'Vitamina D absorbe calcio en el intestino'] },
            say: 'Cuando el calcio baja, sube la paratohormona. La PTH saca calcio del hueso, lo retiene en el riñón mientras elimina fósforo, y activa la vitamina D, que absorbe calcio en el intestino. Por eso en el hiperparatiroidismo el calcio sube y el fósforo baja.' },
          { v: { k: 'big', h: 'Calcio corregido', t: 'Ca + 0.8 × (4 − albúmina)', s: 'Hipercalcemia: más de 10.5 mg/dL. Grave: 14 o más. Si hay duda, mide calcio iónico.' },
            say: 'Antes de interpretar, corrige el calcio por la albúmina: al calcio medido súmale cero punto ocho por cada gramo que la albúmina esté por debajo de cuatro. Hay hipercalcemia con más de diez punto cinco, y es grave con catorce o más.' }
        ] },
        { ch: 'Hipercalcemia: la causa', sc: [
          { v: { k: 'list', t: 'Clínica: huesos, piedras, quejas y gemidos', items: ['Huesos: dolor, osteoporosis', 'Piedras: litiasis, poliuria', 'Quejas: estreñimiento, náusea, pancreatitis', 'Gemidos: confusión, depresión, coma', 'ECG: QT corto'] },
            say: 'La clínica se recuerda con huesos, piedras, quejas abdominales y gemidos psíquicos: dolor óseo y osteoporosis; cálculos renales y poliuria; estreñimiento, náusea, úlcera y pancreatitis; y confusión, depresión o coma. En el electrocardiograma, QT corto.' },
          { v: { k: 'vs', a: 'PTH alta o normal', b: 'PTH baja', rows: [['Causa #1', 'Hiperparatiroidismo primario', 'Cáncer'], ['Dónde', 'Paciente ambulatorio', 'Paciente hospitalizado'], ['Mecanismo', 'Adenoma en 85%', 'PTHrP, metástasis, calcitriol'], ['Siguiente estudio', 'Calciuria', 'PTHrP, vitamina D, electroforesis']] },
            say: 'El primer estudio es la PTH. Si está alta o inapropiadamente normal, es hiperparatiroidismo primario, la causa número uno en consulta, casi siempre por un adenoma único. Si está suprimida, piensa en cáncer, la causa número uno en hospitalizados: por péptido relacionado con PTH en el carcinoma epidermoide, por metástasis óseas o mieloma, o por calcitriol en linfomas. Ahí se piden PTHrP, niveles de vitamina D y electroforesis de proteínas.' },
          { v: { k: 'list', t: 'Otras con PTH baja', items: ['Granulomatosas: sarcoidosis, TB (calcitriol)', 'Intoxicación por vitamina D', 'Tiazidas', 'Inmovilización', 'Síndrome de leche y alcalinos'] },
            say: 'Otras causas con PTH baja: enfermedades granulomatosas como sarcoidosis y tuberculosis, cuyos macrófagos fabrican calcitriol; intoxicación por vitamina D; tiazidas; inmovilización prolongada; y el síndrome de leche y alcalinos.' },
          { v: { k: 'tip', kind: 'trap', t: 'Calcio alto con PTH normal y calciuria MUY baja = hipercalcemia hipocalciúrica familiar. No se opera.' },
            say: 'Trampa: calcio alto con PTH normal o algo alta y calcio en orina muy bajo. Es hipercalcemia hipocalciúrica familiar, por un receptor de calcio defectuoso. Es benigna y no se opera.' },
          { v: { k: 'quiz', q: 'Fumador con masa pulmonar central, Ca 14.8, PTH suprimida. ¿Mecanismo?', opts: ['Adenoma paratiroideo', 'PTHrP por carcinoma epidermoide', 'Exceso de vitamina D'], a: 1 },
            say: 'Pausa. Fumador con una masa pulmonar central, calcio de catorce punto ocho y PTH suprimida. ¿Cuál es el mecanismo?',
            exp: 'Péptido relacionado con la PTH secretado por un carcinoma epidermoide. Imita a la PTH en hueso y riñón, pero la PTH real queda suprimida.' }
        ] },
        { ch: 'Tratar la hipercalcemia', sc: [
          { v: { k: 'flow', t: 'Grave o sintomática', steps: ['Salina 0.9% 200 a 300 mL/h', 'Calcitonina: rápida, dura 48 h', 'Ácido zoledrónico IV: actúa en 2 a 4 días', 'ERC o refractaria: denosumab', 'Granulomatosa o linfoma: esteroide', 'Falla renal: hemodiálisis'] },
            say: 'La hipercalcemia grave o sintomática se trata primero con salina, porque el paciente está deshidratado por la poliuria. Luego calcitonina, que baja el calcio en horas pero deja de funcionar a las cuarenta y ocho, y ácido zoledrónico intravenoso, que tarda dos a cuatro días pero dura. Denosumab si hay enfermedad renal. Esteroides si es granulomatosa o por linfoma. Y hemodiálisis si hay falla renal. El diurético de asa solo si hay sobrecarga.' },
          { v: { k: 'list', t: 'Paratiroidectomía si', items: ['Síntomas', 'Ca más de 1 mg/dL sobre lo normal', 'Osteoporosis o fractura vertebral', 'TFG menor de 60 o litiasis', 'Menor de 50 años'] },
            say: 'En el hiperparatiroidismo primario, la cirugía es para todos los sintomáticos, y en asintomáticos si el calcio está más de uno por encima de lo normal, hay osteoporosis o fractura vertebral, filtrado menor de sesenta, litiasis o edad menor de cincuenta. Si no se opera, cinacalcet, bisfosfonato y vigilancia.' }
        ] },
        { ch: 'Osteoporosis', sc: [
          { v: { k: 'list', t: 'Factores de riesgo', items: ['Edad, mujer, menopausia', 'Glucocorticoides 3 meses o más', 'Bajo peso, tabaco, alcohol', 'Fractura previa o de cadera en la madre', 'AR, hipertiroidismo, IBP, heparina'] },
            say: 'Los factores de riesgo de osteoporosis son la edad, ser mujer y la menopausia, los glucocorticoides por tres meses o más, el bajo peso, el tabaco y el alcohol, una fractura previa o de cadera en la madre, la artritis reumatoide, el hipertiroidismo y fármacos como inhibidores de bomba y heparina.' },
          { v: { k: 'vs', a: 'T-score', b: 'Diagnóstico', rows: [['Mayor de −1', 'Normal', '—'], ['−1 a −2.5', 'Osteopenia', 'Tratar si FRAX alto'], ['−2.5 o menos', 'Osteoporosis', 'Tratar'], ['Fractura por fragilidad', 'Osteoporosis', 'Sin importar el T-score']] },
            say: 'Se diagnostica con densitometría de columna y cadera: T score mayor de menos uno es normal, de menos uno a menos dos punto cinco es osteopenia y de menos dos punto cinco o menos es osteoporosis. Una fractura de cadera o vertebral por fragilidad también es osteoporosis, sin importar el T score. Se tamiza a mujeres de sesenta y cinco años o más y a hombres de setenta o más.' },
          { v: { k: 'flow', t: 'Tratamiento', steps: ['Calcio 1000 a 1200 mg y vitamina D 800 a 1000 UI', 'Ejercicio, evitar caídas, dejar de fumar', 'Bisfosfonato: alendronato o zoledronato', 'ERC: denosumab', 'Riesgo muy alto: teriparatida'] },
            say: 'Todos reciben calcio y vitamina D, ejercicio y prevención de caídas. El fármaco de primera línea es un bisfosfonato: alendronato oral semanal en ayunas y de pie media hora, o ácido zoledrónico intravenoso anual, por tres a cinco años. En enfermedad renal avanzada, denosumab, que no se debe suspender sin cubrir. Y en riesgo muy alto, anabólicos como teriparatida.' },
          { v: { k: 'quiz', q: 'Mujer con alendronato desde hace 6 años, dolor en el muslo al caminar. ¿Qué sospechas?', opts: ['Osteoartritis de cadera', 'Fractura atípica de fémur', 'Hipocalcemia'], a: 1 },
            say: 'Pausa. Una mujer que toma alendronato desde hace seis años refiere dolor en el muslo al caminar. ¿Qué sospechas?',
            exp: 'Fractura atípica de fémur, una complicación del uso prolongado de bisfosfonatos. Por eso, después de tres a cinco años se valoran unas vacaciones del fármaco. Pide radiografía de ambos fémures.' }
        ] },
        { ch: 'Cierre del caso', sc: [
          { v: { k: 'list', t: 'Leticia: final del caso', items: ['Ca alto, PTH alta, P bajo: hiperparatiroidismo primario', 'Calciuria alta: no es HHF', 'Litiasis + osteoporosis: cirugía', 'Sestamibi: adenoma inferior derecho', 'Tras la cirugía: calcio normal; alendronato'] },
            say: 'Leticia tiene hiperparatiroidismo primario, y su calcio en orina alto descarta la hipercalcemia hipocalciúrica familiar. Con litiasis y osteoporosis tiene indicación de cirugía. El gammagrama con sestamibi localiza un adenoma inferior derecho. Después de la cirugía, su calcio se normaliza, y para la osteoporosis recibe alendronato con calcio y vitamina D.' },
          { v: { k: 'tip', kind: 'pearl', t: 'El sestamibi o el USG NO diagnostican el hiperparatiroidismo: el diagnóstico es bioquímico. La imagen solo planea la cirugía.' },
            say: 'Perla: el gammagrama con sestamibi y el ultrasonido no diagnostican el hiperparatiroidismo. El diagnóstico es con calcio y PTH; la imagen solo sirve para planear la cirugía.' },
          { v: { k: 'mnemo', t: 'PTH alta en consulta · cáncer en hospital', d: 'Grave: salina → calcitonina → zoledronato. T ≤ −2.5 = osteoporosis: calcio, vitamina D y bisfosfonato.' },
            say: 'Llévate esto: PTH alta en consulta, cáncer en hospital; salina, calcitonina y zoledronato en la grave; y en la osteoporosis, bisfosfonato con calcio y vitamina D. Ahora mueve el T score en el simulador del taller.' }
        ] }
      ],
      sections: [
        { h: 'Causas de hipercalcemia', html: `
<ul>
<li><b>Calcio corregido</b> = Ca medido + 0.8 × (4 − albúmina). Hipercalcemia &gt;10.5 mg/dL; grave ≥14.</li>
<li><b>Hiperparatiroidismo primario</b> (la #1 en ambulatorios): adenoma único (85 %), hiperplasia (MEN 1 y 2A), carcinoma. Ca alto, <b>PTH alta o inapropiadamente normal</b>, fósforo bajo, calciuria normal-alta.</li>
<li><b>Cáncer</b> (la #1 en hospitalizados): <b>PTHrP</b> (carcinoma epidermoide de pulmón, mama, riñón), metástasis osteolíticas (mama, <b>mieloma</b>), calcitriol (linfoma). PTH suprimida.</li>
<li>Otras con PTH baja: <b>granulomatosas</b> (sarcoidosis, TB: calcitriol alto), intoxicación por vitamina D, tiazidas, litio (PTH alta), inmovilización, hipertiroidismo, síndrome de leche y alcalinos, insuficiencia suprarrenal.</li>
<li><b>Hipercalcemia hipocalciúrica familiar</b> (receptor CaSR): PTH normal-alta, <b>calciuria muy baja</b> (cociente de depuración Ca/Cr &lt;0.01); benigna, no se opera.</li>
<li><b>Hiperparatiroidismo terciario</b>: ERC con PTH autónoma (Ca alto).</li>
</ul>` },
        { h: 'Clínica y estudio', html: `
<ul>
<li>“Huesos, piedras, quejas abdominales y gemidos psíquicos”: dolor óseo, osteoporosis, osteítis fibrosa quística; nefrolitiasis, nefrocalcinosis, <b>poliuria</b> (DI nefrogénica); estreñimiento, náusea, úlcera, pancreatitis; confusión, depresión, coma. <b>QT corto</b>.</li>
<li>Estudio: Ca corregido (o iónico) → <b>PTH</b>. Alta → hiperparatiroidismo (calciuria para descartar HHF; gammagrama sestamibi/USG solo para planear cirugía). Baja → <b>PTHrP</b>, 25-OH vitamina D, 1,25-(OH)₂ vitamina D, electroforesis de proteínas (mieloma).</li>
</ul>` },
        { h: 'Tratamiento', html: `
<ul>
<li><b>Grave (≥14) o sintomática</b>: <b>salina 0.9 %</b> (200–300 mL/h) → <b>calcitonina</b> SC/IM (rápida, taquifilaxia en 48 h) → <b>ácido zoledrónico</b> IV (efecto en 2–4 días); <b>denosumab</b> si hay ERC o refractaria; glucocorticoides en granulomatosas/linfoma/vitamina D; <b>hemodiálisis</b> si hay falla renal. Diurético de asa solo si hay sobrecarga.</li>
<li><b>Hiperparatiroidismo primario</b>: <b>paratiroidectomía</b> si hay síntomas, o asintomático con: Ca &gt;1 mg/dL sobre el normal, osteoporosis (T ≤ −2.5) o fractura vertebral, TFG &lt;60, litiasis/nefrocalcinosis o calciuria alta, edad &lt;50. Si no se opera: cinacalcet, bisfosfonato, vigilancia.</li>
</ul>` },
        { h: 'Osteoporosis', html: `
<ul>
<li>Factores de riesgo: edad, sexo femenino, menopausia, bajo peso, <b>glucocorticoides ≥3 meses</b>, tabaquismo, alcohol, antecedente de fractura (personal o materna de cadera), AR, hipogonadismo, hipertiroidismo, IBP, anticonvulsivos, heparina.</li>
<li><b>DXA</b> (columna y cadera): <b>T-score</b> &gt;−1 normal · −1 a −2.5 osteopenia · <b>≤ −2.5 osteoporosis</b>. Z-score en premenopáusicas y hombres &lt;50. Tamizaje: mujeres ≥65 años (o antes con riesgo) y hombres ≥70.</li>
<li>También es osteoporosis: <b>fractura de cadera o vertebral por fragilidad</b> (sin importar el T-score), u osteopenia con <b>FRAX</b> alto (cadera ≥3 % o mayor ≥20 % a 10 años).</li>
<li>Estudio de causas secundarias: Ca, P, creatinina, FA, 25-OH vitamina D, TSH, PTH, BH, EPS (mieloma), testosterona en hombres.</li>
<li>Tratamiento: calcio (1000–1200 mg/día) + <b>vitamina D</b> (800–1000 UI), ejercicio, evitar caídas, dejar de fumar. Fármaco de 1ª línea: <b>bisfosfonatos</b> (alendronato oral semanal en ayunas y de pie 30 min; ácido zoledrónico IV anual) por 3–5 años y “vacaciones”. Efectos: esofagitis, osteonecrosis de mandíbula, fractura atípica de fémur; no con TFG &lt;30–35.</li>
<li>Alternativas: <b>denosumab</b> (anti-RANKL c/6 meses; sirve en ERC; no suspender sin cubrir), raloxifeno (SERM; riesgo de TEV), <b>teriparatida/abaloparatida</b> (anabólicos, máximo 2 años, en riesgo muy alto), romosozumab.</li>
</ul>` },
        { h: 'Cómo lo preguntan en el examen', html: `
<ul>
<li>Mujer de 58 años con litiasis, Ca 11.4, PTH alta, P bajo → <b>adenoma paratiroideo</b> → cirugía.</li>
<li>Fumador con masa pulmonar, Ca 14.8, PTH baja → <b>PTHrP</b> (epidermoide) → salina + calcitonina + zoledronato.</li>
<li>Ca alto, PTH normal y calciuria muy baja → <b>HHF</b>: no operar.</li>
<li>Sarcoidosis con Ca alto → calcitriol por macrófagos → <b>esteroides</b>.</li>
<li>T-score −2.8 → osteoporosis → <b>alendronato</b> + calcio + vitamina D.</li>
</ul>` }
      ],
      mnemo: { t: 'Huesos, piedras, quejas y gemidos', d: 'Dolor óseo, litiasis renal, síntomas abdominales y psiquiátricos: la clínica de la hipercalcemia. PTH alta en ambulatorio; cáncer en hospitalizado.' },
      pearl: 'La calcitonina actúa en horas pero se agota en 48 h; el zoledronato tarda 2–4 días pero dura semanas: se dan juntos en la hipercalcemia grave.',
      trap: 'Hipercalcemia con PTH “normal” no es normal: una PTH no suprimida con calcio alto es hiperparatiroidismo primario (o HHF si la calciuria es muy baja).',
      guide: [
        'Quinto taller internacional de hiperparatiroidismo (2022): cirugía en asintomáticos con Ca >1 mg/dL sobre el normal, osteoporosis, TFG <60, litiasis o hipercalciuria, o edad <50.',
        'Tu guía usa FRAX ≥3 % (cadera) o ≥20 % (mayor) para tratar osteopenia; coincide con la NOF/BHOF.'
      ],
      refs: [
        'Walker MD, Shane E. Hypercalcemia: a review. JAMA 2022.',
        'Bilezikian JP, et al. Evaluation and management of primary hyperparathyroidism: Fifth International Workshop. J Bone Miner Res 2022.',
        'Eastell R, et al. Pharmacological management of osteoporosis in postmenopausal women: Endocrine Society Guideline. J Clin Endocrinol Metab 2019 (actualización 2020).',
        'LeBoff MS, et al. The clinician’s guide to prevention and treatment of osteoporosis (BHOF). Osteoporos Int 2022.'
      ]
    }
  },

  guias: {
    calcio: { src: ENDO,
      puntos: [
        'Hiperparatiroidismo primario: la #1 en ambulatorios (adenoma 85 %, hiperplasia 15 %, MEN, litio). Neoplasias: PTHrP (epidermoides), vitamina D (linfomas). Granulomas: vitamina D.',
        'HHF (receptor CaSR): hipocalciuria con cociente de depuración &lt;0.01.',
        'Clínica: osteoporosis, osteítis fibrosa, nefrolitiasis, nefrocalcinosis, dolor abdominal, estreñimiento, pancreatitis; crisis con poliuria y deshidratación.',
        'Tratamiento agudo: salina + calcitonina SC + bisfosfonato (pamidronato o zoledronato); denosumab en falla renal.',
        'Osteoporosis: DXA en mujeres ≥65 y hombres ≥70; T &lt;−2.5; tratar si fractura, T ≤−2.5 o FRAX alto; calcio 1000 mg, vitamina D 800 UI, bisfosfonatos 5 años, raloxifeno, teriparatida (&lt;2 años), denosumab.'
      ],
      ojo: ['El diurético de asa ya no es parte del tratamiento rutinario de la hipercalcemia: solo si hay sobrecarga de volumen tras hidratar.'],
      cards: [['Calcio corregido', 'Ca + 0.8 × (4 − albúmina)']] }
  },

  cards: [
    ['Causa #1 de hipercalcemia ambulatoria', 'Hiperparatiroidismo primario (adenoma)'],
    ['Causa #1 de hipercalcemia hospitalaria', 'Cáncer'],
    ['Primer estudio en hipercalcemia', 'PTH'],
    ['Hiperparatiroidismo primario: labs', 'Ca alto, PTH alta/normal, fósforo bajo'],
    ['PTHrP', 'Carcinoma epidermoide (pulmón, cabeza y cuello), mama, riñón'],
    ['Hipercalcemia en sarcoidosis', 'Calcitriol por granulomas → esteroides'],
    ['HHF', 'Ca alto, PTH normal, calciuria muy baja (Ca/Cr <0.01); no operar'],
    ['Clínica de hipercalcemia', 'Huesos, piedras, quejas abdominales, gemidos psíquicos; QT corto'],
    ['Hipercalcemia grave: tratamiento', 'Salina 0.9 % + calcitonina + ácido zoledrónico'],
    ['Hipercalcemia con ERC', 'Denosumab (o diálisis)'],
    ['Osteoporosis por DXA', 'T-score ≤ −2.5'],
    ['Osteopenia', 'T-score −1 a −2.5'],
    ['Tamizaje de osteoporosis', 'Mujeres ≥65 años, hombres ≥70'],
    ['1ª línea en osteoporosis', 'Bisfosfonatos (alendronato, zoledronato) + calcio + vitamina D'],
    ['Efectos raros de bisfosfonatos', 'Osteonecrosis de mandíbula, fractura atípica de fémur'],
    ['Anabólico para osteoporosis', 'Teriparatida (máx 2 años)']
  ],

  questions: [
    q({ id: 'calcio-01', dif: 1, stem: 'Mujer de 58 años con litiasis renal recurrente. Ca 11.6, P 2.2, PTH 140 pg/mL (alta). ¿Diagnóstico?', opts: ['Hipercalcemia maligna', 'Hiperparatiroidismo primario', 'Intoxicación por vitamina D', 'Sarcoidosis', 'HHF'], ans: 1,
      exp: 'Ca alto con PTH alta y fósforo bajo: hiperparatiroidismo primario, casi siempre por adenoma único.', why: ['La PTH estaría suprimida.', '', 'La PTH estaría suprimida.', 'La PTH estaría suprimida.', 'La calciuria sería muy baja y es benigna; menos probable con litiasis.'], ref: 'Walker, JAMA 2022' }),
    q({ id: 'calcio-02', dif: 2, stem: 'Hombre de 66 años fumador con masa pulmonar central y confusión. Ca 14.9, PTH suprimida. ¿Mecanismo más probable?', opts: ['Adenoma paratiroideo', 'PTHrP (carcinoma epidermoide)', 'Calcitriol por linfoma', 'HHF', 'Hipertiroidismo'], ans: 1,
      exp: 'El carcinoma epidermoide de pulmón produce PTHrP (hipercalcemia humoral maligna), con PTH suprimida.', why: ['La PTH estaría alta.', '', 'Es de linfomas.', 'PTH normal y calciuria baja.', 'No hay datos.'], ref: 'Walker, JAMA 2022' }),
    q({ id: 'calcio-03', dif: 2, stem: 'Paciente con Ca 15.2, deshidratación y somnolencia. ¿Manejo inicial?', opts: ['Furosemida IV sola', 'Salina 0.9 % IV + calcitonina + ácido zoledrónico', 'Calcio oral', 'Tiazida', 'Solo zoledronato oral'], ans: 1,
      exp: 'Hidratación (la hipercalcemia causa poliuria y depleción), calcitonina para el efecto rápido y bisfosfonato para el sostenido.', why: ['Sin hidratar empeora; solo si hay sobrecarga.', '', 'Absurdo.', 'Las tiazidas suben el calcio.', 'El zoledronato es IV y tarda días.'], ref: 'Walker, JAMA 2022' }),
    q({ id: 'calcio-04', dif: 2, stem: 'Paciente con Ca 10.9 asintomático, PTH en rango normal-alto y calciuria de 24 h muy baja (cociente Ca/Cr 0.006). Su madre tiene lo mismo. ¿Conducta?', opts: ['Paratiroidectomía', 'No operar: hipercalcemia hipocalciúrica familiar', 'Bisfosfonato IV', 'Furosemida', 'Cinacalcet urgente'], ans: 1,
      exp: 'HHF (mutación del receptor sensor de calcio): benigna; la cirugía no la corrige.', why: ['No la cura.', '', 'No está indicado.', 'No está indicado.', 'No es necesario.'], ref: 'Bilezikian 2022' }),
    q({ id: 'calcio-05', dif: 2, stem: 'Mujer de 45 años con hiperparatiroidismo primario asintomático, Ca 11.0, DXA con T −1.2, TFG normal. ¿Tiene indicación quirúrgica?', opts: ['No, porque es asintomática', 'Sí: edad menor de 50 años', 'Solo si el Ca pasa de 14', 'Solo si tiene fractura', 'Nunca'], ans: 1,
      exp: 'Indicaciones en asintomáticos: Ca >1 mg/dL sobre el normal, osteoporosis o fractura vertebral, TFG <60, litiasis o hipercalciuria, o edad <50.', why: ['Tiene un criterio.', '', 'Umbral incorrecto.', 'No es el único criterio.', 'Incorrecto.'], ref: 'Bilezikian 2022' }),
    q({ id: 'calcio-06', dif: 2, stem: 'Paciente con sarcoidosis con Ca 12.4, PTH baja y 1,25-(OH)₂ vitamina D alta. ¿Tratamiento?', opts: ['Paratiroidectomía', 'Glucocorticoides', 'Más vitamina D', 'Tiazida', 'Calcio oral'], ans: 1,
      exp: 'Los granulomas tienen 1-alfa-hidroxilasa y producen calcitriol; los esteroides la inhiben.', why: ['PTH baja: no es paratiroideo.', '', 'Empeora.', 'Sube el calcio.', 'Empeora.'], ref: 'Walker, JAMA 2022' }),
    q({ id: 'calcio-07', dif: 1, stem: '¿Qué hallazgo del ECG es típico de la hipercalcemia?', opts: ['QT largo', 'QT corto', 'Ondas U', 'T picudas', 'Onda delta'], ans: 1,
      exp: 'El calcio alto acorta el QT (el bajo lo alarga).', why: ['Es de hipocalcemia.', '', 'Es de hipokalemia.', 'Es de hiperkalemia.', 'Es de WPW.'], ref: 'Walker, JAMA 2022' }),
    q({ id: 'calcio-08', dif: 1, stem: 'Mujer de 67 años con DXA: T-score de columna −2.9. ¿Diagnóstico?', opts: ['Normal', 'Osteopenia', 'Osteoporosis', 'Osteomalacia', 'Paget'], ans: 2,
      exp: 'T-score ≤ −2.5 = osteoporosis.', why: ['Es >−1.', 'Es entre −1 y −2.5.', '', 'Es por déficit de vitamina D, se diagnostica distinto.', 'Es otra enfermedad.'], ref: 'BHOF 2022' }),
    q({ id: 'calcio-09', dif: 2, stem: 'La paciente anterior, con función renal normal. ¿Tratamiento de primera línea?', opts: ['Solo calcio', 'Alendronato semanal + calcio + vitamina D', 'Teriparatida de entrada', 'Estrógenos a los 67 años', 'Calcitonina nasal'], ans: 1,
      exp: 'Los bisfosfonatos son primera línea (reducen fracturas vertebrales y de cadera).', why: ['Insuficiente.', '', 'Se reserva para riesgo muy alto.', 'No se inician a esa edad para osteoporosis.', 'Poco eficaz.'], ref: 'Endocrine Society 2019' }),
    q({ id: 'calcio-10', dif: 2, stem: '¿Cómo se debe tomar el alendronato oral?', opts: ['Con la comida y acostado', 'En ayunas con un vaso de agua y permanecer de pie 30 minutos', 'Con leche', 'En la noche con calcio', 'Con café'], ans: 1,
      exp: 'Se absorbe mal y causa esofagitis: en ayunas, con agua, de pie 30 minutos antes de comer.', why: ['Aumenta la esofagitis y no se absorbe.', '', 'El calcio impide la absorción.', 'Mismo problema.', 'Reduce la absorción.'], ref: 'BHOF 2022' }),
    q({ id: 'calcio-11', dif: 2, stem: 'Mujer de 72 años con fractura de cadera tras caerse de su propia altura y DXA con T −2.1. ¿Tiene osteoporosis?', opts: ['No, porque el T es mayor de −2.5', 'Sí: la fractura de cadera por fragilidad define osteoporosis', 'Solo osteopenia', 'Necesita biopsia', 'Depende del Z-score'], ans: 1,
      exp: 'Una fractura de cadera o vertebral por fragilidad establece el diagnóstico clínico de osteoporosis y la indicación de tratamiento.', why: ['La fractura define el diagnóstico.', '', 'Incorrecto.', 'No es necesaria.', 'No aplica.'], ref: 'BHOF 2022' }),
    q({ id: 'calcio-12', dif: 2, stem: 'Paciente con osteoporosis y TFG de 25 mL/min. ¿Qué fármaco prefieres?', opts: ['Alendronato', 'Ácido zoledrónico', 'Denosumab', 'Risedronato', 'Ibandronato'], ans: 2,
      exp: 'Los bisfosfonatos se evitan con TFG <30–35; el denosumab no se elimina por riñón (vigilar hipocalcemia).', why: ['Contraindicado.', 'Contraindicado.', '', 'Contraindicado.', 'Contraindicado.'], ref: 'Endocrine Society 2019' }),
    q({ id: 'calcio-13', dif: 3, stem: 'Paciente que usó denosumab 4 años y lo suspendió sin otro tratamiento; a los 9 meses presenta múltiples fracturas vertebrales. ¿Qué ocurrió?', opts: ['Osteonecrosis', 'Efecto rebote tras suspender denosumab', 'Paget', 'Mieloma', 'Osteomalacia'], ans: 1,
      exp: 'Al suspender el denosumab hay rebote de la resorción con fracturas vertebrales múltiples; se debe continuar con un bisfosfonato.', why: ['No explica.', '', 'No hay datos.', 'Posible, pero el contexto es típico del rebote.', 'No hay datos.'], ref: 'Endocrine Society 2019' }),
    q({ id: 'calcio-14', dif: 2, stem: 'Paciente con Ca 13 y anemia, insuficiencia renal y dolor lumbar. ¿Qué estudio pides para la causa?', opts: ['PTHrP', 'Electroforesis de proteínas e inmunofijación (mieloma)', 'TSH', 'Gammagrama paratiroideo', 'Cortisol'], ans: 1,
      exp: 'CRAB (calcio, renal, anemia, huesos) sugiere mieloma múltiple.', why: ['Menos probable con este cuadro.', '', 'No explica.', 'No es la causa.', 'No explica.'], ref: 'Walker, JAMA 2022' }),
    q({ id: 'calcio-15', dif: 2, stem: 'Paciente con litio crónico y Ca alto con PTH alta. ¿Qué explica el cuadro?', opts: ['Hipotiroidismo', 'El litio sube el punto de ajuste del sensor de calcio (hiperparatiroidismo)', 'PTHrP', 'Vitamina D', 'Inmovilización'], ans: 1,
      exp: 'El litio desplaza el umbral del receptor sensor de calcio en la paratiroides y causa hipercalcemia con PTH alta.', why: ['No explica.', '', 'La PTH estaría baja.', 'La PTH estaría baja.', 'No hay datos.'], ref: 'Walker, JAMA 2022' })
  ]
};
