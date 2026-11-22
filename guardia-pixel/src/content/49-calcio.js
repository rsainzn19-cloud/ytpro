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
        { ch: 'Hipercalcemia', sc: [
          { v: { k: 'title', t: 'Hipercalcemia y osteoporosis', s: 'Semana 11 · Endocrinología' },
            say: 'Semana once: el calcio. Cuando sube, da huesos que duelen, piedras en el riñón, quejas abdominales y alteraciones mentales. Y la osteoporosis es el hueso que se rompe con poco.' },
          { v: { k: 'flow', t: 'Hipercalcemia', steps: ['Corrige por albúmina', 'Mide PTH', 'Alta: hiperparatiroidismo', 'Baja: PTHrP y vitamina D'] },
            say: 'Primero corrige el calcio por la albúmina. Luego mide la hormona paratiroidea. Si está alta o inapropiadamente normal, es hiperparatiroidismo primario. Si está suprimida, busca cáncer con la proteína relacionada a la PTH y mide vitamina D.' },
          { v: { k: 'list', t: 'Huesos, piedras, quejas y gemidos', items: ['Huesos: dolor, osteoporosis', 'Piedras: litiasis renal', 'Quejas abdominales: estreñimiento, úlcera, pancreatitis', 'Gemidos psíquicos: confusión, depresión', 'Poliuria y QT corto'] },
            say: 'La clínica es huesos, piedras, quejas abdominales y gemidos psíquicos. Además poliuria por diabetes insípida nefrogénica y QT corto en el electro.' },
          { v: { k: 'list', t: 'Hipercalcemia grave', items: ['Salina 0.9 % abundante', 'Calcitonina: efecto rápido', 'Ácido zoledrónico: efecto en 2 a 4 días', 'Denosumab si hay falla renal'] },
            say: 'Si es grave, catorce o más, o da síntomas: solución salina abundante, calcitonina para el efecto rápido, y ácido zoledrónico para mantenerlo. El diurético de asa solo si hay sobrecarga de volumen.' }
        ] },
        { ch: 'Osteoporosis', sc: [
          { v: { k: 'vs', a: 'T-score', b: 'Qué hacer', rows: [['Normal', 'Mayor de −1', 'Prevención'], ['Osteopenia', '−1 a −2.5', 'Calcular FRAX'], ['Osteoporosis', '−2.5 o menor', 'Tratar']] },
            say: 'La osteoporosis se diagnostica con densitometría. Un T score de menos dos punto cinco o menor es osteoporosis. Y una fractura de cadera o vertebral por fragilidad es osteoporosis aunque la densitometría no llegue a ese número.' },
          { v: { k: 'quiz', q: 'Mujer de 70 años con fractura de cadera por caída de su altura. ¿Qué das?', opts: ['Solo calcio y vitamina D', 'Bisfosfonato con calcio y vitamina D', 'Nada'], a: 1 },
            say: 'Pausa. Mujer de setenta años que se fracturó la cadera al caerse de su propia altura. ¿Qué le das?',
            exp: 'Bisfosfonato, como alendronato o ácido zoledrónico, con calcio y vitamina D. La fractura por fragilidad ya es osteoporosis.' },
          { v: { k: 'mnemo', t: 'Huesos, piedras, quejas y gemidos', d: 'Dolor óseo, litiasis, síntomas abdominales y psiquiátricos: la hipercalcemia.' },
            say: 'Llévate esto: PTH alta en el paciente ambulatorio, cáncer en el hospitalizado. Y para la osteoporosis, bisfosfonato, calcio y vitamina D.' }
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
