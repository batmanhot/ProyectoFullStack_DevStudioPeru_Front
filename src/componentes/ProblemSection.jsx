import { useInView } from "../hooks/useInView";

const PAIN_POINTS = [
  { icon: "📋", text: "Información dispersa en Excel, WhatsApp y correos sin centralizar" },
  { icon: "⚠️", text: "Errores operativos frecuentes por procesos manuales sin control" },
  { icon: "🐌", text: "Procesos lentos que consumen horas del equipo y frenan el crecimiento" },
  { icon: "🔍", text: "Sin visibilidad real del negocio — sin datos, sin indicadores, sin control" },
  { icon: "🔄", text: "Tareas repetitivas que tu equipo realiza a mano todos los días" },
  { icon: "📉", text: "Sistemas desconectados que no se comunican entre sí" },
];

export default function ProblemSection() {
  const [ref, visible] = useInView(0.1);

  return (
    <section id="problema" ref={ref} style={{
      padding: "100px clamp(24px, 5vw, 80px)",
      background: "#050612",
      position: "relative",
      overflow: "hidden",
    }}>
      <div style={{
        position: "absolute", top: "20%", right: "-10%",
        width: "40vw", height: "40vw", borderRadius: "50%",
        background: "radial-gradient(circle, rgba(239,68,68,0.04) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />

      <div style={{ maxWidth: 1200, margin: "0 auto", position: "relative", zIndex: 1 }}>

        {/* Header */}
        <div style={{
          textAlign: "center", marginBottom: 64,
          opacity: visible ? 1 : 0,
          transform: visible ? "none" : "translateY(30px)",
          transition: "all 0.8s cubic-bezier(0.23, 1, 0.32, 1)",
        }}>
          <div style={{
            display: "inline-flex", alignItems: "center", gap: 10,
            background: "rgba(239,68,68,0.07)", border: "1px solid rgba(239,68,68,0.2)",
            borderRadius: 100, padding: "8px 20px", marginBottom: 24,
          }}>
            <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#EF4444", boxShadow: "0 0 10px #EF4444" }} />
            <span style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: 13, color: "#FCA5A5",
              letterSpacing: "0.15em", textTransform: "uppercase", fontWeight: 700,
            }}>
              ¿Te suena familiar?
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
            ¿Tu empresa aún opera con{" "}
            <span style={{
              background: "linear-gradient(135deg, #EF4444, #F87171)",
              WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
            }}>
              procesos manuales?
            </span>
          </h2>

          <p style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            color: "#64748B", fontSize: 18, lineHeight: 1.7,
            maxWidth: 560, margin: "0 auto",
          }}>
            Muchas empresas crecen, pero sus procesos se quedan atrás. Estas situaciones frenan la operación y generan pérdidas reales.
          </p>
        </div>

        {/* Pain points grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 340px), 1fr))",
          gap: 16,
          marginBottom: 56,
        }}>
          {PAIN_POINTS.map(({ icon, text }, i) => (
            <div key={text} style={{
              display: "flex", alignItems: "flex-start", gap: 16,
              background: "rgba(255,255,255,0.02)",
              border: "1px solid rgba(239,68,68,0.1)",
              borderLeft: "3px solid rgba(239,68,68,0.35)",
              borderRadius: 16, padding: "20px 24px",
              opacity: visible ? 1 : 0,
              transform: visible ? "none" : "translateY(20px)",
              transition: `all 0.6s cubic-bezier(0.23, 1, 0.32, 1) ${0.1 + i * 0.08}s`,
              backdropFilter: "blur(8px)",
            }}>
              <span style={{ fontSize: 22, flexShrink: 0, marginTop: 2 }}>{icon}</span>
              <p style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontSize: 15, color: "#94A3B8", lineHeight: 1.6, margin: 0,
              }}>
                {text}
              </p>
            </div>
          ))}
        </div>

        {/* Key message */}
        <div style={{
          textAlign: "center",
          opacity: visible ? 1 : 0,
          transform: visible ? "none" : "translateY(20px)",
          transition: "all 0.8s cubic-bezier(0.23, 1, 0.32, 1) 0.6s",
        }}>
          <div style={{
            display: "inline-block",
            background: "rgba(59,130,246,0.06)",
            border: "1px solid rgba(59,130,246,0.18)",
            borderRadius: 20, padding: "24px 40px",
            maxWidth: 680,
          }}>
            <p style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: "clamp(16px, 1.8vw, 20px)",
              color: "#93C5FD",
              fontWeight: 700,
              lineHeight: 1.6,
              margin: 0,
            }}>
              "La tecnología correcta puede transformar completamente la operación de tu negocio — sin proyectos de años ni presupuestos inalcanzables."
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
