// ─────────────────────────────────────────────────────────────
//  src/components/Portfolio.jsx  — Modernized & High-End Product Showcase 
// ─────────────────────────────────────────────────────────────
import { useState } from "react";
import { useInView } from "../hooks/useInView";
import { PROJECTS } from "../data/content";

function ProjectCard({ project, index, visible }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: "relative",
        background: hovered 
          ? "rgba(255, 255, 255, 0.03)" 
          : "rgba(15, 15, 26, 0.5)",
        backdropFilter: "blur(14px)",
        WebkitBackdropFilter: "blur(14px)",
        borderRadius: 28,
        overflow: "hidden",
        border: `1px solid ${hovered ? project.accentColor + "55" : "rgba(255, 255, 255, 0.08)"}`,
        opacity: visible ? 1 : 0,
        transform: visible 
          ? (hovered ? "translateY(-12px) scale(1.02)" : "translateY(0) scale(1)") 
          : "translateY(40px)",
        transition: "all 0.6s cubic-bezier(0.16, 1, 0.3, 1)",
        transitionDelay: visible ? `${index * 0.12}s` : "0s",
        boxShadow: hovered 
          ? `0 30px 60px -12px ${project.accentColor}22` 
          : "none",
        cursor: "pointer"
      }}
    >
      {/* Decorative Glow */}
      <div style={{
        position: "absolute",
        top: "-10%",
        right: "-10%",
        width: "50%",
        height: "50%",
        background: `radial-gradient(circle, ${project.accentColor}15 0%, transparent 70%)`,
        opacity: hovered ? 1 : 0,
        transition: "opacity 0.6s ease",
        zIndex: 0
      }} />

      {/* Card Header (Preview Area) */}
      <div style={{
        height: 180,
        position: "relative",
        overflow: "hidden",
        background: `linear-gradient(225deg, ${project.accentColor}18 0%, ${project.accentColor}05 100%)`,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderBottom: "1px solid rgba(255,255,255,0.05)"
      }}>
        {/* Background Decorative Text */}
        <span style={{
          fontFamily: "'Space Grotesk', sans-serif",
          fontWeight: 900,
          fontSize: 80,
          color: project.accentColor,
          opacity: hovered ? 0.12 : 0.06,
          position: "absolute",
          userSelect: "none",
          transform: hovered ? "scale(1.2) rotate(-5deg)" : "rotate(0)",
          transition: "all 0.8s ease"
        }}>
          {"{ }"}
        </span>
        
        {/* Project Initial */}
        <span style={{
          fontFamily: "'Space Grotesk', sans-serif",
          fontWeight: 800,
          fontSize: 64,
          color: project.accentColor,
          textShadow: `0 0 40px ${project.accentColor}66`,
          position: "relative",
          zIndex: 1,
          transform: hovered ? "scale(1.1)" : "none",
          transition: "transform 0.5s ease"
        }}>
          {project.title[0]}
        </span>

        {/* Category Badge */}
        <span style={{
          position: "absolute",
          top: 20,
          right: 20,
          fontFamily: "'Space Grotesk', sans-serif",
          fontSize: 11,
          fontWeight: 700,
          color: "#FFF",
          background: "rgba(0, 0, 0, 0.4)",
          backdropFilter: "blur(4px)",
          borderRadius: 100,
          padding: "5px 14px",
          border: "1px solid rgba(255,255,255,0.1)",
          zIndex: 2
        }}>
          {project.category}
        </span>
      </div>

      {/* Card Content */}
      <div style={{ padding: "32px 28px", position: "relative", zIndex: 1 }}>
        <h3 style={{ 
          fontFamily: "'Space Grotesk', sans-serif", 
          fontWeight: 700, 
          fontSize: 24, 
          color: "#F8FAFC", 
          marginBottom: 12,
          letterSpacing: "-0.01em"
        }}>
          {project.title}
        </h3>
        
        <p style={{ 
          fontFamily: "'Plus Jakarta Sans', sans-serif", 
          fontSize: 14, 
          color: "#94A3B8", 
          lineHeight: 1.7, 
          marginBottom: 20 
        }}>
          {project.description}
        </p>

        <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
          {project.tags.map(tag => (
            <span key={tag} style={{
              fontFamily: "'Space Grotesk', sans-serif", 
              fontSize: 11, 
              fontWeight: 600,
              color: project.accentColor, 
              background: `${project.accentColor}11`, 
              borderRadius: 8, 
              padding: "4px 10px",
              border: `1px solid ${project.accentColor}22`,
              transition: "all 0.3s ease"
            }}>
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Portfolio() {
  const [ref, visible] = useInView();

  return (
    <section id="proyectos" ref={ref} style={{
      padding: "120px clamp(24px, 5vw, 80px)",
      background: "#07091A",
      position: "relative"
    }}>
      {/* Decorative Blur Background */}
      <div style={{
        position: "absolute", bottom: "5%", right: "-10%",
        width: "50vw", height: "50vw",
        background: "radial-gradient(circle, rgba(56,189,248,0.03) 0%, transparent 70%)",
        pointerEvents: "none"
      }} />

      <div style={{ maxWidth: 1300, margin: "0 auto", position: "relative", zIndex: 1 }}>
        {/* Header */}
        <div style={{
          textAlign: "center", marginBottom: 80,
          opacity: visible ? 1 : 0, 
          transform: visible ? "none" : "translateY(30px)", 
          transition: "all 0.9s cubic-bezier(0.23, 1, 0.32, 1)",
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
              Showcase
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
            Proyectos que <span style={{ 
              background: "linear-gradient(135deg, #60A5FA, #38BDF8)", 
              WebkitBackgroundClip: "text", 
              WebkitTextFillColor: "transparent", 
              backgroundClip: "text" 
            }}>Impulsan</span> el Mañana
          </h2>
          <p style={{ 
            fontFamily: "'Plus Jakarta Sans', sans-serif", 
            color: "#94A3B8", 
            maxWidth: 550, 
            margin: "0 auto", 
            fontSize: 18, 
            lineHeight: 1.6 
          }}>
            Explora una selección curada de nuestras innovaciones más recientes en desarrollo web, móvil e inteligencia artificial.
          </p>
        </div>

        {/* Grid */}
        <div style={{ 
          display: "grid", 
          gridTemplateColumns: "repeat(auto-fit, minmax(360px, 1fr))", 
          gap: 32 
        }}>
          {PROJECTS.map((p, i) => (
            <ProjectCard key={p.title} project={p} index={i} visible={visible} />
          ))}
        </div>
      </div>
    </section>
  );
}
