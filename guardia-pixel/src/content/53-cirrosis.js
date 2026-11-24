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
        { ch: 'El hígado cicatrizado', sc: [
          { v: { k: 'title', t: 'Cirrosis y sus complicaciones', s: 'Semana 10 · Gastroenterología' },
            say: 'Semana diez: la cirrosis. Es el final común de cualquier daño hepático crónico: el hígado se llena de cicatriz y nódulos, pierde función y la sangre de la porta ya no pasa. De ahí salen las complicaciones que preguntan: ascitis, peritonitis, várices, encefalopatía y síndrome hepatorrenal.' },
          { v: { k: 'case', t: 'Vomita sangre', p: { name: 'Héctor', age: 54, sex: 'H', skin: '#C98B62', hair: '#9A9A9A', gown: '#5BA7E0' }, text: 'Cirrosis por alcohol, con ascitis. Hematemesis abundante hace una hora. Somnoliento, con asterixis.', vit: { PA: '88/50', FC: '120', Hb: '7.2', Plaq: '68 000' } },
            say: 'Héctor tiene cincuenta y cuatro años y cirrosis por alcohol con ascitis. Hace una hora vomitó sangre en abundancia. Está somnoliento y tiene asterixis. La presión es de ochenta y ocho sobre cincuenta, la frecuencia de ciento veinte y la hemoglobina de siete punto dos.' },
          { v: { k: 'list', t: 'Causas', items: ['Alcohol', 'Hígado graso metabólico', 'Hepatitis C y B', 'Autoinmune, CBP, CEP', 'Hemocromatosis, Wilson, alfa-1 antitripsina'] },
            say: 'Las causas principales son el alcohol, el hígado graso metabólico y las hepatitis C y B. Menos comunes: hepatitis autoinmune, colangitis biliar primaria, colangitis esclerosante, hemocromatosis, Wilson y deficiencia de alfa uno antitripsina.' },
          { v: { k: 'vs', a: 'Hipertensión portal', b: 'Insuficiencia hepatocelular', rows: [['Ascitis', 'Sí', '—'], ['Várices, cabeza de medusa', 'Sí', '—'], ['Esplenomegalia, plaquetas bajas', 'Sí', '—'], ['Ictericia, INR alto', '—', 'Sí'], ['Albúmina baja, asterixis', '—', 'Sí'], ['Arañas, ginecomastia', '—', 'Estrógenos altos']] },
            say: 'Los signos salen de dos problemas. La hipertensión portal da ascitis, várices, circulación colateral en cabeza de medusa, esplenomegalia y plaquetas bajas. La insuficiencia del hepatocito da ictericia, INR alto, albúmina baja y encefalopatía con asterixis. Y como el hígado no degrada estrógenos, aparecen arañas vasculares, eritema palmar y ginecomastia.' },
          { v: { k: 'vs', a: 'Child-Pugh', b: 'MELD', rows: [['Mide', 'Bilirrubina, albúmina, INR, ascitis, encefalopatía', 'Bilirrubina, INR, creatinina, sodio'], ['Clases', 'A 5 a 6, B 7 a 9, C 10 a 15', 'Número'], ['Uso', 'Pronóstico general', 'Prioridad de trasplante'], ['Referir', '—', 'MELD 15 o más']] },
            say: 'El pronóstico se mide con Child Pugh, que usa bilirrubina, albúmina, INR, ascitis y encefalopatía y clasifica en A, B y C. Y con MELD, que usa bilirrubina, INR, creatinina y sodio, y decide la prioridad para trasplante: se refiere con MELD de quince o más. Todo cirrótico necesita ultrasonido con o sin alfafetoproteína cada seis meses para buscar hepatocarcinoma, y endoscopia para buscar várices.' }
        ] },
        { ch: 'Ascitis y peritonitis', sc: [
          { v: { k: 'big', h: 'Gradiente albúmina suero-ascitis', t: '≥1.1', s: 'Hipertensión portal: cirrosis, IC, Budd-Chiari. Menor de 1.1: carcinomatosis, TB, pancreatitis, nefrótico.' },
            say: 'Toda ascitis nueva y todo cirrótico hospitalizado se puncionan. El dato clave es el gradiente entre la albúmina del suero y la del líquido: si es de uno punto uno o más, la ascitis es por hipertensión portal; si es menor, piensa en carcinomatosis, tuberculosis, pancreatitis o síndrome nefrótico.' },
          { v: { k: 'flow', t: 'Tratar la ascitis', steps: ['Sodio menor de 2 g al día', 'Espironolactona + furosemida 100 a 40', 'Sin AINE ni IECA', 'Paracentesis de más de 5 L: albúmina 6 a 8 g por litro', 'Refractaria: TIPS o trasplante'] },
            say: 'La ascitis se trata con restricción de sodio a menos de dos gramos al día y espironolactona con furosemida en proporción de cien a cuarenta. Nada de antiinflamatorios ni inhibidores de la enzima convertidora. Si se sacan más de cinco litros por paracentesis, se reponen seis a ocho gramos de albúmina por litro. Y la refractaria se maneja con paracentesis seriadas, TIPS o trasplante.' },
          { v: { k: 'list', t: 'Peritonitis bacteriana espontánea', items: ['PMN en líquido 250 o más', 'E. coli, Klebsiella', 'Ceftriaxona o cefotaxima', '+ albúmina 1.5 g/kg día 1 y 1 g/kg día 3', 'Profilaxis después con ciprofloxacino'] },
            say: 'La peritonitis bacteriana espontánea se diagnostica con doscientos cincuenta neutrófilos o más por milímetro cúbico en el líquido. La causan E. coli y Klebsiella. Se trata con ceftriaxona o cefotaxima más albúmina, uno punto cinco gramos por kilo el primer día y uno el tercero, porque la albúmina previene el síndrome hepatorrenal. Después queda con profilaxis.' },
          { v: { k: 'quiz', q: 'Cirrótico con fiebre y dolor abdominal. Líquido de ascitis con 480 PMN. ¿Qué das?', opts: ['Ceftriaxona sola', 'Ceftriaxona + albúmina', 'Esperar el cultivo'], a: 1 },
            say: 'Pausa. Cirrótico con fiebre y dolor abdominal. Su líquido de ascitis tiene cuatrocientos ochenta neutrófilos. ¿Qué das?',
            exp: 'Ceftriaxona más albúmina intravenosa. Con doscientos cincuenta neutrófilos o más ya es peritonitis bacteriana espontánea, no esperes el cultivo. La albúmina reduce el síndrome hepatorrenal y la mortalidad.' }
        ] },
        { ch: 'Sangrado por várices', sc: [
          { v: { k: 'flow', t: 'Sangrado variceal agudo', steps: ['Vía aérea: intubar si hay riesgo de aspiración', 'Transfundir solo si Hb menor de 7', 'Octreotida o terlipresina IV', 'Ceftriaxona 1 g al día por 7 días', 'Endoscopia con ligadura en 12 h o menos', 'Falla: balón como puente y TIPS'] },
            say: 'El sangrado por várices se maneja así: primero la vía aérea, e intubar si hay riesgo de aspiración. Transfusión restrictiva, solo con hemoglobina menor de siete, porque transfundir de más sube la presión portal. Octreotida o terlipresina intravenosa. Ceftriaxona por siete días, que reduce infecciones, resangrado y muerte. Endoscopia con ligadura en las primeras doce horas. Y si falla, sonda de balón como puente a TIPS.' },
          { v: { k: 'vs', a: 'Profilaxis primaria', b: 'Profilaxis secundaria', rows: [['Quién', 'Várices grandes o con puntos rojos', 'Ya sangró'], ['Qué', 'Betabloqueador no selectivo o ligadura', 'Betabloqueador + ligaduras seriadas'], ['Betabloqueador', 'Propranolol, nadolol, carvedilol', 'Igual']] },
            say: 'Para prevenir el primer sangrado, en várices grandes o con puntos rojos, betabloqueador no selectivo, como propranolol o carvedilol, o ligadura. Después de un sangrado, ambos: betabloqueador más ligaduras seriadas.' },
          { v: { k: 'tip', kind: 'trap', t: 'Transfundir a Hb de 10 en sangrado variceal aumenta el resangrado y la muerte: meta 7 a 8.' },
            say: 'Trampa: transfundir para llevar la hemoglobina a diez. En el sangrado variceal, transfundir de más eleva la presión portal y aumenta el resangrado y la mortalidad. La meta es siete a ocho.' }
        ] },
        { ch: 'Encefalopatía y riñón', sc: [
          { v: { k: 'list', t: 'Encefalopatía: busca el desencadenante', items: ['Sangrado digestivo', 'Infección (PBE)', 'Estreñimiento', 'Hipokalemia, deshidratación, diuréticos', 'Benzodiacepinas u opioides'] },
            say: 'La encefalopatía hepática va desde cambios sutiles hasta el coma, con asterixis. Casi siempre hay un desencadenante que buscar: sangrado digestivo, infección como la peritonitis espontánea, estreñimiento, hipokalemia, deshidratación por diuréticos, o benzodiacepinas y opioides.' },
          { v: { k: 'list', t: 'Tratamiento', items: ['Corregir el desencadenante', 'Lactulosa: 2 a 3 evacuaciones blandas al día', 'Rifaximina para prevenir recurrencias', 'El amonio no sirve para seguimiento'] },
            say: 'Se corrige el desencadenante y se da lactulosa hasta lograr dos o tres evacuaciones blandas al día; la rifaximina se agrega para prevenir recurrencias. El amonio sérico no sirve para diagnosticar ni para seguir la evolución: el diagnóstico es clínico.' },
          { v: { k: 'list', t: 'Síndrome hepatorrenal', items: ['Lesión renal sin otra causa', 'Sin respuesta a 2 días de albúmina y sin diurético', 'Sin choque ni nefrotóxicos; sedimento normal', 'Terlipresina + albúmina', 'Definitivo: trasplante'] },
            say: 'El síndrome hepatorrenal es una lesión renal funcional por vasoconstricción renal. Se diagnostica cuando no responde a dos días de suspender diuréticos y dar albúmina, sin choque, sin nefrotóxicos y con sedimento normal. Se trata con terlipresina más albúmina, y lo definitivo es el trasplante.' },
          { v: { k: 'quiz', q: 'Héctor tras el sangrado: más somnoliento, asterixis, 3 días sin evacuar. ¿Qué das?', opts: ['Haloperidol', 'Lactulosa y buscar el desencadenante', 'Flumazenil'], a: 1 },
            say: 'Pausa. Después del sangrado, Héctor está más somnoliento, con asterixis y tres días sin evacuar. ¿Qué das?',
            exp: 'Lactulosa, y corregir los desencadenantes: el sangrado digestivo aporta proteína al intestino y el estreñimiento la mantiene. Nada de sedantes.' }
        ] },
        { ch: 'Cierre del caso', sc: [
          { v: { k: 'list', t: 'Héctor: final del caso', items: ['Intubado por somnolencia y hematemesis', 'Terlipresina + ceftriaxona', 'Ligadura de várices a las 6 h', 'Child C: TIPS preventivo en 72 h', 'Lactulosa; propranolol al egreso'] },
            say: 'A Héctor lo intuban por somnolencia con hematemesis, recibe terlipresina y ceftriaxona, y a las seis horas le ligan las várices. Por ser Child C, le colocan un TIPS preventivo en las primeras setenta y dos horas. Inicia lactulosa y egresa con propranolol, abstinencia de alcohol y referencia a trasplante.' },
          { v: { k: 'tip', kind: 'pearl', t: 'Todo cirrótico con sangrado digestivo recibe ceftriaxona 7 días, aunque no tenga fiebre.' },
            say: 'Perla: todo cirrótico con sangrado digestivo recibe ceftriaxona por siete días, aunque no tenga fiebre. Reduce infecciones, resangrado y mortalidad.' },
          { v: { k: 'mnemo', t: 'GASA ≥1.1 · PMN ≥250 · Hb 7', d: 'PBE: ceftriaxona + albúmina. Várices: vasoactivo + ceftriaxona + ligadura ≤12 h. Encefalopatía: lactulosa y desencadenante.' },
            say: 'Llévate tres números: gradiente de uno punto uno, doscientos cincuenta neutrófilos y hemoglobina de siete. Ahora juega la guardia de Héctor y mueve el MELD en el simulador del taller.' }
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
