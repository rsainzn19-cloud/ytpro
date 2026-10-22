// Tema 8 · Anemias (Hematología, semanas 1–2)
const T = { topic: 'anemias', subj: 'hemato' };
const q = (o) => ({ ...T, ...o });

export default {
  lessons: {
    anemias: {
      hook: 'Dos números ordenan todo: el VCM (micro, normo o macrocítica) y los reticulocitos (¿la médula produce o no?). Después, la ferritina y la B12 hacen el resto.',
      compare: ['ferro-inflam', 'b12-folato'],
      nn: [['microcytic-anemia', 'Microcytic Anemia'], ['macrocytic-anemia', 'Macrocytic Anemia'], ['cbc-approach-to-anemia', 'CBC: Approach to Anemia']],
      yt: 'anemia microcytic macrocytic',
      sections: [
        { h: 'Abordaje', html: `
<ul>
<li><b>Anemia (OMS)</b>: Hb &lt;13 g/dL en hombres, &lt;12 en mujeres no embarazadas (&lt;11 en el embarazo).</li>
<li><b>Índice reticulocitario</b> = reticulocitos (%) × (Hto/45) ÷ factor de maduración. &lt;2: la médula no produce (hipoproliferativa). &gt;2–3: produce bien (hemólisis o sangrado).</li>
</ul>
<div class="tablewrap"><table class="mini">
<tr><th>Microcítica (VCM &lt;80)</th><th>Normocítica</th><th>Macrocítica (VCM &gt;100)</th></tr>
<tr><td>Ferropénica, talasemia, inflamación (a veces), sideroblástica, plomo</td><td>Inflamación, ERC, hemólisis, sangrado agudo, falla medular</td><td>Megaloblástica: B12, folato, fármacos (metotrexato, hidroxiurea, zidovudina, trimetoprim). No megaloblástica: alcohol, hepatopatía, hipotiroidismo, SMD, reticulocitosis</td></tr>
</table></div>` },
        { h: 'Ferropénica', html: `
<ul>
<li>La más común del mundo. Causas: sangrado (menstrual, digestivo), embarazo, malabsorción (celiaca, bariátrica, gastritis atrófica, H. pylori), dieta.</li>
<li><b>Laboratorio</b>: ferritina &lt;30 ng/mL (con inflamación puede ser ferropenia hasta &lt;100), hierro bajo, transferrina/TIBC alta, saturación &lt;20%, ADE alta, trombocitosis reactiva.</li>
<li><b>Clínica</b>: pica (hielo = pagofagia), coiloniquia, queilitis, glositis, piernas inquietas. Plummer-Vinson: disfagia por membranas esofágicas (riesgo de cáncer escamoso).</li>
<li><b>Tratamiento</b>: hierro oral una vez al día o en días alternos (mejor absorción por la hepcidina), lejos de calcio, té e IBP. Reticulocitos suben en 7–10 días y la Hb ~1–2 g/dL en 3–4 semanas. Seguir 3 meses después de normalizar la Hb.</li>
<li><b>Hierro IV</b>: intolerancia, malabsorción (bypass gástrico, celiaca, EII), pérdidas continuas, ERC, tercer trimestre.</li>
<li><b>Busca la causa</b>: en hombres y mujeres posmenopáusicas, endoscopia alta y colonoscopia.</li>
</ul>` },
        { h: 'Anemia de inflamación y talasemia', html: `
<ul>
<li><b>Inflamación</b>: la IL-6 sube la hepcidina, que bloquea la ferroportina: el hierro queda atrapado en macrófagos y enterocitos. Ferritina normal o alta, TIBC baja, saturación baja. Normocítica (a veces microcítica leve). Se trata la causa.</li>
<li><b>β-talasemia menor (rasgo)</b>: microcitosis marcada (VCM ~60–70) con Hb casi normal y eritrocitos normales o aumentados; <b>índice de Mentzer (VCM ÷ eritrocitos en millones) &lt;13</b>; ferritina normal; células en diana y punteado basófilo. Electroforesis: HbA2 &gt;3.5%. No requiere hierro.</li>
<li><b>α-talasemia rasgo</b>: electroforesis normal en adultos; diagnóstico genético o por exclusión.</li>
<li><b>β-talasemia mayor</b>: anemia grave desde los 6 meses, hepatoesplenomegalia, cambios óseos; transfusiones con quelación de hierro.</li>
</ul>` },
        { h: 'Megaloblástica: B12 y folato', html: `
<ul>
<li><b>B12</b>: anemia perniciosa (anticuerpos anti-factor intrínseco y anti-células parietales; gastritis atrófica autoinmune, más riesgo de cáncer gástrico), gastrectomía o bypass, resección ileal o Crohn, metformina, IBP crónicos, dieta vegana.</li>
<li><b>Clínica de B12</b>: anemia + <b>neuropatía</b> (degeneración combinada subaguda: cordones posteriores y laterales → pérdida de vibración y posición, ataxia, Romberg +, Babinski), deterioro cognitivo, glositis.</li>
<li><b>Laboratorio</b>: VCM &gt;100, neutrófilos hipersegmentados (≥6 lóbulos), LDH y bilirrubina indirecta altas (hemólisis intramedular), a veces pancitopenia. Ácido metilmalónico y homocisteína altos en B12; en folato solo la homocisteína.</li>
<li><b>Folato</b>: dieta pobre, alcohol, embarazo, metotrexato, trimetoprim, fenitoína, hemólisis crónica. Sin neuropatía.</li>
<li><b>Tratamiento</b>: B12 IM (o oral a dosis altas); folato oral. <b>Nunca des solo folato si hay déficit de B12</b>: mejora la anemia pero progresa la neuropatía. Vigila hipokalemia al inicio.</li>
</ul>` },
        { h: 'Otras pistas y transfusión', html: `
<ul>
<li><b>Sideroblástica</b>: sideroblastos en anillo (tinción de Perls); alcohol, plomo, isoniazida (déficit de B6), déficit de cobre, SMD. Isoniazida → piridoxina.</li>
<li><b>Plomo</b>: microcítica con punteado basófilo, dolor abdominal, neuropatía (muñeca caída), línea de Burton en encías. En México: loza de barro vidriado, reciclaje de baterías.</li>
<li><b>Alcohol</b>: macrocitosis sin hipersegmentación, GGT alta.</li>
<li><b>Transfusión</b>: umbral restrictivo Hb &lt;7 g/dL (≈8 con enfermedad cardiovascular o cirugía cardiaca u ortopédica). Cada unidad sube ~1 g/dL.</li>
</ul>` }
      ],
      mnemo: { t: 'Microcítica: “TICS”', d: 'Talasemia · Inflamación (enfermedad crónica) · Carencia de hierro (ferropenia) · Sideroblástica (y plomo). Para separar ferropenia de talasemia: Mentzer <13 = talasemia.' },
      pearl: 'La ferritina es el mejor estudio aislado para ferropenia: <30 ng/mL la confirma. Pero es reactante de fase aguda: con inflamación, hasta 100 puede seguir siendo ferropenia.',
      trap: 'Dar folato a un paciente con déficit de B12: la Hb mejora y la neuropatía sigue avanzando, a veces de forma irreversible. Mide B12 antes o da ambas.',
      guide: [
        'Hierro oral en días alternos: estudios recientes muestran mejor absorción que dar varias dosis al día (la hepcidina sube tras cada dosis). Algunas guías siguen indicando una dosis diaria; ambas son correctas, lo que no conviene es repartirlo en 2–3 tomas.'
      ],
      refs: [
        'Ko CW, et al. AGA Clinical Practice Guidelines on the Gastrointestinal Evaluation of Iron Deficiency Anemia. Gastroenterology 2020.',
        'Stabler SP. Vitamin B12 Deficiency. N Engl J Med 2013.',
        'Camaschella C. Iron-Deficiency Anemia. N Engl J Med 2015.'
      ]
    }
  },

  compares: {
    'ferro-inflam': {
      topic: 'anemias', a: 'Ferropénica', b: 'Inflamación',
      rows: [
        ['Mecanismo', 'Falta hierro', 'Hay hierro, pero la hepcidina lo atrapa'],
        ['VCM', 'Bajo', 'Normal o levemente bajo'],
        ['Ferritina', 'Baja (<30)', 'Normal o alta'],
        ['TIBC / transferrina', 'Alta', 'Baja'],
        ['Saturación', 'Baja', 'Baja'],
        ['ADE', 'Alta', 'Normal'],
        ['Receptor soluble de transferrina', 'Alto', 'Normal'],
        ['Tratamiento', 'Hierro y buscar la causa', 'Tratar la enfermedad de base']
      ]
    },
    'b12-folato': {
      topic: 'anemias', a: 'Déficit de B12', b: 'Déficit de folato',
      rows: [
        ['Neuropatía', 'Sí (cordones posteriores y laterales)', 'No'],
        ['Ácido metilmalónico', 'Alto', 'Normal'],
        ['Homocisteína', 'Alta', 'Alta'],
        ['Tiempo para agotar reservas', 'Años', 'Semanas a meses'],
        ['Causas típicas', 'Anemia perniciosa, cirugía gástrica o ileal, metformina, veganos', 'Dieta, alcohol, embarazo, metotrexato, fenitoína, trimetoprim'],
        ['Tratamiento', 'B12 IM u oral a dosis altas', 'Ácido fólico oral (después de descartar déficit de B12)']
      ]
    }
  },

  cards: [
    ['Anemia según la OMS', 'Hb <13 hombres · <12 mujeres · <11 embarazo'],
    ['Índice reticulocitario <2', 'Hipoproliferativa: la médula no produce'],
    ['Ferritina que confirma ferropenia', '<30 ng/mL (<100 si hay inflamación)'],
    ['Índice de Mentzer', 'VCM ÷ eritrocitos (millones): <13 talasemia, >13 ferropenia'],
    ['β-talasemia menor en la electroforesis', 'HbA2 >3.5%'],
    ['Anemia de inflamación', 'Ferritina normal/alta, TIBC baja; mediada por hepcidina'],
    ['Hierro oral: cómo darlo', 'Una vez al día o días alternos, lejos de calcio, té e IBP'],
    ['Respuesta esperada al hierro oral', 'Reticulocitos en 7–10 días; Hb +1–2 g/dL en 3–4 semanas'],
    ['Neuropatía + macrocitosis', 'Déficit de B12 (degeneración combinada subaguda)'],
    ['Ácido metilmalónico alto', 'Déficit de B12 (normal en folato)'],
    ['Error a evitar en la anemia megaloblástica', 'Dar solo folato si hay déficit de B12'],
    ['Punteado basófilo + dolor abdominal + muñeca caída', 'Intoxicación por plomo'],
    ['Isoniazida y anemia', 'Sideroblástica por déficit de B6 → piridoxina'],
    ['Umbral de transfusión', 'Hb <7 g/dL (≈8 con enfermedad cardiovascular)']
  ],

  questions: [
    q({ id: 'ane-01', dif: 1,
      stem: 'Mujer de 28 años con menstruaciones abundantes. Hb 9.4 g/dL, VCM 71, ferritina 6 ng/mL. ¿Tratamiento y respuesta esperada?',
      opts: ['Transfusión de 2 unidades', 'Hierro oral en dosis diaria o en días alternos; reticulocitos ↑ en 7–10 días y Hb ↑ 1–2 g/dL en 3–4 semanas', 'Hierro IV de entrada en todos los casos', 'Ácido fólico', 'Eritropoyetina'],
      ans: 1,
      exp: 'Ferropenia por pérdidas menstruales en una paciente estable: hierro oral. Se continúa ~3 meses después de normalizar la Hb para llenar los depósitos, y se trata la causa ginecológica.',
      why: ['No hay inestabilidad ni Hb <7.', '', 'Se reserva para intolerancia, malabsorción o pérdidas continuas.', 'No hay déficit de folato.', 'No está indicada.'],
      ref: 'Camaschella C, NEJM 2015' }),

    q({ id: 'ane-02', dif: 2,
      stem: 'Hombre de 30 años asintomático. Hb 11.8 g/dL, VCM 64 fL, eritrocitos 5.9 millones/µL, ferritina 90 ng/mL. ¿Siguiente paso?',
      opts: ['Hierro oral por 3 meses', 'Electroforesis de hemoglobina', 'Colonoscopia', 'Aspirado de médula ósea', 'Vitamina B12'],
      ans: 1,
      exp: 'Microcitosis marcada con eritrocitos altos, Hb casi normal y ferritina normal; Mentzer = 64 ÷ 5.9 ≈ 10.8 (<13) = rasgo talasémico. La electroforesis muestra HbA2 >3.5% en la β-talasemia menor. No necesita hierro.',
      why: ['Su ferritina es normal: el hierro puede causar sobrecarga.', '', 'No hay datos de sangrado ni ferropenia.', 'Innecesario.', 'Es macrocitosis lo que sugiere déficit de B12.'],
      ref: 'Taher AT, et al. Lancet 2018' }),

    q({ id: 'ane-03', dif: 2,
      stem: 'Mujer de 52 años con artritis reumatoide activa. Hb 10.4 g/dL, VCM 84, ferritina 320 ng/mL, TIBC baja, saturación 14%. ¿Diagnóstico y conducta?',
      opts: ['Ferropenia; hierro oral', 'Anemia de inflamación; controlar la AR', 'Talasemia; electroforesis', 'Déficit de B12; B12 IM', 'Sideroblástica; piridoxina'],
      ans: 1,
      exp: 'Ferritina alta con TIBC baja en una enfermedad inflamatoria = anemia de inflamación (hepcidina alta). Mejora al controlar la enfermedad de base.',
      why: ['Con ferritina de 320 y TIBC baja no es ferropenia pura.', '', 'Es normocítica y la ferritina no lo sugiere.', 'El VCM es normal y no hay neuropatía.', 'No hay datos que la sugieran.'],
      ref: 'Weiss G, et al. NEJM 2005' }),

    q({ id: 'ane-04', dif: 2,
      stem: 'Mujer de 64 años con vitíligo e hipotiroidismo. Tiene parestesias en pies, inestabilidad al caminar y Romberg positivo. Hb 9.1, VCM 116, neutrófilos hipersegmentados. ¿Diagnóstico y tratamiento?',
      opts: ['Déficit de folato; ácido fólico', 'Anemia perniciosa (déficit de B12 autoinmune); B12 IM', 'Hipotiroidismo; subir la levotiroxina', 'Alcohol; suspenderlo', 'SMD; azacitidina'],
      ans: 1,
      exp: 'Autoinmunidad (vitíligo, tiroiditis) + anemia megaloblástica + afección de cordones posteriores = anemia perniciosa. Confirma con B12 baja (± ácido metilmalónico) y anticuerpos anti-factor intrínseco. Tratamiento con B12 IM; vigilar cáncer gástrico.',
      why: ['El folato no da neuropatía.', '', 'El hipotiroidismo no explica neutrófilos hipersegmentados ni la neuropatía.', 'No hay antecedente ni encaja la hipersegmentación.', 'Primero se descarta lo carencial.'],
      ref: 'Stabler SP, NEJM 2013' }),

    q({ id: 'ane-05', dif: 1,
      stem: 'Un paciente con anemia macrocítica y parestesias recibe solo ácido fólico. Su Hb mejora, pero la ataxia empeora. ¿Qué pasó?',
      opts: ['Efecto adverso del folato', 'Tenía déficit de B12: el folato corrigió la anemia pero no la neuropatía', 'Es una coincidencia', 'Desarrolló SMD', 'Le faltaba hierro'],
      ans: 1,
      exp: 'El folato puede corregir la parte hematológica de un déficit de B12, pero no la neurológica, que avanza. Por eso se mide B12 antes de dar folato, o se dan ambos.',
      why: ['El folato no es neurotóxico.', '', 'Es un error clásico prevenible.', 'No hay datos que lo sugieran.', 'No explica la ataxia.'],
      ref: 'Stabler SP, NEJM 2013' }),

    q({ id: 'ane-06', dif: 2,
      stem: 'Hombre de 45 años con AR tratada con metotrexato sin ácido fólico. Hb 9.8, VCM 112, neutrófilos hipersegmentados. Ácido metilmalónico normal, homocisteína alta. ¿Qué déficit tiene?',
      opts: ['B12', 'Folato', 'Hierro', 'Cobre', 'Piridoxina'],
      ans: 1,
      exp: 'El metotrexato inhibe la dihidrofolato reductasa. La homocisteína alta con ácido metilmalónico normal señala déficit de folato; en el de B12 ambos están altos. Por eso se da ácido fólico con el metotrexato.',
      why: ['En el déficit de B12 el ácido metilmalónico estaría alto.', '', 'Daría microcitosis.', 'Da anemia con neutropenia y mielopatía; no es el contexto.', 'Da anemia sideroblástica.'],
      ref: 'Stabler SP, NEJM 2013' }),

    q({ id: 'ane-07', dif: 1,
      stem: 'Hombre de 70 años con Hb 8.0 g/dL e índice reticulocitario de 0.6. ¿Cómo interpretas el índice?',
      opts: ['Hemólisis', 'Sangrado agudo compensado', 'Anemia hipoproliferativa: la médula no está respondiendo', 'Respuesta adecuada', 'Es un valor normal'],
      ans: 2,
      exp: 'Un índice reticulocitario <2 con anemia indica producción insuficiente (ferropenia, inflamación, ERC, déficits, falla medular). >2–3 sugiere hemólisis o sangrado con médula que responde.',
      why: ['La hemólisis da índice alto.', 'La médula respondería con índice alto.', '', 'Con Hb de 8, un índice de 0.6 es inadecuado.', 'Con anemia, es bajo.'],
      ref: 'Abordaje de la anemia' }),

    q({ id: 'ane-08', dif: 2,
      stem: 'Hombre de 35 años con TB en tratamiento con isoniazida desde hace 3 meses. Anemia microcítica. El aspirado muestra sideroblastos en anillo. ¿Tratamiento?',
      opts: ['Hierro IV', 'Piridoxina (vitamina B6)', 'Ácido fólico', 'Suspender todo el tratamiento antituberculoso', 'Transfusión'],
      ans: 1,
      exp: 'La isoniazida interfiere con la vitamina B6, cofactor de la ALA sintasa (síntesis del grupo hem): anemia sideroblástica. Se da piridoxina (y se usa como profilaxis con isoniazida).',
      why: ['El hierro está acumulado en las mitocondrias, no falta.', '', 'No es el mecanismo.', 'No es necesario: basta agregar B6.', 'No hay indicación.'],
      ref: 'Bottomley SS, Hematol Oncol Clin 2014' }),

    q({ id: 'ane-09', dif: 2,
      stem: 'Mujer de 50 años que fabrica y usa ollas de barro vidriado. Dolor abdominal cólico, estreñimiento, debilidad para extender la muñeca y anemia microcítica con punteado basófilo. ¿Diagnóstico?',
      opts: ['Ferropenia', 'Intoxicación por plomo', 'Porfiria aguda intermitente', 'Talasemia', 'Hipotiroidismo'],
      ans: 1,
      exp: 'El plomo inhibe enzimas de la síntesis del hem (ALA deshidratasa, ferroquelatasa): anemia microcítica con punteado basófilo, dolor abdominal (cólico saturnino), neuropatía motora (muñeca caída) y línea de Burton. Se mide plomo en sangre; quelación si es alto.',
      why: ['No explica el punteado basófilo ni la neuropatía.', '', 'Da dolor abdominal y neuropatía, pero sin anemia microcítica con punteado.', 'No da cólico ni neuropatía.', 'No encaja.'],
      ref: 'CDC/ATSDR plomo · contexto mexicano de barro vidriado' }),

    q({ id: 'ane-10', dif: 2,
      stem: 'Mujer de 34 años con ferropenia que toma hierro oral desde hace 6 semanas con buen apego. La Hb no subió. Toma omeprazol y no tiene sangrado visible. ¿Qué buscas?',
      opts: ['Nada: subir la dosis a 3 tomas al día', 'Malabsorción: enfermedad celiaca, H. pylori y gastritis atrófica, además de pérdidas ocultas', 'Talasemia mayor', 'Leucemia', 'Déficit de B12'],
      ans: 1,
      exp: 'Falta de respuesta al hierro oral con buen apego: piensa en malabsorción (celiaca, H. pylori, gastritis atrófica, IBP, bypass) o pérdida continua. Pide anti-tTG IgA con IgA total y estudia H. pylori; considera hierro IV.',
      why: ['Repartir en varias tomas no mejora la absorción por la hepcidina.', '', 'Se diagnostica en la infancia.', 'Sin datos que lo sugieran.', 'Daría macrocitosis.'],
      ref: 'AGA 2020 anemia ferropénica' }),

    q({ id: 'ane-11', dif: 2,
      stem: 'Mujer de 45 años con bypass gástrico en Y de Roux hace 6 años. Ferritina 4 ng/mL, sin respuesta a hierro oral. ¿Qué indicas?',
      opts: ['Más hierro oral', 'Hierro IV', 'Transfusión mensual', 'Eritropoyetina', 'Revertir el bypass'],
      ans: 1,
      exp: 'El hierro se absorbe en el duodeno y yeyuno proximal, que el bypass excluye. Con malabsorción o falta de respuesta, el hierro IV es de elección.',
      why: ['No se absorbe por la cirugía.', '', 'No está indicada de forma rutinaria.', 'No corrige la ferropenia.', 'Desproporcionado.'],
      ref: 'AGA 2020' }),

    q({ id: 'ane-12', dif: 1,
      stem: 'Hombre de 66 años estable, sin cardiopatía, con Hb 7.6 g/dL por anemia ferropénica crónica. ¿Debe transfundirse?',
      opts: ['Sí, a todo paciente con Hb <10', 'No: está por arriba del umbral restrictivo (<7); repón hierro y busca la causa', 'Sí, para llegar a 12', 'Solo si la Hb es <5', 'Sí, si tiene más de 65 años'],
      ans: 1,
      exp: 'Estrategia restrictiva: transfundir con Hb <7 g/dL en pacientes estables (≈8 con enfermedad cardiovascular). Es igual de segura y evita complicaciones de transfundir de más.',
      why: ['Es un umbral liberal sin beneficio.', '', 'Excesivo y riesgoso.', 'Demasiado bajo; con <7 sí se transfunde.', 'La edad sola no cambia el umbral.'],
      ref: 'AABB 2023 transfusión' }),

    q({ id: 'ane-13', dif: 2,
      stem: 'Mujer de 55 años con disfagia a sólidos, glositis y anemia ferropénica. El esofagograma muestra una membrana en el esófago cervical. ¿Qué síndrome es y qué riesgo implica?',
      opts: ['Acalasia; cáncer de estómago', 'Plummer-Vinson; carcinoma escamoso de esófago', 'Zenker; perforación', 'Barrett; adenocarcinoma', 'Esofagitis eosinofílica; impactación'],
      ans: 1,
      exp: 'Ferropenia + membranas esofágicas cervicales + disfagia = síndrome de Plummer-Vinson. Mejora con hierro y dilatación, y aumenta el riesgo de carcinoma escamoso de esófago e hipofaringe.',
      why: ['La acalasia da disfagia a sólidos y líquidos sin membranas.', '', 'Zenker es un divertículo con regurgitación y halitosis.', 'Barrett es metaplasia distal por reflujo.', 'Da anillos y no se asocia a ferropenia.'],
      ref: 'Plummer-Vinson syndrome, Orphanet' }),

    q({ id: 'ane-14', dif: 1,
      stem: 'Hombre de 50 años que bebe 8 cervezas diarias. Hb 12.2, VCM 106, sin neutrófilos hipersegmentados; B12 y folato normales, GGT alta. ¿Causa más probable de la macrocitosis?',
      opts: ['Déficit de B12', 'Alcohol', 'SMD', 'Talasemia', 'Ferropenia'],
      ans: 1,
      exp: 'El alcohol produce macrocitosis no megaloblástica (efecto directo sobre la membrana y la médula), a menudo con GGT alta. Mejora en meses con abstinencia.',
      why: ['B12 normal y sin hipersegmentación.', '', 'Posible, pero menos probable con este contexto.', 'Da microcitosis.', 'Da microcitosis.'],
      ref: 'Kaferle J, et al. Am Fam Physician 2009' }),

    q({ id: 'ane-15', dif: 2,
      stem: 'Mujer de 60 años con anemia ferropénica (ferritina 12) y PCR elevada por infección reciente. Otra paciente con artritis activa tiene ferritina de 70 ng/mL y saturación de 12%. ¿Qué es cierto sobre la ferritina?',
      opts: ['Siempre refleja exactamente los depósitos', 'Es reactante de fase aguda: con inflamación, valores hasta ~100 ng/mL pueden coexistir con ferropenia', 'Un valor >30 descarta siempre ferropenia', 'Se eleva en la ferropenia', 'No sirve para estudiar anemia'],
      ans: 1,
      exp: 'La ferritina sube con la inflamación. Con inflamación, una ferritina de 30–100 ng/mL con saturación <20% sugiere ferropenia coexistente. El receptor soluble de transferrina ayuda a distinguir.',
      why: ['La inflamación la eleva.', '', 'No con inflamación.', 'Baja en la ferropenia.', 'Es el mejor estudio aislado para ferropenia.'],
      ref: 'AGA 2020 · Camaschella C, NEJM 2015' })
  ],

  cases: [
    { id: 'g-anemias', topic: 'anemias', subj: 'hemato',
      title: 'El cansancio de doña Lupita', place: 'Consulta de Medicina Interna',
      patient: { name: 'Guadalupe', age: 61, sex: 'M', skin: '#D9A07A', hair: '#C8C8D2', gown: '#E79AB3' },
      intro: 'Maestra jubilada, 10 años de menopausia. Lleva meses cansada y se agita al subir escaleras. Toma omeprazol diario “para la gastritis” y calcio.',
      extra: { label: 'Hb', unit: 'g/dL' },
      start: { FC: 96, PAS: 118, PAD: 72, SpO2: 98, FR: 18, X: 8.9 },
      nodes: [
        { tag: 'Consulta 1', ecg: 'normal',
          text: 'Hb 8.9 g/dL, VCM 72, ADE alta, ferritina 5 ng/mL. Sin sangrado visible.',
          q: '¿Qué haces además de reponer hierro?',
          A: { t: 'Endoscopia alta y colonoscopia', ok: true, res: 'Colonoscopia normal. En la endoscopia: gastritis atrófica del cuerpo; se toman biopsias.' },
          B: { t: 'Solo hierro oral y control en 6 meses', ok: false, res: 'Te quedaste sin saber la causa: en una mujer posmenopáusica podía ser un cáncer de colon.' },
          why: 'Ferropenia en hombres o mujeres posmenopáusicas = estudio endoscópico alto y bajo para descartar pérdida digestiva y cáncer.' },
        { tag: '6 semanas después', ecg: 'normal', vit: { X: 9.0 },
          text: 'Toma sulfato ferroso 3 veces al día junto con el calcio y el omeprazol. La Hb casi no subió. Biopsias: gastritis atrófica autoinmune.',
          q: '¿Qué ajustas?',
          A: { t: 'Hierro IV (o una toma en días alternos, lejos del calcio, revisando si necesita el IBP)', ok: true, res: 'Con hierro IV sube a 11.8 g/dL en 4 semanas.', vit: { FC: 80, X: 11.8 } },
          B: { t: 'Subir el hierro oral a 4 tomas al día', ok: false, res: 'Más náusea y estreñimiento; la absorción no mejora.' },
          why: 'La gastritis atrófica (sin ácido) y el IBP reducen la absorción de hierro; el calcio también. Repartir más dosis no ayuda por la hepcidina: considera hierro IV.' },
        { tag: '1 año después', ecg: 'normal', vit: { FC: 84, X: 10.6 },
          text: 'Ahora tiene hormigueo en ambos pies e inestabilidad en la oscuridad. Hb 10.6, VCM 98 con neutrófilos hipersegmentados. Ferritina normal. B12 muy baja, anti-factor intrínseco positivo.',
          q: '¿Qué indicas?',
          A: { t: 'Vitamina B12 IM', ok: true, res: 'La marcha mejora en semanas. Programas vigilancia endoscópica por su gastritis atrófica.', vit: { X: 12.4 } },
          B: { t: 'Ácido fólico oral', ok: false, res: 'La Hb sube un poco, pero la ataxia empeora.' },
          why: 'La gastritis atrófica autoinmune da primero ferropenia (sin ácido) y después déficit de B12 (sin factor intrínseco). El VCM “normal” puede ser una mezcla de ambas. Nunca solo folato.' }
      ] }
  ]
};
