import { Link } from "react-router-dom";
import { useInView } from "../hooks/useInView";
import PageLayout from "./PageLayout";

const STATS = [
  { value: "50+", label: "Proyectos lanzados" },
  { value: "8+",  label: "Años de experiencia" },
  { value: "12",  label: "Personas en el equipo" },
  { value: "30+", label: "Clientes activos" },
];

const VALORES = [
  {
    icon: "🔍",
    title: "Transparencia total",
    desc: "Acceso al repositorio desde el día uno. Demo en vivo cada dos semanas. Sin cajas negras, sin sorpresas al final.",
    color: "#3B82F6",
  },
  {
    icon: "⚙️",
    title: "Calidad no negociable",
    desc: "Tests, code review y observabilidad por defecto en cada proyecto. La calidad no es un extra que se cobra aparte.",
    color: "#38BDF8",
  },
  {
    icon: "🎯",
    title: "Pragmatismo técnico",
    desc: "Elegimos la herramienta correcta para el problema — no la más nueva ni la más de moda. Si PostgreSQL alcanza, lo usamos.",
    color: "#A78BFA",
  },
  {
    icon: "🤝",
    title: "Precio cerrado siempre",
    desc: "Cotizamos con alcance fijo. El precio que acordamos al inicio es el precio que pagas al final. Sin sorpresas de factura.",
    color: "#10B981",
  },
  {
    icon: "🚀",
    title: "Foco en resultados",
    desc: "No medimos el éxito por líneas de código — lo medimos por el impacto real en tu negocio. El software es el medio, no el fin.",
    color: "#F59E0B",
  },
  {
    icon: "🛡️",
    title: "Ownership completo",
    desc: "Todo lo que construimos es tuyo: código, infraestructura, datos. Sin dependencias ocultas ni licencias que te aten.",
    color: "#EC4899",
  },
];

function Badge({ children }) {
  return (
    <div style={{
      display: "inline-flex", alignItems: "center", gap: 10,
      background: "rgba(59,130,246,0.08)", border: "1px solid rgba(59,130,246,0.2)",
      borderRadius: 100, padding: "8px 22px", marginBottom: 28,
    }}>
      <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#3B82F6", boxShadow: "0 0 10px #3B82F6" }} />
      <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 12, color: "#93C5FD", letterSpacing: "0.18em", textTransform: "uppercase", fontWeight: 700 }}>
        {children}
      </span>
    </div>
  );
}

function GlassCard({ children, style = {} }) {
  return (
    <div style={{
      background: "rgba(255,255,255,0.03)",
      backdropFilter: "blur(12px)",
      border: "1px solid rgba(255,255,255,0.08)",
      borderRadius: 24, padding: "32px",
      ...style
    }}>
      {children}
    </div>
  );
}

