// Datos generales: examen, materias, temario oficial (semanas 1–6) y rangos.
// Para agregar un tema nuevo con contenido: crea un archivo en esta carpeta con
// lessons/questions/cards/cases/anims y vuelve a correr `node build.mjs`.
export default {
  exam: {
    date: '2026-11-10',
    start: '2026-10-21',
    label: 'Parcial regional de Medicina Interna',
    place: 'Aula 3 · Hospital Zambrano Hellion',
    weight: '25% de la calificación teórica',
    classes: { 5: '2026-10-27', 6: '2026-11-03' },
    sim: ['2026-11-07', '2026-11-08']
  },

  subjects: [
    { id: 'cardio', name: 'Cardiología', short: 'Cardio', color: '#FF5470', icon: 'heart' },
    { id: 'endo', name: 'Endocrinología', short: 'Endo', color: '#B48CFF', icon: 'thyroid' },
    { id: 'gastro', name: 'Gastroenterología', short: 'Gastro', color: '#FF9B3D', icon: 'stomach' },
    { id: 'hemato', name: 'Hematología', short: 'Hemato', color: '#FF8FD0', icon: 'drop' },
    { id: 'nefro', name: 'Nefrología', short: 'Nefro', color: '#4DB8FF', icon: 'kidney' },
    { id: 'reuma', name: 'Reumatología', short: 'Reuma', color: '#C6E84A', icon: 'bone' }
  ],

  topics: [
    { id: 'dm2', n: 1, pri: 'alta', subj: 'endo', weeks: [5, 6], title: 'Diabetes tipo 2', sub: 'Diagnóstico, metas, fármacos y elección según comorbilidad (metformina, iSGLT2, arGLP-1, iDPP-4, sulfonilureas, insulina)' },
    { id: 'sca', n: 2, pri: 'alta', subj: 'cardio', weeks: [2], title: 'Síndromes coronarios agudos', sub: 'IAMCEST, IAMSEST, angina inestable, troponina, reperfusión, doble antiagregación' },
    { id: 'lra', n: 3, pri: 'alta', subj: 'nefro', weeks: [1], title: 'Lesión renal aguda', sub: 'Prerrenal, intrínseca (NTA) y posrenal, FENa, estadios KDIGO, indicaciones de diálisis urgente' },
    { id: 'smdl', n: 4, pri: 'alta', subj: 'endo', weeks: [3, 4], title: 'Síndrome metabólico y dislipidemia', sub: 'Criterios, metas de LDL según riesgo, estatinas, ezetimiba, iPCSK9, hipertrigliceridemia' },
    { id: 'hta', n: 5, pri: 'alta', subj: 'nefro', weeks: [6], title: 'Hipertensión arterial', sub: 'Diagnóstico, metas, tratamiento escalonado, HTA secundaria y resistente, urgencia vs emergencia' },
    { id: 'erc', n: 6, pri: 'alta', subj: 'nefro', weeks: [2], title: 'Enfermedad renal crónica', sub: 'Clasificación G y A, complicaciones (anemia, mineral óseo, acidosis, hiperkalemia), nefroprotección' },
    { id: 'glomerulo', n: 7, pri: 'alta', subj: 'nefro', weeks: [3, 4], title: 'Síndrome nefrótico y nefrítico', sub: 'Glomerulonefritis: causas por edad, depósitos, complemento, biopsia' },
    { id: 'anemias', n: 8, pri: 'alta', subj: 'hemato', weeks: [1, 2], title: 'Anemias', sub: 'Abordaje por VCM y reticulocitos, ferropénica, de inflamación, talasemia, megaloblástica por B12 y folato' },
    { id: 'stda', n: 9, pri: 'alta', subj: 'gastro', weeks: [3], title: 'Enfermedad ácido-péptica y STDA', sub: 'H. pylori, AINE, Glasgow-Blatchford, IBP, endoscopia temprana' },
    { id: 'pancrea', n: 10, pri: 'alta', subj: 'gastro', weeks: [4], title: 'Pancreatitis aguda', sub: 'Criterios diagnósticos, gravedad (Atlanta revisada), líquidos, nutrición y complicaciones' },
    { id: 'ar', n: 11, pri: 'alta', subj: 'reuma', weeks: [5], title: 'Artritis reumatoide', sub: 'Criterios ACR/EULAR 2010, FAME, metotrexato' },
    { id: 'gota', n: 12, pri: 'alta', subj: 'reuma', weeks: [3], title: 'Gota y pseudogota', sub: 'Cristales, ataque agudo, terapia hipouricemiante y meta de ácido úrico' },
    { id: 'scc', n: 13, pri: 'media', subj: 'cardio', weeks: [1], title: 'Síndromes coronarios crónicos', sub: 'Probabilidad clínica, estudios, antianginosos, cuándo revascularizar' },
    { id: 'aortica', n: 14, pri: 'media', subj: 'cardio', weeks: [3], title: 'Valvulopatía aórtica', sub: 'Estenosis e insuficiencia, criterios de gravedad, TAVI vs cirugía' },
    { id: 'tep', n: 15, pri: 'media', subj: 'cardio', weeks: [5], title: 'Tromboembolia pulmonar', sub: 'Wells, dímero D, estratificación de riesgo, anticoagulación y trombólisis' },
    { id: 'sangrado', n: 16, pri: 'media', subj: 'hemato', weeks: [4], title: 'Paciente con sangrado', sub: 'Plaquetas, PTI, pruebas de coagulación, hemofilia, enfermedad de von Willebrand' },
    { id: 'hemoliticas', n: 17, pri: 'media', subj: 'hemato', weeks: [3], title: 'Anemias hemolíticas', sub: 'Intra vs extravascular, Coombs, esferocitosis, G6PD, autoinmune, microangiopáticas' },
    { id: 'leucemias', n: 18, pri: 'media', subj: 'hemato', weeks: [5], title: 'Leucemias agudas y SMD', sub: 'Leucemias agudas y síndrome mielodisplásico' },
    { id: 'erge', n: 19, pri: 'media', subj: 'gastro', weeks: [2], title: 'ERGE', sub: 'Síntomas típicos y atípicos, datos de alarma, IBP, cuándo endoscopia, Barrett' },
    { id: 'diarrea', n: 20, pri: 'media', subj: 'gastro', weeks: [5], title: 'Diarrea, malabsorción y celiaca', sub: 'Diarrea aguda y crónica, malabsorción, enfermedad celiaca' },
    { id: 'espondilo', n: 21, pri: 'media', subj: 'reuma', weeks: [6], title: 'Espondiloartropatías y APs', sub: 'Espondiloartropatías y artritis psoriásica: HLA-B27, criterios ASAS' },
    { id: 'oa', n: 22, pri: 'media', subj: 'reuma', weeks: [4], title: 'Osteoartritis', sub: 'Clínica, radiografía y tratamiento escalonado' },
    { id: 'mitral', n: 23, pri: 'media', subj: 'cardio', weeks: [4], title: 'Valvulopatía mitral', sub: 'Estenosis e insuficiencia, primaria vs secundaria, valvuloplastia' },
    { id: 'linfo', n: 24, pri: 'baja', subj: 'hemato', weeks: [6], title: 'Linfoproliferativos', sub: 'Linfoma de Hodgkin, no Hodgkin y LLC' },
    { id: 'hipofisis', n: 25, pri: 'baja', subj: 'endo', weeks: [1, 2], title: 'Tumores hipofisarios', sub: 'Micro vs macro, prolactinoma, acromegalia, Cushing, efecto de masa' },
    { id: 'hp', n: 26, pri: 'baja', subj: 'cardio', weeks: [6], title: 'Hipertensión pulmonar', sub: '5 grupos, diagnóstico por cateterismo, tratamiento por grupo' },
    { id: 'deglucion', n: 27, pri: 'baja', subj: 'gastro', weeks: [1], title: 'Trastornos de la deglución', sub: 'Disfagia orofaríngea vs esofágica, obstructiva vs motora, acalasia' },
    { id: 'sii', n: 28, pri: 'baja', subj: 'gastro', weeks: [6], title: 'Síndrome de intestino irritable', sub: 'Criterios de Roma IV y tratamiento' },
    { id: 'dialisis', n: 29, pri: 'baja', subj: 'nefro', weeks: [5], title: 'Diálisis y trasplante renal', sub: 'Modalidades, indicaciones, complicaciones' },
    { id: 'abordaje', n: 30, pri: 'baja', subj: 'reuma', weeks: [1, 2], title: 'Abordaje reumatológico', sub: 'Interrogatorio, articular vs periarticular, inflamatorio vs mecánico, patrón' }
  ],

  ranks: [
    { name: 'MIP', long: 'Médico interno de pregrado', xp: 0 },
    { name: 'MPSS', long: 'Pasante de servicio social', xp: 400 },
    { name: 'R1', long: 'Residente de primer año', xp: 1000 },
    { name: 'R2', long: 'Residente de segundo año', xp: 1800 },
    { name: 'R3', long: 'Residente de tercer año', xp: 2800 },
    { name: 'JR', long: 'Jefe de residentes', xp: 4000 },
    { name: 'MI', long: 'Internista', xp: 5500 }
  ]
};
