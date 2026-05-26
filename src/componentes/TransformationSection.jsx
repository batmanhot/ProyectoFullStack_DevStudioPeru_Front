import { useInView } from "../hooks/useInView";

const ROWS = [
  { before: "Procesos manuales y dispersos",       after: "Operaciones automatizadas y centralizadas" },
  { before: "Información en Excel y WhatsApp",     after: "Plataforma centralizada en tiempo real" },
  { before: "Errores operativos frecuentes",       after: "Control inteligente y trazabilidad completa" },
  { before: "Sin visibilidad ni seguimiento",      after: "Métricas e indicadores en tiempo real" },
  { before: "Operación lenta y de alto costo",     after: "Flujo optimizado con menor costo operativo" },
];

export default function TransformationSection() {
  const [ref, visible] = useInView(0.08);

  return (
    <section id="transformacion" ref={ref} style={{
      padding: "100px clamp(24px, 5vw, 80px)",
      background: "#07091A",
      position: "relative",
      overflow: "hidden",
    }}>
      {/* Glow decorativo */}
      <div style={{
        position: "absolute", top: "50%", left: "50%",
        transform: "translate(-50%, -50%)",
        width: "70vw", height: "50vw", borderRadius: "50%",
        background: "radial-gradient(circle, rgba(59,130,246,0.04) 0%, transparent 65%)",
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
              Transformación Empresarial
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
            De la operación manual{" "}
            <span style={{
              background: "linear-gradient(135deg, #60A5FA, #34D399)",
              WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
            }}>
              a la operación inteligente
            </span>
          </h2>

          <p style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            color: "#64748B", fontSize: 18, lineHeight: 1.7,
            maxWidth: 520, margin: "0 auto",
          }}>
            Creamos tecnología que transforma operaciones empresariales — no solo software, sino resultados reales.
          </p>
        </div>

        {/* Encabezados de columna */}
        <div className="comp-header" style={{
          display: "grid", gridTemplateColumns: "1fr auto 1fr",
          gap: "0 24px", marginBottom: 16,
          opacity: visible ? 1 : 0,
          transition: "opacity 0.6s ease 0.2s",
        }}>
          <div style={{
            display: "flex", alignItems: "center", gap: 10,
            background: "rgba(239,68,68,0.08)", border: "1px solid rgba(239,68,68,0.2)",
            borderRadius: 12, padding: "12px 20px",
            justifyContent: "center",
          }}>
            <span style={{ fontSize: 16 }}>⚠️</span>
            <span style={{
              fontFamily: "'Space Grotesk', sans-serif", fontWeight: 800,
              fontSize: 13, color: "#FCA5A5",
              letterSpacing: "0.1em", textTransform: "uppercase",
            }}>
              Sin DevStudio
            </span>
          </div>

          <div className="comp-divider" style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
            <div style={{ width: 1, height: "100%", background: "rgba(255,255,255,0.06)" }} />
          </div>

          <div style={{
            display: "flex", alignItems: "center", gap: 10,
            background: "rgba(16,185,129,0.08)", border: "1px solid rgba(16,185,129,0.2)",
            borderRadius: 12, padding: "12px 20px",
            justifyContent: "center",
          }}>
            <span style={{ fontSize: 16 }}>✅</span>
            <span style={{
              fontFamily: "'Space Grotesk', sans-serif", fontWeight: 800,
              fontSize: 13, color: "#6EE7B7",
              letterSpacing: "0.1em", textTransform: "uppercase",
            }}>
              Con DevStudio
            </span>
          </div>
        </div>

        {/* Filas de comparación */}
        <div style={{ display: "grid", gap: 10 }}>
          {ROWS.map(({ before, after }, i) => (
            <div key={i} className="comp-row" style={{
              display: "grid",
              gridTemplateColumns: "1fr auto 1fr",
              gap: "0 24px",
              opacity: visible ? 1 : 0,
              transform: visible ? "none" : "translateY(16px)",
              transition: `all 0.6s cubic-bezier(0.23, 1, 0.32, 1) ${0.15 + i * 0.08}s`,
            }}>
              {/* Antes */}
              <div style={{
                display: "flex", alignItems: "center", gap: 12,
                background: "rgba(239,68,68,0.04)",
                border: "1px solid rgba(239,68,68,0.12)",
                borderRadius: 14, padding: "16px 20px",
              }}>
                <span style={{
                  width: 6, height: 6, borderRadius: "50%",
                  background: "#EF4444", flexShrink: 0,
                }} />
                <p style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontSize: 15, color: "#94A3B8",
                  lineHeight: 1.5, margin: 0,
                }}>
                  {before}
                </p>
              </div>

              {/* Flecha */}
              <div className="comp-arrow" style={{
                display: "flex", alignItems: "center", justifyContent: "center",
                color: "#334155", fontSize: 18, fontWeight: 700,
              }}>
                →
              </div>

              {/* Después */}
              <div style={{
                display: "flex", alignItems: "center", gap: 12,
                background: "rgba(16,185,129,0.04)",
                border: "1px solid rgba(16,185,129,0.15)",
                borderRadius: 14, padding: "16px 20px",
              }}>
                <span style={{
                  width: 6, height: 6, borderRadius: "50%",
                  background: "#10B981", flexShrink: 0,
                }} />
                <p style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontSize: 15, color: "#E2E8F0",
                  lineHeight: 1.5, margin: 0, fontWeight: 500,
                }}>
                  {after}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>

      <style>{`
        @media (max-width: 640px) {
          #transformacion .comp-header {
            grid-template-columns: 1fr 1fr !important;
            gap: 0 10px !important;
          }
          #transformacion .comp-divider {
            display: none !important;
          }
          #transformacion .comp-row {
            grid-template-columns: 1fr !important;
            gap: 6px 0 !important;
          }
          #transformacion .comp-arrow {
            transform: rotate(90deg);
            padding: 2px 0;
          }
        }
      `}</style>
    </section>
  );
}
