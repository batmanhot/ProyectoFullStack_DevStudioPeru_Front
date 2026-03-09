// ─────────────────────────────────────────────────────────────
//  src/components/Testimonials.jsx
// ─────────────────────────────────────────────────────────────

import { useInView } from "../hooks/useInView";
import { TESTIMONIALS } from "../data/content";

function TestimonialCard({ testimonial, index, visible }) {
  return (
    <div
      className="rounded-2xl p-8 relative"
      style={{
        background: "rgba(108,99,255,0.05)",
        border: "1px solid rgba(108,99,255,0.15)",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(30px)",
        transition: `opacity 0.7s ease ${index * 0.15}s, transform 0.7s ease ${index * 0.15}s`,
      }}
    >
      {/* Texto */}
      <p className="font-body text-textSub text-[15px] leading-relaxed mb-6">
        {testimonial.text}
      </p>

      {/* Autor */}
      <div className="flex items-center gap-3">
        {/* Avatar */}
        <div
          className="w-11 h-11 rounded-full flex items-center justify-center font-display font-bold text-sm text-white flex-shrink-0"
          style={{
            background: "linear-gradient(135deg, #6C63FF, #A78BFA)",
          }}
        >
          {testimonial.avatar}
        </div>

        <div className="flex-1">
          <div className="font-display font-bold text-textBase text-sm">
            {testimonial.name}
          </div>
          <div className="font-body text-textMuted text-xs mt-0.5">
            {testimonial.role}
          </div>
        </div>

        {/* Estrellas */}
        <div className="text-yellow-400 text-sm tracking-tight">★★★★★</div>
      </div>
    </div>
  );
}

export default function Testimonials() {
  const [ref, visible] = useInView();

  return (
    <section
      id="testimonios"
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
              Testimonios
            </span>
          </div>

          <h2
            className="font-display font-bold text-textBase leading-tight"
            style={{ fontSize: "clamp(26px,4vw,40px)" }}
          >
            Lo que dicen nuestros{" "}
            <span className="text-primary">clientes</span>
          </h2>
        </div>

        {/* Grid */}
        <div
          className="grid gap-6"
          style={{ gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))" }}
        >
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
