import { Link } from "react-router-dom";
import { useInView } from "../hooks/useInView";

const STEPS = [
  {
    num: "01", icon: "🎯", color: "#3B82F6",
    title: "Analizamos tu negocio",
    desc: "Entendemos tus procesos, problemas reales y objetivos antes de escribir una línea de código.",
  },
  {
    num: "02", icon: "✏️", color: "#38BDF8",
    title: "Diseñamos la solución",
    desc: "Ves el producto funcionando en un prototipo antes de aprobar el desarrollo. Nada avanza sin tu visto bueno.",
  },
  {
    num: "03", icon: "⚡", color: "#A78BFA",
    title: "Construimos con transparencia",
    desc: "Entregas reales cada 2 semanas. Acceso al repositorio desde el día 1. Sin cajas negras, sin 'ya casi está'.",
  },
  {
    num: "04", icon: "🚀", color: "#10B981",
    title: "Lanzamos sin sorpresas",
    desc: "Acompañamos el día del lanzamiento. Precio cerrado desde el inicio — sin costos ocultos al final.",
  },
  {
    num: "05", icon: "🛡️", color: "#F59E0B",
    title: "Acompañamos tu crecimiento",
    desc: "30 días de soporte incluido post-lanzamiento. Tu sistema evoluciona y crece junto con tu empresa.",
  },
];

export default function ProcessSection() {
  const [ref, visible] = useInView(0.08);

  return (
    <section id="proceso" ref={ref} style={{
      padding: "100px clamp(24px, 5vw, 80px)",
      background: "#050612",
      position: "relative",
      overflow: "hidden",
    }}>
      <div style={{
        position: "absolute", top: "10%", left: "-5%",
        width: "35vw", height: "35vw", borderRadius: "50%",
        background: "radial-gradient(circle, rgba(59,130,246,0.04) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />

      <div style={{ maxWidth: 1100, margin: "0 auto", position: "relative", zIndex: 1 }}>

        {/* Header */}
        <div style={{
          textAlign: "center", marginBottom: 64,
          opacity: visible ? 1 : 0,
          transform: visible ? "none" : "translateY(30px)",
          transition: "all 0.8s cubic-bezier(0.23, 1, 0.32, 1)",
        }}>
          <div style={{
            display: "inline-flex", alignItems: "center", gap: 10,
            background: "rgba(59,130,246,0.08)", border: "1px solid rgba(59,130,246,0.2)",
            borderRadius: 100, padding: "8px 20px", marginBottom: 24,
          }}>
            <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#3B82F6", boxShadow: "0 0 10px #3B82F6" }} />
            <span style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: 13, color: "#93C5FD",
              letterSpacing: "0.15em", textTransform: "uppercase", fontWeight: 700,
            }}>
              Cómo trabajamos
            </span>
          </div>

          <h2 style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontWeight: 800,
            fontSize: "clamp(30px, 4.5vw, 52px)",
            color: "#F8FAFC",
            lineHeight: 1.1,
            marginBottom: 20,
            letterSpacing: "-0.03em",
          }}>
            Un proceso{" "}
            <span style={{
              background: "linear-gradient(135deg, #60A5FA, #38BDF8)",
              WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
            }}>
              simple y transparente
            </span>{" "}
            orientado a resultados
          </h2>

          <p style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            color: "#64748B", fontSize: 18, lineHeight: 1.7,
            maxWidth: 560, margin: "0 auto",
          }}>
            Sabes exactamente en qué etapa estamos, qué viene después y qué recibes en cada paso.
          </p>
        </div>

        {/* Steps */}
        <div style={{ display: "grid", gap: 14, marginBottom: 48 }}>
          {STEPS.map((step, i) => (
            <div key={step.num} style={{
              display: "grid",
              gridTemplateColumns: "auto 1fr",
              gap: "0 24px",
              background: "rgba(255,255,255,0.025)",
              border: "1px solid rgba(255,255,255,0.06)",
              borderLeft: `4px solid ${step.color}`,
              borderRadius: 18, padding: "24px 28px",
              backdropFilter: "blur(8px)",
              opacity: visible ? 1 : 0,
              transform: visible ? "none" : "translateX(-24px)",
              transition: `all 0.7s cubic-bezier(0.23, 1, 0.32, 1) ${0.1 + i * 0.1}s`,
            }}>
              {/* Icon + number */}
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 6, paddingTop: 2 }}>
                <div style={{
                  width: 44, height: 44, borderRadius: 12,
                  background: `${step.color}15`, border: `1px solid ${step.color}30`,
                  display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20,
                }}>
                  {step.icon}
                </div>
                <span style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: 10, fontWeight: 800, color: step.color, letterSpacing: "0.08em",
                }}>
                  {step.num}
                </span>
              </div>

              {/* Content */}
              <div>
                <h3 style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontWeight: 700, fontSize: 17,
                  color: "#F8FAFC", marginBottom: 6, letterSpacing: "-0.01em",
                }}>
                  {step.title}
                </h3>
                <p style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontSize: 14, color: "#64748B", lineHeight: 1.65, margin: 0,
                }}>
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div style={{
          textAlign: "center",
          opacity: visible ? 1 : 0,
          transition: "all 0.8s ease 0.65s",
        }}>
          <Link to="/como-trabajamos" style={{
            display: "inline-flex", alignItems: "center", gap: 8,
            fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: 15,
            color: "#93C5FD", textDecoration: "none",
            background: "rgba(59,130,246,0.06)",
            border: "1px solid rgba(59,130,246,0.2)",
            borderRadius: 12, padding: "14px 28px",
            transition: "all 0.25s ease",
          }}
            onMouseEnter={e => { e.currentTarget.style.background = "rgba(59,130,246,0.12)"; e.currentTarget.style.borderColor = "rgba(59,130,246,0.4)"; }}
            onMouseLeave={e => { e.currentTarget.style.background = "rgba(59,130,246,0.06)"; e.currentTarget.style.borderColor = "rgba(59,130,246,0.2)"; }}
          >
            Ver proceso completo →
          </Link>
        </div>

      </div>
    </section>
  );
}
