// Tema 57 · EPOC (Neumología, semana 8)
const T = { topic: 'epoc', subj: 'neumo' };
const q = (o) => ({ ...T, ...o });
const SRC = { short: 'De tu Guía Neumo', vs: 'tu guía', name: 'Guía Neumo · Ximena Cors Cepeda (EMIS 5)', url: 'https://docs.google.com/document/d/1by5z7_drpzSNZPiEH1e9SHIx5ui6osaTPySJ1mnDAWg/edit' };

export default {
  lessons: {
    epoc: {
      hook: 'EPOC = FEV₁/FVC <0.7 después del broncodilatador en alguien expuesto (tabaco o humo de leña). Lo único que reduce mortalidad: dejar de fumar y oxígeno crónico si hay hipoxemia. Los broncodilatadores de larga acción (LAMA/LABA) son el pilar.',
      nn: [], yt: 'COPD GOLD 2024 treatment exacerbation',
      video: [
        { ch: 'Qué es la EPOC', sc: [
          { v: { k: 'title', t: 'EPOC', s: 'Semana 8 · Neumología' },
            say: 'Semana ocho: la enfermedad pulmonar obstructiva crónica. En México hay dos grandes culpables, el tabaco y el humo de leña. En este video vas a aprender a diagnosticarla, a clasificarla con GOLD, a elegir el inhalador y a manejar la exacerbación sin dañar al paciente con el oxígeno.' },
          { v: { k: 'case', t: 'Fumador con disnea', p: { name: 'Gerardo', age: 63, sex: 'H', skin: '#C98B62', hair: '#9A9A9A', gown: '#9FD8FF' }, text: '40 paquetes-año. Disnea al caminar una cuadra (mMRC 2), tos con flema por las mañanas. Una exacerbación el año pasado sin hospitalización.', vit: { 'FEV1/FVC': '0.58', FEV1: '52%', SpO2: '91%' } },
            say: 'Conoce a Gerardo, de sesenta y tres años, con un índice tabáquico de cuarenta paquetes año. Se ahoga al caminar una cuadra, tose con flema cada mañana y el año pasado tuvo una exacerbación que no requirió hospital. Su espirometría posbroncodilatador muestra un cociente de cero punto cincuenta y ocho y un volumen del primer segundo de cincuenta y dos por ciento.' },
          { v: { k: 'list', t: 'Factores de riesgo', items: ['Tabaco: el principal', 'Humo de leña o biomasa (mujeres rurales)', 'Exposición ocupacional a polvos', 'Déficit de alfa-1 antitripsina', 'Infecciones y prematurez en la infancia'] },
            say: 'El factor principal es el tabaco. En México, el humo de leña es la segunda causa y afecta sobre todo a mujeres que cocinaron años con fogón. También cuentan los polvos ocupacionales, el déficit de alfa uno antitripsina y el mal desarrollo pulmonar por infecciones o prematurez.' },
          { v: { k: 'vs', a: 'Bronquitis crónica', b: 'Enfisema', rows: [['Definición', 'Tos productiva 3 meses, 2 años seguidos', 'Destrucción de paredes alveolares'], ['Aspecto', 'Abotagado azul', 'Soplador rosado'], ['Gases', 'Hipoxemia e hipercapnia tempranas', 'Gases casi normales hasta tarde'], ['DLCO', 'Normal', 'Baja'], ['Complicación', 'Cor pulmonale, policitemia', 'Bulas, neumotórax']] },
            say: 'Dos fenotipos clásicos. La bronquitis crónica es tos productiva al menos tres meses al año, dos años seguidos: el abotagado azul, con hipoxemia, hipercapnia, policitemia y cor pulmonale. El enfisema es destrucción de las paredes alveolares: el soplador rosado, delgado, que respira con labios fruncidos y tiene la difusión de monóxido de carbono baja.' }
        ] },
        { ch: 'Diagnóstico y GOLD', sc: [
          { v: { k: 'big', h: 'Diagnóstico de EPOC', t: 'FEV1/FVC <0.70', s: 'Posbroncodilatador, con síntomas y exposición. Sin espirometría no hay diagnóstico.' },
            say: 'El diagnóstico exige tres cosas: síntomas respiratorios crónicos, una exposición de riesgo y una espirometría posbroncodilatador con un cociente menor de cero punto setenta. Sin espirometría no hay diagnóstico de EPOC, por más que el paciente fume.' },
          { v: { k: 'list', t: 'Grado GOLD por FEV1', items: ['GOLD 1: 80% o más', 'GOLD 2: 50 a 79%', 'GOLD 3: 30 a 49%', 'GOLD 4: menos de 30%'] },
            say: 'La gravedad de la obstrucción se mide con el volumen del primer segundo. GOLD uno, ochenta por ciento o más. GOLD dos, de cincuenta a setenta y nueve. GOLD tres, de treinta a cuarenta y nueve. GOLD cuatro, menos de treinta. Gerardo, con cincuenta y dos, es GOLD dos.' },
          { v: { k: 'flow', t: 'Grupo ABE: decide el inhalador', steps: ['¿2 o más exacerbaciones o 1 hospitalizada? → E', 'Si no: ¿mMRC 2 o más o CAT 10 o más? → B', 'Si no → A'] },
            say: 'Pero el tratamiento no se elige con el grado sino con el grupo. Si tuvo dos o más exacerbaciones al año, o una que lo hospitalizó, es grupo E. Si no, mira los síntomas: con escala mMRC de dos o más, o cuestionario CAT de diez o más, es grupo B. Si tiene pocos síntomas, grupo A. Gerardo tuvo una exacerbación sin hospital y mMRC dos: grupo B.' },
          { v: { k: 'list', t: 'Estudios que se piden', items: ['Rx: hiperinsuflación, diafragmas planos', 'Oximetría y gasometría', 'BH: policitemia, eosinófilos', 'Alfa-1 antitripsina una vez en todos', 'Eco si hay datos de cor pulmonale'] },
            say: 'Además de la espirometría: radiografía, que muestra hiperinsuflación y diafragmas aplanados; oximetría y gasometría; biometría para buscar policitemia y contar eosinófilos, que guían el corticoide; alfa uno antitripsina una vez en todos los pacientes; y ecocardiograma si hay datos de cor pulmonale.' },
          { v: { k: 'quiz', q: 'Mujer de 40 años, no fuma, enfisema en las bases y transaminasas altas. ¿Qué pides?', opts: ['Prueba de cloro en sudor', 'Nivel de alfa-1 antitripsina', 'Tomografía de senos paranasales'], a: 1 },
            say: 'Pausa. Mujer de cuarenta años que nunca fumó, con enfisema en las bases pulmonares y transaminasas elevadas. ¿Qué pides?',
            exp: 'Nivel de alfa uno antitripsina. El déficit causa enfisema panlobulillar en las bases a edad temprana, y como la proteína anómala se queda atrapada en el hígado, también hepatopatía.' }
        ] },
        { ch: 'Tratamiento estable', sc: [
          { v: { k: 'list', t: 'Lo que más cambia el pronóstico', items: ['Dejar de fumar (vareniclina)', 'Oxígeno crónico si hay hipoxemia', 'Vacunas: influenza, neumococo, COVID, VSR', 'Rehabilitación pulmonar'] },
            say: 'Antes de los inhaladores: lo único que frena la caída de la función pulmonar es dejar de fumar, y lo que más reduce la mortalidad es el oxígeno crónico cuando hay hipoxemia. Se agregan vacunas contra influenza, neumococo, COVID y virus sincitial respiratorio, y rehabilitación pulmonar.' },
          { v: { k: 'vs', a: 'Grupo', b: 'Inhalador inicial', rows: [['A', 'Un broncodilatador', 'De larga acción de preferencia'], ['B', 'LAMA + LABA', 'Doble broncodilatador'], ['E', 'LAMA + LABA', '+ CSI si eosinófilos 300 o más']] },
            say: 'Grupo A: un broncodilatador, de preferencia de acción larga. Grupo B: doble broncodilatador, un antimuscarínico de acción larga como tiotropio más un beta agonista de acción larga. Grupo E: también doble broncodilatador, y se agrega corticoide inhalado si los eosinófilos son de trescientos o más. Todos llevan salbutamol de rescate.' },
          { v: { k: 'tip', kind: 'trap', t: 'En EPOC el corticoide inhalado nunca va solo y aumenta el riesgo de neumonía. Se reserva para eosinófilos altos con exacerbaciones.' },
            say: 'Trampa: en la EPOC, el corticoide inhalado nunca va solo, a diferencia del asma. Aumenta el riesgo de neumonía, así que solo se agrega a los broncodilatadores cuando hay exacerbaciones y eosinófilos altos.' },
          { v: { k: 'big', h: 'Oxígeno crónico (15 h o más al día)', t: 'PaO2 ≤55', s: 'o SpO2 ≤88% en reposo. Con cor pulmonale o Hto >55%: PaO2 56 a 59 basta.' },
            say: 'Oxígeno domiciliario al menos quince horas al día si la presión arterial de oxígeno es de cincuenta y cinco o menos, o la saturación de ochenta y ocho o menos en reposo. Si hay cor pulmonale o hematocrito mayor de cincuenta y cinco, basta con una presión de cincuenta y seis a cincuenta y nueve.' }
        ] },
        { ch: 'La exacerbación', sc: [
          { v: { k: 'case', t: 'Seis meses después', p: { name: 'Gerardo', age: 63, sex: 'H', skin: '#C98B62', hair: '#9A9A9A', gown: '#9FD8FF' }, text: 'Tres días con más disnea, más esputo y ahora verde. Somnoliento. En la ambulancia le pusieron mascarilla con reservorio.', vit: { SpO2: '99%', pH: '7.28', PaCO2: '68' } },
            say: 'Seis meses después, Gerardo llega con tres días de más falta de aire, más esputo y ahora verde. En la ambulancia le pusieron mascarilla con reservorio y satura noventa y nueve por ciento, pero está somnoliento. Su gasometría: pH de siete punto veintiocho y CO2 de sesenta y ocho.' },
          { v: { k: 'flow', t: 'Manejo de la exacerbación', steps: ['O2 controlado: SpO2 88 a 92%', 'Salbutamol + ipratropio', 'Prednisona 40 mg por 5 días', 'Antibiótico si hay esputo purulento', 'pH ≤7.35 con PaCO2 >45 → VMNI'] },
            say: 'El manejo: oxígeno controlado con meta de ochenta y ocho a noventa y dos por ciento, porque el exceso empeora la hipercapnia. Salbutamol con ipratropio. Prednisona cuarenta miligramos por cinco días. Antibiótico si el esputo es purulento y hay otro dato cardinal, como más disnea o más volumen. Y si el pH es de siete punto treinta y cinco o menos con CO2 mayor de cuarenta y cinco, ventilación mecánica no invasiva.' },
          { v: { k: 'quiz', q: 'Gerardo: pH 7.28, PaCO2 68, somnoliento con reservorio. ¿Qué haces primero?', opts: ['Subir el oxígeno a 15 L', 'Bajar el O2 a meta 88 a 92% e iniciar VMNI', 'Intubar sin intentar otra cosa'], a: 1 },
            say: 'Pausa. Gerardo tiene acidosis respiratoria y está somnoliento con oxígeno a flujo alto. ¿Qué haces primero?',
            exp: 'Bajar el oxígeno a una meta de ochenta y ocho a noventa y dos por ciento e iniciar ventilación no invasiva. El oxígeno de más empeoró su hipercapnia. La ventilación no invasiva reduce la intubación y la mortalidad. Se intuba si falla, si no la tolera o si está en paro.' },
          { v: { k: 'list', t: 'Antibiótico en exacerbación', items: ['Indicación: esputo purulento + otro dato', 'O si necesita ventilación', 'Amoxi-clav, doxiciclina o macrólido', 'Riesgo de Pseudomonas: quinolona', 'Duración: 5 a 7 días'] },
            say: 'Los cardinales de Anthonisen son más disnea, más volumen de esputo y esputo purulento. Se da antibiótico con dos de ellos si uno es la purulencia, o si necesita ventilación. Amoxicilina con clavulanato, doxiciclina o un macrólido, por cinco a siete días; si hay riesgo de pseudomonas, una quinolona como levofloxacino.' }
        ] },
        { ch: 'Cierre y perlas', sc: [
          { v: { k: 'list', t: 'Gerardo: final del caso', items: ['VMNI 24 h: pH 7.36', 'Prednisona 5 días + amoxi-clav', 'Ahora es grupo E', 'Egresa con LAMA + LABA, vacunas y rehabilitación', 'Vareniclina para dejar de fumar'] },
            say: 'Con ventilación no invasiva, en veinticuatro horas el pH de Gerardo sube a siete punto treinta y seis. Recibe prednisona y amoxicilina con clavulanato. Como esta exacerbación lo hospitalizó, ahora es grupo E. Egresa con doble broncodilatador, vacunas, rehabilitación pulmonar y vareniclina para dejar de fumar.' },
          { v: { k: 'tip', kind: 'pearl', t: 'Lo que reduce mortalidad en EPOC: dejar de fumar, oxígeno crónico si hay hipoxemia y VMNI en la exacerbación hipercápnica.' },
            say: 'Perla: lo que reduce la mortalidad en la EPOC es dejar de fumar, el oxígeno crónico cuando hay hipoxemia en reposo y la ventilación no invasiva en la exacerbación con acidosis respiratoria.' },
          { v: { k: 'mnemo', t: '88 a 92 y ABE', d: 'Exacerbación: oxígeno con meta 88–92%. Crónico: grupo A uno, B y E doble broncodilatador; CSI solo con eosinófilos ≥300.' },
            say: 'Llévate dos claves: en la exacerbación, oxígeno con meta de ochenta y ocho a noventa y dos. Y en el estable, el grupo decide el inhalador: A uno, B y E doble broncodilatador, y corticoide solo con eosinófilos de trescientos o más. Ahora prueba el simulador del volumen espirado y el algoritmo del taller.' }
        ] }
      ],
      sections: [
        { h: 'Definición y diagnóstico', html: `
<ul>
<li>Síntomas respiratorios crónicos (disnea, tos, expectoración) + exposición (<b>tabaco</b>, <b>humo de leña/biomasa</b>, ocupacional) + <b>FEV₁/FVC &lt;0.70 posbroncodilatador</b>.</li>
<li>Fenotipos: <b>bronquitis crónica</b> (tos productiva ≥3 meses en 2 años seguidos; “abotagado azul”: hipoxemia, hipercapnia, cor pulmonale) y <b>enfisema</b> (destrucción alveolar; “soplador rosado”: delgado, labios fruncidos, DLCO baja). Centrolobulillar (tabaco, lóbulos superiores) vs panlobulillar (<b>déficit de alfa-1 antitripsina</b>, bases, joven).</li>
<li>Estudios: espirometría (FEV₁ ↓, ↑ volumen residual y CPT por atrapamiento), RX (hiperinsuflación, diafragmas planos, bulas), oximetría/gasometría, BH (policitemia), <b>alfa-1 antitripsina una vez en todos</b>, eosinófilos (guían el CSI), eco si hay cor pulmonale.</li>
<li>Índice tabáquico = cigarros/día × años / 20 (paquetes-año). Exposición a leña = horas/día × años.</li>
</ul>` },
        { h: 'Clasificación GOLD', html: `
<div class="tablewrap"><table class="mini">
<tr><th>Grado</th><th>FEV₁ posBD</th></tr>
<tr><td>GOLD 1 leve</td><td>≥80 %</td></tr>
<tr><td>GOLD 2 moderado</td><td>50–79 %</td></tr>
<tr><td>GOLD 3 grave</td><td>30–49 %</td></tr>
<tr><td>GOLD 4 muy grave</td><td>&lt;30 %</td></tr>
</table></div>
<ul>
<li>Grupos (GOLD 2023+): <b>A</b> (0–1 exacerbación sin hospitalización, mMRC 0–1/CAT &lt;10), <b>B</b> (igual pero mMRC ≥2/CAT ≥10), <b>E</b> (≥2 exacerbaciones o ≥1 hospitalizada).</li>
</ul>` },
        { h: 'Tratamiento estable', html: `
<ul>
<li><b>Dejar de fumar</b> (vareniclina, TRN, bupropión), evitar humo de leña, <b>vacunas</b> (influenza, neumococo, COVID, Tdap, VSR ≥60 años), <b>rehabilitación pulmonar</b> (grupos B y E).</li>
<li><b>Fármacos</b>: A → un broncodilatador (preferible de larga acción); B → <b>LAMA + LABA</b>; E → LAMA + LABA; <b>+ CSI si eosinófilos ≥300</b> (o ≥100 con exacerbaciones). Siempre SABA de rescate. Si persisten exacerbaciones con eosinófilos &lt;100: roflumilast (FEV₁ &lt;50 % y bronquitis crónica) o azitromicina (no fumadores actuales). Dupilumab en EPOC eosinofílica.</li>
<li>CSI aumenta el riesgo de <b>neumonía</b>; no se usa CSI sin broncodilatador de larga acción en EPOC.</li>
<li><b>Oxígeno crónico</b> (≥15 h/día): PaO₂ ≤55 mmHg o SatO₂ ≤88 %; o PaO₂ 56–59 con cor pulmonale, policitemia (Hto &gt;55 %) o IC derecha. Reduce mortalidad.</li>
<li>Avanzado: reducción de volumen pulmonar (enfisema heterogéneo de lóbulos superiores), válvulas endobronquiales, bullectomía, trasplante.</li>
</ul>` },
        { h: 'Exacerbación', html: `
<ul>
<li>Empeoramiento agudo de disnea, tos o esputo; causa más común: <b>infecciones virales</b> (rinovirus) y bacterianas (<i>H. influenzae</i>, neumococo, <i>Moraxella</i>). Descartar neumonía, TEP, IC, neumotórax.</li>
<li><b>O₂ controlado</b> (meta SatO₂ <b>88–92 %</b>; exceso → hipercapnia por menor impulso y peor V/Q). Gasometría.</li>
<li><b>SABA ± SAMA</b> (salbutamol + ipratropio). <b>Prednisona 40 mg × 5 días</b>.</li>
<li><b>Antibiótico</b> (5–7 días) si hay ≥2 de: más disnea, más volumen de esputo, <b>esputo purulento</b> (debe incluir purulencia), o si requiere ventilación: amoxicilina-clavulanato, doxiciclina o macrólido; quinolona/antipseudomonas si hay riesgo.</li>
<li><b>VMNI</b> si pH ≤7.35 con PaCO₂ &gt;45 (acidosis respiratoria): reduce intubación y mortalidad. Intubar si falla o no se tolera.</li>
</ul>` },
        { h: 'Cómo lo preguntan en el examen', html: `
<ul>
<li>Fumador con FEV₁/FVC 0.6 posBD → <b>EPOC</b>.</li>
<li>Joven con enfisema basal y hepatopatía → <b>déficit de alfa-1 antitripsina</b>.</li>
<li>PaO₂ 52 en reposo → <b>O₂ crónico</b>.</li>
<li>Exacerbación con pH 7.30 y PaCO₂ 62 → <b>VMNI</b>.</li>
<li>Paciente con EPOC al que se le da O₂ al 100 % y se pone somnoliento → hipercapnia: meta 88–92 %.</li>
<li>Grupo E con eosinófilos 400 → <b>LAMA + LABA + CSI</b>.</li>
</ul>` }
      ],
      mnemo: { t: 'Lo que alarga la vida: dejar de fumar + O₂ (si hay hipoxemia)', d: 'Broncodilatadores de larga acción (LAMA/LABA) para síntomas y crisis; CSI solo con eosinófilos altos; VMNI en exacerbación con acidosis respiratoria.' },
      pearl: 'En la exacerbación de EPOC la meta de saturación es 88–92 %: más oxígeno puede empeorar la hipercapnia.',
      trap: 'El diagnóstico de EPOC requiere la espirometría POSbroncodilatador; sin ella, no hay EPOC (aunque el paciente fume y tosa).',
      guide: [
        'GOLD 2023–2025: los grupos C y D se fusionaron en el grupo E (exacerbaciones); LAMA + LABA es el tratamiento inicial en B y E.',
        'Tu guía usa los grupos A–D antiguos; el examen puede preguntar cualquiera de las dos versiones.'
      ],
      refs: [
        'Global Initiative for Chronic Obstructive Lung Disease (GOLD) 2025 Report.',
        'Agustí A, et al. GOLD 2023 executive summary. Eur Respir J 2023.',
        'Long-Term Oxygen Treatment Trial Research Group. A randomized trial of long-term oxygen for COPD with moderate desaturation. N Engl J Med 2016.',
        'Wedzicha JA, et al. Management of COPD exacerbations: ERS/ATS guideline. Eur Respir J 2017.'
      ]
    }
  },

  guias: {
    epoc: { src: SRC,
      puntos: [
        'Tabaquismo (90 %), biomasa, déficit de alfa-1 antitripsina; FEV₁/FVC &lt;0.70.',
        'Grados GOLD por FEV₁ (≥80, 50–79, 30–49, &lt;30) y grupos por síntomas (mMRC, CAT) y exacerbaciones.',
        'Bronquitis crónica (abotagado azul: hipoxemia + hipercapnia) vs enfisema (soplador rosado; centrolobulillar en fumadores, panacinar en alfa-1).',
        'Tratamiento: dejar de fumar, vacunas, rehabilitación; broncodilatadores; O₂ si PaO₂ ≤55 o SatO₂ ≤88 % (meta &gt;90 %).',
        'Exacerbación: SABA, esteroide oral, antibiótico si aumentan disnea, tos o esputo.'
      ],
      ojo: [
        'GOLD actual: grupo <b>E</b> sustituye a C y D, y el inicio en B y E es <b>LAMA + LABA</b>; el CSI solo con eosinófilos ≥300.',
        'En la exacerbación la meta de SatO₂ es <b>88–92 %</b> (tu guía dice &gt;90 % para el O₂ crónico).'
      ],
      cards: [['Índice tabáquico', 'Cigarros al día × años / 20 = paquetes-año']] }
  },

  cards: [
    ['Diagnóstico de EPOC', 'FEV₁/FVC <0.70 posbroncodilatador + exposición'],
    ['Causa #2 de EPOC en México', 'Humo de leña (biomasa)'],
    ['GOLD 3', 'FEV₁ 30–49 %'],
    ['Grupo E (GOLD)', '≥2 exacerbaciones o ≥1 hospitalizada'],
    ['Tratamiento inicial grupo B y E', 'LAMA + LABA'],
    ['Cuándo agregar CSI en EPOC', 'Eosinófilos ≥300 (o ≥100 con exacerbaciones)'],
    ['Riesgo del CSI en EPOC', 'Neumonía'],
    ['O₂ crónico', 'PaO₂ ≤55 o SatO₂ ≤88 % (≥15 h/día)'],
    ['Reducen mortalidad en EPOC', 'Dejar de fumar y O₂ crónico en hipoxémicos'],
    ['Exacerbación: esteroide', 'Prednisona 40 mg por 5 días'],
    ['Exacerbación: antibiótico', 'Si hay esputo purulento (+ disnea o volumen) o ventilación'],
    ['VMNI en exacerbación', 'pH ≤7.35 con PaCO₂ >45'],
    ['Meta de SatO₂ en exacerbación', '88–92 %'],
    ['Enfisema basal en joven', 'Déficit de alfa-1 antitripsina (panacinar)'],
    ['Abotagado azul vs soplador rosado', 'Bronquitis crónica (hipercapnia) vs enfisema']
  ],

  questions: [
    q({ id: 'epoc-01', dif: 1, stem: 'Hombre de 64 años, 45 paquetes-año, disnea progresiva y tos productiva. Espirometría posbroncodilatador: FEV₁/FVC 0.59, FEV₁ 55 %. ¿Diagnóstico y grado?', opts: ['Asma; leve', 'EPOC GOLD 2 (moderado)', 'EPOC GOLD 3', 'Fibrosis pulmonar', 'EPOC GOLD 1'], ans: 1,
      exp: 'FEV₁/FVC <0.70 posBD con FEV₁ 50–79 % = GOLD 2.', why: ['No es reversible y hay exposición.', '', 'Sería 30–49 %.', 'Es restrictiva.', 'Sería ≥80 %.'], ref: 'GOLD 2025' }),
    q({ id: 'epoc-02', dif: 2, stem: 'Mujer de 70 años que cocinó con leña 40 años, sin tabaquismo, con disnea y obstrucción posBD. ¿Diagnóstico?', opts: ['Asma', 'EPOC por biomasa', 'IC', 'TB', 'Bronquiectasias'], ans: 1,
      exp: 'El humo de leña es causa importante de EPOC en México, sobre todo en mujeres.', why: ['No es reversible.', '', 'No hay datos.', 'No hay datos.', 'No hay datos.'], ref: 'GOLD 2025' }),
    q({ id: 'epoc-03', dif: 2, stem: 'Paciente con EPOC con 2 exacerbaciones el último año, eosinófilos 450. ¿Tratamiento de mantenimiento?', opts: ['SABA solo', 'LAMA + LABA + CSI', 'CSI solo', 'Teofilina', 'Montelukast'], ans: 1,
      exp: 'Grupo E con eosinófilos ≥300: triple terapia.', why: ['Insuficiente.', '', 'No se usa CSI solo en EPOC.', 'Segunda línea.', 'No indicado.'], ref: 'GOLD 2025' }),
    q({ id: 'epoc-04', dif: 2, stem: 'Paciente con EPOC estable, PaO₂ 53 mmHg en reposo. ¿Qué indicas?', opts: ['Nada', 'Oxígeno domiciliario ≥15 h/día', 'O₂ solo con esfuerzo', 'Teofilina', 'Transfusión'], ans: 1,
      exp: 'PaO₂ ≤55 mmHg (o SatO₂ ≤88 %): O₂ crónico, que reduce la mortalidad.', why: ['Riesgo de muerte.', '', 'No basta.', 'No.', 'No.'], ref: 'GOLD 2025' }),
    q({ id: 'epoc-05', dif: 2, stem: 'Paciente con exacerbación de EPOC: pH 7.29, PaCO₂ 68, consciente y cooperador. ¿Soporte respiratorio?', opts: ['O₂ al 100 % por mascarilla con reservorio', 'Ventilación mecánica no invasiva', 'Intubación inmediata', 'Solo puntas nasales a 6 L', 'Nada'], ans: 1,
      exp: 'Acidosis respiratoria en exacerbación: VMNI reduce intubación y mortalidad.', why: ['Empeora la hipercapnia.', '', 'Solo si falla la VMNI o hay contraindicación.', 'Insuficiente.', 'Peligroso.'], ref: 'ERS/ATS 2017' }),
    q({ id: 'epoc-06', dif: 2, stem: 'En la exacerbación de EPOC, ¿cuál es la meta de saturación de O₂?', opts: ['98–100 %', '88–92 %', '80–85 %', '94–98 % siempre', 'No importa'], ans: 1,
      exp: 'Evita la hipercapnia inducida por O₂ (menor impulso, peor V/Q, efecto Haldane).', why: ['Riesgo de hipercapnia.', '', 'Hipoxemia peligrosa.', 'Es para pacientes sin riesgo de hipercapnia.', 'Incorrecto.'], ref: 'GOLD 2025' }),
    q({ id: 'epoc-07', dif: 2, stem: 'Paciente con exacerbación de EPOC con más disnea y esputo purulento abundante. ¿Qué incluye el tratamiento?', opts: ['Solo SABA', 'SABA/SAMA + prednisona 40 mg 5 días + antibiótico', 'Antibiótico IV de amplio espectro siempre', 'Furosemida', 'Esteroide 14 días a dosis alta'], ans: 1,
      exp: 'Con purulencia y más síntomas se indica antibiótico (amoxicilina-clavulanato, doxiciclina o macrólido).', why: ['Incompleto.', '', 'No siempre.', 'No.', '5 días es igual de eficaz.'], ref: 'GOLD 2025' }),
    q({ id: 'epoc-08', dif: 2, stem: 'Hombre de 38 años no fumador con enfisema de predominio basal y elevación de transaminasas. ¿Qué estudio pides?', opts: ['Prueba de sudor', 'Niveles de alfa-1 antitripsina', 'ANCA', 'IgE', 'BAAR'], ans: 1,
      exp: 'Enfisema panacinar basal en joven con hepatopatía: déficit de alfa-1 antitripsina.', why: ['Es para fibrosis quística.', '', 'No.', 'No.', 'No.'], ref: 'GOLD 2025' }),
    q({ id: 'epoc-09', dif: 1, stem: '¿Qué intervención reduce la mortalidad en EPOC (además del O₂ en hipoxémicos)?', opts: ['Teofilina', 'Dejar de fumar', 'Mucolíticos', 'Antitusivos', 'Esteroide oral crónico'], ans: 1,
      exp: 'Dejar de fumar frena la caída del FEV₁ y reduce la mortalidad.', why: ['No.', '', 'No.', 'No.', 'Daña.'], ref: 'GOLD 2025' }),
    q({ id: 'epoc-10', dif: 2, stem: 'Paciente con EPOC grupo B sin exacerbaciones. ¿Tratamiento inicial?', opts: ['CSI solo', 'LAMA + LABA', 'Triple terapia', 'Solo SABA', 'Roflumilast'], ans: 1,
      exp: 'GOLD: en grupo B se inicia doble broncodilatación de larga acción.', why: ['No en EPOC.', '', 'Solo si exacerbaciones y eosinófilos altos.', 'Solo rescate.', 'No es inicial.'], ref: 'GOLD 2025' }),
    q({ id: 'epoc-11', dif: 2, stem: 'Paciente con EPOC y CSI que presenta neumonías de repetición, eosinófilos 70 y sin exacerbaciones recientes. ¿Qué haces?', opts: ['Aumentar el CSI', 'Considerar retirar el CSI', 'Agregar esteroide oral', 'Nada', 'Teofilina'], ans: 1,
      exp: 'El CSI aumenta el riesgo de neumonía; con eosinófilos bajos y sin exacerbaciones el beneficio es mínimo.', why: ['Empeora.', '', 'No.', 'Riesgo persistente.', 'No.'], ref: 'GOLD 2025' }),
    q({ id: 'epoc-12', dif: 2, stem: '¿Qué hallazgo de la RX de tórax es típico del enfisema?', opts: ['Infiltrado alveolar', 'Hiperinsuflación con diafragmas aplanados y aumento del espacio retroesternal', 'Derrame pleural', 'Cardiomegalia sola', 'Patrón miliar'], ans: 1,
      exp: 'Atrapamiento aéreo: diafragmas planos, costillas horizontales, hiperlucencia, bulas.', why: ['No.', '', 'No.', 'No.', 'No.'], ref: 'GOLD 2025' }),
    q({ id: 'epoc-13', dif: 2, stem: 'Paciente con EPOC grave, edema periférico, ingurgitación yugular y P pulmonar en el ECG. ¿Complicación?', opts: ['IC izquierda', 'Cor pulmonale (HP del grupo 3)', 'Pericarditis', 'Cirrosis', 'Síndrome nefrótico'], ans: 1,
      exp: 'La hipoxemia crónica produce vasoconstricción pulmonar, hipertensión pulmonar y falla derecha.', why: ['No.', '', 'No.', 'No.', 'No.'], ref: 'GOLD 2025' }),
    q({ id: 'epoc-14', dif: 2, stem: 'Paciente con EPOC que fuma 1 cajetilla al día y quiere dejarlo. ¿Mejor opción farmacológica?', opts: ['Benzodiacepina', 'Vareniclina (± terapia de reemplazo de nicotina)', 'Antidepresivo tricíclico', 'Nada', 'Propranolol'], ans: 1,
      exp: 'Vareniclina es la más eficaz; combinar con consejería.', why: ['No.', '', 'No.', 'Desaprovecha la oportunidad.', 'No.'], ref: 'GOLD 2025' }),
    q({ id: 'epoc-15', dif: 2, stem: '¿Qué vacunas recomiendas a un paciente con EPOC de 66 años?', opts: ['Ninguna', 'Influenza anual, neumococo, COVID, Tdap y VSR', 'Solo BCG', 'Fiebre amarilla', 'Solo hepatitis A'], ans: 1,
      exp: 'Reducen exacerbaciones e infecciones graves.', why: ['Incorrecto.', '', 'No.', 'No.', 'No.'], ref: 'GOLD 2025' }),
    q({ id: 'epoc-16', dif: 3, stem: 'Paciente con EPOC GOLD 3, bronquitis crónica, exacerbaciones frecuentes pese a triple terapia, eosinófilos 80, exfumador. ¿Qué agregas?', opts: ['Esteroide oral crónico', 'Azitromicina crónica o roflumilast', 'Montelukast', 'Teofilina IV', 'Antibiótico IV mensual'], ans: 1,
      exp: 'En exacerbadores con eosinófilos bajos: azitromicina (no fumadores actuales) o roflumilast (FEV₁ <50 % con bronquitis crónica).', why: ['Daña.', '', 'No indicado.', 'No.', 'No.'], ref: 'GOLD 2025' }),
    q({ id: 'epoc-17', dif: 2, stem: '¿Qué patrón de gasometría esperas en un “abotagado azul” estable?', opts: ['PaO₂ normal, PaCO₂ baja', 'PaO₂ baja, PaCO₂ alta con HCO₃ alto (compensado)', 'Alcalosis respiratoria', 'Acidosis metabólica', 'Normal'], ans: 1,
      exp: 'Hipoxemia con hipercapnia crónica y compensación renal (bicarbonato alto).', why: ['Es soplador rosado leve.', '', 'No.', 'No.', 'No.'], ref: 'GOLD 2025' }),
    q({ id: 'epoc-18', dif: 1, stem: '¿Qué estudio confirma el diagnóstico de EPOC?', opts: ['RX de tórax', 'Espirometría posbroncodilatador', 'TC', 'Gasometría', 'Oximetría'], ans: 1,
      exp: 'FEV₁/FVC <0.70 posBD.', why: ['Apoya, no confirma.', '', 'Apoya, no confirma.', 'No.', 'No.'], ref: 'GOLD 2025' }),
    q({ id: 'epoc-19', dif: 2, stem: 'Paciente con exacerbación de EPOC que recibe O₂ por mascarilla al 60 % y se vuelve somnoliento con PaCO₂ 85. ¿Qué pasó?', opts: ['Neumonía', 'Hipercapnia inducida por exceso de O₂', 'Hipoglucemia', 'EVC', 'Sobredosis de salbutamol'], ans: 1,
      exp: 'El O₂ alto empeora el V/Q, disminuye el impulso y desplaza CO₂ (efecto Haldane). Titula a 88–92 % (Venturi) y valora VMNI.', why: ['No explica el cambio.', '', 'No hay datos.', 'No hay datos.', 'No explica.'], ref: 'GOLD 2025' }),
    q({ id: 'epoc-20', dif: 2, stem: 'Paciente con EPOC grave y enfisema heterogéneo de lóbulos superiores, sin respuesta a tratamiento óptimo y rehabilitación. ¿Opción?', opts: ['Ninguna', 'Reducción de volumen pulmonar (quirúrgica o con válvulas endobronquiales)', 'Esteroide oral', 'Teofilina', 'Antibiótico crónico'], ans: 1,
      exp: 'Mejora disnea, función y en casos seleccionados la supervivencia.', why: ['Hay opciones.', '', 'No.', 'No.', 'No.'], ref: 'GOLD 2025' })
  ]
};
