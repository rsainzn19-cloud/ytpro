// Tema 12 · Gota y pseudogota (Reumatología, semana 3)
const T = { topic: 'gota', subj: 'reuma' };
const q = (o) => ({ ...T, ...o });

export default {
  lessons: {
    gota: {
      hook: 'El examen gira en tres cosas: los cristales (agujas negativas vs romboides positivos), cómo apagar un ataque según el paciente y cuándo iniciar alopurinol con meta <6.',
      anim: 'gota',
      compare: ['gota-pseudo'],
      nn: [['gout-nclex', 'Gout (NCLEX)']],
      yt: 'gout pseudogout',
      video: [
        { ch: 'Del urato al cristal', sc: [
          { v: { k: 'title', t: 'Gota y pseudogota', s: 'Tema 12 · Reumatología' },
            say: 'Bienvenido a la guardia. En este video vas a aprender a diagnosticar la gota con los cristales, a apagar un ataque según el paciente que tengas enfrente y a bajar el urato con la meta correcta. Al final, la pseudogota.' },
          { v: { k: 'case', t: 'Llega a urgencias', p: { name: 'Jesús', age: 54, sex: 'H', skin: '#B97A52', hair: '#2A1C14', gown: '#4DB8FF' }, text: 'Chofer con obesidad, HTA con hidroclorotiazida y ERC. Tras una carne asada con cerveza despertó con el dedo gordo rojo; no tolera ni la sábana.', vit: { FC: '96', PA: '148/90', T: '37.6' } },
            say: 'Conoce a don Chuy, chofer de cincuenta y cuatro años, con obesidad, hipertensión tratada con hidroclorotiazida y enfermedad renal crónica. Después de una carne asada con cerveza, despertó con el dedo gordo del pie rojo, caliente y tan adolorido que no tolera ni la sábana. Vamos a entender por qué.' },
          { v: { k: 'anim', id: 'gota', step: 0 },
            say: 'Todo empieza con el ácido úrico. Las purinas se convierten en hipoxantina, luego en xantina y al final en ácido úrico, gracias a una enzima: la xantina oxidasa. Por arriba de seis punto ocho miligramos por decilitro, el urato ya no cabe disuelto.' },
          { v: { k: 'list', t: 'Por qué sube el urato', items: ['90%: baja excreción renal', 'ERC, tiazidas y de asa, aspirina a dosis baja', 'Alcohol (cerveza), carnes rojas, mariscos', 'Refrescos con fructosa, obesidad', 'Sobreproducción: lisis tumoral, mieloproliferativos'] },
            say: 'En nueve de cada diez pacientes el problema es que el riñón excreta poco urato. Lo empeoran la enfermedad renal, los diuréticos tiazídicos y de asa y la aspirina a dosis baja. Suman el alcohol, sobre todo la cerveza, las carnes rojas, los mariscos, los refrescos con fructosa y la obesidad. Pocos casos son por sobreproducción, como la lisis tumoral.' },
          { v: { k: 'anim', id: 'gota', step: 1 },
            say: 'El urato precipita como cristales en forma de aguja, sobre todo en articulaciones frías y periféricas. Por eso el sitio clásico es la primera articulación metatarsofalángica. A ese ataque se le llama podagra.' }
        ] },
        { ch: 'El ataque', sc: [
          { v: { k: 'anim', id: 'gota', step: 2 },
            say: 'Los macrófagos fagocitan los cristales y activan el inflamasoma. Liberan interleucina uno beta y llaman a los neutrófilos. En pocas horas la articulación se pone roja, caliente, hinchada y muy dolorosa.' },
          { v: { k: 'list', t: 'Cómo se ve la gota', items: ['Monoartritis aguda nocturna: podagra', 'Pico en <24 h; cede en 1–2 semanas', 'También tobillo, rodilla, muñeca', 'Tofos: oreja, codo, Aquiles', 'Litos de ácido úrico (radiolúcidos)'] },
            say: 'El cuadro típico es una monoartritis aguda que empieza de noche, en el dedo gordo del pie. Alcanza su máximo en menos de un día y, aun sin tratamiento, cede en una o dos semanas. Con los años aparecen tofos en el pabellón auricular, los codos y el tendón de Aquiles. Y litos de ácido úrico, que no se ven en la radiografía simple.' },
          { v: { k: 'flow', t: 'Monoartritis aguda', steps: ['Artrocentesis siempre que puedas', 'Cristales con luz polarizada', 'Gram y cultivo: siempre', '>50 000 leucocitos: piensa en sepsis', 'Urato sérico: 2–4 sem después'] },
            say: 'Ante una monoartritis aguda, la regla de oro es la artrocentesis. Buscas cristales con luz polarizada y siempre pides tinción de Gram y cultivo, porque gota e infección pueden coexistir. Con más de cincuenta mil leucocitos y fiebre, trátala como séptica hasta tener el cultivo. El urato sérico mídelo dos a cuatro semanas después.' },
          { v: { k: 'vs', cmp: 'gota-pseudo', rows: [1, 2, 3] },
            say: 'Compara los cristales. En la gota son agujas con birrefringencia negativa intensa: amarillas cuando quedan paralelas al compensador. En la pseudogota son romboides con birrefringencia positiva débil: azules en paralelo. La gota prefiere el primer dedo del pie; la pseudogota, la rodilla y la muñeca.' },
          { v: { k: 'tip', kind: 'trap', t: 'Urato normal durante el ataque NO descarta gota: la inflamación lo baja. El diagnóstico se hace con cristales.' },
            say: 'Ojo con esta trampa. Durante el ataque el ácido úrico puede estar normal, porque la inflamación aumenta su excreción. Un urato normal no descarta gota. El diagnóstico se hace con los cristales.' },
          { v: { k: 'list', t: 'Imagen', items: ['Rx tardía: erosión en sacabocado', 'Con borde óseo colgante', 'USG: signo del doble contorno', 'TC de doble energía: depósitos de urato'] },
            say: 'La radiografía tarda años en cambiar. Cuando lo hace, muestra erosiones en sacabocado con un borde de hueso colgante. El ultrasonido ve antes el signo del doble contorno: urato sobre la superficie del cartílago. Y la tomografía de doble energía colorea los depósitos de urato.' },
          { v: { k: 'quiz', q: 'Rodilla caliente, fiebre de 39 °C, 110 000 leucocitos/µL y cristales de urato. ¿Qué haces?', opts: ['Es gota: colchicina y alta', 'Cultivo, antibiótico y drenaje'], a: 1 },
            say: 'Pausa. Rodilla caliente, fiebre de treinta y nueve grados, ciento diez mil leucocitos en el líquido y cristales de urato. ¿Qué haces?',
            exp: 'Antibióticos empíricos, Gram, cultivo y drenaje. Los cristales no descartan una artritis séptica, y una articulación infectada se destruye en días.' }
        ] },
        { ch: 'Apagar el ataque', sc: [
          { v: { k: 'list', t: 'Tres opciones, en las primeras 24 h', items: ['Colchicina a dosis baja', 'AINE a dosis plenas', 'Glucocorticoide oral o intraarticular', 'Elige según riñón, estómago y fármacos', 'Refractario: anti-IL-1'] },
            say: 'Para el ataque tienes tres opciones, igual de eficaces si las das pronto, idealmente en las primeras veinticuatro horas. Colchicina a dosis baja, un antiinflamatorio no esteroideo a dosis plenas o un glucocorticoide. No eliges por potencia, sino por el paciente: su riñón, su estómago y los otros fármacos que toma.' },
          { v: { k: 'anim', id: 'gota', step: 3 },
            say: 'La colchicina bloquea los microtúbulos de los neutrófilos: ya no pueden migrar ni amplificar la inflamación. Se da a dosis baja: uno punto dos miligramos y cero punto seis una hora después. La guía europea usa un miligramo y luego medio. Cuidado con la claritromicina: la toxicidad puede ser mortal.' },
          { v: { k: 'list', t: 'Elige según el paciente', items: ['ERC avanzada: glucocorticoide', 'Úlcera, IC o anticoagulado: no AINE', 'Claritromicina: no colchicina', 'Una sola articulación: esteroide intraarticular', 'Diabetes descontrolada: cuidado con esteroide'] },
            say: 'Ahora decide. Con enfermedad renal avanzada, el glucocorticoide es lo más seguro. Si hay úlcera, insuficiencia cardiaca o anticoagulación, nada de antiinflamatorios no esteroideos. Si toma claritromicina, nada de colchicina. Y si solo es una articulación accesible, una infiltración de esteroide funciona muy bien.' },
          { v: { k: 'quiz', q: 'Don Chuy: TFG 38 y úlcera duodenal hace 4 meses. ¿Con qué tratas el ataque?', opts: ['Indometacina 50 mg c/8 h', 'Prednisona 30–40 mg/día por 5 días'], a: 1 },
            say: 'Pausa. Don Chuy tiene una tasa de filtración glomerular de treinta y ocho y una úlcera duodenal de hace cuatro meses. ¿Con qué tratas el ataque?',
            exp: 'Con prednisona, de treinta a cuarenta miligramos al día por cinco días. La indometacina dañaría su riñón y su estómago. La colchicina sería posible, pero con ajuste por la función renal.' }
        ] },
        { ch: 'Bajar el urato', sc: [
          { v: { k: 'list', t: 'Cuándo iniciar alopurinol (ACR 2020)', items: ['≥1 tofo', 'Daño radiográfico por gota', '≥2 ataques al año', 'Considerar: 1er ataque + ERC ≥3, urato >9 o litos'] },
            say: 'El tratamiento para bajar el urato tiene indicaciones fuertes: al menos un tofo, daño radiográfico por gota, o dos o más ataques al año. Se considera desde el primer ataque si hay enfermedad renal en estadio tres o más, urato mayor de nueve o litiasis urinaria. La hiperuricemia sin síntomas no se trata con fármacos.' },
          { v: { k: 'anim', id: 'gota', step: 4 },
            say: 'El alopurinol inhibe la xantina oxidasa. Se forma menos ácido úrico y, con meses de urato bajo, los cristales se disuelven. Es de primera línea, incluso en enfermedad renal crónica.' },
          { v: { k: 'big', h: 'Meta de urato', t: '<6', u: 'mg/dL', s: '<5 si hay tofos (EULAR). Sube el alopurinol hasta llegar.' },
            say: 'La meta es un urato menor de seis miligramos por decilitro, por debajo del punto de saturación. La guía europea pide menos de cinco si hay tofos. No es una dosis fija: subes el alopurinol hasta llegar a la meta.' },
          { v: { k: 'flow', t: 'Cómo iniciar alopurinol', steps: ['HLA-B*58:01 si hay riesgo étnico', '≤100 mg/día (menos en ERC)', 'Subir cada 2–5 semanas', 'Profilaxis: colchicina 3–6 meses', 'Si hay ataque: NO suspender'] },
            say: 'Así se inicia. En personas de origen coreano, chino han, tailandés o afrodescendientes, pide primero el HLA-B cincuenta y ocho cero uno, por el riesgo de Stevens-Johnson. Empieza con cien miligramos o menos y sube cada dos a cinco semanas. Da profilaxis con colchicina de tres a seis meses. Y si hay un ataque, no lo suspendas.' },
          { v: { k: 'list', t: 'Otros fármacos', items: ['Febuxostat: evitar con ECV (CARES)', 'Probenecid: no en litiasis ni ERC', 'Pegloticasa: refractaria; no con déficit de G6PD', 'Losartán: baja un poco el urato', 'Alopurinol + azatioprina: peligro'] },
            say: 'Las alternativas. El febuxostat también inhibe la xantina oxidasa, pero se asoció a más muerte cardiovascular: evítalo si hay enfermedad cardiovascular. El probenecid es uricosúrico: no sirve con litiasis ni con enfermedad renal. La pegloticasa es para gota refractaria y no se usa con deficiencia de glucosa seis fosfato deshidrogenasa. Si puedes, cambia la tiazida por losartán.' },
          { v: { k: 'quiz', q: 'Ya toma alopurinol con buen control y le da un ataque. ¿Qué haces con el alopurinol?', opts: ['Suspenderlo hasta que pase', 'Mantenerlo y tratar el ataque'], a: 1 },
            say: 'Pausa. Un paciente que ya toma alopurinol tiene un ataque. ¿Qué haces con el alopurinol?',
            exp: 'Lo mantienes igual y tratas el ataque. Suspenderlo hace que el urato oscile y provoca más ataques.' }
        ] },
        { ch: 'Pseudogota y trampas', sc: [
          { v: { k: 'vs', cmp: 'gota-pseudo', rows: [4, 5, 7] },
            say: 'La pseudogota es el depósito de cristales de pirofosfato de calcio. Es de adultos mayores, en la rodilla y la muñeca, y a veces aparece después de una cirugía. En la radiografía ves condrocalcinosis: calcio lineal en los meniscos. No hay un fármaco que disuelva esos cristales; solo tratas los ataques.' },
          { v: { k: 'mnemo', t: 'Agujas Amarillas Negativas = gota', d: 'Romboides Positivos = pseudogota. Pseudogota antes de los 60: busca las 4 H (Hiperparatiroidismo, Hemocromatosis, Hipomagnesemia, Hipofosfatasia).' },
            say: 'Para no confundirte: agujas amarillas negativas, gota. Romboides positivos, pseudogota. Y si la pseudogota aparece antes de los sesenta años, busca las cuatro haches: hiperparatiroidismo, hemocromatosis, hipomagnesemia e hipofosfatasia.' },
          { v: { k: 'tip', kind: 'pearl', t: 'Ataque: elige por el paciente. Alopurinol: dosis baja, titula a urato <6, profilaxis 3–6 meses y nunca lo suspendas en un ataque.' },
            say: 'La perla para el examen: el ataque se trata según el paciente, y el alopurinol se inicia bajo, se titula hasta un urato menor de seis, con profilaxis, y nunca se suspende durante un ataque. Ahora ve a las preguntas del tema para fijar lo que viste.' }
        ] }
      ],
      sections: [
        { h: 'Fisiopatología', html: `
<ul>
<li>El urato se satura por arriba de <b>6.8 mg/dL</b> y precipita como cristales de urato monosódico.</li>
<li>~90% por <b>baja excreción renal</b>; ~10% por sobreproducción (lisis tumoral, mieloproliferativos, psoriasis, Lesch-Nyhan).</li>
<li><b>Factores</b>: alcohol (sobre todo cerveza), carnes rojas, mariscos, refrescos con fructosa, obesidad, síndrome metabólico, ERC, diuréticos (tiazidas y de asa), aspirina a dosis baja, ciclosporina, pirazinamida, etambutol.</li>
<li><b>Desencadenantes</b> de ataque: cambios bruscos del urato (incluido iniciar alopurinol), cirugía, deshidratación, borrachera, trauma.</li>
<li>Los cristales activan el inflamasoma NLRP3 de los macrófagos → IL-1β → ataque inflamatorio intenso.</li>
</ul>` },
        { h: 'Clínica y diagnóstico', html: `
<ul>
<li><b>Podagra</b> (1ª MTF): monoartritis aguda, muy dolorosa, roja y caliente, típicamente nocturna. También tobillo, rodilla, muñeca.</li>
<li><b>Tofos</b> (pabellón auricular, codos, Aquiles), gota tofácea crónica; litiasis de ácido úrico (radiolúcida); nefropatía por urato.</li>
<li><b>Artrocentesis</b>: cristales en aguja con <b>birrefringencia negativa</b> (amarillos paralelos al eje del compensador). Siempre Gram y cultivo: gota e infección pueden coexistir.</li>
<li>El ácido úrico sérico puede estar normal durante el ataque: no lo descarta.</li>
<li><b>Imagen</b>: Rx tardía con erosiones en “sacabocado” de borde colgante; USG con signo del doble contorno; TC de doble energía.</li>
</ul>` },
        { h: 'Ataque agudo', html: `
<ul>
<li>Tratar en las primeras 24 h. Elige según el paciente:</li>
<li><b>Colchicina a dosis baja</b>: 1.2 mg y 0.6 mg una hora después (dosis total 1.8 mg). Ajustar en ERC; interacción grave con claritromicina y otros inhibidores de CYP3A4/P-gp.</li>
<li><b>AINE a dosis plenas</b> (naproxeno, indometacina): evitarlos en ERC, úlcera, IC o anticoagulación.</li>
<li><b>Glucocorticoides</b>: prednisona 30–40 mg/día por 5 días, o intraarticular. Útiles en ERC o cuando no puede recibir AINE ni colchicina.</li>
<li>Refractarios: anti-IL-1 (anakinra, canakinumab).</li>
<li><b>No suspendas el alopurinol</b> si ya lo toma. El ACR 2020 permite iniciarlo durante el ataque.</li>
</ul>` },
        { h: 'Terapia para bajar el urato', html: `
<ul>
<li><b>Indicaciones fuertes</b> (ACR 2020): ≥1 tofo, daño radiográfico por gota o ≥2 ataques al año.</li>
<li><b>Condicionales</b>: más de 1 ataque previo pero &lt;2 al año; primer ataque con ERC ≥3, urato &gt;9 mg/dL o litiasis urinaria.</li>
<li><b>Alopurinol</b> (inhibe la xantina oxidasa) es de primera línea, incluso en ERC: iniciar ≤100 mg/día (menos en ERC avanzada) y subir cada 2–5 semanas hasta la meta.</li>
<li><b>Meta: urato &lt;6 mg/dL</b> (&lt;5 si hay tofos, según EULAR).</li>
<li><b>Profilaxis antiinflamatoria</b> (colchicina, AINE o prednisona a dosis baja) por 3–6 meses al iniciar.</li>
<li><b>HLA-B*58:01</b> antes del alopurinol en personas de origen coreano, chino han, tailandés o afrodescendientes (riesgo de Stevens-Johnson, NET o DRESS).</li>
<li><b>Febuxostat</b>: alternativa; advertencia de mortalidad cardiovascular (CARES): evitar si hay ECV. <b>Probenecid</b>: uricosúrico; no en litiasis ni ERC. <b>Pegloticasa</b>: gota refractaria; contraindicada en déficit de G6PD.</li>
<li>Losartán y fenofibrato bajan un poco el urato; cambia la tiazida si se puede.</li>
<li>Litiasis de ácido úrico: alcalinizar la orina con citrato de potasio.</li>
</ul>` },
        { h: 'Pseudogota (CPPD)', html: `
<ul>
<li>Cristales de pirofosfato de calcio <b>romboides con birrefringencia positiva débil</b> (azules paralelos al compensador).</li>
<li>Adultos mayores; rodilla y muñeca. Rx: <b>condrocalcinosis</b> (meniscos, fibrocartílago triangular).</li>
<li>Si aparece antes de los 60 años, busca causas: <b>hiperparatiroidismo, hemocromatosis, hipomagnesemia, hipofosfatasia</b>.</li>
<li>Ataque: AINE, colchicina o esteroide intraarticular. No hay tratamiento que disuelva los cristales.</li>
</ul>` },
        { h: 'Diagnóstico diferencial de la monoartritis aguda', html: `
<div class="tablewrap"><table class="mini">
<tr><th>Causa</th><th>Pista</th><th>Líquido sinovial</th></tr>
<tr><td><b>Gota</b></td><td>1ª MTF, hombre, diuréticos, alcohol</td><td>Inflamatorio; agujas con birrefringencia negativa</td></tr>
<tr><td><b>CPPD</b></td><td>Adulto mayor, rodilla o muñeca, condrocalcinosis, posoperatorio</td><td>Inflamatorio; romboides con birrefringencia positiva débil</td></tr>
<tr><td><b>Artritis séptica</b></td><td>Fiebre, prótesis, inmunosupresión, drogas IV; <i>S. aureus</i></td><td>Purulento, &gt;50,000 leucocitos con &gt;90% neutrófilos; Gram y cultivo positivos</td></tr>
<tr><td><b>Gonocócica</b></td><td>Joven sexualmente activo, tenosinovitis, pústulas</td><td>Cultivo a menudo negativo: busca en mucosas (PCR o cultivo)</td></tr>
<tr><td><b>Hemartrosis</b></td><td>Trauma, anticoagulante, hemofilia</td><td>Sangre</td></tr>
<tr><td><b>Celulitis o bursitis</b></td><td>Eritema sin derrame; bursa olecraneana o prerrotuliana</td><td>Sin derrame articular</td></tr>
</table></div>
<p>La gota puede dar &gt;50,000 leucocitos y una artritis séptica puede tener cristales: ante la duda, antibiótico y cultivo.</p>` },
        { h: 'Fármacos clave', html: `
<div class="tablewrap"><table class="mini">
<tr><th>Fármaco</th><th>Mecanismo</th><th>Efecto adverso clave</th><th>Contraindicación / precaución</th></tr>
<tr><td><b>Colchicina</b></td><td>Inhibe la polimerización de microtúbulos (neutrófilos)</td><td>Diarrea; miopatía y mielosupresión si se acumula</td><td>Claritromicina, ciclosporina y otros inhibidores de CYP3A4/P-gp; ajustar en ERC</td></tr>
<tr><td><b>AINE</b> (naproxeno, indometacina)</td><td>Inhiben la COX</td><td>Úlcera, lesión renal, retención de líquidos</td><td>ERC, úlcera, IC, anticoagulación</td></tr>
<tr><td><b>Glucocorticoides</b></td><td>Antiinflamatorio amplio</td><td>Hiperglucemia, rebote si se retiran rápido</td><td>Infección articular (intraarticular); DM descontrolada</td></tr>
<tr><td><b>Alopurinol</b></td><td>Inhibe la xantina oxidasa</td><td>Exantema; SJS/NET/DRESS (HLA-B*58:01)</td><td>Azatioprina y 6-mercaptopurina: mielotoxicidad (reducir su dosis ~75% o evitar)</td></tr>
<tr><td><b>Febuxostat</b></td><td>Inhibe la xantina oxidasa (no purínico)</td><td>Más mortalidad CV (CARES), transaminasas</td><td>Enfermedad CV establecida; azatioprina</td></tr>
<tr><td><b>Probenecid</b></td><td>Uricosúrico (inhibe URAT1)</td><td>Litiasis de ácido úrico</td><td>Litiasis, ERC moderada o grave</td></tr>
<tr><td><b>Pegloticasa</b></td><td>Uricasa: convierte urato en alantoína</td><td>Reacciones a la infusión, anticuerpos</td><td>Déficit de G6PD (hemólisis, metahemoglobinemia)</td></tr>
<tr><td><b>Anakinra, canakinumab</b></td><td>Bloquean la IL-1</td><td>Infecciones</td><td>Infección activa</td></tr>
</table></div>` },
        { h: 'Cómo lo preguntan en el examen', html: `
<ul>
<li>Hombre con podagra nocturna tras alcohol o carne → <b>artrocentesis</b> (cristales + Gram y cultivo).</li>
<li>Agujas negativas vs romboides positivos con condrocalcinosis en un adulto mayor → <b>gota vs CPPD</b>.</li>
<li>Ataque con ERC y úlcera → <b>glucocorticoide</b>; con claritromicina → <b>no colchicina</b>.</li>
<li>Ataque en quien ya toma alopurinol → <b>no suspenderlo</b>. Urato alto sin ataques → <b>no tratar con fármacos</b>.</li>
<li>Tofo o ≥2 ataques al año → <b>alopurinol</b> en dosis baja, titulado a urato &lt;6, con profilaxis 3–6 meses.</li>
<li>Gota + IAM previo → <b>evita febuxostat</b>. Gota + azatioprina → <b>alopurinol solo con reducción de azatioprina</b>. CPPD en &lt;60 años → <b>las 4 H</b>.</li>
</ul>` }
      ],
      mnemo: { t: 'Agujas Amarillas Negativas = gota · Romboides Positivos = pseudogota', d: 'Urato: agujas, birrefringencia negativa, amarillas paralelas al compensador. Pirofosfato: romboides, positiva débil, azules paralelos. Para buscar causas de CPPD: las 4 H (Hiperparatiroidismo, Hemocromatosis, Hipomagnesemia, Hipofosfatasia).' },
      pearl: 'Un ácido úrico normal durante el ataque no descarta gota: puede bajar por la inflamación. El diagnóstico se hace con los cristales.',
      trap: 'Suspender el alopurinol durante un ataque o no dar profilaxis con colchicina al iniciarlo: ambas cosas provocan más ataques.',
      guide: [
        'Iniciar alopurinol durante el ataque: el ACR 2020 lo permite (recomendación condicional); libros antiguos dicen “esperar 2 semanas”. Si te preguntan con la guía actual, se puede iniciar.',
        'Meta de urato: ACR <6 mg/dL; EULAR <6 y <5 si hay tofos.',
        '⚠️ Depende de la guía · Colchicina en el ataque: ACR 2020 usa 1.2 mg y 0.6 mg una hora después (tabletas de 0.6 mg de EE. UU.); EULAR 2016 da 1 mg y 0.5 mg una hora después (tabletas que hay en México). Ambas son “dosis baja” y temprana.'
      ],
      refs: [
        'FitzGerald JD, et al. 2020 American College of Rheumatology Guideline for the Management of Gout. Arthritis Care Res 2020.',
        'Richette P, et al. 2016 updated EULAR evidence-based recommendations for the management of gout. Ann Rheum Dis 2017.',
        'Rosenthal AK, Ryan LM. Calcium Pyrophosphate Deposition Disease. N Engl J Med 2016.'
      ]
    }
  },

  compares: {
    'gota-pseudo': {
      topic: 'gota', a: 'Gota', b: 'Pseudogota (CPPD)',
      rows: [
        ['Cristal', 'Urato monosódico', 'Pirofosfato de calcio'],
        ['Forma', 'Aguja', 'Romboide'],
        ['Birrefringencia', 'Negativa, intensa', 'Positiva, débil'],
        ['Articulación típica', '1ª MTF (podagra)', 'Rodilla, muñeca'],
        ['Edad y perfil', 'Hombre de edad media, síndrome metabólico', 'Adulto mayor'],
        ['Rx', 'Erosiones en sacabocado con borde colgante', 'Condrocalcinosis'],
        ['Asociaciones', 'Alcohol, diuréticos, ERC, obesidad', 'Hiperparatiroidismo, hemocromatosis, hipomagnesemia, hipofosfatasia'],
        ['Tratamiento a largo plazo', 'Alopurinol con meta de urato <6', 'No hay tratamiento que disuelva cristales']
      ]
    }
  },

  anims: {
    gota: {
      title: 'Cristales, inflamación y alopurinol',
      steps: [
        { cap: '<b>Urato en exceso.</b> Las purinas se convierten en xantina y luego en ácido úrico gracias a la xantina oxidasa. Por arriba de 6.8 mg/dL el urato ya no cabe disuelto.',
          labels: [[30, 14, 'Purinas'], [80, 14, 'Xantina oxidasa'], [130, 14, 'Ácido úrico']] },
        { cap: '<b>Precipitación.</b> En articulaciones frías y periféricas (el dedo gordo del pie), el urato cristaliza en forma de agujas dentro del líquido sinovial.',
          labels: [[80, 104, 'Cristales en aguja'], [24, 60, '1ª MTF']] },
        { cap: '<b>Ataque.</b> Los macrófagos fagocitan los cristales y activan el inflamasoma: liberan IL-1β y llegan neutrófilos. La articulación se pone roja, caliente y muy dolorosa.',
          labels: [[40, 40, 'Macrófago'], [120, 40, 'IL-1β'], [80, 104, 'Neutrófilos']] },
        { cap: '<b>Colchicina.</b> Bloquea los microtúbulos de los neutrófilos: no pueden migrar ni amplificar la inflamación. Por eso funciona mejor en las primeras horas.',
          labels: [[80, 104, 'Microtúbulos ✕'], [120, 40, 'Menos inflamación']] },
        { cap: '<b>Alopurinol.</b> Inhibe la xantina oxidasa: se forma menos ácido úrico y, con el tiempo, los cristales se disuelven. Meta: urato <6 mg/dL.',
          labels: [[80, 14, 'Xantina oxidasa ✕'], [130, 104, 'Urato <6']] }
      ]
    }
  },

  cards: [
    ['Cristal de la gota', 'Urato monosódico: aguja, birrefringencia negativa'],
    ['Cristal de la pseudogota', 'Pirofosfato de calcio: romboide, birrefringencia positiva débil'],
    ['Colchicina en el ataque', '1.2 mg y 0.6 mg una hora después; cuidado con claritromicina'],
    ['Ataque de gota en un paciente con ERC y úlcera', 'Glucocorticoide oral o intraarticular'],
    ['¿Suspender alopurinol en un ataque?', 'No'],
    ['Indicaciones fuertes de terapia hipouricemiante', '≥1 tofo, daño radiográfico o ≥2 ataques al año'],
    ['Meta de urato', '<6 mg/dL (<5 si hay tofos, EULAR)'],
    ['Al iniciar alopurinol', 'Dosis baja, titular, y profilaxis con colchicina 3–6 meses'],
    ['HLA-B*58:01', 'Antes del alopurinol en coreanos, chinos han, tailandeses, afrodescendientes'],
    ['Febuxostat', 'Advertencia cardiovascular (CARES)'],
    ['Antihipertensivo que baja el urato', 'Losartán'],
    ['4 H de la pseudogota', 'Hiperparatiroidismo, hemocromatosis, hipomagnesemia, hipofosfatasia'],
    ['Rx de la gota crónica', 'Erosiones en sacabocado con borde colgante'],
    ['Litiasis de ácido úrico', 'Radiolúcida; alcalinizar con citrato de potasio'],
    ['Alopurinol + azatioprina', 'Mielosupresión grave: la xantina oxidasa ya no inactiva la 6-mercaptopurina (reducir la azatioprina o evitar)'],
    ['Hiperuricemia asintomática (ACR 2020)', 'No iniciar terapia hipouricemiante'],
    ['Signo del doble contorno en el USG', 'Urato sobre la superficie del cartílago: gota (en CPPD el calcio está dentro del cartílago)'],
    ['Pegloticasa: contraindicación', 'Déficit de G6PD (hemólisis y metahemoglobinemia)'],
    ['Ataque de CPPD en una sola rodilla', 'Artrocentesis evacuadora + esteroide intraarticular (Gram y cultivo negativos)']
  ],

  questions: [
    q({ id: 'gota-01', dif: 1,
      stem: 'Mujer de 78 años con monoartritis aguda de la rodilla. Rx: calcificación lineal en los meniscos. Artrocentesis: cristales romboides con birrefringencia positiva débil. ¿Diagnóstico?',
      opts: ['Gota', 'Enfermedad por depósito de pirofosfato de calcio (pseudogota)', 'Artritis séptica', 'Osteoartritis sin inflamación', 'Artritis reumatoide'],
      ans: 1,
      exp: 'Cristales romboides con birrefringencia positiva débil + condrocalcinosis en un adulto mayor = CPPD. La gota tiene agujas con birrefringencia negativa.',
      why: ['Los cristales de la gota son agujas negativas.', '', 'Requiere Gram o cultivo positivos; los cristales explican el cuadro (aunque siempre se cultiva).', 'Hay inflamación aguda y cristales.', 'No es monoartritis con cristales.'],
      ref: 'Rosenthal AK, NEJM 2016' }),

    q({ id: 'gota-02', dif: 2,
      stem: 'Hombre de 68 años con ERC G4 y úlcera péptica reciente. Ataque de gota en el tobillo desde hace 12 h. ¿Mejor opción?',
      opts: ['Indometacina a dosis plenas', 'Colchicina a dosis altas', 'Prednisona oral (o esteroide intraarticular)', 'Iniciar alopurinol 300 mg sin antiinflamatorio', 'Naproxeno + omeprazol'],
      ans: 2,
      exp: 'Con ERC avanzada y úlcera, los AINE están contraindicados y la colchicina requiere ajuste importante (riesgo de toxicidad). Los glucocorticoides (orales o intraarticulares) son la opción más segura.',
      why: ['Contraindicado por ERC y úlcera.', 'Riesgo de toxicidad en ERC.', '', 'No trata el ataque.', 'Sigue siendo riesgoso con ERC G4.'],
      ref: 'ACR 2020' }),

    q({ id: 'gota-03', dif: 2,
      stem: 'Hombre de 55 años con gota que toma colchicina 0.6 mg/día como profilaxis. Le indican claritromicina por neumonía. A los 4 días: diarrea, debilidad muscular, CK alta y leucopenia. ¿Qué pasó?',
      opts: ['Neumonía grave', 'Toxicidad por colchicina por interacción con claritromicina (inhibidor de CYP3A4 y P-gp)', 'Gota poliarticular', 'Reacción alérgica a la claritromicina', 'Rabdomiólisis por el ejercicio'],
      ans: 1,
      exp: 'La claritromicina eleva mucho los niveles de colchicina: diarrea, miopatía, mielosupresión y puede ser mortal. Se suspende la colchicina o se elige otro antibiótico (p. ej., azitromicina, con menor interacción).',
      why: ['No explica la miopatía y la leucopenia.', '', 'No es el cuadro.', 'No da miopatía ni leucopenia.', 'No hay antecedente.'],
      ref: 'FDA colchicina · ACR 2020' }),

    q({ id: 'gota-04', dif: 1,
      stem: 'Hombre en alopurinol 300 mg con buen control presenta un ataque de gota. ¿Qué haces con el alopurinol?',
      opts: ['Suspenderlo hasta que pase el ataque', 'Continuarlo y tratar el ataque', 'Duplicar la dosis de inmediato', 'Cambiarlo por probenecid', 'Suspenderlo para siempre'],
      ans: 1,
      exp: 'Suspender el alopurinol causa oscilaciones del urato y más ataques. Se mantiene igual y se trata el ataque con colchicina, AINE o esteroide.',
      why: ['Empeora el control.', '', 'No es el momento de ajustarlo bruscamente.', 'No hay motivo.', 'Lo dejaría sin control.'],
      ref: 'ACR 2020' }),

    q({ id: 'gota-05', dif: 2,
      stem: 'Hombre de 50 años con 3 ataques de gota este año y un tofo en el codo. Urato 9.4 mg/dL, TFG 70. ¿Qué indicas?',
      opts: ['Solo colchicina en cada ataque', 'Alopurinol en dosis baja con aumento progresivo hasta urato <6, más profilaxis con colchicina 3–6 meses', 'Alopurinol 600 mg desde el primer día', 'Probenecid y dieta', 'Febuxostat de primera línea'],
      ans: 1,
      exp: 'Tiene indicaciones fuertes (tofo y ≥2 ataques/año). Alopurinol iniciado bajo (≤100 mg) y titulado cada 2–5 semanas hasta la meta, con profilaxis antiinflamatoria para evitar ataques al bajar el urato.',
      why: ['No previene el daño a largo plazo.', '', 'Iniciar alto aumenta ataques y reacciones adversas.', 'El alopurinol es primera línea.', 'Es alternativa, no primera línea.'],
      ref: 'ACR 2020' }),

    q({ id: 'gota-06', dif: 1,
      stem: '¿Cuál es la meta de urato sérico en un paciente con gota en tratamiento?',
      opts: ['<8 mg/dL', '<7 mg/dL', '<6 mg/dL', '<3 mg/dL', 'Normalizarlo sin meta'],
      ans: 2,
      exp: 'Por debajo de 6 mg/dL los cristales se disuelven con el tiempo. EULAR propone <5 mg/dL si hay tofos o enfermedad grave.',
      why: ['Está por arriba del punto de saturación.', 'Insuficiente para disolver cristales.', '', 'No se busca tan bajo de forma rutinaria.', 'Sí hay meta definida.'],
      ref: 'ACR 2020 · EULAR 2016' }),

    q({ id: 'gota-07', dif: 2,
      stem: 'Hombre de 45 años de origen coreano que va a iniciar alopurinol. ¿Qué estudio debes pedir antes?',
      opts: ['G6PD', 'HLA-B*58:01', 'HLA-B27', 'TPMT', 'Ninguno'],
      ans: 1,
      exp: 'El HLA-B*58:01 se asocia a reacciones graves por alopurinol (Stevens-Johnson, NET, DRESS). Es frecuente en personas de origen coreano, chino han, tailandés y afrodescendientes; si es positivo, se usa otro fármaco.',
      why: ['Se pide antes de pegloticasa o rasburicasa.', '', 'Se asocia a espondiloartritis.', 'Se pide antes de azatioprina.', 'En este grupo está recomendado.'],
      ref: 'ACR 2020' }),

    q({ id: 'gota-08', dif: 1,
      stem: 'Hombre hipertenso tratado con hidroclorotiazida, con gota recurrente. ¿Qué antihipertensivo prefieres?',
      opts: ['Furosemida', 'Losartán', 'Clortalidona', 'Hidroclorotiazida a mayor dosis', 'Ninguno'],
      ans: 1,
      exp: 'Los diuréticos elevan el urato. El losartán tiene efecto uricosúrico y es buena opción para HTA en gota (también calcioantagonistas).',
      why: ['También eleva el urato.', '', 'Es otra tiazida.', 'Empeora la gota.', 'Necesita control de su HTA.'],
      ref: 'ACR 2020' }),

    q({ id: 'gota-09', dif: 2,
      stem: 'Hombre de 66 años con IAM previo y gota con indicación de terapia hipouricemiante. ¿Qué fármaco evitarías?',
      opts: ['Alopurinol', 'Febuxostat', 'Colchicina profiláctica', 'Losartán', 'Prednisona en el ataque'],
      ans: 1,
      exp: 'En CARES el febuxostat se asoció a mayor mortalidad cardiovascular que el alopurinol en pacientes con ECV. Se prefiere alopurinol.',
      why: ['Es la primera línea.', '', 'Es segura con dosis ajustada.', 'Es útil en HTA con gota.', 'Es útil en el ataque.'],
      ref: 'White WB, et al. CARES, NEJM 2018' }),

    q({ id: 'gota-10', dif: 1,
      stem: 'Hombre con podagra típica. Ácido úrico sérico durante el ataque: 5.8 mg/dL. ¿Qué concluyes?',
      opts: ['No es gota', 'El urato puede ser normal durante el ataque: confirmar con cristales', 'Es pseudogota', 'Es artritis séptica', 'Es artritis reumatoide'],
      ans: 1,
      exp: 'Durante el ataque el urato puede bajar o ser normal. El diagnóstico se basa en los cristales; si no hay artrocentesis, se usa el criterio clínico y se repite el urato 2–4 semanas después.',
      why: ['Un urato normal no la descarta.', '', 'Sin cristales no puedes afirmarlo.', 'No hay datos de infección descritos.', 'No encaja.'],
      ref: 'ACR/EULAR 2015 clasificación de gota' }),

    q({ id: 'gota-11', dif: 3,
      stem: 'Hombre de 58 años con fiebre de 39 °C y rodilla muy inflamada. Líquido sinovial: 120 000 leucocitos/µL con 95% neutrófilos y cristales de urato. ¿Qué haces?',
      opts: ['Tratar solo la gota', 'Considerar artritis séptica coexistente: Gram y cultivo, antibióticos empíricos y drenaje articular', 'Dar alopurinol', 'Observar 48 h', 'Infiltrar esteroide'],
      ans: 1,
      exp: 'Los cristales no descartan infección. Con >50 000 leucocitos y fiebre alta, se trata como artritis séptica hasta tener cultivos: antibióticos empíricos y drenaje.',
      why: ['Si es séptica, la articulación se destruye en días.', '', 'No es el problema urgente.', 'La infección no espera.', 'Contraindicado si puede ser séptica.'],
      ref: 'EULAR · Reumatología clínica' }),

    q({ id: 'gota-12', dif: 2,
      stem: 'Mujer de 45 años con pseudogota en ambas rodillas. ¿Qué estudios pides para buscar una causa?',
      opts: ['Ninguno', 'Calcio, PTH, ferritina y saturación de transferrina, magnesio y fosfatasa alcalina', 'Anti-CCP', 'HLA-B27', 'ANA'],
      ans: 1,
      exp: 'La CPPD en menores de 60 años obliga a buscar hiperparatiroidismo, hemocromatosis, hipomagnesemia e hipofosfatasia.',
      why: ['En pacientes jóvenes hay que buscar causas.', '', 'Es de AR.', 'Es de espondiloartritis.', 'Es de LES.'],
      ref: 'Rosenthal AK, NEJM 2016' }),

    q({ id: 'gota-13', dif: 1,
      stem: 'Rx del pie de un hombre con gota de 15 años: erosiones en “sacabocado” con borde óseo colgante cerca de la 1ª MTF. ¿Qué indican?',
      opts: ['Osteoartritis', 'Gota crónica tofácea', 'Artritis reumatoide', 'Osteomielitis', 'Artritis psoriásica'],
      ans: 1,
      exp: 'Las erosiones en sacabocado con borde sobresaliente (overhanging edge) son típicas de la gota crónica tofácea y son indicación de terapia hipouricemiante.',
      why: ['Da osteofitos y espacio reducido.', '', 'Da erosiones marginales sin borde colgante y osteopenia.', 'Daría destrucción con reacción perióstica y clínica infecciosa.', 'Da “lápiz en copa”.'],
      ref: 'Radiología musculoesquelética' }),

    q({ id: 'gota-14', dif: 2,
      stem: 'Hombre con gota y cólico renal. El lito no se ve en la Rx simple pero sí en la TC. ¿De qué es probablemente el lito y cómo se previene?',
      opts: ['Oxalato de calcio; restringir calcio', 'Ácido úrico; alcalinizar la orina con citrato de potasio, hidratación y alopurinol', 'Estruvita; antibióticos', 'Cistina; penicilamina', 'Fosfato de calcio; tiazida'],
      ans: 1,
      exp: 'Los litos de ácido úrico son radiolúcidos en la Rx simple y se forman en orina ácida. Se previenen alcalinizando la orina (pH 6–6.5), con mucha agua y bajando el urato.',
      why: ['Son radioopacos, y restringir calcio no se recomienda.', '', 'Asociada a infección por bacterias ureolíticas.', 'Es una enfermedad hereditaria rara.', 'Son radioopacos.'],
      ref: 'AUA/EAU litiasis' }),

    q({ id: 'gota-15', dif: 2,
      stem: 'Hombre de 52 años que inició alopurinol 300 mg sin profilaxis. Al mes tiene dos ataques de gota y dice “el alopurinol me empeoró”. ¿Qué explicas y haces?',
      opts: ['Suspender el alopurinol definitivamente', 'Los ataques son por la movilización del urato al iniciarlo: mantener el alopurinol (idealmente desde dosis baja), tratar el ataque y dar profilaxis con colchicina 3–6 meses', 'Cambiar a febuxostat', 'Es alergia al alopurinol', 'Agregar otra tiazida'],
      ans: 1,
      exp: 'Bajar el urato bruscamente moviliza cristales y provoca ataques. Por eso se inicia a dosis baja, se titula y se da profilaxis antiinflamatoria los primeros meses.',
      why: ['Es un efecto esperado, no una falla.', '', 'Tendría el mismo efecto y no está indicado por esto.', 'No hay datos de alergia.', 'Empeora el urato.'],
      ref: 'ACR 2020' }),

    q({ id: 'gota-16', dif: 3,
      stem: 'Hombre de 50 años con enfermedad de Crohn controlada con azatioprina. Por gota tofácea inicia alopurinol 100 mg/día sin otros cambios. A las 4 semanas tiene fiebre, úlceras orales y neutrófilos de 300/µL, sin exantema. ¿Qué explica el cuadro?',
      opts: ['Reacción DRESS al alopurinol', 'Acumulación de 6-mercaptopurina por inhibición de la xantina oxidasa', 'Brote de Crohn', 'Deficiencia de vitamina B12', 'Síndrome de lisis tumoral'],
      ans: 1,
      exp: 'La azatioprina se convierte en 6-mercaptopurina, que se inactiva por la xantina oxidasa. Al bloquearla con alopurinol (o febuxostat) se acumulan los metabolitos activos y aparece mielosupresión grave. Si es indispensable combinarlos, se reduce la azatioprina ~75% con vigilancia estrecha de la BH.',
      why: ['Daría exantema, eosinofilia y afección hepática o renal, no aplasia aislada.', '', 'No causa neutropenia profunda.', 'Daría macrocitosis y anemia, no neutropenia aguda en semanas.', 'No hay neoplasia ni tratamiento citotóxico.'],
      ref: 'ACR 2020 · ficha técnica del alopurinol' }),

    q({ id: 'gota-17', dif: 2,
      stem: 'Mujer de 80 años en el día 2 posoperatorio de fractura de cadera. Su rodilla derecha amanece caliente y con derrame. Líquido: 18 000 leucocitos/µL, cristales romboides con birrefringencia positiva débil, Gram negativo. Rx: condrocalcinosis. ¿Tratamiento?',
      opts: ['Alopurinol', 'Artrocentesis evacuadora con esteroide intraarticular', 'Antibióticos por 6 semanas', 'Colchicina a dosis altas por 1 mes', 'Febuxostat'],
      ans: 1,
      exp: 'Ataque agudo de CPPD (pseudogota), típico tras cirugía o enfermedad aguda. Con una sola articulación grande, drenar e infiltrar esteroide es ideal (cultivo pendiente); alternativas: colchicina a dosis baja, AINE con cautela o esteroide oral. Los hipouricemiantes no sirven: el cristal no es urato.',
      why: ['No disuelve cristales de pirofosfato.', '', 'Gram negativo, cristales y condrocalcinosis explican el cuadro; el cultivo se sigue.', 'Las dosis altas son tóxicas, sobre todo en ancianas.', 'No disuelve cristales de pirofosfato.'],
      ref: 'Rosenthal AK, NEJM 2016 · EULAR CPPD 2011' }),

    q({ id: 'gota-18', dif: 2,
      stem: 'Hombre de 45 años con urato de 9.2 mg/dL en un chequeo. Nunca ha tenido ataques, tofos ni litos. TFG normal. ¿Qué haces?',
      opts: ['Alopurinol hasta urato <6', 'No iniciar fármaco: estilo de vida y revisar medicamentos que elevan el urato', 'Febuxostat', 'Colchicina profiláctica', 'Probenecid'],
      ans: 1,
      exp: 'La hiperuricemia asintomática no se trata con fármacos (ACR 2020, recomendación condicional en contra): la mayoría nunca tendrá gota y el beneficio no compensa el riesgo. Se corrigen peso, alcohol, refrescos y fármacos como tiazidas.',
      why: ['No hay indicación sin gota, tofos ni litos.', '', 'Tampoco está indicado, y tiene advertencia CV.', 'No hay ataques que prevenir.', 'No hay indicación.'],
      ref: 'ACR 2020' }),

    q({ id: 'gota-19', dif: 2,
      stem: 'Hombre de 56 años con monoartritis recurrente de rodilla; no se logró la artrocentesis. El USG muestra una línea hiperecoica irregular sobre la superficie del cartílago, paralela al hueso. ¿Qué indica?',
      opts: ['Condrocalcinosis por pirofosfato', 'Depósito de urato (signo del doble contorno): gota', 'Sinovitis reumatoide', 'Osteofitos', 'Derrame séptico'],
      ans: 1,
      exp: 'El signo del doble contorno es urato depositado sobre la superficie del cartílago hialino: apoya fuertemente gota. En la CPPD los depósitos hiperecoicos están dentro del cartílago.',
      why: ['En la CPPD el calcio está dentro del cartílago, no sobre su superficie.', '', 'Daría engrosamiento sinovial con Doppler positivo, no una línea sobre el cartílago.', 'Están en los márgenes óseos.', 'Daría líquido ecogénico, no una línea sobre el cartílago.'],
      ref: 'ACR/EULAR 2015 clasificación de gota' }),

    q({ id: 'gota-20', dif: 2,
      stem: 'Hombre de 58 años con gota tofácea en alopurinol 100 mg/día desde hace 6 meses, sin ataques recientes y con buen apego. TFG 75. Urato 7.8 mg/dL. ¿Qué haces?',
      opts: ['Mantener la dosis: ya no tiene ataques', 'Subir el alopurinol de forma gradual hasta urato <6 (menos de 5 por los tofos según EULAR)', 'Cambiar a febuxostat', 'Suspender el alopurinol porque falló', 'Agregar colchicina sin cambiar el alopurinol'],
      ans: 1,
      exp: 'Se trata a una meta, no a una dosis: el alopurinol se titula (p. ej., 100 mg cada 2–5 semanas, hasta 800 mg/día si se tolera) hasta urato <6. Muchos pacientes quedan con dosis insuficientes.',
      why: ['Sin llegar a la meta los tofos no se disuelven.', '', 'Solo si no tolera el alopurinol o no llega a la meta con la dosis máxima.', 'No falló: la dosis es baja.', 'La profilaxis no baja el urato.'],
      ref: 'ACR 2020 · EULAR 2016' })
  ],

  cases: [
    { id: 'g-gota', topic: 'gota', subj: 'reuma',
      title: 'El dedo gordo de don Chuy', place: 'Urgencias',
      patient: { name: 'Jesús', age: 54, sex: 'H', skin: '#B97A52', hair: '#2A1C14', gown: '#4DB8FF' },
      intro: 'Chofer con obesidad, HTA tratada con hidroclorotiazida y ERC G3b. Después de una carne asada con cerveza despertó con el dedo gordo del pie rojo y tan adolorido que no tolera ni la sábana.',
      extra: { label: 'Urato', unit: 'mg/dL' },
      start: { FC: 96, PAS: 148, PAD: 90, SpO2: 98, FR: 18, X: 8.6 },
      nodes: [
        { tag: 'Llegada', ecg: 'normal',
          text: 'Primera MTF derecha roja, caliente y muy dolorosa. Afebril. TFG 38.',
          q: '¿Qué haces primero?',
          A: { t: 'Iniciar alopurinol 300 mg hoy y mandarlo a casa', ok: false, res: 'El dolor sigue igual: el alopurinol no trata el ataque.' },
          B: { t: 'Confirmar con artrocentesis (cristales, Gram y cultivo) y tratar el ataque', ok: true, res: 'Cristales en aguja con birrefringencia negativa; Gram negativo.' },
          why: 'El diagnóstico definitivo es con cristales, y siempre se descarta infección. El alopurinol no trata el ataque.' },
        { tag: 'Tratamiento del ataque', ecg: 'normal',
          text: 'TFG 38 y una úlcera duodenal hace 4 meses.',
          q: '¿Con qué tratas el ataque?',
          A: { t: 'Prednisona 30–40 mg/día por 5 días', ok: true, res: 'A las 48 h el dolor bajó de 10 a 3.' },
          B: { t: 'Indometacina 50 mg c/8 h', ok: false, res: 'Su creatinina sube y tiene dolor epigástrico.' },
          why: 'Con ERC y úlcera reciente, los glucocorticoides son la opción más segura; los AINE están contraindicados y la colchicina requiere ajuste.' },
        { tag: '6 meses después', ecg: 'normal', vit: { X: 9.1 },
          text: 'Tercer ataque este año y un tofo en el pabellón auricular. Urato 9.1 mg/dL.',
          q: '¿Qué indicas a largo plazo?',
          A: { t: 'Alopurinol 50–100 mg/día con aumento progresivo hasta urato <6, profilaxis con colchicina a dosis ajustada y cambiar la hidroclorotiazida por losartán', ok: true, res: 'A los 4 meses: urato 5.4 mg/dL, sin ataques.', vit: { X: 5.4 } },
          B: { t: 'Seguir tratando solo cada ataque', ok: false, res: 'Al año tiene más tofos y erosiones en la Rx.', vit: { X: 9.8 } },
          why: 'Tofo y ≥2 ataques al año = indicación fuerte de alopurinol con meta <6. Profilaxis al iniciar y retirar la tiazida.' }
      ] }
  ]
};
