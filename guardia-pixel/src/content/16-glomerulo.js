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
      video: [
        { ch: 'Dos patrones', sc: [
          { v: { k: 'title', t: 'Síndrome nefrótico y nefrítico', s: 'Tema 7 · Nefrología' },
            say: 'Bienvenido a la guardia. Hoy vas a aprender a distinguir el síndrome nefrótico del nefrítico, y a ponerle nombre a la glomerulopatía con tres pistas: la edad, el complemento y el lugar donde están los depósitos. Es de los temas que más preguntan.' },
          { v: { k: 'anim', id: 'glomerulo', step: 0 },
            say: 'Primero, la barrera de filtración. La sangre del capilar cruza tres capas: el endotelio con poros, la membrana basal y los pedicelos de los podocitos. Pasan el agua y las moléculas pequeñas. La albúmina y los eritrocitos se quedan en la sangre.' },
          { v: { k: 'anim', id: 'glomerulo', step: 1 },
            say: 'Si el daño está en el podocito, los pedicelos se fusionan y la barrera pierde su carga negativa. La albúmina se fuga en grandes cantidades, sin inflamación. Ese es el patrón nefrótico. En cambio, si el glomérulo se inflama, se rompen los capilares y se escapan eritrocitos: es el patrón nefrítico.' },
          { v: { k: 'vs', cmp: 'nefrotico-nefritico', rows: [1, 2, 5] },
            say: 'Compáralos así. El nefrótico tiene proteinuria mayor de tres punto cinco gramos al día y cuerpos ovales grasos en la orina. El nefrítico tiene menos proteína, pero trae eritrocitos dismórficos, cilindros eritrocitarios, hipertensión, oliguria y elevación de la creatinina.' }
        ] },
        { ch: 'Nefrótico: quién y por qué', sc: [
          { v: { k: 'big', h: 'Síndrome nefrótico', t: '>3.5 g', u: 'de proteinuria en 24 h', s: 'Albúmina <3 g/dL + edema + hiperlipidemia + lipiduria (cruz de Malta)' },
            say: 'Define el síndrome nefrótico: proteinuria mayor de tres punto cinco gramos en veinticuatro horas, albúmina menor de tres gramos por decilitro, edema, hiperlipidemia y lipiduria. Con luz polarizada, los cuerpos ovales grasos de la orina dan una imagen en cruz de Malta.' },
          { v: { k: 'list', t: 'Nefrótico según el paciente', items: ['Niño: cambios mínimos', 'Adulto: membranosa o GEFS', 'Diabético: nefropatía diabética', 'Mieloma o inflamación crónica: amiloidosis', 'VIH: GEFS colapsante · Hodgkin: cambios mínimos'] },
            say: 'Ahora fíjate en la edad y el contexto. En el niño, piensa en cambios mínimos. En el adulto, en nefropatía membranosa o en glomeruloesclerosis focal y segmentaria. La causa secundaria más común es la diabetes. Con mieloma o inflamación crónica, amiloidosis. Con VIH, la variante colapsante. Y con linfoma de Hodgkin, otra vez cambios mínimos.' },
          { v: { k: 'anim', id: 'glomerulo', step: 2 },
            say: 'En la nefropatía membranosa los inmunocomplejos se depositan del lado del podocito, debajo del epitelio, y forman espigas. En la forma primaria, el anticuerpo contra el receptor de fosfolipasa A2 es positivo en la mayoría. Si sale negativo en un adulto mayor, busca un cáncer sólido.' },
          { v: { k: 'list', t: 'Complicaciones del nefrótico', items: ['Trombosis: vena renal (pierde antitrombina III)', 'Infecciones: neumococo (pierde IgG)', 'Hiperlipidemia y aterosclerosis', 'LRA y desnutrición proteica'] },
            say: 'El nefrótico también se complica. Pierde antitrombina tres por la orina y se vuelve protrombótico: la clásica es la trombosis de la vena renal en la membranosa. Pierde inmunoglobulinas, y el niño puede hacer peritonitis por neumococo. Además, el hígado fabrica más lípidos.' },
          { v: { k: 'quiz', q: 'Niño de 5 años: edema, proteinuria 4 g/día, PA y C3 normales, sin hematuria. ¿Qué haces?', opts: ['Biopsia renal antes de tratar', 'Prednisona sin biopsia'], a: 1 },
            say: 'Pausa. Un niño de cinco años con edema, proteinuria de cuatro gramos al día, presión y complemento normales y sin hematuria. ¿Qué haces?',
            exp: 'Prednisona sin biopsia. Un nefrótico puro en un niño es cambios mínimos hasta demostrar lo contrario, y casi todos responden. Solo se biopsia si no responde o si hay datos atípicos.' }
        ] },
        { ch: 'Nefrítico: el reloj y el complemento', sc: [
          { v: { k: 'vs', a: 'Postinfecciosa', b: 'IgA', rows: [['Inicio', '1–3 semanas tras faringitis', '1–2 días tras la infección'], ['C3', 'Bajo (normaliza en 6–8 sem)', 'Normal'], ['Depósito', 'Subepitelial: jorobas', 'Mesangial de IgA'], ['Paciente', 'Niño', 'Adulto joven']] },
            say: 'En el nefrítico, el reloj es tu mejor pista. Si la orina oscura aparece de una a tres semanas después de una faringitis, con complemento C3 bajo, es la glomerulonefritis postestreptocócica. Si aparece uno o dos días después de una infección respiratoria, con C3 normal, es la nefropatía por IgA.' },
          { v: { k: 'anim', id: 'glomerulo', step: 4 },
            say: 'En la nefropatía por IgA los depósitos quedan en el mesangio, entre los capilares. Es la glomerulonefritis primaria más común del mundo. Da brotes de hematuria macroscópica, y su pronóstico depende de la proteinuria, la presión arterial y la función renal.' },
          { v: { k: 'anim', id: 'glomerulo', step: 3 },
            say: 'Cuando los depósitos están del lado de la sangre, debajo del endotelio, activan el complemento y atraen neutrófilos. Hay mucha inflamación. Es el patrón del lupus, sobre todo la clase cuatro, con C3 y C4 bajos y anti DNA de doble cadena alto. También es el de la membranoproliferativa.' },
          { v: { k: 'mnemo', t: 'Complemento bajo: “PoLiMeroS”', d: 'Postinfecciosa · Lupus · Membranoproliferativa (y crioglobulinemia). IgA, anti-MBG y ANCA: complemento normal.' },
            say: 'Para el complemento bajo, recuerda PoLiMeroS: postinfecciosa, lupus y membranoproliferativa, incluida la crioglobulinemia por hepatitis C. La nefropatía por IgA, la enfermedad por anticuerpos contra la membrana basal y las vasculitis por anticuerpos contra el citoplasma del neutrófilo, los ANCA, tienen complemento normal.' },
          { v: { k: 'quiz', q: 'Hematuria macroscópica 2 días después de una gripe. PA normal, C3 normal. ¿Diagnóstico?', opts: ['GN postestreptocócica', 'Nefropatía por IgA', 'Nefritis lúpica'], a: 1 },
            say: 'Pausa. Un joven tiene hematuria macroscópica dos días después de una gripe, con presión y complemento normales. ¿Cuál es el diagnóstico?',
            exp: 'Nefropatía por IgA. La hematuria aparece casi junto con la infección y el C3 es normal. La postestreptocócica tarda semanas y baja el C3, y el lupus baja C3 y C4.' }
        ] },
        { ch: 'Urgencia: GN rápidamente progresiva', sc: [
          { v: { k: 'case', t: 'Llega a urgencias', p: { name: 'Daniel', age: 26, sex: 'H', skin: '#E0A27A', hair: '#5A3A22', gown: '#B48CFF' }, text: 'Una semana de hemoptisis y orina oscura. Cr 4.6 mg/dL (normal hace 1 mes). Cilindros eritrocitarios. Infiltrados alveolares bilaterales.', vit: { FC: '108', PA: '158/96', SpO2: '91%' } },
            say: 'Ahora conoce a Daniel, de veintiséis años y fumador. Lleva una semana con tos con sangre y orina oscura. Su creatinina subió a cuatro punto seis en un mes, tiene cilindros eritrocitarios e infiltrados alveolares en ambos pulmones. Esto es un síndrome pulmón riñón, y es una urgencia.' },
          { v: { k: 'list', t: 'GN rápidamente progresiva: 3 tipos', items: ['I · Anti-MBG, IF lineal: Goodpasture', 'II · Inmunocomplejos, IF granular: LES, IgA', 'III · Pauciinmune, sin depósitos: ANCA'] },
            say: 'La glomerulonefritis rápidamente progresiva pierde función en días o semanas, y la biopsia muestra semilunas. Hay tres tipos según la inmunofluorescencia. Tipo uno: anticuerpos contra la membrana basal, con depósito lineal. Tipo dos: inmunocomplejos, con patrón granular, como el lupus o la IgA. Tipo tres: pauciinmune, sin depósitos, por vasculitis ANCA.' },
          { v: { k: 'anim', id: 'glomerulo', step: 5 },
            say: 'En la enfermedad de Goodpasture, los anticuerpos atacan el colágeno tipo cuatro de la membrana basal. Se pegan en forma lineal a lo largo de todo el glomérulo, y también en el alveolo. Por eso Daniel sangra por el pulmón y pierde el riñón al mismo tiempo.' },
          { v: { k: 'flow', t: 'Síndrome pulmón-riñón', steps: ['Sospecha: hemoptisis + nefrítico', 'Anti-MBG, ANCA y C3 urgentes', 'Pulsos de metilprednisolona ya', 'Anti-MBG: recambio + ciclofosfamida', 'Biopsia urgente; no retrasa el manejo'] },
            say: 'El manejo no espera. Pides de inmediato anticuerpos contra la membrana basal, ANCA y complemento, e inicias pulsos de metilprednisolona. Si es enfermedad anti membrana basal, agregas recambio plasmático y ciclofosfamida. En la vasculitis ANCA, rituximab o ciclofosfamida. La biopsia se hace urgente, pero nunca retrasa el tratamiento.' }
        ] },
        { ch: 'Biopsia y tratamiento', sc: [
          { v: { k: 'list', t: 'Cuándo biopsiar', items: ['Adulto con síndrome nefrótico', 'Todo nefrítico rápidamente progresivo (urgente)', 'LES con proteinuria o sedimento activo', 'Niño con nefrótico atípico o sin respuesta'] },
            say: 'La biopsia renal da el nombre y define el tratamiento. Se hace en el adulto con nefrótico, de forma urgente en todo nefrítico rápidamente progresivo y en el lupus con afección renal. Al niño con nefrótico típico no se le biopsia: recibe prednisona. Y según KDIGO, en la membranosa con anticuerpo positivo y función normal puede omitirse.' },
          { v: { k: 'list', t: 'Soporte para todos', items: ['IECA o ARA-II: bajan la proteinuria', 'Restricción de sodio y diurético de asa', 'Estatina si hay hiperlipidemia', 'Anticoagular: membranosa con albúmina <2–2.5'] },
            say: 'Todos reciben tratamiento de soporte. Un IECA o un ARA dos baja la presión dentro del glomérulo y la proteinuria. Restringe el sodio y usa diurético de asa para el edema. Estatina para los lípidos. Y en la membranosa con albúmina muy baja y poco riesgo de sangrado, anticoagulación profiláctica.' },
          { v: { k: 'list', t: 'Tratamiento específico', items: ['Cambios mínimos → prednisona', 'Membranosa → rituximab según riesgo', 'Lúpica III–IV → esteroide + micofenolato', 'ANCA → esteroide + rituximab', 'Postestreptocócica → solo soporte'] },
            say: 'Luego viene el tratamiento específico. Cambios mínimos: prednisona. Membranosa: según el riesgo de progresión, rituximab. Nefritis lúpica clase tres o cuatro: esteroide más micofenolato o ciclofosfamida, sin suspender la hidroxicloroquina. Vasculitis ANCA: esteroide más rituximab o ciclofosfamida. Y la postestreptocócica solo necesita soporte.' },
          { v: { k: 'quiz', q: 'Mujer de 25 años con LES: cilindros eritrocitarios, proteinuria 2.8 g/día, C3 y C4 bajos. ¿Siguiente paso?', opts: ['Biopsia renal para clasificar', 'Solo hidroxicloroquina', 'Observar 6 meses'], a: 0 },
            say: 'Pausa. Una mujer de veinticinco años con lupus tiene cilindros eritrocitarios, proteinuria de dos punto ocho gramos y complemento bajo. ¿Cuál es el siguiente paso?',
            exp: 'Biopsia renal. La clase de nefritis lúpica define el tratamiento: las clases tres y cuatro necesitan inducción con esteroide más micofenolato o ciclofosfamida. La hidroxicloroquina se mantiene, pero no basta.' }
        ] },
        { ch: 'Trampas de examen', sc: [
          { v: { k: 'tip', kind: 'trap', t: 'C3 que sigue bajo 8 semanas después de una “postestreptocócica”: no lo era. Biopsia: membranoproliferativa o glomerulopatía C3.' },
            say: 'Una trampa frecuente. Si el C3 de una supuesta glomerulonefritis postestreptocócica sigue bajo después de ocho semanas, no era postestreptocócica. Piensa en membranoproliferativa o en glomerulopatía C3, y pide biopsia.' },
          { v: { k: 'tip', kind: 'pearl', t: 'Hematuria a los 1–2 días de una infección = IgA (C3 normal). A las 1–3 semanas = postestreptocócica (C3 bajo). Hemoptisis + GNRP: trata antes de la biopsia.' },
            say: 'La perla para el examen: hematuria uno o dos días después de una infección es IgA, con C3 normal. Hematuria una a tres semanas después es postestreptocócica, con C3 bajo. Y la hemoptisis con glomerulonefritis rápidamente progresiva se trata antes de tener la biopsia. Ahora ve a las preguntas del tema para fijar lo que viste.' }
        ] }
      ],
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
</ul>` },
        { h: 'Fisiopatología en 1 minuto', html: `
