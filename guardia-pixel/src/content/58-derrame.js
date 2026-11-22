// Tema 59 · Derrame pleural (Neumología, semana 10)
const T = { topic: 'derrame', subj: 'neumo' };
const q = (o) => ({ ...T, ...o });
const SRC = { short: 'De tu Guía Neumo', vs: 'tu guía', name: 'Guía Neumo · Ximena Cors Cepeda (EMIS 5)', url: 'https://docs.google.com/document/d/1by5z7_drpzSNZPiEH1e9SHIx5ui6osaTPySJ1mnDAWg/edit' };

export default {
  lessons: {
    derrame: {
      hook: 'Ante un derrame: ¿trasudado o exudado? Lo deciden los criterios de Light (proteínas y DHL). El trasudado se trata tratando la causa (IC, cirrosis); el exudado se estudia. Y si un derrame paraneumónico tiene pH <7.2, glucosa <60 o pus: sonda.',
      nn: [], yt: 'pleural effusion Light criteria parapneumonic empyema',
      video: [
        { ch: 'Light', sc: [
          { v: { k: 'title', t: 'Derrame pleural', s: 'Semana 10 · Neumología' },
            say: 'Semana diez: el derrame pleural. Se acumula líquido entre las pleuras porque se produce de más o se absorbe de menos. En la exploración hay matidez, vibraciones disminuidas y murmullo abolido.' },
          { v: { k: 'vs', a: 'Trasudado', b: 'Exudado', rows: [['Mecanismo', 'Presión: hidrostática u oncótica', 'Permeabilidad: inflamación'], ['Causas', 'IC, cirrosis, nefrótico', 'Neumonía, cáncer, TB, TEP'], ['Light', 'Ninguno positivo', 'Al menos uno positivo']] },
            say: 'El trasudado se debe a presiones: insuficiencia cardiaca, la causa más común, cirrosis o síndrome nefrótico. El exudado se debe a inflamación: neumonía, cáncer, tuberculosis o embolia.' },
          { v: { k: 'list', t: 'Criterios de Light: exudado si', items: ['Proteínas pleura entre suero mayor de 0.5', 'DHL pleura entre suero mayor de 0.6', 'DHL pleural mayor de dos tercios del límite superior'] },
            say: 'Criterios de Light: es exudado si cumple al menos uno. Proteínas del líquido entre las del suero mayor de cero punto cinco. DHL del líquido entre la del suero mayor de cero punto seis. O DHL pleural mayor de dos tercios del límite superior normal.' }
        ] },
        { ch: 'Qué hacer', sc: [
          { v: { k: 'list', t: 'Paraneumónico: sonda si', items: ['pH menor de 7.2', 'Glucosa menor de 60', 'Gram o cultivo positivo', 'Pus: empiema', 'Loculado'] },
            say: 'En el derrame paraneumónico, se coloca sonda pleural si el pH es menor de siete punto dos, la glucosa menor de sesenta, el Gram o cultivo es positivo, hay pus, o está tabicado.' },
          { v: { k: 'tip', kind: 'trap', t: 'Los diuréticos en IC pueden convertir un trasudado en “seudoexudado”: usa el gradiente de albúmina (>1.2 = trasudado).' },
            say: 'Cuidado: un paciente con insuficiencia cardiaca que ya recibió diuréticos puede parecer exudado por Light. Usa el gradiente de albúmina suero pleura: mayor de uno punto dos indica trasudado.' },
          { v: { k: 'mnemo', t: 'Light: 0.5 – 0.6 – 2/3', d: 'Proteínas >0.5, DHL >0.6, DHL >2/3 del límite superior: uno basta para exudado.' },
            say: 'Llévate los números de Light: cero punto cinco, cero punto seis y dos tercios.' }
        ] }
      ],
      sections: [
        { h: 'Causas y clínica', html: `
<ul>
<li><b>Trasudado</b> (↑ hidrostática o ↓ oncótica, bilateral): <b>IC</b> (la causa #1 de derrame), cirrosis (hidrotórax hepático, derecho), síndrome nefrótico, diálisis peritoneal, hipoalbuminemia, atelectasia.</li>
<li><b>Exudado</b> (↑ permeabilidad): <b>paraneumónico</b> (#1 exudado), <b>cáncer</b> (pulmón, mama, linfoma; causa #1 de derrame masivo), <b>TB</b>, TEP, pancreatitis (amilasa), LES/AR (glucosa muy baja en AR), post-cardiotomía, quilotórax, hemotórax.</li>
<li>Clínica: disnea, dolor pleurítico, tos seca; <b>matidez</b>, vibraciones vocales <b>disminuidas</b>, murmullo abolido, frote pleural.</li>
<li>Imagen: RX (borramiento del ángulo costofrénico &gt;200 mL en PA; decúbito lateral detecta &gt;50 mL), <b>USG</b> (más sensible y guía la punción), TC (pleura y parénquima).</li>
</ul>` },
        { h: 'Toracocentesis y análisis', html: `
<ul>
<li>Indicada en derrame nuevo de causa no clara con espesor &gt;1 cm en decúbito/USG. No es necesaria en IC típica bilateral que responde a diuréticos.</li>
<li><b>Criterios de Light</b> (exudado si ≥1): proteínas pleura/suero <b>&gt;0.5</b>; DHL pleura/suero <b>&gt;0.6</b>; DHL pleural <b>&gt;2/3</b> del límite superior normal sérico. Si el paciente con IC recibió diuréticos: <b>gradiente de albúmina suero-pleura &gt;1.2 g/dL</b> o NT-proBNP alto → trasudado.</li>
<li>Pistas: <b>pH &lt;7.2</b> y glucosa &lt;60 → empiema, AR, TB, cáncer, rotura esofágica. <b>Linfocitos</b> → TB, cáncer, linfoma; <b>ADA &gt;40</b> → TB. <b>Amilasa</b> alta → pancreatitis o rotura esofágica. <b>Triglicéridos &gt;110</b> → quilotórax (conducto torácico: trauma, linfoma). Hematocrito pleural &gt;50 % del sérico → hemotórax. Citología para cáncer (repetir si negativa; biopsia por toracoscopia).</li>
</ul>` },
        { h: 'Derrame paraneumónico y empiema', html: `
<div class="tablewrap"><table class="mini">
<tr><th>Tipo</th><th>Características</th><th>Manejo</th></tr>
<tr><td>No complicado</td><td>pH ≥7.2, glucosa ≥60, Gram/cultivo negativos, libre</td><td>Solo antibiótico</td></tr>
<tr><td><b>Complicado</b></td><td><b>pH &lt;7.2</b>, glucosa &lt;60, DHL &gt;1000, loculado o Gram/cultivo +</td><td>Antibiótico + <b>sonda pleural</b></td></tr>
<tr><td><b>Empiema</b></td><td>Pus franco</td><td>Sonda; fibrinolíticos (tPA + DNasa) si está tabicado; <b>toracoscopia/decorticación</b> si falla</td></tr>
</table></div>` },
        { h: 'Otros escenarios', html: `
<ul>
<li><b>Derrame maligno</b> recurrente sintomático: toracocentesis evacuadora (máx 1–1.5 L por vez: edema por reexpansión), <b>catéter pleural tunelizado</b> o <b>pleurodesis</b> (talco).</li>
<li><b>Hemotórax</b>: sonda de grueso calibre; toracotomía si drena &gt;1.5 L de entrada o &gt;200 mL/h.</li>
<li><b>Quilotórax</b>: dieta con triglicéridos de cadena media, octreotida, ligadura del conducto torácico.</li>
<li><b>Pleuritis tuberculosa</b>: exudado linfocítico, ADA alta; cultivo del líquido poco sensible → biopsia pleural; RIPE.</li>
</ul>` },
        { h: 'Cómo lo preguntan en el examen', html: `
<ul>
<li>Derrame bilateral en IC descompensada → <b>trasudado</b>: diurético, sin punción.</li>
<li>Proteínas 0.7 y DHL 0.8 de la relación → <b>exudado</b>.</li>
<li>Neumonía con derrame de pH 7.05 → <b>sonda pleural</b>.</li>
<li>Exudado linfocítico con ADA 70 → <b>TB pleural</b>.</li>
<li>Líquido lechoso con triglicéridos 300 → <b>quilotórax</b>.</li>
<li>Derrame con glucosa muy baja en mujer con artritis → <b>AR</b>.</li>
</ul>` }
      ],
      mnemo: { t: 'Light: 0.5 · 0.6 · 2/3', d: 'Proteínas pleura/suero >0.5, DHL pleura/suero >0.6, DHL pleural >2/3 del límite superior: con uno basta para exudado.' },
      pearl: 'La IC es la causa más común de derrame pleural (trasudado bilateral); la neumonía es la causa más común de exudado.',
      trap: 'Los criterios de Light clasifican como exudado hasta 25 % de los trasudados por IC tratados con diuréticos: usa el gradiente de albúmina (>1.2 = trasudado).',
      guide: [
        'BTS 2023: el USG torácico es obligatorio para guiar la toracocentesis; los fibrinolíticos intrapleurales (tPA + DNasa) se usan en infección pleural loculada.',
        'Tu guía usa pH <7 para empiema y pH >7.2 como simple; el corte práctico para colocar sonda es pH <7.2.'
      ],
      refs: [
        'Light RW. Pleural effusion. N Engl J Med 2002.',
        'Roberts ME, et al. British Thoracic Society Guideline for pleural disease. Thorax 2023.',
        'Rahman NM, et al. Intrapleural use of tissue plasminogen activator and DNase in pleural infection (MIST2). N Engl J Med 2011.'
      ]
    }
  },

  guias: {
    derrame: { src: SRC,
      puntos: [
        'Trasudado: ICC, cirrosis, nefrótico, ERC (bilateral). Exudado: infecciones, neoplasias, TEP, autoinmunes, trauma, pancreatitis, hemotórax, quilotórax.',
        'Criterios de Light: proteínas &gt;0.5, DHL &gt;0.6, DHL &gt;2/3 del límite superior; colesterol &gt;55 sugiere exudado.',
        'Linfocítico: neoplasia, TB, ICC, quilotórax; neutrofílico: paraneumónico, TEP; ADA: TB; triglicéridos &gt;100: quilotórax.',
        'Paraneumónico simple (pH &gt;7.2, glucosa &gt;40) → antibiótico; complicado (pH &lt;7, glucosa &lt;40) y empiema → sonda, fibrinolíticos, decorticación.',
        'Toracocentesis si hay &gt;10 mm en decúbito lateral; evacuadora 400–500 mL; pleurodesis con talco o doxiciclina.'
      ],
      ojo: ['El corte práctico para colocar sonda en un paraneumónico es <b>pH &lt;7.2</b> o glucosa &lt;60 (BTS), no pH &lt;7.'],
      cards: [['Gradiente de albúmina suero-pleura >1.2', 'Trasudado (aunque Light diga exudado tras diuréticos)']] }
  },

  cards: [
    ['Causa #1 de derrame pleural', 'Insuficiencia cardiaca (trasudado)'],
    ['Causa #1 de exudado', 'Derrame paraneumónico'],
    ['Causa #1 de derrame masivo', 'Cáncer'],
    ['Criterios de Light (exudado)', 'Proteínas P/S >0.5, DHL P/S >0.6, DHL >2/3 del límite superior'],
    ['Exploración del derrame', 'Matidez, vibraciones disminuidas, murmullo abolido'],
    ['Paraneumónico complicado', 'pH <7.2, glucosa <60, Gram/cultivo + o loculado → sonda'],
    ['Empiema', 'Pus: sonda ± fibrinolíticos; decorticación si falla'],
    ['ADA >40 con linfocitos', 'Pleuritis tuberculosa'],
    ['Triglicéridos >110 en líquido', 'Quilotórax'],
    ['Amilasa alta en líquido', 'Pancreatitis o rotura esofágica'],
    ['Glucosa muy baja en líquido', 'Empiema, AR, TB, cáncer'],
    ['Derrame maligno recurrente', 'Catéter tunelizado o pleurodesis']
  ],

  questions: [
    q({ id: 'derrame-01', dif: 1, stem: 'Paciente con IC descompensada y derrame pleural bilateral pequeño. ¿Conducta?', opts: ['Toracocentesis diagnóstica obligatoria', 'Tratar la IC con diurético y vigilar', 'Sonda pleural', 'Pleurodesis', 'Antibiótico'], ans: 1,
      exp: 'Derrame bilateral típico de IC: trasudado; se punciona solo si es atípico, unilateral, con fiebre o no responde.', why: ['No en el caso típico.', '', 'No.', 'No.', 'No hay infección.'], ref: 'BTS 2023' }),
    q({ id: 'derrame-02', dif: 2, stem: 'Líquido pleural: proteínas 4.2 (suero 6.5), DHL 260 (suero 300; límite superior 220). ¿Clasificación?', opts: ['Trasudado', 'Exudado', 'Quilotórax', 'Hemotórax', 'Indeterminado'], ans: 1,
      exp: 'Proteínas 4.2/6.5 = 0.65 (>0.5) y DHL 260/300 = 0.87 (>0.6): exudado.', why: ['Cumple criterios de exudado.', '', 'No hay datos.', 'No hay datos.', 'Es clasificable.'], ref: 'Light, NEJM 2002' }),
    q({ id: 'derrame-03', dif: 2, stem: 'Paciente con neumonía y derrame: pH 7.05, glucosa 35, Gram negativo. ¿Conducta?', opts: ['Solo antibiótico', 'Antibiótico + sonda pleural', 'Pleurodesis', 'Diurético', 'Observar'], ans: 1,
      exp: 'Derrame paraneumónico complicado (pH <7.2): drenaje con sonda.', why: ['Fracasa con pH bajo.', '', 'No.', 'No.', 'No.'], ref: 'BTS 2023' }),
    q({ id: 'derrame-04', dif: 2, stem: 'Exudado linfocítico con ADA 85 en un joven con fiebre y pérdida de peso. ¿Diagnóstico?', opts: ['Derrame maligno', 'Pleuritis tuberculosa', 'Paraneumónico', 'Quilotórax', 'IC'], ans: 1,
      exp: 'ADA >40 con predominio linfocítico es muy sugestivo de TB pleural.', why: ['ADA no tan alta típicamente.', '', 'Predominio neutrofílico.', 'Triglicéridos altos.', 'Trasudado.'], ref: 'BTS 2023' }),
    q({ id: 'derrame-05', dif: 2, stem: 'Líquido pleural lechoso con triglicéridos de 320 mg/dL tras cirugía torácica. ¿Diagnóstico?', opts: ['Empiema', 'Quilotórax', 'Seudoquilotórax', 'Hemotórax', 'Trasudado'], ans: 1,
      exp: 'Triglicéridos >110 (con quilomicrones): lesión del conducto torácico.', why: ['Pus, no lechoso.', '', 'Tiene colesterol alto, no TG.', 'Sangre.', 'No.'], ref: 'BTS 2023' }),
    q({ id: 'derrame-06', dif: 2, stem: 'Paciente con IC tratado con furosemida; Light clasifica su derrame como exudado, pero el gradiente de albúmina suero-pleura es 1.6. ¿Interpretación?', opts: ['Exudado real', 'Trasudado (efecto de los diuréticos)', 'Empiema', 'Cáncer', 'TB'], ans: 1,
      exp: 'Los diuréticos concentran el líquido; un gradiente de albúmina >1.2 indica trasudado.', why: ['Probablemente falso exudado.', '', 'No.', 'No.', 'No.'], ref: 'BTS 2023' }),
    q({ id: 'derrame-07', dif: 1, stem: '¿Qué hallazgo de exploración física es típico del derrame pleural?', opts: ['Hiperresonancia', 'Matidez con vibraciones vocales disminuidas', 'Vibraciones aumentadas', 'Soplo tubario intenso', 'Estertores crepitantes finos'], ans: 1,
      exp: 'El líquido amortigua la transmisión de las vibraciones.', why: ['Neumotórax.', '', 'Consolidación.', 'Consolidación.', 'Edema o fibrosis.'], ref: 'Light, NEJM 2002' }),
    q({ id: 'derrame-08', dif: 2, stem: 'Empiema loculado que no drena bien con la sonda. ¿Siguiente paso?', opts: ['Retirar la sonda', 'Fibrinolíticos intrapleurales (tPA + DNasa) o toracoscopia/decorticación', 'Diurético', 'Pleurodesis', 'Antibiótico oral solo'], ans: 1,
      exp: 'Infección pleural loculada: fibrinolíticos; si fallan, cirugía (VATS).', why: ['No.', '', 'No.', 'Contraindicada con infección.', 'Insuficiente.'], ref: 'MIST2, NEJM 2011' }),
    q({ id: 'derrame-09', dif: 2, stem: 'Mujer con cáncer de mama y derrame pleural masivo recurrente que la limita. ¿Manejo?', opts: ['Toracocentesis de 4 L de una vez', 'Catéter pleural tunelizado o pleurodesis con talco', 'Diurético', 'Antibiótico', 'Observación'], ans: 1,
      exp: 'Derrame maligno recurrente sintomático: catéter tunelizado o pleurodesis.', why: ['Riesgo de edema por reexpansión (máx 1–1.5 L).', '', 'No.', 'No.', 'Sintomática.'], ref: 'BTS 2023' }),
    q({ id: 'derrame-10', dif: 2, stem: 'Derrame izquierdo con amilasa muy elevada y pH 6.8 tras vómito intenso; dolor torácico. ¿Sospecha?', opts: ['Pancreatitis', 'Rotura esofágica (Boerhaave)', 'Neumonía', 'IC', 'TB'], ans: 1,
      exp: 'Amilasa salival y pH muy bajo con contexto de vómito: perforación esofágica. Urgencia quirúrgica.', why: ['Posible, pero el pH tan bajo y el vómito sugieren Boerhaave.', '', 'No.', 'No.', 'No.'], ref: 'BTS 2023' }),
    q({ id: 'derrame-11', dif: 2, stem: '¿Cuál es el mejor método de imagen para guiar una toracocentesis?', opts: ['RX PA', 'Ultrasonido', 'TC', 'RM', 'Gammagrama'], ans: 1,
      exp: 'El USG localiza el líquido, detecta tabiques y reduce complicaciones (neumotórax).', why: ['Menos preciso.', '', 'No guía en tiempo real.', 'No.', 'No.'], ref: 'BTS 2023' }),
    q({ id: 'derrame-12', dif: 2, stem: 'Mujer con AR seropositiva y derrame exudado con glucosa de 15 mg/dL, cultivo negativo. ¿Causa?', opts: ['Lupus', 'Derrame reumatoide', 'IC', 'Cirrosis', 'Nefrótico'], ans: 1,
      exp: 'La AR da exudados con glucosa muy baja y pH bajo (también colesterol alto, seudoquilotórax).', why: ['Glucosa no tan baja.', '', 'Trasudado.', 'Trasudado.', 'Trasudado.'], ref: 'Light, NEJM 2002' }),
    q({ id: 'derrame-13', dif: 2, stem: 'Paciente con trauma torácico; la sonda drena 1,700 mL de sangre al colocarla. ¿Conducta?', opts: ['Observar', 'Toracotomía', 'Diurético', 'Pleurodesis', 'Retirar la sonda'], ans: 1,
      exp: 'Hemotórax masivo (>1.5 L inicial o >200 mL/h): toracotomía.', why: ['Peligroso.', '', 'No.', 'No.', 'No.'], ref: 'BTS 2023' }),
    q({ id: 'derrame-14', dif: 2, stem: 'Derrame exudado linfocítico con citología negativa en un fumador con pérdida de peso. ¿Siguiente paso si persiste la sospecha?', opts: ['Alta', 'Repetir citología y biopsia pleural (toracoscopia)', 'Antibiótico', 'Diurético', 'Pleurodesis sin diagnóstico'], ans: 1,
      exp: 'La citología detecta ~60 % de los derrames malignos; la toracoscopia aumenta el rendimiento.', why: ['Riesgo de perder un cáncer.', '', 'No.', 'No.', 'Primero diagnóstico.'], ref: 'BTS 2023' }),
    q({ id: 'derrame-15', dif: 1, stem: '¿Cuál es el mecanismo del trasudado?', opts: ['Aumento de la permeabilidad capilar', 'Aumento de la presión hidrostática o disminución de la oncótica', 'Infección', 'Cáncer', 'Lesión del conducto torácico'], ans: 1,
      exp: 'IC (hidrostática), cirrosis y nefrótico (oncótica).', why: ['Es exudado.', '', 'Exudado.', 'Exudado.', 'Quilotórax.'], ref: 'Light, NEJM 2002' })
  ]
};
