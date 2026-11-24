// Práctica de Gastroenterología (semanas 7 a 11): algoritmos con casos, guardias con monitor y simuladores de un control.
export default {
  algos: {
    eiibrote: {
      title: 'EII: ¿Crohn o CUCI, y qué tan grave?', topics: ['eii'], start: 'tipo',
      nodes: {
        tipo: { q: 'Colonoscopia y biopsia:', opts: [{ t: 'Desde el recto, continua, abscesos de criptas', go: 'tw' }, { t: 'Salteada, íleon terminal, granulomas, fístulas', go: 'crohn' }] },
        tw: { q: 'CUCI: ¿6 o más evacuaciones con sangre + FC >90, T >37.8, Hb <10.5 o VSG >30?', opts: [{ t: 'No: leve a moderada', go: 'leve' }, { t: 'Sí: grave', go: 'grave' }] },
        grave: { q: 'Metilprednisolona IV, descartar C. difficile y CMV. ¿Al día 3?', opts: [{ t: 'Responde', go: 'resp' }, { t: 'No responde', go: 'resc' }, { t: 'Colon transverso de 7 cm con toxicidad o perforación', go: 'cir' }] },
        crohn: { q: 'Crohn: ¿qué predomina?', opts: [{ t: 'Ileocecal leve', go: 'bude' }, { t: 'Fístula perianal', go: 'peri' }, { t: 'Moderado a grave', go: 'bio' }] },
        leve: { end: 'Mesalazina oral + rectal', d: 'Supositorio en proctitis, enema en colitis izquierda. Sin respuesta: budesonida MMX o prednisona.' },
        resp: { end: 'Pasar a esteroide oral y planear mantenimiento', d: 'Reducción gradual del esteroide; mantenimiento con tiopurina o biológico (nunca esteroide).' },
        resc: { end: 'Rescate con infliximab o ciclosporina', d: 'Antes del infliximab: TB latente y VHB. Si falla el rescate: colectomía.' },
        cir: { end: 'Colectomía', d: 'Megacolon tóxico que no mejora o perforación. En CUCI la colectomía es curativa.' },
        bude: { end: 'Budesonida', d: 'Esteroide de acción local con poco efecto sistémico.' },
        peri: { end: 'Drenaje + setón + antibiótico + anti-TNF', d: 'Busca absceso con RM pélvica antes de iniciar el biológico.' },
        bio: { end: 'Biológico temprano ± inmunomodulador', d: 'Anti-TNF, vedolizumab o ustekinumab. La mesalazina casi no sirve en Crohn.' }
      },
      cases: [
        { t: 'Andrés, 24 años, con 10 evacuaciones con sangre; al día 3 de metilprednisolona sigue igual.', data: [['Endoscopia', 'Continua desde el recto'], ['FC', '112'], ['Hb', '9.8'], ['Día 3', '9 evacuaciones, PCR alta']], path: { tipo: 0, tw: 1, grave: 1 }, end: 'resc' },
        { t: 'Mujer de 35 años con 4 evacuaciones con algo de sangre y urgencia.', data: [['Endoscopia', 'Recto y sigmoides, continua'], ['FC', '78'], ['Hb', '12.6']], path: { tipo: 0, tw: 0 }, end: 'leve' },
        { t: 'Hombre de 28 años con dolor en FID y fístula perianal que supura.', data: [['Endoscopia', 'Íleon con úlceras en parches'], ['Biopsia', 'Granulomas no caseificantes'], ['RM', 'Fístula transesfinteriana']], path: { tipo: 1, crohn: 1 }, end: 'peri' },
        { t: 'Mujer con CUCI grave, distensión, fiebre y FC de 130.', data: [['Rx', 'Colon transverso de 8 cm'], ['A las 48 h', 'Sin mejoría']], path: { tipo: 0, tw: 1, grave: 2 }, end: 'cir' }
      ]
    },
    ccrtam: {
      title: 'Cáncer colorrectal: ¿cuándo tamizar?', topics: ['ccr'], start: 'sint',
      nodes: {
        sint: { q: '¿Tiene síntomas o datos de alarma (anemia ferropénica, sangrado, cambio de hábito)?', opts: [{ t: 'Sí', go: 'colo' }, { t: 'No: es tamizaje', go: 'riesgo' }] },
        riesgo: { q: '¿Qué antecedente tiene?', opts: [{ t: 'Ninguno', go: 'prom' }, { t: 'Familiar de 1er grado con CCR antes de los 60', go: 'fam' }, { t: 'Síndrome de Lynch', go: 'lynch' }, { t: 'CUCI extensa de 8 años o más', go: 'eii' }] },
        colo: { end: 'Colonoscopia diagnóstica ya', d: 'No es tamizaje. Anemia ferropénica en hombre o posmenopáusica: colonoscopia y endoscopia alta.' },
        prom: { end: 'Desde los 45: colonoscopia c/10 años o FIT anual', d: 'Hasta los 75; de 76 a 85, individualizar. FIT positivo: colonoscopia.' },
        fam: { end: 'A los 40 o 10 años antes del familiar; colonoscopia c/5 años', d: 'Lo que ocurra primero.' },
        lynch: { end: 'Desde los 20 a 25: colonoscopia c/1 a 2 años', d: 'También vigilancia de endometrio y ovario.' },
        eii: { end: 'Colonoscopia de vigilancia c/1 a 3 años', d: 'Anual si hay colangitis esclerosante primaria.' }
      },
      cases: [
        { t: 'Don Javier, 63 años, con cansancio.', data: [['Hb', '8.9'], ['VCM', '71'], ['Ferritina', '6']], path: { sint: 0 }, end: 'colo' },
        { t: 'Mujer de 46 años, asintomática, sin antecedentes.', data: [['Antecedente familiar', 'Ninguno']], path: { sint: 1, riesgo: 0 }, end: 'prom' },
        { t: 'Hombre de 35 años cuyo padre tuvo cáncer de colon a los 48.', data: [['Síntomas', 'Ninguno']], path: { sint: 1, riesgo: 1 }, end: 'fam' },
        { t: 'Mujer de 23 años con mutación MSH2 en la familia, portadora.', data: [['Síntomas', 'Ninguno']], path: { sint: 1, riesgo: 2 }, end: 'lynch' },
        { t: 'Hombre con pancolitis ulcerosa desde hace 10 años y colangitis esclerosante.', data: [['Síntomas', 'En remisión']], path: { sint: 1, riesgo: 3 }, end: 'eii' }
      ]
    },
    hbsero: {
      title: 'Serología de la hepatitis B', topics: ['hepatitis'], start: 'hbsag',
      nodes: {
        hbsag: { q: 'HBsAg:', opts: [{ t: 'Positivo', go: 'igm' }, { t: 'Negativo', go: 'core' }] },
        igm: { q: 'HBsAg positivo: ¿anti-HBc IgM?', opts: [{ t: 'Positivo', go: 'aguda' }, { t: 'Negativo y HBsAg más de 6 meses', go: 'cronica' }] },
        core: { q: 'HBsAg negativo: ¿anti-HBc?', opts: [{ t: 'Negativo', go: 'antis' }, { t: 'Positivo total con anti-HBs positivo', go: 'resuelta' }, { t: 'Solo IgM positiva, anti-HBs negativo', go: 'ventana' }] },
        antis: { q: 'Anti-HBc negativo: ¿anti-HBs?', opts: [{ t: 'Positivo', go: 'vac' }, { t: 'Negativo', go: 'nunca' }] },
        aguda: { end: 'Hepatitis B aguda', d: 'Soporte; vigila INR y encefalopatía. Vacuna + HBIG a contactos no inmunes.' },
        cronica: { end: 'Hepatitis B crónica', d: 'Mide ADN y ALT; tenofovir o entecavir si hay replicación con daño. USG cada 6 meses.' },
        resuelta: { end: 'Infección resuelta', d: 'Inmune por infección. Puede reactivarse con rituximab o quimioterapia.' },
        ventana: { end: 'Periodo de ventana: infección aguda', d: 'El HBsAg ya se negativizó y el anti-HBs aún no aparece.' },
        vac: { end: 'Vacunado', d: 'La vacuna solo genera anti-HBs.' },
        nunca: { end: 'Nunca expuesto: vacunar', d: 'Susceptible.' }
      },
      cases: [
        { t: 'Mauricio, 26 años, con ictericia y ALT de 2400.', data: [['HBsAg', '+'], ['Anti-HBc IgM', '+']], path: { hbsag: 0, igm: 0 }, end: 'aguda' },
        { t: 'Enfermera en examen de ingreso.', data: [['HBsAg', '−'], ['Anti-HBc', '−'], ['Anti-HBs', '+']], path: { hbsag: 1, core: 0, antis: 0 }, end: 'vac' },
        { t: 'Hombre antes de iniciar rituximab.', data: [['HBsAg', '−'], ['Anti-HBc total', '+'], ['Anti-HBs', '+']], path: { hbsag: 1, core: 1 }, end: 'resuelta' },
        { t: 'Mujer con HBsAg positivo desde hace 2 años.', data: [['HBsAg', '+ (2 años)'], ['Anti-HBc IgM', '−'], ['ADN VHB', '45 000 UI/mL'], ['ALT', '2 veces lo normal']], path: { hbsag: 0, igm: 1 }, end: 'cronica' },
        { t: 'Hombre que se recupera de una hepatitis aguda.', data: [['HBsAg', '−'], ['Anti-HBs', '−'], ['Anti-HBc IgM', '+']], path: { hbsag: 1, core: 2 }, end: 'ventana' }
      ]
    },
    cirrcomp: {
      title: 'Cirrótico descompensado: ¿qué complicación?', topics: ['cirrosis'], start: 'que',
      nodes: {
        que: { q: '¿Qué tiene?', opts: [{ t: 'Hematemesis', go: 'var' }, { t: 'Ascitis con fiebre o dolor', go: 'pmn' }, { t: 'Confusión y asterixis', go: 'ence' }, { t: 'Creatinina que sube', go: 'riñon' }] },
        pmn: { q: 'Paracentesis: ¿PMN en el líquido?', opts: [{ t: '250 o más', go: 'pbe' }, { t: 'Menos de 250', go: 'nopbe' }] },
        riñon: { q: 'Suspender diuréticos y albúmina 1 g/kg por 2 días. ¿Mejora?', opts: [{ t: 'Sí', go: 'pre' }, { t: 'No, sin choque ni nefrotóxicos, sedimento normal', go: 'shr' }] },
        var: { end: 'Vasoactivo + ceftriaxona + ligadura en 12 h', d: 'Octreotida o terlipresina, transfusión a Hb 7, intubar si hay riesgo de aspiración. Child C: TIPS preventivo.' },
        pbe: { end: 'PBE: ceftriaxona + albúmina', d: 'Albúmina 1.5 g/kg el día 1 y 1 g/kg el día 3. Después, profilaxis.' },
        nopbe: { end: 'No es PBE', d: 'Busca otra fuente de fiebre. Si hay varios gérmenes o glucosa baja en el líquido, piensa en peritonitis secundaria: TC.' },
        ence: { end: 'Encefalopatía: lactulosa y desencadenante', d: 'Busca sangrado, infección, estreñimiento, hipokalemia, sedantes. Rifaximina para recurrencias.' },
        pre: { end: 'LRA prerrenal', d: 'Respondió al volumen: probablemente por diuréticos o pérdidas.' },
        shr: { end: 'Síndrome hepatorrenal', d: 'Terlipresina + albúmina; trasplante.' }
      },
      cases: [
        { t: 'Héctor, 54 años, con hematemesis abundante.', data: [['PA', '88/50'], ['Hb', '7.2']], path: { que: 0 }, end: 'var' },
        { t: 'Mujer cirrótica con fiebre y dolor abdominal difuso.', data: [['PMN en ascitis', '480/mm³'], ['Cultivo', 'Pendiente']], path: { que: 1, pmn: 0 }, end: 'pbe' },
        { t: 'Hombre cirrótico, confuso tras 4 días sin evacuar.', data: [['Asterixis', 'Sí'], ['K', '3.1']], path: { que: 2 }, end: 'ence' },
        { t: 'Hombre cirrótico con creatinina de 2.6 que no baja tras 2 días de albúmina.', data: [['Sedimento', 'Normal'], ['Choque', 'No'], ['Nefrotóxicos', 'No']], path: { que: 3, riñon: 1 }, end: 'shr' }
      ]
    },
    diverti: {
      title: 'Enfermedad diverticular: ¿duele o sangra?', topics: ['diverticular'], start: 'clin',
      nodes: {
        clin: { q: '¿Cómo se presenta?', opts: [{ t: 'Dolor en FII, fiebre, leucocitosis', go: 'tc' }, { t: 'Hematoquecia abundante sin dolor', go: 'hemo' }] },
        tc: { q: 'TC con contraste:', opts: [{ t: 'Inflamación sin absceso ni aire', go: 'nocomp' }, { t: 'Absceso mayor de 4 cm', go: 'abs' }, { t: 'Aire libre y peritonitis', go: 'cir' }] },
        hemo: { q: '¿Está estable tras la reanimación?', opts: [{ t: 'Sí', go: 'colo' }, { t: 'No', go: 'angio' }] },
        nocomp: { end: 'No complicada: manejo ambulatorio', d: 'Dieta líquida y analgesia; antibiótico solo si hay riesgo. Colonoscopia en 6 a 8 semanas.' },
        abs: { end: 'Antibiótico IV + drenaje percutáneo', d: 'Hinchey I a II. Abscesos pequeños pueden manejarse solo con antibiótico.' },
        cir: { end: 'Cirugía: Hartmann o resección', d: 'Hinchey III o IV.' },
        colo: { end: 'Colonoscopia en 24 h tras preparación', d: 'Diagnóstica y terapéutica (clips).' },
        angio: { end: 'Angio-TC y embolización', d: 'Si persiste, cirugía. En sangrado masivo descarta primero una fuente alta.' }
      },
      cases: [
        { t: 'Don Julio, 64 años, con dolor en FII y fiebre.', data: [['TC', 'Absceso pericólico de 5 cm']], path: { clin: 0, tc: 1 }, end: 'abs' },
        { t: 'Mujer de 55 años con dolor leve en FII, tolera la vía oral.', data: [['TC', 'Engrosamiento sigmoides, sin absceso'], ['Leucocitos', '11 500']], path: { clin: 0, tc: 0 }, end: 'nocomp' },
        { t: 'Hombre de 70 años con abdomen en tabla.', data: [['TC', 'Aire libre y líquido fecaloide']], path: { clin: 0, tc: 2 }, end: 'cir' },
        { t: 'Mujer de 78 años con hematoquecia abundante, PA 86/50 pese a volumen.', data: [['Dolor', 'No']], path: { clin: 1, hemo: 1 }, end: 'angio' },
        { t: 'Hombre de 72 años con hematoquecia que se detuvo; PA normal.', data: [['Hb', '10.8'], ['Dolor', 'No']], path: { clin: 1, hemo: 0 }, end: 'colo' }
      ]
    }
  },
  sliders: {
    meld: { title: 'Cirrosis: el MELD', topics: ['cirrosis', 'hepatitis'], label: 'MELD-Na', unit: 'puntos', min: 6, max: 40, step: 1, start: 14,
      intro: 'MELD usa bilirrubina, INR, creatinina y sodio. Predice mortalidad a 90 días y ordena la lista de trasplante.',
      bands: [[9, 'Menos de 10', 'ok', 'Mortalidad a 90 días cercana a 2%. Vigila, tamiza hepatocarcinoma y várices.'], [14, '10 a 14', 'warn', 'Riesgo moderado. Aún sin prioridad de trasplante, pero ya con seguimiento estrecho.'], [19, '15 a 19', 'warn', 'Referir a centro de trasplante: con MELD 15 o más el trasplante mejora la supervivencia.'], [29, '20 a 29', 'bad', 'Mortalidad a 90 días de 6 a 20%. En hepatitis alcohólica, MELD mayor de 20 indica gravedad (valorar prednisolona).'], [40, '30 o más', 'bad', 'Mortalidad a 90 días mayor de 50%: prioridad alta en la lista de trasplante.']] }
  },
  cases: [
    { id: 'g-cirrosis', topic: 'cirrosis', subj: 'gastro',
      title: 'Sangre y somnolencia', place: 'Urgencias',
      patient: { name: 'Héctor', age: 54, sex: 'H', skin: '#C98B62', hair: '#9A9A9A', gown: '#5BA7E0' },
      intro: 'Cirrosis por alcohol con ascitis. Hematemesis abundante hace una hora. Somnoliento, con asterixis.',
      extra: { label: 'Hb', unit: 'g/dL' },
      start: { FC: 120, PAS: 88, PAD: 50, SpO2: 94, FR: 24, X: 7.2 },
      nodes: [
        { tag: 'Llegada', ecg: 'tachy',
          text: 'Sigue vomitando sangre. Glasgow 12.',
          q: '¿Qué haces primero?',
          A: { t: 'Intubar para proteger la vía aérea y dos vías gruesas', ok: true, res: 'Intubado sin broncoaspiración.' },
          B: { t: 'Endoscopia de inmediato sin intubar', ok: false, res: 'Broncoaspira durante el procedimiento.', vit: { SpO2: 84 } },
          why: 'Hematemesis activa con alteración del alerta: proteger la vía aérea antes de la endoscopia.' },
        { tag: 'Fármacos', ecg: 'tachy',
          text: 'Hb 7.2. PA 88/50 tras cristaloide.',
          q: '¿Qué indicas?',
          A: { t: 'Transfundir hasta Hb de 10 y esperar', ok: false, res: 'Sube la presión portal y resangra.', vit: { X: 6.8, PAS: 80 } },
          B: { t: 'Terlipresina u octreotida, ceftriaxona 1 g, transfusión a Hb 7 a 8', ok: true, res: 'PA 102/60.', vit: { PAS: 102, PAD: 60, FC: 106, X: 7.9 } },
          why: 'Vasoactivo + ceftriaxona + transfusión restrictiva.' },
        { tag: 'Hora 6', ecg: 'tachy', vit: { FC: 102 },
          text: 'Estable con vasoactivo.',
          q: '¿Cuándo la endoscopia y qué hacer en ella?',
          A: { t: 'En las primeras 12 h, con ligadura de várices', ok: true, res: 'Várices esofágicas grandes con estigma: se ligan.' },
          B: { t: 'En una semana, cuando esté mejor', ok: false, res: 'Resangra al día 2.', vit: { X: 6.5 } },
          why: 'Endoscopia en 12 h o menos con ligadura.' },
        { tag: 'Día 2', ecg: 'normal', vit: { FC: 90, PAS: 112, PAD: 66, SpO2: 97, FR: 16, X: 8.4 },
          text: 'Extubado. Child-Pugh C (11 puntos). Somnolencia leve, 2 días sin evacuar.',
          q: '¿Qué agregas?',
          A: { t: 'Lactulosa y valorar TIPS preventivo en 72 h', ok: true, res: 'Recibe TIPS el día 3 y egresa sin resangrado, con lactulosa, abstinencia y referencia a trasplante.' },
          B: { t: 'Diazepam para que duerma', ok: false, res: 'Cae en coma hepático.' },
          why: 'Encefalopatía: lactulosa. Child C con sangrado variceal: TIPS preventivo en 72 h.' }
      ] },
    { id: 'g-eii', topic: 'eii', subj: 'gastro',
      title: 'Diez veces al día', place: 'Urgencias',
      patient: { name: 'Andrés', age: 24, sex: 'H', skin: '#C98B62', hair: '#2A1A12', gown: '#FF9B3D' },
      intro: 'CUCI diagnosticada hace 3 meses, con mesalazina. Hoy 10 evacuaciones con sangre al día.',
      extra: { label: 'Evac.', unit: '/día' },
      start: { FC: 112, PAS: 112, PAD: 70, SpO2: 98, FR: 20, X: 10 },
      nodes: [
        { tag: 'Llegada', ecg: 'tachy',
          text: 'T 38.4, Hb 9.8, PCR alta.',
          q: '¿Qué haces?',
          A: { t: 'Hospitalizar, metilprednisolona IV, profilaxis de TEV y descartar C. difficile', ok: true, res: 'Toxina de C. difficile negativa.' },
          B: { t: 'Subir la mesalazina y cita en una semana', ok: false, res: 'Regresa en 3 días con distensión.', vit: { FC: 128, X: 14 } },
          why: 'CUCI grave por Truelove y Witts: hospitalizar con esteroide IV.' },
        { tag: 'Día 3', ecg: 'tachy', vit: { X: 9 },
          text: 'Sigue con 9 evacuaciones y PCR alta.',
          q: '¿Qué sigue?',
          A: { t: 'Infliximab de rescate, tras descartar TB latente y VHB', ok: true, res: 'A las 48 h baja a 4 evacuaciones.', vit: { FC: 92, X: 4 } },
          B: { t: 'Continuar esteroide otra semana', ok: false, res: 'Se dilata el colon a 7 cm.', vit: { FC: 130 } },
          why: 'Sin respuesta al día 3 de esteroide IV: rescate con infliximab o ciclosporina.' },
        { tag: 'Día 5', ecg: 'normal', vit: { FC: 84, X: 3 },
          text: 'Mejor. Pide algo para la diarrea.',
          q: '¿Le das loperamida?',
          A: { t: 'Sí, para que esté cómodo', ok: false, res: 'Distensión dolorosa: riesgo de megacolon.' },
          B: { t: 'No: los antidiarreicos y opioides favorecen el megacolon', ok: true, res: 'Sigue mejorando sin ellos.' },
          why: 'En colitis grave se evitan antidiarreicos, opioides y anticolinérgicos.' },
        { tag: 'Al egreso', ecg: 'normal', vit: { FC: 78, PAS: 118, PAD: 74, X: 2 },
          text: 'Remisión clínica.',
          q: '¿Cómo lo mantienes?',
          A: { t: 'Prednisona de mantenimiento indefinida', ok: false, res: 'Diabetes esteroidea y osteoporosis en un año.' },
          B: { t: 'Infliximab de mantenimiento y retiro gradual del esteroide', ok: true, res: 'Sigue en remisión a los 6 meses.' },
          why: 'Los esteroides no mantienen la remisión.' }
      ] }
  ]
};
