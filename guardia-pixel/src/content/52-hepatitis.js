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
          { v: { k: 'title', t: 'Hepatitis', s: 'Semana 9 · Gastroenterología' },
            say: 'Semana nueve: las hepatitis. Antes de hablar de virus hay que aprender a leer las pruebas de función hepática, porque el patrón te dice dónde buscar. Luego vamos con los cinco virus, la serología de la hepatitis B, que es pregunta segura, y las hepatitis por alcohol, paracetamol y autoinmunidad.' },
          { v: { k: 'case', t: 'Ictericia en un joven', p: { name: 'Mauricio', age: 26, sex: 'H', skin: '#C98B62', hair: '#2A1A12', gown: '#FF9B3D' }, text: 'Una semana con malestar, náusea y dolor articular. Ahora coluria, acolia e ictericia. Relaciones sexuales sin protección.', vit: { ALT: '2400', AST: '1900', Bili: '8.2', INR: '1.2' } },
            say: 'Mauricio tiene veintiséis años. Lleva una semana con malestar, náusea y dolor de articulaciones, y ahora tiene orina oscura, heces claras e ictericia. Ha tenido relaciones sin protección. Su alanino aminotransferasa es de dos mil cuatrocientos y la bilirrubina de ocho punto dos. El INR es de uno punto dos.' },
          { v: { k: 'vs', a: 'Hepatocelular', b: 'Colestásico', rows: [['Qué sube', 'ALT y AST', 'FA con GGT'], ['Miles', 'Virus, paracetamol, isquemia', '—'], ['AST/ALT mayor de 2', 'Alcohol', '—'], ['Causas', 'Hepatitis, fármacos, hígado graso', 'Litiasis, tumor, CBP, CEP'], ['Primer estudio', 'Serologías', 'USG: ¿vía biliar dilatada?']] },
            say: 'Dos patrones. El hepatocelular sube las transaminasas. Cuando están en miles piensa en virus, paracetamol o isquemia; si la AST duplica a la ALT y no pasa de trescientos o cuatrocientos, piensa en alcohol. El colestásico sube la fosfatasa alcalina con la gamma glutamil transferasa; si la GGT es normal, la fosfatasa viene del hueso. En colestasis el primer estudio es el ultrasonido, para ver si la vía biliar está dilatada.' },
          { v: { k: 'list', t: 'Función real del hígado', items: ['INR: el mejor marcador agudo', 'Albúmina: refleja lo crónico', 'Glucosa y plaquetas', 'Bilirrubina indirecta sola: Gilbert o hemólisis'] },
            say: 'Las transaminasas miden daño, no función. La función se ve en el INR, el mejor marcador pronóstico en la falla aguda, en la albúmina, que refleja lo crónico, y en la glucosa y las plaquetas. Y si solo sube la bilirrubina indirecta, con ayuno o estrés, piensa en Gilbert, que es benigno, o en hemólisis.' }
        ] },
        { ch: 'Los cinco virus', sc: [
          { v: { k: 'vs', a: 'Virus', b: 'Transmisión y clave', rows: [['A', 'Fecal-oral', 'No se cronifica; vacuna'], ['B (ADN)', 'Sexual, sangre, vertical', 'Crónica en 5% de adultos y 90% de neonatos'], ['C', 'Sangre, drogas IV', 'Crónica en 75 a 85%; curable'], ['D', 'Sangre', 'Solo con hepatitis B'], ['E', 'Fecal-oral', 'Fulminante en embarazadas']] },
            say: 'La A y la E se transmiten por vía fecal oral y no se cronifican, aunque la E puede ser fulminante en embarazadas. La B es un virus de ADN que se transmite por vía sexual, sangre y de madre a hijo; se cronifica en cinco por ciento de los adultos pero en noventa por ciento de los recién nacidos, y puede dar hepatocarcinoma aun sin cirrosis. La C se transmite por sangre, se cronifica en la mayoría y hoy es curable. La D solo existe junto con la B.' },
          { v: { k: 'list', t: 'Hepatitis aguda', items: ['Pródromo: malestar, náusea, artralgias', 'Luego ictericia, coluria, acolia', 'Dolor en hipocondrio derecho', 'Fulminante: encefalopatía + INR 1.5 o más', 'Fulminante: centro de trasplante'] },
            say: 'La hepatitis aguda empieza con un pródromo de malestar, náusea, artralgias y fiebre, y luego aparece la ictericia con orina oscura, heces claras y dolor en el hipocondrio derecho. Si aparecen encefalopatía e INR de uno punto cinco o más en alguien sin hepatopatía previa, es falla hepática aguda y se refiere a un centro de trasplante.' }
        ] },
        { ch: 'Serología de la hepatitis B', sc: [
          { v: { k: 'list', t: 'Qué significa cada marcador', items: ['HBsAg: hay virus ahora', 'Anti-HBs: inmunidad', 'Anti-HBc total: contacto alguna vez', 'Anti-HBc IgM: infección aguda', 'HBeAg y ADN: replicación'] },
            say: 'La serología de la B se lee marcador por marcador. El antígeno de superficie dice que hay virus ahora. El anticuerpo contra la superficie dice que hay inmunidad. El anticuerpo contra el core total dice que hubo contacto con el virus alguna vez, y su fracción IgM, que la infección es aguda. El antígeno e y el ADN viral miden replicación.' },
          { v: { k: 'vs', a: 'Situación', b: 'Patrón', rows: [['Vacunado', 'Anti-HBs +', 'Anti-HBc −'], ['Infección resuelta', 'Anti-HBs + y anti-HBc +', 'HBsAg −'], ['Aguda', 'HBsAg + y anti-HBc IgM +', '—'], ['Ventana', 'Solo anti-HBc IgM +', 'HBsAg y anti-HBs −'], ['Crónica', 'HBsAg + más de 6 meses', 'IgM −']] },
            say: 'Los patrones: vacunado tiene solo anticuerpo de superficie, sin anticuerpo contra el core, porque la vacuna solo lleva la superficie. Infección resuelta tiene anticuerpo de superficie y contra el core. Aguda tiene antígeno de superficie e IgM contra el core. El periodo de ventana tiene solo IgM contra el core, porque el antígeno ya se fue y el anticuerpo de superficie aún no llega. Y crónica es antígeno de superficie positivo por más de seis meses.' },
          { v: { k: 'quiz', q: 'HBsAg negativo, anti-HBs positivo, anti-HBc negativo. ¿Qué es?', opts: ['Infección resuelta', 'Vacunado', 'Periodo de ventana'], a: 1 },
            say: 'Pausa. Antígeno de superficie negativo, anticuerpo de superficie positivo y anticuerpo contra el core negativo. ¿Qué es?',
            exp: 'Vacunado. La vacuna solo contiene el antígeno de superficie, así que genera anticuerpo de superficie sin anticuerpo contra el core. Si el anticuerpo contra el core fuera positivo, sería una infección resuelta.' },
          { v: { k: 'list', t: 'Tratamiento de B y C', items: ['B crónica con ADN alto y daño: tenofovir o entecavir', 'B: tamizaje de hepatocarcinoma cada 6 meses', 'Antes de rituximab o quimio: buscar VHB', 'C: anti-VHC, luego carga viral', 'C: antivirales de acción directa 8 a 12 semanas: cura'] },
            say: 'La B crónica con ADN alto y daño hepático se trata con tenofovir o entecavir, y se tamiza hepatocarcinoma cada seis meses. Antes de dar rituximab o quimioterapia, siempre busca hepatitis B, porque se reactiva. La C se diagnostica con anticuerpo y se confirma con carga viral, y se cura en más de noventa y cinco por ciento con antivirales de acción directa por ocho a doce semanas.' }
        ] },
        { ch: 'Alcohol, paracetamol y autoinmune', sc: [
          { v: { k: 'list', t: 'Hepatitis alcohólica', items: ['AST/ALT mayor de 2, AST menor de 400', 'Ictericia, fiebre, hepatomegalia dolorosa', 'Grave: Maddrey 32 o más o MELD mayor de 20', 'Grave: prednisolona', 'Abstinencia: lo que más cambia el pronóstico'] },
            say: 'La hepatitis alcohólica da ictericia, fiebre y hepatomegalia dolorosa, con AST que duplica a la ALT y rara vez pasa de cuatrocientos. Es grave con función discriminante de Maddrey de treinta y dos o más, o MELD mayor de veinte, y entonces se da prednisolona. Lo que más cambia el pronóstico es la abstinencia.' },
          { v: { k: 'flow', t: 'Intoxicación por paracetamol', steps: ['Dosis tóxica: más de 150 mg/kg o 7.5 a 10 g', 'Nivel desde las 4 h: nomograma', 'N-acetilcisteína si es tóxica o hora desconocida', 'Mejor en las primeras 8 h', 'Transaminasas en miles al día 2 a 3'] },
            say: 'El paracetamol es la causa más común de falla hepática aguda en varios países. Es tóxica una dosis mayor de ciento cincuenta miligramos por kilo o de siete punto cinco a diez gramos. Se mide el nivel desde las cuatro horas y se grafica en el nomograma de Rumack Matthew. Se da N acetilcisteína si el nivel es tóxico o si no se sabe la hora, y funciona mejor en las primeras ocho horas.' },
          { v: { k: 'list', t: 'Otras', items: ['Autoinmune: mujer joven, IgG alta, ANA y antimúsculo liso', 'Autoinmune: prednisona ± azatioprina', 'Hígado graso metabólico: bajar 7 a 10% de peso', 'Wilson: joven, Kayser-Fleischer, ceruloplasmina baja', 'Hemocromatosis: saturación mayor de 45%'] },
            say: 'Otras causas: la hepatitis autoinmune, en mujeres jóvenes con IgG alta, anticuerpos antinucleares y antimúsculo liso, se trata con prednisona y azatioprina. El hígado graso metabólico, con bajar de siete a diez por ciento del peso. Wilson, en jóvenes con anillos de Kayser Fleischer y ceruloplasmina baja. Y hemocromatosis, con saturación de transferrina mayor de cuarenta y cinco por ciento.' },
          { v: { k: 'quiz', q: 'Mujer de 19 años tomó 30 tabletas de paracetamol de 500 mg hace un tiempo que no sabe precisar. ¿Qué haces?', opts: ['Esperar el nivel de las 4 h para decidir', 'N-acetilcisteína ya', 'Alta si las transaminasas son normales'], a: 1 },
            say: 'Pausa. Una joven tomó treinta tabletas de quinientos miligramos de paracetamol y no sabe a qué hora. ¿Qué haces?',
            exp: 'N acetilcisteína de inmediato. Son quince gramos, dosis tóxica, y con la hora desconocida el nomograma no se puede usar. Las transaminasas pueden ser normales en las primeras horas.' }
        ] },
        { ch: 'Cierre del caso', sc: [
          { v: { k: 'list', t: 'Mauricio: final del caso', items: ['HBsAg +, anti-HBc IgM +: hepatitis B aguda', 'INR 1.2, sin encefalopatía', 'Manejo de soporte, sin antiviral', 'Pareja: vacuna + inmunoglobulina', 'HBsAg a los 6 meses: negativo'] },
            say: 'Mauricio tiene antígeno de superficie positivo e IgM contra el core positiva: hepatitis B aguda. Su INR es normal y no hay encefalopatía, así que el manejo es de soporte, sin antiviral. Su pareja recibe vacuna e inmunoglobulina. A los seis meses el antígeno de superficie es negativo: se curó. También se le hacen pruebas de VIH y sífilis.' },
          { v: { k: 'tip', kind: 'trap', t: 'Anti-HBc IgM aislado = periodo de ventana: es infección aguda aunque el HBsAg sea negativo.' },
            say: 'Trampa: una IgM contra el core positiva con antígeno de superficie negativo no es infección resuelta: es el periodo de ventana de una infección aguda.' },
          { v: { k: 'mnemo', t: 'Superficie = virus · anti-superficie = inmune · anti-core = contacto · IgM = aguda', d: 'Vacunado: solo anti-HBs. Resuelta: anti-HBs + anti-HBc. Crónica: HBsAg >6 meses.' },
            say: 'Llévate la regla: antígeno de superficie, hay virus; anticuerpo de superficie, inmune; anticuerpo contra el core, hubo contacto; IgM, es aguda. Ahora practica en el algoritmo de serología del taller.' }
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
