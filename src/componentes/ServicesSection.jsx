// ─────────────────────────────────────────────────────────────
//  src/components/ServicesSection.jsx  — Modernized & Premium  with Glassmorphism
// ─────────────────────────────────────────────────────────────
import { useState } from "react";
import { useInView } from "../hooks/useInView";
import { SERVICES } from "../data/content";

function ServiceCard({ service, index, visible }) {
  const [hovered, setHovered] = useState(false);
  const accent = service.accent || "#3B82F6";

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: "relative",
        background: hovered 
          ? "rgba(255, 255, 255, 0.05)" 
          : "rgba(15, 15, 26, 0.4)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        border: `1px solid ${hovered ? accent + "66" : "rgba(255, 255, 255, 0.1)"}`,
        borderRadius: 24,
        padding: "40px 32px",
        cursor: "pointer",
        transition: "all 0.5s cubic-bezier(0.23, 1, 0.32, 1)",
        boxShadow: hovered 
          ? `0 20px 40px -10px ${accent}33, inset 0 0 20px ${accent}11` 
          : "0 10px 30px -15px rgba(0,0,0,0.5)",
        opacity: visible ? 1 : 0,
        transform: visible ? (hovered ? "translateY(-10px)" : "translateY(0)") : "translateY(40px)",
        transitionDelay: visible ? `${index * 0.1}s` : "0s",
      }}
    >
      {/* Glow Effect Background */}
      <div style={{
        position: "absolute",
        top: -20, right: -20, width: 100, height: 100,
        background: `radial-gradient(circle, ${accent}11 0%, transparent 70%)`,
        opacity: hovered ? 1 : 0,
        transition: "opacity 0.5s ease",
        zIndex: 0
      }} />

      {/* Icon Container */}
      <div style={{
        width: 64, height: 64, borderRadius: 18, marginBottom: 28,
        background: hovered ? `${accent}22` : "rgba(255,255,255,0.03)",
        border: `1px solid ${hovered ? accent + "44" : "rgba(255,255,255,0.1)"}`,
        display: "flex", alignItems: "center", justifyContent: "center",
        fontSize: 32, transition: "all 0.3s ease",
        transform: hovered ? "scale(1.1) rotate(5deg)" : "none",
        position: "relative", zIndex: 1
      }}>
        {service.icon}
      </div>

      <h3 style={{ 
        fontFamily: "'Space Grotesk', sans-serif", 
        fontWeight: 700, 
        fontSize: 22, 
        color: "#F8FAFC", 
        marginBottom: 14,
        letterSpacing: "-0.02em",
        position: "relative", zIndex: 1
      }}>
        {service.title}
      </h3>
      
      <p style={{ 
        fontFamily: "'Plus Jakarta Sans', sans-serif", 
        fontSize: 15, 
        color: "#94A3B8", 
        lineHeight: 1.6, 
        marginBottom: 24,
        position: "relative", zIndex: 1
      }}>
        {service.description}
      </p>

      <div style={{ display: "flex", flexWrap: "wrap", gap: 8, position: "relative", zIndex: 1 }}>
        {service.tags.map(tag => (
          <span key={tag} style={{
            fontFamily: "'Space Grotesk', sans-serif", 
            fontSize: 12, 
            fontWeight: 600,
            color: hovered ? "#FFF" : accent, 
            background: hovered ? accent : `${accent}14`, 
            borderRadius: 100, 
            padding: "4px 14px",
            transition: "all 0.3s ease",
            border: `1px solid ${accent}33`
          }}>
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function ServicesSection() {
  const [ref, visible] = useInView();

  return (
    <section id="servicios" ref={ref} style={{
      padding: "120px clamp(24px, 5vw, 80px)",
      background: "#07091A",
      position: "relative",
      overflow: "hidden"
    }}>
      {/* Background Decorative Element */}
      <div style={{
        position: "absolute", top: "10%", left: "-5%",
        width: "40vw", height: "40vw",
        background: "radial-gradient(circle, rgba(59,130,246,0.03) 0%, transparent 70%)",
        pointerEvents: "none"
      }} />

      <div style={{ maxWidth: 1300, margin: "0 auto", position: "relative", zIndex: 1 }}>
        {/* Header */}
        <div style={{
          textAlign: "center", marginBottom: 72,
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
              fontSize: 13, 
              color: "#93C5FD", 
              letterSpacing: "0.15em", 
              textTransform: "uppercase", 
              fontWeight: 700 
            }}>
              Servicios
            </span>
          </div>

          <h2 style={{ 
            fontFamily: "'Space Grotesk', sans-serif", 
            fontWeight: 800,
            fontSize: "clamp(32px, 5vw, 56px)", 
            color: "#F8FAFC", 
            lineHeight: 1, 
            marginBottom: 20,
            letterSpacing: "-0.03em"
          }}>
            Soluciones <span style={{ 
              background: "linear-gradient(135deg, #60A5FA, #38BDF8)", 
              WebkitBackgroundClip: "text", 
              WebkitTextFillColor: "transparent", 
              backgroundClip: "text" 
            }}>Digitales</span> de Alto Impacto
          </h2>
          <p style={{ 
            fontFamily: "'Plus Jakarta Sans', sans-serif", 
            color: "#94A3B8", 
            maxWidth: 600, 
            margin: "0 auto", 
            fontSize: 18, 
            lineHeight: 1.6 
          }}>
            Dominamos las tecnologías más avanzadas para materializar tus ideas en productos escalables y eficientes.
          </p>
        </div>

        {/* Grid */}
        <div style={{ 
          display: "grid", 
          gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 350px), 1fr))", 
          gap: 32 
        }}>
          {SERVICES.map((s, i) => (
            <ServiceCard key={s.title} service={s} index={i} visible={visible} />
          ))}
        </div>
      </div>
    </section>
  );
}
