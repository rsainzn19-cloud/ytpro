// “Entiéndelo desde cero”: explicación guiada con analogías, un visual interactivo por paso y una pregunta de control.
// facil.<tema> = { title, intro, steps: [{ h, html, vis?, check?: { q, opts, a, why } }] }
// vis = widget de app.js (FACIL_VIS): fabrica, tamano, hierro, hemolisis, mapa (anemias) · tiempos, donde, cascada (sangrado).
export default {
  facil: {
    anemias: { title: 'Anemias desde cero', intro: 'Olvida las tablas. Piensa en una fábrica de eritrocitos: con 3 preguntas vas a poder clasificar cualquier anemia.',
      steps: [
        { h: '1. La fábrica de eritrocitos', vis: 'fabrica', html: `
<p>Los eritrocitos se fabrican en la <b>médula ósea</b>. Para trabajar, la fábrica necesita:</p>
<ul><li>una <b>orden de trabajo</b>: la <b>eritropoyetina (EPO)</b>, que manda el riñón cuando “siente” poco oxígeno;</li>
<li><b>materia prima</b>: <b>hierro</b> (para la hemoglobina), <b>B12</b> y <b>folato</b> (para copiar el ADN y dividirse).</li></ul>
<p>Cada eritrocito vive ~<b>120 días</b> y después el <b>bazo</b> lo recicla. La anemia aparece cuando salen menos de los que se pierden. Solo hay 3 formas: <b>no se fabrica</b>, <b>se destruye</b> o <b>se pierde</b>.</p>
<p class="small muted">Toca cada problema en el dibujo para ver dónde falla.</p>`,
          check: { q: 'Un paciente con insuficiencia renal crónica tiene anemia. ¿Por qué?', opts: ['El bazo destruye más eritrocitos', 'El riñón manda menos EPO: la fábrica no recibe la orden', 'Pierde sangre por la orina'], a: 1, why: 'El riñón produce la EPO. Sin orden de trabajo la médula fabrica poco: anemia normocítica con reticulocitos bajos. Se trata con EPO (y hierro).' } },
        { h: '2. Los reticulocitos: ¿la fábrica está trabajando?', vis: 'fabrica', html: `
<p>Los <b>reticulocitos</b> son los eritrocitos “recién salidos” de la fábrica (viven 1 día en la sangre). Son el <b>reporte de producción de hoy</b>.</p>
<ul><li><b>Reticulocitos bajos</b> (índice <2): la fábrica <b>no está produciendo</b> lo que debería → le falta materia prima (hierro, B12, folato), le falta la orden (EPO) o la fábrica está dañada (aplasia, leucemia). Se llama <b>hipoproliferativa</b>.</li>
<li><b>Reticulocitos altos</b> (índice >2): la fábrica <b>trabaja a marchas forzadas</b> porque afuera los eritrocitos se <b>destruyen</b> (hemólisis) o se <b>pierden</b> (sangrado). Se llama <b>regenerativa</b>.</li></ul>
<p>Esta es la <b>primera pregunta</b>: ¿la médula produce o no?</p>`,
          check: { q: 'Anemia con reticulocitos altos. ¿Qué piensas?', opts: ['Falta de hierro', 'La médula responde: hay hemólisis o sangrado', 'Insuficiencia renal'], a: 1, why: 'Si la médula manda muchos reticulocitos, ella está bien: el problema está afuera (se destruyen o se pierden). Falta de hierro, B12 o EPO dan reticulocitos bajos.' } },
        { h: '3. El tamaño (VCM): pequeños o grandes', vis: 'tamano', html: `
<p>La <b>segunda pregunta</b> es el tamaño del eritrocito: el <b>VCM</b> (volumen corpuscular medio; normal 80–100 fL).</p>
<ul><li><b>Microcítico (<80)</b>: el eritrocito se sigue dividiendo mientras espera llenarse de hemoglobina; si <b>no hay hierro</b> para hacerla, sale <b>pequeño y pálido</b> (hipocrómico). Causas: <b>ferropenia</b> (la más común), talasemia, inflamación crónica.</li>
<li><b>Macrocítico (>100)</b>: si falta <b>B12 o folato</b>, el núcleo no puede copiar su ADN y la célula crece sin dividirse: sale <b>grande</b> (megaloblástica). También alcohol, hígado e hipotiroidismo.</li>
<li><b>Normocítico</b>: la fábrica está bien hecha pero produce poco (ERC, inflamación temprana, médula) o se pierden/destruyen (sangrado agudo, hemólisis).</li></ul>
<p class="small muted">Truco: <b>hierro → hemoglobina → color y tamaño</b> · <b>B12/folato → ADN → división</b>.</p>`,
          check: { q: 'VCM de 68 fL. ¿Qué materia prima falta probablemente?', opts: ['B12', 'Hierro', 'Folato'], a: 1, why: 'Micro = falta hacer hemoglobina, casi siempre por falta de hierro. B12 y folato dan células grandes (macrocíticas).' } },
        { h: '4. El hierro: la bodega y los camiones', vis: 'hierro', html: `
<p>Para saber si falta hierro mira 4 números. Imagina una <b>bodega</b> y <b>camiones</b>:</p>
<ul><li><b>Ferritina</b> = cuánto hierro hay <b>guardado en la bodega</b>. Es el número más importante: <b>baja = ferropenia</b> (no hay otra causa de ferritina baja).</li>
<li><b>Transferrina / TIBC</b> = los <b>camiones</b> que llevan el hierro. Si falta hierro, el hígado manda <b>más camiones</b> a buscarlo (TIBC alta).</li>
<li><b>Saturación</b> = qué tanto van <b>cargados</b> los camiones (normal 20–45%).</li>
<li><b>Hepcidina</b> = el <b>candado</b> de la bodega. Con <b>inflamación</b> (artritis, cáncer, infección) se cierra: hay hierro guardado (ferritina normal o alta) pero no sale → camiones vacíos.</li></ul>
<p class="small muted">Cambia el escenario en el dibujo y fíjate en las flechas.</p>`,
          check: { q: 'Ferritina 8, TIBC alta, saturación 6%. ¿Qué es?', opts: ['Anemia de la inflamación', 'Ferropenia', 'Talasemia'], a: 1, why: 'Bodega vacía (ferritina baja) y muchos camiones vacíos (TIBC alta, saturación baja): ferropenia. En un adulto, busca por dónde se pierde la sangre (tubo digestivo o menstruación).' } },
        { h: '5. B12 o folato: cómo distinguirlos', html: `
<p>Los dos dan anemia <b>macrocítica megaloblástica</b> con <b>neutrófilos hipersegmentados</b> (≥5 lóbulos). La diferencia:</p>
<table class="mini"><tr><th></th><th>B12</th><th>Folato</th></tr>
<tr><td>Homocisteína</td><td>Alta</td><td>Alta</td></tr><tr><td><b>Ácido metilmalónico</b></td><td><b>Alto</b></td><td>Normal</td></tr>
<tr><td>Neurológico</td><td><b>Sí</b> (hormigueo, pierde la vibración, ataxia, demencia)</td><td>No</td></tr>
<tr><td>Causas típicas</td><td>Anemia perniciosa (sin factor intrínseco), gastrectomía, metformina, veganos, Crohn ileal</td><td>Alcohol, mala dieta (“té y pan tostado”), embarazo, metotrexato, fenitoína</td></tr>
<tr><td>Se tarda en agotar</td><td>Años (reservas en el hígado)</td><td>Meses</td></tr></table>
<p><b>Regla de oro</b>: nunca des solo ácido fólico sin descartar falta de B12: la anemia mejora pero el daño neurológico avanza.</p>`,
          check: { q: 'Anemia macrocítica con parestesias y ácido metilmalónico alto. ¿Qué falta?', opts: ['Folato', 'B12', 'Hierro'], a: 1, why: 'El ácido metilmalónico solo sube cuando falta B12, y la B12 es la que daña los nervios. Se repone por vía IM (de por vida en la perniciosa).' } },
        { h: '6. Hemólisis: cuando se destruyen', vis: 'hemolisis', html: `
<p>Si los eritrocitos se rompen antes de tiempo, dejan <b>huellas en la sangre</b>:</p>
<ul><li><b>LDH alta</b>: es una enzima que estaba dentro del eritrocito y se sale.</li>
<li><b>Bilirrubina indirecta alta</b>: la hemoglobina se degrada a bilirrubina → <b>ictericia</b> sin coluria.</li>
<li><b>Haptoglobina baja</b>: es la proteína que “barre” la hemoglobina libre; se gasta.</li>
<li><b>Reticulocitos altos</b>: la médula compensa.</li></ul>
<p>Luego el <b>Coombs directo</b> separa: positivo = <b>anticuerpos</b> pegados al eritrocito (autoinmune); negativo = el eritrocito es defectuoso (esferocitosis, G6PD, falciforme) o lo rompe algo mecánico (válvulas, microangiopatía con <b>esquistocitos</b>).</p>`,
          check: { q: '¿Cuál NO es una huella de hemólisis?', opts: ['Haptoglobina baja', 'Ferritina baja', 'LDH alta'], a: 1, why: 'La ferritina baja es ferropenia. En la hemólisis la haptoglobina baja (se gasta) y la LDH y la bilirrubina indirecta suben.' } },
        { h: '7. Todo junto: el mapa de la anemia', vis: 'mapa', html: `
<p>Ya tienes las dos preguntas: <b>¿cuánto mide?</b> (VCM) y <b>¿la médula produce?</b> (reticulocitos). Juntas forman un mapa de 6 casillas. Mueve los controles o toca un caso típico y mira qué causas caben y qué estudio pedir después.</p>`,
          check: { q: 'Mujer de 30 años con menstruaciones abundantes: VCM 70, reticulocitos bajos. ¿Siguiente estudio?', opts: ['Ferritina', 'Coombs directo', 'Vitamina B12'], a: 0, why: 'Micro + reticulocitos bajos = no se fabrica bien por falta de materia prima: la primera sospecha es ferropenia y la ferritina lo confirma.' } }
      ] },

    sangrado: { title: 'Coagulopatías desde cero', intro: 'Coagular es tapar una fuga en dos tiempos. Si entiendes qué tapa cada tiempo, vas a leer el TP, el TTPa y las plaquetas sin memorizar.',
      steps: [
        { h: '1. Tapar una fuga en dos tiempos', vis: 'tiempos', html: `
<p>Cuando se rompe un vaso, el cuerpo hace dos cosas, en orden:</p>
<ul><li><b>Tiempo 1 · el tapón (hemostasia primaria)</b>: las <b>plaquetas</b> se pegan a la herida. Para pegarse usan un “pegamento”: el <b>factor de von Willebrand</b>. Es como poner ladrillos.</li>
<li><b>Tiempo 2 · el cemento (hemostasia secundaria)</b>: los <b>factores de coagulación</b> trabajan en cadena (la “cascada”) para fabricar <b>fibrina</b>, una malla que refuerza el tapón. Es el cemento entre los ladrillos.</li></ul>
<p class="small muted">Toca los botones del dibujo para ver cada tiempo.</p>`,
          check: { q: '¿Qué forma el primer tapón?', opts: ['La fibrina', 'Las plaquetas pegadas con el factor de von Willebrand', 'El factor VIII'], a: 1, why: 'Primero las plaquetas (tapón blando, segundos a minutos); después la fibrina lo refuerza.' } },
        { h: '2. ¿Dónde sangra? Te dice qué falla', vis: 'donde', html: `
<ul><li>Si fallan las <b>plaquetas o el von Willebrand</b> (el tapón), sangra en <b>piel y mucosas</b>: <b>petequias</b>, moretones pequeños, encías, nariz, menstruación abundante. Sangra <b>de inmediato</b> después de una herida.</li>
<li>Si fallan los <b>factores</b> (el cemento), el tapón se forma pero no aguanta: sangrado <b>profundo</b> en <b>articulaciones (hemartrosis)</b> y músculos, y sangrado <b>tardío</b> (horas después de una extracción o cirugía).</li></ul>`,
          check: { q: 'Niño con rodilla inflamada por sangrado tras un golpe leve. ¿Qué falla?', opts: ['Las plaquetas', 'Un factor de coagulación', 'Los vasos'], a: 1, why: 'Hemartrosis = sangrado profundo = falla el cemento (factores). Típico de hemofilia (VIII o IX).' } },
        { h: '3. Los 3 análisis', vis: 'cascada', html: `
<p>Con 3 números lees casi todo:</p>
<ul><li><b>Plaquetas</b>: cuántos ladrillos hay (normal 150–450 mil).</li>
<li><b>TP (o INR)</b>: mide la vía del <b>factor VII</b> (vía “extrínseca”) + la vía común. Se alarga con <b>warfarina</b>, falta de <b>vitamina K</b> e <b>hígado</b> enfermo.</li>
<li><b>TTPa</b>: mide los factores <b>XII, XI, IX y VIII</b> (vía “intrínseca”) + la vía común. Se alarga con <b>heparina</b> y <b>hemofilias</b>.</li></ul>
<p><b>Mnemotecnias</b>: <b>WEPT</b> = <b>W</b>arfarina, <b>E</b>xtrínseca, <b>PT</b> (TP) · <b>HINT</b> = <b>H</b>eparina, <b>IN</b>trínseca, <b>T</b>TPa. Si fallan los de la <b>vía común</b> (X, V, II, fibrinógeno), se alargan <b>los dos</b>.</p>
<p class="small muted">En el dibujo elige un problema y mira qué cajas se ponen rojas y qué prueba se alarga.</p>`,
          check: { q: 'Paciente con warfarina. ¿Qué prueba se alarga primero?', opts: ['TTPa', 'TP / INR', 'Las plaquetas bajan'], a: 1, why: 'La warfarina bloquea la vitamina K y bajan II, VII, IX y X. El VII es el que dura menos en sangre, así que el TP (vía del VII) se alarga primero. WEPT.' } },
        { h: '4. La prueba de mezcla: ¿falta algo o algo estorba?', html: `
<p>Si el TTPa (o el TP) está largo, mezclas el plasma del paciente <b>mitad y mitad con plasma normal</b>:</p>
<ul><li><b>Se corrige</b> → al paciente le <b>faltaba un factor</b> y el plasma normal se lo prestó (hemofilia, déficit).</li>
<li><b>No se corrige</b> → hay un <b>inhibidor</b> que también bloquea el plasma normal: anticoagulante lúpico (paradójicamente da <b>trombosis</b>, no sangrado) o anticuerpos contra el factor VIII (hemofilia adquirida).</li></ul>`,
          check: { q: 'TTPa largo que no corrige con la mezcla en una mujer con abortos de repetición. ¿Qué es?', opts: ['Hemofilia A', 'Anticoagulante lúpico (síndrome antifosfolípido)', 'Falta de vitamina K'], a: 1, why: 'No corrige = inhibidor. Con trombosis o pérdidas gestacionales es el anticoagulante lúpico: se trata con anticoagulación, no con factores.' } },
        { h: '5. Las 4 enfermedades que siempre preguntan', vis: 'cascada', html: `
<table class="mini"><tr><th>Enfermedad</th><th>Qué falla</th><th>Plaq</th><th>TP</th><th>TTPa</th><th>Tratamiento</th></tr>
<tr><td><b>Von Willebrand</b></td><td>Pegamento de plaquetas (y transporta el VIII)</td><td>Normal</td><td>Normal</td><td>Normal o largo</td><td>Desmopresina</td></tr>
<tr><td><b>Hemofilia A / B</b></td><td>Factor VIII / IX (hombres, ligada al X)</td><td>Normal</td><td>Normal</td><td><b>Largo</b></td><td>Reponer el factor</td></tr>
<tr><td><b>PTI</b></td><td>Anticuerpos destruyen plaquetas</td><td><b>Bajas</b></td><td>Normal</td><td>Normal</td><td>Prednisona si <30 mil o sangra</td></tr>
<tr><td><b>CID</b></td><td>Se gasta todo (sepsis, trauma, LPA)</td><td><b>Bajas</b></td><td><b>Largo</b></td><td><b>Largo</b></td><td>Tratar la causa; plasma, crio, plaquetas</td></tr></table>
<p>En la <b>CID</b> además: <b>fibrinógeno bajo</b>, <b>dímero D alto</b> y esquistocitos. En el <b>hígado</b> enfermo también se alargan TP y TTPa, pero el factor VIII es normal (se hace fuera del hígado) y el dímero D no sube tanto.</p>`,
          check: { q: 'Paciente séptico que sangra de los sitios de punción: plaquetas 40 mil, TP y TTPa largos, fibrinógeno bajo, dímero D alto. ¿Qué es?', opts: ['PTI', 'CID', 'Hemofilia'], a: 1, why: 'Todo bajo y todo largo con dímero D alto = consumo: CID. Se trata la sepsis y se repone lo que falta si sangra.' } },
        { h: '6. Anticoagulantes: qué alargan y cómo se revierten', vis: 'cascada', html: `
<table class="mini"><tr><th>Fármaco</th><th>Bloquea</th><th>Prueba</th><th>Si sangra grave</th></tr>
<tr><td>Warfarina</td><td>Vitamina K (II, VII, IX, X)</td><td>TP / INR</td><td>Complejo protrombínico + vitamina K IV</td></tr>
<tr><td>Heparina no fraccionada</td><td>Activa antitrombina (IIa y Xa)</td><td>TTPa</td><td>Protamina</td></tr>
<tr><td>Enoxaparina</td><td>Sobre todo Xa</td><td>Anti-Xa (TTPa casi normal)</td><td>Protamina (parcial)</td></tr>
<tr><td>Apixabán, rivaroxabán</td><td>Xa</td><td>Anti-Xa</td><td>Andexanet o complejo protrombínico</td></tr>
<tr><td>Dabigatrán</td><td>Trombina (IIa)</td><td>TTPa, tiempo de trombina</td><td>Idarucizumab</td></tr>
<tr><td>Aspirina, clopidogrel</td><td>Plaquetas (función)</td><td>Ninguna se altera</td><td>Plaquetas en casos seleccionados</td></tr></table>`,
          check: { q: 'Paciente con dabigatrán con hemorragia cerebral. ¿Qué lo revierte?', opts: ['Vitamina K', 'Idarucizumab', 'Protamina'], a: 1, why: 'El idarucizumab es un anticuerpo específico contra el dabigatrán. La vitamina K solo sirve para la warfarina y la protamina para las heparinas.' } }
      ] }
  }
};
