// Tema 8 · Anemias (Hematología, semanas 1–2)
const T = { topic: 'anemias', subj: 'hemato' };
const q = (o) => ({ ...T, ...o });

export default {
  lessons: {
    anemias: {
      hook: 'Dos números ordenan todo: el VCM (micro, normo o macrocítica) y los reticulocitos (¿la médula produce o no?). Después, la ferritina y la B12 hacen el resto.',
      compare: ['ferro-inflam', 'b12-folato'],
      nn: [['microcytic-anemia', 'Microcytic Anemia'], ['macrocytic-anemia', 'Macrocytic Anemia'], ['cbc-approach-to-anemia', 'CBC: Approach to Anemia']],
      yt: 'anemia microcytic macrocytic',
      anim: 'anemias',
      video: [
        { ch: 'Dos números ordenan todo', sc: [
          { v: { k: 'title', t: 'Anemias', s: 'Tema 8 · Hematología' },
            say: 'Bienvenido a la guardia. En este video vas a aprender a ordenar cualquier anemia con dos números: el volumen corpuscular medio y los reticulocitos. Después veremos la ferropénica, la de inflamación, la talasemia y la megaloblástica.' },
          { v: { k: 'case', t: 'Consulta de Medicina Interna', p: { name: 'Guadalupe', age: 61, sex: 'M', skin: '#D9A07A', hair: '#C8C8D2', gown: '#E79AB3' }, text: 'Meses de cansancio y disnea al subir escaleras. Toma omeprazol diario y calcio. Hb 8.9 g/dL, VCM 72 fL.', vit: { FC: '96', PA: '118/72', Hb: '8.9' } },
            say: 'Imagina a doña Guadalupe, de sesenta y un años. Lleva meses cansada y se agita al subir escaleras. Toma omeprazol diario y calcio. Su hemoglobina es de ocho punto nueve y su volumen corpuscular medio de setenta y dos. ¿Por dónde empiezas?' },
          { v: { k: 'big', h: 'Anemia (OMS)', t: '13 · 12', u: 'g/dL de Hb', s: 'Hb <13 en hombres, <12 en mujeres no embarazadas y <11 en el embarazo.' },
            say: 'Primero, define anemia. Según la Organización Mundial de la Salud, es una hemoglobina menor de trece gramos por decilitro en hombres, menor de doce en mujeres no embarazadas y menor de once en el embarazo.' },
          { v: { k: 'list', t: 'Clasifica por VCM', items: ['VCM <80: ferropenia, talasemia, inflamación', '80–100: inflamación, ERC, hemólisis, sangrado', 'VCM >100: B12, folato, alcohol, hígado, SMD', 'Luego: ¿reticulocitos altos o bajos?'] },
            say: 'Luego clasifica por el volumen corpuscular medio. Menor de ochenta es microcítica: ferropenia, talasemia y, a veces, inflamación. Entre ochenta y cien es normocítica: inflamación, enfermedad renal crónica, hemólisis o sangrado agudo. Mayor de cien es macrocítica: vitamina B doce, folato, alcohol, hepatopatía o síndrome mielodisplásico.' },
          { v: { k: 'big', h: 'Índice reticulocitario', t: 'IR 2', u: 'el punto de corte', s: '<2: la médula no produce (hipoproliferativa). >2–3: produce bien → busca hemólisis o sangrado.' },
            say: 'El segundo número son los reticulocitos, corregidos como índice reticulocitario. Menor de dos significa que la médula no está produciendo: una anemia hipoproliferativa. Mayor de dos o tres significa que la médula responde, y entonces buscas hemólisis o sangrado.' }
        ] },
        { ch: 'Ferropenia: sigue al hierro', sc: [
          { v: { k: 'anim', id: 'anemias', step: 0 },
            say: 'Para entender la microcítica, sigue al hierro. Se absorbe en el duodeno, sale del enterocito por la ferroportina y viaja en la sangre unido a la transferrina hasta la médula ósea. Lo que sobra se guarda como ferritina, y los macrófagos reciclan el hierro de los eritrocitos viejos.' },
          { v: { k: 'anim', id: 'anemias', step: 2 },
            say: 'Si falta hierro, la médula fabrica eritrocitos pequeños y pálidos, microcíticos e hipocrómicos, y de tamaños muy distintos. Por eso sube el ancho de distribución eritrocitaria. Los depósitos se vacían primero, así que la ferritina es lo primero que baja.' },
          { v: { k: 'big', h: 'Ferritina', t: '<30', u: 'ng/mL', s: 'Confirma ferropenia. Con inflamación, hasta <100 puede seguir siendo ferropenia (con saturación <20%).' },
            say: 'La ferritina es el mejor estudio aislado. Menor de treinta nanogramos por mililitro confirma la ferropenia. Pero es un reactante de fase aguda: con inflamación, una ferritina de hasta cien puede esconder una ferropenia, sobre todo si la saturación de transferrina es menor de veinte por ciento.' },
          { v: { k: 'list', t: 'Pistas clínicas de ferropenia', items: ['Pica y pagofagia (antojo de hielo)', 'Coiloniquia, queilitis, glositis', 'Piernas inquietas', 'Plummer-Vinson: membranas + disfagia', 'Trombocitosis reactiva'] },
            say: 'En la clínica busca pica, sobre todo antojo de hielo, uñas en cuchara, queilitis y glositis, y piernas inquietas. Si además hay disfagia por membranas esofágicas, es el síndrome de Plummer-Vinson. Y no te asustes por plaquetas altas: la trombocitosis reactiva es frecuente.' },
          { v: { k: 'flow', t: 'Tratar la ferropenia', steps: ['Hierro oral 1 vez/día o días alternos', 'Reticulocitos ↑ a los 7–10 días', 'Hb +1–2 g/dL en 3–4 semanas', 'Seguir 3 meses tras normalizar', 'Hierro IV si malabsorción o no responde'] },
            say: 'El tratamiento es hierro oral una vez al día o en días alternos, lejos del calcio, del té y de los inhibidores de bomba de protones. Repartirlo en varias tomas no ayuda, porque cada dosis sube la hepcidina. Los reticulocitos suben a los siete a diez días y la hemoglobina uno a dos gramos en tres a cuatro semanas. Sigue tres meses después de normalizarla. Si hay malabsorción o no responde, usa hierro intravenoso.' },
          { v: { k: 'anim', id: 'anemias', step: 4 },
            say: 'Así se ve una buena respuesta: la médula, ya con materia prima, libera una ola de reticulocitos que llega a su pico en una semana, y después sube la hemoglobina. Si a las cuatro semanas no pasa esto, revisa el apego, la absorción o una pérdida que continúa.' },
          { v: { k: 'tip', kind: 'trap', t: 'Ferropenia en hombre o mujer posmenopáusica = endoscopia alta + colonoscopia. Dar solo hierro es la respuesta incorrecta.' },
            say: 'Ojo con esta trampa. Ferropenia en un hombre o en una mujer posmenopáusica significa pérdida digestiva hasta demostrar lo contrario. Pide endoscopia alta y colonoscopia. Dar hierro sin buscar la causa puede dejar pasar un cáncer de colon.' }
        ] },
        { ch: 'Inflamación y talasemia', sc: [
          { v: { k: 'anim', id: 'anemias', step: 1 },
            say: 'Ahora la anemia de inflamación. La interleucina seis hace que el hígado produzca hepcidina. La hepcidina bloquea la ferroportina, así que el hierro queda atrapado en los enterocitos y en los macrófagos. Hay hierro, pero la médula no lo puede usar.' },
          { v: { k: 'vs', cmp: 'ferro-inflam', rows: [2, 3, 4, 6] },
            say: 'Compara las dos. En la ferropenia la ferritina está baja y la transferrina alta. En la inflamación la ferritina está normal o alta y la transferrina baja. La saturación baja en ambas, así que no te sirve para separarlas. Si hay duda, el receptor soluble de transferrina sube solo en la ferropenia.' },
          { v: { k: 'quiz', q: 'AR activa. Hb 10.4, VCM 84, ferritina 320, TIBC baja, saturación 14%. ¿Qué es?', opts: ['Ferropenia: hierro oral', 'Anemia de inflamación: tratar la AR'], a: 1 },
            say: 'Pausa. Mujer con artritis reumatoide activa. Hemoglobina de diez punto cuatro, volumen corpuscular de ochenta y cuatro, ferritina de trescientos veinte y capacidad de fijación de hierro baja. ¿Qué tiene?',
            exp: 'Anemia de inflamación. La ferritina alta con capacidad de fijación baja indica hierro atrapado por la hepcidina. Mejora al controlar la artritis, no con hierro oral.' },
          { v: { k: 'big', h: 'Índice de Mentzer', t: '<13', u: 'VCM ÷ eritrocitos', s: '<13 sugiere talasemia; >13, ferropenia. β-talasemia menor: HbA2 >3.5% en la electroforesis.' },
            say: 'Si la microcitosis es muy marcada, pero la hemoglobina es casi normal y los eritrocitos están altos, piensa en talasemia. Divide el volumen corpuscular entre los millones de eritrocitos: es el índice de Mentzer. Menor de trece sugiere talasemia. En la beta talasemia menor, la electroforesis muestra hemoglobina A dos mayor de tres punto cinco por ciento. Y no le des hierro.' },
          { v: { k: 'mnemo', t: 'Microcítica: “TICS”', d: 'Talasemia · Inflamación · Carencia de hierro · Sideroblástica (y plomo).' },
            say: 'Para la microcítica recuerda TICS: talasemia, inflamación, carencia de hierro y sideroblástica, donde entra el plomo. La sideroblástica por isoniazida se corrige con piridoxina. El plomo da punteado basófilo, cólico abdominal y muñeca caída.' }
        ] },
        { ch: 'Megaloblástica: B12 y folato', sc: [
          { v: { k: 'anim', id: 'anemias', step: 3 },
            say: 'Pasemos a la macrocítica. La vitamina B doce y el folato son necesarios para sintetizar el ADN. Sin ellos, el núcleo no puede dividirse mientras el citoplasma sigue creciendo. Aparecen megaloblastos en la médula, macroovalocitos en la sangre y neutrófilos hipersegmentados, con seis lóbulos o más.' },
          { v: { k: 'list', t: 'Causas de déficit de B12', items: ['Anemia perniciosa (anti-factor intrínseco)', 'Gastrectomía o bypass gástrico', 'Resección ileal o enfermedad de Crohn', 'Metformina e IBP por años', 'Dieta vegana estricta'] },
            say: 'Las causas de déficit de B doce: anemia perniciosa, con anticuerpos contra el factor intrínseco; gastrectomía o bypass; resección del íleon o enfermedad de Crohn; metformina e inhibidores de bomba de protones por años; y dieta vegana estricta. El folato, en cambio, falta por dieta pobre, alcohol, embarazo y fármacos como el metotrexato.' },
          { v: { k: 'vs', cmp: 'b12-folato', rows: [0, 1, 2, 3] },
            say: 'La diferencia clave es neurológica. La B doce da degeneración combinada subaguda: se pierden la vibración y la posición, hay ataxia y Romberg positivo. El folato no da neuropatía. En el laboratorio, el ácido metilmalónico sube solo en el déficit de B doce; la homocisteína sube en ambos.' },
          { v: { k: 'quiz', q: 'Macrocitosis, ataxia y Romberg +. En la farmacia solo hay ácido fólico. ¿Lo das?', opts: ['Sí, mientras llega la B12', 'No: primero mide o da B12'], a: 1 },
            say: 'Pausa. Paciente con macrocitosis, ataxia y Romberg positivo. En la farmacia solo hay ácido fólico. ¿Se lo das?',
            exp: 'No. El folato solo corrige la anemia, pero la neuropatía por falta de B doce sigue avanzando y puede volverse irreversible. Mide la B doce antes, o da ambas vitaminas.' }
        ] },
        { ch: 'Integra y no caigas', sc: [
          { v: { k: 'case', t: 'Un año después', p: { name: 'Guadalupe', age: 62, sex: 'M', skin: '#D9A07A', hair: '#C8C8D2', gown: '#E79AB3' }, text: 'Biopsia: gastritis atrófica autoinmune. Ahora: hormigueo en pies, VCM 98, neutrófilos hipersegmentados, anti-factor intrínseco +.', vit: { Hb: '10.6', VCM: '98' } },
            say: 'Volvamos con doña Guadalupe. La biopsia mostró gastritis atrófica autoinmune. Un año después tiene hormigueo en los pies, volumen corpuscular de noventa y ocho y neutrófilos hipersegmentados. Sin ácido absorbió poco hierro, y sin factor intrínseco ahora le falta B doce. La mezcla dio un volumen normal. Necesita B doce intramuscular.' },
          { v: { k: 'list', t: 'Transfusión: umbral restrictivo', items: ['Hb <7 g/dL en el paciente estable', '≈8 con enfermedad cardiovascular', 'Cada unidad sube ~1 g/dL', 'Choque o sangrado activo: no esperes un número'] },
            say: 'Sobre la transfusión: el umbral es restrictivo. Transfunde con hemoglobina menor de siete en el paciente estable, y alrededor de ocho si tiene enfermedad cardiovascular. Cada unidad sube cerca de un gramo. Si está en choque o sangrando activamente, no esperes un número.' },
          { v: { k: 'quiz', q: 'Hematemesis hace 1 h, FC 124, PA 86/54. Hb 13.4. ¿Qué te dice la Hb?', opts: ['Que no perdió mucha sangre', 'Nada aún: la hemodilución tarda horas'], a: 1 },
            say: 'Pausa. Hombre con hematemesis desde hace una hora, frecuencia cardiaca de ciento veinticuatro y presión de ochenta y seis sobre cincuenta y cuatro. Su hemoglobina es de trece punto cuatro. ¿Qué te dice?',
            exp: 'Casi nada todavía. En el sangrado agudo se pierde sangre completa, y la hemoglobina baja hasta que el líquido diluye la sangre, en las siguientes veinticuatro a setenta y dos horas. Guíate por la hemodinámica.' },
          { v: { k: 'tip', kind: 'pearl', t: 'Un VCM normal no descarta una carencia: ferropenia + déficit de B12 se compensan. Mira el ADE y el frotis.' },
            say: 'La perla final: un volumen corpuscular normal no descarta una carencia. Ferropenia y déficit de B doce juntos se compensan, pero el ancho de distribución eritrocitaria sale alto. Ahora ve a las preguntas del tema para fijar lo que viste.' }
        ] }
      ],
      sections: [
        { h: 'Abordaje', html: `
<ul>
<li><b>Anemia (OMS)</b>: Hb &lt;13 g/dL en hombres, &lt;12 en mujeres no embarazadas (&lt;11 en el embarazo).</li>
<li><b>Índice reticulocitario</b> = reticulocitos (%) × (Hto/45) ÷ factor de maduración. &lt;2: la médula no produce (hipoproliferativa). &gt;2–3: produce bien (hemólisis o sangrado).</li>
</ul>
<div class="tablewrap"><table class="mini">
<tr><th>Microcítica (VCM &lt;80)</th><th>Normocítica</th><th>Macrocítica (VCM &gt;100)</th></tr>
<tr><td>Ferropénica, talasemia, inflamación (a veces), sideroblástica, plomo</td><td>Inflamación, ERC, hemólisis, sangrado agudo, falla medular</td><td>Megaloblástica: B12, folato, fármacos (metotrexato, hidroxiurea, zidovudina, trimetoprim). No megaloblástica: alcohol, hepatopatía, hipotiroidismo, SMD, reticulocitosis</td></tr>
</table></div>` },
        { h: 'Ferropénica', html: `
<ul>
<li>La más común del mundo. Causas: sangrado (menstrual, digestivo), embarazo, malabsorción (celiaca, bariátrica, gastritis atrófica, H. pylori), dieta.</li>
<li><b>Laboratorio</b>: ferritina &lt;30 ng/mL (con inflamación puede ser ferropenia hasta &lt;100), hierro bajo, transferrina/TIBC alta, saturación &lt;20%, ADE alta, trombocitosis reactiva.</li>
<li><b>Clínica</b>: pica (hielo = pagofagia), coiloniquia, queilitis, glositis, piernas inquietas. Plummer-Vinson: disfagia por membranas esofágicas (riesgo de cáncer escamoso).</li>
<li><b>Tratamiento</b>: hierro oral una vez al día o en días alternos (mejor absorción por la hepcidina), lejos de calcio, té e IBP. Reticulocitos suben en 7–10 días y la Hb ~1–2 g/dL en 3–4 semanas. Seguir 3 meses después de normalizar la Hb.</li>
<li><b>Hierro IV</b>: intolerancia, malabsorción (bypass gástrico, celiaca, EII), pérdidas continuas, ERC, tercer trimestre.</li>
<li><b>Busca la causa</b>: en hombres y mujeres posmenopáusicas, endoscopia alta y colonoscopia.</li>
</ul>` },
        { h: 'Anemia de inflamación y talasemia', html: `
<ul>
<li><b>Inflamación</b>: la IL-6 sube la hepcidina, que bloquea la ferroportina: el hierro queda atrapado en macrófagos y enterocitos. Ferritina normal o alta, TIBC baja, saturación baja. Normocítica (a veces microcítica leve). Se trata la causa.</li>
<li><b>β-talasemia menor (rasgo)</b>: microcitosis marcada (VCM ~60–70) con Hb casi normal y eritrocitos normales o aumentados; <b>índice de Mentzer (VCM ÷ eritrocitos en millones) &lt;13</b>; ferritina normal; células en diana y punteado basófilo. Electroforesis: HbA2 &gt;3.5%. No requiere hierro.</li>
<li><b>α-talasemia rasgo</b>: electroforesis normal en adultos; diagnóstico genético o por exclusión.</li>
<li><b>β-talasemia mayor</b>: anemia grave desde los 6 meses, hepatoesplenomegalia, cambios óseos; transfusiones con quelación de hierro.</li>
</ul>
<p><b>Diagnóstico diferencial de la microcítica</b></p>
<div class="tablewrap"><table class="mini">
<tr><th></th><th>Ferropenia</th><th>Inflamación</th><th>Talasemia menor</th><th>Sideroblástica</th></tr>
<tr><td>Ferritina</td><td>↓</td><td>Normal o ↑</td><td>Normal</td><td>↑</td></tr>
<tr><td>TIBC</td><td>↑</td><td>↓</td><td>Normal</td><td>Normal o ↓</td></tr>
<tr><td>Saturación</td><td>↓</td><td>↓</td><td>Normal</td><td>↑</td></tr>
<tr><td>ADE</td><td>↑</td><td>Normal</td><td>Normal o levemente ↑</td><td>↑ (población dimórfica)</td></tr>
<tr><td>Clave</td><td>Responde al hierro</td><td>Enfermedad de base, PCR ↑</td><td>Mentzer &lt;13; HbA2 &gt;3.5% en la β</td><td>Sideroblastos en anillo</td></tr>
</table></div>` },
        { h: 'Megaloblástica: B12 y folato', html: `
<ul>
<li><b>B12</b>: anemia perniciosa (anticuerpos anti-factor intrínseco y anti-células parietales; gastritis atrófica autoinmune, más riesgo de cáncer gástrico), gastrectomía o bypass, resección ileal o Crohn, metformina, IBP crónicos, dieta vegana.</li>
<li><b>Clínica de B12</b>: anemia + <b>neuropatía</b> (degeneración combinada subaguda: cordones posteriores y laterales → pérdida de vibración y posición, ataxia, Romberg +, Babinski), deterioro cognitivo, glositis.</li>
<li><b>Laboratorio</b>: VCM &gt;100, neutrófilos hipersegmentados (≥6 lóbulos), LDH y bilirrubina indirecta altas (hemólisis intramedular), a veces pancitopenia. Ácido metilmalónico y homocisteína altos en B12; en folato solo la homocisteína.</li>
<li><b>Folato</b>: dieta pobre, alcohol, embarazo, metotrexato, trimetoprim, fenitoína, hemólisis crónica. Sin neuropatía.</li>
<li><b>Tratamiento</b>: B12 IM (o oral a dosis altas); folato oral. <b>Nunca des solo folato si hay déficit de B12</b>: mejora la anemia pero progresa la neuropatía. Vigila hipokalemia al inicio.</li>
</ul>` },
        { h: 'Otras pistas y transfusión', html: `
<ul>
<li><b>Sideroblástica</b>: sideroblastos en anillo (tinción de Perls); alcohol, plomo, isoniazida (déficit de B6), déficit de cobre, SMD. Isoniazida → piridoxina.</li>
<li><b>Plomo</b>: microcítica con punteado basófilo, dolor abdominal, neuropatía (muñeca caída), línea de Burton en encías. En México: loza de barro vidriado, reciclaje de baterías.</li>
<li><b>Alcohol</b>: macrocitosis sin hipersegmentación, GGT alta.</li>
<li><b>Transfusión</b>: umbral restrictivo Hb &lt;7 g/dL (≈8 con enfermedad cardiovascular o cirugía cardiaca u ortopédica). Cada unidad sube ~1 g/dL.</li>
</ul>` },
        { h: 'Fisiopatología en 1 minuto', html: `
<ul>
<li><b>Hierro</b>: se absorbe como Fe²⁺ en el duodeno, sale del enterocito por la <b>ferroportina</b> y viaja unido a la <b>transferrina</b> hasta la médula. Se guarda como <b>ferritina</b> en hígado y macrófagos. Casi todo el hierro que se usa cada día viene del reciclaje de eritrocitos viejos por los macrófagos; la dieta solo repone 1–2 mg/día.</li>
<li><b>Hepcidina</b> (hígado): bloquea la ferroportina. Sube con la inflamación (IL-6) y después de cada dosis de hierro oral; baja con la ferropenia y con la eritropoyesis activa.</li>
<li><b>Orden de la ferropenia</b>: primero se vacían los depósitos (ferritina ↓), luego baja el hierro circulante (saturación ↓) y al final aparece la anemia microcítica e hipocrómica.</li>
<li><b>B12 y folato</b>: cofactores de la síntesis de timidina (ADN). Sin ellos el núcleo madura más lento que el citoplasma (asincronía): megaloblastos, macroovalocitos, neutrófilos hipersegmentados y hemólisis intramedular (LDH ↑). La B12 también es cofactor de la metilmalonil-CoA mutasa: por eso sube el ácido metilmalónico solo en su déficit.</li>
<li><b>Reticulocitos</b>: eritrocitos jóvenes. Si la anemia es grave, corrige el porcentaje por el Hto y divídelo entre el factor de maduración (Hto 45% → 1 · 35% → 1.5 · 25% → 2 · 15% → 2.5).</li>
</ul>` },
        { h: 'Fármacos clave', html: `
<div class="tablewrap"><table class="mini">
<tr><th>Fármaco</th><th>Mecanismo</th><th>Efecto adverso clave</th><th>Contraindicación / cuidado</th></tr>
<tr><td>Sulfato ferroso oral</td><td>Repone hierro por vía duodenal</td><td>Náusea, estreñimiento, heces negras</td><td>Sobrecarga de hierro (talasemia sin ferropenia, hemocromatosis)</td></tr>
<tr><td>Hierro IV (carboximaltosa férrica, hierro sacarosa)</td><td>Llena los depósitos sin pasar por el intestino</td><td>Reacciones de hipersensibilidad (raras); hipofosfatemia con carboximaltosa</td><td>Primer trimestre del embarazo, bacteriemia activa, sobrecarga de hierro</td></tr>
<tr><td>Vitamina B12 IM (ciano- o hidroxocobalamina)</td><td>Repone B12 sin depender del factor intrínseco</td><td>Hipokalemia en las primeras 48–72 h si la anemia es grave</td><td>Vigila el potasio; en anemia perniciosa es de por vida</td></tr>
<tr><td>Ácido fólico oral</td><td>Repone folato</td><td>Bien tolerado; puede enmascarar un déficit de B12</td><td>No darlo solo si hay déficit de B12 sin tratar</td></tr>
<tr><td>Piridoxina (B6)</td><td>Cofactor de la ALA sintasa (síntesis del hem)</td><td>Neuropatía sensitiva a dosis muy altas</td><td>Profilaxis con isoniazida</td></tr>
<tr><td>Concentrado eritrocitario</td><td>Sube ~1 g/dL de Hb por unidad</td><td>Sobrecarga circulatoria, TRALI, reacción hemolítica</td><td>No en anemia crónica estable por arriba del umbral restrictivo</td></tr>
</table></div>` },
        { h: 'Cómo lo preguntan en el examen', html: `
<ul>
<li>Hombre o mujer posmenopáusica con ferropenia → <b>endoscopia alta y colonoscopia</b>, no solo hierro.</li>
<li>Microcitosis marcada, eritrocitos altos, Hb casi normal y ferritina normal → <b>rasgo talasémico</b> (Mentzer &lt;13); HbA2 &gt;3.5% = β; electroforesis normal = probable α.</li>
<li>Enfermedad inflamatoria + ferritina alta + TIBC baja → <b>anemia de inflamación</b>: trata la causa.</li>
<li>Macrocitosis + ataxia o Romberg + autoinmunidad (vitíligo, tiroiditis) → <b>anemia perniciosa</b>: B12 IM.</li>
<li>Metotrexato, alcohol o embarazo + macrocitosis sin neuropatía y ácido metilmalónico normal → <b>déficit de folato</b>.</li>
<li>Sin respuesta al hierro oral con buen apego → <b>malabsorción</b> (celiaca, H. pylori, gastritis atrófica, bypass, IBP) o pérdida continua; considera hierro IV.</li>
</ul>` }
      ],
      mnemo: { t: 'Microcítica: “TICS”', d: 'Talasemia · Inflamación (enfermedad crónica) · Carencia de hierro (ferropenia) · Sideroblástica (y plomo). Para separar ferropenia de talasemia: Mentzer <13 = talasemia.' },
      pearl: 'La ferritina es el mejor estudio aislado para ferropenia: <30 ng/mL la confirma. Pero es reactante de fase aguda: con inflamación, hasta 100 puede seguir siendo ferropenia.',
      trap: 'Dar folato a un paciente con déficit de B12: la Hb mejora y la neuropatía sigue avanzando, a veces de forma irreversible. Mide B12 antes o da ambas.',
      guide: [
        'Hierro oral en días alternos: estudios recientes muestran mejor absorción que dar varias dosis al día (la hepcidina sube tras cada dosis). Algunas guías siguen indicando una dosis diaria; ambas son correctas, lo que no conviene es repartirlo en 2–3 tomas.',
        'Corte de ferritina para ferropenia: la OMS 2020 usa <15 ng/mL en adultos sanos y <70 con infección o inflamación; la AGA 2020 usa <45 ng/mL para decidir el estudio digestivo; muchos textos usan <30. En el examen, <30 confirma ferropenia y, con inflamación, hasta ~100 puede serlo.'
      ],
      refs: [
        'Ko CW, et al. AGA Clinical Practice Guidelines on the Gastrointestinal Evaluation of Iron Deficiency Anemia. Gastroenterology 2020.',
        'Stabler SP. Vitamin B12 Deficiency. N Engl J Med 2013.',
        'Camaschella C. Iron-Deficiency Anemia. N Engl J Med 2015.'
      ]
    }
  },

  compares: {
    'ferro-inflam': {
      topic: 'anemias', a: 'Ferropénica', b: 'Inflamación',
      rows: [
        ['Mecanismo', 'Falta hierro', 'Hay hierro, pero la hepcidina lo atrapa'],
        ['VCM', 'Bajo', 'Normal o levemente bajo'],
        ['Ferritina', 'Baja (<30)', 'Normal o alta'],
        ['TIBC / transferrina', 'Alta', 'Baja'],
        ['Saturación', 'Baja', 'Baja'],
        ['ADE', 'Alta', 'Normal'],
        ['Receptor soluble de transferrina', 'Alto', 'Normal'],
        ['Tratamiento', 'Hierro y buscar la causa', 'Tratar la enfermedad de base']
      ]
    },
    'b12-folato': {
      topic: 'anemias', a: 'Déficit de B12', b: 'Déficit de folato',
      rows: [
        ['Neuropatía', 'Sí (cordones posteriores y laterales)', 'No'],
        ['Ácido metilmalónico', 'Alto', 'Normal'],
        ['Homocisteína', 'Alta', 'Alta'],
        ['Tiempo para agotar reservas', 'Años', 'Semanas a meses'],
        ['Causas típicas', 'Anemia perniciosa, cirugía gástrica o ileal, metformina, veganos', 'Dieta, alcohol, embarazo, metotrexato, fenitoína, trimetoprim'],
        ['Tratamiento', 'B12 IM u oral a dosis altas', 'Ácido fólico oral (después de descartar déficit de B12)']
      ]
    }
  },

  anims: {
    anemias: {
      title: 'Hierro, B12 y la médula',
      steps: [
        { cap: '<b>El ciclo del hierro.</b> Se absorbe en el duodeno, sale del enterocito por la ferroportina y viaja unido a la transferrina hasta la médula. El sobrante se guarda como ferritina y los macrófagos reciclan el hierro de los eritrocitos viejos.',
          labels: [[29, 28, 'Enterocito'], [128, 8, 'Ferritina (hígado)'], [80, 60, 'Transferrina'], [30, 113, 'Macrófago'], [132, 113, 'Médula']] },
        { cap: '<b>Inflamación: la hepcidina cierra la puerta.</b> La IL-6 hace que el hígado produzca hepcidina, que bloquea la ferroportina. El hierro queda atrapado en enterocitos y macrófagos: ferritina alta, transferrina vacía y médula sin hierro.',
          labels: [[29, 28, 'Hierro atrapado'], [128, 8, 'Hepcidina ↑'], [80, 60, 'Transferrina vacía'], [30, 113, 'Macrófago lleno'], [132, 113, 'Médula sin hierro']] },
        { cap: '<b>Ferropenia.</b> Sin hierro, la médula fabrica eritrocitos pequeños y pálidos (microcíticos e hipocrómicos) de tamaños distintos (ADE alta). Los depósitos se vacían primero: la ferritina baja antes que la Hb.',
          labels: [[40, 8, 'Normal'], [120, 8, 'Ferropenia'], [40, 113, 'Ferritina normal'], [120, 113, 'Ferritina <30']] },
        { cap: '<b>Déficit de B12 o folato.</b> Sin ellos no se sintetiza ADN: el núcleo se queda inmaduro mientras el citoplasma crece. Resultado: megaloblastos, macroovalocitos (VCM >100) y neutrófilos hipersegmentados.',
          labels: [[32, 28, 'Megaloblasto'], [80, 80, 'ADN sin B12/folato'], [130, 26, 'Neutrófilo ≥6 lóbulos'], [80, 113, 'Macroovalocitos']] },
        { cap: '<b>Respuesta reticulocitaria.</b> Al reponer lo que falta, la médula libera una ola de reticulocitos con pico a los 7–10 días; después sube la Hb. Si no hay respuesta, revisa apego, absorción o pérdidas.',
          labels: [[30, 8, 'Hierro o B12'], [30, 108, 'Médula'], [91, 42, 'Reticulocitos'], [136, 102, 'Ret'], [152, 102, 'Hb']] }
      ]
    }
  },

  cards: [
    ['Anemia según la OMS', 'Hb <13 hombres · <12 mujeres · <11 embarazo'],
    ['Índice reticulocitario <2', 'Hipoproliferativa: la médula no produce'],
    ['Ferritina que confirma ferropenia', '<30 ng/mL (<100 si hay inflamación)'],
    ['Índice de Mentzer', 'VCM ÷ eritrocitos (millones): <13 talasemia, >13 ferropenia'],
    ['β-talasemia menor en la electroforesis', 'HbA2 >3.5%'],
    ['Anemia de inflamación', 'Ferritina normal/alta, TIBC baja; mediada por hepcidina'],
    ['Hierro oral: cómo darlo', 'Una vez al día o días alternos, lejos de calcio, té e IBP'],
    ['Respuesta esperada al hierro oral', 'Reticulocitos en 7–10 días; Hb +1–2 g/dL en 3–4 semanas'],
    ['Neuropatía + macrocitosis', 'Déficit de B12 (degeneración combinada subaguda)'],
    ['Ácido metilmalónico alto', 'Déficit de B12 (normal en folato)'],
    ['Error a evitar en la anemia megaloblástica', 'Dar solo folato si hay déficit de B12'],
    ['Punteado basófilo + dolor abdominal + muñeca caída', 'Intoxicación por plomo'],
    ['Isoniazida y anemia', 'Sideroblástica por déficit de B6 → piridoxina'],
    ['Umbral de transfusión', 'Hb <7 g/dL (≈8 con enfermedad cardiovascular)'],
    ['Hepcidina: qué hace', 'La produce el hígado (sube con IL-6); bloquea la ferroportina y atrapa el hierro en enterocitos y macrófagos'],
    ['Factor de maduración del índice reticulocitario', 'Hto 45% → 1 · 35% → 1.5 · 25% → 2 · 15% → 2.5'],
    ['Metformina por años + macrocitosis o neuropatía', 'Mide B12: la metformina reduce su absorción (ADA)'],
    ['Riesgo al iniciar B12 en anemia megaloblástica grave', 'Hipokalemia en 48–72 h (las células nuevas captan potasio)'],
    ['Hb normal en un sangrado agudo con choque', 'Aún no hay hemodilución (tarda 24–72 h): guíate por la hemodinámica']
  ],

  questions: [
    q({ id: 'ane-01', dif: 1,
      stem: 'Mujer de 28 años con menstruaciones abundantes. Hb 9.4 g/dL, VCM 71, ferritina 6 ng/mL. ¿Tratamiento y respuesta esperada?',
      opts: ['Transfusión de 2 unidades', 'Hierro oral en dosis diaria o en días alternos; reticulocitos ↑ en 7–10 días y Hb ↑ 1–2 g/dL en 3–4 semanas', 'Hierro IV de entrada en todos los casos', 'Ácido fólico', 'Eritropoyetina'],
      ans: 1,
      exp: 'Ferropenia por pérdidas menstruales en una paciente estable: hierro oral. Se continúa ~3 meses después de normalizar la Hb para llenar los depósitos, y se trata la causa ginecológica.',
      why: ['No hay inestabilidad ni Hb <7.', '', 'Se reserva para intolerancia, malabsorción o pérdidas continuas.', 'No hay déficit de folato.', 'No está indicada.'],
      ref: 'Camaschella C, NEJM 2015' }),

    q({ id: 'ane-02', dif: 2,
      stem: 'Hombre de 30 años asintomático. Hb 11.8 g/dL, VCM 64 fL, eritrocitos 5.9 millones/µL, ferritina 90 ng/mL. ¿Siguiente paso?',
      opts: ['Hierro oral por 3 meses', 'Electroforesis de hemoglobina', 'Colonoscopia', 'Aspirado de médula ósea', 'Vitamina B12'],
      ans: 1,
      exp: 'Microcitosis marcada con eritrocitos altos, Hb casi normal y ferritina normal; Mentzer = 64 ÷ 5.9 ≈ 10.8 (<13) = rasgo talasémico. La electroforesis muestra HbA2 >3.5% en la β-talasemia menor. No necesita hierro.',
      why: ['Su ferritina es normal: el hierro puede causar sobrecarga.', '', 'No hay datos de sangrado ni ferropenia.', 'Innecesario.', 'Es macrocitosis lo que sugiere déficit de B12.'],
      ref: 'Taher AT, et al. Lancet 2018' }),

    q({ id: 'ane-03', dif: 2,
      stem: 'Mujer de 52 años con artritis reumatoide activa. Hb 10.4 g/dL, VCM 84, ferritina 320 ng/mL, TIBC baja, saturación 14%. ¿Diagnóstico y conducta?',
      opts: ['Ferropenia; hierro oral', 'Anemia de inflamación; controlar la AR', 'Talasemia; electroforesis', 'Déficit de B12; B12 IM', 'Sideroblástica; piridoxina'],
      ans: 1,
      exp: 'Ferritina alta con TIBC baja en una enfermedad inflamatoria = anemia de inflamación (hepcidina alta). Mejora al controlar la enfermedad de base.',
      why: ['Con ferritina de 320 y TIBC baja no es ferropenia pura.', '', 'Es normocítica y la ferritina no lo sugiere.', 'El VCM es normal y no hay neuropatía.', 'No hay datos que la sugieran.'],
      ref: 'Weiss G, et al. NEJM 2005' }),

    q({ id: 'ane-04', dif: 2,
      stem: 'Mujer de 64 años con vitíligo e hipotiroidismo. Tiene parestesias en pies, inestabilidad al caminar y Romberg positivo. Hb 9.1, VCM 116, neutrófilos hipersegmentados. ¿Diagnóstico y tratamiento?',
      opts: ['Déficit de folato; ácido fólico', 'Anemia perniciosa (déficit de B12 autoinmune); B12 IM', 'Hipotiroidismo; subir la levotiroxina', 'Alcohol; suspenderlo', 'SMD; azacitidina'],
      ans: 1,
      exp: 'Autoinmunidad (vitíligo, tiroiditis) + anemia megaloblástica + afección de cordones posteriores = anemia perniciosa. Confirma con B12 baja (± ácido metilmalónico) y anticuerpos anti-factor intrínseco. Tratamiento con B12 IM; vigilar cáncer gástrico.',
      why: ['El folato no da neuropatía.', '', 'El hipotiroidismo no explica neutrófilos hipersegmentados ni la neuropatía.', 'No hay antecedente ni encaja la hipersegmentación.', 'Primero se descarta lo carencial.'],
      ref: 'Stabler SP, NEJM 2013' }),

    q({ id: 'ane-05', dif: 1,
      stem: 'Un paciente con anemia macrocítica y parestesias recibe solo ácido fólico. Su Hb mejora, pero la ataxia empeora. ¿Qué pasó?',
      opts: ['Efecto adverso del folato', 'Tenía déficit de B12: el folato corrigió la anemia pero no la neuropatía', 'Es una coincidencia', 'Desarrolló SMD', 'Le faltaba hierro'],
      ans: 1,
      exp: 'El folato puede corregir la parte hematológica de un déficit de B12, pero no la neurológica, que avanza. Por eso se mide B12 antes de dar folato, o se dan ambos.',
      why: ['El folato no es neurotóxico.', '', 'Es un error clásico prevenible.', 'No hay datos que lo sugieran.', 'No explica la ataxia.'],
      ref: 'Stabler SP, NEJM 2013' }),

    q({ id: 'ane-06', dif: 2,
      stem: 'Hombre de 45 años con AR tratada con metotrexato sin ácido fólico. Hb 9.8, VCM 112, neutrófilos hipersegmentados. Ácido metilmalónico normal, homocisteína alta. ¿Qué déficit tiene?',
      opts: ['B12', 'Folato', 'Hierro', 'Cobre', 'Piridoxina'],
      ans: 1,
      exp: 'El metotrexato inhibe la dihidrofolato reductasa. La homocisteína alta con ácido metilmalónico normal señala déficit de folato; en el de B12 ambos están altos. Por eso se da ácido fólico con el metotrexato.',
      why: ['En el déficit de B12 el ácido metilmalónico estaría alto.', '', 'Daría microcitosis.', 'Da anemia con neutropenia y mielopatía; no es el contexto.', 'Da anemia sideroblástica.'],
      ref: 'Stabler SP, NEJM 2013' }),

    q({ id: 'ane-07', dif: 1,
      stem: 'Hombre de 70 años con Hb 8.0 g/dL e índice reticulocitario de 0.6. ¿Cómo interpretas el índice?',
      opts: ['Hemólisis', 'Sangrado agudo compensado', 'Anemia hipoproliferativa: la médula no está respondiendo', 'Respuesta adecuada', 'Es un valor normal'],
      ans: 2,
      exp: 'Un índice reticulocitario <2 con anemia indica producción insuficiente (ferropenia, inflamación, ERC, déficits, falla medular). >2–3 sugiere hemólisis o sangrado con médula que responde.',
      why: ['La hemólisis da índice alto.', 'La médula respondería con índice alto.', '', 'Con Hb de 8, un índice de 0.6 es inadecuado.', 'Con anemia, es bajo.'],
      ref: 'Abordaje de la anemia' }),

    q({ id: 'ane-08', dif: 2,
      stem: 'Hombre de 35 años con TB en tratamiento con isoniazida desde hace 3 meses. Anemia microcítica. El aspirado muestra sideroblastos en anillo. ¿Tratamiento?',
      opts: ['Hierro IV', 'Piridoxina (vitamina B6)', 'Ácido fólico', 'Suspender todo el tratamiento antituberculoso', 'Transfusión'],
      ans: 1,
      exp: 'La isoniazida interfiere con la vitamina B6, cofactor de la ALA sintasa (síntesis del grupo hem): anemia sideroblástica. Se da piridoxina (y se usa como profilaxis con isoniazida).',
      why: ['El hierro está acumulado en las mitocondrias, no falta.', '', 'No es el mecanismo.', 'No es necesario: basta agregar B6.', 'No hay indicación.'],
      ref: 'Bottomley SS, Hematol Oncol Clin 2014' }),

    q({ id: 'ane-09', dif: 2,
      stem: 'Mujer de 50 años que fabrica y usa ollas de barro vidriado. Dolor abdominal cólico, estreñimiento, debilidad para extender la muñeca y anemia microcítica con punteado basófilo. ¿Diagnóstico?',
      opts: ['Ferropenia', 'Intoxicación por plomo', 'Porfiria aguda intermitente', 'Talasemia', 'Hipotiroidismo'],
      ans: 1,
      exp: 'El plomo inhibe enzimas de la síntesis del hem (ALA deshidratasa, ferroquelatasa): anemia microcítica con punteado basófilo, dolor abdominal (cólico saturnino), neuropatía motora (muñeca caída) y línea de Burton. Se mide plomo en sangre; quelación si es alto.',
      why: ['No explica el punteado basófilo ni la neuropatía.', '', 'Da dolor abdominal y neuropatía, pero sin anemia microcítica con punteado.', 'No da cólico ni neuropatía.', 'No encaja.'],
      ref: 'CDC/ATSDR plomo · contexto mexicano de barro vidriado' }),

    q({ id: 'ane-10', dif: 2,
      stem: 'Mujer de 34 años con ferropenia que toma hierro oral desde hace 6 semanas con buen apego. La Hb no subió. Toma omeprazol y no tiene sangrado visible. ¿Qué buscas?',
      opts: ['Nada: subir la dosis a 3 tomas al día', 'Malabsorción: enfermedad celiaca, H. pylori y gastritis atrófica, además de pérdidas ocultas', 'Talasemia mayor', 'Leucemia', 'Déficit de B12'],
      ans: 1,
      exp: 'Falta de respuesta al hierro oral con buen apego: piensa en malabsorción (celiaca, H. pylori, gastritis atrófica, IBP, bypass) o pérdida continua. Pide anti-tTG IgA con IgA total y estudia H. pylori; considera hierro IV.',
      why: ['Repartir en varias tomas no mejora la absorción por la hepcidina.', '', 'Se diagnostica en la infancia.', 'Sin datos que lo sugieran.', 'Daría macrocitosis.'],
      ref: 'AGA 2020 anemia ferropénica' }),

    q({ id: 'ane-11', dif: 2,
      stem: 'Mujer de 45 años con bypass gástrico en Y de Roux hace 6 años. Ferritina 4 ng/mL, sin respuesta a hierro oral. ¿Qué indicas?',
      opts: ['Más hierro oral', 'Hierro IV', 'Transfusión mensual', 'Eritropoyetina', 'Revertir el bypass'],
      ans: 1,
      exp: 'El hierro se absorbe en el duodeno y yeyuno proximal, que el bypass excluye. Con malabsorción o falta de respuesta, el hierro IV es de elección.',
      why: ['No se absorbe por la cirugía.', '', 'No está indicada de forma rutinaria.', 'No corrige la ferropenia.', 'Desproporcionado.'],
      ref: 'AGA 2020' }),

    q({ id: 'ane-12', dif: 1,
      stem: 'Hombre de 66 años estable, sin cardiopatía, con Hb 7.6 g/dL por anemia ferropénica crónica. ¿Debe transfundirse?',
      opts: ['Sí, a todo paciente con Hb <10', 'No: está por arriba del umbral restrictivo (<7); repón hierro y busca la causa', 'Sí, para llegar a 12', 'Solo si la Hb es <5', 'Sí, si tiene más de 65 años'],
      ans: 1,
      exp: 'Estrategia restrictiva: transfundir con Hb <7 g/dL en pacientes estables (≈8 con enfermedad cardiovascular). Es igual de segura y evita complicaciones de transfundir de más.',
      why: ['Es un umbral liberal sin beneficio.', '', 'Excesivo y riesgoso.', 'Demasiado bajo; con <7 sí se transfunde.', 'La edad sola no cambia el umbral.'],
      ref: 'AABB 2023 transfusión' }),

    q({ id: 'ane-13', dif: 2,
      stem: 'Mujer de 55 años con disfagia a sólidos, glositis y anemia ferropénica. El esofagograma muestra una membrana en el esófago cervical. ¿Qué síndrome es y qué riesgo implica?',
      opts: ['Acalasia; cáncer de estómago', 'Plummer-Vinson; carcinoma escamoso de esófago', 'Zenker; perforación', 'Barrett; adenocarcinoma', 'Esofagitis eosinofílica; impactación'],
      ans: 1,
      exp: 'Ferropenia + membranas esofágicas cervicales + disfagia = síndrome de Plummer-Vinson. Mejora con hierro y dilatación, y aumenta el riesgo de carcinoma escamoso de esófago e hipofaringe.',
      why: ['La acalasia da disfagia a sólidos y líquidos sin membranas.', '', 'Zenker es un divertículo con regurgitación y halitosis.', 'Barrett es metaplasia distal por reflujo.', 'Da anillos y no se asocia a ferropenia.'],
      ref: 'Plummer-Vinson syndrome, Orphanet' }),

    q({ id: 'ane-14', dif: 1,
      stem: 'Hombre de 50 años que bebe 8 cervezas diarias. Hb 12.2, VCM 106, sin neutrófilos hipersegmentados; B12 y folato normales, GGT alta. ¿Causa más probable de la macrocitosis?',
      opts: ['Déficit de B12', 'Alcohol', 'SMD', 'Talasemia', 'Ferropenia'],
      ans: 1,
      exp: 'El alcohol produce macrocitosis no megaloblástica (efecto directo sobre la membrana y la médula), a menudo con GGT alta. Mejora en meses con abstinencia.',
      why: ['B12 normal y sin hipersegmentación.', '', 'Posible, pero menos probable con este contexto.', 'Da microcitosis.', 'Da microcitosis.'],
      ref: 'Kaferle J, et al. Am Fam Physician 2009' }),

    q({ id: 'ane-15', dif: 2,
      stem: 'Mujer de 60 años con anemia ferropénica (ferritina 12) y PCR elevada por infección reciente. Otra paciente con artritis activa tiene ferritina de 70 ng/mL y saturación de 12%. ¿Qué es cierto sobre la ferritina?',
      opts: ['Siempre refleja exactamente los depósitos', 'Es reactante de fase aguda: con inflamación, valores hasta ~100 ng/mL pueden coexistir con ferropenia', 'Un valor >30 descarta siempre ferropenia', 'Se eleva en la ferropenia', 'No sirve para estudiar anemia'],
      ans: 1,
      exp: 'La ferritina sube con la inflamación. Con inflamación, una ferritina de 30–100 ng/mL con saturación <20% sugiere ferropenia coexistente. El receptor soluble de transferrina ayuda a distinguir.',
      why: ['La inflamación la eleva.', '', 'No con inflamación.', 'Baja en la ferropenia.', 'Es el mejor estudio aislado para ferropenia.'],
      ref: 'AGA 2020 · Camaschella C, NEJM 2015' }),

    q({ id: 'ane-16', dif: 3,
      stem: 'Mujer de 40 años con anemia. Hto 25% y reticulocitos 4%. Para un Hto de 25% el factor de maduración es 2. ¿Cómo interpretas la respuesta de la médula?',
      opts: ['Adecuada: reticulocitos >2% indican hemólisis', 'Índice reticulocitario ≈1.1: respuesta insuficiente (hipoproliferativa)', 'Índice reticulocitario ≈4: hemólisis', 'Índice reticulocitario ≈2.2: sangrado agudo compensado', 'No se puede interpretar sin biopsia de médula'],
      ans: 1,
      exp: 'Reticulocitos corregidos = 4 × (25 ÷ 45) ≈ 2.2%. Índice reticulocitario = 2.2 ÷ 2 ≈ 1.1. Menor de 2 = la médula no responde lo suficiente para el grado de anemia: busca ferropenia, inflamación, ERC, déficit de B12 o folato, o falla medular.',
      why: ['El porcentaje crudo sobrestima la producción cuando el Hto está bajo; hay que corregirlo.', '', 'Es el porcentaje sin corregir; no refleja la producción real.', 'Falta dividir entre el factor de maduración: los reticulocitos “de estrés” circulan más días.', 'El índice se calcula con la BH; no requiere biopsia.'],
      ref: 'Harrison 21e · abordaje de la anemia' }),

    q({ id: 'ane-17', dif: 2,
      stem: 'Hombre de 72 años con anemia perniciosa grave (Hb 5.6 g/dL, VCM 121). Inicia B12 IM diaria. A las 48 h refiere debilidad y en el monitor aparecen extrasístoles. ¿Qué alteración buscas primero?',
      opts: ['Hipercalcemia', 'Hipokalemia', 'Hiponatremia', 'Hiperkalemia por lisis celular', 'Hipermagnesemia'],
      ans: 1,
      exp: 'Al reponer B12 en una anemia megaloblástica grave, la eritropoyesis se reactiva de golpe y las células nuevas captan potasio del plasma: puede aparecer hipokalemia en las primeras 48–72 h. Mide el potasio y repónlo si baja.',
      why: ['No se asocia al inicio de la B12.', '', 'La B12 no altera el sodio.', 'Es al revés: las células nuevas captan potasio y la hemólisis intramedular disminuye.', 'No tiene relación con el tratamiento.'],
      ref: 'Stabler SP, NEJM 2013' }),

    q({ id: 'ane-18', dif: 2,
      stem: 'Hombre de 66 años con DM2 en metformina desde hace 12 años. Tiene parestesias en pies que se atribuyeron a neuropatía diabética. Hb 11.9 g/dL, VCM 104. ¿Qué estudio pides?',
      opts: ['Ninguno: es neuropatía diabética', 'Vitamina B12 sérica (± ácido metilmalónico)', 'Ferritina', 'Electroforesis de hemoglobina', 'Aspirado de médula ósea'],
      ans: 1,
      exp: 'La metformina por años reduce la absorción de B12 en el íleon. La ADA sugiere medir B12 de forma periódica en quienes la toman, sobre todo si hay anemia o neuropatía. Si la B12 sale limítrofe, el ácido metilmalónico alto confirma el déficit.',
      why: ['La macrocitosis no se explica por la diabetes; pasarías por alto una causa tratable de neuropatía.', '', 'Con VCM alto, la ferropenia no es lo primero.', 'Es para microcitosis con sospecha de talasemia.', 'Prematuro: primero se descarta lo carencial.'],
      ref: 'ADA Standards of Care 2026' }),

    q({ id: 'ane-19', dif: 3,
      stem: 'Mujer de 26 años de origen filipino, asintomática. Hb 11.6 g/dL, VCM 68 fL, eritrocitos 5.6 millones/µL, ferritina 85 ng/mL. Electroforesis: HbA2 2.4% y HbF normal. ¿Diagnóstico más probable?',
      opts: ['β-talasemia menor', 'Rasgo de α-talasemia', 'Ferropenia latente', 'Anemia sideroblástica', 'Anemia de inflamación'],
      ans: 1,
      exp: 'Microcitosis marcada con eritrocitos altos (Mentzer ≈12), ferritina normal y electroforesis normal en un adulto: rasgo de α-talasemia (deleción de 1–2 genes α). Se confirma con estudio genético; no requiere hierro ni tratamiento, pero importa para el consejo genético.',
      why: ['En la β-talasemia menor la HbA2 está >3.5%.', '', 'La ferritina es normal.', 'Tiene ADE alta y sideroblastos en anillo; no da eritrocitos altos.', 'No hay enfermedad inflamatoria y el VCM es demasiado bajo para ese diagnóstico.'],
      ref: 'Taher AT, et al. Lancet 2018' }),

    q({ id: 'ane-20', dif: 2,
      stem: 'Hombre de 58 años con hematemesis abundante desde hace 1 h. FC 124 lpm, PA 86/54 mmHg, piel fría y pálida. Hb 13.4 g/dL. ¿Cómo interpretas la Hb?',
      opts: ['Descarta una pérdida importante: no necesita transfusión', 'Todavía no refleja la pérdida: la hemodilución tarda horas; guíate por la hemodinámica', 'Indica hemoconcentración por deshidratación', 'Sugiere que el sangrado es de tubo digestivo bajo', 'Es un error del laboratorio'],
      ans: 1,
      exp: 'En el sangrado agudo se pierde sangre completa: la Hb baja hasta que el líquido intersticial y los cristaloides diluyen la sangre (24–72 h). Taquicardia con hipotensión indican una pérdida grande. Reanima y transfunde según la hemodinámica, no según la Hb inicial.',
      why: ['La Hb inicial subestima la pérdida aguda; el estado de choque es lo que manda.', '', 'El problema es la hemorragia, no la deshidratación.', 'La hematemesis indica origen alto.', 'Es un hallazgo esperado, no un error.'],
      ref: 'ACG 2021 hemorragia digestiva alta · ATLS 10e' })
  ],

  cases: [
    { id: 'g-anemias', topic: 'anemias', subj: 'hemato',
      title: 'El cansancio de doña Lupita', place: 'Consulta de Medicina Interna',
      patient: { name: 'Guadalupe', age: 61, sex: 'M', skin: '#D9A07A', hair: '#C8C8D2', gown: '#E79AB3' },
      intro: 'Maestra jubilada, 10 años de menopausia. Lleva meses cansada y se agita al subir escaleras. Toma omeprazol diario “para la gastritis” y calcio.',
      extra: { label: 'Hb', unit: 'g/dL' },
      start: { FC: 96, PAS: 118, PAD: 72, SpO2: 98, FR: 18, X: 8.9 },
      nodes: [
        { tag: 'Consulta 1', ecg: 'normal',
          text: 'Hb 8.9 g/dL, VCM 72, ADE alta, ferritina 5 ng/mL. Sin sangrado visible.',
          q: '¿Qué haces además de reponer hierro?',
          A: { t: 'Endoscopia alta y colonoscopia', ok: true, res: 'Colonoscopia normal. En la endoscopia: gastritis atrófica del cuerpo; se toman biopsias.' },
          B: { t: 'Solo hierro oral y control en 6 meses', ok: false, res: 'Te quedaste sin saber la causa: en una mujer posmenopáusica podía ser un cáncer de colon.' },
          why: 'Ferropenia en hombres o mujeres posmenopáusicas = estudio endoscópico alto y bajo para descartar pérdida digestiva y cáncer.' },
        { tag: '6 semanas después', ecg: 'normal', vit: { X: 9.0 },
          text: 'Toma sulfato ferroso 3 veces al día junto con el calcio y el omeprazol. La Hb casi no subió. Biopsias: gastritis atrófica autoinmune.',
          q: '¿Qué ajustas?',
          A: { t: 'Hierro IV (o una toma en días alternos, lejos del calcio, revisando si necesita el IBP)', ok: true, res: 'Con hierro IV sube a 11.8 g/dL en 4 semanas.', vit: { FC: 80, X: 11.8 } },
          B: { t: 'Subir el hierro oral a 4 tomas al día', ok: false, res: 'Más náusea y estreñimiento; la absorción no mejora.' },
          why: 'La gastritis atrófica (sin ácido) y el IBP reducen la absorción de hierro; el calcio también. Repartir más dosis no ayuda por la hepcidina: considera hierro IV.' },
        { tag: '1 año después', ecg: 'normal', vit: { FC: 84, X: 10.6 },
          text: 'Ahora tiene hormigueo en ambos pies e inestabilidad en la oscuridad. Hb 10.6, VCM 98 con neutrófilos hipersegmentados. Ferritina normal. B12 muy baja, anti-factor intrínseco positivo.',
          q: '¿Qué indicas?',
          A: { t: 'Vitamina B12 IM', ok: true, res: 'La marcha mejora en semanas. Programas vigilancia endoscópica por su gastritis atrófica.', vit: { X: 12.4 } },
          B: { t: 'Ácido fólico oral', ok: false, res: 'La Hb sube un poco, pero la ataxia empeora.' },
          why: 'La gastritis atrófica autoinmune da primero ferropenia (sin ácido) y después déficit de B12 (sin factor intrínseco). El VCM “normal” puede ser una mezcla de ambas. Nunca solo folato.' }
      ] }
  ]
};
