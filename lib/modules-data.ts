// --- MÓDULO 1: ARSENAL ---
export const arsenalData = {
  id: 'arsenal-del-amante',
  title: "Arsenal del Amante",
  description: "7 tácticas científicas para dominio total.",
  hero: "Domina tu rendimiento con protocolos científicamente validados.",
  longDescription: "Este módulo desglosa las 7 técnicas fundamentales de control neuromuscular y mental para recalibrar tu respuesta eyaculatoria. No se trata de 'aguantar', se trata de 'controlar'.",
  itemsIncluded: [
    "Respiración de Anclaje: Controla el sistema nervioso.",
    "Kegel Inverso: Domina el músculo PC.",
    "Pausa Estratégica: Resetea la excitación.",
    "Cambio de Foco: Redirige tu atención.",
    "Ritmo Maestro: Modula la velocidad.",
    "Mapa del Placer: Explora nuevas rutas.",
    "Comunicación Cómplice: Sincronízate con tu pareja."
  ],
  forbidden: ["Ansiedad de rendimiento", "Ritmos monótonos", "Falta de comunicación"],
  tactics: [
    {
      id: "ancla-mental",
      title: "01. El Ancla Mental",
      mission: "Control de ansiedad vía respiración parasimpática.",
      protocol: ["Inhala 4s nariz (diafragma)", "Pausa 2s", "Exhala 6s boca", "Sincroniza movimiento"],
      proTip: "Practica 5 min/día fuera del dormitorio para automatizar.",
      science: "Respiración lenta reduce frecuencia cardíaca y cortisol.",
    },
    {
      id: "kegel-inverso",
      title: "02. El Músculo Secreto",
      mission: "Dominio del PC para control del reflejo eyaculatorio.",
      protocol: ["Identifica PC al cortar flujo", "Realiza movimiento opuesto", "Entrena 2s contracción, 10s relajación"],
      proTip: "Aplica Kegel inverso cuando excitación suba rápido.",
      science: "Mayor control neuromuscular eleva el umbral del reflejo.",
    },
    {
      id: "pausa-estrategica",
      title: "03. La Pausa Estratégica",
      mission: "Resetear excitación para prolongar el acto.",
      protocol: ["Usa medidor interno 1-10", "En 7-8 detén estimulación", "Respira hasta 3-4", "Reanuda con control"],
      proTip: "Comunícalo y conviértelo en juego de pareja.",
      science: "Práctica recalibra umbral y mejora detección de señales.",
    },
    {
      id: "cambio-foco",
      title: "04. El Cambio de Foco",
      mission: "Redirigir atención al placer de tu pareja.",
      protocol: ["Observa respiración, sonidos, expresiones", "Escucha y mira conscientemente", "Haz placer de tu pareja tu objetivo"],
      proTip: "Durante pausa usa manos/boca para mantener conexión.",
      science: "Recursos atencionales limitados; redirigirlos reduce escalada propia.",
    },
    {
      id: "ritmo-maestro",
      title: "05. El Ritmo del Maestro",
      mission: "Modular excitación con variaciones velocidad/profundidad.",
      protocol: ["Evita ritmo constante prolongado", "Alterna rápido/superficial con lento/profundo", "Sincroniza fases lentas con respiración"],
      proTip: "Ceder ritmo a pareja reduce tu carga de control.",
      science: "Ritmo correlaciona con activación autonómica; lento frena escalada.",
    },
    {
      id: "mapa-placer",
      title: "06. El Mapa del Placer",
      mission: "Usar descansos activos y explorar rutas sensoriales.",
      protocol: ["Identifica puntos calientes", "Cambia posición para modificar ángulo", "Activa zonas erógenas con manos/boca"],
      proTip: "Posturas erguidas/recostadas hacia atrás dan más control.",
      science: "Diversificación sensorial distribuye carga neuronal.",
    },
    {
      id: "comunicacion-complice",
      title: "07. La Comunicación Cómplice",
      mission: "Convertir a tu pareja en aliada para control y placer mutuo.",
      protocol: ["Habla antes en contexto relajado", "Acordad señal discreta", "Agradece y refuerza tras intimidad"],
      proTip: "Reformula pausas como momentos de conexión intensa.",
      science: "Menos ansiedad de rendimiento = menos cortisol + más presencia.",
    },
  ],
}

