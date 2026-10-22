// Tema 26 · Hipertensión pulmonar (Cardiología, semana 6)
const T = { topic: 'hp', subj: 'cardio' };
const q = (o) => ({ ...T, ...o });

export default {
  lessons: {
    hp: {
      hook: 'La hipertensión pulmonar se sospecha con el eco, pero se confirma con cateterismo derecho. Clasifícala en uno de 5 grupos: el tratamiento depende del grupo.',
      nn: [['pulmonary-hypertension', 'Pulmonary Hypertension']],
      yt: 'pulmonary hypertension',
      sections: [
        { h: 'Definición (ESC/ERS 2022)', html: `
<ul>
<li><b>Presión arterial pulmonar media &gt;20 mmHg</b> en reposo, medida por <b>cateterismo cardiaco derecho</b>.</li>
<li><b>Precapilar</b>: presión de enclavamiento (PAWP) ≤15 mmHg y resistencia vascular pulmonar &gt;2 unidades Wood.</li>
<li><b>Poscapilar</b> (cardiopatía izquierda): PAWP &gt;15 mmHg; aislada si RVP ≤2, combinada si &gt;2.</li>
</ul>` },
        { h: 'Los 5 grupos', html: `
<ul>
<li><b>Grupo 1 – Hipertensión arterial pulmonar (HAP)</b>: idiopática, hereditaria (BMPR2), fármacos y tóxicos (anorexígenos, metanfetaminas, dasatinib), enfermedades del tejido conectivo (<b>esclerosis sistémica</b>), VIH, hipertensión portal (portopulmonar), cardiopatías congénitas, esquistosomiasis.</li>
<li><b>Grupo 2 – Cardiopatía izquierda</b>: IC con FE reducida o preservada, valvulopatías. <b>La causa más común.</b></li>
<li><b>Grupo 3 – Enfermedad pulmonar o hipoxia</b>: EPOC, enfermedad pulmonar intersticial, apnea del sueño, altitud.</li>
<li><b>Grupo 4 – Obstrucción de arterias pulmonares</b>: hipertensión pulmonar tromboembólica crónica (HPTEC).</li>
<li><b>Grupo 5 – Mecanismos multifactoriales</b>: sarcoidosis, anemias hemolíticas crónicas, ERC en diálisis, neoplasias mieloproliferativas.</li>
</ul>` },
        { h: 'Clínica y abordaje', html: `
<ul>
<li>Disnea de esfuerzo progresiva, fatiga, síncope de esfuerzo, angina; luego datos de falla derecha (ingurgitación yugular, edema, hepatomegalia, ascitis).</li>
<li>Exploración: <b>R2 pulmonar intenso</b>, soplo de insuficiencia tricuspídea, levantamiento paraesternal.</li>
<li>ECG: hipertrofia del VD, eje a la derecha. Rx: arterias pulmonares prominentes.</li>
<li><b>Ecocardiograma</b>: primer estudio; estima la probabilidad (velocidad de regurgitación tricuspídea &gt;2.8 m/s y signos del VD).</li>
<li>Busca primero los grupos 2 y 3 (eco, pruebas de función pulmonar, TC de tórax, oximetría nocturna).</li>
<li><b>Gammagrama V/Q</b> para descartar HPTEC: es más sensible que la angio-TC para tamizaje.</li>
<li><b>Cateterismo derecho</b> para confirmar y clasificar. En HAP idiopática, hereditaria o por fármacos: <b>prueba de vasorreactividad</b> (óxido nítrico inhalado).</li>
</ul>` },
        { h: 'Tratamiento por grupo', html: `
<ul>
<li><b>Grupo 1</b>: según riesgo. Bajo-intermedio: <b>terapia combinada inicial</b> con antagonista de receptores de endotelina (ambrisentán, macitentán, bosentán) + inhibidor de PDE5 (sildenafil, tadalafil). Alto riesgo: agregar prostaciclina IV o SC (epoprostenol, treprostinil). Otras: selexipag, riociguat (no combinar con PDE5i), sotatercept.</li>
<li>Respondedores a vasorreactividad (~10% de HAP idiopática): <b>calcioantagonistas en dosis altas</b>. Si no responden, los calcioantagonistas están contraindicados.</li>
<li><b>Grupo 2</b>: tratar la cardiopatía izquierda. No usar vasodilatadores de HAP.</li>
<li><b>Grupo 3</b>: tratar la enfermedad pulmonar + <b>oxígeno</b> si hay hipoxemia. Treprostinil inhalado en enfermedad intersticial seleccionada.</li>
<li><b>Grupo 4</b>: <b>anticoagulación de por vida</b> + <b>endarterectomía pulmonar</b> (potencialmente curativa); si no es operable: angioplastia con balón o riociguat.</li>
<li>General: diuréticos, oxígeno si PaO2 &lt;60, ejercicio supervisado, vacunas, evitar el embarazo (mortalidad materna alta). Trasplante pulmonar en casos refractarios.</li>
</ul>` }
      ],
      mnemo: { t: '“Arteria, Corazón, Pulmón, Coágulo, Otros”', d: 'Grupo 1 arterial (HAP), 2 corazón izquierdo, 3 pulmón e hipoxia, 4 coágulos crónicos (HPTEC), 5 multifactorial.' },
      pearl: 'Paciente con esclerosis sistémica: tamizaje anual de HAP con eco, pruebas de función pulmonar (DLCO) y NT-proBNP. Es la principal causa de muerte en esclerosis limitada.',
      trap: 'Sildenafil en hipertensión pulmonar por IC izquierda (grupo 2): no está indicado y puede causar edema pulmonar.',
      guide: [
        'Umbral diagnóstico: la ESC/ERS 2022 bajó la PAPm de ≥25 a >20 mmHg y la RVP de >3 a >2 UW. Muchos libros todavía dicen ≥25 mmHg.',
        'Sotatercept (inhibidor de la señalización de activina) fue aprobado en 2024 para HAP; puede no estar en tu bibliografía.'
      ],
      refs: [
        'Humbert M, et al. 2022 ESC/ERS Guidelines for the diagnosis and treatment of pulmonary hypertension. Eur Heart J 2022.',
        'Hoeper MM, et al. Sotatercept for PAH (STELLAR). N Engl J Med 2023.'
      ]
    }
  },

  cards: [
    ['Definición hemodinámica de HP (ESC/ERS 2022)', 'PAPm >20 mmHg en reposo por cateterismo derecho'],
    ['HP precapilar', 'PAWP ≤15 mmHg y RVP >2 UW'],
    ['Grupo más común de HP', 'Grupo 2: cardiopatía izquierda'],
    ['Grupo 1', 'Hipertensión arterial pulmonar (idiopática, hereditaria, fármacos, conectivopatías, VIH, portal, congénitas)'],
    ['Grupo 4', 'Hipertensión pulmonar tromboembólica crónica'],
    ['Primer estudio ante sospecha de HP', 'Ecocardiograma'],
    ['Tamizaje de HPTEC', 'Gammagrama V/Q'],
    ['Confirmación de HP', 'Cateterismo cardiaco derecho'],
    ['HAP con vasorreactividad positiva', 'Calcioantagonistas en dosis altas'],
    ['HAP de bajo-intermedio riesgo', 'Combinación inicial: antagonista de endotelina + inhibidor de PDE5'],
    ['HPTEC: tratamiento curativo', 'Endarterectomía pulmonar + anticoagulación de por vida'],
    ['Riociguat', 'Estimulador de guanilato ciclasa soluble; no combinar con PDE5i']
  ],

  questions: [
    q({ id: 'hp-01', dif: 1,
      stem: 'Según la ESC/ERS 2022, ¿cuál es la definición hemodinámica de hipertensión pulmonar?',
      opts: ['PSAP >35 mmHg por eco', 'PAPm >20 mmHg en reposo por cateterismo derecho', 'PAPm ≥25 mmHg con ejercicio', 'Velocidad tricuspídea >2 m/s', 'PAWP >15 mmHg'],
      ans: 1,
      exp: 'La guía de 2022 bajó el umbral a PAPm >20 mmHg en reposo, medida por cateterismo. El eco solo estima la probabilidad.',
      why: ['El eco no hace el diagnóstico.', '', 'No se define con ejercicio.', 'Es un dato de probabilidad, con otro umbral.', 'Define el componente poscapilar.'],
      ref: 'ESC/ERS 2022 HP' }),

    q({ id: 'hp-02', dif: 2,
      stem: 'Mujer de 32 años con disnea progresiva y síncope de esfuerzo. Eco: VD dilatado, velocidad tricuspídea 3.8 m/s, VI normal. PFP y TC de tórax normales. Gammagrama V/Q normal. ¿Siguiente paso?',
      opts: ['Iniciar sildenafil empírico', 'Cateterismo cardiaco derecho con prueba de vasorreactividad', 'Anticoagulación de por vida', 'Biopsia pulmonar', 'Repetir el eco en 1 año'],
      ans: 1,
      exp: 'Alta probabilidad de HAP (grupo 1) tras descartar grupos 2, 3 y 4: el cateterismo confirma y la prueba de vasorreactividad identifica a quienes responderán a calcioantagonistas.',
      why: ['No sin confirmar el diagnóstico.', '', 'No hay HPTEC.', 'No está indicada.', 'Retrasa el tratamiento.'],
      ref: 'ESC/ERS 2022 HP' }),

    q({ id: 'hp-03', dif: 2,
      stem: 'Paciente con disnea persistente 6 meses después de un TEP, pese a anticoagulación. Eco con datos de hipertensión pulmonar. ¿Estudio para buscar HPTEC?',
      opts: ['Dímero D', 'Gammagrama de ventilación/perfusión', 'Ultrasonido Doppler de piernas', 'Prueba de esfuerzo', 'Ecocardiograma transesofágico'],
      ans: 1,
      exp: 'El gammagrama V/Q es el estudio de tamizaje de HPTEC: un V/Q normal la descarta. Si hay defectos, se confirma con cateterismo y angiografía pulmonar.',
      why: ['No sirve para HPTEC.', '', 'No evalúa la circulación pulmonar.', 'No es diagnóstico.', 'No evalúa las arterias pulmonares distales.'],
      ref: 'ESC/ERS 2022 HP' }),

    q({ id: 'hp-04', dif: 2,
      stem: 'Hombre con HPTEC confirmada, con trombos organizados en arterias lobares accesibles. ¿Tratamiento?',
      opts: ['Solo oxígeno', 'Anticoagulación de por vida + endarterectomía pulmonar', 'Trombólisis', 'Calcioantagonista', 'Filtro de vena cava como único tratamiento'],
      ans: 1,
      exp: 'La endarterectomía pulmonar puede curar la HPTEC operable. La anticoagulación se mantiene de por vida.',
      why: ['Insuficiente.', '', 'Los trombos están organizados; no responden.', 'No tiene papel.', 'No trata la enfermedad.'],
      ref: 'ESC/ERS 2022 HP' }),

    q({ id: 'hp-05', dif: 1,
      stem: '¿Cuál es la causa más común de hipertensión pulmonar?',
      opts: ['HAP idiopática', 'Cardiopatía izquierda', 'HPTEC', 'Esquistosomiasis', 'Sarcoidosis'],
      ans: 1,
      exp: 'El grupo 2 (IC con FE reducida o preservada, valvulopatías) es la causa más frecuente, seguido del grupo 3 (enfermedad pulmonar).',
      why: ['Es rara.', '', 'Es poco común.', 'Común en zonas endémicas, no en general.', 'Es poco común.'],
      ref: 'ESC/ERS 2022 HP' }),

    q({ id: 'hp-06', dif: 2,
      stem: 'Paciente con HAP idiopática y prueba de vasorreactividad positiva. ¿Tratamiento inicial?',
      opts: ['Bosentán + tadalafil', 'Calcioantagonista en dosis altas (nifedipino, diltiazem o amlodipino)', 'Epoprostenol IV', 'Riociguat', 'Solo diuréticos'],
      ans: 1,
      exp: 'Los respondedores a vasorreactividad (~10%) mejoran con calcioantagonistas en dosis altas; se reevalúa a los 3–6 meses.',
      why: ['Para no respondedores.', '', 'Para alto riesgo sin respuesta.', 'Para HPTEC no operable o HAP.', 'Insuficiente.'],
      ref: 'ESC/ERS 2022 HP' }),

    q({ id: 'hp-07', dif: 2,
      stem: 'Mujer con HAP idiopática de riesgo intermedio-bajo, vasorreactividad negativa y sin comorbilidades cardiopulmonares. ¿Tratamiento inicial?',
      opts: ['Calcioantagonista', 'Antagonista de receptores de endotelina + inhibidor de PDE5', 'Monoterapia con sildenafil siempre', 'Anticoagulación sola', 'Trasplante pulmonar'],
      ans: 1,
      exp: 'La terapia combinada inicial (por ejemplo, ambrisentán + tadalafil, estudio AMBITION) mejora los desenlaces frente a monoterapia.',
      why: ['Contraindicado sin vasorreactividad.', '', 'La combinación es superior.', 'No es tratamiento de HAP.', 'Se reserva para refractarios.'],
      ref: 'ESC/ERS 2022 HP · AMBITION' }),

    q({ id: 'hp-08', dif: 2,
      stem: 'Hombre con EPOC grave, PaO2 52 mmHg y datos de hipertensión pulmonar leve. ¿Tratamiento principal de su hipertensión pulmonar?',
      opts: ['Sildenafil', 'Oxígeno suplementario y tratar la EPOC', 'Bosentán', 'Epoprostenol', 'Calcioantagonista'],
      ans: 1,
      exp: 'En el grupo 3, la hipoxia causa vasoconstricción pulmonar: el oxígeno (si PaO2 <55–60) y el tratamiento del pulmón son la base. Los vasodilatadores de HAP pueden empeorar la oxigenación.',
      why: ['Puede empeorar la relación V/Q.', '', 'No indicado en grupo 3.', 'No indicado.', 'No indicado.'],
      ref: 'ESC/ERS 2022 HP' }),

    q({ id: 'hp-09', dif: 1,
      stem: '¿Qué enfermedad reumatológica requiere tamizaje periódico de HAP?',
      opts: ['Artritis reumatoide', 'Esclerosis sistémica', 'Gota', 'Osteoartritis', 'Polimialgia reumática'],
      ans: 1,
      exp: 'La HAP afecta a ~10% de las personas con esclerosis sistémica (sobre todo la limitada) y es causa principal de muerte. Se tamiza cada año con eco, DLCO y NT-proBNP (algoritmo DETECT).',
      why: ['No es la asociación típica.', '', 'No se asocia.', 'No se asocia.', 'No se asocia.'],
      ref: 'ESC/ERS 2022 HP' }),

    q({ id: 'hp-10', dif: 3,
      stem: 'Paciente con HAP en tratamiento con sildenafil. Otro médico quiere agregar riociguat. ¿Qué le dices?',
      opts: ['Es una buena combinación', 'Está contraindicado: riesgo de hipotensión grave', 'Solo si toma calcioantagonista', 'Solo si hay HPTEC', 'Solo a la mitad de dosis'],
      ans: 1,
      exp: 'Ambos aumentan la vía del GMPc (uno inhibe su degradación, el otro estimula su síntesis): la combinación causa hipotensión y está contraindicada.',
      why: ['No lo es.', '', 'No cambia la contraindicación.', 'No cambia la contraindicación.', 'No es seguro.'],
      ref: 'ESC/ERS 2022 HP' })
  ]
};
