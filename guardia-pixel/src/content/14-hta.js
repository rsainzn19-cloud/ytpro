// Tema 5 · Hipertensión arterial (Nefrología, semana 6)
const T = { topic: 'hta', subj: 'nefro' };
const q = (o) => ({ ...T, ...o });

export default {
  lessons: {
    hta: {
      hook: 'Tres decisiones que se preguntan siempre: cómo confirmar el diagnóstico, con qué combinación empezar y cómo distinguir una urgencia de una emergencia.',
      anim: 'hta',
      compare: ['urg-emerg'],
      nn: [['hypertension-updated', 'Hypertension'], ['antihypertensive-drugs', 'Antihypertensive Drugs']],
      yt: 'hypertension antihypertensives',
      sections: [
        { h: 'Diagnóstico y clasificación', html: `
<div class="tablewrap"><table class="mini">
<tr><th>ESC 2024 (consultorio)</th><th>AHA/ACC 2025</th></tr>
<tr><td>No elevada: &lt;120/70</td><td>Normal: &lt;120/&lt;80</td></tr>
<tr><td>Elevada: 120–139 / 70–89</td><td>Elevada: 120–129 / &lt;80</td></tr>
<tr><td>Hipertensión: ≥140/90</td><td>Estadio 1: 130–139 / 80–89 · Estadio 2: ≥140/90</td></tr>
</table></div>
<ul>
<li><b>Confirma fuera del consultorio</b>: MAPA (24 h ≥130/80; diurno ≥135/85; nocturno ≥120/70) o automedición en casa (≥135/85).</li>
<li><b>HTA de bata blanca</b>: alta en consultorio, normal fuera. <b>Enmascarada</b>: normal en consultorio, alta fuera (más riesgo).</li>
<li>Técnica: 5 min sentado, brazalete adecuado, brazo a la altura del corazón, 2–3 mediciones; la primera vez en ambos brazos.</li>
<li><b>Estudios iniciales</b>: creatinina y TFG, electrolitos, glucosa o A1c, perfil de lípidos, EGO con cociente albúmina/creatinina, ECG (HVI). Fondo de ojo y eco según el caso.</li>
</ul>` },
        { h: 'Tratamiento', html: `
<ul>
<li><b>Estilo de vida</b>: sodio &lt;2 g/día, dieta DASH rica en potasio (si no hay ERC avanzada), bajar de peso, ejercicio, limitar alcohol, dejar de fumar.</li>
<li><b>Primera línea</b>: IECA o ARA-II, calcioantagonista dihidropiridínico (amlodipino) y diurético tiazídico o tipo tiazida (clortalidona, indapamida).</li>
<li><b>Iniciar con dos fármacos en una sola pastilla</b> (IECA/ARA-II + calcioantagonista o + tiazida) en la mayoría. Monoterapia en PA elevada de bajo riesgo, en adultos muy mayores o frágiles.</li>
<li>Si no se controla: triple combinación <b>A + C + D</b> (ARA-II/IECA + calcioantagonista + diurético).</li>
<li><b>Betabloqueadores</b> solo con indicación propia: post-IAM, IC con FEr, FA (control de frecuencia), angina.</li>
<li><b>Nunca</b> combinar IECA + ARA-II (ni con aliskirén): más hiperkalemia y LRA sin beneficio.</li>
</ul>
<div class="decide">
<p><span class="if">DM con albuminuria o ERC con albuminuria</span><span class="then">IECA o ARA-II</span></p>
<p><span class="if">IC con FE reducida</span><span class="then">IECA/ARA-II/ARNI + betabloqueador + ARM (+ iSGLT2)</span></p>
<p><span class="if">Post-IAM</span><span class="then">IECA + betabloqueador</span></p>
<p><span class="if">Embarazo</span><span class="then">Labetalol, nifedipino o metildopa; IECA/ARA-II contraindicados</span></p>
<p><span class="if">Gota</span><span class="then">Evita tiazidas; losartán baja el ácido úrico</span></p>
<p><span class="if">HPB</span><span class="then">Un alfabloqueador puede ayudar, pero no como primera línea de HTA</span></p>
</div>` },
        { h: 'Efectos adversos clásicos', html: `
<ul>
<li><b>IECA</b>: tos seca (bradicinina) → cambia a ARA-II; angioedema; hiperkalemia; la creatinina puede subir hasta 30% al iniciar (aceptable). Contraindicados en estenosis bilateral de arteria renal y embarazo.</li>
<li><b>Calcioantagonistas dihidropiridínicos</b>: edema maleolar, cefalea, rubor. Verapamilo y diltiazem: bradicardia, estreñimiento; evitarlos en IC con FEr.</li>
<li><b>Tiazidas</b>: hipokalemia, hiponatremia, hiperuricemia (gota), hiperglucemia, hipercalcemia.</li>
<li><b>Espironolactona</b>: hiperkalemia, ginecomastia (la eplerenona no la da).</li>
<li><b>Betabloqueadores</b>: bradicardia, fatiga, broncoespasmo (no selectivos), ocultan síntomas de hipoglucemia.</li>
</ul>` },
        { h: 'HTA resistente y secundaria', html: `
<p><b>Resistente</b>: no controlada con 3 fármacos a dosis máximas, uno de ellos diurético. Antes confirma apego, técnica y MAPA (pseudorresistencia). Cuarto fármaco: <b>espironolactona</b> (PATHWAY-2).</p>
<p><b>Sospecha HTA secundaria</b> si: inicio joven, resistente, empeoramiento brusco, hipokalemia, daño a órgano blanco desproporcionado, HTA grave.</p>
<div class="tablewrap"><table class="mini">
<tr><th>Causa</th><th>Pista</th><th>Estudio</th></tr>
<tr><td>Hiperaldosteronismo primario (la endocrina más frecuente)</td><td>HTA resistente, hipokalemia (no siempre)</td><td>Cociente aldosterona/renina</td></tr>
<tr><td>Apnea obstructiva del sueño</td><td>Ronquido, somnolencia, obesidad, HTA nocturna</td><td>Polisomnografía</td></tr>
<tr><td>Renovascular</td><td>Mujer joven (displasia fibromuscular, “cuentas de rosario”) o adulto mayor aterosclerótico; soplo abdominal; Cr ↑ &gt;30% con IECA; edema pulmonar súbito</td><td>Doppler renal, angio-TC o angio-RM</td></tr>
<tr><td>Enfermedad renal parenquimatosa</td><td>TFG baja, albuminuria</td><td>Creatinina, EGO, USG</td></tr>
<tr><td>Feocromocitoma</td><td>Crisis de cefalea, palpitaciones y sudoración</td><td>Metanefrinas libres en plasma (o fraccionadas en orina)</td></tr>
<tr><td>Coartación aórtica</td><td>PA alta en brazos y baja en piernas, pulsos femorales retrasados, muescas costales</td><td>Ecocardiograma, angio-TC</td></tr>
<tr><td>Cushing, hiper/hipotiroidismo</td><td>Fenotipo sugestivo</td><td>Pruebas hormonales</td></tr>
<tr><td>Fármacos</td><td>AINE, anticonceptivos, descongestionantes, glucocorticoides, ciclosporina, EPO, cocaína</td><td>Interrogatorio</td></tr>
</table></div>` },
        { h: 'Urgencia vs emergencia', html: `
<ul>
<li><b>Emergencia</b>: PA muy alta (habitualmente ≥180/110–120) <b>con daño agudo a órgano blanco</b>: encefalopatía, EVC, SCA, edema pulmonar agudo, disección aórtica, LRA, eclampsia, HTA maligna con retinopatía grado III–IV, microangiopatía.</li>
<li>Manejo: terapia intensiva y fármaco IV titulable. Bajar la PAM <b>no más de ~25% en la primera hora</b>, luego a ~160/100 en 2–6 h y a lo normal en 24–48 h.</li>
<li><b>Excepciones</b>: disección aórtica → PAS &lt;120 y FC &lt;60 en la primera hora (esmolol o labetalol primero, después vasodilatador). EVC isquémico candidato a trombólisis → &lt;185/110 antes y &lt;180/105 después; sin trombólisis, tratar solo si &gt;220/120. Preeclampsia → labetalol, hidralazina o nifedipino + sulfato de magnesio.</li>
<li>Fármacos: labetalol, nicardipino, clevidipino, esmolol, nitroglicerina (SCA, edema pulmonar), nitroprusiato (toxicidad por cianuro). Cocaína o feocromocitoma: fentolamina; evita el betabloqueador solo.</li>
<li><b>Urgencia</b> (sin daño agudo): fármacos orales y descenso gradual en 24–48 h, a menudo solo reiniciar su tratamiento y cita cercana. <b>Nunca nifedipino sublingual.</b></li>
</ul>` }
      ],
      mnemo: { t: 'A + C + D', d: 'La escalera de casi todo hipertenso: A (ARA-II o IECA) + C (calcioantagonista) + D (diurético tiazídico). Si con A + C + D no se controla y el apego es bueno, la cuarta letra es la espironolactona.' },
      pearl: 'Lo que separa la urgencia de la emergencia no es la cifra: es el daño agudo a órgano blanco. 220/130 sin daño es urgencia; 190/110 con edema pulmonar es emergencia.',
      trap: 'Bajar la PA a la normalidad en una hora en una emergencia (o con nifedipino sublingual) causa isquemia cerebral, coronaria o renal. Máximo ~25% de la PAM en la primera hora.',
      guide: [
        'Definición y meta: la ESC 2024 diagnostica HTA con ≥140/90 y busca PAS de 120–129 si se tolera. La AHA/ACC 2025 diagnostica estadio 1 desde 130/80 y recomienda meta <130/80 para la mayoría, con sugerencia de acercarse a una PAS <120. ⚠️ Confirma qué guía y qué cifras usa tu profesor.',
        'Inicio con combinación: ambas guías favorecen dos fármacos de inicio en la mayoría; la ESC lo pide en una sola pastilla.'
      ],
      refs: [
        'McEvoy JW, et al. 2024 ESC Guidelines for the management of elevated blood pressure and hypertension. Eur Heart J 2024.',
        '2025 AHA/ACC/AANP/AAPA/ABC/ACCP/ACPM/AGS/AMA/ASPC/NMA/PCNA/SGIM Guideline for the Prevention, Detection, Evaluation and Management of High Blood Pressure in Adults. Hypertension 2025.',
        'Williams B, et al. PATHWAY-2. Lancet 2015.'
      ]
    }
  },

  compares: {
    'urg-emerg': {
      topic: 'hta', a: 'Urgencia', b: 'Emergencia hipertensiva',
      rows: [
        ['Daño agudo a órgano blanco', 'No', 'Sí: encefalopatía, EVC, SCA, edema pulmonar, disección, LRA, eclampsia'],
        ['Dónde', 'Urgencias u observación; puede irse a casa', 'Terapia intensiva'],
        ['Vía', 'Oral', 'IV titulable'],
        ['Velocidad', 'Gradual en 24–48 h', 'PAM ↓ ≤25% en la 1ª hora (excepto disección y EVC)'],
        ['Fármacos', 'Reiniciar o ajustar su tratamiento oral', 'Labetalol, nicardipino, clevidipino, esmolol, nitroglicerina, nitroprusiato'],
        ['Error clásico', 'Nifedipino sublingual o bajar de golpe', 'Normalizar la PA en minutos']
      ]
    }
  },

  anims: {
    hta: {
      title: 'Renina-angiotensina-aldosterona',
      steps: [
        { cap: '<b>La cascada.</b> El hígado produce angiotensinógeno. Cuando baja la perfusión renal, el aparato yuxtaglomerular libera renina, que lo convierte en angiotensina I. La ECA (sobre todo en el pulmón) la convierte en angiotensina II.',
          labels: [[22, 14, 'Hígado'], [22, 104, 'Riñón: renina'], [80, 14, 'Ang I'], [80, 60, 'Pulmón: ECA'], [138, 60, 'Ang II']] },
        { cap: '<b>Lo que hace la angiotensina II.</b> Contrae las arteriolas (sube la resistencia) y estimula a la suprarrenal para liberar aldosterona, que retiene sodio y agua en el riñón. Resultado: sube la PA.',
          labels: [[40, 30, 'Vasoconstricción'], [118, 30, 'Suprarrenal'], [120, 104, 'Aldosterona: retiene Na']] },
        { cap: '<b>IECA (-pril).</b> Bloquean la ECA: no se forma angiotensina II. Como la ECA también degrada bradicinina, esta se acumula y causa tos y, rara vez, angioedema.',
          labels: [[80, 60, 'ECA ✕'], [124, 98, 'Bradicinina ↑ → tos']] },
        { cap: '<b>ARA-II (-sartán).</b> Bloquean el receptor AT1: la angiotensina II se forma pero no actúa. No acumulan bradicinina, por eso no dan tos.',
          labels: [[118, 40, 'Receptor AT1 ✕'], [40, 104, 'Sin tos']] },
        { cap: '<b>Espironolactona.</b> Bloquea el receptor de aldosterona en el túbulo colector: sale sodio y se retiene potasio. Es el cuarto fármaco en la HTA resistente; vigila el potasio.',
          labels: [[118, 40, 'Aldosterona'], [80, 104, 'Receptor ✕ · K ↑']] }
      ]
    }
  },

  cards: [
    ['HTA según ESC 2024 (consultorio)', '≥140/90; elevada 120–139/70–89'],
    ['HTA según AHA/ACC 2025', 'Estadio 1: 130–139/80–89 · Estadio 2: ≥140/90'],
    ['Umbrales de MAPA', '24 h ≥130/80 · diurno ≥135/85 · nocturno ≥120/70'],
    ['Primera línea de HTA', 'IECA/ARA-II, calcioantagonista dihidropiridínico, tiazida o tipo tiazida'],
    ['Combinación que nunca se usa', 'IECA + ARA-II (o con aliskirén)'],
    ['Cuarto fármaco en HTA resistente', 'Espironolactona'],
    ['Tos por IECA', 'Por bradicinina: cambiar a ARA-II'],
    ['Efectos adversos de tiazidas', 'Hipo-K, hipo-Na, hiperuricemia, hiperglucemia, hipercalcemia'],
    ['HTA en el embarazo', 'Labetalol, nifedipino, metildopa (IECA/ARA-II contraindicados)'],
    ['Tamizaje de hiperaldosteronismo', 'Cociente aldosterona/renina'],
    ['Tamizaje de feocromocitoma', 'Metanefrinas libres en plasma'],
    ['Emergencia: velocidad de descenso', 'PAM ↓ ≤25% en la 1ª hora, ~160/100 en 2–6 h, normal en 24–48 h'],
    ['Disección aórtica', 'PAS <120 y FC <60 en la primera hora: betabloqueador IV primero'],
    ['EVC isquémico candidato a trombólisis', 'PA <185/110 antes y <180/105 después']
  ],

  questions: [
    q({ id: 'hta-01', dif: 1,
      stem: 'Hombre de 40 años, asintomático, con PA de 148/92 mmHg en una sola visita. Sin comorbilidades. ¿Siguiente paso?',
      opts: ['Iniciar amlodipino hoy', 'Confirmar con MAPA o automedición en casa', 'Ecocardiograma urgente', 'Iniciar IECA + diurético', 'Diagnosticar HTA y citar en un año'],
      ans: 1,
      exp: 'Una sola medición en consultorio no basta. Se confirma con medición fuera del consultorio (MAPA o automedición), que además detecta HTA de bata blanca y enmascarada. Con PA muy alta o daño a órgano blanco se puede iniciar sin esperar.',
      why: ['Se trata después de confirmar, salvo HTA grave o daño a órgano blanco.', '', 'No está indicado de entrada.', 'Primero se confirma el diagnóstico.', 'Primero confirma; tampoco se espera un año.'],
      ref: 'ESC 2024 HTA' }),

    q({ id: 'hta-02', dif: 1,
      stem: 'Mujer de 50 años con PA en consultorio de 152/96 mmHg en dos visitas. MAPA de 24 h: promedio 122/76, diurno 126/80. ¿Diagnóstico?',
      opts: ['HTA estadio 2', 'HTA de bata blanca', 'HTA enmascarada', 'HTA resistente', 'Hipotensión ortostática'],
      ans: 1,
      exp: 'Alta en consultorio y normal en MAPA = bata blanca. No requiere fármacos de inicio: estilo de vida y vigilancia con MAPA o automedición, porque tiene más riesgo de desarrollar HTA sostenida.',
      why: ['El MAPA es normal.', '', 'Enmascarada es al revés: normal en consultorio y alta fuera.', 'Ni siquiera recibe tratamiento.', 'No hay datos de ortostatismo.'],
      ref: 'ESC 2024 HTA' }),

    q({ id: 'hta-03', dif: 2,
      stem: 'Hombre de 52 años con HTA confirmada por MAPA (promedio 156/98), sin comorbilidades. ¿Tratamiento inicial preferido?',
      opts: ['Atenolol solo', 'Combinación en una sola pastilla de IECA/ARA-II con calcioantagonista o tiazida', 'Hidralazina', 'Furosemida', 'Solo dieta por 6 meses'],
      ans: 1,
      exp: 'En la mayoría de los hipertensos se inicia con dos fármacos de primera línea, idealmente en una sola pastilla (mejor apego y control más rápido). Después se escala a A + C + D.',
      why: ['Los betabloqueadores no son de primera línea sin indicación específica.', '', 'No es primera línea (taquicardia refleja, retención de líquidos).', 'Los diuréticos de asa no son de primera línea en HTA sin IC o ERC avanzada.', 'Con 156/98 confirmada, el estilo de vida solo no basta.'],
      ref: 'ESC 2024 · AHA/ACC 2025' }),

    q({ id: 'hta-04', dif: 1,
      stem: 'Mujer de 56 años con DM2 e HTA, con cociente albúmina/creatinina de 280 mg/g. ¿Qué antihipertensivo debe formar parte de su tratamiento?',
      opts: ['Amlodipino como único fármaco', 'IECA o ARA-II', 'Hidroclorotiazida como único fármaco', 'Atenolol', 'Doxazosina'],
      ans: 1,
      exp: 'Con albuminuria (diabética o no), el IECA o ARA-II a dosis máxima tolerada reduce la proteinuria y la progresión renal. Se combina con otros fármacos para llegar a la meta y, en DM2 con ERC, con un iSGLT2.',
      why: ['Baja la PA pero no protege el riñón como el bloqueo del SRAA.', '', 'Útil como combinación, no como base en albuminuria.', 'No tiene indicación específica aquí.', 'No es primera línea.'],
      ref: 'KDIGO 2024 · ADA 2026' }),

    q({ id: 'hta-05', dif: 1,
      stem: 'Hombre de 61 años que inició enalapril hace 4 semanas. Tiene tos seca persistente que no lo deja dormir. Rx de tórax normal. ¿Qué haces?',
      opts: ['Agregar un antitusivo y seguir igual', 'Cambiar a un ARA-II', 'Agregar losartán al enalapril', 'Suspender todo antihipertensivo', 'Cambiar a otro IECA'],
      ans: 1,
      exp: 'La tos por IECA se debe a acumulación de bradicinina (la ECA también la degrada). Es efecto de clase: se cambia a un ARA-II, que no la produce. Desaparece en días a semanas.',
      why: ['No resuelve la causa.', '', 'Nunca se combinan IECA y ARA-II.', 'Necesita seguir tratado.', 'Todos los IECA la producen.'],
      ref: 'ESC 2024 HTA' }),

    q({ id: 'hta-06', dif: 2,
      stem: 'Hombre de 66 años con HTA resistente. Toma amlodipino 10 mg, losartán 100 mg y clortalidona 25 mg con buen apego confirmado. El MAPA confirma descontrol y se descartaron causas secundarias. K 4.3 mEq/L, TFG 70. ¿Qué agregas?',
      opts: ['Enalapril', 'Espironolactona', 'Atenolol', 'Furosemida', 'Hidralazina'],
      ans: 1,
      exp: 'En la HTA resistente verdadera, la espironolactona como cuarto fármaco fue la más eficaz (PATHWAY-2). Vigila potasio y creatinina, sobre todo con TFG baja.',
      why: ['Nunca IECA + ARA-II.', '', 'Menos eficaz que la espironolactona en este escenario.', 'Solo en ERC avanzada o sobrecarga de volumen.', 'Opción de reserva.'],
      ref: 'Williams B, et al. PATHWAY-2, Lancet 2015' }),

    q({ id: 'hta-07', dif: 2,
      stem: 'Mujer de 45 años con HTA de difícil control con 3 fármacos y K de 3.1 mEq/L sin diuréticos. ¿Qué estudio pides primero?',
      opts: ['Metanefrinas en plasma', 'Cociente aldosterona/renina', 'Cortisol libre urinario', 'Angiografía renal', 'Ecocardiograma'],
      ans: 1,
      exp: 'HTA resistente + hipokalemia espontánea = sospecha de hiperaldosteronismo primario, la causa endocrina más frecuente de HTA secundaria. Tamizaje: cociente aldosterona/renina; confirmación con prueba de supresión; luego TC suprarrenal y, si se piensa en cirugía, cateterismo de venas suprarrenales.',
      why: ['El feocromocitoma da crisis de cefalea, sudoración y palpitaciones.', '', 'Se pide si hay fenotipo de Cushing.', 'Es invasiva y no es el primer estudio.', 'No busca la causa.'],
      ref: 'Endocrine Society 2016 hiperaldosteronismo primario' }),

    q({ id: 'hta-08', dif: 2,
      stem: 'Mujer de 27 años con HTA de 6 meses, PA 168/104 mmHg, sin antecedentes familiares. Soplo abdominal periumbilical. ¿Causa más probable y conducta?',
      opts: ['HTA esencial; tiazida', 'Displasia fibromuscular de arteria renal; imagen vascular (Doppler, angio-TC o angio-RM) y angioplastia con balón', 'Coartación aórtica; cirugía inmediata', 'Hiperaldosteronismo; espironolactona', 'Feocromocitoma; betabloqueador'],
      ans: 1,
      exp: 'Mujer joven + HTA + soplo abdominal = estenosis de arteria renal por displasia fibromuscular (imagen en “cuentas de rosario”). Responde muy bien a angioplastia con balón, generalmente sin stent. La aterosclerótica (adultos mayores) se trata sobre todo con medicamentos.',
      why: ['El inicio joven y el soplo apuntan a causa secundaria.', '', 'Daría diferencia de PA entre brazos y piernas.', 'No hay hipokalemia ni HTA resistente descrita.', 'No hay crisis adrenérgicas, y el betabloqueador solo está contraindicado en feocromocitoma.'],
      ref: 'ESC 2024 HTA · SCAI/SVM displasia fibromuscular' }),

    q({ id: 'hta-09', dif: 2,
      stem: 'Hombre de 38 años con episodios de cefalea intensa, palpitaciones y sudoración profusa con PA de 220/130 durante las crisis. ¿Qué estudio pides y qué precaución tienes con el tratamiento?',
      opts: ['TSH; propranolol', 'Metanefrinas libres en plasma; bloqueo alfa (fenoxibenzamina o doxazosina) antes de cualquier betabloqueador', 'Cortisol; ketoconazol', 'Renina; IECA', 'Ecocardiograma; diurético'],
      ans: 1,
      exp: 'La tríada cefalea + palpitaciones + diaforesis con crisis hipertensivas sugiere feocromocitoma. Se confirma con metanefrinas plasmáticas (o urinarias fraccionadas) y luego imagen. Antes de la cirugía: primero bloqueo alfa y después beta. Un betabloqueador solo deja la estimulación alfa sin oposición: crisis hipertensiva.',
      why: ['El hipertiroidismo no da crisis tan graves, y el propranolol solo es peligroso si es feocromocitoma.', '', 'El cuadro no es de Cushing.', 'No es la sospecha principal.', 'No busca la causa.'],
      ref: 'Endocrine Society 2014 feocromocitoma' }),

    q({ id: 'hta-10', dif: 1,
      stem: 'Hombre de 19 años con HTA. PA en brazo derecho 162/88 y en piernas 110/70; pulsos femorales débiles y retrasados. La Rx de tórax muestra muescas en el borde inferior de las costillas. ¿Diagnóstico?',
      opts: ['Displasia fibromuscular', 'Coartación de la aorta', 'Feocromocitoma', 'Hiperaldosteronismo', 'Disección aórtica'],
      ans: 1,
      exp: 'PA alta en brazos y baja en piernas, pulsos femorales retrasados (retraso braquiofemoral) y muescas costales (por circulación colateral intercostal) = coartación aórtica. Se asocia a válvula aórtica bicúspide y síndrome de Turner.',
      why: ['No explica la diferencia brazos-piernas.', '', 'Causaría crisis adrenérgicas.', 'No causa este patrón.', 'Daría dolor súbito desgarrante.'],
      ref: 'ESC 2020 cardiopatías congénitas del adulto' }),

    q({ id: 'hta-11', dif: 2,
      stem: 'Hombre de 59 años con dolor torácico desgarrante irradiado a la espalda. PA 200/110 mmHg, FC 104. Angio-TC: disección aórtica tipo B. ¿Manejo inicial de la PA?',
      opts: ['Nitroprusiato solo', 'Esmolol o labetalol IV para FC <60 y PAS <120 en la primera hora; después vasodilatador si hace falta', 'Bajar la PAM solo 25% en 24 h', 'Nifedipino sublingual', 'Hidralazina IV sola'],
      ans: 1,
      exp: 'En la disección la meta es reducir la fuerza de eyección (dP/dt): primero betabloqueador IV para FC <60 y luego, si es necesario, vasodilatador para PAS <120 mmHg, todo en la primera hora. Es la excepción a la regla del 25%.',
      why: ['Un vasodilatador sin betabloqueo previo causa taquicardia refleja y empeora la disección.', '', 'Esa regla no aplica a la disección.', 'Proscrito.', 'Causa taquicardia refleja.'],
      ref: 'ESC 2024 HTA · ACC/AHA 2022 enfermedad aórtica' }),

    q({ id: 'hta-12', dif: 1,
      stem: 'Hombre de 55 años que se quedó sin sus antihipertensivos hace una semana. PA 210/122 mmHg, asintomático, exploración neurológica y fondo de ojo normales, ECG y creatinina sin cambios. ¿Qué haces?',
      opts: ['Nicardipino IV en terapia intensiva', 'Nifedipino sublingual', 'Reiniciar su tratamiento oral, descenso gradual en 24–48 h y cita cercana', 'Furosemida IV', 'Bajar la PA a 120/80 en una hora'],
      ans: 2,
      exp: 'Sin daño agudo a órgano blanco es urgencia hipertensiva: tratamiento oral y descenso gradual. Bajarla rápido no da beneficio y puede causar isquemia.',
      why: ['Es una urgencia, no una emergencia.', 'Proscrito por descensos bruscos e impredecibles.', '', 'Sin sobrecarga de volumen no está indicada.', 'Peligroso.'],
      ref: 'ESC 2024 HTA' }),

    q({ id: 'hta-13', dif: 1,
      stem: 'Mujer de 30 años con HTA crónica controlada con enalapril. Tiene 7 semanas de embarazo. ¿Qué haces?',
      opts: ['Continuar el enalapril', 'Cambiar a losartán', 'Cambiar a labetalol o nifedipino de liberación prolongada', 'Suspender todo y vigilar', 'Cambiar a espironolactona'],
      ans: 2,
      exp: 'IECA y ARA-II son fetotóxicos (sobre todo en 2º y 3º trimestres: oligohidramnios, falla renal fetal). Se cambian en cuanto se sabe del embarazo por labetalol, nifedipino o metildopa.',
      why: ['Contraindicado en el embarazo.', 'También contraindicado.', '', 'La HTA crónica en el embarazo debe tratarse.', 'Efecto antiandrogénico; no se usa.'],
      ref: 'ESC 2024 HTA · ACOG' }),

    q({ id: 'hta-14', dif: 1,
      stem: 'Hombre de 63 años con HTA que inició hidroclorotiazida hace 2 meses. Hoy tiene la primera MTF roja, caliente y muy dolorosa. ¿Qué relación tiene con su tratamiento?',
      opts: ['Ninguna', 'Las tiazidas reducen la excreción de ácido úrico y desencadenan gota; considerar cambiar a losartán o amlodipino', 'Es una reacción alérgica a sulfas', 'Es hipokalemia', 'Es un efecto del IECA'],
      ans: 1,
      exp: 'Las tiazidas (y los diuréticos de asa) aumentan la reabsorción de urato y desencadenan gota. Tras tratar el ataque, conviene cambiar a otro antihipertensivo; el losartán además tiene efecto uricosúrico.',
      why: ['Es una asociación clásica.', '', 'La presentación es de gota, no de alergia.', 'La hipokalemia no da monoartritis.', 'No toma IECA.'],
      ref: 'ACR 2020 gota' }),

    q({ id: 'hta-15', dif: 2,
      stem: 'Hombre de 70 años con HTA tratada con lisinopril. Inicia losartán por indicación de otro médico. A las 2 semanas: K 6.4 mEq/L y Cr de 1.1 a 1.9 mg/dL. ¿Cuál fue el error?',
      opts: ['Usar un ARA-II en mayores de 65 años', 'Combinar IECA + ARA-II', 'No dar diurético', 'No medir el ácido úrico', 'Ninguno; es esperable'],
      ans: 1,
      exp: 'El doble bloqueo del SRAA (IECA + ARA-II o + aliskirén) no reduce eventos y aumenta hiperkalemia, LRA e hipotensión (ONTARGET, VA NEPHRON-D). Nunca se combinan.',
      why: ['Los ARA-II se usan sin problema en adultos mayores.', '', 'No explica la hiperkalemia ni la LRA.', 'No tiene relación.', 'Es un error de prescripción prevenible.'],
      ref: 'ONTARGET 2008 · ESC 2024' })
  ],

  cases: [
    { id: 'g-hta', topic: 'hta', subj: 'nefro',
      title: 'Se acabaron las pastillas', place: 'Urgencias',
      patient: { name: 'Rubén', age: 52, sex: 'H', skin: '#B97A52', hair: '#1E1A18', gown: '#F2B66D' },
      intro: 'Trabajador de construcción con HTA desde hace 6 años. Llega porque en la farmacia le tomaron la presión y le salió “muy alta”.',
      extra: { label: 'K⁺', unit: 'mEq/L' },
      start: { FC: 82, PAS: 212, PAD: 124, SpO2: 97, FR: 16, X: 3.2 },
      nodes: [
        { tag: 'Llegada', ecg: 'normal',
          text: 'Se le acabaron sus pastillas hace 10 días. Está asintomático. Exploración neurológica y fondo de ojo normales; ECG y creatinina sin cambios. K 3.2 mEq/L.',
          q: '¿Cómo lo manejas?',
          A: { t: 'Nicardipino IV en terapia intensiva', ok: false, res: 'Ocupaste una cama de terapia intensiva y lo expusiste a un descenso rápido sin necesidad.' },
          B: { t: 'Urgencia: reiniciar su tratamiento oral, descenso gradual en 24–48 h y cita cercana', ok: true, res: 'Reinicias losartán y amlodipino. A las 2 h está en 178/104 y se va con cita en 1 semana.', vit: { PAS: 178, PAD: 104 } },
          why: 'Sin daño agudo a órgano blanco es urgencia hipertensiva: vía oral y descenso gradual.' },
        { tag: 'Dos meses después', ecg: 'tachy', vit: { FC: 102, PAS: 232, PAD: 134, X: 3.0 },
          text: 'Regresa con cefalea intensa, confusión y vómito. Fondo de ojo: papiledema y hemorragias en llama.',
          q: '¿Qué haces?',
          A: { t: 'Emergencia: terapia intensiva, labetalol o nicardipino IV y bajar la PAM ≤25% en la 1ª hora', ok: true, res: 'En 1 h la PA está en 182/108 y mejora el estado de alerta.', ecg: 'normal', vit: { FC: 88, PAS: 182, PAD: 108 } },
          B: { t: 'Llevarlo a 120/80 en la primera hora', ok: false, res: 'La PA cae de golpe y aparece déficit focal: isquemia cerebral por hipoperfusión.', vit: { PAS: 118, PAD: 70 } },
          why: 'Encefalopatía hipertensiva = emergencia. IV titulable, PAM ↓ ≤25% en la primera hora y luego gradual. Descensos bruscos causan isquemia.' },
        { tag: 'Al estabilizarse', ecg: 'normal', vit: { FC: 78, PAS: 156, PAD: 96, X: 2.9 },
          text: 'Con 3 fármacos a dosis máximas (incluido diurético) sigue mal controlado. K 2.9 mEq/L. Niega usar AINE o regaliz.',
          q: '¿Qué estudio pides?',
          A: { t: 'Cociente aldosterona/renina', ok: true, res: 'Aldosterona alta con renina suprimida; la prueba de supresión con solución salina lo confirma.' },
          B: { t: 'Agregar furosemida y no estudiar más', ok: false, res: 'La hipokalemia empeora y sigue descontrolado.', vit: { X: 2.6 } },
          why: 'HTA resistente + hipokalemia = sospecha de hiperaldosteronismo primario: tamizaje con cociente aldosterona/renina.' },
        { tag: 'Resultados', ecg: 'normal',
          text: 'TC: adenoma suprarrenal izquierdo de 1.8 cm. El cateterismo de venas suprarrenales confirma producción unilateral.',
          q: '¿Tratamiento definitivo?',
          A: { t: 'Suprarrenalectomía laparoscópica izquierda', ok: true, res: 'A los 3 meses tiene PA de 132/82 con un solo fármaco y K normal.', vit: { PAS: 132, PAD: 82, X: 4.2 } },
          B: { t: 'Espironolactona de por vida sin cirugía', ok: false, res: 'Es la opción para enfermedad bilateral o si no puede operarse; aquí la cirugía puede curarlo.' },
          why: 'Aldosteronismo unilateral (adenoma) → suprarrenalectomía. Bilateral (hiperplasia) → antagonista mineralocorticoide.' }
      ] }
  ]
};
