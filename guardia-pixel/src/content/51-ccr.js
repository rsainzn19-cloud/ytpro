// Tema 42 · Cáncer colorrectal y tamizaje (Gastroenterología, semana 8)
const T = { topic: 'ccr', subj: 'gastro' };
const q = (o) => ({ ...T, ...o });
const SRC = { short: 'De tu Guía Gastro', vs: 'tu guía', name: 'Guía Gastro · Ximena Cors Cepeda (EMIS 5)', url: 'https://docs.google.com/document/d/16oAVd4UCRwVvWLOsO8DuHlzTN2RKAGSIKTtHIAqqnq4/edit' };

export default {
  lessons: {
    ccr: {
      hook: 'El cáncer de colon derecho sangra en silencio (anemia ferropénica en un adulto mayor); el izquierdo obstruye (cambio en el calibre de las heces). Tamizaje desde los 45 años, y antes si hay familiar de primer grado o síndrome hereditario.',
      nn: [], yt: 'colorectal cancer screening Lynch FAP',
      video: [
        { ch: 'Clínica y diagnóstico', sc: [
          { v: { k: 'title', t: 'Cáncer colorrectal', s: 'Semana 8 · Gastroenterología' },
            say: 'Semana ocho: el cáncer colorrectal. Casi todos nacen de un pólipo adenomatoso que tarda años en volverse cáncer. Por eso el tamizaje salva vidas: quita el pólipo antes de que cambie.' },
          { v: { k: 'vs', a: 'Colon derecho', b: 'Colon izquierdo y recto', rows: [['Forma', 'Exofítico, luz amplia', 'Anular, luz estrecha'], ['Presentación', 'Anemia ferropénica, sangrado oculto', 'Obstrucción, heces delgadas, hematoquecia'], ['Recto', '—', 'Tenesmo, sangre roja']] },
            say: 'El colon derecho es ancho: el tumor crece sin obstruir y sangra poco a poco, así que la presentación clásica es anemia ferropénica en un hombre o una mujer posmenopáusica. El izquierdo es estrecho: obstruye, cambia el calibre de las heces y da sangre visible.' },
          { v: { k: 'tip', kind: 'pearl', t: 'Anemia ferropénica en hombre o posmenopáusica = colonoscopia y endoscopia alta.' },
            say: 'La perla: anemia por deficiencia de hierro en un hombre o en una mujer que ya no menstrúa es cáncer de colon hasta demostrar lo contrario. Pide colonoscopia y endoscopia alta.' },
          { v: { k: 'list', t: 'Diagnóstico y estadificación', items: ['Colonoscopia con biopsia', 'TC de tórax, abdomen y pelvis', 'CEA basal: seguimiento, no diagnóstico', 'Recto: RM pélvica'] },
            say: 'Se diagnostica con colonoscopia y biopsia. Se estadifica con tomografía de tórax, abdomen y pelvis, y resonancia en el recto. El antígeno carcinoembrionario sirve para el seguimiento, no para diagnosticar.' }
        ] },
        { ch: 'Tamizaje', sc: [
          { v: { k: 'list', t: 'Riesgo promedio', items: ['De 45 a 75 años', 'Colonoscopia cada 10 años', 'O FIT anual', 'O sigmoidoscopia cada 5 años'] },
            say: 'Para la población general, tamizaje de los cuarenta y cinco a los setenta y cinco años: colonoscopia cada diez años, o prueba inmunoquímica fecal cada año.' },
          { v: { k: 'list', t: 'Riesgo alto', items: ['Familiar de primer grado: a los 40 o 10 años antes, cada 5', 'Lynch: desde 20 a 25, cada 1 a 2 años', 'PAF: sigmoidoscopia desde 10 a 12, anual', 'EII: 8 años tras el diagnóstico'] },
            say: 'Con un familiar de primer grado con cáncer antes de los sesenta, se empieza a los cuarenta o diez años antes de la edad del familiar, cada cinco años. En el síndrome de Lynch desde los veinte, cada uno o dos años. En la poliposis adenomatosa familiar desde la adolescencia.' },
          { v: { k: 'mnemo', t: 'Derecho sangra, izquierdo obstruye', d: 'Colon derecho: anemia ferropénica. Colon izquierdo: obstrucción y cambio de calibre. Recto: tenesmo y sangre roja.' },
            say: 'Llévate esto: el derecho sangra, el izquierdo obstruye. Y desde los cuarenta y cinco años, tamizaje para todos.' }
        ] }
      ],
      sections: [
        { h: 'Factores de riesgo y genética', html: `
<ul>
<li>Edad &gt;45–50, <b>pólipos adenomatosos</b> (vellosos, &gt;1 cm, displasia alta), antecedente familiar, <b>EII</b>, dieta con carne roja/procesada y poca fibra, obesidad, tabaco, alcohol, DM. <i>Streptococcus gallolyticus</i> (bovis) en hemocultivo o endocarditis → colonoscopia.</li>
<li>Vía clásica: inestabilidad cromosómica (<b>APC → KRAS → p53</b>).</li>
<li><b>Síndrome de Lynch</b> (cáncer colorrectal hereditario no polipósico): AD, genes de reparación (MLH1, MSH2, MSH6, PMS2), inestabilidad de microsatélites; colon derecho, edad joven; también endometrio, ovario, estómago, urotelio. Criterios de Ámsterdam (3-2-1: 3 familiares, 2 generaciones, 1 &lt;50 años).</li>
<li><b>Poliposis adenomatosa familiar</b>: APC, cientos a miles de pólipos, cáncer ~100 % a los 40 → colectomía profiláctica. Variante Gardner (osteomas, quistes epidermoides, desmoides); Turcot (tumores del SNC).</li>
<li>Pólipos hamartomatosos: Peutz-Jeghers (manchas en labios), poliposis juvenil.</li>
</ul>` },
        { h: 'Clínica, diagnóstico y estadificación', html: `
<ul>
<li><b>Derecho</b>: anemia ferropénica, fatiga, masa, sangre oculta. <b>Izquierdo</b>: cambio del hábito intestinal, <b>heces delgadas</b>, hematoquecia, obstrucción (“corazón de manzana” en el colon por enema). <b>Recto</b>: tenesmo, sangre roja, dolor.</li>
<li><b>Colonoscopia con biopsia</b> (completa, para lesiones sincrónicas). En obstrucción: TC.</li>
<li>Estadificación: <b>TC de tórax, abdomen y pelvis</b> (hígado es el sitio #1 de metástasis por la porta; recto bajo también a pulmón); RM pélvica en recto. <b>CEA</b> basal para seguimiento (no tamizaje ni diagnóstico).</li>
<li>TNM: I–II localizado, <b>III ganglios positivos</b>, IV metástasis.</li>
</ul>` },
        { h: 'Tratamiento', html: `
<ul>
<li><b>Colon</b>: resección quirúrgica con linfadenectomía (≥12 ganglios). <b>Quimioterapia adyuvante</b> (FOLFOX/CAPOX) en estadio III (y II de alto riesgo).</li>
<li><b>Recto</b> (II–III): quimiorradioterapia neoadyuvante (o terapia neoadyuvante total) y resección mesorrectal total.</li>
<li>Metástasis hepáticas o pulmonares resecables: cirugía con intención curativa. Enfermedad avanzada: quimioterapia + anti-VEGF (bevacizumab) o anti-EGFR (cetuximab, solo si <b>RAS no mutado</b>, izquierdo); inmunoterapia si hay <b>inestabilidad de microsatélites alta (dMMR)</b>.</li>
<li>Seguimiento: CEA cada 3–6 meses, TC anual, colonoscopia al año.</li>
</ul>` },
        { h: 'Tamizaje', html: `
<div class="tablewrap"><table class="mini">
<tr><th>Riesgo</th><th>Cuándo empezar</th><th>Cómo</th></tr>
<tr><td><b>Promedio</b></td><td>45 años hasta 75 (76–85 individualizar)</td><td>Colonoscopia c/10 años · <b>FIT anual</b> · FIT-ADN c/1–3 años · sigmoidoscopia c/5 años · colonografía por TC c/5 años</td></tr>
<tr><td>Familiar de 1er grado con CCR o adenoma avanzado &lt;60 años (o 2 familiares de cualquier edad)</td><td><b>40 años o 10 años antes</b> del diagnóstico del familiar</td><td>Colonoscopia c/5 años</td></tr>
<tr><td>Familiar de 1er grado ≥60 años</td><td>40 años</td><td>Como riesgo promedio</td></tr>
<tr><td><b>Lynch</b></td><td>20–25 años</td><td>Colonoscopia c/1–2 años</td></tr>
<tr><td><b>PAF</b></td><td>10–12 años</td><td>Sigmoidoscopia/colonoscopia anual; colectomía</td></tr>
<tr><td><b>EII</b> (colitis extensa)</td><td>8 años tras el diagnóstico</td><td>Colonoscopia c/1–3 años (anual con CEP)</td></tr>
</table></div>
<ul><li>Una prueba no invasiva positiva (FIT, FIT-ADN) siempre requiere <b>colonoscopia</b>.</li></ul>` },
        { h: 'Cómo lo preguntan en el examen', html: `
<ul>
<li>Hombre de 68 años con anemia ferropénica y sin sangrado visible → <b>colonoscopia</b> (cáncer de colon derecho).</li>
<li>Bacteriemia por <i>S. gallolyticus</i> → <b>colonoscopia</b>.</li>
<li>Paciente de 45 años sin factores de riesgo → <b>iniciar tamizaje</b>.</li>
<li>Padre con CCR a los 50 → empezar a los <b>40</b> con colonoscopia c/5 años.</li>
<li>Joven con cáncer de colon derecho, madre con cáncer de endometrio → <b>Lynch</b>.</li>
<li>CEA → <b>seguimiento</b> de recurrencia, no diagnóstico.</li>
</ul>` }
      ],
      mnemo: { t: 'Derecho sangra, izquierdo obstruye', d: 'Colon derecho: anemia ferropénica oculta. Colon izquierdo: obstrucción y heces delgadas. Lynch: 3-2-1 (3 familiares, 2 generaciones, 1 menor de 50).' },
      pearl: 'Anemia ferropénica en hombre o mujer posmenopáusica = colonoscopia (y endoscopia alta) hasta demostrar lo contrario.',
      trap: 'El CEA no sirve para tamizar ni para diagnosticar: se usa para vigilar recurrencia después de la cirugía.',
      guide: [
        'USPSTF 2021 y ACS 2018: el tamizaje en riesgo promedio inicia a los 45 años (antes 50).',
        'Tu guía dice “sanos sin HF: todos a los 45 hasta 75”, en línea con lo actual.'
      ],
      refs: [
        'US Preventive Services Task Force. Screening for colorectal cancer. JAMA 2021.',
        'Shaukat A, et al. ACG Clinical Guidelines: Colorectal cancer screening 2021. Am J Gastroenterol 2021.',
        'NCCN Guidelines: Colon cancer / Rectal cancer, 2025.',
        'Syngal S, et al. ACG Clinical Guideline: Genetic testing and management of hereditary GI cancer syndromes. Am J Gastroenterol 2015.'
      ]
    }
  },

  guias: {
    ccr: { src: SRC,
      puntos: [
        'Factores: edad &gt;50, síndromes hereditarios (PAF, Lynch), familiar &lt;60 años, CUCI, pólipos adenomatosos, dieta baja en fibra, <i>S. bovis</i>.',
        'Vía: APC → KRAS → TP53/DCC; microsatélites en Lynch (MLH1, MSH2).',
        'Derecho: anemia, pérdida de peso, melena (anemia ferropénica en adulto mayor). Izquierdo: obstrucción, “corazón de manzana”, heces delgadas, hematoquecia. Recto: tenesmo, dolor.',
        'Diagnóstico: colonoscopia con biopsia; metástasis (hígado) con TC; CEA para seguimiento, no diagnóstico.',
        'Tamizaje: 45–75 años; familiar de 1er grado a los 40 o 10 años antes, cada 5; Lynch anual desde los 25; PAF sigmoidoscopia anual desde los 12.'
      ],
      ojo: ['Además de la colonoscopia, el <b>FIT anual</b> es una opción aceptada de tamizaje en riesgo promedio (si sale positivo → colonoscopia).'],
      cards: [['Imagen en “corazón de manzana”', 'Cáncer de colon izquierdo anular']] }
  },

  cards: [
    ['Tamizaje de CCR en riesgo promedio', 'De 45 a 75 años'],
    ['Colonoscopia normal: siguiente', 'En 10 años'],
    ['FIT', 'Anual; positivo → colonoscopia'],
    ['Familiar de 1er grado <60 años', 'Iniciar a los 40 o 10 años antes; colonoscopia c/5 años'],
    ['Síndrome de Lynch', 'AD, reparación de errores (MLH1, MSH2); colonoscopia desde 20–25 c/1–2 años'],
    ['Criterios de Ámsterdam', '3-2-1: 3 familiares, 2 generaciones, 1 <50 años'],
    ['PAF', 'Gen APC; miles de pólipos; colectomía profiláctica'],
    ['Síndrome de Gardner', 'PAF + osteomas + quistes epidermoides + desmoides'],
    ['Colon derecho', 'Anemia ferropénica, sangrado oculto'],
    ['Colon izquierdo', 'Obstrucción, heces delgadas, “corazón de manzana”'],
    ['Sitio #1 de metástasis', 'Hígado'],
    ['Uso del CEA', 'Seguimiento de recurrencia, no tamizaje'],
    ['Quimio adyuvante en colon', 'Estadio III (ganglios positivos)'],
    ['S. gallolyticus (bovis)', 'Bacteriemia/endocarditis → colonoscopia']
  ],

  questions: [
    q({ id: 'ccr-01', dif: 1, stem: 'Hombre de 67 años con fatiga. Hb 9.1, VCM 72, ferritina 8. Sin sangrado visible. ¿Siguiente estudio?', opts: ['Solo hierro oral', 'Colonoscopia (y endoscopia alta)', 'Electroforesis de Hb', 'Médula ósea', 'Prueba de embarazo'], ans: 1,
      exp: 'Anemia ferropénica en un hombre adulto: buscar sangrado digestivo, sobre todo cáncer de colon derecho.', why: ['Sin buscar la fuente se pierde el cáncer.', '', 'Es para talasemia.', 'Innecesaria.', 'No aplica.'], ref: 'ACG 2021' }),
    q({ id: 'ccr-02', dif: 1, stem: 'Mujer de 45 años sin antecedentes familiares ni síntomas. ¿Qué recomiendas?', opts: ['Nada hasta los 50', 'Iniciar tamizaje de cáncer colorrectal', 'CEA anual', 'TC de abdomen', 'Colonoscopia cada año'], ans: 1,
      exp: 'El tamizaje en riesgo promedio inicia a los 45 años (colonoscopia c/10 años o FIT anual, entre otros).', why: ['Las guías actuales inician a los 45.', '', 'No es tamizaje.', 'No es tamizaje.', 'Demasiado frecuente.'], ref: 'USPSTF 2021' }),
    q({ id: 'ccr-03', dif: 2, stem: 'Hombre de 35 años cuyo padre tuvo cáncer de colon a los 48 años. ¿Cuándo inicia tamizaje?', opts: ['A los 45', 'A los 38 (10 años antes que el padre) o a los 40, lo que ocurra primero; colonoscopia c/5 años', 'A los 50', 'A los 25', 'No necesita'], ans: 1,
      exp: 'Familiar de primer grado con CCR <60 años: iniciar a los 40 o 10 años antes de su diagnóstico (lo más temprano), colonoscopia cada 5 años.', why: ['Tiene riesgo aumentado.', '', 'Tarde.', 'Es para Lynch.', 'Incorrecto.'], ref: 'ACG 2021' }),
    q({ id: 'ccr-04', dif: 2, stem: 'Mujer de 38 años con cáncer de colon derecho; su madre tuvo cáncer de endometrio a los 45 y su tío cáncer de colon a los 50. ¿Síndrome?', opts: ['PAF', 'Síndrome de Lynch', 'Peutz-Jeghers', 'Gardner', 'Turcot'], ans: 1,
      exp: 'CCR joven derecho + cáncer de endometrio en la familia: Lynch (genes de reparación de errores, inestabilidad de microsatélites).', why: ['Tendría cientos de pólipos.', '', 'Hamartomas y manchas mucocutáneas.', 'Variante de PAF.', 'Variante con tumores del SNC.'], ref: 'ACG 2015' }),
    q({ id: 'ccr-05', dif: 2, stem: 'Joven de 16 años con cientos de pólipos adenomatosos en el colon y mutación de APC. ¿Tratamiento?', opts: ['Polipectomías anuales indefinidas', 'Colectomía profiláctica', 'AINE', 'Quimioterapia', 'Observación'], ans: 1,
      exp: 'En la PAF el riesgo de cáncer es casi 100 % hacia los 40 años: colectomía profiláctica (habitualmente en la adolescencia tardía).', why: ['Imposible con cientos de pólipos.', '', 'Solo coadyuvante.', 'No hay cáncer.', 'Riesgo muy alto.'], ref: 'ACG 2015' }),
    q({ id: 'ccr-06', dif: 2, stem: 'Paciente con endocarditis por Streptococcus gallolyticus (bovis). ¿Qué estudio adicional pides?', opts: ['TC de cráneo', 'Colonoscopia', 'Ecocardiograma de estrés', 'PET de cuerpo entero', 'Ninguno'], ans: 1,
      exp: 'S. gallolyticus se asocia fuertemente a neoplasias de colon.', why: ['No relacionado.', '', 'No relacionado.', 'No es lo indicado.', 'Hay que buscar cáncer.'], ref: 'ACG 2021' }),
    q({ id: 'ccr-07', dif: 1, stem: '¿Para qué sirve el antígeno carcinoembrionario (CEA) en cáncer colorrectal?', opts: ['Tamizaje poblacional', 'Diagnóstico inicial', 'Seguimiento de recurrencia tras el tratamiento', 'Decidir la cirugía', 'Sustituir la colonoscopia'], ans: 2,
      exp: 'El CEA basal y seriado sirve para detectar recurrencia; no es sensible ni específico para diagnóstico.', why: ['No sirve.', 'No sirve.', '', 'No.', 'No.'], ref: 'NCCN 2025' }),
    q({ id: 'ccr-08', dif: 2, stem: 'Paciente con adenocarcinoma de colon sigmoides resecado con 3 de 15 ganglios positivos y sin metástasis. ¿Qué sigue?', opts: ['Solo vigilancia', 'Quimioterapia adyuvante (FOLFOX o CAPOX)', 'Radioterapia', 'Inmunoterapia sola', 'Nueva cirugía'], ans: 1,
      exp: 'Estadio III (ganglios positivos): quimioterapia adyuvante reduce recurrencia y mortalidad.', why: ['Insuficiente.', '', 'Se usa en recto, no en colon.', 'Solo en enfermedad avanzada dMMR.', 'No indicada.'], ref: 'NCCN 2025' }),
    q({ id: 'ccr-09', dif: 2, stem: 'Hombre de 70 años con estreñimiento progresivo, heces delgadas y hematoquecia. Enema baritado: estenosis en “corazón de manzana” en sigmoides. ¿Diagnóstico?', opts: ['Diverticulitis', 'Cáncer de colon izquierdo', 'Vólvulo', 'Colitis isquémica', 'Hemorroides'], ans: 1,
      exp: 'Lesión anular estenosante con cambio de calibre de las heces: cáncer de colon izquierdo.', why: ['No da imagen anular típica.', '', 'Da “pico de pájaro”.', 'No da estenosis anular.', 'No explica.'], ref: 'NCCN 2025' }),
    q({ id: 'ccr-10', dif: 2, stem: 'Paciente de riesgo promedio con FIT positivo. ¿Siguiente paso?', opts: ['Repetir FIT', 'Colonoscopia', 'TC', 'CEA', 'Observación'], ans: 1,
      exp: 'Toda prueba no invasiva positiva requiere colonoscopia diagnóstica.', why: ['Retrasa el diagnóstico.', '', 'No es el estándar.', 'No sirve.', 'Peligroso.'], ref: 'USPSTF 2021' }),
    q({ id: 'ccr-11', dif: 2, stem: '¿Cuál es el órgano más frecuente de metástasis del cáncer de colon?', opts: ['Pulmón', 'Hígado', 'Hueso', 'Cerebro', 'Suprarrenal'], ans: 1,
      exp: 'El drenaje venoso por la porta lleva las células al hígado; el recto bajo drena también a la cava y da metástasis pulmonares.', why: ['Segundo.', '', 'Raro.', 'Raro.', 'Raro.'], ref: 'NCCN 2025' }),
    q({ id: 'ccr-12', dif: 2, stem: 'Paciente con colonoscopia de tamizaje normal a los 50 años, riesgo promedio. ¿Cuándo repite?', opts: ['1 año', '3 años', '5 años', '10 años', 'Nunca'], ans: 3,
      exp: 'Colonoscopia normal de buena calidad en riesgo promedio: repetir en 10 años.', why: ['Demasiado pronto.', 'Demasiado pronto.', 'Es para riesgo familiar.', '', 'Debe continuar hasta los 75.'], ref: 'ACG 2021' }),
    q({ id: 'ccr-13', dif: 3, stem: 'Paciente con CCR metastásico, RAS mutado. ¿Qué fármaco NO es útil?', opts: ['Bevacizumab', 'Cetuximab', 'FOLFOX', 'Capecitabina', 'Irinotecán'], ans: 1,
      exp: 'Los anti-EGFR (cetuximab, panitumumab) solo funcionan si RAS es nativo (no mutado).', why: ['Útil (anti-VEGF).', '', 'Útil.', 'Útil.', 'Útil.'], ref: 'NCCN 2025' }),
    q({ id: 'ccr-14', dif: 1, stem: '¿Qué tipo de pólipo tiene mayor riesgo de malignidad?', opts: ['Hiperplásico pequeño', 'Adenoma velloso mayor de 1 cm', 'Inflamatorio', 'Hamartomatoso juvenil único', 'Lipoma'], ans: 1,
      exp: 'El riesgo crece con tamaño (>1 cm), histología vellosa y displasia de alto grado.', why: ['Riesgo bajo.', '', 'Sin riesgo.', 'Riesgo bajo si es único.', 'No es neoplásico epitelial.'], ref: 'ACG 2021' }),
    q({ id: 'ccr-15', dif: 2, stem: 'Paciente con adenocarcinoma de recto medio T3N1. ¿Secuencia de tratamiento?', opts: ['Cirugía y nada más', 'Quimiorradioterapia neoadyuvante y luego resección mesorrectal total', 'Solo quimioterapia', 'Solo radioterapia', 'Polipectomía'], ans: 1,
      exp: 'En cáncer de recto localmente avanzado se da tratamiento neoadyuvante (o terapia neoadyuvante total) antes de la resección mesorrectal total.', why: ['Mayor recurrencia local.', '', 'Insuficiente.', 'Insuficiente.', 'No es tratamiento de un T3.'], ref: 'NCCN 2025' })
  ]
};
