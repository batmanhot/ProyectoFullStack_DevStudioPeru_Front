// ─────────────────────────────────────────────────────────────
//  src/data/content.js
//  Centraliza todo el contenido estático del sitio.
//  Edita aquí para actualizar textos, proyectos, tecnologías, etc.
// ─────────────────────────────────────────────────────────────

export const NAV_LINKS = [
  { label: "Nosotros",    href: "#nosotros"     },
  { label: "Servicios",   href: "#servicios"    },
  { label: "Tecnologías", href: "#tecnologias"  },
  { label: "Proyectos",   href: "#proyectos"    },
  { label: "Testimonios", href: "#testimonios"  },
  { label: "Contacto",    href: "#contacto"     },
];

export const HERO_TAGLINE = "Transformamos tus ideas en soluciones reales.";

export const HERO_BADGE  = "Arquitectura · Web · Móvil · IA · Automatizaciones · Infraestructura";

export const HERO_STATS = [
  { value: "30+", label: "Proyectos"    },
  { value: "5+",  label: "Años"         },
  { value: "20+", label: "Clientes"     },
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

export const TECHNOLOGIES = [
  { name: "React",      color: "#61DAFB" },
  { name: "Node.js",    color: "#68A063" },
  { name: "TypeScript", color: "#3178C6" },
  { name: "Python",     color: "#FFD43B" },
  { name: "PostgreSQL", color: "#336791" },
  { name: "MongoDB",    color: "#47A248" },
  { name: "Docker",     color: "#2496ED" },
  { name: "AWS",        color: "#FF9900" },
  { name: "Next.js",    color: "#E2E8F0" },
  { name: "Flutter",    color: "#54C5F8" },
  { name: "GraphQL",    color: "#E10098" },
  { name: "Redis",      color: "#DC382D" },
];

export const PROJECTS = [
  {
    title: "EcoMarket",
    category: "Web · E-commerce",
    description:
      "Plataforma de ventas online para productos orgánicos con pagos integrados, panel admin y arquitectura de microservicios.",
    tags: ["React", "Node.js", "Stripe", "AWS"],
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
    title: "LogiTrack",
    category: "Web · Logística",
    description:
      "Sistema de trazabilidad y gestión de flotas en tiempo real con mapas interactivos y automatización de alertas.",
    tags: ["Next.js", "Maps API", "n8n", "PostgreSQL"],
    accentColor: "#F97316",
  },
  {
    title: "AutoBot CRM",
    category: "IA · Automatización",
    description:
      "CRM potenciado con IA que automatiza seguimiento de leads, genera respuestas inteligentes y predice conversiones.",
    tags: ["LangChain", "Python", "Zapier", "GPT-4"],
    accentColor: "#A78BFA",
  },
  {
    title: "InfraScale",
    category: "Cloud · DevOps",
    description:
      "Migración y optimización de infraestructura cloud para startup fintech. Reducción de costos del 40% y 99.9% uptime.",
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
  { icon: "📍", label: "Ubicación", value: "Lima, Perú"                },
  { icon: "📧", label: "Email",     value: "contacto@studiodevperu.com" },
  { icon: "📱", label: "WhatsApp",  value: "+51 951 655 295"            },
];

export const SOCIAL_LINKS = [
  { label: "LinkedIn",  href: "https://linkedin.com",  color: "#0A66C2" },
  { label: "Facebook",  href: "https://facebook.com",  color: "#1877F2" },
  { label: "Instagram", href: "https://instagram.com", color: "#E1306C" },
];
