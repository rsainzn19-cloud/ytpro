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
<li><b>Glasgow-Blatchford</b> 0–1: puede manejarse de forma ambulatoria. Calculadora en Más → Calculadoras.</li>
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
</ul>` }
      ],
      mnemo: { t: 'Forrest: “1 sangra, 2 avisa, 3 limpia”', d: 'Forrest I: sangrado activo (a chorro o en capa). Forrest II: estigmas que avisan (vaso visible, coágulo, base pigmentada). Forrest III: base limpia. Ia, Ib y IIa se tratan con terapia endoscópica dual.' },
      pearl: 'Para confirmar la erradicación de H. pylori pide prueba de aliento o antígeno fecal ≥4 semanas después, sin IBP las 2 semanas previas. La serología se queda positiva y no sirve.',
      trap: 'Triple esquema con claritromicina por 7 días en México: alta resistencia. La respuesta esperada suele ser la cuádruple con bismuto por 14 días.',
      guide: [
        'Primera línea para H. pylori: ACG 2024 prefiere la cuádruple con bismuto y deja la triple con claritromicina para cepas sensibles. El consenso mexicano también recomienda esquemas cuádruples por la resistencia local. ⚠️ Si tu profesor enseña otra combinación, apréndete esa para el examen.',
        'Momento de la endoscopia: ACG y ESGE coinciden en ≤24 h; la ESGE pide <12 h en pacientes de muy alto riesgo que siguen inestables.'
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
        ['Dolor y comida', 'Mejora al comer; regresa 2–3 h después y de noche', 'Empeora al comer'],
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
    ['Aspirina en prevención secundaria tras un sangrado', 'Reanudar pronto (día 3 en úlcera de alto riesgo) con IBP']
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
      ref: 'ACG/CAG 2017 dispepsia' })
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
