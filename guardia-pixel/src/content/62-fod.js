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
        { ch: 'Qué es y por qué', sc: [
          { v: { k: 'title', t: 'Fiebre de origen desconocido', s: 'Semana 4 · Infectología' },
            say: 'Semana cuatro: la fiebre de origen desconocido. Se define como fiebre de más de treinta y ocho punto tres en varias ocasiones, por tres semanas o más, sin diagnóstico después de un estudio inicial razonable.' },
          { v: { k: 'list', t: 'Grandes grupos', items: ['Infecciones: TB, endocarditis, abscesos', 'Neoplasias: linfoma, renal, leucemia', 'Inflamatorias: Still, arteritis temporal, LES', 'Misceláneas: fármacos, facticia, TEP'] },
            say: 'Las causas se dividen en infecciones, como tuberculosis extrapulmonar, endocarditis y abscesos; neoplasias, sobre todo linfoma; enfermedades inflamatorias, como Still del adulto y arteritis de células gigantes en mayores; y otras, como fiebre por fármacos o facticia.' },
          { v: { k: 'tip', kind: 'trap', t: 'No des antibiótico empírico ni esteroide en una FOD estable: borras el diagnóstico.' },
            say: 'La trampa: en un paciente estable no se da antibiótico ni esteroide a ciegas, porque negativizan cultivos y tapan un linfoma o una vasculitis.' }
        ] },
        { ch: 'Abordaje', sc: [
          { v: { k: 'flow', t: 'Estudio escalonado', steps: ['Historia y exploración repetidas', 'BH, VSG/PCR, química, EGO, hemocultivos, VIH', 'TC tórax-abdomen-pelvis', 'PET-CT', 'Biopsia dirigida'] },
            say: 'El abordaje es escalonado: historia y exploración repetidas, laboratorio básico con hemocultivos y VIH, tomografía de tórax, abdomen y pelvis, luego PET CT, y biopsia de lo que salga anormal.' },
          { v: { k: 'mnemo', t: 'Infección, cáncer, inflamación, otras', d: 'TB extrapulmonar, endocarditis, abscesos; linfoma; Still, arteritis temporal; fármacos y facticia.' },
            say: 'Llévate los cuatro grupos: infección, cáncer, inflamación y otras. Y el PET CT es el estudio de imagen más útil cuando la tomografía no lo resuelve.' }
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
