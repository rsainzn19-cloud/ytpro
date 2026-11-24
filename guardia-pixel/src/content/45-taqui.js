// Tema 36 · Taquiarritmias y antiarrítmicos (Cardiología, semana 11)
const T = { topic: 'taqui', subj: 'cardio' };
const q = (o) => ({ ...T, ...o });
const SRC = { short: 'De tu Guía Cardio', vs: 'tu guía', name: 'Guía Cardio · Ximena Cors Cepeda (EMIS 5)', url: 'https://docs.google.com/document/d/1KD6KncWKFzExg3jRxPwSSYhywjqoqJN6KhAD_fr6TWk/edit' };

export default {
  lessons: {
    taqui: {
      hook: 'Ante cualquier taquicardia: ¿está estable? Si no, cardioversión. Si sí, mira el QRS (estrecho o ancho) y el ritmo (regular o irregular). Con eso sabes qué es y qué dar.',
      nn: [], yt: 'atrial fibrillation SVT ventricular tachycardia ACLS tachycardia algorithm',
      video: [
        { ch: 'Dos preguntas para cualquier taquicardia', sc: [
          { v: { k: 'title', t: 'Taquiarritmias', s: 'Semana 11 · Cardiología' },
            say: 'Semana once: las taquiarritmias. Cualquier taquicardia se aborda con dos preguntas: está estable o inestable, y cómo es el QRS, estrecho o ancho, regular o irregular. Con eso vas a poder resolver la fibrilación auricular, la taquicardia supraventricular, el Wolff Parkinson White y la taquicardia ventricular.' },
          { v: { k: 'case', t: 'Palpitaciones de 1 día', p: { name: 'Lucía', age: 71, sex: 'M', skin: '#E2B08A', hair: '#B0B0B0', gown: '#F2A0B8' }, text: 'Hipertensa y diabética. Palpitaciones desde ayer, sin dolor ni disnea. Pulso irregular.', vit: { FC: '132', PA: '128/80', SpO2: '96%' } },
            say: 'Lucía tiene setenta y un años, es hipertensa y diabética. Desde ayer siente palpitaciones, sin dolor ni falta de aire. Su pulso es irregular a ciento treinta y dos y la presión de ciento veintiocho sobre ochenta.' },
          { v: { k: 'flow', t: 'Abordaje', steps: ['¿Inestable? (hipotensión, alteración mental, dolor, IC)', 'Sí: cardioversión eléctrica sincronizada', 'No: ECG de 12 derivaciones', 'QRS estrecho o ancho (120 ms)', 'Regular o irregular'] },
            say: 'Primero: está inestable por la taquicardia, con hipotensión, alteración mental, dolor isquémico o falla cardiaca aguda? Entonces cardioversión eléctrica sincronizada. Si está estable, toma un electrocardiograma de doce derivaciones y mira dos cosas: si el QRS es estrecho o ancho, con corte en ciento veinte milisegundos, y si el ritmo es regular o irregular.' },
          { v: { k: 'vs', a: 'QRS estrecho', b: 'QRS ancho', rows: [['Regular', 'Sinusal, TSV, flutter 2:1', 'TV (asúmela), TSV con aberrancia'], ['Irregular', 'FA, flutter variable, TAM', 'FA preexcitada (WPW), torsades']] },
            say: 'Estrecho y regular: taquicardia sinusal, supraventricular o flutter dos a uno. Estrecho e irregular: fibrilación auricular, flutter con bloqueo variable o taquicardia auricular multifocal. Ancho y regular: asume taquicardia ventricular. Ancho e irregular: fibrilación auricular preexcitada o torsades de pointes.' }
        ] },
        { ch: 'Fibrilación auricular', sc: [
          { v: { k: 'list', t: 'Fibrilación auricular', items: ['RR irregularmente irregular, sin P', 'Causas: HTA, cardiopatía, alcohol, apnea', 'Siempre pide TSH', 'Paroxística, persistente o permanente'] },
            say: 'La fibrilación auricular es la arritmia sostenida más común: RR irregularmente irregular y sin ondas P. La causan la hipertensión, la cardiopatía, el alcohol, la apnea del sueño y el hipertiroidismo, así que siempre se pide TSH. Puede ser paroxística, persistente o permanente.' },
          { v: { k: 'list', t: 'Control de frecuencia: meta menor de 110', items: ['Betabloqueador o diltiazem o verapamilo', 'FEVI reducida: BB, digoxina o amiodarona', 'Evita verapamilo o diltiazem en FEVI reducida'] },
            say: 'La frecuencia se controla con meta menor de ciento diez en reposo: betabloqueador, diltiazem o verapamilo. Si la fracción de expulsión es reducida, betabloqueador, digoxina o amiodarona, y nunca verapamilo ni diltiazem.' },
          { v: { k: 'list', t: 'CHA2DS2-VASc', items: ['C: insuficiencia cardiaca (1)', 'H: hipertensión (1)', 'A2: edad 75 o más (2)', 'D: diabetes (1) · S2: EVC o AIT (2)', 'V: vascular (1) · A: 65 a 74 (1) · Sc: mujer (1)'] },
            say: 'La anticoagulación se decide con CHA dos DS dos VASc: insuficiencia cardiaca, hipertensión, edad de setenta y cinco o más que vale dos, diabetes, evento vascular cerebral previo que vale dos, enfermedad vascular, edad de sesenta y cinco a setenta y cuatro, y sexo femenino. Se anticoagula con dos o más en hombres o tres o más en mujeres.' },
          { v: { k: 'vs', a: 'Anticoagulante', b: 'Cuándo', rows: [['ACOD: apixabán, rivaroxabán', 'De elección', 'FA no valvular'], ['Warfarina (INR 2 a 3)', 'Estenosis mitral moderada a grave', 'Válvula mecánica']] },
            say: 'Los anticoagulantes orales directos, como apixabán y rivaroxabán, son de elección. La warfarina con INR de dos a tres se reserva para la estenosis mitral moderada a grave y las válvulas mecánicas.' },
          { v: { k: 'flow', t: 'Control del ritmo', steps: ['Menos de 48 h: cardioversión', '48 h o más: 3 semanas de anticoagulación antes', 'O eco transesofágico sin trombo', '4 semanas de anticoagulación después', 'Ablación en sintomáticos'] },
            say: 'Si se busca el ritmo: con menos de cuarenta y ocho horas se puede cardiovertir. Con cuarenta y ocho o más, o si no se sabe, tres semanas de anticoagulación antes o un ecocardiograma transesofágico sin trombo, y cuatro semanas después. La ablación de venas pulmonares es opción en sintomáticos.' },
          { v: { k: 'quiz', q: 'Lucía: 71 años, HTA, DM. ¿CHA2DS2-VASc y anticoagulas?', opts: ['2 puntos: no', '4 puntos: sí, con apixabán', '3 puntos: aspirina'], a: 1 },
            say: 'Pausa. Lucía tiene setenta y un años, hipertensión y diabetes. ¿Cuál es su puntaje y la anticoagulas?',
            exp: 'Cuatro puntos: hipertensión uno, diabetes uno, edad de sesenta y cinco a setenta y cuatro uno, y mujer uno. Se anticoagula con un anticoagulante oral directo como apixabán. La aspirina no sirve para prevenir embolias en la fibrilación auricular.' }
        ] },
        { ch: 'Flutter, TSV y WPW', sc: [
          { v: { k: 'list', t: 'Flutter auricular', items: ['Dientes de sierra en DII, DIII, aVF', 'Aurícula a 300, ventrículo a 150 (2:1)', 'Se anticoagula como la FA', 'Curación: ablación del istmo'] },
            say: 'El flutter muestra ondas en dientes de sierra en las derivaciones inferiores, con la aurícula a trescientos y el ventrículo casi siempre a ciento cincuenta por conducción dos a uno. Se anticoagula igual que la fibrilación y se cura con ablación del istmo cavotricuspídeo.' },
          { v: { k: 'flow', t: 'TSV por reentrada nodal', steps: ['Mujer joven, regular, 150 a 250', 'Maniobra de Valsalva modificada', 'Adenosina 6 mg en bolo rápido', 'Luego 12 mg', 'Prevención o curación: ablación'] },
            say: 'La taquicardia por reentrada nodal es la supraventricular más común: mujer joven, regular, de ciento cincuenta a doscientos cincuenta, con la P escondida. Primero maniobra de Valsalva modificada; si no cede, adenosina seis miligramos en bolo rápido con lavado, luego doce. Se previene o se cura con ablación.' },
          { v: { k: 'vs', a: 'WPW en sinusal', b: 'FA preexcitada', rows: [['ECG', 'PR corto, onda delta', 'Irregular, QRS ancho y cambiante'], ['Riesgo', '—', 'FV'], ['Tratamiento', 'Ablación de la vía', 'Procainamida o cardioversión'], ['Prohibido', '—', 'Adenosina, BB, verapamilo, digoxina']] },
            say: 'El Wolff Parkinson White tiene una vía accesoria: PR corto, onda delta y QRS algo ancho. Si hace fibrilación auricular, los impulsos bajan por la vía sin freno: QRS ancho, irregular y cambiante, con riesgo de fibrilación ventricular. Se trata con procainamida o cardioversión, y están prohibidos adenosina, betabloqueadores, verapamilo y digoxina, porque al frenar el nodo empujan todo por la vía accesoria.' },
          { v: { k: 'quiz', q: 'Joven con taquicardia irregular de QRS ancho a 240 y onda delta en un ECG previo. ¿Qué das?', opts: ['Adenosina', 'Procainamida o cardioversión', 'Verapamilo'], a: 1 },
            say: 'Pausa. Un joven con taquicardia irregular de QRS ancho a doscientos cuarenta, y en un electrocardiograma previo tenía onda delta. ¿Qué das?',
            exp: 'Procainamida o cardioversión eléctrica. Es fibrilación auricular preexcitada. Adenosina, verapamilo, betabloqueadores o digoxina bloquean el nodo y dejan pasar todo por la vía accesoria: puede caer en fibrilación ventricular.' }
        ] },
        { ch: 'QRS ancho: taquicardia ventricular', sc: [
          { v: { k: 'list', t: 'Asume TV si', items: ['Cardiopatía o infarto previo', 'Disociación AV', 'Latidos de captura o de fusión', 'Concordancia en precordiales', 'QRS muy ancho, eje extremo'] },
            say: 'Ante una taquicardia regular de QRS ancho, asume taquicardia ventricular, sobre todo si hay cardiopatía o infarto previo. Lo confirman la disociación auriculoventricular, los latidos de captura o de fusión, la concordancia en precordiales y un QRS muy ancho con eje extremo.' },
          { v: { k: 'vs', a: 'Situación', b: 'Tratamiento', rows: [['TV con pulso inestable', 'Cardioversión sincronizada', '—'], ['TV con pulso estable', 'Amiodarona 150 mg IV en 10 min', 'O procainamida'], ['TV sin pulso o FV', 'Desfibrilación, RCP, epinefrina', 'Amiodarona 300 mg tras el 3er choque'], ['Torsades (QT largo)', 'Sulfato de magnesio 2 g IV', 'Corregir K; suspender lo que alarga el QT']] },
            say: 'Con pulso e inestable, cardioversión sincronizada. Con pulso y estable, amiodarona ciento cincuenta miligramos en diez minutos, o procainamida. Sin pulso o en fibrilación ventricular, desfibrilación no sincronizada, reanimación, epinefrina y amiodarona trescientos tras el tercer choque. Y la torsades de pointes, una taquicardia polimorfa con QT largo, se trata con sulfato de magnesio dos gramos, corrigiendo el potasio y suspendiendo macrólidos, quinolonas, haloperidol, ondansetrón y metadona.' },
          { v: { k: 'tip', kind: 'trap', t: 'Taquicardia de QRS ancho estable: NO des verapamilo. Si es TV, puede causar colapso.' },
            say: 'Trampa: dar verapamilo a una taquicardia de QRS ancho porque el paciente está estable. Si es ventricular, puede causar colapso y paro. Ante la duda, trátala como ventricular.' }
        ] },
        { ch: 'Cierre del caso', sc: [
          { v: { k: 'list', t: 'Lucía: final del caso', items: ['ECG: FA a 132, sin preexcitación', 'Metoprolol: FC 92', 'TSH normal; eco con FEVI 58%', 'CHA2DS2-VASc 4: apixabán', 'Más de 24 h: sin cardioversión inmediata'] },
            say: 'El electrocardiograma de Lucía muestra fibrilación auricular a ciento treinta y dos. Con metoprolol baja a noventa y dos. Su TSH es normal y su fracción de expulsión de cincuenta y ocho por ciento. Con CHA dos DS dos VASc de cuatro inicia apixabán. Como lleva más de veinticuatro horas y está controlada, se decide control de frecuencia, y si después se busca el ritmo, será tras tres semanas de anticoagulación.' },
          { v: { k: 'tip', kind: 'pearl', t: 'Cardioversión de urgencia en inestable: sincronizada en FA, flutter, TSV y TV con pulso. Desfibrilación (no sincronizada) en FV y TV sin pulso.' },
            say: 'Perla: la cardioversión se sincroniza con el QRS en fibrilación, flutter, supraventricular y ventricular con pulso. En fibrilación ventricular y ventricular sin pulso se desfibrila sin sincronizar.' },
          { v: { k: 'mnemo', t: 'Inestable → electricidad · Estable → ancho o estrecho, regular o irregular', d: 'FA: frecuencia + CHA2DS2-VASc. TSV: vagal → adenosina. WPW con FA: procainamida. TV estable: amiodarona. Torsades: magnesio.' },
            say: 'Llévate esto: inestable, electricidad; estable, mira el QRS. Fibrilación, frecuencia y anticoagulación; supraventricular, vagal y adenosina; preexcitada, procainamida; ventricular, amiodarona; torsades, magnesio. Ahora mueve el simulador de ECG de taquicardias en el taller.' }
        ] }
      ],
      sections: [
        { h: 'Abordaje inicial', html: `
<ol>
<li>¿Inestable por la taquicardia? (hipotensión, alteración mental, choque, dolor isquémico, IC aguda; FC casi siempre &gt;150) → <b>cardioversión eléctrica sincronizada</b>.</li>
<li>Estable: ECG de 12 derivaciones. <b>QRS estrecho o ancho</b> (≥120 ms) y <b>regular o irregular</b>.</li>
<li>Descartar causas: hipoxia, fiebre, hipovolemia, dolor, tirotoxicosis, anemia, fármacos, electrolitos.</li>
</ol>
<div class="tablewrap"><table class="mini">
<tr><th></th><th>Regular</th><th>Irregular</th></tr>
<tr><td><b>Estrecho</b></td><td>Taquicardia sinusal, TSV (reentrada nodal, AVRT), flutter 2:1, taquicardia auricular</td><td><b>FA</b>, flutter con bloqueo variable, taquicardia auricular multifocal (EPOC)</td></tr>
<tr><td><b>Ancho</b></td><td><b>TV</b> (asúmela), TSV con aberrancia</td><td>FA con preexcitación (WPW) o con bloqueo de rama, TV polimórfica/torsades</td></tr>
</table></div>` },
        { h: 'Fibrilación auricular', html: `
<ul>
<li>La arritmia sostenida más común. Ondas f, <b>RR irregularmente irregular</b>, sin P. Causas: HTA, cardiopatía (valvular, isquémica, IC), <b>hipertiroidismo</b> (pide TSH), alcohol (“corazón de fin de semana”), apnea, EPOC, cirugía, TEP. Tipos: paroxística (&lt;7 d), persistente (&gt;7 d), permanente.</li>
<li><b>Frecuencia</b> (meta &lt;110 en reposo): betabloqueador o diltiazem/verapamilo; <b>digoxina o amiodarona si hay IC con FEVI reducida</b> o hipotensión (evita calcioantagonistas no DHP en FEVI reducida).</li>
<li><b>Anticoagulación</b> según <b>CHA₂DS₂-VASc</b> (IC, HTA, edad ≥75 [2], DM, EVC/AIT [2], enfermedad vascular, edad 65–74, sexo femenino): ≥2 hombres / ≥3 mujeres → anticoagular; 1 (hombre) → considerar. <b>DOAC</b> (apixabán, rivaroxabán, dabigatrán, edoxabán) de elección; <b>warfarina</b> (INR 2–3) en <b>estenosis mitral moderada-grave o válvula mecánica</b>. HAS-BLED estima el sangrado; no contraindica.</li>
<li><b>Ritmo</b>: cardioversión (eléctrica o farmacológica) si &lt;48 h; si ≥48 h o tiempo desconocido → <b>3 semanas de anticoagulación antes</b> (o eco transesofágico sin trombo) y <b>4 semanas después</b>. Antiarrítmicos: flecainida/propafenona (corazón sano), amiodarona (cardiopatía estructural/IC), sotalol, dronedarona. <b>Ablación</b> de venas pulmonares en sintomáticos; mejora pronóstico en IC.</li>
<li>Inestable → cardioversión sincronizada (120–200 J bifásico) + heparina.</li>
</ul>` },
        { h: 'Flutter y taquicardias supraventriculares', html: `
<ul>
<li><b>Flutter</b>: ondas F en “dientes de sierra” (DII, DIII, aVF), auricular ~300, ventricular típicamente <b>150 (2:1)</b>. Se anticoagula igual que la FA. Curativo: <b>ablación del istmo cavotricuspídeo</b>.</li>
<li><b>Reentrada nodal (TRNAV)</b>: la TSV más común; mujer joven, regular, 150–250, P escondida, “signo de la rana” en el cuello. <b>Maniobras vagales</b> (Valsalva modificada) → <b>adenosina 6 mg, luego 12 mg</b> en bolo rápido con lavado → BB o calcioantagonista. Prevención o curación: ablación.</li>
<li><b>WPW</b>: vía accesoria (haz de Kent): <b>PR corto, onda delta, QRS ancho</b>. Taquicardia ortodrómica (QRS estrecho) se trata como TSV; <b>FA preexcitada</b> → <b>procainamida o cardioversión</b>, nunca bloqueadores del nodo. Curación: ablación.</li>
<li><b>Taquicardia auricular multifocal</b>: ≥3 morfologías de P; EPOC, hipoxemia, teofilina → tratar la causa, Mg, verapamilo (evita BB en broncoespasmo).</li>
</ul>` },
        { h: 'Taquicardias de QRS ancho', html: `
<ul>
<li>Asume <b>TV</b> (sobre todo con cardiopatía o infarto previo). Datos de TV: disociación AV, latidos de captura o de fusión, concordancia en precordiales, QRS muy ancho, eje extremo.</li>
<li>TV con pulso <b>inestable</b> → cardioversión sincronizada. <b>Estable</b> → <b>amiodarona</b> 150 mg IV en 10 min (o procainamida). Sin pulso → <b>desfibrilación</b>, RCP, epinefrina; amiodarona 300 mg tras el 3er choque.</li>
<li><b>Torsades de pointes</b> (TV polimórfica con <b>QT largo</b>): <b>sulfato de magnesio 2 g IV</b>, corregir K, suspender fármacos que alargan el QT (macrólidos, quinolonas, haloperidol, ondansetrón, antiarrítmicos IA/III, metadona); marcapasos o isoproterenol si es dependiente de pausas.</li>
<li><b>FV</b>: desfibrilación inmediata (no sincronizada).</li>
<li>Prevención de muerte súbita: <b>DAI</b> tras paro por TV/FV sin causa reversible o FEVI ≤35 %.</li>
</ul>` },
        { h: 'Antiarrítmicos (Vaughan Williams)', html: `
<div class="tablewrap"><table class="mini">
<tr><th>Clase</th><th>Mecanismo</th><th>Ejemplos</th><th>Pistas</th></tr>
<tr><td><b>I</b></td><td>Bloquean canales de Na</td><td>IA procainamida · IB lidocaína · IC flecainida, propafenona</td><td>IC: no en cardiopatía estructural (CAST)</td></tr>
<tr><td><b>II</b></td><td>Betabloqueadores</td><td>Metoprolol, esmolol</td><td>Control de frecuencia</td></tr>
<tr><td><b>III</b></td><td>Bloquean canales de K (alargan QT)</td><td>Amiodarona, sotalol, dofetilida, ibutilida</td><td>Amiodarona: tiroides, pulmón, hígado, piel azulada, córnea</td></tr>
<tr><td><b>IV</b></td><td>Calcioantagonistas no DHP</td><td>Verapamilo, diltiazem</td><td>No en FEVI reducida ni WPW con FA</td></tr>
<tr><td>Otros</td><td>—</td><td>Adenosina, digoxina, magnesio</td><td>Digoxina: náusea, visión amarilla, TAV con bloqueo</td></tr>
</table></div>` },
        { h: 'Cómo lo preguntan en el examen', html: `
<ul>
<li>Taquicardia regular estrecha a 180 en mujer joven, estable → <b>vagales → adenosina</b>.</li>
<li>FA rápida con PA 70/40 → <b>cardioversión sincronizada</b>.</li>
<li>FA estable de 3 días → control de frecuencia + anticoagulación 3 semanas antes de cardiovertir (o ETE).</li>
<li>FA en estenosis mitral → <b>warfarina</b>.</li>
<li>FA irregular de QRS ancho a 250 en joven → WPW → <b>procainamida</b>.</li>
<li>TV polimórfica con QT largo → <b>magnesio</b>.</li>
</ul>` }
      ],
      mnemo: { t: 'CHA₂DS₂-VASc', d: 'C: IC · H: HTA · A₂: edad ≥75 (2) · D: DM · S₂: EVC/AIT (2) · V: enfermedad vascular · A: 65–74 · Sc: sexo femenino. Anticoagula con ≥2 (hombre) o ≥3 (mujer).' },
      pearl: 'Pide TSH en toda FA nueva: el hipertiroidismo es causa reversible y el betabloqueador controla ambos.',
      trap: 'En FA con WPW no bloquees el nodo AV (adenosina, BB, calcioantagonistas, digoxina): puedes desencadenar FV. Procainamida o cardioversión.',
      guide: [
        'ESC 2024 de FA: CHA₂DS₂-VA (sin el punto del sexo femenino) para decidir anticoagulación; ≥2 → anticoagular. Tu examen puede usar la versión clásica con sexo.',
        'AHA 2020: la amiodarona en paro va 300 mg y luego 150 mg; la lidocaína es alternativa.'
      ],
      refs: [
        'Van Gelder IC, et al. 2024 ESC Guidelines for the management of atrial fibrillation. Eur Heart J 2024.',
        'Brugada J, et al. 2019 ESC Guidelines for the management of patients with supraventricular tachycardia. Eur Heart J 2020.',
        'Panchal AR, et al. 2020 AHA Guidelines: Adult advanced life support. Circulation 2020.',
        'Zeppenfeld K, et al. 2022 ESC Guidelines for ventricular arrhythmias and prevention of sudden cardiac death. Eur Heart J 2022.'
      ]
    }
  },

  guias: {
    taqui: { src: SRC,
      puntos: [
        'FA: la arritmia sostenida más común; focos ectópicos en venas pulmonares; ondas f y RR irregularmente irregular; pide TSH y eco.',
        'Agudo: control de frecuencia con BB o calcioantagonista; cardioversión si está inestable. Crónico: antiarrítmicos IC (corazón sano), amiodarona (IC o HVI), clase III (coronaria).',
        'Cardioversión de FA ≥48 h: anticoagular 3 semanas antes y 4 después, o ETE para descartar trombo.',
        'Taquicardia auricular multifocal: ≥3 morfologías de P (EPOC); no BB en enfermedad pulmonar.',
        'Torsades: QT largo; magnesio IV, isoproterenol, lidocaína.'
      ],
      ojo: ['En el control crónico de la FA, la <b>ablación</b> ya no es solo “ablate and pace”: el aislamiento de venas pulmonares es opción de primera línea en pacientes seleccionados (ESC 2024).'],
      cards: [['Ablación de FA', 'Aislamiento de venas pulmonares con catéter']] }
  },

  cards: [
    ['Taquicardia inestable', 'Cardioversión eléctrica sincronizada'],
    ['TV sin pulso o FV', 'Desfibrilación (no sincronizada) y RCP'],
    ['TSV estable: primer paso', 'Maniobras vagales'],
    ['Adenosina en TSV', '6 mg en bolo rápido, luego 12 mg'],
    ['TSV más común', 'Taquicardia por reentrada nodal'],
    ['FA en ECG', 'Sin P, ondas f, RR irregularmente irregular'],
    ['Flutter típico', 'Dientes de sierra en DII, DIII, aVF; FC ventricular ~150'],
    ['CHA₂DS₂-VASc: qué vale 2', 'Edad ≥75 y EVC/AIT previo'],
    ['FA: anticoagulante de elección', 'DOAC (salvo estenosis mitral moderada-grave o válvula mecánica → warfarina)'],
    ['FA ≥48 h: antes de cardiovertir', 'Anticoagular 3 semanas (o ETE sin trombo) y 4 semanas después'],
    ['FA con FEVI reducida: control de frecuencia', 'Betabloqueador, digoxina o amiodarona (no diltiazem/verapamilo)'],
    ['WPW en ECG', 'PR corto, onda delta, QRS ancho'],
    ['FA preexcitada (WPW)', 'Procainamida o cardioversión; nunca bloqueadores del nodo'],
    ['TV estable', 'Amiodarona 150 mg IV'],
    ['Torsades de pointes', 'Sulfato de magnesio 2 g IV'],
    ['Taquicardia auricular multifocal', '≥3 morfologías de P; EPOC'],
    ['Efectos de la amiodarona', 'Hipo/hipertiroidismo, fibrosis pulmonar, hepatitis, piel azul-gris, depósitos corneales']
  ],

  questions: [
    q({ id: 'taqui-01', dif: 1, stem: 'Mujer de 28 años con palpitaciones de inicio súbito. FC 190 regular, QRS estrecho, PA 118/76. ¿Primer paso?', opts: ['Adenosina 12 mg', 'Maniobras vagales', 'Cardioversión eléctrica', 'Amiodarona', 'Digoxina'], ans: 1,
      exp: 'TSV estable: primero maniobras vagales (Valsalva modificada); si fallan, adenosina 6 mg y luego 12 mg.', why: ['Primero vagales y la dosis inicial es 6 mg.', '', 'Está estable.', 'No es de primera línea en TSV.', 'No es de primera línea.'], ref: 'ESC 2019 TSV' }),
    q({ id: 'taqui-02', dif: 2, stem: 'Paciente con FA de respuesta rápida (170 lpm), PA 72/40 y confusión. ¿Conducta?', opts: ['Diltiazem IV', 'Cardioversión eléctrica sincronizada', 'Anticoagular 3 semanas y luego cardiovertir', 'Digoxina oral', 'Adenosina'], ans: 1,
      exp: 'Taquiarritmia con inestabilidad hemodinámica: cardioversión sincronizada inmediata (con heparina), sin esperar anticoagulación.', why: ['Hipotensión: puede empeorar.', '', 'Está inestable: no se espera.', 'Lento y no resuelve la inestabilidad.', 'No sirve en FA.'], ref: 'ESC 2024 FA' }),
    q({ id: 'taqui-03', dif: 2, stem: 'Hombre de 70 años con HTA y DM, FA permanente, sin otras enfermedades. ¿CHA₂DS₂-VASc y conducta?', opts: ['1: aspirina', '3: anticoagular con DOAC', '2: nada', '4: warfarina obligatoria', '0: nada'], ans: 1,
      exp: 'Edad 65–74 (1) + HTA (1) + DM (1) = 3: anticoagulación oral, de preferencia DOAC.', why: ['Mal calculado; la aspirina no se recomienda para FA.', '', 'Mal calculado.', 'Mal calculado y el DOAC es preferido.', 'Mal calculado.'], ref: 'ESC 2024 FA' }),
    q({ id: 'taqui-04', dif: 2, stem: 'Mujer con estenosis mitral reumática moderada que desarrolla FA. ¿Qué anticoagulante?', opts: ['Apixabán', 'Warfarina (INR 2–3)', 'Aspirina', 'Rivaroxabán', 'Clopidogrel'], ans: 1,
      exp: 'En FA con estenosis mitral moderada-grave o válvula mecánica, los DOAC no están indicados: warfarina.', why: ['No indicado en EM moderada-grave.', '', 'Insuficiente.', 'No indicado.', 'Insuficiente.'], ref: 'ESC 2024 FA' }),
    q({ id: 'taqui-05', dif: 2, stem: 'Paciente estable con FA de 4 días de evolución, no anticoagulado, en quien se busca ritmo sinusal. ¿Qué haces?', opts: ['Cardioversión inmediata', 'Anticoagular 3 semanas antes (o ETE sin trombo) y 4 semanas después', 'Solo aspirina', 'Cardioversión sin anticoagular', 'Ablación inmediata'], ans: 1,
      exp: 'FA ≥48 h: riesgo de trombo auricular; anticoagular 3 semanas antes o descartar trombo con ETE, y 4 semanas después de la cardioversión.', why: ['Riesgo de embolia.', '', 'Insuficiente.', 'Riesgo de embolia.', 'No es lo inicial.'], ref: 'ESC 2024 FA' }),
    q({ id: 'taqui-06', dif: 2, stem: 'Paciente con FA rápida y FEVI de 25 %, PA 104/68. ¿Qué evitas para controlar la frecuencia?', opts: ['Metoprolol', 'Digoxina', 'Diltiazem', 'Amiodarona', 'Bisoprolol'], ans: 2,
      exp: 'El diltiazem y el verapamilo son inotrópicos negativos y descompensan la IC con FEVI reducida.', why: ['Puede usarse con cuidado.', 'Útil en FEVI reducida.', '', 'Útil en FEVI reducida.', 'Puede usarse.'], ref: 'ESC 2024 FA' }),
    q({ id: 'taqui-07', dif: 3, stem: 'Joven de 22 años con palpitaciones. ECG: taquicardia irregular a 260 lpm con QRS anchos de morfología variable. ECG previo: PR corto y onda delta. PA 110/70. ¿Tratamiento?', opts: ['Adenosina', 'Verapamilo', 'Procainamida IV', 'Digoxina', 'Metoprolol'], ans: 2,
      exp: 'FA preexcitada en WPW: bloquear el nodo favorece la conducción por la vía accesoria y puede causar FV. Procainamida (o cardioversión si se inestabiliza); después ablación.', why: ['Contraindicada.', 'Contraindicado.', '', 'Contraindicada.', 'Contraindicado.'], ref: 'ESC 2019 TSV' }),
    q({ id: 'taqui-08', dif: 2, stem: 'Paciente con infarto previo y taquicardia regular de QRS ancho a 160, PA 120/80, sin síntomas graves. ¿Tratamiento?', opts: ['Adenosina como diagnóstica siempre', 'Amiodarona IV', 'Verapamilo IV', 'Digoxina', 'Observación'], ans: 1,
      exp: 'Taquicardia de QRS ancho en cardiópata = TV hasta demostrar lo contrario. Estable: amiodarona (o procainamida); si se inestabiliza, cardioversión.', why: ['No es segura de rutina en QRS ancho irregular y no trata la TV.', '', 'Puede causar colapso en TV.', 'No es tratamiento.', 'Riesgo de degenerar a FV.'], ref: 'AHA 2020' }),
    q({ id: 'taqui-09', dif: 2, stem: 'Paciente con QTc de 560 ms tras recibir azitromicina y haloperidol, que presenta TV polimórfica que cambia de eje. ¿Tratamiento?', opts: ['Amiodarona', 'Sulfato de magnesio IV', 'Procainamida', 'Sotalol', 'Adenosina'], ans: 1,
      exp: 'Torsades de pointes: magnesio IV, corregir K, suspender los fármacos que alargan el QT. Amiodarona, procainamida y sotalol alargan aún más el QT.', why: ['Alarga el QT.', '', 'Alarga el QT.', 'Alarga el QT.', 'No sirve.'], ref: 'AHA 2020' }),
    q({ id: 'taqui-10', dif: 1, stem: 'Paciente en paro con FV en el monitor. ¿Qué haces primero?', opts: ['Amiodarona', 'Desfibrilación', 'Cardioversión sincronizada', 'Atropina', 'Adenosina'], ans: 1,
      exp: 'FV y TV sin pulso: desfibrilación inmediata y RCP de alta calidad.', why: ['Después del 3er choque.', '', 'La FV no tiene QRS para sincronizar.', 'Es para bradicardia.', 'No sirve.'], ref: 'AHA 2020' }),
    q({ id: 'taqui-11', dif: 2, stem: 'ECG: ondas en dientes de sierra en DII, DIII y aVF y FC ventricular de 150 regular. ¿Diagnóstico y tratamiento definitivo?', opts: ['FA; amiodarona', 'Flutter auricular; ablación del istmo cavotricuspídeo', 'TSV; adenosina', 'TV; amiodarona', 'Taquicardia sinusal; nada'], ans: 1,
      exp: 'Flutter típico con conducción 2:1. Se anticoagula como la FA; la ablación del istmo es curativa.', why: ['Hay ondas F organizadas.', '', 'Las ondas F lo distinguen.', 'QRS estrecho.', 'No hay P sinusales.'], ref: 'ESC 2019 TSV' }),
    q({ id: 'taqui-12', dif: 2, stem: 'Paciente con EPOC exacerbado. ECG: taquicardia irregular con al menos 3 morfologías distintas de P. ¿Diagnóstico?', opts: ['FA', 'Taquicardia auricular multifocal', 'Flutter', 'TV', 'Taquicardia sinusal'], ans: 1,
      exp: 'TAM: ≥3 morfologías de P con PR variable, asociada a EPOC e hipoxemia. Se trata la causa; verapamilo si hace falta.', why: ['No tendría P.', '', 'Tendría ondas F.', 'QRS estrecho.', 'Una sola morfología de P.'], ref: 'ESC 2019 TSV' }),
    q({ id: 'taqui-13', dif: 2, stem: 'Paciente en tratamiento crónico con amiodarona que presenta tos seca, disnea e infiltrados intersticiales. ¿Qué sospechas?', opts: ['Neumonía atípica', 'Toxicidad pulmonar por amiodarona', 'IC', 'TEP', 'Asma'], ans: 1,
      exp: 'La amiodarona causa neumonitis/fibrosis pulmonar; también alteraciones tiroideas, hepatitis, fotosensibilidad y depósitos corneales.', why: ['No hay fiebre ni contexto.', '', 'Posible, pero el fármaco es la pista.', 'No hay datos.', 'No explica los infiltrados.'], ref: 'ESC 2024 FA' }),
    q({ id: 'taqui-14', dif: 2, stem: 'Mujer de 35 años con FA paroxística sintomática, corazón estructuralmente normal. ¿Qué antiarrítmico es de elección para control del ritmo?', opts: ['Flecainida o propafenona', 'Amiodarona', 'Digoxina', 'Verapamilo', 'Dofetilida'], ans: 0,
      exp: 'Los antiarrítmicos IC son de elección en corazón sano (sin isquemia ni IC). Se contraindican con cardiopatía estructural.', why: ['', 'Se reserva para cardiopatía estructural por su toxicidad.', 'Solo frecuencia.', 'Solo frecuencia.', 'No es de primera línea.'], ref: 'ESC 2024 FA' }),
    q({ id: 'taqui-15', dif: 1, stem: '¿Qué estudio pides en todo paciente con FA de reciente diagnóstico para buscar una causa reversible?', opts: ['Dímero D', 'TSH', 'Procalcitonina', 'Ácido úrico', 'Amilasa'], ans: 1,
      exp: 'El hipertiroidismo es causa de FA; también eco, electrolitos y función renal.', why: ['No es rutinario.', '', 'No es rutinaria.', 'No relacionado.', 'No relacionado.'], ref: 'ESC 2024 FA' }),
    q({ id: 'taqui-16', dif: 2, stem: 'Hombre de 45 años que tras una fiesta presenta FA. ¿Cómo se llama este cuadro?', opts: ['Síndrome de Brugada', 'Corazón de fin de semana (holiday heart)', 'Síndrome de Wellens', 'Síndrome de QT largo', 'Takotsubo'], ans: 1,
      exp: 'La ingesta aguda de alcohol desencadena FA en personas sin cardiopatía.', why: ['Es otra canalopatía.', '', 'Es un patrón de isquemia.', 'Es otro trastorno.', 'Es miocardiopatía por estrés.'], ref: 'ESC 2024 FA' }),
    q({ id: 'taqui-17', dif: 2, stem: 'Paciente con TSV que no cede con vagales. Se aplican 6 mg de adenosina sin respuesta. ¿Siguiente paso?', opts: ['Adenosina 12 mg en bolo rápido', 'Cardioversión inmediata', 'Amiodarona', 'Digoxina', 'Lidocaína'], ans: 0,
      exp: 'Se da una segunda dosis de 12 mg (puede repetirse). Si falla: BB o calcioantagonista; cardioversión si se inestabiliza.', why: ['', 'Está estable.', 'No es de primera línea.', 'No es de primera línea.', 'Es para TV.'], ref: 'ESC 2019 TSV' }),
    q({ id: 'taqui-18', dif: 3, stem: 'Paciente con FA y CHA₂DS₂-VASc 4 que no puede recibir anticoagulación por sangrados graves recurrentes. ¿Qué opción reduce el riesgo de EVC?', opts: ['Aspirina con clopidogrel indefinido', 'Cierre percutáneo de la orejuela izquierda', 'Digoxina', 'Ablación del nodo AV', 'Nada'], ans: 1,
      exp: 'La oclusión de la orejuela izquierda es alternativa cuando la anticoagulación está contraindicada a largo plazo.', why: ['También sangra y protege menos.', '', 'No protege de embolia.', 'No reduce embolia.', 'Hay opción.'], ref: 'ESC 2024 FA' }),
    q({ id: 'taqui-19', dif: 2, stem: 'Paciente con taquicardia regular a 150 y ondas que parecen “dientes de sierra”. Se da adenosina y transitoriamente aparecen claramente las ondas F sin QRS. ¿Qué revela la adenosina?', opts: ['Que era TSV y se curó', 'Flutter auricular (la adenosina bloquea el nodo y desenmascara las ondas F)', 'TV', 'FA', 'Taquicardia sinusal'], ans: 1,
      exp: 'La adenosina no termina el flutter (circuito auricular), pero al bloquear el nodo deja ver las ondas F: útil como prueba diagnóstica.', why: ['El flutter no se termina con adenosina.', '', 'La TV no cambia así.', 'Habría ondas f desorganizadas.', 'Se verían P sinusales.'], ref: 'ESC 2019 TSV' }),
    q({ id: 'taqui-20', dif: 2, stem: 'Paciente que sobrevivió a un paro por FV sin causa reversible (no infarto agudo). ¿Prevención secundaria?', opts: ['Amiodarona oral sola', 'Desfibrilador automático implantable', 'Betabloqueador solo', 'Marcapasos', 'Nada'], ans: 1,
      exp: 'El DAI es la prevención secundaria tras TV/FV sin causa reversible.', why: ['Inferior al DAI.', '', 'Insuficiente.', 'No previene la FV.', 'Alto riesgo de recurrencia.'], ref: 'ESC 2022 arritmias ventriculares' })
  ]
};