// --- MÓDULO 2: ACONDICIONAMIENTO ---
export const acondicionamientoData = {
  id: 'acondicionamiento',
  title: "Acondicionamiento",
  description: "Técnicas de vitalidad masculina seguras.",
  hero: "Mejora la salud circulatoria con protocolos médicos.",
  longDescription: "Este módulo se enfoca en la salud física y circulatoria. Aprenderás técnicas manuales seguras y probadas para mejorar la vitalidad y la salud general de los tejidos, siempre priorizando la seguridad.",
  itemsIncluded: ["Protocolo de Seguridad", "Técnica Jelqing Mejorada", "Stretching Controlado", "Plan de Progresión"],
  forbidden: ["No calentar", "Causar dolor", "Sesiones largas", "Ignorar el descanso"],
  safety: {
    title: "PROTOCOLO DE SEGURIDAD",
    rules: [
      "Calentamiento obligatorio: paño tibio 5 minutos",
      "Lubricación de calidad (nunca jabón)",
      "Nunca forzar ni causar dolor",
      "Parar ante cualquier dolor agudo",
      "Sesiones máx 20 minutos",
      "Descansar 48h entre sesiones",
    ],
  },
  techniques: [
    {
      id: "jelqing",
      title: "Jelqing Mejorado",
      objective: "Mejorar circulación sanguínea sin dañar tejidos.",
      steps: ["Lubricación generosa", "Formar OK con pulgar e índice", "Presión SUAVE (nunca dolorosa)", "Deslizar base a glande (3-5s)", "Cambiar mano, repetir 10-15 veces"],
      frequency: "3x semana, 48h descanso",
      warning: "NO usar si tienes priapismo, lesiones o enfermedades vasculares.",
    },
    {
      id: "stretching",
      title: "Stretching Controlado",
      objective: "Manteniflácido sin forzar.",
      steps: ["Calentar con paño tibio 5 min", "Tomar glande con toalla entre piel", "Estirar SUAVEMENTE (nunca dolor)", "Mantener 10-30 segundos", "Descansar 10s entre repeticiones", "Máximo 10 repeticiones por sesión"],
      frequency: "2-3x semana",
      warning: "Suspender ante dolor, hematomas o entumecimiento.",
    },
  ],
  progression: "Semanas 1-4: 10 min/sesión | Semanas 5-8: 15 min | Semanas 9+: 20 min",
  timeline: "Resultados requieren 8-12 semanas de consistencia.",
}

// --- MÓDULO 3: DIETA ---
export const dietaData = {
  id: 'dieta-del-vigor',
  title: "Dieta del Vigor",
  description: "Nutrición molecular para rendimiento óptimo.",
  hero: "Nutrición molecular para producción hormonal óptima.",
  longDescription: "Tu rendimiento hormonal y energético empieza en la cocina. Este módulo identifica los 15 alimentos clave que actúan como precursores hormonales, mejoran el flujo sanguíneo y reducen la inflamación.",
  itemsIncluded: ["Proteínas y Grasas", "Minerales Críticos", "Precursores Hormonales", "Smoothie VIRIL"],
  forbidden: [
    "Azúcar añadido: Fructosa baja testosterona.",
    "Alcohol excesivo: Inhibe síntesis hormonal.",
    "Plásticos BPA: Actúan como xenoestrógenos.",
    "Soja no fermentada: Contiene isoflavonas.",
  ],
  categories: [
    {
      title: "PROTEÍNAS Y GRASAS SALUDABLES",
      foods: [
        { name: "Huevos", description: "Colesterol para testosterona + vitamina D", servings: "2-3 huevos/día" },
        { name: "Salmón", description: "Omega-3, vitamina D, proteína", servings: "150-200g, 3x semana" },
        { name: "Aguacate", description: "Grasas monoinsaturadas + vitamina E", servings: "½ unidad/día" },
        { name: "Carne de Res Orgánica", description: "Zinc, hierro, creatina", servings: "200g, 2-3x semana" },
  a ],
    },
    {
      title: "MINERALES CRÍTICOS",
      foods: [
        { name: "Ostras", description: "Zinc (el más alto de todos)", servings: "6-12 unidades, 1x semana" },
        { name: "Espinacas", description: "Magnesio, folato, nitratos", servings: "2 tazas frescas/día" },
        { name: "Nueces Brasileñas", description: "Selenio (1 nuez cubre el día)", servings: "1-2 unidades/día" },
        { name: "Chocolate Negro 85%", description: "Flavonoides, magnesio", servings: "30-40g/día" },
      ],
    },
  ],
  smoothie: {
    title: "SMOOTHIE VIRIL DIARIO",
    ingredients: [
      "1 taza leche de almendra sin azúcar",
      "1 plátano",
      "2 cucharadas mantequilla maní natural",
      "1 huevo crudo (orgánico)",
      "1 cucharada cacao puro",
      "1 cucharada miel",
      "¼ taza arándanos",
      "1 cucharada semillas chía",
      "1 cucharada polvo proteína suero",
    ],
    instructions: "Procesar 60s. Consumir inmediatamente.",
    benefits: "Precursores hormonales + energía + antioxidantes en un vaso",
  },
}