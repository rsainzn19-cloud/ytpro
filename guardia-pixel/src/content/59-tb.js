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
        { ch: 'El bacilo y sus formas', sc: [
          { v: { k: 'title', t: 'Tuberculosis', s: 'Semana 11 · Neumología' },
            say: 'Semana once: la tuberculosis. México sigue siendo zona endémica y la diabetes es el factor de riesgo que más la empuja aquí. En este video vas a aprender a sospecharla, confirmarla, tratarla con el esquema correcto, reconocer los efectos adversos de cada fármaco y manejar la forma latente.' },
          { v: { k: 'case', t: 'Tos y sudores', p: { name: 'Fernando', age: 45, sex: 'H', skin: '#C98B62', hair: '#2A1A12', gown: '#9FD8FF' }, text: 'Diabético mal controlado. Tos de 5 semanas, hemoptisis, fiebre vespertina y sudoración nocturna. Bajó 8 kg. Rx: cavitación apical derecha.', vit: { Tos: '5 sem', Peso: '−8 kg', A1c: '10.2%' } },
            say: 'Conoce a Fernando, de cuarenta y cinco años, diabético con mal control. Tiene cinco semanas con tos, a veces con sangre, fiebre por las tardes, sudoración que le moja la almohada y bajó ocho kilos. La radiografía muestra una cavidad en el vértice derecho.' },
          { v: { k: 'vs', a: 'Primaria', b: 'Reactivación', rows: [['Cuándo', 'Primer contacto', 'Años después, al bajar las defensas'], ['Lugar', 'Lóbulos medios e inferiores', 'Lóbulos superiores, apicales'], ['Imagen', 'Complejo de Ghon: foco + ganglio hiliar', 'Cavitación, árbol en gemación'], ['Evolución', 'Casi siempre se controla: latente', 'Contagiosa si cavita']] },
            say: 'Mycobacterium tuberculosis se contagia por aerosoles. En el primer contacto produce el complejo de Ghon: un foco en los lóbulos medios o inferiores más un ganglio hiliar, y casi siempre el sistema inmune lo encierra en granulomas: es la tuberculosis latente. Años después, si bajan las defensas, se reactiva en los lóbulos superiores, donde hay más oxígeno, y cava cavidades llenas de bacilos.' },
          { v: { k: 'list', t: 'Riesgo de reactivación', items: ['VIH: el mayor', 'Diabetes (muy frecuente en México)', 'Anti-TNF, esteroides, trasplante', 'ERC en diálisis, silicosis', 'Desnutrición, alcohol'] },
            say: 'El mayor riesgo de reactivación es el VIH. Le siguen la diabetes, los anti TNF como infliximab, los esteroides y los trasplantes, la enfermedad renal en diálisis, la silicosis, la desnutrición y el alcohol.' },
          { v: { k: 'list', t: 'Formas extrapulmonares', items: ['Ganglionar (escrófula): la más común', 'Pleural: exudado linfocítico, ADA alta', 'Meníngea: base del cráneo, pares craneales', 'Pott: vertebral', 'Renal: piuria estéril; miliar: diseminada'] },
            say: 'Fuera del pulmón, la más común es la ganglionar, la escrófula en el cuello. La pleural da un exudado linfocítico con adenosina desaminasa alta. La meníngea afecta la base del cráneo y los pares craneales. El mal de Pott es vertebral, la renal da piuria estéril y la miliar es diseminada, con micronódulos en todo el pulmón.' }
        ] },
        { ch: 'Diagnóstico', sc: [
          { v: { k: 'list', t: 'Sospecha', items: ['Tos de más de 2 a 3 semanas', 'Fiebre vespertina', 'Sudoración nocturna', 'Pérdida de peso', 'Hemoptisis'] },
            say: 'Sospecha tuberculosis ante tos de más de dos o tres semanas, sobre todo con fiebre vespertina, sudoración nocturna, pérdida de peso y hemoptisis.' },
          { v: { k: 'flow', t: 'Confirmar', steps: ['Esputo: Xpert MTB/RIF', 'Baciloscopia seriada (3 muestras)', 'Cultivo con antibiograma: estándar de oro', 'Sin esputo: inducido o lavado bronquial', 'Toda TB: prueba de VIH y glucosa'] },
            say: 'Se confirma en esputo. La prueba molecular Xpert da resultado en dos horas y detecta resistencia a rifampicina. La baciloscopia con Ziehl Neelsen es barata, en tres muestras. El estándar de oro es el cultivo con antibiograma, que tarda de dos a seis semanas. Si no expectora, esputo inducido o lavado broncoalveolar. Y a todo paciente con tuberculosis se le pide prueba de VIH y glucosa.' },
          { v: { k: 'quiz', q: 'Fernando: Xpert detecta M. tuberculosis, sin resistencia a rifampicina. ¿Esquema?', opts: ['Isoniazida sola 9 meses', 'RIPE 2 meses y luego rifampicina más isoniazida 4 meses', 'Levofloxacino 14 días'], a: 1 },
            say: 'Pausa. El Xpert de Fernando detecta tuberculosis sensible a rifampicina. ¿Qué esquema le das?',
            exp: 'Dos meses de rifampicina, isoniazida, pirazinamida y etambutol, y después cuatro meses de rifampicina con isoniazida, supervisado. La isoniazida sola es para la forma latente; darla en enfermedad activa genera resistencia.' }
        ] },
        { ch: 'Tratamiento', sc: [
          { v: { k: 'big', h: 'Esquema de TB sensible', t: '2 RIPE + 4 RI', s: 'Fase intensiva de 2 meses y sostén de 4. Supervisado (TAES). Piridoxina con isoniazida.' },
            say: 'El esquema estándar dura seis meses. Fase intensiva de dos meses con cuatro fármacos: rifampicina, isoniazida, pirazinamida y etambutol. Fase de sostén de cuatro meses con rifampicina e isoniazida. Siempre supervisado, el tratamiento acortado estrictamente supervisado, y con piridoxina para proteger los nervios de la isoniazida.' },
          { v: { k: 'vs', a: 'Fármaco', b: 'Efecto adverso clave', rows: [['Isoniazida', 'Neuropatía por déficit de B6', 'Hepatitis, lupus inducido'], ['Rifampicina', 'Orina y lágrimas naranjas', 'Inductor: falla el anticonceptivo'], ['Pirazinamida', 'Hiperuricemia y gota', 'La más hepatotóxica'], ['Etambutol', 'Neuritis óptica', 'Pierde la visión de colores']] },
            say: 'Los efectos adversos son pregunta segura. Isoniazida: neuropatía periférica por déficit de vitamina B seis, hepatitis y lupus inducido. Rifampicina: pinta de naranja la orina y las lágrimas, y es un gran inductor del citocromo, así que falla el anticonceptivo y baja la warfarina. Pirazinamida: hiperuricemia y gota, y es la más hepatotóxica. Etambutol: neuritis óptica, con pérdida de la visión de colores.' },
          { v: { k: 'list', t: 'Cuándo se alarga', items: ['Meníngea: 9 a 12 meses + dexametasona', 'Ósea o Pott: 6 a 9 meses', 'Cavitada con cultivo positivo a los 2 meses: 9 meses', 'Pericárdica: valorar esteroide'] },
            say: 'El tratamiento se alarga en la forma meníngea, nueve a doce meses con dexametasona; en la ósea, seis a nueve meses; y en la cavitada que sigue con cultivo positivo a los dos meses, nueve meses.' },
          { v: { k: 'list', t: 'Hepatotoxicidad', items: ['Suspender si ALT 3 veces con síntomas', 'O 5 veces sin síntomas', 'Reintroducir uno por uno', 'Primero rifampicina, luego isoniazida'] },
            say: 'Si las transaminasas suben tres veces con síntomas, o cinco veces sin ellos, se suspende todo. Cuando bajen, se reintroducen uno por uno: primero rifampicina, luego isoniazida, para encontrar al culpable, que con frecuencia es la pirazinamida.' },
          { v: { k: 'quiz', q: 'Mujer en el mes 2 de RIPE ya no distingue el rojo del verde. ¿Culpable?', opts: ['Isoniazida', 'Rifampicina', 'Etambutol', 'Pirazinamida'], a: 2 },
            say: 'Pausa. Una paciente en el segundo mes de tratamiento ya no distingue el rojo del verde. ¿Qué fármaco es?',
            exp: 'Etambutol. Causa neuritis óptica, y lo primero que se pierde es la visión de colores rojo y verde. Se suspende y se vigila la agudeza visual.' }
        ] },
        { ch: 'Resistencia, VIH y latente', sc: [
          { v: { k: 'list', t: 'TB resistente', items: ['RR: resistente a rifampicina', 'MDR: rifampicina + isoniazida', 'XDR: + fluoroquinolona y bedaquilina o linezolid', 'Régimen oral BPaLM 6 meses'] },
            say: 'La tuberculosis resistente se clasifica por los fármacos que fallan. Resistente a rifampicina; multirresistente si falla rifampicina e isoniazida; y extensamente resistente si además falla una fluoroquinolona y bedaquilina o linezolid. Hoy se trata con un régimen oral de seis meses: bedaquilina, pretomanid, linezolid y moxifloxacino.' },
          { v: { k: 'tip', kind: 'pearl', t: 'TB + VIH: iniciar antirretrovirales en 2 semanas (en meníngea, esperar 4 a 8). Vigila el síndrome de reconstitución inmune.' },
            say: 'Perla: en el paciente con VIH y tuberculosis, se empieza el tratamiento antifímico y los antirretrovirales se inician en las primeras dos semanas. En la meníngea se espera de cuatro a ocho semanas porque la inflamación de la reconstitución inmune puede ser grave.' },
          { v: { k: 'vs', a: 'PPD positivo si', b: 'Grupo', rows: [['5 mm o más', 'VIH, contactos, inmunosuprimidos', 'Fibrosis en Rx'], ['10 mm o más', 'Diabetes, ERC, personal de salud', 'Migrantes, niños menores de 4'], ['15 mm o más', 'Sin factores de riesgo', '—']] },
            say: 'Para la forma latente se tamiza a los grupos de riesgo. La tuberculina se lee según el paciente: cinco milímetros es positiva en VIH, contactos e inmunosuprimidos; diez en diabéticos, renales, personal de salud y migrantes; quince en personas sin factores de riesgo. En vacunados con BCG se prefiere el IGRA, como QuantiFERON.' },
          { v: { k: 'flow', t: 'PPD o IGRA positivo', steps: ['Rx de tórax y síntomas', 'Si hay datos: estudiar TB activa', 'Si es normal: TB latente', 'Tratar: 3HP, 4R o isoniazida 6 a 9 meses'] },
            say: 'Una prueba positiva no distingue latente de activa. Siempre pide radiografía y pregunta síntomas. Si la radiografía es normal y no hay síntomas, es latente y se trata: isoniazida con rifapentina semanal por tres meses, rifampicina por cuatro, o isoniazida de seis a nueve meses.' }
        ] },
        { ch: 'Cierre del caso', sc: [
          { v: { k: 'list', t: 'Fernando: final del caso', items: ['Xpert positivo, sensible a rifampicina', 'VIH negativo; insulina para la diabetes', 'RIPE supervisado + piridoxina', 'Cultivo negativo al mes 2: sigue RI 4 meses', 'Estudio de contactos en casa'] },
            say: 'Fernando tiene tuberculosis sensible. Su prueba de VIH sale negativa y se inicia insulina para controlar la diabetes. Recibe el esquema supervisado con piridoxina, su cultivo se negativiza al segundo mes y completa cuatro meses de rifampicina con isoniazida. Además se estudia a sus contactos en casa.' },
          { v: { k: 'tip', kind: 'trap', t: 'PPD positivo ≠ TB latente: primero descarta TB activa con Rx. Dar isoniazida sola a una TB activa genera resistencia.' },
            say: 'La trampa final: un PPD positivo no significa tuberculosis latente. Primero descarta la activa con radiografía, porque darle isoniazida sola a una activa genera resistencia.' },
          { v: { k: 'mnemo', t: 'RIPE 2 + RI 4', d: 'Isoniazida: nervios (B6). Rifampicina: naranja e interacciones. Pirazinamida: gota. Etambutol: ojos.' },
            say: 'Llévate esto: rifampicina, isoniazida, pirazinamida y etambutol dos meses, y rifampicina con isoniazida cuatro. Isoniazida, nervios. Rifampicina, naranja e interacciones. Pirazinamida, gota. Etambutol, ojos. Ahora practica en el taller con el algoritmo del PPD y la guardia de Fernando.' }
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
