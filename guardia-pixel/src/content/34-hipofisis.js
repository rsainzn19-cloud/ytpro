// Tema 25 · Tumores hipofisarios (Endocrinología, semanas 1–2)
const T = { topic: 'hipofisis', subj: 'endo' };
const q = (o) => ({ ...T, ...o });

export default {
  lessons: {
    hipofisis: {
      hook: 'Un adenoma hipofisario da problemas de dos formas: por lo que secreta y por lo que comprime. Sabe qué pedir ante un incidentaloma y el tratamiento de cada tumor funcionante.',
      nn: [['pituitary-disorders', 'Pituitary Disorders'], ['cushings-syndrome', 'Cushing\'s Syndrome']],
      yt: 'pituitary adenoma prolactinoma acromegaly',
      sections: [
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
</ul>` }
      ],
      mnemo: { t: 'Se va en orden: “Go Look For The Adenoma”', d: 'GH, LH, FSH, TSH, ACTH: el orden típico en que se pierden las hormonas cuando un adenoma comprime la hipófisis.' },
      pearl: 'Antes de dar levotiroxina en hipopituitarismo, revisa y repón el cortisol: si no, puedes precipitar una crisis suprarrenal.',
      trap: 'Hiperprolactinemia moderada + TSH alta: es hipotiroidismo primario. Trata el tiroides antes de pensar en prolactinoma.',
      guide: [
        'Nombre: desde 2022 se recomienda “deficiencia de arginina vasopresina (AVP-D)” en lugar de “diabetes insípida central”. Tu examen puede usar cualquiera de los dos.',
        'Supresión de GH tras glucosa: el punto de corte clásico es <1 ng/mL; con ensayos ultrasensibles algunos consensos usan <0.4 ng/mL.'
      ],
      refs: [
        'Melmed S, et al. Diagnosis and treatment of hyperprolactinemia: Endocrine Society Guideline. J Clin Endocrinol Metab 2011.',
        'Giustina A, et al. Consensus on criteria for acromegaly diagnosis and remission. Pituitary 2024.',
        'Fleseriu M, et al. Consensus on diagnosis and management of Cushing\'s disease: a guideline update. Lancet Diabetes Endocrinol 2021.',
        'Freda PU, et al. Pituitary incidentaloma: Endocrine Society Guideline. J Clin Endocrinol Metab 2011.'
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
    ['Incidentaloma hipofisario: estudios', 'PRL, IGF-1, tamizaje de Cushing; si es macro, función hipofisaria y campimetría']
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
      ref: 'Harrison 21e' })
  ]
};
