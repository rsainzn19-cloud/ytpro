// Tema 20 · Diarrea, malabsorción y enfermedad celiaca (Gastroenterología, semana 5)
const T = { topic: 'diarrea', subj: 'gastro' };
const q = (o) => ({ ...T, ...o });

export default {
  lessons: {
    diarrea: {
      hook: 'Diarrea aguda casi siempre se resuelve sola: aprende cuándo estudiar y cuándo dar antibiótico. En la crónica, clasifica el mecanismo y no olvides la celiaca.',
      nn: [['diarrhea', 'Diarrhea'], ['malabsorption', 'Malabsorption']],
      yt: 'diarrhea malabsorption celiac disease',
      anim: 'diarrea',
      video: [
        { ch: 'Ordenar la diarrea', sc: [
          { v: { k: 'title', t: 'Diarrea, malabsorción y celiaca', s: 'Tema 20 · Gastroenterología' },
            say: 'Bienvenido a la guardia. En este video vas a aprender a ordenar cualquier diarrea: cuándo es aguda y se quita sola, cuándo hay que estudiarla y cómo encontrar el mecanismo de una diarrea crónica. Al final verás la enfermedad celiaca, que preguntan mucho.' },
          { v: { k: 'case', t: 'Consulta externa', p: { name: 'Lucía', age: 32, sex: 'M', skin: '#E0B48A', hair: '#3A2418', gown: '#9FB8E8' }, text: 'Diarrea de 5 meses, distensión y pérdida de 4 kg. Anemia ferropénica que no mejora con hierro oral. Sin sangrado visible.', vit: { Hb: '9.8', VCM: '72' } },
            say: 'Imagina a Lucía, de treinta y dos años. Tiene cinco meses con evacuaciones blandas, distensión y bajó cuatro kilos. Además tiene anemia por falta de hierro que no mejora con hierro oral, y no sangra por ningún lado. Guarda este caso: al final lo resolvemos.' },
          { v: { k: 'big', h: 'Diarrea', t: '≥3/día', s: 'Evacuaciones blandas o líquidas. Aguda <14 días · persistente 14–30 · crónica >4 semanas.' },
            say: 'Primero, la definición. Hablamos de diarrea cuando hay tres o más evacuaciones blandas o líquidas al día. Es aguda si dura menos de catorce días, persistente entre catorce y treinta, y crónica si pasa de cuatro semanas. La duración cambia todo el abordaje.' },
          { v: { k: 'list', t: 'Cinco mecanismos', items: ['Osmótica: un soluto jala agua', 'Secretora: el enterocito secreta agua', 'Inflamatoria: sangre, fiebre, calprotectina ↑', 'Grasa: esteatorrea por malabsorción', 'Motora: tránsito rápido'] },
            say: 'En la diarrea crónica piensa en cinco mecanismos. Osmótica, por un soluto que jala agua. Secretora, cuando el enterocito secreta agua y sal. Inflamatoria, con sangre y fiebre. Grasa, por malabsorción. Y motora, cuando el tránsito es muy rápido, como en el hipertiroidismo.' }
        ] },
        { ch: 'Diarrea aguda', sc: [
          { v: { k: 'list', t: 'Estudia las heces si hay…', items: ['Sangre o fiebre ≥38.5 °C', 'Deshidratación grave o >7 días', 'Inmunosupresión o adulto mayor frágil', 'Hospitalización o antibióticos recientes', 'Brote o manipulador de alimentos'] },
            say: 'La diarrea aguda casi siempre es viral, sobre todo por norovirus, y se quita sola. Solo pides coprocultivo o panel molecular si hay sangre, fiebre alta, deshidratación grave, más de siete días, inmunosupresión, hospitalización o antibióticos recientes.' },
          { v: { k: 'flow', t: 'Diarrea aguda: manejo', steps: ['Hidratación oral para todos', '¿Datos de alarma? → estudiar heces', 'Disentería febril → azitromicina', 'Sin fiebre ni sangre → loperamida', 'Sospecha de STEC → sin antibiótico'] },
            say: 'El algoritmo es sencillo. Hidratación oral para todos: es lo que salva vidas. Si hay datos de alarma, estudias las heces. El antibiótico empírico se reserva para la disentería con fiebre o la diarrea del viajero grave, y el de elección es la azitromicina. La loperamida sirve en la diarrea acuosa sin fiebre ni sangre.' },
          { v: { k: 'tip', kind: 'trap', t: 'Diarrea con sangre tras carne mal cocida = E. coli O157:H7. Sin antibióticos ni loperamida: aumentan el riesgo de SUH.' },
            say: 'Trampa clásica: diarrea con sangre después de una hamburguesa mal cocida. Piensa en Escherichia coli productora de toxina Shiga. No des antibióticos ni antidiarreicos, porque aumentan el riesgo de síndrome urémico hemolítico. Vigila plaquetas, hemoglobina y creatinina.' },
          { v: { k: 'anim', id: 'diarrea', step: 4 },
            say: 'Un caso especial es Clostridioides difficile. Los antibióticos barren la flora normal del colon, la bacteria prolifera y libera dos toxinas que dañan la mucosa y forman seudomembranas. Piénsalo en todo paciente con tres o más evacuaciones líquidas al día y antibióticos u hospitalización recientes.' },
          { v: { k: 'quiz', q: 'Mujer de 70 años con C. difficile tras amoxicilina. Sin choque ni íleo. ¿Tratamiento?', opts: ['Metronidazol oral', 'Fidaxomicina o vancomicina oral', 'Vancomicina intravenosa'], a: 1 },
            say: 'Pausa. Mujer de setenta años con infección por Clostridioides difficile después de amoxicilina. No tiene choque ni íleo. ¿Qué le das?',
            exp: 'Fidaxomicina o vancomicina por vía oral, durante diez días. El metronidazol ya no es de primera línea, y la vancomicina intravenosa no llega a la luz del colon, así que no sirve.' }
        ] },
        { ch: 'Diarrea crónica: el mecanismo', sc: [
          { v: { k: 'anim', id: 'diarrea', step: 0 },
            say: 'Volvamos a la diarrea crónica. En la osmótica, un soluto que no se absorbe se queda en la luz y jala agua. Lactosa, magnesio, polietilenglicol o sorbitol. La pista es que cede con el ayuno: si no comes, no hay soluto.' },
          { v: { k: 'anim', id: 'diarrea', step: 1 },
            say: 'En la secretora, el problema está en el enterocito. Una toxina, una hormona o los ácidos biliares abren los canales de cloro y sale agua a la luz. Por eso persiste con el ayuno y despierta al paciente en la noche.' },
          { v: { k: 'big', h: 'Brecha osmótica fecal', t: '>125', u: 'osmótica', s: '290 − 2 × (Na + K fecales). Si es <50, secretora.' },
            say: 'Para separarlas usas la brecha osmótica fecal: doscientos noventa menos dos veces la suma del sodio y el potasio fecales. Mayor de ciento veinticinco orienta a osmótica. Menor de cincuenta, a secretora.' },
          { v: { k: 'vs', cmp: 'diarrea-osm-sec', rows: [1, 3, 4] },
            say: 'Resúmelo así. La osmótica cede con el ayuno, tiene brecha alta y la causan la lactosa o los laxantes osmóticos. La secretora persiste con el ayuno, tiene brecha baja y la causan toxinas, tumores neuroendocrinos como el VIPoma o la malabsorción de ácidos biliares.' },
          { v: { k: 'list', t: 'Causas que se escapan', items: ['Colitis microscópica: mujer mayor, colon normal', 'Ácidos biliares: colecistectomía o íleon resecado', 'Abuso oculto de laxantes', 'Hipertiroidismo y tumores neuroendocrinos'] },
            say: 'Causas que se escapan. La colitis microscópica: mujer mayor con diarrea acuosa y colonoscopia normal; el diagnóstico está en las biopsias y se trata con budesonida. La diarrea por ácidos biliares, después de quitar la vesícula o parte del íleon. Y el abuso oculto de laxantes.' },
          { v: { k: 'quiz', q: 'Diarrea acuosa que despierta de noche y no cede con el ayuno. ¿Mecanismo?', opts: ['Osmótica', 'Secretora'], a: 1 },
            say: 'Pausa. Diarrea acuosa que despierta al paciente en la noche y no cede con el ayuno. ¿Qué mecanismo es?',
            exp: 'Secretora. Persiste sin comer porque el agua sale del enterocito, no de un soluto en la luz. Busca toxinas, ácidos biliares, laxantes estimulantes o un tumor neuroendocrino.' }
        ] },
        { ch: 'Malabsorción', sc: [
          { v: { k: 'anim', id: 'diarrea', step: 3 },
            say: 'Cuando falla la digestión o la absorción de la grasa aparece la esteatorrea: heces voluminosas, grasosas y fétidas, que flotan. La grasa no absorbida arrastra consigo las vitaminas liposolubles A, D, E y K.' },
          { v: { k: 'list', t: 'Huellas de malabsorción', items: ['Pérdida de peso y esteatorrea', 'Anemia: hierro, B12 o folato', 'Osteopenia o tetania: vitamina D y calcio', 'Equimosis e INR alto: vitamina K', 'Edema: albúmina baja'] },
            say: 'Busca las huellas en el cuerpo. Pérdida de peso. Anemia por falta de hierro, vitamina B doce o folato. Huesos frágiles o tetania por falta de vitamina D y calcio. Moretones y tiempo de protrombina alargado por falta de vitamina K. Y edema por albúmina baja.' },
          { v: { k: 'vs', a: 'Insuf. pancreática', b: 'Sobrecrecimiento', rows: [['Contexto', 'Pancreatitis crónica, fibrosis quística', 'Diabetes, asas ciegas, dismotilidad'], ['Prueba', 'Elastasa fecal baja', 'Prueba de aliento'], ['Pista', 'Esteatorrea marcada', 'B12 baja con folato alto'], ['Tratamiento', 'Enzimas con cada comida', 'Rifaximina']] },
            say: 'Dos causas que debes distinguir. La insuficiencia pancreática, por pancreatitis crónica o fibrosis quística, se detecta con elastasa fecal baja y se trata con enzimas en cada comida. El sobrecrecimiento bacteriano da vitamina B doce baja con folato alto, se diagnostica con prueba de aliento y se trata con rifaximina.' }
        ] },
        { ch: 'Enfermedad celiaca', sc: [
          { v: { k: 'anim', id: 'diarrea', step: 2 },
            say: 'Ahora la estrella del tema. En la enfermedad celiaca, el gluten del trigo, la cebada y el centeno activa a los linfocitos T en personas con HLA DQ dos o DQ ocho. La transglutaminasa tisular es el autoantígeno. Las vellosidades se aplanan y se pierde superficie de absorción.' },
          { v: { k: 'list', t: 'Cómo se presenta', items: ['Diarrea, distensión, pérdida de peso', 'Anemia ferropénica refractaria', 'Osteoporosis temprana, transaminasas ↑', 'Dermatitis herpetiforme', 'Más en DM1, tiroiditis, Down, déficit de IgA'] },
            say: 'Puede dar diarrea y distensión, pero muchas veces solo da anemia por falta de hierro que no responde, porque el hierro se absorbe en el duodeno. También osteoporosis temprana, transaminasas altas o dermatitis herpetiforme. Búscala en diabetes tipo uno, tiroiditis, síndrome de Down y déficit de IgA.' },
          { v: { k: 'flow', t: 'Diagnóstico de celiaca', steps: ['Paciente comiendo gluten', 'Anti-tTG IgA + IgA total', 'Positiva → endoscopia', 'Biopsias: ≥4 duodeno + 1–2 bulbo', 'Dieta sin gluten de por vida'] },
            say: 'El diagnóstico sigue este orden. Con el paciente comiendo gluten, pides anticuerpos antitransglutaminasa tisular IgA junto con IgA total. Si salen positivos, endoscopia con al menos cuatro biopsias del duodeno distal y una o dos del bulbo. Buscas atrofia de vellosidades, criptas alargadas y linfocitos intraepiteliales.' },
          { v: { k: 'case', t: 'De vuelta con Lucía', p: { name: 'Lucía', age: 32, sex: 'M', skin: '#E0B48A', hair: '#3A2418', gown: '#9FB8E8' }, text: 'Anti-tTG IgA muy positiva, IgA total normal. Hace 2 meses dejó el gluten por su cuenta. La endoscopia es la próxima semana.' },
            say: 'Volvamos con Lucía. Su antitransglutaminasa salió muy positiva y su IgA total es normal. Pero te cuenta que hace dos meses dejó el gluten por su cuenta, y la endoscopia es la próxima semana.' },
          { v: { k: 'quiz', q: 'Lucía dejó el gluten hace 2 meses. ¿Qué haces antes de la biopsia?', opts: ['Biopsia tal cual, sin cambios', 'Reintroducir gluten unas semanas', 'Diagnosticar solo con HLA'], a: 1 },
            say: 'Pausa. ¿Qué haces antes de la biopsia?',
            exp: 'Reintroduces gluten, unos tres gramos al día durante varias semanas, antes de la biopsia. Sin gluten la mucosa se recupera y la biopsia puede salir falsamente normal. El HLA solo sirve para descartar.' },
          { v: { k: 'mnemo', t: 'Gluten = TCC · “TTG con gluten”', d: 'Trigo, Cebada, Centeno. Pide anti-tTG IgA + IgA total mientras el paciente todavía come gluten.' },
            say: 'Para recordarlo: el gluten está en tres cereales con T, C y C: trigo, cebada y centeno. Y la serología siempre es TTG con gluten: antitransglutaminasa más IgA total, mientras el paciente todavía lo come.' }
        ] },
        { ch: 'Perlas de examen', sc: [
          { v: { k: 'list', t: 'Celiaca: seguimiento', items: ['Dieta sin gluten estricta de por vida', 'Anti-tTG a los 6 y 12 meses', 'Sin respuesta: casi siempre gluten oculto', 'Riesgo: linfoma T y celiaca refractaria'] },
            say: 'En el seguimiento, la dieta sin gluten es de por vida y la antitransglutaminasa debe bajar en seis a doce meses. Si no mejora, lo más común es que siga comiendo gluten sin saberlo. Solo después piensas en celiaca refractaria o en linfoma de células T.' },
          { v: { k: 'tip', kind: 'pearl', t: 'Anemia ferropénica que no responde al hierro oral y sin sangrado: pide anti-tTG IgA + IgA total.' },
            say: 'La perla para el examen: anemia por falta de hierro que no responde al hierro oral y sin sangrado visible, pide serología de celiaca. Y en la diarrea aguda, hidratación primero y antibiótico solo con una buena razón. Ahora ve a las preguntas del tema para fijar lo que viste.' }
        ] }
      ],
      compare: ['diarrea-osm-sec'],
      sections: [
        { h: 'Diarrea aguda (<14 días)', html: `
<ul>
<li>La mayoría es viral (norovirus) y autolimitada. Lo principal es la <b>hidratación oral</b> (solución de rehidratación).</li>
<li><b>Estudiar</b> (coprocultivo o panel molecular) si hay: disentería (sangre), fiebre ≥38.5 °C, deshidratación grave, &gt;7 días, inmunosupresión, edad avanzada con comorbilidad, brotes, hospitalización o antibióticos recientes.</li>
<li><b>Antibiótico empírico</b> solo en casos graves, disentería febril o diarrea del viajero moderada-grave: <b>azitromicina</b>. Evitarlo si se sospecha E. coli productora de toxina Shiga (O157:H7): aumenta el riesgo de SUH.</li>
<li>Loperamida: útil en diarrea acuosa sin fiebre; evitar en disentería.</li>
<li><b>C. difficile</b>: antibióticos o hospitalización recientes, ≥3 evacuaciones líquidas/24 h. Diagnóstico: PCR o toxina. Tratamiento: <b>fidaxomicina</b> o <b>vancomicina oral</b> (el metronidazol ya no es primera línea).</li>
</ul>` },
        { h: 'Diarrea crónica (>4 semanas)', html: `
<ul>
<li><b>Osmótica</b>: cede con el ayuno; brecha osmótica fecal &gt;125. Lactosa, laxantes osmóticos (magnesio, PEG), sorbitol, malabsorción.</li>
<li><b>Secretora</b>: persiste con ayuno y de noche; brecha &lt;50. Laxantes estimulantes, malabsorción de ácidos biliares, tumores neuroendocrinos (VIPoma, carcinoide), colitis microscópica.</li>
<li><b>Inflamatoria</b>: sangre, fiebre, calprotectina ↑. EII, infecciones invasivas, colitis isquémica o por radiación.</li>
<li><b>Grasa (esteatorrea)</b>: heces voluminosas, fétidas, flotan. Insuficiencia pancreática, celiaca, sobrecrecimiento bacteriano.</li>
<li>Brecha osmótica fecal = 290 − 2 × (Na + K fecales).</li>
<li><b>Colitis microscópica</b>: mujer mayor, diarrea acuosa, colonoscopia normal; se diagnostica con biopsias. Asociada a AINE, IBP, ISRS. Tratamiento: budesonida.</li>
</ul>` },
        { h: 'Malabsorción', html: `
<ul>
<li>Datos: esteatorrea, pérdida de peso, anemia (hierro, B12, folato), osteoporosis (vitamina D), sangrado (vitamina K), edema (hipoalbuminemia).</li>
<li><b>Insuficiencia pancreática</b>: pancreatitis crónica, fibrosis quística. Elastasa fecal baja. Tratamiento: enzimas pancreáticas.</li>
<li><b>Sobrecrecimiento bacteriano</b>: asas ciegas, dismotilidad, diabetes. <b>B12 baja con folato alto</b>. Prueba de aliento; rifaximina.</li>
<li><b>Enfermedad de Whipple</b>: hombre de edad media, artralgias, diarrea, pérdida de peso, síntomas neurológicos; macrófagos PAS+ en duodeno.</li>
</ul>` },
        { h: 'Enfermedad celiaca', html: `
<ul>
<li>Enteropatía autoinmune por gluten (trigo, cebada, centeno) en personas con <b>HLA-DQ2 o DQ8</b>.</li>
<li>Presentación: diarrea y distensión, o solo <b>anemia ferropénica refractaria</b>, osteoporosis, transaminasas elevadas, infertilidad. Asociaciones: DM1, tiroiditis, síndrome de Down, déficit de IgA.</li>
<li><b>Dermatitis herpetiforme</b>: vesículas pruriginosas en codos, rodillas y glúteos.</li>
<li><b>Tamizaje</b>: anti-transglutaminasa tisular IgA + IgA total (si hay déficit de IgA → pruebas IgG). Debe estar comiendo gluten.</li>
<li><b>Confirmación</b>: biopsia duodenal (≥4 en segunda porción + 1–2 en bulbo): atrofia de vellosidades, hiperplasia de criptas, linfocitos intraepiteliales (Marsh).</li>
<li>Tratamiento: <b>dieta sin gluten de por vida</b>. Complicaciones: linfoma T asociado a enteropatía, celiaca refractaria.</li>
</ul>` }
      ],
      mnemo: { t: 'Celiaca = “TTG con gluten”', d: 'Pide anti-transglutaminasa IgA con IgA total, mientras el paciente sigue comiendo gluten. Si ya lo dejó, el resultado puede salir falso negativo.' },
      pearl: 'Anemia ferropénica que no responde al hierro oral sin sangrado evidente: busca celiaca (y H. pylori, gastritis atrófica).',
      trap: 'Diarrea con sangre en un niño o adulto con E. coli O157:H7: no des antibióticos ni antimotilidad; aumentan el riesgo de SUH.',
      guide: [
        'C. difficile: la IDSA/SHEA 2021 prefiere fidaxomicina sobre vancomicina en el episodio inicial; en México la fidaxomicina puede no estar disponible y la vancomicina oral es aceptable.',
        'Diagnóstico de celiaca sin biopsia: la ESPGHAN lo permite en niños con anti-TTG ≥10 veces el límite; en adultos, la ACG 2023 sigue recomendando biopsia en general.'
      ],
      refs: [
        'Riddle MS, et al. ACG Clinical Guideline: Acute Diarrheal Infections in Adults. Am J Gastroenterol 2016.',
        'Johnson S, et al. IDSA/SHEA 2021 Focused Update on C. difficile. Clin Infect Dis 2021.',
        'Rubio-Tapia A, et al. ACG Guidelines Update: Diagnosis and Management of Celiac Disease. Am J Gastroenterol 2023.',
        'Arasaradnam RP, et al. BSG guidelines for chronic diarrhoea in adults. Gut 2018.'
      ]
    }
  },

  cards: [
    ['Tratamiento base de diarrea aguda', 'Hidratación oral'],
    ['Antibiótico empírico en disentería febril', 'Azitromicina'],
    ['E. coli O157:H7: qué evitar', 'Antibióticos y antimotilidad (riesgo de SUH)'],
    ['C. difficile: tratamiento inicial', 'Fidaxomicina o vancomicina oral'],
    ['Diarrea que cede con ayuno', 'Osmótica (brecha >125)'],
    ['Diarrea nocturna que persiste con ayuno', 'Secretora (brecha <50)'],
    ['Colitis microscópica', 'Mujer mayor, colonoscopia normal, biopsia; budesonida'],
    ['B12 baja + folato alto', 'Sobrecrecimiento bacteriano'],
    ['Celiaca: tamizaje', 'Anti-transglutaminasa IgA + IgA total, con gluten'],
    ['Celiaca: histología', 'Atrofia de vellosidades, hiperplasia de criptas, linfocitos intraepiteliales'],
    ['Lesión de piel de la celiaca', 'Dermatitis herpetiforme'],
    ['Whipple: hallazgo en biopsia', 'Macrófagos PAS positivos'],
    ['Elastasa fecal baja', 'Insuficiencia pancreática exocrina']
  ],

  questions: [
    q({ id: 'diarrea-01', dif: 1,
      stem: 'Hombre de 28 años con diarrea acuosa de 2 días, sin fiebre ni sangre, tolera la vía oral. ¿Manejo?',
      opts: ['Coprocultivo y ciprofloxacino', 'Hidratación oral y vigilancia', 'Colonoscopia', 'Metronidazol empírico', 'Hospitalización'],
      ans: 1,
      exp: 'Diarrea aguda acuosa sin datos de alarma: casi siempre viral y autolimitada. No requiere estudios ni antibióticos.',
      why: ['No hay indicación.', '', 'No hay indicación.', 'No hay indicación.', 'Tolera la vía oral.'],
      ref: 'ACG 2016 diarrea aguda' }),

    q({ id: 'diarrea-02', dif: 2,
      stem: 'Mujer de 70 años que terminó amoxicilina-clavulanato hace 5 días presenta 6 evacuaciones líquidas al día, leucocitos 14,000 y creatinina normal. PCR para C. difficile positiva. ¿Tratamiento?',
      opts: ['Metronidazol oral', 'Fidaxomicina o vancomicina oral', 'Vancomicina IV', 'Loperamida', 'Trasplante de microbiota fecal de entrada'],
      ans: 1,
      exp: 'Primer episodio no fulminante: fidaxomicina (preferida) o vancomicina oral por 10 días. La vancomicina IV no llega a la luz del colon. El trasplante de microbiota es para recurrencias.',
      why: ['Ya no es primera línea; solo si no hay otra opción en casos leves.', '', 'No alcanza la luz intestinal.', 'No trata la infección y puede empeorarla.', 'Para recurrencias múltiples.'],
      ref: 'IDSA/SHEA 2021' }),

    q({ id: 'diarrea-03', dif: 2,
      stem: 'Niño con diarrea sanguinolenta tras comer hamburguesa en una feria. Coprocultivo: E. coli O157:H7. ¿Qué evitas?',
      opts: ['Hidratación', 'Antibióticos', 'Vigilar creatinina y plaquetas', 'Biometría hemática seriada', 'Aislamiento de contacto'],
      ans: 1,
      exp: 'Los antibióticos aumentan la liberación de toxina Shiga y el riesgo de síndrome urémico hemolítico. Se da soporte y se vigila hemólisis, plaquetas y función renal.',
      why: ['Es el pilar.', '', 'Es lo correcto.', 'Es lo correcto.', 'Es lo correcto.'],
      ref: 'ACG 2016 diarrea aguda' }),

    q({ id: 'diarrea-04', dif: 2,
      stem: 'Mujer de 35 años con anemia ferropénica que no responde a hierro oral, distensión y diarrea intermitente. ¿Mejor prueba inicial?',
      opts: ['Colonoscopia', 'Anti-transglutaminasa tisular IgA + IgA total', 'Prueba de aliento con lactosa', 'Elastasa fecal', 'HLA-DQ2/DQ8'],
      ans: 1,
      exp: 'Sospecha de celiaca: serología con anti-TTG IgA e IgA total (para no pasar por alto un déficit de IgA). El HLA sirve para descartar (alto valor predictivo negativo), no para diagnosticar.',
      why: ['No es la primera prueba.', '', 'No explica la ferropenia refractaria.', 'Evalúa el páncreas.', 'Solo descarta si es negativo.'],
      ref: 'ACG 2023 celiaca' }),

    q({ id: 'diarrea-05', dif: 2,
      stem: 'Paciente con anti-TTG positiva. Antes de la endoscopia, decidió dejar el gluten por su cuenta hace 2 meses. ¿Qué le indicas?',
      opts: ['Continuar sin gluten y no hacer biopsia', 'Reintroducir gluten (prueba de provocación) antes de la biopsia', 'Hacer la biopsia de inmediato', 'Pedir HLA y con eso confirmar', 'Iniciar budesonida'],
      ans: 1,
      exp: 'Sin gluten, la mucosa se recupera y la biopsia puede salir normal. Se reintroduce gluten (~3 g/día por 2–6 semanas o más) antes de la biopsia.',
      why: ['No se confirmaría el diagnóstico.', '', 'Podría salir falsamente normal.', 'El HLA no confirma.', 'No está indicada.'],
      ref: 'ACG 2023 celiaca' }),

    q({ id: 'diarrea-06', dif: 2,
      stem: 'Hombre con diarrea crónica que mejora completamente cuando ayuna. Na fecal 30, K fecal 25 mEq/L. ¿Tipo de diarrea?',
      opts: ['Secretora', 'Osmótica', 'Inflamatoria', 'Por dismotilidad', 'Facticia secretora'],
      ans: 1,
      exp: 'Brecha osmótica = 290 − 2 × (30 + 25) = 180 mOsm/kg (>125): diarrea osmótica. Además, cede con el ayuno. Causas: intolerancia a lactosa, laxantes osmóticos, malabsorción de carbohidratos.',
      why: ['La brecha sería <50 y persistiría con ayuno.', '', 'No hay sangre ni fiebre.', 'No se define por brecha.', 'La brecha es alta.'],
      ref: 'BSG 2018' }),

    q({ id: 'diarrea-07', dif: 2,
      stem: 'Mujer de 68 años con diarrea acuosa de 3 meses; toma ibuprofeno y omeprazol. Colonoscopia macroscópicamente normal. ¿Qué te falta?',
      opts: ['Nada; el colon es normal', 'Biopsias aleatorias del colon para descartar colitis microscópica', 'TC de abdomen', 'Cápsula endoscópica', 'Repetir colonoscopia en 1 año'],
      ans: 1,
      exp: 'La colitis microscópica (linfocítica o colágena) se ve normal en la colonoscopia: se diagnostica con biopsias. AINE e IBP la favorecen. Tratamiento: budesonida y suspender fármacos asociados.',
      why: ['La mucosa normal no la descarta.', '', 'No hace el diagnóstico.', 'No está indicada.', 'Retrasa el diagnóstico.'],
      ref: 'AGA 2016 colitis microscópica' }),

    q({ id: 'diarrea-08', dif: 3,
      stem: 'Paciente con DM de larga evolución, diarrea, distensión y anemia macrocítica. B12 baja y folato alto. ¿Diagnóstico más probable?',
      opts: ['Anemia perniciosa', 'Sobrecrecimiento bacteriano del intestino delgado', 'Celiaca', 'Insuficiencia pancreática', 'Déficit de lactasa'],
      ans: 1,
      exp: 'La dismotilidad diabética favorece el sobrecrecimiento: las bacterias consumen B12 y producen folato. Diagnóstico con prueba de aliento; tratamiento con rifaximina.',
      why: ['No explica el folato alto ni la diarrea.', '', 'Bajaría también el folato.', 'No eleva el folato.', 'No altera B12 y folato.'],
      ref: 'ACG 2020 SIBO' }),

    q({ id: 'diarrea-09', dif: 1,
      stem: 'Paciente con celiaca confirmada. ¿Tratamiento?',
      opts: ['Glucocorticoides', 'Dieta sin gluten (trigo, cebada, centeno) de por vida', 'Dieta sin lactosa por 3 meses', 'Enzimas pancreáticas', 'Mesalazina'],
      ans: 1,
      exp: 'La única terapia eficaz es la dieta estricta sin gluten. La avena pura suele tolerarse. Se vigila con serología y, si no mejora, se buscan transgresiones o celiaca refractaria.',
      why: ['Solo en celiaca refractaria.', '', 'Puede ayudar temporalmente, pero no es el tratamiento.', 'Para insuficiencia pancreática.', 'Para colitis ulcerosa.'],
      ref: 'ACG 2023 celiaca' }),

    q({ id: 'diarrea-10', dif: 2,
      stem: 'Viajero con 5 evacuaciones al día, fiebre de 38.8 °C y moco con sangre. ¿Antibiótico empírico?',
      opts: ['Ciprofloxacino de primera elección en cualquier región', 'Azitromicina', 'Amoxicilina', 'Metronidazol', 'Ninguno; está contraindicado'],
      ans: 1,
      exp: 'Diarrea del viajero con disentería y fiebre: azitromicina, por la alta resistencia de Campylobacter a quinolonas. Las quinolonas son alternativa en ciertas regiones.',
      why: ['Alta resistencia de Campylobacter.', '', 'No cubre bien los agentes.', 'Para C. difficile o parásitos.', 'Está indicado en esta situación.'],
      ref: 'ACG 2016 · ISTM 2017' })
  ]
};