<ul>
<li><b>La barrera</b>: endotelio fenestrado → membrana basal (colágeno IV, carga negativa) → pedicelos de los podocitos con su diafragma de hendidura (nefrina). Detiene la albúmina por tamaño y por carga.</li>
<li><b>Nefrótico = falla del filtro sin inflamación</b>: daño del podocito o de la membrana basal → proteinuria masiva → hipoalbuminemia → edema (baja la presión oncótica y el riñón retiene sodio) → el hígado fabrica más lipoproteínas (hiperlipidemia y lipiduria).</li>
<li><b>Por qué se trombosa</b>: pierde antitrombina III y proteínas C y S por la orina, sube el fibrinógeno y hay hemoconcentración. <b>Por qué se infecta</b>: pierde IgG y factores del complemento.</li>
<li><b>Nefrítico = inflamación</b>: inmunocomplejos o anticuerpos activan el complemento y atraen leucocitos → se rompe la pared capilar → hematuria dismórfica y cilindros eritrocitarios; cae la TFG → retención de sodio y agua → HTA, edema y oliguria.</li>
<li><b>El sitio del depósito predice la clínica</b>: del lado de la sangre (subendotelial, mesangial) hay contacto con leucocitos → nefrítico. Del lado del podocito (subepitelial) → nefrótico (membranosa); la excepción es la postinfecciosa, que es nefrítica.</li>
</ul>` },
        { h: 'Causas por edad y diagnóstico diferencial', html: `
