// Tema 35 · Bradiarritmias y bloqueos (Cardiología, semana 10)
const T = { topic: 'bradi', subj: 'cardio' };
const q = (o) => ({ ...T, ...o });
const SRC = { short: 'De tu Guía Cardio', vs: 'tu guía', name: 'Guía Cardio · Ximena Cors Cepeda (EMIS 5)', url: 'https://docs.google.com/document/d/1KD6KncWKFzExg3jRxPwSSYhywjqoqJN6KhAD_fr6TWk/edit' };

export default {
  lessons: {
    bradi: {
      hook: 'Una bradicardia preocupa por dos cosas: si da síntomas (síncope, hipotensión) y si el bloqueo está debajo del nodo AV (Mobitz II y completo), porque esos terminan en marcapasos.',
      nn: [], yt: 'bradyarrhythmias AV block Mobitz pacemaker',
      video: [
        { ch: 'El sistema de conducción', sc: [
          { v: { k: 'title', t: 'Bradiarritmias', s: 'Semana 10 · Cardiología' },
            say: 'Semana diez: las bradiarritmias. Todo se reduce a dos preguntas: dónde está el bloqueo, en el nodo o debajo de él, y si el paciente está estable. Con eso decides entre observar, atropina o marcapasos.' },
          { v: { k: 'case', t: 'Se desmayó en el mercado', p: { name: 'Don Rafael', age: 79, sex: 'H', skin: '#C98B62', hair: '#B0B0B0', gown: '#5BA7E0' }, text: 'Síncope sin pródromo. Mareo desde hace una semana. Toma metoprolol por HTA. Pulso lento y regular.', vit: { FC: '36', PA: '84/50', Glasgow: '15' } },
            say: 'Don Rafael tiene setenta y nueve años y se desmayó en el mercado, de golpe, sin aviso. Lleva una semana mareado. Toma metoprolol para la presión. Su pulso es de treinta y seis por minuto y la presión de ochenta y cuatro sobre cincuenta.' },
          { v: { k: 'flow', t: 'Camino del impulso', steps: ['Nodo sinusal: marcapasos de 60 a 100', 'Aurículas: onda P', 'Nodo AV: retrasa (el PR)', 'His y ramas: QRS estrecho', 'Escape nodal 40 a 60; ventricular 20 a 40'] },
            say: 'El impulso nace en el nodo sinusal a sesenta a cien latidos, despolariza las aurículas, que es la onda P, y se retrasa en el nodo auriculoventricular, que es el intervalo PR. Luego baja por el haz de His y sus ramas, y da un QRS estrecho. Si algo falla arriba, toma el mando un escape: el nodal, a cuarenta a sesenta con QRS estrecho, o el ventricular, a veinte a cuarenta con QRS ancho y más inestable.' },
          { v: { k: 'list', t: 'Causas reversibles', items: ['Fármacos: BB, verapamilo, diltiazem, digoxina, amiodarona', 'Hipotiroidismo, hipotermia', 'Hiperkalemia', 'Infarto inferior', 'Hipertensión intracraneal (Cushing)'] },
            say: 'Antes de pensar en marcapasos, busca causas reversibles: betabloqueadores, verapamilo, diltiazem, digoxina y amiodarona; hipotiroidismo e hipotermia; hiperkalemia; infarto inferior, porque la coronaria derecha irriga el nodo; e hipertensión intracraneal, la tríada de Cushing.' }
        ] },
        { ch: 'Nodo sinusal', sc: [
          { v: { k: 'list', t: 'Disfunción del nodo sinusal', items: ['Bradicardia sinusal sintomática', 'Pausas de más de 3 segundos', 'Incompetencia cronotrópica', 'Síndrome taqui-bradi: alterna con FA', 'Marcapasos si los síntomas coinciden'] },
            say: 'La disfunción del nodo sinusal es típica de ancianos por fibrosis: bradicardia sinusal con síntomas, pausas de más de tres segundos, frecuencia que no sube con el esfuerzo, y el síndrome taqui bradi, que alterna fibrilación auricular rápida con pausas. Es la indicación más común de marcapasos, cuando los síntomas coinciden con la bradicardia.' },
          { v: { k: 'tip', kind: 'pearl', t: 'Bradicardia sinusal en un atleta o al dormir es normal. Solo se trata si da síntomas.' },
            say: 'Perla: una bradicardia sinusal en un atleta o durante el sueño es normal. Solo se estudia y se trata si da síntomas.' }
        ] },
        { ch: 'Bloqueos auriculoventriculares', sc: [
          { v: { k: 'vs', a: 'Bloqueo', b: 'ECG', rows: [['1er grado', 'PR mayor de 200 ms', 'Todas conducen'], ['2o Mobitz I', 'PR se alarga hasta que una P no conduce', 'Nodo AV'], ['2o Mobitz II', 'PR fijo y una P se bloquea de golpe', 'His-Purkinje'], ['3er grado', 'P y QRS sin relación', 'Disociación AV']] },
            say: 'Los bloqueos auriculoventriculares. Primer grado: el PR mide más de doscientos milisegundos pero todas las P conducen. Segundo grado Mobitz uno o Wenckebach: el PR se alarga latido a latido hasta que una P no conduce, y vuelve a empezar; está en el nodo. Mobitz dos: el PR es fijo y de pronto una P se bloquea; está debajo del nodo. Tercer grado: las P y los QRS van cada quien a su ritmo.' },
          { v: { k: 'vs', a: 'Nodal', b: 'Infranodal', rows: [['Bloqueos', '1er grado, Mobitz I', 'Mobitz II, muchos de 3er grado'], ['QRS de escape', 'Estrecho, 40 a 60', 'Ancho, 20 a 40'], ['Atropina', 'Funciona', 'Casi no sirve'], ['Pronóstico', 'Benigno', 'Progresa a asistolia'], ['Marcapasos', 'Solo si da síntomas', 'Sí, aun sin síntomas']] },
            say: 'Lo importante es dónde está el bloqueo. Si es nodal, como el primer grado y Mobitz uno, el escape es estrecho, la atropina funciona y es benigno: solo se trata si da síntomas. Si es infranodal, como Mobitz dos y muchos bloqueos completos, el escape es ancho y lento, la atropina casi no sirve y puede progresar a asistolia: lleva marcapasos aunque no haya síntomas.' },
          { v: { k: 'quiz', q: 'ECG: PR fijo de 170 ms y de pronto una P sin QRS; QRS ancho. Asintomático. ¿Qué haces?', opts: ['Observar', 'Marcapasos definitivo', 'Atropina diaria'], a: 1 },
            say: 'Pausa. PR fijo de ciento setenta milisegundos y de pronto una P sin QRS, con QRS ancho. El paciente no tiene síntomas. ¿Qué haces?',
            exp: 'Marcapasos definitivo. Es Mobitz dos, un bloqueo infranodal que puede progresar a bloqueo completo o asistolia sin aviso, aunque hoy no dé síntomas.' },
          { v: { k: 'list', t: 'Infarto y bloqueo', items: ['Inferior (coronaria derecha): bloqueo nodal, transitorio', 'Anterior (descendente): infranodal, mal pronóstico', 'Congénito: lupus materno (anti-Ro)', 'Otras: Lyme, sarcoidosis, absceso aórtico, TAVI'] },
            say: 'En el infarto inferior, la coronaria derecha irriga el nodo, y el bloqueo suele ser nodal y transitorio. En el anterior, el bloqueo es infranodal y de mal pronóstico. El bloqueo completo congénito se asocia a lupus materno con anticuerpos anti Ro. Y entre las adquiridas: Lyme, sarcoidosis, absceso de una endocarditis aórtica y después de un implante valvular percutáneo.' }
        ] },
        { ch: 'Bloqueos de rama', sc: [
          { v: { k: 'vs', a: 'Rama derecha', b: 'Rama izquierda', rows: [['QRS', '120 ms o más', '120 ms o más'], ['V1', 'rSR prima: orejas de conejo', 'QS o rS profunda'], ['V6 y DI', 'S ancha', 'R ancha y mellada'], ['Significado', 'Puede ser normal; nuevo en TEP', 'Casi siempre hay cardiopatía']] },
            say: 'Los bloqueos de rama ensanchan el QRS a ciento veinte milisegundos o más. En el de rama derecha, V uno muestra rSR prima, como orejas de conejo, y hay S ancha en V seis; puede ser normal, y si es nuevo piensa en tromboembolia. En el de rama izquierda, V uno es negativo y V seis tiene una R ancha y mellada; casi siempre hay cardiopatía, y si es nuevo con dolor torácico se trata como síndrome coronario de alto riesgo.' }
        ] },
        { ch: 'La bradicardia inestable', sc: [
          { v: { k: 'list', t: 'Datos de inestabilidad', items: ['Hipotensión', 'Alteración mental', 'Choque', 'Dolor isquémico', 'Falla cardiaca aguda'] },
            say: 'Una bradicardia es inestable si causa hipotensión, alteración mental, choque, dolor isquémico o falla cardiaca aguda.' },
          { v: { k: 'flow', t: 'Algoritmo', steps: ['Atropina 1 mg IV c/3 a 5 min (máx 3 mg)', 'Sin respuesta: marcapasos transcutáneo', 'O dopamina 5 a 20 µg/kg/min', 'O epinefrina 2 a 10 µg/min', 'Luego marcapasos transvenoso'] },
            say: 'El algoritmo: atropina un miligramo intravenosa cada tres a cinco minutos, hasta tres miligramos. Si no responde, marcapasos transcutáneo, o infusión de dopamina o epinefrina, y después marcapasos transvenoso. La atropina casi no sirve en bloqueos infranodales ni en el corazón trasplantado.' },
          { v: { k: 'list', t: 'Antídotos', items: ['Hiperkalemia: gluconato de calcio', 'Betabloqueador: glucagón', 'Calcioantagonista: calcio, insulina a dosis alta', 'Digoxina: anticuerpos antidigoxina'] },
            say: 'Y los antídotos: en hiperkalemia, gluconato de calcio; en intoxicación por betabloqueador, glucagón; por calcioantagonista, calcio e insulina a dosis alta; y por digoxina, anticuerpos antidigoxina.' },
          { v: { k: 'quiz', q: 'Don Rafael: bloqueo AV completo con QRS ancho, FC 36, PA 84/50. Atropina sin respuesta. ¿Siguiente?', opts: ['Otra dosis de atropina de 3 mg', 'Marcapasos transcutáneo o dopamina', 'Observar en piso'], a: 1 },
            say: 'Pausa. Don Rafael tiene bloqueo completo con QRS ancho, frecuencia de treinta y seis y presión de ochenta y cuatro. La atropina no funcionó. ¿Qué sigue?',
            exp: 'Marcapasos transcutáneo o infusión de dopamina o epinefrina, como puente al marcapasos transvenoso. Con escape ancho el bloqueo es infranodal y la atropina no va a funcionar.' }
        ] },
        { ch: 'Cierre del caso', sc: [
          { v: { k: 'list', t: 'Don Rafael: final del caso', items: ['ECG: bloqueo AV completo, escape ancho a 36', 'Marcapasos transcutáneo, luego transvenoso', 'K normal; se suspende el metoprolol', '48 h sin metoprolol: sigue el bloqueo', 'Marcapasos definitivo'] },
            say: 'El electrocardiograma de don Rafael muestra bloqueo completo con escape ancho. Recibe marcapasos transcutáneo y luego transvenoso. Su potasio es normal y se suspende el metoprolol; como a las cuarenta y ocho horas el bloqueo persiste, no era el fármaco: se le coloca marcapasos definitivo.' },
          { v: { k: 'tip', kind: 'trap', t: 'Atropina en bloqueo infranodal (Mobitz II, completo con QRS ancho): casi no funciona. No pierdas tiempo: marcapasos.' },
            say: 'Trampa: insistir con atropina en un bloqueo infranodal. No funciona; ve directo al marcapasos.' },
          { v: { k: 'mnemo', t: 'Nodal: benigno, atropina · Infranodal: marcapasos', d: 'Mobitz I: PR que se alarga. Mobitz II: PR fijo con P bloqueada. 3er grado: disociación. Inestable: atropina → marcapasos o dopamina.' },
            say: 'Llévate esto: nodal, benigno y responde a atropina; infranodal, marcapasos aunque no haya síntomas. Ahora mueve el simulador de ECG del taller, del ritmo normal al bloqueo completo.' }
        ] }
      ],
      sections: [
        { h: 'Disfunción del nodo sinusal', html: `
<ul>
<li><b>Bradicardia sinusal</b> (&lt;60 lpm): fisiológica en atletas y al dormir; patológica si da síntomas. Causas: fármacos (BB, calcioantagonistas no DHP, digoxina, amiodarona), <b>hipotiroidismo</b>, hipotermia, hiperkalemia, <b>hipertensión intracraneal</b> (Cushing), infarto inferior, apnea del sueño.</li>
<li><b>Enfermedad del nodo sinusal</b> (ancianos, fibrosis): bradicardia, pausas &gt;3 s, incompetencia cronotrópica y <b>síndrome taqui-bradi</b> (alterna con FA).</li>
<li>Tratamiento: suspender lo que la causa; <b>marcapasos</b> si hay síntomas que se correlacionan con la bradicardia (es la indicación más común de marcapasos).</li>
</ul>` },
        { h: 'Bloqueos AV', html: `
<div class="tablewrap"><table class="mini">
<tr><th>Bloqueo</th><th>ECG</th><th>Sitio</th><th>Manejo</th></tr>
<tr><td><b>1er grado</b></td><td>PR &gt;200 ms, todas conducen</td><td>Nodo AV</td><td>Observar</td></tr>
<tr><td><b>2º Mobitz I</b> (Wenckebach)</td><td>PR que se alarga hasta que una P no conduce; RR que se acorta</td><td>Nodo AV</td><td>Observar; atropina si hay síntomas</td></tr>
<tr><td><b>2º Mobitz II</b></td><td>PR fijo; P bloqueada de forma súbita; QRS a menudo ancho</td><td>His-Purkinje</td><td><b>Marcapasos</b> aun sin síntomas</td></tr>
<tr><td><b>2:1 y avanzado</b></td><td>2 o más P seguidas sin conducir</td><td>Variable</td><td>Marcapasos si es infranodal o sintomático</td></tr>
<tr><td><b>3er grado</b></td><td>Disociación AV: P regulares, QRS regulares, sin relación</td><td>Nodo o infranodal</td><td><b>Marcapasos</b></td></tr>
</table></div>
<ul>
<li>Escape nodal: QRS estrecho, 40–60 lpm. Escape ventricular: QRS ancho, 20–40 lpm (más inestable).</li>
<li>El infarto <b>inferior</b> (coronaria derecha irriga el nodo AV) da bloqueos nodales transitorios; el <b>anterior</b> da bloqueos infranodales de mal pronóstico.</li>
<li>Bloqueo completo congénito: lupus materno (anti-Ro). Adquirido: degeneración (Lev-Lenègre), Lyme, sarcoidosis, endocarditis aórtica con absceso, post TAVI.</li>
</ul>` },
        { h: 'Bloqueos de rama', html: `
<ul>
<li>QRS ≥120 ms. <b>Derecha (BRDHH)</b>: rSR′ en V1 (“orejas de conejo”), S ancha en DI y V6; puede ser normal; nuevo en TEP.</li>
<li><b>Izquierda (BRIHH)</b>: QS o rS en V1, R ancha y mellada en DI, aVL, V5–V6; casi siempre hay cardiopatía (HTA, isquemia, estenosis aórtica). Nuevo con dolor torácico: tratar como SCA de alto riesgo.</li>
<li>Hemibloqueo anterior izquierdo: eje a la izquierda (–45°). Bifascicular (BRDHH + hemibloqueo) con síncope → estudio y marcapasos.</li>
</ul>` },
        { h: 'Manejo agudo de la bradicardia', html: `
<ol>
<li>¿Hay datos de inestabilidad? Hipotensión, alteración mental, choque, dolor isquémico, falla cardiaca aguda.</li>
<li><b>Atropina 1 mg IV</b> cada 3–5 min (máx 3 mg). Poco útil en bloqueo infranodal y en el corazón trasplantado.</li>
<li>Si no responde: <b>marcapasos transcutáneo</b> o infusión de <b>dopamina</b> (5–20 µg/kg/min) o <b>epinefrina</b> (2–10 µg/min); luego transvenoso.</li>
<li>Causas reversibles: hiperkalemia (calcio IV), intoxicación por BB (glucagón), por calcioantagonistas (calcio, insulina en dosis alta), digoxina (anticuerpos antidigoxina).</li>
</ol>` },
        { h: 'Cómo lo preguntan en el examen', html: `
<ul>
<li>Asintomático con PR de 240 ms → <b>nada</b>.</li>
<li>PR que se alarga y cae un QRS, joven sano dormido → Wenckebach benigno.</li>
<li>PR fijo con caída súbita y QRS ancho, asintomático → <b>marcapasos</b>.</li>
<li>Síncope con disociación AV y FC 35 → bloqueo completo → marcapasos.</li>
<li>Bradicardia con hipotensión → <b>atropina</b>, después transcutáneo.</li>
</ul>` }
      ],
      mnemo: { t: 'Más largo, más largo, cae = Wenckebach', d: 'PR que se alarga hasta que una P no conduce: Mobitz I. Si el PR no cambia y de pronto cae, es Mobitz II. Si P y QRS no se ponen de acuerdo, es completo.' },
      pearl: 'Mobitz II y bloqueo completo van a marcapasos aunque el paciente no tenga síntomas: el bloqueo está debajo del nodo y puede causar asistolia.',
      trap: 'La atropina mejora los bloqueos nodales, pero en el Mobitz II puede empeorar la conducción (más P llegan a un His que no conduce). Ve directo a marcapasos transcutáneo.',
      guide: [
        'ACLS 2020: la dosis de atropina subió a 1 mg (antes 0.5 mg), máximo 3 mg.',
        'Guías ESC 2021 de estimulación: marcapasos en Mobitz II, 2:1 infranodal, avanzado y completo aunque no haya síntomas.'
      ],
      refs: [
        'Glikson M, et al. 2021 ESC Guidelines on cardiac pacing and cardiac resynchronization therapy. Eur Heart J 2021.',
        'Kusumoto FM, et al. 2018 ACC/AHA/HRS Guideline on the evaluation and management of bradycardia. Circulation 2019.',
        'Panchal AR, et al. 2020 AHA Guidelines for CPR and ECC: Adult advanced life support. Circulation 2020.'
      ]
    }
  },

  guias: {
    bradi: { src: SRC,
      puntos: [
        'Bradicardia sinusal patológica cuando &lt;40 o da síntomas; atropina e isoproterenol; marcapasos si es definitiva y sintomática.',
        'Enfermedad del nodo sinusal: síndrome taqui-bradi que coexiste con FA; la indicación más común de marcapasos; anticoagular la FA.',
        'Bloqueos: 1º sin tratamiento; Mobitz I atropina; Mobitz II marcapasos aun asintomático; 3º marcapasos.',
        'Ritmo de escape nodal (QRS estrecho) vs ventricular (QRS ancho).'
      ],
      ojo: ['La atropina ya no se recomienda en dosis de 0.5 mg: <b>1 mg IV</b> cada 3–5 min (ACLS 2020).'],
      cards: [['Asistolia que da síncope', 'Pausa ≥3 s']] }
  },

  cards: [
    ['Bloqueo AV de 1er grado', 'PR >200 ms; todas las P conducen'],
    ['Mobitz I (Wenckebach)', 'PR que se alarga hasta que una P no conduce; nodal, benigno'],
    ['Mobitz II', 'PR fijo con P bloqueada súbita; infranodal → marcapasos'],
    ['Bloqueo AV de 3er grado', 'Disociación AV → marcapasos'],
    ['Primer fármaco en bradicardia inestable', 'Atropina 1 mg IV (máx 3 mg)'],
    ['Bradicardia que no responde a atropina', 'Marcapasos transcutáneo o dopamina/epinefrina'],
    ['Indicación más común de marcapasos', 'Enfermedad del nodo sinusal sintomática'],
    ['Síndrome taqui-bradi', 'Enfermedad del nodo sinusal que alterna con FA'],
    ['IAM inferior y bloqueo AV', 'Nodal, transitorio (coronaria derecha)'],
    ['BRDHH en ECG', 'rSR′ en V1, S ancha en DI y V6'],
    ['BRIHH en ECG', 'QS en V1; R ancha y mellada en DI, aVL, V5–V6'],
    ['Bloqueo completo congénito', 'Lupus materno (anti-Ro)'],
    ['Intoxicación por betabloqueador', 'Glucagón IV']
  ],

  questions: [
    q({ id: 'bradi-01', dif: 1, stem: 'Hombre de 40 años asintomático con PR de 230 ms y todas las P conducidas. ¿Conducta?', opts: ['Marcapasos', 'Atropina', 'Ninguna; vigilancia', 'Isoproterenol', 'Estudio electrofisiológico urgente'], ans: 2,
      exp: 'El bloqueo AV de primer grado asintomático no requiere tratamiento.', why: ['No está indicado.', 'No hay bradicardia sintomática.', '', 'No está indicado.', 'No está indicado.'], ref: 'ACC/AHA/HRS 2018' }),
    q({ id: 'bradi-02', dif: 2, stem: 'ECG: PR que se alarga progresivamente (200, 280, 340 ms) hasta que una P no conduce, y se repite. Paciente asintomático. ¿Diagnóstico y conducta?', opts: ['Mobitz II: marcapasos', 'Mobitz I: observación', 'Bloqueo completo: marcapasos', 'Bloqueo de 1er grado: nada', 'FA: anticoagular'], ans: 1,
      exp: 'Wenckebach: bloqueo nodal, generalmente benigno; en asintomáticos solo se observa y se revisan fármacos.', why: ['El PR no es fijo.', '', 'Hay relación P-QRS.', 'Hay P no conducidas.', 'Hay P regulares.'], ref: 'ACC/AHA/HRS 2018' }),
    q({ id: 'bradi-03', dif: 2, stem: 'Mujer de 74 años asintomática. ECG: PR fijo de 180 ms con P bloqueadas súbitas y QRS de 140 ms. ¿Conducta?', opts: ['Observación', 'Marcapasos definitivo', 'Atropina oral', 'Suspender aspirina', 'Repetir ECG en 1 año'], ans: 1,
      exp: 'Mobitz II (infranodal, QRS ancho) tiene riesgo de progresar a bloqueo completo y asistolia: marcapasos aun sin síntomas.', why: ['Riesgo alto de progresión.', '', 'No es tratamiento.', 'No relacionado.', 'Riesgo alto.'], ref: 'ESC 2021' }),
    q({ id: 'bradi-04', dif: 1, stem: 'Hombre de 80 años con síncope. ECG: P a 80 lpm y QRS anchos a 34 lpm sin relación entre ellos. ¿Diagnóstico?', opts: ['Mobitz I', 'Bloqueo AV de 3er grado', 'Bradicardia sinusal', 'Bloqueo de 1er grado', 'FA lenta'], ans: 1,
      exp: 'Disociación AV con escape ventricular: bloqueo completo. Requiere marcapasos.', why: ['Hay relación P-QRS en Mobitz I.', '', 'Cada P tendría QRS.', 'Todas conducen.', 'Habría ondas f e irregularidad.'], ref: 'ESC 2021' }),
    q({ id: 'bradi-05', dif: 2, stem: 'Paciente con FC 36, PA 76/40 y confusión. ¿Primer fármaco?', opts: ['Adenosina', 'Atropina 1 mg IV', 'Amiodarona', 'Metoprolol', 'Diltiazem'], ans: 1,
      exp: 'Bradicardia inestable: atropina 1 mg IV, repetible hasta 3 mg; si no responde, marcapasos transcutáneo o dopamina/epinefrina.', why: ['Es para TSV.', '', 'Es antiarrítmico para taquicardias.', 'Empeora.', 'Empeora.'], ref: 'AHA 2020' }),
    q({ id: 'bradi-06', dif: 2, stem: 'La bradicardia sintomática del caso anterior no responde a 3 mg de atropina. ¿Siguiente paso?', opts: ['Más atropina', 'Marcapasos transcutáneo o infusión de dopamina/epinefrina', 'Cardioversión', 'Lidocaína', 'Observación'], ans: 1,
      exp: 'Atropina fallida: estimulación transcutánea o cronotrópicos en infusión, como puente al marcapasos transvenoso.', why: ['Ya llegó a la dosis máxima.', '', 'Es para taquiarritmias.', 'Es para TV.', 'Está inestable.'], ref: 'AHA 2020' }),
    q({ id: 'bradi-07', dif: 2, stem: 'Paciente con IAM inferior y bloqueo AV de 2º grado Mobitz I con QRS estrecho, PA normal. ¿Conducta?', opts: ['Marcapasos definitivo inmediato', 'Vigilancia; suele ser transitorio', 'Amiodarona', 'Isoproterenol', 'Desfibrilación'], ans: 1,
      exp: 'El infarto inferior (coronaria derecha irriga el nodo AV) causa bloqueos nodales que suelen resolver con la reperfusión.', why: ['No suele ser necesario.', '', 'No está indicada.', 'Aumenta el consumo de O₂.', 'No es arritmia desfibrilable.'], ref: 'ESC 2023' }),
    q({ id: 'bradi-08', dif: 2, stem: 'Mujer de 78 años con mareo. Holter: episodios de FA rápida que terminan en pausas de 5 segundos. ¿Diagnóstico?', opts: ['Mobitz II', 'Síndrome taqui-bradi (enfermedad del nodo sinusal)', 'WPW', 'Bloqueo completo', 'Taquicardia sinusal inapropiada'], ans: 1,
      exp: 'Alternancia de taquiarritmias auriculares y pausas: enfermedad del nodo sinusal. Marcapasos (para poder dar fármacos para la FA) y anticoagulación según CHA₂DS₂-VASc.', why: ['No hay patrón de bloqueo AV.', '', 'No hay preexcitación.', 'No hay disociación AV.', 'No hay pausas.'], ref: 'ESC 2021' }),
    q({ id: 'bradi-09', dif: 3, stem: 'Paciente con ERC que llega con FC 38, QRS ancho y T picudas. ¿Qué das primero?', opts: ['Atropina', 'Gluconato de calcio IV', 'Marcapasos definitivo', 'Amiodarona', 'Digoxina'], ans: 1,
      exp: 'Bradicardia por hiperkalemia: el calcio estabiliza la membrana de inmediato; después insulina con glucosa y eliminar K.', why: ['No corrige la causa.', '', 'Es una causa reversible.', 'Contraindicada.', 'Empeora.'], ref: 'AHA 2020' }),
    q({ id: 'bradi-10', dif: 2, stem: 'Paciente con intento suicida con propranolol: FC 40, PA 70/40, glucosa baja. ¿Antídoto específico?', opts: ['Naloxona', 'Glucagón IV', 'Flumazenil', 'Atropina sola', 'Bicarbonato'], ans: 1,
      exp: 'El glucagón aumenta el AMPc por una vía independiente del receptor β: es el antídoto de la intoxicación por betabloqueadores.', why: ['Es para opioides.', '', 'Es para benzodiacepinas.', 'Suele ser insuficiente.', 'Es para antidepresivos tricíclicos.'], ref: 'AHA 2020' }),
    q({ id: 'bradi-11', dif: 1, stem: '¿Qué hallazgo del ECG define al bloqueo de rama derecha?', opts: ['QS en V1 y R mellada en V6', 'rSR′ en V1 con S ancha en DI y V6', 'PR corto con onda delta', 'Ondas f', 'T picudas'], ans: 1,
      exp: 'BRDHH: QRS ≥120 ms con rSR′ (“orejas de conejo”) en V1 y S ancha en derivaciones laterales.', why: ['Es BRIHH.', '', 'Es WPW.', 'Es FA.', 'Es hiperkalemia.'], ref: 'Guía Cardio (rotación)' }),
    q({ id: 'bradi-12', dif: 2, stem: 'Recién nacido con bradicardia fetal y bloqueo AV completo. ¿Qué anticuerpo materno buscas?', opts: ['Anti-DNA', 'Anti-Ro (SSA)', 'Anti-centrómero', 'Anti-Jo1', 'ANCA'], ans: 1,
      exp: 'El anti-Ro cruza la placenta y daña el sistema de conducción fetal (lupus neonatal).', why: ['No es el responsable.', '', 'Es de CREST.', 'Es de miositis.', 'Es de vasculitis.'], ref: 'ESC 2021' }),
    q({ id: 'bradi-13', dif: 2, stem: 'Paciente con hipotermia, edema periorbitario, piel seca y FC 48. ¿Qué estudio pides para la causa de la bradicardia?', opts: ['Troponina', 'TSH y T4 libre', 'Dímero D', 'Ecocardiograma transesofágico', 'Cateterismo'], ans: 1,
      exp: 'El hipotiroidismo (mixedema) es causa reversible de bradicardia sinusal.', why: ['No sugiere isquemia.', '', 'No sugiere TEP.', 'No es lo indicado.', 'No es lo indicado.'], ref: 'ACC/AHA/HRS 2018' }),
    q({ id: 'bradi-14', dif: 3, stem: 'Paciente con traumatismo craneoencefálico que presenta HTA, bradicardia y respiración irregular. ¿Qué indica?', opts: ['Hipotiroidismo', 'Hipertensión intracraneal (reflejo de Cushing)', 'Bloqueo AV', 'Intoxicación por BB', 'Síncope vasovagal'], ans: 1,
      exp: 'La tríada de Cushing (HTA, bradicardia, respiración irregular) indica herniación inminente por hipertensión intracraneal.', why: ['No en este contexto.', '', 'No hay datos en el ECG.', 'No hay antecedente.', 'No cursa con HTA.'], ref: 'ACC/AHA/HRS 2018' }),
    q({ id: 'bradi-15', dif: 2, stem: 'Paciente con BRIHH nuevo y dolor torácico típico de 1 hora. ¿Cómo se maneja?', opts: ['Como dolor no cardiaco', 'Como SCA de alto riesgo: valorar reperfusión urgente', 'Solo marcapasos', 'Alta con AINE', 'Holter ambulatorio'], ans: 1,
      exp: 'El BRIHH nuevo con clínica de isquemia se considera equivalente de IAMCEST: angiografía urgente.', why: ['Riesgo alto.', '', 'No es la prioridad.', 'Peligroso.', 'Peligroso.'], ref: 'ESC 2023' })
  ]
};
