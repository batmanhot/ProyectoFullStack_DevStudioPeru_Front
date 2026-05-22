import { useState } from "react";
import { useInView } from "../hooks/useInView";
import { STACK_CATEGORIES } from "../data/content";

function SvgIcon({ name }) {
  if (name === 'ico-flutter.svg') {
    return <svg viewBox="0 0 24 24" fill="#45D1FD" className="w-5 h-5 flex-shrink-0"><path d="M14.314 0L2.3 12 6 15.7 21.684.013h-7.357zm.014 11.072L7.857 17.53l6.47 6.47H21.7l-6.46-6.468 6.46-6.46h-7.37z"/></svg>;
  }
  if (name === 'ico-redis.svg') {
    return <svg viewBox="0 0 24 24" fill="#DC382D" className="w-5 h-5 flex-shrink-0"><path d="M12 2C6.48 2 2 4.24 2 7v10c0 2.76 4.48 5 10 5s10-2.24 10-5V7c0-2.76-4.48-5-10-5zm0 3c4.42 0 8 1.79 8 4s-3.58 4-8 4-8-1.79-8-4 3.58-4 8-4zm0 15c-4.42 0-8-1.79-8-4v-2.38C5.55 14.49 8.52 15 12 15s6.45-.51 8-1.38V17c0 2.21-3.58 4-8 4z"/></svg>;
  }
  if (name === 'ico-kubernetes.svg') {
    return <svg viewBox="0 0 24 24" fill="#326CE5" className="w-5 h-5 flex-shrink-0"><path d="M12 2L2 7l2 10 8 5 8-5 2-10-10-5zm0 3.3L19.2 9l-1.5 7-5.7 3.6L6.3 16 4.8 9 12 5.3z"/></svg>;
  }
  if (name === 'ico-langchain.svg') {
    return <svg viewBox="0 0 24 24" fill="#1C3C3C" className="w-5 h-5 flex-shrink-0"><path d="M10.59 13.41c.41.39.41 1.03 0 1.42-.39.39-1.03.39-1.42 0a5.003 5.003 0 0 1 0-7.07l3.54-3.54a5.003 5.003 0 0 1 7.07 0 5.003 5.003 0 0 1 0 7.07l-1.49 1.49c.01-.82-.12-1.64-.4-2.42l.47-.48a2.982 2.982 0 0 0 0-4.24 2.982 2.982 0 0 0-4.24 0l-3.53 3.53a2.982 2.982 0 0 0 0 4.24zm2.82-4.24c.39-.39 1.03-.39 1.42 0a5.003 5.003 0 0 1 0 7.07l-3.54 3.54a5.003 5.003 0 0 1-7.07 0 5.003 5.003 0 0 1 0-7.07l1.49-1.49c-.01.82.12 1.64.4 2.43l-.47.47a2.982 2.982 0 0 0 0 4.24 2.982 2.982 0 0 0 4.24 0l3.53-3.53a2.982 2.982 0 0 0 0-4.24.973.973 0 0 1 0-1.42z"/></svg>;
  }
  return <img src={new URL(`../assets/${name}`, import.meta.url).href} alt="" className="w-5 h-5 object-contain flex-shrink-0" />;
}

