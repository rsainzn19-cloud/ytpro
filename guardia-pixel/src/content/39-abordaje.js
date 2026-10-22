// Tema 30 · Abordaje del paciente reumatológico (Reumatología, semanas 1–2)
const T = { topic: 'abordaje', subj: 'reuma' };
const q = (o) => ({ ...T, ...o });

export default {
  lessons: {
    abordaje: {
      hook: 'Antes de pedir anticuerpos, cuenta articulaciones, mide el tiempo de rigidez y decide si el dolor es articular o periarticular. Y ante una monoartritis aguda: punciona.',
      nn: [],
      yt: 'approach to joint pain arthritis',
      anim: 'abordaje',
      compare: ['articular-periarticular', 'inflamatorio-mecanico'],
      video: [
        { ch: 'Cinco preguntas', sc: [
          { v: { k: 'title', t: 'Abordaje del paciente reumatológico', s: 'Tema 30 · Reumatología' },
            say: 'Bienvenido a la guardia. Antes de pedir anticuerpos, un buen reumatólogo hace cinco preguntas junto a la cama. En este video vas a aprender a contestarlas y a reconocer la única urgencia que no puede esperar: la monoartritis aguda.' },
          { v: { k: 'list', t: 'Las cinco preguntas', items: ['¿Articular o periarticular?', '¿Inflamatorio o mecánico?', '¿Cuántas? Mono, oligo o poli', '¿Cuánto tiempo? Aguda <6 sem o crónica', '¿Cuáles? Simetría, tamaño, axial'] },
            say: 'Estas son las cinco preguntas. ¿El dolor viene de la articulación o de fuera de ella? ¿Es inflamatorio o mecánico? ¿Cuántas articulaciones están afectadas? ¿Cuánto tiempo lleva, menos o más de seis semanas? Y ¿cuáles son: grandes o pequeñas, simétricas o no, periféricas o de la columna?' }
        ] },
        { ch: '¿Articular o periarticular?', sc: [
          { v: { k: 'anim', id: 'abordaje', step: 0 },
            say: 'Primera pregunta. Si el problema está dentro de la articulación, duele en todo el arco de movimiento, tanto si el paciente se mueve como si tú lo mueves. Si el problema es periarticular, como un tendón o una bursa, duele con un movimiento activo específico, y el movimiento pasivo casi no duele.' },
          { v: { k: 'vs', cmp: 'articular-periarticular', rows: [1, 3, 4] },
            say: 'Explora así. En la articulación, el dolor a la palpación es difuso en la línea articular y el rango pasivo está limitado. En lo periarticular, el dolor es puntual sobre el tendón, la bursa o la entesis, y el rango pasivo se conserva. Ejemplos: bursitis, tendinitis y entesitis.' },
          { v: { k: 'quiz', q: 'Hombro: duele al elevar el brazo activamente entre 60° y 120°; el pasivo es casi completo. ¿Origen?', opts: ['Articular: artritis glenohumeral', 'Periarticular: manguito rotador'], a: 1 },
            say: 'Pausa. A una mujer le duele el hombro cuando ella eleva el brazo, entre sesenta y ciento veinte grados, pero cuando tú lo mueves el arco es casi completo. ¿De dónde viene el dolor?',
            exp: 'Es periarticular: una tendinopatía del manguito rotador con arco doloroso. Si fuera artritis de la articulación, dolerían y se limitarían tanto el movimiento activo como el pasivo.' }
        ] },
        { ch: '¿Inflamatorio o mecánico?', sc: [
          { v: { k: 'anim', id: 'abordaje', step: 1 },
            say: 'Segunda pregunta. El dolor inflamatorio tiene rigidez al despertar que dura más de una hora y mejora conforme el paciente se mueve. El dolor mecánico casi no da rigidez, menos de media hora, y empeora con el uso, así que es peor al final del día.' },
          { v: { k: 'vs', cmp: 'inflamatorio-mecanico', rows: [3, 5, 6] },
            say: 'Busca más pistas. En el inflamatorio hay sinovitis: aumento de volumen blando y calor. Puede haber fiebre, fatiga y pérdida de peso, y la velocidad de sedimentación y la proteína C reactiva suben. En el mecánico hay crepitación y crecimiento óseo, con laboratorios normales. El ejemplo clásico es la osteoartritis.' },
          { v: { k: 'big', h: 'Rigidez matutina inflamatoria', t: '>60 min', s: 'Mejora con el movimiento. Mecánica: <30 min y empeora con el uso. Algunos textos usan >30 min como corte.' },
            say: 'El número que debes recordar: una rigidez matutina de más de sesenta minutos orienta a inflamación. Algunos textos usan treinta minutos como corte; mientras más dure, más probable es que sea inflamatoria.' }
        ] },
        { ch: 'Cuántas, cuáles y desde cuándo', sc: [
          { v: { k: 'anim', id: 'abordaje', step: 2 },
            say: 'Tercera pregunta: cuenta. Una sola articulación es monoartritis, y te obliga a pensar en infección o cristales. De dos a cuatro es oligoartritis, típica de las espondiloartritis y la artritis reactiva. Cinco o más es poliartritis: artritis reumatoide, lupus o una infección viral.' },
          { v: { k: 'list', t: 'Patrones que orientan', items: ['Poli simétrica de MCF, IFP y muñecas → AR', 'Oligo asimétrica de piernas + entesitis → EspA', 'IFD → osteoartritis o psoriásica', '1ª MTF aguda → gota', 'Migratoria → fiebre reumática, gonococo'] },
            say: 'Luego mira cuáles. Poliartritis simétrica de manos y muñecas que respeta las interfalángicas distales: artritis reumatoide. Oligoartritis asimétrica de miembros inferiores con entesitis: espondiloartritis. Interfalángicas distales: osteoartritis o artritis psoriásica. Primera metatarsofalángica aguda: gota. Y si es migratoria, piensa en fiebre reumática o gonococo.' },
          { v: { k: 'list', t: 'El tiempo también cuenta', items: ['Aguda <6 semanas: infección, cristales, virus', 'Crónica ≥6 semanas: AR, EspA, LES', 'Poli aguda + exantema: parvovirus, hepatitis'] },
            say: 'La cuarta pregunta es el tiempo. Una artritis de menos de seis semanas es aguda: infecciones, cristales o virus. De seis semanas o más es crónica: artritis reumatoide, espondiloartritis o lupus. Una poliartritis simétrica aguda con exantema suele ser viral, por parvovirus B19, hepatitis B o C, o chikungunya, y se resuelve sola.' }
        ] },
        { ch: 'Monoartritis aguda: punciona', sc: [
          { v: { k: 'case', t: 'Llega a urgencias', p: { name: 'Jorge', age: 55, sex: 'H', skin: '#D9A07A', hair: '#2A1A12', gown: '#C6E84A' }, text: 'Rodilla derecha caliente, roja y con derrame desde ayer. Fiebre de 38.5 °C. Diabético. No tolera que le muevan la rodilla.', vit: { FC: '104', PA: '132/80', Temp: '38.5 °C' } },
            say: 'Imagina a Jorge, de cincuenta y cinco años y diabético. Desde ayer tiene la rodilla derecha caliente, roja y con derrame, y fiebre de treinta y ocho punto cinco. No tolera que le muevan la pierna. Antes de pensar en gota, piensa en la peor posibilidad: una artritis séptica.' },
          { v: { k: 'anim', id: 'abordaje', step: 3 },
            say: 'Por eso la regla es puncionar. La artrocentesis es obligada en toda monoartritis aguda: tinción de Gram, cultivo, conteo de células y búsqueda de cristales. Sin líquido no puedes descartar infección, y recuerda que cristales e infección pueden coexistir.' },
          { v: { k: 'anim', id: 'abordaje', step: 4 },
            say: 'Así se lee el líquido. Normal: menos de doscientos leucocitos. No inflamatorio, como en la osteoartritis: de doscientos a dos mil. Inflamatorio, como en la artritis reumatoide o la gota: de dos mil a cincuenta mil, con predominio de neutrófilos. Séptico: más de cincuenta mil, casi todos neutrófilos.' },
          { v: { k: 'quiz', q: 'Líquido de Jorge: 85,000 leucocitos/µL, 92% neutrófilos, Gram sin bacterias, sin cristales. ¿Conducta?', opts: ['Séptica: antibiótico IV y drenaje', 'Esperar el cultivo sin antibiótico'], a: 0 },
            say: 'Pausa. El líquido de Jorge tiene ochenta y cinco mil leucocitos, noventa y dos por ciento de neutrófilos, Gram sin bacterias y sin cristales. ¿Qué haces?',
            exp: 'Lo tratas como artritis séptica: antibiótico intravenoso empírico y drenaje de la articulación. Un Gram negativo no la descarta, porque su sensibilidad es baja. El germen más común es Staphylococcus aureus.' },
          { v: { k: 'mnemo', t: 'Monoartritis caliente: “pica antes de pensar”', d: 'Punciona antes de dar esteroide: una artritis séptica destruye el cartílago en días. Joven con vida sexual activa: piensa en gonococo.' },
            say: 'Para no olvidarlo: monoartritis caliente, pica antes de pensar. Nunca infiltres esteroide sin descartar infección. Y en un joven con vida sexual activa con tenosinovitis, pústulas en la piel y dolores articulares migratorios, piensa en gonococo diseminado.' }
        ] },
        { ch: 'Laboratorio con criterio', sc: [
          { v: { k: 'list', t: 'Pide con sospecha clínica', items: ['VSG y PCR: inflamación, no diagnóstico', 'FR: sensible, poco específico', 'Anti-CCP: ~95% específico para AR', 'ANA: muy sensible para LES, poco específico', 'HLA-B27: apoya EspA, no diagnostica'] },
            say: 'La última herramienta es el laboratorio, pero con criterio. La sedimentación y la proteína C reactiva miden inflamación, no dan diagnóstico. El factor reumatoide es poco específico; el anticuerpo contra péptidos cíclicos citrulinados es el más específico para artritis reumatoide. Los anticuerpos antinucleares son muy sensibles para lupus, pero poco específicos. Y el HLA B27 solo apoya.' },
          { v: { k: 'tip', kind: 'trap', t: 'ANA 1:80 sin clínica no es lupus: lo tiene ~13% de las personas sanas. Pide anticuerpos solo con sospecha clínica.' },
            say: 'Ojo con esta trampa. Un anticuerpo antinuclear positivo a título bajo, de uno a ochenta, sin manifestaciones clínicas, no es lupus. Lo tiene alrededor del trece por ciento de las personas sanas, sobre todo mujeres y adultos mayores. No trates un número: trata al paciente.' },
          { v: { k: 'tip', kind: 'pearl', t: 'El diagnóstico sale de la historia y la exploración; el laboratorio confirma. Monoartritis aguda = artrocentesis.' },
            say: 'La perla para el examen: el diagnóstico reumatológico sale de la historia y la exploración, y el laboratorio solo lo confirma. Y ante una monoartritis aguda, la respuesta correcta casi siempre es la artrocentesis. Ahora ve a las preguntas del tema para fijar lo que viste.' }
        ] }
      ],
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
<li><b>ANA</b>: muy sensible para LES (&gt;95%) pero poco específico: son positivos en ~30% de sanos a 1:40, ~13% a 1:80 y ~5% a 1:160 (Tan 1997). Pídelos solo con sospecha clínica; los criterios EULAR/ACR 2019 de LES exigen ANA ≥1:80 como criterio de entrada. Específicos de LES: <b>anti-dsDNA</b> y <b>anti-Sm</b>.</li>
<li><b>HLA-B27</b>: apoya espondiloartritis, no diagnostica.</li>
<li><b>Ácido úrico</b>: puede ser normal durante un ataque de gota.</li>
<li>Complemento, ANCA, CK, anti-Ro/La según la sospecha.</li>
</ul>` },
        { h: 'Interrogatorio y exploración dirigidos', html: `
<ul>
<li><b>Quién</b>: edad y sexo orientan (mujer joven → LES; hombre joven → espondiloartritis o gonococo; adulto mayor → OA, gota, pseudogota, polimialgia).</li>
<li><b>Cómo empezó y cómo avanza</b>: súbito (cristales, infección, trauma) vs insidioso; <b>migratorio</b> (una articulación mejora y otra empieza: fiebre reumática, gonococo), <b>aditivo</b> (se suman sin que las previas mejoren: AR) o <b>intermitente</b> (ataques con intervalos libres: gota).</li>
<li><b>Antecedentes clave</b>: faringitis, diarrea o uretritis previas (reactiva, fiebre reumática), ITS, viajes o picaduras (chikungunya), fármacos (diuréticos → gota; hidralazina, procainamida, isoniazida → lupus inducido), trauma, anticoagulantes (hemartrosis).</li>
<li><b>Extraarticular</b>: psoriasis y uñas, eritema malar, úlceras orales, Raynaud, ojo rojo (uveítis, escleritis), diarrea o EII, uretritis, nódulos, serositis. Familia con psoriasis, EII o espondilitis.</li>
<li><b>Exploración</b>: sinovitis (aumento blando, calor, derrame: peloteo rotuliano) vs crecimiento óseo duro (OA); rango activo vs pasivo; entesis (Aquiles, fascia plantar); <b>dactilitis</b> (“dedo en salchicha”: EspA).</li>
<li><b>Banderas rojas</b>: fiebre con monoartritis, articulación muy caliente que no se deja mover, inmunosupresión o prótesis, déficit neurológico o pérdida de peso.</li>
</ul>` },
        { h: 'Diagnóstico diferencial por patrón', html: `
<div class="tablewrap"><table class="mini">
<tr><th>Patrón</th><th>Agudo (&lt;6 semanas)</th><th>Crónico (≥6 semanas)</th></tr>
<tr><td><b>Mono</b></td><td>Artritis séptica, gota, pseudogota, trauma o hemartrosis, gonococo</td><td>OA, tuberculosis u hongos, sinovitis villonodular, cuerpo extraño</td></tr>
<tr><td><b>Oligo</b></td><td>Artritis reactiva, gonococo, cristales, fiebre reumática</td><td>Espondiloartritis (reactiva, psoriásica, enteropática), AIJ, sarcoidosis</td></tr>
<tr><td><b>Poli</b></td><td>Viral (parvovirus B19, VHB, VHC, chikungunya, rubéola), inicio de LES o AR</td><td>AR, LES, artritis psoriásica, OA de manos (mecánica), pseudogota poliarticular</td></tr>
</table></div>
<p><b>Simulan artritis</b>: fibromialgia (dolor difuso con puntos dolorosos, sin sinovitis y con laboratorios normales), polimialgia reumática (rigidez de cinturas en &gt;50 años, VSG alta), bursitis y tendinitis, neuropatía y dolor óseo.</p>` },
        { h: 'Cómo lo preguntan en el examen', html: `
<ul>
<li>Monoartritis aguda, caliente, con o sin fiebre → <b>artrocentesis</b> antes de cualquier tratamiento.</li>
<li>Líquido con &gt;50,000 leucocitos y predominio de neutrófilos, Gram negativo → <b>tratar como séptica</b> (antibiótico IV y drenaje).</li>
<li>Joven con vida sexual activa: tenosinovitis + pústulas + poliartralgias migratorias → <b>gonococo diseminado</b>: ceftriaxona.</li>
<li>Dolor de hombro con arco doloroso activo y pasivo conservado → <b>periarticular</b> (manguito rotador).</li>
<li>Poliartritis simétrica aguda de manos con exantema tras contacto con un niño → <b>parvovirus B19</b>, no AR.</li>
<li>ANA 1:80 sin clínica, o FR positivo en un paciente con VHC → <b>no diagnostica nada</b>: interpreta según la clínica.</li>
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
        'Firestein & Kelley\'s Textbook of Rheumatology, 11e. History and physical examination.',
        'Tan EM, et al. Range of antinuclear antibodies in "healthy" individuals. Arthritis Rheum 1997.'
      ]
    }
  },

  compares: {
    'articular-periarticular': {
      topic: 'abordaje', a: 'Articular', b: 'Periarticular',
      rows: [
        ['Dolor con el movimiento', 'Activo y pasivo, en todo el arco', 'Activo, en un movimiento específico'],
        ['Palpación', 'Difusa en la línea articular', 'Puntual: tendón, bursa o entesis'],
        ['Aumento de volumen', 'Derrame articular difuso', 'Localizado (bursa) o ausente'],
        ['Rango pasivo', 'Limitado', 'Conservado'],
        ['Ejemplos', 'Artritis, sinovitis, OA', 'Bursitis, tendinitis, entesitis']
      ]
    },
    'inflamatorio-mecanico': {
      topic: 'abordaje', a: 'Inflamatorio', b: 'Mecánico',
      rows: [
        ['Rigidez matutina', '>60 min (>30 en algunos textos)', '<30 min'],
        ['Con la actividad', 'Mejora', 'Empeora; mejora con el reposo'],
        ['Peor momento', 'Al despertar y tras el reposo', 'Al final del día'],
        ['Exploración', 'Sinovitis: aumento blando y calor', 'Crepitación, crecimiento óseo'],
        ['Síntomas sistémicos', 'Fiebre, fatiga, pérdida de peso', 'Ausentes'],
        ['VSG y PCR', 'Elevadas', 'Normales'],
        ['Ejemplos', 'AR, espondiloartritis, LES, gota', 'Osteoartritis, trauma, sobreuso']
      ]
    }
  },

  anims: {
    abordaje: {
      title: 'Del dolor al líquido sinovial',
      steps: [
        { cap: '<b>¿Articular o periarticular?</b> Si el problema es la articulación (izquierda), duele todo el arco, activo y pasivo. Si es un tendón o una bursa (derecha), duele solo un tramo del movimiento activo (arco doloroso) y el pasivo casi no.',
          labels: [[40, 8, 'Articular'], [120, 8, 'Periarticular'], [40, 111, 'Todo el arco'], [120, 111, 'Arco doloroso']] },
        { cap: '<b>¿Inflamatorio o mecánico?</b> La rigidez inflamatoria (rojo) dura más de 60 minutos al despertar y mejora con el movimiento. El dolor mecánico (azul) da rigidez breve, menos de 30 minutos, y empeora con el uso hacia el final del día.',
          labels: [[52, 22, 'Inflamatorio'], [120, 38, 'Mecánico'], [41, 112, 'Mañana'], [109, 112, 'Resto del día']] },
        { cap: '<b>¿Cuántas articulaciones?</b> Mono = 1 (piensa en infección o cristales), oligo = 2 a 4 (espondiloartritis, reactiva) y poli = 5 o más (AR, LES, viral). En la AR se van sumando de forma aditiva y simétrica en manos y pies.',
          labels: [[27, 112, 'Mono: 1'], [80, 112, 'Oligo: 2–4'], [133, 112, 'Poli: ≥5']] },
        { cap: '<b>Monoartritis aguda: punciona.</b> La artrocentesis es obligada: Gram, cultivo, conteo celular y cristales. Sin líquido no puedes descartar una artritis séptica, y cristales e infección pueden coexistir.',
          labels: [[72, 14, 'Derrame'], [93, 38, 'Aguja'], [86, 62, 'Rótula'], [130, 114, 'Laboratorio']] },
        { cap: '<b>Líquido sinovial.</b> A más leucocitos y neutrófilos (barra violeta), más inflamación: normal &lt;200/µL, no inflamatorio 200–2,000, inflamatorio 2,000–50,000 y séptico &gt;50,000 (turbio, purulento).',
          labels: [[22, 16, 'Normal'], [61, 16, 'No infl.'], [100, 16, 'Inflam.'], [139, 16, 'Séptico'], [22, 110, '<200'], [61, 110, '200–2 mil'], [100, 110, '2–50 mil'], [139, 110, '>50 mil']] }
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
    ['Poliartritis aguda simétrica + exantema', 'Viral: parvovirus B19, hepatitis B/C, chikungunya'],
    ['Lipohemartrosis (gotas de grasa en un líquido hemático)', 'Fractura intraarticular: pide Rx o TC'],
    ['Bursitis prepatelar', 'Aumento de volumen sobre la rótula con flexión pasiva conservada: periarticular'],
    ['Nódulos de Heberden y Bouchard', 'Heberden: IFD · Bouchard: IFP · osteoartritis (crecimiento óseo duro)'],
    ['FR positivo sin artritis reumatoide', 'VHC (crioglobulinemia), endocarditis, Sjögren, infecciones crónicas, edad avanzada'],
    ['Dactilitis (“dedo en salchicha”)', 'Espondiloartritis: artritis psoriásica o reactiva']
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
      ref: 'Harrison 21e' }),

    q({ id: 'abordaje-11', dif: 2,
      stem: 'Hombre de 42 años que instala pisos y trabaja de rodillas. Tiene aumento de volumen fluctuante sobre la rótula derecha, doloroso al tacto, sin fiebre. Flexiona y extiende la rodilla en forma pasiva sin dolor y no hay peloteo rotuliano. ¿Diagnóstico más probable?',
      opts: ['Artritis séptica de rodilla', 'Bursitis prepatelar', 'Ataque de gota en la rodilla', 'Desgarro de menisco', 'Quiste de Baker'],
      ans: 1,
      exp: 'Aumento de volumen superficial sobre la rótula con rango pasivo completo y sin derrame articular = proceso periarticular: bursitis prepatelar (“rodilla de alfombrero”) por presión repetida. Si hay fiebre, eritema intenso o celulitis, se aspira la bursa para descartar infección (S. aureus).',
      why: ['Una artritis daría derrame (peloteo) y dolor con todo el movimiento pasivo.', '', 'La gota es articular: derrame y dolor con cualquier movimiento.', 'Da dolor en la línea articular y bloqueo, no aumento de volumen sobre la rótula.', 'Está en la fosa poplítea, no delante de la rótula.'],
      ref: 'Harrison 21e' }),

    q({ id: 'abordaje-12', dif: 2,
      stem: 'Mujer de 66 años con dolor de rodillas que empeora al caminar y al final del día y mejora con el reposo. Rigidez matutina de 10 minutos. Crepitación, nódulos duros en las IFD y VSG normal. ¿Qué haces?',
      opts: ['Pedir FR, anti-CCP y ANA antes de decidir', 'Diagnóstico clínico de osteoartritis (patrón mecánico); Rx si hay duda', 'Iniciar metotrexato por AR seronegativa', 'Prednisona por polimialgia reumática', 'Artrocentesis de ambas rodillas'],
      ans: 1,
      exp: 'Dolor que empeora con el uso, rigidez breve, crepitación y crecimiento óseo duro (nódulos de Heberden en IFD) = patrón mecánico típico de osteoartritis. El diagnóstico es clínico; no hacen falta anticuerpos y la VSG normal lo apoya.',
      why: ['Los anticuerpos sin sospecha de enfermedad inflamatoria solo generan falsos positivos.', '', 'No hay sinovitis ni rigidez prolongada; las IFD apuntan a OA, no a AR.', 'La polimialgia da rigidez de cinturas y VSG alta.', 'Sin derrame ni datos de inflamación no hay indicación.'],
      ref: 'Harrison 21e · ACR 2019 OA' }),

    q({ id: 'abordaje-13', dif: 2,
      stem: 'Hombre de 27 años con dolor e inflamación de la rodilla izquierda y el tobillo derecho, dolor en el talón (inserción del tendón de Aquiles) y ojo rojo. Tres semanas antes tuvo diarrea con sangre. ¿Diagnóstico más probable?',
      opts: ['Artritis reumatoide', 'Artritis reactiva', 'Gota', 'Artritis gonocócica', 'Fiebre reumática'],
      ans: 1,
      exp: 'Oligoartritis asimétrica de miembros inferiores + entesitis + conjuntivitis 1–4 semanas después de una infección gastrointestinal (Shigella, Salmonella, Campylobacter, Yersinia) o genitourinaria (Chlamydia) = artritis reactiva, una espondiloartritis. Es estéril; se trata con AINE.',
      why: ['Es poliarticular, simétrica y de manos.', '', 'Suele ser monoarticular y no da entesitis ni conjuntivitis.', 'Da tenosinovitis y pústulas, sin antecedente de diarrea.', 'Sigue a una faringitis y da artritis migratoria de grandes articulaciones con carditis.'],
      ref: 'Harrison 21e' }),

    q({ id: 'abordaje-14', dif: 3,
      stem: 'Mujer de 35 años que se torció la rodilla esquiando. Derrame a tensión en 2 h. La artrocentesis obtiene sangre con gotas de grasa que flotan en la superficie. ¿Qué indica?',
      opts: ['Artritis séptica', 'Fractura intraarticular (lipohemartrosis)', 'Hemofilia no diagnosticada', 'Pseudogota', 'Esguince leve'],
      ans: 1,
      exp: 'La grasa en un líquido hemático viene de la médula ósea: una fractura comunica la médula con la articulación (lipohemartrosis). Pide Rx (nivel grasa-líquido en la proyección lateral) o TC. Una hemartrosis sin grasa tras un trauma sugiere lesión del ligamento cruzado anterior.',
      why: ['El líquido séptico es purulento, no hemático con grasa.', '', 'La hemofilia da hemartrosis con traumas mínimos, sin gotas de grasa, y es muy rara en mujeres.', 'Da líquido inflamatorio con cristales romboidales.', 'No produce un derrame hemático a tensión en 2 h.'],
      ref: 'Harrison 21e' }),

    q({ id: 'abordaje-15', dif: 2,
      stem: 'Hombre de 52 años con hepatitis C crónica y artralgias de manos sin sinovitis a la exploración. Le pidieron un factor reumatoide, que salió positivo. ¿Interpretación?',
      opts: ['Confirma artritis reumatoide: iniciar metotrexato', 'El FR es poco específico (VHC, crioglobulinemia); sin sinovitis no hay AR. Si la duda persiste, anti-CCP', 'Diagnóstico de lupus', 'Repetir el FR en 1 semana', 'Biopsia sinovial'],
      ans: 1,
      exp: 'El FR aparece en VHC (sobre todo con crioglobulinemia), endocarditis, Sjögren, infecciones crónicas y adultos mayores. Sin artritis clínica no se diagnostica AR. El anti-CCP (~95% específico) ayuda cuando la duda es real; además, el metotrexato es hepatotóxico en un paciente con VHC.',
      why: ['Sin sinovitis no hay AR, y el metotrexato es peligroso con hepatitis C.', '', 'El FR no tiene relación con el diagnóstico de LES.', 'Repetirlo no cambia su baja especificidad.', 'Es invasiva y no está indicada sin artritis.'],
      ref: 'ACR/EULAR 2010 AR' })
  ]
};
