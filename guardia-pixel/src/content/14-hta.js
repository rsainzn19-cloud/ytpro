// Tema 5 · Hipertensión arterial (Nefrología, semana 6)
const T = { topic: 'hta', subj: 'nefro' };
const q = (o) => ({ ...T, ...o });

export default {
  lessons: {
    hta: {
      hook: 'Tres decisiones que se preguntan siempre: cómo confirmar el diagnóstico, con qué combinación empezar y cómo distinguir una urgencia de una emergencia.',
      anim: 'hta',
      video: [
        { ch: 'El asesino silencioso', sc: [
          { v: { k: 'title', t: 'Hipertensión arterial', s: 'Tema 5 · Nefrología' },
            say: 'Bienvenido a la guardia. La hipertensión es el factor de riesgo modificable que más muertes causa en el mundo, y casi nunca da síntomas. Hoy vas a aprender a confirmarla, a tratarla por escalones y a distinguir una urgencia de una emergencia.' },
          { v: { k: 'anim', id: 'hta', step: 0 },
            say: 'Empecemos por la fisiología. Cuando baja la perfusión del riñón, el aparato yuxtaglomerular libera renina. La renina convierte el angiotensinógeno del hígado en angiotensina uno. Y la enzima convertidora, sobre todo en el pulmón, la transforma en angiotensina dos.' },
          { v: { k: 'anim', id: 'hta', step: 1 },
            say: 'La angiotensina dos contrae las arteriolas y estimula a la suprarrenal para liberar aldosterona, que retiene sodio y agua. Más resistencia y más volumen: sube la presión. Muchos antihipertensivos de primera línea bloquean este sistema.' }
        ] },
        { ch: 'Medir y confirmar', sc: [
          { v: { k: 'vs', a: 'ESC 2024', b: 'AHA/ACC 2025', rows: [['Normal / no elevada', '<120/70', '<120/80'], ['Elevada', '120–139 / 70–89', '120–129 / <80'], ['Hipertensión', '≥140/90', 'E1: 130–139/80–89 · E2: ≥140/90']] },
            say: 'Aquí las guías no coinciden, y eso se pregunta. La guía europea de dos mil veinticuatro llama hipertensión a ciento cuarenta sobre noventa o más, y presión elevada desde ciento veinte sobre setenta. La guía americana de dos mil veinticinco diagnostica estadio uno desde ciento treinta sobre ochenta, y estadio dos desde ciento cuarenta sobre noventa.' },
          { v: { k: 'list', t: 'Medir bien', items: ['5 min sentado, espalda apoyada, sin hablar', 'Brazalete adecuado, brazo a la altura del corazón', '2–3 mediciones; la 1ª vez, en ambos brazos'] },
            say: 'Una cifra mal tomada te lleva a un diagnóstico equivocado. El paciente descansa cinco minutos sentado, con la espalda apoyada y sin hablar. Usa un brazalete del tamaño correcto, con el brazo a la altura del corazón. Toma dos o tres mediciones y, la primera vez, en ambos brazos.' },
          { v: { k: 'big', h: 'Confirma fuera del consultorio', t: '≥135/85', s: 'En casa o MAPA diurno. MAPA de 24 h ≥130/80 · nocturno ≥120/70.' },
            say: 'Antes de etiquetar a alguien como hipertenso, confirma fuera del consultorio. En casa, o en el monitoreo ambulatorio de día, el umbral es ciento treinta y cinco sobre ochenta y cinco. En veinticuatro horas, ciento treinta sobre ochenta. Y de noche, ciento veinte sobre setenta.' },
          { v: { k: 'quiz', q: 'PA de 152/96 en consultorio; MAPA de 24 h de 122/76. ¿Diagnóstico?', opts: ['HTA de bata blanca', 'HTA enmascarada'], a: 0 },
            say: 'Pausa. Mujer con ciento cincuenta y dos sobre noventa y seis en el consultorio, pero su monitoreo de veinticuatro horas promedia ciento veintidós sobre setenta y seis. ¿Qué tiene?',
            exp: 'Hipertensión de bata blanca: alta en el consultorio y normal fuera. La enmascarada es al revés, normal en el consultorio y alta fuera, y tiene más riesgo porque pasa desapercibida.' },
          { v: { k: 'list', t: 'Estudios iniciales', items: ['Creatinina y TFG, sodio y potasio', 'Glucosa o A1c y perfil de lípidos', 'EGO y cociente albúmina/creatinina', 'ECG de 12 derivaciones: busca HVI'] },
            say: 'A todo hipertenso nuevo pídele creatinina con tasa de filtración, electrolitos, glucosa o hemoglobina glucosilada, perfil de lípidos, examen de orina con cociente albúmina creatinina y un electrocardiograma para buscar hipertrofia ventricular. Así buscas daño a órgano blanco y pistas de una causa secundaria.' }
        ] },
        { ch: 'Metas y escalones', sc: [
          { v: { k: 'vs', a: 'ESC 2024', b: 'AHA/ACC 2025', rows: [['Meta general', 'PAS 120–129 si se tolera', '<130/80; animar a PAS <120'], ['Inicio de fármaco', '≥140/90, o 130–139 con riesgo alto', '≥140/90, o ≥130/80 con riesgo alto'], ['Frágil o ≥85 años', 'Tan baja como sea razonable', 'Individualizar']] },
            say: 'Las metas también cambian según la guía. La europea busca una sistólica de ciento veinte a ciento veintinueve si el paciente la tolera. La americana pide menos de ciento treinta sobre ochenta y anima a acercarse a una sistólica menor de ciento veinte. Las dos tratan antes si el riesgo cardiovascular es alto.' },
          { v: { k: 'flow', t: 'La escalera del tratamiento', steps: ['Estilo de vida a todos', 'A + C o A + D en 1 pastilla', 'A + C + D', '+ espironolactona'] },
            say: 'El tratamiento va por escalones. Estilo de vida a todos. Luego, en la mayoría, dos fármacos en una sola pastilla: un IECA o ARA dos, más un calcioantagonista o un diurético tiazídico. Si no se controla, la triple combinación. Y si aun así no se controla, espironolactona.' },
          { v: { k: 'list', t: 'Estilo de vida que sí baja la PA', items: ['Sodio <2 g/día; sal con potasio si no hay ERC', 'Dieta DASH, rica en potasio', 'Bajar de peso y ejercicio aeróbico', 'Limitar alcohol y dejar de fumar'] },
            say: 'El estilo de vida no es relleno: baja varios milímetros de mercurio. Sodio menor de dos gramos al día, y si no hay enfermedad renal avanzada, sustituto de sal con potasio. Dieta DASH, bajar de peso, ejercicio aeróbico, limitar el alcohol y dejar de fumar.' },
          { v: { k: 'anim', id: 'hta', step: 2 },
            say: 'Ahora los fármacos. Los IECA, los que terminan en pril, bloquean la enzima convertidora. Como esa enzima también degrada la bradicinina, esta se acumula y causa tos seca y, rara vez, angioedema.' },
          { v: { k: 'anim', id: 'hta', step: 3 },
            say: 'Los ARA dos, los que terminan en sartán, bloquean el receptor de la angiotensina dos. No acumulan bradicinina, por eso no dan tos. Si un paciente tose con enalapril, cambias a losartán. Pero nunca los combines.' },
          { v: { k: 'mnemo', t: 'A + C + D', d: 'A = ARA-II o IECA · C = calcioantagonista (amlodipino) · D = diurético tiazídico o tipo tiazida. Si falla con buen apego: espironolactona.' },
            say: 'Para no olvidarlo: A, más C, más D. A es ARA dos o IECA. C es calcioantagonista, como amlodipino. D es diurético tiazídico o tipo tiazida, como clortalidona. Los betabloqueadores solo entran con otra indicación: infarto previo, insuficiencia cardiaca, fibrilación auricular o angina.' },
          { v: { k: 'list', t: 'Elige según el paciente', items: ['DM o ERC con albuminuria → IECA o ARA-II', 'IC con FEr → IECA/ARNI + BB + ARM + iSGLT2', 'Embarazo → labetalol, nifedipino, metildopa', 'Gota → evita tiazidas; losartán ayuda'] },
            say: 'Ajusta según el paciente. Con diabetes o enfermedad renal con albuminuria, el IECA o ARA dos no puede faltar. En insuficiencia cardiaca con fracción reducida, los cuatro pilares. En el embarazo, labetalol, nifedipino o metildopa, porque los IECA y ARA dos están contraindicados. Y con gota, evita las tiazidas.' }
        ] },
        { ch: 'Resistente y secundaria', sc: [
          { v: { k: 'list', t: 'HTA resistente: antes de etiquetarla', items: ['3 fármacos a dosis máxima, uno diurético', 'Descarta técnica mala y bata blanca (MAPA)', 'Revisa apego, AINE, alcohol y sal', 'Busca una causa secundaria'] },
            say: 'Hablamos de hipertensión resistente cuando no se controla con tres fármacos a dosis máximas, uno de ellos diurético. Antes, descarta la pseudorresistencia: mala técnica, efecto de bata blanca y falta de apego. Busca fármacos como antiinflamatorios o descongestionantes, y una causa secundaria.' },
          { v: { k: 'anim', id: 'hta', step: 4 },
            say: 'Si es resistente verdadera, el cuarto fármaco es la espironolactona. Bloquea el receptor de aldosterona en el túbulo colector: se elimina sodio y se retiene potasio. Fue la más eficaz como cuarto fármaco. Vigila el potasio y la creatinina.' },
          { v: { k: 'case', t: 'HTA de difícil control', p: { name: 'Rubén', age: 52, sex: 'H', skin: '#B97A52', hair: '#1E1A18', gown: '#F2B66D' }, text: 'Con amlodipino, losartán y clortalidona a dosis máximas sigue en 156/96. K 2.9 mEq/L. Niega AINE y regaliz.', vit: { PA: '156/96', K: '2.9' } },
            say: 'Rubén, de cincuenta y dos años, sigue descontrolado con tres fármacos a dosis máximas, y su potasio es de dos punto nueve. Hipertensión resistente con hipokalemia: piensa en hiperaldosteronismo primario, la causa endocrina más frecuente. El tamizaje es el cociente aldosterona renina.' },
          { v: { k: 'list', t: 'Pistas de HTA secundaria', items: ['Hipo-K + resistente → aldosterona/renina', 'Ronquido, obesidad → apnea del sueño', 'Mujer joven + soplo → displasia fibromuscular', 'Cefalea, sudor, palpitaciones → metanefrinas', 'PA brazos > piernas → coartación aórtica'] },
            say: 'Sospecha una causa secundaria si la hipertensión empieza joven, es grave o resistente, o aparece con hipokalemia. Ronquido y obesidad: apnea del sueño. Mujer joven con soplo abdominal: displasia fibromuscular. Crisis de cefalea, sudoración y palpitaciones: feocromocitoma. Presión alta en brazos y baja en piernas: coartación aórtica.' },
          { v: { k: 'quiz', q: 'Crisis de cefalea, sudoración y PA 220/130. Si es feocromocitoma, ¿qué bloqueas primero?', opts: ['Beta, con propranolol', 'Alfa, con fenoxibenzamina o doxazosina'], a: 1 },
            say: 'Pausa. Hombre con crisis de cefalea, sudoración y palpitaciones, y presión de doscientos veinte sobre ciento treinta. Si es feocromocitoma, ¿qué bloqueas primero?',
            exp: 'Primero el bloqueo alfa y después el beta. Un betabloqueador solo deja la estimulación alfa sin oposición y dispara la presión.' }
        ] },
        { ch: 'Urgencia o emergencia', sc: [
          { v: { k: 'list', t: 'Daño agudo = emergencia', items: ['Encefalopatía, EVC o hemorragia cerebral', 'SCA o edema pulmonar agudo', 'Disección aórtica', 'LRA, microangiopatía, retinopatía III–IV', 'Eclampsia o preeclampsia grave'] },
            say: 'Ahora la decisión que más se pregunta. Lo que separa una urgencia de una emergencia no es la cifra, es el daño agudo a órgano blanco: encefalopatía, evento vascular cerebral, síndrome coronario, edema pulmonar, disección aórtica, lesión renal aguda o eclampsia. Si hay daño agudo, es emergencia.' },
          { v: { k: 'vs', cmp: 'urg-emerg', rows: [1, 2, 3, 5] },
            say: 'En la urgencia, sin daño agudo, usas fármacos orales y bajas la presión poco a poco en uno o dos días, muchas veces solo reiniciando su tratamiento. En la emergencia, terapia intensiva y un fármaco intravenoso titulable, como labetalol o nicardipino. Y nunca nifedipino sublingual.' },
          { v: { k: 'flow', t: 'Emergencia: qué tan rápido', steps: ['1ª hora: PAM ↓ ≤25%', '2–6 h: hasta ~160/100', '24–48 h: a lo normal', 'Disección: PAS <120 en 1 h'] },
            say: 'En la emergencia, baja la presión arterial media no más de veinticinco por ciento en la primera hora. Luego, a ciento sesenta sobre cien en las siguientes dos a seis horas, y a lo normal en uno o dos días. La excepción es la disección aórtica: sistólica menor de ciento veinte en la primera hora, con betabloqueador primero.' },
          { v: { k: 'quiz', q: 'PA 210/122, asintomático, sin daño a órgano blanco. ¿Qué haces?', opts: ['Nicardipino IV en terapia intensiva', 'Reiniciar vía oral y cita cercana'], a: 1 },
            say: 'Pausa. Hombre que se quedó sin sus pastillas. Presión de doscientos diez sobre ciento veintidós, asintomático y sin daño a órgano blanco. ¿Qué haces?',
            exp: 'Es una urgencia. Reinicias su tratamiento oral, bajas la presión de forma gradual y lo citas pronto. Bajarla rápido no ayuda y puede causar isquemia.' },
          { v: { k: 'tip', kind: 'pearl', t: 'La cifra no define la emergencia: el daño agudo a órgano blanco sí. 220/130 sin daño = urgencia; 190/110 con edema pulmonar = emergencia.' },
            say: 'La perla para el examen: la cifra no define la emergencia, el daño agudo a órgano blanco sí. Y si la pregunta dice según qué guía, revisa los umbrales: la europea diagnostica desde ciento cuarenta sobre noventa y la americana desde ciento treinta sobre ochenta. Ahora ve a las preguntas del tema.' }
        ] }
      ],
      compare: ['urg-emerg'],
      nn: [['hypertension-updated', 'Hypertension'], ['antihypertensive-drugs', 'Antihypertensive Drugs']],
      yt: 'hypertension antihypertensives',
      sections: [
        { h: 'Diagnóstico y clasificación', html: `
<div class="tablewrap"><table class="mini">
<tr><th>ESC 2024 (consultorio)</th><th>AHA/ACC 2025</th></tr>
<tr><td>No elevada: &lt;120/70</td><td>Normal: &lt;120/&lt;80</td></tr>
<tr><td>Elevada: 120–139 / 70–89</td><td>Elevada: 120–129 / &lt;80</td></tr>
<tr><td>Hipertensión: ≥140/90</td><td>Estadio 1: 130–139 / 80–89 · Estadio 2: ≥140/90</td></tr>
</table></div>
<ul>
<li><b>Confirma fuera del consultorio</b>: MAPA (24 h ≥130/80; diurno ≥135/85; nocturno ≥120/70) o automedición en casa (≥135/85).</li>
<li><b>HTA de bata blanca</b>: alta en consultorio, normal fuera. <b>Enmascarada</b>: normal en consultorio, alta fuera (más riesgo).</li>
<li>Técnica: 5 min sentado, brazalete adecuado, brazo a la altura del corazón, 2–3 mediciones; la primera vez en ambos brazos.</li>
<li><b>Estudios iniciales</b>: creatinina y TFG, electrolitos, glucosa o A1c, perfil de lípidos, EGO con cociente albúmina/creatinina, ECG (HVI). Fondo de ojo y eco según el caso.</li>
</ul>` },
        { h: 'Tratamiento', html: `
<ul>
<li><b>Estilo de vida</b>: sodio &lt;2 g/día, dieta DASH rica en potasio (si no hay ERC avanzada), bajar de peso, ejercicio, limitar alcohol, dejar de fumar.</li>
<li><b>Primera línea</b>: IECA o ARA-II, calcioantagonista dihidropiridínico (amlodipino) y diurético tiazídico o tipo tiazida (clortalidona, indapamida).</li>
<li><b>Iniciar con dos fármacos en una sola pastilla</b> (IECA/ARA-II + calcioantagonista o + tiazida) en la mayoría. Monoterapia solo en casos seleccionados: PA elevada (130–139/80–89) con riesgo alto que requiere fármaco, ≥85 años, fragilidad o hipotensión ortostática sintomática. Con PA elevada y riesgo bajo no se dan fármacos: estilo de vida.</li>
<li>Si no se controla: triple combinación <b>A + C + D</b> (ARA-II/IECA + calcioantagonista + diurético).</li>
<li><b>Betabloqueadores</b> solo con indicación propia: post-IAM, IC con FEr, FA (control de frecuencia), angina.</li>
<li><b>Nunca</b> combinar IECA + ARA-II (ni con aliskirén): más hiperkalemia y LRA sin beneficio.</li>
</ul>
<div class="decide">
<p><span class="if">DM con albuminuria o ERC con albuminuria</span><span class="then">IECA o ARA-II</span></p>
<p><span class="if">IC con FE reducida</span><span class="then">IECA/ARA-II/ARNI + betabloqueador + ARM (+ iSGLT2)</span></p>
<p><span class="if">Post-IAM</span><span class="then">IECA + betabloqueador</span></p>
<p><span class="if">Embarazo</span><span class="then">Labetalol, nifedipino o metildopa; IECA/ARA-II contraindicados</span></p>
<p><span class="if">Gota</span><span class="then">Evita tiazidas; losartán baja el ácido úrico</span></p>
<p><span class="if">HPB</span><span class="then">Un alfabloqueador puede ayudar, pero no como primera línea de HTA</span></p>
</div>` },
        { h: 'Efectos adversos clásicos', html: `
<ul>
<li><b>IECA</b>: tos seca (bradicinina) → cambia a ARA-II; angioedema; hiperkalemia; la creatinina puede subir hasta 30% al iniciar (aceptable). Contraindicados en estenosis bilateral de arteria renal y embarazo.</li>
<li><b>Calcioantagonistas dihidropiridínicos</b>: edema maleolar, cefalea, rubor. Verapamilo y diltiazem: bradicardia, estreñimiento; evitarlos en IC con FEr.</li>
<li><b>Tiazidas</b>: hipokalemia, hiponatremia, hiperuricemia (gota), hiperglucemia, hipercalcemia.</li>
<li><b>Espironolactona</b>: hiperkalemia, ginecomastia (la eplerenona no la da).</li>
<li><b>Betabloqueadores</b>: bradicardia, fatiga, broncoespasmo (no selectivos), ocultan síntomas de hipoglucemia.</li>
</ul>` },
        { h: 'HTA resistente y secundaria', html: `
<p><b>Resistente</b>: no controlada con 3 fármacos a dosis máximas, uno de ellos diurético. Antes confirma apego, técnica y MAPA (pseudorresistencia). Cuarto fármaco: <b>espironolactona</b> (PATHWAY-2).</p>
<p><b>Sospecha HTA secundaria</b> si: inicio joven, resistente, empeoramiento brusco, hipokalemia, daño a órgano blanco desproporcionado, HTA grave.</p>
<div class="tablewrap"><table class="mini">
<tr><th>Causa</th><th>Pista</th><th>Estudio</th></tr>
<tr><td>Hiperaldosteronismo primario (la endocrina más frecuente)</td><td>HTA resistente, hipokalemia (no siempre)</td><td>Cociente aldosterona/renina</td></tr>
<tr><td>Apnea obstructiva del sueño</td><td>Ronquido, somnolencia, obesidad, HTA nocturna</td><td>Polisomnografía</td></tr>
<tr><td>Renovascular</td><td>Mujer joven (displasia fibromuscular, “cuentas de rosario”) o adulto mayor aterosclerótico; soplo abdominal; Cr ↑ &gt;30% con IECA; edema pulmonar súbito</td><td>Doppler renal, angio-TC o angio-RM</td></tr>
<tr><td>Enfermedad renal parenquimatosa</td><td>TFG baja, albuminuria</td><td>Creatinina, EGO, USG</td></tr>
<tr><td>Feocromocitoma</td><td>Crisis de cefalea, palpitaciones y sudoración</td><td>Metanefrinas libres en plasma (o fraccionadas en orina)</td></tr>
<tr><td>Coartación aórtica</td><td>PA alta en brazos y baja en piernas, pulsos femorales retrasados, muescas costales</td><td>Ecocardiograma, angio-TC</td></tr>
<tr><td>Cushing, hiper/hipotiroidismo</td><td>Fenotipo sugestivo</td><td>Pruebas hormonales</td></tr>
<tr><td>Fármacos</td><td>AINE, anticonceptivos, descongestionantes, glucocorticoides, ciclosporina, EPO, cocaína</td><td>Interrogatorio</td></tr>
</table></div>` },
        { h: 'Urgencia vs emergencia', html: `
<ul>
<li><b>Emergencia</b>: PA muy alta (habitualmente ≥180/110–120) <b>con daño agudo a órgano blanco</b>: encefalopatía, EVC, SCA, edema pulmonar agudo, disección aórtica, LRA, eclampsia, HTA maligna con retinopatía grado III–IV, microangiopatía.</li>
<li>Manejo: terapia intensiva y fármaco IV titulable. Bajar la PAM <b>no más de ~25% en la primera hora</b>, luego a ~160/100 en 2–6 h y a lo normal en 24–48 h.</li>
<li><b>Excepciones</b>: disección aórtica → PAS &lt;120 y FC &lt;60 en la primera hora (esmolol o labetalol primero, después vasodilatador). EVC isquémico candidato a trombólisis → &lt;185/110 antes y &lt;180/105 después; sin trombólisis, tratar solo si &gt;220/120. Preeclampsia → labetalol, hidralazina o nifedipino + sulfato de magnesio.</li>
<li>Fármacos: labetalol, nicardipino, clevidipino, esmolol, nitroglicerina (SCA, edema pulmonar), nitroprusiato (toxicidad por cianuro). Cocaína o feocromocitoma: fentolamina; evita el betabloqueador solo.</li>
<li><b>Urgencia</b> (sin daño agudo): fármacos orales y descenso gradual en 24–48 h, a menudo solo reiniciar su tratamiento y cita cercana. <b>Nunca nifedipino sublingual.</b></li>
</ul>` },
        { h: 'Fisiopatología en 1 minuto', html: `
<ul>
<li><b>PA = gasto cardiaco × resistencia vascular periférica.</b> En la HTA establecida predomina el aumento de la resistencia.</li>
<li><b>HTA esencial (90–95%)</b>: mezcla de genética, sal, obesidad, edad, sistema nervioso simpático y SRAA. Solo 5–10% es secundaria, y es más probable en jóvenes, HTA resistente o grave, o con hipokalemia.</li>
<li><b>Angiotensina II</b> (ver la animación): contrae arteriolas, libera aldosterona (retención de sodio y agua), estimula la sed y remodela corazón y vasos.</li>
<li><b>Daño a órgano blanco</b>: corazón (HVI, IC con FE preservada, cardiopatía isquémica, FA), cerebro (EVC, demencia vascular), riñón (nefroesclerosis, albuminuria), ojo (retinopatía) y arterias (aneurisma y disección aórtica, enfermedad arterial periférica).</li>
<li><b>Arteriolosclerosis</b>: hialina en la HTA crónica; hiperplásica (“en piel de cebolla”) con necrosis fibrinoide en la HTA maligna.</li>
</ul>` },
        { h: 'Fármacos clave', html: `
<div class="tablewrap"><table class="mini">
<tr><th>Fármaco</th><th>Mecanismo</th><th>Efecto adverso clave</th><th>Contraindicación</th></tr>
<tr><td>IECA (enalapril, lisinopril)</td><td>Bloquean la ECA</td><td>Tos, angioedema, hiperkalemia, Cr ↑ al inicio</td><td>Embarazo, angioedema previo, estenosis bilateral de arteria renal</td></tr>
<tr><td>ARA-II (losartán, telmisartán)</td><td>Bloquean el receptor AT1</td><td>Hiperkalemia, Cr ↑ al inicio (sin tos)</td><td>Embarazo, estenosis bilateral de arteria renal; nunca con IECA</td></tr>
<tr><td>Calcioantagonista DHP (amlodipino, nifedipino)</td><td>Vasodilatación arteriolar</td><td>Edema maleolar, cefalea, rubor</td><td>Nifedipino de acción corta o sublingual</td></tr>
<tr><td>Calcioantagonista no DHP (verapamilo, diltiazem)</td><td>↓ FC y contractilidad</td><td>Bradicardia, estreñimiento (verapamilo)</td><td>IC con FEr, bloqueo AV de 2º–3er grado</td></tr>
<tr><td>Tiazida o tipo tiazida (clortalidona, indapamida, HCTZ)</td><td>Inhiben el cotransportador Na-Cl del túbulo distal</td><td>Hipo-K, hipo-Na, hiperuricemia, hiperglucemia, hipercalcemia</td><td>Gota, hiponatremia</td></tr>
<tr><td>Espironolactona</td><td>Antagoniza la aldosterona</td><td>Hiperkalemia, ginecomastia</td><td>K alto; precaución con TFG baja</td></tr>
<tr><td>Betabloqueador</td><td>Bloquea β1 (↓ FC y gasto)</td><td>Bradicardia, fatiga, broncoespasmo (no selectivos)</td><td>Bloqueo AV avanzado; feocromocitoma o cocaína sin bloqueo alfa</td></tr>
<tr><td>Doxazosina</td><td>Bloquea α1</td><td>Hipotensión ortostática (primera dosis)</td><td>No es primera línea</td></tr>
<tr><td>Hidralazina</td><td>Vasodilatador arteriolar directo</td><td>Taquicardia refleja, lupus inducido</td><td>Sola en cardiopatía isquémica o disección</td></tr>
<tr><td>Clonidina</td><td>Agonista α2 central</td><td>Sedación, rebote al suspenderla</td><td>Mal apego (riesgo de rebote)</td></tr>
</table></div>` },
        { h: 'Cómo lo preguntan en el examen', html: `
<ul>
<li>“PA 148/92 en una sola consulta, asintomático” → <b>confirma con MAPA o automedición</b> antes de tratar.</li>
<li>“Tos seca semanas después de iniciar enalapril” → <b>cambia a ARA-II</b> (nunca lo agregues al IECA).</li>
<li>“HTA resistente con K 3.1 sin diurético” → <b>cociente aldosterona/renina</b>.</li>
<li>“Adulto mayor fumador: Cr ↑ &gt;30% con IECA y edema pulmonar súbito” → <b>estenosis de arteria renal</b>.</li>
<li>“Embarazada que toma IECA o ARA-II” → <b>cambiar a labetalol, nifedipino o metildopa</b>.</li>
<li>“220/130 sin daño agudo” → <b>urgencia</b>: vía oral y cita cercana. “190/110 con edema pulmonar o confusión” → <b>emergencia</b>: IV y PAM ↓ ≤25% en la 1ª hora.</li>
</ul>` }
      ],
      mnemo: { t: 'A + C + D', d: 'La escalera de casi todo hipertenso: A (ARA-II o IECA) + C (calcioantagonista) + D (diurético tiazídico). Si con A + C + D no se controla y el apego es bueno, la cuarta letra es la espironolactona.' },
      pearl: 'Lo que separa la urgencia de la emergencia no es la cifra: es el daño agudo a órgano blanco. 220/130 sin daño es urgencia; 190/110 con edema pulmonar es emergencia.',
      trap: 'Bajar la PA a la normalidad en una hora en una emergencia (o con nifedipino sublingual) causa isquemia cerebral, coronaria o renal. Máximo ~25% de la PAM en la primera hora.',
      guide: [
        'Definición y meta: la ESC 2024 diagnostica HTA con ≥140/90 y busca PAS de 120–129 si se tolera. La AHA/ACC 2025 diagnostica estadio 1 desde 130/80 y recomienda meta <130/80 para la mayoría, con sugerencia de acercarse a una PAS <120. ⚠️ Confirma qué guía y qué cifras usa tu profesor.',
        'Inicio con combinación: ambas guías favorecen dos fármacos de inicio en la mayoría; la ESC lo pide en una sola pastilla.',
        'Cuándo dar fármaco con 130–139/80–89: la ESC 2024 lo indica si el riesgo CV es alto (SCORE2 ≥10%, ECV, DM, ERC o daño a órgano blanco) y la PA sigue ≥130/80 tras 3 meses de estilo de vida. La AHA/ACC 2025 trata el estadio 1 si hay ECV, DM, ERC o riesgo PREVENT a 10 años ≥7.5%; si el riesgo es bajo, tras 3–6 meses de estilo de vida si sigue ≥130/80. ⚠️ Depende de la guía.',
        'Nombre de la “urgencia hipertensiva”: documentos recientes de la AHA prefieren llamarla “PA muy elevada sin daño agudo a órgano blanco”. El manejo no cambia: vía oral y descenso gradual.'
      ],
      refs: [
        'McEvoy JW, et al. 2024 ESC Guidelines for the management of elevated blood pressure and hypertension. Eur Heart J 2024.',
        '2025 AHA/ACC/AANP/AAPA/ABC/ACCP/ACPM/AGS/AMA/ASPC/NMA/PCNA/SGIM Guideline for the Prevention, Detection, Evaluation and Management of High Blood Pressure in Adults. Hypertension 2025.',
        'Williams B, et al. PATHWAY-2. Lancet 2015.'
      ]
    }
  },

  compares: {
    'urg-emerg': {
      topic: 'hta', a: 'Urgencia', b: 'Emergencia hipertensiva',
      rows: [
        ['Daño agudo a órgano blanco', 'No', 'Sí: encefalopatía, EVC, SCA, edema pulmonar, disección, LRA, eclampsia'],
        ['Dónde', 'Urgencias u observación; puede irse a casa', 'Terapia intensiva'],
        ['Vía', 'Oral', 'IV titulable'],
        ['Velocidad', 'Gradual en 24–48 h', 'PAM ↓ ≤25% en la 1ª hora (excepto disección y EVC)'],
        ['Fármacos', 'Reiniciar o ajustar su tratamiento oral', 'Labetalol, nicardipino, clevidipino, esmolol, nitroglicerina, nitroprusiato'],
        ['Error clásico', 'Nifedipino sublingual o bajar de golpe', 'Normalizar la PA en minutos']
      ]
    }
  },

  anims: {
    hta: {
      title: 'Renina-angiotensina-aldosterona',
      steps: [
        { cap: '<b>La cascada.</b> El hígado produce angiotensinógeno. Cuando baja la perfusión renal, el aparato yuxtaglomerular libera renina, que lo convierte en angiotensina I. La ECA (sobre todo en el pulmón) la convierte en angiotensina II.',
          labels: [[22, 14, 'Hígado'], [22, 104, 'Riñón: renina'], [80, 14, 'Ang I'], [80, 60, 'Pulmón: ECA'], [138, 60, 'Ang II']] },
        { cap: '<b>Lo que hace la angiotensina II.</b> Contrae las arteriolas (sube la resistencia) y estimula a la suprarrenal para liberar aldosterona, que retiene sodio y agua en el riñón. Resultado: sube la PA.',
          labels: [[40, 30, 'Vasoconstricción'], [118, 30, 'Suprarrenal'], [120, 104, 'Aldosterona: retiene Na']] },
        { cap: '<b>IECA (-pril).</b> Bloquean la ECA: no se forma angiotensina II. Como la ECA también degrada bradicinina, esta se acumula y causa tos y, rara vez, angioedema.',
          labels: [[80, 60, 'ECA ✕'], [124, 98, 'Bradicinina ↑ → tos']] },
        { cap: '<b>ARA-II (-sartán).</b> Bloquean el receptor AT1: la angiotensina II se forma pero no actúa. No acumulan bradicinina, por eso no dan tos.',
          labels: [[118, 40, 'Receptor AT1 ✕'], [40, 104, 'Sin tos']] },
        { cap: '<b>Espironolactona.</b> Bloquea el receptor de aldosterona en el túbulo colector: sale sodio y se retiene potasio. Es el cuarto fármaco en la HTA resistente; vigila el potasio.',
          labels: [[118, 40, 'Aldosterona'], [80, 104, 'Receptor ✕ · K ↑']] }
      ]
    }
  },

  cards: [
    ['HTA según ESC 2024 (consultorio)', '≥140/90; elevada 120–139/70–89'],
    ['HTA según AHA/ACC 2025', 'Estadio 1: 130–139/80–89 · Estadio 2: ≥140/90'],
    ['Umbrales de MAPA', '24 h ≥130/80 · diurno ≥135/85 · nocturno ≥120/70'],
    ['Primera línea de HTA', 'IECA/ARA-II, calcioantagonista dihidropiridínico, tiazida o tipo tiazida'],
    ['Combinación que nunca se usa', 'IECA + ARA-II (o con aliskirén)'],
    ['Cuarto fármaco en HTA resistente', 'Espironolactona'],
    ['Tos por IECA', 'Por bradicinina: cambiar a ARA-II'],
    ['Efectos adversos de tiazidas', 'Hipo-K, hipo-Na, hiperuricemia, hiperglucemia, hipercalcemia'],
    ['HTA en el embarazo', 'Labetalol, nifedipino, metildopa (IECA/ARA-II contraindicados)'],
    ['Tamizaje de hiperaldosteronismo', 'Cociente aldosterona/renina'],
    ['Tamizaje de feocromocitoma', 'Metanefrinas libres en plasma'],
    ['Emergencia: velocidad de descenso', 'PAM ↓ ≤25% en la 1ª hora, ~160/100 en 2–6 h, normal en 24–48 h'],
    ['Disección aórtica', 'PAS <120 y FC <60 en la primera hora: betabloqueador IV primero'],
    ['EVC isquémico candidato a trombólisis', 'PA <185/110 antes y <180/105 después'],
    ['Meta de PA según ESC 2024', 'PAS 120–129 si se tolera; si no, tan baja como sea razonable'],
    ['Meta de PA según AHA/ACC 2025', '<130/80 en la mayoría, animando a PAS <120'],
    ['Cocaína + HTA', 'Benzodiacepinas; nitroglicerina o fentolamina. Evita el betabloqueador en la intoxicación aguda'],
    ['EVC isquémico sin trombólisis ni trombectomía', 'Solo tratar si PA ≥220/120 (bajar ≈15% en 24 h)'],
    ['Edema por amlodipino', 'Por vasodilatación precapilar, no por volumen: bajar la dosis o agregar IECA/ARA-II; el diurético casi no sirve']
  ],

  questions: [
    q({ id: 'hta-01', dif: 1,
      stem: 'Hombre de 40 años, asintomático, con PA de 148/92 mmHg en una sola visita. Sin comorbilidades. ¿Siguiente paso?',
      opts: ['Iniciar amlodipino hoy', 'Confirmar con MAPA o automedición en casa', 'Ecocardiograma urgente', 'Iniciar IECA + diurético', 'Diagnosticar HTA y citar en un año'],
      ans: 1,
      exp: 'Una sola medición en consultorio no basta. Se confirma con medición fuera del consultorio (MAPA o automedición), que además detecta HTA de bata blanca y enmascarada. Con PA muy alta o daño a órgano blanco se puede iniciar sin esperar.',
      why: ['Se trata después de confirmar, salvo HTA grave o daño a órgano blanco.', '', 'No está indicado de entrada.', 'Primero se confirma el diagnóstico.', 'Primero confirma; tampoco se espera un año.'],
      ref: 'ESC 2024 HTA' }),

    q({ id: 'hta-02', dif: 1,
      stem: 'Mujer de 50 años con PA en consultorio de 152/96 mmHg en dos visitas. MAPA de 24 h: promedio 122/76, diurno 126/80. ¿Diagnóstico?',
      opts: ['HTA estadio 2', 'HTA de bata blanca', 'HTA enmascarada', 'HTA resistente', 'Hipotensión ortostática'],
      ans: 1,
      exp: 'Alta en consultorio y normal en MAPA = bata blanca. No requiere fármacos de inicio: estilo de vida y vigilancia con MAPA o automedición, porque tiene más riesgo de desarrollar HTA sostenida.',
      why: ['El MAPA es normal.', '', 'Enmascarada es al revés: normal en consultorio y alta fuera.', 'Ni siquiera recibe tratamiento.', 'No hay datos de ortostatismo.'],
      ref: 'ESC 2024 HTA' }),

    q({ id: 'hta-03', dif: 2,
      stem: 'Hombre de 52 años con HTA confirmada por MAPA (promedio 156/98), sin comorbilidades. ¿Tratamiento inicial preferido?',
      opts: ['Atenolol solo', 'Combinación en una sola pastilla de IECA/ARA-II con calcioantagonista o tiazida', 'Hidralazina', 'Furosemida', 'Solo dieta por 6 meses'],
      ans: 1,
      exp: 'En la mayoría de los hipertensos se inicia con dos fármacos de primera línea, idealmente en una sola pastilla (mejor apego y control más rápido). Después se escala a A + C + D.',
      why: ['Los betabloqueadores no son de primera línea sin indicación específica.', '', 'No es primera línea (taquicardia refleja, retención de líquidos).', 'Los diuréticos de asa no son de primera línea en HTA sin IC o ERC avanzada.', 'Con 156/98 confirmada, el estilo de vida solo no basta.'],
      ref: 'ESC 2024 · AHA/ACC 2025' }),

    q({ id: 'hta-04', dif: 1,
      stem: 'Mujer de 56 años con DM2 e HTA, con cociente albúmina/creatinina de 280 mg/g. ¿Qué antihipertensivo debe formar parte de su tratamiento?',
      opts: ['Amlodipino como único fármaco', 'IECA o ARA-II', 'Hidroclorotiazida como único fármaco', 'Atenolol', 'Doxazosina'],
      ans: 1,
      exp: 'Con albuminuria (diabética o no), el IECA o ARA-II a dosis máxima tolerada reduce la proteinuria y la progresión renal. Se combina con otros fármacos para llegar a la meta y, en DM2 con ERC, con un iSGLT2.',
      why: ['Baja la PA pero no protege el riñón como el bloqueo del SRAA.', '', 'Útil como combinación, no como base en albuminuria.', 'No tiene indicación específica aquí.', 'No es primera línea.'],
      ref: 'KDIGO 2024 · ADA 2026' }),

    q({ id: 'hta-05', dif: 1,
      stem: 'Hombre de 61 años que inició enalapril hace 4 semanas. Tiene tos seca persistente que no lo deja dormir. Rx de tórax normal. ¿Qué haces?',
      opts: ['Agregar un antitusivo y seguir igual', 'Cambiar a un ARA-II', 'Agregar losartán al enalapril', 'Suspender todo antihipertensivo', 'Cambiar a otro IECA'],
      ans: 1,
      exp: 'La tos por IECA se debe a acumulación de bradicinina (la ECA también la degrada). Es efecto de clase: se cambia a un ARA-II, que no la produce. Desaparece en días a semanas.',
      why: ['No resuelve la causa.', '', 'Nunca se combinan IECA y ARA-II.', 'Necesita seguir tratado.', 'Todos los IECA la producen.'],
      ref: 'ESC 2024 HTA' }),

    q({ id: 'hta-06', dif: 2,
      stem: 'Hombre de 66 años con HTA resistente. Toma amlodipino 10 mg, losartán 100 mg y clortalidona 25 mg con buen apego confirmado. El MAPA confirma descontrol y se descartaron causas secundarias. K 4.3 mEq/L, TFG 70. ¿Qué agregas?',
      opts: ['Enalapril', 'Espironolactona', 'Atenolol', 'Furosemida', 'Hidralazina'],
      ans: 1,
      exp: 'En la HTA resistente verdadera, la espironolactona como cuarto fármaco fue la más eficaz (PATHWAY-2). Vigila potasio y creatinina, sobre todo con TFG baja.',
      why: ['Nunca IECA + ARA-II.', '', 'Menos eficaz que la espironolactona en este escenario.', 'Solo en ERC avanzada o sobrecarga de volumen.', 'Opción de reserva.'],
      ref: 'Williams B, et al. PATHWAY-2, Lancet 2015' }),

    q({ id: 'hta-07', dif: 2,
      stem: 'Mujer de 45 años con HTA de difícil control con 3 fármacos y K de 3.1 mEq/L sin diuréticos. ¿Qué estudio pides primero?',
      opts: ['Metanefrinas en plasma', 'Cociente aldosterona/renina', 'Cortisol libre urinario', 'Angiografía renal', 'Ecocardiograma'],
      ans: 1,
      exp: 'HTA resistente + hipokalemia espontánea = sospecha de hiperaldosteronismo primario, la causa endocrina más frecuente de HTA secundaria. Tamizaje: cociente aldosterona/renina; confirmación con prueba de supresión; luego TC suprarrenal y, si se piensa en cirugía, cateterismo de venas suprarrenales.',
      why: ['El feocromocitoma da crisis de cefalea, sudoración y palpitaciones.', '', 'Se pide si hay fenotipo de Cushing.', 'Es invasiva y no es el primer estudio.', 'No busca la causa.'],
      ref: 'Endocrine Society 2016 hiperaldosteronismo primario' }),

    q({ id: 'hta-08', dif: 2,
      stem: 'Mujer de 27 años con HTA de 6 meses, PA 168/104 mmHg, sin antecedentes familiares. Soplo abdominal periumbilical. ¿Causa más probable y conducta?',
      opts: ['HTA esencial; tiazida', 'Displasia fibromuscular de arteria renal; imagen vascular (Doppler, angio-TC o angio-RM) y angioplastia con balón', 'Coartación aórtica; cirugía inmediata', 'Hiperaldosteronismo; espironolactona', 'Feocromocitoma; betabloqueador'],
      ans: 1,
      exp: 'Mujer joven + HTA + soplo abdominal = estenosis de arteria renal por displasia fibromuscular (imagen en “cuentas de rosario”). Responde muy bien a angioplastia con balón, generalmente sin stent. La aterosclerótica (adultos mayores) se trata sobre todo con medicamentos.',
      why: ['El inicio joven y el soplo apuntan a causa secundaria.', '', 'Daría diferencia de PA entre brazos y piernas.', 'No hay hipokalemia ni HTA resistente descrita.', 'No hay crisis adrenérgicas, y el betabloqueador solo está contraindicado en feocromocitoma.'],
      ref: 'ESC 2024 HTA · SCAI/SVM displasia fibromuscular' }),

    q({ id: 'hta-09', dif: 2,
      stem: 'Hombre de 38 años con episodios de cefalea intensa, palpitaciones y sudoración profusa con PA de 220/130 durante las crisis. ¿Qué estudio pides y qué precaución tienes con el tratamiento?',
      opts: ['TSH; propranolol', 'Metanefrinas libres en plasma; bloqueo alfa (fenoxibenzamina o doxazosina) antes de cualquier betabloqueador', 'Cortisol; ketoconazol', 'Renina; IECA', 'Ecocardiograma; diurético'],
      ans: 1,
      exp: 'La tríada cefalea + palpitaciones + diaforesis con crisis hipertensivas sugiere feocromocitoma. Se confirma con metanefrinas plasmáticas (o urinarias fraccionadas) y luego imagen. Antes de la cirugía: primero bloqueo alfa y después beta. Un betabloqueador solo deja la estimulación alfa sin oposición: crisis hipertensiva.',
      why: ['El hipertiroidismo no da crisis tan graves, y el propranolol solo es peligroso si es feocromocitoma.', '', 'El cuadro no es de Cushing.', 'No es la sospecha principal.', 'No busca la causa.'],
      ref: 'Endocrine Society 2014 feocromocitoma' }),

    q({ id: 'hta-10', dif: 1,
      stem: 'Hombre de 19 años con HTA. PA en brazo derecho 162/88 y en piernas 110/70; pulsos femorales débiles y retrasados. La Rx de tórax muestra muescas en el borde inferior de las costillas. ¿Diagnóstico?',
      opts: ['Displasia fibromuscular', 'Coartación de la aorta', 'Feocromocitoma', 'Hiperaldosteronismo', 'Disección aórtica'],
      ans: 1,
      exp: 'PA alta en brazos y baja en piernas, pulsos femorales retrasados (retraso braquiofemoral) y muescas costales (por circulación colateral intercostal) = coartación aórtica. Se asocia a válvula aórtica bicúspide y síndrome de Turner.',
      why: ['No explica la diferencia brazos-piernas.', '', 'Causaría crisis adrenérgicas.', 'No causa este patrón.', 'Daría dolor súbito desgarrante.'],
      ref: 'ESC 2020 cardiopatías congénitas del adulto' }),

    q({ id: 'hta-11', dif: 2,
      stem: 'Hombre de 59 años con dolor torácico desgarrante irradiado a la espalda. PA 200/110 mmHg, FC 104. Angio-TC: disección aórtica tipo B. ¿Manejo inicial de la PA?',
      opts: ['Nitroprusiato solo', 'Esmolol o labetalol IV para FC <60 y PAS <120 en la primera hora; después vasodilatador si hace falta', 'Bajar la PAM solo 25% en 24 h', 'Nifedipino sublingual', 'Hidralazina IV sola'],
      ans: 1,
      exp: 'En la disección la meta es reducir la fuerza de eyección (dP/dt): primero betabloqueador IV para FC <60 y luego, si es necesario, vasodilatador para PAS <120 mmHg, todo en la primera hora. Es la excepción a la regla del 25%.',
      why: ['Un vasodilatador sin betabloqueo previo causa taquicardia refleja y empeora la disección.', '', 'Esa regla no aplica a la disección.', 'Proscrito.', 'Causa taquicardia refleja.'],
      ref: 'ESC 2024 HTA · ACC/AHA 2022 enfermedad aórtica' }),

    q({ id: 'hta-12', dif: 1,
      stem: 'Hombre de 55 años que se quedó sin sus antihipertensivos hace una semana. PA 210/122 mmHg, asintomático, exploración neurológica y fondo de ojo normales, ECG y creatinina sin cambios. ¿Qué haces?',
      opts: ['Nicardipino IV en terapia intensiva', 'Nifedipino sublingual', 'Reiniciar su tratamiento oral, descenso gradual en 24–48 h y cita cercana', 'Furosemida IV', 'Bajar la PA a 120/80 en una hora'],
      ans: 2,
      exp: 'Sin daño agudo a órgano blanco es urgencia hipertensiva: tratamiento oral y descenso gradual. Bajarla rápido no da beneficio y puede causar isquemia.',
      why: ['Es una urgencia, no una emergencia.', 'Proscrito por descensos bruscos e impredecibles.', '', 'Sin sobrecarga de volumen no está indicada.', 'Peligroso.'],
      ref: 'ESC 2024 HTA' }),

    q({ id: 'hta-13', dif: 1,
      stem: 'Mujer de 30 años con HTA crónica controlada con enalapril. Tiene 7 semanas de embarazo. ¿Qué haces?',
      opts: ['Continuar el enalapril', 'Cambiar a losartán', 'Cambiar a labetalol o nifedipino de liberación prolongada', 'Suspender todo y vigilar', 'Cambiar a espironolactona'],
      ans: 2,
      exp: 'IECA y ARA-II son fetotóxicos (sobre todo en 2º y 3º trimestres: oligohidramnios, falla renal fetal). Se cambian en cuanto se sabe del embarazo por labetalol, nifedipino o metildopa.',
      why: ['Contraindicado en el embarazo.', 'También contraindicado.', '', 'La HTA crónica en el embarazo debe tratarse.', 'Efecto antiandrogénico; no se usa.'],
      ref: 'ESC 2024 HTA · ACOG' }),

    q({ id: 'hta-14', dif: 1,
      stem: 'Hombre de 63 años con HTA que inició hidroclorotiazida hace 2 meses. Hoy tiene la primera MTF roja, caliente y muy dolorosa. ¿Qué relación tiene con su tratamiento?',
      opts: ['Ninguna', 'Las tiazidas reducen la excreción de ácido úrico y desencadenan gota; considerar cambiar a losartán o amlodipino', 'Es una reacción alérgica a sulfas', 'Es hipokalemia', 'Es un efecto del IECA'],
      ans: 1,
      exp: 'Las tiazidas (y los diuréticos de asa) aumentan la reabsorción de urato y desencadenan gota. Tras tratar el ataque, conviene cambiar a otro antihipertensivo; el losartán además tiene efecto uricosúrico.',
      why: ['Es una asociación clásica.', '', 'La presentación es de gota, no de alergia.', 'La hipokalemia no da monoartritis.', 'No toma IECA.'],
      ref: 'ACR 2020 gota' }),

    q({ id: 'hta-15', dif: 2,
      stem: 'Hombre de 70 años con HTA tratada con lisinopril. Inicia losartán por indicación de otro médico. A las 2 semanas: K 6.4 mEq/L y Cr de 1.1 a 1.9 mg/dL. ¿Cuál fue el error?',
      opts: ['Usar un ARA-II en mayores de 65 años', 'Combinar IECA + ARA-II', 'No dar diurético', 'No medir el ácido úrico', 'Ninguno; es esperable'],
      ans: 1,
      exp: 'El doble bloqueo del SRAA (IECA + ARA-II o + aliskirén) no reduce eventos y aumenta hiperkalemia, LRA e hipotensión (ONTARGET, VA NEPHRON-D). Nunca se combinan.',
      why: ['Los ARA-II se usan sin problema en adultos mayores.', '', 'No explica la hiperkalemia ni la LRA.', 'No tiene relación.', 'Es un error de prescripción prevenible.'],
      ref: 'ONTARGET 2008 · ESC 2024' }),

    q({ id: 'hta-16', dif: 2,
      stem: 'Hombre de 47 años sin comorbilidades. PA promedio en consultorio de 136/86 mmHg en tres visitas, con técnica correcta. ¿Cómo se clasifica según la AHA/ACC 2025 y según la ESC 2024?',
      opts: ['Normal en ambas guías', 'AHA/ACC: estadio 1 · ESC: presión elevada', 'AHA/ACC: elevada · ESC: hipertensión', 'Hipertensión estadio 2 en ambas', 'AHA/ACC: estadio 1 · ESC: hipertensión'],
      ans: 1,
      exp: 'La AHA/ACC 2025 llama estadio 1 a 130–139/80–89 y estadio 2 a ≥140/90. La ESC 2024 reserva “hipertensión” para ≥140/90 y llama “presión elevada” a 120–139/70–89. En ambas, el siguiente paso es confirmar fuera del consultorio y estimar el riesgo cardiovascular para decidir si necesita fármaco.',
      why: ['Ambas guías lo consideran por arriba de lo normal.', '', 'Para la AHA/ACC, “elevada” es 120–129 con diastólica <80; para la ESC, la hipertensión empieza en 140/90.', 'El estadio 2 empieza en 140/90.', 'Para la ESC, 136/86 todavía no es hipertensión.'],
      ref: 'ESC 2024 HTA · AHA/ACC 2025 HTA' }),

    q({ id: 'hta-17', dif: 2,
      stem: 'Hombre de 72 años, fumador, con enfermedad arterial periférica. Inició enalapril hace 10 días y su Cr subió de 1.2 a 2.1 mg/dL. Ha tenido dos episodios de edema pulmonar súbito con FEVI normal. USG: riñón derecho de 8.5 cm e izquierdo de 10.8 cm. ¿Qué sospechas?',
      opts: ['Nefropatía hipertensiva benigna', 'Estenosis aterosclerótica de arterias renales', 'Glomerulonefritis rápidamente progresiva', 'Nefritis intersticial por enalapril', 'Hiperaldosteronismo primario'],
      ans: 1,
      exp: 'Aterosclerosis difusa + Cr que sube >30% con IECA + edema pulmonar súbito (“flash”) + asimetría renal >1.5 cm = estenosis aterosclerótica de arteria renal, probablemente bilateral o de un riñón funcionalmente único. Se confirma con Doppler, angio-TC o angio-RM. El tratamiento de base es médico (estatina, antiagregante, control de PA); la revascularización se reserva para casos como el edema pulmonar recurrente o el deterioro renal rápido.',
      why: ['No explica el ascenso brusco con el IECA ni el edema pulmonar súbito.', '', 'Daría sedimento activo con hematuria y cilindros eritrocitarios.', 'El cuadro es hemodinámico, no alérgico.', 'Da hipokalemia y HTA resistente, no este patrón.'],
      ref: 'ESC 2024 HTA · CORAL, N Engl J Med 2014' }),

    q({ id: 'hta-18', dif: 3,
      stem: 'Mujer de 74 años con EVC isquémico de 9 h de evolución; no es candidata a trombólisis ni a trombectomía. PA 196/104 mmHg, sin otro daño agudo a órgano blanco. ¿Qué haces con la PA?',
      opts: ['Bajarla a <140/90 en la primera hora con nicardipino', 'No bajarla de forma activa por ahora: tratar solo si llega a ≥220/120', 'Nifedipino sublingual', 'Bajarla a <185/110 de inmediato', 'Labetalol IV para PAS <120'],
      ans: 1,
      exp: 'En el EVC isquémico sin reperfusión se tolera la hipertensión para sostener la perfusión de la penumbra. Solo se trata si la PA es ≥220/120, bajándola ≈15% en las primeras 24 h. Si fuera candidata a trombólisis, la meta sería <185/110 antes y <180/105 después.',
      why: ['Un descenso rápido puede ampliar el infarto.', '', 'Descenso brusco e impredecible; proscrito.', 'Esa meta es solo para candidatos a trombólisis.', 'Esa meta es de la disección aórtica.'],
      ref: 'AHA/ASA 2019 EVC isquémico agudo' }),

    q({ id: 'hta-19', dif: 2,
      stem: 'Hombre de 29 años con dolor torácico, agitación, diaforesis y midriasis 1 h después de consumir cocaína. PA 192/116 mmHg, FC 124. ECG sin elevación del ST. ¿Tratamiento inicial?',
      opts: ['Metoprolol IV', 'Benzodiacepina IV (más nitroglicerina si persiste el dolor)', 'Nifedipino sublingual', 'Haloperidol IM', 'Fibrinólisis'],
      ans: 1,
      exp: 'La cocaína produce un estado hiperadrenérgico. Las benzodiacepinas reducen la agitación, la taquicardia y la PA; la nitroglicerina y los calcioantagonistas alivian la vasoconstricción coronaria, y la fentolamina sirve si la hipertensión persiste. En la intoxicación aguda se evita el betabloqueador: deja la estimulación alfa sin oposición.',
      why: ['Puede empeorar la vasoconstricción coronaria y la hipertensión (alfa sin oposición).', '', 'Proscrito por descensos bruscos e impredecibles.', 'Baja el umbral convulsivo y empeora la hipertermia.', 'No hay elevación del ST.'],
      ref: 'McCord J, et al. AHA cocaína y dolor torácico, Circulation 2008' }),

    q({ id: 'hta-20', dif: 2,
      stem: 'Mujer de 58 años con HTA tratada con amlodipino 10 mg. Desde que le subieron la dosis tiene edema maleolar bilateral. Sin disnea ni ingurgitación yugular; albúmina, función renal y TSH normales. ¿Qué haces?',
      opts: ['Agregar furosemida', 'Bajar el amlodipino y agregar un IECA o ARA-II', 'Ecocardiograma urgente por IC', 'Cambiar a nifedipino', 'Restricción de líquidos'],
      ans: 1,
      exp: 'Los calcioantagonistas dihidropiridínicos dilatan la arteriola precapilar pero no la vénula: sube la presión hidrostática del capilar y aparece edema dependiente de la dosis. No hay exceso de volumen, por eso el diurético casi no ayuda. Bajar la dosis y agregar IECA o ARA-II (que también dilatan el lado venoso) lo reduce y mejora el control de la PA.',
      why: ['El edema no es por volumen: responde poco al diurético y suma efectos adversos.', '', 'No hay datos de IC; el edema es efecto del fármaco.', 'También es dihidropiridínico y da el mismo efecto.', 'No corrige el mecanismo.'],
      ref: 'ESC 2024 HTA' })
  ],

  cases: [
    { id: 'g-hta', topic: 'hta', subj: 'nefro',
      title: 'Se acabaron las pastillas', place: 'Urgencias',
      patient: { name: 'Rubén', age: 52, sex: 'H', skin: '#B97A52', hair: '#1E1A18', gown: '#F2B66D' },
      intro: 'Trabajador de construcción con HTA desde hace 6 años. Llega porque en la farmacia le tomaron la presión y le salió “muy alta”.',
      extra: { label: 'K⁺', unit: 'mEq/L' },
      start: { FC: 82, PAS: 212, PAD: 124, SpO2: 97, FR: 16, X: 3.2 },
      nodes: [
        { tag: 'Llegada', ecg: 'normal',
          text: 'Se le acabaron sus pastillas hace 10 días. Está asintomático. Exploración neurológica y fondo de ojo normales; ECG y creatinina sin cambios. K 3.2 mEq/L.',
          q: '¿Cómo lo manejas?',
          A: { t: 'Nicardipino IV en terapia intensiva', ok: false, res: 'Ocupaste una cama de terapia intensiva y lo expusiste a un descenso rápido sin necesidad.' },
          B: { t: 'Urgencia: reiniciar su tratamiento oral, descenso gradual en 24–48 h y cita cercana', ok: true, res: 'Reinicias losartán y amlodipino. A las 2 h está en 178/104 y se va con cita en 1 semana.', vit: { PAS: 178, PAD: 104 } },
          why: 'Sin daño agudo a órgano blanco es urgencia hipertensiva: vía oral y descenso gradual.' },
        { tag: 'Dos meses después', ecg: 'tachy', vit: { FC: 102, PAS: 232, PAD: 134, X: 3.0 },
          text: 'Regresa con cefalea intensa, confusión y vómito. Fondo de ojo: papiledema y hemorragias en llama.',
          q: '¿Qué haces?',
          A: { t: 'Emergencia: terapia intensiva, labetalol o nicardipino IV y bajar la PAM ≤25% en la 1ª hora', ok: true, res: 'En 1 h la PA está en 182/108 y mejora el estado de alerta.', ecg: 'normal', vit: { FC: 88, PAS: 182, PAD: 108 } },
          B: { t: 'Llevarlo a 120/80 en la primera hora', ok: false, res: 'La PA cae de golpe y aparece déficit focal: isquemia cerebral por hipoperfusión.', vit: { PAS: 118, PAD: 70 } },
          why: 'Encefalopatía hipertensiva = emergencia. IV titulable, PAM ↓ ≤25% en la primera hora y luego gradual. Descensos bruscos causan isquemia.' },
        { tag: 'Al estabilizarse', ecg: 'normal', vit: { FC: 78, PAS: 156, PAD: 96, X: 2.9 },
          text: 'Con 3 fármacos a dosis máximas (incluido diurético) sigue mal controlado. K 2.9 mEq/L. Niega usar AINE o regaliz.',
          q: '¿Qué estudio pides?',
          A: { t: 'Cociente aldosterona/renina', ok: true, res: 'Aldosterona alta con renina suprimida; la prueba de supresión con solución salina lo confirma.' },
          B: { t: 'Agregar furosemida y no estudiar más', ok: false, res: 'La hipokalemia empeora y sigue descontrolado.', vit: { X: 2.6 } },
          why: 'HTA resistente + hipokalemia = sospecha de hiperaldosteronismo primario: tamizaje con cociente aldosterona/renina.' },
        { tag: 'Resultados', ecg: 'normal',
          text: 'TC: adenoma suprarrenal izquierdo de 1.8 cm. El cateterismo de venas suprarrenales confirma producción unilateral.',
          q: '¿Tratamiento definitivo?',
          A: { t: 'Suprarrenalectomía laparoscópica izquierda', ok: true, res: 'A los 3 meses tiene PA de 132/82 con un solo fármaco y K normal.', vit: { PAS: 132, PAD: 82, X: 4.2 } },
          B: { t: 'Espironolactona de por vida sin cirugía', ok: false, res: 'Es la opción para enfermedad bilateral o si no puede operarse; aquí la cirugía puede curarlo.' },
          why: 'Aldosteronismo unilateral (adenoma) → suprarrenalectomía. Bilateral (hiperplasia) → antagonista mineralocorticoide.' }
      ] }
  ]
};
