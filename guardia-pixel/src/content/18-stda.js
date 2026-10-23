// Tema 9 · Enfermedad ácido-péptica y STDA no variceal (Gastroenterología, semana 3)
const T = { topic: 'stda', subj: 'gastro' };
const q = (o) => ({ ...T, ...o });

export default {
  lessons: {
    stda: {
      hook: 'Úlcera = H. pylori o AINE hasta demostrar lo contrario. En el sangrado: reanima, IBP, endoscopia en 24 h y decide según Forrest.',
      anim: 'stda',
      compare: ['duodenal-gastrica'],
      nn: [['gi-bleed-etiology-pathophysiology-clinical-features-diagnosis-treatment', 'GI Bleed'], ['stomach-disorders', 'Stomach Disorders']],
      yt: 'peptic ulcer disease H pylori',
      video: [
        { ch: 'Por qué se forma una úlcera', sc: [
          { v: { k: 'title', t: 'Enfermedad ácido-péptica y STDA', s: 'Tema 9 · Gastroenterología' },
            say: 'Bienvenido a la guardia. Hoy vas a entender por qué se forma una úlcera péptica y cómo se trata Helicobacter pylori. Después vas a manejar, paso a paso, un sangrado de tubo digestivo alto. Es un tema que siempre aparece en el examen.' },
          { v: { k: 'case', t: 'Llega a urgencias', p: { name: 'Armando', age: 59, sex: 'H', skin: '#C08060', hair: '#4A3A2A', gown: '#F2B66D' }, text: 'Albañil con lumbalgia; toma diclofenaco a diario. Hoy, 3 evacuaciones negras y mareo al ponerse de pie.', vit: { FC: '118', PA: '92/58', Hb: '6.8' } },
            say: 'Conoce a Armando, albañil de cincuenta y nueve años. Toma diclofenaco todos los días por dolor de espalda. Hoy tuvo tres evacuaciones negras y se mareó al levantarse. Llega taquicárdico, con presión baja y hemoglobina de seis punto ocho. Antes de tratarlo, entendamos qué le pasó a su estómago.' },
          { v: { k: 'anim', id: 'stda', step: 0 },
            say: 'Tu estómago produce ácido todo el día y, aun así, no se digiere a sí mismo. Lo protege una capa de moco con bicarbonato, sostenida por las prostaglandinas. La úlcera aparece cuando el ácido le gana a esa defensa.' },
          { v: { k: 'anim', id: 'stda', step: 1 },
            say: 'El primer agresor es Helicobacter pylori, un bacilo gramnegativo. Su ureasa convierte la urea en amoníaco, que lo protege del ácido. Inflama la mucosa y la debilita. Además, causa adenocarcinoma gástrico y linfoma MALT.' },
          { v: { k: 'anim', id: 'stda', step: 2 },
            say: 'El segundo agresor son los antiinflamatorios no esteroideos, o AINE, incluida la aspirina. Bloquean la ciclooxigenasa uno y bajan las prostaglandinas. Sin ellas hay menos moco y menos bicarbonato. Eso le pasó a Armando con su diclofenaco.' },
          { v: { k: 'anim', id: 'stda', step: 3 },
            say: 'Cuando el ácido atraviesa la mucosa y llega a la submucosa, ya es una úlcera. Si erosiona un vaso, sangra. Grábatelo: una úlcera es por Helicobacter o por AINE hasta demostrar lo contrario.' }
        ] },
        { ch: 'Duodenal o gástrica', sc: [
          { v: { k: 'vs', cmp: 'duodenal-gastrica', rows: [1, 3, 4] },
            say: 'La úlcera duodenal es la más común. Su dolor mejora al comer y regresa en ayuno o de noche. La gástrica empeora con la comida y hace bajar de peso. Y lo más importante: la úlcera gástrica puede ser un cáncer ulcerado. Por eso siempre se biopsia y se confirma que cicatrizó.' },
          { v: { k: 'list', t: 'Piensa en gastrinoma si…', items: ['Úlceras múltiples o refractarias a IBP', 'Úlceras en yeyuno, más allá del duodeno', 'Diarrea crónica', 'Hipercalcemia: piensa en MEN1', 'Pide gastrina en ayuno y prueba de secretina'] },
            say: 'Si las úlceras son múltiples, no cicatrizan con inhibidores de la bomba de protones o aparecen en el yeyuno, piensa en un gastrinoma: el síndrome de Zollinger-Ellison. Suele haber diarrea. Si además hay hipercalcemia, piensa en neoplasia endocrina múltiple tipo uno. Pide gastrina en ayuno y prueba de secretina.' }
        ] },
        { ch: 'Helicobacter y AINE', sc: [
          { v: { k: 'list', t: 'Cómo buscar H. pylori', items: ['Sin endoscopia: aliento con urea o antígeno fecal', 'Con endoscopia: ureasa rápida o histología', 'Antes: sin IBP 2 sem; sin antibióticos 4 sem', 'Serología: no distingue infección activa'] },
            say: 'Para buscar Helicobacter sin endoscopia, usa la prueba de aliento con urea o el antígeno en heces. Si ya hay endoscopia, la prueba rápida de ureasa o la histología. Suspende el inhibidor de bomba dos semanas antes, y los antibióticos o el bismuto cuatro semanas antes, o tendrás falsos negativos. La serología no distingue una infección activa de una pasada.' },
          { v: { k: 'list', t: 'Primera línea en México · 14 días', items: ['IBP dos veces al día', 'Subcitrato de bismuto', 'Tetraciclina', 'Metronidazol', 'Triple con claritromicina: solo si es sensible'] },
            say: 'En México hay mucha resistencia a la claritromicina. Por eso la primera línea es la terapia cuádruple con bismuto por catorce días: inhibidor de bomba, bismuto, tetraciclina y metronidazol. La triple con claritromicina solo se usa si sabes que la cepa es sensible.' },
          { v: { k: 'quiz', q: 'Armando terminó la cuádruple hace 1 mes. ¿Cómo confirmas la curación?', opts: ['Serología para H. pylori', 'Aliento o antígeno fecal, sin IBP 2 sem'], a: 1 },
            say: 'Pausa. Armando terminó su tratamiento hace un mes. ¿Cómo confirmas que se curó?',
            exp: 'Con prueba de aliento o antígeno fecal, al menos cuatro semanas después de terminar y sin inhibidor de bomba las dos semanas previas. La serología se queda positiva por meses, así que no sirve para confirmar la curación.' },
          { v: { k: 'list', t: 'AINE: a quién proteger', items: ['Edad >65 años o úlcera previa', 'Dosis altas o dos AINE juntos', 'Con anticoagulante, esteroide o ISRS', 'Protección: IBP (o misoprostol)', 'Muy alto riesgo: celecoxib + IBP'] },
            say: 'Con los AINE, el riesgo de úlcera sube después de los sesenta y cinco años y con una úlcera previa. También con dosis altas, o si se combinan con anticoagulantes, esteroides o antidepresivos inhibidores de recaptura de serotonina. A ellos los proteges con inhibidor de bomba. En muy alto riesgo, celecoxib más inhibidor de bomba. Y antes de un AINE crónico, busca y erradica Helicobacter.' }
        ] },
        { ch: 'Sangrado digestivo alto', sc: [
          { v: { k: 'flow', t: 'Primeras horas', steps: ['2 vías gruesas y cristaloides', 'Transfundir si Hb <7 g/dL', 'IBP IV en bolo', 'Eritromicina IV antes de endoscopia', 'Endoscopia en ≤24 h'] },
            say: 'Volvamos con Armando. Melena, hematemesis o posos de café te hablan de un sangrado alto. Primero se reanima: dos vías periféricas gruesas y cristaloides. Luego, inhibidor de bomba intravenoso en bolo. Eritromicina intravenosa de treinta a ciento veinte minutos antes de la endoscopia, para vaciar el estómago de sangre. Y endoscopia en las primeras veinticuatro horas, ya estable.' },
          { v: { k: 'big', h: 'Transfundir si la Hb es', t: '<7', u: 'g/dL', s: 'Estrategia restrictiva. Con enfermedad cardiovascular, umbral de ≈8 g/dL.' },
            say: 'La transfusión es restrictiva: se transfunde con hemoglobina menor de siete gramos por decilitro. Si tiene enfermedad cardiovascular, el umbral sube a cerca de ocho. Transfundir de más aumenta el resangrado.' },
          { v: { k: 'list', t: 'Glasgow-Blatchford', items: ['BUN y hemoglobina', 'Presión sistólica y frecuencia cardiaca', 'Melena o síncope', 'Hepatopatía o insuficiencia cardiaca', '0–1 puntos: manejo ambulatorio'] },
            say: 'Para decidir quién se puede ir a casa, usa la escala de Glasgow-Blatchford. Suma el nitrógeno ureico, la hemoglobina, la presión sistólica y la frecuencia cardiaca. También la melena, el síncope, la hepatopatía y la insuficiencia cardiaca. Con cero o un punto, el riesgo es muy bajo y puede manejarse de forma ambulatoria.' },
          { v: { k: 'tip', kind: 'trap', t: 'Nada de ácido tranexámico (HALT-IT) ni sonda nasogástrica de rutina. Endoscopia en <6 h no reduce la mortalidad: primero reanima.' },
            say: 'Cuidado con estas trampas. El ácido tranexámico no reduce la mortalidad y aumenta las trombosis venosas, según el estudio HALT-IT. La sonda nasogástrica no se pone de rutina. Y hacer la endoscopia antes de seis horas no reduce la mortalidad: primero se reanima.' }
        ] },
        { ch: 'Forrest: qué hacer en la endoscopia', sc: [
          { v: { k: 'mnemo', t: 'Forrest: “1 sangra, 2 avisa, 3 limpia”', d: 'I: sangrado activo (Ia chorro, Ib capa). II: estigmas (IIa vaso visible, IIb coágulo, IIc base pigmentada). III: base limpia.' },
            say: 'En la endoscopia, la úlcera se clasifica con Forrest. Recuerda: uno sangra, dos avisa, tres limpia. Forrest uno es sangrado activo, en chorro o en capa. Forrest dos son estigmas que avisan: vaso visible, coágulo adherido o base pigmentada. Forrest tres es base limpia.' },
          { v: { k: 'list', t: 'Conducta según Forrest', items: ['Ia, Ib, IIa: terapia endoscópica dual', 'Luego: IBP a dosis altas por 72 h', 'IIb: retirar el coágulo y tratar la base', 'IIc y III: IBP oral, dieta y alta temprana', 'Adrenalina sola: nunca basta'] },
            say: 'Uno A, uno B y dos A son de alto riesgo. Necesitan terapia endoscópica dual: adrenalina más un método térmico o clips. Después, inhibidor de bomba a dosis altas por setenta y dos horas. En el coágulo adherido, se intenta retirarlo y tratar lo que hay debajo. Con base pigmentada o limpia: inhibidor de bomba oral, dieta y alta temprana.' },
          { v: { k: 'quiz', q: 'Úlcera duodenal con vaso visible que no sangra. ¿Qué haces?', opts: ['IBP oral y alta', 'Terapia dual + IBP a dosis altas'], a: 1 },
            say: 'Pausa. En la endoscopia ves una úlcera duodenal con un vaso visible que no está sangrando. ¿Qué haces?',
            exp: 'Es un Forrest dos A, de alto riesgo. Aunque no sangre ahora, puede resangrar. Lleva terapia endoscópica dual y después inhibidor de bomba a dosis altas por setenta y dos horas.' },
          { v: { k: 'list', t: 'Después de la hemostasia', items: ['Resangrado: segunda endoscopia', 'Si falla: embolización por radiología', 'Cirugía: último recurso', 'Aspirina de prevención 2.ª: reanudar pronto', 'AINE: suspender'] },
            say: 'Si vuelve a sangrar, haz una segunda endoscopia. Si falla, embolización por radiología intervencionista, y la cirugía queda como último recurso. Si toma aspirina por un infarto o un stent, no la suspendas para siempre: reanúdala pronto, con inhibidor de bomba. El AINE, en cambio, se suspende.' },
          { v: { k: 'anim', id: 'stda', step: 4 },
            say: 'Los inhibidores de bomba bloquean la bomba de hidrógeno y potasio de la célula parietal, el último paso de la secreción de ácido. Con menos ácido, el coágulo se estabiliza y la úlcera cicatriza. Los antibióticos se encargan de Helicobacter.' }
        ] },
        { ch: 'Complicaciones y trampas', sc: [
          { v: { k: 'list', t: 'Otras complicaciones', items: ['Perforación: abdomen en tabla y aire libre', 'Obstrucción pilórica: vómito y alcalosis', 'Penetración a páncreas: dolor a la espalda', 'Duodenal posterior: arteria gastroduodenal'] },
            say: 'La complicación más común es el sangrado. La perforación da dolor súbito, abdomen en tabla y aire libre bajo el diafragma: va a cirugía. La obstrucción pilórica da vómito de comida retenida y alcalosis metabólica hipoclorémica e hipokalémica. Si penetra al páncreas, el dolor se va a la espalda. Y la úlcera duodenal posterior puede erosionar la arteria gastroduodenal.' },
          { v: { k: 'quiz', q: 'Toma naproxeno. Dolor súbito, abdomen en tabla y aire bajo el diafragma. ¿Qué sigue?', opts: ['Endoscopia urgente', 'Cirugía urgente'], a: 1 },
            say: 'Pausa. Una mujer que toma naproxeno llega con dolor epigástrico súbito, abdomen en tabla y aire bajo el diafragma. ¿Qué sigue?',
            exp: 'Cirugía urgente, con reanimación, inhibidor de bomba intravenoso y antibióticos. La endoscopia está contraindicada en una perforación, porque el aire que se insufla la empeora.' },
          { v: { k: 'tip', kind: 'pearl', t: 'Úlcera = H. pylori o AINE. En el STDA: reanima, IBP IV, endoscopia en ≤24 h y trata Ia, Ib y IIa. Confirma la erradicación con aliento o antígeno fecal.' },
            say: 'La perla para el examen: toda úlcera es por Helicobacter o por AINE hasta demostrar lo contrario. En el sangrado, reanima, da inhibidor de bomba, haz endoscopia en veinticuatro horas y trata los Forrest de alto riesgo. Ahora ve a las preguntas del tema y ponte a prueba.' }
        ] }
      ],
      sections: [
        { h: 'Úlcera péptica', html: `
<ul>
<li><b>Causas</b>: <i>H. pylori</i> y AINE/aspirina (la gran mayoría); también estrés en terapia intensiva, tabaco, Zollinger-Ellison, cáncer.</li>
<li><b>Duodenal</b>: más frecuente; el dolor mejora al comer y regresa 2–3 h después o de noche.</li>
<li><b>Gástrica</b>: el dolor empeora al comer, hay pérdida de peso; se biopsia siempre (cáncer) y se confirma su cicatrización.</li>
<li><b>Zollinger-Ellison</b> (gastrinoma): úlceras múltiples, refractarias o más allá del duodeno, diarrea. Gastrina en ayuno alta (sin IBP) y prueba de secretina. Asociado a MEN1.</li>
<li><b>AINE</b>: inhiben la COX-1 → menos prostaglandinas protectoras. Riesgo mayor con edad &gt;65, úlcera previa, dosis altas, anticoagulantes, esteroides o ISRS. Prevención: IBP (o misoprostol); en muy alto riesgo, celecoxib + IBP. Erradica <i>H. pylori</i> antes de un AINE crónico.</li>
</ul>` },
        { h: 'Helicobacter pylori', html: `
<ul>
<li>Bacilo gramnegativo con ureasa. Causa gastritis, úlcera, adenocarcinoma gástrico y linfoma MALT.</li>
<li><b>Diagnóstico sin endoscopia</b>: prueba de aliento con urea o antígeno en heces (suspender IBP 2 semanas y antibióticos o bismuto 4 semanas antes). <b>Con endoscopia</b>: prueba rápida de ureasa, histología, cultivo. La serología no distingue infección activa: no sirve para confirmar curación.</li>
<li><b>Tratamiento de primera línea</b>: <b>cuádruple con bismuto por 14 días</b> (IBP + bismuto + tetraciclina + metronidazol), sobre todo donde hay resistencia a claritromicina, como en México.</li>
<li>Triple con claritromicina solo si se sabe que la cepa es sensible. Alternativas: vonoprazán + amoxicilina, o esquemas con rifabutina.</li>
<li><b>Confirmar erradicación</b> ≥4 semanas después del tratamiento (aliento o antígeno fecal), sin IBP 2 semanas antes.</li>
</ul>` },
        { h: 'Complicaciones de la úlcera', html: `
<ul>
<li><b>Sangrado</b>: la más común. Una úlcera duodenal posterior puede erosionar la arteria gastroduodenal.</li>
<li><b>Perforación</b>: dolor súbito intenso, abdomen en tabla, aire libre subdiafragmático en Rx de tórax de pie → cirugía.</li>
<li><b>Obstrucción pilórica</b>: vómito de alimento no digerido, chapoteo gástrico, alcalosis metabólica hipoclorémica e hipokalémica.</li>
<li><b>Penetración</b> a páncreas: dolor que se irradia a la espalda y amilasa alta.</li>
</ul>` },
        { h: 'Sangrado de tubo digestivo alto no variceal', html: `
<ul>
<li>Hematemesis, “posos de café”, melena; BUN/Cr &gt;30 sugiere origen alto.</li>
<li><b>Reanimación</b>: dos vías gruesas, cristaloides, transfundir con Hb &lt;7 (≈8 con enfermedad cardiovascular).</li>
<li><b>Glasgow-Blatchford</b> (BUN, Hb, PAS, FC, melena, síncope, hepatopatía e insuficiencia cardiaca) 0–1: puede manejarse de forma ambulatoria. Calculadora en Más → Calculadoras.</li>
<li><b>IBP IV</b> (bolo y dosis altas), <b>eritromicina IV</b> 30–120 min antes de la endoscopia para vaciar el estómago.</li>
<li><b>Endoscopia en ≤24 h</b> tras reanimar (hacerla en &lt;6 h no reduce la mortalidad).</li>
<li>No uses sonda nasogástrica de rutina ni ácido tranexámico (HALT-IT).</li>
</ul>
<div class="tablewrap"><table class="mini">
<tr><th>Forrest</th><th>Hallazgo</th><th>Riesgo</th><th>Conducta</th></tr>
<tr><td>Ia</td><td>Sangrado en chorro</td><td>Alto</td><td rowspan="3">Terapia endoscópica dual (adrenalina + térmica o clips) + IBP a dosis altas 72 h</td></tr>
<tr><td>Ib</td><td>Sangrado en capa</td><td>Alto</td></tr>
<tr><td>IIa</td><td>Vaso visible</td><td>Alto</td></tr>
<tr><td>IIb</td><td>Coágulo adherido</td><td>Intermedio</td><td>Remover el coágulo y tratar lo que haya debajo</td></tr>
<tr><td>IIc</td><td>Base pigmentada</td><td>Bajo</td><td rowspan="2">IBP oral, dieta temprana, alta pronto</td></tr>
<tr><td>III</td><td>Base limpia</td><td>Bajo</td></tr>
</table></div>
<ul>
<li>La adrenalina sola no basta: siempre combinada.</li>
<li><b>Resangrado</b>: segunda endoscopia; si falla, embolización por radiología intervencionista; cirugía si no hay otra opción.</li>
<li><b>Aspirina en prevención secundaria</b>: reanudarla pronto (de inmediato si la úlcera es de bajo riesgo; hacia el día 3 si fue de alto riesgo), con IBP. Los AINE se suspenden.</li>
<li>Otras causas: Mallory-Weiss (desgarro tras vómito, se autolimita), Boerhaave (perforación esofágica: dolor torácico, enfisema, mediastinitis).</li>
</ul>` },
        { h: 'Diagnóstico diferencial del STDA', html: `
<div class="tablewrap"><table class="mini">
<tr><th>Causa</th><th>Pista</th><th>Conducta clave</th></tr>
<tr><td>Úlcera péptica</td><td>AINE o <i>H. pylori</i>; dolor epigástrico. La causa más común</td><td>IBP IV, endoscopia ≤24 h, Forrest</td></tr>
<tr><td>Várices esofágicas o gástricas</td><td>Cirrosis: ascitis, ictericia, arañas vasculares, plaquetas bajas</td><td>Vasoactivo (octreotida o terlipresina) + ceftriaxona antes de la endoscopia; ligadura en ≤12 h</td></tr>
<tr><td>Mallory-Weiss</td><td>Arcadas o vómito intenso previo (alcohol)</td><td>Suele autolimitarse; terapia endoscópica si sangra activamente</td></tr>
<tr><td>Esofagitis erosiva</td><td>ERGE de larga evolución; sangrado leve</td><td>IBP</td></tr>
<tr><td>Lesión de Dieulafoy</td><td>Arteria submucosa aberrante sin úlcera; sangrado masivo e intermitente</td><td>Terapia endoscópica (clips o ligadura)</td></tr>
<tr><td>Cáncer gástrico</td><td>Pérdida de peso, saciedad temprana, anemia crónica</td><td>Biopsia</td></tr>
<tr><td>Fístula aortoentérica</td><td>Injerto aórtico previo; “sangrado heraldo” pequeño</td><td>Angio-TC urgente y cirugía</td></tr>
</table></div>
<ul>
<li><b>¿Alto o bajo?</b> Hematemesis o posos de café = alto. La melena casi siempre es alta. Un BUN/Cr elevado apoya el origen alto (la sangre se digiere y se absorbe). Una hematoquecia masiva con inestabilidad también puede venir del tubo alto.</li>
<li><b>Boerhaave</b>: vómito violento → dolor torácico intenso, enfisema subcutáneo, derrame pleural izquierdo. No es un sangrado grande sino una perforación esofágica: TC o esofagograma con contraste hidrosoluble y cirugía.</li>
<li><b>Heces negras por bismuto o hierro</b>: formadas, sin el olor fétido ni el aspecto alquitranado de la melena, con signos vitales y Hb estables. No es sangrado.</li>
</ul>` },
        { h: 'Fármacos clave', html: `
<div class="tablewrap"><table class="mini">
<tr><th>Fármaco</th><th>Mecanismo</th><th>Efecto adverso clave</th><th>Ojo / contraindicación</th></tr>
<tr><td>IBP (omeprazol, pantoprazol, esomeprazol)</td><td>Bloqueo irreversible de la H⁺/K⁺ ATPasa (bomba de protones)</td><td>Uso prolongado: hipomagnesemia, déficit de B12, <i>C. difficile</i>, fracturas (asociación)</td><td>30–60 min antes del desayuno; suspender 2 semanas antes de buscar <i>H. pylori</i></td></tr>
<tr><td>Vonoprazán</td><td>Bloqueador de ácido competitivo con el potasio; efecto rápido, no depende de la comida</td><td>Hipergastrinemia</td><td>Alternativa en esquemas para <i>H. pylori</i> (dual con amoxicilina, ACG 2024)</td></tr>
<tr><td>Bismuto</td><td>Antimicrobiano tópico y citoprotector</td><td>Heces y lengua negras (no es melena)</td><td>Evitar en insuficiencia renal grave</td></tr>
<tr><td>Tetraciclina</td><td>Inhibe la subunidad ribosomal 30S</td><td>Fotosensibilidad, esofagitis por pastilla</td><td>Embarazo y niños &lt;8 años</td></tr>
<tr><td>Metronidazol</td><td>Daña el ADN bacteriano</td><td>Sabor metálico, efecto tipo disulfiram, neuropatía</td><td>No tomar alcohol</td></tr>
<tr><td>Claritromicina</td><td>Macrólido: inhibe la subunidad 50S</td><td>QT largo; interacciones (inhibe CYP3A4)</td><td>Alta resistencia en México: solo si la cepa es sensible</td></tr>
<tr><td>Misoprostol</td><td>Análogo de prostaglandina E1</td><td>Diarrea, cólico</td><td>Embarazo (abortivo)</td></tr>
<tr><td>Eritromicina IV</td><td>Agonista de motilina: vacía el estómago</td><td>QT largo</td><td>Una dosis 30–120 min antes de la endoscopia</td></tr>
</table></div>` },
        { h: 'Cómo lo preguntan en el examen', html: `
<ul>
<li><b>Dispepsia, &lt;60 años, sin datos de alarma</b> → probar y tratar <i>H. pylori</i> (aliento o antígeno fecal). Con alarma o ≥60 años → endoscopia.</li>
<li><b>Melena + AINE + taquicardia</b> → reanimar, transfundir si Hb &lt;7, IBP IV, eritromicina y endoscopia en ≤24 h. La trampa: endoscopia antes de reanimar, o ácido tranexámico.</li>
<li><b>“Vaso visible” o “sangrado en capa”</b> → terapia endoscópica dual + IBP a dosis altas 72 h. La trampa: adrenalina sola.</li>
<li><b>“¿Cómo confirmas la erradicación?”</b> → aliento o antígeno fecal ≥4 semanas después, sin IBP 2 semanas. La trampa: serología.</li>
<li><b>Úlceras múltiples o en yeyuno + diarrea (+ hipercalcemia)</b> → gastrinoma (MEN1): gastrina en ayuno y prueba de secretina.</li>
<li><b>Cirrótico con hematemesis</b> → asume várices: vasoactivo + ceftriaxona y endoscopia en ≤12 h.</li>
</ul>` }
      ],
      mnemo: { t: 'Forrest: “1 sangra, 2 avisa, 3 limpia”', d: 'Forrest I: sangrado activo (a chorro o en capa). Forrest II: estigmas que avisan (vaso visible, coágulo, base pigmentada). Forrest III: base limpia. Ia, Ib y IIa se tratan con terapia endoscópica dual.' },
      pearl: 'Para confirmar la erradicación de H. pylori pide prueba de aliento o antígeno fecal ≥4 semanas después, sin IBP las 2 semanas previas. La serología se queda positiva y no sirve.',
      trap: 'Triple esquema con claritromicina por 7 días en México: alta resistencia. La respuesta esperada suele ser la cuádruple con bismuto por 14 días.',
      guide: [
        'Primera línea para H. pylori: ACG 2024 prefiere la cuádruple con bismuto y deja la triple con claritromicina para cepas sensibles. El consenso mexicano también recomienda esquemas cuádruples por la resistencia local. ⚠️ Si tu profesor enseña otra combinación, apréndete esa para el examen.',
        'Momento de la endoscopia: ACG y ESGE coinciden en ≤24 h; la ESGE pide <12 h en pacientes de muy alto riesgo que siguen inestables.',
        'Umbral de transfusión: la ESGE 2021 transfunde con Hb ≤7 g/dL (≤8 con enfermedad cardiovascular aguda) y el consenso internacional de 2019 (Barkun) sugiere <8 g/dL. ⚠️ Depende de la guía; todas coinciden en una estrategia restrictiva.'
      ],
      refs: [
        'Laine L, et al. ACG Clinical Guideline: Upper Gastrointestinal and Ulcer Bleeding. Am J Gastroenterol 2021.',
        'Chey WD, et al. ACG Clinical Guideline: Treatment of Helicobacter pylori Infection. Am J Gastroenterol 2024.',
        'Gralnek IM, et al. ESGE Guideline: endoscopic diagnosis and management of nonvariceal upper GI hemorrhage. Endoscopy 2021.',
        'Bosques-Padilla FJ, et al. IV consenso mexicano sobre Helicobacter pylori. Rev Gastroenterol Méx 2018.'
      ]
    }
  },

  compares: {
    'duodenal-gastrica': {
      topic: 'stda', a: 'Úlcera duodenal', b: 'Úlcera gástrica',
      rows: [
        ['Frecuencia', 'Más común', 'Menos común'],
        ['Dolor y comida', 'Mejora al comer; duele en ayuno y de noche', 'Empeora al comer'],
        ['Peso', 'Puede subir (come para calmar el dolor)', 'Suele bajar'],
        ['Causa principal', 'H. pylori', 'AINE y H. pylori'],
        ['Riesgo de cáncer', 'Casi nulo', 'Hay que biopsiar siempre'],
        ['Seguimiento', 'Confirmar erradicación de H. pylori', 'Endoscopia de control para confirmar cicatrización'],
        ['Complicación típica', 'Sangrado (arteria gastroduodenal) y perforación', 'Sangrado (arteria gástrica izquierda)']
      ]
    }
  },

  anims: {
    stda: {
      title: 'De H. pylori a la úlcera',
      steps: [
        { cap: '<b>Mucosa protegida.</b> El ácido de las células parietales llena la luz gástrica, pero una capa de moco con bicarbonato (sostenida por las prostaglandinas) protege el epitelio.',
          labels: [[30, 10, 'Ácido (H⁺)'], [80, 52, 'Moco + bicarbonato'], [80, 78, 'Epitelio'], [130, 108, 'Célula parietal']] },
        { cap: '<b>H. pylori.</b> Su ureasa convierte la urea en amoníaco, que lo protege del ácido. Inflama la mucosa y debilita la barrera.',
          labels: [[46, 42, 'H. pylori'], [100, 28, 'Amoníaco'], [80, 78, 'Inflamación']] },
        { cap: '<b>AINE.</b> Bloquean la COX-1 y bajan las prostaglandinas: se produce menos moco y bicarbonato, y la mucosa queda expuesta al ácido.',
          labels: [[40, 104, 'COX-1 ✕'], [80, 52, 'Menos moco']] },
        { cap: '<b>Úlcera.</b> El ácido atraviesa la mucosa y la submucosa. Si alcanza un vaso, sangra: hematemesis o melena.',
          labels: [[80, 66, 'Úlcera'], [80, 104, 'Vaso que sangra']] },
        { cap: '<b>IBP.</b> Bloquean la bomba H⁺/K⁺ ATPasa de la célula parietal, el último paso de la secreción de ácido. La mucosa puede cicatrizar; los antibióticos eliminan a H. pylori.',
          labels: [[130, 108, 'Bomba H⁺/K⁺ ✕'], [30, 10, 'Menos ácido']] }
      ]
    }
  },

  cards: [
    ['Causas principales de úlcera péptica', 'H. pylori y AINE/aspirina'],
    ['Dolor que mejora al comer', 'Úlcera duodenal'],
    ['Úlcera gástrica: qué hacer siempre', 'Biopsiar (cáncer) y confirmar cicatrización'],
    ['Primera línea para H. pylori en México', 'Cuádruple con bismuto 14 días: IBP + bismuto + tetraciclina + metronidazol'],
    ['Confirmar erradicación', 'Aliento o antígeno fecal ≥4 semanas después, sin IBP 2 semanas antes'],
    ['¿Sirve la serología para confirmar curación?', 'No: se queda positiva'],
    ['Úlceras múltiples, refractarias, diarrea', 'Zollinger-Ellison: gastrina en ayuno + prueba de secretina; MEN1'],
    ['Aire libre subdiafragmático', 'Úlcera perforada: cirugía'],
    ['Vómito + alcalosis hipoclorémica e hipokalémica', 'Obstrucción pilórica'],
    ['Glasgow-Blatchford 0–1', 'Manejo ambulatorio posible'],
    ['Antes de la endoscopia en STDA', 'Eritromicina IV 30–120 min antes'],
    ['Forrest de alto riesgo', 'Ia (chorro), Ib (capa), IIa (vaso visible): terapia dual + IBP dosis altas 72 h'],
    ['Resangrado tras terapia endoscópica', 'Segunda endoscopia; si falla, embolización'],
    ['Aspirina en prevención secundaria tras un sangrado', 'Reanudar pronto (día 3 en úlcera de alto riesgo) con IBP'],
    ['Heces negras con bismuto, Hb y signos vitales normales', 'Efecto del bismuto, no melena: completar el esquema'],
    ['H. pylori y alergia a la penicilina', 'Cuádruple con bismuto (no lleva amoxicilina)'],
    ['Variables de Glasgow-Blatchford', 'BUN, Hb, PAS, FC, melena, síncope, hepatopatía e insuficiencia cardiaca'],
    ['Úlcera en la cara posterior del bulbo duodenal que sangra masivamente', 'Arteria gastroduodenal'],
    ['STDA en un paciente con cirrosis', 'Vasoactivo (octreotida o terlipresina) + ceftriaxona; endoscopia en ≤12 h con ligadura']
  ],

  questions: [
    q({ id: 'stda-01', dif: 1,
      stem: 'Hombre de 38 años con úlcera duodenal y biopsia positiva para H. pylori en Monterrey. Sin alergias. ¿Esquema de primera línea más apropiado?',
      opts: ['IBP + claritromicina + amoxicilina por 7 días', 'IBP + bismuto + tetraciclina + metronidazol por 14 días', 'IBP solo por 8 semanas', 'Amoxicilina sola por 10 días', 'Levofloxacino + metronidazol por 5 días'],
      ans: 1,
      exp: 'Con alta resistencia a claritromicina (como en México), la primera línea es la cuádruple con bismuto por 14 días. Después se confirma la erradicación.',
      why: ['La triple con claritromicina solo si hay sensibilidad confirmada, y 7 días es poco.', '', 'Cicatriza, pero no erradica la bacteria: recurre.', 'La monoterapia no erradica.', 'Esquema inadecuado como primera línea.'],
      ref: 'ACG 2024 H. pylori · consenso mexicano 2018' }),

    q({ id: 'stda-02', dif: 1,
      stem: 'Mujer de 45 años que terminó el tratamiento de erradicación de H. pylori. ¿Cómo y cuándo confirmas la curación?',
      opts: ['Serología IgG al mes', 'Prueba de aliento con urea o antígeno en heces ≥4 semanas después, sin IBP 2 semanas antes', 'Endoscopia inmediata', 'No hace falta confirmar', 'Prueba de aliento al día siguiente de terminar'],
      ans: 1,
      exp: 'Se confirma siempre: prueba de aliento o antígeno fecal ≥4 semanas después de terminar los antibióticos, y sin IBP 2 semanas antes (falsos negativos).',
      why: ['La serología permanece positiva meses o años.', '', 'Solo se repite endoscopia si hay otra indicación (úlcera gástrica).', 'Siempre se confirma por la resistencia antibiótica.', 'Demasiado pronto: falsos negativos.'],
      ref: 'ACG 2024 H. pylori' }),

    q({ id: 'stda-03', dif: 2,
      stem: 'Hombre de 55 años con pérdida de peso, dolor epigástrico que empeora al comer y una úlcera gástrica de 2 cm en la endoscopia. ¿Qué es indispensable?',
      opts: ['Solo IBP por 8 semanas', 'Biopsias de la úlcera y endoscopia de control para confirmar cicatrización', 'Cirugía inmediata', 'TC de abdomen y alta', 'Prueba de aliento y nada más'],
      ans: 1,
      exp: 'Toda úlcera gástrica puede ser un adenocarcinoma ulcerado: se biopsia y se repite la endoscopia (8–12 semanas) para confirmar que cicatrizó.',
      why: ['Falta descartar cáncer.', '', 'No hay complicación que la indique.', 'No sustituye las biopsias.', 'Busca H. pylori, pero no descarta cáncer.'],
      ref: 'ACG 2021 · ASGE' }),

    q({ id: 'stda-04', dif: 2,
      stem: 'Hombre de 42 años con úlceras múltiples en duodeno y yeyuno que no cicatrizan con IBP, diarrea crónica e hipercalcemia. H. pylori negativo, sin AINE. ¿Qué estudio pides?',
      opts: ['Gastrina en ayuno (sin IBP) y prueba de secretina', 'Cortisol', 'Colonoscopia', 'Prueba de aliento con urea', 'Elastasa fecal'],
      ans: 0,
      exp: 'Úlceras múltiples, refractarias y distales + diarrea = gastrinoma (Zollinger-Ellison). La hipercalcemia sugiere hiperparatiroidismo: MEN1. Gastrina en ayuno muy alta con pH gástrico ácido y prueba de secretina positiva.',
      why: ['', 'No explica las úlceras.', 'No es la sospecha.', 'Ya es negativo.', 'Mide insuficiencia pancreática.'],
      ref: 'NANETS · ENETS gastrinoma' }),

    q({ id: 'stda-05', dif: 1,
      stem: 'Mujer de 70 años que toma naproxeno diario. Presenta dolor epigástrico súbito e intenso, abdomen rígido y FC 118. La Rx de tórax de pie muestra aire bajo el diafragma. ¿Conducta?',
      opts: ['IBP oral y alta', 'Endoscopia urgente', 'Cirugía urgente, con reanimación y antibióticos', 'Colonoscopia', 'Observación 24 h'],
      ans: 2,
      exp: 'Neumoperitoneo + peritonitis = úlcera perforada: reanimación, IBP IV, antibióticos y cirugía urgente (cierre con parche de epiplón).',
      why: ['Es una emergencia quirúrgica.', 'La insuflación empeora la perforación.', '', 'No tiene relación.', 'Retrasar aumenta la mortalidad.'],
      ref: 'WSES perforated peptic ulcer 2020' }),

    q({ id: 'stda-06', dif: 2,
      stem: 'Hombre de 58 años con antecedentes de úlcera duodenal. Vómito de alimento ingerido el día anterior, chapoteo gástrico. Gasometría: pH 7.52, HCO₃ 36, Cl 88, K 2.9. ¿Diagnóstico?',
      opts: ['Úlcera perforada', 'Obstrucción del vaciamiento gástrico por úlcera (estenosis pilórica)', 'Pancreatitis', 'Cetoacidosis', 'Gastroparesia diabética'],
      ans: 1,
      exp: 'La cicatrización repetida de una úlcera pilórica o duodenal estenosa el píloro. El vómito pierde HCl: alcalosis metabólica hipoclorémica e hipokalémica. Se repone con solución salina y potasio, sonda, IBP y dilatación endoscópica o cirugía.',
      why: ['Daría peritonitis y neumoperitoneo.', '', 'No explica el vómito de comida retenida.', 'Daría acidosis.', 'Posible, pero no hay DM y sí antecedente de úlcera.'],
      ref: 'ACG' }),

    q({ id: 'stda-07', dif: 2,
      stem: 'Endoscopia en un paciente con melena: úlcera duodenal con sangrado activo en chorro. ¿Qué haces?',
      opts: ['Solo inyección de adrenalina', 'Terapia dual (adrenalina + térmica o clips) e IBP a dosis altas por 72 h', 'IBP oral y alta', 'Cirugía directa', 'Ácido tranexámico IV'],
      ans: 1,
      exp: 'Forrest Ia (chorro) es alto riesgo: terapia endoscópica dual y luego IBP a dosis altas por 72 h. La adrenalina sola tiene más resangrado.',
      why: ['La adrenalina sola no basta.', '', 'Tiene alto riesgo de resangrado.', 'Primero endoscopia.', 'No reduce mortalidad (HALT-IT).'],
      ref: 'ACG 2021 · ESGE 2021' }),

    q({ id: 'stda-08', dif: 1,
      stem: 'Mujer de 46 años con melena. Hemodinámicamente estable, Hb estable de 12.6. Endoscopia: úlcera duodenal con base limpia. ¿Conducta?',
      opts: ['Terapia endoscópica dual', 'IBP oral, dieta temprana y alta pronto', 'Embolización', 'Repetir endoscopia en 12 h', 'Terapia intensiva'],
      ans: 1,
      exp: 'Forrest III (base limpia) tiene muy bajo riesgo de resangrado: no requiere terapia endoscópica. IBP oral, iniciar dieta y alta temprana; erradicar H. pylori si está presente.',
      why: ['No hay estigma de alto riesgo.', '', 'No está indicada.', 'Sin indicación.', 'Es bajo riesgo.'],
      ref: 'ACG 2021' }),

    q({ id: 'stda-09', dif: 2,
      stem: 'Hombre de 66 años con hematemesis. Antes de la endoscopia, ¿qué medicamento mejora la visibilidad y reduce la necesidad de repetirla?',
      opts: ['Metoclopramida oral', 'Eritromicina IV', 'Octreotida', 'Vitamina K', 'Ácido tranexámico'],
      ans: 1,
      exp: 'La eritromicina IV (agonista de motilina) 30–120 min antes vacía el estómago de sangre y coágulos, mejora la visibilidad y reduce la segunda endoscopia.',
      why: ['No es la recomendada.', '', 'Es para sangrado variceal.', 'Sin coagulopatía no aplica.', 'No reduce mortalidad y aumenta trombosis (HALT-IT).'],
      ref: 'ACG 2021' }),

    q({ id: 'stda-10', dif: 1,
      stem: 'Hombre de 35 años con melena hace 2 días, ya sin sangrado. FC 82, PAS 128, Hb 13.4, BUN 15 mg/dL, sin comorbilidades. ¿Qué indica una puntuación de Glasgow-Blatchford de 1?',
      opts: ['Necesita terapia intensiva', 'Muy bajo riesgo: puede manejarse de forma ambulatoria con endoscopia temprana', 'Necesita transfusión', 'Cirugía', 'Embolización'],
      ans: 1,
      exp: 'Glasgow-Blatchford 0–1 identifica pacientes con muy bajo riesgo de necesitar intervención o de morir: se pueden egresar con endoscopia ambulatoria.',
      why: ['No requiere hospitalización.', '', 'Hb normal.', 'Sin indicación.', 'Sin indicación.'],
      ref: 'ACG 2021' }),

    q({ id: 'stda-11', dif: 2,
      stem: 'Mujer de 74 años con stent coronario hace 2 años, en aspirina 100 mg. Tuvo sangrado por úlcera Forrest IIa tratada con éxito. ¿Qué haces con la aspirina?',
      opts: ['Suspenderla para siempre', 'Reanudarla pronto (hacia el día 3) junto con IBP', 'Cambiarla por un AINE', 'Reanudarla en 3 meses', 'Cambiar a doble antiagregación'],
      ans: 1,
      exp: 'En prevención secundaria, suspender la aspirina aumenta la mortalidad cardiovascular. Tras controlar una úlcera de alto riesgo se reanuda pronto (hacia el día 3; de inmediato si era de bajo riesgo), con IBP de mantenimiento.',
      why: ['Aumenta eventos cardiovasculares y muertes.', '', 'Los AINE están contraindicados.', 'Demasiado tiempo sin protección.', 'Aumenta el riesgo de resangrado sin indicación.'],
      ref: 'ESGE 2021 · ACG 2021' }),

    q({ id: 'stda-12', dif: 2,
      stem: 'Hombre de 62 años con úlcera Forrest Ib tratada con clips y adrenalina. A las 36 h vuelve a tener melena y FC 120. ¿Siguiente paso?',
      opts: ['Cirugía inmediata', 'Segunda endoscopia con terapia; si falla, embolización por radiología intervencionista', 'Solo transfundir', 'Suspender el IBP', 'Ácido tranexámico'],
      ans: 1,
      exp: 'El resangrado se maneja primero con una segunda endoscopia. Si falla, embolización arterial transcatéter; la cirugía queda como último recurso.',
      why: ['Se reserva para fallas.', '', 'No controla la fuente.', 'Debe seguir a dosis altas.', 'No está recomendado.'],
      ref: 'ACG 2021 · ESGE 2021' }),

    q({ id: 'stda-13', dif: 1,
      stem: 'Hombre de 30 años que tras una borrachera presenta varios vómitos y después hematemesis de poco volumen. Estable. ¿Diagnóstico más probable?',
      opts: ['Síndrome de Boerhaave', 'Desgarro de Mallory-Weiss', 'Várices esofágicas', 'Úlcera perforada', 'Cáncer gástrico'],
      ans: 1,
      exp: 'Mallory-Weiss: desgarro de la mucosa en la unión esofagogástrica por arcadas. Suele autolimitarse; la endoscopia confirma y trata si sangra.',
      why: ['Es una perforación transmural: dolor torácico intenso, enfisema subcutáneo, mediastinitis.', '', 'Sin datos de cirrosis o hipertensión portal.', 'Daría peritonitis.', 'No encaja con el contexto.'],
      ref: 'ACG' }),

    q({ id: 'stda-14', dif: 2,
      stem: 'Mujer de 72 años con osteoartritis que necesita un AINE por tiempo prolongado. Tuvo una úlcera sangrante hace 2 años. ¿Estrategia más segura si no hay alternativa al AINE?',
      opts: ['Naproxeno solo', 'Celecoxib + IBP, y confirmar que no tenga H. pylori', 'Ibuprofeno + misoprostol a días alternos', 'Indometacina + antiácido', 'Diclofenaco + ranitidina'],
      ans: 1,
      exp: 'Con antecedente de úlcera complicada (muy alto riesgo GI), si se necesita un AINE: COX-2 selectivo + IBP, y erradicar H. pylori si está presente. Considerar primero alternativas sin AINE (tópicos, paracetamol, ejercicio).',
      why: ['Muy alto riesgo de resangrado.', '', 'El misoprostol a días alternos es insuficiente y causa diarrea.', 'Muy gastrolesivo; los antiácidos no protegen.', 'Los antagonistas H2 a dosis estándar no bastan.'],
      ref: 'ACG 2009 prevención de úlceras por AINE · ACG 2021' }),

    q({ id: 'stda-15', dif: 1,
      stem: 'Hombre de 40 años con dispepsia, sin datos de alarma, menor de 60 años. ¿Estrategia recomendada?',
      opts: ['Endoscopia inmediata a todos', 'Buscar H. pylori con prueba no invasiva y tratar si es positivo', 'Tomografía abdominal', 'Serología repetida cada año', 'Colonoscopia'],
      ans: 1,
      exp: 'En dispepsia sin alarma en menores de 60 años, la estrategia “probar y tratar” H. pylori (aliento o antígeno fecal) es costo-efectiva. Si es negativo o persisten síntomas: IBP. Con alarma o ≥60 años: endoscopia.',
      why: ['Se reserva para datos de alarma o ≥60 años.', '', 'Sin indicación.', 'La serología no sirve para seguimiento.', 'No tiene relación con dispepsia.'],
      ref: 'ACG/CAG 2017 dispepsia' }),
    q({ id: 'stda-16', dif: 2,
      stem: 'Hombre de 45 años en el día 5 de terapia cuádruple con bismuto para H. pylori. Consulta porque desde hace 3 días sus heces son negras, formadas y sin olor fétido. FC 74, PA 124/78, Hb 14.2 g/dL (igual que hace 2 semanas). ¿Conducta?',
      opts: ['Endoscopia urgente por melena', 'Explicarle que es efecto del bismuto y continuar el tratamiento', 'Suspender el esquema y cambiar a triple con claritromicina', 'IBP IV en infusión y hospitalizar', 'Transfundir un paquete globular'],
      ans: 1,
      exp: 'El bismuto tiñe de negro las heces (y la lengua). La melena es alquitranada, pegajosa y fétida, y se acompaña de datos de sangrado (taquicardia, Hb que baja, BUN alto). Con signos vitales normales y Hb estable, se tranquiliza al paciente y se completa el esquema.',
      why: ['No hay datos de sangrado: heces formadas, signos vitales y Hb normales.', '', 'Suspender reduce la erradicación, y la triple con claritromicina no es buena opción en México.', 'No hay sangrado que tratar.', 'Hb normal y estable: no hay indicación.'],
      ref: 'ACG 2024 H. pylori' }),

    q({ id: 'stda-17', dif: 2,
      stem: 'Hombre de 56 años con cirrosis por alcohol (ascitis, arañas vasculares, plaquetas 68 000). Llega con hematemesis abundante, FC 116 y PA 94/60. Ya tiene 2 vías gruesas y reanimación con volumen. ¿Qué agregas antes de la endoscopia?',
      opts: ['Solo IBP IV y endoscopia en 48 h', 'Octreotida (o terlipresina) + ceftriaxona IV, y endoscopia en ≤12 h con ligadura', 'Propranolol IV para bajar la presión portal', 'Plasma fresco congelado hasta normalizar el INR', 'Ácido tranexámico IV'],
      ans: 1,
      exp: 'En un cirrótico con STDA se asume origen variceal: vasoactivo (octreotida, somatostatina o terlipresina) en cuanto se sospecha, profilaxis antibiótica con ceftriaxona (reduce infecciones, resangrado y mortalidad) y endoscopia en ≤12 h con ligadura. Transfusión restrictiva.',
      why: ['Falta el vasoactivo y el antibiótico, y 48 h es demasiado tarde.', '', 'Los betabloqueadores no se usan en el sangrado agudo con hipotensión; son para profilaxis.', 'Corregir el INR con plasma no mejora el sangrado y aumenta el volumen y la presión portal.', 'No reduce la mortalidad y aumenta las trombosis (HALT-IT).'],
      ref: 'Baveno VII 2022' }),

    q({ id: 'stda-18', dif: 2,
      stem: 'Mujer de 34 años con úlcera duodenal y prueba de aliento positiva para H. pylori. Tuvo anafilaxia con amoxicilina. ¿Esquema más adecuado?',
      opts: ['IBP + amoxicilina + claritromicina por 14 días', 'Cuádruple con bismuto (IBP + bismuto + tetraciclina + metronidazol) por 14 días', 'Vonoprazán + amoxicilina por 14 días', 'IBP + levofloxacino + amoxicilina', 'Solo IBP por 8 semanas'],
      ans: 1,
      exp: 'La cuádruple con bismuto no lleva betalactámicos: es la opción en alergia a la penicilina (y además es la primera línea en México). Los esquemas con amoxicilina están contraindicados por la anafilaxia.',
      why: ['Lleva amoxicilina: contraindicada por la anafilaxia.', '', 'Lleva amoxicilina.', 'Lleva amoxicilina, y las quinolonas no son de primera línea.', 'No erradica la bacteria: la úlcera recurre.'],
      ref: 'ACG 2024 H. pylori' }),

    q({ id: 'stda-19', dif: 1,
      stem: 'Hombre de 61 años con hematemesis masiva y choque. La endoscopia muestra una úlcera profunda en la cara posterior del bulbo duodenal con sangrado en chorro. ¿Qué arteria es la responsable más probable?',
      opts: ['Arteria gástrica izquierda', 'Arteria gastroduodenal', 'Arteria esplénica', 'Arteria mesentérica superior', 'Arteria gastroepiploica izquierda'],
      ans: 1,
      exp: 'La arteria gastroduodenal corre detrás de la primera porción del duodeno: las úlceras de la cara posterior del bulbo la erosionan y sangran masivamente. Si la terapia endoscópica falla, se emboliza por radiología intervencionista.',
      why: ['Es la típica de las úlceras de la curvatura menor gástrica.', '', 'Puede sangrar por pseudoaneurisma en pancreatitis, no por úlcera duodenal.', 'Irriga el intestino delgado; no corre detrás del bulbo.', 'Irriga la curvatura mayor del estómago.'],
      ref: 'Anatomía · ACG 2021' }),

    q({ id: 'stda-20', dif: 2,
      stem: 'Hombre de 67 años en terapia intensiva por neumonía grave, con ventilación mecánica desde hace 4 días, plaquetas de 42 000 e INR 1.9. No tiene sangrado. ¿Qué medida reduce el riesgo de sangrado digestivo clínicamente importante?',
      opts: ['Ninguna: la profilaxis no tiene beneficio', 'IBP profiláctico (por ejemplo, pantoprazol)', 'Misoprostol', 'Octreotida en infusión', 'Ácido tranexámico'],
      ans: 1,
      exp: 'La úlcera por estrés es más probable con ventilación mecánica, coagulopatía, choque o hepatopatía. En estos pacientes, la profilaxis con IBP reduce el sangrado digestivo clínicamente importante (REVISE, 2024). No se da de rutina a todo paciente hospitalizado.',
      why: ['Tiene factores de alto riesgo, y en ellos sí reduce el sangrado.', '', 'No es la profilaxis recomendada y causa diarrea.', 'Es para el sangrado variceal.', 'No previene la úlcera por estrés.'],
      ref: 'REVISE, NEJM 2024' })
  ],

  cases: [
    { id: 'g-stda', topic: 'stda', subj: 'gastro',
      title: 'Melena en la madrugada', place: 'Urgencias',
      patient: { name: 'Armando', age: 59, sex: 'H', skin: '#C08060', hair: '#4A3A2A', gown: '#F2B66D' },
      intro: 'Albañil con dolor lumbar crónico; toma diclofenaco a diario desde hace meses. Hoy tuvo 3 evacuaciones negras y se mareó al levantarse.',
      extra: { label: 'Hb', unit: 'g/dL' },
      start: { FC: 118, PAS: 92, PAD: 58, SpO2: 97, FR: 22, X: 6.8 },
      nodes: [
        { tag: 'Llegada', ecg: 'tachy',
          text: 'Pálido y diaforético. Hb 6.8 g/dL, BUN 64. Sin datos de cirrosis.',
          q: '¿Qué haces primero?',
          A: { t: 'Dos vías gruesas, cristaloides, transfundir (Hb <7), IBP IV y eritromicina antes de la endoscopia', ok: true, res: 'Tras 2 paquetes globulares y cristaloides: FC 96, PA 112/70, Hb 8.4.', ecg: 'normal', vit: { FC: 96, PAS: 112, PAD: 70, X: 8.4 } },
          B: { t: 'Endoscopia inmediata sin reanimar', ok: false, res: 'Durante la sedación cae a 70/40 y hay que suspender el estudio.', vit: { PAS: 70, PAD: 40 } },
          why: 'Primero se reanima: vías, volumen, transfusión con Hb <7 e IBP IV. La endoscopia va en las primeras 24 h, con el paciente estable.' },
        { tag: 'Endoscopia (a las 8 h)', ecg: 'normal', vit: { FC: 94, PAS: 114, PAD: 70, X: 8.4 },
          text: 'Úlcera duodenal posterior de 1.5 cm con sangrado en capa (Forrest Ib).',
          q: '¿Qué terapia endoscópica?',
          A: { t: 'Solo inyección de adrenalina', ok: false, res: 'A las 24 h vuelve a sangrar.', vit: { FC: 120, PAS: 90, PAD: 56, X: 7.0 } },
          B: { t: 'Terapia dual (adrenalina + clips o coagulación) y luego IBP a dosis altas 72 h', ok: true, res: 'Hemostasia lograda; sin resangrado.' },
          why: 'Forrest Ia, Ib y IIa necesitan terapia endoscópica; la adrenalina siempre en combinación.' },
        { tag: 'Día 2', ecg: 'normal', vit: { FC: 84, PAS: 122, PAD: 76, X: 9.2 },
          text: 'La biopsia gástrica es positiva para H. pylori. Sin alergias.',
          q: '¿Qué tratamiento indicas?',
          A: { t: 'Cuádruple con bismuto por 14 días y suspender el diclofenaco', ok: true, res: 'Lo das de alta con el esquema y con paracetamol para el dolor lumbar.' },
          B: { t: 'Triple con claritromicina por 7 días y seguir con el diclofenaco', ok: false, res: 'Alta probabilidad de falla por resistencia, y el AINE sigue dañando la mucosa.' },
          why: 'En México hay alta resistencia a claritromicina: cuádruple con bismuto por 14 días. Los AINE se suspenden.' },
        { tag: '6 semanas después', ecg: 'normal', vit: { FC: 76, X: 12.6 },
          text: 'Terminó el tratamiento hace 4 semanas. Sigue tomando omeprazol.',
          q: '¿Cómo confirmas la erradicación?',
          A: { t: 'Serología para H. pylori hoy', ok: false, res: 'Sale positiva… y no sabes si es infección actual o anticuerpos viejos.' },
          B: { t: 'Suspender el IBP 2 semanas y hacer prueba de aliento con urea (o antígeno fecal)', ok: true, res: 'Prueba de aliento negativa: erradicación confirmada.' },
          why: 'La curación se confirma con aliento o antígeno fecal ≥4 semanas después del tratamiento y sin IBP 2 semanas antes.' }
      ] }
  ]
};
