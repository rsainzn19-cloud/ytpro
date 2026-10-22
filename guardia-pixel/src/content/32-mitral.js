// Tema 23 · Valvulopatía mitral (Cardiología, semana 4)
const T = { topic: 'mitral', subj: 'cardio' };
const q = (o) => ({ ...T, ...o });

export default {
  lessons: {
    mitral: {
      hook: 'Estenosis mitral: fiebre reumática, aurícula grande y fibrilación auricular. Insuficiencia mitral: primero define si es primaria (la válvula) o secundaria (el ventrículo), porque el tratamiento cambia.',
      compare: ['em-im'],
      nn: [['valvular-heart-diseases-overview', 'Valvular Heart Diseases']],
      yt: 'mitral stenosis mitral regurgitation',
      anim: 'mitral',
      sections: [
        { h: 'Estenosis mitral', html: `
<ul>
<li>Causa principal: <b>fiebre reumática</b> (aún frecuente en México); más en mujeres. En adultos mayores: calcificación del anillo.</li>
<li>Fisiopatología: ↑ presión en aurícula izquierda → congestión pulmonar, <b>fibrilación auricular</b>, embolia, hipertensión pulmonar.</li>
<li>Clínica: disnea (empeora con taquicardia, embarazo o FA), hemoptisis, ronquera (compresión del laríngeo recurrente: síndrome de Ortner), embolia sistémica.</li>
<li>Exploración: <b>R1 intenso</b>, <b>chasquido de apertura</b>, <b>retumbo diastólico</b> en el ápex en decúbito lateral izquierdo, con refuerzo presistólico (desaparece en FA). Más grave cuanto más corto el intervalo R2–chasquido.</li>
<li>Gravedad (eco): área valvular <b>≤1.5 cm²</b> = significativa; ≤1.0 cm² = muy grave.</li>
<li>Tratamiento: diuréticos, control de la FC (betabloqueador). <b>Anticoagulación con warfarina</b> si hay FA, embolia previa o trombo en la aurícula (los ACOD no se usan en estenosis mitral reumática moderada-grave).</li>
<li>Intervención en estenosis significativa sintomática: <b>comisurotomía mitral percutánea</b> (valvuloplastia con balón) si la anatomía es favorable (Wilkins ≤8), sin trombo en la aurícula y sin insuficiencia mitral más que leve. Si no: cirugía.</li>
</ul>` },
        { h: 'Insuficiencia mitral', html: `
<ul>
<li><b>Primaria</b> (la válvula está dañada): prolapso o rotura de cuerdas (degenerativa), endocarditis, reumática.</li>
<li><b>Secundaria o funcional</b> (válvula normal, ventrículo o aurícula dilatados): miocardiopatía isquémica o dilatada, FA de larga evolución.</li>
<li>Clínica: <b>soplo holosistólico apical irradiado a la axila</b>, R3, desplazamiento del ápex.</li>
<li><b>Aguda</b>: rotura de músculo papilar (posteromedial, tras IAM inferior, días 3–5), rotura de cuerdas o endocarditis → edema pulmonar súbito y choque, con soplo a veces breve o ausente → cirugía urgente.</li>
<li>Grave (eco): orificio regurgitante ≥40 mm², volumen regurgitante ≥60 mL, fracción regurgitante ≥50%.</li>
</ul>` },
        { h: 'Cuándo intervenir en IM', html: `
<ul>
<li><b>Primaria grave</b>: cirugía si hay <b>síntomas</b>, o sin síntomas con <b>FEVI ≤60%</b> o <b>diámetro telesistólico ≥40 mm</b>. Considerarla con FA nueva o PSAP &gt;50 mmHg.</li>
<li>Se prefiere <b>reparar</b> la válvula sobre reemplazarla.</li>
<li>Alto riesgo quirúrgico: reparación transcatéter borde a borde (TEER).</li>
<li><b>Secundaria</b>: primero tratamiento óptimo de la insuficiencia cardiaca (incluye resincronización si está indicada). Si persisten los síntomas con anatomía adecuada: TEER (COAPT).</li>
<li><b>Prolapso mitral</b>: clic mesosistólico ± soplo tardío. Con Valsalva o al ponerse de pie (menos precarga) el clic se adelanta y el soplo se alarga.</li>
</ul>` }
      ],
      mnemo: { t: 'Estenosis mitral = “Chasquido y Retumbo”', d: 'Chasquido de apertura y Retumbo diastólico. Cuanto más pegado está el chasquido al R2, más estrecha la válvula.' },
      pearl: 'Embarazada con estenosis mitral que se descompensa en el segundo trimestre: el aumento del volumen y de la FC acorta la diástole. Betabloqueador y, si no basta, valvuloplastia con balón.',
      trap: 'Estenosis mitral reumática con FA: el anticoagulante es warfarina, no apixabán ni rivaroxabán (INVICTUS mostró más eventos con rivaroxabán).',
      guide: [
        'Umbrales para operar IM primaria asintomática: ACC/AHA 2020 usa FEVI ≤60% o DTSVI ≥40 mm. La ESC/EACTS 2025 mantiene FEVI ≤60% y considera índices ajustados por superficie corporal; confirma la cifra que use tu curso.',
        'Área para estenosis mitral significativa: ESC/EACTS usa ≤1.5 cm²; ACC/AHA 2020 define “grave” como ≤1.5 cm² y “muy grave” ≤1.0 cm².'
      ],
      refs: [
        'Otto CM, et al. 2020 ACC/AHA Guideline for the Management of Valvular Heart Disease. Circulation 2021.',
        'Praz F, et al. 2025 ESC/EACTS Guidelines for the management of valvular heart disease. Eur Heart J 2025.',
        'Connolly SJ, et al. INVICTUS. N Engl J Med 2022.',
        'Stone GW, et al. COAPT. N Engl J Med 2018.'
      ]
    }
  },

  compares: {
    'em-im': {
      topic: 'mitral', a: 'Estenosis mitral', b: 'Insuficiencia mitral',
      rows: [
        ['Causa más común', 'Fiebre reumática', 'Degenerativa (prolapso) o secundaria (VI dilatado)'],
        ['Soplo', 'Retumbo diastólico + chasquido de apertura', 'Holosistólico apical irradiado a axila'],
        ['Ruidos', 'R1 intenso', 'R1 suave, R3'],
        ['Cámara que se dilata', 'Aurícula izquierda (VI normal)', 'Aurícula y ventrículo izquierdos'],
        ['Complicación típica', 'FA, embolia, hipertensión pulmonar', 'Disfunción del VI, FA'],
        ['Anticoagulante en FA', 'Warfarina', 'ACOD o warfarina'],
        ['Intervención', 'Valvuloplastia con balón si es favorable', 'Reparación quirúrgica; TEER si alto riesgo']
      ]
    }
  },

  anims: {
    mitral: {
      title: 'La válvula mitral: estenosis e insuficiencia',
      steps: [
        { cap: '<b>Estenosis mitral.</b> La fiebre reumática fusiona las comisuras y engruesa las valvas: en diástole la sangre pasa a chorro por un orificio estrecho (retumbo con chasquido de apertura). La presión de la AI sube, la AI se dilata y la congestión llega al pulmón.',
          labels: [[60, 24, 'AI dilatada'], [100, 52, 'Válvula estrecha'], [136, 22, 'Congestión'], [151, 48, 'P AI'], [130, 114, 'Retumbo']] },
        { cap: '<b>Fibrilación auricular y trombo.</b> La AI dilatada fibrila: se pierde la contracción auricular (y el refuerzo presistólico del soplo), la sangre se estanca en la orejuela y se forma un trombo que puede embolizar al cerebro. Anticoagula con warfarina.',
          labels: [[34, 35, 'Trombo'], [17, 50, 'Embolia'], [8, 101, 'FA'], [151, 48, 'P AI']] },
        { cap: '<b>Insuficiencia mitral crónica.</b> En sístole la válvula no cierra y parte de la sangre regresa a la AI (soplo holosistólico que irradia a la axila). La sobrecarga de volumen dilata la AI y el VI; la AI distensible amortigua la presión.',
          labels: [[60, 22, 'Reflujo'], [60, 78, 'VI dilatado'], [151, 48, 'P AI'], [130, 114, 'Holosistólico']] },
        { cap: '<b>Ruptura de músculo papilar.</b> Días 2–7 después de un IAM inferior se rompe el papilar posteromedial: la valva queda flácida y regurgita de golpe hacia una AI pequeña y rígida. La presión se dispara: edema pulmonar súbito y choque. Cirugía urgente.',
          labels: [[98, 84, 'Papilar roto'], [98, 40, 'Valva flácida'], [136, 22, 'Edema pulmonar'], [151, 48, 'P AI']] },
        { cap: '<b>Tratamiento percutáneo.</b> Por vena femoral y a través del tabique interauricular: en la estenosis, un balón separa las comisuras fusionadas (valvuloplastia); en la insuficiencia, un clip une las valvas por el centro (TEER) y deja dos orificios sin reflujo.',
          labels: [[46, 88, 'Balón (EM)'], [126, 88, 'Clip TEER (IM)'], [22, 112, 'Vía femoral']] }
      ]
    }
  },

  cards: [
    ['Causa principal de estenosis mitral', 'Fiebre reumática'],
    ['Soplo de estenosis mitral', 'Retumbo diastólico apical con chasquido de apertura y R1 intenso'],
    ['Gravedad de la EM por el intervalo R2-chasquido', 'Más corto = más grave'],
    ['Estenosis mitral significativa', 'Área ≤1.5 cm²'],
    ['EM + FA: anticoagulante', 'Warfarina (no ACOD)'],
    ['Tratamiento de EM con anatomía favorable', 'Comisurotomía mitral percutánea (balón)'],
    ['Soplo de insuficiencia mitral', 'Holosistólico apical irradiado a axila'],
    ['IM aguda tras IAM inferior', 'Rotura del músculo papilar posteromedial'],
    ['Cirugía en IM primaria asintomática', 'FEVI ≤60% o diámetro telesistólico ≥40 mm'],
    ['IM primaria: técnica preferida', 'Reparación sobre reemplazo'],
    ['IM secundaria: primer paso', 'Tratamiento óptimo de la insuficiencia cardiaca'],
    ['Prolapso mitral con Valsalva', 'El clic se adelanta y el soplo se alarga']
  ],

  questions: [
    q({ id: 'mitral-01', dif: 1,
      stem: 'Mujer de 34 años con antecedente de fiebre reumática, disnea de esfuerzo y palpitaciones. Se ausculta R1 intenso, chasquido de apertura y retumbo diastólico apical. ¿Diagnóstico?',
      opts: ['Insuficiencia mitral', 'Estenosis mitral', 'Estenosis aórtica', 'Insuficiencia aórtica', 'Comunicación interventricular'],
      ans: 1,
      exp: 'R1 intenso + chasquido de apertura + retumbo diastólico apical: estenosis mitral, casi siempre reumática.',
      why: ['Daría soplo holosistólico.', '', 'Soplo sistólico eyectivo en foco aórtico.', 'Soplo diastólico en borde esternal izquierdo.', 'Soplo holosistólico paraesternal.'],
      ref: 'ACC/AHA 2020 VHD' }),

    q({ id: 'mitral-02', dif: 2,
      stem: 'Mujer con estenosis mitral reumática moderada que desarrolla fibrilación auricular. ¿Anticoagulante?',
      opts: ['Apixabán', 'Warfarina con INR 2–3', 'Aspirina', 'Rivaroxabán', 'No requiere; CHA2DS2-VA de 0'],
      ans: 1,
      exp: 'En estenosis mitral moderada-grave con FA, la anticoagulación está indicada sin importar el puntaje, y con warfarina: INVICTUS mostró más muertes y eventos con rivaroxabán.',
      why: ['No se recomiendan los ACOD en EM reumática moderada-grave.', '', 'No previene embolia de forma suficiente.', 'Peor que warfarina en INVICTUS.', 'El puntaje no aplica en EM.'],
      ref: 'INVICTUS 2022 · ESC 2025' }),

    q({ id: 'mitral-03', dif: 2,
      stem: 'Mujer de 30 años con estenosis mitral grave sintomática (área 1.0 cm²), puntaje de Wilkins 7, sin trombo en la aurícula e insuficiencia mitral trivial. ¿Tratamiento de elección?',
      opts: ['Reemplazo valvular quirúrgico', 'Comisurotomía mitral percutánea con balón', 'Solo diuréticos', 'TEER', 'Esperar a que tenga FA'],
      ans: 1,
      exp: 'Anatomía favorable (Wilkins ≤8), sin trombo y sin insuficiencia significativa: valvuloplastia con balón, con buenos resultados y sin cirugía abierta.',
      why: ['Se reserva para anatomía desfavorable.', '', 'Es sintomática y grave.', 'Es para insuficiencia mitral.', 'No se espera.'],
      ref: 'ACC/AHA 2020 · ESC 2025' }),

    q({ id: 'mitral-04', dif: 2,
      stem: 'Hombre de 62 años en el día 4 de un IAM inferior presenta edema pulmonar súbito, hipotensión y un soplo sistólico apical nuevo. ¿Diagnóstico?',
      opts: ['Rotura de pared libre', 'Rotura del músculo papilar posteromedial', 'Pericarditis', 'Reinfarto', 'Aneurisma ventricular'],
      ans: 1,
      exp: 'El músculo papilar posteromedial tiene irrigación única (coronaria derecha o circunfleja), por eso se rompe en IAM inferior. Da insuficiencia mitral aguda: cirugía urgente.',
      why: ['Causa taponamiento, no soplo.', '', 'No causa edema pulmonar súbito.', 'No explica el soplo nuevo.', 'Es tardío y no agudo.'],
      ref: 'ESC 2023 SCA' }),

    q({ id: 'mitral-05', dif: 2,
      stem: 'Hombre de 55 años asintomático con insuficiencia mitral primaria grave por prolapso. Eco: FEVI 58%, diámetro telesistólico 42 mm. ¿Manejo?',
      opts: ['Vigilancia anual', 'Reparación quirúrgica de la válvula mitral', 'IECA y revisar en 6 meses', 'TEER', 'Esperar a que tenga síntomas'],
      ans: 1,
      exp: 'IM primaria grave con datos de disfunción del VI (FEVI ≤60% o DTS ≥40 mm) aunque no tenga síntomas: cirugía, de preferencia reparación.',
      why: ['Ya hay disfunción del VI.', '', 'Los vasodilatadores no cambian la historia en IM primaria.', 'Para alto riesgo quirúrgico.', 'El daño del VI puede ser irreversible.'],
      ref: 'ACC/AHA 2020 VHD' }),

    q({ id: 'mitral-06', dif: 2,
      stem: 'Paciente con miocardiopatía isquémica, FEVI 30% e insuficiencia mitral grave secundaria. Primer paso:',
      opts: ['Reemplazo valvular mitral', 'Tratamiento óptimo de la insuficiencia cardiaca (y resincronización si está indicada)', 'Valvuloplastia con balón', 'Anticoagulación sola', 'Reparación quirúrgica inmediata'],
      ans: 1,
      exp: 'En IM secundaria el problema es el ventrículo: se optimiza el tratamiento de la IC con FE reducida. Si persiste la IM grave con síntomas, se considera TEER.',
      why: ['No es el primer paso.', '', 'Es para estenosis mitral.', 'No trata la causa.', 'No es el primer paso.'],
      ref: 'ESC 2025 VHD · COAPT' }),

    q({ id: 'mitral-07', dif: 1,
      stem: 'Mujer de 28 años con clic mesosistólico seguido de soplo sistólico tardío. Al ponerse de pie, el clic aparece antes. ¿Diagnóstico?',
      opts: ['Estenosis aórtica', 'Prolapso de válvula mitral', 'Miocardiopatía hipertrófica', 'Comunicación interauricular', 'Estenosis mitral'],
      ans: 1,
      exp: 'Al ponerse de pie baja la precarga, el ventrículo se hace más pequeño y la válvula prolapsa antes: el clic se adelanta.',
      why: ['No tiene clic.', '', 'El soplo aumenta de pie pero no hay clic.', 'Desdoblamiento fijo del R2.', 'Es un soplo diastólico.'],
      ref: 'Harrison 21e' }),

    q({ id: 'mitral-08', dif: 2,
      stem: 'Embarazada de 24 semanas con estenosis mitral moderada presenta disnea y FC de 118 en ritmo sinusal. ¿Primer fármaco?',
      opts: ['Digoxina', 'Betabloqueador (metoprolol)', 'IECA', 'Amiodarona', 'Espironolactona'],
      ans: 1,
      exp: 'La taquicardia acorta la diástole y eleva la presión en la aurícula. El betabloqueador alarga el llenado diastólico. Diuréticos de asa si hay congestión. Los IECA están contraindicados en el embarazo.',
      why: ['Poco útil en ritmo sinusal.', '', 'Teratógeno.', 'No es el primer fármaco.', 'Antiandrogénico; no recomendada.'],
      ref: 'ESC 2025 VHD · ESC 2018 Embarazo' }),

    q({ id: 'mitral-09', dif: 3,
      stem: '¿Qué hallazgo auscultatorio indica una estenosis mitral más grave?',
      opts: ['Retumbo más corto', 'Intervalo R2–chasquido de apertura más corto', 'R1 más suave', 'Ausencia de chasquido siempre', 'Soplo holosistólico'],
      ans: 1,
      exp: 'Con más presión en la aurícula, la válvula se abre antes tras el cierre aórtico: el chasquido se acerca al R2. Además el retumbo se alarga.',
      why: ['El retumbo se alarga.', '', 'El R1 suave aparece con válvula muy calcificada, no indica gravedad por sí solo.', 'Ocurre en válvulas calcificadas, no siempre.', 'Eso es insuficiencia.'],
      ref: 'Harrison 21e' }),

    q({ id: 'mitral-10', dif: 2,
      stem: 'Hombre de 82 años con insuficiencia mitral primaria grave sintomática y riesgo quirúrgico muy alto (STS 12%). Anatomía adecuada. ¿Opción?',
      opts: ['Reparación quirúrgica abierta', 'Reparación transcatéter borde a borde (TEER)', 'Valvuloplastia con balón', 'Solo diuréticos sin otra opción', 'Trasplante cardiaco'],
      ans: 1,
      exp: 'Con riesgo quirúrgico prohibitivo y anatomía favorable, la TEER mejora síntomas y calidad de vida.',
      why: ['Riesgo muy alto.', '', 'Para estenosis mitral.', 'Existe una opción intervencionista.', 'No es candidato.'],
      ref: 'ACC/AHA 2020 VHD' })
  ]
};
