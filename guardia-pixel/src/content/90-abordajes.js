// Abordajes del temario: un abordaje por cada renglón de la lista del parcial (tal como la mandó el grupo), en el
// orden de la lista. abordajes: [{ id, subj, tema (texto de la lista), topics: [temas de la app], pasos: [{ h, t, si? }],
// cubre?: [[punto del temario, html]], examen }]. Los pasos van en el orden en que se hacen (el reto “Ordena los pasos”
// los revuelve). si: [[condición, conducta]] dibuja las ramas de ese paso.
export default {
  abordajes: [
    // ───────────── Endocrinología
    {
      id: 'hipofnf', subj: 'endo', tema: 'Trastornos hipofisarios no funcionantes: hipopituitarismo, diabetes insípida y SIADH (semana 1)', topics: ['hipofnf'],
      pasos: [
        { h: 'Sospecha por masa, por déficit o por el agua', t: `Efecto de masa (cefalea, hemianopsia bitemporal), <b>hipopituitarismo</b> (hipogonadismo, fatiga, hipotensión) o un trastorno del agua: <b>poliuria con Na alto</b> (DI) o <b>hiponatremia euvolémica</b> (SIADH).` },
        { h: 'RM y perfil hormonal completo', t: `<b>RM con gadolinio</b> + PRL (el efecto tallo da PRL &lt;100–150), IGF-1, tamizaje de Cushing, <b>cortisol 8 a. m.</b>, <b>T4 libre</b>, LH/FSH con testosterona o estradiol. Campimetría si toca el quiasma.` },
        { h: 'Repón en orden', t: `<b>Hidrocortisona primero</b>, después levotiroxina (ajustada con la T4 libre), luego sexuales. Apoplejía: hidrocortisona IV ya.` },
        { h: 'Poliuria: confirma que es hipotónica', t: `&gt;3 L/día con osmolaridad urinaria &lt;300. Descarta diuresis osmótica (glucosa) y revisa fármacos (litio).`,
          si: [['Na normal-bajo, orina se concentra al deprivar', 'polidipsia primaria'], ['No concentra; sube &gt;50 % con desmopresina', 'DI central → desmopresina'], ['No concentra ni con desmopresina', 'DI nefrogénica → tiazida (+ amilorida si es litio)']] },
        { h: 'Hiponatremia: clasifícala', t: `Mide osmolaridad plasmática (hipotónica &lt;275), volemia, osmolaridad y Na urinarios.`,
          si: [['Euvolémica, orina &gt;100 mOsm, Na urinario &gt;30, TSH y cortisol normales', 'SIADH: busca SNC, pulmón, cáncer, fármacos'], ['Hipovolémica, Na urinario &lt;30', 'pérdidas: salina 0.9 %'], ['Hipervolémica (edema)', 'IC, cirrosis, nefrótico']] },
        { h: 'Trata según los síntomas', t: `Convulsiones o coma: <b>salina al 3 % en bolo</b> de 100–150 mL (repite hasta +4–6). Leve: restricción hídrica, sal o urea, tratar la causa. <b>No más de 8–10 mEq/L en 24 h</b>.` },
        { h: 'Vigila después de la cirugía', t: `Na y uresis diarios: <b>DI (días 1–2) → SIADH (días 6–10) → DI permanente</b> (respuesta trifásica).` }
      ],
      cubre: [
        ['Adenoma no funcionante', `El macroadenoma más común; da efecto de masa e hipopituitarismo. Con defecto visual → cirugía transesfenoidal.`],
        ['Hipopituitarismo', `GH → LH/FSH → TSH → ACTH. Hormona periférica baja con hipofisaria baja o “normal”. Cortisol antes que tiroides.`],
        ['Diabetes insípida', `Falta (central) o no se oye (nefrogénica) la ADH: poliuria diluida y Na alto. Deprivación de agua + desmopresina.`],
        ['SIADH', `Sobra ADH: hiponatremia hipotónica euvolémica con orina concentrada. Restricción hídrica; 3 % si hay síntomas graves.`]
      ],
      examen: 'Macroadenoma con PRL moderada = efecto tallo (cirugía, no cabergolina). Poliuria con litio que no responde a desmopresina = DI nefrogénica. Hiponatremia con convulsiones = salina al 3 %.'
    },
    {
      id: 'hipofisis', subj: 'endo', tema: 'Tumores hipofisarios funcionantes: prolactinoma, acromegalia y Cushing (semana 2)', topics: ['hipofisis'],
      pasos: [
        { h: 'Reconoce por qué llega', t: `Por <b>efecto de masa</b> (cefalea, hemianopsia bitemporal, hipopituitarismo; pares III, IV y VI si invade el seno cavernoso), por <b>exceso hormonal</b> (galactorrea-amenorrea, acromegalia, Cushing) o como <b>incidentaloma</b>.` },
        { h: 'Mide el tumor con RM de silla turca', t: `RM con gadolinio: <b>microadenoma &lt;1 cm</b>, <b>macroadenoma ≥1 cm</b>. La TC solo si no hay RM.` },
        { h: 'Perfil de hipersecreción a todos', t: `<b>Prolactina</b> (si es un macro con PRL apenas alta, pide dilución por el efecto gancho), <b>IGF-1</b>, y para Cushing una de: cortisol libre en orina de 24 h, supresión con 1 mg de dexametasona o cortisol salival nocturno.`,
          si: [['PRL &gt;150–200 ng/mL', 'prolactinoma'], ['IGF-1 alta', 'GH sin suprimir con 75 g de glucosa = acromegalia'], ['Cortisol sin suprimir', 'ACTH: normal o alta = Cushing hipofisario']] },
        { h: 'Busca hipopituitarismo', t: `En todo macroadenoma: cortisol de las 8 am, <b>T4 libre</b> (la TSH engaña), LH/FSH con testosterona o estradiol. <b>Repón primero el esteroide y después la levotiroxina</b> (al revés precipitas crisis suprarrenal).` },
        { h: 'Campimetría', t: `Si el tumor toca o eleva el quiasma: campos visuales por confrontación y campimetría formal (hemianopsia bitemporal).` },
        { h: 'Trata según el tipo', t: `<b>Prolactinoma: cabergolina</b> (aun si es macro con defecto visual). <b>Acromegalia y Cushing: cirugía transesfenoidal</b> (si no se cura: análogos de somatostatina / pegvisomant; ketoconazol, osilodrostat). <b>No funcionante</b>: cirugía si comprime o crece; el micro asintomático se vigila con RM.` },
        { h: 'Vigila la apoplejía', t: `Cefalea súbita “en trueno” + oftalmoplejía + caída de la visión ± choque = <b>apoplejía hipofisaria</b>: <b>hidrocortisona IV ya</b>, RM y neurocirugía si hay compromiso visual.` }
      ],
      examen: 'El prolactinoma es el único que se trata primero con medicamento (cabergolina), incluso el macro con defecto visual. Acromegalia: IGF-1 para tamizar, GH que no baja de 1 ng/mL con la curva de glucosa para confirmar.'
    },
    {
      id: 'dm2', subj: 'endo', tema: 'Diabetes mellitus y antidiabéticos (semanas 3 y 4)', topics: ['dm2'],
      pasos: [
        { h: 'Haz el diagnóstico', t: `Glucosa en ayuno <b>≥126</b>, HbA1c <b>≥6.5 %</b>, glucosa a las 2 h de la CTGO <b>≥200</b>, o glucosa al azar ≥200 con síntomas. Sin síntomas se confirma con una segunda prueba. Prediabetes: 100–125 / 5.7–6.4 % / 140–199.` },
        { h: '¿Es una urgencia?', t: `Descarta crisis antes de pensar en pastillas.`,
          si: [['Glucosa &gt;250, pH &lt;7.3, HCO₃ &lt;18, cetonas', 'cetoacidosis: líquidos, potasio, insulina IV (no si K &lt;3.3)'], ['Glucosa &gt;600, osmolaridad &gt;320, sin acidosis', 'estado hiperosmolar: líquidos primero']] },
        { h: 'Clasifica el tipo', t: `Tipo 1 (joven, delgado, cetosis; anti-GAD, péptido C bajo), tipo 2, LADA, MODY o secundaria (pancreatitis, esteroides).` },
        { h: 'Evalúa metas y complicaciones', t: `Metas: <b>HbA1c &lt;7 %</b> (&lt;8 % en frágiles), PA &lt;130/80, LDL según riesgo. En la DM2 desde el diagnóstico: fondo de ojo, monofilamento y pulsos, <b>albúmina/creatinina en orina y TFG</b>.` },
        { h: 'Elige el fármaco por comorbilidad', t: `Metformina + estilo de vida de base; agrega según el paciente, sin importar la HbA1c.`,
          si: [['Enfermedad CV aterosclerótica', 'arGLP-1 o iSGLT2 con beneficio probado'], ['Insuficiencia cardiaca', 'iSGLT2'], ['ERC (TFG ≥20) o albuminuria', 'iSGLT2 ± arGLP-1, finerenona'], ['Obesidad', 'semaglutida o tirzepatida']] },
        { h: 'Insulina si hace falta', t: `HbA1c <b>&gt;10 %</b>, glucosa ≥300, síntomas catabólicos (pérdida de peso) o cetosis: <b>basal 0.1–0.2 U/kg/día</b>, titula con la glucosa en ayuno.` },
        { h: 'Da seguimiento', t: `HbA1c cada 3 meses si no está en meta (cada 6 si ya está), estatina de 40 a 75 años, revisión de pies en cada consulta, vacunas.` }
      ],
      examen: 'Sin síntomas, una sola cifra no basta: se repite la prueba. En DM2 con IC o ERC se agrega iSGLT2 aunque la HbA1c esté en meta.'
    },
    {
      id: 'cad', subj: 'endo', tema: 'Cetoacidosis diabética y estado hiperosmolar (semana 5)', topics: ['cad'],
      pasos: [
        { h: 'Confirma la crisis', t: `Glucosa, electrolitos con <b>brecha aniónica</b>, gasometría venosa, <b>β-hidroxibutirato</b>, osmolaridad, BUN/Cr, fósforo, BH, EGO, ECG.`,
          si: [['Glucosa ≥200, BHB ≥3, pH &lt;7.3 o HCO₃ &lt;18', 'cetoacidosis'], ['Glucosa ≥600, osm efectiva &gt;300, pH ≥7.3', 'estado hiperosmolar']] },
        { h: 'Líquidos primero', t: `Cristaloide isotónico <b>1–1.5 L la 1ª hora</b>, luego 250–500 mL/h. Calcula el <b>Na corregido</b> (+1.6 por cada 100 de glucosa arriba de 100): si es normal o alto, salina 0.45 %.` },
        { h: 'Revisa el potasio antes de la insulina', t: `El K corporal está bajo aunque el sérico salga normal.`,
          si: [['K &lt;3.5', 'repón y no inicies insulina'], ['K 3.5–5', '10–20 mEq por litro'], ['K &gt;5', 'sin K; mide cada 2 h']] },
        { h: 'Insulina regular IV', t: `<b>0.1 U/kg/h</b> (± bolo 0.1 U/kg) o 0.14 U/kg/h sin bolo. Meta: −50 a 70 mg/dL por hora. Bicarbonato solo si pH &lt;7.0.` },
        { h: 'Dextrosa a 250 sin quitar la insulina', t: `Cuando la glucosa baja de <b>250</b>: dextrosa al 5–10 % y baja la insulina a 0.05 U/kg/h. Lo que se trata es la <b>cetosis</b>.` },
        { h: 'Busca y trata el desencadenante', t: `Insulina omitida, <b>infección</b>, infarto, pancreatitis, fármacos (esteroides, <b>iSGLT2</b> → CAD euglucémica), embarazo.` },
        { h: 'Confirma la resolución y pasa a SC', t: `CAD: <b>BHB &lt;0.6 y pH ≥7.3</b> (o brecha ≤12). EHH: osm &lt;300 y mente normal. <b>Basal SC 2 h antes</b> de suspender la infusión.` }
      ],
      cubre: [
        ['Cetoacidosis diabética', `Déficit absoluto de insulina: cetonas + acidosis con brecha alta en horas; Kussmaul, vómito, dolor abdominal. Típica de DM1.`],
        ['Estado hiperglucémico hiperosmolar', `Déficit relativo: glucosa altísima, deshidratación de días y alteración mental, sin cetoacidosis. Típico de DM2 anciano.`],
        ['Complicaciones del tratamiento', `Hipoglucemia, hipokalemia, edema cerebral (niños), acidosis hiperclorémica por salina, sobrecarga de volumen.`]
      ],
      examen: 'Líquidos → K (≥3.5) → insulina IV → dextrosa a 250 sin suspender la insulina. Bicarbonato solo con pH &lt;7.0. Basal SC 2 h antes de quitar la infusión.'
    },
    {
      id: 'insulina', subj: 'endo', tema: 'Insulinoterapia (semana 6)', topics: ['insulina'],
      pasos: [
        { h: 'Decide si necesita insulina', t: `DM1 siempre. DM2: de entrada si HbA1c <b>&gt;10 %</b>, glucosa ≥300, catabolismo o cetosis; si no, cuando no llega a meta (considera antes un arGLP-1). Hospitalizado: insulina.` },
        { h: 'Elige el esquema', t: `Ambulatorio DM2: <b>basal</b>. DM1 o DM2 avanzada: <b>basal-bolo</b>. Hospital que come: basal-bolo-corrección (0.3–0.5 U/kg/día). Crisis: regular IV.` },
        { h: 'Inicia la basal', t: `<b>10 U o 0.1–0.2 U/kg/día</b>. Mantén metformina; suspende o baja la sulfonilurea.` },
        { h: 'Titula con el ayuno', t: `<b>+2 U cada 3 días</b> hasta 80–130 mg/dL; baja 10–20 % si hay hipoglucemia.`,
          si: [['Ayuno alto', 'sube la basal'], ['Ayuno en meta, HbA1c alta', 'agrega prandial o arGLP-1'], ['Basal &gt;0.5 U/kg o hipoglucemias', 'sobrebasalización: no subas más']] },
        { h: 'Agrega prandial si hace falta', t: `<b>4 U o 10 % de la basal</b> antes de la comida más grande; sube 1–2 U dos veces por semana; después en las otras comidas.` },
        { h: 'Enseña a reconocer y tratar la hipoglucemia', t: `<b>Regla del 15</b>. Inconsciente: <b>glucagón</b> o dextrosa al 50 % IV. Revisa técnica y sitios de inyección.` },
        { h: 'Ajusta por patrones', t: `Glucosa alta al despertar: mide a las 3 a. m.`,
          si: [['Hipoglucemia de madrugada', 'Somogyi → baja la dosis nocturna'], ['Sin hipoglucemia', 'fenómeno del alba → sube la basal'], ['Alta en la tarde con prednisona matutina', 'NPH en la mañana']] }
      ],
      cubre: [
        ['Tipos de insulina', `Ultrarrápidas (lispro, aspart, glulisina), regular (la única IV), NPH (pico 4–10 h), basales sin pico (glargina, detemir, degludec), premezclas.`],
        ['Esquemas', `Basal, basal-plus, basal-bolo, premezcla 2 veces al día; en hospital basal-bolo-corrección, no escala móvil sola.`],
        ['Hipoglucemia', `Niveles 1 (&lt;70), 2 (&lt;54) y 3 (requiere ayuda). Regla del 15; glucagón si no hay vía oral.`]
      ],
      examen: 'Basal se titula con el ayuno (+2 U cada 3 días). Ayuno en meta con HbA1c alta = agrega prandial. Somogyi: baja la nocturna; alba: sube la basal.'
    },
    {
      id: 'smdl', subj: 'endo', tema: 'Síndrome metabólico y dislipidemia (semana 7)', topics: ['smdl'],
      pasos: [
        { h: 'Tamiza y define el síndrome metabólico', t: `Perfil de lípidos en todo adulto (no necesita ayuno). Síndrome metabólico = <b>3 de 5</b>: cintura alta (≥90 cm hombre / ≥80 cm mujer en latinos), TG ≥150, HDL &lt;40 hombre / &lt;50 mujer, PA ≥130/85, glucosa en ayuno ≥100 (o en tratamiento para cualquiera).` },
        { h: 'Descarta causas secundarias', t: `<b>Hipotiroidismo (TSH)</b>, diabetes, síndrome nefrótico, colestasis, alcohol (TG), fármacos (tiazidas, esteroides, antirretrovirales, isotretinoína).` },
        { h: 'Calcula el riesgo cardiovascular', t: `<b>Muy alto</b>: enfermedad CV establecida, DM con daño a órgano, ERC con TFG &lt;30. <b>Alto</b>: LDL ≥190, DM sin daño, ERC 30–59. Los demás, con SCORE2 (ESC) o PREVENT (AHA). <b>LDL ≥190 = probable hipercolesterolemia familiar</b>: estatina de alta intensidad sin calcular nada.` },
        { h: 'Fija la meta de LDL', t: `Muy alto riesgo <b>&lt;55 mg/dL</b> y bajar ≥50 %; alto &lt;70; moderado &lt;100; bajo &lt;116 (ESC).` },
        { h: 'Escala el tratamiento', t: `Estilo de vida para todos → <b>estatina de alta intensidad</b> (atorvastatina 40–80, rosuvastatina 20–40) → <b>+ ezetimiba</b> → <b>+ iPCSK9</b> (o inclisirán; ácido bempedoico si no tolera estatinas).` },
        { h: 'Atiende los triglicéridos', t: `<b>TG ≥500</b>: fibrato y dieta muy baja en grasa para prevenir pancreatitis (≥1000 = riesgo alto). TG 150–499 con LDL ya en meta y riesgo alto: icosapento de etilo.` },
        { h: 'Revisa a las 4–12 semanas', t: `Perfil de lípidos para ver la meta y el apego. ALT basal; CK solo si hay dolor muscular.` }
      ],
      examen: 'Síndrome metabólico = 3 de 5 criterios. En muy alto riesgo la meta de LDL es menos de 55 mg/dL; si no llega con estatina de alta intensidad, el siguiente paso es ezetimiba.'
    },

    // ───────────── Cardiología
    {
      id: 'scc', subj: 'cardio', tema: 'Síndromes coronarios crónicos', topics: ['scc'],
      pasos: [
        { h: 'Caracteriza el dolor', t: `Angina <b>típica</b> = 3 rasgos: retroesternal, desencadenada por esfuerzo o estrés, cede con reposo o nitrato. Atípica = 2; no anginosa = 1 o ninguno.` },
        { h: 'Estudios básicos a todos', t: `<b>ECG en reposo</b>, laboratorio (BH, glucosa/HbA1c, lípidos, creatinina) y <b>ecocardiograma</b> (FEVI, valvas, motilidad). Si la FEVI es &lt;35 % el camino cambia.` },
        { h: 'Estima la probabilidad clínica', t: `Por edad, sexo, síntomas y factores de riesgo (ESC 2024).`,
          si: [['Muy baja (≤5 %)', 'no más pruebas; busca otra causa'], ['Baja a moderada', 'angio-TC coronaria'], ['Moderada a alta', 'prueba de isquemia: eco estrés, SPECT o RM estrés'], ['Muy alta, FEVI baja o angina refractaria', 'coronariografía invasiva']] },
        { h: 'Tratamiento médico óptimo', t: `<b>Antianginoso</b>: betabloqueador o calcioantagonista de 1ª línea; nitrato sublingual para la crisis; 2ª línea nitrato de acción larga, ranolazina, ivabradina, trimetazidina. <b>Prevención de eventos</b>: aspirina 75–100 mg (clopidogrel si no la tolera), estatina de alta intensidad (LDL &lt;55), IECA si HTA, DM, ERC o FEVI baja.` },
        { h: 'Decide si revascularizar', t: `Si persisten síntomas con tratamiento óptimo o la anatomía es de alto riesgo: <b>tronco común &gt;50 %</b>, 3 vasos o DA proximal con FEVI ≤35 %. <b>Cirugía (CABG)</b> en multivaso con DM o anatomía compleja; ICP en lo demás.` }
      ],
      examen: 'La revascularización en el crónico estable no se hace a todos: es para síntomas que no ceden o anatomía de alto riesgo (tronco, 3 vasos con FEVI baja).'
    },
    {
      id: 'sca', subj: 'cardio', tema: 'Síndromes coronarios agudos', topics: ['sca'],
      pasos: [
        { h: 'ECG en 10 minutos', t: `ECG de 12 derivaciones en ≤10 min del primer contacto, monitor, acceso IV.` },
        { h: '¿Elevación del ST?', t: `ST elevado en 2 derivaciones contiguas o equivalentes (BRIHH nuevo con clínica, IAM posterior, De Winter) = <b>IAMCEST</b>.`,
          si: [['ICP posible en ≤120 min', 'ICP primaria'], ['No hay ICP a tiempo y &lt;12 h', 'fibrinólisis en ≤10 min (tenecteplasa) y angiografía en 2–24 h']] },
        { h: 'Sin elevación: troponina de alta sensibilidad', t: `Algoritmo 0 h/1 h (o 0/2 h). Troponina que sube = <b>IAMSEST</b>; negativa con dolor típico = angina inestable o busca otra causa.` },
        { h: 'Estratifica el IAMSEST', t: `Define cuándo entra a cateterismo.`,
          si: [['Muy alto riesgo: choque, inestable, arritmia, dolor refractario, IC aguda', 'coronariografía &lt;2 h'], ['Alto riesgo: IAMSEST confirmado, cambios dinámicos del ST, GRACE &gt;140', '&lt;24 h'], ['Resto', 'estrategia invasiva selectiva']] },
        { h: 'Tratamiento inicial', t: `<b>Aspirina 150–300 mg</b> + segundo antiagregante (ticagrelor o prasugrel; clopidogrel con fibrinólisis), anticoagulante (HNF en ICP, enoxaparina, fondaparinux), nitrato si hay dolor (no con PAS &lt;90, infarto de VD o inhibidores de PDE5), <b>O₂ solo si SatO₂ &lt;90 %</b>, estatina de alta intensidad, betabloqueador oral si no hay IC ni choque.` },
        { h: 'Prevención secundaria al egreso', t: `<b>Doble antiagregación 12 meses</b>, estatina de alta intensidad, betabloqueador si FEVI ≤40 %, IECA/ARA, rehabilitación cardiaca, dejar de fumar.` }
      ],
      cubre: [['Que no se te pase', `Antes de antiagregar y anticoagular piensa en <b>disección aórtica</b> (dolor desgarrante, asimetría de pulsos, mediastino ancho), pericarditis y TEP.`]],
      examen: 'IAMCEST: el reloj manda (ICP en ≤120 min o fibrinólisis en ≤10). En IAMSEST lo que define la urgencia del cateterismo es el riesgo, no la troponina sola.'
    },
    {
      id: 'aortica', subj: 'cardio', tema: 'Valvulopatía aórtica', topics: ['aortica'],
      pasos: [
        { h: 'Sospecha por el soplo y los síntomas', t: `<b>Estenosis (EA)</b>: soplo sistólico eyectivo en foco aórtico irradiado a carótidas, pulso parvus et tardus; síntomas: angina, síncope de esfuerzo, disnea. <b>Insuficiencia (IA)</b>: soplo diastólico decreciente en borde esternal izquierdo, presión diferencial amplia, pulso saltón.` },
        { h: 'Ecocardiograma transtorácico', t: `Confirma y gradúa. <b>EA grave</b>: área &lt;1 cm², velocidad máxima ≥4 m/s, gradiente medio ≥40 mmHg. <b>IA grave</b>: vena contracta &gt;6 mm, fracción regurgitante ≥50 %, flujo reverso holodiastólico en aorta descendente.` },
        { h: 'Busca la causa', t: `EA: degenerativa/calcificada (&gt;65 años), <b>bivalva</b> (jóvenes), reumática (con mitral). IA: dilatación de la raíz, bivalva, endocarditis, reumática. <b>IA aguda</b> (endocarditis, disección) = urgencia quirúrgica.` },
        { h: 'En la EA grave asintomática, desenmascara', t: `Prueba de esfuerzo para ver síntomas o caída de la PA; FEVI &lt;50 % ya es indicación de intervenir.` },
        { h: 'Interviene la EA', t: `Grave sintomática, FEVI &lt;50 % o va a otra cirugía cardiaca.`,
          si: [['≥70 años o riesgo quirúrgico alto, acceso femoral', 'TAVI'], ['&lt;70 años y riesgo bajo', 'reemplazo quirúrgico (SAVR)'], ['Puente o paliativo', 'valvuloplastia con balón']] },
        { h: 'Interviene la IA', t: `<b>Cirugía</b> si hay síntomas, o asintomática con <b>FEVI ≤50 %</b> o diámetro telesistólico &gt;50 mm (&gt;25 mm/m²). Vasodilatadores solo para HTA o sin opción quirúrgica.` },
        { h: 'Cuida y vigila', t: `En EA grave evita la hipovolemia y los vasodilatadores potentes. Eco cada 6 meses en grave asintomática; cada 1–2 años en moderada.` }
      ],
      cubre: [['Estenosis aórtica', `Tríada angina-síncope-disnea; grave = área &lt;1 cm², ≥4 m/s, gradiente ≥40. Tratamiento = reemplazo valvular (TAVI o SAVR); no hay fármaco que la frene.`], ['Insuficiencia aórtica', `Sobrecarga de volumen; signos periféricos (Musset, Quincke, Corrigan). Operar antes de que el VI se dilate y caiga la FEVI.`]],
      examen: 'EA grave sintomática = cambiar la válvula; la edad (≥70) y el riesgo quirúrgico deciden TAVI o cirugía.'
    },
    {
      id: 'mitral', subj: 'cardio', tema: 'Valvulopatía mitral', topics: ['mitral'],
      pasos: [
        { h: 'Sospecha por el soplo', t: `<b>Estenosis (EM)</b>: retumbo diastólico apical con chasquido de apertura y R1 intenso; disnea, FA, hemoptisis, embolias. <b>Insuficiencia (IM)</b>: soplo holosistólico apical irradiado a la axila.` },
        { h: 'Ecocardiograma transtorácico', t: `<b>EM grave</b>: área &lt;1.5 cm². <b>IM grave</b>: vena contracta ≥7 mm, orificio regurgitante ≥40 mm², volumen regurgitante ≥60 mL.` },
        { h: 'Define la causa', t: `EM: casi siempre <b>reumática</b>. IM <b>primaria</b> (la válvula está enferma: prolapso, cuerda rota, endocarditis) vs <b>secundaria</b> (válvula sana, VI dilatado: isquémica, dilatada, FA). <b>IM aguda</b> por rotura de músculo papilar tras IAM: edema pulmonar y choque → cirugía urgente.` },
        { h: 'Eco transesofágico si vas a intervenir', t: `Busca trombo en la orejuela y define la anatomía (puntaje de Wilkins para valvuloplastia; reparabilidad en IM).` },
        { h: 'Trata la estenosis', t: `Control de frecuencia (betabloqueador), diurético; <b>anticoagula con warfarina</b> si hay FA o trombo (no DOAC en EM moderada-grave).`,
          si: [['Grave sintomática, anatomía favorable, sin trombo ni IM importante', 'valvuloplastia percutánea con balón'], ['Anatomía desfavorable', 'cirugía (reemplazo)']] },
        { h: 'Trata la insuficiencia', t: `Depende de si es primaria o secundaria.`,
          si: [['Primaria grave con síntomas, FEVI ≤60 % o DTSVI ≥40 mm', 'cirugía: reparar mejor que reemplazar; TEER si el riesgo es alto'], ['Secundaria', 'primero tratamiento óptimo de IC (± resincronización); TEER si sigue sintomático']] },
        { h: 'Prevención', t: `Profilaxis secundaria de fiebre reumática con penicilina benzatínica. Profilaxis de endocarditis solo con prótesis o anillo/material protésico.` }
      ],
      cubre: [['Estenosis mitral', `Reumática; la FA y las embolias son lo típico. Warfarina si hay FA; balón si la anatomía lo permite.`], ['Insuficiencia mitral primaria vs secundaria', `Primaria = arreglar la válvula (cirugía). Secundaria = tratar al ventrículo (IC) y después considerar TEER.`]],
      examen: 'EM con FA: anticoagulante = warfarina, no DOAC. En la IM la pregunta clave es si es primaria (se opera) o secundaria (se trata la IC).'
    },
    {
      id: 'tep', subj: 'cardio', tema: 'Tromboembolia pulmonar', topics: ['tep'],
      pasos: [
        { h: 'Sospecha', t: `Disnea súbita, dolor pleurítico, taquicardia, síncope, hemoptisis + factores: cirugía o inmovilidad, cáncer, embarazo o estrógenos, TVP previa.` },
        { h: '¿Hay choque o hipotensión?', t: `PAS &lt;90 mmHg = <b>TEP de alto riesgo</b>: eco a pie de cama (VD dilatado) o angio-TC si se puede mover → <b>trombólisis sistémica</b> (alteplasa 100 mg en 2 h) + HNF; si está contraindicada, embolectomía quirúrgica o por catéter.` },
        { h: 'Estable: probabilidad clínica', t: `Wells o Ginebra.`,
          si: [['Baja y PERC negativo', 'no se estudia más'], ['Baja o intermedia (Wells ≤4)', 'dímero D (corte por edad: edad × 10 después de los 50); negativo descarta'], ['Alta (Wells &gt;4)', 'directo a imagen']] },
        { h: 'Confirma con imagen', t: `<b>Angio-TC pulmonar</b>. Si no se puede (ERC, alergia, embarazo): <b>gammagrama V/Q</b>. Un USG compresivo de piernas con TVP también confirma.` },
        { h: 'Estratifica el riesgo', t: `sPESI + VD (eco o TC) + troponina. Bajo (sPESI 0) puede irse a casa; <b>intermedio-alto</b> (VD dilatado + troponina) → hospital con monitoreo y trombólisis de rescate si se descompensa.` },
        { h: 'Anticoagula', t: `Empieza ya si la probabilidad es alta, aun antes de la imagen. <b>DOAC</b> (apixabán, rivaroxabán) de elección; HBPM en embarazo; AVK en síndrome antifosfolípido; HNF si quizá se trombolice o en ERC grave.` },
        { h: 'Define la duración', t: `Provocada por factor transitorio: <b>3 meses</b>. No provocada o factor persistente: extendida. Cáncer: mientras esté activo.` }
      ],
      examen: 'Inestable = trombólisis. Dímero D solo sirve para descartar en probabilidad baja/intermedia; en alta se va directo a angio-TC.'
    },
    {
      id: 'hp', subj: 'cardio', tema: 'Hipertensión pulmonar', topics: ['hp'],
      pasos: [
        { h: 'Sospecha', t: `Disnea progresiva, fatiga, síncope de esfuerzo; P2 intenso, datos de falla derecha (ingurgitación yugular, edema, hepatomegalia).` },
        { h: 'Ecocardiograma', t: `Probabilidad de HP por la velocidad de la regurgitación tricuspídea (<b>&gt;2.8 m/s</b>) + signos de sobrecarga del VD.` },
        { h: 'Busca primero las causas comunes', t: `<b>Grupo 2</b> (corazón izquierdo: IC, valvulopatía) y <b>grupo 3</b> (pulmón/hipoxia: EPOC, EPID, apnea del sueño): eco, pruebas de función pulmonar con DLCO, TC de tórax, gasometría, polisomnografía.` },
        { h: 'Gammagrama V/Q a todos', t: `Para no pasar por alto el <b>grupo 4</b> (HP tromboembólica crónica): si sale anormal → angiografía pulmonar. Se cura con <b>endarterectomía</b>; si no es operable, angioplastia con balón o riociguat. Anticoagulación de por vida.` },
        { h: 'Cateterismo derecho confirma', t: `<b>PAPm &gt;20 mmHg</b>. Precapilar (PCP ≤15 y RVP &gt;2 UW: grupos 1, 3, 4) vs poscapilar (PCP &gt;15: grupo 2). Prueba de vasorreactividad en la HAP idiopática.` },
        { h: 'Trata por grupo', t: `<b>Grupo 1 (HAP)</b> en centro especializado.`,
          si: [['Vasorreactivo', 'calcioantagonista a dosis altas'], ['No vasorreactivo, riesgo bajo-intermedio', 'ERA (macitentán/ambrisentán) + iPDE5 (tadalafilo/sildenafilo)'], ['Riesgo alto', '+ prostanoide IV; sotatercept como añadido'], ['Grupos 2 y 3', 'tratar la causa; no vasodilatadores pulmonares en el grupo 2']] },
        { h: 'Medidas generales', t: `Diuréticos, O₂ si hay hipoxemia, evitar el embarazo, vacunas, rehabilitación supervisada.` }
      ],
      cubre: [['Los 5 grupos', `1 HAP (idiopática, hereditaria, tejido conectivo, VIH, portopulmonar, fármacos) · 2 corazón izquierdo (la más común) · 3 pulmón/hipoxia · 4 tromboembólica crónica · 5 mecanismos mixtos (sarcoidosis, hemólisis crónica, ERC).`]],
      examen: 'El diagnóstico es por cateterismo derecho (PAPm &gt;20). El V/Q es la prueba para buscar el grupo 4, porque es el único curable con cirugía.'
    },

    // ───────────── Gastroenterología
    {
      id: 'deglucion', subj: 'gastro', tema: 'Trastornos de la deglución: disfagia orofaríngea, esofágica, disfagia obstructiva y motora', topics: ['deglucion'],
      pasos: [
        { h: '¿Es disfagia?', t: `Sepárala de la <b>odinofagia</b> (dolor: infección, pastilla), el <b>globo</b> (sensación constante, no empeora al comer) y la xerostomía.` },
        { h: '¿Orofaríngea o esofágica?', t: `Orofaríngea: cuesta <b>iniciar</b> el trago, tos o atragantamiento, regurgitación nasal, voz húmeda. Esofágica: el bolo <b>se atora</b> segundos después, detrás del esternón.` },
        { h: 'Estudia la orofaríngea', t: `<b>Videofluoroscopia</b> (trago modificado de bario) o evaluación endoscópica de la deglución + buscar la causa neurológica.` },
        { h: 'En la esofágica, ¿qué se atora?', t: `La pregunta que separa todo.`,
          si: [['Solo sólidos (progresiva)', 'obstructiva / mecánica'], ['Sólidos y líquidos desde el inicio', 'motora']] },
        { h: 'Obstructiva: endoscopia primero', t: `Con biopsias. Progresiva + pérdida de peso + &gt;50 años, tabaco o alcohol = <b>cáncer</b>; intermitente = anillo de Schatzki; ERGE crónica = estenosis péptica; joven atópico con impactación = <b>esofagitis eosinofílica</b> (≥15 eosinófilos/campo).` },
        { h: 'Motora: manometría de alta resolución', t: `Si la endoscopia es normal (Chicago 4.0). <b>Acalasia</b>: IRP alto + aperistalsis, esofagograma en “pico de pájaro”. Espasmo distal (“sacacorchos”), esófago hipercontráctil, esclerodermia (EEI hipotenso + ERGE grave).` },
        { h: 'Trata la causa', t: `Acalasia: <b>dilatación neumática, miotomía de Heller con funduplicatura o POEM</b> (toxina botulínica si no es candidato). Eosinofílica: IBP, budesonida deglutida, dieta, dupilumab. Estenosis: dilatación + IBP. Orofaríngea: rehabilitación, modificar consistencias, gastrostomía si aspira.` }
      ],
      cubre: [
        ['Disfagia orofaríngea', `Problema para pasar el bolo de la boca al esófago. Causa neuromuscular (EVC, Parkinson, ELA, miastenia, miopatías) o divertículo de Zenker (halitosis, regurgitación de comida no digerida). Riesgo: neumonía por aspiración. Estudio: videofluoroscopia.`],
        ['Disfagia esofágica', `El bolo se atora en el pecho. Endoscopia primero para todos; se divide por lo que se atora.`],
        ['Disfagia obstructiva', `Solo sólidos, progresiva. Cáncer (alarma), estenosis péptica, anillo de Schatzki, esofagitis eosinofílica, compresión extrínseca.`],
        ['Disfagia motora', `Sólidos y líquidos desde el inicio. Acalasia (el clásico), espasmo esofágico distal, esclerodermia. Diagnóstico: manometría. Piensa en pseudoacalasia (cáncer de la unión) en un mayor con pérdida de peso rápida.`]
      ],
      examen: 'Sólidos y líquidos desde el inicio = motora (acalasia → manometría). Solo sólidos y progresiva con pérdida de peso = cáncer hasta demostrar lo contrario (endoscopia).'
    },
    {
      id: 'erge', subj: 'gastro', tema: 'ERGE', topics: ['erge'],
      pasos: [
        { h: 'Reconoce los síntomas típicos', t: `<b>Pirosis y regurgitación</b>. Atípicos: tos crónica, laringitis, asma, dolor torácico no cardiaco (descarta primero el corazón).` },
        { h: 'Busca datos de alarma', t: `Disfagia, odinofagia, pérdida de peso, sangrado o anemia, vómito persistente, masa, inicio &gt;60 años → <b>endoscopia primero</b>.` },
        { h: 'Sin alarma: prueba con IBP', t: `IBP una vez al día, <b>30–60 min antes del desayuno, por 8 semanas</b>, + medidas (bajar de peso, elevar la cabecera, no cenar 2–3 h antes de dormir).` },
        { h: 'Si no responde', t: `Revisa apego y horario; sube a 2 veces al día. Si sigue: endoscopia y <b>pH-metría con impedancia</b> (sin IBP) para confirmar; considera hipersensibilidad al reflujo o pirosis funcional.` },
        { h: 'Lee la endoscopia', t: `Esofagitis Los Ángeles A–D (C o D confirma ERGE). <b>Barrett</b> = metaplasia intestinal → vigilancia (sin displasia cada 3–5 años; con displasia, ablación por radiofrecuencia).` },
        { h: 'Mantenimiento o cirugía', t: `IBP a la dosis mínima eficaz (vonoprazán en esofagitis erosiva). <b>Funduplicatura laparoscópica</b> en regurgitación refractaria o hernia grande, con manometría previa para descartar acalasia.` }
      ],
      examen: 'Típico sin alarma = IBP empírico 8 semanas, sin endoscopia. Con alarma o &gt;60 años = endoscopia primero. La pH-metría es el estándar para confirmar ERGE sin esofagitis.'
    },
    {
      id: 'acidopeptica', subj: 'gastro', tema: 'Enfermedad ácido-péptica: gastritis aguda y crónica, úlcera péptica, hemorragia de tubo digestivo alto no variceal', topics: ['stda'],
      pasos: [
        { h: 'Dispepsia: ¿alarma o ≥60 años?', t: `Ardor o dolor epigástrico, saciedad temprana, plenitud. Con alarma (sangrado, anemia, pérdida de peso, disfagia, vómito, masa) o ≥60 años → <b>endoscopia</b>.` },
        { h: 'Sin alarma: busca y trata H. pylori', t: `<b>Prueba de aliento con urea o antígeno en heces</b> (sin IBP 2 semanas, sin antibióticos 4). Negativo → IBP empírico.` },
        { h: 'Interpreta la endoscopia', t: `Gastritis: biopsias (H. pylori, atrofia, metaplasia). <b>Úlcera gástrica: biopsia de bordes siempre</b> y endoscopia de control a 8–12 semanas. Úlcera duodenal: no se biopsia la úlcera, sí el antro para H. pylori.` },
        { h: 'Quita la causa', t: `<b>H. pylori y AINE</b> explican casi todo: suspende el AINE (si es indispensable, celecoxib + IBP). Úlceras múltiples, distales o refractarias con diarrea → gastrina en ayuno (Zollinger-Ellison).` },
        { h: 'Erradica y confirma', t: `<b>Cuádruple con bismuto 14 días</b> (IBP + bismuto + tetraciclina + metronidazol) de 1ª línea por la resistencia a claritromicina. Confirma la erradicación ≥4 semanas después.` },
        { h: 'Si sangra: reanima y estratifica', t: `Dos vías gruesas, cristaloides; <b>transfunde con Hb &lt;7</b> (&lt;8 si cardiópata). <b>Glasgow-Blatchford</b> 0–1 → manejo ambulatorio. IBP IV (bolo 80 mg).` },
        { h: 'Endoscopia en ≤24 h', t: `Después de reanimar. Clasifica con Forrest.`,
          si: [['Ia, Ib (sangra) o IIa (vaso visible)', 'terapia endoscópica doble + IBP en dosis alta 72 h'], ['IIb (coágulo)', 'retirar el coágulo y tratar lo que haya debajo'], ['IIc o III (base limpia)', 'IBP oral y alta temprana'], ['Resangra', '2ª endoscopia → embolización → cirugía']] }
      ],
      cubre: [
        ['Gastritis aguda', `Erosiva por AINE, alcohol o estrés (paciente crítico: profilaxis con IBP si ventilación &gt;48 h o coagulopatía). Dispepsia o sangrado; se trata quitando el agresor + IBP.`],
        ['Gastritis crónica', `<b>H. pylori</b> (antro; úlcera duodenal, adenocarcinoma, MALT) vs <b>autoinmune</b> (cuerpo; anti-células parietales y anti-factor intrínseco, déficit de B12, gastrina alta, carcinoides).`],
        ['Úlcera péptica', `Gástrica: duele al comer, siempre se biopsia. Duodenal: mejora al comer, despierta en la noche. Complicaciones: sangrado (la más común), perforación (aire libre subdiafragmático → cirugía), obstrucción pilórica.`],
        ['Hemorragia de tubo digestivo alto no variceal', `Úlcera péptica (la #1), Mallory-Weiss, esofagitis, Dieulafoy, angiodisplasia, cáncer. Reanimar → Glasgow-Blatchford → IBP → endoscopia ≤24 h → Forrest.`]
      ],
      examen: 'Úlcera gástrica = se biopsia siempre. En la HTDA, la transfusión es restrictiva (Hb &lt;7) y la endoscopia va en ≤24 h después de reanimar.'
    },
    {
      id: 'pancrea', subj: 'gastro', tema: 'Urgencias gastro: pancreatitis aguda, complicaciones de pancreatitis aguda', topics: ['pancrea'],
      pasos: [
        { h: 'Diagnostica con 2 de 3', t: `Dolor epigástrico típico (en cinturón), <b>lipasa o amilasa ≥3 veces</b> el límite superior, imagen compatible. La TC solo si hay duda o no mejora a 48–72 h (no de rutina al ingreso).` },
        { h: 'Busca la causa', t: `<b>USG abdominal a todos</b>: litiasis biliar (#1; ALT &gt;150 la sugiere), alcohol (#2), triglicéridos &gt;1000, calcio, fármacos, post-CPRE, trauma, autoinmune.` },
        { h: 'Clasifica la gravedad (Atlanta revisada)', t: `Predictores al ingreso: SIRS persistente, BUN y hematocrito altos, BISAP ≥3, edad, obesidad.`,
          si: [['Sin falla orgánica ni complicaciones', 'leve'], ['Falla transitoria &lt;48 h o complicación local', 'moderadamente grave'], ['Falla orgánica &gt;48 h', 'grave']] },
        { h: 'Tratamiento inicial', t: `<b>Ringer lactato moderado</b> (bolo de 10 mL/kg si hay hipovolemia, luego 1.5 mL/kg/h; no agresivo), analgesia (opioides sí), <b>dieta oral temprana</b> según tolerancia; si no, enteral por sonda antes que parenteral. <b>Sin antibióticos profilácticos</b>.` },
        { h: 'Resuelve la vía biliar', t: `<b>Colecistectomía en el mismo internamiento</b> si fue leve. CPRE en &lt;24 h solo si hay colangitis; obstrucción persistente → CPRE.` },
        { h: 'Si no mejora: busca complicaciones', t: `TC con contraste después de 72 h. Las colecciones solo se drenan si dan síntomas o se infectan.` },
        { h: 'Necrosis infectada', t: `Gas en la TC o deterioro después de 7–10 días: <b>carbapenémico</b> (o quinolona + metronidazol) y abordaje escalonado (drenaje percutáneo o endoscópico); retrasar la intervención ≥4 semanas si se puede, hasta que se encapsule.` }
      ],
      cubre: [
        ['Pancreatitis aguda', `Diagnóstico con 2 de 3, causa con USG, gravedad por falla orgánica (Atlanta), líquidos moderados y comida temprana.`],
        ['Complicaciones locales', `<b>&lt;4 semanas</b>: colección líquida peripancreática aguda / colección necrótica aguda. <b>&gt;4 semanas</b>: pseudoquiste (pared, sin necrosis) / necrosis encapsulada (WON). También trombosis de la vena esplénica, pseudoaneurisma, síndrome compartimental abdominal.`],
        ['Complicaciones sistémicas', `Falla orgánica (choque, SDRA, IRA), hipocalcemia, hiperglucemia, CID, exacerbación de enfermedad previa.`]
      ],
      examen: 'La gravedad la define la falla orgánica que dura más de 48 h. Antibióticos solo para necrosis infectada, nunca de profilaxis.'
    },
    {
      id: 'intestino', subj: 'gastro', tema: 'Trastornos del intestino: diarrea aguda y crónica, síndrome de malabsorción, enfermedad celiaca', topics: ['diarrea'],
      pasos: [
        { h: 'Mide la duración', t: `<b>Aguda &lt;14 días</b> (persistente 14–30), <b>crónica &gt;4 semanas</b>.` },
        { h: 'Aguda: hidrata y busca alarma', t: `Casi siempre infecciosa y autolimitada → <b>suero oral</b>. Estudios (coprocultivo o panel PCR) solo con alarma: fiebre &gt;38.5, sangre, deshidratación grave, inmunosupresión, &gt;70 años, &gt;7 días, brote, antibiótico reciente (C. difficile).` },
        { h: 'Antibiótico solo si lo amerita', t: `Disentería febril o diarrea del viajero moderada-grave: <b>azitromicina</b> (ciprofloxacino alternativa). No loperamida con sangre o fiebre. <i>C. difficile</i>: vancomicina o fidaxomicina VO. Amebiasis: metronidazol + luminal.` },
        { h: 'Crónica: clasifica por las heces', t: `Acuosa, inflamatoria o grasa.`,
          si: [['Acuosa: brecha osmolar 290 − 2(Na+K) &gt;125', 'osmótica (lactosa, laxantes)'], ['Brecha &lt;50 o diarrea en ayuno', 'secretora (hormonal, colitis microscópica)'], ['Sangre, calprotectina alta', 'inflamatoria → colonoscopia (EII)'], ['Esteatorrea', 'malabsorción']] },
        { h: 'Estudios iniciales en la crónica', t: `BH, PCR, química, TSH, <b>anti-transglutaminasa IgA + IgA total</b>, calprotectina fecal, Giardia. Colonoscopia con biopsias si &gt;45 años, alarma o acuosa sin causa.` },
        { h: 'Si es malabsorción, localiza', t: `Esteatorrea, pérdida de peso y déficits (hierro, B12, folato, vitaminas A, D, E, K).`,
          si: [['Mucosa', 'celiaca, Whipple, esprue tropical'], ['Páncreas: elastasa fecal baja, D-xilosa normal', 'pancreatitis crónica, fibrosis quística → enzimas'], ['Luz intestinal', 'sobrecrecimiento bacteriano, sales biliares']] },
        { h: 'Confirma y trata la celiaca', t: `Anti-tTG IgA positiva → <b>biopsia duodenal comiendo gluten</b> (≥4 de 2ª porción + bulbo): atrofia de vellosidades, linfocitos intraepiteliales (Marsh). <b>Dieta sin gluten de por vida</b>; seguimiento con tTG.` }
      ],
      cubre: [
        ['Diarrea aguda', `Hidratación oral es el tratamiento. Estudiar y dar antibiótico solo con datos de alarma (azitromicina en disentería).`],
        ['Diarrea crónica', `&gt;4 semanas. Clasificar en acuosa (osmótica vs secretora por brecha osmolar), inflamatoria (calprotectina, colonoscopia) o grasa.`],
        ['Síndrome de malabsorción', `Esteatorrea + pérdida de peso + déficits. Localizar: mucosa, páncreas (elastasa fecal) o luz.`],
        ['Enfermedad celiaca', `Anti-tTG IgA (con IgA total; si hay déficit de IgA: IgG anti-DGP/tTG) → biopsia con gluten. Se asocia a dermatitis herpetiforme, DM1, tiroiditis, déficit de IgA, linfoma T. Anemia ferropénica que no responde al hierro oral → piensa en celiaca.`]
      ],
      examen: 'Para la celiaca, el paciente debe estar comiendo gluten cuando se hacen la serología y la biopsia. Diarrea aguda: el tratamiento es hidratar, no el antibiótico.'
    },
    {
      id: 'sii', subj: 'gastro', tema: 'Trastornos del intestino grueso: síndrome de intestino irritable', topics: ['sii'],
      pasos: [
        { h: 'Aplica Roma IV', t: `Dolor abdominal recurrente <b>≥1 día por semana en los últimos 3 meses</b> (inicio ≥6 meses) con ≥2: relación con la defecación, cambio en la frecuencia, cambio en la forma (Bristol).` },
        { h: 'Busca datos de alarma', t: `Inicio &gt;45–50 años, sangrado rectal, anemia, pérdida de peso, síntomas nocturnos, fiebre, antecedente familiar de cáncer colorrectal, EII o celiaca → <b>colonoscopia</b>; no es SII hasta descartar.` },
        { h: 'Estudios mínimos sin alarma', t: `BH, PCR, <b>serología para celiaca</b> (SII-D o mixto), <b>calprotectina fecal</b> (SII-D, para descartar EII). Sin colonoscopia rutinaria en &lt;45 años sin alarma.` },
        { h: 'Define el subtipo', t: `Por Bristol en los días anormales: <b>SII-E</b> (&gt;25 % tipos 1–2), <b>SII-D</b> (&gt;25 % tipos 6–7), mixto, no clasificado.` },
        { h: 'Medidas para todos', t: `Explicar el eje intestino-cerebro, <b>dieta baja en FODMAP</b>, ejercicio, fibra soluble (psyllium; no salvado).` },
        { h: 'Fármaco por síntoma', t: `Lo que manda es el síntoma dominante.`,
          si: [['Dolor', 'antiespasmódico (pinaverio, otilonio, hioscina), aceite de menta; amitriptilina a dosis baja'], ['Estreñimiento', 'psyllium, PEG, linaclotida o lubiprostona; ISRS si hay dolor'], ['Diarrea', 'loperamida, rifaximina, eluxadolina'], ['Refractario', 'terapia cognitivo-conductual o hipnoterapia']] }
      ],
      examen: 'SII = Roma IV sin datos de alarma. Cualquier alarma (sangrado, anemia, pérdida de peso, síntomas nocturnos, &gt;45 años) obliga a colonoscopia.'
    },

    // ───────────── Hematología
    {
      id: 'anemia-micro', subj: 'hemato', tema: 'Anemia: abordaje, microcítica (anemia por deficiencia de hierro) y normocítica (anemia por inflamación)', topics: ['anemias'],
      pasos: [
        { h: 'Confirma la anemia', t: `Hb <b>&lt;13 g/dL hombre, &lt;12 mujer</b> (&lt;11 en embarazo). ¿Hay otras citopenias? Pancitopenia → médula (frotis, aspirado).` },
        { h: 'Reticulocitos corregidos', t: `Índice reticulocitario: ¿la médula responde?`,
          si: [['IR &gt;2', 'pérdida o hemólisis (ver hemolíticas)'], ['IR &lt;2', 'hipoproliferativa → clasifica por VCM']] },
        { h: 'VCM &lt;80: pide ferritina', t: `Es la primera y la mejor prueba.`,
          si: [['Ferritina &lt;30 (o &lt;100 con inflamación)', 'deficiencia de hierro'], ['Ferritina normal o alta, saturación &lt;20, TIBC baja', 'anemia de inflamación'], ['Hierro normal, Mentzer &lt;13, eritrocitos altos, ADE normal', 'talasemia → electroforesis (HbA2 &gt;3.5 en beta)'], ['Sideroblastos en anillo', 'sideroblástica (plomo, alcohol, B6)']] },
        { h: 'Deficiencia de hierro: busca la fuente', t: `Siempre. Mujer en edad fértil: menstruación, embarazo. <b>Hombre o posmenopáusica: endoscopia y colonoscopia</b> (cáncer colorrectal, úlcera). También celiaca, H. pylori, cirugía bariátrica.` },
        { h: 'Repón el hierro', t: `<b>Oral 1 vez al día o en días alternos</b> (60–120 mg de hierro elemental), 3 meses más después de normalizar la Hb. Respuesta: reticulocitos a 7–10 días, Hb +1–2 g/dL en 3–4 semanas. <b>IV</b> si no tolera, malabsorbe, ERC, EII activa, sangrado que supera o embarazo avanzado.` },
        { h: 'VCM 80–100: busca la causa', t: `ERC (EPO baja), <b>inflamación crónica</b>, hipotiroidismo, sangrado agudo, mixta (ADE alta), falla medular. Anemia de inflamación: ferritina normal o alta, saturación baja, TIBC baja, hepcidina alta (IL-6).` },
        { h: 'Trata la inflamación y decide transfundir', t: `Anemia de inflamación: <b>tratar la enfermedad de base</b>; en ERC, AEE con hierro (ferritina &gt;100, saturación &gt;20 %). Si dudas entre ferropenia e inflamación: receptor soluble de transferrina (alto en ferropenia). Transfunde con Hb &lt;7 (&lt;8 cardiópata) o inestabilidad.` }
      ],
      cubre: [
        ['Abordaje', `Hb → reticulocitos (¿responde la médula?) → VCM (micro, normo, macro) → la prueba que confirma la causa.`],
        ['Microcítica: anemia por deficiencia de hierro', `Ferritina baja es diagnóstica. Saturación baja, TIBC alta, ADE alta, plaquetas a veces altas. Coiloniquia, pica (pagofagia). Lo más importante: encontrar de dónde se pierde.`],
        ['Normocítica: anemia por inflamación', `Hepcidina alta atrapa el hierro: ferritina normal o alta, saturación baja, <b>TIBC baja</b>. Puede ser micro leve. Se corrige al controlar la enfermedad.`]
      ],
      examen: 'Ferritina baja = deficiencia de hierro (no necesitas más). Hombre o mujer posmenopáusica con ferropenia = endoscopia y colonoscopia. La TIBC separa: alta en ferropenia, baja en inflamación.'
    },
    {
      id: 'anemia-macro', subj: 'hemato', tema: 'Anemia macrocítica megaloblástica (deficiencia de cobalamina y ácido fólico)', topics: ['anemias'],
      pasos: [
        { h: 'VCM &gt;100: mira el frotis', t: `Megaloblástica o no.`,
          si: [['Macroovalocitos + neutrófilos hipersegmentados (≥6 lóbulos)', 'megaloblástica: B12 o folato'], ['Sin esos hallazgos', 'no megaloblástica: alcohol, hepatopatía, hipotiroidismo, reticulocitosis, SMD, fármacos (hidroxiurea, AZT, metotrexato)']] },
        { h: 'Reconoce la eritropoyesis ineficaz', t: `<b>LDH muy alta</b>, bilirrubina indirecta alta, <b>reticulocitos bajos</b>; puede haber pancitopenia.` },
        { h: 'Mide B12 y folato', t: `Si la B12 sale limítrofe (200–300 pg/mL), pide metabolitos.`,
          si: [['Ácido metilmalónico y homocisteína altos', 'déficit de B12'], ['Solo homocisteína alta', 'déficit de folato']] },
        { h: 'Explora la neurología', t: `Solo la <b>B12</b> da daño neurológico: degeneración combinada subaguda (cordones posteriores: vibración, propiocepción, Romberg; vía piramidal: espasticidad, Babinski), neuropatía, demencia, psicosis.` },
        { h: 'Encuentra la causa', t: `B12: <b>anemia perniciosa</b> (anti-factor intrínseco, el específico; anti-células parietales, el sensible), metformina, IBP crónicos, gastrectomía o bariátrica, enfermedad o resección ileal (Crohn), veganos, óxido nitroso. Folato: dieta pobre o alcohol, embarazo, hemólisis crónica, metotrexato, trimetoprim, fenitoína, celiaca.` },
        { h: 'Repón', t: `<b>B12 IM 1000 µg</b> diario 1 semana, semanal 1 mes y mensual de por vida en perniciosa (la oral de 1000–2000 µg diarios también funciona). <b>Folato 1–5 mg/día</b> por 4 meses. Nunca folato solo sin reponer B12: corrige la anemia y empeora lo neurológico.` },
        { h: 'Vigila la respuesta', t: `Reticulocitosis a los 3–5 días; <b>hipokalemia</b> los primeros días. En perniciosa: endoscopia (cáncer gástrico y carcinoides).` }
      ],
      cubre: [
        ['Deficiencia de cobalamina (B12)', `Megaloblástica + neurología, ácido metilmalónico alto. Causa más común en clínica: anemia perniciosa; en diabéticos, metformina. Depósitos para 3–5 años: tarda en aparecer.`],
        ['Deficiencia de ácido fólico', `Megaloblástica sin neurología, ácido metilmalónico normal. Depósitos para 3–4 meses: alcohol, embarazo, hemólisis, fármacos antifolato.`]
      ],
      examen: 'Neurología + megaloblástica = B12. Ácido metilmalónico alto separa B12 de folato. Dar folato solo a un déficit de B12 empeora lo neurológico.'
    },
    {
      id: 'hemoliticas', subj: 'hemato', tema: 'Hemolíticas: genéticas y adquiridas', topics: ['hemoliticas'],
      pasos: [
        { h: 'Confirma la hemólisis', t: `<b>Reticulocitos altos + LDH alta + bilirrubina indirecta alta + haptoglobina baja</b>.` },
        { h: '¿Intra o extravascular?', t: `<b>Intravascular</b>: hemoglobinuria (orina oscura sin eritrocitos), hemosiderinuria, haptoglobina indetectable (PTT, CID, HPN, G6PD, transfusión incompatible, válvulas). <b>Extravascular</b> (bazo): esplenomegalia e ictericia (esferocitosis, AHAI caliente).` },
        { h: 'Coombs directo', t: `La prueba que separa lo inmune.`,
          si: [['Positivo IgG (caliente)', 'AHAI caliente (idiopática, LES, LLC, fármacos): prednisona 1 mg/kg; rituximab; esplenectomía'], ['Positivo C3 (fría, IgM)', 'aglutininas frías (Mycoplasma, mononucleosis, linfoma): evitar frío, rituximab; los esteroides no sirven'], ['Negativo', 'mira el frotis']] },
        { h: 'Coombs negativo: lee el frotis', t: `Cada forma tiene su enfermedad.`,
          si: [['Esquistocitos', 'microangiopática: PTT, SHU, CID, válvulas'], ['Esferocitos', 'esferocitosis hereditaria (CHCM alta, familia; EMA)'], ['Células mordidas, cuerpos de Heinz', 'déficit de G6PD'], ['Drepanocitos', 'drepanocitosis (electroforesis)']] },
        { h: 'Microangiopática = urgencia', t: `<b>PTT</b> (ADAMTS13 &lt;10 %): <b>plasmaféresis urgente</b> + esteroide ± caplacizumab; <b>no transfundas plaquetas</b>. SHU típico (E. coli O157:H7, IRA): soporte. SHU atípico: eculizumab.` },
        { h: 'Sin pista en el frotis', t: `<b>HPN</b> (hemólisis + trombosis en sitios raros + citopenias; citometría de flujo CD55/CD59 → eculizumab/ravulizumab), deficiencia de piruvato cinasa, infecciones (malaria, Clostridium), fármacos.` },
        { h: 'Medidas para el hemolítico crónico', t: `<b>Ácido fólico</b>; vigila litiasis biliar pigmentaria y crisis aplásicas por parvovirus B19. Esferocitosis grave: esplenectomía (con vacunas previas). G6PD: evitar oxidantes y medir la enzima 2–3 meses después de la crisis.` }
      ],
      cubre: [
        ['Genéticas (defecto del eritrocito)', `<b>Membrana</b>: esferocitosis, eliptocitosis. <b>Enzimas</b>: G6PD (ligada al X, crisis tras habas, primaquina, sulfas o infección), piruvato cinasa. <b>Hemoglobina</b>: drepanocitosis, talasemias.`],
        ['Adquiridas (defecto afuera del eritrocito, salvo HPN)', `<b>Inmunes</b> (Coombs +): AHAI caliente, fría, aloinmune (transfusión), por fármacos. <b>No inmunes</b>: microangiopáticas (PTT, SHU, CID), mecánicas (válvulas), infecciones, HPN, hiperesplenismo.`]
      ],
      examen: 'Coombs directo es la bisagra: positivo = inmune. Esquistocitos + plaquetas bajas = PTT/SHU: plasmaféresis y nada de plaquetas.'
    },
    {
      id: 'sangrado', subj: 'hemato', tema: 'Abordaje del paciente con sangrado: anormalidades plaquetarias, trombocitopenia inmune, alteraciones de la coagulación, hemofilia, EvW', topics: ['sangrado'],
      pasos: [
        { h: 'Historia de sangrado', t: `¿Es anormal? Desde la infancia o familiar (hereditario) vs reciente. Fármacos: aspirina, clopidogrel, anticoagulantes, ISRS. Hepatopatía, ERC.` },
        { h: '¿Dónde sangra?', t: `El patrón te dice qué falla.`,
          si: [['Piel y mucosas: petequias, epistaxis, encías, menorragia', 'plaquetas o von Willebrand'], ['Profundo: hemartrosis, hematomas musculares, sangrado tardío tras cirugía', 'factores de coagulación']] },
        { h: 'Laboratorio inicial', t: `<b>BH con plaquetas + frotis</b> (descarta pseudotrombocitopenia por EDTA: repite en citrato), <b>TP/INR, TTPa</b> y fibrinógeno.` },
        { h: 'Plaquetas bajas aisladas: ¿PTI?', t: `Diagnóstico de exclusión: frotis normal salvo plaquetas grandes, sin otras citopenias ni esplenomegalia. Descarta VIH, VHC, H. pylori, fármacos (heparina → TIH), LES, embarazo. Trata si &lt;30 000 o sangra: <b>prednisona o dexametasona</b> ± <b>IgIV</b> (sangrado grave); 2ª línea: agonistas de TPO, rituximab, esplenectomía.` },
        { h: 'Plaquetas normales y sangrado de mucosas', t: `<b>Von Willebrand</b> (la hereditaria más común): antígeno FvW, actividad (cofactor de ristocetina) y FVIII. Si es normal: agregometría (Glanzmann, Bernard-Soulier, fármacos, uremia).` },
        { h: 'Lee el TP y el TTPa', t: `¿Qué vía está alterada?`,
          si: [['Solo TP largo', 'factor VII: déficit de vitamina K inicial, warfarina, hepatopatía'], ['Solo TTPa largo', 'VIII, IX, XI (hemofilia, EvW), heparina, anticoagulante lúpico (trombosis, no sangrado)'], ['Ambos largos', 'vía común, CID, hepatopatía avanzada, sobreanticoagulación'], ['Prueba de mezcla corrige / no corrige', 'falta un factor / hay un inhibidor']] },
        { h: 'Trata según la causa', t: `<b>Hemofilia</b>: reemplazar el factor (profilaxis en graves; emicizumab en A). <b>EvW tipo 1</b>: desmopresina; tipos 2–3: concentrado FVIII/FvW; ácido tranexámico en mucosas. <b>CID</b>: tratar la causa; plasma, crioprecipitado o plaquetas solo si sangra. Evita AINE e inyecciones IM.` }
      ],
      cubre: [
        ['Anormalidades plaquetarias', `Cantidad (trombocitopenia: PTI, TIH, fármacos, médula, secuestro esplénico, consumo) o función (aspirina, clopidogrel, uremia, Glanzmann, Bernard-Soulier). Sangrado mucocutáneo con TP y TTPa normales.`],
        ['Trombocitopenia inmune (PTI)', `Plaquetas bajas aisladas, por exclusión. Médula solo si es atípica o &gt;60 años. Esteroide ± IgIV; urgencia: IgIV + esteroide + transfusión de plaquetas.`],
        ['Alteraciones de la coagulación', `TP (extrínseca/VII), TTPa (intrínseca: VIII, IX, XI, XII), ambos (común: X, V, II, fibrinógeno). Prueba de mezcla: déficit vs inhibidor (hemofilia adquirida en anciano o posparto).`],
        ['Hemofilia', `Ligada al X (hombres). A = FVIII (85 %), B = FIX. TTPa largo, TP y plaquetas normales. Grave &lt;1 %, moderada 1–5 %, leve 5–40 %. Hemartrosis = factor de inmediato, sin esperar estudios.`],
        ['Enfermedad de von Willebrand', `Autosómica, mujeres y hombres. Sangrado de mucosas (menorragia). TTPa normal o largo (si baja el FVIII). Tipo 1 (75 %): desmopresina.`]
      ],
      examen: 'Mucosas = plaquetas/EvW; articulaciones y músculos = factores. TTPa largo con TP normal en hombre con hemartrosis = hemofilia. Prueba de mezcla que no corrige = inhibidor.'
    },

    // ───────────── Nefrología
    {
      id: 'lra', subj: 'nefro', tema: 'Lesión renal aguda', topics: ['lra'],
      pasos: [
        { h: 'Define y estadifica (KDIGO)', t: `Creatinina <b>↑≥0.3 mg/dL en 48 h</b>, o <b>≥1.5 veces</b> la basal en 7 días, o uresis &lt;0.5 mL/kg/h por 6 h. Estadio 1: 1.5–1.9× · 2: 2–2.9× · 3: ≥3×, Cr ≥4 o diálisis.` },
        { h: '¿Necesita diálisis urgente?', t: `<b>AEIOU</b>: acidosis refractaria (pH &lt;7.1), electrolitos (K &gt;6.5 o con cambios en el ECG que no ceden), intoxicaciones (litio, metanol, etilenglicol, salicilatos), sobrecarga refractaria (edema pulmonar), uremia (pericarditis, encefalopatía, sangrado).` },
        { h: 'Trata la hiperkalemia', t: `ECG: si hay cambios, <b>gluconato de calcio</b>. Luego insulina + glucosa, salbutamol, bicarbonato si hay acidosis, quelantes; diálisis si no cede.` },
        { h: 'Descarta lo posrenal', t: `<b>USG renal pronto</b> (hidronefrosis) y vejiga: retención → sonda. Hombre mayor (próstata), monorreno, tumor pélvico → desobstruir.` },
        { h: '¿Prerrenal?', t: `Volumen y PA, fármacos (AINE, IECA/ARA, diuréticos, contraste). <b>BUN/Cr &gt;20, FENa &lt;1 %</b> (FEUrea &lt;35 % si usa diuréticos), Na urinario &lt;20, sedimento inactivo → reto de volumen y ver si mejora en 24–72 h.` },
        { h: 'Intrínseca: lee el sedimento', t: `El sedimento dice qué parte del riñón se dañó.`,
          si: [['Cilindros granulosos “café lodoso”', 'necrosis tubular aguda (isquemia, nefrotóxicos, rabdomiólisis: CK)'], ['Cilindros leucocitarios, eosinofiluria, fiebre, rash', 'nefritis intersticial por fármacos (betalactámicos, IBP, AINE): suspender ± esteroide'], ['Cilindros eritrocitarios, proteinuria, HTA', 'glomerulonefritis: complemento, ANCA, anti-MBG, biopsia']] },
        { h: 'Manejo general y seguimiento', t: `Suspende nefrotóxicos y <b>ajusta dosis</b>, euvolemia con cristaloides balanceados, vigila K, Na, ácido-base y volumen. Diuréticos solo para sobrecarga. Revisa a los 3 meses (riesgo de ERC).` }
      ],
      examen: 'El primer paso en LRA es descartar obstrucción (USG) y revisar volumen y fármacos. FENa &lt;1 % = prerrenal; cilindros granulosos = NTA; eosinófilos = nefritis intersticial.'
    },
    {
      id: 'erc', subj: 'nefro', tema: 'Insuficiencia renal crónica', topics: ['erc'],
      pasos: [
        { h: 'Define la ERC', t: `Daño o función alterada <b>&gt;3 meses</b>: TFG &lt;60, o marcadores de daño (albuminuria ≥30 mg/g, sedimento anormal, alteración en imagen o biopsia, trasplante).` },
        { h: 'Clasifica por G y A', t: `TFG con <b>CKD-EPI 2021</b> (± cistatina C) y <b>albúmina/creatinina en orina</b>. G1–G5 y A1 (&lt;30), A2 (30–300), A3 (&gt;300). El mapa de calor (verde → rojo) da el riesgo.` },
        { h: '¿Aguda o crónica?', t: `Creatininas previas, <b>riñones pequeños</b> en el USG (excepto DM, amiloide, poliquistosis, VIH: grandes), anemia, fósforo y PTH altos. Si dudas, trátala como LRA.` },
        { h: 'Busca la causa', t: `<b>Diabetes</b> (#1), hipertensión, glomerulopatías, poliquistosis, obstructiva; en México, nefropatía de causa desconocida en jóvenes. USG renal y EGO a todos.` },
        { h: 'Nefroprotección', t: `<b>IECA o ARA II</b> a dosis máxima tolerada si hay albuminuria (acepta que la Cr suba hasta 30 %), <b>iSGLT2 si TFG ≥20</b>, finerenona en DM2 con albuminuria, PA &lt;120 sistólica si se tolera, estatina, sin AINE, ajusta dosis (metformina no con TFG &lt;30).` },
        { h: 'Trata las complicaciones', t: `A partir de G3b.`,
          si: [['Anemia', 'hierro primero (ferritina, saturación); AEE si Hb &lt;10'], ['Mineral-óseo: P alto, PTH alta', 'restricción de fósforo, quelantes, vitamina D/calcitriol, cinacalcet'], ['Acidosis (HCO₃ &lt;18)', 'bicarbonato de sodio'], ['Hiperkalemia', 'dieta, patiromer o ciclosilicato']] },
        { h: 'Refiere y prepara el reemplazo', t: `Nefrología si TFG &lt;30, albúmina/creatinina &gt;300 o caída rápida. En G4: hablar de diálisis y trasplante, <b>fístula 6 meses antes</b>, vacuna de hepatitis B. Diálisis por síntomas, no por un número (suele ser TFG 5–10).` }
      ],
      examen: 'Se clasifica con TFG y albuminuria (G y A). Nefroprotección = IECA/ARA + iSGLT2. Riñones pequeños = crónica.'
    },
    {
      id: 'glomerulo', subj: 'nefro', tema: 'Síndrome nefrótico y glomerulonefritis', topics: ['glomerulo'],
      pasos: [
        { h: 'Identifica el síndrome', t: `Proteinuria + hematuria = glomérulo.`,
          si: [['Proteinuria &gt;3.5 g/día, albúmina &lt;3, edema, lípidos altos, lipiduria', 'nefrótico'], ['Hematuria dismórfica y cilindros eritrocitarios, HTA, oliguria, Cr ↑, proteinuria &lt;3.5 g', 'nefrítico (glomerulonefritis)']] },
        { h: 'Estudios base', t: `EGO con sedimento, índice proteína/creatinina, creatinina, albúmina, lípidos. Serologías: <b>C3, C4</b>, ANA/anti-DNA, <b>ANCA</b>, anti-MBG, VHB, VHC, VIH, crioglobulinas, <b>anti-PLA2R</b>, ASO, electroforesis y cadenas ligeras en &gt;50 años.` },
        { h: 'Nefrótico: piensa por edad', t: `Niños: <b>cambios mínimos</b> (esteroide sin biopsia). Adultos: <b>membranosa</b> (anti-PLA2R; cáncer, VHB, LES, AINE; trombosis de vena renal), GEFS (afroamericanos, VIH, obesidad), cambios mínimos (AINE, Hodgkin), diabetes (la secundaria #1), amiloidosis.` },
        { h: 'Nefrótico: manejo general', t: `<b>IECA/ARA</b> (proteinuria), diurético de asa (edema), sal baja, estatina, anticoagulación en membranosa con albúmina &lt;2–2.5 si el riesgo de sangrado es bajo. Lo específico según la biopsia (esteroide, rituximab, anticalcineurínicos).` },
        { h: 'Nefrítico: clasifica por complemento', t: `El C3 parte en dos.`,
          si: [['C3 bajo', 'postinfecciosa (1–3 semanas tras faringitis o piel), membranoproliferativa (VHC, crioglobulinas), lúpica (C3 y C4 bajos), endocarditis'], ['C3 normal', 'nefropatía por IgA (1–3 días tras IVRS), vasculitis ANCA (GPA c-ANCA/PR3, PAM p-ANCA/MPO), anti-MBG (Goodpasture), Henoch-Schönlein']] },
        { h: 'GN rápidamente progresiva = urgencia', t: `Cr que se duplica en días o semanas (medias lunas): biopsia pronto, pero <b>no esperes para iniciar pulsos de metilprednisolona</b> + ciclofosfamida o rituximab; <b>plasmaféresis</b> en anti-MBG.` },
        { h: 'Decide la biopsia', t: `Adulto con nefrótico (salvo DM típica), nefrítico sin causa clara, GNRP, LES con proteinuria &gt;0.5 g/día.` }
      ],
      cubre: [
        ['Síndrome nefrótico', `Lesión del podocito: proteinuria masiva. Complicaciones: trombosis (pérdida de antitrombina), infecciones, hiperlipidemia, LRA.`],
        ['Glomerulonefritis (síndrome nefrítico)', `Inflamación glomerular: hematuria con cilindros eritrocitarios, HTA, edema. Clasificar por complemento y serologías; la GNRP se trata antes de tener la biopsia.`]
      ],
      examen: 'Hematuria 1–3 días después de una IVRS = IgA (C3 normal); 1–3 semanas después = postestreptocócica (C3 bajo). Membranosa = anti-PLA2R y la que más trombosa.'
    },
    {
      id: 'dialisis', subj: 'nefro', tema: 'Diálisis y trasplante renal', topics: ['dialisis'],
      pasos: [
        { h: 'Decide cuándo iniciar', t: `ERC G5 (TFG &lt;15) con <b>síntomas urémicos</b> (náusea, prurito, serositis, encefalopatía, desnutrición), sobrecarga, hiperkalemia o acidosis refractarias. Urgente: AEIOU. No por una cifra aislada.` },
        { h: 'Prepara desde G4', t: `Educación sobre modalidades, <b>cuidar las venas</b> del brazo no dominante (sin PICC), <b>fístula arteriovenosa 6 meses antes</b> (mejor que injerto, y ambos mejor que catéter), vacuna de hepatitis B, valoración para trasplante (anticipado si TFG &lt;20).` },
        { h: 'Elige la modalidad', t: `Según el paciente.`,
          si: [['Hemodiálisis', '3 sesiones/semana de ~4 h; hipotensión intradiálisis, infección del catéter (S. aureus), desequilibrio, trombosis de la fístula'], ['Diálisis peritoneal', 'en casa; preserva función residual; peritonitis (líquido turbio, &gt;100 leucocitos con &gt;50 % PMN → antibiótico intraperitoneal), hernias, hiperglucemia']] },
        { h: 'Verifica que dialice bien', t: `<b>Kt/V ≥1.2</b> por sesión de hemodiálisis (≥1.7 semanal en DP), URR ≥65 %, peso seco; controla K, P, PTH y anemia.` },
        { h: 'Valora el trasplante', t: `Mejor sobrevida y calidad de vida. Donador vivo &gt; fallecido. Compatibilidad ABO, HLA y <b>prueba cruzada</b>. Contraindicaciones: cáncer o infección activa, cardiopatía grave no corregida.` },
        { h: 'Inmunosupresión', t: `Inducción (basiliximab o timoglobulina) + mantenimiento triple: <b>tacrolimus + micofenolato + prednisona</b>. Niveles de tacrolimus (nefrotoxicidad, temblor, DM postrasplante, HTA, hiperkalemia).` },
        { h: 'Complicaciones por tiempo', t: `Rechazo hiperagudo (minutos), agudo (días-meses: Cr que sube → biopsia; celular → pulsos de esteroide), crónico (años). Infecciones: 1er mes nosocomiales; 1–6 meses oportunistas (CMV → valganciclovir; Pneumocystis → TMP-SMX; virus BK); &gt;6 meses comunitarias. Cáncer de piel y linfoproliferativo (VEB).` }
      ],
      cubre: [
        ['Diálisis', `Hemodiálisis (fístula la mejor vía) o peritoneal (en casa; peritonitis como complicación clave). Se inicia por síntomas o AEIOU.`],
        ['Trasplante renal', `El mejor tratamiento de la ERC terminal. Triple inmunosupresión; rechazo e infecciones según el tiempo desde el trasplante.`]
      ],
      examen: 'Líquido de diálisis peritoneal turbio con &gt;100 leucocitos y &gt;50 % neutrófilos = peritonitis: antibiótico intraperitoneal. La fístula se hace meses antes de necesitarla.'
    },
    {
      id: 'hta', subj: 'nefro', tema: 'Hipertensión arterial', topics: ['hta'],
      pasos: [
        { h: 'Mide bien y confirma', t: `Sentado 5 min, brazalete adecuado, 2–3 tomas. Consultorio <b>≥140/90</b> (≥130/80 AHA) y confirma fuera: <b>MAPA</b> 24 h ≥130/80 o <b>AMPA</b> ≥135/85 (descarta bata blanca y busca la enmascarada).` },
        { h: '¿Urgencia o emergencia?', t: `PA ≥180/120: ¿hay daño agudo a órgano?`,
          si: [['Sí: encefalopatía, EVC, SCA, edema pulmonar, disección, eclampsia, IRA', 'emergencia: IV en UCI, bajar ≤25 % la 1ª hora (disección: PAS &lt;120 en 20 min)'], ['No', 'HTA grave sin daño: oral, ajustar en días']] },
        { h: 'Evalúa daño a órgano y riesgo', t: `Creatinina/TFG, K, Na, glucosa/HbA1c, lípidos, EGO + albúmina/creatinina, <b>ECG</b> (HVI), fondo de ojo; eco si se sospecha.` },
        { h: '¿Es secundaria?', t: `Sospecha en &lt;30 años, inicio brusco, resistente, hipokalemia espontánea o daño desproporcionado: <b>hiperaldosteronismo primario</b> (aldosterona/renina; la endocrina #1), apnea del sueño, renovascular (Cr ↑&gt;30 % con IECA, edema pulmonar flash; fibrodisplasia en mujer joven), renal, feocromocitoma (metanefrinas), Cushing, coartación, fármacos (AINE, anticonceptivos).` },
        { h: 'Inicia el tratamiento', t: `Estilo de vida (sal &lt;5 g, DASH, ejercicio, peso, alcohol) + <b>2 fármacos en una tableta</b> en la mayoría: IECA o ARA + calcioantagonista o tiazida. Monoterapia solo en grado 1 de bajo riesgo o frágiles.` },
        { h: 'Escala hasta la meta', t: `Meta <b>&lt;130/80</b> (sistólica 120–129 si se tolera); ≥80 años o frágiles, individualizada. Paso 2: triple (IECA/ARA + CA + tiazida). Embarazo: labetalol, nifedipino, metildopa (nunca IECA/ARA).` },
        { h: 'Resistente', t: `No controlada con 3 fármacos (uno diurético) a dosis óptima: descarta pseudorresistencia (técnica, apego, bata blanca), busca causa secundaria y <b>agrega espironolactona</b>.` }
      ],
      examen: 'Inicio con combinación de 2 en una sola tableta. Resistente = 3 fármacos con diurético: el 4º es espironolactona y hay que buscar hiperaldosteronismo.'
    },

    // ───────────── Reumatología
    {
      id: 'reuma-intro', subj: 'reuma', tema: 'Introducción / interrogatorio', topics: ['abordaje'],
      pasos: [
        { h: 'Ficha de identificación', t: `Edad y sexo orientan: mujer joven → LES, AR; hombre joven → espondiloartritis; hombre maduro → gota; &gt;50 años → OA, polimialgia reumática, arteritis de células gigantes, pseudogota.` },
        { h: 'Motivo y semiología del dolor', t: `Dolor, rigidez, aumento de volumen, debilidad o limitación. Inicio, localización, irradiación, intensidad, horario, qué lo mejora o empeora.` },
        { h: '¿Inflamatorio o mecánico?', t: `La pregunta más útil del interrogatorio.`,
          si: [['Rigidez matutina &gt;30–60 min, mejora al moverse, empeora en reposo, despierta en la noche, fiebre o fatiga', 'inflamatorio'], ['Rigidez &lt;30 min, empeora con el uso, mejora con reposo', 'mecánico']] },
        { h: 'Tiempo de evolución', t: `<b>Agudo &lt;6 semanas</b> (gota, séptica, viral, reactiva) vs <b>crónico &gt;6 semanas</b> (AR, OA, espondiloartritis).` },
        { h: 'Interrogatorio extraarticular', t: `Piel (psoriasis, eritema malar, fotosensibilidad, nódulos), ojos (uveítis → espondiloartritis; ojo seco → Sjögren), úlceras orales (LES, Behçet), <b>Raynaud</b> (esclerosis sistémica), diarrea (EII, reactiva), uretritis (reactiva), pulmón, riñón.` },
        { h: 'Antecedentes que cambian el diagnóstico', t: `Familiares (psoriasis, EII, espondilitis, gota), <b>infecciones recientes</b> (faringitis, diarrea, ITS), fármacos (diuréticos → gota; hidralazina o procainamida → lupus inducido; estatinas → miopatía), alcohol y dieta, trauma, ocupación o deporte.` },
        { h: 'Función y banderas rojas', t: `Impacto en actividades diarias. <b>Fiebre + monoartritis = séptica hasta demostrar lo contrario</b>; déficit neurológico, pérdida de peso, dolor óseo nocturno (cáncer).` }
      ],
      examen: 'Rigidez matutina de más de 30–60 minutos que mejora con el movimiento = dolor inflamatorio. Monoartritis con fiebre = séptica hasta demostrar lo contrario.'
    },
    {
      id: 'reuma-dolor', subj: 'reuma', tema: 'Abordaje del paciente con dolor musculoesquelético: historia clínica y examen físico', topics: ['abordaje'],
      pasos: [
        { h: '¿Articular o periarticular?', t: `<b>Articular</b>: duele todo el arco, activo y pasivo, con sinovitis (aumento de volumen, calor, derrame). <b>Periarticular</b> (bursitis, tendinitis, entesitis): dolor en un punto, más con movimientos activos específicos.` },
        { h: 'Explora con orden', t: `Inspección, palpación (calor, derrame, nódulos), movilidad activa y pasiva, fuerza y maniobras: <b>squeeze test</b> de MCF, Schober (columna), FABER/Patrick (sacroilíacas), entesis; piel y uñas (psoriasis, pitting).` },
        { h: '¿Inflamatorio o no?', t: `Une el interrogatorio (rigidez, horario), la exploración (sinovitis) y PCR/VSG.` },
        { h: 'Cuenta articulaciones y define el patrón', t: `<b>Mono</b> (1), <b>oligo</b> (2–4), <b>poli</b> (≥5); simétrico o asimétrico; pequeñas o grandes; axial; aditivo o migratorio.` },
        { h: 'Monoartritis aguda = punción', t: `Artrocentesis siempre: Gram, cultivo, cristales con luz polarizada y leucocitos.`,
          si: [['&lt;2000 leucocitos', 'no inflamatorio (OA, trauma)'], ['2000–50 000', 'inflamatorio (cristales, AR, espondiloartritis)'], ['&gt;50 000 con &gt;75 % PMN', 'séptico: antibiótico y lavado (S. aureus; gonococo en joven)']] },
        { h: 'Del patrón al diagnóstico', t: `Cada patrón tiene su sospechoso.`,
          si: [['Poli simétrica de manos (MCF, IFP, muñecas)', 'AR (o LES, viral)'], ['Oligo asimétrica de piernas + entesitis, dactilitis o lumbalgia inflamatoria', 'espondiloartritis, APs, reactiva'], ['IFD, rodilla o cadera, mecánico', 'OA'], ['Podagra aguda', 'gota'], ['Rodilla o muñeca de anciano', 'pseudogota']] },
        { h: 'Pide estudios dirigidos', t: `No “perfil reumático” a ciegas: BH, PCR/VSG, ácido úrico, creatinina, EGO; <b>FR + anti-CCP</b> si sospechas AR; <b>ANA solo con sospecha clínica</b> de conectivopatía; HLA-B27 en espondiloartritis; RX de manos, pies o sacroilíacas; USG o RM para sinovitis o sacroileítis temprana.` }
      ],
      cubre: [['Historia clínica', `Ver “Introducción / interrogatorio”: edad y sexo, inflamatorio vs mecánico, tiempo, extraarticular, antecedentes, banderas rojas.`], ['Examen físico', `Articular vs periarticular, sinovitis, conteo y patrón, entesis, columna y sacroilíacas, piel y uñas.`]],
      examen: 'Monoartritis aguda: el paso siguiente siempre es la artrocentesis. Los ANA se piden con sospecha clínica, no como tamizaje.'
    },
    {
      id: 'cristales', subj: 'reuma', tema: 'Artritis por cristales: gota y pseudogota', topics: ['gota'],
      pasos: [
        { h: 'Sospecha', t: `Monoartritis aguda muy inflamatoria que llega al máximo en &lt;24 h: <b>1ª MTF (podagra)</b>, tobillo, rodilla. Hombre &gt;40 o mujer posmenopáusica. Desencadenantes: alcohol, carnes o mariscos, fructosa, diuréticos, cirugía, deshidratación.` },
        { h: 'Confirma con la punción', t: `<b>Gota</b>: agujas con birrefringencia <b>negativa</b>. <b>Pseudogota</b>: romboides con birrefringencia <b>positiva</b> débil. Siempre Gram y cultivo (puede coexistir infección). El ácido úrico en la crisis puede salir normal: mídelo 2–4 semanas después.` },
        { h: 'Si no hay punción', t: `Criterios ACR/EULAR 2015, USG (signo del doble contorno), TC de energía dual. En pseudogota, condrocalcinosis en la RX.` },
        { h: 'Trata la crisis en las primeras 24 h', t: `<b>Colchicina a dosis baja</b> (1 mg + 0.5 mg a la hora), <b>AINE</b> a dosis plena o <b>glucocorticoide</b> (oral o intraarticular): elige por comorbilidad (ERC, IC o sangrado → esteroide). Si ya toma alopurinol, <b>no lo suspendas</b>.` },
        { h: 'Indica la terapia hipouricemiante', t: `≥2 ataques al año, tofos, daño en RX; considerar tras el 1er ataque con ERC ≥3, ácido úrico &gt;9 o litiasis. <b>Alopurinol</b> de 1ª línea (empieza con 100 mg, 50 en ERC, y sube cada 2–5 semanas); HLA-B*58:01 en asiáticos; febuxostat alternativa; pegloticasa en refractaria.` },
        { h: 'Trata hasta la meta', t: `<b>Ácido úrico &lt;6 mg/dL</b> (&lt;5 con tofos). Profilaxis con colchicina 3–6 meses al iniciar.` },
        { h: 'Cambia lo que la provoca', t: `Bajar de peso, menos cerveza y fructosa; cambia la tiazida por <b>losartán</b> si es hipertenso. Pseudogota en &lt;60 años o poliarticular: busca hiperparatiroidismo, hemocromatosis, hipomagnesemia.` }
      ],
      cubre: [
        ['Gota', `Urato monosódico, agujas negativas. Crisis: colchicina, AINE o esteroide. Fondo: alopurinol con meta &lt;6.`],
        ['Pseudogota (depósito de pirofosfato de calcio)', `Rodilla y muñeca de anciano; romboides positivos; condrocalcinosis. Crisis igual que la gota (esteroide intraarticular muy útil); no hay fármaco que disuelva los cristales.`]
      ],
      examen: 'Agujas negativas = gota; romboides positivos = pseudogota. No se suspende el alopurinol durante una crisis. Meta de ácido úrico &lt;6.'
    },
    {
      id: 'oa', subj: 'reuma', tema: 'Osteoartritis', topics: ['oa'],
      pasos: [
        { h: 'Sospecha por la clínica', t: `&gt;45 años, <b>dolor mecánico</b>, rigidez matutina <b>&lt;30 min</b>, crepitación, ensanchamiento óseo. Rodillas, caderas, manos (IFD: Heberden; IFP: Bouchard; base del pulgar) y columna. Respeta MCF y muñeca.` },
        { h: 'Diagnóstico clínico', t: `≥45 años + dolor con la actividad + rigidez &lt;30 min = OA, <b>sin necesidad de imagen</b> (NICE).` },
        { h: 'RX solo si es atípico o va a cirugía', t: `Espacio articular disminuido asimétrico, <b>osteofitos</b>, esclerosis y quistes subcondrales (Kellgren-Lawrence 0–4). Laboratorio normal (PCR, VSG, FR); líquido no inflamatorio &lt;2000.` },
        { h: 'Descarta lo que se parece', t: `Artritis inflamatoria (MCF o muñeca afectadas → AR, hemocromatosis, CPPD), pseudogota, séptica, necrosis avascular de cadera, dolor referido (cadera → rodilla), bursitis o tendinitis.` },
        { h: 'Tratamiento no farmacológico para todos', t: `<b>Ejercicio</b> (fortalecer cuádriceps, aeróbico, tai chi), <b>bajar de peso</b> (≥5–10 % en rodilla), educación, bastón en la mano contraria, ortesis.` },
        { h: 'Escala los fármacos', t: `<b>AINE tópico</b> (rodilla, mano) → AINE oral a la menor dosis el menor tiempo (+ IBP; evitar en ERC, IC o enfermedad CV) → duloxetina; esteroide intraarticular en crisis. No recomendados: opioides, glucosamina/condroitina, ácido hialurónico.` },
        { h: 'Cirugía', t: `<b>Artroplastia total</b> de rodilla o cadera si el dolor y la discapacidad no ceden y el daño es avanzado.` }
      ],
      examen: 'La OA se diagnostica por clínica; la RX no es necesaria en el cuadro típico. Lo primero es ejercicio y bajar de peso; el primer fármaco en rodilla es el AINE tópico.'
    },
    {
      id: 'ar', subj: 'reuma', tema: 'Artritis reumatoide', topics: ['ar'],
      pasos: [
        { h: 'Sospecha', t: `Poliartritis <b>simétrica de pequeñas articulaciones</b> (MCF, IFP, muñecas, MTF) &gt;6 semanas, rigidez matutina &gt;1 h, squeeze test positivo; mujer de 30–50 años; respeta IFD.` },
        { h: 'Pide los estudios', t: `<b>FR y anti-CCP</b> (más específico, pronóstico), VSG/PCR, BH, PFH y creatinina (para el FAME), EGO; RX basal de manos y pies (erosiones, osteopenia periarticular). Descarta viral (parvovirus, hepatitis, chikungunya), LES, APs.` },
        { h: 'Aplica ACR/EULAR 2010', t: `<b>≥6 de 10</b> con sinovitis no explicada por otra cosa: articulaciones (0–5), serología FR/anti-CCP (0–3), reactantes (0–1), duración ≥6 semanas (0–1).` },
        { h: 'Antes de inmunosuprimir', t: `VHB, VHC, VIH, <b>TB latente</b> (PPD o IGRA), RX de tórax; vacunas (influenza, neumococo, zóster recombinante).` },
        { h: 'Inicia metotrexato ya', t: `<b>Metotrexato</b> 15 mg/semana (sube a 20–25) + ácido fólico, con esteroide puente a dosis baja que se retira en &lt;3 meses. Si el MTX está contraindicado (embarazo, hepatopatía, TFG &lt;30): leflunomida, sulfasalazina (segura en embarazo), hidroxicloroquina.` },
        { h: 'Trata hasta la meta', t: `Remisión o baja actividad (DAS28 &lt;2.6, CDAI, SDAI); evalúa cada 1–3 meses. Sin mejoría a 3 meses o sin meta a 6 → escala.`,
          si: [['Con mal pronóstico: FR/anti-CCP altos, erosiones tempranas, actividad alta', 'agrega biológico (anti-TNF, abatacept, tocilizumab, rituximab) o inhibidor JAK'], ['Sin mal pronóstico', 'otro FAME convencional o triple terapia (MTX + SSZ + HCQ)']] },
        { h: 'Vigila lo extraarticular y comorbilidad', t: `Nódulos, EPID, escleritis, Sjögren, Felty, <b>inestabilidad atlantoaxoidea</b> (antes de intubar). Riesgo CV alto, osteoporosis (esteroide), infecciones. Hidroxicloroquina → revisión oftalmológica.` }
      ],
      examen: 'Anti-CCP es el más específico. El primer FAME es metotrexato, iniciado en cuanto se diagnostica. Antes de un biológico: descartar TB latente y hepatitis B.'
    },
    {
      id: 'espondilo', subj: 'reuma', tema: 'Espondiloartropatías y artritis psoriásica', topics: ['espondilo'],
      pasos: [
        { h: 'Reconoce la lumbalgia inflamatoria', t: `Inicio <b>&lt;40 años</b>, insidioso, &gt;3 meses, <b>mejora con el ejercicio y no con el reposo</b>, dolor nocturno, glúteo alternante.` },
        { h: 'Busca los rasgos de espondiloartritis', t: `Entesitis (talón), <b>dactilitis</b>, <b>uveítis anterior</b>, psoriasis, EII, historia familiar, buena respuesta a AINE, PCR alta, HLA-B27.` },
        { h: 'Pide imagen y HLA-B27', t: `RX de sacroilíacas (sacroileítis bilateral; tardío: sindesmofitos, “caña de bambú”). Si la RX es normal: <b>RM de sacroilíacas</b> (edema óseo).` },
        { h: 'Aplica ASAS y clasifica', t: `Axial (lumbalgia ≥3 meses, inicio &lt;45): sacroileítis en imagen + ≥1 rasgo, o HLA-B27 + ≥2 rasgos.`,
          si: [['Sacroileítis en RX', 'espondilitis anquilosante (radiográfica)'], ['Psoriasis, uñas, IFD, dactilitis, FR negativo (CASPAR ≥3)', 'artritis psoriásica'], ['1–4 semanas tras uretritis (Chlamydia) o diarrea', 'artritis reactiva'], ['Crohn o CUCI', 'enteropática']] },
        { h: 'Trata lo axial', t: `Ejercicio y fisioterapia + <b>AINE a dosis plenas</b> (2 distintos, 2–4 semanas cada uno) → si sigue activo: <b>anti-TNF o anti-IL-17</b> (o JAK). Los FAME convencionales <b>no sirven</b> para lo axial y los esteroides sistémicos tampoco.` },
        { h: 'Trata lo periférico y la APs', t: `AINE, esteroide intraarticular, <b>metotrexato</b> (también ayuda a la piel), sulfasalazina o leflunomida → biológico. Con EII o uveítis: anticuerpo anti-TNF (no etanercept ni anti-IL-17 en EII). Piel importante: anti-IL-17 o anti-IL-23. Reactiva: AINE; antibiótico solo si la infección sigue activa.` },
        { h: 'Vigila las complicaciones', t: `Uveítis (ojo rojo doloroso con fotofobia → oftalmología urgente), fracturas vertebrales con trauma mínimo, insuficiencia aórtica, fibrosis apical, amiloidosis.` }
      ],
      cubre: [
        ['Espondiloartropatías', `Familia seronegativa (FR negativo) ligada a HLA-B27: espondilitis anquilosante/axial, reactiva, enteropática, psoriásica. Comparten entesitis, dactilitis, uveítis y afección axial.`],
        ['Artritis psoriásica', `Psoriasis (puede venir antes, después o solo familiar), uñas con pitting u onicólisis, IFD, dactilitis, mutilante (“lápiz en copa”). CASPAR ≥3. Metotrexato → biológico según piel, EII o uveítis.`]
      ],
      examen: 'Lumbalgia inflamatoria en joven = espondiloartritis: RX de sacroilíacas, RM si es normal. En lo axial no funcionan los FAME convencionales: AINE y luego anti-TNF o anti-IL-17.'
    }
  ]
};
