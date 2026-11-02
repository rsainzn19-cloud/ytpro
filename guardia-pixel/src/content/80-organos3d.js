// Complemento 3D de los videos: el órgano de cada tema (modelos de OrganUI / BodyParts3D) con lo afectado en rojo.
// cond3d.<tema> = { title, sum, scales: [{ organ, focus?, ctx?, find }], stages?: [{ l, t, s, find?: { <organ>: {...} } }] }
//   find.<idEstructura> = [2 causa | 1 afectado | 0 normal relevante, etiqueta, explicación]; ctx = estructuras de contexto visibles (huesos).
// Las estructuras que no están en find se ven como “fantasma”. Las etapas cambian o agregan hallazgos.
const A = (l, d) => [1, l, d], N = (l, d) => [0, l, d], K = (l, d) => [2, l, d]; // K = la causa (naranja), A = lo dañado (rojo)
const BONES = ['bones-of-shoulder-girdle-and-arm', 'hip-bones', 'bones-of-leg-and-foot'];

export default {
  cond3d: {
    sca: { title: 'Infarto anterior con elevación del ST', sum: 'Una placa rota en la descendente anterior forma un trombo que ocluye la arteria; muere la pared anterior y el septum.',
      scales: [{ organ: 'heart', find: {
        'left-coronary': K('Coronaria izquierda (DA)', 'La culpable: placa rota con trombo en la descendente anterior. Se reabre con ICP primaria y stent, idealmente en menos de 90 minutos.'),
        'ventricular-wall': A('Pared anterior y septum', 'Sin oxígeno deja de contraerse en un minuto; las células mueren desde el subendocardio a partir de los 20 minutos. Por eso tiempo es músculo.'),
        'left-ventricle': A('Ventrículo izquierdo', 'Con parte de su pared quieta expulsa menos sangre; si el infarto es grande aparece el choque cardiogénico.'),
        'right-coronary': N('Coronaria derecha', 'Irriga la cara inferior; su oclusión da infarto inferior (II, III, aVF), bradicardia y a veces infarto del VD.'),
        'right-ventricle': N('Ventrículo derecho', 'Se respeta en el infarto anterior; se afecta con oclusión proximal de la coronaria derecha.'),
        'ascending-aorta': N('Aorta ascendente', 'Normal aquí. Una disección aórtica puede imitar un infarto y contraindica los antitrombóticos.') } }],
      stages: [
        { l: 'Oclusión', t: '0–12 h', s: 'ST elevado = arteria cerrada: ECG en 10 minutos, aspirina y reperfusión inmediata.' },
        { l: 'Fase aguda', t: 'Días 1–7', s: 'El músculo muerto se reblandece mientras lo limpian neutrófilos y macrófagos; riesgo de rotura de días 3 a 7 y de arritmias.',
          find: { heart: { 'left-coronary': N('Coronaria izquierda (DA)', 'Ya abierta con stent: doble antiagregación 12 meses para que no se trombose.'),
            'ventricular-wall': A('Pared anterior y septum', 'Necrosis reblandecida: puede romperse la pared libre (taponamiento) o el septum (soplo holosistólico nuevo).'),
            'left-ventricle': A('Ventrículo izquierdo', 'La pared quieta permite un trombo apical que puede embolizar.') } } },
        { l: 'Cicatriz', t: 'Desde 6 semanas', s: 'Una cicatriz de colágeno sustituye al músculo; el tratamiento protege lo que queda.',
          find: { heart: { 'ventricular-wall': A('Pared anterior y septum', 'Cicatriz delgada que no se contrae; si se abomba con cada latido es un aneurisma ventricular (ST elevado persistente).'),
            'left-ventricle': A('Ventrículo izquierdo', 'Remodelado: se dilata para mantener el gasto. IECA, betabloqueador y antagonista mineralocorticoide lo limitan.') } } }
      ] },

    scc: { title: 'Angina estable', sum: 'Una placa estable estrecha la coronaria: en reposo alcanza el flujo, con el esfuerzo no.',
      scales: [{ organ: 'heart', find: {
        'left-coronary': K('Coronaria izquierda', 'Placa estable que estrecha ≥70% la luz (≥50% si es el tronco): no deja que el flujo suba con el esfuerzo.'),
        'right-coronary': N('Coronaria derecha', 'Puede tener otras placas; la enfermedad de 3 vasos o del tronco es indicación de revascularizar.'),
        'ventricular-wall': N('Miocardio', 'En reposo recibe lo que necesita; la isquemia empieza en el subendocardio.'),
        'left-ventricle': N('Ventrículo izquierdo', 'Su FEVI marca el pronóstico: <50% es de alto riesgo.') } }],
      stages: [
        { l: 'Reposo', t: 'Sin síntomas', s: 'El flujo alcanza: ECG normal en la mitad de los pacientes.' },
        { l: 'Esfuerzo', t: 'Minutos', s: 'Sube la FC y la demanda; la placa no deja pasar más sangre: dolor opresivo e infradesnivel del ST que ceden con reposo o nitroglicerina.',
          find: { heart: { 'ventricular-wall': A('Subendocardio', 'Isquemia subendocárdica: infradesnivel del ST en la prueba de esfuerzo y alteración de la movilidad en el eco de estrés.'),
            'left-ventricle': A('Ventrículo izquierdo', 'Disfunción diastólica primero y luego sistólica en la zona isquémica (cascada isquémica).') } } },
        { l: 'Tratamiento', t: 'Siempre', s: 'Aspirina y estatina mejoran el pronóstico; betabloqueador o calcioantagonista quitan la angina; revascularizar si es refractaria o de alto riesgo.' }
      ] },

    aortica: { title: 'Estenosis e insuficiencia aórtica', sum: 'Dos problemas de la misma válvula: en la estenosis el VI empuja contra una salida estrecha; en la insuficiencia la sangre regresa al VI.',
      scales: [{ organ: 'heart', find: {
        'ascending-aorta': A('Válvula y aorta ascendente', 'Válvula calcificada que no abre: chorro rápido con soplo en diamante al foco aórtico, irradiado a las carótidas; dilatación postestenótica.'),
        'ventricular-wall': A('Pared del VI', 'Hipertrofia concéntrica para vencer la poscarga: más demanda de O₂ (angina), ventrículo rígido (S4).'),
        'left-ventricle': A('Ventrículo izquierdo', 'Cavidad pequeña con gasto fijo: síncope de esfuerzo; al final falla (disnea).'),
        'left-coronary': N('Coronarias', 'Sin obstrucción, pero la reserva coronaria baja por la hipertrofia: angina aun con coronarias sanas.') } }],
      stages: [
        { l: 'Estenosis aórtica', t: 'Ancianos / bicúspide', s: 'Angina, síncope y disnea; pulso parvus et tardus. Cambio valvular (TAVI o cirugía) si hay síntomas o FEVI <50%.' },
        { l: 'Insuficiencia aórtica', t: 'Raíz dilatada / endocarditis', s: 'Soplo diastólico decrescendo, pulso saltón y presión diferencial amplia. Cirugía con síntomas, FEVI ≤50–55% o DTS >50 mm.',
          find: { heart: { 'ascending-aorta': A('Raíz aórtica', 'Raíz dilatada (HTA, Marfan, bicúspide) o válvula destruida (endocarditis) que no cierra en diástole.'),
            'ventricular-wall': A('Pared del VI', 'Hipertrofia excéntrica por sobrecarga de volumen.'),
            'left-ventricle': A('Ventrículo izquierdo', 'Se dilata para recibir el reflujo; el volumen latido es grande y la diastólica cae.'),
            'left-coronary': N('Coronarias', 'Con la diastólica baja cae la perfusión coronaria: angina.') } } }
      ] },

    mitral: { title: 'Estenosis e insuficiencia mitral', sum: 'La aurícula izquierda paga los platos: se dilata, fibrila y transmite la presión al pulmón y al lado derecho.',
      scales: [{ organ: 'heart', find: {
        'left-atrium': A('Aurícula izquierda', 'Presión alta y dilatación: fibrilación auricular, trombos en la orejuela y embolias; si es enorme comprime el laríngeo recurrente (Ortner).'),
        'left-ventricle': N('Ventrículo izquierdo', 'En la estenosis se llena poco (gasto bajo); en la insuficiencia se dilata por sobrecarga de volumen.'),
        'pulmonary-trunk': A('Tronco pulmonar', 'La presión se transmite atrás: congestión e hipertensión pulmonar.'),
        'right-ventricle': A('Ventrículo derecho', 'Con la hipertensión pulmonar se hipertrofia y falla: edema, ingurgitación yugular, hepatomegalia.') } }],
      stages: [
        { l: 'Estenosis mitral', t: 'Reumática', s: 'S1 fuerte, chasquido de apertura y retumbo diastólico; warfarina si hay FA; valvuloplastia con balón.' },
        { l: 'Insuficiencia mitral', t: 'Prolapso / IAM / dilatación', s: 'Soplo holosistólico en el ápex irradiado a la axila; reparar con síntomas, FEVI ≤60% o DTS ≥40 mm.',
          find: { heart: { 'left-ventricle': A('Ventrículo izquierdo', 'Sobrecarga de volumen: se dilata y al final cae la FEVI. En la aguda (rotura de papilar) hay edema pulmonar súbito.'),
            'ventricular-wall': N('Pared ventricular y papilares', 'La rotura de un músculo papilar tras un IAM inferior da insuficiencia mitral aguda.') } } }
      ] },

    tep: { title: 'Tromboembolia pulmonar', sum: 'El trombo nace en las venas profundas de la pierna, sube por la cava, cruza el corazón derecho y se atora en la arteria pulmonar.',
      scales: [
        { organ: 'vessels', find: {
          'external-iliac-veins': K('Venas iliacas y femorales', 'Origen de la mayoría de los émbolos: TVP proximal (estasis, daño endotelial, hipercoagulabilidad).'),
          'common-iliac-veins': A('Iliacas comunes', 'El trombo proximal es el que más emboliza.'),
          'inferior-vena-cava': N('Vena cava inferior', 'Camino del émbolo al corazón; aquí va el filtro solo si no se puede anticoagular.'),
          'pulmonary-arteries': A('Arterias pulmonares', 'Donde se atora el émbolo: defecto de llenado en la angio-TC; un trombo en silla de montar puede causar choque.') } },
        { organ: 'lungs', find: {
          FMA7362: A('Segmento basal posterior derecho', 'Las bases reciben más flujo: ahí caen más émbolos. Un infarto periférico da dolor pleurítico, hemoptisis y la joroba de Hampton.'),
          FMA7363: A('Segmento basal lateral derecho', 'Zona mal perfundida y ventilada: espacio muerto, hipoxemia con gradiente A-a alto.'),
          FMA7364: N('Segmento basal anterior derecho', 'Los émbolos suelen ser múltiples y bilaterales; la oligohemia distal es el signo de Westermark.') } },
        { organ: 'heart', find: {
          'right-ventricle': A('Ventrículo derecho', 'Sobrecarga de presión: se dilata (VD/VI >1) y su pared libre deja de moverse con el ápex respetado (McConnell). Su falla es la causa de muerte.'),
          'right-atrium': N('Aurícula derecha', 'Insuficiencia tricuspídea y presión venosa alta (ingurgitación yugular).'),
          'left-ventricle': N('Ventrículo izquierdo', 'El septum desplazado lo comprime: cae el gasto y aparece la hipotensión (TEP de alto riesgo).') } }
      ] },

    hp: { title: 'Hipertensión pulmonar', sum: 'Las arteriolas pulmonares se estrechan; el ventrículo derecho, hecho para presiones bajas, se hipertrofia y termina fallando.',
      scales: [{ organ: 'heart', find: {
        'pulmonary-trunk': A('Tronco pulmonar', 'Dilatado por la presión alta (PAPm >20): P2 intenso; puede comprimir el tronco coronario y el laríngeo recurrente.'),
        'right-ventricle': A('Ventrículo derecho', 'Hipertrofia y luego dilatación: levantamiento paraesternal, falla derecha (cor pulmonale).'),
        'right-atrium': A('Aurícula derecha', 'Insuficiencia tricuspídea: ingurgitación yugular, hepatomegalia, edema.'),
        'left-atrium': N('Aurícula izquierda', 'Normal en la HAP (grupo 1); grande en el grupo 2 (cardiopatía izquierda), la causa más común.') } }],
      stages: [
        { l: 'Grupo 1 · HAP', t: 'Precapilar', s: 'PCP ≤15, RVP >2 UW: vasorreactividad → calcioantagonista; si no, antagonista de endotelina + PDE-5.' },
        { l: 'Grupo 2 · Cardiopatía izquierda', t: 'Poscapilar', s: 'La presión viene de atrás (PCP >15): se trata la IC o la valvulopatía.',
          find: { heart: { 'left-atrium': A('Aurícula izquierda', 'Dilatada por IC o valvulopatía mitral: transmite la presión a las venas pulmonares.'),
            'left-ventricle': A('Ventrículo izquierdo', 'IC con FEVI reducida o conservada: la causa más frecuente de hipertensión pulmonar.') } } }
      ] },

    dm2: { title: 'Diabetes tipo 2 y sus órganos blanco', sum: 'Resistencia a la insulina más falla progresiva de la célula β; la hiperglucemia daña vasos pequeños y grandes.',
      scales: [
        { organ: 'pancreas', find: {
          'pancreatic-body-and-tail': A('Cuerpo y cola (islotes)', 'Los islotes de Langerhans abundan en la cola: las células β primero compensan con hiperinsulinemia y luego fallan (amiloide, glucolipotoxicidad).'),
          'pancreatic-head': N('Cabeza del páncreas', 'La pancreatitis crónica o el cáncer de páncreas pueden causar diabetes secundaria (tipo 3c).'),
          duodenum: N('Duodeno', 'Las incretinas (GLP-1, GIP) del intestino potencian la insulina: base de los arGLP-1 e iDPP-4.') } },
        { organ: 'kidneys', find: {
          'right-kidney': A('Riñones', 'Nefropatía diabética (Kimmelstiel-Wilson): hiperfiltración → albuminuria → ERC. Tamizaje anual de albúmina/creatinina; IECA/ARA-II + iSGLT2.'),
          'left-kidney': A('Riñón izquierdo', 'Los iSGLT2 bloquean la reabsorción de glucosa en el túbulo proximal: glucosuria y protección renal.') } },
        { organ: 'vessels', find: {
          'carotid-arteries': A('Carótidas', 'Aterosclerosis acelerada: EVC. La enfermedad cardiovascular es la primera causa de muerte del diabético.'),
          'femoral-arteries': A('Arterias de las piernas', 'Enfermedad arterial periférica + neuropatía = pie diabético y amputación.') } }
      ] },

    smdl: { title: 'Aterosclerosis por dislipidemia', sum: 'El LDL entra a la pared arterial, se oxida y forma la placa; entre más bajo y más tiempo esté bajo, menos eventos.',
      scales: [
        { organ: 'vessels', find: {
          'carotid-arteries': A('Carótidas', 'Placa en la bifurcación: EVC isquémico y AIT.'),
          'abdominal-aorta': A('Aorta abdominal', 'Aterosclerosis y aneurisma de aorta abdominal.'),
          'femoral-arteries': A('Arterias femorales', 'Claudicación intermitente; índice tobillo-brazo <0.9.'),
          'renal-arteries': N('Arterias renales', 'La estenosis aterosclerótica causa HTA renovascular en ancianos.') } },
        { organ: 'heart', find: {
          'left-coronary': A('Coronarias', 'Placas que causan angina e infarto: por eso la meta de LDL es <55 en riesgo muy alto.'),
          'right-coronary': A('Coronaria derecha', 'Las estatinas estabilizan la placa y reducen eventos ~20–25% por cada 39 mg/dL de LDL.') } }
      ] },

    hipofisis: { title: 'Macroadenoma hipofisario', sum: 'Un adenoma de la silla turca crece hacia arriba y a los lados: comprime el quiasma y el seno cavernoso.',
      scales: [
        { organ: 'pituitary', find: {
          'pituitary-gland': K('Hipófisis (adenoma)', 'Microadenoma <10 mm, macroadenoma ≥10 mm. Prolactinoma el más común (cabergolina); los demás, cirugía transesfenoidal a través del seno esfenoidal (el hueso translúcido).'),
          'optic-chiasm': A('Quiasma óptico', 'El adenoma lo comprime desde abajo: hemianopsia bitemporal (se pierden los campos externos).'),
          'right-cavernous-sinus': A('Seno cavernoso', 'Si el tumor crece a los lados afecta los pares III, IV y VI (diplopía, ptosis).'),
          hypothalamus: N('Hipotálamo y tallo', 'La compresión del tallo corta la dopamina: la prolactina sube aunque el adenoma no la produzca (efecto de tallo).'),
          'right-internal-carotid-artery': N('Carótida interna', 'Vecina del seno cavernoso; límite de la resección.') } },
        { organ: 'adrenals', find: {
          'right-adrenal-gland': A('Suprarrenales', 'En la enfermedad de Cushing el exceso de ACTH las hiperplasia de forma bilateral; un adenoma suprarrenal da Cushing con ACTH baja.'),
          'left-adrenal-gland': A('Suprarrenal izquierda', 'En el hipopituitarismo, sin ACTH, se atrofian: repón cortisol antes que tiroxina.') } }
      ] },

    hta: { title: 'Hipertensión y daño a órgano blanco', sum: 'La presión sostenida engrosa el corazón, esclerosa el riñón y daña las arterias; a veces la causa es renal o suprarrenal.',
      scales: [
        { organ: 'heart', find: {
          'ventricular-wall': A('Pared del VI', 'Hipertrofia concéntrica (Sokolow-Lyon ≥35 mm): IC con FEVI conservada, arritmias, isquemia.'),
          'left-atrium': A('Aurícula izquierda', 'Se dilata por el ventrículo rígido: fibrilación auricular.'),
          'ascending-aorta': N('Aorta', 'Riesgo de aneurisma y disección (emergencia: sistólica <120 en 20 minutos).') } },
        { organ: 'kidneys', find: {
          'right-renal-artery': A('Arteria renal', 'Estenosis (aterosclerótica en ancianos, displasia fibromuscular en mujeres jóvenes): HTA renovascular; ↑ creatinina >30% con IECA.'),
          'right-kidney': A('Riñón', 'Nefroesclerosis: albuminuria y ERC. La ERC es la causa más común de HTA secundaria.') } },
        { organ: 'adrenals', find: {
          'left-adrenal-gland': A('Suprarrenal', 'Hiperaldosteronismo primario (adenoma o hiperplasia): la causa endocrina más común; hipokalemia y HTA resistente → aldosterona/renina.'),
          'right-adrenal-gland': N('Suprarrenal derecha', 'Feocromocitoma: paroxismos de cefalea, sudoración y palpitaciones → metanefrinas.') } }
      ] },

    lra: { title: 'Lesión renal aguda', sum: 'La creatinina sube en horas o días. La pregunta es dónde está el problema: antes, dentro o después del riñón.',
      scales: [{ organ: 'kidneys', find: {
        'right-renal-artery': A('Arterias renales (prerrenal)', 'Llega poca sangre (hipovolemia, IC, sepsis, AINE, IECA): orina concentrada, FeNa <1%.'),
        'right-kidney': N('Riñones', 'El parénquima se conserva en la prerrenal; si la hipoperfusión dura, aparece necrosis tubular.'),
        'left-kidney': N('Riñón izquierdo', 'Ambos riñones se afectan por igual en la prerrenal.'),
        'right-ureter': N('Ureteros', 'Libres en la prerrenal.') } }],
      stages: [
        { l: 'Prerrenal', t: '~60%', s: 'FeNa <1%, BUN/Cr >20, cilindros hialinos: líquidos y suspender nefrotóxicos.' },
        { l: 'Intrínseca (NTA)', t: 'Hospital', s: 'FeNa >2%, cilindros granulosos “marrón lodoso”: isquemia o tóxicos.',
          find: { kidneys: { 'right-renal-artery': N('Arterias renales', 'El flujo puede estar ya restablecido; el daño está en el túbulo.'),
            'right-kidney': A('Túbulos (NTA)', 'Las células tubulares mueren y forman cilindros; ya no reabsorben sodio (FeNa alta).'),
            'left-kidney': A('Riñón izquierdo', 'Fases: oligúrica (1–3 semanas) → poliúrica → recuperación.') } } },
        { l: 'Posrenal', t: '~5–10%', s: 'Obstrucción bilateral (próstata, litos, tumores): hidronefrosis en el ultrasonido → sonda o nefrostomía.',
          find: { kidneys: { 'right-renal-artery': N('Arterias renales', 'Normales.'), 'right-kidney': A('Riñones (hidronefrosis)', 'La presión retrógrada reduce la filtración.'),
            'right-ureter': A('Uretero derecho', 'Obstruido (lito, tumor) o sin salida por la vejiga (hiperplasia prostática).'), 'left-ureter': A('Uretero izquierdo', 'Para que haya LRA la obstrucción debe ser bilateral o de un riñón único.') } } }
      ] },

    erc: { title: 'Enfermedad renal crónica', sum: 'Se pierden nefronas; las que quedan se hiperfiltran y también se dañan. Riñones pequeños y un corazón que sufre.',
      scales: [
        { organ: 'kidneys', find: {
          'right-kidney': A('Riñones pequeños', 'En el ultrasonido miden <9–10 cm y son ecogénicos (excepto DM, poliquística, amiloidosis). TFG <60 o albuminuria por >3 meses.'),
          'left-kidney': A('Riñón izquierdo', 'Menos EPO (anemia), menos calcitriol (hiperparatiroidismo secundario), retención de K, ácido y fósforo.'),
          'right-renal-artery': N('Arterias renales', 'IECA/ARA-II dilatan la eferente y bajan la presión intraglomerular: nefroprotección.') } },
        { organ: 'heart', find: {
          'ventricular-wall': A('Hipertrofia del VI', 'HTA, sobrecarga y anemia: la primera causa de muerte en ERC es cardiovascular.'),
          'left-ventricle': N('Ventrículo izquierdo', 'Además, la uremia causa pericarditis con frote: indicación de diálisis.') } }
      ] },

    glomerulo: { title: 'Síndrome nefrítico y nefrótico', sum: 'El daño está en el glomérulo: si se inflama, pasa sangre (nefrítico); si falla el podocito, pasa proteína (nefrótico).',
      scales: [
        { organ: 'kidneys', find: {
          'right-kidney': A('Glomérulos', 'Nefrítico: hematuria con cilindros eritrocitarios, HTA y oliguria. Nefrótico: proteinuria >3.5 g, hipoalbuminemia, edema, lípidos.'),
          'left-kidney': A('Riñón izquierdo', 'En la GN rápidamente progresiva se forman semilunas y la función cae en días: urgencia.'),
          'right-renal-artery': N('Vasos renales', 'El nefrótico (sobre todo el membranoso) se complica con trombosis de la vena renal (dolor en flanco, hematuria).') } },
        { organ: 'lungs', find: {
          FMA26661: A('Pulmones (síndrome pulmón-riñón)', 'Goodpasture (anti-MBG, IF lineal) y vasculitis ANCA dan hemorragia alveolar + glomerulonefritis → plasmaféresis.'),
          FMA26662: N('Bronquios', 'La granulomatosis con poliangeítis afecta además vía aérea superior (c-ANCA).') } }
      ] },

    dialisis: { title: 'Accesos para diálisis', sum: 'La hemodiálisis necesita un acceso con mucho flujo; la fístula radiocefálica une una arteria y una vena del antebrazo.',
      scales: [{ organ: 'vessels', focus: ['radial-arteries', 'cephalic-veins', 'brachial-arteries'], find: {
        'radial-arteries': A('Arteria radial', 'Se anastomosa a la vena cefálica: fístula radiocefálica, el acceso de elección (brazo no dominante, madura en 6–8 semanas).'),
        'cephalic-veins': A('Vena cefálica', 'Se “arterializa” con el flujo alto: frémito y soplo continuo. Preserva estas venas en pacientes con ERC (no puncionarlas).'),
        'brachial-arteries': N('Arteria braquial', 'Fístula braquiocefálica si la radial no sirve; con mucho flujo puede dar síndrome de robo (mano fría).'),
        'jugular-veins': N('Yugular interna', 'Catéter temporal (derecha): más bacteriemia por S. aureus.'),
        'subclavian-veins': N('Subclavias', 'Evitar catéteres aquí: la estenosis arruina los accesos futuros del brazo.') } }] },

    anemias: { title: 'Dónde se absorben el hierro y la B12', sum: 'El hierro se absorbe en el duodeno; la B12 necesita factor intrínseco del estómago y se absorbe en el íleon.',
      scales: [
        { organ: 'stomach', find: {
          stomach: A('Estómago (células parietales)', 'Producen ácido y factor intrínseco. En la anemia perniciosa (anticuerpos) o la gastritis atrófica falta B12; la gastrectomía también la causa.'),
          duodenum: A('Duodeno', 'Aquí se absorbe el hierro (DMT1); la celiaca y la cirugía bariátrica causan ferropenia.') } },
        { organ: 'intestines', find: {
          ileum: A('Íleon terminal', 'Absorbe el complejo B12-factor intrínseco: Crohn o resección ileal → déficit de B12.'),
          'ascending-colon': A('Colon derecho', 'Cáncer de colon derecho: ferropenia sin sangrado visible. En adultos con ferropenia sin causa → colonoscopía.'),
          duodenum: N('Duodeno', 'Biopsias aquí diagnostican la celiaca (anemia ferropénica refractaria).') } }
      ] },

    hemoliticas: { title: 'Hemólisis extravascular', sum: 'Los macrófagos del bazo destruyen eritrocitos anormales o cubiertos de anticuerpos: esplenomegalia, ictericia y litos.',
      scales: [{ organ: 'spleen', find: {
        spleen: A('Bazo', 'Destruye esferocitos, células falciformes y eritrocitos con IgG: esplenomegalia. La esplenectomía cura la esferocitosis (vacunar antes).'),
        'splenic-artery': N('Arteria esplénica', 'La embolización o la ligadura son alternativas en hiperesplenismo.'),
        'splenic-vein': N('Vena esplénica', 'Su trombosis (pancreatitis) causa hipertensión portal izquierda e hiperesplenismo.') } }],
      stages: [
        { l: 'Extravascular', t: 'Bazo', s: 'Esferocitosis, autoinmune caliente, drepanocitosis: esplenomegalia, sin hemoglobinuria.' },
        { l: 'Drepanocitosis', t: 'Autoesplenectomía', s: 'Los infartos repetidos encogen el bazo: infecciones por encapsulados y osteomielitis por Salmonella.',
          find: { spleen: { spleen: A('Bazo fibrosado', 'Autoesplenectomía en la infancia por infartos: vacunas (neumococo, meningococo, Hib) y penicilina profiláctica.') } } }
      ] },

    sangrado: { title: 'Hemartrosis en la hemofilia', sum: 'Los defectos de factores (hemofilia A y B) sangran en tejidos profundos: articulaciones y músculos.',
      scales: [{ organ: 'joints', ctx: BONES, find: {
        'articular-capsule-of-knee-joint': A('Rodilla', 'La articulación que más sangra en la hemofilia: hemartrosis espontáneas que terminan en artropatía hemofílica.'),
        'articular-capsule-of-elbow-joint': A('Codo', 'Segunda en frecuencia; reposición inmediata del factor (VIII en A, IX en B) y fisioterapia.'),
        'articular-capsule-of-hip-joint': N('Cadera', 'Menos frecuente; el sangrado del psoas puede simular apendicitis.') } }] },

    leucemias: { title: 'Infiltración por la leucemia', sum: 'Los blastos ocupan la médula y salen a la sangre: infiltran el bazo y los ganglios.',
      scales: [
        { organ: 'spleen', find: {
          spleen: A('Bazo', 'Esplenomegalia por infiltración (más en LLA y LMC). Los blastos desplazan la médula: anemia, neutropenia y trombocitopenia.') } },
        { organ: 'lymph', find: {
          capsule: A('Ganglio infiltrado', 'Adenopatías generalizadas, sobre todo en la LLA (también masa mediastinal en la LLA-T).'),
          follicles: N('Folículos', 'Desaparecen cuando el ganglio se infiltra.') } }
      ] },

    linfo: { title: 'Linfoma en el ganglio', sum: 'Un clon de linfocitos borra la arquitectura normal del ganglio: por eso se necesita la biopsia escisional.',
      scales: [
        { organ: 'lymph', find: {
          follicles: A('Folículos (zona B)', 'El linfoma folicular (t(14;18), BCL2) crece aquí; en el difuso de células grandes B la arquitectura se borra.'),
          paracortex: A('Paracorteza (zona T)', 'Los linfomas T y la hiperplasia viral la expanden.'),
          capsule: A('Cápsula', 'Ganglio grande, indoloro y firme >2 cm por >2–4 semanas: biopsia escisional, no aguja fina.'),
          'afferent-vessels': N('Linfáticos aferentes', 'El Hodgkin se disemina de forma contigua por los linfáticos; el no Hodgkin, de forma salteada.') } },
        { organ: 'spleen', find: {
          spleen: A('Bazo', 'Esplenomegalia en LLC y linfomas indolentes; cuenta para la estadificación.') } }
      ] },

    stda: { title: 'Úlcera duodenal que sangra', sum: 'La úlcera duodenal posterior erosiona la arteria gastroduodenal: la causa clásica de sangrado alto masivo.',
      scales: [
        { organ: 'stomach', find: {
          duodenum: A('Bulbo duodenal', 'Úlcera por H. pylori o AINE. Las anteriores perforan (aire libre); las posteriores sangran.'),
          stomach: A('Estómago', 'Úlcera gástrica (AINE, H. pylori): empeora al comer; se biopsia siempre.'),
          'left-gastric-artery': N('Arteria gástrica izquierda', 'Fuente de sangrado de úlceras de la curvatura menor.') } },
        { organ: 'pancreas', find: {
          'gastroduodenal-artery': K('Arteria gastroduodenal', 'Pasa detrás del bulbo: la úlcera posterior la erosiona → STDA masivo (Forrest Ia–IIa: terapia endoscópica).'),
          duodenum: A('Duodeno', 'La úlcera posterior puede penetrar al páncreas: dolor a la espalda.'),
          'pancreatic-head': N('Cabeza del páncreas', 'Vecina del duodeno.') } }
      ] },

    pancrea: { title: 'Pancreatitis aguda', sum: 'Un lito tapa la ampolla o el alcohol daña el acino: la tripsina se activa dentro del páncreas y lo autodigiere.',
      scales: [{ organ: 'pancreas', find: {
        'pancreatic-head': A('Cabeza del páncreas', 'Inflamación y edema; en la biliar, un lito obstruye la ampolla en el duodeno.'),
        'pancreatic-body-and-tail': A('Cuerpo y cola', 'La necrosis (20%) aparece en la TC a los 5–7 días; si se infecta (gas), antibiótico y drenaje escalonado.'),
        'pancreatic-duct': K('Conducto pancreático', 'Su obstrucción activa las enzimas; la CPRE urgente solo si hay colangitis.'),
        duodenum: N('Duodeno y ampolla', 'Donde se atora el lito biliar.'),
        'splenic-vein': N('Vena esplénica', 'Complicación: trombosis → várices gástricas aisladas.'),
        'portal-vein': N('Vena porta', 'También puede trombosarse.') } }],
      stages: [
        { l: 'Primeras 48 h', t: 'Edematosa', s: 'Dolor en cinturón, lipasa ≥3×: Ringer moderado, analgesia y comida temprana.' },
        { l: 'Después de 4 semanas', t: 'Colecciones', s: 'Pseudoquiste (intersticial) o necrosis encapsulada (necrosante): se drenan solo si dan síntomas o se infectan.',
          find: { pancreas: { 'pancreatic-body-and-tail': A('Pseudoquiste / necrosis encapsulada', 'Colección con pared; puede comprimir el estómago o infectarse.') } } }
      ] },

    erge: { title: 'Reflujo y esófago de Barrett', sum: 'Falla la barrera antirreflujo: el ácido sube al esófago distal y, con los años, la mucosa se vuelve intestinal.',
      scales: [{ organ: 'esophagus', find: {
        esophagus: A('Esófago distal', 'Esofagitis por relajaciones transitorias del EEI; el reflujo crónico da Barrett (metaplasia intestinal) → adenocarcinoma.'),
        stomach: A('Unión esofagogástrica', 'La hernia hiatal por deslizamiento desplaza el EEI arriba del diafragma: más reflujo.'),
        trachea: N('Tráquea y bronquios', 'Manifestaciones extraesofágicas: tos crónica y asma por microaspiración o reflejo vagal.'),
        'recurrent-laryngeal-nerves': N('Laringe', 'Laringitis por reflujo: disfonía.'),
        'left-vagus-nerve': N('Vagos', 'Acompañan al esófago a través del hiato.') } }] },

    deglucion: { title: 'Anatomía de la disfagia', sum: 'El esófago pasa entre estructuras que pueden comprimirlo y tiene un esfínter inferior que en la acalasia no se relaja.',
      scales: [{ organ: 'esophagus', find: {
        esophagus: A('Esófago', 'Músculo estriado arriba, liso en los 2/3 distales. En la acalasia hay aperistalsis y el EEI no se relaja: “pico de pájaro”.'),
        stomach: A('Esfínter esofágico inferior', 'Hipertónico en la acalasia (IRP alta); sin tono en la esclerodermia.'),
        'left-atrium': N('Aurícula izquierda', 'Si se dilata (estenosis mitral) comprime el esófago: disfagia.'),
        'aortic-arch': N('Arco aórtico', 'Una arteria subclavia aberrante puede comprimirlo (disfagia lusoria).'),
        'recurrent-laryngeal-nerves': N('Recurrentes', 'La disfonía con disfagia sugiere cáncer infiltrante o compresión (Ortner).'),
        'left-vagus-nerve': N('Vagos', 'En la acalasia se pierden las neuronas inhibitorias del plexo mientérico (idiopática o Chagas).') } }] },

    diarrea: { title: 'Dónde ocurre cada diarrea', sum: 'El delgado proximal absorbe hierro y folato; el íleon, B12 y sales biliares; el colon, agua. El sitio explica la clínica.',
      scales: [{ organ: 'intestines', find: {
        duodenum: A('Duodeno', 'Celiaca: atrofia vellositaria (biopsia duodenal); Giardia: esteatorrea.'),
        jejunum: A('Yeyuno', 'Malabsorción y diarrea osmótica (lactosa); Whipple con macrófagos PAS+.'),
        ileum: A('Íleon terminal', 'Crohn, resección: déficit de B12 y diarrea por ácidos biliares.'),
        'ascending-colon': N('Colon', 'Diarrea inflamatoria con sangre (Shigella, Campylobacter, amiba, C. difficile, CUCI).'),
        rectum: N('Recto', 'Tenesmo y disentería: colitis distal.') } }] },

    sii: { title: 'Síndrome de intestino irritable', sum: 'El intestino es estructuralmente normal: el problema es la sensibilidad y la motilidad.',
      scales: [{ organ: 'intestines', find: {
        'descending-colon': A('Colon descendente y sigmoides', 'Dolor tipo cólico en fosa iliaca izquierda que mejora al evacuar: hipersensibilidad visceral.'),
        'transverse-colon': N('Colon', 'Motilidad alterada: diarrea (SII-D) o estreñimiento (SII-E).'),
        rectum: N('Recto', 'Sensación de evacuación incompleta.'),
        ileum: N('Íleon', 'Descarta Crohn (calprotectina) y malabsorción de ácidos biliares si hay diarrea.') } }] },

    ar: { title: 'Artritis reumatoide', sum: 'Sinovitis simétrica de articulaciones pequeñas que destruye cartílago y hueso; respeta las interfalángicas distales.',
      scales: [{ organ: 'joints', ctx: BONES, find: {
        'articular-capsules-of-metacarpophalangeal-joints': A('Metacarpofalángicas', 'Sinovitis simétrica: pannus que erosiona; desviación cubital tardía.'),
        'articular-capsules-of-proximal-interphalangeal-joints': A('Interfalángicas proximales', 'Cuello de cisne y boutonnière.'),
        'articular-capsule-of-radiocarpal-joint': A('Muñecas', 'Muy afectadas; túnel del carpo.'),
        'articular-capsules-of-metatarsophalangeal-joints': A('Metatarsofalángicas', 'Dolor al apretar el antepié (squeeze test) desde el inicio.'),
        'articular-capsules-of-distal-interphalangeal-joints': N('Interfalángicas distales', 'Respetadas en la AR (a diferencia de la OA y la psoriásica).'),
        'articular-capsule-of-knee-joint': N('Rodillas', 'Pueden afectarse; quiste de Baker.') } }] },

    gota: { title: 'Gota', sum: 'Cristales de urato en articulaciones frías y con trauma previo: la primera metatarsofalángica es la clásica.',
      scales: [{ organ: 'joints', ctx: BONES, find: {
        'articular-capsules-of-metatarsophalangeal-joints': A('Primera metatarsofalángica (podagra)', 'Monoartritis súbita nocturna: cristales en aguja con birrefringencia negativa en la artrocentesis.'),
        'articular-capsule-of-knee-joint': A('Rodilla', 'También frecuente; en el anciano piensa además en pseudogota (romboides positivos, condrocalcinosis).'),
        'articular-capsule-of-elbow-joint': N('Codo (olécranon)', 'Bursitis y tofos en la gota crónica.'),
        'articular-capsule-of-radiocarpal-joint': N('Muñeca', 'Sitio típico de la pseudogota (CPPD).') } }] },

    espondilo: { title: 'Espondiloartritis axial', sum: 'La inflamación empieza en las sacroilíacas y en las entesis; luego el hueso nuevo puentea las vértebras.',
      scales: [{ organ: 'joints', ctx: BONES, find: {
        'interosseous-sacro-iliac-ligament': A('Sacroilíacas', 'Sacroileítis bilateral: edema óseo en la RM; esclerosis, erosiones y fusión en la Rx.'),
        'anterior-sacro-iliac-ligament': A('Sacroilíaca anterior', 'Dolor glúteo alternante; lumbalgia inflamatoria <45 años que mejora con el ejercicio.'),
        'anterior-longitudinal-ligament': A('Ligamento longitudinal anterior', 'Sindesmofitos que unen las vértebras: columna en caña de bambú.'),
        'lumbar-intervertebral-discs': N('Discos lumbares', 'Se calcifican los anillos; Schober <5 cm.'),
        'articular-capsule-of-hip-joint': N('Caderas', 'Su afección es de mal pronóstico.') } }] },

    oa: { title: 'Osteoartritis', sum: 'El cartílago se adelgaza y el hueso responde con osteofitos; dolor mecánico y rigidez breve.',
      scales: [{ organ: 'joints', ctx: BONES, find: {
        'articular-capsule-of-knee-joint': A('Rodilla', 'La más afectada: pinzamiento asimétrico (compartimento medial → varo), osteofitos y esclerosis.'),
        'medial-meniscus': A('Menisco medial', 'Su lesión o resección previa acelera la OA.'),
        'articular-capsules-of-distal-interphalangeal-joints': A('Interfalángicas distales', 'Nódulos de Heberden.'),
        'articular-capsules-of-proximal-interphalangeal-joints': A('Interfalángicas proximales', 'Nódulos de Bouchard.'),
        'articular-capsule-of-hip-joint': A('Cadera', 'Dolor inguinal y pérdida de la rotación interna; prótesis si falla todo.'),
        'articular-capsules-of-metacarpophalangeal-joints': N('Metacarpofalángicas', 'Respetadas en la OA primaria; si se afectan, busca hemocromatosis o CPPD.') } }] },

    abordaje: { title: 'Patrones articulares', sum: 'El número, la simetría y las articulaciones afectadas orientan el diagnóstico antes que cualquier laboratorio.',
      scales: [{ organ: 'joints', ctx: BONES, find: {
        'articular-capsule-of-knee-joint': A('Monoartritis: rodilla', 'Séptica hasta demostrar lo contrario: artrocentesis (células, Gram, cultivo, cristales); >50 000 leucocitos = séptica.'),
        'articular-capsules-of-metatarsophalangeal-joints': N('1.ª MTF', 'Monoartritis aguda nocturna: gota.') } }],
      stages: [
        { l: 'Monoartritis aguda', t: 'Urgencia', s: 'Séptica, gota, pseudogota o trauma: artrocentesis antes del antibiótico.' },
        { l: 'Poliartritis simétrica', t: 'Crónica', s: 'Manos y muñecas, rigidez >1 h: artritis reumatoide (anti-CCP).',
          find: { joints: { 'articular-capsule-of-knee-joint': N('Rodilla', 'Puede participar.'),
            'articular-capsules-of-metacarpophalangeal-joints': A('MCF', 'Simétricas.'), 'articular-capsules-of-proximal-interphalangeal-joints': A('IFP', 'Simétricas.'),
            'articular-capsule-of-radiocarpal-joint': A('Muñecas', 'Simétricas.'), 'articular-capsules-of-metatarsophalangeal-joints': N('MTF', 'También en la AR.') } } },
        { l: 'Oligoartritis + axial', t: 'Asimétrica', s: 'Rodilla o tobillo, sacroilíacas, entesitis, uveítis: espondiloartritis (HLA-B27).',
          find: { joints: { 'articular-capsule-of-knee-joint': A('Rodilla', 'Oligoartritis asimétrica de miembros inferiores.'),
            'interosseous-sacro-iliac-ligament': A('Sacroilíacas', 'Lumbalgia inflamatoria.'), 'articular-capsules-of-metatarsophalangeal-joints': N('Dedos del pie', 'Dactilitis (“dedo en salchicha”).') } } }
      ] }
  }
};
