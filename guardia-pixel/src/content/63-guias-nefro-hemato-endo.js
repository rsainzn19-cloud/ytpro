// Complemento de las guías Nefro, Hemato y Endocrino de la rotación (Ximena Cors Cepeda, EMIS 5; Google Drive).
// Su contenido ya está integrado en los capítulos completos (70–75); aquí van lo que agregan en corto y dónde difieren de lo actual.
const NEFRO = { short: 'De tu Guía Nefro', vs: 'tu guía', name: 'Guía Nefro · Ximena Cors Cepeda (EMIS 5)', url: 'https://docs.google.com/document/d/1rDNEQlt3WLxqqBbY3pdU58uPkhwNfrcM7XGH0USf3GI/edit' };
const HEMATO = { short: 'De tu Guía Hemato', vs: 'tu guía', name: 'Guía Hemato · Ximena Cors Cepeda (EMIS 5)', url: 'https://docs.google.com/document/d/1faFUx0spXPz9uPB_fyN6AOxL8OXq3jJcDf_RIFiZnYw/edit' };
const ENDO = { short: 'De tu Guía Endocrino', vs: 'tu guía', name: 'Guía Endocrino · Ximena Cors Cepeda (EMIS 5)', url: 'https://docs.google.com/document/d/1ng1BpGOd1JywQaChMt0YWLQIRemXzi5hyUV_XVmYpsM/edit' };

