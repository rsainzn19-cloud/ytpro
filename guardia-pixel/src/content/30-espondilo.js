// Tema 21 · Espondiloartropatías y artritis psoriásica (Reumatología, semana 6)
const T = { topic: 'espondilo', subj: 'reuma' };
const q = (o) => ({ ...T, ...o });

export default {
  lessons: {
    espondilo: {
      hook: 'Lumbalgia en un joven que despierta de madrugada y mejora al moverse: es inflamatoria. Reconoce la espondiloartritis axial, la artritis reactiva y la psoriásica, y su tratamiento escalonado.',
      nn: [],
      yt: 'ankylosing spondylitis psoriatic arthritis',
      anim: 'espondilo',
      compare: ['espondilo-lumbalgia'],
      video: [
        { ch: 'Una familia de cuatro', sc: [
          { v: { k: 'title', t: 'Espondiloartritis y artritis psoriásica', s: 'Tema 21 · Reumatología' },
            say: 'Bienvenido a la guardia. En este video vas a aprender a reconocer una lumbalgia inflamatoria, a diagnosticar una espondiloartritis axial y a distinguir la artritis reactiva y la psoriásica. Terminamos con el tratamiento escalonado.' },
          { v: { k: 'case', t: 'Consulta externa', p: { name: 'Andrés', age: 24, sex: 'H', skin: '#D9A07A', hair: '#2A1A12', gown: '#7FC8A9' }, text: 'Lumbalgia de 8 meses que lo despierta a las 4 a. m. y mejora al hacer ejercicio. Hace un año tuvo un ojo rojo doloroso con fotofobia.', vit: { FC: '76', PA: '122/78', T: '36.8' } },
            say: 'Conoce a Andrés, de veinticuatro años. Tiene lumbalgia desde hace ocho meses. Lo despierta en la madrugada y, curiosamente, mejora cuando hace ejercicio. Hace un año tuvo un ojo rojo, doloroso y con fotofobia. Esa combinación ya tiene nombre.' },
          { v: { k: 'list', t: 'Las cuatro hermanas (PEAR)', items: ['Psoriásica', 'Enteropática (EII)', 'Anquilosante o axial', 'Reactiva', 'Seronegativas: FR y anti-CCP negativos', 'Asociadas a HLA-B27'] },
            say: 'Las espondiloartritis son una familia de cuatro hermanas: la artritis psoriásica, la enteropática, asociada a enfermedad inflamatoria intestinal, la espondiloartritis axial o anquilosante, y la artritis reactiva. Son seronegativas: factor reumatoide y anti-CCP negativos. Y comparten un gen: el HLA-B veintisiete.' },
          { v: { k: 'anim', id: 'espondilo', step: 0 },
            say: 'Lo que las une es la entesitis. La inflamación no empieza en el sinovio, como en la artritis reumatoide, sino en la entesis: el sitio donde el tendón se inserta en el hueso. Por eso duele el talón, en el tendón de Aquiles o en la fascia plantar. Y por eso aparece la dactilitis, el dedo en salchicha.' }
        ] },
        { ch: 'Lumbalgia inflamatoria', sc: [
          { v: { k: 'vs', cmp: 'espondilo-lumbalgia', rows: [0, 2, 3, 4] },
            say: 'Compara las dos lumbalgias. La inflamatoria empieza antes de los cuarenta y cinco años, de forma insidiosa, y dura más de tres meses. Mejora con el ejercicio y no con el reposo. Despierta al paciente en la segunda mitad de la noche y da rigidez matutina de más de treinta minutos. La mecánica hace lo contrario.' },
          { v: { k: 'list', t: 'Rasgos de espondiloartritis', items: ['Entesitis (talón) y dactilitis', 'Artritis asimétrica de piernas', 'Uveítis anterior', 'Psoriasis o EII', 'Buena respuesta a AINE', 'HLA-B27, PCR alta, familiar afectado'] },
            say: 'Además, busca los rasgos de espondiloartritis: entesitis en el talón, dactilitis, artritis asimétrica de las piernas, uveítis anterior, psoriasis o enfermedad inflamatoria intestinal, buena respuesta a los antiinflamatorios no esteroideos, un familiar afectado, HLA-B veintisiete positivo y proteína C reactiva elevada.' },
          { v: { k: 'list', t: 'En la exploración', items: ['Schober modificado: menos flexión lumbar', 'Menor expansión torácica', 'Mayor distancia occipucio-pared', 'Dolor a la presión sacroiliaca'] },
            say: 'En la exploración mides la movilidad. La prueba de Schober modificada valora la flexión lumbar. También disminuye la expansión del tórax. Y la distancia entre el occipucio y la pared aumenta cuando la columna se va encorvando.' }
        ] },
        { ch: 'Imagen y criterios ASAS', sc: [
          { v: { k: 'anim', id: 'espondilo', step: 1 },
            say: 'El primer sitio que suele inflamarse es la articulación sacroiliaca. En la radiografía tarda años en verse. La resonancia magnética con supresión de grasa muestra antes el edema de la médula ósea: zonas brillantes a los lados de la articulación. Con radiografía normal y edema en la resonancia, es espondiloartritis axial no radiográfica.' },
          { v: { k: 'flow', t: 'Criterios ASAS (axial)', steps: ['Lumbalgia ≥3 meses, inicio <45 años', 'Imagen: sacroileítis + ≥1 rasgo', 'Clínico: HLA-B27 + ≥2 rasgos', 'Sacroileítis: Rx o edema en RM'] },
            say: 'Los criterios de la Sociedad Internacional de Espondiloartritis, o ASAS, se aplican a quien tiene lumbalgia de tres meses o más que empezó antes de los cuarenta y cinco años. Hay dos caminos. El de imagen: sacroileítis en radiografía o resonancia, más un rasgo. El clínico: HLA-B veintisiete positivo, más dos rasgos.' },
          { v: { k: 'anim', id: 'espondilo', step: 2 },
            say: 'Si la inflamación sigue, el cuerpo forma hueso nuevo. Entre las vértebras crecen puentes delgados y verticales: los sindesmofitos. Cuando se unen todos, la columna queda fusionada y en la radiografía parece una caña de bambú. Esa columna rígida se fractura con caídas menores.' },
          { v: { k: 'quiz', q: 'Hombre de 30 años con lumbalgia mecánica tras cargar, sin rasgos de EspA. HLA-B27 positivo. ¿Tiene EspA?', opts: ['Sí: el HLA-B27 lo confirma', 'No: el HLA-B27 solo no diagnostica'], a: 1 },
            say: 'Pausa. Hombre de treinta años con lumbalgia mecánica después de cargar una caja, sin ningún rasgo de espondiloartritis. Su HLA-B veintisiete sale positivo. ¿Tiene espondiloartritis?',
            exp: 'No. Hasta ocho por ciento de la población sana tiene HLA-B veintisiete. Solo apoya el diagnóstico cuando hay lumbalgia inflamatoria y otros rasgos.' }
        ] },
        { ch: 'Más allá de la columna', sc: [
          { v: { k: 'anim', id: 'espondilo', step: 3 },
            say: 'La manifestación extraarticular más común es la uveítis anterior aguda. El ojo se pone rojo alrededor de la córnea, duele, hay fotofobia y visión borrosa. Casi siempre es de un solo lado y recurrente. Necesita oftalmología urgente.' },
          { v: { k: 'list', t: 'Otras manifestaciones', items: ['Insuficiencia aórtica (aortitis)', 'Bloqueos de conducción', 'Fibrosis pulmonar apical', 'Osteoporosis y fracturas vertebrales'] },
            say: 'Hay más. La inflamación de la raíz aórtica causa insuficiencia aórtica y bloqueos de conducción. En el pulmón, fibrosis de los vértices. Y aunque se forma hueso nuevo, hay osteoporosis. Ante dolor nuevo tras una caída, pide tomografía: la radiografía puede no ver la fractura.' }
        ] },
        { ch: 'Reactiva y psoriásica', sc: [
          { v: { k: 'list', t: 'Artritis reactiva', items: ['1–4 sem tras infección GU o GI', 'Chlamydia, Salmonella, Shigella, Yersinia', 'Oligoartritis asimétrica de piernas', 'Uretritis + conjuntivitis + artritis', 'Queratodermia blenorrágica'] },
            say: 'La artritis reactiva aparece de una a cuatro semanas después de una infección genitourinaria, por Chlamydia, o intestinal, por Salmonella, Shigella, Campylobacter o Yersinia. Da oligoartritis asimétrica de las piernas, con uretritis y conjuntivitis. Se trata con antiinflamatorios; los antibióticos no cambian su evolución, salvo tratar una Chlamydia activa.' },
          { v: { k: 'list', t: 'Artritis psoriásica', items: ['~30% de quienes tienen psoriasis', 'IFD con uñas picadas u onicólisis', 'Dactilitis, entesitis, asimetría', 'Mutilante: dedos en telescopio', 'Rx: lápiz en copa + hueso nuevo'] },
            say: 'La artritis psoriásica aparece en cerca de un tercio de las personas con psoriasis, casi siempre después de la piel. Afecta las interfalángicas distales, con uñas picadas u onicólisis. Da dactilitis y entesitis. En su forma mutilante, los dedos se acortan como telescopio. En la radiografía: lápiz en copa, con erosión y hueso nuevo.' },
          { v: { k: 'big', h: 'Criterios CASPAR', t: '≥3', u: 'puntos', s: 'Artritis inflamatoria + psoriasis actual (2) o previa (1), uñas, FR negativo, dactilitis, hueso nuevo en Rx.' },
            say: 'Para clasificarla usas los criterios CASPAR. Necesitas enfermedad articular inflamatoria y tres puntos o más. La psoriasis actual vale dos. La historia de psoriasis, la distrofia de uñas, el factor reumatoide negativo, la dactilitis y el hueso nuevo junto a la articulación valen uno cada uno.' },
          { v: { k: 'quiz', q: 'Psoriasis + IFD inflamadas + uñas con piqueteado, FR negativo. ¿Diagnóstico?', opts: ['Artritis reumatoide', 'Artritis psoriásica', 'Osteoartritis erosiva'], a: 1 },
            say: 'Pausa. Mujer con psoriasis, interfalángicas distales inflamadas, uñas con piqueteado y factor reumatoide negativo. ¿Qué tiene?',
            exp: 'Artritis psoriásica. Psoriasis actual, dos puntos; uñas, uno; factor reumatoide negativo, uno. Suma cuatro. La artritis reumatoide respeta las interfalángicas distales.' }
        ] },
        { ch: 'Tratamiento escalonado', sc: [
          { v: { k: 'anim', id: 'espondilo', step: 4 },
            say: 'La enfermedad axial se trata primero con antiinflamatorios no esteroideos a dosis plenas, más ejercicio y fisioterapia todos los días. Si fallan dos antiinflamatorios en un total de cuatro semanas, se agrega un biológico: anti factor de necrosis tumoral o anti interleucina diecisiete.' },
          { v: { k: 'flow', t: 'Enfermedad axial', steps: ['AINE a dosis plenas + ejercicio', 'Falla a 2 AINE en 4 semanas', 'Anti-TNF o anti-IL-17 (o JAK)', 'Uveítis o EII: anticuerpo anti-TNF'] },
            say: 'Si hay uveítis recurrente o enfermedad inflamatoria intestinal, prefiere un anticuerpo anti factor de necrosis tumoral, como adalimumab o infliximab. El etanercept no sirve para el intestino, y los anti interleucina diecisiete pueden empeorarlo. Los inhibidores de JAK son otra opción.' },
          { v: { k: 'tip', kind: 'trap', t: 'Metotrexato y sulfasalazina NO sirven para la columna (solo para la artritis periférica). Esteroides sistémicos: no.' },
            say: 'La trampa clásica: el metotrexato y la sulfasalazina no sirven para la enfermedad axial, solo para la artritis periférica. Y los esteroides sistémicos no se usan para la columna. En cambio, en la artritis psoriásica periférica el metotrexato sí es el primer fármaco, porque también ayuda a la piel.' },
          { v: { k: 'mnemo', t: 'Espondiloartritis = “PEAR”', d: 'Psoriásica, Enteropática, Anquilosante (axial), Reactiva: seronegativas y asociadas a HLA-B27.' },
            say: 'Para recordar a la familia, piensa en PEAR, pera en inglés: psoriásica, enteropática, anquilosante y reactiva. Seronegativas y asociadas a HLA-B veintisiete.' },
          { v: { k: 'tip', kind: 'pearl', t: 'Joven + lumbalgia que mejora con ejercicio + ojo rojo doloroso = espondiloartritis axial. Rx normal: RM de sacroiliacas.' },
            say: 'La perla para el examen: un joven con lumbalgia que mejora con el ejercicio y un ojo rojo doloroso tiene espondiloartritis axial hasta demostrar lo contrario. Si la radiografía es normal, pide resonancia de sacroiliacas. Ahora ve a las preguntas del tema para fijar lo que viste.' }
        ] }
      ],
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
<li>Patrones: oligoartritis asimétrica (la clásica; en series recientes la poliartritis es igual o más frecuente), predominio en <b>IFD</b> (con cambios ungueales: piqueteado, onicólisis), poliartritis simétrica parecida a AR, artritis mutilante, axial.</li>
<li>Rx: “lápiz en copa”, erosiones con formación de hueso nuevo.</li>
<li><b>Criterios CASPAR</b>: enfermedad articular inflamatoria + ≥3 puntos: psoriasis actual (2), antecedente personal (1) o familiar (1), distrofia ungueal (1), FR negativo (1), dactilitis (1), hueso nuevo yuxtaarticular en Rx (1).</li>
<li>Tratamiento: AINE; periférica: <b>metotrexato</b> (también ayuda a la piel); biológicos anti-TNF, anti-IL-17, anti-IL-23 (guselkumab) o IL-12/23 (ustekinumab); apremilast; JAK.</li>
</ul>` },
        { h: 'Diagnóstico diferencial: las cuatro hermanas y sus imitadores', html: `
<p>Todas comparten la <b>entesitis</b> como lesión inicial, el eje <b>IL-23/IL-17</b> (además del TNF) y la tendencia a formar <b>hueso nuevo</b> después de la inflamación.</p>
<div class="tablewrap"><table class="mini">
<tr><th>Cuadro</th><th>Pistas</th><th>Tratamiento clave</th></tr>
<tr><td><b>Axial (EA)</b></td><td>Hombre joven, lumbalgia inflamatoria, sacroileítis bilateral simétrica, uveítis; HLA-B27 en ~90%</td><td>AINE → anti-TNF o anti-IL-17</td></tr>
<tr><td><b>Reactiva</b></td><td>1–4 semanas tras Chlamydia o diarrea; oligoartritis de piernas, uretritis, conjuntivitis</td><td>AINE, esteroide intraarticular; tratar Chlamydia activa</td></tr>
<tr><td><b>Psoriásica</b></td><td>Psoriasis, IFD, uñas, dactilitis, lápiz en copa; sacroileítis asimétrica</td><td>AINE; metotrexato (periférica); biológicos</td></tr>
<tr><td><b>Enteropática</b></td><td>EII. Tipo 1: oligoartritis de grandes articulaciones que sigue los brotes. Tipo 2: poliartritis de pequeñas, independiente. La axial también es independiente del intestino</td><td>Tratar la EII; anticuerpo anti-TNF; AINE con cautela</td></tr>
</table></div>
<p><b>No confundir con</b>: hernia de disco (dolor radicular que empeora con el movimiento) · <b>DISH</b> (hiperostosis esquelética idiopática difusa: &gt;50 años, a menudo con DM u obesidad, osificación del ligamento longitudinal anterior en ≥4 vértebras contiguas, sacroiliacas normales, PCR normal) · osteítis condensante del ilion (mujer posparto, esclerosis triangular del ilion sin erosiones).</p>` },
        { h: 'Fármacos clave', html: `
<div class="tablewrap"><table class="mini">
<tr><th>Fármaco</th><th>Mecanismo</th><th>Efecto adverso clave</th><th>Contraindicación / nota</th></tr>
<tr><td><b>AINE</b> (naproxeno, celecoxib)</td><td>Inhiben la COX</td><td>Úlcera, daño renal, riesgo CV</td><td>ERC, úlcera; pueden activar la EII</td></tr>
<tr><td><b>Anti-TNF</b> (adalimumab, infliximab, certolizumab, golimumab, etanercept)</td><td>Bloquean el TNF-α</td><td>Infecciones, reactivación de TB y VHB</td><td>IC grave, desmielinizantes. Etanercept no sirve para la EII</td></tr>
<tr><td><b>Anti-IL-17</b> (secukinumab, ixekizumab)</td><td>Bloquean la IL-17A</td><td>Candidiasis; pueden desencadenar o empeorar la EII</td><td>EII activa</td></tr>
<tr><td><b>Anti-IL-23 / IL-12/23</b> (guselkumab, risankizumab, ustekinumab)</td><td>Bloquean la IL-23</td><td>Infecciones</td><td>Sirven en piel y artritis periférica, no en la columna</td></tr>
<tr><td><b>JAK</b> (tofacitinib, upadacitinib)</td><td>Inhiben la vía JAK-STAT</td><td>Zóster, trombosis, eventos CV</td><td>≥65 años, fumadores o riesgo CV</td></tr>
<tr><td><b>Metotrexato / sulfasalazina</b></td><td>Antifolato / sulfapiridina + 5-ASA</td><td>Hepatotoxicidad, mielosupresión / agranulocitosis</td><td>Solo artritis periférica; no sirven en la axial</td></tr>
<tr><td><b>Apremilast</b></td><td>Inhibe la PDE4</td><td>Diarrea, pérdida de peso, depresión</td><td>Artritis psoriásica leve; no en la axial</td></tr>
</table></div>` },
        { h: 'Cómo lo preguntan en el examen', html: `
<ul>
<li>Hombre joven, lumbalgia nocturna que mejora con ejercicio + ojo rojo doloroso → <b>espondiloartritis axial</b>; Rx normal → <b>RM de sacroiliacas</b>.</li>
<li>Falla a 2 AINE → <b>anti-TNF o anti-IL-17</b>; “metotrexato” o “prednisona” es la trampa.</li>
<li>Uretritis o diarrea + artritis de rodilla y tobillo 2–4 semanas después → <b>artritis reactiva</b>: AINE.</li>
<li>Psoriasis + IFD + uñas + dactilitis → <b>artritis psoriásica</b>; tratamiento periférico: <b>metotrexato</b>.</li>
<li>EA de larga evolución + soplo diastólico → <b>insuficiencia aórtica</b>. Columna en caña de bambú + caída menor → <b>TC</b> por fractura.</li>
<li>EspA + EII que necesita biológico → <b>anticuerpo anti-TNF</b> (no etanercept ni anti-IL-17).</li>
</ul>` }
      ],
      mnemo: { t: 'Espondiloartritis = “PEAR”', d: 'Psoriásica, Enteropática (EII), Anquilosante (axial), Reactiva: cuatro hermanas seronegativas (FR y anti-CCP negativos) asociadas a HLA-B27.' },
      pearl: 'Ojo rojo doloroso con fotofobia en un joven con lumbalgia: uveítis anterior aguda. Requiere oftalmología urgente y orienta a HLA-B27.',
      trap: 'HLA-B27 positivo no diagnostica nada solo: hasta ~8% de la población sana lo tiene. Se interpreta junto con la clínica y la imagen.',
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

  compares: {
    'espondilo-lumbalgia': {
      topic: 'espondilo', a: 'Lumbalgia inflamatoria', b: 'Lumbalgia mecánica',
      rows: [
        ['Edad de inicio', '<40–45 años', 'Cualquiera, más en >45'],
        ['Inicio y duración', 'Insidioso, >3 meses', 'Agudo, tras esfuerzo; suele mejorar en semanas'],
        ['Ejercicio', 'Mejora', 'Empeora'],
        ['Reposo y noche', 'No mejora; despierta en la 2ª mitad de la noche', 'Mejora con reposo'],
        ['Rigidez matutina', '>30 min', '<30 min'],
        ['Respuesta a AINE', 'Muy buena en 24–48 h', 'Parcial'],
        ['Laboratorio e imagen', 'PCR alta en ~50%, sacroileítis', 'Normal']
      ]
    }
  },

  anims: {
    espondilo: {
      title: 'De la entesis a la caña de bambú',
      steps: [
        { cap: '<b>Entesitis.</b> La inflamación empieza donde el tendón se inserta en el hueso (la entesis), como el Aquiles en el calcáneo. Es el sello de las espondiloartritis y explica el dolor del talón.',
          labels: [[112, 30, 'Tendón de Aquiles'], [138, 64, 'Entesitis'], [70, 86, 'Calcáneo']] },
        { cap: '<b>Sacroileítis en la RM.</b> Con supresión de grasa, el edema de médula ósea brilla a ambos lados de las sacroiliacas antes de que la Rx cambie: espondiloartritis axial no radiográfica.',
          labels: [[80, 30, 'Sacro'], [26, 30, 'Ilíaco'], [126, 66, 'Edema óseo']] },
        { cap: '<b>Sindesmofitos.</b> Después de la inflamación se forma hueso nuevo: puentes verticales y delgados entre las vértebras. Al fusionarse, la columna queda rígida, en “caña de bambú”.',
          labels: [[80, 11, 'Vértebra'], [124, 37, 'Sindesmofito'], [32, 77, 'Caña de bambú']] },
        { cap: '<b>Uveítis anterior aguda.</b> La manifestación extraarticular más común: ojo rojo alrededor de la córnea, dolor, fotofobia y células en la cámara anterior, casi siempre unilateral. Oftalmología urgente.',
          labels: [[34, 22, 'Fotofobia'], [128, 82, 'Inyección ciliar'], [80, 98, 'Células en cámara anterior']] },
        { cap: '<b>Tratamiento escalonado.</b> Primero AINE a dosis plenas y ejercicio. Si fallan 2 AINE en 4 semanas, anti-TNF o anti-IL-17: los anticuerpos atrapan las citocinas y la inflamación se apaga.',
          labels: [[27, 12, 'AINE + ejercicio'], [80, 12, 'Anti-TNF / IL-17'], [133, 12, 'Inflamación']] }
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
    ['Criterios de artritis psoriásica', 'CASPAR'],
    ['Criterios ASAS: brazo clínico', 'HLA-B27 + ≥2 rasgos de espondiloartritis (lumbalgia ≥3 meses con inicio <45 años)'],
    ['Biológico de elección si hay EII o uveítis recurrente', 'Anticuerpo anti-TNF (adalimumab, infliximab); no etanercept ni anti-IL-17'],
    ['Artritis reactiva post-entérica: ¿antibióticos?', 'No cambian la evolución; AINE. Solo se trata la Chlamydia activa'],
    ['Columna en caña de bambú + caída menor', 'Sospecha fractura: TC (la Rx puede no verla)'],
    ['DISH vs espondilitis anquilosante', 'DISH: >50 años, osificación del ligamento longitudinal anterior en ≥4 vértebras, sacroiliacas normales']
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
      ref: 'CASPAR 2006' }),

    q({ id: 'espondilo-11', dif: 3,
      stem: 'Hombre de 29 años con espondiloartritis axial activa pese a naproxeno y luego etoricoxib a dosis plenas por 4 semanas en total. Tiene además enfermedad de Crohn activa. ¿Qué biológico prefieres?',
      opts: ['Secukinumab', 'Etanercept', 'Adalimumab', 'Metotrexato', 'Apremilast'],
      ans: 2,
      exp: 'Con EII concomitante se prefiere un anticuerpo monoclonal anti-TNF (adalimumab, infliximab), que trata la columna y el intestino. El etanercept (receptor soluble) no sirve en EII y los anti-IL-17 pueden empeorarla.',
      why: ['Los anti-IL-17 pueden desencadenar o empeorar la EII.', 'No es eficaz en la EII.', '', 'No sirve para la enfermedad axial.', 'No sirve para la enfermedad axial ni para la EII.'],
      ref: 'ASAS-EULAR 2022' }),

    q({ id: 'espondilo-12', dif: 2,
      stem: 'Hombre de 58 años con espondilitis anquilosante de 25 años y columna en caña de bambú. Cae de su propia altura y tiene dolor cervical nuevo, sin déficit neurológico. La Rx inicial no muestra fractura evidente. ¿Siguiente paso?',
      opts: ['Analgésicos y alta', 'Inmovilizar y pedir TC de columna (RM si hay déficit o duda)', 'Fisioterapia intensiva', 'Infiltración facetaria', 'Repetir la Rx en 6 semanas'],
      ans: 1,
      exp: 'La columna anquilosada se rompe como un hueso largo, a menudo en la unión cervicotorácica, con traumatismos menores y alto riesgo de lesión medular. La Rx pierde muchas fracturas: se inmoviliza y se pide TC (y RM si hay déficit o sospecha de lesión ligamentaria o hematoma epidural).',
      why: ['Una fractura inestable puede pasar inadvertida y causar lesión medular.', '', 'Es peligrosa si hay fractura.', 'No está indicada.', 'Retrasar el diagnóstico pone en riesgo la médula.'],
      ref: 'Harrison 21e' }),

    q({ id: 'espondilo-13', dif: 2,
      stem: 'Hombre de 30 años con artritis de rodilla y tobillo derechos 3 semanas después de una diarrea por Salmonella ya resuelta. Coprocultivo actual negativo, sin uretritis. ¿Tratamiento?',
      opts: ['Ciprofloxacino por 3 meses', 'AINE (y esteroide intraarticular si persiste)', 'Metotrexato de inicio', 'Anti-TNF', 'Alopurinol'],
      ans: 1,
      exp: 'La artritis reactiva se trata con AINE y, si una articulación persiste inflamada, esteroide intraarticular. Los antibióticos no modifican la artritis post-entérica; solo se trata una Chlamydia activa (y a la pareja). Si se vuelve crónica (>6 meses): sulfasalazina o metotrexato.',
      why: ['Los antibióticos no cambian la evolución de la artritis post-entérica.', '', 'Se reserva para formas crónicas.', 'No es primera línea.', 'No es gota.'],
      ref: 'Harrison 21e' }),

    q({ id: 'espondilo-14', dif: 3,
      stem: 'Hombre de 27 años con lumbalgia inflamatoria de 6 meses. Rx y RM de sacroiliacas normales. HLA-B27 positivo, entesitis aquílea y gran mejoría con naproxeno. ¿Cumple criterios ASAS de espondiloartritis axial?',
      opts: ['No: sin sacroileítis en imagen no se puede clasificar', 'Sí, por el brazo clínico: HLA-B27 + ≥2 rasgos', 'Sí, por el brazo de imagen', 'No: necesita PCR elevada', 'Solo si tiene uveítis'],
      ans: 1,
      exp: 'ASAS axial: lumbalgia ≥3 meses con inicio <45 años + (sacroileítis en imagen + ≥1 rasgo) o (HLA-B27 + ≥2 rasgos). Aquí: HLA-B27 + entesitis + buena respuesta a AINE (la lumbalgia inflamatoria también cuenta como rasgo) = brazo clínico.',
      why: ['El brazo clínico no requiere imagen positiva.', '', 'Su Rx y RM son normales.', 'La PCR es solo uno de los rasgos posibles.', 'La uveítis es un rasgo más, no un requisito.'],
      ref: 'ASAS 2009' }),

    q({ id: 'espondilo-15', dif: 2,
      stem: 'Hombre de 71 años con DM2 y obesidad. Refiere rigidez dorsal leve. Rx: osificación gruesa y fluida del ligamento longitudinal anterior en 5 vértebras torácicas contiguas, con discos conservados; sacroiliacas normales. PCR normal. ¿Diagnóstico?',
      opts: ['Espondilitis anquilosante', 'Hiperostosis esquelética idiopática difusa (DISH)', 'Artritis psoriásica axial', 'Osteoartritis de facetas', 'Metástasis osteoblásticas'],
      ans: 1,
      exp: 'DISH (enfermedad de Forestier): adultos mayores con síndrome metabólico, osificación del ligamento longitudinal anterior en ≥4 vértebras contiguas (típicamente del lado derecho en la columna torácica), discos conservados y sacroiliacas normales. No es inflamatoria.',
      why: ['Empieza en jóvenes, con sacroileítis y sindesmofitos delgados.', '', 'Daría sindesmofitos gruesos asimétricos, con psoriasis y sacroileítis.', 'Afecta las articulaciones facetarias, no el ligamento anterior.', 'No forman puentes continuos a lo largo del ligamento.'],
      ref: 'Harrison 21e' })
  ]
};
