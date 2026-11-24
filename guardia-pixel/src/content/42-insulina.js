// Tema 33 · Insulinoterapia (Endocrinología, semana 6)
const T = { topic: 'insulina', subj: 'endo' };
const q = (o) => ({ ...T, ...o });
const ENDO = { short: 'De tu Guía Endocrino', vs: 'tu guía', name: 'Guía Endocrino · Ximena Cors Cepeda (EMIS 5)', url: 'https://docs.google.com/document/d/1ng1BpGOd1JywQaChMt0YWLQIRemXzi5hyUV_XVmYpsM/edit' };

export default {
  lessons: {
    insulina: {
      hook: 'La insulina se entiende en dos piezas: la basal (la que frena al hígado en ayuno y de noche) y la prandial (la que cubre cada comida). Sabe cuándo iniciarla, con cuánto, cómo titularla y qué hacer con una hipoglucemia.',
      yt: 'insulin therapy basal bolus types',
      nn: [],
      video: [
        { ch: 'Qué hace la insulina', sc: [
          { v: { k: 'title', t: 'Insulinoterapia', s: 'Semana 6 · Endocrinología' },
            say: 'Semana seis: la insulina. Es el fármaco que más miedo da recetar, pero con cuatro reglas se vuelve fácil: cuándo iniciarla, con cuánto empezar, cómo titularla con la glucosa en ayuno y cuándo dejar de subir la basal. Al final, la hipoglucemia y los fenómenos de la madrugada.' },
          { v: { k: 'case', t: 'Azúcar de 300', p: { name: 'Don Ignacio', age: 58, sex: 'H', skin: '#C98B62', hair: '#7A6A5A', gown: '#B48CFF' }, text: 'DM2 de 9 años con metformina 1 g c/12 h y glibenclamida. Bajó 6 kg en 2 meses, orina mucho y tiene sed.', vit: { A1c: '11.8%', Glu: '312', Peso: '74 kg' } },
            say: 'Don Ignacio tiene cincuenta y ocho años y nueve con diabetes tipo dos. Toma metformina y glibenclamida. En dos meses bajó seis kilos, orina mucho y tiene sed. Su hemoglobina glucosilada es de once punto ocho y la glucosa de trescientos doce.' },
          { v: { k: 'list', t: 'Qué hace la insulina', items: ['Mete glucosa al músculo y la grasa', 'Forma glucógeno y triglicéridos', 'Frena la gluconeogénesis y la lipólisis', 'Frena la cetogénesis', 'Mete el potasio a la célula'] },
            say: 'La insulina es la hormona anabólica: mete la glucosa al músculo y la grasa, forma glucógeno y triglicéridos, y frena la producción de glucosa en el hígado, la lipólisis y la formación de cetonas. Además mete el potasio a la célula, por eso trata la hiperkalemia y puede causar hipokalemia.' }
        ] },
        { ch: 'Los tipos de insulina', sc: [
          { v: { k: 'vs', a: 'Tipo', b: 'Acción', rows: [['Ultrarrápida: lispro, aspart', 'Inicio 5 a 15 min, dura 3 a 5 h', 'Justo antes de comer'], ['Rápida: regular', 'Inicio 30 min, dura 6 a 8 h', 'La única IV'], ['Intermedia: NPH', 'Pico a las 4 a 10 h', 'Dos veces al día; esteroides'], ['Larga: glargina, detemir', 'Sin pico, 24 h', 'Basal una vez al día'], ['Ultralarga: degludec', 'Más de 36 h', 'Menos hipoglucemia nocturna']] },
            say: 'Las insulinas por duración. Ultrarrápidas, lispro y aspart: empiezan en cinco a quince minutos y se ponen justo antes de comer. Rápida, la regular: empieza en treinta minutos y es la única que va por vena. Intermedia, la NPH: tiene un pico de cuatro a diez horas y se usa dos veces al día. Larga, glargina: sin pico, dura veinticuatro horas. Y ultralarga, degludec: más de treinta y seis, con menos hipoglucemia nocturna.' },
          { v: { k: 'tip', kind: 'pearl', t: 'NPH y regular se mezclan: primero se carga la regular (clara antes que turbia). La glargina no se mezcla.' },
            say: 'Perla: la NPH y la regular se pueden mezclar en la misma jeringa, cargando primero la regular, la clara antes que la turbia. La glargina, por su pH ácido, no se mezcla con nada.' }
        ] },
        { ch: 'Cuándo y cómo iniciar', sc: [
          { v: { k: 'list', t: 'Insulina de entrada en DM2', items: ['A1c mayor de 10% o glucosa 300 o más', 'Síntomas catabólicos: pérdida de peso, poliuria', 'Cetosis', 'Duda de DM1 o LADA', 'Embarazo, hospitalización, ERC avanzada'] },
            say: 'En la diabetes tipo dos se inicia insulina de entrada si la hemoglobina glucosilada pasa de diez o la glucosa de trescientos, si hay síntomas catabólicos como pérdida de peso y poliuria, si hay cetosis, si se sospecha diabetes tipo uno o LADA, y en embarazo, hospitalización o enfermedad renal avanzada. Si no, antes de la insulina se considera un agonista de GLP uno.' },
          { v: { k: 'flow', t: 'Iniciar la basal', steps: ['10 U al día o 0.1 a 0.2 U/kg', 'Mantener metformina (y iSGLT2 o arGLP-1)', 'Suspender o bajar la sulfonilurea', 'Titular con la glucosa en ayuno', '+2 U cada 3 días hasta 80 a 130'] },
            say: 'La insulina basal se inicia con diez unidades al día o cero punto uno a cero punto dos por kilo. Se mantiene la metformina y se suspende o baja la sulfonilurea, que suma hipoglucemia. Se titula con la glucosa en ayuno: dos unidades más cada tres días hasta llegar a ochenta a ciento treinta.' },
          { v: { k: 'quiz', q: 'Don Ignacio, 74 kg, A1c 11.8% con pérdida de peso. ¿Cómo inicias?', opts: ['Subir la glibenclamida', 'Glargina 10 a 15 U, seguir metformina, quitar glibenclamida', 'Solo dieta'], a: 1 },
            say: 'Pausa. Don Ignacio pesa setenta y cuatro kilos, tiene glucosilada de once punto ocho y está bajando de peso. ¿Cómo inicias?',
            exp: 'Glargina de diez a quince unidades en la noche, cero punto dos por kilo como máximo, manteniendo la metformina y suspendiendo la glibenclamida. Con glucosilada mayor de diez y síntomas catabólicos, la insulina va de entrada.' },
          { v: { k: 'list', t: 'Si hay hipoglucemia', items: ['Sin causa clara: bajar 10 a 20%', 'Revisar horarios de comida y ejercicio', 'Revisar la función renal'] },
            say: 'Si aparece hipoglucemia sin causa clara, se baja la dosis diez a veinte por ciento y se revisan los horarios de comida, el ejercicio y la función renal.' }
        ] },
        { ch: 'Cuándo dejar de subir la basal', sc: [
          { v: { k: 'big', h: 'Sobrebasalización', t: '>0.5 U/kg/día', s: 'Basal alta, diferencia noche-mañana ≥50 mg/dL, hipoglucemias o ayuno en meta con A1c alta: ya no subas la basal.' },
            say: 'La sobrebasalización: cuando la basal pasa de cero punto cinco unidades por kilo al día, la glucosa baja cincuenta o más de la noche a la mañana, hay hipoglucemias, o el ayuno ya está en meta pero la glucosilada no, deja de subir la basal. El problema es la glucosa después de comer.' },
          { v: { k: 'flow', t: 'Agregar prandial', steps: ['4 U o 10% de la basal', 'Ultrarrápida antes de la comida más grande', 'Titular +1 a 2 U dos veces por semana', 'Si no basta: antes de cada comida (basal-bolo)', 'Alternativa: arGLP-1 o premezcla'] },
            say: 'Entonces se agrega insulina prandial: cuatro unidades, o diez por ciento de la basal, de ultrarrápida antes de la comida más grande, titulando una o dos unidades dos veces por semana. Si no basta, antes de cada comida: el esquema basal bolo. Las alternativas son un agonista de GLP uno o una premezcla dos veces al día.' },
          { v: { k: 'quiz', q: 'Glargina 0.6 U/kg, ayuno de 110, A1c 8.4%. ¿Qué haces?', opts: ['Subir la glargina', 'Agregar prandial en la comida principal o arGLP-1', 'Suspender la metformina'], a: 1 },
            say: 'Pausa. Paciente con glargina a cero punto seis unidades por kilo, glucosa de ayuno de ciento diez y glucosilada de ocho punto cuatro. ¿Qué haces?',
            exp: 'Agregar insulina prandial en la comida principal o un agonista de GLP uno. El ayuno ya está en meta y la basal pasa de cero punto cinco por kilo: subirla solo causaría hipoglucemia.' }
        ] },
        { ch: 'Hospital, hipoglucemia y madrugada', sc: [
          { v: { k: 'list', t: 'En el hospital', items: ['Meta 140 a 180 mg/dL', 'Come: basal-bolo-corrección 0.3 a 0.5 U/kg', 'No come: basal + corrección', 'Escala móvil sola: NO', 'Esteroides: NPH en la mañana'] },
            say: 'En el hospital la meta es ciento cuarenta a ciento ochenta. Si el paciente come, basal, bolo y corrección, con dosis total de cero punto tres a cero punto cinco por kilo; si no come, basal y corrección. La escala móvil sola se desaconseja porque persigue la hiperglucemia. Y la hiperglucemia por prednisona matutina se trata con NPH en la mañana.' },
          { v: { k: 'flow', t: 'Hipoglucemia: regla del 15', steps: ['Glucosa menor de 70', '15 g de glucosa oral', 'Revisar a los 15 minutos', 'Repetir si sigue menor de 70', 'Inconsciente: glucagón o dextrosa 50% IV'] },
            say: 'Hipoglucemia es glucosa menor de setenta; menor de cincuenta y cuatro es clínicamente importante, y grave si necesita ayuda de otra persona. Se trata con la regla del quince: quince gramos de glucosa, revisar a los quince minutos y repetir si sigue baja. Si está inconsciente, glucagón o dextrosa al cincuenta por ciento intravenosa.' },
          { v: { k: 'vs', a: 'Fenómeno del alba', b: 'Efecto Somogyi', rows: [['Glucosa a las 3 am', 'Normal o alta', 'Baja (hipoglucemia)'], ['Causa', 'Hormonas de la madrugada', 'Rebote tras hipoglucemia'], ['Glucosa en ayuno', 'Alta', 'Alta'], ['Qué hacer', 'Subir la basal nocturna', 'BAJAR la dosis nocturna']] },
            say: 'Dos fenómenos que dan glucosa alta en ayuno. El fenómeno del alba se debe a las hormonas de la madrugada, con glucosa normal o alta a las tres de la mañana: se sube la basal. El efecto Somogyi es un rebote después de una hipoglucemia de madrugada: se baja la dosis nocturna. Se distinguen midiendo la glucosa a las tres de la mañana.' },
          { v: { k: 'quiz', q: 'Glucosa en ayuno de 210 y a las 3 am de 52. ¿Qué haces con la NPH nocturna?', opts: ['Subirla', 'Bajarla', 'Dejarla igual'], a: 1 },
            say: 'Pausa. Glucosa en ayuno de doscientos diez, pero a las tres de la mañana de cincuenta y dos. ¿Qué haces con la NPH de la noche?',
            exp: 'Bajarla. Es efecto Somogyi: la hipoglucemia de madrugada dispara un rebote. Subir la dosis empeoraría la hipoglucemia nocturna.' }
        ] },
        { ch: 'Cierre del caso', sc: [
          { v: { k: 'list', t: 'Don Ignacio: final del caso', items: ['Glargina 12 U en la noche + metformina', 'Se suspende la glibenclamida', '+2 U cada 3 días: llega a 26 U', 'Ayuno 112; A1c a los 3 meses: 7.4%', 'Se agrega semaglutida; recupera peso sano'] },
            say: 'Don Ignacio inicia glargina doce unidades en la noche, sigue con metformina y deja la glibenclamida. Sube dos unidades cada tres días hasta veintiséis, con ayuno de ciento doce. A los tres meses su glucosilada es de siete punto cuatro, y se agrega semaglutida para llegar a la meta sin subir más la basal.' },
          { v: { k: 'tip', kind: 'trap', t: 'Subir la basal sin fin cuando el ayuno ya está en meta: sobrebasalización. Agrega prandial o arGLP-1.' },
            say: 'La trampa final: seguir subiendo la basal cuando el ayuno ya está en meta. Eso es sobrebasalización: agrega prandial o un agonista de GLP uno.' },
          { v: { k: 'mnemo', t: '10 U · +2 cada 3 días · tope 0.5 U/kg', d: 'Inicio: 10 U o 0.1–0.2 U/kg. Titula con el ayuno hasta 80–130. >0.5 U/kg: agrega prandial. Somogyi: baja; alba: sube.' },
            say: 'Llévate los números: diez unidades, más dos cada tres días, y tope de cero punto cinco por kilo. Ahora titula la insulina en el algoritmo del taller.' }
        ] }
      ],
      sections: [
        { h: 'Qué hace la insulina', html: `
<ul>
<li>Hormona <b>anabólica</b>: mete glucosa al músculo y la grasa (GLUT4), forma glucógeno y triglicéridos, y <b>frena</b> la gluconeogénesis, la glucogenólisis, la lipólisis y la <b>cetogénesis</b>.</li>
<li>Mete el <b>potasio</b> a la célula (por eso trata la hiperkalemia y causa hipokalemia en la CAD).</li>
<li>Se absorbe más rápido en abdomen, con ejercicio o masaje; más lento en muslo, con frío o en zonas de lipohipertrofia (rotar sitios).</li>
<li>Efectos adversos: <b>hipoglucemia</b> (el principal), aumento de peso, lipodistrofia, hipokalemia, edema.</li>
</ul>` },
        { h: 'Los tipos de insulina', html: `
<div class="tablewrap"><table class="mini">
<tr><th>Tipo</th><th>Ejemplos</th><th>Inicio</th><th>Pico</th><th>Duración</th><th>Uso</th></tr>
<tr><td><b>Ultrarrápida</b> (análogo)</td><td>Lispro, aspart, glulisina</td><td>5–15 min</td><td>1 h</td><td>3–5 h</td><td>Bolo justo antes de comer; bombas</td></tr>
<tr><td><b>Rápida</b> (humana)</td><td>Regular (cristalina)</td><td>30 min</td><td>2–3 h</td><td>6–8 h</td><td>30 min antes de comer; <b>la única IV</b> (CAD, hiperkalemia)</td></tr>
<tr><td><b>Intermedia</b></td><td>NPH</td><td>1–2 h</td><td><b>4–10 h</b></td><td>12–16 h</td><td>Basal 2 veces al día; hiperglucemia por esteroides (dosis matutina)</td></tr>
<tr><td><b>Larga</b> (análogo)</td><td>Glargina, detemir</td><td>1–2 h</td><td>Sin pico</td><td>~24 h</td><td>Basal 1 vez al día</td></tr>
<tr><td><b>Ultralarga</b></td><td>Degludec, glargina U-300</td><td>1–6 h</td><td>Sin pico</td><td>&gt;36–42 h</td><td>Basal con menos hipoglucemia nocturna</td></tr>
<tr><td><b>Premezclas</b></td><td>NPH/regular 70/30, lispro mix</td><td colspan="3">Bifásicas</td><td>2 veces al día cuando no se puede basal-bolo</td></tr>
</table></div>
<ul>
<li>Los análogos de larga acción dan <b>menos hipoglucemia nocturna</b> que la NPH (por no tener pico).</li>
<li>La glargina tiene pH ácido: <b>no se mezcla</b> en la misma jeringa. NPH y regular sí: <b>primero se carga la regular</b> (“clara antes que turbia”).</li>
</ul>` },
        { h: 'Cuándo iniciar insulina en DM2', html: `
<ul>
<li><b>De entrada</b>: HbA1c <b>&gt;10 %</b> o glucosa <b>≥300</b>, síntomas catabólicos (pérdida de peso, poliuria) o <b>cetosis</b>; también si hay duda de DM1/LADA, embarazo, hospitalización o ERC avanzada.</li>
<li><b>Escalando</b>: si no llega a la meta con orales. Antes de la insulina basal, considera un <b>arGLP-1</b> (igual de eficaz, sin hipoglucemia ni aumento de peso). En DM2 hospitalizada, la insulina es el tratamiento de elección.</li>
<li><b>DM1</b>: siempre, desde el diagnóstico, en esquema intensivo (basal-bolo o bomba): 0.4–1.0 U/kg/día, ~50 % basal y 50 % prandial.</li>
</ul>` },
        { h: 'Insulina basal: iniciar y titular', html: `
<ol>
<li>Dosis inicial: <b>10 U/día o 0.1–0.2 U/kg/día</b> (glargina o degludec en la noche o a la misma hora; o NPH al acostarse).</li>
<li>Se <b>mantiene la metformina</b> (y el iSGLT2 o arGLP-1). Se suspenden o reducen las <b>sulfonilureas</b> (suman hipoglucemia); evita pioglitazona (edema, IC).</li>
<li>Titula con la <b>glucosa en ayuno</b>: +2 U cada 3 días (o +10–15 % 1–2 veces por semana) hasta 80–130 mg/dL.</li>
<li>Si hay hipoglucemia sin causa clara: <b>baja 10–20 %</b>.</li>
</ol>
<p><b>Sobrebasalización</b>: dosis basal &gt;0.5 U/kg/día, diferencia de glucosa de la noche a la mañana ≥50 mg/dL, hipoglucemias o variabilidad alta → ya no subas la basal: agrega <b>prandial</b> (o un arGLP-1).</p>` },
        { h: 'Insulina prandial y esquemas intensivos', html: `
<ul>
<li>Si la glucosa en ayuno está en meta pero la HbA1c no: el problema es <b>posprandial</b>. Agrega <b>4 U o 10 % de la basal</b> de ultrarrápida antes de la <b>comida más grande</b>; titula +1–2 U (10–15 %) dos veces por semana.</li>
<li><b>Basal-bolo</b>: basal + ultrarrápida antes de cada comida. Es el esquema más fisiológico (DM1 y DM2 avanzada).</li>
<li><b>Corrección (sensibilidad)</b>: la regla del <b>1800</b> (ultrarrápida) o 1500 (regular) ÷ dosis total diaria = cuántos mg/dL baja 1 unidad. Relación insulina-carbohidratos: <b>500 ÷ dosis total</b> = gramos que cubre 1 unidad.</li>
<li>Alternativa más sencilla: <b>premezcla 2 veces al día</b> (antes del desayuno y la cena; 2/3 en la mañana y 1/3 en la noche), con más riesgo de hipoglucemia y horarios fijos.</li>
</ul>` },
        { h: 'En el hospital', html: `
<ul>
<li>Meta: <b>140–180 mg/dL</b> en la mayoría (110–140 en algunos de UCI o cirugía cardiaca, si no hay hipoglucemia).</li>
<li>Paciente que come: <b>basal-bolo-corrección</b>, dosis total 0.3–0.5 U/kg/día (0.2–0.3 en ancianos, ERC o bajo peso), mitad basal y mitad prandial. Que no come: basal + corrección.</li>
<li>La <b>escala móvil sola</b> (“sliding scale”) se desaconseja: persigue la hiperglucemia y causa variabilidad.</li>
<li>UCI y crisis (CAD, EHH): <b>insulina regular IV</b> en infusión.</li>
<li>Hiperglucemia por <b>esteroides</b> (prednisona en la mañana): sube en la tarde → <b>NPH en la mañana</b> junto con el esteroide, o más prandial.</li>
</ul>` },
        { h: 'Hipoglucemia y fenómenos de la madrugada', html: `
<ul>
<li>Niveles: <b>1</b> &lt;70 mg/dL · <b>2</b> &lt;54 mg/dL (clínicamente importante) · <b>3</b> grave: requiere ayuda de otra persona (cualquier cifra).</li>
<li>Síntomas adrenérgicos (temblor, sudor, palpitaciones, hambre) y neuroglucopénicos (confusión, conducta extraña, convulsiones, coma). Los betabloqueadores y la hipoglucemia inadvertida los enmascaran.</li>
<li>Tratamiento — <b>regla del 15</b>: 15 g de glucosa oral, revisa a los 15 min, repite si sigue &lt;70; luego colación. Inconsciente: <b>glucagón</b> (IM, SC o intranasal) o <b>dextrosa al 50 % IV</b>. Por sulfonilurea: vigilar 24 h (dura mucho).</li>
<li><b>Fenómeno del alba</b>: hiperglucemia en ayuno por hormonas contrarreguladoras de la madrugada, sin hipoglucemia nocturna → <b>sube</b> la basal o pásala a la noche.</li>
<li><b>Efecto Somogyi</b>: hipoglucemia de madrugada (3 a. m.) con rebote matutino → <b>baja</b> la dosis nocturna. Se distinguen midiendo la glucosa a las 3 a. m.</li>
</ul>` },
        { h: 'Cómo lo preguntan en el examen', html: `
<ul>
<li>DM2 con HbA1c 11.8 %, pérdida de peso y poliuria → <b>insulina de inicio</b> (basal ± prandial) además de metformina.</li>
<li>Con glargina 0.3 U/kg, ayuno en meta y HbA1c 8.4 % → <b>agrega prandial</b> en la comida principal (o arGLP-1), no subas la basal.</li>
<li>Glucosa de ayuno alta y a las 3 a. m. de 50 → <b>Somogyi</b> → baja la NPH nocturna.</li>
<li>Paciente inconsciente con glucosa de 38 en casa → <b>glucagón</b>.</li>
<li>¿Qué insulina va IV en la CAD? → <b>regular</b>.</li>
<li>Al iniciar basal en paciente con glibenclamida → <b>suspende o reduce la sulfonilurea</b>.</li>
</ul>` }
      ],
      mnemo: { t: 'Basal = ayuno · Prandial = después de comer', d: 'Si la glucosa en ayuno está alta, ajusta la basal. Si el ayuno está bien pero la HbA1c no, el problema es posprandial: agrega bolo. Titula la basal +2 U cada 3 días hasta 80–130.' },
      pearl: 'Antes de culpar a la dosis, revisa técnica, sitios de inyección (lipohipertrofia) y horarios: son causa frecuente de “resistencia” a la insulina.',
      trap: 'Hiperglucemia en ayuno no siempre es falta de insulina: si a las 3 a. m. hay hipoglucemia (Somogyi), subir la dosis la empeora. Mide la glucosa de madrugada.',
      guide: [
        'ADA 2025: en DM2 se prefiere un arGLP-1 (o GIP/GLP-1) antes de iniciar insulina, salvo HbA1c >10 %, glucosa ≥300, catabolismo o cetosis.',
        'Hospital: el consenso actual desaconseja la escala móvil como único esquema; tu guía la menciona como opción.',
        'Dosis totales de referencia: DM1 0.4–1.0 U/kg/día; DM2 hasta 1 U/kg/día o más con resistencia a la insulina.'
      ],
      refs: [
        'ElSayed NA, et al. Standards of Care in Diabetes—2025. Section 9: Pharmacologic approaches to glycemic treatment. Diabetes Care 2025.',
        'ElSayed NA, et al. Standards of Care in Diabetes—2025. Section 16: Diabetes care in the hospital. Diabetes Care 2025.',
        'Davies MJ, et al. Management of hyperglycaemia in type 2 diabetes, 2022: ADA/EASD consensus report. Diabetes Care 2022.',
        'Umpierrez GE, et al. Randomized study of basal-bolus insulin therapy in the inpatient management of type 2 diabetes (RABBIT 2). Diabetes Care 2007.',
        'Seaquist ER, et al. Hypoglycemia and diabetes: a report of a workgroup of the ADA and the Endocrine Society. Diabetes Care 2013.'
      ]
    }
  },

  guias: {
    insulina: { src: ENDO,
      puntos: [
        'Indicaciones: DM1, DM2 que no llega a metas con orales o con ERC, diabetes gestacional, hiperkalemia aguda, pancreatitis crónica y CAD.',
        'Absorción más lenta con frío, obesidad o en piernas; más rápida con masaje, en abdomen y en tejido profundo.',
        'Ultrarrápidas (lispro, aspart, glulisina): pico en 1 h, duran 3–4 h, 15 min antes de comer. Regular: pico 2–3 h, 4–6 h, para la CAD. NPH: pico 4–10 h, 2 veces al día; útil en hiperglucemia por esteroides y nutrición enteral. Glargina, detemir, degludec: sin pico, basales.',
        'Cálculo: dosis total 0.5–0.7 U/kg (DM1) o 0.4–1 U/kg (DM2); 40–50 % basal. Basal en DM2: 10 U o 0.1–0.2 U/kg al acostarse; si hay hipoglucemia baja 10–20 %, si no llega a meta sube 2–3 U.',
        'Prandial: 4 U o 10 % de la basal; sube 1–2 U dos veces por semana. Corrección: regla del 1500 (regular) o 1800 (rápida) ÷ dosis total.',
        'No combinar insulina con sulfonilureas (hipoglucemia peligrosa) ni con pioglitazona (edema, IC). En premezclas manuales, cargar primero la regular y luego la NPH.'
      ],
      ojo: [
        'La ADA ya no recomienda la <b>escala móvil sola</b> en hospitalizados: siempre basal (± prandial) más corrección.',
        'Antes de iniciar insulina en DM2 se prefiere un <b>arGLP-1</b> si no hay catabolismo, HbA1c &gt;10 % ni glucosa ≥300.',
        'Titulación de la basal: la guía actual sugiere <b>+2 U cada 3 días</b> hasta ayuno 80–130 (tu guía dice 2–3 U al día, más agresivo).'
      ],
      cards: [['Mezclar NPH y regular en jeringa', 'Primero la regular (clara), luego la NPH (turbia)']] }
  },

  cards: [
    ['Insulinas ultrarrápidas', 'Lispro, aspart, glulisina: inicio 5–15 min, duran 3–5 h'],
    ['Única insulina que se da IV', 'Regular (cristalina)'],
    ['NPH: pico', '4–10 h (más hipoglucemia nocturna que los análogos)'],
    ['Insulinas basales sin pico', 'Glargina, detemir, degludec'],
    ['Insulina de entrada en DM2', 'HbA1c >10 %, glucosa ≥300, catabolismo o cetosis'],
    ['Dosis inicial de insulina basal', '10 U/día o 0.1–0.2 U/kg/día'],
    ['Titulación de la basal', '+2 U cada 3 días hasta glucosa en ayuno 80–130'],
    ['Al iniciar insulina: qué se suspende', 'Sulfonilurea (o se reduce); se mantiene metformina'],
    ['Sobrebasalización', 'Basal >0.5 U/kg/día, diferencia noche-mañana ≥50, hipoglucemias → agrega prandial'],
    ['Inicio de la prandial', '4 U o 10 % de la basal en la comida más grande'],
    ['Regla del 1800', '1800 ÷ dosis total = mg/dL que baja 1 U de ultrarrápida'],
    ['Dosis total en DM1', '0.4–1.0 U/kg/día, 50 % basal y 50 % prandial'],
    ['Meta de glucosa en hospitalizados', '140–180 mg/dL'],
    ['Hipoglucemia nivel 2', '<54 mg/dL'],
    ['Regla del 15', '15 g de glucosa, revisar a los 15 min, repetir si <70'],
    ['Hipoglucemia grave sin vía oral', 'Glucagón (IM, SC o nasal) o dextrosa al 50 % IV'],
    ['Fenómeno del alba vs Somogyi', 'Alba: sin hipoglucemia nocturna → sube basal. Somogyi: hipoglucemia a las 3 a. m. → baja la dosis nocturna'],
    ['Hiperglucemia por prednisona matutina', 'NPH en la mañana junto con el esteroide']
  ],

  questions: [
    q({ id: 'insulina-01', dif: 1,
      stem: 'Hombre de 48 años con DM2 recién diagnosticada. Poliuria, polidipsia y pérdida de 7 kg en 2 meses. HbA1c 11.6 %, glucosa 342, sin cetonas. ¿Cuál es el tratamiento inicial?',
      opts: ['Metformina sola y control en 3 meses', 'Metformina + insulina basal', 'Sulfonilurea', 'Dieta y ejercicio por 3 meses', 'iDPP-4'],
      ans: 1,
      exp: 'HbA1c >10 %, glucosa ≥300 y datos catabólicos: está indicada la insulina desde el inicio (con metformina). Al controlar la glucotoxicidad muchas veces se puede reducir o retirar después.',
      why: ['Insuficiente con síntomas catabólicos.', '', 'No basta y da hipoglucemia.', 'Inaceptable con estos síntomas.', 'Potencia insuficiente.'],
      ref: 'ADA Standards of Care 2025' }),
    q({ id: 'insulina-02', dif: 2,
      stem: 'Mujer de 60 años con DM2 en metformina y glibenclamida, HbA1c 9.2 %. Se inicia glargina. ¿Qué haces con los orales?',
      opts: ['Suspende ambos', 'Continúa metformina y suspende o reduce la glibenclamida', 'Continúa ambos sin cambios', 'Suspende metformina y continúa glibenclamida', 'Agrega pioglitazona'],
      ans: 1,
      exp: 'La metformina reduce la dosis de insulina y el aumento de peso. La sulfonilurea se suspende o reduce porque suma riesgo de hipoglucemia (la glibenclamida es la peor).',
      why: ['La metformina se mantiene.', '', 'Más hipoglucemia.', 'Al revés.', 'Edema y riesgo de IC con insulina.'],
      ref: 'ADA Standards of Care 2025' }),
    q({ id: 'insulina-03', dif: 2,
      stem: 'Paciente con DM2 que inició glargina 10 U por la noche. Glucosa en ayuno de los últimos 3 días: 178, 182 y 170 mg/dL, sin hipoglucemias. ¿Qué haces?',
      opts: ['Sube 2 U y revisa en 3 días', 'Agrega lispro en cada comida', 'Duplica la dosis', 'Cambia a NPH', 'No cambies nada'],
      ans: 0,
      exp: 'La titulación de la basal se guía por la glucosa en ayuno: +2 U cada 3 días hasta 80–130 mg/dL, sin hipoglucemia.',
      why: ['', 'Primero hay que optimizar la basal (el ayuno no está en meta).', 'Aumento brusco: riesgo de hipoglucemia.', 'No hay razón para cambiar.', 'Está fuera de meta.'],
      ref: 'ADA Standards of Care 2025' }),
    q({ id: 'insulina-04', dif: 2,
      stem: 'Hombre de 70 kg con DM2 usando glargina 42 U al día. Glucosa en ayuno 115, pero HbA1c 8.6 % y glucosas de 230–260 después de comer. ¿Siguiente paso?',
      opts: ['Subir la glargina a 50 U', 'Agregar 4 U de ultrarrápida antes de la comida más grande (o un arGLP-1)', 'Cambiar a NPH', 'Agregar glibenclamida', 'Suspender la metformina'],
      ans: 1,
      exp: 'El ayuno está en meta y la dosis basal ya es 0.6 U/kg (sobrebasalización): el problema es posprandial. Se agrega prandial en la comida principal (4 U o 10 % de la basal) o un arGLP-1.',
      why: ['Más basal daría hipoglucemia en ayuno sin corregir la posprandial.', '', 'No resuelve la posprandial.', 'Más hipoglucemia y peso.', 'Debe mantenerse.'],
      ref: 'ADA Standards of Care 2025' }),
    q({ id: 'insulina-05', dif: 1,
      stem: '¿Qué insulina se usa en infusión intravenosa para la cetoacidosis diabética?',
      opts: ['Glargina', 'NPH', 'Regular', 'Degludec', 'Premezcla 70/30'],
      ans: 2,
      exp: 'La insulina regular (cristalina) es la que se usa IV. Las basales y la NPH solo se aplican subcutáneas.',
      why: ['Solo SC.', 'Solo SC (es una suspensión).', '', 'Solo SC.', 'Solo SC.'],
      ref: 'Umpierrez, Diabetes Care 2024' }),
    q({ id: 'insulina-06', dif: 2,
      stem: 'Paciente con NPH 2 veces al día. Glucosa en ayuno 210. A las 3 a. m. se mide: 48 mg/dL. ¿Qué haces?',
      opts: ['Subir la NPH nocturna', 'Bajar la NPH nocturna (o pasarla a la hora de dormir / cambiar a análogo basal)', 'Agregar regular en la cena', 'Dar colación de madrugada y subir la NPH', 'Cambiar a premezcla'],
      ans: 1,
      exp: 'Efecto Somogyi: hipoglucemia de madrugada por exceso de NPH nocturna con rebote matutino. Se reduce la dosis nocturna o se cambia a un análogo sin pico.',
      why: ['Empeoraría la hipoglucemia.', '', 'Más hipoglucemia nocturna.', 'Tapa el problema y sube el riesgo.', 'No resuelve el pico nocturno de la NPH.'],
      ref: 'Seaquist, Diabetes Care 2013' }),
    q({ id: 'insulina-07', dif: 2,
      stem: 'Paciente con glargina en la noche. Glucosa a las 3 a. m. 130 y en ayuno 190. ¿Qué haces?',
      opts: ['Bajar la glargina', 'Subir la glargina (fenómeno del alba)', 'Colación nocturna', 'Suspender la insulina', 'Agregar sulfonilurea en la noche'],
      ans: 1,
      exp: 'Sin hipoglucemia nocturna y con subida al amanecer: fenómeno del alba (hormonas contrarreguladoras). Se aumenta la basal.',
      why: ['Empeoraría la hiperglucemia matutina.', '', 'Subiría más la glucosa.', 'Absurdo.', 'Riesgo de hipoglucemia.'],
      ref: 'Seaquist, Diabetes Care 2013' }),
    q({ id: 'insulina-08', dif: 1,
      stem: 'Mujer con DM1 encontrada inconsciente en su casa por su familia. Glucómetro: 34 mg/dL. No hay acceso IV. ¿Qué le aplicas?',
      opts: ['Jugo de naranja por la boca', 'Glucagón IM, SC o intranasal', 'Insulina rápida', 'Esperar a la ambulancia', 'Agua con azúcar por la boca'],
      ans: 1,
      exp: 'Hipoglucemia nivel 3 sin vía oral segura: glucagón (IM/SC 1 mg o intranasal 3 mg). En el hospital, dextrosa al 50 % IV.',
      why: ['Riesgo de aspiración en inconsciente.', '', 'Empeora la hipoglucemia.', 'Daño neurológico.', 'Riesgo de aspiración.'],
      ref: 'ADA Standards of Care 2025' }),
    q({ id: 'insulina-09', dif: 2,
      stem: 'Hombre de 80 kg con DM2 hospitalizado por neumonía, come normal, glucosas de 220–280. ¿Qué esquema indicas?',
      opts: ['Escala móvil de insulina regular sola', 'Basal-bolo-corrección: ~0.4 U/kg/día (32 U), mitad basal y mitad prandial', 'Metformina a dosis máxima', 'Infusión IV de insulina', 'Premezcla 70/30 a 1 U/kg/día'],
      ans: 1,
      exp: 'En el hospitalizado que come, el esquema basal-bolo con corrección logra mejor control que la escala móvil (RABBIT 2). Dosis total 0.3–0.5 U/kg/día. Meta 140–180.',
      why: ['Persigue la hiperglucemia; desaconsejada como único esquema.', '', 'No se usa en hospitalizados agudos.', 'Se reserva para UCI o crisis.', 'Dosis excesiva y rígida.'],
      ref: 'Umpierrez, RABBIT 2, Diabetes Care 2007' }),
    q({ id: 'insulina-10', dif: 2,
      stem: 'Paciente con DM2 que inicia prednisona 40 mg cada mañana. Ayuno 120, pero 290 en la tarde. ¿Qué insulina ajusta mejor este patrón?',
      opts: ['Glargina en la noche', 'NPH en la mañana junto con la prednisona', 'Regular IV', 'Degludec', 'Ultrarrápida antes de dormir'],
      ans: 1,
      exp: 'La prednisona matutina sube la glucosa a partir del mediodía y la tarde. El pico de la NPH (4–10 h) coincide con ese efecto.',
      why: ['Actuaría sobre todo de noche y en ayuno, que están bien.', '', 'No es necesaria.', 'Plana; no sigue el patrón del esteroide.', 'Hipoglucemia nocturna.'],
      ref: 'ADA Standards of Care 2025' }),
    q({ id: 'insulina-11', dif: 3,
      stem: 'Paciente con DM1, dosis total de 60 U/día de lispro y glargina. Antes de comer tiene 280 mg/dL, meta 130. Con la regla del 1800, ¿cuántas unidades de corrección agregas?',
      opts: ['1 U', '3 U', '5 U', '8 U', '10 U'],
      ans: 2,
      exp: 'Sensibilidad = 1800 ÷ 60 = 30 mg/dL por unidad. Exceso = 280 − 130 = 150 → 150 ÷ 30 = 5 U de corrección (sumadas al bolo de la comida).',
      why: ['Insuficiente.', 'Insuficiente.', '', 'Excesivo.', 'Excesivo.'],
      ref: 'ADA Standards of Care 2025' }),
    q({ id: 'insulina-12', dif: 1,
      stem: 'Al preparar en la misma jeringa insulina NPH y regular, ¿cuál se carga primero?',
      opts: ['La NPH', 'La regular', 'Da igual', 'No se pueden mezclar', 'Se mezclan en el frasco de NPH'],
      ans: 1,
      exp: 'Primero la regular (clara) para no contaminar su frasco con la protamina de la NPH (turbia). La que no se mezcla con nada es la glargina.',
      why: ['Contamina el frasco de regular.', '', 'Sí importa.', 'Sí se pueden mezclar (es la base de las premezclas).', 'Contamina el frasco.'],
      ref: 'Guía Endocrino (rotación)' }),
    q({
      id: "insulina-13",
      dif: 1,
      stem: "¿Cuál es el efecto adverso más importante de la insulina?",
      opts: [
        "Aumento de peso",
        "Hipoglucemia",
        "Lipodistrofia",
        "Hipokalemia",
        "Alergia"
      ],
      ans: 1,
      exp: "La hipoglucemia es el efecto adverso más frecuente y peligroso; limita la intensificación del tratamiento.",
      why: [
        "Frecuente, pero no el más peligroso.",
        "",
        "Ocurre si no se rotan sitios.",
        "Ocurre sobre todo con insulina IV.",
        "Rara."
      ],
      ref: "ADA Standards of Care 2025"
    }),
    q({
      id: "insulina-14",
      dif: 2,
      stem: "Paciente con DM2 con buen apego cuya glucosa no baja pese a subir la dosis. A la exploración: abultamientos blandos en el abdomen donde siempre se inyecta. ¿Qué indicas?",
      opts: [
        "Duplicar la dosis",
        "Rotar los sitios de inyección y evitar las zonas abultadas",
        "Cambiar a insulina IV",
        "Suspender la insulina",
        "Agregar sulfonilurea"
      ],
      ans: 1,
      exp: "Lipohipertrofia: la insulina se absorbe de forma errática en esas zonas. Al rotar a piel sana puede haber hipoglucemia: baja la dosis 10–20 % al cambiar.",
      why: [
        "Riesgo de hipoglucemia al cambiar de sitio.",
        "",
        "No está indicada.",
        "No hay razón.",
        "No resuelve el problema."
      ],
      ref: "ADA Standards of Care 2025"
    }),
    q({
      id: "insulina-15",
      dif: 2,
      stem: "Hombre de 60 años con DM2 en sulfonilurea que llega con glucosa de 42 y somnoliento; mejora con dextrosa IV. ¿Qué haces después?",
      opts: [
        "Darlo de alta en 1 hora",
        "Observarlo al menos 24 horas con infusión de dextrosa",
        "Iniciar insulina basal",
        "Darle glucagón diario",
        "Aumentar la sulfonilurea"
      ],
      ans: 1,
      exp: "La hipoglucemia por sulfonilurea es prolongada (sobre todo glibenclamida y en ERC): requiere vigilancia y dextrosa por 24 horas o más; octreotida en casos refractarios.",
      why: [
        "Recurrirá la hipoglucemia.",
        "",
        "No es el problema.",
        "No está indicado.",
        "Absurdo."
      ],
      ref: "Seaquist, Diabetes Care 2013"
    })
  ]
};
