// Tema 4 · Síndrome metabólico y dislipidemia (Endocrinología, semanas 3–4)
const T = { topic: 'smdl', subj: 'endo' };
const q = (o) => ({ ...T, ...o });

export default {
  lessons: {
    smdl: {
      hook: 'Se pregunta con números: cuántos criterios hacen síndrome metabólico, en qué categoría de riesgo está el paciente, cuál es su meta de LDL y qué agregas si no llega.',
      anim: 'smdl',
      compare: ['ldl-tg'],
      nn: [['hyperlipidemia', 'Hyperlipidemia'], ['drugs-for-hyperlipidemia', 'Drugs for Hyperlipidemia']],
      yt: 'hyperlipidemia statins',
      sections: [
        { h: 'Síndrome metabólico', html: `
<p><b>Criterios armonizados (2009): 3 de 5</b> (cuenta también si ya recibe tratamiento para ese criterio).</p>
<div class="tablewrap"><table class="mini">
<tr><th>Criterio</th><th>Umbral</th></tr>
<tr><td>Cintura</td><td>Según población: ATP III ≥102 cm hombres / ≥88 cm mujeres; IDF para Latinoamérica ≥90 / ≥80 cm</td></tr>
<tr><td>Triglicéridos</td><td>≥150 mg/dL</td></tr>
<tr><td>HDL</td><td>&lt;40 mg/dL hombres · &lt;50 mg/dL mujeres</td></tr>
<tr><td>Presión arterial</td><td>≥130/85 mmHg</td></tr>
<tr><td>Glucosa en ayuno</td><td>≥100 mg/dL</td></tr>
</table></div>
<ul>
<li>La IDF 2005 exigía obesidad central obligatoria; los criterios armonizados ya no.</li>
<li>Duplica el riesgo cardiovascular y multiplica el de DM2 (~5 veces).</li>
<li>Tratamiento: bajar 7–10% del peso, ≥150 min/semana de actividad aeróbica, dieta mediterránea, y tratar cada componente.</li>
</ul>` },
        { h: 'Lipoproteínas en 1 minuto', html: `
<ul>
<li><b>LDL</b> lleva colesterol a los tejidos y a la pared arterial: es el blanco del tratamiento.</li>
<li><b>HDL</b> hace el transporte reverso de colesterol al hígado.</li>
<li><b>VLDL</b> transporta triglicéridos hechos en el hígado; <b>quilomicrones</b>, los de la dieta.</li>
<li><b>LDL calculado (Friedewald)</b> = colesterol total − HDL − TG/5. No sirve si los TG son ≥400 mg/dL: pide LDL directo.</li>
<li><b>Colesterol no-HDL</b> = total − HDL. Su meta es la del LDL + 30.</li>
<li>La ESC sugiere medir <b>Lp(a)</b> al menos una vez en la vida.</li>
</ul>` },
        { h: 'Riesgo y metas de LDL (ESC/EAS)', html: `
<div class="tablewrap"><table class="mini">
<tr><th>Riesgo</th><th>Quién</th><th>Meta LDL</th></tr>
<tr><td><b>Muy alto</b></td><td>ECV aterosclerótica establecida (clínica o en imagen); DM con daño a órgano blanco o ≥3 FR mayores; ERC con TFG &lt;30; SCORE2 ≥7.5% (&lt;50 años) o ≥10% (50–69); HF con ECV u otro FR mayor</td><td><b>&lt;55 mg/dL</b> y ↓ ≥50%</td></tr>
<tr><td><b>Alto</b></td><td>Un FR muy elevado (LDL &gt;190, CT &gt;310 o PA ≥180/110); HF sin otros FR; DM sin daño a órgano blanco con ≥10 años de evolución u otro FR; ERC con TFG 30–59; SCORE2 2.5–7.5% o 5–10%</td><td><b>&lt;70 mg/dL</b> y ↓ ≥50%</td></tr>
<tr><td>Moderado</td><td>DM joven (DM1 &lt;35 años, DM2 &lt;50) con &lt;10 años y sin FR; SCORE2 bajo-moderado</td><td>&lt;100 mg/dL</td></tr>
<tr><td>Bajo</td><td>SCORE2 bajo</td><td>&lt;116 mg/dL</td></tr>
</table></div>
<p>Si tuvo un segundo evento vascular en 2 años con estatina a dosis máxima, se puede considerar LDL &lt;40 mg/dL.</p>
<p><b>Secuencia</b>: estatina de alta intensidad a dosis máxima tolerada → si no llega en 4–6 semanas, + ezetimiba → si aún no, + iPCSK9.</p>` },
        { h: 'Estatinas', html: `
<ul>
<li>Inhiben la HMG-CoA reductasa: baja el colesterol dentro del hepatocito, que responde fabricando más receptores de LDL y limpia la sangre.</li>
<li><b>Alta intensidad (↓ ≥50%)</b>: atorvastatina 40–80 mg, rosuvastatina 20–40 mg.</li>
<li><b>Moderada (↓ 30–49%)</b>: atorvastatina 10–20, rosuvastatina 5–10, simvastatina 20–40, pravastatina 40–80.</li>
<li><b>Efectos adversos</b>: mialgias (lo más común), miopatía con CK alta, rabdomiólisis (rara), ↑ transaminasas, leve ↑ del riesgo de DM (el beneficio cardiovascular es mucho mayor).</li>
<li>Más miopatía con gemfibrozilo, macrólidos, azoles, ciclosporina (interacciones por CYP3A4 con simva-, lova- y atorvastatina).</li>
<li>Con mialgias: medir CK y TSH, suspender temporalmente y reintentar con otra estatina o dosis menor; si CK &gt;10× con síntomas, suspender.</li>
<li>Contraindicadas en embarazo y lactancia y en hepatopatía activa descompensada.</li>
</ul>` },
        { h: 'Otros hipolipemiantes', html: `
<ul>
<li><b>Ezetimiba</b>: bloquea NPC1L1 en el intestino (absorción de colesterol). ↓ LDL ~20–25%. Redujo eventos sumada a estatina (IMPROVE-IT).</li>
<li><b>iPCSK9</b> (evolocumab, alirocumab; inclisirán es un ARN de interferencia): evitan que se destruya el receptor de LDL. ↓ LDL ~50–60% adicional. Redujeron eventos (FOURIER, ODYSSEY OUTCOMES).</li>
<li><b>Ácido bempedoico</b>: inhibe la ATP-citrato liasa antes de la HMG-CoA reductasa; no da mialgias porque no actúa en músculo. Útil con intolerancia a estatinas (CLEAR Outcomes).</li>
<li><b>Fibratos</b> (fenofibrato): bajan TG; se usan para prevenir pancreatitis con TG muy altos. Con estatina, fenofibrato sí; gemfibrozilo no.</li>
<li><b>Icosapento de etilo</b> (EPA purificado 2 g c/12 h): con TG 135–499 mg/dL y alto riesgo pese a estatina, redujo eventos (REDUCE-IT).</li>
<li><b>Secuestradores de ácidos biliares</b> (colestiramina): suben los TG; se pueden usar en el embarazo.</li>
</ul>` },
        { h: 'Hipertrigliceridemia', html: `
<ul>
<li>TG ≥150 mg/dL = elevados. Con TG muy altos (≥500 según ACC/AHA; &gt;880 mg/dL o 10 mmol/L según ESC) aumenta el riesgo de <b>pancreatitis</b>.</li>
<li><b>Causas secundarias</b>: DM descontrolada, alcohol, obesidad, hipotiroidismo, ERC y síndrome nefrótico, embarazo; fármacos (estrógenos orales, tamoxifeno, glucocorticoides, betabloqueadores, tiazidas, retinoides, antipsicóticos atípicos, inhibidores de proteasa).</li>
<li><b>TG muy altos</b>: dieta muy baja en grasa, cero alcohol, controlar la glucosa y fenofibrato.</li>
<li><b>TG 150–499</b>: lo primero es el LDL (estatina); si persisten con ECV o DM, considerar icosapento de etilo.</li>
<li>Signos de quilomicronemia: xantomas eruptivos, lipemia retinalis, hepatoesplenomegalia, dolor abdominal.</li>
</ul>` },
        { h: 'Hipercolesterolemia familiar', html: `
<ul>
<li>Autosómica dominante (receptor de LDL, ApoB o PCSK9). Heterocigota ~1 de cada 250 personas.</li>
<li>Sospecha: LDL ≥190 mg/dL en adultos, xantomas tendinosos (Aquiles, extensores de manos), arco corneal antes de los 45 años, familiar con ECV prematura.</li>
<li>Criterios de la Dutch Lipid Clinic Network para clasificarla.</li>
<li>Tratamiento: estatina de alta intensidad desde joven, casi siempre con ezetimiba y a menudo iPCSK9. Tamizaje en cascada de los familiares.</li>
</ul>` }
      ],
      mnemo: { t: 'Las 3 escaleras del LDL: Estatina → Ezetimiba → iPCSK9', d: 'Primero la estatina de alta intensidad a dosis máxima tolerada; a las 4–6 semanas, si no llega a la meta, agrega ezetimiba; si aún no llega, iPCSK9. Para los TG muy altos la escalera es otra: dieta sin grasa + cero alcohol + fenofibrato.' },
      pearl: 'La meta de LDL en muy alto riesgo tiene dos condiciones: <55 mg/dL Y reducción ≥50% de la basal. Si el paciente llegó a 60 bajando de 160, todavía no cumple.',
      trap: 'Estatina + gemfibrozilo = rabdomiólisis. Si necesitas un fibrato con estatina, que sea fenofibrato.',
      guide: [
        'Metas vs umbrales: la ESC/EAS fija metas numéricas (<55, <70, <100). La ACC/AHA habla de intensidad de estatina por grupos (ECV, LDL ≥190, DM 40–75 años, riesgo a 10 años ≥7.5%) y de umbrales para agregar ezetimiba o iPCSK9 (LDL ≥70, o ≥55 en muy alto riesgo según la vía de decisión 2022). Si te preguntan “meta”, contesta con la ESC.',
        'Cintura: el umbral cambia según la guía y la población (102/88 en ATP III; 90/80 para Latinoamérica según IDF). ⚠️ Pregunta cuál usa tu profesor; en los casos de esta app los números funcionan con ambos.'
      ],
      refs: [
        'Mach F, et al. 2019 ESC/EAS Guidelines for the management of dyslipidaemias. Eur Heart J 2020; y la actualización focalizada ESC/EAS 2025.',
        'Grundy SM, et al. 2018 AHA/ACC Guideline on the Management of Blood Cholesterol. Circulation 2019.',
        'Alberti KG, et al. Harmonizing the Metabolic Syndrome. Circulation 2009.'
      ]
    }
  },

  compares: {
    'ldl-tg': {
      topic: 'smdl', a: 'LDL alto', b: 'TG muy altos',
      rows: [
        ['Riesgo principal', 'Enfermedad cardiovascular aterosclerótica', 'Pancreatitis aguda (y riesgo CV residual)'],
        ['Signos', 'Xantomas tendinosos, arco corneal <45 años, xantelasmas', 'Xantomas eruptivos, lipemia retinalis, hepatoesplenomegalia'],
        ['Causas secundarias', 'Hipotiroidismo, síndrome nefrótico, colestasis, anorexia, fármacos', 'DM descontrolada, alcohol, obesidad, ERC, estrógenos, tiazidas, antipsicóticos'],
        ['Primer fármaco', 'Estatina de alta intensidad', 'Fenofibrato si son muy altos; si no, estatina según el riesgo CV'],
        ['Para agregar', 'Ezetimiba, luego iPCSK9 (o ácido bempedoico)', 'Icosapento de etilo con ECV o DM pese a estatina'],
        ['Medidas clave', 'Dieta baja en grasa saturada, ejercicio', 'Cero alcohol, dieta muy baja en grasa, control de glucosa']
      ]
    }
  },

  anims: {
    smdl: {
      title: 'El receptor de LDL y sus fármacos',
      steps: [
        { cap: '<b>El hígado limpia el LDL.</b> Los receptores de LDL en la membrana del hepatocito atrapan las partículas de LDL de la sangre, las meten a la célula y vuelven a la superficie para atrapar más.',
          labels: [[30, 10, 'Sangre'], [130, 10, 'LDL'], [40, 66, 'Receptor'], [80, 104, 'Hepatocito']] },
        { cap: '<b>Estatina.</b> Bloquea la HMG-CoA reductasa: el hepatocito fabrica menos colesterol y, para compensar, saca más receptores a la membrana. Resultado: más LDL capturado y menos en la sangre.',
          labels: [[80, 104, 'HMG-CoA reductasa ✕'], [130, 10, 'LDL ↓']] },
        { cap: '<b>PCSK9 e iPCSK9.</b> La PCSK9 se pega al receptor y hace que se destruya. El anticuerpo anti-PCSK9 la atrapa: el receptor se recicla y sigue limpiando LDL.',
          labels: [[30, 10, 'PCSK9'], [120, 30, 'Anticuerpo'], [80, 104, 'Receptor reciclado']] },
        { cap: '<b>Ezetimiba.</b> En el intestino bloquea la proteína NPC1L1, que absorbe colesterol. Llega menos colesterol al hígado, que de nuevo responde con más receptores de LDL.',
          labels: [[40, 10, 'Luz intestinal'], [80, 58, 'NPC1L1 ✕'], [80, 104, 'Enterocito']] }
      ]
    }
  },

  cards: [
    ['Síndrome metabólico (criterios armonizados)', '3 de 5: cintura aumentada, TG ≥150, HDL <40 H / <50 M, PA ≥130/85, glucosa ≥100'],
    ['Meta de LDL en muy alto riesgo (ESC)', '<55 mg/dL y reducción ≥50% de la basal'],
    ['Meta de LDL en alto riesgo (ESC)', '<70 mg/dL y reducción ≥50%'],
    ['Meta de LDL en riesgo moderado y bajo', 'Moderado <100 · bajo <116 mg/dL'],
    ['Estatinas de alta intensidad', 'Atorvastatina 40–80 mg · rosuvastatina 20–40 mg'],
    ['Fórmula de Friedewald', 'LDL = CT − HDL − TG/5 (no válida si TG ≥400)'],
    ['Mecanismo de la ezetimiba', 'Bloquea NPC1L1 → menos absorción intestinal de colesterol'],
    ['Mecanismo de los iPCSK9', 'Evitan la degradación del receptor de LDL'],
    ['Estatina + ¿qué fibrato?', 'Fenofibrato (no gemfibrozilo: rabdomiólisis)'],
    ['TG >880 mg/dL (ESC) o ≥500 (ACC/AHA)', 'Riesgo de pancreatitis: dieta muy baja en grasa, cero alcohol, fenofibrato'],
    ['Icosapento de etilo', 'EPA 2 g c/12 h; TG 135–499 con alto riesgo pese a estatina (REDUCE-IT)'],
    ['Pistas de hipercolesterolemia familiar', 'LDL ≥190, xantomas tendinosos, arco corneal <45 años, ECV prematura familiar'],
    ['Hipolipemiante seguro en embarazo', 'Secuestradores de ácidos biliares (estatinas contraindicadas)'],
    ['Causas secundarias de LDL alto', 'Hipotiroidismo, síndrome nefrótico, colestasis']
  ],

  questions: [
    q({ id: 'smdl-01', dif: 2,
      stem: 'Mujer de 44 años sin tratamientos: cintura 92 cm, TG 168 mg/dL, HDL 46 mg/dL, PA 124/78 mmHg, glucosa en ayuno 96 mg/dL. ¿Tiene síndrome metabólico según los criterios armonizados?',
      opts: ['No, solo cumple 2 criterios', 'Sí: cintura, TG y HDL', 'No, porque la glucosa es normal', 'Sí: cumple los 5 criterios', 'Solo si la cintura es ≥102 cm'],
      ans: 1,
      exp: 'Cumple 3 de 5: cintura (≥88 cm en ATP III y ≥80 cm en IDF para Latinoamérica), TG ≥150 y HDL <50 mg/dL (umbral de mujeres). La PA y la glucosa no cumplen.',
      why: ['El HDL de 46 sí cuenta porque en mujeres el umbral es <50.', '', 'No hace falta que todos los criterios estén alterados.', 'La PA y la glucosa no cumplen.', '≥102 cm es el umbral de hombres en ATP III.'],
      ref: 'Alberti KG, et al. Circulation 2009' }),

    q({ id: 'smdl-02', dif: 2,
      stem: 'Hombre de 58 años con DM2 de 12 años de evolución e HTA. Sin ECV, sin retinopatía ni albuminuria, TFG 82. LDL 142 mg/dL. Según la ESC/EAS, ¿cuál es su meta de LDL?',
      opts: ['<116 mg/dL', '<100 mg/dL', '<70 mg/dL y reducción ≥50%', '<55 mg/dL y reducción ≥50%', '<40 mg/dL'],
      ans: 2,
      exp: 'DM sin daño a órgano blanco pero con ≥10 años de evolución u otro factor de riesgo = alto riesgo → LDL <70 mg/dL y reducción ≥50%. Sería muy alto riesgo con daño a órgano blanco, ≥3 factores mayores o ECV.',
      why: ['Es la meta de bajo riesgo.', 'Es la meta de riesgo moderado (DM joven, corta evolución, sin FR).', '', 'Esa es para muy alto riesgo; no tiene daño a órgano blanco ni ECV.', 'Solo se considera en eventos recurrentes en 2 años.'],
      ref: 'ESC/EAS dislipidemias 2019' }),

    q({ id: 'smdl-03', dif: 1,
      stem: '¿Cuál de estas es una estatina de alta intensidad?',
      opts: ['Simvastatina 20 mg', 'Pravastatina 40 mg', 'Rosuvastatina 20 mg', 'Atorvastatina 10 mg', 'Lovastatina 20 mg'],
      ans: 2,
      exp: 'Alta intensidad (reduce LDL ≥50%): atorvastatina 40–80 mg y rosuvastatina 20–40 mg. Las demás opciones son de intensidad baja o moderada.',
      why: ['Intensidad moderada.', 'Intensidad moderada.', '', 'Intensidad moderada.', 'Intensidad baja-moderada.'],
      ref: 'ACC/AHA 2018 colesterol' }),

    q({ id: 'smdl-04', dif: 2,
      stem: 'Hombre de 62 años con IAM previo, en atorvastatina 80 mg. Refiere dolor muscular simétrico en muslos desde hace 3 semanas. CK 3 veces el límite superior; TSH normal. ¿Qué haces?',
      opts: ['Suspender para siempre todo hipolipemiante', 'Mantener la dosis y agregar gemfibrozilo', 'Suspender temporalmente; al mejorar, reintentar con otra estatina o dosis menor y agregar ezetimiba si no llega a la meta', 'Coenzima Q10 obligatoria y seguir igual', 'Cambiar a niacina'],
      ans: 2,
      exp: 'Ante síntomas musculares con CK <10 veces el límite: suspender, esperar a que mejoren y reintroducir otra estatina o la misma a menor dosis. Si no alcanza la meta, agregar ezetimiba y después iPCSK9 o ácido bempedoico. En prevención secundaria nunca se abandona la terapia hipolipemiante.',
      why: ['En prevención secundaria es el peor desenlace: pierde la protección cardiovascular.', 'El gemfibrozilo con estatina aumenta la miopatía.', '', 'No tiene evidencia sólida y no resuelve el problema.', 'La niacina no reduce eventos y tiene muchos efectos adversos.'],
      ref: 'ESC/EAS 2019 · EAS consensus SAMS 2015' }),

    q({ id: 'smdl-05', dif: 1,
      stem: 'Paciente en simvastatina 40 mg. Otro médico le agregó un fibrato por TG de 640 mg/dL. Llega con mialgias intensas, orina oscura y CK de 28 000 U/L. ¿Qué fibrato es el más probable responsable de la interacción?',
      opts: ['Fenofibrato', 'Gemfibrozilo', 'Bezafibrato a dosis baja', 'Ninguno; los fibratos no interactúan', 'Ácido fenofíbrico'],
      ans: 1,
      exp: 'El gemfibrozilo inhibe la glucuronidación de las estatinas y aumenta mucho sus niveles: alto riesgo de miopatía y rabdomiólisis. Si se necesita un fibrato con estatina, se usa fenofibrato.',
      why: ['Es el fibrato que se prefiere junto a estatinas por su menor interacción.', '', 'No es el clásico de esta interacción.', 'Sí interactúan, sobre todo el gemfibrozilo.', 'Es la forma activa del fenofibrato; tiene menor interacción.'],
      ref: 'ESC/EAS 2019' }),

    q({ id: 'smdl-06', dif: 2,
      stem: 'Hombre de 46 años con DM2 descontrolada (A1c 11%) que bebe 6 cervezas diarias. TG 1 480 mg/dL, sin dolor abdominal. ¿Cuál es el objetivo prioritario del tratamiento?',
      opts: ['Bajar el LDL con estatina de alta intensidad', 'Prevenir pancreatitis: dieta muy baja en grasa, suspender el alcohol, controlar la glucosa e iniciar fenofibrato', 'Iniciar icosapento de etilo como único tratamiento', 'Repetir los lípidos en 6 meses', 'Iniciar niacina'],
      ans: 1,
      exp: 'Con TG muy altos el riesgo inmediato es la pancreatitis. Se corrigen las causas secundarias (alcohol, DM descontrolada), dieta muy baja en grasa y fenofibrato. Después se reevalúa el LDL y el riesgo cardiovascular.',
      why: ['Importa después, pero lo urgente con TG >1 000 es la pancreatitis.', '', 'Está indicado con TG 135–499 y alto riesgo; no es el tratamiento de una hipertrigliceridemia grave.', 'Esperar es peligroso con este nivel.', 'No reduce eventos y aumenta la glucosa.'],
      ref: 'ESC/EAS 2019 · Endocrine Society hipertrigliceridemia' }),

    q({ id: 'smdl-07', dif: 1,
      stem: 'Mujer de 38 años con pápulas amarillas de base eritematosa en glúteos y codos que aparecieron en semanas. En el fondo de ojo los vasos retinianos se ven blanquecinos. ¿Qué espera encontrar en el laboratorio?',
      opts: ['LDL >300 mg/dL con TG normales', 'Triglicéridos muy elevados (quilomicronemia)', 'HDL muy bajo aislado', 'Lp(a) elevada', 'Hipoglucemia'],
      ans: 1,
      exp: 'Xantomas eruptivos + lipemia retinalis = hipertrigliceridemia grave por quilomicronemia (habitualmente TG >1 000 mg/dL). Busca DM descontrolada, alcohol y fármacos, y previene la pancreatitis.',
      why: ['El LDL muy alto da xantomas tendinosos y arco corneal, no eruptivos.', '', 'No produce xantomas eruptivos.', 'No da hallazgos cutáneos característicos.', 'No tiene relación.'],
      ref: 'Endocrine Society hipertrigliceridemia 2012' }),

    q({ id: 'smdl-08', dif: 2,
      stem: 'Hombre de 29 años con LDL 268 mg/dL, xantomas en tendones de Aquiles y padre con IAM a los 44 años. ¿Diagnóstico y manejo?',
      opts: ['Dislipidemia secundaria a dieta; solo cambios de estilo de vida', 'Hipercolesterolemia familiar: estatina de alta intensidad (probablemente con ezetimiba) y tamizaje en cascada de la familia', 'Hipertrigliceridemia familiar; fenofibrato', 'Disbetalipoproteinemia; niacina', 'Esperar a los 40 años para iniciar estatina'],
      ans: 1,
      exp: 'LDL ≥190 + xantomas tendinosos + ECV prematura en un familiar de primer grado = hipercolesterolemia familiar (autosómica dominante). Es alto riesgo desde joven: estatina de alta intensidad, ezetimiba y a menudo iPCSK9 para llegar a la meta. Hay que estudiar a los familiares.',
      why: ['La dieta no explica un LDL de 268 con xantomas tendinosos.', '', 'El problema es el LDL, no los TG.', 'La disbetalipoproteinemia da xantomas palmares estriados y eleva CT y TG por igual.', 'Retrasar el tratamiento aumenta el daño acumulado.'],
      ref: 'ESC/EAS 2019' }),

    q({ id: 'smdl-09', dif: 1,
      stem: 'Mujer de 52 años con hipercolesterolemia nueva (LDL 210 mg/dL), fatiga, aumento de peso, estreñimiento y piel seca. Antes de iniciar estatina, ¿qué estudio pides?',
      opts: ['TSH', 'Cortisol sérico', 'Lipasa', 'Prueba de embarazo como único estudio', 'Electroforesis de proteínas'],
      ans: 0,
      exp: 'El hipotiroidismo es causa secundaria de LDL alto y además aumenta el riesgo de miopatía por estatinas. Corregirlo con levotiroxina puede normalizar o bajar mucho el LDL.',
      why: ['', 'El Cushing no es la causa sugerida por este cuadro.', 'No tiene relación con este cuadro.', 'No explica los síntomas.', 'Se usa en sospecha de mieloma o nefrótico, no aquí.'],
      ref: 'ESC/EAS 2019' }),

    q({ id: 'smdl-10', dif: 1,
      stem: '¿Cuál es el mecanismo de acción de la ezetimiba?',
      opts: ['Inhibe la HMG-CoA reductasa', 'Bloquea la proteína NPC1L1 y reduce la absorción intestinal de colesterol', 'Inhibe la PCSK9', 'Activa PPAR-α', 'Secuestra ácidos biliares en el intestino'],
      ans: 1,
      exp: 'La ezetimiba bloquea NPC1L1 en el borde en cepillo del enterocito. Baja el LDL ~20–25% y redujo eventos sumada a estatina (IMPROVE-IT).',
      why: ['Es el mecanismo de las estatinas.', '', 'Es el mecanismo de evolocumab y alirocumab.', 'Es el mecanismo de los fibratos.', 'Es el mecanismo de la colestiramina y similares.'],
      ref: 'Cannon CP, et al. IMPROVE-IT, NEJM 2015' }),

    q({ id: 'smdl-11', dif: 2,
      stem: 'Hombre de 64 años con IAM hace 1 año y EVC hace 6 meses. Toma rosuvastatina 40 mg y ezetimiba 10 mg con buen apego. LDL 78 mg/dL. ¿Siguiente paso?',
      opts: ['Nada: ya bajó bastante', 'Agregar un iPCSK9', 'Cambiar a simvastatina 80 mg', 'Agregar gemfibrozilo', 'Suspender la ezetimiba'],
      ans: 1,
      exp: 'Muy alto riesgo (dos eventos) fuera de meta pese a estatina máxima + ezetimiba → iPCSK9. Con eventos recurrentes en 2 años incluso se puede buscar LDL <40 mg/dL.',
      why: ['Su meta es <55 (o <40 por eventos recurrentes).', '', 'Es menos potente que la rosuvastatina 40 mg.', 'No baja el LDL de forma relevante y aumenta la miopatía.', 'Perdería reducción de LDL.'],
      ref: 'ESC/EAS 2019' }),

    q({ id: 'smdl-12', dif: 3,
      stem: 'Hombre de 66 años con cardiopatía isquémica, en atorvastatina 80 mg. LDL 48 mg/dL, TG 228 mg/dL. ¿Qué fármaco demostró reducir eventos en este escenario?',
      opts: ['Fenofibrato', 'Niacina de liberación prolongada', 'Icosapento de etilo', 'Omega-3 mezclados en dosis bajas', 'Ninguno'],
      ans: 2,
      exp: 'REDUCE-IT: en pacientes con ECV o DM con factores de riesgo y TG 135–499 mg/dL pese a estatina, el icosapento de etilo (EPA purificado 2 g c/12 h) redujo eventos cardiovasculares. Las mezclas de omega-3 y los fibratos no lo demostraron sobre la estatina.',
      why: ['Sobre estatina no redujo eventos de forma consistente.', 'No reduce eventos y tiene muchos efectos adversos.', '', 'Las mezclas EPA+DHA a dosis bajas no mostraron beneficio.', 'Sí existe una opción con evidencia.'],
      ref: 'Bhatt DL, et al. REDUCE-IT, NEJM 2019' }),

    q({ id: 'smdl-13', dif: 1,
      stem: 'Colesterol total 220 mg/dL, HDL 40 mg/dL, triglicéridos 200 mg/dL. ¿LDL calculado por Friedewald?',
      opts: ['100 mg/dL', '120 mg/dL', '140 mg/dL', '160 mg/dL', 'No se puede calcular'],
      ans: 2,
      exp: 'LDL = CT − HDL − TG/5 = 220 − 40 − 40 = 140 mg/dL. Solo es válida con TG <400 mg/dL.',
      why: ['Revisa la resta.', 'Restaste TG/2.5 en lugar de TG/5.', '', 'Olvidaste restar los TG/5.', 'Sí se puede: los TG son <400.'],
      ref: 'Friedewald WT, et al. Clin Chem 1972' }),

    q({ id: 'smdl-14', dif: 2,
      stem: 'Mujer de 31 años con hipercolesterolemia familiar en rosuvastatina 20 mg y ezetimiba. Planea embarazarse en los próximos meses. ¿Qué le indicas?',
      opts: ['Continuar la estatina durante todo el embarazo', 'Suspender estatina y ezetimiba antes de buscar el embarazo; si necesita tratamiento, secuestradores de ácidos biliares (o aféresis de LDL en casos graves)', 'Cambiar a evolocumab durante el embarazo', 'Cambiar a fenofibrato', 'Duplicar la dosis de estatina antes del embarazo'],
      ans: 1,
      exp: 'Las estatinas están contraindicadas en el embarazo y la lactancia. Se suspenden antes de buscar el embarazo. Si hace falta, se usan secuestradores de ácidos biliares, que no se absorben, y en hipercolesterolemia homocigota o muy grave, aféresis de LDL.',
      why: ['Están contraindicadas en el embarazo.', '', 'No hay datos suficientes de seguridad en el embarazo.', 'No es el tratamiento del LDL y tampoco se recomienda en el embarazo.', 'No tiene sentido y está contraindicada.'],
      ref: 'ESC/EAS 2019' }),

    q({ id: 'smdl-15', dif: 1,
      stem: 'Hombre de 45 años con síndrome metabólico (cintura 108 cm, TG 190, HDL 36, glucosa 108). ¿Qué intervención mejora más componentes a la vez?',
      opts: ['Metformina a todos', 'Estatina a todos', 'Bajar 7–10% del peso con dieta y ≥150 min/semana de ejercicio', 'Fenofibrato', 'Orlistat como primera línea'],
      ans: 2,
      exp: 'La pérdida de peso con dieta y ejercicio mejora la cintura, los TG, el HDL, la PA y la glucosa al mismo tiempo, y reduce la progresión a DM2 (DPP). Los fármacos se agregan según cada componente y el riesgo cardiovascular.',
      why: ['Se considera en prediabetes con IMC ≥35, <60 años o DMG previa; no es para todos.', 'Se decide por el riesgo cardiovascular y el LDL, no por el síndrome en sí.', '', 'Solo actúa sobre TG.', 'Tiene un efecto modesto y no es primera línea.'],
      ref: 'ADA 2026 secc. 3 · AHA 2009' })
  ],

  cases: [
    { id: 'g-smdl', topic: 'smdl', subj: 'endo',
      title: 'Los triglicéridos de don Héctor', place: 'Consulta externa',
      patient: { name: 'Héctor', age: 48, sex: 'H', skin: '#C98B62', hair: '#3A2A1E', gown: '#9AD18B' },
      intro: 'Taxista con DM2 desde hace 11 años, HTA y obesidad. Bebe cerveza a diario. Viene a revisar unos análisis que le pidieron en el trabajo.',
      extra: { label: 'TG', unit: 'mg/dL' },
      start: { FC: 84, PAS: 142, PAD: 88, SpO2: 97, FR: 16, X: 1620 },
      nodes: [
        { tag: 'Consulta 1', ecg: 'normal',
          text: 'Asintomático. TG 1 620 mg/dL, A1c 10.4%. El LDL no se pudo calcular.',
          q: '¿Qué es lo prioritario?',
          A: { t: 'Prevenir pancreatitis: cero alcohol, dieta muy baja en grasa, controlar la glucosa e iniciar fenofibrato', ok: true, res: 'Le explicas el riesgo de pancreatitis. Ajustas su tratamiento de la diabetes e inicias fenofibrato.', vit: { X: 640 } },
          B: { t: 'Iniciar estatina sola y revisar en 6 meses', ok: false, res: 'La estatina baja poco los TG. A los 2 meses llega a urgencias con pancreatitis por hipertrigliceridemia.', vit: { X: 1900 } },
          why: 'Con TG muy altos (>880 ESC, ≥500 ACC/AHA) el riesgo inmediato es la pancreatitis: corregir causas secundarias y fenofibrato.' },
        { tag: 'Consulta 2', ecg: 'normal', vit: { X: 640 },
          text: 'Trae una receta de otro médico: simvastatina 40 mg más gemfibrozilo 600 mg c/12 h.',
          q: '¿Qué ajustas?',
          A: { t: 'Dejar ambos: así baja todo más rápido', ok: false, res: 'A las 3 semanas tiene mialgias intensas y orina oscura: CK 18 000.' },
          B: { t: 'Suspender el gemfibrozilo y usar fenofibrato si se necesita fibrato con la estatina', ok: true, res: 'Reorganizas su receta para evitar la interacción.' },
          why: 'El gemfibrozilo aumenta mucho los niveles de estatina: riesgo de rabdomiólisis. Con estatina, el fibrato de elección es el fenofibrato.' },
        { tag: '3 meses después', ecg: 'normal', vit: { PAS: 134, PAD: 82, X: 260 },
          text: 'Dejó la cerveza. TG 260, LDL 146 mg/dL, A1c 7.6%. Sin ECV ni daño a órgano blanco.',
          q: 'Con DM2 de 11 años e HTA, ¿qué meta de LDL tiene y qué indicas?',
          A: { t: 'Alto riesgo: LDL <70 y ↓ ≥50%; atorvastatina 40–80 mg', ok: true, res: 'Inicias atorvastatina 40 mg y citas en 6 semanas con perfil de lípidos.' },
          B: { t: 'Riesgo moderado: meta <100; solo dieta', ok: false, res: 'Subestimaste su riesgo: la DM de más de 10 años lo pone en alto riesgo.' },
          why: 'ESC/EAS: DM sin daño a órgano blanco con ≥10 años de evolución u otro FR = alto riesgo → LDL <70 mg/dL y reducción ≥50%.' },
        { tag: '6 semanas después', ecg: 'normal', vit: { X: 190 },
          text: 'En atorvastatina 80 mg. LDL 92 mg/dL. Sin mialgias.',
          q: '¿Siguiente paso?',
          A: { t: 'Agregar ezetimiba', ok: true, res: 'Con la ezetimiba su LDL baja a 64 mg/dL: en meta.' },
          B: { t: 'Empezar directamente un iPCSK9 y suspender la estatina', ok: false, res: 'Te saltaste un escalón barato y eficaz, y quitaste la estatina que sí tolera.' },
          why: 'Escalera del LDL: estatina de alta intensidad a dosis máxima → ezetimiba → iPCSK9.' }
      ] }
  ]
};
