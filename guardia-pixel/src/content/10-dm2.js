// Tema 1 · Diabetes tipo 2 (Endocrinología, semanas 5–6)
const T = { topic: 'dm2', subj: 'endo' };
const q = (o) => ({ ...T, ...o });

export default {
  lessons: {
    dm2: {
      hook: 'Lo que más preguntan: cómo se confirma el diagnóstico, cuál es la meta y qué fármaco eliges según la comorbilidad del paciente.',
      nn: [['diabetes-mellitus-type-i-and-type-ii-diabetes-mellitus', 'Diabetes Mellitus (Type I and Type II)']],
      yt: 'type 2 diabetes treatment',
      anim: 'dm2',
      compare: ['sglt2-glp1'],
      video: [
        { ch: 'Qué está fallando', sc: [
          { v: { k: 'title', t: 'Diabetes tipo 2', s: 'Tema 1 · Endocrinología' },
            say: 'Bienvenido a la guardia. La diabetes tipo dos es el tema que más pesa en el parcial. En este video vas a confirmar el diagnóstico, fijar la meta y, sobre todo, elegir el fármaco según la comorbilidad del paciente.' },
          { v: { k: 'case', t: 'Lo mandan del trabajo', p: { name: 'Ramiro', age: 56, sex: 'H', skin: '#C98B62', hair: '#2A1C14', gown: '#5BA7E0' }, text: 'Chofer con obesidad. IAM hace 2 años, con stent en la DA. Asintomático. El laboratorio de la empresa reporta A1c de 6.8%.', vit: { IMC: '33', A1c: '6.8%', PA: '138/86' } },
            say: 'Imagina a don Ramiro, chofer de cincuenta y seis años, con obesidad y un infarto hace dos años. Lo mandan del trabajo porque le salió alta el azúcar: hemoglobina glucosilada de seis punto ocho por ciento. No tiene síntomas. Lo vamos a acompañar todo el video, pero primero veamos qué está fallando dentro de su cuerpo.' },
          { v: { k: 'anim', id: 'dm2', step: 0 },
            say: 'En condiciones normales, la insulina se une a su receptor en el músculo. Esa señal manda los transportadores GLUT cuatro a la membrana, y por ahí entra la glucosa. Así baja la glucosa de la sangre después de comer.' },
          { v: { k: 'anim', id: 'dm2', step: 1 },
            say: 'En la diabetes tipo dos, el primer problema es la resistencia a la insulina. La hormona llega, pero la señal se bloquea dentro de la célula. Los transportadores se quedan atrapados y la glucosa se acumula en la sangre. La grasa visceral y el sedentarismo empeoran esa resistencia.' },
          { v: { k: 'anim', id: 'dm2', step: 2 },
            say: 'Al principio el páncreas compensa: la célula beta produce más insulina y la glucosa se mantiene normal por años. Pero la célula beta se agota. Cuando ya no alcanza, aparece la hiperglucemia. Por eso la enfermedad es progresiva y casi todos necesitan más fármacos con el tiempo.' }
        ] },
        { ch: 'Confirmar el diagnóstico', sc: [
          { v: { k: 'list', t: 'Diabetes: basta uno', items: ['A1c ≥6.5%', 'Glucosa en ayuno ≥126 mg/dL', 'CTOG 75 g: a las 2 h ≥200 mg/dL', 'Al azar ≥200 + síntomas o crisis'] },
            say: 'Para diagnosticar diabetes basta uno de estos criterios. Hemoglobina glucosilada de seis punto cinco por ciento o más. Glucosa en ayuno de ciento veintiséis o más. Glucosa de doscientos o más a las dos horas de una carga de setenta y cinco gramos. O glucosa al azar de doscientos o más con síntomas clásicos o crisis hiperglucémica.' },
          { v: { k: 'quiz', q: 'Ramiro: A1c 6.8%, asintomático y sin glucosa en esa muestra. ¿Ya es diabetes?', opts: ['Sí: ya cumple el criterio', 'Falta una segunda prueba'], a: 1 },
            say: 'Pausa. Ramiro tiene seis punto ocho por ciento, no tiene síntomas y en esa muestra no se midió glucosa. ¿Ya puedes decir que es diabético?',
            exp: 'Todavía no. Sin hiperglucemia inequívoca necesitas dos resultados alterados: dos pruebas distintas en la misma muestra, o la misma prueba repetida. A Ramiro le miden glucosa en ayuno: ciento cuarenta y uno. Ahora sí, diabetes confirmada.' },
          { v: { k: 'tip', kind: 'trap', t: 'La A1c miente si cambia la vida del eritrocito: hemólisis, sangrado, transfusión, embarazo, hemodiálisis, hemoglobinopatías. Usa glucosa.' },
            say: 'Ojo con esta trampa. La hemoglobina glucosilada depende de cuánto vive el eritrocito. Con hemólisis, sangrado reciente, transfusión, embarazo, hemodiálisis o hemoglobinopatías, la cifra no es confiable. En esos pacientes diagnosticas con glucosa plasmática.' },
          { v: { k: 'list', t: '¿Seguro que es tipo 2?', items: ['Delgado, falla rápido, anti-GAD + → LADA', 'Joven, 3 generaciones, sin anticuerpos → MODY', 'Glucocorticoides, Cushing, páncreas → secundaria', 'Si dudas: autoanticuerpos y péptido C'] },
            say: 'Antes de seguir, pregúntate si de verdad es tipo dos. Un adulto delgado que pierde peso y falla rápido a las pastillas, con anticuerpos anti GAD positivos, tiene diabetes autoinmune latente del adulto: necesita insulina. Un joven con diabetes en tres generaciones y sin anticuerpos sugiere diabetes monogénica. Y no olvides las causas secundarias: glucocorticoides, Cushing y enfermedad pancreática.' }
        ] },
        { ch: 'Las metas', sc: [
          { v: { k: 'big', h: 'Meta para la mayoría', t: '<7%', u: 'A1c', s: '<6.5% si es seguro · <8% en adulto mayor con comorbilidades · frágil: solo evitar hipoglucemia' },
            say: 'La meta de hemoglobina glucosilada para la mayoría de los adultos es menor de siete por ciento. Puede ser más estricta, menor de seis punto cinco, si se logra sin hipoglucemia. Y más laxa, menor de ocho, en el adulto mayor con varias enfermedades. En el muy frágil solo evitas las hipoglucemias y los síntomas.' },
          { v: { k: 'list', t: 'Las otras metas', items: ['Glucosa antes de comer: 80–130 mg/dL', 'Pico después de comer: <180 mg/dL', 'MCG: tiempo en rango 70–180 >70%', 'PA <130/80 mmHg', 'LDL <70; <55 si ya tiene ECV'] },
            say: 'Las otras metas también se preguntan. Glucosa capilar antes de comer, de ochenta a ciento treinta. Pico después de comer, menor de ciento ochenta. Con monitoreo continuo, más del setenta por ciento del tiempo entre setenta y ciento ochenta. Presión menor de ciento treinta sobre ochenta. Y colesterol LDL menor de setenta, o menor de cincuenta y cinco si ya tuvo enfermedad cardiovascular.' }
        ] },
        { ch: 'Elegir el fármaco', sc: [
          { v: { k: 'flow', t: 'Elige por la comorbilidad', steps: ['ECV aterosclerótica → arGLP-1 o iSGLT2', 'Insuficiencia cardiaca → iSGLT2', 'ERC → iSGLT2 (+ semaglutida)', 'Obesidad → semaglutida o tirzepatida', 'Ninguna → metformina'] },
            say: 'Ahora la decisión más preguntada. No eliges por la glucosa, eliges por la comorbilidad. Con enfermedad aterosclerótica, un agonista de GLP uno o un inhibidor de SGLT dos con beneficio probado. Con insuficiencia cardiaca, inhibidor de SGLT dos. Con enfermedad renal, inhibidor de SGLT dos, y semaglutida como adición. Si la prioridad es el peso, semaglutida o tirzepatida. Sin nada de eso, metformina.' },
          { v: { k: 'anim', id: 'dm2', step: 3 },
            say: 'La metformina sigue siendo la base cuando no hay comorbilidad cardiorrenal. Frena la producción de glucosa en el hígado. Como no estimula la insulina, sola no causa hipoglucemia. Sus problemas son la diarrea al inicio y el déficit de vitamina B doce a largo plazo. Se suspende con tasa de filtración glomerular menor de treinta.' },
          { v: { k: 'anim', id: 'dm2', step: 4 },
            say: 'Los inhibidores de SGLT dos, las flozinas, bloquean la reabsorción de glucosa y sodio en el túbulo proximal. La glucosa se va por la orina. La pérdida de sodio explica que reduzcan las hospitalizaciones por insuficiencia cardiaca y frenen la enfermedad renal. Para proteger el riñón se inician con filtración de veinte o más.' },
          { v: { k: 'anim', id: 'dm2', step: 5 },
            say: 'Los agonistas de GLP uno, las glutidas, imitan a la incretina. Liberan insulina solo cuando la glucosa está alta, bajan el glucagón, vacían el estómago más lento y dan saciedad. Por eso bajan mucho la hemoglobina glucosilada y el peso, y reducen el infarto y el evento vascular cerebral.' },
          { v: { k: 'vs', cmp: 'sglt2-glp1', rows: [6, 8, 9] },
            say: 'Compáralos. Las flozinas bajan la glucosa de forma moderada, brillan en insuficiencia cardiaca y riñón, y sus efectos adversos clásicos son la micosis genital y la cetoacidosis euglucémica. Las glutidas bajan más la glucosa y el peso, y su problema es la náusea. Están contraindicadas con antecedente personal o familiar de cáncer medular de tiroides o de neoplasia endocrina múltiple tipo dos.' },
          { v: { k: 'mnemo', t: 'FLOZINA = Falla y Filtrado · GLUTIDA = Grasa y Gordura', d: 'iSGLT2: insuficiencia cardiaca y ERC. arGLP-1: ECV aterosclerótica y obesidad. En ECV aterosclerótica, cualquiera de los dos.' },
            say: 'Para no confundirlos: flozina, falla y filtrado, es decir, insuficiencia cardiaca y riñón. Glutida, grasa y gordura, es decir, grasa en la arteria y obesidad. Y en la enfermedad aterosclerótica, cualquiera de los dos es correcto.' },
          { v: { k: 'quiz', q: 'DM2 con IC y FEVI de 30%. Toma metformina. A1c 7.6%. ¿Qué agregas?', opts: ['Pioglitazona', 'Dapagliflozina', 'Saxagliptina'], a: 1 },
            say: 'Pausa. Paciente con diabetes e insuficiencia cardiaca con fracción de expulsión de treinta por ciento. Toma metformina y tiene siete punto seis. ¿Qué agregas?',
            exp: 'Dapagliflozina. Los inhibidores de SGLT dos reducen las hospitalizaciones y la muerte en insuficiencia cardiaca. La pioglitazona retiene líquidos y la saxagliptina aumentó las hospitalizaciones por insuficiencia cardiaca: las dos son trampas.' }
        ] },
        { ch: 'Cuando no alcanza', sc: [
          { v: { k: 'list', t: '¿Insulina desde el inicio?', items: ['Pérdida de peso o cetosis (catabolismo)', 'A1c >10%', 'Glucosa ≥300 mg/dL con síntomas', 'Sospecha de DM1 o LADA'] },
            say: 'Cuándo empiezas con insulina desde el primer día. Cuando hay catabolismo, es decir, pérdida de peso o cetosis. Cuando la hemoglobina glucosilada pasa de diez por ciento, o la glucosa es de trescientos o más con síntomas. Y cuando sospechas diabetes autoinmune. Si la hemoglobina glucosilada está uno punto cinco o más arriba de la meta, considera dos fármacos desde el inicio.' },
          { v: { k: 'flow', t: 'Si necesita inyectable', steps: ['Primero arGLP-1 (o tirzepatida)', 'Basal: 10 U o 0.1–0.2 U/kg/día', 'Sube 2 U c/3 días según el ayuno', '>0.5 U/kg sin meta: sobrebasalización', 'Agrega arGLP-1 o insulina prandial'] },
            say: 'Si necesita un inyectable, la Asociación Americana de Diabetes prefiere primero un agonista de GLP uno sobre la insulina. Si llega la insulina basal, inicia con diez unidades, o de cero punto uno a cero punto dos unidades por kilo. Sube dos unidades cada tres días según la glucosa en ayuno. Si pasa de cero punto cinco unidades por kilo sin llegar a la meta, es sobrebasalización: no subas más, agrega un agonista de GLP uno o insulina prandial.' },
          { v: { k: 'tip', kind: 'trap', t: 'iDPP-4 + arGLP-1 = trampa: actúan en la misma vía y no suman. Si inicias una glutida, suspende la gliptina.' },
            say: 'Una trampa clásica: nunca combines una gliptina con una glutida. Actúan sobre la misma vía de la incretina y no suman beneficio. Si inicias el agonista de GLP uno, suspende el inhibidor de DPP cuatro.' }
        ] },
        { ch: 'Seguridad y complicaciones', sc: [
          { v: { k: 'list', t: 'Hipoglucemia', items: ['Nivel 1: 54–69 mg/dL', 'Nivel 2: <54 mg/dL', 'Nivel 3: necesita ayuda de otra persona', 'Traga: 15–20 g de glucosa, repetir en 15 min', 'No traga: glucagón o dextrosa IV'] },
            say: 'La hipoglucemia tiene tres niveles. Nivel uno, de cincuenta y cuatro a sesenta y nueve. Nivel dos, menor de cincuenta y cuatro. Nivel tres, cuando necesita ayuda de otra persona, sin importar la cifra. Si puede tragar, regla de quince: de quince a veinte gramos de glucosa y revalorar en quince minutos. Si no puede, glucagón o dextrosa intravenosa.' },
          { v: { k: 'list', t: 'Lo que puede salir mal', items: ['Glibenclamida en adulto mayor o ERC: hipoglucemia larga', 'Metformina: TFG 30–44 máx. 1 g/día; <30 suspender', 'iSGLT2: suspender 3 días antes de cirugía', 'iSGLT2 + ayuno: cetoacidosis euglucémica'] },
            say: 'Y los errores de seguridad que más preguntan. La glibenclamida en adultos mayores o con enfermedad renal causa hipoglucemias prolongadas: evítala. La metformina se limita a mil miligramos con filtración de treinta a cuarenta y cuatro, y se suspende por debajo de treinta. Las flozinas se suspenden tres días antes de una cirugía, porque con ayuno causan cetoacidosis con glucosa casi normal.' },
          { v: { k: 'list', t: 'Tamizaje desde el diagnóstico', items: ['Fondo de ojo con dilatación', 'Albúmina/creatinina en orina + TFG', 'Pies: monofilamento de 10 g', 'Después, cada año'] },
            say: 'En la diabetes tipo dos las complicaciones pueden existir desde el diagnóstico, porque la enfermedad estuvo oculta por años. Desde el primer día: fondo de ojo con dilatación, cociente albúmina creatinina en orina con tasa de filtración, y revisión de pies con monofilamento. Después, cada año. En la tipo uno se empieza a los cinco años.' },
          { v: { k: 'tip', kind: 'pearl', t: 'Si el caso dice IAM, EVC, IC o ERC, agrega iSGLT2 o arGLP-1 aunque la A1c ya esté en meta.' },
            say: 'La perla para el examen: si el caso menciona infarto, evento vascular cerebral, insuficiencia cardiaca o enfermedad renal, la respuesta casi nunca es subir la metformina ni agregar una sulfonilurea. Agrega un inhibidor de SGLT dos o un agonista de GLP uno, aunque la hemoglobina glucosilada ya esté en meta. Ahora ve a las preguntas del tema para fijar lo que viste.' }
        ] }
      ],
      sections: [
        { h: 'Fisiopatología en 1 minuto', html: `
<ul>
<li>Dos defectos: <b>resistencia a la insulina</b> (músculo, hígado y tejido adiposo) y <b>falla progresiva de la célula β</b>. La resistencia sola no basta: la DM2 aparece cuando la célula β ya no compensa.</li>
<li><b>Octeto ominoso</b> (DeFronzo): ↓ secreción de insulina (célula β) · ↑ glucagón (célula α) · ↑ producción hepática de glucosa · ↓ captación muscular · ↑ lipólisis · ↓ efecto incretina · ↑ reabsorción renal de glucosa (SGLT2) · disfunción de neurotransmisores en el cerebro.</li>
<li>Cada fármaco ataca una pieza: metformina (hígado), pioglitazona (músculo y grasa), sulfonilureas (célula β), arGLP-1 e iDPP-4 (incretinas y glucagón), iSGLT2 (riñón).</li>
<li><b>Glucotoxicidad y lipotoxicidad</b>: la hiperglucemia sostenida apaga aún más a la célula β. Por eso, con A1c muy alta conviene insulina al inicio, y muchas veces después se puede reducir.</li>
<li>La célula β pierde función año con año: casi todos necesitan intensificar con el tiempo, y no siempre es “falta de apego”.</li>
</ul>` },
        { h: 'Diagnóstico', html: `
<div class="tablewrap"><table class="mini">
<tr><th>Prueba</th><th>Prediabetes</th><th>Diabetes</th></tr>
<tr><td>A1c</td><td>5.7–6.4%</td><td><b>≥6.5%</b></td></tr>
<tr><td>Glucosa en ayuno (≥8 h)</td><td>100–125 mg/dL</td><td><b>≥126 mg/dL</b></td></tr>
<tr><td>Glucosa 2 h en CTOG 75 g</td><td>140–199 mg/dL</td><td><b>≥200 mg/dL</b></td></tr>
<tr><td>Glucosa plasmática al azar</td><td>—</td><td><b>≥200 mg/dL</b> + síntomas clásicos o crisis hiperglucémica</td></tr>
</table></div>
<ul>
<li><b>Sin hiperglucemia inequívoca necesitas dos resultados anormales</b>: dos pruebas distintas en la misma muestra, o la misma prueba en una segunda muestra.</li>
<li>Si dos pruebas no coinciden, repite la que salió por arriba del punto de corte.</li>
<li>La A1c no sirve cuando cambia la vida del eritrocito: anemia ferropénica o hemolítica, hemoglobinopatías, transfusión o sangrado reciente, embarazo, hemodiálisis, eritropoyetina. Ahí usa glucosa.</li>
<li><b>Tamizaje</b>: a todos desde los 35 años; antes si IMC ≥25 (≥23 en asiáticos) con algún factor de riesgo (familiar de primer grado, HTA, HDL &lt;35 o TG &gt;250, SOP, acantosis, ECV, sedentarismo). Si es normal, repetir cada 3 años; si hay prediabetes, cada año.</li>
</ul>` },
        { h: '¿Es realmente tipo 2? Diagnóstico diferencial', html: `
<div class="tablewrap"><table class="mini">
<tr><th>Tipo</th><th>Pistas</th><th>Estudio</th><th>Tratamiento</th></tr>
<tr><td><b>DM1</b></td><td>Joven y delgado, inicio agudo, a veces debuta con CAD</td><td>Autoanticuerpos (GAD65, IA-2, ZnT8, insulina) positivos; péptido C bajo</td><td>Insulina basal-bolo</td></tr>
<tr><td><b>LADA</b></td><td>Adulto delgado que falla rápido a los orales, pierde peso; otras autoinmunidades</td><td>Anti-GAD positivo; péptido C que cae con los años</td><td>Insulina pronto</td></tr>
<tr><td><b>MODY</b></td><td>Inicio joven (típicamente &lt;25 años), sin obesidad, diabetes en 3 generaciones, sin cetosis</td><td>Anticuerpos negativos, péptido C conservado; prueba genética</td><td>HNF1A/HNF4A: sulfonilurea a dosis baja · GCK: hiperglucemia leve y estable, casi nunca requiere tratamiento</td></tr>
<tr><td><b>Secundaria</b></td><td>Glucocorticoides, Cushing, acromegalia, feocromocitoma, pancreatitis crónica, fibrosis quística, hemocromatosis; tiazidas, antipsicóticos atípicos, inhibidores de calcineurina</td><td>Según la sospecha</td><td>Tratar la causa y la glucosa</td></tr>
<tr><td><b>Gestacional</b></td><td>Aparece en el 2.º o 3.er trimestre sin diabetes previa clara</td><td>CTOG de 75 g a las 24–28 semanas</td><td>Dieta y ejercicio; si no basta, insulina (de elección)</td></tr>
</table></div>
<p>Pide autoanticuerpos cuando el cuadro no encaja: peso normal, pérdida de peso, cetosis, falla rápida a los orales o autoinmunidad asociada.</p>` },
        { h: 'Metas', html: `
<ul>
<li><b>A1c &lt;7%</b> para la mayoría de los adultos.</li>
<li><b>Más estricta (&lt;6.5%)</b> si se logra sin hipoglucemia: paciente joven, diagnóstico reciente, sin ECV.</li>
<li><b>Menos estricta (&lt;8%)</b> en adultos mayores con varias enfermedades crónicas o deterioro cognitivo leve-moderado, hipoglucemias graves previas o expectativa de vida corta. En el adulto mayor muy frágil no se persigue la A1c: se evitan la hipoglucemia y la hiperglucemia sintomática.</li>
<li>Glucosa capilar antes de comer 80–130 mg/dL; pico después de comer &lt;180 mg/dL.</li>
<li>Con monitoreo continuo: tiempo en rango (70–180) &gt;70%, tiempo &lt;70 mg/dL &lt;4% y &lt;54 mg/dL &lt;1%.</li>
<li>PA &lt;130/80 mmHg. LDL &lt;70 mg/dL (40–75 años con ≥1 factor de riesgo) y &lt;55 mg/dL si ya tiene ECV aterosclerótica.</li>
</ul>` },
        { h: 'Los fármacos', html: `
<div class="tablewrap"><table class="mini">
<tr><th>Grupo</th><th>Cómo funciona</th><th>A favor</th><th>En contra</th></tr>
<tr><td><b>Metformina</b></td><td>↓ producción hepática de glucosa (activa AMPK)</td><td>Barata, sin hipoglucemia, peso neutro o ↓ leve</td><td>Diarrea y náusea (iniciar 500 mg y titular). Déficit de B12. Acidosis láctica rara. TFG &lt;30: suspender; 30–44: no iniciar y máx. 1 000 mg/día</td></tr>
<tr><td><b>iSGLT2</b> (-flozina)</td><td>Bloquea la reabsorción de glucosa y sodio en el túbulo proximal → glucosuria</td><td>↓ hospitalización por IC (FEr y FEp), frena la ERC, ↓ peso y PA, sin hipoglucemia</td><td>Micosis genital, depleción de volumen, cetoacidosis euglucémica (suspender 3 días antes de cirugía). Para proteger riñón y corazón se inicia con TFG ≥20</td></tr>
<tr><td><b>arGLP-1</b> (-glutida) y tirzepatida</td><td>↑ insulina dependiente de glucosa, ↓ glucagón, vaciamiento gástrico lento, saciedad</td><td>↓ A1c y peso muy marcada; ↓ IAM, EVC y muerte CV (liraglutida, semaglutida, dulaglutida); semaglutida frena la ERC</td><td>Náusea y vómito, colelitiasis, precaución con pancreatitis previa. Contraindicado con antecedente personal o familiar de carcinoma medular de tiroides o MEN2</td></tr>
<tr><td><b>iDPP-4</b> (-gliptina)</td><td>Evitan que se degraden las incretinas propias</td><td>Bien tolerados, peso neutro, sin hipoglucemia; linagliptina sin ajuste renal</td><td>Potencia modesta (≈0.5–0.8% de A1c). Saxagliptina ↑ hospitalización por IC. No combinar con arGLP-1</td></tr>
<tr><td><b>Sulfonilureas</b></td><td>Cierran el canal K-ATP de la célula β → liberan insulina</td><td>Baratas y potentes</td><td>Hipoglucemia y ↑ peso. Glibenclamida: hipoglucemia prolongada en adultos mayores y ERC; evítala</td></tr>
<tr><td><b>Pioglitazona</b></td><td>Agonista PPAR-γ: ↑ sensibilidad a la insulina</td><td>Sin hipoglucemia; útil en hígado graso (MASH)</td><td>Retención de líquidos, ↑ peso, fracturas. Contraindicada en IC NYHA III–IV y no recomendada en IC sintomática</td></tr>
<tr><td><b>Insulina basal</b></td><td>Reemplazo</td><td>La más potente, sin techo de dosis</td><td>Hipoglucemia y ↑ peso. Iniciar 10 U/día o 0.1–0.2 U/kg/día y subir 2 U cada 3 días según la glucosa en ayuno</td></tr>
</table></div>` },
        { h: 'Cómo elegir (ADA)', html: `
<div class="decide">
<p><span class="if">ECV aterosclerótica (IAM, EVC, EAP) o riesgo CV alto</span><span class="then">arGLP-1 o iSGLT2 con beneficio CV probado, sin importar la A1c ni si ya toma metformina</span></p>
<p><span class="if">Insuficiencia cardiaca (FEr o FEp)</span><span class="then">iSGLT2</span></p>
<p><span class="if">ERC: TFG 20–60 o albuminuria ≥30 mg/g</span><span class="then">iSGLT2; si no se puede, o como adición, arGLP-1 con beneficio renal (semaglutida)</span></p>
<p><span class="if">Obesidad, si bajar de peso es la prioridad</span><span class="then">Semaglutida o tirzepatida</span></p>
<p><span class="if">Hígado graso con fibrosis (MASH)</span><span class="then">arGLP-1, tirzepatida o pioglitazona</span></p>
<p><span class="if">Sin esas comorbilidades</span><span class="then">Metformina + estilo de vida; agrega según meta, peso, riesgo de hipoglucemia y costo</span></p>
<p><span class="if">Catabolismo (pérdida de peso, cetosis), A1c &gt;10% o glucosa ≥300 con síntomas</span><span class="then">Insulina desde el inicio</span></p>
<p><span class="if">A1c ≥1.5% por arriba de la meta</span><span class="then">Considerar combinación de dos fármacos desde el inicio</span></p>
<p><span class="if">Necesita más potencia o un inyectable, sin catabolismo</span><span class="then">arGLP-1 o tirzepatida antes que insulina (suspende el iDPP-4 si lo tomaba)</span></p>
<p><span class="if">Insulina basal &gt;0.5 U/kg/día sin llegar a meta, hipoglucemias o gran diferencia noche-mañana</span><span class="then">Sobrebasalización: no subas la basal; agrega arGLP-1 o insulina prandial</span></p>
<p><span class="if">ERC con albuminuria persistente pese a IECA/ARA-II a dosis máxima (TFG ≥25, K normal)</span><span class="then">Agregar finerenona (además del iSGLT2)</span></p>
</div>` },
        { h: 'Hipoglucemia', html: `
<ul>
<li><b>Nivel 1</b>: 54–69 mg/dL · <b>Nivel 2</b>: &lt;54 mg/dL · <b>Nivel 3</b>: evento grave con alteración mental o física que requiere ayuda de otra persona, sin importar la cifra.</li>
<li><b>Consciente y puede tragar</b> → regla de 15: 15–20 g de glucosa oral, revalorar a los 15 min, repetir si sigue &lt;70 y luego dar una colación.</li>
<li><b>Inconsciente o sin vía oral</b> → glucagón (IM, SC o intranasal) o dextrosa IV.</li>
<li>Con sulfonilureas la hipoglucemia puede durar horas: observa más tiempo.</li>
<li>Los betabloqueadores ocultan temblor y palpitaciones; la sudoración persiste.</li>
</ul>` },
        { h: 'Complicaciones y tamizaje', html: `
<ul>
<li><b>Retinopatía</b>: fondo de ojo con dilatación al diagnóstico en DM2 (en DM1, a los 5 años) y luego cada año; cada 1–2 años si es normal y hay buen control.</li>
<li><b>Enfermedad renal</b>: cociente albúmina/creatinina en orina (CAC) y TFG al diagnóstico y cada año.</li>
<li><b>Neuropatía</b>: monofilamento de 10 g más otra prueba (diapasón de 128 Hz, pinchazo o temperatura) al diagnóstico y cada año. Revisa los pies en cada consulta.</li>
<li><b>Macrovascular</b>: estatina de intensidad moderada a todos los diabéticos de 40–75 años; alta intensidad si hay ≥1 factor de riesgo o ECV. IECA o ARA-II si hay HTA con albuminuria. Aspirina en prevención secundaria.</li>
</ul>` },
        { h: 'Cómo lo preguntan en el examen', html: `
<ul>
<li>A1c de 6.7% en un paciente sin síntomas → <b>confirmar con una segunda prueba</b> (no diagnosticar ni tratar todavía).</li>
<li>Glucosa al azar ≥200 con poliuria, polidipsia y pérdida de peso → <b>ya es diabetes</b>; si hay catabolismo o A1c &gt;10% → <b>insulina</b>.</li>
<li>DM2 + IAM o EVC previo con A1c “en meta” → <b>agrega arGLP-1 o iSGLT2</b>; DM2 + IC → <b>iSGLT2</b> (pioglitazona y saxagliptina son las trampas).</li>
<li>DM2 + ERC con albuminuria → <b>iSGLT2 + IECA/ARA-II</b>; si la albuminuria persiste → <b>finerenona</b>.</li>
<li>Toma flozina, está en ayuno o en el posoperatorio, con acidosis y glucosa &lt;250 → <b>cetoacidosis euglucémica</b>.</li>
<li>Adulto mayor con glibenclamida y confusión matutina → <b>hipoglucemia</b>: cambia de fármaco y relaja la meta a &lt;8%. Metformina + neuropatía + anemia macrocítica → <b>B12</b>.</li>
</ul>` }
      ],
      mnemo: { t: 'FLOZINA = Falla y Filtrado · GLUTIDA = Grasa y Gordura', d: 'iSGLT2 (-flozina) para la falla cardiaca y el filtrado renal (ERC). arGLP-1 (-glutida) para la grasa en la arteria (ECV aterosclerótica) y la gordura (obesidad). Ojo: los dos reducen eventos cardiovasculares, así que en ECV aterosclerótica cualquiera de los dos es correcto.' },
      pearl: 'Si el caso menciona IAM previo, EVC, IC o ERC, la respuesta casi nunca es “subir metformina” ni “agregar sulfonilurea”: agrega iSGLT2 o arGLP-1 aunque la A1c ya esté en meta.',
      trap: 'Una A1c de 6.7% en un paciente sin síntomas todavía no es diagnóstico: hay que confirmarla con una segunda prueba. Y la glucosa al azar ≥200 sin síntomas tampoco basta.',
      guide: [
        'Meta de A1c: la ADA pide <7% para la mayoría; la AACE propone ≤6.5% si se logra sin hipoglucemia. Si la pregunta no da más datos, contesta <7%.',
        'Primer fármaco: muchas guías y libros anteriores ponen la metformina como primer paso para todos. La ADA actual indica iSGLT2 o arGLP-1 desde el inicio, con o sin metformina, cuando hay ECV, IC o ERC. Si el caso trae una comorbilidad cardiorrenal, contesta con la ADA. ⚠️ Confirma con tu profesor qué versión de la GPC mexicana usa.',
        '⚠️ Depende de la guía: tamizaje. La ADA tamiza a todos los adultos desde los 35 años (antes si hay sobrepeso con algún factor de riesgo); la USPSTF lo recomienda de los 35 a los 70 años solo con sobrepeso u obesidad.'
      ],
      refs: [
        'American Diabetes Association. Standards of Care in Diabetes—2026. Diabetes Care 2026;49(Suppl 1).',
        'Davies MJ, et al. Management of hyperglycemia in type 2 diabetes, 2022. A consensus report by the ADA and the EASD. Diabetes Care 2022.',
        'US Preventive Services Task Force. Screening for prediabetes and type 2 diabetes. JAMA 2021.',
        'KDIGO 2022 Clinical Practice Guideline for Diabetes Management in Chronic Kidney Disease.',
        'Samson SL, et al. AACE Consensus Statement: Comprehensive Type 2 Diabetes Management Algorithm, 2023.'
      ]
    }
  },

  compares: {
    'sglt2-glp1': {
      topic: 'dm2', a: 'iSGLT2', b: 'arGLP-1',
      rows: [
        ['Ejemplos', 'Empagliflozina, dapagliflozina, canagliflozina', 'Semaglutida, liraglutida, dulaglutida (tirzepatida es dual GIP/GLP-1)'],
        ['Dónde actúa', 'Túbulo contorneado proximal', 'Páncreas, cerebro (saciedad) y estómago'],
        ['Mecanismo', 'Glucosuria y natriuresis', '↑ insulina dependiente de glucosa, ↓ glucagón, vaciamiento gástrico lento'],
        ['Baja la A1c', 'Moderado (≈0.5–0.8%; menos si TFG <45)', 'Alto (≈1–1.5% o más)'],
        ['Peso', '↓ 2–3 kg', '↓ de moderado a muy alto (semaglutida y tirzepatida, las de mayor efecto)'],
        ['Hipoglucemia', 'No, si se usa solo', 'No, si se usa solo'],
        ['Beneficio estrella', 'IC (FEr y FEp) y ERC', 'ECV aterosclerótica, obesidad; semaglutida: ERC'],
        ['Vía', 'Oral, una vez al día', 'Subcutánea semanal o diaria (semaglutida también oral)'],
        ['Efecto adverso clásico', 'Micosis genital, cetoacidosis euglucémica', 'Náusea y vómito, colelitiasis'],
        ['Contraindicación clásica', 'TFG <20 para iniciarlo; diálisis', 'Cáncer medular de tiroides o MEN2 (propio o familiar)']
      ]
    }
  },

  anims: {
    dm2: {
      title: 'De la insulina a los fármacos',
      steps: [
        { cap: '<b>Así entra la glucosa.</b> La insulina se une a su receptor en la célula muscular. La señal manda las vesículas con GLUT4 a la membrana, y por esos canales entra la glucosa.',
          labels: [[26, 9, 'Insulina'], [40, 70, 'Receptor'], [112, 49, 'GLUT4'], [128, 9, 'Glucosa'], [24, 108, 'Músculo']] },
        { cap: '<b>Resistencia a la insulina.</b> La insulina llega, pero la señal se bloquea dentro de la célula. El GLUT4 se queda atrapado en el citoplasma y la glucosa se acumula en la sangre.',
          labels: [[64, 86, 'Señal bloqueada'], [124, 9, 'Glucosa ↑'], [112, 108, 'GLUT4 atrapado']] },
        { cap: '<b>El páncreas compensa… y se agota.</b> Al principio la célula β produce más insulina (hiperinsulinemia) y la glucosa se mantiene. Con los años la célula β falla, la insulina cae y aparece la DM2.',
          labels: [[40, 70, 'Islote'], [126, 104, 'INS'], [146, 104, 'GLU']] },
        { cap: '<b>Metformina.</b> Activa la AMPK en el hígado y frena la gluconeogénesis: sale menos glucosa a la sangre. No estimula la insulina, por eso sola no causa hipoglucemia.',
          labels: [[44, 108, 'Hígado'], [44, 20, 'Gluconeogénesis'], [126, 40, 'Vena']] },
        { cap: '<b>iSGLT2 (-flozina).</b> En el túbulo proximal, el SGLT2 reabsorbe glucosa y sodio. La flozina lo bloquea: la glucosa y el sodio se van por la orina. La natriuresis explica el beneficio en IC y ERC.',
          labels: [[80, 14, 'Capilar'], [40, 99, 'Túbulo proximal'], [86, 46, 'SGLT2'], [148, 92, 'Orina']] },
        { cap: '<b>arGLP-1 (-glutida).</b> Imita a la incretina: más insulina solo cuando hay glucosa alta, menos glucagón, vaciamiento gástrico lento y saciedad en el cerebro. Por eso bajan tanto la A1c y el peso.',
          labels: [[28, 104, 'Páncreas'], [80, 104, 'Estómago'], [132, 104, 'Cerebro']] }
      ]
    }
  },

  cards: [
    ['Criterios diagnósticos de diabetes (4)', 'A1c ≥6.5% · glucosa en ayuno ≥126 · CTOG 2 h ≥200 · glucosa al azar ≥200 + síntomas'],
    ['Rangos de prediabetes', 'A1c 5.7–6.4% · ayuno 100–125 · CTOG 2 h 140–199 mg/dL'],
    ['¿Cuántas pruebas anormales necesitas sin hiperglucemia inequívoca?', 'Dos: dos pruebas distintas en la misma muestra o la misma prueba en otra muestra'],
    ['¿Cuándo no sirve la A1c?', 'Cuando cambia la vida del eritrocito: anemia, hemólisis, hemoglobinopatías, transfusión, embarazo, hemodiálisis'],
    ['Meta general de A1c (ADA)', '<7% · más estricta <6.5% sin hipoglucemia · menos estricta <8% en adultos mayores con comorbilidades'],
    ['Metformina según TFG', '≥45: dosis normal · 30–44: no iniciar, máx. 1 000 mg/día · <30: suspender'],
    ['Efecto adverso de la metformina a largo plazo', 'Déficit de vitamina B12 (anemia macrocítica, neuropatía)'],
    ['Efectos adversos clave de los iSGLT2', 'Micosis genital, depleción de volumen, cetoacidosis euglucémica, gangrena de Fournier (rara)'],
    ['¿Cuándo suspender un iSGLT2 antes de cirugía?', '3 días antes (ertugliflozina 4)'],
    ['Contraindicación de los arGLP-1', 'Antecedente personal o familiar de carcinoma medular de tiroides o MEN2'],
    ['DM2 + insuficiencia cardiaca', 'iSGLT2'],
    ['DM2 + ERC (TFG 20–60 o albuminuria)', 'iSGLT2 (iniciar con TFG ≥20); semaglutida como adición o alternativa'],
    ['DM2 + ECV aterosclerótica', 'arGLP-1 o iSGLT2 con beneficio CV probado, sin importar la A1c'],
    ['DM2 + obesidad (peso como prioridad)', 'Semaglutida o tirzepatida'],
    ['¿Cuándo iniciar insulina en DM2?', 'Catabolismo (pérdida de peso, cetosis), A1c >10% o glucosa ≥300 con síntomas'],
    ['Dosis inicial de insulina basal', '10 U/día o 0.1–0.2 U/kg/día; subir 2 U cada 3 días según la glucosa en ayuno'],
    ['Niveles de hipoglucemia', '1: 54–69 · 2: <54 · 3: grave, necesita ayuda de otra persona'],
    ['Regla de 15', '15–20 g de glucosa oral, revalorar en 15 min y repetir si sigue <70'],
    ['Sulfonilurea a evitar en adultos mayores y ERC', 'Glibenclamida: hipoglucemia prolongada'],
    ['Tamizaje de complicaciones en DM2', 'Al diagnóstico: fondo de ojo, CAC + TFG y pies con monofilamento; luego cada año'],
    ['Octeto ominoso (DeFronzo)', 'β: ↓ insulina · α: ↑ glucagón · hígado: ↑ glucosa · músculo: ↓ captación · grasa: ↑ lipólisis · intestino: ↓ incretinas · riñón: ↑ reabsorción · cerebro: disfunción'],
    ['LADA: cómo sospecharla y tratarla', 'Adulto delgado que falla rápido a los orales y pierde peso; anti-GAD positivo y péptido C que cae → insulina'],
    ['MODY: pistas y tratamiento', 'Inicio joven, 3 generaciones, sin anticuerpos, péptido C conservado. HNF1A: sulfonilurea a dosis baja · GCK: no requiere tratamiento'],
    ['Sobrebasalización', 'Basal >0.5 U/kg/día sin llegar a meta (o hipoglucemias, gran diferencia noche-mañana) → agrega arGLP-1 o insulina prandial'],
    ['DM2 + ERC con albuminuria pese a IECA/ARA-II a dosis máxima', 'Finerenona (TFG ≥25 y potasio normal), además del iSGLT2']
  ],

  questions: [
    q({ id: 'dm2-01', dif: 1,
      stem: 'Hombre de 45 años, asintomático, en un chequeo laboral. IMC 29. A1c 6.7%; no se midió glucosa en esa muestra. ¿Cuál es el siguiente paso?',
      opts: ['Diagnosticar diabetes tipo 2 e iniciar metformina', 'Confirmar con una segunda prueba: repetir la A1c o medir glucosa en ayuno', 'Hacer curva de tolerancia a la glucosa, que es obligatoria para el diagnóstico', 'Clasificarlo como prediabetes y repetir en 3 años', 'Medir péptido C para definir el tipo de diabetes'],
      ans: 1,
      exp: 'Sin hiperglucemia inequívoca (síntomas clásicos o crisis), la ADA pide dos resultados anormales: dos pruebas distintas en la misma muestra o la misma prueba en otra muestra. Si la segunda sale en rango de diabetes, se confirma.',
      why: ['Un solo valor alterado en un paciente sin síntomas no confirma el diagnóstico.', '', 'La CTOG es válida, pero no obligatoria; repetir la A1c o medir glucosa en ayuno es igual de válido y más simple.', '6.7% está por arriba del umbral de diabetes (≥6.5%), no en rango de prediabetes (5.7–6.4%).', 'El péptido C no se usa para diagnosticar; ayuda cuando hay duda de DM1 o LADA.'],
      ref: 'ADA 2026, secc. 2' }),

    q({ id: 'dm2-02', dif: 1,
      stem: 'Mujer de 38 años con 4 semanas de poliuria, polidipsia y pérdida de 5 kg. Glucosa plasmática al azar: 318 mg/dL. Sin cetonas. ¿Qué afirmación es correcta?',
      opts: ['Necesita una glucosa en ayuno para confirmar', 'El diagnóstico de diabetes ya está establecido', 'Debe repetirse la A1c en 3 meses antes de diagnosticar', 'Solo se diagnostica si la A1c es ≥6.5%', 'Es prediabetes hasta tener una CTOG'],
      ans: 1,
      exp: 'Una glucosa plasmática al azar ≥200 mg/dL con síntomas clásicos es diagnóstica por sí sola; no requiere confirmación. Por la pérdida de peso (catabolismo) conviene iniciar insulina, y si sospechas DM1 o LADA, pide autoanticuerpos.',
      why: ['No hace falta: la hiperglucemia con síntomas clásicos ya es inequívoca.', '', 'Retrasar el diagnóstico y el tratamiento no tiene sentido aquí.', 'Cualquier criterio sirve; no depende de la A1c.', '318 mg/dL con síntomas es diabetes, no prediabetes.'],
      ref: 'ADA 2026, secc. 2' }),

    q({ id: 'dm2-03', dif: 2,
      stem: 'Hombre de 50 años, asintomático. En la misma muestra: A1c 6.6% y glucosa en ayuno 112 mg/dL. ¿Qué haces?',
      opts: ['Diagnosticar diabetes con la A1c', 'Diagnosticar prediabetes con la glucosa', 'Repetir la A1c; si vuelve a salir ≥6.5%, es diabetes', 'Repetir la glucosa en ayuno porque la A1c no es confiable', 'Descartar diabetes porque las pruebas no coinciden'],
      ans: 2,
      exp: 'Cuando dos pruebas no coinciden, se repite la que salió por arriba del punto de corte. Si se confirma, es diabetes.',
      why: ['Un solo resultado alterado no basta sin hiperglucemia inequívoca.', 'Tiene una prueba en rango de diabetes; no puedes quedarte con la menor.', '', 'Se repite la prueba alterada (A1c), y no hay datos de que no sea confiable (anemia, hemoglobinopatía).', 'La discordancia obliga a repetir, no a descartar.'],
      ref: 'ADA 2026, secc. 2' }),

    q({ id: 'dm2-04', dif: 2,
      stem: 'Hombre de 61 años con DM2 e IAM hace 2 años (stent en la DA). Toma metformina 1 g c/12 h. A1c 6.8%, TFG 78, IMC 31. ¿Cuál es la mejor conducta?',
      opts: ['Sin cambios: la A1c ya está en meta', 'Agregar un arGLP-1 o un iSGLT2 con beneficio cardiovascular probado', 'Agregar glibenclamida para llegar a A1c <6.5%', 'Agregar sitagliptina por su perfil seguro', 'Cambiar la metformina por insulina basal'],
      ans: 1,
      exp: 'En ECV aterosclerótica establecida, la ADA indica arGLP-1 o iSGLT2 con beneficio CV demostrado para reducir eventos, sin importar la A1c ni la metformina. Con IMC 31, un arGLP-1 (semaglutida, liraglutida, dulaglutida) además ayuda a bajar de peso.',
      why: ['La indicación es por riesgo cardiovascular, no por glucosa.', '', 'Las sulfonilureas no reducen eventos CV, causan hipoglucemia y aumentan el peso.', 'Los iDPP-4 son neutros en eventos CV: no dan la protección que necesita.', 'No hay indicación de insulina: A1c en meta y sin catabolismo.'],
      ref: 'ADA 2026, secc. 9–10' }),

    q({ id: 'dm2-05', dif: 1,
      stem: 'Mujer de 67 años con DM2 e insuficiencia cardiaca con FEVI 30% (NYHA II). Toma metformina. A1c 7.6%. ¿Qué agregas?',
      opts: ['Pioglitazona', 'Saxagliptina', 'Dapagliflozina', 'Glimepirida', 'Insulina NPH'],
      ans: 2,
      exp: 'Los iSGLT2 (dapagliflozina, empagliflozina) reducen la hospitalización por IC y la muerte cardiovascular en IC con FE reducida, con o sin diabetes. Son uno de los 4 pilares de la IC con FEr.',
      why: ['Retiene líquidos: contraindicada en IC NYHA III–IV y no recomendada en IC sintomática.', 'Aumentó la hospitalización por IC (SAVOR-TIMI 53).', '', 'No da beneficio en IC y causa hipoglucemia.', 'No es necesaria con A1c 7.6% y no protege el corazón.'],
      ref: 'ADA 2026 secc. 9–10 · ESC IC 2021/2023' }),

    q({ id: 'dm2-06', dif: 2,
      stem: 'Hombre de 64 años con DM2 y ERC: TFG 38 mL/min/1.73 m², CAC 450 mg/g. Toma metformina 1 g c/12 h. A1c 7.3%. ¿Qué haces?',
      opts: ['Suspender la metformina e iniciar glibenclamida', 'Bajar la metformina a 1 000 mg/día y agregar un iSGLT2', 'Mantener la misma dosis de metformina y agregar pioglitazona', 'Suspender todo e iniciar insulina basal', 'Dejar todo igual y repetir la TFG en 1 año'],
      ans: 1,
      exp: 'Con TFG 30–44 la metformina se puede mantener a dosis reducida (máximo 1 000 mg/día) y se suspende si baja de 30. Con ERC y albuminuria, el iSGLT2 (se inicia con TFG ≥20) frena la progresión renal y reduce eventos CV. Si no toma IECA o ARA-II, agrégalo a dosis máxima tolerada.',
      why: ['No hay que suspenderla con TFG 38, y la glibenclamida es la peor opción en ERC (hipoglucemia prolongada).', '', 'La dosis plena no es adecuada con TFG <45, y la pioglitazona no protege el riñón y retiene líquidos.', 'No hay indicación de insulina y perderías la protección renal del iSGLT2.', 'Con albuminuria A3 y un tratamiento con beneficio probado disponible, esperar es un error.'],
      ref: 'ADA 2026 secc. 9 y 11 · KDIGO 2022 DM en ERC' }),

    q({ id: 'dm2-07', dif: 1,
      stem: 'Mujer de 44 años con DM2 de 3 años, IMC 38, sin ECV ni ERC. Toma metformina 2 g/día. A1c 8.1%. Su prioridad es bajar de peso. ¿Qué agregas?',
      opts: ['Glimepirida', 'Pioglitazona', 'Semaglutida o tirzepatida', 'Insulina glargina', 'Sitagliptina'],
      ans: 2,
      exp: 'Cuando el peso es prioridad, la ADA recomienda los fármacos con mayor efecto en el peso: semaglutida o tirzepatida (agonista dual GIP/GLP-1). Además bajan mucho la A1c sin causar hipoglucemia.',
      why: ['Sulfonilurea: aumenta el peso y causa hipoglucemia.', 'Aumenta el peso y retiene líquidos.', '', 'La insulina aumenta el peso y no hay catabolismo que la justifique.', 'Peso neutro y potencia modesta.'],
      ref: 'ADA 2026, secc. 8–9' }),

    q({ id: 'dm2-08', dif: 2,
      stem: 'Hombre de 47 años con poliuria, polidipsia y pérdida de 7 kg en 2 meses. A1c 11.4%, glucosa 342 mg/dL. Cetonas negativas y pH normal. ¿Cuál es el mejor tratamiento inicial?',
      opts: ['Metformina sola y control en 3 meses', 'Cambios en el estilo de vida por 3 meses antes de cualquier fármaco', 'Insulina basal, con o sin metformina', 'Sitagliptina con metformina', 'Glibenclamida a dosis máxima'],
      ans: 2,
      exp: 'Con síntomas catabólicos (pérdida de peso) o A1c >10% / glucosa ≥300 mg/dL, la ADA recomienda iniciar insulina. Cuando se controla la glucotoxicidad, muchas veces se puede reducir o retirar.',
      why: ['Insuficiente para una A1c >11% con catabolismo.', 'Retrasar el tratamiento con este grado de hiperglucemia es inseguro.', '', 'La combinación no alcanza a bajar 4–5 puntos de A1c ni corrige el catabolismo.', 'No corrige el catabolismo y causa hipoglucemia.'],
      ref: 'ADA 2026, secc. 9' }),

    q({ id: 'dm2-09', dif: 3,
      stem: 'Mujer de 58 años con DM2 que toma metformina y empagliflozina. Postoperatorio de colecistectomía con ayuno prolongado. Presenta náusea, vómito y taquipnea. Glucosa 198 mg/dL, pH 7.17, HCO₃ 11 mEq/L, brecha aniónica 24, β-hidroxibutirato elevado. ¿Diagnóstico?',
      opts: ['Acidosis láctica por metformina', 'Cetoacidosis euglucémica asociada a iSGLT2', 'Cetosis de ayuno sin importancia clínica', 'Estado hiperosmolar hiperglucémico', 'No puede ser cetoacidosis porque la glucosa es <250 mg/dL'],
      ans: 1,
      exp: 'Los iSGLT2 pueden causar cetoacidosis con glucosa normal o poco elevada (<250 mg/dL), sobre todo con ayuno, cirugía, enfermedad aguda o reducción de insulina. Se trata como cualquier CAD: líquidos, insulina IV con dextrosa desde el inicio, potasio y suspender el iSGLT2. Prevención: suspenderlo 3 días antes de una cirugía programada.',
      why: ['En la acidosis láctica lo elevado es el lactato; aquí son las cetonas.', '', 'La cetosis de ayuno no produce pH 7.17 ni HCO₃ 11.', 'El EHH tiene glucosa >600 y osmolaridad alta, sin acidosis importante.', 'Esa es justo la trampa: con iSGLT2 la glucosa puede ser casi normal.'],
      ref: 'ADA 2026, secc. 9 y 16' }),

    q({ id: 'dm2-10', dif: 2,
      stem: 'Mujer de 79 años con DM2, TFG 34, vive sola. Toma glibenclamida 5 mg c/12 h. Ha tenido 3 episodios de confusión y sudoración por la mañana; en uno, glucosa capilar de 52 mg/dL. A1c 6.4%. ¿Qué haces?',
      opts: ['Bajar la glibenclamida a 5 mg/día', 'Suspender la glibenclamida, usar un fármaco sin riesgo de hipoglucemia (p. ej., linagliptina) y aceptar una A1c <8%', 'Agregar una colación nocturna y mantener la dosis', 'Cambiar a insulina NPH nocturna', 'Dejar todo igual: su A1c está en meta'],
      ans: 1,
      exp: 'La glibenclamida tiene metabolitos activos de eliminación renal: en adultos mayores con ERC causa hipoglucemias prolongadas y graves. Suspéndela, usa fármacos sin riesgo de hipoglucemia (la linagliptina no requiere ajuste renal) y relaja la meta: en adultos mayores con comorbilidades, A1c <8% es adecuada.',
      why: ['Bajar la dosis no elimina el riesgo; el fármaco no es adecuado para ella.', '', 'Parchar con comida no resuelve el problema de fondo.', 'Cambia un riesgo de hipoglucemia por otro, sin indicación de insulina.', 'Una A1c de 6.4% con hipoglucemias es sobretratamiento.'],
      ref: 'ADA 2026, secc. 6 y 13' }),

    q({ id: 'dm2-11', dif: 1,
      stem: 'Hombre de 55 años con DM2 en tratamiento con insulina. Está tembloroso y sudoroso, consciente y puede tragar. Glucosa capilar 51 mg/dL. ¿Clasificación y manejo?',
      opts: ['Nivel 1; esperar a la siguiente comida', 'Nivel 2; 15–20 g de glucosa oral y repetir la glucosa en 15 minutos', 'Nivel 3; glucagón intramuscular inmediato', 'Nivel 2; dextrosa al 50% IV obligatoria', 'Nivel 1; 50 g de glucosa oral'],
      ans: 1,
      exp: 'Nivel 1: 54–69 mg/dL. Nivel 2: <54 mg/dL. Nivel 3: evento grave con alteración mental o física que requiere ayuda de otra persona, sin importar la cifra. Si está consciente y puede tragar, regla de 15: 15–20 g de glucosa, revalorar en 15 min, repetir si sigue <70 y luego dar una colación.',
      why: ['51 es nivel 2 y se trata de inmediato.', '', 'El nivel 3 se define por necesitar ayuda de otra persona; él está consciente y puede comer.', 'La vía oral es de elección si puede tragar.', '51 no es nivel 1, y 50 g es una dosis excesiva.'],
      ref: 'ADA 2026, secc. 6' }),

    q({ id: 'dm2-12', dif: 2,
      stem: 'Hombre de 42 años con DM2 e IMC 36 que quiere “la inyección para bajar de peso”. Su hermana tuvo carcinoma medular de tiroides por MEN2A. ¿Qué fármaco está contraindicado?',
      opts: ['Empagliflozina', 'Metformina', 'Semaglutida', 'Linagliptina', 'Pioglitazona'],
      ans: 2,
      exp: 'Los arGLP-1 (y la tirzepatida) están contraindicados con antecedente personal o familiar de carcinoma medular de tiroides o MEN2, por los tumores de células C que se observaron en roedores.',
      why: ['No tiene esa contraindicación.', 'No tiene relación con el cáncer medular.', '', 'No está contraindicada en MEN2.', 'No está contraindicada por este antecedente, aunque aumenta el peso.'],
      ref: 'ADA 2026, secc. 9 · ficha técnica' }),

    q({ id: 'dm2-13', dif: 1,
      stem: 'Hombre de 52 años con DM2 confirmada hoy. ¿Qué tamizaje de complicaciones le corresponde ahora?',
      opts: ['Ninguno; se inicia a los 5 años del diagnóstico', 'Solo fondo de ojo', 'Fondo de ojo, cociente albúmina/creatinina con TFG y revisión de pies con monofilamento', 'Solo TFG', 'Electromiografía y angiografía con fluoresceína'],
      ans: 2,
      exp: 'En la DM2 las complicaciones pueden existir desde el diagnóstico porque la enfermedad pasó años sin detectarse. Por eso el tamizaje de retinopatía, nefropatía y neuropatía se hace al diagnóstico y luego cada año. En DM1 se inicia a los 5 años.',
      why: ['Eso aplica a la DM1, no a la DM2.', 'Incompleto: faltan riñón y pies.', '', 'Incompleto: la TFG sola no detecta la albuminuria temprana.', 'No son pruebas de tamizaje.'],
      ref: 'ADA 2026, secc. 11–12' }),

    q({ id: 'dm2-14', dif: 2,
      stem: 'Mujer de 66 años con DM2 de 12 años tratada con metformina 2 g/día. Tiene parestesias en guante y calcetín y fatiga. Hb 10.8 g/dL, VCM 108 fL. ¿Qué debes medir?',
      opts: ['Ferritina', 'Vitamina B12', 'Lactato sérico', 'Solo TSH', 'Anticuerpos anti-GAD'],
      ans: 1,
      exp: 'El uso prolongado de metformina reduce la absorción de B12 en el íleon terminal. La deficiencia da anemia macrocítica y una neuropatía que se confunde con la diabética. La ADA recomienda medir B12 periódicamente en usuarios crónicos, sobre todo si hay neuropatía o anemia.',
      why: ['La ferropenia da anemia microcítica, no un VCM de 108.', '', 'No hay datos de acidosis.', 'El hipotiroidismo puede dar macrocitosis leve, pero medir solo TSH dejaría pasar la causa esperada.', 'Sirven para autoinmunidad pancreática, no para este cuadro.'],
      ref: 'ADA 2026, secc. 9' }),

    q({ id: 'dm2-15', dif: 2,
      stem: 'Hombre de 81 años con DM2, IC, ERC G3b, deterioro cognitivo leve y dos caídas este año. Vive con su hija. ¿Qué meta de A1c es razonable?',
      opts: ['<6.0%', '<6.5%', '<7.0%', '<8.0%', 'La glucosa ya no importa'],
      ans: 3,
      exp: 'En adultos mayores con varias enfermedades crónicas o deterioro cognitivo leve-moderado, la ADA sugiere A1c <8.0%. Las metas estrictas aumentan hipoglucemias, caídas y mortalidad sin beneficio a corto plazo. En el muy frágil o con expectativa de vida corta no se persigue la A1c: se evitan la hipoglucemia y la hiperglucemia sintomática.',
      why: ['Una meta tan estricta aumenta hipoglucemias y caídas.', 'Igual: demasiado estricta para él.', 'Es la meta para adultos mayores sanos, no para este perfil.', '', 'Sí importa: hay que evitar la hipoglucemia y la hiperglucemia sintomática.'],
      ref: 'ADA 2026, secc. 13' }),

    q({ id: 'dm2-16', dif: 2,
      stem: 'Hombre de 39 años, IMC 22, diagnosticado con DM2 hace 10 meses. Al inicio respondió a metformina y glimepirida, pero hoy tiene A1c 9.8% y bajó 4 kg sin dieta. Tiene vitíligo. Anti-GAD65 positivos y péptido C bajo. ¿Diagnóstico y manejo?',
      opts: ['DM2 con mal apego; agregar sitagliptina', 'Diabetes autoinmune latente del adulto (LADA); iniciar insulina', 'MODY; subir la glimepirida', 'Diabetes por pancreatitis crónica; enzimas pancreáticas', 'DM2; agregar pioglitazona'],
      ans: 1,
      exp: 'LADA: diabetes autoinmune de inicio en el adulto que al principio parece tipo 2. Pistas: peso normal, falla rápida a los orales, pérdida de peso, otra autoinmunidad y anti-GAD positivos con péptido C bajo. La célula β se está destruyendo: necesita insulina pronto.',
      why: ['El problema no es el apego: los anticuerpos y el péptido C bajo indican destrucción autoinmune de la célula β.', '', 'El MODY tiene anticuerpos negativos y péptido C conservado.', 'No hay antecedente de pancreatitis ni datos de insuficiencia exocrina.', 'Agregar orales solo retrasa la insulina que necesita.'],
      ref: 'ADA 2026, secc. 2' }),

    q({ id: 'dm2-17', dif: 3,
      stem: 'Mujer de 63 años, 80 kg, con DM2 en metformina y glargina 72 U/día. Glucosa en ayuno 110–125 mg/dL, pero de 240–280 por la tarde. Tuvo dos hipoglucemias nocturnas este mes. A1c 8.8%. ¿Qué haces?',
      opts: ['Subir la glargina a 80 U/día', 'No subir la basal: agregar un arGLP-1 (o insulina prandial)', 'Cambiar la glargina por NPH', 'Agregar glibenclamida', 'Suspender la metformina'],
      ans: 1,
      exp: 'Basal de 0.9 U/kg/día, ayuno en meta, hiperglucemia después de comer e hipoglucemias nocturnas = sobrebasalización (señal de alerta: basal >0.5 U/kg/día). Subir la basal solo aumenta la hipoglucemia; el problema es la glucosa posprandial. Agrega un arGLP-1 (o una combinación fija con la basal) o insulina prandial antes de la comida principal.',
      why: ['El ayuno ya está en meta; más basal solo da más hipoglucemia nocturna.', '', 'La NPH tiene pico y causa más hipoglucemia nocturna que la glargina.', 'Sulfonilurea con dosis alta de insulina aumenta la hipoglucemia y el peso.', 'La metformina sigue siendo útil y no causa hipoglucemia.'],
      ref: 'ADA 2026, secc. 9' }),

    q({ id: 'dm2-18', dif: 3,
      stem: 'Hombre de 66 años con DM2 y ERC: TFG 48 mL/min/1.73 m², CAC 520 mg/g, K 4.6 mEq/L. Toma losartán 100 mg/día, empagliflozina y metformina. A1c 6.9%, PA 128/78. ¿Qué agregas para frenar la ERC y reducir eventos CV?',
      opts: ['Lisinopril (doble bloqueo del SRAA)', 'Finerenona', 'Espironolactona a dosis alta', 'Aliskiren', 'Nada: la A1c y la PA están en meta'],
      ans: 1,
      exp: 'Con DM2 y albuminuria que persiste pese a IECA o ARA-II a dosis máxima (y un iSGLT2), la ADA y KDIGO recomiendan finerenona, un antagonista mineralocorticoide no esteroideo, si la TFG es ≥25 y el potasio es normal. Redujo la progresión renal y los eventos CV (FIDELIO-DKD, FIGARO-DKD). Vigila el potasio.',
      why: ['IECA + ARA-II aumenta la hiperkalemia y la lesión renal aguda sin beneficio.', '', 'No tiene la evidencia renal de la finerenona en DM2, y da más hiperkalemia y ginecomastia.', 'Aliskiren con ARA-II en diabetes aumentó los eventos adversos (ALTITUDE).', 'Una albuminuria de 520 mg/g indica riesgo alto aunque la A1c y la PA estén en meta.'],
      ref: 'ADA 2026, secc. 11 · KDIGO 2022 DM en ERC' }),

    q({ id: 'dm2-19', dif: 2,
      stem: 'Mujer de 34 años con esferocitosis hereditaria y hemólisis crónica. A1c 5.4%, pero en dos días distintos tuvo glucosa en ayuno de 134 y 141 mg/dL. ¿Cómo lo interpretas?',
      opts: ['No es diabetes: la A1c es normal', 'Diabetes: dos glucosas en ayuno ≥126 la confirman; la A1c es falsamente baja por la hemólisis', 'Prediabetes; repetir en 3 años', 'Hacer CTOG antes de concluir', 'La A1c es falsamente alta por la anemia'],
      ans: 1,
      exp: 'La A1c depende de la vida del eritrocito. Con hemólisis, sangrado o transfusión los eritrocitos viven menos y la A1c sale falsamente baja. Dos glucosas en ayuno ≥126 mg/dL confirman diabetes. En ella, el control se hace con glucosa capilar o monitoreo continuo, no con A1c.',
      why: ['La A1c no es confiable con hemólisis; las glucosas ya confirman el diagnóstico.', '', 'Dos glucosas en ayuno ≥126 están en rango de diabetes, no de prediabetes.', 'No hace falta: ya tiene dos resultados diagnósticos.', 'La hemólisis acorta la vida del eritrocito y baja la A1c; no la sube.'],
      ref: 'ADA 2026, secc. 2 y 6' }),

    q({ id: 'dm2-20', dif: 2,
      stem: 'Hombre de 58 años con DM2, sin ECV, IC ni ERC. Toma metformina 2 g/día y sitagliptina 100 mg/día. A1c 8.4%, IMC 31, sin síntomas catabólicos. ¿Cuál es el siguiente paso más adecuado?',
      opts: ['Agregar semaglutida y continuar la sitagliptina', 'Cambiar la sitagliptina por un arGLP-1 (semaglutida o dulaglutida)', 'Iniciar insulina basal y continuar todo', 'Agregar glibenclamida', 'Subir la metformina a 3 g/día'],
      ans: 1,
      exp: 'Cuando hace falta más potencia, la ADA prefiere un arGLP-1 (o tirzepatida) antes que la insulina, sobre todo con obesidad. Pero los iDPP-4 y los arGLP-1 actúan en la misma vía de la incretina: no se combinan. Al iniciar el arGLP-1 se suspende la sitagliptina.',
      why: ['iDPP-4 + arGLP-1 no suma beneficio: es la misma vía.', '', 'Sin catabolismo ni A1c >10% se prefiere el arGLP-1: baja más el peso y causa menos hipoglucemia.', 'Causa hipoglucemia y aumenta el peso.', 'Rebasa la dosis máxima y no bajaría 1.4 puntos de A1c.'],
      ref: 'ADA 2026, secc. 9' })
  ],

  cases: [
    { id: 'g-dm2', topic: 'dm2', subj: 'endo',
      title: 'La consulta de don Ramiro', place: 'Consulta externa de Medicina Interna',
      patient: { name: 'Ramiro', age: 56, sex: 'H', skin: '#C98B62', hair: '#2A1C14', gown: '#5BA7E0' },
      intro: 'Chofer de 56 años con IMC 33. Tuvo un IAM hace 2 años (stent en la DA). Lo mandan del trabajo porque le salió “alta el azúcar”.',
      extra: { label: 'GLU', unit: 'mg/dL' },
      start: { FC: 78, PAS: 138, PAD: 86, SpO2: 97, FR: 16, X: '—' },
      nodes: [
        { tag: 'Consulta 1', ecg: 'normal',
          text: 'Asintomático. En el laboratorio de la empresa: A1c 6.8%. En esa muestra no se midió glucosa.',
          q: '¿Qué haces?',
          A: { t: 'Diagnosticar DM2 hoy e iniciar tratamiento', ok: false, res: 'Etiquetaste diabetes con un solo resultado en un paciente sin síntomas.' },
          B: { t: 'Confirmar con una segunda prueba: glucosa en ayuno o repetir la A1c', ok: true, res: 'Al día siguiente: glucosa plasmática en ayuno de 141 mg/dL. Diagnóstico confirmado.', vit: { X: 141 } },
          why: 'Sin hiperglucemia inequívoca se necesitan dos resultados alterados, en la misma muestra o en muestras distintas.' },
        { tag: 'Consulta 1 · tratamiento', ecg: 'normal', vit: { X: 141 },
          text: 'DM2 confirmada. TFG 82, sin albuminuria. Recuerda que tuvo un IAM hace 2 años.',
          q: '¿Con qué inicias?',
          A: { t: 'Metformina más un arGLP-1 o iSGLT2 con beneficio cardiovascular probado', ok: true, res: 'Inicias metformina titulada y semaglutida semanal. Le explicas que la náusea es esperable al subir la dosis.', vit: { X: 118 } },
          B: { t: 'Metformina sola y cita en 3 meses', ok: false, res: 'La glucosa baja, pero no le diste la protección cardiovascular que necesita alguien con IAM previo.', vit: { X: 128 } },
          why: 'Con ECV aterosclerótica establecida, la ADA indica arGLP-1 o iSGLT2 con beneficio CV probado desde el inicio, sin importar la A1c ni la metformina.' },
        { tag: '6 meses después', ecg: 'normal', vit: { FC: 74, PAS: 128, PAD: 80, X: 112 },
          text: 'Bajó 6 kg y su A1c es 6.6%. Se agregó empagliflozina por albuminuria nueva (CAC 60 mg/g). La próxima semana lo operan de una hernia inguinal.',
          q: '¿Qué indicas sobre la empagliflozina?',
          A: { t: 'Seguir tomándola hasta la mañana de la cirugía', ok: false, res: 'Llegaría a cirugía con un iSGLT2 y en ayuno: riesgo alto de cetoacidosis euglucémica.' },
          B: { t: 'Suspenderla 3 días antes de la cirugía y reiniciarla cuando coma y esté estable', ok: true, res: 'Le das las indicaciones por escrito, para él y para el cirujano.' },
          why: 'Los iSGLT2 se suspenden 3 días antes de una cirugía programada (ertugliflozina, 4) por el riesgo de cetoacidosis euglucémica.' },
        { tag: 'Postoperatorio, día 1', ecg: 'tachy', vit: { FC: 116, PAS: 104, PAD: 64, SpO2: 97, FR: 28, X: 196 },
          text: 'En el otro hospital no leyeron tu nota y siguió con la empagliflozina. Lleva 36 h de ayuno. Náusea, vómito, dolor abdominal y respiración profunda. pH 7.18, HCO₃ 11, brecha aniónica 24, β-hidroxibutirato alto.',
          q: '¿Qué está pasando?',
          A: { t: 'No es cetoacidosis porque la glucosa es <250: antiemético y observar', ok: false, res: 'Cuatro horas después: pH 7.08 y más taquipnea. Lo pasan a terapia intensiva.', vit: { FC: 128, PAS: 92, PAD: 56, FR: 32 } },
          B: { t: 'Cetoacidosis euglucémica por iSGLT2: suspenderlo, líquidos, insulina IV con dextrosa y potasio', ok: true, res: 'En 18 h se cierra la brecha aniónica. Pasa a insulina subcutánea y luego a su esquema.', ecg: 'normal', vit: { FC: 92, PAS: 122, PAD: 76, FR: 18, X: 150 } },
          why: 'Con iSGLT2 la CAD puede cursar con glucosa <250 mg/dL. Se trata como cualquier CAD, pero con dextrosa desde el inicio para poder dar insulina sin causar hipoglucemia.' },
        { tag: 'Un año después', ecg: 'normal', vit: { FC: 76, PAS: 126, PAD: 78, SpO2: 97, FR: 16, X: 124 },
          text: 'Su ERC avanzó: TFG 38 mL/min/1.73 m² y CAC 350 mg/g. Toma metformina 1 g c/12 h, semaglutida y empagliflozina. A1c 6.9%.',
          q: '¿Qué ajustas?',
          A: { t: 'Suspender la metformina por la TFG', ok: false, res: 'Pierdes un fármaco útil y barato: con TFG 38 todavía se puede usar a dosis reducida.', vit: { X: 150 } },
          B: { t: 'Bajar la metformina a 1 000 mg/día y continuar empagliflozina y semaglutida', ok: true, res: 'Agregas losartán titulado y pides CAC y TFG cada 3–6 meses.' },
          why: 'TFG 30–44: metformina máximo 1 000 mg/día (suspender si <30). El iSGLT2 se mantiene aunque la TFG baje, hasta que requiera diálisis. Con albuminuria, agrega IECA o ARA-II a dosis máxima tolerada.' },
        { tag: 'Su papá, en la sala de espera', ecg: 'tachy', vit: { FC: 98, PAS: 110, PAD: 70, SpO2: 96, FR: 18, X: 46 },
          text: 'Don Aurelio, 84 años, frágil, TFG 30, toma glibenclamida 5 mg c/12 h. Está somnoliento y sudoroso, pero responde y traga bien. Glucosa capilar 46 mg/dL.',
          q: '¿Qué haces?',
          A: { t: '15–20 g de glucosa oral, repetir en 15 min, observarlo varias horas y suspender la glibenclamida', ok: true, res: 'Sube a 112 mg/dL. Lo observas por la vida media larga de la sulfonilurea, cambias a linagliptina y relajas su meta de A1c.', ecg: 'normal', vit: { FC: 84, X: 112 } },
          B: { t: 'Darle un jugo y mandarlo a casa con la misma dosis', ok: false, res: 'Regresa en la madrugada inconsciente: la glibenclamida seguía actuando.', vit: { X: 38 } },
          why: 'Hipoglucemia nivel 2 (<54 mg/dL). La glibenclamida tiene metabolitos activos de eliminación renal: en adultos mayores con ERC la hipoglucemia es prolongada. Requiere observación y cambio de fármaco.' }
      ] }
  ]
};
