// “¿Dónde actúa?”: vías y dianas para ubicar cada fármaco (pestaña Animación de cada tema).
// chain: true → cascada en orden (bloquear un paso apaga lo de abajo); false → dianas independientes.
// nodes: [{ t: nombre corto, s: qué pasa ahí }] · drugs: [{ d: fármaco, n: índice del nodo, why: explicación corta }]
export default {
  paths: {
    sraa: {
      title: 'Sistema renina-angiotensina-aldosterona', chain: true, topics: ['hta', 'erc'],
      nodes: [
        { t: 'Renina', s: 'Angiotensinógeno → angiotensina I' },
        { t: 'ECA', s: 'Angiotensina I → angiotensina II; también degrada bradicinina' },
        { t: 'Receptor AT1', s: 'Vasoconstricción, sed y liberación de aldosterona' },
        { t: 'Receptor de aldosterona', s: 'Colector: retiene sodio, elimina potasio, fibrosis' },
        { t: 'Canal ENaC', s: 'Colector: reabsorbe sodio' }
      ],
      drugs: [
        { d: 'Aliskiren', n: 0, why: 'Inhibe la renina directamente. No se combina con IECA ni ARA II: más hiperkalemia y daño renal sin beneficio.' },
        { d: 'Enalapril (IECA)', n: 1, why: 'Bloquea la ECA: baja angiotensina II y sube bradicinina, de ahí la tos seca y el angioedema.' },
        { d: 'Losartán (ARA II)', n: 2, why: 'Bloquea el receptor AT1: mismo beneficio que el IECA sin acumular bradicinina. Nunca junto con IECA.' },
        { d: 'Espironolactona', n: 3, why: 'Antagonista del receptor de aldosterona: cuarto fármaco en HTA resistente. Vigila potasio; da ginecomastia.' },
        { d: 'Finerenona', n: 3, why: 'Antagonista mineralocorticoide no esteroideo: baja albuminuria y progresión en ERC con diabetes tipo 2.' },
        { d: 'Amilorida', n: 4, why: 'Bloquea ENaC: diurético ahorrador de potasio, actúa después de la aldosterona.' }
      ]
    },
    diureticos: {
      title: 'La nefrona: dónde actúa cada diurético', chain: false, topics: ['hta', 'lra'],
      nodes: [
        { t: 'Túbulo proximal', s: 'Anhidrasa carbónica: reabsorbe bicarbonato' },
        { t: 'Túbulo proximal · SGLT2', s: 'Reabsorbe glucosa y sodio' },
        { t: 'Asa de Henle gruesa', s: 'Cotransportador NKCC2 (Na-K-2Cl)' },
        { t: 'Túbulo distal', s: 'Cotransportador NCC (Na-Cl)' },
        { t: 'Colector', s: 'Aldosterona y canal ENaC' }
      ],
      drugs: [
        { d: 'Acetazolamida', n: 0, why: 'Inhibe la anhidrasa carbónica: bicarbonaturia y acidosis metabólica leve.' },
        { d: 'Dapagliflozina', n: 1, why: 'iSGLT2: glucosuria y natriuresis leve; protege riñón y corazón.' },
        { d: 'Furosemida', n: 2, why: 'Diurético de asa (NKCC2): el más potente; hipokalemia, ototoxicidad. De elección en sobrecarga de volumen.' },
        { d: 'Clortalidona', n: 3, why: 'Tiazida (NCC): primera línea en HTA; hiponatremia, hipokalemia, sube ácido úrico, glucosa y calcio.' },
        { d: 'Hidroclorotiazida', n: 3, why: 'Tiazida (NCC) en el túbulo distal: retiene calcio, útil si hay litiasis por hipercalciuria.' },
        { d: 'Espironolactona', n: 4, why: 'Antagoniza aldosterona en el colector: ahorra potasio, puede dar hiperkalemia.' }
      ]
    },
    plaqueta: {
      title: 'Plaqueta y coágulo en el infarto', chain: false, topics: ['sca', 'scc'],
      nodes: [
        { t: 'COX-1 → tromboxano A2', s: 'La plaqueta se activa y recluta a otras' },
        { t: 'Receptor P2Y12', s: 'El ADP amplifica la activación' },
        { t: 'GP IIb/IIIa', s: 'Las plaquetas se unen entre sí por fibrinógeno' },
        { t: 'Trombina y factor Xa', s: 'Generan fibrina que estabiliza el trombo' },
        { t: 'Trombo de fibrina', s: 'Ocluye la coronaria' }
      ],
      drugs: [
        { d: 'Aspirina', n: 0, why: 'Acetila COX-1 de forma irreversible: el efecto dura la vida de la plaqueta (7 a 10 días).' },
        { d: 'Clopidogrel', n: 1, why: 'Bloquea P2Y12 (profármaco, irreversible). Junto con aspirina = doble antiagregación.' },
        { d: 'Ticagrelor', n: 1, why: 'Bloquea P2Y12 de forma reversible y no es profármaco; puede dar disnea.' },
        { d: 'Prasugrel', n: 1, why: 'Bloquea P2Y12; contraindicado si hubo EVC o isquemia cerebral transitoria.' },
        { d: 'Tirofibán', n: 2, why: 'Inhibidor de GP IIb/IIIa: bloquea la vía final de la agregación; uso selectivo en la sala de hemodinamia.' },
        { d: 'Enoxaparina', n: 3, why: 'Heparina de bajo peso: potencia antitrombina, inhibe más Xa que trombina.' },
        { d: 'Tenecteplasa', n: 4, why: 'Fibrinolítico: activa plasminógeno a plasmina, que rompe la fibrina. Si no hay angioplastia a tiempo.' }
      ]
    },
    coagulacion: {
      title: 'Coagulación y anticoagulantes', chain: true, topics: ['tep', 'sca'],
      nodes: [
        { t: 'Vitamina K', s: 'Activa los factores II, VII, IX y X en el hígado' },
        { t: 'Factor Xa', s: 'Convierte protrombina en trombina' },
        { t: 'Trombina (IIa)', s: 'Convierte fibrinógeno en fibrina' },
        { t: 'Fibrina', s: 'Forma el trombo estable' }
      ],
      drugs: [
        { d: 'Warfarina', n: 0, why: 'Antagonista de vitamina K: baja II, VII, IX y X. Meta INR 2 a 3. Se revierte con vitamina K y complejo protrombínico.' },
        { d: 'Rivaroxabán', n: 1, why: 'Inhibidor directo del Xa, oral. Antídoto: andexanet alfa.' },
        { d: 'Apixabán', n: 1, why: 'Inhibidor directo del Xa, oral, dos veces al día; menos sangrado mayor que warfarina.' },
        { d: 'Fondaparinux', n: 1, why: 'Vía antitrombina, solo contra Xa. La protamina no lo revierte.' },
        { d: 'Heparina no fraccionada', n: 2, why: 'Vía antitrombina inhibe trombina y Xa por igual; se vigila con TTPa y se revierte con protamina.' },
        { d: 'Dabigatrán', n: 2, why: 'Inhibidor directo de trombina, oral. Antídoto: idarucizumab.' },
        { d: 'Alteplasa', n: 3, why: 'Trombólisis: plasmina rompe la fibrina. En TEP de alto riesgo (con choque).' }
      ]
    },
    urato: {
      title: 'Ácido úrico y el ataque de gota', chain: false, topics: ['gota'],
      nodes: [
        { t: 'Xantina oxidasa', s: 'Hipoxantina → xantina → ácido úrico' },
        { t: 'Riñón (URAT1)', s: 'Reabsorbe ácido úrico en el túbulo proximal' },
        { t: 'Uricasa', s: 'Convierte urato en alantoína (los humanos no la tenemos)' },
        { t: 'Neutrófilo (microtúbulos)', s: 'Fagocita cristales y migra a la articulación' },
        { t: 'Inflamación (prostaglandinas)', s: 'Dolor, calor y rubor del ataque' }
      ],
      drugs: [
        { d: 'Alopurinol', n: 0, why: 'Inhibe la xantina oxidasa: primera línea para bajar urato (meta menor de 6 mg/dL). Riesgo de Stevens-Johnson con HLA-B*58:01.' },
        { d: 'Febuxostat', n: 0, why: 'Inhibe la xantina oxidasa; alternativa al alopurinol, con alerta cardiovascular.' },
        { d: 'Probenecid', n: 1, why: 'Uricosúrico: bloquea la reabsorción renal. Evitar si hay litiasis o TFG baja.' },
        { d: 'Pegloticasa', n: 2, why: 'Uricasa recombinante para gota refractaria; contraindicada en déficit de G6PD.' },
        { d: 'Colchicina', n: 3, why: 'Impide la polimerización de microtúbulos del neutrófilo; ataque agudo y profilaxis al iniciar hipouricemiante.' },
        { d: 'Naproxeno', n: 4, why: 'AINE: inhibe COX en el ataque agudo; evitar en ERC, úlcera o anticoagulación.' }
      ]
    },
    acido: {
      title: 'Ácido gástrico y protección de la mucosa', chain: false, topics: ['stda', 'erge'],
      nodes: [
        { t: 'Receptor H2', s: 'La histamina estimula a la célula parietal' },
        { t: 'Bomba H+/K+ ATPasa', s: 'Paso final: secreta el ácido' },
        { t: 'Ácido en la luz', s: 'Lo que ya se secretó' },
        { t: 'Prostaglandinas (COX-1)', s: 'Moco, bicarbonato y flujo que protegen la mucosa' },
        { t: 'Base de la úlcera', s: 'Mucosa ya lesionada' }
      ],
      drugs: [
        { d: 'Famotidina', n: 0, why: 'Antagonista H2: menos potente que un IBP; útil para síntomas nocturnos.' },
        { d: 'Omeprazol (IBP)', n: 1, why: 'Inhibe la bomba de forma irreversible; tomar 30 a 60 min antes del desayuno.' },
        { d: 'Hidróxido de aluminio y magnesio', n: 2, why: 'Antiácido: neutraliza lo ya secretado; alivio rápido y corto.' },
        { d: 'Misoprostol', n: 3, why: 'Análogo de prostaglandina E1: repone la protección que quitan los AINE. Contraindicado en embarazo.' },
        { d: 'Sucralfato', n: 4, why: 'Forma una capa que cubre la base de la úlcera; necesita pH ácido para activarse.' }
      ]
    },
    glucosa: {
      title: 'Glucosa: dónde actúa cada antidiabético', chain: false, topics: ['dm2'],
      nodes: [
        { t: 'Intestino', s: 'Alfa-glucosidasa digiere carbohidratos' },
        { t: 'Hígado', s: 'Produce glucosa (gluconeogénesis)' },
        { t: 'Célula beta', s: 'Canal K-ATP: al cerrarse libera insulina' },
        { t: 'Incretinas (GLP-1)', s: 'Más insulina, menos glucagón, saciedad; la DPP-4 las degrada' },
        { t: 'Riñón (SGLT2)', s: 'Reabsorbe glucosa en el túbulo proximal' },
        { t: 'Músculo y grasa', s: 'Sensibilidad a la insulina (PPAR-gamma)' }
      ],
      drugs: [
        { d: 'Acarbosa', n: 0, why: 'Inhibe la alfa-glucosidasa intestinal: baja la glucosa posprandial; flatulencia.' },
        { d: 'Metformina', n: 1, why: 'Reduce la producción hepática de glucosa; no da hipoglucemia. Suspender si TFG menor de 30.' },
        { d: 'Glibenclamida', n: 2, why: 'Sulfonilurea: cierra K-ATP y libera insulina sin importar la glucosa → hipoglucemia y aumento de peso.' },
        { d: 'Sitagliptina', n: 3, why: 'Inhibe DPP-4: más GLP-1 propio; neutra en peso, sin hipoglucemia sola.' },
        { d: 'Semaglutida', n: 3, why: 'Agonista GLP-1: baja peso y eventos cardiovasculares; náusea al inicio.' },
        { d: 'Empagliflozina', n: 4, why: 'iSGLT2: glucosuria; protege en insuficiencia cardiaca y ERC. Riesgo de cetoacidosis euglucémica.' },
        { d: 'Pioglitazona', n: 5, why: 'Agonista PPAR-gamma: sensibiliza a la insulina; retiene líquido, contraindicada en insuficiencia cardiaca.' }
      ]
    },
    lipidos: {
      title: 'Colesterol LDL: dónde actúa cada hipolipemiante', chain: false, topics: ['smdl'],
      nodes: [
        { t: 'Intestino (NPC1L1)', s: 'Absorbe el colesterol de la dieta y la bilis' },
        { t: 'ATP citrato liasa', s: 'Primer paso hepático de la síntesis' },
        { t: 'HMG-CoA reductasa', s: 'Paso limitante de la síntesis de colesterol' },
        { t: 'PCSK9', s: 'Degrada los receptores de LDL del hígado' },
        { t: 'Lipoproteína lipasa', s: 'Limpia triglicéridos (PPAR-alfa)' }
      ],
      drugs: [
        { d: 'Ezetimiba', n: 0, why: 'Bloquea NPC1L1: baja LDL ~20%; se suma a la estatina si no llegas a la meta.' },
        { d: 'Ácido bempedoico', n: 1, why: 'Inhibe ATP citrato liasa; opción si no toleras estatinas.' },
        { d: 'Atorvastatina', n: 2, why: 'Inhibe HMG-CoA reductasa: el hígado sube receptores de LDL. Alta intensidad 40 a 80 mg baja LDL 50% o más.' },
        { d: 'Evolocumab', n: 3, why: 'Anticuerpo anti-PCSK9: más receptores de LDL; baja LDL ~60% sobre la estatina.' },
        { d: 'Inclisirán', n: 3, why: 'ARN pequeño de interferencia: frena la síntesis de PCSK9; una inyección cada 6 meses.' },
        { d: 'Fenofibrato', n: 4, why: 'Agonista PPAR-alfa: baja triglicéridos; se usa si hay hipertrigliceridemia grave.' }
      ]
    },
    fame: {
      title: 'Artritis reumatoide: blancos de los FAME', chain: false, topics: ['ar'],
      nodes: [
        { t: 'Folato y purinas', s: 'Proliferación de linfocitos' },
        { t: 'Pirimidinas (DHODH)', s: 'Síntesis de ADN en linfocitos activados' },
        { t: 'TNF-alfa', s: 'Citocina central de la sinovitis' },
        { t: 'Receptor de IL-6', s: 'Inflamación sistémica, PCR alta' },
        { t: 'Coestimulación del linfocito T', s: 'CD80/86 con CD28' },
        { t: 'Linfocito B (CD20)', s: 'Produce factor reumatoide y anti-CCP' },
        { t: 'JAK-STAT', s: 'Señal de citocinas dentro de la célula' }
      ],
      drugs: [
        { d: 'Metotrexato', n: 0, why: 'Ancla del tratamiento: antagoniza folato. Dar ácido fólico; vigilar hígado y biometría; teratogénico.' },
        { d: 'Leflunomida', n: 1, why: 'Inhibe DHODH (pirimidinas); alternativa si no hay metotrexato; teratogénica.' },
        { d: 'Adalimumab', n: 2, why: 'Anti-TNF: antes, descartar tuberculosis latente y hepatitis B.' },
        { d: 'Tocilizumab', n: 3, why: 'Bloquea el receptor de IL-6: baja mucho la PCR (puede ocultar infecciones).' },
        { d: 'Abatacept', n: 4, why: 'CTLA4-Ig: bloquea la coestimulación CD80/86–CD28 del linfocito T.' },
        { d: 'Rituximab', n: 5, why: 'Anti-CD20: depleta linfocitos B; mejor si es seropositiva.' },
        { d: 'Tofacitinib', n: 6, why: 'Inhibidor de JAK oral; precaución por trombosis y eventos cardiovasculares en mayores de 50 con riesgo.' }
      ]
    }
  }
};
