// Tema 41 · Enfermedad inflamatoria intestinal (Gastroenterología, semana 7)
const T = { topic: 'eii', subj: 'gastro' };
const q = (o) => ({ ...T, ...o });
const SRC = { short: 'De tu Guía Gastro', vs: 'tu guía', name: 'Guía Gastro · Ximena Cors Cepeda (EMIS 5)', url: 'https://docs.google.com/document/d/16oAVd4UCRwVvWLOsO8DuHlzTN2RKAGSIKTtHIAqqnq4/edit' };

export default {
  lessons: {
    eii: {
      hook: 'Crohn salta y atraviesa toda la pared (fístulas, estenosis, cualquier parte de la boca al ano); la CUCI empieza en el recto, es continua y solo mucosa (diarrea con sangre, megacolon). Y la urgencia es la colitis grave: esteroide IV.',
      nn: [], yt: 'Crohn disease vs ulcerative colitis',
      video: [
        { ch: 'Dos enfermedades distintas', sc: [
          { v: { k: 'title', t: 'Enfermedad inflamatoria intestinal', s: 'Semana 7 · Gastroenterología' },
            say: 'Semana siete de Gastro: la enfermedad inflamatoria intestinal. Son dos enfermedades que el examen siempre te pide distinguir: la enfermedad de Crohn y la colitis ulcerosa crónica idiopática. Vas a aprender a separarlas, a medir la gravedad de un brote y a tratarlo sin caer en las trampas.' },
          { v: { k: 'case', t: 'Diarrea con sangre', p: { name: 'Andrés', age: 24, sex: 'H', skin: '#C98B62', hair: '#2A1A12', gown: '#FF9B3D' }, text: 'Tres meses con diarrea con sangre, urgencia y tenesmo. Hoy: 10 evacuaciones con sangre, fiebre de 38.4, FC 112. Hb 9.8, PCR alta.', vit: { Evac: '10/día', FC: '112', T: '38.4', Hb: '9.8' } },
            say: 'Andrés tiene veinticuatro años y tres meses con diarrea con sangre, urgencia y sensación de evacuación incompleta. Hoy llega con diez evacuaciones con sangre, fiebre de treinta y ocho punto cuatro, frecuencia cardiaca de ciento doce y hemoglobina de nueve punto ocho.' },
          { v: { k: 'vs', a: 'Crohn', b: 'CUCI', rows: [['Dónde', 'Boca a ano; íleon terminal', 'Siempre recto, continuo, solo colon'], ['Pared', 'Transmural: fístulas, estenosis', 'Mucosa'], ['Endoscopia', 'Salteada, empedrado', 'Continua, friable, pseudopólipos'], ['Histología', 'Granulomas no caseificantes', 'Abscesos de criptas'], ['Clínica', 'Dolor en FID, perianal, peso', 'Diarrea con sangre, tenesmo'], ['Tabaco', 'Empeora', 'Protege']] },
            say: 'Crohn puede afectar de la boca al ano, sobre todo el íleon terminal, en parches, y es transmural: por eso da fístulas, abscesos y estenosis. En la endoscopia hay empedrado y en la biopsia, granulomas no caseificantes. Da dolor en la fosa iliaca derecha, pérdida de peso y enfermedad perianal, y el tabaco lo empeora. La colitis ulcerosa siempre empieza en el recto y sube de forma continua, solo afecta la mucosa del colon, da diarrea con sangre y tenesmo, y en la biopsia hay abscesos de criptas. Curiosamente, el tabaco la protege.' },
          { v: { k: 'vs', a: 'Complicación', b: 'Típica de', rows: [['Fístulas, abscesos, estenosis', 'Crohn', 'Por ser transmural'], ['Déficit de B12, cálculos de oxalato', 'Crohn', 'Íleon terminal enfermo'], ['Megacolon tóxico', 'CUCI', '—'], ['Colangitis esclerosante primaria', 'CUCI', 'p-ANCA, FA alta'], ['Cáncer colorrectal', 'Ambas con colitis extensa', 'CUCI más']] },
            say: 'Las complicaciones también las separan. Crohn da fístulas, abscesos y estenosis, y como el íleon terminal enfermo no absorbe vitamina B doce ni sales biliares, da deficiencia de B doce y cálculos renales de oxalato. La colitis ulcerosa da megacolon tóxico, se asocia a colangitis esclerosante primaria y tiene más riesgo de cáncer colorrectal.' }
        ] },
        { ch: 'Fuera del intestino y diagnóstico', sc: [
          { v: { k: 'vs', a: 'Siguen la actividad', b: 'Independientes', rows: [['Artritis periférica', 'Espondilitis, sacroileítis', '—'], ['Eritema nodoso', 'Pioderma gangrenoso', '—'], ['Aftas, epiescleritis', 'Uveítis', '—'], ['—', 'Colangitis esclerosante', '—']] },
            say: 'Las manifestaciones fuera del intestino se dividen en dos. Las que siguen la actividad del intestino, y mejoran al controlarlo: artritis periférica, eritema nodoso, aftas y epiescleritis. Y las que van por su lado: espondilitis y sacroileítis, uveítis, pioderma gangrenoso y colangitis esclerosante.' },
          { v: { k: 'list', t: 'Diagnóstico', items: ['Colonoscopia con ileoscopia y biopsias', 'Entero-TC o RM: intestino delgado y fístulas', 'Calprotectina fecal: inflamatorio vs SII', 'En cada brote: descartar C. difficile e infección', 'Colitis refractaria: buscar CMV'] },
            say: 'El diagnóstico se hace con colonoscopia, entrando al íleon, con biopsias. En Crohn se agrega entero tomografía o entero resonancia para ver intestino delgado y fístulas. La calprotectina fecal separa la inflamación del intestino irritable y sigue la actividad. Y en cada brote se descarta infección, sobre todo Clostridioides difficile, y en colitis refractaria, citomegalovirus.' },
          { v: { k: 'list', t: 'CUCI grave (Truelove y Witts)', items: ['6 o más evacuaciones con sangre al día', 'Y al menos uno de:', 'FC mayor de 90', 'T mayor de 37.8 °C', 'Hb menor de 10.5 o VSG mayor de 30'] },
            say: 'La gravedad de la colitis ulcerosa se mide con Truelove y Witts. Es grave si hay seis o más evacuaciones con sangre al día y al menos un dato sistémico: frecuencia cardiaca mayor de noventa, temperatura mayor de treinta y siete punto ocho, hemoglobina menor de diez punto cinco o sedimentación mayor de treinta.' },
          { v: { k: 'quiz', q: 'Andrés: 10 evacuaciones con sangre, FC 112, T 38.4, Hb 9.8. ¿Qué gravedad tiene?', opts: ['Leve: mesalazina oral en casa', 'Grave: hospitalizar con esteroide IV', 'Moderada: budesonida'], a: 1 },
            say: 'Pausa. Andrés tiene diez evacuaciones con sangre, taquicardia, fiebre y anemia. ¿Qué gravedad tiene y qué haces?',
            exp: 'Es colitis ulcerosa grave por Truelove y Witts. Se hospitaliza con metilprednisolona intravenosa, profilaxis de trombosis y se descarta difficile y citomegalovirus.' }
        ] },
        { ch: 'Tratamiento', sc: [
          { v: { k: 'flow', t: 'CUCI por escalones', steps: ['Leve-moderada: mesalazina oral + rectal', 'Sin respuesta: budesonida MMX o prednisona', 'Mantener: tiopurina o biológico', 'Grave: metilprednisolona IV', 'Sin respuesta día 3: infliximab o ciclosporina', 'Refractaria o megacolon: colectomía'] },
            say: 'Colitis ulcerosa por escalones. Leve a moderada: mesalazina oral más rectal, en supositorio si es proctitis o en enema si es colitis izquierda. Sin respuesta, budesonida MMX o prednisona. Para mantener, azatioprina o un biológico. En el brote grave, metilprednisolona intravenosa; si al tercer día no responde, rescate con infliximab o ciclosporina; y si es refractaria o hay megacolon, colectomía, que en esta enfermedad es curativa.' },
          { v: { k: 'list', t: 'Crohn', items: ['Ileocecal leve: budesonida', 'Moderado-grave: esteroide y biológico temprano', 'Mesalazina: poco papel', 'Perianal: drenaje, setón, antibiótico, anti-TNF', 'Cirugía conservadora: no cura'] },
            say: 'En Crohn, la enfermedad ileocecal leve se trata con budesonida. La moderada a grave, con esteroide para inducir y un biológico temprano, con o sin inmunomodulador. La mesalazina casi no sirve en Crohn. La enfermedad perianal con fístula se drena, se coloca un setón, se da antibiótico y anti TNF. Y la cirugía se hace ahorrando intestino, porque no es curativa.' },
          { v: { k: 'list', t: 'Biológicos y antes de iniciarlos', items: ['Anti-TNF: infliximab, adalimumab', 'Vedolizumab: anti-integrina intestinal', 'Ustekinumab, risankizumab: IL-12 y 23', 'Antes: TB latente, VHB, VHC, VIH', 'Vacunas al día'] },
            say: 'Los biológicos: anti TNF como infliximab y adalimumab, vedolizumab que solo actúa en el intestino, y ustekinumab o risankizumab contra interleucinas doce y veintitrés. Antes de iniciar cualquiera, busca tuberculosis latente, hepatitis B y C y VIH, y pon las vacunas al día.' },
          { v: { k: 'tip', kind: 'trap', t: 'Los esteroides inducen remisión pero NUNCA se usan de mantenimiento en EII.' },
            say: 'Trampa clásica: dejar al paciente con esteroide para mantener la remisión. Los esteroides solo inducen; para mantener se usan tiopurinas o biológicos.' }
        ] },
        { ch: 'Megacolon tóxico y vigilancia', sc: [
          { v: { k: 'big', h: 'Megacolon tóxico', t: '>6 cm', s: 'Colon transverso dilatado más de 6 cm con toxicidad sistémica. Riesgo de perforación.' },
            say: 'El megacolon tóxico es la dilatación del colon transverso a más de seis centímetros con toxicidad sistémica: fiebre, taquicardia y leucocitosis. Puede perforarse.' },
          { v: { k: 'flow', t: 'Manejo del megacolon', steps: ['Ayuno y sonda nasogástrica', 'Esteroide IV y antibiótico', 'Suspender opioides y antidiarreicos', 'Corregir potasio', 'Sin mejoría en 24 a 72 h o perforación: colectomía'] },
            say: 'Se maneja con ayuno, sonda nasogástrica, esteroide intravenoso y antibiótico, suspendiendo opioides y antidiarreicos que lo empeoran, y corrigiendo el potasio. Si no mejora en veinticuatro a setenta y dos horas o se perfora, colectomía.' },
          { v: { k: 'quiz', q: 'Andrés al día 3 de metilprednisolona: sigue con 9 evacuaciones y PCR alta. ¿Qué sigue?', opts: ['Esperar otra semana con esteroide', 'Rescate con infliximab o ciclosporina', 'Agregar loperamida'], a: 1 },
            say: 'Pausa. Al tercer día de metilprednisolona, Andrés sigue con nueve evacuaciones y la proteína C reactiva alta. ¿Qué sigue?',
            exp: 'Rescate con infliximab o ciclosporina. Si al tercer día de esteroide intravenoso no hay respuesta, esperar aumenta el riesgo de colectomía urgente. Y la loperamida está contraindicada porque favorece el megacolon.' },
          { v: { k: 'tip', kind: 'pearl', t: 'Colitis extensa de 8 años o más: colonoscopia de vigilancia cada 1 a 3 años; anual si hay colangitis esclerosante.' },
            say: 'Perla: después de ocho años de colitis extensa se inicia vigilancia con colonoscopia cada uno a tres años por el riesgo de cáncer; si además hay colangitis esclerosante, cada año.' }
        ] },
        { ch: 'Cierre del caso', sc: [
          { v: { k: 'list', t: 'Andrés: final del caso', items: ['C. difficile y CMV negativos', 'Metilprednisolona IV: sin respuesta al día 3', 'Infliximab de rescate: responde', 'TB latente descartada antes', 'Mantenimiento con infliximab'] },
            say: 'A Andrés le descartan difficile y citomegalovirus. Recibe metilprednisolona intravenosa, pero al tercer día no responde. Después de descartar tuberculosis latente recibe infliximab de rescate y responde en cuarenta y ocho horas. Se queda con infliximab de mantenimiento y el esteroide se retira poco a poco.' },
          { v: { k: 'mnemo', t: 'Crohn: parches, transmural, granuloma · CUCI: recto, continuo, mucosa', d: 'Brote grave: metilprednisolona IV → día 3 infliximab o ciclosporina → colectomía. Esteroide nunca de mantenimiento.' },
            say: 'Llévate el contraste: Crohn es en parches, transmural y con granulomas; la colitis ulcerosa, desde el recto, continua y de mucosa. Y en el brote grave: metilprednisolona, rescate al tercer día y colectomía si falla. Ahora practica en el algoritmo del taller.' }
        ] }
      ],
      sections: [
        { h: 'Crohn vs CUCI', html: `
<div class="tablewrap"><table class="mini">
<tr><th></th><th>Enfermedad de Crohn</th><th>Colitis ulcerosa (CUCI)</th></tr>
<tr><td>Localización</td><td>Boca a ano; <b>íleon terminal</b> (+ común); respeta el recto a menudo</td><td><b>Siempre recto</b>, extensión continua proximal; solo colon</td></tr>
<tr><td>Pared</td><td><b>Transmural</b>: fístulas, abscesos, estenosis</td><td>Mucosa/submucosa</td></tr>
<tr><td>Endoscopia</td><td>Lesiones salteadas, úlceras aftosas, <b>empedrado</b></td><td>Continua, friabilidad, pseudopólipos, pérdida de haustras (“tubo de plomo”)</td></tr>
<tr><td>Histología</td><td><b>Granulomas</b> no caseificantes</td><td>Abscesos de criptas</td></tr>
<tr><td>Clínica</td><td>Dolor en FID, diarrea, pérdida de peso, enfermedad perianal</td><td><b>Diarrea con sangre</b>, tenesmo, urgencia</td></tr>
<tr><td>Tabaco</td><td>Empeora</td><td>Protege</td></tr>
<tr><td>Anticuerpos</td><td>ASCA</td><td>p-ANCA</td></tr>
<tr><td>Complicaciones</td><td>Fístulas, estenosis, malabsorción (B12, sales biliares), litiasis de oxalato y biliar</td><td><b>Megacolon tóxico</b>, colangitis esclerosante primaria, cáncer colorrectal</td></tr>
</table></div>` },
        { h: 'Manifestaciones extraintestinales', html: `
<ul>
<li>Siguen la actividad intestinal: <b>artritis periférica</b>, eritema nodoso, aftas, epiescleritis.</li>
<li>Independientes: espondilitis/sacroileítis, uveítis, <b>pioderma gangrenoso</b>, <b>colangitis esclerosante primaria</b> (CUCI; p-ANCA; FA alta; aumenta riesgo de colangiocarcinoma y cáncer de colon).</li>
<li>También: TEV (profilaxis en hospitalizados), anemia (ferropénica y de inflamación), osteoporosis.</li>
</ul>` },
        { h: 'Diagnóstico', html: `
<ul>
<li>Colonoscopia con ileoscopia y <b>biopsias</b> (diagnóstico definitivo). TC o RM enterografía para intestino delgado, fístulas y abscesos (Crohn).</li>
<li>Laboratorio: BH (anemia), PCR, VSG, albúmina, <b>calprotectina fecal</b> (distingue inflamatorio de SII y sigue la actividad).</li>
<li>Siempre descartar infección en un brote: coprocultivo, <b>C. difficile</b>, parásitos; CMV en colitis refractaria.</li>
<li>Gravedad de CUCI (<b>Truelove y Witts</b>): grave = ≥6 evacuaciones con sangre + ≥1 de FC &gt;90, T &gt;37.8 °C, Hb &lt;10.5, VSG &gt;30.</li>
</ul>` },
        { h: 'Tratamiento', html: `
<ul>
<li><b>CUCI leve-moderada</b>: <b>mesalazina (5-ASA)</b> oral + rectal (supositorio en proctitis, enema en colitis izquierda). Sin respuesta → budesonida MMX o prednisona.</li>
<li><b>Esteroides</b>: solo para inducir remisión; nunca de mantenimiento.</li>
<li><b>Mantenimiento</b> en moderada-grave: tiopurinas (azatioprina; medir TPMT), metotrexato (Crohn), biológicos: <b>anti-TNF</b> (infliximab, adalimumab), vedolizumab (anti-integrina, intestinal), ustekinumab/risankizumab (anti-IL-12/23, IL-23); pequeñas moléculas (tofacitinib, upadacitinib, ozanimod).</li>
<li><b>Crohn</b>: budesonida (ileocecal leve), esteroide sistémico en brote moderado-grave; estrategia temprana con biológico ± inmunomodulador. La mesalazina tiene poco papel. Fístula perianal: antibiótico + drenaje (setón) + anti-TNF. Cirugía conservadora (resección/estricturoplastia): no es curativa.</li>
<li><b>CUCI grave</b>: hospitalizar, <b>metilprednisolona IV</b>, profilaxis de TEV, descartar <i>C. difficile</i>/CMV; sin respuesta al día 3 → <b>infliximab o ciclosporina</b>; refractaria, perforación o megacolon → <b>colectomía</b> (curativa en CUCI).</li>
<li>Antes de biológicos: <b>TB latente</b> (IGRA/PPD), VHB, VHC, VIH, vacunas.</li>
<li><b>Megacolon tóxico</b>: colon transverso &gt;6 cm + toxicidad sistémica → ayuno, SNG, esteroide IV, antibiótico, evitar opioides/antidiarreicos; cirugía si no mejora en 24–72 h o perfora.</li>
<li>Vigilancia de cáncer: colonoscopia desde los <b>8 años</b> de colitis extensa (anual si hay colangitis esclerosante).</li>
</ul>` },
        { h: 'Cómo lo preguntan en el examen', html: `
<ul>
<li>Joven con dolor en FID, pérdida de peso, fístula perianal, empedrado y granulomas → <b>Crohn</b>.</li>
<li>Diarrea con sangre continua desde el recto → <b>CUCI</b>.</li>
<li>CUCI con FA alta e ictericia → <b>colangitis esclerosante primaria</b> → CPRM.</li>
<li>CUCI grave → <b>esteroide IV</b> y descartar <i>C. difficile</i>.</li>
<li>Antes de infliximab → <b>IGRA o PPD</b>.</li>
<li>Crohn ileal resecado con anemia macrocítica → <b>déficit de B12</b>.</li>
</ul>` }
      ],
      mnemo: { t: 'CUCI: recto, continuo, mucosa, sangre', d: 'Crohn: salteado, transmural, fístulas, íleon terminal, granulomas, el tabaco lo empeora. CUCI: recto, continuo, mucosa, diarrea con sangre, megacolon, colangitis esclerosante.' },
      pearl: 'La calprotectina fecal separa inflamación intestinal (EII, alta) de trastorno funcional (SII, normal).',
      trap: 'En todo brote de EII descarta infección por Clostridioides difficile antes de escalar inmunosupresión.',
      guide: [
        'ECCO 2022/ACG 2019: en Crohn moderado-grave se prefiere biológico temprano (“top-down” en alto riesgo) en vez del escalonamiento lento.',
        'Tu guía menciona 5-ASA para Crohn; las guías actuales no lo recomiendan para inducir ni mantener la remisión en Crohn.'
      ],
      refs: [
        'Rubin DT, et al. ACG Clinical Guideline: Ulcerative colitis in adults. Am J Gastroenterol 2019.',
        'Lichtenstein GR, et al. ACG Clinical Guideline: Management of Crohn’s disease in adults. Am J Gastroenterol 2018 (actualización 2025).',
        'Raine T, et al. ECCO Guidelines on therapeutics in ulcerative colitis. J Crohns Colitis 2022.',
        'Torres J, et al. ECCO Guidelines on therapeutics in Crohn’s disease. J Crohns Colitis 2020.'
      ]
    }
  },

  guias: {
    eii: { src: SRC,
      puntos: [
        'Crohn: lesiones salteadas, transmural, ileocecal; fístulas, estenosis, granulomas, empedrado, signo de la cuerda; ASCA; menos riesgo de cáncer que CUCI.',
        'CUCI: siempre recto con extensión proximal; mucosa y submucosa; diarrea con sangre, tenesmo, megacolon tóxico; colangitis esclerosante y pioderma; p-ANCA.',
        'Diagnóstico: VSG, PCR, calprotectina fecal, coprocultivo y <i>C. difficile</i>, colonoscopia y biopsia (definitivo).',
        'Tratamiento: 5-ASA, esteroides para brotes, inmunomoduladores (azatioprina) o biológicos (infliximab) para mantener; cirugía para fístula, absceso o perforación; proctocolectomía en CUCI.',
        'Vigilancia de cáncer en CUCI 8 años después del diagnóstico, colonoscopia anual.'
      ],
      ojo: ['La 5-ASA prácticamente no se usa ya en Crohn; en enfermedad moderada-grave se prefiere biológico temprano.'],
      cards: [['Signo de la cuerda', 'Estenosis ileal en el tránsito intestinal: Crohn']] }
  },

  cards: [
    ['Crohn: localización más común', 'Íleon terminal'],
    ['CUCI: dónde empieza', 'Siempre en el recto, extensión continua'],
    ['Transmural', 'Crohn (fístulas, abscesos, estenosis)'],
    ['Granulomas no caseificantes', 'Crohn'],
    ['Abscesos de criptas', 'CUCI'],
    ['Tabaco y EII', 'Empeora Crohn, protege de CUCI'],
    ['p-ANCA / ASCA', 'CUCI / Crohn'],
    ['Colangitis esclerosante primaria', 'CUCI (FA alta, riesgo de colangiocarcinoma)'],
    ['Truelove-Witts grave', '≥6 evacuaciones con sangre + FC >90, T >37.8, Hb <10.5 o VSG >30'],
    ['CUCI leve-moderada: tratamiento', 'Mesalazina oral + rectal'],
    ['CUCI grave: tratamiento', 'Metilprednisolona IV; rescate infliximab/ciclosporina o colectomía'],
    ['Esteroides en EII', 'Solo inducción, nunca mantenimiento'],
    ['Antes de anti-TNF', 'Descartar TB latente y VHB'],
    ['Megacolon tóxico', 'Colon >6 cm + toxicidad: esteroide IV, ayuno, cirugía si no mejora'],
    ['Vigilancia de cáncer en colitis', 'Colonoscopia a partir de 8 años de colitis extensa'],
    ['Crohn ileal resecado', 'Déficit de B12, diarrea por sales biliares, litiasis de oxalato']
  ],

  questions: [
    q({ id: 'eii-01', dif: 1, stem: 'Joven de 22 años con dolor en FID, diarrea sin sangre, pérdida de peso y fístula perianal. Colonoscopia: lesiones salteadas con empedrado en íleon terminal. ¿Diagnóstico?', opts: ['CUCI', 'Enfermedad de Crohn', 'Colitis isquémica', 'SII', 'TB intestinal'], ans: 1,
      exp: 'Lesiones salteadas, ileales, transmurales con fístulas: Crohn.', why: ['Es continua desde el recto y no da fístulas.', '', 'Es de ancianos y del ángulo esplénico.', 'No da lesiones endoscópicas.', 'Diferencial, pero el cuadro es típico de Crohn.'], ref: 'ACG 2018' }),
    q({ id: 'eii-02', dif: 1, stem: 'Hombre de 30 años con diarrea con sangre, tenesmo y urgencia. Colonoscopia: inflamación continua desde el recto hasta el colon descendente. ¿Diagnóstico?', opts: ['Crohn', 'CUCI', 'Diverticulitis', 'Cáncer de colon', 'Hemorroides'], ans: 1,
      exp: 'Inflamación continua de la mucosa que inicia en el recto: colitis ulcerosa.', why: ['Sería salteada.', '', 'No es continua desde el recto.', 'No se presenta así.', 'No explica la colitis.'], ref: 'ACG 2019' }),
    q({ id: 'eii-03', dif: 2, stem: 'Paciente con CUCI con 9 evacuaciones con sangre, FC 110, T 38.2 °C y Hb 9.6. ¿Tratamiento inicial?', opts: ['Mesalazina oral ambulatoria', 'Hospitalizar y metilprednisolona IV', 'Loperamida', 'Colectomía inmediata', 'Antibiótico oral'], ans: 1,
      exp: 'Colitis grave (Truelove-Witts): hospitalización, esteroide IV, profilaxis de TEV y descartar infección.', why: ['Insuficiente.', '', 'Riesgo de megacolon.', 'Solo si no responde o hay complicación.', 'No trata la colitis.'], ref: 'ACG 2019' }),
    q({ id: 'eii-04', dif: 2, stem: 'El paciente anterior no responde tras 3 días de esteroide IV. ¿Siguiente paso?', opts: ['Más días de esteroide', 'Rescate con infliximab o ciclosporina (o colectomía)', 'Mesalazina', 'Alta', 'Azatioprina sola'], ans: 1,
      exp: 'Colitis grave refractaria a esteroides: rescate médico (infliximab o ciclosporina); si falla, colectomía.', why: ['Aumenta el riesgo.', '', 'Insuficiente.', 'Peligroso.', 'Tarda meses.'], ref: 'ECCO 2022' }),
    q({ id: 'eii-05', dif: 2, stem: 'Antes de iniciar infliximab, ¿qué estudios son obligatorios?', opts: ['Colonoscopia y TC', 'IGRA o PPD y serología de hepatitis B', 'Ecocardiograma', 'Densitometría', 'Biopsia hepática'], ans: 1,
      exp: 'Los anti-TNF reactivan TB latente y VHB: se descartan antes de iniciar.', why: ['No son obligatorios para esto.', '', 'Solo si hay IC (anti-TNF contraindicado en IC grave).', 'No es obligatoria.', 'No es obligatoria.'], ref: 'ECCO 2022' }),
    q({ id: 'eii-06', dif: 2, stem: 'Paciente con CUCI con FA elevada, prurito y colangiografía con estenosis y dilataciones “en cuentas de rosario”. ¿Diagnóstico?', opts: ['Colangitis biliar primaria', 'Colangitis esclerosante primaria', 'Coledocolitiasis', 'Colangiocarcinoma', 'Hepatitis autoinmune'], ans: 1,
      exp: 'La CEP se asocia a CUCI (p-ANCA) y aumenta el riesgo de colangiocarcinoma y cáncer de colon.', why: ['Es de mujeres con antimitocondriales.', '', 'No da ese patrón.', 'Es complicación de la CEP.', 'Da transaminasas altas.'], ref: 'ACG 2019' }),
    q({ id: 'eii-07', dif: 2, stem: 'Paciente con CUCI con distensión abdominal, fiebre, taquicardia y RX con colon transverso de 8 cm. ¿Diagnóstico y conducta inicial?', opts: ['Íleo; laxantes', 'Megacolon tóxico; ayuno, SNG, esteroide IV, antibiótico y valoración quirúrgica', 'Vólvulo; colonoscopia descompresiva', 'Pseudoobstrucción; neostigmina', 'Diverticulitis; antibiótico'], ans: 1,
      exp: 'Megacolon tóxico: tratamiento médico intensivo y cirugía si no mejora en 24–72 h o perfora. Evitar opioides y antidiarreicos.', why: ['Peligroso.', '', 'No es vólvulo.', 'No aplica.', 'No aplica.'], ref: 'ACG 2019' }),
    q({ id: 'eii-08', dif: 1, stem: '¿Qué hábito empeora la enfermedad de Crohn y parece proteger de la CUCI?', opts: ['Alcohol', 'Tabaquismo', 'Café', 'Ejercicio', 'Dieta vegetariana'], ans: 1,
      exp: 'El tabaco aumenta el riesgo y la gravedad del Crohn; dejarlo es parte del tratamiento.', why: ['No es el clásico.', '', 'No.', 'No.', 'No.'], ref: 'ACG 2018' }),
    q({ id: 'eii-09', dif: 2, stem: 'Paciente con Crohn al que se le resecaron 80 cm de íleon terminal. ¿Qué deficiencia vitamínica esperas?', opts: ['Vitamina C', 'Vitamina B12', 'Folato', 'Hierro', 'Tiamina'], ans: 1,
      exp: 'La B12 (unida a factor intrínseco) se absorbe en el íleon terminal; también se pierden sales biliares (diarrea, litiasis biliar y de oxalato).', why: ['No.', '', 'Se absorbe en yeyuno.', 'Se absorbe en duodeno.', 'No.'], ref: 'ACG 2018' }),
    q({ id: 'eii-10', dif: 2, stem: 'Paciente con CUCI limitada al recto (proctitis) leve. ¿Tratamiento de primera línea?', opts: ['Prednisona oral', 'Supositorios de mesalazina', 'Infliximab', 'Colectomía', 'Metronidazol'], ans: 1,
      exp: 'La proctitis leve se trata con mesalazina tópica en supositorio (más eficaz que la oral).', why: ['No es primera línea.', '', 'No está indicado.', 'No.', 'No.'], ref: 'ACG 2019' }),
    q({ id: 'eii-11', dif: 2, stem: 'Paciente con Crohn con brote que mejoró con prednisona; al bajar la dosis recae dos veces. ¿Qué haces?', opts: ['Prednisona de mantenimiento indefinida', 'Iniciar terapia de mantenimiento (biológico ± inmunomodulador)', 'Mesalazina', 'Solo dieta', 'Antibiótico crónico'], ans: 1,
      exp: 'Corticodependencia: se requiere un fármaco ahorrador de esteroide (anti-TNF, ustekinumab, vedolizumab, tiopurina).', why: ['Los esteroides no mantienen y tienen muchos efectos.', '', 'Poco útil en Crohn.', 'Insuficiente.', 'No.'], ref: 'ACG 2018' }),
    q({ id: 'eii-12', dif: 2, stem: '¿Qué estudio no invasivo ayuda a distinguir EII de síndrome de intestino irritable?', opts: ['Sangre oculta en heces', 'Calprotectina fecal', 'Elastasa fecal', 'Anti-transglutaminasa', 'Amilasa'], ans: 1,
      exp: 'La calprotectina (proteína de neutrófilos) se eleva en inflamación intestinal y es normal en el SII.', why: ['Inespecífica.', '', 'Evalúa el páncreas.', 'Evalúa celiaca.', 'No relacionado.'], ref: 'ACG 2019' }),
    q({ id: 'eii-13', dif: 2, stem: 'Paciente con CUCI con úlcera dolorosa necrótica de bordes violáceos en la pierna. ¿Diagnóstico?', opts: ['Eritema nodoso', 'Pioderma gangrenoso', 'Celulitis', 'Úlcera venosa', 'Vasculitis'], ans: 1,
      exp: 'El pioderma gangrenoso es manifestación extraintestinal de EII (más CUCI); no se debe desbridar (patergia).', why: ['Son nódulos dolorosos, no úlceras.', '', 'No hay datos de infección.', 'No es la localización ni el aspecto.', 'Menos probable.'], ref: 'ACG 2019' }),
    q({ id: 'eii-14', dif: 2, stem: 'Paciente con CUCI pancolónica de 10 años de evolución. ¿Qué vigilancia necesita?', opts: ['Ninguna', 'Colonoscopia de vigilancia con biopsias cada 1–3 años', 'TC anual', 'Sangre oculta anual', 'CEA cada mes'], ans: 1,
      exp: 'La colitis extensa aumenta el riesgo de cáncer colorrectal: colonoscopia desde los 8 años de enfermedad (anual si hay CEP).', why: ['Riesgo elevado.', '', 'No es el método.', 'Insuficiente.', 'No es tamizaje.'], ref: 'ACG 2019' }),
    q({ id: 'eii-15', dif: 3, stem: 'Paciente con CUCI con brote refractario que al hospitalizarse tiene diarrea más intensa. ¿Qué debes descartar antes de escalar la inmunosupresión?', opts: ['Hipertiroidismo', 'Infección por Clostridioides difficile y CMV', 'Celiaca', 'Intolerancia a lactosa', 'SII'], ans: 1,
      exp: 'C. difficile complica con frecuencia los brotes de EII; CMV en colitis refractaria a esteroides.', why: ['No es lo primero.', '', 'No es lo primero.', 'No explica.', 'No explica.'], ref: 'ECCO 2022' })
  ]
};
