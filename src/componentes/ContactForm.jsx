// ─────────────────────────────────────────────────────────────
//  src/componentes/ContactForm.jsx  — Sección de Contacto Vendedora
// ─────────────────────────────────────────────────────────────
import { useState } from "react";
import { useInView } from "../hooks/useInView";

const WHATSAPP_NUMBER  = "51951655295";
const WHATSAPP_MESSAGE = "Hola DevStudio! Quiero iniciar un proyecto y necesito una cotización.";

const PROJECT_TYPES = [
  { id: "web",    label: "Desarrollo Web",    emoji: "🌐" },
  { id: "mobile", label: "App Móvil",         emoji: "📱" },
  { id: "ia",     label: "IA / Automatización", emoji: "🤖" },
  { id: "cloud",  label: "Cloud / DevOps",    emoji: "☁️" },
];

const TRUST_SIGNALS = [
  { icon: "⚡", text: "Respondemos en menos de 24h" },
  { icon: "🎯", text: "Primera consultoría gratis" },
  { icon: "🔒", text: "Tu información es 100% confidencial" },
];

const STATS = [
  { value: "30+", label: "Proyectos entregados" },
  { value: "98%", label: "Clientes satisfechos" },
  { value: "5+",  label: "Años de experiencia" },
];

// ── Íconos SVG ────────────────────────────────────────────────
const IconUser = () => (
  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>
  </svg>
);
const IconMail = () => (
  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
  </svg>
);
const IconMsg = () => (
  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/>
  </svg>
);
const IconWA = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);
const IconPin = () => (
  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
  </svg>
);
const IconPhone = () => (
  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13 19.79 19.79 0 0 1 1.65 4.45 2 2 0 0 1 3.62 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
  </svg>
);

// ── Campo de formulario ───────────────────────────────────────
function Field({ label, name, type = "text", placeholder, value, onChange, error, isTextArea }) {
  const [focused, setFocused] = useState(false);
  const Tag = isTextArea ? "textarea" : "input";
  const icons = { nombre: <IconUser />, email: <IconMail />, mensaje: <IconMsg /> };

  return (
    <div style={{ marginBottom: 22 }}>
      <label style={{
        display: "block", fontFamily: "'Space Grotesk', sans-serif",
        fontSize: 11, fontWeight: 800, letterSpacing: "0.12em", textTransform: "uppercase",
        color: focused ? "#60A5FA" : "#475569", marginBottom: 8, transition: "color 0.3s"
      }}>
        {label}
      </label>
      <div style={{ position: "relative" }}>
        <span style={{
          position: "absolute", left: 16,
          top: isTextArea ? 16 : "50%", transform: isTextArea ? "none" : "translateY(-50%)",
          color: focused ? "#60A5FA" : "#475569", transition: "color 0.3s", pointerEvents: "none"
        }}>
          {icons[name] || <IconMsg />}
        </span>
        <Tag
          name={name} type={type} placeholder={placeholder}
          value={value} onChange={onChange} rows={isTextArea ? 5 : undefined}
          onFocus={() => setFocused(true)} onBlur={() => setFocused(false)}
          style={{
            width: "100%", boxSizing: "border-box",
            background: focused ? "rgba(59,130,246,0.04)" : "rgba(255,255,255,0.02)",
            border: `1px solid ${focused ? "rgba(59,130,246,0.6)" : "rgba(255,255,255,0.08)"}`,
            borderRadius: 14, padding: isTextArea ? "14px 16px 14px 46px" : "14px 16px 14px 46px",
            color: "#F8FAFC", fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 15,
            outline: "none", transition: "all 0.3s",
            boxShadow: focused ? "0 0 0 3px rgba(59,130,246,0.12)" : "none",
            resize: isTextArea ? "vertical" : "none"
          }}
        />
      </div>
      {error && (
        <p style={{ color: "#F87171", fontSize: 12, marginTop: 6, fontWeight: 600, display: "flex", alignItems: "center", gap: 5 }}>
          <span>⚠️</span> {error}
        </p>
      )}
    </div>
  );
}

