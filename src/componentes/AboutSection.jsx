// ─────────────────────────────────────────────────────────────
//  src/components/AboutSection.jsx  — v9 (simple & clean)
// ─────────────────────────────────────────────────────────────
import { useInView } from "../hooks/useInView";

const PILLARS = [
  { icon: "🎯", title: "Misión", desc: "Transformar la operación de empresas mediante tecnología a medida que genera resultados medibles — más eficiencia, menos costos, mayor crecimiento." },
  { icon: "👁️", title: "Visión",  desc: "Ser el socio estratégico de referencia en Perú para la transformación digital de PYMEs y empresas en crecimiento de LATAM." },
];

const WHY_US = [
  { icon: "🎯", title: "Enfoque Empresarial",    desc: "Entendemos tu negocio antes de escribir código. Resolvemos procesos, no solo requerimientos técnicos." },
  { icon: "🔧", title: "Desarrollo a tu Medida", desc: "Cada empresa tiene procesos únicos. Tu sistema se construye desde cero para tus objetivos, no adaptado de plantillas." },
  { icon: "📈", title: "Soporte y Evolución",    desc: "No entregamos y desaparecemos. Tu sistema crece y evoluciona junto con tu empresa." },
  { icon: "🇵🇪", title: "Raíz Local, Visión Global", desc: "Conocemos el mercado peruano y latinoamericano. Soporte directo, sin intermediarios ni barreras horarias." },
];

export default function AboutSection() {
  const [ref, visible] = useInView(0.1);

  const fade = (delay = 0) => ({
    opacity: visible ? 1 : 0,
    transform: visible ? "translateY(0)" : "translateY(24px)",
    transition: `opacity 0.7s ease ${delay}s, transform 0.7s ease ${delay}s`,
  });

  return (
    <section id="nosotros" style={{ padding: "90px clamp(20px,5vw,80px)", position: "relative" }}>
      <div ref={ref} style={{ maxWidth: 1200, margin: "0 auto" }}>

        {/* ── Badge ── */}
        <div style={{ ...fade(0), marginBottom: 36 }}>
          <div style={{
            display: "inline-flex", alignItems: "center", gap: 8,
            background: "rgba(59,130,246,0.1)", border: "1px solid rgba(59,130,246,0.25)",
            borderRadius: 100, padding: "5px 16px",
          }}>
            <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#3B82F6", display: "inline-block" }} />
            <span style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: 11, color: "#93C5FD", letterSpacing: "0.12em", textTransform: "uppercase", fontWeight: 600 }}>
              Sobre nosotros
            </span>
          </div>
        </div>

        {/* ── Layout principal: 2 columnas ── */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48, alignItems: "start" }} className="about-grid">

          {/* ── Columna izquierda: Identidad + Misión/Visión ── */}
          <div style={fade(0.05)}>
            <h2 style={{
              fontFamily: "'Space Grotesk',sans-serif", fontWeight: 800,
              fontSize: "clamp(26px,3vw,40px)", color: "#E2E8F0",
              lineHeight: 1.15, marginBottom: 12,
            }}>
              Tu socio estratégico en{" "}
              <span style={{
                background: "linear-gradient(135deg,#3B82F6,#38BDF8)",
                WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
              }}>transformación digital</span>
            </h2>

            <p style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: 15, color: "#94A3B8", lineHeight: 1.75, marginBottom: 32 }}>
              Ayudamos a empresas peruanas y latinoamericanas a{" "}
              <strong style={{ color: "#60A5FA" }}>digitalizar operaciones, automatizar procesos y crecer</strong>{" "}
              con tecnología — sin intermediarios, con resultados medibles y soporte directo.
            </p>

            {/* Misión / Visión — compactos */}
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              {PILLARS.map(({ icon, title, desc }) => (
                <div key={title} style={{
                  display: "flex", gap: 14, alignItems: "flex-start",
                  borderRadius: 12, padding: "16px 18px",
                  background: "rgba(59,130,246,0.05)",
                  border: "1px solid rgba(59,130,246,0.15)",
                }}>
                  <span style={{ fontSize: 20, lineHeight: 1, marginTop: 2 }}>{icon}</span>
                  <div>
                    <p style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 700, fontSize: 13, color: "#E2E8F0", marginBottom: 4 }}>{title}</p>
                    <p style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: 13, color: "#64748B", lineHeight: 1.7, margin: 0 }}>{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ── Columna derecha: ¿Por qué elegirnos? ── */}
          <div style={{
            ...fade(0.2),
            borderRadius: 18,
            border: "1px solid rgba(59,130,246,0.2)",
            background: "rgba(10,14,35,0.6)",
            backdropFilter: "blur(10px)",
            padding: "28px 26px",
            boxShadow: "0 4px 32px rgba(59,130,246,0.07), inset 0 1px 0 rgba(59,130,246,0.1)",
          }}>
            <div style={{ display: "flex", alignItems: "center", gap: 9, marginBottom: 22 }}>
              <span style={{ fontSize: 18 }}>⭐</span>
              <span style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 700, fontSize: 15, color: "#E2E8F0" }}>¿Por qué elegirnos?</span>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              {WHY_US.map(({ icon, title, desc }, i) => (
                <div key={title} style={{
                  display: "flex", gap: 14, alignItems: "flex-start",
                  opacity: visible ? 1 : 0,
                  transform: visible ? "translateY(0)" : "translateY(12px)",
                  transition: `opacity 0.6s ease ${0.3 + i * 0.08}s, transform 0.6s ease ${0.3 + i * 0.08}s`,
                }}>
                  {/* Icono en círculo */}
                  <div style={{
                    width: 38, height: 38, borderRadius: "50%", flexShrink: 0,
                    background: "rgba(59,130,246,0.12)", border: "1px solid rgba(59,130,246,0.25)",
                    display: "flex", alignItems: "center", justifyContent: "center", fontSize: 16,
                  }}>
                    {icon}
                  </div>
                  <div>
                    <p style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 700, fontSize: 13, color: "#E2E8F0", marginBottom: 3 }}>{title}</p>
                    <p style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: 13, color: "#64748B", lineHeight: 1.65, margin: 0 }}>{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* Responsive */}
      <style>{`
        @media (max-width: 860px) { .about-grid { grid-template-columns: 1fr !important; gap: 28px !important; } }
      `}</style>
    </section>
  );
}
