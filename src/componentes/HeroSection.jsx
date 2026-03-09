// ─────────────────────────────────────────────────────────────
//  src/components/HeroSection.jsx
//  Usa /public/logo-hero.png como imagen principal del hero
// ─────────────────────────────────────────────────────────────
import { useEffect, useState } from "react";
import { HERO_STATS, HERO_TAGLINE, HERO_BADGE } from "../data/content";

const SERVICES_PILL = ["Arquitectura", "Web", "Móvil", "IA", "Automatizaciones", "Cloud"];

export default function HeroSection() {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => { const t = setTimeout(() => setLoaded(true), 100); return ()=>clearTimeout(t); }, []);

  const anim = (delay=0) => ({
    opacity: loaded?1:0,
    transform: loaded?"translateY(0)":"translateY(36px)",
    transition:`opacity 0.8s ease ${delay}s, transform 0.8s ease ${delay}s`,
  });

  return (
    <section id="hero" style={{
      minHeight:"100vh", display:"flex", alignItems:"center",
      position:"relative", overflow:"hidden",
      padding:"120px clamp(20px,5vw,80px) 80px",
    }}>
      
      {/* ── Malla cuadriculada tipo circuito — fondo de TODA la sección ── */}
      {/* <div style={{
        position: "absolute", inset: 0, zIndex: 0, pointerEvents: "none",
        // Grilla cuadrada fina
        backgroundImage: `
          linear-gradient(rgba(59,130,246,0.07) 1px, transparent 1px),
          linear-gradient(90deg, rgba(59,130,246,0.07) 1px, transparent 1px)
        `,
        backgroundSize: "40px 40px",
      }}/> */}

      {/* Nodos en las intersecciones cada 120px */}
      {/* <div style={{
        position: "absolute", inset: 0, zIndex: 0, pointerEvents: "none",
        backgroundImage: `radial-gradient(circle, rgba(56,189,248,0.18) 1.5px, transparent 1.5px)`,
        backgroundSize: "120px 120px",
        backgroundPosition: "0 0",
      }}/> */}
      {/* Viñeta para que los bordes se desvanezcan */}
      {/* <div style={{
        position: "absolute", inset: 0, zIndex: 0, pointerEvents: "none",
        background: `
          radial-gradient(ellipse 80% 50% at 50% 50%, transparent 40%, rgba(10,14,35,0.85) 100%)
        `,
      }}/> */}

      {/* BG orbs */}
      <div style={{ position:"absolute", inset:0, overflow:"hidden", pointerEvents:"none" }}>
        <div style={{ position:"absolute", width:700, height:700, borderRadius:"50%",
          background:"radial-gradient(circle,rgba(37,99,235,0.18) 0%,transparent 70%)",
          top:"-5%", left:"5%", animation:"float1 9s ease-in-out infinite" }}/>
        <div style={{ position:"absolute", width:500, height:500, borderRadius:"50%",
          background:"radial-gradient(circle,rgba(56,189,248,0.12) 0%,transparent 70%)",
          bottom:"10%", right:"5%", animation:"float2 11s ease-in-out infinite" }}/>
        {/* Grid */}
        <div style={{ position:"absolute", inset:0,
          backgroundImage:"linear-gradient(rgba(59,130,246,0.05) 1px,transparent 1px),linear-gradient(90deg,rgba(59,130,246,0.05) 1px,transparent 1px)",
          backgroundSize:"60px 60px" }}/>
        {/* Vignette */}
        <div style={{ position:"absolute", inset:0,
          background:"radial-gradient(ellipse 80% 60% at 50% 0%,transparent 40%,rgba(10,14,35,0.7) 100%)" }}/>
      </div>

      {/* ── Two-column layout ── */}
      <div style={{
        position:"relative", zIndex:1, width:"100%", maxWidth:1200, margin:"0 auto",
        display:"grid", gridTemplateColumns:"1fr 1fr", gap:40, alignItems:"center",
      }} className="hero-grid">

        {/* LEFT: text */}
        <div>
          {/* Badge */}
          <div style={anim(0)}>
            <div style={{
              display:"inline-flex", alignItems:"center", gap:8,
              background:"rgba(37,99,235,0.12)", border:"1px solid rgba(59,130,246,0.3)",
              borderRadius:100, padding:"6px 16px", marginBottom:28,
            }}>
              <span style={{ width:8, height:8, borderRadius:"50%", background:"#3B82F6", display:"inline-block", animation:"pulse 2s infinite" }}/>
              <span style={{ fontFamily:"'Space Grotesk',sans-serif", fontSize:12, color:"#93C5FD", letterSpacing:"0.08em" }}>
                Lima, Perú · Disponibles para proyectos
              </span>
            </div>
          </div>

          {/* Heading */}
          <div style={anim(0.15)}>
            <h1 style={{ fontFamily:"'Space Grotesk',sans-serif", fontWeight:800,
              fontSize:"clamp(36px,5vw,64px)", lineHeight:1.05, marginBottom:20, color:"#E2E8F0" }}>
              Transformamos<br/>
              <span style={{ background:"linear-gradient(135deg,#3B82F6,#60A5FA,#38BDF8)",
                WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent", backgroundClip:"text" }}>
                tus ideas
              </span>{" "}en<br/>
              soluciones reales.
            </h1>
          </div>

          {/* Sub */}
          <div style={anim(0.3)}>
            <p style={{ fontFamily:"'Plus Jakarta Sans',sans-serif", fontSize:"clamp(15px,1.8vw,18px)",
              color:"#64748B", lineHeight:1.75, marginBottom:36, maxWidth:520 }}>
              Somos un estudio peruano especializado en <strong style={{color:"#93C5FD"}}>Arquitectura de Software</strong>, desarrollo Web, Móvil, IA, Automatizaciones e Infraestructura Cloud.
            </p>
          </div>

          {/* Pills */}
          <div style={anim(0.4)}>
            <div style={{ display:"flex", flexWrap:"wrap", gap:8, marginBottom:36 }}>
              {SERVICES_PILL.map(s=>(
                <span key={s} style={{
                  fontFamily:"'Space Grotesk',sans-serif", fontSize:12, fontWeight:600,
                  color:"#60A5FA", background:"rgba(59,130,246,0.1)", border:"1px solid rgba(59,130,246,0.2)",
                  borderRadius:100, padding:"4px 12px",
                }}>{s}</span>
              ))}
            </div>
          </div>

          {/* CTAs */}
          <div style={{ ...anim(0.5), display:"flex", gap:14, flexWrap:"wrap" }}>
            <a href="#servicios" style={{
              fontFamily:"'Space Grotesk',sans-serif", fontWeight:700, fontSize:15,
              color:"#fff", padding:"13px 30px", borderRadius:10, textDecoration:"none",
              background:"linear-gradient(135deg,#2563EB,#3B82F6)",
              boxShadow:"0 0 36px rgba(59,130,246,0.4)", transition:"all 0.2s",
            }}
              onMouseEnter={e=>{e.currentTarget.style.transform="translateY(-2px)";e.currentTarget.style.boxShadow="0 0 50px rgba(59,130,246,0.65)"}}
              onMouseLeave={e=>{e.currentTarget.style.transform="none";e.currentTarget.style.boxShadow="0 0 36px rgba(59,130,246,0.4)"}}>
              Ver servicios →
            </a>
            <a href="#contacto" style={{
              fontFamily:"'Space Grotesk',sans-serif", fontWeight:600, fontSize:15,
              color:"#E2E8F0", padding:"13px 30px", borderRadius:10, textDecoration:"none",
              border:"1px solid rgba(226,232,240,0.18)", transition:"all 0.2s",
            }}
              onMouseEnter={e=>{e.currentTarget.style.background="rgba(59,130,246,0.08)";e.currentTarget.style.borderColor="rgba(59,130,246,0.4)"}}
              onMouseLeave={e=>{e.currentTarget.style.background="transparent";e.currentTarget.style.borderColor="rgba(226,232,240,0.18)"}}>
              Contáctanos
            </a>
          </div>
        </div>

        {/* RIGHT: Hero image */}
        <div style={{ ...anim(0.2), display:"flex", justifyContent:"center", alignItems:"center" }}>
          <div style={{ position:"relative", display:"inline-block" }}>
            {/* Glow ring */}
            <div style={{
              position:"absolute", inset:"-20px", borderRadius:"50%",
              background:"radial-gradient(circle,rgba(59,130,246,0.25) 0%,transparent 70%)",
              animation:"float1 6s ease-in-out infinite",
            }}/>
            <img
              src="/logo-hero.png"
              alt="DevStudioPeru Logo"
              style={{
                width:"clamp(280px,35vw,480px)", height:"auto",
                objectFit:"contain", position:"relative", zIndex:1,
                filter:"drop-shadow(0 0 40px rgba(59,130,246,0.5))",
                animation:"float2 7s ease-in-out infinite",
              }}
            />
          </div>
        </div>
      </div>

      {/* Stats bar */}
      <div style={{
        position:"absolute", bottom:0, left:0, right:0,
        background:"rgba(10,14,35,0.7)", backdropFilter:"blur(12px)",
        borderTop:"1px solid rgba(59,130,246,0.12)",
        padding:"20px clamp(20px,5vw,80px)",
        display:"flex", justifyContent:"center", gap:"clamp(32px,6vw,80px)", flexWrap:"wrap",
        opacity: loaded?1:0, transition:"opacity 0.8s ease 0.7s",
      }}>
        {HERO_STATS.map(({value,label})=>(
          <div key={label} style={{ textAlign:"center" }}>
            <div style={{ fontFamily:"'Space Grotesk',sans-serif", fontWeight:800, fontSize:28,
              background:"linear-gradient(135deg,#3B82F6,#38BDF8)",
              WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent", backgroundClip:"text", lineHeight:1 }}>{value}</div>
            <div style={{ fontFamily:"'Plus Jakarta Sans',sans-serif", fontSize:12, color:"#64748B", marginTop:4 }}>{label}</div>
          </div>
        ))}
      </div>

      <style>{`
        @keyframes float1{0%,100%{transform:translate(0,0)}50%{transform:translate(20px,-20px)}}
        @keyframes float2{0%,100%{transform:translate(0,0)}50%{transform:translate(-15px,15px)}}
        @keyframes pulse{0%,100%{opacity:1;transform:scale(1)}50%{opacity:0.4;transform:scale(0.75)}}
        @media(max-width:768px){.hero-grid{grid-template-columns:1fr!important} .hero-grid>div:last-child{display:none!important}}
      `}</style>
    </section>
  );
}
