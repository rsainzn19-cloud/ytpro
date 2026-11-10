// Tema 32 · Cetoacidosis diabética y estado hiperglucémico hiperosmolar (Endocrinología, semana 5)
const T = { topic: 'cad', subj: 'endo' };
const q = (o) => ({ ...T, ...o });
const ENDO = { short: 'De tu Guía Endocrino', vs: 'tu guía', name: 'Guía Endocrino · Ximena Cors Cepeda (EMIS 5)', url: 'https://docs.google.com/document/d/1ng1BpGOd1JywQaChMt0YWLQIRemXzi5hyUV_XVmYpsM/edit' };

export default {
  lessons: {
    cad: {
      hook: 'Las dos urgencias hiperglucémicas: la cetoacidosis (falta TODA la insulina: cetonas y acidosis en horas) y el estado hiperosmolar (queda algo de insulina: glucosa altísima y deshidratación en días). El tratamiento es el mismo esqueleto: líquidos, potasio, insulina.',
      yt: 'diabetic ketoacidosis hyperosmolar hyperglycemic state management',
      nn: [],
      video: [
        {
          ch: "Dos crisis, un esqueleto",
          sc: [
            {
              v: {
                k: "title",
                t: "Cetoacidosis y estado hiperosmolar",
                s: "Semana 5 · Endocrinología"
              },
              say: "Semana cinco: las urgencias de la diabetes. La cetoacidosis y el estado hiperosmolar. Son distintas, pero se tratan con el mismo esqueleto: líquidos, potasio e insulina."
            },
            {
              v: {
                k: "case",
                t: "Dejó la insulina",
                p: {
                  name: "Valeria",
                  age: 19,
                  sex: "M",
                  skin: "#E2B08A",
                  hair: "#2A1A12",
                  gown: "#F2A0B8"
                },
                text: "DM1. Dejó la insulina hace 2 días. Vómito, dolor abdominal, respiración profunda y aliento a fruta.",
                vit: {
                  Glu: "486",
                  pH: "7.14",
                  HCO3: "9"
                }
              },
              say: "Valeria tiene diecinueve años y diabetes tipo uno. Dejó la insulina hace dos días. Llega con vómito, dolor abdominal, respiración profunda y aliento a fruta. Glucosa de cuatrocientos ochenta y seis, pH de siete punto catorce y bicarbonato de nueve."
            },
            {
              v: {
                k: "vs",
                a: "Cetoacidosis",
                b: "Estado hiperosmolar",
                rows: [
                  [
                    "Insulina",
                    "Falta toda",
                    "Queda algo"
                  ],
                  [
                    "Glucosa",
                    "Desde 200",
                    "Arriba de 600"
                  ],
                  [
                    "Cetonas y pH",
                    "Altas, pH bajo",
                    "Mínimas, pH normal"
                  ],
                  [
                    "Tiempo",
                    "Horas",
                    "Días"
                  ],
                  [
                    "Paciente típico",
                    "DM1 joven",
                    "DM2 anciano"
                  ]
                ]
              },
              say: "Compáralas. En la cetoacidosis falta toda la insulina: se queman grasas, aparecen cetonas y el pH cae, en horas. En el estado hiperosmolar queda un poco de insulina que frena las cetonas, pero la glucosa sube por días hasta más de seiscientos, con deshidratación enorme y confusión."
            }
          ]
        },
        {
          ch: "Tratamiento en orden",
          sc: [
            {
              v: {
                k: "flow",
                t: "El orden",
                steps: [
                  "Líquidos",
                  "Potasio",
                  "Insulina IV",
                  "Dextrosa a 250"
                ]
              },
              say: "El tratamiento va en orden. Primero líquidos. Luego revisas el potasio. Después insulina intravenosa. Y cuando la glucosa baja de doscientos cincuenta, agregas dextrosa."
            },
            {
              v: {
                k: "big",
                h: "Primera hora",
                t: "1 a 1.5 L",
                u: "de cristaloide"
              },
              say: "Lo primero es un litro a litro y medio de cristaloide en la primera hora. Los líquidos restauran la perfusión y por sí solos bajan la glucosa."
            },
            {
              v: {
                k: "list",
                t: "Potasio antes que insulina",
                items: [
                  "Menos de 3.5: no des insulina, repón K",
                  "3.5 a 5: agrega K a los líquidos",
                  "Más de 5: no agregues, mide cada 2 h"
                ]
              },
              say: "Luego el potasio. La insulina mete el potasio a las células, y aunque el potasio en sangre salga normal, el total del cuerpo está muy bajo. Si está por debajo de tres punto cinco, no inicies insulina: primero repón. Entre tres punto cinco y cinco, agrega potasio a los líquidos."
            },
            {
              v: {
                k: "quiz",
                q: "Glucosa 228 con pH 7.24. ¿Qué haces?",
                opts: [
                  "Suspender la insulina",
                  "Agregar dextrosa y seguir la insulina",
                  "Pasar a insulina subcutánea"
                ],
                a: 1
              },
              say: "Pausa. Después de seis horas la glucosa es de doscientos veintiocho, pero el pH sigue en siete punto veinticuatro. ¿Qué haces?",
              exp: "Agregas dextrosa y sigues con la insulina. Lo que se trata es la cetosis, no la glucosa; si suspendes la insulina, las cetonas regresan."
            }
          ]
        },
        {
          ch: "Resolución y trampas",
          sc: [
            {
              v: {
                k: "list",
                t: "Cetoacidosis resuelta",
                items: [
                  "Beta hidroxibutirato menor de 0.6",
                  "pH de 7.3 o más",
                  "Brecha aniónica normal",
                  "Ya come",
                  "Basal SC 2 h antes de quitar la IV"
                ]
              },
              say: "La cetoacidosis se resuelve cuando el beta hidroxibutirato baja de cero punto seis y el pH llega a siete punto tres. Entonces aplicas insulina basal subcutánea y mantienes la intravenosa dos horas más, porque la intravenosa dura minutos."
            },
            {
              v: {
                k: "tip",
                kind: "trap",
                t: "La tira de orina mide acetoacetato, no beta hidroxibutirato: al mejorar el paciente puede marcar más cetonas."
              },
              say: "Una trampa: la tira de orina mide acetoacetato y no beta hidroxibutirato. Cuando el paciente mejora, el beta hidroxibutirato se convierte en acetoacetato y la tira marca más cetonas. No te asustes: sigue la brecha aniónica."
            },
            {
              v: {
                k: "tip",
                kind: "pearl",
                t: "Con iSGLT2 puede haber cetoacidosis con glucosa menor de 250: la cetoacidosis euglucémica."
              },
              say: "Y una perla: los inhibidores de SGLT dos pueden dar cetoacidosis con la glucosa casi normal. Si un paciente con empagliflozina tiene vómito y acidosis, mide cetonas aunque la glucosa sea de ciento ochenta."
            },
            {
              v: {
                k: "mnemo",
                t: "Agua, K, insulina, dextrosa a 250",
                d: "Líquidos primero; potasio de 3.5 o más para iniciar insulina; dextrosa al bajar de 250 sin quitar la insulina."
              },
              say: "Llévate esto: agua, potasio, insulina, y dextrosa a doscientos cincuenta sin quitar la insulina. Bicarbonato solo si el pH está por debajo de siete."
            }
          ]
        }
      ],
      sections: [
        { h: 'Por qué pasa', html: `
<ul>
<li><b>CAD</b>: déficit <b>absoluto</b> de insulina + hormonas contrarreguladoras (glucagón, cortisol, catecolaminas). Sin insulina se activa la lipólisis → ácidos grasos → <b>cetonas</b> (β-hidroxibutirato y acetoacetato) → <b>acidosis con brecha aniónica alta</b>. Típica de <b>DM1</b> (puede ser su debut), pero también ocurre en DM2.</li>
<li><b>EHH</b>: déficit <b>relativo</b>: la poca insulina que queda frena la cetogénesis pero no la glucosa. La glucosuria arrastra agua por días → <b>deshidratación grave e hiperosmolaridad</b>. Típico de <b>DM2</b> en adulto mayor.</li>
<li>Ambas: diuresis osmótica → pérdida de agua, Na, <b>K</b>, fósforo y magnesio → hipovolemia y lesión renal prerrenal.</li>
<li><b>Desencadenantes</b> (las “I”): <b>infección</b> (la más común: neumonía, IVU), <b>insulina</b> omitida o insuficiente (la #1 en CAD), infarto, EVC, pancreatitis, fármacos (esteroides, tiazidas, antipsicóticos atípicos, <b>iSGLT2</b>), embarazo, alcohol, cocaína.</li>
</ul>` },
        { h: 'Diagnóstico (consenso 2024)', html: `
<div class="tablewrap"><table class="mini">
<tr><th></th><th>Cetoacidosis (CAD)</th><th>Estado hiperosmolar (EHH)</th></tr>
<tr><td>Glucosa</td><td><b>≥200</b> mg/dL (o diabetes conocida; puede ser euglucémica)</td><td><b>≥600</b> mg/dL</td></tr>
<tr><td>Cetonas</td><td><b>β-hidroxibutirato ≥3 mmol/L</b> (o cetonuria ≥2+)</td><td>Mínimas (BHB &lt;3)</td></tr>
<tr><td>pH / HCO₃</td><td><b>pH &lt;7.3 y/o HCO₃ &lt;18</b></td><td>pH ≥7.3, HCO₃ ≥15</td></tr>
<tr><td>Osmolaridad</td><td>Variable</td><td>Efectiva <b>&gt;300</b> (total &gt;320) mOsm/kg</td></tr>
<tr><td>Tiempo y mente</td><td>Horas; alerta o somnoliento</td><td>Días; <b>confusión a coma</b> (se correlaciona con la osmolaridad)</td></tr>
</table></div>
<ul>
<li>Gravedad de la CAD: <b>grave</b> si pH &lt;7.0, HCO₃ &lt;10 o estupor/coma.</li>
<li>Pide: glucosa, electrolitos con brecha aniónica [Na − (Cl + HCO₃), normal 12 ± 2], BUN y creatinina, gasometría venosa, β-hidroxibutirato sérico, osmolaridad, BH, EGO, fósforo, magnesio, lipasa, ECG, cultivos según el caso, prueba de embarazo.</li>
<li><b>Na corregido</b>: suma 1.6 mEq/L por cada 100 mg/dL de glucosa arriba de 100 (la glucosa jala agua y diluye el Na).</li>
<li><b>Osmolaridad efectiva</b> = 2 × Na + glucosa / 18.</li>
<li>La tira de orina mide <b>acetoacetato</b>, no β-hidroxibutirato: puede subestimar la cetosis al inicio y “empeorar” al mejorar el paciente.</li>
<li><b>CAD euglucémica</b>: con <b>iSGLT2</b>, embarazo, ayuno o alcohol: glucosa &lt;250 pero acidosis y cetonas. Suspende el iSGLT2 3 días antes de una cirugía.</li>
</ul>` },
        { h: 'Clínica', html: `
<ul>
<li>Poliuria, polidipsia, pérdida de peso, debilidad, datos de deshidratación (mucosas secas, taquicardia, hipotensión).</li>
<li>CAD: <b>náusea, vómito y dolor abdominal</b> (puede simular abdomen agudo), <b>respiración de Kussmaul</b> (profunda, para tirar CO₂) y <b>aliento a manzana</b> (acetona).</li>
<li>EHH: deterioro neurológico (confusión, focalización, convulsiones, coma) con deshidratación extrema; mayor riesgo de trombosis.</li>
<li>La leucocitosis es común por el estrés (no siempre es infección), y la amilasa puede subir sin pancreatitis.</li>
</ul>` },
        { h: 'Tratamiento paso a paso', html: `
<ol>
<li><b>Líquidos primero</b>: cristaloide isotónico (solución balanceada o salina 0.9 %) <b>1–1.5 L en la 1ª hora</b> (15–20 mL/kg), luego 250–500 mL/h según volemia y Na corregido (salina 0.45 % si el Na corregido es normal o alto).</li>
<li><b>Potasio antes que insulina</b>: la insulina mete el K a la célula.
<div class="tablewrap"><table class="mini">
<tr><th>K sérico</th><th>Conducta</th></tr>
<tr><td><b>&lt;3.5</b></td><td><b>No inicies insulina</b>; repón 10–20 mEq/h hasta &gt;3.5</td></tr>
<tr><td>3.5–5.0</td><td>Agrega 10–20 mEq de KCl a cada litro para mantener 4–5</td></tr>
<tr><td>&gt;5.0</td><td>No agregues K; mídelo cada 2 h</td></tr>
</table></div></li>
<li><b>Insulina regular IV</b> en infusión: <b>0.1 U/kg/h</b> (con o sin bolo de 0.1 U/kg) o 0.14 U/kg/h sin bolo. Meta: bajar la glucosa 50–70 mg/dL por hora. En CAD leve-moderada puede usarse análogo rápido SC cada 1–2 h.</li>
<li><b>Agrega dextrosa al 5–10 %</b> cuando la glucosa baje de <b>250 mg/dL</b> y <b>no suspendas la insulina</b>: lo que se trata es la cetosis, no la glucosa (baja la infusión a 0.05 U/kg/h).</li>
<li><b>Bicarbonato</b> solo si pH <b>&lt;7.0</b>. <b>Fosfato</b> solo si &lt;1.0 mg/dL o hay debilidad, hemólisis o falla cardiaca.</li>
<li>Busca y trata el <b>desencadenante</b>; glucosa capilar cada hora y electrolitos cada 2–4 h.</li>
</ol>` },
        { h: 'Resolución y paso a subcutánea', html: `
<ul>
<li><b>CAD resuelta</b>: β-hidroxibutirato <b>&lt;0.6 mmol/L</b> y pH venoso <b>≥7.3</b> (o HCO₃ ≥18). La brecha aniónica normal (≤12) también se usa.</li>
<li><b>EHH resuelto</b>: osmolaridad efectiva <b>&lt;300</b>, glucosa &lt;250, estado mental recuperado y uresis adecuada.</li>
<li>Al resolver y poder comer: <b>insulina basal SC 2 horas antes</b> de suspender la infusión (o hasta 1 h con análogos), porque la IV dura minutos: si las separas, regresa la cetosis.</li>
<li>Dosis: si ya usaba insulina, su esquema previo; si es nuevo, 0.5–0.6 U/kg/día en basal-bolo.</li>
</ul>` },
        { h: 'Complicaciones del tratamiento', html: `
<ul>
<li><b>Hipoglucemia</b> e <b>hipokalemia</b>: las más comunes (por eso dextrosa a &lt;250 y K desde el inicio).</li>
<li><b>Edema cerebral</b>: sobre todo en niños y adolescentes con CAD; cefalea, bradicardia, deterioro neurológico a las 4–12 h → <b>manitol</b> o salina hipertónica. Se previene sin bajar la osmolaridad demasiado rápido (EHH: ≤3–8 mOsm/kg/h).</li>
<li>Acidosis hiperclorémica (sin brecha) por mucha salina: benigna; por eso se prefieren soluciones balanceadas.</li>
<li>Sobrecarga de volumen y edema pulmonar en cardiópatas y ERC; trombosis en EHH (profilaxis con heparina).</li>
</ul>` },
        { h: 'Cómo lo preguntan en el examen', html: `
<ul>
<li>Joven con vómito, dolor abdominal, Kussmaul, glucosa 480, pH 7.12, cetonas + → <b>CAD</b>; primer paso → <b>solución IV</b>.</li>
<li>CAD con K 3.1 → <b>repón K antes de la insulina</b>.</li>
<li>Glucosa baja a 230 con pH 7.22 → <b>agrega dextrosa y sigue la insulina</b>.</li>
<li>Anciano con DM2, confusión, glucosa 980, osmolaridad 360, pH 7.38 → <b>EHH</b> → líquidos (el déficit es de 8–10 L).</li>
<li>DM2 con empagliflozina, vómito y acidosis con glucosa 190 → <b>CAD euglucémica</b>.</li>
<li>Niño en tratamiento de CAD que a las 6 h tiene cefalea y bradicardia → <b>edema cerebral</b> → manitol.</li>
</ul>` }
      ],
      mnemo: { t: 'Agua → K → Insulina → Dextrosa a 250', d: 'El orden del tratamiento: primero el volumen, luego el potasio (≥3.5 para empezar insulina), después la insulina, y al llegar a 250 de glucosa, dextrosa sin quitar la insulina.' },
      pearl: 'En la CAD se trata la cetosis, no la glucosa: cuando la glucosa baja de 250 se agrega dextrosa y la insulina sigue hasta cerrar la brecha aniónica (o β-hidroxibutirato <0.6).',
      trap: 'Un K normal o alto al ingreso no significa que sobre: el potasio corporal total está muy bajo. Al dar insulina cae en picada; si está <3.5 no se inicia la insulina.',
      guide: [
        'Consenso 2024 (ADA/EASD/JBDS/AACE/DTS): la CAD se diagnostica con glucosa ≥200 (antes ≥250) y β-hidroxibutirato ≥3 mmol/L; el umbral de K para iniciar insulina subió de 3.3 a 3.5.',
        'Dextrosa: el consenso 2024 la indica a <250 mg/dL; textos previos decían 200 (CAD) y 300 (EHH). Tu examen puede usar cualquiera.',
        'Resolución de la CAD: hoy β-hidroxibutirato <0.6 y pH ≥7.3; la definición clásica (glucosa <200, HCO₃ ≥15–18, pH >7.3, brecha ≤12) sigue apareciendo en exámenes.'
      ],
      refs: [
        'Umpierrez GE, et al. Hyperglycemic crises in adults with diabetes: a consensus report. Diabetes Care 2024;47:1257–1275.',
        'Kitabchi AE, et al. Hyperglycemic crises in adult patients with diabetes. Diabetes Care 2009;32:1335–1343.',
        'ElSayed NA, et al. Standards of Care in Diabetes—2025: Diabetes Care in the Hospital. Diabetes Care 2025.',
        'Self WH, et al. Clinical effects of balanced crystalloids vs saline in adults with diabetic ketoacidosis (SMART/SALT-ED). JAMA Netw Open 2020.',
        'Dhatariya KK, et al. Diabetic ketoacidosis. Nat Rev Dis Primers 2020.'
      ]
    }
  },

  guias: {
    cad: { src: ENDO,
      puntos: [
        'CAD: hiperglucemia &gt;250 + acidosis (HCO₃ &lt;18, pH &lt;7.35, brecha aniónica alta) + cetonemia/cetonuria. Síntomas en &lt;24 h; el EHH tarda más.',
        'La tira de orina detecta acetoacetato y acetona, <b>no β-hidroxibutirato</b> (la cetona más común en CAD): mídelo en suero.',
        'Na corregido: +1.6 mEq/L por cada 100 mg/dL de glucosa arriba de 100. Pide prueba de embarazo (CAD euglucémica) y busca la causa (cultivos, lactato, ECG, troponinas, lipasa).',
        'Líquidos: salina 0.9 % 1000–1500 mL la 1ª hora (15–20 mL/kg/h); salina 0.45 % si el Na es normal o alto. Insulina regular 0.14 U/kg/h; dextrosa al 5 % cuando la glucosa llega a 200; no bajar &lt;200 en las primeras 4–5 h.',
        'K &gt;3.3 antes de la insulina. Bicarbonato si la acidosis no se resuelve. Monitoreo de electrolitos cada 2 h. Metas: glucosa &lt;200, HCO₃ &gt;15, pH &gt;7.35, brecha &lt;12.',
        'EHH: glucosa &gt;600, osmolaridad &gt;350, sin cetonas, gases normales; dextrosa al 5 % cuando la glucosa baja de 300.'
      ],
      ojo: [
        'Consenso 2024: el corte de K para iniciar insulina es <b>3.5</b> (tu guía dice 3.3) y la dextrosa se agrega a <b>&lt;250</b> mg/dL en ambas crisis.',
        'El bicarbonato se reserva para <b>pH &lt;7.0</b>, no para “acidosis que no se resuelve”.',
        'EHH: el consenso usa osmolaridad efectiva <b>&gt;300</b> (total &gt;320); tu guía dice &gt;350.',
        'La CAD se resuelve hoy con <b>β-hidroxibutirato &lt;0.6 mmol/L y pH ≥7.3</b>; la meta de pH &gt;7.35 de tu guía es más estricta que lo necesario.'
      ],
      cards: [['Cetona que NO detecta la tira de orina', 'β-hidroxibutirato (la más abundante en CAD); mídelo en suero']] }
  },

  cards: [
    ['CAD vs EHH: tipo de déficit de insulina', 'CAD: absoluto · EHH: relativo (frena la cetosis)'],
    ['Desencadenante más común de CAD', 'Omitir o no tener insulina; después, infección'],
    ['CAD: criterios (2024)', 'Glucosa ≥200, β-hidroxibutirato ≥3 mmol/L, pH <7.3 y/o HCO₃ <18'],
    ['EHH: criterios', 'Glucosa ≥600, osmolaridad efectiva >300 (total >320), pH ≥7.3, cetonas mínimas'],
    ['CAD grave', 'pH <7.0, HCO₃ <10 o estupor/coma'],
    ['Na corregido', 'Na + 1.6 por cada 100 mg/dL de glucosa arriba de 100'],
    ['Osmolaridad efectiva', '2 × Na + glucosa/18'],
    ['Respiración de Kussmaul', 'Profunda y rápida: compensa la acidosis metabólica'],
    ['Primer paso en CAD', 'Líquidos IV: 1–1.5 L de cristaloide en la primera hora'],
    ['K para iniciar insulina', '≥3.5 mEq/L (si es menor, repón primero)'],
    ['Infusión de insulina en CAD', 'Regular IV 0.1 U/kg/h (± bolo 0.1 U/kg) o 0.14 U/kg/h sin bolo'],
    ['Cuándo agregar dextrosa', 'Glucosa <250 mg/dL, sin suspender la insulina'],
    ['Bicarbonato en CAD', 'Solo si pH <7.0'],
    ['CAD resuelta', 'β-hidroxibutirato <0.6 y pH ≥7.3 (o HCO₃ ≥18, brecha ≤12)'],
    ['Transición a insulina SC', 'Basal SC 2 h antes de suspender la infusión IV'],
    ['CAD euglucémica', 'iSGLT2, embarazo, ayuno, alcohol: glucosa <250 con acidosis y cetonas'],
    ['Complicación más temida en niños con CAD', 'Edema cerebral (cefalea, bradicardia, deterioro a las 4–12 h) → manitol']
  ],

  questions: [
    q({ id: 'cad-01', dif: 1,
      stem: 'Mujer de 19 años con DM1 que dejó la insulina hace 2 días. Vómito, dolor abdominal y respiración profunda. Glucosa 486, pH 7.14, HCO₃ 9, brecha aniónica 26, β-hidroxibutirato 6 mmol/L, K 4.8, PA 92/58. ¿Primer paso?',
      opts: ['Bolo de insulina regular IV', 'Solución cristaloide IV 1–1.5 L en la primera hora', 'Bicarbonato de sodio IV', 'Insulina glargina SC', 'Tomografía de abdomen'],
      ans: 1,
      exp: 'Cetoacidosis diabética con hipovolemia. Lo primero son los líquidos: restauran la perfusión y por sí solos bajan la glucosa. Con K de 4.8 se puede iniciar la insulina enseguida, con K en la solución.',
      why: ['La insulina va después de iniciar los líquidos y de conocer el K.', '', 'Solo si el pH es <7.0.', 'No en la fase aguda: se usa insulina IV.', 'El dolor abdominal es por la CAD; reevalúa tras tratarla.'],
      ref: 'Umpierrez, Diabetes Care 2024' }),
    q({ id: 'cad-02', dif: 2,
      stem: 'Paciente con CAD ya con líquidos. Glucosa 410, pH 7.18, K 3.1. ¿Qué haces con la insulina?',
      opts: ['Inicia infusión a 0.1 U/kg/h', 'Difiérela y repón potasio hasta >3.5', 'Da bolo de 0.1 U/kg y luego infusión', 'Inicia insulina SC', 'Da bicarbonato para subir el K'],
      ans: 1,
      exp: 'La insulina mete el K a las células y puede causar hipokalemia grave con arritmias. Con K <3.5 se repone primero (10–20 mEq/h) y se inicia la insulina cuando está ≥3.5.',
      why: ['Riesgo de hipokalemia grave.', '', 'Mismo problema.', 'Mismo problema y absorción errática.', 'El bicarbonato también baja el K.'],
      ref: 'Umpierrez, Diabetes Care 2024' }),
    q({ id: 'cad-03', dif: 2,
      stem: 'A las 6 horas de tratamiento de una CAD la glucosa es de 228 mg/dL, el pH 7.24 y la brecha aniónica 19. ¿Qué haces?',
      opts: ['Suspende la insulina', 'Agrega dextrosa al 5–10 % y continúa la insulina (puedes bajarla a 0.05 U/kg/h)', 'Pasa a insulina SC y suspende la infusión', 'Sube la insulina al doble', 'Da bicarbonato'],
      ans: 1,
      exp: 'La glucosa se corrige antes que la cetosis. La insulina se mantiene para frenar la cetogénesis y se agrega dextrosa para no causar hipoglucemia, hasta que la CAD se resuelva.',
      why: ['La cetosis regresaría.', '', 'Aún no está resuelta (pH <7.3, brecha alta).', 'Causaría hipoglucemia.', 'pH >7.0: no está indicado.'],
      ref: 'Umpierrez, Diabetes Care 2024' }),
    q({ id: 'cad-04', dif: 1,
      stem: 'Hombre de 78 años con DM2, confusión progresiva de 4 días y mucosas muy secas. Glucosa 1,040, Na 148, pH 7.36, HCO₃ 22, cetonas séricas trazas. ¿Diagnóstico?',
      opts: ['Cetoacidosis diabética grave', 'Estado hiperglucémico hiperosmolar', 'Acidosis láctica por metformina', 'EVC con hiperglucemia de estrés', 'Hiponatremia hipertónica'],
      ans: 1,
      exp: 'Glucosa >600, osmolaridad efectiva muy alta [2(148) + 1040/18 ≈ 354], sin acidosis ni cetosis significativas y deterioro neurológico de días: EHH.',
      why: ['No hay acidosis.', '', 'El pH es normal.', 'La confusión se explica por la hiperosmolaridad; reevalúa al corregirla.', 'El Na está alto.'],
      ref: 'Umpierrez, Diabetes Care 2024' }),
    q({ id: 'cad-05', dif: 2,
      stem: 'Paciente con glucosa de 700 mg/dL y Na medido de 132. ¿Cuál es el Na corregido aproximado?',
      opts: ['126', '132', '142', '152', '160'],
      ans: 2,
      exp: 'Se suman 1.6 mEq/L por cada 100 mg/dL arriba de 100: (700 − 100)/100 × 1.6 = 9.6 → 132 + 9.6 ≈ 142. Al bajar la glucosa el Na subirá: hay más déficit de agua del que parece.',
      why: ['Se suma, no se resta.', 'Ese es el medido.', '', 'Sobreestimado.', 'Sobreestimado.'],
      ref: 'Kitabchi, Diabetes Care 2009' }),
    q({ id: 'cad-06', dif: 2,
      stem: 'Hombre de 55 años con DM2 en tratamiento con dapagliflozina, operado de colecistectomía hace 2 días. Náusea, taquipnea. Glucosa 184, pH 7.15, HCO₃ 10, brecha 24, β-hidroxibutirato 5.2. ¿Diagnóstico?',
      opts: ['Acidosis láctica', 'Cetoacidosis diabética euglucémica', 'Cetoacidosis por ayuno simple', 'Acidosis tubular renal', 'Estado hiperosmolar'],
      ans: 1,
      exp: 'Los iSGLT2 bajan la glucosa por glucosuria mientras persisten las cetonas: CAD con glucosa <250. Se trata igual (líquidos, insulina con dextrosa desde el inicio) y se suspende el iSGLT2 (idealmente 3 días antes de una cirugía).',
      why: ['Las cetonas están muy altas; el lactato no se menciona.', '', 'El ayuno da cetosis leve, no pH 7.15.', 'Sería sin brecha aniónica.', 'La glucosa es baja y hay acidosis.'],
      ref: 'Umpierrez, Diabetes Care 2024' }),
    q({ id: 'cad-07', dif: 2,
      stem: '¿Cuándo está indicado el bicarbonato en la cetoacidosis diabética?',
      opts: ['Siempre que HCO₃ <15', 'pH <7.0', 'pH <7.3', 'Cuando la brecha no cierra en 4 horas', 'Nunca'],
      ans: 1,
      exp: 'Con pH ≥7.0 el bicarbonato no mejora los desenlaces y puede causar hipokalemia y acidosis paradójica del LCR. Se considera solo con pH <7.0.',
      why: ['Demasiado liberal.', '', 'Es el umbral diagnóstico, no de bicarbonato.', 'La brecha se cierra con insulina.', 'Hay una indicación: pH <7.0.'],
      ref: 'Umpierrez, Diabetes Care 2024' }),
    q({ id: 'cad-08', dif: 2,
      stem: 'Paciente con CAD ya resuelta (pH 7.34, β-hidroxibutirato 0.4) que tolera la vía oral. ¿Cómo pasas a insulina subcutánea?',
      opts: ['Suspendes la infusión y a la hora inicias insulina SC', 'Aplicas insulina basal SC y mantienes la infusión 2 horas más', 'Inicias metformina', 'Solo esquema de corrección con regular', 'Mantienes la infusión 24 horas más'],
      ans: 1,
      exp: 'La insulina IV dura minutos. La basal SC necesita 1–2 horas para empezar a actuar; si no se traslapan, regresa la cetosis.',
      why: ['Deja un hueco sin insulina: rebote de cetosis.', '', 'No sustituye la insulina.', 'Sin basal regresa la cetosis.', 'Innecesario si ya se resolvió.'],
      ref: 'ADA Standards of Care 2025' }),
    q({ id: 'cad-09', dif: 3,
      stem: 'Niño de 12 años en tratamiento de CAD. A las 7 horas presenta cefalea intensa, vómito, bradicardia y somnolencia que empeora. ¿Qué das?',
      opts: ['Más insulina', 'Manitol IV', 'Bicarbonato', 'Bolo de salina 0.9 % de 20 mL/kg', 'Dextrosa al 50 %'],
      ans: 1,
      exp: 'Edema cerebral, la complicación más grave de la CAD en niños: se trata de inmediato con manitol (o salina hipertónica), se reducen los líquidos y se cabecea la cama.',
      why: ['No trata el edema.', '', 'Puede empeorarlo.', 'Más volumen empeora el edema.', 'No hay hipoglucemia.'],
      ref: 'Dhatariya, Nat Rev Dis Primers 2020' }),
    q({ id: 'cad-10', dif: 2,
      stem: 'Al inicio de una CAD la tira reactiva de orina marca cetonas ++. Doce horas después, con el paciente mejorando, marca +++. ¿Qué significa?',
      opts: ['La CAD empeoró: sube la insulina', 'El β-hidroxibutirato se convierte en acetoacetato al mejorar; la tira solo mide este último', 'Hay error de laboratorio', 'Hay cetosis por ayuno añadida', 'Hay que iniciar bicarbonato'],
      ans: 1,
      exp: 'La tira (nitroprusiato) detecta acetoacetato. Con el tratamiento, el β-hidroxibutirato se oxida a acetoacetato: la tira “empeora” aunque el paciente mejore. Por eso se sigue la brecha aniónica o el β-hidroxibutirato sérico.',
      why: ['Interpretación incorrecta: se vigila con la brecha o el BHB.', '', 'Es un fenómeno esperado.', 'No explica el cambio.', 'No está indicado.'],
      ref: 'Kitabchi, Diabetes Care 2009' }),
    q({ id: 'cad-11', dif: 1,
      stem: '¿Cuál es el desencadenante más común de un estado hiperosmolar en un adulto mayor con DM2?',
      opts: ['Infarto agudo de miocardio', 'Infección (neumonía o IVU)', 'Pancreatitis', 'Embarazo', 'Hipotiroidismo'],
      ans: 1,
      exp: 'Las infecciones son el desencadenante más frecuente del EHH, sumadas a poco acceso al agua (ancianos, dependientes).',
      why: ['Es causa, pero menos frecuente.', '', 'Menos frecuente.', 'No aplica a este paciente.', 'No es desencadenante típico.'],
      ref: 'Umpierrez, Diabetes Care 2024' }),
    q({ id: 'cad-12', dif: 3,
      stem: 'Paciente con CAD tratado solo con solución salina 0.9 % (6 L). Glucosa 180, β-hidroxibutirato 0.5, pH 7.29, HCO₃ 17, Cl 116, brecha aniónica 10. ¿Qué explica la acidosis residual?',
      opts: ['CAD persistente', 'Acidosis hiperclorémica (sin brecha) por la salina', 'Acidosis láctica', 'Insuficiencia renal', 'Cetoacidosis alcohólica'],
      ans: 1,
      exp: 'La cetosis ya se resolvió (BHB <0.6, brecha normal). La acidosis que queda es hiperclorémica por el cloro de la salina: es benigna y no requiere seguir con insulina IV. Las soluciones balanceadas la reducen.',
      why: ['La brecha y el BHB son normales.', '', 'La brecha sería alta.', 'No hay datos.', 'La brecha sería alta.'],
      ref: 'Self, JAMA Netw Open 2020' }),
    q({
      id: "cad-13",
      dif: 1,
      stem: "¿Qué patrón ácido-base esperas en la cetoacidosis diabética?",
      opts: [
        "Acidosis metabólica sin brecha aniónica",
        "Acidosis metabólica con brecha aniónica alta",
        "Alcalosis metabólica",
        "Acidosis respiratoria",
        "Alcalosis respiratoria pura"
      ],
      ans: 1,
      exp: "Las cetonas (ácidos no medidos) consumen bicarbonato y elevan la brecha aniónica; hay compensación respiratoria (Kussmaul).",
      why: [
        "Esa es la que queda tras mucha salina.",
        "",
        "Puede coexistir por vómito, pero no es lo característico.",
        "Hay hiperventilación, no hipoventilación.",
        "La alcalosis respiratoria es compensatoria."
      ],
      ref: "Kitabchi, Diabetes Care 2009"
    }),
    q({
      id: "cad-14",
      dif: 2,
      stem: "Paciente con CAD: Na 130, Cl 96, HCO₃ 8. ¿Cuál es la brecha aniónica?",
      opts: [
        "14",
        "20",
        "26",
        "34",
        "38"
      ],
      ans: 2,
      exp: "Brecha = Na − (Cl + HCO₃) = 130 − (96 + 8) = 26 (alta; normal 12 ± 2).",
      why: [
        "Error de cálculo.",
        "Error de cálculo.",
        "",
        "Error de cálculo.",
        "Error de cálculo."
      ],
      ref: "Kitabchi, Diabetes Care 2009"
    }),
    q({
      id: "cad-15",
      dif: 2,
      stem: "En un paciente con estado hiperosmolar, ¿qué determina principalmente el grado de alteración del estado de conciencia?",
      opts: [
        "El pH",
        "La osmolaridad sérica",
        "El potasio",
        "La glucosa capilar sola",
        "Las cetonas"
      ],
      ans: 1,
      exp: "La alteración mental se correlaciona con la osmolaridad efectiva (sobre todo >320–330). Si el paciente está en coma con osmolaridad normal, busca otra causa.",
      why: [
        "El pH es normal en el EHH.",
        "",
        "No explica el coma.",
        "Influye en la osmolaridad, pero el marcador es la osmolaridad.",
        "Son mínimas en el EHH."
      ],
      ref: "Umpierrez, Diabetes Care 2024"
    }),
    q({
      id: "cad-16",
      dif: 2,
      stem: "Paciente con CAD con K inicial de 5.6. ¿Cómo manejas el potasio?",
      opts: [
        "Kayexalato y no dar insulina",
        "No agregar K a los líquidos y medir cada 2 horas",
        "Agregar 40 mEq/L desde el inicio",
        "Gluconato de calcio de rutina",
        "Diálisis"
      ],
      ans: 1,
      exp: "El K alto al ingreso refleja salida de la célula por acidosis e insulinopenia. Con la insulina bajará: no se agrega mientras esté >5 y se mide cada 2 h.",
      why: [
        "Bajaría más el K cuando inicie la insulina.",
        "",
        "Riesgo de hiperkalemia.",
        "Solo si hay cambios en el ECG.",
        "No está indicada."
      ],
      ref: "Umpierrez, Diabetes Care 2024"
    }),
    q({
      id: "cad-17",
      dif: 2,
      stem: "¿Cuál es la complicación más frecuente del tratamiento de la CAD?",
      opts: [
        "Edema cerebral",
        "Hipoglucemia e hipokalemia",
        "Trombosis venosa",
        "Mucormicosis",
        "Pancreatitis"
      ],
      ans: 1,
      exp: "Por la insulina: hipoglucemia (si no se agrega dextrosa) e hipokalemia (si no se repone el K). El edema cerebral es más grave pero raro en adultos.",
      why: [
        "Grave pero raro en adultos.",
        "",
        "Más típica del EHH.",
        "Rara.",
        "No es complicación del tratamiento."
      ],
      ref: "Umpierrez, Diabetes Care 2024"
    }),
    q({
      id: "cad-18",
      dif: 3,
      stem: "Paciente con CAD y fósforo de 0.8 mg/dL que presenta debilidad respiratoria. ¿Qué haces?",
      opts: [
        "Nada: el fósforo siempre se corrige solo",
        "Reponer fosfato de potasio IV",
        "Dar calcio IV",
        "Iniciar bicarbonato",
        "Suspender la insulina"
      ],
      ans: 1,
      exp: "La reposición rutinaria no se recomienda, pero sí cuando el fósforo es <1.0 mg/dL o hay debilidad muscular, falla respiratoria, hemólisis o disfunción cardiaca.",
      why: [
        "Con <1.0 y síntomas sí se repone.",
        "",
        "Puede bajar más el fosfato.",
        "No está indicado.",
        "No resuelve el problema."
      ],
      ref: "Umpierrez, Diabetes Care 2024"
    }),
    q({
      id: "cad-19",
      dif: 1,
      stem: "Hombre de 74 años con estado hiperosmolar. ¿Cuál es la medida más importante del tratamiento?",
      opts: [
        "Insulina en bolo IV de 10 U",
        "Reposición de líquidos IV",
        "Bicarbonato",
        "Antibiótico de amplio espectro siempre",
        "Restricción hídrica"
      ],
      ans: 1,
      exp: "El déficit de agua es enorme (8–10 L): los líquidos son la piedra angular y por sí solos bajan mucho la glucosa. La insulina se agrega después, a dosis baja.",
      why: [
        "La insulina sin líquidos puede causar colapso.",
        "",
        "No hay acidosis.",
        "Solo si hay infección sospechada.",
        "Absurdo."
      ],
      ref: "Umpierrez, Diabetes Care 2024"
    }),
    q({
      id: "cad-20",
      dif: 2,
      stem: "Joven con CAD que tenía dolor abdominal intenso y amilasa elevada; tras 12 horas de tratamiento el dolor desapareció. ¿Qué explica el dolor?",
      opts: [
        "Pancreatitis necrotizante",
        "La propia cetoacidosis",
        "Apendicitis",
        "Colecistitis",
        "Perforación intestinal"
      ],
      ans: 1,
      exp: "El dolor abdominal y la amilasa alta son comunes en la CAD y desaparecen al corregir la acidosis. Si persiste tras corregirla, busca una causa quirúrgica.",
      why: [
        "No cedería con el tratamiento de la CAD.",
        "",
        "No cedería solo.",
        "No cedería solo.",
        "No cedería solo."
      ],
      ref: "Kitabchi, Diabetes Care 2009"
    })
  ]
};
