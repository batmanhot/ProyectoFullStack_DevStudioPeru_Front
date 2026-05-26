// ─────────────────────────────────────────────────────────────
//  src/components/HeroSection.jsx  — HIGH IMPACT v2
//  Diseño asimétrico, partículas, typewriter animado, stats
// ─────────────────────────────────────────────────────────────
import { useEffect, useState, useRef } from "react";
import { HERO_STATS } from "../data/content";
import logo from "../assets/icono-logo devstudio peru.png";

// Palabras que rotan en el typewriter
const ROTATING_WORDS = [
  "que automatiza tu operación.",
  "que hace crecer tu empresa.",
  "que elimina errores operativos.",
  "que escala con tu negocio.",
  "que genera resultados reales.",
];

// Partículas de código flotantes — distribuidas por toda la pantalla
const CODE_PARTICLES = [
  // Fila superior
  { text: "⚛ React", x: 6, y: 12, delay: 0.0 },
  { text: "{ AI }", x: 30, y: 8, delay: 1.2 },
  { text: "☁ Cloud", x: 55, y: 6, delay: 0.6 },
  { text: "Next.js", x: 78, y: 10, delay: 1.8 },
  { text: "🐳 Docker", x: 92, y: 18, delay: 2.4 },

  // Fila media-alta
  // { text: "</> API", x: 3, y: 32, delay: 0.9 },
  // { text: "TypeScript", x: 22, y: 38, delay: 2.1 },
  // { text: "🔒 Auth", x: 88, y: 35, delay: 0.3 },

  // Fila media
  // { text: "Node.js", x: 8, y: 55, delay: 1.5 },
  // { text: "GraphQL", x: 94, y: 52, delay: 3.0 },

  // Fila media-baja
  //  { text: "🐍 Python",   x: 5,  y: 70, delay: 2.7 },
  //{ text: "Kubernetes",   x: 25, y: 75, delay: 0.8 },
  // { text: "PostgreSQL",   x: 65, y: 72, delay: 1.6 },
  //{ text: "AWS ☁",      x: 88, y: 68, delay: 2.2 },

  // Fila inferior
  //{ text: "⚡ Redis", x: 10, y: 88, delay: 1.1 },
  //{ text: "Flutter", x: 35, y: 85, delay: 3.3 },
  //{ text: "SQL",          x: 58, y: 90, delay: 0.4 },
  //{ text: "Git", x: 78, y: 82, delay: 1.9 },
  //{ text: "CI/CD", x: 92, y: 86, delay: 2.6 },

  // Extras dispersos
  { text: "🚀 DevOps", x: 45, y: 22, delay: 3.6 },
  { text: "Microservicios", x: 48, y: 95, delay: 1.4 },
  { text: "REST", x: 72, y: 42, delay: 0.7 },
];

// Líneas de código para el panel visual
const CODE_LINES = [
  { indent: 0, content: "class DevStudio {", color: "#60A5FA" },
  { indent: 1, content: "async buildSolution(idea) {", color: "#94A3B8" },
  { indent: 2, content: "const quality = '★★★★★';", color: "#34D399" },
  { indent: 2, content: "const delivery = 'on-time';", color: "#34D399" },
  { indent: 2, content: "return await this.ship(idea);", color: "#F8FAFC" },
  { indent: 1, content: "}", color: "#94A3B8" },
  { indent: 0, content: "}", color: "#60A5FA" },
];

// Hook para animar números
function useCountUp(target, duration = 2000, start = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    const num = parseInt(target.replace(/\D/g, ""), 10);
    if (isNaN(num)) { setCount(target); return; }
    let startTime = null;
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * num));
      if (progress < 1) requestAnimationFrame(step);
      else setCount(target);
    };
    requestAnimationFrame(step);
  }, [start, target, duration]);
  return count;
}

