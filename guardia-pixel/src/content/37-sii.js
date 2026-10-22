// Tema 28 · Síndrome de intestino irritable (Gastroenterología, semana 6)
const T = { topic: 'sii', subj: 'gastro' };
const q = (o) => ({ ...T, ...o });

export default {
  lessons: {
    sii: {
      hook: 'El SII se diagnostica con criterios positivos (Roma IV), no después de pedir todos los estudios. Lo importante: saber qué datos de alarma lo descartan y tratar según el subtipo.',
      nn: [['irritable-bowel-syndrome', 'Irritable Bowel Syndrome']],
      yt: 'irritable bowel syndrome Rome IV',
      sections: [
        { h: 'Criterios de Roma IV', html: `
<ul>
<li><b>Dolor abdominal recurrente</b>, en promedio <b>≥1 día por semana</b> en los últimos 3 meses, asociado a <b>≥2</b> de:
  <ul>
  <li>Relación con la defecación (mejora o empeora).</li>
  <li>Cambio en la <b>frecuencia</b> de las evacuaciones.</li>
  <li>Cambio en la <b>forma</b> (consistencia) de las heces.</li>
  </ul></li>
<li>Inicio de los síntomas al menos <b>6 meses</b> antes del diagnóstico.</li>
<li>La distensión es frecuente pero no es criterio. Roma IV quitó la palabra “molestia”: se requiere dolor.</li>
</ul>` },
        { h: 'Subtipos (escala de Bristol)', html: `
<ul>
<li>Se clasifican según los días con heces anormales:</li>
<li><b>SII-E</b> (estreñimiento): &gt;25% de evacuaciones tipo 1–2 y &lt;25% tipo 6–7.</li>
<li><b>SII-D</b> (diarrea): &gt;25% tipo 6–7 y &lt;25% tipo 1–2.</li>
<li><b>SII-M</b> (mixto): &gt;25% de ambos tipos.</li>
<li><b>SII-NC</b> (no clasificado): no cumple ninguno.</li>
</ul>` },
        { h: 'Datos de alarma y estudios', html: `
<ul>
<li><b>Alarma</b>: inicio después de los 45–50 años, sangrado rectal, anemia ferropénica, pérdida de peso no intencional, síntomas nocturnos que despiertan, fiebre, masa, antecedente familiar de cáncer colorrectal, EII o celiaca, cambio progresivo.</li>
<li>Sin alarma (ACG 2021): estrategia de <b>diagnóstico positivo</b>; limitar estudios.</li>
<li>En SII-D o SII-M: <b>serología de celiaca</b>; <b>calprotectina fecal</b> (o lactoferrina) y PCR para descartar EII.</li>
<li>Colonoscopia solo con datos de alarma o si le toca por edad (tamizaje).</li>
</ul>` },
        { h: 'Tratamiento', html: `
<ul>
<li><b>Para todos</b>: explicar el eje intestino-cerebro, relación médico-paciente, ejercicio.</li>
<li><b>Dieta baja en FODMAP</b> (eliminar y luego reintroducir), con nutriólogo.</li>
<li><b>Fibra soluble</b> (psyllium): ayuda; la fibra insoluble (salvado) puede empeorar la distensión.</li>
<li><b>Dolor</b>: antiespasmódicos (hioscina, aceite de menta) y <b>neuromoduladores</b>: antidepresivos tricíclicos en dosis bajas (amitriptilina), útiles sobre todo en SII-D.</li>
<li><b>SII-E</b>: polietilenglicol (mejora la evacuación, no el dolor), linaclotida, plecanatida, lubiprostona, tenapanor.</li>
<li><b>SII-D</b>: loperamida (diarrea, no dolor), <b>rifaximina</b>, eluxadolina (evitar sin vesícula o con alcohol o pancreatitis previa), alosetrón (mujeres con SII-D grave; riesgo de colitis isquémica).</li>
<li><b>Terapias psicológicas</b>: terapia cognitivo-conductual, hipnoterapia dirigida al intestino.</li>
</ul>` }
      ],
      mnemo: { t: 'Roma IV = “1 día, 3 meses, 6 meses, 2 de 3”', d: 'Dolor ≥1 día por semana, en los últimos 3 meses, con inicio hace ≥6 meses, y 2 de 3: defecación, frecuencia, forma.' },
      pearl: 'El SII postinfeccioso existe: hasta 10% de quienes tienen una gastroenteritis bacteriana desarrollan SII después.',
      trap: 'Mujer de 58 años con “colon irritable” nuevo y anemia ferropénica: eso no es SII, es indicación de colonoscopia.',
      guide: [
        'Roma IV (2016) cambió “molestia” por “dolor” y la frecuencia de 3 días al mes a 1 día por semana: Roma III es más permisivo.',
        'Edad de alarma: la ACG 2021 usa ≥45 años (por el tamizaje colorrectal); muchos libros dicen >50.'
      ],
      refs: [
        'Lacy BE, et al. ACG Clinical Guideline: Management of Irritable Bowel Syndrome. Am J Gastroenterol 2021.',
        'Mearin F, et al. Bowel Disorders (Rome IV). Gastroenterology 2016.',
        'Consenso mexicano sobre el síndrome de intestino irritable. Rev Gastroenterol Mex 2016.'
      ]
    }
  },

  cards: [
    ['Roma IV: dolor', '≥1 día/semana en los últimos 3 meses, inicio hace ≥6 meses'],
    ['Roma IV: criterios asociados (≥2)', 'Relación con defecación, cambio de frecuencia, cambio de forma'],
    ['Subtipos de SII', 'E, D, M y no clasificado (según Bristol)'],
    ['Estudios en SII-D sin alarma', 'Serología de celiaca, calprotectina fecal, PCR'],
    ['Datos de alarma en SII', 'Edad ≥45–50, sangrado, anemia, pérdida de peso, síntomas nocturnos, historia familiar'],
    ['Dieta con mejor evidencia en SII', 'Baja en FODMAP'],
    ['Fibra recomendada', 'Soluble (psyllium)'],
    ['Neuromodulador para el dolor', 'Antidepresivo tricíclico en dosis baja'],
    ['SII-D: antibiótico', 'Rifaximina'],
    ['SII-E: secretagogos', 'Linaclotida, plecanatida, lubiprostona'],
    ['Alosetrón: riesgo', 'Colitis isquémica'],
    ['Loperamida en SII-D', 'Mejora la diarrea, no el dolor']
  ],

  questions: [
    q({ id: 'sii-01', dif: 1,
      stem: 'Mujer de 28 años con dolor abdominal 2 días por semana desde hace 8 meses, que mejora al evacuar y se acompaña de evacuaciones más frecuentes y blandas. Sin datos de alarma. ¿Diagnóstico?',
      opts: ['Enfermedad celiaca confirmada', 'Síndrome de intestino irritable (predominio diarrea)', 'Colitis ulcerosa', 'Dispepsia funcional', 'Gastroparesia'],
      ans: 1,
      exp: 'Cumple Roma IV: dolor ≥1 día por semana por ≥3 meses (inicio hace ≥6) + relación con la defecación + cambio en frecuencia y forma. Subtipo D. Se pide serología de celiaca y calprotectina para completar.',
      why: ['No hay estudios que lo confirmen.', '', 'Habría sangre y datos inflamatorios.', 'Es dolor epigástrico relacionado con comidas.', 'Náusea y saciedad, no diarrea.'],
      ref: 'Roma IV · ACG 2021' }),

    q({ id: 'sii-02', dif: 2,
      stem: 'Paciente con sospecha de SII-D sin datos de alarma. Según la ACG 2021, ¿qué estudios pides?',
      opts: ['Colonoscopia y TC', 'Serología de celiaca y calprotectina fecal (o lactoferrina) + PCR', 'Ninguno', 'Coproparasitoscópico seriado y prueba de aliento con lactulosa a todos', 'Endoscopia alta'],
      ans: 1,
      exp: 'Se descartan las dos imitadoras más relevantes con pruebas simples: celiaca (serología) y EII (calprotectina). No se recomiendan estudios extensos de rutina.',
      why: ['No sin datos de alarma.', '', 'Se recomiendan estudios mínimos en SII-D.', 'No se recomiendan de rutina.', 'No está indicada.'],
      ref: 'ACG 2021 SII' }),

    q({ id: 'sii-03', dif: 1,
      stem: 'Hombre de 58 años con cambio reciente del hábito intestinal, dolor abdominal y anemia ferropénica. Cree que tiene colitis. ¿Qué haces?',
      opts: ['Diagnosticar SII y dar antiespasmódico', 'Colonoscopia', 'Dieta baja en FODMAP', 'Amitriptilina', 'Rifaximina'],
      ans: 1,
      exp: 'Edad >45–50, inicio reciente y anemia ferropénica son datos de alarma: hay que descartar cáncer colorrectal antes de pensar en SII.',
      why: ['Tiene datos de alarma.', '', 'No antes de descartar cáncer.', 'No antes de descartar cáncer.', 'No antes de descartar cáncer.'],
      ref: 'ACG 2021 SII' }),

    q({ id: 'sii-04', dif: 2,
      stem: 'Mujer con SII-E. Toma polietilenglicol, evacúa mejor, pero persisten el dolor y la distensión. ¿Qué agregas?',
      opts: ['Loperamida', 'Linaclotida', 'Alosetrón', 'Rifaximina', 'Salvado de trigo'],
      ans: 1,
      exp: 'La linaclotida (agonista de guanilato ciclasa C) aumenta la secreción intestinal y reduce el dolor visceral: útil en SII-E con dolor.',
      why: ['Empeora el estreñimiento.', '', 'Para SII-D.', 'Para SII-D.', 'La fibra insoluble aumenta la distensión.'],
      ref: 'ACG 2021 SII' }),

    q({ id: 'sii-05', dif: 2,
      stem: 'Hombre con SII-D y dolor abdominal persistente pese a dieta y antiespasmódicos. ¿Fármaco que actúa sobre el dolor y la diarrea?',
      opts: ['Polietilenglicol', 'Amitriptilina en dosis baja', 'Linaclotida', 'Lactulosa', 'Prednisona'],
      ans: 1,
      exp: 'Los tricíclicos en dosis bajas (10–50 mg) modulan la percepción visceral del dolor y, por su efecto anticolinérgico, enlentecen el tránsito: útiles en SII-D.',
      why: ['Empeora la diarrea.', '', 'Empeora la diarrea.', 'Empeora la diarrea.', 'No tiene papel.'],
      ref: 'ACG 2021 SII' }),

    q({ id: 'sii-06', dif: 1,
      stem: '¿Cuál de estas recomendaciones dietéticas tiene más evidencia en SII?',
      opts: ['Dieta sin gluten para todos', 'Dieta baja en FODMAP con reintroducción', 'Dieta alta en salvado', 'Dieta sin lactosa para todos', 'Ayuno intermitente'],
      ans: 1,
      exp: 'La dieta baja en FODMAP (carbohidratos fermentables) reduce los síntomas en muchos pacientes; debe hacerse en 3 fases (eliminar, reintroducir, personalizar).',
      why: ['No sin celiaca.', '', 'Puede empeorar la distensión.', 'Solo si hay intolerancia.', 'No tiene evidencia.'],
      ref: 'ACG 2021 SII' }),

    q({ id: 'sii-07', dif: 2,
      stem: 'Una paciente cumple criterios de SII, pero sus evacuaciones son tipo 1–2 en el 40% de los días y tipo 6–7 en el 35%. ¿Subtipo?',
      opts: ['SII-E', 'SII-D', 'SII-M', 'SII-NC', 'No es SII'],
      ans: 2,
      exp: 'Más del 25% de heces duras y más del 25% de heces líquidas: subtipo mixto.',
      why: ['Requiere <25% de heces líquidas.', 'Requiere <25% de heces duras.', '', 'Cumple el patrón mixto.', 'Sí cumple criterios.'],
      ref: 'Roma IV' }),

    q({ id: 'sii-08', dif: 2,
      stem: 'Hombre con SII-D y distensión importante que no respondió a dieta. ¿Antibiótico con evidencia en SII-D?',
      opts: ['Metronidazol', 'Rifaximina', 'Ciprofloxacino', 'Amoxicilina', 'Vancomicina'],
      ans: 1,
      exp: 'La rifaximina (no absorbible) por 14 días mejora la distensión y la diarrea en SII-D (estudios TARGET); puede repetirse si recae.',
      why: ['No tiene evidencia en SII.', '', 'No tiene evidencia.', 'No tiene evidencia.', 'No tiene evidencia.'],
      ref: 'ACG 2021 SII · TARGET' }),

    q({ id: 'sii-09', dif: 1,
      stem: 'Según Roma IV, ¿cuánto tiempo deben tener los síntomas antes de diagnosticar SII?',
      opts: ['1 mes', 'Inicio hace ≥6 meses, con criterios cumplidos en los últimos 3', '2 semanas', '1 año', 'No importa el tiempo'],
      ans: 1,
      exp: 'Los síntomas deben haber iniciado al menos 6 meses antes, y cumplir los criterios en los últimos 3 meses.',
      why: ['Muy corto.', '', 'Muy corto.', 'Excesivo.', 'Sí importa.'],
      ref: 'Roma IV' }),

    q({ id: 'sii-10', dif: 3,
      stem: 'Mujer de 35 años con SII-D grave que no respondió a otros tratamientos. Se considera alosetrón. ¿Qué efecto adverso grave debes advertir?',
      opts: ['Hepatitis fulminante', 'Colitis isquémica y estreñimiento grave', 'Arritmias por QT largo', 'Pancreatitis', 'Agranulocitosis'],
      ans: 1,
      exp: 'El alosetrón (antagonista 5-HT3) está restringido a mujeres con SII-D grave por el riesgo de colitis isquémica y complicaciones del estreñimiento.',
      why: ['No es su efecto adverso típico.', '', 'No es su efecto adverso principal.', 'Es de eluxadolina.', 'No es su efecto adverso.'],
      ref: 'ACG 2021 SII' })
  ]
};
