// ─────────────────────────────────────────────────────────────
//  src/components/ServicesSection.jsx  — 6 servicios reales
// ─────────────────────────────────────────────────────────────
import { useState } from "react";
import { useInView } from "../hooks/useInView";
import { SERVICES } from "../data/content";

function ServiceCard({ service, index, visible }) {
  const [hovered, setHovered] = useState(false);
  const accent = service.accent || "#6C63FF";

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: hovered ? `${accent}0D` : "rgba(15,15,26,0.7)",
        border: `1px solid ${hovered ? accent+"44" : "rgba(255,255,255,0.07)"}`,
        borderRadius: 16, padding:"28px 24px", cursor:"default",
        transition:"all 0.3s ease",
        transform: hovered ? "translateY(-6px)" : "none",
        boxShadow: hovered ? `0 20px 60px ${accent}22` : "none",
        opacity: visible ? 1 : 0,
        transitionDelay: visible ? `${index*0.08}s` : "0s",
      }}
    >
      {/* Icon circle */}
      <div style={{
        width:52, height:52, borderRadius:14, marginBottom:18,
        background:`${accent}18`, border:`1px solid ${accent}33`,
        display:"flex", alignItems:"center", justifyContent:"center", fontSize:26,
        transition:"background 0.3s",
        ...(hovered && { background:`${accent}28` }),
      }}>
        {service.icon}
      </div>

      <h3 style={{ fontFamily:"'Space Grotesk',sans-serif", fontWeight:700, fontSize:18, color:"#E2E8F0", marginBottom:10 }}>
        {service.title}
      </h3>
      <p style={{ fontFamily:"'Plus Jakarta Sans',sans-serif", fontSize:14, color:"#64748B", lineHeight:1.75, marginBottom:18 }}>
        {service.description}
      </p>
      <div style={{ display:"flex", flexWrap:"wrap", gap:6 }}>
        {service.tags.map(tag=>(
          <span key={tag} style={{
            fontFamily:"'Space Grotesk',sans-serif", fontSize:11, fontWeight:600,
            color: accent, background:`${accent}14`, borderRadius:100, padding:"3px 10px",
          }}>{tag}</span>
        ))}
      </div>
    </div>
  );
}

export default function ServicesSection() {
  const [ref, visible] = useInView();

  return (
    <section id="servicios" ref={ref} style={{
      padding:"100px clamp(20px,5vw,80px)",
      background:"rgba(59,130,246,0.02)",
    }}>
       {/* ── Malla circuito ── */}
      {/* <div style={{
        position:"absolute", inset:0, zIndex:0, pointerEvents:"none",
        backgroundImage:`
          linear-gradient(rgba(59,130,246,0.07) 1px, transparent 1px),
          linear-gradient(90deg,rgba(59,130,246,0.07) 1px,transparent 1px)
        `,
        backgroundSize:"40px 40px",
      }}/>
      <div style={{
        position:"absolute", inset:0, zIndex:0, pointerEvents:"none",
        backgroundImage:`radial-gradient(circle,rgba(56,189,248,0.16) 1.5px,transparent 1.5px)`,
        backgroundSize:"120px 120px",
      }}/>
      <div style={{
        position:"absolute", inset:0, zIndex:0, pointerEvents:"none",
        background:"radial-gradient(ellipse 90% 60% at 50% 50%,transparent 40%,rgba(10,14,35,0.75) 100%)",
      }}/> */}

      <div style={{ maxWidth:1200, margin:"0 auto" }}>
        {/* Header */}
        <div style={{
          textAlign:"center", marginBottom:56,
          opacity:visible?1:0, transform:visible?"none":"translateY(28px)", transition:"all 0.7s ease",
        }}>
          <div style={{
            display:"inline-flex", alignItems:"center", gap:8,
            background:"rgba(59,130,246,0.1)", border:"1px solid rgba(59,130,246,0.25)",
            borderRadius:100, padding:"5px 16px", marginBottom:16,
          }}>
            <span style={{ width:6, height:6, borderRadius:"50%", background:"#3B82F6", display:"inline-block" }}/>
            <span style={{ fontFamily:"'Space Grotesk',sans-serif", fontSize:11, color:"#93C5FD", letterSpacing:"0.12em", textTransform:"uppercase", fontWeight:600 }}>
              Servicios
            </span>
          </div>

          <h2 style={{ fontFamily:"'Space Grotesk',sans-serif", fontWeight:800,
            fontSize:"clamp(26px,4vw,42px)", color:"#E2E8F0", lineHeight:1.15, marginBottom:14 }}>
            Lo que <span style={{ background:"linear-gradient(135deg,#3B82F6,#38BDF8)", WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent", backgroundClip:"text" }}>construimos</span> para ti
          </h2>
          <p style={{ fontFamily:"'Plus Jakarta Sans',sans-serif", color:"#64748B", maxWidth:520, margin:"0 auto", fontSize:16, lineHeight:1.7 }}>
            Desde la arquitectura base hasta el despliegue en producción. Cubrimos todo el ciclo de vida de tu producto digital.
          </p>
        </div>

        {/* Grid 3×2 */}
        <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(300px,1fr))", gap:20 }}>
          {SERVICES.map((s,i)=>(
            <ServiceCard key={s.title} service={s} index={i} visible={visible}/>
          ))}
        </div>
      </div>
    </section>
  );
}
