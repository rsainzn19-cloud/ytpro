// Tema 52 · Infecciones asociadas a la atención de la salud (Infectología, semana 8)
const T = { topic: 'iaas', subj: 'infecto' };
const q = (o) => ({ ...T, ...o });
const SRC = { short: 'De tu Guía Infecto', vs: 'tu guía', name: 'Guía Infecto · Ximena Cors Cepeda (EMIS 5)', url: 'https://docs.google.com/document/d/1z8GAmFxqoyJtS21XWHwMlvykDNaoEMW07PgJh45aMwY/edit' };

export default {
  lessons: {
    iaas: {
      hook: 'Las infecciones intrahospitalarias son cinco: del torrente por catéter, IVU por sonda, neumonía nosocomial/asociada a ventilador, del sitio quirúrgico y C. difficile. La mejor medicina es la prevención: higiene de manos y retirar lo que no se necesita.',
      nn: [], yt: 'hospital acquired infections CLABSI CAUTI C difficile',
      video: [
        { ch: 'Las cinco grandes', sc: [
          { v: { k: 'title', t: 'Infecciones intrahospitalarias', s: 'Semana 8 · Infectología' },
            say: 'Semana ocho: las infecciones asociadas a la atención de la salud. Aparecen cuarenta y ocho horas o más después del ingreso, o por un dispositivo o procedimiento.' },
          { v: { k: 'list', t: 'Las cinco grandes', items: ['Bacteriemia por catéter central', 'IVU asociada a sonda', 'Neumonía nosocomial y por ventilador', 'Infección del sitio quirúrgico', 'Clostridioides difficile'] },
            say: 'Son cinco: bacteriemia por catéter central, infección urinaria por sonda, neumonía nosocomial y asociada a ventilador, infección del sitio quirúrgico y diarrea por Clostridioides difficile.' },
          { v: { k: 'case', t: 'Diarrea en el hospital', p: { name: 'Elena', age: 68, sex: 'M', skin: '#E2B08A', hair: '#B0B0B0', gown: '#5EEAD4' }, text: 'Día 6 de ceftriaxona por neumonía. 8 evacuaciones acuosas, fiebre, leucocitos 18,000.', vit: { Leu: '18K', Cr: '1.1' } },
            say: 'Elena lleva seis días con ceftriaxona y empieza con ocho evacuaciones acuosas al día, fiebre y leucocitosis.' },
          { v: { k: 'flow', t: 'C. difficile', steps: ['Prueba de toxina o PCR', 'Suspender el antibiótico si se puede', 'Fidaxomicina o vancomicina oral', 'Fulminante: vancomicina oral alta + metronidazol IV', 'Recurrencias: trasplante fecal'] },
            say: 'Sospecha Clostridioides difficile. Se confirma con pruebas de toxina o PCR, se suspende el antibiótico desencadenante si es posible, y se trata con fidaxomicina o vancomicina oral. El metronidazol ya no es de primera línea.' }
        ] },
        { ch: 'Prevención', sc: [
          { v: { k: 'list', t: 'Prevención', items: ['Higiene de manos', 'Retirar catéteres y sondas que no se necesitan', 'Clorhexidina y técnica estéril', 'Cabecera a 30 a 45 grados', 'Agua y jabón para C. difficile'] },
            say: 'La prevención: higiene de manos, retirar diario lo que no se necesita, técnica estéril con clorhexidina, cabecera elevada en el paciente ventilado, y para Clostridioides difficile, agua y jabón, porque el alcohol no mata las esporas.' },
          { v: { k: 'tip', kind: 'trap', t: 'El alcohol en gel no elimina las esporas de C. difficile: lavado con agua y jabón y aislamiento de contacto.' },
            say: 'La trampa: el gel con alcohol no elimina las esporas de C. difficile. Lavado con agua y jabón y aislamiento de contacto.' },
          { v: { k: 'mnemo', t: 'Bacteriemia por catéter con S. aureus o Candida: retira el catéter', d: 'Y busca endocarditis con eco en S. aureus.' },
            say: 'Llévate esto: si la bacteriemia por catéter es por Staphylococcus aureus o por Candida, el catéter se retira.' }
        ] }
      ],
      sections: [
        { h: 'Bacteriemia asociada a catéter (CLABSI)', html: `
<ul>
<li>Agentes: estafilococo coagulasa negativo, <b><i>S. aureus</i></b>, enterococo, gramnegativos, <b><i>Candida</i></b> (NPT, antibióticos de amplio espectro). Factores: catéter femoral, duración, NPT.</li>
<li>Diagnóstico: ≥2 hemocultivos (uno del catéter y uno periférico); crecimiento ≥2 h antes en el del catéter (tiempo diferencial) o mismo germen.</li>
<li>Tratamiento empírico: <b>vancomicina</b> ± cobertura de gramnegativos (y Pseudomonas en neutropenia/sepsis) ± equinocandina si hay riesgo de <i>Candida</i>.</li>
<li><b>Retirar el catéter</b> si: <i>S. aureus</i>, <i>Candida</i>, Pseudomonas, micobacterias, choque, tromboflebitis supurada, endocarditis o bacteriemia persistente &gt;72 h. <i>S. aureus</i>: eco (transesofágico) y ≥14 días de tratamiento.</li>
<li>Prevención (bundle): higiene de manos, barreras máximas, <b>clorhexidina</b>, evitar la femoral (preferir subclavia), revisar diario la necesidad, retirar pronto.</li>
</ul>` },
        { h: 'IVU asociada a sonda (CAUTI)', html: `
<ul>
<li><i>E. coli</i>, <i>Klebsiella</i>, <i>Proteus</i>, <i>Pseudomonas</i>, enterococo, <i>Candida</i>. Riesgo: duración de la sonda (el factor más importante), mujeres, DM.</li>
<li><b>No</b> se tamiza ni se trata la bacteriuria asintomática (excepto embarazo y antes de cirugía urológica con sangrado de mucosa).</li>
<li>Diagnóstico: síntomas (fiebre, dolor suprapúbico/flanco, delirio sin otra causa) + urocultivo ≥10³ UFC/mL de una muestra de la sonda nueva.</li>
<li>Tratamiento: <b>cambiar o retirar la sonda</b> antes del cultivo; antibiótico según cultivo, 7 días (10–14 si la respuesta es lenta).</li>
<li>Prevención: sondas solo con indicación, técnica aséptica, sistema cerrado, retirar lo antes posible.</li>
</ul>` },
        { h: 'Neumonía nosocomial y sitio quirúrgico', html: `
<ul>
<li><b>NIH</b> (≥48 h de ingreso) y <b>NAV</b> (≥48 h de intubación): <i>Pseudomonas</i>, <i>Acinetobacter</i>, enterobacterias (BLEE), <b>MRSA</b>. Empírico: antipseudomonas (pip-tazo, cefepime o meropenem) ± vancomicina/linezolid según riesgo y prevalencia local; 7 días. Prevención: cabecera 30–45°, ventanas de sedación, pruebas de respiración espontánea, higiene oral, extubación temprana.</li>
<li><b>Sitio quirúrgico</b>: superficial o profunda (≤30 días; ≤90 días con implante). <i>S. aureus</i> (la más común) y gramnegativos en cirugía abdominal. Prevención: <b>profilaxis con cefazolina en los 60 min previos a la incisión</b> (vancomicina si MRSA/alergia), no rasurar (cortar), control de glucosa, normotermia, baño con clorhexidina. Tratamiento: abrir y drenar, antibiótico si hay celulitis o datos sistémicos.</li>
</ul>` },
        { h: 'Clostridioides difficile', html: `
<ul>
<li>Factores: <b>antibióticos</b> (clindamicina, quinolonas, cefalosporinas, en las últimas 12 semanas), edad, hospitalización, IBP.</li>
<li>Clínica: ≥3 evacuaciones acuosas en 24 h, dolor, fiebre, leucocitosis (a veces muy alta). Colitis pseudomembranosa. <b>Fulminante</b>: hipotensión, íleo, megacolon.</li>
<li>Diagnóstico: solo en heces diarreicas; <b>GDH + toxina</b> (EIA); si discordante, PCR. No repetir para “prueba de curación”.</li>
<li>Gravedad: <b>grave</b> = leucocitos ≥15,000 o creatinina &gt;1.5.</li>
<li>Tratamiento: <b>fidaxomicina</b> (preferida, menos recurrencia) o <b>vancomicina oral</b> 10 días; fulminante: vancomicina oral (o rectal si hay íleo) dosis alta + <b>metronidazol IV</b>, cirugía (colectomía) si hay perforación o megacolon. Recurrencias: fidaxomicina, vancomicina en esquema descendente, bezlotoxumab, <b>trasplante de microbiota fecal</b> (≥2 recurrencias).</li>
<li>Control: <b>aislamiento de contacto</b>, <b>agua y jabón</b> (el alcohol no mata las esporas), cloro para superficies, uso racional de antibióticos.</li>
</ul>` },
        { h: 'Riesgos para el personal de salud', html: `
<ul>
<li>Pinchazo con aguja hueca: riesgo de transmisión ~<b>30 % VHB</b> (no vacunado), ~<b>1.8 % VHC</b>, ~<b>0.3 % VIH</b> (“regla de 3”).</li>
<li>Lavar con agua y jabón; reportar; pruebas basales; PEP de VIH en &lt;72 h si aplica; VHB: vacuna ± inmunoglobulina según estado; VHC: vigilancia y tratar si se infecta.</li>
<li>TB: precauciones aéreas (N95); influenza/COVID: vacunación del personal.</li>
</ul>` },
        { h: 'Cómo lo preguntan en el examen', html: `
<ul>
<li>Diarrea tras antibióticos → <b><i>C. difficile</i></b> → fidaxomicina o vancomicina oral.</li>
<li>Bacteriemia por <i>S. aureus</i> con catéter → <b>retirarlo</b> + eco + ≥14 días.</li>
<li>Paciente sondado, afebril, urocultivo positivo → <b>no tratar</b> (bacteriuria asintomática).</li>
<li>Profilaxis quirúrgica → <b>cefazolina en los 60 min previos</b>.</li>
<li>Lavado de manos para <i>C. difficile</i> → <b>agua y jabón</b>.</li>
</ul>` }
      ],
      mnemo: { t: 'Regla de 3 del pinchazo: VHB 30 %, VHC 3 %, VIH 0.3 %', d: 'Aproximaciones clásicas (VHC hoy ~1.8 %). Higiene de manos y retirar dispositivos: la mejor prevención.' },
      pearl: 'Retira o cambia la sonda antes de tomar el urocultivo en una IVU asociada a sonda: el biofilm contamina la muestra.',
      trap: 'El gel con alcohol no elimina las esporas de C. difficile: agua y jabón, y aislamiento de contacto.',
      guide: [
        'IDSA/SHEA 2021: fidaxomicina es la preferida para el primer episodio de C. difficile; el metronidazol solo si no hay alternativas en casos no graves.',
        'Tu guía coloca vancomicina oral o fidaxomicina como primera línea y metronidazol como opción; hoy el metronidazol oral ya no se recomienda.'
      ],
      refs: [
        'Johnson S, et al. Clinical Practice Guideline by IDSA and SHEA: 2021 Focused Update on C. difficile in adults. Clin Infect Dis 2021.',
        'Mermel LA, et al. Clinical practice guidelines for the diagnosis and management of intravascular catheter-related infection: IDSA. Clin Infect Dis 2009.',
        'Hooton TM, et al. Diagnosis, prevention, and treatment of catheter-associated UTI in adults: IDSA. Clin Infect Dis 2010.',
        'Kalil AC, et al. Management of HAP and VAP: IDSA/ATS. Clin Infect Dis 2016.'
      ]
    }
  },

  guias: {
    iaas: { src: SRC,
      puntos: [
        '5 grandes: sitio quirúrgico, neumonía nosocomial, IVU por catéter, torrente sanguíneo, gastrointestinales.',
        'Sitio quirúrgico: E. coli y S. aureus; superficial (30 d) o profunda (30–90 d); profilaxis antibiótica antes de la cirugía.',
        'NIH &gt;48 h de ingreso; NAV &gt;48 h de intubación; Pseudomonas, MRSA, Acinetobacter, Enterobacter.',
        'IVU por catéter: cultivo con síntomas + catéter &gt;48 h; bacteriuria asintomática solo se trata en embarazo, cirugía urológica y trasplante.',
        'C. difficile: antibióticos en las últimas 8 semanas; GDH → toxinas → PCR; fidaxomicina o vancomicina oral; trasplante fecal en recurrencia. Retirar catéter con hongos, hipotensión, MRSA o bacteriemia &gt;72 h.'
      ],
      ojo: ['La profilaxis quirúrgica se da <b>en los 60 minutos previos a la incisión</b> (no 24 h antes, como dice tu guía).'],
      cards: [['Profilaxis quirúrgica', 'Cefazolina en los 60 min previos a la incisión']] }
  },

  cards: [
    ['Definición de nosocomial', '≥48 h después del ingreso'],
    ['Bacteriemia por catéter: cuándo retirarlo', 'S. aureus, Candida, Pseudomonas, choque, bacteriemia >72 h'],
    ['S. aureus en hemocultivo', 'Eco (TE) y ≥14 días de tratamiento'],
    ['Bacteriuria asintomática en sondado', 'No tratar'],
    ['IVU por sonda: antes del cultivo', 'Cambiar o retirar la sonda'],
    ['NAV: empírico', 'Antipseudomonas ± anti-MRSA'],
    ['Prevención de NAV', 'Cabecera 30–45°, despertar diario, extubación temprana'],
    ['Profilaxis quirúrgica', 'Cefazolina ≤60 min antes de la incisión'],
    ['C. difficile: factor de riesgo', 'Antibióticos (clindamicina, quinolonas, cefalosporinas), IBP'],
    ['C. difficile: tratamiento', 'Fidaxomicina o vancomicina oral'],
    ['C. difficile fulminante', 'Vancomicina oral alta + metronidazol IV; colectomía'],
    ['C. difficile recurrente', 'Fidaxomicina, vancomicina descendente, trasplante fecal'],
    ['Esporas de C. difficile', 'Agua y jabón (no alcohol); aislamiento de contacto'],
    ['Riesgo por pinchazo', 'VHB ~30 %, VHC ~1.8 %, VIH ~0.3 %']
  ],

  questions: [
    q({ id: 'iaas-01', dif: 1, stem: 'Paciente hospitalizado con ceftriaxona que presenta diarrea acuosa, fiebre y leucocitos de 17,000. Toxina de C. difficile positiva. ¿Tratamiento?', opts: ['Metronidazol oral como primera opción', 'Fidaxomicina o vancomicina oral', 'Vancomicina IV', 'Loperamida', 'Ciprofloxacino'], ans: 1,
      exp: 'Primer episodio (grave por leucocitos ≥15,000): fidaxomicina o vancomicina oral 10 días.', why: ['Ya no es primera línea.', '', 'No alcanza el colon.', 'Contraindicada.', 'Empeora.'], ref: 'IDSA/SHEA 2021' }),
    q({ id: 'iaas-02', dif: 2, stem: 'Paciente con catéter venoso central y bacteriemia por S. aureus. ¿Conducta?', opts: ['Sellar el catéter con antibiótico', 'Retirar el catéter, antibiótico ≥14 días y ecocardiograma', 'Solo 5 días de antibiótico', 'Cambiar el catéter con guía', 'Observar'], ans: 1,
      exp: 'S. aureus obliga a retirar el catéter y descartar endocarditis.', why: ['No en S. aureus.', '', 'Insuficiente.', 'No.', 'Peligroso.'], ref: 'IDSA 2009' }),
    q({ id: 'iaas-03', dif: 2, stem: 'Paciente con sonda urinaria, afebril, sin síntomas, con urocultivo de 10⁵ UFC/mL de E. coli. ¿Conducta?', opts: ['Antibiótico 7 días', 'No tratar; retirar la sonda si ya no es necesaria', 'Antibiótico profiláctico permanente', 'Cambiar la sonda cada día', 'Irrigación vesical'], ans: 1,
      exp: 'Bacteriuria asintomática: no se trata (salvo embarazo o cirugía urológica).', why: ['Fomenta resistencia.', '', 'No.', 'No.', 'No.'], ref: 'IDSA 2010' }),
    q({ id: 'iaas-04', dif: 2, stem: '¿Cuándo debe administrarse la profilaxis antibiótica en una cirugía limpia?', opts: ['24 h antes', 'En los 60 minutos previos a la incisión', 'Al terminar la cirugía', 'Por 7 días después', 'No se da'], ans: 1,
      exp: 'Niveles tisulares adecuados al momento de la incisión; redosificar si la cirugía es larga.', why: ['Demasiado temprano.', '', 'Tarde.', 'Sin beneficio y con resistencia.', 'Sí se da.'], ref: 'IDSA/ASHP 2013' }),
    q({ id: 'iaas-05', dif: 2, stem: 'Paciente con C. difficile con hipotensión, íleo y colon dilatado. ¿Tratamiento?', opts: ['Fidaxomicina sola', 'Vancomicina oral/rectal en dosis alta + metronidazol IV y valoración quirúrgica', 'Loperamida', 'Solo líquidos', 'Probióticos'], ans: 1,
      exp: 'C. difficile fulminante: vancomicina enteral + metronidazol IV; colectomía si empeora.', why: ['Insuficiente.', '', 'Contraindicada.', 'Insuficiente.', 'No.'], ref: 'IDSA/SHEA 2021' }),
    q({ id: 'iaas-06', dif: 2, stem: 'Paciente con tercera recurrencia de C. difficile. ¿Opción con mejor tasa de curación?', opts: ['Metronidazol', 'Trasplante de microbiota fecal', 'Vancomicina IV', 'Probióticos solos', 'Quinolona'], ans: 1,
      exp: 'El trasplante fecal tiene >80 % de éxito en recurrencias múltiples.', why: ['No.', '', 'No.', 'No.', 'Empeora.'], ref: 'IDSA/SHEA 2021' }),
    q({ id: 'iaas-07', dif: 1, stem: '¿Qué medida de higiene es necesaria al atender a un paciente con C. difficile?', opts: ['Gel con alcohol', 'Lavado con agua y jabón y guantes/bata', 'Mascarilla N95', 'Nada especial', 'Aislamiento inverso'], ans: 1,
      exp: 'Las esporas resisten el alcohol; aislamiento de contacto.', why: ['No elimina esporas.', '', 'Es para aerosoles.', 'No.', 'No.'], ref: 'IDSA/SHEA 2021' }),
    q({ id: 'iaas-08', dif: 2, stem: 'Paciente intubado hace 5 días con fiebre, secreción purulenta e infiltrado nuevo, en un hospital con MRSA frecuente. ¿Esquema?', opts: ['Ceftriaxona', 'Piperacilina-tazobactam + vancomicina', 'Amoxicilina', 'Azitromicina', 'Metronidazol'], ans: 1,
      exp: 'NAV: antipseudomonas + anti-MRSA.', why: ['No cubre Pseudomonas.', '', 'No.', 'No.', 'No.'], ref: 'IDSA/ATS 2016' }),
    q({ id: 'iaas-09', dif: 2, stem: '¿Cuál es el factor de riesgo más importante de IVU asociada a sonda?', opts: ['Sexo masculino', 'Duración de la sonda', 'Edad joven', 'Hipertensión', 'Uso de IBP'], ans: 1,
      exp: 'El riesgo aumenta 3–7 % por día; retirar lo antes posible.', why: ['Es mayor en mujeres.', '', 'No.', 'No.', 'No.'], ref: 'IDSA 2010' }),
    q({ id: 'iaas-10', dif: 2, stem: 'Paciente con nutrición parenteral por catéter central y fiebre; hemocultivos con levaduras. ¿Conducta?', opts: ['Dejar el catéter', 'Retirar el catéter y equinocandina; fondo de ojo y eco', 'Solo fluconazol oral', 'Observar', 'Vancomicina'], ans: 1,
      exp: 'Candidemia: retirar catéter, equinocandina, buscar endoftalmitis y endocarditis.', why: ['No.', '', 'No como inicio.', 'No.', 'No cubre hongos.'], ref: 'IDSA 2016 candidiasis' }),
    q({ id: 'iaas-11', dif: 2, stem: '¿Cuál es el riesgo aproximado de transmisión de VIH tras un pinchazo con aguja hueca de un paciente infectado?', opts: ['30 %', '3 %', '0.3 %', '10 %', '0 %'], ans: 2,
      exp: 'VIH ~0.3 %; VHC ~1.8 %; VHB hasta 30 % sin vacuna.', why: ['Es VHB.', 'Aproximado de VHC.', '', 'No.', 'No es nulo.'], ref: 'CDC' }),
    q({ id: 'iaas-12', dif: 2, stem: '¿Qué medida reduce las bacteriemias asociadas a catéter central?', opts: ['Usar la vía femoral de preferencia', 'Clorhexidina, barreras máximas, evitar la femoral y retirar pronto', 'Cambiar el catéter cada 3 días de rutina', 'Antibiótico profiláctico sistémico', 'Heparina oral'], ans: 1,
      exp: 'Bundle de inserción y mantenimiento.', why: ['Mayor riesgo.', '', 'No se recomienda de rutina.', 'No.', 'No.'], ref: 'IDSA 2009' }),
    q({ id: 'iaas-13', dif: 2, stem: 'Paciente con IVU sintomática asociada a sonda de 3 semanas. ¿Qué haces antes de tomar el urocultivo?', opts: ['Nada', 'Cambiar o retirar la sonda', 'Irrigar con antibiótico', 'Dar antibiótico primero', 'Pinzar la sonda'], ans: 1,
      exp: 'El biofilm de la sonda contamina la muestra y perpetúa la infección.', why: ['Resultado poco confiable.', '', 'No.', 'Altera el cultivo.', 'No.'], ref: 'IDSA 2010' }),
    q({ id: 'iaas-14', dif: 2, stem: 'Paciente con diarrea en el hospital; ¿cuándo NO debes pedir prueba de C. difficile?', opts: ['Con heces líquidas y antibiótico reciente', 'En heces formadas o para “prueba de curación”', 'Con leucocitosis', 'Con fiebre', 'En ancianos'], ans: 1,
      exp: 'Solo heces diarreicas; la PCR puede seguir positiva tras la curación.', why: ['Sí está indicada.', '', 'Sí.', 'Sí.', 'Sí.'], ref: 'IDSA/SHEA 2021' }),
    q({ id: 'iaas-15', dif: 2, stem: 'Paciente operado de colon con fiebre al 5º día y herida con eritema y secreción purulenta. ¿Primer paso?', opts: ['Solo antibiótico oral', 'Abrir y drenar la herida (± antibiótico si hay celulitis o sepsis)', 'Cerrar con más suturas', 'Observar', 'Esteroides'], ans: 1,
      exp: 'La infección superficial del sitio quirúrgico se trata con apertura y drenaje.', why: ['Insuficiente.', '', 'Empeora.', 'No.', 'No.'], ref: 'IDSA 2014 piel y tejidos' })
  ]
};
