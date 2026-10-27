// Capítulos completos (estilo libro) de Nefrología. Integran la Guía Nefro y el resumen 1P de la rotación
// con las guías vigentes (KDIGO 2012/2021/2024, ESC 2024, ACC/AHA 2017).
const s = (h, html) => ({ h, html });
const GUIA = 'Guía Nefro y resumen 1P MI de la rotación (X. Cors, EMIS 5).';

export default {
  libro: {
    lra: { refs: ['KDIGO Clinical Practice Guideline for Acute Kidney Injury. Kidney Int Suppl 2012.', 'Kellum JA, et al. Acute kidney injury. Nat Rev Dis Primers 2021.', GUIA], secs: [
      s('Definición y estadios', `
<p><b>Lesión renal aguda (LRA)</b>: caída abrupta de la función renal (horas a días) con retención de azoados y alteración de líquidos, electrolitos y ácido-base. <b>KDIGO</b>: creatinina ↑ ≥0.3 mg/dL en 48 h, o ≥1.5 veces la basal en 7 días, o diuresis <0.5 mL/kg/h por 6 h.</p>
<table class="mini"><tr><th>Estadio</th><th>Creatinina</th><th>Diuresis</th></tr>
<tr><td>1</td><td>1.5–1.9 × basal o ↑ ≥0.3</td><td><0.5 mL/kg/h 6–12 h</td></tr><tr><td>2</td><td>2–2.9 × basal</td><td><0.5 mL/kg/h ≥12 h</td></tr>
<tr><td>3</td><td>≥3 × basal, ≥4 mg/dL o inicio de diálisis</td><td><0.3 mL/kg/h ≥24 h o anuria ≥12 h</td></tr></table>`),
      s('Epidemiología', `
<p>Ocurre en 10–20% de los hospitalizados y hasta en la mitad de los pacientes en UCI. Aumenta la mortalidad, la estancia y el riesgo de ERC futura. La <b>prerrenal</b> es la causa más común en la comunidad y la <b>necrosis tubular aguda (NTA)</b> la más común en el hospital.</p>`),
      s('Etiología', `
<table class="mini"><tr><th>Tipo</th><th>Causas</th></tr>
<tr><td><b>Prerrenal</b> (~60%)</td><td>Hipovolemia (vómito, diarrea, hemorragia, diuréticos, quemaduras), bajo gasto (IC), vasodilatación (sepsis, cirrosis → síndrome hepatorrenal), fármacos hemodinámicos: <b>AINE</b> (contraen la aferente), <b>IECA/ARA-II</b> (dilatan la eferente), inhibidores de calcineurina, contraste</td></tr>
<tr><td><b>Intrínseca</b></td><td><b>NTA</b> isquémica (prerrenal prolongada, choque) o tóxica (aminoglucósidos, anfotericina, cisplatino, contraste, <b>mioglobina</b> en rabdomiólisis, hemoglobina, cadenas ligeras) · <b>nefritis intersticial aguda</b> (β-lactámicos, sulfas, IBP, AINE, rifampicina; infecciones) · <b>glomerulonefritis</b> rápidamente progresiva · vascular (microangiopatía trombótica, ateroembolia por colesterol, HTA maligna, vasculitis)</td></tr>
<tr><td><b>Posrenal</b> (~5–10%)</td><td>Obstrucción bilateral (o de riñón único): hiperplasia o cáncer de próstata, vejiga neurogénica, litiasis, tumores pélvicos, sonda tapada</td></tr></table>`),
      s('Fisiopatología', `
<ul><li><b>Prerrenal</b>: baja la perfusión → se activan SRAA, simpático y ADH → el túbulo (sano) reabsorbe ávidamente Na, agua y urea → orina concentrada con <b>Na bajo</b> y BUN/Cr >20. Es reversible si se corrige a tiempo.</li><li><b>NTA</b>: isquemia o tóxicos dañan el túbulo (segmento S3 del proximal, asa ascendente gruesa) → las células se desprenden y forman <b>cilindros</b> que obstruyen; la Na/K-ATPasa pierde su polaridad → no reabsorbe Na → <b>FeNa alta</b>, orina isostenúrica. Fases: inicio → oligúrica (1–3 semanas: sobrecarga, hiperkalemia, acidosis, uremia) → poliúrica (pérdida de electrolitos) → recuperación.</li><li><b>Posrenal</b>: la presión retrógrada reduce la filtración y comprime los vasos.</li></ul>`),
      s('Cuadro clínico', `
<p>A menudo asintomática (solo sube la creatinina). Oliguria o anuria (la anuria total sugiere obstrucción, necrosis cortical u oclusión vascular), datos de hipovolemia (hipotensión, taquicardia, mucosas secas) o de sobrecarga (edema, estertores, HTA), uremia (náusea, anorexia, encefalopatía, asterixis, <b>frote pericárdico</b>, sangrado), globo vesical o próstata grande (posrenal), rash, fiebre y eosinofilia (nefritis intersticial), livedo y dedos azules tras cateterismo (ateroembolia), orina oscura con CK alta (rabdomiólisis).</p>`),
      s('Diagnóstico', `
<ol><li><b>Historia</b>: fármacos y contraste en las 24–72 h previas, pérdidas, hipotensión, infección, trauma o ejercicio, síntomas urinarios.</li><li><b>Volumen</b>: exploración, ortostatismo.</li><li><b>Ultrasonido renal</b>: hidronefrosis (posrenal); tamaño (pequeños = ERC).</li><li><b>Examen general de orina y sedimento</b> (el paso más útil) e índices urinarios.</li><li>Química, electrolitos, gasometría, CK (rabdomiólisis), BH y frotis (esquistocitos), complemento y anticuerpos si hay sedimento nefrítico; biopsia si no hay causa clara.</li></ol>
<table class="mini"><tr><th></th><th>Prerrenal</th><th>NTA</th></tr>
<tr><td>BUN/Cr</td><td>>20</td><td><15</td></tr><tr><td>Na urinario</td><td><20</td><td>>40</td></tr>
<tr><td>FeNa</td><td><b><1%</b></td><td><b>>2%</b></td></tr><tr><td>FeUrea (útil con diuréticos)</td><td><35%</td><td>>50%</td></tr>
<tr><td>Osmolaridad urinaria</td><td>>500</td><td><350</td></tr><tr><td>Sedimento</td><td>Cilindros hialinos (anodino)</td><td><b>Cilindros granulosos “marrón lodoso”</b>, células tubulares</td></tr></table>
<p><b>Sedimento</b>: cilindros eritrocitarios y eritrocitos dismórficos → glomerulonefritis · cilindros leucocitarios, piuria estéril y eosinofiluria → nefritis intersticial · eritrocitos isomórficos y cristales → posrenal · tira reactiva con “sangre” positiva sin eritrocitos → mioglobina/hemoglobina. FeNa = (Na orina × Cr plasma)/(Na plasma × Cr orina) × 100. Ojo: la FeNa puede ser baja en NTA por contraste o mioglobina y en glomerulonefritis.</p>`),
      s('Diagnóstico diferencial', `
<p><b>ERC</b> previa o reagudizada (riñones pequeños, anemia, hiperparatiroidismo), elevación de creatinina sin LRA (trimetoprim y cimetidina bloquean su secreción; rabdomiólisis; ingesta de carne) y elevación del BUN sin LRA (sangrado digestivo alto, esteroides, catabolismo).</p>`),
      s('Tratamiento', `
<ul><li><b>Corrige la causa</b> y optimiza la hemodinamia (PAM ≥65).</li><li><b>Prerrenal</b>: cristaloides balanceados (Ringer) o salina; evita sobrecargar.</li><li><b>Suspende nefrotóxicos</b> (AINE, aminoglucósidos, contraste) y <b>pausa IECA/ARA-II y diuréticos</b>; ajusta la dosis de fármacos a la función renal; evita la metformina.</li><li><b>Nefritis intersticial</b>: retira el fármaco; esteroides si no mejora en pocos días.</li><li><b>Posrenal</b>: sonda Foley, nefrostomía o catéter doble J; vigila la poliuria posobstructiva.</li><li><b>Rabdomiólisis</b>: líquidos abundantes (diuresis 200–300 mL/h). <b>Síndrome hepatorrenal</b>: albúmina + terlipresina (o norepinefrina).</li><li>Diuréticos de asa <b>solo para la sobrecarga</b> (no aceleran la recuperación).</li><li><b>Diálisis urgente (AEIOU)</b> cuando no responde al manejo médico: <b>A</b>cidosis grave (pH <7.1), <b>E</b>lectrolitos (hiperkalemia refractaria), <b>I</b>ntoxicaciones dializables (metanol, etilenglicol, litio, salicilatos, metformina), <b>O</b>verload (sobrecarga con edema pulmonar), <b>U</b>remia (pericarditis, encefalopatía, sangrado).</li></ul>
<h4>Hiperkalemia</h4>
<p>ECG (T picudas → PR largo y P aplanada → QRS ancho → onda sinusoidal). Con cambios del ECG: <b>gluconato de calcio</b> IV (estabiliza la membrana) → <b>insulina + glucosa</b> y salbutamol nebulizado (meten el K) → eliminar el K (diuréticos, quelantes como patirómero o ciclosilicato de sodio y zirconio, diálisis); bicarbonato si hay acidosis.</p>`),
      s('Prevención, pronóstico y puntos clave', `
<p><b>Nefropatía por contraste</b>: identifica a los de riesgo (TFG <30–45, DM, IC), usa la menor dosis de contraste iso u hipoosmolar e hidrata con salina isotónica; la N-acetilcisteína no ha probado beneficio. Monitoriza creatinina y diuresis en pacientes graves.</p>
<p>Mortalidad hospitalaria de 20–50% en UCI; la mayoría recupera, pero un episodio de LRA aumenta el riesgo de ERC: vigila la creatinina después del alta.</p>
<p><b>Puntos clave</b>: KDIGO (↑0.3 en 48 h o 1.5× en 7 días o diuresis <0.5 mL/kg/h 6 h) · USG para descartar obstrucción · FeNa <1% prerrenal, >2% NTA (FeUrea si hay diurético) · cilindros marrón lodoso = NTA · eritrocitarios = GN · leucocitarios + eosinófilos = NIA · AEIOU para dializar.</p>`)
    ] },

    hta: { refs: ['McEvoy JW, et al. 2024 ESC Guidelines for the management of elevated blood pressure and hypertension. Eur Heart J 2024.', 'Whelton PK, et al. 2017 ACC/AHA Hypertension Guideline. Hypertension 2018.', GUIA], secs: [
      s('Definición y clasificación', `
<p><b>Hipertensión arterial (HTA)</b>: elevación persistente de la presión arterial. Los cortes dependen de la guía:</p>
<table class="mini"><tr><th>ACC/AHA 2017</th><th>Consultorio (mmHg)</th><th>ESC 2024</th><th>Consultorio</th></tr>
<tr><td>Normal</td><td><120/80</td><td>No elevada</td><td><120/70</td></tr>
<tr><td>Elevada</td><td>120–129/<80</td><td>Elevada</td><td>120–139/70–89</td></tr>
<tr><td>HTA estadio 1</td><td>130–139/80–89</td><td rowspan="2">Hipertensión</td><td rowspan="2">≥140/90</td></tr>
<tr><td>HTA estadio 2</td><td>≥140/90</td></tr></table>
<p><b>Fuera del consultorio</b> (ESC 2024): MAPA de 24 h ≥130/80, diurna ≥135/85, nocturna ≥120/70; automedición en casa ≥135/85. <b>HTA de bata blanca</b>: alta en consultorio, normal fuera. <b>Enmascarada</b>: normal en consultorio, alta fuera (tiene el riesgo de una HTA). <b>Crisis</b>: ≥180/110–120.</p>`),
      s('Epidemiología', `
<p>Es el principal factor de riesgo modificable de muerte en el mundo: ~1 de cada 3 adultos mexicanos la tiene y cerca de la mitad no lo sabe. Su prevalencia sube con la edad (>60% en >60 años). Causa EVC, cardiopatía isquémica, IC, FA, ERC y demencia.</p>`),
      s('Etiología y factores de riesgo', `
<p><b>Primaria (esencial)</b>: ~90%; multifactorial. Factores: edad, herencia, raza negra, <b>obesidad</b>, sal, alcohol, sedentarismo, tabaco, estrés, apnea del sueño, DM.</p>
<p><b>Secundaria</b> (~10%) — búscala si debuta <30–40 años, es resistente, empeora de golpe, hay hipokalemia o daño desproporcionado:</p>
<table class="mini"><tr><th>Causa</th><th>Pista</th><th>Estudio</th></tr>
<tr><td><b>Hiperaldosteronismo primario</b> (la más común; 40–64 años)</td><td>Hipokalemia (no siempre), resistencia</td><td>Aldosterona/renina</td></tr>
<tr><td>Enfermedad renal parenquimatosa</td><td>Creatinina, sedimento, albuminuria</td><td>EGO, USG</td></tr>
<tr><td>Estenosis de arteria renal (aterosclerótica en ancianos; displasia fibromuscular en mujeres jóvenes)</td><td>Soplo abdominal, edema pulmonar súbito, ↑Cr >30% con IECA</td><td>Doppler, angio-TC/RM</td></tr>
<tr><td>Apnea obstructiva del sueño</td><td>Ronquido, somnolencia, HTA nocturna</td><td>Polisomnografía</td></tr>
<tr><td>Feocromocitoma</td><td>Paroxismos: cefalea, sudoración, palpitaciones</td><td>Metanefrinas</td></tr>
<tr><td>Cushing, hiper/hipotiroidismo, hiperparatiroidismo</td><td>Rasgos clínicos</td><td>Pruebas hormonales</td></tr>
<tr><td>Coartación de aorta</td><td>PA alta en brazos y baja en piernas, pulsos femorales débiles</td><td>Eco, angio-TC</td></tr>
<tr><td>Fármacos</td><td>AINE, anticonceptivos, esteroides, descongestionantes, ciclosporina, EPO, cocaína, anfetaminas, regaliz</td><td>Historia</td></tr></table>`),
      s('Fisiopatología', `
<p>PA = gasto cardiaco × resistencia vascular periférica. Participan la activación del <b>SRAA</b> (angiotensina II: vasoconstricción, aldosterona y retención de Na), el <b>simpático</b>, la retención renal de sodio (curva presión-natriuresis desplazada), la disfunción endotelial (↓NO, ↑endotelina) y la rigidez arterial (HTA sistólica aislada del anciano, presión de pulso amplia). La presión sostenida daña los órganos blanco por arterioloesclerosis hialina (riñón) y aterosclerosis, e hipertrofia el VI.</p>`),
      s('Cuadro clínico y daño a órgano blanco', `
<p>Casi siempre <b>asintomática</b> (“asesino silencioso”). Daño a órgano blanco: <b>corazón</b> (HVI — Sokolow-Lyon ≥35 mm —, IC con FEVI conservada, cardiopatía isquémica, FA), <b>cerebro</b> (EVC, demencia vascular), <b>riñón</b> (albuminuria, nefroesclerosis, ERC), <b>retina</b> (retinopatía hipertensiva: cruces AV, hemorragias, exudados, papiledema), <b>arterias</b> (enfermedad arterial periférica, aneurisma, disección).</p>`),
      s('Diagnóstico', `
<ul><li><b>Medición correcta</b>: paciente sentado 5 min, espalda y brazo apoyados a la altura del corazón, sin cafeína, ejercicio ni tabaco 30 min antes, vejiga vacía, manguito adecuado; ≥2–3 lecturas separadas 1–2 min y en ambos brazos la primera vez (diferencia >15 mmHg = riesgo vascular).</li><li><b>Confirmar</b> con MAPA o automedición antes de etiquetar (excepto si ≥180/110 o hay daño a órgano blanco).</li><li><b>Estudios iniciales</b>: creatinina y TFG, electrolitos (K), glucosa/A1c, lípidos, EGO con <b>albúmina/creatinina</b>, TSH, BH, ácido úrico, <b>ECG</b>; eco si hay sospecha de daño cardiaco; fondo de ojo.</li><li>Estimar el <b>riesgo cardiovascular</b> a 10 años.</li></ul>`),
      s('Tratamiento', `
<h4>Estilo de vida (todos)</h4>
<p>Bajar de peso (~1 mmHg por kg; la medida más efectiva), <b>dieta DASH</b>, sodio <2 g/día (sal <5 g) y más potasio, ejercicio aeróbico ≥150 min/semana + fuerza, limitar alcohol, dejar de fumar.</p>
<h4>¿Cuándo dar fármacos?</h4>
<p>ESC 2024: PA ≥140/90 confirmada → fármaco; 130–139/80–89 con riesgo CV alto (ECV, DM, ERC, riesgo ≥10%) tras 3 meses de estilo de vida. ACC/AHA: estadio 1 con riesgo ≥10% o enfermedad CV; estadio 2 a todos.</p>
<h4>Meta</h4><p>ESC 2024: sistólica <b>120–129</b> si se tolera (o “tan baja como sea razonablemente posible” en ancianos frágiles). ACC/AHA: <130/80.</p>
<h4>Fármacos</h4>
<ul><li><b>Primera línea</b>: IECA o ARA-II, calcioantagonista dihidropiridínico (amlodipino), diurético tiazídico o similar (clortalidona, indapamida). Betabloqueador si hay indicación específica (cardiopatía isquémica, IC, FA, embarazo).</li><li><b>Empieza con combinación a dosis bajas en una sola pastilla</b> (IECA/ARA-II + calcioantagonista o tiazida) en casi todos; monoterapia solo en PA levemente elevada, ancianos frágiles o ≥85 años.</li><li>Escalera: dos fármacos → tres (IECA/ARA-II + calcioantagonista + tiazida) → añadir <b>espironolactona</b> (HTA resistente) → betabloqueador, alfabloqueador, otros.</li><li><b>Nunca</b> combines IECA + ARA-II. IECA/ARA-II contraindicados en embarazo (usar labetalol, nifedipino, metildopa) y en estenosis bilateral de arterias renales.</li></ul>
<table class="mini"><tr><th>Situación</th><th>Preferir</th></tr>
<tr><td>DM o ERC con albuminuria</td><td>IECA/ARA-II (+ iSGLT2)</td></tr><tr><td>IC con FEVI reducida</td><td>IECA/ARA-II/ARNI + betabloqueador + ARM + iSGLT2</td></tr>
<tr><td>Cardiopatía isquémica</td><td>Betabloqueador + IECA/ARA-II</td></tr><tr><td>Raza negra</td><td>Calcioantagonista o tiazida</td></tr>
<tr><td>Embarazo</td><td>Labetalol, nifedipino, metildopa</td></tr><tr><td>Gota</td><td>Losartán, calcioantagonista (evitar tiazidas)</td></tr></table>
<p><b>Efectos clásicos</b>: IECA → tos, angioedema, hiperkalemia, ↑Cr · tiazidas → hipokalemia, hiponatremia, hiperuricemia, hiperglucemia, hipercalcemia · calcioantagonistas DHP → edema maleolar, cefalea, rubor; no DHP → bradicardia, estreñimiento · betabloqueadores → bradicardia, broncoespasmo, fatiga · espironolactona → hiperkalemia, ginecomastia · hidralazina → lupus · minoxidil → hirsutismo · clonidina → rebote.</p>
<h4>HTA resistente</h4><p>PA no controlada con 3 fármacos a dosis plenas (incluido un diurético). Antes: confirma con MAPA, apego, técnica, sal, fármacos que suben la PA, causas secundarias (hiperaldosteronismo, apnea). Añade espironolactona; denervación renal en casos seleccionados.</p>`),
      s('Urgencia y emergencia hipertensiva', `
<ul><li><b>Urgencia</b>: ≥180/110–120 <b>sin</b> daño agudo a órgano blanco → reiniciar o ajustar fármacos <b>orales</b> y bajar en 24–48 h; no bajar de golpe.</li><li><b>Emergencia</b>: PA muy alta <b>con daño agudo</b> (encefalopatía, EVC, SCA, edema pulmonar, disección aórtica, LRA, eclampsia, microangiopatía, retinopatía grado III–IV) → UCI y fármaco <b>IV</b>: labetalol, nicardipino, clevidipino, nitroprusiato, esmolol; nitroglicerina en SCA o edema pulmonar.</li><li><b>Meta</b>: bajar la PAM ≤25% en la primera hora, luego a 160/100 en 2–6 h y a la normalidad en 24–48 h. Excepciones: <b>disección aórtica</b> (sistólica <120 en 20 min, con esmolol o labetalol primero), <b>EVC isquémico</b> (no bajar salvo >220/120, o <185/110 si se trombolizará), <b>eclampsia/preeclampsia grave</b> (<160/110; sulfato de magnesio).</li></ul>`),
      s('Pronóstico y puntos clave', `
<p>Cada 20/10 mmHg por arriba de 115/75 duplica la mortalidad cardiovascular; bajar 10 mmHg de sistólica reduce ~20% los eventos mayores, ~35% el EVC y ~25% la IC.</p>
<p><b>Puntos clave</b>: confirma con MAPA o en casa · estilo de vida a todos · combinación en una pastilla (IECA/ARA-II + calcioantagonista o tiazida) · meta sistólica 120–129 (ESC) · resistente → espironolactona y busca hiperaldosteronismo · urgencia = orales; emergencia = IV y ↓PAM ≤25% la primera hora · nunca IECA + ARA-II.</p>`)
    ] },

    erc: { refs: ['KDIGO 2024 Clinical Practice Guideline for the Evaluation and Management of CKD. Kidney Int 2024.', 'KDIGO 2021 Blood Pressure in CKD. Kidney Int 2021.', 'KDIGO 2017 CKD-MBD Update.', GUIA], secs: [
      s('Definición y clasificación', `
<p><b>Enfermedad renal crónica (ERC)</b>: alteraciones de la estructura o la función renal presentes <b>>3 meses</b> con implicaciones para la salud: <b>TFG <60</b> mL/min/1.73 m² o marcadores de daño (<b>albuminuria ≥30 mg/g</b>, sedimento anormal, alteraciones tubulares, histológicas o de imagen, trasplante renal).</p>
<p>Se clasifica por <b>Causa, TFG (G) y Albuminuria (A)</b> — “CGA”:</p>
<table class="mini"><tr><th>G</th><th>TFG</th><th></th><th>A</th><th>Albúmina/creatinina</th></tr>
<tr><td>G1</td><td>≥90</td><td></td><td>A1</td><td><30 mg/g</td></tr><tr><td>G2</td><td>60–89</td><td></td><td>A2</td><td>30–300</td></tr>
<tr><td>G3a / G3b</td><td>45–59 / 30–44</td><td></td><td>A3</td><td>>300</td></tr><tr><td>G4</td><td>15–29</td><td></td><td></td><td></td></tr><tr><td>G5</td><td><15 (falla renal)</td><td></td><td></td><td></td></tr></table>
<p>G1 y G2 solo son ERC si hay marcadores de daño. El riesgo (mapa de calor KDIGO) crece con menor TFG y mayor albuminuria.</p>`),
      s('Epidemiología y etiología', `
<p>Afecta a ~10% de los adultos; México tiene una de las mayores tasas de ERC terminal del mundo. Causas: <b>diabetes</b> (la principal, ~30–50%), <b>HTA</b> (~25%), glomerulopatías, enfermedad renal poliquística, uropatía obstructiva, nefritis intersticial crónica (AINE, litio), y la <b>nefropatía mesoamericana</b> (trabajadores agrícolas jóvenes, calor y deshidratación). La principal causa de muerte en ERC es <b>cardiovascular</b>, más que la falla renal.</p>`),
      s('Fisiopatología', `
<p>Al perder nefronas, las restantes se <b>hiperfiltran</b> (↑ presión intraglomerular mediada por angiotensina II) → proteinuria → esclerosis glomerular y fibrosis tubulointersticial → más pérdida (círculo vicioso). Consecuencias: retención de agua y sodio (HTA, edema), de potasio (hiperkalemia), de ácidos (acidosis metabólica) y de fósforo; ↓ <b>EPO</b> (anemia normocítica); ↓ <b>1α-hidroxilasa</b> (menos calcitriol) + ↑ fósforo y FGF-23 → hipocalcemia → <b>hiperparatiroidismo secundario</b>; toxinas urémicas.</p>`),
      s('Cuadro clínico', `
<p>Asintomática hasta etapas avanzadas (TFG <30). <b>Síndrome urémico</b> (G5): anorexia, náusea, vómito, fetor urémico, prurito, fatiga, insomnio, encefalopatía, asterixis, neuropatía periférica, piernas inquietas, <b>pericarditis</b> urémica, sangrado (disfunción plaquetaria), escarcha urémica, hiperpigmentación, disfunción sexual.</p>
<table class="mini"><tr><th>Complicación</th><th>Mecanismo</th><th>Manejo</th></tr>
<tr><td>Anemia</td><td>↓ EPO (también ferropenia)</td><td>Hierro (ferritina <500, saturación <30%) y luego AEE si Hb <10; meta Hb 10–11.5 (no >13)</td></tr>
<tr><td>Alteración mineral y ósea</td><td>↑ P, ↓ Ca, ↓ calcitriol, ↑ PTH (secundario → terciario)</td><td>Restringir fósforo, quelantes (sevelámero, carbonato de calcio), calcitriol/análogos, cinacalcet; osteítis fibrosa, enfermedad adinámica, <b>calcifilaxis</b></td></tr>
<tr><td>Acidosis metabólica</td><td>No excreta ácidos</td><td>Bicarbonato de sodio si HCO₃ <18–22</td></tr>
<tr><td>Hiperkalemia</td><td>No excreta K; IECA, ARM</td><td>Dieta, diuréticos, quelantes (patirómero, ciclosilicato)</td></tr>
<tr><td>Sobrecarga y HTA</td><td>Retención de Na y agua</td><td>Restricción de sal, diuréticos de asa</td></tr>
<tr><td>Riesgo cardiovascular</td><td>Aterosclerosis, calcificación, HVI</td><td>Estatina, control de PA</td></tr></table>`),
      s('Diagnóstico', `
<ul><li><b>TFG estimada</b> con <b>CKD-EPI 2021</b> (creatinina, ± cistatina C, sin coeficiente de raza) y <b>albúmina/creatinina</b> en orina aislada; confirmar a los 3 meses.</li><li>EGO y sedimento, electrolitos, BH, Ca, P, PTH, vitamina D, bicarbonato, lípidos, glucosa.</li><li><b>Ultrasonido</b>: riñones pequeños (<9–10 cm) y ecogénicos = crónico (excepto DM, amiloidosis, poliquística y VIH, que pueden ser de tamaño normal o grande).</li><li>Buscar la causa: glucosa, PA, serologías y biopsia si se sospecha glomerulopatía.</li></ul>
<p><b>Tamizaje</b> en riesgo: DM, HTA, enfermedad CV, obesidad, antecedente familiar, >60 años.</p>`),
      s('Tratamiento: nefroprotección', `
<ul><li><b>IECA o ARA-II</b> a dosis máxima tolerada si hay albuminuria (A2–A3) o DM/HTA: bajan la presión intraglomerular y la proteinuria. Una elevación de creatinina de hasta ~30% es aceptable; vigila el K.</li><li><b>iSGLT2</b> (dapagliflozina, empagliflozina) en ERC con TFG ≥20, con o sin DM: frenan la progresión y reducen eventos.</li><li><b>Finerenona</b> en DM2 con albuminuria persistente pese a IECA/ARA-II. <b>arGLP-1</b> (semaglutida) en DM2.</li><li><b>Presión</b>: sistólica <120 si se tolera (KDIGO 2021).</li><li><b>Estatina</b> (≥50 años o con riesgo CV) · control glucémico (A1c ~7%) · dejar de fumar, bajar de peso · proteína 0.8 g/kg/día (evitar dietas altas en proteína) · sal <2 g/día.</li><li><b>Evitar nefrotóxicos</b>: AINE, contraste innecesario, gadolinio con TFG <30 (fibrosis sistémica nefrogénica), fosfatos orales, ajustar dosis (metformina no con TFG <30; atenolol, gabapentina, aminoglucósidos).</li><li>Vacunas: hepatitis B, influenza, neumococo, COVID.</li></ul>`),
      s('Referencia y preparación para el reemplazo', `
<p><b>Referir a nefrología</b>: TFG <30, albuminuria A3 (>300 mg/g), caída rápida de la TFG (>25% o >5 mL/min/año), sedimento activo, HTA resistente, hiperkalemia persistente, causa hereditaria o desconocida.</p>
<p>Con TFG <30 (o riesgo de falla a 2 años >10–40%) prepara la <b>terapia de reemplazo</b>: educación sobre hemodiálisis, diálisis peritoneal, trasplante (anticipado: el mejor) o manejo conservador; acceso vascular (<b>fístula AV</b> con meses de anticipación; preservar las venas del brazo no dominante). La diálisis se inicia por síntomas o complicaciones, no por una cifra de TFG (generalmente <10).</p>`),
      s('Pronóstico y puntos clave', `
<p>Progresan más rápido con proteinuria alta, HTA o DM mal controladas, tabaquismo, obesidad y acidosis. La mortalidad cardiovascular es 10–20 veces mayor que en la población general.</p>
<p><b>Puntos clave</b>: >3 meses de TFG <60 o albuminuria · clasificar por C-G-A · IECA/ARA-II + iSGLT2 son la base de la nefroprotección · PAS <120 · anemia → hierro y luego EPO (Hb 10–11.5) · fósforo alto, calcio bajo, PTH alta · evitar AINE · fístula con tiempo.</p>`)
    ] },

    glomerulo: { refs: ['KDIGO 2021 Clinical Practice Guideline for the Management of Glomerular Diseases. Kidney Int 2021.', 'KDIGO 2024 Lupus Nephritis and ANCA Vasculitis updates.', GUIA], secs: [
      s('Definición y conceptos', `
<p>Las <b>glomerulopatías</b> son enfermedades que dañan el glomérulo. La barrera de filtración tiene endotelio fenestrado, <b>membrana basal</b> (carga negativa) y <b>podocitos</b>. Primarias (solo riñón) o secundarias (DM, LES, infecciones). Términos: focal (<50% de glomérulos) vs difusa; segmentaria vs global; proliferativa, membranosa, esclerosante, <b>crescéntica</b> (semilunas en el espacio de Bowman).</p>
<table class="mini"><tr><th></th><th>Síndrome nefrítico</th><th>Síndrome nefrótico</th></tr>
<tr><td>Daño</td><td>Inflamación que rompe la membrana basal</td><td>Daño del podocito</td></tr>
<tr><td>Proteinuria</td><td><3.5 g/día</td><td><b>>3.5 g/día</b> (o albúmina/creatinina >2200 mg/g)</td></tr>
<tr><td>Orina</td><td><b>Hematuria</b> (dismórficos, acantocitos, cilindros eritrocitarios), “coca-cola”</td><td>Espumosa, cuerpos ovales grasos (“cruz de Malta”)</td></tr>
<tr><td>Clínica</td><td>HTA, oliguria, edema leve, azoemia</td><td>Edema intenso (anasarca), hipoalbuminemia <3, hiperlipidemia, trombosis, infecciones</td></tr></table>`),
      s('Epidemiología y etiología', `
<table class="mini"><tr><th>Nefrótico</th><th>Pista</th></tr>
<tr><td><b>Cambios mínimos</b></td><td>La más común en <b>niños</b>; también por AINE, linfoma de Hodgkin; muy sensible a esteroides</td></tr>
<tr><td><b>GEFS</b> (glomeruloesclerosis focal y segmentaria)</td><td>Común en adultos (afrodescendientes, latinos); primaria, VIH, heroína, obesidad, drepanocitosis, APOL1</td></tr>
<tr><td><b>Membranosa</b></td><td>La más común en adultos blancos; <b>anti-PLA2R</b> (primaria); secundaria a tumores sólidos, VHB, LES clase V, AINE, oro; la más trombótica (trombosis de vena renal)</td></tr>
<tr><td><b>Diabética</b></td><td>La causa más común de nefrótico y de ERC terminal; nódulos de Kimmelstiel-Wilson</td></tr>
<tr><td><b>Amiloidosis</b></td><td>AL (mieloma) o AA (inflamación crónica); rojo Congo verde manzana</td></tr></table>
<table class="mini"><tr><th>Nefrítico</th><th>Pista</th></tr>
<tr><td><b>Posestreptocócica</b></td><td>Niños, <b>1–3 semanas</b> tras faringitis (3–6 tras impétigo); ASO/anti-DNasa B, <b>C3 bajo</b> que se normaliza en 6–8 semanas</td></tr>
<tr><td><b>Nefropatía por IgA</b> (Berger)</td><td>La GN primaria más común en el mundo; hematuria <b>1–3 días</b> después de una infección respiratoria; C3 normal; vasculitis por IgA (púrpura, artralgias, dolor abdominal)</td></tr>
<tr><td>Lúpica</td><td>C3 y C4 bajos, anti-DNA; clase IV la más grave</td></tr>
<tr><td>Membranoproliferativa</td><td>C3 bajo; VHC, crioglobulinas, gammapatías</td></tr>
<tr><td>Anti-MBG (Goodpasture)</td><td>Hemorragia pulmonar + GN; IF lineal</td></tr>
<tr><td>Vasculitis ANCA</td><td>GPA (c-ANCA/PR3: vía aérea superior), PAM (p-ANCA/MPO), GEPA (asma, eosinofilia)</td></tr>
<tr><td>Alport</td><td>Colágeno IV ligado al X: hematuria + sordera + alteraciones oculares</td></tr></table>`),
      s('Fisiopatología', `
<p><b>Nefrítico</b>: inmunocomplejos, anti-MBG o vasculitis inflaman el glomérulo → rompen la membrana basal → pasan eritrocitos → cae la filtración → retención de Na y agua (HTA, edema) y azoemia. <b>Nefrótico</b>: daño o borramiento de los podocitos → proteinuria masiva → hipoalbuminemia (edema por baja presión oncótica y retención renal de sodio) → el hígado produce más lipoproteínas (<b>hiperlipidemia</b>) → pérdida de antitrombina III y proteínas C y S (<b>hipercoagulabilidad</b>), de inmunoglobulinas (<b>infecciones</b>, peritonitis neumocócica) y de proteínas transportadoras (T4, vitamina D).</p>`),
      s('Diagnóstico', `
<ul><li><b>EGO con sedimento</b> (dismorfismo eritrocitario, cilindros), <b>albúmina o proteína/creatinina</b> (o orina de 24 h), creatinina, albúmina sérica, lípidos.</li><li><b>Complemento</b>: C3 bajo en posestreptocócica, lúpica, membranoproliferativa (y endocarditis, crioglobulinemia); normal en IgA, anti-MBG, ANCA, cambios mínimos, GEFS, membranosa.</li><li>Serologías dirigidas: ASO/anti-DNasa B, ANA y anti-DNA, ANCA, anti-MBG, anti-PLA2R, VHB, VHC, VIH, crioglobulinas, electroforesis y cadenas ligeras libres.</li><li><b>Biopsia renal</b>: casi siempre necesaria en adultos (no en niños con nefrótico típico ni si hay anti-PLA2R positivo con TFG normal).</li></ul>
<table class="mini"><tr><th>Inmunofluorescencia</th><th>Significa</th></tr><tr><td>Lineal (IgG)</td><td>Anti-MBG</td></tr><tr><td>Granular</td><td>Inmunocomplejos: posestreptocócica (“cielo estrellado”, jorobas subepiteliales), lupus (“full house”, asas de alambre), membranoproliferativa (“vía de tren”), membranosa (espigas)</td></tr><tr><td>Mesangial IgA</td><td>Nefropatía por IgA</td></tr><tr><td>Negativa o escasa (pauciinmune)</td><td>Vasculitis ANCA</td></tr></table>
<p><b>Glomerulonefritis rápidamente progresiva</b> (pérdida de función en días a semanas, semilunas): tipo 1 anti-MBG (lineal), tipo 2 inmunocomplejos (granular), tipo 3 pauciinmune (ANCA) → urgencia: biopsia y tratamiento inmediato.</p>`),
      s('Tratamiento', `
<h4>Medidas generales</h4>
<ul><li><b>IECA o ARA-II</b> (antiproteinúrico) a dosis máxima tolerada; meta de proteinuria <0.5–1 g/día; iSGLT2 en proteinúricos.</li><li>Restricción de sodio (<2 g), diuréticos de asa para el edema (pérdida de 0.5–1 kg/día), estatina si persiste la hiperlipidemia.</li><li><b>Anticoagulación profiláctica</b> en nefrótico con albúmina <2–2.5 g/dL (sobre todo membranosa) si el riesgo de sangrado es bajo.</li><li>Vacunas (neumococo, influenza).</li></ul>
<h4>Específico</h4>
<ul><li><b>Cambios mínimos</b>: prednisona 1 mg/kg (niños 60 mg/m²) — remisión en ~90%; recaídas o dependencia: rituximab, inhibidores de calcineurina, ciclofosfamida.</li><li><b>GEFS primaria</b>: esteroides; si resistente, inhibidores de calcineurina. Secundaria: tratar la causa + IECA/ARA-II.</li><li><b>Membranosa</b>: IECA/ARA-II y observar 6 meses si el riesgo es bajo (1/3 remite sola); riesgo alto → <b>rituximab</b> o ciclofosfamida + esteroides (Ponticelli) o inhibidor de calcineurina; seguir el anti-PLA2R.</li><li><b>Posestreptocócica</b>: de soporte (restricción de sal, diuréticos, antihipertensivos); antibiótico si persiste la infección; se resuelve en la mayoría (niños).</li><li><b>IgA</b>: IECA/ARA-II + iSGLT2; esteroides (budesonida de liberación intestinal) si la proteinuria persiste >1 g; sparsentan en casos seleccionados.</li><li><b>Lúpica III–IV</b>: esteroides + micofenolato o ciclofosfamida (± belimumab o voclosporina); hidroxicloroquina a todos.</li><li><b>Vasculitis ANCA y anti-MBG</b>: esteroides + rituximab o ciclofosfamida; <b>plasmaféresis</b> en anti-MBG (y en ANCA con hemorragia alveolar o creatinina muy alta); avacopán como ahorrador de esteroides.</li></ul>`),
      s('Complicaciones y pronóstico', `
<p>Trombosis (vena renal, TEP), infecciones (peritonitis espontánea, celulitis), aterosclerosis por la hiperlipidemia, LRA, ERC terminal, efectos adversos de la inmunosupresión. Pronóstico: cambios mínimos excelente; posestreptocócica buena en niños (peor en adultos); IgA progresa a ERC terminal en 20–40% a 20 años; membranosa 1/3 remite, 1/3 persiste, 1/3 progresa; GEFS y GNRP, peor pronóstico.</p>
<p><b>Puntos clave</b>: nefrítico = hematuria + cilindros eritrocitarios + HTA; nefrótico = >3.5 g + hipoalbuminemia + edema + lípidos + trombosis · C3 bajo = posestreptocócica, lupus, MPGN · niño nefrótico = cambios mínimos → prednisona · adulto + anti-PLA2R = membranosa · hematuria a los 1–3 días de una gripa = IgA; a las 1–3 semanas = posestreptocócica · GNRP = urgencia.</p>`)
    ] },

    dialisis: { refs: ['KDOQI Clinical Practice Guideline for Hemodialysis Adequacy 2015 y Vascular Access 2019.', 'KDIGO Clinical Practice Guideline on the Evaluation and Management of Candidates for Kidney Transplantation 2020.', GUIA], secs: [
      s('Definición', `
<p>La <b>terapia de reemplazo renal (TRR)</b> sustituye parcialmente la función del riñón cuando falla de forma aguda o crónica: elimina toxinas, agua, potasio y ácidos. Modalidades: <b>hemodiálisis</b>, <b>diálisis peritoneal</b>, <b>terapias continuas</b> (hemofiltración/hemodiafiltración) y <b>trasplante renal</b> (la mejor opción para la ERC terminal).</p>`),
      s('Principios físicos', `
<ul><li><b>Difusión</b>: los solutos pasan por una membrana semipermeable de mayor a menor concentración; elimina bien moléculas pequeñas (urea, K). Es la base de la <b>hemodiálisis</b>.</li><li><b>Convección</b>: el agua arrastra solutos por presión hidrostática (“arrastre de solvente”); elimina mejor moléculas medianas. Es la base de la <b>hemofiltración</b> (requiere líquido de reposición).</li><li><b>Ultrafiltración</b>: retiro de agua por gradiente de presión (hemodiálisis) u osmótico (diálisis peritoneal con glucosa o icodextrina).</li></ul>`),
      s('Indicaciones', `
<p><b>Urgentes (AEIOU)</b> cuando no responden al manejo médico: <b>A</b>cidosis grave (pH <7.1), <b>E</b>lectrolitos (hiperkalemia refractaria o con cambios del ECG), <b>I</b>ntoxicaciones dializables (metanol, etilenglicol, litio, salicilatos, metformina, valproato — mnemotecnia “SLIME”), <b>O</b>verload (edema pulmonar resistente a diuréticos), <b>U</b>remia (pericarditis, encefalopatía, sangrado urémico).</p>
<p><b>Crónicas</b> (ERC G5): síntomas urémicos, desnutrición, sobrecarga o hiperkalemia difíciles de controlar, generalmente con TFG <10 (no por una cifra aislada).</p>`),
      s('Hemodiálisis', `
<ul><li>En unidad, <b>3 veces por semana</b>, ~4 h por sesión (adecuación: Kt/V ≥1.2, reducción de urea ≥65%). La sangre se anticoagula con heparina.</li><li><b>Accesos</b>: <b>fístula arteriovenosa</b> (de elección; la <b>radiocefálica</b> en el brazo no dominante; madura en 6–8 semanas; menos infección y trombosis) > injerto protésico > catéter venoso central (yugular interna derecha; para urgencias o puente; mayor riesgo de bacteriemia por <i>S. aureus</i>). La fístula tiene frémito y soplo continuo.</li><li><b>Ventajas</b>: eficiente, rápida, no requiere trabajo del paciente en casa. <b>Desventajas</b>: dependencia de la unidad, cambios hemodinámicos.</li></ul>`),
      s('Diálisis peritoneal y terapias continuas', `
<ul><li><b>Diálisis peritoneal</b>: el peritoneo es la membrana; se infunde una solución <b>hiperosmolar</b> (glucosa o icodextrina) por un catéter de Tenckhoff y se drena tras horas. Manual (DPCA: 4 recambios al día) o automatizada nocturna con máquina (DPA). <b>Ventajas</b>: en casa, preserva más la función renal residual, sin anticoagulación, mejor tolerancia hemodinámica. <b>Desventajas</b>: peritonitis, hiperglucemia, hipertrigliceridemia, hipoalbuminemia, hernias, fugas, requiere motivación. Contraindicada en cirugías abdominales extensas o adherencias.</li><li><b>Terapias continuas</b> (TRRC: hemofiltración o hemodiafiltración venovenosa continua): en UCI para el paciente <b>hemodinámicamente inestable</b>; retiran líquido y solutos lento.</li></ul>`),
      s('Complicaciones', `
<table class="mini"><tr><th>Complicación</th><th>Pista</th><th>Manejo</th></tr>
<tr><td><b>Hipotensión intradiálisis</b> (la más común)</td><td>Ultrafiltración rápida, antihipertensivos, diabéticos</td><td>Trendelenburg, salina, bajar la ultrafiltración, ajustar peso seco</td></tr>
<tr><td>Calambres</td><td>Ultrafiltración</td><td>Salina, reducir ultrafiltración</td></tr>
<tr><td><b>Síndrome de desequilibrio</b></td><td>Primeras sesiones con urea muy alta: cefalea, náusea, confusión, convulsiones (edema cerebral)</td><td>Sesiones cortas y lentas al inicio</td></tr>
<tr><td>Reacción de primer uso</td><td>Anafilaxia o dolor torácico/espalda al inicio</td><td>Detener, soporte</td></tr>
<tr><td>Bacteriemia del catéter</td><td>Fiebre durante la sesión; <i>S. aureus</i></td><td>Hemocultivos, vancomicina, retirar el catéter según el germen</td></tr>
<tr><td>Trombosis o estenosis de la fístula</td><td>Pérdida del frémito</td><td>Trombectomía/angioplastia</td></tr>
<tr><td>Síndrome de robo</td><td>Mano fría y dolorosa</td><td>Revisión quirúrgica</td></tr>
<tr><td><b>Peritonitis</b> (DP)</td><td>Líquido turbio (>100 leucocitos con >50% neutrófilos), dolor, fiebre; <i>S. epidermidis</i>, <i>S. aureus</i>, gramnegativos</td><td>Antibiótico intraperitoneal (vancomicina + cobertura gramnegativa)</td></tr>
<tr><td>Amiloidosis por β₂-microglobulina</td><td>Diálisis de largo plazo: túnel del carpo, artropatía</td><td>—</td></tr></table>
<p>Además: anemia (EPO + hierro IV), alteración mineral ósea, desnutrición, enfermedad cardiovascular (primera causa de muerte; luego infecciones).</p>`),
      s('Trasplante renal', `
<ul><li>Es el <b>mejor tratamiento</b> de la ERC terminal: más supervivencia y calidad de vida, menor costo a largo plazo. El de <b>donante vivo</b> y el <b>anticipado</b> (antes de diálisis) dan los mejores resultados. Referir con TFG <30.</li><li>Evaluación: compatibilidad ABO, HLA y prueba cruzada; descartar cáncer activo, infección activa, enfermedad cardiovascular grave no corregible, mal apego.</li><li>El injerto se coloca en la <b>fosa iliaca</b> (los riñones nativos se dejan).</li><li><b>Inmunosupresión</b>: inducción (basiliximab o timoglobulina) y mantenimiento triple: <b>tacrolimus</b> (inhibidor de calcineurina: nefrotoxicidad, temblor, DM postrasplante, hiperkalemia) + <b>micofenolato</b> (diarrea, leucopenia) + prednisona. Interacciones por CYP3A4 (azoles, macrólidos, diltiazem suben el tacrolimus; rifampicina lo baja).</li><li><b>Rechazo</b>: hiperagudo (minutos, anticuerpos preformados), agudo (semanas-meses; celular o humoral: ↑ creatinina → biopsia → esteroides en pulsos o timoglobulina/plasmaféresis-IgIV), crónico (fibrosis lenta).</li><li><b>Infecciones</b>: CMV (profilaxis con valganciclovir), BK virus (nefropatía), <i>Pneumocystis</i> (TMP-SMX profiláctico). Mayor riesgo de cáncer de piel y linfoproliferativo postrasplante (VEB).</li></ul>`),
      s('Pronóstico y puntos clave', `
<p>La supervivencia en diálisis es baja (~35–50% a 5 años), sobre todo en ancianos y diabéticos; el trasplante la mejora de forma importante.</p>
<p><b>Puntos clave</b>: AEIOU para dializar de urgencia · hemodiálisis = difusión, 3 veces/semana, fístula radiocefálica · hemofiltración continua para el inestable · DP = en casa, riesgo de peritonitis (líquido turbio) · hipotensión = complicación más común · desequilibrio en las primeras sesiones · trasplante = la mejor opción (tacrolimus + micofenolato + prednisona).</p>`)
    ] }
  }
};
