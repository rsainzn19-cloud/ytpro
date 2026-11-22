// Tema 43 · Pruebas hepáticas y hepatitis (Gastroenterología, semana 9)
const T = { topic: 'hepatitis', subj: 'gastro' };
const q = (o) => ({ ...T, ...o });
const SRC = { short: 'De tu Guía Gastro', vs: 'tu guía', name: 'Guía Gastro · Ximena Cors Cepeda (EMIS 5)', url: 'https://docs.google.com/document/d/16oAVd4UCRwVvWLOsO8DuHlzTN2RKAGSIKTtHIAqqnq4/edit' };

export default {
  lessons: {
    hepatitis: {
      hook: 'Las pruebas hepáticas tienen dos patrones: hepatocelular (transaminasas) y colestásico (FA con GGT). En hepatitis B, el HBsAg dice que hay virus, el anti-HBc IgM que es aguda y el anti-HBs que hay inmunidad.',
      nn: [], yt: 'liver function tests patterns hepatitis B serology',
      video: [
        { ch: 'Leer las pruebas hepáticas', sc: [
          { v: { k: 'title', t: 'Pruebas hepáticas y hepatitis', s: 'Semana 9 · Gastroenterología' },
            say: 'Semana nueve: el hígado. Las pruebas de función hepática en realidad son de daño, de colestasis y de función. Hay que saber leerlas por patrón.' },
          { v: { k: 'vs', a: 'Hepatocelular', b: 'Colestásico', rows: [['Sube más', 'ALT y AST', 'FA con GGT'], ['Causas', 'Virus, alcohol, fármacos, isquemia', 'Obstrucción biliar, CBP, CEP, fármacos'], ['Siguiente estudio', 'Serologías', 'Ultrasonido']] },
            say: 'Patrón hepatocelular: suben las transaminasas, por virus, alcohol, fármacos o isquemia. Patrón colestásico: sube la fosfatasa alcalina junto con la GGT, por obstrucción biliar o enfermedades de los conductos; el primer estudio es el ultrasonido.' },
          { v: { k: 'list', t: 'Pistas por números', items: ['Miles: virus, paracetamol, isquemia', 'AST el doble que ALT: alcohol', 'Albúmina e INR: función', 'Bilirrubina indirecta sola: Gilbert o hemólisis'] },
            say: 'Pistas: transaminasas en miles sugieren virus, paracetamol o hígado de choque. Si la AST es más del doble que la ALT, piensa en alcohol. La función real la miden la albúmina y el INR.' }
        ] },
        { ch: 'Hepatitis B', sc: [
          { v: { k: 'case', t: 'Ictericia en un joven', p: { name: 'Mauricio', age: 26, sex: 'H', skin: '#C98B62', hair: '#2A1A12', gown: '#FF9B3D' }, text: 'Malestar, náusea, coluria e ictericia. ALT 2400. Relaciones sexuales sin protección.', vit: { ALT: '2400', BT: '6.2' } },
            say: 'Mauricio tiene veintiséis años, malestar, náusea, orina oscura e ictericia. Su ALT está en dos mil cuatrocientos. Tuvo relaciones sexuales sin protección.' },
          { v: { k: 'vs', a: 'Qué indica', b: 'Detalle', rows: [['HBsAg', 'Hay virus', 'Más de 6 meses: crónica'], ['Anti-HBc IgM', 'Infección aguda', 'Ventana: puede ser el único'], ['Anti-HBs', 'Inmunidad', 'Solo vacuna si anti-HBc negativo'], ['HBeAg', 'Replicación alta', 'Muy contagioso']] },
            say: 'Los marcadores de hepatitis B. El antígeno de superficie dice que hay virus; si dura más de seis meses, es crónica. El anticore IgM dice que es aguda, y en el periodo de ventana puede ser el único positivo. El anticuerpo de superficie dice que hay inmunidad: si el anticore es negativo, la inmunidad es por vacuna.' },
          { v: { k: 'quiz', q: 'HBsAg negativo, anti-HBs positivo, anti-HBc negativo. ¿Qué es?', opts: ['Infección resuelta', 'Vacunado', 'Hepatitis crónica'], a: 1 },
            say: 'Pausa. Antígeno de superficie negativo, anticuerpo de superficie positivo y anticore negativo. ¿Qué es?',
            exp: 'Vacunado. La vacuna solo contiene antígeno de superficie, así que solo produce anti HBs. Si también tuviera anticore, sería una infección resuelta.' },
          { v: { k: 'mnemo', t: 'S de superficie = Sí hay virus; anti-S = Seguro', d: 'HBsAg: infectado. Anti-HBs: inmune. Anti-HBc IgM: aguda. HBeAg: replicando.' },
            say: 'Llévate esto: el antígeno de superficie dice sí hay virus, el anticuerpo de superficie dice estás seguro, y el anticore IgM dice que es aguda.' }
        ] }
      ],
      sections: [
        { h: 'Pruebas hepáticas por patrón', html: `
<ul>
<li><b>Hepatocelular</b>: ALT y AST (ALT más específica del hígado). <b>Miles</b>: virus agudos, <b>paracetamol</b>, isquemia (“hígado de choque”), hepatitis autoinmune. <b>AST:ALT &gt;2</b> con AST &lt;300–400: <b>alcohol</b>. Cientos: hígado graso, hepatitis crónicas, fármacos.</li>
<li><b>Colestásico</b>: <b>FA</b> alta con <b>GGT</b> alta (si la GGT es normal, la FA es ósea). Causas: coledocolitiasis, tumor de páncreas o vía biliar, colangitis biliar primaria (mujer, antimitocondriales), colangitis esclerosante (CUCI), fármacos (amoxicilina-clavulanato, estrógenos). Primer estudio: <b>USG</b> (¿vía biliar dilatada?).</li>
<li><b>Bilirrubina</b>: indirecta sola → <b>Gilbert</b> (ayuno, estrés; benigno) o hemólisis; directa → colestasis o daño hepatocelular.</li>
<li><b>Función</b>: <b>albúmina</b> (crónica) e <b>INR/TP</b> (aguda, el mejor marcador pronóstico en falla hepática aguda); también glucosa y plaquetas.</li>
</ul>` },
        { h: 'Hepatitis virales', html: `
<div class="tablewrap"><table class="mini">
<tr><th>Virus</th><th>Transmisión</th><th>Crónica</th><th>Puntos clave</th></tr>
<tr><td><b>A</b> (ARN)</td><td>Fecal-oral</td><td>No</td><td>Anti-VHA IgM; autolimitada; vacuna</td></tr>
<tr><td><b>B</b> (ADN)</td><td>Sexual, sangre, vertical</td><td>5 % adultos, 90 % neonatos</td><td>Cirrosis, <b>hepatocarcinoma aun sin cirrosis</b>; vacuna</td></tr>
<tr><td><b>C</b> (ARN)</td><td>Sangre (drogas IV, transfusiones antes de 1992)</td><td><b>75–85 %</b></td><td>Anti-VHC → carga viral; <b>curable</b> con antivirales de acción directa; crioglobulinemia, GN membranoproliferativa</td></tr>
<tr><td><b>D</b></td><td>Sangre</td><td>Sí</td><td>Solo con VHB (coinfección o sobreinfección)</td></tr>
<tr><td><b>E</b></td><td>Fecal-oral</td><td>No (salvo inmunosuprimidos)</td><td><b>Falla hepática fulminante en embarazadas</b></td></tr>
</table></div>
<ul>
<li>Clínica de la aguda: pródromo (malestar, náusea, artralgias, fiebre) → ictericia, coluria, acolia, dolor en hipocondrio derecho. Fulminante: encefalopatía + INR ≥1.5 en &lt;26 semanas → centro de trasplante.</li>
</ul>` },
        { h: 'Serología de la hepatitis B', html: `
<div class="tablewrap"><table class="mini">
<tr><th>Situación</th><th>HBsAg</th><th>Anti-HBs</th><th>Anti-HBc total</th><th>Anti-HBc IgM</th></tr>
<tr><td>Nunca expuesto</td><td>−</td><td>−</td><td>−</td><td>−</td></tr>
<tr><td><b>Vacunado</b></td><td>−</td><td>+</td><td>−</td><td>−</td></tr>
<tr><td>Infección resuelta</td><td>−</td><td>+</td><td>+</td><td>−</td></tr>
<tr><td><b>Aguda</b></td><td>+</td><td>−</td><td>+</td><td>+</td></tr>
<tr><td>Periodo de ventana</td><td>−</td><td>−</td><td>+</td><td>+</td></tr>
<tr><td><b>Crónica</b></td><td>+ (&gt;6 meses)</td><td>−</td><td>+</td><td>−</td></tr>
</table></div>
<ul>
<li><b>HBeAg</b> y <b>ADN del VHB</b>: replicación e infectividad. Tratamiento de la crónica (si ADN alto + ALT alta o fibrosis/cirrosis): <b>tenofovir o entecavir</b>. Tamizaje de hepatocarcinoma con USG ± AFP cada 6 meses en cirróticos y algunos no cirróticos.</li>
<li>Profilaxis posexposición: vacuna + inmunoglobulina (HBIG) si no está inmunizado; recién nacido de madre HBsAg+: vacuna + HBIG en &lt;12 h.</li>
<li>Antes de quimioterapia o rituximab: tamizar VHB (reactivación).</li>
</ul>` },
        { h: 'Otras hepatitis y daño por fármacos', html: `
<ul>
<li><b>Alcohólica</b>: AST:ALT &gt;2, GGT alta, ictericia, fiebre, hepatomegalia dolorosa. Grave (función discriminante de Maddrey ≥32 o MELD &gt;20) → <b>prednisolona</b>; abstinencia.</li>
<li><b>Paracetamol</b>: dosis &gt;7.5–10 g o &gt;150 mg/kg; nomograma de Rumack-Matthew (desde las 4 h) → <b>N-acetilcisteína</b> (dar si la dosis es tóxica o el tiempo es desconocido; mejor en &lt;8 h).</li>
<li><b>Autoinmune</b>: mujer joven, IgG alta, ANA y anti-músculo liso (tipo 1), anti-LKM1 (tipo 2) → prednisona ± azatioprina.</li>
<li><b>Hígado graso (MASLD)</b>: obesidad, DM, síndrome metabólico; ALT &gt; AST leve; FIB-4 para fibrosis; tratamiento: bajar de peso 7–10 %.</li>
<li><b>Wilson</b> (joven, anillos de Kayser-Fleischer, ceruloplasmina baja) y <b>hemocromatosis</b> (saturación de transferrina &gt;45 %, ferritina alta, HFE C282Y; flebotomías).</li>
</ul>` },
        { h: 'Cómo lo preguntan en el examen', html: `
<ul>
<li>ALT en miles + anti-HBc IgM positivo → <b>hepatitis B aguda</b>.</li>
<li>Solo anti-HBs positivo → <b>vacunado</b>.</li>
<li>HBsAg positivo por más de 6 meses → <b>crónica</b> → carga viral, tenofovir/entecavir.</li>
<li>Embarazada con hepatitis fulminante tras viaje → <b>hepatitis E</b>.</li>
<li>Bebedor con AST 240, ALT 90 → <b>alcohol</b>.</li>
<li>Intento suicida con paracetamol hace 6 h → <b>N-acetilcisteína</b>.</li>
<li>FA alta con GGT normal → origen <b>óseo</b>.</li>
</ul>` }
      ],
      mnemo: { t: 'S = Sí hay virus · anti-S = Seguro · core IgM = reciente', d: 'HBsAg: infectado. Anti-HBs: inmune (solo él = vacuna). Anti-HBc IgM: aguda (puede ser el único en la ventana). HBeAg: replicando.' },
      pearl: 'El INR (TP) es el mejor marcador de función hepática en el daño agudo; la albúmina refleja la función en semanas.',
      trap: 'En el periodo de ventana de la hepatitis B el HBsAg ya desapareció y el anti-HBs aún no aparece: el único marcador positivo es el anti-HBc IgM.',
      guide: [
        'Hepatitis C: hoy se trata a todos con antivirales de acción directa (8–12 semanas, curación >95 %); tamizaje único a todo adulto ≥18 años.',
        'Tu guía usa “ALT > AST en miles” para viral; en la práctica también la isquemia y el paracetamol las suben a miles.'
      ],
      refs: [
        'Kwo PY, et al. ACG Clinical Guideline: Evaluation of abnormal liver chemistries. Am J Gastroenterol 2017.',
        'Terrault NA, et al. Update on prevention, diagnosis, and treatment of chronic hepatitis B: AASLD 2018 guidance. Hepatology 2018.',
        'AASLD-IDSA. HCV Guidance: Recommendations for testing, managing, and treating hepatitis C. 2023.',
        'Crabb DW, et al. Diagnosis and treatment of alcohol-associated liver diseases: AASLD Practice Guidance. Hepatology 2020.'
      ]
    }
  },

  guias: {
    hepatitis: { src: SRC,
      puntos: [
        'AST y ALT: daño. Alcohol AST &gt; ALT (2:1); viral ALT &gt; AST en miles; metabólica en cientos.',
        'FA alta con transaminasas: colestasis; GGT alta confirma origen hepático.',
        'Albúmina (síntesis) y TP (factores de coagulación) miden la función.',
        'Hepatitis aguda: viral (VHA la más común), alcohol, paracetamol; crónica: VHC, alcohol, autoinmune (ANA y anti-músculo liso).',
        'Tabla de serología de VHB: vacunado (solo anti-HBs), resuelta (anti-HBs + anti-HBc IgG), aguda (HBsAg + anti-HBc IgM), crónica (HBsAg + anti-HBc IgG).'
      ],
      ojo: ['El tratamiento de la hepatitis C crónica ya no es interferón: antivirales de acción directa (sofosbuvir/velpatasvir, glecaprevir/pibrentasvir) con curación &gt;95 %.'],
      cards: [['Hepatitis autoinmune tipo 1', 'ANA y anti-músculo liso; IgG alta']] }
  },

  cards: [
    ['Patrón hepatocelular', 'ALT/AST altas'],
    ['Patrón colestásico', 'FA alta con GGT alta → USG'],
    ['FA alta con GGT normal', 'Origen óseo'],
    ['AST:ALT >2', 'Hepatopatía alcohólica'],
    ['Transaminasas en miles', 'Virus, paracetamol, isquemia, autoinmune'],
    ['Mejor marcador de función en daño agudo', 'INR / tiempo de protrombina'],
    ['Bilirrubina indirecta aislada con ayuno', 'Síndrome de Gilbert'],
    ['HBsAg', 'Infección (aguda o crónica)'],
    ['Solo anti-HBs positivo', 'Vacunado'],
    ['Anti-HBs + anti-HBc IgG', 'Infección resuelta'],
    ['Anti-HBc IgM', 'Infección aguda (único marcador en la ventana)'],
    ['Hepatitis B crónica', 'HBsAg >6 meses; tenofovir o entecavir'],
    ['Hepatitis que más cronifica', 'C (75–85 %)'],
    ['Hepatitis grave en embarazadas', 'E'],
    ['Hepatitis D', 'Solo con VHB'],
    ['Antídoto del paracetamol', 'N-acetilcisteína'],
    ['Hepatitis autoinmune tipo 1', 'ANA, anti-músculo liso, IgG alta']
  ],

  questions: [
    q({ id: 'hepatitis-01', dif: 1, stem: 'Joven con ictericia, ALT 2,300 y AST 1,800. HBsAg positivo, anti-HBc IgM positivo, anti-HBs negativo. ¿Diagnóstico?', opts: ['Hepatitis B crónica', 'Hepatitis B aguda', 'Vacunado', 'Infección resuelta', 'Hepatitis C'], ans: 1,
      exp: 'HBsAg + anti-HBc IgM = infección aguda por VHB.', why: ['La crónica tiene anti-HBc IgG y >6 meses.', '', 'Tendría solo anti-HBs.', 'No tendría HBsAg.', 'Serología de B.'], ref: 'AASLD 2018' }),
    q({ id: 'hepatitis-02', dif: 1, stem: 'Trabajador de salud con HBsAg negativo, anti-HBs positivo y anti-HBc negativo. ¿Interpretación?', opts: ['Infección resuelta', 'Inmunidad por vacuna', 'Infección aguda', 'Portador crónico', 'Periodo de ventana'], ans: 1,
      exp: 'La vacuna solo induce anti-HBs; el anti-HBc indica contacto con el virus.', why: ['Tendría anti-HBc.', '', 'Tendría HBsAg.', 'Tendría HBsAg.', 'Tendría anti-HBc IgM.'], ref: 'AASLD 2018' }),
    q({ id: 'hepatitis-03', dif: 2, stem: 'Paciente con HBsAg negativo, anti-HBs negativo y anti-HBc IgM positivo. ¿Qué etapa es?', opts: ['Vacunado', 'Periodo de ventana de la infección aguda', 'Crónica', 'Nunca expuesto', 'Falso positivo siempre'], ans: 1,
      exp: 'En la ventana el HBsAg ya bajó y el anti-HBs aún no aparece: solo el anti-HBc IgM es positivo.', why: ['No tendría anti-HBc.', '', 'Tendría HBsAg.', 'Tiene anti-HBc.', 'Es un patrón reconocido.'], ref: 'AASLD 2018' }),
    q({ id: 'hepatitis-04', dif: 2, stem: 'Paciente con HBsAg positivo por 9 meses, ADN del VHB alto y ALT elevada. ¿Tratamiento?', opts: ['Interferón como primera opción siempre', 'Tenofovir o entecavir', 'Ribavirina', 'Observación sin tratamiento', 'Lamivudina en monoterapia'], ans: 1,
      exp: 'Hepatitis B crónica activa: análogos de nucleós(t)idos con alta barrera de resistencia (tenofovir, entecavir).', why: ['Uso limitado.', '', 'Es para VHC (antes).', 'Tiene indicación.', 'Alta resistencia.'], ref: 'AASLD 2018' }),
    q({ id: 'hepatitis-05', dif: 2, stem: 'Hombre bebedor con AST 260, ALT 95, GGT 410, hepatomegalia dolorosa, ictericia y fiebre. ¿Diagnóstico?', opts: ['Hepatitis viral aguda', 'Hepatitis alcohólica', 'Colecistitis', 'Hepatitis autoinmune', 'Hígado graso no alcohólico'], ans: 1,
      exp: 'AST:ALT >2 con AST <300 y GGT alta, en bebedor: hepatitis alcohólica. Si es grave (Maddrey ≥32): prednisolona.', why: ['Las transaminasas estarían en miles.', '', 'No hay datos de vía biliar.', 'Patrón y contexto distintos.', 'La ALT predomina.'], ref: 'AASLD 2020' }),
    q({ id: 'hepatitis-06', dif: 2, stem: 'Adolescente que ingirió 15 g de paracetamol hace 5 horas, asintomática. ¿Conducta?', opts: ['Esperar síntomas', 'Iniciar N-acetilcisteína (con nivel a las 4 h y nomograma)', 'Lavado gástrico y alta', 'Vitamina K', 'Hemodiálisis'], ans: 1,
      exp: 'Dosis claramente tóxica: N-acetilcisteína lo antes posible (ideal <8 h); el nivel sérico y el nomograma guían la decisión.', why: ['El daño aparece en 24–72 h; esperar es letal.', '', 'Insuficiente.', 'No es antídoto.', 'No es primera línea.'], ref: 'AASLD 2020' }),
    q({ id: 'hepatitis-07', dif: 2, stem: 'Embarazada de 30 semanas que regresó de la India con ictericia, encefalopatía e INR 2.8. ¿Virus más probable?', opts: ['A', 'B', 'C', 'E', 'D'], ans: 3,
      exp: 'La hepatitis E (fecal-oral, endémica en Asia) causa falla hepática fulminante con alta mortalidad en embarazadas.', why: ['Rara vez fulminante en embarazo.', 'Posible, pero el contexto es típico de E.', 'Rara vez aguda grave.', '', 'Requiere VHB.'], ref: 'Kwo, ACG 2017' }),
    q({ id: 'hepatitis-08', dif: 1, stem: '¿Qué virus de hepatitis evoluciona con más frecuencia a la cronicidad en adultos?', opts: ['A', 'B', 'C', 'E', 'Todos igual'], ans: 2,
      exp: 'El VHC cronifica en 75–85 %; el VHB solo en ~5 % de adultos (pero 90 % de neonatos).', why: ['No cronifica.', 'Cronifica poco en adultos.', '', 'No cronifica salvo inmunosupresión.', 'Incorrecto.'], ref: 'AASLD-IDSA 2023' }),
    q({ id: 'hepatitis-09', dif: 2, stem: 'Paciente con anti-VHC positivo. ¿Siguiente estudio?', opts: ['Biopsia hepática', 'Carga viral (ARN del VHC)', 'Repetir anti-VHC', 'Genotipo antes que nada', 'Ninguno'], ans: 1,
      exp: 'El anticuerpo no distingue infección actual de resuelta; el ARN confirma viremia.', why: ['No es necesaria.', '', 'No aporta.', 'Va después y ya no siempre se requiere.', 'Debe confirmarse.'], ref: 'AASLD-IDSA 2023' }),
    q({ id: 'hepatitis-10', dif: 2, stem: 'Paciente con hepatitis C crónica con ARN positivo. ¿Tratamiento actual?', opts: ['Interferón pegilado + ribavirina', 'Antivirales de acción directa (por ejemplo sofosbuvir/velpatasvir) 12 semanas', 'Tenofovir', 'Esteroides', 'Trasplante de entrada'], ans: 1,
      exp: 'Los antivirales de acción directa curan >95 % con pocos efectos.', why: ['Obsoleto.', '', 'Es para VHB.', 'No.', 'Solo en cirrosis descompensada o hepatocarcinoma seleccionados.'], ref: 'AASLD-IDSA 2023' }),
    q({ id: 'hepatitis-11', dif: 2, stem: 'Paciente con FA 480 y GGT 520, bilirrubina directa alta, transaminasas poco elevadas. ¿Primer estudio de imagen?', opts: ['TC con contraste', 'Ultrasonido abdominal', 'CPRE', 'Biopsia', 'Gammagrama óseo'], ans: 1,
      exp: 'Patrón colestásico: el USG define si la vía biliar está dilatada (obstrucción extrahepática) o no (colestasis intrahepática).', why: ['No es el inicial.', '', 'Es terapéutica, no el primer estudio.', 'No es el inicial.', 'La GGT alta indica origen hepático.'], ref: 'Kwo, ACG 2017' }),
    q({ id: 'hepatitis-12', dif: 2, stem: 'Joven sano con ictericia leve cuando ayuna o está enfermo. Bilirrubina indirecta 2.4, resto de pruebas y BH normales. ¿Diagnóstico?', opts: ['Hemólisis', 'Síndrome de Gilbert', 'Crigler-Najjar tipo 1', 'Dubin-Johnson', 'Hepatitis A'], ans: 1,
      exp: 'Gilbert: deficiencia leve de UDP-glucuronosiltransferasa; benigno, no requiere tratamiento.', why: ['La BH, LDH y reticulocitos estarían alterados.', '', 'Es neonatal y grave.', 'Es bilirrubina directa.', 'Las transaminasas estarían altas.'], ref: 'Kwo, ACG 2017' }),
    q({ id: 'hepatitis-13', dif: 2, stem: 'Mujer de 28 años con transaminasas en 800, IgG elevada, ANA y anticuerpos anti-músculo liso positivos. ¿Tratamiento?', opts: ['Antivirales', 'Prednisona ± azatioprina', 'Flebotomías', 'Quelantes de cobre', 'Ursodiol'], ans: 1,
      exp: 'Hepatitis autoinmune tipo 1: inmunosupresión.', why: ['No es viral.', '', 'Es para hemocromatosis.', 'Es para Wilson.', 'Es para colangitis biliar primaria.'], ref: 'Kwo, ACG 2017' }),
    q({ id: 'hepatitis-14', dif: 2, stem: 'Recién nacido de madre HBsAg positivo. ¿Qué indicas?', opts: ['Nada hasta los 2 meses', 'Vacuna contra VHB + inmunoglobulina (HBIG) en las primeras 12 horas', 'Solo HBIG', 'Tenofovir al recién nacido', 'Cesárea obligatoria'], ans: 1,
      exp: 'La inmunoprofilaxis combinada al nacer previene >90 % de la transmisión vertical.', why: ['Riesgo de infección crónica (90 %).', '', 'Insuficiente sola.', 'No es la medida.', 'No reduce el riesgo de forma significativa.'], ref: 'AASLD 2018' }),
    q({ id: 'hepatitis-15', dif: 3, stem: 'Paciente que iniciará rituximab. Tiene HBsAg negativo y anti-HBc positivo. ¿Qué haces?', opts: ['Nada', 'Profilaxis antiviral (entecavir/tenofovir) o vigilancia estrecha con ADN del VHB', 'Vacunar y listo', 'Suspender el rituximab', 'Interferón'], ans: 1,
      exp: 'El rituximab reactiva el VHB aun con HBsAg negativo y anti-HBc positivo; se recomienda profilaxis.', why: ['Riesgo de reactivación grave.', '', 'No previene la reactivación.', 'No es necesario.', 'No.'], ref: 'AASLD 2018' }),
    q({ id: 'hepatitis-16', dif: 2, stem: 'Paciente con ALT de 4,800 tras un episodio de choque séptico, con recuperación rápida de las cifras en 3 días. ¿Diagnóstico?', opts: ['Hepatitis viral', 'Hepatitis isquémica (hígado de choque)', 'Alcohol', 'Wilson', 'Hepatitis autoinmune'], ans: 1,
      exp: 'La isquemia eleva las transaminasas a miles con LDH muy alta y descenso rápido al restaurar la perfusión.', why: ['El descenso sería más lento.', '', 'No da miles.', 'No hay datos.', 'No hay datos.'], ref: 'Kwo, ACG 2017' }),
    q({ id: 'hepatitis-17', dif: 2, stem: 'Hombre de 45 años con DM, artralgias de 2ª-3ª MCF, piel bronceada, ferritina 1,800 y saturación de transferrina 78 %. ¿Diagnóstico y tratamiento?', opts: ['Wilson; penicilamina', 'Hemocromatosis hereditaria; flebotomías', 'Hepatitis C; antivirales', 'Porfiria; hemina', 'Autoinmune; esteroides'], ans: 1,
      exp: 'Sobrecarga de hierro (HFE C282Y): “diabetes bronceada”, artropatía, cirrosis, miocardiopatía. Flebotomías periódicas.', why: ['Es de cobre, joven, neuropsiquiátrico.', '', 'No explica la sobrecarga.', 'No relacionado.', 'No relacionado.'], ref: 'Kwo, ACG 2017' }),
    q({ id: 'hepatitis-18', dif: 1, stem: '¿Cuál es la vía de transmisión de la hepatitis A?', opts: ['Sanguínea', 'Fecal-oral', 'Sexual exclusiva', 'Vertical', 'Respiratoria'], ans: 1,
      exp: 'Agua y alimentos contaminados; autolimitada, no cronifica; hay vacuna.', why: ['Es B, C, D.', '', 'Puede ocurrir pero no es la principal.', 'Es B sobre todo.', 'No.'], ref: 'Kwo, ACG 2017' }),
    q({ id: 'hepatitis-19', dif: 2, stem: 'Paciente obeso con DM2, ALT 70, AST 45 y USG con hígado hiperecogénico; sin alcohol. ¿Tratamiento principal?', opts: ['Ursodiol', 'Pérdida de peso del 7–10 % y control metabólico', 'Prednisona', 'Antivirales', 'Flebotomías'], ans: 1,
      exp: 'Esteatosis asociada a disfunción metabólica (MASLD): bajar de peso es lo que mejora la inflamación y la fibrosis; evaluar fibrosis con FIB-4.', why: ['Sin beneficio claro.', '', 'No.', 'No es viral.', 'No es hemocromatosis.'], ref: 'Kwo, ACG 2017' }),
    q({ id: 'hepatitis-20', dif: 2, stem: 'Joven de 19 años con temblor, cambios de conducta, hepatitis y anillos pardos en la córnea. ¿Estudio inicial?', opts: ['Ferritina', 'Ceruloplasmina sérica (y cobre en orina de 24 h)', 'Anti-VHC', 'AFP', 'ANA'], ans: 1,
      exp: 'Enfermedad de Wilson: ceruloplasmina baja, cobre urinario alto, anillos de Kayser-Fleischer. Tratamiento: quelantes (penicilamina, trientina) y zinc.', why: ['Es para hemocromatosis.', '', 'No explica.', 'No explica.', 'No explica.'], ref: 'Kwo, ACG 2017' })
  ]
};
