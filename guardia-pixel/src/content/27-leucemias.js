// Tema 18 · Leucemias agudas y síndrome mielodisplásico (Hematología, semana 5)
const T = { topic: 'leucemias', subj: 'hemato' };
const q = (o) => ({ ...T, ...o });

export default {
  lessons: {
    leucemias: {
      hook: 'Pancitopenia con blastos: es una leucemia aguda hasta demostrar lo contrario. Distingue LMA de LLA, reconoce la LPA (urgencia por CID) y el SMD del adulto mayor.',
      compare: ['lma-lla'],
      nn: [['acute-leukemia', 'Acute Leukemia'], ['acute-myelogenous-leukemia', 'Acute Myelogenous Leukemia'], ['acute-lymphoblastic-leukemia', 'Acute Lymphoblastic Leukemia']],
      yt: 'acute leukemia AML ALL',
      anim: 'leucemias',
      video: [
        { ch: 'De la médula a la sangre', sc: [
          { v: { k: 'title', t: 'Leucemias agudas y SMD', s: 'Tema 18 · Hematología' },
            say: 'Bienvenido a la guardia de hematología. En este video vas a reconocer una leucemia aguda y a distinguir la mieloide de la linfoblástica. También vas a actuar rápido ante la leucemia promielocítica y a entender el síndrome mielodisplásico.' },
          { v: { k: 'case', t: 'Consulta de urgencias', p: { name: 'Rosa', age: 67, sex: 'M', skin: '#D9A07A', hair: '#8C8C96', gown: '#7FC8A9' }, text: 'Tres semanas de fatiga, fiebre y moretones. Hb 7.2, leucocitos 2,300, plaquetas 21,000. En el frotis hay blastos.', vit: { FC: '108', Temp: '38.4 °C', SpO2: '97%' } },
            say: 'Conoce a Rosa, de sesenta y siete años. Lleva tres semanas con cansancio, fiebre y moretones. Su biometría muestra anemia, leucocitos bajos y plaquetas muy bajas, y en el frotis aparecen blastos. Antes de ponerle nombre, entremos a su médula.' },
          { v: { k: 'anim', id: 'leucemias', step: 0 },
            say: 'Así funciona una médula sana. La célula madre se divide y madura en tres líneas: eritrocitos que llevan oxígeno, neutrófilos que combaten infecciones y megacariocitos que liberan plaquetas. Solo las células maduras salen a la sangre.' },
          { v: { k: 'anim', id: 'leucemias', step: 2 },
            say: 'En la leucemia aguda, un clon de blastos pierde la capacidad de madurar y se multiplica sin control. Llena la médula y desplaza a las células normales. Por eso el cuadro es de falla medular: anemia con fatiga, neutropenia con infecciones y trombocitopenia con sangrado.' },
          { v: { k: 'big', h: 'Leucemia aguda', t: '≥20%', u: 'blastos', s: 'En médula o sangre. Con t(15;17), t(8;21) o inv(16) basta menos (OMS 2022; ICC ≥10%).' },
            say: 'El número clave es veinte por ciento de blastos en la médula o en la sangre. Hay excepciones: con ciertas alteraciones genéticas, como la translocación quince diecisiete, se diagnostica con menos. Para el examen, recuerda veinte por ciento.' }
        ] },
        { ch: 'Mieloide o linfoblástica', sc: [
          { v: { k: 'flow', t: 'Confirmar el diagnóstico', steps: ['BH y frotis: blastos', 'Aspirado y biopsia de médula', 'Citometría: mieloide o linfoide', 'Citogenética y molecular', 'Riesgo ELN 2022 → tratamiento'] },
            say: 'El camino diagnóstico es siempre el mismo. Biometría y frotis para ver blastos. Aspirado y biopsia de médula. Citometría de flujo para saber si son mieloides o linfoides. Y citogenética con biología molecular, que definen el riesgo y el tratamiento.' },
          { v: { k: 'vs', cmp: 'lma-lla', rows: [0, 1, 2, 3] },
            say: 'Compara las dos. La mieloide aguda es del adulto, con mediana cercana a los setenta años. Es mieloperoxidasa positiva y puede tener bastones de Auer. La linfoblástica es la leucemia más común en niños, con blastos TdT positivos. Las monocíticas infiltran encías y piel; la linfoblástica, sistema nervioso y testículo.' },
          { v: { k: 'quiz', q: 'Niño de 4 años con dolor óseo y hepatoesplenomegalia. Blastos TdT+, CD10+, CD19+. ¿Diagnóstico?', opts: ['LMA monocítica', 'LLA de precursores B', 'LLC'], a: 1 },
            say: 'Pausa. Un niño de cuatro años con dolor óseo, hepatoesplenomegalia y blastos TdT positivos, CD diez y CD diecinueve positivos. ¿Cuál es el diagnóstico?',
            exp: 'Leucemia linfoblástica aguda de precursores B. La TdT marca blastos linfoides inmaduros, y el CD diez con el CD diecinueve indican estirpe B. Es la leucemia más común de la infancia.' }
        ] },
        { ch: 'LPA: la leucemia que sangra', sc: [
          { v: { k: 'case', t: 'Encías que no paran', p: { name: 'Andrés', age: 38, sex: 'H', skin: '#C98E66', hair: '#1A1412', gown: '#FF8FD0' }, text: 'Gingivorragia y equimosis. Plaquetas 16,000, fibrinógeno 88, TP y TTPa largos, dímero D alto. Promielocitos con muchos bastones de Auer.', vit: { FC: '104', PA: '118/70' } },
            say: 'Ahora conoce a Andrés, de treinta y ocho años. Le sangran las encías y tiene moretones. Tiene plaquetas muy bajas, fibrinógeno bajo, tiempos de coagulación prolongados y dímero D alto. En el frotis hay promielocitos llenos de bastones de Auer.' },
          { v: { k: 'anim', id: 'leucemias', step: 3 },
            say: 'Es una leucemia promielocítica aguda, con la translocación quince diecisiete que forma el gen de fusión PML RARA. Los promielocitos liberan procoagulantes y activan la fibrinólisis. Se consumen plaquetas y fibrinógeno: es una coagulación intravascular diseminada, y la primera causa de muerte temprana es la hemorragia.' },
          { v: { k: 'list', t: 'LPA: qué hacer hoy', items: ['ATRA desde la sospecha, sin esperar PML::RARA', 'Plaquetas >30–50 mil · fibrinógeno >100–150', 'Crioprecipitado y plasma; nada de heparina', 'Riesgo bajo: ATRA + arsénico, sin quimio', 'Evita punción lumbar y catéteres centrales'] },
            say: 'El tratamiento empieza en cuanto sospechas, sin esperar la confirmación genética: ácido transretinoico. Repón plaquetas para mantenerlas arriba de treinta a cincuenta mil, y fibrinógeno arriba de cien a ciento cincuenta con crioprecipitado. En riesgo bajo, ácido transretinoico más trióxido de arsénico cura a más del noventa por ciento sin quimioterapia.' },
          { v: { k: 'mnemo', t: 'LPA = “ATRA ya”', d: 'Promielocitos + CID: no esperes el PML::RARA. El ácido transretinoico salva la vida en las primeras horas.' },
            say: 'Para recordarlo: leucemia promielocítica, ATRA ya. Si ves promielocitos y coagulación intravascular, no esperes el resultado genético para empezar.' },
          { v: { k: 'quiz', q: 'Día 6 de ATRA: fiebre, disnea, infiltrados, derrame pleural y +4 kg. ¿Qué das?', opts: ['Solo antibióticos', 'Dexametasona 10 mg IV c/12 h', 'Suspender el ATRA para siempre'], a: 1 },
            say: 'Pausa. Al sexto día de ácido transretinoico, Andrés tiene fiebre, disnea, infiltrados pulmonares, derrame pleural y subió cuatro kilos. ¿Qué le das?',
            exp: 'Dexametasona, diez miligramos intravenosos cada doce horas. Es el síndrome de diferenciación. El ácido transretinoico solo se pausa si el cuadro es grave, y se reanuda al mejorar.' }
        ] },
        { ch: 'Tratar la LMA y la LLA', sc: [
          { v: { k: 'list', t: 'LMA: ¿es apto?', items: ['Apto: inducción “7+3” (citarabina + antraciclina)', 'FLT3 mutado: agrega midostaurina', 'Consolidación: citarabina o alo-TPH según riesgo', 'No apto: venetoclax + azacitidina', 'Favorable: t(8;21), inv(16), NPM1 sin FLT3-ITD'] },
            say: 'En la leucemia mieloide aguda, la pregunta es si el paciente aguanta quimioterapia intensiva. Si es apto, inducción siete más tres: siete días de citarabina y tres de una antraciclina. Si tiene mutación de FLT3, se agrega midostaurina. Si no es apto, venetoclax con azacitidina.' },
          { v: { k: 'list', t: 'LLA: por fases', items: ['Inducción, consolidación y mantenimiento (~2–3 años)', 'Profilaxis del SNC: quimioterapia intratecal', 'Filadelfia t(9;22): agrega dasatinib o ponatinib', 'Recaída o EMR+: blinatumomab, inotuzumab, CAR-T'] },
            say: 'La leucemia linfoblástica se trata por fases: inducción, consolidación y un mantenimiento de dos a tres años. Siempre lleva profilaxis del sistema nervioso central con quimioterapia intratecal, porque es un santuario. Si tiene cromosoma Filadelfia, común en adultos, se agrega un inhibidor de tirosina cinasa.' }
        ] },
        { ch: 'Urgencias en leucemia', sc: [
          { v: { k: 'anim', id: 'leucemias', step: 4 },
            say: 'Al iniciar la quimioterapia, sobre todo con muchos blastos, las células se rompen de golpe. Liberan potasio, fósforo y ácidos nucleicos que se convierten en ácido úrico. Es el síndrome de lisis tumoral.' },
          { v: { k: 'list', t: 'Lisis tumoral', items: ['K ↑ · fósforo ↑ · ácido úrico ↑ · calcio ↓', 'Clínica: LRA, arritmias, convulsiones', 'Prevén: hidratación IV + alopurinol', 'Alto riesgo o ác. úrico alto: rasburicasa', 'Rasburicasa NO en déficit de G6PD'] },
            say: 'Los laboratorios: potasio, fósforo y ácido úrico altos, con calcio bajo, porque el fósforo lo atrapa. La clínica es lesión renal aguda, arritmias y convulsiones. Se previene con hidratación intravenosa y alopurinol. En alto riesgo se usa rasburicasa, pero nunca en deficiencia de glucosa seis fosfato deshidrogenasa, porque causa hemólisis.' },
          { v: { k: 'big', h: 'Fiebre neutropénica', t: '<500', u: 'neutrófilos/µL', s: 'Con fiebre ≥38.3 °C: hemocultivos y antibiótico antipseudomonas en <60 min.' },
            say: 'La otra urgencia es la fiebre con neutrófilos menores de quinientos. Toma hemocultivos y da un antibiótico con cobertura contra Pseudomonas, como cefepime, en menos de una hora. No esperes los cultivos para empezar.' },
          { v: { k: 'tip', kind: 'trap', t: 'Leucostasis (blastos >100,000 con disnea o confusión): citorreduce con hidroxiurea e inducción. No transfundas eritrocitos de más: suben la viscosidad.' },
            say: 'Una trampa más. Con más de cien mil blastos puede haber leucostasis: disnea, hipoxemia y confusión. Se trata citorreduciendo con hidroxiurea e inducción. Evita transfundir eritrocitos sin necesidad, porque aumentan la viscosidad.' }
        ] },
        { ch: 'Síndrome mielodisplásico', sc: [
          { v: { k: 'anim', id: 'leucemias', step: 1 },
            say: 'Cierra con el síndrome mielodisplásico, que la clasificación más reciente llama neoplasia mielodisplásica. Es típico del adulto mayor. La médula está llena, pero las células son displásicas y mueren antes de salir. El resultado son citopenias con blastos menores de veinte por ciento.' },
          { v: { k: 'list', t: 'Piensa en SMD si…', items: ['Adulto mayor con anemia macrocítica', 'B12, folato y cobre normales', 'Pseudo-Pelger-Huët e hipogranulares', 'Sideroblastos en anillo (SF3B1)', 'Blastos <20%; puede evolucionar a LMA'] },
            say: 'Piénsalo en un adulto mayor con anemia macrocítica, con vitamina B doce y folato normales. En el frotis verás neutrófilos hiposegmentados, llamados pseudo Pelger Huët, y en la médula, sideroblastos en anillo. Puede evolucionar a leucemia mieloide aguda.' },
          { v: { k: 'quiz', q: 'SMD de bajo riesgo, dependiente de transfusiones, con del(5q) aislada. ¿Fármaco?', opts: ['Lenalidomida', 'Imatinib', 'ATRA'], a: 0 },
            say: 'Pausa. Síndrome mielodisplásico de bajo riesgo, dependiente de transfusiones, con deleción aislada del brazo largo del cromosoma cinco. ¿Qué fármaco eliges?',
            exp: 'Lenalidomida, que logra independencia transfusional en muchos de estos pacientes. En el resto de bajo riesgo se usan eritropoyetina o luspatercept. En alto riesgo, azacitidina, y el único tratamiento curativo es el trasplante alogénico.' },
          { v: { k: 'tip', kind: 'pearl', t: 'Promielocitos + CID = ATRA antes de la genética. Y antes de la rasburicasa, pregunta por déficit de G6PD.' },
            say: 'La perla para el examen: promielocitos con coagulación intravascular significan ácido transretinoico ya, antes de la genética. Y en lisis tumoral, pregunta por la deficiencia de glucosa seis fosfato deshidrogenasa antes de la rasburicasa. Ahora ve a las preguntas del tema para fijar lo que viste.' }
        ] }
      ],
      sections: [
        { h: 'Cuadro general', html: `
<ul>
<li><b>Falla medular</b>: anemia (fatiga), neutropenia (infecciones, fiebre), trombocitopenia (petequias, sangrado).</li>
<li>Leucocitos altos, normales o bajos; <b>blastos</b> en sangre o médula. Diagnóstico con aspirado y biopsia de médula: morfología, citometría de flujo, citogenética y biología molecular.</li>
<li>Umbral clásico: <b>≥20% de blastos</b>. La OMS 2022 y la ICC 2022 permiten diagnosticar LMA con menos blastos si hay una alteración genética definitoria (ver caja de guías).</li>
<li><b>Leucostasis</b> (blastos muy altos): disnea, hipoxemia, alteración neurológica → citorreducción urgente (hidroxiurea, inducción).</li>
<li><b>Síndrome de lisis tumoral</b>: K ↑, fósforo ↑, calcio ↓, ácido úrico ↑, LRA. Prevención: hidratación + alopurinol; rasburicasa si el riesgo es alto (contraindicada en déficit de G6PD).</li>
</ul>` },
        { h: 'LMA', html: `
<ul>
<li>Adultos (mediana ~68 años); también secundaria a SMD, quimioterapia o radiación.</li>
<li>Mieloperoxidasa positiva, <b>bastones de Auer</b>. Variantes monocíticas: hipertrofia gingival, infiltración de piel, SNC.</li>
<li>Riesgo genético (ELN 2022): <b>favorable</b> t(8;21), inv(16), NPM1 sin FLT3-ITD, CEBPA bZIP; <b>adverso</b> TP53, cariotipo complejo, −5/−7.</li>
<li>Tratamiento del paciente apto: inducción <b>“7+3”</b> (citarabina 7 días + antraciclina 3 días); midostaurina si hay FLT3. Consolidación con citarabina en dosis altas o trasplante alogénico según riesgo.</li>
<li>No apto para quimioterapia intensiva: <b>venetoclax + azacitidina</b>.</li>
</ul>` },
        { h: 'LPA: la leucemia que sangra', html: `
<ul>
<li>Leucemia promielocítica aguda, <b>t(15;17) PML::RARA</b>. Promielocitos con muchos bastones de Auer (células en “haz de leña”).</li>
<li>Se presenta con <b>CID</b> y hemorragia grave (cerebral, pulmonar).</li>
<li>Inicia <b>ácido transretinoico (ATRA)</b> en cuanto la sospeches, sin esperar la confirmación genética; se combina con trióxido de arsénico. Mantén plaquetas &gt;30–50 mil y fibrinógeno &gt;100–150 mg/dL.</li>
<li><b>Síndrome de diferenciación</b>: fiebre, disnea, infiltrados, derrames, aumento de peso, LRA → dexametasona.</li>
<li>Con tratamiento, la curación supera el 90%.</li>
</ul>` },
        { h: 'LLA', html: `
<ul>
<li>La leucemia más común en niños (pico 2–5 años); también adultos.</li>
<li>Adenopatías, hepatoesplenomegalia, dolor óseo, infiltración de <b>SNC y testículo</b>; masa mediastinal en LLA-T.</li>
<li>TdT positiva; precursora B: CD10, CD19, CD22. En adultos es común el cromosoma Filadelfia t(9;22) <b>BCR::ABL1</b> → agregar inhibidor de tirosina cinasa.</li>
<li>Tratamiento por fases: inducción, consolidación, profilaxis del SNC (intratecal) y mantenimiento por ~2–3 años. Inmunoterapias: blinatumomab, inotuzumab, células CAR-T.</li>
</ul>` },
        { h: 'Síndrome mielodisplásico', html: `
<ul>
<li>Adulto mayor con <b>citopenias</b> (sobre todo anemia macrocítica) y médula <b>displásica</b> con blastos &lt;20%.</li>
<li>Frotis: neutrófilos hiposegmentados (pseudo-Pelger-Huët) e hipogranulares; sideroblastos en anillo (asociados a SF3B1).</li>
<li>Pronóstico con IPSS-R o IPSS-M. Puede progresar a LMA.</li>
<li>Bajo riesgo: soporte transfusional, eritropoyetina, luspatercept; <b>lenalidomida en del(5q)</b>. Alto riesgo: hipometilantes (azacitidina); el <b>trasplante alogénico</b> es el único tratamiento curativo.</li>
</ul>` },
        { h: 'Fisiopatología en 1 minuto', html: `
<ul>
<li><b>Leucemia aguda</b> = clon de progenitores que <b>no madura</b> (bloqueo de la diferenciación, p. ej., PML::RARA o RUNX1::RUNX1T1) y <b>prolifera</b> sin control (p. ej., FLT3, KIT, RAS). Los blastos llenan la médula y desplazan a la hematopoyesis normal → pancitopenia aunque los leucocitos estén altos.</li>
<li><b>SMD</b> = clon que sí madura, pero mal: médula normo o hipercelular con <b>hematopoyesis ineficaz</b> (las células mueren en la médula) → citopenias periféricas con displasia.</li>
<li><b>Factores de riesgo</b>: edad, quimioterapia previa (alquilantes: 5–7 años, con −5/−7; inhibidores de topoisomerasa II: 1–3 años, con reordenamiento de KMT2A), radiación, benceno, tabaco, SMD o neoplasia mieloproliferativa previa, síndrome de Down, anemia de Fanconi.</li>
<li><b>Pancitopenia, diagnóstico diferencial</b>: leucemia aguda (incluso “aleucémica”), SMD, aplasia medular (médula vacía, sin displasia), déficit de B12 o folato, mielofibrosis, infiltración por metástasis, hiperesplenismo, HPN, fármacos (metotrexato), VIH, LES.</li>
<li><b>Urgencias, los números</b>: lisis tumoral de laboratorio (Cairo-Bishop) = ≥2 de ácido úrico ≥8 mg/dL, K ≥6 mEq/L, fósforo ≥4.5 mg/dL o calcio ≤7 mg/dL entre 3 días antes y 7 días después del tratamiento; clínica si además hay LRA, arritmia o convulsión. No repongas el calcio si no hay síntomas (precipita con el fósforo) y ya no se alcaliniza la orina. Leucostasis: suele verse con blastos &gt;100,000; limita la transfusión de eritrocitos hasta citorreducir.</li>
</ul>` },
        { h: 'Fármacos clave', html: `
<div class="tablewrap"><table class="mini">
<tr><th>Fármaco</th><th>Mecanismo</th><th>Efecto adverso clave</th><th>Ojo con</th></tr>
<tr><td>Citarabina</td><td>Análogo de pirimidina; inhibe la síntesis de ADN</td><td>Mielosupresión; en dosis altas, toxicidad cerebelosa y conjuntivitis</td><td>ERC (más neurotoxicidad)</td></tr>
<tr><td>Daunorrubicina / idarrubicina</td><td>Antraciclina: intercala ADN, inhibe topoisomerasa II</td><td>Cardiotoxicidad acumulativa</td><td>FEVI baja: ecocardiograma antes</td></tr>
<tr><td>ATRA</td><td>Diferencia al promielocito (degrada PML::RARA)</td><td>Síndrome de diferenciación, pseudotumor cerebri</td><td>Teratógeno</td></tr>
<tr><td>Trióxido de arsénico</td><td>Degrada PML::RARA</td><td>QT largo, síndrome de diferenciación</td><td>Mantener K &gt;4 y Mg &gt;1.8; evitar otros fármacos que alarguen el QT</td></tr>
<tr><td>Venetoclax</td><td>Inhibidor de BCL-2 (apoptosis)</td><td>Lisis tumoral, neutropenia</td><td>Azoles (CYP3A): bajar la dosis</td></tr>
<tr><td>Azacitidina / decitabina</td><td>Hipometilantes</td><td>Citopenias</td><td>Tardan 4–6 ciclos en responder</td></tr>
<tr><td>Imatinib / dasatinib / ponatinib</td><td>Inhiben la tirosina cinasa BCR::ABL1</td><td>Dasatinib: derrame pleural; ponatinib: trombosis arterial</td><td>Interacciones por CYP3A</td></tr>
<tr><td>Lenalidomida</td><td>Inmunomodulador; letal para el clon del(5q)</td><td>Citopenias, trombosis venosa</td><td>Teratógena</td></tr>
<tr><td>Rasburicasa</td><td>Urato oxidasa: ácido úrico → alantoína</td><td>Hemólisis y metahemoglobinemia</td><td>Déficit de G6PD (contraindicada)</td></tr>
</table></div>` },
        { h: 'Cómo lo preguntan en el examen', html: `
<ul>
<li>Pancitopenia, fiebre y bastones de Auer en un adulto → <b>LMA</b>: aspirado de médula, citometría y citogenética.</li>
<li>Adulto joven con sangrado, CID (fibrinógeno bajo, dímero D alto) y promielocitos → <b>LPA</b>: ATRA ya, sin esperar el PML::RARA.</li>
<li>Niño con dolor óseo, hepatoesplenomegalia y blastos TdT+ CD10+ CD19+ → <b>LLA-B</b>; adolescente con masa mediastinal y blastos CD3+ CD7+ → <b>LLA-T</b> (cuidado con la compresión de vía aérea o vena cava).</li>
<li>Hipertrofia gingival o nódulos en piel con blastos → <b>LMA monocítica</b>.</li>
<li>Adulto mayor con anemia macrocítica, B12 y folato normales y neutrófilos pseudo-Pelger → <b>SMD</b>; si tiene del(5q) aislada → lenalidomida.</li>
<li>48–72 h tras iniciar quimioterapia: K, fósforo y ácido úrico altos, calcio bajo y creatinina en ascenso → <b>lisis tumoral</b>. Si el paciente tiene déficit de G6PD, la rasburicasa es la opción incorrecta.</li>
</ul>` }
      ],
      mnemo: { t: 'LPA = “ATRA ya”', d: 'Si ves promielocitos y CID, no esperes al PML::RARA: el ácido transretinoico salva la vida en las primeras horas.' },
      pearl: 'Fiebre en un paciente con neutropenia (<500) es urgencia: hemocultivos y antibiótico antipseudomonas (cefepime, piperacilina-tazobactam o meropenem) en menos de 60 minutos.',
      trap: 'La rasburicasa causa hemólisis y metahemoglobinemia en déficit de G6PD: pregunta o mide antes de darla.',
      guide: [
        'Umbral de blastos: la OMS 2022 elimina el 20% para LMA con alteraciones genéticas definitorias (salvo BCR::ABL1 y CEBPA); la ICC 2022 usa ≥10% para varias de ellas y crea la categoría SMD/LMA (10–19%). Para el examen, 20% sigue siendo la cifra clásica.',
        'Clasificación de riesgo: la ELN 2022 reemplazó a la ELN 2017; algunos cambios (FLT3-ITD ya no modifica el riesgo según la carga alélica) pueden no estar en tu libro.',
        'Nombre y subtipos del SMD: la OMS 2022 lo llama “neoplasia mielodisplásica” y usa SMD-IB1 (blastos 5–9%) e IB2 (10–19%); la ICC 2022 conserva “síndrome mielodisplásico” con exceso de blastos (5–9%) y llama SMD/LMA al rango de 10–19%. Para el examen, la frontera con la LMA sigue siendo 20%.'
      ],
      refs: [
        'Döhner H, et al. Diagnosis and management of AML in adults: 2022 ELN recommendations. Blood 2022.',
        'Khoury JD, et al. 5th edition WHO Classification of Haematolymphoid Tumours. Leukemia 2022.',
        'Arber DA, et al. International Consensus Classification of Myeloid Neoplasms and Acute Leukemias. Blood 2022.',
        'Sanz MA, et al. Management of APL: updated ELN recommendations. Blood 2019.'
      ]
    }
  },

  compares: {
    'lma-lla': {
      topic: 'leucemias', a: 'LMA', b: 'LLA',
      rows: [
        ['Edad típica', 'Adultos (~68 años)', 'Niños (2–5 años)'],
        ['Marcadores', 'Mieloperoxidasa, CD13, CD33, CD117', 'TdT, CD10, CD19 (B) o CD3 (T)'],
        ['Hallazgo morfológico', 'Bastones de Auer', 'Blastos pequeños sin gránulos'],
        ['Infiltración típica', 'Encías y piel (monocíticas)', 'SNC, testículo, mediastino (T)'],
        ['Alteración clave', 't(15;17) en LPA; NPM1, FLT3', 't(9;22) Filadelfia en adultos'],
        ['Complicación característica', 'CID en LPA', 'Lisis tumoral, recaída en SNC'],
        ['Tratamiento base', '“7+3”; ATRA + arsénico en LPA', 'Fases + profilaxis intratecal; ITK si Ph+'],
        ['Pronóstico', 'Curación ~30–40% en adultos', 'Curación ~90% en niños']
      ]
    }
  },

  anims: {
    leucemias: {
      title: 'De la médula sana a la leucemia',
      steps: [
        { cap: '<b>Médula sana.</b> La célula madre da tres líneas: eritrocitos, neutrófilos y plaquetas (del megacariocito). Salen maduras al sinusoide y la sangre queda completa.',
          labels: [[24, 73, 'Célula madre'], [64, 106, 'Megacariocito'], [140, 110, 'En sangre']] },
        { cap: '<b>Síndrome mielodisplásico.</b> La médula está llena, pero las células son displásicas y muchas mueren antes de salir (hematopoyesis ineficaz). Resultado: citopenias con blastos menores de 20%.',
          labels: [[26, 41, 'Sideroblasto'], [78, 41, 'Pseudo-Pelger'], [50, 87, 'Blastos <20%'], [140, 110, 'Citopenias']] },
        { cap: '<b>Leucemia aguda.</b> Un clon de blastos que no madura llena la médula (20% o más) y desplaza a las células normales. Salen blastos a la sangre y caen las tres líneas: anemia, infecciones y sangrado.',
          labels: [[52, 60, 'Blastos ≥20%'], [140, 110, 'Citopenias']] },
        { cap: '<b>LPA: CID y ATRA.</b> Los promielocitos con bastones de Auer liberan procoagulantes: se forman microtrombos, se consumen plaquetas y fibrinógeno, y el paciente sangra. El ATRA los hace madurar a neutrófilos.',
          labels: [[38, 50, 'Bastones de Auer'], [100, 50, 'Microtrombos'], [106, 5, 'Sangrado'], [14, 98, 'ATRA'], [130, 110, 'Neutrófilos']] },
        { cap: '<b>Lisis tumoral.</b> Con la quimioterapia, los blastos se rompen y liberan potasio, fósforo y ácido úrico. Los cristales tapan los túbulos (lesión renal aguda) y el potasio alto da T picudas.',
          labels: [[46, 8, 'Quimioterapia'], [40, 90, 'Lisis de blastos'], [90, 40, 'K · P · úrico'], [134, 84, 'Riñón: LRA'], [134, 104, 'T picudas']] }
      ]
    }
  },

  cards: [
    ['Umbral clásico de blastos para leucemia aguda', '≥20% en médula o sangre'],
    ['Bastones de Auer', 'LMA (abundantes en LPA)'],
    ['t(15;17) PML::RARA', 'Leucemia promielocítica aguda'],
    ['Complicación hemorrágica de la LPA', 'CID'],
    ['Tratamiento de la LPA', 'ATRA + trióxido de arsénico, desde la sospecha'],
    ['Síndrome de diferenciación: tratamiento', 'Dexametasona'],
    ['Inducción clásica de LMA', '“7+3”: citarabina + antraciclina'],
    ['LMA en paciente no apto', 'Venetoclax + azacitidina'],
    ['Leucemia más común en niños', 'LLA'],
    ['LLA: sitios santuario', 'SNC y testículo'],
    ['Lisis tumoral: laboratorios', 'K ↑, fósforo ↑, ácido úrico ↑, calcio ↓'],
    ['SMD con del(5q)', 'Lenalidomida'],
    ['Único tratamiento curativo del SMD', 'Trasplante alogénico de progenitores hematopoyéticos'],
    ['Fiebre neutropénica', 'Antibiótico antipseudomonas en <60 minutos'],
    ['Trióxido de arsénico: qué vigilas', 'QT largo: ECG seriado, K >4 mEq/L y Mg >1.8 mg/dL; si QTc >500 ms, suspéndelo y corrige electrolitos'],
    ['Lisis tumoral de laboratorio (Cairo-Bishop)', '≥2 de: ácido úrico ≥8 mg/dL, K ≥6 mEq/L, fósforo ≥4.5 mg/dL, calcio ≤7 mg/dL (de 3 días antes a 7 días después del tratamiento)'],
    ['Hipocalcemia asintomática en lisis tumoral', 'No se repone: el calcio precipita con el fósforo. Gluconato de calcio solo si hay tetania, convulsiones o arritmia'],
    ['LMA de riesgo favorable (ELN 2022)', 't(8;21), inv(16) o t(16;16), NPM1 mutado sin FLT3-ITD, CEBPA bZIP en marco'],
    ['LLA-T: presentación típica', 'Adolescente varón con masa mediastinal (riesgo de síndrome de vena cava superior), leucocitosis alta, blastos CD3+ CD7+']
  ],

  questions: [
    q({ id: 'leucemias-01', dif: 2,
      stem: 'Hombre de 38 años con gingivorragia y equimosis. Hb 8, plaquetas 18,000, leucocitos 2,100. TP y TTPa prolongados, fibrinógeno 90, dímero D alto. Frotis con promielocitos cargados de bastones de Auer. ¿Qué haces primero?',
      opts: ['Esperar el resultado de PML::RARA', 'Iniciar ácido transretinoico (ATRA) de inmediato y soporte de la coagulopatía', 'Heparina para la CID', 'Inducción “7+3” sin ATRA', 'Esplenectomía'],
      ans: 1,
      exp: 'LPA con CID: la principal causa de muerte temprana es la hemorragia. Se inicia ATRA con la sospecha y se repone plaquetas y fibrinógeno.',
      why: ['El retraso aumenta la mortalidad por sangrado.', '', 'No se usa en la CID de la LPA.', 'La LPA se trata con ATRA ± arsénico.', 'No tiene papel.'],
      ref: 'ELN APL 2019' }),

    q({ id: 'leucemias-02', dif: 2,
      stem: 'Al quinto día de ATRA, el paciente con LPA presenta fiebre, disnea, infiltrados pulmonares, derrame pleural y aumento de 4 kg. ¿Diagnóstico y manejo?',
      opts: ['Neumonía; solo antibióticos', 'Síndrome de diferenciación; dexametasona', 'Edema por IC; solo diuréticos', 'Leucostasis; leucoféresis', 'Toxicidad por arsénico; suspender todo'],
      ans: 1,
      exp: 'El síndrome de diferenciación aparece en días a semanas tras ATRA o arsénico. Se trata con dexametasona 10 mg cada 12 h; se suspende temporalmente el fármaco solo si es grave.',
      why: ['No explica el aumento de peso ni el contexto.', '', 'No explica la fiebre ni el contexto.', 'No es la causa en este momento.', 'No se suspende de entrada.'],
      ref: 'ELN APL 2019' }),

    q({ id: 'leucemias-03', dif: 1,
      stem: 'Niño de 4 años con palidez, petequias, dolor óseo y hepatoesplenomegalia. Blastos TdT+, CD10+, CD19+. ¿Diagnóstico?',
      opts: ['LMA', 'LLA de precursores B', 'LLC', 'Linfoma de Hodgkin', 'Neuroblastoma'],
      ans: 1,
      exp: 'TdT marca blastos linfoides inmaduros; CD10 y CD19 indican estirpe B. Es la leucemia más común en la infancia.',
      why: ['Sería mieloperoxidasa positiva.', '', 'Es de adultos mayores y con células maduras.', 'No es leucemia.', 'No expresa estos marcadores.'],
      ref: 'OMS 2022' }),

    q({ id: 'leucemias-04', dif: 2,
      stem: 'Hombre de 70 años con LMA de diagnóstico reciente, ECOG 3 y cardiopatía grave. No es candidato a quimioterapia intensiva. ¿Tratamiento recomendado?',
      opts: ['“7+3”', 'Venetoclax + azacitidina', 'Solo cuidados paliativos sin tratamiento', 'ATRA', 'Imatinib'],
      ans: 1,
      exp: 'En LMA no apta para quimioterapia intensiva, venetoclax + azacitidina mejoró la supervivencia frente a azacitidina sola (VIALE-A).',
      why: ['Toxicidad inaceptable en este paciente.', '', 'Hay opción eficaz de menor intensidad.', 'Solo en LPA.', 'Es para leucemias BCR::ABL1.'],
      ref: 'VIALE-A, NEJM 2020 · ELN 2022' }),

    q({ id: 'leucemias-05', dif: 2,
      stem: 'Paciente con LLA y leucocitos de 180,000 inicia quimioterapia. A las 36 h: K 6.8, fósforo 9, calcio 6.5, ácido úrico 14, creatinina 2.9. ¿Diagnóstico?',
      opts: ['Hipercalcemia maligna', 'Síndrome de lisis tumoral', 'SIADH', 'Insuficiencia suprarrenal', 'Rabdomiólisis por estatinas'],
      ans: 1,
      exp: 'La destrucción masiva de células libera potasio, fósforo y ácido nucleico (ácido úrico). El fósforo atrapa calcio. Manejo: hidratación agresiva, rasburicasa, tratar la hiperkalemia, diálisis si es necesario.',
      why: ['El calcio está bajo.', '', 'No explica el patrón.', 'No explica fósforo y ácido úrico.', 'No hay estatina ni CK.'],
      ref: 'Cairo-Bishop · Harrison 21e' }),

    q({ id: 'leucemias-06', dif: 2,
      stem: 'Mujer de 74 años con anemia macrocítica, leucopenia y plaquetas 90,000. B12 y folato normales. Frotis con neutrófilos hiposegmentados e hipogranulares. Médula con displasia en 2 líneas y 4% de blastos. ¿Diagnóstico?',
      opts: ['LMA', 'Síndrome mielodisplásico', 'Anemia perniciosa', 'Aplasia medular', 'LLC'],
      ans: 1,
      exp: 'Citopenias + displasia + blastos <20% en un adulto mayor: SMD. Los neutrófilos pseudo-Pelger-Huët son característicos.',
      why: ['Requiere ≥20% de blastos (salvo genética definitoria).', '', 'B12 normal y no hay hipersegmentación.', 'La médula estaría hipocelular sin displasia.', 'Daría linfocitosis.'],
      ref: 'OMS 2022' }),

    q({ id: 'leucemias-07', dif: 2,
      stem: 'Paciente con SMD de bajo riesgo, dependiente de transfusiones, con deleción aislada del brazo largo del cromosoma 5. ¿Fármaco de elección?',
      opts: ['Lenalidomida', 'Imatinib', 'ATRA', 'Rituximab', 'Hidroxiurea'],
      ans: 0,
      exp: 'El SMD con del(5q) aislada responde muy bien a lenalidomida, con independencia transfusional en una gran proporción.',
      why: ['', 'Es para BCR::ABL1.', 'Es para LPA.', 'Es para linfomas B.', 'No es tratamiento del SMD.'],
      ref: 'NCCN MDS' }),

    q({ id: 'leucemias-08', dif: 1,
      stem: 'Paciente en quimioterapia de inducción por LMA con neutrófilos de 200/µL y fiebre de 38.6 °C. Estable. ¿Qué haces?',
      opts: ['Esperar resultados de cultivos', 'Hemocultivos y cefepime (u otro antipseudomonas) en menos de 1 hora', 'Paracetamol y vigilar', 'Factor estimulante de colonias solo', 'Vancomicina sola'],
      ans: 1,
      exp: 'Fiebre neutropénica: urgencia. Antibiótico de amplio espectro con cobertura contra Pseudomonas en la primera hora; vancomicina solo con indicaciones específicas (catéter infectado, piel, inestabilidad, MRSA).',
      why: ['El retraso aumenta la mortalidad.', '', 'Insuficiente.', 'No sustituye al antibiótico.', 'No cubre gramnegativos.'],
      ref: 'IDSA/ASCO fiebre neutropénica' }),

    q({ id: 'leucemias-09', dif: 3,
      stem: 'Adulto de 45 años con LLA de precursores B. La citogenética muestra t(9;22). ¿Qué agregas a la quimioterapia?',
      opts: ['ATRA', 'Inhibidor de tirosina cinasa (dasatinib o ponatinib)', 'Lenalidomida', 'Midostaurina', 'Nada; no cambia el tratamiento'],
      ans: 1,
      exp: 'La LLA Filadelfia positiva (BCR::ABL1) se trata con inhibidor de tirosina cinasa junto con quimioterapia o blinatumomab, con mejor pronóstico que en la era previa.',
      why: ['Solo en LPA.', '', 'Para SMD del(5q) y mieloma.', 'Para LMA con FLT3.', 'Cambia el tratamiento y el pronóstico.'],
      ref: 'NCCN ALL' }),

    q({ id: 'leucemias-10', dif: 2,
      stem: 'Hombre de 60 años con LMA y leucocitos de 160,000 presenta disnea, SpO2 86% y confusión. Rx con infiltrados difusos. ¿Qué sospechas?',
      opts: ['Síndrome de diferenciación', 'Leucostasis', 'Neumonía por Pneumocystis', 'TEP', 'Hemorragia alveolar por PTI'],
      ans: 1,
      exp: 'Hiperleucocitosis (>100,000) con afección pulmonar y neurológica: leucostasis. Requiere citorreducción urgente (hidroxiurea e inducción); la leucoféresis tiene papel limitado.',
      why: ['Requiere ATRA o arsénico.', '', 'No explica el contexto agudo con hiperleucocitosis.', 'No explica la confusión ni los infiltrados.', 'No es PTI.'],
      ref: 'ELN 2022' }),

    q({ id: 'leucemias-11', dif: 2,
      stem: 'Hombre de 19 años con LLA-T, leucocitos de 95,000 y masa mediastinal, que iniciará quimioterapia. Ácido úrico 11 mg/dL, creatinina 1.6. Hace años tuvo hemólisis tras tomar una sulfonamida (déficit de G6PD). ¿Qué indicas para el ácido úrico?',
      opts: ['Rasburicasa IV', 'Alcalinizar la orina con bicarbonato', 'Hidratación IV intensa y alopurinol', 'Restringir líquidos por la masa mediastinal', 'Colchicina'],
      ans: 2,
      exp: 'Alto riesgo de lisis tumoral. La rasburicasa sería la elección para bajar rápido el ácido úrico, pero en déficit de G6PD causa hemólisis y metahemoglobinemia. Queda hidratación IV intensa con alopurinol (que evita nuevo ácido úrico) y vigilancia estrecha; diálisis si hay LRA progresiva o hiperkalemia refractaria.',
      why: ['Contraindicada en déficit de G6PD.', 'Ya no se recomienda: favorece la precipitación de fosfato de calcio y xantina.', '', 'La hidratación es la base de la prevención.', 'No tiene papel en la lisis tumoral.'],
      ref: 'Cairo-Bishop · ASCO/lisis tumoral' }),

    q({ id: 'leucemias-12', dif: 3,
      stem: 'Mujer de 42 años con LPA en inducción con ATRA y trióxido de arsénico. ECG de control: QTc 520 ms. K 3.2 mEq/L, Mg 1.5 mg/dL. Recibe ondansetrón. Sin síntomas. ¿Qué haces?',
      opts: ['Continuar igual; el QT largo es esperado', 'Suspender temporalmente el arsénico, corregir K y Mg y retirar el ondansetrón', 'Suspender el ATRA y dejar solo el arsénico', 'Cambiar a “7+3” de forma definitiva', 'Iniciar amiodarona'],
      ans: 1,
      exp: 'El trióxido de arsénico alarga el QT. Con QTc >500 ms se suspende, se corrigen electrolitos (K >4 mEq/L, Mg >1.8 mg/dL) y se retiran otros fármacos que alargan el QT; se reinicia a dosis reducida cuando el QTc baja de 460 ms.',
      why: ['Un QTc >500 ms tiene riesgo de torsade de pointes.', '', 'El ATRA no alarga el QT; el responsable es el arsénico.', 'Abandonar el esquema curativo no está indicado.', 'También alarga el QT.'],
      ref: 'ELN APL 2019' }),

    q({ id: 'leucemias-13', dif: 3,
      stem: 'Hombre de 50 años con fatiga y citopenias. Médula con 12% de mieloblastos; la citogenética muestra t(8;21) RUNX1::RUNX1T1. ¿Cómo se clasifica?',
      opts: ['SMD con exceso de blastos', 'LMA con alteración genética definitoria', 'Leucemia mieloide crónica', 'Neoplasia mieloproliferativa', 'Hematopoyesis clonal de potencial indeterminado'],
      ans: 1,
      exp: 'Con una alteración genética definitoria como t(8;21), inv(16) o t(15;17), la OMS 2022 diagnostica LMA sin importar el porcentaje de blastos, y la ICC 2022 con ≥10%. Con 12% las dos clasificaciones coinciden: es LMA, de riesgo favorable.',
      why: ['La t(8;21) define LMA aunque no haya 20% de blastos.', '', 'La LMC tiene BCR::ABL1 y blastos <10% en fase crónica.', 'No hay eritrocitosis, trombocitosis ni fibrosis que la sugieran.', 'La CHIP no tiene citopenias, displasia ni blastos aumentados.'],
      ref: 'OMS 2022 · ICC 2022' }),

    q({ id: 'leucemias-14', dif: 2,
      stem: 'Hombre de 58 años con LMA recién diagnosticada: leucocitos 185,000 (90% blastos), Hb 6.4 g/dL, plaquetas 30,000. Tiene disnea y SpO₂ 88%. ¿Qué medida debes EVITAR?',
      opts: ['Hidroxiurea para citorreducir', 'Hidratación IV y alopurinol', 'Transfundir varios concentrados eritrocitarios hasta normalizar la Hb', 'Iniciar la inducción en cuanto sea posible', 'Oxígeno suplementario'],
      ans: 2,
      exp: 'Leucostasis: los blastos aumentan la viscosidad. Transfundir eritrocitos de forma liberal la sube aún más y empeora la hipoxemia y el daño neurológico; se transfunde con prudencia y después de bajar los blastos. La base es citorreducir (hidroxiurea, inducción) y prevenir la lisis tumoral.',
      why: ['Es la medida inicial para bajar los blastos.', 'Previene la lisis tumoral, de alto riesgo aquí.', '', 'La inducción es el tratamiento definitivo de la leucostasis.', 'Está indicado por la hipoxemia.'],
      ref: 'ELN 2022 · Harrison 21e' }),

    q({ id: 'leucemias-15', dif: 2,
      stem: 'Hombre de 66 años, activo y sin comorbilidades, con SMD: 14% de blastos en médula, cariotipo complejo, IPSS-R muy alto. Tiene un hermano HLA idéntico. ¿Mejor estrategia?',
      opts: ['Eritropoyetina y transfusiones', 'Lenalidomida', 'Azacitidina y trasplante alogénico de progenitores', 'Vigilancia cada 6 meses', 'Luspatercept'],
      ans: 2,
      exp: 'SMD de alto riesgo en un paciente apto: hipometilante (azacitidina) como puente y trasplante alogénico, el único tratamiento potencialmente curativo. Los fármacos de bajo riesgo no cambian la evolución aquí.',
      why: ['Solo es soporte en bajo riesgo.', 'Es para SMD de bajo riesgo con del(5q).', '', 'Con riesgo muy alto progresa pronto a LMA.', 'Es para anemia de bajo riesgo, sobre todo con sideroblastos en anillo.'],
      ref: 'NCCN MDS · ELN SMD' })
  ],

  cases: [
    { id: 'g-leucemias', topic: 'leucemias', subj: 'hemato',
      title: 'Encías que no dejan de sangrar', place: 'Urgencias',
      patient: { name: 'Andrés', age: 38, sex: 'H', skin: '#C98E66', hair: '#1A1412', gown: '#FF8FD0' },
      intro: 'Lleva una semana con cansancio y moretones. Hoy no le para el sangrado de las encías tras cepillarse.',
      extra: { label: 'FIB', unit: 'mg/dL' },
      start: { FC: 104, PAS: 118, PAD: 70, SpO2: 98, FR: 18, X: 88 },
      nodes: [
        { tag: 'BH', ecg: 'tachy',
          text: 'Hb 8.1, plaquetas 16,000, leucocitos 1,800. TP y TTPa prolongados, dímero D muy alto. El frotis muestra promielocitos con múltiples bastones de Auer.',
          q: '¿Qué indicas ahora?',
          A: { t: 'Ácido transretinoico (ATRA) hoy mismo', ok: true, res: 'Se inicia ATRA a las 2 horas de llegar.' },
          B: { t: 'Esperar el PML::RARA para confirmar', ok: false, res: 'A las 18 h presenta cefalea intensa: hemorragia intracraneal.', vit: { PAS: 168, PAD: 98 } },
          why: 'En la LPA, el ATRA se inicia con la sospecha morfológica: la muerte temprana es por hemorragia.' },
        { tag: 'Coagulopatía', ecg: 'tachy',
          text: 'Fibrinógeno 88 mg/dL, plaquetas 16,000, sangrado gingival activo.',
          q: '¿Cómo manejas la CID?',
          A: { t: 'Heparina en infusión', ok: false, res: 'Aumenta el sangrado.' },
          B: { t: 'Crioprecipitado (fibrinógeno >150) y plaquetas (>30–50 mil)', ok: true, res: 'Fibrinógeno 168; el sangrado cede.', vit: { X: 168 } },
          why: 'En la LPA se repone agresivamente: plaquetas, fibrinógeno y plasma, mientras el ATRA corrige la coagulopatía.' },
        { tag: 'Día 6', ecg: 'tachy', vit: { FC: 116, SpO2: 89, FR: 28 },
          text: 'Fiebre de 38.4 °C, disnea, infiltrados bilaterales y derrame pleural; subió 4 kg. Creatinina en aumento.',
          q: '¿Qué agregas?',
          A: { t: 'Dexametasona 10 mg IV cada 12 h', ok: true, res: 'A las 48 h mejora la oxigenación.', vit: { FC: 94, SpO2: 95, FR: 20 } },
          B: { t: 'Suspender el ATRA de forma definitiva', ok: false, res: 'Pierdes el tratamiento que cura la enfermedad.' },
          why: 'Síndrome de diferenciación: dexametasona; el ATRA solo se pausa si es grave.' }
      ] }
  ]
};
