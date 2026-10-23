// Tema 26 · Hipertensión pulmonar (Cardiología, semana 6)
const T = { topic: 'hp', subj: 'cardio' };
const q = (o) => ({ ...T, ...o });

export default {
  lessons: {
    hp: {
      hook: 'La hipertensión pulmonar se sospecha con el eco, pero se confirma con cateterismo derecho. Clasifícala en uno de 5 grupos: el tratamiento depende del grupo.',
      nn: [['pulmonary-hypertension', 'Pulmonary Hypertension']],
      yt: 'pulmonary hypertension',
      anim: 'hp',
      video: [
        { ch: 'Qué es la hipertensión pulmonar', sc: [
          { v: { k: 'title', t: 'Hipertensión pulmonar', s: 'Tema 26 · Cardiología' },
            say: 'Bienvenido a la guardia. La hipertensión pulmonar se sospecha con un eco, pero solo se confirma con un catéter. En este video vas a aprender la definición actual, los cinco grupos y por qué el tratamiento depende del grupo.' },
          { v: { k: 'case', t: 'Consulta externa', p: { name: 'Daniela', age: 31, sex: 'M', skin: '#D9A07A', hair: '#3A2418', gown: '#B48CFF' }, text: 'Disnea de esfuerzo progresiva desde hace un año; ayer se desmayó subiendo escaleras. R2 intenso y edema de tobillos.', vit: { FC: '96', PA: '108/70', SpO2: '94%' } },
            say: 'Conoce a Daniela, de treinta y un años. Desde hace un año se cansa cada vez más al caminar, y ayer se desmayó subiendo escaleras. El componente pulmonar del segundo ruido es intenso y tiene edema de tobillos. Su problema está en las arteriolas pulmonares.' },
          { v: { k: 'anim', id: 'hp', step: 0 },
            say: 'La circulación pulmonar normal es de baja presión: arteriolas de pared delgada y luz amplia, con una presión media de unos catorce milímetros de mercurio. En la hipertensión arterial pulmonar la pared se engrosa, la luz se estrecha y la presión sube.' },
          { v: { k: 'big', h: 'Hipertensión pulmonar (ESC/ERS 2022)', t: '>20', u: 'mmHg', s: 'PAP media en reposo, por cateterismo derecho. Antes era ≥25 mmHg: ⚠️ depende de la guía.' },
            say: 'La definición de la guía europea de dos mil veintidós es una presión arterial pulmonar media mayor de veinte milímetros de mercurio en reposo, medida por cateterismo derecho. Muchos libros todavía dicen veinticinco o más: revisa qué guía usa tu profesor.' },
          { v: { k: 'list', t: 'Por qué se remodela la arteriola', items: ['↑ Endotelina: vasoconstricción y proliferación', '↓ Óxido nítrico', '↓ Prostaciclina', 'Trombosis in situ y lesiones plexiformes'] },
            say: 'El endotelio enfermo produce mucha endotelina, que contrae y hace proliferar la pared, y poco óxido nítrico y poca prostaciclina, que la relajan. Además hay trombosis in situ. Recuerda estas tres vías, porque son las dianas de los fármacos.' }
        ] },
        { ch: 'Los cinco grupos', sc: [
          { v: { k: 'anim', id: 'hp', step: 1 },
            say: 'La hipertensión pulmonar se clasifica en cinco grupos. Uno, la hipertensión arterial pulmonar. Dos, la cardiopatía izquierda. Tres, la enfermedad pulmonar o la hipoxia. Cuatro, la obstrucción tromboembólica crónica. Y cinco, mecanismos múltiples o poco claros.' },
          { v: { k: 'mnemo', t: '“Arteria, Corazón, Pulmón, Coágulo, Otros”', d: 'Grupo 1 arterial (HAP) · 2 corazón izquierdo · 3 pulmón e hipoxia · 4 coágulos crónicos (HPTEC) · 5 multifactorial.' },
            say: 'Para no olvidarlos: arteria, corazón, pulmón, coágulo y otros. Uno arterial, dos corazón izquierdo, tres pulmón, cuatro coágulos crónicos y cinco, todo lo demás.' },
          { v: { k: 'list', t: 'Grupo 1: hipertensión arterial pulmonar', items: ['Idiopática y hereditaria (BMPR2)', 'Fármacos: anorexígenos, metanfetaminas, dasatinib', 'Esclerosis sistémica y otras conectivopatías', 'VIH, hipertensión portal, cardiopatías congénitas', 'Esquistosomiasis'] },
            say: 'El grupo uno incluye la forma idiopática y la hereditaria, por mutaciones en BMPR2. También la causada por anorexígenos, metanfetaminas o dasatinib, y la asociada a esclerosis sistémica, al VIH, a la hipertensión portal, a cardiopatías congénitas y a esquistosomiasis.' },
          { v: { k: 'list', t: 'Grupos 2 a 5', items: ['2: IC con FE reducida o preservada, valvulopatías', '3: EPOC, intersticial, apnea del sueño, altitud', '4: HP tromboembólica crónica (HPTEC)', '5: sarcoidosis, hemólisis, ERC, mieloproliferativas'] },
            say: 'El grupo dos es la insuficiencia cardiaca, con fracción reducida o preservada, y las valvulopatías. El tres, la enfermedad pulmonar obstructiva crónica, la intersticial, la apnea del sueño y la altitud. El cuatro, la enfermedad tromboembólica crónica. El cinco, sarcoidosis, anemias hemolíticas, enfermedad renal crónica y neoplasias mieloproliferativas.' },
          { v: { k: 'quiz', q: '¿Cuál es la causa más común de hipertensión pulmonar?', opts: ['HAP idiopática', 'Cardiopatía izquierda', 'HPTEC'], a: 1 },
            say: 'Pausa. ¿Cuál es la causa más común de hipertensión pulmonar?',
            exp: 'La cardiopatía izquierda, el grupo dos, seguida de la enfermedad pulmonar, el grupo tres. La forma idiopática es rara, aunque es la que más preguntan.' }
        ] },
        { ch: 'El ventrículo derecho y la clínica', sc: [
          { v: { k: 'anim', id: 'hp', step: 2 },
            say: 'Con la presión alta, el ventrículo derecho primero se hipertrofia y luego se dilata. Empuja el tabique hacia el ventrículo izquierdo, que queda en forma de D, y aparece insuficiencia tricuspídea. La falla de ese ventrículo es lo que define el pronóstico.' },
          { v: { k: 'list', t: 'Clínica', items: ['Disnea de esfuerzo progresiva y fatiga', 'Síncope de esfuerzo y angina', 'R2 pulmonar intenso; levantamiento paraesternal', 'Soplo de insuficiencia tricuspídea', 'Falla derecha: yugulares, edema, hepatomegalia'] },
            say: 'Los síntomas son inespecíficos: disnea de esfuerzo progresiva y fatiga. El síncope de esfuerzo indica un ventrículo derecho que ya no puede subir el gasto. Busca el segundo ruido pulmonar intenso, el levantamiento paraesternal, el soplo tricuspídeo y, al final, ingurgitación yugular, edema y hepatomegalia.' }
        ] },
        { ch: 'Diagnóstico', sc: [
          { v: { k: 'flow', t: 'Sospecha de HP', steps: ['Eco: VRT >2.8 m/s y signos del VD', 'Busca grupos 2 y 3: eco, PFP, TC', 'Gammagrama V/Q: ¿HPTEC?', 'Cateterismo derecho: confirma', 'HAP idiopática: vasorreactividad'] },
            say: 'El primer estudio es el ecocardiograma: una velocidad de regurgitación tricuspídea mayor de dos punto ocho metros por segundo y los signos del ventrículo derecho dan la probabilidad. Luego busca los grupos dos y tres. Después, gammagrama de ventilación perfusión para la enfermedad tromboembólica crónica. Y el cateterismo derecho confirma.' },
          { v: { k: 'anim', id: 'hp', step: 3 },
            say: 'En el cateterismo derecho, el catéter entra por una vena, cruza la aurícula y el ventrículo derechos y llega a la arteria pulmonar, donde mide la presión media. Luego se infla el balón en una rama y se mide la presión de enclavamiento, que refleja la aurícula izquierda.' },
          { v: { k: 'vs', a: 'Precapilar', b: 'Poscapilar', rows: [['PAPm', '>20 mmHg', '>20 mmHg'], ['PAWP', '≤15 mmHg', '>15 mmHg'], ['RVP', '>2 UW', '≤2 aislada · >2 combinada'], ['Grupos', '1, 3, 4 (y algunos del 5)', '2: corazón izquierdo']] },
            say: 'Con esos números clasificas. Precapilar: presión media mayor de veinte, enclavamiento de quince o menos y resistencia vascular pulmonar mayor de dos unidades Wood; son los grupos uno, tres y cuatro. Poscapilar: enclavamiento mayor de quince, por cardiopatía izquierda.' },
          { v: { k: 'quiz', q: 'Disnea 6 meses después de un TEP y eco con HP. ¿Estudio de tamizaje?', opts: ['Angio-TC', 'Gammagrama V/Q', 'Dímero D'], a: 1 },
            say: 'Pausa. Paciente con disnea seis meses después de una tromboembolia pulmonar, pese a la anticoagulación, y con eco sugestivo de hipertensión pulmonar. ¿Qué estudio de tamizaje pides?',
            exp: 'El gammagrama de ventilación perfusión. Es más sensible que la angiotomografía para la enfermedad tromboembólica crónica: si es normal, la descarta. Si muestra defectos, sigue el cateterismo con angiografía pulmonar.' }
        ] },
        { ch: 'Tratamiento por grupo', sc: [
          { v: { k: 'anim', id: 'hp', step: 4 },
            say: 'Los fármacos del grupo uno actúan sobre las tres vías. Los antagonistas de endotelina, como bosentán, bloquean su receptor. Los inhibidores de fosfodiesterasa cinco, como sildenafil, evitan que se degrade el GMP cíclico de la vía del óxido nítrico. Y los prostanoides, como epoprostenol, reponen la prostaciclina.' },
          { v: { k: 'flow', t: 'Grupo 1 (HAP)', steps: ['Vasorreactividad + → calcioantagonista', 'Riesgo bajo-intermedio → ARE + iPDE5', 'Riesgo alto → + prostaciclina IV/SC', 'Refractario → trasplante pulmonar'] },
            say: 'En la forma idiopática, primero la prueba de vasorreactividad. Cerca de uno de cada diez responde, y solo ellos reciben calcioantagonistas en dosis altas. Los demás, con riesgo bajo o intermedio, inician antagonista de endotelina más inhibidor de fosfodiesterasa cinco. Con riesgo alto se agrega prostaciclina intravenosa o subcutánea. Si no responde, trasplante pulmonar.' },
          { v: { k: 'list', t: 'Grupos 2 a 5', items: ['2: tratar la cardiopatía izquierda', '3: tratar el pulmón + O₂ si PaO₂ <60', '4: anticoagulación de por vida + endarterectomía', '4 inoperable: angioplastia con balón o riociguat', '5: tratar la causa'] },
            say: 'En los demás grupos se trata la causa. Grupo dos, la cardiopatía izquierda. Grupo tres, el pulmón, con oxígeno si la presión arterial de oxígeno es menor de sesenta. Grupo cuatro, anticoagulación de por vida y endarterectomía pulmonar, que puede curarla; si no es operable, angioplastia con balón o riociguat.' },
          { v: { k: 'quiz', q: 'Paciente con HAP toma sildenafil. ¿Le agregas riociguat?', opts: ['Sí, se potencian', 'No: hipotensión grave'], a: 1 },
            say: 'Pausa. Un paciente con hipertensión arterial pulmonar toma sildenafil. Otro médico quiere agregar riociguat. ¿Lo permites?',
            exp: 'No. Los dos aumentan el GMP cíclico: uno impide su degradación y el otro estimula su síntesis. Juntos causan hipotensión grave y la combinación está contraindicada. Lo mismo pasa con los nitratos.' }
        ] },
        { ch: 'Trampas de examen', sc: [
          { v: { k: 'tip', kind: 'trap', t: 'Sildenafil u otros vasodilatadores de HAP en el grupo 2: no están indicados y pueden causar edema pulmonar.' },
            say: 'Primera trampa: dar sildenafil o bosentán a una hipertensión pulmonar por insuficiencia cardiaca izquierda. No están indicados y pueden empeorar el edema pulmonar. En el grupo dos se trata el corazón izquierdo.' },
          { v: { k: 'list', t: 'Más trampas', items: ['Calcioantagonista sin vasorreactividad: no', 'HAP y embarazo: alta mortalidad materna', 'ARE y riociguat: teratogénicos', 'Esclerosis sistémica: tamizaje anual de HAP'] },
            say: 'Más trampas. Nunca des calcioantagonistas sin una prueba de vasorreactividad positiva. El embarazo en hipertensión arterial pulmonar tiene alta mortalidad materna, y los antagonistas de endotelina y el riociguat son teratogénicos. Y en esclerosis sistémica, tamizaje anual con eco, difusión de monóxido de carbono y péptido natriurético.' },
          { v: { k: 'tip', kind: 'pearl', t: 'El eco sugiere, el cateterismo confirma (PAPm >20 mmHg). Clasifica en uno de los 5 grupos antes de tratar.' },
            say: 'La perla final: el eco sugiere, pero el cateterismo derecho confirma, con presión media mayor de veinte. Y antes de tratar, clasifica en uno de los cinco grupos, porque el tratamiento depende del grupo. Ahora ve a las preguntas del tema para fijar lo que viste.' }
        ] }
      ],
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
</ul>` },
        { h: 'Fisiopatología en 1 minuto', html: `
<ul>
<li><b>Grupo 1</b>: disfunción endotelial con <b>↑ endotelina-1</b> (vasoconstricción y proliferación), <b>↓ óxido nítrico</b> y <b>↓ prostaciclina</b>. Resultado: hipertrofia de la media, proliferación de la íntima, trombosis in situ y lesiones plexiformes → ↑ resistencia vascular pulmonar.</li>
<li><b>Grupo 2</b>: la presión de la aurícula izquierda se transmite hacia atrás (poscapilar); con el tiempo puede agregarse un componente precapilar (combinada).</li>
<li><b>Grupo 3</b>: <b>vasoconstricción pulmonar hipóxica</b> + destrucción del lecho vascular.</li>
<li><b>Grupo 4</b>: trombos que no se resolvieron y se organizaron, más vasculopatía de vasos pequeños.</li>
<li><b>El VD</b>: primero hipertrofia, luego dilatación, insuficiencia tricuspídea y desplazamiento del tabique (VI en “D”); la falla del VD define el pronóstico.</li>
</ul>` },
        { h: 'Fármacos clave', html: `
<div class="tablewrap"><table class="mini">
<tr><th>Fármaco</th><th>Mecanismo</th><th>Efecto adverso clave</th><th>Contraindicación · cuidado</th></tr>
<tr><td><b>Bosentán, ambrisentán, macitentán</b> (ARE)</td><td>Bloquean receptores de endotelina</td><td>Hepatotoxicidad (bosentán: PFH mensuales), edema, anemia</td><td>Embarazo (teratógenos); el bosentán reduce el efecto de los anticonceptivos hormonales</td></tr>
<tr><td><b>Sildenafil, tadalafil</b> (iPDE5)</td><td>Evitan la degradación del GMPc (vía del NO)</td><td>Cefalea, rubor, hipotensión, alteraciones visuales</td><td>Nitratos y riociguat</td></tr>
<tr><td><b>Riociguat</b></td><td>Estimula la guanilato ciclasa soluble</td><td>Hipotensión, cefalea, dispepsia</td><td>iPDE5, nitratos, embarazo; HP por neumonía intersticial idiopática</td></tr>
<tr><td><b>Epoprostenol, treprostinil, iloprost</b>; <b>selexipag</b> (agonista IP)</td><td>Reponen la vía de la prostaciclina (↑ AMPc)</td><td>Cefalea, dolor mandibular, diarrea, rubor; infección del catéter</td><td>Epoprostenol IV: no suspender de golpe (rebote grave)</td></tr>
<tr><td><b>Nifedipino, diltiazem, amlodipino</b> (dosis altas)</td><td>Bloqueo de canales de calcio</td><td>Hipotensión, edema</td><td>Solo con vasorreactividad positiva; evitar verapamilo</td></tr>
<tr><td><b>Sotatercept</b></td><td>Atrapa ligandos de activina (reequilibra la vía BMPR2)</td><td>↑ Hemoglobina, trombocitopenia, telangiectasias, sangrado</td><td>Se agrega a la terapia de base</td></tr>
</table></div>` },
        { h: 'Cómo lo preguntan en el examen', html: `
<ul>
<li>Mujer joven con disnea progresiva, síncope de esfuerzo, R2 intenso y VD dilatado, sin cardiopatía izquierda ni neumopatía → <b>HAP: cateterismo derecho con vasorreactividad</b>.</li>
<li>Esclerosis sistémica limitada con disnea y DLCO baja desproporcionada a la espirometría → <b>HAP (grupo 1)</b>.</li>
<li>Disnea persistente meses después de un TEP → <b>gammagrama V/Q</b> (HPTEC) → endarterectomía.</li>
<li>Cateterismo con PAWP &gt;15 mmHg → <b>grupo 2</b>: tratar el corazón izquierdo, no sildenafil.</li>
<li>EPOC o apnea del sueño con HP → <b>oxígeno o CPAP</b> y tratar el pulmón.</li>
<li>Paciente con iPDE5 al que quieren agregar riociguat o nitratos → <b>contraindicado</b>.</li>
</ul>` }
      ],
      mnemo: { t: '“Arteria, Corazón, Pulmón, Coágulo, Otros”', d: 'Grupo 1 arterial (HAP), 2 corazón izquierdo, 3 pulmón e hipoxia, 4 coágulos crónicos (HPTEC), 5 multifactorial.' },
      pearl: 'Paciente con esclerosis sistémica: tamizaje anual de HAP con eco, pruebas de función pulmonar (DLCO) y NT-proBNP. Es una de las principales causas de muerte, sobre todo en la forma limitada.',
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
    ['Riociguat', 'Estimulador de guanilato ciclasa soluble; no combinar con PDE5i'],
    ['Mediadores alterados en HAP', '↑ Endotelina-1, ↓ óxido nítrico, ↓ prostaciclina'],
    ['Gen de la HAP hereditaria', 'BMPR2'],
    ['Bosentán: vigilancia', 'PFH mensuales (hepatotóxico); teratógeno y reduce el efecto de los anticonceptivos hormonales'],
    ['Mecanismo de la HP del grupo 3', 'Vasoconstricción pulmonar hipóxica: oxígeno y tratar la enfermedad pulmonar'],
    ['Hipertensión portopulmonar vs síndrome hepatopulmonar', 'Portopulmonar: vasoconstricción (HAP, grupo 1). Hepatopulmonar: vasodilatación intrapulmonar con hipoxemia']
  ],

  anims: {
    hp: {
      title: 'Las arteriolas pulmonares bajo presión',
      steps: [
        { cap: '<b>Sana vs remodelada.</b> Arriba, una arteriola pulmonar normal: pared delgada, luz amplia y PAPm ≈14 mmHg. Abajo, en la HAP: media hipertrofiada e íntima proliferada, luz estrecha, flujo lento y PAPm >20 mmHg.',
          labels: [[52, 8, 'Sana'], [52, 64, 'Remodelada'], [141, 52, 'PAPm ≈14'], [141, 107, 'PAPm >20']] },
        { cap: '<b>Los 5 grupos.</b> 1 arterial (HAP), 2 cardiopatía izquierda (la causa más común), 3 enfermedad pulmonar o hipoxia, 4 obstrucción tromboembólica crónica y 5 multifactorial (ERC, hemólisis, sarcoidosis…).',
          labels: [[28, 50, 'Arteria'], [80, 50, 'Corazón'], [132, 50, 'Pulmón'], [54, 109, 'Coágulo'], [106, 109, 'Otros']] },
        { cap: '<b>El VD bajo presión.</b> El VD se hipertrofia y luego se dilata; empuja el tabique hacia el VI (forma de “D”) y aparece insuficiencia tricuspídea. La falla del VD define el pronóstico.',
          labels: [[80, 64, 'VD grande'], [127, 62, 'VI en D'], [24, 40, 'AD'], [112, 90, 'Tabique']] },
        { cap: '<b>Cateterismo derecho.</b> El catéter cruza AD y VD hasta la arteria pulmonar y mide la PAPm. Al inflar el balón en una rama mide la presión de enclavamiento (PAWP), reflejo de la aurícula izquierda.',
          labels: [[26, 62, 'AD'], [50, 80, 'VD'], [80, 12, 'Arteria pulmonar'], [24, 100, 'Catéter'], [125, 71, 'PAPm >20'], [125, 97, 'PAWP ≤15']] },
        { cap: '<b>Dianas de los fármacos.</b> Los ARE bloquean el receptor de endotelina; los iPDE5 evitan que se degrade el GMPc de la vía del óxido nítrico. Los prostanoides reponen la prostaciclina, que actúa en su receptor IP.',
          labels: [[28, 22, 'Endotelina'], [80, 22, 'Óxido nítrico'], [132, 22, 'Prostaciclina'], [28, 112, 'Bosentán'], [80, 112, 'Sildenafil'], [132, 112, 'Epoprostenol']] }
      ]
    }
  },

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
      ref: 'ESC/ERS 2022 HP' }),

    q({ id: 'hp-11', dif: 3,
      stem: 'Mujer de 74 años con IC con FE preservada. Cateterismo derecho: PAPm 28 mmHg, PAWP 20 mmHg, gasto cardiaco 5 L/min, RVP 1.6 UW. ¿Cómo la clasificas y qué haces?',
      opts: ['HAP (grupo 1): ARE + iPDE5', 'HP poscapilar aislada (grupo 2): tratar la cardiopatía izquierda', 'HP precapilar: prueba de vasorreactividad', 'HP pre y poscapilar combinada: sildenafil', 'No tiene hipertensión pulmonar'],
      ans: 1,
      exp: 'PAPm >20 con PAWP >15 = poscapilar; con RVP ≤2 UW es aislada. Es el grupo 2: se tratan la IC, la congestión, la HTA y la FA. Los vasodilatadores de HAP no están indicados.',
      why: ['La PAWP >15 descarta HAP.', '', 'La PAWP >15 la hace poscapilar.', 'Sería combinada solo con RVP >2 UW; aun así, el sildenafil no está indicado.', 'PAPm 28 cumple la definición (>20 mmHg).'],
      ref: 'ESC/ERS 2022 HP' }),

    q({ id: 'hp-12', dif: 2,
      stem: 'Mujer de 35 años con disnea de esfuerzo. Componente pulmonar del S2 intenso, levantamiento paraesternal izquierdo y soplo holosistólico en el borde esternal izquierdo bajo que aumenta con la inspiración. ¿Qué explica el soplo?',
      opts: ['Insuficiencia mitral', 'Insuficiencia tricuspídea secundaria a hipertensión pulmonar', 'Comunicación interventricular', 'Estenosis aórtica', 'Miocardiopatía hipertrófica'],
      ans: 1,
      exp: 'Los soplos del corazón derecho aumentan con la inspiración (signo de Carvallo) porque aumenta el retorno venoso. P2 intenso y levantamiento del VD sugieren hipertensión pulmonar con dilatación del VD e insuficiencia tricuspídea funcional.',
      why: ['Es apical, irradia a axila y no aumenta con la inspiración.', '', 'No aumenta con la inspiración y suele tener frémito.', 'Es sistólico expulsivo en foco aórtico.', 'Aumenta con Valsalva, no con la inspiración.'],
      ref: 'ESC/ERS 2022 HP' }),

    q({ id: 'hp-13', dif: 3,
      stem: 'Hombre de 40 años con HAP idiopática, vasorreactividad negativa, clase funcional IV, síncopes, ascitis y NT-proBNP muy elevado. ¿Tratamiento inicial?',
      opts: ['Calcioantagonista en dosis altas', 'Monoterapia con sildenafil', 'Combinación que incluya prostaciclina IV (epoprostenol) y referir a trasplante', 'Solo diuréticos y oxígeno', 'Ambrisentán + tadalafil y revalorar en un año'],
      ans: 2,
      exp: 'Es HAP de alto riesgo (clase IV, síncope, falla derecha, NT-proBNP alto). La ESC/ERS 2022 recomienda combinación inicial que incluya un prostanoide IV o SC (triple terapia) y valorar trasplante pulmonar temprano.',
      why: ['Contraindicado sin vasorreactividad.', 'Insuficiente en alto riesgo.', '', 'Son apoyo, no tratamiento específico.', 'La doble terapia oral es para riesgo bajo o intermedio.'],
      ref: 'ESC/ERS 2022 HP' }),

    q({ id: 'hp-14', dif: 2,
      stem: 'Mujer de 27 años con HAP en tratamiento con bosentán y tadalafil, que usa anticonceptivos orales combinados. ¿Indicación más importante?',
      opts: ['Puede embarazarse si está estable', 'Anticoncepción muy eficaz (p. ej., DIU) por riesgo materno y teratogenia', 'Cambiar bosentán por calcioantagonista', 'Agregar riociguat', 'Ninguna: el esquema es adecuado'],
      ans: 1,
      exp: 'El embarazo en HAP tiene alta mortalidad materna y la ESC/ERS 2022 recomienda evitarlo. Los antagonistas de endotelina son teratógenos y el bosentán, inductor enzimático, reduce la eficacia de los anticonceptivos hormonales: se prefiere un método muy eficaz, como el DIU.',
      why: ['El embarazo está desaconsejado en HAP.', '', 'Solo sirve con vasorreactividad positiva.', 'Contraindicado con tadalafil (hipotensión).', 'Le falta una anticoncepción segura.'],
      ref: 'ESC/ERS 2022 HP' }),

    q({ id: 'hp-15', dif: 2,
      stem: 'Hombre de 52 años con obesidad y apnea obstructiva del sueño grave sin tratar. Eco: PSAP estimada 45 mmHg y VD levemente dilatado; VI normal. ¿Mecanismo y tratamiento principal?',
      opts: ['Vasoconstricción pulmonar hipóxica: CPAP y bajar de peso', 'HAP idiopática: ARE + iPDE5', 'HPTEC: endarterectomía', 'Cardiopatía izquierda: diurético de asa', 'Sarcoidosis: esteroides'],
      ans: 0,
      exp: 'La hipoxia nocturna repetida causa vasoconstricción pulmonar hipóxica (grupo 3). Se trata la causa: CPAP, pérdida de peso y oxígeno si hay hipoxemia diurna. Los vasodilatadores de HAP no están indicados.',
      why: ['', 'Antes de pensar en HAP hay que tratar la causa del grupo 3.', 'No hay antecedente ni estudio que la sugiera.', 'El VI es normal.', 'No hay datos de sarcoidosis.'],
      ref: 'ESC/ERS 2022 HP' })
  ]
};
