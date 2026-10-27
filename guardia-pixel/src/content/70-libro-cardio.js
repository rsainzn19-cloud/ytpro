// Capítulos completos (estilo libro) de Cardiología. Integran las guías de la rotación (Guía Cardio, 1P y 2P MI)
// con las guías vigentes. libro.<tema> = { secs: [{ h, html }], refs: [] } — se muestra en la lección como “📖 Capítulo completo”.
const s = (h, html) => ({ h, html });
const GUIA = 'Guía Cardio y resúmenes 1P/2P MI de la rotación (X. Cors, EMIS 5).';

export default {
  libro: {
    sca: { refs: ['Byrne RA, et al. 2023 ESC Guidelines for the management of acute coronary syndromes. Eur Heart J 2023.', 'Thygesen K, et al. Fourth Universal Definition of Myocardial Infarction. Circulation 2018.', GUIA], secs: [
      s('Definición y clasificación', `
<p>El <b>síndrome coronario agudo (SCA)</b> agrupa los cuadros causados por <b>isquemia miocárdica aguda</b>, casi siempre por rotura o erosión de una placa aterosclerótica con trombosis. Se clasifica por el ECG y la troponina:</p>
<table class="mini"><tr><th>Tipo</th><th>ECG</th><th>Troponina</th><th>Oclusión</th></tr>
<tr><td>IAMCEST</td><td>Elevación persistente del ST (o equivalente)</td><td>Sube</td><td>Total → infarto transmural</td></tr>
<tr><td>IAMSEST</td><td>Sin elevación: ST↓, T invertida o normal</td><td>Sube (>p99)</td><td>Parcial → subendocárdico</td></tr>
<tr><td>Angina inestable</td><td>Sin elevación</td><td>Normal</td><td>Parcial, sin necrosis</td></tr></table>
<p><b>Infarto</b> (4ª definición universal) = troponina que sube o baja con al menos un valor >p99 más evidencia de isquemia (síntomas, cambios nuevos del ECG, onda Q, imagen o trombo en la angiografía).</p>
<h4>Tipos de infarto</h4>
<ul><li><b>Tipo 1</b>: aterotrombótico (rotura de placa) — el clásico.</li><li><b>Tipo 2</b>: desequilibrio aporte/demanda (anemia, taquiarritmia, hipotensión, hipoxemia) sin rotura de placa.</li><li><b>Tipo 3</b>: muerte súbita antes de tener biomarcadores.</li><li><b>Tipo 4a</b> asociado a ICP · <b>4b</b> trombosis del stent · <b>Tipo 5</b> asociado a cirugía de revascularización.</li></ul>`),
      s('Epidemiología', `
<p>La cardiopatía isquémica es la <b>primera causa de muerte en México</b> y en el mundo. Predomina en hombres después de los 45 años y en mujeres después de la menopausia; las mujeres, los adultos mayores y los diabéticos se presentan más a menudo con síntomas atípicos o sin dolor, y por eso se diagnostican más tarde.</p>`),
      s('Factores de riesgo', `
<ul><li><b>Modificables</b>: tabaquismo (el más importante que puedes cambiar), diabetes (el “peor”: equivale a cardiopatía), hipertensión, dislipidemia (LDL alto, HDL bajo), obesidad abdominal, sedentarismo, ERC.</li>
<li><b>No modificables</b>: edad (hombre >45, mujer >55), sexo masculino, antecedente familiar de cardiopatía prematura (familiar de primer grado hombre <55 o mujer <65 años).</li>
<li><b>Causas no ateroscleróticas</b>: vasoespasmo (cocaína, Prinzmetal), disección coronaria espontánea (mujeres jóvenes, embarazo), embolia coronaria (FA, endocarditis), vasculitis (Kawasaki, Takayasu).</li></ul>`),
      s('Fisiopatología', `
<p>La placa vulnerable tiene un <b>núcleo lipídico grande</b> y una <b>capa fibrosa delgada</b> infiltrada por macrófagos. Cuando se rompe o se erosiona, expone colágeno y factor tisular: las plaquetas se adhieren (GP Ib–factor de von Willebrand), se activan (tromboxano A₂, ADP vía P2Y₁₂) y se agregan (GP IIb/IIIa), y la cascada de coagulación genera trombina y fibrina.</p>
<ul><li>Si el trombo <b>ocluye por completo</b> la arteria → necrosis transmural → <b>IAMCEST</b>.</li><li>Si la oclusión es <b>parcial o intermitente</b> → isquemia subendocárdica → <b>IAMSEST o angina inestable</b>.</li></ul>
<p>La necrosis avanza del subendocardio al epicardio en “frente de onda”: a los 20–40 min de oclusión empieza la muerte celular y en 3–6 h ya es casi transmural. De ahí la frase <b>“tiempo es músculo”</b>.</p>`),
      s('Cuadro clínico', `
<ul><li><b>Dolor torácico</b> opresivo, retroesternal, >20 min, en reposo o con mínimo esfuerzo; no cede con reposo ni nitroglicerina. Irradia a brazo izquierdo, cuello, mandíbula o epigastrio.</li>
<li><b>Síntomas autonómicos</b>: diaforesis, náusea, vómito, palidez, ansiedad, síncope.</li>
<li><b>Presentaciones atípicas</b>: disnea, fatiga o dolor epigástrico, sobre todo en mujeres, ancianos y diabéticos (neuropatía autonómica).</li>
<li><b>Infarto inferior</b>: dolor epigástrico, bradicardia e hipotensión (reflejo vagal). Si además hay yugulares ingurgitadas con pulmones limpios → piensa en <b>infarto del VD</b>.</li>
<li><b>Exploración</b>: puede ser normal; busca S4 (ventrículo rígido), S3 o estertores (falla), soplo nuevo (complicación mecánica) e hipotensión (choque).</li></ul>
<p><b>Killip-Kimball</b>: I sin falla · II estertores basales o S3 · III edema agudo de pulmón · IV choque cardiogénico.</p>`),
      s('Diagnóstico', `
<h4>1. ECG en los primeros 10 minutos</h4>
<p>Repítelo cada 15–30 min si el primero no es diagnóstico. <b>Elevación del ST</b> en ≥2 derivaciones contiguas: ≥1 mm, salvo en V2–V3 (≥2 mm hombres ≥40 años, ≥2.5 mm hombres <40, ≥1.5 mm mujeres). Evolución: T hiperaguda → ST↑ → onda Q (≥40 ms o >¼ de la R) → T invertida.</p>
<table class="mini"><tr><th>Derivaciones</th><th>Cara</th><th>Arteria</th></tr>
<tr><td>V1–V2</td><td>Septal</td><td>Descendente anterior</td></tr><tr><td>V3–V4</td><td>Anterior</td><td>Descendente anterior</td></tr>
<tr><td>I, aVL, V5–V6</td><td>Lateral</td><td>Circunfleja / diagonal</td></tr><tr><td>II, III, aVF</td><td>Inferior</td><td>Coronaria derecha (~80%)</td></tr>
<tr><td>V7–V9 (ST↓ V1–V3 en espejo)</td><td>Posterior</td><td>Circunfleja o CD</td></tr><tr><td>V3R–V4R</td><td>Ventrículo derecho</td><td>CD proximal</td></tr></table>
<p><b>Equivalentes de IAMCEST</b>: BRI o ritmo de marcapasos con criterios de Sgarbossa, IAM posterior aislado, de Winter, ST↑ en aVR con infradesnivel difuso (tronco o 3 vasos).</p>
<h4>2. Troponina de alta sensibilidad</h4>
<p>Algoritmo 0/1 h (o 0/2 h): muy baja al inicio o sin cambio → descarta; muy alta o con delta significativo → confirma. Sube a las 2–4 h, pico 24 h y dura 7–14 días. La CK-MB se normaliza en 2–3 días (útil para reinfarto); la mioglobina es la primera en subir (1–3 h) pero es inespecífica y ya no se usa.</p>
<h4>3. Otros estudios</h4>
<p>Ecocardiograma (alteraciones de la movilidad, complicaciones mecánicas, FEVI), radiografía, química, lípidos, BH. <b>No esperes la troponina</b> para reperfundir un IAMCEST.</p>
<h4>4. Estratificación del SCASEST</h4>
<p><b>GRACE</b> (edad, FC, PAS, creatinina, Killip, paro, ST, troponina) predice mortalidad; >140 = alto riesgo. <b>TIMI</b> 0–2 bajo, ≥3 alto.</p>`),
      s('Diagnóstico diferencial', `
<table class="mini"><tr><th>Entidad</th><th>Pista</th></tr>
<tr><td>Disección aórtica</td><td>Dolor desgarrante a espalda, asimetría de pulsos o TA, mediastino ancho. Antiagregar puede matar.</td></tr>
<tr><td>TEP</td><td>Disnea súbita, taquicardia, hipoxemia, factores de riesgo, S1Q3T3.</td></tr>
<tr><td>Pericarditis</td><td>Dolor pleurítico que mejora al inclinarse, frote, ST↑ difuso con PR↓.</td></tr>
<tr><td>Neumotórax</td><td>Disnea súbita, ruidos abolidos, hiperresonancia.</td></tr>
<tr><td>Ruptura esofágica / ERGE / espasmo</td><td>Relación con vómito o comida, dolor urente.</td></tr>
<tr><td>Takotsubo</td><td>Mujer posmenopáusica con estrés, coronarias sin obstrucción, abombamiento apical.</td></tr>
<tr><td>Costocondritis</td><td>Dolor reproducible a la palpación.</td></tr></table>
<p>Troponina alta sin SCA: miocarditis, TEP, sepsis, ERC, IC, taquiarritmias, contusión.</p>`),
      s('Tratamiento', `
<h4>Medidas iniciales</h4>
<ul><li><b>Aspirina</b> 150–300 mg masticada (ESC) a todos, salvo alergia.</li><li><b>Nitroglicerina</b> SL 0.4 mg cada 5 min (máx. 3) si hay dolor — <b>no</b> si PAS <90, infarto del VD o uso de inhibidores de PDE-5.</li><li><b>Oxígeno solo si SatO₂ <90%</b>. <b>Morfina</b> solo para dolor intenso (retrasa la absorción de los P2Y₁₂ orales).</li></ul>
<h4>IAMCEST: reperfundir</h4>
<ul><li><b>ICP primaria</b> si se puede hacer en ≤120 min desde el diagnóstico (meta ≤90 min, ≤60 si llegó a un centro con hemodinamia), con síntomas <12 h.</li>
<li>Si no: <b>fibrinólisis</b> (tenecteplasa, alteplasa) en ≤10 min del diagnóstico y luego traslado. <b>Exitosa</b> (ST baja ≥50% y mejora el dolor a los 60–90 min) → coronariografía a las 2–24 h; <b>fallida</b> → ICP de rescate inmediata.</li>
<li>Contraindicaciones absolutas de fibrinólisis: hemorragia intracraneal previa, EVC isquémico <6 meses, tumor o malformación del SNC, trauma/cirugía mayor o TCE <1 mes, sangrado activo, disección aórtica.</li></ul>
<h4>SCASEST: decidir cuándo cateterizar</h4>
<ul><li><b>Inmediata (<2 h)</b>: muy alto riesgo — inestable, choque, dolor refractario, arritmias malignas, complicación mecánica, IC aguda.</li><li><b>Temprana (<24 h)</b>: alto riesgo — IAMSEST confirmado, cambios dinámicos del ST, GRACE >140.</li><li>Los demás: estrategia selectiva (prueba de isquemia o angio-TC).</li></ul>
<h4>Antitrombóticos</h4>
<ul><li><b>Doble antiagregación</b>: aspirina + inhibidor de P2Y₁₂ (prasugrel o ticagrelor preferidos; clopidogrel si alto riesgo de sangrado o con fibrinólisis) por <b>12 meses</b> de forma estándar.</li><li><b>Anticoagulación</b> durante la fase aguda: heparina no fraccionada (en ICP), enoxaparina o fondaparinux.</li><li>Inhibidores GP IIb/IIIa solo de rescate en la sala (trombo grande, no reflujo).</li></ul>
<h4>Al alta (prevención secundaria)</h4>
<p>Aspirina de por vida + P2Y₁₂ 12 meses · <b>estatina de alta intensidad</b> (meta LDL <55 mg/dL y ↓≥50%; agregar ezetimiba o iPCSK9) · <b>betabloqueador</b> sobre todo con FEVI ≤40% · <b>IECA/ARA-II</b> con FEVI ≤40%, DM, HTA o ERC · antagonista mineralocorticoide si FEVI ≤40% con IC o DM · IBP si hay riesgo de sangrado · rehabilitación cardiaca y dejar de fumar. DAI si la FEVI sigue ≤35% a las 6 semanas.</p>`),
      s('Complicaciones', `
<table class="mini"><tr><th>Cuándo</th><th>Complicación</th><th>Pista</th></tr>
<tr><td>Primeras 24–48 h</td><td>Arritmias: FV/TV (isquemia), bradicardia y bloqueos (IAM inferior)</td><td>Muerte súbita temprana</td></tr>
<tr><td>1–3 días</td><td>Pericarditis temprana</td><td>Frote, ST↑ difuso</td></tr>
<tr><td>3–7 días (primera semana)</td><td>Rotura de músculo papilar</td><td>IAM inferior, IM aguda con edema pulmonar</td></tr>
<tr><td>3–5 días</td><td>Rotura septal</td><td>Soplo holosistólico nuevo con frémito, salto oximétrico</td></tr>
<tr><td>5 días–2 semanas</td><td>Rotura de pared libre</td><td>Taponamiento, disociación electromecánica</td></tr>
<tr><td>Semanas</td><td>Aneurisma ventricular (anterior; ST↑ persistente, trombo) · pseudoaneurisma (inferior, contenido por pericardio)</td><td>Eco</td></tr>
<tr><td>Semanas–meses</td><td>Síndrome de Dressler (autoinmune)</td><td>Fiebre, pericarditis, derrame → AINE/aspirina + colchicina</td></tr></table>
<p>Además: choque cardiogénico (la principal causa de muerte intrahospitalaria), IC, trombo en VI y EVC embólico.</p>`),
      s('Pronóstico y prevención', `
<p>La mortalidad intrahospitalaria del IAMCEST con reperfusión oportuna es ~5–6%; aumenta con la edad, Killip alto, FEVI baja y retraso en la reperfusión. Después del evento, la <b>prevención secundaria</b> (estatina, antiagregación, control de factores de riesgo, rehabilitación) reduce nuevos eventos: es tan importante como el cateterismo.</p>
<p><b>Puntos clave</b>: ECG en 10 min · aspirina de inmediato · IAMCEST = reperfundir (ICP ≤120 min o fibrinólisis) · SCASEST = estratificar (GRACE) · 12 meses de doble antiagregación · estatina de alta intensidad para todos.</p>`)
    ] },

    scc: { refs: ['Vrints C, et al. 2024 ESC Guidelines for the management of chronic coronary syndromes. Eur Heart J 2024.', 'Maron DJ, et al. ISCHEMIA. N Engl J Med 2020.', GUIA], secs: [
      s('Definición', `
<p>Los <b>síndromes coronarios crónicos (SCC)</b> son la fase estable de la enfermedad coronaria: angina de esfuerzo estable, pacientes con infarto o revascularización previa, isquemia sin síntomas y angina con coronarias sin obstrucción (microvascular o vasoespástica). La <b>angina</b> es dolor torácico por isquemia sin necrosis: aparece cuando una estenosis fija (≥70%, o ≥50% en el tronco) no deja que el flujo aumente con el esfuerzo.</p>`),
      s('Epidemiología y factores de riesgo', `
<p>Es la forma más frecuente de cardiopatía isquémica y la causa principal de muerte súbita en adultos. Comparte los factores de riesgo de la aterosclerosis: tabaquismo, DM, HTA, dislipidemia, obesidad, sedentarismo, ERC, edad y antecedente familiar prematuro (hombre <55, mujer <65). <b>Equivalentes de riesgo coronario</b>: DM, enfermedad carotídea, arterial periférica, aneurisma aórtico y ERC.</p>`),
      s('Fisiopatología', `
<p><b>Aterosclerosis</b>: disfunción endotelial (HTA, tabaco, LDL) → entrada de LDL al subendotelio y oxidación → monocitos que se vuelven macrófagos y luego <b>células espumosas</b> (estría grasa) → citocinas y PDGF → migración y proliferación de músculo liso y matriz → <b>placa fibrosa</b>.</p>
<p>El <b>consumo de O₂ miocárdico</b> depende de la frecuencia cardiaca (lo principal), la contractilidad y la tensión de pared (precarga y poscarga). El VI se perfunde en <b>diástole</b>: la taquicardia acorta el tiempo de perfusión justo cuando sube la demanda. Otras causas de desbalance: anemia, estenosis aórtica, miocardiopatía hipertrófica, hipertiroidismo.</p>
<p><b>Cascada isquémica</b>: defecto de perfusión → disfunción diastólica → alteración de la movilidad → cambios del ECG → dolor. Por eso las pruebas con imagen detectan antes que el ECG de esfuerzo.</p>`),
      s('Cuadro clínico', `
<p><b>Angina típica</b> (3 de 3): molestia retroesternal opresiva (signo de Levine: puño sobre el esternón) · provocada por esfuerzo o estrés · cede con reposo o nitroglicerina en minutos (dura 2–10 min). <b>Atípica</b>: 2 de 3 · <b>no anginosa</b>: 0–1.</p>
<p>Irradia a cuello, mandíbula u hombro izquierdo; puede acompañarse de disnea, náusea o diaforesis.</p>
<table class="mini"><tr><th>Clase CCS</th><th>Angina con…</th></tr><tr><td>I</td><td>Esfuerzo extenuante; no limita la vida normal</td></tr><tr><td>II</td><td>Actividad ordinaria (subir escaleras rápido); limitación leve</td></tr><tr><td>III</td><td>Poca actividad (caminar 1–2 cuadras); limitación marcada</td></tr><tr><td>IV</td><td>Cualquier actividad o en reposo</td></tr></table>
<p><b>Variantes</b>: vasoespástica (Prinzmetal: reposo, madrugada, fumadores o cocaína, ST↑ transitorio → calcioantagonista + nitrato, evita betabloqueador no selectivo) y microvascular (mujeres, coronarias normales).</p>`),
      s('Diagnóstico', `
<h4>A todos</h4>
<p>ECG en reposo (normal en ~50%; Q previas, ST/T), ecocardiograma (FEVI, movilidad, valvulopatía), lípidos, glucosa/A1c, creatinina, BH (la anemia empeora la angina).</p>
<h4>Probabilidad clínica → estudio (ESC 2024)</h4>
<ul><li>≤5%: no más pruebas.</li><li>>5–50%: <b>angio-TC coronaria</b> (excelente para descartar; calcio coronario alto apoya).</li><li>>15–85%: <b>imagen funcional con estrés</b> (eco de estrés con dobutamina, SPECT o RM con vasodilatador).</li><li>>85% o datos de alto riesgo: <b>coronariografía invasiva</b> (estándar de oro anatómico), idealmente con <b>FFR</b> (≤0.80 = estenosis significativa).</li></ul>
<h4>Prueba de esfuerzo con ECG</h4>
<p>Meta 85% de la FC máxima (220 − edad); suspende betabloqueador y calcioantagonista 48 h antes. No sirve si el ECG basal no es interpretable (BRI, marcapasos, WPW, digoxina, HVI, ST↓ ≥1 mm). <b>Alto riesgo</b>: ST↓ ≥2 mm o a baja carga, en ≥5 derivaciones, ST↑, caída de la PAS >10 mmHg o no completa la prueba → coronariografía.</p>
<p><b>Robo coronario</b>: adenosina y dipiridamol dilatan solo las arterias sanas y quitan flujo a la estenótica; así revelan la isquemia. Dipiridamol/adenosina se evitan en broncoespasmo; la dobutamina puede dar arritmias.</p>`),
      s('Diagnóstico diferencial', `
<p>ERGE y espasmo esofágico (dolor urente, relación con comida), costocondritis (dolor a la palpación), pleuritis y pericarditis (pleurítico), ansiedad, cólico biliar, estenosis aórtica y miocardiopatía hipertrófica (angina sin enfermedad coronaria), y sobre todo <b>SCA</b>: si el dolor es nuevo, en reposo o en crescendo, ya no es estable.</p>`),
      s('Tratamiento', `
<h4>Mejoran el pronóstico (todos)</h4>
<ul><li><b>Aspirina</b> 75–100 mg/día (clopidogrel si no la tolera).</li><li><b>Estatina de alta intensidad</b>: meta LDL <55 mg/dL y reducción ≥50%; si no se alcanza, ezetimiba y luego iPCSK9.</li><li><b>IECA/ARA-II</b> si hay HTA, DM, ERC o FEVI ≤40%. iSGLT2 o arGLP-1 si hay DM.</li><li>Control de factores de riesgo: dejar de fumar (el riesgo baja ~50% al año), ejercicio, peso, PA, glucosa.</li></ul>
<h4>Quitan la angina</h4>
<ul><li><b>Primera línea</b>: betabloqueador (↓FC y contractilidad, alarga la diástole) y/o calcioantagonista.</li><li><b>Nitratos</b>: SL para la crisis; de acción larga como añadido (dejar un periodo libre para evitar tolerancia). Contraindicados con sildenafil (24 h) o tadalafil (48 h).</li><li>Segunda línea: ranolazina (bloquea la corriente tardía de Na), trimetazidina, ivabradina (solo con IC y FEVI reducida en ritmo sinusal).</li><li>Evita <b>betabloqueador + verapamilo/diltiazem</b> (bradicardia y bloqueo AV): combina el betabloqueador con amlodipino.</li></ul>
<h4>Revascularización</h4>
<p>Indicada si persisten síntomas pese al tratamiento óptimo o hay anatomía de alto riesgo: <b>tronco</b> ≥50%, enfermedad de <b>3 vasos</b> o DA proximal con FEVI ≤35%. En estos, la cirugía (CABG) mejora la supervivencia, sobre todo con DM; la ICP es preferible en enfermedad de 1–2 vasos. El estudio ISCHEMIA mostró que en pacientes estables sin tronco, la revascularización rutinaria no reduce la mortalidad frente al tratamiento médico óptimo.</p>`),
      s('Complicaciones y pronóstico', `
<p>Complicaciones: SCA, insuficiencia cardiaca isquémica, arritmias y muerte súbita. Peor pronóstico con FEVI <50%, enfermedad de tronco o múltiples vasos, isquemia extensa y DM. Seguimiento cada 6–12 meses con control de factores de riesgo y apego.</p>
<p><b>Puntos clave</b>: aspirina + estatina para todos · betabloqueador o calcioantagonista para síntomas · nitratos nunca con inhibidores de PDE-5 · angio-TC con probabilidad baja, imagen funcional con intermedia, coronariografía con alta · revascularizar tronco, 3 vasos o angina refractaria.</p>`)
    ] },

    aortica: { refs: ['Praz F, et al. 2025 ESC/EACTS Guidelines for the management of valvular heart disease. Eur Heart J 2025.', 'Otto CM, et al. 2020 ACC/AHA Guideline for the Management of Valvular Heart Disease. Circulation 2021.', 'Delgado V, et al. 2023 ESC Guidelines for endocarditis. Eur Heart J 2023.', GUIA], secs: [
      s('Bases: soplos y ruidos', `
<p><b>Focos</b>: aórtico (2.º EIC paraesternal derecho), pulmonar (2.º EIC izquierdo), Erb (3.er EIC izquierdo), tricuspídeo (4.º–5.º EIC paraesternal izquierdo) y mitral (5.º EIC línea medioclavicular). En sístole se abre la aórtica y se cierra la mitral: ahí se oyen la <b>estenosis aórtica</b> y la <b>insuficiencia mitral</b>; en diástole, la <b>insuficiencia aórtica</b> y la <b>estenosis mitral</b>.</p>
<p><b>Grados (Levine)</b>: 1 apenas audible · 2 suave · 3 moderado · 4 con frémito · 5 con el borde del estetoscopio · 6 sin tocar el tórax.</p>
<table class="mini"><tr><th>Maniobra</th><th>Efecto</th><th>Sube</th><th>Baja</th></tr>
<tr><td>Valsalva / de pie</td><td>↓ precarga</td><td>MCH, prolapso mitral</td><td>Casi todos</td></tr>
<tr><td>Cuclillas / elevar piernas</td><td>↑ precarga (y poscarga)</td><td>Casi todos</td><td>MCH, prolapso</td></tr>
<tr><td>Handgrip</td><td>↑ poscarga</td><td>IM, IA, CIV</td><td>EA, MCH</td></tr>
<tr><td>Inspiración</td><td>↑ retorno derecho</td><td>Soplos derechos</td><td>Izquierdos</td></tr></table>
<p><b>Desdoblamiento del S2</b>: fisiológico (inspiración) · amplio (BRD, estenosis pulmonar) · fijo (CIA) · paradójico, en espiración (EA grave, BRI).</p>`),
      s('Estenosis aórtica: definición, epidemiología y causas', `
<p>Obstrucción a la salida del VI por estrechez de la válvula aórtica. Es la valvulopatía más frecuente en países desarrollados y aumenta con la edad.</p>
<ul><li><b>Degenerativa calcificada</b> (>65 años): la más común; comparte factores de riesgo con la aterosclerosis (las estatinas no la frenan). Empieza como <b>esclerosis aórtica</b> (engrosamiento sin obstrucción).</li><li><b>Bicúspide</b>: la malformación más común (1–2%); da EA a los 40–60 años y se asocia a coartación y dilatación de la raíz.</li><li><b>Reumática</b>: fusión de comisuras; casi siempre con afección mitral.</li></ul>`),
      s('Estenosis aórtica: fisiopatología y clínica', `
<p>La obstrucción eleva la <b>poscarga</b> → hipertrofia concéntrica del VI (compensación) → más demanda de O₂, menor reserva coronaria y disfunción diastólica (S4). Con el tiempo cae la FEVI y aparece la falla.</p>
<p>Asintomática por años; cuando aparecen síntomas la enfermedad es grave. Tríada <b>“ASD”</b>: <b>angina</b> (demanda > aporte), <b>síncope</b> de esfuerzo (gasto fijo con vasodilatación periférica) y <b>disnea</b> (falla). Supervivencia media sin tratamiento: angina 5 años, síncope 3, IC 2.</p>
<p><b>Exploración</b>: pulso <b>parvus et tardus</b>, soplo mesosistólico rudo en <b>diamante</b> en foco aórtico irradiado a <b>carótidas</b>; entre más grave, más tardío el pico y más apagado el S2 (único o desdoblamiento paradójico); S4; frémito. Puede irradiarse al ápex y sonar como IM (<b>Gallavardin</b>). Disminuye con Valsalva y handgrip.</p>`),
      s('Estenosis aórtica: diagnóstico y estadios', `
<p><b>Ecocardiograma transtorácico</b>: estudio de elección (área, velocidad, gradiente, FEVI, calcio). ECG: HVI con sobrecarga, BRI, FA. Rx: calcio valvular, dilatación postestenótica. Prueba de esfuerzo en <b>asintomáticos</b> para desenmascarar síntomas (contraindicada si hay síntomas). Cateterismo si hay discrepancias; TC con score de calcio en EA de bajo flujo.</p>
<table class="mini"><tr><th>Estadio</th><th>Definición</th><th>Área</th><th>Vmáx</th><th>Gradiente medio</th></tr>
<tr><td>A</td><td>En riesgo</td><td>3–4 cm²</td><td><2 m/s</td><td><10</td></tr><tr><td>B</td><td>Progresiva</td><td>>1–2.9</td><td>2–3.9</td><td>10–39</td></tr>
<tr><td>C1</td><td>Grave asintomática, FEVI normal</td><td rowspan="3">≤1 cm²</td><td rowspan="3">≥4 m/s</td><td rowspan="3">≥40 mmHg</td></tr><tr><td>C2</td><td>Grave asintomática, FEVI <50%</td></tr><tr><td>D</td><td>Grave sintomática</td></tr></table>
<p>Seguimiento con eco: B leve cada 3–5 años, B moderada cada 1–2, C cada 6–12 meses.</p>`),
      s('Estenosis aórtica: tratamiento', `
<ul><li><b>Cambio valvular</b> (único tratamiento eficaz) si: EA grave <b>sintomática</b> (D), grave asintomática con FEVI <50% (C2), prueba de esfuerzo anormal, o si va a otra cirugía cardiaca.</li>
<li><b>TAVI vs quirúrgico</b>: ESC/EACTS 2025 favorece TAVI ≥70 años con anatomía adecuada; ACC/AHA 2020: cirugía <65, decisión compartida 65–80, TAVI >80. Alto riesgo quirúrgico → TAVI.</li>
<li><b>Valvuloplastia con balón</b>: solo puente o paliativa en adultos (reestenosis alta).</li>
<li>Médico (no cambia la historia natural): controlar HTA (IECA con cuidado), evitar <b>vasodilatadores potentes y nitratos</b> (hipotensión con gasto fijo), diuréticos con cautela.</li></ul>
<p><b>Anticoagulación de prótesis</b>: mecánica → warfarina de por vida (nunca ACOD): aórtica sin factores de riesgo INR 2.5; con FA, embolia previa, FEVI baja o prótesis mitral INR 3. Bioprótesis → aspirina (o AVK 3–6 meses).</p>`),
      s('Insuficiencia aórtica', `
<p><b>Definición</b>: reflujo de la aorta al VI en diástole por cierre incompleto.</p>
<ul><li><b>Causas agudas</b>: endocarditis, disección aórtica, trauma. <b>Crónicas</b>: bicúspide, reumática, dilatación de la raíz (HTA, Marfan, Ehlers-Danlos, sífilis, espondilitis anquilosante, Takayasu).</li>
<li><b>Fisiopatología</b>: sobrecarga de <b>volumen</b> → hipertrofia excéntrica y dilatación del VI; volumen latido alto con diastólica baja → <b>presión diferencial amplia</b>. En la aguda, el VI no se adapta → edema pulmonar y choque.</li>
<li><b>Clínica</b>: crónica asintomática por años, luego disnea, palpitaciones y angina. Soplo <b>diastólico temprano decrescendo</b>, agudo, en el borde esternal izquierdo (Erb), mejor sentado inclinado hacia adelante en espiración; sube con handgrip y cuclillas. <b>Austin Flint</b>: retumbo apical. Si se oye mejor a la derecha del esternón, piensa en la raíz.</li>
<li><b>Signos periféricos</b>: Corrigan (pulso en martillo de agua), de Musset (cabeceo), Quincke (pulso capilar), Müller (úvula), Traube, Duroziez, <b>Hill</b> (PAS poplítea >60 mmHg sobre la braquial = grave).</li>
<li><b>Diagnóstico</b>: eco (chorro, dimensiones, FEVI); TC si sospechas disección; RM si el eco no basta.</li>
<li><b>Tratamiento</b>: aguda → cirugía urgente (vasodilatador IV de puente; evita betabloqueador y balón intraaórtico). Crónica grave → cirugía si hay síntomas, FEVI ≤50–55% o diámetro telesistólico >50 mm. Vasodilatadores (IECA, dihidropiridínicos) para HTA; evita betabloqueadores (alargan la diástole y el reflujo).</li></ul>`),
      s('Endocarditis y profilaxis', `
<p>Las valvulopatías y las prótesis predisponen a <b>endocarditis</b>: fiebre + soplo nuevo + fenómenos embólicos (Janeway) o inmunológicos (Osler, Roth, glomerulonefritis). Diagnóstico con criterios de <b>Duke</b> (hemocultivos ≥2–3 positivos y eco con vegetación como criterios mayores). Gérmenes: <i>S. aureus</i> (UDVP, válvula nativa aguda), estreptococos viridans (dental), <i>S. epidermidis</i> (prótesis), <i>S. gallolyticus/bovis</i> (cáncer de colon), HACEK y <i>Coxiella</i> (cultivos negativos).</p>
<p><b>Profilaxis antibiótica</b> (amoxicilina 2 g 30–60 min antes) solo en procedimientos dentales con manipulación gingival en: prótesis o reparación con material protésico, endocarditis previa, cardiopatía congénita cianógena no corregida y receptores de trasplante cardiaco (y TAVI). Una valvulopatía nativa sola no la requiere.</p>`),
      s('Puntos clave', `
<p>EA: ASD + parvus et tardus + diamante a carótidas → eco → cambio valvular si hay síntomas o FEVI <50% · IA: diastólico decrescendo + pulso saltón + presión diferencial amplia → cirugía si hay síntomas, FEVI ≤50–55% o DTS >50 mm · prótesis mecánica = warfarina, nunca ACOD.</p>`)
    ] },

    mitral: { refs: ['Praz F, et al. 2025 ESC/EACTS Guidelines for valvular heart disease. Eur Heart J 2025.', 'Otto CM, et al. 2020 ACC/AHA Valvular Heart Disease Guideline. Circulation 2021.', 'Connolly SJ, et al. INVICTUS. N Engl J Med 2022.', GUIA], secs: [
      s('Estenosis mitral: definición y causas', `
<p>Estrechez del orificio mitral que impide el paso de sangre de la AI al VI en diástole. Área normal 4–6 cm²; hay repercusión <2 cm² y es <b>grave ≤1.5 cm²</b>.</p>
<ul><li><b>Fiebre reumática</b>: la causa más común (fusión de comisuras, cuerdas engrosadas); más en mujeres y en países en desarrollo.</li><li>Calcificación del anillo (ancianos, ERC), congénita, LES/AR. Imitadores: mixoma auricular, trombo.</li></ul>`),
      s('Estenosis mitral: fisiopatología y clínica', `
<p>La obstrucción eleva la presión de la AI → dilatación auricular (→ <b>FA</b> y trombos) → congestión venosa pulmonar → <b>hipertensión pulmonar</b> → hipertrofia y falla del VD. El VI se llena poco: gasto bajo. La taquicardia (ejercicio, embarazo, FA) acorta la diástole y descompensa.</p>
<ul><li><b>Síntomas</b>: disnea de esfuerzo (lo principal), ortopnea, hemoptisis, palpitaciones (FA), embolias sistémicas (EVC), disfonía (<b>Ortner</b>: AI comprime el laríngeo recurrente), disfagia.</li>
<li><b>Exploración</b>: facies mitral (chapetas), <b>S1 fuerte</b>, <b>chasquido de apertura</b> tras el S2 (entre más cerca del S2, más grave), <b>retumbo diastólico</b> grave en el ápex con refuerzo presistólico (se pierde con FA); mejor con la campana en decúbito lateral izquierdo.</li></ul>`),
      s('Estenosis mitral: diagnóstico y estadios', `
<p><b>Eco transtorácico</b> de elección: área (planimetría), gradiente medio, PSAP, anatomía (score de <b>Wilkins</b> para decidir valvuloplastia). <b>Eco transesofágico</b> antes de la valvuloplastia para descartar trombo en la AI. ECG: <b>P mitral</b> (≥120 ms, bimodal en DII), FA, HVD. Rx: AI grande (doble contorno, carina abierta), congestión.</p>
<table class="mini"><tr><th>Estadio</th><th>Área</th><th>Hallazgos</th></tr><tr><td>A en riesgo</td><td>Normal</td><td>—</td></tr><tr><td>B progresiva</td><td>>1.5 cm²</td><td>AI leve-moderada</td></tr><tr><td>C grave asintomática</td><td>≤1.5</td><td>AI grande, PSAP >50</td></tr><tr><td>D grave sintomática</td><td>≤1.5</td><td>Disnea, intolerancia al esfuerzo</td></tr></table>`),
      s('Estenosis mitral: tratamiento', `
<ul><li><b>Médico</b>: betabloqueador o calcioantagonista no DHP para alargar la diástole y controlar la FC; diuréticos para congestión; evita nitratos y taquicardia.</li>
<li><b>Anticoagulación</b> con <b>warfarina</b> (no ACOD en EM reumática moderada-grave: INVICTUS) si hay FA, embolia previa o trombo en AI.</li>
<li><b>Valvuloplastia mitral percutánea con balón</b> (comisurotomía): de elección en EM grave sintomática con anatomía favorable, sin trombo en AI e IM ≤leve.</li>
<li><b>Cirugía</b> (comisurotomía abierta o cambio valvular) si hay trombo en AI, IM moderada-grave, calcio extenso o valvulopatía mixta.</li>
<li><b>Profilaxis secundaria de fiebre reumática</b> (penicilina benzatínica) en pacientes reumáticos.</li></ul>`),
      s('Insuficiencia mitral: definición y causas', `
<p>Reflujo del VI a la AI en sístole.</p>
<ul><li><b>Primaria</b> (de la válvula): prolapso/degeneración mixomatosa (la más común en países desarrollados), rotura de cuerdas, endocarditis, reumática, rotura de músculo papilar tras IAM.</li><li><b>Secundaria o funcional</b>: la válvula es normal pero el VI dilatado (miocardiopatía, cardiopatía isquémica) separa los músculos papilares.</li></ul>`),
      s('Insuficiencia mitral: fisiopatología y clínica', `
<p><b>Aguda</b>: la AI pequeña no se adapta → presión alta → edema pulmonar súbito y choque; el soplo puede ser corto o suave. <b>Crónica</b>: sobrecarga de volumen → dilatación de AI y VI (compensada, FEVI “normal-alta”) → con el tiempo cae la función (una FEVI ≤60% ya indica daño).</p>
<p><b>Soplo holosistólico</b> soplante en el ápex irradiado a la <b>axila</b>, S1 suave, S3, choque de punta desplazado. Sube con handgrip y cuclillas, baja con Valsalva.</p>
<p><b>Prolapso mitral</b>: degeneración mixomatosa (valva posterior), mujeres delgadas, Marfan y Ehlers-Danlos; <b>clic mesosistólico + soplo telesistólico</b>; de pie o con Valsalva el clic se adelanta, en cuclillas se atrasa. Suele ser benigno.</p>`),
      s('Insuficiencia mitral: diagnóstico y tratamiento', `
<p><b>Eco</b>: mecanismo (primaria vs secundaria), gravedad, FEVI, diámetro telesistólico, PSAP. ECG: P mitral, FA, HVI. Rx: cardiomegalia, AI grande. BNP sube con la gravedad.</p>
<ul><li><b>Aguda</b>: cirugía urgente; puente con <b>nitroprusiato</b> (↓ poscarga), diuréticos, inotrópicos y <b>balón intraaórtico</b>.</li>
<li><b>Crónica primaria grave</b>: cirugía si hay síntomas o, asintomática, con FEVI ≤60% o DTSVI ≥40 mm (también con FA nueva o PSAP >50). Se prefiere <b>reparar</b> sobre reemplazar.</li>
<li><b>Secundaria</b>: tratamiento óptimo de IC (incluida resincronización); si persiste grave y sintomática, reparación percutánea borde a borde (TEER/MitraClip) en pacientes seleccionados.</li>
<li>Vasodilatadores solo si hay HTA; anticoagulación si hay FA.</li></ul>`),
      s('Complicaciones, pronóstico y puntos clave', `
<p>Complicaciones de ambas: FA y embolia (sobre todo EM), hipertensión pulmonar, IC, endocarditis. La EM sin tratar progresa; la valvuloplastia tiene éxito en ~75–80% con buena anatomía.</p>
<p><b>Puntos clave</b>: EM = reumática, S1 fuerte + chasquido + retumbo, FA → warfarina, valvuloplastia con balón · IM = holosistólico a la axila, aguda → nitroprusiato y cirugía, crónica primaria → reparar con síntomas o FEVI ≤60% / DTS ≥40 mm · prolapso = clic que se adelanta de pie.</p>`)
    ] },

    tep: { refs: ['Konstantinides SV, et al. 2019 ESC Guidelines for acute pulmonary embolism. Eur Heart J 2020.', 'Stevens SM, et al. CHEST Guideline for VTE 2021.', GUIA], secs: [
      s('Definición', `
<p>La <b>tromboembolia pulmonar (TEP)</b> es la obstrucción de la arteria pulmonar o sus ramas por un trombo que casi siempre viene de las venas profundas de las piernas (iliofemorales). TVP y TEP son la misma enfermedad: <b>enfermedad tromboembólica venosa (ETV)</b>. Se llama provocada si hubo un factor de riesgo transitorio y no provocada si no.</p>`),
      s('Epidemiología y factores de riesgo', `
<p>Tercera causa de muerte cardiovascular y una de las principales causas prevenibles de muerte hospitalaria.</p>
<p><b>Tríada de Virchow</b>: estasis (inmovilización, el factor clínico más importante; viajes largos, IC), daño endotelial (cirugía, trauma, catéteres) e hipercoagulabilidad.</p>
<ul><li><b>Fuertes</b>: fractura de cadera/pierna, prótesis de cadera o rodilla, cirugía mayor, trauma mayor, lesión medular, ETV previa.</li><li><b>Moderados</b>: cáncer activo y quimioterapia, anticonceptivos/terapia hormonal, embarazo y puerperio, IC, trombofilias (factor V Leiden, déficit de proteína C, S o antitrombina, síndrome antifosfolípido), síndrome nefrótico, catéter venoso central.</li><li><b>Débiles</b>: obesidad, edad, reposo >3 días, várices, viajes largos.</li></ul>`),
      s('Fisiopatología', `
<p>El émbolo obstruye la circulación pulmonar y libera vasoconstrictores (tromboxano, serotonina) → ↑ resistencia vascular pulmonar → <b>sobrecarga de presión del VD</b> → dilatación, insuficiencia tricuspídea, aplanamiento septal que comprime el VI → ↓ gasto. La isquemia del VD (más tensión de pared, menos perfusión coronaria) es la causa de muerte.</p>
<p>En el pulmón: espacio muerto y alteración V/Q → <b>hipoxemia</b> con gradiente A-a aumentado; la taquipnea baja el CO₂ (<b>alcalosis respiratoria</b>). Los émbolos distales pueden causar <b>infarto pulmonar</b> (dolor pleurítico, hemoptisis).</p>`),
      s('Cuadro clínico', `
<ul><li><b>Disnea súbita</b> (el más frecuente), dolor pleurítico, tos, hemoptisis, síncope o hipotensión (TEP grave).</li><li><b>Signos</b>: taquipnea, taquicardia, hipoxemia, P2 fuerte o S2 desdoblado, ingurgitación yugular, signo de Kussmaul; datos de TVP (pierna edematizada y dolorosa, >2 cm más gruesa).</li><li>Puede ser asintomática o simular SCA, neumonía o IC.</li></ul>`),
      s('Diagnóstico', `
<h4>1. ¿Está inestable?</h4>
<p>PAS <90 mmHg >15 min, caída ≥40 mmHg o necesidad de vasopresor (TEP de <b>alto riesgo</b>) → eco a la cabecera: si muestra disfunción del VD, se trata como TEP sin esperar la angio-TC.</p>
<h4>2. Estable: probabilidad clínica</h4>
<p><b>Wells</b> (TVP clínica 3, TEP como diagnóstico más probable 3, FC >100 1.5, inmovilización/cirugía 1.5, ETV previa 1.5, hemoptisis 1, cáncer 1): ≤4 improbable / >4 probable. Si la probabilidad es muy baja y <b>PERC</b> negativo, no se estudia más.</p>
<h4>3. Dímero D</h4>
<p>Solo si la probabilidad es baja o intermedia: negativo descarta (alta sensibilidad, baja especificidad). Usa el corte ajustado a la edad (edad × 10 µg/L en >50 años). Si la probabilidad es alta, <b>no pidas dímero</b>: ve directo a imagen.</p>
<h4>4. Imagen</h4>
<p><b>Angio-TC pulmonar</b>: estudio de elección (defectos de llenado). Gammagrama V/Q si hay ERC, alergia al contraste o embarazo con Rx normal. USG Doppler de piernas: si muestra TVP con síntomas de TEP, confirma.</p>
<h4>Estudios complementarios</h4>
<p>ECG: <b>taquicardia sinusal</b> (lo más frecuente), S1Q3T3, BRD, T invertidas en V1–V4. Rx: normal o Westermark (oligohemia), joroba de Hampton (cuña), derrame. Gasometría: hipoxemia con alcalosis respiratoria. Eco: VD dilatado (VD/VI >1), septo plano, <b>McConnell</b>. Troponina y BNP elevados = daño del VD.</p>`),
      s('Estratificación del riesgo', `
<table class="mini"><tr><th>Riesgo</th><th>Criterios</th><th>Manejo</th></tr>
<tr><td>Alto</td><td>Inestable</td><td>Heparina no fraccionada + trombólisis sistémica</td></tr>
<tr><td>Intermedio-alto</td><td>PESI III–V o sPESI ≥1 + disfunción del VD <b>y</b> troponina alta</td><td>Hospital, anticoagulación, vigilar; trombólisis de rescate si se descompensa</td></tr>
<tr><td>Intermedio-bajo</td><td>PESI III–V o sPESI ≥1 con uno o ninguno de los dos</td><td>Hospital, anticoagulación</td></tr>
<tr><td>Bajo</td><td>PESI I–II / sPESI 0</td><td>Alta temprana o manejo ambulatorio</td></tr></table>`),
      s('Tratamiento', `
<ul><li><b>Anticoagulación empírica</b> ya si la probabilidad es alta o intermedia, mientras confirmas (si no hay contraindicación).</li>
<li><b>Fármacos</b>: en estables, ACOD (apixabán, rivaroxabán; o HBPM seguida de dabigatrán/edoxabán) preferidos sobre warfarina. HBPM en cáncer (o ACOD anti-Xa) y en embarazo (los ACOD y la warfarina están contraindicados en el embarazo). Heparina no fraccionada si se considera trombólisis, ERC grave (TFG <30) o inestable. Warfarina (INR 2–3, con puente de heparina ≥5 días) en síndrome antifosfolípido y prótesis.</li>
<li><b>Trombólisis sistémica</b> (alteplasa) en TEP de alto riesgo. Si está contraindicada (EVC hemorrágico, isquémico <6 meses, tumor del SNC, trauma/cirugía/TCE recientes, sangrado activo): <b>embolectomía quirúrgica</b> o tratamiento dirigido por catéter.</li>
<li><b>Filtro de vena cava</b>: solo si no se puede anticoagular o recurre pese a una anticoagulación adecuada.</li>
<li><b>Soporte</b>: O₂ si SatO₂ <90%; líquidos con cautela (el exceso dilata más el VD); norepinefrina si hay hipotensión.</li></ul>
<h4>Duración</h4>
<p>Mínimo 3 meses. Provocada por factor transitorio mayor → suspender a los 3 meses. No provocada o factor persistente (cáncer, síndrome antifosfolípido) → considerar indefinida.</p>`),
      s('Complicaciones, pronóstico y prevención', `
<p>Complicaciones: recurrencia, choque y muerte súbita, infarto pulmonar, derrame, <b>hipertensión pulmonar tromboembólica crónica</b> (2–4%; sospecha si persiste la disnea a los 3 meses → gammagrama V/Q) y síndrome postrombótico. Sin tratamiento la mortalidad llega a ~30%; con tratamiento, <5% en los estables.</p>
<p><b>Prevención</b> en hospitalizados: movilización temprana y profilaxis farmacológica (HBPM) según el riesgo (Padua en médicos, Caprini en quirúrgicos).</p>
<p><b>Puntos clave</b>: inestable → trombólisis · estable → Wells → dímero D solo si la probabilidad no es alta → angio-TC · PESI + VD + troponina para decidir dónde tratar · ACOD 3 meses mínimo · filtro solo si no se puede anticoagular.</p>`)
    ] },

    hp: { refs: ['Humbert M, et al. 2022 ESC/ERS Guidelines for pulmonary hypertension. Eur Heart J 2022.', GUIA], secs: [
      s('Definición', `
<p><b>Hipertensión pulmonar (HP)</b>: presión arterial pulmonar media (PAPm) <b>>20 mmHg</b> en reposo medida por <b>cateterismo derecho</b> (normal 10–14; antes el corte era ≥25).</p>
<ul><li><b>Precapilar</b> (arterial): PCP ≤15 mmHg y resistencia vascular pulmonar (RVP) >2 UW.</li><li><b>Poscapilar</b> (venosa, por cardiopatía izquierda): PCP >15 mmHg; combinada si además RVP >2.</li></ul>`),
      s('Clasificación y epidemiología', `
<table class="mini"><tr><th>Grupo</th><th>Causa</th><th>Ejemplos</th></tr>
<tr><td>1</td><td>Hipertensión arterial pulmonar (HAP)</td><td>Idiopática (mujeres jóvenes), hereditaria (BMPR2), fármacos (anfetaminas, dasatinib), esclerodermia y otras del tejido conectivo, VIH, hipertensión portal, cardiopatías congénitas con cortocircuito, esquistosomiasis</td></tr>
<tr><td>2</td><td>Cardiopatía izquierda</td><td>IC (FEVI reducida o conservada), valvulopatías mitral y aórtica — <b>la causa más frecuente</b></td></tr>
<tr><td>3</td><td>Enfermedad pulmonar o hipoxia</td><td>EPOC, enfermedad intersticial, apnea del sueño, altura</td></tr>
<tr><td>4</td><td>Obstrucción de arterias pulmonares</td><td>HP tromboembólica crónica (HPTEC)</td></tr>
<tr><td>5</td><td>Mecanismos inciertos o multifactoriales</td><td>Hematológicas (anemia falciforme, mieloproliferativos), sarcoidosis, ERC, metabólicas</td></tr></table>`),
      s('Fisiopatología', `
<p>En la HAP hay <b>disfunción endotelial</b>: ↑ endotelina-1 y tromboxano, ↓ óxido nítrico y prostaciclina → vasoconstricción, proliferación del músculo liso e íntima, trombosis in situ y lesiones plexiformes. La RVP sube y el VD, que tolera mal la presión, se hipertrofia y luego se dilata y falla (<b>cor pulmonale</b>). En el grupo 3 domina la vasoconstricción hipóxica; en el 2, la presión venosa transmitida desde la AI.</p>`),
      s('Cuadro clínico', `
<ul><li>Disnea de esfuerzo progresiva y fatiga (lo principal); síncope y angina de esfuerzo (isquemia del VD; no responde a nitratos); ronquera (Ortner cardiovocal).</li><li>Falla derecha: edema, ascitis, hepatomegalia, ingurgitación yugular, reflujo hepatoyugular.</li><li><b>Exploración</b>: <b>P2 intenso</b>, levantamiento paraesternal, soplo de insuficiencia tricuspídea, S3/S4 derechos.</li></ul>`),
      s('Diagnóstico', `
<ol><li><b>Sospecha</b> clínica → <b>ecocardiograma</b> (estudio inicial): velocidad de regurgitación tricuspídea >3.4 m/s = probabilidad alta (2.9–3.4 intermedia), VD dilatado, septo plano, derrame pericárdico.</li>
<li><b>Busca primero los grupos 2 y 3</b>: eco (cardiopatía izquierda), espirometría, DLCO, gasometría, TC de tórax, polisomnografía.</li>
<li><b>Gammagrama V/Q</b> a todos para descartar HPTEC (si es normal, la descarta).</li>
<li><b>Cateterismo derecho</b>: confirma, clasifica (pre/poscapilar) y en el grupo 1 incluye la <b>prueba de vasorreactividad</b>.</li>
<li>Otros: NT-proBNP (pronóstico), ECG (HVD, eje derecho, P pulmonar), Rx (arterias pulmonares centrales grandes con periferia “podada”), serologías (VIH, ANA, anti-Scl-70), PFH.</li></ol>`),
      s('Tratamiento', `
<h4>Generales</h4>
<p>O₂ si PaO₂ <60 mmHg, diuréticos para la congestión, vacunas, ejercicio supervisado, evitar el embarazo; anticoagulación en HPTEC.</p>
<h4>Grupo 1 (HAP)</h4>
<ul><li><b>Vasorreactividad positiva</b> (PAPm baja ≥10 mmHg hasta ≤40 con gasto igual o mayor; ≈10% de la idiopática): calcioantagonista a dosis altas (nifedipino, diltiazem, amlodipino).</li>
<li><b>No respondedores</b>: terapia inicial combinada <b>antagonista de endotelina</b> (ambrisentán, macitentán, bosentán: hepatotóxico y teratógeno) + <b>inhibidor de PDE-5</b> (sildenafil, tadalafil; nunca con nitratos) o riociguat (estimulador de guanilato ciclasa; no con PDE-5). Alto riesgo: añadir <b>prostaciclina</b> IV (epoprostenol, treprostinil; rubor, dolor mandibular) o selexipag; sotatercept en casos seleccionados. Trasplante pulmonar si falla todo.</li></ul>
<h4>Otros grupos</h4>
<p>Grupo 2: tratar la IC o la valvulopatía (los vasodilatadores pulmonares pueden empeorar). Grupo 3: tratar la neumopatía y O₂. Grupo 4: <b>endarterectomía pulmonar</b> (curativa), angioplastia con balón o riociguat si no es operable, y anticoagulación de por vida. Grupo 5: la causa.</p>`),
      s('Pronóstico y puntos clave', `
<p>La HAP sin tratamiento tiene mala supervivencia (mediana ~3 años en la era previa); el pronóstico depende de la clase funcional de la OMS (I–IV), la caminata de 6 minutos, el NT-proBNP y la función del VD. La causa de muerte suele ser la falla derecha.</p>
<p><b>Puntos clave</b>: PAPm >20 por cateterismo · el grupo más común es el 2 · V/Q a todos para buscar HPTEC · vasorreactividad positiva → calcioantagonista · si no, ARE + PDE-5 · sildenafil nunca con nitratos · HPTEC → endarterectomía.</p>`)
    ] }
  }
};
