// Tema 48 · Fiebre y fiebre de origen desconocido (Infectología, semana 4)
const T = { topic: 'fod', subj: 'infecto' };
const q = (o) => ({ ...T, ...o });
const SRC = { short: 'De tu Guía Infecto', vs: 'tu guía', name: 'Guía Infecto · Ximena Cors Cepeda (EMIS 5)', url: 'https://docs.google.com/document/d/1z8GAmFxqoyJtS21XWHwMlvykDNaoEMW07PgJh45aMwY/edit' };

export default {
  lessons: {
    fod: {
      hook: 'FOD clásica: >38.3 °C en varias ocasiones por ≥3 semanas sin diagnóstico tras un estudio básico. Las causas se reparten en infecciones, cáncer e inflamatorias; la clave está en una historia minuciosa y en no dar antibiótico “a ciegas”.',
      nn: [], yt: 'fever of unknown origin approach',
      video: [
        { ch: 'Qué es y qué no es', sc: [
          { v: { k: 'title', t: 'Fiebre de origen desconocido', s: 'Semana 4 · Infectología' },
            say: 'Semana cuatro: la fiebre de origen desconocido. Es el paciente que lleva semanas con fiebre y nadie sabe por qué. Aquí no gana quien pide más estudios, sino quien sigue un orden. Vamos con una paciente.' },
          { v: { k: 'case', t: 'Cuatro semanas con fiebre', p: { name: 'Amparo', age: 68, sex: 'M', skin: '#E2B08A', hair: '#B0B0B0', gown: '#5EEAD4' }, text: 'Fiebre de 38.5 casi a diario por 4 semanas. Cansancio, bajó 4 kg, dolor de cabeza nuevo y le duele la mandíbula al masticar. Ya tomó dos antibióticos sin mejoría.', vit: { T: '38.5', VSG: '98' } },
            say: 'Amparo tiene sesenta y ocho años y cuatro semanas con fiebre de treinta y ocho punto cinco casi diario. Está cansada, bajó cuatro kilos, tiene dolor de cabeza nuevo y le duele la mandíbula al masticar. Ya tomó dos antibióticos sin mejorar. Su velocidad de sedimentación es de noventa y ocho.' },
          { v: { k: 'big', h: 'Fiebre de origen desconocido clásica', t: '3 semanas', s: 'Fiebre >38.3 °C en varias ocasiones, por 3 semanas o más, sin diagnóstico tras un estudio inicial razonable.' },
            say: 'La definición clásica: fiebre de más de treinta y ocho punto tres en varias ocasiones, por tres semanas o más, sin diagnóstico después de un estudio inicial razonable, ya sea tres visitas, tres días de hospital o una semana de estudio dirigido.' },
          { v: { k: 'vs', a: 'Tipo', b: 'Qué pensar', rows: [['Nosocomial', 'C. difficile, catéter, fármacos', 'TEP, sinusitis'], ['Neutropénica', 'Menos de 500 neutrófilos', 'Antibiótico en 1 hora'], ['VIH', 'MAC, TB, CMV', 'Linfoma, criptococo'], ['Hipertermia', 'Golpe de calor, maligna', 'No responde a antipirético']] },
            say: 'Hay otros tipos que se manejan distinto. La nosocomial, en un hospitalizado: difficile, catéteres, fármacos, tromboembolia. La neutropénica, con menos de quinientos neutrófilos, es una urgencia que se trata en la primera hora. En VIH, piensa en micobacterias, citomegalovirus, linfoma y criptococo. Y la hipertermia no es fiebre: no responde a antipiréticos.' }
        ] },
        { ch: 'Las cuatro familias de causas', sc: [
          { v: { k: 'list', t: 'Infecciones', items: ['TB extrapulmonar o miliar', 'Endocarditis (cultivo negativo: HACEK, Coxiella)', 'Abscesos abdominales, hepáticos, dentales', 'Osteomielitis, brucelosis, tifoidea', 'VIH agudo, CMV, VEB'] },
            say: 'Primera familia, infecciones: tuberculosis extrapulmonar o miliar, endocarditis, incluida la de cultivo negativo por HACEK o Coxiella, abscesos abdominales, hepáticos o dentales, osteomielitis, brucelosis por leche sin pasteurizar, tifoidea y virus como VIH agudo, citomegalovirus y Epstein Barr.' },
          { v: { k: 'list', t: 'Neoplasias', items: ['Linfoma: la más común', 'Leucemia', 'Carcinoma renal', 'Hepatocarcinoma y metástasis hepáticas', 'Mixoma auricular'] },
            say: 'Segunda, neoplasias. La más común es el linfoma, con síntomas B: fiebre, sudoración nocturna y pérdida de peso. También leucemia, carcinoma renal, hígado con tumor o metástasis, y el mixoma auricular.' },
          { v: { k: 'list', t: 'Inflamatorias', items: ['Arteritis de células gigantes (mayor de 50)', 'Still del adulto: ferritina altísima', 'Lupus y otras vasculitis', 'Sarcoidosis, EII'] },
            say: 'Tercera, enfermedades inflamatorias. En mayores de cincuenta, la arteritis de células gigantes. En jóvenes, el Still del adulto, con fiebre en picos, exantema color salmón, artritis y ferritina altísima. También lupus, otras vasculitis, sarcoidosis y enfermedad inflamatoria intestinal.' },
          { v: { k: 'list', t: 'Otras', items: ['Fiebre por fármacos: betalactámicos, anticonvulsivos', 'TEP y TVP', 'Hipertiroidismo', 'Hematomas', 'Facticia'] },
            say: 'Cuarta, otras: fiebre por fármacos, que cede a las cuarenta y ocho o setenta y dos horas de suspenderlos; tromboembolia; hipertiroidismo; hematomas que se reabsorben; y fiebre facticia.' },
          { v: { k: 'quiz', q: 'Amparo: 68 años, cefalea nueva, claudicación mandibular, VSG 98. ¿Qué sospechas?', opts: ['Linfoma', 'Arteritis de células gigantes', 'Endocarditis'], a: 1 },
            say: 'Pausa. Con lo que sabes de Amparo, sesenta y ocho años, cefalea nueva, dolor de mandíbula al masticar y sedimentación de noventa y ocho, ¿qué sospechas?',
            exp: 'Arteritis de células gigantes. Es la causa inflamatoria más común de fiebre de origen desconocido en mayores de cincuenta. La claudicación mandibular es muy específica, y el riesgo es la ceguera por neuritis óptica isquémica.' }
        ] },
        { ch: 'El abordaje en orden', sc: [
          { v: { k: 'list', t: 'Historia que se repite', items: ['Viajes, animales, leche sin pasteurizar', 'Contactos de TB, prácticas sexuales', 'Todos los fármacos', 'Prótesis, válvulas, catéteres', 'Explorar a diario: soplos, ganglios, temporales'] },
            say: 'El primer estudio es la historia, y se repite. Pregunta viajes, animales, leche sin pasteurizar, contactos de tuberculosis, prácticas sexuales, todos los fármacos, prótesis y válvulas. Y explora todos los días: un soplo nuevo, un ganglio, una arteria temporal engrosada o un bazo que crece.' },
          { v: { k: 'flow', t: 'Estudio escalonado', steps: ['BH con frotis, VSG, PCR, PFH, LDH, EGO', '3 hemocultivos, VIH, PPD o IGRA, ANA, FR, ferritina', 'TC de tórax, abdomen y pelvis', 'PET-CT si la TC no aclara', 'Biopsia dirigida a lo anormal'] },
            say: 'Luego, laboratorio básico: biometría con frotis, sedimentación, proteína C reactiva, pruebas de función hepática, deshidrogenasa láctica y examen de orina. Tres hemocultivos antes de cualquier antibiótico, VIH, prueba de tuberculosis, anticuerpos antinucleares, factor reumatoide y ferritina. Después, tomografía de tórax, abdomen y pelvis. Si no aclara, PET CT, que es el estudio de imagen con más rendimiento. Y al final, biopsia de lo que salga anormal.' },
          { v: { k: 'tip', kind: 'trap', t: 'En el paciente estable, nada de antibiótico ni esteroide a ciegas: negativizan cultivos y tapan un linfoma o una vasculitis.' },
            say: 'La gran trampa: dar antibiótico o esteroide empírico a un paciente estable. Los antibióticos negativizan los hemocultivos de una endocarditis, y el esteroide tapa un linfoma. Solo se trata a ciegas al paciente grave o neutropénico.' },
          { v: { k: 'quiz', q: 'Fiebre de 4 semanas en un estable. TC de tórax, abdomen y pelvis normal. ¿Qué sigue?', opts: ['Ceftriaxona empírica', 'PET-CT', 'Prednisona de prueba'], a: 1 },
            say: 'Pausa. Paciente estable, cuatro semanas con fiebre, laboratorio inicial sin pista y tomografía normal. ¿Qué sigue?',
            exp: 'PET CT con fluorodesoxiglucosa. Encuentra focos inflamatorios, infecciosos o tumorales que la tomografía no ve y guía la biopsia. Antibiótico o esteroide a ciegas solo esconderían el diagnóstico.' }
        ] },
        { ch: 'Cierre del caso', sc: [
          { v: { k: 'list', t: 'Amparo: final del caso', items: ['Arteria temporal engrosada y dolorosa', 'Prednisona 40 a 60 mg HOY', 'Biopsia en las siguientes 2 semanas', 'Biopsia: arteritis granulomatosa', 'Fiebre cede en 48 h'] },
            say: 'Al explorar a Amparo, su arteria temporal está engrosada y duele. Se inicia prednisona de cuarenta a sesenta miligramos el mismo día, sin esperar la biopsia, para proteger la visión. La biopsia, hecha en las siguientes dos semanas, muestra arteritis granulomatosa, y la fiebre cede en cuarenta y ocho horas.' },
          { v: { k: 'tip', kind: 'pearl', t: 'Arteritis de células gigantes con síntomas visuales o alta sospecha: esteroide antes de la biopsia. La biopsia sigue siendo útil hasta 2 semanas después.' },
            say: 'Perla: en la arteritis de células gigantes, el esteroide va antes que la biopsia. La biopsia sigue siendo útil hasta dos semanas después de iniciarlo, pero la ceguera no se recupera.' },
          { v: { k: 'mnemo', t: 'Infección · cáncer · inflamación · otras', d: '3 semanas, >38.3 °C. Historia repetida → laboratorio → TC → PET-CT → biopsia. Nada a ciegas si está estable.' },
            say: 'Llévate las cuatro familias: infección, cáncer, inflamación y otras. Y el orden: historia repetida, laboratorio, tomografía, PET CT y biopsia, sin tratamiento a ciegas si está estable. Ahora practica en el taller con el algoritmo de fiebre.' }
        ] }
      ],
      sections: [
        { h: 'Definición y tipos', html: `
<ul>
<li><b>Fiebre</b>: temperatura central ≥38.3 °C (oral ≥37.8 en la mañana). Hiperpirexia &gt;41.5 °C. Hipertermia (golpe de calor, maligna, neuroléptico maligno) no responde a antipiréticos.</li>
<li><b>FOD clásica</b>: &gt;38.3 °C en varias ocasiones, <b>≥3 semanas</b>, sin diagnóstico tras ≥3 visitas, 3 días de hospital o 1 semana de estudio ambulatorio dirigido.</li>
<li>Otras: <b>nosocomial</b> (hospitalizado sin infección al ingreso: <i>C. difficile</i>, catéteres, sinusitis, fármacos, TEP), <b>neutropénica</b> (&lt;500 neutrófilos: urgencia, antibiótico antipseudomonas en 1 h), <b>VIH</b> (MAC, TB, CMV, linfoma, criptococo).</li>
<li>Patrones: continua, remitente, intermitente (abscesos, malaria), recurrente (Pel-Ebstein en Hodgkin), ondulante (brucelosis), bifásica (dengue, leptospirosis). Disociación pulso-temperatura (Faget): tifoidea, <i>Legionella</i>, fármacos.</li>
</ul>` },
        { h: 'Causas', html: `
<div class="tablewrap"><table class="mini">
<tr><th>Grupo</th><th>Causas más importantes</th></tr>
<tr><td><b>Infecciones</b></td><td>TB extrapulmonar/miliar, <b>endocarditis</b> (cultivo negativo: HACEK, <i>Coxiella</i>, <i>Bartonella</i>), abscesos abdominales/hepáticos/dentales, osteomielitis, brucelosis, tifoidea, CMV/VEB, VIH agudo, paludismo</td></tr>
<tr><td><b>Neoplasias</b></td><td><b>Linfoma</b> (síntomas B), leucemia, carcinoma renal, hepatocarcinoma/metástasis hepáticas, mixoma auricular</td></tr>
<tr><td><b>Inflamatorias</b></td><td><b>Still del adulto</b> (fiebre en picos, rash asalmonado, artritis, ferritina muy alta), <b>arteritis de células gigantes</b> (&gt;50 años, cefalea, claudicación mandibular, VSG alta), LES, vasculitis, sarcoidosis, EII</td></tr>
<tr><td><b>Otras</b></td><td><b>Fiebre por fármacos</b> (betalactámicos, anticonvulsivos, sulfas; mejora a las 48–72 h de suspender), TEP/TVP, hipertiroidismo, hematomas, fiebre facticia, síndromes periódicos (FMF)</td></tr>
</table></div>` },
        { h: 'Abordaje', html: `
<ol>
<li>Historia exhaustiva y repetida: viajes, animales (brucelosis: leche no pasteurizada; Q: granjas), contactos de TB, prácticas sexuales, fármacos, prótesis, síntomas B; exploración diaria (soplos, adenopatías, hígado/bazo, arterias temporales, piel, fondo de ojo).</li>
<li>Laboratorio básico: BH con frotis, VSG, PCR, química con PFH, CPK, LDH, EGO y urocultivo, <b>3 hemocultivos</b> (antes de antibióticos), <b>VIH</b>, ANA, FR, ferritina, electroforesis, PPD/IGRA, RX de tórax.</li>
<li>Imagen: <b>TC de tórax, abdomen y pelvis</b> → <b>PET-CT con FDG</b> si no es concluyente (el de mayor rendimiento). Eco transesofágico si se sospecha endocarditis.</li>
<li><b>Biopsia</b> dirigida (ganglio, hígado, médula ósea en citopenias, arteria temporal en &gt;50 años con VSG alta).</li>
<li>Paciente estable: <b>no</b> dar antibióticos ni esteroides empíricos. Paciente grave/neutropénico: tratar sin esperar.</li>
</ol>` },
        { h: 'Cómo lo preguntan en el examen', html: `
<ul>
<li>Fiebre 4 semanas, sudoración y adenopatías → <b>linfoma</b> → biopsia ganglionar.</li>
<li>Mayor de 60 años con FOD, cefalea y VSG 100 → <b>arteritis de células gigantes</b> → prednisona y biopsia.</li>
<li>Fiebre en picos, rash asalmonado, artritis y ferritina 15,000 → <b>Still del adulto</b>.</li>
<li>Fiebre en paciente con eosinofilia y nuevo fármaco → <b>fiebre por fármacos</b>: suspender.</li>
<li>Tras TC normal → <b>PET-CT</b>.</li>
</ul>` }
      ],
      mnemo: { t: 'FOD: infección · cáncer · inflamación · otras', d: '≥3 semanas, >38.3 °C, sin diagnóstico tras estudio básico. TC → PET-CT → biopsia. No antibiótico ni esteroide a ciegas.' },
      pearl: 'En mayores de 50 años con FOD y VSG alta, piensa en arteritis de células gigantes: el retraso puede costar la visión.',
      trap: 'El antibiótico empírico en un paciente estable con FOD negativiza los hemocultivos de una endocarditis y retrasa el diagnóstico.',
      guide: [
        'Hoy la definición de FOD clásica pide un estudio mínimo (hemocultivos, TC, etc.) en lugar de un número fijo de días de hospitalización.',
        'Tu guía describe los patrones de fiebre; para el examen lo más útil es la tabla de causas y el uso del PET-CT.'
      ],
      refs: [
        'Wright WF, Auwaerter PG. Fever and fever of unknown origin: review, recent advances, and lingering dogma. Open Forum Infect Dis 2020.',
        'Haidar G, Singh N. Fever of unknown origin. N Engl J Med 2022.',
        'Freifeld AG, et al. Clinical practice guideline for antimicrobial agents in neutropenic patients with cancer: IDSA. Clin Infect Dis 2011.'
      ]
    }
  },

  guias: {
    fod: { src: SRC,
      puntos: [
        'FOD: &gt;38.3 °C por ≥3 semanas, ≥3 visitas o ≥3 días hospitalizado sin diagnóstico.',
        'Patrones: intermitente (abscesos, malaria, Still), remitente (TB, endocarditis, tifoidea), recurrente (Pel-Ebstein, brucelosis), bifásica (leptospira, dengue), ondulante (brucelosis).',
        'Tipos: clásica (TB #1, endocarditis, abscesos, linfoma, Still, LES), nosocomial (neumonía, IVU, sondas, C. difficile, TEP), inmunodeficiencia (neutropenia febril), VIH.',
        'Abordaje: 3 hemocultivos (aerobios y anaerobios), PCR, VSG, BH.'
      ],
      ojo: ['El estudio de imagen con mejor rendimiento cuando la TC no es diagnóstica es el <b>PET-CT con FDG</b>.'],
      cards: [['Pel-Ebstein', 'Fiebre que va y viene por semanas: linfoma de Hodgkin']] }
  },

  cards: [
    ['Definición de FOD clásica', '>38.3 °C varias veces por ≥3 semanas sin diagnóstico tras estudio básico'],
    ['Grupos de causas de FOD', 'Infección, neoplasia, inflamatoria, otras'],
    ['Infección más común en FOD', 'TB extrapulmonar (y endocarditis, abscesos)'],
    ['Neoplasia más común en FOD', 'Linfoma'],
    ['FOD en >50 años con VSG alta', 'Arteritis de células gigantes'],
    ['Still del adulto', 'Fiebre en picos, rash asalmonado, artritis, ferritina muy alta'],
    ['Fiebre por fármacos', 'Mejora 48–72 h tras suspender'],
    ['Imagen tras TC no diagnóstica', 'PET-CT con FDG'],
    ['FOD en paciente estable', 'No antibiótico ni esteroide empírico'],
    ['Neutropenia febril', 'Urgencia: antipseudomonas (cefepime) en ≤1 h'],
    ['Disociación pulso-temperatura', 'Tifoidea, Legionella, fármacos']
  ],

  questions: [
    q({ id: 'fod-01', dif: 1, stem: '¿Qué define la fiebre de origen desconocido clásica?', opts: ['Fiebre >37.5 por 3 días', '>38.3 °C en varias ocasiones por ≥3 semanas sin diagnóstico tras estudio básico', 'Fiebre en neutropénico', 'Fiebre con sepsis', 'Fiebre de 1 semana'], ans: 1,
      exp: 'Definición de Petersdorf modificada.', why: ['No.', '', 'Es neutropénica.', 'No.', 'Corta.'], ref: 'Haidar, NEJM 2022' }),
    q({ id: 'fod-02', dif: 2, stem: 'Mujer de 72 años con fiebre de 4 semanas, cefalea temporal, claudicación mandibular y VSG 105. ¿Conducta?', opts: ['Antibiótico de amplio espectro', 'Prednisona inmediata y biopsia de arteria temporal', 'Esperar resultados', 'PET-CT antes de todo', 'AINE'], ans: 1,
      exp: 'Arteritis de células gigantes: esteroide de inmediato por riesgo de ceguera; la biopsia sigue siendo útil días después.', why: ['No.', '', 'Riesgo de ceguera.', 'Retrasa.', 'Insuficiente.'], ref: 'Haidar, NEJM 2022' }),
    q({ id: 'fod-03', dif: 2, stem: 'Joven con fiebre diaria en picos de 39.5 °C, rash asalmonado evanescente, artritis, leucocitosis y ferritina de 18,000. ¿Diagnóstico?', opts: ['LES', 'Enfermedad de Still del adulto', 'Linfoma', 'Endocarditis', 'Fiebre reumática'], ans: 1,
      exp: 'Still: diagnóstico de exclusión; ferritina muy alta es característica.', why: ['ANA y otro cuadro.', '', 'Debe descartarse.', 'No.', 'No.'], ref: 'Haidar, NEJM 2022' }),
    q({ id: 'fod-04', dif: 2, stem: 'Paciente con FOD, estable, TC de tórax, abdomen y pelvis normal. ¿Siguiente estudio de imagen?', opts: ['RM de cráneo', 'PET-CT con FDG', 'Gammagrama óseo', 'USG', 'Repetir TC en 1 año'], ans: 1,
      exp: 'El PET-CT localiza focos infecciosos, inflamatorios y neoplásicos para biopsiar.', why: ['No dirigido.', '', 'Limitado.', 'Inferior.', 'No.'], ref: 'Wright 2020' }),
    q({ id: 'fod-05', dif: 2, stem: 'Paciente con FOD estable sin diagnóstico. ¿Qué NO debes hacer?', opts: ['Hemocultivos', 'Iniciar antibióticos y esteroides empíricos', 'Historia de viajes', 'VIH', 'TC'], ans: 1,
      exp: 'Ocultan la causa (endocarditis, linfoma, vasculitis).', why: ['Necesario.', '', 'Necesario.', 'Necesario.', 'Necesario.'], ref: 'Haidar, NEJM 2022' }),
    q({ id: 'fod-06', dif: 2, stem: 'Hombre con fiebre, sudoración nocturna, pérdida de peso y adenopatías cervicales indoloras de 5 semanas. ¿Estudio definitivo?', opts: ['Biopsia excisional de ganglio', 'Aspirado con aguja fina solo', 'Hemocultivo', 'Serología VEB solo', 'Gammagrama'], ans: 0,
      exp: 'El linfoma requiere biopsia excisional (arquitectura).', why: ['', 'Insuficiente para linfoma.', 'No.', 'No basta.', 'No.'], ref: 'Haidar, NEJM 2022' }),
    q({ id: 'fod-07', dif: 2, stem: 'Paciente hospitalizado con fiebre 5 días después de iniciar fenitoína, con eosinofilia y rash, sin foco infeccioso. ¿Diagnóstico?', opts: ['Sepsis', 'Fiebre por fármacos (posible DRESS)', 'Neumonía', 'TEP', 'Linfoma'], ans: 1,
      exp: 'Suspender el fármaco; la fiebre debe ceder en 48–72 h.', why: ['No hay foco.', '', 'No.', 'No.', 'No.'], ref: 'Wright 2020' }),
    q({ id: 'fod-08', dif: 3, stem: 'Ganadero con fiebre ondulante, sudoración, artralgias y hepatoesplenomegalia tras tomar leche no pasteurizada. ¿Agente?', opts: ['Salmonella typhi', 'Brucella', 'Leptospira', 'Coxiella', 'TB'], ans: 1,
      exp: 'Brucelosis: fiebre ondulante, leche cruda; doxiciclina + rifampicina (o estreptomicina).', why: ['Agua/alimentos, no ondulante.', '', 'Agua con orina de roedores.', 'Aerosoles de granja.', 'No.'], ref: 'Wright 2020' }),
    q({ id: 'fod-09', dif: 2, stem: 'Paciente con quimioterapia, neutrófilos 300 y fiebre de 38.6 °C, estable. ¿Conducta?', opts: ['Observar 48 h', 'Hemocultivos y cefepime (antipseudomonas) en ≤1 h', 'Esteroides', 'Solo paracetamol', 'Esperar PET-CT'], ans: 1,
      exp: 'Neutropenia febril: urgencia; antibiótico empírico antipseudomonas inmediato.', why: ['Peligroso.', '', 'No.', 'Insuficiente.', 'No.'], ref: 'IDSA 2011' }),
    q({ id: 'fod-10', dif: 2, stem: 'Paciente con FOD, soplo nuevo y hemocultivos negativos tras antibióticos previos. ¿Qué debes sospechar?', opts: ['Fiebre facticia', 'Endocarditis con cultivos negativos', 'Linfoma', 'Still', 'Hipertiroidismo'], ans: 1,
      exp: 'Antibiótico previo, HACEK, Coxiella, Bartonella: eco transesofágico y serologías.', why: ['No.', '', 'No explica el soplo.', 'No.', 'No.'], ref: 'Haidar, NEJM 2022' }),
    q({ id: 'fod-11', dif: 2, stem: '¿Qué hallazgo apoya hipertermia (y no fiebre)?', opts: ['Respuesta al paracetamol', 'Temperatura muy alta sin respuesta a antipiréticos tras exposición al calor o fármacos', 'Escalofríos', 'Leucocitosis', 'PCR alta'], ans: 1,
      exp: 'En la hipertermia el termostato hipotalámico no cambia; se trata con enfriamiento (y dantroleno en maligna).', why: ['Es de fiebre.', '', 'Inespecífico.', 'Inespecífico.', 'Inespecífico.'], ref: 'Wright 2020' }),
    q({ id: 'fod-12', dif: 2, stem: 'Paciente con VIH (CD4 30), fiebre prolongada, diarrea, anemia, FA alta y hepatoesplenomegalia. ¿Agente probable?', opts: ['Neumococo', 'Mycobacterium avium complex', 'Influenza', 'E. coli', 'Giardia'], ans: 1,
      exp: 'MAC diseminado con CD4 <50: hemocultivo para micobacterias; claritromicina + etambutol.', why: ['No.', '', 'No.', 'No.', 'No.'], ref: 'Wright 2020' }),
    q({ id: 'fod-13', dif: 1, stem: '¿Cuál es la neoplasia que con más frecuencia causa FOD?', opts: ['Cáncer de mama', 'Linfoma', 'Cáncer de próstata', 'Melanoma', 'Cáncer de tiroides'], ans: 1,
      exp: 'Linfoma (síntomas B); también leucemia, carcinoma renal y metástasis hepáticas.', why: ['No.', '', 'No.', 'No.', 'No.'], ref: 'Haidar, NEJM 2022' }),
    q({ id: 'fod-14', dif: 2, stem: 'Enfermera con fiebre recurrente documentada, cultivos con flora mixta, sin hallazgos y discrepancia entre temperatura y pulso. ¿Sospecha?', opts: ['Endocarditis', 'Fiebre facticia', 'Linfoma', 'TB', 'Still'], ans: 1,
      exp: 'Trastorno facticio: personal de salud, autoinyección de material contaminado o manipulación del termómetro.', why: ['No.', '', 'No.', 'No.', 'No.'], ref: 'Wright 2020' }),
    q({ id: 'fod-15', dif: 2, stem: '¿Qué estudio debe incluirse siempre en el abordaje básico de una FOD?', opts: ['Biopsia hepática', 'Prueba de VIH', 'Punción lumbar', 'Colonoscopia', 'RM de columna'], ans: 1,
      exp: 'El VIH (agudo o con oportunistas) es causa importante y cambia todo el abordaje.', why: ['No de rutina.', '', 'No de rutina.', 'No de rutina.', 'No de rutina.'], ref: 'Haidar, NEJM 2022' })
  ]
};