// Componente stat individual con animación de conteo
function AnimatedStat({ value, label, delay, start }) {
  const count = useCountUp(value, 1800, start);
  return (
    <div style={{
      textAlign: "center",
      opacity: start ? 1 : 0,
      transform: start ? "none" : "translateY(20px)",
      transition: `all 0.6s ease ${delay}s`,
    }}>
      <div style={{
        fontFamily: "'Space Grotesk', sans-serif", fontWeight: 800, fontSize: "clamp(28px, 3.5vw, 42px)",
        background: "linear-gradient(135deg, #60A5FA, #38BDF8)",
        WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
        lineHeight: 1
      }}>{count}</div>
      <div style={{
        fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 11, color: "#64748B",
        marginTop: 6, textTransform: "uppercase", letterSpacing: "0.12em", fontWeight: 600
      }}>{label}</div>
    </div>
  );
}

// Panel de código animado
function CodePanel({ visible }) {
  const [visibleLines, setVisibleLines] = useState(0);

  useEffect(() => {
    if (!visible) return;
    const interval = setInterval(() => {
      setVisibleLines(prev => {
        if (prev >= CODE_LINES.length) { clearInterval(interval); return prev; }
        return prev + 1;
      });
    }, 180);
    return () => clearInterval(interval);
  }, [visible]);

  return (
    <div style={{
      background: "rgba(8, 12, 30, 0.9)",
      backdropFilter: "blur(20px)",
      border: "1px solid rgba(59, 130, 246, 0.15)",
      borderRadius: 24,
      padding: "28px 32px",
      fontFamily: "'Fira Code', 'Courier New', monospace",
      fontSize: 13,
      lineHeight: 1.9,
      position: "relative",
      overflow: "hidden",
      boxShadow: "0 30px 60px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255,255,255,0.05)"
    }}>
      {/* Barra de título de ventana */}
      <div style={{
        display: "flex", alignItems: "center", gap: 8, marginBottom: 20,
        paddingBottom: 16, borderBottom: "1px solid rgba(255,255,255,0.06)"
      }}>
        <div style={{ width: 12, height: 12, borderRadius: "50%", background: "#FF5F56" }} />
        <div style={{ width: 12, height: 12, borderRadius: "50%", background: "#FFBD2E" }} />
        <div style={{ width: 12, height: 12, borderRadius: "50%", background: "#27C93F" }} />
        <span style={{ marginLeft: 12, color: "#475569", fontSize: 12 }}>solution.js — DevStudio</span>
      </div>

      {/* Líneas de código */}
      {CODE_LINES.map((line, i) => (
        <div
          key={i}
          style={{
            display: "flex",
            opacity: i < visibleLines ? 1 : 0,
            transform: i < visibleLines ? "none" : "translateX(-10px)",
            transition: "all 0.3s ease",
            paddingLeft: line.indent * 20,
          }}
        >
          <span style={{ color: "#334155", marginRight: 16, userSelect: "none", width: 20, textAlign: "right", fontSize: 11 }}>
            {i + 1}
          </span>
          <span style={{ color: line.color }}>{line.content}</span>
          {i === visibleLines - 1 && (
            <span style={{ display: "inline-block", width: 8, height: "1.1em", background: "#3B82F6", marginLeft: 2, animation: "blink 1s step-end infinite", verticalAlign: "middle" }} />
          )}
        </div>
      ))}

      {/* Badge de estado */}
      <div style={{
        position: "absolute", top: 16, right: 16,
        display: "flex", alignItems: "center", gap: 6,
        background: "rgba(16, 185, 129, 0.1)", border: "1px solid rgba(16, 185, 129, 0.2)",
        borderRadius: 100, padding: "4px 12px",
      }}>
        <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#10B981", boxShadow: "0 0 8px #10B981", animation: "pulse 2s infinite" }} />
        <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 11, color: "#10B981", fontWeight: 600 }}>Running</span>
      </div>

      {/* Gradiente de salida */}
      <div style={{
        position: "absolute", bottom: 0, left: 0, right: 0, height: 60,
        background: "linear-gradient(to top, rgba(8,12,30,0.9), transparent)",
        pointerEvents: "none"
      }} />
    </div>
  );
}

