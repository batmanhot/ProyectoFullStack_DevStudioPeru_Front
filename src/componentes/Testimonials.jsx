// ─────────────────────────────────────────────────────────────
//  src/components/Testimonials.jsx  — Modernized Glassmorphism
// ─────────────────────────────────────────────────────────────
import { useInView } from "../hooks/useInView";
import { TESTIMONIALS } from "../data/content";

function TestimonialCard({ testimonial, index, visible }) {
  return (
    <div
      style={{
        background: "rgba(255, 255, 255, 0.03)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        border: "1px solid rgba(255, 255, 255, 0.08)",
        borderRadius: 24,
        padding: "32px",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(30px)",
        transition: `all 0.8s cubic-bezier(0.23, 1, 0.32, 1) ${index * 0.15}s`,
        position: "relative",
        boxShadow: "0 10px 30px -15px rgba(0,0,0,0.3)"
      }}
    >
      {/* Quote Icon */}
      <div style={{
        position: "absolute", top: 24, right: 24,
        fontSize: 40, color: "rgba(59,130,246,0.15)",
        fontFamily: "serif", lineHeight: 1
      }}>“</div>

      {/* Metric chip */}
      {testimonial.metric && (
        <div style={{
          display: "inline-flex", alignItems: "center", gap: 6,
          background: "rgba(59,130,246,0.08)", border: "1px solid rgba(59,130,246,0.2)",
          borderRadius: 100, padding: "5px 14px", marginBottom: 16
        }}>
          <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#38BDF8", flexShrink: 0 }} />
          <span style={{
            fontFamily: "'Space Grotesk', sans-serif", fontSize: 12,
            fontWeight: 800, color: "#38BDF8", letterSpacing: "0.02em"
          }}>
            {testimonial.metric}
          </span>
        </div>
      )}

      {/* Text */}
      <p style={{
        fontFamily: "'Plus Jakarta Sans', sans-serif",
        fontSize: 15,
        color: "#94A3B8",
        lineHeight: 1.7,
        marginBottom: 24,
        position: "relative",
        zIndex: 1
      }}>
        {testimonial.text}
      </p>

      {/* Author */}
      <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
        {/* Avatar */}
        <div
          style={{
            width: 48, height: 48, borderRadius: "50%",
            display: "flex", alignItems: "center", justifyContent: "center",
            fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700,
            fontSize: 16, color: "#FFF",
            background: "linear-gradient(135deg, #3B82F6, #60A5FA)",
            boxShadow: "0 4px 12px rgba(59,130,246,0.3)"
          }}
        >
          {testimonial.avatar}
        </div>

        <div style={{ flex: 1 }}>
          <div style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontWeight: 700,
            fontSize: 15,
            color: "#F8FAFC"
          }}>
            {testimonial.name}
          </div>
          <div style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontSize: 12,
            color: "#64748B",
            marginTop: 2
          }}>
            {testimonial.role}
          </div>
        </div>

        {/* Stars */}
        <div style={{ color: "#3B82F6", fontSize: 12, letterSpacing: 2 }}>★★★★★</div>
      </div>
    </div>
  );
}

export default function Testimonials() {
  const [ref, visible] = useInView();

  return (
    <section id="testimonios" ref={ref} style={{
      padding: "120px clamp(24px, 5vw, 80px)",
      background: "#07091A"
    }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
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
              Testimonios
            </span>
          </div>

          <h2 style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontWeight: 800,
            fontSize: "clamp(32px, 5vw, 56px)",
            color: "#F8FAFC",
            lineHeight: 1.1,
            letterSpacing: "-0.03em"
          }}>
            Lo que dicen nuestros <span style={{ 
              background: "linear-gradient(135deg, #60A5FA, #38BDF8)", 
              WebkitBackgroundClip: "text", 
              WebkitTextFillColor: "transparent", 
              backgroundClip: "text" 
            }}>clientes</span>
          </h2>
        </div>

        {/* Grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          gap: 32
        }}>
          {TESTIMONIALS.map((t, i) => (
            <TestimonialCard
              key={t.name}
              testimonial={t}
              index={i}
              visible={visible}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
