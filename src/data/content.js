// ─────────────────────────────────────────────────────────────
//  src/data/content.js
//  Centraliza todo el contenido estático del sitio.
//  Edita aquí para actualizar textos, proyectos, tecnologías, etc.
// ─────────────────────────────────────────────────────────────

export const NAV_LINKS = [
  { label: "Servicios", href: "#servicios" },
  { label: "Tecnologías", href: "#tecnologias" },
  { label: "Proyectos", href: "#proyectos" },
  { label: "Testimonios", href: "#testimonios" },
  { label: "Contacto", href: "#contacto" },
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
      "Construimos la base tecnológica de tu negocio para que escalar no signifique reescribir desde cero ni detener operaciones. Tu empresa crece — tu sistema la sigue.",
    tags: ["Microservicios", "DDD", "Clean Arch", "API Design"],
    accent: "#6C63FF",
  },
  {
    icon: "🌐",
    title: "Desarrollo Web",
    description:
      "Desde el sistema que digitaliza tu operación diaria hasta la plataforma que fideliza clientes. Aplicaciones web construidas para generar resultados de negocio, no solo para lucir bien.",
    tags: ["React", "Next.js", "Node.js", "TypeScript"],
    accent: "#3B82F6",
  },
  {
    icon: "📱",
    title: "Apps Móviles",
    description:
      "Pon tu negocio en el bolsillo de tus clientes y colaboradores. Apps iOS y Android que se usan y no se desinstalan — desarrolladas en un solo ciclo, sin el doble costo ni el doble tiempo.",
    tags: ["React Native", "Flutter", "Expo"],
    accent: "#06B6D4",
  },
  {
    icon: "🤖",
    title: "Inteligencia Artificial",
    description:
      "Reduce costos operativos y abre nuevas fuentes de ingreso antes de que lo haga tu competencia. Integramos IA en tus procesos — asistentes inteligentes, análisis predictivo y automatización avanzada.",
    tags: ["OpenAI", "LangChain", "Python", "RAG"],
    accent: "#A78BFA",
  },
  {
    icon: "⚡",
    title: "Automatizaciones",
    description:
      "Cada hora que tu equipo dedica a tareas repetitivas es dinero que se pierde. Eliminamos procesos manuales, conectamos tus sistemas y liberamos a tu equipo para enfocarse en lo que realmente genera valor.",
    tags: ["n8n", "Zapier", "RPA", "Webhooks"],
    accent: "#F59E0B",
  },
  {
    icon: "☁️",
    title: "Infraestructura & Cloud",
    description:
      "Lleva tu operación a la nube sin interrupciones ni sorpresas en la factura. Infraestructura que se escala y recupera automáticamente, con un costo promedio 30–40% menor que los servidores tradicionales.",
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
    description:
      "Centralizó ventas, inventario y reportes en una sola plataforma, eliminando tres herramientas dispersas. Control total de la operación comercial con visibilidad en tiempo real para negocios minoristas.",
    tags: ["React", "Node.js", "PostgreSQL", "AWS"],
    accentColor: "#10B981",
  },
  {
    title: "Moto GO",
    category: "Móvil · Transportes",
    metric: "iOS & Android · día 1",
    description:
      "Digitalizó el transporte local en Perú con una plataforma de movilidad completa. Matching instantáneo, pagos digitales y GPS en tiempo real — lanzada simultáneamente en iOS y Android sin el doble costo ni tiempo.",
    tags: ["React Native", "Node.js", "Google Maps", "AWS"],
    accentColor: "#6C63FF",
  },
  {
    title: "StockPro",
    category: "Web · Logística",
    metric: "−40% tiempo de despacho",
    description:
      "Redujo el tiempo de despacho un 40% y eliminó los errores de inventario que generaban pérdidas. Gestión logística completa — inventario, despachos, transporte y auditoría centralizada en una sola plataforma.",
    tags: ["React", "Node.js", "PostgreSQL", "AWS"],
    accentColor: "#F97316",
  },
  {
    title: "CallSys Pro",
    category: "CRM · Ventas y Call Center",
    metric: "+35% tasa de conversión",
    description:
      "Incrementó la conversión de ventas un 35% al centralizar gestión de clientes, pipelines y comunicación multicanal. Visibilidad completa del embudo comercial para equipos de ventas y call centers.",
    tags: ["React", "TailwindCSS", "WhatsApp API", "Node.js", "MongoDB"],
    accentColor: "#A78BFA",
  },
  {
    title: "InfraScale",
    category: "Cloud · DevOps",
    metric: "−40% costos de infraestructura",
    description:
      "Migró sistemas críticos a AWS con cero interrupciones operativas, reduciendo costos de infraestructura un 40%. Alta disponibilidad multi-zona y despliegues automatizados para una fintech en crecimiento.",
    tags: ["AWS", "Docker", "Kubernetes", "Terraform"],
    accentColor: "#3B82F6",
    nda: true,
  },
  {
    title: "FastFood Doña Nella",
    category: "Web · Móvil · Restaurantes",
    metric: "+3x pedidos vs. teléfono",
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
