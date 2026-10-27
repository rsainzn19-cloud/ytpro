// Complemento del resumen “1P MI” (presentación del primer parcial de Medicina Interna, Ximena Cors, EMIS 5; Google Drive).
// Solo lo que agrega a las lecciones; cardio y gastro ya los cubren 60-guia-cardio.js y 61-guia-gastro.js.
const SRC = { short: 'Del resumen del 1er parcial', vs: 'el resumen', name: '1P MI · resumen del primer parcial (Ximena Cors, EMIS 5)', url: 'https://docs.google.com/presentation/d/1b0DWnBiJlPhD-DElPIr2rjI1o1CK2YCKDw8V_nwQb3Q/edit' };
const REF = 'Resumen 1P MI de la rotación + guías actuales';
const q = (subj, topic, o) => ({ subj, topic, ref: REF, ...o });

export default {
  guias: {
    dm2: { src: SRC,
      puntos: [
        '<b>CAD vs EHH</b>: CAD = glucosa >250, pH <7.30, HCO₃ <18, cetonas y anión gap alto (Kussmaul, aliento afrutado, dolor abdominal) · EHH = glucosa >600 (a menudo >800), osmolaridad >320, sin acidosis importante y con alteración del estado mental.',
        '<b>Resolución de la CAD</b>: glucosa <200 y 2 de 3: HCO₃ ≥15, pH ≥7.30, anión gap ≤12. <b>EHH</b>: osmolaridad normal y estado mental normal. Entonces pasas a insulina SC (solápala 1–2 h con la IV).',
        '<b>Potasio en la CAD</b>: el K corporal total está bajo aunque el sérico salga normal o alto. Si K <3.3, no inicies insulina hasta reponerlo; repón si está <5.3.',
        '<b>Insulinas</b>: ultrarrápidas (lispro, aspart, glulisina: 15 min antes, duran 3–4 h) · regular (30 min antes, 4–6 h; la IV de la CAD) · NPH (intermedia, 2 veces al día) · basales (glargina y detemir ~24 h; degludec la más larga, >40 h).',
        '<b>Iniciar insulina</b> si la A1c es >10%, la glucosa ≥300, hay síntomas o datos de catabolismo (pérdida de peso, cetosis).'
      ],
      ojo: [
        'El resumen dice A1c “>6.5%”; el corte diagnóstico es ≥6.5% (igual que ayuno ≥126 y CTGO a 2 h ≥200).',
        'Meta de presión: el resumen pone <140/90; la ADA pide <130/80 si se tolera.',
        'El resumen dice “ICC: no metformina”; la metformina se puede usar en IC estable. Se evita en la IC descompensada con hipoperfusión o con TFG <30.',
        'El resumen agrega dextrosa cuando la glucosa llega a 200; el consenso ADA 2024 la agrega desde <250 mg/dL (siguiendo con la insulina hasta cerrar el anión gap).'
      ],
      cards: [
        ['CAD resuelta', 'Glucosa <200 + 2 de: HCO₃ ≥15, pH ≥7.30, anión gap ≤12'],
        ['CAD con K 3.0', 'Repón potasio antes de iniciar la insulina'],
        ['Insulina basal más larga', 'Degludec (>40 h)'],
        ['EHH: criterios', 'Glucosa >600, osmolaridad >320, sin acidosis importante'],
        ['¿Cuándo iniciar insulina en DM2?', 'A1c >10%, glucosa ≥300, síntomas o catabolismo']
      ] },
    hipofisis: { src: SRC,
      puntos: [
        '<b>Hipopituitarismo</b> por un macroadenoma: se pierden primero GH y gonadotropinas, al final TSH y ACTH. Repón el cortisol antes que la tiroxina.',
        '<b>Prolactina</b>: >200 ng/mL casi siempre es prolactinoma; por fármacos (metoclopramida, haloperidol, risperidona, verapamilo, metildopa) suele ser <100. Macroadenoma con prolactina apenas alta: piensa en efecto de tallo (adenoma no funcionante). Descarta antes embarazo e hipotiroidismo.'
      ],
      ojo: [
        'El resumen da demeclociclina para el SIADH; ya casi no se usa. Hoy: restricción de líquidos, urea o tolvaptán.'
      ],
      cards: [
        ['Prolactina >200 ng/mL', 'Prolactinoma (casi siempre)'],
        ['Macroadenoma con prolactina de 60', 'Efecto de tallo: adenoma no funcionante'],
        ['Hipopituitarismo: qué se pierde primero', 'GH y gonadotropinas']
      ] },
    erc: { src: SRC,
      puntos: [
        '<b>Hiperparatiroidismo</b>: secundario (Ca bajo, fósforo alto, calcitriol bajo) → <b>terciario</b> cuando la paratiroides se vuelve autónoma y el calcio sube (típico tras el trasplante).',
        '<b>Osteítis fibrosa quística</b>: enfermedad ósea por PTH alta (resorción subperióstica, quistes, tumores pardos).',
        '<b>Calcifilaxis</b>: calcificación de arteriolas de la piel con placas muy dolorosas y necrosis; en diálisis con producto Ca × P alto.',
        '<b>Uremia</b>: pericarditis, encefalopatía, prurito, escarcha urémica y sangrado por disfunción plaquetaria (se corrige con desmopresina o diálisis).'
      ],
      ojo: [
        'Meta de presión: el resumen pone <140/90 (o <130/80 con albuminuria); KDIGO 2021 sugiere PAS <120 si se tolera.'
      ],
      cards: [
        ['Hiperparatiroidismo terciario', 'Paratiroides autónoma con calcio alto (tras ERC de larga evolución o trasplante)'],
        ['Calcifilaxis', 'Placas cutáneas dolorosas con necrosis por calcificación arteriolar en diálisis'],
        ['Sangrado urémico', 'Disfunción plaquetaria → desmopresina o diálisis']
      ] },
    glomerulo: { src: SRC,
      puntos: [
        '<b>Inmunofluorescencia</b>: lineal = anti-MBG (Goodpasture) · granular = inmunocomplejos (posestreptocócica, lupus, MPGN) · negativa o escasa = pauciinmune (ANCA).',
        '<b>Por microscopía</b>: posestreptocócica, jorobas subepiteliales · membranosa, “espigas” en la plata y anti-PLA2R · cambios mínimos, borramiento de podocitos con MO normal · GEFS, hialinosis segmentaria · lupus, “asas de alambre” (depósitos subendoteliales) · diabética, nódulos de Kimmelstiel-Wilson · amiloide, rojo Congo con birrefringencia verde manzana · Alport, membrana “en canasta tejida”.',
        '<b>C3 bajo</b>: posestreptocócica, lupus y MPGN (también endocarditis y crioglobulinemia).',
        '<b>IgA (Berger)</b>: hematuria 1–3 días después de una infección respiratoria, con C3 normal. La posestreptocócica tarda 1–3 semanas y baja el C3.',
        '<b>Alport</b>: nefritis + sordera + alteraciones oculares (colágeno IV).'
      ],
      cards: [
        ['IF lineal', 'Anti-MBG (Goodpasture)'],
        ['Asas de alambre', 'Nefritis lúpica (depósitos subendoteliales)'],
        ['Rojo Congo verde manzana', 'Amiloidosis'],
        ['Alport', 'Nefritis + sordera + ojos; membrana en canasta tejida']
      ] },
    dialisis: { src: SRC,
      puntos: [
        '<b>Hemodiálisis</b>: por difusión, 3 veces a la semana; acceso de elección la fístula AV <b>radiocefálica</b>. Riesgos: hipotensión, trombosis o infección del acceso.',
        '<b>Hemofiltración</b>: por convección, continua (TRRC) en la UCI; útil en el paciente inestable.',
        '<b>Diálisis peritoneal</b>: difusión + convección con dializado hiperosmolar de glucosa; riesgo de peritonitis, hiperglucemia e hipoalbuminemia.'
      ],
      cards: [
        ['Hemofiltración', 'Convección continua en la UCI para el paciente inestable'],
        ['Acceso vascular de elección', 'Fístula AV radiocefálica']
      ] }
  },

  questions: [
    q('endo', 'dm2', { id: 'dm2-g01', dif: 2,
      stem: 'Paciente con CAD en tratamiento con insulina IV. Ahora: glucosa 180 mg/dL, pH 7.33, HCO₃ 17 mEq/L, anión gap 11. Ya tolera la vía oral. ¿Qué haces?',
      opts: ['Suspender la insulina IV y no dar más insulina', 'Iniciar insulina basal SC y suspender la IV 1–2 h después', 'Seguir con insulina IV 24 h más', 'Dar bicarbonato', 'Pasar a metformina'],
      ans: 1,
      exp: 'La CAD está resuelta: glucosa <200 con pH ≥7.30, HCO₃ ≥15 y anión gap ≤12. Pasas a insulina SC (basal y prandial) y la solapas 1–2 h con la IV para evitar el rebote de cetosis.',
      why: ['Sin insulina vuelve la cetoacidosis.', '', 'Ya cumple los criterios de resolución.', 'Solo se considera con pH <6.9.', 'No sustituye la insulina en una CAD.'] }),
    q('endo', 'dm2', { id: 'dm2-g02', dif: 2,
      stem: 'Hombre con CAD: glucosa 520 mg/dL, pH 7.12, K 3.0 mEq/L. Ya inició solución salina. ¿Qué sigue?',
      opts: ['Insulina IV en bolo de inmediato', 'Reponer potasio IV y retrasar la insulina hasta que el K sea ≥3.3', 'Bicarbonato IV', 'Insulina SC', 'Solo líquidos'],
      ans: 1,
      exp: 'La insulina mete el potasio a la célula: con K <3.3 podría causar una arritmia. Se repone el potasio primero y la insulina se inicia cuando el K es ≥3.3.',
      why: ['Agravaría la hipokalemia.', '', 'Solo con pH <6.9 y también baja el K.', 'La CAD moderada-grave requiere insulina IV, y el K sigue siendo el problema.', 'También necesita insulina, pero después de corregir el K.'] }),
    q('nefro', 'erc', { id: 'erc-g01', dif: 2,
      stem: 'Mujer en hemodiálisis desde hace 6 años, con fósforo alto y PTH muy elevada, presenta placas violáceas muy dolorosas en los muslos que se ulceran. ¿Diagnóstico?',
      opts: ['Pioderma gangrenoso', 'Calcifilaxis', 'Vasculitis por IgA', 'Celulitis', 'Escarcha urémica'],
      ans: 1,
      exp: 'Calcifilaxis (arteriolopatía urémica calcificante): calcificación de arteriolas cutáneas con necrosis, en diálisis con producto Ca × P alto. Mortalidad alta.',
      why: ['No se relaciona con fósforo ni PTH.', '', 'Da púrpura palpable, no necrosis dolorosa por calcio.', 'No da placas necróticas con este contexto.', 'Son cristales de urea en la piel, sin necrosis.'] }),
    q('nefro', 'glomerulo', { id: 'glomerulo-g01', dif: 2,
      stem: 'Hombre de 25 años con hemoptisis y hematuria. La biopsia renal muestra semilunas con inmunofluorescencia lineal de IgG en la membrana basal. ¿Diagnóstico?',
      opts: ['Glomerulonefritis posestreptocócica', 'Enfermedad anti-MBG (Goodpasture)', 'Granulomatosis con poliangeítis', 'Nefropatía por IgA', 'Nefritis lúpica'],
      ans: 1,
      exp: 'IF lineal = anticuerpos contra la membrana basal (colágeno IV) de pulmón y riñón: enfermedad anti-MBG. Se trata con plasmaféresis, esteroides y ciclofosfamida.',
      why: ['Da IF granular y C3 bajo.', '', 'Es pauciinmune (IF negativa) con ANCA.', 'Da depósitos mesangiales de IgA.', 'Da IF granular “full house”.'] }),
    q('nefro', 'dialisis', { id: 'dialisis-g01', dif: 1,
      stem: 'Paciente en choque séptico con norepinefrina, anúrico y con K de 6.9 mEq/L. ¿Qué terapia de reemplazo renal prefieres?',
      opts: ['Hemodiálisis intermitente de 4 horas', 'Terapia de reemplazo renal continua (hemofiltración)', 'Diálisis peritoneal', 'Trasplante renal', 'Solo diuréticos'],
      ans: 1,
      exp: 'En el paciente hemodinámicamente inestable se prefiere la terapia continua (hemofiltración o hemodiafiltración): retira solutos y líquido más despacio y se tolera mejor.',
      why: ['Puede empeorar la hipotensión.', '', 'Es lenta e impredecible en el choque.', 'No aplica en agudo.', 'Está anúrico: no responderá.'] })
  ]
};
