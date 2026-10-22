// Tema 24 · Síndromes linfoproliferativos (Hematología, semana 6)
const T = { topic: 'linfo', subj: 'hemato' };
const q = (o) => ({ ...T, ...o });

export default {
  lessons: {
    linfo: {
      hook: 'Adenopatía que no se va: biopsia escisional. Distingue Hodgkin de no Hodgkin, reconoce los linfomas por su translocación y sabe cuándo tratar (y cuándo no) la LLC.',
      nn: [['hodgkins-lymphoma', 'Hodgkin Lymphoma'], ['non-hodgkins-lymphoma', 'Non-Hodgkin Lymphoma'], ['chronic-lymphocytic-leukemia', 'Chronic Lymphocytic Leukemia']],
      yt: 'Hodgkin non-Hodgkin lymphoma CLL',
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
</ul>` }
      ],
      mnemo: { t: 'Translocaciones: “14 con 18 Folicular, 8 con 14 Burkitt, 11 con 14 Manto”', d: 'Folicular = BCL2 (bloquea la muerte celular, crece lento). Burkitt = MYC (acelera, crece rapidísimo). Manto = ciclina D1.' },
      pearl: 'LLC en estadio temprano sin síntomas: no se trata. Tratar antes no mejora la supervivencia.',
      trap: 'No diagnostiques linfoma con aspiración con aguja fina: necesitas la arquitectura del ganglio (biopsia escisional o con aguja gruesa).',
      guide: [
        'LDCBG: pola-R-CHP (POLARIX 2022) mejoró la supervivencia libre de progresión frente a R-CHOP en riesgo intermedio-alto; R-CHOP sigue siendo el estándar en muchos centros y libros.',
        'Hodgkin avanzado: brentuximab + AVD (ECHELON-1) o nivolumab + AVD (S1826, 2024) son opciones nuevas; ABVD sigue en el examen como esquema clásico.'
      ],
      refs: [
        'Cheson BD, et al. Lugano classification. J Clin Oncol 2014.',
        'Hallek M, et al. iwCLL guidelines for diagnosis, indications for treatment, response assessment, and supportive management of CLL. Blood 2018.',
        'Alaggio R, et al. WHO Classification of Haematolymphoid Tumours, 5th ed: Lymphoid Neoplasms. Leukemia 2022.'
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
    ['Complicación autoinmune de la LLC', 'AHAI caliente y PTI']
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
      exp: 'La radiación torácica en la juventud aumenta mucho el riesgo de cáncer de mama: tamizaje anual con RM y mastografía desde los 25–30 años o 8 años tras la radiación. También vigilar tiroides y función cardiaca.',
      why: ['No es el riesgo principal.', '', 'No tiene relación.', 'No tiene relación.', 'Hay riesgos tardíos específicos.'],
      ref: 'COG Long-Term Follow-Up Guidelines' })
  ]
};
