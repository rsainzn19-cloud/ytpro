// Tema 28 · Síndrome de intestino irritable (Gastroenterología, semana 6)
const T = { topic: 'sii', subj: 'gastro' };
const q = (o) => ({ ...T, ...o });

export default {
  lessons: {
    sii: {
      hook: 'El SII se diagnostica con criterios positivos (Roma IV), no después de pedir todos los estudios. Lo importante: saber qué datos de alarma lo descartan y tratar según el subtipo.',
      nn: [['irritable-bowel-syndrome', 'Irritable Bowel Syndrome']],
      yt: 'irritable bowel syndrome Rome IV',
      anim: 'sii',
      video: [
        { ch: 'Qué es el intestino irritable', sc: [
          { v: { k: 'title', t: 'Síndrome de intestino irritable', s: 'Tema 28 · Gastroenterología' },
            say: 'Bienvenido a la guardia. Hoy toca el síndrome de intestino irritable, el trastorno funcional digestivo más frecuente. Vas a aprender a diagnosticarlo con criterios positivos, a reconocer los datos de alarma que lo descartan y a tratarlo según el subtipo.' },
          { v: { k: 'case', t: 'Consulta externa', p: { name: 'Mariana', age: 27, sex: 'M', skin: '#E8C09A', hair: '#2A1A12', gown: '#E79AB3' }, text: 'Dolor cólico bajo desde hace 10 meses, unos 2 días por semana. Mejora al evacuar; esos días, heces blandas y frecuentes. Peor con estrés.', vit: { Hb: '13.6', Peso: 'estable' } },
            say: 'Imagina a Mariana, de veintisiete años. Desde hace diez meses tiene dolor cólico en la parte baja del abdomen, unos dos días por semana. Mejora al evacuar, y esos días las evacuaciones son más blandas y frecuentes. Empeora con el estrés. No ha bajado de peso.' },
          { v: { k: 'anim', id: 'sii', step: 0 },
            say: 'El intestino irritable es un trastorno de la interacción entre el intestino y el cerebro. No hay una lesión que puedas ver en una colonoscopia. Lo que cambia es cómo se mueve el intestino, la microbiota y, sobre todo, cómo el cerebro procesa las señales que le llegan.' },
          { v: { k: 'anim', id: 'sii', step: 1 },
            say: 'La pieza central es la hipersensibilidad visceral. Con la misma cantidad de gas, el intestino de un paciente con este síndrome manda muchas más señales de dolor. Por eso una distensión normal duele. El estrés, la ansiedad o una gastroenteritis previa lo empeoran.' }
        ] },
        { ch: 'Criterios de Roma IV', sc: [
          { v: { k: 'big', h: 'Roma IV · dolor abdominal', t: '≥1 día', u: 'por semana', s: 'En los últimos 3 meses, con inicio de los síntomas hace ≥6 meses.' },
            say: 'Ahora los criterios de Roma cuatro. Primero, dolor abdominal recurrente, en promedio un día o más por semana en los últimos tres meses. Y los síntomas deben haber empezado al menos seis meses antes del diagnóstico.' },
          { v: { k: 'list', t: '+ 2 de estos 3', items: ['Relacionado con la defecación', 'Cambio en la frecuencia de las evacuaciones', 'Cambio en la forma (consistencia) de las heces'] },
            say: 'Además, ese dolor debe asociarse a dos o más de tres cosas: que se relacione con la defecación, que cambie la frecuencia de las evacuaciones o que cambie su forma. Ojo: la distensión es muy común, pero no es criterio. Y Roma cuatro exige dolor, no solo molestia.' },
          { v: { k: 'mnemo', t: '1 · 3 · 6 · 2 de 3', d: 'Dolor ≥1 día por semana, en los últimos 3 meses, con inicio hace ≥6 meses, y 2 de 3: defecación, frecuencia, forma.' },
            say: 'Para memorizarlo: uno, tres, seis y dos de tres. Un día por semana, en los últimos tres meses, con inicio hace seis meses, y dos de tres criterios: defecación, frecuencia y forma.' },
          { v: { k: 'anim', id: 'sii', step: 2 },
            say: 'El subtipo se define con la escala de Bristol, que va del tipo uno, bolitas duras, al tipo siete, heces líquidas. Se cuentan solo los días con evacuaciones anormales, y sin laxantes ni antidiarreicos.' },
          { v: { k: 'list', t: 'Subtipos', items: ['SII-E: >25% tipo 1–2 y <25% tipo 6–7', 'SII-D: >25% tipo 6–7 y <25% tipo 1–2', 'SII-M: >25% de ambos', 'SII-NC: no cumple ninguno'] },
            say: 'Si más de la cuarta parte son tipo uno o dos, es con predominio de estreñimiento. Si más de la cuarta parte son tipo seis o siete, con predominio de diarrea. Si hay más de la cuarta parte de ambos, es mixto. Y si no encaja, no clasificado.' },
          { v: { k: 'quiz', q: 'Heces Bristol 1–2 el 40% de los días y 6–7 el 35%. ¿Subtipo?', opts: ['SII-E', 'SII-D', 'SII-M'], a: 2 },
            say: 'Pausa. Una paciente tiene heces tipo uno o dos el cuarenta por ciento de los días, y tipo seis o siete el treinta y cinco por ciento. ¿Qué subtipo es?',
            exp: 'Mixto. Tiene más de la cuarta parte de heces duras y más de la cuarta parte de heces líquidas. Para ser con estreñimiento o con diarrea, el otro extremo debe quedar por debajo del veinticinco por ciento.' }
        ] },
        { ch: 'Datos de alarma y estudios', sc: [
          { v: { k: 'list', t: 'Datos de alarma', items: ['Inicio a los ≥45–50 años', 'Sangrado rectal o anemia ferropénica', 'Pérdida de peso no intencional', 'Síntomas nocturnos, fiebre, masa', 'Familiar con CCR, EII o celiaca'] },
            say: 'Antes de etiquetar a alguien con intestino irritable, busca datos de alarma. Inicio después de los cuarenta y cinco a cincuenta años. Sangrado rectal o anemia por falta de hierro. Pérdida de peso. Síntomas que lo despiertan en la noche, fiebre o una masa. Y familiares con cáncer colorrectal, enfermedad inflamatoria o celiaca.' },
          { v: { k: 'flow', t: 'Sin alarma: diagnóstico positivo', steps: ['Cumple Roma IV', 'SII-D o SII-M → serología de celiaca', 'Calprotectina fecal + PCR', 'Normales → diagnóstico de SII', 'Con alarma → colonoscopia'] },
            say: 'Sin datos de alarma, la guía del Colegio Americano de Gastroenterología pide un diagnóstico positivo, no de exclusión. Con diarrea o mixto pides serología de celiaca, y calprotectina fecal con proteína C reactiva para descartar enfermedad inflamatoria. Si todo es normal, haces el diagnóstico. La colonoscopia es para los datos de alarma o el tamizaje por edad.' },
          { v: { k: 'tip', kind: 'trap', t: 'Hombre de 58 años con “colitis” nueva y anemia ferropénica: no es SII. Va a colonoscopia.' },
            say: 'La trampa típica: un adulto de cincuenta y ocho años con cambio reciente del hábito intestinal y anemia por falta de hierro. Eso no es intestino irritable. Es cáncer colorrectal hasta demostrar lo contrario, y necesita colonoscopia.' },
          { v: { k: 'case', t: 'De vuelta con Mariana', p: { name: 'Mariana', age: 27, sex: 'M', skin: '#E8C09A', hair: '#2A1A12', gown: '#E79AB3' }, text: 'Cumple Roma IV, subtipo diarrea. Sin datos de alarma. Anti-tTG IgA negativa con IgA total normal; calprotectina y PCR normales.' },
            say: 'Volvamos con Mariana. Cumple los criterios de Roma cuatro, con predominio de diarrea. No tiene datos de alarma, y su serología de celiaca, su calprotectina y su proteína C reactiva son normales. Ya puedes darle el diagnóstico con confianza.' }
        ] },
        { ch: 'Tratamiento para todos', sc: [
          { v: { k: 'list', t: 'La base para todos', items: ['Explicar el eje intestino-cerebro', 'Ejercicio y buena relación médico-paciente', 'Fibra soluble (psyllium), no salvado', 'Dieta baja en FODMAP con nutriólogo', 'Terapia cognitivo-conductual o hipnoterapia'] },
            say: 'El tratamiento empieza con explicar. Que el paciente entienda que su dolor es real y que no tiene cáncer ya reduce los síntomas. Luego ejercicio, fibra soluble como el psyllium, porque el salvado distiende más, y una dieta baja en FODMAP. Las terapias psicológicas dirigidas al intestino también funcionan.' },
          { v: { k: 'anim', id: 'sii', step: 3 },
            say: 'Los FODMAP son carbohidratos fermentables que se absorben mal: fructanos del trigo y la cebolla, lactosa, fructosa y polioles como el sorbitol. Atraen agua y las bacterias del colon los fermentan con gas. La dieta tiene tres fases: eliminar unas semanas, reintroducir por grupos y personalizar.' }
        ] },
        { ch: 'Fármacos según el subtipo', sc: [
          { v: { k: 'anim', id: 'sii', step: 4 },
            say: 'Los fármacos se eligen según el síntoma que domina. Para el estreñimiento, secretagogos como la linaclotida, que meten agua a la luz. Para el dolor, antiespasmódicos y antidepresivos tricíclicos en dosis bajas. Para la diarrea, loperamida, rifaximina o eluxadolina.' },
          { v: { k: 'vs', cmp: 'sii-e-d', rows: [1, 2, 4] },
            say: 'Compáralos. Con estreñimiento, el polietilenglicol mejora las evacuaciones pero no el dolor; para el cuadro global sirven linaclotida o lubiprostona. Con diarrea, la loperamida corta la diarrea pero no el dolor; para el cuadro global, rifaximina por catorce días, eluxadolina o un tricíclico.' },
          { v: { k: 'quiz', q: 'SII-E: con PEG evacúa mejor, pero siguen el dolor y la distensión. ¿Qué agregas?', opts: ['Linaclotida', 'Amitriptilina 75 mg', 'Loperamida'], a: 0 },
            say: 'Pausa. Paciente con intestino irritable con estreñimiento. Con polietilenglicol evacúa mejor, pero siguen el dolor y la distensión. ¿Qué agregas?',
            exp: 'Linaclotida. Mete agua a la luz y además reduce el dolor visceral. La loperamida estriñe, y setenta y cinco miligramos de amitriptilina es una dosis de antidepresivo que además estriñe, no la dosis baja de neuromodulador.' },
          { v: { k: 'list', t: 'Efectos adversos que preguntan', items: ['Alosetrón: colitis isquémica', 'Eluxadolina: pancreatitis; no sin vesícula', 'Tricíclicos: estreñimiento, boca seca, QT', 'Linaclotida: diarrea', 'Aceite de menta: pirosis'] },
            say: 'Y los efectos adversos que caen en el examen. El alosetrón puede causar colitis isquémica, por eso se reserva a mujeres con diarrea grave. La eluxadolina puede dar pancreatitis: no se usa sin vesícula ni con consumo excesivo de alcohol. Los tricíclicos estriñen y alargan el QT. La linaclotida da diarrea, y el aceite de menta, pirosis.' },
          { v: { k: 'tip', kind: 'pearl', t: 'El SII se diagnostica con Roma IV y pocos estudios. Con un dato de alarma, primero descarta lo orgánico.' },
            say: 'La perla para el examen: el intestino irritable se diagnostica con criterios positivos y pocos estudios, no después de pedirlo todo. Pero si hay un dato de alarma, primero descartas lo orgánico. Y recuerda que hasta uno de cada diez pacientes lo desarrolla después de una gastroenteritis. Ahora ve a las preguntas del tema para fijar lo que viste.' }
        ] }
      ],
      compare: ['sii-e-d'],
      sections: [
        { h: 'Criterios de Roma IV', html: `
<ul>
<li><b>Dolor abdominal recurrente</b>, en promedio <b>≥1 día por semana</b> en los últimos 3 meses, asociado a <b>≥2</b> de:
  <ul>
  <li>Relación con la defecación (mejora o empeora).</li>
  <li>Cambio en la <b>frecuencia</b> de las evacuaciones.</li>
  <li>Cambio en la <b>forma</b> (consistencia) de las heces.</li>
  </ul></li>
<li>Inicio de los síntomas al menos <b>6 meses</b> antes del diagnóstico.</li>
<li>La distensión es frecuente pero no es criterio. Roma IV quitó la palabra “molestia”: se requiere dolor.</li>
</ul>` },
        { h: 'Subtipos (escala de Bristol)', html: `
<ul>
<li>Se clasifican según los días con heces anormales:</li>
<li><b>SII-E</b> (estreñimiento): &gt;25% de evacuaciones tipo 1–2 y &lt;25% tipo 6–7.</li>
<li><b>SII-D</b> (diarrea): &gt;25% tipo 6–7 y &lt;25% tipo 1–2.</li>
<li><b>SII-M</b> (mixto): &gt;25% de ambos tipos.</li>
<li><b>SII-NC</b> (no clasificado): no cumple ninguno.</li>
</ul>` },
        { h: 'Datos de alarma y estudios', html: `
<ul>
<li><b>Alarma</b>: inicio después de los 45–50 años, sangrado rectal, anemia ferropénica, pérdida de peso no intencional, síntomas nocturnos que despiertan, fiebre, masa, antecedente familiar de cáncer colorrectal, EII o celiaca, cambio progresivo.</li>
<li>Sin alarma (ACG 2021): estrategia de <b>diagnóstico positivo</b>; limitar estudios.</li>
<li>En SII-D o SII-M: <b>serología de celiaca</b>; <b>calprotectina fecal</b> (o lactoferrina) y PCR para descartar EII.</li>
<li>Colonoscopia solo con datos de alarma o si le toca por edad (tamizaje).</li>
</ul>` },
        { h: 'Tratamiento', html: `
<ul>
<li><b>Para todos</b>: explicar el eje intestino-cerebro, relación médico-paciente, ejercicio.</li>
<li><b>Dieta baja en FODMAP</b> (eliminar y luego reintroducir), con nutriólogo.</li>
<li><b>Fibra soluble</b> (psyllium): ayuda; la fibra insoluble (salvado) puede empeorar la distensión.</li>
<li><b>Dolor</b>: antiespasmódicos (hioscina, aceite de menta) y <b>neuromoduladores</b>: antidepresivos tricíclicos en dosis bajas (amitriptilina), útiles sobre todo en SII-D.</li>
<li><b>SII-E</b>: polietilenglicol (mejora la evacuación, no el dolor), linaclotida, plecanatida, lubiprostona, tenapanor.</li>
<li><b>SII-D</b>: loperamida (diarrea, no dolor), <b>rifaximina</b>, eluxadolina (evitar sin vesícula o con alcohol o pancreatitis previa), alosetrón (mujeres con SII-D grave; riesgo de colitis isquémica).</li>
<li><b>Terapias psicológicas</b>: terapia cognitivo-conductual, hipnoterapia dirigida al intestino.</li>
</ul>` },
        { h: 'Fisiopatología en 1 minuto', html: `
<ul>
<li>Roma IV lo define como un <b>trastorno de la interacción intestino-cerebro</b>: síntomas reales sin lesión estructural.</li>
<li><b>Hipersensibilidad visceral</b>: umbral de dolor bajo ante la distensión; es la pieza central.</li>
<li><b>Motilidad alterada</b>: tránsito rápido en SII-D y lento en SII-E.</li>
<li><b>Microbiota y fermentación</b>: los FODMAP aumentan agua y gas en la luz; la distensión duele más en el SII.</li>
<li><b>Postinfeccioso</b>: ≈10% de quienes tienen una gastroenteritis bacteriana; hay activación inmune leve de la mucosa.</li>
<li><b>Factores psicológicos</b>: ansiedad, depresión y estrés modulan la percepción del dolor (por eso funcionan los neuromoduladores y la psicoterapia).</li>
</ul>` },
        { h: 'Fármacos clave', html: `
<div class="tablewrap"><table class="mini">
<tr><th>Fármaco</th><th>Mecanismo</th><th>Efecto adverso clave</th><th>Contraindicación o cuidado</th></tr>
<tr><td>Psyllium</td><td>Fibra soluble: forma gel y normaliza la consistencia</td><td>Distensión al inicio</td><td>Iniciar en dosis baja; evitar el salvado (insoluble)</td></tr>
<tr><td>Polietilenglicol</td><td>Laxante osmótico</td><td>Distensión, diarrea; no mejora el dolor</td><td>Obstrucción intestinal</td></tr>
<tr><td>Linaclotida, plecanatida</td><td>Agonistas de guanilato ciclasa C: ↑ GMPc → secreción de Cl⁻ y agua; ↓ dolor visceral</td><td>Diarrea</td><td>Obstrucción mecánica; niños pequeños (deshidratación)</td></tr>
<tr><td>Lubiprostona</td><td>Activa los canales de cloro ClC-2</td><td>Náusea</td><td>Obstrucción mecánica</td></tr>
<tr><td>Loperamida</td><td>Agonista opioide μ periférico</td><td>Estreñimiento; arritmias en sobredosis</td><td>No mejora el dolor; evitar en colitis infecciosa</td></tr>
<tr><td>Rifaximina</td><td>Antibiótico no absorbible; modula la microbiota</td><td>Bien tolerada</td><td>550 mg c/8 h por 14 días; puede repetirse si recae</td></tr>
<tr><td>Eluxadolina</td><td>Agonista opioide μ y κ, antagonista δ</td><td>Estreñimiento, pancreatitis, espasmo del esfínter de Oddi</td><td>Sin vesícula, &gt;3 bebidas alcohólicas al día, pancreatitis previa, hepatopatía grave</td></tr>
<tr><td>Alosetrón</td><td>Antagonista 5-HT3</td><td>Colitis isquémica, estreñimiento grave</td><td>Solo mujeres con SII-D grave; no con estreñimiento</td></tr>
<tr><td>Amitriptilina (10–30 mg)</td><td>Neuromodulador: ↓ percepción visceral; efecto anticolinérgico frena el tránsito</td><td>Estreñimiento, somnolencia, boca seca, QT largo</td><td>Arritmias, IAM reciente, glaucoma de ángulo cerrado, retención urinaria; ideal en SII-D</td></tr>
<tr><td>Butilhioscina, pinaverio, aceite de menta</td><td>Antiespasmódicos (antimuscarínico; bloqueador de calcio intestinal; relajante del músculo liso)</td><td>Boca seca y retención urinaria (hioscina); pirosis (menta)</td><td>Glaucoma y retención urinaria con antimuscarínicos</td></tr>
</table></div>` },
        { h: 'Cómo lo preguntan en el examen', html: `
<ul>
<li>Mujer joven con dolor que mejora al evacuar, sin alarma → <b>SII</b>: Roma IV; si hay diarrea, serología de celiaca + calprotectina + PCR.</li>
<li>Adulto ≥45–50 años con cambio del hábito intestinal, anemia ferropénica o sangrado → <b>colonoscopia</b>, no SII.</li>
<li>Joven con “SII-D” pero diarrea nocturna, pérdida de peso o calprotectina alta → <b>EII</b>: ileocolonoscopia.</li>
<li>Mujer &gt;50 años con diarrea acuosa, toma IBP, AINE o ISRS, colonoscopia normal → <b>colitis microscópica</b>: biopsias.</li>
<li>Diarrea después de una colecistectomía → <b>malabsorción de ácidos biliares</b>: colestiramina.</li>
<li>SII-E que no responde, con pujo excesivo y maniobras digitales → <b>disinergia defecatoria</b>: manometría anorrectal y expulsión de balón; biofeedback.</li>
<li>Mujer con SII-D grave refractario que recibe alosetrón y presenta dolor con sangrado rectal → <b>colitis isquémica</b>: suspenderlo.</li>
</ul>` }
      ],
      mnemo: { t: 'Roma IV = “1 día, 3 meses, 6 meses, 2 de 3”', d: 'Dolor ≥1 día por semana, en los últimos 3 meses, con inicio hace ≥6 meses, y 2 de 3: defecación, frecuencia, forma.' },
      pearl: 'El SII postinfeccioso existe: hasta 10% de quienes tienen una gastroenteritis bacteriana desarrollan SII después.',
      trap: 'Mujer de 58 años con “colon irritable” nuevo y anemia ferropénica: eso no es SII, es indicación de colonoscopia.',
      guide: [
        'Roma IV (2016) cambió “molestia” por “dolor” y la frecuencia de 3 días al mes a 1 día por semana: Roma III es más permisivo.',
        'Edad de alarma: la ACG 2021 usa ≥45 años (por el tamizaje colorrectal); muchos libros dicen >50.',
        'Polietilenglicol en SII-E: la ACG 2021 sugiere no usarlo para los síntomas globales (mejora la evacuación, no el dolor); la AGA 2022 sí lo sugiere. Las dos coinciden en que no quita el dolor.',
        'Probióticos: la ACG 2021 sugiere no usarlos para los síntomas globales; la BSG 2021 permite probarlos hasta 12 semanas y suspenderlos si no hay mejoría.'
      ],
      refs: [
        'Lacy BE, et al. ACG Clinical Guideline: Management of Irritable Bowel Syndrome. Am J Gastroenterol 2021.',
        'Mearin F, et al. Bowel Disorders (Rome IV). Gastroenterology 2016.',
        'Consenso mexicano sobre el síndrome de intestino irritable. Rev Gastroenterol Mex 2016.',
        'Chang L, et al. AGA Clinical Practice Guideline on the Pharmacological Management of IBS with Constipation. Gastroenterology 2022.',
        'Vasant DH, et al. British Society of Gastroenterology guidelines on the management of irritable bowel syndrome. Gut 2021.'
      ]
    }
  },

  compares: {
    'sii-e-d': {
      topic: 'sii', a: 'SII-E', b: 'SII-D',
      rows: [
        ['Bristol', '>25% tipo 1–2 y <25% tipo 6–7', '>25% tipo 6–7 y <25% tipo 1–2'],
        ['Para evacuar', 'Psyllium y PEG', 'Loperamida'],
        ['Global y dolor', 'Linaclotida, plecanatida, lubiprostona', 'Rifaximina, eluxadolina, alosetrón'],
        ['Neuromodulador', 'Tricíclico con cautela (estriñe)', 'Tricíclico en dosis baja (ideal)'],
        ['Cuidado con', 'Loperamida y anticolinérgicos', 'Alosetrón: colitis isquémica']
      ]
    }
  },

  anims: {
    sii: {
      title: 'El intestino que duele de más',
      steps: [
        { cap: '<b>Eje intestino-cerebro.</b> El SII es un trastorno de la interacción intestino-cerebro: no hay lesión estructural. Cambian la motilidad, la microbiota y el procesamiento central de las señales; el estrés lo empeora.',
          labels: [[80, 18, 'Cerebro'], [112, 48, 'Señales en 2 vías'], [40, 34, 'Estrés'], [80, 98, 'Intestino'], [143, 100, 'Microbiota']] },
        { cap: '<b>Hipersensibilidad visceral.</b> Con la misma distensión, el intestino del paciente con SII manda muchas más señales de dolor y el cerebro las amplifica. Por eso el gas normal duele.',
          labels: [[40, 7, 'Normal'], [120, 7, 'SII'], [120, 32, 'Dolor'], [80, 113, 'Misma distensión']] },
        { cap: '<b>Escala de Bristol y subtipos.</b> Los tipos 1 y 2 son heces duras; el 6 y el 7, blandas o líquidas. Más del 25% de 1–2 es SII-E; más del 25% de 6–7, SII-D; ambas, SII-M.',
          labels: [[80, 14, 'Escala de Bristol'], [23, 102, 'SII-E'], [78, 102, 'Normal'], [134, 102, 'SII-D']] },
        { cap: '<b>FODMAP.</b> Carbohidratos fermentables que se absorben mal (fructanos, lactosa, fructosa, polioles): atraen agua y las bacterias del colon los fermentan con gas. La distensión duele en el SII.',
          labels: [[24, 44, 'FODMAP'], [76, 66, 'Bacterias'], [118, 40, 'Gas'], [30, 90, 'Agua'], [112, 96, 'Distensión dolorosa']] },
        { cap: '<b>Fármacos por subtipo.</b> SII-E: la linaclotida mete agua a la luz. Dolor: tricíclico en dosis baja o antiespasmódico. SII-D: la loperamida frena el tránsito y la rifaximina reduce las bacterias.',
          labels: [[28, 7, 'SII-E'], [80, 7, 'Dolor'], [132, 7, 'SII-D'], [28, 107, 'Linaclotida'], [80, 107, 'Tricíclico'], [132, 107, 'Rifaximina']] }
      ]
    }
  },

  cards: [
    ['Roma IV: dolor', '≥1 día/semana en los últimos 3 meses, inicio hace ≥6 meses'],
    ['Roma IV: criterios asociados (≥2)', 'Relación con defecación, cambio de frecuencia, cambio de forma'],
    ['Subtipos de SII', 'E, D, M y no clasificado (según Bristol)'],
    ['Estudios en SII-D sin alarma', 'Serología de celiaca, calprotectina fecal, PCR'],
    ['Datos de alarma en SII', 'Edad ≥45–50, sangrado, anemia, pérdida de peso, síntomas nocturnos, historia familiar'],
    ['Dieta con mejor evidencia en SII', 'Baja en FODMAP'],
    ['Fibra recomendada', 'Soluble (psyllium)'],
    ['Neuromodulador para el dolor', 'Antidepresivo tricíclico en dosis baja'],
    ['SII-D: antibiótico', 'Rifaximina'],
    ['SII-E: secretagogos', 'Linaclotida, plecanatida, lubiprostona'],
    ['Alosetrón: riesgo', 'Colitis isquémica'],
    ['Loperamida en SII-D', 'Mejora la diarrea, no el dolor'],
    ['Eluxadolina: contraindicaciones', 'Sin vesícula, >3 bebidas alcohólicas/día, pancreatitis previa, obstrucción biliar, hepatopatía grave'],
    ['Dieta baja en FODMAP: fases', 'Eliminar 2–6 semanas → reintroducir por grupos → personalizar'],
    ['SII-E refractario con pujo y maniobras digitales', 'Disinergia defecatoria: manometría anorrectal y expulsión de balón → biofeedback'],
    ['Linaclotida: mecanismo', 'Agonista de guanilato ciclasa C: ↑ GMPc → secreción de Cl⁻ y agua; ↓ dolor visceral'],
    ['Rifaximina en SII-D: esquema', '550 mg c/8 h por 14 días; puede repetirse si recae']
  ],

  questions: [
    q({ id: 'sii-01', dif: 1,
      stem: 'Mujer de 28 años con dolor abdominal 2 días por semana desde hace 8 meses, que mejora al evacuar y se acompaña de evacuaciones más frecuentes y blandas. Sin datos de alarma. ¿Diagnóstico?',
      opts: ['Enfermedad celiaca confirmada', 'Síndrome de intestino irritable (predominio diarrea)', 'Colitis ulcerosa', 'Dispepsia funcional', 'Gastroparesia'],
      ans: 1,
      exp: 'Cumple Roma IV: dolor ≥1 día por semana por ≥3 meses (inicio hace ≥6) + relación con la defecación + cambio en frecuencia y forma. Subtipo D. Se pide serología de celiaca y calprotectina para completar.',
      why: ['No hay estudios que lo confirmen.', '', 'Habría sangre y datos inflamatorios.', 'Es dolor epigástrico relacionado con comidas.', 'Náusea y saciedad, no diarrea.'],
      ref: 'Roma IV · ACG 2021' }),

    q({ id: 'sii-02', dif: 2,
      stem: 'Paciente con sospecha de SII-D sin datos de alarma. Según la ACG 2021, ¿qué estudios pides?',
      opts: ['Colonoscopia y TC', 'Serología de celiaca y calprotectina fecal (o lactoferrina) + PCR', 'Ninguno', 'Coproparasitoscópico seriado y prueba de aliento con lactulosa a todos', 'Endoscopia alta'],
      ans: 1,
      exp: 'Se descartan las dos imitadoras más relevantes con pruebas simples: celiaca (serología) y EII (calprotectina). No se recomiendan estudios extensos de rutina.',
      why: ['No sin datos de alarma.', '', 'Se recomiendan estudios mínimos en SII-D.', 'No se recomiendan de rutina.', 'No está indicada.'],
      ref: 'ACG 2021 SII' }),

    q({ id: 'sii-03', dif: 1,
      stem: 'Hombre de 58 años con cambio reciente del hábito intestinal, dolor abdominal y anemia ferropénica. Cree que tiene colitis. ¿Qué haces?',
      opts: ['Diagnosticar SII y dar antiespasmódico', 'Colonoscopia', 'Dieta baja en FODMAP', 'Amitriptilina', 'Rifaximina'],
      ans: 1,
      exp: 'Edad >45–50, inicio reciente y anemia ferropénica son datos de alarma: hay que descartar cáncer colorrectal antes de pensar en SII.',
      why: ['Tiene datos de alarma.', '', 'No antes de descartar cáncer.', 'No antes de descartar cáncer.', 'No antes de descartar cáncer.'],
      ref: 'ACG 2021 SII' }),

    q({ id: 'sii-04', dif: 2,
      stem: 'Mujer con SII-E. Toma polietilenglicol, evacúa mejor, pero persisten el dolor y la distensión. ¿Qué agregas?',
      opts: ['Loperamida', 'Linaclotida', 'Alosetrón', 'Rifaximina', 'Salvado de trigo'],
      ans: 1,
      exp: 'La linaclotida (agonista de guanilato ciclasa C) aumenta la secreción intestinal y reduce el dolor visceral: útil en SII-E con dolor.',
      why: ['Empeora el estreñimiento.', '', 'Para SII-D.', 'Para SII-D.', 'La fibra insoluble aumenta la distensión.'],
      ref: 'ACG 2021 SII' }),

    q({ id: 'sii-05', dif: 2,
      stem: 'Hombre con SII-D y dolor abdominal persistente pese a dieta y antiespasmódicos. ¿Fármaco que actúa sobre el dolor y la diarrea?',
      opts: ['Polietilenglicol', 'Amitriptilina en dosis baja', 'Linaclotida', 'Lactulosa', 'Prednisona'],
      ans: 1,
      exp: 'Los tricíclicos en dosis bajas (10–50 mg) modulan la percepción visceral del dolor y, por su efecto anticolinérgico, enlentecen el tránsito: útiles en SII-D.',
      why: ['Empeora la diarrea.', '', 'Empeora la diarrea.', 'Empeora la diarrea.', 'No tiene papel.'],
      ref: 'ACG 2021 SII' }),

    q({ id: 'sii-06', dif: 1,
      stem: '¿Cuál de estas recomendaciones dietéticas tiene más evidencia en SII?',
      opts: ['Dieta sin gluten para todos', 'Dieta baja en FODMAP con reintroducción', 'Dieta alta en salvado', 'Dieta sin lactosa para todos', 'Ayuno intermitente'],
      ans: 1,
      exp: 'La dieta baja en FODMAP (carbohidratos fermentables) reduce los síntomas en muchos pacientes; debe hacerse en 3 fases (eliminar, reintroducir, personalizar).',
      why: ['No sin celiaca.', '', 'Puede empeorar la distensión.', 'Solo si hay intolerancia.', 'No tiene evidencia.'],
      ref: 'ACG 2021 SII' }),

    q({ id: 'sii-07', dif: 2,
      stem: 'Una paciente cumple criterios de SII, pero sus evacuaciones son tipo 1–2 en el 40% de los días y tipo 6–7 en el 35%. ¿Subtipo?',
      opts: ['SII-E', 'SII-D', 'SII-M', 'SII-NC', 'No es SII'],
      ans: 2,
      exp: 'Más del 25% de heces duras y más del 25% de heces líquidas: subtipo mixto.',
      why: ['Requiere <25% de heces líquidas.', 'Requiere <25% de heces duras.', '', 'Cumple el patrón mixto.', 'Sí cumple criterios.'],
      ref: 'Roma IV' }),

    q({ id: 'sii-08', dif: 2,
      stem: 'Hombre con SII-D y distensión importante que no respondió a dieta. ¿Antibiótico con evidencia en SII-D?',
      opts: ['Metronidazol', 'Rifaximina', 'Ciprofloxacino', 'Amoxicilina', 'Vancomicina'],
      ans: 1,
      exp: 'La rifaximina (no absorbible) por 14 días mejora la distensión y la diarrea en SII-D (estudios TARGET); puede repetirse si recae.',
      why: ['No tiene evidencia en SII.', '', 'No tiene evidencia.', 'No tiene evidencia.', 'No tiene evidencia.'],
      ref: 'ACG 2021 SII · TARGET' }),

    q({ id: 'sii-09', dif: 1,
      stem: 'Según Roma IV, ¿cuánto tiempo deben tener los síntomas antes de diagnosticar SII?',
      opts: ['1 mes', 'Inicio hace ≥6 meses, con criterios cumplidos en los últimos 3', '2 semanas', '1 año', 'No importa el tiempo'],
      ans: 1,
      exp: 'Los síntomas deben haber iniciado al menos 6 meses antes, y cumplir los criterios en los últimos 3 meses.',
      why: ['Muy corto.', '', 'Muy corto.', 'Excesivo.', 'Sí importa.'],
      ref: 'Roma IV' }),

    q({ id: 'sii-10', dif: 3,
      stem: 'Mujer de 35 años con SII-D grave que no respondió a otros tratamientos. Se considera alosetrón. ¿Qué efecto adverso grave debes advertir?',
      opts: ['Hepatitis fulminante', 'Colitis isquémica y estreñimiento grave', 'Arritmias por QT largo', 'Pancreatitis', 'Agranulocitosis'],
      ans: 1,
      exp: 'El alosetrón (antagonista 5-HT3) está restringido a mujeres con SII-D grave por el riesgo de colitis isquémica y complicaciones del estreñimiento.',
      why: ['No es su efecto adverso típico.', '', 'No es su efecto adverso principal.', 'Es de eluxadolina.', 'No es su efecto adverso.'],
      ref: 'ACG 2021 SII' }),

    q({ id: 'sii-11', dif: 2,
      stem: 'Hombre de 42 años con SII-D que no mejoró con dieta ni loperamida. Le quitaron la vesícula hace 3 años y toma 4–5 cervezas al día. ¿Cuál de estos fármacos está contraindicado?',
      opts: ['Rifaximina', 'Eluxadolina', 'Amitriptilina en dosis baja', 'Psyllium', 'Aceite de menta'],
      ans: 1,
      exp: 'La eluxadolina (agonista opioide μ y κ, antagonista δ) puede causar espasmo del esfínter de Oddi y pancreatitis. Está contraindicada sin vesícula, con consumo de más de 3 bebidas alcohólicas al día, pancreatitis previa, obstrucción biliar o daño hepático grave.',
      why: ['Es segura en este paciente y tiene evidencia en SII-D.', '', 'Es útil en SII-D; vigila el QT y la somnolencia.', 'Es fibra soluble, segura.', 'Es seguro; puede dar pirosis.'],
      ref: 'ACG 2021 SII' }),

    q({ id: 'sii-12', dif: 2,
      stem: 'Mujer de 31 años que hace 9 meses tuvo gastroenteritis por Campylobacter. Desde entonces tiene dolor abdominal 2 días por semana que mejora al evacuar, con heces blandas. Sin datos de alarma; anti-tTG (con IgA total normal), calprotectina y PCR normales. ¿Diagnóstico más probable?',
      opts: ['Infección crónica por Campylobacter', 'SII postinfeccioso', 'Colitis ulcerosa', 'Enfermedad celiaca', 'Infección por C. difficile'],
      ans: 1,
      exp: 'Alrededor de 1 de cada 10 personas desarrolla SII después de una gastroenteritis bacteriana (Campylobacter, Shigella, Salmonella, E. coli). Suele ser de predominio diarrea. Factores de riesgo: sexo femenino, cuadro inicial grave, ansiedad o depresión.',
      why: ['La infección por Campylobacter es autolimitada; no explica 9 meses de síntomas con estudios normales.', '', 'La calprotectina normal y la ausencia de sangre la hacen poco probable.', 'La anti-tTG negativa con IgA total normal la hace muy poco probable.', 'No recibió antibióticos y no explica 9 meses de síntomas.'],
      ref: 'Roma IV · ACG 2021 SII' }),

    q({ id: 'sii-13', dif: 2,
      stem: 'Hombre de 24 años con dolor abdominal y 4–5 evacuaciones blandas al día desde hace 5 meses; cumple Roma IV. Se despierta de noche para evacuar y bajó 4 kg. Calprotectina fecal 480 µg/g. ¿Siguiente paso?',
      opts: ['Diagnosticar SII-D y dar loperamida', 'Ileocolonoscopia con biopsias', 'Dieta baja en FODMAP', 'Rifaximina por 14 días', 'Amitriptilina en dosis baja'],
      ans: 1,
      exp: 'Síntomas nocturnos, pérdida de peso y calprotectina elevada son datos de alarma que apuntan a enfermedad inflamatoria intestinal (sobre todo Crohn ileal). Cumplir Roma IV no basta: con alarma se hace ileocolonoscopia con biopsias antes de pensar en SII.',
      why: ['Los datos de alarma obligan a descartar una causa orgánica.', '', 'No antes de descartar EII.', 'No antes de descartar EII.', 'No antes de descartar EII.'],
      ref: 'ACG 2021 SII' }),

    q({ id: 'sii-14', dif: 2,
      stem: 'Mujer de 33 años con SII-M. La dieta baja en FODMAP le ayudó mucho, así que lleva 10 meses en la fase de eliminación estricta y teme reintroducir alimentos. ¿Qué le recomiendas?',
      opts: ['Seguir con la eliminación estricta de por vida', 'Reintroducir los FODMAP por grupos, con nutriólogo, para personalizar la dieta', 'Cambiar a dieta sin gluten', 'Agregar salvado de trigo', 'Suspender toda la fibra'],
      ans: 1,
      exp: 'La dieta baja en FODMAP tiene 3 fases: eliminación (2–6 semanas), reintroducción por grupos y personalización. La eliminación prolongada empobrece la microbiota y la nutrición, y no se recomienda. Lo ideal es guiarla con un nutriólogo.',
      why: ['La restricción prolongada altera la microbiota y aumenta el riesgo de deficiencias.', '', 'No tiene celiaca; parte del beneficio del “sin gluten” se explica por los fructanos del trigo.', 'La fibra insoluble aumenta la distensión.', 'La fibra soluble sí ayuda en el SII.'],
      ref: 'ACG 2021 SII' }),

    q({ id: 'sii-15', dif: 3,
      stem: 'Mujer de 38 años con SII-E. No mejora con psyllium, PEG ni linaclotida. Refiere pujo excesivo, sensación de evacuación incompleta y a veces necesita presionar el periné con los dedos para evacuar. ¿Siguiente estudio?',
      opts: ['Colonoscopia', 'Manometría anorrectal con prueba de expulsión del balón', 'TC de abdomen', 'Prueba de aliento con lactulosa', 'Tránsito intestinal con bario'],
      ans: 1,
      exp: 'Pujo excesivo, evacuación incompleta y maniobras digitales sugieren disinergia defecatoria (trastorno del piso pélvico). La ACG 2021 sugiere pruebas fisiológicas anorrectales en SII-E refractario. Si se confirma, el tratamiento es biofeedback, no más laxantes.',
      why: ['Sin datos de alarma no está indicada y no evalúa la función del piso pélvico.', '', 'No evalúa la dinámica de la defecación.', 'Evalúa sobrecrecimiento, que no explica el pujo ni las maniobras digitales.', 'No evalúa la coordinación del piso pélvico.'],
      ref: 'ACG 2021 SII' })
  ]
};
