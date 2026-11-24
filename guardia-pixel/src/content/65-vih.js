// Tema 51 · VIH (Infectología, semana 7)
const T = { topic: 'vih', subj: 'infecto' };
const q = (o) => ({ ...T, ...o });
const SRC = { short: 'De tu Guía Infecto', vs: 'tu guía', name: 'Guía Infecto · Ximena Cors Cepeda (EMIS 5)', url: 'https://docs.google.com/document/d/1z8GAmFxqoyJtS21XWHwMlvykDNaoEMW07PgJh45aMwY/edit' };

export default {
  lessons: {
    vih: {
      hook: 'Tamiza a todos (13–65 años) con prueba de 4ª generación. Trata a todos desde el diagnóstico, de preferencia el mismo día, con 2 inhibidores de la transcriptasa + un inhibidor de integrasa. Los CD4 dicen qué oportunistas esperar y qué profilaxis dar.',
      nn: [], yt: 'HIV diagnosis ART opportunistic infections CD4 prophylaxis',
      video: [
        { ch: 'El virus y su historia natural', sc: [
          { v: { k: 'title', t: 'VIH', s: 'Semana 7 · Infectología' },
            say: 'Semana siete: el VIH. Hoy es una enfermedad crónica controlable: una persona con tratamiento y carga viral indetectable vive casi lo mismo que cualquiera y no transmite el virus. En este video vas a aprender a diagnosticarlo, a iniciar el tratamiento y a predecir los oportunistas con la cuenta de CD4.' },
          { v: { k: 'case', t: 'Tos y falta de aire', p: { name: 'Rubén', age: 32, sex: 'H', skin: '#D9A07A', hair: '#2A1A12', gown: '#5EEAD4' }, text: 'Tres semanas con tos seca, fiebre y disnea progresiva. Bajó 7 kg. Algodoncillo en la boca. Nunca se ha hecho prueba de VIH.', vit: { SpO2: '86%', FR: '28', LDH: '520' } },
            say: 'Rubén tiene treinta y dos años y tres semanas con tos seca, fiebre y falta de aire que empeora. Bajó siete kilos y tiene placas blancas en la boca. Satura ochenta y seis por ciento y su deshidrogenasa láctica está alta. Nunca se ha hecho una prueba de VIH.' },
          { v: { k: 'flow', t: 'Historia natural', steps: ['Infección aguda: 2 a 4 semanas', 'Cuadro tipo mononucleosis, carga viral altísima', 'Latencia clínica: años', 'CD4 bajan poco a poco', 'SIDA: CD4 menor de 200 o enfermedad definitoria'] },
            say: 'El VIH infecta a los linfocitos CD4. Dos a cuatro semanas después del contagio aparece la infección aguda: fiebre, faringitis, ganglios, exantema y úlceras orales, como una mononucleosis, con carga viral altísima. Luego vienen años de latencia sin síntomas mientras los CD4 bajan. Se llama SIDA cuando los CD4 bajan de doscientos o aparece una enfermedad definitoria.' },
          { v: { k: 'list', t: 'A quién hacerle la prueba', items: ['Todos de 13 a 65 años, al menos una vez', 'Anual si hay riesgo', 'Toda embarazada', 'Todo paciente con TB, ITS o hepatitis', 'Síntomas: candidiasis oral, zóster, pérdida de peso'] },
            say: 'La prueba se ofrece a todas las personas de trece a sesenta y cinco años al menos una vez, cada año si hay riesgo, a toda embarazada, a todo paciente con tuberculosis, infecciones de transmisión sexual o hepatitis, y a quien tenga datos como candidiasis oral, herpes zóster o pérdida de peso.' }
        ] },
        { ch: 'Diagnóstico y estudio basal', sc: [
          { v: { k: 'flow', t: 'Algoritmo diagnóstico', steps: ['Prueba de 4a generación: anticuerpos + p24', 'Positiva: inmunoensayo diferencial VIH-1 o 2', 'Indeterminado: carga viral', 'Sospecha de aguda: carga viral directa'] },
            say: 'El diagnóstico empieza con una prueba de cuarta generación, que detecta anticuerpos y el antígeno p veinticuatro, con un periodo de ventana de dos a tres semanas. Si es positiva, se confirma con un inmunoensayo que distingue VIH uno de VIH dos. Si ese es indeterminado, se mide la carga viral. Y si sospechas infección aguda, pide carga viral directamente, porque los anticuerpos aún no aparecen.' },
          { v: { k: 'list', t: 'Estudio basal', items: ['CD4 y carga viral', 'Genotipo de resistencia', 'HLA-B*5701 antes de abacavir', 'Hepatitis B y C, sífilis, TB', 'Toxoplasma IgG, función renal y hepática'] },
            say: 'Al diagnosticar se piden CD4 y carga viral, un genotipo de resistencia, HLA B cincuenta y siete cero uno antes de usar abacavir, serologías de hepatitis B y C, sífilis, prueba de tuberculosis, toxoplasma, y función renal y hepática.' },
          { v: { k: 'quiz', q: 'Fiebre, faringitis y exantema 3 semanas después de una exposición. Prueba de 4a generación negativa. ¿Qué haces?', opts: ['Descartar VIH', 'Pedir carga viral', 'Repetir en 6 meses'], a: 1 },
            say: 'Pausa. Paciente con fiebre, faringitis y exantema tres semanas después de una exposición de riesgo. La prueba de cuarta generación sale negativa. ¿Qué haces?',
            exp: 'Pedir carga viral. En la infección aguda la prueba puede estar en periodo de ventana, pero el ARN viral ya está altísimo. Si se confirma, se inicia tratamiento de inmediato.' }
        ] },
        { ch: 'Tratamiento antirretroviral', sc: [
          { v: { k: 'big', h: 'Tratamiento antirretroviral', t: 'A todos, ya', s: 'Sin importar los CD4, idealmente el mismo día del diagnóstico. Meta: carga viral indetectable en 3 a 6 meses.' },
            say: 'El tratamiento antirretroviral se da a todas las personas con VIH, sin importar sus CD4, idealmente el mismo día del diagnóstico. La meta es carga viral indetectable, menor de cincuenta copias, a los tres a seis meses. Indetectable es igual a intransmisible.' },
          { v: { k: 'list', t: 'Esquemas preferidos', items: ['Bictegravir + TAF + emtricitabina', 'Dolutegravir + 2 ITRAN', 'Dolutegravir + lamivudina (sin VHB)', 'Base: inhibidor de integrasa'] },
            say: 'Los esquemas preferidos se basan en un inhibidor de integrasa: bictegravir con tenofovir alafenamida y emtricitabina en una sola pastilla, o dolutegravir con dos inhibidores nucleósidos. Dolutegravir con lamivudina sirve si no hay hepatitis B ni resistencia.' },
          { v: { k: 'vs', a: 'Fármaco', b: 'Efecto que preguntan', rows: [['Abacavir', 'Hipersensibilidad con HLA-B*5701', '—'], ['Tenofovir TDF', 'Riñón y hueso', '—'], ['Zidovudina', 'Anemia', 'Macrocitosis'], ['Efavirenz', 'Sueños vívidos, psiquiátrico', '—'], ['Inhibidores de proteasa', 'Dislipidemia, interacciones', 'Atazanavir: bilirrubina'], ['Integrasa', 'Aumento de peso, insomnio', '—']] },
            say: 'Los efectos adversos que preguntan: abacavir, reacción de hipersensibilidad grave si el paciente tiene HLA B cincuenta y siete cero uno. Tenofovir disoproxilo, daño renal y óseo. Zidovudina, anemia. Efavirenz, sueños vívidos y síntomas psiquiátricos. Inhibidores de proteasa, dislipidemia e interacciones, y el atazanavir sube la bilirrubina indirecta. Los inhibidores de integrasa, aumento de peso.' },
          { v: { k: 'list', t: 'Cuándo esperar para iniciar', items: ['Criptococo meníngeo: 4 a 6 semanas', 'TB meníngea: esperar', 'TB no meníngea: en 2 semanas', 'Resto: de inmediato', 'Vigila el SIRI'] },
            say: 'Solo se espera en dos casos: la meningitis por criptococo, de cuatro a seis semanas, y la tuberculosis meníngea, porque la inflamación de la reconstitución inmune puede ser mortal. En la tuberculosis no meníngea, se inicia en las primeras dos semanas. Ese empeoramiento paradójico al recuperar CD4 se llama síndrome inflamatorio de reconstitución inmune.' }
        ] },
        { ch: 'Oportunistas por CD4', sc: [
          { v: { k: 'vs', a: 'CD4', b: 'Oportunistas', rows: [['Menos de 500', 'TB, candidiasis oral, zóster', 'Kaposi'], ['Menos de 200', 'Pneumocystis', 'Histoplasma'], ['Menos de 100', 'Toxoplasma, criptococo', 'Candidiasis esofágica'], ['Menos de 50', 'MAC, CMV', 'Linfoma del SNC, LMP']] },
            say: 'Los oportunistas siguen a los CD4. Por debajo de quinientos: tuberculosis, candidiasis oral, herpes zóster y sarcoma de Kaposi. Por debajo de doscientos: Pneumocystis e histoplasma. Por debajo de cien: toxoplasmosis cerebral, criptococo y candidiasis esofágica. Y por debajo de cincuenta: complejo Mycobacterium avium, citomegalovirus con retinitis, linfoma primario del sistema nervioso y leucoencefalopatía multifocal progresiva.' },
          { v: { k: 'list', t: 'Neumonía por Pneumocystis', items: ['Disnea progresiva, tos seca, hipoxemia', 'LDH alta', 'Rx: vidrio despulido bilateral', 'TMP-SMX 21 días', 'Prednisona si PaO2 menor de 70'] },
            say: 'La neumonía por Pneumocystis es lo que tiene Rubén: disnea progresiva, tos seca, hipoxemia que empeora al caminar, deshidrogenasa láctica alta y vidrio despulido bilateral. Se trata con trimetoprim sulfametoxazol por veintiún días, y si la presión de oxígeno es menor de setenta, prednisona antes del antibiótico.' },
          { v: { k: 'vs', a: 'Profilaxis', b: 'Cuándo', rows: [['TMP-SMX contra Pneumocystis', 'CD4 menor de 200', 'Suspender con CD4 mayor de 200 por 3 meses'], ['TMP-SMX contra Toxoplasma', 'CD4 menor de 100 + IgG positiva', '—'], ['Azitromicina contra MAC', 'CD4 menor de 50', 'Solo si no inicia TAR']] },
            say: 'La profilaxis primaria: trimetoprim sulfametoxazol con CD4 menores de doscientos contra Pneumocystis, que también protege contra toxoplasma con CD4 menores de cien si la IgG es positiva. Azitromicina contra Mycobacterium avium solo si los CD4 son menores de cincuenta y no se inicia tratamiento antirretroviral.' },
          { v: { k: 'quiz', q: 'VIH con CD4 de 60: cefalea, fiebre y varias lesiones con realce en anillo en la RM. ¿Qué es?', opts: ['Linfoma primario del SNC', 'Toxoplasmosis cerebral', 'Absceso por neumococo'], a: 1 },
            say: 'Pausa. Paciente con VIH y CD4 de sesenta, con cefalea, fiebre y varias lesiones con realce en anillo en la resonancia. ¿Qué es lo más probable?',
            exp: 'Toxoplasmosis cerebral: lesiones múltiples con realce en anillo y CD4 menores de cien. Se trata con pirimetamina, sulfadiazina y leucovorina. El linfoma suele ser una lesión única periventricular, con virus de Epstein Barr en el líquido.' }
        ] },
        { ch: 'Prevención y cierre', sc: [
          { v: { k: 'vs', a: 'PrEP', b: 'PEP', rows: [['Qué es', 'Antes de exponerse', 'Después de una exposición'], ['Fármaco', 'Tenofovir + emtricitabina o cabotegravir', '3 fármacos'], ['Cuándo', 'Diario o a demanda', 'Menos de 72 h, mejor 2 h'], ['Duración', 'Mientras haya riesgo', '28 días']] },
            say: 'La prevención: profilaxis previa a la exposición, PrEP, con tenofovir y emtricitabina diario o cabotegravir inyectable, para personas con riesgo continuo y prueba negativa. Y profilaxis posterior a la exposición, PEP, que se inicia en menos de setenta y dos horas, idealmente en dos, con tres fármacos por veintiocho días.' },
          { v: { k: 'list', t: 'Rubén: final del caso', items: ['Prueba de 4a generación positiva; CD4 de 45', 'Pneumocystis: TMP-SMX + prednisona', 'TAR en 2 semanas', 'Profilaxis con TMP-SMX después', 'Fondo de ojo por CD4 menor de 50'] },
            say: 'La prueba de Rubén es positiva y sus CD4 son de cuarenta y cinco. Tiene neumonía por Pneumocystis: recibe trimetoprim sulfametoxazol con prednisona porque su presión de oxígeno es de sesenta y dos. Inicia antirretrovirales en las primeras dos semanas, queda con profilaxis y, por tener CD4 menores de cincuenta, le revisan el fondo de ojo buscando citomegalovirus.' },
          { v: { k: 'tip', kind: 'trap', t: 'Pneumocystis con PaO2 <70 o gradiente A-a ≥35: la prednisona va ANTES o junto con el TMP-SMX.' },
            say: 'Trampa: olvidar la prednisona en la neumonía por Pneumocystis con hipoxemia. Si la presión de oxígeno es menor de setenta, el esteroide va antes o junto con el antibiótico, porque la muerte de los hongos inflama el pulmón.' },
          { v: { k: 'mnemo', t: '500 · 200 · 100 · 50', d: 'TB y zóster · Pneumocystis · Toxo y criptococo · MAC y CMV. TAR a todos, ya; esperar solo en criptococo y TB meníngea.' },
            say: 'Llévate los cortes: quinientos, tuberculosis y zóster; doscientos, Pneumocystis; cien, toxoplasma y criptococo; cincuenta, micobacterias atípicas y citomegalovirus. Ahora mueve los CD4 en el simulador del taller y juega la guardia de Rubén.' }
        ] }
      ],
      sections: [
        { h: 'Historia natural y diagnóstico', html: `
<ul>
<li>Retrovirus que infecta CD4 (correceptores CCR5/CXCR4). <b>Infección aguda</b> (2–4 semanas): síndrome tipo mononucleosis (fiebre, faringitis, adenopatías, rash, úlceras orales) con carga viral muy alta. Latencia clínica años. <b>SIDA</b>: CD4 &lt;200 o enfermedad definitoria.</li>
<li><b>Tamizaje</b>: todos de 13–65 años al menos una vez; anual en riesgo (HSH, trabajo sexual, drogas IV, parejas con VIH); toda embarazada; todo paciente con TB, ITS o hepatitis.</li>
<li><b>Prueba de 4ª generación</b> (anticuerpos + antígeno p24; ventana ~2–3 semanas) → positiva: <b>inmunoensayo diferencial VIH-1/2</b>; si es indeterminado: <b>carga viral (ARN)</b>. Sospecha de infección aguda: carga viral.</li>
<li>Estudio basal: CD4, carga viral, <b>genotipo de resistencia</b>, HLA-B*5701 (antes de abacavir), VHB, VHC, sífilis, TB (IGRA/PPD), toxoplasma IgG, función renal y hepática, lípidos, glucosa, EGO, embarazo.</li>
</ul>` },
        { h: 'Tratamiento antirretroviral', html: `
<ul>
<li><b>A todos</b>, independientemente de los CD4, lo antes posible (mismo día si es posible).</li>
<li>Esquemas preferidos: <b>bictegravir/tenofovir alafenamida/emtricitabina</b> o <b>dolutegravir + 2 ITRAN</b> (TAF o TDF + FTC/3TC); dolutegravir/lamivudina si no hay VHB ni resistencia y CV &lt;500,000.</li>
<li>Familias: <b>ITRAN</b> (-vudina/-citabina, tenofovir, abacavir: <b>hipersensibilidad con HLA-B*5701</b>; tenofovir TDF: renal y hueso; zidovudina: anemia), <b>ITRNN</b> (efavirenz: sueños vívidos, neuropsiquiátrico; nevirapina: hepatotoxicidad, SJS), <b>IP</b> (-navir con ritonavir/cobicistat: dislipidemia, interacciones; atazanavir: bilirrubina indirecta), <b>inhibidores de integrasa</b> (-gravir: aumento de peso, insomnio), inhibidores de entrada (maraviroc).</li>
<li>Meta: <b>carga viral indetectable</b> (&lt;50) a los 3–6 meses; I = I (indetectable = intransmisible).</li>
<li>Síndrome inflamatorio de reconstitución inmune (SIRI): empeoramiento paradójico de una infección al recuperar CD4; continuar TAR ± esteroides. Retrasar TAR en <b>criptococo (4–6 semanas)</b> y <b>TB meníngea</b>; en TB no meníngea iniciar en 2 semanas (si CD4 &lt;50) u 8 semanas.</li>
<li>Rifampicina interactúa con IP y bictegravir (usar dolutegravir dos veces al día o rifabutina).</li>
</ul>` },
        { h: 'Oportunistas y profilaxis por CD4', html: `
<div class="tablewrap"><table class="mini">
<tr><th>CD4</th><th>Infecciones</th><th>Profilaxis primaria</th></tr>
<tr><td>&lt;500</td><td>TB, candidiasis oral, zóster, Kaposi (VHH-8), leucoplasia vellosa (VEB)</td><td>TB latente: isoniazida/rifapentina</td></tr>
<tr><td><b>&lt;200</b></td><td><b><i>Pneumocystis</i></b> (disnea, hipoxemia, LDH alta, vidrio despulido), histoplasma, coccidioides</td><td><b>TMP-SMX</b> (alternativas: dapsona, atovacuona)</td></tr>
<tr><td><b>&lt;100</b></td><td><b>Toxoplasmosis cerebral</b> (múltiples lesiones en anillo), <b>criptococo</b>, candidiasis esofágica, criptosporidiosis</td><td>TMP-SMX si toxo IgG +</td></tr>
<tr><td><b>&lt;50</b></td><td><b>MAC</b> diseminado (fiebre, diarrea, FA alta), <b>CMV</b> (retinitis, colitis), linfoma primario del SNC (VEB), LMP (virus JC)</td><td>MAC: solo si no inicia TAR (azitromicina)</td></tr>
</table></div>
<ul>
<li><b>PCP</b>: TMP-SMX 21 días; <b>prednisona</b> si PaO₂ &lt;70 o gradiente A-a ≥35 (antes del antibiótico).</li>
<li>Toxoplasma: pirimetamina + sulfadiazina + leucovorina. CMV: ganciclovir/valganciclovir. Criptococo: anfotericina + flucitosina.</li>
<li>Suspender profilaxis de PCP cuando CD4 &gt;200 por ≥3 meses con TAR.</li>
</ul>` },
        { h: 'Prevención', html: `
<ul>
<li><b>PrEP</b>: tenofovir/emtricitabina diario (o a demanda en HSH), cabotegravir IM c/2 meses; requiere prueba de VIH negativa y seguimiento renal/ITS cada 3 meses.</li>
<li><b>PEP</b>: iniciar en <b>&lt;72 h</b> (idealmente &lt;2 h) tras exposición de riesgo; <b>28 días</b> de 3 fármacos (p. ej., bictegravir/TAF/FTC o dolutegravir + TDF/FTC).</li>
<li>Embarazo: TAR a toda embarazada (dolutegravir seguro), carga viral cercana al parto (cesárea si &gt;1000), zidovudina IV intraparto si CV alta, profilaxis al RN, evitar lactancia materna donde hay sucedáneos seguros.</li>
<li>Vacunas: inactivadas sí; vivas (triple viral, varicela) solo con CD4 ≥200.</li>
</ul>` },
        { h: 'Cómo lo preguntan en el examen', html: `
<ul>
<li>Prueba de 4ª generación positiva → <b>inmunoensayo diferencial</b>.</li>
<li>Síndrome tipo mono con exposición de riesgo y prueba negativa → <b>carga viral</b>.</li>
<li>CD4 150 → <b>TMP-SMX</b>.</li>
<li>Disnea, hipoxemia, vidrio despulido, PaO₂ 60 → PCP: <b>TMP-SMX + prednisona</b>.</li>
<li>Antes de abacavir → <b>HLA-B*5701</b>.</li>
<li>Pinchazo con aguja de paciente VIH+ → <b>PEP en &lt;72 h por 28 días</b>.</li>
</ul>` }
      ],
      mnemo: { t: 'CD4: 200 PCP · 100 Toxo/Cripto · 50 MAC/CMV', d: 'TMP-SMX con <200 (y toxo IgG+ con <100). TAR a todos, de inmediato, salvo criptococo y TB meníngea (esperar semanas).' },
      pearl: 'Indetectable = intransmisible: con carga viral suprimida sostenida, no hay transmisión sexual del VIH.',
      trap: 'En la neumonía por Pneumocystis con PaO₂ <70 mmHg el esteroide va antes o junto con el TMP-SMX: si se omite, aumenta la mortalidad.',
      guide: [
        'DHHS/IAS 2024: inicio rápido del TAR (mismo día) y esquemas con inhibidor de integrasa de 1ª línea; los ITRNN (efavirenz) ya no son preferidos.',
        'Tu guía menciona 2 ITRAN + ITRNN/IP/INI; el estándar actual es <b>INI + 2 ITRAN</b> o dolutegravir/lamivudina.'
      ],
      refs: [
        'Panel on Antiretroviral Guidelines for Adults and Adolescents. Guidelines for the use of antiretroviral agents in adults (DHHS), 2024.',
        'Gandhi RT, et al. Antiretroviral drugs for treatment and prevention of HIV: IAS-USA 2024 recommendations. JAMA 2025.',
        'Guidelines for the prevention and treatment of opportunistic infections in adults with HIV (CDC/NIH/IDSA), 2024.',
        'CDC. Updated guidelines for antiretroviral postexposure prophylaxis after sexual, injection drug use, or other nonoccupational exposures, 2025.'
      ]
    }
  },

  guias: {
    vih: { src: SRC,
      puntos: [
        'Síndrome retroviral agudo a las 2–6 semanas; latencia; SIDA con CD4 &lt;200 o enfermedades definitorias.',
        'CD4 &lt;500: TB, cándida, Kaposi; &lt;200: PCP, histo, coccidio; &lt;100: toxo, cripto; &lt;50: MAC, CMV, linfoma del SNC.',
        'Tamizaje 13–65 años; ELISA de 4ª generación (p24) → inmunoensayo VIH-1/2 → carga viral; CD4 y carga viral para seguimiento.',
        'PCP: TMP-SMX + prednisona si PaO₂ &lt;70 o gradiente &gt;35. Toxo: sulfadiazina + pirimetamina. Profilaxis: &lt;200 TMP-SMX, &lt;100 TMP-SMX (toxo), &lt;50 azitromicina (MAC).',
        'TAR a todos; PEP: tenofovir + emtricitabina 1 mes (+ un tercer fármaco).'
      ],
      ojo: ['La profilaxis de MAC con azitromicina ya <b>no se recomienda</b> si se inicia TAR de inmediato.', 'La PEP actual son <b>3 fármacos por 28 días</b> (no solo 2).'],
      cards: [['Leucoplasia vellosa oral', 'VEB; CD4 <500']] }
  },

  cards: [
    ['Tamizaje de VIH', 'Todos de 13–65 años al menos una vez'],
    ['Prueba de 4ª generación', 'Anticuerpos + antígeno p24'],
    ['Confirmación', 'Inmunoensayo diferencial VIH-1/2 (± carga viral)'],
    ['Infección aguda con prueba negativa', 'Carga viral'],
    ['Cuándo iniciar TAR', 'A todos, lo antes posible (mismo día)'],
    ['TAR preferido', 'INI (bictegravir/dolutegravir) + 2 ITRAN'],
    ['Antes de abacavir', 'HLA-B*5701'],
    ['CD4 <200', 'PCP → TMP-SMX'],
    ['CD4 <100', 'Toxoplasma, criptococo'],
    ['CD4 <50', 'MAC, CMV, linfoma del SNC'],
    ['PCP grave', 'TMP-SMX + prednisona si PaO₂ <70'],
    ['Toxoplasmosis cerebral', 'Lesiones múltiples en anillo; pirimetamina + sulfadiazina'],
    ['Retrasar TAR', 'Meningitis criptocócica y TB meníngea'],
    ['PEP', '<72 h, 3 fármacos, 28 días'],
    ['PrEP', 'Tenofovir/emtricitabina diario (o cabotegravir IM)'],
    ['I = I', 'Indetectable = intransmisible']
  ],

  questions: [
    q({ id: 'vih-01', dif: 1, stem: 'Hombre de 30 años con prueba de VIH de 4ª generación positiva. ¿Siguiente paso?', opts: ['Iniciar TAR sin confirmar', 'Inmunoensayo diferencial VIH-1/VIH-2', 'Western blot obligatorio', 'Repetir en 6 meses', 'CD4 solamente'], ans: 1,
      exp: 'Algoritmo actual: 4ª generación → inmunoensayo diferencial → carga viral si es discordante.', why: ['Se confirma primero (aunque puede iniciarse pronto).', '', 'Ya no es el estándar.', 'Retrasa.', 'No confirma.'], ref: 'CDC 2024' }),
    q({ id: 'vih-02', dif: 2, stem: 'Joven con fiebre, faringitis, rash y adenopatías 3 semanas después de sexo sin protección; prueba de 4ª generación negativa. ¿Qué pides?', opts: ['Nada', 'Carga viral de VIH (ARN)', 'Western blot', 'CD4', 'Monospot solo'], ans: 1,
      exp: 'Sospecha de infección aguda en periodo de ventana: la carga viral es positiva antes.', why: ['Riesgo de perder el diagnóstico.', '', 'Menos sensible.', 'No diagnostica.', 'No descarta VIH.'], ref: 'CDC 2024' }),
    q({ id: 'vih-03', dif: 2, stem: 'Paciente con VIH recién diagnosticado, CD4 520, asintomático. ¿Cuándo inicias TAR?', opts: ['Cuando CD4 <350', 'Lo antes posible (inmediatamente)', 'Cuando CD4 <200', 'Nunca', 'Solo si tiene síntomas'], ans: 1,
      exp: 'TAR a todos independientemente de los CD4 (START, TEMPRANO).', why: ['Criterio antiguo.', '', 'Criterio antiguo.', 'No.', 'No.'], ref: 'DHHS 2024' }),
    q({ id: 'vih-04', dif: 2, stem: 'Paciente con VIH y CD4 de 140. ¿Qué profilaxis indicas?', opts: ['Azitromicina', 'TMP-SMX', 'Fluconazol', 'Valganciclovir', 'Ninguna'], ans: 1,
      exp: 'CD4 <200: profilaxis contra Pneumocystis con TMP-SMX.', why: ['MAC (<50) y solo si no inicia TAR.', '', 'No de rutina.', 'No de rutina.', 'Requiere.'], ref: 'CDC/NIH 2024' }),
    q({ id: 'vih-05', dif: 3, stem: 'Paciente con VIH (CD4 60), disnea progresiva, tos seca, PaO₂ 58, LDH alta y vidrio despulido bilateral. ¿Tratamiento?', opts: ['Ceftriaxona + azitromicina', 'TMP-SMX + prednisona', 'Anfotericina', 'Ganciclovir', 'RIPE'], ans: 1,
      exp: 'PCP con PaO₂ <70: esteroide + TMP-SMX 21 días.', why: ['No cubre PCP.', '', 'No.', 'No.', 'No.'], ref: 'CDC/NIH 2024' }),
    q({ id: 'vih-06', dif: 2, stem: 'Paciente con VIH (CD4 35), cefalea, hemiparesia y múltiples lesiones con realce en anillo en ganglios basales; IgG de toxoplasma positiva. ¿Tratamiento?', opts: ['Esteroides solos', 'Pirimetamina + sulfadiazina + leucovorina', 'Radioterapia', 'Biopsia inmediata', 'Aciclovir'], ans: 1,
      exp: 'Toxoplasmosis cerebral: tratamiento empírico; si no mejora en 10–14 días, biopsia (linfoma).', why: ['No.', '', 'No.', 'Solo si no responde.', 'No.'], ref: 'CDC/NIH 2024' }),
    q({ id: 'vih-07', dif: 2, stem: 'Antes de iniciar abacavir, ¿qué estudio debes pedir?', opts: ['G6PD', 'HLA-B*5701', 'TPMT', 'HLA-B27', 'Genotipo de CYP2C19'], ans: 1,
      exp: 'HLA-B*5701 positivo = alto riesgo de hipersensibilidad grave a abacavir.', why: ['Dapsona/primaquina.', '', 'Azatioprina.', 'Espondiloartritis.', 'Clopidogrel.'], ref: 'DHHS 2024' }),
    q({ id: 'vih-08', dif: 2, stem: 'Enfermera con pinchazo de aguja hueca de un paciente con VIH con carga viral detectable hace 2 horas. ¿Conducta?', opts: ['Nada', 'PEP con 3 antirretrovirales por 28 días, iniciar ya', 'Esperar la prueba del paciente fuente 1 semana', 'Solo vacuna', 'PEP solo si seroconvierte'], ans: 1,
      exp: 'Iniciar PEP lo antes posible (<72 h) por 28 días; prueba basal y seguimiento.', why: ['Riesgo de infección.', '', 'Retrasa.', 'No existe vacuna.', 'Tarde.'], ref: 'CDC 2025' }),
    q({ id: 'vih-09', dif: 2, stem: 'Paciente con VIH y meningitis criptocócica recién diagnosticada. ¿Cuándo iniciar TAR?', opts: ['Inmediatamente', 'Diferido 4–6 semanas tras iniciar antifúngico', 'Nunca', 'Al año', 'Antes del antifúngico'], ans: 1,
      exp: 'El TAR inmediato aumentó la mortalidad por SIRI en meningitis criptocócica (COAT).', why: ['Más mortalidad.', '', 'No.', 'No.', 'No.'], ref: 'CDC/NIH 2024' }),
    q({ id: 'vih-10', dif: 2, stem: 'Paciente con VIH que inicia TAR y a las 3 semanas presenta fiebre y crecimiento de adenopatías con TB conocida en tratamiento; CD4 subieron. ¿Diagnóstico?', opts: ['Fracaso del antifímico', 'Síndrome inflamatorio de reconstitución inmune', 'Linfoma', 'Resistencia al TAR', 'Alergia'], ans: 1,
      exp: 'SIRI: continuar TAR y antifímico; AINE o prednisona si es grave.', why: ['Menos probable.', '', 'Menos probable.', 'Los CD4 subieron.', 'No.'], ref: 'CDC/NIH 2024' }),
    q({ id: 'vih-11', dif: 2, stem: 'Paciente con VIH, CD4 30, fiebre, diarrea, anemia, FA alta y hepatoesplenomegalia; hemocultivo para micobacterias positivo. ¿Agente y tratamiento?', opts: ['TB; RIPE', 'MAC; claritromicina + etambutol', 'CMV; ganciclovir', 'Histoplasma; anfotericina', 'Salmonella; cipro'], ans: 1,
      exp: 'Mycobacterium avium complex diseminado con CD4 <50.', why: ['Menos probable con este cuadro.', '', 'No.', 'Diferencial, pero el hemocultivo de micobacterias apunta a MAC.', 'No.'], ref: 'CDC/NIH 2024' }),
    q({ id: 'vih-12', dif: 2, stem: 'Paciente con VIH (CD4 25) con visión borrosa y retinitis con hemorragias y exudados (“queso y salsa de tomate”). ¿Agente?', opts: ['Toxoplasma', 'Citomegalovirus', 'Cándida', 'VHS', 'VZV'], ans: 1,
      exp: 'Retinitis por CMV: ganciclovir/valganciclovir.', why: ['Coriorretinitis distinta.', '', 'Endoftalmitis.', 'Necrosis retiniana aguda.', 'Necrosis retiniana.'], ref: 'CDC/NIH 2024' }),
    q({ id: 'vih-13', dif: 1, stem: '¿Cuál es el esquema antirretroviral inicial preferido en la mayoría de los pacientes?', opts: ['Efavirenz + 2 ITRAN', 'Inhibidor de integrasa (bictegravir o dolutegravir) + 2 ITRAN', 'Zidovudina sola', 'Lopinavir/ritonavir solo', 'Maraviroc solo'], ans: 1,
      exp: 'Alta eficacia, barrera genética y buena tolerancia.', why: ['Ya no es preferido.', '', 'Monoterapia: resistencia.', 'No.', 'No.'], ref: 'DHHS 2024' }),
    q({ id: 'vih-14', dif: 2, stem: 'Hombre VIH negativo con pareja VIH positiva con carga viral detectable. ¿Qué ofreces?', opts: ['Nada', 'PrEP con tenofovir/emtricitabina (y prueba de VIH cada 3 meses)', 'PEP mensual', 'Vacuna', 'Aciclovir'], ans: 1,
      exp: 'PrEP reduce >90 % el riesgo; requiere seguimiento.', why: ['Riesgo alto.', '', 'No es así.', 'No existe.', 'No.'], ref: 'CDC 2021' }),
    q({ id: 'vih-15', dif: 2, stem: 'Paciente con VIH en TAR con carga viral indetectable por 1 año. ¿Riesgo de transmisión sexual?', opts: ['Alto', 'Prácticamente nulo (I = I)', 'Igual que sin TAR', 'Solo por sexo oral', 'Depende de los CD4'], ans: 1,
      exp: 'Indetectable = intransmisible (PARTNER, HPTN 052).', why: ['No.', '', 'No.', 'No.', 'Depende de la carga viral.'], ref: 'DHHS 2024' }),
    q({ id: 'vih-16', dif: 2, stem: 'Paciente con VIH con lesiones violáceas en paladar y piel. ¿Agente asociado?', opts: ['VEB', 'VHH-8 (sarcoma de Kaposi)', 'Bartonella', 'VPH', 'CMV'], ans: 1,
      exp: 'Sarcoma de Kaposi por VHH-8; mejora con TAR. Diferencial: angiomatosis bacilar (Bartonella).', why: ['Leucoplasia vellosa/linfoma.', '', 'Angiomatosis bacilar (puede parecerse).', 'Verrugas y cáncer.', 'No.'], ref: 'CDC/NIH 2024' }),
    q({ id: 'vih-17', dif: 2, stem: 'Embarazada con VIH recién diagnosticado en el 2º trimestre. ¿Conducta?', opts: ['Esperar al parto', 'Iniciar TAR de inmediato (dolutegravir es seguro)', 'Interrumpir el embarazo', 'Solo zidovudina en el parto', 'Nada'], ans: 1,
      exp: 'El TAR materno reduce la transmisión vertical a <1 %.', why: ['Riesgo de transmisión.', '', 'No.', 'Insuficiente.', 'No.'], ref: 'DHHS 2024' }),
    q({ id: 'vih-18', dif: 2, stem: 'Paciente con VIH y TB pulmonar (no meníngea) con CD4 de 30. ¿Cuándo inicias TAR?', opts: ['Después de terminar el antifímico', 'En las primeras 2 semanas de tratamiento antifímico', 'A los 6 meses', 'Nunca', 'Antes del antifímico'], ans: 1,
      exp: 'Con CD4 <50 se inicia en 2 semanas (reduce mortalidad); con CD4 más altos, hasta 8 semanas.', why: ['Más mortalidad.', '', 'No.', 'No.', 'No.'], ref: 'DHHS 2024' }),
    q({ id: 'vih-19', dif: 2, stem: 'Paciente con VIH (CD4 40) con déficits neurológicos progresivos, lesiones de sustancia blanca sin realce ni efecto de masa. ¿Diagnóstico?', opts: ['Toxoplasmosis', 'Leucoencefalopatía multifocal progresiva (virus JC)', 'Linfoma', 'Absceso', 'Criptococoma'], ans: 1,
      exp: 'LMP: desmielinización por virus JC; tratamiento: TAR.', why: ['Realce en anillo.', '', 'Realce.', 'Realce.', 'No.'], ref: 'CDC/NIH 2024' }),
    q({ id: 'vih-20', dif: 1, stem: '¿Qué valor de CD4 define SIDA?', opts: ['<500', '<200 (o enfermedad definitoria)', '<350', '<1000', '<50'], ans: 1,
      exp: 'CD4 <200 o una enfermedad definitoria de SIDA.', why: ['No.', '', 'No.', 'No.', 'No.'], ref: 'CDC 2024' })
  ]
};
