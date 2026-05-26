// ─────────────────────────────────────────────────────────────
//  src/components/Navbar.jsx  — v5
//  MEJORAS:
//  - Glassmorphism siempre activo (backdrop-filter: blur)
//  - Borde inferior azul/teal sutil permanente
//  - Logo con imagen real (ICONO-LOGO_DEVSTUDIO_PERU.png)
//  - Badge de disponibilidad pulsante
//  - CTA dual: "Ver Proyectos →" + "Contacto" destacado
//  - Subrayado teal deslizante en hover (desktop)
//  - Hamburguesa solo en móvil (CSS puro)
// ─────────────────────────────────────────────────────────────
import { useState } from "react";
import { NAV_LINKS } from "../data/content";

// ── Usamos el mismo logo que en el Hero para consistencia
import logoImg from "../assets/icono-logo devstudio peru.png";

// Si prefieres ruta pública usa: const logoImg = "/ICONO-LOGO_DEVSTUDIO_PERU.png";

function Logo() {
  return (
    <a
      href="/"
      style={{ display: "flex", alignItems: "center", gap: 14, textDecoration: "none", marginTop: 5 }}
    >
      {/* ── Isotipo: aumentado de 40 a 54 ── */}
      <img
        src={logoImg}
        alt="DevStudio Peru"
        style={{
          marginTop: 9,
          height: 84,
          width: 84,
          objectFit: "contain",
          filter: "drop-shadow(0 0 8px rgba(45,180,220,0.35))",
          transition: "transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275), filter 0.3s ease",
        }}
        onMouseEnter={e => {
          e.currentTarget.style.filter = "drop-shadow(0 0 16px rgba(45,180,220,0.65))";
          e.currentTarget.style.transform = "scale(1.1)";
        }}
        onMouseLeave={e => {
          e.currentTarget.style.filter = "drop-shadow(0 0 8px rgba(45,180,220,0.35))";
          e.currentTarget.style.transform = "scale(1)";
        }}
      />

      {/* ── Separador vertical aumentado ── */}
      <span style={{
        display: "block",
        width: 1.5,
        height: 66,
        background: "linear-gradient(to bottom, transparent, rgba(45,180,220,0.4), transparent)",
        flexShrink: 0,
      }} />

      {/* ── Wordmark aumentado ── */}
      <span style={{ display: "flex", flexDirection: "column", lineHeight: 1.1 }}>
        <span style={{
          fontFamily: "'Rajdhani', 'Space Grotesk', sans-serif",
          fontWeight: 800,
          fontSize: 24,
          letterSpacing: "0.08em",
          textTransform: "uppercase",
          background: "linear-gradient(90deg, #FFFFFF 0%, #60A5FA 50%, #2db4dc 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
          filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.3))",
        }}>
          DevStudio PERU
        </span>
        {/* <span style={{
          fontFamily: "'Rajdhani', 'Space Grotesk', sans-serif",
          fontWeight: 600,
          fontSize: 12,
          letterSpacing: "0.45em",
          textTransform: "uppercase",
          color: "rgba(150,190,230,0.7)",
          marginTop: -2,
        }}>
          Peru
        </span> */}
      </span>
    </a>
  );
}

// ── Badge "Disponibles" con punto pulsante aumentado ──
function AvailBadge() {
  return (
    <span style={{
      display: "flex",
      alignItems: "center",
      gap: 7,
      fontSize: 11,
      fontFamily: "'Space Grotesk', sans-serif",
      fontWeight: 600,
      letterSpacing: "0.08em",
      textTransform: "uppercase",
      color: "#4ade80",
      background: "rgba(74,222,128,0.06)",
      padding: "4px 10px",
      borderRadius: "100px",
      border: "1px solid rgba(74,222,128,0.15)",
    }}>
      <span className="dsp-avail-dot" />
      Disponibles
    </span>
  );
}

