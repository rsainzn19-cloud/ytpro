// Tema 29 · Diálisis y trasplante renal (Nefrología, semana 5)
const T = { topic: 'dialisis', subj: 'nefro' };
const q = (o) => ({ ...T, ...o });

export default {
  lessons: {
    dialisis: {
      hook: 'Cuándo dializar de urgencia (AEIOU), cómo elegir entre hemodiálisis y diálisis peritoneal, qué complicaciones esperar y por qué el trasplante es el mejor tratamiento de la ERC terminal.',
      nn: [['hemodialysis-nclex', 'Hemodialysis'], ['chronic-kidney-disease', 'Chronic Kidney Disease']],
      yt: 'dialysis kidney transplant',
      anim: 'dialisis',
      compare: ['hemo-peritoneal'],
      video: [
        { ch: 'Cuándo dializar de urgencia', sc: [
          { v: { k: 'title', t: 'Diálisis y trasplante renal', s: 'Tema 29 · Nefrología' },
            say: 'Bienvenido a la guardia. En este video vas a aprender cuándo dializar de urgencia, cómo funcionan la hemodiálisis y la diálisis peritoneal, qué complicaciones esperar y por qué el trasplante es el mejor tratamiento de la enfermedad renal terminal.' },
          { v: { k: 'case', t: 'Llega a urgencias', p: { name: 'Rosa', age: 67, sex: 'M', skin: '#C98E66', hair: '#8C8C96', gown: '#7FC8A9' }, text: 'ERC G5, aún sin diálisis. Disnea, frote pericárdico y confusión. K 7.1 mEq/L con T picudas; pH 7.08. No orina pese a furosemida.', vit: { FC: '112', PA: '168/98', SpO2: '88%' } },
            say: 'Imagina a Rosa, de sesenta y siete años, con enfermedad renal crónica avanzada que aún no se dializa. Llega con disnea, frote pericárdico y confusión. Su potasio es de siete punto uno con ondas T picudas, el pH de siete punto cero ocho, y no orina pese a la furosemida.' },
          { v: { k: 'mnemo', t: 'AEIOU', d: 'Acidosis grave · Electrólitos (K⁺ refractario) · Intoxicaciones dializables · Overload (sobrecarga de volumen) · Uremia (pericarditis, encefalopatía, sangrado)' },
            say: 'Rosa cumple casi todas las vocales de la diálisis urgente, el famoso AEIOU. A, acidosis grave que no corrige. E, electrólitos, sobre todo hiperkalemia refractaria. I, intoxicaciones dializables: metanol, etilenglicol, litio, salicilatos y metformina. O, sobrecarga de volumen que no responde a diuréticos. Y U, uremia: pericarditis, encefalopatía o sangrado.' },
          { v: { k: 'quiz', q: 'El frote de Rosa es una pericarditis urémica. ¿Qué la trata?', opts: ['AINE y colchicina', 'Iniciar hemodiálisis'], a: 1 },
            say: 'Pausa. El frote de Rosa es una pericarditis urémica. ¿Qué la trata?',
            exp: 'La diálisis. La pericarditis urémica es indicación de diálisis, de preferencia sin heparina por el riesgo de sangrado pericárdico. Si aparece en alguien que ya se dializa, su diálisis es insuficiente.' }
        ] },
        { ch: 'Hemodiálisis: cómo limpia', sc: [
          { v: { k: 'anim', id: 'dialisis', step: 0 },
            say: 'Así funciona la hemodiálisis. La sangre pasa por un filtro de un lado de una membrana semipermeable, y el líquido de diálisis corre del otro lado en sentido contrario. La urea y el potasio cruzan por difusión, de donde hay más a donde hay menos. Los eritrocitos y la albúmina no cruzan.' },
          { v: { k: 'anim', id: 'dialisis', step: 1 },
            say: 'El segundo mecanismo es la ultrafiltración. La máquina genera presión y empuja agua de la sangre hacia el dializado, y esa agua arrastra solutos con ella. Así se quita el exceso de volumen en cada sesión, hasta llegar al peso seco del paciente.' },
          { v: { k: 'list', t: 'Diálisis crónica', items: ['Se inicia por síntomas, no por una cifra de TFG', 'Referir a Nefrología con TFG <30', 'Hemodiálisis: 3 sesiones/semana de ~4 h', 'Adecuación: Kt/V ≥1.2 (meta 1.4)'] },
            say: 'En la diálisis crónica, la decisión de iniciar se toma por síntomas o complicaciones, no por una cifra de filtrado. El estudio IDEAL mostró que empezar temprano no mejora la supervivencia. Refiere a Nefrología cuando la tasa de filtración glomerular baja de treinta. La hemodiálisis típica es de tres sesiones por semana, de unas cuatro horas.' }
        ] },
        { ch: 'El acceso vascular', sc: [
          { v: { k: 'anim', id: 'dialisis', step: 2 },
            say: 'Para la hemodiálisis crónica necesitas un buen acceso. La fístula arteriovenosa une una arteria con una vena del antebrazo. La vena recibe presión arterial, se engrosa y se puede puncionar. Al tocarla sientes un frémito continuo: si desaparece, sospecha trombosis.' },
          { v: { k: 'flow', t: 'Acceso para hemodiálisis', steps: ['Fístula AV nativa: la mejor', 'Injerto AV protésico: segunda opción', 'Catéter tunelizado: último recurso'] },
            say: 'El orden de preferencia es fístula, luego injerto protésico y al final catéter. El catéter tiene más infecciones, más trombosis y mayor mortalidad. Como la fístula tarda semanas en madurar, se planea meses antes. Y protege las venas del brazo no dominante: nada de venopunciones ni catéteres centrales de inserción periférica.' }
        ] },
        { ch: 'Diálisis peritoneal', sc: [
          { v: { k: 'anim', id: 'dialisis', step: 3 },
            say: 'En la diálisis peritoneal la membrana es el propio peritoneo. Por un catéter se infunde líquido con glucosa, permanece unas horas en el abdomen y luego se drena. La urea y el potasio salen de los capilares al líquido, y la glucosa jala agua. Parte de esa glucosa se absorbe.' },
          { v: { k: 'vs', cmp: 'hemo-peritoneal', rows: [1, 3, 5] },
            say: 'Compáralas. La hemodiálisis se hace en una unidad, tres veces por semana, y es muy eficiente. La diálisis peritoneal se hace en casa todos los días, conserva mejor la función renal residual y es más estable. No conviene con un abdomen con muchas cirugías, con hernias o sin capacidad de autocuidado.' }
        ] },
        { ch: 'Complicaciones', sc: [
          { v: { k: 'list', t: 'Complicaciones de la hemodiálisis', items: ['Hipotensión intradiálisis: la más común', 'Síndrome de desequilibrio: edema cerebral', 'Bacteriemia por catéter: S. aureus', 'Robo de la fístula: mano fría y dolorosa', 'Amiloide β2-microglobulina: túnel del carpo'] },
            say: 'En la hemodiálisis, la complicación más común es la hipotensión durante la sesión. En las primeras sesiones con urea muy alta puede aparecer el síndrome de desequilibrio: la urea baja rápido en la sangre pero no en el cerebro, entra agua a las neuronas y hay cefalea, náusea o convulsiones. Se previene con sesiones cortas y suaves.' },
          { v: { k: 'list', t: 'Peritonitis en diálisis peritoneal', items: ['Dolor abdominal y líquido turbio', '>100 leucocitos/µL con >50% neutrófilos', 'Cultivo + antibiótico intraperitoneal', 'Otras: hiperglucemia, peso ↑, hernias'] },
            say: 'En la diálisis peritoneal, la complicación que debes reconocer es la peritonitis: dolor abdominal y líquido turbio. Se confirma con más de cien leucocitos por microlitro y más de la mitad neutrófilos. Toma cultivo e inicia antibiótico por vía intraperitoneal, que cubra grampositivos y gramnegativos.' },
          { v: { k: 'quiz', q: 'Paciente en hemodiálisis por catéter con fiebre y escalofríos al conectarse. ¿Qué haces primero?', opts: ['Hemocultivos y vancomicina IV', 'Antipirético y seguir la sesión'], a: 0 },
            say: 'Pausa. Un paciente que se dializa por catéter tiene fiebre y escalofríos al conectarse. ¿Qué haces primero?',
            exp: 'Hemocultivos del catéter y periféricos, y vancomicina intravenosa, más cobertura para gramnegativos si está grave. El germen más común es Staphylococcus aureus. Si hay sepsis grave o infección del túnel, se retira el catéter.' }
        ] },
        { ch: 'Trasplante renal', sc: [
          { v: { k: 'anim', id: 'dialisis', step: 4 },
            say: 'El trasplante es el mejor tratamiento de la enfermedad renal terminal: el paciente vive más y mejor que con cualquier diálisis. Lo ideal es anticipado, antes de iniciar diálisis, y de donador vivo. El injerto se coloca en la fosa ilíaca y los riñones nativos se dejan. Para evitar el rechazo, se usa inmunosupresión.' },
          { v: { k: 'list', t: 'Tipos de rechazo', items: ['Hiperagudo: minutos (anticuerpos preformados)', 'Agudo: semanas a meses → biopsia', 'Crónico: años, fibrosis progresiva', 'Prevención: ABO, HLA y prueba cruzada'] },
            say: 'Hay tres tipos de rechazo. El hiperagudo ocurre en minutos, en el quirófano, por anticuerpos preformados: se previene con compatibilidad ABO y prueba cruzada negativa. El agudo aparece en semanas o meses, con creatinina en ascenso, y se confirma con biopsia. El crónico es lento, de años, con fibrosis.' },
          { v: { k: 'list', t: 'Inmunosupresión y sus riesgos', items: ['Tacrolimus + micofenolato + prednisona', 'Tacrolimus: Cr ↑, K ↑, Mg ↓, temblor, DM', 'Infecciones: CMV, virus BK, Pneumocystis', 'Cáncer: piel (el más común), linfoma por VEB'] },
            say: 'El esquema de mantenimiento es tacrolimus, micofenolato y prednisona. El tacrolimus contrae la arteriola aferente y puede subir la creatinina; también da hiperkalemia, hipomagnesemia, temblor y diabetes. Vigila infecciones por citomegalovirus, virus BK y Pneumocystis, que se previene con trimetoprim con sulfametoxazol. El cáncer más común es el de piel.' },
          { v: { k: 'tip', kind: 'trap', t: 'Trasplantado con tacrolimus que inicia claritromicina, fluconazol o diltiazem: se inhibe el CYP3A4, el tacrolimus sube y aparece LRA con temblor e hiperkalemia.' },
            say: 'Ojo con esta trampa. Un trasplantado que toma tacrolimus inicia claritromicina, fluconazol o diltiazem. Esos fármacos inhiben el citocromo CYP3A4, el nivel de tacrolimus sube y aparece lesión renal aguda con temblor e hiperkalemia. Mide niveles y ajusta la dosis.' },
          { v: { k: 'tip', kind: 'pearl', t: 'Diálisis urgente = AEIOU refractario. Pericarditis urémica = diálisis, no AINE. El mejor tratamiento de la ERC terminal es el trasplante.' },
            say: 'La perla para el examen: la diálisis urgente se indica por AEIOU que no responde al tratamiento médico. La pericarditis urémica se trata con diálisis, no con antiinflamatorios. Y el mejor tratamiento de la enfermedad renal terminal es el trasplante. Ahora ve a las preguntas del tema para fijar lo que viste.' }
        ] }
      ],
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
<li><b>Hemodiálisis</b>: difusión + ultrafiltración; 3 sesiones por semana de ~4 h. Acceso: fístula (mejor) &gt; injerto &gt; catéter (más infecciones). Adecuación: spKt/V mínimo 1.2 por sesión, con meta de 1.4 (KDOQI 2015).</li>
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
</ul>` },
        { h: 'Fisiopatología en 1 minuto', html: `
<ul>
<li><b>Difusión</b>: los solutos pequeños (urea, creatinina, potasio) pasan de la sangre al dializado a favor de su gradiente; el bicarbonato hace el camino inverso y corrige la acidosis. El flujo a <b>contracorriente</b> mantiene el gradiente a lo largo de todo el filtro.</li>
<li><b>Ultrafiltración</b>: la presión transmembrana saca agua, y al pasar arrastra solutos (<b>convección</b>, la base de la hemodiafiltración). Así se lleva al paciente a su <b>peso seco</b>.</li>
<li><b>Lo que no se quita bien</b>: moléculas medianas como la β2-microglobulina (amiloidosis tras años de diálisis) y fármacos muy unidos a proteínas o con gran volumen de distribución. Por eso el litio, el metanol y los salicilatos sí se dializan, y la digoxina no.</li>
<li><b>Diálisis peritoneal</b>: el peritoneo es la membrana y la glucosa del dializado es el agente osmótico que saca agua; parte se absorbe (hiperglucemia, aumento de peso, dislipidemia). La icodextrina se usa en permanencias largas.</li>
<li><b>Síndrome de desequilibrio</b>: la urea baja rápido en el plasma y lento en el cerebro → gradiente osmótico → el agua entra a las neuronas → edema cerebral.</li>
</ul>` },
        { h: 'Fármacos clave del trasplante', html: `
<div class="tablewrap"><table class="mini">
<tr><th>Fármaco</th><th>Mecanismo</th><th>Efecto adverso clave</th><th>Ojo con</th></tr>
<tr><td><b>Tacrolimus</b> (y ciclosporina)</td><td>Inhibe la calcineurina → ↓ IL-2 y activación del linfocito T</td><td>Nefrotoxicidad (vasoconstricción aferente), hiperkalemia, hipomagnesemia, HTA, diabetes postrasplante, temblor. Ciclosporina: hirsutismo e hiperplasia gingival</td><td>Inhibidores del CYP3A4 (azoles, macrólidos, diltiazem, toronja) lo suben; rifampicina, fenitoína y carbamazepina lo bajan</td></tr>
<tr><td><b>Micofenolato</b></td><td>Inhibe la IMPDH: bloquea la síntesis de purinas del linfocito</td><td>Diarrea, leucopenia</td><td>Teratogénico: contraindicado en el embarazo</td></tr>
<tr><td><b>Prednisona</b></td><td>Bloquea la transcripción de citocinas</td><td>Hiperglucemia, osteoporosis, infecciones, cataratas</td><td>Usar la dosis mínima eficaz</td></tr>
<tr><td><b>Azatioprina</b></td><td>Antimetabolito de purinas</td><td>Mielosupresión, hepatotoxicidad</td><td>Alopurinol o febuxostat (inhiben la xantina oxidasa → toxicidad grave); medir TPMT</td></tr>
<tr><td><b>Sirolimus / everolimus</b></td><td>Inhiben mTOR</td><td>Mala cicatrización, dislipidemia, proteinuria, neumonitis, aftas</td><td>Evitar en el posoperatorio inmediato</td></tr>
<tr><td><b>Basiliximab / timoglobulina</b></td><td>Inducción: anti-CD25 (receptor de IL-2) / anticuerpos policlonales contra linfocitos T</td><td>Timoglobulina: liberación de citocinas, leucopenia</td><td>Más riesgo de CMV y linfoma con la timoglobulina</td></tr>
</table></div>` },
        { h: 'Cómo lo preguntan en el examen', html: `
<ul>
<li>ERC con hiperkalemia, acidosis o edema pulmonar que no responden al manejo médico → <b>hemodiálisis urgente</b> (AEIOU).</li>
<li>ERC G5 asintomático que pregunta si ya debe dializarse → <b>no se inicia por la cifra</b>: prepara el acceso y vigila (IDEAL).</li>
<li>Primera sesión con BUN muy alto: cefalea, vómito y convulsión → <b>síndrome de desequilibrio</b>.</li>
<li>Diálisis peritoneal con líquido turbio y dolor abdominal → <b>peritonitis</b>: conteo celular, cultivo y antibiótico intraperitoneal.</li>
<li>Trasplantado que inicia claritromicina o fluconazol y sube la creatinina con temblor → <b>toxicidad por tacrolimus</b>.</li>
<li>Trasplantado con creatinina en ascenso, tacrolimus en rango y viremia por BK → <b>nefropatía por BK</b>: reducir la inmunosupresión (no subirla).</li>
</ul>` }
      ],
      mnemo: { t: 'AEIOU', d: 'Acidosis, Electrólitos (potasio), Intoxicaciones, Overload (volumen), Uremia: las cinco vocales de la diálisis urgente.' },
      pearl: 'Pericarditis urémica en un paciente con ERC: es indicación de diálisis (no de AINE). En quien ya se dializa, indica diálisis insuficiente.',
      trap: 'Paciente trasplantado que inicia claritromicina o fluconazol: el tacrolimus sube y aparece LRA por toxicidad. Ajusta la dosis y mide niveles.',
      guide: [
        'Inicio de diálisis crónica: KDIGO 2024 insiste en iniciar por síntomas o complicaciones, no por TFG; libros antiguos daban cifras fijas (TFG <15 o <10).',
        'Peritonitis en diálisis peritoneal: la ISPD 2022 usa >100 leucocitos/µL con >50% de neutrófilos tras un tiempo de permanencia ≥2 h.',
        'Acceso vascular: la KDOQI 2019 cambió “fístula primero” por un plan de acceso individualizado (el acceso correcto, para el paciente correcto, en el momento correcto). ⚠️ Depende de la guía: en el examen, la fístula AV nativa sigue siendo la respuesta de “mejor acceso”.'
      ],
      refs: [
        'KDIGO 2024 Clinical Practice Guideline for the Evaluation and Management of CKD. Kidney Int 2024.',
        'Cooper BA, et al. IDEAL trial. N Engl J Med 2010.',
        'Li PK, et al. ISPD peritonitis guideline recommendations: 2022 update. Perit Dial Int 2022.',
        'KDIGO Clinical Practice Guideline for the Care of Kidney Transplant Recipients. Am J Transplant 2009.',
        'Lok CE, et al. KDOQI Clinical Practice Guideline for Vascular Access: 2019 Update. Am J Kidney Dis 2020.',
        'NKF KDOQI Clinical Practice Guideline for Hemodialysis Adequacy: 2015 Update. Am J Kidney Dis 2015.'
      ]
    }
  },

  compares: {
    'hemo-peritoneal': {
      topic: 'dialisis', a: 'Hemodiálisis', b: 'Diálisis peritoneal',
      rows: [
        ['Membrana', 'Dializador sintético (filtro)', 'Peritoneo del propio paciente'],
        ['Dónde y cuánto', '3 sesiones/semana de ~4 h, en unidad', 'Diaria, en casa (manual o nocturna)'],
        ['Acceso', 'Fístula AV > injerto > catéter', 'Catéter peritoneal (Tenckhoff)'],
        ['Ventajas', 'Muy eficiente; útil en urgencias', 'Preserva función residual; más estable'],
        ['Complicación típica', 'Hipotensión, bacteriemia por catéter', 'Peritonitis, hiperglucemia, hernias'],
        ['No conviene si…', 'Muy inestable (mejor terapia continua)', 'Abdomen hostil, hernias, sin autocuidado']
      ]
    }
  },

  anims: {
    dialisis: {
      title: 'Cómo limpia la diálisis',
      steps: [
        { cap: '<b>Difusión.</b> La sangre (arriba) y el dializado (abajo) corren en sentidos opuestos a los lados de una membrana semipermeable. La urea (blanca) y el potasio (verde) cruzan a favor de su gradiente; eritrocitos y albúmina se quedan. A contracorriente, el gradiente se mantiene en todo el filtro (gráfica).',
          labels: [[22, 28, 'Sangre'], [136, 64, 'Dializado'], [118, 45, 'Membrana'], [80, 92, 'Gradiente']] },
        { cap: '<b>Ultrafiltración.</b> La presión empuja agua de la sangre al dializado y arrastra solutos con ella (convección). Así baja el volumen del paciente, sesión tras sesión, hasta su peso seco.',
          labels: [[65, 5, 'Presión'], [62, 102, 'Ultrafiltrado'], [143, 84, 'Volumen']] },
        { cap: '<b>Fístula arteriovenosa.</b> Se une la arteria radial con la vena cefálica: la vena se arterializa, engrosa y da frémito. Una aguja lleva la sangre al dializador y otra la regresa. Es el mejor acceso: menos infecciones y trombosis que el catéter.',
          labels: [[50, 74, 'Anastomosis'], [128, 72, 'Vena cefálica'], [128, 95, 'Arteria radial'], [80, 28, 'Dializador']] },
        { cap: '<b>Diálisis peritoneal.</b> El peritoneo es la membrana. Se infunde dializado con glucosa, permanece horas en el abdomen y se drena. La urea y el potasio salen de los capilares al líquido, y la glucosa jala agua (y se absorbe: hiperglucemia).',
          labels: [[66, 33, 'Peritoneo'], [122, 88, 'Catéter'], [144, 34, 'Glucosa'], [144, 103, 'Drenaje']] },
        { cap: '<b>Trasplante renal.</b> El injerto va en la fosa ilíaca, unido a los vasos ilíacos y a la vejiga; los riñones nativos se quedan. La inmunosupresión (tacrolimus + micofenolato + prednisona) frena a los linfocitos T que causan el rechazo.',
          labels: [[30, 36, 'Injerto'], [114, 36, 'Riñón nativo'], [82, 116, 'Vejiga'], [132, 60, 'Linfocitos T']] }
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
    ['Cáncer más común en trasplantados', 'Cáncer de piel no melanoma'],
    ['Pericarditis urémica', 'Indicación de diálisis (sin heparina); si ya se dializa, la diálisis es insuficiente'],
    ['Exploración de una fístula AV funcional', 'Frémito palpable y soplo continuo; si desaparecen, sospecha trombosis'],
    ['Síndrome de robo de la fístula', 'Mano fría, pálida y dolorosa, peor durante la diálisis: isquemia distal'],
    ['Virus BK en trasplante renal', 'Nefropatía con creatinina en ascenso; se trata reduciendo la inmunosupresión'],
    ['CMV en trasplante renal', 'Fiebre, leucopenia, diarrea o hepatitis en los primeros meses; profilaxis y tratamiento con valganciclovir']
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
      ref: 'Harrison 21e' }),

    q({ id: 'dialisis-11', dif: 2,
      stem: 'Hombre de 58 años con ERC G5 (TFG 8) que aún no se dializa. Tiene dolor torácico que mejora al inclinarse hacia adelante, frote pericárdico y BUN de 160 mg/dL. Ecocardiograma: derrame pericárdico leve sin taponamiento. ¿Tratamiento?',
      opts: ['AINE y colchicina', 'Iniciar hemodiálisis, de preferencia sin heparina', 'Pericardiocentesis urgente', 'Prednisona a dosis altas', 'Antibiótico empírico'],
      ans: 1,
      exp: 'La pericarditis urémica es indicación de diálisis (la “U” de AEIOU) y suele mejorar en 1–2 semanas de diálisis intensiva. Se evita o minimiza la heparina por el riesgo de pericarditis hemorrágica y taponamiento. La pericardiocentesis se reserva para el taponamiento.',
      why: ['Los AINE no tratan la causa y dañan la función renal residual; la pericarditis urémica responde a la diálisis.', '', 'No hay taponamiento.', 'No trata la uremia.', 'No hay datos de pericarditis bacteriana.'],
      ref: 'KDIGO 2024 · Harrison 21e' }),

    q({ id: 'dialisis-12', dif: 2,
      stem: 'Mujer de 71 años con DM2, a quien hace 3 semanas le hicieron una fístula braquiocefálica. Refiere que la mano izquierda se pone fría, pálida y dolorosa durante la hemodiálisis, con parestesias. El frémito de la fístula es intenso y el pulso radial débil. ¿Diagnóstico?',
      opts: ['Trombosis de la fístula', 'Síndrome de robo (isquemia distal por la fístula)', 'Túnel del carpo por β2-microglobulina', 'Estenosis venosa central', 'Infección de la fístula'],
      ans: 1,
      exp: 'La fístula “roba” flujo arterial a la mano: isquemia distal, peor durante la diálisis. Es más común en diabéticos, adultos mayores y fístulas proximales (braquiales). Se valora por cirugía vascular; los casos graves requieren corregir el acceso.',
      why: ['En la trombosis desaparecen el frémito y el soplo.', '', 'Aparece tras años de diálisis, no a las 3 semanas, y no da mano fría.', 'Da edema de todo el brazo y circulación colateral, no isquemia de la mano.', 'Daría eritema, calor, dolor local o fiebre.'],
      ref: 'KDOQI Vascular Access 2019' }),

    q({ id: 'dialisis-13', dif: 2,
      stem: 'Hombre de 63 años en hemodiálisis por catéter yugular tunelizado. Al conectarse presenta fiebre de 39 °C y escalofríos, sin otro foco. PA 118/70. ¿Conducta inicial?',
      opts: ['Amoxicilina oral y continuar', 'Hemocultivos (catéter y periférico) y vancomicina IV empírica, con cobertura para gramnegativos según gravedad', 'Esperar los cultivos antes de dar antibiótico', 'Fluconazol empírico', 'Retirar la fístula'],
      ans: 1,
      exp: 'Fiebre o escalofríos al iniciar la sesión en un paciente con catéter = bacteriemia relacionada con catéter hasta demostrar lo contrario. El germen más común es S. aureus (incluido el resistente a meticilina). Se retira el catéter si hay sepsis grave, infección del túnel, S. aureus, Pseudomonas u hongos, o bacteriemia persistente.',
      why: ['Insuficiente para una posible bacteriemia por S. aureus.', '', 'Retrasar el antibiótico aumenta la mortalidad.', 'Los hongos no son la causa más probable.', 'No tiene fístula: se dializa por catéter.'],
      ref: 'IDSA 2009 infección por catéter · KDOQI 2019' }),

    q({ id: 'dialisis-14', dif: 3,
      stem: 'Hombre con trasplante renal hace 8 meses, en tacrolimus, micofenolato y prednisona. La creatinina sube de 1.3 a 2.0 mg/dL. Niveles de tacrolimus en rango. PCR de virus BK en plasma alta; la biopsia muestra inclusiones virales en los túbulos, sin rechazo. ¿Conducta?',
      opts: ['Pulsos de metilprednisolona', 'Reducir la inmunosupresión', 'Aumentar la dosis de tacrolimus', 'Agregar timoglobulina', 'Valganciclovir'],
      ans: 1,
      exp: 'La nefropatía por poliomavirus BK aparece por exceso de inmunosupresión, típicamente en el primer año. No hay antiviral eficaz: se reduce la inmunosupresión (sobre todo el antimetabolito) y se vigilan la viremia y la creatinina, con cuidado de no provocar rechazo.',
      why: ['Es el tratamiento del rechazo agudo; aquí empeoraría la infección.', '', 'Más inmunosupresión empeora la replicación del virus.', 'Es tratamiento de rechazo grave; agravaría la infección.', 'Es para CMV, no para BK.'],
      ref: 'KDIGO Trasplante · AST IDCOP 2019' }),

    q({ id: 'dialisis-15', dif: 2,
      stem: 'Mujer de 45 años con ERC G5 por nefropatía diabética que ya necesita diálisis por síntomas urémicos; está en lista de espera de trasplante, sin donador vivo. Trabaja de tiempo completo, vive a 2 h del centro de hemodiálisis, orina 1 L/día, no tiene cirugías abdominales y tiene buena destreza. ¿Qué modalidad conviene más?',
      opts: ['Hemodiálisis en centro 3 veces por semana', 'Diálisis peritoneal en casa', 'Tratamiento conservador sin diálisis', 'Hemodiálisis por catéter femoral', 'Esperar el trasplante sin diálisis'],
      ans: 1,
      exp: 'La diálisis peritoneal se hace en casa (manual o con cicladora nocturna), conserva mejor la función renal residual y da más independencia. Es ideal con abdomen sin cirugías, autocuidado y lejanía del centro. Contraindicaciones: abdomen hostil, hernias no reparables o falta de autocuidado.',
      why: ['Es posible, pero los traslados y horarios chocan con su vida, y pierde antes la función residual.', '', 'No es apropiado en una paciente joven candidata a trasplante.', 'El catéter femoral es temporal y tiene alto riesgo de infección.', 'Ya tiene síntomas urémicos: necesita diálisis mientras llega el injerto.'],
      ref: 'KDIGO 2024 · ISPD' })
  ]
};
