// ─────────────────────────────────────────────────────────────
//  src/components/ContactForm.jsx  — Premium Contact v2
// ─────────────────────────────────────────────────────────────
import { useState } from "react";
import { useInView } from "../hooks/useInView";
import { CONTACT_INFO } from "../data/content";

// ── Iconos Internos ───────────────────────────────────────────
const FIELD_ICONS = {
  nombre: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>
    </svg>
  ),
  email: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
    </svg>
  ),
  asunto: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
    </svg>
  ),
  mensaje: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/>
    </svg>
  ),
  WhatsApp: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  ),
};

const WHATSAPP_NUMBER  = "51951655295";
const WHATSAPP_MESSAGE = "Hola DevStudioPeru! Me interesa conocer más sobre sus servicios de desarrollo de software.";

function WhatsAppButton() {
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;
  return (
    <a
      href={url} target="_blank" rel="noopener noreferrer"
      style={{
        display: "inline-flex", alignItems: "center", gap: 14,
        background: "rgba(37, 211, 102, 0.08)",
        border: "1px solid rgba(37, 211, 102, 0.25)",
        color: "#25D366", textDecoration: "none",
        padding: "18px 32px", borderRadius: 18,
        fontFamily: "'Space Grotesk', sans-serif", fontSize: 16, fontWeight: 800,
        transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
        marginTop: 10,
        boxShadow: "0 10px 30px rgba(37, 211, 102, 0.1)",
      }}
      onMouseEnter={e => {
        e.currentTarget.style.background = "rgba(37, 211, 102, 0.15)";
        e.currentTarget.style.transform = "translateY(-5px) scale(1.02)";
        e.currentTarget.style.boxShadow = "0 20px 40px rgba(37, 211, 102, 0.2)";
        e.currentTarget.style.borderColor = "rgba(37, 211, 102, 0.5)";
      }}
      onMouseLeave={e => {
        e.currentTarget.style.background = "rgba(37, 211, 102, 0.08)";
        e.currentTarget.style.transform = "translateY(0) scale(1)";
        e.currentTarget.style.boxShadow = "0 10px 30px rgba(37, 211, 102, 0.1)";
        e.currentTarget.style.borderColor = "rgba(37, 211, 102, 0.25)";
      }}
    >
      {FIELD_ICONS.WhatsApp}
      Chatear por WhatsApp
    </a>
  );
}

function InputField({ label, name, type = "text", placeholder, value, onChange, error, isTextArea = false }) {
  const [focused, setFocused] = useState(false);
  const Component = isTextArea ? "textarea" : "input";

  return (
    <div style={{ marginBottom: 28 }}>
      <label style={{ 
        display: "block", fontFamily: "'Space Grotesk', sans-serif",
        fontSize: 12, fontWeight: 800, color: focused ? "#60A5FA" : "#64748B", 
        marginBottom: 10, transition: "all 0.3s ease",
        textTransform: "uppercase", letterSpacing: "0.1em"
      }}>
        {label}
      </label>
      <div style={{ position: "relative" }}>
        <div style={{
          position: "absolute", left: 18, top: isTextArea ? 18 : "50%",
          transform: isTextArea ? "none" : "translateY(-50%)",
          color: focused ? "#60A5FA" : "#475569",
          transition: "color 0.3s ease"
        }}>
          {FIELD_ICONS[name] || FIELD_ICONS.mensaje}
        </div>
        <Component
          name={name}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          rows={isTextArea ? 5 : undefined}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          style={{
            width: "100%", 
            background: focused ? "rgba(59, 130, 246, 0.03)" : "rgba(255, 255, 255, 0.02)",
            border: `1px solid ${focused ? "#3B82F6" : "rgba(255, 255, 255, 0.08)"}`,
            borderRadius: 16,
            padding: isTextArea ? "16px 18px 16px 52px" : "16px 18px 16px 52px", 
            color: "#F8FAFC",
            fontFamily: "'Plus Jakarta Sans', sans-serif", 
            fontSize: 15,
            outline: "none",
            transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
            boxShadow: focused ? "0 10px 30px -10px rgba(59, 130, 246, 0.2), inset 0 0 15px rgba(59, 130, 246, 0.05)" : "none",
            resize: isTextArea ? "vertical" : "none"
          }}
        />
      </div>
      {error && <p style={{ color: "#F87171", fontSize: 12, marginTop: 8, fontWeight: 600, display: "flex", alignItems: "center", gap: 6 }}>
        <span style={{ fontSize: 14 }}>⚠️</span> {error}
      </p>}
    </div>
  );
}

