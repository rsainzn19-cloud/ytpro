// Tema 24 · Síndromes linfoproliferativos (Hematología, semana 6)
const T = { topic: 'linfo', subj: 'hemato' };
const q = (o) => ({ ...T, ...o });

export default {
  lessons: {
    linfo: {
      hook: 'Adenopatía que no se va: biopsia escisional. Distingue Hodgkin de no Hodgkin, reconoce los linfomas por su translocación y sabe cuándo tratar (y cuándo no) la LLC.',
      nn: [['hodgkins-lymphoma', 'Hodgkin Lymphoma'], ['non-hodgkins-lymphoma', 'Non-Hodgkin Lymphoma'], ['chronic-lymphocytic-leukemia', 'Chronic Lymphocytic Leukemia']],
      yt: 'Hodgkin non-Hodgkin lymphoma CLL',
      anim: 'linfo',
      compare: ['lh-lnh'],
      video: [
        { ch: 'El ganglio que no se va', sc: [
          { v: { k: 'title', t: 'Linfomas y LLC', s: 'Tema 24 · Hematología' },
            say: 'Bienvenido a la guardia de hematología. En este video vas a abordar una adenopatía sospechosa y a distinguir el linfoma de Hodgkin de los no Hodgkin. También vas a estadificar con Lugano y a decidir cuándo tratar la leucemia linfocítica crónica.' },
          { v: { k: 'case', t: 'Un ganglio en el cuello', p: { name: 'Mariana', age: 24, sex: 'M', skin: '#E0B48C', hair: '#3A2418', gown: '#7FC8A9' }, text: 'Ganglio cervical de 3 cm, duro e indoloro, de 6 semanas. Prurito y sudor nocturno. Rx: mediastino ensanchado.', vit: { FC: '96', Temp: '38.2 °C' } },
            say: 'Conoce a Mariana, de veinticuatro años. Tiene un ganglio en el cuello de tres centímetros, duro y que no duele, desde hace seis semanas. Además tiene comezón y sudores nocturnos, y la radiografía muestra el mediastino ensanchado.' },
          { v: { k: 'list', t: 'Adenopatía sospechosa', items: ['>2 cm, dura, indolora o fija', 'Más de 4–6 semanas sin causa', 'Supraclavicular: siempre sospechosa', 'Con síntomas B: fiebre, sudor, peso', 'Edad mayor de 40 años'] },
            say: 'Un ganglio es sospechoso si mide más de dos centímetros, es duro, no duele, está fijo o dura más de cuatro a seis semanas sin causa. El supraclavicular siempre es sospechoso. Y pesa más con síntomas B o en mayores de cuarenta años.' },
          { v: { k: 'anim', id: 'linfo', step: 0 },
            say: 'Recuerda cómo es un ganglio normal. La linfa entra por los vasos aferentes. En la corteza están los folículos de linfocitos B, en la paracorteza los linfocitos T, y la linfa sale por el hilio. Esa arquitectura es la que el patólogo necesita ver.' },
          { v: { k: 'tip', kind: 'trap', t: 'Para diagnosticar linfoma necesitas la arquitectura: biopsia escisional (o con aguja gruesa). La aspiración con aguja fina no basta.' },
            say: 'Por eso el diagnóstico se hace con biopsia escisional del ganglio completo, o con aguja gruesa si no es accesible. La aspiración con aguja fina no basta: solo da células sueltas, sin arquitectura.' }
        ] },
        { ch: 'Linfoma de Hodgkin', sc: [
          { v: { k: 'anim', id: 'linfo', step: 1 },
            say: 'En el linfoma de Hodgkin, el tumor es una minoría. Unas pocas células de Reed Sternberg, grandes y con dos núcleos como ojos de búho, son CD quince y CD treinta positivas. Liberan citocinas que atraen un fondo inflamatorio de linfocitos y eosinófilos.' },
          { v: { k: 'list', t: 'Hodgkin: pistas', items: ['Bimodal: 20–30 años y >55', 'Cervical o mediastinal; esclerosis nodular', 'Asociado a virus de Epstein-Barr', 'Prurito; dolor ganglionar con alcohol', 'ABVD ± radioterapia: curación >80%'] },
            say: 'Tiene distribución bimodal: jóvenes de veinte a treinta años y mayores de cincuenta y cinco. Empieza en ganglios cervicales o mediastinales, y el subtipo más común es la esclerosis nodular. Se asocia al virus de Epstein Barr, y puede dar comezón y dolor ganglionar al beber alcohol.' },
          { v: { k: 'anim', id: 'linfo', step: 2 },
            say: 'Esta es la diferencia que más preguntan. El Hodgkin avanza de forma contigua, de un grupo de ganglios al vecino. Los linfomas no Hodgkin saltan: aparecen en ganglios lejanos y con frecuencia fuera del ganglio, como estómago, piel o médula ósea.' },
          { v: { k: 'vs', cmp: 'lh-lnh', rows: [0, 1, 2, 3] },
            say: 'Compáralos. El Hodgkin tiene células de Reed Sternberg, se disemina de forma contigua y rara vez sale del ganglio. Los no Hodgkin son en su mayoría de células B, saltan y afectan órganos con frecuencia. Y predominan en adultos mayores.' },
          { v: { k: 'quiz', q: 'Biopsia: células binucleadas “en ojo de búho”, CD15+ y CD30+, en fondo inflamatorio. ¿Diagnóstico?', opts: ['Linfoma folicular', 'Linfoma de Hodgkin clásico', 'Linfoma de Burkitt'], a: 1 },
            say: 'Pausa. La biopsia muestra células grandes binucleadas, en ojo de búho, CD quince y CD treinta positivas, en un fondo inflamatorio. ¿Cuál es el diagnóstico?',
            exp: 'Linfoma de Hodgkin clásico. Las células de Reed Sternberg rodeadas de células inflamatorias son su sello. El folicular tiene BCL dos y el Burkitt, MYC.' }
        ] },
        { ch: 'Estadificar con Lugano', sc: [
          { v: { k: 'anim', id: 'linfo', step: 3 },
            say: 'Para estadificar se usa la clasificación de Lugano, con tomografía por emisión de positrones. Estadio uno: una sola región. Estadio dos: dos o más regiones del mismo lado del diafragma. Estadio tres: ganglios a ambos lados. Estadio cuatro: afección extraganglionar difusa, como hígado o médula ósea.' },
          { v: { k: 'big', h: 'Síntomas B', t: '>10%', u: 'del peso en 6 meses', s: 'Más fiebre >38 °C y diaforesis nocturna. En Lugano, la letra B solo se anota en el Hodgkin.' },
            say: 'Los síntomas B son tres: fiebre mayor de treinta y ocho grados, sudores nocturnos y pérdida de más del diez por ciento del peso en seis meses. Empeoran el pronóstico. En Lugano, la letra B solo se anota en el Hodgkin.' },
          { v: { k: 'quiz', q: 'Hodgkin con ganglios cervicales, axilares y mediastinales; nada abajo del diafragma. ¿Estadio?', opts: ['II', 'III', 'IV'], a: 0 },
            say: 'Pausa. Linfoma de Hodgkin con ganglios cervicales, axilares y mediastinales, y nada debajo del diafragma. ¿Qué estadio es?',
            exp: 'Estadio dos: varias regiones, todas del mismo lado del diafragma. Sería tres con ganglios abajo, o con el bazo afectado, y cuatro con afección extraganglionar difusa.' }
        ] },
        { ch: 'Linfomas no Hodgkin', sc: [
          { v: { k: 'list', t: 'No Hodgkin que debes conocer', items: ['Difuso de células B grandes: el más común; R-CHOP', 'Folicular t(14;18) BCL2: indolente; vigilar', 'Burkitt t(8;14) MYC: cielo estrellado; lisis', 'Manto t(11;14): ciclina D1, CD5+ CD23−', 'MALT gástrico: erradicar H. pylori'] },
            say: 'De los no Hodgkin, el más común es el difuso de células B grandes: agresivo, pero curable con rituximab y quimioterapia CHOP en la mayoría. El folicular es indolente y, con poca carga, se vigila. El Burkitt crece rapidísimo y da lisis tumoral. Y el MALT gástrico puede curarse erradicando Helicobacter pylori.' },
          { v: { k: 'mnemo', t: '14;18 folicular · 8;14 Burkitt · 11;14 manto', d: 'Folicular = BCL2 (no muere, crece lento). Burkitt = MYC (acelera, crece rapidísimo). Manto = ciclina D1.' },
            say: 'Las translocaciones: catorce dieciocho, folicular, con BCL dos, que impide la muerte celular y por eso crece lento. Ocho catorce, Burkitt, con MYC, que acelera todo. Once catorce, manto, con ciclina D uno.' },
          { v: { k: 'list', t: 'Infecciones y linfoma', items: ['VEB: Burkitt endémico y Hodgkin', 'VIH: LDCBG, Burkitt, linfoma primario del SNC', 'H. pylori: MALT gástrico', 'VHC: linfoma esplénico de zona marginal', 'HTLV-1: leucemia/linfoma T del adulto'] },
            say: 'Asocia estas infecciones. Epstein Barr con Burkitt endémico y Hodgkin. VIH con difuso de células grandes, Burkitt y linfoma primario del sistema nervioso. Helicobacter con MALT gástrico. Hepatitis C con linfoma esplénico de zona marginal. Y HTLV uno con linfoma T del adulto.' }
        ] },
        { ch: 'Leucemia linfocítica crónica', sc: [
          { v: { k: 'case', t: 'Chequeo de rutina', p: { name: 'Jorge', age: 72, sex: 'H', skin: '#D9A07A', hair: '#C8C8D0', gown: '#9FB8E0' }, text: 'Asintomático. Linfocitos 22,000/µL; frotis con células en mancha. Hb y plaquetas normales, sin adenopatías grandes.', vit: { Hb: '13.8', Plt: '210 mil' } },
            say: 'Ahora conoce a Jorge, de setenta y dos años. Viene a un chequeo y está asintomático. En la biometría tiene veintidós mil linfocitos, con hemoglobina y plaquetas normales.' },
          { v: { k: 'anim', id: 'linfo', step: 4 },
            say: 'Es una leucemia linfocítica crónica, la leucemia más común del adulto en occidente. La sangre se llena de linfocitos B pequeños y maduros, CD cinco y CD veintitrés positivos. Son frágiles y en el frotis se aplastan: son las células en mancha.' },
          { v: { k: 'big', h: 'LLC', t: '≥5,000', u: 'linfocitos B clonales/µL', s: 'Por ≥3 meses, por citometría. Si son <5,000 sin adenopatías ni citopenias: linfocitosis B monoclonal.' },
            say: 'El diagnóstico requiere cinco mil o más linfocitos B monoclonales por microlitro, confirmados por citometría de flujo. Si son menos de cinco mil, sin adenopatías ni citopenias, se llama linfocitosis B monoclonal, y solo se vigila.' },
          { v: { k: 'flow', t: 'LLC: ¿cuándo tratar?', steps: ['LLC confirmada', '¿Enfermedad activa?', 'No → vigilar cada 3–12 meses', 'Sí → inhibidor de BTK o venetoclax', 'del(17p)/TP53: sin quimioinmuno'] },
            say: 'La decisión no depende del número de linfocitos. Se trata solo si hay enfermedad activa: síntomas B, citopenias progresivas, bazo o ganglios masivos, o linfocitos que se duplican en menos de seis meses. Entonces se usa un inhibidor de BTK, o venetoclax con obinutuzumab.' },
          { v: { k: 'quiz', q: 'Jorge: asintomático, Rai 0, Hb y plaquetas normales. ¿Qué haces?', opts: ['Ibrutinib ya', 'Vigilar y esperar', 'R-CHOP'], a: 1 },
            say: 'Pausa. Jorge está asintomático, sin citopenias ni masas. ¿Qué haces?',
            exp: 'Vigilar y esperar, con biometría cada tres a doce meses. Tratar la leucemia linfocítica crónica temprana sin actividad no mejora la supervivencia.' },
          { v: { k: 'list', t: 'LLC: complicaciones', items: ['AHAI caliente (Coombs +) y PTI', 'Hipogammaglobulinemia: infecciones', 'Richter: ganglio que crece rápido, LDH ↑', 'Segundas neoplasias (sobre todo piel)'] },
            say: 'Vigila sus complicaciones. Autoinmunidad: anemia hemolítica con Coombs positivo y trombocitopenia inmune. Hipogammaglobulinemia con infecciones de repetición. Y la transformación de Richter: un ganglio que crece rápido, con síntomas B y deshidrogenasa láctica alta, que se biopsia para buscar un linfoma agresivo.' },
          { v: { k: 'tip', kind: 'pearl', t: 'Linfoma = biopsia con arquitectura. Hodgkin avanza contiguo; el no Hodgkin salta. LLC sin actividad: no se trata.' },
            say: 'La perla para el examen: para diagnosticar linfoma necesitas la arquitectura del ganglio. El Hodgkin avanza de forma contigua y los no Hodgkin saltan. Y la leucemia linfocítica crónica sin actividad no se trata. Ahora ve a las preguntas del tema para fijar lo que viste.' }
        ] }
      ],
      sections: [
        { h: 'Abordaje', html: `
<ul>
<li>Adenopatía sospechosa: &gt;2 cm, dura, no dolorosa, &gt;4–6 semanas, supraclavicular, con síntomas B.</li>
<li><b>Síntomas B</b>: fiebre &gt;38 °C, diaforesis nocturna, pérdida &gt;10% del peso en 6 meses.</li>
<li>Diagnóstico: <b>biopsia escisional</b> del ganglio (la aspiración con aguja fina no basta: se pierde la arquitectura).</li>
<li>Estadificación de <b>Lugano</b> con PET-CT: I (una región), II (≥2 del mismo lado del diafragma), III (ambos lados), IV (afección extraganglionar difusa: médula, hígado, pulmón).</li>
</ul>` },
        { h: 'Linfoma de Hodgkin', html: `
<ul>
<li>Distribución bimodal (20–30 y &gt;55 años). Adenopatía <b>cervical o mediastinal</b> que se extiende de forma <b>contigua</b>.</li>
<li>Células de <b>Reed-Sternberg</b> (CD15+, CD30+) en un fondo inflamatorio. Asociado a virus de Epstein-Barr.</li>
<li>Subtipo más común: esclerosis nodular. Datos curiosos: prurito y dolor ganglionar con el alcohol.</li>
<li>Tratamiento: <b>ABVD</b> (± radioterapia en estadios limitados); en avanzados, brentuximab vedotina + AVD. Curación &gt;80%.</li>
<li>Efectos tardíos: segundas neoplasias (mama tras radioterapia de tórax), cardiotoxicidad (antraciclina), fibrosis pulmonar (bleomicina), hipotiroidismo.</li>
</ul>` },
        { h: 'Linfomas no Hodgkin', html: `
<ul>
<li>Más frecuentes que el Hodgkin, en adultos mayores, diseminación <b>no contigua</b> y extraganglionar.</li>
<li><b>Difuso de células B grandes</b> (el más común): agresivo, masa de crecimiento rápido. Tratamiento: R-CHOP (o pola-R-CHP). Pronóstico con IPI.</li>
<li><b>Folicular</b>: indolente, <b>t(14;18) BCL2</b>. Asintomático y con baja carga: “vigilar y esperar”. Si hay síntomas: rituximab ± quimioterapia. Puede transformarse en agresivo.</li>
<li><b>Burkitt</b>: <b>t(8;14) MYC</b>, “cielo estrellado”, crecimiento rapidísimo; alto riesgo de lisis tumoral.</li>
<li><b>Manto</b>: t(11;14) ciclina D1. <b>MALT gástrico</b>: asociado a H. pylori → la erradicación puede curarlo.</li>
<li>Infecciones asociadas: VIH, VEB, VHC (linfoma esplénico de zona marginal), HTLV-1 (linfoma T del adulto).</li>
</ul>` },
        { h: 'Leucemia linfocítica crónica', html: `
<ul>
<li>La leucemia más común en adultos de países occidentales; mediana ~70 años.</li>
<li>Diagnóstico: <b>≥5,000 linfocitos B monoclonales/µL</b>; frotis con <b>células en mancha</b> (smudge); citometría: CD5+, CD19+, CD23+, CD20 débil.</li>
<li>Estadios de Rai (0–IV) o Binet (A–C); IV/C = anemia o trombocitopenia por infiltración medular.</li>
<li><b>Se trata solo si hay enfermedad activa</b>: síntomas B, citopenias progresivas, adenopatías o bazo masivos o que crecen, duplicación de linfocitos en &lt;6 meses.</li>
<li>Tratamiento: inhibidores de BTK (ibrutinib, acalabrutinib, zanubrutinib) o venetoclax + obinutuzumab. Con del(17p) o TP53 mutado no se usa quimioinmunoterapia.</li>
<li>Complicaciones: <b>AHAI caliente</b>, PTI, hipogammaglobulinemia (infecciones), transformación de Richter a linfoma agresivo.</li>
</ul>` },
        { h: 'Fisiopatología en 1 minuto', html: `
<ul>
<li>Casi todos los linfomas vienen de <b>linfocitos B del centro germinal</b>, donde el ADN se corta y recombina (cambio de clase, hipermutación). Un error lleva un oncogén junto al locus de la cadena pesada de inmunoglobulina (14q32): <b>BCL2</b> (folicular, impide la apoptosis), <b>MYC</b> (Burkitt, proliferación) o <b>ciclina D1</b> (manto, ciclo celular).</li>
<li><b>Estímulo antigénico crónico</b>: H. pylori (MALT gástrico), VHC (zona marginal esplénica), Sjögren y Hashimoto (MALT de parótida y tiroides), celiaquía (linfoma T asociado a enteropatía). <b>Virus</b>: VEB, HTLV-1, VHH-8. <b>Inmunosupresión</b>: VIH, trasplante.</li>
<li><b>Hodgkin</b>: la célula de Reed-Sternberg es un linfocito B que perdió su programa B y sobrevive por NF-κB; es menos del 1–2% del tumor. Sus citocinas reclutan el fondo inflamatorio y causan síntomas B; la eosinofilia y el prurito vienen de IL-5 y otras citocinas.</li>
<li><b>Subtipos de Hodgkin clásico</b>: esclerosis nodular (el más común; jóvenes, mediastino), celularidad mixta (VEB, VIH), rico en linfocitos (mejor pronóstico) y depleción linfocitaria (VIH, peor). Aparte: <b>predominio linfocítico nodular</b>, con células “palomita” CD20+, CD15− y CD30−.</li>
<li><b>LLC</b>: linfocitos B maduros (CD5+, CD23+) que no mueren; ocupan la médula (citopenias) y alteran la inmunidad: hipogammaglobulinemia y autoinmunidad.</li>
</ul>` },
        { h: 'Fármacos clave', html: `
<div class="tablewrap"><table class="mini">
<tr><th>Fármaco</th><th>Mecanismo</th><th>Efecto adverso clave</th><th>Ojo con</th></tr>
<tr><td>Rituximab / obinutuzumab</td><td>Anti-CD20</td><td>Reacción a la infusión; reactivación de hepatitis B; LMP</td><td>Tamizar HBsAg y anti-HBc antes; profilaxis con entecavir o tenofovir si son positivos</td></tr>
<tr><td>Doxorrubicina (la A de ABVD y la H de CHOP)</td><td>Antraciclina</td><td>Cardiotoxicidad acumulativa</td><td>FEVI basal</td></tr>
<tr><td>Bleomicina</td><td>Rompe el ADN por radicales libres</td><td>Neumonitis y fibrosis pulmonar</td><td>Edad avanzada, tabaco, oxígeno a FiO₂ alta; se omite si baja la DLCO o el PET-2 es negativo</td></tr>
<tr><td>Vincristina</td><td>Inhibe los microtúbulos</td><td>Neuropatía periférica, estreñimiento</td><td>Nunca intratecal (mortal)</td></tr>
<tr><td>Ciclofosfamida</td><td>Alquilante</td><td>Cistitis hemorrágica, infertilidad</td><td>Hidratación; mesna en dosis altas</td></tr>
<tr><td>Brentuximab vedotina</td><td>Anti-CD30 con toxina antimicrotúbulo</td><td>Neuropatía periférica</td><td>No con bleomicina (toxicidad pulmonar)</td></tr>
<tr><td>Ibrutinib / acalabrutinib / zanubrutinib</td><td>Inhibidores de BTK</td><td>Fibrilación auricular, sangrado, HTA</td><td>Anticoagulantes y antiagregantes; menos FA con los de segunda generación</td></tr>
<tr><td>Venetoclax</td><td>Inhibidor de BCL-2</td><td>Lisis tumoral, neutropenia</td><td>Escalar la dosis semana a semana con hidratación y alopurinol</td></tr>
</table></div>` },
        { h: 'Cómo lo preguntan en el examen', html: `
<ul>
<li>Mujer joven con ganglio cervical, masa mediastinal y prurito → <b>Hodgkin, esclerosis nodular</b>: biopsia escisional.</li>
<li>Adulto con masa que crece en semanas, LDH alta y síntomas B → <b>LDCBG</b>: R-CHOP (o pola-R-CHP).</li>
<li>Adenopatías generalizadas indoloras desde hace años, asintomático → <b>folicular</b>: vigilar si la carga es baja.</li>
<li>Niño africano con masa en la mandíbula, o adolescente con masa ileocecal y “cielo estrellado” → <b>Burkitt</b>: prevenir lisis tumoral.</li>
<li>Adulto mayor con linfocitosis, células en mancha y CD5+ CD23+ → <b>LLC</b>; si es CD5+ CD23− con ciclina D1 y pólipos intestinales → <b>manto</b>.</li>
<li>Paciente con LLC y un ganglio que crece rápido con LDH alta → <b>Richter</b>: biopsia guiada por PET.</li>
<li>Va a recibir rituximab → pide <b>HBsAg y anti-HBc</b> antes.</li>
</ul>` }
      ],
      mnemo: { t: 'Translocaciones: “14 con 18 Folicular, 8 con 14 Burkitt, 11 con 14 Manto”', d: 'Folicular = BCL2 (bloquea la muerte celular, crece lento). Burkitt = MYC (acelera, crece rapidísimo). Manto = ciclina D1.' },
      pearl: 'LLC en estadio temprano sin síntomas: no se trata. Tratar antes no mejora la supervivencia.',
      trap: 'No diagnostiques linfoma con aspiración con aguja fina: necesitas la arquitectura del ganglio (biopsia escisional o con aguja gruesa).',
      guide: [
        'LDCBG: pola-R-CHP (POLARIX 2022) mejoró la supervivencia libre de progresión frente a R-CHOP en riesgo intermedio-alto; R-CHOP sigue siendo el estándar en muchos centros y libros.',
        'Hodgkin avanzado: brentuximab + AVD (ECHELON-1) o nivolumab + AVD (S1826, 2024) son opciones nuevas; ABVD sigue en el examen como esquema clásico.',
        'Predominio linfocítico nodular: la OMS 2022 lo mantiene como linfoma de Hodgkin; la ICC 2022 lo renombra “linfoma B nodular de predominio linfocítico”. Para el examen: células “palomita” CD20+, CD15− y CD30−, curso indolente.'
      ],
      refs: [
        'Cheson BD, et al. Lugano classification. J Clin Oncol 2014.',
        'Hallek M, et al. iwCLL guidelines for diagnosis, indications for treatment, response assessment, and supportive management of CLL. Blood 2018.',
        'Alaggio R, et al. WHO Classification of Haematolymphoid Tumours, 5th ed: Lymphoid Neoplasms. Leukemia 2022.'
      ]
    }
  },

  compares: {
    'lh-lnh': {
      topic: 'linfo', a: 'Hodgkin', b: 'No Hodgkin',
      rows: [
        ['Célula', 'Reed-Sternberg (CD15+, CD30+)', 'B en ~85–90%, o T; sin Reed-Sternberg'],
        ['Diseminación', 'Contigua, ganglio a ganglio', 'No contigua: salta'],
        ['Extraganglionar', 'Rara', 'Frecuente (estómago, piel, SNC, médula)'],
        ['Edad', 'Bimodal: 20–30 y >55 años', 'Adultos mayores (Burkitt: niños y jóvenes)'],
        ['Síntomas B', 'Frecuentes; prurito y dolor con alcohol', 'Según el subtipo; más en los agresivos'],
        ['Tratamiento clásico', 'ABVD ± radioterapia', 'LDCBG: R-CHOP; folicular: vigilar o rituximab'],
        ['Pronóstico', 'Curación >80%', 'Variable: indolente (incurable, lento) o agresivo (curable)']
      ]
    }
  },

  anims: {
    linfo: {
      title: 'Del ganglio sano a la LLC',
      steps: [
        { cap: '<b>Ganglio normal.</b> La linfa entra por los vasos aferentes. Los folículos de la corteza tienen linfocitos B (con su centro germinal), la paracorteza tiene linfocitos T y la linfa sale por el hilio.',
          labels: [[60, 13, 'Folículo B'], [76, 72, 'Zona T'], [144, 50, 'Hilio'], [22, 112, 'Aferente']] },
        { cap: '<b>Linfoma de Hodgkin.</b> Pocas células de Reed-Sternberg (dos núcleos en “ojos de búho”, CD15+ y CD30+) liberan citocinas que atraen un fondo de linfocitos y eosinófilos, con bandas de fibrosis.',
          labels: [[52, 38, 'Reed-Sternberg'], [118, 58, 'CD15+ CD30+'], [96, 24, 'Eosinófilos'], [40, 104, 'Fibrosis']] },
        { cap: '<b>Cómo se disemina.</b> El Hodgkin avanza de forma contigua, de un grupo de ganglios al vecino. El no Hodgkin salta a ganglios lejanos y sale del ganglio: estómago, piel, médula ósea.',
          labels: [[40, 114, 'LH: contigua'], [120, 114, 'LNH: salta']] },
        { cap: '<b>Estadios de Lugano.</b> I: una región. II: dos o más del mismo lado del diafragma. III: ganglios a ambos lados (o arriba más bazo). IV: afección extraganglionar difusa, como hígado o médula.',
          labels: [[20, 100, 'I'], [60, 100, 'II'], [100, 100, 'III'], [140, 100, 'IV'], [80, 41, 'Diafragma']] },
        { cap: '<b>Leucemia linfocítica crónica.</b> La sangre se llena de linfocitos B pequeños y maduros (5,000/µL o más, CD5+ y CD23+). Son frágiles: al hacer el frotis se aplastan y quedan las células en mancha.',
          labels: [[30, 72, 'CD5+ CD23+'], [130, 20, 'Linfocitos/µL'], [100, 112, 'Células en mancha']] }
      ]
    }
  },

  cards: [
    ['Síntomas B', 'Fiebre >38 °C, diaforesis nocturna, pérdida >10% del peso en 6 meses'],
    ['Diagnóstico de linfoma', 'Biopsia escisional del ganglio'],
    ['Célula de Reed-Sternberg', 'CD15+, CD30+; linfoma de Hodgkin'],
    ['Hodgkin: diseminación', 'Contigua, ganglio a ganglio'],
    ['Esquema clásico de Hodgkin', 'ABVD'],
    ['Linfoma no Hodgkin más común', 'Difuso de células B grandes (R-CHOP)'],
    ['t(14;18) BCL2', 'Linfoma folicular'],
    ['t(8;14) MYC', 'Linfoma de Burkitt'],
    ['t(11;14) ciclina D1', 'Linfoma del manto'],
    ['MALT gástrico', 'Erradicar H. pylori'],
    ['LLC: inmunofenotipo', 'CD5+, CD19+, CD23+, CD20 débil'],
    ['LLC: frotis', 'Células en mancha (smudge)'],
    ['LLC: cuándo tratar', 'Solo con enfermedad activa (síntomas B, citopenias, masas progresivas)'],
    ['Complicación autoinmune de la LLC', 'AHAI caliente y PTI'],
    ['Lugano: ¿el bazo cuenta como ganglio o extraganglionar?', 'Como tejido ganglionar: ganglios arriba del diafragma + bazo = estadio III'],
    ['IPI del LDCBG (APLES)', 'Edad >60, ECOG ≥2, LDH alta, >1 sitio extraganglionar, estadio III–IV'],
    ['Linfocitosis B monoclonal', '<5,000 linfocitos B clonales/µL sin adenopatías, visceromegalias ni citopenias: no es LLC; vigilar'],
    ['Hodgkin con predominio linfocítico nodular', 'Células “palomita” CD20+, CD15− y CD30−; curso indolente'],
    ['Antes de dar rituximab', 'HBsAg y anti-HBc: riesgo de reactivación de hepatitis B (profilaxis con entecavir o tenofovir si son positivos)']
  ],

  questions: [
    q({ id: 'linfo-01', dif: 1,
      stem: 'Mujer de 24 años con adenopatía cervical indolora de 6 semanas, masa mediastinal en la Rx y prurito. ¿Cómo confirmas el diagnóstico?',
      opts: ['Aspiración con aguja fina', 'Biopsia escisional del ganglio', 'Solo PET-CT', 'Antibióticos y revalorar', 'Biopsia de médula ósea'],
      ans: 1,
      exp: 'Sospecha de linfoma de Hodgkin: se necesita la arquitectura ganglionar y las células de Reed-Sternberg en su contexto. La biopsia escisional es el estándar.',
      why: ['No da la arquitectura.', '', 'Estadifica pero no diagnostica.', 'Retrasa el diagnóstico.', 'No es el primer paso.'],
      ref: 'Lugano 2014' }),

    q({ id: 'linfo-02', dif: 1,
      stem: 'Biopsia ganglionar con células grandes binucleadas “en ojos de búho”, CD15+ y CD30+, en un fondo de linfocitos y eosinófilos. ¿Diagnóstico?',
      opts: ['Linfoma folicular', 'Linfoma de Hodgkin', 'Linfoma de Burkitt', 'LLC', 'Linfoma del manto'],
      ans: 1,
      exp: 'Las células de Reed-Sternberg (CD15+, CD30+) en un fondo inflamatorio son el sello del linfoma de Hodgkin clásico.',
      why: ['Folículos con células pequeñas, BCL2.', '', 'Cielo estrellado, MYC.', 'Linfocitos pequeños maduros.', 'Ciclina D1.'],
      ref: 'OMS 2022' }),

    q({ id: 'linfo-03', dif: 2,
      stem: 'Hombre de 74 años con linfocitos de 22,000/µL, células en mancha, CD5+ CD23+. Sin adenopatías grandes, sin síntomas, Hb y plaquetas normales. ¿Manejo?',
      opts: ['Ibrutinib de inmediato', 'Vigilancia (“vigilar y esperar”)', 'R-CHOP', 'Trasplante alogénico', 'Esplenectomía'],
      ans: 1,
      exp: 'LLC en estadio temprano sin criterios de actividad: observación cada 3–12 meses. El tratamiento temprano no mejora la supervivencia.',
      why: ['No hay indicación.', '', 'Es para linfoma agresivo.', 'No está indicado.', 'No está indicada.'],
      ref: 'iwCLL 2018' }),

    q({ id: 'linfo-04', dif: 2,
      stem: 'Paciente con LLC presenta Hb 6.8, reticulocitos altos, esferocitos y Coombs directo positivo. ¿Complicación?',
      opts: ['Infiltración medular', 'Anemia hemolítica autoinmune caliente', 'Transformación de Richter', 'Déficit de B12', 'Hiperesplenismo'],
      ans: 1,
      exp: 'La LLC se asocia a autoinmunidad: AHAI caliente (la más común) y PTI. Se trata con esteroides y, si es necesario, tratamiento de la LLC.',
      why: ['Daría reticulocitos bajos y Coombs negativo.', '', 'Sería crecimiento ganglionar rápido con LDH alta.', 'No explica Coombs positivo.', 'No da Coombs positivo.'],
      ref: 'iwCLL 2018' }),

    q({ id: 'linfo-05', dif: 2,
      stem: 'Adolescente con masa abdominal de crecimiento rápido. Biopsia: patrón en “cielo estrellado” y t(8;14). ¿Qué complicación debes prevenir al iniciar quimioterapia?',
      opts: ['Hipercalcemia', 'Síndrome de lisis tumoral', 'CID', 'Hiperviscosidad', 'Insuficiencia suprarrenal'],
      ans: 1,
      exp: 'El Burkitt tiene altísima tasa de proliferación: al tratarlo, la destrucción masiva causa lisis tumoral. Se previene con hidratación y rasburicasa.',
      why: ['No es la complicación típica.', '', 'Típica de LPA.', 'Típica de Waldenström.', 'No se asocia.'],
      ref: 'Harrison 21e' }),

    q({ id: 'linfo-06', dif: 2,
      stem: 'Hombre de 58 años con adenopatías generalizadas indoloras de lento crecimiento desde hace 2 años, asintomático. Biopsia: linfoma folicular, t(14;18). Baja carga tumoral. ¿Manejo?',
      opts: ['R-CHOP de inmediato', 'Vigilancia activa', 'ABVD', 'Radioterapia corporal total', 'Trasplante'],
      ans: 1,
      exp: 'El linfoma folicular avanzado con baja carga y sin síntomas se vigila: el tratamiento temprano no mejora la supervivencia global.',
      why: ['No hay indicación aún.', '', 'Es para Hodgkin.', 'No está indicada.', 'No está indicado.'],
      ref: 'NCCN B-cell lymphomas' }),

    q({ id: 'linfo-07', dif: 2,
      stem: 'Paciente con dispepsia; biopsia gástrica: linfoma MALT de bajo grado localizado y H. pylori positivo. ¿Tratamiento inicial?',
      opts: ['Gastrectomía total', 'Erradicación de H. pylori', 'R-CHOP', 'Radioterapia', 'IBP solo'],
      ans: 1,
      exp: 'El MALT gástrico depende del estímulo antigénico de H. pylori: la erradicación logra remisión en la mayoría de los casos localizados.',
      why: ['Excesivo.', '', 'No como primera opción.', 'Se reserva si no responde.', 'No elimina la bacteria.'],
      ref: 'NCCN · Maastricht VI' }),

    q({ id: 'linfo-08', dif: 1,
      stem: '¿Cuál es el linfoma no Hodgkin más común en adultos?',
      opts: ['Folicular', 'Difuso de células B grandes', 'Burkitt', 'Manto', 'MALT'],
      ans: 1,
      exp: 'El linfoma difuso de células B grandes representa ~30% de los LNH: agresivo pero curable con R-CHOP en un 60–70%.',
      why: ['Es el segundo.', '', 'Es raro en adultos.', 'Es poco común.', 'Es poco común.'],
      ref: 'OMS 2022' }),

    q({ id: 'linfo-09', dif: 2,
      stem: 'Paciente con linfoma de Hodgkin con adenopatías cervicales y axilares izquierdas, y mediastinales. Nada debajo del diafragma, sin afección extraganglionar. ¿Estadio de Lugano?',
      opts: ['I', 'II', 'III', 'IV', 'No aplica'],
      ans: 1,
      exp: 'Estadio II: dos o más regiones ganglionares del mismo lado del diafragma. III sería a ambos lados; IV, afección extraganglionar difusa.',
      why: ['Sería una sola región.', '', 'Requiere ambos lados del diafragma.', 'Requiere afección extraganglionar difusa.', 'Sí aplica.'],
      ref: 'Lugano 2014' }),

    q({ id: 'linfo-10', dif: 3,
      stem: 'Sobreviviente de linfoma de Hodgkin tratado a los 20 años con ABVD y radioterapia en el mediastino. Ahora tiene 38 años. ¿Qué tamizaje está especialmente indicado?',
      opts: ['Colonoscopia anual', 'Mastografía y RM de mama tempranas', 'PSA', 'Endoscopia anual', 'Ninguno especial'],
      ans: 1,
      exp: 'La radiación torácica en la juventud aumenta mucho el riesgo de cáncer de mama: tamizaje anual con RM y mastografía a partir de los 25 años u 8 años después de la radiación (lo que ocurra después). También vigilar tiroides y función cardiaca.',
      why: ['No es el riesgo principal.', '', 'No tiene relación.', 'No tiene relación.', 'Hay riesgos tardíos específicos.'],
      ref: 'COG Long-Term Follow-Up Guidelines' }),

    q({ id: 'linfo-11', dif: 2,
      stem: 'Hombre de 67 años con adenopatías generalizadas, esplenomegalia y múltiples pólipos en el colon. Linfocitos 14,000/µL. Citometría: CD5+, CD19+, CD23−; inmunohistoquímica con ciclina D1 positiva. ¿Diagnóstico?',
      opts: ['Leucemia linfocítica crónica', 'Linfoma del manto', 'Linfoma folicular', 'Linfoma MALT', 'Linfoma de Burkitt'],
      ans: 1,
      exp: 'El manto, como la LLC, es CD5+, pero es CD23− y sobreexpresa ciclina D1 por la t(11;14). Afecta a hombres mayores, con frecuencia el tubo digestivo (poliposis linfomatosa) y la médula. Es más agresivo que la LLC.',
      why: ['La LLC es CD5+ pero CD23+ y ciclina D1 negativa.', '', 'Es CD5− y CD10+, con BCL2 por t(14;18).', 'Es CD5− y suele ser localizado (estómago).', 'Es CD10+ con MYC y crecimiento rapidísimo.'],
      ref: 'OMS 2022' }),

    q({ id: 'linfo-12', dif: 2,
      stem: 'Mujer de 61 años con linfoma difuso de células B grandes que iniciará R-CHOP. Serología: HBsAg negativo, anti-HBc positivo, ADN del VHB indetectable. ¿Qué haces antes del primer ciclo?',
      opts: ['Nada: la hepatitis B está resuelta', 'Profilaxis antiviral con entecavir o tenofovir', 'Vacuna contra hepatitis B y continuar', 'Cambiar R-CHOP por CHOP sin rituximab sin más medidas', 'Lamivudina solo si sube la ALT'],
      ans: 1,
      exp: 'Los anti-CD20 (rituximab) tienen alto riesgo de reactivar la hepatitis B, incluso con HBsAg negativo y anti-HBc positivo; la reactivación puede causar hepatitis fulminante. Se da profilaxis con entecavir o tenofovir desde antes y hasta 12–18 meses después de terminar.',
      why: ['El virus persiste latente en el hígado; con rituximab el riesgo de reactivación es alto.', '', 'La vacuna no protege a quien ya tiene infección pasada.', 'Quitar el rituximab empeora el pronóstico del linfoma.', 'Esperar a la elevación de ALT es tardío y la lamivudina genera resistencia.'],
      ref: 'AASLD 2018 · ASCO VHB y quimioterapia' }),

    q({ id: 'linfo-13', dif: 3,
      stem: 'Hombre de 68 años con LLC: Hb bajó de 12 a 9.4 g/dL en 4 meses, plaquetas 85,000 y adenopatías que crecen. FISH con del(17p). ¿Tratamiento?',
      opts: ['Vigilar y esperar', 'Fludarabina, ciclofosfamida y rituximab (FCR)', 'Inhibidor de BTK de forma continua (p. ej., acalabrutinib)', 'Clorambucilo', 'R-CHOP'],
      ans: 2,
      exp: 'Tiene enfermedad activa (citopenias progresivas y adenopatías en crecimiento). Con del(17p) o TP53 mutado la quimioinmunoterapia funciona mal; se usa un inhibidor de BTK continuo o venetoclax con obinutuzumab.',
      why: ['Las citopenias progresivas son indicación de tratamiento.', 'La del(17p) predice mala respuesta a la quimioinmunoterapia.', '', 'Es quimioterapia de poca eficacia y no supera la del(17p).', 'Es para linfoma agresivo, no para LLC.'],
      ref: 'iwCLL 2018 · ESMO LLC 2024' }),

    q({ id: 'linfo-14', dif: 2,
      stem: 'Hombre de 70 años con LLC estable desde hace 6 años. En 3 semanas le creció un ganglio cervical a 6 cm; tiene fiebre, sudor nocturno y LDH 3 veces el normal. ¿Siguiente paso?',
      opts: ['Antibiótico y revalorar', 'Biopsia del ganglio, idealmente dirigida por PET-CT', 'Aumentar la dosis de su tratamiento', 'Prednisona', 'Aspiración con aguja fina'],
      ans: 1,
      exp: 'Sospecha de transformación de Richter (casi siempre a LDCBG). El PET-CT señala la lesión más ávida y se biopsia; el tratamiento es el del linfoma agresivo y el pronóstico es malo.',
      why: ['Retrasa un diagnóstico de linfoma agresivo.', '', 'Si es Richter, el tratamiento de la LLC no lo controla.', 'Enmascara el cuadro sin diagnosticar.', 'No da arquitectura para diagnosticar linfoma.'],
      ref: 'iwCLL 2018' }),

    q({ id: 'linfo-15', dif: 2,
      stem: 'Mujer de 29 años con Hodgkin en su cuarto ciclo de ABVD. Presenta tos seca, disnea de esfuerzo y estertores basales; la DLCO bajó 30%. Hemocultivos negativos. ¿Fármaco responsable y conducta?',
      opts: ['Doxorrubicina; cambiar a epirrubicina', 'Bleomicina; suspenderla y continuar con AVD', 'Vinblastina; reducir la dosis', 'Dacarbazina; dar antieméticos', 'Ninguno; es neumonía y requiere antibiótico'],
      ans: 1,
      exp: 'La bleomicina causa neumonitis que puede progresar a fibrosis pulmonar; la DLCO baja es un signo temprano. Se suspende y se continúa con AVD; se pueden dar esteroides. Se evita el oxígeno a FiO₂ alta innecesaria.',
      why: ['La doxorrubicina es cardiotóxica, no neumotóxica.', '', 'La vinblastina da mielosupresión y neuropatía.', 'La dacarbazina da náusea y vómito, no daño pulmonar.', 'Sin fiebre ni cultivos positivos, el cuadro y la DLCO apuntan a toxicidad.'],
      ref: 'NCCN Hodgkin · Harrison 21e' })
  ]
};
