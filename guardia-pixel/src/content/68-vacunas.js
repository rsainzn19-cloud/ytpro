// Tema 54 · Vacunación del adulto (Infectología, semana 10)
const T = { topic: 'vacunas', subj: 'infecto' };
const q = (o) => ({ ...T, ...o });
const SRC = { short: 'De tu Guía Infecto', vs: 'tu guía', name: 'Guía Infecto · Ximena Cors Cepeda (EMIS 5)', url: 'https://docs.google.com/document/d/1z8GAmFxqoyJtS21XWHwMlvykDNaoEMW07PgJh45aMwY/edit' };

export default {
  lessons: {
    vacunas: {
      hook: 'Las vacunas vivas (triple viral, varicela, fiebre amarilla, BCG) están contraindicadas en embarazo e inmunosupresión grave. Todos los adultos: influenza cada año y Td cada 10 años (Tdap en cada embarazo). A los 50: zóster recombinante; a los 65 (o antes con riesgo): neumococo.',
      nn: [], yt: 'adult immunization schedule live vaccines contraindications',
      video: [
        { ch: 'Las básicas', sc: [
          { v: { k: 'title', t: 'Vacunas del adulto', s: 'Semana 10 · Infectología' },
            say: 'Semana diez: las vacunas del adulto. Lo más preguntado es cuáles son vivas, a quién no se le ponen, y qué toca a cada edad.' },
          { v: { k: 'list', t: 'Vivas atenuadas', items: ['Triple viral: sarampión, rubéola, parotiditis', 'Varicela', 'Fiebre amarilla', 'BCG', 'Influenza intranasal'] },
            say: 'Las vivas: triple viral, varicela, fiebre amarilla, BCG e influenza intranasal. No se ponen en embarazadas ni en inmunosupresión grave, como VIH con CD4 menor de doscientos.' },
          { v: { k: 'flow', t: 'Calendario por edad', steps: ['Todos: influenza anual', 'Td cada 10 años; Tdap en cada embarazo', '50 años: zóster recombinante, 2 dosis', '65 años: neumococo conjugada', '60 años o más: VSR'] },
            say: 'Todos: influenza cada año, y toxoide tetánico diftérico cada diez años, con Tdap en cada embarazo entre las semanas veintisiete y treinta y seis. A los cincuenta, la vacuna recombinante contra zóster en dos dosis. A los sesenta y cinco, neumococo. Y a los sesenta o más, virus sincitial respiratorio.' }
        ] },
        { ch: 'Situaciones especiales', sc: [
          { v: { k: 'list', t: 'Asplenia', items: ['Neumococo', 'Meningococo ACWY y B', 'Haemophilus influenzae tipo b', '2 semanas antes de una esplenectomía electiva'] },
            say: 'En asplenia: neumococo, meningococo ACWY y B, y Haemophilus tipo b, idealmente dos semanas antes de una esplenectomía programada.' },
          { v: { k: 'tip', kind: 'trap', t: 'La alergia al huevo ya no contraindica la vacuna de influenza.' },
            say: 'Un dato que cambió: la alergia al huevo ya no contraindica la vacuna de influenza.' },
          { v: { k: 'mnemo', t: 'Vivas: no en embarazo ni inmunosupresión', d: 'Triple viral, varicela, fiebre amarilla, BCG, influenza intranasal. Entre dos vivas: el mismo día o 4 semanas después.' },
            say: 'Llévate esto: las vivas no van en embarazo ni en inmunosupresión, y dos vivas se ponen el mismo día o con cuatro semanas de separación.' }
        ] }
      ],
      sections: [
        { h: 'Vacunas vivas y contraindicaciones', html: `
<ul>
<li><b>Vivas atenuadas</b>: triple viral (SRP), varicela, fiebre amarilla, BCG, influenza intranasal, polio oral, tifoidea oral, rotavirus, dengue. La de zóster viva ya no se usa (se prefiere la <b>recombinante</b>, inactivada).</li>
<li><b>Contraindicadas</b> en: <b>embarazo</b>, inmunosupresión grave (VIH con CD4 &lt;200, quimioterapia, prednisona ≥20 mg/día por ≥14 días, biológicos, trasplante). En VIH con CD4 ≥200: SRP y varicela sí.</li>
<li>Dos vivas parenterales: el mismo día o separadas <b>≥4 semanas</b>. Tras inmunoglobulinas o sangre se difieren SRP y varicela.</li>
<li>Contraindicación general: anafilaxia a una dosis previa o a un componente. <b>Alergia al huevo ya no contraindica</b> la de influenza. Enfermedad leve no es contraindicación.</li>
<li>Embarazo: inactivadas sí (<b>Tdap 27–36 semanas</b> en cada embarazo, influenza, COVID, VSR 32–36 semanas); evitar embarazarse 4 semanas tras SRP o varicela.</li>
</ul>` },
        { h: 'Esquema del adulto (CDC 2025)', html: `
<div class="tablewrap"><table class="mini">
<tr><th>Vacuna</th><th>A quién</th></tr>
<tr><td><b>Influenza</b></td><td>Todos ≥6 meses, cada año</td></tr>
<tr><td><b>Td/Tdap</b></td><td>Tdap una vez; refuerzo Td/Tdap cada 10 años; Tdap en cada embarazo; heridas: refuerzo si &gt;5 años (sucias) o &gt;10 (limpias)</td></tr>
<tr><td><b>Zóster recombinante</b> (RZV)</td><td>≥50 años (≥19 si inmunosuprimidos), 2 dosis separadas 2–6 meses, aunque haya tenido zóster</td></tr>
<tr><td><b>Neumococo</b></td><td>≥50 años (ACIP 2024; antes ≥65) y 19–49 con riesgo (DM, EPOC, IC, ERC, tabaco, alcohol, asplenia, inmunosupresión, implante coclear, fístula de LCR): <b>PCV20 o PCV21</b> (o PCV15 → PPSV23)</td></tr>
<tr><td><b>VSR</b></td><td>≥75 años; 60–74 con riesgo (ACIP 2024); embarazo 32–36 semanas</td></tr>
<tr><td><b>VPH</b></td><td>Hasta 26 años (27–45 decisión compartida); 2 dosis si se inicia &lt;15 años, 3 si ≥15</td></tr>
<tr><td><b>Hepatitis B</b></td><td>Todos 19–59 años; ≥60 con riesgo (DM, diálisis, VIH, salud)</td></tr>
<tr><td>Hepatitis A</td><td>Riesgo: hepatopatía crónica, viajeros, HSH, drogas, VIH, sin techo</td></tr>
<tr><td>SRP / varicela</td><td>Sin evidencia de inmunidad (nacidos después de 1957 para SRP); 2 dosis en personal de salud y universitarios</td></tr>
<tr><td>Meningococo ACWY/B</td><td>Asplenia, complemento deficiente, eculizumab, VIH (ACWY), universitarios en dormitorios, viajeros</td></tr>
<tr><td>COVID-19</td><td>Según recomendación vigente (mayores y grupos de riesgo)</td></tr>
</table></div>` },
        { h: 'Situaciones especiales', html: `
<ul>
<li><b>Asplenia</b>: neumococo, meningococo ACWY + B, Hib; 2 semanas antes de esplenectomía electiva o 2 semanas después de una urgente.</li>
<li><b>ERC/diálisis</b>: hepatitis B a dosis alta, neumococo, influenza.</li>
<li><b>Personal de salud</b>: hepatitis B (verificar anti-HBs), influenza, SRP, varicela, Tdap.</li>
<li><b>Herida con riesgo de tétanos</b>: limpia y menor → Td si &gt;10 años; sucia o grave → Td si &gt;5 años; esquema incompleto o desconocido → Td + <b>inmunoglobulina antitetánica</b> en heridas sucias.</li>
<li><b>Postexposición a rabia</b> (no vacunado): lavar la herida, inmunoglobulina antirrábica + vacuna (días 0, 3, 7, 14).</li>
<li>Antes de inmunosupresores/biológicos: actualizar esquema (vivas ≥4 semanas antes).</li>
</ul>` },
        { h: 'Cómo lo preguntan en el examen', html: `
<ul>
<li>Embarazada → <b>Tdap</b> a las 27–36 semanas (y en cada embarazo); nunca SRP ni varicela.</li>
<li>Hombre de 55 años que ya tuvo zóster → <b>zóster recombinante</b> igual.</li>
<li>VIH con CD4 120 → <b>no</b> vacunas vivas.</li>
<li>Esplenectomía programada → neumococo, meningococo y Hib <b>2 semanas antes</b>.</li>
<li>Herida sucia en paciente con última Td hace 7 años → <b>Td</b>.</li>
<li>Alergia al huevo → influenza <b>sí</b>.</li>
</ul>` }
      ],
      mnemo: { t: 'Vivas: SRP, varicela, fiebre amarilla, BCG, influenza nasal', d: 'No en embarazo ni inmunosupresión grave. Todos: influenza anual y Td cada 10 años. 50: zóster recombinante. 50–65: neumococo conjugada.' },
      pearl: 'La vacuna recombinante de zóster se aplica aunque el paciente ya haya tenido herpes zóster y también en inmunosuprimidos (no es viva).',
      trap: 'La alergia al huevo ya no contraindica la vacuna de influenza; lo que la contraindica es la anafilaxia a una dosis previa.',
      guide: [
        'ACIP 2024: neumococo conjugada (PCV20 o PCV21) a todos desde los 50 años; VSR a ≥75 y a 60–74 con riesgo.',
        'Tu guía usa PCV13 + PPSV23 a los ≥65; hoy se usa PCV20/PCV21 en dosis única (o PCV15 seguida de PPSV23) desde los 50.'
      ],
      refs: [
        'CDC. Adult Immunization Schedule by Age, United States, 2025.',
        'Kobayashi M, et al. Use of 21-valent pneumococcal conjugate vaccine among adults: ACIP 2024. MMWR 2024.',
        'Anderson TC, et al. Use of recombinant zoster vaccine in immunocompromised adults: ACIP 2022. MMWR 2022.',
        'Kroger A, et al. General Best Practice Guidelines for Immunization (ACIP). 2024.'
      ]
    }
  },

  guias: {
    vacunas: { src: SRC,
      puntos: [
        'Vivas: esperar 4 semanas entre dos vivas. Influenza: 1 dosis anual (inactivada o recombinante) desde los 19; la viva no en alergia, asplenia o inmunocompromiso.',
        'Tdap/Td cada 10 años; Tdap en el 3er trimestre de cada embarazo.',
        'SRP 1 dosis (2 en estudiantes y personal de salud); no en embarazo ni CD4 &lt;200. Varicela 2 dosis.',
        'Zóster: recombinante (Shingrix) 2 dosis con 2–6 meses de diferencia.',
        'Neumococo &gt;65 años; meningococo ACWY y B en asplenia; VPH hasta 26 años; hepatitis A y B en riesgo.'
      ],
      ojo: ['ACIP 2024: neumococo conjugada desde los <b>50 años</b> (PCV20 o PCV21 en dosis única); hepatitis B universal en 19–59 años.'],
      cards: [['Herida sucia y última Td hace >5 años', 'Refuerzo de Td/Tdap']] }
  },

  cards: [
    ['Vacunas vivas', 'SRP, varicela, fiebre amarilla, BCG, influenza nasal'],
    ['Vivas: contraindicaciones', 'Embarazo, inmunosupresión grave (VIH CD4 <200)'],
    ['Dos vacunas vivas', 'Mismo día o separadas ≥4 semanas'],
    ['Influenza', 'Todos, cada año'],
    ['Td', 'Cada 10 años'],
    ['Tdap en embarazo', 'Semanas 27–36 de cada embarazo'],
    ['Zóster recombinante', '≥50 años, 2 dosis; aunque haya tenido zóster'],
    ['Neumococo (ACIP 2024)', 'PCV20 o PCV21 desde los 50 años o con riesgo'],
    ['VSR', '≥75 años; 60–74 con riesgo'],
    ['VPH', 'Hasta 26 años'],
    ['Asplenia', 'Neumococo, meningococo ACWY y B, Hib'],
    ['Alergia al huevo', 'No contraindica influenza'],
    ['Herida sucia + esquema desconocido', 'Td + inmunoglobulina antitetánica']
  ],

  questions: [
    q({ id: 'vacunas-01', dif: 1, stem: 'Embarazada de 30 semanas. ¿Qué vacuna está indicada?', opts: ['Triple viral', 'Tdap', 'Varicela', 'Fiebre amarilla', 'BCG'], ans: 1,
      exp: 'Tdap en cada embarazo (27–36 semanas) para proteger al recién nacido de tos ferina.', why: ['Viva: contraindicada.', '', 'Viva: contraindicada.', 'Viva: evitar.', 'Viva: contraindicada.'], ref: 'CDC 2025' }),
    q({ id: 'vacunas-02', dif: 2, stem: 'Paciente con VIH y CD4 de 110 que viajará a zona de fiebre amarilla. ¿Conducta?', opts: ['Aplicar la vacuna', 'Contraindicada (viva); evitar el viaje o dar exención', 'Aplicar media dosis', 'Aplicar con esteroide', 'Aplicar triple viral'], ans: 1,
      exp: 'Vacunas vivas contraindicadas con CD4 <200.', why: ['Riesgo de enfermedad vacunal.', '', 'No.', 'No.', 'También viva.'], ref: 'CDC 2025' }),
    q({ id: 'vacunas-03', dif: 2, stem: 'Hombre de 58 años que tuvo herpes zóster hace 2 años. ¿Vacuna recombinante de zóster?', opts: ['No, ya está inmune', 'Sí, 2 dosis', 'Solo si es inmunosuprimido', 'Solo la viva', 'Esperar a los 70'], ans: 1,
      exp: 'Se recomienda a ≥50 años independientemente de episodios previos.', why: ['Puede recurrir.', '', 'No.', 'Ya no se usa.', 'No.'], ref: 'CDC 2025' }),
    q({ id: 'vacunas-04', dif: 2, stem: 'Paciente que será esplenectomizado de forma electiva. ¿Qué vacunas y cuándo?', opts: ['Ninguna', 'Neumococo, meningococo ACWY y B, Hib, al menos 2 semanas antes', 'Solo influenza después', 'BCG', 'Solo hepatitis B'], ans: 1,
      exp: 'Asplenia: riesgo de sepsis por encapsulados.', why: ['Riesgo alto.', '', 'Insuficiente.', 'No.', 'No.'], ref: 'CDC 2025' }),
    q({ id: 'vacunas-05', dif: 1, stem: '¿Cuál de estas vacunas es viva atenuada?', opts: ['Influenza inactivada', 'Triple viral (SRP)', 'Hepatitis B', 'Tdap', 'Zóster recombinante'], ans: 1,
      exp: 'SRP, varicela, fiebre amarilla, BCG son vivas.', why: ['Inactivada.', '', 'Recombinante.', 'Toxoides.', 'Recombinante.'], ref: 'CDC 2025' }),
    q({ id: 'vacunas-06', dif: 2, stem: 'Mujer con alergia al huevo (urticaria). ¿Puede recibir la vacuna de influenza?', opts: ['No, nunca', 'Sí, cualquier vacuna de influenza apropiada para la edad', 'Solo con desensibilización', 'Solo la intranasal', 'Solo en hospital con UCI'], ans: 1,
      exp: 'ACIP: la alergia al huevo no contraindica.', why: ['Incorrecto.', '', 'No.', 'No.', 'No es necesario.'], ref: 'ACIP 2024' }),
    q({ id: 'vacunas-07', dif: 2, stem: 'Hombre de 52 años con DM2 sin vacunas antineumocócicas. ¿Recomendación actual?', opts: ['Esperar a los 65', 'PCV20 o PCV21 en dosis única', 'PPSV23 cada año', 'No necesita', 'BCG'], ans: 1,
      exp: 'ACIP 2024: conjugada a todos desde los 50 años (y antes con riesgo).', why: ['Ya no.', '', 'No.', 'Sí necesita.', 'No.'], ref: 'ACIP 2024' }),
    q({ id: 'vacunas-08', dif: 2, stem: 'Paciente con herida sucia en el pie; su última Td fue hace 7 años y tiene esquema completo. ¿Conducta?', opts: ['Nada', 'Refuerzo de Td/Tdap', 'Inmunoglobulina sola', 'Td + inmunoglobulina', 'Esperar síntomas'], ans: 1,
      exp: 'Herida sucia con último refuerzo >5 años: Td; inmunoglobulina solo si el esquema es incompleto o desconocido.', why: ['Requiere refuerzo.', '', 'No.', 'No necesaria con esquema completo.', 'No.'], ref: 'CDC 2025' }),
    q({ id: 'vacunas-09', dif: 2, stem: 'Paciente con prednisona 40 mg/día desde hace 1 mes. ¿Qué vacuna está contraindicada?', opts: ['Influenza inactivada', 'Varicela', 'Neumococo conjugada', 'Hepatitis B', 'Zóster recombinante'], ans: 1,
      exp: 'Prednisona ≥20 mg/día por ≥14 días es inmunosupresión: no vivas.', why: ['Segura.', '', 'Segura.', 'Segura.', 'Segura (no viva).'], ref: 'ACIP 2024' }),
    q({ id: 'vacunas-10', dif: 2, stem: 'Se aplicó triple viral hoy. ¿Cuándo puede aplicarse la vacuna de varicela?', opts: ['Mañana', 'El mismo día o 4 semanas después', '1 semana después', '6 meses después', 'Nunca juntas'], ans: 1,
      exp: 'Interferencia entre vacunas vivas parenterales.', why: ['No.', '', 'No.', 'Innecesario.', 'Pueden el mismo día.'], ref: 'ACIP 2024' }),
    q({ id: 'vacunas-11', dif: 1, stem: '¿Hasta qué edad se recomienda de rutina la vacuna contra VPH?', opts: ['18', '26 años', '45', '60', 'Solo niñas de 12'], ans: 1,
      exp: '27–45 años por decisión compartida.', why: ['No.', '', 'Compartida.', 'No.', 'Incorrecto.'], ref: 'CDC 2025' }),
    q({ id: 'vacunas-12', dif: 2, stem: 'Mujer de 28 años que planea embarazarse y no tiene inmunidad a rubéola. ¿Qué haces?', opts: ['Vacunar durante el embarazo', 'Aplicar SRP y evitar el embarazo 4 semanas', 'No vacunar', 'Solo inmunoglobulina', 'BCG'], ans: 1,
      exp: 'Vacuna viva antes del embarazo, con anticoncepción 4 semanas.', why: ['Contraindicada en embarazo.', '', 'Riesgo de rubéola congénita.', 'No.', 'No.'], ref: 'CDC 2025' }),
    q({ id: 'vacunas-13', dif: 2, stem: 'Paciente en hemodiálisis sin anti-HBs. ¿Qué vacuna es prioritaria?', opts: ['Fiebre amarilla', 'Hepatitis B (dosis alta) y verificar respuesta', 'BCG', 'Rotavirus', 'Dengue'], ans: 1,
      exp: 'Alto riesgo de VHB en diálisis; menor respuesta: dosis alta y medir anti-HBs.', why: ['No.', '', 'No.', 'No.', 'No.'], ref: 'CDC 2025' }),
    q({ id: 'vacunas-14', dif: 2, stem: 'Mujer de 76 años sin vacuna contra VSR. ¿Recomendación?', opts: ['No indicada', 'Una dosis de vacuna contra VSR', 'Anual', 'Solo si tiene EPOC', 'Solo en embarazo'], ans: 1,
      exp: 'ACIP 2024: ≥75 años una dosis (60–74 si hay riesgo).', why: ['Sí está indicada.', '', 'No es anual.', 'A los 75 no necesita riesgo.', 'También en ancianos.'], ref: 'ACIP 2024' }),
    q({ id: 'vacunas-15', dif: 2, stem: 'Persona mordida por un perro callejero que no se puede observar, sin vacuna antirrábica previa. ¿Conducta?', opts: ['Solo antibiótico', 'Lavar la herida + inmunoglobulina antirrábica + vacuna (días 0, 3, 7, 14)', 'Solo vacuna 1 dosis', 'Observar', 'Solo Td'], ans: 1,
      exp: 'Profilaxis posexposición completa en no vacunados.', why: ['Insuficiente.', '', 'Insuficiente.', 'Peligroso.', 'Insuficiente (aunque también se revisa tétanos).'], ref: 'ACIP' })
  ]
};
