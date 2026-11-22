// Tema 60 · Tuberculosis (Neumología, semana 11)
const T = { topic: 'tb', subj: 'neumo' };
const q = (o) => ({ ...T, ...o });
const SRC = { short: 'De tu Guía Neumo', vs: 'tu guía', name: 'Guía Neumo · Ximena Cors Cepeda (EMIS 5)', url: 'https://docs.google.com/document/d/1by5z7_drpzSNZPiEH1e9SHIx5ui6osaTPySJ1mnDAWg/edit' };

export default {
  lessons: {
    tb: {
      hook: 'Tos >2–3 semanas con fiebre vespertina, sudoración y pérdida de peso: TB hasta demostrar lo contrario. Se confirma con baciloscopia/PCR (Xpert) y cultivo; se trata con RIPE 2 meses y RI 4 meses. La latente (PPD o IGRA +, RX normal) se trata para que no se active.',
      nn: [], yt: 'tuberculosis diagnosis treatment RIPE latent TB',
      video: [
        { ch: 'Diagnóstico', sc: [
          { v: { k: 'title', t: 'Tuberculosis', s: 'Semana 11 · Neumología' },
            say: 'Semana once: la tuberculosis. La causa Mycobacterium tuberculosis, se transmite por gotitas y sigue siendo muy frecuente en México. Los grupos de riesgo: VIH, diabetes, desnutrición, alcohol, cárcel y contactos.' },
          { v: { k: 'case', t: 'Tos y sudores', p: { name: 'Fernando', age: 45, sex: 'H', skin: '#C98B62', hair: '#2A1A12', gown: '#9FD8FF' }, text: 'Diabético. Tos de 5 semanas con hemoptisis, fiebre vespertina, sudoración nocturna, bajó 8 kg. RX: cavitación apical derecha.', vit: { Tos: '5 sem', Peso: '−8 kg' } },
            say: 'Fernando es diabético, tiene tos desde hace cinco semanas, a veces con sangre, fiebre en las tardes, sudoración en la noche y bajó ocho kilos. La radiografía muestra una cavidad en el ápice derecho.' },
          { v: { k: 'list', t: 'Cómo se confirma', items: ['Baciloscopia seriada', 'PCR Xpert MTB RIF', 'Cultivo: el estándar de oro', 'Prueba de resistencia'] },
            say: 'Se confirma con baciloscopias de esputo, con la prueba molecular Xpert, que además detecta resistencia a rifampicina, y con el cultivo, que es el estándar de oro pero tarda semanas.' }
        ] },
        { ch: 'Tratamiento', sc: [
          { v: { k: 'flow', t: 'TB sensible', steps: ['2 meses: rifampicina, isoniazida, pirazinamida, etambutol', '4 meses: rifampicina e isoniazida', 'Piridoxina con isoniazida', 'Tratamiento supervisado'] },
            say: 'La TB sensible se trata seis meses: dos meses con rifampicina, isoniazida, pirazinamida y etambutol, y cuatro meses con rifampicina e isoniazida. Se agrega piridoxina para prevenir la neuropatía de la isoniazida.' },
          { v: { k: 'vs', a: 'Efecto adverso', b: 'Clave', rows: [['Isoniazida', 'Neuropatía, hepatitis', 'Piridoxina'], ['Rifampicina', 'Líquidos naranjas, interacciones', 'Inductor CYP'], ['Pirazinamida', 'Hiperuricemia, hepatitis', 'Gota'], ['Etambutol', 'Neuritis óptica', 'Colores']] },
            say: 'Los efectos adversos: isoniazida, neuropatía y hepatitis. Rifampicina, lágrimas y orina naranjas e interacciones, porque induce enzimas hepáticas. Pirazinamida, ácido úrico alto. Etambutol, neuritis óptica con pérdida de la visión de colores.' },
          { v: { k: 'mnemo', t: 'RIPE', d: 'Rifampicina, Isoniazida, Pirazinamida, Etambutol: 2 meses; luego RI 4 meses.' },
            say: 'Llévate RIPE: dos meses los cuatro, cuatro meses rifampicina con isoniazida. Y la latente se trata para que no se active.' }
        ] }
      ],
      sections: [
        { h: 'Patogenia y formas', html: `
<ul>
<li><b>Primaria</b>: foco de Ghon (lóbulos medios/inferiores) + ganglio hiliar = <b>complejo de Ghon</b>; calcificado = complejo de Ranke. Casi siempre controlada → <b>latente</b> (5–10 % se reactiva en la vida).</li>
<li><b>Reactivación</b>: <b>lóbulos superiores</b> (segmentos apicales y posteriores), <b>cavitación</b>, granulomas caseificantes. Riesgo: <b>VIH</b> (el mayor), DM, desnutrición, ERC/diálisis, silicosis, <b>anti-TNF</b>, esteroides, trasplante.</li>
<li>Extrapulmonar: <b>ganglionar</b> (escrófula, la más común), <b>pleural</b> (exudado linfocítico, ADA alto), meníngea (base del cráneo, pares craneales, LCR con glucosa baja), miliar, <b>Pott</b> (vertebral), renal (piuria estéril), pericárdica, intestinal (ileocecal), suprarrenal.</li>
</ul>` },
        { h: 'Diagnóstico', html: `
<ul>
<li>Sospecha: tos &gt;2–3 semanas, fiebre vespertina, <b>sudoración nocturna</b>, pérdida de peso, hemoptisis.</li>
<li>Esputo: <b>baciloscopia (Ziehl-Neelsen)</b> seriada (3 muestras), <b>NAAT/Xpert MTB/RIF</b> (rápido, detecta resistencia a rifampicina), <b>cultivo</b> (estándar de oro; Löwenstein-Jensen o líquido MGIT; 2–6 semanas) con antibiograma. Si no expectora: esputo inducido, lavado broncoalveolar, aspirado gástrico (niños).</li>
<li>Imagen: RX/TC (cavidades apicales, árbol en gemación, adenopatías, miliar).</li>
<li>Extrapulmonar: biopsia con granulomas caseificantes + cultivo/PCR; ADA en líquidos pleural, peritoneal, pericárdico.</li>
<li>Toda TB → <b>prueba de VIH</b> y glucosa.</li>
</ul>` },
        { h: 'Tratamiento de la TB activa', html: `
<ul>
<li><b>Fase intensiva (2 meses)</b>: rifampicina + isoniazida + pirazinamida + etambutol (RIPE, “HRZE”). <b>Fase de sostén (4 meses)</b>: rifampicina + isoniazida. Tratamiento <b>supervisado</b> (TAES/DOTS). Piridoxina con isoniazida en riesgo de neuropatía.</li>
<li>Extender: meníngea (9–12 meses + <b>dexametasona</b>), ósea/Pott (6–9 meses), pericárdica (± esteroides), cavitada con cultivo positivo a los 2 meses (9 meses).</li>
<li>Efectos: <b>isoniazida</b> (hepatitis, neuropatía periférica por déficit de B6, lupus inducido, inhibe CYP), <b>rifampicina</b> (orina y lágrimas naranjas, hepatitis, <b>inductor de CYP</b>: anticonceptivos, warfarina, antirretrovirales → rifabutina con inhibidores de proteasa), <b>pirazinamida</b> (hiperuricemia/gota, hepatitis), <b>etambutol</b> (<b>neuritis óptica</b>: agudeza visual y colores).</li>
<li>Hepatotoxicidad: suspender si ALT &gt;3× con síntomas o &gt;5× sin síntomas; reintroducir uno por uno.</li>
<li><b>TB resistente</b>: RR (rifampicina), MDR (rifampicina + isoniazida), pre-XDR/XDR (+ fluoroquinolona ± bedaquilina/linezolid). Régimen oral corto <b>BPaLM</b> (bedaquilina, pretomanid, linezolid ± moxifloxacino) 6 meses.</li>
<li>VIH: iniciar TAR en 2 semanas (8 semanas en meníngea); vigilar síndrome inflamatorio de reconstitución inmune.</li>
</ul>` },
        { h: 'TB latente', html: `
<ul>
<li>Tamizar a grupos de riesgo: contactos, VIH, candidatos a anti-TNF/trasplante, diálisis, silicosis, personal de salud, migrantes de zonas endémicas.</li>
<li><b>PPD (tuberculina)</b>: positivo ≥<b>5 mm</b> en VIH, contactos, inmunosuprimidos, fibrosis en RX; ≥<b>10 mm</b> en DM, ERC, personal de salud, migrantes, drogas IV, niños &lt;4; ≥<b>15 mm</b> en personas sin riesgo. Falsos +: BCG, micobacterias no TB; falsos −: inmunosupresión. <b>IGRA</b> (QuantiFERON) preferido en vacunados con BCG.</li>
<li>Positivo → <b>RX de tórax</b> (y síntomas) para descartar activa. Si es normal → tratar latente: <b>3HP</b> (isoniazida + rifapentina semanal 3 meses), <b>4R</b> (rifampicina 4 meses), 3HR, o isoniazida 6–9 meses + piridoxina.</li>
<li><b>BCG</b>: protege contra formas graves en niños (meníngea y miliar); no previene la infección del adulto; contraindicada en inmunosuprimidos.</li>
</ul>` },
        { h: 'Cómo lo preguntan en el examen', html: `
<ul>
<li>Tos crónica, sudoración y cavidad apical → <b>baciloscopia/Xpert</b> → RIPE.</li>
<li>PPD de 12 mm en diabético con RX normal → <b>TB latente</b>: tratar.</li>
<li>Alteración de la visión de colores en tratamiento → <b>etambutol</b>.</li>
<li>Anticonceptivo que falla en paciente con TB → <b>rifampicina</b>.</li>
<li>Parestesias en pies → <b>isoniazida</b> (piridoxina).</li>
<li>Gota en tratamiento antifímico → <b>pirazinamida</b>.</li>
<li>Antes de infliximab → <b>IGRA/PPD</b>.</li>
</ul>` }
      ],
      mnemo: { t: 'RIPE 2 meses + RI 4 meses', d: 'Isoniazida: neuropatía (B6). Rifampicina: naranja e interacciones. Pirazinamida: gota. Etambutol: ojo (colores).' },
      pearl: 'Toda persona con TB debe hacerse prueba de VIH, y todo paciente con VIH debe tamizarse para TB.',
      trap: 'Un PPD positivo no distingue latente de activa: siempre pide RX de tórax (y baciloscopia si hay síntomas) antes de tratar como latente; si es activa, dar solo isoniazida genera resistencia.',
      guide: [
        'OMS 2022: régimen de 4 meses (rifapentina-moxifloxacino) en mayores de 12 años y BPaLM de 6 meses para TB MDR/RR.',
        'NOM-006-SSA2-2013 (México): tratamiento acortado estrictamente supervisado; tu guía usa el esquema clásico 2HRZE/4HR.'
      ],
      refs: [
        'WHO consolidated guidelines on tuberculosis. Module 4: Treatment, 2022.',
        'Nahid P, et al. Official ATS/CDC/IDSA Clinical Practice Guidelines: Treatment of drug-susceptible tuberculosis. Clin Infect Dis 2016.',
        'Sterling TR, et al. Guidelines for the treatment of latent tuberculosis infection (NTCA/CDC). MMWR 2020.',
        'NOM-006-SSA2-2013, Para la prevención y control de la tuberculosis.'
      ]
    }
  },

  guias: {
    tb: { src: SRC,
      puntos: [
        'Primaria: foco y complejo de Ghon (lóbulos medio/inferior); reactivación: lóbulos superiores con cavitación (VIH, anti-TNF, DM).',
        'Diagnóstico: ≥3 esputos (Ziehl-Neelsen), NAAT (diagnóstico rápido inicial), cultivo (estándar de oro, 2–6 semanas).',
        'PPD: &gt;5 mm (VIH, contactos, inmunosupresión), &gt;10 mm (endémicos, salud, IVDU, DM, ERC, &lt;5 años), &gt;15 mm (sanos); IGRA preferido con BCG.',
        'Activa: 2 meses RIPE + 4 meses RI con piridoxina; meníngea 2 + 7–10 meses con esteroide. Latente: 3HP, 4R o isoniazida 6–9 meses.',
        'Efectos: isoniazida (hepatitis, B6, lupus), rifampicina (CYP, naranja), pirazinamida (hiperuricemia), etambutol (neuropatía óptica).'
      ],
      ojo: ['Para TB resistente la OMS recomienda hoy regímenes orales cortos (<b>BPaLM</b>, 6 meses) en lugar de inyectables (amikacina, estreptomicina).'],
      cards: [['Complejo de Ghon', 'Foco pulmonar + ganglio hiliar (TB primaria)']] }
  },

  cards: [
    ['TB primaria', 'Complejo de Ghon: lóbulos medio/inferior + ganglio hiliar'],
    ['TB de reactivación', 'Lóbulos superiores, cavitación'],
    ['Mayor factor de riesgo de reactivación', 'VIH'],
    ['Diagnóstico rápido de TB', 'Xpert MTB/RIF (detecta resistencia a rifampicina)'],
    ['Estándar de oro', 'Cultivo'],
    ['Tratamiento de TB sensible', '2 meses RIPE + 4 meses RI'],
    ['TB meníngea', '9–12 meses + dexametasona'],
    ['Isoniazida', 'Hepatitis, neuropatía (dar piridoxina), lupus inducido'],
    ['Rifampicina', 'Fluidos naranjas, inductor CYP (anticonceptivos, warfarina)'],
    ['Pirazinamida', 'Hiperuricemia/gota, hepatitis'],
    ['Etambutol', 'Neuritis óptica (agudeza y colores)'],
    ['PPD ≥5 mm positivo en', 'VIH, contactos, inmunosuprimidos'],
    ['PPD ≥10 mm positivo en', 'DM, ERC, personal de salud, migrantes, drogas IV'],
    ['TB latente: regímenes', '3HP, 4R, 3HR o isoniazida 6–9 meses'],
    ['IGRA vs PPD', 'IGRA preferido en vacunados con BCG'],
    ['TB MDR', 'Resistente a rifampicina e isoniazida; BPaLM']
  ],

  questions: [
    q({ id: 'tb-01', dif: 1, stem: 'Hombre de 45 años con DM, tos de 6 semanas, fiebre vespertina, sudoración nocturna, pérdida de peso y cavidad apical derecha. ¿Estudio inicial?', opts: ['Biopsia pulmonar', 'Baciloscopias de esputo y Xpert MTB/RIF', 'Solo PPD', 'Broncoscopia de entrada', 'Hemocultivo'], ans: 1,
      exp: 'Sospecha de TB pulmonar: esputo para BAAR, prueba molecular y cultivo.', why: ['No es el inicial.', '', 'No distingue activa y no es diagnóstica.', 'Solo si no hay esputo.', 'No.'], ref: 'ATS/CDC/IDSA 2016' }),
    q({ id: 'tb-02', dif: 1, stem: '¿Cuál es el esquema de tratamiento para TB pulmonar sensible?', opts: ['Isoniazida 9 meses', '2 meses RIPE + 4 meses rifampicina e isoniazida', 'RIPE 12 meses', 'Rifampicina sola 4 meses', 'Moxifloxacino solo'], ans: 1,
      exp: 'Seis meses: fase intensiva con 4 fármacos y fase de sostén con 2.', why: ['Es para latente.', '', 'Innecesario.', 'Es para latente.', 'Insuficiente.'], ref: 'WHO 2022' }),
    q({ id: 'tb-03', dif: 2, stem: 'Paciente en tratamiento antifímico con disminución de la agudeza visual y de la visión de colores. ¿Fármaco responsable?', opts: ['Isoniazida', 'Rifampicina', 'Pirazinamida', 'Etambutol', 'Piridoxina'], ans: 3,
      exp: 'El etambutol causa neuritis óptica retrobulbar; suspenderlo.', why: ['Neuropatía periférica.', 'Fluidos naranjas.', 'Gota.', '', 'Es preventivo.'], ref: 'ATS/CDC/IDSA 2016' }),
    q({ id: 'tb-04', dif: 2, stem: 'Paciente con TB que refiere parestesias en pies durante el tratamiento. ¿Qué agregas?', opts: ['Etambutol', 'Piridoxina (vitamina B6)', 'Vitamina B12', 'Prednisona', 'Suspender todo'], ans: 1,
      exp: 'La isoniazida produce déficit de B6 y neuropatía periférica.', why: ['No.', '', 'No.', 'No.', 'No.'], ref: 'ATS/CDC/IDSA 2016' }),
    q({ id: 'tb-05', dif: 2, stem: 'Mujer en tratamiento antifímico que se embaraza pese a usar anticonceptivos orales. ¿Explicación?', opts: ['Isoniazida', 'Rifampicina induce el CYP450 y reduce el anticonceptivo', 'Pirazinamida', 'Etambutol', 'Coincidencia'], ans: 1,
      exp: 'La rifampicina acelera el metabolismo de anticonceptivos, warfarina, antirretrovirales, etc.', why: ['Inhibe el CYP.', '', 'No.', 'No.', 'Es interacción conocida.'], ref: 'ATS/CDC/IDSA 2016' }),
    q({ id: 'tb-06', dif: 2, stem: 'Enfermera con PPD de 13 mm, asintomática, RX normal. ¿Conducta?', opts: ['Nada', 'Tratar TB latente (3HP, 4R o isoniazida)', 'RIPE 6 meses', 'Repetir PPD en 5 años', 'BCG'], ans: 1,
      exp: 'Personal de salud: ≥10 mm es positivo; RX normal = latente.', why: ['Riesgo de reactivación.', '', 'Es para activa.', 'No.', 'No sirve.'], ref: 'CDC 2020' }),
    q({ id: 'tb-07', dif: 2, stem: 'Paciente con VIH con PPD de 7 mm y RX normal. ¿Interpretación?', opts: ['Negativo', 'Positivo: tratar TB latente', 'Indeterminado', 'Falso positivo', 'TB activa'], ans: 1,
      exp: 'En VIH el corte es ≥5 mm.', why: ['Incorrecto.', '', 'No.', 'No.', 'RX normal.'], ref: 'CDC 2020' }),
    q({ id: 'tb-08', dif: 2, stem: 'Paciente que iniciará adalimumab. IGRA positivo, RX normal. ¿Qué haces?', opts: ['Iniciar adalimumab sin más', 'Tratar TB latente antes (idealmente ≥1 mes antes de iniciar)', 'Contraindicar para siempre', 'RIPE 6 meses', 'Repetir IGRA'], ans: 1,
      exp: 'Los anti-TNF reactivan TB; se trata la latente antes o al iniciar.', why: ['Riesgo alto de reactivación.', '', 'No es necesario.', 'Es para activa.', 'No.'], ref: 'CDC 2020' }),
    q({ id: 'tb-09', dif: 2, stem: 'Paciente en tratamiento con RIPE con ALT 6 veces lo normal sin síntomas. ¿Conducta?', opts: ['Continuar igual', 'Suspender los fármacos hepatotóxicos y reintroducir uno por uno al normalizar', 'Duplicar dosis', 'Solo agregar piridoxina', 'Cambiar a esteroides'], ans: 1,
      exp: 'Suspender si ALT >5× sin síntomas o >3× con síntomas; reintroducir secuencialmente.', why: ['Riesgo de falla hepática.', '', 'No.', 'No resuelve.', 'No.'], ref: 'ATS/CDC/IDSA 2016' }),
    q({ id: 'tb-10', dif: 2, stem: 'Paciente con TB meníngea. ¿Qué se agrega al antifímico?', opts: ['Nada', 'Dexametasona', 'Antibiótico de amplio espectro', 'Inmunoglobulina', 'Anticoagulante'], ans: 1,
      exp: 'El esteroide reduce mortalidad en TB meníngea; el tratamiento dura 9–12 meses.', why: ['Incompleto.', '', 'No.', 'No.', 'No.'], ref: 'WHO 2022' }),
    q({ id: 'tb-11', dif: 1, stem: '¿Cuál es el estándar de oro para el diagnóstico de TB?', opts: ['Baciloscopia', 'Cultivo', 'PPD', 'IGRA', 'RX'], ans: 1,
      exp: 'El cultivo es más sensible y permite antibiograma; tarda semanas.', why: ['Menos sensible.', '', 'Infección, no enfermedad.', 'Infección, no enfermedad.', 'No.'], ref: 'ATS/CDC/IDSA 2016' }),
    q({ id: 'tb-12', dif: 2, stem: 'Xpert detecta M. tuberculosis con resistencia a rifampicina. ¿Qué implica?', opts: ['Tratar con RIPE igual', 'TB resistente (probable MDR): régimen para TB resistente y referir', 'Solo isoniazida', 'Nada', 'Repetir en 6 meses'], ans: 1,
      exp: 'La resistencia a rifampicina predice MDR; se usan regímenes como BPaLM.', why: ['Fracasará.', '', 'Genera más resistencia.', 'No.', 'No.'], ref: 'WHO 2022' }),
    q({ id: 'tb-13', dif: 2, stem: 'Paciente con TB que en el tratamiento presenta dolor e inflamación del primer ortejo con ácido úrico alto. ¿Fármaco?', opts: ['Isoniazida', 'Rifampicina', 'Pirazinamida', 'Etambutol', 'Piridoxina'], ans: 2,
      exp: 'La pirazinamida reduce la excreción de ácido úrico.', why: ['No.', 'No.', '', 'Puede elevarlo poco; el clásico es la pirazinamida.', 'No.'], ref: 'ATS/CDC/IDSA 2016' }),
    q({ id: 'tb-14', dif: 2, stem: '¿Qué estudio pides a todo paciente recién diagnosticado con TB?', opts: ['TC de cráneo', 'Prueba de VIH (y glucosa)', 'Colonoscopia', 'Ecocardiograma', 'Densitometría'], ans: 1,
      exp: 'El VIH cambia el pronóstico y el manejo (TAR); la DM es factor de riesgo común en México.', why: ['No.', '', 'No.', 'No.', 'No.'], ref: 'WHO 2022' }),
    q({ id: 'tb-15', dif: 2, stem: 'Niño con dolor lumbar, giba dorsal y destrucción de dos cuerpos vertebrales con absceso paravertebral. ¿Diagnóstico?', opts: ['Osteomielitis por S. aureus', 'Mal de Pott (TB vertebral)', 'Leucemia', 'Escoliosis', 'Fractura'], ans: 1,
      exp: 'Espondilitis tuberculosa: afecta discos y cuerpos contiguos con abscesos fríos; tratamiento antifímico prolongado.', why: ['Posible, pero el cuadro es típico de Pott.', '', 'No.', 'No.', 'No.'], ref: 'WHO 2022' })
  ]
};
