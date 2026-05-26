// ─────────────────────────────────────────────────────────────
//  src/data/content.js
//  Centraliza todo el contenido estático del sitio.
//  Edita aquí para actualizar textos, proyectos, tecnologías, etc.
// ─────────────────────────────────────────────────────────────

export const NAV_LINKS = [
  { label: "Servicios",       href: "#servicios" },
  { label: "Especialización", href: "#especializacion" },
  { label: "Casos de Éxito", href: "#proyectos" },
  { label: "Proceso",         href: "#proceso" },
  { label: "Testimonios",     href: "#testimonios" },
  { label: "Contacto",        href: "#contacto" },
];

export const HERO_TAGLINE = "El equipo técnico que tu empresa necesita para ganar.";

export const HERO_BADGE = "Arquitectura · Web · Móvil · IA · Automatizaciones · Infraestructura";

export const HERO_STATS = [
  { value: "50+", label: "Proyectos lanzados" },
  { value: "8+",  label: "Años de experiencia" },
  { value: "30+", label: "Clientes activos" },
  { value: "48h", label: "Propuesta en mano" },
];

export const SERVICES = [
  {
    icon: "🏗️",
    title: "Arquitectura de Software",
    description:
      "Diseñamos la arquitectura que sostiene operaciones críticas. Sistemas modulares, resilientes y preparados para escalar sin reescribir ni interrumpir la operación de tu negocio.",
    tags: ["Microservicios", "DDD", "Clean Arch", "API Design"],
    accent: "#6C63FF",
  },
  {
    icon: "🌐",
    title: "Desarrollo Web",
    description:
      "Plataformas empresariales que centralizan y digitalizan operaciones críticas. Desde sistemas de gestión interno hasta plataformas de cara al cliente — construidas para operar sin fallas y escalar sin límites.",
    tags: ["React", "Next.js", "Node.js", "TypeScript"],
    accent: "#3B82F6",
  },
  {
    icon: "📱",
    title: "Apps Móviles",
    description:
      "Digitaliza el acceso a tus operaciones desde cualquier dispositivo. Apps empresariales iOS y Android que conectan a tu equipo, clientes y procesos en tiempo real, sin fricción y sin doble costo.",
    tags: ["React Native", "Flutter", "Expo"],
    accent: "#06B6D4",
  },
  {
    icon: "🤖",
    title: "Inteligencia Artificial",
    description:
      "Automatiza decisiones operativas e integra inteligencia en tus procesos. Análisis predictivo, asistentes inteligentes y automatización avanzada — IA aplicada directamente a la eficiencia de tu operación.",
    tags: ["OpenAI", "LangChain", "Python", "RAG"],
    accent: "#A78BFA",
  },
  {
    icon: "⚡",
    title: "Automatizaciones",
    description:
      "Elimina los cuellos de botella operativos y libera la capacidad de tu equipo. Automatizamos flujos de trabajo, integramos sistemas y conectamos plataformas para que tu operación funcione sola.",
    tags: ["n8n", "Zapier", "RPA", "Webhooks"],
    accent: "#F59E0B",
  },
  {
    icon: "☁️",
    title: "Infraestructura & Cloud",
    description:
      "Infraestructura robusta que garantiza continuidad operativa. Migración a la nube con cero interrupciones, costos optimizados y alta disponibilidad — para que tu operación nunca se detenga.",
    tags: ["AWS", "Docker", "Kubernetes", "DevOps"],
    accent: "#10B981",
  },
];

