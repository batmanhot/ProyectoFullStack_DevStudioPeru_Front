// ─────────────────────────────────────────────────────────────
//  src/components/Portfolio.jsx  — 6 proyectos, grid 3×2
// ─────────────────────────────────────────────────────────────
import { useInView } from "../hooks/useInView";
import { PROJECTS } from "../data/content";

function ProjectCard({ project, index, visible }) {
  return (
    <div
      style={{
        borderRadius:16, overflow:"hidden",
        border:"1px solid rgba(255,255,255,0.07)",
        opacity: visible?1:0,
        transform: visible?"translateY(0)":"translateY(28px)",
        transition:`opacity 0.7s ease ${index*0.1}s, transform 0.7s ease ${index*0.1}s, box-shadow 0.3s ease`,
      }}
      onMouseEnter={e=>{
        e.currentTarget.style.transform="translateY(-5px)";
        e.currentTarget.style.boxShadow=`0 20px 56px ${project.accentColor}28`;
        e.currentTarget.style.borderColor=project.accentColor+"33";
      }}
      onMouseLeave={e=>{
        e.currentTarget.style.transform="translateY(0)";
        e.currentTarget.style.boxShadow="none";
        e.currentTarget.style.borderColor="rgba(255,255,255,0.07)";
      }}
    >
      {/* Card header */}
      <div style={{
        height:140, position:"relative", overflow:"hidden",
        background:`linear-gradient(135deg,${project.accentColor}18,${project.accentColor}06)`,
        display:"flex", alignItems:"center", justifyContent:"center",
      }}>
        <span style={{ fontFamily:"'Space Grotesk',sans-serif", fontWeight:900, fontSize:52, color:project.accentColor,
          opacity:0.15, position:"absolute", userSelect:"none" }}>{"</>"}</span>
        <span style={{ fontFamily:"'Space Grotesk',sans-serif", fontWeight:800, fontSize:40,
          color:project.accentColor, textShadow:`0 0 30px ${project.accentColor}88`, position:"relative", zIndex:1 }}>
          {project.title[0]}
        </span>
        <span style={{
          position:"absolute", top:10, right:10,
          fontFamily:"'Space Grotesk',sans-serif", fontSize:10, fontWeight:600, color:"#E2E8F0",
          background:"rgba(0,0,0,0.45)", borderRadius:100, padding:"3px 10px",
        }}>{project.category}</span>
      </div>

      {/* Card body */}
      <div style={{ padding:"20px 22px", background:"rgba(10,14,35,0.95)" }}>
        <h3 style={{ fontFamily:"'Space Grotesk',sans-serif", fontWeight:700, fontSize:18, color:"#E2E8F0", marginBottom:8 }}>
          {project.title}
        </h3>
        <p style={{ fontFamily:"'Plus Jakarta Sans',sans-serif", fontSize:13, color:"#64748B", lineHeight:1.7, marginBottom:14 }}>
          {project.description}
        </p>
        <div style={{ display:"flex", flexWrap:"wrap", gap:6 }}>
          {project.tags.map(t=>(
            <span key={t} style={{
              fontFamily:"'Space Grotesk',sans-serif", fontSize:10, fontWeight:600,
              color:project.accentColor, background:`${project.accentColor}14`, borderRadius:100, padding:"3px 9px",
            }}>{t}</span>
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
      padding:"100px clamp(20px,5vw,80px)",
      background:"rgba(59,130,246,0.02)",
    }}>
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
            <span style={{ fontFamily:"'Space Grotesk',sans-serif", fontSize:11, color:"#93C5FD", letterSpacing:"0.12em", textTransform:"uppercase", fontWeight:600 }}>Portafolio</span>
          </div>
          <h2 style={{ fontFamily:"'Space Grotesk',sans-serif", fontWeight:800, fontSize:"clamp(26px,4vw,42px)", color:"#E2E8F0", lineHeight:1.15, marginBottom:14 }}>
            Proyectos <span style={{ background:"linear-gradient(135deg,#3B82F6,#38BDF8)", WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent", backgroundClip:"text" }}>Destacados</span>
          </h2>
          <p style={{ fontFamily:"'Plus Jakarta Sans',sans-serif", color:"#64748B", maxWidth:480, margin:"0 auto", fontSize:15 }}>
            Una muestra de lo que hemos construido. Cada proyecto refleja nuestro compromiso con la calidad y el impacto.
          </p>
        </div>

        {/* Grid 3×2 */}
        <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(300px,1fr))", gap:20 }}>
          {PROJECTS.map((p,i)=>(
            <ProjectCard key={p.title} project={p} index={i} visible={visible}/>
          ))}
        </div>
      </div>
    </section>
  );
}
