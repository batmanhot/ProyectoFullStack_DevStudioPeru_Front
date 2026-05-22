// ─────────────────────────────────────────────────────────────
//  src/components/Footer.jsx  — Premium v3
// ─────────────────────────────────────────────────────────────
import { Link } from "react-router-dom";
import { NAV_LINKS, SOCIAL_LINKS } from "../data/content";
import logo from "../assets/icono-logo devstudio peru.png";

// ── Iconos SVG ────────────────────────────────────────────────
const ICONS = {
  LinkedIn: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  ),
  Facebook: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
    </svg>
  ),
  Instagram: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
    </svg>
  ),
  WhatsApp: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  ),
};

// ── Datos de columnas ─────────────────────────────────────────
const COL_SERVICIOS = [
  { label: "Arquitectura de Software", href: "#servicios" },
  { label: "Desarrollo Web",           href: "#servicios" },
  { label: "Apps Móviles",             href: "#servicios" },
  { label: "Inteligencia Artificial",  href: "#servicios" },
  { label: "DevOps & Cloud",           href: "#servicios" },
];

const COL_EMPRESA = [
  { label: "Nosotros",        href: "/nosotros",        external: false },
  { label: "Cómo trabajamos", href: "/como-trabajamos", external: false },
  // { label: "Casos de éxito",  href: "/casos-de-exito",  external: false },
  // { label: "Testimonios",     href: "/#testimonios",    external: false },
  { label: "Bolsa de Trabajo", href: "/carreras",        external: false },
];

const CONTACT_ITEMS = [
  { icon: "📍", value: "Lima, Perú" },
  { icon: "📧", value: "contacto@studiodevperu.com" },
  { icon: "📱", value: "+51 951 655 295" },
  { icon: "⏰", value: "Lun–Vie: 9am – 7pm (PET)" },
];

// ── Componentes auxiliares ────────────────────────────────────
function ColTitle({ children }) {
  return (
    <h4 style={{
      fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700,
      fontSize: 11, color: "#475569", marginBottom: 20,
      textTransform: "uppercase", letterSpacing: "0.14em",
      paddingBottom: 12, borderBottom: "1px solid rgba(255,255,255,0.05)"
    }}>
      {children}
    </h4>
  );
}

const linkStyle = {
  fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 14,
  color: "#94A3B8", textDecoration: "none", transition: "all 0.2s ease",
  display: "flex", alignItems: "center", gap: 6,
};
const linkEnter = e => { e.currentTarget.style.color = "#60A5FA"; e.currentTarget.style.paddingLeft = "6px"; };
const linkLeave = e => { e.currentTarget.style.color = "#94A3B8"; e.currentTarget.style.paddingLeft = "0px"; };

function FooterLink({ href, children }) {
  const isRouter = href.startsWith("/");
  return (
    <li>
      {isRouter ? (
        <Link to={href} style={linkStyle} onMouseEnter={linkEnter} onMouseLeave={linkLeave}>
          <span style={{ color: "#1E3A5F", fontSize: 10 }}>▶</span>{children}
        </Link>
      ) : (
        <a href={href} style={linkStyle} onMouseEnter={linkEnter} onMouseLeave={linkLeave}>
          <span style={{ color: "#1E3A5F", fontSize: 10 }}>▶</span>{children}
        </a>
      )}
    </li>
  );
}

function SocialBtn({ label, href, color }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" title={label}
      style={{
        width: 40, height: 40, borderRadius: 10,
        display: "flex", alignItems: "center", justifyContent: "center",
        color: "#64748B", background: "rgba(255,255,255,0.03)",
        border: "1px solid rgba(255,255,255,0.07)", transition: "all 0.25s ease",
        textDecoration: "none",
      }}
      onMouseEnter={e => {
        e.currentTarget.style.color = "#fff";
        e.currentTarget.style.background = color;
        e.currentTarget.style.borderColor = "transparent";
        e.currentTarget.style.transform = "translateY(-4px)";
        e.currentTarget.style.boxShadow = `0 8px 20px ${color}55`;
      }}
      onMouseLeave={e => {
        e.currentTarget.style.color = "#64748B";
        e.currentTarget.style.background = "rgba(255,255,255,0.03)";
        e.currentTarget.style.borderColor = "rgba(255,255,255,0.07)";
        e.currentTarget.style.transform = "none";
        e.currentTarget.style.boxShadow = "none";
      }}
    >
      {ICONS[label]}
    </a>
  );
}