export const STACK_CATEGORIES = [
  {
    title: "Frontend",
    number: "01",
    description: "Interfaces rápidas y\naccesibles",
    technologies: [
      { name: "React", icon: "ico-react_transparent.png" },
      { name: "Next.js", icon: "ico-next_transparent.png" },
      { name: "TypeScript", icon: "ico-typescript_transparent.png" },
      { name: "Flutter", icon: "ico-flutter.svg" } // We will handle svg in the component
    ]
  },
  {
    title: "Backend & APIs",
    number: "02",
    description: "Servidores que escalan\nsin drama",
    technologies: [
      { name: "Node.js", icon: "ico-node_transparent.png" },
      { name: "Python", icon: "ico-python_transparent.png" },
      { name: "GraphQL", icon: "ico-graphql_transparent.png" }
    ]
  },
  {
    title: "Datos",
    number: "03",
    description: "Persistencia confiable\ny veloz",
    technologies: [
      { name: "PostgreSQL", icon: "ico-postgress_transparent.png" },
      { name: "MongoDB", icon: "ico-mongodb_transparent.png" },
      { name: "Redis", icon: "ico-redis.svg" }
    ]
  },
  {
    title: "Cloud & DevOps",
    number: "04",
    description: "Despliegues automáticos,\nalta disponibilidad",
    technologies: [
      { name: "AWS", icon: "ico-aws_transparent.png" },
      { name: "Docker", icon: "ico-docker_transparent.png" },
      { name: "Kubernetes", icon: "ico-kubernetes.svg" }
    ]
  },
  {
    title: "IA & Automatización",
    number: "05",
    description: "LLMs integrados a\ntus flujos",
    technologies: [
      { name: "OpenAI", icon: "ico-chatgpt_transparent.png" },
      { name: "LangChain", icon: "ico-langchain.svg" },
      { name: "n8n", icon: "ico-n8n_transparent.png" }
    ]
  }
];

export const TECHNOLOGIES = [
  { name: "React", color: "#61DAFB", icon: "ico-react_transparent.png" },
  { name: "Node.js", color: "#68A063", icon: "ico-javascript_transparent.png" },
  { name: "TypeScript", color: "#3178C6", icon: "ico-typescript_transparent.png" },
  { name: "Python", color: "#FFD43B", icon: "ico-python_transparent.png" },
  { name: "PostgreSQL", color: "#336791", icon: "ico-postgress_transparent.png" },
  { name: "MongoDB", color: "#47A248", icon: "ico-mongodb_transparent.png" },
  { name: "Docker", color: "#2496ED", icon: "ico-docker_transparent.png" },
  { name: "AWS", color: "#FF9900", icon: "ico-aws_transparent.png" },
  { name: "Next.js", color: "#E2E8F0", icon: "ico-next_transparent.png" },
  { name: "Firebase", color: "#FFA500", icon: "ico-firebase_transparent.png" },
  { name: "GraphQL", color: "#E10098", icon: "ico-graphql_transparent.png" },
  { name: "NestJS", color: "#EA2845", icon: "ico-nest_transparent.png" },
  { name: "Django", color: "#092E20", icon: "ico-django_transparent.png" },
  { name: "JavaScript", color: "#F7DF1E", icon: "ico-javascript2_transparent.png" },
  { name: "Azure", color: "#0078D4", icon: "ico-azure_transparent.png" },
  { name: "Google Cloud", color: "#4285F4", icon: "ico-googlecloud_transparent.png" },
  { name: "Windows Server", color: "#0078D4", icon: "ico-windows_server_transparent.png" },
  { name: "Power BI", color: "#F2C811", icon: "ico-powerbi_transparent.png" },
  { name: "UiPath", color: "#FF6B35", icon: "ico-uipath_transparent.png" },
  { name: "Tailwind CSS", color: "#38BDF8", icon: "ico-tailwind_transparent.png" },
  { name: "ChatGPT", color: "#38BDF8", icon: "ico-chatgpt_transparent.png" },
];

