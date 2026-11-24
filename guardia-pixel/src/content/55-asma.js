// Tema 56 · Asma (Neumología, semana 7)
const T = { topic: 'asma', subj: 'neumo' };
const q = (o) => ({ ...T, ...o });
const SRC = { short: 'De tu Guía Neumo', vs: 'tu guía', name: 'Guía Neumo · Ximena Cors Cepeda (EMIS 5)', url: 'https://docs.google.com/document/d/1by5z7_drpzSNZPiEH1e9SHIx5ui6osaTPySJ1mnDAWg/edit' };

export default {
  lessons: {
    asma: {
      hook: 'El asma es obstrucción reversible: la espirometría con broncodilatador lo demuestra. Hoy nadie con asma debe usar solo salbutamol: el rescate preferido es budesonida-formoterol. Y en la crisis: O₂, SABA, esteroide sistémico y magnesio si no responde.',
      nn: [], yt: 'asthma GINA steps exacerbation management',
      video: [
        { ch: 'Qué es el asma', sc: [
          { v: { k: 'title', t: 'Asma', s: 'Semana 7 · Neumología' },
            say: 'Semana siete: el asma. Es la enfermedad respiratoria crónica más frecuente en jóvenes, y en el examen la preguntan de tres maneras: cómo se diagnostica, qué escalón de tratamiento toca y qué hacer en una crisis. Vamos por las tres con una paciente.' },
          { v: { k: 'case', t: 'Crisis en urgencias', p: { name: 'Karla', age: 23, sex: 'M', skin: '#E2B08A', hair: '#2A1A12', gown: '#9FD8FF' }, text: 'Asmática desde niña, solo usa salbutamol. Lleva 2 días con gripa. Hoy habla en frases cortas, usa músculos accesorios y tiene sibilancias difusas.', vit: { FR: '30', FC: '122', SpO2: '89%', FEP: '40%' } },
            say: 'Conoce a Karla, de veintitrés años. Es asmática desde niña y solo usa salbutamol cuando se ahoga. Hace dos días le dio gripa y hoy llega hablando en frases cortas, con músculos accesorios, sibilancias en ambos campos, frecuencia respiratoria de treinta y saturación de ochenta y nueve por ciento. Antes de tratarla, entendamos qué le pasa a su bronquio.' },
          { v: { k: 'list', t: 'Tres fenómenos en el bronquio', items: ['Inflamación crónica (eosinófilos, Th2)', 'Broncoconstricción reversible', 'Hiperreactividad a estímulos', 'Con los años: remodelación'] },
            say: 'El asma es una inflamación crónica de la vía aérea, casi siempre de tipo dos, con eosinófilos, interleucinas cuatro, cinco y trece e inmunoglobulina E. Esa inflamación hace que el bronquio se cierre de forma reversible y que reaccione de más a estímulos que en otra persona no harían nada. Si no se trata por años, el bronquio se remodela y la obstrucción deja de ser reversible.' },
          { v: { k: 'list', t: 'Desencadenantes', items: ['Virus respiratorios (el más común en crisis)', 'Alérgenos: ácaros, polen, mascotas', 'Ejercicio y aire frío', 'Humo, contaminación', 'AINE y aspirina; betabloqueadores'] },
            say: 'Lo que dispara una crisis: sobre todo las infecciones virales, como en Karla. También alérgenos como ácaros, polen y mascotas, el ejercicio con aire frío, el humo y la contaminación. Y dos fármacos que el examen adora: los antiinflamatorios no esteroideos en el asma sensible a aspirina, y los betabloqueadores, incluso en gotas para glaucoma.' }
        ] },
        { ch: 'Cómo se diagnostica', sc: [
          { v: { k: 'list', t: 'Sospecha clínica', items: ['Tos, sibilancias, disnea, opresión', 'Variables: van y vienen', 'Peor de noche o en la madrugada', 'Con desencadenantes claros', 'Atopia: rinitis, dermatitis'] },
            say: 'Sospechas asma cuando los síntomas son variables: tos, sibilancias, falta de aire y opresión que van y vienen, empeoran en la noche o en la madrugada y aparecen con desencadenantes. Si además hay rinitis o dermatitis atópica, la sospecha sube.' },
          { v: { k: 'flow', t: 'Confirmar con función pulmonar', steps: ['Espirometría con broncodilatador', 'FEV1/FVC bajo = obstrucción', 'FEV1 sube ≥12% y ≥200 mL = reversible', 'Normal: metacolina o variabilidad del FEP'] },
            say: 'Se confirma con espirometría antes y después de salbutamol. El cociente entre el volumen espirado en el primer segundo y la capacidad vital forzada baja: hay obstrucción. Y si el volumen del primer segundo sube doce por ciento y al menos doscientos mililitros con el broncodilatador, la obstrucción es reversible: eso es asma. Si la espirometría sale normal y la sospecha sigue, se hace reto con metacolina o se mide la variabilidad del flujo espiratorio pico.' },
          { v: { k: 'vs', a: 'Asma', b: 'EPOC', rows: [['Edad', 'Joven, desde la infancia', 'Mayor de 40, fumador'], ['Síntomas', 'Variables, nocturnos', 'Progresivos, diarios'], ['Reversibilidad', 'Sí, puede normalizar', 'Persistente tras broncodilatador'], ['Inflamación', 'Eosinófilos', 'Neutrófilos'], ['Base del tratamiento', 'Corticoide inhalado', 'Broncodilatador de acción larga']] },
            say: 'Compáralo con la EPOC. El asma empieza joven, con síntomas variables y nocturnos, obstrucción que se revierte y eosinófilos; su base es el corticoide inhalado. La EPOC aparece después de los cuarenta en fumadores, con síntomas progresivos y obstrucción que persiste después del broncodilatador; su base son los broncodilatadores de acción larga.' },
          { v: { k: 'quiz', q: 'Tos nocturna y sibilancias. Espirometría normal. ¿Siguiente paso?', opts: ['Descartar asma', 'Reto con metacolina', 'Tomografía de tórax'], a: 1 },
            say: 'Pausa. Paciente con tos nocturna y sibilancias, pero la espirometría salió normal. ¿Qué sigue?',
            exp: 'Reto con metacolina. Una espirometría normal no descarta el asma porque entre crisis el bronquio puede estar abierto. Si con metacolina el volumen del primer segundo cae veinte por ciento o más, hay hiperreactividad. Un reto negativo, en cambio, casi descarta el asma.' }
        ] },
        { ch: 'Tratamiento crónico por escalones', sc: [
          { v: { k: 'big', h: 'Regla de oro de GINA', t: 'Nunca SABA solo', s: 'Todo asmático lleva corticoide inhalado. El salbutamol solo aumenta crisis graves y muertes.' },
            say: 'La regla más importante de la guía GINA: ningún asmático debe usar salbutamol solo. El broncodilatador de acción corta abre el bronquio pero no toca la inflamación, y usarlo solo se asocia a más crisis graves y más muertes. Todo asmático lleva corticoide inhalado, aunque sea a demanda.' },
          { v: { k: 'flow', t: 'Vía 1 de GINA', steps: ['Pasos 1 y 2: budesonida-formoterol a demanda', 'Paso 3: MART dosis baja', 'Paso 4: MART dosis media', 'Paso 5: + tiotropio, fenotipo y biológico'] },
            say: 'La vía preferida usa budesonida con formoterol. En los pasos uno y dos, a demanda: el paciente lo inhala solo cuando tiene síntomas y así recibe corticoide cada vez. En el paso tres, la misma combinación como mantenimiento y rescate, llamada MART, a dosis baja. En el cuatro, MART a dosis media. En el cinco se agrega tiotropio, se estudia el fenotipo y se considera un biológico.' },
          { v: { k: 'list', t: 'Biológicos en asma grave', items: ['Anti-IgE: omalizumab (alérgico)', 'Anti-IL-5: mepolizumab, benralizumab', 'Anti-IL-4R: dupilumab', 'Anti-TSLP: tezepelumab', 'Requisito: técnica y apego revisados'] },
            say: 'Los biológicos son para el asma grave que sigue sin control en el paso cinco. Omalizumab, contra la inmunoglobulina E, en el asma alérgica. Mepolizumab y benralizumab, contra la interleucina cinco, cuando hay eosinófilos altos. Dupilumab bloquea el receptor de interleucina cuatro, y tezepelumab actúa más arriba, contra TSLP. Pero antes de cualquiera, revisa técnica de inhalación y apego.' },
          { v: { k: 'list', t: 'Antes de subir un escalón', items: ['Técnica de inhalación', 'Apego real', 'Desencadenantes en casa o trabajo', 'Rinitis, ERGE, obesidad', 'Bajar escalón tras 3 meses controlado'] },
            say: 'Antes de subir un escalón, revisa cuatro cosas: la técnica con el inhalador, que lo use de verdad, los desencadenantes en casa o en el trabajo, y comorbilidades como rinitis, reflujo y obesidad. Y si lleva tres meses controlado, intenta bajar un escalón.' }
        ] },
        { ch: 'La crisis asmática', sc: [
          { v: { k: 'list', t: 'Crisis grave', items: ['Habla en palabras o frases cortas', 'FR mayor de 30, FC mayor de 120', 'SpO2 menor de 90%', 'FEP 50% o menos', 'Músculos accesorios'] },
            say: 'Volvamos con Karla. Habla en frases cortas, respira treinta veces por minuto, su frecuencia cardiaca pasa de ciento veinte, satura menos de noventa y su flujo pico es de cuarenta por ciento. Es una crisis grave.' },
          { v: { k: 'list', t: 'Amenaza vital', items: ['Somnolencia o confusión', 'Tórax silencioso', 'Bradicardia o hipotensión', 'PaCO2 normal o alta', 'Agotamiento: no puede hablar'] },
            say: 'Aprende los datos de amenaza vital, porque cambian la conducta: somnolencia o confusión, tórax silencioso porque ya casi no mueve aire, bradicardia, hipotensión y un dióxido de carbono normal o alto. En una crisis, el paciente debería tener el CO2 bajo por la taquipnea; si sube, se está cansando.' },
          { v: { k: 'flow', t: 'Tratamiento en urgencias', steps: ['O2 para SpO2 93 a 95%', 'Salbutamol c/20 min la 1a hora', 'Ipratropio si es grave', 'Esteroide sistémico temprano', 'Sin respuesta: sulfato de magnesio 2 g IV', 'Deterioro: UCI e intubación'] },
            say: 'El tratamiento: oxígeno para una saturación de noventa y tres a noventa y cinco. Salbutamol inhalado cada veinte minutos durante la primera hora, con ipratropio si la crisis es grave. Esteroide sistémico temprano, por ejemplo prednisona cuarenta a cincuenta miligramos por cinco a siete días. Si no responde, sulfato de magnesio dos gramos intravenoso. Y si se deteriora, terapia intensiva e intubación.' },
          { v: { k: 'quiz', q: 'Karla, a la hora: somnolienta, tórax silencioso, PaCO2 46. ¿Qué haces?', opts: ['Otra nebulización y observar', 'Intubar y llevar a UCI', 'Alta con prednisona'], a: 1 },
            say: 'Pausa. Una hora después, Karla está somnolienta, ya casi no se escuchan sibilancias y su CO2 es de cuarenta y seis. ¿Qué haces?',
            exp: 'Intubar y llevar a terapia intensiva. El tórax silencioso no es mejoría: ya no mueve aire. Y un CO2 normal o alto en plena crisis significa agotamiento respiratorio. Es amenaza vital.' }
        ] },
        { ch: 'Cierre y trampas', sc: [
          { v: { k: 'list', t: 'Karla: al egreso', items: ['Inicia corticoide inhalado (nunca SABA solo)', 'Budesonida-formoterol como rescate', 'Prednisona 5 a 7 días', 'Plan de acción escrito', 'Revisión en 2 a 7 días'] },
            say: 'Karla mejora con el tratamiento de terapia intensiva. Al egreso ya no se va solo con salbutamol: inicia budesonida con formoterol, termina cinco a siete días de prednisona, se lleva un plan de acción escrito y una cita en dos a siete días.' },
          { v: { k: 'tip', kind: 'trap', t: 'Tórax silencioso NO es mejoría: ya no entra aire. Con PaCO2 normal o alta en crisis, el paciente se está agotando.' },
            say: 'La trampa típica: interpretar el tórax silencioso como mejoría. Es lo contrario: ya no entra aire. Y un CO2 normal en crisis es una alarma, no un alivio.' },
          { v: { k: 'tip', kind: 'pearl', t: 'Asma + pólipos nasales + reacción a aspirina = enfermedad respiratoria exacerbada por AINE (Samter): montelukast y evitar AINE.' },
            say: 'Perla: asma, pólipos nasales y reacción a la aspirina es la tríada de Samter, la enfermedad respiratoria exacerbada por antiinflamatorios. Responde bien a montelukast y el paciente debe evitar los antiinflamatorios.' },
          { v: { k: 'mnemo', t: 'Nunca SABA solo', d: 'Diagnóstico: reversibilidad ≥12% y 200 mL. Crónico: budesonida-formoterol. Crisis: O2, salbutamol, ipratropio, esteroide, magnesio.' },
            say: 'Llévate esto: nunca salbutamol solo. Diagnóstico con reversibilidad de doce por ciento y doscientos mililitros. Tratamiento con budesonida y formoterol. Y en la crisis: oxígeno, salbutamol, ipratropio, esteroide y magnesio. Ahora ve al taller y decide paso a paso en el algoritmo del asma.' }
        ] }
      ],
      sections: [
        { h: 'Diagnóstico', html: `
<ul>
<li>Síntomas variables (tos, sibilancias, disnea, opresión), de noche o madrugada, con desencadenantes (alérgenos, virus, ejercicio, frío, humo, AINE/aspirina, betabloqueadores, ERGE).</li>
<li><b>Espirometría</b>: obstrucción (FEV₁/FVC &lt;0.7 o &lt;LIN) con <b>reversibilidad</b>: FEV₁ ↑ ≥12 % y ≥200 mL tras salbutamol. Si es normal: <b>reto con metacolina</b> (caída de FEV₁ ≥20 %) o variabilidad del flujo espiratorio pico &gt;10 %.</li>
<li>Fenotipo T2: eosinófilos en sangre ≥150–300, FeNO alto, IgE; atopia (rinitis, dermatitis).</li>
<li>Triada de Samter (EREA): asma + pólipos nasales + sensibilidad a aspirina/AINE.</li>
<li>Diferencial: EPOC, IC, disfunción de cuerdas vocales, bronquiectasias, aspergilosis broncopulmonar alérgica (eosinofilia, IgE muy alta, bronquiectasias centrales).</li>
</ul>` },
        { h: 'Tratamiento crónico (GINA)', html: `
<div class="tablewrap"><table class="mini">
<tr><th>Paso</th><th>Vía 1 (preferida)</th><th>Vía 2</th></tr>
<tr><td>1–2</td><td><b>Budesonida-formoterol a demanda</b> (dosis baja)</td><td>CSI dosis baja cada vez que use SABA, o diario + SABA</td></tr>
<tr><td>3</td><td>Budesonida-formoterol dosis baja de <b>mantenimiento y rescate</b> (MART)</td><td>CSI-LABA dosis baja + SABA</td></tr>
<tr><td>4</td><td>MART dosis media</td><td>CSI-LABA dosis media-alta</td></tr>
<tr><td>5</td><td>+ <b>LAMA</b> (tiotropio), referir; fenotipo → <b>biológico</b> (anti-IgE omalizumab, anti-IL-5 mepolizumab/benralizumab, anti-IL-4R dupilumab, anti-TSLP tezepelumab); azitromicina; esteroide oral como último recurso</td><td>Igual</td></tr>
</table></div>
<ul>
<li><b>No se recomienda SABA solo</b> sin corticoide inhalado (aumenta la mortalidad).</li>
<li>Control: síntomas diurnos o uso de rescate &gt;2/semana, despertares, limitación → no controlado. Antes de subir: técnica de inhalación, apego, desencadenantes, comorbilidades (rinitis, ERGE, obesidad). Bajar escalón tras 3 meses de control.</li>
<li>Efectos: candidiasis oral (enjuagar), disfonía; SABA: temblor, taquicardia, hipokalemia; LABA nunca sin CSI.</li>
</ul>` },
        { h: 'Crisis asmática', html: `
<ul>
<li>Gravedad: <b>grave</b> = habla en palabras, agitado, FR &gt;30, FC &gt;120, SatO₂ &lt;90 %, FEP ≤50 %. <b>Amenaza vital</b>: somnolencia, confusión, <b>tórax silencioso</b>, bradicardia, hipotensión, <b>PaCO₂ normal o alta</b> (agotamiento).</li>
<li>Tratamiento: <b>O₂</b> (meta SatO₂ 93–95 %), <b>salbutamol</b> inhalado (IDM con espaciador o nebulizado) cada 20 min la 1ª hora, <b>ipratropio</b> en crisis grave, <b>esteroide sistémico</b> temprano (prednisona 40–50 mg 5–7 días o metilprednisolona IV), <b>sulfato de magnesio 2 g IV</b> si es grave o no responde.</li>
<li>Sin respuesta o deterioro: UCI, VMNI con cuidado o <b>intubación</b>. Gasometría: al inicio alcalosis respiratoria; la normalización del PaCO₂ es alarma.</li>
<li>Al egreso: iniciar o escalar CSI, plan escrito, revisión en 2–7 días.</li>
</ul>` },
        { h: 'Cómo lo preguntan en el examen', html: `
<ul>
<li>Tos nocturna y sibilancias, FEV₁ mejora 18 % con salbutamol → <b>asma</b>.</li>
<li>Espirometría normal con sospecha → <b>metacolina</b>.</li>
<li>Asma leve → <b>budesonida-formoterol a demanda</b> (no SABA solo).</li>
<li>Crisis con PaCO₂ de 45 y somnolencia → <b>intubar</b>.</li>
<li>Crisis que no responde a salbutamol y esteroide → <b>sulfato de magnesio</b>.</li>
<li>Asma + pólipos + reacción a aspirina → <b>Samter</b> (montelukast, evitar AINE).</li>
</ul>` }
      ],
      mnemo: { t: 'Nunca SABA solo', d: 'Todo asmático lleva corticoide inhalado; el rescate preferido es budesonida-formoterol. En la crisis: O₂, salbutamol, ipratropio, esteroide sistémico, magnesio.' },
      pearl: 'En la crisis asmática, un PaCO₂ “normal” no es tranquilizador: el paciente debería tener hipocapnia por la taquipnea; si sube, se está agotando.',
      trap: 'Los betabloqueadores (incluso en gotas oftálmicas) y los AINE en asma sensible a aspirina pueden precipitar broncoespasmo grave.',
      guide: [
        'GINA 2024: SABA solo ya no se recomienda en ningún paso; la vía preferida usa budesonida-formoterol como rescate (y mantenimiento desde el paso 3).',
        'Tu guía describe la clasificación clásica por gravedad (intermitente/persistente) y el paso 1 con SABA; GINA ahora clasifica por control y por el tratamiento que necesita.'
      ],
      refs: [
        'Global Initiative for Asthma (GINA). Global Strategy for Asthma Management and Prevention, 2024.',
        'Reddel HK, et al. GINA 2022 executive summary. Eur Respir J 2022.',
        'Cloutier MM, et al. 2020 Focused Updates to the Asthma Management Guidelines (NAEPP). J Allergy Clin Immunol 2020.'
      ]
    }
  },

  guias: {
    asma: { src: SRC,
      puntos: [
        'Alérgica (extrínseca) la más común, atopia, buena respuesta; no alérgica (intrínseca) en &gt;40 años.',
        'Fisiopatología Th2: IL-4, IL-5, IL-13 → eosinófilos e IgE; triada de Samter (asma + pólipos + aspirina).',
        'Espirometría: FEV₁/FVC &lt;70 %, reversibilidad &gt;12 % con SABA; metacolina con caída &gt;20 %. Esputo: espirales de Curschmann, cristales de Charcot-Leyden.',
        'Escalones: ICS baja → ICS-formoterol → dosis media → + LAMA → + esteroide oral; biológicos (omalizumab, mepolizumab).',
        'Exacerbación: O₂, SABA c/20 min × 3, esteroide sistémico, magnesio en refractarios.'
      ],
      ojo: ['GINA ya no recomienda <b>SABA solo</b> en el paso 1: el rescate preferido es <b>budesonida-formoterol a demanda</b>.'],
      cards: [['Espirales de Curschmann', 'Moldes de moco en el esputo del asmático']] }
  },

  cards: [
    ['Reversibilidad en espirometría', 'FEV₁ ↑ ≥12 % y ≥200 mL tras broncodilatador'],
    ['Espirometría normal con sospecha de asma', 'Reto con metacolina (caída de FEV₁ ≥20 %)'],
    ['GINA pasos 1–2 (preferido)', 'Budesonida-formoterol a demanda'],
    ['GINA paso 3', 'Mantenimiento y rescate con budesonida-formoterol (MART)'],
    ['SABA solo', 'No se recomienda (más mortalidad)'],
    ['LABA sin corticoide inhalado', 'Contraindicado en asma'],
    ['Biológicos en asma grave', 'Omalizumab (IgE), mepolizumab (IL-5), dupilumab (IL-4R), tezepelumab (TSLP)'],
    ['Crisis: tratamiento', 'O₂, salbutamol c/20 min, ipratropio, esteroide sistémico, magnesio IV'],
    ['Signos de amenaza vital', 'Tórax silencioso, confusión, bradicardia, PaCO₂ normal o alta'],
    ['Triada de Samter', 'Asma + pólipos nasales + sensibilidad a aspirina'],
    ['Efecto adverso del corticoide inhalado', 'Candidiasis oral (enjuagar la boca)'],
    ['ABPA', 'Asma + eosinofilia + IgE muy alta + bronquiectasias centrales (Aspergillus)']
  ],

  questions: [
    q({ id: 'asma-01', dif: 1, stem: 'Mujer de 24 años con tos nocturna y sibilancias con el ejercicio. Espirometría: FEV₁/FVC 0.66, FEV₁ mejora 17 % (300 mL) tras salbutamol. ¿Diagnóstico?', opts: ['EPOC', 'Asma', 'IC', 'Fibrosis pulmonar', 'Bronquiectasias'], ans: 1,
      exp: 'Obstrucción con reversibilidad significativa en joven con síntomas variables: asma.', why: ['No es reversible y requiere exposición.', '', 'No da este patrón.', 'Es restrictiva.', 'No suele ser reversible así.'], ref: 'GINA 2024' }),
    q({ id: 'asma-02', dif: 2, stem: 'Paciente con síntomas sugestivos de asma y espirometría normal. ¿Siguiente estudio?', opts: ['TC de tórax', 'Reto con metacolina', 'Gasometría', 'Biopsia bronquial', 'Ninguno'], ans: 1,
      exp: 'La prueba de broncoprovocación demuestra hiperreactividad (caída ≥20 % del FEV₁); un resultado negativo hace muy improbable el asma.', why: ['No es el estudio.', '', 'No diagnostica.', 'No.', 'Debe estudiarse.'], ref: 'GINA 2024' }),
    q({ id: 'asma-03', dif: 2, stem: 'Joven con asma y síntomas 1 vez por semana, sin despertares. ¿Tratamiento preferido según GINA?', opts: ['Salbutamol a demanda solo', 'Budesonida-formoterol a demanda', 'Montelukast solo', 'Prednisona oral', 'Teofilina'], ans: 1,
      exp: 'GINA pasos 1–2: corticoide inhalado-formoterol a demanda reduce crisis graves frente a SABA solo.', why: ['Ya no se recomienda.', '', 'Menos eficaz.', 'No.', 'No.'], ref: 'GINA 2024' }),
    q({ id: 'asma-04', dif: 2, stem: 'Paciente con asma no controlada pese a CSI dosis baja. Antes de subir el escalón, ¿qué revisas?', opts: ['Nada', 'Técnica del inhalador, apego y desencadenantes', 'TC de tórax', 'Biopsia', 'Prueba de sudor'], ans: 1,
      exp: 'La mala técnica y el bajo apego son las causas más frecuentes de falta de control.', why: ['Incorrecto.', '', 'No es lo primero.', 'No.', 'No.'], ref: 'GINA 2024' }),
    q({ id: 'asma-05', dif: 2, stem: 'Paciente en crisis asmática que habla en palabras, FR 34, SatO₂ 88 %. ¿Tratamiento inicial?', opts: ['Solo antibiótico', 'O₂, salbutamol cada 20 min + ipratropio y esteroide sistémico', 'Sedación', 'Teofilina IV primero', 'Esperar'], ans: 1,
      exp: 'Crisis grave: broncodilatadores repetidos, anticolinérgico y esteroide sistémico temprano, con O₂.', why: ['No trata la crisis.', '', 'Peligrosa.', 'No es primera línea.', 'Peligroso.'], ref: 'GINA 2024' }),
    q({ id: 'asma-06', dif: 3, stem: 'Paciente en crisis asmática de 2 horas que ahora está somnoliento con tórax silencioso. Gasometría: pH 7.30, PaCO₂ 48. ¿Conducta?', opts: ['Más salbutamol y observar', 'Intubación y ventilación mecánica', 'Dar sedante', 'Alta', 'Solo O₂'], ans: 1,
      exp: 'Hipercapnia, alteración del estado de alerta y tórax silencioso indican agotamiento: falla respiratoria inminente.', why: ['Insuficiente.', '', 'Peligroso.', 'Absurdo.', 'Insuficiente.'], ref: 'GINA 2024' }),
    q({ id: 'asma-07', dif: 2, stem: 'Paciente con crisis grave que no mejora tras 1 hora de salbutamol, ipratropio y esteroide. ¿Qué agregas?', opts: ['Sulfato de magnesio 2 g IV', 'Antibiótico', 'Furosemida', 'Propranolol', 'Antihistamínico'], ans: 0,
      exp: 'El magnesio IV es broncodilatador en crisis graves o refractarias.', why: ['', 'Solo si hay infección bacteriana.', 'No.', 'Contraindicado.', 'Sin beneficio.'], ref: 'GINA 2024' }),
    q({ id: 'asma-08', dif: 2, stem: 'Paciente con asma, poliposis nasal y broncoespasmo tras tomar ibuprofeno. ¿Síndrome?', opts: ['Churg-Strauss', 'Enfermedad respiratoria exacerbada por aspirina (Samter)', 'ABPA', 'Löffler', 'Kartagener'], ans: 1,
      exp: 'Inhibición de COX → desviación a leucotrienos. Evitar AINE; montelukast útil; desensibilización.', why: ['Tendría vasculitis y eosinofilia marcada.', '', 'Tiene IgE muy alta y bronquiectasias.', 'Es infiltrado eosinofílico transitorio.', 'Es discinesia ciliar.'], ref: 'GINA 2024' }),
    q({ id: 'asma-09', dif: 2, stem: 'Paciente asmático con hipertensión al que se le inició propranolol y empeoró su asma. ¿Explicación?', opts: ['Coincidencia', 'Bloqueo β2 que causa broncoconstricción', 'Alergia', 'Infección', 'Reflujo'], ans: 1,
      exp: 'Los BB no selectivos bloquean β2 bronquiales; incluso el timolol oftálmico puede desencadenar crisis.', why: ['Es un efecto conocido.', '', 'No.', 'No.', 'No.'], ref: 'GINA 2024' }),
    q({ id: 'asma-10', dif: 1, stem: '¿Qué efecto adverso local es frecuente con los corticoides inhalados?', opts: ['Hiperglucemia grave', 'Candidiasis oral y disfonía', 'Cushing siempre', 'Osteoporosis aguda', 'Taquicardia'], ans: 1,
      exp: 'Se previene enjuagándose la boca y usando espaciador.', why: ['Es más de sistémicos.', '', 'Raro a dosis habituales.', 'No aguda.', 'Es de SABA.'], ref: 'GINA 2024' }),
    q({ id: 'asma-11', dif: 2, stem: 'Paciente con asma grave eosinofílica (eosinófilos 600) con crisis frecuentes pese a CSI-LABA dosis alta + LAMA. ¿Qué agregas?', opts: ['Teofilina', 'Biológico anti-IL-5 (mepolizumab o benralizumab)', 'Antibiótico crónico siempre', 'Esteroide oral indefinido como primera opción', 'Nada'], ans: 1,
      exp: 'En asma grave T2 con eosinofilia, los anti-IL-5 reducen exacerbaciones y el uso de esteroide oral.', why: ['Poco eficaz.', '', 'Azitromicina es opción, no la mejor aquí.', 'Muchos efectos adversos.', 'Hay opciones.'], ref: 'GINA 2024' }),
    q({ id: 'asma-12', dif: 2, stem: '¿Cuál es el criterio espirométrico de reversibilidad?', opts: ['FEV₁ ↑ ≥5 %', 'FEV₁ ↑ ≥12 % y ≥200 mL', 'FVC ↓ 20 %', 'FEV₁/FVC >0.9', 'DLCO baja'], ans: 1,
      exp: 'Aumento del FEV₁ ≥12 % y ≥200 mL tras broncodilatador.', why: ['Insuficiente.', '', 'No.', 'No.', 'No.'], ref: 'GINA 2024' }),
    q({ id: 'asma-13', dif: 2, stem: 'Asmático con eosinofilia, IgE >1000, bronquiectasias centrales y tapones de moco café. ¿Diagnóstico?', opts: ['Asma alérgica simple', 'Aspergilosis broncopulmonar alérgica', 'Tuberculosis', 'Fibrosis quística sola', 'Sarcoidosis'], ans: 1,
      exp: 'ABPA: hipersensibilidad a Aspergillus en asma o FQ; tratamiento con esteroides ± itraconazol.', why: ['No explica las bronquiectasias ni la IgE tan alta.', '', 'No.', 'Puede asociarse, pero el cuadro es ABPA.', 'No.'], ref: 'GINA 2024' }),
    q({ id: 'asma-14', dif: 2, stem: '¿Qué LABA nunca debe usarse sin corticoide inhalado en asma?', opts: ['Ninguno: todos pueden usarse solos', 'Salmeterol o formoterol solos están contraindicados', 'Solo salmeterol', 'Solo formoterol', 'Indacaterol puede'], ans: 1,
      exp: 'La monoterapia con LABA aumenta muertes por asma; siempre con CSI.', why: ['Incorrecto.', '', 'Ambos.', 'Ambos.', 'Tampoco en asma.'], ref: 'GINA 2024' }),
    q({ id: 'asma-15', dif: 2, stem: 'Paciente dado de alta tras una crisis asmática. ¿Qué indicas?', opts: ['Solo salbutamol', 'Esteroide oral 5–7 días + iniciar/escalar CSI + plan escrito y revisión pronta', 'Antibiótico', 'Nada', 'Teofilina'], ans: 1,
      exp: 'Tras una crisis: completar esteroide sistémico, controlador con CSI, plan de acción y seguimiento en días.', why: ['Riesgo de recaída.', '', 'Solo si hay infección bacteriana.', 'Riesgo alto.', 'No.'], ref: 'GINA 2024' }),
    q({ id: 'asma-16', dif: 1, stem: '¿Qué célula domina la inflamación típica del asma alérgica?', opts: ['Neutrófilo', 'Eosinófilo', 'Linfocito B solo', 'Plaqueta', 'Basófilo exclusivo'], ans: 1,
      exp: 'Inflamación tipo 2 (Th2: IL-4, IL-5, IL-13) con eosinófilos; en EPOC predominan neutrófilos.', why: ['Es de EPOC.', '', 'No.', 'No.', 'Participan, pero no dominan.'], ref: 'GINA 2024' }),
    q({ id: 'asma-17', dif: 2, stem: 'Paciente con asma bien controlada por 3 meses con CSI-LABA dosis media. ¿Qué haces?', opts: ['Suspender todo', 'Bajar de escalón (reducir la dosis de CSI)', 'Subir', 'Agregar biológico', 'Esteroide oral'], ans: 1,
      exp: 'Con control sostenido se reduce a la dosis mínima eficaz, sin suspender el CSI.', why: ['Riesgo de crisis.', '', 'No.', 'No.', 'No.'], ref: 'GINA 2024' }),
    q({ id: 'asma-18', dif: 2, stem: 'En una crisis asmática, ¿cuál es la meta de saturación de O₂ en adultos?', opts: ['100 %', '93–95 %', '85–88 %', '80 %', 'Irrelevante'], ans: 1,
      exp: 'Se titula O₂ a 93–95 %; la hiperoxia tampoco es beneficiosa.', why: ['Innecesario.', '', 'Es meta en EPOC con hipercapnia.', 'Insuficiente.', 'Incorrecto.'], ref: 'GINA 2024' }),
    q({ id: 'asma-19', dif: 2, stem: 'Joven con disnea y sibilancias solo con el ejercicio. ¿Tratamiento?', opts: ['Nada', 'Budesonida-formoterol antes del ejercicio (o SABA + CSI)', 'Antibiótico', 'Prednisona diaria', 'Teofilina'], ans: 1,
      exp: 'El broncoespasmo inducido por ejercicio se previene con inhalación previa; si hay asma de base, controlador.', why: ['Tiene síntomas.', '', 'No.', 'Excesivo.', 'No.'], ref: 'GINA 2024' }),
    q({ id: 'asma-20', dif: 2, stem: '¿Qué hallazgo de laboratorio esperas al inicio de una crisis asmática moderada?', opts: ['Acidosis respiratoria', 'Alcalosis respiratoria (PaCO₂ baja)', 'Acidosis metabólica grave', 'Hipercapnia marcada', 'Normal siempre'], ans: 1,
      exp: 'La taquipnea baja el CO₂; un PaCO₂ que se normaliza o sube indica agotamiento.', why: ['Es tardía y grave.', '', 'No es lo típico.', 'Es signo de gravedad.', 'No.'], ref: 'GINA 2024' })
  ]
};