// ── Footer principal ──────────────────────────────────────────
export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer style={{
      background: "#05060F",
      borderTop: "1px solid rgba(255,255,255,0.04)",
      position: "relative", overflow: "hidden",
    }}>
      {/* Glow decorativo superior */}
      <div style={{
        position: "absolute", top: 0, left: "50%", transform: "translateX(-50%)",
        width: "60%", height: 1,
        background: "linear-gradient(90deg, transparent, rgba(59,130,246,0.5), rgba(56,189,248,0.4), transparent)",
      }} />
      <div style={{
        position: "absolute", top: 0, left: "50%", transform: "translateX(-50%)",
        width: "30%", height: 80,
        background: "radial-gradient(ellipse at top, rgba(59,130,246,0.06) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />

      {/* ── CUERPO PRINCIPAL ── */}
      <div style={{ maxWidth: 1300, margin: "0 auto", padding: "72px clamp(24px, 5vw, 80px) 0" }}>

        {/* Grid 4 columnas */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "2fr 1.2fr 1.2fr 1.4fr",
          gap: "clamp(32px, 4vw, 64px)",
          marginBottom: 64,
          alignItems: "start",
        }}>

          {/* ── Col 1: Brand ── */}
          <div>
            {/* Logo + nombre */}
            <a href="#hero" style={{ display: "inline-flex", alignItems: "center", gap: 12, textDecoration: "none", marginBottom: 20 }}>
              <img src={logo} alt="DevStudio Peru" style={{ width: 44, height: 44, borderRadius: 12, objectFit: "contain" }} />
              <span style={{
                fontFamily: "'Space Grotesk', sans-serif", fontWeight: 800, fontSize: 20,
                background: "linear-gradient(135deg, #60A5FA, #38BDF8)",
                WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
              }}>
                DevStudio<span style={{ opacity: 0.7 }}>Peru</span>
              </span>
            </a>

            <p style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 14, color: "#64748B",
              lineHeight: 1.75, marginBottom: 28, maxWidth: 290,
            }}>
              Transformamos ideas en software de alto rendimiento. Arquitecturas escalables, productos digitales de clase mundial.
            </p>

            {/* Redes sociales */}
            <div style={{ display: "flex", gap: 10, marginBottom: 32 }}>
              {SOCIAL_LINKS.map(({ label, href, color }) => (
                <SocialBtn key={label} label={label} href={href} color={color} />
              ))}
            </div>

            {/* Badge disponibilidad */}
            <div style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              background: "rgba(16,185,129,0.06)", border: "1px solid rgba(16,185,129,0.15)",
              borderRadius: 100, padding: "7px 16px",
            }}>
              <div style={{ width: 7, height: 7, borderRadius: "50%", background: "#10B981", boxShadow: "0 0 8px #10B981" }} />
              <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 12, color: "#34D399", fontWeight: 600 }}>
                Disponibles para proyectos
              </span>
            </div>
          </div>

          {/* ── Col 2: Servicios ── */}
          <div>
            <ColTitle>Servicios</ColTitle>
            <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: 12 }}>
              {COL_SERVICIOS.map(({ label, href }) => (
                <FooterLink key={label} href={href}>{label}</FooterLink>
              ))}
            </ul>
          </div>

          {/* ── Col 3: Empresa ── */}
          <div>
            <ColTitle>Empresa</ColTitle>
            <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: 12 }}>
              {COL_EMPRESA.map(({ label, href }) => (
                <FooterLink key={label} href={href}>{label}</FooterLink>
              ))}
            </ul>
          </div>

          {/* ── Col 4: Contacto ── */}
          <div>
            <ColTitle>Contacto</ColTitle>
            <div style={{ display: "flex", flexDirection: "column", gap: 14, marginBottom: 28 }}>
              {CONTACT_ITEMS.map(({ icon, value }) => (
                <div key={value} style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                  <span style={{ fontSize: 15, flexShrink: 0, marginTop: 1 }}>{icon}</span>
                  <span style={{
                    fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 13,
                    color: "#64748B", lineHeight: 1.5,
                  }}>{value}</span>
                </div>
              ))}
            </div>

            {/* CTA WhatsApp */}
            <a
              href="https://wa.me/51951655295?text=Hola%20DevStudioPeru!%20Me%20interesa%20conocer%20m%C3%A1s."
              target="_blank" rel="noopener noreferrer"
              style={{
                display: "inline-flex", alignItems: "center", gap: 8,
                background: "rgba(37,211,102,0.08)", border: "1px solid rgba(37,211,102,0.2)",
                borderRadius: 12, padding: "10px 18px", textDecoration: "none",
                fontFamily: "'Space Grotesk', sans-serif", fontSize: 13, fontWeight: 700,
                color: "#22C55E", transition: "all 0.25s ease",
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background = "rgba(37,211,102,0.15)";
                e.currentTarget.style.transform = "translateY(-2px)";
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = "rgba(37,211,102,0.08)";
                e.currentTarget.style.transform = "none";
              }}
            >
              {ICONS.WhatsApp} Escríbenos ahora
            </a>
          </div>
        </div>

        {/* ── SEPARADOR GRADIENTE ── */}
        <div style={{
          height: 1,
          background: "linear-gradient(90deg, transparent, rgba(59,130,246,0.15), rgba(56,189,248,0.1), transparent)",
          marginBottom: 28,
        }} />

        {/* ── BARRA INFERIOR ── */}
        <div style={{
          display: "flex", justifyContent: "space-between", alignItems: "center",
          flexWrap: "wrap", gap: 16, paddingBottom: 32,
        }}>
          <p style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 12, color: "#334155",
            margin: 0,
          }}>
            © {year} DevStudioPeru. Todos los derechos reservados.
            {" "}<span style={{ color: "#1E40AF" }}>Hecho con ❤️ en Lima, Perú 🇵🇪</span>
          </p>

          <div style={{ display: "flex", gap: 28, alignItems: "center" }}>
            {["Privacidad", "Términos", "Cookies"].map(item => (
              <a key={item} href="#" style={{
                fontFamily: "'Space Grotesk', sans-serif", fontSize: 12, color: "#334155",
                textDecoration: "none", transition: "color 0.2s",
              }}
                onMouseEnter={e => e.target.style.color = "#60A5FA"}
                onMouseLeave={e => e.target.style.color = "#334155"}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
