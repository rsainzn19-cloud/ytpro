// Capítulos completos (estilo libro) de Endocrinología: DM2, síndrome metabólico y dislipidemia, tumores hipofisarios.
// Integran la Guía Endocrino y los resúmenes 1P/2P de la rotación con las guías vigentes (ADA 2025, ESC/EAS, Endocrine Society).
const s = (h, html) => ({ h, html });
const GUIA = 'Guía Endocrino y resúmenes 1P/2P MI de la rotación (X. Cors, EMIS 5).';

export default {
  libro: {
    dm2: { refs: ['American Diabetes Association. Standards of Care in Diabetes—2025. Diabetes Care 2025.', 'Umpierrez GE, et al. Hyperglycemic crises in adults with diabetes: a consensus report. Diabetes Care 2024.', GUIA], secs: [
      s('Definición y clasificación', `
<p>La <b>diabetes mellitus</b> es un grupo de enfermedades metabólicas con hiperglucemia crónica por defectos en la secreción de insulina, en su acción o en ambas.</p>
<table class="mini"><tr><th></th><th>DM1</th><th>DM2</th></tr>
<tr><td>Mecanismo</td><td>Destrucción autoinmune de células β → déficit absoluto</td><td>Resistencia a la insulina + falla progresiva de la célula β</td></tr>
<tr><td>Frecuencia</td><td>~5–10%</td><td>>90%</td></tr><tr><td>Edad típica</td><td><20 años (picos 4–6 y 10–14)</td><td>>40 años (cada vez más joven)</td></tr>
<tr><td>Hábito</td><td>Delgado, pierde peso</td><td>Sobrepeso u obesidad</td></tr><tr><td>Péptido C</td><td>Bajo o indetectable</td><td>Normal o alto al inicio</td></tr>
<tr><td>Autoanticuerpos</td><td>Anti-GAD, anti-IA2, anti-insulina, anti-ZnT8</td><td>Negativos</td></tr><tr><td>Crisis típica</td><td>Cetoacidosis</td><td>Estado hiperosmolar</td></tr></table>
<p>Otros tipos: <b>LADA</b> (autoinmune del adulto, falla rápida a orales), <b>MODY</b> (monogénica, herencia AD, jóvenes no obesos), gestacional, pancreatogénica (pancreatitis crónica, fibrosis quística) y por fármacos (glucocorticoides, antipsicóticos).</p>`),
      s('Epidemiología', `
<p>En México la prevalencia en adultos ronda el 10–18% (ENSANUT) y es una de las primeras causas de muerte, de ERC terminal, de ceguera y de amputación no traumática. La enfermedad cardiovascular es la principal causa de muerte del diabético.</p>`),
      s('Factores de riesgo y tamizaje', `
<p><b>Factores de riesgo</b>: sobrepeso u obesidad (el principal), familiar de primer grado con DM, etnia de alto riesgo (latinos), sedentarismo, HTA (≥130/80 o en tratamiento), HDL <35 o TG >250, SOP, acantosis nigricans, enfermedad cardiovascular, antecedente de diabetes gestacional, VIH.</p>
<p><b>Tamizaje (ADA)</b>: a todos desde los <b>35 años</b> y a cualquier edad con IMC ≥25 (≥23 en asiáticos) + ≥1 factor de riesgo. Si es normal, repetir cada 3 años; prediabetes, cada año; antecedente de diabetes gestacional, al menos cada 3 años.</p>`),
      s('Fisiopatología', `
<p>La grasa visceral libera ácidos grasos libres y adipocinas inflamatorias (TNF-α, IL-6) → <b>resistencia a la insulina</b> en músculo, hígado y tejido adiposo. Al principio la célula β compensa con hiperinsulinemia; con el tiempo falla (glucolipotoxicidad, depósito de amiloide/amilina) y aparece la hiperglucemia. Contribuyen el “octeto ominoso”: menos efecto incretina, más glucagón, más lipólisis, más reabsorción renal de glucosa (SGLT2) y disfunción hipotalámica.</p>
<p><b>Complicaciones crónicas</b>: glicación no enzimática de proteínas (AGEs), vía de los polioles (sorbitol en nervio y cristalino), estrés oxidativo y proteína cinasa C → daño <b>microvascular</b> (retina, riñón, nervio) y aterosclerosis acelerada <b>macrovascular</b>.</p>`),
      s('Cuadro clínico', `
<ul><li>Muchos son <b>asintomáticos</b> y se detectan por tamizaje.</li><li><b>Poliuria</b> (diuresis osmótica), <b>polidipsia</b>, <b>polifagia</b> y pérdida de peso (catabolismo), visión borrosa (cambios osmóticos del cristalino), fatiga, infecciones recurrentes (candidiasis, IVU), mala cicatrización.</li><li>Signos de resistencia: <b>acantosis nigricans</b>, acrocordones, obesidad central. Otros: necrobiosis lipoídica.</li><li><b>Fenómeno del alba</b>: hiperglucemia matutina por GH y cortisol nocturnos. <b>Somogyi</b>: hiperglucemia matutina de rebote tras hipoglucemia nocturna (mide glucosa a las 3 a.m.).</li></ul>`),
      s('Diagnóstico', `
<p>Cualquiera de estos, confirmado con una segunda prueba (la misma u otra) salvo que haya síntomas:</p>
<table class="mini"><tr><th>Prueba</th><th>Diabetes</th><th>Prediabetes</th></tr>
<tr><td>Glucosa en ayuno (8 h)</td><td>≥126 mg/dL</td><td>100–125</td></tr><tr><td>CTGO 2 h (75 g)</td><td>≥200</td><td>140–199</td></tr>
<tr><td>HbA1c</td><td>≥6.5%</td><td>5.7–6.4%</td></tr><tr><td>Glucosa al azar + síntomas</td><td>≥200 (basta una)</td><td>—</td></tr></table>
<p>La A1c no es confiable en anemia, hemoglobinopatías, embarazo, ERC avanzada, hemodiálisis, transfusión reciente o EPO. En la evaluación inicial pide lípidos, creatinina y TFG, <b>albúmina/creatinina en orina</b>, PFH, TSH si hay sospecha, ECG, fondo de ojo y exploración de pies.</p>`),
      s('Diagnóstico diferencial', `
<p>DM1 o LADA (delgado, cetosis, anticuerpos, péptido C bajo) · MODY (joven, no obeso, varias generaciones afectadas) · diabetes secundaria: Cushing, acromegalia, feocromocitoma, glucagonoma, hemocromatosis, pancreatitis crónica, glucocorticoides, tiazidas, antipsicóticos atípicos, inhibidores de calcineurina.</p>`),
      s('Tratamiento', `
<h4>Metas (individualizar)</h4>
<p>A1c <b><7%</b> (<8% en ancianos frágiles o con expectativa de vida corta) · glucosa preprandial 80–130 · posprandial <180 · PA <130/80 · LDL <70 (o <55 con enfermedad cardiovascular) · no fumar.</p>
<h4>Estilo de vida (siempre)</h4>
<p>Pérdida de peso ≥5–7% (≥10–15% puede remitir la DM2), ≥150 min/semana de ejercicio aeróbico moderado sin más de 2 días seguidos sin actividad + fuerza 2 veces/semana, dieta tipo mediterránea, <2.3 g de sodio, educación en autocuidado.</p>
<h4>Fármacos: elegir por comorbilidad (ADA 2025)</h4>
<ul><li><b>Enfermedad cardiovascular aterosclerótica o alto riesgo</b> → arGLP-1 o iSGLT2 con beneficio probado, independientemente de la A1c.</li><li><b>Insuficiencia cardiaca</b> → iSGLT2. <b>ERC</b> (TFG ≥20 o albuminuria) → iSGLT2; arGLP-1 si no alcanza la meta; finerenona si persiste la albuminuria.</li><li><b>Obesidad</b> → semaglutida o tirzepatida.</li><li>Sin esas condiciones → <b>metformina</b> (si no hay contraindicación), y agregar según costo, hipoglucemia y peso.</li></ul>
<table class="mini"><tr><th>Clase</th><th>Ejemplo</th><th>Lo clave</th></tr>
<tr><td>Biguanida</td><td>Metformina</td><td>↓ gluconeogénesis; no da hipoglucemia; GI, déficit de B12, acidosis láctica (no con TFG <30; pausar con contraste si TFG <45 o IC descompensada)</td></tr>
<tr><td>iSGLT2</td><td>Empagliflozina, dapagliflozina</td><td>Glucosuria; ↓ peso y PA; protegen corazón y riñón; candidiasis genital, depleción de volumen, cetoacidosis euglucémica</td></tr>
<tr><td>arGLP-1</td><td>Semaglutida, liraglutida, dulaglutida</td><td>↑ insulina dependiente de glucosa, ↓ glucagón, saciedad; ↓ peso y eventos CV; náusea; no con antecedente de carcinoma medular o MEN2</td></tr>
<tr><td>Agonista dual GIP/GLP-1</td><td>Tirzepatida</td><td>La mayor baja de A1c y peso</td></tr>
<tr><td>iDPP-4</td><td>Sitagliptina, linagliptina</td><td>Neutros en peso; bien tolerados; linagliptina sin ajuste renal</td></tr>
<tr><td>Sulfonilureas</td><td>Glibenclamida, glimepirida</td><td>Baratas; <b>hipoglucemia</b> y aumento de peso (evitar glibenclamida en ancianos y ERC)</td></tr>
<tr><td>Tiazolidinedionas</td><td>Pioglitazona</td><td>Sensibilizador; edema, IC, fracturas; útil en esteatohepatitis</td></tr>
<tr><td>Inhibidor de α-glucosidasa</td><td>Acarbosa</td><td>Posprandial; flatulencia</td></tr></table>
<h4>Insulina</h4>
<p><b>Cuándo</b>: A1c >10%, glucosa ≥300, síntomas o catabolismo (pérdida de peso, cetosis), embarazo, hospitalización. <b>Basal</b> (glargina, degludec, detemir o NPH nocturna) 10 U o 0.1–0.2 U/kg/día y titular 2 U cada 3 días hasta glucosa en ayuno 80–130; si la A1c sigue alta con ayuno en meta, añadir <b>prandial</b> (4 U o 10% de la basal antes de la comida principal) o un arGLP-1. Dosis total habitual 0.4–1 U/kg/día (50% basal, 50% prandial). Tipos: ultrarrápidas (lispro, aspart, glulisina: 15 min antes, 3–4 h) · regular (30 min antes, 4–6 h; IV en la CAD) · NPH (intermedia, 10–16 h, 2 veces al día) · basales (~24 h; degludec >40 h).</p>
<h4>Protección de órganos</h4>
<p>Estatina en 40–75 años (alta intensidad si hay ECV o riesgo alto), IECA/ARA-II si hay albuminuria o HTA, aspirina en prevención secundaria, vacunas (influenza, neumococo, hepatitis B, COVID).</p>`),
      s('Complicaciones agudas: CAD y EHH', `
<table class="mini"><tr><th></th><th>Cetoacidosis (CAD)</th><th>Estado hiperosmolar (EHH)</th></tr>
<tr><td>Típico de</td><td>DM1 (también DM2 o con iSGLT2)</td><td>DM2, ancianos</td></tr><tr><td>Inicio</td><td>Horas (<24 h)</td><td>Días</td></tr>
<tr><td>Glucosa</td><td>>250 (o normal en la euglucémica)</td><td>>600</td></tr><tr><td>pH / HCO₃</td><td><7.30 / <18</td><td>>7.30 / >15</td></tr>
<tr><td>Cetonas</td><td>Positivas (β-hidroxibutirato)</td><td>Mínimas</td></tr><tr><td>Osmolaridad</td><td>Variable</td><td>>320</td></tr>
<tr><td>Clínica</td><td>Kussmaul, aliento afrutado, dolor abdominal, vómito</td><td>Deshidratación grave, alteración mental, crisis convulsivas</td></tr></table>
<p><b>Precipitantes</b>: infección (la más común), omisión de insulina, IAM, EVC, pancreatitis, fármacos (glucocorticoides, iSGLT2), alcohol.</p>
<p><b>Tratamiento</b>: (1) <b>Líquidos</b>: solución salina 0.9% 1–1.5 L la primera hora, luego según sodio corregido (Na + 1.6 por cada 100 mg/dL de glucosa >100). (2) <b>Potasio</b>: el K corporal total está bajo aunque el sérico salga normal o alto; si K <3.3 repón antes de la insulina; si 3.3–5.3, agrega 20–30 mEq por litro. (3) <b>Insulina regular IV</b> 0.1 U/kg/h (o 0.14 sin bolo); agrega <b>dextrosa al 5%</b> cuando la glucosa baje de 250 (CAD) o 300 (EHH) y sigue la insulina hasta cerrar el anión gap. (4) Bicarbonato solo con pH <7.0. (5) Trata la causa.</p>
<p><b>Resolución de la CAD</b>: glucosa <200 + 2 de: HCO₃ ≥15, pH ≥7.30, anión gap ≤12. Del EHH: osmolaridad normal y estado mental normal. Pasa a insulina SC y solápala 1–2 h con la IV. Complicaciones del tratamiento: hipoglucemia, hipokalemia y edema cerebral (sobre todo en niños, por bajar la osmolaridad muy rápido).</p>
<p><b>Hipoglucemia</b> (<70 mg/dL; grave si requiere ayuda): regla 15-15 (15 g de carbohidrato y repetir a los 15 min); inconsciente → glucagón o dextrosa IV.</p>`),
      s('Complicaciones crónicas y tamizaje', `
<table class="mini"><tr><th>Complicación</th><th>Tamizaje</th><th>Manejo clave</th></tr>
<tr><td>Nefropatía (Kimmelstiel-Wilson)</td><td>Albúmina/creatinina y TFG anual (desde el diagnóstico en DM2; a los 5 años en DM1)</td><td>IECA/ARA-II si hay albuminuria aunque no haya HTA, iSGLT2, finerenona, PA <130/80</td></tr>
<tr><td>Retinopatía</td><td>Fondo de ojo al diagnóstico (DM2) y luego anual o cada 2 años si es normal</td><td>Control glucémico y de PA; fotocoagulación o anti-VEGF en proliferativa o edema macular</td></tr>
<tr><td>Neuropatía periférica (guante y calcetín)</td><td>Monofilamento, vibración (diapasón 128 Hz), reflejos, anual; pies en cada visita</td><td>Pregabalina, duloxetina, tricíclicos; cuidado de pies</td></tr>
<tr><td>Neuropatía autonómica</td><td>Clínica</td><td>Gastroparesia, hipotensión ortostática, taquicardia en reposo, disfunción eréctil, vejiga neurogénica</td></tr>
<tr><td>Mononeuropatía del III par</td><td>—</td><td>Ptosis, ojo “abajo y afuera” con pupila respetada</td></tr>
<tr><td>Macrovascular</td><td>Riesgo CV, lípidos</td><td>Estatina, control de PA, aspirina en prevención secundaria, arGLP-1/iSGLT2</td></tr>
<tr><td>Pie diabético</td><td>Revisión en cada visita</td><td>Neuropatía + isquemia + infección; descarga, desbridamiento, antibiótico</td></tr></table>`),
      s('Pronóstico y puntos clave', `
<p>El control intensivo de la glucosa reduce las complicaciones <b>microvasculares</b>; el control de PA, lípidos y tabaco, y los arGLP-1/iSGLT2, reducen las <b>macrovasculares</b>. La primera causa de muerte es cardiovascular.</p>
<p><b>Puntos clave</b>: diagnóstico con 2 pruebas (ayuno ≥126, A1c ≥6.5, CTGO ≥200) · ECV o IC o ERC → iSGLT2/arGLP-1 de entrada · metformina si no hay esas comorbilidades · insulina con A1c >10% o glucosa ≥300 · CAD: líquidos, potasio, insulina, dextrosa al bajar de 250.</p>`)
    ] },

    smdl: { refs: ['Mach F, et al. 2019 ESC/EAS Guidelines for the management of dyslipidaemias (y actualización 2025). Eur Heart J.', 'Grundy SM, et al. 2018 AHA/ACC Guideline on the Management of Blood Cholesterol. Circulation 2019.', 'Alberti KG, et al. Harmonizing the metabolic syndrome. Circulation 2009.', GUIA], secs: [
      s('Definición', `
<p><b>Síndrome metabólico</b>: conjunto de factores que aumentan el riesgo de DM2 y de enfermedad cardiovascular. Se diagnostica con <b>≥3 de 5</b> (criterios armonizados):</p>
<ul><li>Cintura ≥102 cm en hombres y ≥88 cm en mujeres (≥90/80 en latinoamericanos según IDF).</li><li>Triglicéridos ≥150 mg/dL (o tratamiento).</li><li>HDL <40 en hombres y <50 en mujeres (o tratamiento).</li><li>PA ≥130/85 (o tratamiento).</li><li>Glucosa en ayuno ≥100 (o tratamiento).</li></ul>
<p><b>Dislipidemia</b>: alteración de los lípidos — colesterol total >200, LDL >130, TG >150 o HDL <40 mg/dL.</p>`),
      s('Epidemiología', `
<p>En México más de 40% de los adultos cumple criterios de síndrome metabólico, y la dislipidemia más común es la combinación de <b>HDL bajo con TG altos</b> (dislipidemia aterogénica asociada a resistencia a la insulina).</p>`),
      s('Etiología y clasificación', `
<p><b>Secundarias</b> (búscalas siempre): obesidad, DM, hipotiroidismo, síndrome nefrótico, colestasis, ERC, alcohol, fármacos (glucocorticoides, tiazidas, betabloqueadores, retinoides, antirretrovirales, estrógenos).</p>
<table class="mini"><tr><th>Fredrickson</th><th>Alteración</th><th>Defecto</th><th>Clínica</th></tr>
<tr><td>I</td><td>↑ quilomicrones</td><td>Déficit de LPL o apo C-II</td><td>Xantomas eruptivos, lipemia retinal, pancreatitis</td></tr>
<tr><td>IIa</td><td>↑ LDL</td><td>Receptor de LDL, apo B o PCSK9 (hipercolesterolemia familiar)</td><td>Xantomas tendinosos, xantelasma, arco corneal, IAM prematuro</td></tr>
<tr><td>IIb</td><td>↑ LDL y VLDL</td><td>Hiperlipidemia familiar combinada</td><td>Cardiopatía prematura</td></tr>
<tr><td>III</td><td>↑ IDL/remanentes</td><td>Apo E2/E2 (disbetalipoproteinemia)</td><td>Xantomas palmares y tuberoeruptivos</td></tr>
<tr><td>IV</td><td>↑ VLDL</td><td>Hipertrigliceridemia familiar</td><td>Pancreatitis si TG muy altos</td></tr></table>`),
      s('Fisiopatología', `
<p>La <b>obesidad visceral</b> y la resistencia a la insulina aumentan la llegada de ácidos grasos libres al hígado → más síntesis de VLDL (TG altos) → intercambio por CETP que vuelve a las LDL <b>pequeñas y densas</b> (más aterogénicas) y acelera la eliminación de HDL. El LDL entra a la íntima, se oxida y lo captan los macrófagos (células espumosas): es el combustible de la placa. La relación es causal: <b>entre más bajo y más tiempo esté bajo el LDL, menos eventos</b>.</p>`),
      s('Cuadro clínico', `
<p>Casi siempre asintomática hasta que aparece la enfermedad aterosclerótica (IAM, EVC, enfermedad arterial periférica). Pistas: <b>xantomas</b> tendinosos (Aquiles, extensores de manos: LDL muy alto), eruptivos (glúteos, extensores: TG >1000), tuberosos (codos, rodillas), palmares (tipo III); <b>xantelasmas</b>; <b>arco corneal</b> antes de los 45; lipemia retinal; pancreatitis aguda (TG ≥1000); esteatosis hepática.</p>`),
      s('Diagnóstico', `
<ul><li><b>Perfil de lípidos</b> (no necesita ayuno salvo TG >400): CT, LDL, HDL, TG, no-HDL (CT − HDL). Considera apoB y Lp(a) una vez en la vida.</li><li><b>Tamizaje</b>: adultos desde los 20 años cada 4–6 años; más seguido con factores de riesgo.</li><li>Antes de tratar: glucosa, TSH, PFH, creatinina y EGO (causas secundarias; el hipotiroidismo predispone a miopatía por estatina).</li><li><b>LDL ≥190 mg/dL</b> → piensa en hipercolesterolemia familiar (criterios de la Red de Clínicas Lipídicas Holandesas) y tamiza a la familia.</li><li><b>Estimar riesgo</b> a 10 años (SCORE2 en Europa, PCE/PREVENT en EUA) para decidir intensidad y meta.</li></ul>`),
      s('Tratamiento', `
<h4>Estilo de vida (base de todo)</h4>
<p>Pérdida de peso (5–10%), dieta mediterránea con menos grasa saturada y trans, más fibra, ≥150 min/semana de ejercicio, dejar de fumar, reducir alcohol (sobre todo con TG altos) y azúcares simples.</p>
<h4>Metas de LDL (ESC/EAS)</h4>
<table class="mini"><tr><th>Riesgo</th><th>Ejemplos</th><th>Meta LDL</th></tr>
<tr><td>Muy alto</td><td>ECV establecida, DM con daño a órgano, ERC grave</td><td><55 y ↓≥50% (<40 si recurre en 2 años)</td></tr>
<tr><td>Alto</td><td>DM sin daño a órgano, ERC moderada, LDL ≥190</td><td><70 y ↓≥50%</td></tr>
<tr><td>Moderado</td><td>Jóvenes con DM <10 años, riesgo moderado</td><td><100</td></tr><tr><td>Bajo</td><td>—</td><td><116</td></tr></table>
<h4>Fármacos</h4>
<ul><li><b>Estatinas</b> (inhiben HMG-CoA reductasa → más receptores de LDL): primera línea. Alta intensidad (↓≥50%): atorvastatina 40–80, rosuvastatina 20–40. Moderada (30–49%): atorvastatina 10–20, rosuvastatina 5–10, simvastatina 20–40. Efectos: mialgias (CK si hay síntomas), ↑ transaminasas, rabdomiólisis (más con fibratos — sobre todo gemfibrozilo —, macrólidos, azoles), discreto aumento de riesgo de DM. Contraindicadas en embarazo.</li>
<li><b>Ezetimiba</b> (inhibe absorción intestinal de colesterol, ↓ ~20%): segundo paso.</li><li><b>iPCSK9</b> (evolocumab, alirocumab; inclisirán) ↓ ~60%: tercer paso en riesgo muy alto o hipercolesterolemia familiar.</li><li><b>Ácido bempedoico</b>: intolerancia a estatinas. Secuestradores de ácidos biliares: pueden subir los TG.</li></ul>
<h4>Hipertrigliceridemia</h4>
<p>TG 150–499: estilo de vida y estatina según el riesgo; icosapento de etilo en alto riesgo. <b>TG ≥500 (y sobre todo ≥1000)</b>: riesgo de pancreatitis → dieta muy baja en grasa, sin alcohol, <b>fibrato</b> (fenofibrato) ± omega-3; en pancreatitis por TG, insulina IV o plasmaféresis.</p>
<h4>Síndrome metabólico</h4>
<p>Tratar cada componente: peso (arGLP-1 o cirugía bariátrica si IMC ≥35–40), PA (IECA/ARA-II), glucosa (metformina en prediabetes de alto riesgo), lípidos (estatina).</p>`),
      s('Complicaciones, pronóstico y puntos clave', `
<p>El síndrome metabólico duplica el riesgo cardiovascular y multiplica ~5 veces el de DM2; se asocia a esteatosis hepática metabólica (MASLD), SOP, apnea del sueño y gota. Las estatinas reducen ~20–25% los eventos por cada 39 mg/dL que baja el LDL.</p>
<p><b>Puntos clave</b>: ≥3 de 5 criterios · busca causas secundarias · estatina de alta intensidad en ECV, DM de alto riesgo o LDL ≥190 · escalera: estatina → ezetimiba → iPCSK9 · TG ≥500 → fibrato para prevenir pancreatitis · no combinar estatina con gemfibrozilo.</p>`)
    ] },

    hipofisis: { refs: ['Melmed S, et al. Endocrine Society Clinical Practice Guidelines (prolactinoma, acromegalia, Cushing, hipopituitarismo).', 'Petersenn S, et al. Pituitary Society consensus on prolactinomas. Nat Rev Endocrinol 2023.', GUIA], secs: [
      s('Bases: anatomía y fisiología', `
<p>La <b>adenohipófisis</b> produce GH (somatotropas, ~50%), PRL (lactotropas), ACTH, TSH, LH y FSH; la <b>neurohipófisis</b> libera ADH (vasopresina) y oxitocina sintetizadas en el hipotálamo. Todas se regulan por el hipotálamo y por retroalimentación negativa, salvo la <b>prolactina</b>, que está <b>inhibida tónicamente por la dopamina</b> (y estimulada por TRH): por eso, si se comprime el tallo, la prolactina sube.</p>`),
      s('Definición y clasificación de los adenomas', `
<ul><li><b>Microadenoma</b> <10 mm · <b>macroadenoma</b> ≥10 mm.</li><li><b>Funcionantes</b>: prolactinoma (el más común, ~40–50%), somatotropo (acromegalia), corticotropo (enfermedad de Cushing), tirotropo (raro).</li><li><b>No funcionantes</b> (~30%): casi siempre gonadotropos; se manifiestan por efecto de masa.</li><li>~5% son genéticos: <b>MEN1</b> (hipófisis, paratiroides, páncreas), complejo de Carney. En niños, piensa en <b>craneofaringioma</b> (calcificado, quístico).</li></ul>`),
      s('Cuadro clínico general', `
<ul><li><b>Efecto de masa</b> (macroadenomas): cefalea, <b>hemianopsia bitemporal</b> (compresión del quiasma), parálisis de pares III, IV, VI (seno cavernoso), hipopituitarismo, hiperprolactinemia por efecto de tallo.</li><li><b>Hipersecreción</b>: el síndrome de cada hormona.</li><li><b>Hipopituitarismo</b>: aparece con destrucción ≥75%; orden de pérdida típico <b>GH → LH/FSH → TSH → ACTH</b> (→ PRL). En adultos el primer síntoma suele ser hipogonadismo; en niños, talla baja.</li><li><b>Apoplejía hipofisaria</b>: hemorragia o infarto del adenoma → cefalea súbita “en trueno”, alteración visual, oftalmoplejía y crisis suprarrenal → hidrocortisona IV urgente y valorar descompresión. El síndrome de Sheehan es el infarto hipofisario por hemorragia posparto (no lacta, amenorrea).</li></ul>`),
      s('Prolactinoma e hiperprolactinemia', `
<p><b>Causas de prolactina alta</b>: embarazo (descártalo siempre), lactancia, estrés, fármacos antidopaminérgicos (metoclopramida, haloperidol, risperidona — puede dar >200 —, antidepresivos, verapamilo, metildopa), <b>hipotiroidismo primario</b> (TRH alta), ERC, cirrosis, efecto de tallo y prolactinoma.</p>
<p><b>Clínica</b>: la prolactina inhibe la GnRH → hipogonadismo hipogonadotrópico. <b>Mujeres</b>: amenorrea, galactorrea, infertilidad, osteoporosis (suelen ser microadenomas). <b>Hombres</b>: disminución de la libido, disfunción eréctil, ginecomastia; consultan tarde, con macroadenomas y síntomas visuales.</p>
<p><b>Diagnóstico</b>: prolactina basal (>200 ng/mL casi siempre prolactinoma; <100 sugiere fármacos u otras causas) + prueba de embarazo, TSH y creatinina + <b>RM con gadolinio</b>. Macroadenoma con prolactina apenas alta: efecto de tallo o “efecto gancho” (pide dilución). La macroprolactina da valores altos sin síntomas.</p>
<p><b>Tratamiento</b>: <b>agonistas dopaminérgicos</b> — <b>cabergolina</b> de elección (mejor tolerada y más eficaz; eco si dosis altas por valvulopatía), bromocriptina si busca embarazo — aun en macroadenomas con afección visual. Cirugía transesfenoidal si hay intolerancia o resistencia; radioterapia si persiste.</p>`),
      s('Acromegalia', `
<p><b>Exceso de GH</b>: gigantismo en niños (antes del cierre epifisario), acromegalia en adultos.</p>
<p><b>Clínica</b>: crecimiento acral (anillos, zapatos y sombreros que ya no quedan), rasgos toscos, prognatismo, frente prominente, macroglosia, separación dental, voz grave, sudoración, túnel del carpo, artralgias, apnea del sueño, HTA, intolerancia a la glucosa o DM, <b>miocardiopatía</b> (la principal causa de muerte), pólipos de colon (colonoscopía al diagnóstico).</p>
<p><b>Diagnóstico</b>: <b>IGF-1</b> elevado para la edad (tamizaje); confirma con <b>CTGO</b>: la GH no se suprime (<1 ng/mL) tras 75 g de glucosa; luego RM. La GH aislada no sirve (pulsátil).</p>
<p><b>Tratamiento</b>: <b>cirugía transesfenoidal</b> de primera línea; si persiste, análogos de somatostatina (octreotida, lanreotida), pegvisomant (antagonista del receptor de GH, normaliza IGF-1), cabergolina en elevaciones leves, radioterapia.</p>`),
      s('Enfermedad de Cushing', `
<p><b>Síndrome de Cushing</b> = exceso de cortisol de cualquier causa (la más común: glucocorticoides exógenos). <b>Enfermedad de Cushing</b> = adenoma hipofisario productor de ACTH (~70% de los endógenos); otras: adenoma suprarrenal, ACTH ectópica (carcinoma pulmonar de células pequeñas: hipokalemia marcada e hiperpigmentación).</p>
<p><b>Clínica</b>: obesidad central, cara de luna llena, giba dorsal, <b>estrías violáceas >1 cm</b>, piel delgada y equimosis fáciles, debilidad muscular proximal, HTA, DM, osteoporosis, hirsutismo, alteraciones menstruales, depresión, infecciones, alcalosis hipokalémica.</p>
<p><b>Diagnóstico</b>: (1) descartar exógeno; (2) <b>2 pruebas de tamizaje</b>: cortisol libre urinario 24 h, cortisol salival nocturno, supresión con 1 mg de dexametasona (cortisol matutino >1.8 µg/dL = no suprime); (3) <b>ACTH</b>: baja (<5–10 pg/mL) → TC de suprarrenales; normal o alta → RM de hipófisis; si no es concluyente → <b>cateterismo de senos petrosos inferiores</b> (gradiente central = hipófisis; sin gradiente = ectópica). La supresión con dosis alta (8 mg) suprime en hipófisis y no en ectópica.</p>
<p><b>Tratamiento</b>: cirugía transesfenoidal; si falla, fármacos (ketoconazol, metirapona, osilodrostat, pasireotida), radioterapia o suprarrenalectomía bilateral (riesgo de <b>síndrome de Nelson</b>: crecimiento del adenoma con hiperpigmentación). Después de la cirugía hay insuficiencia suprarrenal transitoria: hidrocortisona.</p>`),
      s('Neurohipófisis: deficiencia de AVP y SIADH', `
<p><b>Deficiencia de arginina vasopresina</b> (antes diabetes insípida central: tumores, cirugía, TCE, idiopática) y <b>resistencia a la AVP</b> (antes nefrogénica: litio, hipercalcemia, hipokalemia): poliuria >3 L/día con orina diluida (<300 mOsm/kg) y sodio normal-alto. Diagnóstico: <b>privación de agua</b> y luego <b>desmopresina</b> (la osmolaridad urinaria sube >50% en la central, no en la nefrogénica); copeptina. Tratamiento: desmopresina (central); en la nefrogénica, tiazida, dieta baja en sal y amilorida si es por litio. La polidipsia primaria concentra la orina con la privación.</p>
<p><b>SIADH</b>: hiponatremia hipotónica <b>euvolémica</b> con orina inapropiadamente concentrada (>100 mOsm/kg) y Na urinario >30, con función tiroidea y suprarrenal normales. Causas: neumonía y otras pulmonares, EVC/TCE, carcinoma de células pequeñas, fármacos (ISRS, carbamazepina, ciclofosfamida), dolor y náusea posoperatorios. Tratamiento: restricción de líquidos, urea oral o tolvaptán; salina hipertónica si hay síntomas graves. No corregir más de 8–10 mEq/L en 24 h (mielinólisis).</p>
<p>Tras la cirugía hipofisaria puede aparecer una <b>respuesta trifásica</b>: deficiencia de AVP (días 1–2) → SIADH (días 5–10) → deficiencia permanente.</p>`),
      s('Hipopituitarismo: reconocer y reponer', `
<p><b>Causas</b>: macroadenoma no funcionante (la más común), cirugía o radioterapia, apoplejía, Sheehan, TCE, infiltrativas (sarcoidosis, hemocromatosis, hipofisitis), silla turca vacía.</p>
<p><b>Diagnóstico</b>: hormonas periféricas bajas con tróficas bajas o “inapropiadamente normales” (cortisol 8 a.m., ACTH, T4 libre con TSH, testosterona/estradiol con LH/FSH, IGF-1); pruebas de estímulo si hay duda.</p>
<p><b>Reposición</b>: <b>primero el cortisol</b> (hidrocortisona), luego la levotiroxina (si das tiroxina primero puedes precipitar una crisis suprarrenal); guiar la levotiroxina con T4 libre (la TSH no sirve); hormonas sexuales; GH si hay déficit; desmopresina si hay deficiencia de AVP. Educación en dosis de estrés y tarjeta de alerta.</p>`),
      s('Tratamiento general y puntos clave', `
<p>Microadenoma no funcionante asintomático: vigilancia con RM y perfil hormonal. Macroadenoma con efecto de masa o hipersecreción (salvo prolactinoma): <b>cirugía transesfenoidal</b> (complicaciones: deficiencia de AVP, SIADH, hipopituitarismo, fístula de LCR). Incidentaloma: siempre evaluar hipersecreción y campos visuales si mide ≥10 mm.</p>
<p><b>Puntos clave</b>: prolactinoma = cabergolina, aun macroadenoma con defecto visual · acromegalia = IGF-1 y CTGO, cirugía · Cushing = 2 tamizajes → ACTH → RM o TC → senos petrosos · hipopituitarismo = cortisol antes que tiroxina · apoplejía = hidrocortisona urgente.</p>`)
    ] }
  }
};
