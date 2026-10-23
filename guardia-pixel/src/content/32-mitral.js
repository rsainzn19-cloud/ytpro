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
      video: [
        { ch: 'Dos problemas, una válvula', sc: [
          { v: { k: 'title', t: 'Valvulopatía mitral', s: 'Tema 23 · Cardiología' },
            say: 'Bienvenido. En este video vas a separar las dos enfermedades de la válvula mitral: la estenosis, que obstruye el llenado del ventrículo, y la insuficiencia, que deja regresar la sangre a la aurícula. Cada una tiene su soplo, sus complicaciones y su tratamiento.' },
          { v: { k: 'case', t: 'Consulta de cardiología', p: { name: 'Lucía', age: 32, sex: 'M', skin: '#B97A57', hair: '#1E1410', gown: '#E79AB3' }, text: 'Disnea progresiva y palpitaciones. Fiebre reumática a los 11 años. R1 intenso, chasquido de apertura y retumbo diastólico apical.', vit: { FC: '112 irr', PA: '108/70', SpO2: '94%' } },
            say: 'Lucía tiene treinta y dos años y tuvo fiebre reumática a los once. Ahora tiene disnea progresiva y palpitaciones. Escuchas un primer ruido intenso, un chasquido de apertura y un retumbo diastólico en el ápex. Su pulso es rápido e irregular.' }
        ] },
        { ch: 'Estenosis mitral', sc: [
          { v: { k: 'anim', id: 'mitral', step: 0 },
            say: 'La fiebre reumática fusiona las comisuras y engruesa las valvas. La sangre pasa a chorro por un orificio estrecho. La presión de la aurícula izquierda sube, la aurícula se dilata y esa presión regresa a los pulmones: congestión e hipertensión pulmonar.' },
          { v: { k: 'list', t: 'Clínica de la estenosis', items: ['Disnea que empeora con taquicardia', 'Hemoptisis', 'Ronquera: la AI comprime el laríngeo', 'Embolia sistémica', 'El VI está normal o pequeño'] },
            say: 'La disnea empeora con todo lo que acorta la diástole: ejercicio, fiebre, embarazo o fibrilación auricular. Puede haber hemoptisis, ronquera porque la aurícula gigante comprime el nervio laríngeo recurrente, que es el síndrome de Ortner, y embolias. El ventrículo izquierdo, en cambio, está protegido.' },
          { v: { k: 'mnemo', t: 'Chasquido y Retumbo', d: 'R1 intenso + chasquido de apertura + retumbo diastólico apical. Chasquido más pegado al R2 = válvula más estrecha.' },
            say: 'Para auscultarla, piensa en chasquido y retumbo: primer ruido intenso, chasquido de apertura y retumbo diastólico en el ápex, mejor en decúbito lateral izquierdo. Entre más cerca está el chasquido del segundo ruido, más grave es la estenosis.' },
          { v: { k: 'big', h: 'Estenosis mitral significativa', t: '≤1.5', u: 'cm²', s: 'Área valvular por eco (normal 4–6 cm²); ≤1.0 cm² = muy grave' },
            say: 'El ecocardiograma confirma. El área normal es de cuatro a seis centímetros cuadrados. Con uno punto cinco o menos, la estenosis es significativa, y con uno o menos, muy grave.' },
          { v: { k: 'anim', id: 'mitral', step: 1 },
            say: 'La aurícula dilatada termina en fibrilación auricular. Se pierde la contracción auricular, la sangre se estanca en la orejuela y se forma un trombo que puede embolizar al cerebro. Fíjate: en la fibrilación desaparece el refuerzo presistólico del soplo.' },
          { v: { k: 'tip', kind: 'trap', t: 'EM moderada o grave + FA: warfarina (INR 2–3), sin calcular CHA₂DS₂-VA. Los anticoagulantes directos no (INVICTUS).' },
            say: 'Trampa clásica: estenosis mitral moderada o grave con fibrilación auricular se anticoagula con warfarina, con un INR, o índice internacional normalizado, de dos a tres, sin calcular puntajes. Los anticoagulantes orales directos no: en el estudio INVICTUS, el rivaroxabán tuvo más eventos.' }
        ] },
        { ch: 'Tratar la estenosis', sc: [
          { v: { k: 'flow', t: 'EM sintomática, área ≤1.5 cm²', steps: ['Diurético y betabloqueador', '¿Wilkins ≤8, sin trombo, IM leve?', 'Sí → comisurotomía percutánea', 'No → cirugía valvular'] },
            say: 'Para los síntomas, diurético contra la congestión y betabloqueador para alargar la diástole. Si la estenosis es significativa y da síntomas, se interviene. Con anatomía favorable, es decir, puntaje de Wilkins de ocho o menos, sin trombo en la aurícula e insuficiencia no mayor que leve: comisurotomía percutánea con balón. Si no, cirugía.' },
          { v: { k: 'anim', id: 'mitral', step: 4, cap: 'Valvuloplastia con balón' },
            say: 'La comisurotomía percutánea se hace por catéter: entra por la vena femoral, cruza el tabique interauricular y un balón se infla dentro de la válvula. Separa las comisuras fusionadas y el área aumenta. Antes se hace un eco transesofágico para descartar trombo en la aurícula.' },
          { v: { k: 'quiz', q: 'Embarazada de 24 semanas con EM moderada, disnea y FC de 118 en ritmo sinusal. ¿Primer fármaco?', opts: ['Betabloqueador', 'IECA', 'Digoxina'], a: 0 },
            say: 'Pausa. Embarazada de veinticuatro semanas con estenosis mitral moderada, disnea y frecuencia de ciento dieciocho en ritmo sinusal. ¿Qué fármaco das primero?',
            exp: 'Un betabloqueador, como metoprolol. La taquicardia acorta la diástole y sube la presión de la aurícula; al frenarla, mejora el llenado. Agrega diurético si hay congestión. Los IECA están contraindicados en el embarazo.' },
          { v: { k: 'list', t: 'Prevenir otra fiebre reumática', items: ['Penicilina G benzatínica 1.2 M UI IM', 'Cada 3–4 semanas', 'Con valvulopatía: 10 años o hasta los 40', 'A veces de por vida'] },
            say: 'No olvides la prevención secundaria de fiebre reumática, que en México sigue siendo frecuente: penicilina G benzatínica, un millón doscientas mil unidades intramusculares cada tres a cuatro semanas. Con valvulopatía residual, por diez años o hasta los cuarenta años, lo que dure más.' }
        ] },
        { ch: 'Insuficiencia mitral', sc: [
          { v: { k: 'vs', a: 'IM primaria', b: 'IM secundaria', rows: [['Qué falla', 'La válvula', 'El VI o la AI dilatados'], ['Causas', 'Prolapso, rotura de cuerdas, endocarditis', 'Miocardiopatía isquémica o dilatada, FA'], ['Tratamiento', 'Reparación quirúrgica', 'Tratar la IC; TEER si persiste']] },
            say: 'En la insuficiencia mitral, lo primero es saber si es primaria o secundaria. En la primaria, la válvula está dañada: prolapso, rotura de cuerdas, endocarditis o fiebre reumática. En la secundaria, la válvula es normal, pero el ventrículo o la aurícula dilatados la estiran y no cierra.' },
          { v: { k: 'anim', id: 'mitral', step: 2 },
            say: 'En cada sístole, parte de la sangre regresa a la aurícula. Esa sobrecarga de volumen dilata la aurícula y el ventrículo. Escuchas un soplo holosistólico en el ápex que se irradia a la axila, con un tercer ruido.' },
          { v: { k: 'big', h: 'IM primaria grave sin síntomas', t: '≤60%', u: 'FEVI → cirugía', s: 'o diámetro telesistólico ≥40 mm. En IM la FEVI se sobreestima.' },
            say: 'Ojo con la fracción de expulsión. En la insuficiencia, el ventrículo vacía parte de su sangre hacia una aurícula de baja presión, así que la fracción se ve mejor de lo que es. Sesenta por ciento o menos ya es disfunción. Con eso, o con un diámetro telesistólico de cuarenta milímetros o más, se opera aunque no haya síntomas.' },
          { v: { k: 'flow', t: 'IM primaria grave', steps: ['Síntomas → cirugía', 'FEVI ≤60% o DTS ≥40 mm → cirugía', 'Reparar mejor que reemplazar', 'Riesgo quirúrgico alto → TEER'] },
            say: 'El algoritmo de la primaria grave: con síntomas, cirugía. Sin síntomas, cirugía si ya hay disfunción del ventrículo. Siempre que se pueda, se repara la válvula en lugar de cambiarla. Y si el riesgo quirúrgico es muy alto, reparación transcatéter borde a borde.' },
          { v: { k: 'anim', id: 'mitral', step: 4, cap: 'TEER: un clip une las valvas' },
            say: 'En la reparación borde a borde, un clip toma las dos valvas por el centro y las une. Quedan dos orificios y el reflujo disminuye. En la insuficiencia secundaria se usa si persisten los síntomas a pesar del tratamiento óptimo de la insuficiencia cardiaca, como en el estudio COAPT.' }
        ] },
        { ch: 'IM aguda: la urgencia', sc: [
          { v: { k: 'case', t: 'Unidad coronaria · día 4', p: { name: 'Arturo', age: 64, sex: 'H', skin: '#C98B62', hair: '#4A3A2A', gown: '#7FB2E5' }, text: 'Día 4 de un IAM inferior. Disnea súbita, estertores bilaterales y un soplo sistólico apical nuevo.', vit: { PA: '86/54', FC: '122', SpO2: '84%' } },
            say: 'Arturo está en el cuarto día de un infarto inferior. De pronto tiene disnea intensa, estertores en ambos campos pulmonares y un soplo sistólico apical nuevo. Su presión cae a ochenta y seis de cincuenta y cuatro.' },
          { v: { k: 'anim', id: 'mitral', step: 3 },
            say: 'Se rompió el músculo papilar posteromedial, que tiene una sola fuente de irrigación. La valva queda flácida y la regurgitación es masiva. La aurícula es pequeña y no se distiende, así que la presión sube de golpe y llega a los pulmones: edema pulmonar y choque.' },
          { v: { k: 'quiz', q: '¿Qué haces con Arturo?', opts: ['Eco urgente, puente y cirugía urgente', 'AINE y colchicina', 'Eco de control en 3 meses'], a: 0 },
            say: 'Pausa. ¿Qué haces con Arturo?',
            exp: 'Ecocardiograma urgente y cirugía urgente. Mientras llega al quirófano, reduce la poscarga con nitroprusiato si la presión lo permite y coloca un balón de contrapulsación. Ojo: en la insuficiencia aguda, el soplo puede ser breve o incluso no oírse.' }
        ] },
        { ch: 'Repaso y trampas', sc: [
          { v: { k: 'vs', cmp: 'em-im', rows: [1, 2, 3, 5] },
            say: 'Repasemos lado a lado. La estenosis da retumbo diastólico con chasquido y primer ruido intenso, y dilata solo la aurícula. La insuficiencia da soplo holosistólico con tercer ruido, y dilata la aurícula y el ventrículo. Con estenosis y fibrilación, warfarina; con insuficiencia, puede ser un anticoagulante directo.' },
          { v: { k: 'tip', kind: 'trap', t: 'Prolapso mitral: de pie o con Valsalva el clic se adelanta y el soplo se alarga. El soplo de IM aumenta con la empuñadura sostenida.' },
            say: 'Dos maniobras que preguntan. En el prolapso mitral, al ponerse de pie o con Valsalva baja la precarga y el clic se adelanta. Y el soplo de la insuficiencia mitral aumenta con la empuñadura sostenida, porque sube la poscarga.' },
          { v: { k: 'tip', kind: 'pearl', t: 'EM: chasquido, retumbo, FA y warfarina; balón si la anatomía es favorable. IM: primero define primaria o secundaria; en la primaria se repara, en la secundaria se trata el ventrículo.' },
            say: 'La perla final. Estenosis mitral: chasquido, retumbo, fibrilación y warfarina, y balón si la anatomía es favorable. Insuficiencia: primero define si es primaria o secundaria, porque en la primaria se repara la válvula y en la secundaria se trata el ventrículo. Ahora ve a las preguntas del tema.' }
        ] }
      ],
      sections: [
        { h: 'Fisiopatología en 1 minuto', html: `
<ul>
<li><b>Estenosis</b>: obstáculo al llenado del VI → gradiente AI–VI → ↑ presión de la AI → congestión pulmonar e hipertensión pulmonar poscapilar → al final, falla del VD. El VI está protegido (normal o pequeño).</li>
<li>Todo lo que <b>acorta la diástole</b> la descompensa: taquicardia, FA, fiebre, ejercicio, embarazo. Por eso el betabloqueador mejora los síntomas.</li>
<li><b>Insuficiencia crónica</b>: sobrecarga de volumen → AI y VI se dilatan (hipertrofia excéntrica). La AI distensible amortigua la presión durante años. El VI vacía parte de su volumen hacia la AI, de baja presión: la FEVI “normal” sobreestima la función, y una FEVI ≤60% ya es disfunción.</li>
<li><b>Insuficiencia aguda</b>: la AI es pequeña y rígida → la presión se dispara (onda v gigante) → edema pulmonar súbito y choque, con soplo breve o incluso ausente.</li>
</ul>` },
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
<li><b>Aguda</b>: rotura de músculo papilar (posteromedial, tras IAM inferior, días 2–7), rotura de cuerdas o endocarditis → edema pulmonar súbito y choque, con soplo a veces breve o ausente → cirugía urgente; como puente, nitroprusiato (si la PA lo permite) y balón de contrapulsación.</li>
<li>Grave (eco): orificio regurgitante ≥40 mm², volumen regurgitante ≥60 mL, fracción regurgitante ≥50%.</li>
</ul>` },
        { h: 'Cuándo intervenir en IM', html: `
<ul>
<li><b>Primaria grave</b>: cirugía si hay <b>síntomas</b>, o sin síntomas con <b>FEVI ≤60%</b> o <b>diámetro telesistólico ≥40 mm</b>. Considerarla con FA nueva o PSAP &gt;50 mmHg.</li>
<li>Se prefiere <b>reparar</b> la válvula sobre reemplazarla.</li>
<li>Alto riesgo quirúrgico: reparación transcatéter borde a borde (TEER).</li>
<li><b>Secundaria</b>: primero tratamiento óptimo de la insuficiencia cardiaca (incluye resincronización si está indicada). Si persisten los síntomas con anatomía adecuada: TEER (COAPT).</li>
<li><b>Prolapso mitral</b>: clic mesosistólico ± soplo tardío. Con Valsalva o al ponerse de pie (menos precarga) el clic se adelanta y el soplo se alarga.</li>
</ul>` },
        { h: 'Fármacos, procedimientos y prevención', html: `
<div class="tablewrap"><table class="mini">
<tr><th>Opción</th><th>Cuándo</th><th>Ojo con</th></tr>
<tr><td>Diurético de asa</td><td>Congestión en EM o IM</td><td>Hipovolemia; no cambia la historia natural</td></tr>
<tr><td>Betabloqueador</td><td>EM con taquicardia o FA; embarazo</td><td>Alarga la diástole; evitar en IM aguda con choque</td></tr>
<tr><td>Warfarina (INR 2–3)</td><td>EM moderada-grave con FA, embolia previa o trombo en la AI</td><td>Los ACOD no se usan en EM reumática moderada-grave (INVICTUS)</td></tr>
<tr><td>Penicilina G benzatínica 1.2 M UI IM</td><td>Prevención secundaria de fiebre reumática, cada 3–4 semanas</td><td>Con valvulopatía residual: 10 años o hasta los 40 (lo más largo), a veces de por vida</td></tr>
<tr><td>Nitroprusiato y balón de contrapulsación</td><td>IM aguda, como puente a la cirugía</td><td>Hipotensión: el balón ayuda si la PA es baja</td></tr>
<tr><td>Tratamiento de la IC (BB, IECA/ARNI, ARM, iSGLT2, TRC)</td><td>IM secundaria con FEVI reducida: siempre primero</td><td>La IM puede disminuir al remodelar el VI</td></tr>
<tr><td>Comisurotomía mitral percutánea (balón)</td><td>EM significativa sintomática con anatomía favorable</td><td>Contraindicada con trombo en la AI, IM más que leve, calcificación importante o comisuras sin fusionar</td></tr>
<tr><td>Reparación quirúrgica</td><td>IM primaria grave con síntomas o con disfunción del VI</td><td>Preferida sobre el reemplazo</td></tr>
<tr><td>TEER (clip borde a borde)</td><td>IM primaria con riesgo quirúrgico alto; IM secundaria sintomática pese a tratamiento óptimo</td><td>COAPT positivo; MITRA-FR negativo (VI más dilatado)</td></tr>
</table></div>
<p><b>Puntaje de Wilkins</b> (eco): movilidad, engrosamiento, calcificación y afectación subvalvular, de 1 a 4 cada uno (máximo 16). ≤8 = anatomía favorable para el balón.</p>` },
        { h: 'Cómo lo preguntan en el examen', html: `
<ul>
<li>Mujer joven con antecedente de fiebre reumática, disnea, FA y retumbo diastólico → <b>estenosis mitral</b>; anticoagula con <b>warfarina</b>.</li>
<li>Embarazada con EM que se descompensa en el 2º trimestre → <b>betabloqueador</b> (y diurético); si no basta, valvuloplastia con balón.</li>
<li>EM grave sintomática, Wilkins ≤8, sin trombo → <b>comisurotomía percutánea</b>. Trombo en la orejuela en el ETE → anticoagular y repetir el ETE, o cirugía.</li>
<li>Soplo holosistólico apical que irradia a la axila y aumenta con la empuñadura → <b>IM</b>. El de la MCH disminuye con la empuñadura y aumenta con Valsalva.</li>
<li>IM primaria grave asintomática con FEVI ≤60% o DTS ≥40 mm → <b>cirugía</b> (reparación).</li>
<li>IAM inferior, días 2–7, edema pulmonar súbito y soplo nuevo (o sin soplo) → <b>ruptura del papilar posteromedial</b>: eco y cirugía urgente.</li>
<li>Ronquera en una paciente con EM → <b>síndrome de Ortner</b> (la AI comprime el laríngeo recurrente). Retumbo apical en una insuficiencia aórtica grave → <b>Austin Flint</b>, no estenosis mitral.</li>
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
    ['Prolapso mitral con Valsalva', 'El clic se adelanta y el soplo se alarga'],
    ['IM aguda: puente a la cirugía', 'Nitroprusiato (si la PA lo permite) y balón de contrapulsación'],
    ['IM aguda vs crónica: la aurícula', 'Aguda: AI pequeña y rígida → edema pulmonar súbito. Crónica: AI grande y distensible'],
    ['Prevención secundaria de fiebre reumática', 'Penicilina G benzatínica 1.2 millones UI IM cada 3–4 semanas'],
    ['Duración de la profilaxis con valvulopatía reumática', '10 años o hasta los 40 años (lo que dure más); a veces de por vida'],
    ['Puntaje de Wilkins', 'Movilidad, engrosamiento, calcificación y aparato subvalvular (1–4 cada uno); ≤8 = favorable para el balón']
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
      ref: 'ACC/AHA 2020 VHD' }),

    q({ id: 'mitral-11', dif: 3,
      stem: 'Hombre de 58 años con prolapso mitral conocido que presenta disnea súbita y ortopnea. PA 96/60 mmHg, FC 118, estertores bilaterales. El eco muestra una valva posterior flácida por rotura de cuerdas, con insuficiencia mitral grave y AI de tamaño normal. ¿Cuál es el manejo más adecuado?',
      opts: ['Betabloqueador IV para controlar la FC', 'Nitroprusiato y balón de contrapulsación como puente a cirugía urgente', 'Diurético y reparación electiva en 3 meses', 'Carga de cristaloide de 2 L', 'Valvuloplastia con balón'],
      ans: 1,
      exp: 'IM aguda grave (rotura de cuerdas): la AI pequeña y rígida no amortigua el reflujo y aparece edema pulmonar. Reducir la poscarga (nitroprusiato, si la PA lo permite) favorece el flujo hacia la aorta; el balón de contrapulsación lo logra aun con PA baja. El tratamiento definitivo es la cirugía urgente, de preferencia reparación.',
      why: ['Deprime la contractilidad y quita la taquicardia compensadora: puede llevar al choque.', '', 'Con edema pulmonar e inestabilidad no se puede esperar meses.', 'Empeora el edema pulmonar.', 'Es para estenosis mitral, no para insuficiencia.'],
      ref: 'ACC/AHA 2020 VHD · ESC/EACTS 2025' }),

    q({ id: 'mitral-12', dif: 2,
      stem: 'Mujer de 24 años con estenosis mitral reumática moderada; su último episodio de fiebre reumática fue a los 14 años. Pregunta si debe seguir con la penicilina que le aplican cada mes. ¿Qué le indicas?',
      opts: ['Suspenderla: ya pasaron más de 5 años', 'Continuar la penicilina G benzatínica cada 3–4 semanas al menos hasta los 40 años', 'Cambiar a amoxicilina solo antes de procedimientos dentales', 'Continuar solo hasta los 21 años', 'Aplicarla solo si tiene faringitis'],
      ans: 1,
      exp: 'Prevención secundaria de fiebre reumática: penicilina G benzatínica 1.2 millones UI IM cada 3–4 semanas. Con carditis y valvulopatía residual se mantiene 10 años después del último episodio o hasta los 40 años, lo que dure más (a veces de por vida). Ella tiene 24 años: le faltan al menos 16 años.',
      why: ['Con valvulopatía residual, la duración es mucho mayor.', '', 'La profilaxis de endocarditis es otra cosa y no previene recaídas de fiebre reumática.', 'Hasta los 21 años (o 5 años) es para fiebre reumática sin carditis.', 'Las recaídas pueden venir de infecciones asintomáticas; la profilaxis es continua.'],
      ref: 'AHA 2009 fiebre reumática · GPC México' }),

    q({ id: 'mitral-13', dif: 3,
      stem: 'Mujer de 38 años con estenosis mitral reumática grave y sintomática (área 0.9 cm²), Wilkins 7 e insuficiencia mitral leve. Está en FA. El eco transesofágico previo a la valvuloplastia muestra un trombo en la orejuela izquierda. ¿Qué haces?',
      opts: ['Valvuloplastia con balón de inmediato', 'Anticoagular con warfarina y repetir el ETE; si el trombo se resuelve, valvuloplastia (si no, cirugía)', 'Cambiar a apixabán y hacer la valvuloplastia en 48 h', 'TEER', 'Cardioversión eléctrica inmediata'],
      ans: 1,
      exp: 'El trombo en la AI contraindica la comisurotomía percutánea (riesgo de embolia al manipular la aurícula). Se anticoagula con warfarina y se repite el ETE en algunas semanas: si el trombo desaparece, se hace la valvuloplastia; si persiste, cirugía (comisurotomía abierta o reemplazo con exclusión de la orejuela).',
      why: ['Riesgo alto de embolia cerebral al pasar el catéter por la AI.', '', 'Los ACOD no se recomiendan en EM reumática moderada-grave.', 'Es para insuficiencia mitral.', 'Con trombo en la orejuela, la cardioversión puede embolizarlo.'],
      ref: 'ACC/AHA 2020 VHD · ESC/EACTS 2025' }),

    q({ id: 'mitral-14', dif: 3,
      stem: 'Hombre de 70 años con miocardiopatía isquémica, FEVI 30% e insuficiencia mitral secundaria grave. Lleva 6 meses con tratamiento óptimo (sacubitrilo/valsartán, bisoprolol, espironolactona y dapagliflozina) y resincronizador. Sigue en clase III de la NYHA. Diámetro telesistólico 55 mm. Alto riesgo quirúrgico. ¿Siguiente paso?',
      opts: ['Reemplazo valvular mitral abierto', 'Reparación transcatéter borde a borde (TEER)', 'Valvuloplastia mitral con balón', 'Suspender el betabloqueador', 'Agregar digoxina y esperar'],
      ans: 1,
      exp: 'En la IM secundaria grave que sigue sintomática a pesar del tratamiento óptimo de la IC (incluida la resincronización), con anatomía adecuada y sin dilatación extrema del VI, la TEER redujo hospitalizaciones y muerte (COAPT). La cirugía aislada de una IM secundaria no ha demostrado mejorar la supervivencia.',
      why: ['Alto riesgo quirúrgico y sin beneficio demostrado en supervivencia para la IM secundaria aislada.', '', 'Es para estenosis mitral.', 'Es parte del tratamiento que reduce mortalidad.', 'No corrige la insuficiencia ni mejora el pronóstico.'],
      ref: 'COAPT · ESC/EACTS 2025 · ACC/AHA 2020' }),

    q({ id: 'mitral-15', dif: 2,
      stem: 'Hombre de 50 años con soplo sistólico apical que se irradia a la axila. El soplo aumenta con la empuñadura sostenida y no cambia con la maniobra de Valsalva. ¿Diagnóstico más probable?',
      opts: ['Miocardiopatía hipertrófica obstructiva', 'Estenosis aórtica', 'Insuficiencia mitral', 'Comunicación interauricular', 'Soplo inocente'],
      ans: 2,
      exp: 'La empuñadura aumenta la poscarga: más sangre regresa a la AI y el soplo de IM (y de CIV) aumenta. En la MCH y en la estenosis aórtica el soplo disminuye con la empuñadura. Con Valsalva baja la precarga: aumenta el de la MCH y disminuyen casi todos los demás.',
      why: ['Su soplo disminuye con la empuñadura y aumenta con Valsalva.', 'Es eyectivo en el foco aórtico, irradia a carótidas y disminuye con la empuñadura.', '', 'Da desdoblamiento fijo del R2 y soplo de flujo pulmonar.', 'No es holosistólico ni irradia a la axila.'],
      ref: 'Harrison 21e' })
  ]
};
