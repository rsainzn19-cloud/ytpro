// Tema 20 · Diarrea, malabsorción y enfermedad celiaca (Gastroenterología, semana 5)
const T = { topic: 'diarrea', subj: 'gastro' };
const q = (o) => ({ ...T, ...o });

export default {
  lessons: {
    diarrea: {
      hook: 'Diarrea aguda casi siempre se resuelve sola: aprende cuándo estudiar y cuándo dar antibiótico. En la crónica, clasifica el mecanismo y no olvides la celiaca.',
      nn: [['diarrhea', 'Diarrhea'], ['malabsorption', 'Malabsorption']],
      yt: 'diarrhea malabsorption celiac disease',
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
