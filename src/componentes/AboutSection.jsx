// ─────────────────────────────────────────────────────────────
//  src/components/AboutSection.jsx  — v8
//  Layout: 3 columnas
//    Col 1 → texto "Quiénes somos"
//    Col 2 → cards Misión + Visión
//    Col 3 → cards "¿Por qué elegirnos?" (4 items compactos)
// ─────────────────────────────────────────────────────────────
import { useInView } from "../hooks/useInView";

const PILLARS = [
  {
    icon: "🎯",
    title: "Misión",
    desc: "Impulsar la competitividad de las empresas en el Perú mediante la creación de software a medida e infraestructura TI de alto rendimiento. Nos dedicamos a cerrar la brecha entre las ideas de negocio y la realidad tecnológica, entregando soluciones robustas, escalables y seguras que optimizan cada proceso operativo.",
  },
  {
    icon: "👁️",
    title: "Visión",
    desc: "Convertirnos en el socio estratégico de tecnología referente en el país, reconocidos por nuestra capacidad de integrar arquitectura de software e infraestructura física en una sola solución. Aspiramos a liderar la transformación digital del sector empresarial peruano, garantizando que cada cliente cuente con cimientos tecnológicos de clase mundial.",
  },
];

const WHY_US = [
  {
    icon: "🔗",
    title: "Enfoque Integral",
    desc: "No solo escribimos código; nos aseguramos de que la infraestructura que lo soporta sea robusta, segura y escalable.",
  },
  {
    icon: "🎨",
    title: "Soluciones a Medida",
    desc: "No creemos en soluciones genéricas. Cada proyecto se diseña desde cero para alinearse con tus objetivos específicos.",
  },
  {
    icon: "🇵🇪",
    title: "Compromiso Local",
    desc: "Estamos en Perú y para el Perú. Entendemos los desafíos de nuestro mercado y ofrecemos soporte cercano y directo.",
  },
  {
    icon: "✅",
    title: "Calidad y Rigor",
    desc: "Aplicamos las mejores prácticas en desarrollo (Clean Code) y estándares de infraestructura para garantizar la continuidad de tu negocio.",
  },
];

