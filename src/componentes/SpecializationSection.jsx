import { useInView } from "../hooks/useInView";

const INDUSTRIES = [
  { icon: "🛒", label: "Minimarket y Retail",        desc: "POS, inventarios, lotes y control de ventas." },
  { icon: "🎓", label: "Educación",                  desc: "Gestión académica, pagos y comunicación institucional." },
  { icon: "📞", label: "Call Center y Ventas",       desc: "CRM, pipelines y automatización comercial." },
  { icon: "🏢", label: "Gestión Empresarial",        desc: "ERP, administración y control de operaciones." },
  { icon: "🤖", label: "Automatización Operativa",   desc: "Flujos automáticos, integraciones y bots de proceso." },
  { icon: "📦", label: "Inventarios y Logística",    desc: "Trazabilidad, despachos y auditoría en tiempo real." },
  { icon: "💼", label: "Ventas y CRM",               desc: "Seguimiento de clientes y optimización del embudo." },
  { icon: "⚙️", label: "ERP Empresarial",            desc: "Centralización de operaciones financieras y administrativas." },
  { icon: "🚚", label: "Transporte y Delivery",      desc: "Plataformas de movilidad, GPS y cobros digitales." },
  { icon: "🍽️", label: "Restaurantes y Food",        desc: "Pedidos digitales, delivery y pagos en línea 24/7." },
];

export default function SpecializationSection() {
  const [ref, visible] = useInView(0.08);

  return (
    <section id="especializacion" ref={ref} style={{
      padding: "100px clamp(24px, 5vw, 80px)",
      background: "#050612",
      position: "relative",
      overflow: "hidden",
    }}>
      <div style={{
        position: "absolute", top: "30%", right: "-10%",
        width: "45vw", height: "45vw", borderRadius: "50%",
        background: "radial-gradient(circle, rgba(139,92,246,0.04) 0%, transparent 70%)",
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
            background: "rgba(139,92,246,0.08)", border: "1px solid rgba(139,92,246,0.2)",
            borderRadius: 100, padding: "8px 20px", marginBottom: 24,
          }}>
            <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#8B5CF6", boxShadow: "0 0 10px #8B5CF6" }} />
            <span style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: 13, color: "#C4B5FD",
              letterSpacing: "0.15em", textTransform: "uppercase", fontWeight: 700,
            }}>
              Especialización
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
            Especializados en{" "}
            <span style={{
              background: "linear-gradient(135deg, #A78BFA, #8B5CF6)",
              WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
            }}>
              soluciones para tu industria
            </span>
          </h2>

          <p style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            color: "#64748B", fontSize: 18, lineHeight: 1.7,
            maxWidth: 560, margin: "0 auto",
          }}>
            No trabajamos con soluciones genéricas. Cada plataforma se diseña entendiendo los procesos específicos de tu sector.
          </p>
        </div>

        {/* Industry grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 220px), 1fr))",
          gap: 16,
        }}>
          {INDUSTRIES.map(({ icon, label, desc }, i) => (
            <div key={label} style={{
              background: "rgba(255,255,255,0.02)",
              border: "1px solid rgba(139,92,246,0.1)",
              borderRadius: 18, padding: "24px 20px",
              opacity: visible ? 1 : 0,
              transform: visible ? "none" : "translateY(24px)",
              transition: `all 0.6s cubic-bezier(0.23, 1, 0.32, 1) ${0.05 + i * 0.06}s`,
              backdropFilter: "blur(8px)",
            }}>
              <div style={{
                width: 48, height: 48, borderRadius: 14, marginBottom: 16,
                background: "rgba(139,92,246,0.08)",
                border: "1px solid rgba(139,92,246,0.15)",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: 22,
              }}>
                {icon}
              </div>
              <h3 style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontWeight: 700, fontSize: 15,
                color: "#E2E8F0", marginBottom: 8, letterSpacing: "-0.01em",
              }}>
                {label}
              </h3>
              <p style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontSize: 13, color: "#475569", lineHeight: 1.6, margin: 0,
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
