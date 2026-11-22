// Tema 50 · Infecciones del SNC (Infectología, semana 6)
const T = { topic: 'snc', subj: 'infecto' };
const q = (o) => ({ ...T, ...o });
const SRC = { short: 'De tu Guía Infecto', vs: 'tu guía', name: 'Guía Infecto · Ximena Cors Cepeda (EMIS 5)', url: 'https://docs.google.com/document/d/1z8GAmFxqoyJtS21XWHwMlvykDNaoEMW07PgJh45aMwY/edit' };

export default {
  lessons: {
    snc: {
      hook: 'Meningitis bacteriana: fiebre, cefalea, rigidez de nuca y alteración mental. No retrases el tratamiento: hemocultivos → dexametasona + antibiótico → TC (si hay indicación) → punción lumbar. Encefalitis con conducta extraña y lóbulo temporal: aciclovir ya.',
      nn: [], yt: 'bacterial meningitis CSF findings empiric treatment HSV encephalitis',
      video: [
        { ch: 'Meningitis', sc: [
          { v: { k: 'title', t: 'Infecciones del SNC', s: 'Semana 6 · Infectología' },
            say: 'Semana seis: las infecciones del sistema nervioso. La meningitis bacteriana es una urgencia: cada hora sin antibiótico aumenta las secuelas y la muerte.' },
          { v: { k: 'case', t: 'Cefalea y nuca rígida', p: { name: 'Sofía', age: 20, sex: 'M', skin: '#E2B08A', hair: '#2A1A12', gown: '#5EEAD4' }, text: 'Universitaria. Fiebre 39.5, cefalea intensa, vómito, rigidez de nuca y petequias en piernas.', vit: { T: '39.5', PA: '96/60' } },
            say: 'Sofía es universitaria. Tiene fiebre, cefalea intensa, vómito, rigidez de nuca y petequias en las piernas. Piensa en meningococo.' },
          { v: { k: 'flow', t: 'Orden de acciones', steps: ['Hemocultivos', 'Dexametasona antes o con el antibiótico', 'Ceftriaxona más vancomicina', 'TC si hay indicación', 'Punción lumbar'] },
            say: 'El orden: hemocultivos, dexametasona antes o junto con la primera dosis de antibiótico, ceftriaxona más vancomicina, y si hay indicación, tomografía antes de la punción. Nunca retrases el antibiótico por la tomografía.' },
          { v: { k: 'vs', a: 'Bacteriana', b: 'Viral', rows: [['Células', 'Miles, neutrófilos', 'Cientos, linfocitos'], ['Glucosa', 'Baja', 'Normal'], ['Proteínas', 'Muy altas', 'Normales o poco altas']] },
            say: 'En el líquido: la bacteriana tiene miles de neutrófilos, glucosa baja y proteínas muy altas. La viral tiene linfocitos, glucosa normal y proteínas casi normales. La tuberculosa y la de hongos tienen linfocitos con glucosa baja.' }
        ] },
        { ch: 'Encefalitis y absceso', sc: [
          { v: { k: 'list', t: 'Encefalitis herpética', items: ['Fiebre más conducta extraña', 'Convulsiones, afasia', 'RM: lóbulo temporal', 'PCR de HSV en LCR', 'Aciclovir IV ya'] },
            say: 'La encefalitis por herpes simple da fiebre con alteración de la conducta, convulsiones y afasia, porque afecta el lóbulo temporal. Se confirma con PCR en el líquido, pero el aciclovir intravenoso se inicia ya, sin esperar.' },
          { v: { k: 'tip', kind: 'trap', t: 'En mayores de 50, inmunosuprimidos y embarazadas agrega ampicilina para cubrir Listeria.' },
            say: 'No olvides: en mayores de cincuenta, inmunosuprimidos, alcohólicos y embarazadas, agrega ampicilina para cubrir Listeria, porque ninguna cefalosporina la cubre.' },
          { v: { k: 'mnemo', t: 'Ceftriaxona + vancomicina ± ampicilina + dexametasona', d: 'Empírico en meningitis bacteriana del adulto; aciclovir si sospechas encefalitis.' },
            say: 'Llévate el esquema: ceftriaxona y vancomicina, ampicilina si hay riesgo de Listeria, y dexametasona. Y aciclovir si hay encefalitis.' }
        ] }
      ],
      sections: [
        { h: 'Meningitis bacteriana', html: `
<ul>
<li>Agentes del adulto: <b><i>S. pneumoniae</i></b> (#1), <b><i>N. meningitidis</i></b> (jóvenes, dormitorios; petequias/púrpura, Waterhouse-Friderichsen), <b><i>Listeria</i></b> (&gt;50 años, inmunosuprimidos, embarazadas, alcohólicos), <i>H. influenzae</i>. Neonatos: <i>S. agalactiae</i>, <i>E. coli</i>, <i>Listeria</i>. Postquirúrgica/derivación: estafilococos, gramnegativos (Pseudomonas).</li>
<li>Clínica: fiebre, cefalea, <b>rigidez de nuca</b>, alteración mental (la tríada completa solo en ~45 %); Kernig y Brudzinski (poco sensibles); fotofobia, convulsiones, déficits focales.</li>
<li><b>TC antes de la PL</b> si: inmunosupresión, enfermedad del SNC previa, convulsión reciente (&lt;1 semana), papiledema, alteración del estado de alerta, déficit focal.</li>
<li>LCR: presión de apertura alta, <b>&gt;1000 leucocitos con PMN</b>, <b>glucosa &lt;40 o LCR/suero &lt;0.4</b>, proteínas &gt;200; Gram, cultivo, panel PCR.</li>
<li><b>Tratamiento empírico</b> (no retrasarlo por la TC; hemocultivos antes):
<ul><li>18–50 años: <b>ceftriaxona + vancomicina</b>.</li><li>&gt;50, inmunosuprimidos, embarazo, alcohol: + <b>ampicilina</b> (Listeria).</li><li>Postquirúrgica: vancomicina + cefepime/ceftazidima/meropenem.</li></ul></li>
<li><b>Dexametasona</b> 0.15 mg/kg c/6 h × 4 días, antes o con la 1ª dosis: reduce sordera y mortalidad en neumococo (suspender si no es neumococo).</li>
<li>Meningococo: <b>aislamiento por gotas</b> 24 h; <b>quimioprofilaxis a contactos cercanos</b> (rifampicina, ciprofloxacino dosis única o ceftriaxona IM).</li>
</ul>` },
        { h: 'LCR por tipo', html: `
<div class="tablewrap"><table class="mini">
<tr><th></th><th>Células</th><th>Glucosa</th><th>Proteínas</th><th>Pista</th></tr>
<tr><td><b>Bacteriana</b></td><td>&gt;1000, PMN</td><td><b>Baja</b></td><td>Muy altas</td><td>Gram/cultivo</td></tr>
<tr><td><b>Viral</b> (enterovirus)</td><td>10–500, linfocitos</td><td><b>Normal</b></td><td>Normales/leve ↑</td><td>PCR; tratamiento de soporte</td></tr>
<tr><td><b>Tuberculosa</b></td><td>100–500, linfocitos</td><td>Baja</td><td>Muy altas</td><td>Base del cráneo, pares craneales, ADA alta, hidrocefalia</td></tr>
<tr><td><b>Fúngica</b> (Cryptococcus)</td><td>Linfocitos</td><td>Baja</td><td>Altas</td><td>VIH, <b>presión de apertura muy alta</b>; antígeno criptocócico</td></tr>
</table></div>
<ul>
<li>Criptococosis: <b>anfotericina B + flucitosina</b> → fluconazol; punciones evacuadoras si la presión es alta.</li>
<li>TB meníngea: RIPE 2 meses + RI 7–10 meses + <b>dexametasona</b>.</li>
</ul>` },
        { h: 'Encefalitis', html: `
<ul>
<li>Inflamación del parénquima: fiebre + <b>alteración mental, conducta, convulsiones, déficits focales</b>.</li>
<li><b>VHS-1</b> (la causa esporádica #1): afecta el <b>lóbulo temporal</b> (afasia, alucinaciones olfatorias, cambios de personalidad); RM con hiperintensidad temporal; EEG con descargas periódicas; <b>PCR de VHS en LCR</b>; LCR linfocítico con eritrocitos.</li>
<li><b>Aciclovir IV 10 mg/kg c/8 h</b> de inmediato ante la sospecha (14–21 días); hidratar (nefrotoxicidad cristalina).</li>
<li>Otras: arbovirus (Nilo occidental, dengue, Zika), VZV, CMV (inmunosuprimidos: ganciclovir/foscarnet), rabia, encefalitis autoinmune (anti-NMDA: mujer joven, psicosis, discinesias, teratoma ovárico).</li>
</ul>` },
        { h: 'Absceso cerebral', html: `
<ul>
<li>Por contigüidad (sinusitis, otitis, mastoiditis, dental: estreptococos <i>milleri</i>, anaerobios), hematógeno (endocarditis, cardiopatía cianógena: múltiples), trauma/neurocirugía (<i>S. aureus</i>).</li>
<li>Clínica: cefalea (la más común), fiebre (solo la mitad), déficit focal, convulsiones, hipertensión intracraneal.</li>
<li>TC/RM con contraste: lesión con <b>realce en anillo</b> (DWI restringe en absceso, a diferencia del tumor necrótico). En VIH: toxoplasma (múltiples) vs linfoma (único, periventricular, VEB en LCR).</li>
<li>Tratamiento: <b>ceftriaxona + metronidazol</b> (+ vancomicina si trauma/cirugía) 6–8 semanas; <b>drenaje</b> si &gt;2.5 cm, efecto de masa o sin respuesta. No PL (riesgo de herniación).</li>
</ul>` },
        { h: 'Cómo lo preguntan en el examen', html: `
<ul>
<li>Fiebre, rigidez de nuca, LCR con PMN y glucosa baja → <b>ceftriaxona + vancomicina + dexametasona</b>.</li>
<li>Mismo cuadro en paciente de 70 años → + <b>ampicilina</b>.</li>
<li>Meningitis con petequias → meningococo → profilaxis a contactos con <b>rifampicina/ciprofloxacino</b>.</li>
<li>Fiebre, confusión y alucinaciones olfatorias; RM temporal → <b>aciclovir</b>.</li>
<li>VIH con cefalea y presión de apertura muy alta → <b>Cryptococcus</b>.</li>
<li>Paciente con papiledema → <b>TC antes de la PL</b>, pero antibiótico antes de la TC.</li>
</ul>` }
      ],
      mnemo: { t: 'Meningitis: cultivos → dexametasona + ceftriaxona + vancomicina (± ampicilina) → TC → PL', d: 'Nunca retrases el antibiótico por la TC. Encefalitis: aciclovir ya. Absceso: realce en anillo, ceftriaxona + metronidazol, drenar si >2.5 cm.' },
      pearl: 'La dexametasona se da antes o con la primera dosis de antibiótico; reduce sordera y muerte en meningitis neumocócica.',
      trap: 'Ninguna cefalosporina cubre Listeria: en mayores de 50 años, inmunosuprimidos, embarazadas y alcohólicos agrega ampicilina.',
      guide: [
        'ESCMID 2016 / IDSA 2004: dexametasona con la 1ª dosis en meningitis bacteriana sospechada del adulto; TC previa solo con indicaciones específicas.',
        'Tu guía pone “dexametasona antes de ABs”; hoy se acepta antes o junto con la primera dosis, nunca horas después.'
      ],
      refs: [
        'van de Beek D, et al. ESCMID guideline: diagnosis and treatment of acute bacterial meningitis. Clin Microbiol Infect 2016.',
        'Tunkel AR, et al. Practice guidelines for the management of bacterial meningitis (IDSA). Clin Infect Dis 2004.',
        'Tunkel AR, et al. The management of encephalitis: IDSA guidelines. Clin Infect Dis 2008.',
        'Brouwer MC, et al. Brain abscess. N Engl J Med 2014.'
      ]
    }
  },

  guias: {
    snc: { src: SRC,
      puntos: [
        'Meningitis: <i>S. pneumoniae</i> en adultos; viral la más común; neonatos y &gt;60 años GBS/Listeria; crónica TB, Cryptococcus.',
        'Clínica: fiebre + cefalea + rigidez nucal; Kernig y Brudzinski.',
        'LCR: bacteriana (&gt;1000 PMN, glucosa &lt;40, proteínas altas), viral (linfocitos, glucosa normal), hongos/TB (linfocitos, glucosa baja, presión alta).',
        'TC antes de la PL si hay alteración mental, papiledema o déficit focal. Vancomicina + ceftriaxona/cefotaxima (+ ampicilina si &lt;1 mes o &gt;50 años); dexametasona.',
        'Encefalitis (HSV-1 temporal): aciclovir empírico. Absceso: realce en anillo; metronidazol + cefalosporina 3ª + vancomicina; drenar si &gt;2.5 cm.'
      ],
      ojo: ['Aunque se necesite TC, los <b>hemocultivos, la dexametasona y el antibiótico van antes</b> de la TC: no se retrasa el tratamiento.'],
      cards: [['Encefalitis anti-NMDA', 'Mujer joven, psicosis, discinesias; teratoma ovárico']] }
  },

  cards: [
    ['Agente #1 de meningitis bacteriana del adulto', 'S. pneumoniae'],
    ['Meningitis con petequias en joven', 'N. meningitidis'],
    ['Cuándo cubrir Listeria', '>50 años, inmunosupresión, embarazo, alcoholismo, neonatos → ampicilina'],
    ['Empírico en adulto 18–50', 'Ceftriaxona + vancomicina'],
    ['Dexametasona en meningitis', 'Antes o con la 1ª dosis; reduce sordera y muerte (neumococo)'],
    ['TC antes de la PL si', 'Inmunosupresión, convulsión, papiledema, alteración mental, déficit focal, enfermedad del SNC'],
    ['LCR bacteriano', '>1000 PMN, glucosa <40, proteínas altas'],
    ['LCR viral', 'Linfocitos, glucosa normal'],
    ['LCR con linfocitos y glucosa baja', 'TB o hongos'],
    ['Cryptococcus en VIH', 'Presión de apertura muy alta; anfotericina B + flucitosina'],
    ['Encefalitis por VHS', 'Lóbulo temporal; aciclovir IV'],
    ['Absceso cerebral', 'Realce en anillo; ceftriaxona + metronidazol; drenar >2.5 cm'],
    ['Profilaxis de contactos de meningococo', 'Rifampicina, ciprofloxacino o ceftriaxona IM']
  ],

  questions: [
    q({ id: 'snc-01', dif: 1, stem: 'Hombre de 35 años con fiebre, cefalea y rigidez de nuca. LCR: 2,800 leucocitos (90 % PMN), glucosa 22, proteínas 260. ¿Tratamiento empírico?', opts: ['Aciclovir solo', 'Ceftriaxona + vancomicina + dexametasona', 'Solo ampicilina', 'Fluconazol', 'Observación'], ans: 1,
      exp: 'Meningitis bacteriana en adulto <50: ceftriaxona + vancomicina y dexametasona.', why: ['Es para encefalitis.', '', 'Insuficiente.', 'Hongos.', 'Peligroso.'], ref: 'ESCMID 2016' }),
    q({ id: 'snc-02', dif: 2, stem: 'Mujer de 72 años con meningitis bacteriana. ¿Qué agregas al esquema?', opts: ['Metronidazol', 'Ampicilina', 'Aciclovir siempre', 'Fluconazol', 'Gentamicina'], ans: 1,
      exp: 'Cubrir Listeria en >50 años.', why: ['No.', '', 'Solo si encefalitis.', 'No.', 'No.'], ref: 'ESCMID 2016' }),
    q({ id: 'snc-03', dif: 2, stem: 'Paciente con sospecha de meningitis, papiledema y hemiparesia. ¿Orden correcto?', opts: ['PL inmediata, luego antibiótico', 'Hemocultivos, dexametasona + antibiótico, TC y luego PL si es segura', 'TC, esperar el resultado y luego antibiótico', 'Solo TC', 'Antibiótico después de la PL'], ans: 1,
      exp: 'Nunca retrasar el antibiótico por la TC.', why: ['Riesgo de herniación.', '', 'Retrasa.', 'Incompleto.', 'Retrasa.'], ref: 'IDSA 2004' }),
    q({ id: 'snc-04', dif: 2, stem: 'LCR: 180 leucocitos (95 % linfocitos), glucosa normal, proteínas 60, en joven con cefalea y fotofobia. ¿Diagnóstico más probable?', opts: ['Bacteriana', 'Viral (enterovirus)', 'TB', 'Cryptococcus', 'Absceso'], ans: 1,
      exp: 'Linfocitos con glucosa normal: viral.', why: ['PMN y glucosa baja.', '', 'Glucosa baja.', 'Glucosa baja, inmunosuprimido.', 'No.'], ref: 'ESCMID 2016' }),
    q({ id: 'snc-05', dif: 2, stem: 'Hombre de 45 años con fiebre, confusión, conducta extraña y alucinaciones olfatorias. RM: hiperintensidad temporal izquierda. ¿Tratamiento?', opts: ['Ceftriaxona sola', 'Aciclovir IV inmediato', 'Esteroides solos', 'Antipsicótico', 'Esperar PCR'], ans: 1,
      exp: 'Encefalitis herpética: aciclovir sin esperar la PCR.', why: ['No cubre.', '', 'No.', 'No.', 'Peligroso.'], ref: 'IDSA 2008' }),
    q({ id: 'snc-06', dif: 2, stem: 'Universitaria con meningococemia. ¿Qué haces con su compañera de cuarto?', opts: ['Nada', 'Quimioprofilaxis (rifampicina, ciprofloxacino o ceftriaxona)', 'Vacuna sola', 'Aislamiento 1 mes', 'Antibiótico IV 14 días'], ans: 1,
      exp: 'Contactos cercanos: profilaxis en <24 h.', why: ['Riesgo.', '', 'No basta en lo inmediato.', 'No.', 'No.'], ref: 'ESCMID 2016' }),
    q({ id: 'snc-07', dif: 2, stem: 'Paciente con VIH (CD4 40) con cefalea de 2 semanas, LCR con presión de apertura 38 cmH₂O y antígeno criptocócico positivo. ¿Tratamiento?', opts: ['Fluconazol solo', 'Anfotericina B + flucitosina y punciones evacuadoras', 'Ceftriaxona', 'Aciclovir', 'Esteroides'], ans: 1,
      exp: 'Meningitis criptocócica: inducción con anfotericina + flucitosina; controlar la presión.', why: ['Inferior en inducción.', '', 'No.', 'No.', 'Dañan en criptococo.'], ref: 'IDSA 2010' }),
    q({ id: 'snc-08', dif: 2, stem: 'Paciente con meningitis de evolución subaguda, parálisis del VI par, hidrocefalia, LCR linfocítico con glucosa baja y ADA alta. ¿Diagnóstico y tratamiento?', opts: ['Viral; soporte', 'TB meníngea; RIPE + dexametasona', 'Bacteriana; ceftriaxona', 'Cryptococcus; fluconazol', 'Neurosífilis'], ans: 1,
      exp: 'TB meníngea: base del cráneo, pares craneales, ADA; esteroide reduce mortalidad.', why: ['Glucosa normal.', '', 'PMN.', 'Posible, pero ADA y pares sugieren TB.', 'No.'], ref: 'WHO 2022' }),
    q({ id: 'snc-09', dif: 2, stem: 'Paciente con sinusitis crónica, cefalea, fiebre y hemiparesia; TC con lesión con realce en anillo de 3.5 cm. ¿Manejo?', opts: ['PL', 'Ceftriaxona + metronidazol y drenaje', 'Solo esteroide', 'Radioterapia', 'Aciclovir'], ans: 1,
      exp: 'Absceso cerebral >2.5 cm: drenaje y antibiótico; PL contraindicada.', why: ['Riesgo de herniación.', '', 'No.', 'No.', 'No.'], ref: 'Brouwer, NEJM 2014' }),
    q({ id: 'snc-10', dif: 1, stem: '¿Cuándo se administra la dexametasona en la meningitis bacteriana?', opts: ['48 h después del antibiótico', 'Antes o junto con la primera dosis de antibiótico', 'Solo si hay choque', 'Nunca', 'Al alta'], ans: 1,
      exp: 'El beneficio se pierde si se da tarde.', why: ['Sin beneficio.', '', 'No.', 'Está indicada.', 'No.'], ref: 'ESCMID 2016' }),
    q({ id: 'snc-11', dif: 2, stem: 'Recién nacido de 10 días con fiebre y fontanela abombada. ¿Esquema empírico?', opts: ['Ceftriaxona + vancomicina', 'Ampicilina + cefotaxima (o gentamicina)', 'Azitromicina', 'Aciclovir solo', 'Meropenem solo'], ans: 1,
      exp: 'Neonatos: GBS, E. coli, Listeria; ceftriaxona se evita (bilirrubina, calcio).', why: ['No cubre Listeria y no en neonatos.', '', 'No.', 'Se agrega si hay sospecha de VHS.', 'No.'], ref: 'IDSA 2004' }),
    q({ id: 'snc-12', dif: 2, stem: 'Mujer de 24 años con psicosis aguda, convulsiones, discinesias orofaciales y disautonomía. ¿Qué buscas?', opts: ['Absceso', 'Anticuerpos anti-NMDA y teratoma ovárico', 'Cryptococcus', 'TB', 'Listeria'], ans: 1,
      exp: 'Encefalitis autoinmune anti-receptor NMDA.', why: ['No.', '', 'No.', 'No.', 'No.'], ref: 'IDSA 2008' }),
    q({ id: 'snc-13', dif: 2, stem: 'Paciente con VIH y múltiples lesiones con realce en anillo en ganglios basales. ¿Diagnóstico más probable?', opts: ['Linfoma primario', 'Toxoplasmosis cerebral', 'Absceso bacteriano', 'LMP', 'Criptococoma'], ans: 1,
      exp: 'Toxoplasma: múltiples, ganglios basales, CD4 <100; pirimetamina + sulfadiazina (o TMP-SMX).', why: ['Suele ser único, periventricular.', '', 'Menos probable.', 'Sin realce.', 'Raro.'], ref: 'IDSA 2008' }),
    q({ id: 'snc-14', dif: 2, stem: 'Paciente con derivación ventriculoperitoneal y meningitis. ¿Esquema?', opts: ['Ceftriaxona sola', 'Vancomicina + cefepime (o ceftazidima/meropenem)', 'Ampicilina', 'Aciclovir', 'Fluconazol'], ans: 1,
      exp: 'Postquirúrgica/derivación: estafilococos (incluido MRSA) y gramnegativos como Pseudomonas.', why: ['No cubre Pseudomonas ni MRSA.', '', 'No.', 'No.', 'No.'], ref: 'IDSA 2017' }),
    q({ id: 'snc-15', dif: 2, stem: '¿Qué hallazgo del LCR es más característico de meningitis bacteriana?', opts: ['Glucosa normal', 'Cociente glucosa LCR/suero <0.4', 'Linfocitos', 'Proteínas normales', 'Presión baja'], ans: 1,
      exp: 'El consumo de glucosa por bacterias y PMN la baja.', why: ['Viral.', '', 'Viral/TB.', 'No.', 'No.'], ref: 'ESCMID 2016' }),
    q({ id: 'snc-16', dif: 2, stem: 'Paciente con aciclovir IV que presenta elevación de creatinina. ¿Prevención?', opts: ['Suspender siempre', 'Hidratación adecuada e infusión lenta (cristaluria)', 'Furosemida', 'AINE', 'Nada'], ans: 1,
      exp: 'El aciclovir cristaliza en los túbulos; ajustar a la TFG.', why: ['No siempre.', '', 'Empeora.', 'Empeora.', 'No.'], ref: 'IDSA 2008' }),
    q({ id: 'snc-17', dif: 1, stem: '¿Cuál es la causa más común de meningitis en general (incluyendo leves)?', opts: ['Neumococo', 'Virus (enterovirus)', 'Meningococo', 'TB', 'Cryptococcus'], ans: 1,
      exp: 'Las virales son las más frecuentes, de curso benigno.', why: ['Bacteriana #1, no global.', '', 'No.', 'No.', 'No.'], ref: 'ESCMID 2016' }),
    q({ id: 'snc-18', dif: 2, stem: 'Paciente con endocarditis que desarrolla múltiples abscesos cerebrales. ¿Mecanismo?', opts: ['Contigüidad', 'Diseminación hematógena (émbolos sépticos)', 'Trauma', 'Cirugía', 'Viral'], ans: 1,
      exp: 'Las fuentes hematógenas dan abscesos múltiples en la unión corticosubcortical.', why: ['Suele ser único.', '', 'No.', 'No.', 'No.'], ref: 'Brouwer, NEJM 2014' }),
    q({ id: 'snc-19', dif: 2, stem: 'Paciente con meningitis neumocócica confirmada. ¿Qué haces con la dexametasona?', opts: ['Suspenderla', 'Continuar 4 días', 'Duplicarla', 'Cambiarla por hidrocortisona', 'Agregar fludrocortisona'], ans: 1,
      exp: 'El beneficio está demostrado en neumococo; se suspende si se confirma otro agente.', why: ['Se perdería el beneficio.', '', 'No.', 'No.', 'No.'], ref: 'ESCMID 2016' }),
    q({ id: 'snc-20', dif: 2, stem: '¿Qué precaución de aislamiento requiere un paciente con meningitis meningocócica?', opts: ['Ninguna', 'Gotas durante las primeras 24 h de antibiótico', 'Aerosoles 2 semanas', 'Contacto solo', 'Aislamiento inverso'], ans: 1,
      exp: 'Aislamiento por gotas hasta 24 h de tratamiento efectivo.', why: ['Riesgo de transmisión.', '', 'Es para TB.', 'Insuficiente.', 'No.'], ref: 'ESCMID 2016' })
  ]
};
