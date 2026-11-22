// Tema 44 · Cirrosis y sus complicaciones (Gastroenterología, semana 10)
const T = { topic: 'cirrosis', subj: 'gastro' };
const q = (o) => ({ ...T, ...o });
const SRC = { short: 'De tu Guía Gastro', vs: 'tu guía', name: 'Guía Gastro · Ximena Cors Cepeda (EMIS 5)', url: 'https://docs.google.com/document/d/16oAVd4UCRwVvWLOsO8DuHlzTN2RKAGSIKTtHIAqqnq4/edit' };

export default {
  lessons: {
    cirrosis: {
      hook: 'La cirrosis se complica por hipertensión portal (várices, ascitis) y por falla hepática (encefalopatía, coagulopatía). Toda ascitis nueva o paciente cirrótico que empeora: paracentesis. Y el sangrado variceal: octreotida, ceftriaxona y ligadura.',
      nn: [], yt: 'cirrhosis complications ascites SBP variceal bleeding hepatic encephalopathy',
      video: [
        { ch: 'Hipertensión portal y ascitis', sc: [
          { v: { k: 'title', t: 'Cirrosis', s: 'Semana 10 · Gastroenterología' },
            say: 'Semana diez: la cirrosis, el hígado convertido en cicatriz. Las causas principales son el alcohol, la hepatitis C, la B y el hígado graso metabólico. Las complicaciones vienen de dos lados: la presión portal alta y el hígado que ya no funciona.' },
          { v: { k: 'list', t: 'Complicaciones', items: ['Ascitis', 'Peritonitis bacteriana espontánea', 'Várices y sangrado', 'Encefalopatía hepática', 'Síndrome hepatorrenal', 'Hepatocarcinoma'] },
            say: 'Las complicaciones: ascitis, peritonitis bacteriana espontánea, várices que sangran, encefalopatía, síndrome hepatorrenal y hepatocarcinoma.' },
          { v: { k: 'vs', a: 'GASA 1.1 o más', b: 'GASA menor de 1.1', rows: [['Qué indica', 'Hipertensión portal', 'Sin hipertensión portal'], ['Causas', 'Cirrosis, IC, Budd-Chiari', 'Carcinomatosis, TB, pancreatitis, nefrótico']] },
            say: 'En toda ascitis nueva se hace paracentesis y se calcula el gradiente de albúmina suero ascitis. Si es uno punto uno o más, hay hipertensión portal, como en la cirrosis. Si es menor, piensa en cáncer peritoneal, tuberculosis o pancreatitis.' },
          { v: { k: 'list', t: 'Tratamiento de la ascitis', items: ['Sodio menor de 2 g al día', 'Espironolactona con furosemida, 100 a 40', 'Paracentesis evacuadora con albúmina', 'Refractaria: TIPS o trasplante'] },
            say: 'La ascitis se trata con restricción de sodio y diuréticos: espironolactona con furosemida en proporción cien a cuarenta. Si es a tensión, paracentesis evacuadora; si se sacan más de cinco litros, se repone con albúmina.' }
        ] },
        { ch: 'Las urgencias', sc: [
          { v: { k: 'case', t: 'Vomita sangre', p: { name: 'Héctor', age: 54, sex: 'H', skin: '#C98B62', hair: '#9A9A9A', gown: '#5BA7E0' }, text: 'Cirrosis por alcohol. Hematemesis abundante, PA 88/50, FC 120.', vit: { PA: '88/50', Hb: '7.2' } },
            say: 'Héctor tiene cirrosis por alcohol y llega vomitando sangre, con presión de ochenta y ocho sobre cincuenta.' },
          { v: { k: 'flow', t: 'Sangrado variceal', steps: ['Vía aérea y 2 vías gruesas', 'Transfundir con Hb de 7', 'Octreotida IV', 'Ceftriaxona', 'Ligadura endoscópica en 12 h'] },
            say: 'Protege la vía aérea, dos vías gruesas, transfunde de forma restrictiva con hemoglobina menor de siete, octreotida intravenosa, ceftriaxona profiláctica y ligadura endoscópica en las primeras doce horas.' },
          { v: { k: 'quiz', q: 'Cirrótico con ascitis, fiebre y dolor abdominal. Paracentesis: 380 neutrófilos. ¿Qué tiene?', opts: ['Ascitis normal', 'Peritonitis bacteriana espontánea', 'Peritonitis secundaria segura'], a: 1 },
            say: 'Pausa. Un cirrótico con ascitis, fiebre y dolor abdominal. La paracentesis tiene trescientos ochenta neutrófilos. ¿Qué tiene?',
            exp: 'Peritonitis bacteriana espontánea: doscientos cincuenta o más neutrófilos. Se trata con cefotaxima o ceftriaxona y albúmina para prevenir el síndrome hepatorrenal.' },
          { v: { k: 'mnemo', t: 'Sangrado variceal: octreotida, ceftriaxona, ligadura', d: 'Y luego propranolol o carvedilol + ligaduras para que no vuelva a sangrar.' },
            say: 'Llévate esto: sangrado variceal, octreotida, ceftriaxona y ligadura. Encefalopatía, lactulosa y rifaximina. Peritonitis, cefalosporina y albúmina.' }
        ] }
      ],
      sections: [
        { h: 'Causas, clínica y pronóstico', html: `
<ul>
<li>Causas: <b>alcohol</b>, <b>hígado graso metabólico (MASLD)</b>, VHC, VHB; autoinmune, colangitis biliar primaria, CEP, hemocromatosis, Wilson, deficiencia de alfa-1 antitripsina, Budd-Chiari, IC derecha.</li>
<li>Clínica: ictericia, <b>arañas vasculares</b>, eritema palmar, ginecomastia y atrofia testicular (estrógenos), ascitis, circulación colateral (cabeza de medusa), esplenomegalia, <b>asterixis</b>, fetor hepático. Laboratorio: <b>plaquetas bajas</b> (hiperesplenismo), albúmina baja, INR alto, bilirrubina alta.</li>
<li>Diagnóstico: USG (hígado nodular, esplenomegalia), elastografía (FibroScan), FIB-4; biopsia rara vez.</li>
<li>Pronóstico: <b>Child-Pugh</b> (bilirrubina, albúmina, INR, ascitis, encefalopatía; A 5–6, B 7–9, C 10–15) y <b>MELD</b> (bilirrubina, INR, creatinina, Na; prioriza el trasplante: referir con MELD ≥15).</li>
<li>Tamizaje de <b>hepatocarcinoma</b>: USG ± AFP cada 6 meses. Endoscopia para várices al diagnóstico.</li>
</ul>` },
        { h: 'Ascitis y peritonitis bacteriana espontánea', html: `
<ul>
<li>Paracentesis diagnóstica en toda ascitis nueva y en todo cirrótico hospitalizado o que se deteriora: celularidad con PMN, albúmina (→ <b>GASA</b>), proteínas totales, cultivo en frascos de hemocultivo.</li>
<li><b>GASA ≥1.1</b>: hipertensión portal (cirrosis, IC, Budd-Chiari; proteínas &gt;2.5 en IC). <b>&lt;1.1</b>: carcinomatosis, TB, pancreatitis, síndrome nefrótico.</li>
<li>Tratamiento: <b>Na &lt;2 g/día</b>, <b>espironolactona + furosemida (100:40)</b>, sin AINE ni IECA. Paracentesis evacuadora: si &gt;5 L, <b>albúmina 6–8 g por litro</b>. Refractaria: paracentesis seriadas, <b>TIPS</b>, trasplante.</li>
<li><b>PBE</b>: PMN en líquido <b>≥250/mm³</b> (E. coli, Klebsiella) → <b>cefotaxima o ceftriaxona</b> + <b>albúmina</b> (1.5 g/kg día 1 y 1 g/kg día 3) para prevenir el síndrome hepatorrenal. Peritonitis secundaria si hay varios gérmenes, glucosa &lt;50, proteínas &gt;1, LDH alta → TC.</li>
<li><b>Profilaxis</b> (ciprofloxacino o TMP-SMX): PBE previa, sangrado digestivo (ceftriaxona 7 días), proteínas en líquido &lt;1.5 con falla renal/hepática.</li>
</ul>` },
        { h: 'Várices y sangrado', html: `
<ul>
<li>Profilaxis primaria de várices grandes o con puntos rojos: <b>betabloqueador no selectivo</b> (propranolol, nadolol, <b>carvedilol</b>) o <b>ligadura</b>.</li>
<li><b>Sangrado agudo</b>: ABC, intubar si hay riesgo de aspiración; transfusión restrictiva (<b>Hb 7</b>); <b>octreotida/terlipresina</b> IV; <b>ceftriaxona</b> 1 g/día por 7 días; <b>endoscopia en ≤12 h con ligadura</b>. Fracaso: sonda de balón como puente, <b>TIPS</b>. TIPS preventivo (en 72 h) en Child C o B con sangrado activo.</li>
<li>Profilaxis secundaria: <b>BB no selectivo + ligaduras</b> seriadas.</li>
<li>Várices gástricas aisladas: cianoacrilato o TIPS; si hay trombosis de la vena esplénica (pancreatitis) → esplenectomía.</li>
</ul>` },
        { h: 'Encefalopatía, síndrome hepatorrenal y otras', html: `
<ul>
<li><b>Encefalopatía hepática</b>: amonio y otras toxinas; grados West-Haven 1–4; <b>asterixis</b>. Buscar el <b>desencadenante</b>: sangrado digestivo, infección (PBE), estreñimiento, hipokalemia/alcalosis, deshidratación o diuréticos, benzodiacepinas/opioides. Tratamiento: <b>lactulosa</b> (2–3 evacuaciones blandas al día) ± <b>rifaximina</b> (prevención de recurrencia). El amonio sérico no sirve para seguimiento.</li>
<li><b>Síndrome hepatorrenal</b> (LRA-SHR): vasoconstricción renal por vasodilatación esplácnica; LRA sin respuesta a 2 días de suspender diuréticos y dar albúmina (1 g/kg), sin choque ni nefrotóxicos, sedimento normal, FENa &lt;1 %. Tratamiento: <b>terlipresina + albúmina</b> (o norepinefrina, o midodrina + octreotida); definitivo: <b>trasplante</b>.</li>
<li><b>Hidrotórax hepático</b> (derecho), <b>síndrome hepatopulmonar</b> (platipnea, ortodeoxia), hipertensión portopulmonar.</li>
<li>Hepatocarcinoma: USG ± AFP c/6 meses; lesión &gt;1 cm con patrón típico en TC/RM multifásica (realce arterial y lavado) basta para el diagnóstico.</li>
</ul>` },
        { h: 'Cómo lo preguntan en el examen', html: `
<ul>
<li>Ascitis nueva → <b>paracentesis diagnóstica</b> con GASA.</li>
<li>Cirrótico con fiebre, dolor y PMN 300 → <b>PBE</b> → ceftriaxona + albúmina.</li>
<li>Hematemesis en cirrótico → octreotida + ceftriaxona + <b>ligadura</b>.</li>
<li>Confusión y asterixis tras estreñimiento → encefalopatía → <b>lactulosa</b> y buscar desencadenante.</li>
<li>LRA que no responde a albúmina, sedimento normal → <b>SHR</b> → terlipresina + albúmina.</li>
<li>Paracentesis de 7 L → <b>albúmina</b> IV.</li>
</ul>` }
      ],
      mnemo: { t: 'Várices: octreotida + ceftriaxona + ligadura · EH: lactulosa · PBE: cefalosporina + albúmina', d: 'Las tres urgencias del cirrótico y su tratamiento clave; siempre busca el desencadenante de la encefalopatía.' },
      pearl: 'Todo cirrótico con sangrado digestivo recibe antibiótico profiláctico (ceftriaxona): reduce infecciones, resangrado y mortalidad.',
      trap: 'Una ascitis con PMN ≥250 pero con varios gérmenes en el Gram, glucosa baja y LDH alta no es PBE: es peritonitis secundaria (perforación) y necesita TC y cirugía.',
      guide: [
        'Baveno VII (2022): carvedilol es el betabloqueador preferido para prevenir la descompensación en hipertensión portal clínicamente significativa.',
        'Tu guía usa propranolol para várices; hoy se prefiere carvedilol, y la ligadura es igual de válida en profilaxis primaria.'
      ],
      refs: [
        'Biggins SW, et al. Diagnosis, evaluation, and management of ascites, SBP and hepatorenal syndrome: AASLD 2021 Practice Guidance. Hepatology 2021.',
        'de Franchis R, et al. Baveno VII – Renewing consensus in portal hypertension. J Hepatol 2022.',
        'Vilstrup H, et al. Hepatic encephalopathy in chronic liver disease: AASLD/EASL Practice Guideline. Hepatology 2014.',
        'EASL Clinical Practice Guidelines for the management of patients with decompensated cirrhosis. J Hepatol 2018.'
      ]
    }
  },

  guias: {
    cirrosis: { src: SRC,
      puntos: [
        'Causas: alcoholismo, VHC, esteatohepatitis, cirrosis biliar. Estrógenos altos: ginecomastia, atrofia testicular, arañas vasculares, eritema palmar.',
        'Ascitis por hipertensión portal + hipoalbuminemia; várices esofágicas, rectales, umbilicales; hiperesplenismo con plaquetas bajas.',
        'Várices: endoscopia al diagnóstico y cada 2 años; propranolol. Ascitis: Na &lt;2 g, espironolactona, paracentesis, TIPS.',
        'PBE: PMN ≥250, GASA &gt;1.1; cefalosporinas o quinolonas IV; profilaxis con cipro o TMP-SMX.',
        'Encefalopatía: lactulosa y rifaximina. Hepatorrenal: FENa &lt;1 %, no responde a líquidos. MELD (mortalidad a 3 meses) y Child-Pugh (A 5–6, B 7–9, C 10–15).'
      ],
      ojo: [
        'Síndrome hepatorrenal: el tratamiento de elección es <b>terlipresina + albúmina</b> (o norepinefrina); tu guía menciona diuréticos de asa, que no se usan para el SHR.',
        'En la PBE se agrega <b>albúmina</b> (1.5 g/kg el día 1 y 1 g/kg el día 3) para prevenir el SHR.'
      ],
      cards: [['GASA', 'Albúmina sérica − albúmina en ascitis; ≥1.1 = hipertensión portal']] }
  },

  cards: [
    ['Causas principales de cirrosis', 'Alcohol, MASLD, VHC, VHB'],
    ['Child-Pugh', 'Bilirrubina, albúmina, INR, ascitis, encefalopatía; A 5–6, B 7–9, C 10–15'],
    ['MELD', 'Bilirrubina, INR, creatinina, Na; prioridad para trasplante'],
    ['Tamizaje de hepatocarcinoma', 'USG ± AFP cada 6 meses'],
    ['GASA ≥1.1', 'Hipertensión portal (cirrosis, IC, Budd-Chiari)'],
    ['Ascitis: diuréticos', 'Espironolactona + furosemida 100:40; Na <2 g/día'],
    ['Paracentesis >5 L', 'Albúmina 6–8 g por litro extraído'],
    ['PBE: diagnóstico', 'PMN ≥250/mm³ en líquido de ascitis'],
    ['PBE: tratamiento', 'Cefotaxima/ceftriaxona + albúmina'],
    ['Sangrado variceal', 'Octreotida + ceftriaxona + ligadura en ≤12 h; Hb meta 7'],
    ['Profilaxis secundaria de várices', 'BB no selectivo (carvedilol/propranolol) + ligaduras'],
    ['Encefalopatía hepática: tratamiento', 'Lactulosa ± rifaximina; buscar desencadenante'],
    ['Desencadenantes de encefalopatía', 'Sangrado, infección, estreñimiento, hipokalemia, sedantes, deshidratación'],
    ['Síndrome hepatorrenal: tratamiento', 'Terlipresina + albúmina; trasplante'],
    ['Plaquetas bajas en cirrosis', 'Hiperesplenismo por hipertensión portal']
  ],

  questions: [
    q({ id: 'cirrosis-01', dif: 1, stem: 'Paciente con ascitis de reciente aparición. ¿Primer estudio?', opts: ['TC de abdomen', 'Paracentesis diagnóstica con citológico, albúmina (GASA) y cultivo', 'Biopsia hepática', 'Laparoscopia', 'Diuréticos sin estudiar'], ans: 1,
      exp: 'La paracentesis define la causa (GASA) y descarta infección.', why: ['Complementaria.', '', 'No es la primera.', 'No es la primera.', 'Sin diagnóstico.'], ref: 'AASLD 2021' }),
    q({ id: 'cirrosis-02', dif: 2, stem: 'Ascitis con albúmina sérica de 3.0 y en líquido de 1.2. ¿Interpretación?', opts: ['GASA 1.8: hipertensión portal', 'GASA 1.8: carcinomatosis', 'GASA 0.4: hipertensión portal', 'Exudado', 'No interpretable'], ans: 0,
      exp: 'GASA = 3.0 − 1.2 = 1.8 (≥1.1): hipertensión portal.', why: ['', 'Daría GASA <1.1.', 'Mal calculado.', 'Ese criterio ya no se usa.', 'Es interpretable.'], ref: 'AASLD 2021' }),
    q({ id: 'cirrosis-03', dif: 2, stem: 'Cirrótico con ascitis, fiebre, dolor abdominal difuso y confusión. Líquido: 520 PMN/mm³, Gram sin bacterias. ¿Tratamiento?', opts: ['Esperar cultivo', 'Ceftriaxona IV + albúmina', 'Cirugía', 'Solo lactulosa', 'Paracentesis evacuadora sin antibiótico'], ans: 1,
      exp: 'PBE (PMN ≥250): cefalosporina de 3ª generación de inmediato + albúmina para prevenir SHR.', why: ['Retraso peligroso.', '', 'No es peritonitis secundaria.', 'Insuficiente.', 'Insuficiente.'], ref: 'AASLD 2021' }),
    q({ id: 'cirrosis-04', dif: 2, stem: 'Cirrótico con hematemesis masiva, PA 85/50. ¿Qué combinación es correcta en las primeras horas?', opts: ['Omeprazol y alta', 'Octreotida IV + ceftriaxona + transfusión restrictiva + endoscopia con ligadura en ≤12 h', 'Propranolol IV inmediato', 'Transfundir hasta Hb 12', 'Plasma a todos'], ans: 1,
      exp: 'Manejo del sangrado variceal: vasoactivo, antibiótico profiláctico, transfusión restrictiva (Hb 7) y ligadura temprana.', why: ['Inadecuado.', '', 'Contraindicado con hipotensión.', 'Aumenta la presión portal y el resangrado.', 'No mejora el sangrado y sobrecarga volumen.'], ref: 'Baveno VII' }),
    q({ id: 'cirrosis-05', dif: 2, stem: 'Cirrótico que se vuelve somnoliento, con asterixis, tras 4 días sin evacuar. ¿Tratamiento inicial?', opts: ['Benzodiacepina', 'Lactulosa (y buscar otros desencadenantes)', 'Restricción absoluta de proteínas', 'Flumazenil siempre', 'Furosemida'], ans: 1,
      exp: 'Encefalopatía hepática por estreñimiento: lactulosa hasta 2–3 evacuaciones blandas; rifaximina para prevenir recurrencias.', why: ['Empeora.', '', 'Ya no se recomienda; empeora la desnutrición.', 'Solo si hay benzodiacepinas.', 'Puede precipitarla.'], ref: 'AASLD/EASL 2014' }),
    q({ id: 'cirrosis-06', dif: 2, stem: 'Paciente con ascitis a tensión al que se le extraen 8 L. ¿Qué das para evitar disfunción circulatoria?', opts: ['Solución salina', 'Albúmina 6–8 g por litro extraído', 'Plasma', 'Nada', 'Dextrán'], ans: 1,
      exp: 'Paracentesis >5 L: albúmina para prevenir la disfunción circulatoria posparacentesis y la LRA.', why: ['Menos eficaz.', '', 'No está indicado.', 'Riesgo de LRA.', 'Menos eficaz.'], ref: 'AASLD 2021' }),
    q({ id: 'cirrosis-07', dif: 2, stem: 'Cirrótico con creatinina que sube de 1.0 a 2.4, sin respuesta a 2 días de suspender diuréticos y dar albúmina; sin choque, sedimento normal, FENa 0.3 %. ¿Diagnóstico y tratamiento?', opts: ['NTA; diálisis', 'Síndrome hepatorrenal; terlipresina + albúmina', 'Prerrenal; más líquidos', 'Glomerulonefritis; esteroides', 'Posrenal; sonda'], ans: 1,
      exp: 'LRA-SHR: vasoconstricción renal funcional. Terlipresina (o norepinefrina) + albúmina; trasplante como definitivo.', why: ['Tendría cilindros y FENa alta.', '', 'Ya no respondió a volumen.', 'Sedimento normal.', 'No hay datos.'], ref: 'AASLD 2021' }),
    q({ id: 'cirrosis-08', dif: 2, stem: 'Cirrótico con várices esofágicas grandes que nunca han sangrado. ¿Profilaxis primaria?', opts: ['Nada', 'Betabloqueador no selectivo (carvedilol/propranolol) o ligadura', 'Escleroterapia', 'TIPS', 'Omeprazol'], ans: 1,
      exp: 'Várices grandes o de alto riesgo: BB no selectivo o ligadura endoscópica.', why: ['Riesgo alto de sangrado.', '', 'Inferior.', 'No como profilaxis primaria.', 'No previene el sangrado variceal.'], ref: 'Baveno VII' }),
    q({ id: 'cirrosis-09', dif: 1, stem: '¿Cuál es el tamizaje de hepatocarcinoma en un paciente con cirrosis?', opts: ['TC anual', 'USG ± AFP cada 6 meses', 'AFP anual sola', 'Biopsia anual', 'Ninguno'], ans: 1,
      exp: 'USG semestral (± AFP) en todo cirrótico candidato a tratamiento.', why: ['No es el estándar.', '', 'Insuficiente.', 'No.', 'Riesgo alto.'], ref: 'AASLD 2023' }),
    q({ id: 'cirrosis-10', dif: 2, stem: 'Ascitis con GASA 0.6, proteínas altas, linfocitos predominantes y ADA alta. ¿Causa?', opts: ['Cirrosis', 'Tuberculosis peritoneal', 'IC', 'Budd-Chiari', 'PBE'], ans: 1,
      exp: 'GASA <1.1 con linfocitos y ADA alta sugiere TB peritoneal (o carcinomatosis).', why: ['GASA ≥1.1.', '', 'GASA ≥1.1.', 'GASA ≥1.1.', 'Predominio de PMN.'], ref: 'AASLD 2021' }),
    q({ id: 'cirrosis-11', dif: 2, stem: '¿Qué escala se usa para priorizar a los pacientes en la lista de trasplante hepático?', opts: ['Child-Pugh', 'MELD (MELD-Na)', 'Glasgow', 'APACHE', 'Ranson'], ans: 1,
      exp: 'El MELD (bilirrubina, INR, creatinina, Na) predice mortalidad a 3 meses y prioriza el trasplante.', why: ['Es pronóstico, pero no prioriza.', '', 'No.', 'No.', 'Es de pancreatitis.'], ref: 'EASL 2018' }),
    q({ id: 'cirrosis-12', dif: 2, stem: 'Paciente con PBE tratada. ¿Qué profilaxis secundaria indicas?', opts: ['Ninguna', 'Ciprofloxacino o TMP-SMX a largo plazo', 'Vancomicina oral', 'Lactulosa', 'Albúmina semanal'], ans: 1,
      exp: 'Tras un episodio de PBE la recurrencia es alta: profilaxis antibiótica indefinida.', why: ['Recurrencia alta.', '', 'No.', 'No es profilaxis de PBE.', 'No es el estándar.'], ref: 'AASLD 2021' }),
    q({ id: 'cirrosis-13', dif: 2, stem: '¿Qué fármaco evitas en un paciente con cirrosis y ascitis?', opts: ['Espironolactona', 'Ibuprofeno', 'Lactulosa', 'Ceftriaxona', 'Albúmina'], ans: 1,
      exp: 'Los AINE reducen la perfusión renal, causan LRA, resistencia a diuréticos y sangrado.', why: ['Es de elección.', '', 'Útil.', 'Útil.', 'Útil.'], ref: 'AASLD 2021' }),
    q({ id: 'cirrosis-14', dif: 2, stem: 'Ascitis con 900 PMN, Gram con múltiples bacterias, glucosa 20 mg/dL y LDH alta. ¿Diagnóstico?', opts: ['PBE', 'Peritonitis secundaria (perforación)', 'Ascitis neutrocítica', 'TB', 'Carcinomatosis'], ans: 1,
      exp: 'Polimicrobiana con glucosa baja y LDH alta: peritonitis secundaria; TC urgente y cirugía.', why: ['La PBE es monomicrobiana.', '', 'No tiene gérmenes.', 'No.', 'No.'], ref: 'AASLD 2021' }),
    q({ id: 'cirrosis-15', dif: 2, stem: 'Paciente con encefalopatía hepática recurrente pese a lactulosa. ¿Qué agregas?', opts: ['Metronidazol crónico', 'Rifaximina', 'Neomicina indefinida', 'Benzodiacepina', 'Restricción de proteínas estricta'], ans: 1,
      exp: 'La rifaximina reduce recurrencias y hospitalizaciones.', why: ['Neurotóxico a largo plazo.', '', 'Ototóxica y nefrotóxica.', 'Empeora.', 'No se recomienda.'], ref: 'AASLD/EASL 2014' }),
    q({ id: 'cirrosis-16', dif: 1, stem: '¿Qué hallazgo explica la trombocitopenia en la cirrosis?', opts: ['Déficit de vitamina K', 'Hiperesplenismo por hipertensión portal (y menos trombopoyetina)', 'Leucemia', 'Déficit de hierro', 'Hemólisis'], ans: 1,
      exp: 'El bazo congestivo secuestra plaquetas y el hígado produce menos trombopoyetina.', why: ['Afecta factores, no plaquetas.', '', 'No.', 'No.', 'No.'], ref: 'EASL 2018' }),
    q({ id: 'cirrosis-17', dif: 2, stem: 'Paciente con sangrado variceal que persiste pese a ligadura y vasoactivo. ¿Siguiente paso?', opts: ['Repetir ligadura indefinidamente', 'Balón de taponamiento como puente y TIPS', 'Propranolol IV', 'Cirugía de derivación como primera opción', 'Plasma'], ans: 1,
      exp: 'Sangrado refractario: balón (Sengstaken o Linton) como puente, TIPS de rescate.', why: ['No es razonable.', '', 'Contraindicado en choque.', 'Se reserva.', 'No resuelve.'], ref: 'Baveno VII' }),
    q({ id: 'cirrosis-18', dif: 2, stem: 'Cirrótico con disnea al estar de pie que mejora acostado e hipoxemia ortostática. ¿Diagnóstico?', opts: ['Hidrotórax hepático', 'Síndrome hepatopulmonar', 'Hipertensión portopulmonar', 'TEP', 'Neumonía'], ans: 1,
      exp: 'Platipnea-ortodeoxia por dilataciones vasculares intrapulmonares (eco con burbujas positivo tardío).', why: ['Da derrame, no ortodeoxia.', '', 'Da HP con falla derecha.', 'No hay datos.', 'No hay datos.'], ref: 'EASL 2018' }),
    q({ id: 'cirrosis-19', dif: 2, stem: 'Paciente con cirrosis que tiene bilirrubina 3.2, albúmina 2.7, INR 1.9, ascitis moderada y encefalopatía grado 1. ¿Child-Pugh?', opts: ['A', 'B', 'C', 'No calculable', 'D'], ans: 2,
      exp: 'Bilirrubina >3 (3) + albúmina <2.8 (3) + INR 1.7–2.3 (2) + ascitis moderada (2–3) + encefalopatía 1–2 (2) ≥12 = Child C.', why: ['Menos de 7.', '7–9.', '', 'Es calculable.', 'No existe.'], ref: 'EASL 2018' }),
    q({ id: 'cirrosis-20', dif: 2, stem: '¿Qué diurético es el pilar del tratamiento de la ascitis cirrótica?', opts: ['Hidroclorotiazida', 'Espironolactona', 'Acetazolamida', 'Manitol', 'Amilorida sola'], ans: 1,
      exp: 'El hiperaldosteronismo secundario retiene Na: espironolactona (± furosemida 100:40).', why: ['No es de elección.', '', 'No.', 'No.', 'Menos eficaz.'], ref: 'AASLD 2021' })
  ]
};