// Panel de métricas / dashboard
function MetricsPanel({ visible }) {
  const metrics = [
    { label: "Performance", value: 98, color: "#3B82F6" },
    { label: "Uptime", value: 99.9, color: "#10B981" },
    { label: "Velocity", value: 87, color: "#F59E0B" },
  ];

  return (
    <div style={{
      background: "rgba(255, 255, 255, 0.02)",
      backdropFilter: "blur(16px)",
      border: "1px solid rgba(255, 255, 255, 0.07)",
      borderRadius: 20,
      padding: "24px 28px",
      marginTop: 16,
      boxShadow: "0 20px 40px rgba(0, 0, 0, 0.3)"
    }}>
      <div style={{
        fontFamily: "'Space Grotesk', sans-serif", fontSize: 12, color: "#64748B",
        fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 18
      }}>
        Project Metrics
      </div>
      {metrics.map(({ label, value, color }, i) => (
        <div key={label} style={{
          marginBottom: i < metrics.length - 1 ? 16 : 0,
          opacity: visible ? 1 : 0,
          transform: visible ? "none" : "translateX(20px)",
          transition: `all 0.6s ease ${0.3 + i * 0.15}s`,
        }}>
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 6 }}>
            <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 13, color: "#94A3B8" }}>{label}</span>
            <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 13, color, fontWeight: 700 }}>{value}%</span>
          </div>
          <div style={{ height: 4, background: "rgba(255,255,255,0.05)", borderRadius: 100, overflow: "hidden" }}>
            <div style={{
              height: "100%", background: `linear-gradient(90deg, ${color}, ${color}aa)`,
              width: visible ? `${value}%` : "0%",
              transition: `width 1.2s cubic-bezier(0.4, 0, 0.2, 1) ${0.5 + i * 0.2}s`,
              borderRadius: 100
            }} />
          </div>
        </div>
      ))}
    </div>
  );
}

