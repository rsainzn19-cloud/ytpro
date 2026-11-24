// Práctica de Endocrinología (semanas 8 a 11): algoritmos con casos, guardias con monitor y simuladores de un control.
export default {
  algos: {
    tsh: {
      title: 'Tiroides: TSH y T4 libre', topics: ['hipotiroidismo', 'hipertiroidismo'], start: 'tsh',
      nodes: {
        tsh: { q: '¿Cómo está la TSH?', opts: [{ t: 'Alta', go: 'alta' }, { t: 'Suprimida', go: 'baja' }, { t: 'Normal o baja con T4 libre baja', go: 'central' }] },
        alta: { q: 'TSH alta: ¿T4 libre?', opts: [{ t: 'Baja', go: 'primario' }, { t: 'Normal', go: 'subcl' }] },
        subcl: { q: 'Subclínico: ¿TSH 10 o más, embarazo o busca embarazo?', opts: [{ t: 'Sí', go: 'tratar' }, { t: 'No', go: 'vigilar' }] },
        baja: { q: 'TSH suprimida con T4 libre alta: ¿TRAb?', opts: [{ t: 'Positivos', go: 'graves' }, { t: 'Negativos: gammagrama', go: 'gamma' }] },
        gamma: { q: 'Captación:', opts: [{ t: 'Alta en un nódulo o en varios', go: 'nodular' }, { t: 'Baja con tiroides dolorosa', go: 'quervain' }, { t: 'Baja con tiroglobulina baja', go: 'exog' }] },
        primario: { end: 'Hipotiroidismo primario', d: 'Levotiroxina 1.6 µg/kg (25 a 50 µg en ancianos o cardiópatas). TSH a las 6 a 8 semanas.' },
        tratar: { end: 'Subclínico que se trata', d: 'Levotiroxina; en embarazo, meta TSH menor de 2.5 en el 1er trimestre.' },
        vigilar: { end: 'Repetir TSH en 6 a 12 semanas', d: 'Pide anti-TPO. Considera tratar si hay síntomas o anticuerpos positivos.' },
        central: { end: 'Hipotiroidismo central', d: 'Estudia la hipófisis y el eje suprarrenal antes de dar levotiroxina. Se ajusta con T4 libre.' },
        graves: { end: 'Enfermedad de Graves', d: 'Betabloqueador + metimazol 12 a 18 meses (PTU en el 1er trimestre).' },
        nodular: { end: 'BMNT o adenoma tóxico', d: 'Tratamiento definitivo: yodo radiactivo o cirugía.' },
        quervain: { end: 'Tiroiditis de De Quervain', d: 'Betabloqueador + AINE (o prednisona). Los antitiroideos no sirven.' },
        exog: { end: 'Tirotoxicosis facticia', d: 'Levotiroxina oculta: tiroglobulina baja y captación baja.' }
      },
      cases: [
        { t: 'Rosa, 46 años, con frío, estreñimiento y menorragia.', data: [['TSH', '28 mUI/L'], ['T4 libre', '0.5 ng/dL']], path: { tsh: 0, alta: 0 }, end: 'primario' },
        { t: 'Mujer de 32 años que busca embarazo.', data: [['TSH', '6.4'], ['T4 libre', 'Normal']], path: { tsh: 0, alta: 1, subcl: 0 }, end: 'tratar' },
        { t: 'Daniela, 29 años, con exoftalmos y bocio difuso.', data: [['TSH', '<0.01'], ['T4 libre', '4.8'], ['TRAb', 'Positivos']], path: { tsh: 1, baja: 0 }, end: 'graves' },
        { t: 'Mujer de 40 años con dolor en el cuello tras una gripa.', data: [['TSH', '<0.01'], ['TRAb', 'Negativos'], ['VSG', '88'], ['Captación', 'Baja']], path: { tsh: 1, baja: 1, gamma: 1 }, end: 'quervain' },
        { t: 'Mujer con antecedente de cirugía hipofisaria y cansancio.', data: [['TSH', '1.1'], ['T4 libre', '0.4']], path: { tsh: 2 }, end: 'central' },
        { t: 'Hombre de 72 años con FA nueva y bocio nodular.', data: [['TSH', '<0.01'], ['TRAb', 'Negativos'], ['Gammagrama', 'Varios nódulos calientes']], path: { tsh: 1, baja: 1, gamma: 0 }, end: 'nodular' }
      ]
    },
    hipona: {
      title: 'Hiponatremia en tres preguntas', topics: ['suprarrenal'], start: 'osmp',
      nodes: {
        osmp: { q: 'Osmolaridad plasmática:', opts: [{ t: 'Normal o alta', go: 'pseudo' }, { t: 'Baja: menor de 275', go: 'osmu' }] },
        osmu: { q: 'Osmolaridad urinaria:', opts: [{ t: 'Menor de 100', go: 'agua' }, { t: 'Mayor de 100: la ADH actúa', go: 'vol' }] },
        vol: { q: 'Volemia:', opts: [{ t: 'Hipovolémico', go: 'hipo' }, { t: 'Euvolémico', go: 'euvo' }, { t: 'Hipervolémico (edema, ascitis)', go: 'hiper' }] },
        hipo: { q: 'Hipovolémico: sodio urinario', opts: [{ t: 'Menor de 30', go: 'extra' }, { t: 'Mayor de 30', go: 'renal' }] },
        euvo: { q: 'Euvolémico: ¿TSH y cortisol?', opts: [{ t: 'Normales', go: 'siadh' }, { t: 'Cortisol bajo', go: 'addison' }] },
        pseudo: { end: 'No es hiponatremia hipotónica', d: 'Hiperglucemia (corrige el sodio), manitol o seudohiponatremia por lípidos o proteínas.' },
        agua: { end: 'Exceso de agua: polidipsia o té y pan', d: 'El riñón diluye al máximo. Restringe agua y aporta solutos.' },
        extra: { end: 'Pérdidas extrarrenales', d: 'Diarrea, vómito, sudor: salina 0.9%.' },
        renal: { end: 'Pérdida renal: tiazidas o Addison', d: 'Suspende la tiazida; si hay K alto y piel oscura, piensa en Addison.' },
        siadh: { end: 'SIADH', d: 'Restricción de líquidos; busca cáncer de pulmón, SNC o fármacos. Corrige máximo 8 mEq en 24 h.' },
        addison: { end: 'Déficit de cortisol', d: 'Hidrocortisona. El cortisol bajo eleva la ADH.' },
        hiper: { end: 'Hipervolémica: IC, cirrosis o nefrótico', d: 'Restricción de agua y sodio, diurético de asa; trata la causa.' }
      },
      cases: [
        { t: 'Hombre de 66 años fumador con masa hiliar.', data: [['Na', '122'], ['Osm plasmática', '254'], ['Osm urinaria', '480'], ['Volemia', 'Euvolémico'], ['TSH y cortisol', 'Normales']], path: { osmp: 1, osmu: 1, vol: 1, euvo: 0 }, end: 'siadh' },
        { t: 'Mujer de 70 años que inició hidroclorotiazida hace un mes.', data: [['Na', '124'], ['Osm plasmática', '258'], ['Osm urinaria', '350'], ['Volemia', 'Seca'], ['Na urinario', '62']], path: { osmp: 1, osmu: 1, vol: 0, hipo: 1 }, end: 'renal' },
        { t: 'Diabético descompensado.', data: [['Na', '128'], ['Glucosa', '780'], ['Osm plasmática', '305']], path: { osmp: 0 }, end: 'pseudo' },
        { t: 'Hombre que bebe 20 cervezas al día y casi no come.', data: [['Na', '118'], ['Osm plasmática', '246'], ['Osm urinaria', '62']], path: { osmp: 1, osmu: 0 }, end: 'agua' },
        { t: 'Hombre con cirrosis y ascitis a tensión.', data: [['Na', '126'], ['Osm plasmática', '262'], ['Osm urinaria', '420'], ['Volemia', 'Edema y ascitis']], path: { osmp: 1, osmu: 1, vol: 2 }, end: 'hiper' }
      ]
    },
    hipercal: {
      title: 'Hipercalcemia: ¿PTH o cáncer?', topics: ['calcio'], start: 'pth',
      nodes: {
        pth: { q: 'Calcio corregido alto. ¿PTH?', opts: [{ t: 'Alta o inapropiadamente normal', go: 'ucal' }, { t: 'Suprimida', go: 'mal' }] },
        ucal: { q: 'Calcio en orina de 24 h (cociente de depuración Ca/Cr):', opts: [{ t: 'Normal o alto', go: 'hpt' }, { t: 'Muy bajo: menor de 0.01', go: 'hhf' }] },
        mal: { q: 'PTH suprimida: ¿qué encuentras?', opts: [{ t: 'PTHrP alta', go: 'pthrp' }, { t: 'Calcitriol alto con sarcoidosis o linfoma', go: 'gran' }, { t: 'Pico monoclonal y anemia', go: 'mieloma' }] },
        hpt: { end: 'Hiperparatiroidismo primario', d: 'Cirugía si hay síntomas, Ca >1 sobre lo normal, osteoporosis, TFG <60, litiasis o edad <50. Sestamibi solo para planear.' },
        hhf: { end: 'Hipercalcemia hipocalciúrica familiar', d: 'Benigna: no se opera.' },
        pthrp: { end: 'Hipercalcemia humoral maligna', d: 'Carcinoma epidermoide, mama, riñón. Salina → calcitonina → zoledronato.' },
        gran: { end: 'Calcitriol extrarrenal', d: 'Granulomatosas y linfoma: glucocorticoides.' },
        mieloma: { end: 'Mieloma múltiple', d: 'Lesiones osteolíticas. Salina, zoledronato y tratamiento del mieloma.' }
      },
      cases: [
        { t: 'Leticia, 58 años, con litiasis recurrente.', data: [['Ca', '11.4'], ['PTH', '128 pg/mL'], ['P', '2.2'], ['Calciuria', 'Alta']], path: { pth: 0, ucal: 0 }, end: 'hpt' },
        { t: 'Fumador con masa pulmonar central.', data: [['Ca', '14.8'], ['PTH', 'Suprimida'], ['PTHrP', 'Alta']], path: { pth: 1, mal: 0 }, end: 'pthrp' },
        { t: 'Hombre de 30 años asintomático; su madre también tiene calcio alto.', data: [['Ca', '10.9'], ['PTH', '62 (normal)'], ['Ca/Cr depuración', '0.006']], path: { pth: 0, ucal: 1 }, end: 'hhf' },
        { t: 'Mujer con adenopatías hiliares bilaterales y eritema nodoso.', data: [['Ca', '12.1'], ['PTH', 'Suprimida'], ['1,25-(OH)2 vit D', 'Alta']], path: { pth: 1, mal: 1 }, end: 'gran' },
        { t: 'Hombre de 68 años con dolor lumbar, anemia y creatinina alta.', data: [['Ca', '12.8'], ['PTH', 'Suprimida'], ['Electroforesis', 'Pico monoclonal']], path: { pth: 1, mal: 2 }, end: 'mieloma' }
      ]
    }
  },
  sliders: {
    tshsim: { title: 'TSH: ¿qué significa?', topics: ['hipotiroidismo', 'hipertiroidismo'], label: 'TSH (con T4 libre acorde)', unit: 'mUI/L', min: 0, max: 30, step: 0.1, start: 2.2,
      intro: 'Mueve la TSH. Recuerda: si la T4 libre está baja con TSH normal o baja, el problema es central.',
      bands: [[0.09, 'TSH suprimida', 'bad', 'Hipertiroidismo (con T4 o T3 altas) o subclínico (con T4 y T3 normales). Busca la causa: TRAb y captación. Riesgo de FA y osteoporosis.'], [0.39, 'TSH baja', 'warn', 'Hipertiroidismo subclínico leve o exceso de levotiroxina. En ancianos, ajustar la dosis.'], [4.5, 'Normal', 'ok', 'Eutiroideo (si la T4 libre es normal). En el 1er trimestre del embarazo la meta es menor de 2.5.'], [9.9, 'TSH alta, menos de 10', 'warn', 'Con T4 libre normal: subclínico. Repite con anti-TPO; trata si hay embarazo, síntomas o anticuerpos.'], [30, 'TSH de 10 o más', 'bad', 'Hipotiroidismo que se trata: levotiroxina 1.6 µg/kg (25 a 50 µg en ancianos o cardiópatas).']] },
    sodio: { title: 'Sodio sérico', topics: ['suprarrenal'], label: 'Sodio', unit: 'mEq/L', min: 105, max: 160, step: 1, start: 128,
      intro: 'La gravedad depende de los síntomas y de la rapidez. Al corregir: máximo 8 mEq en 24 h.',
      bands: [[119, 'Hiponatremia grave', 'bad', 'Si hay convulsión, coma o vómito: salina 3% 100 a 150 mL en bolo, hasta 2 a 3 veces (meta +4 a 6). Riesgo alto de desmielinización si se corrige de más.'], [129, 'Hiponatremia moderada', 'warn', 'Aborda con osmolaridad plasmática, osmolaridad urinaria y volemia. Corrige despacio.'], [134, 'Hiponatremia leve', 'warn', 'Busca la causa (tiazidas, SIADH, hipotiroidismo, déficit de cortisol).'], [145, 'Normal', 'ok', '135 a 145 mEq/L.'], [160, 'Hipernatremia', 'bad', 'Déficit de agua libre: ancianos sin acceso al agua, diabetes insípida. Corrige con agua libre a no más de 10 mEq en 24 h.']] },
    tscore: { title: 'Densitometría: el T-score', topics: ['calcio'], label: 'T-score de cadera o columna', unit: 'DE', min: -4.5, max: 2, step: 0.1, start: -1.8,
      intro: 'El T-score compara con un adulto joven. Una fractura por fragilidad es osteoporosis sin importar el número.',
      bands: [[-2.5, 'Osteoporosis', 'bad', 'T ≤ −2.5. Calcio, vitamina D, ejercicio y bisfosfonato (alendronato o zoledronato). ERC: denosumab. Muy alto riesgo: teriparatida.'], [-1, 'Osteopenia', 'warn', 'T entre −1 y −2.5. Calcula el FRAX: si cadera ≥3% o mayor ≥20% a 10 años, tratar como osteoporosis.'], [2, 'Normal', 'ok', 'T mayor de −1. Calcio y vitamina D en la dieta, ejercicio.']] }
  },
  cases: [
    { id: 'g-suprarrenal', topic: 'suprarrenal', subj: 'endo',
      title: 'El choque que no cede', place: 'Terapia intensiva',
      patient: { name: 'Ramiro', age: 52, sex: 'H', skin: '#C98B62', hair: '#3A2A1E', gown: '#5BA7E0' },
      intro: 'Prednisona 20 mg por 6 meses por asma; la suspendió de golpe hace una semana. Neumonía con choque.',
      extra: { label: 'Na', unit: 'mEq/L' },
      start: { FC: 124, PAS: 70, PAD: 40, SpO2: 92, FR: 26, X: 126 },
      nodes: [
        { tag: 'Llegada', ecg: 'tachy',
          text: 'Recibió 3 L de cristaloide y norepinefrina a dosis alta. Glucosa 58.',
          q: '¿Qué falta?',
          A: { t: 'Hidrocortisona 100 mg IV en bolo, ya', ok: true, res: 'En 2 h la PA sube a 98/58 y se baja la norepinefrina.', vit: { PAS: 98, PAD: 58, FC: 108 } },
          B: { t: 'Pedir cortisol y ACTH y esperar el resultado', ok: false, res: 'Hace paro cardiaco antes de que llegue el resultado.', vit: { PAS: 54, PAD: 30 } },
          why: 'Sospecha de crisis suprarrenal: hidrocortisona sin esperar resultados.' },
        { tag: 'Hora 6', ecg: 'normal', vit: { FC: 102 },
          text: 'Na 126. Alerta, sin síntomas neurológicos.',
          q: '¿Cómo corriges el sodio?',
          A: { t: 'Salina 3% en infusión para normalizar hoy', ok: false, res: 'El sodio sube 14 mEq en 24 h: riesgo de desmielinización.', vit: { X: 140 } },
          B: { t: 'Salina 0.9% y la hidrocortisona; vigilar que no suba más de 8 en 24 h', ok: true, res: 'Sube 6 mEq en 24 h.', vit: { X: 132 } },
          why: 'Sin síntomas graves, se corrige lento; la hidrocortisona quita el estímulo de ADH.' },
        { tag: 'Día 3', ecg: 'normal', vit: { FC: 88, PAS: 118, PAD: 72, SpO2: 96, FR: 18, X: 135 },
          text: 'Sin vasopresor. Neumonía mejorando.',
          q: '¿Cómo dejas el esteroide?',
          A: { t: 'Suspender la hidrocortisona hoy', ok: false, res: 'A los 3 días regresa con hipotensión y vómito.' },
          B: { t: 'Reducir poco a poco y luego esteroide oral con reducción lenta', ok: true, res: 'Pasa a hidrocortisona oral con plan de retiro.' },
          why: 'El eje está suprimido: el retiro es gradual.' },
        { tag: 'Al egreso', ecg: 'normal',
          text: 'Pregunta qué hacer si se enferma.',
          q: '¿Qué le indicas?',
          A: { t: 'Reglas de enfermedad: duplicar o triplicar con fiebre; inyectable si vomita; pulsera', ok: true, res: 'Se lleva las instrucciones por escrito.' },
          B: { t: 'Nada: en un mes ya no necesitará nada', ok: false, res: 'Una gastroenteritis en 3 semanas lo lleva de nuevo a crisis.' },
          why: 'Mientras el eje se recupera, en enfermedad necesita más cortisol.' }
      ] },
    { id: 'g-tiroides', topic: 'hipertiroidismo', subj: 'endo',
      title: 'Fiebre después de la cirugía', place: 'Terapia intensiva',
      patient: { name: 'Daniela', age: 29, sex: 'M', skin: '#E2B08A', hair: '#2A1A12', gown: '#F2A0B8' },
      intro: 'Graves; dejó el metimazol hace 2 meses. Hoy, tras una apendicectomía urgente: fiebre, agitación y palpitaciones.',
      extra: { label: 'T', unit: '°C' },
      start: { FC: 156, PAS: 142, PAD: 60, SpO2: 95, FR: 26, X: 40.1 },
      nodes: [
        { tag: 'Llegada', ecg: 'tachy',
          text: 'Delirio, diarrea, ictericia leve. Burch-Wartofsky 70.',
          q: '¿Qué es y qué das primero?',
          A: { t: 'Tormenta tiroidea: propranolol y PTU', ok: true, res: 'La FC baja a 124.', vit: { FC: 124 } },
          B: { t: 'Sepsis abdominal: solo antibiótico y líquidos', ok: false, res: 'La FC sube a 170 y aparece edema pulmonar.', vit: { FC: 170, SpO2: 88 } },
          why: 'Graves sin tratamiento + cirugía + fiebre, delirio y taquicardia: tormenta tiroidea.' },
        { tag: 'Hora 1', ecg: 'tachy',
          text: 'Ya recibió PTU hace una hora.',
          q: '¿Qué agregas ahora?',
          A: { t: 'Yoduro de potasio (Lugol) e hidrocortisona', ok: true, res: 'La T baja a 38.6 con medios físicos y paracetamol.', vit: { X: 38.6, FC: 112 } },
          B: { t: 'Aspirina para la fiebre', ok: false, res: 'La aspirina desplaza la hormona de sus proteínas y empeora la tirotoxicosis.', vit: { FC: 140 } },
          why: 'Yodo una hora después del antitiroideo; hidrocortisona; enfriar con paracetamol, no aspirina.' },
        { tag: 'Día 3', ecg: 'normal', vit: { FC: 92, PAS: 120, PAD: 70, X: 37.2 },
          text: 'Estable. Presenta fiebre de 38.5 y dolor de garganta.',
          q: '¿Qué haces?',
          A: { t: 'Biometría hemática urgente: puede ser agranulocitosis por PTU', ok: true, res: 'Neutrófilos 1800: no es agranulocitosis; faringitis viral.' },
          B: { t: 'Amoxicilina y seguir igual', ok: false, res: 'No buscaste la complicación más grave del antitiroideo.' },
          why: 'Fiebre y faringitis con antitiroideos: suspender y pedir BH.' },
        { tag: 'Al egreso', ecg: 'normal', vit: { FC: 80, PAS: 118, PAD: 72, SpO2: 98, FR: 16, X: 36.8 },
          text: 'Eutiroidea. No quiere más recaídas.',
          q: '¿Qué tratamiento definitivo le ofreces?',
          A: { t: 'Yodo radiactivo o tiroidectomía (oftalmopatía leve: prednisona si recibe yodo)', ok: true, res: 'Elige yodo radiactivo con prednisona profiláctica.' },
          B: { t: 'Nada: ya está bien', ok: false, res: 'Recae en 6 meses.' },
          why: 'Graves que recae: tratamiento definitivo.' }
      ] }
  ]
};
