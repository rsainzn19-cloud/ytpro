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
        { ch: 'Diagnóstico', sc: [
          { v: { k: 'title', t: 'EPOC', s: 'Semana 8 · Neumología' },
            say: 'Semana ocho: la enfermedad pulmonar obstructiva crónica. Es obstrucción que no se revierte por completo, causada por tabaco o, en México, muchas veces por humo de leña.' },
          { v: { k: 'case', t: 'Fumador con disnea', p: { name: 'Gerardo', age: 63, sex: 'H', skin: '#C98B62', hair: '#9A9A9A', gown: '#9FD8FF' }, text: '40 paquetes-año. Disnea al caminar una cuadra, tos con flema matutina. FEV1/FVC 0.58 posbroncodilatador, FEV1 52 %.', vit: { FEV1: '52 %', SatO2: '91 %' } },
            say: 'Gerardo fumó cuarenta paquetes año. Se ahoga al caminar una cuadra y tose con flema en las mañanas. Su espirometría después del broncodilatador muestra un cociente de cero punto cincuenta y ocho y un FEV uno de cincuenta y dos.' },
          { v: { k: 'list', t: 'Clasificación GOLD', items: ['Grado por FEV1: 1 leve a 4 muy grave', 'Grupo A: pocos síntomas y crisis', 'Grupo B: más síntomas', 'Grupo E: 2 o más crisis o 1 hospitalizada'] },
            say: 'GOLD clasifica dos cosas. El grado espirométrico por el FEV uno, del uno leve al cuatro muy grave. Y el grupo para el tratamiento: A con pocos síntomas, B con más síntomas, y E si tuvo dos o más exacerbaciones o una que lo hospitalizó.' }
        ] },
        { ch: 'Tratamiento', sc: [
          { v: { k: 'flow', t: 'Tratamiento inicial', steps: ['Grupo A: un broncodilatador', 'Grupo B: LAMA más LABA', 'Grupo E: LAMA más LABA', 'E con eosinófilos 300 o más: más corticoide inhalado'] },
            say: 'El tratamiento inicial: grupo A, un broncodilatador. Grupo B, doble broncodilatación con LAMA y LABA. Grupo E, también LAMA más LABA, y si los eosinófilos son trescientos o más, se agrega corticoide inhalado.' },
          { v: { k: 'big', h: 'Oxígeno crónico si', t: 'PaO2 55 o menos', u: 'o SatO2 88 o menos; con cor pulmonale, 59 o menos' },
            say: 'El oxígeno crónico, al menos quince horas al día, reduce la mortalidad si la presión de oxígeno es de cincuenta y cinco o menos, o la saturación de ochenta y ocho o menos.' },
          { v: { k: 'list', t: 'Exacerbación', items: ['O2 para SatO2 de 88 a 92', 'Salbutamol más ipratropio', 'Prednisona 40 mg por 5 días', 'Antibiótico si esputo purulento', 'VMNI si acidosis respiratoria'] },
            say: 'En la exacerbación: oxígeno con meta de ochenta y ocho a noventa y dos para no retener CO dos, salbutamol con ipratropio, prednisona cuarenta miligramos por cinco días, antibiótico si el esputo es purulento, y ventilación no invasiva si hay acidosis respiratoria.' },
          { v: { k: 'mnemo', t: 'Lo que alarga la vida: dejar de fumar y O₂', d: 'Los broncodilatadores mejoran síntomas y crisis; dejar de fumar y el O₂ crónico (si hay hipoxemia) reducen la mortalidad.' },
            say: 'Llévate esto: lo que alarga la vida en la EPOC es dejar de fumar y el oxígeno cuando hay hipoxemia.' }
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
