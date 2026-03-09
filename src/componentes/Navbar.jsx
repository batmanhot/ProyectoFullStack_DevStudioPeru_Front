// ─────────────────────────────────────────────────────────────
//  src/components/Navbar.jsx  — v4
//  - Hamburguesa solo en móvil (CSS puro)
//  - Links móvil con hover iluminado igual que desktop
//  - Sin botón Contáctanos
//  - Logo con fondo transparente (mix-blend-mode + sin bg)
// ─────────────────────────────────────────────────────────────
import { useState } from "react";
import { NAV_LINKS } from "../data/content";

function Logo() {
  return (
    <a href="#hero" style={{ display:"flex", alignItems:"center", textDecoration:"none" }}>
      {/*
        Tipografía replicando el logotipo oficial:
        - Fuente: Rajdhani Bold (condensada, tecnológica, similar al logo)
        - Gradiente: azul marino → azul medio → cian, de izquierda a derecha
        - Sombra de texto para profundidad igual al logo 3D
      */}
      <span style={{
        fontFamily: "'Rajdhani', 'Space Grotesk', sans-serif",
        fontWeight: 700,
        fontSize: 26,
        letterSpacing: "0.02em",
        lineHeight: 1,
        background: "linear-gradient(90deg, #1E40AF 0%, #2563EB 25%, #3B82F6 50%, #60A5FA 72%, #38BDF8 100%)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        backgroundClip: "text",
        filter: "drop-shadow(0 1px 8px rgba(59,130,246,0.45))",
      }}>
        DevStudioPeru
      </span>
    </a>
  );
}

export default function Navbar({ scrollY }) {
  const [open, setOpen] = useState(false);
  const solid = scrollY > 40;

  return (
    <>
      <style>{`
        /* ── Desktop: links visibles, hamburguesa oculto ── */
        .dsp-desktop-links { display: flex; align-items: center; gap: 28px; }
        .dsp-hamburger     { display: none; }
        .dsp-mobile-menu   { display: none; flex-direction: column; }

        /* ── Móvil ── */
        @media (max-width: 767px) {
          .dsp-desktop-links            { display: none !important; }
          .dsp-hamburger                { display: flex !important; }
          .dsp-mobile-menu.is-open      { display: flex !important; }
        }

        /* Hover igual que desktop */
        .dsp-mobile-link {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 15px;
          font-weight: 500;
          color: #94A3B8;
          text-decoration: none;
          padding: 10px 12px;
          border-radius: 8px;
          transition: color 0.2s ease, background 0.2s ease;
        }
        .dsp-mobile-link:hover {
          color: #60A5FA !important;
          background: rgba(59,130,246,0.08);
        }

        /* Hover desktop links */
        .dsp-desktop-link {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 14px;
          font-weight: 500;
          color: #94A3B8;
          text-decoration: none;
          transition: color 0.2s ease;
        }
        .dsp-desktop-link:hover { color: #60A5FA; }
      `}</style>

      <nav style={{
        position:"fixed", top:0, left:0, right:0, zIndex:100,
        background: solid ? "rgba(10,14,35,0.94)" : "transparent",
        backdropFilter: solid ? "blur(18px)" : "none",
        borderBottom: solid ? "1px solid rgba(59,130,246,0.15)" : "none",
        transition:"all 0.3s ease",
        padding:"0 clamp(20px,5vw,80px)",
      }}>
        <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between", height:68 }}>
          <Logo />

          {/* ── Desktop links ── */}
          <div className="dsp-desktop-links">
            {NAV_LINKS.map(({ label, href }) => (
              <a key={label} href={href} className="dsp-desktop-link">{label}</a>
            ))}
          </div>

          {/* ── Hamburger (solo móvil) ── */}
          <button
            className="dsp-hamburger"
            onClick={() => setOpen(!open)}
            style={{ background:"none", border:"none", cursor:"pointer",
              flexDirection:"column", gap:5, padding:8, alignItems:"center" }}
            aria-label="Menú"
          >
            {[0,1,2].map(i => (
              <span key={i} style={{
                display:"block", width:24, height:2,
                background:"#E2E8F0", borderRadius:2,
                opacity:   open && i === 1 ? 0 : 1,
                transform: open && i === 0 ? "rotate(45deg) translate(4px,4px)"
                         : open && i === 2 ? "rotate(-45deg) translate(4px,-4px)"
                         : "none",
                transition:"all 0.25s ease",
              }}/>
            ))}
          </button>
        </div>

        {/* ── Mobile menu ── */}
        <div
          className={`dsp-mobile-menu${open ? " is-open" : ""}`}
          style={{ gap:4, paddingBottom:20, paddingTop:8,
            borderTop:"1px solid rgba(59,130,246,0.15)" }}
        >
          {NAV_LINKS.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              className="dsp-mobile-link"
              onClick={() => setOpen(false)}
            >
              {label}
            </a>
          ))}
        </div>
      </nav>
    </>
  );
}
