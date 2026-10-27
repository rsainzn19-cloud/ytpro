// Complemento de la “Guía Gastro” de la rotación (Ximena Cors Cepeda, EMIS 5; Google Drive). Mismo formato que 60-guia-cardio.js.
const SRC = { short: 'De tu Guía Gastro', vs: 'tu guía', name: 'Guía Gastro · Ximena Cors Cepeda (EMIS 5)', url: 'https://docs.google.com/document/d/16oAVd4UCRwVvWLOsO8DuHlzTN2RKAGSIKTtHIAqqnq4/edit' };
const REF = 'Guía Gastro de la rotación (X. Cors) + guías actuales';
const q = (topic, o) => ({ subj: 'gastro', topic, ref: REF, ...o });

export default {
  guias: {
    deglucion: { src: SRC,
      puntos: [
        '<b>Esfínteres</b>: el superior es músculo estriado (~80 mmHg) y el inferior es músculo liso (~20 mmHg); los dos se relajan al deglutir.',
        '<b>Disfagia en 2 preguntas</b>: ¿solo sólidos? → obstrucción mecánica (intermitente: anillo; progresiva: estenosis péptica o cáncer) · ¿sólidos y líquidos desde el inicio? → motilidad (intermitente: espasmo; progresiva: acalasia o esclerodermia).',
        '<b>Espasmo esofágico distal</b>: disfagia (sobre todo con líquidos fríos o calientes) y dolor retroesternal que imita un infarto; bario en “sacacorchos”; manometría con contracciones prematuras; se trata con calcioantagonistas o nitratos.',
        '<b>Esófago hipercontráctil (“jackhammer”)</b>: contracciones vigorosas con integral contráctil distal (DCI) >8000 mmHg·s·cm; dolor torácico y disfagia.',
        '<b>Esclerodermia (CREST)</b>: fibrosis del músculo liso → EEI sin tono y cuerpo esofágico débil, con EES normal: reflujo grave. Tratamiento con IBP.'
      ],
      ojo: [
        'Tu guía usa “esófago en cascanueces” (amplitud ≥220 mmHg) y latencia >6 s; la clasificación de Chicago 4.0 (2021) ya no usa el cascanueces: habla de esófago hipercontráctil (DCI >8000 en ≥20% de las degluciones) y define el espasmo por latencia distal <4.5 s.',
        'Tu guía pone la miotomía de Heller como “de elección” en la acalasia; hoy Heller laparoscópica, POEM y dilatación neumática son opciones equivalentes, y en la tipo III se prefiere POEM.'
      ],
      cards: [
        ['Disfagia a sólidos, progresiva, con pérdida de peso', 'Cáncer de esófago hasta demostrar lo contrario → endoscopía'],
        ['Disfagia a sólidos y líquidos desde el inicio, progresiva', 'Acalasia o esclerodermia → manometría'],
        ['Esófago en sacacorchos', 'Espasmo esofágico distal'],
        ['Jackhammer', 'DCI >8000 mmHg·s·cm: esófago hipercontráctil'],
        ['Esclerodermia en la manometría', 'EEI sin tono + contracciones débiles; EES normal']
      ] },
    erge: { src: SRC,
      puntos: [
        '<b>Reflujo ≠ ERGE</b>: ERGE es cuando da síntomas molestos o complicaciones. Puede ser erosiva o no erosiva (la mayoría tiene endoscopía normal).',
        '<b>Mecanismo principal</b>: relajaciones transitorias del EEI. También el EEI hipotónico (cafeína, nitratos, esclerodermia), más presión intragástrica (embarazo, obesidad) y hernia hiatal.',
        '<b>Extraesofágico</b>: tos crónica, disfonía, asma, erosiones dentales.',
        '<b>Endoscopía</b> si hay datos de alarma (disfagia, odinofagia, pérdida de peso, anemia, sangrado, vómito), si no responde a 8 semanas de IBP o, según tu guía, en ≥60 años.',
        '<b>pH-metría con impedancia</b>: demuestra el reflujo; se pide en refractarios, sin esofagitis o antes de la cirugía. Exposición ácida >6% es concluyente (Lyon 2.0).',
        '<b>IBP</b> 30–60 min antes del desayuno; retíralo poco a poco (hipersecreción de rebote). Efectos: hipomagnesemia, déficit de B12 y hierro, C. difficile, nefritis intersticial.',
        '<b>Complicaciones</b>: estenosis péptica (disfagia a sólidos progresiva), anillo de Schatzki (disfagia intermitente al comer carne) y Barrett.',
        '<b>Barrett</b>: segmento corto <3 cm o largo ≥3 cm; biopsias de 4 cuadrantes cada 1–2 cm; sin displasia → vigilancia cada 3–5 años; con displasia → ablación endoscópica (radiofrecuencia).'
      ],
      ojo: [
        'Prueba terapéutica: tu guía dice 2 semanas en un lugar y 8 en otro; la ACG 2022 da 8 semanas de IBP una vez al día y, si no responde, endoscopía.',
        'Tu guía dice tomar el IBP 15–30 min antes del desayuno; lo indicado es 30–60 min antes.'
      ],
      cards: [
        ['Mecanismo principal de la ERGE', 'Relajaciones transitorias del EEI'],
        ['Anillo de Schatzki', 'Disfagia intermitente a sólidos (carne)'],
        ['Barrett: segmento largo', '≥3 cm de epitelio columnar'],
        ['Barrett sin displasia', 'Vigilancia endoscópica cada 3–5 años'],
        ['pH-metría positiva', 'Exposición ácida >6% (Lyon 2.0)']
      ] },
    stda: { src: SRC,
      puntos: [
        '<b>Úlcera</b> = lesión ≥5 mm que llega a la muscular de la mucosa; si mide menos de 5 mm es erosión.',
        '<b>Úlceras de estrés</b>: de Curling (quemaduras, por hipoperfusión de la mucosa) y de Cushing (TCE o hipertensión intracraneal, por hipersecreción vagal).',
        '<b>Gástrica vs duodenal</b>: la gástrica duele al comer y baja de peso; se biopsia siempre (≈3% es maligna). La duodenal mejora al comer, duele 2–5 h después y de noche.',
        '<b>Antes de buscar H. pylori</b> con aliento o antígeno fecal: suspende el IBP 2 semanas y los antibióticos o el bismuto 4 semanas. La serología no sirve para confirmar la erradicación.',
        '<b>Otras causas de STDA</b>: Mallory-Weiss (desgarro tras vómito, alcohol), Boerhaave (perforación con enfisema subcutáneo), Dieulafoy (arteria submucosa) y ectasia vascular antral (“estómago en sandía”).',
        '<b>Úlcera perforada</b> (las anteriores perforan, las posteriores sangran): aire libre en Rx de tórax de pie → TAC → cirugía.',
        '<b>Escalas</b>: Glasgow-Blatchford antes de la endoscopía (0–1: manejo ambulatorio), Rockall después (riesgo de muerte), Forrest en la endoscopía (riesgo de resangrado).'
      ],
      ojo: [
        'La tabla de tu guía pone la úlcera gástrica en <40 años y la duodenal en >40: es al revés. La duodenal es más de jóvenes y la gástrica de mayores de 50.',
        'Tu guía pone la triple con claritromicina como primera línea; en México la resistencia a claritromicina pasa de 15%, así que la primera línea es la cuádruple con bismuto por 14 días (como en la lección).',
        'Tu guía dice suspender IBP, antibióticos y bismuto 2 semanas antes de la prueba de aliento; los antibióticos y el bismuto se suspenden 4 semanas antes.'
      ],
      cards: [
        ['Úlcera de Curling', 'Quemaduras'],
        ['Úlcera de Cushing', 'TCE o hipertensión intracraneal'],
        ['Estómago en sandía', 'Ectasia vascular antral'],
        ['Glasgow-Blatchford 0–1', 'Sangrado alto de bajo riesgo: manejo ambulatorio'],
        ['Antes de la prueba de aliento', 'Suspender IBP 2 semanas y antibióticos o bismuto 4 semanas']
      ] },
    pancrea: { src: SRC,
      puntos: [
        '<b>Causas: “I GET SMASHED”</b>: Idiopática, litos (Gallstones), Etanol, Trauma, eSteroides, parotiditis (Mumps), Autoinmune, alacrán (Scorpion), Hipercalcemia e Hipertrigliceridemia (≥1000 mg/dL), CPRE (ERCP) y fármacos (Drugs).',
        '<b>Signos de hemorragia retroperitoneal</b>: Cullen (periumbilical), Grey Turner (flancos) y Fox (ligamento inguinal).',
        '<b>Lipasa</b>: sube en 3–6 h, pico a las 24 h, dura 1–2 semanas (la más útil). La amilasa se normaliza en 3–5 días.',
        '<b>Pronóstico</b>: hematocrito alto y BUN que sube = peor; PCR >150 mg/L a las 48–72 h sugiere necrosis.',
        '<b>Escalas</b>: Ranson (a las 48 h; ≥3 grave) · APACHE II ≥8 · BISAP ≥3 (BUN >25, alteración mental, SIRS, edad >60, derrame pleural) · Balthazar por TAC: A normal, B páncreas grande, C inflamación peripancreática, D una colección, E ≥2 colecciones o gas.',
        '<b>TAC con contraste</b>: solo si hay duda diagnóstica o si no mejora en 48–72 h (la necrosis se ve mejor a los 5–7 días).',
        '<b>Por hipertrigliceridemia</b>: insulina IV (activa la lipoproteinlipasa), plasmaféresis en casos graves y fibrato después.',
        '<b>Pseudoquiste</b>: colección encapsulada después de 4 semanas; se drena solo si da síntomas o se complica.'
      ],
      ojo: [
        'Antibióticos: tu guía da imipenem en la pancreatitis necrotizante; hoy no se dan profilácticos, solo si la necrosis está infectada (gas en la TAC, cultivo) o hay otra infección.',
        'Líquidos: tu guía da 250–500 mL/h; desde WATERFALL (2022) se prefiere reanimación moderada con Ringer lactato (bolo de 10 mL/kg solo si hay hipovolemia y luego 1.5 mL/kg/h): la agresiva da más sobrecarga sin beneficio.',
        'Ranson: tu guía dice “≤6 grave”; lo correcto es que ≥3 es grave y ≥6 tiene mortalidad muy alta.'
      ],
      cards: [
        ['Signo de Fox', 'Equimosis en el ligamento inguinal: hemorragia retroperitoneal'],
        ['BISAP', 'BUN >25, alteración mental, SIRS, edad >60, derrame pleural; ≥3 = grave'],
        ['Balthazar E', '≥2 colecciones o gas retroperitoneal'],
        ['Pancreatitis por triglicéridos: tratamiento', 'Insulina IV (± plasmaféresis), luego fibrato'],
        ['¿Antibiótico en necrosis estéril?', 'No; solo si la necrosis se infecta']
      ] },
    diarrea: { src: SRC,
      puntos: [
        '<b>Tiempos</b>: aguda ≤14 días · persistente 14–30 · crónica >30 días.',
        '<b>Fisiopatología</b>: secretora (no cede con el ayuno, nocturna, gran volumen, brecha <50) · osmótica (cede con el ayuno, brecha >100, pH fecal <6) · inflamatoria (sangre, moco, leucocitos, tenesmo) · motora (hipertiroidismo, carcinoide) · esteatorrea (>7 g de grasa al día con dieta de 100 g).',
        '<b>Brecha osmótica fecal</b> = 290 − 2 × (Na + K en heces).',
        '<b>D-xilosa</b>: si se absorbe normal, el problema es pancreático (maldigestión); si está baja, es de la mucosa (celiaca) o sobrecrecimiento bacteriano.',
        '<b>Esprue tropical</b>: parecido a la celiaca, en el trópico, con anemia megaloblástica; se trata con tetraciclina y ácido fólico.',
        '<b>Whipple</b>: Tropheryma whipplei, macrófagos PAS+ en la lámina propia, artralgias y síntomas neurológicos o cardiacos; ceftriaxona IV y luego TMP-SMX por un año.',
        '<b>Intolerancia a la lactosa</b>: vellosidades normales, diarrea osmótica con pH fecal bajo; la prueba de hidrógeno espirado sube >20 ppm.',
        'Mayor de 50 años con dolor abdominal y diarrea con sangre: piensa en <b>colitis isquémica</b>.'
      ],
      ojo: [
        'C. difficile: tu guía da vancomicina o metronidazol; hoy (IDSA 2021) es fidaxomicina o vancomicina oral, y el metronidazol solo si no hay otra opción (como en la lección).',
        'Antibiótico empírico: tu guía da ciprofloxacino; por la resistencia de Campylobacter se prefiere azitromicina en la disentería o la diarrea del viajero grave.'
      ],
      cards: [
        ['Brecha osmótica fecal', '290 − 2 × (Na + K fecales): <50 secretora, >100 osmótica'],
        ['D-xilosa normal con esteatorrea', 'Insuficiencia pancreática (maldigestión)'],
        ['Esprue tropical: tratamiento', 'Tetraciclina + ácido fólico'],
        ['Whipple: tinción', 'Macrófagos PAS+ en la lámina propia'],
        ['Diarrea que no cede con el ayuno', 'Secretora']
      ] },
    sii: { src: SRC,
      puntos: [
        'Más frecuente en mujeres de 20–39 años; se asocia a fibromialgia, fatiga crónica, ansiedad y depresión. Puede empezar después de una gastroenteritis (<b>SII posinfeccioso</b>).',
        '<b>Roma IV</b>: dolor abdominal ≥1 día a la semana en los últimos 3 meses (con inicio ≥6 meses antes) y ≥2 de: relacionado con la defecación, cambio en la frecuencia, cambio en la forma.',
        '<b>Subtipos por Bristol</b> en los días con heces anormales: SII-D (tipos 6–7 en >25%), SII-E (tipos 1–2 en >25%), SII-M (ambos >25%) y no clasificado.',
        '<b>Fármacos</b>: estreñimiento → psyllium, PEG, linaclotida, lubipristona (abre canales de cloro) · diarrea → loperamida, rifaximina, alosetrón · dolor → antiespasmódicos (mebeverina, butilhioscina, trimebutina) o tricíclicos a dosis bajas.'
      ],
      ojo: [
        'Tu guía agrega un subtipo “A” (alternante); Roma IV usa SII-D, SII-E, SII-M y SII no clasificado.'
      ],
      cards: [
        ['Roma IV: duración', 'Dolor ≥1 día/semana en los últimos 3 meses, inicio ≥6 meses antes'],
        ['SII-D por Bristol', 'Tipos 6–7 en >25% de las evacuaciones anormales'],
        ['Lubipristona', 'Activa canales de cloro: SII con estreñimiento'],
        ['Mebeverina', 'Antiespasmódico para el dolor del SII']
      ] }
  },

  questions: [
    q('deglucion', { id: 'deglucion-g01', dif: 2,
      stem: 'Mujer de 50 años con dolor retroesternal opresivo y disfagia intermitente, sobre todo con bebidas frías. ECG y troponinas normales. El esofagograma muestra un esófago en “sacacorchos”. ¿Diagnóstico?',
      opts: ['Acalasia', 'Espasmo esofágico distal', 'Estenosis péptica', 'Anillo de Schatzki', 'Esclerodermia'],
      ans: 1,
      exp: 'Disfagia intermitente a líquidos y sólidos con dolor anginoso y esófago en sacacorchos = espasmo esofágico distal. La manometría muestra contracciones prematuras. Se trata con calcioantagonistas o nitratos.',
      why: ['Da pico de pájaro y disfagia progresiva.', '', 'Da disfagia progresiva a sólidos.', 'Da disfagia a sólidos, sin dolor anginoso.', 'Da reflujo grave y aperistalsis distal, no sacacorchos.'] }),
    q('deglucion', { id: 'deglucion-g02', dif: 2,
      stem: 'Mujer de 45 años con Raynaud, esclerodactilia y pirosis intensa. ¿Qué esperas en la manometría?',
      opts: ['EEI hipertónico que no se relaja', 'Contracciones vigorosas con DCI >8000', 'EEI sin tono y contracciones débiles en el esófago distal', 'Contracciones simultáneas prematuras', 'Manometría normal'],
      ans: 2,
      exp: 'En la esclerodermia, la fibrosis del músculo liso deja al EEI sin tono y al cuerpo distal sin fuerza (el EES, estriado, funciona): reflujo grave. Se trata con IBP.',
      why: ['Es la acalasia.', 'Es el esófago hipercontráctil.', '', 'Es el espasmo esofágico.', 'El músculo liso está afectado.'] }),
    q('erge', { id: 'erge-g01', dif: 2,
      stem: 'Hombre de 55 años con ERGE de 10 años. La endoscopía muestra 4 cm de mucosa color salmón y la biopsia reporta metaplasia intestinal sin displasia. ¿Qué sigue?',
      opts: ['Esofagectomía', 'Ablación por radiofrecuencia inmediata', 'IBP y vigilancia endoscópica con biopsias cada 3–5 años', 'Suspender el IBP', 'Nueva endoscopía en 3 meses sin tratamiento'],
      ans: 2,
      exp: 'Barrett de segmento largo (≥3 cm) sin displasia: IBP y vigilancia endoscópica con biopsias de 4 cuadrantes (cada 3 años en segmento largo). La ablación se reserva para displasia.',
      why: ['Es para cáncer invasor.', 'Se reserva para displasia.', '', 'Necesita IBP de mantenimiento.', 'No es el intervalo para Barrett sin displasia.'] }),
    q('erge', { id: 'erge-g02', dif: 1,
      stem: 'Hombre de 40 años con disfagia intermitente cuando come carne; entre episodios está bien. ¿Causa más probable?',
      opts: ['Cáncer de esófago', 'Anillo de Schatzki', 'Acalasia', 'Esclerodermia', 'Divertículo de Zenker'],
      ans: 1,
      exp: 'Disfagia intermitente solo a sólidos (“síndrome del steakhouse”) = anillo esofágico inferior de Schatzki. Se trata con dilatación endoscópica e IBP.',
      why: ['Daría disfagia progresiva y pérdida de peso.', '', 'Da disfagia a sólidos y líquidos.', 'Da reflujo y disfagia progresiva.', 'Da regurgitación de comida no digerida y halitosis.'] }),
    q('stda', { id: 'stda-g01', dif: 2,
      stem: 'Paciente con quemaduras en el 45% de la superficie corporal presenta hematemesis al cuarto día. ¿Qué lesión es la más probable?',
      opts: ['Úlcera de Cushing', 'Úlcera de Curling', 'Síndrome de Mallory-Weiss', 'Lesión de Dieulafoy', 'Várices esofágicas'],
      ans: 1,
      exp: 'Úlcera de Curling: úlcera de estrés por hipoperfusión de la mucosa en grandes quemados. Se previene con IBP en pacientes críticos.',
      why: ['Es por TCE o hipertensión intracraneal.', '', 'Es un desgarro por vómito.', 'Es una arteria submucosa aberrante.', 'No tiene relación con quemaduras.'] }),
    q('stda', { id: 'stda-g02', dif: 2,
      stem: 'Hombre de 30 años terminó hace 2 semanas la cuádruple con bismuto para H. pylori y sigue con omeprazol. Quieres confirmar la erradicación. ¿Qué haces?',
      opts: ['Prueba de aliento hoy mismo', 'Serología IgG', 'Suspender el IBP 2 semanas y hacer la prueba de aliento al menos 4 semanas después de terminar los antibióticos', 'Endoscopía con biopsia obligatoria', 'No es necesario confirmar'],
      ans: 2,
      exp: 'El IBP, los antibióticos y el bismuto dan falsos negativos. La prueba de aliento o el antígeno fecal se hacen ≥4 semanas después de terminar el tratamiento y con el IBP suspendido 2 semanas.',
      why: ['Daría un falso negativo.', 'Sigue positiva aunque se haya erradicado.', '', 'Solo si la úlcera era gástrica o hay otra indicación.', 'Siempre se confirma la erradicación.'] }),
    q('pancrea', { id: 'pancrea-g01', dif: 2,
      stem: 'Mujer de 38 años con pancreatitis aguda y triglicéridos de 2400 mg/dL, sin acidosis ni datos de gravedad. Además de líquidos y analgesia, ¿qué tratamiento específico inicias?',
      opts: ['Imipenem', 'Insulina IV en infusión (con glucosa si hace falta)', 'CPRE urgente', 'Octreótido', 'Colecistectomía urgente'],
      ans: 1,
      exp: 'La insulina activa la lipoproteinlipasa y baja rápido los triglicéridos; se agrega glucosa si la glucemia es normal. En casos graves, plasmaféresis. Después, fibrato y control de la causa.',
      why: ['Los antibióticos no son profilácticos.', '', 'Es para la biliar con colangitis.', 'No sirve en pancreatitis.', 'No es pancreatitis biliar.'] }),
    q('pancrea', { id: 'pancrea-g02', dif: 2,
      stem: 'Hombre de 70 años con pancreatitis aguda: BUN 32 mg/dL, confusión y derrame pleural; sin SIRS. ¿Cuánto da el BISAP y qué significa?',
      opts: ['2: riesgo bajo', '3: riesgo alto', '4: riesgo alto de mortalidad', '1: riesgo bajo', 'No se calcula sin TAC'],
      ans: 2,
      exp: 'BUN >25 (1), alteración mental (1), edad >60 (1), derrame pleural (1), SIRS (0) = 4 puntos. Con ≥3 el riesgo de muerte es alto.',
      why: ['Suma más puntos.', 'Le falta un punto: la edad también cuenta.', '', 'Suma más puntos.', 'El BISAP no requiere TAC.'] }),
    q('diarrea', { id: 'diarrea-g01', dif: 2,
      stem: 'Hombre con diarrea crónica: Na fecal 30 y K fecal 20 mmol/L; la diarrea desaparece con el ayuno. ¿Qué tipo es?',
      opts: ['Secretora', 'Osmótica', 'Inflamatoria', 'Motora', 'Por esteatorrea pancreática'],
      ans: 1,
      exp: 'Brecha = 290 − 2 × (30 + 20) = 190 mOsm/kg (>100) y cede con el ayuno: osmótica (laxantes osmóticos, intolerancia a la lactosa, malabsorción).',
      why: ['Tendría brecha <50 y seguiría con el ayuno.', '', 'Tendría sangre, moco y leucocitos.', 'No se define por la brecha.', 'Se demuestra con grasa fecal, no con la brecha.'] }),
    q('diarrea', { id: 'diarrea-g02', dif: 3,
      stem: 'Paciente con esteatorrea. La prueba de D-xilosa sale normal. ¿Dónde está el problema?',
      opts: ['Mucosa del intestino delgado (celiaca)', 'Páncreas (maldigestión)', 'Sobrecrecimiento bacteriano', 'Íleon terminal', 'Colon'],
      ans: 1,
      exp: 'Si la mucosa absorbe bien la D-xilosa (que no necesita enzimas), la esteatorrea viene de la falta de enzimas: insuficiencia pancreática.',
      why: ['Daría D-xilosa baja.', '', 'Las bacterias consumen la xilosa: sale baja.', 'La xilosa se absorbe en el delgado proximal.', 'El colon no participa en esta prueba.'] }),
    q('sii', { id: 'sii-g01', dif: 1,
      stem: 'Mujer de 28 años con dolor abdominal 2 días a la semana desde hace 8 meses, que mejora al evacuar, con evacuaciones duras (Bristol 1–2) más del 25% de las veces. Sin datos de alarma. ¿Diagnóstico?',
      opts: ['SII con diarrea', 'SII con estreñimiento', 'SII mixto', 'Enfermedad celiaca', 'Estreñimiento funcional'],
      ans: 1,
      exp: 'Cumple Roma IV (dolor ≥1 día a la semana, relacionado con la defecación, inicio ≥6 meses) con heces Bristol 1–2 en >25%: SII con estreñimiento.',
      why: ['Serían Bristol 6–7.', '', 'Tendría ambos patrones >25%.', 'Sin datos que la sugieran.', 'En él no predomina el dolor.'] })
  ]
};
