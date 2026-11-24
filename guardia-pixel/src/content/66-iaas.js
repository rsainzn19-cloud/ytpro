// Tema 52 · Infecciones asociadas a la atención de la salud (Infectología, semana 8)
const T = { topic: 'iaas', subj: 'infecto' };
const q = (o) => ({ ...T, ...o });
const SRC = { short: 'De tu Guía Infecto', vs: 'tu guía', name: 'Guía Infecto · Ximena Cors Cepeda (EMIS 5)', url: 'https://docs.google.com/document/d/1z8GAmFxqoyJtS21XWHwMlvykDNaoEMW07PgJh45aMwY/edit' };

export default {
  lessons: {
    iaas: {
      hook: 'Las infecciones intrahospitalarias son cinco: del torrente por catéter, IVU por sonda, neumonía nosocomial/asociada a ventilador, del sitio quirúrgico y C. difficile. La mejor medicina es la prevención: higiene de manos y retirar lo que no se necesita.',
      nn: [], yt: 'hospital acquired infections CLABSI CAUTI C difficile',
      video: [
        { ch: 'Las infecciones que da el hospital', sc: [
          { v: { k: 'title', t: 'Infecciones intrahospitalarias', s: 'Semana 8 · Infectología' },
            say: 'Semana ocho: las infecciones asociadas a la atención de la salud. Son las que el paciente no traía y se lleva del hospital: las de catéter, las de sonda urinaria, la neumonía del ventilador, la del sitio quirúrgico y Clostridioides difficile. La mayoría se puede prevenir.' },
          { v: { k: 'case', t: 'Fiebre en el día 9', p: { name: 'Doña Teresa', age: 71, sex: 'M', skin: '#E2B08A', hair: '#B0B0B0', gown: '#5EEAD4' }, text: 'Hospitalizada por neumonía, recibió ceftriaxona y levofloxacino. Tiene catéter venoso central yugular y sonda urinaria. Hoy: fiebre y 6 evacuaciones líquidas.', vit: { T: '38.7', FC: '112', Leucos: '22 000', Cr: '1.8' } },
            say: 'Doña Teresa tiene setenta y un años y lleva nueve días hospitalizada por neumonía. Recibió ceftriaxona y levofloxacino. Tiene un catéter venoso central en la yugular y una sonda urinaria. Hoy tiene fiebre y seis evacuaciones líquidas. Sus leucocitos son de veintidós mil y la creatinina subió a uno punto ocho. ¿De dónde viene la fiebre?' },
          { v: { k: 'list', t: 'Las cinco grandes', items: ['Bacteriemia por catéter', 'IVU asociada a sonda', 'Neumonía intrahospitalaria y del ventilador', 'Infección del sitio quirúrgico', 'Clostridioides difficile'] },
            say: 'Son cinco las grandes: la bacteriemia asociada a catéter central, la infección urinaria asociada a sonda, la neumonía intrahospitalaria y la asociada a ventilador, la infección del sitio quirúrgico y la diarrea por Clostridioides difficile.' },
          { v: { k: 'big', h: 'Lo que más previene', t: 'Higiene de manos', s: 'En los 5 momentos. Agua y jabón si hay C. difficile: el alcohol no mata las esporas.' },
            say: 'La medida que más previene todas es la higiene de manos en los cinco momentos: antes de tocar al paciente, antes de un procedimiento limpio, después del riesgo de exposición a fluidos, después de tocar al paciente y después de tocar su entorno. Y ojo: con difficile, agua y jabón, porque el alcohol no mata las esporas.' }
        ] },
        { ch: 'Catéter y sonda', sc: [
          { v: { k: 'list', t: 'Bacteriemia por catéter', items: ['Estafilococo coagulasa negativo, S. aureus', 'Enterococo, gramnegativos', 'Candida: nutrición parenteral', 'Dx: cultivo del catéter y periférico', 'El del catéter crece 2 h antes'] },
            say: 'La bacteriemia por catéter la causan estafilococos coagulasa negativos, estafilococo dorado, enterococo, gramnegativos y Candida, sobre todo con nutrición parenteral. Se diagnostica con dos hemocultivos, uno del catéter y otro periférico: si el del catéter crece dos horas o más antes, el catéter es el foco.' },
          { v: { k: 'list', t: 'Retira el catéter si hay', items: ['S. aureus o Candida', 'Pseudomonas o micobacterias', 'Choque o endocarditis', 'Tromboflebitis supurada', 'Bacteriemia de más de 72 h'] },
            say: 'Se trata con vancomicina, más cobertura de gramnegativos según la gravedad, y una equinocandina si hay riesgo de Candida. El catéter se retira si crece estafilococo dorado, Candida, pseudomonas o micobacterias, si hay choque, endocarditis o tromboflebitis supurada, o si la bacteriemia persiste más de setenta y dos horas.' },
          { v: { k: 'vs', a: 'Bacteriuria asintomática', b: 'IVU por sonda', rows: [['Síntomas', 'No', 'Fiebre, dolor, delirio'], ['¿Tratar?', 'No (salvo embarazo o cirugía urológica)', 'Sí, 7 días'], ['Paso clave', 'No cultivar de rutina', 'Cambiar la sonda antes del cultivo'], ['Prevención', 'Retirar la sonda', 'Retirar la sonda']] },
            say: 'Con sonda, casi todos tienen bacterias en la orina: eso es bacteriuria asintomática y no se trata, salvo en el embarazo o antes de cirugía urológica. La infección urinaria asociada a sonda tiene síntomas: fiebre, dolor o delirio sin otra causa. Se cambia o retira la sonda antes de cultivar y se trata siete días. La mejor prevención es quitar la sonda en cuanto no se necesite.' },
          { v: { k: 'quiz', q: 'Paciente con sonda, sin fiebre ni síntomas. Urocultivo con 100 000 UFC de E. coli. ¿Qué haces?', opts: ['Ciprofloxacino 7 días', 'No tratar; valorar retirar la sonda', 'Cambiar la sonda y dar ceftriaxona'], a: 1 },
            say: 'Pausa. Paciente con sonda, sin fiebre ni síntomas, con urocultivo de cien mil colonias de E. coli. ¿Lo tratas?',
            exp: 'No. Es bacteriuria asintomática: tratarla no da beneficio y selecciona resistencias y difficile. Lo útil es preguntarse si la sonda todavía se necesita.' }
        ] },
        { ch: 'Neumonía nosocomial y sitio quirúrgico', sc: [
          { v: { k: 'list', t: 'Neumonía nosocomial y del ventilador', items: ['48 h o más de ingreso o de intubación', 'Pseudomonas, Acinetobacter, BLEE, MRSA', 'Pip-tazo, cefepime o meropenem', '± vancomicina o linezolid', '7 días'] },
            say: 'La neumonía intrahospitalaria aparece cuarenta y ocho horas o más después del ingreso, y la asociada a ventilador, cuarenta y ocho horas o más después de intubar. Los agentes son pseudomonas, Acinetobacter, enterobacterias productoras de betalactamasas y estafilococo resistente. Se trata con un antipseudomonas, más vancomicina o linezolid según el riesgo, por siete días.' },
          { v: { k: 'list', t: 'Prevenir la del ventilador', items: ['Cabecera a 30 a 45 grados', 'Ventana diaria de sedación', 'Prueba de respiración espontánea', 'Higiene oral', 'Extubar lo antes posible'] },
            say: 'Para prevenir la del ventilador: cabecera a treinta o cuarenta y cinco grados, suspender la sedación cada día para valorar, pruebas de respiración espontánea, higiene oral y extubar en cuanto se pueda.' },
          { v: { k: 'list', t: 'Sitio quirúrgico', items: ['Hasta 30 días; 90 con implante', 'S. aureus: el más común', 'Cefazolina 60 min antes de la incisión', 'Cortar el vello, no rasurar', 'Glucosa controlada y normotermia'] },
            say: 'La infección del sitio quirúrgico aparece en los primeros treinta días, o noventa si hay implante. El agente más común es el estafilococo dorado. Se previene con cefazolina en los sesenta minutos previos a la incisión, cortando el vello en lugar de rasurar, con glucosa controlada y manteniendo la temperatura. Se trata abriendo y drenando la herida.' }
        ] },
        { ch: 'Clostridioides difficile', sc: [
          { v: { k: 'list', t: 'Cuándo sospecharlo', items: ['3 o más evacuaciones líquidas en 24 h', 'Antibióticos en las últimas 12 semanas', 'Clindamicina, quinolonas, cefalosporinas', 'Hospitalización, edad, IBP', 'Leucocitosis a veces muy alta'] },
            say: 'Sospecha Clostridioides difficile con tres o más evacuaciones líquidas en veinticuatro horas en alguien que recibió antibióticos en las últimas doce semanas, sobre todo clindamicina, quinolonas y cefalosporinas. Otros factores son la hospitalización, la edad y los inhibidores de bomba de protones. La leucocitosis puede ser muy alta.' },
          { v: { k: 'flow', t: 'Diagnóstico y gravedad', steps: ['Solo en heces diarreicas', 'GDH + toxina; si discordante, PCR', 'Grave: leucocitos 15 000 o más o Cr mayor de 1.5', 'Fulminante: choque, íleo o megacolon', 'No repetir como prueba de curación'] },
            say: 'Se estudia solo en heces diarreicas, con glutamato deshidrogenasa más toxina, y PCR si no coinciden. Es grave si los leucocitos son de quince mil o más o la creatinina pasa de uno punto cinco. Fulminante si hay choque, íleo o megacolon. Y no se repite la prueba para ver si se curó.' },
          { v: { k: 'vs', a: 'Episodio', b: 'Tratamiento', rows: [['No grave o grave', 'Fidaxomicina o vancomicina oral', '10 días'], ['Fulminante', 'Vancomicina oral dosis alta + metronidazol IV', 'Colectomía si perfora'], ['1a recurrencia', 'Fidaxomicina', 'O vancomicina descendente'], ['2 o más recurrencias', 'Trasplante de microbiota fecal', '—']] },
            say: 'Primer episodio, grave o no: fidaxomicina, que tiene menos recurrencias, o vancomicina oral por diez días. Fulminante: vancomicina oral a dosis alta, rectal si hay íleo, más metronidazol intravenoso, y colectomía si perfora o hay megacolon. En recurrencias, fidaxomicina o vancomicina en dosis descendente, y con dos o más, trasplante de microbiota fecal.' },
          { v: { k: 'quiz', q: 'Doña Teresa: toxina positiva, leucocitos 22 000, creatinina 1.8. ¿Tratamiento?', opts: ['Metronidazol oral', 'Vancomicina oral o fidaxomicina', 'Loperamida'], a: 1 },
            say: 'Pausa. Doña Teresa tiene toxina de difficile positiva, leucocitos de veintidós mil y creatinina de uno punto ocho. ¿Qué das?',
            exp: 'Vancomicina oral o fidaxomicina por diez días: es un episodio grave. El metronidazol oral ya no es de primera línea, y la loperamida está contraindicada porque favorece el megacolon.' }
        ] },
        { ch: 'Personal de salud y cierre', sc: [
          { v: { k: 'big', h: 'Pinchazo con aguja hueca', t: 'Regla de 3', s: 'Riesgo de transmisión: VHB ~30% (no vacunado), VHC ~3%, VIH ~0.3%.' },
            say: 'Para el personal de salud, la regla de tres: después de un pinchazo con aguja hueca, el riesgo de contagio es de treinta por ciento para hepatitis B en no vacunados, alrededor de tres por ciento para hepatitis C y cero punto tres por ciento para VIH. Se lava con agua y jabón, se reporta, se toman pruebas basales y se inicia profilaxis de VIH en menos de setenta y dos horas si aplica.' },
          { v: { k: 'list', t: 'Doña Teresa: final del caso', items: ['C. difficile grave: vancomicina oral', 'Aislamiento de contacto, agua y jabón', 'Suspender levofloxacino y el IBP', 'Retirar la sonda que ya no necesita', 'Catéter central: revisar si sigue indicado'] },
            say: 'Doña Teresa tiene difficile grave: recibe vancomicina oral, queda en aislamiento de contacto con lavado de manos con agua y jabón, y se suspenden el levofloxacino y el inhibidor de bomba. Además se retira la sonda urinaria, que ya no necesitaba, y se revisa si el catéter central sigue indicado.' },
          { v: { k: 'tip', kind: 'pearl', t: 'Cada día, pregunta: ¿este paciente todavía necesita la sonda, el catéter y el antibiótico? Retirar a tiempo es la mejor prevención.' },
            say: 'Perla: cada día, en cada paciente, pregunta si todavía necesita la sonda, el catéter y el antibiótico. Retirarlos a tiempo es la mejor prevención de infecciones intrahospitalarias.' },
          { v: { k: 'mnemo', t: 'Manos, retirar, desescalar', d: 'Catéter con S. aureus o Candida: retirar. Sonda sin síntomas: no tratar. Difficile: fidaxomicina o vancomicina oral; agua y jabón.' },
            say: 'Llévate tres verbos: manos, retirar y desescalar. Ahora practica en el algoritmo del taller con los cinco tipos de infección intrahospitalaria.' }
        ] }
      ],
      sections: [
        { h: 'Bacteriemia asociada a catéter (CLABSI)', html: `
<ul>
<li>Agentes: estafilococo coagulasa negativo, <b><i>S. aureus</i></b>, enterococo, gramnegativos, <b><i>Candida</i></b> (NPT, antibióticos de amplio espectro). Factores: catéter femoral, duración, NPT.</li>
<li>Diagnóstico: ≥2 hemocultivos (uno del catéter y uno periférico); crecimiento ≥2 h antes en el del catéter (tiempo diferencial) o mismo germen.</li>
<li>Tratamiento empírico: <b>vancomicina</b> ± cobertura de gramnegativos (y Pseudomonas en neutropenia/sepsis) ± equinocandina si hay riesgo de <i>Candida</i>.</li>
<li><b>Retirar el catéter</b> si: <i>S. aureus</i>, <i>Candida</i>, Pseudomonas, micobacterias, choque, tromboflebitis supurada, endocarditis o bacteriemia persistente &gt;72 h. <i>S. aureus</i>: eco (transesofágico) y ≥14 días de tratamiento.</li>
<li>Prevención (bundle): higiene de manos, barreras máximas, <b>clorhexidina</b>, evitar la femoral (preferir subclavia), revisar diario la necesidad, retirar pronto.</li>
</ul>` },
        { h: 'IVU asociada a sonda (CAUTI)', html: `
<ul>
<li><i>E. coli</i>, <i>Klebsiella</i>, <i>Proteus</i>, <i>Pseudomonas</i>, enterococo, <i>Candida</i>. Riesgo: duración de la sonda (el factor más importante), mujeres, DM.</li>
<li><b>No</b> se tamiza ni se trata la bacteriuria asintomática (excepto embarazo y antes de cirugía urológica con sangrado de mucosa).</li>
<li>Diagnóstico: síntomas (fiebre, dolor suprapúbico/flanco, delirio sin otra causa) + urocultivo ≥10³ UFC/mL de una muestra de la sonda nueva.</li>
<li>Tratamiento: <b>cambiar o retirar la sonda</b> antes del cultivo; antibiótico según cultivo, 7 días (10–14 si la respuesta es lenta).</li>
<li>Prevención: sondas solo con indicación, técnica aséptica, sistema cerrado, retirar lo antes posible.</li>
</ul>` },
        { h: 'Neumonía nosocomial y sitio quirúrgico', html: `
<ul>
<li><b>NIH</b> (≥48 h de ingreso) y <b>NAV</b> (≥48 h de intubación): <i>Pseudomonas</i>, <i>Acinetobacter</i>, enterobacterias (BLEE), <b>MRSA</b>. Empírico: antipseudomonas (pip-tazo, cefepime o meropenem) ± vancomicina/linezolid según riesgo y prevalencia local; 7 días. Prevención: cabecera 30–45°, ventanas de sedación, pruebas de respiración espontánea, higiene oral, extubación temprana.</li>
<li><b>Sitio quirúrgico</b>: superficial o profunda (≤30 días; ≤90 días con implante). <i>S. aureus</i> (la más común) y gramnegativos en cirugía abdominal. Prevención: <b>profilaxis con cefazolina en los 60 min previos a la incisión</b> (vancomicina si MRSA/alergia), no rasurar (cortar), control de glucosa, normotermia, baño con clorhexidina. Tratamiento: abrir y drenar, antibiótico si hay celulitis o datos sistémicos.</li>
</ul>` },
        { h: 'Clostridioides difficile', html: `
<ul>
<li>Factores: <b>antibióticos</b> (clindamicina, quinolonas, cefalosporinas, en las últimas 12 semanas), edad, hospitalización, IBP.</li>
<li>Clínica: ≥3 evacuaciones acuosas en 24 h, dolor, fiebre, leucocitosis (a veces muy alta). Colitis pseudomembranosa. <b>Fulminante</b>: hipotensión, íleo, megacolon.</li>
<li>Diagnóstico: solo en heces diarreicas; <b>GDH + toxina</b> (EIA); si discordante, PCR. No repetir para “prueba de curación”.</li>
<li>Gravedad: <b>grave</b> = leucocitos ≥15,000 o creatinina &gt;1.5.</li>
<li>Tratamiento: <b>fidaxomicina</b> (preferida, menos recurrencia) o <b>vancomicina oral</b> 10 días; fulminante: vancomicina oral (o rectal si hay íleo) dosis alta + <b>metronidazol IV</b>, cirugía (colectomía) si hay perforación o megacolon. Recurrencias: fidaxomicina, vancomicina en esquema descendente, bezlotoxumab, <b>trasplante de microbiota fecal</b> (≥2 recurrencias).</li>
<li>Control: <b>aislamiento de contacto</b>, <b>agua y jabón</b> (el alcohol no mata las esporas), cloro para superficies, uso racional de antibióticos.</li>
</ul>` },
        { h: 'Riesgos para el personal de salud', html: `
<ul>
<li>Pinchazo con aguja hueca: riesgo de transmisión ~<b>30 % VHB</b> (no vacunado), ~<b>1.8 % VHC</b>, ~<b>0.3 % VIH</b> (“regla de 3”).</li>
<li>Lavar con agua y jabón; reportar; pruebas basales; PEP de VIH en &lt;72 h si aplica; VHB: vacuna ± inmunoglobulina según estado; VHC: vigilancia y tratar si se infecta.</li>
<li>TB: precauciones aéreas (N95); influenza/COVID: vacunación del personal.</li>
</ul>` },
        { h: 'Cómo lo preguntan en el examen', html: `
<ul>
<li>Diarrea tras antibióticos → <b><i>C. difficile</i></b> → fidaxomicina o vancomicina oral.</li>
<li>Bacteriemia por <i>S. aureus</i> con catéter → <b>retirarlo</b> + eco + ≥14 días.</li>
<li>Paciente sondado, afebril, urocultivo positivo → <b>no tratar</b> (bacteriuria asintomática).</li>
<li>Profilaxis quirúrgica → <b>cefazolina en los 60 min previos</b>.</li>
<li>Lavado de manos para <i>C. difficile</i> → <b>agua y jabón</b>.</li>
</ul>` }
      ],
      mnemo: { t: 'Regla de 3 del pinchazo: VHB 30 %, VHC 3 %, VIH 0.3 %', d: 'Aproximaciones clásicas (VHC hoy ~1.8 %). Higiene de manos y retirar dispositivos: la mejor prevención.' },
      pearl: 'Retira o cambia la sonda antes de tomar el urocultivo en una IVU asociada a sonda: el biofilm contamina la muestra.',
      trap: 'El gel con alcohol no elimina las esporas de C. difficile: agua y jabón, y aislamiento de contacto.',
      guide: [
        'IDSA/SHEA 2021: fidaxomicina es la preferida para el primer episodio de C. difficile; el metronidazol solo si no hay alternativas en casos no graves.',
        'Tu guía coloca vancomicina oral o fidaxomicina como primera línea y metronidazol como opción; hoy el metronidazol oral ya no se recomienda.'
      ],
      refs: [
        'Johnson S, et al. Clinical Practice Guideline by IDSA and SHEA: 2021 Focused Update on C. difficile in adults. Clin Infect Dis 2021.',
        'Mermel LA, et al. Clinical practice guidelines for the diagnosis and management of intravascular catheter-related infection: IDSA. Clin Infect Dis 2009.',
        'Hooton TM, et al. Diagnosis, prevention, and treatment of catheter-associated UTI in adults: IDSA. Clin Infect Dis 2010.',
        'Kalil AC, et al. Management of HAP and VAP: IDSA/ATS. Clin Infect Dis 2016.'
      ]
    }
  },

  guias: {
    iaas: { src: SRC,
      puntos: [
        '5 grandes: sitio quirúrgico, neumonía nosocomial, IVU por catéter, torrente sanguíneo, gastrointestinales.',
        'Sitio quirúrgico: E. coli y S. aureus; superficial (30 d) o profunda (30–90 d); profilaxis antibiótica antes de la cirugía.',
        'NIH &gt;48 h de ingreso; NAV &gt;48 h de intubación; Pseudomonas, MRSA, Acinetobacter, Enterobacter.',
        'IVU por catéter: cultivo con síntomas + catéter &gt;48 h; bacteriuria asintomática solo se trata en embarazo, cirugía urológica y trasplante.',
        'C. difficile: antibióticos en las últimas 8 semanas; GDH → toxinas → PCR; fidaxomicina o vancomicina oral; trasplante fecal en recurrencia. Retirar catéter con hongos, hipotensión, MRSA o bacteriemia &gt;72 h.'
      ],
      ojo: ['La profilaxis quirúrgica se da <b>en los 60 minutos previos a la incisión</b> (no 24 h antes, como dice tu guía).'],
      cards: [['Profilaxis quirúrgica', 'Cefazolina en los 60 min previos a la incisión']] }
  },

  cards: [
    ['Definición de nosocomial', '≥48 h después del ingreso'],
    ['Bacteriemia por catéter: cuándo retirarlo', 'S. aureus, Candida, Pseudomonas, choque, bacteriemia >72 h'],
    ['S. aureus en hemocultivo', 'Eco (TE) y ≥14 días de tratamiento'],
    ['Bacteriuria asintomática en sondado', 'No tratar'],
    ['IVU por sonda: antes del cultivo', 'Cambiar o retirar la sonda'],
    ['NAV: empírico', 'Antipseudomonas ± anti-MRSA'],
    ['Prevención de NAV', 'Cabecera 30–45°, despertar diario, extubación temprana'],
    ['Profilaxis quirúrgica', 'Cefazolina ≤60 min antes de la incisión'],
    ['C. difficile: factor de riesgo', 'Antibióticos (clindamicina, quinolonas, cefalosporinas), IBP'],
    ['C. difficile: tratamiento', 'Fidaxomicina o vancomicina oral'],
    ['C. difficile fulminante', 'Vancomicina oral alta + metronidazol IV; colectomía'],
    ['C. difficile recurrente', 'Fidaxomicina, vancomicina descendente, trasplante fecal'],
    ['Esporas de C. difficile', 'Agua y jabón (no alcohol); aislamiento de contacto'],
    ['Riesgo por pinchazo', 'VHB ~30 %, VHC ~1.8 %, VIH ~0.3 %']
  ],

  questions: [
    q({ id: 'iaas-01', dif: 1, stem: 'Paciente hospitalizado con ceftriaxona que presenta diarrea acuosa, fiebre y leucocitos de 17,000. Toxina de C. difficile positiva. ¿Tratamiento?', opts: ['Metronidazol oral como primera opción', 'Fidaxomicina o vancomicina oral', 'Vancomicina IV', 'Loperamida', 'Ciprofloxacino'], ans: 1,
      exp: 'Primer episodio (grave por leucocitos ≥15,000): fidaxomicina o vancomicina oral 10 días.', why: ['Ya no es primera línea.', '', 'No alcanza el colon.', 'Contraindicada.', 'Empeora.'], ref: 'IDSA/SHEA 2021' }),
    q({ id: 'iaas-02', dif: 2, stem: 'Paciente con catéter venoso central y bacteriemia por S. aureus. ¿Conducta?', opts: ['Sellar el catéter con antibiótico', 'Retirar el catéter, antibiótico ≥14 días y ecocardiograma', 'Solo 5 días de antibiótico', 'Cambiar el catéter con guía', 'Observar'], ans: 1,
      exp: 'S. aureus obliga a retirar el catéter y descartar endocarditis.', why: ['No en S. aureus.', '', 'Insuficiente.', 'No.', 'Peligroso.'], ref: 'IDSA 2009' }),
    q({ id: 'iaas-03', dif: 2, stem: 'Paciente con sonda urinaria, afebril, sin síntomas, con urocultivo de 10⁵ UFC/mL de E. coli. ¿Conducta?', opts: ['Antibiótico 7 días', 'No tratar; retirar la sonda si ya no es necesaria', 'Antibiótico profiláctico permanente', 'Cambiar la sonda cada día', 'Irrigación vesical'], ans: 1,
      exp: 'Bacteriuria asintomática: no se trata (salvo embarazo o cirugía urológica).', why: ['Fomenta resistencia.', '', 'No.', 'No.', 'No.'], ref: 'IDSA 2010' }),
    q({ id: 'iaas-04', dif: 2, stem: '¿Cuándo debe administrarse la profilaxis antibiótica en una cirugía limpia?', opts: ['24 h antes', 'En los 60 minutos previos a la incisión', 'Al terminar la cirugía', 'Por 7 días después', 'No se da'], ans: 1,
      exp: 'Niveles tisulares adecuados al momento de la incisión; redosificar si la cirugía es larga.', why: ['Demasiado temprano.', '', 'Tarde.', 'Sin beneficio y con resistencia.', 'Sí se da.'], ref: 'IDSA/ASHP 2013' }),
    q({ id: 'iaas-05', dif: 2, stem: 'Paciente con C. difficile con hipotensión, íleo y colon dilatado. ¿Tratamiento?', opts: ['Fidaxomicina sola', 'Vancomicina oral/rectal en dosis alta + metronidazol IV y valoración quirúrgica', 'Loperamida', 'Solo líquidos', 'Probióticos'], ans: 1,
      exp: 'C. difficile fulminante: vancomicina enteral + metronidazol IV; colectomía si empeora.', why: ['Insuficiente.', '', 'Contraindicada.', 'Insuficiente.', 'No.'], ref: 'IDSA/SHEA 2021' }),
    q({ id: 'iaas-06', dif: 2, stem: 'Paciente con tercera recurrencia de C. difficile. ¿Opción con mejor tasa de curación?', opts: ['Metronidazol', 'Trasplante de microbiota fecal', 'Vancomicina IV', 'Probióticos solos', 'Quinolona'], ans: 1,
      exp: 'El trasplante fecal tiene >80 % de éxito en recurrencias múltiples.', why: ['No.', '', 'No.', 'No.', 'Empeora.'], ref: 'IDSA/SHEA 2021' }),
    q({ id: 'iaas-07', dif: 1, stem: '¿Qué medida de higiene es necesaria al atender a un paciente con C. difficile?', opts: ['Gel con alcohol', 'Lavado con agua y jabón y guantes/bata', 'Mascarilla N95', 'Nada especial', 'Aislamiento inverso'], ans: 1,
      exp: 'Las esporas resisten el alcohol; aislamiento de contacto.', why: ['No elimina esporas.', '', 'Es para aerosoles.', 'No.', 'No.'], ref: 'IDSA/SHEA 2021' }),
    q({ id: 'iaas-08', dif: 2, stem: 'Paciente intubado hace 5 días con fiebre, secreción purulenta e infiltrado nuevo, en un hospital con MRSA frecuente. ¿Esquema?', opts: ['Ceftriaxona', 'Piperacilina-tazobactam + vancomicina', 'Amoxicilina', 'Azitromicina', 'Metronidazol'], ans: 1,
      exp: 'NAV: antipseudomonas + anti-MRSA.', why: ['No cubre Pseudomonas.', '', 'No.', 'No.', 'No.'], ref: 'IDSA/ATS 2016' }),
    q({ id: 'iaas-09', dif: 2, stem: '¿Cuál es el factor de riesgo más importante de IVU asociada a sonda?', opts: ['Sexo masculino', 'Duración de la sonda', 'Edad joven', 'Hipertensión', 'Uso de IBP'], ans: 1,
      exp: 'El riesgo aumenta 3–7 % por día; retirar lo antes posible.', why: ['Es mayor en mujeres.', '', 'No.', 'No.', 'No.'], ref: 'IDSA 2010' }),
    q({ id: 'iaas-10', dif: 2, stem: 'Paciente con nutrición parenteral por catéter central y fiebre; hemocultivos con levaduras. ¿Conducta?', opts: ['Dejar el catéter', 'Retirar el catéter y equinocandina; fondo de ojo y eco', 'Solo fluconazol oral', 'Observar', 'Vancomicina'], ans: 1,
      exp: 'Candidemia: retirar catéter, equinocandina, buscar endoftalmitis y endocarditis.', why: ['No.', '', 'No como inicio.', 'No.', 'No cubre hongos.'], ref: 'IDSA 2016 candidiasis' }),
    q({ id: 'iaas-11', dif: 2, stem: '¿Cuál es el riesgo aproximado de transmisión de VIH tras un pinchazo con aguja hueca de un paciente infectado?', opts: ['30 %', '3 %', '0.3 %', '10 %', '0 %'], ans: 2,
      exp: 'VIH ~0.3 %; VHC ~1.8 %; VHB hasta 30 % sin vacuna.', why: ['Es VHB.', 'Aproximado de VHC.', '', 'No.', 'No es nulo.'], ref: 'CDC' }),
    q({ id: 'iaas-12', dif: 2, stem: '¿Qué medida reduce las bacteriemias asociadas a catéter central?', opts: ['Usar la vía femoral de preferencia', 'Clorhexidina, barreras máximas, evitar la femoral y retirar pronto', 'Cambiar el catéter cada 3 días de rutina', 'Antibiótico profiláctico sistémico', 'Heparina oral'], ans: 1,
      exp: 'Bundle de inserción y mantenimiento.', why: ['Mayor riesgo.', '', 'No se recomienda de rutina.', 'No.', 'No.'], ref: 'IDSA 2009' }),
    q({ id: 'iaas-13', dif: 2, stem: 'Paciente con IVU sintomática asociada a sonda de 3 semanas. ¿Qué haces antes de tomar el urocultivo?', opts: ['Nada', 'Cambiar o retirar la sonda', 'Irrigar con antibiótico', 'Dar antibiótico primero', 'Pinzar la sonda'], ans: 1,
      exp: 'El biofilm de la sonda contamina la muestra y perpetúa la infección.', why: ['Resultado poco confiable.', '', 'No.', 'Altera el cultivo.', 'No.'], ref: 'IDSA 2010' }),
    q({ id: 'iaas-14', dif: 2, stem: 'Paciente con diarrea en el hospital; ¿cuándo NO debes pedir prueba de C. difficile?', opts: ['Con heces líquidas y antibiótico reciente', 'En heces formadas o para “prueba de curación”', 'Con leucocitosis', 'Con fiebre', 'En ancianos'], ans: 1,
      exp: 'Solo heces diarreicas; la PCR puede seguir positiva tras la curación.', why: ['Sí está indicada.', '', 'Sí.', 'Sí.', 'Sí.'], ref: 'IDSA/SHEA 2021' }),
    q({ id: 'iaas-15', dif: 2, stem: 'Paciente operado de colon con fiebre al 5º día y herida con eritema y secreción purulenta. ¿Primer paso?', opts: ['Solo antibiótico oral', 'Abrir y drenar la herida (± antibiótico si hay celulitis o sepsis)', 'Cerrar con más suturas', 'Observar', 'Esteroides'], ans: 1,
      exp: 'La infección superficial del sitio quirúrgico se trata con apertura y drenaje.', why: ['Insuficiente.', '', 'Empeora.', 'No.', 'No.'], ref: 'IDSA 2014 piel y tejidos' })
  ]
};
