// Tema 2 · Síndromes coronarios agudos (Cardiología, semana 2)
const T = { topic: 'sca', subj: 'cardio' };
const q = (o) => ({ ...T, ...o });

export default {
  lessons: {
    sca: {
      hook: 'Aquí se decide en minutos: leer el ECG, saber cuándo reperfundir y no caer en las trampas del IAM de VD y de la fibrinólisis en SCASEST.',
      anim: 'sca',
      compare: ['stemi-nste'],
      sections: [
        { h: 'El espectro', html: `
<ul>
<li><b>Angina inestable</b>: isquemia en reposo, de reciente inicio o en aumento, con troponina normal. Con la troponina de alta sensibilidad es cada vez menos frecuente.</li>
<li><b>IAMSEST</b>: troponina elevada sin elevación persistente del ST.</li>
<li><b>IAMCEST</b>: elevación persistente del ST o un equivalente. Casi siempre es una arteria ocluida.</li>
</ul>
<p><b>Infarto (4ª definición universal)</b>: ascenso o descenso de troponina con al menos un valor mayor al percentil 99, más evidencia de isquemia: síntomas, cambios nuevos en el ECG, ondas Q nuevas, imagen con pérdida de miocardio viable o trombo en la angiografía.</p>
<p><b>Tipos</b>: 1 = ruptura de placa con trombo · 2 = desequilibrio entre aporte y demanda (anemia, taquiarritmia, hipotensión, hipoxemia) · 3 = muerte súbita antes de tener troponina · 4 = asociado a ICP · 5 = asociado a cirugía de revascularización.</p>` },
        { h: 'Los primeros 10 minutos', html: `
<ul>
<li><b>ECG de 12 derivaciones en ≤10 min</b> desde el primer contacto. Si no es diagnóstico y sigue el dolor, repítelo cada 15–30 min.</li>
<li>Monitor, acceso venoso y troponina de alta sensibilidad a las 0 h y 1 h (o 0 h y 2 h).</li>
<li><b>Aspirina</b> 150–300 mg VO masticada, sin capa entérica, salvo alergia verdadera.</li>
<li><b>Oxígeno solo si SatO₂ &lt;90%</b>.</li>
<li><b>Nitroglicerina</b> sublingual para el dolor, excepto si la PAS es &lt;90, hay IAM de VD o tomó sildenafil en las últimas 24 h (tadalafil, 48 h).</li>
<li><b>Morfina</b> solo para dolor intenso que no cede: retrasa la absorción de los P2Y12 orales.</li>
</ul>` },
        { h: 'Leer el ECG', html: `
<p><b>IAMCEST</b>: elevación nueva del ST en el punto J en ≥2 derivaciones contiguas.</p>
<ul>
<li>V2–V3: ≥2 mm en hombres ≥40 años · ≥2.5 mm en hombres &lt;40 · ≥1.5 mm en mujeres.</li>
<li>Resto de derivaciones: ≥1 mm.</li>
</ul>
<div class="tablewrap"><table class="mini">
<tr><th>Derivaciones</th><th>Cara</th><th>Arteria</th></tr>
<tr><td>V1–V4</td><td>Anterior y septal</td><td>Descendente anterior</td></tr>
<tr><td>DII, DIII, aVF</td><td>Inferior</td><td>Coronaria derecha (≈80–90%) o circunfleja</td></tr>
<tr><td>DI, aVL, V5–V6</td><td>Lateral</td><td>Circunfleja o diagonal</td></tr>
<tr><td>Infradesnivel V1–V3 con R alta</td><td>Posterior</td><td>Circunfleja o CD: toma V7–V9</td></tr>
<tr><td>V3R–V4R</td><td>Ventrículo derecho</td><td>CD proximal</td></tr>
</table></div>
<p>En V7–V9 y en V3R–V4R el umbral es ≥0.5 mm (≥1 mm en hombres jóvenes).</p>
<p><b>Se tratan como IAMCEST</b>: bloqueo de rama (izquierda o derecha) o ritmo de marcapasos con síntomas isquémicos persistentes; IAM posterior aislado. Infradesnivel del ST en ≥6 derivaciones con elevación en aVR o V1 sugiere lesión de tronco o multivaso; con inestabilidad va a coronariografía inmediata.</p>
<p><b>Patrones que debes reconocer</b>: <b>Wellens</b> (T bifásicas o profundamente invertidas en V2–V3 en un paciente sin dolor = estenosis crítica de la DA proximal; no hagas prueba de esfuerzo) y <b>De Winter</b> (infradesnivel ascendente del ST en precordiales con T altas y simétricas = oclusión de la DA).</p>` },
        { h: 'IAMCEST: reperfundir ya', html: `
<ul>
<li>Síntomas de &lt;12 h → reperfusión.</li>
<li><b>ICP primaria</b> si puede hacerse en ≤120 min desde el diagnóstico. Meta de ≤60 min si el paciente ya está en un hospital con hemodinamia, y ≤90 min si se traslada.</li>
<li>Si la ICP no llega en 120 min → <b>fibrinólisis en ≤10 min</b> desde el diagnóstico (de preferencia tenecteplasa; mitad de dosis si ≥75 años), con aspirina, clopidogrel y anticoagulante. Después, traslado a un centro con ICP: coronariografía en 2–24 h si fue exitosa, o <b>ICP de rescate</b> inmediata si falló.</li>
<li><b>Fibrinólisis exitosa</b>: el ST baja ≥50% a los 60–90 min y cede el dolor; puede aparecer un ritmo idioventricular acelerado.</li>
<li>&gt;12 h de síntomas: ICP si hay isquemia persistente, IC, choque o arritmias graves; considerarla entre 12 y 48 h. Después de 48 h y asintomático, no se abre de rutina una arteria ocluida.</li>
<li>Choque cardiogénico: ICP de la arteria culpable sin importar el tiempo.</li>
</ul>
<p><b>Contraindicaciones absolutas de la fibrinólisis</b>: hemorragia intracraneal previa o EVC de origen desconocido (en cualquier momento) · EVC isquémico en los últimos 6 meses · daño o neoplasia del SNC o malformación AV · trauma mayor, cirugía o TCE en el último mes · sangrado gastrointestinal en el último mes · trastorno hemorrágico conocido · disección aórtica · punciones no compresibles en las últimas 24 h.</p>
<p><b>Relativas</b>: AIT en los últimos 6 meses, anticoagulación oral, embarazo o primera semana posparto, HTA refractaria (PAS &gt;180 o PAD &gt;110), hepatopatía avanzada, endocarditis, úlcera péptica activa, RCP prolongada o traumática.</p>` },
        { h: 'SCASEST: estratificar y decidir cuándo cateterizar', html: `
<ul>
<li>Troponina de alta sensibilidad con algoritmo 0 h/1 h para descartar o confirmar rápido.</li>
<li><b>Inmediata (&lt;2 h)</b> si es de muy alto riesgo: inestabilidad hemodinámica o choque, dolor recurrente o refractario, arritmias graves o paro, complicaciones mecánicas, IC aguda por isquemia, cambios dinámicos recurrentes del ST (sobre todo elevación intermitente).</li>
<li><b>Temprana (&lt;24 h)</b> si es de alto riesgo: IAMSEST confirmado, cambios dinámicos del ST o la T, elevación transitoria del ST, GRACE &gt;140.</li>
<li><b>Selectiva</b> en el resto: prueba de isquemia o angio-TC coronaria antes de decidir.</li>
<li><b>Nunca fibrinólisis</b> en SCASEST.</li>
<li>Escalas: GRACE (pronóstico; define el &lt;24 h) y TIMI (0–7; riesgo de eventos a 14 días). La calculadora TIMI está en Herramientas.</li>
</ul>` },
        { h: 'Antitrombóticos y alta', html: `
<ul>
<li><b>Doble antiagregación</b>: aspirina (75–100 mg/día después de la carga) + inhibidor P2Y12 por 12 meses de forma predeterminada.</li>
<li><b>Prasugrel</b>: carga 60 mg, luego 10 mg/día (5 mg si ≥75 años o &lt;60 kg). Contraindicado con EVC o AIT previo.</li>
<li><b>Ticagrelor</b>: carga 180 mg, luego 90 mg c/12 h. Puede causar disnea y bradicardia.</li>
<li><b>Clopidogrel</b>: carga 300–600 mg, luego 75 mg/día. Se usa si recibió fibrinólisis, si necesita anticoagulante oral o si no hay los otros dos.</li>
<li>En SCASEST no se da P2Y12 de rutina antes del cateterismo si este se hará en &lt;24 h (ESC 2023).</li>
<li><b>Anticoagulación parenteral</b>: heparina no fraccionada durante la ICP; enoxaparina como alternativa; fondaparinux si no habrá cateterismo temprano.</li>
<li><b>Al alta</b>: estatina de alta intensidad (meta LDL &lt;55 mg/dL y ↓ ≥50%; si no se logra, ezetimiba y luego iPCSK9) · betabloqueador (sobre todo con FEVI ≤40%) · IECA o ARA-II (FEVI ≤40%, IC, DM, HTA o ERC) · antagonista mineralocorticoide si FEVI ≤40% con IC o DM · IBP si hay riesgo de sangrado digestivo · rehabilitación cardiaca y dejar de fumar.</li>
</ul>` },
        { h: 'Complicaciones', html: `
<div class="tablewrap"><table class="mini">
<tr><th>Cuándo (aprox.)</th><th>Complicación</th><th>Pista</th></tr>
<tr><td>Primeras horas</td><td>FV y otras arritmias</td><td>Principal causa de muerte antes de llegar al hospital</td></tr>
<tr><td>IAM inferior</td><td>Bradicardia, bloqueo AV</td><td>El nodo AV lo irriga la CD; suele ser transitorio</td></tr>
<tr><td>IAM inferior</td><td>IAM de VD</td><td>Hipotensión + IY + pulmones limpios → volumen, sin nitratos</td></tr>
<tr><td>Días 1–3</td><td>Pericarditis temprana</td><td>Dolor pleurítico y frote</td></tr>
<tr><td>Días 2–7</td><td>Ruptura de músculo papilar</td><td>Insuficiencia mitral aguda y edema pulmonar; papilar posteromedial en IAM inferior</td></tr>
<tr><td>Días 3–5</td><td>Ruptura del septum (CIV)</td><td>Soplo holosistólico paraesternal con frémito; salto oximétrico en el VD</td></tr>
<tr><td>Días 3–14</td><td>Ruptura de pared libre</td><td>Taponamiento y actividad eléctrica sin pulso</td></tr>
<tr><td>Semanas</td><td>Aneurisma ventricular</td><td>Elevación persistente del ST, IC, trombo mural</td></tr>
<tr><td>Semanas</td><td>Síndrome de Dressler</td><td>Pericarditis autoinmune</td></tr>
</table></div>
<p><b>Killip</b>: I sin IC · II estertores basales o S3 · III edema pulmonar · IV choque cardiogénico.</p>` }
      ],
      mnemo: { t: 'MONA se jubiló: solo la A es para todos', d: 'Morfina solo si el dolor es intenso · Oxígeno solo si SatO₂ <90% · Nitratos solo si no hay hipotensión, IAM de VD ni sildenafil · Aspirina a todos, salvo alergia. Y para localizar: “inferior es derecha” (DII, DIII y aVF → coronaria derecha).' },
      pearl: 'En IAMCEST nunca esperes la troponina: el ECG basta para activar la hemodinamia. Y en SCASEST la fibrinólisis siempre es la respuesta incorrecta.',
      trap: 'IAM inferior con hipotensión: si una opción dice “nitroglicerina” o “furosemida”, es la trampa. Piensa en el VD: V4R y volumen.',
      guide: [
        'Carga de aspirina: la ESC 2023 da 150–300 mg VO y la ACC/AHA 2025 da 162–325 mg. Las dos son correctas: lo importante es darla masticada y rápido.',
        'Pretratamiento con P2Y12 en SCASEST: la ESC 2023 no lo recomienda de rutina si el cateterismo será en <24 h. En muchos hospitales se sigue dando clopidogrel en urgencias. Si la pregunta dice “según la ESC”, no se pretrata.',
        'Bloqueo de rama izquierda nuevo: libros antiguos lo consideran IAMCEST automático; la ESC 2023 lo maneja como IAMCEST cuando hay síntomas isquémicos persistentes (apóyate en los criterios de Sgarbossa).'
      ],
      refs: [
        'Byrne RA, et al. 2023 ESC Guidelines for the management of acute coronary syndromes. Eur Heart J 2023.',
        'Rao SV, et al. 2025 ACC/AHA/ACEP/NAEMSP/SCAI Guideline for the Management of Patients With Acute Coronary Syndromes. Circulation 2025.',
        'Thygesen K, et al. Fourth Universal Definition of Myocardial Infarction. Eur Heart J 2019.'
      ]
    }
  },

  compares: {
    'stemi-nste': {
      topic: 'sca', a: 'IAMCEST', b: 'SCASEST',
      rows: [
        ['En la arteria', 'Oclusión total (trombo rojo, rico en fibrina)', 'Oclusión parcial o intermitente (trombo blanco, rico en plaquetas)'],
        ['Daño', 'Transmural', 'Subendocárdico'],
        ['ECG', 'Elevación persistente del ST o equivalente', 'Infradesnivel del ST, T invertidas o ECG normal'],
        ['Troponina', 'Elevada, pero no se espera para reperfundir', 'Elevada en IAMSEST; normal en angina inestable'],
        ['Decisión clave', 'Reperfundir ya: ICP primaria ≤120 min o fibrinólisis ≤10 min', 'Estratificar el riesgo (troponina, GRACE) y decidir cuándo cateterizar'],
        ['Fibrinólisis', 'Sí, si la ICP no llega a tiempo', 'Nunca: no beneficia y aumenta el sangrado'],
        ['Cateterismo', 'Inmediato (ICP primaria)', 'Inmediato <2 h si muy alto riesgo; <24 h si alto riesgo; selectivo si bajo riesgo'],
        ['Antiagregación', 'Aspirina + ticagrelor o prasugrel (clopidogrel si hubo fibrinólisis)', 'Aspirina + P2Y12; sin pretratamiento de rutina si el cateterismo es en <24 h']
      ]
    }
  },

  anims: {
    sca: {
      title: 'De la placa al infarto',
      steps: [
        { cap: '<b>Arteria sana.</b> El endotelio está liso y los eritrocitos pasan sin obstáculo. El miocardio de abajo recibe todo su oxígeno.',
          labels: [[80, 17, 'Endotelio'], [80, 50, 'Flujo normal'], [80, 86, 'Miocardio'], [14, 98, 'ECG']] },
        { cap: '<b>Disfunción endotelial.</b> El LDL entra a la íntima y se oxida. Los macrófagos lo fagocitan y se vuelven células espumosas: así empieza la estría grasa.',
          labels: [[40, 44, 'LDL'], [118, 86, 'Células espumosas']] },
        { cap: '<b>Placa estable.</b> Un núcleo de lípidos cubierto por una capa fibrosa gruesa estrecha la luz. En reposo alcanza el flujo; con el esfuerzo aparece la angina estable (síndrome coronario crónico).',
          labels: [[80, 86, 'Núcleo lipídico'], [126, 44, 'Capa fibrosa gruesa']] },
        { cap: '<b>Ruptura y trombo blanco.</b> La capa fibrosa delgada se rompe y expone el contenido de la placa. Las plaquetas se adhieren y forman un trombo que ocluye parcialmente: SCASEST, con infradesnivel del ST.',
          labels: [[80, 30, 'Ruptura'], [128, 46, 'Plaquetas'], [130, 104, 'ST ↓']] },
        { cap: '<b>Oclusión total.</b> La fibrina atrapa eritrocitos y forma un trombo rojo que cierra la arteria. El miocardio que depende de ella empieza a morir: IAMCEST, con elevación del ST. Tiempo es miocardio.',
          labels: [[85, 22, 'Trombo rojo'], [130, 86, 'Necrosis'], [130, 104, 'ST ↑']] },
        { cap: '<b>Reperfusión.</b> El stent abre la arteria y regresa el flujo. La aspirina y el P2Y12 evitan que las plaquetas vuelvan a agregarse. Lo que se salve depende de cuánto tardaste.',
          labels: [[83, 22, 'Stent (ICP)'], [40, 50, 'Flujo'], [130, 86, 'Cicatriz pequeña'], [130, 104, 'ST normaliza']] }
      ]
    }
  },

  cards: [
    ['¿En cuánto tiempo debe tomarse el ECG en dolor torácico?', '≤10 min desde el primer contacto'],
    ['Criterio de elevación del ST en V2–V3', 'Hombre ≥40 años: ≥2 mm · hombre <40: ≥2.5 mm · mujer: ≥1.5 mm (resto de derivaciones ≥1 mm)'],
    ['DII, DIII, aVF', 'IAM inferior → coronaria derecha (≈80–90%)'],
    ['V1–V4', 'IAM anterior → descendente anterior'],
    ['DI, aVL, V5–V6', 'IAM lateral → circunfleja o diagonal'],
    ['Infradesnivel del ST en V1–V3 con R alta', 'IAM posterior: toma V7–V9'],
    ['Triada del IAM de VD', 'Hipotensión + ingurgitación yugular + pulmones limpios → volumen, sin nitratos'],
    ['Meta de tiempo para ICP primaria', '≤120 min desde el diagnóstico (≤60 min si ya está en un hospital con hemodinamia)'],
    ['Si la ICP no llega a tiempo', 'Fibrinólisis en ≤10 min desde el diagnóstico (tenecteplasa)'],
    ['¿Cómo sabes que la fibrinólisis funcionó?', 'El ST baja ≥50% a los 60–90 min y cede el dolor; si no, ICP de rescate'],
    ['Después de una fibrinólisis exitosa', 'Coronariografía en 2–24 h'],
    ['Contraindicaciones absolutas de fibrinólisis', 'HIC previa · EVC isquémico <6 meses · daño o neoplasia del SNC · trauma, cirugía o TCE <1 mes · sangrado GI <1 mes · trastorno hemorrágico · disección aórtica · punciones no compresibles <24 h'],
    ['SCASEST: coronariografía inmediata (<2 h) si…', 'Choque o inestabilidad, dolor refractario, arritmias graves o paro, complicación mecánica, IC aguda, cambios dinámicos recurrentes del ST'],
    ['SCASEST: coronariografía temprana (<24 h) si…', 'IAMSEST confirmado, cambios dinámicos del ST/T, elevación transitoria del ST o GRACE >140'],
    ['Prasugrel: contraindicación y ajuste', 'Contraindicado con EVC o AIT previo; 5 mg/día si ≥75 años o <60 kg'],
    ['Ticagrelor: dosis y efecto adverso', 'Carga 180 mg, luego 90 mg c/12 h; disnea'],
    ['¿Cuándo usar clopidogrel en SCA?', 'Con fibrinólisis, si necesita anticoagulante oral o si no hay ticagrelor ni prasugrel'],
    ['Duración de la doble antiagregación', '12 meses de forma predeterminada'],
    ['Meta de LDL después de un SCA', '<55 mg/dL y reducción ≥50%'],
    ['Ruptura de músculo papilar', 'IAM inferior, días 2–7: insuficiencia mitral aguda con edema pulmonar'],
    ['Elevación del ST que persiste semanas después de un IAM', 'Aneurisma ventricular'],
    ['Clasificación de Killip', 'I sin IC · II estertores o S3 · III edema pulmonar · IV choque'],
    ['Las 7 variables de TIMI (SCASEST)', 'Edad ≥65 · ≥3 factores de riesgo · coronariopatía conocida ≥50% · aspirina en 7 días · ≥2 anginas en 24 h · desviación del ST ≥0.5 mm · marcador positivo']
  ],

  questions: [
    q({ id: 'sca-01', dif: 2,
      stem: 'Hombre de 63 años con dolor torácico de 1 h. ECG: elevación del ST de 3 mm en DII, DIII y aVF. PA 82/50 mmHg, ingurgitación yugular y campos pulmonares limpios. ¿Cuál es el siguiente paso más adecuado?',
      opts: ['Nitroglicerina sublingual y furosemida IV', 'Tomar derivaciones derechas (V4R) y dar una carga de cristaloide', 'Morfina IV y oxígeno por mascarilla', 'Betabloqueador IV para reducir el consumo de oxígeno', 'Esperar la troponina antes de decidir la reperfusión'],
      ans: 1,
      exp: 'IAM inferior + hipotensión + IY + pulmones limpios = infarto del ventrículo derecho (CD proximal). Se confirma con V4R. El VD depende de la precarga: da volumen y evita nitratos, diuréticos y morfina, que la reducen. La reperfusión urgente sigue siendo la prioridad.',
      why: ['Nitratos y diuréticos reducen la precarga y pueden causar colapso hemodinámico en el IAM de VD.', '', 'La morfina también es venodilatadora, y el oxígeno solo se da si la SatO₂ es <90%.', 'Un betabloqueador IV con hipotensión y posible choque está contraindicado.', 'En IAMCEST la troponina no se espera: el ECG basta para reperfundir.'],
      ref: 'ESC 2023 SCA' }),

    q({ id: 'sca-02', dif: 2,
      stem: 'Mujer de 55 años con IAMCEST anterior de 2 h de evolución en un hospital sin hemodinamia. El traslado a un centro con ICP tardaría unas 3 h. Sin contraindicaciones. ¿Qué haces?',
      opts: ['Trasladarla para ICP primaria aunque tarde 3 h', 'Fibrinólisis en los primeros 10 min y luego traslado para coronariografía en 2–24 h', 'Tratamiento médico y coronariografía electiva en 1 semana', 'Esperar la troponina de las 3 h para confirmar', 'Fibrinólisis y alta a casa si se quita el dolor'],
      ans: 1,
      exp: 'Si la ICP primaria no puede hacerse en ≤120 min desde el diagnóstico, se da fibrinólisis (de preferencia tenecteplasa) en ≤10 min, siempre que lleve <12 h de síntomas. Después se traslada a un centro con ICP: coronariografía en 2–24 h si fue exitosa, o ICP de rescate inmediata si falló.',
      why: ['3 h rebasa el límite de 120 min; cada minuto de retraso es miocardio perdido.', '', 'Sin reperfusión urgente pierde miocardio que se podía salvar.', 'En IAMCEST la troponina no se espera.', 'Toda fibrinólisis debe seguirse de traslado a un centro con ICP (estrategia farmacoinvasiva).'],
      ref: 'ESC 2023 SCA' }),

    q({ id: 'sca-03', dif: 2,
      stem: 'Hombre de 70 años con IAMCEST inferior de 90 min en un hospital sin hemodinamia (traslado >3 h). ¿Cuál de estos antecedentes es una contraindicación ABSOLUTA para la fibrinólisis?',
      opts: ['PA de 175/100 mmHg al ingreso', 'EVC isquémico hace 3 meses', 'Toma warfarina', 'Úlcera péptica activa', 'RCP de 5 min no traumática'],
      ans: 1,
      exp: 'Absolutas: hemorragia intracraneal previa o EVC de origen desconocido, EVC isquémico en los últimos 6 meses, daño o neoplasia del SNC, trauma, cirugía o TCE en el último mes, sangrado GI en el último mes, trastorno hemorrágico, disección aórtica y punciones no compresibles en 24 h.',
      why: ['Ni siquiera llega al umbral de contraindicación relativa (PAS >180 o PAD >110).', '', 'La anticoagulación oral es una contraindicación relativa.', 'La úlcera péptica activa es relativa.', 'Solo la RCP traumática o prolongada es contraindicación relativa.'],
      ref: 'ESC 2023 SCA' }),

    q({ id: 'sca-04', dif: 2,
      stem: 'Mujer de 49 años con dolor opresivo de 30 min. ECG: elevación del ST de 1.5 mm en V2 y V3, sin otros cambios. ¿Cómo interpretas el ECG?',
      opts: ['No cumple criterio de IAMCEST: en V2–V3 se requieren ≥2 mm', 'Cumple criterio de IAMCEST: en mujeres el umbral en V2–V3 es ≥1.5 mm', 'Solo sería IAMCEST si también hubiera elevación ≥1 mm en derivaciones de miembros', 'Es repolarización precoz hasta demostrar lo contrario', 'Necesita troponina positiva para considerarlo IAMCEST'],
      ans: 1,
      exp: 'Umbrales en V2–V3: ≥2 mm en hombres ≥40 años, ≥2.5 mm en hombres <40 y ≥1.5 mm en mujeres. En las demás derivaciones, ≥1 mm en dos contiguas.',
      why: ['≥2 mm es el umbral para hombres ≥40 años; en mujeres basta ≥1.5 mm.', '', 'V2 y V3 son contiguas: con eso basta.', 'Con dolor típico y una elevación que cumple criterio, se asume isquemia.', 'El diagnóstico electrocardiográfico de IAMCEST no espera la troponina.'],
      ref: '4ª definición universal de IAM' }),

    q({ id: 'sca-05', dif: 2,
      stem: 'Hombre de 66 años con IAMSEST: troponina elevada e infradesnivel del ST en V4–V6. A pesar de nitroglicerina IV, aspirina y anticoagulación sigue con dolor y su PA baja a 85/55 mmHg. ¿Cuándo debe ir a coronariografía?',
      opts: ['De inmediato, en menos de 2 horas', 'Temprana, en las primeras 24 h', 'En las primeras 72 h', 'Solo si una prueba de esfuerzo sale positiva', 'Nunca: debe recibir fibrinólisis'],
      ans: 0,
      exp: 'Muy alto riesgo (dolor refractario e inestabilidad hemodinámica) = coronariografía inmediata, en <2 h. Otros criterios de muy alto riesgo: arritmias graves, IC aguda, complicaciones mecánicas y cambios dinámicos recurrentes del ST.',
      why: ['', 'El plazo de <24 h es para alto riesgo sin inestabilidad.', 'Él es de muy alto riesgo; no puede esperar.', 'Una prueba de esfuerzo está contraindicada con dolor activo e inestabilidad.', 'La fibrinólisis nunca está indicada en SCASEST.'],
      ref: 'ESC 2023 SCA' }),

    q({ id: 'sca-06', dif: 2,
      stem: 'Mujer de 71 años con dolor torácico que cedió en urgencias. ECG con T invertidas en V4–V6; troponina de alta sensibilidad con ascenso significativo a la hora. GRACE 152. Estable y sin dolor. ¿Estrategia?',
      opts: ['Coronariografía inmediata (<2 h)', 'Coronariografía temprana (<24 h)', 'Alta con prueba de esfuerzo ambulatoria', 'Fibrinólisis', 'Solo tratamiento médico'],
      ans: 1,
      exp: 'IAMSEST confirmado y GRACE >140 = alto riesgo → estrategia invasiva temprana (<24 h). La inmediata (<2 h) se reserva para muy alto riesgo.',
      why: ['No tiene criterios de muy alto riesgo: está estable y sin dolor.', '', 'Con IAMSEST confirmado no se da de alta.', 'Nunca en SCASEST.', 'El paciente de alto riesgo se beneficia de la estrategia invasiva.'],
      ref: 'ESC 2023 SCA' }),

    q({ id: 'sca-07', dif: 3,
      stem: 'Hombre de 57 años con IAMCEST anterior. Recibió tenecteplasa hace 75 min en su hospital comunitario. Sigue con dolor y el ST bajó solo 20%. ¿Qué haces?',
      opts: ['Repetir la tenecteplasa', 'Trasladarlo de inmediato para ICP de rescate', 'Esperar 24 h y hacer coronariografía programada', 'Agregar heparina y observar', 'Iniciar nitroglicerina IV y valorar en 6 h'],
      ans: 1,
      exp: 'Fibrinólisis fallida = el ST baja <50% a los 60–90 min o persisten el dolor o la inestabilidad → ICP de rescate inmediata. Repetir el fibrinolítico no se recomienda.',
      why: ['Repetir la fibrinólisis no mejora el resultado y aumenta el sangrado.', '', 'La coronariografía en 2–24 h es para la fibrinólisis exitosa.', 'Retrasa la reperfusión de una arteria que sigue cerrada.', 'Retrasa la reperfusión de una arteria que sigue cerrada.'],
      ref: 'ESC 2023 SCA' }),

    q({ id: 'sca-08', dif: 2,
      stem: 'Hombre de 68 años con IAMSEST que irá a ICP. Tuvo un accidente isquémico transitorio hace 2 años. No toma anticoagulantes. ¿Qué inhibidor P2Y12 eliges junto con la aspirina?',
      opts: ['Prasugrel 60 mg de carga', 'Ticagrelor 180 mg de carga', 'Ninguno; solo aspirina', 'Prasugrel 30 mg por su edad', 'Clopidogrel 75 mg sin dosis de carga'],
      ans: 1,
      exp: 'El prasugrel está contraindicado con antecedente de EVC o AIT (más hemorragia intracraneal en TRITON-TIMI 38). El ticagrelor (carga 180 mg, luego 90 mg c/12 h) es preferido sobre el clopidogrel en SCA.',
      why: ['Contraindicado por el AIT previo.', '', 'El SCA requiere doble antiagregación.', 'No existe esa dosis, y el AIT lo contraindica de todos modos.', 'El clopidogrel es inferior al ticagrelor en SCA y siempre requiere carga (300–600 mg).'],
      ref: 'ESC 2023 SCA' }),

    q({ id: 'sca-09', dif: 2,
      stem: 'Hombre de 62 años en su cuarto día de un IAM inferior. Presenta disnea súbita, estertores bilaterales y un soplo holosistólico nuevo en el ápex que se irradia a la axila. PA 88/56. ¿Diagnóstico más probable?',
      opts: ['Ruptura del septum interventricular', 'Ruptura del músculo papilar posteromedial', 'Síndrome de Dressler', 'Reinfarto', 'Aneurisma ventricular'],
      ans: 1,
      exp: 'El músculo papilar posteromedial tiene irrigación única (la descendente posterior, casi siempre de la CD), por eso se rompe en IAM inferiores, típicamente entre los días 2 y 7. Causa insuficiencia mitral aguda con edema pulmonar y choque. Ecocardiograma urgente y cirugía.',
      why: ['La CIV también da soplo holosistólico, pero suele ser paraesternal izquierdo con frémito; la irradiación a la axila apunta a la válvula mitral.', '', 'Es una pericarditis que aparece semanas después; no causa insuficiencia mitral.', 'Daría dolor nuevo y cambios en el ECG; no explica el soplo.', 'Aparece semanas después, con IC progresiva y elevación persistente del ST.'],
      ref: 'ESC 2023 SCA' }),

    q({ id: 'sca-10', dif: 2,
      stem: 'Hombre de 60 años, 7 semanas después de un IAM anterior extenso tratado tarde. Tiene disnea de esfuerzo. ECG: elevación persistente del ST en V1–V4 con ondas Q. ¿Diagnóstico?',
      opts: ['Reinfarto agudo', 'Aneurisma del ventrículo izquierdo', 'Pericarditis aguda', 'Síndrome de Brugada', 'Hiperkalemia'],
      ans: 1,
      exp: 'La elevación del ST que persiste semanas después de un IAM, con ondas Q, sugiere aneurisma ventricular: una zona de cicatriz que se mueve en sentido contrario (discinesia). Complicaciones: IC, arritmias ventriculares y trombo mural con embolia. Se confirma con ecocardiograma.',
      why: ['Un reinfarto tendría dolor agudo y elevación nueva de troponina.', '', 'La pericarditis da elevación difusa del ST con infradesnivel del PR.', 'Brugada es un patrón en V1–V2 en personas jóvenes, sin relación con un infarto.', 'La hiperkalemia da T picudas y QRS ancho.'],
      ref: 'ESC 2023 SCA' }),

    q({ id: 'sca-11', dif: 2,
      stem: 'Mujer de 74 años con hemorragia digestiva: Hb 6.2 g/dL y FC 128. Refiere opresión torácica. Troponina de alta sensibilidad elevada y en ascenso; ECG con infradesnivel difuso leve del ST. ¿Conducta más adecuada?',
      opts: ['Coronariografía inmediata y doble antiagregación', 'Fibrinólisis', 'Tratar la causa: transfusión, control del sangrado y de la frecuencia cardiaca', 'Ignorar la troponina: es un falso positivo', 'Heparina a dosis plenas'],
      ans: 2,
      exp: 'IAM tipo 2: necrosis por desequilibrio entre aporte y demanda de oxígeno (anemia grave, taquicardia, hipotensión), sin ruptura de placa. Se trata corrigiendo la causa. Antiagregar o anticoagular a una paciente que sangra empeora todo.',
      why: ['La doble antiagregación con sangrado activo es peligrosa, y la causa no es trombótica.', 'Contraindicada por el sangrado activo.', '', 'Es una lesión miocárdica real con mal pronóstico.', 'Empeora la hemorragia.'],
      ref: '4ª definición universal de IAM' }),

    q({ id: 'sca-12', dif: 2,
      stem: 'Hombre de 59 años con dolor torácico típico. ECG: infradesnivel del ST de 2 mm en V1–V3 con ondas R altas y T positivas. ¿Qué haces?',
      opts: ['Tratarlo como SCASEST de bajo riesgo', 'Tomar derivaciones posteriores V7–V9', 'Tomar derivaciones derechas V3R–V4R', 'Repetir el ECG en 24 h', 'Hacer prueba de esfuerzo'],
      ans: 1,
      exp: 'El infradesnivel del ST en V1–V3 con R alta es la imagen en espejo de un IAM posterior (circunfleja o CD). Una elevación ≥0.5 mm en V7–V9 confirma IAMCEST posterior, que necesita reperfusión urgente.',
      why: ['Es un equivalente de IAMCEST, no un SCASEST de bajo riesgo.', '', 'V4R busca el VD; la pared posterior se ve en V7–V9.', 'Retrasa una posible reperfusión.', 'Está contraindicada en un SCA con dolor.'],
      ref: 'ESC 2023 SCA' }),

    q({ id: 'sca-13', dif: 3,
      stem: 'Hombre de 52 años que ayer tuvo dolor torácico; hoy está asintomático. ECG: T profundamente invertidas y simétricas en V2–V3, sin elevación del ST ni ondas Q. Troponina levemente elevada. ¿Qué significa y qué debes evitar?',
      opts: ['Patrón de Wellens: estenosis crítica de la DA proximal; evitar la prueba de esfuerzo y programar coronariografía', 'Repolarización precoz benigna; alta', 'IAM antiguo cicatrizado; prueba de esfuerzo', 'Hipertrofia ventricular izquierda; ecocardiograma ambulatorio', 'Pericarditis; AINE y colchicina'],
      ans: 0,
      exp: 'El síndrome de Wellens (T bifásicas o profundamente invertidas en V2–V3 en un paciente sin dolor) indica estenosis crítica proximal de la descendente anterior, con alto riesgo de un IAM anterior extenso. Una prueba de esfuerzo puede desencadenarlo: va a coronariografía.',
      why: ['', 'La repolarización precoz da elevación del ST, no T invertidas profundas.', 'Un IAM antiguo dejaría ondas Q, y la prueba de esfuerzo es peligrosa aquí.', 'La HVI da voltaje alto con sobrecarga lateral, no T profundas aisladas en V2–V3.', 'La pericarditis da elevación difusa del ST e infradesnivel del PR.'],
      ref: 'ESC 2023 SCA' }),

    q({ id: 'sca-14', dif: 1,
      stem: 'Hombre de 60 años con dolor torácico típico de 20 min. SatO₂ 96% al aire ambiente, PA 138/84. ¿Cuál de estas medidas iniciales es correcta?',
      opts: ['Oxígeno a 10 L/min por mascarilla a todo paciente con SCA', 'Aspirina 150–300 mg VO masticada y ECG en ≤10 min', 'Morfina IV a todo paciente con dolor', 'Esperar la troponina antes de dar aspirina', 'Betabloqueador IV de rutina'],
      ans: 1,
      exp: 'Lo que siempre va: ECG en ≤10 min y aspirina masticada. Oxígeno solo si la SatO₂ es <90%: el exceso no ayuda y puede dañar. La morfina se reserva para dolor intenso. El “MONA para todos” ya no se usa.',
      why: ['Oxígeno solo si la SatO₂ es <90%.', '', 'Solo si el dolor es intenso y persistente; retrasa la absorción de los P2Y12.', 'La aspirina no espera la troponina.', 'No es rutina por riesgo de choque; el betabloqueador oral se inicia en las primeras 24 h si no hay contraindicaciones.'],
      ref: 'ESC 2023 SCA' }),

    q({ id: 'sca-15', dif: 2,
      stem: 'Hombre de 58 años, 6 semanas después de un IAMSEST. Toma atorvastatina 80 mg/día con buen apego. LDL 84 mg/dL (antes del evento era 160). ¿Qué haces?',
      opts: ['Nada: ya bajó más del 50%', 'Agregar ezetimiba', 'Cambiar a simvastatina 80 mg', 'Agregar un fibrato', 'Suspender la estatina y dejar solo ezetimiba'],
      ans: 1,
      exp: 'Después de un SCA (muy alto riesgo) la meta es LDL <55 mg/dL y reducción ≥50% de la basal. Si no se alcanza con estatina de alta intensidad a dosis máxima tolerada en 4–6 semanas, se agrega ezetimiba; si aun así no llega, un iPCSK9.',
      why: ['Necesita las dos cosas: reducción ≥50% y LDL <55.', '', 'La simvastatina 80 mg es menos potente y tiene más riesgo de miopatía.', 'Los fibratos no reducen eventos sobre la estatina; se usan para triglicéridos muy altos.', 'Perderías el efecto de la estatina de alta intensidad.'],
      ref: 'ESC 2023 SCA · ESC/EAS dislipidemias' })
  ],

  cases: [
    { id: 'g-sca', topic: 'sca', subj: 'cardio',
      title: 'Dolor a las 3 a. m.', place: 'Urgencias · tu hospital tiene hemodinamia 24 h',
      patient: { name: 'Ernesto', age: 61, sex: 'H', skin: '#D9A07A', hair: '#8C8C96', gown: '#7FC8A9' },
      intro: 'Fumador, con DM2 e HTA. Tuvo un EVC isquémico hace 2 años, sin secuelas. Llega con dolor opresivo retroesternal de 40 min, irradiado a la mandíbula, con diaforesis.',
      extra: { label: 'DOLOR', unit: '/10' },
      start: { FC: 98, PAS: 118, PAD: 72, SpO2: 96, FR: 20, X: 8 },
      nodes: [
        { tag: 'Minuto 0', ecg: 'normal',
          text: 'Lo pasas a la sala de choque. Está pálido y diaforético.',
          q: '¿Qué haces primero?',
          A: { t: 'ECG de 12 derivaciones en los primeros 10 minutos', ok: true, res: 'ECG a los 6 min: elevación del ST de 3 mm en DII, DIII y aVF, con infradesnivel en DI y aVL.', ecg: 'stemi' },
          B: { t: 'Pedir troponina y esperar el resultado para decidir', ok: false, res: 'Pasan 50 min esperando al laboratorio. Cuando por fin le toman el ECG: elevación del ST en DII, DIII y aVF. Miocardio perdido.', ecg: 'stemi', vit: { FC: 104 } },
          why: 'El ECG se toma en ≤10 min desde el primer contacto. En IAMCEST la troponina no se espera para reperfundir.' },
        { tag: 'Minuto 8', ecg: 'stemi', vit: { FC: 58, PAS: 84, PAD: 52 },
          text: 'IAMCEST inferior. Ahora está hipotenso, con ingurgitación yugular y campos pulmonares limpios.',
          q: '¿Siguiente paso?',
          A: { t: 'Nitroglicerina sublingual para el dolor', ok: false, res: 'La PA cae a 64/40. El VD infartado dependía de su precarga.', vit: { PAS: 64, PAD: 40 } },
          B: { t: 'Derivaciones derechas (V4R) y carga de cristaloide', ok: true, res: 'V4R con elevación del ST: infarto del VD. Con 500 mL de cristaloide la PA sube a 102/64.', vit: { PAS: 102, PAD: 64 } },
          why: 'IAM inferior + hipotensión + IY + pulmones limpios = IAM de VD. Volumen; evita nitratos, diuréticos y morfina.' },
        { tag: 'Minuto 12', ecg: 'stemi', vit: { PAS: 102, PAD: 64 },
          text: 'La sala de hemodinamia está disponible. Lleva 52 min de síntomas.',
          q: '¿Cómo reperfundes?',
          A: { t: 'Fibrinólisis con tenecteplasa en urgencias', ok: false, res: 'Podía recibir ICP primaria en menos de 60 min, que es superior a la fibrinólisis.' },
          B: { t: 'Activar hemodinamia para ICP primaria (meta ≤60 min desde el diagnóstico)', ok: true, res: 'La guía cruza la lesión a los 48 min del diagnóstico.' },
          why: 'Si la ICP primaria puede hacerse en ≤120 min, es la de elección; en un hospital con hemodinamia la meta es ≤60 min. La fibrinólisis es para cuando la ICP no llega a tiempo.' },
        { tag: 'Sala de hemodinamia', ecg: 'stemi',
          text: 'Ya recibió aspirina 300 mg masticada. Falta el inhibidor P2Y12. Recuerda su EVC isquémico de hace 2 años.',
          q: '¿Cuál das?',
          A: { t: 'Prasugrel 60 mg', ok: false, res: 'El prasugrel está contraindicado con EVC o AIT previo por el riesgo de hemorragia intracraneal. El hemodinamista lo cambia por ticagrelor.' },
          B: { t: 'Ticagrelor 180 mg', ok: true, res: 'Le colocan un stent farmacoactivo en la CD proximal. Flujo TIMI 3.' },
          after: { ecg: 'normal', vit: { FC: 72, PAS: 112, PAD: 70, X: 2 } },
          why: 'Prasugrel y ticagrelor se prefieren sobre clopidogrel en SCA, pero el prasugrel está contraindicado con antecedente de EVC o AIT.' },
        { tag: 'Día 4 · Unidad coronaria', ecg: 'tachy', vit: { FC: 118, PAS: 88, PAD: 56, SpO2: 86, FR: 30, X: 3 },
          text: 'Disnea súbita. Estertores en ambos campos y un soplo holosistólico nuevo en el ápex que se irradia a la axila.',
          q: '¿Qué sospechas?',
          A: { t: 'Ruptura del músculo papilar posteromedial: ecocardiograma urgente y cirugía', ok: true, res: 'El eco muestra una valva mitral flácida con insuficiencia grave. Balón de contrapulsación como puente y cirugía urgente.', vit: { FC: 100, PAS: 98, PAD: 62, SpO2: 93 } },
          B: { t: 'Pericarditis post-IAM: AINE y colchicina', ok: false, res: 'Pasan horas sin tratar una insuficiencia mitral aguda: edema pulmonar franco y choque.', vit: { PAS: 72, PAD: 44, SpO2: 80 } },
          why: 'IAM inferior + días 2–7 + soplo holosistólico apical nuevo + edema pulmonar = ruptura del papilar posteromedial, que tiene irrigación única. Es una urgencia quirúrgica.' },
        { tag: 'Alta, día 14', ecg: 'normal', vit: { FC: 66, PAS: 118, PAD: 72, SpO2: 97, FR: 16, X: 0 },
          text: 'FEVI 38%. Tiene DM2. LDL al ingreso: 128 mg/dL.',
          q: '¿Qué tratamiento de alta indicas?',
          A: { t: 'Aspirina + ticagrelor por 12 meses, atorvastatina 80 mg, betabloqueador, IECA, eplerenona e iSGLT2', ok: true, res: 'Lo refieres a rehabilitación cardiaca y a la clínica de tabaquismo.' },
          B: { t: 'Solo aspirina y atorvastatina 20 mg, porque ya tiene stent', ok: false, res: 'Sin P2Y12 aumenta el riesgo de trombosis del stent, y con FEVI 38% pierde el beneficio en mortalidad de betabloqueador, IECA y ARM.' },
          why: 'Doble antiagregación por 12 meses, estatina de alta intensidad (meta LDL <55) y, con FEVI ≤40%: betabloqueador, IECA o ARA-II, ARM (si hay IC o DM) e iSGLT2.' }
      ] }
  ]
};
