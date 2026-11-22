// Tema 58 · Neumonía (Neumología, semana 9)
const T = { topic: 'neumonia', subj: 'neumo' };
const q = (o) => ({ ...T, ...o });
const SRC = { short: 'De tu Guía Neumo', vs: 'tu guía', name: 'Guía Neumo · Ximena Cors Cepeda (EMIS 5)', url: 'https://docs.google.com/document/d/1by5z7_drpzSNZPiEH1e9SHIx5ui6osaTPySJ1mnDAWg/edit' };

export default {
  lessons: {
    neumonia: {
      hook: 'Tos + fiebre + infiltrado nuevo = neumonía. CURB-65 decide dónde se trata; el sitio (casa, piso, UCI) y los factores de riesgo (MRSA, Pseudomonas) deciden el antibiótico. El neumococo es el #1 en todos lados.',
      nn: [], yt: 'community acquired pneumonia CURB-65 antibiotic treatment',
      video: [
        { ch: 'Diagnóstico y gravedad', sc: [
          { v: { k: 'title', t: 'Neumonía', s: 'Semana 9 · Neumología' },
            say: 'Semana nueve: la neumonía. Se diagnostica con síntomas respiratorios, fiebre y un infiltrado nuevo en la radiografía. El agente más común en la comunidad es el neumococo.' },
          { v: { k: 'case', t: 'Fiebre y tos con flema', p: { name: 'Ofelia', age: 72, sex: 'M', skin: '#E2B08A', hair: '#B0B0B0', gown: '#9FD8FF' }, text: 'Fiebre, tos con esputo herrumbroso, confusión. FR 32, PA 88/56, BUN 28. RX: consolidación en lóbulo inferior derecho.', vit: { FR: '32', PA: '88/56' } },
            say: 'Ofelia tiene setenta y dos años, fiebre, tos con esputo color óxido y está confundida. Respira treinta y dos veces por minuto, la presión es de ochenta y ocho sobre cincuenta y seis y el nitrógeno ureico está alto. Tiene una consolidación lobar.' },
          { v: { k: 'list', t: 'CURB-65', items: ['Confusión', 'Urea o BUN alto', 'FR 30 o más', 'PA baja: sistólica menor de 90 o diastólica 60 o menos', 'Edad 65 o más'] },
            say: 'CURB sesenta y cinco: confusión, urea alta, frecuencia respiratoria de treinta o más, presión baja y edad de sesenta y cinco o más. Cero a uno, casa. Dos, hospital. Tres o más, valorar terapia intensiva. Ofelia tiene cinco.' }
        ] },
        { ch: 'Antibiótico', sc: [
          { v: { k: 'vs', a: 'Ambulatorio', b: 'Hospitalizado', rows: [['Sano', 'Amoxicilina o doxiciclina (o macrólido)', '—'], ['Comorbilidad', 'Amoxi-clav más macrólido o quinolona respiratoria', 'Ceftriaxona más azitromicina o quinolona'], ['UCI', '—', 'Ceftriaxona más azitromicina o más quinolona']] },
            say: 'En casa, al paciente sano: amoxicilina o doxiciclina. Con comorbilidades: amoxicilina con clavulanato más un macrólido, o una quinolona respiratoria. Hospitalizado: ceftriaxona más azitromicina, o una quinolona respiratoria sola. En terapia intensiva, betalactámico más macrólido o quinolona.' },
          { v: { k: 'list', t: 'Cubrir más si hay riesgo', items: ['MRSA: vancomicina o linezolid', 'Pseudomonas: piperacilina-tazobactam, cefepime o meropenem', 'Aspiración: ampicilina-sulbactam'] },
            say: 'Si hay riesgo de estafilococo resistente, agrega vancomicina o linezolid. Si hay riesgo de pseudomonas, usa piperacilina tazobactam, cefepime o meropenem.' },
          { v: { k: 'tip', kind: 'pearl', t: 'Duración: mínimo 5 días y 48–72 h afebril y estable.' },
            say: 'La duración mínima es de cinco días, y el paciente debe llevar cuarenta y ocho a setenta y dos horas sin fiebre y estable.' },
          { v: { k: 'mnemo', t: 'CURB-65: 0–1 casa, 2 hospital, ≥3 UCI', d: 'Confusión, Urea, Respiración ≥30, Baja PA, edad ≥65.' },
            say: 'Llévate CURB sesenta y cinco: cero o uno a casa, dos al hospital, tres o más a terapia intensiva.' }
        ] }
      ],
      sections: [
        { h: 'Microbiología', html: `
<ul>
<li><b>NAC</b>: <b><i>S. pneumoniae</i></b> (#1; esputo herrumbroso, lobar), virus (influenza, VSR, SARS-CoV-2), <i>H. influenzae</i> (EPOC), <i>M. catarrhalis</i>, <b>atípicos</b>: <i>Mycoplasma</i> (jóvenes, tos seca, anemia hemolítica por crioaglutininas, miringitis bullosa), <i>Chlamydophila</i>, <b><i>Legionella</i></b> (agua/aire acondicionado; diarrea, <b>hiponatremia</b>, confusión; antígeno urinario).</li>
<li><i>S. aureus</i> tras influenza (cavitación, neumatoceles); <i>Klebsiella</i> en alcohólicos (“jalea de grosella”, lóbulo superior, cavitación); anaerobios en aspiración (alcohol, convulsiones, disfagia: lóbulo inferior derecho o segmentos posteriores).</li>
<li><b>Nosocomial (NIH, ≥48 h)</b> y <b>asociada a ventilador (NAV)</b>: <i>Pseudomonas</i>, enterobacterias, <i>Acinetobacter</i>, <b>MRSA</b>.</li>
<li>Inmunosuprimidos: <i>Pneumocystis</i> (VIH CD4 &lt;200), hongos, CMV, Nocardia.</li>
</ul>` },
        { h: 'Diagnóstico y gravedad', html: `
<ul>
<li>Clínica: fiebre, tos, esputo, disnea, dolor pleurítico; estertores, matidez, soplo tubario, egofonía, aumento de vibraciones. Ancianos: confusión o caídas sin fiebre.</li>
<li><b>RX de tórax</b> (infiltrado nuevo) confirma. TC si hay duda. Labs: BH, química, PCR, procalcitonina (ayuda a suspender antibiótico), gasometría si hay hipoxemia.</li>
<li>Microbiología: no de rutina en NAC ambulatoria; en hospitalizados graves o con riesgo de MRSA/Pseudomonas: hemocultivos, esputo (≥25 PMN y &lt;10 células epiteliales), antígenos urinarios (neumococo, Legionella), PCR de virus (influenza/COVID).</li>
<li><b>CURB-65</b>: Confusión, Urea &gt;7 mmol/L (BUN &gt;19–20), FR ≥30, PAS &lt;90 o PAD ≤60, edad ≥65. <b>0–1 ambulatorio · 2 hospital · ≥3 considerar UCI</b>. PSI/PORT es más completo.</li>
<li>Criterios de <b>UCI (IDSA/ATS)</b>: mayores = choque con vasopresor o ventilación mecánica; o ≥3 menores (FR ≥30, PaO₂/FiO₂ ≤250, multilobar, confusión, BUN ≥20, leucocitos &lt;4000, plaquetas &lt;100,000, T &lt;36 °C, hipotensión que requiere líquidos agresivos).</li>
</ul>` },
        { h: 'Tratamiento empírico (IDSA/ATS 2019)', html: `
<div class="tablewrap"><table class="mini">
<tr><th>Escenario</th><th>Antibiótico</th></tr>
<tr><td>Ambulatorio sano</td><td><b>Amoxicilina</b> 1 g c/8 h o doxiciclina (macrólido solo si resistencia de neumococo &lt;25 %)</td></tr>
<tr><td>Ambulatorio con comorbilidades</td><td><b>Amoxicilina-clavulanato o cefalosporina + macrólido/doxiciclina</b>, o <b>quinolona respiratoria</b> (levofloxacino, moxifloxacino) sola</td></tr>
<tr><td>Hospitalizado (piso)</td><td><b>Ceftriaxona + azitromicina</b> o quinolona respiratoria sola</td></tr>
<tr><td>UCI</td><td>Ceftriaxona + azitromicina <b>o</b> ceftriaxona + quinolona</td></tr>
<tr><td>Riesgo de MRSA</td><td>+ <b>vancomicina o linezolid</b></td></tr>
<tr><td>Riesgo de Pseudomonas</td><td><b>Piperacilina-tazobactam, cefepime, ceftazidima o meropenem</b></td></tr>
<tr><td>NIH/NAV</td><td>Antipseudomonas ± anti-MRSA según riesgo local</td></tr>
</table></div>
<ul>
<li>Duración: <b>≥5 días</b> y estabilidad clínica 48–72 h (7 días en MRSA/Pseudomonas). Cambio a vía oral al mejorar.</li>
<li>Esteroides: considerar en NAC grave (hidrocortisona) sin influenza.</li>
<li>Oseltamivir si hay influenza. Seguimiento con RX a 6–8 semanas en fumadores &gt;50 años (descartar cáncer).</li>
<li>Complicaciones: derrame paraneumónico, empiema, absceso, SDRA, sepsis.</li>
<li>Prevención: vacunas antineumocócica (PCV20 o PCV15 + PPSV23) e influenza.</li>
</ul>` },
        { h: 'Cómo lo preguntan en el examen', html: `
<ul>
<li>Joven sano con NAC ambulatoria → <b>amoxicilina</b> (o doxiciclina).</li>
<li>CURB-65 de 3 → <b>hospitalizar/UCI</b>; ceftriaxona + azitromicina.</li>
<li>Neumonía con diarrea, hiponatremia y confusión → <b>Legionella</b> → antígeno urinario; macrólido o quinolona.</li>
<li>Neumonía cavitada tras influenza → <b><i>S. aureus</i></b>.</li>
<li>Alcohólico con neumonía de lóbulo superior y esputo en jalea de grosella → <b>Klebsiella</b>.</li>
<li>Paciente intubado 5 días con nueva neumonía → <b>NAV</b>: antipseudomonas ± vancomicina.</li>
</ul>` }
      ],
      mnemo: { t: 'CURB-65', d: 'Confusión, Urea >7 mmol/L, Respiración ≥30, Baja PA (<90/≤60), ≥65 años. 0–1 casa · 2 hospital · ≥3 UCI.' },
      pearl: 'Legionella: neumonía grave con diarrea, hiponatremia, confusión y transaminasas altas; los betalactámicos no la cubren (macrólido o quinolona).',
      trap: 'Los atípicos (Mycoplasma, Chlamydophila, Legionella) no responden a betalactámicos: por eso el paciente hospitalizado recibe macrólido o quinolona además de la ceftriaxona.',
      guide: [
        'IDSA/ATS 2019: ya no existe la categoría de “neumonía asociada a cuidados de la salud”; la cobertura de MRSA/Pseudomonas depende de factores de riesgo y aislamientos previos.',
        'Tu guía pone el macrólido de primera línea en ambulatorio sano; IDSA prefiere amoxicilina o doxiciclina y el macrólido solo si la resistencia local del neumococo es <25 % (en México suele ser mayor).'
      ],
      refs: [
        'Metlay JP, et al. Diagnosis and treatment of adults with community-acquired pneumonia: ATS/IDSA guideline. Am J Respir Crit Care Med 2019.',
        'Kalil AC, et al. Management of adults with hospital-acquired and ventilator-associated pneumonia: IDSA/ATS guideline. Clin Infect Dis 2016.',
        'Lim WS, et al. Defining CAP severity on presentation (CURB-65). Thorax 2003.',
        'Dequin PF, et al. Hydrocortisone in severe community-acquired pneumonia (CAPE COD). N Engl J Med 2023.'
      ]
    }
  },

  guias: {
    neumonia: { src: SRC,
      puntos: [
        'NAC típica: <i>S. pneumoniae</i> (+), <i>H. influenzae</i>, <i>Moraxella</i>, <i>Klebsiella</i>, <i>S. aureus</i> tras influenza; atípica: Mycoplasma, Chlamydophila, Legionella, virus.',
        'Legionella: diarrea e hiponatremia; Mycoplasma: tos paroxística no productiva; neumococo: esputo herrumbroso.',
        'Esputo adecuado: ≥25 PMN y &lt;10 epiteliales; procalcitonina ≥0.25 guía antibiótico.',
        'CURB-65: hospitalizar con ≥2, UCI con ≥3; criterios IDSA/ATS (1 mayor o ≥3 menores).',
        'Ambulatorio sano: macrólido, doxiciclina o amoxicilina; comorbilidades: quinolona o betalactámico + macrólido; UCI: betalactámico + azitromicina o quinolona; Pseudomonas: antipseudomonas; MRSA: vancomicina o linezolid.'
      ],
      ojo: ['IDSA prefiere <b>amoxicilina o doxiciclina</b> en el ambulatorio sano; el macrólido solo si la resistencia del neumococo es &lt;25 %.'],
      cards: [['Esputo en jalea de grosella', 'Klebsiella (alcohólicos, lóbulo superior)']] }
  },

  cards: [
    ['Agente #1 de NAC', 'Streptococcus pneumoniae'],
    ['Neumonía + diarrea + hiponatremia', 'Legionella (antígeno urinario)'],
    ['Neumonía en joven con tos seca y crioaglutininas', 'Mycoplasma'],
    ['Neumonía cavitada tras influenza', 'S. aureus'],
    ['CURB-65', 'Confusión, Urea, FR ≥30, PA baja, ≥65 años'],
    ['CURB-65 0–1 / 2 / ≥3', 'Ambulatorio / hospital / UCI'],
    ['NAC ambulatoria sana', 'Amoxicilina o doxiciclina'],
    ['NAC ambulatoria con comorbilidades', 'Amoxi-clav + macrólido, o quinolona respiratoria'],
    ['NAC hospitalizada', 'Ceftriaxona + azitromicina, o quinolona respiratoria'],
    ['Cobertura de MRSA', 'Vancomicina o linezolid'],
    ['Cobertura de Pseudomonas', 'Pip-tazo, cefepime, ceftazidima o meropenem'],
    ['Neumonía nosocomial', '≥48 h de hospitalización'],
    ['Duración del antibiótico en NAC', '≥5 días y 48–72 h estable y afebril'],
    ['Neumonía por aspiración', 'Anaerobios; lóbulo inferior derecho; ampicilina-sulbactam']
  ],

  questions: [
    q({ id: 'neumonia-01', dif: 1, stem: 'Hombre de 30 años sano con fiebre, tos productiva y consolidación en RX. CURB-65 de 0. ¿Tratamiento?', opts: ['Hospitalizar con ceftriaxona', 'Amoxicilina oral (o doxiciclina) ambulatoria', 'Vancomicina', 'Meropenem', 'Sin antibiótico'], ans: 1,
      exp: 'NAC ambulatoria sin comorbilidades: amoxicilina en dosis altas o doxiciclina.', why: ['No requiere hospitalización.', '', 'No hay riesgo de MRSA.', 'Excesivo.', 'Es bacteriana probable.'], ref: 'ATS/IDSA 2019' }),
    q({ id: 'neumonia-02', dif: 2, stem: 'Mujer de 70 años con NAC, confusa, FR 32, BUN 30, PA 100/70. ¿CURB-65 y destino?', opts: ['1; casa', '2; casa', '4; hospitalización y valorar UCI', '0; casa', '3; casa'], ans: 2,
      exp: 'Confusión (1) + urea (1) + FR ≥30 (1) + edad ≥65 (1) = 4: hospitalizar y valorar UCI.', why: ['Mal calculado.', 'Mal calculado.', '', 'Mal calculado.', 'Mal calculado y requiere hospital.'], ref: 'ATS/IDSA 2019' }),
    q({ id: 'neumonia-03', dif: 2, stem: 'Paciente hospitalizado en piso por NAC, sin riesgo de MRSA ni Pseudomonas. ¿Esquema?', opts: ['Ceftriaxona + azitromicina', 'Vancomicina + meropenem', 'Amoxicilina oral', 'Metronidazol', 'Nitrofurantoína'], ans: 0,
      exp: 'Betalactámico + macrólido (o quinolona respiratoria sola).', why: ['', 'Excesivo sin factores de riesgo.', 'Insuficiente para hospitalizado.', 'No cubre.', 'No cubre.'], ref: 'ATS/IDSA 2019' }),
    q({ id: 'neumonia-04', dif: 2, stem: 'Hombre de 58 años con neumonía grave, diarrea, confusión, Na 126 y transaminasas altas tras usar un jacuzzi. ¿Agente y estudio?', opts: ['Neumococo; Gram', 'Legionella; antígeno urinario', 'Mycoplasma; crioaglutininas', 'Pneumocystis; tinción de plata', 'TB; BAAR'], ans: 1,
      exp: 'Legionella: agua contaminada, diarrea, hiponatremia, confusión. Antígeno urinario (serogrupo 1). Tratamiento: azitromicina o levofloxacino.', why: ['No explica las pistas.', '', 'No da este cuadro grave con hiponatremia.', 'Inmunosupresión.', 'No.'], ref: 'ATS/IDSA 2019' }),
    q({ id: 'neumonia-05', dif: 2, stem: 'Paciente intubado hace 6 días que desarrolla fiebre, secreciones purulentas e infiltrado nuevo. ¿Cobertura empírica?', opts: ['Ceftriaxona + azitromicina', 'Antipseudomonas (piperacilina-tazobactam o cefepime) ± vancomicina', 'Amoxicilina', 'Doxiciclina', 'Solo antifúngico'], ans: 1,
      exp: 'NAV: cubrir Pseudomonas y, según riesgo local, MRSA.', why: ['No cubre Pseudomonas.', '', 'Insuficiente.', 'Insuficiente.', 'No.'], ref: 'IDSA/ATS 2016' }),
    q({ id: 'neumonia-06', dif: 2, stem: 'Paciente alcohólico con convulsión reciente, fiebre, esputo fétido y neumonía en segmento posterior del lóbulo superior derecho. ¿Causa y tratamiento?', opts: ['Neumococo; amoxicilina', 'Aspiración con anaerobios; ampicilina-sulbactam (o amoxi-clav)', 'TB; RIPE', 'Legionella; azitromicina', 'Pneumocystis; TMP-SMX'], ans: 1,
      exp: 'Aspiración en paciente con alteración de la conciencia: anaerobios orales, absceso posible.', why: ['No cubre anaerobios productores de betalactamasa.', '', 'No.', 'No.', 'No.'], ref: 'ATS/IDSA 2019' }),
    q({ id: 'neumonia-07', dif: 2, stem: 'Paciente con neumonía cavitada y neumatoceles semanas después de una influenza. ¿Agente más probable?', opts: ['Mycoplasma', 'Staphylococcus aureus', 'Haemophilus', 'Legionella', 'Moraxella'], ans: 1,
      exp: 'La influenza predispone a neumonía por S. aureus (incluso MRSA), necrotizante con cavitación.', why: ['No cava.', '', 'Poco común que cave.', 'No.', 'No.'], ref: 'ATS/IDSA 2019' }),
    q({ id: 'neumonia-08', dif: 1, stem: '¿Qué estudio confirma el diagnóstico de neumonía en un paciente con fiebre y tos?', opts: ['BH', 'RX de tórax con infiltrado nuevo', 'Procalcitonina', 'Hemocultivo', 'Esputo'], ans: 1,
      exp: 'El infiltrado nuevo en la RX confirma la neumonía.', why: ['Inespecífica.', '', 'Apoya, no confirma.', 'No es diagnóstico.', 'Identifica agente, no diagnostica.'], ref: 'ATS/IDSA 2019' }),
    q({ id: 'neumonia-09', dif: 2, stem: 'Paciente con NAC hospitalizado con ceftriaxona + azitromicina, afebril y estable desde hace 72 h al día 5. ¿Qué haces?', opts: ['Completar 14 días IV', 'Suspender el antibiótico (o completar 5 días) y egresar', 'Cambiar a meropenem', 'Agregar vancomicina', 'TC de control'], ans: 1,
      exp: 'NAC: mínimo 5 días con 48–72 h de estabilidad clínica.', why: ['Innecesario.', '', 'Absurdo.', 'No.', 'No es necesaria.'], ref: 'ATS/IDSA 2019' }),
    q({ id: 'neumonia-10', dif: 2, stem: 'Paciente con NAC con choque séptico que requiere norepinefrina. ¿Dónde y con qué?', opts: ['Piso; amoxicilina', 'UCI; ceftriaxona + azitromicina (o + quinolona) y evaluar riesgo de MRSA/Pseudomonas', 'Casa', 'Piso; solo quinolona', 'UCI; solo vancomicina'], ans: 1,
      exp: 'Criterio mayor de UCI (vasopresor): betalactámico + macrólido o quinolona, con cobertura ampliada según riesgo.', why: ['Inadecuado.', '', 'Inadecuado.', 'Requiere UCI.', 'Insuficiente.'], ref: 'ATS/IDSA 2019' }),
    q({ id: 'neumonia-11', dif: 2, stem: 'Joven con tos seca de 2 semanas, febrícula, miringitis bullosa e infiltrado intersticial. ¿Agente y tratamiento?', opts: ['Neumococo; amoxicilina', 'Mycoplasma; azitromicina o doxiciclina', 'Legionella; vancomicina', 'Klebsiella; ceftriaxona', 'Pseudomonas; cefepime'], ans: 1,
      exp: 'Neumonía atípica por Mycoplasma (sin pared: no responde a betalactámicos).', why: ['No cubre atípicos.', '', 'No.', 'No.', 'No.'], ref: 'ATS/IDSA 2019' }),
    q({ id: 'neumonia-12', dif: 2, stem: 'Paciente con neumonía y derrame pleural. Toracocentesis: pH 6.9, glucosa 30, Gram con cocos grampositivos. ¿Conducta?', opts: ['Solo antibiótico', 'Antibiótico + sonda pleural (drenaje)', 'Diurético', 'Observación', 'Toracocentesis repetidas sin sonda'], ans: 1,
      exp: 'Derrame paraneumónico complicado/empiema (pH <7.2, glucosa <60, Gram positivo): drenaje.', why: ['Insuficiente.', '', 'No.', 'No.', 'Inferior.'], ref: 'ATS/IDSA 2019' }),
    q({ id: 'neumonia-13', dif: 2, stem: 'Fumador de 62 años tratado por NAC que mejora. ¿Qué seguimiento recomiendas?', opts: ['Ninguno', 'RX de tórax a 6–8 semanas para descartar lesión subyacente', 'TC cada mes', 'Broncoscopia inmediata', 'Antibiótico profiláctico'], ans: 1,
      exp: 'En >50 años y fumadores, verificar resolución radiográfica (cáncer obstructivo).', why: ['Riesgo de no ver un cáncer.', '', 'Excesivo.', 'No de entrada.', 'No.'], ref: 'ATS/IDSA 2019' }),
    q({ id: 'neumonia-14', dif: 2, stem: 'Alcohólico con neumonía del lóbulo superior derecho, esputo “en jalea de grosella” y abombamiento de la cisura. ¿Agente?', opts: ['Neumococo', 'Klebsiella pneumoniae', 'Mycoplasma', 'Legionella', 'Haemophilus'], ans: 1,
      exp: 'Klebsiella: alcohólicos, diabéticos; necrotizante, lóbulos superiores.', why: ['Esputo herrumbroso.', '', 'No.', 'No.', 'No.'], ref: 'ATS/IDSA 2019' }),
    q({ id: 'neumonia-15', dif: 2, stem: 'Paciente con bronquiectasias y cultivos previos con Pseudomonas que se interna por neumonía. ¿Antibiótico?', opts: ['Ceftriaxona + azitromicina', 'Cefepime o piperacilina-tazobactam (± cobertura atípica)', 'Amoxicilina', 'Ampicilina', 'Nitrofurantoína'], ans: 1,
      exp: 'Aislamiento previo de Pseudomonas: cubrirla empíricamente.', why: ['No cubre Pseudomonas.', '', 'No.', 'No.', 'No.'], ref: 'ATS/IDSA 2019' }),
    q({ id: 'neumonia-16', dif: 2, stem: '¿Qué hallazgo de la exploración física sugiere consolidación?', opts: ['Hiperresonancia y vibraciones disminuidas', 'Matidez, vibraciones aumentadas, soplo tubario y egofonía', 'Murmullo vesicular normal', 'Tórax en tonel', 'Sibilancias espiratorias difusas'], ans: 1,
      exp: 'El pulmón consolidado transmite mejor las vibraciones; el derrame las disminuye.', why: ['Es neumotórax o enfisema.', '', 'No.', 'EPOC.', 'Asma/EPOC.'], ref: 'ATS/IDSA 2019' }),
    q({ id: 'neumonia-17', dif: 2, stem: 'Paciente con NAC y comorbilidades (DM, IC) que se tratará en casa. ¿Esquema?', opts: ['Amoxicilina sola', 'Amoxicilina-clavulanato + azitromicina (o levofloxacino solo)', 'Vancomicina oral', 'Metronidazol', 'Ninguno'], ans: 1,
      exp: 'Con comorbilidades se amplía cobertura: betalactámico + macrólido o quinolona respiratoria.', why: ['Insuficiente con comorbilidades.', '', 'No.', 'No.', 'No.'], ref: 'ATS/IDSA 2019' }),
    q({ id: 'neumonia-18', dif: 3, stem: 'Paciente con VIH (CD4 90) con disnea progresiva, hipoxemia, LDH alta e infiltrado en vidrio despulido bilateral. ¿Diagnóstico y tratamiento?', opts: ['Neumococo; ceftriaxona', 'Pneumocystis jirovecii; TMP-SMX (+ prednisona si PaO₂ <70)', 'TB; RIPE', 'Legionella', 'Influenza'], ans: 1,
      exp: 'PCP en VIH con CD4 <200: TMP-SMX; esteroide si hay hipoxemia importante.', why: ['No encaja.', '', 'Posible, pero el patrón es PCP.', 'No.', 'No.'], ref: 'ATS/IDSA 2019' }),
    q({ id: 'neumonia-19', dif: 2, stem: '¿Cuál es la utilidad principal de la procalcitonina en neumonía?', opts: ['Diagnosticar neumonía viral con certeza', 'Apoyar la decisión de suspender antibiótico', 'Sustituir la RX', 'Identificar el agente', 'Medir la gravedad exacta'], ans: 1,
      exp: 'Niveles bajos o en descenso apoyan acortar o suspender el antibiótico; no debe retrasar el inicio en NAC.', why: ['No es certera.', '', 'No.', 'No.', 'No.'], ref: 'ATS/IDSA 2019' }),
    q({ id: 'neumonia-20', dif: 1, stem: '¿Qué vacuna previene neumonía neumocócica en adultos mayores de 65 años?', opts: ['BCG', 'PCV20 (o PCV15 seguida de PPSV23)', 'Tdap', 'VPH', 'Hepatitis A'], ans: 1,
      exp: 'Vacunación antineumocócica conjugada en ≥65 años y en adultos con riesgo.', why: ['No.', '', 'No.', 'No.', 'No.'], ref: 'CDC 2024' })
  ]
};
