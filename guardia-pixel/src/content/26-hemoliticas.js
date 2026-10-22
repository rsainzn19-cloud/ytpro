// Tema 17 · Anemias hemolíticas (Hematología, semana 3)
const T = { topic: 'hemoliticas', subj: 'hemato' };
const q = (o) => ({ ...T, ...o });

export default {
  lessons: {
    hemoliticas: {
      hook: 'Reticulocitos altos, LDH alta, haptoglobina baja: hay hemólisis. Ahora decide dónde se rompe el eritrocito (vaso o bazo), si el Coombs es positivo y qué te dice el frotis.',
      compare: ['intra-extra'],
      nn: [['normocytic-anemia', 'Normocytic Anemia']],
      yt: 'hemolytic anemia',
      sections: [
        { h: 'Confirma la hemólisis', html: `
<ul>
<li>Anemia normocítica con <b>reticulocitos ↑</b> (médula que responde).</li>
<li><b>LDH ↑</b>, <b>bilirrubina indirecta ↑</b>, <b>haptoglobina ↓</b> (se une a la hemoglobina libre).</li>
<li><b>Coombs directo</b> (prueba de antiglobulina directa): positivo = causa inmune.</li>
<li>El <b>frotis</b> orienta: esferocitos (esferocitosis o AHAI caliente), esquistocitos (microangiopatía), células mordidas y cuerpos de Heinz (G6PD), aglutinación (crioaglutininas), drepanocitos.</li>
</ul>` },
        { h: 'Intravascular vs extravascular', html: `
<ul>
<li><b>Intravascular</b> (se rompe en el vaso): hemoglobinuria (orina oscura), hemosiderinuria, haptoglobina indetectable. Causas: G6PD, microangiopatías (PTT, SUH, CID, válvulas mecánicas), HPN, reacción transfusional ABO, malaria.</li>
<li><b>Extravascular</b> (macrófagos del bazo e hígado): esplenomegalia, ictericia, litiasis pigmentaria. Causas: esferocitosis hereditaria, AHAI caliente, drepanocitosis, talasemias.</li>
</ul>` },
        { h: 'Hereditarias', html: `
<ul>
<li><b>Esferocitosis hereditaria</b>: defecto de espectrina o anquirina (autosómica dominante). Esferocitos, <b>CHCM ↑</b>, Coombs negativo, esplenomegalia, cálculos biliares. Prueba de unión a eosina-5-maleimida (EMA) por citometría o fragilidad osmótica. Crisis aplásica por parvovirus B19. Tratamiento: ácido fólico; esplenectomía en formas graves (vacunar antes).</li>
<li><b>Déficit de G6PD</b>: ligado al X. Crisis tras <b>estrés oxidativo</b>: infecciones, habas, primaquina, dapsona, sulfas, nitrofurantoína, rasburicasa. Cuerpos de Heinz y células mordidas. Mide la enzima <b>semanas después</b> de la crisis (los reticulocitos tienen más G6PD y dan falsos normales).</li>
<li><b>Drepanocitosis</b>: HbS; crisis vasooclusivas, síndrome torácico agudo, autoesplenectomía; hidroxiurea.</li>
</ul>` },
        { h: 'Adquiridas', html: `
<ul>
<li><b>AHAI caliente</b> (IgG, 37 °C): Coombs + para IgG, esferocitos, hemólisis extravascular. Asociada a LES, LLC, linfomas, fármacos. Tratamiento: prednisona 1 mg/kg; rituximab en segunda línea.</li>
<li><b>Crioaglutininas</b> (IgM, frío): Coombs + para C3. Acrocianosis, empeora con frío. Asociada a Mycoplasma, mononucleosis, linfomas. Evitar el frío; rituximab o sutimlimab; los esteroides sirven poco.</li>
<li><b>Microangiopáticas</b>: esquistocitos + trombocitopenia (PTT, SUH, CID, HELLP, HTA maligna) o hemólisis mecánica por válvula protésica.</li>
<li><b>Hemoglobinuria paroxística nocturna (HPN)</b>: pérdida de CD55 y CD59 (GPI) por mutación de PIGA. Tríada: hemólisis intravascular, <b>trombosis en sitios raros</b> (Budd-Chiari, venas cerebrales) y citopenias. Diagnóstico por citometría de flujo. Tratamiento: inhibidores del complemento (eculizumab, ravulizumab) con vacuna antimeningocócica.</li>
</ul>` }
      ],
      mnemo: { t: 'G6PD = “Habas, Sulfas, Primaquina”', d: 'Imagina a un paciente comiendo habas con una pastilla de sulfa y otra de primaquina: tres oxidantes que rompen eritrocitos con poco glutatión.' },
      pearl: 'Esferocitos con Coombs negativo = esferocitosis hereditaria. Esferocitos con Coombs positivo = AHAI caliente.',
      trap: 'Medir G6PD durante la crisis puede dar un valor normal falso: los eritrocitos viejos (con menos enzima) ya se destruyeron.',
      guide: [
        'Prueba para esferocitosis: guías recientes prefieren la prueba EMA por citometría sobre la fragilidad osmótica; muchos libros todavía mencionan la fragilidad osmótica como prueba clásica.'
      ],
      refs: [
        'Barcellini W, Fattizzo B. Autoimmune hemolytic anemias. N Engl J Med 2023 (revisión).',
        'Hill A, et al. Paroxysmal nocturnal haemoglobinuria. Nat Rev Dis Primers 2017.',
        'Harrison. Principios de Medicina Interna, 21e. Cap. Anemias hemolíticas.'
      ]
    }
  },

  compares: {
    'intra-extra': {
      topic: 'hemoliticas', a: 'Intravascular', b: 'Extravascular',
      rows: [
        ['Dónde se destruye', 'Dentro del vaso', 'Bazo e hígado (macrófagos)'],
        ['Hemoglobinuria', 'Sí (orina oscura)', 'No'],
        ['Haptoglobina', 'Indetectable', 'Baja'],
        ['Esplenomegalia', 'Poco común', 'Frecuente'],
        ['Frotis típico', 'Esquistocitos, células mordidas', 'Esferocitos'],
        ['Ejemplos', 'G6PD, PTT, HPN, ABO, válvulas', 'Esferocitosis, AHAI caliente, talasemia'],
        ['Complicación crónica', 'Déficit de hierro (pérdida urinaria)', 'Litiasis pigmentaria']
      ]
    }
  },

  cards: [
    ['Laboratorio de hemólisis', 'Reticulocitos ↑, LDH ↑, bilirrubina indirecta ↑, haptoglobina ↓'],
    ['Esferocitos + Coombs negativo + CHCM ↑', 'Esferocitosis hereditaria'],
    ['Esferocitos + Coombs positivo (IgG)', 'AHAI caliente'],
    ['Coombs positivo para C3 + acrocianosis', 'Crioaglutininas (IgM)'],
    ['Células mordidas y cuerpos de Heinz', 'Déficit de G6PD'],
    ['Fármacos que precipitan crisis en G6PD', 'Primaquina, dapsona, sulfas, nitrofurantoína, rasburicasa'],
    ['HPN: tríada', 'Hemólisis intravascular, trombosis atípicas, citopenias'],
    ['HPN: diagnóstico', 'Citometría de flujo: ausencia de CD55/CD59'],
    ['Crisis aplásica en esferocitosis', 'Parvovirus B19'],
    ['AHAI caliente: primera línea', 'Prednisona 1 mg/kg/día'],
    ['Hemólisis intravascular: hallazgo urinario', 'Hemoglobinuria y hemosiderinuria']
  ],

  questions: [
    q({ id: 'hemoliticas-01', dif: 1,
      stem: 'Hombre de 22 años con ictericia y orina oscura dos días después de recibir nitrofurantoína. Frotis con células mordidas. Coombs negativo. ¿Diagnóstico más probable?',
      opts: ['Esferocitosis hereditaria', 'Déficit de G6PD', 'AHAI caliente', 'PTT', 'Drepanocitosis'],
      ans: 1,
      exp: 'Hemólisis intravascular aguda tras un fármaco oxidante en un hombre, con células mordidas (los macrófagos retiran los cuerpos de Heinz): déficit de G6PD.',
      why: ['Daría esferocitos y es crónica.', '', 'Coombs sería positivo.', 'Habría esquistocitos y plaquetas bajas.', 'Habría drepanocitos.'],
      ref: 'Harrison 21e' }),

    q({ id: 'hemoliticas-02', dif: 1,
      stem: 'Joven de 18 años con anemia leve, esplenomegalia, cálculos biliares y antecedente familiar similar. Esferocitos, CHCM 37, Coombs negativo. ¿Diagnóstico?',
      opts: ['AHAI caliente', 'Esferocitosis hereditaria', 'Talasemia menor', 'Déficit de G6PD', 'HPN'],
      ans: 1,
      exp: 'Esferocitos con Coombs negativo, CHCM alta, herencia y esplenomegalia: esferocitosis hereditaria (defecto de espectrina o anquirina).',
      why: ['Coombs sería positivo.', '', 'Microcítica con CHCM normal o baja.', 'Daría crisis tras oxidantes.', 'Hemólisis intravascular con trombosis.'],
      ref: 'Harrison 21e' }),

    q({ id: 'hemoliticas-03', dif: 2,
      stem: 'Mujer de 34 años con LES presenta Hb 7, reticulocitos 9%, LDH alta, esferocitos y Coombs directo positivo para IgG. ¿Tratamiento de primera línea?',
      opts: ['Esplenectomía', 'Prednisona 1 mg/kg/día', 'Recambio plasmático', 'Evitar el frío', 'Eculizumab'],
      ans: 1,
      exp: 'AHAI caliente (IgG) secundaria a LES: glucocorticoides en primera línea; rituximab si no responde o recae.',
      why: ['Tercera línea.', '', 'No es eficaz en AHAI caliente.', 'Es para crioaglutininas.', 'Es para HPN.'],
      ref: 'Jäger U, et al. Blood Rev 2020' }),

    q({ id: 'hemoliticas-04', dif: 2,
      stem: 'Hombre de 28 años convaleciente de neumonía por Mycoplasma presenta anemia hemolítica con acrocianosis al salir al frío. Coombs positivo para C3. ¿Tipo de anticuerpo?',
      opts: ['IgG caliente', 'IgM fría (crioaglutinina)', 'IgA', 'IgE', 'Anticuerpo anti-ADAMTS13'],
      ans: 1,
      exp: 'Las crioaglutininas son IgM que se unen al eritrocito en el frío y fijan complemento (C3). Asociadas a Mycoplasma, mononucleosis y linfomas.',
      why: ['Daría Coombs IgG y no empeora con frío.', '', 'No es la causa típica.', 'No causa hemólisis.', 'Causa PTT.'],
      ref: 'Harrison 21e' }),

    q({ id: 'hemoliticas-05', dif: 3,
      stem: 'Mujer de 32 años con anemia hemolítica Coombs negativo, orina oscura por las mañanas, pancitopenia leve y trombosis de venas hepáticas (Budd-Chiari). ¿Estudio diagnóstico?',
      opts: ['Electroforesis de hemoglobina', 'Citometría de flujo para CD55/CD59', 'Fragilidad osmótica', 'ADAMTS13', 'Biopsia hepática'],
      ans: 1,
      exp: 'Hemólisis intravascular + trombosis en sitio atípico + citopenias: hemoglobinuria paroxística nocturna. La citometría muestra pérdida de proteínas ancladas a GPI (CD55, CD59).',
      why: ['Es para hemoglobinopatías.', '', 'Es para esferocitosis.', 'Es para PTT.', 'No hace el diagnóstico.'],
      ref: 'Hill A, Nat Rev Dis Primers 2017' }),

    q({ id: 'hemoliticas-06', dif: 2,
      stem: '¿Qué hallazgo apoya más una hemólisis intravascular que extravascular?',
      opts: ['Esplenomegalia', 'Hemoglobinuria con hemosiderinuria', 'Esferocitos', 'Litiasis biliar', 'Bilirrubina indirecta elevada'],
      ans: 1,
      exp: 'La hemoglobina libre filtra al riñón cuando se satura la haptoglobina: hemoglobinuria y, días después, hemosiderinuria. La esplenomegalia y los esferocitos apuntan a destrucción extravascular.',
      why: ['Es típica de la extravascular.', '', 'Típicos de extravascular.', 'Más típica de la extravascular crónica.', 'Ocurre en ambas.'],
      ref: 'Harrison 21e' }),

    q({ id: 'hemoliticas-07', dif: 2,
      stem: 'Hombre de 26 años con déficit de G6PD conocido. Tuvo una crisis hace 3 días y le midieron G6PD: sale normal. ¿Cómo interpretas?',
      opts: ['Se descarta el déficit', 'Falso normal: los reticulocitos tienen más G6PD; repetir en 2–3 meses', 'Error del laboratorio; repetir hoy', 'Es HPN', 'Es esferocitosis'],
      ans: 1,
      exp: 'Tras una crisis, los eritrocitos viejos (con menos enzima) se destruyen y quedan reticulocitos con más G6PD: la medición sale falsamente normal. Se repite cuando pasa la reticulocitosis.',
      why: ['El contexto explica el resultado.', '', 'Repetirlo pronto da el mismo error.', 'No hay datos de HPN.', 'No hay datos de esferocitosis.'],
      ref: 'Luzzatto L. Lancet 2008' }),

    q({ id: 'hemoliticas-08', dif: 1,
      stem: 'Paciente con válvula aórtica mecánica presenta anemia con esquistocitos, LDH alta y plaquetas normales. ¿Mecanismo?',
      opts: ['Autoinmune', 'Hemólisis mecánica (traumática) por la prótesis', 'Déficit de B12', 'Déficit de G6PD', 'Hiperesplenismo'],
      ans: 1,
      exp: 'El flujo turbulento a través de la prótesis (sobre todo con fuga paravalvular) fragmenta eritrocitos: hemólisis intravascular con esquistocitos.',
      why: ['Coombs sería positivo y habría esferocitos.', '', 'Sería macrocítica.', 'Daría células mordidas.', 'No da esquistocitos.'],
      ref: 'Harrison 21e' }),

    q({ id: 'hemoliticas-09', dif: 2,
      stem: 'Niño con esferocitosis hereditaria presenta de repente Hb 4.5 con reticulocitos 0.2% tras un cuadro de fiebre y exantema en mejillas. ¿Causa?',
      opts: ['Crisis hemolítica por infección bacteriana', 'Crisis aplásica por parvovirus B19', 'Secuestro esplénico', 'Déficit de hierro', 'AHAI sobreagregada'],
      ans: 1,
      exp: 'El parvovirus B19 infecta precursores eritroides y detiene la eritropoyesis por 1–2 semanas. En hemólisis crónica, eso causa anemia grave con reticulocitos muy bajos.',
      why: ['Tendría reticulocitos altos.', '', 'Tendría esplenomegalia aguda y reticulocitos altos.', 'No explica la caída brusca.', 'Tendría reticulocitos altos.'],
      ref: 'Harrison 21e' }),

    q({ id: 'hemoliticas-10', dif: 3,
      stem: 'Paciente con HPN que iniciará eculizumab. ¿Qué medida es obligatoria antes?',
      opts: ['Vacuna contra meningococo', 'Esplenectomía', 'Profilaxis con TMP-SMX', 'Anticoagulación con heparina', 'Ácido fólico en dosis altas'],
      ans: 0,
      exp: 'El eculizumab bloquea C5; sin el complejo de ataque de membrana aumenta mucho el riesgo de infección por Neisseria meningitidis. Se vacuna (ACWY y B) y a menudo se da profilaxis antibiótica.',
      why: ['', 'No está indicada.', 'Es para Pneumocystis.', 'No es requisito para iniciar.', 'Es complementario, no obligatorio para iniciar.'],
      ref: 'Ficha técnica de eculizumab' })
  ]
};
