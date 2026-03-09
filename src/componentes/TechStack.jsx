// ─────────────────────────────────────────────────────────────
//  src/components/TechStack.jsx
// ─────────────────────────────────────────────────────────────

import { useState } from "react";
import { useInView } from "../hooks/useInView";
import { TECHNOLOGIES } from "../data/content";

function TechCard({ tech, index, visible }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="rounded-xl py-5 px-3 text-center cursor-default"
      style={{
        background: hovered ? `${tech.color}11` : "rgba(15,15,26,0.8)",
        border: `1px solid ${hovered ? tech.color + "55" : "rgba(108,99,255,0.12)"}`,
        opacity: visible ? 1 : 0,
        transform: visible ? "scale(1)" : "scale(0.9)",
        transition: `opacity 0.5s ease ${index * 0.05}s, transform 0.5s ease ${index * 0.05}s, background 0.25s ease, border-color 0.25s ease`,
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Ícono con iniciales */}
      <div
        className="w-11 h-11 rounded-xl mx-auto mb-2.5 flex items-center justify-center font-display font-extrabold text-sm"
        style={{
          background: tech.color + "22",
          color: tech.color,
        }}
      >
        {tech.name.slice(0, 2)}
      </div>

      <span className="font-display text-[12px] font-semibold text-textSub">
        {tech.name}
      </span>
    </div>
  );
}

export default function TechStack() {
  const [ref, visible] = useInView();

  return (
    <section
      id="tecnologias"
      ref={ref}
      style={{ padding: "100px clamp(20px,5vw,80px)" }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Encabezado */}
        <div
          className="text-center mb-14"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(30px)",
            transition: "all 0.7s ease",
          }}
        >
          <div
            className="inline-flex items-center gap-2 rounded-full px-3.5 py-1 mb-4"
            style={{
              background: "rgba(108,99,255,0.12)",
              border: "1px solid rgba(108,99,255,0.3)",
            }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
            <span className="font-display text-[11px] text-primaryLight uppercase tracking-[1.5px] font-semibold">
              Stack Tecnológico
            </span>
          </div>

          <h2
            className="font-display font-bold text-textBase leading-tight"
            style={{ fontSize: "clamp(26px,4vw,40px)" }}
          >
            Nuestras <span className="text-primary">tecnologías</span>
          </h2>
        </div>

        {/* Grid */}
        <div
          className="grid gap-4"
          style={{ gridTemplateColumns: "repeat(auto-fit, minmax(110px, 1fr))" }}
        >
          {TECHNOLOGIES.map((tech, i) => (
            <TechCard key={tech.name} tech={tech} index={i} visible={visible} />
          ))}
        </div>
      </div>
    </section>
  );
}
