// Tema 18 · Leucemias agudas y síndrome mielodisplásico (Hematología, semana 5)
const T = { topic: 'leucemias', subj: 'hemato' };
const q = (o) => ({ ...T, ...o });

export default {
  lessons: {
    leucemias: {
      hook: 'Pancitopenia con blastos: es una leucemia aguda hasta demostrar lo contrario. Distingue LMA de LLA, reconoce la LPA (urgencia por CID) y el SMD del adulto mayor.',
      compare: ['lma-lla'],
      nn: [['acute-leukemia', 'Acute Leukemia'], ['acute-myelogenous-leukemia', 'Acute Myelogenous Leukemia'], ['acute-lymphoblastic-leukemia', 'Acute Lymphoblastic Leukemia']],
      yt: 'acute leukemia AML ALL',
      sections: [
        { h: 'Cuadro general', html: `
<ul>
<li><b>Falla medular</b>: anemia (fatiga), neutropenia (infecciones, fiebre), trombocitopenia (petequias, sangrado).</li>
<li>Leucocitos altos, normales o bajos; <b>blastos</b> en sangre o médula. Diagnóstico con aspirado y biopsia de médula: morfología, citometría de flujo, citogenética y biología molecular.</li>
<li>Umbral clásico: <b>≥20% de blastos</b>. La OMS 2022 y la ICC 2022 permiten diagnosticar LMA con menos blastos si hay una alteración genética definitoria (ver caja de guías).</li>
<li><b>Leucostasis</b> (blastos muy altos): disnea, hipoxemia, alteración neurológica → citorreducción urgente (hidroxiurea, inducción).</li>
<li><b>Síndrome de lisis tumoral</b>: K ↑, fósforo ↑, calcio ↓, ácido úrico ↑, LRA. Prevención: hidratación + alopurinol; rasburicasa si el riesgo es alto (contraindicada en déficit de G6PD).</li>
</ul>` },
        { h: 'LMA', html: `
<ul>
<li>Adultos (mediana ~68 años); también secundaria a SMD, quimioterapia o radiación.</li>
<li>Mieloperoxidasa positiva, <b>bastones de Auer</b>. Variantes monocíticas: hipertrofia gingival, infiltración de piel, SNC.</li>
<li>Riesgo genético (ELN 2022): <b>favorable</b> t(8;21), inv(16), NPM1 sin FLT3-ITD, CEBPA bZIP; <b>adverso</b> TP53, cariotipo complejo, −5/−7.</li>
<li>Tratamiento del paciente apto: inducción <b>“7+3”</b> (citarabina 7 días + antraciclina 3 días); midostaurina si hay FLT3. Consolidación con citarabina en dosis altas o trasplante alogénico según riesgo.</li>
<li>No apto para quimioterapia intensiva: <b>venetoclax + azacitidina</b>.</li>
</ul>` },
        { h: 'LPA: la leucemia que sangra', html: `
<ul>
<li>Leucemia promielocítica aguda, <b>t(15;17) PML::RARA</b>. Promielocitos con muchos bastones de Auer (células en “haz de leña”).</li>
<li>Se presenta con <b>CID</b> y hemorragia grave (cerebral, pulmonar).</li>
<li>Inicia <b>ácido transretinoico (ATRA)</b> en cuanto la sospeches, sin esperar la confirmación genética; se combina con trióxido de arsénico. Mantén plaquetas &gt;30–50 mil y fibrinógeno &gt;100–150 mg/dL.</li>
<li><b>Síndrome de diferenciación</b>: fiebre, disnea, infiltrados, derrames, aumento de peso, LRA → dexametasona.</li>
<li>Con tratamiento, la curación supera el 90%.</li>
</ul>` },
        { h: 'LLA', html: `
<ul>
<li>La leucemia más común en niños (pico 2–5 años); también adultos.</li>
<li>Adenopatías, hepatoesplenomegalia, dolor óseo, infiltración de <b>SNC y testículo</b>; masa mediastinal en LLA-T.</li>
<li>TdT positiva; precursora B: CD10, CD19, CD22. En adultos es común el cromosoma Filadelfia t(9;22) <b>BCR::ABL1</b> → agregar inhibidor de tirosina cinasa.</li>
<li>Tratamiento por fases: inducción, consolidación, profilaxis del SNC (intratecal) y mantenimiento por ~2–3 años. Inmunoterapias: blinatumomab, inotuzumab, células CAR-T.</li>
</ul>` },
        { h: 'Síndrome mielodisplásico', html: `
<ul>
<li>Adulto mayor con <b>citopenias</b> (sobre todo anemia macrocítica) y médula <b>displásica</b> con blastos &lt;20%.</li>
<li>Frotis: neutrófilos hiposegmentados (pseudo-Pelger-Huët) e hipogranulares; sideroblastos en anillo (asociados a SF3B1).</li>
<li>Pronóstico con IPSS-R o IPSS-M. Puede progresar a LMA.</li>
<li>Bajo riesgo: soporte transfusional, eritropoyetina, luspatercept; <b>lenalidomida en del(5q)</b>. Alto riesgo: hipometilantes (azacitidina); el <b>trasplante alogénico</b> es el único tratamiento curativo.</li>
</ul>` }
      ],
      mnemo: { t: 'LPA = “ATRA ya”', d: 'Si ves promielocitos y CID, no esperes al PML::RARA: el ácido transretinoico salva la vida en las primeras horas.' },
      pearl: 'Fiebre en un paciente con neutropenia (<500) es urgencia: hemocultivos y antibiótico antipseudomonas (cefepime, piperacilina-tazobactam o meropenem) en menos de 60 minutos.',
      trap: 'La rasburicasa causa hemólisis y metahemoglobinemia en déficit de G6PD: pregunta o mide antes de darla.',
      guide: [
        'Umbral de blastos: la OMS 2022 elimina el 20% para LMA con alteraciones genéticas definitorias (salvo BCR::ABL1 y CEBPA); la ICC 2022 usa ≥10% para varias de ellas y crea la categoría SMD/LMA (10–19%). Para el examen, 20% sigue siendo la cifra clásica.',
        'Clasificación de riesgo: la ELN 2022 reemplazó a la ELN 2017; algunos cambios (FLT3-ITD ya no modifica el riesgo según la carga alélica) pueden no estar en tu libro.'
      ],
      refs: [
        'Döhner H, et al. Diagnosis and management of AML in adults: 2022 ELN recommendations. Blood 2022.',
        'Khoury JD, et al. 5th edition WHO Classification of Haematolymphoid Tumours. Leukemia 2022.',
        'Arber DA, et al. International Consensus Classification of Myeloid Neoplasms and Acute Leukemias. Blood 2022.',
        'Sanz MA, et al. Management of APL: updated ELN recommendations. Blood 2019.'
      ]
    }
  },

  compares: {
    'lma-lla': {
      topic: 'leucemias', a: 'LMA', b: 'LLA',
      rows: [
        ['Edad típica', 'Adultos (~68 años)', 'Niños (2–5 años)'],
        ['Marcadores', 'Mieloperoxidasa, CD13, CD33, CD117', 'TdT, CD10, CD19 (B) o CD3 (T)'],
        ['Hallazgo morfológico', 'Bastones de Auer', 'Blastos pequeños sin gránulos'],
        ['Infiltración típica', 'Encías y piel (monocíticas)', 'SNC, testículo, mediastino (T)'],
        ['Alteración clave', 't(15;17) en LPA; NPM1, FLT3', 't(9;22) Filadelfia en adultos'],
        ['Complicación característica', 'CID en LPA', 'Lisis tumoral, recaída en SNC'],
        ['Tratamiento base', '“7+3”; ATRA + arsénico en LPA', 'Fases + profilaxis intratecal; ITK si Ph+'],
        ['Pronóstico', 'Curación ~30–40% en adultos', 'Curación ~90% en niños']
      ]
    }
  },

  cards: [
    ['Umbral clásico de blastos para leucemia aguda', '≥20% en médula o sangre'],
    ['Bastones de Auer', 'LMA (abundantes en LPA)'],
    ['t(15;17) PML::RARA', 'Leucemia promielocítica aguda'],
    ['Complicación hemorrágica de la LPA', 'CID'],
    ['Tratamiento de la LPA', 'ATRA + trióxido de arsénico, desde la sospecha'],
    ['Síndrome de diferenciación: tratamiento', 'Dexametasona'],
    ['Inducción clásica de LMA', '“7+3”: citarabina + antraciclina'],
    ['LMA en paciente no apto', 'Venetoclax + azacitidina'],
    ['Leucemia más común en niños', 'LLA'],
    ['LLA: sitios santuario', 'SNC y testículo'],
    ['Lisis tumoral: laboratorios', 'K ↑, fósforo ↑, ácido úrico ↑, calcio ↓'],
    ['SMD con del(5q)', 'Lenalidomida'],
    ['Único tratamiento curativo del SMD', 'Trasplante alogénico de progenitores hematopoyéticos'],
    ['Fiebre neutropénica', 'Antibiótico antipseudomonas en <60 minutos']
  ],

  questions: [
    q({ id: 'leucemias-01', dif: 2,
      stem: 'Hombre de 38 años con gingivorragia y equimosis. Hb 8, plaquetas 18,000, leucocitos 2,100. TP y TTPa prolongados, fibrinógeno 90, dímero D alto. Frotis con promielocitos cargados de bastones de Auer. ¿Qué haces primero?',
      opts: ['Esperar el resultado de PML::RARA', 'Iniciar ácido transretinoico (ATRA) de inmediato y soporte de la coagulopatía', 'Heparina para la CID', 'Inducción “7+3” sin ATRA', 'Esplenectomía'],
      ans: 1,
      exp: 'LPA con CID: la principal causa de muerte temprana es la hemorragia. Se inicia ATRA con la sospecha y se repone plaquetas y fibrinógeno.',
      why: ['El retraso aumenta la mortalidad por sangrado.', '', 'No se usa en la CID de la LPA.', 'La LPA se trata con ATRA ± arsénico.', 'No tiene papel.'],
      ref: 'ELN APL 2019' }),

    q({ id: 'leucemias-02', dif: 2,
      stem: 'Al quinto día de ATRA, el paciente con LPA presenta fiebre, disnea, infiltrados pulmonares, derrame pleural y aumento de 4 kg. ¿Diagnóstico y manejo?',
      opts: ['Neumonía; solo antibióticos', 'Síndrome de diferenciación; dexametasona', 'Edema por IC; solo diuréticos', 'Leucostasis; leucoféresis', 'Toxicidad por arsénico; suspender todo'],
      ans: 1,
      exp: 'El síndrome de diferenciación aparece en días a semanas tras ATRA o arsénico. Se trata con dexametasona 10 mg cada 12 h; se suspende temporalmente el fármaco solo si es grave.',
      why: ['No explica el aumento de peso ni el contexto.', '', 'No explica la fiebre ni el contexto.', 'No es la causa en este momento.', 'No se suspende de entrada.'],
      ref: 'ELN APL 2019' }),

    q({ id: 'leucemias-03', dif: 1,
      stem: 'Niño de 4 años con palidez, petequias, dolor óseo y hepatoesplenomegalia. Blastos TdT+, CD10+, CD19+. ¿Diagnóstico?',
      opts: ['LMA', 'LLA de precursores B', 'LLC', 'Linfoma de Hodgkin', 'Neuroblastoma'],
      ans: 1,
      exp: 'TdT marca blastos linfoides inmaduros; CD10 y CD19 indican estirpe B. Es la leucemia más común en la infancia.',
      why: ['Sería mieloperoxidasa positiva.', '', 'Es de adultos mayores y con células maduras.', 'No es leucemia.', 'No expresa estos marcadores.'],
      ref: 'OMS 2022' }),

    q({ id: 'leucemias-04', dif: 2,
      stem: 'Hombre de 70 años con LMA de diagnóstico reciente, ECOG 3 y cardiopatía grave. No es candidato a quimioterapia intensiva. ¿Tratamiento recomendado?',
      opts: ['“7+3”', 'Venetoclax + azacitidina', 'Solo cuidados paliativos sin tratamiento', 'ATRA', 'Imatinib'],
      ans: 1,
      exp: 'En LMA no apta para quimioterapia intensiva, venetoclax + azacitidina mejoró la supervivencia frente a azacitidina sola (VIALE-A).',
      why: ['Toxicidad inaceptable en este paciente.', '', 'Hay opción eficaz de menor intensidad.', 'Solo en LPA.', 'Es para leucemias BCR::ABL1.'],
      ref: 'VIALE-A, NEJM 2020 · ELN 2022' }),

    q({ id: 'leucemias-05', dif: 2,
      stem: 'Paciente con LLA y leucocitos de 180,000 inicia quimioterapia. A las 36 h: K 6.8, fósforo 9, calcio 6.5, ácido úrico 14, creatinina 2.9. ¿Diagnóstico?',
      opts: ['Hipercalcemia maligna', 'Síndrome de lisis tumoral', 'SIADH', 'Insuficiencia suprarrenal', 'Rabdomiólisis por estatinas'],
      ans: 1,
      exp: 'La destrucción masiva de células libera potasio, fósforo y ácido nucleico (ácido úrico). El fósforo atrapa calcio. Manejo: hidratación agresiva, rasburicasa, tratar la hiperkalemia, diálisis si es necesario.',
      why: ['El calcio está bajo.', '', 'No explica el patrón.', 'No explica fósforo y ácido úrico.', 'No hay estatina ni CK.'],
      ref: 'Cairo-Bishop · Harrison 21e' }),

    q({ id: 'leucemias-06', dif: 2,
      stem: 'Mujer de 74 años con anemia macrocítica, leucopenia y plaquetas 90,000. B12 y folato normales. Frotis con neutrófilos hiposegmentados e hipogranulares. Médula con displasia en 2 líneas y 4% de blastos. ¿Diagnóstico?',
      opts: ['LMA', 'Síndrome mielodisplásico', 'Anemia perniciosa', 'Aplasia medular', 'LLC'],
      ans: 1,
      exp: 'Citopenias + displasia + blastos <20% en un adulto mayor: SMD. Los neutrófilos pseudo-Pelger-Huët son característicos.',
      why: ['Requiere ≥20% de blastos (salvo genética definitoria).', '', 'B12 normal y no hay hipersegmentación.', 'La médula estaría hipocelular sin displasia.', 'Daría linfocitosis.'],
      ref: 'OMS 2022' }),

    q({ id: 'leucemias-07', dif: 2,
      stem: 'Paciente con SMD de bajo riesgo, dependiente de transfusiones, con deleción aislada del brazo largo del cromosoma 5. ¿Fármaco de elección?',
      opts: ['Lenalidomida', 'Imatinib', 'ATRA', 'Rituximab', 'Hidroxiurea'],
      ans: 0,
      exp: 'El SMD con del(5q) aislada responde muy bien a lenalidomida, con independencia transfusional en una gran proporción.',
      why: ['', 'Es para BCR::ABL1.', 'Es para LPA.', 'Es para linfomas B.', 'No es tratamiento del SMD.'],
      ref: 'NCCN MDS' }),

    q({ id: 'leucemias-08', dif: 1,
      stem: 'Paciente en quimioterapia de inducción por LMA con neutrófilos de 200/µL y fiebre de 38.6 °C. Estable. ¿Qué haces?',
      opts: ['Esperar resultados de cultivos', 'Hemocultivos y cefepime (u otro antipseudomonas) en menos de 1 hora', 'Paracetamol y vigilar', 'Factor estimulante de colonias solo', 'Vancomicina sola'],
      ans: 1,
      exp: 'Fiebre neutropénica: urgencia. Antibiótico de amplio espectro con cobertura contra Pseudomonas en la primera hora; vancomicina solo con indicaciones específicas (catéter infectado, piel, inestabilidad, MRSA).',
      why: ['El retraso aumenta la mortalidad.', '', 'Insuficiente.', 'No sustituye al antibiótico.', 'No cubre gramnegativos.'],
      ref: 'IDSA/ASCO fiebre neutropénica' }),

    q({ id: 'leucemias-09', dif: 3,
      stem: 'Adulto de 45 años con LLA de precursores B. La citogenética muestra t(9;22). ¿Qué agregas a la quimioterapia?',
      opts: ['ATRA', 'Inhibidor de tirosina cinasa (dasatinib o ponatinib)', 'Lenalidomida', 'Midostaurina', 'Nada; no cambia el tratamiento'],
      ans: 1,
      exp: 'La LLA Filadelfia positiva (BCR::ABL1) se trata con inhibidor de tirosina cinasa junto con quimioterapia o blinatumomab, con mejor pronóstico que en la era previa.',
      why: ['Solo en LPA.', '', 'Para SMD del(5q) y mieloma.', 'Para LMA con FLT3.', 'Cambia el tratamiento y el pronóstico.'],
      ref: 'NCCN ALL' }),

    q({ id: 'leucemias-10', dif: 2,
      stem: 'Hombre de 60 años con LMA y leucocitos de 160,000 presenta disnea, SpO2 86% y confusión. Rx con infiltrados difusos. ¿Qué sospechas?',
      opts: ['Síndrome de diferenciación', 'Leucostasis', 'Neumonía por Pneumocystis', 'TEP', 'Hemorragia alveolar por PTI'],
      ans: 1,
      exp: 'Hiperleucocitosis (>100,000) con afección pulmonar y neurológica: leucostasis. Requiere citorreducción urgente (hidroxiurea e inducción); la leucoféresis tiene papel limitado.',
      why: ['Requiere ATRA o arsénico.', '', 'No explica el contexto agudo con hiperleucocitosis.', 'No explica la confusión ni los infiltrados.', 'No es PTI.'],
      ref: 'ELN 2022' })
  ],

  cases: [
    { id: 'g-leucemias', topic: 'leucemias', subj: 'hemato',
      title: 'Encías que no dejan de sangrar', place: 'Urgencias',
      patient: { name: 'Andrés', age: 38, sex: 'H', skin: '#C98E66', hair: '#1A1412', gown: '#FF8FD0' },
      intro: 'Lleva una semana con cansancio y moretones. Hoy no le para el sangrado de las encías tras cepillarse.',
      extra: { label: 'FIB', unit: 'mg/dL' },
      start: { FC: 104, PAS: 118, PAD: 70, SpO2: 98, FR: 18, X: 88 },
      nodes: [
        { tag: 'BH', ecg: 'tachy',
          text: 'Hb 8.1, plaquetas 16,000, leucocitos 1,800. TP y TTPa prolongados, dímero D muy alto. El frotis muestra promielocitos con múltiples bastones de Auer.',
          q: '¿Qué indicas ahora?',
          A: { t: 'Ácido transretinoico (ATRA) hoy mismo', ok: true, res: 'Se inicia ATRA a las 2 horas de llegar.' },
          B: { t: 'Esperar el PML::RARA para confirmar', ok: false, res: 'A las 18 h presenta cefalea intensa: hemorragia intracraneal.', vit: { PAS: 168, PAD: 98 } },
          why: 'En la LPA, el ATRA se inicia con la sospecha morfológica: la muerte temprana es por hemorragia.' },
        { tag: 'Coagulopatía', ecg: 'tachy',
          text: 'Fibrinógeno 88 mg/dL, plaquetas 16,000, sangrado gingival activo.',
          q: '¿Cómo manejas la CID?',
          A: { t: 'Heparina en infusión', ok: false, res: 'Aumenta el sangrado.' },
          B: { t: 'Crioprecipitado (fibrinógeno >150) y plaquetas (>30–50 mil)', ok: true, res: 'Fibrinógeno 168; el sangrado cede.', vit: { X: 168 } },
          why: 'En la LPA se repone agresivamente: plaquetas, fibrinógeno y plasma, mientras el ATRA corrige la coagulopatía.' },
        { tag: 'Día 6', ecg: 'tachy', vit: { FC: 116, SpO2: 89, FR: 28 },
          text: 'Fiebre de 38.4 °C, disnea, infiltrados bilaterales y derrame pleural; subió 4 kg. Creatinina en aumento.',
          q: '¿Qué agregas?',
          A: { t: 'Dexametasona 10 mg IV cada 12 h', ok: true, res: 'A las 48 h mejora la oxigenación.', vit: { FC: 94, SpO2: 95, FR: 20 } },
          B: { t: 'Suspender el ATRA de forma definitiva', ok: false, res: 'Pierdes el tratamiento que cura la enfermedad.' },
          why: 'Síndrome de diferenciación: dexametasona; el ATRA solo se pausa si es grave.' }
      ] }
  ]
};
