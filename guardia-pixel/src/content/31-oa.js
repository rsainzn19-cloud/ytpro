// Tema 22 · Osteoartritis (Reumatología, semana 4)
const T = { topic: 'oa', subj: 'reuma' };
const q = (o) => ({ ...T, ...o });

export default {
  lessons: {
    oa: {
      hook: 'Dolor articular mecánico en mayores de 45 años, rigidez breve y laboratorio normal: osteoartritis. El tratamiento empieza con ejercicio y bajar de peso, no con pastillas.',
      compare: ['ar-oa'],
      anim: 'oa',
      video: [
        { ch: 'Qué es la osteoartritis', sc: [
          { v: { k: 'title', t: 'Osteoartritis', s: 'Tema 22 · Reumatología' },
            say: 'Bienvenido a la guardia. La osteoartritis es la enfermedad articular más frecuente. En este video vas a aprender a reconocerla por la clínica, a leer su radiografía y a tratarla en el orden correcto: primero ejercicio y bajar de peso, no pastillas.' },
          { v: { k: 'case', t: 'Consulta de medicina familiar', p: { name: 'Rosa', age: 64, sex: 'M', skin: '#D9A07A', hair: '#8C8C96', gown: '#E79AB3' }, text: 'Dolor en ambas rodillas al caminar y subir escaleras; mejora al sentarse. Rigidez matutina de 10 min. IMC 33. VSG normal.', vit: { FC: '78', PA: '132/80', IMC: '33' } },
            say: 'Conoce a doña Rosa, de sesenta y cuatro años. Le duelen las rodillas al caminar y al subir escaleras, y mejora cuando se sienta. En la mañana tarda diez minutos en soltarse. Tiene obesidad y su velocidad de sedimentación es normal. Veamos qué pasa en su rodilla.' },
          { v: { k: 'anim', id: 'oa', step: 0 },
            say: 'Así es una rodilla sana. El cartílago es grueso y liso, y reparte la carga por igual entre el lado medial y el lateral. El espacio articular es simétrico.' },
          { v: { k: 'anim', id: 'oa', step: 1 },
            say: 'En la osteoartritis no hay un ataque inmune: es una falla de toda la articulación ante la carga. El cartílago se adelgaza y se fisura, sobre todo en el compartimento medial de la rodilla. El espacio se estrecha de un solo lado. Y el dolor sube con el uso y baja con el reposo: es mecánico.' },
          { v: { k: 'list', t: 'Factores de riesgo', items: ['Edad', 'Obesidad', 'Sexo femenino', 'Lesión previa (menisco, ligamento)', 'Mala alineación y trabajo con carga'] },
            say: 'Los factores de riesgo son la edad, la obesidad, el sexo femenino, las lesiones previas, como una ruptura de menisco o de ligamento, la mala alineación y los trabajos con carga repetida. La obesidad es el que más puedes cambiar.' }
        ] },
        { ch: 'Clínica', sc: [
          { v: { k: 'list', t: 'Dolor mecánico', items: ['Empeora con el uso, mejora con reposo', 'Rigidez matutina <30 min', 'Rigidez breve tras inactividad', 'Crepitación y menor movilidad', 'Derrame frío ocasional'] },
            say: 'El dolor es mecánico: empeora con el uso y mejora con el reposo. La rigidez de la mañana dura menos de treinta minutos, y reaparece breve después de estar sentado, lo que se llama gelificación. A la exploración hay crepitación, menor movilidad y, a veces, un derrame frío, sin signos de inflamación.' },
          { v: { k: 'vs', cmp: 'ar-oa', rows: [0, 1, 2, 5] },
            say: 'Compárala con la artritis reumatoide. La reumatoide es inflamatoria, con rigidez de más de una hora que mejora al moverse y laboratorio inflamatorio. La osteoartritis es mecánica, con rigidez breve, dolor que empeora con el uso y laboratorio normal.' },
          { v: { k: 'anim', id: 'oa', step: 3 },
            say: 'En las manos, los osteofitos forman nódulos duros. En las interfalángicas distales se llaman nódulos de Heberden, y en las proximales, nódulos de Bouchard. También duele la base del pulgar, la primera carpometacarpiana. Las metacarpofalángicas y la muñeca se respetan.' },
          { v: { k: 'tip', kind: 'trap', t: 'Artropatía degenerativa en 2ª y 3ª MCF, muñeca u hombro: no es OA primaria. Busca hemocromatosis (ferritina, saturación de transferrina) o CPPD.' },
            say: 'Ojo con esta trampa. Si ves cambios degenerativos en la segunda y tercera metacarpofalángicas, en la muñeca o en el hombro, no es una osteoartritis primaria. Busca hemocromatosis, con ferritina y saturación de transferrina, o depósito de pirofosfato de calcio.' }
        ] },
        { ch: 'Diagnóstico', sc: [
          { v: { k: 'big', h: 'Diagnóstico clínico (NICE)', t: '≥45', u: 'años', s: '+ dolor con la actividad + rigidez matutina ausente o ≤30 min. No necesita imagen.' },
            say: 'El diagnóstico es clínico. Según la guía británica NICE, si tiene cuarenta y cinco años o más, dolor articular relacionado con la actividad y rigidez matutina ausente o de treinta minutos o menos, es osteoartritis. No necesitas radiografía para diagnosticarla.' },
          { v: { k: 'anim', id: 'oa', step: 2 },
            say: 'Si pides radiografía, busca cuatro cosas. Disminución asimétrica del espacio articular. Osteofitos en los bordes. Esclerosis subcondral, que es hueso más blanco bajo el cartílago perdido. Y quistes subcondrales. Ojo: la radiografía no siempre se correlaciona con el dolor.' },
          { v: { k: 'list', t: 'Laboratorio', items: ['VSG y PCR normales', 'FR y anti-CCP negativos', 'Líquido: <2 000 leucocitos/µL', 'Sin cristales'] },
            say: 'El laboratorio es normal: velocidad de sedimentación, proteína C reactiva, factor reumatoide y anti-CCP. Si puncionas, el líquido es no inflamatorio, con menos de dos mil leucocitos por microlitro y sin cristales. Un laboratorio inflamatorio te obliga a buscar otra cosa.' },
          { v: { k: 'quiz', q: 'Rodilla con OA y derrame. Líquido: 1 200 leucocitos/µL, sin cristales. ¿Cómo lo interpretas?', opts: ['Inflamatorio: artritis séptica', 'No inflamatorio: compatible con OA'], a: 1 },
            say: 'Pausa. Rodilla con osteoartritis y derrame. El líquido tiene mil doscientos leucocitos por microlitro y no tiene cristales. ¿Cómo lo interpretas?',
            exp: 'Es un líquido no inflamatorio, con menos de dos mil leucocitos: compatible con osteoartritis. Uno séptico suele tener más de cincuenta mil.' }
        ] },
        { ch: 'Tratamiento escalonado', sc: [
          { v: { k: 'anim', id: 'oa', step: 4 },
            say: 'El tratamiento empieza por quitar carga. Bajar de peso y fortalecer el cuádriceps reducen la fuerza sobre el cartílago. Cada kilo que pierde le quita unos cuatro kilos de carga a la rodilla en cada paso.' },
          { v: { k: 'flow', t: 'Escalera (ACR 2019)', steps: ['Ejercicio + bajar ≥5% de peso', 'AINE tópico (rodilla, mano)', 'AINE oral: dosis baja, poco tiempo', 'Esteroide intraarticular', 'Falla → artroplastia'] },
            say: 'La escalera es así. Para todos: educación, ejercicio y bajar al menos cinco por ciento del peso. Luego, antiinflamatorio tópico en rodilla o mano, que casi no se absorbe. Después, antiinflamatorio oral a la dosis más baja y por poco tiempo. En un brote, esteroide intraarticular. Y si el dolor y la limitación son graves pese a todo, prótesis.' },
          { v: { k: 'list', t: 'Medidas físicas', items: ['Fortalecimiento, aeróbico, tai chi', 'Bastón en la mano contraria', 'Órtesis en la base del pulgar', 'Rodillera en OA de rodilla'] },
            say: 'Las medidas físicas también cuentan. Ejercicio de fortalecimiento, aeróbico o tai chi. El bastón se usa en la mano contraria a la rodilla o cadera enferma. En la base del pulgar, una órtesis, y en la rodilla, una rodillera.' },
          { v: { k: 'list', t: 'Si no puede tomar AINE oral', items: ['ERC, úlcera o riesgo CV', 'Rodilla o mano: AINE tópico', 'Duloxetina (condicional)', 'Tramadol (condicional)', 'Esteroide intraarticular'] },
            say: 'Si tiene enfermedad renal, una úlcera o riesgo cardiovascular, evita el antiinflamatorio oral. En rodilla y mano usa el tópico. Otras opciones con recomendación condicional son la duloxetina y el tramadol. Y la infiltración de esteroide da alivio de semanas.' },
          { v: { k: 'list', t: 'Lo que no sirve', items: ['Glucosamina y condroitina', 'Ácido hialurónico en rodilla (ACR)', 'Opioides fuertes crónicos', 'Artroscopia con lavado'] },
            say: 'Y lo que no sirve. La glucosamina y la condroitina no tienen beneficio consistente. La guía americana recomienda en contra del ácido hialurónico en la rodilla, aunque algunas guías europeas lo aceptan. Tampoco opioides fuertes de forma crónica, ni la artroscopia con lavado. El paracetamol ayuda muy poco.' },
          { v: { k: 'quiz', q: 'Doña Rosa tiene OA de cadera derecha. ¿En qué mano usa el bastón?', opts: ['Derecha', 'Izquierda'], a: 1 },
            say: 'Pausa. Doña Rosa tiene osteoartritis de la cadera derecha. ¿En qué mano debe usar el bastón?',
            exp: 'En la izquierda, la contraria. Así el bastón comparte la carga con la pierna enferma al apoyarla y reduce la fuerza sobre esa cadera.' }
        ] },
        { ch: 'Trampas de examen', sc: [
          { v: { k: 'mnemo', t: 'Heberden arriba, Bouchard en medio', d: 'H de Heberden = la más hacia la punta (IFD). B de Bouchard = la del medio (IFP).' },
            say: 'Para no confundir los nódulos: Heberden, arriba, hacia la punta, en las interfalángicas distales. Bouchard, en medio, en las interfalángicas proximales.' },
          { v: { k: 'tip', kind: 'pearl', t: 'OA: diagnóstico clínico, laboratorio normal. Primero ejercicio y bajar de peso; luego AINE tópico. Prótesis si todo falla.' },
            say: 'La perla para el examen: la osteoartritis se diagnostica por clínica, el laboratorio es normal y el tratamiento empieza con ejercicio y bajar de peso, luego antiinflamatorio tópico, y prótesis si todo falla. Ahora ve a las preguntas del tema para fijar lo que viste.' }
        ] }
      ],
      nn: [],
      yt: 'osteoarthritis',
      sections: [
        { h: 'Clínica', html: `
<ul>
<li>Dolor <b>mecánico</b>: empeora con el uso, mejora con el reposo; rigidez matutina <b>&lt;30 min</b> y tras inactividad (“gelificación”).</li>
<li>Crepitación, deformidad ósea, limitación del arco de movimiento, derrame frío ocasional.</li>
<li>Articulaciones: rodillas, caderas, columna, <b>IFD</b> (nódulos de <b>Heberden</b>), <b>IFP</b> (nódulos de <b>Bouchard</b>), base del pulgar (1ª carpometacarpiana, rizartrosis), 1ª MTF.</li>
<li><b>Respeta MCF, muñeca, codo y hombro</b>. Si están afectadas, piensa en otra cosa: depósito de pirofosfato, hemocromatosis (2ª y 3ª MCF), AR.</li>
<li>Factores: edad, obesidad, sexo femenino, lesiones previas, alineación, ocupación.</li>
</ul>` },
        { h: 'Diagnóstico', html: `
<ul>
<li><b>Clínico</b> (NICE): ≥45 años, dolor articular relacionado con la actividad y rigidez matutina ausente o &lt;30 min. No necesita imagen para diagnosticar.</li>
<li><b>Rx</b>: disminución <b>asimétrica</b> del espacio articular, <b>osteofitos</b>, esclerosis subcondral, quistes subcondrales (Kellgren-Lawrence 0–4). La imagen no siempre se correlaciona con el dolor.</li>
<li>Laboratorio <b>normal</b> (VSG, PCR). Líquido sinovial no inflamatorio (&lt;2,000 leucocitos/µL).</li>
<li>OA erosiva de manos: IFP e IFD inflamadas, Rx en “alas de gaviota”.</li>
</ul>` },
        { h: 'Tratamiento (ACR 2019)', html: `
<ul>
<li><b>Base para todos</b>: educación, <b>ejercicio</b> (fortalecimiento, aeróbico, tai chi), <b>bajar de peso</b> (≥5% en OA de rodilla o cadera), bastón en la mano <b>contraria</b> a la rodilla o cadera afectada, órtesis en la base del pulgar.</li>
<li><b>AINE tópicos</b> en rodilla (y mano): primera opción farmacológica, con menos efectos adversos.</li>
<li><b>AINE orales</b> a la dosis más baja y por el menor tiempo: los más eficaces; cuidado con riñón, estómago y corazón.</li>
<li>Esteroide intraarticular en rodilla o cadera: alivio de semanas.</li>
<li>Paracetamol: efecto mínimo; duloxetina y tramadol: recomendación condicional.</li>
<li><b>No recomendados</b> (ACR 2019): glucosamina y condroitina, ácido hialurónico en rodilla, opioides fuertes de forma crónica, bisfosfonatos, hidroxicloroquina.</li>
<li>Falla del tratamiento con dolor y limitación importantes: <b>artroplastia</b>.</li>
</ul>` },
        { h: 'Fisiopatología en 1 minuto', html: `
<ul>
<li>No es solo “desgaste”: es una falla de <b>toda la articulación</b> (cartílago, hueso subcondral, sinovio, menisco, ligamentos y músculo) ante una carga que supera su capacidad de reparación.</li>
<li>Los condrocitos liberan metaloproteinasas y agrecanasas que degradan el colágeno tipo II y los proteoglicanos: el cartílago se fibrila, se fisura y se adelgaza, sobre todo en las zonas de carga.</li>
<li>El hueso responde con <b>esclerosis subcondral</b>, <b>quistes</b> y <b>osteofitos</b>; puede haber sinovitis leve secundaria.</li>
<li>El cartílago no tiene nervios: el dolor viene del hueso subcondral, el sinovio y la cápsula. Por eso la Rx no siempre se correlaciona con el dolor.</li>
<li><b>Secundaria</b>: trauma, displasia, artropatía por cristales, hemocromatosis, acromegalia, artropatía neuropática (Charcot).</li>
</ul>` },
        { h: 'Diagnóstico diferencial', html: `
<div class="tablewrap"><table class="mini">
<tr><th>Cuadro</th><th>Pista que lo distingue</th></tr>
<tr><td><b>Artritis reumatoide</b></td><td>Rigidez &gt;1 h, MCF y muñecas simétricas, PCR y anti-CCP altos, erosiones marginales</td></tr>
<tr><td><b>CPPD</b></td><td>Ataques agudos en rodilla o muñeca, condrocalcinosis, OA en sitios atípicos</td></tr>
<tr><td><b>Hemocromatosis</b></td><td>2ª–3ª MCF con osteofitos en gancho, DM, piel bronceada, saturación de transferrina &gt;45%</td></tr>
<tr><td><b>Artritis psoriásica</b></td><td>IFD con uñas picadas, dactilitis, psoriasis, “lápiz en copa”</td></tr>
<tr><td><b>Gota</b></td><td>Ataques agudos, tofos, cristales en aguja</td></tr>
<tr><td><b>Bursitis anserina o trocantérica</b></td><td>Dolor focal a la palpación (cara medial de la tibia o lateral de la cadera), no articular</td></tr>
<tr><td><b>OA de cadera</b> con dolor en rodilla</td><td>Dolor inguinal y rotación interna limitada y dolorosa; la rodilla se explora normal</td></tr>
</table></div>` },
        { h: 'Cómo lo preguntan en el examen', html: `
<ul>
<li>&gt;45 años, dolor que empeora con la actividad, rigidez &lt;30 min, crepitación y VSG normal → <b>OA</b>; no necesitas imagen para diagnosticarla.</li>
<li>¿Primer tratamiento? → <b>ejercicio + bajar de peso</b>. ¿Primer fármaco en rodilla? → <b>AINE tópico</b>, sobre todo con ERC, úlcera o riesgo CV.</li>
<li>Glucosamina, condroitina, ácido hialurónico en rodilla u opioides fuertes → suelen ser la <b>respuesta incorrecta</b> (ACR 2019).</li>
<li>¿En qué mano el bastón? → <b>la contraria</b> a la articulación afectada.</li>
<li>OA en 2ª–3ª MCF + DM + piel bronceada → <b>hemocromatosis</b>. IFP e IFD inflamadas con erosiones centrales en “alas de gaviota” → <b>OA erosiva</b>.</li>
<li>Dolor y limitación graves pese a tratamiento completo → <b>artroplastia</b>.</li>
</ul>` }
      ],
      mnemo: { t: 'Heberden arriba, Bouchard en medio', d: 'H de Heberden = la articulación más Hacia la punta (IFD). B de Bouchard = la del medio (IFP).' },
      pearl: 'Hay que bajar de peso: cada kilo menos quita unos 4 kg de carga a la rodilla en cada paso.',
      trap: 'OA en MCF, muñeca u hombro: busca pirofosfato de calcio (condrocalcinosis) o hemocromatosis (ferritina y saturación de transferrina).',
      guide: [
        'Ácido hialurónico intraarticular: la ACR 2019 recomienda en contra en rodilla; ESCEO y otras guías europeas lo aceptan en casos seleccionados. Para el examen, sigue la ACR/OARSI que pida tu curso.',
        'Glucosamina y condroitina: ACR 2019 recomienda fuertemente en contra; ESCEO acepta formulaciones de sulfato de glucosamina cristalino de prescripción.',
        '⚠️ Depende de la guía · Paracetamol: ACR 2019 lo recomienda de forma condicional (efecto pequeño); NICE 2022 aconseja no ofrecerlo de rutina. En ambas es secundario al ejercicio y al AINE tópico.'
      ],
      refs: [
        'Kolasinski SL, et al. 2019 ACR/Arthritis Foundation Guideline for the Management of Osteoarthritis of the Hand, Hip, and Knee. Arthritis Rheumatol 2020.',
        'Bannuru RR, et al. OARSI guidelines for the non-surgical management of knee, hip, and polyarticular OA. Osteoarthritis Cartilage 2019.',
        'NICE NG226: Osteoarthritis in over 16s, 2022.'
      ]
    }
  },

  anims: {
    oa: {
      title: 'Del cartílago sano a la descarga',
      steps: [
        { cap: '<b>Rodilla sana.</b> El cartílago es grueso y liso y reparte la carga por igual entre el compartimento medial y el lateral. El espacio articular es simétrico.',
          labels: [[80, 14, 'Fémur'], [26, 72, 'Cartílago'], [80, 104, 'Tibia']] },
        { cap: '<b>Desgaste del cartílago.</b> Con la carga repetida el cartílago medial se adelgaza y se fisura: el espacio se estrecha de un solo lado. El dolor sube con el uso y baja con el reposo (dolor mecánico).',
          labels: [[24, 62, 'Cartílago fisurado'], [118, 78, 'Lado sano'], [146, 104, 'Dolor']] },
        { cap: '<b>Rx de la OA.</b> El hueso responde: osteofitos en los bordes, esclerosis subcondral (hueso más blanco) y quistes subcondrales, con estrechamiento asimétrico del espacio articular.',
          labels: [[18, 86, 'Osteofito'], [58, 48, 'Esclerosis'], [46, 94, 'Quiste'], [122, 86, 'Espacio conservado']] },
        { cap: '<b>Manos.</b> Los osteofitos forman nódulos duros: Heberden en las IFD y Bouchard en las IFP. También duele la base del pulgar (1ª carpometacarpiana). La MCF se respeta.',
          labels: [[112, 26, 'Heberden (IFD)'], [74, 76, 'Bouchard (IFP)'], [26, 30, 'MCF respetada'], [30, 112, 'Base del pulgar']] },
        { cap: '<b>Quitar carga.</b> Bajar de peso y fortalecer el cuádriceps reducen la fuerza sobre el cartílago: cada kilo menos quita unos 4 kg de carga a la rodilla en cada paso, y el dolor baja.',
          labels: [[80, 38, 'Carga'], [44, 14, 'Cuádriceps'], [16, 104, 'Peso'], [148, 104, 'Dolor']] }
      ]
    }
  },

  cards: [
    ['Dolor de OA', 'Mecánico: empeora con el uso y mejora con reposo'],
    ['Rigidez matutina en OA', '<30 minutos'],
    ['Nódulos de Heberden', 'IFD (osteofitos)'],
    ['Nódulos de Bouchard', 'IFP (osteofitos)'],
    ['Articulaciones que respeta la OA primaria', 'MCF, muñeca, codo, hombro'],
    ['OA en 2ª y 3ª MCF', 'Piensa en hemocromatosis o pirofosfato'],
    ['Rx de OA', 'Espacio articular asimétrico ↓, osteofitos, esclerosis y quistes subcondrales'],
    ['Diagnóstico de OA según NICE', 'Clínico: ≥45 años, dolor con actividad, rigidez <30 min'],
    ['Primera línea en OA de rodilla', 'Ejercicio + bajar de peso + AINE tópico'],
    ['Bastón en OA de rodilla derecha', 'En la mano izquierda'],
    ['No recomendados por ACR 2019', 'Glucosamina, condroitina, ácido hialurónico (rodilla)'],
    ['OA con falla al tratamiento', 'Artroplastia'],
    ['Dolor inguinal + rotación interna de cadera limitada', 'OA de cadera (puede doler en la rodilla)'],
    ['OA erosiva de manos: Rx', 'Erosiones centrales en “alas de gaviota” en IFP e IFD'],
    ['Líquido sinovial en OA', 'No inflamatorio: <2,000 leucocitos/µL, sin cristales'],
    ['OA y no puede tomar AINE oral (ERC, úlcera)', 'AINE tópico (rodilla/mano); duloxetina o esteroide intraarticular'],
    ['Origen del dolor en OA', 'Hueso subcondral, sinovio y cápsula (el cartílago no tiene nervios)']
  ],

  questions: [
    q({ id: 'oa-01', dif: 1,
      stem: 'Mujer de 64 años con dolor en ambas rodillas al caminar y subir escaleras, que mejora con reposo. Rigidez matutina de 10 min. Crepitación a la exploración. VSG normal. ¿Diagnóstico?',
      opts: ['Artritis reumatoide', 'Osteoartritis', 'Gota', 'Polimialgia reumática', 'Artritis séptica'],
      ans: 1,
      exp: 'Dolor mecánico, rigidez breve, crepitación y laboratorio normal en mayor de 45 años: osteoartritis. El diagnóstico es clínico.',
      why: ['Daría rigidez >1 h y sinovitis de manos.', '', 'Sería aguda e inflamatoria.', 'Afecta cinturas y eleva la VSG.', 'Sería aguda, monoarticular y febril.'],
      ref: 'NICE 2022 · ACR 2019' }),

    q({ id: 'oa-02', dif: 1,
      stem: 'Mujer de 58 años con OA de rodilla, IMC 33. ¿Cuál medida tiene mayor beneficio y debe recomendarse a todos?',
      opts: ['Glucosamina', 'Ejercicio y bajar de peso', 'Ácido hialurónico intraarticular', 'Opioides', 'Artroscopia con lavado'],
      ans: 1,
      exp: 'Ejercicio y pérdida de peso (≥5%) son recomendaciones fuertes de la ACR 2019 para todos los pacientes con OA de rodilla.',
      why: ['No recomendada.', '', 'Recomendación en contra en rodilla (ACR 2019).', 'No como tratamiento crónico.', 'No tiene beneficio en OA.'],
      ref: 'ACR 2019' }),

    q({ id: 'oa-03', dif: 2,
      stem: 'Hombre de 72 años con OA de rodilla, ERC G3b y antecedente de úlcera péptica. ¿Primera opción farmacológica?',
      opts: ['Naproxeno oral', 'AINE tópico (diclofenaco gel)', 'Prednisona oral', 'Morfina', 'Colchicina'],
      ans: 1,
      exp: 'El AINE tópico tiene eficacia similar en rodilla con mínima absorción sistémica: ideal con ERC, riesgo gastrointestinal o cardiovascular.',
      why: ['Riesgo renal y gastrointestinal alto.', '', 'No se usan esteroides orales en OA.', 'No como primera línea.', 'No tiene papel en OA.'],
      ref: 'ACR 2019' }),

    q({ id: 'oa-04', dif: 2,
      stem: '¿Cuál hallazgo radiográfico es característico de la osteoartritis?',
      opts: ['Erosiones marginales con osteopenia periarticular', 'Disminución asimétrica del espacio articular con osteofitos', 'Erosiones en sacabocado con borde colgante', 'Condrocalcinosis aislada', 'Lápiz en copa'],
      ans: 1,
      exp: 'La OA pierde cartílago en las zonas de carga (asimétrica) y forma osteofitos, esclerosis y quistes subcondrales.',
      why: ['Típico de AR.', '', 'Típico de gota.', 'Típico de pirofosfato.', 'Típico de artritis psoriásica.'],
      ref: 'Harrison 21e' }),

    q({ id: 'oa-05', dif: 2,
      stem: 'Hombre de 52 años con artropatía de 2ª y 3ª MCF, osteofitos en gancho, DM de reciente diagnóstico y piel bronceada. ¿Qué estudio pides?',
      opts: ['Factor reumatoide', 'Ferritina y saturación de transferrina', 'Ácido úrico', 'HLA-B27', 'ANA'],
      ans: 1,
      exp: 'OA de MCF (sitio atípico) + diabetes + hiperpigmentación: hemocromatosis hereditaria. Saturación de transferrina >45% y ferritina alta; luego HFE.',
      why: ['No explica el cuadro.', '', 'No explica DM ni piel.', 'No es espondiloartritis.', 'No orienta.'],
      ref: 'Harrison 21e' }),

    q({ id: 'oa-06', dif: 1,
      stem: 'Paciente con OA de cadera derecha te pregunta en qué mano debe usar el bastón. ¿Respuesta?',
      opts: ['Derecha', 'Izquierda', 'Da igual', 'En ambas manos', 'No debe usar bastón'],
      ans: 1,
      exp: 'El bastón en la mano contralateral reduce la carga sobre la articulación afectada al desplazar el centro de gravedad durante la marcha.',
      why: ['Es menos eficaz.', '', 'No da igual.', 'No es necesario.', 'Sí ayuda.'],
      ref: 'ACR 2019' }),

    q({ id: 'oa-07', dif: 2,
      stem: 'Mujer con OA de rodilla que pregunta por glucosamina con condroitina. Según la ACR 2019, ¿qué le dices?',
      opts: ['Son la primera línea', 'No se recomiendan: no hay beneficio consistente', 'Solo con AINE', 'Solo si hay derrame', 'Regeneran el cartílago'],
      ans: 1,
      exp: 'Los estudios de calidad no muestran beneficio clínico consistente; la ACR 2019 recomienda fuertemente en contra.',
      why: ['No lo son.', '', 'No cambia la recomendación.', 'No cambia la recomendación.', 'No hay evidencia.'],
      ref: 'ACR 2019' }),

    q({ id: 'oa-08', dif: 2,
      stem: 'Paciente con OA de rodilla que tiene un brote de dolor con derrame y no responde a AINE tópico. ¿Qué opción da alivio de semanas?',
      opts: ['Esteroide intraarticular', 'Antibiótico intraarticular', 'Colchicina', 'Metotrexato', 'Hidroxicloroquina'],
      ans: 0,
      exp: 'La infiltración de esteroide en rodilla o cadera da alivio a corto plazo (semanas). No se repite con mucha frecuencia por posible daño al cartílago.',
      why: ['', 'No hay infección.', 'No tiene papel en OA.', 'No funciona en OA.', 'No funciona en OA.'],
      ref: 'ACR 2019' }),

    q({ id: 'oa-09', dif: 1,
      stem: '¿Qué característica distingue el dolor de la OA del de la AR?',
      opts: ['La OA mejora con la actividad', 'La OA tiene rigidez matutina corta (<30 min) y empeora con el uso', 'La OA eleva la PCR', 'La OA afecta las MCF', 'La OA es simétrica con sinovitis'],
      ans: 1,
      exp: 'OA: dolor mecánico y rigidez breve. AR: dolor inflamatorio con rigidez prolongada (>1 h) que mejora con la actividad, sinovitis de MCF e IFP y reactantes elevados.',
      why: ['Eso es inflamatorio.', '', 'La PCR es normal.', 'Las respeta.', 'Eso es AR.'],
      ref: 'Harrison 21e' }),

    q({ id: 'oa-10', dif: 2,
      stem: 'Hombre de 70 años con OA de cadera grado 4 de Kellgren-Lawrence, dolor nocturno y que ya no camina una cuadra pese a ejercicio, AINE y esteroide intraarticular. ¿Siguiente paso?',
      opts: ['Opioides fuertes crónicos', 'Artroplastia total de cadera', 'Ácido hialurónico', 'Glucosamina', 'Reposo absoluto'],
      ans: 1,
      exp: 'Dolor y limitación funcional graves a pesar del tratamiento conservador: artroplastia, con excelentes resultados en dolor y función.',
      why: ['Riesgos sin beneficio sostenido.', '', 'No recomendado.', 'No recomendado.', 'Empeora la función.'],
      ref: 'ACR 2019' }),

    q({ id: 'oa-11', dif: 3,
      stem: 'Mujer de 62 años con dolor e inflamación de inicio subagudo en IFP e IFD de ambas manos. Rx: erosiones centrales con aspecto en “alas de gaviota” y osteofitos. Sin psoriasis ni cambios ungueales; FR y anti-CCP negativos; PCR levemente elevada. ¿Diagnóstico?',
      opts: ['Artritis reumatoide', 'Artritis psoriásica', 'Osteoartritis erosiva de manos', 'Gota tofácea', 'Enfermedad por pirofosfato'],
      ans: 2,
      exp: 'La OA erosiva afecta IFP e IFD con brotes inflamatorios y erosiones centrales (“alas de gaviota”), a diferencia de las erosiones marginales de la AR y del “lápiz en copa” de la artritis psoriásica. Se trata como OA de manos (AINE tópico u oral, órtesis); los FAME no han mostrado beneficio.',
      why: ['Respeta las IFD y da erosiones marginales; FR/anti-CCP suelen ser positivos.', 'Da “lápiz en copa” y erosiones marginales con hueso nuevo, con psoriasis o uñas afectadas.', '', 'No hay tofos ni ataques agudos.', 'Afecta sobre todo rodilla y muñeca, con condrocalcinosis.'],
      ref: 'ACR 2019 · EULAR OA de manos 2018' }),

    q({ id: 'oa-12', dif: 2,
      stem: 'Mujer de 60 años con OA de rodilla y obesidad. Refiere dolor en la cara medial de la pierna, unos 5 cm por debajo de la interlínea articular, que empeora al subir escaleras. Hay dolor intenso a la palpación en ese punto, sin derrame. ¿Diagnóstico más probable?',
      opts: ['Progresión de la OA medial', 'Bursitis anserina', 'Quiste de Baker roto', 'Trombosis venosa profunda', 'Desgarro de menisco lateral'],
      ans: 1,
      exp: 'La bursitis anserina (debajo de la inserción de sartorio, grácil y semitendinoso) es frecuente en mujeres con obesidad y OA de rodilla: dolor focal a la palpación en la cara medial de la tibia, por debajo de la interlínea. Responde a ejercicio, bajar de peso, AINE y, si es necesario, infiltración local.',
      why: ['El dolor de la OA está en la interlínea, no 5 cm por debajo con dolor puntual.', '', 'Daría masa poplítea o edema de pantorrilla.', 'Daría edema de la pierna, no dolor puntual medial.', 'Sería lateral y en la interlínea, con bloqueos.'],
      ref: 'Reumatología clínica' }),

    q({ id: 'oa-13', dif: 2,
      stem: 'Mujer de 68 años con OA de cadera y rodilla, ERC G3b y úlcera péptica previa. Ya hace ejercicio, bajó 6% de peso y usa diclofenaco tópico en la rodilla, pero el dolor de cadera persiste. ¿Opción farmacológica más adecuada?',
      opts: ['Naproxeno oral a dosis plenas', 'Duloxetina', 'Glucosamina', 'Oxicodona de liberación prolongada', 'Hidroxicloroquina'],
      ans: 1,
      exp: 'Con ERC y úlcera se evitan los AINE orales, y el AINE tópico no llega a una articulación profunda como la cadera. La duloxetina tiene recomendación condicional (ACR 2019); otra opción es la infiltración de esteroide guiada por imagen. Con TFG <30 la duloxetina se evita.',
      why: ['Riesgo renal y gastrointestinal alto.', '', 'No recomendada.', 'ACR 2019 recomienda en contra de los opioides distintos al tramadol.', 'Recomendación fuerte en contra en OA.'],
      ref: 'ACR 2019' }),

    q({ id: 'oa-14', dif: 2,
      stem: 'Hombre de 58 años con dolor mecánico de rodilla de 1 año, rigidez matutina de 10 min y crepitación, sin trauma, derrame caliente, bloqueo ni pérdida de peso. Pide una RM “para estar seguro”. ¿Qué le dices?',
      opts: ['RM de rodilla para confirmar el diagnóstico', 'No se necesita imagen: el diagnóstico es clínico', 'Gammagrama óseo', 'Artroscopia diagnóstica', 'Rx de ambas manos para buscar erosiones'],
      ans: 1,
      exp: 'Con ≥45 años, dolor relacionado con la actividad y rigidez ≤30 min, el diagnóstico de OA es clínico (NICE). La imagen se reserva para datos atípicos o de alarma (trauma, dolor nocturno intenso, pérdida de peso, articulación caliente) o para planear cirugía.',
      why: ['Agrega costo y hallazgos incidentales sin cambiar el manejo.', '', 'No tiene papel aquí.', 'Es invasiva y no está indicada.', 'No hay datos de artritis inflamatoria.'],
      ref: 'NICE NG226 2022' }),

    q({ id: 'oa-15', dif: 2,
      stem: 'Hombre de 66 años con dolor “de rodilla” derecha y en la ingle al caminar. La exploración de la rodilla es normal. La rotación interna de la cadera derecha está limitada y reproduce el dolor. ¿Diagnóstico más probable?',
      opts: ['OA de rodilla', 'OA de cadera', 'Bursitis trocantérica', 'Radiculopatía L5', 'Meralgia parestésica'],
      ans: 1,
      exp: 'La OA de cadera da dolor inguinal y puede referirse a la cara anterior del muslo y la rodilla. El signo más útil es la rotación interna limitada y dolorosa. Explora siempre la cadera en un paciente con dolor de rodilla y rodilla normal.',
      why: ['La rodilla se explora normal.', '', 'Da dolor lateral a la palpación del trocánter, con rotación conservada.', 'Daría dolor radicular y déficit neurológico.', 'Da ardor y parestesias en la cara lateral del muslo.'],
      ref: 'Harrison 21e · ACR 2019' })
  ]
};