export const PROJECTS = [
  {
    title: "POSMarket",
    category: "Web · Punto de Venta",
    metric: "+180% en ventas",
    metricValue: "+180%",
    metricContext: "incremento en ventas",
    subtitle: "Sistema POS unificado que centralizó ventas, inventario y caja en una sola plataforma.",
    cliente: "Retail peruano · 2024",
    challenge: "El cliente operaba con tres herramientas separadas para ventas, caja e inventario. En horas pico perdía el control: errores de caja, stock desactualizado y sin visibilidad para decidir qué reponer o qué promover.",
    solution: "Diseñamos una plataforma POS completa con inventario multi-almacén, punto de venta rápido, control de lotes y reportes en tiempo real. Una sola herramienta reemplazó tres sistemas desconectados y eliminó los cuellos de botella operativos.",
    results: [
      "+180% incremento en ventas en los primeros 6 meses",
      "Cero pérdidas por quiebre de stock no detectado",
      "Decisiones comerciales basadas en datos en tiempo real",
      "Reducción de errores en caja y control de reposición",
    ],
    description:
      "Centralizó ventas, inventario y reportes en una sola plataforma, eliminando tres herramientas dispersas. Control total de la operación comercial con visibilidad en tiempo real para negocios minoristas.",
    tags: ["React", "Node.js", "PostgreSQL", "AWS"],
    accentColor: "#10B981",
  },
  {
    title: "Moto GO",
    category: "Móvil · Transportes",
    metric: "iOS & Android · día 1",
    metricValue: "Día 1",
    metricContext: "lanzamiento iOS + Android",
    subtitle: "App de movilidad con GPS y cobros digitales, lanzada simultáneamente en iOS y Android.",
    cliente: "Startup de movilidad · 2024",
    challenge: "Necesitaban competir contra apps consolidadas con presupuesto limitado y salir al mercado en semanas. Un desarrollo nativo separado para iOS y Android era inviable: el doble del costo y el doble del tiempo.",
    solution: "Construimos una app cross-platform para iOS y Android con matching en tiempo real, GPS integrado, cobros digitales y panel de gestión de conductores. Una sola base de código, dos plataformas, lanzamiento el mismo día.",
    results: [
      "Lanzamiento simultáneo en iOS y Android desde día 1",
      "50% menos costo frente al desarrollo nativo separado",
      "Validación comercial con usuarios reales en semanas",
      "Matching conductor-pasajero en tiempo real operativo",
    ],
    description:
      "Digitalizó el transporte local en Perú con una plataforma de movilidad completa. Matching instantáneo, pagos digitales y GPS en tiempo real — lanzada simultáneamente en iOS y Android sin el doble costo ni tiempo.",
    tags: ["React Native", "Node.js", "Google Maps", "AWS"],
    accentColor: "#6C63FF",
  },
  {
    title: "StockPro",
    category: "Web · Logística",
    metric: "−40% tiempo de despacho",
    metricValue: "−40%",
    metricContext: "tiempo de despacho",
    subtitle: "Suite logística unificada con trazabilidad completa de inventario, despachos y auditoría.",
    cliente: "Operación logística PYME · 2023",
    challenge: "La operación sufría retrasos diarios por procesos manuales y sistemas desconectados entre inventario, despacho y transporte. Los errores frecuentes generaban pérdidas, retrabajo y reclamos de clientes.",
    solution: "Implementamos una suite logística completa con trazabilidad end-to-end, tableros por proceso, gestión de despachos, rutas de transporte y auditoría operativa centralizada. Todo el flujo logístico visible desde un solo panel.",
    results: [
      "−40% reducción en tiempo de despacho",
      "Práctica eliminación de errores de inventario",
      "Trazabilidad completa desde ingreso hasta entrega",
      "Auditoría operativa en tiempo real sin procesos manuales",
    ],
    description:
      "Redujo el tiempo de despacho un 40% y eliminó los errores de inventario que generaban pérdidas. Gestión logística completa — inventario, despachos, transporte y auditoría centralizada en una sola plataforma.",
    tags: ["React", "Node.js", "PostgreSQL", "AWS"],
    accentColor: "#F97316",
  },
  {
    title: "CallSys Pro",
    category: "CRM · Ventas y Call Center",
    metric: "+35% tasa de conversión",
    metricValue: "+35%",
    metricContext: "tasa de conversión",
    subtitle: "CRM omnicanal con pipeline visual y automatizaciones para equipos de ventas B2B.",
    cliente: "Equipo comercial B2B · 2024",
    challenge: "El equipo comercial gestionaba leads en canales dispersos — email, WhatsApp y llamadas — sin trazabilidad ni seguimiento sistemático. Perdían oportunidades y no tenían visibilidad real del embudo de ventas.",
    solution: "Centralizamos toda la gestión comercial en un CRM con pipeline visual, automatizaciones de seguimiento, integración con WhatsApp y métricas de conversión por etapa y agente. Todo el equipo operando desde una sola plataforma.",
    results: [
      "+35% incremento en tasa de conversión",
      "Pipeline comercial 100% centralizado y trazable",
      "Ciclos de venta más cortos con seguimiento automático",
      "Mayor productividad por agente con métricas en tiempo real",
    ],
    description:
      "Incrementó la conversión de ventas un 35% al centralizar gestión de clientes, pipelines y comunicación multicanal. Visibilidad completa del embudo comercial para equipos de ventas y call centers.",
    tags: ["React", "TailwindCSS", "WhatsApp API", "Node.js", "MongoDB"],
    accentColor: "#A78BFA",
  },
  {
    title: "InfraScale",
    category: "Cloud · DevOps",
    metric: "−40% costos de infraestructura",
    metricValue: "−40%",
    metricContext: "costos de infraestructura",
    subtitle: "Migración a AWS sin interrupciones para fintech con infraestructura crítica en crecimiento.",
    cliente: "Fintech (confidencial) · 2025",
    challenge: "La fintech operaba sobre infraestructura on-premise con costos elevados y riesgo real de caída en picos de carga. El sistema no podía escalar para soportar el crecimiento proyectado sin inversión desproporcionada.",
    solution: "Ejecutamos una migración progresiva a AWS con arquitectura multi-zona, CI/CD completo, observabilidad full-stack y estrategia de rollback. El sistema migró completamente sin detener la operación ni afectar a ningún usuario final.",
    results: [
      "−40% reducción en costos de infraestructura mensuales",
      "Cero interrupciones durante todo el proceso de migración",
      "Alta disponibilidad multi-zona activa 24/7",
      "Despliegues automatizados con CI/CD en producción",
    ],
    description:
      "Migró sistemas críticos a AWS con cero interrupciones operativas, reduciendo costos de infraestructura un 40%. Alta disponibilidad multi-zona y despliegues automatizados para una fintech en crecimiento.",
    tags: ["AWS", "Docker", "Kubernetes", "Terraform"],
    accentColor: "#3B82F6",
    nda: true,
  },
  {
    title: "FastFood Doña Nella",
    category: "Web · Móvil · Restaurantes",
    metric: "+3x pedidos digitales",
    metricValue: "3×",
    metricContext: "más pedidos digitales",
    subtitle: "Plataforma propia de pedidos y delivery 24/7, sin comisiones ni dependencia de terceros.",
    cliente: "Cadena gastronómica local · 2024",
    challenge: "Dependían exclusivamente del teléfono para tomar pedidos, generando demoras, errores y pérdida de ventas en horas punta. Sin canal digital propio, estaban atados a plataformas de terceros con altas comisiones.",
    solution: "Creamos una plataforma propia de pedidos digitales con carta interactiva, pagos en línea, seguimiento de entrega en tiempo real y panel de gestión para cocina y reparto. Canal digital 100% propio, sin intermediarios.",
    results: [
      "3× incremento en pedidos frente al canal telefónico",
      "Disponibilidad 24/7 sin depender de atención manual",
      "Pagos en línea integrados sin comisiones a terceros",
      "Operación de cocina y delivery más ordenada y eficiente",
    ],
    description:
      "Triplicó los pedidos al reemplazar llamadas telefónicas por una plataforma digital disponible 24/7. Carta interactiva, pagos en línea y seguimiento de entrega en tiempo real — digitalización completa del restaurante.",
    tags: ["React", "Node.js", "Firebase", "Stripe"],
    accentColor: "#F59E0B",
  },
];

