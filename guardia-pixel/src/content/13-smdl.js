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
      video: [
        { ch: 'El síndrome metabólico', sc: [
          { v: { k: 'title', t: 'Síndrome metabólico y dislipidemia', s: 'Tema 4 · Endocrinología' },
            say: 'Bienvenido a la guardia. Este tema se pregunta con números. Cuántos criterios hacen síndrome metabólico, en qué categoría de riesgo está tu paciente, cuál es su meta de colesterol LDL y qué agregas si no llega.' },
          { v: { k: 'case', t: 'Unos análisis del trabajo', p: { name: 'Héctor', age: 48, sex: 'H', skin: '#C98B62', hair: '#3A2A1E', gown: '#9AD18B' }, text: 'Taxista con DM2 de 11 años, HTA y obesidad. Toma cerveza a diario. Cintura de 108 cm. Asintomático.', vit: { PA: '142/88', A1c: '10.4%', TG: '1 620' } },
            say: 'Conoce a don Héctor, taxista de cuarenta y ocho años. Tiene diabetes desde hace once años, hipertensión y obesidad, y toma cerveza todos los días. Sus triglicéridos están en mil seiscientos veinte. Con él vamos a recorrer todo el tema.' },
          { v: { k: 'list', t: 'Síndrome metabólico: 3 de 5', items: ['Cintura ≥102/88 cm (ATP III) o ≥90/80 (IDF)', 'Triglicéridos ≥150 mg/dL', 'HDL <40 en hombres o <50 en mujeres', 'PA ≥130/85 mmHg', 'Glucosa en ayuno ≥100 mg/dL'] },
            say: 'Con los criterios armonizados necesitas tres de cinco. Cintura aumentada: ciento dos centímetros en hombres y ochenta y ocho en mujeres según el panel ATP tres, o noventa y ochenta para Latinoamérica según la Federación Internacional de Diabetes. Triglicéridos de ciento cincuenta o más. Colesterol HDL menor de cuarenta en hombres o de cincuenta en mujeres. Presión de ciento treinta sobre ochenta y cinco o más. Glucosa en ayuno de cien o más. Si ya recibe tratamiento para un criterio, ese criterio cuenta.' },
          { v: { k: 'list', t: 'Por qué se juntan', items: ['Grasa visceral → resistencia a la insulina', 'Ácidos grasos al hígado → más VLDL', 'TG ↑, HDL ↓, LDL pequeñas y densas', 'Riesgo CV ×2 y de DM2 ×5'] },
            say: 'Por qué se juntan. La grasa visceral libera ácidos grasos y causa resistencia a la insulina. El hígado recibe esos ácidos grasos y fabrica más lipoproteínas de muy baja densidad. El resultado es la tríada aterogénica: triglicéridos altos, HDL bajo y partículas LDL pequeñas y densas. Por eso duplica el riesgo cardiovascular y multiplica unas cinco veces el de diabetes.' },
          { v: { k: 'tip', kind: 'pearl', t: 'Lo que mejora todos los componentes a la vez: bajar 7–10% del peso y ≥150 min/semana de ejercicio aeróbico.' },
            say: 'El tratamiento base es el estilo de vida. Bajar de siete a diez por ciento del peso y hacer al menos ciento cincuenta minutos de ejercicio aeróbico a la semana mejora todos los componentes a la vez. Después tratas cada factor según el riesgo cardiovascular.' }
        ] },
        { ch: 'El colesterol LDL', sc: [
          { v: { k: 'anim', id: 'smdl', step: 0 },
            say: 'Ahora el colesterol. El LDL lleva colesterol a los tejidos y a la pared de las arterias; por eso es el blanco del tratamiento. El hígado lo limpia con sus receptores de LDL. Los atrapa, los mete a la célula y vuelven a la superficie por más. Casi todos los fármacos funcionan aumentando esos receptores.' },
          { v: { k: 'big', h: 'Fórmula de Friedewald', t: '−TG/5', s: 'LDL = colesterol total − HDL − TG/5. No sirve con TG ≥400 mg/dL: pide LDL directo.' },
            say: 'El LDL casi siempre se calcula con la fórmula de Friedewald: colesterol total, menos HDL, menos triglicéridos entre cinco. Con triglicéridos de cuatrocientos o más la fórmula no sirve, como en don Héctor, y hay que pedir LDL directo. El colesterol no HDL es el total menos el HDL. Su meta es la del LDL más treinta.' },
          { v: { k: 'quiz', q: 'Colesterol total 240, HDL 50, TG 150 mg/dL. ¿LDL calculado?', opts: ['130 mg/dL', '160 mg/dL', '190 mg/dL'], a: 1 },
            say: 'Pausa. Colesterol total de doscientos cuarenta, HDL de cincuenta y triglicéridos de ciento cincuenta. ¿Cuánto es el LDL?',
            exp: 'Ciento sesenta. Los triglicéridos entre cinco son treinta. Doscientos cuarenta, menos cincuenta del HDL, menos treinta, da ciento sesenta.' }
        ] },
        { ch: 'Riesgo y metas', sc: [
          { v: { k: 'list', t: 'Muy alto riesgo (ESC/EAS)', items: ['ECV aterosclerótica, clínica o en imagen', 'DM con daño a órgano blanco o ≥3 FR mayores', 'ERC con TFG <30', 'SCORE2 ≥10% (50–69 años)', 'HF con ECV u otro FR mayor'] },
            say: 'Las metas dependen del riesgo, según la guía europea de dislipidemias. Muy alto riesgo es la enfermedad cardiovascular aterosclerótica, clínica o en imagen. También la diabetes con daño a órgano blanco o con tres factores de riesgo mayores. Y la enfermedad renal con filtración menor de treinta, un SCORE dos alto y la hipercolesterolemia familiar con enfermedad cardiovascular.' },
          { v: { k: 'big', h: 'Meta de LDL en muy alto riesgo', t: '<55', u: 'mg/dL', s: 'Y además ↓ ≥50% de la basal. Alto riesgo: <70 y ↓ ≥50% · moderado <100 · bajo <116.' },
            say: 'En muy alto riesgo, la meta es LDL menor de cincuenta y cinco y, además, una reducción de al menos la mitad del valor basal. Necesitas las dos condiciones. En alto riesgo, menor de setenta con la misma reducción. En riesgo moderado, menor de cien. En riesgo bajo, menor de ciento dieciséis.' },
          { v: { k: 'quiz', q: 'DM2 de 12 años e HTA. Sin daño a órgano blanco ni ECV. ¿Meta de LDL (ESC)?', opts: ['<100 mg/dL', '<70 mg/dL y ↓ ≥50%', '<55 mg/dL y ↓ ≥50%'], a: 1 },
            say: 'Pausa. Paciente con diabetes de doce años e hipertensión, sin daño a órgano blanco ni enfermedad cardiovascular. ¿Cuál es su meta de LDL?',
            exp: 'Menor de setenta, con reducción de al menos la mitad. La diabetes de diez años o más sin daño a órgano blanco es alto riesgo. Con retinopatía, albuminuria, tres factores mayores o un infarto, pasaría a muy alto riesgo.' }
        ] },
        { ch: 'La escalera del LDL', sc: [
          { v: { k: 'anim', id: 'smdl', step: 1 },
            say: 'El primer escalón es la estatina. Bloquea la HMG CoA reductasa: el hepatocito fabrica menos colesterol y saca más receptores a la membrana. Alta intensidad significa bajar el LDL a la mitad o más: atorvastatina de cuarenta a ochenta miligramos, o rosuvastatina de veinte a cuarenta.' },
          { v: { k: 'anim', id: 'smdl', step: 3 },
            say: 'Si a las cuatro a seis semanas no llega a la meta con la dosis máxima tolerada, segundo escalón: ezetimiba. Bloquea la proteína NPC uno L uno en el intestino y reduce la absorción de colesterol. Baja el LDL otro veinte por ciento aproximadamente, y sumada a la estatina redujo eventos.' },
          { v: { k: 'anim', id: 'smdl', step: 2 },
            say: 'Tercer escalón: los inhibidores de PCSK nueve. Esa proteína se pega al receptor de LDL y hace que se destruya. Evolocumab y alirocumab son anticuerpos que la atrapan; el inclisirán apaga su producción. El receptor se recicla y el LDL baja otro cincuenta por ciento o más.' },
          { v: { k: 'mnemo', t: 'Las 3 escaleras del LDL', d: 'Estatina de alta intensidad → + ezetimiba → + iPCSK9. Revisa a las 4–6 semanas en cada escalón. ¿No tolera estatinas? Ácido bempedoico.' },
            say: 'Mnemotecnia: las tres escaleras del LDL. Estatina, ezetimiba, inhibidor de PCSK nueve. Subes un escalón cada cuatro a seis semanas si no llegas a la meta. Y si no tolera las estatinas, el ácido bempedoico no da dolor muscular y redujo eventos.' }
        ] },
        { ch: 'Seguridad de las estatinas', sc: [
          { v: { k: 'list', t: 'Estatina y dolor muscular', items: ['Mide CK y TSH', 'Suspende, espera mejoría y reintenta', 'Otra estatina o dosis menor + ezetimiba', 'CK >10× con síntomas: suspende', 'Nunca dejes sin tratamiento al de alto riesgo'] },
            say: 'Las mialgias son el efecto adverso más común. Mide creatina cinasa y tirotropina, porque el hipotiroidismo aumenta la miopatía. Suspende, espera a que mejore y reintenta con otra estatina o con una dosis menor, sumando ezetimiba si hace falta. Si la creatina cinasa pasa de diez veces el límite con síntomas, suspende. Lo que nunca haces es dejar sin tratamiento a un paciente en prevención secundaria.' },
          { v: { k: 'tip', kind: 'trap', t: 'Estatina + gemfibrozilo = rabdomiólisis. Si necesitas un fibrato con la estatina, usa fenofibrato.' },
            say: 'La trampa más preguntada: estatina con gemfibrozilo. El gemfibrozilo eleva mucho los niveles de la estatina y causa rabdomiólisis. Si necesitas un fibrato junto con la estatina, usa fenofibrato. También aumentan la miopatía los macrólidos, los antifúngicos azólicos y la ciclosporina.' },
          { v: { k: 'list', t: '¿Cuándo no?', items: ['Embarazo y lactancia: contraindicadas', 'Hepatopatía descompensada: no', 'Hígado graso: sí se puede y conviene', 'ALT <3× el límite: continúa'] },
            say: 'Las estatinas están contraindicadas en el embarazo y la lactancia; si hace falta, se usan secuestradores de ácidos biliares. Tampoco se usan en hepatopatía descompensada. Pero el hígado graso no es contraindicación: son pacientes de alto riesgo. Una elevación de transaminasas menor de tres veces el límite no obliga a suspender.' }
        ] },
        { ch: 'Triglicéridos y formas familiares', sc: [
          { v: { k: 'vs', cmp: 'ldl-tg', rows: [0, 1, 4] },
            say: 'Ahora compara los dos extremos. El LDL alto amenaza las arterias y da xantomas tendinosos y arco corneal temprano. Los triglicéridos muy altos amenazan el páncreas y dan xantomas eruptivos y lipemia retinalis. Por eso cambia el primer fármaco: estatina para el LDL, fenofibrato para los triglicéridos muy altos.' },
          { v: { k: 'flow', t: 'Triglicéridos muy altos', steps: ['>880 (ESC) o ≥500 mg/dL (ACC/AHA)', 'Cero alcohol, dieta muy baja en grasa', 'Controla la glucosa', 'Fenofibrato', 'Revisa fármacos causales'] },
            say: 'Cuando los triglicéridos pasan de ochocientos ochenta según la guía europea, o de quinientos según la americana, el riesgo inmediato es la pancreatitis. Suspende el alcohol, indica una dieta muy baja en grasa, controla la glucosa e inicia fenofibrato. Y revisa los fármacos: estrógenos orales, tiazidas, glucocorticoides, antipsicóticos y retinoides.' },
          { v: { k: 'quiz', q: 'Héctor: TG 1 620 mg/dL y A1c 10.4%. ¿Qué es lo prioritario?', opts: ['Estatina sola y control en 6 meses', 'Evitar pancreatitis: alcohol 0 y fenofibrato'], a: 1 },
            say: 'Pausa. Volvamos con don Héctor: triglicéridos de mil seiscientos veinte y hemoglobina glucosilada de diez punto cuatro. ¿Qué es lo prioritario?',
            exp: 'Prevenir la pancreatitis. Cero alcohol, dieta muy baja en grasa, controlar la diabetes e iniciar fenofibrato. La estatina baja poco los triglicéridos. El LDL y el riesgo cardiovascular se reevalúan cuando bajen.' },
          { v: { k: 'list', t: 'TG 150–499 mg/dL', items: ['Primero el LDL: estatina según el riesgo', 'Persisten 135–499 con ECV o DM: icosapento', 'EPA purificado 2 g c/12 h (REDUCE-IT)', 'Omega-3 mezclados en dosis bajas: no'] },
            say: 'Con triglicéridos moderados, lo primero sigue siendo el LDL con estatina. Si persisten entre ciento treinta y cinco y cuatrocientos noventa y nueve en un paciente con enfermedad cardiovascular o diabetes, el icosapento de etilo redujo eventos. Es ácido eicosapentaenoico purificado, dos gramos cada doce horas. Las mezclas de omega tres a dosis bajas no sirven para eso.' },
          { v: { k: 'list', t: 'Hipercolesterolemia familiar', items: ['LDL ≥190 mg/dL en el adulto', 'Xantomas tendinosos (Aquiles)', 'Arco corneal antes de los 45 años', 'Familiar con ECV prematura', 'Estatina + ezetimiba; tamizaje en cascada'] },
            say: 'No olvides la hipercolesterolemia familiar, que es autosómica dominante. Piénsala con LDL de ciento noventa o más, xantomas en el tendón de Aquiles, arco corneal antes de los cuarenta y cinco años y un familiar con infarto prematuro. Se trata desde joven con estatina de alta intensidad, casi siempre con ezetimiba, y se estudia a toda la familia.' },
          { v: { k: 'tip', kind: 'pearl', t: 'Muy alto riesgo = LDL <55 Y ↓ ≥50%. Si bajó de 160 a 60, todavía no cumple: agrega ezetimiba.' },
            say: 'La perla para el examen: en muy alto riesgo la meta tiene dos condiciones, LDL menor de cincuenta y cinco y reducción de al menos la mitad. Si tu paciente bajó de ciento sesenta a sesenta, todavía no cumple: agrega ezetimiba. Ahora ve a las preguntas del tema para fijar lo que viste.' }
        ] }
      ],
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
        { h: 'Fisiopatología en 1 minuto', html: `
<ul>
<li><b>Grasa visceral</b> → ácidos grasos libres y adipocinas inflamatorias → <b>resistencia a la insulina</b> en músculo, hígado y tejido adiposo.</li>
<li>Llegan más ácidos grasos al hígado → fabrica <b>más VLDL</b> → triglicéridos altos (y hígado graso, MASLD).</li>
<li>Con tantas VLDL, la proteína de transferencia de ésteres de colesterol (CETP) las intercambia: el HDL se carga de TG y se degrada rápido (<b>HDL bajo</b>) y el LDL se vuelve <b>pequeño y denso</b>, que entra más fácil a la pared arterial.</li>
<li>Resultado: la <b>tríada aterogénica</b> (TG ↑, HDL ↓, LDL pequeñas y densas). Con TG altos el LDL calculado subestima el riesgo: usa el <b>colesterol no-HDL</b> (o ApoB).</li>
<li>La misma resistencia a la insulina explica la HTA (retención de sodio, tono simpático) y la glucosa alta: por eso los 5 criterios viajan juntos.</li>
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
        { h: 'Fármacos clave', html: `
<div class="tablewrap"><table class="mini">
<tr><th>Fármaco</th><th>Mecanismo</th><th>Efecto adverso clave</th><th>Contraindicación / ojo</th></tr>
<tr><td><b>Estatinas</b></td><td>Inhiben la HMG-CoA reductasa → ↑ receptores de LDL</td><td>Mialgias, miopatía, ↑ transaminasas, leve ↑ del riesgo de DM</td><td>Embarazo y lactancia, hepatopatía descompensada; interacciones (gemfibrozilo, macrólidos, azoles)</td></tr>
<tr><td><b>Ezetimiba</b></td><td>Bloquea NPC1L1 en el intestino</td><td>Bien tolerada</td><td>Hepatopatía moderada a grave</td></tr>
<tr><td><b>Evolocumab, alirocumab</b></td><td>Anticuerpos contra PCSK9 → el receptor se recicla</td><td>Reacción en el sitio de inyección</td><td>SC cada 2–4 semanas; costo</td></tr>
<tr><td><b>Inclisirán</b></td><td>ARN de interferencia: el hígado deja de fabricar PCSK9</td><td>Reacción en el sitio de inyección</td><td>SC al inicio, a los 3 meses y luego cada 6 meses</td></tr>
<tr><td><b>Ácido bempedoico</b></td><td>Inhibe la ATP-citrato liasa; se activa en el hígado, no en el músculo</td><td>Hiperuricemia y gota, colelitiasis</td><td>Precaución con gota; útil en intolerancia a estatinas</td></tr>
<tr><td><b>Fenofibrato</b></td><td>Agonista PPAR-α → ↑ lipoproteína lipasa → ↓ TG</td><td>↑ creatinina reversible, colelitiasis, miopatía</td><td>ERC grave, enfermedad de vesícula</td></tr>
<tr><td><b>Icosapento de etilo</b></td><td>EPA purificado → ↓ TG</td><td>Fibrilación auricular, sangrado</td><td>Precaución con anticoagulantes</td></tr>
<tr><td><b>Colestiramina</b></td><td>Atrapa ácidos biliares → el hígado gasta colesterol para hacer más</td><td>Estreñimiento, ↑ TG, ↓ absorción de otros fármacos y vitaminas liposolubles</td><td>Hipertrigliceridemia importante</td></tr>
</table></div>` },
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
</ul>` },
        { h: 'Cómo lo preguntan en el examen', html: `
<ul>
<li>Te dan cintura, TG, HDL, PA y glucosa → <b>cuenta criterios</b>; con 3 es síndrome metabólico (ojo: en mujeres el HDL cuenta si es &lt;50).</li>
<li>IAM previo, atorvastatina 80 y LDL 70 → no está en meta (&lt;55 y ↓ ≥50%) → <b>agrega ezetimiba</b>; si ya la toma, iPCSK9.</li>
<li>LDL en meta pero TG altos → calcula el <b>no-HDL</b> (meta = LDL + 30) antes de decir que está controlado.</li>
<li>Xantomas eruptivos + lipemia retinalis o TG &gt;1 000 → <b>prevenir pancreatitis</b>: cero alcohol, dieta muy baja en grasa, control de glucosa y fenofibrato.</li>
<li>Xantomas en Aquiles + LDL ≥190 + padre con IAM joven → <b>hipercolesterolemia familiar</b>: estatina alta + ezetimiba + tamizaje en cascada.</li>
<li>Estatina + gemfibrozilo + orina oscura → <b>rabdomiólisis</b>. LDL alto + fatiga, estreñimiento y piel seca → <b>pide TSH</b> antes de la estatina.</li>
</ul>` }
      ],
      mnemo: { t: 'Las 3 escaleras del LDL: Estatina → Ezetimiba → iPCSK9', d: 'Primero la estatina de alta intensidad a dosis máxima tolerada; a las 4–6 semanas, si no llega a la meta, agrega ezetimiba; si aún no llega, iPCSK9. Para los TG muy altos la escalera es otra: dieta sin grasa + cero alcohol + fenofibrato.' },
      pearl: 'La meta de LDL en muy alto riesgo tiene dos condiciones: <55 mg/dL Y reducción ≥50% de la basal. Si el paciente llegó a 60 bajando de 160, todavía no cumple.',
      trap: 'Estatina + gemfibrozilo = rabdomiólisis. Si necesitas un fibrato con estatina, que sea fenofibrato.',
      guide: [
        'Metas vs umbrales: la ESC/EAS fija metas numéricas (<55, <70, <100). La ACC/AHA habla de intensidad de estatina por grupos (ECV, LDL ≥190, DM 40–75 años, riesgo a 10 años ≥7.5%) y de umbrales para agregar ezetimiba o iPCSK9 (LDL ≥70, o ≥55 en muy alto riesgo según la vía de decisión 2022). Si te preguntan “meta”, contesta con la ESC.',
        'Cintura: el umbral cambia según la guía y la población (102/88 en ATP III; 90/80 para Latinoamérica según IDF). ⚠️ Pregunta cuál usa tu profesor; en los casos de esta app los números funcionan con ambos.',
        '⚠️ Depende de la guía: TG “muy altos” con riesgo de pancreatitis son >880 mg/dL (10 mmol/L) para la ESC/EAS y ≥500 mg/dL para la ACC/AHA. Con xantomas eruptivos, lipemia retinalis o dolor abdominal, actúa con cualquiera de las dos.',
        '⚠️ Depende de la guía: calcio coronario. La ACC/AHA 2018 permite diferir la estatina con CAC = 0 en riesgo intermedio (salvo DM, tabaquismo o historia familiar de ECV prematura); la ESC lo usa solo para reclasificar el riesgo calculado con SCORE2.'
      ],
      refs: [
        'Mach F, et al. 2019 ESC/EAS Guidelines for the management of dyslipidaemias. Eur Heart J 2020; y la actualización focalizada ESC/EAS 2025.',
        'Grundy SM, et al. 2018 AHA/ACC Guideline on the Management of Blood Cholesterol. Circulation 2019.',
        'Alberti KG, et al. Harmonizing the Metabolic Syndrome. Circulation 2009.',
        'Nissen SE, et al. Bempedoic acid and cardiovascular outcomes in statin-intolerant patients (CLEAR Outcomes). N Engl J Med 2023.',
        'Kronenberg F, et al. Lipoprotein(a) in atherosclerotic cardiovascular disease and aortic stenosis: a European Atherosclerosis Society consensus statement. Eur Heart J 2022.'
      ]
    }
  },

  compares: {
    'ldl-tg': {
      topic: 'smdl', a: 'LDL alto', b: 'TG muy altos',
      rows: [
        ['Riesgo principal', 'Enfermedad cardiovascular aterosclerótica', 'Pancreatitis aguda (y riesgo CV residual)'],
        ['Signos', 'Xantomas tendinosos, arco corneal <45 años', 'Xantomas eruptivos, lipemia retinalis'],
        ['Otros hallazgos', 'Xantelasmas (poco específicos)', 'Hepatoesplenomegalia, dolor abdominal'],
        ['Causas secundarias', 'Hipotiroidismo, síndrome nefrótico, colestasis, anorexia, fármacos', 'DM descontrolada, alcohol, obesidad, ERC, estrógenos, tiazidas, antipsicóticos'],
        ['Primer fármaco', 'Estatina de alta intensidad', 'Fenofibrato (si no, estatina según riesgo)'],
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
    ['Causas secundarias de LDL alto', 'Hipotiroidismo, síndrome nefrótico, colestasis'],
    ['Tríada aterogénica del síndrome metabólico', 'TG ↑, HDL ↓ y LDL pequeñas y densas (resistencia a la insulina → exceso de VLDL)'],
    ['Metas de colesterol no-HDL (ESC/EAS)', 'Muy alto riesgo <85 · alto <100 · moderado <130 mg/dL (meta del LDL + 30)'],
    ['Ácido bempedoico', 'Inhibe la ATP-citrato liasa; se activa en el hígado y no en el músculo (sin mialgias). Efectos: hiperuricemia, gota, colelitiasis'],
    ['Estatina con transaminasas altas o hígado graso', 'ALT <3× el límite: continuar. La MASLD no la contraindica; se evita solo en hepatopatía descompensada'],
    ['Lp(a) elevada (EAS 2022)', '>50 mg/dL (>105 nmol/L): aumenta el riesgo CV. Medirla al menos una vez en la vida']
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
      ref: 'ADA 2026 secc. 3 · AHA 2009' }),

    q({ id: 'smdl-16', dif: 2,
      stem: 'Hombre de 61 años con IAM hace 2 años. Tuvo mialgias intensas con atorvastatina, rosuvastatina y pravastatina a dosis bajas (CK y TSH normales). Toma ezetimiba; LDL 118 mg/dL. Prefiere un tratamiento oral. ¿Qué agregas?',
      opts: ['Gemfibrozilo', 'Ácido bempedoico', 'Niacina', 'Omega-3 a dosis bajas', 'Coenzima Q10'],
      ans: 1,
      exp: 'El ácido bempedoico inhibe la ATP-citrato liasa, un paso antes de la HMG-CoA reductasa. Es un profármaco que se activa en el hígado y no en el músculo, por eso no da mialgias. En intolerantes a estatinas redujo eventos cardiovasculares (CLEAR Outcomes). Si aún no llega a la meta, iPCSK9. Vigila ácido úrico (gota) y colelitiasis.',
      why: ['Baja TG, casi no baja el LDL y no reduce eventos en este contexto.', '', 'No reduce eventos y tiene muchos efectos adversos (bochornos, hiperglucemia, hiperuricemia).', 'No bajan el LDL ni reducen eventos.', 'No baja el LDL y no tiene evidencia sólida en mialgias.'],
      ref: 'Nissen SE, et al. CLEAR Outcomes, NEJM 2023 · ESC/EAS 2025' }),

    q({ id: 'smdl-17', dif: 2,
      stem: 'Mujer de 67 años con ERC G4 (TFG 26 mL/min/1.73 m²) por nefropatía hipertensiva. Sin DM ni ECV conocida; no está en diálisis. LDL 118 mg/dL sin tratamiento. Según la ESC/EAS, ¿cuál es su meta de LDL?',
      opts: ['<116 mg/dL', '<100 mg/dL', '<70 mg/dL y reducción ≥50%', '<55 mg/dL y reducción ≥50%', 'No necesita meta: la ERC no cambia el riesgo'],
      ans: 3,
      exp: 'ERC con TFG <30 = muy alto riesgo (TFG 30–59 = alto). Meta: LDL <55 mg/dL y reducción ≥50%; inicia estatina, sola o con ezetimiba. Si ya estuviera en diálisis y sin ECV, no se inicia una estatina de novo, pero se continúa si ya la tomaba.',
      why: ['Es la meta de riesgo bajo.', 'Es la meta de riesgo moderado.', 'Sería la meta con TFG 30–59 (alto riesgo).', '', 'La ERC avanzada es uno de los equivalentes de riesgo más fuertes.'],
      ref: 'ESC/EAS dislipidemias 2019' }),

    q({ id: 'smdl-18', dif: 3,
      stem: 'Hombre de 56 años con DM2 de 12 años e HTA, alto riesgo (meta LDL <70). En atorvastatina 80 mg: colesterol total 160, HDL 30, TG 350 mg/dL; LDL calculado 60 mg/dL. ¿Cómo interpretas su control?',
      opts: ['En meta: el LDL es <70', 'Fuera de meta: el no-HDL es 130 y su meta es <100', 'El LDL no se puede calcular con TG de 350', 'Debe suspender la estatina y usar fenofibrato', 'Lo único que importa es el HDL bajo: agregar niacina'],
      ans: 1,
      exp: 'Con TG altos, el LDL calculado subestima las partículas aterogénicas (remanentes de VLDL). La meta secundaria es el colesterol no-HDL (CT − HDL = 130), cuya meta es la del LDL + 30: <100 en alto riesgo (<85 en muy alto). Refuerza el estilo de vida y la glucosa y agrega ezetimiba; si los TG persisten con DM o ECV, considera icosapento de etilo.',
      why: ['El LDL calculado engaña cuando los TG están altos; falta revisar el no-HDL.', '', 'Friedewald es válida mientras los TG sean <400.', 'La estatina es la base del tratamiento; no se suspende.', 'Subir el HDL con fármacos no reduce eventos.'],
      ref: 'ESC/EAS dislipidemias 2019' }),

    q({ id: 'smdl-19', dif: 2,
      stem: 'Mujer de 52 años con DM2, IMC 33 y esteatosis hepática por ultrasonido (MASLD). ALT 68 U/L (1.7 veces el límite). LDL 162 mg/dL. Otro médico no le dio estatina “por el hígado”. ¿Qué haces?',
      opts: ['Evitar la estatina mientras la ALT esté elevada', 'Iniciar estatina: la MASLD no la contraindica y una ALT <3 veces el límite no impide usarla', 'Usar solo fenofibrato', 'Esperar a que baje de peso para decidir', 'Pedir biopsia hepática antes de cualquier hipolipemiante'],
      ans: 1,
      exp: 'Las personas con hígado graso metabólico tienen alto riesgo cardiovascular, y las estatinas son seguras en ellas. Una ALT menor de 3 veces el límite no contraindica la estatina. Solo se evita en hepatopatía descompensada o falla hepática aguda.',
      why: ['Negar la estatina deja sin protección a una paciente de alto riesgo.', '', 'El fenofibrato no es el tratamiento del LDL.', 'Retrasa un tratamiento con beneficio demostrado.', 'No hace falta biopsia para iniciar una estatina.'],
      ref: 'ESC/EAS 2019 · AASLD MASLD 2023' }),

    q({ id: 'smdl-20', dif: 3,
      stem: 'Hombre de 55 años, no fumador, sin DM. LDL 138 mg/dL, PA 128/80. Riesgo a 10 años de ECV aterosclerótica: 9% (intermedio). Duda si tomar estatina. Calcio coronario (CAC): 0. Según la ACC/AHA 2018, ¿qué es razonable?',
      opts: ['Estatina de alta intensidad obligatoria', 'Diferir la estatina, reforzar el estilo de vida y revalorar en 5–10 años', 'Iniciar un iPCSK9', 'Ezetimiba sola', 'Coronariografía'],
      ans: 1,
      exp: 'En riesgo intermedio (7.5% a <20%) con decisión dudosa, la ACC/AHA usa el calcio coronario: con CAC = 0 es razonable diferir la estatina (salvo DM, tabaquismo o historia familiar de ECV prematura) y repetirlo en 5–10 años; CAC 1–99 favorece la estatina, sobre todo desde los 55 años; CAC ≥100 la indica. La ESC usa SCORE2 y el CAC solo para reclasificar.',
      why: ['Con CAC 0 y riesgo intermedio no es obligatoria.', '', 'No está indicado en prevención primaria de riesgo intermedio.', 'No es el tratamiento inicial en prevención primaria.', 'No tiene síntomas ni indicación.'],
      ref: 'Grundy SM, et al. ACC/AHA colesterol 2018' })
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
          text: 'Dejó la cerveza. TG 260, LDL 146 mg/dL, A1c 7.6%. Sin ECV ni daño a órgano blanco, pero con DM2 de 11 años, HTA, obesidad y dislipidemia.',
          q: '¿Qué meta de LDL tiene y qué indicas?',
          A: { t: 'Muy alto riesgo (DM con ≥3 FR mayores): LDL <55 y ↓ ≥50%; atorvastatina 80 mg', ok: true, res: 'Inicias atorvastatina 80 mg y citas en 6 semanas con perfil de lípidos.' },
          B: { t: 'Riesgo moderado: meta <100; solo dieta', ok: false, res: 'Subestimaste su riesgo: la DM de más de 10 años ya es alto riesgo, y con 3 factores mayores es muy alto.' },
          why: 'ESC/EAS: DM con daño a órgano blanco o con ≥3 factores de riesgo mayores (HTA, obesidad, dislipidemia, tabaquismo, edad) = muy alto riesgo → LDL <55 mg/dL y reducción ≥50%. Aun sin esos factores, una DM de ≥10 años ya sería alto riesgo (<70).' },
        { tag: '6 semanas después', ecg: 'normal', vit: { X: 190 },
          text: 'En atorvastatina 80 mg. LDL 68 mg/dL (bajó 53%). Sin mialgias.',
          q: '¿Siguiente paso?',
          A: { t: 'Agregar ezetimiba', ok: true, res: 'Con la ezetimiba su LDL baja a 52 mg/dL: en meta.' },
          B: { t: 'Empezar directamente un iPCSK9 y suspender la estatina', ok: false, res: 'Te saltaste un escalón barato y eficaz, y quitaste la estatina que sí tolera.' },
          why: 'Escalera del LDL: estatina de alta intensidad a dosis máxima → ezetimiba → iPCSK9.' }
      ] }
  ]
};
