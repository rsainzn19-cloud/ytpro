// Taller: algoritmos con casos y lectura de ECG (pestaña “Taller” de cada tema y Más → Taller).
// algos.<id>: { title, topics, start, nodes, cases }
//   nodo de decisión: { q, hint?, opts: [{ t, go }] } · hoja: { end, d }
//   caso: { t, data: [[dato, valor]], path: { nodo: índice de la opción correcta }, end: hoja, why?: { nodo: razonamiento } }
// ecg.<id>: { name, why, hl: [derivaciones a resaltar], topics } (la forma de onda se genera en app.js)
export default {
  algos: {
    anemia: {
      title: 'Anemia: del VCM al diagnóstico', topics: ['anemias', 'hemoliticas'], start: 'vcm',
      nodes: {
        vcm: { q: '¿Cómo es el VCM?', opts: [{ t: 'Menor de 80 fL: microcítica', go: 'micro' }, { t: '80 a 100 fL: normocítica', go: 'normo' }, { t: 'Mayor de 100 fL: macrocítica', go: 'macro' }] },
        micro: { q: 'Microcítica: ¿cómo está la ferritina?', hint: 'Ferritina menor de 30 ng/mL confirma ferropenia; con inflamación puede haber ferropenia hasta con ~100.', opts: [{ t: 'Baja (menor de 30)', go: 'ferro' }, { t: 'Normal o alta', go: 'micro2' }] },
        micro2: { q: 'Ferritina normal o alta: ¿qué más ves?', opts: [{ t: 'Inflamación crónica y saturación de transferrina baja', go: 'inflam' }, { t: 'Eritrocitos altos para la Hb (Mentzer menor de 13)', go: 'talas' }, { t: 'Sideroblastos en anillo; alcohol, plomo o isoniazida', go: 'sidero' }] },
        normo: { q: 'Normocítica: ¿cómo está el índice reticulocitario?', hint: 'IR de 2 o más: la médula responde (pérdida o destrucción). Menor de 2: no está produciendo.', opts: [{ t: '2 o más: la médula responde', go: 'regen' }, { t: 'Menor de 2: hipoproliferativa', go: 'hipo' }] },
        regen: { q: '¿Hay datos de hemólisis? (LDH alta, haptoglobina baja, bilirrubina indirecta alta)', opts: [{ t: 'Sí', go: 'hemol' }, { t: 'No: hubo sangrado', go: 'sangr' }] },
        hipo: { q: 'Hipoproliferativa: ¿cuál es el contexto?', opts: [{ t: 'ERC con TFG baja', go: 'epo' }, { t: 'Inflamación o infección crónica', go: 'inflam' }, { t: 'Otras citopenias o blastos en el frotis', go: 'medula' }] },
        macro: { q: 'Macrocítica: ¿el frotis es megaloblástico (neutrófilos hipersegmentados, macroovalocitos)?', opts: [{ t: 'Sí', go: 'mega' }, { t: 'No', go: 'nomega' }] },
        mega: { q: 'Megaloblástica: ¿qué vitamina falta?', hint: 'El ácido metilmalónico sube solo en el déficit de B12; la homocisteína sube en ambos.', opts: [{ t: 'B12 baja o metilmalónico alto, con neuropatía', go: 'b12' }, { t: 'Folato bajo con metilmalónico normal', go: 'folato' }] },
        ferro: { end: 'Anemia ferropénica', d: 'Hierro oral (en días alternos se absorbe mejor) y busca la causa: menstruación abundante; en hombres y en mujeres posmenopáusicas, endoscopia y colonoscopia.' },
        inflam: { end: 'Anemia de la inflamación', d: 'La hepcidina atrapa el hierro: ferritina normal o alta con saturación baja. Se trata la enfermedad de base.' },
        talas: { end: 'Rasgo talasémico', d: 'Microcitosis marcada con eritrocitos altos y ferritina normal. Confirma con electroforesis de hemoglobina (HbA2 alta en beta). No des hierro.' },
        sidero: { end: 'Anemia sideroblástica', d: 'Falla en la síntesis del hemo, con sideroblastos en anillo en la médula. Causas: alcohol, plomo, isoniazida (déficit de B6) y mielodisplasia.' },
        hemol: { end: 'Anemia hemolítica', d: 'Siguiente paso: Coombs directo (positivo = autoinmune) y frotis (esferocitos, esquistocitos).' },
        sangr: { end: 'Pérdida aguda de sangre', d: 'Reticulocitos altos sin hemólisis: busca dónde sangra. En las primeras horas el hematocrito todavía no baja.' },
        epo: { end: 'Anemia por déficit de eritropoyetina (ERC)', d: 'Primero repón hierro (en ERC, si la saturación es de 30% o menos y la ferritina de 500 o menos); después eritropoyetina si la Hb sigue menor de 10, sin pasar de 11.5.' },
        medula: { end: 'Falla o infiltración de la médula', d: 'Bicitopenia, pancitopenia o blastos: aspirado y biopsia de médula ósea (leucemia, mielodisplasia, aplasia).' },
        b12: { end: 'Déficit de vitamina B12', d: 'La causa más común es la anemia perniciosa (anti-factor intrínseco); también metformina, gastrectomía y dieta vegana. B12 intramuscular; si das solo folato, la neuropatía empeora.' },
        folato: { end: 'Déficit de folato', d: 'Alcohol, desnutrición, embarazo o metotrexato. Ácido fólico oral, después de descartar déficit de B12.' },
        nomega: { end: 'Macrocitosis no megaloblástica', d: 'Alcohol, hepatopatía, hipotiroidismo, reticulocitosis, mielodisplasia o fármacos (hidroxiurea, zidovudina).' }
      },
      cases: [
        { t: 'Mujer de 34 años con menstruaciones abundantes, cansancio y uñas quebradizas.', data: [['Hb', '9.1 g/dL'], ['VCM', '68 fL'], ['Ferritina', '6 ng/mL'], ['Índice reticulocitario', '0.7']], path: { vcm: 0, micro: 0 }, end: 'ferro', why: { micro: 'Ferritina de 6: los depósitos están vacíos.' } },
        { t: 'Hombre de 58 años con artritis reumatoide activa.', data: [['Hb', '10.6 g/dL'], ['VCM', '78 fL'], ['Ferritina', '260 ng/mL'], ['Saturación de transferrina', '12%'], ['PCR', 'Alta']], path: { vcm: 0, micro: 1, micro2: 0 }, end: 'inflam', why: { micro2: 'Ferritina alta con saturación baja y PCR alta: el hierro está atrapado, no ausente.' } },
        { t: 'Hombre de 25 años, asintomático, en un chequeo.', data: [['Hb', '11.8 g/dL'], ['VCM', '64 fL'], ['Eritrocitos', '6.1 millones/µL'], ['Ferritina', '95 ng/mL']], path: { vcm: 0, micro: 1, micro2: 1 }, end: 'talas', why: { micro2: 'Mentzer = 64 ÷ 6.1 ≈ 10.5 (menor de 13).' } },
        { t: 'Mujer de 62 años con hipotiroidismo autoinmune, parestesias en los pies y Romberg positivo.', data: [['Hb', '8.2 g/dL'], ['VCM', '118 fL'], ['Frotis', 'Neutrófilos hipersegmentados'], ['B12', '110 pg/mL']], path: { vcm: 2, macro: 0, mega: 0 }, end: 'b12', why: { mega: 'B12 baja con neuropatía (cordones posteriores).' } },
        { t: 'Mujer de 28 años con ictericia y orina oscura después de una infección.', data: [['Hb', '8.4 g/dL'], ['VCM', '94 fL'], ['Índice reticulocitario', '4.2'], ['LDH', '820 U/L'], ['Haptoglobina', 'Indetectable'], ['Bilirrubina indirecta', '3.1 mg/dL']], path: { vcm: 1, normo: 0, regen: 0 }, end: 'hemol' },
        { t: 'Hombre de 66 años con ERC G4 por diabetes.', data: [['Hb', '9.0 g/dL'], ['VCM', '88 fL'], ['Índice reticulocitario', '0.8'], ['Ferritina', '320 ng/mL'], ['Saturación', '28%'], ['TFG', '22 mL/min']], path: { vcm: 1, normo: 1, hipo: 0 }, end: 'epo' },
        { t: 'Hombre de 45 años que toma 8 cervezas al día.', data: [['Hb', '12.1 g/dL'], ['VCM', '106 fL'], ['Frotis', 'Sin neutrófilos hipersegmentados'], ['B12 y folato', 'Normales'], ['GGT', 'Alta']], path: { vcm: 2, macro: 1 }, end: 'nomega' }
      ]
    },
    reperfusion: {
      title: 'Dolor torácico: ¿cómo reperfundir?', topics: ['sca'], start: 'ecg',
      nodes: {
        ecg: { q: 'ECG en los primeros 10 minutos: ¿qué muestra?', opts: [{ t: 'Elevación persistente del ST (o un equivalente)', go: 'stemi' }, { t: 'Sin elevación del ST', go: 'nste' }] },
        stemi: { q: 'IAMCEST: ¿cuánto tiempo lleva con síntomas?', opts: [{ t: 'Menos de 12 horas', go: 'icp' }, { t: '12 a 48 h, o más si sigue con dolor, inestable o con arritmias', go: 'icpP' }, { t: 'Más de 48 h y ya sin síntomas', go: 'noRep' }] },
        icp: { q: '¿Se puede hacer angioplastia primaria en 120 minutos o menos desde el diagnóstico?', opts: [{ t: 'Sí', go: 'icpP' }, { t: 'No', go: 'fibri' }] },
        fibri: { q: '¿Tiene alguna contraindicación absoluta para fibrinólisis?', hint: 'Absolutas: hemorragia intracraneal previa, EVC isquémico en 6 meses, tumor o malformación del SNC, trauma o cirugía mayor en el último mes, sangrado activo, disección aórtica.', opts: [{ t: 'No', go: 'lisis' }, { t: 'Sí', go: 'trasl' }] },
        nste: { q: 'Troponina de alta sensibilidad (algoritmo 0/1 h):', opts: [{ t: 'Sube con curva', go: 'iamsest' }, { t: 'Normal y sin cambios', go: 'ai' }] },
        iamsest: { q: 'IAMSEST: ¿tiene datos de muy alto riesgo? (choque, inestabilidad eléctrica, dolor refractario, insuficiencia cardiaca aguda)', opts: [{ t: 'Sí', go: 'inm' }, { t: 'No', go: 'temp' }] },
        icpP: { end: 'Angioplastia primaria', d: 'La reperfusión de elección: doble antiagregación (aspirina más inhibidor de P2Y12) y anticoagulación en la sala.' },
        lisis: { end: 'Fibrinólisis en 10 minutos o menos, y traslado', d: 'Tenecteplasa con aspirina, clopidogrel y enoxaparina. Coronariografía en 2 a 24 h; si a los 60 a 90 minutos el ST no baja al menos 50%, angioplastia de rescate.' },
        trasl: { end: 'Traslado para angioplastia, aunque tarde', d: 'Sin fibrinólisis posible, la angioplastia sigue siendo la reperfusión, aun fuera de los 120 minutos.' },
        noRep: { end: 'Sin reperfusión de rutina', d: 'Más de 48 h y asintomático: no se abre de rutina la arteria ocluida. Tratamiento médico y búsqueda de isquemia residual.' },
        inm: { end: 'Cateterismo inmediato (menos de 2 h)', d: 'Muy alto riesgo: estrategia invasiva inmediata, igual que un IAMCEST.' },
        temp: { end: 'Cateterismo temprano (menos de 24 h)', d: 'Un IAMSEST confirmado es de alto riesgo: estrategia invasiva temprana, con doble antiagregación y anticoagulación.' },
        ai: { end: 'Angina inestable o dolor no isquémico', d: 'Con troponina normal, estratifica (prueba de isquemia o angiotomografía coronaria según el riesgo) y busca otras causas.' }
      },
      cases: [
        { t: 'Hombre de 58 años con dolor opresivo de 2 h. Hay sala de hemodinamia a 40 minutos.', data: [['ECG', 'ST elevado en DII, DIII y aVF'], ['PA', '128/80']], path: { ecg: 0, stemi: 0, icp: 0 }, end: 'icpP' },
        { t: 'Mujer de 66 años con dolor de 3 h en un hospital rural; el traslado a hemodinamia tarda 3 h. Sin antecedentes de sangrado.', data: [['ECG', 'ST elevado de V1 a V4'], ['PA', '138/86']], path: { ecg: 0, stemi: 0, icp: 1, fibri: 0 }, end: 'lisis', why: { icp: '3 h de traslado rebasa los 120 minutos.' } },
        { t: 'Hombre de 70 años con dolor de 5 h; el traslado a hemodinamia tarda 150 minutos. Hace un año tuvo una hemorragia intracraneal.', data: [['ECG', 'ST elevado de V2 a V5']], path: { ecg: 0, stemi: 0, icp: 1, fibri: 1 }, end: 'trasl', why: { fibri: 'Una hemorragia intracraneal previa, en cualquier momento, es contraindicación absoluta.' } },
        { t: 'Hombre de 62 años, diabético, con dolor que ya cedió; está estable.', data: [['ECG', 'Infradesnivel del ST de V4 a V6'], ['Troponina 0 h', '28 ng/L'], ['Troponina 1 h', '64 ng/L']], path: { ecg: 1, nste: 0, iamsest: 1 }, end: 'temp' },
        { t: 'Mujer de 74 años con dolor torácico, PA 78/50 y estertores en ambos campos.', data: [['ECG', 'Infradesnivel difuso del ST'], ['Troponina', 'En ascenso']], path: { ecg: 1, nste: 0, iamsest: 0 }, end: 'inm', why: { iamsest: 'Choque cardiogénico = muy alto riesgo.' } },
        { t: 'Hombre de 55 años con 30 h de dolor que no se le quita.', data: [['ECG', 'ST elevado de V2 a V5']], path: { ecg: 0, stemi: 1 }, end: 'icpP', why: { stemi: 'Entre 12 y 48 h, y con dolor persistente: angioplastia primaria.' } }
      ]
    },
    lra: {
      title: 'Lesión renal aguda: ¿pre, intra o posrenal?', topics: ['lra'], start: 'obst',
      nodes: {
        obst: { q: 'Primero descarta obstrucción: ¿el ultrasonido o la sonda muestran hidronefrosis o globo vesical?', opts: [{ t: 'Sí', go: 'posr' }, { t: 'No', go: 'sed' }] },
        sed: { q: '¿Qué muestra el sedimento urinario?', opts: [{ t: 'Blando: cilindros hialinos o nada', go: 'diur' }, { t: 'Cilindros granulosos “café lodoso”', go: 'nta' }, { t: 'Eritrocitos dismórficos y cilindros eritrocitarios', go: 'gn' }, { t: 'Cilindros leucocitarios y eosinofiluria', go: 'nia' }] },
        diur: { q: 'Sedimento blando: ¿recibió diuréticos?', opts: [{ t: 'No: usa la FENa', go: 'fena' }, { t: 'Sí: usa la FEUrea', go: 'feu' }] },
        fena: { q: '¿Cuánto da la FENa?', opts: [{ t: 'Menor de 1%', go: 'prer' }, { t: 'Mayor de 2%', go: 'nta' }] },
        feu: { q: '¿Cuánto da la FEUrea?', opts: [{ t: 'Menor de 35%', go: 'prer' }, { t: 'Mayor de 50%', go: 'nta' }] },
        posr: { end: 'LRA posrenal', d: 'Sonda vesical o derivación (nefrostomía) según dónde esté la obstrucción; vigila la poliuria posobstructiva.' },
        prer: { end: 'LRA prerrenal', d: 'El riñón está sano pero mal perfundido: repón volumen y suspende AINE, IECA o ARA II y diuréticos. Debe mejorar en 24 a 72 h.' },
        nta: { end: 'Necrosis tubular aguda', d: 'Isquemia prolongada, sepsis, contraste o nefrotóxicos (aminoglucósidos). Soporte, retira nefrotóxicos y diálisis si hay indicación urgente.' },
        gn: { end: 'Glomerulonefritis', d: 'Síndrome nefrítico: complemento, ANCA, anti-MBG y ASO; biopsia renal si no hay contraindicación.' },
        nia: { end: 'Nefritis intersticial aguda', d: 'Casi siempre por un fármaco (betalactámicos, IBP, AINE). Retíralo; esteroide si no mejora.' }
      },
      cases: [
        { t: 'Hombre de 74 años con prostatismo, dolor suprapúbico y sin orinar desde ayer.', data: [['Creatinina', '3.2 mg/dL (basal 1.0)'], ['Ultrasonido', 'Hidronefrosis bilateral y globo vesical']], path: { obst: 0 }, end: 'posr' },
        { t: 'Mujer de 82 años con diarrea de 4 días y mareo al ponerse de pie. No toma diuréticos.', data: [['Creatinina', '2.4 mg/dL (basal 0.9)'], ['Sedimento', 'Cilindros hialinos'], ['FENa', '0.4%'], ['Na urinario', '12 mEq/L']], path: { obst: 1, sed: 0, diur: 0, fena: 0 }, end: 'prer' },
        { t: 'Hombre de 61 años en choque séptico desde hace 2 días.', data: [['Creatinina', '3.8 mg/dL'], ['Sedimento', 'Cilindros granulosos pigmentados'], ['FENa', '3.1%']], path: { obst: 1, sed: 1 }, end: 'nta' },
        { t: 'Mujer de 45 años que toma amoxicilina desde hace 10 días; ahora tiene exantema y fiebre.', data: [['Creatinina', '2.1 mg/dL'], ['Biometría', 'Eosinofilia'], ['Sedimento', 'Cilindros leucocitarios, eosinofiluria']], path: { obst: 1, sed: 3 }, end: 'nia' },
        { t: 'Hombre de 70 años con insuficiencia cardiaca que toma furosemida; lleva 3 días con vómito.', data: [['Creatinina', '2.0 mg/dL (basal 1.1)'], ['Sedimento', 'Blando'], ['FENa', '1.8%'], ['FEUrea', '24%']], path: { obst: 1, sed: 0, diur: 1, feu: 0 }, end: 'prer', why: { diur: 'Con furosemida la FENa sale falsamente alta: usa la FEUrea.' } },
        { t: 'Hombre de 22 años con hemoptisis y orina oscura.', data: [['Creatinina', '3.0 mg/dL y subiendo'], ['Sedimento', 'Eritrocitos dismórficos y cilindros eritrocitarios']], path: { obst: 1, sed: 2 }, end: 'gn' }
      ]
    },
    glomerulo: {
      title: 'Glomerulopatías: síndrome y complemento', topics: ['glomerulo'], start: 'sind',
      nodes: {
        sind: { q: '¿Síndrome nefrótico o nefrítico?', opts: [{ t: 'Nefrótico: proteinuria mayor de 3.5 g/día, albúmina baja, edema, lípidos altos', go: 'nfro' }, { t: 'Nefrítico: hematuria con cilindros eritrocitarios, HTA y edema', go: 'nfri' }] },
        nfro: { q: 'Nefrótico: ¿cuál es el contexto?', opts: [{ t: 'Niño', go: 'cm' }, { t: 'Adulto con anti-PLA2R positivo', go: 'memb' }, { t: 'Adulto con obesidad, VIH o ascendencia africana', go: 'gefs' }, { t: 'Diabetes de años con retinopatía', go: 'dm' }] },
        nfri: { q: 'Nefrítico: ¿cómo está el C3?', opts: [{ t: 'Bajo', go: 'c3b' }, { t: 'Normal', go: 'c3n' }] },
        c3b: { q: 'C3 bajo: ¿qué más tiene?', opts: [{ t: 'Faringitis 1 a 3 semanas antes (o impétigo 3 a 6), ASO alto', go: 'pse' }, { t: 'Lupus: anti-DNA positivo, C3 y C4 bajos', go: 'lup' }, { t: 'Hepatitis C y crioglobulinas', go: 'mp' }] },
        c3n: { q: 'C3 normal: ¿qué más tiene?', opts: [{ t: 'Hematuria 1 a 2 días después de una infección respiratoria', go: 'iga' }, { t: 'ANCA positivos', go: 'anca' }, { t: 'Anti-MBG positivos y hemoptisis', go: 'mbg' }] },
        cm: { end: 'Enfermedad de cambios mínimos', d: 'La causa más común en niños: se da prednisona sin biopsia, y se biopsia solo si no responde.' },
        memb: { end: 'Nefropatía membranosa', d: 'Primaria por anti-PLA2R. En un adulto mayor con anti-PLA2R negativo, busca cáncer, hepatitis B, lupus y fármacos.' },
        gefs: { end: 'Glomeruloesclerosis focal y segmentaria', d: 'Causa frecuente de nefrótico en adultos; se asocia a obesidad, VIH y variantes de APOL1. Se confirma con biopsia.' },
        dm: { end: 'Enfermedad renal diabética', d: 'No se biopsia si el curso es típico (años de diabetes, retinopatía). IECA o ARA II, iSGLT2 y finerenona.' },
        pse: { end: 'Glomerulonefritis posestreptocócica', d: 'Niño con edema, HTA y orina oscura después de la infección. Manejo de soporte: diurético y control de la presión.' },
        lup: { end: 'Nefritis lúpica', d: 'Biopsia para clasificarla (las clases III, IV y V cambian el tratamiento): micofenolato o ciclofosfamida con esteroide.' },
        mp: { end: 'Glomerulonefritis membranoproliferativa por crioglobulinemia', d: 'Se asocia a hepatitis C: púrpura, artralgias y C4 muy bajo. Trata el virus.' },
        iga: { end: 'Nefropatía por IgA', d: 'La glomerulonefritis primaria más común del mundo: hematuria a los 1 a 2 días de la infección (no semanas después). IECA o ARA II si hay proteinuria.' },
        anca: { end: 'Vasculitis pauciinmune (ANCA)', d: 'Glomerulonefritis rápidamente progresiva sin depósitos. Esteroide con rituximab o ciclofosfamida.' },
        mbg: { end: 'Enfermedad anti-MBG (Goodpasture)', d: 'Depósito lineal de IgG. Urgencia: plasmaféresis, esteroide y ciclofosfamida.' }
      },
      cases: [
        { t: 'Niño de 5 años con edema en párpados y piernas.', data: [['Proteinuria', '4+'], ['Albúmina', '1.8 g/dL'], ['Colesterol', '380 mg/dL'], ['Sedimento', 'Sin eritrocitos']], path: { sind: 0, nfro: 0 }, end: 'cm' },
        { t: 'Niño de 8 años con orina color refresco de cola, 2 semanas después de una faringitis.', data: [['PA', '140/90'], ['Sedimento', 'Cilindros eritrocitarios'], ['C3', 'Bajo'], ['ASO', 'Alto']], path: { sind: 1, nfri: 0, c3b: 0 }, end: 'pse' },
        { t: 'Hombre de 22 años con hematuria macroscópica un día después de una gripa.', data: [['C3', 'Normal'], ['Sedimento', 'Eritrocitos dismórficos'], ['IgA sérica', 'Alta']], path: { sind: 1, nfri: 1, c3n: 0 }, end: 'iga', why: { c3n: 'Hematuria al mismo tiempo que la infección: IgA (la posestreptocócica tarda semanas).' } },
        { t: 'Mujer de 25 años con artritis, eritema malar y orina espumosa con sangre.', data: [['Sedimento', 'Cilindros eritrocitarios'], ['Proteinuria', '2 g/día'], ['C3 y C4', 'Bajos'], ['Anti-DNA', 'Positivo']], path: { sind: 1, nfri: 0, c3b: 1 }, end: 'lup' },
        { t: 'Hombre de 60 años con edema que avanza desde hace 2 meses.', data: [['Proteinuria', '8 g/día'], ['Albúmina', '2.0 g/dL'], ['Anti-PLA2R', 'Positivo'], ['Sedimento', 'Sin cilindros eritrocitarios']], path: { sind: 0, nfro: 1 }, end: 'memb' },
        { t: 'Hombre de 30 años con hemoptisis y creatinina que sube día con día.', data: [['Sedimento', 'Cilindros eritrocitarios'], ['C3', 'Normal'], ['Anti-MBG', 'Positivo']], path: { sind: 1, nfri: 1, c3n: 2 }, end: 'mbg' },
        { t: 'Mujer de 65 años con sinusitis crónica, nódulos pulmonares y creatinina en ascenso.', data: [['Sedimento', 'Cilindros eritrocitarios'], ['C3', 'Normal'], ['c-ANCA (PR3)', 'Positivo']], path: { sind: 1, nfri: 1, c3n: 1 }, end: 'anca' }
      ]
    },
    tep: {
      title: 'Sospecha de TEP: del choque al dímero D', topics: ['tep'], start: 'hemo',
      nodes: {
        hemo: { q: '¿Tiene choque o hipotensión persistente?', opts: [{ t: 'Sí: sospecha de TEP de alto riesgo', go: 'alto' }, { t: 'No', go: 'wells' }] },
        alto: { q: 'Alto riesgo: ¿cómo lo confirmas?', opts: [{ t: 'Angio-TC inmediata, si está disponible y lo puedes mover', go: 'trom' }, { t: 'Ecocardiograma a la cabecera: VD dilatado', go: 'trom' }] },
        wells: { q: 'Probabilidad clínica (Wells):', hint: 'Signos de TVP 3 · TEP es el diagnóstico más probable 3 · FC mayor de 100: 1.5 · inmovilización o cirugía reciente 1.5 · TEP o TVP previa 1.5 · hemoptisis 1 · cáncer 1.', opts: [{ t: 'Improbable (4 o menos)', go: 'dimero' }, { t: 'Probable (más de 4)', go: 'angio' }] },
        dimero: { q: 'Dímero D (en mayores de 50, el corte es edad × 10):', opts: [{ t: 'Negativo', go: 'desc' }, { t: 'Positivo', go: 'angio' }] },
        angio: { q: '¿Qué muestra la angio-TC pulmonar?', opts: [{ t: 'Confirma la TEP', go: 'estrat' }, { t: 'Negativa', go: 'desc' }] },
        estrat: { q: 'TEP sin choque: estratifica (PESI, VD por imagen, troponina).', opts: [{ t: 'PESI bajo, VD normal y troponina normal', go: 'bajo' }, { t: 'VD dilatado y troponina alta', go: 'intalto' }] },
        trom: { end: 'TEP de alto riesgo: trombólisis sistémica', d: 'Alteplasa además de heparina no fraccionada. Si está contraindicada, embolectomía quirúrgica o por catéter.' },
        desc: { end: 'TEP descartada', d: 'Probabilidad improbable con dímero D negativo, o angio-TC negativa: busca otra causa.' },
        bajo: { end: 'TEP de bajo riesgo', d: 'Anticoagulante oral directo (apixabán o rivaroxabán); se puede manejar en casa si las condiciones lo permiten.' },
        intalto: { end: 'TEP de riesgo intermedio-alto', d: 'Hospitaliza con anticoagulación y monitoreo; trombólisis de rescate solo si se descompensa.' }
      },
      cases: [
        { t: 'Mujer de 34 años con disnea leve; toma anticonceptivos. Sin signos de TVP y otro diagnóstico es más probable.', data: [['FC', '92 lpm'], ['SpO2', '97%'], ['Wells', '0'], ['Dímero D', 'Negativo']], path: { hemo: 1, wells: 0, dimero: 0 }, end: 'desc' },
        { t: 'Hombre de 58 años con disnea súbita 5 días después de una cirugía de cadera, con la pierna derecha edematizada.', data: [['FC', '112 lpm'], ['PA', '124/78'], ['Wells', '9'], ['Angio-TC', 'Trombo en la arteria pulmonar derecha'], ['VD/VI', '1.3'], ['Troponina', 'Alta']], path: { hemo: 1, wells: 1, angio: 0, estrat: 1 }, end: 'intalto' },
        { t: 'Mujer de 70 años con disnea súbita, PA 75/40 e ingurgitación yugular. No se puede llevar a tomografía.', data: [['Eco a la cabecera', 'VD muy dilatado, septum desviado']], path: { hemo: 0, alto: 1 }, end: 'trom' },
        { t: 'Hombre de 45 años con dolor pleurítico después de un vuelo largo.', data: [['FC', '104 lpm'], ['Wells', '6'], ['Angio-TC', 'Trombos segmentarios'], ['PESI', 'Clase I'], ['VD y troponina', 'Normales']], path: { hemo: 1, wells: 1, angio: 0, estrat: 0 }, end: 'bajo' }
      ]
    },
    articular: {
      title: 'Dolor articular: punción y patrón', topics: ['abordaje', 'gota', 'ar', 'oa', 'espondilo'], start: 'num',
      nodes: {
        num: { q: '¿Cuántas articulaciones?', opts: [{ t: 'Una, de inicio agudo (monoartritis)', go: 'liq' }, { t: 'Varias (oligo o poliartritis)', go: 'patron' }] },
        liq: { q: 'Monoartritis aguda: punción articular. ¿Qué muestra el líquido?', hint: 'Primero descarta infección: es la que destruye la articulación en días.', opts: [{ t: 'Más de 50,000 leucocitos, más de 90% neutrófilos, Gram con cocos', go: 'sept' }, { t: 'Cristales en aguja con birrefringencia negativa', go: 'gota' }, { t: 'Cristales romboidales con birrefringencia positiva débil', go: 'cppd' }, { t: 'Menos de 2,000 leucocitos: no inflamatorio', go: 'mec' }] },
        patron: { q: '¿Qué patrón tiene?', opts: [{ t: 'MCF e IFP simétricas, rigidez matutina de más de 1 h', go: 'ar' }, { t: 'IFD y rodillas, nódulos de Heberden, rigidez de menos de 30 min', go: 'oa' }, { t: 'Lumbalgia inflamatoria antes de los 45 años, entesitis, uveítis', go: 'eas' }, { t: 'Psoriasis, dactilitis, afecta las IFD', go: 'aps' }] },
        sept: { end: 'Artritis séptica', d: 'Urgencia: cultivo, antibiótico intravenoso y drenaje. S. aureus es el más común; en adultos jóvenes sexualmente activos, gonococo.' },
        gota: { end: 'Gota', d: 'Ataque: colchicina, AINE o esteroide. Después, alopurinol con meta de ácido úrico menor de 6 mg/dL.' },
        cppd: { end: 'Pseudogota (cristales de pirofosfato de calcio)', d: 'Rodilla o muñeca de adulto mayor, con condrocalcinosis en la radiografía. Busca hiperparatiroidismo, hemocromatosis e hipomagnesemia.' },
        mec: { end: 'Derrame mecánico (no inflamatorio)', d: 'Osteoartritis, trauma o lesión de menisco. Analgesia, ejercicio y control de peso.' },
        ar: { end: 'Artritis reumatoide', d: 'Factor reumatoide y anti-CCP, criterios ACR/EULAR 2010. Metotrexato temprano: hay una ventana de oportunidad.' },
        oa: { end: 'Osteoartritis', d: 'Dolor mecánico que empeora con el uso; radiografía con osteofitos y pinzamiento asimétrico. Ejercicio, peso y AINE tópico.' },
        eas: { end: 'Espondiloartritis axial', d: 'HLA-B27 y resonancia de sacroilíacas (criterios ASAS). AINE de primera línea; si fallan, anti-TNF o anti-IL-17.' },
        aps: { end: 'Artritis psoriásica', d: 'Puede aparecer antes que la psoriasis. Factor reumatoide negativo; en la radiografía, “lápiz en copa”. Metotrexato o biológicos.' }
      },
      cases: [
        { t: 'Hombre de 52 años con dolor intenso en el primer dedo del pie al despertar, después de una cena con cerveza.', data: [['Líquido sinovial', '22,000 leucocitos'], ['Cristales', 'En aguja, birrefringencia negativa']], path: { num: 0, liq: 1 }, end: 'gota' },
        { t: 'Mujer de 70 años con la rodilla caliente; la radiografía muestra condrocalcinosis.', data: [['Líquido sinovial', '18,000 leucocitos'], ['Cristales', 'Romboidales, birrefringencia positiva débil']], path: { num: 0, liq: 2 }, end: 'cppd' },
        { t: 'Hombre de 68 años, diabético, con la rodilla roja y fiebre de 38.9 °C.', data: [['Líquido sinovial', '85,000 leucocitos, 95% neutrófilos'], ['Gram', 'Cocos grampositivos en racimos']], path: { num: 0, liq: 0 }, end: 'sept' },
        { t: 'Mujer de 42 años con dolor en ambas manos y rigidez matutina de 2 horas desde hace 3 meses.', data: [['Articulaciones', 'MCF e IFP de ambas manos'], ['Factor reumatoide', 'Positivo'], ['Anti-CCP', 'Positivo']], path: { num: 1, patron: 0 }, end: 'ar' },
        { t: 'Hombre de 26 años con lumbalgia que mejora con el ejercicio y lo despierta de madrugada; tuvo uveítis.', data: [['HLA-B27', 'Positivo'], ['Resonancia', 'Sacroilitis bilateral']], path: { num: 1, patron: 2 }, end: 'eas' },
        { t: 'Mujer de 64 años con dolor en las manos al final del día y nódulos duros en las IFD.', data: [['Rigidez matutina', '10 minutos'], ['VSG', 'Normal']], path: { num: 1, patron: 1 }, end: 'oa' }
      ]
    },
    diarrea: {
      title: 'Diarrea: aguda, crónica y brecha osmolar', topics: ['diarrea', 'sii'], start: 'dur',
      nodes: {
        dur: { q: '¿Cuánto tiempo lleva?', opts: [{ t: 'Menos de 14 días: aguda', go: 'agu' }, { t: 'Más de 4 semanas: crónica', go: 'cron' }] },
        agu: { q: 'Aguda: ¿tiene datos de alarma? (sangre, fiebre alta, deshidratación grave, más de 7 días, inmunosupresión, adulto mayor)', opts: [{ t: 'No', go: 'autolim' }, { t: 'Sí', go: 'estud' }] },
        cron: { q: 'Crónica: ¿qué predomina?', opts: [{ t: 'Esteatorrea, pérdida de peso y ferropenia', go: 'malab' }, { t: 'Sangre y moco, calprotectina alta', go: 'eii' }, { t: 'Dolor que mejora al evacuar, sin datos de alarma', go: 'sii' }, { t: 'Acuosa: calcula la brecha osmolar fecal', go: 'gap' }] },
        gap: { q: 'Brecha osmolar fecal = 290 − 2 × (Na + K fecales):', opts: [{ t: 'Mayor de 125: osmótica', go: 'osm' }, { t: 'Menor de 50: secretora', go: 'secr' }] },
        autolim: { end: 'Diarrea aguda sin datos de alarma', d: 'Casi siempre viral: hidratación oral, sin coprocultivo ni antibiótico.' },
        estud: { end: 'Diarrea aguda con datos de alarma', d: 'Coprocultivo (y C. difficile si recibió antibióticos) e hidratación; antibiótico empírico solo en casos graves o disentería con fiebre.' },
        malab: { end: 'Malabsorción: descarta celiaquía primero', d: 'Anti-transglutaminasa IgA con IgA total, sin quitar el gluten; se confirma con biopsia duodenal (atrofia de vellosidades).' },
        eii: { end: 'Diarrea inflamatoria: enfermedad inflamatoria intestinal', d: 'Colonoscopia con biopsias: colitis ulcerosa (continua desde el recto) o Crohn (en parches, transmural, íleon).' },
        sii: { end: 'Síndrome de intestino irritable', d: 'Criterios de Roma IV sin datos de alarma; estudios mínimos (biometría, PCR, celiaquía). Dieta baja en FODMAP.' },
        osm: { end: 'Diarrea osmótica', d: 'Lactosa, laxantes osmóticos (magnesio) o sorbitol. Mejora con el ayuno.' },
        secr: { end: 'Diarrea secretora', d: 'No mejora con el ayuno: toxinas, tumores neuroendocrinos (VIPoma, carcinoide), ácidos biliares o laxantes estimulantes.' }
      },
      cases: [
        { t: 'Hombre de 30 años con diarrea acuosa de 2 días, sin fiebre ni sangre; tolera la vía oral.', data: [['FC', '84 lpm'], ['Mucosas', 'Húmedas']], path: { dur: 0, agu: 0 }, end: 'autolim' },
        { t: 'Mujer de 72 años con diarrea con sangre de 3 días y fiebre de 39 °C.', data: [['FC', '108 lpm'], ['Creatinina', '1.6 mg/dL']], path: { dur: 0, agu: 1 }, end: 'estud' },
        { t: 'Mujer de 27 años con 6 meses de evacuaciones grasosas, pérdida de 5 kg y ferropenia.', data: [['Anti-transglutaminasa IgA', 'Muy alta'], ['IgA total', 'Normal']], path: { dur: 1, cron: 0 }, end: 'malab' },
        { t: 'Hombre de 24 años con diarrea con sangre y moco desde hace 2 meses.', data: [['Calprotectina fecal', '900 µg/g'], ['Hb', '11.2 g/dL']], path: { dur: 1, cron: 1 }, end: 'eii' },
        { t: 'Mujer de 40 años con diarrea acuosa de 2 meses que mejora en ayuno; toma un suplemento de magnesio.', data: [['Na fecal', '20 mEq/L'], ['K fecal', '15 mEq/L'], ['Brecha', '290 − 2 × 35 = 220']], path: { dur: 1, cron: 3, gap: 0 }, end: 'osm' },
        { t: 'Hombre de 50 años con diarrea acuosa de 3 meses que no cede con el ayuno, y rubor facial.', data: [['Na fecal', '100 mEq/L'], ['K fecal', '40 mEq/L'], ['Brecha', '290 − 2 × 140 = 10']], path: { dur: 1, cron: 3, gap: 1 }, end: 'secr' },
        { t: 'Mujer de 25 años con dolor abdominal que mejora al evacuar; alterna diarrea y estreñimiento, sin datos de alarma.', data: [['Biometría y PCR', 'Normales'], ['Anti-transglutaminasa', 'Negativa']], path: { dur: 1, cron: 2 }, end: 'sii' }
      ]
    },
    sangrado: {
      title: 'Paciente con sangrado: plaquetas, TP y TTPa', topics: ['sangrado'], start: 'plq',
      nodes: {
        plq: { q: '¿Cuántas plaquetas tiene?', hint: 'Antes de alarmarte, descarta pseudotrombocitopenia por EDTA: cúmulos en el frotis; repite con citrato.', opts: [{ t: 'Bajas (menos de 150,000)', go: 'tromb' }, { t: 'Normales', go: 'coag' }] },
        tromb: { q: 'Trombocitopenia: ¿qué más tiene?', opts: [{ t: 'Solo plaquetas bajas, frotis normal, por lo demás sano', go: 'pti' }, { t: 'Esquistocitos con anemia hemolítica', go: 'mat' }, { t: 'Inició heparina hace 5 a 10 días', go: 'hit' }, { t: 'TP y TTPa largos, fibrinógeno bajo y dímero D alto, en sepsis', go: 'cid' }] },
        mat: { q: 'Microangiopatía trombótica: ¿qué más tiene?', opts: [{ t: 'Fiebre o alteración neurológica, ADAMTS13 muy baja', go: 'ptt' }, { t: 'Diarrea con sangre previa y falla renal', go: 'shu' }] },
        coag: { q: 'Plaquetas normales: ¿cómo están el TP y el TTPa?', opts: [{ t: 'Solo el TTPa largo', go: 'ttpa' }, { t: 'Solo el TP (INR) largo', go: 'tpl' }, { t: 'Los dos largos', go: 'ambos' }, { t: 'Los dos normales, con sangrado de mucosas', go: 'vwf' }] },
        ttpa: { q: 'TTPa largo aislado: prueba de mezcla con plasma normal.', hint: 'Si corrige, falta un factor; si no corrige, hay un inhibidor.', opts: [{ t: 'Corrige', go: 'hemof' }, { t: 'No corrige, y tiene trombosis o pérdidas gestacionales', go: 'aaf' }, { t: 'No corrige, con sangrado grave sin antecedentes', go: 'hemadq' }] },
        pti: { end: 'Trombocitopenia inmune (PTI)', d: 'Diagnóstico de exclusión: solo bajan las plaquetas. Se trata si sangra o si están por debajo de 30,000: prednisona o dexametasona; inmunoglobulina IV si urge subirlas.' },
        ptt: { end: 'Púrpura trombocitopénica trombótica', d: 'ADAMTS13 menor de 10%. Recambio plasmático urgente con esteroide (y caplacizumab); no transfundas plaquetas.' },
        shu: { end: 'Síndrome hemolítico urémico', d: 'Por E. coli productora de toxina Shiga, sobre todo en niños: soporte y diálisis si hace falta; sin antibióticos ni antidiarreicos.' },
        hit: { end: 'Trombocitopenia inducida por heparina', d: 'Las plaquetas caen más de 50% a los 5 a 10 días; escala 4T y anticuerpos anti-PF4. Suspende toda heparina y anticoagula con argatrobán o fondaparinux: el riesgo es la trombosis.' },
        cid: { end: 'Coagulación intravascular diseminada', d: 'Consumo de plaquetas y factores por sepsis, trauma, cáncer u obstetricia. Trata la causa; plasma, crioprecipitado o plaquetas solo si sangra.' },
        hemof: { end: 'Hemofilia A o B', d: 'Hombre con hemartrosis y sangrado después de trauma o cirugía (ligada al X). Mide factor VIII (A) y IX (B); reposición del factor (emicizumab como profilaxis en la A).' },
        aaf: { end: 'Anticoagulante lúpico (síndrome antifosfolípido)', d: 'Alarga el TTPa en el tubo, pero en el cuerpo da trombosis y pérdidas gestacionales. Confirma los anticuerpos a las 12 semanas; warfarina si hubo trombosis.' },
        hemadq: { end: 'Hemofilia adquirida (anticuerpo contra el factor VIII)', d: 'Sangrado grave sin antecedentes en un adulto mayor, en el posparto o con autoinmunidad. Agentes de puenteo y esteroide con ciclofosfamida o rituximab.' },
        tpl: { end: 'TP largo aislado (factor VII)', d: 'Warfarina, déficit de vitamina K (ayuno, antibióticos, colestasis) o hepatopatía temprana. Vitamina K; si sangra, complejo protrombínico.' },
        ambos: { end: 'Vía común o varios factores', d: 'Hepatopatía avanzada, exceso de anticoagulante, déficit grave de vitamina K o CID: mide fibrinógeno y dímero D.' },
        vwf: { end: 'Enfermedad de von Willebrand', d: 'El trastorno hereditario de sangrado más común: epistaxis, menstruación abundante, sangrado dental. Antígeno y actividad del factor de von Willebrand (el TTPa puede alargarse si baja el VIII). Desmopresina en el tipo 1.' }
      },
      cases: [
        { t: 'Mujer de 28 años con petequias y epistaxis; por lo demás sana.', data: [['Plaquetas', '18,000/µL'], ['Hb y leucocitos', 'Normales'], ['Frotis', 'Plaquetas grandes, sin esquistocitos']], path: { plq: 0, tromb: 0 }, end: 'pti' },
        { t: 'Mujer de 35 años con fiebre, confusión y petequias.', data: [['Plaquetas', '15,000/µL'], ['Hb', '8.1 g/dL'], ['Frotis', 'Esquistocitos'], ['LDH', '1,200 U/L'], ['ADAMTS13', 'Menor de 5%']], path: { plq: 0, tromb: 1, mat: 0 }, end: 'ptt' },
        { t: 'Hombre de 66 años con enoxaparina desde una cirugía hace 7 días; ahora tiene una trombosis venosa en la pierna.', data: [['Plaquetas', 'De 210,000 a 85,000/µL'], ['Anti-PF4', 'Positivo']], path: { plq: 0, tromb: 2 }, end: 'hit' },
        { t: 'Hombre de 70 años en choque séptico que sangra por los sitios de punción.', data: [['Plaquetas', '42,000/µL'], ['TP y TTPa', 'Largos'], ['Fibrinógeno', '90 mg/dL'], ['Dímero D', 'Muy alto']], path: { plq: 0, tromb: 3 }, end: 'cid' },
        { t: 'Niño de 6 años con hemartrosis de rodilla tras una caída leve; su tío materno también sangra mucho.', data: [['Plaquetas', 'Normales'], ['TP', 'Normal'], ['TTPa', 'Largo, corrige con la mezcla'], ['Factor VIII', '3%']], path: { plq: 1, coag: 0, ttpa: 0 }, end: 'hemof' },
        { t: 'Mujer de 24 años con menstruaciones abundantes desde la adolescencia y sangrado prolongado tras una extracción dental.', data: [['Plaquetas', 'Normales'], ['TP y TTPa', 'Normales'], ['Factor de von Willebrand', '35%']], path: { plq: 1, coag: 3 }, end: 'vwf' },
        { t: 'Hombre de 58 años que toma warfarina y empezó un antibiótico; ahora tiene hematuria.', data: [['Plaquetas', 'Normales'], ['INR', '6.8'], ['TTPa', 'Normal']], path: { plq: 1, coag: 1 }, end: 'tpl' },
        { t: 'Mujer de 32 años con dos pérdidas gestacionales y una TVP; el TTPa salió largo en un preoperatorio.', data: [['Plaquetas', 'Normales'], ['TTPa', 'Largo, no corrige con la mezcla']], path: { plq: 1, coag: 0, ttpa: 1 }, end: 'aaf' }
      ]
    },
    pancreatitis: {
      title: 'Pancreatitis aguda: diagnóstico y gravedad', topics: ['pancrea'], start: 'dx',
      nodes: {
        dx: { q: '¿Cumple criterios de pancreatitis aguda?', hint: 'Se necesitan 2 de 3: dolor epigástrico típico (en cinturón), lipasa o amilasa de 3 veces el límite o más, e imagen compatible.', opts: [{ t: 'Sí: dolor típico y lipasa de 3 veces o más', go: 'causa' }, { t: 'Dolor típico, pero lipasa menor de 3 veces', go: 'img' }] },
        img: { q: 'Lipasa menor de 3 veces: ¿qué muestra la TC con contraste?', opts: [{ t: 'Pancreatitis (edema o líquido peripancreático)', go: 'causa' }, { t: 'Páncreas normal', go: 'otra' }] },
        causa: { q: 'Confirmada. Con ultrasonido y laboratorios, ¿cuál es la causa?', opts: [{ t: 'Biliar: litos y ALT mayor de 150', go: 'grav' }, { t: 'Alcohol', go: 'grav' }, { t: 'Triglicéridos mayores de 1,000 mg/dL', go: 'grav' }, { t: 'Después de una CPRE o por fármacos', go: 'grav' }] },
        grav: { q: 'Gravedad (Atlanta revisada): ¿hay falla orgánica y cuánto dura?', hint: 'Falla respiratoria, cardiovascular o renal (Marshall de 2 o más). Transitoria: se resuelve en menos de 48 h.', opts: [{ t: 'Sin falla orgánica ni complicaciones', go: 'leve' }, { t: 'Falla transitoria (menos de 48 h) o complicaciones locales', go: 'mod' }, { t: 'Falla orgánica persistente (más de 48 h)', go: 'grave' }] },
        leve: { end: 'Pancreatitis leve', d: 'Líquidos moderados y dirigidos (Ringer lactato), analgesia y vía oral temprana en cuanto tolere. Si es biliar, colecistectomía en el mismo internamiento.' },
        mod: { end: 'Pancreatitis moderadamente grave', d: 'Vigila de cerca; nutrición enteral si no tolera la vía oral. Las colecciones estériles no se drenan ni llevan antibiótico profiláctico.' },
        grave: { end: 'Pancreatitis grave', d: 'Terapia intensiva y nutrición enteral temprana. TC después de 72 h para ver necrosis; antibiótico solo si sospechas necrosis infectada (gas en la TC), con drenaje escalonado.' },
        otra: { end: 'Pancreatitis descartada', d: 'Busca otra causa de dolor epigástrico: úlcera perforada, colecistitis, isquemia mesentérica o infarto inferior.' }
      },
      cases: [
        { t: 'Mujer de 45 años con dolor epigástrico en cinturón después de una comida copiosa.', data: [['Lipasa', '12 veces el límite'], ['ALT', '320 U/L'], ['Ultrasonido', 'Litos en la vesícula'], ['Falla orgánica', 'No']], path: { dx: 0, causa: 0, grav: 0 }, end: 'leve' },
        { t: 'Hombre de 50 años que bebe a diario, con dolor en cinturón y vómito.', data: [['Lipasa', '8 veces el límite'], ['Creatinina', 'Sube y se normaliza en 24 h con líquidos'], ['TC', 'Colección peripancreática']], path: { dx: 0, causa: 1, grav: 1 }, end: 'mod' },
        { t: 'Hombre de 38 años con dolor intenso y suero lechoso.', data: [['Lipasa', '5 veces el límite'], ['Triglicéridos', '2,300 mg/dL'], ['PaO2/FiO2', '220 durante 3 días'], ['Creatinina', '2.4 mg/dL persistente']], path: { dx: 0, causa: 2, grav: 2 }, end: 'grave' },
        { t: 'Mujer de 60 años con dolor epigástrico típico que empezó hace 3 días.', data: [['Lipasa', '1.5 veces el límite'], ['TC', 'Edema pancreático y líquido peripancreático'], ['Ultrasonido', 'Litos en la vesícula'], ['Falla orgánica', 'No']], path: { dx: 1, img: 0, causa: 0, grav: 0 }, end: 'leve', why: { dx: 'La lipasa baja con los días: con 3 días de evolución, la imagen da el segundo criterio.' } }
      ]
    },
    hipofisis: {
      title: 'Tumor hipofisario: ¿qué hormona?', topics: ['hipofisis'], start: 'tipo',
      nodes: {
        tipo: { q: '¿Qué predomina?', opts: [{ t: 'Galactorrea, amenorrea o baja libido', go: 'prl' }, { t: 'Manos y pies grandes, rasgos toscos', go: 'acro' }, { t: 'Obesidad central, estrías violáceas, HTA e hiperglucemia', go: 'cush' }, { t: 'Solo efecto de masa: cefalea y hemianopsia bitemporal', go: 'nf' }] },
        prl: { q: 'Prolactina alta: antes de culpar al tumor, ¿qué encuentras?', hint: 'Descarta embarazo, hipotiroidismo primario y fármacos antidopaminérgicos.', opts: [{ t: 'TSH alta con T4 libre baja', go: 'hipot' }, { t: 'Toma un antipsicótico o metoclopramida', go: 'farm' }, { t: 'Todo normal y adenoma en la resonancia', go: 'prlma' }] },
        acro: { q: 'IGF-1 alta: ¿qué pasa con la GH tras 75 g de glucosa?', opts: [{ t: 'No se suprime (más de 1 ng/mL)', go: 'acroL' }, { t: 'Se suprime (menos de 1 ng/mL)', go: 'acroNo' }] },
        cush: { q: 'Hipercortisolismo confirmado (cortisol libre urinario, salival nocturno o 1 mg de dexametasona). ¿Cómo está la ACTH?', opts: [{ t: 'Baja (suprimida)', go: 'cushSup' }, { t: 'Normal o alta, con adenoma en la resonancia', go: 'cushHip' }, { t: 'Muy alta, sin tumor en la hipófisis y con hipokalemia', go: 'cushEct' }] },
        nf: { q: 'Macroadenoma no funcionante: antes de operar, ¿qué haces?', opts: [{ t: 'Campimetría y todos los ejes; repón primero el cortisol', go: 'nfL' }, { t: 'Inicia levotiroxina primero', go: 'crisis' }] },
        hipot: { end: 'Hiperprolactinemia por hipotiroidismo primario', d: 'La TRH alta estimula la prolactina: levotiroxina, y la prolactina se normaliza sin tocar la hipófisis.' },
        farm: { end: 'Hiperprolactinemia por fármacos', d: 'Antipsicóticos, metoclopramida o verapamilo. Suspende o cambia el fármaco si se puede.' },
        prlma: { end: 'Prolactinoma', d: 'Agonista dopaminérgico (cabergolina) de primera línea, incluso en macroprolactinoma con afección visual; cirugía si no responde o no lo tolera.' },
        acroL: { end: 'Acromegalia', d: 'Resonancia de silla turca y cirugía transesfenoidal; si persiste, análogos de somatostatina. Busca cardiomegalia, diabetes, apnea y pólipos de colon.' },
        acroNo: { end: 'Acromegalia descartada', d: 'Si la GH se suprime con la glucosa, la IGF-1 alta tiene otra explicación (embarazo, pubertad): repite y correlaciona.' },
        cushSup: { end: 'Cushing independiente de ACTH', d: 'Primero descarta corticoides exógenos; luego TC de suprarrenales (adenoma o carcinoma) y suprarrenalectomía.' },
        cushHip: { end: 'Enfermedad de Cushing (adenoma hipofisario)', d: 'La causa endógena más común. Cirugía transesfenoidal; si la resonancia no es clara, cateterismo de senos petrosos.' },
        cushEct: { end: 'ACTH ectópica', d: 'Carcinoma pulmonar de células pequeñas o carcinoides: hipokalemia marcada y avance rápido. Busca el tumor con TC de tórax y abdomen.' },
        nfL: { end: 'Adenoma no funcionante con efecto de masa', d: 'Cirugía transesfenoidal si comprime el quiasma. Antes, valora todos los ejes y repón primero el cortisol.' },
        crisis: { end: 'Riesgo de crisis suprarrenal', d: 'La levotiroxina acelera el metabolismo del cortisol: si falta ACTH, primero hidrocortisona y después tiroides.' }
      },
      cases: [
        { t: 'Mujer de 28 años con amenorrea y galactorrea; no toma medicamentos.', data: [['Prolactina', '180 ng/mL'], ['β-hCG', 'Negativa'], ['TSH', 'Normal'], ['Resonancia', 'Microadenoma de 6 mm']], path: { tipo: 0, prl: 2 }, end: 'prlma' },
        { t: 'Mujer de 40 años con galactorrea, cansancio, piel seca y aumento de peso.', data: [['Prolactina', '60 ng/mL'], ['TSH', '28 mUI/L'], ['T4 libre', 'Baja']], path: { tipo: 0, prl: 0 }, end: 'hipot' },
        { t: 'Hombre de 45 años al que ya no le queda su anillo; prognatismo y sudoración.', data: [['IGF-1', '3 veces el límite'], ['GH tras glucosa', '4.2 ng/mL']], path: { tipo: 1, acro: 0 }, end: 'acroL' },
        { t: 'Mujer de 36 años con estrías violáceas, HTA y diabetes de reciente inicio.', data: [['Cortisol libre urinario', 'Alto'], ['Dexametasona 1 mg', 'No suprime'], ['ACTH', '68 pg/mL'], ['Resonancia', 'Adenoma de 5 mm']], path: { tipo: 2, cush: 1 }, end: 'cushHip' },
        { t: 'Hombre de 62 años, fumador, con debilidad y un Cushing que avanzó en semanas.', data: [['K', '2.4 mEq/L'], ['ACTH', '320 pg/mL'], ['Resonancia de hipófisis', 'Normal'], ['TC de tórax', 'Masa pulmonar central']], path: { tipo: 2, cush: 2 }, end: 'cushEct' },
        { t: 'Hombre de 55 años con cefalea que choca con los marcos de las puertas.', data: [['Campimetría', 'Hemianopsia bitemporal'], ['Resonancia', 'Macroadenoma de 2.8 cm'], ['Prolactina', '35 ng/mL'], ['Cortisol matutino', 'Bajo']], path: { tipo: 3, nf: 0 }, end: 'nfL' }
      ]
    },
    hp: {
      title: 'Hipertensión pulmonar: ¿qué grupo?', topics: ['hp'], start: 'eco',
      nodes: {
        eco: { q: 'Disnea con ecocardiograma que sugiere HP (PSAP alta, VD dilatado). ¿Qué encuentras primero?', opts: [{ t: 'Cardiopatía izquierda: FEVI baja, valvulopatía o aurícula izquierda grande', go: 'g2' }, { t: 'Enfermedad pulmonar o hipoxia: EPOC, intersticial, apnea del sueño', go: 'g3' }, { t: 'Ninguna de las dos', go: 'vq' }] },
        vq: { q: 'Sin causa izquierda ni pulmonar: gammagrama ventilación/perfusión.', hint: 'El V/Q es el mejor estudio para descartar HP tromboembólica crónica (más sensible que la angio-TC).', opts: [{ t: 'Defectos de perfusión que no coinciden con la ventilación', go: 'g4' }, { t: 'Normal', go: 'cat' }] },
        cat: { q: 'Cateterismo derecho: PAPm mayor de 20, presión en cuña de 15 o menos y RVP mayor de 2 UW. ¿Qué contexto tiene?', opts: [{ t: 'Mujer joven sin otra causa', go: 'hapi' }, { t: 'Esclerosis sistémica, VIH, hipertensión portal o anorexígenos', go: 'hapa' }] },
        g2: { end: 'Grupo 2: por cardiopatía izquierda', d: 'La causa más común. Trata la cardiopatía (diuréticos, corregir la válvula); el sildenafil y otros vasodilatadores pulmonares no están indicados.' },
        g3: { end: 'Grupo 3: por enfermedad pulmonar o hipoxia', d: 'Trata la neumopatía y da oxígeno si hay hipoxemia; CPAP en la apnea del sueño.' },
        g4: { end: 'Grupo 4: tromboembólica crónica (HPTEC)', d: 'Anticoagulación de por vida y evaluación para endarterectomía pulmonar (curativa); riociguat o angioplastia con balón si no es operable.' },
        hapi: { end: 'Grupo 1: hipertensión arterial pulmonar idiopática', d: 'Prueba de vasorreactividad en el cateterismo: si responde, calcioantagonista a dosis alta; si no, terapia combinada (antagonista de endotelina más inhibidor de PDE-5).' },
        hapa: { end: 'Grupo 1: hipertensión arterial pulmonar asociada', d: 'Misma terapia específica que la idiopática (antagonista de endotelina, sildenafil o tadalafil, prostanoides) más el manejo de la enfermedad de base.' }
      },
      cases: [
        { t: 'Mujer de 70 años con insuficiencia cardiaca, FEVI de 30% y disnea.', data: [['PSAP por eco', '55 mmHg'], ['Aurícula izquierda', 'Dilatada']], path: { eco: 0 }, end: 'g2' },
        { t: 'Hombre de 68 años con EPOC grave.', data: [['SpO2', '86%'], ['VEF1', '35%'], ['PSAP por eco', '48 mmHg']], path: { eco: 1 }, end: 'g3' },
        { t: 'Mujer de 52 años con disnea progresiva; tuvo una TEP hace un año.', data: [['PSAP por eco', '70 mmHg'], ['FEVI y espirometría', 'Normales'], ['Gammagrama V/Q', 'Defectos segmentarios no coincidentes']], path: { eco: 2, vq: 0 }, end: 'g4' },
        { t: 'Mujer de 29 años con disnea de esfuerzo y síncope al subir escaleras.', data: [['FEVI y espirometría', 'Normales'], ['V/Q', 'Normal'], ['PAPm', '48 mmHg'], ['Cuña', '9 mmHg'], ['RVP', '9 UW']], path: { eco: 2, vq: 1, cat: 0 }, end: 'hapi' },
        { t: 'Mujer de 50 años con esclerosis sistémica limitada y DLCO baja.', data: [['PSAP por eco', '60 mmHg'], ['V/Q', 'Normal'], ['PAPm', '38 mmHg'], ['Cuña', '10 mmHg']], path: { eco: 2, vq: 1, cat: 1 }, end: 'hapa' }
      ]
    },
    leucemia: {
      title: 'Leucemias y SMD: blastos y linaje', topics: ['leucemias'], start: 'blast',
      nodes: {
        blast: { q: '¿Hay blastos en sangre o médula?', opts: [{ t: 'Sí, 20% o más', go: 'aguda' }, { t: 'Menos de 20%, con displasia y citopenias', go: 'smd' }, { t: 'No: leucocitosis con células maduras', go: 'cron' }] },
        aguda: { q: 'Leucemia aguda: ¿de qué linaje? (citometría de flujo)', opts: [{ t: 'Mieloide: mieloperoxidasa positiva, bastones de Auer', go: 'mieloide' }, { t: 'Linfoide: TdT, CD10 y CD19', go: 'lla' }] },
        mieloide: { q: 'LMA: ¿hay coagulopatía y promielocitos cargados de bastones de Auer?', opts: [{ t: 'Sí', go: 'lpa' }, { t: 'No', go: 'lma' }] },
        cron: { q: 'Leucocitosis madura: ¿qué células predominan?', opts: [{ t: 'Neutrófilos en todas las etapas, basofilia y esplenomegalia', go: 'lmc' }, { t: 'Linfocitos pequeños maduros y sombras de Gumprecht', go: 'llc' }] },
        lpa: { end: 'Leucemia promielocítica aguda', d: 't(15;17) PML::RARA. Urgencia: ácido transretinoico (ATRA) en cuanto la sospeches, sin esperar la genética, y corrige la coagulopatía; ATRA con trióxido de arsénico.' },
        lma: { end: 'Leucemia mieloide aguda', d: 'La aguda más común en adultos. Inducción con citarabina y antraciclina (7+3); vigila lisis tumoral y neutropenia febril.' },
        lla: { end: 'Leucemia linfoblástica aguda', d: 'La más común en niños (pico de 2 a 5 años). Quimioterapia por fases con profilaxis del SNC; si es Ph+, se agrega un inhibidor de tirosina cinasa.' },
        smd: { end: 'Síndrome mielodisplásico', d: 'Adulto mayor con citopenias, displasia y blastos menores de 20%. Según el IPSS-R: soporte transfusional, eritropoyetina o hipometilantes; el trasplante es la única cura.' },
        lmc: { end: 'Leucemia mieloide crónica', d: 'Cromosoma Filadelfia, t(9;22) BCR::ABL1. Imatinib u otro inhibidor de tirosina cinasa, vigilando la respuesta molecular.' },
        llc: { end: 'Leucemia linfocítica crónica', d: 'Linfocitosis B monoclonal de 5,000 o más (CD5+ y CD23+). En etapa temprana y sin síntomas, solo vigilancia.' }
      },
      cases: [
        { t: 'Mujer de 40 años con sangrado de encías, equimosis y fiebre.', data: [['Leucocitos', '3,000/µL'], ['Plaquetas', '20,000/µL'], ['Fibrinógeno', '80 mg/dL'], ['Médula', '80% promielocitos con muchos bastones de Auer']], path: { blast: 0, aguda: 0, mieloide: 0 }, end: 'lpa' },
        { t: 'Hombre de 67 años con cansancio e infecciones repetidas.', data: [['Blastos en médula', '45%, mieloperoxidasa +'], ['Bastones de Auer', 'Aislados'], ['Coagulación', 'Normal']], path: { blast: 0, aguda: 0, mieloide: 1 }, end: 'lma' },
        { t: 'Niño de 4 años con dolor óseo, palidez y petequias.', data: [['Blastos en médula', '70%'], ['Citometría', 'TdT+, CD10+, CD19+']], path: { blast: 0, aguda: 1 }, end: 'lla' },
        { t: 'Hombre de 50 años con saciedad temprana y bazo grande.', data: [['Leucocitos', '180,000/µL, todas las etapas'], ['Basófilos', '6%'], ['BCR::ABL1', 'Positivo']], path: { blast: 2, cron: 0 }, end: 'lmc' },
        { t: 'Mujer de 72 años, asintomática, con linfocitosis en un chequeo.', data: [['Leucocitos', '28,000/µL, 85% linfocitos maduros'], ['Frotis', 'Sombras de Gumprecht'], ['Citometría', 'CD5+, CD23+']], path: { blast: 2, cron: 1 }, end: 'llc' },
        { t: 'Hombre de 74 años con anemia macrocítica y plaquetas bajas.', data: [['Blastos en médula', '6%'], ['Médula', 'Displasia en dos líneas'], ['B12 y folato', 'Normales']], path: { blast: 1 }, end: 'smd' }
      ]
    },
    linfoma: {
      title: 'Adenopatía: ¿qué linfoma?', topics: ['linfo'], start: 'biop',
      nodes: {
        biop: { q: 'Adenopatía persistente (más de 4 semanas, mayor de 2 cm, dura, sin infección): ¿cómo la estudias?', opts: [{ t: 'Biopsia escisional o con aguja gruesa', go: 'tipo' }, { t: 'Aspiración con aguja fina', go: 'faf' }] },
        tipo: { q: '¿Qué muestra la histología?', opts: [{ t: 'Células de Reed-Sternberg (CD15+, CD30+)', go: 'hodg' }, { t: 'Células B grandes difusas (CD20+), crecimiento rápido', go: 'ldcbg' }, { t: 'Patrón folicular con BCL2 por t(14;18), curso lento', go: 'folic' }] },
        faf: { end: 'Insuficiente para diagnosticar un linfoma', d: 'La aspiración no muestra la arquitectura del ganglio: pide biopsia escisional o con aguja gruesa.' },
        hodg: { end: 'Linfoma de Hodgkin', d: 'Adulto joven con adenopatía cervical o mediastinal, a veces con dolor al beber alcohol. PET-TC para estadificar; ABVD (o brentuximab con AVD), con radioterapia en etapas tempranas.' },
        ldcbg: { end: 'Linfoma difuso de células B grandes', d: 'El linfoma no Hodgkin más común: agresivo pero curable. R-CHOP (o pola-R-CHP).' },
        folic: { end: 'Linfoma folicular', d: 'Indolente, t(14;18). Sin síntomas ni masa voluminosa, vigilancia; si hay que tratar, rituximab con quimioterapia.' }
      },
      cases: [
        { t: 'Hombre de 24 años con adenopatía cervical de 6 semanas, sudoración nocturna y prurito.', data: [['Radiografía', 'Mediastino ensanchado'], ['Biopsia', 'Células de Reed-Sternberg CD15+ CD30+']], path: { biop: 0, tipo: 0 }, end: 'hodg' },
        { t: 'Mujer de 64 años con una masa abdominal que creció en 2 meses.', data: [['LDH', 'Alta'], ['Biopsia', 'Láminas de células B grandes CD20+']], path: { biop: 0, tipo: 1 }, end: 'ldcbg' },
        { t: 'Hombre de 58 años con adenopatías axilares e inguinales que crecen y bajan desde hace 2 años.', data: [['Biopsia', 'Patrón folicular, BCL2+'], ['Citogenética', 't(14;18)']], path: { biop: 0, tipo: 2 }, end: 'folic' }
      ]
    },
    disfagia: {
      title: 'Disfagia: ¿orofaríngea o esofágica?', topics: ['deglucion'], start: 'tipo',
      nodes: {
        tipo: { q: '¿Dónde está el problema?', opts: [{ t: 'Le cuesta iniciar la deglución: tos, regurgitación nasal, voz húmeda', go: 'oro' }, { t: 'Siente que la comida se atora en el pecho segundos después de tragar', go: 'eso' }] },
        eso: { q: 'Esofágica: ¿con qué alimentos?', opts: [{ t: 'Solo sólidos', go: 'obst' }, { t: 'Sólidos y líquidos desde el inicio', go: 'mot' }] },
        obst: { q: 'Obstructiva: ¿cómo es?', hint: 'El primer estudio es la endoscopia con biopsias.', opts: [{ t: 'Progresiva, con pérdida de peso, en un fumador mayor', go: 'ca' }, { t: 'Intermitente, con impactación de alimento, en un joven con atopia', go: 'eeo' }, { t: 'Intermitente, no progresiva, con un anillo en la unión esofagogástrica', go: 'schatzki' }] },
        mot: { q: 'Motora: ¿qué muestra la manometría de alta resolución?', opts: [{ t: 'Relajación incompleta del esfínter inferior y aperistalsis', go: 'acal' }, { t: 'Contracciones prematuras con dolor torácico', go: 'espasmo' }, { t: 'Peristalsis ausente con esfínter hipotenso, con Raynaud', go: 'esclero' }] },
        oro: { end: 'Disfagia orofaríngea', d: 'Causas neuromusculares (EVC, Parkinson, miastenia) o divertículo de Zenker. Videofluoroscopia de la deglución y rehabilitación.' },
        ca: { end: 'Cáncer de esófago hasta demostrar lo contrario', d: 'Endoscopia con biopsia: escamoso (tabaco y alcohol, tercio medio) o adenocarcinoma (Barrett, tercio distal). Estadifica con TC y ultrasonido endoscópico.' },
        eeo: { end: 'Esofagitis eosinofílica', d: 'Anillos y surcos en la endoscopia; biopsias con 15 o más eosinófilos por campo. IBP, budesonida deglutida o dieta de eliminación.' },
        schatzki: { end: 'Anillo de Schatzki', d: 'La “disfagia del filete”: impactación intermitente de sólidos. Dilatación endoscópica e IBP.' },
        acal: { end: 'Acalasia', d: 'Esofagograma en “pico de pájaro”; se confirma con manometría (y endoscopia para descartar pseudoacalasia). Dilatación neumática, miotomía de Heller o POEM.' },
        espasmo: { end: 'Espasmo esofágico distal', d: 'Dolor torácico que imita angina (descártala primero). Calcioantagonistas o nitratos; POEM si no responde.' },
        esclero: { end: 'Esófago en esclerodermia', d: 'El músculo liso se fibrosa: reflujo grave por esfínter hipotenso. IBP a dosis altas y procinéticos.' }
      },
      cases: [
        { t: 'Hombre de 78 años que tuvo un EVC; tose al beber y el líquido se le sale por la nariz.', data: [['Exploración', 'Disartria, voz húmeda']], path: { tipo: 0 }, end: 'oro' },
        { t: 'Hombre de 66 años, fumador y bebedor, con disfagia a sólidos que avanza desde hace 3 meses.', data: [['Peso', 'Perdió 8 kg'], ['Hb', '10.9 g/dL']], path: { tipo: 1, eso: 0, obst: 0 }, end: 'ca' },
        { t: 'Hombre de 22 años con asma y rinitis; se le atora la carne y ya necesitó endoscopia para sacarla.', data: [['Endoscopia', 'Anillos y surcos'], ['Biopsia', '40 eosinófilos por campo']], path: { tipo: 1, eso: 0, obst: 1 }, end: 'eeo' },
        { t: 'Mujer de 38 años con disfagia a sólidos y líquidos desde el inicio y regurgitación de comida sin digerir.', data: [['Esofagograma', '“Pico de pájaro”'], ['Manometría', 'Relajación incompleta del esfínter, aperistalsis']], path: { tipo: 1, eso: 1, mot: 0 }, end: 'acal' },
        { t: 'Mujer de 50 años con Raynaud, esclerodactilia y agruras intensas.', data: [['Manometría', 'Aperistalsis distal, esfínter hipotenso']], path: { tipo: 1, eso: 1, mot: 2 }, end: 'esclero' }
      ]
    },
    gaso: {
      title: 'Gasometría paso a paso', topics: ['lra', 'erc', 'dm2', 'diarrea'], start: 'ph',
      nodes: {
        ph: { q: 'Paso 1: ¿cómo está el pH?', opts: [{ t: 'Menor de 7.35: acidemia', go: 'acid' }, { t: 'Mayor de 7.45: alcalemia', go: 'alc' }] },
        acid: { q: 'Paso 2: ¿qué explica la acidemia?', opts: [{ t: 'HCO3 bajo: acidosis metabólica', go: 'comp' }, { t: 'PaCO2 alta: acidosis respiratoria', go: 'racid' }] },
        comp: { q: 'Paso 3: ¿compensa bien?', hint: 'Fórmula de Winter: PaCO2 esperada = 1.5 × HCO3 + 8 (± 2).', opts: [{ t: 'Sí: la PaCO2 está en el rango esperado', go: 'ag' }, { t: 'PaCO2 más alta de lo esperado: además, acidosis respiratoria', go: 'ag' }, { t: 'PaCO2 más baja de lo esperado: además, alcalosis respiratoria', go: 'ag' }] },
        ag: { q: 'Paso 4: brecha aniónica = Na − (Cl + HCO3); lo normal es 12 ± 2.', opts: [{ t: 'Elevada', go: 'agcausa' }, { t: 'Normal: acidosis hiperclorémica', go: 'hcl' }] },
        agcausa: { q: 'Brecha elevada: ¿cuál es la causa?', opts: [{ t: 'Cetoacidosis: glucosa alta y cetonas', go: 'cad' }, { t: 'Acidosis láctica: choque, lactato alto', go: 'lact' }, { t: 'Uremia: ERC avanzada', go: 'urem' }, { t: 'Tóxicos: metanol, etilenglicol o salicilatos (brecha osmolar alta)', go: 'tox' }] },
        alc: { q: 'Paso 2: ¿qué explica la alcalemia?', opts: [{ t: 'HCO3 alto: alcalosis metabólica', go: 'malc' }, { t: 'PaCO2 baja: alcalosis respiratoria', go: 'ralc' }] },
        racid: { end: 'Acidosis respiratoria', d: 'Hipoventilación: EPOC, sedantes u opioides, enfermedad neuromuscular. Si es crónica, el riñón sube el HCO3 para compensar.' },
        hcl: { end: 'Acidosis metabólica hiperclorémica (brecha normal)', d: 'Se pierde bicarbonato: diarrea o acidosis tubular renal; también por exceso de solución salina. La brecha aniónica urinaria las distingue.' },
        cad: { end: 'Cetoacidosis diabética', d: 'Líquidos, insulina en infusión y potasio (si el K está menor de 3.3, repón antes de la insulina).' },
        lact: { end: 'Acidosis láctica', d: 'Hipoperfusión (choque, sepsis), isquemia mesentérica o metformina con falla renal. Trata la causa.' },
        urem: { end: 'Acidosis urémica', d: 'ERC avanzada: el riñón ya no excreta ácido. Bicarbonato oral; diálisis si es grave y no responde.' },
        tox: { end: 'Intoxicación con brecha osmolar alta', d: 'Metanol o etilenglicol: fomepizol y hemodiálisis. Los salicilatos dan alcalosis respiratoria más acidosis metabólica.' },
        malc: { end: 'Alcalosis metabólica', d: 'Vómito o diuréticos: mide el cloro urinario (menor de 20 = responde a solución salina).' },
        ralc: { end: 'Alcalosis respiratoria', d: 'Hiperventilación: ansiedad, TEP, sepsis temprana, embarazo o salicilatos.' }
      },
      cases: [
        { t: 'Mujer de 19 años con diabetes tipo 1, vómito y respiración profunda.', data: [['pH', '7.19'], ['PaCO2', '19 mmHg'], ['HCO3', '7 mEq/L'], ['Na / Cl', '134 / 98'], ['Glucosa', '480 mg/dL'], ['Cetonas', '+++']], path: { ph: 0, acid: 0, comp: 0, ag: 0, agcausa: 0 }, end: 'cad', why: { comp: 'Esperada: 1.5 × 7 + 8 = 18.5 (16.5 a 20.5); 19 está en rango.', ag: '134 − (98 + 7) = 29.' } },
        { t: 'Hombre de 40 años con diarrea acuosa de 5 días.', data: [['pH', '7.29'], ['PaCO2', '30 mmHg'], ['HCO3', '14 mEq/L'], ['Na / Cl', '138 / 114'], ['K', '3.0 mEq/L']], path: { ph: 0, acid: 0, comp: 0, ag: 1 }, end: 'hcl', why: { comp: 'Esperada: 1.5 × 14 + 8 = 29 (27 a 31); 30 está en rango.', ag: '138 − (114 + 14) = 10: normal.' } },
        { t: 'Hombre de 77 años en choque séptico que ya se ve cansado de respirar.', data: [['pH', '7.17'], ['PaCO2', '34 mmHg'], ['HCO3', '12 mEq/L'], ['Na / Cl', '140 / 100'], ['Lactato', '6.5 mmol/L']], path: { ph: 0, acid: 0, comp: 1, ag: 0, agcausa: 1 }, end: 'lact', why: { comp: 'Esperada: 1.5 × 12 + 8 = 26 (24 a 28); 34 es más alta: se está agotando.', ag: '140 − (100 + 12) = 28.' } },
        { t: 'Hombre de 68 años con EPOC exacerbada y somnolencia.', data: [['pH', '7.28'], ['PaCO2', '70 mmHg'], ['HCO3', '32 mEq/L']], path: { ph: 0, acid: 1 }, end: 'racid', why: { acid: 'La PaCO2 alta explica la acidemia; el HCO3 alto es la compensación renal.' } },
        { t: 'Mujer de 30 años con vómito incoercible desde hace 4 días.', data: [['pH', '7.53'], ['PaCO2', '47 mmHg'], ['HCO3', '38 mEq/L'], ['Cl urinario', '10 mEq/L']], path: { ph: 1, alc: 0 }, end: 'malc' },
        { t: 'Mujer de 25 años con hormigueo en labios y manos después de una crisis de angustia.', data: [['pH', '7.50'], ['PaCO2', '28 mmHg'], ['HCO3', '21 mEq/L']], path: { ph: 1, alc: 1 }, end: 'ralc' },
        { t: 'Hombre de 45 años que tomó alcohol adulterado y ahora ve borroso.', data: [['pH', '7.22'], ['PaCO2', '20 mmHg'], ['HCO3', '8 mEq/L'], ['Na / Cl', '140 / 102'], ['Brecha osmolar', '35 mOsm/kg']], path: { ph: 0, acid: 0, comp: 0, ag: 0, agcausa: 3 }, end: 'tox', why: { ag: '140 − (102 + 8) = 30.' } }
      ]
    }
  },

  // frotis.<id>: { name, why, topics } (las células se dibujan en app.js)
  frotis: {
    normal: { name: 'Frotis normal', why: 'Eritrocitos del tamaño del núcleo de un linfocito pequeño, con palidez central de un tercio; leucocitos y plaquetas normales.', topics: ['anemias', 'hemoliticas', 'sangrado', 'leucemias', 'linfo'] },
    esquisto: { name: 'Esquistocitos', why: 'Fragmentos de eritrocito (en casco o en triángulo) por daño mecánico: microangiopatía trombótica (PTT, SHU, CID) o válvula protésica. Con plaquetas bajas, piensa en PTT: recambio plasmático urgente.', topics: ['sangrado', 'hemoliticas'] },
    esfero: { name: 'Esferocitos', why: 'Pequeños, densos y sin palidez central: esferocitosis hereditaria (CHCM alta, Coombs negativo) o anemia hemolítica autoinmune por anticuerpos calientes (Coombs positivo).', topics: ['hemoliticas'] },
    diana: { name: 'Dianocitos (células en diana)', why: 'Hemoglobina en el centro y en el borde: talasemia, hemoglobinopatía C, hepatopatía y después de una esplenectomía.', topics: ['anemias', 'hemoliticas'] },
    ferro: { name: 'Microcitosis hipocrómica', why: 'Eritrocitos pequeños y pálidos de tamaños distintos (ADE alta), con células en lápiz: ferropenia. Confirma con ferritina.', topics: ['anemias'] },
    lagrima: { name: 'Dacriocitos (células en lágrima)', why: 'Los eritrocitos se deforman al salir de una médula fibrosa: mielofibrosis o infiltración medular, con leucoeritroblastosis y esplenomegalia.', topics: ['leucemias', 'anemias'] },
    hiperseg: { name: 'Neutrófilo hipersegmentado con macroovalocitos', why: 'Seis lóbulos o más (o más de 5% de neutrófilos con cinco): anemia megaloblástica por déficit de B12 o folato.', topics: ['anemias'] },
    auer: { name: 'Blastos con bastones de Auer', why: 'Bastones rojizos en el citoplasma de mieloblastos: leucemia mieloide aguda. Si son muchos y hay coagulopatía, piensa en promielocítica y da ATRA ya.', topics: ['leucemias'] },
    gump: { name: 'Sombras de Gumprecht', why: 'Linfocitos pequeños maduros y células que se rompen al hacer el frotis: leucemia linfocítica crónica.', topics: ['leucemias', 'linfo'] },
    falci: { name: 'Drepanocitos (células falciformes)', why: 'La HbS se polimeriza con la hipoxia: anemia de células falciformes, con crisis vasooclusivas. Hidroxiurea; transfusión o recambio en las crisis graves.', topics: ['hemoliticas'] },
    mordida: { name: 'Células mordidas (déficit de G6PD)', why: 'Los macrófagos del bazo “muerden” los cuerpos de Heinz: déficit de G6PD después de un fármaco oxidante, una infección o habas.', topics: ['hemoliticas'] }
  },

  ecg: {
    normal: { name: 'Ritmo sinusal normal', why: 'P antes de cada QRS, PR y QRS normales, ST isoeléctrico y T positiva donde debe (negativa en aVR).', hl: [], topics: ['sca', 'scc', 'tep', 'erc', 'lra', 'mitral', 'dialisis'] },
    inf: { name: 'IAMCEST inferior', why: 'ST elevado en DII, DIII y aVF con espejo en aVL. Arteria: coronaria derecha (si DIII > DII) o circunfleja. Pide V4R: si hay infarto de VD, nada de nitratos y dale volumen.', hl: ['II', 'III', 'aVF', 'aVL'], topics: ['sca', 'scc'] },
    ant: { name: 'IAMCEST anterior', why: 'ST elevado de V1 a V4 con pérdida de onda R: descendente anterior. Es el que más músculo se lleva.', hl: ['V1', 'V2', 'V3', 'V4'], topics: ['sca', 'scc'] },
    lat: { name: 'IAMCEST lateral', why: 'ST elevado en DI, aVL, V5 y V6 con espejo inferior (DIII, aVF): circunfleja o diagonal.', hl: ['I', 'aVL', 'V5', 'V6', 'III'], topics: ['sca', 'scc'] },
    wellens: { name: 'Síndrome de Wellens', why: 'T profundas y simétricas en V2 y V3, sin elevación del ST y con R conservada, en un paciente ya sin dolor: estenosis crítica de la descendente anterior. Cateterismo, nunca prueba de esfuerzo.', hl: ['V2', 'V3'], topics: ['sca'] },
    dewinter: { name: 'Patrón de De Winter', why: 'Infradesnivel ascendente del ST en precordiales con T altas y simétricas: oclusión de la descendente anterior. Se trata como IAMCEST.', hl: ['V1', 'V2', 'V3', 'V4', 'V5', 'V6'], topics: ['sca'] },
    pericard: { name: 'Pericarditis aguda', why: 'ST elevado cóncavo y difuso, sin territorio y sin espejo (salvo aVR), con PR deprimido. AINE más colchicina. En ERC avanzada piensa en pericarditis urémica: es indicación de diálisis.', hl: ['I', 'II', 'aVF', 'V2', 'V3', 'V4', 'V5', 'V6', 'aVR'], topics: ['sca', 'erc', 'dialisis'] },
    hiperk: { name: 'Hiperkalemia', why: 'T picudas de base estrecha; si sube más: P aplanada, PR largo y QRS ancho. Gluconato de calcio intravenoso de inmediato, después insulina con glucosa y salbutamol, y elimina potasio.', hl: ['V2', 'V3', 'V4', 'II'], topics: ['erc', 'lra', 'dialisis'] },
    hipok: { name: 'Hipokalemia', why: 'T aplanadas, ondas U prominentes e infradesnivel leve del ST. Diuréticos, vómito o diarrea; repón potasio (y magnesio).', hl: ['V2', 'V3', 'II'], topics: ['lra', 'diarrea', 'hta'] },
    fa: { name: 'Fibrilación auricular', why: 'RR irregularmente irregular y sin ondas P (línea de base fibrilatoria). Controla la frecuencia y calcula CHA2DS2-VASc para anticoagular; en estenosis mitral, siempre anticoagulación con warfarina.', hl: ['II', 'V1'], topics: ['mitral', 'aortica', 'hta'] },
    flutter: { name: 'Flutter auricular', why: 'Ondas F en “dientes de sierra” en DII, DIII y aVF a ~300 por minuto, con conducción 2:1 (FC ~150). Se anticoagula igual que la FA; la ablación del istmo cavotricuspídeo suele curar el flutter típico.', hl: ['II', 'III', 'aVF'], topics: ['mitral'] },
    bavc: { name: 'Bloqueo AV completo', why: 'Las P van a su ritmo y los QRS (anchos y lentos) al suyo: disociación AV. Marcapasos transcutáneo y después definitivo; la atropina casi no sirve si el bloqueo es infranodal.', hl: ['II', 'V1'], topics: ['sca', 'scc'] },
    tep: { name: 'Patrón de TEP', why: 'Taquicardia sinusal (lo más común), S en DI, Q y T negativa en DIII (S1Q3T3) y T negativas de V1 a V3 por sobrecarga del VD. Ningún hallazgo es sensible: el ECG no la descarta.', hl: ['I', 'III', 'V1', 'V2', 'V3'], topics: ['tep'] }
  }
};
