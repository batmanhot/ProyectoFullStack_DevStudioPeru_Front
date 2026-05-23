import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { useInView } from "../hooks/useInView";
import PageLayout from "./PageLayout";

const PASOS = [
  {
    num: "01", icon: "🎯", color: "#3B82F6",
    titulo: "Te escuchamos",
    subtitulo: "Una sesión, cero diapositivas.",
    desc: "60–90 minutos contigo para entender objetivos reales, problemas concretos, presupuesto y plazos. Sin plantillas genéricas — solo preguntas sobre tu negocio.",
    entrega: "Propuesta escrita con alcance, hitos, equipo y precio cerrado en menos de 5 días.",
  },
  {
    num: "02", icon: "✏️", color: "#38BDF8",
    titulo: "Diseñamos",
    subtitulo: "Ves el producto antes de pagar una línea de código.",
    desc: "Wireframes primero, alta fidelidad después. Iteramos hasta que el prototipo navegable esté exactamente como lo imaginas. Nada va a código sin tu aprobación.",
    entrega: "Prototipo clicable en Figma + flujos de usuario documentados.",
  },
  {
    num: "03", icon: "⚡", color: "#A78BFA",
    titulo: "Construimos",
    subtitulo: "Avances reales cada 2 semanas.",
    desc: "Sprints quincenales con demo en vivo todos los lunes. Acceso al repositorio desde el día uno. Changelog detallado en cada entrega. Sin cajas negras, sin 'ya casi está'.",
    entrega: "Versiones en staging cada 14 días + reporte de progreso por escrito.",
  },
  {
    num: "04", icon: "🚀", color: "#10B981",
    titulo: "Lanzamos",
    subtitulo: "Producción sin sobresaltos.",
    desc: "Migración de datos, pruebas finales, dominios y monitoreo. Acompañamos el día del lanzamiento contigo en una sala compartida para reaccionar al instante.",
    entrega: "Producto en producción + dashboard de métricas + runbook de operación.",
  },
  {
    num: "05", icon: "🛡️", color: "#F59E0B",
    titulo: "Acompañamos",
    subtitulo: "30 días de soporte incluido, sin costo extra.",
    desc: "Ajustes finos con datos reales, bugs en producción, dudas del equipo. Después de esos 30 días decidimos juntos cómo continuar: retainer, fase 2, o cierre formal.",
    entrega: "Handover técnico completo + documentación + opción de soporte continuo.",
  },
];

