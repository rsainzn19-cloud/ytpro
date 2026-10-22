// Tema 16 · Paciente con sangrado (Hematología, semana 4)
const T = { topic: 'sangrado', subj: 'hemato' };
const q = (o) => ({ ...T, ...o });

export default {
  lessons: {
    sangrado: {
      hook: 'Petequias o hemartrosis: primero decide si falla la plaqueta o el factor, luego lee TP, TTPa y la prueba de mezcla. Y reconoce las trombocitopenias que matan: PTT, CID y HIT.',
      compare: ['hemofilia-vwd'],
      nn: [['coagulopathy', 'Coagulopathy'], ['hemostasis-coagulation-cascade', 'Hemostasis: Coagulation Cascade']],
      yt: 'bleeding disorders hemophilia von Willebrand',
      sections: [
        { h: 'Primaria vs secundaria', html: `
<ul>
<li><b>Hemostasia primaria</b> (plaquetas, factor de von Willebrand): petequias, púrpura, sangrado de <b>mucosas</b> (epistaxis, gingivorragia, menorragia), sangrado <b>inmediato</b> tras un corte.</li>
<li><b>Hemostasia secundaria</b> (factores): <b>hemartrosis</b>, hematomas musculares profundos, sangrado <b>tardío</b> tras cirugía o extracción dental.</li>
<li>Estudios iniciales: BH con plaquetas y frotis, TP/INR, TTPa, fibrinógeno.</li>
</ul>` },
        { h: 'Cómo leer TP y TTPa', html: `
<ul>
<li><b>TP ↑, TTPa normal</b>: déficit de VII, warfarina, déficit de vitamina K o hepatopatía tempranos (el VII tiene la vida media más corta).</li>
<li><b>TP normal, TTPa ↑</b>: hemofilia A (VIII) o B (IX), déficit de XI, von Willebrand (a veces), heparina no fraccionada, anticoagulante lúpico (da <b>trombosis</b>, no sangrado), déficit de XII (no sangra).</li>
<li><b>Ambos ↑</b>: CID, hepatopatía avanzada, déficit grave de vitamina K, déficit de X, V, II o fibrinógeno.</li>
<li><b>Prueba de mezcla</b> (plasma del paciente + plasma normal 1:1): si <b>corrige</b> → falta un factor; si <b>no corrige</b> → hay un inhibidor (anticoagulante lúpico, inhibidor adquirido del VIII, heparina).</li>
</ul>` },
        { h: 'Trombocitopenias clave', html: `
<ul>
<li><b>PTI</b>: trombocitopenia aislada, frotis con plaquetas grandes y sin esquistocitos; diagnóstico de exclusión (pide VIH, VHC, H. pylori). Tratar si plaquetas &lt;30,000 o sangrado: prednisona o dexametasona ± IgIV (si sangrado grave o necesitas subirlas rápido). Segunda línea: agonistas del receptor de trombopoyetina (eltrombopag, romiplostim), rituximab, esplenectomía.</li>
<li><b>PTT (MAT)</b>: anemia hemolítica microangiopática (<b>esquistocitos</b>, LDH ↑, haptoglobina ↓) + trombocitopenia, ± fiebre, alteración neurológica y renal. ADAMTS13 &lt;10%. Es una urgencia: <b>recambio plasmático</b> + glucocorticoides ± caplacizumab, sin esperar el resultado de ADAMTS13. Evita transfundir plaquetas salvo sangrado grave.</li>
<li><b>SUH</b>: diarrea con sangre por E. coli productora de toxina Shiga (O157:H7) + lesión renal aguda; antibióticos no recomendados.</li>
<li><b>CID</b>: sepsis, trauma, LPA, complicaciones obstétricas. Plaquetas ↓, TP y TTPa ↑, fibrinógeno ↓, dímero D ↑. Trata la causa; transfunde solo si sangra (plaquetas, plasma, crioprecipitado).</li>
<li><b>HIT</b> (trombocitopenia inducida por heparina): caída &gt;50% de plaquetas 5–10 días después de iniciar heparina, con <b>trombosis</b> (no sangrado). Escala 4T + anticuerpos anti-PF4. Suspende <b>toda</b> heparina (incluidos lavados) e inicia argatrobán, fondaparinux o un ACOD. No warfarina hasta que las plaquetas se recuperen ni transfusión de plaquetas.</li>
</ul>` },
        { h: 'Hemofilia y von Willebrand', html: `
<ul>
<li><b>Hemofilia A</b> (VIII, ~80%) y <b>B</b> (IX): ligadas al X, hombres. Hemartrosis espontáneas, artropatía. TTPa ↑ con TP y plaquetas normales. Tratamiento: concentrado de factor; emicizumab como profilaxis en hemofilia A; desmopresina en hemofilia A leve.</li>
<li><b>Von Willebrand</b>: el trastorno hereditario de sangrado más común (tipo 1, autosómico dominante). Sangrado mucocutáneo y menorragia. Plaquetas normales; TTPa normal o ↑ (el FvW transporta al VIII). Pide antígeno de FvW, actividad (cofactor de ristocetina) y VIII. Tratamiento: desmopresina en el tipo 1, concentrado de FvW/VIII, ácido tranexámico.</li>
<li>Sangrado urémico: disfunción plaquetaria por uremia; desmopresina y diálisis.</li>
</ul>` },
        { h: 'Revertir anticoagulantes', html: `
<ul>
<li><b>Warfarina con sangrado grave</b>: vitamina K 10 mg IV + <b>concentrado de complejo protrombínico de 4 factores</b> (plasma fresco si no hay).</li>
<li>INR alto sin sangrado: omitir dosis; vitamina K oral si INR &gt;10.</li>
<li><b>Heparina no fraccionada</b>: protamina (revierte parcialmente la HBPM).</li>
<li><b>Dabigatrán</b>: idarucizumab. <b>Apixabán o rivaroxabán</b>: andexanet alfa o, si no hay, concentrado de complejo protrombínico.</li>
</ul>` }
      ],
      mnemo: { t: 'Plaqueta = Piel y mucosa · Factor = Fondo', d: 'Si falla la plaqueta, sangra lo superficial y al instante (petequias, encías). Si falla el factor, sangra lo profundo y tarde (articulaciones, músculo).' },
      pearl: 'Esquistocitos + plaquetas bajas = piensa en PTT y llama para recambio plasmático hoy. Sin tratamiento, la mortalidad del PTT es de ~90%.',
      trap: 'En HIT y en PTT no transfundas plaquetas de rutina: “echas leña al fuego” y aumentas la trombosis.',
      guide: [
        'Umbral para tratar PTI: la ASH 2019 sugiere tratar al adulto recién diagnosticado con plaquetas <30,000 aunque no sangre; con más de 30,000 y sin sangrado, observar. Libros previos usaban <20,000.',
        'Reversión de anti-Xa: andexanet alfa está aprobado, pero su disponibilidad es limitada en México; en la práctica se usa concentrado de complejo protrombínico.'
      ],
      refs: [
        'Neunert C, et al. ASH 2019 guidelines for immune thrombocytopenia. Blood Adv 2019.',
        'Zheng XL, et al. ISTH guidelines for the diagnosis and treatment of TTP. J Thromb Haemost 2020.',
        'Cuker A, et al. ASH 2018 guidelines for heparin-induced thrombocytopenia. Blood Adv 2018.',
        'James PD, et al. ASH/ISTH/NHF/WFH 2021 guidelines on von Willebrand disease. Blood Adv 2021.'
      ]
    }
  },

  compares: {
    'hemofilia-vwd': {
      topic: 'sangrado', a: 'Hemofilia A', b: 'Von Willebrand',
      rows: [
        ['Herencia', 'Ligada al X (hombres)', 'Autosómica dominante (tipo 1)'],
        ['Defecto', 'Factor VIII', 'Factor de von Willebrand (y VIII secundariamente)'],
        ['Tipo de sangrado', 'Profundo: hemartrosis, hematomas', 'Mucocutáneo: epistaxis, menorragia'],
        ['Plaquetas', 'Normales', 'Normales (en número)'],
        ['TTPa', '↑', 'Normal o ↑'],
        ['TP', 'Normal', 'Normal'],
        ['Prueba clave', 'Actividad del VIII', 'Antígeno y actividad del FvW (ristocetina)'],
        ['Tratamiento', 'Factor VIII, emicizumab; desmopresina si es leve', 'Desmopresina (tipo 1), concentrado de FvW/VIII, tranexámico']
      ]
    }
  },

  cards: [
    ['Petequias y sangrado de mucosas', 'Defecto de hemostasia primaria (plaquetas o FvW)'],
    ['Hemartrosis', 'Defecto de factores: piensa en hemofilia'],
    ['TP ↑ aislado', 'Déficit de VII, warfarina, vitamina K o hepatopatía temprana'],
    ['TTPa ↑ aislado que no corrige con mezcla', 'Inhibidor: anticoagulante lúpico, inhibidor adquirido del VIII o heparina'],
    ['Péntada clásica del PTT', 'Anemia microangiopática, trombocitopenia, fiebre, alteración neurológica, falla renal (rara vez completa)'],
    ['Tratamiento urgente del PTT', 'Recambio plasmático + glucocorticoides ± caplacizumab'],
    ['CID: laboratorios', 'Plaquetas ↓, TP/TTPa ↑, fibrinógeno ↓, dímero D ↑, esquistocitos'],
    ['HIT: momento típico', '5–10 días después de iniciar heparina; caída >50% de plaquetas y trombosis'],
    ['HIT: tratamiento', 'Suspender toda heparina; argatrobán, fondaparinux o ACOD'],
    ['Trastorno hereditario de sangrado más común', 'Enfermedad de von Willebrand'],
    ['Warfarina + sangrado grave', 'Vitamina K IV + concentrado de complejo protrombínico de 4 factores'],
    ['Antídoto de dabigatrán', 'Idarucizumab'],
    ['PTI: cuándo tratar (ASH 2019)', 'Plaquetas <30,000 o sangrado']
  ],

  questions: [
    q({ id: 'sangrado-01', dif: 1,
      stem: 'Mujer de 24 años con menorragia desde la menarca y epistaxis frecuentes. Su madre tiene lo mismo. Plaquetas 260,000, TP normal, TTPa 39 s (límite alto). ¿Diagnóstico más probable?',
      opts: ['Hemofilia A', 'Enfermedad de von Willebrand', 'PTI', 'Déficit de vitamina K', 'Anticoagulante lúpico'],
      ans: 1,
      exp: 'Sangrado mucocutáneo + herencia autosómica dominante + plaquetas normales: enfermedad de von Willebrand tipo 1. El TTPa puede salir normal o algo prolongado porque el FvW protege al VIII.',
      why: ['Es ligada al X y da hemartrosis.', '', 'Las plaquetas son normales.', 'Prolongaría el TP.', 'Da trombosis, no sangrado.'],
      ref: 'ASH/ISTH 2021 vWD' }),

    q({ id: 'sangrado-02', dif: 1,
      stem: 'Niño de 8 años con hemartrosis de rodilla tras una caída menor. Un tío materno tenía lo mismo. Plaquetas normales, TP normal, TTPa prolongado que corrige con la prueba de mezcla. ¿Qué déficit es más probable?',
      opts: ['Factor VII', 'Factor VIII', 'Factor XII', 'Fibrinógeno', 'Factor XIII'],
      ans: 1,
      exp: 'Hemartrosis + herencia por línea materna (ligada al X) + TTPa ↑ que corrige: hemofilia. La A (VIII) es ~4 veces más frecuente que la B (IX).',
      why: ['Prolongaría el TP.', '', 'Prolonga el TTPa pero no da sangrado.', 'Prolongaría TP y TTPa.', 'TP y TTPa normales.'],
      ref: 'WFH 2020' }),

    q({ id: 'sangrado-03', dif: 2,
      stem: 'Mujer de 35 años con confusión, petequias y orina oscura. Hb 7.8, plaquetas 14,000, esquistocitos abundantes, LDH 1,600, haptoglobina indetectable, creatinina 1.4, TP y TTPa normales. ¿Siguiente paso?',
      opts: ['Transfundir plaquetas', 'Recambio plasmático urgente + glucocorticoides', 'Esperar el resultado de ADAMTS13', 'IgIV sola', 'Heparina'],
      ans: 1,
      exp: 'Anemia microangiopática + trombocitopenia + afección neurológica con coagulación normal: PTT. Se inicia recambio plasmático sin esperar ADAMTS13 (el plasma repone la enzima y retira los autoanticuerpos). Se agrega caplacizumab si está disponible.',
      why: ['Puede empeorar la trombosis.', '', 'El retraso aumenta la mortalidad.', 'No es el tratamiento del PTT.', 'No está indicada; aumenta el sangrado.'],
      ref: 'ISTH 2020 TTP' }),

    q({ id: 'sangrado-04', dif: 2,
      stem: 'Hombre de 66 años en el día 7 de heparina no fraccionada tras una cirugía de cadera. Plaquetas bajaron de 240,000 a 90,000 y tiene trombosis venosa profunda nueva. ¿Qué haces?',
      opts: ['Cambiar a enoxaparina', 'Suspender toda heparina e iniciar argatrobán', 'Iniciar warfarina de inmediato', 'Transfundir plaquetas', 'Continuar la heparina a menor dosis'],
      ans: 1,
      exp: 'HIT con alta probabilidad (4T alto). Se suspende toda heparina, incluida la HBPM, y se usa un anticoagulante no heparínico. La warfarina se inicia hasta que las plaquetas se recuperan (riesgo de necrosis cutánea y gangrena venosa).',
      why: ['La HBPM tiene reacción cruzada.', '', 'Puede causar gangrena venosa al inicio.', 'Aumenta la trombosis.', 'Mantiene el estímulo.'],
      ref: 'ASH 2018 HIT' }),

    q({ id: 'sangrado-05', dif: 2,
      stem: 'Paciente con choque séptico y sangrado por sitios de punción. Plaquetas 42,000, TP y TTPa prolongados, fibrinógeno 80 mg/dL, dímero D muy alto. ¿Diagnóstico y medida principal?',
      opts: ['PTI; prednisona', 'CID; tratar la sepsis y reponer componentes porque sangra', 'Hemofilia adquirida; factor VIII', 'PTT; recambio plasmático', 'HIT; argatrobán'],
      ans: 1,
      exp: 'CID: consumo de plaquetas y factores con fibrinólisis (fibrinógeno ↓, dímero D ↑). Se trata la causa; como sangra, se transfunden plaquetas, plasma y crioprecipitado (fibrinógeno).',
      why: ['El PTI no prolonga TP/TTPa.', '', 'Solo prolongaría el TTPa.', 'En el PTT la coagulación es normal.', 'No hay exposición a heparina.'],
      ref: 'ISTH CID' }),

    q({ id: 'sangrado-06', dif: 1,
      stem: 'Mujer de 30 años con petequias. Plaquetas 18,000; el resto de la BH y el frotis son normales salvo plaquetas grandes. No sangra activamente. ¿Tratamiento inicial?',
      opts: ['Observación sin tratamiento', 'Glucocorticoides (prednisona o dexametasona)', 'Esplenectomía', 'Transfusión de plaquetas', 'Rituximab'],
      ans: 1,
      exp: 'PTI con plaquetas <30,000: primera línea glucocorticoides (± IgIV si se necesita respuesta rápida). Esplenectomía, rituximab y agonistas de TPO son segunda línea.',
      why: ['Con <30,000 se trata.', '', 'Segunda línea.', 'Solo en sangrado grave o procedimiento.', 'Segunda línea.'],
      ref: 'ASH 2019 PTI' }),

    q({ id: 'sangrado-07', dif: 2,
      stem: 'Hombre con fibrilación auricular en warfarina llega con hemorragia intracraneal. INR 4.2. ¿Qué das?',
      opts: ['Solo suspender warfarina', 'Vitamina K 10 mg IV + concentrado de complejo protrombínico de 4 factores', 'Protamina', 'Idarucizumab', 'Vitamina K oral'],
      ans: 1,
      exp: 'Sangrado que amenaza la vida: el concentrado de complejo protrombínico corrige el INR en minutos y la vitamina K IV mantiene el efecto (la vida media del concentrado es corta).',
      why: ['Tardaría días.', '', 'Revierte heparina.', 'Revierte dabigatrán.', 'Demasiado lenta para un sangrado grave.'],
      ref: 'ACC 2020 Expert Consensus on Bleeding' }),

    q({ id: 'sangrado-08', dif: 3,
      stem: 'Mujer de 70 años sin antecedentes de sangrado presenta hematomas extensos en brazos y muslo. TP normal, TTPa 68 s, no corrige con la prueba de mezcla incubada 2 horas. Plaquetas normales. ¿Diagnóstico más probable?',
      opts: ['Hemofilia A congénita', 'Hemofilia A adquirida (inhibidor del factor VIII)', 'Déficit de vitamina K', 'Von Willebrand tipo 1', 'Anticoagulante lúpico'],
      ans: 1,
      exp: 'Sangrado nuevo en adulto mayor + TTPa ↑ que no corrige (sobre todo tras incubar) = autoanticuerpo contra el VIII. Se asocia a edad, posparto, autoinmunidad y cáncer. Se trata con agentes de bypass (factor VII activado) e inmunosupresión.',
      why: ['No debutaría a los 70 y la mezcla corregiría.', '', 'Prolongaría el TP y corregiría.', 'La mezcla corregiría.', 'No corrige, pero causa trombosis, no hematomas.'],
      ref: 'International recommendations on acquired hemophilia A, 2020' }),

    q({ id: 'sangrado-09', dif: 2,
      stem: 'Hombre con ERC en diálisis tiene sangrado prolongado por el sitio de una biopsia renal. Plaquetas, TP y TTPa normales. ¿Qué fármaco ayuda?',
      opts: ['Vitamina K', 'Desmopresina', 'Heparina', 'Plasma fresco', 'Protamina'],
      ans: 1,
      exp: 'La uremia causa disfunción plaquetaria con conteo normal. La desmopresina libera FvW del endotelio y mejora la adhesión plaquetaria; la diálisis también ayuda.',
      why: ['La vía de la coagulación está normal.', '', 'Empeora el sangrado.', 'Los factores están normales.', 'No hay heparina que revertir.'],
      ref: 'Harrison 21e' }),

    q({ id: 'sangrado-10', dif: 1,
      stem: 'Un paciente con TTPa prolongado no tiene ningún antecedente de sangrado y le extraen una muela sin problemas. La prueba de mezcla corrige. ¿Qué déficit explica el hallazgo?',
      opts: ['Factor VIII', 'Factor IX', 'Factor XII', 'Factor XI', 'Factor de von Willebrand'],
      ans: 2,
      exp: 'El déficit de factor XII prolonga mucho el TTPa in vitro pero no causa sangrado (in vivo la coagulación se inicia por la vía del factor tisular).',
      why: ['Daría hemofilia A con sangrado.', 'Daría hemofilia B con sangrado.', '', 'El XI sí puede sangrar, sobre todo en cirugía.', 'Da sangrado mucocutáneo.'],
      ref: 'Harrison 21e' })
  ],

  cases: [
    { id: 'g-sangrado', topic: 'sangrado', subj: 'hemato',
      title: 'Petequias en la sala de espera', place: 'Urgencias',
      patient: { name: 'Lucía', age: 34, sex: 'M', skin: '#D9A37E', hair: '#3A2418', gown: '#FF8FD0' },
      intro: 'Llegó porque su familia la notó confundida desde la mañana. Tiene petequias en piernas y orina oscura. Ningún fármaco nuevo.',
      extra: { label: 'PLQ', unit: 'mil' },
      start: { FC: 108, PAS: 128, PAD: 78, SpO2: 97, FR: 20, X: 12 },
      nodes: [
        { tag: 'Laboratorios', ecg: 'tachy',
          text: 'Hb 7.4, plaquetas 12,000, LDH 1,450, haptoglobina indetectable, bilirrubina indirecta 2.8. TP y TTPa normales.',
          q: '¿Qué estudio cambia todo en este momento?',
          A: { t: 'Frotis de sangre periférica', ok: true, res: 'Abundantes esquistocitos: hemólisis microangiopática.' },
          B: { t: 'Aspirado de médula ósea', ok: false, res: 'Retrasas el diagnóstico; el frotis ya te lo dice.' },
          why: 'Anemia hemolítica + trombocitopenia: el frotis con esquistocitos define la microangiopatía trombótica.' },
        { tag: 'Decisión', ecg: 'tachy',
          text: 'Esquistocitos, coagulación normal, alteración neurológica. Puntaje PLASMIC 7 (alto). ADAMTS13 tardará 3 días.',
          q: '¿Qué haces?',
          A: { t: 'Esperar el ADAMTS13 para confirmar', ok: false, res: 'Al día siguiente presenta una crisis convulsiva.', vit: { FC: 124, X: 8 } },
          B: { t: 'Recambio plasmático hoy + glucocorticoides', ok: true, res: 'Se coloca catéter y se inicia el recambio en las primeras horas.' },
          why: 'El PTT se trata con la sospecha: cada hora sin recambio aumenta la mortalidad.' },
        { tag: 'Enfermería pregunta', ecg: 'normal', vit: { FC: 96, X: 18 },
          text: 'La enfermera ve que tiene 18,000 plaquetas y propone transfundir dos aféresis antes del catéter.',
          q: '¿Qué contestas?',
          A: { t: 'Sí, transfundir para colocar el catéter con seguridad', ok: false, res: 'La transfusión puede alimentar los microtrombos.' },
          B: { t: 'No de rutina: se coloca el catéter con técnica cuidadosa; plaquetas solo si hay sangrado grave', ok: true, res: 'El catéter se coloca guiado por ultrasonido sin complicaciones.' },
          why: 'En PTT la transfusión de plaquetas se reserva para sangrado que amenaza la vida.' },
        { tag: 'Día 3', ecg: 'normal', vit: { FC: 84, PAS: 120, PAD: 74, X: 96 },
          text: 'ADAMTS13 <5% con inhibidor positivo. Plaquetas subiendo, LDH bajando.',
          q: '¿Qué agregas para reducir recaídas?',
          A: { t: 'Rituximab (± caplacizumab mientras persista la enzima baja)', ok: true, res: 'Egresa al día 9 con plaquetas de 180,000.', vit: { X: 180 } },
          B: { t: 'Esplenectomía urgente', ok: false, res: 'No es el siguiente paso; existe inmunosupresión eficaz.' },
          why: 'El PTT inmune se debe a autoanticuerpos anti-ADAMTS13: rituximab reduce las recaídas.' }
      ] }
  ]
};