function TechCard({ cat, index, visible }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div 
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="rounded-[2.5rem] p-7 relative overflow-hidden transition-all duration-500"
      style={{
        background: hovered ? "rgba(255, 255, 255, 0.05)" : "rgba(15, 17, 30, 0.4)",
        border: `1px solid ${hovered ? "rgba(56, 189, 248, 0.3)" : "rgba(255,255,255,0.05)"}`,
        backdropFilter: "blur(12px)",
        opacity: visible ? 1 : 0,
        transform: visible ? (hovered ? "translateY(-10px) scale(1.02)" : "translateY(0)") : "translateY(30px)",
        transition: `all 0.5s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.7s ease ${index * 0.1}s`,
        boxShadow: hovered ? "0 25px 50px -12px rgba(0, 0, 0, 0.5), 0 0 20px rgba(59, 130, 246, 0.1)" : "none"
      }}
    >
      {/* Resplandor interno dinámico */}
      <div style={{
        position: "absolute", top: "-20%", right: "-20%", width: "60%", height: "60%",
        background: "radial-gradient(circle, rgba(56, 189, 248, 0.08) 0%, transparent 70%)",
        pointerEvents: "none", opacity: hovered ? 1 : 0.5, transition: "opacity 0.5s"
      }} />

      <div className="flex justify-between items-center mb-4 relative z-10">
        <h3 className="font-display text-white font-bold text-[18px] tracking-tight">{cat.title}</h3>
        <span className="text-blue-500 text-[12px] font-mono font-bold opacity-60">{cat.number}</span>
      </div>

      <p className="text-slate-400 text-[14px] mb-8 whitespace-pre-line leading-relaxed min-h-[48px] relative z-10">
        {cat.description}
      </p>

      <div className="flex flex-col gap-3 relative z-10">
        {cat.technologies.map((tech) => (
          <div 
            key={tech.name}
            className="flex items-center gap-4 px-4 py-3.5 rounded-2xl transition-all hover:translate-x-1"
            style={{ 
              background: "rgba(255,255,255,0.03)", 
              border: "1px solid rgba(255,255,255,0.02)"
            }}
          >
            <div className="p-2 rounded-lg bg-white/5 border border-white/5 group-hover:border-blue-500/30 transition-colors">
              <SvgIcon name={tech.icon} />
            </div>
            <span className="text-slate-200 text-[14px] font-semibold tracking-wide">{tech.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function TechStack() {
  const [ref, visible] = useInView();

  return (
    <section
      id="tecnologias"
      ref={ref}
      style={{ 
        padding: "120px clamp(20px,5vw,80px)", 
        background: "#07091A", // Fondo unificado con el Hero
        position: "relative"
      }}
    >
      {/* Decoración de fondo */}
      <div style={{
        position: "absolute", top: "20%", left: "50%", transform: "translateX(-50%)",
        width: "80%", height: "60%", background: "radial-gradient(circle, rgba(59, 130, 246, 0.03) 0%, transparent 70%)",
        pointerEvents: "none"
      }} />

      <div className="max-w-[1400px] mx-auto relative z-10">
        {/* Badge */}
        <div 
          className="inline-flex items-center gap-2 rounded-full px-5 py-2 mb-10"
          style={{ background: "rgba(37,99,235,0.08)", border: "1px solid rgba(37,99,235,0.2)" }}
        >
          <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
          <span className="font-display text-[12px] text-blue-300 uppercase tracking-[0.2em] font-bold">
            Tecnologías
          </span>
        </div>

        {/* Encabezado */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8 mb-20">
          <h2 className="font-display font-black text-white leading-[1.1] max-w-3xl" style={{ fontSize: "clamp(36px, 5vw, 64px)" }}>
            Herramientas <span style={{ fontStyle: "italic", background: "linear-gradient(135deg, #38BDF8, #818CF8)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>adecuadas</span><br />
            para el siguiente nivel.
          </h2>
          <p className="text-slate-400 max-w-md text-[17px] leading-relaxed mb-4">
            No coleccionamos lenguajes. Seleccionamos el stack óptimo para garantizar escalabilidad, seguridad y velocidad.
          </p>
        </div>

        {/* Grid de Categorías */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {STACK_CATEGORIES.map((cat, i) => (
            <TechCard key={cat.title} cat={cat} index={i} visible={visible} />
          ))}
        </div>

        {/* Pie de sección */}
        <div className="mt-20 pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-500 text-[14px] font-medium italic">
            * Evolucionamos constantemente según las demandas de la industria.
          </p>
          <div className="flex items-center gap-4 text-blue-400/60 font-mono text-xs tracking-widest">
            <span>STABLE</span>
            <div className="w-12 h-[1px] bg-white/10" />
            <span>SCALABLE</span>
            <div className="w-12 h-[1px] bg-white/10" />
            <span>SECURE</span>
          </div>
        </div>
      </div>
    </section>
  );
}