export const TESTIMONIALS = [
  {
    name: "Carla Mendoza",
    role: "CEO, EcoMarket Perú",
    avatar: "CM",
    metric: "+180% ventas en 6 meses",
    text: "En 4 meses pasamos de una operación manual a un sistema completamente digitalizado. Las ventas crecieron 180% y por primera vez tenemos visibilidad real del inventario. Cada hito prometido fue cumplido.",
  },
  {
    name: "André Torres",
    role: "Fundador, Moto GO",
    avatar: "AT",
    metric: "iOS & Android en tiempo récord",
    text: "Lanzamos en iOS y Android al mismo tiempo, sin el doble costo ni el doble tiempo. El equipo anticipó cada problema antes de que apareciera — eso no es común en una agencia de desarrollo.",
  },
  {
    name: "Rodrigo Sánchez",
    role: "CTO, LogiTrack",
    avatar: "RS",
    metric: "−40% tiempo de despacho",
    text: "Redujimos el tiempo de despacho un 40% y los errores de inventario prácticamente desaparecieron. Lo más valioso: el código que entregaron se puede mantener. No fue un parche.",
  },
];

export const CONTACT_INFO = [
  { icon: "📍", label: "Ubicación", value: "Lima, Perú" },
  { icon: "📧", label: "Email", value: "contacto@studiodevperu.com" },
  { icon: "📱", label: "WhatsApp", value: "+51 951 655 295" },
];

export const SOCIAL_LINKS = [
  { label: "LinkedIn", href: "https://linkedin.com", color: "#0A66C2" },
  { label: "Facebook", href: "https://www.facebook.com/profile.php?id=61583754606728", color: "#1877F2" },
  { label: "Instagram", href: "https://instagram.com", color: "#E1306C" },
];
