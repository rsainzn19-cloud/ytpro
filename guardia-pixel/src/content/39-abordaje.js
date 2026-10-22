// Tema 30 · Abordaje del paciente reumatológico (Reumatología, semanas 1–2)
const T = { topic: 'abordaje', subj: 'reuma' };
const q = (o) => ({ ...T, ...o });

export default {
  lessons: {
    abordaje: {
      hook: 'Antes de pedir anticuerpos, cuenta articulaciones, mide el tiempo de rigidez y decide si el dolor es articular o periarticular. Y ante una monoartritis aguda: punciona.',
      nn: [],
      yt: 'approach to joint pain arthritis',
      sections: [
        { h: 'Cinco preguntas', html: `
<ul>
<li><b>¿Articular o periarticular?</b> Articular: dolor en todo el arco de movimiento, activo y pasivo; derrame, limitación. Periarticular (bursitis, tendinitis, entesitis): dolor localizado, con movimientos activos específicos, el pasivo suele ser menos doloroso.</li>
<li><b>¿Inflamatorio o mecánico?</b> Inflamatorio: rigidez matutina &gt;60 min (&gt;30 en muchos textos), mejora con la actividad, aumento de volumen blando, calor, síntomas sistémicos, PCR/VSG ↑. Mecánico: empeora con el uso, rigidez &lt;30 min.</li>
<li><b>¿Cuántas?</b> Monoartritis (1), oligoartritis (2–4), poliartritis (≥5).</li>
<li><b>¿Cuánto tiempo?</b> Aguda (&lt;6 semanas: infecciones, cristales, viral) vs crónica (≥6 semanas: AR, espondiloartritis, LES).</li>
<li><b>¿Cuáles y cómo?</b> Simétrica vs asimétrica, pequeñas vs grandes, axial, migratoria o aditiva.</li>
</ul>` },
        { h: 'Patrones que orientan', html: `
<ul>
<li>Poliartritis simétrica de MCF, IFP y muñecas → <b>AR</b>; si es aguda, viral (parvovirus B19, hepatitis B y C, chikungunya) o LES.</li>
<li>Oligoartritis asimétrica de miembros inferiores + entesitis o lumbalgia inflamatoria → <b>espondiloartritis</b> o artritis reactiva.</li>
<li><b>IFD</b> → osteoartritis o artritis psoriásica.</li>
<li><b>1ª MTF</b> aguda → gota.</li>
<li>Migratoria → fiebre reumática, gonococo, endocarditis.</li>
<li>Manifestaciones extraarticulares: piel (psoriasis, eritema malar, nódulos), ojos (uveítis, escleritis, ojo seco), úlceras orales, Raynaud, serositis, diarrea o uretritis.</li>
</ul>` },
        { h: 'Monoartritis aguda', html: `
<ul>
<li><b>Artrocentesis siempre</b>: Gram, cultivo, conteo celular y cristales. No se puede descartar infección sin líquido.</li>
<li>Artritis séptica: <b>S. aureus</b> la causa más común; <b>gonococo</b> en jóvenes con vida sexual activa (tríada: tenosinovitis, pústulas en piel, poliartralgias migratorias).</li>
<li>Gota y pseudogota pueden coexistir con infección.</li>
</ul>
<div class="tablewrap"><table class="mini"><tr><th>Líquido sinovial</th><th>Leucocitos/µL</th><th>Neutrófilos</th></tr>
<tr><td>Normal</td><td>&lt;200</td><td>&lt;25%</td></tr>
<tr><td>No inflamatorio (OA, trauma)</td><td>200–2,000</td><td>&lt;25%</td></tr>
<tr><td>Inflamatorio (AR, gota)</td><td>2,000–50,000</td><td>≥50%</td></tr>
<tr><td>Séptico</td><td>&gt;50,000 (a menudo &gt;100,000)</td><td>≥75–90%</td></tr></table></div>` },
        { h: 'Laboratorio con criterio', html: `
<ul>
<li><b>VSG y PCR</b>: inflamación, no diagnóstico.</li>
<li><b>Factor reumatoide</b>: sensible pero poco específico (hepatitis C, endocarditis, edad avanzada). <b>Anti-CCP</b>: especificidad ~95% para AR.</li>
<li><b>ANA</b>: muy sensible para LES (&gt;95%) pero poco específico (5–15% de sanos positivos a títulos bajos). Pídelos solo con sospecha clínica. Específicos de LES: <b>anti-dsDNA</b> y <b>anti-Sm</b>.</li>
<li><b>HLA-B27</b>: apoya espondiloartritis, no diagnostica.</li>
<li><b>Ácido úrico</b>: puede ser normal durante un ataque de gota.</li>
<li>Complemento, ANCA, CK, anti-Ro/La según la sospecha.</li>
</ul>` }
      ],
      mnemo: { t: 'Monoartritis caliente = “pica antes de pensar”', d: 'Punciona la articulación antes de dar esteroide: una artritis séptica destruye el cartílago en días.' },
      pearl: 'Un ANA positivo a título bajo (1:80) sin clínica no es lupus: es frecuente en personas sanas, sobre todo mujeres y adultos mayores.',
      trap: 'No infiltres esteroide en una articulación caliente sin descartar infección con el líquido sinovial.',
      guide: [
        'Rigidez matutina “inflamatoria”: unos textos usan >30 min y otros >60 min (los criterios ACR de 1987 para AR pedían ≥1 h). En la práctica, a más tiempo, más probable que sea inflamatoria.',
        'Umbrales del líquido sinovial: son orientativos; una artritis séptica puede tener <50,000 leucocitos (sobre todo en inmunosuprimidos o gonococo) y una gota puede superar los 50,000.'
      ],
      refs: [
        'Harrison. Principios de Medicina Interna, 21e. Cap. Abordaje de los trastornos articulares y musculoesqueléticos.',
        'Margaretten ME, et al. Does this adult patient have septic arthritis? JAMA 2007.',
        'Firestein & Kelley\'s Textbook of Rheumatology, 11e. History and physical examination.'
      ]
    }
  },

  cards: [
    ['Dolor articular verdadero', 'Todo el arco de movimiento, activo y pasivo'],
    ['Dolor periarticular', 'Localizado; duele más el movimiento activo específico'],
    ['Rigidez de patrón inflamatorio', '>30–60 min, mejora con la actividad'],
    ['Oligoartritis', '2–4 articulaciones'],
    ['Poliartritis', '≥5 articulaciones'],
    ['Artritis aguda vs crónica', '<6 semanas vs ≥6 semanas'],
    ['Monoartritis aguda: paso obligado', 'Artrocentesis: Gram, cultivo, células, cristales'],
    ['Causa más común de artritis séptica', 'Staphylococcus aureus'],
    ['Tríada de gonococo diseminado', 'Tenosinovitis, pústulas cutáneas, poliartralgias migratorias'],
    ['Líquido séptico', '>50,000 leucocitos con ≥75–90% neutrófilos'],
    ['Anticuerpo más específico para AR', 'Anti-CCP'],
    ['ANA', 'Muy sensible para LES, poco específico'],
    ['Anticuerpos específicos de LES', 'Anti-dsDNA y anti-Sm'],
    ['Poliartritis aguda simétrica + exantema', 'Viral: parvovirus B19, hepatitis B/C, chikungunya']
  ],

  questions: [
    q({ id: 'abordaje-01', dif: 1,
      stem: 'Hombre de 55 años con rodilla derecha caliente, roja y con derrame desde hace 24 h, y fiebre de 38.5 °C. ¿Primer paso?',
      opts: ['Iniciar colchicina', 'Artrocentesis con Gram, cultivo, conteo celular y cristales', 'Infiltrar esteroide', 'Rx y alta con AINE', 'Pedir ácido úrico y decidir con él'],
      ans: 1,
      exp: 'Monoartritis aguda con fiebre: la artritis séptica es la urgencia a descartar. Solo el líquido sinovial diferencia infección de cristales (y pueden coexistir).',
      why: ['No antes de descartar infección.', '', 'Peligroso si hay infección.', 'Pasa por alto una artritis séptica.', 'Puede ser normal en gota y no descarta infección.'],
      ref: 'Harrison 21e' }),

    q({ id: 'abordaje-02', dif: 2,
      stem: 'Líquido sinovial: 85,000 leucocitos/µL, 92% neutrófilos, Gram sin bacterias, sin cristales. ¿Cómo lo manejas?',
      opts: ['Como gota; colchicina', 'Como artritis séptica: antibiótico IV empírico y drenaje', 'Como OA; AINE', 'Repetir la punción en 1 semana', 'Esteroide intraarticular'],
      ans: 1,
      exp: 'Un líquido con >50,000 leucocitos y predominio de neutrófilos se trata como séptico aunque el Gram sea negativo (sensibilidad ~50%). Antibiótico empírico (vancomicina ± cefalosporina) y drenaje.',
      why: ['No hay cristales.', '', 'Es un líquido muy inflamatorio.', 'Retraso peligroso.', 'Contraindicado si hay infección.'],
      ref: 'Harrison 21e' }),

    q({ id: 'abordaje-03', dif: 1,
      stem: 'Mujer de 22 años con vida sexual activa: poliartralgias migratorias, tenosinovitis del dorso de la mano y pústulas en las extremidades. ¿Diagnóstico más probable?',
      opts: ['Artritis reumatoide', 'Infección gonocócica diseminada', 'Fiebre reumática', 'Lupus', 'Artritis reactiva'],
      ans: 1,
      exp: 'Tríada de infección gonocócica diseminada: tenosinovitis, dermatitis pustulosa y poliartralgias migratorias. Se busca N. gonorrhoeae en mucosas y se trata con ceftriaxona.',
      why: ['No es migratoria ni con pústulas.', '', 'Sigue a faringitis; no da pústulas.', 'No da tenosinovitis con pústulas.', 'Es estéril; no da pústulas.'],
      ref: 'CDC STI 2021' }),

    q({ id: 'abordaje-04', dif: 2,
      stem: 'Mujer de 45 años con dolor en el hombro derecho al elevar el brazo activamente entre 60° y 120°; el movimiento pasivo es casi completo y menos doloroso. ¿Origen más probable?',
      opts: ['Artritis glenohumeral', 'Periarticular: tendinopatía del manguito rotador', 'Capsulitis adhesiva', 'Artritis séptica', 'Polimialgia reumática'],
      ans: 1,
      exp: 'Dolor con arco doloroso en el movimiento activo y pasivo conservado sugiere un problema periarticular (tendón del supraespinoso, bursa subacromial).',
      why: ['Limitaría activo y pasivo.', '', 'Limita activo y pasivo en todas las direcciones.', 'Sería aguda, febril y limitante.', 'Bilateral, con rigidez y VSG alta.'],
      ref: 'Harrison 21e' }),

    q({ id: 'abordaje-05', dif: 2,
      stem: 'Mujer de 30 años con artralgias inespecíficas, sin otros síntomas ni hallazgos. ANA 1:80 moteado. ¿Interpretación?',
      opts: ['Diagnóstico de lupus', 'Hallazgo frecuente en sanos; sin clínica no indica enfermedad autoinmune', 'Iniciar hidroxicloroquina', 'Pedir biopsia renal', 'Iniciar prednisona'],
      ans: 1,
      exp: 'Hasta 15–30% de personas sanas tienen ANA 1:40–1:80. Sin manifestaciones clínicas, no se diagnostica lupus ni se trata.',
      why: ['No cumple criterios.', '', 'No hay indicación.', 'No hay indicación.', 'No hay indicación.'],
      ref: 'EULAR/ACR 2019 LES' }),

    q({ id: 'abordaje-06', dif: 1,
      stem: '¿Qué anticuerpo es más específico para artritis reumatoide?',
      opts: ['Factor reumatoide', 'Anti-CCP', 'ANA', 'Anti-dsDNA', 'ANCA'],
      ans: 1,
      exp: 'El anti-CCP tiene especificidad ~95% para AR y predice enfermedad más erosiva. El FR es menos específico (hepatitis C, endocarditis, edad).',
      why: ['Es menos específico.', '', 'No es específico de AR.', 'Es específico de LES.', 'Es de vasculitis.'],
      ref: 'ACR/EULAR 2010' }),

    q({ id: 'abordaje-07', dif: 2,
      stem: 'Mujer de 34 años con poliartritis simétrica aguda de manos de 10 días y exantema reticular, tras convivir con su hijo que tuvo “mejillas abofeteadas”. ¿Diagnóstico más probable?',
      opts: ['Artritis reumatoide', 'Artritis por parvovirus B19', 'Gota', 'Espondiloartritis', 'Osteoartritis'],
      ans: 1,
      exp: 'El parvovirus B19 en adultos causa poliartritis simétrica aguda que imita a la AR; suele resolverse en semanas. Se confirma con IgM anti-parvovirus.',
      why: ['Requiere ≥6 semanas; considera primero causas virales.', '', 'No es poliarticular de manos aguda.', 'No es el patrón.', 'No es aguda ni inflamatoria.'],
      ref: 'Harrison 21e' }),

    q({ id: 'abordaje-08', dif: 2,
      stem: 'Líquido sinovial con 1,200 leucocitos/µL y 15% de neutrófilos, viscoso y claro. ¿Cómo se clasifica?',
      opts: ['Normal', 'No inflamatorio', 'Inflamatorio', 'Séptico', 'Hemorrágico'],
      ans: 1,
      exp: 'Entre 200 y 2,000 leucocitos con predominio de mononucleares: no inflamatorio, típico de osteoartritis o trauma.',
      why: ['Normal es <200.', '', 'Inflamatorio es 2,000–50,000.', 'Séptico suele ser >50,000.', 'Tendría eritrocitos abundantes.'],
      ref: 'Harrison 21e' }),

    q({ id: 'abordaje-09', dif: 1,
      stem: 'Hombre de 30 años con rigidez matutina de 90 minutos en manos y rodillas que mejora al moverse, y aumento de volumen blando en varias articulaciones. ¿Qué tipo de dolor es?',
      opts: ['Mecánico', 'Inflamatorio', 'Neuropático', 'Psicógeno', 'Referido'],
      ans: 1,
      exp: 'Rigidez prolongada que mejora con la actividad y sinovitis (aumento de volumen blando) son datos de patrón inflamatorio.',
      why: ['Empeoraría con el uso y la rigidez sería breve.', '', 'Daría ardor o parestesias.', 'No hay datos.', 'No hay datos.'],
      ref: 'Harrison 21e' }),

    q({ id: 'abordaje-10', dif: 2,
      stem: 'En una monoartritis aguda de rodilla, el líquido muestra cristales en forma de aguja con birrefringencia negativa y 30,000 leucocitos. El Gram es negativo, pero el paciente tiene fiebre alta y una prótesis valvular. ¿Qué haces?',
      opts: ['Tratar solo la gota', 'Tratar la gota y esperar el cultivo antes de descartar infección (± antibiótico empírico)', 'Infiltrar esteroide de inmediato', 'Dar alta', 'Iniciar alopurinol'],
      ans: 1,
      exp: 'Cristales y una infección pueden coexistir. En un paciente de alto riesgo con fiebre, se espera el cultivo y se considera antibiótico empírico hasta descartarla.',
      why: ['Puede coexistir con infección.', '', 'Peligroso sin descartar infección.', 'No es seguro.', 'No se inicia en el ataque como tratamiento del dolor.'],
      ref: 'Harrison 21e' })
  ]
};
