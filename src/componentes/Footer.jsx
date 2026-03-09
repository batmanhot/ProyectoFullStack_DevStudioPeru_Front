// ─────────────────────────────────────────────────────────────
//  src/components/Footer.jsx  — v2
//  - Botones de redes sociales con icono SVG + color de marca
//  - Datos de contacto actualizados
// ─────────────────────────────────────────────────────────────
import { NAV_LINKS, SOCIAL_LINKS } from "../data/content";

// ── Iconos SVG (mismo set que ContactForm) ────────────────────
const ICONS = {
  LinkedIn: (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  ),
  Facebook: (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
    </svg>
  ),
  Instagram: (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
    </svg>
  ),
};

function Logo() {
  return (
    <a href="#hero" style={{ display:"flex", alignItems:"center", gap:10, textDecoration:"none" }}>
      <span style={{
        fontFamily:"'Rajdhani','Space Grotesk',sans-serif", fontWeight:700, fontSize:22, lineHeight:1,
        background:"linear-gradient(90deg,#1E40AF 0%,#2563EB 25%,#3B82F6 50%,#60A5FA 72%,#38BDF8 100%)",
        WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent", backgroundClip:"text",
        filter:"drop-shadow(0 1px 6px rgba(59,130,246,0.4))",
      }}>
        DevStudioPeru
      </span>
    </a>
  );
}