function Form() {
  const [fields, setFields] = useState({ nombre: "", email: "", asunto: "", mensaje: "" });
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const e_msg = {};
    if (!fields.nombre.trim()) e_msg.nombre = "El nombre es requerido";
    if (!fields.email.trim()) e_msg.email = "El email es requerido";
    else if (!/\S+@\S+\.\S+/.test(fields.email)) e_msg.email = "Email corporativo inválido";
    if (!fields.mensaje.trim()) e_msg.mensaje = "Cuéntanos un poco más sobre tu proyecto";
    
    if (Object.keys(e_msg).length > 0) { setErrors(e_msg); return; }
    setSent(true);
  };

  if (sent) return (
    <div style={{ 
      background: "rgba(16, 185, 129, 0.04)", 
      border: "1px solid rgba(16, 185, 129, 0.15)",
      borderRadius: 32, padding: "80px 48px", textAlign: "center",
      backdropFilter: "blur(20px)",
      boxShadow: "0 30px 60px -12px rgba(0,0,0,0.5), inset 0 0 40px rgba(16, 185, 129, 0.05)"
    }}>
      <div style={{ 
        width: 80, height: 80, borderRadius: "50%", background: "rgba(16, 185, 129, 0.1)",
        display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 24px",
        border: "1px solid rgba(16, 185, 129, 0.2)"
      }}>
        <span style={{ fontSize: 40 }}>✅</span>
      </div>
      <h3 style={{ 
        fontFamily: "'Space Grotesk', sans-serif", color: "#F8FAFC", 
        fontSize: 32, fontWeight: 800, marginBottom: 16 
      }}>¡Propuesta Enviada!</h3>
      <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "#94A3B8", fontSize: 17, lineHeight: 1.7, maxWidth: 320, margin: "0 auto" }}>
        Gracias por confiar en <span style={{ color: "#34D399", fontWeight: 700 }}>DevStudio</span>. Nos pondremos en contacto contigo en breve.
      </p>
      <button onClick={() => setSent(false)} style={{
        marginTop: 40, background: "rgba(255, 255, 255, 0.05)", border: "1px solid rgba(255, 255, 255, 0.1)",
        color: "#F8FAFC", padding: "14px 32px", borderRadius: 14, cursor: "pointer", 
        fontWeight: 700, fontFamily: "'Space Grotesk', sans-serif", transition: "all 0.3s ease"
      }} onMouseEnter={e => e.currentTarget.style.background = "rgba(255, 255, 255, 0.1)"}
         onMouseLeave={e => e.currentTarget.style.background = "rgba(255, 255, 255, 0.05)"}>
        Enviar otra solicitud
      </button>
    </div>
  );

  return (
    <form onSubmit={handleSubmit} style={{ 
      background: "rgba(10, 11, 30, 0.6)", 
      backdropFilter: "blur(24px)",
      border: "1px solid rgba(255, 255, 255, 0.08)",
      borderRadius: 40, padding: "56px",
      boxShadow: "0 40px 80px -20px rgba(0,0,0,0.6), inset 0 0 30px rgba(255,255,255,0.02)"
    }}>
      <InputField label="Nombre completo" name="nombre" placeholder="Tu nombre y apellido" 
                  value={fields.nombre} onChange={e => setFields({...fields, nombre: e.target.value})} error={errors.nombre} />
      <InputField label="Email corporativo" name="email" type="email" placeholder="nombre@empresa.com" 
                  value={fields.email} onChange={e => setFields({...fields, email: e.target.value})} error={errors.email} />
      <InputField label="Asunto del Proyecto" name="asunto" placeholder="Ej: Desarrollo App Móvil" 
                  value={fields.asunto} onChange={e => setFields({...fields, asunto: e.target.value})} />
      <InputField label="Detalles del proyecto" name="mensaje" isTextArea placeholder="Cuéntanos tus objetivos, tecnologías deseadas o presupuesto estimado..." 
                  value={fields.mensaje} onChange={e => setFields({...fields, mensaje: e.target.value})} error={errors.mensaje} />
      
      <button type="submit" style={{
        width: "100%", background: "linear-gradient(135deg, #2563EB, #3B82F6, #60A5FA)", 
        color: "#fff", padding: "20px", borderRadius: 18, border: "none",
        fontFamily: "'Space Grotesk', sans-serif", fontSize: 16, fontWeight: 900, 
        cursor: "pointer", transition: "all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)", 
        marginTop: 12,
        boxShadow: "0 15px 35px rgba(37, 211, 102, 0.2)",
        position: "relative", overflow: "hidden"
      }} onMouseEnter={e => {
        e.currentTarget.style.transform = "translateY(-4px)";
        e.currentTarget.style.boxShadow = "0 20px 40px rgba(37, 211, 102, 0.3)";
      }}
         onMouseLeave={e => {
        e.currentTarget.style.transform = "none";
        e.currentTarget.style.boxShadow = "0 15px 35px rgba(37, 211, 102, 0.2)";
      }}>
        Enviar Propuesta de Proyecto
      </button>
    </form>
  );
}

