// Práctica de Endocrinología del primer parcial (semanas 1, 5 y 6): hipófisis no funcionante y diabetes insípida,
// crisis hiperglucémicas e insulinoterapia. Algoritmos con casos y una guardia con monitor.
export default {
  algos: {
    poliuria: {
      title: 'Poliuria: ¿diabetes insípida o polidipsia?', topics: ['hipofnf'], start: 'glu',
      nodes: {
        glu: { q: 'Poliuria de más de 3 L al día. ¿Glucosa?', opts: [{ t: 'Alta con glucosuria', go: 'dm' }, { t: 'Normal', go: 'osm' }] },
        osm: { q: 'Osmolaridad urinaria:', opts: [{ t: 'Mayor de 300: diuresis osmótica', go: 'osmot' }, { t: 'Menor de 300: orina diluida', go: 'na' }] },
        na: { q: 'Sodio sérico:', opts: [{ t: 'Normal-bajo (menor de 137)', go: 'poli' }, { t: 'Normal-alto o alto', go: 'cop' }] },
        cop: { q: 'Copeptina tras estímulo (o prueba de deprivación + desmopresina):', opts: [{ t: 'Copeptina baja; la orina SÍ se concentra con desmopresina', go: 'central' }, { t: 'Copeptina alta; la orina NO se concentra con desmopresina', go: 'nefro' }] },
        dm: { end: 'Diuresis osmótica por diabetes', d: 'La glucosa arrastra agua. Trata la hiperglucemia.' },
        osmot: { end: 'Diuresis osmótica', d: 'Urea (dieta hiperproteica, recuperación de LRA), manitol o contraste.' },
        poli: { end: 'Polidipsia primaria', d: 'Toma demasiada agua: orina diluida con sodio bajo-normal. Restringir líquidos; evaluar causa psiquiátrica.' },
        central: { end: 'Deficiencia de AVP (DI central)', d: 'Desmopresina. Causas: cirugía hipofisaria, trauma, craneofaringioma, infiltrativas. RM de silla.' },
        nefro: { end: 'Resistencia a la AVP (DI nefrogénica)', d: 'Litio (la #1 en adultos), hipercalcemia, hipokalemia. Suspende la causa; tiazida + dieta baja en sal; amilorida si es por litio.' }
      },
      cases: [
        { t: 'Hombre operado de macroadenoma hace 2 días que orina 6 L al día.', data: [['Glucosa', '102'], ['Osm urinaria', '110'], ['Na', '149'], ['Con desmopresina', 'Osm urinaria sube a 520']], path: { glu: 1, osm: 1, na: 1, cop: 0 }, end: 'central' },
        { t: 'Mujer con trastorno bipolar que toma litio desde hace 10 años.', data: [['Osm urinaria', '160'], ['Na', '146'], ['Con desmopresina', 'Sin cambio']], path: { glu: 1, osm: 1, na: 1, cop: 1 }, end: 'nefro' },
        { t: 'Mujer con esquizofrenia que toma 8 L de agua al día.', data: [['Osm urinaria', '90'], ['Na', '133']], path: { glu: 1, osm: 1, na: 0 }, end: 'poli' },
        { t: 'Hombre de 50 años con sed y pérdida de peso.', data: [['Glucosa', '388'], ['Glucosuria', '+++']], path: { glu: 0 }, end: 'dm' }
      ]
    },
    cadalgo: {
      title: 'Cetoacidosis: líquidos, potasio, insulina', topics: ['cad'], start: 'dx',
      nodes: {
        dx: { q: '¿Qué crisis es?', opts: [{ t: 'Glucosa ≥200, BHB ≥3, pH <7.3 o HCO3 <18', go: 'k' }, { t: 'Glucosa ≥600, osmolaridad efectiva >300, sin acidosis', go: 'ehh' }] },
        k: { q: 'Tras 1 L de cristaloide: ¿potasio?', opts: [{ t: 'Menor de 3.5', go: 'kbajo' }, { t: '3.5 a 5.0', go: 'kmed' }, { t: 'Mayor de 5.0', go: 'kalto' }] },
        kmed: { q: 'Insulina 0.1 U/kg/h + KCl. La glucosa llega a 230 y el pH es 7.18. ¿Qué haces?', opts: [{ t: 'Suspender la insulina', go: 'error' }, { t: 'Agregar dextrosa y bajar la insulina a 0.05 U/kg/h', go: 'dex' }] },
        kbajo: { end: 'Reponer K antes de la insulina', d: 'KCl 10 a 20 mEq/h hasta K >3.5; la insulina se difiere.' },
        kalto: { end: 'Insulina sin K; medir K cada 2 h', d: 'Cuando baje a 5.0 o menos, agrega KCl a los líquidos.' },
        error: { end: 'Error: la cetosis regresa', d: 'Lo que se trata es la cetosis. Con glucosa <250 se agrega dextrosa y se sigue la insulina.' },
        dex: { end: 'Correcto: dextrosa + insulina hasta resolver', d: 'Resolución: BHB <0.6 y pH ≥7.3. Basal SC 2 h antes de suspender la infusión.' },
        ehh: { end: 'Estado hiperosmolar: líquidos primero', d: 'Reposición lenta de la osmolaridad (≤3–8 mOsm/kg/h), insulina cuando la glucosa deje de bajar solo con líquidos; profilaxis de trombosis.' }
      },
      cases: [
        { t: 'Fernanda, 19 años, DM1 que dejó la insulina.', data: [['Glucosa', '486'], ['pH', '7.08'], ['BHB', '6.2'], ['K', '5.4']], path: { dx: 0, k: 2 }, end: 'kalto' },
        { t: 'Hombre de 30 años con DM1 y neumonía.', data: [['Glucosa', '420'], ['pH', '7.15'], ['K', '3.1']], path: { dx: 0, k: 0 }, end: 'kbajo' },
        { t: 'Mujer con CAD en la hora 6 de tratamiento.', data: [['K', '4.2'], ['Glucosa', '230'], ['pH', '7.18']], path: { dx: 0, k: 1, kmed: 1 }, end: 'dex' },
        { t: 'Hombre de 78 años con DM2, confuso tras una semana de diarrea.', data: [['Glucosa', '980'], ['pH', '7.36'], ['Osm efectiva', '348']], path: { dx: 1 }, end: 'ehh' }
      ]
    },
    titula: {
      title: 'Insulina basal: ¿subo, bajo o agrego?', topics: ['insulina', 'dm2'], start: 'hipo',
      nodes: {
        hipo: { q: '¿Tuvo hipoglucemia sin causa clara?', opts: [{ t: 'Sí', go: 'bajar' }, { t: 'No', go: 'ayuno' }] },
        ayuno: { q: 'Glucosa en ayuno:', opts: [{ t: 'Arriba de 130', go: 'dosis' }, { t: '80 a 130 (en meta)', go: 'a1c' }] },
        dosis: { q: '¿Cuánta basal usa?', opts: [{ t: 'Menos de 0.5 U/kg/día', go: 'subir' }, { t: 'Más de 0.5 U/kg/día', go: 'prandial' }] },
        a1c: { q: 'HbA1c:', opts: [{ t: 'En meta', go: 'seguir' }, { t: 'Arriba de la meta', go: 'prandial' }] },
        bajar: { end: 'Bajar la basal 10 a 20%', d: 'Revisa comidas, ejercicio, función renal y sulfonilureas.' },
        subir: { end: 'Subir +2 U cada 3 días', d: 'Hasta ayuno de 80 a 130.' },
        prandial: { end: 'Agregar prandial o arGLP-1', d: 'Sobrebasalización o ayuno en meta con A1c alta: 4 U (o 10% de la basal) antes de la comida más grande.' },
        seguir: { end: 'Mantener', d: 'A1c y ayuno en meta: misma dosis y revisión en 3 meses.' }
      },
      cases: [
        { t: 'Don Ignacio con glargina 12 U.', data: [['Ayuno', '196'], ['Peso', '74 kg'], ['Hipoglucemias', 'No']], path: { hipo: 1, ayuno: 0, dosis: 0 }, end: 'subir' },
        { t: 'Mujer con glargina 48 U (80 kg).', data: [['Ayuno', '112'], ['A1c', '8.4%'], ['Hipoglucemias', 'No']], path: { hipo: 1, ayuno: 1, a1c: 1 }, end: 'prandial' },
        { t: 'Hombre con glargina 30 U y ERC que empeoró.', data: [['Hipoglucemias', '3 en la semana, de madrugada']], path: { hipo: 0 }, end: 'bajar' },
        { t: 'Hombre con glargina 60 U (90 kg).', data: [['Ayuno', '168'], ['A1c', '9.1%'], ['Hipoglucemias', 'No']], path: { hipo: 1, ayuno: 0, dosis: 1 }, end: 'prandial' },
        { t: 'Mujer con glargina 20 U.', data: [['Ayuno', '104'], ['A1c', '6.8%']], path: { hipo: 1, ayuno: 1, a1c: 0 }, end: 'seguir' }
      ]
    }
  },
  cases: [
    { id: 'g-cad', topic: 'cad', subj: 'endo',
      title: 'Dejó la insulina porque no comía', place: 'Urgencias',
      patient: { name: 'Fernanda', age: 19, sex: 'M', skin: '#E2B08A', hair: '#2A1A12', gown: '#B48CFF' },
      intro: 'DM1. Gastroenteritis de 2 días; suspendió la insulina. Vómito, dolor abdominal, Kussmaul y aliento a manzana.',
      extra: { label: 'K', unit: 'mEq/L' },
      start: { FC: 124, PAS: 96, PAD: 58, SpO2: 98, FR: 30, X: 5.4 },
      nodes: [
        { tag: 'Llegada', ecg: 'tachy',
          text: 'Glucosa 486, pH 7.08, HCO3 7, BHB 6.2, K 5.4.',
          q: '¿Qué va primero?',
          A: { t: 'Bolo de insulina IV de inmediato', ok: false, res: 'Sin volumen, la insulina mete el agua a las células: la PA cae a 78/40.', vit: { PAS: 78, PAD: 40 } },
          B: { t: 'Cristaloide 1 a 1.5 L en la primera hora', ok: true, res: 'PA 108/66, FC 110.', vit: { PAS: 108, PAD: 66, FC: 110 } },
          why: 'En las crisis hiperglucémicas los líquidos van primero.' },
        { tag: 'Hora 1', ecg: 'tachy',
          text: 'K 5.4.',
          q: '¿Y el potasio?',
          A: { t: 'Insulina 0.1 U/kg/h sin K; medir K cada 2 h', ok: true, res: 'A las 4 h el K baja a 3.9.', vit: { X: 3.9 } },
          B: { t: 'No dar insulina hasta que el K sea normal', ok: false, res: 'La cetosis avanza sin insulina: pH 7.02.' },
          why: 'K >5.0: insulina sin potasio, vigilando de cerca.' },
        { tag: 'Hora 4', ecg: 'normal', vit: { FC: 102, X: 3.9 },
          text: 'K 3.9, glucosa 300.',
          q: '¿Qué agregas?',
          A: { t: 'KCl 20 mEq por litro a los líquidos', ok: true, res: 'K estable en 4.2.', vit: { X: 4.2 } },
          B: { t: 'Nada: el K está normal', ok: false, res: 'A las 2 h el K es 2.9 con ondas U y extrasístoles.', ecg: 'stdep', vit: { X: 2.9 } },
          why: 'Entre 3.5 y 5.0: agrega K a los líquidos; la insulina lo sigue metiendo a la célula.' },
        { tag: 'Hora 7', ecg: 'normal', vit: { FC: 96, PAS: 112, PAD: 70, FR: 22, X: 4.2 },
          text: 'Glucosa 228, pH 7.2, BHB 2.4.',
          q: '¿Qué haces con la insulina?',
          A: { t: 'Suspenderla porque la glucosa ya bajó', ok: false, res: 'La cetosis regresa: pH 7.12.' },
          B: { t: 'Agregar dextrosa 10% y bajar la insulina a 0.05 U/kg/h', ok: true, res: 'A las 16 h: BHB 0.4, pH 7.34. Glargina 2 h antes de quitar la infusión.', vit: { FR: 16, FC: 84 } },
          why: 'Se trata la cetosis, no la glucosa: dextrosa y seguir con insulina hasta resolver.' }
      ] }
  ]
};
