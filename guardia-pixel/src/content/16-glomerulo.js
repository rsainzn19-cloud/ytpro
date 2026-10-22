// Tema 7 · Síndrome nefrótico y nefrítico, glomerulonefritis (Nefrología, semanas 3–4)
const T = { topic: 'glomerulo', subj: 'nefro' };
const q = (o) => ({ ...T, ...o });

export default {
  lessons: {
    glomerulo: {
      hook: 'Primero decide el patrón (nefrótico o nefrítico); luego la edad, el complemento y dónde están los depósitos te dan el nombre.',
      anim: 'glomerulo',
      compare: ['nefrotico-nefritico'],
      nn: [['nephrotic-syndrome', 'Nephrotic Syndrome'], ['nephritic-syndrome', 'Nephritic Syndrome']],
      yt: 'nephrotic nephritic syndrome',
      sections: [
        { h: 'Dos patrones', html: `
<ul>
<li><b>Nefrótico</b>: proteinuria &gt;3.5 g/24 h (cociente proteína/creatinina &gt;3–3.5 g/g), albúmina &lt;3 g/dL, edema, hiperlipidemia y lipiduria (cuerpos ovales grasos con “cruz de Malta”). La lesión está en el podocito o la membrana basal.</li>
<li><b>Nefrítico</b>: hematuria con eritrocitos dismórficos y <b>cilindros eritrocitarios</b>, HTA, oliguria, edema, LRA y proteinuria &lt;3.5 g. Hay inflamación.</li>
<li><b>Complicaciones del nefrótico</b>: trombosis (pérdida de antitrombina III; trombosis de vena renal, sobre todo en membranosa), infecciones (pérdida de IgG; peritonitis por neumococo), hiperlipidemia, LRA, pérdida de proteína transportadora de vitamina D y de TBG.</li>
</ul>` },
        { h: 'Causas de síndrome nefrótico', html: `
<div class="tablewrap"><table class="mini">
<tr><th>Enfermedad</th><th>Pistas</th></tr>
<tr><td><b>Cambios mínimos</b></td><td>La más común en niños. IF negativa, microscopía de luz normal, fusión de pedicelos en microscopía electrónica. Asociada a AINE y linfoma de Hodgkin. Responde a esteroides</td></tr>
<tr><td><b>Nefropatía membranosa</b></td><td>Adultos. Anti-PLA2R positivo en ~70–80% de las primarias. Depósitos subepiteliales con “espigas”. Secundaria a cáncer sólido, LES (clase V), VHB, fármacos. Mayor riesgo de trombosis</td></tr>
<tr><td><b>GEFS</b> (glomeruloesclerosis focal y segmentaria)</td><td>Adultos; frecuente en población afrodescendiente e hispana. Secundaria a VIH (variante colapsante), heroína, obesidad, nefronas reducidas, variantes de APOL1</td></tr>
<tr><td><b>Nefropatía diabética</b></td><td>Causa secundaria más frecuente. Expansión mesangial, nódulos de Kimmelstiel-Wilson. Primer signo: albuminuria</td></tr>
<tr><td><b>Amiloidosis</b></td><td>Mieloma (AL) o inflamación crónica (AA). Rojo Congo con birrefringencia verde manzana. Macroglosia, hepatomegalia, cardiomiopatía</td></tr>
</table></div>` },
        { h: 'Causas de síndrome nefrítico', html: `
<div class="tablewrap"><table class="mini">
<tr><th>Enfermedad</th><th>Pistas</th></tr>
<tr><td><b>GN postinfecciosa</b> (postestreptocócica)</td><td>1–3 semanas después de faringitis o 3–6 después de piodermitis. ASLO o anti-DNasa B, <b>C3 bajo</b>. “Jorobas” subepiteliales. Niños; soporte (diurético, antihipertensivo)</td></tr>
<tr><td><b>Nefropatía por IgA</b></td><td>La GN primaria más común del mundo. Hematuria macroscópica 1–2 días después de una infección respiratoria (sinfaringítica). <b>C3 normal</b>. Depósitos mesangiales de IgA</td></tr>
<tr><td><b>Vasculitis por IgA</b> (Henoch-Schönlein)</td><td>Púrpura palpable en piernas, artralgias, dolor abdominal y nefritis</td></tr>
<tr><td><b>Nefritis lúpica</b></td><td>LES con <b>C3 y C4 bajos</b>, anti-dsDNA alto. Clase IV (difusa) es la más frecuente y grave. Depósitos subendoteliales (“asas de alambre”)</td></tr>
<tr><td><b>Membranoproliferativa</b></td><td>C3 bajo, “doble contorno” de la membrana basal; VHC con crioglobulinemia (C4 bajo, púrpura)</td></tr>
<tr><td><b>GN rápidamente progresiva</b> (semilunas)</td><td>Tipo I anti-MBG (IF lineal; con hemoptisis = Goodpasture). Tipo II por inmunocomplejos (IF granular: LES, IgA, postinfecciosa). Tipo III pauciinmune (ANCA: granulomatosis con poliangeítis c-ANCA/PR3; poliangeítis microscópica p-ANCA/MPO; EGPA con asma y eosinofilia)</td></tr>
</table></div>` },
        { h: 'Complemento y depósitos', html: `
<div class="tablewrap"><table class="mini">
<tr><th>Complemento bajo</th><th>Complemento normal</th></tr>
<tr><td>Postinfecciosa (C3), lúpica (C3 y C4), membranoproliferativa (C3), crioglobulinemia (C4), endocarditis</td><td>IgA, anti-MBG, ANCA, cambios mínimos, membranosa, GEFS</td></tr>
</table></div>
<div class="tablewrap"><table class="mini">
<tr><th>Dónde está el depósito</th><th>Enfermedad</th></tr>
<tr><td>Subepitelial</td><td>Postinfecciosa (jorobas), membranosa (espigas)</td></tr>
<tr><td>Subendotelial</td><td>Lúpica (asas de alambre), membranoproliferativa tipo I</td></tr>
<tr><td>Mesangial</td><td>IgA</td></tr>
<tr><td>Lineal en la membrana basal</td><td>Anti-MBG</td></tr>
<tr><td>Sin depósitos (pauciinmune)</td><td>ANCA</td></tr>
</table></div>` },
        { h: 'Abordaje y tratamiento', html: `
<ul>
<li><b>Estudios</b>: EGO con sedimento, cociente proteína/creatinina, creatinina, complemento C3/C4, ANA y anti-dsDNA, ANCA, anti-MBG, ASLO, VHB, VHC, VIH, anti-PLA2R; en &gt;50 años electroforesis y cadenas ligeras libres.</li>
<li><b>Biopsia renal</b>: adulto con nefrótico (puede omitirse en membranosa anti-PLA2R+ con TFG normal), todo nefrítico rápidamente progresivo (urgente) y LES con afección renal. Los niños con nefrótico típico reciben esteroides sin biopsia.</li>
<li><b>Soporte</b>: IECA o ARA-II para la proteinuria, diurético de asa, restricción de sodio, estatina; anticoagulación en membranosa con albúmina muy baja (&lt;2–2.5 g/dL) y bajo riesgo de sangrado.</li>
<li><b>Específico</b>: cambios mínimos → prednisona; membranosa → según riesgo, rituximab; GNRP por ANCA → pulsos de metilprednisolona + rituximab o ciclofosfamida; anti-MBG → recambio plasmático + esteroides + ciclofosfamida; lúpica III/IV → esteroides + micofenolato o ciclofosfamida (± belimumab o voclosporina); IgA → IECA/ARA-II, iSGLT2; postestreptocócica → soporte.</li>
</ul>` }
      ],
      mnemo: { t: 'Complemento bajo: “PoLiMeroS”', d: 'Postinfecciosa, Lupus, Membranoproliferativa (y crioglobulinemia). IgA, anti-MBG y ANCA tienen complemento normal.' },
      pearl: 'Hematuria a los 1–2 días de una faringitis = IgA (C3 normal). Hematuria a las 2–3 semanas = postestreptocócica (C3 bajo).',
      trap: 'Un adulto con hemoptisis y GN rápidamente progresiva no puede esperar resultados: recambio plasmático y pulsos de esteroides en cuanto se sospecha (anti-MBG o ANCA), y biopsia urgente.',
      guide: [
        'Biopsia en membranosa: KDIGO 2021 acepta no biopsiar a un adulto con nefrótico, anti-PLA2R positivo y TFG normal. Muchos profesores siguen enseñando “biopsia a todo nefrótico adulto”. ⚠️ Pregunta cuál prefieren en el examen.'
      ],
      refs: [
        'KDIGO 2021 Clinical Practice Guideline for the Management of Glomerular Diseases. Kidney Int 2021.',
        'KDIGO 2024 Lupus Nephritis y ANCA-associated vasculitis guidelines.'
      ]
    }
  },

  compares: {
    'nefrotico-nefritico': {
      topic: 'glomerulo', a: 'Nefrótico', b: 'Nefrítico',
      rows: [
        ['Lesión', 'Podocito o membrana basal (fuga de proteína)', 'Inflamación glomerular'],
        ['Proteinuria', '>3.5 g/24 h', '<3.5 g/24 h'],
        ['Sedimento', 'Cuerpos ovales grasos (cruz de Malta)', 'Eritrocitos dismórficos y cilindros eritrocitarios'],
        ['Albúmina', 'Baja (<3 g/dL)', 'Normal o poco baja'],
        ['Edema', 'Intenso, generalizado', 'Moderado, periorbitario'],
        ['PA y función renal', 'Normales al inicio', 'HTA, oliguria, LRA'],
        ['Lípidos', 'Hiperlipidemia', 'Normales'],
        ['Ejemplos', 'Cambios mínimos, membranosa, GEFS, diabética, amiloide', 'Postinfecciosa, IgA, lúpica, ANCA, anti-MBG']
      ]
    }
  },

  anims: {
    glomerulo: {
      title: 'La barrera de filtración y sus depósitos',
      steps: [
        { cap: '<b>Barrera normal.</b> La sangre del capilar (arriba) cruza el endotelio fenestrado, la membrana basal y los pedicelos de los podocitos hacia el espacio de Bowman (abajo). Pasan agua y solutos pequeños; la albúmina y los eritrocitos no.',
          labels: [[20, 10, 'Capilar'], [140, 46, 'Endotelio'], [140, 58, 'Membrana basal'], [140, 72, 'Podocitos'], [24, 108, 'Bowman']] },
        { cap: '<b>Cambios mínimos.</b> Los pedicelos se fusionan y la barrera pierde su carga negativa: la albúmina se escapa a la orina en grandes cantidades, sin inflamación ni depósitos. Patrón nefrótico.',
          labels: [[140, 72, 'Pedicelos fusionados'], [60, 108, 'Albúmina en orina']] },
        { cap: '<b>Depósitos subepiteliales.</b> Inmunocomplejos entre la membrana basal y los podocitos: “jorobas” en la postinfecciosa y “espigas” en la membranosa.',
          labels: [[140, 72, 'Subepitelial'], [40, 30, 'Inmunocomplejos']] },
        { cap: '<b>Depósitos subendoteliales.</b> Del lado de la sangre activan el complemento y atraen neutrófilos: inflamación, hematuria y cilindros eritrocitarios. Típico del lupus (clase IV) y de la membranoproliferativa.',
          labels: [[140, 46, 'Subendotelial'], [60, 108, 'Eritrocitos en orina']] },
        { cap: '<b>Mesangio e IgA.</b> En la nefropatía por IgA los depósitos quedan en el mesangio, entre los capilares. Da hematuria a los pocos días de una infección respiratoria, con complemento normal.',
          labels: [[80, 92, 'Mesangio: IgA']] },
        { cap: '<b>Anti-MBG.</b> Los anticuerpos se pegan de forma lineal a lo largo de toda la membrana basal (colágeno IV). En el pulmón hacen lo mismo: hemoptisis + GN rápidamente progresiva = Goodpasture.',
          labels: [[140, 58, 'IgG lineal'], [40, 30, 'Anti-MBG']] }
      ]
    }
  },

  cards: [
    ['Definición de síndrome nefrótico', 'Proteinuria >3.5 g/24 h, albúmina <3 g/dL, edema, hiperlipidemia, lipiduria'],
    ['Definición de síndrome nefrítico', 'Hematuria con cilindros eritrocitarios, HTA, oliguria, LRA, proteinuria <3.5 g'],
    ['Nefrótico más común en niños', 'Cambios mínimos (responde a esteroides)'],
    ['Anticuerpo de la membranosa primaria', 'Anti-PLA2R'],
    ['Complicación trombótica clásica de la membranosa', 'Trombosis de la vena renal'],
    ['Cambios mínimos se asocia a…', 'AINE y linfoma de Hodgkin'],
    ['GEFS colapsante', 'VIH'],
    ['Postestreptocócica: tiempo y complemento', '1–3 semanas tras faringitis; C3 bajo; jorobas subepiteliales'],
    ['IgA: tiempo y complemento', '1–2 días tras infección respiratoria; C3 normal; depósitos mesangiales'],
    ['IF lineal + hemoptisis', 'Anti-MBG (Goodpasture): recambio plasmático + esteroides + ciclofosfamida'],
    ['c-ANCA (PR3)', 'Granulomatosis con poliangeítis'],
    ['p-ANCA (MPO)', 'Poliangeítis microscópica y EGPA'],
    ['Complemento bajo en GN', 'Postinfecciosa, lupus, membranoproliferativa, crioglobulinemia'],
    ['Clase de nefritis lúpica más común y grave', 'Clase IV (difusa)']
  ],

  questions: [
    q({ id: 'glo-01', dif: 1,
      stem: 'Niño de 5 años con edema palpebral y de piernas de 1 semana. Proteinuria 4.2 g/24 h, albúmina 1.9 g/dL, colesterol 360 mg/dL. EGO sin eritrocitos. PA y creatinina normales, C3 normal. ¿Conducta?',
      opts: ['Biopsia renal antes de tratar', 'Prednisona empírica', 'Ciclofosfamida', 'Recambio plasmático', 'Solo diurético y observar'],
      ans: 1,
      exp: 'Nefrótico puro en un niño = cambios mínimos hasta demostrar lo contrario. Se trata con prednisona sin biopsia; la gran mayoría responde. Se biopsia si no responde o si hay datos atípicos (hematuria, HTA, complemento bajo, edad atípica).',
      why: ['En niños con cuadro típico no hace falta biopsia inicial.', '', 'No es primera línea.', 'No tiene indicación.', 'Necesita tratamiento específico.'],
      ref: 'KDIGO 2021 glomerulopatías' }),

    q({ id: 'glo-02', dif: 1,
      stem: 'Niño de 8 años con orina color “Coca-Cola”, edema facial y PA 140/90, 2 semanas después de una faringoamigdalitis. ASLO elevada, C3 bajo, C4 normal. ¿Diagnóstico y manejo?',
      opts: ['Nefropatía por IgA; esteroides', 'GN postestreptocócica; soporte con restricción de sodio, diurético y antihipertensivo', 'Nefritis lúpica; micofenolato', 'Cambios mínimos; prednisona', 'GN rápidamente progresiva; recambio plasmático'],
      ans: 1,
      exp: 'Nefrítico 1–3 semanas después de faringitis, con ASLO alta y C3 bajo = GN postestreptocócica. Tratamiento de soporte; el C3 se normaliza en 6–8 semanas. Si no se normaliza, piensa en otra causa (C3 glomerulopatía).',
      why: ['La IgA aparece a los 1–2 días y con C3 normal.', '', 'El lupus tendría C3 y C4 bajos y anti-dsDNA.', 'Cambios mínimos es nefrótico, sin hematuria ni HTA.', 'No hay datos de GN rápidamente progresiva.'],
      ref: 'KDIGO 2021' }),

    q({ id: 'glo-03', dif: 1,
      stem: 'Hombre de 22 años con hematuria macroscópica que empezó 2 días después de un cuadro gripal. PA y creatinina normales. C3 normal. ¿Diagnóstico más probable?',
      opts: ['GN postestreptocócica', 'Nefropatía por IgA', 'Nefropatía membranosa', 'Goodpasture', 'Cistitis hemorrágica'],
      ans: 1,
      exp: 'Hematuria sinfaringítica (a los pocos días de la infección) con C3 normal = nefropatía por IgA, la GN primaria más común del mundo. La biopsia muestra depósitos mesangiales de IgA.',
      why: ['Aparece 1–3 semanas después y con C3 bajo.', '', 'Es nefrótica, sin hematuria macroscópica.', 'Daría hemoptisis y GN rápidamente progresiva.', 'No tiene relación temporal con la infección respiratoria ni es glomerular.'],
      ref: 'KDIGO 2021' }),

    q({ id: 'glo-04', dif: 2,
      stem: 'Hombre de 26 años con hemoptisis y oliguria. Cr 4.8 mg/dL, hematuria con cilindros eritrocitarios. Biopsia: semilunas con depósito lineal de IgG en la membrana basal. ¿Tratamiento?',
      opts: ['Solo antibióticos', 'Recambio plasmático + pulsos de esteroides + ciclofosfamida', 'IECA y observar', 'Prednisona oral sola', 'Hemodiálisis sin inmunosupresión'],
      ans: 1,
      exp: 'IF lineal + hemorragia pulmonar + GN rápidamente progresiva = enfermedad anti-MBG (Goodpasture). El recambio plasmático retira los anticuerpos circulantes; esteroides y ciclofosfamida frenan su producción. Es una urgencia.',
      why: ['No es infeccioso.', '', 'Insuficiente para una GN rápidamente progresiva.', 'Insuficiente sin recambio plasmático ni ciclofosfamida.', 'Puede requerir diálisis, pero sin inmunosupresión pierde riñón y pulmón.'],
      ref: 'KDIGO 2021' }),

    q({ id: 'glo-05', dif: 2,
      stem: 'Mujer de 54 años con sinusitis crónica con secreción sanguinolenta, nódulos pulmonares cavitados y Cr que sube de 1.0 a 3.6 en 2 semanas con cilindros eritrocitarios. c-ANCA (PR3) positivo. ¿Diagnóstico?',
      opts: ['Poliangeítis microscópica', 'Granulomatosis con poliangeítis', 'EGPA', 'Sarcoidosis', 'Tuberculosis'],
      ans: 1,
      exp: 'Vía aérea superior + nódulos pulmonares + GN pauciinmune + c-ANCA/PR3 = granulomatosis con poliangeítis. Tratamiento de inducción: pulsos de esteroides + rituximab o ciclofosfamida; recambio plasmático en casos seleccionados.',
      why: ['Es p-ANCA/MPO y sin granulomas en vía aérea superior.', '', 'Tiene asma y eosinofilia, usualmente p-ANCA.', 'No da GN rápidamente progresiva con c-ANCA.', 'No explica la GN pauciinmune ni el c-ANCA.'],
      ref: 'KDIGO 2024 vasculitis ANCA' }),

    q({ id: 'glo-06', dif: 2,
      stem: 'Mujer de 25 años con LES. Proteinuria 2.8 g/24 h, hematuria con cilindros eritrocitarios, C3 y C4 bajos, anti-dsDNA alto. Cr 1.4 mg/dL. ¿Siguiente paso?',
      opts: ['Solo hidroxicloroquina', 'Biopsia renal para clasificar la nefritis lúpica y luego esteroides + micofenolato o ciclofosfamida', 'Observar 6 meses', 'Rituximab sin biopsia', 'IECA y alta'],
      ans: 1,
      exp: 'Toda sospecha de nefritis lúpica se biopsia: la clase define el tratamiento. Las clases III y IV (proliferativas) se inducen con esteroides + micofenolato o ciclofosfamida (± belimumab o voclosporina). La hidroxicloroquina se mantiene en todos.',
      why: ['Se mantiene, pero no basta para una nefritis activa.', '', 'Retrasar el tratamiento lleva a ERC.', 'No es la inducción estándar sin clasificar.', 'Insuficiente.'],
      ref: 'KDIGO 2024 nefritis lúpica' }),

    q({ id: 'glo-07', dif: 2,
      stem: 'Hombre de 52 años con nefropatía membranosa (albúmina 1.7 g/dL). Presenta dolor en flanco izquierdo, hematuria macroscópica y LDH elevada. ¿Complicación más probable?',
      opts: ['Pielonefritis', 'Trombosis de la vena renal', 'Litiasis renal', 'Infarto por embolia cardiaca', 'Necrosis papilar'],
      ans: 1,
      exp: 'El nefrótico es protrombótico (pérdida urinaria de antitrombina III, ↑ fibrinógeno). La membranosa con albúmina muy baja tiene el mayor riesgo de trombosis de la vena renal. Se confirma con Doppler o angio-TC; se anticoagula.',
      why: ['No hay fiebre ni datos infecciosos.', '', 'Posible, pero el contexto de nefrótico grave apunta a trombosis.', 'Menos probable sin fuente embólica.', 'Se asocia a AINE, DM y drepanocitosis.'],
      ref: 'KDIGO 2021' }),

    q({ id: 'glo-08', dif: 2,
      stem: 'Hombre de 24 años con adenopatías cervicales, sudoración nocturna y síndrome nefrótico de inicio brusco. ¿Qué glomerulopatía esperas en la biopsia?',
      opts: ['Membranosa', 'Cambios mínimos', 'GEFS colapsante', 'Amiloidosis AL', 'IgA'],
      ans: 1,
      exp: 'El linfoma de Hodgkin se asocia a enfermedad de cambios mínimos (citocinas de los linfocitos T). La membranosa se asocia más a tumores sólidos.',
      why: ['Se asocia a tumores sólidos (pulmón, colon, mama).', '', 'Se asocia a VIH.', 'Se asocia a mieloma.', 'No es la asociación clásica.'],
      ref: 'KDIGO 2021' }),

    q({ id: 'glo-09', dif: 1,
      stem: 'Hombre con VIH sin tratamiento, con proteinuria de 9 g/24 h y deterioro rápido de la función renal. Riñones grandes en el USG. ¿Diagnóstico más probable?',
      opts: ['GEFS variante colapsante (nefropatía asociada a VIH)', 'Cambios mínimos', 'Membranosa', 'IgA', 'Postinfecciosa'],
      ans: 0,
      exp: 'La nefropatía asociada a VIH es una GEFS colapsante, con proteinuria masiva, progresión rápida y riñones grandes. Mejora con antirretrovirales; agrega IECA o ARA-II.',
      why: ['', 'No progresa tan rápido ni se asocia a VIH.', 'Se asocia a VHB, no típicamente a VIH.', 'Es nefrítica.', 'No encaja.'],
      ref: 'KDIGO 2021' }),

    q({ id: 'glo-10', dif: 1,
      stem: 'Hombre con DM2 de 15 años. ¿Cuál es el primer hallazgo de nefropatía diabética y qué muestra la biopsia en fases avanzadas?',
      opts: ['Hematuria; semilunas', 'Albuminuria; expansión mesangial con nódulos de Kimmelstiel-Wilson', 'Cilindros eritrocitarios; depósitos lineales', 'Hipokalemia; necrosis tubular', 'Leucocituria; granulomas'],
      ans: 1,
      exp: 'La albuminuria (A2) es el marcador temprano. La histología muestra engrosamiento de la membrana basal, expansión mesangial y nódulos de Kimmelstiel-Wilson; es la causa secundaria más común de nefrótico.',
      why: ['No es el patrón diabético.', '', 'Es de anti-MBG.', 'No tiene relación.', 'No tiene relación.'],
      ref: 'KDIGO 2022 DM en ERC' }),

    q({ id: 'glo-11', dif: 2,
      stem: 'Hombre de 67 años con proteinuria de 8 g/24 h, macroglosia, hepatomegalia y anemia. Biopsia de grasa abdominal con rojo Congo positivo y birrefringencia verde manzana. ¿Qué buscas a continuación?',
      opts: ['Anti-PLA2R', 'Electroforesis de proteínas e inmunofijación con cadenas ligeras libres', 'ASLO', 'Anti-MBG', 'Complemento'],
      ans: 1,
      exp: 'Amiloidosis con macroglosia en un adulto mayor sugiere amiloidosis AL por una discrasia de células plasmáticas (mieloma). Se buscan cadenas ligeras monoclonales en suero y orina.',
      why: ['Es de la membranosa.', '', 'Es de la postestreptocócica.', 'Es de Goodpasture.', 'No aporta al diagnóstico de amiloidosis.'],
      ref: 'KDIGO 2021' }),

    q({ id: 'glo-12', dif: 1,
      stem: '¿En cuál de estas glomerulopatías esperas el complemento C3 bajo?',
      opts: ['Nefropatía por IgA', 'Enfermedad anti-MBG', 'Vasculitis ANCA', 'GN postestreptocócica', 'Cambios mínimos'],
      ans: 3,
      exp: 'Complemento bajo: postinfecciosa, lúpica, membranoproliferativa y crioglobulinemia. IgA, anti-MBG, ANCA y las nefróticas primarias tienen complemento normal.',
      why: ['Complemento normal.', 'Complemento normal.', 'Complemento normal (pauciinmune).', '', 'Complemento normal.'],
      ref: 'KDIGO 2021' }),

    q({ id: 'glo-13', dif: 2,
      stem: 'Mujer de 50 años con hepatitis C, púrpura palpable en piernas, artralgias, hematuria con proteinuria de 2 g/24 h y C4 muy bajo. ¿Diagnóstico?',
      opts: ['Nefropatía por IgA', 'GN membranoproliferativa por crioglobulinemia', 'Membranosa', 'Cambios mínimos', 'Nefritis intersticial'],
      ans: 1,
      exp: 'VHC + púrpura palpable + artralgias + GN + C4 bajo = crioglobulinemia mixta con patrón membranoproliferativo. Se trata el VHC con antivirales de acción directa; en casos graves, rituximab.',
      why: ['No explica el C4 bajo ni el VHC.', '', 'La membranosa se asocia más a VHB.', 'Es nefrótica y sin púrpura.', 'No da púrpura ni complemento bajo.'],
      ref: 'KDIGO 2022 VHC en ERC' }),

    q({ id: 'glo-14', dif: 1,
      stem: 'En el sedimento urinario de un paciente edematoso se observan cuerpos ovales grasos que con luz polarizada muestran “cruces de Malta”. ¿Qué indican?',
      opts: ['Síndrome nefrítico', 'Síndrome nefrótico (lipiduria)', 'Necrosis tubular aguda', 'Nefritis intersticial', 'Infección urinaria'],
      ans: 1,
      exp: 'Los cuerpos ovales grasos son células tubulares cargadas de lípidos que se filtran en el nefrótico; con luz polarizada los ésteres de colesterol dan la imagen en cruz de Malta.',
      why: ['El nefrítico da cilindros eritrocitarios.', '', 'La NTA da cilindros granulosos pardos.', 'Da cilindros leucocitarios.', 'Da leucocitos y bacterias.'],
      ref: 'KDIGO 2021' }),

    q({ id: 'glo-15', dif: 1,
      stem: 'Adulto con síndrome nefrótico por GEFS: proteinuria 6 g/24 h, PA 138/86, edema. Mientras llega el tratamiento específico, ¿qué medida reduce la proteinuria?',
      opts: ['IECA o ARA-II', 'Dieta alta en proteínas', 'Infusión diaria de albúmina', 'AINE', 'Ninguna'],
      ans: 0,
      exp: 'El bloqueo del SRAA baja la presión intraglomerular y la proteinuria. Se acompaña de restricción de sodio, diurético de asa, estatina y, según el caso, anticoagulación.',
      why: ['', 'Aumenta la proteinuria y no mejora la albúmina.', 'Su efecto es transitorio; no es medida de rutina.', 'Pueden empeorar la función renal.', 'Sí hay medidas eficaces.'],
      ref: 'KDIGO 2021' })
  ],

  cases: [
    { id: 'g-glomerulo', topic: 'glomerulo', subj: 'nefro',
      title: 'Hemoptisis y orina oscura', place: 'Urgencias',
      patient: { name: 'Daniel', age: 26, sex: 'H', skin: '#E0A27A', hair: '#5A3A22', gown: '#B48CFF' },
      intro: 'Estudiante de ingeniería, fumador. Una semana de tos con sangre, cansancio y orina oscura. Hoy casi no ha orinado.',
      extra: { label: 'Cr', unit: 'mg/dL' },
      start: { FC: 108, PAS: 158, PAD: 96, SpO2: 91, FR: 24, X: 4.6 },
      nodes: [
        { tag: 'Llegada', ecg: 'tachy',
          text: 'Cr 4.6 mg/dL (hace 1 mes era normal). EGO: eritrocitos dismórficos y cilindros eritrocitarios. Rx: infiltrados alveolares bilaterales.',
          q: '¿Qué haces?',
          A: { t: 'Sospechar GN rápidamente progresiva con hemorragia pulmonar: anti-MBG, ANCA y complemento urgentes, y biopsia renal lo antes posible', ok: true, res: 'Pides los anticuerpos y coordinas la biopsia para mañana temprano.' },
          B: { t: 'Neumonía con LRA prerrenal: antibióticos y líquidos', ok: false, res: 'Los líquidos empeoran la hipoxemia y la creatinina sigue subiendo.', vit: { SpO2: 86, X: 5.4 } },
          why: 'Hemoptisis + nefrítico rápidamente progresivo = síndrome pulmón-riñón (anti-MBG o ANCA). Es una urgencia diagnóstica y terapéutica.' },
        { tag: 'Horas después', ecg: 'tachy', vit: { SpO2: 88, X: 5.2 },
          text: 'Anti-MBG positivo, ANCA negativo, complemento normal. Empeora la oxigenación. La biopsia está programada para mañana.',
          q: '¿Esperas la biopsia para tratar?',
          A: { t: 'No: recambio plasmático + pulsos de metilprednisolona + ciclofosfamida desde ya', ok: true, res: 'Tras 3 sesiones de recambio plasmático mejora la oxigenación. La biopsia confirma IgG lineal con semilunas.', ecg: 'normal', vit: { FC: 92, SpO2: 95, X: 4.1 } },
          B: { t: 'Sí: sin biopsia no se inmunosuprime', ok: false, res: 'En 24 h tiene hemorragia alveolar masiva y requiere intubación.', vit: { SpO2: 80, FR: 32 } },
          why: 'En la enfermedad anti-MBG con hemorragia pulmonar se inicia el tratamiento en cuanto hay sospecha fundada; la biopsia no debe retrasarlo.' },
        { tag: 'Día 3', ecg: 'normal', vit: { FC: 84, SpO2: 96, X: 4.4 },
          text: 'K 6.8 mEq/L con T picudas, pH 7.12, edema pulmonar y uresis de 150 mL en 24 h.',
          q: '¿Qué indicas?',
          A: { t: 'Hemodiálisis urgente (hiperkalemia, acidosis y sobrecarga refractarias)', ok: true, res: 'Tras la diálisis se corrigen el potasio y el edema.', vit: { X: 3.6 } },
          B: { t: 'Furosemida a dosis altas y esperar', ok: false, res: 'No orina y aparece una arritmia por la hiperkalemia.', ecg: 'wide' },
          why: 'AEIOU: acidosis, electrolitos y sobrecarga refractarios son indicación de diálisis urgente.' }
      ] }
  ]
};
