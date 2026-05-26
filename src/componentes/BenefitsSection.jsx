import { useInView } from "../hooks/useInView";

const BENEFITS = [
  { icon: "✅", title: "Reducción de errores", desc: "Elimina los errores operativos que generan pérdidas y retrabajos costosos." },
  { icon: "⏱️", title: "Ahorro de tiempo real", desc: "Automatiza tareas repetitivas y recupera horas productivas cada semana." },
  { icon: "📊", title: "Control en tiempo real", desc: "Información centralizada y visible desde cualquier dispositivo, en cualquier momento." },
  { icon: "📈", title: "Escalabilidad", desc: "Procesos optimizados que permiten crecer sin aumentar proporcionalmente los costos." },
  { icon: "🔗", title: "Sistemas integrados", desc: "Todas tus herramientas conectadas en una sola plataforma coherente." },
  { icon: "🤖", title: "Automatización 24/7", desc: "Flujos automáticos que trabajan por tu empresa incluso fuera del horario laboral." },
  { icon: "💰", title: "Menor costo operativo", desc: "Operaciones más eficientes que impactan directamente en la rentabilidad." },
  { icon: "🎯", title: "Decisiones con datos", desc: "Reportes e indicadores para tomar decisiones basadas en información real." },
];

export default function BenefitsSection() {
  const [ref, visible] = useInView(0.08);

  return (
    <section id="beneficios" ref={ref} style={{
      padding: "100px clamp(24px, 5vw, 80px)",
      background: "#07091A",
      position: "relative",
      overflow: "hidden",
    }}>
      <div style={{
        position: "absolute", bottom: "-5%", left: "50%", transform: "translateX(-50%)",
        width: "60vw", height: "40vw", borderRadius: "50%",
        background: "radial-gradient(circle, rgba(16,185,129,0.04) 0%, transparent 70%)",
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
            background: "rgba(16,185,129,0.08)", border: "1px solid rgba(16,185,129,0.2)",
            borderRadius: 100, padding: "8px 20px", marginBottom: 24,
          }}>
            <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#10B981", boxShadow: "0 0 10px #10B981" }} />
            <span style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: 13, color: "#6EE7B7",
              letterSpacing: "0.15em", textTransform: "uppercase", fontWeight: 700,
            }}>
              Resultados
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
            ¿Qué{" "}
            <span style={{
              background: "linear-gradient(135deg, #34D399, #10B981)",
              WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
            }}>
              gana tu empresa
            </span>{" "}
            con tecnología a medida?
          </h2>

          <p style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            color: "#64748B", fontSize: 18, lineHeight: 1.7,
            maxWidth: 560, margin: "0 auto",
          }}>
            Más allá del software, entregamos resultados concretos que impactan directamente en tu operación y crecimiento.
          </p>
        </div>

        {/* Benefits grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 260px), 1fr))",
          gap: 20,
        }}>
          {BENEFITS.map(({ icon, title, desc }, i) => (
            <div key={title} style={{
              background: "rgba(255,255,255,0.02)",
              border: "1px solid rgba(255,255,255,0.07)",
              borderRadius: 20, padding: "28px 24px",
              opacity: visible ? 1 : 0,
              transform: visible ? "none" : "translateY(30px)",
              transition: `all 0.7s cubic-bezier(0.23, 1, 0.32, 1) ${0.05 + i * 0.07}s`,
              backdropFilter: "blur(8px)",
            }}>
              <div style={{
                width: 48, height: 48, borderRadius: 14, marginBottom: 18,
                background: "rgba(16,185,129,0.08)",
                border: "1px solid rgba(16,185,129,0.15)",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: 22,
              }}>
                {icon}
              </div>
              <h3 style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontWeight: 700, fontSize: 16,
                color: "#F8FAFC", marginBottom: 10, letterSpacing: "-0.01em",
              }}>
                {title}
              </h3>
              <p style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontSize: 14, color: "#64748B", lineHeight: 1.65, margin: 0,
              }}>
                {desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
