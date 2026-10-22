// Tema 15 · Tromboembolia pulmonar (Cardiología, semana 5)
const T = { topic: 'tep', subj: 'cardio' };
const q = (o) => ({ ...T, ...o });

export default {
  lessons: {
    tep: {
      hook: 'El algoritmo cabe en una tarjeta: ¿está estable? → probabilidad clínica → dímero D o angio-TC → riesgo (PESI, VD, troponina) → anticoagulante o trombólisis.',
      anim: 'tep',
      nn: [['pulmonary-embolism-etiology-pathophysiology-diagnosis-clinical-features-treatment', 'Venous Thromboembolism']],
      yt: 'pulmonary embolism',
      sections: [
        { h: 'Sospecha', html: `
<ul>
<li><b>Tríada de Virchow</b>: estasis, daño endotelial, hipercoagulabilidad.</li>
<li><b>Factores</b>: cirugía mayor u ortopédica, inmovilización, cáncer, embarazo y puerperio, estrógenos, trombofilias, TVP previa, obesidad, viajes largos.</li>
<li><b>Clínica</b>: disnea súbita (lo más común), dolor pleurítico, taquicardia, taquipnea, hemoptisis; síncope o choque si es masiva. Pierna edematosa si hay TVP.</li>
<li><b>ECG</b>: taquicardia sinusal (lo más frecuente); S1Q3T3, BRDHH nuevo, T invertidas en V1–V4 por sobrecarga del VD.</li>
<li>Gasometría con hipoxemia y alcalosis respiratoria. La Rx suele ser casi normal (raros: Westermark, joroba de Hampton).</li>
</ul>` },
        { h: 'Diagnóstico (ESC 2019)', html: `
<ol>
<li><b>¿Inestable?</b> (choque o hipotensión): ecocardiograma a la cabecera; si hay dilatación del VD y no puede ir a angio-TC, se trata como TEP de alto riesgo.</li>
<li><b>Estable</b>: probabilidad clínica con <b>Wells</b> o Ginebra (calculadora en Más → Calculadoras).</li>
<li>Probabilidad baja/intermedia o “improbable” (Wells ≤4) → <b>dímero D</b> (ajustado por edad &gt;50 años: edad × 10 µg/L). Negativo = descartado. Positivo → angio-TC.</li>
<li>Probabilidad alta o “probable” (Wells &gt;4) → <b>angio-TC directa</b> (el dímero D no sirve para descartar).</li>
<li>Contraindicación al contraste o embarazo con Rx normal → <b>gammagrama V/Q</b>. En el embarazo, si hay síntomas de TVP, primero USG Doppler.</li>
<li>En urgencias, con probabilidad muy baja, los criterios <b>PERC</b> negativos permiten no pedir dímero D.</li>
</ol>` },
        { h: 'Estratificación del riesgo', html: `
<div class="tablewrap"><table class="mini">
<tr><th>Riesgo</th><th>Definición</th><th>Tratamiento</th></tr>
<tr><td><b>Alto</b></td><td>Inestabilidad: paro, choque (PAS &lt;90 o vasopresor con hipoperfusión) o hipotensión persistente</td><td>Heparina no fraccionada + <b>trombólisis sistémica</b> (alteplasa 100 mg en 2 h). Si está contraindicada: embolectomía quirúrgica o por catéter</td></tr>
<tr><td>Intermedio-alto</td><td>sPESI ≥1 + disfunción del VD (eco o TC) + troponina elevada</td><td>Anticoagulación y vigilancia estrecha; trombólisis de rescate si se descompensa</td></tr>
<tr><td>Intermedio-bajo</td><td>sPESI ≥1 con uno o ninguno de esos hallazgos</td><td>Anticoagulación hospitalaria</td></tr>
<tr><td>Bajo</td><td>sPESI 0, sin disfunción del VD</td><td>Anticoagulante oral; alta temprana o manejo ambulatorio</td></tr>
</table></div>` },
        { h: 'Anticoagulación', html: `
<ul>
<li><b>ACOD</b> de elección en la mayoría: rivaroxabán o apixabán (sin heparina previa); dabigatrán y edoxabán (tras ≥5 días de heparina).</li>
<li><b>Warfarina</b> (INR 2–3) con traslape de heparina ≥5 días y hasta INR en rango 24 h. Indicada en síndrome antifosfolípido (sobre todo triple positivo), válvulas mecánicas y ERC muy avanzada.</li>
<li><b>Embarazo</b>: heparina de bajo peso molecular (ACOD y warfarina contraindicados).</li>
<li><b>Cáncer</b>: HBPM o ACOD (edoxabán, rivaroxabán, apixabán); cuidado con tumores digestivos o urinarios por sangrado.</li>
<li><b>Filtro de vena cava</b>: solo si la anticoagulación está absolutamente contraindicada.</li>
<li><b>Duración</b>: provocada por un factor transitorio mayor (cirugía, trauma) → 3 meses. No provocada o factor persistente → se considera indefinida. Cáncer activo → mientras esté activo (≥6 meses).</li>
</ul>` }
      ],
      mnemo: { t: 'Wells en una frase: “Pierna, Primer diagnóstico, Pulso, Paciente quieto, Previo, Pulmón sangra, Proceso maligno”', d: 'Signos de TVP (3) · TEP es el diagnóstico más probable (3) · FC >100 (1.5) · inmovilización o cirugía reciente (1.5) · TVP/TEP previos (1.5) · hemoptisis (1) · cáncer (1). Más de 4 = probable.' },
      pearl: 'El dímero D solo sirve para descartar: úsalo cuando la probabilidad es baja o intermedia. Con probabilidad alta, ve directo a la angio-TC.',
      trap: 'Trombolizar a un TEP estable con troponina alta y VD dilatado (intermedio-alto): PEITHO mostró más sangrados sin beneficio en mortalidad. Se anticoagula y se vigila.',
      guide: [
        'La ESC 2019 sigue vigente para TEP; el ajuste del dímero D por edad y el algoritmo YEARS son aceptados. ⚠️ Si tu profesor usa otro umbral de dímero D, apréndete el suyo.'
      ],
      refs: [
        'Konstantinides SV, et al. 2019 ESC Guidelines for the diagnosis and management of acute pulmonary embolism. Eur Heart J 2020.',
        'Stevens SM, et al. Antithrombotic Therapy for VTE Disease: CHEST Guideline 2021.'
      ]
    }
  },

  anims: {
    tep: {
      title: 'Del trombo al choque obstructivo',
      steps: [
        { cap: '<b>Trombo venoso.</b> Un trombo en las venas profundas de la pierna se desprende y viaja por la vena cava, cruza el corazón derecho y llega a la arteria pulmonar.',
          labels: [[24, 104, 'TVP'], [70, 50, 'VD'], [130, 14, 'Arteria pulmonar']] },
        { cap: '<b>Oclusión.</b> El émbolo tapa ramas pulmonares: hay alvéolos ventilados sin perfusión (espacio muerto) e hipoxemia. Aumenta la resistencia vascular pulmonar.',
          labels: [[130, 30, 'Émbolo'], [120, 80, 'V/Q alterada']] },
        { cap: '<b>Sobrecarga del VD.</b> El VD, de pared delgada, se dilata para vencer la resistencia. Empuja el tabique hacia el VI (forma de “D”) y sube la troponina por isquemia del VD.',
          labels: [[60, 60, 'VD dilatado'], [104, 60, 'VI comprimido']] },
        { cap: '<b>Choque obstructivo.</b> El VI recibe poca sangre y cae el gasto: hipotensión y síncope. Es un TEP de alto riesgo: trombólisis sistémica.',
          labels: [[104, 60, 'Gasto ↓'], [80, 104, 'Trombólisis']] }
      ]
    }
  },

  cards: [
    ['ECG más frecuente en TEP', 'Taquicardia sinusal'],
    ['Wells >4', 'TEP probable: angio-TC directa'],
    ['Wells ≤4', 'Improbable: dímero D; si es negativo, se descarta'],
    ['Dímero D ajustado por edad', 'Edad × 10 µg/L en >50 años'],
    ['TEP de alto riesgo', 'Choque o hipotensión: heparina no fraccionada + trombólisis'],
    ['Intermedio-alto', 'VD dilatado + troponina alta, estable: anticoagular y vigilar'],
    ['sPESI', 'Edad >80, cáncer, enfermedad cardiopulmonar crónica, FC ≥110, PAS <100, SatO₂ <90%'],
    ['TEP en el embarazo', 'Heparina de bajo peso molecular'],
    ['TEP con síndrome antifosfolípido', 'Warfarina (no ACOD)'],
    ['Contraste contraindicado', 'Gammagrama V/Q'],
    ['Duración tras TEP provocado por cirugía', '3 meses'],
    ['Filtro de vena cava', 'Solo si no se puede anticoagular']
  ],

  questions: [
    q({ id: 'tep-01', dif: 1,
      stem: 'Mujer de 34 años con dolor pleurítico y disnea leve. FC 92, sin signos de TVP, sin antecedentes; TEP no es el diagnóstico más probable. Wells 0. ¿Siguiente paso?',
      opts: ['Angio-TC de inmediato', 'Dímero D; si es negativo, se descarta TEP', 'Anticoagular empíricamente', 'Gammagrama V/Q', 'Ecocardiograma'],
      ans: 1,
      exp: 'Con probabilidad baja (Wells ≤4) se pide dímero D; un resultado negativo descarta TEP sin imagen. Solo si es positivo se pide angio-TC.',
      why: ['Expone a radiación y contraste sin necesidad.', '', 'Sin probabilidad alta no se anticoagula empíricamente.', 'No es el primer paso.', 'No diagnostica TEP en un paciente estable.'],
      ref: 'ESC 2019 TEP' }),

    q({ id: 'tep-02', dif: 1,
      stem: 'Hombre de 58 años, 10 días después de un reemplazo de cadera. Pierna derecha edematosa y dolorosa, disnea súbita, FC 112. Estable. Wells 7.5. ¿Siguiente paso?',
      opts: ['Dímero D', 'Angio-TC pulmonar', 'Rx de tórax y alta', 'Prueba de esfuerzo', 'Troponinas seriadas'],
      ans: 1,
      exp: 'Con probabilidad alta (Wells >4), el dímero D no basta para descartar: se va directo a la angio-TC (y se puede iniciar anticoagulación mientras, si no hay contraindicación).',
      why: ['Con probabilidad alta, un dímero D negativo no descarta.', '', 'Peligroso.', 'Contraindicada.', 'No diagnostican TEP.'],
      ref: 'ESC 2019 TEP' }),

    q({ id: 'tep-03', dif: 2,
      stem: 'Mujer de 72 años con sospecha de TEP y probabilidad baja. Dímero D 620 µg/L (punto de corte habitual 500). ¿Cómo lo interpretas?',
      opts: ['Positivo: angio-TC', 'Con el ajuste por edad (72 × 10 = 720 µg/L) es negativo: se descarta TEP', 'No se puede interpretar en mayores de 70', 'Siempre se pide angio-TC en mayores de 70', 'Requiere V/Q'],
      ans: 1,
      exp: 'El dímero D sube con la edad. En mayores de 50 años, el punto de corte ajustado (edad × 10 µg/L) mantiene la seguridad y evita estudios innecesarios (ADJUST-PE).',
      why: ['Con el ajuste por edad es negativo.', '', 'Sí se puede, con ajuste.', 'Con probabilidad baja y dímero ajustado negativo no hace falta.', 'No es necesaria.'],
      ref: 'Righini M, et al. ADJUST-PE, JAMA 2014' }),

    q({ id: 'tep-04', dif: 1,
      stem: 'Mujer con 20 semanas de embarazo y TEP confirmado, estable. ¿Anticoagulante?',
      opts: ['Warfarina', 'Rivaroxabán', 'Heparina de bajo peso molecular', 'Dabigatrán', 'Aspirina'],
      ans: 2,
      exp: 'La HBPM no cruza la placenta y es el tratamiento de elección en el embarazo. La warfarina es teratogénica y los ACOD no se recomiendan.',
      why: ['Teratogénica (embriopatía).', 'No recomendado en el embarazo.', '', 'No recomendado en el embarazo.', 'No trata el TEP.'],
      ref: 'ESC 2019 TEP · ASH 2018 embarazo' }),

    q({ id: 'tep-05', dif: 2,
      stem: 'Mujer de 40 años con TEP y síndrome antifosfolípido triple positivo. ¿Anticoagulante de largo plazo?',
      opts: ['Rivaroxabán', 'Apixabán', 'Warfarina con INR 2–3', 'Aspirina sola', 'Filtro de vena cava'],
      ans: 2,
      exp: 'En el síndrome antifosfolípido (sobre todo triple positivo), los ACOD tuvieron más eventos trombóticos que la warfarina (TRAPS). Se usa warfarina.',
      why: ['Más trombosis en SAF triple positivo.', 'No recomendado en SAF de alto riesgo.', '', 'Insuficiente.', 'Solo si no puede anticoagularse.'],
      ref: 'Pengo V, et al. TRAPS, Blood 2018' }),

    q({ id: 'tep-06', dif: 2,
      stem: 'Hombre de 65 años con TEP. PA 124/78, FC 104. Eco con VD dilatado y troponina elevada. sPESI 1. ¿Tratamiento?',
      opts: ['Trombólisis sistémica inmediata', 'Anticoagulación con vigilancia estrecha; trombólisis de rescate si se descompensa', 'Alta con ACOD', 'Filtro de vena cava', 'Embolectomía quirúrgica'],
      ans: 1,
      exp: 'Riesgo intermedio-alto (estable con disfunción del VD y troponina alta). La trombólisis primaria no redujo mortalidad y aumentó hemorragias (PEITHO). Se anticoagula en un área monitorizada.',
      why: ['No está indicada mientras esté estable.', '', 'Requiere vigilancia hospitalaria.', 'Sin contraindicación para anticoagular no está indicado.', 'No hay inestabilidad.'],
      ref: 'PEITHO, NEJM 2014 · ESC 2019' }),

    q({ id: 'tep-07', dif: 1,
      stem: 'Hombre de 45 años con TEP 3 semanas después de una cirugía de rodilla, sin otros factores. ¿Duración de la anticoagulación?',
      opts: ['6 semanas', '3 meses', '1 año obligatorio', 'De por vida', 'Solo durante la hospitalización'],
      ans: 1,
      exp: 'Un TEP provocado por un factor transitorio mayor (cirugía) tiene bajo riesgo de recurrencia: 3 meses de anticoagulación.',
      why: ['Insuficiente.', '', 'Excesivo sin otros factores.', 'Para TEP no provocado o factor persistente se considera.', 'Insuficiente.'],
      ref: 'ESC 2019 · CHEST 2021' }),

    q({ id: 'tep-08', dif: 2,
      stem: 'Mujer de 55 años con TEP sin factor desencadenante identificado, bajo riesgo de sangrado. Terminó 3 meses de apixabán. ¿Qué haces?',
      opts: ['Suspender', 'Considerar anticoagulación extendida (indefinida) con reevaluación periódica', 'Cambiar a aspirina', 'Filtro de vena cava', 'Repetir angio-TC para decidir'],
      ans: 1,
      exp: 'El TEP no provocado tiene alto riesgo de recurrencia al suspender. Con bajo riesgo de sangrado se recomienda anticoagulación extendida (puede usarse dosis reducida de apixabán o rivaroxabán).',
      why: ['El riesgo de recurrencia es alto.', '', 'Menos eficaz que la anticoagulación.', 'No está indicado.', 'La imagen no define la duración.'],
      ref: 'ESC 2019 · CHEST 2021' }),

    q({ id: 'tep-09', dif: 1,
      stem: '¿Cuál es el hallazgo electrocardiográfico más frecuente en el TEP?',
      opts: ['S1Q3T3', 'Taquicardia sinusal', 'Fibrilación auricular', 'BRDHH', 'Elevación del ST en V1–V4'],
      ans: 1,
      exp: 'El S1Q3T3 es clásico pero poco frecuente. Lo que más se ve es taquicardia sinusal; los signos de sobrecarga del VD indican mayor gravedad.',
      why: ['Es clásico pero poco sensible.', '', 'Puede aparecer, pero es menos frecuente.', 'Sugiere sobrecarga del VD, pero es menos frecuente.', 'Sugiere IAM anterior.'],
      ref: 'ESC 2019 TEP' }),

    q({ id: 'tep-10', dif: 2,
      stem: 'Hombre de 70 años con ERC G4 y alergia grave al contraste yodado. Sospecha de TEP con Rx de tórax normal. ¿Estudio de imagen?',
      opts: ['Angio-TC con premedicación obligatoria', 'Gammagrama de ventilación/perfusión', 'RM sin contraste como único estudio', 'Arteriografía pulmonar', 'Rx de tórax repetida'],
      ans: 1,
      exp: 'El gammagrama V/Q no usa contraste yodado y es útil con Rx de tórax normal. Un estudio normal descarta TEP; uno de alta probabilidad lo confirma.',
      why: ['Riesgo de nefropatía y anafilaxia.', '', 'No es el estudio validado.', 'Invasiva y con contraste.', 'No diagnostica TEP.'],
      ref: 'ESC 2019 TEP' })
  ],

  cases: [
    { id: 'g-tep', topic: 'tep', subj: 'cardio',
      title: 'Después del vuelo de 14 horas', place: 'Urgencias',
      patient: { name: 'Valeria', age: 36, sex: 'M', skin: '#E2B08A', hair: '#1E1A18', gown: '#62E3FF' },
      intro: 'Regresó ayer de un viaje largo. Toma anticonceptivos orales combinados. Desde hoy tiene dolor en la pantorrilla izquierda y falta de aire.',
      extra: { label: 'Trop.', unit: '' },
      start: { FC: 112, PAS: 122, PAD: 76, SpO2: 92, FR: 24, X: 'normal' },
      nodes: [
        { tag: 'Llegada', ecg: 'tachy',
          text: 'Pantorrilla izquierda con edema y dolor a la palpación. No hay otro diagnóstico más probable. Wells 7.5.',
          q: '¿Qué pides?',
          A: { t: 'Dímero D y, si es negativo, alta', ok: false, res: 'Con probabilidad alta, un dímero D negativo no descarta el TEP.' },
          B: { t: 'Angio-TC pulmonar (y anticoagular mientras si no hay contraindicación)', ok: true, res: 'Angio-TC: TEP segmentario bilateral. VD de tamaño normal.' },
          why: 'Con Wells >4 se va directo a la angio-TC.' },
        { tag: 'Estratificación', ecg: 'tachy',
          text: 'sPESI 0. VD normal en la TC, troponina normal. Sin riesgo de sangrado.',
          q: '¿Tratamiento?',
          A: { t: 'Trombólisis con alteplasa', ok: false, res: 'Expusiste a la paciente a riesgo de hemorragia sin beneficio.' },
          B: { t: 'Apixabán o rivaroxabán; alta temprana con seguimiento', ok: true, res: 'Inicia apixabán y se va a casa al día siguiente con indicaciones.' },
          why: 'TEP de bajo riesgo: ACOD y manejo ambulatorio o alta temprana.' },
        { tag: 'Al alta', ecg: 'normal', vit: { FC: 88, SpO2: 96, FR: 18 },
          text: 'Pregunta si puede seguir con sus anticonceptivos.',
          q: '¿Qué le dices?',
          A: { t: 'Suspender los anticonceptivos con estrógenos y elegir un método sin estrógenos (DIU, por ejemplo)', ok: true, res: 'Se la refiere a Ginecología para un DIU.' },
          B: { t: 'Puede seguir con ellos mientras tome el anticoagulante', ok: false, res: 'Al terminar el anticoagulante quedaría con un factor de riesgo activo.' },
          why: 'Los estrógenos aumentan el riesgo de trombosis: se suspenden tras un evento tromboembólico.' },
        { tag: 'Otra paciente, misma noche', ecg: 'tachy', vit: { FC: 128, PAS: 78, PAD: 46, SpO2: 86, FR: 30, X: '↑' },
          text: 'Mujer de 50 años con TEP masivo confirmado: PAS de 78 mmHg sostenida por 20 min. Sin contraindicaciones.',
          q: '¿Qué haces?',
          A: { t: 'Heparina no fraccionada + trombólisis sistémica con alteplasa', ok: true, res: 'A la hora la PA sube a 104/66 y mejora la saturación.', vit: { FC: 104, PAS: 104, PAD: 66, SpO2: 93 } },
          B: { t: 'HBPM y observación', ok: false, res: 'Evoluciona a paro cardiaco por choque obstructivo.', vit: { PAS: 60, PAD: 30, SpO2: 78 } },
          why: 'TEP de alto riesgo (inestabilidad): trombólisis sistémica, o embolectomía si está contraindicada.' }
      ] }
  ]
};