const GARANTIAS = [
  { icon: "💰", text: "Precio cerrado desde el inicio — sin sorpresas de factura" },
  { icon: "📂", text: "Acceso al repositorio desde el día 1" },
  { icon: "📅", text: "Demo en vivo cada 2 semanas" },
  { icon: "✅", text: "30 días de soporte incluido post-lanzamiento" },
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

export default function ComoTrabajamos() {
  const [refHero, visHero]   = useInView(0.1);
  const [refGar, visGar]     = useInView(0.1);
  const [refPasos, visPasos] = useInView(0.05);
  const [refCta, visCta]     = useInView(0.1);

  const pad = "clamp(24px, 5vw, 80px)";

  return (
    <PageLayout>
      <Helmet>
        <title>Cómo Trabajamos | DevStudio Perú — 5 Pasos, Precio Fijo</title>
        <meta name="description" content="Conoce nuestro proceso de trabajo: 5 etapas claras, precio cerrado desde el inicio, demos cada 2 semanas y 30 días de soporte incluido. Sin sorpresas." />
      </Helmet>

      {/* ── HERO ── */}
      <section ref={refHero} style={{ padding: `clamp(100px,12vh,140px) ${pad} 80px` }}>
        <div style={{
          maxWidth: 860, margin: "0 auto", textAlign: "center",
          opacity: visHero ? 1 : 0, transform: visHero ? "none" : "translateY(40px)",
          transition: "all 1s cubic-bezier(0.23,1,0.32,1)"
        }}>
          <Badge>Cómo trabajamos</Badge>
          <h1 style={{
            fontFamily: "'Space Grotesk', sans-serif", fontWeight: 900,
            fontSize: "clamp(36px,5.5vw,68px)", lineHeight: 1.05,
            color: "#F8FAFC", letterSpacing: "-0.04em", marginBottom: 24
          }}>
            5 pasos. Precio fijo.{" "}
            <span style={{
              background: "linear-gradient(135deg, #60A5FA, #38BDF8)",
              WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text"
            }}>
              Cero sorpresas.
            </span>
          </h1>
          <p style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif", color: "#64748B",
            fontSize: "clamp(17px,2vw,20px)", lineHeight: 1.75, maxWidth: 620, margin: "0 auto"
          }}>
            Sabes exactamente en qué punto estamos, qué viene después y qué recibes en cada etapa.
            Sin tecnicismos, sin sorpresas al final del proyecto.
          </p>
        </div>
      </section>

      {/* ── GARANTÍAS RÁPIDAS ── */}
      <section ref={refGar} style={{ padding: `0 ${pad} 80px` }}>
        <div style={{
          maxWidth: 1000, margin: "0 auto",
          display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 16
        }}>
          {GARANTIAS.map((g, i) => (
            <div key={g.text} style={{
              display: "flex", alignItems: "flex-start", gap: 14,
              background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)",
              borderRadius: 16, padding: "18px 20px",
              opacity: visGar ? 1 : 0,
              transform: visGar ? "none" : "translateY(20px)",
              transition: `all 0.7s cubic-bezier(0.23,1,0.32,1) ${i * 0.1}s`
            }}>
              <span style={{ fontSize: 22, flexShrink: 0 }}>{g.icon}</span>
              <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "#94A3B8", fontSize: 14, lineHeight: 1.5 }}>
                {g.text}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* ── PASOS ── */}
      <section ref={refPasos} style={{ padding: `0 ${pad} 120px` }}>
        <div style={{ maxWidth: 900, margin: "0 auto", display: "grid", gap: 20 }}>
          {PASOS.map((p, i) => (
            <div key={p.num} style={{
              display: "grid", gridTemplateColumns: "auto 1fr", gap: "0 28px",
              background: "rgba(255,255,255,0.025)",
              border: "1px solid rgba(255,255,255,0.07)",
              borderLeft: `4px solid ${p.color}`,
              borderRadius: 20, padding: "32px 32px 32px 28px",
              backdropFilter: "blur(12px)",
              opacity: visPasos ? 1 : 0,
              transform: visPasos ? "none" : "translateX(-30px)",
              transition: `all 0.8s cubic-bezier(0.23,1,0.32,1) ${i * 0.12}s`,
            }}>
              {/* Número + icono */}
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 8, paddingTop: 4 }}>
                <div style={{
                  width: 48, height: 48, borderRadius: 14,
                  background: `${p.color}15`, border: `1px solid ${p.color}30`,
                  display: "flex", alignItems: "center", justifyContent: "center", fontSize: 22
                }}>
                  {p.icon}
                </div>
                <span style={{
                  fontFamily: "'Space Grotesk', sans-serif", fontSize: 11,
                  fontWeight: 800, color: p.color, letterSpacing: "0.08em"
                }}>
                  {p.num}
                </span>
              </div>

              {/* Contenido */}
              <div>
                <div style={{
                  fontFamily: "'Space Grotesk', sans-serif", fontSize: 11,
                  color: p.color, fontWeight: 700, letterSpacing: "0.15em",
                  textTransform: "uppercase", marginBottom: 8
                }}>
                  {p.titulo}
                </div>
                <h3 style={{
                  fontFamily: "'Space Grotesk', sans-serif", fontWeight: 800,
                  fontSize: "clamp(18px,2.2vw,24px)", color: "#F8FAFC",
                  lineHeight: 1.2, marginBottom: 12, letterSpacing: "-0.02em"
                }}>
                  {p.subtitulo}
                </h3>
                <p style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif", color: "#64748B",
                  fontSize: 15, lineHeight: 1.75, marginBottom: 16
                }}>
                  {p.desc}
                </p>
                <div style={{
                  display: "flex", alignItems: "flex-start", gap: 10,
                  background: `${p.color}08`, border: `1px solid ${p.color}20`,
                  borderRadius: 12, padding: "12px 16px"
                }}>
                  <span style={{ color: p.color, flexShrink: 0, fontSize: 14, marginTop: 1 }}>✓</span>
                  <p style={{
                    fontFamily: "'Plus Jakarta Sans', sans-serif", color: "#94A3B8",
                    fontSize: 14, lineHeight: 1.6, margin: 0
                  }}>
                    <strong style={{ color: "#CBD5E1" }}>Qué recibes: </strong>{p.entrega}
                  </p>
                </div>
              </div>
            </div>
          ))}
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
              fontSize: "clamp(24px,3.5vw,40px)", color: "#F8FAFC",
              letterSpacing: "-0.03em", marginBottom: 10
            }}>
              ¿Listo para arrancar?
            </h2>
            <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "#475569", fontSize: 16, margin: 0 }}>
              El primer paso es una conversación. Sin costo, sin compromiso.
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
            Empecemos a hablar →
          </Link>
        </div>
      </section>

    </PageLayout>
  );
}
