// Tema 21 · Espondiloartropatías y artritis psoriásica (Reumatología, semana 6)
const T = { topic: 'espondilo', subj: 'reuma' };
const q = (o) => ({ ...T, ...o });

export default {
  lessons: {
    espondilo: {
      hook: 'Lumbalgia en un joven que despierta de madrugada y mejora al moverse: es inflamatoria. Reconoce la espondiloartritis axial, la artritis reactiva y la psoriásica, y su tratamiento escalonado.',
      nn: [],
      yt: 'ankylosing spondylitis psoriatic arthritis',
      sections: [
        { h: 'Lumbalgia inflamatoria', html: `
<ul>
<li>Inicio <b>antes de los 40–45 años</b>, insidioso, de más de 3 meses.</li>
<li><b>Mejora con el ejercicio</b>, no mejora con el reposo; dolor nocturno (despierta en la segunda mitad de la noche).</li>
<li>Rigidez matutina &gt;30 min, dolor glúteo alternante.</li>
<li>Rasgos de espondiloartritis: entesitis (talón), dactilitis (“dedo en salchicha”), artritis asimétrica de miembros inferiores, <b>uveítis anterior aguda</b>, psoriasis, EII, buena respuesta a AINE, familiar con espondiloartritis, <b>HLA-B27</b>, PCR elevada.</li>
</ul>` },
        { h: 'Espondiloartritis axial', html: `
<ul>
<li><b>Criterios ASAS</b>: lumbalgia ≥3 meses con inicio &lt;45 años + (sacroileítis en imagen + ≥1 rasgo) o (HLA-B27 + ≥2 rasgos).</li>
<li><b>Radiográfica</b> (espondilitis anquilosante): sacroileítis bilateral en Rx, sindesmofitos, “columna en caña de bambú”. <b>No radiográfica</b>: Rx normal con edema óseo en la RM.</li>
<li>La <b>RM</b> detecta la sacroileítis temprana (edema de médula ósea).</li>
<li>Exploración: prueba de Schober modificada (flexión lumbar), expansión torácica, distancia occipucio-pared.</li>
<li>Extraarticular: uveítis anterior (la más común), insuficiencia aórtica, bloqueos de conducción, fibrosis apical, osteoporosis y fracturas vertebrales.</li>
<li>Tratamiento: <b>AINE</b> + ejercicio y fisioterapia. Si no responde a 2 AINE: <b>anti-TNF</b> o <b>anti-IL-17</b> (secukinumab, ixekizumab), o inhibidores de JAK. Metotrexato y sulfasalazina no sirven para la enfermedad axial (sí para la periférica). Los esteroides sistémicos no se usan.</li>
</ul>` },
        { h: 'Artritis reactiva', html: `
<ul>
<li>1–4 semanas después de una infección <b>genitourinaria</b> (Chlamydia) o <b>gastrointestinal</b> (Salmonella, Shigella, Campylobacter, Yersinia).</li>
<li>Oligoartritis asimétrica de miembros inferiores, entesitis, dactilitis. Tríada clásica: artritis, uretritis y conjuntivitis.</li>
<li>Piel: queratodermia blenorrágica (palmas y plantas), balanitis circinada.</li>
<li>Tratamiento: AINE; esteroide intraarticular; tratar la Chlamydia si está activa. La mayoría se resuelve en meses.</li>
</ul>` },
        { h: 'Artritis psoriásica', html: `
<ul>
<li>En ~30% de las personas con psoriasis; la piel suele preceder a la artritis.</li>
<li>Patrones: oligoartritis asimétrica (el más común), predominio en <b>IFD</b> (con cambios ungueales: piqueteado, onicólisis), poliartritis simétrica parecida a AR, artritis mutilante, axial.</li>
<li>Rx: “lápiz en copa”, erosiones con formación de hueso nuevo.</li>
<li><b>Criterios CASPAR</b>: enfermedad articular inflamatoria + ≥3 puntos: psoriasis actual (2), antecedente personal (1) o familiar (1), distrofia ungueal (1), FR negativo (1), dactilitis (1), hueso nuevo yuxtaarticular en Rx (1).</li>
<li>Tratamiento: AINE; periférica: <b>metotrexato</b> (también ayuda a la piel); biológicos anti-TNF, anti-IL-17, anti-IL-23 (guselkumab) o IL-12/23 (ustekinumab); apremilast; JAK.</li>
</ul>` }
      ],
      mnemo: { t: 'Espondiloartritis = “PEAR”', d: 'Psoriásica, Enteropática (EII), Anquilosante (axial), Reactiva: cuatro hermanas seronegativas (FR y anti-CCP negativos) asociadas a HLA-B27.' },
      pearl: 'Ojo rojo doloroso con fotofobia en un joven con lumbalgia: uveítis anterior aguda. Requiere oftalmología urgente y orienta a HLA-B27.',
      trap: 'HLA-B27 positivo no diagnostica nada solo: ~8% de la población sana lo tiene. Se interpreta junto con la clínica y la imagen.',
      guide: [
        'Inhibidores de JAK (tofacitinib, upadacitinib): aprobados en espondiloartritis axial y artritis psoriásica, pero con advertencias de seguridad (trombosis, eventos cardiovasculares) en mayores de 65 años o con factores de riesgo según EMA/FDA.',
        'Anti-IL-23 (guselkumab, risankizumab): funcionan en artritis psoriásica periférica pero no han demostrado eficacia en la enfermedad axial pura.'
      ],
      refs: [
        'Ramiro S, et al. ASAS-EULAR recommendations for axial spondyloarthritis: 2022 update. Ann Rheum Dis 2023.',
        'Gossec L, et al. EULAR recommendations for psoriatic arthritis: 2023 update. Ann Rheum Dis 2024.',
        'Taylor W, et al. CASPAR criteria. Arthritis Rheum 2006.'
      ]
    }
  },

  cards: [
    ['Lumbalgia inflamatoria', 'Inicio <40–45 años, mejora con ejercicio, no con reposo, dolor nocturno'],
    ['Manifestación extraarticular más común de la espondiloartritis', 'Uveítis anterior aguda'],
    ['Primera línea en espondiloartritis axial', 'AINE + ejercicio'],
    ['Si fallan 2 AINE en enfermedad axial', 'Anti-TNF o anti-IL-17'],
    ['FAME convencionales en enfermedad axial', 'No funcionan (sí en la periférica)'],
    ['Sacroileítis temprana: mejor estudio', 'RM (edema de médula ósea)'],
    ['Columna en caña de bambú', 'Espondilitis anquilosante avanzada (sindesmofitos)'],
    ['Artritis reactiva: tríada', 'Artritis, uretritis, conjuntivitis'],
    ['Lesión de palmas y plantas en artritis reactiva', 'Queratodermia blenorrágica'],
    ['Artritis psoriásica con afección de IFD', 'Se asocia a cambios ungueales (piqueteado, onicólisis)'],
    ['Rx en artritis psoriásica', 'Lápiz en copa'],
    ['Criterios de artritis psoriásica', 'CASPAR']
  ],

  questions: [
    q({ id: 'espondilo-01', dif: 1,
      stem: 'Hombre de 24 años con lumbalgia de 8 meses que lo despierta a las 4 a. m. y mejora al hacer ejercicio. Tuvo un episodio de ojo rojo doloroso con fotofobia. ¿Diagnóstico más probable?',
      opts: ['Hernia de disco', 'Espondiloartritis axial', 'Lumbalgia mecánica', 'Artritis reumatoide', 'Osteoartritis'],
      ans: 1,
      exp: 'Lumbalgia inflamatoria en un joven + uveítis anterior: espondiloartritis axial. Siguiente paso: HLA-B27, PCR y Rx o RM de sacroiliacas.',
      why: ['Empeora con el movimiento y tiene radiculopatía.', '', 'Mejora con reposo.', 'No afecta la columna lumbar.', 'Es de mayores y mecánica.'],
      ref: 'ASAS 2009 · ASAS-EULAR 2022' }),

    q({ id: 'espondilo-02', dif: 2,
      stem: 'Hombre de 28 años con lumbalgia inflamatoria y HLA-B27 positivo. Rx de sacroiliacas normal. ¿Mejor estudio para buscar sacroileítis temprana?',
      opts: ['TC de columna', 'RM de articulaciones sacroiliacas', 'Gammagrama óseo', 'Ultrasonido', 'Densitometría'],
      ans: 1,
      exp: 'La RM detecta el edema de médula ósea antes de que haya cambios estructurales visibles en la Rx (espondiloartritis axial no radiográfica).',
      why: ['Radiación y no ve inflamación activa.', '', 'Poco específico.', 'No evalúa la articulación sacroiliaca.', 'Mide densidad ósea.'],
      ref: 'ASAS-EULAR 2022' }),

    q({ id: 'espondilo-03', dif: 2,
      stem: 'Paciente con espondilitis anquilosante sigue con actividad alta tras 4 semanas de naproxeno y luego otras 4 de celecoxib a dosis completas. ¿Siguiente paso?',
      opts: ['Metotrexato', 'Anti-TNF o anti-IL-17', 'Prednisona oral crónica', 'Sulfasalazina', 'Hidroxicloroquina'],
      ans: 1,
      exp: 'Falla a 2 AINE en enfermedad axial: biológico (anti-TNF o anti-IL-17) o inhibidor de JAK. Los FAME convencionales y los esteroides sistémicos no funcionan para la columna.',
      why: ['No sirve para la enfermedad axial.', '', 'No se recomienda.', 'Solo para artritis periférica.', 'No tiene papel.'],
      ref: 'ASAS-EULAR 2022' }),

    q({ id: 'espondilo-04', dif: 1,
      stem: 'Hombre de 26 años con artritis de rodilla y tobillo derechos, conjuntivitis y disuria, 3 semanas después de una relación sexual sin protección. ¿Diagnóstico?',
      opts: ['Artritis séptica gonocócica', 'Artritis reactiva', 'Gota', 'Artritis reumatoide', 'Fiebre reumática'],
      ans: 1,
      exp: 'Oligoartritis asimétrica de miembros inferiores + uretritis + conjuntivitis tras infección por Chlamydia: artritis reactiva.',
      why: ['Daría tenosinovitis, pústulas o monoartritis purulenta.', '', 'No explica uretritis y conjuntivitis.', 'Es poliartritis simétrica de manos.', 'Sigue a faringitis estreptocócica.'],
      ref: 'Harrison 21e' }),

    q({ id: 'espondilo-05', dif: 2,
      stem: 'Mujer de 45 años con psoriasis en placas, dolor e inflamación en IFD de varias manos y piqueteado ungueal. FR negativo. ¿Diagnóstico?',
      opts: ['Osteoartritis erosiva', 'Artritis psoriásica', 'Artritis reumatoide', 'Gota tofácea', 'Lupus'],
      ans: 1,
      exp: 'Psoriasis + artritis de IFD + afección ungueal + FR negativo: artritis psoriásica (CASPAR ≥3 puntos).',
      why: ['No tiene inflamación ni asociación con uñas.', '', 'Respeta IFD y suele tener FR o anti-CCP.', 'No hay datos de tofos ni cristales.', 'No explica psoriasis y uñas.'],
      ref: 'CASPAR 2006' }),

    q({ id: 'espondilo-06', dif: 2,
      stem: 'Hombre de 50 años con artritis psoriásica periférica poliarticular activa y psoriasis cutánea moderada. ¿FAME convencional de elección?',
      opts: ['Hidroxicloroquina', 'Metotrexato', 'Azatioprina', 'Prednisona en dosis altas', 'Colchicina'],
      ans: 1,
      exp: 'El metotrexato es el FAME convencional preferido en artritis periférica con psoriasis, porque también mejora la piel. Si no responde: biológicos.',
      why: ['Puede empeorar la psoriasis.', '', 'No es de elección.', 'Los esteroides sistémicos pueden desencadenar psoriasis pustulosa al retirarlos.', 'Para gota y pericarditis.'],
      ref: 'EULAR PsA 2023' }),

    q({ id: 'espondilo-07', dif: 2,
      stem: 'Paciente con espondilitis anquilosante de larga evolución presenta disnea y soplo diastólico en el borde esternal izquierdo. ¿Qué complicación sospechas?',
      opts: ['Estenosis mitral', 'Insuficiencia aórtica por aortitis', 'Pericarditis constrictiva', 'Comunicación interauricular', 'Miocardiopatía hipertrófica'],
      ans: 1,
      exp: 'La inflamación de la raíz aórtica en espondiloartritis puede causar insuficiencia aórtica y bloqueos de conducción.',
      why: ['No se asocia.', '', 'No se asocia típicamente.', 'Es congénita.', 'No se asocia.'],
      ref: 'Harrison 21e' }),

    q({ id: 'espondilo-08', dif: 1,
      stem: '¿Qué hallazgo de laboratorio caracteriza a las espondiloartritis?',
      opts: ['FR y anti-CCP positivos', 'FR y anti-CCP negativos (seronegativas), con frecuencia HLA-B27 positivo', 'ANA positivos a títulos altos', 'Complemento bajo', 'ANCA positivos'],
      ans: 1,
      exp: 'Son artritis “seronegativas”: sin factor reumatoide ni anti-CCP. El HLA-B27 está presente en ~90% de la espondilitis anquilosante, menos en las otras.',
      why: ['Sugiere AR.', '', 'Sugiere LES y otras conectivopatías.', 'Sugiere LES.', 'Sugiere vasculitis.'],
      ref: 'Harrison 21e' }),

    q({ id: 'espondilo-09', dif: 3,
      stem: 'Hombre de 35 años con colitis ulcerosa activa presenta artritis de rodilla que empeora con los brotes intestinales. ¿Qué la mejora?',
      opts: ['Tratar la actividad intestinal', 'AINE en dosis altas por tiempo prolongado', 'Colchicina', 'Alopurinol', 'Antibióticos'],
      ans: 0,
      exp: 'La artritis periférica enteropática (tipo 1) sigue la actividad de la EII: mejora al controlar el intestino. Los AINE pueden exacerbar la colitis.',
      why: ['', 'Pueden empeorar la EII.', 'No es gota.', 'No es gota.', 'No es infecciosa.'],
      ref: 'Harrison 21e' }),

    q({ id: 'espondilo-10', dif: 2,
      stem: 'Mujer con artritis psoriásica y dedo de la mano completamente inflamado, “en salchicha”. ¿Cómo se llama el hallazgo?',
      opts: ['Tofo', 'Dactilitis', 'Nódulo de Heberden', 'Tenosinovitis de De Quervain', 'Contractura de Dupuytren'],
      ans: 1,
      exp: 'La dactilitis es la inflamación de todo un dedo (articulaciones, tendones y tejidos blandos); es típica de la artritis psoriásica y reactiva.',
      why: ['Depósito de urato.', '', 'Osteofito de IFD en OA.', 'Afecta el pulgar en la muñeca.', 'Fibrosis de la fascia palmar.'],
      ref: 'CASPAR 2006' })
  ]
};