<div class="tablewrap"><table class="mini">
<tr><th>Edad</th><th>Nefrótico</th><th>Nefrítico</th></tr>
<tr><td>Niños</td><td>Cambios mínimos (la gran mayoría)</td><td>Postestreptocócica, vasculitis por IgA (Henoch-Schönlein), Alport</td></tr>
<tr><td>Adultos jóvenes</td><td>GEFS, membranosa, nefritis lúpica clase V</td><td>Nefropatía por IgA, nefritis lúpica, anti-MBG (primer pico, con hemorragia pulmonar)</td></tr>
<tr><td>Adultos mayores</td><td>Membranosa (descarta cáncer), diabética, amiloidosis</td><td>Vasculitis ANCA, anti-MBG (segundo pico, a menudo solo renal)</td></tr>
</table></div>
<ul>
<li><b>Hematuria glomerular vs urológica</b>: glomerular = eritrocitos dismórficos (acantocitos), cilindros eritrocitarios, proteinuria, sin coágulos. Urológica = eritrocitos isomórficos, coágulos, sin cilindros → en adulto mayor o fumador, cistoscopía y uro-TC para descartar cáncer.</li>
<li><b>Síndrome de Alport</b>: hematuria persistente desde la infancia + sordera neurosensorial + lenticono anterior; mutación del colágeno IV (la mayoría ligada al X). Progresa a ERC en varones jóvenes.</li>
<li><b>Vasculitis por IgA</b>: púrpura palpable en glúteos y piernas con plaquetas normales, artralgias, dolor abdominal (riesgo de invaginación) y nefritis; mismos depósitos mesangiales de IgA.</li>
<li><b>Endocarditis y abscesos</b>: GN por inmunocomplejos con complemento bajo; busca fiebre, soplo y hemocultivos positivos.</li>
<li><b>No es glomerular</b>: tira reactiva con “sangre” pero sin eritrocitos en el sedimento = hemoglobinuria o mioglobinuria; cilindros granulosos pardos = NTA; cilindros leucocitarios con eosinófilos = nefritis intersticial.</li>
</ul>` },
        { h: 'Cómo lo preguntan en el examen', html: `
