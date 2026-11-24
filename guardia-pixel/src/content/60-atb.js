// Tema 46 · Antibióticos (Infectología, semanas 1 y 2)
const T = { topic: 'atb', subj: 'infecto' };
const q = (o) => ({ ...T, ...o });
const SRC = { short: 'De tu Guía Infecto', vs: 'tu guía', name: 'Guía Infecto · Ximena Cors Cepeda (EMIS 5)', url: 'https://docs.google.com/document/d/1z8GAmFxqoyJtS21XWHwMlvykDNaoEMW07PgJh45aMwY/edit' };

export default {
  lessons: {
    atb: {
      hook: 'Para cada antibiótico sabe tres cosas: dónde actúa (pared, ribosoma 30S/50S, ADN, folato), qué cubre (y qué no) y su efecto adverso clásico. Con eso respondes casi cualquier pregunta.',
      nn: [], yt: 'antibiotics mechanism of action spectrum adverse effects',
      video: [
        { ch: 'Cómo pensar un antibiótico', sc: [
          { v: { k: 'title', t: 'Antibióticos', s: 'Semanas 1 y 2 · Infectología' },
            say: 'Semanas uno y dos de Infectología: los antibióticos. No se trata de memorizar una lista, sino de saber tres cosas de cada grupo: dónde actúa en la bacteria, qué cubre y qué efecto adverso preguntan. Al final vas a poder elegir el antibiótico de un paciente real.' },
          { v: { k: 'case', t: 'Fiebre en piso', p: { name: 'Don Ramón', age: 67, sex: 'H', skin: '#C98B62', hair: '#B0B0B0', gown: '#5EEAD4' }, text: 'Diabético, día 6 de hospitalización por pie diabético. Fiebre nueva. Hemocultivos: cocos grampositivos en racimos. Alergia a penicilina: urticaria.', vit: { T: '38.9', FC: '108', Cr: '1.4' } },
            say: 'Conoce a don Ramón, de sesenta y siete años y diabético. Lleva seis días hospitalizado por un pie diabético y hoy tiene fiebre nueva. Los hemocultivos muestran cocos grampositivos en racimos. Es alérgico a la penicilina: le dio urticaria. ¿Qué antibiótico eliges? Para responder, recorramos la bacteria.' },
          { v: { k: 'list', t: 'Dónde atacan', items: ['Pared: betalactámicos, vancomicina', 'Ribosoma 30S: aminoglucósidos, tetraciclinas', 'Ribosoma 50S: macrólidos, clindamicina, linezolid', 'ADN: quinolonas, metronidazol', 'Folato: TMP-SMX'] },
            say: 'Los antibióticos atacan cinco blancos. La pared celular, con betalactámicos y vancomicina. La subunidad treinta del ribosoma, con aminoglucósidos y tetraciclinas. La subunidad cincuenta, con macrólidos, clindamicina, linezolid y cloranfenicol. El ADN, con quinolonas y metronidazol. Y la síntesis de folato, con trimetoprim sulfametoxazol.' },
          { v: { k: 'list', t: 'Principios de uso', items: ['Cultivos antes de la primera dosis', 'Empírico según sitio y epidemiología', 'Desescalar con el antibiograma', 'Duración corta cuando sea posible'] },
            say: 'Cuatro principios valen para todos: toma cultivos antes de la primera dosis, elige el empírico según el sitio de infección y la epidemiología, desescala en cuanto tengas el antibiograma y usa la duración más corta que funcione.' }
        ] },
        { ch: 'La pared: betalactámicos y vancomicina', sc: [
          { v: { k: 'list', t: 'Betalactámicos', items: ['Se unen a PBP: bactericidas', 'Penicilina G: estreptococo, sífilis', 'Dicloxacilina: estafilococo sensible', 'Amoxicilina: + enterococo y Listeria', 'Pip-tazo: Pseudomonas + anaerobios'] },
            say: 'Los betalactámicos se unen a las proteínas fijadoras de penicilina e impiden armar el peptidoglucano: son bactericidas. La penicilina G cubre estreptococos y sífilis. La dicloxacilina, el estafilococo sensible. La amoxicilina agrega enterococo, Listeria y algunos gramnegativos. Y la piperacilina con tazobactam cubre pseudomonas y anaerobios.' },
          { v: { k: 'vs', a: 'Cefalosporina', b: 'Uso clave', rows: [['1a: cefazolina', 'Piel, profilaxis quirúrgica', '—'], ['3a: ceftriaxona', 'Meningitis, NAC, gonorrea', 'Pielonefritis'], ['3a: ceftazidima', 'Pseudomonas', '—'], ['4a: cefepime', 'Pseudomonas, neutropenia febril', '—'], ['5a: ceftarolina', 'MRSA', 'La única que lo cubre']] },
            say: 'Las cefalosporinas por generación: la primera, cefazolina, para piel y profilaxis quirúrgica. La tercera, ceftriaxona, para meningitis, neumonía, gonorrea y pielonefritis; y ceftazidima para pseudomonas. La cuarta, cefepime, pseudomonas y neutropenia febril. La quinta, ceftarolina, es la única que cubre estafilococo resistente. Y ninguna cubre enterococo ni Listeria.' },
          { v: { k: 'list', t: 'Carbapenémicos y aztreonam', items: ['Meropenem: el espectro más amplio', 'De elección en BLEE', 'Ertapenem: sin Pseudomonas', 'Imipenem: convulsiones', 'Aztreonam: solo gramnegativos, seguro en alergia'] },
            say: 'Los carbapenémicos, como meropenem, tienen el espectro más amplio y son de elección contra enterobacterias productoras de betalactamasas de espectro extendido. El ertapenem no cubre pseudomonas, y el imipenem puede dar convulsiones. El aztreonam solo cubre gramnegativos, incluida pseudomonas, y es seguro en alergia a penicilina.' },
          { v: { k: 'list', t: 'Vancomicina', items: ['Solo grampositivos: MRSA, enterococo', 'Oral: C. difficile', 'Hombre rojo: infundir más lento', 'Nefro y ototoxicidad: medir niveles'] },
            say: 'La vancomicina se une al extremo D alanina D alanina de la pared y solo cubre grampositivos: estafilococo resistente y enterococo. Por vía oral trata Clostridioides difficile. Si se infunde rápido libera histamina y da el síndrome del hombre rojo, que se evita infundiendo más lento. Es nefrotóxica y ototóxica: se miden niveles.' },
          { v: { k: 'quiz', q: 'Don Ramón: cocos grampositivos en racimos, sepsis, alergia a penicilina. ¿Empírico?', opts: ['Dicloxacilina', 'Vancomicina', 'Ceftriaxona'], a: 1 },
            say: 'Pausa. Cocos grampositivos en racimos en un paciente hospitalizado y con sepsis, alérgico a la penicilina. ¿Qué das mientras llega el antibiograma?',
            exp: 'Vancomicina. Racimos son estafilococo, y en un paciente hospitalizado hay que cubrir el resistente a meticilina hasta tener el antibiograma. Si resulta sensible, se cambia a un betalactámico antiestafilocócico, que es superior; con urticaria, cefazolina suele tolerarse.' }
        ] },
        { ch: 'El ribosoma', sc: [
          { v: { k: 'big', h: 'Mnemotecnia de ribosoma', t: 'AT 30 · CCEL 50', s: '30S: Aminoglucósidos, Tetraciclinas. 50S: Cloranfenicol, Clindamicina, Eritromicina (macrólidos), Linezolid.' },
            say: 'Para el ribosoma, una mnemotecnia: compra A T a treinta y C C E L a cincuenta. En la subunidad treinta, aminoglucósidos y tetraciclinas. En la cincuenta, cloranfenicol, clindamicina, eritromicina con los demás macrólidos, y linezolid.' },
          { v: { k: 'vs', a: 'Grupo', b: 'Efecto adverso estrella', rows: [['Aminoglucósidos', 'Nefro y ototoxicidad', 'No cubren anaerobios'], ['Tetraciclinas', 'Dientes y fotosensibilidad', 'No en niños ni embarazo'], ['Macrólidos', 'QT largo', 'Claritromicina inhibe CYP3A4'], ['Clindamicina', 'Colitis por C. difficile', 'Anaerobios arriba del diafragma'], ['Linezolid', 'Trombocitopenia', 'Serotoninérgico con ISRS']] },
            say: 'Los efectos adversos que preguntan: aminoglucósidos, riñón y oído, y no cubren anaerobios porque necesitan oxígeno para entrar. Tetraciclinas, manchan dientes y dan fotosensibilidad; no en niños ni embarazo. Macrólidos, alargan el QT, y la claritromicina inhibe el citocromo tres A cuatro. Clindamicina, colitis por difficile. Linezolid, trombocitopenia y síndrome serotoninérgico si se combina con inhibidores de recaptura de serotonina.' },
          { v: { k: 'quiz', q: 'Paciente con sertralina inicia linezolid. Hipertermia, clonus y agitación. ¿Qué es?', opts: ['Síndrome neuroléptico maligno', 'Síndrome serotoninérgico', 'Hombre rojo'], a: 1 },
            say: 'Pausa. Un paciente que toma sertralina inicia linezolid y a los dos días tiene fiebre, clonus y agitación. ¿Qué es?',
            exp: 'Síndrome serotoninérgico. El linezolid es un inhibidor débil de la monoamino oxidasa y, junto con un inhibidor de recaptura de serotonina, la acumula. El clonus lo distingue del neuroléptico maligno, que da rigidez en tubo de plomo.' }
        ] },
        { ch: 'ADN, folato y cobertura rápida', sc: [
          { v: { k: 'list', t: 'Quinolonas', items: ['Inhiben ADN girasa', 'Cipro: gramnegativos, Pseudomonas, orina', 'Levo y moxi: respiratorias', 'Tendinitis y rotura de Aquiles', 'QT largo, disglucemia, aneurisma'] },
            say: 'Las quinolonas inhiben la ADN girasa. Ciprofloxacino cubre gramnegativos y pseudomonas, ideal en vía urinaria. Levofloxacino y moxifloxacino son respiratorias, porque cubren neumococo y atípicos. Su efecto adverso clásico es la tendinitis con rotura del tendón de Aquiles, sobre todo en ancianos con esteroides. También alargan el QT, alteran la glucosa y se asocian a aneurisma aórtico.' },
          { v: { k: 'vs', a: 'Metronidazol', b: 'TMP-SMX', rows: [['Cubre', 'Anaerobios abajo del diafragma', 'IVU, MRSA de piel, Pneumocystis'], ['Parásitos', 'Giardia, amiba, Trichomonas', 'Toxoplasma, Nocardia'], ['Efecto clásico', 'Antabús con alcohol', 'Hiperkalemia'], ['Otro', 'Sabor metálico, neuropatía', 'Stevens-Johnson, sube el INR']] },
            say: 'El metronidazol cubre anaerobios abajo del diafragma, giardia, amiba y tricomonas, y con alcohol da efecto antabús. El trimetoprim sulfametoxazol bloquea dos pasos del folato: infecciones urinarias, estafilococo resistente de piel, Pneumocystis, toxoplasma y Nocardia. Su efecto que preguntan es la hiperkalemia, porque el trimetoprim bloquea el canal de sodio como la amilorida. También da Stevens Johnson y sube el INR con warfarina.' },
          { v: { k: 'list', t: 'Cobertura rápida', items: ['MRSA: vancomicina, linezolid', 'Pseudomonas: pip-tazo, cefepime, meropenem', 'Anaerobios: metronidazol', 'Atípicos: macrólido, doxiciclina', 'BLEE: carbapenémico'] },
            say: 'Para cubrir rápido: estafilococo resistente, vancomicina o linezolid. Pseudomonas, piperacilina con tazobactam, cefepime o meropenem. Anaerobios, metronidazol. Atípicos, macrólido o doxiciclina. Y enterobacterias productoras de betalactamasas de espectro extendido, un carbapenémico.' }
        ] },
        { ch: 'Cierre del caso', sc: [
          { v: { k: 'list', t: 'Don Ramón: final del caso', items: ['Vancomicina empírica con niveles', 'Antibiograma: S. aureus sensible a oxacilina', 'Desescala a cefazolina', 'Ecocardiograma: sin endocarditis', '14 días desde el primer hemocultivo negativo'] },
            say: 'Don Ramón recibe vancomicina con niveles. El antibiograma muestra estafilococo dorado sensible a meticilina, así que se desescala a cefazolina, que tolera a pesar de su alergia leve. El ecocardiograma descarta endocarditis y completa catorce días desde el primer hemocultivo negativo.' },
          { v: { k: 'tip', kind: 'trap', t: 'Ninguna cefalosporina cubre enterococo ni Listeria. Meningitis en mayor de 50 o inmunosuprimido: agrega ampicilina.' },
            say: 'Trampa: ninguna cefalosporina cubre enterococo ni Listeria. Por eso en la meningitis de un mayor de cincuenta años o de un inmunosuprimido se agrega ampicilina a la ceftriaxona.' },
          { v: { k: 'tip', kind: 'pearl', t: 'S. aureus sensible: un betalactámico antiestafilocócico es mejor que la vancomicina. Desescala siempre.' },
            say: 'Perla: si el estafilococo es sensible, un betalactámico antiestafilocócico es mejor que la vancomicina. Desescalar no es solo ahorro: cura más.' },
          { v: { k: 'mnemo', t: 'AT 30 · CCEL 50', d: 'Quinolona: Aquiles. Linezolid: plaquetas. Vancomicina: hombre rojo. Clindamicina: difficile. TMP-SMX: potasio.' },
            say: 'Llévate el ribosoma, A T a treinta y C C E L a cincuenta, y un efecto por fármaco: quinolona, Aquiles; linezolid, plaquetas; vancomicina, hombre rojo; clindamicina, difficile; trimetoprim, potasio. Ahora ve al taller y elige antibióticos en el algoritmo.' }
        ] }
      ],
      sections: [
        { h: 'Betalactámicos y glucopéptidos (pared)', html: `
<ul>
<li>Mecanismo: unión a <b>PBP</b> → inhiben la transpeptidación del peptidoglucano; <b>bactericidas</b>, tiempo-dependientes. Resistencia: betalactamasas (inhibidas por clavulanato, sulbactam, tazobactam, avibactam), PBP alterada (<b>MRSA</b>: PBP2a; neumococo resistente), porinas.</li>
<li><b>Penicilina G/benzatínica</b>: estreptococos, <i>T. pallidum</i> (sífilis), <i>Actinomyces</i>. <b>Antiestafilocócicas</b> (dicloxacilina, oxacilina, nafcilina): MSSA. <b>Aminopenicilinas</b> (amoxicilina, ampicilina): + <i>Listeria</i>, <b>enterococo</b>, <i>H. influenzae</i>, <i>E. coli</i> sensible. <b>Piperacilina-tazobactam</b>: <i>Pseudomonas</i> + anaerobios.</li>
<li><b>Cefalosporinas</b>: 1ª (cefalexina, cefazolina: piel, profilaxis quirúrgica) · 2ª (cefuroxima; cefoxitina con anaerobios) · 3ª (<b>ceftriaxona</b>: meningitis, gonorrea, NAC, pielonefritis; <b>ceftazidima</b>: Pseudomonas) · 4ª (<b>cefepime</b>: Pseudomonas, neutropenia febril) · 5ª (<b>ceftarolina</b>: MRSA). Ninguna cubre <b>enterococo, Listeria</b> ni atípicos. Ceftriaxona: barro biliar, evitar en neonatos con calcio.</li>
<li><b>Carbapenémicos</b> (meropenem, imipenem): espectro más amplio, BLEE; ertapenem no cubre Pseudomonas ni Acinetobacter; imipenem: convulsiones.</li>
<li><b>Aztreonam</b>: solo gramnegativos aerobios (incluye Pseudomonas); seguro en alergia a penicilina.</li>
<li><b>Alergia</b>: reacción cruzada penicilina-cefalosporina baja (~1–2 %, mayor si cadenas laterales similares); en anafilaxia evitar betalactámicos o hacer prueba/desensibilización.</li>
<li><b>Vancomicina</b>: se une a D-Ala-D-Ala; solo grampositivos (MRSA, enterococo, <i>C. difficile</i> VO). Efectos: <b>síndrome del hombre rojo</b> (histamina por infusión rápida → infundir lento), nefrotoxicidad, ototoxicidad. Resistencia: D-Ala-D-Lac (VRE). Alternativas: daptomicina (no en neumonía: la inactiva el surfactante; CPK), linezolid.</li>
</ul>` },
        { h: 'Inhibidores de la síntesis de proteínas', html: `
<div class="tablewrap"><table class="mini">
<tr><th>Grupo</th><th>Sitio</th><th>Usos clave</th><th>Efecto adverso clásico</th></tr>
<tr><td><b>Aminoglucósidos</b> (gentamicina, amikacina)</td><td>30S</td><td>Gramnegativos aerobios, sinergia en endocarditis</td><td><b>Nefrotoxicidad, ototoxicidad</b>, bloqueo neuromuscular; no anaerobios (requieren O₂)</td></tr>
<tr><td><b>Tetraciclinas</b> (doxiciclina)</td><td>30S</td><td>Atípicos, <i>Rickettsia</i>, <i>Borrelia</i>, <i>Chlamydia</i>, MRSA comunitario, acné</td><td>Dientes manchados y huesos (no en niños/embarazo), <b>fotosensibilidad</b>, esofagitis; no con Ca/Fe</td></tr>
<tr><td><b>Macrólidos</b> (azitromicina, claritromicina)</td><td>50S</td><td>Atípicos, NAC, <i>Chlamydia</i>, tos ferina, <i>H. pylori</i></td><td><b>QT largo</b>, motilidad GI, interacciones (claritro inhibe CYP3A4)</td></tr>
<tr><td><b>Clindamicina</b></td><td>50S</td><td>Anaerobios “arriba del diafragma”, piel, toxinas (fascitis)</td><td><b>Colitis por <i>C. difficile</i></b></td></tr>
<tr><td><b>Linezolid</b></td><td>50S</td><td>MRSA, VRE</td><td><b>Trombocitopenia</b>, neuropatía, síndrome serotoninérgico (con ISRS)</td></tr>
<tr><td>Cloranfenicol</td><td>50S</td><td>Meningitis (poco usado)</td><td>Anemia aplásica, síndrome del niño gris</td></tr>
</table></div>` },
        { h: 'ADN, folato y otros', html: `
<ul>
<li><b>Fluoroquinolonas</b> (cipro, levo, moxi): inhiben ADN girasa/topoisomerasa IV. Cipro: gramnegativos y <i>Pseudomonas</i> (vía urinaria); levo/moxi “respiratorias” (neumococo, atípicos). Efectos: <b>tendinitis/rotura de Aquiles</b> (ancianos, esteroides), <b>QT largo</b>, disglucemia, neuropatía, aneurisma aórtico, <i>C. difficile</i>; no en embarazo ni niños (cartílago).</li>
<li><b>Metronidazol</b>: radicales libres que dañan ADN; <b>anaerobios</b> (debajo del diafragma), <i>C. difficile</i> (alternativa), <i>Giardia</i>, <i>Entamoeba</i>, <i>Trichomonas</i>, vaginosis. Efectos: sabor metálico, <b>efecto antabús</b> con alcohol, neuropatía.</li>
<li><b>TMP-SMX</b>: bloquea dos pasos del folato. IVU, MRSA comunitario, <i>Pneumocystis</i> (tratamiento y profilaxis), <i>Toxoplasma</i>, <i>Nocardia</i>, <i>Listeria</i>. Efectos: <b>hiperkalemia</b>, ↑ creatinina, <b>Stevens-Johnson</b>, hemólisis en G6PD, mielosupresión, kernícterus en neonatos, ↑ INR con warfarina.</li>
<li><b>Nitrofurantoína</b>: solo cistitis (no pielonefritis; no con TFG &lt;30). <b>Fosfomicina</b>: dosis única en cistitis.</li>
<li>Principios: tomar cultivos antes, empírico según sitio/epidemiología, <b>desescalar</b> al tener antibiograma, duración corta cuando sea posible.</li>
</ul>` },
        { h: 'Cobertura rápida', html: `
<div class="tablewrap"><table class="mini">
<tr><th>Necesito cubrir</th><th>Opciones</th></tr>
<tr><td><b>MRSA</b></td><td>Vancomicina, linezolid, daptomicina (no pulmón), ceftarolina; TMP-SMX/doxiciclina/clindamicina en piel ambulatoria</td></tr>
<tr><td><b>Pseudomonas</b></td><td>Pip-tazo, cefepime, ceftazidima, meropenem/imipenem, aztreonam, cipro/levo, aminoglucósidos</td></tr>
<tr><td><b>Anaerobios</b></td><td>Metronidazol, carbapenémicos, pip-tazo, amoxi-clav/ampi-sulbactam, clindamicina (arriba del diafragma)</td></tr>
<tr><td><b>Atípicos</b></td><td>Macrólidos, doxiciclina, quinolonas respiratorias</td></tr>
<tr><td><b>Enterococo</b></td><td>Ampicilina (± gentamicina/ceftriaxona en endocarditis), vancomicina; VRE: linezolid, daptomicina</td></tr>
<tr><td><b>BLEE</b></td><td>Carbapenémicos</td></tr>
</table></div>` },
        { h: 'Cómo lo preguntan en el examen', html: `
<ul>
<li>Enrojecimiento facial y prurito durante la infusión de vancomicina → <b>hombre rojo</b>: infundir más lento.</li>
<li>Rotura del tendón de Aquiles en anciano con esteroide → <b>quinolona</b>.</li>
<li>Diarrea tras clindamicina → <b><i>C. difficile</i></b>.</li>
<li>Paciente con linezolid + ISRS con hipertermia y clonus → <b>síndrome serotoninérgico</b>.</li>
<li>Hiperkalemia con TMP-SMX → bloqueo del ENaC (efecto tipo amilorida).</li>
<li>¿Qué cefalosporina cubre MRSA? → <b>ceftarolina</b>.</li>
</ul>` }
      ],
      mnemo: { t: 'Compra AT 30, CCEL a 50', d: '30S: Aminoglucósidos, Tetraciclinas. 50S: Cloranfenicol, Clindamicina, Eritromicina (macrólidos), Linezolid.' },
      pearl: 'Ninguna cefalosporina cubre enterococo ni Listeria: en meningitis de mayores de 50 años o inmunosuprimidos se agrega ampicilina.',
      trap: 'Daptomicina no sirve en neumonía (el surfactante la inactiva), y nitrofurantoína no sirve en pielonefritis (no alcanza niveles en tejido renal).',
      guide: [
        'FDA: advertencias de caja negra para quinolonas (tendones, neuropatía, SNC, aneurisma aórtico); evitarlas cuando hay alternativas en infecciones no complicadas.',
        'Tu guía clasifica betalactamasas por clases A, B, C; para el examen basta saber qué inhibidor o qué antibiótico vence a cada una (BLEE → carbapenémico).'
      ],
      refs: [
        'Gilbert DN, et al. The Sanford Guide to Antimicrobial Therapy 2024.',
        'Mandell, Douglas, and Bennett’s Principles and Practice of Infectious Diseases, 9th ed.',
        'Tamma PD, et al. IDSA Guidance on the treatment of antimicrobial-resistant gram-negative infections. Clin Infect Dis 2024.'
      ]
    }
  },

  guias: {
    atb: { src: SRC,
      puntos: [
        'Penicilinas: inhiben transpeptidación al unirse a PBP; bactericidas; resistencia por betalactamasas; Jarisch-Herxheimer en sífilis; nefritis intersticial.',
        'Cefalosporinas: 1ª cocos +, 3ª gramnegativos y meningitis (ceftriaxona), Pseudomonas con ceftazidima y cefepime (4ª), 5ª ceftarolina (MRSA).',
        'Carbapenémicos (ertapenem sin Pseudomonas; imipenem convulsiones), aztreonam (Pseudomonas, alergia a penicilina), vancomicina (MRSA, hombre rojo).',
        'Aminoglucósidos 30S (nefro/ototóxicos, requieren O₂), tetraciclinas 30S (dientes, fotosensibilidad), macrólidos 50S (QT), clindamicina (C. difficile), linezolid (trombocitopenia, serotonina), cloranfenicol (aplásica, niño gris).',
        'Quinolonas (tendinitis, QT, cartílago), metronidazol (antabús, sabor metálico), TMP-SMX (hiperkalemia, SJS, G6PD, warfarina).'
      ],
      ojo: ['Las quinolonas ya no se recomiendan como primera línea en cistitis ni sinusitis no complicadas por sus efectos graves (advertencias FDA).'],
      cards: [['Síndrome del niño gris', 'Cloranfenicol en neonatos']] }
  },

  cards: [
    ['Mecanismo de betalactámicos', 'Se unen a PBP e inhiben la pared (bactericidas)'],
    ['Cefalosporina para MRSA', 'Ceftarolina (5ª)'],
    ['Cefalosporinas para Pseudomonas', 'Ceftazidima y cefepime'],
    ['Lo que no cubren las cefalosporinas', 'Enterococo, Listeria, atípicos'],
    ['Carbapenémico sin Pseudomonas', 'Ertapenem'],
    ['Alergia grave a penicilina y gramnegativos', 'Aztreonam'],
    ['Vancomicina: efecto por infusión rápida', 'Síndrome del hombre rojo'],
    ['Vancomicina oral', 'Solo C. difficile'],
    ['30S', 'Aminoglucósidos, tetraciclinas'],
    ['50S', 'Macrólidos, clindamicina, linezolid, cloranfenicol'],
    ['Aminoglucósidos: efectos', 'Nefro y ototoxicidad, bloqueo neuromuscular'],
    ['Linezolid: efectos', 'Trombocitopenia, síndrome serotoninérgico'],
    ['Quinolonas: efectos', 'Tendinitis/rotura de Aquiles, QT largo, disglucemia'],
    ['Metronidazol + alcohol', 'Efecto antabús'],
    ['TMP-SMX: efectos', 'Hiperkalemia, SJS, hemólisis G6PD, ↑ INR'],
    ['Daptomicina en neumonía', 'No sirve (surfactante)'],
    ['BLEE', 'Carbapenémico']
  ],

  questions: [
    q({ id: 'atb-01', dif: 1, stem: 'Paciente que presenta eritema y prurito en cara y tórax durante una infusión rápida de vancomicina, sin hipotensión. ¿Conducta?', opts: ['Suspender para siempre: es alergia', 'Pausar y reiniciar a infusión más lenta (± antihistamínico)', 'Adrenalina IM', 'Cambiar a penicilina', 'Hemodiálisis'], ans: 1,
      exp: 'Síndrome del hombre rojo: liberación directa de histamina por infusión rápida, no alergia IgE.', why: ['No es alergia verdadera.', '', 'No hay anafilaxia.', 'No cubre lo mismo.', 'No.'], ref: 'Sanford 2024' }),
    q({ id: 'atb-02', dif: 1, stem: '¿Qué cefalosporina cubre MRSA?', opts: ['Ceftriaxona', 'Cefazolina', 'Ceftarolina', 'Cefepime', 'Cefuroxima'], ans: 2,
      exp: 'La ceftarolina (5ª generación) se une a PBP2a.', why: ['No.', 'Solo MSSA.', '', 'No.', 'No.'], ref: 'Sanford 2024' }),
    q({ id: 'atb-03', dif: 2, stem: 'Hombre de 75 años con prednisona que recibe levofloxacino por neumonía y presenta dolor súbito en el talón con chasquido. ¿Qué ocurrió?', opts: ['Gota', 'Rotura del tendón de Aquiles por quinolona', 'Fractura', 'TVP', 'Fascitis plantar'], ans: 1,
      exp: 'Las quinolonas (más con esteroides y en ancianos) causan tendinitis y rotura tendinosa.', why: ['No.', '', 'No.', 'No.', 'No.'], ref: 'Sanford 2024' }),
    q({ id: 'atb-04', dif: 2, stem: 'Paciente con depresión en sertralina que recibe linezolid por MRSA y desarrolla fiebre, agitación, temblor y clonus. ¿Diagnóstico?', opts: ['Sepsis', 'Síndrome serotoninérgico', 'Síndrome neuroléptico maligno', 'Hipertiroidismo', 'Meningitis'], ans: 1,
      exp: 'El linezolid es un IMAO débil; con ISRS puede causar síndrome serotoninérgico.', why: ['No explica el clonus.', '', 'Rigidez, no clonus, y con antipsicóticos.', 'No.', 'No.'], ref: 'Sanford 2024' }),
    q({ id: 'atb-05', dif: 1, stem: '¿Qué antibiótico se asocia con mayor riesgo de colitis por Clostridioides difficile?', opts: ['Doxiciclina', 'Clindamicina', 'Nitrofurantoína', 'Vancomicina oral', 'Metronidazol'], ans: 1,
      exp: 'Clindamicina, quinolonas y cefalosporinas son los de mayor riesgo.', why: ['Riesgo bajo.', '', 'Riesgo bajo.', 'Es tratamiento.', 'Es tratamiento alternativo.'], ref: 'Sanford 2024' }),
    q({ id: 'atb-06', dif: 2, stem: 'Paciente con IVU tratado con TMP-SMX y enalapril que presenta K de 6.4. ¿Mecanismo?', opts: ['Hemólisis', 'El trimetoprim bloquea el ENaC del colector (como amilorida)', 'Rabdomiólisis', 'Error de laboratorio', 'Insuficiencia suprarrenal'], ans: 1,
      exp: 'El trimetoprim reduce la secreción de K; con IECA o en ERC el riesgo es alto.', why: ['No.', '', 'No.', 'No.', 'No.'], ref: 'Sanford 2024' }),
    q({ id: 'atb-07', dif: 2, stem: 'Paciente que bebe alcohol mientras toma metronidazol y presenta rubor, náusea, vómito y taquicardia. ¿Mecanismo?', opts: ['Alergia', 'Inhibición de la aldehído deshidrogenasa (efecto antabús)', 'Hipoglucemia', 'Intoxicación por metanol', 'Síndrome serotoninérgico'], ans: 1,
      exp: 'Acumulación de acetaldehído.', why: ['No.', '', 'No.', 'No.', 'No.'], ref: 'Sanford 2024' }),
    q({ id: 'atb-08', dif: 2, stem: 'Paciente con neumonía por MRSA. ¿Qué fármaco NO debe usarse?', opts: ['Vancomicina', 'Linezolid', 'Daptomicina', 'Ceftarolina', 'Telavancina'], ans: 2,
      exp: 'El surfactante pulmonar inactiva la daptomicina.', why: ['Útil.', 'Útil.', '', 'Útil.', 'Útil.'], ref: 'Sanford 2024' }),
    q({ id: 'atb-09', dif: 2, stem: 'Paciente con anafilaxia a penicilina que requiere cobertura de gramnegativos incluida Pseudomonas. ¿Opción betalactámica segura?', opts: ['Ceftriaxona', 'Aztreonam', 'Meropenem', 'Amoxicilina', 'Cefazolina'], ans: 1,
      exp: 'El aztreonam (monobactam) prácticamente no tiene reacción cruzada con penicilinas (salvo con ceftazidima por cadena lateral).', why: ['Riesgo de reacción cruzada y no cubre Pseudomonas.', '', 'Riesgo bajo pero existente en anafilaxia.', 'Contraindicada.', 'Riesgo.'], ref: 'Sanford 2024' }),
    q({ id: 'atb-10', dif: 2, stem: '¿Qué grupo antibiótico NO actúa contra anaerobios porque requiere oxígeno para entrar a la bacteria?', opts: ['Betalactámicos', 'Aminoglucósidos', 'Metronidazol', 'Clindamicina', 'Carbapenémicos'], ans: 1,
      exp: 'El transporte de aminoglucósidos depende de oxígeno.', why: ['Algunos cubren anaerobios.', '', 'Es el anaerobicida clásico.', 'Cubre anaerobios.', 'Cubren anaerobios.'], ref: 'Sanford 2024' }),
    q({ id: 'atb-11', dif: 2, stem: 'Embarazada con cistitis no complicada. ¿Qué antibiótico evitas?', opts: ['Nitrofurantoína (2º trimestre)', 'Cefalexina', 'Fosfomicina', 'Ciprofloxacino', 'Amoxicilina'], ans: 3,
      exp: 'Las quinolonas afectan el cartílago en desarrollo; las tetraciclinas también se evitan.', why: ['Aceptable en 2º trimestre.', 'Segura.', 'Segura.', '', 'Segura si es sensible.'], ref: 'Sanford 2024' }),
    q({ id: 'atb-12', dif: 2, stem: 'Paciente con bacteriemia por Enterococcus faecalis sensible. ¿Antibiótico de elección?', opts: ['Ceftriaxona sola', 'Ampicilina', 'Cefepime', 'Clindamicina', 'TMP-SMX'], ans: 1,
      exp: 'Ninguna cefalosporina cubre enterococo; ampicilina (± gentamicina o ceftriaxona en endocarditis).', why: ['No cubre enterococo sola.', '', 'No cubre.', 'No.', 'No fiable.'], ref: 'Sanford 2024' }),
    q({ id: 'atb-13', dif: 2, stem: 'Niño de 6 años con enfermedad de Lyme. ¿Qué antibiótico evitarías clásicamente?', opts: ['Amoxicilina', 'Doxiciclina (manchas dentales) — aunque cursos cortos hoy se aceptan', 'Cefuroxima', 'Azitromicina', 'Ceftriaxona'], ans: 1,
      exp: 'Las tetraciclinas se depositan en dientes y hueso; hoy cursos cortos de doxiciclina se consideran seguros, pero es la respuesta clásica.', why: ['Segura.', '', 'Segura.', 'Alternativa.', 'Segura.'], ref: 'Sanford 2024' }),
    q({ id: 'atb-14', dif: 1, stem: '¿Qué efecto adverso es característico de los aminoglucósidos?', opts: ['Hepatotoxicidad', 'Nefrotoxicidad y ototoxicidad', 'Hombre rojo', 'Tendinitis', 'Fotosensibilidad'], ans: 1,
      exp: 'Además bloqueo neuromuscular (precaución en miastenia).', why: ['No.', '', 'Vancomicina.', 'Quinolonas.', 'Tetraciclinas.'], ref: 'Sanford 2024' }),
    q({ id: 'atb-15', dif: 2, stem: 'Paciente con infección por E. coli productora de BLEE. ¿Tratamiento de elección?', opts: ['Ceftriaxona', 'Meropenem (carbapenémico)', 'Amoxicilina-clavulanato', 'Cefazolina', 'Ampicilina'], ans: 1,
      exp: 'Las BLEE hidrolizan penicilinas y cefalosporinas; los carbapenémicos son de elección en infección grave.', why: ['Hidrolizada.', '', 'No fiable.', 'Hidrolizada.', 'Hidrolizada.'], ref: 'IDSA 2024' }),
    q({ id: 'atb-16', dif: 2, stem: 'Paciente con pielonefritis. ¿Qué antibiótico NO es adecuado?', opts: ['Ceftriaxona', 'Ciprofloxacino', 'Nitrofurantoína', 'TMP-SMX (si sensible)', 'Ertapenem'], ans: 2,
      exp: 'La nitrofurantoína no alcanza niveles en el parénquima renal: solo cistitis.', why: ['Útil.', 'Útil.', '', 'Útil si es sensible.', 'Útil.'], ref: 'Sanford 2024' }),
    q({ id: 'atb-17', dif: 2, stem: 'Paciente con macrólido y QTc de 520 ms. ¿Qué otros antibióticos también alargan el QT?', opts: ['Betalactámicos', 'Fluoroquinolonas', 'Aminoglucósidos', 'Vancomicina', 'Metronidazol'], ans: 1,
      exp: 'Macrólidos y quinolonas prolongan el QT (riesgo de torsades).', why: ['No.', '', 'No.', 'No.', 'Poco.'], ref: 'Sanford 2024' }),
    q({ id: 'atb-18', dif: 2, stem: 'Paciente con neumonía por aspiración con absceso pulmonar. ¿Antibiótico adecuado?', opts: ['Ceftriaxona sola', 'Ampicilina-sulbactam o clindamicina', 'Aztreonam', 'Ciprofloxacino', 'Nitrofurantoína'], ans: 1,
      exp: 'Anaerobios orales “arriba del diafragma”: ampicilina-sulbactam (o clindamicina).', why: ['Cobertura anaerobia insuficiente.', '', 'No cubre anaerobios.', 'No cubre anaerobios.', 'No.'], ref: 'Sanford 2024' }),
    q({ id: 'atb-19', dif: 2, stem: 'Paciente con sífilis secundaria que 4 horas después de penicilina benzatínica presenta fiebre, escalofríos y mialgias. ¿Reacción?', opts: ['Anafilaxia', 'Jarisch-Herxheimer', 'Enfermedad del suero', 'Stevens-Johnson', 'Hombre rojo'], ans: 1,
      exp: 'Liberación de endotoxinas de espiroquetas al morir; autolimitada, se trata con antipiréticos.', why: ['No hay datos.', '', 'Tarda días.', 'Lesiones cutáneas graves.', 'Es de vancomicina.'], ref: 'Sanford 2024' }),
    q({ id: 'atb-20', dif: 1, stem: '¿Cuál es el mecanismo de acción de las fluoroquinolonas?', opts: ['Inhiben la pared', 'Inhiben la ADN girasa y topoisomerasa IV', 'Inhiben 30S', 'Inhiben el folato', 'Dañan la membrana'], ans: 1,
      exp: 'Bloquean el superenrollamiento del ADN bacteriano.', why: ['Betalactámicos.', '', 'Aminoglucósidos/tetraciclinas.', 'TMP-SMX.', 'Polimixinas/daptomicina.'], ref: 'Sanford 2024' })
  ]
};
