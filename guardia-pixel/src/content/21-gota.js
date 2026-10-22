// Tema 12 · Gota y pseudogota (Reumatología, semana 3)
const T = { topic: 'gota', subj: 'reuma' };
const q = (o) => ({ ...T, ...o });

export default {
  lessons: {
    gota: {
      hook: 'El examen gira en tres cosas: los cristales (agujas negativas vs romboides positivos), cómo apagar un ataque según el paciente y cuándo iniciar alopurinol con meta <6.',
      anim: 'gota',
      compare: ['gota-pseudo'],
      nn: [['gout-nclex', 'Gout (NCLEX)']],
      yt: 'gout pseudogout',
      sections: [
        { h: 'Fisiopatología', html: `
<ul>
<li>El urato se satura por arriba de <b>6.8 mg/dL</b> y precipita como cristales de urato monosódico.</li>
<li>~90% por <b>baja excreción renal</b>; ~10% por sobreproducción (lisis tumoral, mieloproliferativos, psoriasis, Lesch-Nyhan).</li>
<li><b>Factores</b>: alcohol (sobre todo cerveza), carnes rojas, mariscos, refrescos con fructosa, obesidad, síndrome metabólico, ERC, diuréticos (tiazidas y de asa), aspirina a dosis baja, ciclosporina, pirazinamida, etambutol.</li>
<li><b>Desencadenantes</b> de ataque: cambios bruscos del urato (incluido iniciar alopurinol), cirugía, deshidratación, borrachera, trauma.</li>
<li>Los cristales activan el inflamasoma NLRP3 de los macrófagos → IL-1β → ataque inflamatorio intenso.</li>
</ul>` },
        { h: 'Clínica y diagnóstico', html: `
<ul>
<li><b>Podagra</b> (1ª MTF): monoartritis aguda, muy dolorosa, roja y caliente, típicamente nocturna. También tobillo, rodilla, muñeca.</li>
<li><b>Tofos</b> (pabellón auricular, codos, Aquiles), gota tofácea crónica; litiasis de ácido úrico (radiolúcida); nefropatía por urato.</li>
<li><b>Artrocentesis</b>: cristales en aguja con <b>birrefringencia negativa</b> (amarillos paralelos al eje del compensador). Siempre Gram y cultivo: gota e infección pueden coexistir.</li>
<li>El ácido úrico sérico puede estar normal durante el ataque: no lo descarta.</li>
<li><b>Imagen</b>: Rx tardía con erosiones en “sacabocado” de borde colgante; USG con signo del doble contorno; TC de doble energía.</li>
</ul>` },
        { h: 'Ataque agudo', html: `
<ul>
<li>Tratar en las primeras 24 h. Elige según el paciente:</li>
<li><b>Colchicina a dosis baja</b>: 1.2 mg y 0.6 mg una hora después (dosis total 1.8 mg). Ajustar en ERC; interacción grave con claritromicina y otros inhibidores de CYP3A4/P-gp.</li>
<li><b>AINE a dosis plenas</b> (naproxeno, indometacina): evitarlos en ERC, úlcera, IC o anticoagulación.</li>
<li><b>Glucocorticoides</b>: prednisona 30–40 mg/día por 5 días, o intraarticular. Útiles en ERC o cuando no puede recibir AINE ni colchicina.</li>
<li>Refractarios: anti-IL-1 (anakinra, canakinumab).</li>
<li><b>No suspendas el alopurinol</b> si ya lo toma. El ACR 2020 permite iniciarlo durante el ataque.</li>
</ul>` },
        { h: 'Terapia para bajar el urato', html: `
<ul>
<li><b>Indicaciones fuertes</b> (ACR 2020): ≥1 tofo, daño radiográfico por gota o ≥2 ataques al año.</li>
<li><b>Condicionales</b>: más de 1 ataque previo pero &lt;2 al año; primer ataque con ERC ≥3, urato &gt;9 mg/dL o litiasis urinaria.</li>
<li><b>Alopurinol</b> (inhibe la xantina oxidasa) es de primera línea, incluso en ERC: iniciar ≤100 mg/día (menos en ERC avanzada) y subir cada 2–5 semanas hasta la meta.</li>
<li><b>Meta: urato &lt;6 mg/dL</b> (&lt;5 si hay tofos, según EULAR).</li>
<li><b>Profilaxis antiinflamatoria</b> (colchicina, AINE o prednisona a dosis baja) por 3–6 meses al iniciar.</li>
<li><b>HLA-B*58:01</b> antes del alopurinol en personas de origen coreano, chino han, tailandés o afrodescendientes (riesgo de Stevens-Johnson, NET o DRESS).</li>
<li><b>Febuxostat</b>: alternativa; advertencia de mortalidad cardiovascular (CARES): evitar si hay ECV. <b>Probenecid</b>: uricosúrico; no en litiasis ni ERC. <b>Pegloticasa</b>: gota refractaria; contraindicada en déficit de G6PD.</li>
<li>Losartán y fenofibrato bajan un poco el urato; cambia la tiazida si se puede.</li>
<li>Litiasis de ácido úrico: alcalinizar la orina con citrato de potasio.</li>
</ul>` },
        { h: 'Pseudogota (CPPD)', html: `
<ul>
<li>Cristales de pirofosfato de calcio <b>romboides con birrefringencia positiva débil</b> (azules paralelos al compensador).</li>
<li>Adultos mayores; rodilla y muñeca. Rx: <b>condrocalcinosis</b> (meniscos, fibrocartílago triangular).</li>
<li>Si aparece antes de los 60 años, busca causas: <b>hiperparatiroidismo, hemocromatosis, hipomagnesemia, hipofosfatasia</b>.</li>
<li>Ataque: AINE, colchicina o esteroide intraarticular. No hay tratamiento que disuelva los cristales.</li>
</ul>` }
      ],
      mnemo: { t: 'Agujas Amarillas Negativas = gota · Romboides Positivos = pseudogota', d: 'Urato: agujas, birrefringencia negativa, amarillas paralelas al compensador. Pirofosfato: romboides, positiva débil, azules paralelos. Para buscar causas de CPPD: las 4 H (Hiperparatiroidismo, Hemocromatosis, Hipomagnesemia, Hipofosfatasia).' },
      pearl: 'Un ácido úrico normal durante el ataque no descarta gota: puede bajar por la inflamación. El diagnóstico se hace con los cristales.',
      trap: 'Suspender el alopurinol durante un ataque o no dar profilaxis con colchicina al iniciarlo: ambas cosas provocan más ataques.',
      guide: [
        'Iniciar alopurinol durante el ataque: el ACR 2020 lo permite (recomendación condicional); libros antiguos dicen “esperar 2 semanas”. Si te preguntan con la guía actual, se puede iniciar.',
        'Meta de urato: ACR <6 mg/dL; EULAR <6 y <5 si hay tofos.'
      ],
      refs: [
        'FitzGerald JD, et al. 2020 American College of Rheumatology Guideline for the Management of Gout. Arthritis Care Res 2020.',
        'Richette P, et al. 2016 updated EULAR evidence-based recommendations for the management of gout. Ann Rheum Dis 2017.',
        'Rosenthal AK, Ryan LM. Calcium Pyrophosphate Deposition Disease. N Engl J Med 2016.'
      ]
    }
  },

  compares: {
    'gota-pseudo': {
      topic: 'gota', a: 'Gota', b: 'Pseudogota (CPPD)',
      rows: [
        ['Cristal', 'Urato monosódico', 'Pirofosfato de calcio'],
        ['Forma', 'Aguja', 'Romboide'],
        ['Birrefringencia', 'Negativa, intensa', 'Positiva, débil'],
        ['Articulación típica', '1ª MTF (podagra)', 'Rodilla, muñeca'],
        ['Edad y perfil', 'Hombre de edad media, síndrome metabólico', 'Adulto mayor'],
        ['Rx', 'Erosiones en sacabocado con borde colgante', 'Condrocalcinosis'],
        ['Asociaciones', 'Alcohol, diuréticos, ERC, obesidad', 'Hiperparatiroidismo, hemocromatosis, hipomagnesemia, hipofosfatasia'],
        ['Tratamiento a largo plazo', 'Alopurinol con meta de urato <6', 'No hay tratamiento que disuelva cristales']
      ]
    }
  },

  anims: {
    gota: {
      title: 'Cristales, inflamación y alopurinol',
      steps: [
        { cap: '<b>Urato en exceso.</b> Las purinas se convierten en xantina y luego en ácido úrico gracias a la xantina oxidasa. Por arriba de 6.8 mg/dL el urato ya no cabe disuelto.',
          labels: [[30, 14, 'Purinas'], [80, 14, 'Xantina oxidasa'], [130, 14, 'Ácido úrico']] },
        { cap: '<b>Precipitación.</b> En articulaciones frías y periféricas (el dedo gordo del pie), el urato cristaliza en forma de agujas dentro del líquido sinovial.',
          labels: [[80, 104, 'Cristales en aguja'], [24, 60, '1ª MTF']] },
        { cap: '<b>Ataque.</b> Los macrófagos fagocitan los cristales y activan el inflamasoma: liberan IL-1β y llegan neutrófilos. La articulación se pone roja, caliente y muy dolorosa.',
          labels: [[40, 40, 'Macrófago'], [120, 40, 'IL-1β'], [80, 104, 'Neutrófilos']] },
        { cap: '<b>Colchicina.</b> Bloquea los microtúbulos de los neutrófilos: no pueden migrar ni amplificar la inflamación. Por eso funciona mejor en las primeras horas.',
          labels: [[80, 104, 'Microtúbulos ✕'], [120, 40, 'Menos inflamación']] },
        { cap: '<b>Alopurinol.</b> Inhibe la xantina oxidasa: se forma menos ácido úrico y, con el tiempo, los cristales se disuelven. Meta: urato <6 mg/dL.',
          labels: [[80, 14, 'Xantina oxidasa ✕'], [130, 104, 'Urato <6']] }
      ]
    }
  },

  cards: [
    ['Cristal de la gota', 'Urato monosódico: aguja, birrefringencia negativa'],
    ['Cristal de la pseudogota', 'Pirofosfato de calcio: romboide, birrefringencia positiva débil'],
    ['Colchicina en el ataque', '1.2 mg y 0.6 mg una hora después; cuidado con claritromicina'],
    ['Ataque de gota en un paciente con ERC y úlcera', 'Glucocorticoide oral o intraarticular'],
    ['¿Suspender alopurinol en un ataque?', 'No'],
    ['Indicaciones fuertes de terapia hipouricemiante', '≥1 tofo, daño radiográfico o ≥2 ataques al año'],
    ['Meta de urato', '<6 mg/dL (<5 si hay tofos, EULAR)'],
    ['Al iniciar alopurinol', 'Dosis baja, titular, y profilaxis con colchicina 3–6 meses'],
    ['HLA-B*58:01', 'Antes del alopurinol en coreanos, chinos han, tailandeses, afrodescendientes'],
    ['Febuxostat', 'Advertencia cardiovascular (CARES)'],
    ['Antihipertensivo que baja el urato', 'Losartán'],
    ['4 H de la pseudogota', 'Hiperparatiroidismo, hemocromatosis, hipomagnesemia, hipofosfatasia'],
    ['Rx de la gota crónica', 'Erosiones en sacabocado con borde colgante'],
    ['Litiasis de ácido úrico', 'Radiolúcida; alcalinizar con citrato de potasio']
  ],

  questions: [
    q({ id: 'gota-01', dif: 1,
      stem: 'Mujer de 78 años con monoartritis aguda de la rodilla. Rx: calcificación lineal en los meniscos. Artrocentesis: cristales romboides con birrefringencia positiva débil. ¿Diagnóstico?',
      opts: ['Gota', 'Enfermedad por depósito de pirofosfato de calcio (pseudogota)', 'Artritis séptica', 'Osteoartritis sin inflamación', 'Artritis reumatoide'],
      ans: 1,
      exp: 'Cristales romboides con birrefringencia positiva débil + condrocalcinosis en un adulto mayor = CPPD. La gota tiene agujas con birrefringencia negativa.',
      why: ['Los cristales de la gota son agujas negativas.', '', 'Requiere Gram o cultivo positivos; los cristales explican el cuadro (aunque siempre se cultiva).', 'Hay inflamación aguda y cristales.', 'No es monoartritis con cristales.'],
      ref: 'Rosenthal AK, NEJM 2016' }),

    q({ id: 'gota-02', dif: 2,
      stem: 'Hombre de 68 años con ERC G4 y úlcera péptica reciente. Ataque de gota en el tobillo desde hace 12 h. ¿Mejor opción?',
      opts: ['Indometacina a dosis plenas', 'Colchicina a dosis altas', 'Prednisona oral (o esteroide intraarticular)', 'Iniciar alopurinol 300 mg sin antiinflamatorio', 'Naproxeno + omeprazol'],
      ans: 2,
      exp: 'Con ERC avanzada y úlcera, los AINE están contraindicados y la colchicina requiere ajuste importante (riesgo de toxicidad). Los glucocorticoides (orales o intraarticulares) son la opción más segura.',
      why: ['Contraindicado por ERC y úlcera.', 'Riesgo de toxicidad en ERC.', '', 'No trata el ataque.', 'Sigue siendo riesgoso con ERC G4.'],
      ref: 'ACR 2020' }),

    q({ id: 'gota-03', dif: 2,
      stem: 'Hombre de 55 años con gota que toma colchicina 0.6 mg/día como profilaxis. Le indican claritromicina por neumonía. A los 4 días: diarrea, debilidad muscular, CK alta y leucopenia. ¿Qué pasó?',
      opts: ['Neumonía grave', 'Toxicidad por colchicina por interacción con claritromicina (inhibidor de CYP3A4 y P-gp)', 'Gota poliarticular', 'Reacción alérgica a la claritromicina', 'Rabdomiólisis por el ejercicio'],
      ans: 1,
      exp: 'La claritromicina eleva mucho los niveles de colchicina: diarrea, miopatía, mielosupresión y puede ser mortal. Se suspende la colchicina o se elige otro antibiótico (p. ej., azitromicina, con menor interacción).',
      why: ['No explica la miopatía y la leucopenia.', '', 'No es el cuadro.', 'No da miopatía ni leucopenia.', 'No hay antecedente.'],
      ref: 'FDA colchicina · ACR 2020' }),

    q({ id: 'gota-04', dif: 1,
      stem: 'Hombre en alopurinol 300 mg con buen control presenta un ataque de gota. ¿Qué haces con el alopurinol?',
      opts: ['Suspenderlo hasta que pase el ataque', 'Continuarlo y tratar el ataque', 'Duplicar la dosis de inmediato', 'Cambiarlo por probenecid', 'Suspenderlo para siempre'],
      ans: 1,
      exp: 'Suspender el alopurinol causa oscilaciones del urato y más ataques. Se mantiene igual y se trata el ataque con colchicina, AINE o esteroide.',
      why: ['Empeora el control.', '', 'No es el momento de ajustarlo bruscamente.', 'No hay motivo.', 'Lo dejaría sin control.'],
      ref: 'ACR 2020' }),

    q({ id: 'gota-05', dif: 2,
      stem: 'Hombre de 50 años con 3 ataques de gota este año y un tofo en el codo. Urato 9.4 mg/dL, TFG 70. ¿Qué indicas?',
      opts: ['Solo colchicina en cada ataque', 'Alopurinol en dosis baja con aumento progresivo hasta urato <6, más profilaxis con colchicina 3–6 meses', 'Alopurinol 600 mg desde el primer día', 'Probenecid y dieta', 'Febuxostat de primera línea'],
      ans: 1,
      exp: 'Tiene indicaciones fuertes (tofo y ≥2 ataques/año). Alopurinol iniciado bajo (≤100 mg) y titulado cada 2–5 semanas hasta la meta, con profilaxis antiinflamatoria para evitar ataques al bajar el urato.',
      why: ['No previene el daño a largo plazo.', '', 'Iniciar alto aumenta ataques y reacciones adversas.', 'El alopurinol es primera línea.', 'Es alternativa, no primera línea.'],
      ref: 'ACR 2020' }),

    q({ id: 'gota-06', dif: 1,
      stem: '¿Cuál es la meta de urato sérico en un paciente con gota en tratamiento?',
      opts: ['<8 mg/dL', '<7 mg/dL', '<6 mg/dL', '<3 mg/dL', 'Normalizarlo sin meta'],
      ans: 2,
      exp: 'Por debajo de 6 mg/dL los cristales se disuelven con el tiempo. EULAR propone <5 mg/dL si hay tofos o enfermedad grave.',
      why: ['Está por arriba del punto de saturación.', 'Insuficiente para disolver cristales.', '', 'No se busca tan bajo de forma rutinaria.', 'Sí hay meta definida.'],
      ref: 'ACR 2020 · EULAR 2016' }),

    q({ id: 'gota-07', dif: 2,
      stem: 'Hombre de 45 años de origen coreano que va a iniciar alopurinol. ¿Qué estudio debes pedir antes?',
      opts: ['G6PD', 'HLA-B*58:01', 'HLA-B27', 'TPMT', 'Ninguno'],
      ans: 1,
      exp: 'El HLA-B*58:01 se asocia a reacciones graves por alopurinol (Stevens-Johnson, NET, DRESS). Es frecuente en personas de origen coreano, chino han, tailandés y afrodescendientes; si es positivo, se usa otro fármaco.',
      why: ['Se pide antes de pegloticasa o rasburicasa.', '', 'Se asocia a espondiloartritis.', 'Se pide antes de azatioprina.', 'En este grupo está recomendado.'],
      ref: 'ACR 2020' }),

    q({ id: 'gota-08', dif: 1,
      stem: 'Hombre hipertenso tratado con hidroclorotiazida, con gota recurrente. ¿Qué antihipertensivo prefieres?',
      opts: ['Furosemida', 'Losartán', 'Clortalidona', 'Hidroclorotiazida a mayor dosis', 'Ninguno'],
      ans: 1,
      exp: 'Los diuréticos elevan el urato. El losartán tiene efecto uricosúrico y es buena opción para HTA en gota (también calcioantagonistas).',
      why: ['También eleva el urato.', '', 'Es otra tiazida.', 'Empeora la gota.', 'Necesita control de su HTA.'],
      ref: 'ACR 2020' }),

    q({ id: 'gota-09', dif: 2,
      stem: 'Hombre de 66 años con IAM previo y gota con indicación de terapia hipouricemiante. ¿Qué fármaco evitarías?',
      opts: ['Alopurinol', 'Febuxostat', 'Colchicina profiláctica', 'Losartán', 'Prednisona en el ataque'],
      ans: 1,
      exp: 'En CARES el febuxostat se asoció a mayor mortalidad cardiovascular que el alopurinol en pacientes con ECV. Se prefiere alopurinol.',
      why: ['Es la primera línea.', '', 'Es segura con dosis ajustada.', 'Es útil en HTA con gota.', 'Es útil en el ataque.'],
      ref: 'White WB, et al. CARES, NEJM 2018' }),

    q({ id: 'gota-10', dif: 1,
      stem: 'Hombre con podagra típica. Ácido úrico sérico durante el ataque: 5.8 mg/dL. ¿Qué concluyes?',
      opts: ['No es gota', 'El urato puede ser normal durante el ataque: confirmar con cristales', 'Es pseudogota', 'Es artritis séptica', 'Es artritis reumatoide'],
      ans: 1,
      exp: 'Durante el ataque el urato puede bajar o ser normal. El diagnóstico se basa en los cristales; si no hay artrocentesis, se usa el criterio clínico y se repite el urato 2–4 semanas después.',
      why: ['Un urato normal no la descarta.', '', 'Sin cristales no puedes afirmarlo.', 'No hay datos de infección descritos.', 'No encaja.'],
      ref: 'ACR/EULAR 2015 clasificación de gota' }),

    q({ id: 'gota-11', dif: 3,
      stem: 'Hombre de 58 años con fiebre de 39 °C y rodilla muy inflamada. Líquido sinovial: 120 000 leucocitos/µL con 95% neutrófilos y cristales de urato. ¿Qué haces?',
      opts: ['Tratar solo la gota', 'Considerar artritis séptica coexistente: Gram y cultivo, antibióticos empíricos y drenaje articular', 'Dar alopurinol', 'Observar 48 h', 'Infiltrar esteroide'],
      ans: 1,
      exp: 'Los cristales no descartan infección. Con >50 000 leucocitos y fiebre alta, se trata como artritis séptica hasta tener cultivos: antibióticos empíricos y drenaje.',
      why: ['Si es séptica, la articulación se destruye en días.', '', 'No es el problema urgente.', 'La infección no espera.', 'Contraindicado si puede ser séptica.'],
      ref: 'EULAR · Reumatología clínica' }),

    q({ id: 'gota-12', dif: 2,
      stem: 'Mujer de 45 años con pseudogota en ambas rodillas. ¿Qué estudios pides para buscar una causa?',
      opts: ['Ninguno', 'Calcio, PTH, ferritina y saturación de transferrina, magnesio y fosfatasa alcalina', 'Anti-CCP', 'HLA-B27', 'ANA'],
      ans: 1,
      exp: 'La CPPD en menores de 60 años obliga a buscar hiperparatiroidismo, hemocromatosis, hipomagnesemia e hipofosfatasia.',
      why: ['En pacientes jóvenes hay que buscar causas.', '', 'Es de AR.', 'Es de espondiloartritis.', 'Es de LES.'],
      ref: 'Rosenthal AK, NEJM 2016' }),

    q({ id: 'gota-13', dif: 1,
      stem: 'Rx del pie de un hombre con gota de 15 años: erosiones en “sacabocado” con borde óseo colgante cerca de la 1ª MTF. ¿Qué indican?',
      opts: ['Osteoartritis', 'Gota crónica tofácea', 'Artritis reumatoide', 'Osteomielitis', 'Artritis psoriásica'],
      ans: 1,
      exp: 'Las erosiones en sacabocado con borde sobresaliente (overhanging edge) son típicas de la gota crónica tofácea y son indicación de terapia hipouricemiante.',
      why: ['Da osteofitos y espacio reducido.', '', 'Da erosiones marginales sin borde colgante y osteopenia.', 'Daría destrucción con reacción perióstica y clínica infecciosa.', 'Da “lápiz en copa”.'],
      ref: 'Radiología musculoesquelética' }),

    q({ id: 'gota-14', dif: 2,
      stem: 'Hombre con gota y cólico renal. El lito no se ve en la Rx simple pero sí en la TC. ¿De qué es probablemente el lito y cómo se previene?',
      opts: ['Oxalato de calcio; restringir calcio', 'Ácido úrico; alcalinizar la orina con citrato de potasio, hidratación y alopurinol', 'Estruvita; antibióticos', 'Cistina; penicilamina', 'Fosfato de calcio; tiazida'],
      ans: 1,
      exp: 'Los litos de ácido úrico son radiolúcidos en la Rx simple y se forman en orina ácida. Se previenen alcalinizando la orina (pH 6–6.5), con mucha agua y bajando el urato.',
      why: ['Son radioopacos, y restringir calcio no se recomienda.', '', 'Asociada a infección por bacterias ureolíticas.', 'Es una enfermedad hereditaria rara.', 'Son radioopacos.'],
      ref: 'AUA/EAU litiasis' }),

    q({ id: 'gota-15', dif: 2,
      stem: 'Hombre de 52 años que inició alopurinol 300 mg sin profilaxis. Al mes tiene dos ataques de gota y dice “el alopurinol me empeoró”. ¿Qué explicas y haces?',
      opts: ['Suspender el alopurinol definitivamente', 'Los ataques son por la movilización del urato al iniciarlo: mantener el alopurinol (idealmente desde dosis baja), tratar el ataque y dar profilaxis con colchicina 3–6 meses', 'Cambiar a febuxostat', 'Es alergia al alopurinol', 'Agregar otra tiazida'],
      ans: 1,
      exp: 'Bajar el urato bruscamente moviliza cristales y provoca ataques. Por eso se inicia a dosis baja, se titula y se da profilaxis antiinflamatoria los primeros meses.',
      why: ['Es un efecto esperado, no una falla.', '', 'Tendría el mismo efecto y no está indicado por esto.', 'No hay datos de alergia.', 'Empeora el urato.'],
      ref: 'ACR 2020' })
  ],

  cases: [
    { id: 'g-gota', topic: 'gota', subj: 'reuma',
      title: 'El dedo gordo de don Chuy', place: 'Urgencias',
      patient: { name: 'Jesús', age: 54, sex: 'H', skin: '#B97A52', hair: '#2A1C14', gown: '#4DB8FF' },
      intro: 'Chofer con obesidad, HTA tratada con hidroclorotiazida y ERC G3b. Después de una carne asada con cerveza despertó con el dedo gordo del pie rojo y tan adolorido que no tolera ni la sábana.',
      extra: { label: 'Urato', unit: 'mg/dL' },
      start: { FC: 96, PAS: 148, PAD: 90, SpO2: 98, FR: 18, X: 8.6 },
      nodes: [
        { tag: 'Llegada', ecg: 'normal',
          text: 'Primera MTF derecha roja, caliente y muy dolorosa. Afebril. TFG 38.',
          q: '¿Qué haces primero?',
          A: { t: 'Iniciar alopurinol 300 mg hoy y mandarlo a casa', ok: false, res: 'El dolor sigue igual: el alopurinol no trata el ataque.' },
          B: { t: 'Confirmar con artrocentesis (cristales, Gram y cultivo) y tratar el ataque', ok: true, res: 'Cristales en aguja con birrefringencia negativa; Gram negativo.' },
          why: 'El diagnóstico definitivo es con cristales, y siempre se descarta infección. El alopurinol no trata el ataque.' },
        { tag: 'Tratamiento del ataque', ecg: 'normal',
          text: 'TFG 38 y una úlcera duodenal hace 4 meses.',
          q: '¿Con qué tratas el ataque?',
          A: { t: 'Prednisona 30–40 mg/día por 5 días', ok: true, res: 'A las 48 h el dolor bajó de 10 a 3.' },
          B: { t: 'Indometacina 50 mg c/8 h', ok: false, res: 'Su creatinina sube y tiene dolor epigástrico.' },
          why: 'Con ERC y úlcera reciente, los glucocorticoides son la opción más segura; los AINE están contraindicados y la colchicina requiere ajuste.' },
        { tag: '6 meses después', ecg: 'normal', vit: { X: 9.1 },
          text: 'Tercer ataque este año y un tofo en el pabellón auricular. Urato 9.1 mg/dL.',
          q: '¿Qué indicas a largo plazo?',
          A: { t: 'Alopurinol 50–100 mg/día con aumento progresivo hasta urato <6, profilaxis con colchicina a dosis ajustada y cambiar la hidroclorotiazida por losartán', ok: true, res: 'A los 4 meses: urato 5.4 mg/dL, sin ataques.', vit: { X: 5.4 } },
          B: { t: 'Seguir tratando solo cada ataque', ok: false, res: 'Al año tiene más tofos y erosiones en la Rx.', vit: { X: 9.8 } },
          why: 'Tofo y ≥2 ataques al año = indicación fuerte de alopurinol con meta <6. Profilaxis al iniciar y retirar la tiazida.' }
      ] }
  ]
};
