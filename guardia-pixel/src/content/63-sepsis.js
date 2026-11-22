// Tema 49 · Sepsis y choque séptico (Infectología, semana 5)
const T = { topic: 'sepsis', subj: 'infecto' };
const q = (o) => ({ ...T, ...o });
const SRC = { short: 'De tu Guía Infecto', vs: 'tu guía', name: 'Guía Infecto · Ximena Cors Cepeda (EMIS 5)', url: 'https://docs.google.com/document/d/1z8GAmFxqoyJtS21XWHwMlvykDNaoEMW07PgJh45aMwY/edit' };

export default {
  lessons: {
    sepsis: {
      hook: 'Sepsis = infección + disfunción orgánica (SOFA ↑≥2). Choque séptico = vasopresor para PAM ≥65 y lactato >2 pese a líquidos. La primera hora: lactato, hemocultivos, antibiótico, 30 mL/kg de cristaloide si hay hipotensión o lactato ≥4, y norepinefrina.',
      nn: [], yt: 'sepsis septic shock surviving sepsis campaign hour 1 bundle',
      video: [
        { ch: 'Definiciones', sc: [
          { v: { k: 'title', t: 'Sepsis', s: 'Semana 5 · Infectología' },
            say: 'Semana cinco: la sepsis. Es una disfunción orgánica que pone en riesgo la vida, causada por una respuesta desregulada a una infección. Cada hora de retraso en el antibiótico aumenta la mortalidad.' },
          { v: { k: 'vs', a: 'Sepsis', b: 'Choque séptico', rows: [['Definición', 'Infección más disfunción orgánica', 'Sepsis con falla circulatoria'], ['Criterio', 'SOFA sube 2 o más', 'Vasopresor para PAM 65 y lactato mayor de 2'], ['Mortalidad', 'Más de 10 por ciento', 'Más de 40 por ciento']] },
            say: 'Sepsis es infección más disfunción orgánica, que se mide con un aumento de dos o más puntos en la escala SOFA. Choque séptico es la sepsis que requiere vasopresor para mantener una presión media de sesenta y cinco y tiene lactato mayor de dos pese a líquidos.' },
          { v: { k: 'list', t: 'qSOFA: sospecha fuera de UCI', items: ['FR 22 o más', 'Alteración del estado mental', 'PAS 100 o menos'] },
            say: 'El qSOFA ayuda a sospecharla fuera de la terapia intensiva: frecuencia respiratoria de veintidós o más, alteración mental y presión sistólica de cien o menos. Dos o más indican mal pronóstico, pero no se usa solo para descartar.' }
        ] },
        { ch: 'La primera hora', sc: [
          { v: { k: 'flow', t: 'Paquete de 1 hora', steps: ['Lactato', 'Hemocultivos', 'Antibiótico de amplio espectro', '30 mL por kg de cristaloide', 'Norepinefrina si PAM menor de 65'] },
            say: 'El paquete de la primera hora: mide lactato, toma hemocultivos, da antibiótico de amplio espectro, treinta mililitros por kilo de cristaloide si hay hipotensión o lactato de cuatro o más, y norepinefrina si la presión media sigue por debajo de sesenta y cinco.' },
          { v: { k: 'list', t: 'Si no responde', items: ['Vasopresina como segundo vasopresor', 'Hidrocortisona si requiere vasopresor', 'Controlar el foco', 'Dobutamina si hay disfunción cardiaca'] },
            say: 'Si no responde: agrega vasopresina, considera hidrocortisona si sigue necesitando vasopresor, controla el foco drenando abscesos o retirando catéteres, y dobutamina si el corazón no bombea.' },
          { v: { k: 'mnemo', t: 'Hora 1: lactato, cultivos, antibiótico, líquidos, vasopresor', d: 'Meta: PAM ≥65 y lactato que baja.' },
            say: 'Llévate el paquete: lactato, cultivos, antibiótico, líquidos y vasopresor. La meta es presión media de sesenta y cinco y que el lactato baje.' }
        ] }
      ],
      sections: [
        { h: 'Definiciones (Sepsis-3)', html: `
<ul>
<li><b>Sepsis</b>: disfunción orgánica potencialmente mortal por una respuesta desregulada a la infección = aumento del <b>SOFA ≥2</b> puntos (PaO₂/FiO₂, plaquetas, bilirrubina, PAM/vasopresores, Glasgow, creatinina/uresis).</li>
<li><b>Choque séptico</b>: sepsis con necesidad de <b>vasopresor para PAM ≥65</b> y <b>lactato &gt;2 mmol/L</b> pese a reanimación con volumen adecuada (mortalidad &gt;40 %).</li>
<li><b>qSOFA</b> (FR ≥22, alteración mental, PAS ≤100): ≥2 = mayor riesgo de muerte; la SSC 2021 no recomienda usarlo solo como tamizaje (prefiere SIRS, NEWS o MEWS).</li>
<li>SIRS (antiguo): T &gt;38 o &lt;36, FC &gt;90, FR &gt;20 o PaCO₂ &lt;32, leucocitos &gt;12,000 o &lt;4000 o &gt;10 % bandas.</li>
<li>Focos más comunes: <b>pulmón</b>, abdomen, vía urinaria, piel, catéteres.</li>
</ul>` },
        { h: 'Paquete de la primera hora', html: `
<ol>
<li><b>Lactato</b> (repetir si &gt;2).</li>
<li><b>Hemocultivos</b> (2 sets) antes del antibiótico, sin retrasarlo.</li>
<li><b>Antibiótico de amplio espectro en ≤1 h</b> en choque o sepsis probable (≤3 h si la sepsis es posible sin choque). Cobertura según foco y riesgo: p. ej., pip-tazo o cefepime o meropenem ± vancomicina (MRSA) ± cobertura de hongos en riesgo.</li>
<li><b>Cristaloide 30 mL/kg</b> en las primeras 3 h si hay hipotensión o lactato ≥4; preferir <b>soluciones balanceadas</b> (Ringer/Hartmann) sobre salina; albúmina si se requieren grandes volúmenes. Reevaluar respuesta (llenado capilar, elevación pasiva de piernas, eco).</li>
<li><b>Norepinefrina</b> (vasopresor de 1ª línea) para PAM ≥65; puede iniciarse por vía periférica mientras se coloca un catéter central.</li>
</ol>` },
        { h: 'Después de la primera hora', html: `
<ul>
<li>Segundo vasopresor: <b>vasopresina</b> (0.03 U/min) si la norepinefrina es 0.25–0.5 µg/kg/min. Epinefrina como tercera opción. <b>Dobutamina</b> si hay disfunción cardiaca con hipoperfusión persistente.</li>
<li><b>Hidrocortisona</b> 200 mg/día si requiere vasopresor de forma persistente (≥0.25 µg/kg/min por ≥4 h).</li>
<li><b>Control del foco</b> en 6–12 h: drenar abscesos, desbridar, retirar catéteres infectados, cirugía.</li>
<li>Metas: PAM ≥65, uresis ≥0.5 mL/kg/h, lactato descendente, llenado capilar normal. Glucosa 144–180 mg/dL. Transfusión con Hb &lt;7. Profilaxis de TEV y de úlcera de estrés (si hay riesgo de sangrado).</li>
<li>Ventilación protectora en SDRA (6 mL/kg de peso ideal, presión meseta &lt;30, prono si PaO₂/FiO₂ &lt;150).</li>
<li><b>Desescalar</b> al tener cultivos; duración corta (5–7 días en la mayoría); procalcitonina ayuda a suspender.</li>
<li>No se recomienda: bicarbonato con pH ≥7.2 (salvo LRA grave), almidones (hidroxietil almidón), vitamina C de rutina.</li>
</ul>` },
        { h: 'Cómo lo preguntan en el examen', html: `
<ul>
<li>Infección con SOFA +2 → <b>sepsis</b>. Con norepinefrina y lactato 4 → <b>choque séptico</b>.</li>
<li>Hipotensión por sepsis → <b>30 mL/kg de cristaloide</b> → si persiste, <b>norepinefrina</b>.</li>
<li>Choque con norepinefrina alta → agregar <b>vasopresina</b> e <b>hidrocortisona</b>.</li>
<li>Sepsis por catéter → <b>retirarlo</b> (control del foco).</li>
<li>Antibiótico en choque séptico → <b>en la primera hora</b>.</li>
</ul>` }
      ],
      mnemo: { t: 'Hora 1: Lactato · Cultivos · Antibiótico · 30 mL/kg · Norepinefrina', d: 'Meta PAM ≥65; segundo vasopresor vasopresina; hidrocortisona si persiste el vasopresor; control del foco.' },
      pearl: 'La norepinefrina es el vasopresor de primera línea; la dopamina ya no se recomienda (más arritmias).',
      trap: 'Un lactato normal no descarta sepsis, y la hipotensión no es necesaria para diagnosticarla: basta la disfunción orgánica (SOFA ≥2).',
      guide: [
        'Surviving Sepsis Campaign 2021: soluciones balanceadas preferidas, no usar qSOFA solo como tamizaje, hidrocortisona con vasopresor persistente.',
        'Tu guía usa las metas de Rivers (PVC 8–12, SvcO₂ ≥70 %); ya no se recomiendan como protocolo (ProCESS, ARISE, ProMISe).'
      ],
      refs: [
        'Singer M, et al. The Third International Consensus Definitions for Sepsis and Septic Shock (Sepsis-3). JAMA 2016.',
        'Evans L, et al. Surviving Sepsis Campaign: International guidelines for management of sepsis and septic shock 2021. Crit Care Med 2021.',
        'Levy MM, et al. The Surviving Sepsis Campaign Bundle: 2018 update. Crit Care Med 2018.'
      ]
    }
  },

  guias: {
    sepsis: { src: SRC,
      puntos: [
        'Sepsis: PAM ≤65, lactato &gt;2 (tu guía dice “&gt;18 mg/dL”), vasodilatación; SIRS (FC &gt;90, T &lt;36 o &gt;38, leucocitos &lt;4 o &gt;12 mil, FR &gt;20 o PaCO₂ &lt;32).',
        'qSOFA: FR ≥22, alteración mental, PAS ≤100 (≥2).',
        'Hemocultivos + lactato; reanimación 20–30 mL/kg IV, norepinefrina, antibiótico de amplio espectro.',
        'SOFA (PaO₂/FiO₂, Glasgow, plaquetas, bilirrubina, PAM, creatinina) a las 24 h y cada 48 h.'
      ],
      ojo: ['Tu guía usa las metas de PVC 8–12 y SvcO₂ ≥70 % (protocolo de Rivers): <b>ya no se recomiendan</b>; hoy se guía por PAM, lactato, llenado capilar y respuesta a volumen.'],
      cards: [['Lactato de choque séptico', '>2 mmol/L (≈18 mg/dL) con vasopresor para PAM ≥65']] }
  },

  cards: [
    ['Sepsis (Sepsis-3)', 'Infección + disfunción orgánica (SOFA ↑≥2)'],
    ['Choque séptico', 'Vasopresor para PAM ≥65 + lactato >2 pese a volumen'],
    ['qSOFA', 'FR ≥22, alteración mental, PAS ≤100'],
    ['Paquete de 1 hora', 'Lactato, hemocultivos, antibiótico, 30 mL/kg, vasopresor'],
    ['Cuándo dar 30 mL/kg', 'Hipotensión o lactato ≥4'],
    ['Cristaloide preferido', 'Balanceado (Ringer/Hartmann)'],
    ['Vasopresor de 1ª línea', 'Norepinefrina'],
    ['Segundo vasopresor', 'Vasopresina'],
    ['Hidrocortisona en choque séptico', 'Si requiere vasopresor persistente'],
    ['Meta de PAM', '≥65 mmHg'],
    ['Control del foco', 'Drenar, desbridar, retirar catéteres en 6–12 h'],
    ['Antibiótico en choque séptico', 'En ≤1 h'],
    ['Foco más común de sepsis', 'Pulmón']
  ],

  questions: [
    q({ id: 'sepsis-01', dif: 1, stem: 'Paciente con neumonía, confusión, FR 26, PA 86/50, lactato 4.6. ¿Primer manejo en la primera hora?', opts: ['Solo antibiótico oral', 'Hemocultivos, antibiótico IV de amplio espectro y 30 mL/kg de cristaloide', 'Esperar el resultado de cultivos', 'Esteroide y alta', 'Diurético'], ans: 1,
      exp: 'Paquete de 1 hora en sepsis con hipotensión/lactato ≥4.', why: ['Insuficiente.', '', 'Peligroso.', 'No.', 'No.'], ref: 'SSC 2021' }),
    q({ id: 'sepsis-02', dif: 2, stem: 'Paciente que tras 30 mL/kg de Ringer sigue con PAM de 58. ¿Siguiente paso?', opts: ['Más líquidos sin límite', 'Norepinefrina', 'Dopamina', 'Dobutamina', 'Fenilefrina de primera línea'], ans: 1,
      exp: 'Vasopresor de primera línea para PAM ≥65.', why: ['Riesgo de sobrecarga.', '', 'Más arritmias.', 'Es inotrópico.', 'No es de primera línea.'], ref: 'SSC 2021' }),
    q({ id: 'sepsis-03', dif: 2, stem: 'Paciente con choque séptico con norepinefrina a 0.4 µg/kg/min y PAM de 60. ¿Qué agregas?', opts: ['Dopamina', 'Vasopresina', 'Más líquidos indefinidamente', 'Furosemida', 'Nitroglicerina'], ans: 1,
      exp: 'Vasopresina como segundo vasopresor (y considerar hidrocortisona).', why: ['No recomendada.', '', 'Sobrecarga.', 'No.', 'Absurdo.'], ref: 'SSC 2021' }),
    q({ id: 'sepsis-04', dif: 2, stem: '¿Cuál es la definición actual de choque séptico?', opts: ['Sepsis con fiebre alta', 'Sepsis con vasopresor para PAM ≥65 y lactato >2 pese a volumen', 'SIRS con hipotensión', 'Bacteriemia', 'qSOFA ≥2'], ans: 1,
      exp: 'Sepsis-3.', why: ['No.', '', 'Definición antigua.', 'No.', 'Es escala de riesgo.'], ref: 'Sepsis-3' }),
    q({ id: 'sepsis-05', dif: 2, stem: 'Paciente en choque séptico que lleva 6 horas con norepinefrina ≥0.25 µg/kg/min. ¿Qué agregas?', opts: ['Dexametasona 40 mg', 'Hidrocortisona 200 mg/día', 'Fludrocortisona sola', 'Nada', 'Prednisona oral'], ans: 1,
      exp: 'Hidrocortisona IV acelera la resolución del choque en pacientes con vasopresor persistente.', why: ['No es el esquema.', '', 'Complementaria.', 'Está indicado.', 'No.'], ref: 'SSC 2021' }),
    q({ id: 'sepsis-06', dif: 2, stem: 'Paciente con sepsis por absceso hepático. Además del antibiótico, ¿qué es indispensable?', opts: ['Esteroide', 'Control del foco: drenaje percutáneo', 'Solo líquidos', 'Antipirético', 'Diálisis'], ans: 1,
      exp: 'Sin control del foco el antibiótico fracasa.', why: ['No.', '', 'Insuficiente.', 'No.', 'No.'], ref: 'SSC 2021' }),
    q({ id: 'sepsis-07', dif: 2, stem: 'Paciente con catéter venoso central y choque séptico por S. aureus. ¿Qué haces con el catéter?', opts: ['Dejarlo y dar antibiótico por él', 'Retirarlo', 'Sellarlo con heparina', 'Cambiarlo con guía en el mismo sitio', 'Nada'], ans: 1,
      exp: 'Catéter como foco probable con S. aureus o choque: retirar.', why: ['No.', '', 'No.', 'No.', 'No.'], ref: 'SSC 2021' }),
    q({ id: 'sepsis-08', dif: 1, stem: '¿Qué criterios forman el qSOFA?', opts: ['Fiebre, leucocitosis, taquicardia', 'FR ≥22, alteración mental, PAS ≤100', 'Lactato, creatinina, plaquetas', 'Glasgow, PaO₂, bilirrubina', 'FC, PA, T'], ans: 1,
      exp: 'Tres criterios clínicos rápidos.', why: ['Es SIRS.', '', 'Componentes de SOFA.', 'Componentes de SOFA.', 'No.'], ref: 'Sepsis-3' }),
    q({ id: 'sepsis-09', dif: 2, stem: '¿Qué solución prefieres para la reanimación en sepsis?', opts: ['Hidroxietil almidón', 'Cristaloide balanceado (Ringer/Hartmann)', 'Dextrosa al 5 %', 'Salina al 3 %', 'Plasma'], ans: 1,
      exp: 'Los balanceados reducen la acidosis hiperclorémica y quizá la LRA; los almidones aumentan LRA y mortalidad.', why: ['Dañino.', '', 'No expande.', 'No.', 'No.'], ref: 'SSC 2021' }),
    q({ id: 'sepsis-10', dif: 2, stem: 'Paciente con sepsis sin hipotensión, lactato 2.5 y creatinina que subió de 0.9 a 2.2. ¿Tiene sepsis?', opts: ['No, porque la PA es normal', 'Sí: infección con disfunción orgánica (SOFA ↑≥2)', 'Solo SIRS', 'Solo bacteriemia', 'No se puede saber'], ans: 1,
      exp: 'La hipotensión no es requisito; la disfunción renal suma puntos de SOFA.', why: ['Incorrecto.', '', 'No.', 'No.', 'Sí se puede.'], ref: 'Sepsis-3' }),
    q({ id: 'sepsis-11', dif: 2, stem: 'Paciente en choque séptico con FEVI de 25 % e hipoperfusión pese a PAM ≥65. ¿Qué agregas?', opts: ['Más norepinefrina', 'Dobutamina', 'Betabloqueador', 'Diurético', 'Nada'], ans: 1,
      exp: 'Disfunción miocárdica séptica con hipoperfusión: inotrópico.', why: ['No mejora el gasto.', '', 'Contraindicado.', 'No.', 'Hay opción.'], ref: 'SSC 2021' }),
    q({ id: 'sepsis-12', dif: 2, stem: '¿Cuál es la meta de glucosa en el paciente séptico en UCI?', opts: ['80–110', '144–180 mg/dL', '>250', '<70', 'No importa'], ans: 1,
      exp: 'El control estricto aumenta hipoglucemia y mortalidad (NICE-SUGAR).', why: ['Riesgo de hipoglucemia.', '', 'Muy alta.', 'Hipoglucemia.', 'Importa.'], ref: 'SSC 2021' }),
    q({ id: 'sepsis-13', dif: 2, stem: 'Paciente con sepsis abdominal hospitalizado y riesgo de MRSA y Pseudomonas. ¿Esquema empírico?', opts: ['Ceftriaxona sola', 'Piperacilina-tazobactam (o meropenem) + vancomicina', 'Amoxicilina', 'Nitrofurantoína', 'Azitromicina'], ans: 1,
      exp: 'Amplio espectro con anaerobios, Pseudomonas y MRSA; desescalar luego.', why: ['Insuficiente.', '', 'Insuficiente.', 'No.', 'No.'], ref: 'SSC 2021' }),
    q({ id: 'sepsis-14', dif: 2, stem: '¿Cuál es el principal factor modificable que reduce la mortalidad en choque séptico?', opts: ['Bicarbonato', 'Antibiótico apropiado y temprano (≤1 h)', 'Vitamina C', 'Almidones', 'Transfusión liberal'], ans: 1,
      exp: 'Cada hora de retraso aumenta la mortalidad.', why: ['No.', '', 'Sin beneficio.', 'Daño.', 'Sin beneficio.'], ref: 'SSC 2021' }),
    q({ id: 'sepsis-15', dif: 2, stem: 'Paciente séptico con Hb de 8.2 sin isquemia ni sangrado. ¿Transfundes?', opts: ['Sí, a Hb 10', 'No: umbral de 7 g/dL', 'Sí, siempre', 'Solo plasma', 'EPO'], ans: 1,
      exp: 'Estrategia restrictiva (TRISS).', why: ['Liberal sin beneficio.', '', 'No.', 'No.', 'No.'], ref: 'SSC 2021' }),
    q({ id: 'sepsis-16', dif: 1, stem: '¿Cuál es el foco infeccioso más común de sepsis?', opts: ['Urinario', 'Pulmonar', 'Piel', 'SNC', 'Óseo'], ans: 1,
      exp: 'Neumonía, seguida de abdomen y vía urinaria.', why: ['Tercero.', '', 'Menos.', 'Menos.', 'Menos.'], ref: 'SSC 2021' }),
    q({ id: 'sepsis-17', dif: 2, stem: '¿Cómo valoras la respuesta a líquidos en choque séptico?', opts: ['PVC de 8–12 como meta fija', 'Parámetros dinámicos: elevación pasiva de piernas, variación de pulso, eco, llenado capilar', 'Solo la PA', 'Peso diario', 'RX'], ans: 1,
      exp: 'La PVC estática no predice respuesta a volumen.', why: ['Ya no se recomienda.', '', 'Insuficiente.', 'No.', 'No.'], ref: 'SSC 2021' }),
    q({ id: 'sepsis-18', dif: 2, stem: 'Paciente con sepsis y lactato inicial 5.2. ¿Qué haces?', opts: ['No repetir', 'Repetir el lactato a las 2–4 h para guiar la reanimación', 'Bicarbonato', 'Dar lactato de sodio', 'Ignorar'], ans: 1,
      exp: 'Normalizar el lactato guía la reanimación.', why: ['Se debe repetir.', '', 'No con pH ≥7.2.', 'Absurdo.', 'No.'], ref: 'SSC 2021' }),
    q({ id: 'sepsis-19', dif: 2, stem: 'Paciente en choque séptico sin catéter central disponible. ¿Puedes iniciar norepinefrina?', opts: ['No, nunca', 'Sí, por vía periférica de forma temporal mientras se coloca el central', 'Solo dopamina', 'Solo intramuscular', 'Esperar 6 h'], ans: 1,
      exp: 'SSC 2021: no retrasar el vasopresor.', why: ['Incorrecto.', '', 'No.', 'No.', 'Peligroso.'], ref: 'SSC 2021' }),
    q({ id: 'sepsis-20', dif: 2, stem: 'Paciente con sepsis que mejora y tiene cultivos con E. coli sensible a ceftriaxona. ¿Qué haces con el meropenem?', opts: ['Continuar 14 días', 'Desescalar a ceftriaxona y acortar la duración', 'Agregar vancomicina', 'Suspender todo', 'Cambiar a colistina'], ans: 1,
      exp: 'Desescalar reduce resistencias y efectos adversos.', why: ['Innecesario.', '', 'No.', 'Incompleto.', 'Absurdo.'], ref: 'SSC 2021' })
  ]
};
