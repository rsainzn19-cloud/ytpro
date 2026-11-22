// Tema 55 · COVID-19 (Infectología, semana 11)
const T = { topic: 'covid', subj: 'infecto' };
const q = (o) => ({ ...T, ...o });
const SRC = { short: 'De tu Guía Infecto', vs: 'tu guía', name: 'Guía Infecto · Ximena Cors Cepeda (EMIS 5)', url: 'https://docs.google.com/document/d/1z8GAmFxqoyJtS21XWHwMlvykDNaoEMW07PgJh45aMwY/edit' };

export default {
  lessons: {
    covid: {
      hook: 'El tratamiento de COVID-19 depende de la gravedad: ambulatorio con riesgo → nirmatrelvir/ritonavir en los primeros 5 días; hospitalizado con O₂ → dexametasona (± remdesivir); grave → dexametasona + inmunomodulador. Los esteroides NO se dan sin hipoxemia.',
      nn: [], yt: 'COVID-19 treatment by severity dexamethasone Paxlovid remdesivir',
      video: [
        { ch: 'Diagnóstico y gravedad', sc: [
          { v: { k: 'title', t: 'COVID-19', s: 'Semana 11 · Infectología' },
            say: 'Semana once: COVID diecinueve, por SARS CoV dos. Se une al receptor de la enzima convertidora de angiotensina dos. Incuba de dos a catorce días, alrededor de cinco.' },
          { v: { k: 'list', t: 'Diagnóstico', items: ['PCR: la más sensible', 'Antígeno: rápido, repetir si es negativo con síntomas', 'Serología: no diagnostica infección aguda'] },
            say: 'Se diagnostica con PCR, la más sensible, o con prueba rápida de antígeno, que si sale negativa con síntomas se repite. La serología no sirve para la infección aguda.' },
          { v: { k: 'vs', a: 'Gravedad', b: 'Tratamiento', rows: [['Leve con riesgo', 'Sin O2', 'Nirmatrelvir con ritonavir en 5 días'], ['Hospitalizado con O2', 'SatO2 menor de 94', 'Dexametasona más remdesivir'], ['Crítico', 'Alto flujo o ventilación', 'Dexametasona más tocilizumab o baricitinib']] },
            say: 'Leve con factores de riesgo: nirmatrelvir con ritonavir en los primeros cinco días. Hospitalizado con oxígeno: dexametasona seis miligramos por diez días, más remdesivir. Crítico: dexametasona más tocilizumab o baricitinib. Sin hipoxemia, nada de esteroides.' }
        ] },
        { ch: 'Lo que se pregunta', sc: [
          { v: { k: 'tip', kind: 'trap', t: 'El nirmatrelvir/ritonavir tiene muchas interacciones (ritonavir inhibe CYP3A4): revisa estatinas, anticoagulantes, antiarrítmicos.' },
            say: 'Una trampa: el ritonavir inhibe fuertemente el citocromo tres A cuatro, así que hay que revisar interacciones con estatinas, anticoagulantes y antiarrítmicos.' },
          { v: { k: 'list', t: 'Complicaciones', items: ['SDRA y neumonía en vidrio despulido', 'Trombosis: profilaxis con heparina', 'Miocarditis', 'COVID prolongado'] },
            say: 'Las complicaciones: síndrome de distrés respiratorio, trombosis, por lo que todo hospitalizado recibe profilaxis con heparina, miocarditis y síntomas prolongados.' },
          { v: { k: 'mnemo', t: 'Sin O₂: no esteroide. Con O₂: dexametasona', d: 'Ambulatorio de riesgo: nirmatrelvir/ritonavir ≤5 días. Grave: + tocilizumab o baricitinib.' },
            say: 'Llévate esto: sin oxígeno, no esteroide. Con oxígeno, dexametasona. Y el paciente ambulatorio de riesgo, antiviral en los primeros cinco días.' }
        ] }
      ],
      sections: [
        { h: 'Virus, clínica y diagnóstico', html: `
<ul>
<li>SARS-CoV-2 (betacoronavirus, ARN): proteína S se une a <b>ACE2</b> (activada por TMPRSS2). Transmisión respiratoria (gotas y aerosoles). Incubación 2–14 días (media ~5; menor con ómicron).</li>
<li>Clínica: fiebre, tos, odinofagia, rinorrea, mialgias, cefalea, <b>anosmia/ageusia</b>, diarrea; disnea e hipoxemia (a veces “silenciosa”). Riesgo de gravedad: edad avanzada, obesidad, DM, ERC, inmunosupresión, enfermedad cardiopulmonar, embarazo, no vacunados.</li>
<li>Diagnóstico: <b>RT-PCR</b> (estándar), <b>antígeno</b> (rápido, menos sensible; repetir a las 48 h si es negativo con síntomas). Serología: epidemiología, no diagnóstico agudo.</li>
<li>Imagen: <b>vidrio despulido</b> bilateral, periférico y basal; consolidaciones en grave.</li>
<li>Laboratorio de mal pronóstico: linfopenia, dímero D, ferritina, PCR, LDH, troponina, IL-6 altos.</li>
</ul>` },
        { h: 'Tratamiento por gravedad (IDSA/NIH)', html: `
<div class="tablewrap"><table class="mini">
<tr><th>Escenario</th><th>Tratamiento</th></tr>
<tr><td>Leve sin riesgo</td><td>Sintomático (paracetamol), aislamiento</td></tr>
<tr><td><b>Leve-moderado con riesgo de progresión</b> (ambulatorio)</td><td><b>Nirmatrelvir/ritonavir</b> 5 días (≤5 días de síntomas); alternativa <b>remdesivir</b> 3 días IV (≤7 días), molnupiravir</td></tr>
<tr><td>Hospitalizado sin O₂</td><td>Remdesivir si hay riesgo; <b>no dexametasona</b>; profilaxis de TEV</td></tr>
<tr><td><b>Hospitalizado con O₂ convencional</b> (SatO₂ &lt;94 %)</td><td><b>Dexametasona 6 mg/día × 10 días</b> + remdesivir; heparina profiláctica (terapéutica en no críticos con dímero D alto y bajo riesgo de sangrado)</td></tr>
<tr><td><b>Alto flujo/VMNI o ventilación mecánica</b></td><td>Dexametasona + <b>tocilizumab o baricitinib</b>; ventilación protectora, prono</td></tr>
</table></div>
<ul>
<li>No recomendados: ivermectina, hidroxicloroquina, azitromicina (sin infección bacteriana), plasma convaleciente de rutina.</li>
<li>Nirmatrelvir/ritonavir: ritonavir inhibe CYP3A4 (estatinas, amiodarona, tacrolimus, DOAC, anticonceptivos); ajustar en ERC; no con TFG &lt;30 (actualmente se ajusta), rebote clínico posible.</li>
</ul>` },
        { h: 'Prevención y complicaciones', html: `
<ul>
<li>Vacunas: ARNm (Pfizer, Moderna), vector viral, proteína; refuerzos actualizados anuales en mayores y riesgo. Reducen hospitalización y muerte.</li>
<li>Complicaciones: SDRA, <b>trombosis</b> (TEP/TVP; profilaxis en hospitalizados), miocarditis, LRA, sobreinfección, <b>COVID prolongado</b> (fatiga, disnea, niebla mental &gt;3 meses), síndrome inflamatorio multisistémico (niños: MIS-C).</li>
<li>Aislamiento según recomendaciones vigentes (≥5 días y hasta mejoría de síntomas, mascarilla después).</li>
</ul>` },
        { h: 'Cómo lo preguntan en el examen', html: `
<ul>
<li>COVID leve, 68 años, DM, 2 días de síntomas → <b>nirmatrelvir/ritonavir</b>.</li>
<li>COVID sin hipoxemia → <b>no</b> dexametasona.</li>
<li>Hospitalizado con SatO₂ 89 % → <b>dexametasona 6 mg × 10 días</b> (+ remdesivir).</li>
<li>En alto flujo con progresión → + <b>tocilizumab o baricitinib</b>.</li>
<li>Paciente con atorvastatina que iniciará Paxlovid → suspender temporalmente la estatina (interacción).</li>
</ul>` }
      ],
      mnemo: { t: 'Sin O₂: no esteroide · Con O₂: dexametasona 6 mg × 10 días', d: 'Riesgo ambulatorio: nirmatrelvir/ritonavir ≤5 días. Grave (alto flujo/VM): + tocilizumab o baricitinib. Siempre profilaxis de TEV en hospitalizados.' },
      pearl: 'La dexametasona reduce la mortalidad en COVID con oxígeno o ventilación (RECOVERY), pero puede aumentarla en pacientes sin hipoxemia.',
      trap: 'Nirmatrelvir/ritonavir tiene interacciones peligrosas por el ritonavir (CYP3A4): revisa estatinas, anticoagulantes, antiarrítmicos e inmunosupresores antes de recetarlo.',
      guide: [
        'IDSA/NIH 2024: nirmatrelvir/ritonavir es el antiviral oral preferido en ambulatorios de riesgo; tocilizumab o baricitinib en enfermedad grave con inflamación.',
        'Tu guía menciona dexametasona con SatO₂ <92 % y remdesivir; el umbral de O₂ suplementario en las guías actuales es SatO₂ <94 %.'
      ],
      refs: [
        'Bhimraj A, et al. IDSA Guidelines on the treatment and management of patients with COVID-19. 2024.',
        'NIH COVID-19 Treatment Guidelines Panel (archivado 2024).',
        'RECOVERY Collaborative Group. Dexamethasone in hospitalized patients with Covid-19. N Engl J Med 2021.',
        'Hammond J, et al. Oral nirmatrelvir for high-risk, nonhospitalized adults with Covid-19 (EPIC-HR). N Engl J Med 2022.'
      ]
    }
  },

  guias: {
    covid: { src: SRC,
      puntos: [
        'SARS-CoV-2: betacoronavirus; proteína S a ACE2, activada por TMPRSS2.',
        'Incubación ~5 días (2–14): fiebre, tos, disnea, fatiga, anosmia, odinofagia, cefalea, diarrea; neumonía periférica en vidrio despulido.',
        'PCR (infección activa, alta sensibilidad), antígeno (confirmar con PCR si es discordante), serología (epidemiología, no inmunidad).',
        'Leves: paracetamol; moderados-graves: O₂, dexametasona 6 mg/día si SatO₂ &lt;92 %, remdesivir.',
        'Vacunas ARN (Pfizer, Moderna), vector viral (AstraZeneca, J&amp;J), virus completo (Sinovac).'
      ],
      ojo: ['Para ambulatorios con riesgo de progresión hoy se usa <b>nirmatrelvir/ritonavir</b> en los primeros 5 días; y el umbral de O₂ en guías es SatO₂ &lt;94 %.'],
      cards: [['Receptor de SARS-CoV-2', 'ACE2 (activado por TMPRSS2)']] }
  },

  cards: [
    ['Receptor del SARS-CoV-2', 'ACE2'],
    ['Diagnóstico estándar de COVID', 'RT-PCR'],
    ['Antígeno negativo con síntomas', 'Repetir a las 48 h o hacer PCR'],
    ['Imagen típica de neumonía COVID', 'Vidrio despulido bilateral periférico'],
    ['Ambulatorio con riesgo', 'Nirmatrelvir/ritonavir ≤5 días de síntomas'],
    ['Hospitalizado con O₂', 'Dexametasona 6 mg × 10 días + remdesivir'],
    ['Sin hipoxemia', 'No dexametasona'],
    ['COVID crítico', 'Dexametasona + tocilizumab o baricitinib'],
    ['Interacciones de Paxlovid', 'Ritonavir inhibe CYP3A4 (estatinas, DOAC, amiodarona, tacrolimus)'],
    ['Hospitalizado por COVID', 'Profilaxis de TEV con heparina'],
    ['No recomendados', 'Ivermectina, hidroxicloroquina']
  ],

  questions: [
    q({ id: 'covid-01', dif: 1, stem: 'Hombre de 66 años con DM, COVID leve de 2 días, SatO₂ 97 %. ¿Tratamiento?', opts: ['Dexametasona', 'Nirmatrelvir/ritonavir 5 días', 'Azitromicina', 'Ivermectina', 'Nada nunca'], ans: 1,
      exp: 'Riesgo de progresión y ≤5 días de síntomas: antiviral oral.', why: ['Sin hipoxemia, daña.', '', 'Sin beneficio.', 'Sin beneficio.', 'Tiene indicación.'], ref: 'IDSA 2024' }),
    q({ id: 'covid-02', dif: 2, stem: 'Paciente hospitalizado por COVID con SatO₂ 89 % al aire ambiente que requiere puntas nasales. ¿Tratamiento?', opts: ['Solo paracetamol', 'Dexametasona 6 mg/día × 10 días (+ remdesivir) y profilaxis de TEV', 'Hidroxicloroquina', 'Antibiótico de amplio espectro siempre', 'Tocilizumab solo'], ans: 1,
      exp: 'Con O₂ suplementario, la dexametasona reduce mortalidad.', why: ['Insuficiente.', '', 'Sin beneficio.', 'Solo si hay sospecha bacteriana.', 'Se agrega a la dexametasona en graves.'], ref: 'RECOVERY 2021' }),
    q({ id: 'covid-03', dif: 2, stem: 'Paciente con COVID, sin hipoxemia, hospitalizado por otra causa. ¿Dexametasona?', opts: ['Sí, siempre', 'No: puede aumentar la mortalidad sin hipoxemia', 'Solo dosis alta', 'Solo inhalada', 'Sí, 21 días'], ans: 1,
      exp: 'RECOVERY: sin O₂ no hubo beneficio (tendencia a daño).', why: ['Incorrecto.', '', 'No.', 'No.', 'No.'], ref: 'RECOVERY 2021' }),
    q({ id: 'covid-04', dif: 2, stem: 'Paciente con COVID grave en cánula de alto flujo, PCR muy elevada, con dexametasona. ¿Qué agregas?', opts: ['Ivermectina', 'Tocilizumab o baricitinib', 'Plasma de rutina', 'Hidroxicloroquina', 'Azitromicina'], ans: 1,
      exp: 'Inmunomodulación en enfermedad grave con inflamación sistémica.', why: ['No.', '', 'No de rutina.', 'No.', 'No.'], ref: 'IDSA 2024' }),
    q({ id: 'covid-05', dif: 2, stem: 'Paciente con simvastatina, amiodarona y apixabán que tiene COVID con riesgo. ¿Qué precaución con nirmatrelvir/ritonavir?', opts: ['Ninguna', 'Revisar interacciones por CYP3A4 (riesgo de toxicidad); considerar otro antiviral', 'Duplicar dosis', 'Darlo 14 días', 'Agregar ketoconazol'], ans: 1,
      exp: 'El ritonavir eleva niveles de estatinas, amiodarona y anticoagulantes; puede preferirse remdesivir.', why: ['Peligroso.', '', 'No.', 'No.', 'Absurdo.'], ref: 'IDSA 2024' }),
    q({ id: 'covid-06', dif: 1, stem: '¿Qué estudio es el estándar para diagnosticar infección activa por SARS-CoV-2?', opts: ['Serología IgG', 'RT-PCR', 'TC de tórax', 'Dímero D', 'Biometría'], ans: 1,
      exp: 'La PCR es la más sensible.', why: ['No para infección aguda.', '', 'Apoya, no confirma.', 'Inespecífico.', 'Inespecífica.'], ref: 'IDSA 2024' }),
    q({ id: 'covid-07', dif: 2, stem: 'Paciente con síntomas de COVID y antígeno negativo. ¿Qué haces?', opts: ['Descartar COVID', 'Repetir el antígeno en 48 h o hacer PCR', 'Serología', 'TC', 'Nada'], ans: 1,
      exp: 'El antígeno es menos sensible, sobre todo al inicio.', why: ['No descarta.', '', 'No.', 'No.', 'No.'], ref: 'IDSA 2024' }),
    q({ id: 'covid-08', dif: 2, stem: '¿Qué medida reduce trombosis en pacientes hospitalizados por COVID?', opts: ['Aspirina a todos', 'Heparina profiláctica (terapéutica en casos seleccionados no críticos)', 'Nada', 'Warfarina', 'Clopidogrel'], ans: 1,
      exp: 'Estado protrombótico; tromboprofilaxis en todos los hospitalizados.', why: ['Sin beneficio claro.', '', 'Riesgo alto.', 'No.', 'No.'], ref: 'IDSA 2024' }),
    q({ id: 'covid-09', dif: 2, stem: '¿Qué hallazgo tomográfico es típico de la neumonía por COVID?', opts: ['Consolidación lobar única', 'Vidrio despulido bilateral periférico y basal', 'Cavitación apical', 'Derrame masivo', 'Nódulos miliares'], ans: 1,
      exp: 'Patrón periférico, bilateral, en vidrio despulido; “empedrado” en casos avanzados.', why: ['Neumococo.', '', 'TB.', 'No.', 'TB miliar.'], ref: 'IDSA 2024' }),
    q({ id: 'covid-10', dif: 2, stem: 'Paciente con COVID moderado que no puede tomar nirmatrelvir/ritonavir por interacciones, 4 días de síntomas, alto riesgo. ¿Alternativa?', opts: ['Ivermectina', 'Remdesivir IV 3 días', 'Azitromicina', 'Prednisona', 'Ninguna'], ans: 1,
      exp: 'Remdesivir ambulatorio (≤7 días de síntomas) reduce hospitalización (PINETREE).', why: ['No.', '', 'No.', 'No.', 'Hay opción.'], ref: 'IDSA 2024' }),
    q({ id: 'covid-11', dif: 1, stem: '¿Cuál es el periodo de incubación promedio del SARS-CoV-2?', opts: ['1 día', '~5 días (2–14)', '30 días', '6 meses', '12 horas'], ans: 1,
      exp: 'Más corto con ómicron (~3 días).', why: ['No.', '', 'No.', 'No.', 'No.'], ref: 'IDSA 2024' }),
    q({ id: 'covid-12', dif: 2, stem: '¿Qué tratamiento NO se recomienda para COVID-19?', opts: ['Dexametasona en hipoxemia', 'Hidroxicloroquina', 'Remdesivir', 'Nirmatrelvir/ritonavir', 'Tocilizumab en graves'], ans: 1,
      exp: 'Sin beneficio y con riesgo (QT).', why: ['Recomendada.', '', 'Recomendado.', 'Recomendado.', 'Recomendado.'], ref: 'IDSA 2024' }),
    q({ id: 'covid-13', dif: 2, stem: 'Paciente con fatiga, disnea y dificultad para concentrarse 4 meses después de COVID. ¿Diagnóstico?', opts: ['Reinfección', 'COVID prolongado (condición post-COVID)', 'Simulación', 'Hipotiroidismo siempre', 'TB'], ans: 1,
      exp: 'Síntomas >3 meses; descartar otras causas (TEP, miocarditis, anemia, tiroides).', why: ['No hay datos.', '', 'No.', 'Debe descartarse, no es lo más probable.', 'No.'], ref: 'IDSA 2024' }),
    q({ id: 'covid-14', dif: 2, stem: 'Paciente con COVID grave intubado con PaO₂/FiO₂ 120. ¿Medida ventilatoria?', opts: ['Volumen corriente alto', 'Ventilación protectora (6 mL/kg peso ideal) y prono', 'Hiperventilar', 'Retirar PEEP', 'Nada'], ans: 1,
      exp: 'SDRA: ventilación protectora y decúbito prono si PaO₂/FiO₂ <150.', why: ['Daña.', '', 'No.', 'Daña.', 'No.'], ref: 'IDSA 2024' }),
    q({ id: 'covid-15', dif: 1, stem: '¿A qué receptor se une la proteína S del SARS-CoV-2?', opts: ['CD4', 'ACE2', 'CCR5', 'Ácido siálico', 'ICAM-1'], ans: 1,
      exp: 'ACE2, presente en neumocitos, endotelio, intestino y corazón.', why: ['VIH.', '', 'VIH.', 'Influenza.', 'Rinovirus.'], ref: 'IDSA 2024' })
  ]
};
