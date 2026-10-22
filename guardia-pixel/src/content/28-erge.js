// Tema 19 · Enfermedad por reflujo gastroesofágico (Gastroenterología, semana 2)
const T = { topic: 'erge', subj: 'gastro' };
const q = (o) => ({ ...T, ...o });

export default {
  lessons: {
    erge: {
      hook: 'Pirosis sin datos de alarma: prueba con IBP y no pidas endoscopia. Aprende cuándo sí, cómo se clasifica la esofagitis y qué hacer con un Barrett.',
      nn: [['gerd', 'Gastroesophageal Reflux Disease (GERD)'], ['esophagitis', 'Esophagitis']],
      yt: 'GERD Barrett esophagus',
      sections: [
        { h: 'Clínica', html: `
<ul>
<li><b>Típicos</b>: pirosis y regurgitación, peor después de comer y al acostarse.</li>
<li><b>Atípicos y extraesofágicos</b>: tos crónica, ronquera (laringitis), asma de difícil control, erosiones dentales, <b>dolor torácico no cardiaco</b> (descarta primero origen cardiaco).</li>
<li>Factores: obesidad, hernia hiatal, embarazo, tabaco, comidas abundantes o nocturnas, fármacos que relajan el esfínter (calcioantagonistas, nitratos, anticolinérgicos).</li>
</ul>` },
        { h: 'Datos de alarma → endoscopia', html: `
<ul>
<li><b>Disfagia</b>, odinofagia, pérdida de peso no intencional, sangrado digestivo o anemia ferropénica, vómito persistente, masa.</li>
<li>Síntomas que no responden a IBP en 8 semanas.</li>
<li>Tamizaje de <b>Barrett</b> (ACG 2022): ERGE crónica + ≥3 factores: hombre, &gt;50 años, raza blanca, obesidad central, tabaquismo, familiar de primer grado con Barrett o adenocarcinoma.</li>
<li><b>Clasificación de Los Ángeles</b> (A–D según la extensión de las erosiones). LA C o D, Barrett largo o estenosis péptica confirman ERGE.</li>
<li><b>pH-impedancia ambulatoria</b> (sin IBP): cuando el diagnóstico es dudoso, endoscopia normal con síntomas refractarios, o antes de cirugía. Tiempo de exposición al ácido &gt;6% es concluyente.</li>
</ul>` },
        { h: 'Tratamiento', html: `
<ul>
<li>Bajar de peso, elevar la cabecera de la cama, no cenar 2–3 h antes de acostarse, dejar de fumar. Excluir alimentos solo si provocan síntomas.</li>
<li><b>IBP</b> una vez al día, 30–60 min antes del desayuno, por 8 semanas. Si la respuesta es parcial: ajustar el horario o dar dos dosis.</li>
<li>Después: bajar a la dosis mínima eficaz o a demanda. <b>Mantenimiento</b> indefinido en esofagitis LA C/D y Barrett.</li>
<li><b>Cirugía</b> (funduplicatura de Nissen, esfínter magnético): ERGE confirmada que no se controla o el paciente no quiere IBP de por vida; útil sobre todo para regurgitación. Obesidad mórbida: bypass gástrico en Y de Roux.</li>
<li>Vonoprazán (bloqueador de ácido competitivo con el potasio): opción en esofagitis erosiva grave.</li>
</ul>` },
        { h: 'Esófago de Barrett', html: `
<ul>
<li>Metaplasia <b>intestinal</b> (células caliciformes) que reemplaza al epitelio escamoso ≥1 cm por arriba de la unión esofagogástrica. Precursor de <b>adenocarcinoma</b>.</li>
<li>Sin displasia: vigilancia endoscópica cada 5 años si mide &lt;3 cm y cada 3 años si ≥3 cm (ACG 2022), con IBP.</li>
<li>Displasia de bajo grado (confirmada por segundo patólogo): terapia endoscópica de erradicación (ablación) o vigilancia a 12 meses.</li>
<li>Displasia de alto grado o cáncer intramucoso: resección endoscópica de lesiones visibles + ablación.</li>
</ul>` }
      ],
      mnemo: { t: 'Alarma = “DOPA-V”', d: 'Disfagia, Odinofagia, Pérdida de peso, Anemia o sangrado, Vómito persistente: cualquiera manda a endoscopia.' },
      pearl: 'La respuesta a la prueba con IBP apoya el diagnóstico pero no lo confirma: sensibilidad ~70% y especificidad baja.',
      trap: 'Dolor torácico “por reflujo” en un hombre de 58 años con factores de riesgo: primero descarta isquemia, luego piensa en el esófago.',
      guide: [
        'Vigilancia de Barrett sin displasia: ACG 2022 propone 3–5 años según longitud; la BSG 2013 usa 2–5 años. Dato de examen: Barrett se vigila con endoscopia y biopsias, no se opera.',
        'Tamizaje de Barrett: ACG 2022 pide ≥3 factores de riesgo; guías previas solo pedían hombre >50 años con ERGE crónica.'
      ],
      refs: [
        'Katz PO, et al. ACG Clinical Guideline for the Diagnosis and Management of GERD. Am J Gastroenterol 2022.',
        'Shaheen NJ, et al. ACG Clinical Guideline: Diagnosis and Management of Barrett\'s Esophagus. Am J Gastroenterol 2022.',
        'Gyawali CP, et al. Lyon Consensus 2.0. Gut 2024.'
      ]
    }
  },

  cards: [
    ['Síntomas típicos de ERGE', 'Pirosis y regurgitación'],
    ['Prueba inicial sin datos de alarma', 'IBP por 8 semanas antes del desayuno'],
    ['Datos de alarma', 'Disfagia, odinofagia, pérdida de peso, sangrado/anemia, vómito persistente'],
    ['Clasificación endoscópica de esofagitis', 'Los Ángeles A–D'],
    ['Hallazgos que confirman ERGE en endoscopia', 'Esofagitis LA C/D, Barrett largo, estenosis péptica'],
    ['pH-impedancia: valor concluyente', 'Exposición al ácido >6% del tiempo'],
    ['Esófago de Barrett', 'Metaplasia intestinal (células caliciformes) ≥1 cm sobre la unión esofagogástrica'],
    ['Cáncer asociado a Barrett', 'Adenocarcinoma de esófago distal'],
    ['Barrett sin displasia <3 cm', 'Vigilancia cada 5 años + IBP'],
    ['Barrett con displasia de alto grado', 'Resección endoscópica + ablación'],
    ['Cirugía antirreflujo clásica', 'Funduplicatura de Nissen'],
    ['ERGE en obesidad mórbida', 'Bypass gástrico en Y de Roux']
  ],

  questions: [
    q({ id: 'erge-01', dif: 1,
      stem: 'Mujer de 32 años con pirosis postprandial 3 veces por semana, sin disfagia ni pérdida de peso. ¿Siguiente paso?',
      opts: ['Endoscopia', 'IBP por 8 semanas y medidas generales', 'pH-metría de 24 h', 'Manometría esofágica', 'Serie esofagogastroduodenal'],
      ans: 1,
      exp: 'ERGE típica sin datos de alarma: tratamiento empírico con IBP. La endoscopia se reserva para alarma, falta de respuesta o tamizaje de Barrett.',
      why: ['No es necesaria sin alarma.', '', 'Se usa si hay duda diagnóstica o refractariedad.', 'Se usa en disfagia sin obstrucción o antes de cirugía.', 'No es el estudio de elección.'],
      ref: 'ACG 2022 ERGE' }),

    q({ id: 'erge-02', dif: 1,
      stem: 'Hombre de 62 años con pirosis de años que ahora tiene disfagia a sólidos progresiva y pérdida de 6 kg. ¿Qué haces?',
      opts: ['Doble dosis de IBP', 'Endoscopia alta', 'Funduplicatura', 'Antiácidos', 'Repetir la prueba con IBP'],
      ans: 1,
      exp: 'Disfagia y pérdida de peso son datos de alarma: estenosis péptica o adenocarcinoma sobre Barrett. Se requiere endoscopia con biopsias.',
      why: ['No antes de descartar cáncer.', '', 'No sin diagnóstico.', 'Insuficiente.', 'Retrasa el diagnóstico.'],
      ref: 'ACG 2022 ERGE' }),

    q({ id: 'erge-03', dif: 2,
      stem: 'Endoscopia en un hombre de 55 años con ERGE: lengüeta de mucosa color salmón de 4 cm sobre la unión esofagogástrica. Biopsia con metaplasia intestinal sin displasia. ¿Manejo?',
      opts: ['Esofagectomía', 'IBP y vigilancia endoscópica cada 3 años', 'Ablación inmediata', 'Ningún seguimiento', 'Endoscopia cada 6 meses'],
      ans: 1,
      exp: 'Barrett largo (≥3 cm) sin displasia: IBP y vigilancia cada 3 años (cada 5 si mide menos de 3 cm). La ablación se reserva para displasia.',
      why: ['Excesivo para Barrett sin displasia.', '', 'No está indicada sin displasia.', 'Requiere vigilancia.', 'Demasiado frecuente.'],
      ref: 'ACG 2022 Barrett' }),

    q({ id: 'erge-04', dif: 2,
      stem: 'Paciente con Barrett y displasia de alto grado confirmada, con una lesión nodular visible. ¿Tratamiento?',
      opts: ['Vigilancia a 12 meses', 'Resección endoscópica de la lesión + ablación del Barrett restante', 'Esofagectomía de entrada', 'Aumentar el IBP', 'Quimiorradioterapia'],
      ans: 1,
      exp: 'La terapia endoscópica de erradicación es el estándar: resección mucosa de lesiones visibles (estadifica) y ablación por radiofrecuencia del resto.',
      why: ['Riesgo alto de progresión.', '', 'Se reserva para invasión profunda.', 'No trata la displasia.', 'No indicada en displasia.'],
      ref: 'ACG 2022 Barrett' }),

    q({ id: 'erge-05', dif: 2,
      stem: 'Mujer de 45 años con pirosis que persiste pese a omeprazol 20 mg que toma por la noche. Endoscopia normal. ¿Primer ajuste?',
      opts: ['Cirugía antirreflujo', 'Tomar el IBP 30–60 min antes del desayuno y verificar adherencia', 'Agregar antibióticos', 'Suspender el IBP', 'Manometría urgente'],
      ans: 1,
      exp: 'El IBP actúa sobre bombas activas: se toma antes de la primera comida. Muchas “refractariedades” son por mal horario o mala adherencia. Si persiste: dos dosis y luego pH-impedancia.',
      why: ['No antes de optimizar y confirmar ERGE.', '', 'No hay indicación.', 'Primero optimiza.', 'No es el primer paso.'],
      ref: 'ACG 2022 ERGE' }),

    q({ id: 'erge-06', dif: 2,
      stem: 'Hombre con pirosis refractaria y endoscopia normal. Se planea cirugía antirreflujo. ¿Qué estudio es indispensable antes?',
      opts: ['pH-impedancia sin IBP y manometría esofágica', 'TC de abdomen', 'Colonoscopia', 'Ultrasonido de vesícula', 'Prueba de aliento para H. pylori'],
      ans: 0,
      exp: 'Antes de operar hay que confirmar reflujo patológico (pH-impedancia) y descartar acalasia u otro trastorno motor (manometría), que empeorarían con una funduplicatura.',
      why: ['', 'No evalúa reflujo.', 'No tiene relación.', 'No evalúa reflujo.', 'No confirma ERGE.'],
      ref: 'ACG 2022 ERGE' }),

    q({ id: 'erge-07', dif: 1,
      stem: '¿Cuál de estos pacientes con ERGE crónica cumple criterios de tamizaje de Barrett según la ACG 2022?',
      opts: ['Mujer de 30 años sin otros factores', 'Hombre de 58 años, fumador, con obesidad central', 'Mujer de 40 años delgada', 'Hombre de 25 años con pirosis ocasional', 'Ninguno; nunca se tamiza'],
      ans: 1,
      exp: 'Se tamiza a quien tiene ERGE crónica y ≥3 factores: hombre, >50 años, raza blanca, obesidad central, tabaquismo, antecedente familiar. Este paciente reúne cuatro.',
      why: ['No reúne factores.', '', 'Solo uno o ninguno.', 'Joven y sin factores.', 'Sí se tamiza en grupos de riesgo.'],
      ref: 'ACG 2022 Barrett' }),

    q({ id: 'erge-08', dif: 2,
      stem: 'Hombre de 50 años con tos crónica nocturna y ronquera. Rx de tórax normal, sin asma ni goteo posnasal, no usa IECA. ¿Qué causa consideras?',
      opts: ['Cáncer de pulmón', 'ERGE con manifestaciones extraesofágicas', 'Insuficiencia cardiaca', 'Tuberculosis', 'Sarcoidosis'],
      ans: 1,
      exp: 'Tos crónica con Rx normal: las tres causas principales son goteo posnasal, asma y ERGE. Excluidas las otras, el reflujo es probable. Si hay pirosis, prueba con IBP; si no, confirma con pH-impedancia.',
      why: ['La Rx es normal.', '', 'No hay datos.', 'La Rx es normal.', 'La Rx es normal.'],
      ref: 'ACG 2022 ERGE' }),

    q({ id: 'erge-09', dif: 1,
      stem: 'Endoscopia: erosiones confluentes que abarcan más del 75% de la circunferencia del esófago. ¿Grado de Los Ángeles?',
      opts: ['A', 'B', 'C', 'D', 'No se clasifica'],
      ans: 3,
      exp: 'LA A: erosiones <5 mm. B: >5 mm sin confluir. C: confluyen pero <75% de la circunferencia. D: ≥75% de la circunferencia.',
      why: ['Erosiones <5 mm.', 'Erosiones >5 mm sin confluencia.', 'Confluyen pero <75%.', '', 'Sí se clasifica.'],
      ref: 'Clasificación de Los Ángeles' }),

    q({ id: 'erge-10', dif: 2,
      stem: 'Paciente con esofagitis LA grado C que cicatrizó tras 8 semanas de IBP. ¿Qué sigue?',
      opts: ['Suspender el IBP', 'IBP de mantenimiento a largo plazo', 'IBP solo a demanda', 'Cirugía obligatoria', 'Cambiar a antiácidos'],
      ans: 1,
      exp: 'La esofagitis grave (LA C/D) recae casi siempre al suspender: se mantiene IBP a la dosis mínima eficaz de forma indefinida (o cirugía si el paciente lo prefiere).',
      why: ['Alta recaída.', '', 'Solo para ERGE no erosiva o LA A/B.', 'Es una alternativa, no obligatoria.', 'Insuficiente.'],
      ref: 'ACG 2022 ERGE' })
  ]
};