// ── Formulario principal ──────────────────────────────────────
function Form() {
  const [projectType, setProjectType] = useState(null);
  const [fields, setFields]           = useState({ nombre: "", email: "", mensaje: "" });
  const [errors, setErrors]           = useState({});
  const [sent, setSent]               = useState(false);
  const [submitting, setSubmitting]   = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = {};
    if (!fields.nombre.trim())  errs.nombre  = "¿Cómo te llamamos?";
    if (!fields.email.trim())   errs.email   = "Necesitamos tu email";
    else if (!/\S+@\S+\.\S+/.test(fields.email)) errs.email = "Email inválido";
    if (!fields.mensaje.trim()) errs.mensaje = "Cuéntanos sobre tu proyecto";
    if (Object.keys(errs).length) { setErrors(errs); return; }

    setSubmitting(true);
    setTimeout(() => { setSubmitting(false); setSent(true); }, 900);
  };

  if (sent) return (
    <div style={{
      background: "rgba(16,185,129,0.04)", border: "1px solid rgba(16,185,129,0.2)",
      borderRadius: 28, padding: "64px 40px", textAlign: "center", backdropFilter: "blur(20px)"
    }}>
      <div style={{
        width: 72, height: 72, borderRadius: "50%", background: "rgba(16,185,129,0.1)",
        border: "1px solid rgba(16,185,129,0.25)", display: "flex",
        alignItems: "center", justifyContent: "center", margin: "0 auto 20px", fontSize: 36
      }}>✅</div>
      <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", color: "#F8FAFC", fontSize: 28, fontWeight: 800, marginBottom: 12 }}>
        ¡Mensaje Recibido!
      </h3>
      <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "#94A3B8", fontSize: 16, lineHeight: 1.7, maxWidth: 300, margin: "0 auto 32px" }}>
        El equipo de <span style={{ color: "#34D399", fontWeight: 700 }}>DevStudio</span> te contactará en menos de 24 horas.
      </p>
      <button onClick={() => { setSent(false); setFields({ nombre: "", email: "", mensaje: "" }); setProjectType(null); }}
        style={{
          background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)",
          color: "#94A3B8", padding: "12px 28px", borderRadius: 12, cursor: "pointer",
          fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: 14
        }}>
        Enviar otra consulta
      </button>
    </div>
  );

  return (
    <form onSubmit={handleSubmit} style={{
      background: "rgba(8,10,28,0.7)", backdropFilter: "blur(24px)",
      border: "1px solid rgba(255,255,255,0.07)",
      borderRadius: 28, padding: "clamp(32px,4vw,52px)",
      boxShadow: "0 40px 80px -20px rgba(0,0,0,0.6)"
    }}>
      {/* Selector tipo de proyecto */}
      <p style={{
        fontFamily: "'Space Grotesk', sans-serif", fontSize: 11,
        fontWeight: 800, letterSpacing: "0.12em", textTransform: "uppercase",
        color: "#475569", marginBottom: 12
      }}>
        ¿Qué necesitas? (opcional)
      </p>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginBottom: 28 }}>
        {PROJECT_TYPES.map(pt => (
          <button
            key={pt.id} type="button"
            onClick={() => setProjectType(projectType === pt.id ? null : pt.id)}
            style={{
              display: "flex", alignItems: "center", gap: 8,
              background: projectType === pt.id ? "rgba(59,130,246,0.12)" : "rgba(255,255,255,0.02)",
              border: `1px solid ${projectType === pt.id ? "rgba(59,130,246,0.5)" : "rgba(255,255,255,0.07)"}`,
              borderRadius: 12, padding: "10px 14px", cursor: "pointer",
              color: projectType === pt.id ? "#93C5FD" : "#64748B",
              fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 13, fontWeight: 600,
              transition: "all 0.25s"
            }}
          >
            <span style={{ fontSize: 16 }}>{pt.emoji}</span>
            {pt.label}
          </button>
        ))}
      </div>

      <Field label="Nombre completo" name="nombre" placeholder="Tu nombre y apellido"
             value={fields.nombre} onChange={e => setFields({ ...fields, nombre: e.target.value })} error={errors.nombre} />
      <Field label="Email de contacto" name="email" type="email" placeholder="nombre@empresa.com"
             value={fields.email} onChange={e => setFields({ ...fields, email: e.target.value })} error={errors.email} />
      <Field label="Cuéntanos tu proyecto" name="mensaje" isTextArea
             placeholder="¿Qué quieres construir? Describe tu idea, presupuesto estimado o plazo..."
             value={fields.mensaje} onChange={e => setFields({ ...fields, mensaje: e.target.value })} error={errors.mensaje} />

      <button type="submit" disabled={submitting} style={{
        width: "100%", background: submitting
          ? "rgba(59,130,246,0.5)"
          : "linear-gradient(135deg, #1D4ED8, #2563EB, #3B82F6)",
        color: "#fff", padding: "18px", borderRadius: 16, border: "none",
        fontFamily: "'Space Grotesk', sans-serif", fontSize: 16, fontWeight: 900,
        cursor: submitting ? "not-allowed" : "pointer",
        transition: "all 0.35s cubic-bezier(0.175,0.885,0.32,1.275)",
        boxShadow: "0 8px 32px rgba(37,99,235,0.35)",
        letterSpacing: "0.02em"
      }}
        onMouseEnter={e => { if (!submitting) { e.currentTarget.style.transform = "translateY(-3px)"; e.currentTarget.style.boxShadow = "0 16px 40px rgba(37,99,235,0.45)"; } }}
        onMouseLeave={e => { e.currentTarget.style.transform = "none"; e.currentTarget.style.boxShadow = "0 8px 32px rgba(37,99,235,0.35)"; }}
      >
        {submitting ? "Enviando..." : "Solicitar Cotización Gratuita →"}
      </button>

      <p style={{ textAlign: "center", color: "#334155", fontSize: 12, marginTop: 16, fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
        Sin compromiso · Respondemos en menos de 24h
      </p>
    </form>
  );
}

