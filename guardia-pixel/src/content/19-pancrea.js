// Tema 10 · Pancreatitis aguda (Gastroenterología, semana 4)
const T = { topic: 'pancrea', subj: 'gastro' };
const q = (o) => ({ ...T, ...o });

export default {
  lessons: {
    pancrea: {
      hook: 'Diagnóstico con 2 de 3, gravedad con Atlanta revisada, líquidos moderados con Ringer lactato, comida temprana y nada de antibióticos “por si acaso”.',
      anim: 'pancrea',
      compare: ['biliar-alcohol'],
      nn: [['acute-pancreatitis-etiology-pathophysiology-clinical-features-diagnosis-treatment', 'Acute Pancreatitis']],
      yt: 'acute pancreatitis',
      video: [
        { ch: 'La autodigestión', sc: [
          { v: { k: 'title', t: 'Pancreatitis aguda', s: 'Tema 10 · Gastroenterología' },
            say: 'Bienvenido a la guardia. En este video vas a diagnosticar una pancreatitis aguda y a clasificar su gravedad con Atlanta revisada. Luego la vas a tratar como dicen las guías actuales: líquidos moderados, comida temprana y nada de antibióticos por si acaso.' },
          { v: { k: 'case', t: 'Llega a urgencias', p: { name: 'Rosa', age: 47, sex: 'M', skin: '#D9A07A', hair: '#2A1C14', gown: '#9AD18B' }, text: 'Obesidad. Tras una comida abundante: dolor epigástrico intenso que se va a la espalda en cinturón, y vómito.', vit: { FC: '112', PA: '108/66', Lipasa: '9×' } },
            say: 'Conoce a Rosa, de cuarenta y siete años, con obesidad. Después de una comida abundante empezó con dolor epigástrico intenso, que se le va a la espalda como un cinturón, y con vómito. Está taquicárdica y su lipasa está nueve veces arriba del límite. ¿Qué está pasando en su páncreas?' },
          { v: { k: 'anim', id: 'pancrea', step: 0 },
            say: 'La célula acinar fabrica enzimas digestivas inactivas, como el tripsinógeno. Las guarda en gránulos y las manda por el conducto pancreático hasta el duodeno. Solo ahí deben activarse.' },
          { v: { k: 'anim', id: 'pancrea', step: 1 },
            say: 'Si un lito tapa la ampolla, o si el alcohol daña la célula, la salida se frena. El tripsinógeno se activa antes de tiempo, dentro del páncreas, y se convierte en tripsina.' },
          { v: { k: 'anim', id: 'pancrea', step: 2 },
            say: 'La tripsina activa a otras enzimas, como la elastasa y la fosfolipasa. El páncreas empieza a digerirse a sí mismo y a la grasa de alrededor. Hay edema y, en los casos graves, necrosis y hemorragia.' },
          { v: { k: 'list', t: 'Causas', items: ['Litiasis biliar: la primera', 'Alcohol: la segunda', 'Triglicéridos >1000 mg/dL', 'Post-CPRE e hipercalcemia', 'Fármacos: azatioprina, valproato'] },
            say: 'La causa número uno es la litiasis biliar, y la segunda, el alcohol. Después vienen los triglicéridos muy altos, en general arriba de mil, la colangiopancreatografía retrógrada endoscópica y la hipercalcemia. También fármacos como la azatioprina y el valproato. Por eso, a todos les pides triglicéridos y calcio.' }
        ] },
        { ch: 'Diagnóstico: dos de tres', sc: [
          { v: { k: 'list', t: 'Diagnóstico: 2 de 3', items: ['Dolor epigástrico intenso, hacia la espalda', 'Lipasa o amilasa ≥3 veces el límite', 'Imagen compatible (TC, RM o USG)'] },
            say: 'El diagnóstico se hace con dos de tres criterios. Uno: dolor epigástrico típico, intenso, que se irradia a la espalda. Dos: lipasa o amilasa de tres veces o más el límite superior. Tres: una imagen compatible. La lipasa es más específica y se queda elevada más días.' },
          { v: { k: 'big', h: 'Lipasa o amilasa', t: '≥3×', u: 'el límite superior', s: 'Su nivel no predice la gravedad ni dice cuándo comer.' },
            say: 'Grábate el número: tres veces el límite superior. Y una trampa clásica: el nivel de la lipasa no predice la gravedad. Una lipasa de nueve veces no es peor que una de cuatro, ni sirve para decidir cuándo comer.' },
          { v: { k: 'tip', kind: 'trap', t: 'Dolor típico + lipasa ≥3× = diagnóstico. No pidas TC de entrada: USG a todos para buscar litos; TC con contraste si hay duda o no mejora en 48–72 h.' },
            say: 'Si ya tienes dolor típico y lipasa elevada, no necesitas tomografía para diagnosticar. Lo que sí pides a todos es un ultrasonido abdominal, para buscar litos. La tomografía con contraste se reserva para la duda diagnóstica, o si no mejora en cuarenta y ocho a setenta y dos horas. Antes, la necrosis todavía no se ve bien.' },
          { v: { k: 'quiz', q: 'Rosa: dolor típico y lipasa 9×. ¿Le pides TC con contraste hoy?', opts: ['Sí, para confirmar y ver necrosis', 'No: USG para buscar litos'], a: 1 },
            say: 'Pausa. Rosa tiene dolor típico y lipasa nueve veces arriba del límite. ¿Le pides tomografía con contraste hoy?',
            exp: 'No. El diagnóstico ya está hecho con dos de tres criterios. Pide ultrasonido para buscar litos. El de Rosa muestra una vesícula llena de litos, y su alanina aminotransferasa está en doscientos sesenta. Es una pancreatitis biliar.' }
        ] },
        { ch: 'Gravedad: Atlanta revisada', sc: [
          { v: { k: 'anim', id: 'pancrea', step: 3 },
            say: 'En algunos pacientes, las citocinas salen a la circulación. Hay fuga capilar, hipovolemia y respuesta inflamatoria sistémica. Así llega la falla orgánica: pulmón, riñón o choque. De eso depende la gravedad.' },
          { v: { k: 'list', t: 'Atlanta revisada (2012)', items: ['Leve: sin falla orgánica ni complicaciones', 'Mod. grave: falla <48 h o complicación local', 'Grave: falla orgánica persistente >48 h'] },
            say: 'La clasificación de Atlanta revisada tiene tres grados. Leve: sin falla orgánica ni complicaciones. Moderadamente grave: falla orgánica transitoria, que se resuelve en menos de cuarenta y ocho horas, o complicaciones locales o sistémicas. Grave: falla orgánica que persiste más de cuarenta y ocho horas.' },
          { v: { k: 'big', h: 'Pancreatitis grave', t: '>48 h', u: 'de falla orgánica', s: 'Respiratoria, renal o cardiovascular (Marshall modificado ≥2). La TC no define la gravedad.' },
            say: 'La palabra clave es persistente. La falla orgánica se mide con la escala de Marshall modificada, en el sistema respiratorio, renal o cardiovascular. Si dura más de cuarenta y ocho horas, es grave, aunque la tomografía se vea bien.' },
          { v: { k: 'list', t: 'Predicen mala evolución', items: ['SRIS persistente', 'BUN alto o en aumento', 'Hematocrito >44% o en aumento', 'Edad avanzada y obesidad', 'BISAP ≥3'] },
            say: 'Al ingreso, busca predictores de mala evolución: respuesta inflamatoria sistémica que persiste, nitrógeno ureico alto o en aumento, y hematocrito mayor de cuarenta y cuatro por ciento. También la edad avanzada y la obesidad. Una escala BISAP de tres o más predice mayor mortalidad.' },
          { v: { k: 'quiz', q: 'Pancreatitis con oxígeno a alto flujo desde hace 72 h. ¿Gravedad?', opts: ['Moderadamente grave', 'Grave'], a: 1 },
            say: 'Pausa. Un paciente con pancreatitis necesita oxígeno a alto flujo desde hace setenta y dos horas. ¿Qué gravedad tiene?',
            exp: 'Grave, porque la falla respiratoria persiste más de cuarenta y ocho horas. Si se hubiera resuelto antes, sería moderadamente grave.' }
        ] },
        { ch: 'Líquidos, analgesia y comida', sc: [
          { v: { k: 'big', h: 'Ringer lactato moderado', t: '1.5', u: 'mL/kg/h', s: 'Bolo de 10 mL/kg solo si hay hipovolemia. Reevalúa FC, PA, uresis, BUN y hematocrito.' },
            say: 'Los líquidos son el pilar. Usa Ringer lactato con una estrategia moderada: un bolo de diez mililitros por kilo si hay hipovolemia, y luego uno punto cinco mililitros por kilo por hora. Reevalúa seguido la frecuencia cardiaca, la presión, la uresis, el nitrógeno ureico y el hematocrito.' },
          { v: { k: 'tip', kind: 'trap', t: 'WATERFALL (2022): la reanimación agresiva causó más sobrecarga de volumen sin mejorar los desenlaces. Ya no son 250–500 mL/h para todos.' },
            say: 'Ojo con la trampa. En el estudio WATERFALL, la reanimación agresiva causó más sobrecarga de volumen y no mejoró los desenlaces. Por eso ya no se dan doscientos cincuenta a quinientos mililitros por hora a todos.' },
          { v: { k: 'list', t: 'Lo que sí y lo que no', items: ['Analgesia suficiente (opioides aceptables)', 'Comida oral en cuanto tolere', 'Si no tolera: enteral, no parenteral', 'Sin antibióticos profilácticos', 'CPRE urgente solo con colangitis'] },
            say: 'Además de líquidos, analgesia suficiente: los opioides son aceptables. Comida por boca en cuanto la tolere, con dieta baja en grasa. Si no tolera, nutrición enteral por sonda, antes que parenteral. Nada de antibióticos profilácticos. Y colangiopancreatografía urgente solo si hay colangitis.' },
          { v: { k: 'quiz', q: 'Día 2: Rosa tiene hambre y ya no vomita. Lipasa aún 5×. ¿Qué indicas?', opts: ['Ayuno hasta normalizar la lipasa', 'Dieta oral baja en grasa hoy'], a: 1 },
            say: 'Pausa. Es el segundo día. Rosa tiene hambre, ya no vomita y el dolor bajó. Pero la lipasa sigue cinco veces arriba. ¿Qué indicas?',
            exp: 'Dieta oral baja en grasa desde hoy. La alimentación temprana protege la barrera intestinal y acorta la estancia. La lipasa no guía cuándo comer.' }
        ] },
        { ch: 'Biliar o alcohólica', sc: [
          { v: { k: 'vs', cmp: 'biliar-alcohol', rows: [0, 1, 2] },
            say: 'Distingue las dos causas principales. La biliar es típica de mujeres con obesidad, con alanina aminotransferasa mayor de ciento cincuenta en las primeras cuarenta y ocho horas y litos en el ultrasonido. La alcohólica es típica de hombres con consumo intenso. En la biliar, el procedimiento clave es quitar la vesícula; en la alcohólica, dejar el alcohol.' },
          { v: { k: 'flow', t: 'Pancreatitis biliar', steps: ['¿Colangitis? → CPRE en <24 h', 'Sin colangitis → sin CPRE urgente', 'Leve → colecistectomía antes del alta', 'Necrosante → cirugía diferida'] },
            say: 'En la pancreatitis biliar, la pregunta es si hay colangitis: fiebre, ictericia y dolor en el hipocondrio derecho. Si la hay, antibióticos y colangiopancreatografía en menos de veinticuatro horas. Si no, no hace falta de urgencia. Si fue leve, la vesícula se quita en el mismo internamiento, como a Rosa. Si fue necrosante, la cirugía se difiere.' }
        ] },
        { ch: 'Complicaciones', sc: [
          { v: { k: 'list', t: 'Colecciones: tiempo y necrosis', items: ['<4 sem, sin necrosis: colección peripancreática', '>4 sem, sin necrosis: pseudoquiste', '<4 sem, con necrosis: colección necrótica', '>4 sem, con necrosis: necrosis encapsulada', 'Se drenan solo si dan síntomas o se infectan'] },
            say: 'Las complicaciones locales se nombran según el tiempo y la necrosis. Antes de cuatro semanas son colecciones agudas, peripancreáticas o necróticas. Después de cuatro semanas, ya con pared definida, son el pseudoquiste o la necrosis encapsulada. Solo se drenan si dan síntomas o se infectan.' },
          { v: { k: 'flow', t: 'Necrosis infectada', steps: ['Gas en la necrosis o deterioro', 'Carbapenémico', 'Drenaje percutáneo o endoscópico', 'Necrosectomía diferida (>4 sem)'] },
            say: 'Sospecha necrosis infectada si hay gas dentro de la necrosis en la tomografía, o si el paciente se deteriora después de la primera semana. Da antibióticos que penetren, como un carbapenémico. Luego, abordaje escalonado: primero drenaje percutáneo o endoscópico. La necrosectomía se difiere, idealmente después de cuatro semanas.' },
          { v: { k: 'list', t: 'Sistémicas y tardías', items: ['SDRA, lesión renal aguda, choque', 'Hipocalcemia e hiperglucemia', 'Trombosis de la vena esplénica', 'Pseudoaneurisma: sangrado tardío'] },
            say: 'También hay complicaciones sistémicas: síndrome de dificultad respiratoria aguda, lesión renal aguda y choque. La hipocalcemia aparece porque la grasa necrosada atrapa calcio. Y semanas después, la trombosis de la vena esplénica puede dar várices gástricas aisladas.' },
          { v: { k: 'mnemo', t: 'Líquidos, comida y paciencia', d: 'Líquidos moderados con Ringer lactato · comida en cuanto tolere · paciencia con la necrosis: sin antibióticos profilácticos y necrosectomía diferida.' },
            say: 'Para no olvidarlo: líquidos, comida y paciencia. Líquidos moderados con Ringer lactato. Comida en cuanto tolere. Y paciencia con la necrosis: sin antibióticos profilácticos y con la necrosectomía diferida.' },
          { v: { k: 'tip', kind: 'pearl', t: 'Grave = falla orgánica >48 h. La necrosis estéril no lleva antibióticos. CPRE urgente solo con colangitis.' },
            say: 'La perla para el examen: grave es la falla orgánica que dura más de cuarenta y ocho horas. La necrosis estéril no lleva antibióticos. Y la colangiopancreatografía urgente es solo para la colangitis. Ahora ve a las preguntas del tema y ponte a prueba.' }
        ] }
      ],
      sections: [
        { h: 'Causas', html: `
<ul>
<li><b>Litiasis biliar</b> (la primera) y <b>alcohol</b> (la segunda).</li>
<li><b>Hipertrigliceridemia</b> (habitualmente &gt;1 000 mg/dL), <b>post-CPRE</b>, hipercalcemia (hiperparatiroidismo), fármacos (azatioprina, valproato, didanosina, estrógenos, tiazidas), trauma, tumores (IPMN), autoinmune (IgG4), genética, infecciones (parotiditis).</li>
<li>Pista biliar: ALT &gt;150 U/L en las primeras 48 h y litos en el USG.</li>
</ul>
<p>Mnemotecnia en inglés: <b>I GET SMASHED</b> (Idiopathic, Gallstones, Ethanol, Trauma, Steroids, Mumps, Autoimmune, Scorpion, Hypercalcemia/Hypertriglyceridemia, ERCP, Drugs).</p>` },
        { h: 'Diagnóstico (2 de 3)', html: `
<ol>
<li>Dolor epigástrico típico, intenso, irradiado en cinturón a la espalda.</li>
<li>Lipasa o amilasa ≥3 veces el límite superior (la lipasa es más específica y dura más días).</li>
<li>Imagen compatible.</li>
</ol>
<ul>
<li><b>USG abdominal a todos</b> para buscar litiasis.</li>
<li><b>TC con contraste</b> solo si hay duda diagnóstica o si no mejora en 48–72 h (la necrosis se ve mejor después de 72 h).</li>
<li>El nivel de lipasa no predice la gravedad.</li>
<li>Signos de Grey Turner (flancos) y Cullen (periumbilical): hemorragia retroperitoneal.</li>
<li>Pide TG y calcio para buscar causa.</li>
</ul>` },
        { h: 'Gravedad (Atlanta revisada 2012)', html: `
<div class="tablewrap"><table class="mini">
<tr><th>Grado</th><th>Definición</th></tr>
<tr><td>Leve</td><td>Sin falla orgánica ni complicaciones locales o sistémicas</td></tr>
<tr><td>Moderadamente grave</td><td>Falla orgánica transitoria (&lt;48 h) y/o complicaciones locales o sistémicas</td></tr>
<tr><td>Grave</td><td>Falla orgánica persistente (&gt;48 h)</td></tr>
</table></div>
<ul>
<li>Falla orgánica: Marshall modificado ≥2 en sistema respiratorio, renal o cardiovascular.</li>
<li><b>BISAP</b> (1 punto cada uno): BUN &gt;25 mg/dL, alteración del estado mental, SRIS, edad &gt;60 años y derrame pleural. ≥3 = mayor mortalidad.</li>
<li>Predictores tempranos de gravedad: SRIS persistente, BUN alto o en aumento, hematocrito &gt;44% o en aumento, edad avanzada, obesidad, <b>BISAP ≥3</b> (calculadora en Más → Calculadoras).</li>
</ul>` },
        { h: 'Complicaciones locales', html: `
<div class="tablewrap"><table class="mini">
<tr><th></th><th>&lt;4 semanas</th><th>&gt;4 semanas (pared definida)</th></tr>
<tr><td>Sin necrosis (edematosa)</td><td>Colección peripancreática aguda</td><td><b>Pseudoquiste</b></td></tr>
<tr><td>Con necrosis</td><td>Colección necrótica aguda</td><td><b>Necrosis encapsulada</b> (walled-off)</td></tr>
</table></div>
<ul>
<li>Pseudoquiste o necrosis encapsulada: solo se drenan si dan síntomas o se infectan.</li>
<li><b>Necrosis infectada</b>: gas en la necrosis en la TC o deterioro tras 7–10 días → antibióticos que penetren (carbapenémico) y abordaje escalonado: drenaje percutáneo o endoscópico; necrosectomía diferida (idealmente después de 4 semanas).</li>
<li>Sistémicas: SDRA, LRA, choque, hipocalcemia, hiperglucemia; trombosis de la vena esplénica, pseudoaneurisma.</li>
</ul>` },
        { h: 'Tratamiento', html: `
<ul>
<li><b>Líquidos</b>: Ringer lactato con estrategia moderada y dirigida a metas (bolo de 10 mL/kg si hay hipovolemia, luego ~1.5 mL/kg/h) y reevaluación frecuente. La reanimación agresiva aumentó la sobrecarga sin beneficio (WATERFALL 2022).</li>
<li><b>Analgesia</b> adecuada; los opioides son aceptables.</li>
<li><b>Nutrición oral temprana</b> (dieta sólida baja en grasa en cuanto la tolere, en las primeras 24–72 h); no esperar a que baje la lipasa. Si no tolera, enteral (sonda nasogástrica o nasoyeyunal) antes que parenteral.</li>
<li><b>No antibióticos profilácticos</b>, ni siquiera en necrosis estéril.</li>
<li><b>CPRE urgente (&lt;24 h)</b> solo si hay colangitis (o obstrucción biliar persistente). No en pancreatitis biliar sin colangitis.</li>
<li><b>Colecistectomía en la misma hospitalización</b> en la pancreatitis biliar leve: previene recurrencias.</li>
<li><b>Hipertrigliceridemia</b>: infusión de insulina (con dextrosa) o plasmaféresis; después fibratos y control de causas.</li>
<li>Alcohol: consejería breve y seguimiento.</li>
</ul>` },
        { h: 'Fisiopatología en 1 minuto', html: `
<ul>
<li>El páncreas guarda sus enzimas como precursores inactivos (tripsinógeno) y tiene un inhibidor de tripsina (SPINK1) como seguro.</li>
<li>Un lito en la ampolla, el alcohol, los triglicéridos o la CPRE activan la tripsina <b>dentro</b> de la célula acinar → se activan elastasa y fosfolipasa → autodigestión, edema y necrosis.</li>
<li>Los ácidos grasos de la necrosis grasa atrapan calcio (saponificación) → <b>hipocalcemia</b>, un marcador de gravedad.</li>
<li>Las citocinas causan fuga capilar → hipovolemia (suben hematocrito y BUN) → SRIS → falla orgánica. Por eso lo primero es reponer volumen y vigilar los órganos.</li>
<li>La mayoría son edematosas intersticiales y leves; la necrosante es la que se complica.</li>
</ul>` },
        { h: 'Diagnóstico diferencial', html: `
<div class="tablewrap"><table class="mini">
<tr><th>Diagnóstico</th><th>Lo distingue</th></tr>
<tr><td>Úlcera perforada</td><td>Dolor súbito “en puñalada”, abdomen en tabla, aire libre subdiafragmático. La amilasa puede subir, pero poco.</td></tr>
<tr><td>Colecistitis o colangitis</td><td>Dolor en hipocondrio derecho, Murphy; colangitis: fiebre + ictericia + dolor (Charcot).</td></tr>
<tr><td>Isquemia mesentérica</td><td>Dolor desproporcionado a la exploración; fibrilación auricular o edad avanzada; lactato alto; angio-TC.</td></tr>
<tr><td>Aneurisma aórtico roto o disección</td><td>Dolor a la espalda con hipotensión, masa pulsátil o pulsos asimétricos.</td></tr>
<tr><td>IAM inferior</td><td>Dolor epigástrico con náusea en diabético o adulto mayor: ECG y troponina.</td></tr>
<tr><td>Obstrucción intestinal</td><td>Distensión, vómito, sin evacuaciones ni gases; niveles hidroaéreos.</td></tr>
<tr><td>Cetoacidosis diabética</td><td>Dolor abdominal y vómito, a veces con lipasa alta; glucosa, cetonas y anión gap.</td></tr>
</table></div>
<p><b>Lipasa alta sin pancreatitis</b>: ERC (menor depuración), macrolipasemia, cetoacidosis, obstrucción intestinal, úlcera perforada. Por eso se piden <b>2 de 3</b> criterios y el umbral es ≥3×.</p>` },
        { h: 'Cómo lo preguntan en el examen', html: `
<ul>
<li><b>Dolor en cinturón + lipasa ≥3×</b> → ya es pancreatitis. La trampa: pedir TC “para confirmar”. Lo que sigue es USG para buscar litos.</li>
<li><b>ALT &gt;150 U/L en las primeras 48 h</b> → origen biliar. Si es leve → colecistectomía en la misma hospitalización.</li>
<li><b>Fiebre + ictericia + dolor en hipocondrio derecho</b> → colangitis: antibióticos y CPRE en &lt;24 h. Sin colangitis, la CPRE urgente es la trampa.</li>
<li><b>Falla respiratoria o renal que dura &gt;48 h</b> → grave. Si cede antes → moderadamente grave.</li>
<li><b>Necrosis sin fiebre ni gas</b> → sin antibióticos. <b>Gas en la necrosis</b> → carbapenémico y drenaje escalonado.</li>
<li><b>Suero lechoso, TG &gt;1 000 mg/dL</b> → insulina IV con dextrosa (o plasmaféresis), luego fibrato.</li>
</ul>` }
      ],
      mnemo: { t: 'Pancreatitis: “LÍQUIDOS, COMIDA y PACIENCIA”', d: 'Líquidos moderados con Ringer lactato, comida en cuanto tolere y paciencia con la necrosis: sin antibióticos profilácticos y con la necrosectomía diferida. La CPRE urgente solo si hay colangitis.' },
      pearl: 'Si ya tienes dolor típico + lipasa ≥3×, no necesitas TC para diagnosticar. Pide USG para buscar litos y TC solo si hay duda o no mejora en 48–72 h.',
      trap: 'Dejar al paciente en ayuno “hasta que se normalice la lipasa” o darle antibióticos profilácticos por necrosis estéril: ambas son respuestas incorrectas en las guías actuales.',
      guide: [
        'Volumen de líquidos: guías antiguas (ACG 2013) proponían 250–500 mL/h; tras WATERFALL (2022) las guías recientes recomiendan reanimación moderada y dirigida. ⚠️ Si tu profesor enseñó la versión agresiva, considera que el examen puede seguirla.',
        'Atlanta revisada (2012) es la clasificación vigente; Ranson es histórica (necesita 48 h).'
      ],
      refs: [
        'Banks PA, et al. Classification of acute pancreatitis—2012: revision of the Atlanta classification. Gut 2013.',
        'Tenner S, et al. American College of Gastroenterology Guidelines: Management of Acute Pancreatitis. Am J Gastroenterol 2024.',
        'de-Madaria E, et al. Aggressive or Moderate Fluid Resuscitation in Acute Pancreatitis (WATERFALL). N Engl J Med 2022.'
      ]
    }
  },

  compares: {
    'biliar-alcohol': {
      topic: 'pancrea', a: 'Pancreatitis biliar', b: 'Pancreatitis alcohólica',
      rows: [
        ['Perfil típico', 'Mujer, obesidad, edad media', 'Hombre con consumo crónico intenso'],
        ['Laboratorio', 'ALT >150 U/L en 48 h; bilirrubina y FA altas', 'GGT alta; lipasa menor si ya hubo episodios'],
        ['Imagen', 'Litos o lodo en el USG; colédoco dilatado', 'Calcificaciones si ya hay daño crónico'],
        ['Procedimiento clave', 'Colecistectomía en la misma hospitalización (si es leve); CPRE solo con colangitis u obstrucción', 'Consejería para dejar el alcohol'],
        ['Riesgo a largo plazo', 'Recurrencia si no se opera', 'Pancreatitis crónica, insuficiencia exocrina y endocrina']
      ]
    }
  },

  anims: {
    pancrea: {
      title: 'La autodigestión',
      steps: [
        { cap: '<b>Célula acinar normal.</b> Fabrica enzimas inactivas (tripsinógeno) en gránulos y las envía por el conducto hacia el duodeno, donde se activan.',
          labels: [[40, 14, 'Célula acinar'], [40, 64, 'Tripsinógeno'], [130, 64, 'Conducto'], [140, 104, 'Duodeno']] },
        { cap: '<b>Obstrucción o alcohol.</b> Un lito en la ampolla (o el alcohol) frena la salida. Dentro de la célula el tripsinógeno se activa antes de tiempo y se convierte en tripsina.',
          labels: [[140, 80, 'Lito'], [40, 64, 'Tripsina activa']] },
        { cap: '<b>Autodigestión.</b> La tripsina activa a otras enzimas (elastasa, fosfolipasa): se digiere el propio páncreas y la grasa alrededor. Edema, necrosis y hemorragia.',
          labels: [[40, 64, 'Enzimas activas'], [100, 30, 'Necrosis']] },
        { cap: '<b>Respuesta sistémica.</b> Las citocinas salen a la circulación: fuga capilar, hipovolemia, SRIS y falla orgánica (pulmón, riñón, choque). Por eso se reponen líquidos y se vigilan los órganos.',
          labels: [[80, 14, 'Citocinas'], [40, 104, 'Pulmón'], [120, 104, 'Riñón']] }
      ]
    }
  },

  cards: [
    ['Causas principales de pancreatitis', 'Litiasis biliar y alcohol'],
    ['Diagnóstico de pancreatitis', '2 de 3: dolor típico, lipasa/amilasa ≥3×, imagen compatible'],
    ['¿Cuándo pedir TC?', 'Duda diagnóstica o sin mejoría a las 48–72 h'],
    ['Pista de pancreatitis biliar', 'ALT >150 U/L en 48 h + litos en USG'],
    ['Pancreatitis grave (Atlanta)', 'Falla orgánica persistente >48 h'],
    ['Pancreatitis moderadamente grave', 'Falla orgánica <48 h y/o complicaciones locales o sistémicas'],
    ['Pseudoquiste vs colección aguda', 'Pseudoquiste: >4 semanas con pared definida'],
    ['Líquidos en pancreatitis', 'Ringer lactato, moderados y dirigidos a metas'],
    ['Nutrición', 'Oral temprana en cuanto tolere; si no, enteral'],
    ['Antibióticos profilácticos', 'No (ni en necrosis estéril)'],
    ['Necrosis infectada', 'Carbapenémico + abordaje escalonado (drenaje; necrosectomía diferida)'],
    ['CPRE urgente', 'Solo con colangitis u obstrucción biliar persistente'],
    ['Colecistectomía en pancreatitis biliar leve', 'En la misma hospitalización'],
    ['Pancreatitis por TG muy altos', 'Insulina IV con dextrosa o plasmaféresis; luego fibrato'],
    ['Prevención de pancreatitis post-CPRE', 'Indometacina o diclofenaco rectal; en alto riesgo, también Ringer lactato y stent pancreático'],
    ['BISAP (1 punto cada uno)', 'BUN >25 mg/dL, alteración mental, SRIS, edad >60 años, derrame pleural'],
    ['Várices gástricas aisladas después de una pancreatitis', 'Trombosis de la vena esplénica (hipertensión portal izquierda)'],
    ['Pancreatitis biliar necrosante: ¿cuándo la colecistectomía?', 'Diferida hasta que las colecciones se resuelvan o, si persisten, hacia las 6 semanas'],
    ['Pancreatitis “idiopática” con USG normal', 'Ultrasonido endoscópico: microlitiasis o tumor pequeño']
  ],

  questions: [
    q({ id: 'pan-01', dif: 1,
      stem: 'Mujer de 38 años con dolor epigástrico intenso irradiado a la espalda. Lipasa 4 veces el límite superior; amilasa normal. ¿Se puede diagnosticar pancreatitis aguda?',
      opts: ['No: la amilasa debe estar elevada', 'Sí: dolor típico + lipasa ≥3×', 'Solo con TC', 'Solo si la lipasa es >10×', 'Solo con CPRE'],
      ans: 1,
      exp: 'Bastan 2 de 3 criterios. La lipasa es más específica y se mantiene elevada más tiempo que la amilasa, que puede ser normal (sobre todo en la alcohólica y la de hipertrigliceridemia).',
      why: ['No se necesitan ambas enzimas.', '', 'La TC no es necesaria si ya se cumplen 2 criterios.', 'El umbral es ≥3×.', 'No es diagnóstica.'],
      ref: 'Atlanta revisada 2012' }),

    q({ id: 'pan-02', dif: 1,
      stem: 'Mujer de 45 años con pancreatitis aguda. ALT 320 U/L a las 24 h. ¿Causa más probable y estudio inicial?',
      opts: ['Alcohol; ninguno', 'Litiasis biliar; USG abdominal', 'Hipertrigliceridemia; perfil de lípidos solamente', 'Fármacos; suspender todo', 'Autoinmune; IgG4'],
      ans: 1,
      exp: 'Una ALT >150 U/L en las primeras 48 h sugiere origen biliar con buena especificidad. El USG abdominal busca litos o lodo y se pide en todos los pacientes con pancreatitis.',
      why: ['La ALT tan alta orienta a biliar.', '', 'Se piden lípidos, pero la ALT orienta a biliar.', 'No hay fármaco sospechoso.', 'Es una causa rara.'],
      ref: 'ACG 2024' }),

    q({ id: 'pan-03', dif: 2,
      stem: 'Hombre de 50 años con pancreatitis aguda, FC 112, PA 104/66. ¿Qué estrategia de líquidos recomiendan las guías actuales?',
      opts: ['Solución salina 20 mL/kg/h por 24 h', 'Ringer lactato moderado: bolo de 10 mL/kg si hay hipovolemia y luego ~1.5 mL/kg/h, reevaluando', 'Restricción de líquidos', 'Coloides (almidones)', 'Solo vía oral'],
      ans: 1,
      exp: 'WATERFALL (2022): la reanimación agresiva causó más sobrecarga de volumen sin mejorar desenlaces. Se recomienda Ringer lactato con estrategia moderada y dirigida (FC, PA, uresis, BUN, hematocrito).',
      why: ['Agresiva y con salina: más sobrecarga y acidosis hiperclorémica.', '', 'Está hipovolémico.', 'Los almidones dañan el riñón.', 'Necesita reanimación IV.'],
      ref: 'WATERFALL 2022 · ACG 2024' }),

    q({ id: 'pan-04', dif: 1,
      stem: 'Mujer con pancreatitis leve. Al día 2 ya no tiene náusea, el dolor mejoró y tiene hambre. La lipasa sigue 4× el límite. ¿Qué indicas?',
      opts: ['Ayuno hasta que la lipasa se normalice', 'Dieta oral baja en grasa desde ahora', 'Nutrición parenteral', 'Sonda nasoyeyunal', 'Solo líquidos claros por 1 semana'],
      ans: 1,
      exp: 'La alimentación oral temprana (incluso dieta sólida baja en grasa) es segura y acorta la estancia. No hay que esperar a que se normalice la lipasa.',
      why: ['No se recomienda: la lipasa no guía la realimentación.', '', 'Solo si no puede usar el tubo digestivo.', 'Innecesaria si come.', 'Restringe sin motivo.'],
      ref: 'ACG 2024' }),

    q({ id: 'pan-05', dif: 2,
      stem: 'Hombre con pancreatitis grave. TC al día 5: necrosis del 40% del páncreas, sin gas, sin fiebre, hemodinámicamente estable. ¿Indicas antibióticos?',
      opts: ['Sí, imipenem profiláctico', 'No: la necrosis estéril no requiere antibióticos profilácticos', 'Sí, fluconazol', 'Sí, ceftriaxona por 14 días', 'Sí, metronidazol'],
      ans: 1,
      exp: 'Los antibióticos profilácticos no reducen mortalidad ni infección en la necrosis estéril y favorecen resistencias y hongos. Se usan solo si hay infección demostrada o fuertemente sospechada.',
      why: ['No están indicados.', '', 'Tampoco antifúngicos profilácticos.', 'No hay infección.', 'No hay infección.'],
      ref: 'ACG 2024 · IAP/APA 2013' }),

    q({ id: 'pan-06', dif: 2,
      stem: 'Mujer con pancreatitis necrosante. Al día 14 presenta fiebre de 39 °C, leucocitosis y deterioro. La TC muestra gas dentro de la colección necrótica. ¿Manejo?',
      opts: ['Necrosectomía quirúrgica abierta inmediata', 'Carbapenémico y abordaje escalonado: drenaje percutáneo o endoscópico, con necrosectomía diferida si hace falta', 'Observar', 'Solo esteroides', 'CPRE'],
      ans: 1,
      exp: 'Gas en la necrosis = necrosis infectada. Antibióticos que penetren (carbapenémicos) y abordaje escalonado (step-up): primero drenaje mínimamente invasivo; la necrosectomía se retrasa, idealmente a >4 semanas, cuando la necrosis se encapsula.',
      why: ['La cirugía temprana abierta aumenta la mortalidad.', '', 'Es una infección grave.', 'No están indicados.', 'No trata la necrosis.'],
      ref: 'van Santvoort HC, et al. PANTER, NEJM 2010 · ACG 2024' }),

    q({ id: 'pan-07', dif: 2,
      stem: 'Hombre de 62 años con pancreatitis biliar, fiebre de 39 °C, ictericia y dolor en hipocondrio derecho. Bilirrubina 6.2 mg/dL. ¿Qué haces?',
      opts: ['Colecistectomía hoy', 'CPRE urgente (<24 h) con antibióticos', 'TC y observar', 'Solo antibióticos', 'Colangio-RM en 1 semana'],
      ans: 1,
      exp: 'La tríada de Charcot (fiebre, ictericia, dolor) indica colangitis: requiere antibióticos y CPRE urgente para drenar la vía biliar. En pancreatitis biliar sin colangitis no se hace CPRE urgente.',
      why: ['La vía biliar debe drenarse primero; la colecistectomía va después.', '', 'Retrasa un drenaje urgente.', 'Sin drenaje no se controla.', 'Demasiado tarde.'],
      ref: 'ACG 2024 · Tokyo Guidelines 2018' }),

    q({ id: 'pan-08', dif: 1,
      stem: 'Mujer de 40 años con pancreatitis biliar leve, ya sin dolor y tolerando dieta. ¿Cuándo debe operarse de la vesícula?',
      opts: ['En 6 meses', 'En la misma hospitalización', 'Solo si vuelve a tener pancreatitis', 'Nunca', 'En 3 años'],
      ans: 1,
      exp: 'En pancreatitis biliar leve, la colecistectomía en la misma hospitalización reduce las recurrencias y complicaciones biliares (PONCHO). En la necrosante se difiere hasta que se resuelvan las colecciones.',
      why: ['Retrasar aumenta las recurrencias.', '', 'Esperar una recurrencia es peligroso.', 'Tiene alto riesgo de recurrencia.', 'Demasiado tarde.'],
      ref: 'da Costa DW, et al. PONCHO, Lancet 2015' }),

    q({ id: 'pan-09', dif: 2,
      stem: 'Hombre con pancreatitis aguda que tiene insuficiencia respiratoria que requiere oxígeno a alto flujo desde hace 72 h. ¿Gravedad según Atlanta revisada?',
      opts: ['Leve', 'Moderadamente grave', 'Grave', 'No se puede saber sin TC', 'Crítica según Ranson'],
      ans: 2,
      exp: 'Falla orgánica que persiste más de 48 h = pancreatitis grave. Si se resolviera antes de 48 h, sería moderadamente grave.',
      why: ['Tiene falla orgánica.', 'Sería si la falla durara <48 h.', '', 'La gravedad se define por la falla orgánica, no por la TC.', 'Atlanta revisada no usa Ranson.'],
      ref: 'Atlanta revisada 2012' }),

    q({ id: 'pan-10', dif: 1,
      stem: 'Seis semanas después de una pancreatitis, una paciente asintomática tiene en la TC una colección de 5 cm con pared bien definida, sin necrosis. ¿Qué haces?',
      opts: ['Drenaje percutáneo inmediato', 'Observar: pseudoquiste asintomático', 'Cirugía urgente', 'Antibióticos', 'CPRE'],
      ans: 1,
      exp: 'Una colección sin necrosis con pared definida tras >4 semanas es un pseudoquiste. Si es asintomático, se observa; se drena si causa dolor, obstrucción, infección o sangrado.',
      why: ['No hay indicación.', '', 'No hay indicación.', 'No hay infección.', 'No hay indicación.'],
      ref: 'Atlanta revisada 2012 · ACG 2024' }),

    q({ id: 'pan-11', dif: 2,
      stem: 'Hombre de 39 años con DM2 descontrolada y pancreatitis aguda. Suero lechoso; TG 2 400 mg/dL. ¿Tratamiento específico además del habitual?',
      opts: ['Fenofibrato oral solo', 'Infusión de insulina con dextrosa (o plasmaféresis) para bajar los TG', 'Estatina de alta intensidad', 'Omega-3', 'Nada específico'],
      ans: 1,
      exp: 'En pancreatitis por hipertrigliceridemia, la insulina IV activa la lipoproteína lipasa y baja rápido los TG; la plasmaféresis es alternativa en casos graves. Después: fibrato, dieta y control de la DM.',
      why: ['Se usa después; no baja los TG con la rapidez necesaria.', '', 'No es para TG.', 'Efecto lento.', 'Sí hay tratamiento específico.'],
      ref: 'ACG 2024' }),

    q({ id: 'pan-12', dif: 2,
      stem: 'Mujer de 55 años con pancreatitis sin litos ni alcohol, TG normales. Calcio 12.1 mg/dL. ¿Qué causa buscas?',
      opts: ['Hipotiroidismo', 'Hiperparatiroidismo primario', 'Hipoparatiroidismo', 'Déficit de vitamina D', 'Hipomagnesemia'],
      ans: 1,
      exp: 'La hipercalcemia es una causa de pancreatitis; en pacientes ambulatorios la más común es el hiperparatiroidismo primario. Mide PTH.',
      why: ['No causa hipercalcemia.', '', 'Da hipocalcemia.', 'Da hipocalcemia.', 'No explica el calcio alto.'],
      ref: 'ACG 2024' }),

    q({ id: 'pan-13', dif: 1,
      stem: 'Paciente con pancreatitis que presenta equimosis en los flancos. ¿Cómo se llama el signo y qué indica?',
      opts: ['Cullen; colecistitis', 'Grey Turner; hemorragia retroperitoneal (pancreatitis hemorrágica)', 'Murphy; colangitis', 'Courvoisier; cáncer de páncreas', 'Rovsing; apendicitis'],
      ans: 1,
      exp: 'Grey Turner (flancos) y Cullen (periumbilical) indican sangrado retroperitoneal, propio de pancreatitis grave necrótico-hemorrágica. Son poco frecuentes pero de mal pronóstico.',
      why: ['Cullen es periumbilical.', '', 'Murphy es dolor a la palpación de la vesícula.', 'Courvoisier es vesícula palpable no dolorosa con ictericia.', 'Rovsing es de apendicitis.'],
      ref: 'Semiología' }),

    q({ id: 'pan-14', dif: 2,
      stem: 'Hombre con pancreatitis de 12 h de evolución, diagnóstico seguro, con buena evolución. El residente quiere TC con contraste hoy “para ver la necrosis”. ¿Qué opinas?',
      opts: ['Es necesaria en todos al ingreso', 'No está indicada: si el diagnóstico es claro, la TC se reserva para falta de mejoría a las 48–72 h (la necrosis se define mejor después de 72 h)', 'Debe ser sin contraste siempre', 'Debe sustituir al USG', 'Solo si la lipasa es muy alta'],
      ans: 1,
      exp: 'La TC temprana no cambia el manejo, puede subestimar la necrosis y expone al contraste. Se indica si hay duda diagnóstica o si no mejora en 48–72 h.',
      why: ['No es rutinaria.', '', 'El contraste es necesario para valorar necrosis cuando está indicada.', 'El USG se necesita para buscar litos.', 'La lipasa no se relaciona con la gravedad.'],
      ref: 'ACG 2024' }),

    q({ id: 'pan-15', dif: 2,
      stem: 'Hombre de 28 años con enfermedad de Crohn que inició azatioprina hace 4 semanas. Presenta dolor epigástrico y lipasa 8×. Sin alcohol, sin litos, TG y calcio normales. ¿Conducta?',
      opts: ['Continuar la azatioprina', 'Pancreatitis inducida por fármacos: suspender la azatioprina', 'CPRE', 'Esteroides', 'Colecistectomía'],
      ans: 1,
      exp: 'La azatioprina (y la 6-mercaptopurina) causan pancreatitis idiosincrásica en las primeras semanas. Se suspende y no se reintroduce.',
      why: ['Mantenerla perpetúa la pancreatitis.', '', 'No hay obstrucción biliar.', 'No tratan esta causa.', 'No hay litiasis.'],
      ref: 'ACG 2024' }),
    q({ id: 'pan-16', dif: 2,
      stem: 'Mujer de 32 años que irá a CPRE por coledocolitiasis. Tuvo pancreatitis después de una CPRE previa. Sin alergias ni insuficiencia renal. ¿Qué medida reduce el riesgo de una nueva pancreatitis?',
      opts: ['Antibiótico profiláctico', 'Indometacina (o diclofenaco) rectal al momento del procedimiento', 'Octreotida IV antes del procedimiento', 'Ayuno de 72 h después de la CPRE', 'Omeprazol IV'],
      ans: 1,
      exp: 'Los AINE rectales (indometacina o diclofenaco 100 mg) al momento de la CPRE reducen la pancreatitis post-CPRE. En alto riesgo se agregan hidratación con Ringer lactato y, si es posible, un stent pancreático profiláctico.',
      why: ['No previene la pancreatitis.', '', 'No ha demostrado un beneficio consistente.', 'No la previene y retrasa la recuperación.', 'No tiene relación con la pancreatitis post-CPRE.'],
      ref: 'ESGE 2020 eventos adversos de CPRE · ACG 2024' }),

    q({ id: 'pan-17', dif: 2,
      stem: 'Hombre de 58 años en el día 3 de una pancreatitis necrosante grave, en terapia intensiva. Tiene íleo leve y no tolera la vía oral. ¿Cómo lo alimentas?',
      opts: ['Ayuno hasta que se resuelva la necrosis', 'Nutrición enteral por sonda nasogástrica o nasoyeyunal', 'Nutrición parenteral total de inicio', 'Solo soluciones glucosadas IV', 'Gastrostomía quirúrgica'],
      ans: 1,
      exp: 'Si no tolera la vía oral, la nutrición enteral es preferible a la parenteral: mantiene la barrera intestinal y reduce infecciones, falla orgánica y mortalidad. La sonda nasogástrica es tan segura como la nasoyeyunal. La parenteral se reserva para cuando la enteral no es posible o no alcanza.',
      why: ['El ayuno prolongado favorece la translocación bacteriana y la infección de la necrosis.', '', 'Tiene más infecciones y complicaciones que la enteral.', 'No cubre los requerimientos.', 'Es invasiva e innecesaria.'],
      ref: 'ACG 2024 · ESPEN 2020' }),

    q({ id: 'pan-18', dif: 3,
      stem: 'Hombre de 50 años que tuvo una pancreatitis necrosante hace 4 meses. Ahora presenta hematemesis. Endoscopia: várices gástricas aisladas en el fondo, sin várices esofágicas. Pruebas de función hepática normales y sin datos de cirrosis. ¿Causa más probable?',
      opts: ['Cirrosis no diagnosticada', 'Trombosis de la vena esplénica', 'Trombosis portal por hepatocarcinoma', 'Síndrome de Budd-Chiari', 'Úlcera de estrés'],
      ans: 1,
      exp: 'La inflamación pancreática puede trombosar la vena esplénica, que corre por detrás del páncreas. La sangre del bazo se desvía por las venas gástricas cortas: várices gástricas aisladas con hígado normal (hipertensión portal izquierda). Si sangran, la esplenectomía (o la embolización esplénica) resuelve el problema.',
      why: ['Daría várices esofágicas y datos de hepatopatía.', '', 'No hay datos de hepatopatía ni de tumor, y daría várices esofágicas.', 'Daría ascitis, hepatomegalia dolorosa y várices esofágicas.', 'No explica las várices.'],
      ref: 'ACG 2024 pancreatitis aguda' }),

    q({ id: 'pan-19', dif: 2,
      stem: 'Mujer de 44 años con pancreatitis biliar necrosante (moderadamente grave). Al día 12 tolera la dieta, pero la TC muestra una colección necrótica aguda de 7 cm, sin datos de infección. ¿Cuándo le quitas la vesícula?',
      opts: ['Hoy, antes del alta', 'Diferir la colecistectomía hasta que la colección se resuelva o, si persiste, hacia las 6 semanas', 'Nunca: ya expulsó el lito', 'Solo si vuelve a tener pancreatitis', 'Solo esfinterotomía por CPRE y no operar'],
      ans: 1,
      exp: 'En la pancreatitis biliar leve, la colecistectomía va en el mismo internamiento. En la necrosante con colecciones se difiere hasta que la inflamación ceda y las colecciones se resuelvan o, si persisten, hacia las 6 semanas: operar antes aumenta la infección de la necrosis.',
      why: ['Operar con una colección necrótica activa aumenta las complicaciones infecciosas.', '', 'La vesícula sigue teniendo litos y el riesgo de recurrencia es alto.', 'Esperar una recurrencia es peligroso.', 'La esfinterotomía reduce, pero no elimina, el riesgo; si puede operarse, se hace la colecistectomía.'],
      ref: 'IAP/APA 2013 · ACG 2024' }),

    q({ id: 'pan-20', dif: 3,
      stem: 'Hombre de 46 años con un segundo episodio de pancreatitis leve. No bebe alcohol, no toma fármacos asociados, TG y calcio normales. Dos USG no muestran litos y la TC no muestra masas. ¿Siguiente estudio?',
      opts: ['Ninguno: es idiopática', 'Ultrasonido endoscópico para buscar microlitiasis o un tumor pequeño', 'CPRE diagnóstica', 'Repetir la lipasa cada mes', 'Laparoscopia diagnóstica'],
      ans: 1,
      exp: 'Antes de llamarla idiopática, el ultrasonido endoscópico busca microlitiasis, lodo biliar y tumores pequeños (sobre todo en mayores de 40 años); la colangio-RM es una alternativa. La CPRE solo diagnóstica ya no se usa por su riesgo.',
      why: ['Falta descartar microlitiasis y tumores.', '', 'Es invasiva y puede causar pancreatitis; se reserva para tratar.', 'No aporta información sobre la causa.', 'Innecesariamente invasiva.'],
      ref: 'ACG 2024' })
  ],

  cases: [
    { id: 'g-pancrea', topic: 'pancrea', subj: 'gastro',
      title: 'El dolor en cinturón de doña Rosa', place: 'Urgencias',
      patient: { name: 'Rosa', age: 47, sex: 'M', skin: '#D9A07A', hair: '#2A1C14', gown: '#9AD18B' },
      intro: 'Comerciante con obesidad. Después de una comida abundante, dolor epigástrico intenso que se irradia a la espalda y vómito.',
      extra: { label: 'BUN', unit: 'mg/dL' },
      start: { FC: 112, PAS: 108, PAD: 66, SpO2: 96, FR: 22, X: 28 },
      nodes: [
        { tag: 'Llegada', ecg: 'tachy',
          text: 'Lipasa 9 veces el límite superior. ALT 260 U/L. Sin datos de colangitis.',
          q: '¿Qué estudios pides ahora?',
          A: { t: 'TC con contraste urgente para confirmar', ok: false, res: 'La TC temprana no cambió nada y retrasó el manejo.' },
          B: { t: 'Diagnóstico ya establecido; USG abdominal para buscar litos, BH, química, calcio y TG', ok: true, res: 'USG: vesícula con litos múltiples; colédoco de 5 mm.' },
          why: 'Dolor típico + lipasa ≥3× = diagnóstico. USG para causa biliar; TC solo si hay duda o no mejora.' },
        { tag: 'Hora 1', ecg: 'tachy',
          text: 'Taquicárdica, mucosas secas, hematocrito 46%.',
          q: '¿Cómo repones líquidos?',
          A: { t: 'Ringer lactato: bolo de 10 mL/kg y luego ~1.5 mL/kg/h, reevaluando FC, PA, uresis y BUN', ok: true, res: 'A las 6 h: FC 92, uresis adecuada, BUN estable.', ecg: 'normal', vit: { FC: 92, PAS: 118, PAD: 72, X: 24 } },
          B: { t: 'Solución salina a 20 mL/kg/h sin metas', ok: false, res: 'A las 24 h tiene edema pulmonar y requiere oxígeno.', vit: { SpO2: 88, FR: 30 } },
          why: 'Reanimación moderada y dirigida con Ringer lactato (WATERFALL). La agresiva causa sobrecarga.' },
        { tag: 'Día 2', ecg: 'normal', vit: { FC: 86, PAS: 120, PAD: 74, SpO2: 97, FR: 18, X: 20 },
          text: 'Sin náusea, dolor leve; pide de comer. Lipasa aún 5×.',
          q: '¿Qué indicas?',
          A: { t: 'Dieta oral baja en grasa desde hoy', ok: true, res: 'La tolera bien.' },
          B: { t: 'Ayuno hasta normalizar la lipasa', ok: false, res: 'Estancia más larga sin beneficio.' },
          why: 'Alimentación oral temprana en cuanto tolere; la lipasa no guía la realimentación.' },
        { tag: 'Día 3', ecg: 'normal',
          text: 'Pancreatitis biliar leve, sin complicaciones.',
          q: '¿Cuándo la operas de la vesícula?',
          A: { t: 'Colecistectomía laparoscópica en esta misma hospitalización', ok: true, res: 'Se opera al día 4 y se va a casa al día 5.' },
          B: { t: 'En 3 meses, cuando “se enfríe”', ok: false, res: 'A las 5 semanas regresa con una segunda pancreatitis.' },
          why: 'En pancreatitis biliar leve, la colecistectomía en la misma hospitalización previene recurrencias (PONCHO).' }
      ] }
  ]
};
