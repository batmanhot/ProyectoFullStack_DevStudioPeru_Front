// ─────────────────────────────────────────────────────────────
//  src/components/Portfolio.jsx
// ─────────────────────────────────────────────────────────────
import { useState } from "react";
import { Link } from "react-router-dom";
import { useInView } from "../hooks/useInView";
import { PROJECTS } from "../data/content";

// ── Imágenes por proyecto (agrega aquí cuando tengas más) ─────
import posmarket1 from "../assets/proyectos/POS Market/Pos Market -1.webp";
import posmarket2 from "../assets/proyectos/POS Market/Pos-Market-2.webp";
import posmarket3 from "../assets/proyectos/POS Market/Pos-Market-3.webp";

import stockpro1 from "../assets/proyectos/Stock Pro/StockPro-1.webp";
import stockpro2 from "../assets/proyectos/Stock Pro/StockPro-2.webp";
import stockpro3 from "../assets/proyectos/Stock Pro/StockPro-3.webp";

import callsys1 from "../assets/proyectos/CallSys Pro/CallSysPro-1.webp";
import callsys2 from "../assets/proyectos/CallSys Pro/CallSysPro-2.webp";
import callsys3 from "../assets/proyectos/CallSys Pro/CallSysPro-3.webp";

import motogo1 from "../assets/proyectos/MotoGo/MOTO-1.webp";
import motogo2 from "../assets/proyectos/MotoGo/MOTO-2.webp";
import motogo3 from "../assets/proyectos/MotoGo/MOTO-3.webp";

import foodella1 from "../assets/proyectos/Food Delivery/Food Delivery-1.webp";
import foodella2 from "../assets/proyectos/Food Delivery/Food Delivery-2.webp";
import foodella3 from "../assets/proyectos/Food Delivery/Food Delivery-3.webp";

const PROJECT_IMAGES = {
  POSMarket:           [posmarket1, posmarket2, posmarket3],
  StockPro:            [stockpro1, stockpro2, stockpro3],
  "CallSys Pro":       [callsys1, callsys2, callsys3],
  "Moto GO":           [motogo1, motogo2, motogo3],
  "FastFood Doña Nella": [foodella1, foodella2, foodella3],
};

// ── Íconos de flecha ──────────────────────────────────────────
const ChevronLeft = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="15 18 9 12 15 6"/>
  </svg>
);
const ChevronRight = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="9 18 15 12 9 6"/>
  </svg>
);

