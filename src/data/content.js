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
      "Tu sistema no se caerá cuando tu empresa crezca. Diseñamos la base técnica para que escalar 10× no signifique reescribir desde cero ni detener operaciones.",
    tags: ["Microservicios", "DDD", "Clean Arch", "API Design"],
    accent: "#6C63FF",
  },
  {
    icon: "🌐",
    title: "Desarrollo Web",
    description:
      "Desde la landing que convierte hasta el SaaS que retiene usuarios. Apps rápidas, accesibles y construidas para generar resultados — no solo para verse bien.",
    tags: ["React", "Next.js", "Node.js", "TypeScript"],
    accent: "#3B82F6",
  },
  {
    icon: "📱",
    title: "Apps Móviles",
    description:
      "Apps que los usuarios descargan, usan y no desinstalan. iOS y Android con experiencias fluidas entregadas en un solo ciclo de desarrollo, sin el doble costo.",
    tags: ["React Native", "Flutter", "Expo"],
    accent: "#06B6D4",
  },
  {
    icon: "🤖",
    title: "Inteligencia Artificial",
    description:
      "Integra IA antes de que lo haga tu competencia. LLMs, visión artificial y automatización inteligente que reducen costos operativos y abren nuevas fuentes de ingreso.",
    tags: ["OpenAI", "LangChain", "Python", "RAG"],
    accent: "#A78BFA",
  },
  {
    icon: "⚡",
    title: "Automatizaciones",
    description:
      "Cada hora que tu equipo dedica a tareas repetitivas es dinero que se pierde. Automatizamos operaciones y conectamos herramientas para que tu equipo haga solo lo que importa.",
    tags: ["n8n", "Zapier", "RPA", "Webhooks"],
    accent: "#F59E0B",
  },
  {
    icon: "☁️",
    title: "Infraestructura & Cloud",
    description:
      "Migra a la nube sin caídas y sin facturas sorpresa. Infraestructura que escala sola, se recupera sola y en promedio cuesta 30–40% menos que on-premise.",
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
      "Reemplazó tres herramientas separadas con una sola plataforma. Control total de ventas, inventario multi-almacén y reportes en tiempo real para negocios minoristas del Perú.",
    tags: ["React", "Node.js", "PostgreSQL", "AWS"],
    accentColor: "#10B981",
  },
  {
    title: "Moto GO",
    category: "Móvil · Transportes",
    metric: "iOS & Android · día 1",
    description:
      "La alternativa local a Uber para mototaxis y taxis en Perú. Matching instantáneo con conductores verificados, GPS en tiempo real, identificación de pasajero y cobros digitales — todo en una sola app lanzada simultáneamente en iOS y Android sin el doble costo.",
    tags: ["React Native", "Node.js", "Google Maps", "AWS"],
    accentColor: "#6C63FF",
  },
  {
    title: "StockPro",
    category: "Web · Logística",
    metric: "−40% tiempo de despacho",
    description:
      "Redujo el tiempo de despacho un 40% y eliminó errores de inventario. Gestión logística completa para PYMEs — inventario, despachos, transporte y auditoría en una sola plataforma.",
    tags: ["React", "Node.js", "PostgreSQL", "AWS"],
    accentColor: "#F97316",
  },
  {
    title: "CallSys Pro",
    category: "CRM · Ventas y Call Center",
    metric: "+35% tasa de conversión",
    description:
      "CRM para call centers de ventas que mejoró la conversión un 35%. Gestión de clientes, oportunidades y pipelines en múltiples canales con interfaz moderna y adaptable.",
    tags: ["React", "TailwindCSS", "WhatsApp API", "Node.js", "MongoDB"],
    accentColor: "#A78BFA",
  },
  {
    title: "InfraScale",
    category: "Cloud · DevOps",
    metric: "−40% costos de infraestructura",
    description:
      "Migración de sistemas críticos de una fintech a AWS con cero paradas. Recortó costos de infraestructura un 40% con alta disponibilidad multi-zona y pipelines CI/CD.",
    tags: ["AWS", "Docker", "Kubernetes", "Terraform"],
    accentColor: "#3B82F6",
    nda: true,
  },
  {
    title: "FastFood Doña Nella",
    category: "Web · Móvil · Restaurantes",
    metric: "+3x pedidos vs. teléfono",
    description:
      "Eliminó las llamadas y las demoras. Plataforma digital de pedidos y delivery para restaurante que triplicó los pedidos al pasar a canales digitales — con carta interactiva, pagos en línea y seguimiento de entrega en tiempo real, disponible 24/7.",
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
