// Tema 15 · Tromboembolia pulmonar (Cardiología, semana 5)
const T = { topic: 'tep', subj: 'cardio' };
const q = (o) => ({ ...T, ...o });

export default {
  lessons: {
    tep: {
      hook: 'El algoritmo cabe en una tarjeta: ¿está estable? → probabilidad clínica → dímero D o angio-TC → riesgo (PESI, VD, troponina) → anticoagulante o trombólisis.',
      anim: 'tep',
      nn: [['pulmonary-embolism-etiology-pathophysiology-diagnosis-clinical-features-treatment', 'Venous Thromboembolism']],
      yt: 'pulmonary embolism',
      video: [
        { ch: 'Del trombo al pulmón', sc: [
          { v: { k: 'title', t: 'Tromboembolia pulmonar', s: 'Tema 15 · Cardiología' },
            say: 'Bienvenido a la guardia. La tromboembolia pulmonar es la gran simuladora de urgencias. En este video vas a aprender a sospecharla, a confirmarla con el algoritmo correcto, a medir su riesgo y a elegir entre anticoagular y trombolizar.' },
          { v: { k: 'case', t: 'Después del vuelo de 14 horas', p: { name: 'Valeria', age: 36, sex: 'M', skin: '#E2B08A', hair: '#1E1A18', gown: '#62E3FF' }, text: 'Regresó ayer de un vuelo largo. Toma anticonceptivos combinados. Dolor y edema en la pantorrilla izquierda y falta de aire.', vit: { FC: '112', PA: '122/76', SpO2: '92%' } },
            say: 'Conoce a Valeria, de treinta y seis años. Ayer regresó de un vuelo de catorce horas y toma anticonceptivos orales combinados. Hoy le duele la pantorrilla izquierda, la tiene hinchada y le falta el aire. Tiene taquicardia y satura noventa y dos por ciento.' },
          { v: { k: 'list', t: 'Tríada de Virchow', items: ['Estasis: inmovilización, viajes largos', 'Daño endotelial: cirugía, trauma', 'Hipercoagulabilidad: cáncer, embarazo, estrógenos', 'También: trombofilias y TVP previa'] },
            say: 'Valeria cumple la tríada de Virchow: estasis por el vuelo largo e hipercoagulabilidad por los estrógenos. Otros factores clásicos son la cirugía ortopédica, el cáncer, el embarazo y el puerperio, las trombofilias y un evento trombótico previo.' },
          { v: { k: 'anim', id: 'tep', step: 0 },
            say: 'El trombo se forma en las venas profundas de la pierna. Un fragmento se desprende, sube por la vena cava, cruza la aurícula y el ventrículo derechos y se atora en la arteria pulmonar.' },
          { v: { k: 'anim', id: 'tep', step: 1 },
            say: 'Ahí tapa las ramas pulmonares. Hay alvéolos ventilados que ya no reciben sangre: espacio muerto. El flujo se desvía y se altera la relación entre ventilación y perfusión. Por eso hay hipoxemia y, como la paciente hiperventila, alcalosis respiratoria.' }
        ] },
        { ch: 'Clínica y primeros estudios', sc: [
          { v: { k: 'list', t: 'Clínica', items: ['Disnea súbita: lo más común', 'Dolor pleurítico y taquipnea', 'Taquicardia; a veces hemoptisis', 'Síncope o choque si es masiva', 'Pierna edematosa si hay TVP'] },
            say: 'El síntoma más común es la disnea súbita. Puede haber dolor pleurítico, taquipnea, taquicardia y a veces hemoptisis. Si el émbolo es grande, síncope o choque. Y busca siempre la pierna: una pantorrilla hinchada orienta a trombosis venosa profunda.' },
          { v: { k: 'quiz', q: '¿Cuál es el hallazgo más frecuente en el ECG del TEP?', opts: ['S1Q3T3', 'Taquicardia sinusal', 'Bloqueo de rama derecha'], a: 1 },
            say: 'Pausa. ¿Cuál es el hallazgo más frecuente en el electrocardiograma de una tromboembolia pulmonar?',
            exp: 'Taquicardia sinusal. El patrón S uno, Q tres, T tres es clásico, pero poco frecuente. El bloqueo de rama derecha nuevo y las ondas T invertidas de V uno a V cuatro indican sobrecarga del ventrículo derecho.' },
          { v: { k: 'list', t: 'Otros estudios iniciales', items: ['Gasometría: hipoxemia y alcalosis respiratoria', 'Rx de tórax: casi normal', 'Raros: Westermark y joroba de Hampton', 'Sirven para descartar otras causas'] },
            say: 'La gasometría muestra hipoxemia con alcalosis respiratoria. La radiografía suele ser casi normal; los signos de Westermark y la joroba de Hampton son raros. Estos estudios sirven más para descartar otras causas que para confirmar.' }
        ] },
        { ch: 'El algoritmo diagnóstico', sc: [
          { v: { k: 'flow', t: 'Sospecha de TEP', steps: ['¿Choque o hipotensión?', 'Sí → eco a la cabecera', 'No → probabilidad (Wells)', 'Improbable → dímero D', 'Probable → angio-TC directa'] },
            say: 'Primera pregunta: ¿está inestable? Si hay choque o hipotensión, eco a la cabecera; si el ventrículo derecho está dilatado y no puede ir a tomografía, trátalo como alto riesgo. Si está estable, calcula la probabilidad con Wells. Improbable, dímero D. Probable, angiotomografía directa.' },
          { v: { k: 'mnemo', t: 'Wells >4 = TEP probable', d: 'Signos de TVP 3 · TEP es el dx más probable 3 · FC >100 1.5 · inmovilización o cirugía 1.5 · TVP/TEP previo 1.5 · hemoptisis 1 · cáncer 1.' },
            say: 'La escala de Wells da tres puntos por signos de trombosis venosa y tres si la tromboembolia es el diagnóstico más probable. Uno punto cinco por frecuencia mayor de cien, por inmovilización o cirugía reciente y por un evento previo. Un punto por hemoptisis y uno por cáncer. Más de cuatro es probable.' },
          { v: { k: 'big', h: 'Dímero D ajustado por edad', t: 'edad×10', u: 'µg/L', s: 'En mayores de 50 años. Solo sirve para descartar con probabilidad baja o intermedia.' },
            say: 'El dímero D solo sirve para descartar, y solo cuando la probabilidad no es alta. En mayores de cincuenta años usa el corte ajustado: la edad multiplicada por diez, en microgramos por litro. A los setenta y dos años, el corte es setecientos veinte.' },
          { v: { k: 'quiz', q: 'Valeria tiene Wells 7.5. ¿Qué pides?', opts: ['Dímero D', 'Angio-TC pulmonar'], a: 1 },
            say: 'Pausa. Valeria tiene signos de trombosis venosa, taquicardia y no hay un diagnóstico más probable. Su Wells es de siete punto cinco. ¿Qué pides?',
            exp: 'Angiotomografía pulmonar directa. Con probabilidad alta, un dímero D negativo no descarta la tromboembolia. Mientras esperas la imagen, puedes iniciar anticoagulación si no hay contraindicación.' },
          { v: { k: 'list', t: 'Situaciones especiales', items: ['Alergia al contraste o ERC → gammagrama V/Q', 'Embarazo + síntomas de TVP → USG Doppler primero', 'Probabilidad muy baja + PERC negativo → nada más'] },
            say: 'Tres situaciones especiales. Si no puedes usar contraste, pide un gammagrama de ventilación perfusión. En el embarazo con síntomas en la pierna, empieza con ultrasonido Doppler: si hay trombosis, ya puedes tratar. Y con probabilidad muy baja y criterios PERC negativos, no pidas nada más.' }
        ] },
        { ch: 'Estratificar el riesgo', sc: [
          { v: { k: 'anim', id: 'tep', step: 2 },
            say: 'Confirmada la tromboembolia, mide el riesgo. La clave es el ventrículo derecho. Es de pared delgada y no tolera un aumento brusco de la poscarga: se dilata, empuja el tabique hacia el ventrículo izquierdo y sufre isquemia. Por eso sube la troponina.' },
          { v: { k: 'vs', a: 'Definición', b: 'Tratamiento', rows: [['Alto', 'Choque o hipotensión', 'HNF + trombólisis sistémica'], ['Interm.-alto', 'sPESI ≥1 + VD dilatado + troponina ↑', 'Anticoagular y vigilar'], ['Interm.-bajo', 'sPESI ≥1 con uno o ningún hallazgo', 'Anticoagular en hospital'], ['Bajo', 'sPESI 0, VD y troponina normales', 'ACOD; alta temprana']] },
            say: 'Riesgo alto es choque o hipotensión: trombólisis. Estable, con PESI simplificado de uno o más, ventrículo derecho dilatado y troponina alta: intermedio alto, se anticoagula y se vigila. Con uno o ningún hallazgo, intermedio bajo. Y con PESI simplificado de cero y ventrículo normal, riesgo bajo: anticoagulante oral y alta temprana.' },
          { v: { k: 'list', t: 'sPESI: 1 punto cada uno', items: ['Edad >80 años', 'Cáncer', 'Enfermedad cardiopulmonar crónica', 'FC ≥110 lpm · PAS <100 mmHg', 'SatO₂ <90%'] },
            say: 'El PESI simplificado da un punto por cada dato: edad mayor de ochenta años, cáncer, enfermedad cardiopulmonar crónica, frecuencia cardiaca de ciento diez o más, presión sistólica menor de cien y saturación menor de noventa por ciento.' }
        ] },
        { ch: 'Tratamiento', sc: [
          { v: { k: 'anim', id: 'tep', step: 3 },
            say: 'En el riesgo alto, el ventrículo izquierdo recibe tan poca sangre que cae el gasto: es un choque obstructivo. Se da heparina no fraccionada y trombólisis sistémica con alteplasa, cien miligramos en dos horas. Si está contraindicada, embolectomía quirúrgica o por catéter.' },
          { v: { k: 'list', t: 'Anticoagulación', items: ['ACOD de elección: apixabán o rivaroxabán', 'Dabigatrán o edoxabán: tras ≥5 días de heparina', 'Embarazo: HBPM', 'SAF triple positivo: warfarina', 'Filtro de cava: solo si no se puede anticoagular'] },
            say: 'Para la mayoría, un anticoagulante oral directo: apixabán o rivaroxabán desde el inicio, o dabigatrán y edoxabán tras cinco días de heparina. En el embarazo, heparina de bajo peso molecular. En el síndrome antifosfolípido triple positivo, warfarina. Y el filtro de vena cava, solo si no se puede anticoagular.' },
          { v: { k: 'big', h: 'TEP provocado por cirugía', t: '3 meses', s: 'No provocado o factor persistente: considerar indefinida. Cáncer activo: mientras siga activo.' },
            say: 'La duración depende de la causa. Si la provocó un factor transitorio mayor, como una cirugía, tres meses. Si no hubo desencadenante o el factor persiste, se considera anticoagulación indefinida, revalorando el sangrado. Con cáncer activo, mientras siga activo.' },
          { v: { k: 'quiz', q: 'TEP estable, VD dilatado y troponina alta. ¿Trombolizas?', opts: ['Sí, de inmediato', 'No: anticoagulo y vigilo'], a: 1 },
            say: 'Pausa. Paciente con tromboembolia, presión normal, ventrículo derecho dilatado y troponina alta. ¿Trombolizas?',
            exp: 'No. Es riesgo intermedio alto. En el estudio PEITHO, la trombólisis evitó descompensaciones, pero causó más hemorragias graves sin bajar la mortalidad. Se anticoagula, se vigila y se reserva la trombólisis de rescate.' }
        ] },
        { ch: 'Cierre del caso y trampas', sc: [
          { v: { k: 'list', t: 'Valeria: final del caso', items: ['Angio-TC: TEP segmentario bilateral', 'sPESI 0, VD y troponina normales', 'Riesgo bajo → apixabán y alta temprana', 'Sin estrógenos: DIU como anticonceptivo'] },
            say: 'Regresemos con Valeria. La angiotomografía muestra tromboembolia segmentaria bilateral. Su PESI simplificado es cero y el ventrículo y la troponina son normales: riesgo bajo. Recibe apixabán y se va a casa al día siguiente. Además, deja los estrógenos y cambia a un dispositivo intrauterino.' },
          { v: { k: 'tip', kind: 'trap', t: 'Dímero D con probabilidad alta: un resultado negativo NO descarta. Ve directo a la angio-TC.' },
            say: 'Trampa clásica: pedir dímero D con probabilidad alta. Un resultado negativo no descarta nada y solo retrasa el diagnóstico. Con Wells mayor de cuatro, ve directo a la angiotomografía.' },
          { v: { k: 'tip', kind: 'pearl', t: 'La trombólisis es solo para el TEP con inestabilidad. Estable con VD dilatado = anticoagular y vigilar.' },
            say: 'La perla final: la trombólisis sistémica es para el paciente inestable. Si está estable, aunque el ventrículo derecho sufra, anticoagula y vigila. Ahora ve a las preguntas del tema y a la guardia de Valeria para practicar lo que viste.' }
        ] }
      ],
      sections: [
        { h: 'Sospecha', html: `
<ul>
<li><b>Tríada de Virchow</b>: estasis, daño endotelial, hipercoagulabilidad.</li>
<li><b>Factores</b>: cirugía mayor u ortopédica, inmovilización, cáncer, embarazo y puerperio, estrógenos, trombofilias, TVP previa, obesidad, viajes largos.</li>
<li><b>Clínica</b>: disnea súbita (lo más común), dolor pleurítico, taquicardia, taquipnea, hemoptisis; síncope o choque si es masiva. Pierna edematosa si hay TVP.</li>
<li><b>ECG</b>: taquicardia sinusal (lo más frecuente); S1Q3T3, BRDHH nuevo, T invertidas en V1–V4 por sobrecarga del VD.</li>
<li>Gasometría con hipoxemia y alcalosis respiratoria. La Rx suele ser casi normal (raros: Westermark, joroba de Hampton).</li>
</ul>` },
        { h: 'Diagnóstico (ESC 2019)', html: `
<ol>
<li><b>¿Inestable?</b> (choque o hipotensión): ecocardiograma a la cabecera; si hay dilatación del VD y no puede ir a angio-TC, se trata como TEP de alto riesgo.</li>
<li><b>Estable</b>: probabilidad clínica con <b>Wells</b> o Ginebra (calculadora en Más → Calculadoras).</li>
<li>Probabilidad baja/intermedia o “improbable” (Wells ≤4) → <b>dímero D</b> (ajustado por edad &gt;50 años: edad × 10 µg/L). Negativo = descartado. Positivo → angio-TC.</li>
<li>Probabilidad alta o “probable” (Wells &gt;4) → <b>angio-TC directa</b> (el dímero D no sirve para descartar).</li>
<li>Contraindicación al contraste o embarazo con Rx normal → <b>gammagrama V/Q</b>. En el embarazo, si hay síntomas de TVP, primero USG Doppler.</li>
<li>En urgencias, con probabilidad muy baja, los criterios <b>PERC</b> negativos permiten no pedir dímero D.</li>
</ol>` },
        { h: 'Estratificación del riesgo', html: `
<div class="tablewrap"><table class="mini">
<tr><th>Riesgo</th><th>Definición</th><th>Tratamiento</th></tr>
<tr><td><b>Alto</b></td><td>Inestabilidad: paro, choque (PAS &lt;90 o vasopresor con hipoperfusión) o hipotensión persistente</td><td>Heparina no fraccionada + <b>trombólisis sistémica</b> (alteplasa 100 mg en 2 h). Si está contraindicada: embolectomía quirúrgica o por catéter</td></tr>
<tr><td>Intermedio-alto</td><td>sPESI ≥1 + disfunción del VD (eco o TC) + troponina elevada</td><td>Anticoagulación y vigilancia estrecha; trombólisis de rescate si se descompensa</td></tr>
<tr><td>Intermedio-bajo</td><td>sPESI ≥1 con uno o ninguno de esos hallazgos</td><td>Anticoagulación hospitalaria</td></tr>
<tr><td>Bajo</td><td>sPESI 0, sin disfunción del VD</td><td>Anticoagulante oral; alta temprana o manejo ambulatorio</td></tr>
</table></div>` },
        { h: 'Anticoagulación', html: `
<ul>
<li><b>ACOD</b> de elección en la mayoría: rivaroxabán o apixabán (sin heparina previa); dabigatrán y edoxabán (tras ≥5 días de heparina).</li>
<li><b>Warfarina</b> (INR 2–3) con traslape de heparina ≥5 días y hasta INR en rango 24 h. Indicada en síndrome antifosfolípido (sobre todo triple positivo), válvulas mecánicas y ERC muy avanzada.</li>
<li><b>Embarazo</b>: heparina de bajo peso molecular (ACOD y warfarina contraindicados).</li>
<li><b>Cáncer</b>: HBPM o ACOD (edoxabán, rivaroxabán, apixabán); cuidado con tumores digestivos o urinarios por sangrado.</li>
<li><b>Filtro de vena cava</b>: solo si la anticoagulación está absolutamente contraindicada.</li>
<li><b>Duración</b>: provocada por un factor transitorio mayor (cirugía, trauma) → 3 meses. No provocada o factor persistente → se considera indefinida. Cáncer activo → mientras esté activo (≥6 meses).</li>
</ul>` },
        { h: 'Fisiopatología en 1 minuto', html: `
<ul>
<li><b>Hipoxemia</b>: sobre todo por desequilibrio V/Q (el flujo se desvía a zonas sanas que quedan sobreperfundidas) y, a veces, cortocircuito por un foramen oval permeable. Las zonas ventiladas sin flujo son <b>espacio muerto</b>.</li>
<li><b>Alcalosis respiratoria</b>: la hipoxemia y los receptores pulmonares estimulan la taquipnea.</li>
<li><b>Espiral del VD</b>: ↑ resistencia vascular pulmonar → dilatación del VD → insuficiencia tricuspídea y desplazamiento del tabique → menor llenado del VI → ↓ gasto e hipotensión → isquemia del VD (troponina y BNP altos) → más falla.</li>
<li>La muerte en el TEP es por <b>falla aguda del VD</b>; por eso la estratificación gira alrededor del VD.</li>
</ul>` },
        { h: 'Fármacos clave', html: `
<div class="tablewrap"><table class="mini">
<tr><th>Fármaco</th><th>Mecanismo</th><th>Efecto adverso clave</th><th>Cuándo evitarlo · antídoto</th></tr>
<tr><td><b>Heparina no fraccionada</b></td><td>Potencia la antitrombina (IIa y Xa)</td><td>Sangrado; trombocitopenia inducida por heparina (TIH)</td><td>De elección si está inestable, si se trombolizará o con ERC grave. Antídoto: protamina</td></tr>
<tr><td><b>HBPM</b> (enoxaparina)</td><td>Antitrombina, sobre todo anti-Xa</td><td>Sangrado; TIH (menos frecuente)</td><td>Ajustar o evitar en ERC grave. De elección en el embarazo</td></tr>
<tr><td><b>Apixabán, rivaroxabán, edoxabán</b></td><td>Inhibidores directos del factor Xa</td><td>Sangrado (digestivo y urinario en cáncer)</td><td>Embarazo, SAF triple positivo, ERC muy avanzada. Antídoto: andexanet alfa</td></tr>
<tr><td><b>Dabigatrán</b></td><td>Inhibidor directo de la trombina</td><td>Dispepsia, sangrado</td><td>ERC grave (eliminación renal). Antídoto: idarucizumab</td></tr>
<tr><td><b>Warfarina</b></td><td>Antagonista de vitamina K (II, VII, IX, X)</td><td>Sangrado; necrosis cutánea; teratógena</td><td>Embarazo. Revertir: vitamina K + concentrado de complejo protrombínico</td></tr>
<tr><td><b>Alteplasa</b></td><td>Activa el plasminógeno → lisis del trombo</td><td>Hemorragia, incluida la intracraneal</td><td>Solo TEP de alto riesgo; mismas contraindicaciones absolutas que en el IAM</td></tr>
</table></div>` },
        { h: 'Cómo lo preguntan en el examen', html: `
<ul>
<li>Posoperatorio o viaje largo + disnea súbita + taquicardia + pierna edematosa → <b>Wells alto: angio-TC directa</b>.</li>
<li>Probabilidad baja + dímero D negativo (ajustado por edad) → <b>TEP descartado</b>, sin imagen.</li>
<li>TEP + PAS &lt;90 mmHg → <b>trombólisis sistémica</b>; con contraindicación absoluta → embolectomía quirúrgica o por catéter.</li>
<li>TEP estable + VD dilatado + troponina alta → <b>anticoagular y vigilar</b> (la trombólisis es la trampa).</li>
<li>Embarazada → <b>HBPM</b>; SAF triple positivo → <b>warfarina</b>; alergia al contraste o ERC avanzada → <b>gammagrama V/Q</b>.</li>
<li>Inestable que no puede ir a la TC → <b>eco a la cabecera</b>: un VD dilatado basta para tratar como alto riesgo.</li>
</ul>` }
      ],
      mnemo: { t: 'Wells en una frase: “Pierna, Primer diagnóstico, Pulso, Paciente quieto, Previo, Pulmón sangra, Proceso maligno”', d: 'Signos de TVP (3) · TEP es el diagnóstico más probable (3) · FC >100 (1.5) · inmovilización o cirugía reciente (1.5) · TVP/TEP previos (1.5) · hemoptisis (1) · cáncer (1). Más de 4 = probable.' },
      pearl: 'El dímero D solo sirve para descartar: úsalo cuando la probabilidad es baja o intermedia. Con probabilidad alta, ve directo a la angio-TC.',
      trap: 'Trombolizar a un TEP estable con troponina alta y VD dilatado (intermedio-alto): PEITHO mostró más sangrados sin beneficio en mortalidad. Se anticoagula y se vigila.',
      guide: [
        'La ESC 2019 sigue vigente para TEP; el ajuste del dímero D por edad y el algoritmo YEARS son aceptados. ⚠️ Si tu profesor usa otro umbral de dímero D, apréndete el suyo.',
        'Cáncer: la ESC 2019 propone HBPM o edoxabán/rivaroxabán (con cuidado en tumores digestivos); tras Caravaggio (2020), la CHEST 2021 incluye apixabán y prefiere un anti-Xa oral sobre la HBPM. ⚠️ Depende de la guía.'
      ],
      refs: [
        'Konstantinides SV, et al. 2019 ESC Guidelines for the diagnosis and management of acute pulmonary embolism. Eur Heart J 2020.',
        'Stevens SM, et al. Antithrombotic Therapy for VTE Disease: CHEST Guideline 2021.'
      ]
    }
  },

  anims: {
    tep: {
      title: 'Del trombo al choque obstructivo',
      steps: [
        { cap: '<b>Trombo venoso.</b> Un trombo en las venas profundas de la pierna se desprende y viaja por la vena cava, cruza el corazón derecho y llega a la arteria pulmonar.',
          labels: [[24, 104, 'TVP'], [70, 50, 'VD'], [130, 14, 'Arteria pulmonar']] },
        { cap: '<b>Oclusión.</b> El émbolo tapa ramas pulmonares: hay alvéolos ventilados sin perfusión (espacio muerto) e hipoxemia. Aumenta la resistencia vascular pulmonar.',
          labels: [[130, 30, 'Émbolo'], [120, 80, 'V/Q alterada']] },
        { cap: '<b>Sobrecarga del VD.</b> El VD, de pared delgada, se dilata para vencer la resistencia. Empuja el tabique hacia el VI (forma de “D”) y sube la troponina por isquemia del VD.',
          labels: [[60, 60, 'VD dilatado'], [104, 60, 'VI comprimido']] },
        { cap: '<b>Choque obstructivo.</b> El VI recibe poca sangre y cae el gasto: hipotensión y síncope. Es un TEP de alto riesgo: trombólisis sistémica.',
          labels: [[104, 60, 'Gasto ↓'], [80, 104, 'Trombólisis']] }
      ]
    }
  },

  cards: [
    ['ECG más frecuente en TEP', 'Taquicardia sinusal'],
    ['Wells >4', 'TEP probable: angio-TC directa'],
    ['Wells ≤4', 'Improbable: dímero D; si es negativo, se descarta'],
    ['Dímero D ajustado por edad', 'Edad × 10 µg/L en >50 años'],
    ['TEP de alto riesgo', 'Choque o hipotensión: heparina no fraccionada + trombólisis'],
    ['Intermedio-alto', 'VD dilatado + troponina alta, estable: anticoagular y vigilar'],
    ['sPESI', 'Edad >80, cáncer, enfermedad cardiopulmonar crónica, FC ≥110, PAS <100, SatO₂ <90%'],
    ['TEP en el embarazo', 'Heparina de bajo peso molecular'],
    ['TEP con síndrome antifosfolípido', 'Warfarina (no ACOD)'],
    ['Contraste contraindicado', 'Gammagrama V/Q'],
    ['Duración tras TEP provocado por cirugía', '3 meses'],
    ['Filtro de vena cava', 'Solo si no se puede anticoagular'],
    ['Criterios PERC (todos deben ser negativos)', 'Edad ≥50, FC ≥100, SatO₂ <95%, hemoptisis, estrógenos, TVP/TEP previos, edema unilateral, cirugía o trauma reciente'],
    ['Antídoto del dabigatrán', 'Idarucizumab'],
    ['Antídoto de apixabán y rivaroxabán', 'Andexanet alfa (si no hay: concentrado de complejo protrombínico)'],
    ['Signo de McConnell', 'Eco en TEP: acinesia de la pared libre del VD con ápex conservado'],
    ['Trombocitopenia inducida por heparina', 'Plaquetas ↓ >50% a los 5–10 días ± trombosis: suspender toda heparina; argatrobán o fondaparinux']
  ],

  questions: [
    q({ id: 'tep-01', dif: 1,
      stem: 'Mujer de 34 años con dolor pleurítico y disnea leve. FC 92, sin signos de TVP, sin antecedentes; TEP no es el diagnóstico más probable. Wells 0. ¿Siguiente paso?',
      opts: ['Angio-TC de inmediato', 'Dímero D; si es negativo, se descarta TEP', 'Anticoagular empíricamente', 'Gammagrama V/Q', 'Ecocardiograma'],
      ans: 1,
      exp: 'Con probabilidad baja (Wells ≤4) se pide dímero D; un resultado negativo descarta TEP sin imagen. Solo si es positivo se pide angio-TC.',
      why: ['Expone a radiación y contraste sin necesidad.', '', 'Sin probabilidad alta no se anticoagula empíricamente.', 'No es el primer paso.', 'No diagnostica TEP en un paciente estable.'],
      ref: 'ESC 2019 TEP' }),

    q({ id: 'tep-02', dif: 1,
      stem: 'Hombre de 58 años, 10 días después de un reemplazo de cadera. Pierna derecha edematosa y dolorosa, disnea súbita, FC 112. Estable. Wells 7.5. ¿Siguiente paso?',
      opts: ['Dímero D', 'Angio-TC pulmonar', 'Rx de tórax y alta', 'Prueba de esfuerzo', 'Troponinas seriadas'],
      ans: 1,
      exp: 'Con probabilidad alta (Wells >4), el dímero D no basta para descartar: se va directo a la angio-TC (y se puede iniciar anticoagulación mientras, si no hay contraindicación).',
      why: ['Con probabilidad alta, un dímero D negativo no descarta.', '', 'Peligroso.', 'Contraindicada.', 'No diagnostican TEP.'],
      ref: 'ESC 2019 TEP' }),

    q({ id: 'tep-03', dif: 2,
      stem: 'Mujer de 72 años con sospecha de TEP y probabilidad baja. Dímero D 620 µg/L (punto de corte habitual 500). ¿Cómo lo interpretas?',
      opts: ['Positivo: angio-TC', 'Con el ajuste por edad (72 × 10 = 720 µg/L) es negativo: se descarta TEP', 'No se puede interpretar en mayores de 70', 'Siempre se pide angio-TC en mayores de 70', 'Requiere V/Q'],
      ans: 1,
      exp: 'El dímero D sube con la edad. En mayores de 50 años, el punto de corte ajustado (edad × 10 µg/L) mantiene la seguridad y evita estudios innecesarios (ADJUST-PE).',
      why: ['Con el ajuste por edad es negativo.', '', 'Sí se puede, con ajuste.', 'Con probabilidad baja y dímero ajustado negativo no hace falta.', 'No es necesaria.'],
      ref: 'Righini M, et al. ADJUST-PE, JAMA 2014' }),

    q({ id: 'tep-04', dif: 1,
      stem: 'Mujer con 20 semanas de embarazo y TEP confirmado, estable. ¿Anticoagulante?',
      opts: ['Warfarina', 'Rivaroxabán', 'Heparina de bajo peso molecular', 'Dabigatrán', 'Aspirina'],
      ans: 2,
      exp: 'La HBPM no cruza la placenta y es el tratamiento de elección en el embarazo. La warfarina es teratogénica y los ACOD no se recomiendan.',
      why: ['Teratogénica (embriopatía).', 'No recomendado en el embarazo.', '', 'No recomendado en el embarazo.', 'No trata el TEP.'],
      ref: 'ESC 2019 TEP · ASH 2018 embarazo' }),

    q({ id: 'tep-05', dif: 2,
      stem: 'Mujer de 40 años con TEP y síndrome antifosfolípido triple positivo. ¿Anticoagulante de largo plazo?',
      opts: ['Rivaroxabán', 'Apixabán', 'Warfarina con INR 2–3', 'Aspirina sola', 'Filtro de vena cava'],
      ans: 2,
      exp: 'En el síndrome antifosfolípido (sobre todo triple positivo), los ACOD tuvieron más eventos trombóticos que la warfarina (TRAPS). Se usa warfarina.',
      why: ['Más trombosis en SAF triple positivo.', 'No recomendado en SAF de alto riesgo.', '', 'Insuficiente.', 'Solo si no puede anticoagularse.'],
      ref: 'Pengo V, et al. TRAPS, Blood 2018' }),

    q({ id: 'tep-06', dif: 2,
      stem: 'Hombre de 65 años con TEP. PA 124/78, FC 104. Eco con VD dilatado y troponina elevada. sPESI 1. ¿Tratamiento?',
      opts: ['Trombólisis sistémica inmediata', 'Anticoagulación con vigilancia estrecha; trombólisis de rescate si se descompensa', 'Alta con ACOD', 'Filtro de vena cava', 'Embolectomía quirúrgica'],
      ans: 1,
      exp: 'Riesgo intermedio-alto (estable con disfunción del VD y troponina alta). La trombólisis primaria no redujo mortalidad y aumentó hemorragias (PEITHO). Se anticoagula en un área monitorizada.',
      why: ['No está indicada mientras esté estable.', '', 'Requiere vigilancia hospitalaria.', 'Sin contraindicación para anticoagular no está indicado.', 'No hay inestabilidad.'],
      ref: 'PEITHO, NEJM 2014 · ESC 2019' }),

    q({ id: 'tep-07', dif: 1,
      stem: 'Hombre de 45 años con TEP 3 semanas después de una cirugía de rodilla, sin otros factores. ¿Duración de la anticoagulación?',
      opts: ['6 semanas', '3 meses', '1 año obligatorio', 'De por vida', 'Solo durante la hospitalización'],
      ans: 1,
      exp: 'Un TEP provocado por un factor transitorio mayor (cirugía) tiene bajo riesgo de recurrencia: 3 meses de anticoagulación.',
      why: ['Insuficiente.', '', 'Excesivo sin otros factores.', 'Para TEP no provocado o factor persistente se considera.', 'Insuficiente.'],
      ref: 'ESC 2019 · CHEST 2021' }),

    q({ id: 'tep-08', dif: 2,
      stem: 'Mujer de 55 años con TEP sin factor desencadenante identificado, bajo riesgo de sangrado. Terminó 3 meses de apixabán. ¿Qué haces?',
      opts: ['Suspender', 'Considerar anticoagulación extendida (indefinida) con reevaluación periódica', 'Cambiar a aspirina', 'Filtro de vena cava', 'Repetir angio-TC para decidir'],
      ans: 1,
      exp: 'El TEP no provocado tiene alto riesgo de recurrencia al suspender. Con bajo riesgo de sangrado se recomienda anticoagulación extendida (puede usarse dosis reducida de apixabán o rivaroxabán).',
      why: ['El riesgo de recurrencia es alto.', '', 'Menos eficaz que la anticoagulación.', 'No está indicado.', 'La imagen no define la duración.'],
      ref: 'ESC 2019 · CHEST 2021' }),

    q({ id: 'tep-09', dif: 1,
      stem: '¿Cuál es el hallazgo electrocardiográfico más frecuente en el TEP?',
      opts: ['S1Q3T3', 'Taquicardia sinusal', 'Fibrilación auricular', 'BRDHH', 'Elevación del ST en V1–V4'],
      ans: 1,
      exp: 'El S1Q3T3 es clásico pero poco frecuente. Lo que más se ve es taquicardia sinusal; los signos de sobrecarga del VD indican mayor gravedad.',
      why: ['Es clásico pero poco sensible.', '', 'Puede aparecer, pero es menos frecuente.', 'Sugiere sobrecarga del VD, pero es menos frecuente.', 'Sugiere IAM anterior.'],
      ref: 'ESC 2019 TEP' }),

    q({ id: 'tep-10', dif: 2,
      stem: 'Hombre de 70 años con ERC G4 y alergia grave al contraste yodado. Sospecha de TEP con Rx de tórax normal. ¿Estudio de imagen?',
      opts: ['Angio-TC con premedicación obligatoria', 'Gammagrama de ventilación/perfusión', 'RM sin contraste como único estudio', 'Arteriografía pulmonar', 'Rx de tórax repetida'],
      ans: 1,
      exp: 'El gammagrama V/Q no usa contraste yodado y es útil con Rx de tórax normal. Un estudio normal descarta TEP; uno de alta probabilidad lo confirma.',
      why: ['Riesgo de nefropatía y anafilaxia.', '', 'No es el estudio validado.', 'Invasiva y con contraste.', 'No diagnostica TEP.'],
      ref: 'ESC 2019 TEP' }),

    q({ id: 'tep-11', dif: 2,
      stem: 'Hombre de 66 años con TEP confirmado y PAS de 76 mmHg pese a norepinefrina. Hace 3 semanas tuvo una hemorragia intracraneal. ¿Mejor estrategia de reperfusión?',
      opts: ['Alteplasa a dosis completa', 'Alteplasa a media dosis', 'Embolectomía quirúrgica o tratamiento dirigido por catéter', 'Solo HBPM', 'Filtro de vena cava como único tratamiento'],
      ans: 2,
      exp: 'TEP de alto riesgo con contraindicación absoluta para trombólisis (hemorragia intracraneal reciente): la alternativa es la embolectomía quirúrgica o la terapia percutánea dirigida por catéter, en un centro con experiencia, junto con heparina no fraccionada.',
      why: ['La hemorragia intracraneal es contraindicación absoluta.', 'La dosis reducida sigue siendo trombólisis.', '', 'Insuficiente para un choque obstructivo.', 'No resuelve la obstrucción pulmonar.'],
      ref: 'ESC 2019 TEP' }),

    q({ id: 'tep-12', dif: 3,
      stem: 'Mujer de 29 años con 28 semanas de embarazo, disnea súbita y edema doloroso de la pierna izquierda. Hemodinámicamente estable. ¿Primer estudio?',
      opts: ['Angio-TC pulmonar', 'Ultrasonido Doppler de compresión de la pierna', 'Dímero D y, si es positivo, angio-TC', 'Gammagrama V/Q', 'Rx de tórax y alta si es normal'],
      ans: 1,
      exp: 'En la embarazada con síntomas de TVP se empieza con ultrasonido de compresión: si muestra trombosis, ya está indicada la HBPM y se evita la radiación. Si es negativo, se sigue el algoritmo (Rx de tórax y luego V/Q o angio-TC).',
      why: ['Expone a radiación cuando un estudio sin radiación puede bastar.', '', 'Con síntomas de TVP, el Doppler resuelve antes y sin radiación.', 'Se usa si el Doppler es negativo y la Rx es normal.', 'Peligroso: no descarta TEP.'],
      ref: 'ESC 2019 TEP (embarazo)' }),

    q({ id: 'tep-13', dif: 3,
      stem: 'Hombre de 63 años con adenocarcinoma gástrico no resecado y TEP de bajo riesgo. ¿Anticoagulante más adecuado?',
      opts: ['Edoxabán', 'Heparina de bajo peso molecular', 'Warfarina', 'Aspirina', 'Filtro de vena cava'],
      ans: 1,
      exp: 'En la trombosis asociada a cáncer sirven la HBPM o los anti-Xa orales, pero en tumores digestivos luminales no resecados el edoxabán y el rivaroxabán aumentaron el sangrado gastrointestinal (Hokusai-VTE Cancer, SELECT-D). Aquí la HBPM es la opción más segura.',
      why: ['Más sangrado digestivo en cáncer gastrointestinal.', '', 'Menos eficaz que la HBPM en cáncer y con muchas interacciones.', 'No trata el TEP.', 'Solo si la anticoagulación está contraindicada.'],
      ref: 'ESC 2019 TEP · CHEST 2021' }),

    q({ id: 'tep-14', dif: 2,
      stem: 'Mujer de 70 años hospitalizada por TEP, con heparina no fraccionada. Al día 7 sus plaquetas bajan de 240 000 a 90 000/µL y aparece una TVP nueva en el brazo. ¿Conducta?',
      opts: ['Seguir con heparina y transfundir plaquetas', 'Suspender la heparina e iniciar argatrobán o fondaparinux', 'Cambiar a enoxaparina', 'Suspender toda anticoagulación', 'Iniciar warfarina de inmediato'],
      ans: 1,
      exp: 'Caída de plaquetas >50% a los 5–10 días con trombosis nueva: trombocitopenia inducida por heparina. Se suspende toda heparina (incluida HBPM y lavados) y se usa un anticoagulante no heparínico. La warfarina se inicia solo cuando se recuperan las plaquetas.',
      why: ['Perpetúa la TIH; las plaquetas pueden empeorar la trombosis.', '', 'La HBPM tiene reactividad cruzada.', 'La TIH es protrombótica: hay que anticoagular.', 'Sola, en la fase aguda, puede causar gangrena venosa y necrosis cutánea.'],
      ref: 'ASH 2018 TIH' }),

    q({ id: 'tep-15', dif: 2,
      stem: 'Hombre de 32 años con dolor pleurítico. Tu impresión es de probabilidad muy baja de TEP. FC 82, SatO₂ 98%, sin hemoptisis, estrógenos, cirugía reciente, TVP/TEP previos ni edema de piernas. ¿Siguiente paso respecto al TEP?',
      opts: ['Dímero D', 'Angio-TC', 'Ningún estudio más: criterios PERC negativos', 'Gammagrama V/Q', 'Anticoagulación empírica'],
      ans: 2,
      exp: 'Con probabilidad clínica baja y los 8 criterios PERC negativos (edad <50, FC <100, SatO₂ ≥95%, sin hemoptisis, estrógenos, TVP/TEP previos, edema unilateral ni cirugía o trauma reciente), el riesgo de TEP es tan bajo que no se piden más estudios.',
      why: ['Con PERC negativo y baja probabilidad solo agrega falsos positivos.', 'Radiación y contraste sin necesidad.', '', 'Innecesario.', 'Sin sospecha suficiente no se anticoagula.'],
      ref: 'ESC 2019 TEP · PROPER, JAMA 2018' })
  ],

  cases: [
    { id: 'g-tep', topic: 'tep', subj: 'cardio',
      title: 'Después del vuelo de 14 horas', place: 'Urgencias',
      patient: { name: 'Valeria', age: 36, sex: 'M', skin: '#E2B08A', hair: '#1E1A18', gown: '#62E3FF' },
      intro: 'Regresó ayer de un viaje largo. Toma anticonceptivos orales combinados. Desde hoy tiene dolor en la pantorrilla izquierda y falta de aire.',
      extra: { label: 'Trop.', unit: '' },
      start: { FC: 112, PAS: 122, PAD: 76, SpO2: 92, FR: 24, X: 'normal' },
      nodes: [
        { tag: 'Llegada', ecg: 'tachy',
          text: 'Pantorrilla izquierda con edema y dolor a la palpación. No hay otro diagnóstico más probable. Wells 7.5.',
          q: '¿Qué pides?',
          A: { t: 'Dímero D y, si es negativo, alta', ok: false, res: 'Con probabilidad alta, un dímero D negativo no descarta el TEP.' },
          B: { t: 'Angio-TC pulmonar (y anticoagular mientras si no hay contraindicación)', ok: true, res: 'Angio-TC: TEP segmentario bilateral. VD de tamaño normal.' },
          why: 'Con Wells >4 se va directo a la angio-TC.' },
        { tag: 'Estratificación', ecg: 'tachy',
          text: 'sPESI 0. VD normal en la TC, troponina normal. Sin riesgo de sangrado.',
          q: '¿Tratamiento?',
          A: { t: 'Trombólisis con alteplasa', ok: false, res: 'Expusiste a la paciente a riesgo de hemorragia sin beneficio.' },
          B: { t: 'Apixabán o rivaroxabán; alta temprana con seguimiento', ok: true, res: 'Inicia apixabán y se va a casa al día siguiente con indicaciones.' },
          why: 'TEP de bajo riesgo: ACOD y manejo ambulatorio o alta temprana.' },
        { tag: 'Al alta', ecg: 'normal', vit: { FC: 88, SpO2: 96, FR: 18 },
          text: 'Pregunta si puede seguir con sus anticonceptivos.',
          q: '¿Qué le dices?',
          A: { t: 'Suspender los anticonceptivos con estrógenos y elegir un método sin estrógenos (DIU, por ejemplo)', ok: true, res: 'Se la refiere a Ginecología para un DIU.' },
          B: { t: 'Puede seguir con ellos mientras tome el anticoagulante', ok: false, res: 'Al terminar el anticoagulante quedaría con un factor de riesgo activo.' },
          why: 'Los estrógenos aumentan el riesgo de trombosis: se suspenden tras un evento tromboembólico.' },
        { tag: 'Otra paciente, misma noche', ecg: 'tachy', vit: { FC: 128, PAS: 78, PAD: 46, SpO2: 86, FR: 30, X: '↑' },
          text: 'Mujer de 50 años con TEP masivo confirmado: PAS de 78 mmHg sostenida por 20 min. Sin contraindicaciones.',
          q: '¿Qué haces?',
          A: { t: 'Heparina no fraccionada + trombólisis sistémica con alteplasa', ok: true, res: 'A la hora la PA sube a 104/66 y mejora la saturación.', vit: { FC: 104, PAS: 104, PAD: 66, SpO2: 93 } },
          B: { t: 'HBPM y observación', ok: false, res: 'Evoluciona a paro cardiaco por choque obstructivo.', vit: { PAS: 60, PAD: 30, SpO2: 78 } },
          why: 'TEP de alto riesgo (inestabilidad): trombólisis sistémica, o embolectomía si está contraindicada.' }
      ] }
  ]
};