// ── Header con carrusel de imágenes ───────────────────────────
function ImageCarousel({ images, accentColor, hovered }) {
  const [idx, setIdx] = useState(0);

  const prev = (e) => {
    e.stopPropagation();
    setIdx(i => (i - 1 + images.length) % images.length);
  };
  const next = (e) => {
    e.stopPropagation();
    setIdx(i => (i + 1) % images.length);
  };

  return (
    <div style={{ position: "relative", width: "100%", height: "100%" }}>
      {/* Imagen actual */}
      <img
        src={images[idx]}
        alt="screenshot"
        loading="lazy"
        decoding="async"
        style={{
          width: "100%", height: "100%",
          objectFit: "cover", objectPosition: "top",
          transition: "opacity 0.4s ease",
          display: "block"
        }}
      />

      {/* Overlay gradiente inferior para legibilidad de badges */}
      <div style={{
        position: "absolute", inset: 0,
        background: "linear-gradient(to bottom, transparent 40%, rgba(7,9,26,0.75) 100%)"
      }} />

      {/* Flechas — solo visibles con hover */}
      {hovered && images.length > 1 && (
        <>
          <button onClick={prev} style={{
            position: "absolute", left: 10, top: "50%", transform: "translateY(-50%)",
            background: "rgba(0,0,0,0.5)", border: "1px solid rgba(255,255,255,0.15)",
            borderRadius: "50%", width: 30, height: 30,
            display: "flex", alignItems: "center", justifyContent: "center",
            color: "#fff", cursor: "pointer", zIndex: 4,
            backdropFilter: "blur(6px)", transition: "background 0.2s"
          }}
            onMouseEnter={e => e.currentTarget.style.background = "rgba(0,0,0,0.75)"}
            onMouseLeave={e => e.currentTarget.style.background = "rgba(0,0,0,0.5)"}
          >
            <ChevronLeft />
          </button>
          <button onClick={next} style={{
            position: "absolute", right: 10, top: "50%", transform: "translateY(-50%)",
            background: "rgba(0,0,0,0.5)", border: "1px solid rgba(255,255,255,0.15)",
            borderRadius: "50%", width: 30, height: 30,
            display: "flex", alignItems: "center", justifyContent: "center",
            color: "#fff", cursor: "pointer", zIndex: 4,
            backdropFilter: "blur(6px)", transition: "background 0.2s"
          }}
            onMouseEnter={e => e.currentTarget.style.background = "rgba(0,0,0,0.75)"}
            onMouseLeave={e => e.currentTarget.style.background = "rgba(0,0,0,0.5)"}
          >
            <ChevronRight />
          </button>
        </>
      )}

      {/* Dots indicadores */}
      {images.length > 1 && (
        <div style={{
          position: "absolute", bottom: 12, left: "50%", transform: "translateX(-50%)",
          display: "flex", gap: 6, zIndex: 4
        }}>
          {images.map((_, i) => (
            <button key={i}
              onClick={e => { e.stopPropagation(); setIdx(i); }}
              style={{
                width: i === idx ? 18 : 6, height: 6,
                borderRadius: 3, border: "none", cursor: "pointer",
                background: i === idx ? accentColor : "rgba(255,255,255,0.3)",
                transition: "all 0.3s ease", padding: 0
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
}

// ── Header NDA (proyecto confidencial) ───────────────────────
function NdaHeader({ project, hovered }) {
  return (
    <>
      {/* Fondo con patrón sutil */}
      <div style={{
        position: "absolute", inset: 0,
        background: `linear-gradient(135deg, ${project.accentColor}08 0%, transparent 60%)`,
        backgroundImage: `repeating-linear-gradient(
          45deg,
          transparent,
          transparent 18px,
          rgba(255,255,255,0.015) 18px,
          rgba(255,255,255,0.015) 19px
        )`,
      }} />

      {/* Icono de candado + texto */}
      <div style={{
        position: "relative", zIndex: 1,
        display: "flex", flexDirection: "column", alignItems: "center", gap: 14,
        textAlign: "center", padding: "0 24px",
      }}>
        <div style={{
          width: 56, height: 56, borderRadius: 16,
          background: `${project.accentColor}15`,
          border: `1px solid ${project.accentColor}30`,
          display: "flex", alignItems: "center", justifyContent: "center",
          fontSize: 26,
          transform: hovered ? "scale(1.1)" : "scale(1)",
          transition: "transform 0.5s ease",
        }}>🔒</div>
        <div>
          <div style={{
            fontFamily: "'Space Grotesk', sans-serif", fontWeight: 800,
            fontSize: 13, color: project.accentColor, letterSpacing: "0.08em",
            textTransform: "uppercase", marginBottom: 4,
          }}>
            Proyecto bajo NDA
          </div>
          <div style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 12,
            color: "rgba(148,163,184,0.7)", lineHeight: 1.5,
          }}>
            Disponible bajo solicitud
          </div>
        </div>
      </div>
    </>
  );
}

// ── Header sin imágenes (diseño original) ─────────────────────
function DefaultHeader({ project, hovered }) {
  return (
    <>
      <span style={{
        fontFamily: "'Space Grotesk', sans-serif", fontWeight: 900, fontSize: 80,
        color: project.accentColor,
        opacity: hovered ? 0.12 : 0.06, position: "absolute", userSelect: "none",
        transform: hovered ? "scale(1.2) rotate(-5deg)" : "rotate(0)",
        transition: "all 0.8s ease"
      }}>{"{ }"}</span>
      <span style={{
        fontFamily: "'Space Grotesk', sans-serif", fontWeight: 800, fontSize: 64,
        color: project.accentColor,
        textShadow: `0 0 40px ${project.accentColor}66`,
        position: "relative", zIndex: 1,
        transform: hovered ? "scale(1.1)" : "none",
        transition: "transform 0.5s ease"
      }}>
        {project.title[0]}
      </span>
    </>
  );
}

// ── Tarjeta de proyecto ───────────────────────────────────────
function ProjectCard({ project, index, visible }) {
  const [hovered, setHovered] = useState(false);
  const images = PROJECT_IMAGES[project.title] || [];
  const hasImages = images.length > 0;
  const isNda = !!project.nda;
  const headerHeight = hasImages ? 220 : 180;

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: "relative",
        background: hovered ? "rgba(255,255,255,0.03)" : "rgba(15,15,26,0.5)",
        backdropFilter: "blur(14px)", WebkitBackdropFilter: "blur(14px)",
        borderRadius: 28, overflow: "hidden",
        border: `1px solid ${hovered ? project.accentColor + "55" : "rgba(255,255,255,0.08)"}`,
        opacity: visible ? 1 : 0,
        transform: visible
          ? (hovered ? "translateY(-12px) scale(1.02)" : "translateY(0) scale(1)")
          : "translateY(40px)",
        transition: "all 0.6s cubic-bezier(0.16,1,0.3,1)",
        transitionDelay: visible ? `${index * 0.12}s` : "0s",
        boxShadow: hovered ? `0 30px 60px -12px ${project.accentColor}22` : "none",
        cursor: "pointer"
      }}
    >
      {/* Glow decorativo */}
      <div style={{
        position: "absolute", top: "-10%", right: "-10%",
        width: "50%", height: "50%",
        background: `radial-gradient(circle, ${project.accentColor}15 0%, transparent 70%)`,
        opacity: hovered ? 1 : 0, transition: "opacity 0.6s ease", zIndex: 0
      }} />

      {/* ── Header ── */}
      <div style={{
        height: headerHeight, position: "relative", overflow: "hidden",
        background: hasImages ? "#07091A" : `linear-gradient(225deg, ${project.accentColor}18 0%, ${project.accentColor}05 100%)`,
        display: "flex", alignItems: "center", justifyContent: "center",
        borderBottom: "1px solid rgba(255,255,255,0.05)"
      }}>
        {hasImages
          ? <ImageCarousel images={images} accentColor={project.accentColor} hovered={hovered} />
          : isNda
            ? <NdaHeader project={project} hovered={hovered} />
            : <DefaultHeader project={project} hovered={hovered} />
        }

        {/* Badge categoría */}
        <span style={{
          position: "absolute", top: 14, right: 14,
          fontFamily: "'Space Grotesk', sans-serif", fontSize: 11, fontWeight: 700,
          color: "#FFF", background: "rgba(0,0,0,0.55)", backdropFilter: "blur(6px)",
          borderRadius: 100, padding: "5px 14px",
          border: "1px solid rgba(255,255,255,0.12)", zIndex: 3
        }}>
          {project.category}
        </span>

        {/* Badge métrica */}
        {project.metric && (
          <span style={{
            position: "absolute", bottom: hasImages ? 28 : 16, left: 16,
            fontFamily: "'Space Grotesk', sans-serif", fontSize: 13, fontWeight: 800,
            color: project.accentColor,
            background: hasImages ? "rgba(0,0,0,0.6)" : `${project.accentColor}18`,
            backdropFilter: "blur(6px)", borderRadius: 100,
            padding: "6px 16px",
            border: `1px solid ${project.accentColor}50`,
            zIndex: 3, letterSpacing: "-0.01em"
          }}>
            {project.metric}
          </span>
        )}
      </div>

      {/* ── Contenido ── */}
      <div style={{ padding: "28px 28px 32px", position: "relative", zIndex: 1 }}>
        <h3 style={{
          fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700,
          fontSize: 22, color: "#F8FAFC", marginBottom: 8, letterSpacing: "-0.01em",
          display: "flex", alignItems: "center", gap: 10, flexWrap: "wrap"
        }}>
          {project.title}
          {isNda && (
            <span style={{
              fontFamily: "'Space Grotesk', sans-serif", fontSize: 10, fontWeight: 700,
              color: project.accentColor, background: `${project.accentColor}15`,
              border: `1px solid ${project.accentColor}30`,
              borderRadius: 6, padding: "3px 8px", letterSpacing: "0.08em",
              textTransform: "uppercase", verticalAlign: "middle"
            }}>
              Confidencial
            </span>
          )}
        </h3>
        <p style={{
          fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 14,
          color: "#94A3B8", lineHeight: 1.6, marginBottom: 20
        }}>
          {project.subtitle}
        </p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
          {project.tags.map(tag => (
            <span key={tag} style={{
              fontFamily: "'Space Grotesk', sans-serif", fontSize: 11, fontWeight: 600,
              color: project.accentColor, background: `${project.accentColor}11`,
              borderRadius: 8, padding: "4px 10px",
              border: `1px solid ${project.accentColor}22`
            }}>
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

// ── Sección principal ─────────────────────────────────────────
export default function Portfolio() {
  const [ref, visible] = useInView();

  return (
    <section id="proyectos" ref={ref} style={{
      padding: "120px clamp(24px,5vw,80px)",
      background: "#07091A", position: "relative"
    }}>
      <div style={{
        position: "absolute", bottom: "5%", right: "-10%",
        width: "50vw", height: "50vw",
        background: "radial-gradient(circle, rgba(56,189,248,0.03) 0%, transparent 70%)",
        pointerEvents: "none"
      }} />

      <div style={{ maxWidth: 1300, margin: "0 auto", position: "relative", zIndex: 1 }}>
        {/* Encabezado */}
        <div style={{
          textAlign: "center", marginBottom: 80,
          opacity: visible ? 1 : 0,
          transform: visible ? "none" : "translateY(30px)",
          transition: "all 0.9s cubic-bezier(0.23,1,0.32,1)"
        }}>
          <div style={{
            display: "inline-flex", alignItems: "center", gap: 10,
            background: "rgba(59,130,246,0.08)", border: "1px solid rgba(59,130,246,0.2)",
            borderRadius: 100, padding: "8px 20px", marginBottom: 24
          }}>
            <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#3B82F6", boxShadow: "0 0 10px #3B82F6" }} />
            <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 13, color: "#93C5FD", letterSpacing: "0.15em", textTransform: "uppercase", fontWeight: 700 }}>
              Casos de Éxito
            </span>
          </div>
          <h2 style={{
            fontFamily: "'Space Grotesk', sans-serif", fontWeight: 800,
            fontSize: "clamp(32px,5vw,56px)", color: "#F8FAFC",
            lineHeight: 1, marginBottom: 20, letterSpacing: "-0.03em"
          }}>
            Empresas que transformaron{" "}
            <span style={{
              background: "linear-gradient(135deg, #60A5FA, #38BDF8)",
              WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text"
            }}>
              su operación
            </span>
          </h2>
          <p style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif", color: "#94A3B8",
            maxWidth: 560, margin: "0 auto", fontSize: 18, lineHeight: 1.6
          }}>
            Proyectos reales con resultados medibles. Cada caso es una transformación operativa que genera impacto desde el primer mes.
          </p>
        </div>

        {/* Grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 360px), 1fr))",
          gap: 32
        }}>
          {PROJECTS.map((p, i) => (
            <ProjectCard key={p.title} project={p} index={i} visible={visible} />
          ))}
        </div>

        {/* Ver todos */}
        <div style={{
          textAlign: "center", marginTop: 56,
          opacity: visible ? 1 : 0,
          transition: "opacity 0.8s ease 0.6s",
        }}>
          <Link
            to="/casos-de-exito"
            style={{
              display: "inline-flex", alignItems: "center", gap: 10,
              background: "rgba(59,130,246,0.08)",
              border: "1px solid rgba(59,130,246,0.25)",
              color: "#93C5FD",
              textDecoration: "none",
              padding: "16px 32px",
              borderRadius: 14,
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 700, fontSize: 15,
              transition: "all 0.3s ease",
            }}
            onMouseEnter={e => {
              e.currentTarget.style.background = "rgba(59,130,246,0.15)";
              e.currentTarget.style.borderColor = "rgba(59,130,246,0.5)";
              e.currentTarget.style.transform = "translateY(-2px)";
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = "rgba(59,130,246,0.08)";
              e.currentTarget.style.borderColor = "rgba(59,130,246,0.25)";
              e.currentTarget.style.transform = "none";
            }}
          >
            Ver todos los casos de éxito →
          </Link>
        </div>
      </div>
    </section>
  );
}
