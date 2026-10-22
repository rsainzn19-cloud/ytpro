// Tema 25 · Tumores hipofisarios (Endocrinología, semanas 1–2)
const T = { topic: 'hipofisis', subj: 'endo' };
const q = (o) => ({ ...T, ...o });

export default {
  lessons: {
    hipofisis: {
      hook: 'Un adenoma hipofisario da problemas de dos formas: por lo que secreta y por lo que comprime. Sabe qué pedir ante un incidentaloma y el tratamiento de cada tumor funcionante.',
      nn: [['pituitary-disorders', 'Pituitary Disorders'], ['cushings-syndrome', 'Cushing\'s Syndrome']],
      yt: 'pituitary adenoma prolactinoma acromegaly',
      anim: 'hipofisis',
      compare: ['prl-tallo'],
      video: [
        { ch: 'Lo que secreta y lo que comprime', sc: [
          { v: { k: 'title', t: 'Tumores hipofisarios', s: 'Tema 25 · Endocrinología' },
            say: 'Bienvenido a la guardia. Hoy toca la hipófisis, una glándula del tamaño de un chícharo que controla a casi todas las demás. Sus tumores dan problemas de dos formas: por lo que secretan y por lo que comprimen.' },
          { v: { k: 'case', t: 'No ve los coches de lado', p: { name: 'Rodolfo', age: 45, sex: 'H', skin: '#C98B62', hair: '#3A2A1E', gown: '#5BA7E0' }, text: 'Cefalea de meses y disfunción eréctil. Ya no ve los coches que se le acercan por los lados. Campimetría: hemianopsia bitemporal.', vit: { PRL: '3 800', RM: '3.5 cm' } },
            say: 'Imagina a Rodolfo, de cuarenta y cinco años. Tiene cefalea desde hace meses, disfunción eréctil y ya no ve los coches que se le acercan por los lados. La campimetría muestra que perdió la mitad externa del campo visual de cada ojo.' },
          { v: { k: 'anim', id: 'hipofisis', step: 0 },
            say: 'Primero ubica la glándula. La hipófisis vive en la silla turca, un hueco del hueso esfenoides. Justo arriba está el quiasma óptico. A los lados, los senos cavernosos, con la carótida y los pares craneales tres, cuatro y seis. Abajo, el seno esfenoidal, que es el camino del cirujano.' },
          { v: { k: 'list', t: 'Clasifícalos', items: ['Microadenoma: <1 cm', 'Macroadenoma: ≥1 cm', 'Funcionante: PRL, GH o ACTH', 'No funcionante: el macro más común'] },
            say: 'Clasifícalos por tamaño y por función. Microadenoma, menor de un centímetro. Macroadenoma, de un centímetro o más. Si secreta, casi siempre es prolactina, hormona de crecimiento o corticotropina. El no funcionante es el macroadenoma más común y se presenta por compresión.' }
        ] },
        { ch: 'Efecto de masa', sc: [
          { v: { k: 'anim', id: 'hipofisis', step: 1 },
            say: 'Mira qué pasa cuando crece hacia arriba. Sale de la silla y aplasta el centro del quiasma, donde se cruzan las fibras nasales de cada retina. Esas fibras ven el lado temporal. Por eso se pierden los dos campos temporales: hemianopsia bitemporal, que suele empezar por los cuadrantes superiores.' },
          { v: { k: 'list', t: 'Hipopituitarismo', items: ['Orden: GH → LH/FSH → TSH → ACTH', 'La PRL suele subir (efecto tallo)', 'El déficit de ACTH es el más peligroso', 'Repón cortisol antes que levotiroxina'] },
            say: 'El tumor también aplasta la hipófisis sana. Las hormonas se pierden en un orden típico: primero la de crecimiento, luego las gonadotropinas, después la tirotropina y al final la corticotropina. La prolactina, en cambio, suele subir. Y siempre repón el cortisol antes que la hormona tiroidea, o puedes precipitar una crisis suprarrenal.' },
          { v: { k: 'mnemo', t: 'Go Look For The Adenoma', d: 'GH · LH · FSH · TSH · ACTH: el orden en que se apagan cuando un adenoma comprime la hipófisis.' },
            say: 'Una mnemotecnia en inglés: Go Look For The Adenoma. Go, por la hormona de crecimiento. Look, por la luteinizante. For, por la foliculoestimulante. The, por la tirotropina. Y Adenoma, por la corticotropina. Ese es el orden en que se apagan.' },
          { v: { k: 'tip', kind: 'trap', t: 'Apoplejía: cefalea súbita, oftalmoplejía, pérdida visual e hipotensión → hidrocortisona IV antes que cualquier estudio.' },
            say: 'Cuidado con la apoplejía hipofisaria: sangrado o infarto del adenoma. Da cefalea súbita, la peor de su vida, visión doble, pérdida visual e hipotensión. Antes de cualquier estudio, hidrocortisona intravenosa, cien miligramos. Después, resonancia y valoración por neurocirugía.' }
        ] },
        { ch: 'Prolactinoma', sc: [
          { v: { k: 'anim', id: 'hipofisis', step: 2 },
            say: 'El prolactinoma es el adenoma funcionante más común. Un detalle de fisiología: la dopamina del hipotálamo frena todo el tiempo a la prolactina. La cabergolina, un agonista dopaminérgico, imita esa señal. Baja la prolactina y encoge el tumor.' },
          { v: { k: 'list', t: 'Antes de culpar al tumor', items: ['Embarazo', 'Hipotiroidismo primario (TRH ↑)', 'Fármacos: antipsicóticos, metoclopramida', 'ERC', 'Macroprolactina'] },
            say: 'Antes de culpar a un tumor, descarta lo común. Embarazo. Hipotiroidismo primario, porque la hormona liberadora de tirotropina también estimula la prolactina. Fármacos, sobre todo antipsicóticos y metoclopramida. Enfermedad renal crónica. Y la macroprolactina, una forma grande e inactiva que da cifras altas sin síntomas.' },
          { v: { k: 'quiz', q: 'Galactorrea, PRL 58 ng/mL y TSH 32 mUI/L. ¿Qué haces primero?', opts: ['RM de hipófisis y cabergolina', 'Levotiroxina y repetir la PRL'], a: 1 },
            say: 'Pausa. Mujer con galactorrea, prolactina de cincuenta y ocho y tirotropina de treinta y dos. ¿Qué haces primero?',
            exp: 'Levotiroxina y repetir la prolactina. Es un hipotiroidismo primario: al corregirlo, la prolactina se normaliza. Pedir resonancia primero sería buscar un tumor que quizá no existe.' },
          { v: { k: 'big', h: 'Casi seguro prolactinoma', t: '>250', u: 'ng/mL de PRL', s: 'Tratamiento: cabergolina, aun en macroadenoma con defecto visual. Cirugía si no la tolera o no responde.' },
            say: 'Una prolactina mayor de doscientos cincuenta casi siempre es prolactinoma. El tratamiento es un agonista dopaminérgico, de preferencia cabergolina. Aun el macroprolactinoma que comprime el quiasma, como el de Rodolfo, empieza con cabergolina: la visión suele mejorar en días a semanas. La cirugía se reserva si no la tolera o no responde.' },
          { v: { k: 'vs', cmp: 'prl-tallo', rows: [1, 2, 3] },
            say: 'Ahora la trampa del macroadenoma. Si un tumor grande tiene la prolactina apenas elevada, piensa en efecto tallo: la masa corta el paso de la dopamina. Ahí la cabergolina baja la cifra, pero el tumor sigue creciendo, y el tratamiento es cirugía. Y si el tumor es gigante con prolactina casi normal, pide la muestra diluida por el efecto gancho.' }
        ] },
        { ch: 'Acromegalia', sc: [
          { v: { k: 'anim', id: 'hipofisis', step: 3 },
            say: 'La acromegalia es el exceso de hormona de crecimiento en el adulto. El adenoma la secreta y el hígado responde con el factor de crecimiento similar a la insulina tipo uno, el IGF uno. Ese factor agranda manos, pies y mandíbula. Ya no le quedan los anillos ni los zapatos.' },
          { v: { k: 'flow', t: 'Acromegalia: diagnóstico', steps: ['Tamizaje: IGF-1', 'Confirma: GH tras 75 g de glucosa', 'No baja de 1 ng/mL = acromegalia', 'RM de hipófisis', 'Cirugía transesfenoidal'] },
            say: 'El tamizaje es el IGF uno, porque la hormona de crecimiento sale en pulsos y una sola medición no sirve. Se confirma con una carga de setenta y cinco gramos de glucosa. Normalmente la hormona de crecimiento baja de un nanogramo por mililitro; en la acromegalia no se suprime. Luego, resonancia y cirugía transesfenoidal.' },
          { v: { k: 'list', t: 'No se te olvide', items: ['Comorbilidades: DM, HTA, apnea, miocardiopatía', 'Colonoscopia: pólipos de colon', 'Si persiste: octreotida o lanreotida', 'Pegvisomant: se vigila con IGF-1'] },
            say: 'Busca las comorbilidades: diabetes, hipertensión, apnea del sueño y miocardiopatía. Pide colonoscopia por los pólipos. Si la enfermedad persiste tras la cirugía, análogos de somatostatina, como octreotida o lanreotida. Y si usas pegvisomant, que bloquea el receptor de la hormona, vigila con IGF uno, porque la hormona de crecimiento sube.' }
        ] },
        { ch: 'Enfermedad de Cushing', sc: [
          { v: { k: 'anim', id: 'hipofisis', step: 4 },
            say: 'En la enfermedad de Cushing, el adenoma secreta corticotropina y las suprarrenales fabrican cortisol de más. Ese cortisol ya no frena al tumor; por eso la dexametasona a dosis baja no suprime. Es la causa más común de Cushing endógeno.' },
          { v: { k: 'flow', t: 'Cushing: en orden', steps: ['2 pruebas de tamizaje positivas', 'Mide ACTH', 'ACTH baja → TC de suprarrenales', 'ACTH normal o alta → RM hipófisis', 'RM dudosa → senos petrosos'] },
            say: 'Sigue el orden. Primero confirma el exceso de cortisol con dos pruebas: cortisol libre en orina de veinticuatro horas, cortisol en saliva a medianoche o supresión con un miligramo de dexametasona. Luego mide la corticotropina. Si está suprimida, el problema es suprarrenal. Si está normal o alta, resonancia de hipófisis. Si la resonancia no es clara, cateterismo de senos petrosos inferiores.' },
          { v: { k: 'quiz', q: 'Cushing confirmado, ACTH alta. RM: imagen de 4 mm. ¿Siguiente paso?', opts: ['Cirugía transesfenoidal ya', 'Cateterismo de senos petrosos', 'TC de suprarrenales'], a: 1 },
            say: 'Pausa. Paciente con Cushing confirmado y corticotropina alta. La resonancia muestra una imagen de cuatro milímetros. ¿Siguiente paso?',
            exp: 'Cateterismo de senos petrosos inferiores. Cerca de una de cada diez personas tiene imágenes pequeñas sin importancia en la hipófisis. Un gradiente central de corticotropina confirma el origen hipofisario antes de operar.' }
        ] },
        { ch: 'Incidentaloma y cirugía', sc: [
          { v: { k: 'list', t: 'Incidentaloma hipofisario', items: ['A todos: PRL e IGF-1', 'Tamizaje de Cushing', 'Macro: función hipofisaria completa', 'Si toca el quiasma: campimetría', 'RM de control: macro a 6 m, micro a 1 año'] },
            say: 'Si encuentras una masa hipofisaria por casualidad, búscale hipersecreción aunque no dé síntomas: prolactina, IGF uno y tamizaje de Cushing. Si es macroadenoma, revisa toda la función hipofisaria, y si toca el quiasma, pide campimetría. Repite la resonancia a los seis meses si es macro, o al año si es micro.' },
          { v: { k: 'list', t: 'Después de la cirugía transesfenoidal', items: ['Días 1–2: AVP-D (poliuria, Na ↑)', 'Días 5–10: SIADH (Na ↓)', 'Puede quedar AVP-D permanente', 'Tras Cushing: falta de cortisol'] },
            say: 'Después de la cirugía, vigila el sodio. En los primeros días puede aparecer deficiencia de vasopresina, antes llamada diabetes insípida central: poliuria con sodio alto. Hacia la primera semana puede seguir una fase de secreción inapropiada, con sodio bajo, y luego una deficiencia permanente. Es el patrón trifásico. Y si operaste un Cushing, espera insuficiencia suprarrenal: necesita hidrocortisona.' },
          { v: { k: 'tip', kind: 'pearl', t: 'Prolactinoma = cabergolina aunque sea macro. Acromegalia y Cushing = cirugía transesfenoidal. Apoplejía = hidrocortisona primero.' },
            say: 'La perla para el examen: el prolactinoma se trata con cabergolina, aunque sea macroadenoma. La acromegalia y la enfermedad de Cushing van a cirugía transesfenoidal. Y la apoplejía empieza con hidrocortisona. Ahora ve a las preguntas del tema para fijar lo que viste.' }
        ] }
      ],
      sections: [
        { h: 'Fisiología en 1 minuto', html: `
<ul>
<li>El hipotálamo manda sus señales por el <b>tallo</b> (sistema porta): TRH, CRH, GnRH y GHRH estimulan; la <b>dopamina frena la PRL</b> y la somatostatina frena la GH.</li>
<li>La <b>PRL es la única bajo inhibición tónica</b>: si el tallo se comprime o se corta, la PRL sube mientras las demás hormonas bajan (efecto tallo).</li>
<li>Adenohipófisis: lactotropas (PRL), somatotropas (GH), corticotropas (ACTH), tirotropas (TSH) y gonadotropas (LH/FSH). Neurohipófisis: guarda la ADH (AVP) y la oxitocina que fabrica el hipotálamo.</li>
<li>Retroalimentación negativa: el cortisol frena CRH y ACTH; el IGF-1 frena la GH; la T4 frena TRH y TSH. Los adenomas funcionantes escapan a ese freno.</li>
<li><b>Anatomía que se pregunta</b>: arriba, el quiasma (las fibras nasales que cruzan llevan los campos temporales; la compresión desde abajo empieza por los cuadrantes temporales superiores). A los lados, el seno cavernoso (pares III, IV, V1, V2, VI y carótida interna). Abajo, el seno esfenoidal, por donde entra la cirugía transesfenoidal.</li>
</ul>` },
        { h: 'Masa y efecto de masa', html: `
<ul>
<li><b>Microadenoma</b> &lt;1 cm; <b>macroadenoma</b> ≥1 cm.</li>
<li>Efecto de masa: cefalea, <b>hemianopsia bitemporal</b> (compresión del quiasma), parálisis de pares III, IV y VI (seno cavernoso).</li>
<li><b>Hipopituitarismo</b>: se pierden en orden GH → LH/FSH → TSH → ACTH. El déficit de ACTH es el más peligroso.</li>
<li>No funcionante: el macroadenoma más común; se presenta por efecto de masa. Tratamiento: cirugía transesfenoidal si comprime.</li>
<li><b>Apoplejía hipofisaria</b>: hemorragia o infarto del adenoma. Cefalea súbita intensa, oftalmoplejía, pérdida visual, hipotensión → <b>hidrocortisona IV de inmediato</b>, RM, neurocirugía si hay deterioro visual.</li>
<li><b>Incidentaloma</b>: pide a todos PRL, IGF-1 y tamizaje de Cushing (y función hipofisaria y campimetría si es macroadenoma).</li>
</ul>` },
        { h: 'Prolactinoma', html: `
<ul>
<li>El adenoma funcionante <b>más común</b>.</li>
<li>Mujer: galactorrea, amenorrea, infertilidad (microadenoma). Hombre: hipogonadismo, disfunción eréctil; suele llegar como macroadenoma.</li>
<li>Prolactina &gt;250 ng/mL casi siempre es prolactinoma; 25–100 puede ser por otra causa.</li>
<li><b>Descarta antes</b>: embarazo, hipotiroidismo primario (la TRH estimula la PRL), fármacos (antipsicóticos, metoclopramida, verapamilo, ISRS), ERC, compresión del tallo por otra masa (PRL generalmente &lt;100–150), macroprolactina.</li>
<li><b>Efecto gancho</b>: macroadenoma gigante con PRL falsamente normal o poco elevada → pedir dilución.</li>
<li>Tratamiento: <b>agonista dopaminérgico</b> (<b>cabergolina</b> &gt; bromocriptina), incluso con macroadenoma y alteración visual. Cirugía si no tolera o no responde.</li>
</ul>` },
        { h: 'Acromegalia', html: `
<ul>
<li>Exceso de GH en el adulto: crecimiento de manos y pies (anillos y zapatos), prognatismo, macroglosia, separación dental, piel gruesa y sudorosa, apnea del sueño, túnel del carpo.</li>
<li>Comorbilidades: DM, HTA, miocardiopatía, pólipos de colon (colonoscopia), artropatía.</li>
<li>Tamizaje: <b>IGF-1</b>. Confirmación: GH no se suprime (&lt;1 ng/mL) tras 75 g de glucosa oral. Luego RM.</li>
<li>Tratamiento: <b>cirugía transesfenoidal</b>. Si persiste: análogos de somatostatina (octreotida, lanreotida), pegvisomant (antagonista del receptor de GH; se vigila con IGF-1), radioterapia.</li>
</ul>` },
        { h: 'Enfermedad de Cushing', html: `
<ul>
<li>Adenoma productor de ACTH: la causa más común de Cushing endógeno.</li>
<li>Tamizaje (2 pruebas positivas): cortisol libre en orina de 24 h, cortisol salival nocturno, supresión con 1 mg de dexametasona (cortisol &gt;1.8 µg/dL = no suprime).</li>
<li>ACTH normal o alta = dependiente de ACTH → RM de hipófisis. Si la RM no es concluyente: cateterismo de senos petrosos inferiores.</li>
<li>Tratamiento: cirugía transesfenoidal; si falla, fármacos (ketoconazol, metirapona, osilodrostat, pasireotida) o suprarrenalectomía bilateral.</li>
<li>Tras la cirugía: <b>deficiencia de arginina vasopresina</b> (antes diabetes insípida central) transitoria o SIADH (patrón trifásico).</li>
</ul>` },
        { h: 'Hipopituitarismo: reconocer y reponer', html: `
<div class="tablewrap"><table class="mini">
<tr><th>Eje</th><th>Pista clínica</th><th>Laboratorio</th><th>Reposición</th></tr>
<tr><td><b>ACTH</b></td><td>Fatiga, hipotensión, hiponatremia, hipoglucemia; <b>sin hiperpigmentación ni hiperkalemia</b> (la aldosterona sigue funcionando)</td><td>Cortisol de las 8 a. m. bajo con ACTH baja o normal</td><td><b>Hidrocortisona primero</b>; dosis de estrés si enferma</td></tr>
<tr><td><b>TSH</b></td><td>Hipotiroidismo</td><td>T4 libre baja con TSH baja o “normal”</td><td>Levotiroxina, ajustada con la T4 libre (no con la TSH)</td></tr>
<tr><td><b>LH/FSH</b></td><td>Amenorrea, ↓ libido, disfunción eréctil, infertilidad</td><td>Estradiol o testosterona bajos con LH/FSH no elevadas</td><td>Estrógeno + progestágeno o testosterona; gonadotropinas si busca fertilidad</td></tr>
<tr><td><b>GH</b></td><td>Adulto: fatiga, ↑ grasa visceral, ↓ masa muscular</td><td>IGF-1 bajo; pruebas de estímulo</td><td>GH en casos seleccionados</td></tr>
<tr><td><b>ADH</b></td><td>Poliuria y sed; rara de entrada en un adenoma (sugiere craneofaringioma, metástasis o hipofisitis)</td><td>Orina diluida con Na alto</td><td>Desmopresina</td></tr>
</table></div>
<ul>
<li><b>Síndrome de Sheehan</b>: hemorragia posparto con hipotensión → necrosis de la hipófisis, que está agrandada por el embarazo. Primera pista: no puede lactar; después, amenorrea e hipopituitarismo.</li>
<li>Otras causas agudas: apoplejía hipofisaria, hipofisitis linfocítica (periparto) e hipofisitis por inhibidores de puntos de control inmunitario (ipilimumab).</li>
</ul>` },
        { h: 'Cómo lo preguntan en el examen', html: `
<ul>
<li>Mujer joven con amenorrea y galactorrea → descarta embarazo, hipotiroidismo y fármacos → PRL alta con microadenoma → <b>cabergolina</b>.</li>
<li>Hombre con hemianopsia bitemporal y disfunción eréctil, PRL en miles → macroprolactinoma → <b>cabergolina</b> (no cirugía de entrada).</li>
<li>Macroadenoma con PRL casi normal → <b>diluir la muestra</b> (efecto gancho); si sigue moderada → no funcionante con efecto tallo → <b>cirugía</b>.</li>
<li>Anillos y zapatos que ya no quedan, sudoración y DM nueva → <b>IGF-1</b>; se confirma con GH tras 75 g de glucosa.</li>
<li>Cushing confirmado con ACTH normal o alta → <b>RM de hipófisis</b>; RM negativa o lesión &lt;6 mm → <b>senos petrosos</b>.</li>
<li>Cefalea súbita, oftalmoplejía e hipotensión en un paciente con adenoma → apoplejía → <b>hidrocortisona IV</b>. Poliuria con Na alto 1–2 días después de la cirugía → <b>AVP-D</b> → desmopresina.</li>
</ul>` }
      ],
      mnemo: { t: 'Se va en orden: “Go Look For The Adenoma”', d: 'GH, LH, FSH, TSH, ACTH: el orden típico en que se pierden las hormonas cuando un adenoma comprime la hipófisis.' },
      pearl: 'Antes de dar levotiroxina en hipopituitarismo, revisa y repón el cortisol: si no, puedes precipitar una crisis suprarrenal.',
      trap: 'Hiperprolactinemia moderada + TSH alta: es hipotiroidismo primario. Trata el tiroides antes de pensar en prolactinoma.',
      guide: [
        'Nombre: desde 2022 se recomienda “deficiencia de arginina vasopresina (AVP-D)” en lugar de “diabetes insípida central”. Tu examen puede usar cualquiera de los dos.',
        'Supresión de GH tras glucosa: el punto de corte clásico es <1 ng/mL; con ensayos ultrasensibles algunos consensos usan <0.4 ng/mL.',
        '⚠️ Depende de la guía: prolactinoma y embarazo. La Endocrine Society 2011 prefiere bromocriptina cuando la paciente busca embarazo (más datos de seguridad); hoy muchos expertos aceptan la cabergolina. En el microprolactinoma, el agonista se suspende al confirmar el embarazo.'
      ],
      refs: [
        'Melmed S, et al. Diagnosis and treatment of hyperprolactinemia: Endocrine Society Guideline. J Clin Endocrinol Metab 2011.',
        'Giustina A, et al. Consensus on criteria for acromegaly diagnosis and remission. Pituitary 2024.',
        'Fleseriu M, et al. Consensus on diagnosis and management of Cushing\'s disease: a guideline update. Lancet Diabetes Endocrinol 2021.',
        'Freda PU, et al. Pituitary incidentaloma: Endocrine Society Guideline. J Clin Endocrinol Metab 2011.',
        'Fleseriu M, et al. Hormonal replacement in hypopituitarism in adults: an Endocrine Society Clinical Practice Guideline. J Clin Endocrinol Metab 2016.',
        'Petersenn S, et al. Diagnosis and management of prolactin-secreting pituitary adenomas: a Pituitary Society international consensus statement. Nat Rev Endocrinol 2023.'
      ]
    }
  },

  compares: {
    'prl-tallo': {
      topic: 'hipofisis', a: 'Prolactinoma', b: 'Efecto tallo',
      rows: [
        ['Qué es', 'El tumor secreta prolactina', 'Otra masa comprime el tallo y corta la dopamina'],
        ['PRL típica', 'Suele ser >250 ng/mL (macro: miles)', 'Moderada, por lo general <100–150 ng/mL'],
        ['Con cabergolina', 'Baja la PRL y el tumor se encoge', 'Baja la PRL, pero el tumor no se encoge'],
        ['Tratamiento', 'Cabergolina, aun macro y con defecto visual', 'Cirugía transesfenoidal si comprime'],
        ['Ojo', 'Tumor gigante con PRL baja: diluir la muestra (efecto gancho)', 'Revisa los demás ejes: suele haber hipopituitarismo']
      ]
    }
  },

  anims: {
    hipofisis: {
      title: 'La silla turca y sus adenomas',
      steps: [
        { cap: '<b>La hipófisis y sus vecinos.</b> Vive en la silla turca, bajo el quiasma óptico y entre los senos cavernosos (carótida y pares III, IV y VI). El hipotálamo la controla por el tallo y sus hormonas salen a la sangre.',
          labels: [[80, 6, 'Hipotálamo'], [104, 30, 'Quiasma óptico'], [80, 80, 'Hipófisis'], [34, 92, 'Seno cavernoso'], [80, 111, 'Seno esfenoidal']] },
        { cap: '<b>Macroadenoma: compresión del quiasma.</b> Al crecer hacia arriba aplasta el centro del quiasma, donde cruzan las fibras nasales: se pierden los dos campos temporales (hemianopsia bitemporal). Además comprime la hipófisis sana: hipopituitarismo.',
          labels: [[80, 66, 'Macroadenoma'], [80, 26, 'Quiasma'], [14, 43, 'OI'], [146, 43, 'OD'], [80, 99, 'Hipófisis sana']] },
        { cap: '<b>Prolactinoma y dopamina.</b> La dopamina del hipotálamo frena todo el tiempo a la prolactina. La cabergolina, agonista D2, imita esa señal: baja la PRL y encoge el tumor, aun si es macroadenoma.',
          labels: [[80, 52, 'Dopamina'], [91, 68, 'Prolactinoma'], [24, 38, 'Cabergolina'], [150, 26, 'PRL']] },
        { cap: '<b>Acromegalia: GH → IGF-1.</b> El adenoma secreta GH y el hígado responde con IGF-1, que agranda manos, pies y mandíbula. Normalmente una carga de 75 g de glucosa frena la GH; en la acromegalia no baja de 1 ng/mL.',
          labels: [[28, 56, 'Adenoma GH'], [66, 84, 'Hígado'], [106, 62, 'IGF-1'], [66, 6, 'Glucosa 75 g'], [151, 72, 'GH']] },
        { cap: '<b>Enfermedad de Cushing.</b> El adenoma secreta ACTH y las suprarrenales fabrican cortisol de más. El cortisol ya no frena al tumor: la dexametasona a dosis baja no suprime y la ACTH está normal o alta.',
          labels: [[28, 56, 'Adenoma ACTH'], [52, 66, 'ACTH'], [90, 86, 'Suprarrenales'], [92, 16, 'Dexametasona'], [143, 90, 'Cortisol']] }
      ]
    }
  },

  cards: [
    ['Micro vs macroadenoma', '<1 cm vs ≥1 cm'],
    ['Defecto visual típico', 'Hemianopsia bitemporal (quiasma)'],
    ['Orden de pérdida en hipopituitarismo', 'GH → LH/FSH → TSH → ACTH'],
    ['Apoplejía hipofisaria: primer tratamiento', 'Hidrocortisona IV'],
    ['Adenoma funcionante más común', 'Prolactinoma'],
    ['Tratamiento de prolactinoma (aun macro)', 'Cabergolina'],
    ['Hiperprolactinemia: causas a descartar', 'Embarazo, hipotiroidismo, fármacos, ERC, compresión del tallo'],
    ['Efecto gancho', 'PRL falsamente baja en macroprolactinoma gigante; diluir'],
    ['Tamizaje de acromegalia', 'IGF-1'],
    ['Confirmación de acromegalia', 'GH no se suprime <1 ng/mL tras 75 g de glucosa'],
    ['Acromegalia: estudio de tamizaje asociado', 'Colonoscopia (pólipos)'],
    ['Cushing: pruebas de tamizaje', 'Cortisol urinario 24 h, salival nocturno, supresión con 1 mg de dexametasona'],
    ['Incidentaloma hipofisario: estudios', 'PRL, IGF-1, tamizaje de Cushing; si es macro, función hipofisaria y campimetría'],
    ['Síndrome de Sheehan', 'Necrosis hipofisaria por hemorragia posparto: no puede lactar, amenorrea, hipopituitarismo'],
    ['Hipotiroidismo central', 'T4 libre baja con TSH baja o “normal”; se ajusta con la T4 libre (mitad superior del rango), no con la TSH'],
    ['Efecto tallo', 'Macroadenoma con PRL moderada (<100–150): la masa corta la dopamina. La cabergolina baja la PRL pero no el tumor → cirugía'],
    ['Pegvisomant: cómo se vigila', 'Con IGF-1 (bloquea el receptor de GH, así que la GH sube)'],
    ['Cateterismo de senos petrosos', 'Gradiente central/periférico de ACTH ≥2 basal o ≥3 tras CRH o desmopresina = origen hipofisario']
  ],

  questions: [
    q({ id: 'hipofisis-01', dif: 1,
      stem: 'Mujer de 27 años con amenorrea de 6 meses y galactorrea. Prueba de embarazo negativa, TSH normal, no toma fármacos. PRL 180 ng/mL. RM: adenoma de 7 mm. ¿Tratamiento?',
      opts: ['Cirugía transesfenoidal', 'Cabergolina', 'Radioterapia', 'Octreotida', 'Observación sin tratamiento'],
      ans: 1,
      exp: 'Microprolactinoma sintomático: agonista dopaminérgico. La cabergolina normaliza la PRL y reduce el tumor en la mayoría.',
      why: ['Segunda línea.', '', 'No es primera línea.', 'Es para acromegalia.', 'Tiene amenorrea; requiere tratamiento.'],
      ref: 'Endocrine Society 2011' }),

    q({ id: 'hipofisis-02', dif: 2,
      stem: 'Hombre de 45 años con cefalea, hemianopsia bitemporal y disfunción eréctil. RM: macroadenoma de 3.5 cm. PRL 3,800 ng/mL. ¿Tratamiento inicial?',
      opts: ['Cirugía urgente', 'Cabergolina, con vigilancia de campos visuales', 'Radioterapia', 'Observación', 'Pegvisomant'],
      ans: 1,
      exp: 'Aun los macroprolactinomas con compresión del quiasma se tratan primero con agonista dopaminérgico: reducen el tumor y mejoran la visión en días a semanas. La cirugía se reserva si no mejora.',
      why: ['No es la primera opción en prolactinoma.', '', 'No es la primera opción.', 'Hay compromiso visual.', 'Es para acromegalia.'],
      ref: 'Endocrine Society 2011' }),

    q({ id: 'hipofisis-03', dif: 2,
      stem: 'Mujer de 34 años con galactorrea, fatiga, estreñimiento y aumento de peso. PRL 58 ng/mL, TSH 32 mUI/L. ¿Qué haces?',
      opts: ['RM de hipófisis y cabergolina', 'Levotiroxina y repetir PRL', 'Cirugía', 'Bromocriptina', 'Octreotida'],
      ans: 1,
      exp: 'En el hipotiroidismo primario la TRH elevada estimula la PRL (y puede agrandar la hipófisis). Se corrige el tiroides y se repite la PRL.',
      why: ['No antes de tratar el hipotiroidismo.', '', 'No hay indicación.', 'No es el problema principal.', 'No tiene relación.'],
      ref: 'Endocrine Society 2011' }),

    q({ id: 'hipofisis-04', dif: 1,
      stem: 'Hombre de 50 años que ya no le quedan sus anillos, con prognatismo, sudoración y diabetes reciente. ¿Mejor prueba de tamizaje?',
      opts: ['GH al azar', 'IGF-1', 'Prolactina', 'Cortisol urinario', 'TSH'],
      ans: 1,
      exp: 'La GH es pulsátil y una medición aislada no sirve. El IGF-1 refleja la GH integrada y es el tamizaje. Se confirma con la falta de supresión de GH tras glucosa oral.',
      why: ['Es pulsátil; poco útil.', '', 'No evalúa el eje de GH.', 'Es para Cushing.', 'No evalúa el eje de GH.'],
      ref: 'Endocrine Society 2014 · Consenso 2024' }),

    q({ id: 'hipofisis-05', dif: 2,
      stem: 'Paciente con IGF-1 elevado. ¿Prueba confirmatoria de acromegalia?',
      opts: ['Supresión con dexametasona', 'GH tras 75 g de glucosa oral (no suprime <1 ng/mL)', 'Estimulación con ACTH', 'Prueba de privación de agua', 'Hipoglucemia inducida por insulina'],
      ans: 1,
      exp: 'Normalmente la glucosa suprime la GH; en la acromegalia, el tumor no se frena.',
      why: ['Es para Cushing.', '', 'Es para insuficiencia suprarrenal.', 'Es para diabetes insípida.', 'Evalúa deficiencia de GH o ACTH.'],
      ref: 'Consenso de acromegalia 2024' }),

    q({ id: 'hipofisis-06', dif: 2,
      stem: 'Hombre de 60 años con macroadenoma conocido presenta cefalea súbita “la peor de su vida”, diplopía, pérdida visual y PA 82/50. ¿Primer paso?',
      opts: ['Cabergolina', 'Hidrocortisona IV', 'Punción lumbar', 'Levotiroxina IV', 'Desmopresina'],
      ans: 1,
      exp: 'Apoplejía hipofisaria con datos de insuficiencia suprarrenal aguda: hidrocortisona IV inmediata (100 mg) y luego RM y valoración neuroquirúrgica.',
      why: ['No es el primer paso.', '', 'No es lo prioritario y puede ser riesgosa.', 'Sin cortisol puede precipitar crisis suprarrenal.', 'No trata la hipotensión.'],
      ref: 'UK guidelines on pituitary apoplexy' }),

    q({ id: 'hipofisis-07', dif: 2,
      stem: 'Mujer de 38 años con obesidad central, estrías violáceas, debilidad proximal e HTA. Cortisol urinario elevado en 2 ocasiones, no suprime con 1 mg de dexametasona. ACTH 78 pg/mL (alta). ¿Siguiente estudio?',
      opts: ['TC de suprarrenales', 'RM de hipófisis', 'TC de tórax', 'Gammagrafía con octreotida', 'Cateterismo de senos petrosos de entrada'],
      ans: 1,
      exp: 'Cushing dependiente de ACTH: la causa más probable es un adenoma hipofisario (enfermedad de Cushing). Si la RM no muestra un adenoma claro (>6 mm), se hace cateterismo de senos petrosos.',
      why: ['Sería si la ACTH estuviera suprimida.', '', 'Se busca ACTH ectópica si las pruebas lo sugieren.', 'No es el primer estudio.', 'Va después de la RM si no es concluyente.'],
      ref: 'Fleseriu, Lancet Diabetes Endocrinol 2021' }),

    q({ id: 'hipofisis-08', dif: 2,
      stem: 'Hallazgo incidental: adenoma hipofisario de 6 mm en una RM por migraña. Sin síntomas. ¿Qué estudios pides?',
      opts: ['Ninguno', 'PRL, IGF-1 y tamizaje de Cushing', 'Solo campimetría', 'Cirugía', 'Biopsia'],
      ans: 1,
      exp: 'Todo incidentaloma se evalúa por hipersecreción (aunque no dé síntomas evidentes). Al ser micro y sin contacto con el quiasma, no requiere campimetría; se repite la RM en 1 año.',
      why: ['Debe evaluarse la función.', '', 'Solo si es macro o cercano al quiasma.', 'No hay indicación.', 'No se biopsia.'],
      ref: 'Endocrine Society 2011' }),

    q({ id: 'hipofisis-09', dif: 3,
      stem: 'Mujer con macroadenoma de 4 cm que invade el seno cavernoso, con cefalea y alteración visual. PRL 42 ng/mL. ¿Qué debes pedir antes de concluir que no es prolactinoma?',
      opts: ['Nada; con 42 no es prolactinoma', 'PRL con dilución (descartar efecto gancho)', 'Macroprolactina', 'Cortisol urinario', 'TSH'],
      ans: 1,
      exp: 'En tumores gigantes la PRL muy alta satura el inmunoensayo y da un valor falsamente bajo (efecto gancho). Con la muestra diluida aparece el valor real.',
      why: ['Puede ser un falso bajo.', '', 'Explica PRL alta sin síntomas, no baja.', 'No responde la pregunta.', 'No responde la pregunta.'],
      ref: 'Endocrine Society 2011' }),

    q({ id: 'hipofisis-10', dif: 2,
      stem: 'Dos días después de una cirugía transesfenoidal, el paciente orina 6 L/día de orina diluida con sodio sérico de 149. ¿Diagnóstico y tratamiento?',
      opts: ['SIADH; restricción de líquidos', 'Deficiencia de arginina vasopresina (diabetes insípida central); desmopresina', 'Diuresis osmótica; insulina', 'Polidipsia primaria; restricción de líquidos', 'Insuficiencia renal; diálisis'],
      ans: 1,
      exp: 'La manipulación del tallo hipofisario puede reducir la ADH: poliuria con orina diluida e hipernatremia. Se trata con desmopresina y líquidos, vigilando el sodio (puede seguir una fase de SIADH).',
      why: ['Daría hiponatremia y orina concentrada.', '', 'No hay hiperglucemia.', 'El sodio estaría bajo o normal.', 'No hay datos.'],
      ref: 'Harrison 21e' }),

    q({ id: 'hipofisis-11', dif: 2,
      stem: 'Mujer de 29 años, 4 meses después de un parto con hemorragia masiva y transfusión. No pudo amamantar y no ha vuelto a menstruar. Fatiga, PA 92/58, Na 129 mEq/L. T4 libre baja, TSH 1.1 mUI/L, cortisol de las 8 a. m. 2.4 µg/dL. ¿Qué inicias primero?',
      opts: ['Levotiroxina sola', 'Hidrocortisona y, después, levotiroxina', 'Cabergolina', 'Estrógeno y progestágeno como único tratamiento', 'Restricción de líquidos por SIADH'],
      ans: 1,
      exp: 'Síndrome de Sheehan: necrosis hipofisaria por la hipotensión del parto. La primera pista es que no puede lactar (falta PRL). T4 libre baja con TSH “normal” = hipotiroidismo central. Primero el glucocorticoide: si das levotiroxina antes, aceleras el metabolismo del poco cortisol que queda y puedes desencadenar una crisis suprarrenal.',
      why: ['Sin cortisol, la levotiroxina puede precipitar una crisis suprarrenal.', '', 'La PRL está baja, no alta: la cabergolina no tiene papel.', 'La reposición hormonal sexual va después y no corrige lo que pone en riesgo su vida.', 'La hiponatremia se explica por la falta de cortisol y se corrige con hidrocortisona.'],
      ref: 'Fleseriu M, et al. Endocrine Society hipopituitarismo 2016' }),

    q({ id: 'hipofisis-12', dif: 2,
      stem: 'Hombre de 50 años con hipopituitarismo tras la cirugía de un macroadenoma. Toma hidrocortisona y levotiroxina 100 µg/día; está asintomático. T4 libre en la mitad superior del rango normal y TSH 0.05 mUI/L. Un residente propone bajar la levotiroxina. ¿Qué haces?',
      opts: ['Bajar la levotiroxina hasta normalizar la TSH', 'Mantener la dosis: en el hipotiroidismo central se ajusta con la T4 libre, no con la TSH', 'Suspender la hidrocortisona', 'Medir anticuerpos antitiroideos', 'Subir la levotiroxina para llevar la TSH a 2'],
      ans: 1,
      exp: 'En el hipotiroidismo central la hipófisis no produce TSH, así que una TSH baja no significa exceso de levotiroxina. La dosis se ajusta con la T4 libre, buscando la mitad superior del rango normal.',
      why: ['Lo dejaría hipotiroideo: la TSH no sirve para ajustar.', '', 'Tiene déficit de ACTH: suspenderla es peligroso.', 'No cambia el manejo: el problema es hipofisario.', 'La TSH no responde porque la hipófisis no funciona.'],
      ref: 'Fleseriu M, et al. Endocrine Society hipopituitarismo 2016' }),

    q({ id: 'hipofisis-13', dif: 3,
      stem: 'Hombre de 47 años con acromegalia. Tras la cirugía transesfenoidal y 6 meses de octreotida LAR, el IGF-1 sigue 1.8 veces arriba del límite. Se agrega pegvisomant. ¿Con qué estudio vigilas la respuesta?',
      opts: ['GH basal', 'IGF-1', 'Supresión de GH con glucosa', 'Prolactina', 'Cortisol libre en orina'],
      ans: 1,
      exp: 'El pegvisomant bloquea el receptor de GH: la GH sigue alta (incluso sube), pero su efecto desaparece. Por eso la respuesta se mide con el IGF-1, que debe normalizarse. Vigila también las transaminasas y el tamaño del tumor con RM.',
      why: ['La GH sube con el pegvisomant; no refleja el control.', '', 'Por la misma razón, la GH no sirve para medir la respuesta.', 'No evalúa el eje de GH.', 'Es para Cushing.'],
      ref: 'Endocrine Society acromegalia 2014 · Consenso 2024' }),

    q({ id: 'hipofisis-14', dif: 3,
      stem: 'Mujer de 33 años con Cushing dependiente de ACTH y RM de hipófisis sin adenoma. En el cateterismo de senos petrosos inferiores, el gradiente central/periférico de ACTH es 1.2 basal y 1.4 tras CRH. ¿Qué sugiere y qué sigue?',
      opts: ['Enfermedad de Cushing: cirugía transesfenoidal', 'Secreción ectópica de ACTH: TC de tórax y abdomen', 'Adenoma suprarrenal: TC de suprarrenales', 'Cushing por glucocorticoides exógenos', 'Pseudo-Cushing por alcohol'],
      ans: 1,
      exp: 'Un gradiente central/periférico ≥2 basal o ≥3 tras CRH (o desmopresina) confirma el origen hipofisario. Sin gradiente, la ACTH viene de otro sitio: busca un tumor ectópico (el clásico es el carcinoide bronquial) con TC de tórax y abdomen y, si no aparece, PET con análogos de somatostatina.',
      why: ['Sin gradiente, la hipófisis no es la fuente.', '', 'Con ACTH alta no es suprarrenal: el adenoma suprarrenal suprime la ACTH.', 'Los glucocorticoides exógenos suprimen la ACTH.', 'El pseudo-Cushing no explica un Cushing confirmado dependiente de ACTH.'],
      ref: 'Fleseriu M, et al. Lancet Diabetes Endocrinol 2021' }),

    q({ id: 'hipofisis-15', dif: 3,
      stem: 'Hombre de 58 años con cefalea y hemianopsia bitemporal. RM: macroadenoma de 2.8 cm. PRL 64 ng/mL, igual al diluir la muestra. IGF-1 y cortisol normales; LH y testosterona bajas. ¿Cuál es el tratamiento indicado?',
      opts: ['Cabergolina, porque la PRL está alta', 'Cirugía transesfenoidal', 'Radioterapia como primera opción', 'Observación con RM en 1 año', 'Octreotida'],
      ans: 1,
      exp: 'Macroadenoma con PRL solo moderadamente alta (y sin efecto gancho al diluir) = adenoma no funcionante con efecto tallo: la masa corta el paso de la dopamina. La cabergolina bajaría la PRL, pero el tumor no se encogería. Con compromiso visual, el tratamiento es la cirugía transesfenoidal.',
      why: ['Normaliza la PRL pero no reduce un tumor no funcionante; la visión seguiría en riesgo.', '', 'Se reserva para tumor residual o recurrente.', 'Con defecto visual no se observa.', 'Es para acromegalia o tumores productores de TSH.'],
      ref: 'Freda PU, et al. Endocrine Society 2011 · Pituitary Society 2023' })
  ]
};
