import { Helmet } from "react-helmet-async";
import { useInView } from "../hooks/useInView";
import PageLayout from "./PageLayout";

const POSICIONES = [
  {
    titulo: "Senior Full-Stack Engineer",
    detalle: "Lima / Remoto · Tiempo completo",
    stack: "React + Node.js + TypeScript",
    color: "#3B82F6",
    icon: "💻",
    subject: "Aplicación · Senior Full-Stack",
  },
  {
    titulo: "Product Designer",
    detalle: "Lima / Remoto · Tiempo completo",
    stack: "Figma · UX Research · Design Systems",
    color: "#A78BFA",
    icon: "🎨",
    subject: "Aplicación · Product Designer",
  },
  {
    titulo: "DevOps / Platform Engineer",
    detalle: "Remoto LATAM · Tiempo completo",
    stack: "AWS · Kubernetes · Terraform · CI/CD",
    color: "#10B981",
    icon: "⚙️",
    subject: "Aplicación · DevOps Engineer",
  },
];

const BENEFICIOS = [
  { icon: "💵", title: "Salario en USD", desc: "Compensación competitiva según seniority, revisada anualmente." },
  { icon: "🌎", title: "100% remoto", desc: "Trabajo desde donde estés. Horarios flexibles con foco asíncrono." },
  { icon: "📚", title: "Budget de aprendizaje", desc: "Stipend anual para libros, cursos, conferencias y certificaciones." },
  { icon: "🎁", title: "Bonus por entrega", desc: "Bonus adicional por cada proyecto entregado a tiempo y bajo presupuesto." },
  { icon: "🏖️", title: "20 días + cumpleaños", desc: "Vacaciones reales. Más tu día de cumpleaños libre, sin pedir permiso." },
  { icon: "🖥️", title: "Equipo a tu elección", desc: "Mac o Linux. Tú eliges el setup con el que eres más productivo." },
];

