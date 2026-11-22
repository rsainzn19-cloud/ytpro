// Tema 37 · Hipotiroidismo (Endocrinología, semana 8)
const T = { topic: 'hipotiroidismo', subj: 'endo' };
const q = (o) => ({ ...T, ...o });
const ENDO = { short: 'De tu Guía Endocrino', vs: 'tu guía', name: 'Guía Endocrino · Ximena Cors Cepeda (EMIS 5)', url: 'https://docs.google.com/document/d/1ng1BpGOd1JywQaChMt0YWLQIRemXzi5hyUV_XVmYpsM/edit' };

export default {
  lessons: {
    hipotiroidismo: {
      hook: 'La TSH es el mejor tamizaje: alta con T4 libre baja es hipotiroidismo primario (casi siempre Hashimoto). Se trata con levotiroxina, y el coma mixedematoso es la urgencia: hidrocortisona antes que la hormona.',
      nn: [], yt: 'hypothyroidism Hashimoto myxedema coma levothyroxine',
      video: [
        { ch: 'Diagnóstico', sc: [
          { v: { k: 'title', t: 'Hipotiroidismo', s: 'Semana 8 · Endocrinología' },
            say: 'Semana ocho: la tiroides que se queda corta. El hipotiroidismo es frecuente, sobre todo en mujeres, y todo se vuelve lento: el metabolismo, el corazón, el intestino y hasta los reflejos.' },
          { v: { k: 'case', t: 'Cansada y con frío', p: { name: 'Rosa', age: 46, sex: 'M', skin: '#E2B08A', hair: '#3A2A1E', gown: '#B48CFF' }, text: 'Fatiga, frío, estreñimiento, subió 5 kg, piel seca, menstruaciones abundantes. Reflejos con relajación lenta.', vit: { TSH: '28', T4L: '0.5' } },
            say: 'Rosa tiene cuarenta y seis años. Está cansada, siempre tiene frío, está estreñida, subió cinco kilos y sus reglas son abundantes. Su TSH es de veintiocho y la T4 libre está baja.' },
          { v: { k: 'vs', a: 'Primario', b: 'Central', rows: [['TSH', 'Alta', 'Baja o normal'], ['T4 libre', 'Baja', 'Baja'], ['Causa típica', 'Hashimoto', 'Hipófisis'], ['Se ajusta con', 'TSH', 'T4 libre']] },
            say: 'Con TSH alta y T4 libre baja es hipotiroidismo primario: la glándula falla y la hipófisis grita. La causa más común es Hashimoto, con anticuerpos anti peroxidasa. Si la TSH está baja o normal con T4 baja, el problema es central, en la hipófisis.' },
          { v: { k: 'list', t: 'Subclínico: TSH alta con T4 normal', items: ['Tratar si TSH 10 o más', 'Tratar si embarazo o busca embarazo', 'Considerar si síntomas o anti-TPO', 'Repetir en 6 a 12 semanas'] },
            say: 'Si la TSH está alta pero la T4 libre es normal, es subclínico. Se trata si la TSH pasa de diez, si hay embarazo o se busca, y se considera con síntomas o anticuerpos positivos.' }
        ] },
        { ch: 'Tratamiento y urgencia', sc: [
          { v: { k: 'big', h: 'Levotiroxina', t: '1.6 µg por kg', u: 'en ancianos o cardiópatas: 25 a 50 µg' },
            say: 'El tratamiento es levotiroxina, alrededor de uno punto seis microgramos por kilo, en ayunas. En ancianos o cardiópatas se empieza con veinticinco a cincuenta y se sube despacio. La TSH se revisa a las seis u ocho semanas.' },
          { v: { k: 'list', t: 'Coma mixedematoso', items: ['Hipotermia y estado mental alterado', 'Bradicardia, hipoventilación', 'Hiponatremia, hipoglucemia', 'Hidrocortisona primero', 'Levotiroxina IV'] },
            say: 'La urgencia es el coma mixedematoso: hipotermia, alteración mental, bradicardia, hipoventilación, hiponatremia e hipoglucemia, casi siempre desencadenado por una infección o el frío. Primero hidrocortisona, porque puede haber insuficiencia suprarrenal, y después levotiroxina intravenosa.' },
          { v: { k: 'mnemo', t: 'Todo se vuelve lento', d: 'Frío, peso, estreñimiento, bradicardia, reflejos lentos, piel seca, menorragia, depresión.' },
            say: 'Para recordarlo: en el hipotiroidismo todo se vuelve lento. Y en la urgencia, hidrocortisona antes que la tiroides.' }
        ] }
      ],
      sections: [
        { h: 'Causas', html: `
<ul>
<li><b>Primario</b> (95 %): <b>tiroiditis de Hashimoto</b> (la #1 donde hay suficiente yodo; anti-TPO y anti-tiroglobulina; riesgo de linfoma tiroideo), deficiencia de yodo (la #1 en el mundo), post-tiroidectomía o post-yodo radiactivo, fármacos (<b>amiodarona, litio</b>, inhibidores de puntos de control), tiroiditis subaguda o posparto en su fase hipotiroidea.</li>
<li><b>Central</b> (secundario/terciario): tumores hipofisarios, Sheehan, cirugía o radioterapia.</li>
<li>Tiroiditis: <b>De Quervain</b> (subaguda granulomatosa, viral, <b>dolorosa</b>, VSG alta, captación baja), <b>posparto</b> (indolora, anti-TPO), <b>Riedel</b> (fibrosa, “dura como piedra”, IgG4).</li>
</ul>` },
        { h: 'Clínica', html: `
<ul>
<li>Fatiga, intolerancia al frío, aumento de peso, estreñimiento, piel seca, caída de cabello, voz ronca, <b>menorragia</b>, depresión, bradicardia, <b>relajación lenta de los reflejos</b>, edema sin fóvea (mixedema), derrame pericárdico.</li>
<li>Laboratorio acompañante: <b>hiponatremia</b>, <b>hipercolesterolemia</b> (LDL alto), CK elevada, anemia (normocítica o macrocítica), hiperprolactinemia.</li>
</ul>` },
        { h: 'Diagnóstico', html: `
<div class="tablewrap"><table class="mini">
<tr><th>Patrón</th><th>TSH</th><th>T4 libre</th></tr>
<tr><td>Primario</td><td>Alta</td><td>Baja</td></tr>
<tr><td>Subclínico</td><td>Alta</td><td>Normal</td></tr>
<tr><td>Central</td><td>Baja o normal</td><td>Baja</td></tr>
<tr><td>Síndrome del eutiroideo enfermo</td><td>Normal o baja</td><td>Normal o baja (T3 baja, rT3 alta)</td></tr>
</table></div>
<ul>
<li><b>TSH</b> es el mejor tamizaje; confirma con T4 libre. Anti-TPO para Hashimoto. No pidas perfil tiroideo en el paciente crítico salvo sospecha fuerte (eutiroideo enfermo).</li>
<li>USG solo si hay nódulo palpable; nódulo sospechoso (hipoecoico, más alto que ancho, microcalcificaciones, bordes irregulares) → BAAF.</li>
</ul>` },
        { h: 'Tratamiento', html: `
<ul>
<li><b>Levotiroxina</b> 1.6 µg/kg/día, en ayunas, separada de calcio, hierro e IBP. Ancianos o cardiopatía isquémica: <b>25–50 µg</b> y subir lento.</li>
<li>Control con <b>TSH a las 6–8 semanas</b> tras cada ajuste; luego anual. En hipotiroidismo central se ajusta con la <b>T4 libre</b>.</li>
<li><b>Subclínico</b>: tratar si TSH ≥10, embarazo o búsqueda de embarazo; considerar con síntomas, anti-TPO+ o dislipidemia.</li>
<li><b>Embarazo</b>: aumentar la dosis ~25–30 % en cuanto se confirma; meta TSH &lt;2.5 en el 1er trimestre.</li>
<li>Sobretratamiento: FA y osteoporosis (sobre todo en ancianas).</li>
</ul>` },
        { h: 'Coma mixedematoso', html: `
<ul>
<li>Hipotiroidismo grave descompensado por infección, frío, cirugía, sedantes: <b>alteración mental, hipotermia</b>, bradicardia, hipotensión, <b>hipoventilación</b> (hipercapnia), <b>hiponatremia</b>, <b>hipoglucemia</b>.</li>
<li>Tratamiento en UCI: vía aérea/ventilación, <b>hidrocortisona IV primero</b> (posible insuficiencia suprarrenal coexistente), luego <b>levotiroxina IV</b> (± liotironina), calentamiento pasivo, glucosa, tratar el desencadenante.</li>
</ul>` },
        { h: 'Cómo lo preguntan en el examen', html: `
<ul>
<li>Mujer con fatiga, frío, estreñimiento y TSH alta → Hashimoto → <b>levotiroxina</b>.</li>
<li>Anciano con angina e hipotiroidismo → levotiroxina a <b>dosis baja</b>.</li>
<li>Embarazada con hipotiroidismo → <b>sube la dosis</b>.</li>
<li>Paciente en UCI con T3 baja y TSH normal → eutiroideo enfermo, no tratar.</li>
<li>Coma con hipotermia e hiponatremia → <b>hidrocortisona y levotiroxina IV</b>.</li>
<li>Tiroides dolorosa con fiebre tras infección viral → De Quervain → AINE (y BB en la fase tirotóxica).</li>
</ul>` }
      ],
      mnemo: { t: 'Hashimoto: anti-TPO · De Quervain: duele · Riedel: piedra', d: 'Las tres tiroiditis que más se preguntan: la autoinmune (anti-TPO), la dolorosa viral con VSG alta y la fibrosa dura como piedra.' },
      pearl: 'Si hay hipotiroidismo y posible insuficiencia suprarrenal (coma, hipopituitarismo), da hidrocortisona antes que levotiroxina.',
      trap: 'En el hipotiroidismo central la TSH sale normal o baja: si ajustas la levotiroxina con la TSH, lo dejarás hipotiroideo. Ajusta con la T4 libre.',
      guide: [
        'ATA 2014 y ETA: subclínico se trata con TSH ≥10; entre 4.5 y 10 se individualiza (síntomas, anti-TPO, embarazo, edad).',
        'Tu guía indica tratar con TSH ≥7 y anti-TPO; la mayoría de las guías solo lo considera.'
      ],
      refs: [
        'Jonklaas J, et al. Guidelines for the treatment of hypothyroidism (ATA). Thyroid 2014.',
        'Chaker L, et al. Hypothyroidism. Lancet 2017.',
        'Alexander EK, et al. 2017 ATA Guidelines for thyroid disease during pregnancy and the postpartum. Thyroid 2017.',
        'Wiersinga WM, et al. Myxedema coma. Endotext 2018.'
      ]
    }
  },

  guias: {
    hipotiroidismo: { src: ENDO,
      puntos: [
        'Hashimoto: la #1 en países desarrollados; puede iniciar con hiper y luego hipo; anti-TPO y anti-tiroglobulina.',
        'Tiroiditis posparto (hiper → hipo → recuperación), De Quervain (viral, dolorosa, VSG/PCR altas), Riedel (dura como piedra).',
        'Clínica temprana: fatiga, frío, peso, estreñimiento, menorragia, reflejos lentos, hiperlipidemia; tardía: ronquera, mixedema, bradicardia, hiperprolactinemia.',
        'Levotiroxina; reevaluar a las 6 semanas; menos dosis en ancianos y cardiopatía, más en embarazo.',
        'Coma: vía aérea, líquidos, <b>hidrocortisona primero</b>, luego levotiroxina (y liotironina) IV. El perfil tiroideo no es confiable en el paciente crítico.'
      ],
      ojo: ['Tu guía trata el subclínico con TSH ≥7 + anti-TPO; la ATA solo lo trata de rutina con <b>TSH ≥10</b> o embarazo.'],
      cards: [['Perfil tiroideo en paciente crítico', 'No confiable: eutiroideo enfermo (T3 baja, rT3 alta)']] }
  },

  cards: [
    ['Mejor tamizaje de función tiroidea', 'TSH'],
    ['Hipotiroidismo primario', 'TSH alta + T4 libre baja'],
    ['Causa #1 de hipotiroidismo (con yodo suficiente)', 'Tiroiditis de Hashimoto'],
    ['Anticuerpo de Hashimoto', 'Anti-TPO (y anti-tiroglobulina)'],
    ['Riesgo tumoral de Hashimoto', 'Linfoma tiroideo'],
    ['Tiroiditis dolorosa con VSG alta', 'De Quervain (subaguda, viral)'],
    ['Tiroiditis dura como piedra', 'Riedel (fibrosa, IgG4)'],
    ['Fármacos que causan hipotiroidismo', 'Amiodarona, litio, inhibidores de puntos de control'],
    ['Dosis de levotiroxina', '1.6 µg/kg/día; 25–50 µg en ancianos o cardiópatas'],
    ['Cuándo revisar TSH tras ajuste', '6–8 semanas'],
    ['Subclínico: cuándo tratar', 'TSH ≥10, embarazo o búsqueda de embarazo'],
    ['Hipotiroidismo y embarazo', 'Aumentar la dosis ~25–30 %'],
    ['Coma mixedematoso: primer fármaco', 'Hidrocortisona IV, luego levotiroxina IV'],
    ['Labs acompañantes del hipotiroidismo', 'Hiponatremia, LDL alto, CK alta, anemia']
  ],

  questions: [
    q({ id: 'hipotiroidismo-01', dif: 1, stem: 'Mujer de 45 años con fatiga, intolerancia al frío, estreñimiento y aumento de peso. TSH 24 mUI/L, T4 libre baja. ¿Causa más probable?', opts: ['Enfermedad de Graves', 'Tiroiditis de Hashimoto', 'Adenoma hipofisario', 'Deficiencia de yodo', 'Tiroiditis de Riedel'], ans: 1,
      exp: 'Hipotiroidismo primario; en regiones con yodo suficiente la causa más común es Hashimoto (anti-TPO).', why: ['Da hipertiroidismo.', '', 'Daría TSH baja o normal.', 'Es la #1 a nivel mundial, no en regiones con yodo suficiente.', 'Rara.'], ref: 'ATA 2014' }),
    q({ id: 'hipotiroidismo-02', dif: 1, stem: '¿Cuál es el mejor estudio de tamizaje de la función tiroidea?', opts: ['T3 total', 'TSH', 'T4 total', 'Gammagrama', 'Tiroglobulina'], ans: 1,
      exp: 'La TSH es el estudio más sensible para disfunción tiroidea primaria.', why: ['Poco útil.', '', 'Afectada por proteínas transportadoras.', 'No es tamizaje.', 'Es marcador tumoral.'], ref: 'ATA 2014' }),
    q({ id: 'hipotiroidismo-03', dif: 2, stem: 'Hombre de 78 años con cardiopatía isquémica e hipotiroidismo nuevo. ¿Cómo inicias levotiroxina?', opts: ['1.6 µg/kg desde el inicio', '25 µg/día y subir lentamente', 'Liotironina IV', 'No tratar nunca', '200 µg/día'], ans: 1,
      exp: 'En ancianos y cardiópatas la dosis plena puede precipitar angina o arritmias: se inicia bajo y se titula cada 6–8 semanas.', why: ['Riesgo de isquemia.', '', 'No está indicada.', 'Debe tratarse.', 'Excesiva.'], ref: 'ATA 2014' }),
    q({ id: 'hipotiroidismo-04', dif: 2, stem: 'Mujer con hipotiroidismo bien controlado con levotiroxina que se embaraza. ¿Qué haces?', opts: ['Suspender la levotiroxina', 'Aumentar la dosis ~25–30 % y vigilar TSH cada 4 semanas', 'Mantener igual', 'Cambiar a metimazol', 'Cambiar a liotironina'], ans: 1,
      exp: 'El embarazo aumenta los requerimientos; el hipotiroidismo materno afecta el neurodesarrollo fetal.', why: ['Peligroso.', '', 'Quedaría hipotiroidea.', 'Es antitiroideo.', 'No atraviesa bien al feto.'], ref: 'ATA 2017 embarazo' }),
    q({ id: 'hipotiroidismo-05', dif: 2, stem: 'Mujer de 40 años asintomática con TSH 6.2 y T4 libre normal, anti-TPO negativos, no busca embarazo. ¿Conducta?', opts: ['Levotiroxina', 'Repetir TSH en 6–12 semanas y vigilar', 'Metimazol', 'Gammagrama', 'Biopsia'], ans: 1,
      exp: 'Hipotiroidismo subclínico leve (TSH <10) asintomático: confirmar y vigilar; se trata si TSH ≥10, embarazo o síntomas.', why: ['No está indicada de rutina.', '', 'Es para hipertiroidismo.', 'No indicado.', 'No indicado.'], ref: 'ATA 2014' }),
    q({ id: 'hipotiroidismo-06', dif: 3, stem: 'Mujer de 70 años traída en invierno con estupor, T 33 °C, FC 44, Na 122, glucosa 58, pCO₂ 60. Antecedente de hipotiroidismo sin tratamiento. ¿Qué das primero?', opts: ['Levotiroxina oral', 'Hidrocortisona IV y luego levotiroxina IV', 'Solución hipertónica sola', 'Calentamiento activo rápido', 'Metimazol'], ans: 1,
      exp: 'Coma mixedematoso: soporte ventilatorio, hidrocortisona IV (por posible insuficiencia suprarrenal) y levotiroxina IV; glucosa y calentamiento pasivo.', why: ['Absorción errática; debe ser IV.', '', 'No trata la causa.', 'Puede causar colapso por vasodilatación.', 'Contraindicado.'], ref: 'Endotext 2018' }),
    q({ id: 'hipotiroidismo-07', dif: 2, stem: 'Mujer de 32 años con dolor en la cara anterior del cuello, fiebre y palpitaciones tras una faringitis. Tiroides dolorosa, VSG 85, TSH baja, captación de yodo baja. ¿Diagnóstico y tratamiento?', opts: ['Graves; metimazol', 'Tiroiditis de De Quervain; AINE y betabloqueador', 'Hashimoto; levotiroxina', 'Absceso tiroideo; cirugía', 'Carcinoma anaplásico; cirugía'], ans: 1,
      exp: 'Tiroiditis subaguda granulomatosa: dolorosa, VSG alta, tirotoxicosis con captación baja (liberación de hormona preformada). AINE (esteroide si es grave) y BB; puede pasar a hipotiroidismo transitorio.', why: ['La captación estaría alta.', '', 'No duele ni da tirotoxicosis así.', 'No hay datos.', 'No hay datos.'], ref: 'Chaker, Lancet 2017' }),
    q({ id: 'hipotiroidismo-08', dif: 2, stem: 'Paciente con hipotiroidismo central (por cirugía hipofisaria) en tratamiento con levotiroxina. TSH 0.1, T4 libre en el tercio inferior. ¿Qué haces?', opts: ['Bajar la dosis por TSH suprimida', 'Ajustar con la T4 libre (subir la dosis)', 'Suspender', 'Cambiar a metimazol', 'Medir T3'], ans: 1,
      exp: 'En el hipotiroidismo central la TSH no refleja la dosis; se ajusta para llevar la T4 libre a la mitad superior del rango.', why: ['Error clásico.', '', 'Peligroso.', 'Absurdo.', 'No es la guía de ajuste.'], ref: 'Endocrine Society 2016' }),
    q({ id: 'hipotiroidismo-09', dif: 2, stem: 'Paciente con hipotiroidismo que también presenta hiponatremia leve, CK elevada y LDL de 190. ¿Qué haces primero con estos hallazgos?', opts: ['Iniciar estatina de alta intensidad', 'Tratar el hipotiroidismo y reevaluar', 'Restricción hídrica estricta', 'Biopsia muscular', 'Suspender todo'], ans: 1,
      exp: 'El hipotiroidismo causa hiponatremia, miopatía con CK alta y dislipidemia; mejoran al corregirlo.', why: ['Primero corrige la causa; además las estatinas aumentan la miopatía.', '', 'No es la causa primaria.', 'Innecesaria.', 'Absurdo.'], ref: 'Chaker, Lancet 2017' }),
    q({ id: 'hipotiroidismo-10', dif: 2, stem: 'Paciente con hipotiroidismo bien controlado que inicia sulfato ferroso y carbonato de calcio y ahora su TSH sube. ¿Por qué?', opts: ['Progresión de Hashimoto', 'Interferencia con la absorción de levotiroxina', 'Mala técnica de laboratorio', 'Hipertiroidismo', 'Tiroiditis'], ans: 1,
      exp: 'Hierro, calcio, IBP y algunos alimentos reducen la absorción; separar la levotiroxina 4 horas.', why: ['Menos probable con el cambio reciente.', '', 'Menos probable.', 'La TSH estaría baja.', 'No hay datos.'], ref: 'ATA 2014' }),
    q({ id: 'hipotiroidismo-11', dif: 2, stem: 'Paciente con cardiopatía en tratamiento con amiodarona que presenta TSH elevada. ¿Por qué ocurre?', opts: ['Infección viral', 'Efecto Wolff-Chaikoff por el alto contenido de yodo', 'Déficit de yodo', 'Adenoma hipofisario', 'Tiroiditis de Riedel'], ans: 1,
      exp: 'El exceso de yodo de la amiodarona inhibe la síntesis hormonal (efecto Wolff-Chaikoff) en tiroides susceptibles; también puede causar tirotoxicosis.', why: ['No hay datos.', '', 'Al contrario: exceso.', 'Daría TSH baja.', 'No relacionado.'], ref: 'ATA 2014' }),
    q({ id: 'hipotiroidismo-12', dif: 1, stem: '¿Qué hallazgo de la exploración neurológica es clásico del hipotiroidismo?', opts: ['Hiperreflexia con clonus', 'Fase de relajación lenta de los reflejos', 'Signo de Babinski', 'Temblor fino', 'Fasciculaciones'], ans: 1,
      exp: 'El retardo en la fase de relajación del reflejo aquíleo es típico del hipotiroidismo.', why: ['Es de hipertiroidismo o lesión piramidal.', '', 'Lesión piramidal.', 'Es de hipertiroidismo.', 'Neurona motora inferior.'], ref: 'Chaker, Lancet 2017' }),
    q({ id: 'hipotiroidismo-13', dif: 2, stem: 'Paciente en UCI por sepsis con T3 baja, T4 libre normal-baja y TSH normal. ¿Conducta?', opts: ['Levotiroxina IV', 'No tratar; es síndrome del eutiroideo enfermo', 'Liotironina', 'Metimazol', 'Gammagrama'], ans: 1,
      exp: 'La enfermedad grave altera la conversión periférica (T3 baja, rT3 alta). No se trata; se repite el perfil al recuperarse.', why: ['No mejora desenlaces.', '', 'No está indicada.', 'Absurdo.', 'No indicado.'], ref: 'ATA 2014' }),
    q({ id: 'hipotiroidismo-14', dif: 2, stem: 'Mujer con hipotiroidismo por Hashimoto que nota crecimiento rápido de la tiroides. ¿Qué tumor debes descartar?', opts: ['Carcinoma papilar', 'Linfoma tiroideo', 'Carcinoma medular', 'Feocromocitoma', 'Adenoma tóxico'], ans: 1,
      exp: 'El Hashimoto aumenta el riesgo de linfoma tiroideo primario (bocio de crecimiento rápido en mujer mayor).', why: ['Puede coexistir, pero el clásico asociado es el linfoma.', '', 'Asociado a MEN 2.', 'No es tiroideo.', 'Da hipertiroidismo.'], ref: 'Chaker, Lancet 2017' }),
    q({ id: 'hipotiroidismo-15', dif: 2, stem: 'Mujer 4 meses después del parto con hipotiroidismo; 2 meses antes tuvo palpitaciones. Tiroides indolora, anti-TPO positivos. ¿Diagnóstico?', opts: ['De Quervain', 'Tiroiditis posparto', 'Graves', 'Sheehan', 'Riedel'], ans: 1,
      exp: 'Tiroiditis posparto: autoinmune, indolora, fase tirotóxica seguida de hipotiroidea; la mayoría se recupera, pero hay riesgo de hipotiroidismo permanente.', why: ['Es dolorosa.', '', 'No pasa a hipotiroidismo así.', 'Daría hipopituitarismo central.', 'No relacionado.'], ref: 'ATA 2017 embarazo' })
  ]
};
