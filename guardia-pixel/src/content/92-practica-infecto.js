// Práctica de Infectología (semanas 1 a 11): algoritmos con casos, guardias con monitor y simuladores de un control.
export default {
  algos: {
    atbelige: {
      title: 'Elige el antibiótico: ¿qué necesitas cubrir?', topics: ['atb'], start: 'gram',
      nodes: {
        gram: { q: '¿Qué tienes en el Gram o qué sospechas?', opts: [{ t: 'Cocos grampositivos en racimos', go: 'esta' }, { t: 'Bacilos gramnegativos', go: 'gneg' }, { t: 'Infección mixta abdominal o con anaerobios', go: 'anae' }, { t: 'Neumonía con sospecha de atípicos', go: 'atip' }] },
        esta: { q: 'Estafilococo: ¿ya tienes antibiograma?', opts: [{ t: 'Sensible a oxacilina (MSSA)', go: 'mssa' }, { t: 'Resistente (MRSA) o aún sin antibiograma en hospitalizado grave', go: 'mrsa' }] },
        gneg: { q: 'Gramnegativo: ¿qué perfil?', opts: [{ t: 'Pseudomonas', go: 'pseudo' }, { t: 'Enterobacteria productora de BLEE', go: 'blee' }, { t: 'E. coli sensible en cistitis no complicada', go: 'cist' }] },
        mssa: { end: 'Cefazolina u oxacilina (dicloxacilina oral)', d: 'Un betalactámico antiestafilocócico es superior a la vancomicina contra MSSA: desescala siempre.' },
        mrsa: { end: 'Vancomicina (o linezolid; daptomicina si no es pulmón)', d: 'Mide niveles de vancomicina por riesgo renal. Ceftarolina es la única cefalosporina que cubre MRSA.' },
        pseudo: { end: 'Piperacilina-tazobactam, cefepime o meropenem', d: 'También ceftazidima, aztreonam (alergia), ciprofloxacino o un aminoglucósido según el antibiograma.' },
        blee: { end: 'Carbapenémico', d: 'Meropenem en grave; ertapenem si no hay riesgo de Pseudomonas. Las cefalosporinas fallan aunque el reporte diga sensible.' },
        cist: { end: 'Nitrofurantoína 5 días o fosfomicina dosis única', d: 'No sirven en pielonefritis ni con TFG menor de 30 (nitrofurantoína).' },
        anae: { end: 'Metronidazol + ceftriaxona, o pip-tazo, o carbapenémico', d: 'Abajo del diafragma: metronidazol. Arriba (boca, aspiración): clindamicina o amoxi-clav.' },
        atip: { end: 'Macrólido, doxiciclina o quinolona respiratoria', d: 'Los atípicos no tienen la pared que atacan los betalactámicos.' }
      },
      cases: [
        { t: 'Don Ramón: bacteriemia por S. aureus; el antibiograma llega sensible a oxacilina.', data: [['Gram', 'Cocos grampositivos en racimos'], ['Oxacilina', 'Sensible']], path: { gram: 0, esta: 0 }, end: 'mssa' },
        { t: 'Neumonía necrotizante tras influenza en terapia intensiva.', data: [['Gram de aspirado', 'Cocos grampositivos en racimos'], ['Antibiograma', 'Pendiente']], path: { gram: 0, esta: 1 }, end: 'mrsa' },
        { t: 'Pielonefritis en paciente con sonda y antibióticos previos.', data: [['Urocultivo', 'Klebsiella pneumoniae'], ['Fenotipo', 'BLEE positivo']], path: { gram: 1, gneg: 1 }, end: 'blee' },
        { t: 'Neumonía asociada a ventilador.', data: [['Aspirado', 'Bacilos gramnegativos no fermentadores'], ['Cultivo', 'Pseudomonas aeruginosa']], path: { gram: 1, gneg: 0 }, end: 'pseudo' },
        { t: 'Absceso hepático tras apendicitis perforada.', data: [['Cultivo', 'Polimicrobiano con Bacteroides']], path: { gram: 2 }, end: 'anae' }
      ]
    },
    gramlab: {
      title: 'Del Gram al microorganismo', topics: ['micro'], start: 'forma',
      nodes: {
        forma: { q: '¿Qué ves en la tinción?', opts: [{ t: 'Cocos grampositivos', go: 'cocos' }, { t: 'Diplococos gramnegativos', go: 'neis' }, { t: 'No se ve con Gram', go: 'otra' }] },
        cocos: { q: 'Cocos grampositivos: ¿cómo se agrupan?', opts: [{ t: 'Racimos', go: 'aureus' }, { t: 'Cadenas o pares con hemólisis alfa', go: 'neumo' }] },
        neis: { q: 'Diplococos gramnegativos: ¿de dónde viene la muestra?', opts: [{ t: 'Uretra o cérvix', go: 'gono' }, { t: 'LCR con petequias', go: 'menin' }] },
        otra: { q: '¿Qué tinción especial lo muestra?', opts: [{ t: 'Ziehl-Neelsen: ácido-alcohol resistente', go: 'tb' }, { t: 'Tinta china: levadura encapsulada en LCR', go: 'crypto' }, { t: 'Plata: en lavado de un paciente con VIH', go: 'pcp' }] },
        aureus: { end: 'Staphylococcus (S. aureus si es coagulasa positivo)', d: 'Beta hemolítico, colonias doradas, crece en sal-manitol. En sangre nunca es contaminante.' },
        neumo: { end: 'Streptococcus pneumoniae', d: 'Diplococo lanceolado, alfa hemolítico (verde), sensible a optoquina.' },
        gono: { end: 'Neisseria gonorrhoeae', d: 'Cultivo en Thayer-Martin o NAAT. Ceftriaxona 500 mg IM + doxiciclina por Chlamydia.' },
        menin: { end: 'Neisseria meningitidis', d: 'Crece en agar chocolate. Ceftriaxona y profilaxis a contactos cercanos.' },
        tb: { end: 'Mycobacterium tuberculosis', d: 'Cultivo en Löwenstein-Jensen (2 a 6 semanas). Xpert para rapidez y resistencia a rifampicina.' },
        crypto: { end: 'Cryptococcus neoformans', d: 'Hoy se prefiere el antígeno criptocócico. Anfotericina + flucitosina.' },
        pcp: { end: 'Pneumocystis jirovecii', d: 'No se cultiva. TMP-SMX, con prednisona si PaO2 menor de 70.' }
      },
      cases: [
        { t: 'Iván, 24 años, con secreción uretral purulenta.', data: [['Gram', 'Diplococos gramnegativos intracelulares']], path: { forma: 1, neis: 0 }, end: 'gono' },
        { t: 'Hemocultivo de paciente con catéter.', data: [['Gram', 'Cocos grampositivos en racimos'], ['Coagulasa', 'Positiva']], path: { forma: 0, cocos: 0 }, end: 'aureus' },
        { t: 'Esputo de anciano con neumonía lobar.', data: [['Gram', 'Diplococos grampositivos lanceolados'], ['Agar sangre', 'Hemólisis alfa']], path: { forma: 0, cocos: 1 }, end: 'neumo' },
        { t: 'LCR de paciente con VIH, CD4 de 40 y presión de apertura de 35 cmH2O.', data: [['Gram', 'Sin bacterias'], ['Tinta china', 'Levaduras con cápsula']], path: { forma: 2, otra: 1 }, end: 'crypto' },
        { t: 'Esputo de diabético con cavidad apical.', data: [['Gram', 'Sin bacterias'], ['Ziehl-Neelsen', 'Bacilos rojos']], path: { forma: 2, otra: 0 }, end: 'tb' }
      ]
    },
    fodalgo: {
      title: 'Fiebre de origen desconocido: el orden', topics: ['fod'], start: 'grave',
      nodes: {
        grave: { q: '¿Está inestable o neutropénico (menos de 500)?', opts: [{ t: 'Sí', go: 'emp' }, { t: 'No, estable', go: 'pista' }] },
        pista: { q: 'Historia, exploración y laboratorio básico: ¿hay una pista?', opts: [{ t: 'Mayor de 50, cefalea, claudicación mandibular, VSG alta', go: 'acg' }, { t: 'Soplo nuevo o hemocultivos positivos', go: 'endo' }, { t: 'Adenopatías y síntomas B', go: 'linfo' }, { t: 'Ninguna pista', go: 'tc' }] },
        tc: { q: 'TC de tórax, abdomen y pelvis:', opts: [{ t: 'Muestra una lesión', go: 'biop' }, { t: 'Normal', go: 'pet' }] },
        emp: { end: 'Tratar empíricamente ya', d: 'Neutropenia febril: cefepime o meropenem en 1 hora. Inestable: manejo de sepsis.' },
        acg: { end: 'Arteritis de células gigantes', d: 'Prednisona 40 a 60 mg el mismo día y biopsia de arteria temporal en 2 semanas.' },
        endo: { end: 'Endocarditis: eco y Duke', d: '3 hemocultivos antes del antibiótico, eco transtorácico y transesofágico.' },
        linfo: { end: 'Biopsia excisional del ganglio', d: 'Sospecha de linfoma: ganglio completo, no aspiración con aguja fina.' },
        biop: { end: 'Biopsia dirigida', d: 'Lo anormal se biopsia y se cultiva (granulomas, linfoma, absceso).' },
        pet: { end: 'PET-CT con FDG', d: 'El estudio de imagen con más rendimiento cuando la TC no aclara. Nada de antibiótico ni esteroide a ciegas.' }
      },
      cases: [
        { t: 'Rosa, 68 años, 4 semanas con fiebre, cefalea nueva y dolor de mandíbula al masticar.', data: [['VSG', '98 mm/h'], ['Estado', 'Estable']], path: { grave: 1, pista: 0 }, end: 'acg' },
        { t: 'Hombre de 45 años, estable, fiebre de 5 semanas sin pista; laboratorio y TC normales.', data: [['Hemocultivos', 'Negativos'], ['TC', 'Normal']], path: { grave: 1, pista: 3, tc: 1 }, end: 'pet' },
        { t: 'Mujer con quimioterapia hace 10 días y fiebre de 38.6.', data: [['Neutrófilos', '220/µL']], path: { grave: 0 }, end: 'emp' },
        { t: 'Hombre de 30 años con fiebre, sudoración nocturna y ganglios cervicales de 3 cm.', data: [['LDH', 'Alta'], ['Peso', '−9 kg']], path: { grave: 1, pista: 2 }, end: 'linfo' }
      ]
    },
    sepsis1h: {
      title: 'Sepsis: la primera hora', topics: ['sepsis'], start: 'sofa',
      nodes: {
        sofa: { q: 'Infección sospechada: ¿hay disfunción orgánica (SOFA sube 2 o más)?', opts: [{ t: 'Sí: sepsis', go: 'paq' }, { t: 'No', go: 'inf' }] },
        paq: { q: 'Lactato, hemocultivos y antibiótico en 1 hora. ¿Hay hipotensión o lactato de 4 o más?', opts: [{ t: 'Sí', go: 'vol' }, { t: 'No', go: 'foco' }] },
        vol: { q: 'Cristaloide balanceado 30 mL/kg. ¿PAM de 65 o más?', opts: [{ t: 'Sí, responde', go: 'foco' }, { t: 'No, sigue menor de 65', go: 'nore' }] },
        nore: { q: 'Norepinefrina. ¿Dosis?', opts: [{ t: 'Baja, la PAM se sostiene', go: 'choque' }, { t: '0.25 µg/kg/min o más', go: 'vaso' }] },
        inf: { end: 'Infección sin sepsis', d: 'Antibiótico según el foco y vigilancia. Reevalúa si cambian los signos vitales.' },
        foco: { end: 'Sepsis: control del foco y desescalar', d: 'Drenar, retirar catéter o sonda en 6 a 12 h; ajustar antibiótico con cultivos; 5 a 7 días.' },
        choque: { end: 'Choque séptico', d: 'Vasopresor para PAM ≥65 y lactato >2 pese a volumen. Control del foco y metas: uresis, lactato, llenado capilar.' },
        vaso: { end: 'Choque refractario: vasopresina + hidrocortisona', d: 'Vasopresina 0.03 U/min e hidrocortisona 200 mg/día. Dobutamina si hay disfunción cardiaca.' }
      },
      cases: [
        { t: 'Don Aurelio, 74 años, con sonda y confusión.', data: [['PA', '78/44'], ['Lactato', '4.6'], ['Tras 30 mL/kg', 'PAM 58'], ['Norepinefrina', '0.12 µg/kg/min, PAM 68']], path: { sofa: 0, paq: 0, vol: 1, nore: 0 }, end: 'choque' },
        { t: 'Mujer de 40 años con pielonefritis, febril pero sin disfunción orgánica.', data: [['PA', '118/74'], ['Lactato', '1.4'], ['Creatinina', 'Normal'], ['Glasgow', '15']], path: { sofa: 1 }, end: 'inf' },
        { t: 'Hombre de 60 años con neumonía, creatinina nueva de 2.1, sin hipotensión.', data: [['PA', '112/70'], ['Lactato', '2.6']], path: { sofa: 0, paq: 1 }, end: 'foco' },
        { t: 'Peritonitis fecal posquirúrgica con choque.', data: [['Norepinefrina', '0.4 µg/kg/min'], ['PAM', '60']], path: { sofa: 0, paq: 0, vol: 1, nore: 1 }, end: 'vaso' }
      ]
    },
    lcr: {
      title: 'Lee el líquido cefalorraquídeo', topics: ['snc'], start: 'cel',
      nodes: {
        cel: { q: '¿Qué células predominan?', opts: [{ t: 'Neutrófilos, más de 1000', go: 'bact' }, { t: 'Linfocitos', go: 'glu' }] },
        glu: { q: 'Linfocitos: ¿cómo está la glucosa?', opts: [{ t: 'Normal', go: 'viral' }, { t: 'Baja', go: 'tbhongo' }] },
        tbhongo: { q: 'Glucosa baja con linfocitos: ¿qué contexto?', opts: [{ t: 'Pares craneales, hidrocefalia, ADA alta', go: 'tbm' }, { t: 'VIH avanzado, presión de apertura muy alta', go: 'crip' }] },
        bact: { q: 'Bacteriana: ¿edad o riesgo de Listeria?', opts: [{ t: '18 a 50 años, sin riesgo', go: 'cv' }, { t: 'Mayor de 50, inmunosuprimido, embarazo o alcohol', go: 'cva' }] },
        viral: { end: 'Meningitis viral (enterovirus)', d: 'Soporte. Si hay alteración mental o focalidad, piensa en encefalitis herpética: aciclovir.' },
        tbm: { end: 'Meningitis tuberculosa', d: 'RIPE 2 meses + RI 7 a 10 meses, con dexametasona.' },
        crip: { end: 'Meningitis criptocócica', d: 'Antígeno criptocócico. Anfotericina + flucitosina, punciones evacuadoras; TAR a las 4 a 6 semanas.' },
        cv: { end: 'Ceftriaxona + vancomicina + dexametasona', d: 'Dexametasona antes o con la 1a dosis. Si es meningococo: profilaxis a contactos.' },
        cva: { end: 'Ceftriaxona + vancomicina + ampicilina + dexametasona', d: 'La ampicilina cubre Listeria; ninguna cefalosporina lo hace.' }
      },
      cases: [
        { t: 'Sofía, 20 años, con petequias y rigidez de nuca.', data: [['Leucocitos', '3200, 92% PMN'], ['Glucosa', '22 mg/dL'], ['Proteínas', '280']], path: { cel: 0, bact: 0 }, end: 'cv' },
        { t: 'Hombre de 72 años con fiebre y confusión.', data: [['Leucocitos', '1800, 85% PMN'], ['Glucosa', '30'], ['Gram', 'Bacilos grampositivos']], path: { cel: 0, bact: 1 }, end: 'cva' },
        { t: 'Mujer de 24 años con cefalea y fiebre en verano; alerta, sin focalidad.', data: [['Leucocitos', '180, 90% linfocitos'], ['Glucosa', 'Normal'], ['Proteínas', '60']], path: { cel: 1, glu: 0 }, end: 'viral' },
        { t: 'Hombre con VIH, CD4 de 35 y cefalea de 2 semanas.', data: [['Leucocitos', '40, linfocitos'], ['Glucosa', '35'], ['Presión de apertura', '38 cmH2O']], path: { cel: 1, glu: 1, tbhongo: 1 }, end: 'crip' },
        { t: 'Hombre de 50 años con diplopía por VI par y fiebre de 3 semanas.', data: [['Leucocitos', '250, linfocitos'], ['Glucosa', '28'], ['Proteínas', '410'], ['ADA', '18 U/L']], path: { cel: 1, glu: 1, tbhongo: 0 }, end: 'tbm' }
      ]
    },
    vihcd4: {
      title: 'VIH: diagnóstico, TAR y oportunistas', topics: ['vih'], start: 'prueba',
      nodes: {
        prueba: { q: 'Prueba de 4a generación:', opts: [{ t: 'Positiva', go: 'conf' }, { t: 'Negativa con síntomas de infección aguda tras exposición', go: 'cv' }] },
        conf: { q: 'Inmunoensayo diferencial confirma VIH-1. ¿Tiene una infección oportunista activa?', opts: [{ t: 'No', go: 'tar' }, { t: 'Meningitis criptocócica o TB meníngea', go: 'espera' }, { t: 'Neumonía por Pneumocystis', go: 'pcp' }] },
        cv: { end: 'Pedir carga viral (ARN)', d: 'En la infección aguda la prueba puede estar en ventana. Si sale positiva, TAR de inmediato.' },
        tar: { end: 'TAR hoy, a todos', d: 'Bictegravir/TAF/FTC o dolutegravir + 2 ITRAN. Profilaxis según CD4.' },
        espera: { end: 'Tratar la infección y retrasar el TAR', d: 'Criptococo: 4 a 6 semanas; TB meníngea: esperar. Riesgo de SIRI grave.' },
        pcp: { end: 'TMP-SMX 21 días (+ prednisona si PaO2 menor de 70) y TAR en 2 semanas', d: 'La prednisona va antes o con el antibiótico.' }
      },
      cases: [
        { t: 'Rubén, 32 años, con disnea, LDH alta y vidrio despulido.', data: [['Prueba 4a gen.', 'Positiva'], ['CD4', '45'], ['PaO2', '62 mmHg']], path: { prueba: 0, conf: 2 }, end: 'pcp' },
        { t: 'Mujer de 26 años, asintomática, en control prenatal.', data: [['Prueba 4a gen.', 'Positiva'], ['CD4', '520']], path: { prueba: 0, conf: 0 }, end: 'tar' },
        { t: 'Hombre con fiebre, faringitis y exantema 3 semanas después de una exposición.', data: [['Prueba 4a gen.', 'Negativa']], path: { prueba: 1 }, end: 'cv' },
        { t: 'Hombre con VIH nuevo, CD4 de 30 y antígeno criptocócico en LCR positivo.', data: [['Presión de apertura', '40 cmH2O']], path: { prueba: 0, conf: 1 }, end: 'espera' }
      ]
    },
    iaasalgo: {
      title: 'Fiebre en el hospitalizado: ¿qué infección?', topics: ['iaas'], start: 'foco',
      nodes: {
        foco: { q: '¿Qué dato orienta el foco?', opts: [{ t: 'Diarrea tras antibióticos', go: 'cdif' }, { t: 'Catéter central y hemocultivos positivos', go: 'cat' }, { t: 'Sonda urinaria y urocultivo positivo', go: 'sonda' }, { t: 'Intubado más de 48 h con infiltrado nuevo', go: 'nav' }] },
        cdif: { q: 'Toxina de C. difficile positiva: ¿datos de fulminante (choque, íleo, megacolon)?', opts: [{ t: 'No', go: 'cdifT' }, { t: 'Sí', go: 'cdifF' }] },
        cat: { q: '¿Qué creció?', opts: [{ t: 'S. aureus o Candida', go: 'retira' }, { t: 'Estafilococo coagulasa negativo en 1 de 2 sets', go: 'contam' }] },
        sonda: { q: '¿Tiene síntomas (fiebre, dolor, delirio sin otra causa)?', opts: [{ t: 'No', go: 'asint' }, { t: 'Sí', go: 'cauti' }] },
        cdifT: { end: 'Fidaxomicina o vancomicina oral 10 días', d: 'Aislamiento de contacto y agua y jabón. Suspende antibióticos e IBP innecesarios.' },
        cdifF: { end: 'Fulminante: vancomicina oral alta + metronidazol IV', d: 'Vancomicina rectal si hay íleo. Cirugía si perfora o hay megacolon.' },
        retira: { end: 'Retirar el catéter y tratar', d: 'S. aureus: eco transesofágico y 14 días mínimo. Candida: equinocandina y fondo de ojo.' },
        contam: { end: 'Probable contaminante', d: 'Un solo set con coagulasa negativo suele ser de la piel: repite antes de tratar.' },
        asint: { end: 'Bacteriuria asintomática: no tratar', d: 'Valora retirar la sonda. Solo se trata en embarazo o antes de cirugía urológica.' },
        cauti: { end: 'IVU asociada a sonda', d: 'Cambia o retira la sonda antes del cultivo y trata 7 días según antibiograma.' },
        nav: { end: 'Neumonía asociada a ventilador', d: 'Pip-tazo, cefepime o meropenem ± vancomicina o linezolid según riesgo; 7 días. Prevención: cabecera a 30–45°, ventana de sedación, extubar pronto.' }
      },
      cases: [
        { t: 'Doña Teresa, 71 años, con 6 evacuaciones líquidas tras ceftriaxona y levofloxacino.', data: [['Toxina', 'Positiva'], ['Leucocitos', '22 000'], ['Íleo', 'No']], path: { foco: 0, cdif: 0 }, end: 'cdifT' },
        { t: 'Paciente con nutrición parenteral por catéter y fiebre.', data: [['Hemocultivo central y periférico', 'Candida albicans']], path: { foco: 1, cat: 0 }, end: 'retira' },
        { t: 'Hombre de 80 años con sonda, sin fiebre, en ronda matutina.', data: [['Urocultivo', '10⁵ UFC E. coli'], ['Síntomas', 'Ninguno']], path: { foco: 2, sonda: 0 }, end: 'asint' },
        { t: 'Paciente con catéter yugular y fiebre aislada.', data: [['Hemocultivos', '1 de 2 sets: S. epidermidis'], ['Catéter', 'Sin datos locales']], path: { foco: 1, cat: 1 }, end: 'contam' },
        { t: 'Mujer con sonda, fiebre de 38.9 y dolor en flanco.', data: [['Urocultivo', 'Klebsiella'], ['Otra fuente', 'No']], path: { foco: 2, sonda: 1 }, end: 'cauti' },
        { t: 'Hombre intubado 6 días por EVC, ahora con fiebre y secreción purulenta.', data: [['Rx', 'Infiltrado nuevo en base derecha'], ['Aspirado', 'Bacilos gramnegativos']], path: { foco: 3 }, end: 'nav' }
      ]
    },
    duke: {
      title: 'Endocarditis: Duke y cirugía', topics: ['endocarditis'], start: 'may',
      nodes: {
        may: { q: '¿Cuántos criterios mayores? (hemocultivos típicos; imagen con vegetación o absceso)', opts: [{ t: 'Dos', go: 'def' }, { t: 'Uno', go: 'men1' }, { t: 'Ninguno', go: 'men0' }] },
        men1: { q: 'Con 1 mayor: ¿cuántos menores? (predisposición, fiebre, vasculares, inmunológicos, microbiología)', opts: [{ t: '3 o más', go: 'def' }, { t: '1 o 2', go: 'pos' }] },
        men0: { q: 'Sin mayores: ¿cuántos menores?', opts: [{ t: '5', go: 'def' }, { t: 'Menos de 5', go: 'pos' }] },
        def: { q: 'Endocarditis definitiva: ¿hay indicación quirúrgica?', opts: [{ t: 'IC por disfunción valvular', go: 'cir' }, { t: 'Absceso, bloqueo AV o bacteriemia de más de 7 días', go: 'cir' }, { t: 'Ninguna', go: 'atb' }] },
        pos: { end: 'Endocarditis posible: completar estudio', d: 'Eco transesofágico, más hemocultivos, serologías (Coxiella, Bartonella) o PET-CT si hay prótesis.' },
        cir: { end: 'Cirugía valvular temprana + antibiótico', d: 'La IC es la indicación más común. Sin anticoagular por la endocarditis.' },
        atb: { end: 'Antibiótico dirigido 4 a 6 semanas', d: 'MSSA: cefazolina u oxacilina. Estreptococo: penicilina o ceftriaxona. Enterococo: ampicilina + ceftriaxona.' }
      },
      cases: [
        { t: 'Saúl, 29 años, usa heroína IV, con fiebre y soplo tricuspídeo.', data: [['Hemocultivos', 'S. aureus en 3 sets'], ['Eco', 'Vegetación tricuspídea 14 mm'], ['IC', 'No']], path: { may: 0, def: 2 }, end: 'atb' },
        { t: 'Mujer con prótesis aórtica, fiebre y disnea súbita.', data: [['Hemocultivos', 'S. epidermidis en 3 sets'], ['Eco TE', 'Dehiscencia con insuficiencia grave'], ['Clínica', 'Edema pulmonar']], path: { may: 0, def: 0 }, end: 'cir' },
        { t: 'Hombre con valvulopatía mitral y fiebre tras extracción dental.', data: [['Hemocultivos', 'Viridans en 2 sets'], ['Eco TT', 'Sin vegetación'], ['Menores', 'Predisposición y fiebre']], path: { may: 1, men1: 1 }, end: 'pos' },
        { t: 'Hombre de 65 años con fiebre y PR que se alarga a diario.', data: [['Hemocultivos', 'S. aureus'], ['Eco TE', 'Absceso perivalvular aórtico'], ['ECG', 'Bloqueo AV de 1er grado nuevo']], path: { may: 0, def: 1 }, end: 'cir' }
      ]
    },
    vacalgo: {
      title: 'Vacunas: ¿se puede la viva?', topics: ['vacunas'], start: 'tipo',
      nodes: {
        tipo: { q: '¿La vacuna es viva atenuada? (SRP, varicela, fiebre amarilla, BCG)', opts: [{ t: 'Sí', go: 'emb' }, { t: 'No: inactivada o recombinante', go: 'ok' }] },
        emb: { q: '¿Está embarazada?', opts: [{ t: 'Sí', go: 'no' }, { t: 'No', go: 'inm' }] },
        inm: { q: '¿Inmunosupresión grave? (CD4 menor de 200, quimioterapia, prednisona 20 mg 14 días, biológico, trasplante)', opts: [{ t: 'Sí', go: 'no' }, { t: 'Va a iniciar un biológico', go: 'antes' }, { t: 'No', go: 'si' }] },
        ok: { end: 'Se puede aplicar', d: 'Las inactivadas son seguras en embarazo e inmunosupresión (la respuesta puede ser menor).' },
        no: { end: 'Contraindicada', d: 'Diferir hasta después del embarazo o de la inmunosupresión. Usa la alternativa inactivada si existe.' },
        antes: { end: 'Aplicar al menos 4 semanas antes del biológico', d: 'Actualiza el esquema antes de iniciar inmunosupresión.' },
        si: { end: 'Se puede aplicar', d: 'Dos vivas parenterales: el mismo día o separadas 4 semanas.' }
      },
      cases: [
        { t: 'Mujer de 28 años, embarazada de 20 semanas, sin inmunidad a rubéola.', data: [['Vacuna', 'Triple viral']], path: { tipo: 0, emb: 0 }, end: 'no' },
        { t: 'Marta, 62 años, que va a iniciar adalimumab.', data: [['Vacuna', 'Zóster recombinante']], path: { tipo: 1 }, end: 'ok' },
        { t: 'Hombre con VIH y CD4 de 350 sin inmunidad a varicela.', data: [['Vacuna', 'Varicela'], ['Embarazo', 'No aplica']], path: { tipo: 0, emb: 1, inm: 2 }, end: 'si' },
        { t: 'Mujer de 35 años con prednisona 40 mg desde hace 3 semanas que viajará a zona de fiebre amarilla.', data: [['Vacuna', 'Fiebre amarilla']], path: { tipo: 0, emb: 1, inm: 0 }, end: 'no' },
        { t: 'Hombre de 30 años sin varicela que iniciará infliximab el próximo mes.', data: [['Vacuna', 'Varicela']], path: { tipo: 0, emb: 1, inm: 1 }, end: 'antes' }
      ]
    },
    covidalgo: {
      title: 'COVID: tratamiento por gravedad', topics: ['covid'], start: 'o2',
      nodes: {
        o2: { q: '¿Necesita oxígeno? (SpO2 menor de 94%)', opts: [{ t: 'No', go: 'riesgo' }, { t: 'Sí, puntas o mascarilla', go: 'dexa' }, { t: 'Alto flujo, VMNI o ventilación mecánica', go: 'toci' }] },
        riesgo: { q: '¿Tiene riesgo de progresión y 5 días o menos de síntomas?', opts: [{ t: 'Sí', go: 'paxl' }, { t: 'No', go: 'sint' }] },
        sint: { end: 'Sintomático y aislamiento', d: 'Paracetamol. Sin dexametasona, sin antibiótico, sin ivermectina.' },
        paxl: { end: 'Nirmatrelvir-ritonavir 5 días', d: 'Revisa interacciones (CYP3A4). Alternativa: remdesivir 3 días IV.' },
        dexa: { end: 'Dexametasona 6 mg × 10 días + remdesivir', d: 'Más tromboprofilaxis (terapéutica en no crítico con dímero D alto y bajo riesgo de sangrado).' },
        toci: { end: 'Dexametasona + tocilizumab o baricitinib', d: 'Ventilación protectora y prono si hay SDRA.' }
      },
      cases: [
        { t: 'Don Ernesto, 68 años, diabético, 2 días de síntomas.', data: [['SpO2', '96%']], path: { o2: 0, riesgo: 0 }, end: 'paxl' },
        { t: 'Mujer de 25 años sana con fiebre y anosmia.', data: [['SpO2', '98%'], ['Comorbilidades', 'Ninguna']], path: { o2: 0, riesgo: 1 }, end: 'sint' },
        { t: 'Hombre de 70 años hospitalizado.', data: [['SpO2 aire ambiente', '89%'], ['Requiere', 'Puntas nasales 3 L']], path: { o2: 1 }, end: 'dexa' },
        { t: 'Mujer de 59 años en alto flujo que sigue empeorando.', data: [['FiO2', '60%'], ['PCR', 'Muy alta']], path: { o2: 2 }, end: 'toci' }
      ]
    }
  },
  sliders: {
    cd4: { title: 'VIH: los CD4 y lo que aparece', topics: ['vih'], label: 'Linfocitos CD4', unit: 'células/µL', min: 0, max: 900, step: 10, start: 350,
      intro: 'Cada umbral de CD4 abre la puerta a nuevas infecciones oportunistas y cambia la profilaxis.',
      bands: [[49, 'Menos de 50', 'bad', 'MAC diseminado, retinitis por CMV, linfoma primario del SNC, LMP. Fondo de ojo. Azitromicina solo si no inicia TAR. Todo lo anterior también.'], [99, '50 a 99', 'bad', 'Toxoplasmosis cerebral (lesiones múltiples en anillo), criptococo, candidiasis esofágica. TMP-SMX protege contra toxoplasma si la IgG es positiva.'], [199, '100 a 199: SIDA', 'warn', 'Pneumocystis (disnea, LDH alta, vidrio despulido) e histoplasma. Profilaxis con TMP-SMX.'], [499, '200 a 499', 'warn', 'TB, candidiasis oral, zóster, Kaposi, leucoplasia vellosa. Las vacunas vivas ya se permiten desde 200.'], [900, '500 o más', 'ok', 'Inmunidad casi normal, pero el TAR se da igual: a todos, desde el diagnóstico.']] },
    lactato: { title: 'Sepsis: el lactato', topics: ['sepsis'], label: 'Lactato sérico', unit: 'mmol/L', min: 0.5, max: 10, step: 0.1, start: 2.6,
      intro: 'El lactato mide hipoperfusión. Se repite para ver si la reanimación funciona.',
      bands: [[2, 'Normal', 'ok', 'Hasta 2 mmol/L. Si hay sepsis, sigue con antibiótico y control del foco.'], [3.9, 'Elevado', 'warn', 'Mayor de 2: repítelo en 2 a 4 h. Con vasopresor para PAM ≥65 ya cumple la definición de choque séptico.'], [10, 'Muy alto: 4 o más', 'bad', 'Hipoperfusión grave: cristaloide 30 mL/kg aunque la PA sea normal, y norepinefrina si la PAM sigue menor de 65. Mortalidad alta.']] }
  },
  cases: [
    { id: 'g-sepsis', topic: 'sepsis', subj: 'infecto',
      title: 'La sonda que nadie cambió', place: 'Urgencias',
      patient: { name: 'Don Aurelio', age: 74, sex: 'H', skin: '#C98B62', hair: '#B0B0B0', gown: '#5EEAD4' },
      intro: 'Sonda urinaria permanente por crecimiento prostático. Dos días con fiebre y orina turbia; hoy confundido y frío.',
      extra: { label: 'Lact.', unit: 'mmol/L' },
      start: { FC: 124, PAS: 78, PAD: 44, SpO2: 93, FR: 26, X: 4.6 },
      nodes: [
        { tag: 'Minuto 0', ecg: 'tachy',
          text: 'Sospecha de sepsis de origen urinario. Ya tiene vía periférica.',
          q: '¿Qué haces primero?',
          A: { t: 'Hemocultivos, lactato y pip-tazo en la primera hora', ok: true, res: 'Antibiótico a los 40 minutos, después de los cultivos.' },
          B: { t: 'Esperar la TC de abdomen para elegir antibiótico', ok: false, res: 'Tres horas sin antibiótico: el lactato sube a 6.1.', vit: { X: 6.1, PAS: 70 } },
          why: 'En choque séptico el antibiótico va en la primera hora, tras los hemocultivos.' },
        { tag: 'Volumen', ecg: 'tachy',
          text: 'PA 78/44 y lactato 4.6.',
          q: '¿Qué solución y cuánto?',
          A: { t: 'Hartmann 30 mL/kg en las primeras 3 h, reevaluando', ok: true, res: 'Mejora el llenado capilar pero la PAM queda en 58.', vit: { PAS: 86, PAD: 46, X: 3.8 } },
          B: { t: 'Almidón (hidroxietil almidón) 1 L', ok: false, res: 'Los almidones dañan el riñón: la creatinina sube al día siguiente.' },
          why: 'Cristaloide 30 mL/kg, de preferencia balanceado.' },
        { tag: 'Hora 2', ecg: 'tachy', vit: { PAS: 84, PAD: 46 },
          text: 'Tras 30 mL/kg, la PAM sigue en 58.',
          q: '¿Siguiente paso?',
          A: { t: 'Norepinefrina por vena periférica mientras se coloca el central', ok: true, res: 'PAM 70; el lactato baja a 2.8.', vit: { PAS: 108, PAD: 52, FC: 106, X: 2.8 } },
          B: { t: 'Dopamina en dosis alta', ok: false, res: 'Aparece FA rápida a 160.', vit: { FC: 160 } },
          why: 'La norepinefrina es el vasopresor de primera línea.' },
        { tag: 'Control del foco', ecg: 'normal', vit: { FC: 96, PAS: 116, PAD: 64, SpO2: 96, FR: 18, X: 1.6 },
          text: 'Urocultivo: E. coli BLEE. La sonda lleva 6 semanas sin cambiarse.',
          q: '¿Qué falta?',
          A: { t: 'Cambiar la sonda y pasar a ertapenem', ok: true, res: 'Sin vasopresor al día 2; completa 7 días.' },
          B: { t: 'Dejar la sonda y seguir pip-tazo', ok: false, res: 'La sonda colonizada sigue sembrando y la BLEE no se cubre bien.' },
          why: 'Control del foco y antibiótico dirigido: carbapenémico para BLEE.' }
      ] },
    { id: 'g-snc', topic: 'snc', subj: 'infecto',
      title: 'Petequias en el dormitorio', place: 'Urgencias',
      patient: { name: 'Sofía', age: 20, sex: 'M', skin: '#E2B08A', hair: '#2A1A12', gown: '#5EEAD4' },
      intro: 'Universitaria. Doce horas con fiebre, cefalea intensa, vómito, rigidez de nuca y petequias en piernas.',
      extra: { label: 'Glasgow', unit: '' },
      start: { FC: 118, PAS: 96, PAD: 60, SpO2: 97, FR: 22, X: 14 },
      nodes: [
        { tag: 'Llegada', ecg: 'tachy',
          text: 'Sin déficit focal, sin papiledema, sin convulsiones, no inmunosuprimida.',
          q: '¿Qué haces?',
          A: { t: 'TC de cráneo y luego decidir el antibiótico', ok: false, res: 'La TC tarda 90 minutos; las petequias se vuelven púrpura.', vit: { PAS: 84, X: 12 } },
          B: { t: 'Hemocultivos, dexametasona y ceftriaxona + vancomicina ya; punción después', ok: true, res: 'Antibiótico a los 25 minutos.' },
          why: 'No retrases el antibiótico por la TC; aquí ni siquiera está indicada.' },
        { tag: 'Punción', ecg: 'tachy',
          text: 'LCR turbio: 3200 leucocitos (92% PMN), glucosa 22, proteínas 280. Gram: diplococos gramnegativos.',
          q: '¿Qué ajustas?',
          A: { t: 'Dejar ceftriaxona, suspender vancomicina y la dexametasona', ok: true, res: 'Meningococo confirmado; sigue con ceftriaxona 7 días.' },
          B: { t: 'Agregar ampicilina', ok: false, res: 'No tiene riesgo de Listeria y el Gram ya orienta a meningococo.' },
          why: 'Gram con diplococos gramnegativos: meningococo. La dexametasona se mantiene solo en neumococo.' },
        { tag: 'Choque', ecg: 'tachy', vit: { FC: 132, PAS: 80, PAD: 42, X: 13 },
          text: 'Púrpura que se extiende. PAM 55 tras 2 L de cristaloide.',
          q: '¿Qué haces?',
          A: { t: 'Norepinefrina y UCI', ok: true, res: 'PAM 68; estabiliza en 12 h.', vit: { PAS: 104, PAD: 56, FC: 112 } },
          B: { t: 'Más volumen y observación en urgencias', ok: false, res: 'Evoluciona a falla suprarrenal y choque refractario.' },
          why: 'Meningococemia con choque: vasopresor y UCI. Considera hidrocortisona si es refractario.' },
        { tag: 'Contactos', ecg: 'normal', vit: { FC: 90, PAS: 112, PAD: 70, SpO2: 98, FR: 16, X: 15 },
          text: 'Sus dos compañeras de cuarto preguntan qué deben hacer.',
          q: '¿Qué les indicas?',
          A: { t: 'Ciprofloxacino 500 mg dosis única (o rifampicina o ceftriaxona IM)', ok: true, res: 'Ninguna enferma.' },
          B: { t: 'Nada, a menos que tengan fiebre', ok: false, res: 'Una de ellas desarrolla meningococemia 4 días después.' },
          why: 'Los contactos cercanos de meningococo reciben quimioprofilaxis.' }
      ] },
    { id: 'g-vih', topic: 'vih', subj: 'infecto',
      title: 'Tres semanas sin aire', place: 'Urgencias',
      patient: { name: 'Rubén', age: 32, sex: 'H', skin: '#D9A07A', hair: '#2A1A12', gown: '#5EEAD4' },
      intro: 'Tos seca, fiebre y disnea progresiva por 3 semanas. Bajó 7 kg. Candidiasis oral. Nunca se ha hecho prueba de VIH.',
      extra: { label: 'CD4', unit: '' },
      start: { FC: 112, PAS: 118, PAD: 72, SpO2: 86, FR: 28, X: '?' },
      nodes: [
        { tag: 'Llegada', ecg: 'tachy',
          text: 'Rx con vidrio despulido bilateral. LDH 520. Prueba de 4a generación positiva.',
          q: '¿Qué sospechas y qué pides?',
          A: { t: 'Pneumocystis: gasometría, CD4 y muestra (esputo inducido o lavado)', ok: true, res: 'PaO2 62. CD4 de 45.', vit: { X: 45 } },
          B: { t: 'Neumonía típica: ceftriaxona + azitromicina y alta', ok: false, res: 'Regresa en 48 h con SpO2 de 80%.', vit: { SpO2: 80 } },
          why: 'VIH con disnea progresiva, LDH alta e infiltrado bilateral: Pneumocystis.' },
        { tag: 'Tratamiento', ecg: 'tachy',
          text: 'PaO2 62 mmHg.',
          q: '¿Qué indicas?',
          A: { t: 'TMP-SMX 21 días solo', ok: false, res: 'Al día 3 empeora: la muerte del hongo inflama el pulmón.', vit: { SpO2: 82 } },
          B: { t: 'Prednisona y TMP-SMX 21 días', ok: true, res: 'Mejora la oxigenación al día 4.', vit: { SpO2: 93, FR: 20 } },
          why: 'Con PaO2 menor de 70, la prednisona va antes o con el TMP-SMX.' },
        { tag: 'Día 10', ecg: 'normal', vit: { FC: 90, SpO2: 95, FR: 18 },
          text: 'Mejorando. Sin TB ni criptococo.',
          q: '¿Cuándo inicia antirretrovirales?',
          A: { t: 'Ya, dentro de las 2 semanas: bictegravir/TAF/FTC', ok: true, res: 'Inicia TAR y se programa carga viral en 4 semanas.' },
          B: { t: 'Hasta terminar los 21 días y que los CD4 suban', ok: false, res: 'Los CD4 no suben sin TAR: lo expones a más oportunistas.' },
          why: 'En PCP el TAR se inicia en las primeras 2 semanas; solo se espera en criptococo y TB meníngea.' },
        { tag: 'Al egreso', ecg: 'normal', vit: { FC: 82, PAS: 120, PAD: 76, SpO2: 97, FR: 16 },
          text: 'CD4 de 45. Toxoplasma IgG positiva.',
          q: '¿Qué profilaxis deja?',
          A: { t: 'TMP-SMX diario (cubre Pneumocystis y toxoplasma) y fondo de ojo', ok: true, res: 'El fondo de ojo no muestra retinitis.' },
          B: { t: 'Ninguna: ya está con TAR', ok: false, res: 'Con CD4 de 45 sigue en riesgo hasta que pasen de 200 por 3 meses.' },
          why: 'Profilaxis secundaria de PCP y primaria de toxoplasma con TMP-SMX; CD4 menor de 50: revisar retina.' }
      ] },
    { id: 'g-endocarditis', topic: 'endocarditis', subj: 'infecto',
      title: 'El soplo que cambia', place: 'Piso de medicina interna',
      patient: { name: 'Saúl', age: 29, sex: 'H', skin: '#D9A07A', hair: '#2A1A12', gown: '#5EEAD4' },
      intro: 'Usa heroína IV. Dos semanas con fiebre, tos y dolor pleurítico. Soplo holosistólico tricuspídeo. Nódulos pulmonares cavitados.',
      extra: { label: 'T', unit: '°C' },
      start: { FC: 116, PAS: 104, PAD: 62, SpO2: 93, FR: 24, X: 39.4 },
      nodes: [
        { tag: 'Ingreso', ecg: 'tachy',
          text: 'Sospecha de endocarditis derecha.',
          q: '¿Qué haces primero?',
          A: { t: '3 sets de hemocultivos de sitios distintos, luego vancomicina', ok: true, res: 'Los 3 crecen S. aureus resistente a meticilina.' },
          B: { t: 'Vancomicina ya y cultivos mañana', ok: false, res: 'Cultivos negativos: no sabrás el germen ni su sensibilidad.' },
          why: 'Los hemocultivos van antes del antibiótico; en el estable se separan por al menos 1 hora.' },
        { tag: 'Día 2', ecg: 'tachy', vit: { X: 38.9 },
          text: 'Eco transtorácico: vegetación tricuspídea de 14 mm, sin insuficiencia cardiaca.',
          q: '¿Cumple Duke?',
          A: { t: 'Sí: 2 criterios mayores, endocarditis definitiva', ok: true, res: 'Antibiótico dirigido por 6 semanas.' },
          B: { t: 'No: falta el eco transesofágico', ok: false, res: 'Ya hay hemocultivos típicos e imagen: es definitiva.' },
          why: 'Hemocultivos típicos y vegetación en eco = 2 mayores.' },
        { tag: 'Día 9', ecg: 'tachy', vit: { X: 38.6 },
          text: 'Sigue con fiebre y los hemocultivos de control continúan positivos a pesar de niveles adecuados de vancomicina.',
          q: '¿Qué haces?',
          A: { t: 'Cambiar a daptomicina y valorar cirugía por bacteriemia persistente', ok: true, res: 'Se negativizan los cultivos; cirugía decide vigilancia estrecha.', vit: { X: 37.4, FC: 94 } },
          B: { t: 'Agregar aspirina para reducir la vegetación', ok: false, res: 'La aspirina no reduce embolias y aumenta el sangrado.' },
          why: 'Bacteriemia de más de 7 días es infección no controlada: cambio de antibiótico e indicación quirúrgica.' },
        { tag: 'Semana 6', ecg: 'normal', vit: { FC: 82, PAS: 118, PAD: 72, SpO2: 97, FR: 16, X: 36.8 },
          text: 'Completó el tratamiento. Quiere irse a casa.',
          q: '¿Qué más necesita?',
          A: { t: 'Programa de reducción de daños, prueba de VIH y hepatitis, y vacuna de hepatitis B', ok: true, res: 'VIH negativo, VHC positivo: se refiere para tratamiento.' },
          B: { t: 'Solo alta', ok: false, res: 'Regresa a los 4 meses con una segunda endocarditis.' },
          why: 'La endocarditis previa es el mayor riesgo de otra; atiende la causa y las infecciones asociadas.' }
      ] }
  ]
};
