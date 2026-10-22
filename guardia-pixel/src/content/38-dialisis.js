// Tema 29 · Diálisis y trasplante renal (Nefrología, semana 5)
const T = { topic: 'dialisis', subj: 'nefro' };
const q = (o) => ({ ...T, ...o });

export default {
  lessons: {
    dialisis: {
      hook: 'Cuándo dializar de urgencia (AEIOU), cómo elegir entre hemodiálisis y diálisis peritoneal, qué complicaciones esperar y por qué el trasplante es el mejor tratamiento de la ERC terminal.',
      nn: [['hemodialysis-nclex', 'Hemodialysis'], ['chronic-kidney-disease', 'Chronic Kidney Disease']],
      yt: 'dialysis kidney transplant',
      sections: [
        { h: 'Indicaciones urgentes: AEIOU', html: `
<ul>
<li><b>A</b>cidosis metabólica grave refractaria (pH &lt;7.1–7.15).</li>
<li><b>E</b>lectrólitos: hiperkalemia refractaria o con cambios en el ECG.</li>
<li><b>I</b>ntoxicaciones dializables: metanol, etilenglicol, litio, salicilatos, metformina (acidosis láctica), valproato, teofilina.</li>
<li><b>O</b>verload: sobrecarga de volumen refractaria a diuréticos (edema pulmonar).</li>
<li><b>U</b>remia: pericarditis, encefalopatía, sangrado urémico.</li>
</ul>` },
        { h: 'Diálisis crónica', html: `
<ul>
<li>Se inicia por <b>síntomas o complicaciones</b> (uremia, volumen, potasio, acidosis, desnutrición), no por una cifra de TFG sola; suele ser con TFG 5–10 (estudio IDEAL).</li>
<li>Referir a Nefrología con TFG &lt;30 para planear. <b>Fístula arteriovenosa</b> meses antes; cuidar las venas del brazo no dominante (sin venopunciones ni catéteres centrales de inserción periférica).</li>
<li><b>Hemodiálisis</b>: difusión + ultrafiltración; 3 sesiones por semana de ~4 h. Acceso: fístula (mejor) &gt; injerto &gt; catéter (más infecciones). Adecuación: Kt/V ≥1.2.</li>
<li><b>Diálisis peritoneal</b> (continua ambulatoria o automatizada nocturna): en casa, preserva la función renal residual, mejor estabilidad hemodinámica. Contraindicaciones: cirugías abdominales extensas, hernias no reparables, incapacidad de autocuidado sin apoyo.</li>
<li>Pacientes inestables en UCI: terapia de reemplazo renal continua.</li>
</ul>` },
        { h: 'Complicaciones', html: `
<ul>
<li><b>Hemodiálisis</b>: <b>hipotensión intradiálisis</b> (la más común), calambres, <b>síndrome de desequilibrio</b> (edema cerebral en las primeras sesiones con urea muy alta: cefalea, náusea, convulsiones; se previene con sesiones cortas y de baja eficiencia), bacteriemia por catéter (S. aureus), trombosis o estenosis de la fístula, síndrome de robo, amiloidosis por β2-microglobulina (túnel del carpo).</li>
<li><b>Diálisis peritoneal</b>: <b>peritonitis</b> (líquido turbio, dolor; &gt;100 leucocitos/µL con &gt;50% neutrófilos; gérmenes de la piel como estafilococo; antibiótico intraperitoneal), infección del orificio de salida, hiperglucemia y aumento de peso (glucosa del dializado), hipoalbuminemia, hernias.</li>
</ul>` },
        { h: 'Trasplante renal', html: `
<ul>
<li>Mejor supervivencia y calidad de vida que cualquier diálisis. Ideal: <b>anticipado</b> (antes de iniciar diálisis) y de donador vivo.</li>
<li>Requisitos inmunológicos: compatibilidad ABO, tipificación HLA, <b>prueba cruzada</b> negativa.</li>
<li>Inmunosupresión de mantenimiento: <b>tacrolimus</b> + micofenolato + prednisona.</li>
<li>Rechazo: <b>hiperagudo</b> (minutos, anticuerpos preformados), <b>agudo</b> (semanas a meses; creatinina ↑; biopsia; pulsos de esteroide o tratamiento de rechazo humoral), <b>crónico</b> (años, fibrosis).</li>
<li>Toxicidad de tacrolimus: nefrotoxicidad (vasoconstricción de la arteriola aferente), hiperkalemia, hipomagnesemia, HTA, diabetes postrasplante, temblor. Interacciones: azoles, macrólidos, diltiazem lo elevan; rifampicina y anticonvulsivos lo bajan.</li>
<li>Infecciones: CMV, virus BK (nefropatía), Pneumocystis (profilaxis con TMP-SMX). Cáncer: piel (el más común), enfermedad linfoproliferativa postrasplante (VEB).</li>
</ul>` }
      ],
      mnemo: { t: 'AEIOU', d: 'Acidosis, Electrólitos (potasio), Intoxicaciones, Overload (volumen), Uremia: las cinco vocales de la diálisis urgente.' },
      pearl: 'Pericarditis urémica en un paciente con ERC: es indicación de diálisis (no de AINE). En quien ya se dializa, indica diálisis insuficiente.',
      trap: 'Paciente trasplantado que inicia claritromicina o fluconazol: el tacrolimus sube y aparece LRA por toxicidad. Ajusta la dosis y mide niveles.',
      guide: [
        'Inicio de diálisis crónica: KDIGO 2024 insiste en iniciar por síntomas o complicaciones, no por TFG; libros antiguos daban cifras fijas (TFG <15 o <10).',
        'Peritonitis en diálisis peritoneal: la ISPD 2022 usa >100 leucocitos/µL con >50% de neutrófilos tras un tiempo de permanencia ≥2 h.'
      ],
      refs: [
        'KDIGO 2024 Clinical Practice Guideline for the Evaluation and Management of CKD. Kidney Int 2024.',
        'Cooper BA, et al. IDEAL trial. N Engl J Med 2010.',
        'Li PK, et al. ISPD peritonitis guideline recommendations: 2022 update. Perit Dial Int 2022.',
        'KDIGO Clinical Practice Guideline for the Care of Kidney Transplant Recipients. Am J Transplant 2009.'
      ]
    }
  },

  cards: [
    ['Indicaciones urgentes de diálisis', 'AEIOU: acidosis, electrólitos, intoxicaciones, sobrecarga, uremia'],
    ['Intoxicaciones dializables', 'Metanol, etilenglicol, litio, salicilatos, metformina, valproato, teofilina'],
    ['Inicio de diálisis crónica', 'Por síntomas o complicaciones, no por TFG sola'],
    ['Mejor acceso para hemodiálisis', 'Fístula arteriovenosa'],
    ['Complicación más común de la hemodiálisis', 'Hipotensión intradiálisis'],
    ['Síndrome de desequilibrio', 'Edema cerebral en las primeras sesiones con urea muy alta'],
    ['Peritonitis en DP: criterio', '>100 leucocitos/µL con >50% neutrófilos'],
    ['Ventaja de la diálisis peritoneal', 'Preserva la función renal residual; en casa'],
    ['Mejor tratamiento de la ERC terminal', 'Trasplante renal'],
    ['Inmunosupresión de mantenimiento', 'Tacrolimus + micofenolato + prednisona'],
    ['Rechazo hiperagudo', 'Minutos; anticuerpos preformados'],
    ['Profilaxis en trasplante', 'TMP-SMX contra Pneumocystis'],
    ['Cáncer más común en trasplantados', 'Cáncer de piel no melanoma']
  ],

  questions: [
    q({ id: 'dialisis-01', dif: 1,
      stem: 'Hombre con LRA oligúrica, K 7.2 con ondas T picudas que no baja con gluconato de calcio, insulina con glucosa y salbutamol. ¿Siguiente paso?',
      opts: ['Más furosemida', 'Hemodiálisis urgente', 'Resinas de intercambio y esperar 24 h', 'Bicarbonato oral', 'Observación'],
      ans: 1,
      exp: 'Hiperkalemia refractaria con cambios en el ECG: indicación urgente de diálisis (la “E” de AEIOU).',
      why: ['Está oligúrico.', '', 'Demasiado lento.', 'Demasiado lento.', 'Riesgo de arritmia.'],
      ref: 'KDIGO LRA' }),

    q({ id: 'dialisis-02', dif: 2,
      stem: 'Paciente con intoxicación por litio, nivel de 4.8 mEq/L, confusión y LRA. ¿Manejo?',
      opts: ['Solo líquidos IV', 'Hemodiálisis', 'Carbón activado', 'Diálisis peritoneal', 'Fomepizol'],
      ans: 1,
      exp: 'El litio es pequeño, no se une a proteínas y se dializa bien. Con nivel alto, síntomas neurológicos o falla renal está indicada la hemodiálisis.',
      why: ['Insuficiente con estos datos.', '', 'No adsorbe litio.', 'Mucho menos eficaz.', 'Es para metanol y etilenglicol.'],
      ref: 'EXTRIP' }),

    q({ id: 'dialisis-03', dif: 2,
      stem: 'Hombre con ERC G5, TFG 9, sin síntomas, sin hiperkalemia, sin acidosis grave y bien nutrido. Pregunta si debe iniciar diálisis ya. ¿Respuesta?',
      opts: ['Sí, con TFG <10 siempre se inicia', 'No necesariamente: se inicia por síntomas o complicaciones; preparar acceso y vigilar de cerca', 'Solo si la TFG baja de 2', 'Nunca se dializa a pacientes asintomáticos', 'Iniciar diálisis peritoneal urgente'],
      ans: 1,
      exp: 'El estudio IDEAL mostró que iniciar temprano (TFG 10–14) no mejora la supervivencia frente a iniciar tarde (5–7). Se decide por clínica, con el acceso ya preparado.',
      why: ['No por cifra sola.', '', 'Arbitrario y peligroso.', 'Puede requerirla por otras razones.', 'No hay urgencia.'],
      ref: 'IDEAL 2010 · KDIGO 2024' }),

    q({ id: 'dialisis-04', dif: 2,
      stem: 'Paciente con BUN de 190 mg/dL en su primera sesión de hemodiálisis presenta cefalea, náusea, desorientación y una convulsión al final de la sesión. ¿Diagnóstico?',
      opts: ['Hipoglucemia', 'Síndrome de desequilibrio por diálisis', 'Embolia gaseosa', 'Hemorragia subaracnoidea por heparina', 'Hiperkalemia'],
      ans: 1,
      exp: 'La urea baja rápido en sangre pero no en el cerebro: el agua entra a las neuronas (edema cerebral). Se previene con sesiones iniciales cortas y de baja eficiencia.',
      why: ['No explica el contexto.', '', 'Sería súbita con disnea o colapso.', 'Menos probable en este contexto.', 'El potasio baja con la diálisis.'],
      ref: 'Harrison 21e' }),

    q({ id: 'dialisis-05', dif: 2,
      stem: 'Mujer en diálisis peritoneal con dolor abdominal y líquido turbio. Recuento del dializado: 680 leucocitos/µL, 85% neutrófilos. ¿Manejo?',
      opts: ['Laparotomía urgente', 'Cultivo del líquido y antibióticos intraperitoneales empíricos (cobertura de grampositivos y gramnegativos)', 'Suspender la diálisis y pasar a hemodiálisis definitiva', 'Solo analgésicos', 'Antibiótico oral'],
      ans: 1,
      exp: 'Peritonitis asociada a DP: la vía intraperitoneal es la preferida. Se cubre grampositivos (vancomicina o cefalosporina de 1ª) y gramnegativos (ceftazidima o aminoglucósido), y se ajusta por cultivo.',
      why: ['Solo si hay sospecha de peritonitis secundaria.', '', 'No de entrada.', 'Insuficiente.', 'Menos eficaz.'],
      ref: 'ISPD 2022' }),

    q({ id: 'dialisis-06', dif: 1,
      stem: '¿Cuál es el acceso vascular preferido para hemodiálisis crónica?',
      opts: ['Catéter venoso central tunelizado', 'Fístula arteriovenosa nativa', 'Injerto arteriovenoso protésico', 'Catéter femoral temporal', 'Catéter subclavio'],
      ans: 1,
      exp: 'La fístula tiene menos infecciones y trombosis y mayor duración. Requiere semanas a meses para madurar, por eso se planea con anticipación.',
      why: ['Más infecciones y mortalidad.', '', 'Segunda opción.', 'Solo temporal.', 'Causa estenosis venosa central.'],
      ref: 'KDOQI Vascular Access 2019' }),

    q({ id: 'dialisis-07', dif: 2,
      stem: 'Paciente con trasplante renal hace 2 años, en tacrolimus, inicia claritromicina por neumonía. A los 5 días: creatinina de 1.2 a 2.1, K 5.8, temblor. ¿Causa más probable?',
      opts: ['Rechazo crónico', 'Toxicidad por tacrolimus por inhibición del CYP3A4', 'Nefropatía por BK', 'Obstrucción ureteral', 'Rechazo hiperagudo'],
      ans: 1,
      exp: 'Los macrólidos (claritromicina) inhiben el CYP3A4 y elevan el tacrolimus: vasoconstricción aferente, hiperkalemia y temblor. Se miden niveles y se ajusta la dosis.',
      why: ['Es de años y no explica el temblor.', '', 'Más lenta y sin relación con el fármaco.', 'No explica temblor ni el contexto.', 'Ocurre en minutos tras el trasplante.'],
      ref: 'KDIGO Trasplante' }),

    q({ id: 'dialisis-08', dif: 2,
      stem: 'En la cirugía de trasplante, minutos después de restablecer el flujo, el riñón se torna cianótico y moteado. ¿Qué ocurrió?',
      opts: ['Rechazo agudo celular', 'Rechazo hiperagudo por anticuerpos preformados', 'Rechazo crónico', 'Nefrotoxicidad por tacrolimus', 'Infección por CMV'],
      ans: 1,
      exp: 'Anticuerpos preformados (ABO o anti-HLA) activan complemento y trombosis inmediatamente. Se previene con compatibilidad ABO y prueba cruzada negativa. El injerto se pierde.',
      why: ['Ocurre en semanas a meses.', '', 'Ocurre en años.', 'No es inmediata.', 'Ocurre en meses.'],
      ref: 'Harrison 21e' }),

    q({ id: 'dialisis-09', dif: 1,
      stem: 'Para un paciente con ERC terminal y sin contraindicaciones, ¿qué tratamiento ofrece mejor supervivencia y calidad de vida?',
      opts: ['Hemodiálisis en centro', 'Trasplante renal', 'Diálisis peritoneal', 'Hemodiálisis nocturna', 'Tratamiento conservador'],
      ans: 1,
      exp: 'El trasplante reduce la mortalidad frente a permanecer en diálisis en lista de espera, y mejora la calidad de vida. Mejor aún si es anticipado y de donador vivo.',
      why: ['Inferior al trasplante.', '', 'Inferior al trasplante.', 'Inferior al trasplante.', 'Para quien no desea o no puede recibir diálisis.'],
      ref: 'KDIGO 2024' }),

    q({ id: 'dialisis-10', dif: 2,
      stem: 'Paciente en hemodiálisis por 12 años presenta parestesias en ambas manos de predominio nocturno. ¿Causa asociada a la diálisis?',
      opts: ['Neuropatía por B12', 'Amiloidosis por β2-microglobulina (síndrome del túnel del carpo)', 'Hipercalcemia', 'Hipotiroidismo', 'Gota'],
      ans: 1,
      exp: 'La β2-microglobulina no se elimina bien con la diálisis y se deposita como amiloide en articulaciones y en el túnel del carpo tras años de tratamiento.',
      why: ['No es la causa asociada a diálisis.', '', 'No causa este cuadro.', 'Posible, pero no es la asociada a diálisis.', 'No causa este cuadro.'],
      ref: 'Harrison 21e' })
  ]
};
