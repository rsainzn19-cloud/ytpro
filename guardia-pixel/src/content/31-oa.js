// Tema 22 · Osteoartritis (Reumatología, semana 4)
const T = { topic: 'oa', subj: 'reuma' };
const q = (o) => ({ ...T, ...o });

export default {
  lessons: {
    oa: {
      hook: 'Dolor articular mecánico en mayores de 45 años, rigidez breve y laboratorio normal: osteoartritis. El tratamiento empieza con ejercicio y bajar de peso, no con pastillas.',
      compare: ['ar-oa'],
      anim: 'oa',
      nn: [],
      yt: 'osteoarthritis',
      sections: [
        { h: 'Clínica', html: `
<ul>
<li>Dolor <b>mecánico</b>: empeora con el uso, mejora con el reposo; rigidez matutina <b>&lt;30 min</b> y tras inactividad (“gelificación”).</li>
<li>Crepitación, deformidad ósea, limitación del arco de movimiento, derrame frío ocasional.</li>
<li>Articulaciones: rodillas, caderas, columna, <b>IFD</b> (nódulos de <b>Heberden</b>), <b>IFP</b> (nódulos de <b>Bouchard</b>), base del pulgar (1ª carpometacarpiana, rizartrosis), 1ª MTF.</li>
<li><b>Respeta MCF, muñeca, codo y hombro</b>. Si están afectadas, piensa en otra cosa: depósito de pirofosfato, hemocromatosis (2ª y 3ª MCF), AR.</li>
<li>Factores: edad, obesidad, sexo femenino, lesiones previas, alineación, ocupación.</li>
</ul>` },
        { h: 'Diagnóstico', html: `
<ul>
<li><b>Clínico</b> (NICE): ≥45 años, dolor articular relacionado con la actividad y rigidez matutina ausente o &lt;30 min. No necesita imagen para diagnosticar.</li>
<li><b>Rx</b>: disminución <b>asimétrica</b> del espacio articular, <b>osteofitos</b>, esclerosis subcondral, quistes subcondrales (Kellgren-Lawrence 0–4). La imagen no siempre se correlaciona con el dolor.</li>
<li>Laboratorio <b>normal</b> (VSG, PCR). Líquido sinovial no inflamatorio (&lt;2,000 leucocitos/µL).</li>
<li>OA erosiva de manos: IFP e IFD inflamadas, Rx en “alas de gaviota”.</li>
</ul>` },
        { h: 'Tratamiento (ACR 2019)', html: `
<ul>
<li><b>Base para todos</b>: educación, <b>ejercicio</b> (fortalecimiento, aeróbico, tai chi), <b>bajar de peso</b> (≥5% en OA de rodilla o cadera), bastón en la mano <b>contraria</b> a la rodilla o cadera afectada, órtesis en la base del pulgar.</li>
<li><b>AINE tópicos</b> en rodilla (y mano): primera opción farmacológica, con menos efectos adversos.</li>
<li><b>AINE orales</b> a la dosis más baja y por el menor tiempo: los más eficaces; cuidado con riñón, estómago y corazón.</li>
<li>Esteroide intraarticular en rodilla o cadera: alivio de semanas.</li>
<li>Paracetamol: efecto mínimo; duloxetina y tramadol: recomendación condicional.</li>
<li><b>No recomendados</b> (ACR 2019): glucosamina y condroitina, ácido hialurónico en rodilla, opioides fuertes de forma crónica, bisfosfonatos, hidroxicloroquina.</li>
<li>Falla del tratamiento con dolor y limitación importantes: <b>artroplastia</b>.</li>
</ul>` }
      ],
      mnemo: { t: 'Heberden arriba, Bouchard en medio', d: 'H de Heberden = la articulación más Hacia la punta (IFD). B de Bouchard = la del medio (IFP).' },
      pearl: 'Hay que bajar de peso: cada kilo menos quita unos 4 kg de carga a la rodilla en cada paso.',
      trap: 'OA en MCF, muñeca u hombro: busca pirofosfato de calcio (condrocalcinosis) o hemocromatosis (ferritina y saturación de transferrina).',
      guide: [
        'Ácido hialurónico intraarticular: la ACR 2019 recomienda en contra en rodilla; ESCEO y otras guías europeas lo aceptan en casos seleccionados. Para el examen, sigue la ACR/OARSI que pida tu curso.',
        'Glucosamina y condroitina: ACR 2019 recomienda fuertemente en contra; ESCEO acepta formulaciones de sulfato de glucosamina cristalino de prescripción.'
      ],
      refs: [
        'Kolasinski SL, et al. 2019 ACR/Arthritis Foundation Guideline for the Management of Osteoarthritis of the Hand, Hip, and Knee. Arthritis Rheumatol 2020.',
        'Bannuru RR, et al. OARSI guidelines for the non-surgical management of knee, hip, and polyarticular OA. Osteoarthritis Cartilage 2019.',
        'NICE NG226: Osteoarthritis in over 16s, 2022.'
      ]
    }
  },

  anims: {
    oa: {
      title: 'Del cartílago sano a la descarga',
      steps: [
        { cap: '<b>Rodilla sana.</b> El cartílago es grueso y liso y reparte la carga por igual entre el compartimento medial y el lateral. El espacio articular es simétrico.',
          labels: [[80, 14, 'Fémur'], [26, 72, 'Cartílago'], [80, 104, 'Tibia']] },
        { cap: '<b>Desgaste del cartílago.</b> Con la carga repetida el cartílago medial se adelgaza y se fisura: el espacio se estrecha de un solo lado. El dolor sube con el uso y baja con el reposo (dolor mecánico).',
          labels: [[24, 62, 'Cartílago fisurado'], [118, 78, 'Lado sano'], [146, 104, 'Dolor']] },
        { cap: '<b>Rx de la OA.</b> El hueso responde: osteofitos en los bordes, esclerosis subcondral (hueso más blanco) y quistes subcondrales, con estrechamiento asimétrico del espacio articular.',
          labels: [[22, 92, 'Osteofito'], [62, 66, 'Esclerosis'], [50, 100, 'Quiste'], [112, 64, 'Espacio conservado']] },
        { cap: '<b>Manos.</b> Los osteofitos forman nódulos duros: Heberden en las IFD y Bouchard en las IFP. También duele la base del pulgar (1ª carpometacarpiana). La MCF se respeta.',
          labels: [[112, 26, 'Heberden (IFD)'], [74, 76, 'Bouchard (IFP)'], [30, 26, 'MCF respetada'], [30, 112, 'Base del pulgar']] },
        { cap: '<b>Quitar carga.</b> Bajar de peso y fortalecer el cuádriceps reducen la fuerza sobre el cartílago: cada kilo menos quita unos 4 kg de carga a la rodilla en cada paso, y el dolor baja.',
          labels: [[80, 30, 'Carga'], [44, 14, 'Cuádriceps'], [16, 104, 'Peso'], [148, 104, 'Dolor']] }
      ]
    }
  },

  cards: [
    ['Dolor de OA', 'Mecánico: empeora con el uso y mejora con reposo'],
    ['Rigidez matutina en OA', '<30 minutos'],
    ['Nódulos de Heberden', 'IFD (osteofitos)'],
    ['Nódulos de Bouchard', 'IFP (osteofitos)'],
    ['Articulaciones que respeta la OA primaria', 'MCF, muñeca, codo, hombro'],
    ['OA en 2ª y 3ª MCF', 'Piensa en hemocromatosis o pirofosfato'],
    ['Rx de OA', 'Espacio articular asimétrico ↓, osteofitos, esclerosis y quistes subcondrales'],
    ['Diagnóstico de OA según NICE', 'Clínico: ≥45 años, dolor con actividad, rigidez <30 min'],
    ['Primera línea en OA de rodilla', 'Ejercicio + bajar de peso + AINE tópico'],
    ['Bastón en OA de rodilla derecha', 'En la mano izquierda'],
    ['No recomendados por ACR 2019', 'Glucosamina, condroitina, ácido hialurónico (rodilla)'],
    ['OA con falla al tratamiento', 'Artroplastia']
  ],

  questions: [
    q({ id: 'oa-01', dif: 1,
      stem: 'Mujer de 64 años con dolor en ambas rodillas al caminar y subir escaleras, que mejora con reposo. Rigidez matutina de 10 min. Crepitación a la exploración. VSG normal. ¿Diagnóstico?',
      opts: ['Artritis reumatoide', 'Osteoartritis', 'Gota', 'Polimialgia reumática', 'Artritis séptica'],
      ans: 1,
      exp: 'Dolor mecánico, rigidez breve, crepitación y laboratorio normal en mayor de 45 años: osteoartritis. El diagnóstico es clínico.',
      why: ['Daría rigidez >1 h y sinovitis de manos.', '', 'Sería aguda e inflamatoria.', 'Afecta cinturas y eleva la VSG.', 'Sería aguda, monoarticular y febril.'],
      ref: 'NICE 2022 · ACR 2019' }),

    q({ id: 'oa-02', dif: 1,
      stem: 'Mujer de 58 años con OA de rodilla, IMC 33. ¿Cuál medida tiene mayor beneficio y debe recomendarse a todos?',
      opts: ['Glucosamina', 'Ejercicio y bajar de peso', 'Ácido hialurónico intraarticular', 'Opioides', 'Artroscopia con lavado'],
      ans: 1,
      exp: 'Ejercicio y pérdida de peso (≥5%) son recomendaciones fuertes de la ACR 2019 para todos los pacientes con OA de rodilla.',
      why: ['No recomendada.', '', 'Recomendación en contra en rodilla (ACR 2019).', 'No como tratamiento crónico.', 'No tiene beneficio en OA.'],
      ref: 'ACR 2019' }),

    q({ id: 'oa-03', dif: 2,
      stem: 'Hombre de 72 años con OA de rodilla, ERC G3b y antecedente de úlcera péptica. ¿Primera opción farmacológica?',
      opts: ['Naproxeno oral', 'AINE tópico (diclofenaco gel)', 'Prednisona oral', 'Morfina', 'Colchicina'],
      ans: 1,
      exp: 'El AINE tópico tiene eficacia similar en rodilla con mínima absorción sistémica: ideal con ERC, riesgo gastrointestinal o cardiovascular.',
      why: ['Riesgo renal y gastrointestinal alto.', '', 'No se usan esteroides orales en OA.', 'No como primera línea.', 'No tiene papel en OA.'],
      ref: 'ACR 2019' }),

    q({ id: 'oa-04', dif: 2,
      stem: '¿Cuál hallazgo radiográfico es característico de la osteoartritis?',
      opts: ['Erosiones marginales con osteopenia periarticular', 'Disminución asimétrica del espacio articular con osteofitos', 'Erosiones en sacabocado con borde colgante', 'Condrocalcinosis aislada', 'Lápiz en copa'],
      ans: 1,
      exp: 'La OA pierde cartílago en las zonas de carga (asimétrica) y forma osteofitos, esclerosis y quistes subcondrales.',
      why: ['Típico de AR.', '', 'Típico de gota.', 'Típico de pirofosfato.', 'Típico de artritis psoriásica.'],
      ref: 'Harrison 21e' }),

    q({ id: 'oa-05', dif: 2,
      stem: 'Hombre de 52 años con artropatía de 2ª y 3ª MCF, osteofitos en gancho, DM de reciente diagnóstico y piel bronceada. ¿Qué estudio pides?',
      opts: ['Factor reumatoide', 'Ferritina y saturación de transferrina', 'Ácido úrico', 'HLA-B27', 'ANA'],
      ans: 1,
      exp: 'OA de MCF (sitio atípico) + diabetes + hiperpigmentación: hemocromatosis hereditaria. Saturación de transferrina >45% y ferritina alta; luego HFE.',
      why: ['No explica el cuadro.', '', 'No explica DM ni piel.', 'No es espondiloartritis.', 'No orienta.'],
      ref: 'Harrison 21e' }),

    q({ id: 'oa-06', dif: 1,
      stem: 'Paciente con OA de cadera derecha te pregunta en qué mano debe usar el bastón. ¿Respuesta?',
      opts: ['Derecha', 'Izquierda', 'Da igual', 'En ambas manos', 'No debe usar bastón'],
      ans: 1,
      exp: 'El bastón en la mano contralateral reduce la carga sobre la articulación afectada al desplazar el centro de gravedad durante la marcha.',
      why: ['Es menos eficaz.', '', 'No da igual.', 'No es necesario.', 'Sí ayuda.'],
      ref: 'ACR 2019' }),

    q({ id: 'oa-07', dif: 2,
      stem: 'Mujer con OA de rodilla que pregunta por glucosamina con condroitina. Según la ACR 2019, ¿qué le dices?',
      opts: ['Son la primera línea', 'No se recomiendan: no hay beneficio consistente', 'Solo con AINE', 'Solo si hay derrame', 'Regeneran el cartílago'],
      ans: 1,
      exp: 'Los estudios de calidad no muestran beneficio clínico consistente; la ACR 2019 recomienda fuertemente en contra.',
      why: ['No lo son.', '', 'No cambia la recomendación.', 'No cambia la recomendación.', 'No hay evidencia.'],
      ref: 'ACR 2019' }),

    q({ id: 'oa-08', dif: 2,
      stem: 'Paciente con OA de rodilla que tiene un brote de dolor con derrame y no responde a AINE tópico. ¿Qué opción da alivio de semanas?',
      opts: ['Esteroide intraarticular', 'Antibiótico intraarticular', 'Colchicina', 'Metotrexato', 'Hidroxicloroquina'],
      ans: 0,
      exp: 'La infiltración de esteroide en rodilla o cadera da alivio a corto plazo (semanas). No se repite con mucha frecuencia por posible daño al cartílago.',
      why: ['', 'No hay infección.', 'No tiene papel en OA.', 'No funciona en OA.', 'No funciona en OA.'],
      ref: 'ACR 2019' }),

    q({ id: 'oa-09', dif: 1,
      stem: '¿Qué característica distingue el dolor de la OA del de la AR?',
      opts: ['La OA mejora con la actividad', 'La OA tiene rigidez matutina corta (<30 min) y empeora con el uso', 'La OA eleva la PCR', 'La OA afecta las MCF', 'La OA es simétrica con sinovitis'],
      ans: 1,
      exp: 'OA: dolor mecánico y rigidez breve. AR: dolor inflamatorio con rigidez prolongada (>1 h) que mejora con la actividad, sinovitis de MCF e IFP y reactantes elevados.',
      why: ['Eso es inflamatorio.', '', 'La PCR es normal.', 'Las respeta.', 'Eso es AR.'],
      ref: 'Harrison 21e' }),

    q({ id: 'oa-10', dif: 2,
      stem: 'Hombre de 70 años con OA de cadera grado 4 de Kellgren-Lawrence, dolor nocturno y que ya no camina una cuadra pese a ejercicio, AINE y esteroide intraarticular. ¿Siguiente paso?',
      opts: ['Opioides fuertes crónicos', 'Artroplastia total de cadera', 'Ácido hialurónico', 'Glucosamina', 'Reposo absoluto'],
      ans: 1,
      exp: 'Dolor y limitación funcional graves a pesar del tratamiento conservador: artroplastia, con excelentes resultados en dolor y función.',
      why: ['Riesgos sin beneficio sostenido.', '', 'No recomendado.', 'No recomendado.', 'Empeora la función.'],
      ref: 'ACR 2019' })
  ]
};
