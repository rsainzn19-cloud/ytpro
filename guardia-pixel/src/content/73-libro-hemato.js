// Capítulos completos (estilo libro) de Hematología. Integran la Guía Hemato y el resumen 1P de la rotación
// con las guías vigentes (AGA, BSH, ASH, ISTH, ELN 2022, WHO/ICC 2022, NCCN).
const s = (h, html) => ({ h, html });
const GUIA = 'Guía Hemato y resumen 1P MI de la rotación (X. Cors, EMIS 5).';

export default {
  libro: {
    anemias: { refs: ['Ko CW, et al. AGA Clinical Practice Guidelines on Iron Deficiency Anemia. Gastroenterology 2020.', 'Camaschella C. Iron-deficiency anemia. N Engl J Med 2015.', 'Stabler SP. Vitamin B12 deficiency. N Engl J Med 2013.', GUIA], secs: [
      s('Definición', `
<p><b>Anemia</b>: disminución de la masa eritrocitaria que se expresa como Hb baja para edad y sexo — OMS: <b><13 g/dL en hombres, <12 en mujeres, <11 en embarazadas</b>. No es un diagnóstico: siempre hay que buscar la causa.</p>`),
      s('Epidemiología', `
<p>Afecta a cerca de una cuarta parte de la población mundial. La <b>ferropénica</b> es la más común (niños <5 años, mujeres en edad fértil, embarazadas); la <b>de la inflamación</b> es la segunda y la más común en hospitalizados y ancianos.</p>`),
      s('Clasificación y fisiopatología', `
<p>Se produce por <b>baja producción</b> (médula), <b>destrucción</b> (hemólisis) o <b>pérdida</b> (sangrado). Dos datos ordenan todo: el <b>VCM</b> y los <b>reticulocitos</b> (normal 0.5–2%; índice reticulocitario = % retic × Hto/45 ÷ factor de maduración; <2 hipoproliferativa, >2 regenerativa).</p>
<table class="mini"><tr><th>VCM</th><th>Causas</th></tr>
<tr><td>Microcítica (<80 fL)</td><td>Ferropenia (la más común), talasemia, inflamación crónica tardía, sideroblástica (plomo, alcohol, isoniazida, B6)</td></tr>
<tr><td>Normocítica (80–100)</td><td>Sangrado agudo, hemólisis, inflamación, ERC (↓ EPO), aplasia/infiltración medular, hipotiroidismo, mixta</td></tr>
<tr><td>Macrocítica (>100)</td><td><b>Megaloblástica</b> (B12, folato, metotrexato, hidroxiurea, AZT) · no megaloblástica (alcohol, hepatopatía, hipotiroidismo, reticulocitosis, SMD)</td></tr></table>
<p><b>Metabolismo del hierro</b>: se absorbe en el duodeno (DMT1; la vitamina C y el hierro hemo la facilitan; calcio, té, fitatos y la falta de ácido la dificultan), sale del enterocito por la <b>ferroportina</b>, viaja con la <b>transferrina</b> y se almacena como <b>ferritina</b>. La <b>hepcidina</b> (hígado) bloquea la ferroportina: sube con la inflamación (IL-6) y baja con la ferropenia.</p>`),
      s('Cuadro clínico', `
<ul><li><b>Síndrome anémico</b>: fatiga, debilidad, disnea de esfuerzo, palidez, cefalea, mareo, palpitaciones, taquicardia (primer signo de pérdida aguda), soplo sistólico de flujo, angina o IC en cardiópatas.</li><li><b>Ferropenia</b>: coiloniquia, queilitis angular, glositis, pica (pagofagia), piernas inquietas, caída de pelo; <b>Plummer-Vinson</b> (disfagia por membranas esofágicas + ferropenia).</li><li><b>B12</b>: glositis, ictericia leve (eritropoyesis ineficaz), <b>neuropatía</b> (parestesias, pérdida de vibración y propiocepción, ataxia — degeneración combinada subaguda de cordones posteriores y laterales), demencia o psicosis. Los síntomas neurológicos pueden aparecer <b>sin anemia</b>.</li><li><b>Hemólisis</b>: ictericia, coluria, esplenomegalia, litiasis pigmentaria.</li></ul>`),
      s('Diagnóstico', `
<p><b>BH con índices y reticulocitos + frotis</b> son el primer paso.</p>
<table class="mini"><tr><th></th><th>Ferropenia</th><th>Inflamación</th><th>Talasemia menor</th></tr>
<tr><td>Ferritina</td><td><b>Baja</b> (<30; <45 según AGA)</td><td>Normal o alta</td><td>Normal</td></tr>
<tr><td>Hierro sérico</td><td>Bajo</td><td>Bajo</td><td>Normal</td></tr><tr><td>Transferrina/TIBC</td><td><b>Alta</b></td><td>Baja</td><td>Normal</td></tr>
<tr><td>Saturación</td><td><15–20%</td><td>Baja</td><td>Normal</td></tr><tr><td>RDW</td><td><b>Alto</b></td><td>Normal</td><td>Normal</td></tr>
<tr><td>Receptor soluble de transferrina</td><td>Alto</td><td>Normal</td><td>—</td></tr><tr><td>Otros</td><td>Trombocitosis reactiva</td><td>PCR/VSG altas</td><td>Eritrocitos muy aumentados, Mentzer (VCM/eritrocitos) <13, electroforesis</td></tr></table>
<ul><li><b>Ferropenia en adultos sin causa obvia</b> (hombres y mujeres posmenopáusicas): <b>endoscopía y colonoscopía</b> (cáncer colorrectal, úlcera, angiodisplasia); serología de celiaca y <i>H. pylori</i>. En mujeres jóvenes, la causa suele ser menstrual.</li><li><b>Megaloblástica</b>: VCM >100, neutrófilos <b>hipersegmentados</b> (≥5 lóbulos), LDH e bilirrubina indirecta altas, pancitopenia posible. B12 baja; si es limítrofe: <b>ácido metilmalónico</b> (alto solo en déficit de B12) y homocisteína (alta en ambos). Anemia perniciosa: anticuerpos anti-factor intrínseco (específicos) y anti-células parietales, gastrina alta.</li></ul>`),
      s('Diagnóstico diferencial', `
<p>Talasemia (RDW normal, eritrocitos altos, no responde a hierro, familia), anemia sideroblástica (sideroblastos en anillo), intoxicación por plomo (punteado basófilo, dolor abdominal), anemia de ERC, hipotiroidismo, mielodisplasia (ancianos, macrocitosis, citopenias), aplasia medular, anemia dilucional del embarazo.</p>`),
      s('Tratamiento', `
<h4>Ferropénica</h4>
<ul><li><b>Trata la causa</b> (siempre buscarla).</li><li><b>Hierro oral</b> (sulfato ferroso 1 tableta, 60–65 mg de hierro elemental) una vez al día o <b>en días alternos</b> (menos hepcidina, mejor absorción y tolerancia), con el estómago vacío o con vitamina C. Efectos: estreñimiento, náusea, heces negras. Respuesta: reticulocitos a los 7–10 días, Hb sube ~1–2 g/dL en 2–4 semanas; continuar <b>3 meses tras normalizar</b> la Hb para llenar depósitos (ferritina >50).</li><li><b>Hierro IV</b> (carboximaltosa, sacarosa, derisomaltosa) si hay intolerancia, malabsorción (cirugía bariátrica, celiaca, EII), pérdidas que superan la absorción, ERC con EPO o embarazo avanzado. El dextrán de alto peso molecular tiene más anafilaxia.</li><li>Si no responde: mal apego, pérdidas continuas, malabsorción, diagnóstico equivocado o anemia mixta.</li></ul>
<h4>Inflamación</h4><p>Tratar la enfermedad de base; hierro IV si hay ferropenia absoluta concomitante; EPO en ERC o quimioterapia (meta de Hb 10–11.5, no >13).</p>
<h4>B12</h4><p>Cianocobalamina o hidroxocobalamina <b>IM</b> 1000 µg diario por 1 semana, semanal por 1 mes y luego mensual <b>de por vida</b> en anemia perniciosa; la vía oral a dosis altas (1000–2000 µg) también funciona. Reticulocitos en 3–5 días; vigila <b>hipokalemia</b> al inicio. Lo neurológico revierte si se trata pronto (<6 meses).</p>
<h4>Folato</h4><p>Ácido fólico 1–5 mg/día por 4 meses. <b>Nunca des folato solo</b> sin descartar déficit de B12: corrige la anemia pero empeora la neuropatía.</p>
<h4>Transfusión</h4><p>Restrictiva: Hb <7 g/dL (<8 en cardiopatía, cirugía cardiaca u ortopédica) o síntomas/inestabilidad; no transfundas una ferropenia estable que puede tratarse con hierro.</p>`),
      s('Complicaciones, pronóstico y puntos clave', `
<p>Angina e IC de alto gasto, peor pronóstico en cardiópatas y ancianos, alteraciones cognitivas y del desarrollo en niños, parto prematuro. La causa (cáncer de colon, sangrado oculto) suele ser más grave que la anemia misma.</p>
<p><b>Puntos clave</b>: VCM + reticulocitos ordenan el abordaje · ferritina baja = ferropenia (en adultos busca sangrado digestivo) · hierro oral en días alternos y 3 meses más · ácido metilmalónico alto solo en B12 · B12 IM de por vida en perniciosa · nunca folato solo.</p>`)
    ] },

    hemoliticas: { refs: ['Barcellini W, Fattizzo B. How I treat warm autoimmune hemolytic anemia. Blood 2021.', 'Phillips J, Henderson AC. Hemolytic Anemia: Evaluation and Differential Diagnosis. Am Fam Physician 2018.', GUIA], secs: [
      s('Definición', `
<p><b>Anemia hemolítica</b>: anemia por destrucción prematura de los eritrocitos (vida media normal ~120 días) que la médula no alcanza a compensar. Es <b>regenerativa</b> (reticulocitos altos).</p>`),
      s('Clasificación y epidemiología', `
<table class="mini"><tr><th>Intrínsecas (defecto del eritrocito; casi todas hereditarias)</th><th>Extrínsecas (eritrocito normal)</th></tr>
<tr><td><b>Membrana</b>: esferocitosis hereditaria (AD, la estructural más común), eliptocitosis, <b>HPN</b> (adquirida, PIGA)<br><b>Enzimas</b>: déficit de <b>G6PD</b> (ligado al X; la enzimática más común), déficit de piruvato cinasa<br><b>Hemoglobina</b>: drepanocitosis (HbS), HbC, talasemias</td>
<td><b>Inmunes</b>: autoinmune caliente (IgG) y fría (IgM), aloinmune (transfusión, enfermedad hemolítica del recién nacido), por fármacos<br><b>Mecánicas</b>: microangiopáticas (PTT, SUH, CID, HELLP, HTA maligna) y macroangiopáticas (prótesis valvulares, estenosis aórtica)<br><b>Infecciones</b>: malaria, <i>Babesia</i>, <i>Clostridium</i><br><b>Hiperesplenismo</b>, toxinas (veneno de serpiente, cobre)</td></tr></table>`),
      s('Fisiopatología: intravascular vs extravascular', `
<table class="mini"><tr><th></th><th>Intravascular</th><th>Extravascular</th></tr>
<tr><td>Dónde</td><td>En los vasos (complemento, trauma, toxinas)</td><td>En bazo e hígado (macrófagos)</td></tr>
<tr><td>Ejemplos</td><td>Incompatibilidad ABO, HPN, G6PD, microangiopáticas, prótesis, malaria</td><td>Esferocitosis, autoinmune caliente, drepanocitosis, talasemia</td></tr>
<tr><td>Haptoglobina</td><td>Muy baja</td><td>Baja</td></tr><tr><td>LDH</td><td>Muy alta</td><td>Alta</td></tr>
<tr><td>Hemoglobinuria / hemosiderinuria</td><td>Sí (orina oscura; hemosiderinuria a los 3–4 días)</td><td>No</td></tr>
<tr><td>Bilirrubina indirecta y urobilinógeno</td><td>Altos</td><td>Altos</td></tr><tr><td>Esplenomegalia</td><td>No típica</td><td>Sí</td></tr></table>`),
      s('Cuadro clínico', `
<p>Síndrome anémico + <b>ictericia</b> sin coluria (bilirrubina indirecta) o con orina oscura si hay hemoglobinuria, <b>esplenomegalia</b> (extravascular), <b>litiasis biliar pigmentaria</b> en jóvenes, úlceras maleolares (drepanocitosis), deformidades óseas por expansión medular (talasemia: “cráneo en cepillo”). Crisis: <b>aplásica</b> por parvovirus B19 (reticulocitos caen), hemolítica (infección, fármacos), secuestro esplénico.</p>`),
      s('Diagnóstico', `
<ol><li><b>Confirma la hemólisis</b>: reticulocitos altos + LDH alta + bilirrubina indirecta alta + <b>haptoglobina baja</b>.</li><li><b>Frotis</b>: esferocitos (esferocitosis, autoinmune caliente), <b>esquistocitos</b> (microangiopática → urgencia), células en diana (talasemia, HbC), drepanocitos, cuerpos de Heinz y “mordidas” (G6PD), aglutinación (fría), parásitos.</li><li><b>Coombs directo</b> (antiglobulina directa): positivo = inmune (anticuerpos o complemento sobre el eritrocito); IgG → caliente, C3d → fría. El <b>indirecto</b> detecta anticuerpos libres en el suero (pruebas cruzadas, embarazo).</li><li>Según la sospecha: fragilidad osmótica / EMA (esferocitosis), actividad de G6PD (después de la crisis: puede salir falsamente normal), electroforesis de Hb, citometría de flujo <b>CD55/CD59</b> (HPN), plaquetas, coagulación y función renal (PTT/SUH/CID).</li></ol>`),
      s('Entidades clave', `
<ul><li><b>Esferocitosis hereditaria</b> (ankirina, espectrina, banda 3): esferocitos, <b>CHCM alta</b>, Coombs negativo, esplenomegalia, litiasis; crisis aplásicas por parvovirus. Ácido fólico; <b>esplenectomía</b> en casos moderados-graves (vacunar antes).</li>
<li><b>Déficit de G6PD</b>: hemólisis intravascular episódica tras estrés oxidativo (<b>sulfas, primaquina, dapsona, nitrofurantoína, habas</b>, infecciones); cuerpos de Heinz y células mordidas. Evitar desencadenantes.</li>
<li><b>Autoinmune caliente</b> (IgG, 37 °C; idiopática, LES, LLC, linfomas, fármacos como metildopa o penicilinas): esferocitos, Coombs IgG+. <b>Prednisona</b> 1 mg/kg; rituximab en refractarios; esplenectomía.</li>
<li><b>Por crioaglutininas</b> (IgM + C3d; <i>Mycoplasma</i>, mononucleosis, linfomas, macroglobulinemia): acrocianosis con el frío, aglutinación. Evitar el frío, tratar la causa, rituximab; los esteroides <b>no</b> funcionan; transfundir con calentador.</li>
<li><b>Microangiopática</b> (esquistocitos + plaquetas bajas): <b>PTT</b> (ADAMTS13 <10%: fiebre, neurológico, renal → <b>plasmaféresis urgente</b>, esteroides, caplacizumab; no transfundir plaquetas), <b>SUH</b> (ECEH en niños: falla renal), CID (TP/TTPa prolongados, fibrinógeno bajo), HELLP.</li>
<li><b>HPN</b> (adquirida, PIGA → sin CD55/CD59 → lisis por complemento): hemoglobinuria matutina, pancitopenia y <b>trombosis en sitios raros</b> (Budd-Chiari). <b>Eculizumab/ravulizumab</b> (anti-C5; vacunar contra meningococo); trasplante.</li>
<li><b>Drepanocitosis</b> (Glu→Val en β-globina, HbS polimeriza con hipoxia): crisis vasoclusivas, síndrome torácico agudo, EVC, priapismo, necrosis avascular, autoesplenectomía (infecciones por encapsulados, osteomielitis por <i>Salmonella</i>). Hidroxiurea (↑ HbF), hidratación, analgesia, O₂, transfusión.</li>
<li><b>Talasemias</b>: β-menor (asintomática, microcitosis marcada, HbA₂ alta) vs β-mayor (anemia grave desde los 6 meses, transfusiones + quelación de hierro).</li></ul>`),
      s('Tratamiento general', `
<p>Ácido fólico (la hemólisis crónica lo consume); tratar o retirar la causa; transfusión si hay inestabilidad; vacunas antes de la esplenectomía (neumococo, meningococo, <i>H. influenzae</i>); manejo de la sobrecarga de hierro en transfundidos crónicos.</p>`),
      s('Complicaciones y puntos clave', `
<p>Crisis aplásica (parvovirus B19), litiasis biliar pigmentaria, sobrecarga de hierro, trombosis (HPN, AHAI), insuficiencia renal (hemoglobinuria), infecciones tras esplenectomía.</p>
<p><b>Puntos clave</b>: hemólisis = reticulocitos + LDH + bilirrubina indirecta altos, haptoglobina baja · Coombs directo separa inmune de no inmune · esquistocitos + plaquetas bajas = urgencia (PTT → plasmaféresis) · esferocitos con Coombs negativo = esferocitosis; con Coombs positivo = autoinmune caliente · G6PD tras sulfas o habas · CD55/CD59 para HPN.</p>`)
    ] },

    sangrado: { refs: ['ASH ISTH NHF WFH 2021 guidelines on von Willebrand disease. Blood Adv 2021.', 'Neunert C, et al. ASH 2019 guidelines for immune thrombocytopenia. Blood Adv 2019.', 'Tomaselli GF, et al. 2020 ACC Expert Consensus on Management of Bleeding in Patients on Oral Anticoagulants. JACC 2020.'], secs: [
      s('Bases: la hemostasia', `
<p><b>Primaria</b> (tapón plaquetario): lesión → el <b>factor de von Willebrand</b> une plaquetas al colágeno (GP Ib) → activación (ADP, tromboxano A₂) → agregación con fibrinógeno (GP IIb/IIIa). <b>Secundaria</b> (coágulo de fibrina): el factor tisular + VIIa inicia; la vía intrínseca (XII, XI, IX, VIII) amplifica; la común (X, V, II, fibrinógeno) genera trombina y fibrina; el XIII la estabiliza. Los factores II, VII, IX y X (y proteínas C y S) dependen de la <b>vitamina K</b>. La fibrinólisis (plasmina) disuelve el coágulo.</p>`),
      s('Clínica: ¿primaria o secundaria?', `
<table class="mini"><tr><th></th><th>Hemostasia primaria (plaquetas, vWF)</th><th>Secundaria (factores)</th></tr>
<tr><td>Dónde</td><td>Piel y mucosas</td><td>Tejidos profundos</td></tr>
<tr><td>Cómo</td><td><b>Petequias</b>, equimosis pequeñas, epistaxis, gingivorragia, menorragia, sangrado digestivo</td><td><b>Hemartrosis</b>, hematomas musculares, retroperitoneales</td></tr>
<tr><td>Cuándo</td><td>Inmediato tras el trauma o cirugía</td><td>Tardío (horas o días)</td></tr>
<tr><td>Ejemplos</td><td>Trombocitopenia, von Willebrand, antiagregantes, uremia</td><td>Hemofilias, déficit de vitamina K, anticoagulantes, hepatopatía</td></tr></table>`),
      s('Diagnóstico: cómo leer el laboratorio', `
<table class="mini"><tr><th>TP (INR)</th><th>TTPa</th><th>Piensa en</th></tr>
<tr><td>Prolongado</td><td>Normal</td><td>Factor VII: warfarina, déficit de vitamina K temprano, hepatopatía temprana</td></tr>
<tr><td>Normal</td><td>Prolongado</td><td>VIII, IX, XI, XII: hemofilias, von Willebrand (VIII bajo), heparina no fraccionada, anticoagulante lúpico (trombosis, no sangrado)</td></tr>
<tr><td>Prolongado</td><td>Prolongado</td><td>Vía común o múltiples: CID, hepatopatía avanzada, déficit grave de vitamina K, ACOD, dosis altas de heparina</td></tr>
<tr><td>Normal</td><td>Normal</td><td>Plaquetas (cuenta y función), von Willebrand leve, factor XIII, vasculares (escorbuto, Ehlers-Danlos)</td></tr></table>
<p><b>Prueba de mezcla</b>: si el tiempo prolongado se corrige al mezclar con plasma normal → <b>deficiencia</b> de factor; si no se corrige → <b>inhibidor</b> (anticoagulante lúpico, anti-VIII adquirido). Siempre revisa el <b>frotis</b> ante plaquetas bajas (pseudotrombocitopenia por EDTA, esquistocitos, blastos).</p>`),
      s('Trombocitopenias', `
<p>Plaquetas <150 000/µL. Sangrado espontáneo <20 000; grave <10 000.</p>
<ul><li><b>PTI</b> (trombocitopenia inmune): diagnóstico de exclusión; plaquetas aisladas bajas con frotis normal (plaquetas grandes), sin esplenomegalia. Descarta VIH, VHC, <i>H. pylori</i>, LES, fármacos. Tratar si <30 000 o hay sangrado: <b>prednisona</b> o dexametasona; IgIV si necesitas subir rápido; segunda línea: agonistas de trombopoyetina (eltrombopag, romiplostim), rituximab, esplenectomía. En niños suele ser posviral y autolimitada.</li>
<li><b>PTT</b>: anemia microangiopática + trombocitopenia (± fiebre, alteración neurológica, falla renal); ADAMTS13 <10% → <b>plasmaféresis urgente</b>.</li>
<li><b>Trombocitopenia inducida por heparina (TIH)</b>: caída >50% a los 5–10 días de heparina, con <b>trombosis</b>; score 4T y anticuerpos anti-PF4 → suspender toda heparina y anticoagular con argatrobán, fondaparinux o ACOD; no transfundir plaquetas.</li>
<li>Otras: CID, hiperesplenismo, alcohol, fármacos, infecciones (dengue, VIH), médula (leucemia, aplasia, B12), gestacional, HELLP.</li></ul>`),
      s('Hemofilias y enfermedad de von Willebrand', `
<ul><li><b>Von Willebrand</b>: el trastorno hereditario de la coagulación más común (AD); sangrado mucocutáneo, menorragia. Tiempo de sangrado/PFA prolongado, TTPa normal o largo (VIII bajo), antígeno y actividad de vWF bajos. <b>Desmopresina</b> (tipo 1), concentrados de vWF/VIII, ácido tranexámico; evitar AINE y aspirina.</li>
<li><b>Hemofilia A</b> (déficit de VIII, 80%) y <b>B</b> (IX, Christmas): <b>ligadas al X</b> (varones); hemartrosis espontáneas (artropatía), hematomas musculares, sangrado tras cirugía o circuncisión. TTPa largo con TP y plaquetas normales; dosificación del factor (grave <1%). Tratamiento: reposición del factor (profilaxis en graves), <b>emicizumab</b> en hemofilia A (también con inhibidores), desmopresina en hemofilia A leve, antifibrinolíticos. Complicación: inhibidores (anticuerpos) contra el factor.</li></ul>`),
      s('Coagulopatías adquiridas', `
<ul><li><b>Déficit de vitamina K</b> (desnutrición, antibióticos, colestasis, malabsorción, recién nacido): TP largo primero → vitamina K IV o VO.</li><li><b>Hepatopatía</b>: menos factores (salvo VIII), trombocitopenia por hiperesplenismo; el INR no predice bien el sangrado.</li><li><b>CID</b> (sepsis, trauma, cáncer, obstétricas, LPA): consumo de factores y plaquetas — TP y TTPa largos, fibrinógeno bajo, dímero D alto, plaquetas bajas, esquistocitos. Tratar la causa; plasma, crioprecipitado y plaquetas si sangra.</li><li><b>Uremia</b>: disfunción plaquetaria → desmopresina, diálisis.</li></ul>`),
      s('Revertir anticoagulantes', `
<table class="mini"><tr><th>Fármaco</th><th>Sangrado grave</th></tr>
<tr><td>Warfarina</td><td><b>Concentrado de complejo protrombínico (CCP) 4 factores</b> + vitamina K 10 mg IV (plasma si no hay CCP). INR alto sin sangrado: suspender o vitamina K oral si >10.</td></tr>
<tr><td>Dabigatrán</td><td><b>Idarucizumab</b> (también se dializa)</td></tr>
<tr><td>Apixabán / rivaroxabán</td><td><b>Andexanet alfa</b> o CCP 4 factores; carbón activado si la toma fue <2–4 h</td></tr>
<tr><td>Heparina no fraccionada</td><td><b>Protamina</b> (1 mg por 100 U)</td></tr><tr><td>HBPM</td><td>Protamina (revierte solo parcialmente)</td></tr>
<tr><td>Antiagregantes</td><td>Transfusión de plaquetas en casos seleccionados; desmopresina</td></tr></table>
<p>Medidas generales: suspender el fármaco, compresión, ácido tranexámico, transfusión según necesidad, buscar la fuente.</p>`),
      s('Puntos clave', `
<p>Mucosas y petequias = plaquetas/vWF; hemartrosis = factores · TP solo = VII (warfarina, vitamina K); TTPa solo = VIII/IX/XI o heparina; ambos = común o CID · prueba de mezcla: corrige = deficiencia · PTI = exclusión, prednisona si <30 000 · TIH = suspender heparina, argatrobán · warfarina = CCP + vitamina K; dabigatrán = idarucizumab.</p>`)
    ] },

    leucemias: { refs: ['Döhner H, et al. Diagnosis and management of AML in adults: 2022 ELN recommendations. Blood 2022.', 'Sanz MA, et al. Management of APL: updated ELN recommendations. Blood 2019.', 'Khoury JD, et al. 5th edition WHO Classification of Haematolymphoid Tumours. Leukemia 2022.'], secs: [
      s('Definición y clasificación', `
<p>Las <b>leucemias agudas</b> son proliferaciones clonales de precursores inmaduros (<b>blastos</b>) que invaden la médula (≥20% de blastos; menos si hay alteraciones genéticas definitorias) y desplazan la hematopoyesis normal. <b>LMA</b>: estirpe mieloide (adultos, mediana ~68 años). <b>LLA</b>: estirpe linfoide (la neoplasia más común en niños, pico 2–5 años). Los <b>síndromes mielodisplásicos (SMD)</b> son neoplasias mieloides con hematopoyesis ineficaz, displasia y citopenias, que pueden evolucionar a LMA.</p>`),
      s('Factores de riesgo', `
<p>Radiación, benceno, quimioterapia previa (alquilantes, inhibidores de topoisomerasa → LMA relacionada a terapia), tabaco, SMD o neoplasias mieloproliferativas previas, síndrome de Down (LLA y LMA megacarioblástica), anemia de Fanconi, Li-Fraumeni, edad (LMA y SMD).</p>`),
      s('Fisiopatología y cuadro clínico', `
<p>Los blastos ocupan la médula → <b>insuficiencia medular</b>: anemia (fatiga, palidez), <b>neutropenia</b> (fiebre e infecciones) y <b>trombocitopenia</b> (petequias, sangrado). Además infiltran tejidos: hepatoesplenomegalia, adenopatías (más en LLA), <b>hipertrofia gingival y piel</b> (LMA monocítica), SNC y testículo (LLA), masa mediastinal (LLA-T), dolor óseo (niños). <b>Leucostasis</b> con leucocitos >100 000 (disnea, alteración neurológica). La <b>leucemia promielocítica (LPA)</b> debuta con <b>CID y sangrado grave</b>.</p>`),
      s('Diagnóstico', `
<ul><li><b>BH y frotis</b>: citopenias con o sin leucocitosis, <b>blastos</b>; <b>bastones de Auer</b> = mieloide (abundantes en LPA).</li><li><b>Aspirado y biopsia de médula</b>: ≥20% de blastos; <b>citometría de flujo</b> (LMA: CD13, CD33, CD117, MPO; LLA-B: CD19, CD10, CD22, TdT; LLA-T: CD3, CD7), <b>citogenética y biología molecular</b> (definen grupo y riesgo).</li><li>Coagulación (CID en LPA), química (lisis tumoral: K, ácido úrico, fósforo, creatinina, LDH), punción lumbar en LLA, ecocardiograma antes de antraciclinas, tipificación HLA si es candidato a trasplante.</li></ul>
<table class="mini"><tr><th>Riesgo en LMA (ELN 2022)</th><th>Alteraciones</th></tr>
<tr><td>Favorable</td><td>t(8;21), inv(16), <b>t(15;17) (LPA)</b>, NPM1 mutado sin FLT3-ITD, CEBPA bZIP</td></tr>
<tr><td>Intermedio</td><td>FLT3-ITD, cariotipo normal sin otras, t(9;11)</td></tr>
<tr><td>Adverso</td><td>Cariotipo complejo, −5/−7, TP53, inv(3), t(6;9), relacionada con SMD (ASXL1, RUNX1…)</td></tr></table>
<p>En LLA: <b>cromosoma Filadelfia</b> t(9;22) BCR-ABL1 (más en adultos; peor pronóstico, pero tratable con inhibidores de tirosina cinasa); hiperdiploidía y t(12;21) favorables en niños.</p>`),
      s('Diagnóstico diferencial', `
<p>Reacción leucemoide (infección grave; neutrófilos maduros, fosfatasa alcalina alta), mononucleosis (linfocitos atípicos), aplasia medular, SMD, LMC en crisis blástica, linfoma con afección medular, metástasis medulares, déficit grave de B12 (pancitopenia megaloblástica).</p>`),
      s('Tratamiento', `
<h4>LMA</h4>
<ul><li><b>Candidato a terapia intensiva</b>: inducción “<b>7+3</b>” (citarabina 7 días + antraciclina 3 días) ± midostaurina (FLT3) o gemtuzumab (CBF); consolidación con citarabina a dosis altas; <b>trasplante alogénico</b> en riesgo intermedio o adverso en primera remisión.</li><li><b>No candidato</b> (ancianos, comorbilidades): <b>azacitidina o decitabina + venetoclax</b>; terapias dirigidas (gilteritinib FLT3, ivosidenib IDH1).</li></ul>
<h4>LPA t(15;17) PML-RARA — urgencia</h4>
<p>Inicia <b>ácido transretinoico (ATRA)</b> en cuanto la sospechas (no esperes la confirmación) + <b>trióxido de arsénico</b>; soporte agresivo de la CID (plaquetas >30–50 000, fibrinógeno >150 con crioprecipitado). Complicación: <b>síndrome de diferenciación</b> (fiebre, disnea, infiltrados, derrames, falla renal) → dexametasona. Curación >90%.</p>
<h4>LLA</h4>
<p>Inducción, consolidación, intensificación, <b>profilaxis del SNC</b> (metotrexato intratecal) y mantenimiento ~2–3 años; Ph+ → añadir <b>imatinib/dasatinib/ponatinib</b>; inmunoterapia (blinatumomab, inotuzumab, CAR-T) en refractarias o enfermedad mínima residual; trasplante en alto riesgo. En niños la curación es ~90%; en adultos ~40–50%.</p>
<h4>SMD</h4>
<p>Bajo riesgo: tratar citopenias (EPO, transfusiones, luspatercept; <b>lenalidomida en del(5q)</b>). Alto riesgo (IPSS-R/IPSS-M): <b>hipometilantes</b> (azacitidina) y trasplante alogénico en candidatos.</p>
<h4>Soporte</h4>
<p>Prevenir <b>lisis tumoral</b> (hidratación, alopurinol o rasburicasa), transfusiones irradiadas y leucorreducidas, profilaxis antiinfecciosa, <b>neutropenia febril</b> = antibiótico de amplio espectro antipseudomonas (cefepime, piperacilina-tazobactam) en la primera hora, leucoaféresis/hidroxiurea en leucostasis.</p>`),
      s('Complicaciones y pronóstico', `
<p><b>Síndrome de lisis tumoral</b> (hiperkalemia, hiperfosfatemia, hipocalcemia, hiperuricemia, falla renal), CID (LPA), leucostasis, neutropenia febril y sepsis, infecciones fúngicas, toxicidad cardiaca por antraciclinas, enfermedad injerto contra huésped tras trasplante. Pronóstico según edad, citogenética/molecular, respuesta y enfermedad mínima residual: LMA en jóvenes ~40% de curación, en >60 años mucho menor; LPA >90%; LLA infantil ~90%.</p>
<p><b>Puntos clave</b>: blastos ≥20% · Auer = mieloide · LPA = CID → ATRA de inmediato · 7+3 en LMA fit; aza/decitabina + venetoclax en no fit · LLA Ph+ = ITK · profilaxis del SNC en LLA · prevenir lisis tumoral · neutropenia febril = antibiótico en 1 h.</p>`)
    ] },

    linfo: { refs: ['Alaggio R, et al. WHO 5th ed. lymphoid neoplasms. Leukemia 2022.', 'Hallek M, et al. iwCLL guidelines for CLL. Blood 2018.', 'Cheson BD, et al. Lugano classification. J Clin Oncol 2014.', 'NCCN Guidelines: Hodgkin Lymphoma, B-cell Lymphomas.'], secs: [
      s('Definición y clasificación', `
<p>Los <b>linfomas</b> son neoplasias de linfocitos B, T o NK que forman masas en ganglios u órganos. Se dividen en <b>linfoma de Hodgkin (LH)</b> — células de Reed-Sternberg en un fondo inflamatorio — y <b>linfomas no Hodgkin (LNH)</b>: agresivos (difuso de células grandes B, Burkitt, del manto, T) e indolentes (folicular, zona marginal/MALT, linfocítico pequeño). La <b>leucemia linfocítica crónica (LLC)</b> es la misma enfermedad que el linfoma linfocítico pequeño, con predominio en sangre.</p>`),
      s('Epidemiología y factores de riesgo', `
<p>LH: distribución bimodal (20–30 y >60 años), asociado a <b>VEB</b>. LNH: más frecuente, aumenta con la edad; el <b>difuso de células grandes B</b> es el más común (~30%), seguido del folicular. LLC: la leucemia más común de adultos en Occidente (mediana ~70 años). Factores: inmunodeficiencia (VIH, trasplante), autoinmunidad (Sjögren → MALT, celiaca → linfoma T intestinal), infecciones (<b>VEB</b>: Burkitt endémico, LH; <i><b>H. pylori</b></i>: MALT gástrico; VHC: zona marginal; HTLV-1: leucemia/linfoma T del adulto; VHH-8), pesticidas.</p>`),
      s('Fisiopatología', `
<p>Alteraciones genéticas que bloquean la apoptosis o activan la proliferación: <b>t(14;18) BCL2</b> (folicular), <b>t(11;14) ciclina D1</b> (manto), <b>t(8;14) MYC</b> (Burkitt), BCL6 (difuso de células grandes), del(17p)/TP53 (LLC de mal pronóstico). En el LH, la célula de Reed-Sternberg (CD15+, CD30+, CD45−) recluta células inflamatorias que forman casi todo el tumor.</p>`),
      s('Cuadro clínico', `
<ul><li><b>Adenopatías indoloras</b>, firmes o ahuladas, persistentes (>2–4 semanas; >2 cm). LH: cervical/supraclavicular y <b>mediastinal</b>, con diseminación contigua; dolor ganglionar con el alcohol (raro, típico). LNH: diseminación no contigua, extraganglionar (estómago, piel, SNC, anillo de Waldeyer).</li><li><b>Síntomas B</b>: fiebre >38 °C, sudoración nocturna, pérdida >10% del peso en 6 meses (peor pronóstico). Prurito (LH).</li><li>Esplenomegalia, citopenias por infiltración medular, síndrome de vena cava superior, compresión medular, lisis tumoral (Burkitt).</li><li><b>LLC</b>: a menudo asintomática con <b>linfocitosis</b> en una BH de rutina; adenopatías, esplenomegalia, infecciones (hipogammaglobulinemia), anemia hemolítica autoinmune o PTI.</li></ul>`),
      s('Diagnóstico y estadificación', `
<ul><li><b>Biopsia escisional</b> del ganglio (no la aspiración con aguja fina) con inmunohistoquímica, citometría y genética.</li><li><b>LLC</b>: linfocitos B clonales ≥5000/µL en sangre por citometría (CD5+, CD19+, CD20 débil, CD23+); frotis con <b>células en mancha (smudge)</b>; no necesita biopsia.</li><li>BH, LDH (pronóstico), ácido úrico, PFH, creatinina, VIH, VHB (antes de rituximab: riesgo de reactivación), VHC, <b>PET-TC</b> (estadificación y respuesta), biopsia de médula según el tipo, ecocardiograma antes de antraciclinas.</li><li><b>Ann Arbor/Lugano</b>: I una región · II ≥2 regiones del mismo lado del diafragma · III ambos lados · IV diseminado extraganglionar (médula, hígado, pulmón). Sufijo B si hay síntomas B; X si es enfermedad voluminosa.</li><li><b>LLC</b>: Rai (0–IV) o Binet (A–C) según linfocitosis, adenopatías, organomegalia, anemia y trombocitopenia.</li></ul>`),
      s('Diagnóstico diferencial', `
<p>Adenopatía reactiva (infecciones virales, faringitis), mononucleosis, tuberculosis ganglionar, toxoplasmosis, VIH, sarcoidosis, enfermedad por arañazo de gato, LES, metástasis de carcinoma, enfermedad de Castleman, Kikuchi. Linfocitosis: viral, tos ferina, linfocitosis B monoclonal (<5000 clonales).</p>`),
      s('Tratamiento', `
<ul><li><b>Hodgkin</b>: <b>ABVD</b> (doxorrubicina, bleomicina, vinblastina, dacarbazina) guiado por PET ± radioterapia en estadios tempranos; avanzados: ABVD o BV-AVD (brentuximab vedotin) o esquemas intensivos; en recaída, quimioterapia de rescate + autotrasplante, brentuximab, anti-PD-1. Curación >80%.</li>
<li><b>Difuso de células grandes B</b>: <b>R-CHOP</b> (rituximab, ciclofosfamida, doxorrubicina, vincristina, prednisona) × 6, o Pola-R-CHP; recaída: CAR-T, autotrasplante. Curación ~60–70%.</li>
<li><b>Folicular</b> (indolente): asintomático y con baja carga → <b>observar</b>; sintomático o voluminoso → rituximab ± bendamustina/lenalidomida; radioterapia en estadio localizado. Puede transformarse a difuso de células grandes.</li>
<li><b>MALT gástrico</b> <i>H. pylori</i>+: <b>erradicar <i>H. pylori</i></b> (remite en la mayoría).</li><li><b>Burkitt</b>: quimioterapia intensiva de ciclos cortos con profilaxis del SNC; prevenir lisis tumoral (rasburicasa).</li>
<li><b>LLC</b>: <b>observar</b> en estadio temprano asintomático; tratar si hay enfermedad activa (citopenias progresivas, síntomas B, adenopatías o bazo voluminosos, tiempo de duplicación <6 meses) con <b>inhibidores de BTK</b> (ibrutinib, acalabrutinib, zanubrutinib) o <b>venetoclax + obinutuzumab</b>; la del(17p)/TP53 no responde a quimioinmunoterapia. Vacunas e IgIV si hay infecciones con hipogammaglobulinemia.</li></ul>`),
      s('Complicaciones y pronóstico', `
<p>Lisis tumoral, síndrome de vena cava superior, compresión medular, infecciones, citopenias autoinmunes (LLC), <b>transformación de Richter</b> (LLC → linfoma agresivo), segundas neoplasias y cardiotoxicidad o neumonitis (bleomicina) por el tratamiento, reactivación de VHB con rituximab. Pronóstico del LNH con el <b>IPI</b> (edad >60, LDH alta, ECOG ≥2, estadio III–IV, >1 sitio extraganglionar).</p>
<p><b>Puntos clave</b>: biopsia escisional · Reed-Sternberg CD15/CD30 = Hodgkin → ABVD · difuso de células grandes B = R-CHOP · folicular t(14;18) indolente · Burkitt t(8;14) “cielo estrellado” · MALT gástrico = erradicar H. pylori · LLC: células en mancha, observar si es temprana, BTKi o venetoclax si está activa.</p>`)
    ] }
  }
};