export default function ContactForm() {
  const [ref, visible] = useInView(0.1);

  return (
    <section id="contacto" ref={ref} style={{
      padding: "140px clamp(24px, 5vw, 80px)",
      background: "#050612",
      position: "relative", overflow: "hidden"
    }}>
      {/* Decorative background glow elements */}
      <div style={{
        position: "absolute", top: "20%", right: "-10%",
        width: "50vw", height: "50vw",
        background: "radial-gradient(circle, rgba(59, 130, 246, 0.05) 0%, transparent 70%)",
        pointerEvents: "none", filter: "blur(60px)"
      }} />
      <div style={{
        position: "absolute", bottom: "-10%", left: "-10%",
        width: "40vw", height: "40vw",
        background: "radial-gradient(circle, rgba(96, 165, 250, 0.03) 0%, transparent 70%)",
        pointerEvents: "none", filter: "blur(40px)"
      }} />

      <div style={{
        maxWidth: 1300, margin: "0 auto",
        display: "grid", gridTemplateColumns: "1fr 1.1fr",
        gap: "clamp(60px, 8vw, 120px)", alignItems: "center", position: "relative", zIndex: 1
      }}>
        {/* Info Column */}
        <div style={{
          opacity: visible ? 1 : 0, 
          transform: visible ? "none" : "translateX(-40px)",
          transition: "all 1s cubic-bezier(0.23, 1, 0.32, 1)"
        }}>
          <div style={{
            display: "inline-flex", alignItems: "center", gap: 12,
            background: "rgba(59,130,246,0.08)", border: "1px solid rgba(59,130,246,0.2)",
            borderRadius: 100, padding: "10px 24px", marginBottom: 32,
          }}>
            <div style={{ 
              width: 8, height: 8, borderRadius: "50%", background: "#3B82F6", 
              boxShadow: "0 0 12px #3B82F6", animation: "pulse 2s infinite" 
            }} />
            <span style={{ 
              fontFamily: "'Space Grotesk', sans-serif", fontSize: 13, color: "#93C5FD", 
              letterSpacing: "0.15em", textTransform: "uppercase", fontWeight: 700 
            }}>Contacto Premium</span>
          </div>

          <h2 style={{ 
            fontFamily: "'Space Grotesk', sans-serif", fontWeight: 900,
            fontSize: "clamp(36px, 5.5vw, 68px)", color: "#F8FAFC", 
            lineHeight: 1.05, marginBottom: 28, letterSpacing: "-0.04em" 
          }}>
            ¿Tienes una idea? <br />
            <span style={{ 
              background: "linear-gradient(135deg, #60A5FA, #38BDF8, #A7F3D0)", 
              WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" 
            }}>Hagámosla Realidad.</span>
          </h2>

          <p style={{ 
            fontFamily: "'Plus Jakarta Sans', sans-serif", color: "#64748B",
            lineHeight: 1.8, marginBottom: 56, fontSize: 19, maxWidth: 500
          }}>
            Estamos listos para escuchar tus desafíos y transformarlos en soluciones tecnológicas de alto nivel.
          </p>

          {/* Contact Detail Cards */}
          <div style={{ display: "flex", flexDirection: "column", gap: 24, marginBottom: 56 }}>
            {[
              { icon: "📍", label: "Ubicación", value: "Lima, Perú", color: "#3B82F6" },
              { icon: "📧", label: "Email", value: "contacto@studiodevperu.com", color: "#10B981" },
              { icon: "📱", label: "WhatsApp", value: "+51 951 655 295", color: "#25D366" },
            ].map((item, idx) => (
              <div key={item.label} 
                style={{ 
                  display: "flex", alignItems: "center", gap: 24,
                  padding: "20px", borderRadius: 20,
                  background: "rgba(255,255,255,0.02)",
                  border: "1px solid rgba(255,255,255,0.05)",
                  transition: "all 0.3s ease",
                  cursor: "default"
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.background = "rgba(255,255,255,0.04)";
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)";
                  e.currentTarget.style.transform = "translateX(10px)";
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.background = "rgba(255,255,255,0.02)";
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.05)";
                  e.currentTarget.style.transform = "none";
                }}
              >
                <div style={{
                  width: 64, height: 64, borderRadius: 18,
                  background: `rgba(255,255,255,0.03)`, 
                  border: "1px solid rgba(255,255,255,0.08)",
                  display: "flex", alignItems: "center", justifyContent: "center", fontSize: 28,
                  boxShadow: `0 10px 20px rgba(0,0,0,0.2)`
                }}>
                  {item.icon}
                </div>
                <div>
                  <div style={{ 
                    fontFamily: "'Space Grotesk', sans-serif", fontSize: 11,
                    color: "#475569", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.15em", marginBottom: 6 
                  }}>
                    {item.label}
                  </div>
                  <div style={{ 
                    fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 18, color: "#F8FAFC", fontWeight: 600 
                  }}>
                    {item.value}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <WhatsAppButton />
        </div>

        {/* Form Column */}
        <div style={{
          opacity: visible ? 1 : 0, 
          transform: visible ? "none" : "translateX(40px)",
          transition: "all 1s cubic-bezier(0.23, 1, 0.32, 1) 0.2s"
        }}>
          <Form />
        </div>
      </div>

      <style>{`
        @keyframes pulse {
          0% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.5); opacity: 0.5; }
          100% { transform: scale(1); opacity: 1; }
        }
      `}</style>
    </section>
  );
}
