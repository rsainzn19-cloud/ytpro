// Tema 14 · Valvulopatía aórtica (Cardiología, semana 3)
const T = { topic: 'aortica', subj: 'cardio' };
const q = (o) => ({ ...T, ...o });

export default {
  lessons: {
    aortica: {
      hook: 'Estenosis: soplo sistólico a carótidas, síntomas = cirugía o TAVI. Insuficiencia: soplo diastólico, pulsos saltones y cirugía cuando el VI empieza a fallar.',
      anim: 'aortica',
      compare: ['ea-ia'],
      nn: [['valvular-heart-diseases-overview', 'Valvular Heart Disease'], ['heart-sounds', 'Heart Sounds & Murmurs']],
      yt: 'aortic stenosis aortic regurgitation',
      video: [
        { ch: 'Una válvula, dos problemas', sc: [
          { v: { k: 'title', t: 'Valvulopatía aórtica', s: 'Tema 14 · Cardiología' },
            say: 'Bienvenido a la guardia. Hoy vas a dominar la válvula aórtica: la estenosis, cuando no abre bien, y la insuficiencia, cuando no cierra. Vas a reconocer cada soplo, medir la gravedad y decidir entre cirugía y TAVI.' },
          { v: { k: 'case', t: 'Consulta de cardiología', p: { name: 'Don Ramiro', age: 79, sex: 'H', skin: '#D9A07A', hair: '#C9C9D2', gown: '#7FC8A9' }, text: 'Disnea y opresión al caminar; ayer se desmayó subiendo escaleras. Soplo sistólico rudo en foco aórtico, irradiado a carótidas.', vit: { FC: '78', PA: '118/86', SpO2: '95%' } },
            say: 'Imagina a don Ramiro, de setenta y nueve años. Desde hace meses le falta el aire y siente opresión al caminar. Ayer se desmayó subiendo escaleras. Le escuchas un soplo sistólico rudo en el foco aórtico que se va hacia las carótidas.' },
          { v: { k: 'anim', id: 'aortica', step: 0 },
            say: 'Primero, la válvula sana. Cuando el ventrículo izquierdo se contrae, las tres valvas se abren por completo y la sangre sale a la aorta sin turbulencia. En la diástole se cierran y no dejan regresar nada.' },
          { v: { k: 'anim', id: 'aortica', step: 1 },
            say: 'En la estenosis, las valvas calcificadas casi no se abren. La sangre pasa por un orificio estrecho, rápido y con turbulencia: ese es el soplo sistólico. El ventrículo engrosa su pared para vencer la resistencia. Es una sobrecarga de presión, con hipertrofia concéntrica.' },
          { v: { k: 'list', t: 'Causas de estenosis aórtica', items: ['Degenerativa calcificada: >65–70 años (la más común)', 'Bicúspide: <65 años; coartación y aorta dilatada', 'Reumática: rara y casi siempre con valvulopatía mitral'] },
            say: 'La causa más común es la degenerativa calcificada, después de los sesenta y cinco a setenta años. En menores de sesenta y cinco, piensa en válvula bicúspide, que se asocia a coartación y a dilatación de la aorta. La reumática es rara y casi siempre trae daño mitral.' }
        ] },
        { ch: 'Estenosis: clínica y gravedad', sc: [
          { v: { k: 'mnemo', t: 'ASI: Angina, Síncope, Insuficiencia cardiaca', d: 'Supervivencia media sin tratamiento: 5, 3 y 2 años. Cualquiera de los tres con estenosis grave = intervenir.' },
            say: 'Los síntomas se recuerdan con la palabra ASI: angina, síncope de esfuerzo e insuficiencia cardiaca. Sin tratamiento, la supervivencia media es de cinco, tres y dos años. Por eso, cualquier síntoma con estenosis grave obliga a intervenir.' },
          { v: { k: 'list', t: 'La exploración', items: ['Soplo sistólico expulsivo en crescendo-decrescendo', 'Irradia a carótidas', 'Pulso parvus et tardus', 'S2 débil o ausente; S4', 'Grave: pico tardío del soplo'] },
            say: 'Escuchas un soplo sistólico expulsivo, en crescendo y decrescendo, que irradia a las carótidas. El pulso carotídeo es débil y tardío: parvus et tardus. El segundo ruido se apaga y puede haber cuarto ruido. La gravedad la marca el pico tardío, no la intensidad.' },
          { v: { k: 'big', h: 'Estenosis aórtica grave', t: '≥4 m/s', s: 'Gradiente medio ≥40 mmHg · área ≤1.0 cm² (≤0.6 cm²/m²)' },
            say: 'El ecocardiograma confirma y gradúa. Es grave con velocidad pico de cuatro metros por segundo o más, gradiente medio de cuarenta milímetros de mercurio o más, o área valvular de un centímetro cuadrado o menos.' },
          { v: { k: 'flow', t: 'Área grave, gradiente <40', steps: ['¿FEVI <50%?', 'Sí → eco con dobutamina', 'No → calcio valvular por TC', 'Grave confirmada → intervenir'] },
            say: 'A veces el área es grave, pero el gradiente es bajo. Si la fracción de expulsión es menor de cincuenta por ciento, pide un eco con dobutamina para separar la estenosis grave verdadera de la seudograve. Si la fracción está conservada, mide el calcio valvular con tomografía.' },
          { v: { k: 'quiz', q: 'Don Ramiro: Vmax 4.6 m/s, FEVI 60% y síncope de esfuerzo. ¿Qué sigue?', opts: ['Vigilar con eco cada año', 'Intervenir la válvula', 'Nitratos y diurético'], a: 1 },
            say: 'Pausa. Don Ramiro tiene velocidad pico de cuatro punto seis metros por segundo, fracción de expulsión normal y síncope de esfuerzo. ¿Qué sigue?',
            exp: 'Intervenir la válvula. Es una estenosis grave y sintomática, y eso basta. Vigilarlo es esperar la muerte súbita, y los nitratos pueden desplomarle la presión.' }
        ] },
        { ch: 'Cirugía o TAVI', sc: [
          { v: { k: 'list', t: 'Estenosis grave: intervenir si…', items: ['Hay síntomas (cualquiera)', 'Asintomática con FEVI <50%', 'Prueba de esfuerzo anormal', 'Muy grave: Vmax ≥5 m/s', 'Irá a otra cirugía cardiaca'] },
            say: 'En la estenosis grave se interviene si hay cualquier síntoma. Sin síntomas, se interviene con fracción de expulsión menor de cincuenta por ciento, prueba de esfuerzo anormal, velocidad de cinco metros por segundo o más, o si irá a otra cirugía cardiaca.' },
          { v: { k: 'vs', a: 'TAVI', b: 'Cirugía (SAVR)', rows: [['Edad', 'ESC: ≥70 · AHA: >80', 'Jóvenes de bajo riesgo'], ['Anatomía', 'Acceso femoral adecuado', 'Bicúspide, aorta dilatada'], ['Riesgo', 'Alto o paciente frágil', 'Bajo; otra cirugía cardiaca']] },
            say: 'Ahora, ¿TAVI o cirugía? El implante transcatéter de válvula aórtica, o TAVI, se prefiere en mayores, frágiles o de alto riesgo, con buen acceso femoral. La cirugía abierta, en jóvenes de bajo riesgo, con bicúspide, aorta dilatada o que necesitan otra cirugía cardiaca.' },
          { v: { k: 'anim', id: 'aortica', step: 3 },
            say: 'Así funciona el TAVI. Una prótesis montada en un stent viaja por un catéter, casi siempre desde la arteria femoral, y se expande dentro de la válvula enferma. No hay que abrir el tórax.' },
          { v: { k: 'tip', kind: 'trap', t: '⚠️ Depende de la guía: TAVI desde ≥70 años (ESC/EACTS 2025) o >80 (ACC/AHA 2020; 65–80 decisión compartida).' },
            say: 'Cuidado, aquí las guías no coinciden. La europea de dos mil veinticinco favorece el TAVI desde los setenta años. La americana de dos mil veinte lo prefiere después de los ochenta, con decisión compartida entre sesenta y cinco y ochenta. Usa la de tu profesor.' }
        ] },
        { ch: 'Insuficiencia aórtica', sc: [
          { v: { k: 'anim', id: 'aortica', step: 2 },
            say: 'Ahora el problema contrario. En la insuficiencia aórtica la válvula no cierra en la diástole y la sangre regresa de la aorta al ventrículo. El ventrículo recibe más volumen y se dilata: sobrecarga de volumen, con hipertrofia excéntrica.' },
          { v: { k: 'list', t: 'Causas de insuficiencia aórtica', items: ['Raíz: HTA, Marfan, sífilis', 'Raíz: espondilitis anquilosante, disección', 'Válvula: bicúspide, endocarditis, reumática', 'Aguda: endocarditis o disección tipo A'] },
            say: 'Las causas son de la raíz aórtica, como hipertensión, Marfan, sífilis, espondilitis anquilosante y disección, o de la propia válvula, como bicúspide, endocarditis y fiebre reumática. Cuando es aguda, piensa en endocarditis o en disección tipo A.' },
          { v: { k: 'list', t: 'Soplo y pulsos', items: ['Diastólico temprano decreciente, BEI', 'Mejor sentado, inclinado y en espiración', 'Presión de pulso amplia', 'Corrigan, de Musset, Quincke, Duroziez', 'Austin Flint: retumbo apical funcional'] },
            say: 'El soplo es diastólico temprano y decreciente, en el borde esternal izquierdo. Se oye mejor con el paciente sentado, inclinado hacia adelante y en espiración. Como el volumen latido es enorme, la presión de pulso se ensancha. Aparecen el pulso en martillo de agua, el cabeceo de Musset y el pulso capilar de Quincke.' },
          { v: { k: 'vs', cmp: 'ea-ia', rows: [0, 2, 6] },
            say: 'Compáralas de un vistazo. La estenosis es sobrecarga de presión, con pulso débil y tardío. La insuficiencia es sobrecarga de volumen, con pulso saltón. Y en fármacos, en la estenosis grave evitas nitratos; en la insuficiencia, los que bajan la frecuencia, porque alargan la diástole.' }
        ] },
        { ch: 'Insuficiencia aguda y cuándo operar', sc: [
          { v: { k: 'case', t: 'Urgencias, 3 a. m.', p: { name: 'Iván', age: 34, sex: 'H', skin: '#C98E66', hair: '#2A1A12', gown: '#62E3FF' }, text: 'Usuario de drogas IV con endocarditis aórtica por S. aureus. De forma súbita: edema pulmonar, PA 85/40 y soplo diastólico corto.', vit: { FC: '124', PA: '85/40', SpO2: '86%' } },
            say: 'Otro paciente. Iván, de treinta y cuatro años, usa drogas intravenosas y tiene endocarditis aórtica por estafilococo dorado. De pronto entra en edema pulmonar y cae la presión. Se perforó una valva: insuficiencia aórtica aguda. Sin tiempo para dilatarse, no hay pulso saltón y el soplo es corto.' },
          { v: { k: 'quiz', q: '¿Qué necesita Iván?', opts: ['Cirugía valvular urgente', 'Balón de contrapulsación', 'Betabloqueador IV'], a: 0 },
            say: 'Pausa. ¿Qué necesita Iván?',
            exp: 'Cirugía valvular urgente, con antibióticos. El balón de contrapulsación está contraindicado porque aumenta el reflujo. El betabloqueador alarga la diástole y lo empeora. Para ganar tiempo sirven el nitroprusiato y la dobutamina.' },
          { v: { k: 'big', h: 'IA crónica grave sin síntomas: operar si', t: '≤50%', u: 'FEVI', s: 'o diámetro telesistólico del VI >50 mm (>25 mm/m²). ⚠️ ACC/AHA 2020: desde FEVI ≤55%.' },
            say: 'En la insuficiencia crónica grave, opera si hay síntomas. Sin síntomas, opera cuando el ventrículo empieza a fallar: fracción de expulsión de cincuenta por ciento o menos, o diámetro telesistólico mayor de cincuenta milímetros. La guía americana adelanta el corte a cincuenta y cinco por ciento.' }
        ] },
        { ch: 'Trampas de examen', sc: [
          { v: { k: 'tip', kind: 'trap', t: 'Nitroglicerina en estenosis aórtica grave: el VI depende de la precarga → hipotensión grave.' },
            say: 'Primera trampa: nitroglicerina a un paciente con estenosis aórtica grave. Ese ventrículo depende de la precarga, y al quitarla la presión se desploma. En cambio, en la insuficiencia aórtica crónica los vasodilatadores sí sirven para tratar la hipertensión.' },
          { v: { k: 'list', t: 'Asociaciones que preguntan', items: ['Heyde: estenosis + angiodisplasia que sangra', 'Bicúspide + coartación + Turner', 'Profilaxis de endocarditis: solo alto riesgo', 'Amoxicilina 2 g VO 30–60 min antes'] },
            say: 'Asociaciones de examen. Síndrome de Heyde: estenosis aórtica con angiodisplasia intestinal que sangra, por un von Willebrand adquirido. Válvula bicúspide con coartación y síndrome de Turner. Y profilaxis de endocarditis solo en alto riesgo, como una prótesis: amoxicilina dos gramos antes del procedimiento dental.' },
          { v: { k: 'tip', kind: 'pearl', t: 'La gravedad de la estenosis la marcan el pico tardío del soplo y un S2 que desaparece, no la intensidad.' },
            say: 'La perla final: en la estenosis aórtica, la gravedad la marcan un soplo de pico tardío y un segundo ruido que desaparece, no qué tan fuerte suena. Si el ventrículo falla, el soplo incluso se suaviza. Ahora ve a las preguntas del tema para fijar lo que viste.' }
        ] }
      ],
      sections: [
        { h: 'Estenosis aórtica', html: `
<ul>
<li><b>Causas</b>: degenerativa calcificada (&gt;65–70 años, la más común), válvula bicúspide (&lt;65 años; se asocia a coartación y dilatación de la aorta), reumática (rara y casi siempre con valvulopatía mitral).</li>
<li><b>Síntomas</b>: angina, síncope de esfuerzo, disnea o IC. Sin tratamiento, supervivencia media: angina 5 años, síncope 3, IC 2.</li>
<li><b>Exploración</b>: soplo sistólico expulsivo en crescendo-decrescendo en foco aórtico, irradiado a carótidas; pulso <i>parvus et tardus</i>; S2 disminuido; S4. Cuanto más tardío el pico del soplo, más grave.</li>
<li><b>Síndrome de Heyde</b>: estenosis aórtica + angiodisplasia intestinal sangrante (von Willebrand adquirido).</li>
<li><b>Grave por eco</b>: velocidad pico ≥4 m/s, gradiente medio ≥40 mmHg, área ≤1.0 cm² (≤0.6 cm²/m²). Bajo flujo-bajo gradiente con FEVI baja → eco con dobutamina; con FEVI conservada → calcio valvular por TC.</li>
<li><b>Indicación de intervención</b>: grave sintomática; o grave asintomática con FEVI &lt;50%, prueba de esfuerzo anormal, muy grave (≥5 m/s) o si irá a otra cirugía cardiaca.</li>
<li><b>TAVI vs cirugía (SAVR)</b>: TAVI en pacientes mayores (ESC/EACTS 2025: ≥70 años con anatomía adecuada; ACC/AHA 2020: &gt;80 años, decisión compartida entre 65 y 80) o de alto riesgo; cirugía en jóvenes de bajo riesgo, bicúspide o anatomía desfavorable.</li>
<li>No hay fármaco que frene la estenosis. Cuidado con vasodilatadores y nitratos en estenosis grave (dependiente de precarga).</li>
</ul>` },
        { h: 'Insuficiencia aórtica', html: `
<ul>
<li><b>Causas</b>: de la raíz (HTA, Marfan, sífilis, espondilitis anquilosante, disección) o de la válvula (bicúspide, endocarditis, reumática).</li>
<li><b>Aguda</b> (endocarditis, disección): edema pulmonar y choque sin tiempo para que el VI se adapte → cirugía urgente.</li>
<li><b>Crónica</b>: sobrecarga de volumen → VI dilatado (hipertrofia excéntrica). Soplo diastólico temprano decreciente en borde esternal izquierdo, mejor sentado, inclinado hacia adelante y en espiración.</li>
<li><b>Signos de pulso amplio</b>: presión de pulso ancha, pulso en martillo de agua (Corrigan), de Musset (cabeceo), Quincke (pulso capilar ungueal), Duroziez (soplo femoral), Traube; Austin Flint (retumbo apical funcional).</li>
<li><b>Cirugía</b> si es grave y sintomática; asintomática si FEVI ≤50% o diámetro telesistólico del VI &gt;50 mm (o &gt;25 mm/m²).</li>
<li>Vasodilatadores (IECA, ARA-II, dihidropiridinas) para la HTA en insuficiencia aórtica.</li>
</ul>` },
        { h: 'Profilaxis de endocarditis', html: `
<ul>
<li>Solo en alto riesgo: prótesis valvular (o reparación con material protésico), endocarditis previa, ciertas cardiopatías congénitas (y TAVI).</li>
<li>Antes de procedimientos dentales que manipulan encía: amoxicilina 2 g VO 30–60 min antes.</li>
</ul>` }
      ],
      mnemo: { t: 'Estenosis: “ASI”: Angina, Síncope, Insuficiencia cardiaca', d: 'En ese orden de aparición y de peor pronóstico (5, 3 y 2 años). Cualquiera de los tres con estenosis grave = intervenir.' },
      pearl: 'El dato de mayor gravedad de una estenosis aórtica es un soplo con pico tardío y un S2 que desaparece. La intensidad del soplo baja cuando falla el VI.',
      trap: 'Dar nitroglicerina a un paciente con estenosis aórtica grave: el VI depende de la precarga y puede caer en hipotensión grave.',
      guide: [
        'Edad para TAVI: la ESC/EACTS 2025 bajó el umbral a ≥70 años (antes ≥75); la ACC/AHA 2020 prefiere cirugía <65, decisión compartida entre 65 y 80, y TAVI >80. ⚠️ Verifica qué umbral usa tu profesor.',
        'Umbral de FEVI en insuficiencia aórtica asintomática: guías previas usaban ≤50%; algunas recomendaciones recientes consideran operar antes (≤55%). Si no te dan más datos, ≤50%.'
      ],
      refs: [
        'Praz F, et al. 2025 ESC/EACTS Guidelines for the management of valvular heart disease. Eur Heart J 2025.',
        'Otto CM, et al. 2020 ACC/AHA Guideline for the Management of Patients With Valvular Heart Disease. Circulation 2021.'
      ]
    }
  },

  compares: {
    'ea-ia': {
      topic: 'aortica', a: 'Estenosis aórtica', b: 'Insuficiencia aórtica',
      rows: [
        ['Sobrecarga del VI', 'De presión (hipertrofia concéntrica)', 'De volumen (dilatación excéntrica)'],
        ['Soplo', 'Sistólico expulsivo, foco aórtico, irradia a carótidas', 'Diastólico temprano decreciente, borde esternal izquierdo'],
        ['Pulso', 'Parvus et tardus (débil y lento)', 'Saltón (martillo de agua), presión de pulso amplia'],
        ['Síntomas', 'Angina, síncope, IC', 'Disnea, palpitaciones; aguda: edema pulmonar'],
        ['Causa típica', 'Calcificación degenerativa, bicúspide', 'Dilatación de raíz, bicúspide, endocarditis'],
        ['Cuándo intervenir', 'Grave sintomática o FEVI <50%', 'Grave sintomática o FEVI ≤50% / VI muy dilatado'],
        ['Fármacos a evitar', 'Nitratos y vasodilatadores potentes en grave', 'Bradicardizantes (alargan la diástole y el reflujo)']
      ]
    }
  },

  anims: {
    aortica: {
      title: 'Flujo por la válvula aórtica',
      steps: [
        { cap: '<b>Válvula sana.</b> En la sístole el VI se contrae, las valvas se abren por completo y la sangre sale a la aorta sin turbulencia.',
          labels: [[66, 106, 'VI'], [120, 14, 'Aorta'], [80, 50, 'Válvula']] },
        { cap: '<b>Estenosis.</b> Valvas calcificadas que casi no se abren: el chorro sale a gran velocidad y con turbulencia (soplo sistólico). El VI se engrosa para vencer la resistencia (hipertrofia concéntrica).',
          labels: [[80, 50, 'Orificio estrecho'], [124, 30, 'Chorro ≥4 m/s'], [66, 106, 'VI hipertrófico']] },
        { cap: '<b>Insuficiencia.</b> En la diástole la válvula no cierra: la sangre regresa de la aorta al VI (soplo diastólico). El VI recibe más volumen y se dilata (hipertrofia excéntrica).',
          labels: [[80, 50, 'Reflujo'], [66, 106, 'VI dilatado']] },
        { cap: '<b>TAVI.</b> Una prótesis montada en un stent se coloca por catéter (por lo general por la arteria femoral) dentro de la válvula enferma y restablece la apertura sin cirugía abierta.',
          labels: [[80, 50, 'Prótesis'], [120, 104, 'Vía femoral']] }
      ]
    }
  },

  cards: [
    ['Tríada de la estenosis aórtica', 'Angina, síncope, IC (supervivencia 5, 3 y 2 años)'],
    ['Soplo de estenosis aórtica', 'Sistólico expulsivo en foco aórtico, irradia a carótidas'],
    ['Estenosis aórtica grave', 'Vmax ≥4 m/s, gradiente medio ≥40 mmHg, área ≤1.0 cm²'],
    ['Pulso de la estenosis aórtica', 'Parvus et tardus'],
    ['Síndrome de Heyde', 'Estenosis aórtica + angiodisplasia sangrante (vWF adquirido)'],
    ['Soplo de insuficiencia aórtica', 'Diastólico decreciente, borde esternal izquierdo, sentado e inclinado'],
    ['Pulso de la insuficiencia aórtica', 'Martillo de agua (Corrigan), presión de pulso amplia'],
    ['Insuficiencia aórtica aguda', 'Endocarditis o disección: cirugía urgente'],
    ['Cirugía en IA asintomática', 'FEVI ≤50% o diámetro telesistólico >50 mm'],
    ['Fármaco a evitar en estenosis aórtica grave', 'Nitratos (dependencia de precarga)'],
    ['Profilaxis de endocarditis', 'Solo alto riesgo (prótesis, endocarditis previa): amoxicilina 2 g antes de procedimiento dental']
  ],

  questions: [
    q({ id: 'aor-01', dif: 1,
      stem: 'Hombre de 78 años con soplo sistólico rudo en el 2º espacio intercostal derecho, irradiado a ambas carótidas, con pulso carotídeo débil y retrasado. ¿Diagnóstico?',
      opts: ['Insuficiencia mitral', 'Estenosis aórtica', 'Insuficiencia aórtica', 'Comunicación interventricular', 'Miocardiopatía hipertrófica'],
      ans: 1,
      exp: 'Soplo sistólico expulsivo en foco aórtico irradiado a carótidas + pulso parvus et tardus = estenosis aórtica. En un adulto mayor, la causa más común es la calcificación degenerativa.',
      why: ['Es holosistólico apical irradiado a axila.', '', 'Es diastólico.', 'Holosistólico paraesternal izquierdo.', 'Aumenta con Valsalva y no irradia típicamente a carótidas con pulso tardío.'],
      ref: 'ACC/AHA 2020 valvulopatías' }),

    q({ id: 'aor-02', dif: 1,
      stem: 'En la estenosis aórtica grave no tratada, ¿qué síntoma se asocia a la menor supervivencia?',
      opts: ['Angina', 'Síncope', 'Insuficiencia cardiaca', 'Palpitaciones', 'Fatiga'],
      ans: 2,
      exp: 'Supervivencia media sin tratamiento: angina ~5 años, síncope ~3 años e IC ~2 años. Cualquier síntoma con estenosis grave es indicación de intervenir.',
      why: ['Mejor supervivencia que la IC.', 'Intermedia.', '', 'No es parte de la tríada clásica.', 'No es parte de la tríada clásica.'],
      ref: 'Ross J, Braunwald E. Circulation 1968' }),

    q({ id: 'aor-03', dif: 2,
      stem: 'Mujer de 84 años con estenosis aórtica grave y disnea de esfuerzo, fragilidad moderada y anatomía femoral adecuada. ¿Mejor opción?',
      opts: ['Tratamiento médico', 'TAVI por vía femoral', 'Cirugía de reemplazo valvular abierta', 'Valvuloplastia con balón definitiva', 'Diuréticos y vasodilatadores a dosis altas'],
      ans: 1,
      exp: 'Estenosis aórtica grave sintomática en una paciente mayor y frágil con buena anatomía: TAVI transfemoral. Mejora la supervivencia y los síntomas.',
      why: ['No modifica el pronóstico.', '', 'Mayor riesgo en una paciente frágil de 84 años.', 'Solo como puente; reestenosa pronto.', 'Los vasodilatadores son peligrosos aquí.'],
      ref: 'ESC/EACTS 2025 · ACC/AHA 2020' }),

    q({ id: 'aor-04', dif: 2,
      stem: 'Hombre de 52 años con válvula aórtica bicúspide, estenosis grave y síncope de esfuerzo. Bajo riesgo quirúrgico. ¿Tratamiento?',
      opts: ['TAVI', 'Reemplazo valvular quirúrgico', 'Observación', 'Betabloqueador', 'Valvuloplastia con balón'],
      ans: 1,
      exp: 'Paciente joven de bajo riesgo con bicúspide: cirugía de reemplazo (permite además tratar la aorta dilatada si la hay). La TAVI en bicúspide de jóvenes no es la primera opción.',
      why: ['La anatomía bicúspide y la edad favorecen la cirugía.', '', 'Tiene síntoma: requiere intervención.', 'No trata la obstrucción.', 'En adultos no es definitiva.'],
      ref: 'ESC/EACTS 2025 · ACC/AHA 2020' }),

    q({ id: 'aor-05', dif: 2,
      stem: 'Paciente con estenosis aórtica grave y dolor torácico. El residente quiere dar nitroglicerina sublingual. ¿Qué riesgo hay?',
      opts: ['Ninguno', 'Hipotensión grave por caída de la precarga', 'Hiperkalemia', 'Bradicardia', 'Broncoespasmo'],
      ans: 1,
      exp: 'Con un orificio fijo y estrecho, el gasto depende de la precarga. Los venodilatadores la reducen y pueden causar colapso hemodinámico.',
      why: ['Sí hay riesgo.', '', 'No tiene relación.', 'No es el efecto principal.', 'No tiene relación.'],
      ref: 'ACC/AHA 2020' }),

    q({ id: 'aor-06', dif: 1,
      stem: 'Hombre de 40 años con soplo diastólico decreciente en el borde esternal izquierdo, presión de pulso de 80 mmHg y movimiento de la cabeza con cada latido. ¿Diagnóstico?',
      opts: ['Estenosis aórtica', 'Insuficiencia aórtica', 'Estenosis mitral', 'Insuficiencia tricuspídea', 'Pericarditis'],
      ans: 1,
      exp: 'Soplo diastólico temprano en borde esternal izquierdo + presión de pulso amplia + signo de Musset = insuficiencia aórtica crónica.',
      why: ['Es sistólico.', '', 'Es diastólico apical con chasquido.', 'Es holosistólico paraesternal que aumenta con la inspiración.', 'Da frote, no soplo diastólico.'],
      ref: 'ACC/AHA 2020' }),

    q({ id: 'aor-07', dif: 2,
      stem: 'Hombre de 35 años usuario de drogas IV con endocarditis aórtica por S. aureus. De forma súbita presenta edema pulmonar y PA 85/40. Eco: insuficiencia aórtica grave aguda. ¿Manejo?',
      opts: ['Antibióticos y cirugía en 6 semanas', 'Cirugía urgente de la válvula, con antibióticos', 'Balón de contrapulsación intraaórtico', 'Betabloqueador IV', 'Solo diuréticos'],
      ans: 1,
      exp: 'La insuficiencia aórtica aguda grave no da tiempo al VI para adaptarse: choque y edema pulmonar. Es indicación de cirugía urgente. El balón de contrapulsación está contraindicado (aumenta el reflujo).',
      why: ['No sobreviviría la espera.', '', 'Contraindicado en insuficiencia aórtica.', 'La bradicardia alarga la diástole y aumenta el reflujo.', 'Insuficiente.'],
      ref: 'ESC 2023 endocarditis · ACC/AHA 2020' }),

    q({ id: 'aor-08', dif: 2,
      stem: 'Mujer de 74 años con estenosis aórtica grave y anemia ferropénica recurrente. La colonoscopia muestra angiodisplasias en el colon derecho. ¿Qué asociación es?',
      opts: ['Síndrome de Heyde', 'Síndrome de Leriche', 'Síndrome de Marfan', 'Síndrome de Felty', 'Síndrome de Plummer-Vinson'],
      ans: 0,
      exp: 'El flujo turbulento de la estenosis aórtica destruye multímeros grandes de von Willebrand (von Willebrand adquirido tipo 2A), y las angiodisplasias sangran. El reemplazo valvular suele resolver el sangrado.',
      why: ['', 'Es oclusión aortoilíaca con claudicación e impotencia.', 'Da dilatación aórtica e insuficiencia, no esta asociación.', 'Es AR + esplenomegalia + neutropenia.', 'Es ferropenia con membranas esofágicas.'],
      ref: 'Heyde syndrome, NEJM 2003' }),

    q({ id: 'aor-09', dif: 2,
      stem: 'Hombre de 55 años con insuficiencia aórtica grave crónica, asintomático. Eco: FEVI 45% y diámetro telesistólico del VI de 54 mm. ¿Qué indicas?',
      opts: ['Seguimiento anual', 'Cirugía de la válvula', 'Solo IECA', 'Betabloqueador', 'TAVI de rutina'],
      ans: 1,
      exp: 'En insuficiencia aórtica grave asintomática, la disfunción del VI (FEVI ≤50%) o la dilatación importante (DTS >50 mm) indican cirugía antes de que el daño sea irreversible.',
      why: ['Ya tiene criterios de cirugía.', '', 'No sustituye a la cirugía.', 'Aumentaría el reflujo.', 'La TAVI no es el estándar para insuficiencia aórtica.'],
      ref: 'ACC/AHA 2020 · ESC/EACTS 2025' }),

    q({ id: 'aor-10', dif: 1,
      stem: 'Paciente con prótesis valvular aórtica mecánica que irá a una extracción dental. ¿Qué profilaxis de endocarditis indicas?',
      opts: ['Ninguna', 'Amoxicilina 2 g VO 30–60 min antes', 'Ciprofloxacino por 7 días', 'Vancomicina IV de rutina', 'Doxiciclina'],
      ans: 1,
      exp: 'Las prótesis valvulares son de alto riesgo: profilaxis con amoxicilina 2 g antes de procedimientos dentales que manipulan encía o región periapical (clindamicina ya no se recomienda; con alergia, azitromicina o doxiciclina según la guía).',
      why: ['Es de alto riesgo: sí la necesita.', '', 'No es el esquema.', 'No es rutinaria.', 'Solo como alternativa en alergia a penicilina.'],
      ref: 'AHA 2021 · ESC 2023 endocarditis' })
  ]
};