// ── Sección principal ─────────────────────────────────────────
export default function ContactForm() {
  const [ref, visible] = useInView(0.08);
  const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

  return (
    <section id="contacto" ref={ref} style={{
      padding: "120px clamp(24px, 5vw, 80px)",
      background: "#050612",
      position: "relative", overflow: "hidden"
    }}>
      {/* Glows de fondo */}
      <div style={{
        position: "absolute", top: "10%", right: "-15%",
        width: "55vw", height: "55vw",
        background: "radial-gradient(circle, rgba(37,99,235,0.06) 0%, transparent 65%)",
        pointerEvents: "none", filter: "blur(80px)"
      }} />
      <div style={{
        position: "absolute", bottom: "-15%", left: "-10%",
        width: "45vw", height: "45vw",
        background: "radial-gradient(circle, rgba(16,185,129,0.04) 0%, transparent 65%)",
        pointerEvents: "none", filter: "blur(60px)"
      }} />

      <div style={{ maxWidth: 1280, margin: "0 auto", position: "relative", zIndex: 1 }}>

        {/* ── Encabezado central ── */}
        <div style={{
          textAlign: "center", marginBottom: 72,
          opacity: visible ? 1 : 0,
          transform: visible ? "none" : "translateY(30px)",
          transition: "all 0.9s cubic-bezier(0.23,1,0.32,1)"
        }}>
          <div style={{
            display: "inline-flex", alignItems: "center", gap: 10,
            background: "rgba(59,130,246,0.08)", border: "1px solid rgba(59,130,246,0.2)",
            borderRadius: 100, padding: "8px 22px", marginBottom: 28
          }}>
            <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#3B82F6", boxShadow: "0 0 10px #3B82F6", animation: "pulseDot 2s infinite" }} />
            <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 12, color: "#93C5FD", letterSpacing: "0.18em", textTransform: "uppercase", fontWeight: 700 }}>
              Contacto
            </span>
          </div>

          <h2 style={{
            fontFamily: "'Space Grotesk', sans-serif", fontWeight: 900,
            fontSize: "clamp(32px, 5vw, 62px)", color: "#F8FAFC",
            lineHeight: 1.05, marginBottom: 20, letterSpacing: "-0.04em"
          }}>
            Transforma tu negocio con{" "}
            <span style={{
              background: "linear-gradient(135deg, #3B82F6, #38BDF8, #34D399)",
              WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text"
            }}>
              tecnología que crece contigo.
            </span>
          </h2>

          <p style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif", color: "#64748B",
            fontSize: 19, lineHeight: 1.7, maxWidth: 540, margin: "0 auto"
          }}>
            Hablemos sobre cómo automatizar y optimizar tu empresa. Primera consultoría sin costo ni compromiso.
          </p>
        </div>

        {/* ── Stats rápidos ── */}
        <div style={{
          display: "flex", justifyContent: "center", gap: "clamp(32px, 6vw, 80px)",
          marginBottom: 72, flexWrap: "wrap",
          opacity: visible ? 1 : 0,
          transform: visible ? "none" : "translateY(20px)",
          transition: "all 1s cubic-bezier(0.23,1,0.32,1) 0.15s"
        }}>
          {STATS.map(s => (
            <div key={s.label} style={{ textAlign: "center" }}>
              <div style={{
                fontFamily: "'Space Grotesk', sans-serif", fontSize: "clamp(32px,4vw,48px)",
                fontWeight: 900, color: "#F8FAFC", letterSpacing: "-0.04em",
                background: "linear-gradient(135deg, #60A5FA, #38BDF8)",
                WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text"
              }}>
                {s.value}
              </div>
              <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "#475569", fontSize: 13, fontWeight: 600, marginTop: 4 }}>
                {s.label}
              </div>
            </div>
          ))}
        </div>

        {/* ── Grid: Info + Formulario ── */}
        <div className="contact-grid" style={{
          display: "grid",
          gridTemplateColumns: "minmax(0,1fr) minmax(0,1.2fr)",
          gap: "clamp(40px, 6vw, 100px)",
          alignItems: "start"
        }}>

          {/* Columna izquierda */}
          <div style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "none" : "translateX(-30px)",
            transition: "all 1s cubic-bezier(0.23,1,0.32,1) 0.25s"
          }}>

            {/* Trust signals */}
            <div style={{ display: "flex", flexDirection: "column", gap: 14, marginBottom: 44 }}>
              {TRUST_SIGNALS.map(ts => (
                <div key={ts.text} style={{
                  display: "flex", alignItems: "center", gap: 14,
                  background: "rgba(255,255,255,0.02)",
                  border: "1px solid rgba(255,255,255,0.05)",
                  borderRadius: 14, padding: "14px 20px"
                }}>
                  <span style={{ fontSize: 20 }}>{ts.icon}</span>
                  <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "#CBD5E1", fontSize: 15, fontWeight: 500 }}>
                    {ts.text}
                  </span>
                </div>
              ))}
            </div>

            {/* Datos de contacto */}
            <div style={{ display: "flex", flexDirection: "column", gap: 16, marginBottom: 36 }}>
              {[
                { icon: <IconPin />, label: "Lima, Perú" },
                { icon: <IconMail />, label: "contacto@studiodevperu.com" },
                { icon: <IconPhone />, label: "+51 951 655 295" },
              ].map(item => (
                <div key={item.label} style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <span style={{ color: "#3B82F6" }}>{item.icon}</span>
                  <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "#94A3B8", fontSize: 15 }}>
                    {item.label}
                  </span>
                </div>
              ))}
            </div>

            {/* Botón WhatsApp */}
            <a href={waUrl} target="_blank" rel="noopener noreferrer" style={{
              display: "inline-flex", alignItems: "center", gap: 12,
              background: "rgba(37,211,102,0.08)", border: "1px solid rgba(37,211,102,0.25)",
              color: "#25D366", textDecoration: "none",
              padding: "16px 28px", borderRadius: 16,
              fontFamily: "'Space Grotesk', sans-serif", fontSize: 15, fontWeight: 800,
              transition: "all 0.35s cubic-bezier(0.4,0,0.2,1)",
              boxShadow: "0 8px 24px rgba(37,211,102,0.1)"
            }}
              onMouseEnter={e => {
                e.currentTarget.style.background = "rgba(37,211,102,0.14)";
                e.currentTarget.style.transform = "translateY(-4px)";
                e.currentTarget.style.boxShadow = "0 16px 36px rgba(37,211,102,0.2)";
                e.currentTarget.style.borderColor = "rgba(37,211,102,0.5)";
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = "rgba(37,211,102,0.08)";
                e.currentTarget.style.transform = "none";
                e.currentTarget.style.boxShadow = "0 8px 24px rgba(37,211,102,0.1)";
                e.currentTarget.style.borderColor = "rgba(37,211,102,0.25)";
              }}
            >
              <IconWA />
              Escríbenos por WhatsApp
            </a>
          </div>

          {/* Columna derecha — Formulario */}
          <div style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "none" : "translateX(30px)",
            transition: "all 1s cubic-bezier(0.23,1,0.32,1) 0.35s"
          }}>
            <Form />
          </div>
        </div>
      </div>

      <style>{`
        @keyframes pulseDot {
          0%,100% { transform: scale(1); opacity: 1; }
          50%      { transform: scale(1.6); opacity: 0.5; }
        }

        @media (max-width: 850px) {
          .contact-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
        }
      `}</style>
    </section>
  );
}
