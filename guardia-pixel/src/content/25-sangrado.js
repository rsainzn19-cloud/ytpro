// Tema 16 · Paciente con sangrado (Hematología, semana 4)
const T = { topic: 'sangrado', subj: 'hemato' };
const q = (o) => ({ ...T, ...o });

export default {
  lessons: {
    sangrado: {
      hook: 'Petequias o hemartrosis: primero decide si falla la plaqueta o el factor, luego lee TP, TTPa y la prueba de mezcla. Y reconoce las trombocitopenias que matan: PTT, CID y HIT.',
      compare: ['hemofilia-vwd'],
      nn: [['coagulopathy', 'Coagulopathy'], ['hemostasis-coagulation-cascade', 'Hemostasis: Coagulation Cascade']],
      yt: 'bleeding disorders hemophilia von Willebrand',
      anim: 'sangrado',
      video: [
        { ch: '¿Plaqueta o factor?', sc: [
          { v: { k: 'title', t: 'Paciente con sangrado', s: 'Tema 16 · Hematología' },
            say: 'Bienvenido a la guardia. En este video vas a aprender a abordar al paciente que sangra: decidir si falla la plaqueta o el factor, leer los tiempos de coagulación y reconocer las trombocitopenias que matan.' },
          { v: { k: 'anim', id: 'sangrado', step: 0 },
            say: 'Cuando se rompe un vaso, primero actúa la hemostasia primaria. El colágeno queda expuesto, el factor de von Willebrand se pega a él y atrapa a las plaquetas. Las plaquetas se activan, se unen entre sí con fibrinógeno y forman un tapón en segundos.' },
          { v: { k: 'vs', a: 'Plaqueta', b: 'Factor', rows: [['Dónde', 'Piel y mucosas', 'Articulaciones y músculo'], ['Lesión', 'Petequias, epistaxis, menorragia', 'Hemartrosis, hematomas'], ['Cuándo', 'Inmediato al corte', 'Tardío, horas después'], ['Ejemplos', 'PTI, von Willebrand', 'Hemofilia, warfarina']] },
            say: 'Esta es la primera pregunta: ¿falla la plaqueta o el factor? Si falla la plaqueta, sangran la piel y las mucosas, con petequias, epistaxis y menorragia, y el sangrado es inmediato. Si falla el factor, sangra lo profundo, articulaciones y músculos, y el sangrado aparece tarde, horas después de una extracción dental.' },
          { v: { k: 'mnemo', t: 'Plaqueta = Piel · Factor = Fondo', d: 'Plaqueta: superficial e inmediato (petequias, encías). Factor: profundo y tardío (hemartrosis, músculo).' },
            say: 'Recuérdalo así: plaqueta es piel, factor es fondo. Lo superficial e inmediato es de plaquetas; lo profundo y tardío es de factores.' }
        ] },
        { ch: 'Leer TP, TTPa y la mezcla', sc: [
          { v: { k: 'anim', id: 'sangrado', step: 1 },
            say: 'Ahora la cascada. La vía extrínseca empieza con el factor tisular y el factor siete, y se mide con el tiempo de protrombina. La intrínseca usa los factores doce, once, nueve y ocho, y se mide con el tiempo de tromboplastina parcial activada. Las dos llegan a la vía común, donde la trombina convierte el fibrinógeno en fibrina.' },
          { v: { k: 'list', t: 'Cómo leer TP y TTPa', items: ['TP ↑ solo: VII, warfarina, vitamina K, hígado', 'TTPa ↑ solo: VIII, IX, XI, heparina, lúpico', 'Ambos ↑: CID, hepatopatía grave, X, V, II', 'Ambos normales + sangrado: plaquetas o FvW', 'TTPa ↑ sin sangrado: factor XII'] },
            say: 'Si solo se alarga el tiempo de protrombina, piensa en el factor siete: warfarina, falta de vitamina K o hepatopatía temprana, porque el siete tiene la vida media más corta. Si solo se alarga el tiempo de tromboplastina, piensa en ocho, nueve u once, en heparina o en anticoagulante lúpico. Si se alargan ambos, piensa en coagulación intravascular diseminada o hepatopatía avanzada. Y si ambos son normales pero sangra, revisa plaquetas y factor de von Willebrand.' },
          { v: { k: 'anim', id: 'sangrado', step: 2 },
            say: 'Cuando un tiempo está alargado, haz la prueba de mezcla: plasma del paciente con plasma normal en partes iguales. Si corrige, faltaba un factor. Si no corrige, hay un inhibidor: anticoagulante lúpico, heparina o un anticuerpo contra el factor ocho.' },
          { v: { k: 'quiz', q: 'Mujer de 70 años con hematomas nuevos. TTPa 68 s que no corrige con la mezcla. ¿Qué es?', opts: ['Hemofilia A congénita', 'Hemofilia A adquirida (anti-VIII)', 'Von Willebrand tipo 1'], a: 1 },
            say: 'Pausa. Mujer de setenta años, sin antecedentes, con hematomas extensos nuevos. Tiempo de tromboplastina de sesenta y ocho segundos que no corrige con la mezcla. ¿Qué tiene?',
            exp: 'Hemofilia A adquirida: un autoanticuerpo contra el factor ocho. Sangrado nuevo en un adulto mayor con un tiempo que no corrige es la pista. El anticoagulante lúpico tampoco corrige, pero da trombosis, no hematomas.' }
        ] },
        { ch: 'Hemofilia y von Willebrand', sc: [
          { v: { k: 'vs', cmp: 'hemofilia-vwd', rows: [0, 2, 4, 6] },
            say: 'Las dos enfermedades hereditarias que siempre preguntan. La hemofilia A es ligada al X, la padecen los hombres y da hemartrosis, con tiempo de tromboplastina alargado. La enfermedad de von Willebrand es el trastorno hereditario de sangrado más común, autosómica dominante, y da sangrado de mucosas y menorragia.' },
          { v: { k: 'list', t: 'Tratamiento', items: ['Hemofilia A: factor VIII; emicizumab profiláctico', 'Hemofilia B: factor IX', 'Von Willebrand tipo 1: desmopresina', 'Mucosas y menorragia: ácido tranexámico', 'Uremia: desmopresina y diálisis'] },
            say: 'Para tratar: en la hemofilia A, concentrado de factor ocho, y emicizumab como profilaxis. En la B, factor nueve. En von Willebrand tipo uno, desmopresina, que libera el factor del endotelio; vigila el sodio, porque retiene agua. El ácido tranexámico ayuda en el sangrado de mucosas. Y en el sangrado urémico, desmopresina y diálisis.' }
        ] },
        { ch: 'Trombocitopenias que matan', sc: [
          { v: { k: 'big', h: 'PTI: cuándo tratar', t: '<30 mil', u: 'plaquetas/µL', s: 'O si sangra. Prednisona o dexametasona ± IgIV. Es diagnóstico de exclusión.' },
            say: 'La trombocitopenia inmune primaria es una trombocitopenia aislada, con plaquetas grandes en el frotis, y es un diagnóstico de exclusión. Se trata si las plaquetas son menores de treinta mil o si hay sangrado, con prednisona o dexametasona, más inmunoglobulina intravenosa si urge subirlas.' },
          { v: { k: 'case', t: 'Urgencias', p: { name: 'Lucía', age: 34, sex: 'M', skin: '#D9A37E', hair: '#3A2418', gown: '#FF8FD0' }, text: 'Confusión desde la mañana, petequias y orina oscura. Hb 7.4, plaquetas 12 mil, LDH 1,450, haptoglobina indetectable. TP y TTPa normales.', vit: { FC: '108', PA: '128/78', PLQ: '12 mil' } },
            say: 'Ahora Lucía, de treinta y cuatro años. Llega confundida, con petequias y orina oscura. Hemoglobina de siete punto cuatro, plaquetas de doce mil, deshidrogenasa láctica muy alta y haptoglobina indetectable. Los tiempos de coagulación son normales. ¿Qué buscas en el frotis?' },
          { v: { k: 'anim', id: 'sangrado', step: 3 },
            say: 'Esquistocitos. Esto es una púrpura trombocitopénica trombótica. Falta la enzima ADAMTS trece, que corta los multímeros gigantes del factor de von Willebrand. Sin ella, las plaquetas forman microtrombos en los vasos pequeños, y los eritrocitos se rompen al pasar: esos fragmentos son los esquistocitos.' },
          { v: { k: 'flow', t: 'Sospecha de PTT', steps: ['Esquistocitos + plaquetas bajas', 'TP y TTPa normales', 'PLASMIC alto: no esperes ADAMTS13', 'Recambio plasmático + esteroide', '± caplacizumab y rituximab'] },
            say: 'El manejo es una urgencia. Con esquistocitos, plaquetas bajas y coagulación normal, calcula el puntaje PLASMIC. Si es alto, inicia recambio plasmático y glucocorticoides hoy, sin esperar el resultado de ADAMTS trece. Después se agregan caplacizumab y rituximab. Sin tratamiento, la mortalidad es cercana al noventa por ciento.' },
          { v: { k: 'anim', id: 'sangrado', step: 4 },
            say: 'En la coagulación intravascular diseminada el disparador es otro: sepsis, trauma, leucemia promielocítica o una complicación obstétrica. Se forman trombos en todas partes y se consumen plaquetas y factores. Bajan las plaquetas y el fibrinógeno, se alargan ambos tiempos, sube el dímero D y el paciente sangra por las punciones. Trata la causa.' },
          { v: { k: 'tip', kind: 'trap', t: 'HIT: plaquetas ↓ >50% a los 5–10 días de heparina, con trombosis. Suspende TODA heparina; nada de warfarina inicial ni plaquetas.' },
            say: 'Ojo con la trombocitopenia inducida por heparina. Las plaquetas caen más de la mitad entre el quinto y el décimo día, y el paciente se trombosa, no sangra. Suspende toda la heparina, incluidos los lavados, e inicia argatrobán, fondaparinux o un anticoagulante oral directo. Nada de warfarina al inicio ni de transfundir plaquetas.' }
        ] },
        { ch: 'Revertir anticoagulantes', sc: [
          { v: { k: 'list', t: 'Antídotos', items: ['Warfarina + sangrado grave: vit K IV + CCP 4F', 'Heparina no fraccionada: protamina', 'Dabigatrán: idarucizumab', 'Apixabán o rivaroxabán: andexanet o CCP 4F'] },
            say: 'Por último, revertir anticoagulantes. Warfarina con sangrado grave: vitamina K intravenosa más concentrado de complejo protrombínico de cuatro factores. Heparina no fraccionada: protamina. Dabigatrán: idarucizumab. Y apixabán o rivaroxabán: andexanet alfa o, si no lo hay, complejo protrombínico.' },
          { v: { k: 'quiz', q: 'Warfarina, INR 4.2 y hemorragia intracraneal. ¿Qué das?', opts: ['Solo vitamina K oral', 'Vitamina K IV + CCP de 4 factores', 'Protamina'], a: 1 },
            say: 'Pausa. Paciente con warfarina, INR de cuatro punto dos y hemorragia intracraneal. ¿Qué le das?',
            exp: 'Vitamina K intravenosa más concentrado de complejo protrombínico de cuatro factores. El concentrado corrige en minutos y la vitamina K mantiene el efecto. La protamina es para la heparina.' },
          { v: { k: 'tip', kind: 'pearl', t: 'Esquistocitos + plaquetas bajas = PTT hasta demostrar lo contrario: recambio plasmático hoy. En PTT y HIT no transfundas plaquetas de rutina.' },
            say: 'La perla para el examen: esquistocitos con plaquetas bajas son una púrpura trombocitopénica trombótica hasta demostrar lo contrario, y se trata hoy con recambio plasmático. En ella y en la trombocitopenia por heparina, no transfundas plaquetas de rutina. Ahora ve a las preguntas del tema para fijar lo que viste.' }
        ] }
      ],
      sections: [
        { h: 'Primaria vs secundaria', html: `
<ul>
<li><b>Hemostasia primaria</b> (plaquetas, factor de von Willebrand): petequias, púrpura, sangrado de <b>mucosas</b> (epistaxis, gingivorragia, menorragia), sangrado <b>inmediato</b> tras un corte.</li>
<li><b>Hemostasia secundaria</b> (factores): <b>hemartrosis</b>, hematomas musculares profundos, sangrado <b>tardío</b> tras cirugía o extracción dental.</li>
<li>Estudios iniciales: BH con plaquetas y frotis, TP/INR, TTPa, fibrinógeno.</li>
</ul>` },
        { h: 'Cómo leer TP y TTPa', html: `
<ul>
<li><b>TP ↑, TTPa normal</b>: déficit de VII, warfarina, déficit de vitamina K o hepatopatía tempranos (el VII tiene la vida media más corta).</li>
<li><b>TP normal, TTPa ↑</b>: hemofilia A (VIII) o B (IX), déficit de XI, von Willebrand (a veces), heparina no fraccionada, anticoagulante lúpico (da <b>trombosis</b>, no sangrado), déficit de XII (no sangra).</li>
<li><b>Ambos ↑</b>: CID, hepatopatía avanzada, déficit grave de vitamina K, déficit de X, V, II o fibrinógeno.</li>
<li><b>Prueba de mezcla</b> (plasma del paciente + plasma normal 1:1): si <b>corrige</b> → falta un factor; si <b>no corrige</b> → hay un inhibidor (anticoagulante lúpico, inhibidor adquirido del VIII, heparina).</li>
</ul>` },
        { h: 'Trombocitopenias clave', html: `
<ul>
<li><b>PTI</b>: trombocitopenia aislada, frotis con plaquetas grandes y sin esquistocitos; diagnóstico de exclusión (pide VIH, VHC, H. pylori). Tratar si plaquetas &lt;30,000 o sangrado: prednisona o dexametasona ± IgIV (si sangrado grave o necesitas subirlas rápido). Segunda línea: agonistas del receptor de trombopoyetina (eltrombopag, romiplostim), rituximab, esplenectomía.</li>
<li><b>PTT (MAT)</b>: anemia hemolítica microangiopática (<b>esquistocitos</b>, LDH ↑, haptoglobina ↓) + trombocitopenia, ± fiebre, alteración neurológica y renal. ADAMTS13 &lt;10%. Es una urgencia: <b>recambio plasmático</b> + glucocorticoides ± caplacizumab, sin esperar el resultado de ADAMTS13. Evita transfundir plaquetas salvo sangrado grave.</li>
<li><b>SUH</b>: diarrea con sangre por E. coli productora de toxina Shiga (O157:H7) + lesión renal aguda; antibióticos no recomendados.</li>
<li><b>CID</b>: sepsis, trauma, LPA, complicaciones obstétricas. Plaquetas ↓, TP y TTPa ↑, fibrinógeno ↓, dímero D ↑. Trata la causa; transfunde solo si sangra (plaquetas, plasma, crioprecipitado).</li>
<li><b>HIT</b> (trombocitopenia inducida por heparina): caída &gt;50% de plaquetas 5–10 días después de iniciar heparina, con <b>trombosis</b> (no sangrado). Escala 4T + anticuerpos anti-PF4. Suspende <b>toda</b> heparina (incluidos lavados) e inicia argatrobán, fondaparinux o un ACOD. No warfarina hasta que las plaquetas se recuperen ni transfusión de plaquetas.</li>
</ul>` },
        { h: 'Hemofilia y von Willebrand', html: `
<ul>
<li><b>Hemofilia A</b> (VIII, ~80%) y <b>B</b> (IX): ligadas al X, hombres. Hemartrosis espontáneas, artropatía. TTPa ↑ con TP y plaquetas normales. Tratamiento: concentrado de factor; emicizumab como profilaxis en hemofilia A; desmopresina en hemofilia A leve.</li>
<li><b>Von Willebrand</b>: el trastorno hereditario de sangrado más común (tipo 1, autosómico dominante). Sangrado mucocutáneo y menorragia. Plaquetas normales; TTPa normal o ↑ (el FvW transporta al VIII). Pide antígeno de FvW, actividad (cofactor de ristocetina) y VIII. Tratamiento: desmopresina en el tipo 1, concentrado de FvW/VIII, ácido tranexámico.</li>
<li>Sangrado urémico: disfunción plaquetaria por uremia; desmopresina y diálisis.</li>
</ul>` },
        { h: 'Revertir anticoagulantes', html: `
<ul>
<li><b>Warfarina con sangrado grave</b>: vitamina K 10 mg IV + <b>concentrado de complejo protrombínico de 4 factores</b> (plasma fresco si no hay).</li>
<li>INR alto sin sangrado: omitir dosis; vitamina K oral si INR &gt;10.</li>
<li><b>Heparina no fraccionada</b>: protamina (revierte parcialmente la HBPM).</li>
<li><b>Dabigatrán</b>: idarucizumab. <b>Apixabán o rivaroxabán</b>: andexanet alfa o, si no hay, concentrado de complejo protrombínico.</li>
</ul>` },
        { h: 'Fisiopatología en 1 minuto', html: `
<ul>
<li><b>Hemostasia primaria</b> (segundos): el FvW se une al colágeno expuesto y a la <b>GPIb</b> de la plaqueta (adhesión); la plaqueta se activa y se une a otras con fibrinógeno a través de la <b>GPIIb/IIIa</b> (agregación). Resultado: tapón plaquetario.</li>
<li><b>Hemostasia secundaria</b> (minutos): el factor tisular + VII (vía extrínseca, <b>TP</b>) y XII, XI, IX, VIII (vía intrínseca, <b>TTPa</b>) activan la vía común (X, V, II). La trombina convierte el fibrinógeno en fibrina, que estabiliza el tapón.</li>
<li><b>Vitamina K</b>: necesaria para II, VII, IX y X (y proteínas C y S). El VII cae primero: por eso el TP se alarga antes.</li>
<li><b>ADAMTS13</b>: corta los multímeros gigantes del FvW. Si falta (PTT), las plaquetas se pegan sin control y forman microtrombos.</li>
<li><b>Trastornos de la función plaquetaria</b> (conteo normal): aspirina y otros antiagregantes, uremia, <b>Bernard-Soulier</b> (falta GPIb: plaquetas gigantes, sin aglutinación con ristocetina) y <b>Glanzmann</b> (falta GPIIb/IIIa: no agregan con ADP ni colágeno).</li>
</ul>` },
        { h: 'Diagnóstico diferencial de la trombocitopenia', html: `
<div class="tablewrap"><table class="mini">
<tr><th>Entidad</th><th>TP / TTPa</th><th>Frotis</th><th>Pista</th><th>Conducta</th></tr>
<tr><td>Pseudotrombocitopenia</td><td>Normales</td><td>Grumos de plaquetas</td><td>Sin sangrado; artefacto por EDTA</td><td>Repetir en tubo con citrato</td></tr>
<tr><td>PTI</td><td>Normales</td><td>Plaquetas grandes, sin esquistocitos</td><td>Trombocitopenia aislada; descarta VIH, VHC, H. pylori</td><td>Glucocorticoide ± IgIV si &lt;30,000 o sangra</td></tr>
<tr><td>PTT</td><td>Normales</td><td>Esquistocitos</td><td>Neuro, fiebre, LDH ↑, ADAMTS13 &lt;10%</td><td>Recambio plasmático urgente</td></tr>
<tr><td>SUH</td><td>Normales</td><td>Esquistocitos</td><td>Diarrea con sangre + lesión renal</td><td>Soporte, sin antibióticos</td></tr>
<tr><td>CID</td><td>Ambos ↑</td><td>Esquistocitos</td><td>Sepsis, trauma, obstetricia; fibrinógeno ↓, dímero D ↑</td><td>Tratar la causa; componentes si sangra</td></tr>
<tr><td>HIT</td><td>Normales</td><td>Normal</td><td>Día 5–10 de heparina, trombosis</td><td>Suspender heparina; argatrobán</td></tr>
<tr><td>Hiperesplenismo</td><td>Normales (o TP ↑ si hay cirrosis)</td><td>Normal</td><td>Esplenomegalia, cirrosis</td><td>Tratar la causa</td></tr>
</table></div>` },
        { h: 'Cómo lo preguntan en el examen', html: `
<ul>
<li>Menorragia y epistaxis desde la menarca, madre igual, plaquetas normales → <b>von Willebrand</b>.</li>
<li>Niño con hemartrosis y tío materno afectado, TTPa ↑ que corrige → <b>hemofilia A</b> (factor VIII).</li>
<li>Adulto mayor o posparto con hematomas nuevos y TTPa ↑ que <b>no corrige</b> → <b>hemofilia A adquirida</b>.</li>
<li>Confusión + petequias + esquistocitos + coagulación normal → <b>PTT</b>: recambio plasmático sin esperar ADAMTS13.</li>
<li>Día 7 de heparina, plaquetas a la mitad y TVP nueva → <b>HIT</b>: suspende toda heparina, argatrobán.</li>
<li>Terapia intensiva, ayuno y antibióticos con TP ↑ aislado que corrige → <b>déficit de vitamina K</b>.</li>
</ul>` }
      ],
      mnemo: { t: 'Plaqueta = Piel y mucosa · Factor = Fondo', d: 'Si falla la plaqueta, sangra lo superficial y al instante (petequias, encías). Si falla el factor, sangra lo profundo y tarde (articulaciones, músculo).' },
      pearl: 'Esquistocitos + plaquetas bajas = piensa en PTT y llama para recambio plasmático hoy. Sin tratamiento, la mortalidad del PTT es de ~90%.',
      trap: 'En HIT y en PTT no transfundas plaquetas de rutina: “echas leña al fuego” y aumentas la trombosis.',
      guide: [
        'Umbral para tratar PTI: la ASH 2019 sugiere tratar al adulto recién diagnosticado con plaquetas <30,000 aunque no sangre; con más de 30,000 y sin sangrado, observar. Libros previos usaban <20,000.',
        'Reversión de anti-Xa: andexanet alfa está aprobado, pero su disponibilidad es limitada en México; en la práctica se usa concentrado de complejo protrombínico.'
      ],
      refs: [
        'Neunert C, et al. ASH 2019 guidelines for immune thrombocytopenia. Blood Adv 2019.',
        'Zheng XL, et al. ISTH guidelines for the diagnosis and treatment of TTP. J Thromb Haemost 2020.',
        'Cuker A, et al. ASH 2018 guidelines for heparin-induced thrombocytopenia. Blood Adv 2018.',
        'James PD, et al. ASH/ISTH/NHF/WFH 2021 guidelines on von Willebrand disease. Blood Adv 2021.'
      ]
    }
  },

  compares: {
    'hemofilia-vwd': {
      topic: 'sangrado', a: 'Hemofilia A', b: 'Von Willebrand',
      rows: [
        ['Herencia', 'Ligada al X (hombres)', 'Autosómica dominante (tipo 1)'],
        ['Defecto', 'Factor VIII', 'Factor de von Willebrand (y VIII secundariamente)'],
        ['Tipo de sangrado', 'Profundo: hemartrosis, hematomas', 'Mucocutáneo: epistaxis, menorragia'],
        ['Plaquetas', 'Normales', 'Normales (en número)'],
        ['TTPa', '↑', 'Normal o ↑'],
        ['TP', 'Normal', 'Normal'],
        ['Prueba clave', 'Actividad del VIII', 'Antígeno y actividad del FvW (ristocetina)'],
        ['Tratamiento', 'Factor VIII, emicizumab; desmopresina si es leve', 'Desmopresina (tipo 1), concentrado de FvW/VIII, tranexámico']
      ]
    }
  },

  anims: {
    sangrado: {
      title: 'Del tapón plaquetario a la CID',
      steps: [
        { cap: '<b>Hemostasia primaria.</b> Al romperse el vaso queda expuesto el colágeno. El factor de von Willebrand se une a él y atrapa plaquetas, que se activan y se agregan hasta formar un tapón que detiene la fuga.',
          labels: [[24, 38, 'Plaquetas'], [80, 56, 'Tapón plaquetario'], [112, 74, 'FvW'], [80, 102, 'Colágeno expuesto']] },
        { cap: '<b>Cascada de coagulación.</b> La vía extrínseca (factor tisular + VII) se mide con el TP; la intrínseca (XII, XI, IX, VIII) con el TTPa. Ambas convergen en X, V y II: la trombina convierte el fibrinógeno en una red de fibrina.',
          labels: [[26, 10, 'TP: FT + VII'], [118, 10, 'TTPa: XII·XI·IX·VIII'], [112, 54, 'Común: X·V·II'], [52, 74, 'Trombina'], [80, 108, 'Red de fibrina']] },
        { cap: '<b>Prueba de mezcla.</b> Plasma del paciente + plasma normal 1:1. Si falta un factor, el normal lo repone y el tiempo corrige. Si hay un inhibidor (anticoagulante lúpico, anti-VIII, heparina), también bloquea al plasma normal y no corrige.',
          labels: [[40, 6, 'Déficit de factor'], [120, 6, 'Inhibidor'], [40, 104, 'Corrige'], [120, 104, 'No corrige']] },
        { cap: '<b>PTT.</b> Sin ADAMTS13, los multímeros gigantes del factor de von Willebrand no se cortan y atrapan plaquetas: se forman microtrombos. Los eritrocitos se rompen al pasar y aparecen esquistocitos.',
          labels: [[36, 40, 'FvW gigante'], [80, 42, 'Microtrombo'], [134, 70, 'Esquistocitos'], [34, 116, 'Sin ADAMTS13']] },
        { cap: '<b>CID.</b> Un disparador como la sepsis activa la coagulación en todos los vasos: se forman microtrombos y se consumen plaquetas y fibrinógeno, mientras la fibrinólisis eleva el dímero D. El paciente se trombosa y sangra a la vez.',
          labels: [[14, 10, 'Sepsis'], [96, 21, 'Microtrombos'], [16, 112, 'Plaq'], [38, 112, 'Fib'], [60, 112, 'DD'], [124, 110, 'Sangra en punciones']] }
      ]
    }
  },

  cards: [
    ['Petequias y sangrado de mucosas', 'Defecto de hemostasia primaria (plaquetas o FvW)'],
    ['Hemartrosis', 'Defecto de factores: piensa en hemofilia'],
    ['TP ↑ aislado', 'Déficit de VII, warfarina, vitamina K o hepatopatía temprana'],
    ['TTPa ↑ aislado que no corrige con mezcla', 'Inhibidor: anticoagulante lúpico, inhibidor adquirido del VIII o heparina'],
    ['Péntada clásica del PTT', 'Anemia microangiopática, trombocitopenia, fiebre, alteración neurológica, falla renal (rara vez completa)'],
    ['Tratamiento urgente del PTT', 'Recambio plasmático + glucocorticoides ± caplacizumab'],
    ['CID: laboratorios', 'Plaquetas ↓, TP/TTPa ↑, fibrinógeno ↓, dímero D ↑, esquistocitos'],
    ['HIT: momento típico', '5–10 días después de iniciar heparina; caída >50% de plaquetas y trombosis'],
    ['HIT: tratamiento', 'Suspender toda heparina; argatrobán, fondaparinux o ACOD'],
    ['Trastorno hereditario de sangrado más común', 'Enfermedad de von Willebrand'],
    ['Warfarina + sangrado grave', 'Vitamina K IV + concentrado de complejo protrombínico de 4 factores'],
    ['Antídoto de dabigatrán', 'Idarucizumab'],
    ['PTI: cuándo tratar (ASH 2019)', 'Plaquetas <30,000 o sangrado'],
    ['Plaquetas bajas sin sangrado + grumos en el frotis', 'Pseudotrombocitopenia por EDTA: repite el conteo en tubo con citrato'],
    ['Bernard-Soulier', 'Falta GPIb (receptor del FvW): plaquetas gigantes, sin aglutinación con ristocetina'],
    ['Glanzmann', 'Falta GPIIb/IIIa: plaquetas normales que no agregan con ADP ni colágeno'],
    ['Desmopresina: efecto adverso y contraindicación', 'Hiponatremia (restringe líquidos); evitar en von Willebrand tipo 2B'],
    ['PTI con sangrado que amenaza la vida', 'Plaquetas + IgIV + glucocorticoide IV (aquí sí se transfunden)']
  ],

  questions: [
    q({ id: 'sangrado-01', dif: 1,
      stem: 'Mujer de 24 años con menorragia desde la menarca y epistaxis frecuentes. Su madre tiene lo mismo. Plaquetas 260,000, TP normal, TTPa 39 s (límite alto). ¿Diagnóstico más probable?',
      opts: ['Hemofilia A', 'Enfermedad de von Willebrand', 'PTI', 'Déficit de vitamina K', 'Anticoagulante lúpico'],
      ans: 1,
      exp: 'Sangrado mucocutáneo + herencia autosómica dominante + plaquetas normales: enfermedad de von Willebrand tipo 1. El TTPa puede salir normal o algo prolongado porque el FvW protege al VIII.',
      why: ['Es ligada al X y da hemartrosis.', '', 'Las plaquetas son normales.', 'Prolongaría el TP.', 'Da trombosis, no sangrado.'],
      ref: 'ASH/ISTH 2021 vWD' }),

    q({ id: 'sangrado-02', dif: 1,
      stem: 'Niño de 8 años con hemartrosis de rodilla tras una caída menor. Un tío materno tenía lo mismo. Plaquetas normales, TP normal, TTPa prolongado que corrige con la prueba de mezcla. ¿Qué déficit es más probable?',
      opts: ['Factor VII', 'Factor VIII', 'Factor XII', 'Fibrinógeno', 'Factor XIII'],
      ans: 1,
      exp: 'Hemartrosis + herencia por línea materna (ligada al X) + TTPa ↑ que corrige: hemofilia. La A (VIII) es ~4 veces más frecuente que la B (IX).',
      why: ['Prolongaría el TP.', '', 'Prolonga el TTPa pero no da sangrado.', 'Prolongaría TP y TTPa.', 'TP y TTPa normales.'],
      ref: 'WFH 2020' }),

    q({ id: 'sangrado-03', dif: 2,
      stem: 'Mujer de 35 años con confusión, petequias y orina oscura. Hb 7.8, plaquetas 14,000, esquistocitos abundantes, LDH 1,600, haptoglobina indetectable, creatinina 1.4, TP y TTPa normales. ¿Siguiente paso?',
      opts: ['Transfundir plaquetas', 'Recambio plasmático urgente + glucocorticoides', 'Esperar el resultado de ADAMTS13', 'IgIV sola', 'Heparina'],
      ans: 1,
      exp: 'Anemia microangiopática + trombocitopenia + afección neurológica con coagulación normal: PTT. Se inicia recambio plasmático sin esperar ADAMTS13 (el plasma repone la enzima y retira los autoanticuerpos). Se agrega caplacizumab si está disponible.',
      why: ['Puede empeorar la trombosis.', '', 'El retraso aumenta la mortalidad.', 'No es el tratamiento del PTT.', 'No está indicada; aumenta el sangrado.'],
      ref: 'ISTH 2020 TTP' }),

    q({ id: 'sangrado-04', dif: 2,
      stem: 'Hombre de 66 años en el día 7 de heparina no fraccionada tras una cirugía de cadera. Plaquetas bajaron de 240,000 a 90,000 y tiene trombosis venosa profunda nueva. ¿Qué haces?',
      opts: ['Cambiar a enoxaparina', 'Suspender toda heparina e iniciar argatrobán', 'Iniciar warfarina de inmediato', 'Transfundir plaquetas', 'Continuar la heparina a menor dosis'],
      ans: 1,
      exp: 'HIT con alta probabilidad (4T alto). Se suspende toda heparina, incluida la HBPM, y se usa un anticoagulante no heparínico. La warfarina se inicia hasta que las plaquetas se recuperan (riesgo de necrosis cutánea y gangrena venosa).',
      why: ['La HBPM tiene reacción cruzada.', '', 'Puede causar gangrena venosa al inicio.', 'Aumenta la trombosis.', 'Mantiene el estímulo.'],
      ref: 'ASH 2018 HIT' }),

    q({ id: 'sangrado-05', dif: 2,
      stem: 'Paciente con choque séptico y sangrado por sitios de punción. Plaquetas 42,000, TP y TTPa prolongados, fibrinógeno 80 mg/dL, dímero D muy alto. ¿Diagnóstico y medida principal?',
      opts: ['PTI; prednisona', 'CID; tratar la sepsis y reponer componentes porque sangra', 'Hemofilia adquirida; factor VIII', 'PTT; recambio plasmático', 'HIT; argatrobán'],
      ans: 1,
      exp: 'CID: consumo de plaquetas y factores con fibrinólisis (fibrinógeno ↓, dímero D ↑). Se trata la causa; como sangra, se transfunden plaquetas, plasma y crioprecipitado (fibrinógeno).',
      why: ['El PTI no prolonga TP/TTPa.', '', 'Solo prolongaría el TTPa.', 'En el PTT la coagulación es normal.', 'No hay exposición a heparina.'],
      ref: 'ISTH CID' }),

    q({ id: 'sangrado-06', dif: 1,
      stem: 'Mujer de 30 años con petequias. Plaquetas 18,000; el resto de la BH y el frotis son normales salvo plaquetas grandes. No sangra activamente. ¿Tratamiento inicial?',
      opts: ['Observación sin tratamiento', 'Glucocorticoides (prednisona o dexametasona)', 'Esplenectomía', 'Transfusión de plaquetas', 'Rituximab'],
      ans: 1,
      exp: 'PTI con plaquetas <30,000: primera línea glucocorticoides (± IgIV si se necesita respuesta rápida). Esplenectomía, rituximab y agonistas de TPO son segunda línea.',
      why: ['Con <30,000 se trata.', '', 'Segunda línea.', 'Solo en sangrado grave o procedimiento.', 'Segunda línea.'],
      ref: 'ASH 2019 PTI' }),

    q({ id: 'sangrado-07', dif: 2,
      stem: 'Hombre con fibrilación auricular en warfarina llega con hemorragia intracraneal. INR 4.2. ¿Qué das?',
      opts: ['Solo suspender warfarina', 'Vitamina K 10 mg IV + concentrado de complejo protrombínico de 4 factores', 'Protamina', 'Idarucizumab', 'Vitamina K oral'],
      ans: 1,
      exp: 'Sangrado que amenaza la vida: el concentrado de complejo protrombínico corrige el INR en minutos y la vitamina K IV mantiene el efecto (la vida media del concentrado es corta).',
      why: ['Tardaría días.', '', 'Revierte heparina.', 'Revierte dabigatrán.', 'Demasiado lenta para un sangrado grave.'],
      ref: 'ACC 2020 Expert Consensus on Bleeding' }),

    q({ id: 'sangrado-08', dif: 3,
      stem: 'Mujer de 70 años sin antecedentes de sangrado presenta hematomas extensos en brazos y muslo. TP normal, TTPa 68 s, no corrige con la prueba de mezcla incubada 2 horas. Plaquetas normales. ¿Diagnóstico más probable?',
      opts: ['Hemofilia A congénita', 'Hemofilia A adquirida (inhibidor del factor VIII)', 'Déficit de vitamina K', 'Von Willebrand tipo 1', 'Anticoagulante lúpico'],
      ans: 1,
      exp: 'Sangrado nuevo en adulto mayor + TTPa ↑ que no corrige (sobre todo tras incubar) = autoanticuerpo contra el VIII. Se asocia a edad, posparto, autoinmunidad y cáncer. Se trata con agentes de bypass (factor VII activado) e inmunosupresión.',
      why: ['No debutaría a los 70 y la mezcla corregiría.', '', 'Prolongaría el TP y corregiría.', 'La mezcla corregiría.', 'No corrige, pero causa trombosis, no hematomas.'],
      ref: 'International recommendations on acquired hemophilia A, 2020' }),

    q({ id: 'sangrado-09', dif: 2,
      stem: 'Hombre con ERC en diálisis tiene sangrado prolongado por el sitio de una biopsia renal. Plaquetas, TP y TTPa normales. ¿Qué fármaco ayuda?',
      opts: ['Vitamina K', 'Desmopresina', 'Heparina', 'Plasma fresco', 'Protamina'],
      ans: 1,
      exp: 'La uremia causa disfunción plaquetaria con conteo normal. La desmopresina libera FvW del endotelio y mejora la adhesión plaquetaria; la diálisis también ayuda.',
      why: ['La vía de la coagulación está normal.', '', 'Empeora el sangrado.', 'Los factores están normales.', 'No hay heparina que revertir.'],
      ref: 'Harrison 21e' }),

    q({ id: 'sangrado-10', dif: 1,
      stem: 'Un paciente con TTPa prolongado no tiene ningún antecedente de sangrado y le extraen una muela sin problemas. La prueba de mezcla corrige. ¿Qué déficit explica el hallazgo?',
      opts: ['Factor VIII', 'Factor IX', 'Factor XII', 'Factor XI', 'Factor de von Willebrand'],
      ans: 2,
      exp: 'El déficit de factor XII prolonga mucho el TTPa in vitro pero no causa sangrado (in vivo la coagulación se inicia por la vía del factor tisular).',
      why: ['Daría hemofilia A con sangrado.', 'Daría hemofilia B con sangrado.', '', 'El XI sí puede sangrar, sobre todo en cirugía.', 'Da sangrado mucocutáneo.'],
      ref: 'Harrison 21e' }),

    q({ id: 'sangrado-11', dif: 2,
      stem: 'Hombre de 45 años asintomático, sin petequias ni sangrados, con plaquetas de 38,000/µL en un chequeo. Su BH de hace un año era normal. El frotis muestra grumos de plaquetas. ¿Siguiente paso?',
      opts: ['Prednisona por PTI', 'Repetir el conteo en tubo con citrato', 'Aspirado de médula ósea', 'Transfundir plaquetas', 'Pedir ADAMTS13 urgente'],
      ans: 1,
      exp: 'Pseudotrombocitopenia: el EDTA del tubo morado hace que las plaquetas se agrupen in vitro y el contador las lee bajas. Pistas: paciente sin sangrado y grumos en el frotis. Se confirma repitiendo el conteo en tubo con citrato.',
      why: ['Tratarías un número falso; primero confírmalo.', '', 'Invasivo e innecesario.', 'No hay trombocitopenia real ni sangrado.', 'Los grumos no sugieren microangiopatía; no hay esquistocitos ni hemólisis.'],
      ref: 'Harrison 21e' }),

    q({ id: 'sangrado-12', dif: 2,
      stem: 'Mujer de 29 años con enfermedad de von Willebrand tipo 1 que respondió bien a una prueba con desmopresina. Se hará una extracción dental. ¿Cuál es el manejo y qué efecto adverso vigilas?',
      opts: ['Plasma fresco congelado; sobrecarga de volumen', 'Desmopresina + ácido tranexámico; hiponatremia', 'Transfusión de plaquetas; reacción febril', 'Vitamina K; anafilaxia', 'Concentrado de factor IX; trombosis'],
      ans: 1,
      exp: 'En el tipo 1 la desmopresina libera FvW y VIII del endotelio, y el ácido tranexámico protege el coágulo en la mucosa oral. La desmopresina es antidiurética: restringe líquidos 24 h y vigila el sodio. En el tipo 2B está contraindicada porque empeora la trombocitopenia.',
      why: ['Aporta poco FvW por volumen; hay opciones específicas.', '', 'Las plaquetas son normales; el defecto es el FvW.', 'El defecto no depende de la vitamina K.', 'El factor IX es para la hemofilia B.'],
      ref: 'ASH/ISTH/NHF/WFH 2021 vWD' }),

    q({ id: 'sangrado-13', dif: 2,
      stem: 'Mujer de 38 años con PTI conocida llega con cefalea súbita y hemorragia intracraneal en la TC. Plaquetas 6,000/µL. ¿Qué tratamiento indicas?',
      opts: ['Solo prednisona oral', 'Transfusión de plaquetas + IgIV + glucocorticoide IV', 'Esplenectomía urgente', 'Observar: en la PTI nunca se transfunden plaquetas', 'Rituximab como único fármaco'],
      ans: 1,
      exp: 'Sangrado que amenaza la vida en PTI: se combinan transfusión de plaquetas (aunque duren poco), IgIV y glucocorticoide IV a dosis altas; puede agregarse un agonista del receptor de TPO. La regla de no transfundir plaquetas aplica a PTT y HIT, no a la PTI con sangrado grave.',
      why: ['Tarda días en actuar; necesita subir las plaquetas ya.', '', 'No es la medida inicial en la urgencia.', 'Confundes con PTT y HIT: aquí sí se transfunden.', 'Tarda semanas en actuar.'],
      ref: 'ASH 2019 PTI' }),

    q({ id: 'sangrado-14', dif: 2,
      stem: 'Hombre de 60 años con 3 semanas en terapia intensiva, en ayuno y con antibióticos de amplio espectro. Sangra por sitios de punción. Plaquetas 210,000, INR 2.6, TTPa normal, fibrinógeno normal. La mezcla corrige. ¿Qué indicas?',
      opts: ['Protamina', 'Vitamina K IV', 'Crioprecipitado', 'Desmopresina', 'Factor VIII'],
      ans: 1,
      exp: 'Ayuno + antibióticos (eliminan la flora que produce vitamina K) = déficit de vitamina K. Cae primero el VII, de vida media más corta: TP prolongado aislado que corrige con la mezcla. Se da vitamina K IV; si el sangrado es grave, se agrega concentrado de complejo protrombínico.',
      why: ['Revierte heparina, que alargaría el TTPa.', '', 'El fibrinógeno es normal.', 'Sirve en von Willebrand y uremia.', 'El VIII no depende de la vitamina K y el TTPa es normal.'],
      ref: 'Harrison 21e' }),

    q({ id: 'sangrado-15', dif: 3,
      stem: 'Niño de 6 años con epistaxis y gingivorragia frecuentes. Plaquetas 110,000/µL, gigantes en el frotis. TP y TTPa normales. No aglutinan con ristocetina, pero sí agregan con ADP y colágeno. ¿Diagnóstico?',
      opts: ['Trombastenia de Glanzmann', 'Síndrome de Bernard-Soulier', 'Hemofilia A', 'PTI', 'Enfermedad de von Willebrand tipo 3'],
      ans: 1,
      exp: 'Bernard-Soulier: falta la GPIb, receptor del FvW. Da plaquetas gigantes, trombocitopenia leve y falta de aglutinación con ristocetina que no corrige al agregar FvW. Glanzmann es el déficit de GPIIb/IIIa: plaquetas normales que no agregan con ADP ni colágeno, pero sí con ristocetina.',
      why: ['En Glanzmann el número y el tamaño son normales, y falla la agregación con ADP y colágeno.', '', 'Daría hemartrosis y TTPa prolongado.', 'Tiene plaquetas grandes, pero la aglutinación con ristocetina es normal.', 'Las plaquetas son de tamaño normal y el VIII muy bajo alargaría el TTPa.'],
      ref: 'Harrison 21e' })
  ],

  cases: [
    { id: 'g-sangrado', topic: 'sangrado', subj: 'hemato',
      title: 'Petequias en la sala de espera', place: 'Urgencias',
      patient: { name: 'Lucía', age: 34, sex: 'M', skin: '#D9A37E', hair: '#3A2418', gown: '#FF8FD0' },
      intro: 'Llegó porque su familia la notó confundida desde la mañana. Tiene petequias en piernas y orina oscura. Ningún fármaco nuevo.',
      extra: { label: 'PLQ', unit: 'mil' },
      start: { FC: 108, PAS: 128, PAD: 78, SpO2: 97, FR: 20, X: 12 },
      nodes: [
        { tag: 'Laboratorios', ecg: 'tachy',
          text: 'Hb 7.4, plaquetas 12,000, LDH 1,450, haptoglobina indetectable, bilirrubina indirecta 2.8. TP y TTPa normales.',
          q: '¿Qué estudio cambia todo en este momento?',
          A: { t: 'Frotis de sangre periférica', ok: true, res: 'Abundantes esquistocitos: hemólisis microangiopática.' },
          B: { t: 'Aspirado de médula ósea', ok: false, res: 'Retrasas el diagnóstico; el frotis ya te lo dice.' },
          why: 'Anemia hemolítica + trombocitopenia: el frotis con esquistocitos define la microangiopatía trombótica.' },
        { tag: 'Decisión', ecg: 'tachy',
          text: 'Esquistocitos, coagulación normal, alteración neurológica. Puntaje PLASMIC 7 (alto). ADAMTS13 tardará 3 días.',
          q: '¿Qué haces?',
          A: { t: 'Esperar el ADAMTS13 para confirmar', ok: false, res: 'Al día siguiente presenta una crisis convulsiva.', vit: { FC: 124, X: 8 } },
          B: { t: 'Recambio plasmático hoy + glucocorticoides', ok: true, res: 'Se coloca catéter y se inicia el recambio en las primeras horas.' },
          why: 'El PTT se trata con la sospecha: cada hora sin recambio aumenta la mortalidad.' },
        { tag: 'Enfermería pregunta', ecg: 'normal', vit: { FC: 96, X: 18 },
          text: 'La enfermera ve que tiene 18,000 plaquetas y propone transfundir dos aféresis antes del catéter.',
          q: '¿Qué contestas?',
          A: { t: 'Sí, transfundir para colocar el catéter con seguridad', ok: false, res: 'La transfusión puede alimentar los microtrombos.' },
          B: { t: 'No de rutina: se coloca el catéter con técnica cuidadosa; plaquetas solo si hay sangrado grave', ok: true, res: 'El catéter se coloca guiado por ultrasonido sin complicaciones.' },
          why: 'En PTT la transfusión de plaquetas se reserva para sangrado que amenaza la vida.' },
        { tag: 'Día 3', ecg: 'normal', vit: { FC: 84, PAS: 120, PAD: 74, X: 96 },
          text: 'ADAMTS13 <5% con inhibidor positivo. Plaquetas subiendo, LDH bajando.',
          q: '¿Qué agregas para reducir recaídas?',
          A: { t: 'Rituximab (± caplacizumab mientras persista la enzima baja)', ok: true, res: 'Egresa al día 9 con plaquetas de 180,000.', vit: { X: 180 } },
          B: { t: 'Esplenectomía urgente', ok: false, res: 'No es el siguiente paso; existe inmunosupresión eficaz.' },
          why: 'El PTT inmune se debe a autoanticuerpos anti-ADAMTS13: rituximab reduce las recaídas.' }
      ] }
  ]
};