export default function Navbar({ scrollY }) {
  const [open, setOpen] = useState(false);

  // Al hacer scroll: intensifica el glass; en top: glass sutil
  const scrolled = scrollY > 40;

  return (
    <>
      <style>{`
        @keyframes dsp-pulse {
          0%   { box-shadow: 0 0 0 0 rgba(74,222,128,0.5); transform: scale(1); }
          70%  { box-shadow: 0 0 0 8px rgba(74,222,128,0); transform: scale(1.1); }
          100% { box-shadow: 0 0 0 0 rgba(74,222,128,0); transform: scale(1); }
        }

        .dsp-avail-dot {
          display: inline-block;
          width: 8px; height: 8px;
          border-radius: 50%;
          background: #4ade80;
          animation: dsp-pulse 2s infinite;
          flex-shrink: 0;
          box-shadow: 0 0 10px rgba(74,222,128,0.6);
        }

        /* ── Desktop links ── */
        .dsp-desktop-links { display: flex; align-items: center; gap: 8px; }
        .dsp-hamburger     { display: none; }
        .dsp-mobile-menu   { display: none; flex-direction: column; }

        @media (max-width: 1024px) {
          .dsp-desktop-links       { display: none !important; }
          .dsp-nav-actions > .dsp-btn-ghost { display: none !important; }
        }

        @media (max-width: 767px) {
          .dsp-nav-actions         { display: none !important; }
          .dsp-hamburger           { display: flex !important; }
          .dsp-mobile-menu.is-open { display: flex !important; }
        }

        /* ── Desktop link con subrayado deslizante aumentado ── */
        .dsp-desktop-link {
          position: relative;
          font-family: 'Space Grotesk', sans-serif;
          font-size: 14px;
          font-weight: 600;
          color: rgba(226, 232, 240, 0.75);
          text-decoration: none;
          padding: 8px 16px;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          transition: all 0.3s ease;
          white-space: nowrap;
        }
        .dsp-desktop-link::after {
          content: '';
          position: absolute;
          bottom: 2px;
          left: 50%; right: 50%;
          height: 2px;
          background: linear-gradient(90deg, #60A5FA, #2db4dc);
          border-radius: 4px;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          opacity: 0;
          box-shadow: 0 2px 10px rgba(45,180,220,0.5);
        }
        .dsp-desktop-link:hover { 
          color: #ffffff;
          transform: translateY(-1px);
        }
        .dsp-desktop-link:hover::after { 
          left: 16px; right: 16px; 
          opacity: 1;
        }

        /* ── CTA Botones aumentados ── */
        .dsp-btn-ghost {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 13px;
          font-weight: 600;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          text-decoration: none;
          color: rgba(226, 232, 240, 0.85);
          padding: 10px 20px;
          border: 1px solid rgba(255,255,255,0.15);
          border-radius: 12px;
          background: rgba(255,255,255,0.03);
          cursor: pointer;
          transition: all 0.3s ease;
          white-space: nowrap;
        }
        .dsp-btn-ghost:hover {
          color: #ffffff;
          border-color: rgba(45,180,220,0.5);
          background: rgba(45,180,220,0.1);
          transform: translateY(-2px);
          box-shadow: 0 10px 20px rgba(0,0,0,0.2);
        }

        .dsp-btn-cta {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          text-decoration: none;
          color: #ffffff;
          padding: 11px 26px;
          border: none;
          border-radius: 12px;
          background: linear-gradient(135deg, #2563EB, #0ea5e9);
          cursor: pointer;
          transition: all 0.3s ease;
          white-space: nowrap;
          box-shadow: 0 4px 15px rgba(37, 99, 235, 0.3);
          position: relative;
          overflow: hidden;
        }
        .dsp-btn-cta:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(37, 99, 235, 0.5);
          filter: brightness(1.1);
        }
        .dsp-btn-cta::before {
          content: '';
          position: absolute;
          top: 0; left: -100%;
          width: 100%; height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
          transition: left 0.5s ease;
        }
        .dsp-btn-cta:hover::before {
          left: 100%;
        }

        /* ── Mobile link ── */
        .dsp-mobile-link {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 18px;
          font-weight: 600;
          color: rgba(226, 232, 240, 0.8);
          text-decoration: none;
          padding: 16px 20px;
          border-radius: 12px;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          transition: all 0.2s ease;
        }
        .dsp-mobile-link:hover {
          color: #ffffff;
          background: rgba(45,180,220,0.15);
          padding-left: 28px;
        }
        .dsp-mobile-menu {
          background: rgba(8,10,28,0.98);
          backdrop-filter: blur(25px);
          -webkit-backdrop-filter: blur(25px);
        }
      `}</style>

      <nav style={{
        position: "fixed",
        top: 0, left: 0, right: 0,
        zIndex: 1000,

        // ── GLASSMORPHISM MEJORADO ──
        background: scrolled
          ? "rgba(8,10,28,0.92)"
          : "rgba(8,10,28,0.7)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",

        // ── BORDE INFERIOR PREMIUM ──
        borderBottom: scrolled
          ? "1px solid rgba(45,180,220,0.3)"
          : "1px solid rgba(255,255,255,0.05)",

        transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
        padding: "0 clamp(20px, 5vw, 84px)",
      }}>
        <div style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: scrolled ? 80 : 96, // Aumentado de 68
          transition: "height 0.4s ease",
        }}>

          {/* ── Logo ── */}
          <Logo />

          {/* ── Desktop nav links ── */}
          <div className="dsp-desktop-links">
            {NAV_LINKS.slice(0, -1).map(({ label, href }) => (
              <a key={label} href={href} className="dsp-desktop-link">
                {label}
              </a>
            ))}
          </div>

          {/* ── Desktop actions ── */}
          <div className="dsp-nav-actions" style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
          }}>
            <AvailBadge />
            <a href="#proyectos" className="dsp-btn-ghost">
              Ver casos →
            </a>
            <a href="#contacto" className="dsp-btn-cta">
              Contacto
            </a>
          </div>

          {/* ── Hamburger (solo móvil) ── */}
          <button
            className="dsp-hamburger"
            onClick={() => setOpen(!open)}
            aria-label="Menú"
            style={{
              background: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(255,255,255,0.1)",
              borderRadius: "12px",
              cursor: "pointer",
              flexDirection: "column",
              gap: 6,
              padding: "12px",
              alignItems: "center",
              transition: "all 0.2s ease",
            }}
          >
            {[0, 1, 2].map(i => (
              <span key={i} style={{
                display: "block",
                width: 26,
                height: 2.5,
                background: "#ffffff",
                borderRadius: 4,
                opacity: open && i === 1 ? 0 : 1,
                transform: open && i === 0 ? "rotate(45deg) translate(6px,6px)"
                  : open && i === 2 ? "rotate(-45deg) translate(6px,-6px)"
                    : "none",
                transition: "all 0.25s ease",
              }} />
            ))}
          </button>
        </div>

        {/* ── Mobile menu ── */}
        <div
          className={`dsp-mobile-menu${open ? " is-open" : ""}`}
          style={{
            gap: 8,
            padding: "20px",
            borderTop: "1px solid rgba(45,180,220,0.2)",
            maxHeight: open ? "80vh" : "0",
            overflow: "hidden",
            transition: "all 0.4s ease",
            borderRadius: "0 0 24px 24px",
          }}
        >
          {NAV_LINKS.map(({ label, href }, idx) => (
            <a
              key={label}
              href={href}
              className="dsp-mobile-link"
              onClick={() => setOpen(false)}
              style={idx === NAV_LINKS.length - 1 ? {
                textAlign: "center",
                background: "linear-gradient(135deg, #2563EB, #0ea5e9)",
                color: "#ffffff",
                marginTop: 12,
                boxShadow: "0 10px 20px rgba(37, 99, 235, 0.3)",
              } : {}}
            >
              {label}
            </a>
          ))}
        </div>
      </nav>
    </>
  );
}