export default {
  guias: {
    lra: { src: NEFRO,
      puntos: [
        '<b>Fases de la NTA</b>: inicio (horas a días) → oligúrica (1–3 semanas: sobrecarga, hiperkalemia, acidosis, uremia) → poliúrica (~2 semanas, pérdida de electrolitos) → recuperación (meses).',
        '<b>Por qué la FeNa sube en la NTA</b>: la Na/K-ATPasa pierde su polaridad (se va al lado luminal) y el túbulo dañado ya no reabsorbe sodio.',
        'La creatinina tarda 8–48 h en reflejar el daño; biomarcadores tempranos: cistatina C, NGAL, KIM-1.',
        '<b>Nefritis intersticial</b>: retira el fármaco y da esteroide en los primeros 7 días si no mejora.'
      ],
      ojo: ['Tu guía da diuréticos de asa IV en el síndrome hepatorrenal; el tratamiento es albúmina + terlipresina (o norepinefrina), y los diuréticos se suspenden.'],
      cards: [['Fases de la NTA', 'Inicio → oligúrica (1–3 sem) → poliúrica → recuperación'], ['Biomarcadores tempranos de LRA', 'Cistatina C, NGAL, KIM-1']] },
    erc: { src: NEFRO,
      puntos: [
        '<b>HTA secundaria más común</b>: la ERC (retención de sodio y agua + SRAA).',
        'Si la creatinina sube ≤20–30% al iniciar IECA/ARA-II, continúa: es el efecto hemodinámico esperado.',
        '<b>Trasplante</b>: referir con TFG <30; contraindicado con metástasis, cáncer o infección activa, o cardiopatía grave no corregible.',
        'En diálisis, la primera causa de muerte es la muerte súbita cardiaca y la segunda, las infecciones.'
      ],
      ojo: [
        'Meta de presión: tu guía da <140/90 sin albuminuria y <130/80 con albuminuria; KDIGO 2021 sugiere sistólica <120 si se tolera.',
        'Anemia: tu guía inicia EPO con Hb <9; KDIGO la considera con Hb <10 tras corregir el hierro, con meta ≤11.5 (nunca >13).',
        'Tu guía dice evitar la metformina en la ERC; se puede usar con TFG ≥30 (reduciendo la dosis con TFG 30–44) y se suspende con TFG <30.'
      ],
      cards: [['Causa más común de HTA secundaria', 'Enfermedad renal crónica'], ['Primera causa de muerte en diálisis', 'Muerte súbita cardiaca']] },
    hta: { src: NEFRO,
      puntos: [
        '<b>Medición correcta</b>: sentado, espalda y brazo apoyados, sin cafeína, ejercicio ni tabaco 30 min antes, vejiga vacía; 3 lecturas separadas 1–2 min; Korotkoff I = sistólica, V = diastólica. Diferencia >15 mmHg entre brazos = riesgo vascular.',
        '<b>Secundaria por edad</b>: <40 años → tiroides, displasia fibromuscular, renal · 40–64 → hiperaldosteronismo (la más común), tiroides, apnea · ≥65 → estenosis de la arteria renal.',
        '<b>Bajar de peso</b> es lo más efectivo del estilo de vida (~1 mmHg por kg); dieta DASH con sodio <1.5–2 g.',
        'Menores de 50 años: la diastólica predice más el riesgo; mayores de 50: la sistólica.'
      ],
      ojo: [
        'Tu guía dice que los calcioantagonistas dihidropiridínicos no se usan en IC; el amlodipino es seguro en IC con FEVI reducida. Los que se evitan son verapamilo y diltiazem.',
        'Meta: tu guía da <130/80 (o 140/90, o 150/90 en >60); la ESC 2024 pide sistólica 120–129 si se tolera.'
      ],
      cards: [['HTA secundaria en 40–64 años', 'Hiperaldosteronismo primario (la más común)'], ['HTA secundaria en ≥65 años', 'Estenosis de la arteria renal (aterosclerótica)']] },
    glomerulo: { src: NEFRO,
      puntos: [
        '<b>Hematuria familiar benigna</b> (membrana basal delgada): hematuria aislada, 5–10% de la población, colágeno IV; buen pronóstico.',
        '<b>GNRP</b> por inmunofluorescencia: lineal (anti-MBG) · granular (posestreptocócica, lupus) · negativa (pauciinmune, ANCA).',
        '<b>Nefrótico</b>: anticoagula profilácticamente con albúmina <2–2.5 g/dL (sobre todo membranosa); diuréticos de asa para perder 0.5–2 kg/día.'
      ],
      ojo: ['Tu guía dice que la membranoproliferativa es “más común en niños”; en adultos suele ser secundaria (VHC, crioglobulinemia, gammapatía monoclonal), y la C3 (depósitos densos) es la que predomina en jóvenes.'],
      cards: [['Hematuria familiar benigna', 'Membrana basal delgada: hematuria aislada, buen pronóstico']] },
    dialisis: { src: NEFRO,
      puntos: [
        '<b>Síndrome de robo</b> de la fístula: la mano no recibe sangre (fría, dolorosa) → revisión quirúrgica. Una fístula de alto flujo puede causar IC de alto gasto.',
        '<b>Síndrome del primer uso</b>: dolor torácico o de espalda y anafilaxia al iniciar la sesión.',
        'La hemodiálisis elimina mejor moléculas pequeñas (urea, K); la hemofiltración (convección) elimina mejor las medianas (citocinas).'
      ],
      ojo: [],
      cards: [['Síndrome de robo de la fístula', 'Mano fría y dolorosa por desvío de flujo'], ['Hemofiltración elimina mejor', 'Moléculas medianas (convección)']] },
    anemias: { src: HEMATO,
      puntos: [
        '<b>Índice de producción reticulocitaria</b> = % retic × Hto/45 ÷ factor (Hto 41–50: 1 · 30–40: 1.5 · 20–29: 2 · 10–19: 2.5); <2 hipoproliferativa.',
        '<b>Ferritina</b>: <45 ya es ferropenia; 45–100 completa con estudios de hierro; >100 prácticamente la descarta (salvo inflamación).',
        '<b>Fórmula de Ganzoni</b> (déficit de hierro IV) = peso × (Hb meta − Hb actual) × 2.4 + 500 mg de depósito.',
        '<b>B12</b>: depósitos para 3–4 años (folato 3–4 meses); la LDH puede pasar de 1200 U/L por eritropoyesis ineficaz; lo neurológico revierte si se trata en <6 meses.'
      ],
      ojo: [
        'Tu guía da ácido fólico “4–15 mcg/día”; la dosis es de 1–5 <b>mg</b>/día por ~4 meses.',
        'Tu guía menciona la prueba de Schilling; ya no se hace. Para la anemia perniciosa se usan anticuerpos anti-factor intrínseco y anti-células parietales (y gastrina).',
        'El hierro dextrán IM ya no se usa; el IV preferido es carboximaltosa, sacarosa o derisomaltosa.'
      ],
      cards: [['Ganzoni', 'Peso × (Hb meta − Hb actual) × 2.4 + 500'], ['Ferritina >100', 'Prácticamente descarta ferropenia (sin inflamación)']] },
    hemoliticas: { src: HEMATO,
      puntos: [
        '<b>Déficit de piruvato cinasa</b> (AR): ↓ ATP → eritrocitos rígidos (equinocitos) y ↑ 2,3-BPG; hemólisis extravascular desde el recién nacido.',
        '<b>Eliptocitosis hereditaria</b>: espectrina o proteína 4.1; casi siempre asintomática.',
        'Hemólisis <b>mediada por toxinas</b>: punteado basófilo (plomo), cuerpos de Heinz (oxidantes), esquistocitos.'
      ],
      ojo: ['Tu guía dice que el eculizumab es “anti-CD3”; es un anticuerpo anti-<b>C5</b> (bloquea el complemento terminal). Obliga a vacunar contra meningococo.'],
      cards: [['Déficit de piruvato cinasa', 'Equinocitos, ↑ 2,3-BPG, hemólisis extravascular'], ['Eculizumab', 'Anti-C5: HPN, SUH atípico; vacunar contra meningococo']] },
    dm2: { src: ENDO,
      puntos: [
        '<b>Dosis de insulina</b>: total diaria 0.4–1 U/kg (DM2) o 0.5–0.7 (DM1); 40–50% basal y el resto prandial. Corrección: 1 U por cada 30–50 mg/dL arriba de la meta (regla del 1500/1800).',
        '<b>Hiperglucemia por esteroides</b>: predomina en la tarde; NPH matutina o esquema basal-bolo.',
        '<b>Somogyi</b> (rebote tras hipoglucemia nocturna) vs <b>alba</b> (GH y cortisol de madrugada): mide la glucosa a las 3 a.m.',
        '<b>Mononeuropatía del III par</b> diabética: ptosis y ojo “abajo y afuera” con pupila respetada.'
      ],
      ojo: [
        'Resolución de la CAD: tu guía pide pH >7.35; el criterio es pH ≥7.30 (con HCO₃ ≥15, anión gap ≤12 y glucosa <200).',
        'EHH: tu guía usa osmolaridad >350; el criterio es >320 mOsm/kg.',
        'Metas: tu guía da PA <140/90 y LDL <100 sin ECV; la ADA pide PA <130/80 y LDL <70 (o <55 con ECV).',
        'Tu guía dice que los arGLP-1 causan cáncer de páncreas; no se ha demostrado. Su contraindicación es el antecedente de carcinoma medular de tiroides o MEN2.'
      ],
      cards: [['Dosis total de insulina en DM2', '0.4–1 U/kg/día (40–50% basal)'], ['Somogyi vs alba', 'Mide la glucosa a las 3 a.m.: baja = Somogyi, normal/alta = alba']] },
    smdl: { src: ENDO,
      puntos: [
        '<b>Xantomas</b>: tendinosos (LDL alto, IIa), eruptivos (TG >1000), tuberosos (codos y rodillas), palmares (tipo III); xantelasmas y arco corneal.',
        'Antes de la estatina: glucosa, TSH (el hipotiroidismo predispone a miopatía), PFH y EGO; perfil de control a las 4–12 semanas.',
        'Niacina: la que más sube el HDL, pero con rubor, hiperuricemia e hiperglucemia; no reduce eventos.'
      ],
      ojo: ['Tu guía da las metas de LDL de la ACC/AHA 2018 (estatina por riesgo, LDL <70 en ECV); la ESC/EAS pide <55 en riesgo muy alto y <70 en alto (lo verás en el capítulo).'],
      cards: [['Xantomas eruptivos', 'Triglicéridos >1000 mg/dL'], ['Antes de iniciar estatina', 'TSH (hipotiroidismo → miopatía), PFH, glucosa']] },
    hipofisis: { src: ENDO,
      puntos: [
        '<b>Craneofaringioma</b>: el tumor selar más común en niños (restos de la bolsa de Rathke), quístico y calcificado.',
        '<b>Síndrome de Nelson</b>: tras suprarrenalectomía bilateral, el adenoma productor de ACTH crece → hiperpigmentación, cefalea, hemianopsia.',
        'Prolactina normal 5–20 ng/mL (hasta ~400 en el embarazo); se toma en ayuno; la risperidona puede llevarla a 300–400.',
        'Cabergolina ≥2 años con ecocardiograma cada 2 años si las dosis son altas.'
      ],
      ojo: ['Tu guía incluye demeclociclina para el SIADH; casi no se usa (nefrotoxicidad). Hoy: restricción de líquidos, urea oral o tolvaptán.'],
      cards: [['Craneofaringioma', 'Tumor selar más común en niños; quístico y calcificado'], ['Síndrome de Nelson', 'Crece el adenoma ACTH tras suprarrenalectomía bilateral']] }
  }
};