export default function AboutSection() {
  const [ref, visible] = useInView(0.1);

  const fade = (delay = 0) => ({
    opacity: visible ? 1 : 0,
    transform: visible ? "translateY(0)" : "translateY(28px)",
    transition: `opacity 0.8s ease ${delay}s, transform 0.8s ease ${delay}s`,
  });

  return (
    <section id="nosotros" style={{
      position: "relative",
      padding: "100px clamp(20px,5vw,80px)",
      overflow: "hidden",
    }}>
      {/* ── Malla circuito ──
      <div style={{
        position:"absolute", inset:0, zIndex:0, pointerEvents:"none",
        backgroundImage:`
          linear-gradient(rgba(59,130,246,0.07) 1px, transparent 1px),
          linear-gradient(90deg,rgba(59,130,246,0.07) 1px,transparent 1px)
        `,
        backgroundSize:"40px 40px",
      }}/>
      <div style={{
        position:"absolute", inset:0, zIndex:0, pointerEvents:"none",
        backgroundImage:`radial-gradient(circle,rgba(56,189,248,0.16) 1.5px,transparent 1.5px)`,
        backgroundSize:"120px 120px",
      }}/>
      <div style={{
        position:"absolute", inset:0, zIndex:0, pointerEvents:"none",
        background:"radial-gradient(ellipse 90% 60% at 50% 50%,transparent 40%,rgba(10,14,35,0.75) 100%)",
      }}/> */}

      {/* ── Contenido ── */}
      <div ref={ref} style={{ position:"relative", zIndex:1, maxWidth:1280, margin:"0 auto" }}>

        {/* Badge */}
        <div style={{ ...fade(0), marginBottom:40 }}>
          <div style={{
            display:"inline-flex", alignItems:"center", gap:8,
            background:"rgba(59,130,246,0.1)", border:"1px solid rgba(59,130,246,0.25)",
            borderRadius:100, padding:"5px 16px",
          }}>
            <span style={{ width:6, height:6, borderRadius:"50%", background:"#3B82F6", display:"inline-block" }}/>
            <span style={{ fontFamily:"'Space Grotesk',sans-serif", fontSize:11, color:"#93C5FD",
              letterSpacing:"0.12em", textTransform:"uppercase", fontWeight:600 }}>
              Sobre nosotros
            </span>
          </div>
        </div>

        {/* ── Grid 3 columnas ── */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          gap: 28,
          alignItems: "start",
        }} className="about-grid">

          {/* ── Col 1: Quiénes somos ── */}
          <div style={fade(0.05)}>
            <h2 style={{
              fontFamily:"'Space Grotesk',sans-serif", fontWeight:800,
              fontSize:"clamp(22px,2.5vw,34px)", color:"#E2E8F0",
              lineHeight:1.15, marginBottom:16,
            }}>
              Somos{" "}
              <span style={{
                background:"linear-gradient(135deg,#3B82F6,#38BDF8)",
                WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent", backgroundClip:"text",
              }}>apasionados</span>{" "}
              por la tecnología
            </h2>
            <p style={{ fontFamily:"'Plus Jakarta Sans',sans-serif", fontSize:14,
              color:"#64748B", lineHeight:1.85, marginBottom:14 }}>
              DevStudioPeru es un estudio de tecnología fundado en Lima,
              especializado en{" "}
              <strong style={{ color:"#60A5FA" }}>Arquitectura de Software</strong>{" "}
              y construcción de productos digitales: Web, Móvil, IA,
              Automatizaciones e Infraestructura Cloud.
            </p>
            <p style={{ fontFamily:"'Plus Jakarta Sans',sans-serif", fontSize:14,
              color:"#64748B", lineHeight:1.85 }}>
              Llevamos soluciones de nivel internacional a empresas peruanas y
              latinoamericanas — con código limpio, equipos comprometidos y
              entregables que generan impacto real en el negocio.
            </p>
          </div>

          {/* ── Col 2: Misión + Visión ── */}
          <div style={{ ...fade(0.15), display:"flex", flexDirection:"column", gap:14 }}>
            {PILLARS.map(({ icon, title, desc }) => (
              <div key={title} style={{
                borderRadius:14, padding:"20px 22px",
                background:"rgba(59,130,246,0.05)",
                border:"1px solid rgba(59,130,246,0.15)",
              }}>
                <div style={{ display:"flex", alignItems:"center", gap:9, marginBottom:10 }}>
                  <span style={{ fontSize:18 }}>{icon}</span>
                  <span style={{ fontFamily:"'Space Grotesk',sans-serif", fontWeight:700,
                    fontSize:14, color:"#E2E8F0" }}>{title}</span>
                </div>
                <p style={{ fontFamily:"'Plus Jakarta Sans',sans-serif", fontSize:12.5,
                  color:"#64748B", lineHeight:1.8, margin:0, fontStyle:"italic" }}>
                  "{desc}"
                </p>
              </div>
            ))}
          </div>

          {/* ── Col 3: ¿Por qué elegirnos? — card único contenedor ── */}
          <div style={{
            ...fade(0.25),
            // Card exterior — ocupa toda la altura de la columna
            borderRadius: 16,
            border: "1px solid rgba(59,130,246,0.2)",
            background: "rgba(10,14,35,0.6)",
            backdropFilter: "blur(10px)",
            padding: "22px 20px",
            boxShadow: "0 4px 32px rgba(59,130,246,0.07), inset 0 1px 0 rgba(59,130,246,0.1)",
          }}>

            {/* Header igual que Misión / Visión */}
            <div style={{ display:"flex", alignItems:"center", gap:9, marginBottom:18 }}>
              <span style={{ fontSize:18 }}>⭐</span>
              <span style={{ fontFamily:"'Space Grotesk',sans-serif", fontWeight:700,
                fontSize:14, color:"#E2E8F0" }}>¿Por qué elegirnos?</span>
            </div>

            {/* Párrafos ordenados — sin separadores */}
            <div style={{ display:"flex", flexDirection:"column", gap:18 }}>
              {WHY_US.map(({ icon, title, desc }, i) => (
                <div key={title} style={{
                  opacity: visible ? 1 : 0,
                  transform: visible ? "translateY(0)" : "translateY(14px)",
                  transition: `opacity 0.7s ease ${0.3 + i*0.08}s, transform 0.7s ease ${0.3 + i*0.08}s`,
                }}>
                  <p style={{
                    fontFamily:"'Space Grotesk',sans-serif", fontWeight:700,
                    fontSize:13, color:"#E2E8F0",
                    marginBottom:5, display:"flex", alignItems:"center", gap:7,
                  }}>
                    <span style={{ fontSize:15 }}>{icon}</span>
                    {title}
                  </p>
                  <p style={{
                    fontFamily:"'Plus Jakarta Sans',sans-serif", fontSize:12.5,
                    color:"#64748B", lineHeight:1.75, margin:0,
                  }}>
                    {desc}
                  </p>
                </div>
              ))}
            </div>

          </div>

        </div>
      </div>

      {/* Responsive: en tablet/móvil apila en 1 columna */}
      <style>{`
        @media (max-width: 900px) { .about-grid { grid-template-columns: 1fr !important; } }
        @media (min-width: 901px) and (max-width: 1100px) { .about-grid { grid-template-columns: 1fr 1fr !important; } }
      `}</style>
    </section>
  );
}