export default function HeroSection() {
  const [loaded, setLoaded] = useState(false);
  const [wordIdx, setWordIdx] = useState(0);
  const [displayWord, setDisplayWord] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIdx, setCharIdx] = useState(0);

  // Animación de entrada
  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 120);
    return () => clearTimeout(t);
  }, []);

  // Efecto Typewriter
  useEffect(() => {
    const currentWord = ROTATING_WORDS[wordIdx];
    let timeout;

    if (!isDeleting && charIdx < currentWord.length) {
      timeout = setTimeout(() => setCharIdx(c => c + 1), 80);
    } else if (!isDeleting && charIdx === currentWord.length) {
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && charIdx > 0) {
      timeout = setTimeout(() => setCharIdx(c => c - 1), 45);
    } else if (isDeleting && charIdx === 0) {
      setIsDeleting(false);
      setWordIdx(i => (i + 1) % ROTATING_WORDS.length);
    }

    setDisplayWord(currentWord.slice(0, charIdx));
    return () => clearTimeout(timeout);
  }, [charIdx, isDeleting, wordIdx]);

  const anim = (delay = 0) => ({
    opacity: loaded ? 1 : 0,
    transform: loaded ? "translateY(0)" : "translateY(40px)",
    transition: `opacity 0.9s ease ${delay}s, transform 0.9s cubic-bezier(0.23, 1, 0.32, 1) ${delay}s`,
  });

  return (
    <section id="hero" style={{
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
      position: "relative",
      overflow: "hidden",
      padding: "120px clamp(24px, 5vw, 80px) 80px",
      background: "#07091A",
    }}>

      {/* ══ FONDO PREMIUM ══ */}
      <div style={{ position: "absolute", inset: 0, overflow: "hidden", pointerEvents: "none" }}>
        {/* Orbe azul principal */}
        <div style={{
          position: "absolute", width: "60vw", height: "60vw", borderRadius: "50%",
          background: "radial-gradient(circle, rgba(37,99,235,0.12) 0%, transparent 65%)",
          top: "-15%", left: "-10%", animation: "floatA 14s ease-in-out infinite"
        }} />
        {/* Orbe cian secundario */}
        <div style={{
          position: "absolute", width: "45vw", height: "45vw", borderRadius: "50%",
          background: "radial-gradient(circle, rgba(56,189,248,0.08) 0%, transparent 65%)",
          bottom: "-10%", right: "-5%", animation: "floatB 18s ease-in-out infinite"
        }} />
        {/* Orbe violeta acento */}
        <div style={{
          position: "absolute", width: "30vw", height: "30vw", borderRadius: "50%",
          background: "radial-gradient(circle, rgba(139,92,246,0.06) 0%, transparent 65%)",
          top: "30%", right: "20%", animation: "floatC 10s ease-in-out infinite"
        }} />

        {/* Cuadrícula fina */}
        <div style={{
          position: "absolute", inset: 0,
          backgroundImage: "linear-gradient(rgba(59,130,246,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,0.04) 1px, transparent 1px)",
          backgroundSize: "70px 70px"
        }} />

        {/* Viñeta perimetral */}
        <div style={{
          position: "absolute", inset: 0,
          background: "radial-gradient(ellipse 90% 70% at 50% 50%, transparent 30%, rgba(7,9,26,0.85) 100%)"
        }} />
      </div>

      {/* ══ PARTÍCULAS DE CÓDIGO ══ */}
      {CODE_PARTICLES.map((p, i) => {
        // Paleta de colores cíclica para variedad visual
        const palettes = [
          { color: "rgba(96,165,250,0.55)", bg: "rgba(59,130,246,0.07)", border: "rgba(59,130,246,0.18)" }, // azul
          { color: "rgba(56,189,248,0.55)", bg: "rgba(14,165,233,0.07)", border: "rgba(14,165,233,0.18)" }, // cian
          { color: "rgba(52,211,153,0.55)", bg: "rgba(16,185,129,0.07)", border: "rgba(16,185,129,0.18)" }, // verde
          { color: "rgba(167,139,250,0.55)", bg: "rgba(139,92,246,0.07)", border: "rgba(139,92,246,0.18)" }, // violeta
          { color: "rgba(251,191,36,0.5)", bg: "rgba(245,158,11,0.06)", border: "rgba(245,158,11,0.15)" }, // ámbar
        ];
        const pal = palettes[i % palettes.length];
        // Duración flotante variada para movimiento orgánico
        const floatDuration = 7 + (i % 5) * 1.5;
        const fontSize = i % 3 === 0 ? 12 : i % 3 === 1 ? 11 : 10;

        return (
          <div key={i} style={{
            position: "absolute",
            left: `${p.x}%`, top: `${p.y}%`,
            fontFamily: "'Fira Code', 'Courier New', monospace",
            fontSize, fontWeight: 700,
            color: pal.color,
            background: pal.bg,
            border: `1px solid ${pal.border}`,
            borderRadius: 10, padding: "5px 12px",
            pointerEvents: "none",
            animation: `floatParticle ${floatDuration}s ease-in-out ${p.delay}s infinite`,
            opacity: loaded ? 1 : 0,
            transition: `opacity 1.2s ease ${0.4 + i * 0.07}s`,
            whiteSpace: "nowrap",
            zIndex: 0,
            backdropFilter: "blur(4px)",
            boxShadow: `0 4px 12px ${pal.bg}`,
            letterSpacing: "0.02em",
          }}>
            {p.text}
          </div>
        );
      })}

      {/* ══ LAYOUT PRINCIPAL ══ */}
      <div className="hero-grid" style={{
        position: "relative", zIndex: 1,
        width: "100%", maxWidth: 1400, margin: "0 auto",
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "clamp(40px, 6vw, 100px)",
        alignItems: "center",
      }}>

        {/* ─── COLUMNA IZQUIERDA: Texto ─── */}
        <div>

          {/* Badge de disponibilidad */}
          <div style={{ ...anim(0), display: "inline-flex", marginBottom: 32 }}>
            <div style={{
              display: "flex", alignItems: "center", gap: 10,
              background: "rgba(59, 130, 246, 0.07)", border: "1px solid rgba(59, 130, 246, 0.18)",
              borderRadius: 100, padding: "10px 22px",
            }}>
              <div style={{
                width: 8, height: 8, borderRadius: "50%",
                background: "#22C55E", boxShadow: "0 0 12px #22C55E",
                animation: "pulse 2s infinite"
              }} />
              <span style={{
                fontFamily: "'Space Grotesk', sans-serif", fontSize: 13, color: "#93C5FD",
                fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase"
              }}>
                Disponibles para Proyectos
              </span>
            </div>
          </div>

          {/* Headline principal */}
          <div style={anim(0.12)}>
            <h1 style={{
              fontFamily: "'Space Grotesk', sans-serif", fontWeight: 900,
              fontSize: "clamp(38px, 5.5vw, 72px)", lineHeight: 1.05,
              color: "#F8FAFC", letterSpacing: "-0.04em", marginBottom: 12
            }}>
              Software
            </h1>
            <h1 style={{
              fontFamily: "'Space Grotesk', sans-serif", fontWeight: 900,
              fontSize: "clamp(38px, 5.5vw, 72px)", lineHeight: 1.05,
              letterSpacing: "-0.04em", marginBottom: 28,
              minHeight: "1.1em", display: "flex", alignItems: "center", gap: 8
            }}>
              <span style={{
                background: "linear-gradient(135deg, #3B82F6, #60A5FA, #38BDF8)",
                WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
              }}>
                {displayWord}
              </span>
              <span style={{
                display: "inline-block", width: 4, height: "0.85em",
                background: "#3B82F6", borderRadius: 2, marginBottom: 4,
                animation: "blink 1s step-end infinite",
                verticalAlign: "middle",
              }} />
            </h1>
          </div>

          {/* Subtexto */}
          <div style={anim(0.25)}>
            <p style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontSize: "clamp(16px, 1.8vw, 19px)", color: "#94A3B8",
              lineHeight: 1.8, marginBottom: 44, maxWidth: 520,
            }}>
              Ayudamos a empresas a digitalizar operaciones, automatizar procesos y crecer con tecnología a medida — sin proyectos abandonados, sin promesas vacías, con resultados medibles desde el primer mes.
            </p>
          </div>

          {/* CTA Buttons */}
          <div style={{ ...anim(0.38), display: "flex", gap: 16, flexWrap: "wrap", marginBottom: 56 }}>
            <a href="#contacto" style={{
              fontFamily: "'Space Grotesk', sans-serif", fontWeight: 800, fontSize: 15,
              color: "#fff", padding: "18px 40px", borderRadius: 16, textDecoration: "none",
              background: "linear-gradient(135deg, #2563EB, #1D4ED8)",
              boxShadow: "0 10px 30px rgba(37,99,235,0.35)",
              transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
              display: "flex", alignItems: "center", gap: 10, whiteSpace: "nowrap",
            }}
              onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-4px)"; e.currentTarget.style.boxShadow = "0 20px 45px rgba(37,99,235,0.5)"; }}
              onMouseLeave={e => { e.currentTarget.style.transform = "none"; e.currentTarget.style.boxShadow = "0 10px 30px rgba(37,99,235,0.35)"; }}
            >
              Solicitar Diagnóstico →
            </a>
            <a href="#proyectos" style={{
              fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: 15,
              color: "#94A3B8", padding: "18px 36px", borderRadius: 16, textDecoration: "none",
              background: "rgba(255,255,255,0.03)",
              border: "1px solid rgba(255,255,255,0.1)", backdropFilter: "blur(10px)",
              transition: "all 0.3s ease", whiteSpace: "nowrap",
            }}
              onMouseEnter={e => { e.currentTarget.style.color = "#F8FAFC"; e.currentTarget.style.borderColor = "rgba(59,130,246,0.4)"; e.currentTarget.style.background = "rgba(59,130,246,0.08)"; }}
              onMouseLeave={e => { e.currentTarget.style.color = "#94A3B8"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)"; e.currentTarget.style.background = "rgba(255,255,255,0.03)"; }}
            >
              Ver Casos de Éxito
            </a>
          </div>

          {/* Stats inline */}
          <div style={{
            ...anim(0.5),
            display: "flex",
            flexWrap: "wrap",
            gap: "24px 32px",
            paddingTop: 32, borderTop: "1px solid rgba(255,255,255,0.06)",
            width: "fit-content"
          }}>
            {HERO_STATS.map(({ value, label }, i) => (
              <AnimatedStat key={label} value={value} label={label} delay={0.6 + i * 0.12} start={loaded} />
            ))}
          </div>
        </div>

        {/* ─── COLUMNA DERECHA: Visual ─── */}
        <div style={{
          ...anim(0.2),
          position: "relative",
        }}>

          {/* Panel de código */}
          <CodePanel visible={loaded} />

          {/* Panel de métricas */}
          <MetricsPanel visible={loaded} />

          {/* Decoración de conexión */}
          <div style={{
            position: "absolute", top: "50%", left: -32, transform: "translateY(-50%)",
            width: 64, height: 2,
            background: "linear-gradient(90deg, transparent, rgba(59,130,246,0.4), transparent)",
            pointerEvents: "none"
          }} />
        </div>
      </div>

      {/* ══ SCROLL INDICATOR ══ */}
      <div style={{
        position: "absolute", bottom: 32, left: "50%", transform: "translateX(-50%)",
        display: "flex", flexDirection: "column", alignItems: "center", gap: 8,
        opacity: loaded ? 0.6 : 0, transition: "opacity 1s ease 1.5s",
      }}>
        <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 11, color: "#64748B", letterSpacing: "0.15em", textTransform: "uppercase" }}>Scroll</span>
        <div style={{
          width: 24, height: 38, borderRadius: 12, border: "1.5px solid rgba(255,255,255,0.15)",
          display: "flex", justifyContent: "center", paddingTop: 6,
        }}>
          <div style={{
            width: 4, height: 8, borderRadius: 4, background: "#3B82F6",
            animation: "scrollDot 2s ease-in-out infinite"
          }} />
        </div>
      </div>

      {/* ══ ESTILOS GLOBALES ══ */}
      <style>{`
        @keyframes floatA { 0%,100%{transform:translate(0,0)} 50%{transform:translate(40px,-40px)} }
        @keyframes floatB { 0%,100%{transform:translate(0,0)} 50%{transform:translate(-30px,30px)} }
        @keyframes floatC { 0%,100%{transform:translate(0,0)} 50%{transform:translate(20px,-20px)} }
        @keyframes floatParticle { 0%,100%{transform:translateY(0px)} 50%{transform:translateY(-12px)} }
        @keyframes pulse { 0%,100%{opacity:1;box-shadow:0 0 10px currentColor} 50%{opacity:0.6;box-shadow:0 0 20px currentColor} }
        @keyframes pulseGlow { 0%,100%{opacity:0.6;transform:scale(1)} 50%{opacity:1;transform:scale(1.15)} }
        @keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }
        @keyframes scrollDot { 0%{transform:translateY(0);opacity:1} 100%{transform:translateY(14px);opacity:0} }

        @media (max-width: 900px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            gap: 32px !important;
          }
          .hero-grid > div:last-child {
            display: none !important;
          }
        }
      `}</style>
    </section>
  );
}
