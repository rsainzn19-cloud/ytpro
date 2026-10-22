// Tema 3 · Lesión renal aguda (Nefrología, semana 1)
const T = { topic: 'lra', subj: 'nefro' };
const q = (o) => ({ ...T, ...o });

export default {
  lessons: {
    lra: {
      hook: 'Tres preguntas resuelven casi cualquier caso: ¿cumple criterios y en qué estadio?, ¿dónde está el problema (antes, dentro o después del riñón)? y ¿necesita diálisis ya?',
      nn: [['acute-kidney-injury', 'Acute Kidney Injury']],
      yt: 'acute kidney injury',
      anim: 'lra',
      compare: ['pre-nta'],
      sections: [
        { h: 'Definición y estadios (KDIGO)', html: `
<p>LRA es cualquiera de estos:</p>
<ul>
<li>Creatinina ↑ ≥0.3 mg/dL en 48 h.</li>
<li>Creatinina ↑ ≥1.5 veces la basal (conocida o presumida) en los últimos 7 días.</li>
<li>Uresis &lt;0.5 mL/kg/h por 6 h.</li>
</ul>
<div class="tablewrap"><table class="mini">
<tr><th>Estadio</th><th>Creatinina</th><th>Uresis</th></tr>
<tr><td>1</td><td>1.5–1.9 veces la basal, o ↑ ≥0.3 mg/dL</td><td>&lt;0.5 mL/kg/h por 6–12 h</td></tr>
<tr><td>2</td><td>2.0–2.9 veces la basal</td><td>&lt;0.5 mL/kg/h por ≥12 h</td></tr>
<tr><td>3</td><td>≥3 veces la basal, o Cr ≥4.0 mg/dL, o inicio de terapia de reemplazo renal</td><td>&lt;0.3 mL/kg/h por ≥24 h, o anuria ≥12 h</td></tr>
</table></div>
<p>Si la creatinina y la uresis dan estadios distintos, se queda el <b>más alto</b>.</p>` },
        { h: '¿Dónde está el problema?', html: `
<p><b>Prerrenal</b> (la más frecuente): el riñón está sano, pero le llega poca sangre.</p>
<ul>
<li>Hipovolemia: vómito, diarrea, hemorragia, diuréticos, quemaduras.</li>
<li>Volumen circulante efectivo bajo: IC (cardiorrenal), cirrosis (hepatorrenal), sepsis.</li>
<li>Fármacos que alteran la hemodinamia del glomérulo: AINE, IECA o ARA-II, inhibidores de calcineurina.</li>
</ul>
<p><b>Intrínseca</b>: daño del parénquima.</p>
<ul>
<li><b>Necrosis tubular aguda</b> (la intrínseca más frecuente): isquémica (prerrenal prolongada, choque) o tóxica (aminoglucósidos, vancomicina, anfotericina B, cisplatino, contraste; pigmentos como mioglobina y hemoglobina).</li>
<li><b>Nefritis intersticial aguda</b>: betalactámicos, AINE, IBP, rifampicina, sulfas. Fiebre, exantema, eosinofilia y cilindros leucocitarios.</li>
<li><b>Glomerular</b>: hematuria dismórfica, cilindros eritrocitarios, proteinuria e HTA.</li>
<li><b>Vascular</b>: ateroembolia (después de un cateterismo), microangiopatía trombótica (SHU, PTT), HTA maligna.</li>
</ul>
<p><b>Posrenal</b>: obstrucción bilateral, o de un riñón único: HPB, litiasis, tumores pélvicos, vejiga neurogénica, sonda tapada.</p>` },
        { h: 'Abordaje en 5 pasos', html: `
<ol>
<li><b>Historia</b>: pérdidas de volumen, fármacos y contraste de los últimos días, síntomas urinarios.</li>
<li><b>Exploración</b>: volumen (PA, FC, ortostatismo, IY, edema), globo vesical, livedo, exantema.</li>
<li><b>EGO con sedimento</b>: es la “biopsia líquida” del riñón.</li>
<li><b>Índices urinarios</b>: FENa (o FEUrea si usa diuréticos), sodio y osmolaridad urinaria.</li>
<li><b>USG renal</b>: hidronefrosis en la posrenal; riñones pequeños sugieren ERC previa.</li>
</ol>
<p>Laboratorio clave: creatinina, BUN, potasio, gasometría, BH y CK si sospechas rabdomiólisis.</p>` },
        { h: 'Lo que dice el sedimento', html: `
<div class="tablewrap"><table class="mini">
<tr><th>Hallazgo</th><th>Sugiere</th></tr>
<tr><td>Cilindros hialinos o sedimento normal</td><td>Prerrenal o posrenal</td></tr>
<tr><td>Cilindros granulosos “café lodoso” y células tubulares</td><td>Necrosis tubular aguda</td></tr>
<tr><td>Cilindros eritrocitarios, eritrocitos dismórficos</td><td>Glomerulonefritis</td></tr>
<tr><td>Cilindros leucocitarios, leucocituria estéril, eosinofiluria</td><td>Nefritis intersticial (pielonefritis si hay bacterias)</td></tr>
<tr><td>Tira con “sangre” sin eritrocitos en el sedimento</td><td>Mioglobina o hemoglobina: rabdomiólisis o hemólisis</td></tr>
<tr><td>Cristales</td><td>Etilenglicol (oxalato), lisis tumoral (urato), fármacos (aciclovir, metotrexato)</td></tr>
</table></div>` },
        { h: 'Índices urinarios', html: `
<p><b>FENa</b> = (Na urinario × Cr plasmática) ÷ (Na plasmático × Cr urinaria) × 100. La comparación completa entre prerrenal y NTA está en el comparador de abajo.</p>
<ul>
<li>FENa &lt;1% sin ser prerrenal: contraste, mioglobinuria o hemoglobinuria, glomerulonefritis aguda, obstrucción temprana, sepsis temprana.</li>
<li>Con diuréticos la FENa sale falsamente alta: usa la <b>FEUrea</b> (&lt;35% prerrenal, &gt;50% NTA).</li>
<li>En ERC la FENa basal ya puede estar alta.</li>
</ul>` },
        { h: 'Tratamiento', html: `
<ul>
<li>Trata la causa. Prerrenal: volumen con cristaloides (de preferencia balanceados, como Hartmann o Plasma-Lyte) y vigila la sobrecarga.</li>
<li>Suspende nefrotóxicos y ajusta dosis a la TFG. En hipovolemia, suspende temporalmente IECA o ARA-II, diuréticos, metformina e iSGLT2.</li>
<li>Los diuréticos <b>no</b> previenen ni tratan la LRA: solo sirven para la sobrecarga de volumen.</li>
<li>Posrenal: sonda vesical (HPB) o nefrostomía o catéter JJ (obstrucción alta). Después vigila la poliuria posobstructiva.</li>
<li>Monitorea a diario uresis, peso, creatinina, potasio y gasometría.</li>
<li>En la recuperación de la NTA hay una fase poliúrica, con riesgo de hipokalemia e hipovolemia.</li>
</ul>` },
        { h: 'Hiperkalemia: el peligro inmediato', html: `
<p>Cambios del ECG en orden: T picudas → PR largo y P aplanada → QRS ancho → onda sinusoidal → FV o asistolia.</p>
<ol>
<li><b>Proteger el corazón</b>: gluconato de calcio al 10%, 10 mL IV en 2–3 min; se repite si siguen los cambios. No baja el potasio.</li>
<li><b>Meter el K a la célula</b>: insulina rápida 10 U IV con 25 g de glucosa (vigila hipoglucemia); salbutamol nebulizado 10–20 mg; bicarbonato solo si hay acidosis metabólica.</li>
<li><b>Sacar el K del cuerpo</b>: diurético de asa (si orina), quelantes (patiromer, ciclosilicato de zirconio sódico) o diálisis.</li>
<li>Suspende lo que lo sube: IECA o ARA-II, espironolactona, AINE, TMP-SMX y suplementos de potasio.</li>
</ol>` },
        { h: 'Diálisis urgente: AEIOU', html: `
<div class="tablewrap"><table class="mini">
<tr><th></th><th>Indicación</th></tr>
<tr><td><b>A</b></td><td>Acidosis metabólica grave y refractaria (pH &lt;7.1–7.15)</td></tr>
<tr><td><b>E</b></td><td>Electrolitos: hiperkalemia refractaria (&gt;6.5 o con cambios en el ECG pese al tratamiento)</td></tr>
<tr><td><b>I</b></td><td>Intoxicaciones dializables: metanol, etilenglicol, litio, salicilatos, metformina con acidosis láctica, valproato</td></tr>
<tr><td><b>O</b></td><td>Sobrecarga (<i>overload</i>) de volumen que no responde a diuréticos: edema pulmonar</td></tr>
<tr><td><b>U</b></td><td>Uremia sintomática: pericarditis, encefalopatía, sangrado urémico</td></tr>
</table></div>
<p>Ninguna cifra aislada de creatinina o BUN es indicación por sí sola.</p>` },
        { h: 'Escenarios de examen', html: `
<ul>
<li><b>Triple golpe</b>: AINE + IECA o ARA-II + diurético en un adulto mayor → prerrenal.</li>
<li><b>Contraste</b>: la creatinina sube a las 24–72 h; se previene con hidratación isotónica en pacientes de riesgo. La N-acetilcisteína no sirve.</li>
<li><b>Rabdomiólisis</b>: CK &gt;5 veces el límite, tira con sangre sin eritrocitos, potasio y fósforo altos, calcio bajo → cristaloides abundantes.</li>
<li><b>Ateroembolia</b>: semanas después de un cateterismo, con livedo, dedos azules con pulsos presentes, eosinofilia y C3 bajo.</li>
<li><b>Síndrome hepatorrenal</b>: cirrosis con ascitis que no responde a 2 días de albúmina (1 g/kg) y suspensión de diuréticos → terlipresina con albúmina.</li>
<li><b>Lisis tumoral</b>: después de quimioterapia; ácido úrico, potasio y fósforo altos, calcio bajo.</li>
</ul>` }
      ],
      mnemo: { t: 'AEIOU: las vocales de la diálisis urgente', d: 'Acidosis · Electrolitos (potasio) · Intoxicaciones · Overload (sobrecarga) · Uremia. Y el “triple golpe” = AINE + IECA o ARA-II + diurético.' },
      pearl: 'Si el paciente toma diurético, la FENa no sirve: pide FEUrea. Y si la FENa es <1% en un paciente con contraste o rabdomiólisis, no es prerrenal.',
      trap: 'La opción “furosemida para aumentar la uresis” en una NTA oligúrica es incorrecta: no mejora el pronóstico. Tampoco “dializar porque la creatinina es 6”: sin AEIOU no hay urgencia.',
      guide: [
        'Definición: los criterios KDIGO 2012 son los que se usan (RIFLE y AKIN son versiones anteriores). ⚠️ KDIGO está actualizando su guía de LRA; pregunta si tu profesor menciona cambios.',
        'Líquidos: KDIGO 2012 dice “cristaloides isotónicos”. Los ensayos posteriores (SMART) favorecen las soluciones balanceadas sobre la salina al 0.9% en pacientes críticos. Si te dan a elegir, balanceada.',
        'Umbral de TFG para prevenir la nefropatía por contraste: varía según la guía (<30 mL/min en el consenso ACR-NKF 2020; algunos protocolos usan <45).'
      ],
      refs: [
        'KDIGO Clinical Practice Guideline for Acute Kidney Injury. Kidney Int Suppl 2012;2:1–138.',
        'Semler MW, et al. Balanced crystalloids versus saline in critically ill adults (SMART). N Engl J Med 2018.',
        'Weisbord SD, et al. Outcomes after angiography with sodium bicarbonate and acetylcysteine (PRESERVE). N Engl J Med 2018.',
        'Davenport MS, et al. ACR–NKF consensus: use of IV iodinated contrast media in patients with kidney disease. Radiology 2020.'
      ]
    }
  },

  compares: {
    'pre-nta': {
      topic: 'lra', a: 'Prerrenal', b: 'NTA',
      rows: [
        ['Mecanismo', 'Llega menos sangre; el túbulo está sano y reabsorbe sodio con avidez', 'La célula tubular está dañada (isquemia prolongada o tóxicos) y no reabsorbe sodio'],
        ['FENa', '<1%', '>2%'],
        ['FEUrea (si usa diurético)', '<35%', '>50%'],
        ['Na urinario', '<20 mEq/L', '>40 mEq/L'],
        ['Osmolaridad urinaria', '>500 mOsm/kg (orina concentrada)', '<350 mOsm/kg (isostenuria, ≈300)'],
        ['BUN/Cr', '>20', '10–15'],
        ['Sedimento', 'Normal o cilindros hialinos', 'Cilindros granulosos “café lodoso” y células tubulares'],
        ['Respuesta a volumen', 'Mejora en 24–72 h', 'No mejora; tarda días a semanas'],
        ['Tratamiento', 'Volumen y quitar la causa (AINE, IECA o ARA-II, diurético)', 'Soporte: evitar nefrotóxicos, balance de líquidos y diálisis si hay AEIOU']
      ]
    }
  },

  anims: {
    lra: {
      title: 'El glomérulo bajo presión',
      steps: [
        { cap: '<b>Glomérulo normal.</b> La sangre entra por la arteriola aferente, filtra en el glomérulo y sale por la eferente. El filtrado baja al túbulo. La TFG depende de la presión dentro del glomérulo.',
          labels: [[24, 40, 'Aferente'], [130, 32, 'Eferente'], [112, 110, 'Túbulo']] },
        { cap: '<b>Hipovolemia compensada.</b> Llega menos sangre. Las prostaglandinas dilatan la aferente y la angiotensina II contrae la eferente: la presión glomerular se sostiene y la TFG casi no cae.',
          labels: [[24, 36, 'PG: dilata'], [130, 32, 'Ang II: contrae']] },
        { cap: '<b>AINE.</b> Bloquean las prostaglandinas: la aferente se contrae, entra menos sangre al glomérulo y la TFG cae.',
          labels: [[24, 36, 'AINE ✕ PG'], [130, 32, 'Ang II: contrae']] },
        { cap: '<b>IECA o ARA-II.</b> Sin angiotensina II, la eferente se relaja y la presión del glomérulo se escapa: la TFG cae. En un paciente bien hidratado es tolerable; con hipovolemia, no.',
          labels: [[24, 36, 'PG: dilata'], [128, 32, 'IECA/ARA ✕ Ang II']] },
        { cap: '<b>Triple golpe.</b> AINE (aferente cerrada) + IECA o ARA-II (eferente abierta) + diurético (menos volumen). Es la LRA prerrenal clásica del adulto mayor con dolor articular.',
          labels: [[24, 36, 'AINE'], [130, 32, 'IECA/ARA'], [60, 10, 'Diurético: ↓ volumen']] },
        { cap: '<b>Prerrenal: el túbulo está sano.</b> Las células tubulares reabsorben el sodio con avidez. Casi no sale sodio en la orina (FENa <1%) y la orina sale concentrada.',
          labels: [[112, 74, 'Reabsorbe Na'], [112, 110, 'FENa <1%']] },
        { cap: '<b>Necrosis tubular aguda.</b> Si la isquemia se prolonga o hay tóxicos, las células tubulares mueren y se desprenden como cilindros granulosos “café lodoso”. El sodio se escapa a la orina (FENa >2%).',
          labels: [[112, 74, 'Células muertas'], [86, 110, 'Cilindros'], [140, 110, 'FENa >2%']] },
        { cap: '<b>Posrenal.</b> Una obstrucción (próstata, litos) frena la salida. La presión se transmite hacia atrás hasta la cápsula de Bowman y la filtración se detiene. Primero, sonda o desobstrucción.',
          labels: [[146, 76, 'Obstrucción'], [74, 10, 'Presión retrógrada']] }
      ]
    }
  },

  cards: [
    ['Definición de LRA (KDIGO)', 'Cr ↑ ≥0.3 mg/dL en 48 h · Cr ↑ ≥1.5 veces la basal en 7 días · uresis <0.5 mL/kg/h por 6 h'],
    ['LRA estadio 1', '1.5–1.9 veces la basal o ↑ ≥0.3 mg/dL · uresis <0.5 por 6–12 h'],
    ['LRA estadio 2', '2.0–2.9 veces la basal · uresis <0.5 por ≥12 h'],
    ['LRA estadio 3', '≥3 veces, Cr ≥4.0 o terapia de reemplazo renal · uresis <0.3 por ≥24 h o anuria ≥12 h'],
    ['Fórmula de la FENa', '(Na orina × Cr plasma) ÷ (Na plasma × Cr orina) × 100'],
    ['FENa <1% sin ser prerrenal', 'Contraste, mioglobinuria o hemoglobinuria, GN aguda, obstrucción temprana'],
    ['Si el paciente toma diurético, usa…', 'FEUrea: <35% prerrenal, >50% NTA'],
    ['Cilindros granulosos “café lodoso”', 'Necrosis tubular aguda'],
    ['Cilindros eritrocitarios', 'Glomerulonefritis'],
    ['Cilindros leucocitarios + exantema + fiebre + eosinofilia', 'Nefritis intersticial aguda (suspender el fármaco)'],
    ['Triple golpe', 'AINE + IECA o ARA-II + diurético'],
    ['Efecto del AINE en el glomérulo', 'Contrae la aferente (bloquea prostaglandinas)'],
    ['Efecto del IECA o ARA-II en el glomérulo', 'Dilata la eferente (sin angiotensina II) → ↓ presión de filtración'],
    ['AEIOU', 'Acidosis · Electrolitos · Intoxicaciones · Overload · Uremia'],
    ['Hiperkalemia con cambios en el ECG: primer paso', 'Gluconato de calcio al 10%, 10 mL IV'],
    ['Hiperkalemia: cómo meter el K a la célula', 'Insulina rápida 10 U + 25 g de glucosa; salbutamol nebulizado'],
    ['ECG de la hiperkalemia, en orden', 'T picudas → PR largo y P plana → QRS ancho → onda sinusoidal'],
    ['Pista de rabdomiólisis en el EGO', 'Tira positiva para sangre sin eritrocitos en el sedimento'],
    ['Primer estudio de imagen en LRA', 'USG renal: busca hidronefrosis'],
    ['Ateroembolia renal', 'Después de un cateterismo: livedo, dedos azules con pulsos, eosinofilia, C3 bajo']
  ],

  questions: [
    q({ id: 'lra-01', dif: 1,
      stem: 'Hombre de 68 años con 3 días de vómito y diarrea. FC 108, PA 98/60, mucosas secas. Cr 2.1 mg/dL (basal 1.0), BUN 58 mg/dL. Na urinario 12 mEq/L, FENa 0.4%, sedimento con cilindros hialinos. ¿Diagnóstico y manejo?',
      opts: ['NTA; restricción de líquidos', 'LRA prerrenal; reposición con cristaloides', 'Nefritis intersticial; esteroides', 'LRA posrenal; sonda vesical', 'Glomerulonefritis; biopsia renal'],
      ans: 1,
      exp: 'Hipovolemia + FENa <1% + Na urinario <20 + BUN/Cr >20 (58/2.1 ≈ 28) + cilindros hialinos = prerrenal. El túbulo está sano y conserva sodio. Responde al volumen en 24–72 h.',
      why: ['La NTA tiene FENa >2% y cilindros granulosos; restringir líquidos empeoraría la hipoperfusión.', '', 'No hay fármaco desencadenante, exantema, eosinofilia ni cilindros leucocitarios.', 'No hay datos de obstrucción (globo vesical, hidronefrosis).', 'No hay hematuria dismórfica, cilindros eritrocitarios ni proteinuria.'],
      ref: 'KDIGO LRA 2012' }),

    q({ id: 'lra-02', dif: 1,
      stem: 'Mujer de 60 años hospitalizada. Creatinina basal 0.8 mg/dL; hoy 2.0 mg/dL. Uresis conservada. ¿Estadio KDIGO?',
      opts: ['Estadio 1', 'Estadio 2', 'Estadio 3', 'No es LRA', 'No se puede estadificar sin la uresis'],
      ans: 1,
      exp: '2.0 ÷ 0.8 = 2.5 veces la basal → estadio 2 (2.0–2.9). Estadio 1: 1.5–1.9 veces o ↑ ≥0.3 mg/dL. Estadio 3: ≥3 veces, Cr ≥4.0 o inicio de terapia de reemplazo renal.',
      why: ['1.5–1.9 veces es estadio 1; ella tiene 2.5 veces.', '', 'Necesitaría ≥3 veces (≥2.4 mg/dL), Cr ≥4.0 o diálisis.', 'Supera por mucho el aumento de 0.3 mg/dL.', 'Basta la creatinina; se toma el criterio que dé el estadio más alto.'],
      ref: 'KDIGO LRA 2012' }),

    q({ id: 'lra-03', dif: 2,
      stem: 'Hombre de 70 años (80 kg) en terapia intensiva. Creatinina de 1.0 a 1.6 mg/dL en 48 h. Uresis de 20 mL/h durante las últimas 26 horas. ¿Estadio KDIGO?',
      opts: ['Estadio 1, por creatinina', 'Estadio 2', 'Estadio 3, por uresis', 'No es LRA', 'Estadio 1, porque se toma el criterio menor'],
      ans: 2,
      exp: '20 mL/h ÷ 80 kg = 0.25 mL/kg/h por más de 24 h → estadio 3 (uresis <0.3 mL/kg/h por ≥24 h o anuria ≥12 h). Cuando la creatinina y la uresis dan estadios distintos, se toma el más alto.',
      why: ['Por creatinina sería estadio 1, pero se toma el criterio que dé el estadio mayor.', 'El estadio 2 es uresis <0.5 por ≥12 h; él está por debajo de 0.3 por más de 24 h.', '', 'Cumple criterios por creatinina y por uresis.', 'Es al revés: se toma el criterio mayor.'],
      ref: 'KDIGO LRA 2012' }),

    q({ id: 'lra-04', dif: 2,
      stem: 'Mujer de 54 años en choque séptico por pielonefritis, con hipotensión sostenida por 18 h. Día 3: Cr 3.8 mg/dL, FENa 3.1%, osmolaridad urinaria 290 mOsm/kg y sedimento con cilindros granulosos pardos. ¿Diagnóstico?',
      opts: ['LRA prerrenal', 'Necrosis tubular aguda isquémica', 'Glomerulonefritis postinfecciosa', 'Nefropatía obstructiva', 'Síndrome hepatorrenal'],
      ans: 1,
      exp: 'La hipoperfusión prolongada mata a las células tubulares: ya no reabsorben sodio (FENa >2%) ni concentran la orina (≈300 mOsm/kg). Los cilindros granulosos “café lodoso” son el sello de la NTA.',
      why: ['La prerrenal tendría FENa <1% y orina concentrada (>500).', '', 'Tendría cilindros eritrocitarios, hematuria y C3 bajo 1–3 semanas después de la infección.', 'No hay datos de obstrucción.', 'No tiene cirrosis, y el SHR tiene FENa <1%.'],
      ref: 'KDIGO LRA 2012' }),

    q({ id: 'lra-05', dif: 2,
      stem: 'Hombre de 75 años con IC tratado con furosemida. Cr de 1.2 a 2.0 mg/dL después de un cuadro de diarrea. FENa 2.6%, FEUrea 24%. ¿Cómo lo interpretas?',
      opts: ['NTA, por la FENa >2%', 'Prerrenal: la furosemida eleva falsamente la FENa, y la FEUrea <35% es confiable', 'Posrenal', 'No se puede interpretar sin biopsia', 'Nefritis intersticial por furosemida'],
      ans: 1,
      exp: 'Los diuréticos aumentan la excreción de sodio y elevan la FENa aunque el riñón esté hipoperfundido. La urea se reabsorbe en el túbulo proximal y el diurético casi no la afecta: FEUrea <35% = prerrenal; >50% = NTA.',
      why: ['La FENa no es confiable con diuréticos.', '', 'No hay datos de obstrucción.', 'Los índices urinarios bastan; la biopsia no está indicada.', 'No hay exantema, eosinofilia ni sedimento sugestivo, y la FEUrea indica prerrenal.'],
      ref: 'KDIGO LRA 2012' }),

    q({ id: 'lra-06', dif: 1,
      stem: 'Hombre de 78 años con HPB. Lleva 18 h sin orinar, con dolor suprapúbico y globo vesical palpable. Cr 3.4 (basal 1.1). USG: hidronefrosis bilateral. ¿Primer paso?',
      opts: ['Furosemida IV', 'Colocar sonda vesical', 'Hemodiálisis urgente', 'Biopsia renal', 'Tomografía con contraste'],
      ans: 1,
      exp: 'LRA posrenal por obstrucción de la salida vesical. La sonda vesical es diagnóstica y terapéutica. Después vigila la diuresis posobstructiva: poliuria con pérdida de agua, sodio y potasio.',
      why: ['El problema es mecánico; el diurético no destapa la uretra.', '', 'Primero se libera la obstrucción; no hay indicación AEIOU descrita.', 'No está indicada con una causa obstructiva evidente.', 'El contraste es nefrotóxico y el USG ya dio el diagnóstico.'],
      ref: 'KDIGO LRA 2012' }),

    q({ id: 'lra-07', dif: 2,
      stem: 'Mujer de 72 años con HTA tratada con losartán e hidroclorotiazida. Empieza ibuprofeno por gonartrosis. A los 10 días, Cr de 0.9 a 2.2 mg/dL. ¿Cómo contribuye el losartán a la caída del filtrado?',
      opts: ['Contrae la arteriola aferente', 'Dilata la arteriola eferente al bloquear el efecto de la angiotensina II', 'Es tóxico directo para el túbulo', 'Precipita cristales en el túbulo', 'Produce nefritis intersticial alérgica'],
      ans: 1,
      exp: 'Cuando baja la perfusión, el riñón sostiene el filtrado dilatando la aferente (prostaglandinas) y contrayendo la eferente (angiotensina II). El AINE quita la dilatación aferente, el ARA-II quita la contracción eferente y el diurético reduce el volumen: es el “triple golpe”.',
      why: ['Eso lo hace el AINE al bloquear las prostaglandinas vasodilatadoras.', '', 'Los ARA-II no son tóxicos para el túbulo.', 'Dan cristaluria fármacos como aciclovir, metotrexato, sulfas e indinavir.', 'La NIA la causan fármacos como betalactámicos, AINE o IBP; no es este mecanismo.'],
      ref: 'Fisiología renal · KDIGO LRA 2012' }),

    q({ id: 'lra-08', dif: 1,
      stem: 'Hombre de 66 años con ERC y LRA. K 7.2 mEq/L. ECG: T picudas, PR prolongado y QRS de 130 ms. ¿Qué das primero?',
      opts: ['Poliestireno sulfonato de sodio oral', 'Gluconato de calcio al 10% IV', 'Furosemida IV', 'Bicarbonato de sodio IV a todos los pacientes', 'Hemodiálisis antes de cualquier medicamento'],
      ans: 1,
      exp: 'Con cambios en el ECG, lo primero es estabilizar la membrana del miocardio con calcio IV (10 mL de gluconato de calcio al 10% en 2–3 min; se repite si el ECG no mejora). No baja el potasio: después se redistribuye (insulina con glucosa, salbutamol) y se elimina (diurético, quelantes, diálisis).',
      why: ['Tarda horas en actuar.', '', 'Elimina potasio, pero lento y solo si orina.', 'Solo si hay acidosis metabólica.', 'Puede necesitarla, pero primero se protege el corazón con calcio mientras se prepara.'],
      ref: 'KDIGO 2020 controversias del potasio' }),

    q({ id: 'lra-09', dif: 1,
      stem: '¿Cuál de estos hallazgos en un paciente con LRA es indicación de diálisis urgente?',
      opts: ['Creatinina de 6.5 mg/dL en un paciente asintomático', 'BUN de 110 mg/dL sin síntomas', 'Frote pericárdico con dolor pleurítico (pericarditis urémica)', 'K de 5.8 mEq/L sin cambios en el ECG', 'pH 7.29 con HCO₃ de 17'],
      ans: 2,
      exp: 'AEIOU: Acidosis grave refractaria, Electrolitos (hiperkalemia refractaria), Intoxicaciones dializables, sobrecarga de volumen (Overload) refractaria y Uremia sintomática (pericarditis, encefalopatía, sangrado). Ninguna cifra aislada de creatinina o BUN es indicación.',
      why: ['La cifra sola no indica diálisis.', 'Sin síntomas urémicos no es indicación urgente.', '', 'Una hiperkalemia leve sin cambios en el ECG se maneja con medicamentos.', 'Es una acidosis leve; la indicación es acidosis grave (pH <7.1–7.15) que no responde.'],
      ref: 'KDIGO LRA 2012' }),

    q({ id: 'lra-10', dif: 2,
      stem: 'Hombre de 24 años después de correr 42 km con calor. Orina oscura y mialgias. Tira reactiva: sangre +++. Sedimento: 0–2 eritrocitos por campo. CK 52 000 U/L, K 5.9, Cr 2.3. ¿Tratamiento principal?',
      opts: ['Restricción de líquidos', 'Cristaloides IV abundantes para lograr una uresis alta (≈200–300 mL/h)', 'Furosemida sin reponer volumen', 'Esteroides IV', 'Biopsia renal'],
      ans: 1,
      exp: 'Tira positiva para sangre sin eritrocitos en el sedimento = pigmento (mioglobina). La rabdomiólisis daña el túbulo por obstrucción con cilindros, toxicidad del grupo hem y vasoconstricción. Lo que más ayuda es hidratar temprano y en abundancia. Vigila potasio y fósforo (altos), calcio (bajo al inicio) y síndrome compartimental.',
      why: ['Empeoraría la precipitación de mioglobina.', '', 'Los diuréticos sin volumen empeoran la hipoperfusión.', 'No hay un proceso inflamatorio que tratar.', 'El diagnóstico es clínico y de laboratorio.'],
      ref: 'Bosch X, et al. N Engl J Med 2009' }),

    q({ id: 'lra-11', dif: 2,
      stem: 'Mujer de 45 años que empezó amoxicilina hace 9 días por sinusitis. Tiene fiebre, exantema maculopapular y Cr de 0.8 a 2.4. EGO: leucocituria estéril y cilindros leucocitarios. Eosinofilia en sangre. ¿Diagnóstico y manejo?',
      opts: ['Pielonefritis; cambiar de antibiótico', 'Nefritis intersticial aguda; suspender el fármaco (± esteroide)', 'NTA por amoxicilina; diálisis', 'Glomerulonefritis postinfecciosa; esteroides en pulsos', 'LRA prerrenal; líquidos'],
      ans: 1,
      exp: 'La NIA es una reacción de hipersensibilidad (betalactámicos, AINE, IBP, sulfas, rifampicina). La triada fiebre, exantema y eosinofilia solo aparece completa en una minoría, pero aquí está. Lo clave es suspender el fármaco; los esteroides se consideran si no mejora en pocos días.',
      why: ['La leucocituria es estéril y el exantema apunta a hipersensibilidad, no a infección.', '', 'La amoxicilina no es un tóxico tubular típico, y los cilindros leucocitarios no son de NTA.', 'Daría cilindros eritrocitarios e hipocomplementemia.', 'No hay hipovolemia y el sedimento es activo.'],
      ref: 'Perazella MA, et al. Nat Rev Nephrol 2010' }),

    q({ id: 'lra-12', dif: 2,
      stem: 'Hombre de 71 años, fumador, 3 semanas después de un cateterismo cardiaco. Cr de 1.1 a 2.8. Livedo reticularis en piernas, dedos azules y dolorosos con pulsos pedios presentes, eosinofilia y C3 bajo. ¿Diagnóstico?',
      opts: ['Nefropatía por contraste', 'Enfermedad renal ateroembólica', 'Nefritis intersticial por contraste', 'Trombosis de la arteria renal', 'LRA prerrenal'],
      ans: 1,
      exp: 'Al manipular una aorta con ateromas se sueltan cristales de colesterol que tapan arteriolas: LRA subaguda (semanas), livedo, dedos azules con pulsos presentes, eosinofilia, eosinofiluria e hipocomplementemia. La biopsia muestra hendiduras de colesterol. El tratamiento es de soporte, con estatina.',
      why: ['Aparece a las 24–72 h, sin livedo ni eosinofilia.', '', 'No es una presentación típica del contraste.', 'Sería abrupta, con dolor en el flanco y LDH alta.', 'No hay hipovolemia ni fármacos hemodinámicos.'],
      ref: 'Scolari F, Ravani P. Lancet 2010' }),

    q({ id: 'lra-13', dif: 2,
      stem: 'Mujer de 69 años con ERC G3b (TFG 35) y DM2 que necesita una tomografía con contraste yodado. ¿Qué medida preventiva tiene respaldo?',
      opts: ['N-acetilcisteína oral', 'Hidratación IV con solución isotónica antes y después del estudio', 'Hemodiálisis profiláctica después del contraste', 'Furosemida IV antes del estudio', 'Cancelar siempre el estudio'],
      ans: 1,
      exp: 'En pacientes con riesgo se usa hidratación IV isotónica, la menor dosis posible de contraste de baja osmolaridad y se suspenden los nefrotóxicos. La N-acetilcisteína no mostró beneficio (PRESERVE). ⚠️ El umbral de TFG para hidratar varía entre guías (<30 en el consenso ACR-NKF 2020; algunos protocolos usan <45).',
      why: ['El ensayo PRESERVE no mostró beneficio.', '', 'No previene la nefropatía y tiene riesgos.', 'Los diuréticos aumentan el riesgo.', 'Si el estudio es necesario, se hace con prevención.'],
      ref: 'ACR-NKF 2020 · PRESERVE 2018' }),

    q({ id: 'lra-14', dif: 2,
      stem: 'Paciente de 61 años con NTA oligúrica, euvolémico y sin edema pulmonar. El residente propone furosemida IV para “convertirla en no oligúrica”. ¿Qué es correcto?',
      opts: ['Mejora la supervivencia y acelera la recuperación', 'No se recomienda para tratar la LRA; solo para manejar la sobrecarga de volumen', 'Está indicada en todos los pacientes oligúricos', 'Evita la necesidad de diálisis', 'Debe darse con manitol de rutina'],
      ans: 1,
      exp: 'KDIGO recomienda no usar diuréticos para prevenir ni tratar la LRA, salvo para manejar la sobrecarga de volumen. Producir más orina no cambia el pronóstico ni evita la diálisis.',
      why: ['No mejora la supervivencia ni la recuperación.', '', 'No hay indicación general en la oliguria.', 'No evita la diálisis.', 'El manitol tampoco se recomienda para prevenir ni tratar la LRA.'],
      ref: 'KDIGO LRA 2012' }),

    q({ id: 'lra-15', dif: 3,
      stem: 'Hombre de 56 años con cirrosis alcohólica y ascitis. Cr de 1.0 a 2.3 en 3 días. Se suspendieron los diuréticos y recibió albúmina 1 g/kg por 2 días sin mejoría. Sin choque, sin nefrotóxicos, sedimento normal, sin proteinuria, USG renal normal. FENa 0.2%. ¿Diagnóstico y tratamiento?',
      opts: ['NTA; diálisis', 'Síndrome hepatorrenal (SHR-LRA); terlipresina con albúmina', 'Prerrenal por hipovolemia; más diuréticos', 'Nefropatía por IgA; esteroides', 'Nefropatía obstructiva; sonda vesical'],
      ans: 1,
      exp: 'SHR-LRA: LRA funcional en la cirrosis con ascitis, por vasodilatación esplácnica y vasoconstricción renal intensa. Se diagnostica cuando no responde a 2 días sin diuréticos y con albúmina 1 g/kg, sin choque, nefrotóxicos ni daño estructural. Tratamiento: vasoconstrictor (terlipresina, o norepinefrina en terapia intensiva) con albúmina; el definitivo es el trasplante hepático.',
      why: ['Un sedimento normal con FENa muy baja no es NTA.', '', 'La hipovolemia ya se descartó con la albúmina, y los diuréticos empeoran el cuadro.', 'No hay hematuria ni proteinuria.', 'El USG es normal, sin hidronefrosis.'],
      ref: 'ICA/ADQI 2015 · AASLD 2021 ascitis y SHR' })
  ],

  cases: [
    { id: 'g-lra', topic: 'lra', subj: 'nefro',
      title: 'La rodilla de doña Carmen', place: 'Urgencias',
      patient: { name: 'Carmen', age: 74, sex: 'M', skin: '#E2B08A', hair: '#D9D9E3', gown: '#E79AB3' },
      intro: 'Tiene HTA tratada con losartán 100 mg e hidroclorotiazida 25 mg. Por dolor de rodilla toma ibuprofeno 400 mg c/8 h desde hace 10 días. Lleva 3 días con diarrea. Llega débil y mareada.',
      extra: { label: 'K⁺', unit: 'mEq/L' },
      start: { FC: 52, PAS: 96, PAD: 58, SpO2: 97, FR: 20, X: 6.9 },
      nodes: [
        { tag: 'Llegada', ecg: 'peakedT',
          text: 'Cr 2.6 mg/dL (basal 0.9), K 6.9 mEq/L, HCO₃ 17. El monitor muestra T picudas y PR largo.',
          q: '¿Qué das primero?',
          A: { t: 'Gluconato de calcio al 10% IV', ok: true, res: 'Las T siguen picudas, pero el QRS se mantiene angosto. Ganaste tiempo.' },
          B: { t: 'Poliestireno sulfonato oral y repetir el K en 6 h', ok: false, res: 'El quelante tarda horas. El QRS se ensancha. Tu residente le pasa calcio IV.', ecg: 'wide', vit: { FC: 44 } },
          after: { ecg: 'peakedT', vit: { FC: 52 } },
          why: 'Con cambios en el ECG, lo primero es estabilizar la membrana con calcio IV. No baja el potasio, pero protege del paro.' },
        { tag: 'Minuto 10', ecg: 'peakedT',
          text: 'Ya recibió calcio. El potasio sigue en 6.9.',
          q: '¿Ahora qué?',
          A: { t: 'Furosemida 80 mg IV para eliminar el potasio', ok: false, res: 'Está hipovolémica: la furosemida empeora la perfusión renal y la hipotensión.', vit: { PAS: 86, PAD: 52 } },
          B: { t: 'Insulina rápida 10 U IV con 25 g de glucosa, y salbutamol nebulizado', ok: true, res: 'A los 60 min el potasio baja a 5.8 y el ECG mejora.' },
          after: { ecg: 'normal', vit: { FC: 76, X: 5.8 } },
          why: 'Después del calcio, se mete el potasio a la célula: insulina con glucosa (vigila hipoglucemia) y salbutamol. Los diuréticos solo sirven para eliminarlo si hay buen volumen y orina.' },
        { tag: 'Hora 1', ecg: 'normal', vit: { FC: 102, PAS: 98, PAD: 60 },
          text: 'EGO: densidad 1.028, sedimento con cilindros hialinos. Na urinario 11, FENa 0.3%, osmolaridad urinaria 620. BUN 64.',
          q: '¿Qué tipo de LRA es y qué haces?',
          A: { t: 'Prerrenal: suspender ibuprofeno, losartán e HCTZ y reponer volumen con cristaloide balanceado', ok: true, res: 'Con 1.5 L de Hartmann mejora la PA y orina 0.8 mL/kg/h.', vit: { FC: 86, PAS: 118, PAD: 70 } },
          B: { t: 'NTA: restringir líquidos e iniciar furosemida', ok: false, res: 'La hipoperfusión se prolonga… y puede convertir la prerrenal en una NTA de verdad.', vit: { PAS: 88, PAD: 54 } },
          why: 'Hipovolemia + triple golpe (AINE + ARA-II + diurético) + FENa <1% + orina concentrada + cilindros hialinos = prerrenal. Volumen y quitar la causa. El Hartmann no empeora la hiperkalemia y ayuda a corregir la acidosis.' },
        { tag: 'Hora 2', ecg: 'normal', vit: { FC: 86, PAS: 118, PAD: 70 },
          text: 'Creatinina basal 0.9 mg/dL; hoy 2.6 mg/dL.',
          q: '¿Qué estadio KDIGO tiene?',
          A: { t: 'Estadio 2', ok: true, res: '2.6 ÷ 0.9 = 2.9 veces la basal: estadio 2.' },
          B: { t: 'Estadio 3', ok: false, res: 'Para estadio 3 necesitaría ≥3 veces la basal (≥2.7), Cr ≥4.0 o diálisis.' },
          why: 'Estadio 1: 1.5–1.9 veces · Estadio 2: 2.0–2.9 veces · Estadio 3: ≥3 veces, Cr ≥4.0 o terapia de reemplazo renal.' },
        { tag: 'Día 3', ecg: 'normal', vit: { FC: 78, PAS: 132, PAD: 78, SpO2: 98, FR: 16, X: 4.6 },
          text: 'Cr 1.2 mg/dL con diuresis adecuada. Su hija pregunta qué medicamentos debe tomar al alta.',
          q: '¿Qué indicas?',
          A: { t: 'Reiniciar losartán, HCTZ e ibuprofeno como antes', ok: false, res: 'En 2 semanas regresa con la misma LRA.' },
          B: { t: 'Reiniciar el ARA-II cuando esté euvolémica con Cr estable, revisar Cr y K en 1–2 semanas, y cambiar el ibuprofeno por paracetamol o AINE tópico', ok: true, res: 'Le das un plan para “días de enfermedad”: si vuelve a tener diarrea o vómito, suspender temporalmente losartán y diurético.' },
          why: 'El ARA-II protege a largo plazo, pero se reinicia con euvolemia y vigilancia. En adultos mayores con HTA o ERC se evitan los AINE orales; para la gonartrosis, AINE tópico o paracetamol.' }
      ] }
  ]
};
