// Tema 6 · Enfermedad renal crónica (Nefrología, semana 2)
const T = { topic: 'erc', subj: 'nefro' };
const q = (o) => ({ ...T, ...o });

export default {
  lessons: {
    erc: {
      hook: 'Clasificar bien (G y A), proteger el riñón con los fármacos correctos y manejar las complicaciones: anemia, mineral óseo, acidosis y potasio.',
      compare: ['lra-erc'],
      nn: [['chronic-kidney-disease', 'Chronic Kidney Disease']],
      yt: 'chronic kidney disease',
      sections: [
        { h: 'Definición y clasificación (KDIGO 2024)', html: `
<p><b>ERC</b> = alteración de estructura o función renal por <b>más de 3 meses</b>: TFG &lt;60 o algún marcador de daño (albuminuria ≥30 mg/g, sedimento anormal, alteraciones tubulares, histología, imagen o trasplante).</p>
<p>Se clasifica por <b>Causa, G (TFG) y A (albuminuria)</b>.</p>
<div class="tablewrap"><table class="mini">
<tr><th>G</th><th>TFG (mL/min/1.73 m²)</th><th>A</th><th>Albúmina/creatinina</th></tr>
<tr><td>G1</td><td>≥90</td><td>A1</td><td>&lt;30 mg/g</td></tr>
<tr><td>G2</td><td>60–89</td><td>A2</td><td>30–300 mg/g</td></tr>
<tr><td>G3a</td><td>45–59</td><td>A3</td><td>&gt;300 mg/g</td></tr>
<tr><td>G3b</td><td>30–44</td><td></td><td></td></tr>
<tr><td>G4</td><td>15–29</td><td></td><td></td></tr>
<tr><td>G5</td><td>&lt;15</td><td></td><td></td></tr>
</table></div>
<ul>
<li>Causas principales: DM (la primera), HTA, glomerulonefritis, poliquistosis.</li>
<li>Estima la TFG con CKD-EPI 2021 (sin raza); confirma con cistatina C si hay duda (sarcopenia, amputación).</li>
<li>Pista de cronicidad: riñones pequeños en el USG. Excepciones con riñones grandes: DM, amiloidosis, poliquistosis, VIH.</li>
</ul>` },
        { h: 'Nefroprotección', html: `
<ul>
<li><b>PA</b>: KDIGO propone PAS &lt;120 si se tolera (medición estandarizada).</li>
<li><b>IECA o ARA-II</b> a dosis máxima tolerada si hay albuminuria. La creatinina puede subir hasta 30% al iniciar: es esperable; si sube más, revisa volumen, fármacos y estenosis renal.</li>
<li><b>iSGLT2</b>: en DM2 con ERC y TFG ≥20; sin DM si TFG ≥20 con albuminuria ≥200 mg/g o IC (y se sugieren con TFG 20–45 aunque la albuminuria sea menor).</li>
<li><b>Finerenona</b> (ARM no esteroideo): DM2 con albuminuria persistente pese a IECA/ARA-II, con K normal.</li>
<li><b>arGLP-1</b> (semaglutida): en DM2 con ERC, reduce progresión y eventos (FLOW).</li>
<li><b>Estatina</b> (o estatina + ezetimiba) en ≥50 años con ERC sin diálisis; no se inicia en diálisis.</li>
<li>Evita nefrotóxicos (AINE), ajusta dosis a la TFG, deja de fumar, sodio &lt;2 g/día, proteína ~0.8 g/kg/día en G3–G5 sin diálisis.</li>
</ul>` },
        { h: 'Complicaciones', html: `
<div class="tablewrap"><table class="mini">
<tr><th>Complicación</th><th>Por qué</th><th>Qué haces</th></tr>
<tr><td><b>Anemia</b> normocítica</td><td>Menos eritropoyetina; también ferropenia e inflamación</td><td>Primero hierro (si TSAT ≤30% y ferritina ≤500). Agente estimulante de eritropoyesis si Hb &lt;10. Meta Hb ≤11.5: normalizarla aumenta EVC y trombosis</td></tr>
<tr><td><b>Mineral óseo</b></td><td>↓ excreción de fósforo, ↓ calcitriol, ↑ FGF-23 → hipocalcemia → <b>hiperparatiroidismo secundario</b></td><td>Restringir fósforo, quelantes (sevelamer si hay hipercalcemia o calcificación vascular; carbonato de calcio), calcitriol o análogos, cinacalcet, paratiroidectomía</td></tr>
<tr><td><b>Acidosis metabólica</b></td><td>No se excreta la carga ácida</td><td>Bicarbonato oral si HCO₃ &lt;18</td></tr>
<tr><td><b>Hiperkalemia</b></td><td>Menos excreción; IECA/ARA-II/ARM</td><td>Dieta, suspender AINE, quelantes (patiromer, ciclosilicato de zirconio) para poder mantener el bloqueo del SRAA</td></tr>
<tr><td><b>Volumen e HTA</b></td><td>Retención de sodio</td><td>Restricción de sodio y diuréticos de asa</td></tr>
<tr><td><b>Uremia</b></td><td>Toxinas no eliminadas</td><td>Pericarditis, encefalopatía, prurito, neuropatía, sangrado por disfunción plaquetaria (desmopresina antes de procedimientos)</td></tr>
</table></div>
<p>La <b>enfermedad cardiovascular</b> es la principal causa de muerte en ERC.</p>` },
        { h: 'Fármacos y estudios a cuidar', html: `
<ul>
<li>Metformina: TFG 30–44 máx 1 000 mg/día; &lt;30 suspender.</li>
<li>Evita AINE, ajusta antibióticos, gabapentina, enoxaparina, digoxina, colchicina.</li>
<li>Gadolinio: evitar con TFG &lt;30 (fibrosis sistémica nefrogénica); contraste yodado con prevención.</li>
<li>Glibenclamida: evitar (hipoglucemia prolongada).</li>
</ul>` },
        { h: 'Referencia y preparación para terapia de reemplazo', html: `
<ul>
<li><b>Envía a Nefrología</b> si: TFG &lt;30, albuminuria ≥300 mg/g, caída rápida de la TFG, cilindros eritrocitarios o hematuria no urológica, HTA refractaria, potasio persistentemente alterado, litiasis recurrente o causa hereditaria.</li>
<li>Con TFG &lt;30: educar sobre opciones (hemodiálisis, diálisis peritoneal, trasplante preventivo, manejo conservador).</li>
<li><b>Fístula arteriovenosa</b> (acceso de elección) meses antes de necesitar diálisis; protege las venas del brazo no dominante (sin venopunciones ni catéteres).</li>
<li>La diálisis se inicia por síntomas o complicaciones (uremia, volumen, potasio, acidosis, desnutrición), no por una cifra aislada de TFG (estudio IDEAL).</li>
</ul>` }
      ],
      mnemo: { t: 'Las 4 llaves de la nefroprotección', d: 'Controlar la PA, IECA o ARA-II si hay albuminuria, iSGLT2 con TFG ≥20 y finerenona si es DM2 con albuminuria. Encima: estatina, sin AINE y dosis ajustadas.' },
      pearl: 'Que la creatinina suba hasta 30% al iniciar un IECA o ARA-II no es motivo para suspenderlo: es el efecto hemodinámico esperado.',
      trap: 'Dar eritropoyetina a un paciente con ERC y ferropenia sin reponer hierro primero, o buscar una Hb de 13: aumenta los EVC y las trombosis sin beneficio.',
      guide: [
        'Meta de PA en ERC: KDIGO 2021 propone PAS <120 si se tolera; la ESC 2024 y la AHA/ACC 2025 usan metas de 120–129 o <130/80. ⚠️ Pregunta cuál usa tu profesor.',
        'iSGLT2 sin diabetes: KDIGO 2024 los recomienda con TFG ≥20 y albuminuria ≥200 mg/g o IC, y los sugiere con TFG 20–45 aunque la albuminuria sea menor.'
      ],
      refs: [
        'KDIGO 2024 Clinical Practice Guideline for the Evaluation and Management of Chronic Kidney Disease. Kidney Int 2024.',
        'KDIGO 2022 Diabetes in CKD; KDIGO 2021 Blood Pressure in CKD; KDIGO 2012 Anemia in CKD; KDIGO 2017 CKD-MBD.'
      ]
    }
  },

  compares: {
    'lra-erc': {
      topic: 'erc', a: 'Lesión renal aguda', b: 'Enfermedad renal crónica',
      rows: [
        ['Tiempo', 'Horas a días (≤7 días para la definición)', '>3 meses'],
        ['Creatinina previa', 'Normal hace poco', 'Ya estaba alta'],
        ['Tamaño renal (USG)', 'Normal o aumentado', 'Pequeños y ecogénicos (salvo DM, amiloidosis, poliquistosis, VIH)'],
        ['Anemia', 'Puede no haber', 'Normocítica frecuente'],
        ['Mineral óseo', 'Normal al inicio', 'Fósforo alto, PTH alta, calcitriol bajo'],
        ['Reversibilidad', 'Frecuentemente reversible', 'Progresiva; se busca frenarla'],
        ['TFG estimada', 'No es válida (creatinina inestable)', 'Válida con creatinina estable']
      ]
    }
  },

  cards: [
    ['Definición de ERC', 'TFG <60 o marcador de daño (albuminuria ≥30 mg/g…) por >3 meses'],
    ['Categorías G', 'G1 ≥90 · G2 60–89 · G3a 45–59 · G3b 30–44 · G4 15–29 · G5 <15'],
    ['Categorías A', 'A1 <30 · A2 30–300 · A3 >300 mg/g'],
    ['Riñones grandes con ERC', 'DM, amiloidosis, poliquistosis, VIH'],
    ['¿Cuánto puede subir la creatinina al iniciar IECA/ARA-II?', 'Hasta 30%: aceptable'],
    ['iSGLT2 en ERC: desde qué TFG', 'Iniciar con TFG ≥20'],
    ['Finerenona', 'ARM no esteroideo para DM2 con albuminuria pese a IECA/ARA-II, con K normal'],
    ['Anemia de ERC: primer paso', 'Corregir ferropenia (hierro) antes del estimulante de eritropoyesis'],
    ['Meta de Hb con estimulante de eritropoyesis', '≤11.5 g/dL (no normalizar)'],
    ['Patrón mineral óseo en ERC', 'Fósforo ↑, calcio ↓, PTH ↑, calcitriol ↓, FGF-23 ↑'],
    ['Quelante si hay hipercalcemia o calcificación vascular', 'Sevelamer (sin calcio)'],
    ['Sangrado urémico antes de una biopsia', 'Desmopresina'],
    ['Acceso de elección para hemodiálisis', 'Fístula arteriovenosa, meses antes'],
    ['Bicarbonato oral en ERC', 'Si HCO₃ <18 mEq/L']
  ],

  questions: [
    q({ id: 'erc-01', dif: 1,
      stem: 'Hombre de 67 años con TFG de 38 mL/min/1.73 m² y cociente albúmina/creatinina de 420 mg/g, estables por 6 meses. ¿Clasificación?',
      opts: ['G3a A2', 'G3b A3', 'G4 A3', 'G3b A2', 'G2 A3'],
      ans: 1,
      exp: 'TFG 30–44 = G3b. Albuminuria >300 mg/g = A3. Persistencia >3 meses confirma ERC.',
      why: ['G3a es 45–59 y A2 es 30–300.', '', 'G4 es 15–29.', 'A2 es 30–300; él tiene 420.', 'G2 es 60–89.'],
      ref: 'KDIGO 2024' }),

    q({ id: 'erc-02', dif: 1,
      stem: 'Mujer de 48 años con gastroenteritis hace 1 semana. Hoy TFG 55 mL/min/1.73 m²; nunca se había medido. EGO normal. ¿Tiene ERC?',
      opts: ['Sí, G3a', 'No se puede afirmar: hay que confirmar que persista por más de 3 meses', 'Sí, porque la TFG es <60', 'No, porque el EGO es normal', 'Sí, si el USG muestra riñones normales'],
      ans: 1,
      exp: 'La ERC requiere persistencia >3 meses. Una TFG baja en el contexto de una enfermedad aguda puede ser LRA o un cambio transitorio. Repite la creatinina (y la albuminuria) más adelante.',
      why: ['Falta el criterio de tiempo.', '', 'Un solo valor no basta.', 'Un EGO normal no descarta ERC si la TFG baja persiste.', 'El USG no sustituye el criterio de tiempo.'],
      ref: 'KDIGO 2024' }),

    q({ id: 'erc-03', dif: 2,
      stem: 'Hombre de 55 años sin diabetes, con nefropatía por IgA. TFG 48, cociente albúmina/creatinina 650 mg/g. Toma losartán 100 mg. PA 128/78. ¿Qué agregas para proteger el riñón?',
      opts: ['Enalapril', 'Un iSGLT2 (dapagliflozina o empagliflozina)', 'Amlodipino', 'Furosemida', 'Nada más'],
      ans: 1,
      exp: 'KDIGO 2024: en ERC sin DM con TFG ≥20 y albuminuria ≥200 mg/g, los iSGLT2 reducen la progresión renal y los eventos (DAPA-CKD, EMPA-KIDNEY). Se suman al ARA-II a dosis máxima.',
      why: ['Nunca IECA + ARA-II.', '', 'Baja la PA, pero no tiene efecto antiproteinúrico adicional significativo.', 'Solo si hay sobrecarga de volumen.', 'Con esta albuminuria hay beneficio claro de agregar iSGLT2.'],
      ref: 'KDIGO 2024 · DAPA-CKD, EMPA-KIDNEY' }),

    q({ id: 'erc-04', dif: 2,
      stem: 'Mujer de 60 años con ERC G3a A3. Hace 2 semanas inició lisinopril. Creatinina de 1.30 a 1.55 mg/dL (↑19%), K 5.0 mEq/L. ¿Qué haces?',
      opts: ['Suspender el lisinopril', 'Continuarlo y repetir creatinina y potasio', 'Agregar losartán', 'Cambiar a hidralazina', 'Solicitar biopsia renal'],
      ans: 1,
      exp: 'Un ascenso de creatinina <30% al iniciar IECA o ARA-II refleja la caída de la presión glomerular (efecto protector a largo plazo). Se continúa y se vigila. Si sube >30% o hay hiperkalemia grave, revisa volumen, AINE y estenosis de arteria renal.',
      why: ['El ascenso es menor a 30%: aceptable.', '', 'Nunca doble bloqueo.', 'Perdería la protección renal.', 'No hay indicación.'],
      ref: 'KDIGO 2024' }),

    q({ id: 'erc-05', dif: 2,
      stem: 'Hombre de 70 años con ERC G4. Hb 9.2 g/dL, VCM 86, ferritina 80 ng/mL, saturación de transferrina 15%. ¿Primer paso?',
      opts: ['Iniciar eritropoyetina', 'Reponer hierro (IV u oral)', 'Transfundir', 'Aspirado de médula ósea', 'Vitamina B12'],
      ans: 1,
      exp: 'En la anemia de la ERC primero se corrige la ferropenia (TSAT ≤30% y ferritina ≤500 ng/mL). Sin hierro suficiente, la eritropoyetina no funciona bien. Si la Hb sigue <10 con hierro repleto, se considera el estimulante de eritropoyesis.',
      why: ['Funciona mal sin hierro suficiente.', '', 'No hay datos de inestabilidad ni síntomas graves.', 'No está indicado.', 'El VCM es normal y no hay datos de déficit.'],
      ref: 'KDIGO 2012 anemia en ERC' }),

    q({ id: 'erc-06', dif: 2,
      stem: 'Paciente en hemodiálisis con eritropoyetina. Hb 13.2 g/dL. ¿Qué haces?',
      opts: ['Mantener la dosis: está perfecto', 'Reducir o suspender la eritropoyetina: no se busca normalizar la Hb', 'Aumentar la dosis', 'Agregar hierro', 'Iniciar flebotomías'],
      ans: 1,
      exp: 'Con estimulantes de eritropoyesis, la Hb no debe superar ~11.5 g/dL: buscar 13 aumentó EVC, trombosis del acceso y eventos (TREAT, CHOIR, CREATE).',
      why: ['Es una Hb excesiva para un paciente con estimulante.', '', 'Empeoraría el riesgo.', 'No está indicado con Hb alta.', 'No es el manejo.'],
      ref: 'KDIGO 2012 anemia · TREAT 2009' }),

    q({ id: 'erc-07', dif: 1,
      stem: 'Paciente con ERC G4. ¿Qué patrón de laboratorio esperas?',
      opts: ['Fósforo bajo, calcio alto, PTH baja', 'Fósforo alto, calcio bajo o normal, PTH alta, calcitriol bajo', 'Fósforo normal, calcio alto, PTH alta', 'Fósforo alto, calcio alto, PTH baja', 'Todo normal hasta G5'],
      ans: 1,
      exp: 'Con menos nefronas se retiene fósforo y sube el FGF-23; baja la 1α-hidroxilasa (menos calcitriol), cae el calcio y la paratiroides responde: hiperparatiroidismo secundario. Lleva a enfermedad ósea y calcificación vascular.',
      why: ['Es el patrón contrario.', '', 'Calcio alto con PTH alta y fósforo normal sugiere hiperparatiroidismo primario.', 'PTH baja no es lo esperado.', 'Las alteraciones empiezan desde G3.'],
      ref: 'KDIGO 2017 CKD-MBD' }),

    q({ id: 'erc-08', dif: 2,
      stem: 'Mujer en hemodiálisis con fósforo de 7.2 mg/dL, calcio de 10.6 mg/dL y calcificaciones vasculares extensas. ¿Qué quelante de fósforo prefieres?',
      opts: ['Carbonato de calcio', 'Acetato de calcio', 'Sevelamer', 'Hidróxido de aluminio de forma crónica', 'Ninguno'],
      ans: 2,
      exp: 'Con hipercalcemia o calcificación vascular se prefiere un quelante sin calcio (sevelamer o lantano). Los quelantes de calcio aumentan la carga de calcio; el aluminio crónico es tóxico (encefalopatía, osteomalacia).',
      why: ['Aumenta la carga de calcio.', 'Igual: aporta calcio.', '', 'Tóxico a largo plazo.', 'Con fósforo de 7.2 necesita quelante además de la dieta.'],
      ref: 'KDIGO 2017 CKD-MBD' }),

    q({ id: 'erc-09', dif: 1,
      stem: 'Hombre con ERC G4 y HCO₃ sérico de 16 mEq/L persistente. ¿Qué indicas?',
      opts: ['Nada', 'Bicarbonato de sodio oral', 'Hemodiálisis urgente', 'Acetazolamida', 'Furosemida'],
      ans: 1,
      exp: 'La acidosis metabólica crónica de la ERC acelera la pérdida ósea y muscular y quizá la progresión renal. Se trata con bicarbonato oral cuando el HCO₃ es <18 mEq/L.',
      why: ['Con 16 mEq/L se recomienda tratar.', '', 'Sin otras indicaciones no requiere diálisis urgente.', 'Empeora la acidosis.', 'No corrige la acidosis.'],
      ref: 'KDIGO 2024' }),

    q({ id: 'erc-10', dif: 2,
      stem: 'Hombre con ERC G5 sin diálisis requiere una biopsia renal. Tiene tiempo de sangrado prolongado con plaquetas y coagulación normales. ¿Qué das antes del procedimiento?',
      opts: ['Plasma fresco congelado', 'Transfusión de plaquetas', 'Desmopresina', 'Vitamina K', 'Heparina'],
      ans: 2,
      exp: 'La uremia causa disfunción plaquetaria (con número de plaquetas y tiempos de coagulación normales). La desmopresina libera factor de von Willebrand y mejora la adhesión plaquetaria en horas. También ayudan la diálisis, corregir la anemia y los estrógenos conjugados.',
      why: ['La coagulación es normal.', 'Las plaquetas transfundidas también se vuelven disfuncionales en el ambiente urémico.', '', 'No hay déficit de vitamina K.', 'Aumentaría el sangrado.'],
      ref: 'Hedges SJ, et al. Nat Clin Pract Nephrol 2007' }),

    q({ id: 'erc-11', dif: 1,
      stem: 'Mujer de 59 años con creatinina de 3.1 mg/dL. El USG muestra riñones de 8 cm, ecogénicos, con pérdida de la diferenciación corticomedular. ¿Qué sugiere?',
      opts: ['Lesión renal aguda prerrenal', 'Enfermedad renal crónica', 'Obstrucción aguda', 'Nefropatía diabética temprana', 'Amiloidosis'],
      ans: 1,
      exp: 'Riñones pequeños (<9–10 cm) y ecogénicos indican cronicidad. Excepciones con riñones grandes en ERC: diabetes, amiloidosis, poliquistosis y VIH.',
      why: ['En la LRA el tamaño suele ser normal.', '', 'La obstrucción mostraría hidronefrosis.', 'Suele cursar con riñones normales o grandes.', 'Cursa con riñones grandes.'],
      ref: 'KDIGO 2024' }),

    q({ id: 'erc-12', dif: 1,
      stem: 'Hombre diestro de 62 años con ERC G4 que progresa. ¿Qué acción es la más importante para preparar su terapia de reemplazo?',
      opts: ['Colocar un catéter de hemodiálisis en cuanto la TFG llegue a 15', 'Referir para fístula arteriovenosa en el brazo no dominante con meses de anticipación y evitar venopunciones en ese brazo', 'Iniciar diálisis cuando la TFG sea <20 aunque esté asintomático', 'Esperar a que tenga uremia para decidir', 'Colocar un catéter central de inserción periférica en el brazo izquierdo'],
      ans: 1,
      exp: 'La fístula AV nativa tiene menos infecciones y trombosis que injertos y catéteres, pero tarda semanas o meses en madurar. Se planea con anticipación y se protegen las venas del brazo no dominante.',
      why: ['El catéter tiene más bacteriemias y es el acceso de última opción.', '', 'Iniciar temprano y asintomático no mejora la supervivencia (IDEAL).', 'Lleva a iniciar diálisis con catéter de urgencia.', 'Destruye las venas que se necesitan para la fístula.'],
      ref: 'KDIGO 2024 · KDOQI 2019 accesos vasculares' }),

    q({ id: 'erc-13', dif: 2,
      stem: 'Hombre de 58 años con ERC G3a A2, no en diálisis. LDL 128 mg/dL. Sin ECV. ¿Qué indicas?',
      opts: ['Nada: la estatina no sirve en ERC', 'Estatina (o estatina + ezetimiba)', 'Solo fenofibrato', 'Niacina', 'Esperar a que entre a diálisis'],
      ans: 1,
      exp: 'KDIGO: estatina (o estatina + ezetimiba, como en SHARP) en todos los adultos ≥50 años con ERC no en diálisis. En pacientes que ya están en diálisis no se inicia (4D, AURORA), aunque se continúa si ya la tomaban.',
      why: ['Sí reduce eventos en ERC no dialítica.', '', 'No es el tratamiento recomendado.', 'Sin beneficio.', 'En diálisis ya no muestra beneficio al iniciarla.'],
      ref: 'KDIGO 2013 lípidos en ERC · SHARP 2011' }),

    q({ id: 'erc-14', dif: 2,
      stem: 'Mujer de 64 años con DM2 y ERC G3a A3. Toma losartán 100 mg y empagliflozina. K 4.5 mEq/L. Albuminuria persistente de 900 mg/g. ¿Qué agregas para reducir progresión renal y eventos CV?',
      opts: ['Espironolactona', 'Finerenona', 'Enalapril', 'Aliskirén', 'Hidroclorotiazida'],
      ans: 1,
      exp: 'La finerenona (antagonista mineralocorticoide no esteroideo) redujo progresión renal y eventos CV en DM2 con albuminuria pese a IECA/ARA-II (FIDELIO, FIGARO). Requiere K normal y vigilancia.',
      why: ['No tiene la misma evidencia renal y da más hiperkalemia y ginecomastia.', '', 'Nunca IECA + ARA-II.', 'Doble bloqueo dañino.', 'Baja la PA, pero no tiene ese beneficio renal.'],
      ref: 'KDIGO 2022 DM en ERC · FIDELIO-DKD' }),

    q({ id: 'erc-15', dif: 1,
      stem: '¿Cuál de estos pacientes con ERC debe enviarse a Nefrología?',
      opts: ['TFG 72, albuminuria 15 mg/g estable', 'TFG 26 mL/min/1.73 m²', 'TFG 58 estable por 3 años, albuminuria 20 mg/g', 'Creatinina 1.1 mg/dL en un hombre de 30 años', 'TFG 65 con albuminuria 40 mg/g estable'],
      ans: 1,
      exp: 'Criterios de referencia: TFG <30, albuminuria ≥300 mg/g, caída rápida de la TFG, hematuria glomerular, HTA refractaria, alteraciones persistentes de potasio, litiasis recurrente o causa hereditaria. Con TFG <30 también empieza la planeación de la terapia de reemplazo.',
      why: ['Riesgo bajo; seguimiento en primer nivel.', '', 'G3a A1 estable puede seguirse en primer nivel.', 'Es normal.', 'G2 A2 estable se sigue en primer nivel.'],
      ref: 'KDIGO 2024' })
  ],

  cases: [
    { id: 'g-erc', topic: 'erc', subj: 'nefro',
      title: 'El riñón de don Pedro', place: 'Consulta de Medicina Interna',
      patient: { name: 'Pedro', age: 63, sex: 'H', skin: '#BF8A64', hair: '#A6A6B0', gown: '#7FB2E5' },
      intro: 'DM2 de 18 años e HTA. Toma metformina 1 g c/12 h, glibenclamida y enalapril 10 mg. Lo refieren por “creatinina alta” en dos ocasiones con 4 meses de diferencia.',
      extra: { label: 'TFG', unit: 'mL/min' },
      start: { FC: 76, PAS: 148, PAD: 84, SpO2: 97, FR: 16, X: 34 },
      nodes: [
        { tag: 'Consulta 1', ecg: 'normal',
          text: 'TFG 34 mL/min/1.73 m² en ambas mediciones. Cociente albúmina/creatinina 540 mg/g. K 4.6.',
          q: '¿Cómo lo clasificas y qué ajustas de entrada?',
          A: { t: 'G3b A3: suspender glibenclamida, bajar metformina a máx. 1 000 mg/día, subir el IECA a dosis máxima tolerada y agregar iSGLT2', ok: true, res: 'Ajustas el tratamiento y le explicas los días de enfermedad.' },
          B: { t: 'G4 A2: suspender todos los fármacos y referir a diálisis', ok: false, res: 'Clasificaste mal y quitaste fármacos que lo protegen.' },
          why: 'TFG 30–44 = G3b; albuminuria >300 = A3. Glibenclamida fuera (hipoglucemia), metformina máximo 1 000 mg/día, bloqueo del SRAA a dosis máxima e iSGLT2 (TFG ≥20).' },
        { tag: '2 semanas después', ecg: 'normal', vit: { PAS: 134, PAD: 80, X: 30 },
          text: 'Con enalapril 20 mg c/12 h y dapagliflozina, la TFG bajó de 34 a 30 (≈12%). K 5.1.',
          q: '¿Qué haces?',
          A: { t: 'Suspender enalapril y dapagliflozina: el riñón empeoró', ok: false, res: 'Perdiste dos fármacos que frenan la progresión por una caída esperada y hemodinámica.' },
          B: { t: 'Continuar ambos: la caída inicial <30% es esperable; dieta baja en potasio y vigilancia', ok: true, res: 'A los 3 meses la TFG se estabiliza en 31 y la albuminuria baja a 280 mg/g.', vit: { X: 31 } },
          why: 'IECA/ARA-II e iSGLT2 bajan la presión intraglomerular: una caída inicial de TFG <30% es esperada y protectora a largo plazo.' },
        { tag: '1 año después', ecg: 'normal', vit: { X: 24 },
          text: 'TFG 24. Hb 9.0 g/dL, ferritina 60 ng/mL, saturación de transferrina 12%. Fatiga.',
          q: '¿Qué indicas para la anemia?',
          A: { t: 'Hierro (de preferencia IV) y reevaluar antes de considerar eritropoyetina', ok: true, res: 'Con hierro IV sube a 10.6 g/dL sin necesidad de eritropoyetina.', vit: { X: 24 } },
          B: { t: 'Eritropoyetina con meta de Hb de 13', ok: false, res: 'Responde mal por la ferropenia y, al forzar la dosis, tiene una trombosis.' },
          why: 'Primero se repone hierro (TSAT ≤30%, ferritina ≤500). La meta con estimulante es Hb ≤11.5, nunca normalizar.' },
        { tag: '2 años después', ecg: 'normal', vit: { X: 17 },
          text: 'TFG 17, asintomático. Es diestro. Pregunta qué sigue.',
          q: '¿Qué planeas?',
          A: { t: 'Educación sobre opciones (incluido trasplante) y fístula AV en el brazo izquierdo desde ahora', ok: true, res: 'La fístula madura a tiempo; cuando aparecen síntomas, inicia hemodiálisis sin catéter.' },
          B: { t: 'Esperar a que tenga síntomas urémicos para decidir', ok: false, res: 'Llega con uremia y termina con un catéter de urgencia y bacteriemia.' },
          why: 'Con TFG <30 se planea la terapia de reemplazo: la fístula AV necesita semanas o meses para madurar.' }
      ] }
  ]
};