export default function Nosotros() {
  const [refHero, visHero]     = useInView(0.1);
  const [refStats, visStats]   = useInView(0.1);
  const [refMV, visMV]         = useInView(0.1);
  const [refVal, visVal]       = useInView(0.1);
  const [refCta, visCta]       = useInView(0.1);

  const pad = "clamp(24px, 5vw, 80px)";

  return (
    <PageLayout>

      {/* ── HERO ── */}
      <section ref={refHero} style={{ padding: `clamp(100px,12vh,140px) ${pad} 80px` }}>
        <div style={{
          maxWidth: 860, margin: "0 auto", textAlign: "center",
          opacity: visHero ? 1 : 0, transform: visHero ? "none" : "translateY(40px)",
          transition: "all 1s cubic-bezier(0.23,1,0.32,1)"
        }}>
          <Badge>Nosotros</Badge>
          <h1 style={{
            fontFamily: "'Space Grotesk', sans-serif", fontWeight: 900,
            fontSize: "clamp(36px, 5.5vw, 68px)", lineHeight: 1.05,
            color: "#F8FAFC", letterSpacing: "-0.04em", marginBottom: 24,
          }}>
            Un equipo obsesionado con{" "}
            <span style={{
              background: "linear-gradient(135deg, #60A5FA, #38BDF8, #34D399)",
              WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text"
            }}>
              software que dura.
            </span>
          </h1>
          <p style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif", color: "#64748B",
            fontSize: "clamp(17px,2vw,20px)", lineHeight: 1.75, maxWidth: 640, margin: "0 auto",
          }}>
            Somos un estudio de ingeniería en Lima. Combinamos diseño, código y operación bajo un mismo techo —
            sin subcontratar, sin intermediarios, sin excusas.
          </p>
        </div>
      </section>

      {/* ── STATS ── */}
      <section ref={refStats} style={{ padding: `0 ${pad} 100px` }}>
        <div style={{
          maxWidth: 1200, margin: "0 auto",
          display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 24,
        }}>
          {STATS.map((s, i) => (
            <div key={s.label} style={{
              textAlign: "center",
              background: "rgba(255,255,255,0.02)",
              border: "1px solid rgba(59,130,246,0.15)",
              borderRadius: 20, padding: "36px 24px",
              backdropFilter: "blur(12px)",
              opacity: visStats ? 1 : 0,
              transform: visStats ? "none" : "translateY(30px)",
              transition: `all 0.8s cubic-bezier(0.23,1,0.32,1) ${i * 0.1}s`,
            }}>
              <div style={{
                fontFamily: "'Space Grotesk', sans-serif", fontWeight: 900,
                fontSize: "clamp(40px,5vw,56px)", letterSpacing: "-0.04em",
                background: "linear-gradient(135deg, #60A5FA, #38BDF8)",
                WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text"
              }}>
                {s.value}
              </div>
              <div style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif", color: "#475569",
                fontSize: 13, fontWeight: 600, marginTop: 8, textTransform: "uppercase",
                letterSpacing: "0.08em"
              }}>
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── MISIÓN / VISIÓN ── */}
      <section ref={refMV} style={{ padding: `60px ${pad} 100px` }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 60 }}>
            <Badge>Propósito</Badge>
            <h2 style={{
              fontFamily: "'Space Grotesk', sans-serif", fontWeight: 900,
              fontSize: "clamp(28px,4vw,48px)", color: "#F8FAFC", letterSpacing: "-0.03em"
            }}>
              Por qué existimos y a dónde vamos.
            </h2>
          </div>

          <div style={{
            display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))", gap: 24,
            opacity: visMV ? 1 : 0, transform: visMV ? "none" : "translateY(30px)",
            transition: "all 0.9s cubic-bezier(0.23,1,0.32,1)"
          }}>
            <GlassCard style={{ borderTop: "2px solid rgba(59,130,246,0.4)" }}>
              <div style={{
                display: "inline-flex", alignItems: "center", gap: 8,
                background: "rgba(59,130,246,0.1)", border: "1px solid rgba(59,130,246,0.2)",
                borderRadius: 100, padding: "4px 14px", marginBottom: 20
              }}>
                <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 11, color: "#60A5FA", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase" }}>Misión</span>
              </div>
              <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 800, fontSize: 22, color: "#F8FAFC", lineHeight: 1.3, marginBottom: 14 }}>
                Convertir ideas en productos que generan valor real.
              </h3>
              <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "#64748B", fontSize: 15.5, lineHeight: 1.75, margin: 0 }}>
                Acompañamos a startups y empresas medianas de LATAM a construir productos digitales que aguantan
                crecimiento, regulación y la realidad del día a día — no solo la demo del cliente.
              </p>
            </GlassCard>

            <GlassCard style={{ borderTop: "2px solid rgba(56,189,248,0.4)" }}>
              <div style={{
                display: "inline-flex", alignItems: "center", gap: 8,
                background: "rgba(56,189,248,0.08)", border: "1px solid rgba(56,189,248,0.2)",
                borderRadius: 100, padding: "4px 14px", marginBottom: 20
              }}>
                <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 11, color: "#38BDF8", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase" }}>Visión</span>
              </div>
              <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 800, fontSize: 22, color: "#F8FAFC", lineHeight: 1.3, marginBottom: 14 }}>
                Ser la opción seria para producto digital en la región.
              </h3>
              <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "#64748B", fontSize: 15.5, lineHeight: 1.75, margin: 0 }}>
                Un estudio donde el cliente sabe que va a recibir lo prometido, en el plazo prometido,
                y que el código seguirá funcionando dentro de cinco años sin reescribirse desde cero.
              </p>
            </GlassCard>
          </div>
        </div>
      </section>

      {/* ── VALORES ── */}
      <section ref={refVal} style={{ padding: `60px ${pad} 100px` }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 60 }}>
            <Badge>Valores</Badge>
            <h2 style={{
              fontFamily: "'Space Grotesk', sans-serif", fontWeight: 900,
              fontSize: "clamp(28px,4vw,48px)", color: "#F8FAFC", letterSpacing: "-0.03em"
            }}>
              Cómo trabajamos cada día.
            </h2>
            <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "#64748B", fontSize: 17, marginTop: 14, maxWidth: 500, margin: "14px auto 0" }}>
              No son valores de cartel. Son los criterios con los que tomamos decisiones técnicas y comerciales.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 20 }}>
            {VALORES.map((v, i) => (
              <div key={v.title} style={{
                background: "rgba(255,255,255,0.02)",
                border: "1px solid rgba(255,255,255,0.07)",
                borderRadius: 20, padding: "28px",
                backdropFilter: "blur(12px)",
                opacity: visVal ? 1 : 0,
                transform: visVal ? "none" : "translateY(30px)",
                transition: `all 0.8s cubic-bezier(0.23,1,0.32,1) ${i * 0.08}s`,
                borderLeft: `3px solid ${v.color}40`,
              }}>
                <div style={{
                  width: 44, height: 44, borderRadius: 12, marginBottom: 18,
                  background: `${v.color}15`, border: `1px solid ${v.color}25`,
                  display: "flex", alignItems: "center", justifyContent: "center", fontSize: 22
                }}>
                  {v.icon}
                </div>
                <h3 style={{
                  fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700,
                  fontSize: 16, color: "#F8FAFC", marginBottom: 10
                }}>
                  {v.title}
                </h3>
                <p style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif", color: "#64748B",
                  fontSize: 14.5, lineHeight: 1.7, margin: 0
                }}>
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section ref={refCta} style={{ padding: `0 ${pad} 120px` }}>
        <div style={{
          maxWidth: 1200, margin: "0 auto",
          background: "rgba(255,255,255,0.02)",
          border: "1px solid rgba(59,130,246,0.2)",
          borderRadius: 28, padding: "clamp(40px,5vw,64px)",
          display: "flex", justifyContent: "space-between", alignItems: "center",
          flexWrap: "wrap", gap: 32,
          backdropFilter: "blur(16px)",
          opacity: visCta ? 1 : 0, transform: visCta ? "none" : "translateY(30px)",
          transition: "all 0.9s cubic-bezier(0.23,1,0.32,1)",
          boxShadow: "0 0 80px rgba(59,130,246,0.05)"
        }}>
          <div>
            <h2 style={{
              fontFamily: "'Space Grotesk', sans-serif", fontWeight: 900,
              fontSize: "clamp(24px,3.5vw,40px)", color: "#F8FAFC",
              letterSpacing: "-0.03em", marginBottom: 10
            }}>
              ¿Quieres trabajar con nosotros?
            </h2>
            <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "#475569", fontSize: 16, margin: 0 }}>
              Cuéntanos tu proyecto. Respondemos con propuesta en menos de 48 horas.
            </p>
          </div>
          <Link to="/#contacto" style={{
            display: "inline-flex", alignItems: "center", gap: 10,
            background: "linear-gradient(135deg, #2563EB, #3B82F6)",
            color: "#fff", textDecoration: "none", padding: "18px 36px",
            borderRadius: 16, fontFamily: "'Space Grotesk', sans-serif",
            fontWeight: 800, fontSize: 15, whiteSpace: "nowrap",
            boxShadow: "0 10px 30px rgba(37,99,235,0.35)",
            transition: "all 0.3s ease"
          }}
            onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-3px)"; e.currentTarget.style.boxShadow = "0 16px 40px rgba(37,99,235,0.45)"; }}
            onMouseLeave={e => { e.currentTarget.style.transform = "none"; e.currentTarget.style.boxShadow = "0 10px 30px rgba(37,99,235,0.35)"; }}
          >
            Iniciar conversación →
          </Link>
        </div>
      </section>

    </PageLayout>
  );
}
