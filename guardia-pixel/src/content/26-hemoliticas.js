// Tema 17 · Anemias hemolíticas (Hematología, semana 3)
const T = { topic: 'hemoliticas', subj: 'hemato' };
const q = (o) => ({ ...T, ...o });

export default {
  lessons: {
    hemoliticas: {
      hook: 'Reticulocitos altos, LDH alta, haptoglobina baja: hay hemólisis. Ahora decide dónde se rompe el eritrocito (vaso o bazo), si el Coombs es positivo y qué te dice el frotis.',
      compare: ['intra-extra'],
      nn: [['normocytic-anemia', 'Normocytic Anemia']],
      yt: 'hemolytic anemia',
      anim: 'hemoliticas',
      video: [
        { ch: 'Confirma la hemólisis', sc: [
          { v: { k: 'title', t: 'Anemias hemolíticas', s: 'Tema 17 · Hematología' },
            say: 'Bienvenido a la guardia. En este video vas a aprender a confirmar una hemólisis, a decidir dónde se rompe el eritrocito y a usar el Coombs y el frotis para llegar a la causa.' },
          { v: { k: 'case', t: 'Urgencias', p: { name: 'Mateo', age: 22, sex: 'H', skin: '#D9A07A', hair: '#2A1A12', gown: '#7FC8A9' }, text: 'Ictericia y orina color refresco de cola 2 días después de una comida con habas. Hb 8.1 g/dL.', vit: { FC: '112', PA: '110/68', Hb: '8.1' } },
            say: 'Imagina a Mateo, de veintidós años. Llega con ictericia y orina del color de refresco de cola, dos días después de comer habas. Su hemoglobina es de ocho punto uno. Antes de pensar en la causa, confirma que es una hemólisis.' },
          { v: { k: 'list', t: 'La firma de la hemólisis', items: ['Reticulocitos ↑ (la médula responde)', 'LDH ↑', 'Bilirrubina indirecta ↑', 'Haptoglobina ↓', 'Frotis: la forma te da la causa'] },
            say: 'La hemólisis tiene su firma. Reticulocitos altos, porque la médula responde. Deshidrogenasa láctica alta, que sale del eritrocito roto. Bilirrubina indirecta alta, que viene del grupo hem. Y haptoglobina baja, porque se gasta al unirse a la hemoglobina libre. Después, el frotis te orienta a la causa.' }
        ] },
        { ch: '¿Dónde se rompe?', sc: [
          { v: { k: 'anim', id: 'hemoliticas', step: 0 },
            say: 'Si el eritrocito se rompe dentro del vaso, la hemoglobina queda libre en el plasma. La haptoglobina la atrapa hasta agotarse, y la deshidrogenasa láctica sube. El resto se filtra en el riñón y aparece hemoglobinuria: orina oscura. Días después, también hemosiderinuria. Por eso, si la hemólisis intravascular es crónica, el paciente puede perder hierro por la orina y desarrollar ferropenia.' },
          { v: { k: 'anim', id: 'hemoliticas', step: 1 },
            say: 'Si se destruye fuera del vaso, lo hacen los macrófagos del bazo y del hígado. El hem se convierte en bilirrubina indirecta, que da ictericia y, con los años, cálculos pigmentarios. El bazo trabaja de más y crece: esplenomegalia.' },
          { v: { k: 'vs', cmp: 'intra-extra', rows: [1, 3, 4, 5] },
            say: 'Compara. La intravascular da hemoglobinuria y poca esplenomegalia, con esquistocitos o células mordidas: deficiencia de glucosa seis fosfato deshidrogenasa, microangiopatías, hemoglobinuria paroxística nocturna, reacción transfusional o válvulas. La extravascular da esplenomegalia y esferocitos: esferocitosis hereditaria, anemia autoinmune caliente y talasemias.' }
        ] },
        { ch: 'Coombs: ¿es inmune?', sc: [
          { v: { k: 'anim', id: 'hemoliticas', step: 4 },
            say: 'El siguiente paso es el Coombs directo, o prueba de antiglobulina directa. Si el eritrocito trae pegados anticuerpos o complemento, el reactivo de antiglobulina los une entre sí y los eritrocitos se aglutinan. Positivo significa causa inmune.' },
          { v: { k: 'vs', a: 'AHAI caliente', b: 'Crioaglutininas', rows: [['Anticuerpo', 'IgG, a 37 °C', 'IgM, en el frío'], ['Coombs', 'IgG ± C3', 'Solo C3'], ['Asociación', 'LES, LLC, linfoma, fármacos', 'Mycoplasma, mononucleosis, linfoma'], ['Tratamiento', 'Prednisona; luego rituximab', 'Evitar frío; rituximab, sutimlimab']] },
            say: 'Si el Coombs es positivo, distingue dos tipos. La anemia hemolítica autoinmune caliente es por IgG, se asocia a lupus, leucemia linfocítica crónica, linfomas y fármacos, y se trata con prednisona y luego rituximab. Las crioaglutininas son IgM que fijan complemento, se asocian a Mycoplasma y mononucleosis, dan acrocianosis con el frío, y los esteroides sirven poco.' },
          { v: { k: 'quiz', q: 'Esferocitos, CHCM ↑, esplenomegalia y familiares con lo mismo. Coombs negativo. ¿Qué es?', opts: ['AHAI caliente', 'Esferocitosis hereditaria'], a: 1 },
            say: 'Pausa. Joven con esferocitos, concentración de hemoglobina corpuscular media alta, esplenomegalia y familiares con lo mismo. El Coombs es negativo. ¿Qué tiene?',
            exp: 'Esferocitosis hereditaria. Esferocitos con Coombs negativo es hereditaria; esferocitos con Coombs positivo es autoinmune caliente. Esa regla la preguntan siempre.' }
        ] },
        { ch: 'Hereditarias: esferocitosis y G6PD', sc: [
          { v: { k: 'anim', id: 'hemoliticas', step: 2 },
            say: 'En la esferocitosis hereditaria falla la espectrina o la anquirina del citoesqueleto. El eritrocito pierde membrana, se vuelve una esfera y ya no se deforma. Al pasar por los cordones del bazo se queda atorado y los macrófagos lo destruyen.' },
          { v: { k: 'list', t: 'Esferocitosis hereditaria', items: ['Autosómica dominante; Coombs negativo', 'CHCM ↑; prueba EMA o fragilidad osmótica', 'Ictericia, esplenomegalia, cálculos', 'Crisis aplásica por parvovirus B19', 'Ácido fólico; esplenectomía si es grave'] },
            say: 'Recuerda sus datos. Herencia autosómica dominante y Coombs negativo. Concentración de hemoglobina corpuscular media alta. Se confirma con la prueba de eosina cinco maleimida por citometría o con la fragilidad osmótica. Cuidado con el parvovirus B diecinueve, que causa crisis aplásica. Se trata con ácido fólico, y esplenectomía en formas graves, vacunando antes.' },
          { v: { k: 'anim', id: 'hemoliticas', step: 3 },
            say: 'Ahora la deficiencia de glucosa seis fosfato deshidrogenasa, ligada al X. Sin esa enzima falta glutatión reducido. Un oxidante, como las habas, la primaquina, la dapsona o las sulfas, desnaturaliza la hemoglobina y forma cuerpos de Heinz. El macrófago muerde la célula: aparecen células mordidas.' },
          { v: { k: 'quiz', q: 'Mateo: Coombs negativo, células mordidas y cuerpos de Heinz. ¿Diagnóstico?', opts: ['Esferocitosis hereditaria', 'Déficit de G6PD', 'AHAI caliente'], a: 1 },
            say: 'Pausa. Volvamos con Mateo. Tiene Coombs negativo, células mordidas y cuerpos de Heinz en el frotis. ¿Cuál es el diagnóstico?',
            exp: 'Deficiencia de glucosa seis fosfato deshidrogenasa. Hombre joven, hemólisis intravascular aguda después de un oxidante, con células mordidas y cuerpos de Heinz. El tratamiento es retirar el oxidante y dar soporte.' },
          { v: { k: 'mnemo', t: 'G6PD = “Habas, Sulfas, Primaquina”', d: 'Tres oxidantes clásicos. Súmales dapsona, nitrofurantoína y rasburicasa.' },
            say: 'Para los oxidantes recuerda habas, sulfas y primaquina. Súmales dapsona, nitrofurantoína y rasburicasa.' },
          { v: { k: 'tip', kind: 'trap', t: 'No midas G6PD en plena crisis: los reticulocitos tienen más enzima y sale falsamente normal. Repite en 2–3 meses.' },
            say: 'Ojo con esta trampa. Si mides la enzima durante la crisis, puede salir normal, porque los eritrocitos viejos ya se destruyeron y los reticulocitos tienen más enzima. Repítela en dos o tres meses.' }
        ] },
        { ch: 'Adquiridas no inmunes', sc: [
          { v: { k: 'list', t: 'Esquistocitos: microangiopatía', items: ['PTT: ADAMTS13 <10%, síntomas neurológicos', 'SUH: diarrea con sangre + lesión renal', 'CID: TP y TTPa ↑, fibrinógeno ↓', 'HELLP, HTA maligna', 'Válvula mecánica: plaquetas normales'] },
            say: 'Si ves esquistocitos, piensa en microangiopatía. Púrpura trombocitopénica trombótica, con ADAMTS trece muy bajo. Síndrome urémico hemolítico, con diarrea con sangre y lesión renal. Coagulación intravascular diseminada, con tiempos alargados y fibrinógeno bajo. También síndrome HELLP, hipertensión maligna o una válvula mecánica, que rompe eritrocitos con plaquetas normales.' },
          { v: { k: 'big', h: 'HPN', t: 'CD55/59', u: 'ausentes en la citometría', s: 'Hemólisis intravascular + trombosis atípica + citopenias. Eculizumab con vacuna antimeningocócica.' },
            say: 'Y la hemoglobinuria paroxística nocturna: hemólisis intravascular con Coombs negativo, trombosis en sitios raros como las venas hepáticas, y citopenias. En la citometría de flujo faltan CD cincuenta y cinco y CD cincuenta y nueve. Se trata con inhibidores del complemento, siempre con vacuna contra meningococo.' },
          { v: { k: 'list', t: 'Reacción hemolítica aguda (ABO)', items: ['Minutos después de iniciar la transfusión', 'Fiebre, dolor lumbar, hipotensión', 'Orina roja: hemólisis intravascular', 'Detén la transfusión; vía con salina', 'Coombs directo y aviso al banco de sangre'] },
            say: 'Una más que no puedes fallar: la reacción hemolítica aguda por incompatibilidad ABO. A los pocos minutos de iniciar la transfusión aparecen fiebre, dolor lumbar, hipotensión y orina roja. Casi siempre es un error de identificación. Detén la transfusión de inmediato, mantén la vía con solución salina, hidrata para proteger el riñón y avisa al banco de sangre.' },
          { v: { k: 'tip', kind: 'pearl', t: 'Esferocitos + Coombs − = esferocitosis. Esferocitos + Coombs + = AHAI caliente. Esquistocitos = microangiopatía.' },
            say: 'La perla para el examen: esferocitos con Coombs negativo, esferocitosis hereditaria. Esferocitos con Coombs positivo, anemia autoinmune caliente. Esquistocitos, microangiopatía. Ahora ve a las preguntas del tema para fijar lo que viste.' }
        ] }
      ],
      sections: [
        { h: 'Confirma la hemólisis', html: `
<ul>
<li>Anemia normocítica con <b>reticulocitos ↑</b> (médula que responde).</li>
<li><b>LDH ↑</b>, <b>bilirrubina indirecta ↑</b>, <b>haptoglobina ↓</b> (se une a la hemoglobina libre).</li>
<li><b>Coombs directo</b> (prueba de antiglobulina directa): positivo = causa inmune.</li>
<li>El <b>frotis</b> orienta: esferocitos (esferocitosis o AHAI caliente), esquistocitos (microangiopatía), células mordidas y cuerpos de Heinz (G6PD), aglutinación (crioaglutininas), drepanocitos.</li>
</ul>` },
        { h: 'Intravascular vs extravascular', html: `
<ul>
<li><b>Intravascular</b> (se rompe en el vaso): hemoglobinuria (orina oscura), hemosiderinuria, haptoglobina indetectable. Causas: G6PD, microangiopatías (PTT, SUH, CID, válvulas mecánicas), HPN, reacción transfusional ABO, malaria.</li>
<li><b>Extravascular</b> (macrófagos del bazo e hígado): esplenomegalia, ictericia, litiasis pigmentaria. Causas: esferocitosis hereditaria, AHAI caliente, drepanocitosis, talasemias.</li>
</ul>` },
        { h: 'Hereditarias', html: `
<ul>
<li><b>Esferocitosis hereditaria</b>: defecto de espectrina o anquirina (autosómica dominante). Esferocitos, <b>CHCM ↑</b>, Coombs negativo, esplenomegalia, cálculos biliares. Prueba de unión a eosina-5-maleimida (EMA) por citometría o fragilidad osmótica. Crisis aplásica por parvovirus B19. Tratamiento: ácido fólico; esplenectomía en formas graves (vacunar antes).</li>
<li><b>Déficit de G6PD</b>: ligado al X. Crisis tras <b>estrés oxidativo</b>: infecciones, habas, primaquina, dapsona, sulfas, nitrofurantoína, rasburicasa. Cuerpos de Heinz y células mordidas. Mide la enzima <b>semanas después</b> de la crisis (los reticulocitos tienen más G6PD y dan falsos normales).</li>
<li><b>Drepanocitosis</b>: HbS; crisis vasooclusivas, síndrome torácico agudo, autoesplenectomía; hidroxiurea.</li>
</ul>` },
        { h: 'Adquiridas', html: `
<ul>
<li><b>AHAI caliente</b> (IgG, 37 °C): Coombs + para IgG, esferocitos, hemólisis extravascular. Asociada a LES, LLC, linfomas, fármacos. Tratamiento: prednisona 1 mg/kg; rituximab en segunda línea.</li>
<li><b>Crioaglutininas</b> (IgM, frío): Coombs + para C3. Acrocianosis, empeora con frío. Asociada a Mycoplasma, mononucleosis, linfomas. Evitar el frío; rituximab o sutimlimab; los esteroides sirven poco.</li>
<li><b>Microangiopáticas</b>: esquistocitos + trombocitopenia (PTT, SUH, CID, HELLP, HTA maligna) o hemólisis mecánica por válvula protésica.</li>
<li><b>Hemoglobinuria paroxística nocturna (HPN)</b>: pérdida de CD55 y CD59 (GPI) por mutación de PIGA. Tríada: hemólisis intravascular, <b>trombosis en sitios raros</b> (Budd-Chiari, venas cerebrales) y citopenias. Diagnóstico por citometría de flujo. Tratamiento: inhibidores del complemento (eculizumab, ravulizumab) con vacuna antimeningocócica.</li>
</ul>` },
        { h: 'Fisiopatología en 1 minuto', html: `
<ul>
<li>El eritrocito vive ~120 días. Hemólisis = vida más corta; si la médula compensa, puede no haber anemia (hemólisis compensada).</li>
<li><b>Intravascular</b>: la hemoglobina libre se une a la <b>haptoglobina</b> (que se agota); el exceso se filtra en el riñón (hemoglobinuria) y el túbulo guarda el hierro como hemosiderina (hemosiderinuria días después). La LDH sale del eritrocito roto.</li>
<li><b>Extravascular</b>: los macrófagos del bazo e hígado fagocitan eritrocitos rígidos o recubiertos de IgG; el hem se vuelve bilirrubina no conjugada (indirecta).</li>
<li><b>Por qué se rompe</b>: membrana (esferocitosis: espectrina, anquirina), enzima (G6PD: sin NADPH no hay glutatión reducido frente a oxidantes), hemoglobina (HbS, talasemias), anticuerpos (IgG caliente, IgM fría con complemento), complemento sin freno (HPN: faltan CD55 y CD59) o trauma mecánico (microangiopatía, válvulas).</li>
</ul>` },
        { h: 'Diagnóstico diferencial por el frotis', html: `
<div class="tablewrap"><table class="mini">
<tr><th>Frotis</th><th>Piensa en</th><th>Siguiente estudio</th></tr>
<tr><td>Esferocitos</td><td>Esferocitosis hereditaria (Coombs −) o AHAI caliente (Coombs +)</td><td>Coombs directo; EMA si es negativo</td></tr>
<tr><td>Esquistocitos</td><td>PTT, SUH, CID, HELLP, HTA maligna, válvula mecánica</td><td>Plaquetas, TP/TTPa, fibrinógeno, creatinina, ADAMTS13</td></tr>
<tr><td>Células mordidas y cuerpos de Heinz</td><td>Déficit de G6PD tras un oxidante</td><td>G6PD 2–3 meses después de la crisis</td></tr>
<tr><td>Aglutinación de eritrocitos</td><td>Crioaglutininas (IgM)</td><td>Coombs C3, título de crioaglutininas</td></tr>
<tr><td>Drepanocitos</td><td>Drepanocitosis (HbS)</td><td>Electroforesis de hemoglobina</td></tr>
<tr><td>Normal, Coombs − y trombosis atípica</td><td>HPN</td><td>Citometría de flujo (CD55/CD59)</td></tr>
</table></div>` },
        { h: 'Cómo lo preguntan en el examen', html: `
<ul>
<li>Hombre joven con orina oscura tras habas, primaquina, dapsona o sulfas, células mordidas → <b>déficit de G6PD</b>; mide la enzima semanas después.</li>
<li>Esferocitos + Coombs negativo + CHCM alta + familia afectada → <b>esferocitosis hereditaria</b>.</li>
<li>Lupus o LLC con esferocitos y Coombs IgG positivo → <b>AHAI caliente</b>: prednisona; si no responde, rituximab.</li>
<li>Acrocianosis en el frío después de Mycoplasma, Coombs C3 → <b>crioaglutininas</b>: evitar el frío; esteroides poco útiles.</li>
<li>Hemólisis Coombs negativo + Budd-Chiari + citopenias → <b>HPN</b>: citometría de flujo; eculizumab con vacuna antimeningocócica.</li>
<li>Fiebre, dolor lumbar, hipotensión y orina roja minutos después de transfundir → <b>reacción hemolítica aguda ABO</b>: detén la transfusión.</li>
</ul>` }
      ],
      mnemo: { t: 'G6PD = “Habas, Sulfas, Primaquina”', d: 'Imagina a un paciente comiendo habas con una pastilla de sulfa y otra de primaquina: tres oxidantes que rompen eritrocitos con poco glutatión.' },
      pearl: 'Esferocitos con Coombs negativo = esferocitosis hereditaria. Esferocitos con Coombs positivo = AHAI caliente.',
      trap: 'Medir G6PD durante la crisis puede dar un valor normal falso: los eritrocitos viejos (con menos enzima) ya se destruyeron.',
      guide: [
        'Prueba para esferocitosis: guías recientes prefieren la prueba EMA por citometría sobre la fragilidad osmótica; muchos libros todavía mencionan la fragilidad osmótica como prueba clásica.',
        'AHAI caliente que no responde al esteroide: el consenso internacional de 2020 (Jäger et al.) pone el rituximab como segunda línea (o junto al esteroide desde el inicio en casos graves) y deja la esplenectomía para después; textos más antiguos ponían la esplenectomía como segunda línea.'
      ],
      refs: [
        'Barcellini W, Fattizzo B. Autoimmune hemolytic anemias. N Engl J Med 2023 (revisión).',
        'Hill A, et al. Paroxysmal nocturnal haemoglobinuria. Nat Rev Dis Primers 2017.',
        'Harrison. Principios de Medicina Interna, 21e. Cap. Anemias hemolíticas.'
      ]
    }
  },

  compares: {
    'intra-extra': {
      topic: 'hemoliticas', a: 'Intravascular', b: 'Extravascular',
      rows: [
        ['Dónde se destruye', 'Dentro del vaso', 'Bazo e hígado (macrófagos)'],
        ['Hemoglobinuria', 'Sí (orina oscura)', 'No'],
        ['Haptoglobina', 'Indetectable', 'Baja'],
        ['Esplenomegalia', 'Poco común', 'Frecuente'],
        ['Frotis típico', 'Esquistocitos, células mordidas', 'Esferocitos'],
        ['Ejemplos', 'G6PD, PTT, HPN, ABO, válvulas', 'Esferocitosis, AHAI caliente, talasemia'],
        ['Complicación crónica', 'Déficit de hierro (pérdida urinaria)', 'Litiasis pigmentaria']
      ]
    }
  },

  anims: {
    hemoliticas: {
      title: 'Dónde y por qué se rompe el eritrocito',
      steps: [
        { cap: '<b>Hemólisis intravascular.</b> El eritrocito se rompe dentro del vaso. La haptoglobina atrapa la hemoglobina libre hasta agotarse y la LDH sube; el exceso se filtra en el riñón: hemoglobinuria (orina oscura).',
          labels: [[66, 30, 'Ruptura en el vaso'], [30, 108, 'Riñón'], [78, 116, 'Orina oscura'], [124, 112, 'Hapto'], [146, 112, 'LDH']] },
        { cap: '<b>Hemólisis extravascular.</b> Los macrófagos del bazo fagocitan los eritrocitos. El hem se convierte en bilirrubina indirecta, que pasa al hígado y da ictericia. El bazo trabaja de más y crece.',
          labels: [[52, 62, 'Bazo (macrófagos)'], [52, 96, 'Esplenomegalia'], [128, 6, 'Hígado'], [100, 50, 'Bilirrubina ind.'], [128, 110, 'Ictericia']] },
        { cap: '<b>Esferocitosis hereditaria.</b> Sin espectrina o anquirina, el eritrocito pierde membrana y se vuelve esfera. No se deforma, se atora en el cordón esplénico y el macrófago lo destruye. El discocito normal se dobla y pasa.',
          labels: [[40, 8, 'Cordón esplénico'], [122, 8, 'Sinusoide'], [70, 42, 'Esferocitos'], [44, 76, 'Macrófago'], [122, 88, 'Discocito pasa']] },
        { cap: '<b>Déficit de G6PD.</b> Sin glutatión reducido, un oxidante (habas, primaquina, dapsona, sulfas) desnaturaliza la hemoglobina: se forman cuerpos de Heinz. El macrófago los arranca y deja una célula mordida.',
          labels: [[22, 8, 'Habas, fármacos'], [70, 40, 'Poco glutatión'], [52, 88, 'Cuerpos de Heinz'], [104, 34, 'Célula mordida'], [132, 82, 'Macrófago']] },
        { cap: '<b>Coombs directo.</b> Si el eritrocito trae IgG o C3 pegados, el reactivo de antiglobulina une las células vecinas y se aglutinan: Coombs positivo = hemólisis inmune.',
          labels: [[40, 6, 'Eritrocito + IgG'], [110, 6, 'Antiglobulina'], [40, 106, 'Sin reactivo'], [120, 106, 'Aglutinan: Coombs +']] }
      ]
    }
  },

  cards: [
    ['Laboratorio de hemólisis', 'Reticulocitos ↑, LDH ↑, bilirrubina indirecta ↑, haptoglobina ↓'],
    ['Esferocitos + Coombs negativo + CHCM ↑', 'Esferocitosis hereditaria'],
    ['Esferocitos + Coombs positivo (IgG)', 'AHAI caliente'],
    ['Coombs positivo para C3 + acrocianosis', 'Crioaglutininas (IgM)'],
    ['Células mordidas y cuerpos de Heinz', 'Déficit de G6PD'],
    ['Fármacos que precipitan crisis en G6PD', 'Primaquina, dapsona, sulfas, nitrofurantoína, rasburicasa'],
    ['HPN: tríada', 'Hemólisis intravascular, trombosis atípicas, citopenias'],
    ['HPN: diagnóstico', 'Citometría de flujo: ausencia de CD55/CD59'],
    ['Crisis aplásica en esferocitosis', 'Parvovirus B19'],
    ['AHAI caliente: primera línea', 'Prednisona 1 mg/kg/día'],
    ['Hemólisis intravascular: hallazgo urinario', 'Hemoglobinuria y hemosiderinuria'],
    ['Esquistocitos + trombocitopenia', 'Microangiopatía: PTT, SUH, CID, HELLP, HTA maligna'],
    ['Fiebre, dolor lumbar, hipotensión y orina roja minutos después de transfundir', 'Reacción hemolítica aguda ABO: detén la transfusión'],
    ['Bilirrubina indirecta alta con LDH, haptoglobina y reticulocitos normales', 'No es hemólisis: piensa en síndrome de Gilbert'],
    ['AHAI caliente que no responde al esteroide', 'Rituximab (segunda línea); esplenectomía después'],
    ['Antes de una esplenectomía programada', 'Vacunas contra neumococo, meningococo y Hib ≥2 semanas antes']
  ],

  questions: [
    q({ id: 'hemoliticas-01', dif: 1,
      stem: 'Hombre de 22 años con ictericia y orina oscura dos días después de recibir nitrofurantoína. Frotis con células mordidas. Coombs negativo. ¿Diagnóstico más probable?',
      opts: ['Esferocitosis hereditaria', 'Déficit de G6PD', 'AHAI caliente', 'PTT', 'Drepanocitosis'],
      ans: 1,
      exp: 'Hemólisis intravascular aguda tras un fármaco oxidante en un hombre, con células mordidas (los macrófagos retiran los cuerpos de Heinz): déficit de G6PD.',
      why: ['Daría esferocitos y es crónica.', '', 'Coombs sería positivo.', 'Habría esquistocitos y plaquetas bajas.', 'Habría drepanocitos.'],
      ref: 'Harrison 21e' }),

    q({ id: 'hemoliticas-02', dif: 1,
      stem: 'Joven de 18 años con anemia leve, esplenomegalia, cálculos biliares y antecedente familiar similar. Esferocitos, CHCM 37, Coombs negativo. ¿Diagnóstico?',
      opts: ['AHAI caliente', 'Esferocitosis hereditaria', 'Talasemia menor', 'Déficit de G6PD', 'HPN'],
      ans: 1,
      exp: 'Esferocitos con Coombs negativo, CHCM alta, herencia y esplenomegalia: esferocitosis hereditaria (defecto de espectrina o anquirina).',
      why: ['Coombs sería positivo.', '', 'Microcítica con CHCM normal o baja.', 'Daría crisis tras oxidantes.', 'Hemólisis intravascular con trombosis.'],
      ref: 'Harrison 21e' }),

    q({ id: 'hemoliticas-03', dif: 2,
      stem: 'Mujer de 34 años con LES presenta Hb 7, reticulocitos 9%, LDH alta, esferocitos y Coombs directo positivo para IgG. ¿Tratamiento de primera línea?',
      opts: ['Esplenectomía', 'Prednisona 1 mg/kg/día', 'Recambio plasmático', 'Evitar el frío', 'Eculizumab'],
      ans: 1,
      exp: 'AHAI caliente (IgG) secundaria a LES: glucocorticoides en primera línea; rituximab si no responde o recae.',
      why: ['Tercera línea.', '', 'No es eficaz en AHAI caliente.', 'Es para crioaglutininas.', 'Es para HPN.'],
      ref: 'Jäger U, et al. Blood Rev 2020' }),

    q({ id: 'hemoliticas-04', dif: 2,
      stem: 'Hombre de 28 años convaleciente de neumonía por Mycoplasma presenta anemia hemolítica con acrocianosis al salir al frío. Coombs positivo para C3. ¿Tipo de anticuerpo?',
      opts: ['IgG caliente', 'IgM fría (crioaglutinina)', 'IgA', 'IgE', 'Anticuerpo anti-ADAMTS13'],
      ans: 1,
      exp: 'Las crioaglutininas son IgM que se unen al eritrocito en el frío y fijan complemento (C3). Asociadas a Mycoplasma, mononucleosis y linfomas.',
      why: ['Daría Coombs IgG y no empeora con frío.', '', 'No es la causa típica.', 'No causa hemólisis.', 'Causa PTT.'],
      ref: 'Harrison 21e' }),

    q({ id: 'hemoliticas-05', dif: 3,
      stem: 'Mujer de 32 años con anemia hemolítica Coombs negativo, orina oscura por las mañanas, pancitopenia leve y trombosis de venas hepáticas (Budd-Chiari). ¿Estudio diagnóstico?',
      opts: ['Electroforesis de hemoglobina', 'Citometría de flujo para CD55/CD59', 'Fragilidad osmótica', 'ADAMTS13', 'Biopsia hepática'],
      ans: 1,
      exp: 'Hemólisis intravascular + trombosis en sitio atípico + citopenias: hemoglobinuria paroxística nocturna. La citometría muestra pérdida de proteínas ancladas a GPI (CD55, CD59).',
      why: ['Es para hemoglobinopatías.', '', 'Es para esferocitosis.', 'Es para PTT.', 'No hace el diagnóstico.'],
      ref: 'Hill A, Nat Rev Dis Primers 2017' }),

    q({ id: 'hemoliticas-06', dif: 2,
      stem: '¿Qué hallazgo apoya más una hemólisis intravascular que extravascular?',
      opts: ['Esplenomegalia', 'Hemoglobinuria con hemosiderinuria', 'Esferocitos', 'Litiasis biliar', 'Bilirrubina indirecta elevada'],
      ans: 1,
      exp: 'La hemoglobina libre filtra al riñón cuando se satura la haptoglobina: hemoglobinuria y, días después, hemosiderinuria. La esplenomegalia y los esferocitos apuntan a destrucción extravascular.',
      why: ['Es típica de la extravascular.', '', 'Típicos de extravascular.', 'Más típica de la extravascular crónica.', 'Ocurre en ambas.'],
      ref: 'Harrison 21e' }),

    q({ id: 'hemoliticas-07', dif: 2,
      stem: 'Hombre de 26 años con déficit de G6PD conocido. Tuvo una crisis hace 3 días y le midieron G6PD: sale normal. ¿Cómo interpretas?',
      opts: ['Se descarta el déficit', 'Falso normal: los reticulocitos tienen más G6PD; repetir en 2–3 meses', 'Error del laboratorio; repetir hoy', 'Es HPN', 'Es esferocitosis'],
      ans: 1,
      exp: 'Tras una crisis, los eritrocitos viejos (con menos enzima) se destruyen y quedan reticulocitos con más G6PD: la medición sale falsamente normal. Se repite cuando pasa la reticulocitosis.',
      why: ['El contexto explica el resultado.', '', 'Repetirlo pronto da el mismo error.', 'No hay datos de HPN.', 'No hay datos de esferocitosis.'],
      ref: 'Luzzatto L. Lancet 2008' }),

    q({ id: 'hemoliticas-08', dif: 1,
      stem: 'Paciente con válvula aórtica mecánica presenta anemia con esquistocitos, LDH alta y plaquetas normales. ¿Mecanismo?',
      opts: ['Autoinmune', 'Hemólisis mecánica (traumática) por la prótesis', 'Déficit de B12', 'Déficit de G6PD', 'Hiperesplenismo'],
      ans: 1,
      exp: 'El flujo turbulento a través de la prótesis (sobre todo con fuga paravalvular) fragmenta eritrocitos: hemólisis intravascular con esquistocitos.',
      why: ['Coombs sería positivo y habría esferocitos.', '', 'Sería macrocítica.', 'Daría células mordidas.', 'No da esquistocitos.'],
      ref: 'Harrison 21e' }),

    q({ id: 'hemoliticas-09', dif: 2,
      stem: 'Niño con esferocitosis hereditaria presenta de repente Hb 4.5 con reticulocitos 0.2% tras un cuadro de fiebre y exantema en mejillas. ¿Causa?',
      opts: ['Crisis hemolítica por infección bacteriana', 'Crisis aplásica por parvovirus B19', 'Secuestro esplénico', 'Déficit de hierro', 'AHAI sobreagregada'],
      ans: 1,
      exp: 'El parvovirus B19 infecta precursores eritroides y detiene la eritropoyesis por 1–2 semanas. En hemólisis crónica, eso causa anemia grave con reticulocitos muy bajos.',
      why: ['Tendría reticulocitos altos.', '', 'Tendría esplenomegalia aguda y reticulocitos altos.', 'No explica la caída brusca.', 'Tendría reticulocitos altos.'],
      ref: 'Harrison 21e' }),

    q({ id: 'hemoliticas-10', dif: 3,
      stem: 'Paciente con HPN que iniciará eculizumab. ¿Qué medida es obligatoria antes?',
      opts: ['Vacuna contra meningococo', 'Esplenectomía', 'Profilaxis con TMP-SMX', 'Anticoagulación con heparina', 'Ácido fólico en dosis altas'],
      ans: 0,
      exp: 'El eculizumab bloquea C5; sin el complejo de ataque de membrana aumenta mucho el riesgo de infección por Neisseria meningitidis. Se vacuna (ACWY y B) y a menudo se da profilaxis antibiótica.',
      why: ['', 'No está indicada.', 'Es para Pneumocystis.', 'No es requisito para iniciar.', 'Es complementario, no obligatorio para iniciar.'],
      ref: 'Ficha técnica de eculizumab' }),

    q({ id: 'hemoliticas-11', dif: 2,
      stem: 'Mujer de 50 años recibe un concentrado eritrocitario. A los 10 minutos presenta fiebre, escalofrío, dolor lumbar, hipotensión y orina roja. ¿Qué haces primero?',
      opts: ['Bajar la velocidad y dar paracetamol', 'Detener la transfusión, mantener la vía con solución salina y verificar la identidad de la unidad', 'Dar furosemida y continuar la transfusión', 'Agregar difenhidramina y continuar', 'Dar glucocorticoide y terminar la unidad'],
      ans: 1,
      exp: 'Reacción hemolítica aguda por incompatibilidad ABO, casi siempre por un error de identificación: hemólisis intravascular por IgM y complemento, con riesgo de choque, CID y lesión renal. Se detiene la transfusión, se mantiene la vía con salina, se hidrata para proteger el riñón y se envían la unidad y muestras al banco de sangre (Coombs directo, hemoglobina libre).',
      why: ['Cualquier volumen adicional de sangre incompatible empeora la hemólisis.', '', 'No se continúa una transfusión incompatible.', 'Los antihistamínicos son para reacciones alérgicas leves.', 'No se termina la unidad; el esteroide no detiene la hemólisis por complemento.'],
      ref: 'Harrison 21e · medicina transfusional' }),

    q({ id: 'hemoliticas-12', dif: 2,
      stem: 'Hombre de 21 años con ictericia leve tras 2 días de ayuno por gastroenteritis. Bilirrubina total 3.2 mg/dL (indirecta 2.8). Hb 15, reticulocitos 1%, LDH y haptoglobina normales, transaminasas normales. ¿Diagnóstico más probable?',
      opts: ['Esferocitosis hereditaria', 'Síndrome de Gilbert', 'Déficit de G6PD', 'Hepatitis viral aguda', 'AHAI caliente'],
      ans: 1,
      exp: 'Hiperbilirrubinemia indirecta aislada con ayuno, estrés o infección, sin anemia ni datos de hemólisis (reticulocitos, LDH y haptoglobina normales): síndrome de Gilbert, por menor actividad de la UGT1A1. Es benigno y no requiere tratamiento.',
      why: ['Habría anemia, reticulocitos altos y esferocitos.', '', 'Habría anemia aguda, LDH alta y haptoglobina baja.', 'Daría transaminasas altas y bilirrubina mixta.', 'Habría anemia y Coombs positivo.'],
      ref: 'Harrison 21e' }),

    q({ id: 'hemoliticas-13', dif: 2,
      stem: 'Mujer de 45 años con AHAI caliente idiopática. Tras 3 semanas de prednisona 1 mg/kg/día su Hb sigue en 7.2 g/dL con LDH alta y reticulocitosis. ¿Siguiente paso más adecuado?',
      opts: ['Esplenectomía', 'Agregar rituximab', 'Recambio plasmático', 'Suspender el esteroide y observar', 'Eculizumab'],
      ans: 1,
      exp: 'AHAI caliente que no responde o recae con el esteroide: el rituximab es la segunda línea preferida. La esplenectomía se reserva para cuando falla el rituximab. Busca siempre una causa secundaria (LLC, linfoma, LES, fármacos).',
      why: ['Se reserva para después del rituximab en el consenso actual.', '', 'No es eficaz en la AHAI por IgG.', 'Con Hb de 7 y hemólisis activa es peligroso.', 'Es para HPN; no es estándar en la AHAI caliente.'],
      ref: 'Jäger U, et al. Blood Rev 2020' }),

    q({ id: 'hemoliticas-14', dif: 2,
      stem: 'Niño de 5 años con diarrea con sangre hace una semana. Ahora está pálido y oligúrico. Hb 7.0, plaquetas 45,000, esquistocitos, LDH alta, creatinina 2.8 mg/dL. TP y TTPa normales. ¿Diagnóstico y manejo?',
      opts: ['PTT; recambio plasmático', 'SUH por E. coli productora de toxina Shiga; soporte y diálisis si se requiere, sin antibióticos', 'CID; plasma y crioprecipitado', 'AHAI caliente; prednisona', 'PTI; IgIV'],
      ans: 1,
      exp: 'Diarrea con sangre + anemia microangiopática + trombocitopenia + lesión renal en un niño = SUH típico (E. coli O157:H7). El tratamiento es de soporte: líquidos, control de la presión, transfusión si hace falta y diálisis si se requiere. Los antibióticos y antidiarreicos se evitan porque aumentan el riesgo.',
      why: ['La PTT predomina en adultos, con ADAMTS13 <10% y menos daño renal.', '', 'La coagulación es normal.', 'Habría esferocitos y Coombs positivo, sin esquistocitos.', 'La PTI no da hemólisis ni esquistocitos.'],
      ref: 'Harrison 21e' }),

    q({ id: 'hemoliticas-15', dif: 2,
      stem: 'Joven de 17 años con esferocitosis hereditaria grave y transfusiones frecuentes. Se programa esplenectomía electiva. ¿Qué medida es indispensable antes de la cirugía?',
      opts: ['Suspender el ácido fólico', 'Vacunar contra neumococo, meningococo y H. influenzae b al menos 2 semanas antes', 'Iniciar eculizumab', 'Medir G6PD', 'Anticoagulación profiláctica por 6 meses'],
      ans: 1,
      exp: 'Sin bazo aumenta el riesgo de sepsis fulminante por bacterias encapsuladas (neumococo, meningococo, Haemophilus). Se vacuna al menos 2 semanas antes de la cirugía programada y se educa sobre la fiebre. Si hay litiasis, se valora colecistectomía en el mismo tiempo.',
      why: ['El ácido fólico se mantiene en la hemólisis crónica.', '', 'Es para HPN y otras enfermedades del complemento.', 'No cambia la conducta en una esferocitosis confirmada.', 'No es una medida estándar previa.'],
      ref: 'Harrison 21e' })
  ]
};
