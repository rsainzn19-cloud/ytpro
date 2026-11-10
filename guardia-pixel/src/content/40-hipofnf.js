// Tema 31 · Trastornos hipofisarios no funcionantes: adenoma no funcionante, hipopituitarismo, diabetes insípida y SIADH
// (Endocrinología, semana 1 · “Tumores de la hipófisis” en el resumen 1P y en la Guía Endocrino)
const T = { topic: 'hipofnf', subj: 'endo' };
const q = (o) => ({ ...T, ...o });
const ENDO = { short: 'De tu Guía Endocrino', vs: 'tu guía', name: 'Guía Endocrino · Ximena Cors Cepeda (EMIS 5)', url: 'https://docs.google.com/document/d/1ng1BpGOd1JywQaChMt0YWLQIRemXzi5hyUV_XVmYpsM/edit' };

export default {
  lessons: {
    hipofnf: {
      hook: 'Semana 1 de Endo: el tumor que no secreta nada pero aplasta todo, la hipófisis que deja de funcionar y los dos trastornos del agua que más se preguntan: diabetes insípida (falta ADH) y SIADH (sobra ADH).',
      yt: 'hypopituitarism diabetes insipidus SIADH',
      nn: [],
      video: [
        {
          ch: "La hipófisis que no secreta",
          sc: [
            {
              v: {
                k: "title",
                t: "Hipófisis no funcionante, diabetes insípida y SIADH",
                s: "Semana 1 · Endocrinología"
              },
              say: "Bienvenido a la semana uno de endocrino. Hoy vemos el tumor de hipófisis que no secreta nada, la glándula que deja de funcionar y los dos trastornos del agua que más se preguntan: la diabetes insípida y el SIADH."
            },
            {
              v: {
                k: "case",
                t: "Choca con los espejos",
                p: {
                  name: "Ernesto",
                  age: 58,
                  sex: "H",
                  skin: "#C98B62",
                  hair: "#9A9A9A",
                  gown: "#5BA7E0"
                },
                text: "Cefalea de meses, choca con los espejos laterales del coche y perdió la libido. RM: masa selar de 2.8 cm. Prolactina 64.",
                vit: {
                  PRL: "64",
                  RM: "2.8 cm"
                }
              },
              say: "Ernesto tiene cincuenta y ocho años. Le duele la cabeza desde hace meses, ya chocó dos veces los espejos laterales del coche y perdió el deseo sexual. La resonancia muestra una masa de casi tres centímetros en la silla turca y la prolactina está en sesenta y cuatro."
            },
            {
              v: {
                k: "list",
                t: "Adenoma no funcionante",
                items: [
                  "El macroadenoma más común",
                  "Da efecto de masa",
                  "Hemianopsia bitemporal",
                  "Prolactina moderada por efecto tallo",
                  "Tratamiento: cirugía transesfenoidal"
                ]
              },
              say: "Es un adenoma no funcionante, el macroadenoma más común. No secreta hormonas, así que se descubre cuando ya es grande y comprime: cefalea, hemianopsia bitemporal e hipopituitarismo. La prolactina sube un poco porque el tumor aplasta el tallo y no deja bajar la dopamina. Con defecto visual, se opera."
            },
            {
              v: {
                k: "tip",
                kind: "trap",
                t: "Prolactina de 64 con un macroadenoma de 3 cm no es prolactinoma: un prolactinoma de ese tamaño daría cientos o miles."
              },
              say: "La trampa: una prolactina de sesenta y cuatro con un tumor de tres centímetros no es un prolactinoma. Un prolactinoma de ese tamaño daría cientos o miles. Es efecto tallo, y la cabergolina no encogería este tumor."
            }
          ]
        },
        {
          ch: "Hipopituitarismo",
          sc: [
            {
              v: {
                k: "flow",
                t: "Se pierden en orden",
                steps: [
                  "GH",
                  "LH y FSH",
                  "TSH",
                  "ACTH"
                ]
              },
              say: "Cuando el tumor aplasta la hipófisis sana, las hormonas se pierden en un orden típico: primero la de crecimiento, luego las gonadotropinas, después la tirotropina y al final la corticotropina. Por eso en el adulto el primer síntoma suele ser el hipogonadismo."
            },
            {
              v: {
                k: "big",
                h: "Siempre primero",
                t: "Hidrocortisona",
                u: "y después levotiroxina"
              },
              say: "La regla de oro: si falta todo, repón primero el cortisol y después la hormona tiroidea. La levotiroxina acelera el gasto de cortisol, y si no hay reserva puedes provocar una crisis suprarrenal."
            },
            {
              v: {
                k: "list",
                t: "Pistas del hipopituitarismo",
                items: [
                  "T4 libre baja con TSH baja o normal",
                  "Ajusta con la T4 libre",
                  "Sin hiperpigmentación",
                  "Sin hiperkalemia",
                  "Sheehan: no lacta tras hemorragia"
                ]
              },
              say: "En el hipotiroidismo central la TSH sale baja o normal, así que se mide y se ajusta la T4 libre. En el déficit de corticotropina no hay piel oscura ni potasio alto, porque la aldosterona depende de la renina. Y recuerda a Sheehan: la mujer que no puede amamantar después de una hemorragia del parto."
            }
          ]
        },
        {
          ch: "Diabetes insípida",
          sc: [
            {
              v: {
                k: "list",
                t: "Falta o no se oye la ADH",
                items: [
                  "Orina mucha y diluida",
                  "Sed y nicturia",
                  "Na alto si no bebe",
                  "Central: tras cirugía, trauma, tumor",
                  "Nefrogénica: litio, calcio alto"
                ]
              },
              say: "La diabetes insípida es el problema de la hormona antidiurética. En la central falta, por ejemplo después de una cirugía de hipófisis. En la nefrogénica el riñón no la escucha, y la causa clásica es el litio. Ambas dan mucha orina diluida, sed, y sodio alto si el paciente no puede beber."
            },
            {
              v: {
                k: "vs",
                a: "DI central",
                b: "DI nefrogénica",
                rows: [
                  [
                    "Deprivación de agua",
                    "No concentra",
                    "No concentra"
                  ],
                  [
                    "Con desmopresina",
                    "Concentra más de la mitad",
                    "No cambia"
                  ],
                  [
                    "Tratamiento",
                    "Desmopresina",
                    "Tiazida y amilorida"
                  ]
                ]
              },
              say: "Para separarlas: en la prueba de deprivación de agua ninguna concentra la orina. Luego das desmopresina. Si la orina se concentra más de la mitad, faltaba la hormona: es central y se trata con desmopresina. Si no cambia, el riñón no la oye: es nefrogénica y se trata con tiazida, y con amilorida si es por litio."
            },
            {
              v: {
                k: "quiz",
                q: "Poliuria con Na de 133 y la orina se concentra al quitarle el agua. ¿Qué es?",
                opts: [
                  "DI central",
                  "DI nefrogénica",
                  "Polidipsia primaria"
                ],
                a: 2
              },
              say: "Pausa. Un paciente orina mucho, su sodio es de ciento treinta y tres, y al quitarle el agua la orina se concentra sin problema. ¿Qué tiene?",
              exp: "Polidipsia primaria. El eje funciona: al quitarle el agua la orina se concentra. El sodio normal bajo es la pista de que toma de más."
            }
          ]
        },
        {
          ch: "SIADH e hiponatremia",
          sc: [
            {
              v: {
                k: "list",
                t: "SIADH: sobra ADH",
                items: [
                  "Hiponatremia sin edema",
                  "Orina concentrada",
                  "Na urinario alto",
                  "TSH y cortisol normales",
                  "Pulmón, cerebro, fármacos"
                ]
              },
              say: "El SIADH es lo contrario: sobra hormona antidiurética. El paciente retiene agua y se diluye el sodio, pero no tiene edema. La orina está concentrada y el sodio urinario alto. Antes de diagnosticarlo, descarta hipotiroidismo e insuficiencia suprarrenal. Las causas: cáncer de pulmón de células pequeñas, problemas del cerebro, neumonía y fármacos como los antidepresivos."
            },
            {
              v: {
                k: "big",
                h: "Na de 116 con convulsiones",
                t: "Salina al 3 %",
                u: "bolo de 100 a 150 mL"
              },
              say: "Si el sodio está muy bajo y el paciente convulsiona, no esperes a la restricción de líquidos: da solución salina al tres por ciento en bolo de cien a ciento cincuenta mililitros, y repite hasta subir cuatro a seis puntos."
            },
            {
              v: {
                k: "tip",
                kind: "pearl",
                t: "No subas el sodio más de 8 a 10 mEq/L en 24 horas: la corrección rápida causa desmielinización osmótica."
              },
              say: "Y la perla: nunca subas el sodio más de ocho a diez puntos en un día. Si corres, días después aparece la desmielinización osmótica, con parálisis y problemas para hablar y tragar."
            },
            {
              v: {
                k: "mnemo",
                t: "DI = seco · SIADH = empapado",
                d: "En la DI falta ADH: sangre concentrada, Na alto. En el SIADH sobra: sangre diluida, Na bajo."
              },
              say: "Para no confundirlas: diabetes insípida, seco, el paciente se deshidrata y sube el sodio. SIADH, empapado, retiene agua y baja el sodio. Y después de una cirugía de hipófisis pueden aparecer las dos, una tras otra."
            }
          ]
        }
      ],
      sections: [
        { h: 'La hipófisis en 1 minuto', html: `
<ul>
<li><b>Anterior (adenohipófisis)</b>: GH, PRL, ACTH, TSH, LH y FSH. Recibe órdenes del hipotálamo por el sistema porta; la dopamina <b>frena</b> la PRL.</li>
<li><b>Posterior (neurohipófisis)</b>: solo guarda y libera <b>ADH (vasopresina)</b> y oxitocina, fabricadas en los núcleos supraóptico y paraventricular.</li>
<li>La ADH inserta <b>acuaporinas 2</b> en el túbulo colector (receptor V2): reabsorbe agua libre y concentra la orina. Se libera con osmolaridad alta (&gt;285) o hipovolemia importante.</li>
</ul>` },
        { h: 'Adenoma no funcionante e incidentaloma', html: `
<ul>
<li>El <b>macroadenoma más común</b> (casi todos gonadotropos silentes). Se presenta por <b>efecto de masa</b>: cefalea, <b>hemianopsia bitemporal</b>, diplopía (seno cavernoso) e hipopituitarismo.</li>
<li>Puede dar <b>PRL moderadamente alta (&lt;100–150)</b> por compresión del tallo (efecto tallo): no es prolactinoma.</li>
<li>Estudio: <b>RM con gadolinio</b> + perfil hormonal completo (PRL, IGF-1, tamizaje de Cushing, cortisol 8 a. m., T4 libre, LH/FSH con testosterona o estradiol) + <b>campimetría</b> si toca el quiasma.</li>
<li>Tratamiento: <b>cirugía transesfenoidal</b> si hay defecto visual, compresión o crecimiento. El micro asintomático se vigila con RM.</li>
<li>Otros tumores selares: <b>craneofaringioma</b> (niños; quístico y calcificado, remanente de la bolsa de Rathke; da DI de entrada), meningioma, metástasis, quiste de Rathke.</li>
</ul>` },
        { h: 'Hipopituitarismo', html: `
<ul>
<li>Da síntomas cuando se destruye <b>≥75 %</b> de la glándula. Causa más común: <b>macroadenoma no funcionante</b>; otras: cirugía o radioterapia, <b>Sheehan</b> (hemorragia posparto), apoplejía, trauma craneal, hipofisitis, infiltración, silla turca vacía.</li>
<li>Orden en que se pierden: <b>GH → LH/FSH → TSH → ACTH</b> (la PRL suele subir). Primer síntoma: en niños, talla baja; en adultos, <b>hipogonadismo</b>.</li>
<li>Laboratorio: hormona periférica baja con hormona hipofisaria <b>baja o “normal”</b> (inapropiadamente normal). En el hipotiroidismo central la <b>TSH no sirve</b>: se mide y ajusta la <b>T4 libre</b>.</li>
<li>Déficit de ACTH: fatiga, hipotensión, hiponatremia, hipoglucemia, <b>sin hiperpigmentación ni hiperkalemia</b> (la aldosterona depende de la renina, no de la ACTH).</li>
<li>Reposición: <b>hidrocortisona primero</b>, después levotiroxina (al revés precipitas crisis suprarrenal); luego sexuales y GH. Dosis de estrés del esteroide en enfermedad o cirugía.</li>
<li><b>Apoplejía hipofisaria</b>: cefalea súbita, oftalmoplejía, caída de la visión, hipotensión → <b>hidrocortisona IV ya</b>, RM y neurocirugía si la visión está comprometida.</li>
</ul>` },
        { h: 'Diabetes insípida (deficiencia o resistencia a la AVP)', html: `
<ul>
<li>Desde 2022 se llama <b>deficiencia de arginina vasopresina (AVP-D)</b> a la central y <b>resistencia a la AVP (AVP-R)</b> a la nefrogénica.</li>
<li>Clínica: <b>poliuria hipotónica</b> (&gt;3 L/día o &gt;50 mL/kg; osmolaridad urinaria &lt;300), nicturia, sed, preferencia por agua fría. Si no puede beber: <b>hipernatremia</b>.</li>
<li><b>Central</b>: idiopática/autoinmune, <b>después de cirugía hipofisaria</b>, trauma, craneofaringioma, metástasis, infiltrativas (histiocitosis, sarcoidosis). <b>Nefrogénica</b>: <b>litio</b> (la más común en adultos), hipercalcemia, hipokalemia, ERC, demeclociclina.</li>
<li>Diferencial clave: <b>polidipsia primaria</b> (psiquiátrica): Na normal-bajo y orina diluida porque toma demasiada agua.</li>
</ul>
<div class="tablewrap"><table class="mini">
<tr><th></th><th>Prueba de deprivación de agua</th><th>Después de desmopresina</th></tr>
<tr><td><b>Polidipsia primaria</b></td><td>La orina se concentra (&gt;600–800 mOsm)</td><td>Sin cambio</td></tr>
<tr><td><b>DI central (AVP-D)</b></td><td>No concentra; Na y osmolaridad plasmática suben</td><td><b>Sube &gt;50 %</b></td></tr>
<tr><td><b>DI nefrogénica (AVP-R)</b></td><td>No concentra</td><td>Sin cambio (&lt;10–50 %)</td></tr>
</table></div>
<ul>
<li>Hoy existe la <b>copeptina</b> (estimulada con salina hipertónica o arginina): &gt;4.9 pmol/L tras salina = polidipsia primaria. Basal &gt;21.4 pmol/L sin estimular = nefrogénica.</li>
<li>Tratamiento: central → <b>desmopresina</b> (oral, intranasal o SC; vigila hiponatremia). Nefrogénica → quitar la causa, dieta baja en sal y proteínas, <b>tiazida</b> (+ <b>amilorida</b> si es por litio), AINE.</li>
<li>Hipernatremia: bajar el Na <b>≤10–12 mEq/L en 24 h</b> en la crónica (edema cerebral si va rápido).</li>
</ul>` },
        { h: 'SIADH', html: `
<ul>
<li>ADH alta sin estímulo osmótico ni de volumen → retiene agua → <b>hiponatremia hipotónica euvolémica</b> (sin edema: el riñón tira el sodio sobrante).</li>
<li>Causas: <b>SNC</b> (EVC, hemorragia, meningitis, trauma), <b>pulmón</b> (neumonía, TB), <b>cáncer</b> (carcinoma pulmonar de células pequeñas), <b>fármacos</b> (ISRS, carbamazepina, oxcarbazepina, ciclofosfamida, vincristina, éxtasis), náusea, dolor, <b>posoperatorio</b> (incluida la cirugía transesfenoidal).</li>
<li>Criterios: Na &lt;135, osmolaridad plasmática <b>&lt;275</b>, osmolaridad urinaria <b>&gt;100</b> (inapropiadamente concentrada), <b>Na urinario &gt;30</b>, euvolemia, <b>con TSH y cortisol normales</b> y sin diuréticos. Ácido úrico bajo.</li>
<li>Clínica según el Na y la velocidad: náusea, cefalea, confusión; &lt;120 o caída rápida: convulsiones, coma (edema cerebral).</li>
<li>Tratamiento: grave sintomática (convulsiones, coma) → <b>solución salina al 3 %</b> en bolo de 100–150 mL en 10–20 min, repetir hasta subir 4–6 mEq/L. Leve-moderada: <b>restricción hídrica</b> (&lt;800–1000 mL/día), tabletas de sal o urea oral, tolvaptán (en hospital, máximo 30 días), tratar la causa.</li>
<li>Límite de corrección: <b>≤8–10 mEq/L en 24 h</b> (≤8 si hay alcoholismo, desnutrición, hipokalemia o hepatopatía). Ir más rápido causa <b>desmielinización osmótica</b> (cuadriparesia, disartria, “locked-in”) días después.</li>
</ul>` },
        { h: 'Después de la cirugía transesfenoidal: la respuesta trifásica', html: `
<ol>
<li><b>Días 1–2: DI</b> (se lesionan las neuronas: poliuria con Na que sube) → desmopresina.</li>
<li><b>Días 6–10: SIADH</b> (las neuronas dañadas sueltan la ADH guardada: hiponatremia) → restricción hídrica; suspender la desmopresina.</li>
<li><b>Después: DI permanente</b> si se perdió &gt;80–90 % de las neuronas.</li>
</ol>
<p>Por eso tras la cirugía se vigila el Na y la uresis diario, y se revisa el cortisol.</p>` },
        { h: 'Cómo lo preguntan en el examen', html: `
<ul>
<li>Macroadenoma con PRL de 60 y hemianopsia bitemporal → <b>no funcionante con efecto tallo</b> → cirugía (no cabergolina).</li>
<li>Puérpera con hemorragia que no lacta y después tiene amenorrea → <b>Sheehan</b>.</li>
<li>Paciente con hipopituitarismo que se descompensa al iniciar levotiroxina → <b>faltó el cortisol</b>.</li>
<li>Poliuria con orina diluida en paciente con litio → <b>DI nefrogénica</b> → no responde a desmopresina → tiazida + amilorida.</li>
<li>Poliuria 1–2 días después de cirugía hipofisaria con Na 150 → <b>DI central</b> → desmopresina.</li>
<li>Fumador con masa pulmonar central, Na 122, euvolémico, orina concentrada y Na urinario alto → <b>SIADH</b> por células pequeñas.</li>
<li>Na 118 con convulsiones → <b>salina al 3 %</b> en bolo; no restricción hídrica.</li>
</ul>` }
      ],
      mnemo: { t: 'DI = Dry (seco) · SIADH = Soaked (empapado)', d: 'En la DI falta ADH: orina mucha y diluida, sangre concentrada (Na alto). En el SIADH sobra ADH: orina poca y concentrada, sangre diluida (Na bajo).' },
      pearl: 'La desmopresina separa la DI: si la orina se concentra (sube >50 %), el problema era la falta de ADH (central); si no, el riñón no la oye (nefrogénica).',
      trap: 'Hiponatremia euvolémica con orina concentrada no es SIADH hasta descartar hipotiroidismo e insuficiencia suprarrenal (ojo con el hipopituitarismo).',
      guide: [
        'Nombre: AVP-D (central) y AVP-R (nefrogénica) desde 2022; tu examen puede usar “diabetes insípida”.',
        'La copeptina estimulada ha desplazado a la prueba de deprivación de agua donde está disponible; en México sigue siendo más común la deprivación.',
        'Velocidad de corrección del Na: guías europeas 2014 permiten hasta 10 mEq/L/24 h; las de EUA recomiendan ≤8 en pacientes de alto riesgo.'
      ],
      refs: [
        'Fleseriu M, et al. Hormonal replacement in hypopituitarism in adults: Endocrine Society Guideline. J Clin Endocrinol Metab 2016.',
        'Arima H, et al. Changing the name of diabetes insipidus: a position statement of the Working Group for Renaming Diabetes Insipidus. 2022.',
        'Fenske W, et al. A copeptin-based approach in the diagnosis of diabetes insipidus. N Engl J Med 2018.',
        'Spasovski G, et al. Clinical practice guideline on diagnosis and treatment of hyponatraemia. Eur J Endocrinol 2014.',
        'Adrogué HJ, Tucker BM, Madias NE. Diagnosis and management of hyponatremia: a review. JAMA 2022.',
        'Molitch ME. Diagnosis and treatment of pituitary adenomas: a review. JAMA 2017.'
      ]
    }
  },

  guias: {
    hipofnf: { src: ENDO,
      puntos: [
        'Tumores de la hipófisis: el adenoma es el más común; en niños, el <b>craneofaringioma</b> (líquido “negro de motor”, remanente de la bolsa de Rathke). Mejor estudio: <b>RM con gadolinio</b>.',
        'Hipopituitarismo: la causa más común son los <b>macroadenomas no funcionantes</b>; síntomas al dañarse 75–80 %. Secuencia: GH → FSH → LH → TSH → ACTH → PRL. <b>Repón primero cortisol</b>.',
        'La complicación común de la cirugía transesfenoidal es la <b>diabetes insípida</b>; también puede dar SIADH.',
        'DI: sospecha con hipernatremia, osmolaridad plasmática normal o alta y urinaria baja; confirma con <b>deprivación de agua</b> y luego <b>desmopresina</b>. Central → desmopresina; nefrogénica → <b>tiazidas</b>, AINE, amilorida.',
        'SIADH: hiponatremia &lt;135, osmolaridad &lt;280, euvolemia, osmolaridad urinaria &gt;100 y Na urinario &gt;20–30. Tratamiento: restricción de líquidos, vaptanos, demeclociclina, furosemida.'
      ],
      ojo: [
        'Tu guía corta el SIADH en osmolaridad plasmática &lt;280; los criterios actuales usan <b>&lt;275 mOsm/kg</b> y piden descartar hipotiroidismo e insuficiencia suprarrenal.',
        'La demeclociclina y la furosemida casi no se usan hoy: la segunda línea es <b>urea oral</b> o tolvaptán (este último en hospital, máximo 30 días).',
        'Falta en la guía: la <b>salina al 3 %</b> para la hiponatremia grave sintomática y el límite de corrección (≤8–10 mEq/L en 24 h).'
      ],
      cards: [['Craneofaringioma', 'Tumor selar de niños, quístico y calcificado (bolsa de Rathke); da DI y talla baja']] }
  },

  cards: [
    ['Macroadenoma más común', 'No funcionante (gonadotropo silente)'],
    ['Efecto tallo', 'PRL moderada (<100–150) por compresión del tallo: no es prolactinoma'],
    ['Causa más común de hipopituitarismo', 'Macroadenoma no funcionante'],
    ['Orden de pérdida hormonal', 'GH → LH/FSH → TSH → ACTH'],
    ['Hipotiroidismo central: cómo se mide y ajusta', 'Con la T4 libre (la TSH no sirve)'],
    ['Déficit de ACTH vs Addison', 'Sin hiperpigmentación ni hiperkalemia (la aldosterona depende de la renina)'],
    ['Hipopituitarismo: qué se repone primero', 'Hidrocortisona, antes que levotiroxina'],
    ['Síndrome de Sheehan', 'Necrosis hipofisaria por hemorragia posparto: no lacta, amenorrea'],
    ['DI: definición de poliuria', '>3 L/día (o >50 mL/kg) con orina hipotónica (<300 mOsm)'],
    ['DI nefrogénica: causa más común en adultos', 'Litio'],
    ['Deprivación de agua + desmopresina: DI central', 'La orina se concentra >50 % con desmopresina'],
    ['Tratamiento de DI nefrogénica', 'Quitar la causa, dieta baja en sal, tiazida (+ amilorida si es por litio), AINE'],
    ['SIADH: criterios', 'Na <135, Osm <275, Osm urinaria >100, Na urinario >30, euvolemia, TSH y cortisol normales'],
    ['Tumor clásico con SIADH', 'Carcinoma pulmonar de células pequeñas'],
    ['Hiponatremia grave con convulsiones', 'Salina al 3 % en bolo de 100–150 mL; repetir hasta +4–6 mEq/L'],
    ['Límite de corrección de la hiponatremia', '≤8–10 mEq/L en 24 h (riesgo de desmielinización osmótica)'],
    ['Respuesta trifásica tras cirugía hipofisaria', 'DI → SIADH → DI permanente']
  ],

  questions: [
    q({ id: 'hipofnf-01', dif: 2,
      stem: 'Hombre de 58 años con cefalea de meses y choques con el retrovisor de los lados. Campimetría: hemianopsia bitemporal. RM: masa selar de 2.8 cm. PRL 64 ng/mL (normal <15); IGF-1 y cortisol urinario normales. ¿Cuál es el tratamiento?',
      opts: ['Cabergolina y repetir RM en 3 meses', 'Cirugía transesfenoidal', 'Octreotida', 'Observación con RM anual', 'Radioterapia de entrada'],
      ans: 1,
      exp: 'Macroadenoma no funcionante con compresión del quiasma. La PRL moderada se explica por compresión del tallo (efecto tallo); un macroprolactinoma de ese tamaño daría PRL en cientos o miles. Con defecto visual se opera.',
      why: ['La cabergolina bajaría la PRL, pero no el tumor; se perdería tiempo con la visión en riesgo.', '', 'Es para acromegalia.', 'Hay defecto visual: requiere descompresión.', 'Se reserva para residuales o recurrencias.'],
      ref: 'Molitch, JAMA 2017' }),
    q({ id: 'hipofnf-02', dif: 2,
      stem: 'Mujer de 30 años que tuvo hemorragia obstétrica masiva hace 8 meses. No pudo amamantar y no ha vuelto a menstruar. Fatiga e intolerancia al frío. Na 131. ¿Qué es lo primero que debes reponer?',
      opts: ['Levotiroxina', 'Estrógenos con progestágeno', 'Hidrocortisona', 'Hormona de crecimiento', 'Desmopresina'],
      ans: 2,
      exp: 'Síndrome de Sheehan con panhipopituitarismo. El déficit de ACTH es el que mata y la levotiroxina acelera el metabolismo del cortisol: se repone primero el glucocorticoide.',
      why: ['Si se da primero puede precipitar una crisis suprarrenal.', 'Necesarios, pero no son lo urgente.', '', 'No es prioritaria.', 'No hay datos de diabetes insípida (la neurohipófisis suele respetarse).'],
      ref: 'Endocrine Society 2016' }),
    q({ id: 'hipofnf-03', dif: 2,
      stem: 'Paciente con hipotiroidismo central en tratamiento con levotiroxina. ¿Con qué estudio ajustas la dosis?',
      opts: ['TSH', 'T4 libre', 'T3 total', 'Anticuerpos anti-TPO', 'Gammagrama tiroideo'],
      ans: 1,
      exp: 'En el hipotiroidismo central la TSH es baja o “normal” y no refleja la dosis. Se ajusta para dejar la T4 libre en la mitad superior del rango normal.',
      why: ['No sirve: la hipófisis no la produce bien.', '', 'Menos útil y variable.', 'Son para Hashimoto.', 'No ajusta dosis.'],
      ref: 'Endocrine Society 2016' }),
    q({ id: 'hipofnf-04', dif: 2,
      stem: 'Paciente con hipopituitarismo por macroadenoma. ¿Qué hallazgo esperas que NO tenga, a diferencia de la enfermedad de Addison?',
      opts: ['Fatiga', 'Hiponatremia', 'Hiperkalemia', 'Hipoglucemia', 'Hipotensión'],
      ans: 2,
      exp: 'En la insuficiencia suprarrenal secundaria falta la ACTH, pero la aldosterona depende del sistema renina-angiotensina: no hay hiperkalemia ni hiperpigmentación (esta se debe a la ACTH alta del Addison).',
      why: ['Ocurre en ambas.', 'Ocurre en ambas (por ADH aumentada y falta de cortisol).', '', 'Ocurre en ambas.', 'Ocurre en ambas.'],
      ref: 'Endocrine Society 2016' }),
    q({ id: 'hipofnf-05', dif: 1,
      stem: 'Hombre de 45 años con trastorno bipolar en tratamiento con litio por 10 años. Orina 6 L al día y tiene mucha sed. Na 146, osmolaridad urinaria 150. Tras deprivación de agua y desmopresina la osmolaridad urinaria no cambia. ¿Diagnóstico?',
      opts: ['Polidipsia primaria', 'Diabetes insípida central', 'Diabetes insípida nefrogénica', 'SIADH', 'Diabetes mellitus descompensada'],
      ans: 2,
      exp: 'El litio daña la respuesta del túbulo colector a la ADH: resistencia a la AVP. No concentra con deprivación ni con desmopresina.',
      why: ['En ella la orina se concentra con la deprivación y el Na es normal-bajo.', 'Respondería a la desmopresina.', '', 'Da hiponatremia y orina concentrada.', 'Daría diuresis osmótica con glucosuria, no orina tan diluida.'],
      ref: 'Fenske, NEJM 2018' }),
    q({ id: 'hipofnf-06', dif: 2,
      stem: 'El paciente anterior debe seguir con litio por indicación de psiquiatría. ¿Qué agregas para reducir la poliuria?',
      opts: ['Desmopresina', 'Amilorida', 'Furosemida', 'Restricción hídrica estricta', 'Tolvaptán'],
      ans: 1,
      exp: 'La amilorida bloquea el canal ENaC por donde el litio entra a la célula del colector: reduce el daño y la poliuria. Se combina con tiazida y dieta baja en sal.',
      why: ['No funciona en la nefrogénica.', '', 'Empeora la pérdida de agua.', 'Peligrosa: hipernatremia grave.', 'Es antagonista de ADH: empeoraría la poliuria.'],
      ref: 'Fenske, NEJM 2018' }),
    q({ id: 'hipofnf-07', dif: 2,
      stem: 'Mujer de 52 años, 36 horas después de resección transesfenoidal de un adenoma. Orina 350 mL/h, Na pasó de 140 a 151, osmolaridad urinaria 110. ¿Qué haces?',
      opts: ['Restricción hídrica', 'Desmopresina', 'Solución salina al 3 %', 'Tolvaptán', 'Hidroclorotiazida'],
      ans: 1,
      exp: 'Diabetes insípida central posoperatoria (primera fase de la respuesta trifásica): se da desmopresina y se vigila el Na, porque días después puede venir una fase de SIADH.',
      why: ['Empeoraría la hipernatremia.', '', 'Agravaría la hipernatremia.', 'Aumenta la pérdida de agua.', 'Es para la nefrogénica.'],
      ref: 'Molitch, JAMA 2017' }),
    q({ id: 'hipofnf-08', dif: 1,
      stem: 'Hombre de 66 años, fumador, con masa hiliar derecha. Na 122, euvolémico, osmolaridad plasmática 255, osmolaridad urinaria 480, Na urinario 60. TSH y cortisol normales. ¿Diagnóstico más probable?',
      opts: ['Polidipsia primaria', 'SIADH por carcinoma de células pequeñas', 'Insuficiencia suprarrenal', 'Hiponatremia por hipovolemia', 'Seudohiponatremia'],
      ans: 1,
      exp: 'Hiponatremia hipotónica euvolémica con orina inapropiadamente concentrada y Na urinario alto, con tiroides y suprarrenal normales: SIADH. El tumor clásico es el de células pequeñas.',
      why: ['La orina estaría diluida (<100).', '', 'El cortisol es normal.', 'El Na urinario sería <30 y habría datos de deshidratación.', 'La osmolaridad estaría normal.'],
      ref: 'Spasovski, Eur J Endocrinol 2014' }),
    q({ id: 'hipofnf-09', dif: 2,
      stem: 'Mujer de 40 años con Na 116 que convulsiona en urgencias. ¿Cuál es el tratamiento inmediato?',
      opts: ['Restricción hídrica a 800 mL/día', 'Bolo de solución salina al 3 % (100–150 mL en 10–20 min)', 'Solución salina al 0.9 % a 200 mL/h', 'Tolvaptán oral', 'Furosemida IV'],
      ans: 1,
      exp: 'Hiponatremia grave sintomática: salina hipertónica en bolo, repetible, hasta subir 4–6 mEq/L y que ceda la convulsión, sin pasar de 8–10 mEq/L en 24 h.',
      why: ['Tarda días: no es para la urgencia.', '', 'En SIADH la salina isotónica puede incluso bajar más el Na.', 'Lento y no es para la urgencia.', 'No corrige la hiponatremia por sí sola.'],
      ref: 'Spasovski, Eur J Endocrinol 2014' }),
    q({ id: 'hipofnf-10', dif: 2,
      stem: 'Paciente alcohólico con Na 112 corregido a 130 en 24 horas. Al tercer día presenta disartria, disfagia y cuadriparesia. ¿Qué ocurrió?',
      opts: ['Edema cerebral', 'Síndrome de desmielinización osmótica', 'Encefalopatía de Wernicke', 'EVC de tallo por hipertensión', 'Hipoglucemia'],
      ans: 1,
      exp: 'Corrección demasiado rápida (18 mEq/L en 24 h) en un paciente de alto riesgo. El límite es ≤8 mEq/L en 24 h cuando hay alcoholismo, desnutrición o hipokalemia.',
      why: ['Es el riesgo de NO corregir una hiponatremia aguda.', '', 'Da confusión, ataxia y oftalmoplejía, no cuadriparesia tras corregir el Na.', 'No hay datos de EVC.', 'No explica el cuadro.'],
      ref: 'Adrogué, JAMA 2022' }),
    q({ id: 'hipofnf-11', dif: 2,
      stem: 'Paciente con poliuria e hiponatremia leve (Na 133). Osmolaridad urinaria 80. En la prueba de deprivación la orina se concentra a 750 mOsm. ¿Diagnóstico?',
      opts: ['DI central', 'DI nefrogénica', 'Polidipsia primaria', 'SIADH', 'Diuresis osmótica'],
      ans: 2,
      exp: 'Si se le quita el agua, el eje ADH-riñón funciona y la orina se concentra: el problema era el exceso de ingesta. El Na normal-bajo es la pista.',
      why: ['No concentraría con la deprivación.', 'No concentraría.', '', 'La orina sería concentrada desde el inicio.', 'La osmolaridad urinaria sería alta.'],
      ref: 'Fenske, NEJM 2018' }),
    q({ id: 'hipofnf-12', dif: 3,
      stem: 'Paciente con macroadenoma que llega con cefalea súbita intensa, ptosis derecha, visión borrosa y PA 82/50. ¿Qué das primero?',
      opts: ['Cabergolina', 'Hidrocortisona IV', 'Manitol', 'Levotiroxina IV', 'Desmopresina'],
      ans: 1,
      exp: 'Apoplejía hipofisaria: hemorragia o infarto del adenoma con insuficiencia suprarrenal aguda. Hidrocortisona IV de inmediato; luego RM y descompresión si hay deterioro visual.',
      why: ['No es el tratamiento de la apoplejía.', '', 'No resuelve el choque por falta de cortisol.', 'Nunca antes del cortisol.', 'No hay datos de DI.'],
      ref: 'Molitch, JAMA 2017' }),
    q({
      id: "hipofnf-13",
      dif: 1,
      stem: "¿Cuál es la causa más común de hipopituitarismo en el adulto?",
      opts: [
        "Síndrome de Sheehan",
        "Macroadenoma hipofisario no funcionante",
        "Craneofaringioma",
        "Hipofisitis linfocítica",
        "Trauma craneal"
      ],
      ans: 1,
      exp: "Los macroadenomas, sobre todo los no funcionantes, son la causa más común por compresión del tejido sano.",
      why: [
        "Es causa clásica pero menos frecuente.",
        "",
        "Es más de niños.",
        "Rara.",
        "Causa reconocida pero menos común."
      ],
      ref: "Endocrine Society 2016"
    }),
    q({
      id: "hipofnf-14",
      dif: 2,
      stem: "Niño de 9 años con talla baja, cefalea, poliuria y hemianopsia bitemporal. La TC muestra una masa supraselar quística con calcificaciones. ¿Diagnóstico?",
      opts: [
        "Prolactinoma",
        "Craneofaringioma",
        "Adenoma no funcionante",
        "Germinoma",
        "Quiste aracnoideo"
      ],
      ans: 1,
      exp: "Masa supraselar quística y calcificada en un niño, con talla baja (déficit de GH) y diabetes insípida: craneofaringioma, remanente de la bolsa de Rathke.",
      why: [
        "Raro en niños y no calcificado.",
        "",
        "Raro en niños y no calcificado.",
        "También da DI, pero no es quístico-calcificado típico.",
        "No da déficits hormonales."
      ],
      ref: "Molitch, JAMA 2017"
    }),
    q({
      id: "hipofnf-15",
      dif: 2,
      stem: "Paciente con hiponatremia euvolémica y orina concentrada. Antes de diagnosticar SIADH, ¿qué debes descartar?",
      opts: [
        "Diabetes mellitus e hiperlipidemia",
        "Hipotiroidismo e insuficiencia suprarrenal",
        "Insuficiencia cardiaca y cirrosis",
        "Hipercalcemia e hipokalemia",
        "Hiperaldosteronismo"
      ],
      ans: 1,
      exp: "Ambos causan hiponatremia euvolémica con ADH alta y se confunden con SIADH. Pide TSH y cortisol.",
      why: [
        "La glucosa alta da seudohiponatremia hipertónica, no SIADH.",
        "",
        "Son hipervolémicas.",
        "Causan DI nefrogénica.",
        "Da Na normal-alto."
      ],
      ref: "Spasovski, Eur J Endocrinol 2014"
    }),
    q({
      id: "hipofnf-16",
      dif: 2,
      stem: "Mujer de 70 años con depresión que inició sertralina hace 3 semanas. Na 126, euvolémica, sin síntomas graves. Osmolaridad urinaria 420, Na urinario 50. ¿Manejo inicial?",
      opts: [
        "Salina al 3 % en bolo",
        "Suspender sertralina y restricción hídrica",
        "Salina al 0.9 % a 150 mL/h",
        "Desmopresina",
        "Furosemida y salina al 3 %"
      ],
      ans: 1,
      exp: "SIADH por ISRS, moderado y sin síntomas graves: suspender el fármaco y restringir líquidos. La salina al 3 % se reserva para síntomas graves.",
      why: [
        "Solo para síntomas graves.",
        "",
        "En SIADH puede empeorar el Na.",
        "Empeoraría la hiponatremia.",
        "No está indicado en asintomática."
      ],
      ref: "Adrogué, JAMA 2022"
    }),
    q({
      id: "hipofnf-17",
      dif: 2,
      stem: "Ocho días después de una cirugía transesfenoidal, un paciente que recibía desmopresina por diabetes insípida presenta Na de 127. ¿Qué explica el cambio?",
      opts: [
        "Insuficiencia suprarrenal aguda",
        "Fase de SIADH de la respuesta trifásica",
        "Diabetes insípida nefrogénica",
        "Polidipsia primaria",
        "Hiperglucemia"
      ],
      ans: 1,
      exp: "Las neuronas dañadas liberan la ADH almacenada entre los días 6 y 10: SIADH transitorio. Se suspende la desmopresina y se restringen líquidos; luego puede quedar DI permanente.",
      why: [
        "Debe descartarse, pero el patrón temporal es típico de la fase 2.",
        "",
        "No hay causa.",
        "No explica la hiponatremia tras cirugía.",
        "No hay datos."
      ],
      ref: "Molitch, JAMA 2017"
    }),
    q({
      id: "hipofnf-18",
      dif: 1,
      stem: "¿Qué tumor se asocia de forma clásica con SIADH?",
      opts: [
        "Adenocarcinoma de pulmón",
        "Carcinoma pulmonar de células pequeñas",
        "Carcinoma escamoso de pulmón",
        "Carcinoma renal",
        "Feocromocitoma"
      ],
      ans: 1,
      exp: "El carcinoma de células pequeñas produce ADH ectópica. El escamoso se asocia a hipercalcemia (PTHrP).",
      why: [
        "Menos asociado.",
        "",
        "Clásico de hipercalcemia.",
        "Asociado a eritrocitosis.",
        "Da hipertensión paroxística."
      ],
      ref: "Spasovski, Eur J Endocrinol 2014"
    }),
    q({
      id: "hipofnf-19",
      dif: 3,
      stem: "Paciente con DI central tratada con desmopresina que ahora refiere cefalea y náusea. Na 126. ¿Qué pasó?",
      opts: [
        "Progresión de la DI",
        "Intoxicación hídrica por exceso de desmopresina",
        "SIADH paraneoplásico",
        "Insuficiencia renal",
        "Hiperglucemia"
      ],
      ans: 1,
      exp: "La desmopresina impide eliminar agua; si el paciente sigue bebiendo mucho, aparece hiponatremia. Se ajusta la dosis y se permite un periodo de “escape” acuarético.",
      why: [
        "La DI daría Na alto.",
        "",
        "No hay datos de tumor.",
        "No explica el cuadro.",
        "No hay datos."
      ],
      ref: "Fenske, NEJM 2018"
    }),
    q({
      id: "hipofnf-20",
      dif: 2,
      stem: "Paciente con microadenoma no funcionante de 6 mm hallado de manera incidental, sin síntomas y con perfil hormonal normal. ¿Conducta?",
      opts: [
        "Cirugía transesfenoidal",
        "Cabergolina",
        "Seguimiento con RM",
        "Radioterapia",
        "Octreotida"
      ],
      ans: 2,
      exp: "El microincidentaloma no funcionante asintomático se vigila con RM (a 1 año y luego espaciado). Se opera si crece, comprime o da síntomas.",
      why: [
        "No está indicada sin síntomas ni crecimiento.",
        "No es prolactinoma.",
        "",
        "No está indicada.",
        "Es para acromegalia."
      ],
      ref: "Freda, Endocrine Society 2011"
    })
  ]
};
