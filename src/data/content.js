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

export const HERO_TAGLINE = "Transformamos tus ideas en soluciones reales.";

export const HERO_BADGE = "Arquitectura · Web · Móvil · IA · Automatizaciones · Infraestructura";

export const HERO_STATS = [
  { value: "30+", label: "Proyectos" },
  { value: "5+", label: "Años" },
  { value: "20+", label: "Clientes" },
  { value: "98%", label: "Satisfacción" },
];

export const SERVICES = [
  {
    icon: "🏗️",
    title: "Arquitectura de Software",
    description:
      "Diseñamos la base sólida de tu sistema: arquitecturas escalables, microservicios, patrones de diseño y decisiones técnicas que aguantan el crecimiento.",
    tags: ["Microservicios", "DDD", "Clean Arch", "API Design"],
    accent: "#6C63FF",
  },
  {
    icon: "🌐",
    title: "Desarrollo Web",
    description:
      "Aplicaciones web modernas, rápidas y accesibles. Desde landing pages de alto impacto hasta sistemas SaaS complejos.",
    tags: ["React", "Next.js", "Node.js", "TypeScript"],
    accent: "#3B82F6",
  },
  {
    icon: "📱",
    title: "Apps Móviles",
    description:
      "Aplicaciones iOS y Android nativas o multiplataforma con experiencias fluidas que los usuarios aman.",
    tags: ["React Native", "Flutter", "Expo"],
    accent: "#06B6D4",
  },
  {
    icon: "🤖",
    title: "Inteligencia Artificial",
    description:
      "Integramos IA en tus productos: modelos LLM, visión por computadora, NLP, RAG y automatización inteligente.",
    tags: ["OpenAI", "LangChain", "Python", "RAG"],
    accent: "#A78BFA",
  },
  {
    icon: "⚡",
    title: "Automatizaciones",
    description:
      "Eliminamos tareas repetitivas y conectamos tus herramientas. Flujos automatizados que ahorran horas de trabajo cada día.",
    tags: ["n8n", "Zapier", "RPA", "Webhooks"],
    accent: "#F59E0B",
  },
  {
    icon: "☁️",
    title: "Infraestructura & Cloud",
    description:
      "Desplegamos, escalamos y securizamos tu aplicación en la nube. CI/CD, contenedores, monitoreo y alta disponibilidad.",
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
    description:
      "Solución integral de punto de venta diseñada para microempresas y negocios minoristas del Perú. Control total de ventas, inventario, clientes y finanzas en una sola plataforma.",
    tags: ["React", "Node.js", "PostgreSQL", "AWS"],
    accentColor: "#10B981",
  },
  {
    title: "MedConnect",
    category: "Móvil · Salud",
    description:
      "App de telemedicina para consultas médicas remotas con videollamadas, expedientes digitales e IA para triaje.",
    tags: ["React Native", "WebRTC", "OpenAI", "AWS"],
    accentColor: "#6C63FF",
  },
  {
    title: "StockPro",
    category: "Web · Logística",
    description:
      "Sistema completo de gestión logística para PYMEs peruanas — inventario, despachos, transporte, compras y auditoría en una sola plataforma.",
    tags: ["React", "Node.js", "PostgreSQL", "AWS"],
    accentColor: "#F97316",
  },
  {
    title: "CallSys Pro",
    category: "CRM · Ventas y Call Center",
    description:
      "Aplicación WEB para Call Center de Ventas, diseñada para optimizar la gestión de clientes, oportunidades y procesos de ventas en múltiples canales, ofrece una interfaz moderna, ágil y adaptable.",
    tags: ["React", "TailwindCSS", "WhatsApp API", "Node.js", "MongoDB", "MongoDB Atlas"],
    accentColor: "#A78BFA",
  },
  {
    title: "InfraScale",
    category: "Cloud · DevOps",
    description:
      "Fintech en el cual asumimos el reto: migrar sistemas críticos a la nube y optimizar cada recurso para responder a las exigencias de un sector altamente regulado. Modernizamos arquitecturas heredadas, reforzamos la seguridad y diseñamos una infraestructura capaz de sostener innovación constante",
    tags: ["AWS", "Docker", "Kubernetes", "Terraform"],
    accentColor: "#3B82F6",
  },
  {
    title: "FacturaIA",
    category: "IA · Automatización",
    description:
      "Sistema de procesamiento automático de facturas con OCR, validación con SUNAT y contabilización en tiempo real.",
    tags: ["Python", "OCR", "FastAPI", "React"],
    accentColor: "#F59E0B",
  },
];

export const TESTIMONIALS = [
  {
    name: "Carla Mendoza",
    role: "CEO, EcoMarket Perú",
    avatar: "CM",
    text: "DevStudio transformó completamente nuestra presencia digital. El equipo es excepcional, cumplieron tiempos y superaron expectativas.",
  },
  {
    name: "Dr. Andrés Torres",
    role: "Fundador, MedConnect",
    avatar: "AT",
    text: "Profesionalismo de primer nivel. Convirtieron una idea compleja en una app funcional en tiempo récord. Los recomiendo al 100%.",
  },
  {
    name: "Rodrigo Sánchez",
    role: "CTO, LogiTrack",
    avatar: "RS",
    text: "Su dominio técnico y enfoque en la experiencia de usuario marcó la diferencia. El producto final superó todas nuestras métricas.",
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
