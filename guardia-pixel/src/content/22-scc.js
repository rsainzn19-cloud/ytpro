// Tema 13 · Síndromes coronarios crónicos (Cardiología, semana 1)
const T = { topic: 'scc', subj: 'cardio' };
const q = (o) => ({ ...T, ...o });

export default {
  lessons: {
    scc: {
      hook: 'Angina estable: decide qué estudio pedir según la probabilidad, qué fármacos mejoran el pronóstico y cuáles solo quitan síntomas, y cuándo revascularizar.',
      nn: [['ischemic-heart-disease', 'Coronary Artery Disease']],
      yt: 'stable angina',
      anim: 'scc',
      video: [
        { ch: 'Aporte contra demanda', sc: [
          { v: { k: 'title', t: 'Síndromes coronarios crónicos', s: 'Tema 13 · Cardiología' },
            say: 'Bienvenido. Hoy toca la angina estable, que la guía europea ahora llama síndrome coronario crónico. Vas a aprender a reconocerla, a elegir el estudio correcto, a tratarla y a saber cuándo revascularizar.' },
          { v: { k: 'case', t: 'Consulta externa', p: { name: 'Rogelio', age: 62, sex: 'H', skin: '#C68E63', hair: '#3A2A20', gown: '#9FB7E0' }, text: 'Opresión retroesternal al subir dos pisos o caminar rápido; cede con 3 min de reposo. Hipertenso y con dislipidemia. ECG en reposo normal.', vit: { PA: '138/84', FC: '78', IMC: '29' } },
            say: 'Rogelio tiene sesenta y dos años, es hipertenso y tiene el colesterol alto. Cuando sube dos pisos siente opresión en el pecho, que se le quita con tres minutos de reposo. Su electrocardiograma en reposo es normal. ¿Qué le pasa?' },
          { v: { k: 'anim', id: 'scc', step: 0 },
            say: 'Rogelio tiene una placa estable en una coronaria: un núcleo de grasa cubierto por una capa fibrosa gruesa, que difícilmente se rompe. La luz está estrecha, pero en reposo el flujo alcanza para lo que el miocardio necesita.' },
          { v: { k: 'anim', id: 'scc', step: 1 },
            say: 'Con el esfuerzo suben la frecuencia, la contractilidad y la presión. El miocardio pide más oxígeno, pero la placa no deja que el flujo aumente. La demanda supera al aporte y aparecen isquemia subendocárdica, dolor e infradesnivel del ST. Al descansar, todo se corrige.' },
          { v: { k: 'list', t: 'Consumo de O₂ del miocardio', items: ['Frecuencia cardiaca (el principal)', 'Contractilidad', 'Tensión de pared: precarga y poscarga', 'El VI se perfunde en diástole'] },
            say: 'Memoriza qué determina el consumo de oxígeno: la frecuencia cardiaca, que es lo principal, la contractilidad y la tensión de la pared, que depende de la precarga y la poscarga. Y recuerda que el ventrículo izquierdo se perfunde en diástole: la taquicardia la acorta.' }
        ] },
        { ch: '¿Es angina?', sc: [
          { v: { k: 'list', t: 'Angina típica: 3 de 3', items: ['Molestia retroesternal opresiva', 'La desencadena el esfuerzo o el estrés', 'Cede con reposo o nitroglicerina en minutos', '2 de 3: atípica · 0–1: no anginoso'] },
            say: 'La angina típica cumple tres criterios: molestia retroesternal opresiva, desencadenada por el esfuerzo o el estrés emocional, y que cede en minutos con reposo o nitroglicerina. Con dos criterios es atípica, y con uno o ninguno, dolor no anginoso. Rogelio tiene angina típica.' },
          { v: { k: 'vs', a: 'Estable', b: 'Vasoespástica', rows: [['Cuándo', 'Con el esfuerzo, predecible', 'En reposo, de madrugada'], ['ECG en el dolor', 'Infradesnivel del ST', 'Elevación transitoria del ST'], ['Coronarias', 'Placa que estrecha la luz', 'Sin obstrucción fija'], ['Tratamiento', 'Betabloqueador y/o calcioantagonista', 'Calcioantagonista + nitrato']] },
            say: 'No la confundas con la vasoespástica, o de Prinzmetal: aparece en reposo, de madrugada, en fumadores o con cocaína, con elevación transitoria del ST. Se trata con calcioantagonista y nitratos. Y si hay angina con coronarias sin obstrucción, sobre todo en mujeres, piensa en angina microvascular.' },
          { v: { k: 'quiz', q: 'Mujer de 44 años, fumadora: dolor en reposo a las 5 a. m. con ST elevado que se normaliza solo. ¿Qué evitas?', opts: ['Amlodipino', 'Propranolol', 'Nitratos'], a: 1 },
            say: 'Pausa. Mujer de cuarenta y cuatro años, fumadora, con dolor en reposo a las cinco de la mañana y elevación del ST que se normaliza sola. ¿Qué fármaco evitas?',
            exp: 'El propranolol. Es angina vasoespástica, y un betabloqueador no selectivo deja sin oposición la vasoconstricción alfa, lo que empeora el espasmo. Se trata con calcioantagonista y nitratos, y dejando el tabaco.' }
        ] },
        { ch: '¿Qué estudio pido?', sc: [
          { v: { k: 'list', t: 'A todos', items: ['ECG en reposo', 'Ecocardiograma: FEVI y movilidad', 'Lípidos, glucosa o A1c, creatinina', 'Biometría hemática'] },
            say: 'A todos: electrocardiograma en reposo, ecocardiograma para ver la fracción de expulsión y la movilidad, lípidos, glucosa o hemoglobina glucosilada, creatinina y biometría hemática, porque la anemia también provoca angina.' },
          { v: { k: 'flow', t: 'Probabilidad → estudio (ESC 2024)', steps: ['≤5%: no más pruebas', '>5–50%: angio-TC coronaria', '>15–85%: imagen funcional con estrés', '>85% o alto riesgo: coronariografía'] },
            say: 'Luego estimas la probabilidad clínica con la edad, el sexo, el tipo de síntoma y los factores de riesgo. Si es de cinco por ciento o menos, no necesitas más pruebas. Baja o moderada: angiotomografía coronaria. Moderada o alta: prueba funcional con imagen. Muy alta, o con datos de alto riesgo: coronariografía invasiva.' },
          { v: { k: 'anim', id: 'scc', step: 3 },
            say: 'Hay dos formas de buscar la enfermedad. La angiotomografía ve la anatomía: la placa y cuánto estrecha la luz; si sale normal, prácticamente la descarta. Las pruebas funcionales ven la isquemia: con esfuerzo o fármacos aparece un defecto de perfusión, una pared que no se mueve o infradesnivel del ST.' },
          { v: { k: 'list', t: 'ECG basal no interpretable → imagen', items: ['Bloqueo de rama izquierda', 'Marcapasos', 'Wolff-Parkinson-White', 'Digoxina o infradesnivel basal ≥1 mm', '¿No puede caminar? Estrés farmacológico'] },
            say: 'La prueba de esfuerzo con electrocardiograma es menos sensible y no sirve si el trazo basal no se puede interpretar: bloqueo de rama izquierda, marcapasos, Wolff Parkinson White, digoxina o infradesnivel basal de un milímetro o más. Ahí usas imagen. Si no puede caminar, estrés con dobutamina o con un vasodilatador.' },
          { v: { k: 'big', h: 'Isquemia de alto riesgo', t: '≥10%', u: 'del VI en SPECT', s: 'o ≥3 de 16 segmentos en eco de estrés → coronariografía' },
            say: 'Si el gammagrama muestra isquemia en diez por ciento o más del ventrículo, o el eco de estrés en tres o más de dieciséis segmentos, el riesgo es alto. Ese paciente va a coronariografía.' },
          { v: { k: 'quiz', q: 'Hombre de 66 años con angina de esfuerzo y bloqueo de rama izquierda. ¿Qué estudio pides?', opts: ['Prueba de esfuerzo con ECG', 'SPECT con estrés vasodilatador'], a: 1 },
            say: 'Pausa. Hombre de sesenta y seis años con angina de esfuerzo y bloqueo de rama izquierda. ¿Qué estudio pides?',
            exp: 'Un gammagrama de perfusión con estrés vasodilatador. Con bloqueo de rama izquierda el ST no se puede interpretar, y el ejercicio produce defectos septales falsos. Por eso se prefiere un vasodilatador, como adenosina o regadenosón.' }
        ] },
        { ch: 'Tratar: vivir más y sin dolor', sc: [
          { v: { k: 'mnemo', t: 'Pronóstico: A-E-I · Síntomas: B-C-N', d: 'Aspirina, Estatina, IECA (si hay indicación) · Betabloqueador, Calcioantagonista, Nitratos.' },
            say: 'El tratamiento tiene dos metas. Para vivir más: A, E, I. Aspirina, estatina de alta intensidad, e inhibidor de la enzima convertidora si hay hipertensión, diabetes, enfermedad renal o fracción baja. Para quitar la angina: B, C, N. Betabloqueador, calcioantagonista y nitratos.' },
          { v: { k: 'big', h: 'Meta de LDL', t: '<55', u: 'mg/dL', s: 'y ↓ ≥50% de la basal; si no llega: ezetimiba y luego iPCSK9' },
            say: 'La meta de colesterol LDL es menor de cincuenta y cinco miligramos por decilitro, con una reducción de al menos la mitad. Si no llegas con estatina, agrega ezetimiba y luego un inhibidor de PCSK9. Puedes considerar colchicina a dosis baja.' },
          { v: { k: 'anim', id: 'scc', step: 2 },
            say: 'Ahora los antianginosos. El betabloqueador baja la frecuencia y la contractilidad, y alarga la diástole. Los nitratos dilatan las venas y bajan la precarga y la tensión de la pared. La demanda vuelve a quedar por debajo del aporte y el dolor desaparece.' },
          { v: { k: 'list', t: 'Antianginosos', items: ['1ª línea: betabloqueador y/o calcioantagonista', 'Rescate: nitroglicerina sublingual', '2ª línea: nitrato de acción larga, ranolazina', 'Ivabradina: solo en ritmo sinusal', 'Trimetazidina, nicorandil'] },
            say: 'Primera línea: betabloqueador, calcioantagonista, o los dos. Nitroglicerina sublingual de rescate. Si no basta, segunda línea: nitratos de acción prolongada, ranolazina, ivabradina, que solo sirve en ritmo sinusal, trimetazidina o nicorandil. Ninguno reduce la mortalidad.' },
          { v: { k: 'tip', kind: 'trap', t: 'Betabloqueador + verapamilo o diltiazem = bradicardia y bloqueo AV: combina con amlodipino. Nunca nitratos con sildenafil (24 h) o tadalafil (48 h).' },
            say: 'Dos trampas clásicas. Betabloqueador con verapamilo o diltiazem causa bradicardia y bloqueo auriculoventricular: si necesitas combinar, usa amlodipino. Y nunca des nitratos si tomó sildenafil en veinticuatro horas, o tadalafil en cuarenta y ocho.' }
        ] },
        { ch: '¿Cuándo revascularizar?', sc: [
          { v: { k: 'list', t: 'Revascularizar si…', items: ['Angina que persiste con tratamiento óptimo', 'Tronco >50%', '3 vasos o DA proximal con isquemia extensa', 'Miocardiopatía isquémica con FEVI ≤35%'] },
            say: 'Se revasculariza por síntomas, si la angina persiste a pesar del tratamiento óptimo, o por pronóstico: estenosis del tronco mayor de cincuenta por ciento, tres vasos o descendente anterior proximal con isquemia extensa, y miocardiopatía isquémica con fracción de treinta y cinco por ciento o menos.' },
          { v: { k: 'anim', id: 'scc', step: 4 },
            say: 'Hay dos maneras de hacerlo. La intervención coronaria percutánea coloca un stent dentro de la placa. La cirugía de revascularización lleva un puente, como la arteria mamaria, más allá de la lesión. Las dos devuelven el flujo cuando aumenta la demanda.' },
          { v: { k: 'vs', a: 'ICP (stent)', b: 'Cirugía (CABG)', rows: [['Anatomía', '1–2 vasos, menos compleja', 'Tronco complejo, 3 vasos'], ['Diabetes multivaso', 'Inferior', 'Preferida (FREEDOM)'], ['FEVI ≤35%', 'No mejoró la supervivencia (REVIVED)', 'Mejora la supervivencia (STICH)']] },
            say: '¿Stent o cirugía? La intervención percutánea va bien en enfermedad menos compleja. La cirugía se prefiere en diabéticos con varios vasos, como mostró el estudio FREEDOM, en el tronco complejo y con fracción de expulsión baja.' },
          { v: { k: 'quiz', q: 'Rogelio ya no tiene angina con tratamiento. Circunfleja 70%, sin lesión de tronco, FEVI 60%. ¿Qué haces?', opts: ['ICP para evitar un infarto', 'Seguir con tratamiento médico óptimo'], a: 1 },
            say: 'Pausa. Rogelio ya no tiene angina con su tratamiento. Tiene una estenosis de setenta por ciento en la circunfleja, sin lesión del tronco, y fracción normal. ¿Qué haces?',
            exp: 'Seguir con tratamiento médico óptimo. El estudio ISCHEMIA mostró que, en enfermedad estable sin lesión del tronco, revascularizar de rutina no redujo la muerte ni el infarto, aunque sí mejoró la angina. Si los síntomas regresan, se revasculariza.' }
        ] },
        { ch: 'Cómo lo preguntan', sc: [
          { v: { k: 'list', t: 'Patrones de examen', items: ['Prob. moderada, ECG normal → angio-TC', 'BRIHH → SPECT con vasodilatador', 'No puede caminar → eco con dobutamina', 'Diabético multivaso → cirugía', 'El nitrato dejó de servir → intervalo libre'] },
            say: 'Repasa cómo lo preguntan. Probabilidad moderada con electrocardiograma normal: angiotomografía. Bloqueo de rama izquierda: gammagrama con vasodilatador. No puede caminar: eco con dobutamina. Diabético con varios vasos: cirugía. Y si el nitrato de acción larga dejó de servir, es tolerancia: deja de diez a catorce horas sin nitrato.' },
          { v: { k: 'tip', kind: 'pearl', t: 'Lo que salva vidas: aspirina, estatina e IECA si hay indicación. Los antianginosos solo quitan síntomas. Revascularizar a un estable no reduce infartos (ISCHEMIA), salvo tronco o FEVI baja.' },
            say: 'La perla para el examen: aspirina, estatina, e IECA si hay indicación, mejoran el pronóstico. Los antianginosos solo quitan síntomas. Y revascularizar a un paciente estable no reduce los infartos, salvo en el tronco o con fracción baja. Ahora ve a las preguntas del tema para fijarlo.' }
        ] }
      ],
      sections: [
        { h: 'Fisiopatología en 1 minuto', html: `
<ul>
<li>La angina aparece cuando la <b>demanda de O₂ supera al aporte</b>. Una placa estable que estrecha ≥70% la luz (≥50% en el tronco) alcanza en reposo, pero no deja que el flujo aumente con el esfuerzo.</li>
<li><b>Consumo de O₂ miocárdico</b>: frecuencia cardiaca (el determinante principal), contractilidad y tensión de pared (precarga y poscarga).</li>
<li>El VI se perfunde en <b>diástole</b>: la taquicardia acorta la diástole y reduce el aporte justo cuando sube la demanda.</li>
<li>La isquemia empieza en el <b>subendocardio</b> → infradesnivel del ST con el esfuerzo.</li>
<li><b>Cascada isquémica</b>: defecto de perfusión → disfunción diastólica → alteración de la movilidad → cambios del ECG → dolor. Por eso las pruebas con imagen son más sensibles que el ECG de esfuerzo.</li>
<li>Cómo actúan los antianginosos: <b>betabloqueador</b> ↓ FC y contractilidad y alarga la diástole · <b>calcioantagonista</b> dilata arteriolas y coronarias (los no dihidropiridínicos además ↓ FC) · <b>nitratos</b> venodilatan (↓ precarga y tensión de pared) y dilatan las epicárdicas.</li>
</ul>` },
        { h: 'Clínica', html: `
<ul>
<li><b>Angina típica</b> (3 de 3): molestia retroesternal característica, desencadenada por esfuerzo o estrés emocional, y que cede con reposo o nitroglicerina en minutos. <b>Atípica</b>: 2 de 3. <b>No anginoso</b>: 0–1.</li>
<li>Clasificación de la Sociedad Canadiense (CCS) I–IV según el esfuerzo que la provoca.</li>
<li><b>Angina vasoespástica</b> (Prinzmetal): en reposo, de madrugada, con elevación transitoria del ST; fumadores, cocaína. Tratamiento: calcioantagonista y nitratos; evita betabloqueadores no selectivos.</li>
<li><b>Angina microvascular</b> (INOCA): síntomas con coronarias sin obstrucción; más en mujeres.</li>
</ul>` },
        { h: 'Estudios (ESC 2024)', html: `
<ul>
<li>Base: ECG en reposo, ecocardiograma (FEVI, alteraciones de movilidad, valvulopatía), lípidos, glucosa o A1c, creatinina, BH.</li>
<li>Se estima la <b>probabilidad clínica</b> con edad, sexo, tipo de síntoma y factores de riesgo (± calcio coronario).</li>
<li>Muy baja (≤5%): no se necesitan más pruebas. <b>Baja a moderada (&gt;5–50%)</b>: <b>angio-TC coronaria</b>. <b>Moderada a alta (&gt;15–85%)</b>: imagen funcional (eco de estrés, SPECT, RM de estrés). <b>Muy alta</b> o datos de alto riesgo: coronariografía invasiva.</li>
<li>La prueba de esfuerzo con ECG sola tiene menor sensibilidad; no sirve si el ECG basal no es interpretable (BRIHH, marcapasos, WPW, digoxina, infradesnivel ≥1 mm): usa imagen.</li>
<li>Contraindicaciones de la prueba de esfuerzo: SCA reciente, estenosis aórtica grave sintomática, IC descompensada, arritmias no controladas, TEP agudo, disección aórtica.</li>
<li>Si no puede hacer ejercicio: <b>estrés farmacológico</b> con dobutamina (eco) o con un vasodilatador como adenosina o regadenosón (SPECT, PET o RM). Con BRIHH se prefiere el vasodilatador.</li>
<li><b>Datos de alto riesgo</b> → coronariografía: isquemia ≥10% del VI en SPECT o PET, ≥3 de 16 segmentos con alteración inducida en el eco de estrés, isquemia con poca carga o hipotensión durante el esfuerzo; en la angio-TC, lesión del tronco o de 3 vasos proximales.</li>
</ul>` },
        { h: 'Tratamiento', html: `
<p><b>Mejoran el pronóstico</b> (prevención de eventos):</p>
<ul>
<li>Aspirina 75–100 mg (clopidogrel si no la tolera).</li>
<li>Estatina de alta intensidad: LDL &lt;55 mg/dL y ↓ ≥50%; ezetimiba e iPCSK9 si no llega.</li>
<li>IECA o ARA-II si hay HTA, DM, IC, FEVI ≤40% o ERC.</li>
<li>Colchicina 0.5 mg/día puede considerarse (LoDoCo2).</li>
<li>Dejar de fumar, ejercicio, rehabilitación, vacuna de influenza.</li>
</ul>
<p><b>Controlan síntomas</b> (antianginosos):</p>
<ul>
<li><b>Primera línea</b>: betabloqueador y/o calcioantagonista; nitroglicerina SL de rescate (nunca con sildenafil o tadalafil).</li>
<li>Combinar betabloqueador + dihidropiridina (amlodipino); evitar betabloqueador + verapamilo o diltiazem (bradicardia y bloqueo).</li>
<li>Segunda línea: nitratos de acción prolongada, ranolazina, ivabradina (ritmo sinusal con FC &gt;70), trimetazidina, nicorandil.</li>
</ul>` },
        { h: 'Revascularización', html: `
<ul>
<li>Para <b>síntomas</b> que persisten pese a tratamiento médico óptimo.</li>
<li>Para <b>pronóstico</b>: estenosis del tronco &gt;50%; enfermedad de 3 vasos o de la DA proximal con isquemia extensa; miocardiopatía isquémica con FEVI ≤35% (la cirugía mejora la supervivencia: STICH; la ICP no la mejoró: REVIVED).</li>
<li><b>ISCHEMIA (2020)</b>: en enfermedad estable sin lesión de tronco, la revascularización de rutina no redujo muerte ni IAM frente al tratamiento médico óptimo, aunque sí mejoró la angina.</li>
<li><b>Cirugía de revascularización (CABG)</b> preferida en multivaso con DM (FREEDOM), tronco con anatomía compleja y FEVI baja. <b>ICP</b> en enfermedad menos compleja.</li>
</ul>` },
        { h: 'Fármacos clave', html: `
<div class="tablewrap"><table class="mini">
<tr><th>Fármaco</th><th>Mecanismo</th><th>Efecto adverso clave</th><th>Contraindicación</th></tr>
<tr><td>Betabloqueador (metoprolol, bisoprolol)</td><td>↓ FC y contractilidad; alarga la diástole</td><td>Bradicardia, fatiga, broncoespasmo (no selectivos)</td><td>Bradicardia o bloqueo AV avanzado, asma grave, angina vasoespástica (no selectivos)</td></tr>
<tr><td>Amlodipino (dihidropiridina)</td><td>Vasodilatación arteriolar y coronaria</td><td>Edema maleolar, cefalea, rubor</td><td>Hipotensión; cuidado en estenosis aórtica grave</td></tr>
<tr><td>Verapamilo, diltiazem</td><td>↓ FC y contractilidad; vasodilatación coronaria</td><td>Bradicardia, bloqueo AV, estreñimiento (verapamilo)</td><td>FEVI reducida, bloqueo AV, combinarlos con betabloqueador</td></tr>
<tr><td>Nitratos (nitroglicerina, isosorbide)</td><td>Donan NO → GMPc: venodilatación (↓ precarga) y dilatación epicárdica</td><td>Cefalea, hipotensión, tolerancia (dejar 10–14 h libres de nitrato)</td><td>Sildenafil &lt;24 h o tadalafil &lt;48 h, estenosis aórtica grave, MCH obstructiva</td></tr>
<tr><td>Ranolazina</td><td>Inhibe la corriente tardía de sodio</td><td>Mareo, estreñimiento, prolonga el QT</td><td>QT largo, cirrosis, inhibidores potentes de CYP3A4</td></tr>
<tr><td>Ivabradina</td><td>Bloquea la corriente If del nodo sinusal (↓ FC sin efecto inotrópico)</td><td>Fosfenos (destellos visuales), bradicardia</td><td>FA o ritmo no sinusal, bradicardia, embarazo</td></tr>
<tr><td>Aspirina 75–100 mg</td><td>Inhibe la COX-1 plaquetaria</td><td>Sangrado digestivo</td><td>Alergia (usar clopidogrel)</td></tr>
<tr><td>Estatina de alta intensidad</td><td>Inhibe la HMG-CoA reductasa; ↓ LDL</td><td>Mialgias, ↑ transaminasas</td><td>Hepatopatía activa, embarazo</td></tr>
</table></div>` },
        { h: 'Cómo lo preguntan en el examen', html: `
<ul>
<li>Angina típica, ECG normal, probabilidad baja-moderada → <b>angio-TC coronaria</b> (ESC 2024).</li>
<li>Angina con BRIHH, marcapasos o digoxina → <b>prueba con imagen</b>, no prueba de esfuerzo con ECG (con BRIHH, SPECT con vasodilatador).</li>
<li>No puede caminar (artrosis, EVC) → <b>eco de estrés con dobutamina</b> o perfusión con vasodilatador.</li>
<li>“¿Qué fármaco reduce eventos?” → <b>estatina</b> (o aspirina, o IECA si hay indicación); nunca un antianginoso.</li>
<li>Betabloqueador + verapamilo → <b>bradicardia y bloqueo AV</b>.</li>
<li>Joven fumadora con dolor de madrugada y ST elevado transitorio → <b>vasoespástica</b>: calcioantagonista; evita el propranolol.</li>
<li>Estable, controlado, sin lesión de tronco → <b>tratamiento médico</b> (ISCHEMIA). Tronco &gt;50% o diabético multivaso → <b>revascularizar</b> (cirugía).</li>
<li>Angina con coronarias sin obstrucción, mujer → <b>angina microvascular</b> (INOCA).</li>
</ul>` }
      ],
      mnemo: { t: 'Pronóstico: “A-E-I” · Síntomas: “B-C-N”', d: 'Lo que salva vidas: Aspirina, Estatina, IECA (si hay indicación). Lo que quita la angina: Betabloqueador, Calcioantagonista, Nitratos.' },
      pearl: 'La nitroglicerina, la ranolazina y la ivabradina no reducen eventos: si te preguntan qué mejora el pronóstico, la respuesta es estatina (o aspirina, o IECA si hay indicación).',
      trap: 'Betabloqueador + verapamilo o diltiazem: bradicardia y bloqueo AV. Si necesitas dos antianginosos, combina el betabloqueador con amlodipino.',
      guide: [
        'Estudio inicial: la ESC 2024 favorece angio-TC coronaria con probabilidad baja-moderada y prueba de imagen funcional con probabilidad moderada-alta. Libros previos ponían la prueba de esfuerzo con ECG como primer estudio; la ESC ya no.',
        'Ivabradina: la ESC 2019 la ponía como antianginoso de segunda línea; la ESC 2024 no la recomienda como fármaco añadido en SCC con FEVI >40% sin IC (en SIGNIFY no redujo eventos y hubo más en angina limitante). Sigue siendo útil en IC con FEVI reducida en ritmo sinusal.'
      ],
      refs: [
        'Vrints C, et al. 2024 ESC Guidelines for the management of chronic coronary syndromes. Eur Heart J 2024.',
        'Maron DJ, et al. ISCHEMIA. N Engl J Med 2020.'
      ]
    }
  },

  anims: {
    scc: {
      title: 'Aporte contra demanda de oxígeno',
      steps: [
        { cap: '<b>Placa estable en reposo.</b> Un núcleo de lípidos con una capa fibrosa gruesa estrecha la luz, pero en reposo el flujo que pasa alcanza: el aporte de O₂ supera a la demanda y el ECG es normal.',
          labels: [[84, 27, 'Placa estable'], [40, 61, 'Miocardio'], [30, 73, 'Aporte O₂'], [30, 83, 'Demanda'], [14, 101, 'ECG']] },
        { cap: '<b>Esfuerzo: aparece la angina.</b> Suben la frecuencia, la contractilidad y la presión, y con ellas la demanda. La placa no deja que el flujo aumente: el territorio distal queda isquémico, duele y el ST baja. Con reposo cede.',
          labels: [[134, 61, 'Isquemia'], [30, 73, 'Aporte O₂'], [30, 83, 'Demanda ↑'], [134, 101, 'ST ↓']] },
        { cap: '<b>Antianginosos: bajar la demanda.</b> El betabloqueador baja la frecuencia y la contractilidad y alarga la diástole; el nitrato dilata las venas y baja la precarga. La demanda vuelve a quedar por debajo del aporte y la angina cede.',
          labels: [[30, 73, 'Aporte O₂'], [30, 83, 'Demanda ↓'], [128, 92, 'Vena dilatada'], [134, 103, 'FC ↓']] },
        { cap: '<b>Buscar la enfermedad.</b> La angio-TC coronaria ve la anatomía: la placa y cuánto estrecha la luz. Las pruebas funcionales ven la isquemia: con esfuerzo o fármacos aparece un defecto de perfusión (aquí, SPECT) o infradesnivel del ST.',
          labels: [[30, 84, 'Angio-TC'], [58, 30, 'Placa'], [100, 28, 'Reposo'], [100, 66, 'Estrés'], [132, 101, 'ST ↓']] },
        { cap: '<b>Revascularizar.</b> Si la angina persiste con tratamiento óptimo o la anatomía es de alto riesgo (tronco, 3 vasos, FEVI baja), se devuelve el flujo: ICP con stent o cirugía con un puente que rodea la lesión. Aun con esfuerzo, el aporte alcanza.',
          labels: [[84, 33, 'Stent (ICP)'], [104, 11, 'Puente (CABG)'], [30, 73, 'Aporte O₂'], [30, 83, 'Demanda']] }
      ]
    }
  },

  cards: [
    ['Angina típica', 'Dolor retroesternal + desencadenado por esfuerzo/estrés + cede con reposo o nitroglicerina'],
    ['Fármacos que mejoran el pronóstico en SCC', 'Aspirina, estatina de alta intensidad, IECA/ARA-II si hay indicación'],
    ['Antianginosos de primera línea', 'Betabloqueador y/o calcioantagonista'],
    ['Combinación a evitar', 'Betabloqueador + verapamilo o diltiazem'],
    ['Nitratos: contraindicación clásica', 'Sildenafil (24 h) o tadalafil (48 h)'],
    ['ECG basal no interpretable para prueba de esfuerzo', 'BRIHH, marcapasos, WPW, digoxina, infradesnivel ≥1 mm → prueba con imagen'],
    ['Probabilidad baja-moderada (ESC 2024)', 'Angio-TC coronaria'],
    ['Angina en reposo de madrugada con elevación transitoria del ST', 'Vasoespástica (Prinzmetal): calcioantagonista + nitratos'],
    ['Ivabradina', 'Bloquea la corriente If del nodo sinusal; requiere ritmo sinusal'],
    ['Resultado de ISCHEMIA', 'Revascularizar de rutina no reduce muerte/IAM en estables; mejora la angina'],
    ['Multivaso + DM', 'Cirugía de revascularización (FREEDOM)'],
    ['Determinantes del consumo de O₂ miocárdico', 'Frecuencia cardiaca (el principal), contractilidad y tensión de pared (precarga y poscarga)'],
    ['Cascada isquémica', 'Perfusión → disfunción diastólica → movilidad → ECG → dolor: la imagen detecta isquemia antes que el ECG'],
    ['Tolerancia a nitratos de acción prolongada', 'Dejar un intervalo libre de nitrato de 10–14 h (p. ej., quitar el parche en la noche)'],
    ['Pruebas de isquemia de alto riesgo', 'Isquemia ≥10% del VI (SPECT) o ≥3/16 segmentos (eco de estrés), hipotensión o isquemia con poca carga → coronariografía'],
    ['No puede hacer ejercicio', 'Estrés farmacológico: dobutamina (eco) o vasodilatador como adenosina o regadenosón (SPECT, PET, RM)']
  ],

  questions: [
    q({ id: 'scc-01', dif: 1,
      stem: 'Hombre de 60 años con opresión retroesternal al subir dos pisos, que cede con 3 minutos de reposo. ¿Cómo se clasifica el dolor?',
      opts: ['No anginoso', 'Angina atípica', 'Angina típica', 'Angina inestable', 'Dolor pleurítico'],
      ans: 2,
      exp: 'Cumple los 3 criterios: localización retroesternal, desencadenado por esfuerzo y alivio con reposo. Al ser estable y predecible, es angina estable típica.',
      why: ['Cumple los 3 criterios.', 'Atípica sería con 2 de 3.', '', 'La inestable es de reposo, nueva o en aumento.', 'No cambia con la respiración.'],
      ref: 'ESC 2024 SCC' }),

    q({ id: 'scc-02', dif: 2,
      stem: 'Mujer de 58 años con angina típica, ECG normal y probabilidad clínica moderada (≈25%). Según la ESC 2024, ¿qué estudio inicial prefieres?',
      opts: ['Coronariografía invasiva directa', 'Angio-TC coronaria', 'Ninguno; tratamiento empírico', 'Dímero D', 'Troponinas seriadas'],
      ans: 1,
      exp: 'Con probabilidad baja a moderada, la angio-TC coronaria tiene muy buen valor predictivo negativo y permite iniciar prevención si hay placa. Con probabilidad moderada-alta también es válida una prueba funcional de imagen.',
      why: ['Se reserva para probabilidad muy alta o alto riesgo.', '', 'Con probabilidad moderada se estudia.', 'No tiene relación.', 'Son para SCA, no para angina estable.'],
      ref: 'ESC 2024 SCC' }),

    q({ id: 'scc-03', dif: 2,
      stem: 'Hombre de 66 años con angina de esfuerzo y bloqueo de rama izquierda en el ECG basal. ¿Qué prueba funcional eliges?',
      opts: ['Prueba de esfuerzo con ECG', 'Prueba de imagen (eco de estrés o SPECT con vasodilatador)', 'Holter de 24 h', 'Tilt test', 'Ninguna'],
      ans: 1,
      exp: 'Con BRIHH el ST basal no se puede interpretar durante el esfuerzo. Se usa imagen; con BRIHH se prefiere estrés farmacológico vasodilatador en SPECT (el ejercicio da defectos septales falsos).',
      why: ['El ECG basal no es interpretable.', '', 'No diagnostica isquemia de esfuerzo.', 'Es para síncope.', 'Necesita estudio.'],
      ref: 'ESC 2024 SCC' }),

    q({ id: 'scc-04', dif: 1,
      stem: 'Hombre con angina estable que ya recibe aspirina y estatina. Persisten los síntomas. ¿Antianginoso de primera línea?',
      opts: ['Ranolazina', 'Betabloqueador o calcioantagonista', 'Ivabradina', 'Trimetazidina', 'Nitrato de acción prolongada'],
      ans: 1,
      exp: 'Betabloqueadores y calcioantagonistas son la primera línea para controlar la angina. El resto se agrega si no basta o hay contraindicaciones.',
      why: ['Segunda línea.', '', 'Segunda línea; requiere ritmo sinusal.', 'Segunda línea.', 'Segunda línea.'],
      ref: 'ESC 2024 SCC' }),

    q({ id: 'scc-05', dif: 2,
      stem: 'Paciente con angina estable en metoprolol. Para agregar un segundo antianginoso, ¿cuál evitas?',
      opts: ['Amlodipino', 'Verapamilo', 'Nitrato de acción prolongada', 'Ranolazina', 'Ivabradina'],
      ans: 1,
      exp: 'Verapamilo y diltiazem (calcioantagonistas no dihidropiridínicos) + betabloqueador causan bradicardia grave, bloqueo AV y depresión de la contractilidad. Con betabloqueador se combina una dihidropiridina.',
      why: ['Es la combinación recomendada.', '', 'Combinable.', 'Combinable.', 'Combinable con precaución de FC.'],
      ref: 'ESC 2024 SCC' }),

    q({ id: 'scc-06', dif: 2,
      stem: 'Mujer de 42 años, fumadora, con dolor torácico en reposo a las 4 a. m. que dura 10 minutos. Durante un episodio, el Holter muestra elevación transitoria del ST que se normaliza. Coronariografía sin obstrucciones. ¿Tratamiento?',
      opts: ['Betabloqueador no selectivo', 'Calcioantagonista + nitratos y dejar de fumar', 'Doble antiagregación por 12 meses', 'ICP', 'Fibrinólisis'],
      ans: 1,
      exp: 'Angina vasoespástica (Prinzmetal). Los calcioantagonistas y nitratos previenen el espasmo; se suspende el tabaco (y cocaína). Los betabloqueadores no selectivos pueden empeorarlo (vasoconstricción alfa sin oposición).',
      why: ['Pueden empeorar el espasmo.', '', 'No hay placa ni stent.', 'No hay lesión obstructiva.', 'No hay trombo.'],
      ref: 'ESC 2024 SCC' }),

    q({ id: 'scc-07', dif: 1,
      stem: 'Hombre con angina estable que usa nitroglicerina SL de rescate. Pregunta si puede tomar sildenafil. ¿Qué le dices?',
      opts: ['No hay problema', 'No debe usar nitratos dentro de las 24 h siguientes al sildenafil (48 h con tadalafil): riesgo de hipotensión grave', 'Solo si toma aspirina', 'Solo si toma betabloqueador', 'Puede tomarlos juntos a mitad de dosis'],
      ans: 1,
      exp: 'Los inhibidores de la PDE5 potencian el efecto vasodilatador de los nitratos (más GMPc): hipotensión profunda, síncope, isquemia.',
      why: ['La combinación es peligrosa.', '', 'No tiene relación.', 'No tiene relación.', 'No es seguro.'],
      ref: 'ESC 2024 SCC' }),

    q({ id: 'scc-08', dif: 2,
      stem: 'Hombre de 64 años con angina estable leve, controlada con tratamiento médico óptimo. Angio-TC: estenosis de 70% en la circunfleja media, sin lesión de tronco; FEVI normal. ¿Qué indica la evidencia actual?',
      opts: ['ICP inmediata para reducir mortalidad', 'Continuar tratamiento médico óptimo; revascularizar si los síntomas no se controlan', 'Cirugía de revascularización urgente', 'Suspender la estatina', 'Fibrinólisis'],
      ans: 1,
      exp: 'ISCHEMIA: en enfermedad estable sin lesión de tronco, revascularizar de rutina no redujo muerte ni IAM. Se revasculariza por síntomas refractarios o anatomía de alto riesgo.',
      why: ['No reduce mortalidad en este escenario.', '', 'No hay indicación urgente.', 'La estatina es pilar del pronóstico.', 'No es un SCA.'],
      ref: 'ISCHEMIA, NEJM 2020' }),

    q({ id: 'scc-09', dif: 2,
      stem: 'Hombre de 60 años con DM2 y enfermedad de 3 vasos con FEVI de 45%. ¿Qué tipo de revascularización se prefiere?',
      opts: ['ICP con balón sin stent', 'Cirugía de revascularización coronaria (CABG)', 'Solo tratamiento médico', 'Trombólisis', 'ICP solo de la lesión más grave'],
      ans: 1,
      exp: 'En diabéticos con enfermedad multivaso, la cirugía de revascularización redujo muerte e IAM frente a la ICP (FREEDOM).',
      why: ['Técnica obsoleta para esta anatomía.', '', 'Con 3 vasos y DM la cirugía tiene beneficio.', 'No es un SCA.', 'Revascularización incompleta.'],
      ref: 'FREEDOM, NEJM 2012 · ESC 2024' }),

    q({ id: 'scc-10', dif: 1,
      stem: '¿Cuál es el mecanismo de la ivabradina y su requisito?',
      opts: ['Bloquea canales de calcio; ninguno', 'Inhibe la corriente If del nodo sinusal y baja la FC; requiere ritmo sinusal', 'Bloquea receptores β1; FC >50', 'Inhibe la corriente tardía de sodio; ninguno', 'Es un nitrato; evitar sildenafil'],
      ans: 1,
      exp: 'La ivabradina reduce la FC sin efecto inotrópico negativo al bloquear la corriente “funny” (If). No sirve en fibrilación auricular. Se usa en angina con FC >70 y en IC con FE reducida.',
      why: ['Es el mecanismo de los calcioantagonistas.', '', 'Es el de los betabloqueadores.', 'Es el de la ranolazina.', 'No es un nitrato.'],
      ref: 'ESC 2024 SCC' }),

    q({ id: 'scc-11', dif: 2,
      stem: 'Mujer de 71 años con DM2 y gonartrosis grave que le impide caminar más de media cuadra. Refiere opresión torácica con el estrés emocional. ECG basal normal; probabilidad clínica moderada-alta. ¿Qué estudio funcional es el más adecuado?',
      opts: ['Prueba de esfuerzo en banda sin fin', 'Ecocardiograma de estrés con dobutamina', 'Holter de 24 h', 'Troponina de alta sensibilidad seriada', 'Radiografía de tórax'],
      ans: 1,
      exp: 'Si el paciente no puede hacer ejercicio suficiente, la isquemia se provoca con fármacos: dobutamina (aumenta FC y contractilidad; se ve la movilidad en el eco) o un vasodilatador como adenosina o regadenosón (se ve la perfusión en SPECT, PET o RM). Con probabilidad moderada-alta, la ESC 2024 prefiere una prueba funcional con imagen.',
      why: ['No alcanzaría la carga necesaria por la artrosis: la prueba no sería diagnóstica.', '', 'Detecta arritmias, no isquemia inducible.', 'Sirve para el SCA, no para buscar isquemia de esfuerzo.', 'No diagnostica isquemia.'],
      ref: 'ESC 2024 SCC' }),

    q({ id: 'scc-12', dif: 2,
      stem: 'Hombre de 63 años con angina estable leve, controlada con bisoprolol y amlodipino. La angio-TC muestra una estenosis de 65% en el tronco de la coronaria izquierda, confirmada en la coronariografía. FEVI 55%. ¿Qué indicas?',
      opts: ['Continuar el tratamiento médico: ISCHEMIA demostró que no hay que revascularizar', 'Revascularizar el tronco, de preferencia con cirugía, para mejorar el pronóstico', 'Agregar ranolazina y repetir la angio-TC en un año', 'Doble antiagregación por 12 meses sin revascularizar', 'Fibrinólisis'],
      ans: 1,
      exp: 'La estenosis significativa del tronco (>50%) es indicación de revascularización por pronóstico, aunque los síntomas estén controlados. Con anatomía compleja se prefiere la cirugía; la ICP es una alternativa en anatomía de baja complejidad. ISCHEMIA excluyó a los pacientes con lesión del tronco.',
      why: ['ISCHEMIA excluyó la enfermedad del tronco; ahí sí hay beneficio pronóstico.', '', 'La ranolazina solo controla síntomas y no cambia el pronóstico.', 'La doble antiagregación no reemplaza la revascularización de una lesión de alto riesgo.', 'No es un SCA y no hay trombo.'],
      ref: 'ESC 2024 SCC' }),

    q({ id: 'scc-13', dif: 2,
      stem: 'Hombre de 68 años con angina estable que usa un parche de nitroglicerina las 24 h del día. Al principio le funcionaba, pero en las últimas semanas la angina volvió con el mismo esfuerzo. ¿Cuál es la mejor medida?',
      opts: ['Duplicar la dosis del parche', 'Dejar un intervalo diario de 10–14 h sin nitrato (quitar el parche en la noche)', 'Agregar sildenafil', 'Cambiar a nitroglicerina IV continua', 'Suspender el betabloqueador'],
      ans: 1,
      exp: 'Los nitratos continuos producen tolerancia (se agotan los grupos sulfhidrilo y aumenta el estrés oxidativo). Se evita dejando un periodo libre de nitrato de 10–14 h, generalmente en la noche, cuando hay menos esfuerzo.',
      why: ['Más dosis continua no vence la tolerancia y aumenta la cefalea y la hipotensión.', '', 'Con nitratos causa hipotensión grave: está contraindicado.', 'Mantiene el problema de la exposición continua y no es tratamiento de una angina estable.', 'Quitarías un antianginoso de primera línea.'],
      ref: 'ESC 2024 SCC' }),

    q({ id: 'scc-14', dif: 2,
      stem: 'Hombre de 66 años con cardiopatía isquémica, FEVI 30% e insuficiencia cardiaca en clase II. Tiene angina de esfuerzo y FC en reposo de 84 lpm en ritmo sinusal. ¿Qué antianginoso eliges primero?',
      opts: ['Verapamilo', 'Diltiazem', 'Betabloqueador (bisoprolol o metoprolol de liberación prolongada)', 'Nifedipino de liberación inmediata', 'Ranolazina como único fármaco'],
      ans: 2,
      exp: 'Con FEVI reducida, el betabloqueador (bisoprolol, metoprolol succinato o carvedilol) controla la angina y además reduce la mortalidad de la IC. Verapamilo y diltiazem tienen efecto inotrópico negativo y empeoran la IC con FE reducida. El nifedipino de liberación inmediata causa taquicardia refleja.',
      why: ['Inotrópico negativo: empeora la IC con FEVI reducida.', 'Inotrópico negativo: empeora la IC con FEVI reducida.', '', 'Produce taquicardia refleja y hipotensión; puede precipitar isquemia.', 'Es de segunda línea y no aporta el beneficio en mortalidad del betabloqueador.'],
      ref: 'ESC 2024 SCC · ESC 2021 IC' }),

    q({ id: 'scc-15', dif: 3,
      stem: 'Mujer de 54 años con angina típica de esfuerzo desde hace un año. El eco de estrés mostró isquemia, pero la coronariografía no tiene lesiones obstructivas. No tiene dolor en reposo ni de madrugada. ¿Diagnóstico más probable?',
      opts: ['Angina vasoespástica (Prinzmetal)', 'Angina microvascular (INOCA)', 'Trastorno de ansiedad', 'Enfermedad por reflujo gastroesofágico', 'IAM tipo 1'],
      ans: 1,
      exp: 'Angina de esfuerzo con isquemia demostrada y coronarias epicárdicas sin obstrucción, más frecuente en mujeres: disfunción microvascular (INOCA). Se confirma con pruebas de función coronaria (reserva de flujo coronario, resistencia microvascular y, si hace falta, acetilcolina). Se trata con control estricto de factores de riesgo, estatina y antianginosos como betabloqueador o calcioantagonista.',
      why: ['El vasoespasmo da dolor en reposo, de madrugada, con elevación transitoria del ST.', '', 'Hay isquemia objetiva en el eco de estrés.', 'No explica la isquemia inducida por estrés.', 'No hay trombo ni lesión culpable, y el cuadro es crónico.'],
      ref: 'ESC 2024 SCC' })
  ]
};
