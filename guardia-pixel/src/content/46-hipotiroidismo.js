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
        { ch: 'La tiroide que se apaga', sc: [
          { v: { k: 'title', t: 'Hipotiroidismo', s: 'Semana 8 · Endocrinología' },
            say: 'Semana ocho de Endocrinología: el hipotiroidismo. Es de las enfermedades más comunes de la consulta, sobre todo en mujeres. Vas a aprender a leer la TSH con la T cuatro libre, a dosificar la levotiroxina y a reconocer la urgencia: el coma mixedematoso.' },
          { v: { k: 'case', t: 'Cansada y con frío', p: { name: 'Rosa', age: 46, sex: 'M', skin: '#E2B08A', hair: '#3A2A1E', gown: '#B48CFF' }, text: 'Seis meses con fatiga, frío, estreñimiento, subió 5 kg, piel seca y menstruaciones abundantes. Reflejos con relajación lenta.', vit: { FC: '56', TSH: '28', 'T4L': '0.5', LDL: '172' } },
            say: 'Rosa tiene cuarenta y seis años y seis meses con cansancio, frío, estreñimiento, cinco kilos de más, piel seca y menstruaciones abundantes. Su frecuencia cardiaca es de cincuenta y seis y los reflejos tardan en relajarse. Su TSH es de veintiocho y la T cuatro libre está baja.' },
          { v: { k: 'flow', t: 'El eje', steps: ['Hipotálamo: TRH', 'Hipófisis: TSH', 'Tiroides: T4 (y algo de T3)', 'Tejidos: T4 se convierte en T3 activa', 'T4 y T3 frenan TRH y TSH'] },
            say: 'Recuerda el eje: el hipotálamo libera TRH, la hipófisis TSH y la tiroides T cuatro, que en los tejidos se convierte en T tres, la forma activa. Cuando la T cuatro baja, la hipófisis sube la TSH. Por eso, si la tiroides falla, la TSH sube: es el marcador más sensible.' },
          { v: { k: 'list', t: 'Causas', items: ['Hashimoto: la #1 con yodo suficiente', 'Deficiencia de yodo: la #1 en el mundo', 'Tras tiroidectomía o yodo radiactivo', 'Amiodarona, litio, inmunoterapia', 'Central: tumor hipofisario, Sheehan'] },
            say: 'La causa número uno donde hay suficiente yodo es la tiroiditis de Hashimoto, autoinmune, con anticuerpos contra la peroxidasa. En el mundo, la deficiencia de yodo. También después de tiroidectomía o yodo radiactivo, y por fármacos como amiodarona, litio e inmunoterapia. El central, por tumores hipofisarios o síndrome de Sheehan, es raro.' },
          { v: { k: 'list', t: 'Clínica: todo va lento', items: ['Fatiga, frío, aumento de peso', 'Estreñimiento, piel seca, voz ronca', 'Menorragia, depresión', 'Bradicardia, reflejos lentos', 'Mixedema: edema sin fóvea'] },
            say: 'La clínica se resume en que todo va lento: fatiga, intolerancia al frío, aumento de peso, estreñimiento, piel seca, voz ronca, menstruaciones abundantes, depresión, bradicardia y reflejos con relajación lenta. El mixedema es un edema que no deja fóvea.' },
          { v: { k: 'list', t: 'Laboratorio que acompaña', items: ['Hiponatremia', 'LDL alto', 'CK alta', 'Anemia', 'Prolactina alta'] },
            say: 'Y el laboratorio acompaña: hiponatremia, colesterol LDL alto, CK alta, anemia y prolactina alta. Por eso, ante una dislipidemia o hiponatremia nueva, se pide TSH.' }
        ] },
        { ch: 'Diagnóstico', sc: [
          { v: { k: 'vs', a: 'Patrón', b: 'TSH y T4 libre', rows: [['Primario', 'TSH alta', 'T4L baja'], ['Subclínico', 'TSH alta', 'T4L normal'], ['Central', 'TSH baja o normal', 'T4L baja'], ['Eutiroideo enfermo', 'Normal o baja', 'T3 baja, rT3 alta']] },
            say: 'Los patrones: primario, TSH alta con T cuatro baja. Subclínico, TSH alta con T cuatro normal. Central, T cuatro baja con TSH baja o inapropiadamente normal. Y el síndrome del eutiroideo enfermo, en pacientes graves, con T tres baja y T tres reversa alta: no se trata.' },
          { v: { k: 'tip', kind: 'trap', t: 'T4 libre baja con TSH normal NO descarta hipotiroidismo: es central. Busca la hipófisis.' },
            say: 'Trampa: T cuatro libre baja con TSH normal no es normal. Es hipotiroidismo central, la hipófisis no responde. Estudia la hipófisis y el resto de sus ejes, sobre todo el suprarrenal.' },
          { v: { k: 'quiz', q: 'TSH 7.2, T4 libre normal, sin síntomas, no busca embarazo. ¿Qué haces?', opts: ['Levotiroxina dosis plena', 'Repetir TSH en 6 a 12 semanas con anti-TPO', 'Yodo'], a: 1 },
            say: 'Pausa. TSH de siete punto dos con T cuatro libre normal, sin síntomas y sin deseo de embarazo. ¿Qué haces?',
            exp: 'Repetir la TSH en seis a doce semanas y pedir anticuerpos antiperoxidasa. Es subclínico. Se trata si la TSH llega a diez o más, en el embarazo o si busca embarazo, y se considera con síntomas o anticuerpos positivos.' }
        ] },
        { ch: 'Tratamiento', sc: [
          { v: { k: 'big', h: 'Levotiroxina', t: '1.6 µg/kg/día', s: 'En ayunas, separada de calcio, hierro e IBP. Ancianos o cardiopatía isquémica: 25 a 50 µg y subir lento.' },
            say: 'Se trata con levotiroxina a uno punto seis microgramos por kilo al día, en ayunas, separada del calcio, el hierro y los inhibidores de bomba. En ancianos o con cardiopatía isquémica se empieza con veinticinco a cincuenta microgramos y se sube despacio, para no provocar angina.' },
          { v: { k: 'list', t: 'Seguimiento', items: ['TSH a las 6 a 8 semanas tras cada ajuste', 'Luego anual', 'Central: se ajusta con T4 libre, no TSH', 'Sobretratamiento: FA y osteoporosis'] },
            say: 'Se revisa la TSH seis a ocho semanas después de cada cambio, y luego cada año. En el hipotiroidismo central no sirve la TSH: se ajusta con la T cuatro libre. Y cuidado con el sobretratamiento, que da fibrilación auricular y osteoporosis.' },
          { v: { k: 'list', t: 'Embarazo', items: ['Subir la dosis 25 a 30% al confirmar', 'Meta TSH menor de 2.5 en el 1er trimestre', 'TSH cada 4 semanas en la 1a mitad', 'El feto depende de la T4 materna'] },
            say: 'En el embarazo, en cuanto se confirma, se sube la dosis veinticinco a treinta por ciento, con meta de TSH menor de dos punto cinco en el primer trimestre, porque el cerebro del feto depende de la T cuatro de la madre.' },
          { v: { k: 'quiz', q: 'Hombre de 74 años con angina estable y TSH de 40. ¿Cómo inicias?', opts: ['1.6 µg/kg de inmediato', '25 µg y subir cada 4 a 6 semanas', 'No tratar'], a: 1 },
            say: 'Pausa. Hombre de setenta y cuatro años con angina estable y TSH de cuarenta. ¿Cómo inicias la levotiroxina?',
            exp: 'Veinticinco microgramos y subir lento cada cuatro a seis semanas. Una dosis plena aumenta de golpe el consumo de oxígeno del miocardio y puede precipitar un infarto.' }
        ] },
        { ch: 'Tiroiditis y coma mixedematoso', sc: [
          { v: { k: 'vs', a: 'Tiroiditis', b: 'Rasgo', rows: [['De Quervain (subaguda)', 'Dolorosa, tras virus', 'VSG alta, captación baja'], ['Posparto o silente', 'Indolora', 'Anti-TPO'], ['Hashimoto', 'Bocio, crónica', 'Riesgo de linfoma tiroideo'], ['Riedel', 'Dura como piedra', 'IgG4']] },
            say: 'Las tiroiditis: De Quervain es dolorosa, sigue a una infección viral y tiene sedimentación alta. La posparto y la silente son indoloras. Las tres pasan por una fase de tirotoxicosis y luego una de hipotiroidismo. Hashimoto es crónica, con bocio y riesgo de linfoma. Y Riedel es fibrosa, dura como piedra.' },
          { v: { k: 'list', t: 'Coma mixedematoso', items: ['Alteración mental e hipotermia', 'Bradicardia e hipotensión', 'Hipoventilación con hipercapnia', 'Hiponatremia e hipoglucemia', 'Desencadenante: infección, frío, sedantes'] },
            say: 'El coma mixedematoso es el hipotiroidismo grave descompensado, casi siempre en una anciana en invierno, con infección o sedantes. Hay alteración mental, hipotermia, bradicardia, hipotensión, hipoventilación con CO2 alto, hiponatremia e hipoglucemia.' },
          { v: { k: 'flow', t: 'Tratamiento en UCI', steps: ['Vía aérea y ventilación', 'Hidrocortisona IV PRIMERO', 'Luego levotiroxina IV', 'Calentamiento pasivo', 'Glucosa y tratar el desencadenante'] },
            say: 'Se trata en terapia intensiva: vía aérea y ventilación, hidrocortisona intravenosa primero, porque puede coexistir una insuficiencia suprarrenal que la levotiroxina desenmascararía, y después levotiroxina intravenosa. Calentamiento pasivo, glucosa y tratar el desencadenante.' }
        ] },
        { ch: 'Cierre del caso', sc: [
          { v: { k: 'list', t: 'Rosa: final del caso', items: ['Anti-TPO positivos: Hashimoto', 'Levotiroxina 100 µg en ayunas', 'TSH a las 6 semanas: 3.1', 'El LDL bajó a 128', 'TSH anual'] },
            say: 'Los anticuerpos antiperoxidasa de Rosa salen positivos: Hashimoto. Inicia levotiroxina cien microgramos en ayunas. A las seis semanas su TSH es de tres punto uno, ya no tiene frío y el LDL bajó de ciento setenta y dos a ciento veintiocho sin estatina.' },
          { v: { k: 'tip', kind: 'pearl', t: 'Coma mixedematoso: hidrocortisona ANTES de la levotiroxina para no precipitar una crisis suprarrenal.' },
            say: 'Perla: en el coma mixedematoso, la hidrocortisona va antes que la levotiroxina, porque la hormona tiroidea acelera el metabolismo del cortisol y puede precipitar una crisis suprarrenal.' },
          { v: { k: 'mnemo', t: 'TSH alta = primario · T4 baja con TSH normal = central', d: 'Levotiroxina 1.6 µg/kg; ancianos 25 µg. TSH a las 6–8 semanas. Embarazo: +25–30%. Coma: hidrocortisona primero.' },
            say: 'Llévate esto: TSH alta, primario; T cuatro baja con TSH normal, central. Levotiroxina uno punto seis por kilo, empezando bajo en ancianos, y en el coma, hidrocortisona primero. Ahora mueve la TSH en el simulador del taller.' }
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