<ul>
<li>Niño con edema, proteinuria masiva, PA y C3 normales → <b>cambios mínimos</b>: prednisona sin biopsia.</li>
<li>Orina “Coca-Cola” 1–3 semanas después de una faringitis (3–6 tras impétigo), ASLO alta y C3 bajo → <b>postestreptocócica</b>: soporte; si el C3 sigue bajo a las 8 semanas, biopsia.</li>
<li>Hematuria macroscópica a los 1–2 días de una infección respiratoria, C3 normal → <b>nefropatía por IgA</b>.</li>
<li>Adulto mayor con nefrótico, anti-PLA2R negativo y pérdida de peso → <b>membranosa secundaria</b>: busca cáncer sólido.</li>
<li>Hemoptisis + creatinina que sube en días + cilindros eritrocitarios → <b>síndrome pulmón-riñón</b> (anti-MBG o ANCA): pulsos de esteroide ± recambio plasmático sin esperar la biopsia.</li>
<li>VHC + púrpura palpable + artralgias + C4 muy bajo → <b>crioglobulinemia</b> con patrón membranoproliferativo: antivirales de acción directa.</li>
</ul>` }
      ],
      mnemo: { t: 'Complemento bajo: “PoLiMeroS”', d: 'Postinfecciosa, Lupus, Membranoproliferativa (y crioglobulinemia). IgA, anti-MBG y ANCA tienen complemento normal.' },
      pearl: 'Hematuria a los 1–2 días de una faringitis = IgA (C3 normal). Hematuria a las 1–3 semanas (3–6 si fue impétigo) = postestreptocócica (C3 bajo).',
      trap: 'Un adulto con hemoptisis y GN rápidamente progresiva no puede esperar resultados: recambio plasmático y pulsos de esteroides en cuanto se sospecha (anti-MBG o ANCA), y biopsia urgente.',
      guide: [
        'Biopsia en membranosa: KDIGO 2021 acepta no biopsiar a un adulto con nefrótico, anti-PLA2R positivo y TFG normal. Muchos profesores siguen enseñando “biopsia a todo nefrótico adulto”. ⚠️ Pregunta cuál prefieren en el examen.',
        'Nefropatía por IgA: KDIGO 2021 se apoyaba en IECA/ARA-II a dosis máxima y reservaba los esteroides para el alto riesgo; KDIGO 2025 fija una meta de proteinuria <0.5 g/día (ideal <0.3) y agrega budesonida de liberación dirigida, sparsentan e iSGLT2. ⚠️ Depende de la guía: el primer paso sigue siendo bloquear el SRAA.'
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
        ['Sedimento', 'Cuerpos ovales grasos (cruz de Malta)', 'Eritrocitos dismórficos y cilindros hemáticos'],
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
          labels: [[20, 10, 'Capilar'], [138, 46, 'Endotelio'], [128, 58, 'Membrana basal'], [138, 72, 'Podocitos'], [24, 108, 'Bowman']] },
        { cap: '<b>Cambios mínimos.</b> Los pedicelos se fusionan y la barrera pierde su carga negativa: la albúmina se escapa a la orina en grandes cantidades, sin inflamación ni depósitos. Patrón nefrótico.',
          labels: [[112, 72, 'Pedicelos fusionados'], [60, 108, 'Albúmina en orina']] },
        { cap: '<b>Depósitos subepiteliales.</b> Inmunocomplejos entre la membrana basal y los podocitos: “jorobas” en la postinfecciosa y “espigas” en la membranosa.',
          labels: [[130, 72, 'Subepitelial'], [40, 30, 'Inmunocomplejos']] },
        { cap: '<b>Depósitos subendoteliales.</b> Del lado de la sangre activan el complemento y atraen neutrófilos: inflamación, hematuria y cilindros eritrocitarios. Típico del lupus (clase IV) y de la membranoproliferativa.',
          labels: [[128, 46, 'Subendotelial'], [60, 108, 'Eritrocitos en orina']] },
        { cap: '<b>Mesangio e IgA.</b> En la nefropatía por IgA los depósitos quedan en el mesangio, entre los capilares. Da hematuria a los pocos días de una infección respiratoria, con complemento normal.',
          labels: [[80, 92, 'Mesangio: IgA']] },
        { cap: '<b>Anti-MBG.</b> Los anticuerpos se pegan de forma lineal a lo largo de toda la membrana basal (colágeno IV). En el pulmón hacen lo mismo: hemoptisis + GN rápidamente progresiva = Goodpasture.',
          labels: [[134, 58, 'IgG lineal'], [40, 30, 'Anti-MBG']] }
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
    ['Clase de nefritis lúpica más común y grave', 'Clase IV (difusa)'],
    ['Síndrome de Alport', 'Hematuria persistente + sordera neurosensorial + lenticono anterior; colágeno IV, casi siempre ligado al X'],
    ['Vasculitis por IgA (Henoch-Schönlein)', 'Púrpura palpable con plaquetas normales + artralgias + dolor abdominal + nefritis; depósitos mesangiales de IgA'],
    ['C3 bajo más de 8 semanas tras una “postestreptocócica”', 'No era postestreptocócica: biopsia (membranoproliferativa o glomerulopatía C3)'],
    ['Membranosa anti-PLA2R negativa en adulto mayor', 'Piensa en secundaria: busca cáncer sólido (pulmón, colon, mama, próstata)'],
    ['Hematuria glomerular vs urológica', 'Glomerular: eritrocitos dismórficos (acantocitos) y cilindros; urológica: isomórficos y coágulos → cistoscopía']
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
      ref: 'KDIGO 2021' }),

    q({ id: 'glo-16', dif: 2,
      stem: 'Niño de 7 años con púrpura palpable en glúteos y piernas, dolor abdominal cólico y artralgias de rodillas, 10 días después de una infección respiratoria. EGO: hematuria microscópica y proteinuria leve. Plaquetas 280,000/µL. ¿Diagnóstico más probable?',
      opts: ['Púrpura trombocitopénica inmune', 'Vasculitis por IgA (Henoch-Schönlein)', 'GN postestreptocócica', 'Síndrome urémico hemolítico', 'Meningococcemia'],
      ans: 1,
      exp: 'Púrpura palpable con plaquetas normales + dolor abdominal + artralgias + nefritis en un niño = vasculitis por IgA, la vasculitis más común de la infancia. Comparte los depósitos mesangiales de IgA con la nefropatía por IgA. Vigila la función renal y la proteinuria; el dolor abdominal puede deberse a invaginación.',
      why: ['La PTI tiene plaquetas bajas y la púrpura no es palpable.', '', 'No da púrpura palpable, artralgias ni dolor abdominal.', 'Da anemia hemolítica microangiopática y trombocitopenia, con LRA después de una diarrea.', 'Sería un niño febril y grave, en choque, con petequias que progresan en horas.'],
      ref: 'KDIGO 2021' }),

    q({ id: 'glo-17', dif: 3,
      stem: 'Niño de 9 años diagnosticado con GN postestreptocócica (ASLO alta, C3 bajo). A las 12 semanas persisten la hematuria y una proteinuria de 1.5 g/día, y el C3 sigue bajo. ¿Qué haces?',
      opts: ['Seguir observando: el C3 puede tardar 6 meses', 'Biopsia renal: sospecha GN membranoproliferativa o glomerulopatía C3', 'Penicilina oral por 10 días', 'Prednisona empírica', 'Repetir la ASLO'],
      ans: 1,
      exp: 'En la GN postestreptocócica el C3 se normaliza en 6–8 semanas y la hematuria macroscópica cede en días. Si el C3 sigue bajo o la enfermedad persiste, probablemente era otra cosa: GN membranoproliferativa, glomerulopatía C3 o nefritis lúpica. La biopsia lo define.',
      why: ['El C3 de la postestreptocócica se normaliza en 6–8 semanas; esperar más retrasa el diagnóstico.', '', 'El antibiótico no cambia la evolución renal.', 'Inmunosuprimir sin diagnóstico histológico no está indicado.', 'La ASLO solo confirma la infección previa; no explica la persistencia.'],
      ref: 'KDIGO 2021' }),

    q({ id: 'glo-18', dif: 2,
      stem: 'Hombre de 68 años, fumador, con pérdida de 8 kg en 4 meses y síndrome nefrótico. La biopsia muestra nefropatía membranosa; el anti-PLA2R es negativo. ¿Siguiente paso más importante?',
      opts: ['Rituximab de inmediato', 'Buscar una neoplasia sólida, empezando por TC de tórax', 'Prednisona sola', 'Recambio plasmático', 'Repetir la biopsia en 6 meses'],
      ans: 1,
      exp: 'La membranosa con anti-PLA2R negativo en un adulto mayor obliga a buscar causas secundarias, sobre todo cáncer sólido (pulmón, colon, mama, próstata), además de VHB, LES y fármacos. Tratar la neoplasia puede remitir la nefropatía.',
      why: ['Antes de inmunosuprimir hay que descartar una causa secundaria.', '', 'Los esteroides solos no tratan la membranosa y no buscan la causa.', 'No tiene indicación en la membranosa.', 'Retrasa el diagnóstico de una posible neoplasia.'],
      ref: 'KDIGO 2021' }),

    q({ id: 'glo-19', dif: 2,
      stem: 'Niño de 6 años con síndrome nefrótico en recaída presenta fiebre de 39 °C, dolor abdominal difuso con rebote y ascitis. ¿Complicación y germen más probables?',
      opts: ['Apendicitis aguda por E. coli', 'Peritonitis bacteriana espontánea por Streptococcus pneumoniae', 'Trombosis de la vena renal', 'Pancreatitis por esteroides', 'Gastroenteritis por rotavirus'],
      ans: 1,
      exp: 'El niño nefrótico pierde IgG y factores del complemento por la orina, y la ascitis facilita la infección: la peritonitis bacteriana espontánea por neumococo (también gramnegativos) es la infección clásica. Paracentesis, cultivo y ceftriaxona. Por eso se vacunan contra neumococo.',
      why: ['Con nefrótico y ascitis, la peritonitis espontánea es más probable que una apendicitis.', '', 'Da dolor en flanco y hematuria, no fiebre con datos de peritonitis.', 'Es rara y no explica la ascitis infectada.', 'No da rebote ni explica el contexto.'],
      ref: 'KDIGO 2021' }),

    q({ id: 'glo-20', dif: 2,
      stem: 'Hombre de 19 años con hematuria microscópica persistente desde la infancia, proteinuria creciente y Cr 1.8 mg/dL. Usa auxiliares auditivos y un tío materno está en diálisis. El oftalmólogo describe lenticono anterior. ¿Diagnóstico?',
      opts: ['Nefropatía por IgA', 'Síndrome de Alport', 'Enfermedad de membrana basal delgada', 'Enfermedad anti-MBG', 'Enfermedad de Fabry'],
      ans: 1,
      exp: 'Hematuria persistente + sordera neurosensorial + lenticono anterior + herencia por línea materna = síndrome de Alport, por mutaciones del colágeno IV (COL4A5, ligado al X en la mayoría). Progresa a ERC en varones jóvenes; el IECA frena la progresión. Tras un trasplante puede aparecer enfermedad anti-MBG contra el colágeno “nuevo”.',
      why: ['No da sordera ni lenticono, ni se hereda así.', '', 'Da hematuria benigna, sin sordera ni progresión a ERC.', 'Es autoinmune y aguda (GN rápidamente progresiva), no hereditaria con sordera.', 'Da angioqueratomas, dolor neuropático y proteinuria; no lenticono.'],
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