function SocialBtn({ label, href, color }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      title={label}
      style={{
        display:"inline-flex", alignItems:"center", gap:7,
        color: color,
        background: color + "14",
        border: `1px solid ${color}30`,
        padding:"7px 13px", borderRadius:9,
        fontFamily:"'Space Grotesk',sans-serif", fontSize:12, fontWeight:600,
        textDecoration:"none",
        transition:"background 0.2s ease, transform 0.2s ease, box-shadow 0.2s ease",
      }}
      onMouseEnter={e => {
        e.currentTarget.style.background  = color + "28";
        e.currentTarget.style.transform   = "translateY(-2px)";
        e.currentTarget.style.boxShadow   = `0 6px 18px ${color}28`;
      }}
      onMouseLeave={e => {
        e.currentTarget.style.background  = color + "14";
        e.currentTarget.style.transform   = "translateY(0)";
        e.currentTarget.style.boxShadow   = "none";
      }}
    >
      {ICONS[label]}
      {label}
    </a>
  );
}

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer style={{
      position:"relative", overflow:"hidden",
      borderTop:"1px solid rgba(59,130,246,0.15)",
      background:"rgba(10,14,35,0.98)",
      padding:"48px clamp(20px,5vw,80px) 32px",
    }}>
      {/* Malla circuito igual que el resto de la web */}
      {/* <div style={{
        position:"absolute", inset:0, zIndex:0, pointerEvents:"none",
        backgroundImage:`
          linear-gradient(rgba(59,130,246,0.05) 1px, transparent 1px),
          linear-gradient(90deg, rgba(59,130,246,0.05) 1px, transparent 1px)
        `,
        backgroundSize:"40px 40px",
      }}/>
      <div style={{
        position:"absolute", inset:0, zIndex:0, pointerEvents:"none",
        backgroundImage:`radial-gradient(circle, rgba(56,189,248,0.14) 1.5px, transparent 1.5px)`,
        backgroundSize:"120px 120px",
      }}/>
      <div style={{
        position:"absolute", inset:0, zIndex:0, pointerEvents:"none",
        background:"radial-gradient(ellipse 90% 60% at 50% 100%, transparent 30%, rgba(10,14,35,0.92) 100%)",
      }}/> */}

      <div style={{ position:"relative", zIndex:1, maxWidth:1200, margin:"0 auto" }}>

        {/* ── Fila superior ── */}
        <div style={{
          display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(180px,1fr))",
          gap:36, marginBottom:36, paddingBottom:36,
          borderBottom:"1px solid rgba(59,130,246,0.1)",
        }}>

          {/* Brand */}
          <div>
            <Logo />
            <p style={{ fontFamily:"'Plus Jakarta Sans',sans-serif", fontSize:13,
              color:"#64748B", lineHeight:1.7, marginTop:14, maxWidth:210 }}>
              Estudio de tecnología en Lima, Perú. Arquitectura de software,
              Web, Móvil, IA, Automatizaciones e Infraestructura Cloud.
            </p>
          </div>

          {/* Navegación */}
          <div>
            <h4 style={{ fontFamily:"'Space Grotesk',sans-serif", fontWeight:600,
              fontSize:13, color:"#E2E8F0", marginBottom:16 }}>Navegación</h4>
            <ul style={{ listStyle:"none", padding:0, margin:0, display:"flex", flexDirection:"column", gap:10 }}>
              {NAV_LINKS.map(({ label, href }) => (
                <li key={label}>
                  <a href={href} style={{
                    fontFamily:"'Plus Jakarta Sans',sans-serif", fontSize:13,
                    color:"#64748B", textDecoration:"none", transition:"color 0.2s",
                  }}
                    onMouseEnter={e=>e.target.style.color="#60A5FA"}
                    onMouseLeave={e=>e.target.style.color="#64748B"}>
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Servicios */}
          <div>
            <h4 style={{ fontFamily:"'Space Grotesk',sans-serif", fontWeight:600,
              fontSize:13, color:"#E2E8F0", marginBottom:16 }}>Servicios</h4>
            <ul style={{ listStyle:"none", padding:0, margin:0, display:"flex", flexDirection:"column", gap:10 }}>
              {["Arquitectura Software","Desarrollo Web","Apps Móviles","Inteligencia Artificial","Automatizaciones","Cloud & DevOps"].map(s => (
                <li key={s}>
                  <a href="#servicios" style={{
                    fontFamily:"'Plus Jakarta Sans',sans-serif", fontSize:13,
                    color:"#64748B", textDecoration:"none", transition:"color 0.2s",
                  }}
                    onMouseEnter={e=>e.target.style.color="#60A5FA"}
                    onMouseLeave={e=>e.target.style.color="#64748B"}>
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacto + redes */}
          <div>
            <h4 style={{ fontFamily:"'Space Grotesk',sans-serif", fontWeight:600,
              fontSize:13, color:"#E2E8F0", marginBottom:16 }}>Contacto</h4>
            <ul style={{ listStyle:"none", padding:0, margin:0, display:"flex", flexDirection:"column", gap:10 }}>
              <li style={{ fontFamily:"'Plus Jakarta Sans',sans-serif", fontSize:13, color:"#64748B" }}>
                📍 Lima, Perú
              </li>
              <li style={{ fontFamily:"'Plus Jakarta Sans',sans-serif", fontSize:13, color:"#64748B" }}>
                📧 contacto@studiodevperu.com
              </li>
              <li style={{ fontFamily:"'Plus Jakarta Sans',sans-serif", fontSize:13, color:"#64748B" }}>
                📱 +51 951 655 295
              </li>
            </ul>

            {/* Redes sociales con icono + color */}
            <div style={{ display:"flex", gap:8, marginTop:18, flexWrap:"wrap" }}>
              {SOCIAL_LINKS.map(({ label, href, color }) => (
                <SocialBtn key={label} label={label} href={href} color={color} />
              ))}
            </div>
          </div>
        </div>

        {/* ── Fila inferior ── */}
        <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between",
          flexWrap:"wrap", gap:16 }}>
          <p style={{ fontFamily:"'Plus Jakarta Sans',sans-serif", fontSize:12, color:"#475569" }}>
            © {year} DevStudioPeru. Todos los derechos reservados © . Lima, Perú 🇵🇪
          </p>
          <div style={{ display:"flex", gap:20 }}>
            {["Privacidad","Términos","Sitemap"].map(l => (
              <a key={l} href="#" style={{
                fontFamily:"'Space Grotesk',sans-serif", fontSize:12, color:"#475569",
                textDecoration:"none", transition:"color 0.2s",
              }}
                onMouseEnter={e=>e.target.style.color="#60A5FA"}
                onMouseLeave={e=>e.target.style.color="#475569"}>
                {l}
              </a>
            ))}
          </div>
        </div>

      </div>
    </footer>
  );
}