const CULTURA = [
  { label: "Equipos pequeños", desc: "Máximo 4 personas por proyecto. Tus decisiones se notan." },
  { label: "Código que llega a producción", desc: "No hay proyectos internos eternos. Todo lo que construyes, se lanza." },
  { label: "Sin reuniones innecesarias", desc: "Comunicación asíncrona por defecto. Reuniones con agenda y duración fija." },
  { label: "Autonomía real", desc: "Defines tu stack dentro de los estándares del proyecto. Nadie microgestiona." },
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

export default function Carreras() {
  const [refHero, visHero]     = useInView(0.1);
  const [refPos, visPos]       = useInView(0.05);
  const [refBen, visBen]       = useInView(0.1);
  const [refCult, visCult]     = useInView(0.1);
  const [refCta, visCta]       = useInView(0.1);

  const pad = "clamp(24px, 5vw, 80px)";

  return (
    <PageLayout>
      <Helmet>
        <title>Bolsa de Trabajo | DevStudio Perú — Únete al Equipo en Lima</title>
        <meta name="description" content="Posiciones abiertas en DevStudio Perú: Full-Stack, Product Designer, DevOps. Trabajo 100% remoto, salario en USD y proyectos reales que llegan a producción." />
      </Helmet>

      {/* ── HERO ── */}
      <section ref={refHero} style={{ padding: `clamp(100px,12vh,140px) ${pad} 80px` }}>
        <div style={{
          maxWidth: 860, margin: "0 auto", textAlign: "center",
          opacity: visHero ? 1 : 0, transform: visHero ? "none" : "translateY(40px)",
          transition: "all 1s cubic-bezier(0.23,1,0.32,1)"
        }}>
          <Badge>Bolsa de Trabajo</Badge>
          <h1 style={{
            fontFamily: "'Space Grotesk', sans-serif", fontWeight: 900,
            fontSize: "clamp(36px,5.5vw,68px)", lineHeight: 1.05,
            color: "#F8FAFC", letterSpacing: "-0.04em", marginBottom: 24
          }}>
            Construye con nosotros{" "}
            <span style={{
              background: "linear-gradient(135deg, #60A5FA, #38BDF8, #34D399)",
              WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text"
            }}>
              lo que sigue.
            </span>
          </h1>
          <p style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif", color: "#64748B",
            fontSize: "clamp(17px,2vw,20px)", lineHeight: 1.75, maxWidth: 580, margin: "0 auto 36px"
          }}>
            Equipo pequeño, decisiones rápidas, código que llega a producción.
            Si disfrutas resolver problemas reales con autonomía real, este es tu lugar.
          </p>
          <div style={{ display: "flex", justifyContent: "center", gap: 24, flexWrap: "wrap" }}>
            {["3 posiciones abiertas", "100% remoto disponible", "Salario en USD"].map(tag => (
              <span key={tag} style={{
                fontFamily: "'Space Grotesk', sans-serif", fontSize: 13, fontWeight: 700,
                color: "#38BDF8", background: "rgba(56,189,248,0.08)",
                border: "1px solid rgba(56,189,248,0.2)",
                borderRadius: 100, padding: "6px 18px"
              }}>
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── POSICIONES ── */}
      <section ref={refPos} style={{ padding: `0 ${pad} 100px` }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <Badge>Posiciones abiertas</Badge>
            <h2 style={{
              fontFamily: "'Space Grotesk', sans-serif", fontWeight: 900,
              fontSize: "clamp(26px,3.5vw,42px)", color: "#F8FAFC", letterSpacing: "-0.03em"
            }}>
              Sumate al equipo.
            </h2>
          </div>

          <div style={{ display: "grid", gap: 18 }}>
            {POSICIONES.map((p, i) => (
              <a
                key={p.titulo}
                href={`mailto:contacto@devstudioperu.com?subject=${encodeURIComponent(p.subject)}`}
                style={{
                  display: "flex", justifyContent: "space-between", alignItems: "center",
                  gap: 20, flexWrap: "wrap", textDecoration: "none", cursor: "pointer",
                  background: "rgba(255,255,255,0.025)",
                  border: `1px solid rgba(255,255,255,0.07)`,
                  borderLeft: `4px solid ${p.color}`,
                  borderRadius: 20, padding: "28px 32px",
                  backdropFilter: "blur(12px)",
                  opacity: visPos ? 1 : 0,
                  transform: visPos ? "none" : "translateY(25px)",
                  transition: `all 0.7s cubic-bezier(0.23,1,0.32,1) ${i * 0.12}s`,
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.background = "rgba(255,255,255,0.04)";
                  e.currentTarget.style.borderColor = `${p.color}50`;
                  e.currentTarget.style.transform = "translateX(6px)";
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.background = "rgba(255,255,255,0.025)";
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.07)";
                  e.currentTarget.style.transform = "none";
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
                  <div style={{
                    width: 52, height: 52, borderRadius: 14, flexShrink: 0,
                    background: `${p.color}15`, border: `1px solid ${p.color}30`,
                    display: "flex", alignItems: "center", justifyContent: "center", fontSize: 24
                  }}>
                    {p.icon}
                  </div>
                  <div>
                    <h3 style={{
                      fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700,
                      fontSize: 18, color: "#F8FAFC", marginBottom: 4
                    }}>
                      {p.titulo}
                    </h3>
                    <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "#475569", fontSize: 13 }}>
                      {p.detalle}
                    </div>
                    <div style={{
                      fontFamily: "'Space Grotesk', sans-serif", fontSize: 12,
                      color: p.color, fontWeight: 600, marginTop: 6
                    }}>
                      {p.stack}
                    </div>
                  </div>
                </div>
                <span style={{
                  fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700,
                  fontSize: 14, color: p.color, whiteSpace: "nowrap",
                  display: "flex", alignItems: "center", gap: 6
                }}>
                  Postular →
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── BENEFICIOS ── */}
      <section ref={refBen} style={{ padding: `0 ${pad} 100px` }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <Badge>Beneficios</Badge>
            <h2 style={{
              fontFamily: "'Space Grotesk', sans-serif", fontWeight: 900,
              fontSize: "clamp(26px,3.5vw,42px)", color: "#F8FAFC", letterSpacing: "-0.03em"
            }}>
              Lo que sí encuentras acá.
            </h2>
            <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "#475569", fontSize: 16, marginTop: 12 }}>
              Sin promesas de adorno. Esto es lo que ofrecemos desde el primer día.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 20 }}>
            {BENEFICIOS.map((b, i) => (
              <div key={b.title} style={{
                background: "rgba(255,255,255,0.02)",
                border: "1px solid rgba(255,255,255,0.07)",
                borderRadius: 20, padding: "28px",
                backdropFilter: "blur(12px)",
                opacity: visBen ? 1 : 0,
                transform: visBen ? "none" : "translateY(30px)",
                transition: `all 0.8s cubic-bezier(0.23,1,0.32,1) ${i * 0.08}s`
              }}>
                <div style={{ fontSize: 32, marginBottom: 14 }}>{b.icon}</div>
                <h3 style={{
                  fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700,
                  fontSize: 16, color: "#F8FAFC", marginBottom: 8
                }}>
                  {b.title}
                </h3>
                <p style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif", color: "#64748B",
                  fontSize: 14, lineHeight: 1.7, margin: 0
                }}>
                  {b.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CULTURA ── */}
      <section ref={refCult} style={{ padding: `0 ${pad} 100px` }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <Badge>Cultura</Badge>
            <h2 style={{
              fontFamily: "'Space Grotesk', sans-serif", fontWeight: 900,
              fontSize: "clamp(26px,3.5vw,42px)", color: "#F8FAFC", letterSpacing: "-0.03em"
            }}>
              Cómo es trabajar aquí.
            </h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))", gap: 16 }}>
            {CULTURA.map((c, i) => (
              <div key={c.label} style={{
                display: "flex", gap: 16, alignItems: "flex-start",
                background: "rgba(255,255,255,0.02)",
                border: "1px solid rgba(255,255,255,0.06)",
                borderRadius: 16, padding: "22px 24px",
                opacity: visCult ? 1 : 0,
                transform: visCult ? "none" : "translateY(20px)",
                transition: `all 0.7s cubic-bezier(0.23,1,0.32,1) ${i * 0.1}s`
              }}>
                <span style={{ color: "#38BDF8", fontSize: 16, flexShrink: 0, marginTop: 3 }}>→</span>
                <div>
                  <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: 15, color: "#F8FAFC", marginBottom: 6 }}>
                    {c.label}
                  </div>
                  <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "#64748B", fontSize: 14, lineHeight: 1.65 }}>
                    {c.desc}
                  </div>
                </div>
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
          flexWrap: "wrap", gap: 32, backdropFilter: "blur(16px)",
          opacity: visCta ? 1 : 0, transform: visCta ? "none" : "translateY(30px)",
          transition: "all 0.9s cubic-bezier(0.23,1,0.32,1)",
          boxShadow: "0 0 80px rgba(59,130,246,0.05)"
        }}>
          <div>
            <h2 style={{
              fontFamily: "'Space Grotesk', sans-serif", fontWeight: 900,
              fontSize: "clamp(22px,3vw,36px)", color: "#F8FAFC",
              letterSpacing: "-0.03em", marginBottom: 10
            }}>
              ¿No ves tu rol pero te interesa el estudio?
            </h2>
            <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "#475569", fontSize: 15, margin: 0 }}>
              Mándanos tu CV igualmente. Si hay fit, te contactamos.
            </p>
          </div>
          <a
            href="mailto:contacto@devstudioperu.com?subject=Postulación espontánea"
            style={{
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
            Escríbenos igual →
          </a>
        </div>
      </section>

    </PageLayout>
  );
}
