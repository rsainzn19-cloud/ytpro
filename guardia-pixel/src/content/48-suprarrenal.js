// Tema 39 · Insuficiencia suprarrenal, crisis adrenal e hiponatremia (Endocrinología, semana 10)
const T = { topic: 'suprarrenal', subj: 'endo' };
const q = (o) => ({ ...T, ...o });
const ENDO = { short: 'De tu Guía Endocrino', vs: 'tu guía', name: 'Guía Endocrino · Ximena Cors Cepeda (EMIS 5)', url: 'https://docs.google.com/document/d/1ng1BpGOd1JywQaChMt0YWLQIRemXzi5hyUV_XVmYpsM/edit' };

export default {
  lessons: {
    suprarrenal: {
      hook: 'La crisis suprarrenal es choque que no responde a líquidos ni vasopresores: se trata con hidrocortisona YA, sin esperar el resultado. Y la hiponatremia se aborda con tres preguntas: osmolaridad, volemia y sodio urinario.',
      nn: [], yt: 'adrenal insufficiency Addison adrenal crisis hyponatremia approach',
      video: [
        { ch: 'Insuficiencia suprarrenal', sc: [
          { v: { k: 'title', t: 'Suprarrenal e hiponatremia', s: 'Semana 10 · Endocrinología' },
            say: 'Semana diez: cuando falta el cortisol. La insuficiencia suprarrenal puede ser primaria, de la glándula, o secundaria, porque falta la ACTH, casi siempre por suspender esteroides de golpe.' },
          { v: { k: 'vs', a: 'Primaria (Addison)', b: 'Secundaria', rows: [['ACTH', 'Alta', 'Baja'], ['Piel', 'Hiperpigmentada', 'Normal o pálida'], ['Aldosterona', 'Baja: K alto', 'Normal: K normal'], ['Causa típica', 'Autoinmune, TB', 'Esteroides suspendidos']] },
            say: 'En la primaria, Addison, falta todo: cortisol y aldosterona. La ACTH sube y oscurece la piel, y la falta de aldosterona da potasio alto. En la secundaria falta la ACTH: no hay hiperpigmentación y la aldosterona funciona, así que el potasio es normal.' },
          { v: { k: 'case', t: 'Choque que no cede', p: { name: 'Ramiro', age: 52, sex: 'H', skin: '#C98B62', hair: '#3A2A1E', gown: '#5BA7E0' }, text: 'Toma prednisona por asma y la suspendió hace 1 semana. Neumonía, PA 70/40 pese a 3 L y norepinefrina. Na 128, glucosa 60.', vit: { PA: '70/40', Na: '128' } },
            say: 'Ramiro tomaba prednisona por años y la suspendió hace una semana. Ahora tiene neumonía y una presión de setenta sobre cuarenta que no sube con tres litros ni con norepinefrina. Sodio bajo y glucosa baja.' },
          { v: { k: 'big', h: 'Crisis suprarrenal', t: 'Hidrocortisona 100 mg IV', u: 'ya, sin esperar el cortisol' },
            say: 'Es una crisis suprarrenal. Se toma una muestra de cortisol y ACTH si se puede, pero no se espera: hidrocortisona cien miligramos intravenosos de inmediato, solución salina con glucosa, y buscar el desencadenante.' }
        ] },
        { ch: 'Hiponatremia en tres preguntas', sc: [
          { v: { k: 'flow', t: 'Abordaje', steps: ['Osmolaridad plasmática', 'Volemia', 'Na y osm urinarios'] },
            say: 'La hiponatremia se aborda con tres preguntas. Primero, la osmolaridad: si es normal o alta, no es una hiponatremia verdadera. Segundo, la volemia del paciente. Tercero, el sodio y la osmolaridad de la orina.' },
          { v: { k: 'list', t: 'Hipotónica por volemia', items: ['Hipovolémica: pérdidas, diuréticos', 'Euvolémica: SIADH, hipotiroidismo, déficit de cortisol', 'Hipervolémica: IC, cirrosis, nefrótico, ERC'] },
            say: 'Hipovolémica: diarrea, vómito o diuréticos. Euvolémica: SIADH, hipotiroidismo e insuficiencia suprarrenal. Hipervolémica, con edema: insuficiencia cardiaca, cirrosis o síndrome nefrótico.' },
          { v: { k: 'mnemo', t: 'Sal, esteroide y azúcar', d: 'Crisis suprarrenal: salina 0.9 %, hidrocortisona 100 mg IV y glucosa.' },
            say: 'Para la crisis recuerda: sal, esteroide y azúcar. Y para la hiponatremia, nunca subir más de ocho a diez puntos en un día.' }
        ] }
      ],
      sections: [
        { h: 'Insuficiencia suprarrenal: tipos y causas', html: `
<ul>
<li><b>Primaria (Addison)</b>: destrucción de la corteza → falta <b>cortisol y aldosterona</b>. Causas: <b>autoinmune</b> (la #1; anti-21-hidroxilasa; asociada a tiroiditis, DM1, vitíligo), <b>TB</b> (la #1 en países en desarrollo), hemorragia bilateral (anticoagulación, <b>Waterhouse-Friderichsen</b> por meningococo), VIH/CMV, metástasis, hiperplasia suprarrenal congénita.</li>
<li><b>Secundaria</b>: falta ACTH → solo falta cortisol. Causa #1 de insuficiencia suprarrenal en general: <b>suspensión brusca de glucocorticoides</b> exógenos; también tumores hipofisarios, Sheehan, opioides.</li>
</ul>
<div class="tablewrap"><table class="mini">
<tr><th></th><th>Primaria</th><th>Secundaria</th></tr>
<tr><td>ACTH</td><td>Alta</td><td>Baja o normal</td></tr>
<tr><td>Hiperpigmentación</td><td><b>Sí</b> (piel, mucosas, pliegues)</td><td>No</td></tr>
<tr><td>K</td><td><b>Alto</b> (falta aldosterona)</td><td>Normal</td></tr>
<tr><td>Na</td><td>Bajo</td><td>Bajo (ADH por falta de cortisol)</td></tr>
<tr><td>Antojo de sal, hipotensión ortostática</td><td>Sí</td><td>Menos</td></tr>
</table></div>` },
        { h: 'Diagnóstico', html: `
<ul>
<li>Clínica: fatiga, pérdida de peso, anorexia, náusea, dolor abdominal, hipotensión ortostática; laboratorio: hiponatremia, hiperkalemia (primaria), <b>hipoglucemia</b>, eosinofilia, hipercalcemia leve.</li>
<li><b>Cortisol de las 8 a. m.</b>: &lt;3–5 µg/dL confirma; &gt;15–18 la descarta. Intermedio → <b>prueba de estimulación con cosintropina</b> (250 µg): cortisol &lt;18 µg/dL a los 30–60 min = insuficiencia.</li>
<li><b>ACTH</b> separa primaria (alta) de secundaria (baja). Primaria: anticuerpos anti-21-hidroxilasa; si son negativos, TC de suprarrenales (TB, hemorragia, metástasis).</li>
</ul>` },
        { h: 'Tratamiento y crisis', html: `
<ul>
<li>Crónico: <b>hidrocortisona</b> 15–25 mg/día en 2–3 tomas (más en la mañana); en primaria agregar <b>fludrocortisona</b> (ajustada por PA, K y renina).</li>
<li><b>Reglas de enfermedad</b>: duplicar o triplicar la dosis en fiebre o enfermedad; inyectable en vómito; dosis de estrés en cirugía. Pulsera de identificación.</li>
<li><b>Crisis suprarrenal</b> (choque refractario, dolor abdominal, vómito, fiebre, confusión, hiponatremia, hipoglucemia): <b>hidrocortisona 100 mg IV en bolo</b> y luego 200 mg/día (infusión o 50 mg c/6 h), <b>salina 0.9 % 1 L en la 1ª hora</b>, glucosa, tratar el desencadenante. <b>No esperar</b> los resultados (toma muestra antes si es posible). Con hidrocortisona ≥50 mg/día no se necesita fludrocortisona.</li>
<li>Si se va a hacer la prueba de cosintropina después, se puede usar <b>dexametasona</b> (no interfiere con el cortisol medido).</li>
</ul>` },
        { h: 'Hiponatremia: abordaje', html: `
<ol>
<li><b>Osmolaridad plasmática</b>: normal (seudohiponatremia por lípidos o proteínas) o alta (hiperglucemia, manitol) → no es hipotónica. Hipotónica (&lt;275) → sigue.</li>
<li><b>Osmolaridad urinaria</b>: &lt;100 → polidipsia primaria, potomanía de cerveza, dieta de “té y pan”. &gt;100 → la ADH está actuando.</li>
<li><b>Volemia y Na urinario</b>:</li>
</ol>
<div class="tablewrap"><table class="mini">
<tr><th>Volemia</th><th>Na urinario &lt;30</th><th>Na urinario &gt;30</th></tr>
<tr><td>Hipovolémica</td><td>Pérdidas extrarrenales (diarrea, vómito, sudor)</td><td>Diuréticos (<b>tiazidas</b>), Addison, pérdida cerebral de sal</td></tr>
<tr><td>Euvolémica</td><td>—</td><td><b>SIADH</b>, hipotiroidismo, déficit de cortisol</td></tr>
<tr><td>Hipervolémica</td><td><b>IC, cirrosis, nefrótico</b></td><td>ERC/LRA</td></tr>
</table></div>
<ul>
<li>Tratamiento: <b>grave sintomática</b> (convulsiones, coma) → <b>salina 3 % 100–150 mL en bolo</b>, repetir hasta +4–6 mEq/L. Hipovolémica → salina 0.9 %. Euvolémica → restricción hídrica, causa. Hipervolémica → restricción de agua y sal, diurético de asa.</li>
<li>Límite: <b>≤8–10 mEq/L en 24 h</b> (desmielinización osmótica). Si se pasa, re-bajar con agua libre o desmopresina.</li>
</ul>` },
        { h: 'Cómo lo preguntan en el examen', html: `
<ul>
<li>Hiperpigmentación, hipotensión, Na bajo y K alto → <b>Addison</b> → cortisol + ACTH (alta) → hidrocortisona + fludrocortisona.</li>
<li>Choque refractario en paciente que dejó la prednisona → <b>hidrocortisona 100 mg IV</b>.</li>
<li>Meningococcemia con choque y púrpura → hemorragia suprarrenal (Waterhouse-Friderichsen).</li>
<li>Hiponatremia con orina diluida (&lt;100) en bebedor de cerveza → potomanía.</li>
<li>Hiponatremia con edema y Na urinario bajo → IC o cirrosis → restricción + diurético.</li>
</ul>` }
      ],
      mnemo: { t: 'Crisis: sal, esteroide y azúcar', d: 'Salina 0.9 %, hidrocortisona 100 mg IV en bolo y glucosa; no esperes el resultado del cortisol.' },
      pearl: 'La causa #1 de insuficiencia suprarrenal es suspender de golpe los glucocorticoides: es secundaria, sin hiperpigmentación ni hiperkalemia.',
      trap: 'El Addison da potasio alto porque falta la aldosterona; la secundaria no, porque la aldosterona depende de la renina, no de la ACTH.',
      guide: [
        'Endocrine Society 2016: cortisol <18 µg/dL tras cosintropina confirma; con ensayos nuevos (monoclonales) el corte es ~14–15 µg/dL.',
        'Tu guía usa “cortisol <10 es diagnóstico” en la crisis; en la práctica se trata sin esperar el resultado.'
      ],
      refs: [
        'Bornstein SR, et al. Diagnosis and treatment of primary adrenal insufficiency: Endocrine Society Guideline. J Clin Endocrinol Metab 2016.',
        'Rushworth RL, et al. Adrenal crisis. N Engl J Med 2019.',
        'Spasovski G, et al. Clinical practice guideline on diagnosis and treatment of hyponatraemia. Eur J Endocrinol 2014.',
        'Adrogué HJ, Tucker BM, Madias NE. Diagnosis and management of hyponatremia. JAMA 2022.'
      ]
    }
  },

  guias: {
    suprarrenal: { src: ENDO,
      puntos: [
        'Primaria (Addison: autoinmune, TB, CMV, trauma), secundaria (falla de ACTH: cese de glucocorticoides), terciaria (CRH).',
        'Primaria: hiperpigmentación (ACTH alta) e hiperkalemia con hiponatremia e hipovolemia (falta aldosterona).',
        'Diagnóstico: cortisol bajo, prueba de cosintropina (no sube &gt;18.5 µg/dL).',
        'Crisis: hipotensión refractaria a líquidos, choque, dolor abdominal; hidrocortisona ASAP &gt;40 mg en bolo e infusión, 1 L de salina, dextrosa: “salt, steroids, sugar”.',
        'Hiponatremia: leve 130–134, moderada 125–129, grave &lt;125; crónica: corregir &lt;10 mEq/L en 24 h.'
      ],
      ojo: ['La dosis estándar en la crisis es <b>hidrocortisona 100 mg IV</b> en bolo y luego 200 mg/día (tu guía dice “&gt;40 mg”).'],
      cards: [['Waterhouse-Friderichsen', 'Hemorragia suprarrenal bilateral por meningococcemia']] }
  },

  cards: [
    ['Causa #1 de insuficiencia suprarrenal', 'Suspensión brusca de glucocorticoides (secundaria)'],
    ['Causa #1 de Addison (países desarrollados)', 'Autoinmune (anti-21-hidroxilasa)'],
    ['Addison vs secundaria: piel', 'Hiperpigmentación solo en la primaria (ACTH alta)'],
    ['Addison vs secundaria: potasio', 'Hiperkalemia solo en la primaria (falta aldosterona)'],
    ['Prueba confirmatoria', 'Cosintropina: cortisol <18 µg/dL a los 30–60 min'],
    ['Cortisol 8 a. m. que confirma', '<3–5 µg/dL'],
    ['Crisis suprarrenal: tratamiento', 'Hidrocortisona 100 mg IV + salina 0.9 % + glucosa, sin esperar resultados'],
    ['Tratamiento crónico de Addison', 'Hidrocortisona + fludrocortisona'],
    ['Reglas de enfermedad', 'Duplicar/triplicar hidrocortisona con fiebre; inyectable si vomita'],
    ['Waterhouse-Friderichsen', 'Hemorragia suprarrenal por meningococcemia'],
    ['Hiponatremia: primera pregunta', 'Osmolaridad plasmática (¿es hipotónica?)'],
    ['Osm urinaria <100', 'Polidipsia primaria, potomanía, té y pan'],
    ['Hiponatremia hipervolémica con Na urinario bajo', 'IC, cirrosis, nefrótico'],
    ['Diurético que más causa hiponatremia', 'Tiazidas'],
    ['Corrección máxima de Na', '≤8–10 mEq/L en 24 h']
  ],

  questions: [
    q({ id: 'suprarrenal-01', dif: 1, stem: 'Mujer de 38 años con fatiga, pérdida de peso, antojo de sal, hipotensión ortostática y piel oscura en pliegues y encías. Na 129, K 5.9. ¿Diagnóstico?', opts: ['Insuficiencia suprarrenal secundaria', 'Enfermedad de Addison', 'Hipotiroidismo', 'SIADH', 'Hiperaldosteronismo'], ans: 1,
      exp: 'Hiperpigmentación (ACTH alta) e hiperkalemia (falta aldosterona) indican insuficiencia suprarrenal primaria.', why: ['No da hiperpigmentación ni hiperkalemia.', '', 'No da hiperpigmentación.', 'No da hiperkalemia.', 'Da hipokalemia e HTA.'], ref: 'Endocrine Society 2016' }),
    q({ id: 'suprarrenal-02', dif: 2, stem: 'Paciente con artritis reumatoide que tomaba prednisona 20 mg por 2 años y la suspendió por su cuenta. Llega con choque séptico refractario a líquidos y norepinefrina. ¿Qué das?', opts: ['Más norepinefrina', 'Hidrocortisona 100 mg IV de inmediato', 'Fludrocortisona oral', 'Dexametasona 0.5 mg', 'Esperar el cortisol'], ans: 1,
      exp: 'Crisis suprarrenal por supresión del eje: hidrocortisona IV inmediata, sin esperar resultados.', why: ['No resuelve la causa.', '', 'Insuficiente y no es IV.', 'Dosis insuficiente.', 'Retrasar el tratamiento es letal.'], ref: 'Rushworth, NEJM 2019' }),
    q({ id: 'suprarrenal-03', dif: 2, stem: 'Paciente con cortisol de las 8 a. m. de 9 µg/dL y síntomas sugestivos. ¿Siguiente paso?', opts: ['Descartar insuficiencia', 'Prueba de estimulación con cosintropina', 'TC de suprarrenales', 'Iniciar fludrocortisona', 'Supresión con dexametasona'], ans: 1,
      exp: 'Cortisol intermedio: se confirma con cosintropina (cortisol <18 µg/dL a los 30–60 min = insuficiencia).', why: ['No la descarta.', '', 'Va después, si es primaria.', 'Prematuro.', 'Es para Cushing.'], ref: 'Endocrine Society 2016' }),
    q({ id: 'suprarrenal-04', dif: 2, stem: 'Paciente con insuficiencia suprarrenal confirmada y ACTH baja. ¿Qué medicamento NO necesita?', opts: ['Hidrocortisona', 'Fludrocortisona', 'Dosis de estrés en enfermedad', 'Educación', 'Pulsera de identificación'], ans: 1,
      exp: 'En la secundaria la aldosterona está preservada (depende de la renina): no requiere mineralocorticoide.', why: ['Sí la necesita.', '', 'Sí.', 'Sí.', 'Sí.'], ref: 'Endocrine Society 2016' }),
    q({ id: 'suprarrenal-05', dif: 2, stem: 'Niño con fiebre, petequias que se vuelven púrpura extensa, choque y luego se encuentran hemorragias suprarrenales bilaterales. ¿Síndrome y agente?', opts: ['Sheehan; posparto', 'Waterhouse-Friderichsen; Neisseria meningitidis', 'Addison; TB', 'Cushing; ACTH ectópica', 'Conn; adenoma'], ans: 1,
      exp: 'La meningococcemia fulminante causa hemorragia suprarrenal bilateral e insuficiencia suprarrenal aguda.', why: ['Es hipofisario.', '', 'Es crónico.', 'Es exceso de cortisol.', 'Es exceso de aldosterona.'], ref: 'Rushworth, NEJM 2019' }),
    q({ id: 'suprarrenal-06', dif: 2, stem: 'Paciente con Addison en tratamiento que presenta gastroenteritis con fiebre. ¿Qué le indicas?', opts: ['Suspender la hidrocortisona hasta que mejore', 'Duplicar o triplicar la hidrocortisona; inyectable si vomita', 'Solo líquidos orales', 'Agregar fludrocortisona doble', 'Nada'], ans: 1,
      exp: 'Reglas de enfermedad: aumentar el glucocorticoide en fiebre; si no tolera vía oral, hidrocortisona IM/IV y acudir a urgencias.', why: ['Riesgo de crisis.', '', 'Insuficiente.', 'No es lo principal.', 'Riesgo de crisis.'], ref: 'Endocrine Society 2016' }),
    q({ id: 'suprarrenal-07', dif: 1, stem: 'Paciente con hiponatremia (Na 126). ¿Cuál es el primer paso del abordaje?', opts: ['Restricción hídrica', 'Medir la osmolaridad plasmática', 'Salina al 3 %', 'TC de cráneo', 'Tolvaptán'], ans: 1,
      exp: 'Primero se confirma que es hipotónica; si la osmolaridad es normal o alta, es seudohiponatremia o hiperglucemia.', why: ['Prematuro.', '', 'Solo si hay síntomas graves.', 'No es el primer paso.', 'Prematuro.'], ref: 'Spasovski 2014' }),
    q({ id: 'suprarrenal-08', dif: 2, stem: 'Hombre con cirrosis, ascitis y edema; Na 124, Na urinario 8. ¿Tipo de hiponatremia y manejo?', opts: ['Hipovolémica: salina 0.9 % a chorro', 'Hipervolémica: restricción hídrica y de sal', 'Euvolémica: SIADH', 'Seudohiponatremia', 'Hipertónica'], ans: 1,
      exp: 'Volumen corporal aumentado con volumen arterial efectivo bajo: el riñón retiene Na y agua. Restricción hídrica y de sodio, diuréticos con cuidado.', why: ['Empeora el edema.', '', 'Tiene edema.', 'No hay datos.', 'No hay datos.'], ref: 'Spasovski 2014' }),
    q({ id: 'suprarrenal-09', dif: 2, stem: 'Hombre que bebe 5 L de cerveza al día y come muy poco. Na 118, osmolaridad urinaria 60. ¿Diagnóstico?', opts: ['SIADH', 'Potomanía de cerveza', 'Addison', 'Hipotiroidismo', 'Pérdida cerebral de sal'], ans: 1,
      exp: 'Poca ingesta de solutos con mucho líquido: el riñón no puede excretar el agua libre; la orina está máximamente diluida (<100).', why: ['La orina estaría concentrada.', '', 'La orina no estaría tan diluida.', 'La orina no estaría tan diluida.', 'La orina no estaría diluida.'], ref: 'Adrogué, JAMA 2022' }),
    q({ id: 'suprarrenal-10', dif: 2, stem: 'Mujer de 75 años que inició hidroclorotiazida hace 2 semanas y tiene Na 121 con confusión leve. ¿Causa más probable?', opts: ['SIADH idiopático', 'Hiponatremia por tiazida', 'Polidipsia', 'Hipotiroidismo', 'Insuficiencia cardiaca'], ans: 1,
      exp: 'Las tiazidas son la causa farmacológica más común de hiponatremia, sobre todo en mujeres ancianas de bajo peso.', why: ['Hay un desencadenante claro.', '', 'No hay datos.', 'No hay datos.', 'No hay datos.'], ref: 'Spasovski 2014' }),
    q({ id: 'suprarrenal-11', dif: 3, stem: 'Paciente en crisis suprarrenal a quien después se le quiere hacer prueba de cosintropina. ¿Qué esteroide puedes dar mientras tanto sin interferir con la medición del cortisol?', opts: ['Hidrocortisona', 'Dexametasona', 'Prednisona', 'Metilprednisolona', 'Fludrocortisona'], ans: 1,
      exp: 'La dexametasona no se detecta en los ensayos de cortisol; los demás sí interfieren.', why: ['Se mide como cortisol.', '', 'Cruza en el ensayo.', 'Cruza en el ensayo.', 'No trata la crisis.'], ref: 'Endocrine Society 2016' }),
    q({ id: 'suprarrenal-12', dif: 2, stem: 'Paciente con VIH y CD4 de 60 con hipotensión, hiperpigmentación e hiperkalemia. ¿Causas a considerar?', opts: ['Solo autoinmune', 'CMV, micobacterias, hongos o fármacos (ketoconazol)', 'Prolactinoma', 'Feocromocitoma', 'Hiperplasia nodular'], ans: 1,
      exp: 'En VIH avanzado la suprarrenal se afecta por infecciones oportunistas (CMV es la más común) y fármacos.', why: ['Menos probable en este contexto.', '', 'No relacionado.', 'Da HTA.', 'Da exceso hormonal.'], ref: 'Bornstein 2016' }),
    q({ id: 'suprarrenal-13', dif: 2, stem: 'Paciente con hiponatremia de 112 que convulsiona. ¿Tratamiento inmediato?', opts: ['Restricción hídrica', 'Salina al 3 % 100–150 mL en bolo, repetible', 'Salina 0.9 % lenta', 'Furosemida sola', 'Esperar a que pase la convulsión'], ans: 1,
      exp: 'Hiponatremia grave sintomática: salina hipertónica en bolo hasta subir 4–6 mEq/L, sin exceder 8–10 en 24 h.', why: ['Lenta.', '', 'Insuficiente.', 'No corrige.', 'Peligroso.'], ref: 'Spasovski 2014' }),
    q({ id: 'suprarrenal-14', dif: 1, stem: '¿Qué alteración de laboratorio esperas en la insuficiencia suprarrenal (además de la hiponatremia)?', opts: ['Hiperglucemia', 'Hipoglucemia y eosinofilia', 'Hipokalemia', 'Policitemia', 'Alcalosis metabólica'], ans: 1,
      exp: 'El cortisol es hiperglucemiante y reduce eosinófilos; su falta da hipoglucemia y eosinofilia.', why: ['Al contrario.', '', 'Es hiperkalemia en la primaria.', 'Hay anemia.', 'Hay acidosis.'], ref: 'Endocrine Society 2016' }),
    q({ id: 'suprarrenal-15', dif: 2, stem: 'Paciente con Na de 110 que se corrigió a 128 en 24 h. ¿Qué haces?', opts: ['Nada', 'Re-bajar el Na con agua libre (D5) y/o desmopresina', 'Salina 3 % adicional', 'Fludrocortisona', 'Diálisis'], ans: 1,
      exp: 'Sobrecorrección: riesgo de desmielinización osmótica; se re-baja el Na con agua libre y desmopresina.', why: ['Riesgo de desmielinización.', '', 'Empeora.', 'No indicado.', 'No indicado.'], ref: 'Adrogué, JAMA 2022' })
  ]
};
