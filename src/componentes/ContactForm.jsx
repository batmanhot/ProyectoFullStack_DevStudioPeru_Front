// ─────────────────────────────────────────────────────────────
//  src/components/ContactForm.jsx  — v4
//  - WhatsApp → botón directo con mensaje personalizado
//  - Redes sociales con iconos SVG + colores propios
// ─────────────────────────────────────────────────────────────
import { useState } from "react";
import { useInView } from "../hooks/useInView";
import { CONTACT_INFO, SOCIAL_LINKS } from "../data/content";

// ── Iconos SVG inline ─────────────────────────────────────────
const ICONS = {
  LinkedIn: (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  ),
  Facebook: (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
    </svg>
  ),
  Instagram: (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
    </svg>
  ),
  WhatsApp: (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  ),
};

// ── WhatsApp CTA ──────────────────────────────────────────────
// Cambia el número y el mensaje por defecto aquí:
const WHATSAPP_NUMBER  = "51951655295"; // sin + ni espacios
const WHATSAPP_MESSAGE = "Hola DevStudioPeru! Me interesa conocer más sobre sus servicios de desarrollo de software.";

function WhatsAppButton() {
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        display:"inline-flex", alignItems:"center", gap:10,
        background:"linear-gradient(135deg,#25D366,#128C7E)",
        color:"#fff", textDecoration:"none",
        padding:"12px 22px", borderRadius:12,
        fontFamily:"'Space Grotesk',sans-serif", fontSize:14, fontWeight:700,
        boxShadow:"0 0 24px rgba(37,211,102,0.35)",
        transition:"transform 0.2s ease, box-shadow 0.2s ease",
        marginTop:4,
      }}
      onMouseEnter={e => {
        e.currentTarget.style.transform  = "translateY(-2px)";
        e.currentTarget.style.boxShadow  = "0 0 36px rgba(37,211,102,0.55)";
      }}
      onMouseLeave={e => {
        e.currentTarget.style.transform  = "translateY(0)";
        e.currentTarget.style.boxShadow  = "0 0 24px rgba(37,211,102,0.35)";
      }}
    >
      {ICONS.WhatsApp}
      Escríbenos por WhatsApp
    </a>
  );
}

// ── Social link button ────────────────────────────────────────
function SocialBtn({ label, href, color }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      title={label}
      style={{
        display:"inline-flex", alignItems:"center", gap:8,
        color: color,
        background: color + "14",
        border: `1px solid ${color}33`,
        padding:"9px 16px", borderRadius:10,
        fontFamily:"'Space Grotesk',sans-serif", fontSize:13, fontWeight:600,
        textDecoration:"none",
        transition:"background 0.2s ease, transform 0.2s ease, box-shadow 0.2s ease",
      }}
      onMouseEnter={e => {
        e.currentTarget.style.background  = color + "28";
        e.currentTarget.style.transform   = "translateY(-2px)";
        e.currentTarget.style.boxShadow   = `0 6px 20px ${color}30`;
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

// ── Input style ───────────────────────────────────────────────
const inputBase = {
  width:"100%", background:"rgba(59,130,246,0.06)",
  border:"1px solid rgba(59,130,246,0.2)", borderRadius:10,
  padding:"12px 16px", color:"#E2E8F0",
  fontFamily:"'Plus Jakarta Sans',sans-serif", fontSize:14,
  boxSizing:"border-box", outline:"none", transition:"border-color 0.2s ease",
};

// ── Form ──────────────────────────────────────────────────────
function Field({ label, children }) {
  return (
    <div style={{ marginBottom:20 }}>
      <label style={{ display:"block", fontFamily:"'Space Grotesk',sans-serif",
        fontSize:13, fontWeight:600, color:"#94A3B8", marginBottom:8 }}>
        {label}
      </label>
      {children}
    </div>
  );
}

function Form() {
  const [fields, setFields] = useState({ nombre:"", email:"", asunto:"", mensaje:"" });
  const [errors, setErrors] = useState({});
  const [sent, setSent]     = useState(false);

  const validate = () => {
    const e = {};
    if (!fields.nombre.trim())  e.nombre  = "El nombre es requerido";
    if (!fields.email.trim())   e.email   = "El email es requerido";
    else if (!/\S+@\S+\.\S+/.test(fields.email)) e.email = "Email inválido";
    if (!fields.mensaje.trim()) e.mensaje = "El mensaje es requerido";
    return e;
  };

  const handleChange = e => {
    const { name, value } = e.target;
    setFields(p => ({ ...p, [name]: value }));
    if (errors[name]) setErrors(p => ({ ...p, [name]:"" }));
  };

  const handleSubmit = () => {
    const e = validate();
    if (Object.keys(e).length > 0) { setErrors(e); return; }
    setSent(true);
  };

  if (sent) return (
    <div style={{ background:"rgba(16,185,129,0.08)", border:"1px solid rgba(16,185,129,0.3)",
      borderRadius:16, padding:48, textAlign:"center" }}>
      <div style={{ fontSize:48, marginBottom:16 }}>✅</div>
      <h3 style={{ fontFamily:"'Space Grotesk',sans-serif", color:"#34D399", fontWeight:700, marginBottom:12 }}>
        ¡Mensaje enviado!
      </h3>
      <p style={{ fontFamily:"'Plus Jakarta Sans',sans-serif", color:"#64748B" }}>
        Te responderemos en menos de 24 horas.
      </p>
      <button onClick={() => { setSent(false); setFields({ nombre:"",email:"",asunto:"",mensaje:"" }); }}
        style={{ marginTop:20, background:"none", border:"none", color:"#60A5FA",
          fontFamily:"'Space Grotesk',sans-serif", fontSize:13, cursor:"pointer", textDecoration:"underline" }}>
        Enviar otro mensaje
      </button>
    </div>
  );

  return (
    <div style={{ background:"rgba(10,14,35,0.8)", border:"1px solid rgba(59,130,246,0.15)",
      borderRadius:16, padding:36 }}>
      <Field label="Nombre completo">
        <input name="nombre" type="text" placeholder="Tu nombre" value={fields.nombre}
          onChange={handleChange} style={inputBase}
          onFocus={e=>e.target.style.borderColor="rgba(59,130,246,0.6)"}
          onBlur={e=>e.target.style.borderColor="rgba(59,130,246,0.2)"}/>
        {errors.nombre && <p style={{color:"#F87171",fontSize:12,marginTop:6}}>{errors.nombre}</p>}
      </Field>
      <Field label="Email">
        <input name="email" type="email" placeholder="tu@email.com" value={fields.email}
          onChange={handleChange} style={inputBase}
          onFocus={e=>e.target.style.borderColor="rgba(59,130,246,0.6)"}
          onBlur={e=>e.target.style.borderColor="rgba(59,130,246,0.2)"}/>
        {errors.email && <p style={{color:"#F87171",fontSize:12,marginTop:6}}>{errors.email}</p>}
      </Field>
      <Field label="Asunto (opcional)">
        <input name="asunto" type="text" placeholder="¿En qué podemos ayudarte?" value={fields.asunto}
          onChange={handleChange} style={inputBase}
          onFocus={e=>e.target.style.borderColor="rgba(59,130,246,0.6)"}
          onBlur={e=>e.target.style.borderColor="rgba(59,130,246,0.2)"}/>
      </Field>
      <Field label="Mensaje">
        <textarea name="mensaje" rows={5} placeholder="Cuéntanos sobre tu proyecto..."
          value={fields.mensaje} onChange={handleChange}
          style={{...inputBase, resize:"vertical"}}
          onFocus={e=>e.target.style.borderColor="rgba(59,130,246,0.6)"}
          onBlur={e=>e.target.style.borderColor="rgba(59,130,246,0.2)"}/>
        {errors.mensaje && <p style={{color:"#F87171",fontSize:12,marginTop:6}}>{errors.mensaje}</p>}
      </Field>
      <button onClick={handleSubmit} style={{
        width:"100%", background:"linear-gradient(135deg,#2563EB,#3B82F6)", color:"#fff",
        padding:"14px", borderRadius:10, border:"none",
        fontFamily:"'Space Grotesk',sans-serif", fontSize:15, fontWeight:700, cursor:"pointer",
        boxShadow:"0 0 30px rgba(59,130,246,0.3)", transition:"all 0.2s ease",
      }}
        onMouseEnter={e=>{e.currentTarget.style.boxShadow="0 0 44px rgba(59,130,246,0.5)";e.currentTarget.style.transform="translateY(-1px)"}}
        onMouseLeave={e=>{e.currentTarget.style.boxShadow="0 0 30px rgba(59,130,246,0.3)";e.currentTarget.style.transform="none"}}>
        Enviar mensaje →
      </button>
    </div>
  );
}

// ── Sección completa ──────────────────────────────────────────
export default function ContactForm() {
  const [ref, visible] = useInView();

  return (
    <section id="contacto" ref={ref} style={{
      padding:"100px clamp(20px,5vw,80px)",
      background:"rgba(59,130,246,0.02)",
    }}>
      <div style={{
        maxWidth:1200, margin:"0 auto",
        display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(300px,1fr))",
        gap:56, alignItems:"start",
      }}>

        {/* ── Info lateral ── */}
        <div style={{
          opacity:visible?1:0, transform:visible?"translateY(0)":"translateY(30px)",
          transition:"all 0.7s ease",
        }}>
          {/* Label */}
          <div style={{
            display:"inline-flex", alignItems:"center", gap:8,
            background:"rgba(59,130,246,0.1)", border:"1px solid rgba(59,130,246,0.25)",
            borderRadius:100, padding:"5px 16px", marginBottom:16,
          }}>
            <span style={{ width:6, height:6, borderRadius:"50%", background:"#3B82F6", display:"inline-block" }}/>
            <span style={{ fontFamily:"'Space Grotesk',sans-serif", fontSize:11, color:"#93C5FD",
              letterSpacing:"0.12em", textTransform:"uppercase", fontWeight:600 }}>Contacto</span>
          </div>

          <h2 style={{ fontFamily:"'Space Grotesk',sans-serif", fontWeight:800,
            fontSize:"clamp(26px,4vw,40px)", color:"#E2E8F0", lineHeight:1.15, marginBottom:14 }}>
            ¡<span style={{ background:"linear-gradient(135deg,#3B82F6,#38BDF8)",
              WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent", backgroundClip:"text" }}>Hablemos</span> de tu proyecto!
          </h2>

          <p style={{ fontFamily:"'Plus Jakarta Sans',sans-serif", color:"#64748B",
            lineHeight:1.8, marginBottom:32, fontSize:16 }}>
            Cuéntanos tu idea y te respondemos en menos de 24 horas con una propuesta sin compromiso.
          </p>

          {/* Info de contacto */}
          <div style={{ display:"flex", flexDirection:"column", gap:18, marginBottom:32 }}>
            {CONTACT_INFO.map(({ icon, label, value }) => (
              <div key={label} style={{ display:"flex", alignItems:"center", gap:14 }}>
                <div style={{
                  width:44, height:44, borderRadius:10, flexShrink:0,
                  background:"rgba(59,130,246,0.1)", border:"1px solid rgba(59,130,246,0.2)",
                  display:"flex", alignItems:"center", justifyContent:"center", fontSize:20,
                }}>
                  {icon}
                </div>
                <div>
                  <div style={{ fontFamily:"'Space Grotesk',sans-serif", fontSize:11,
                    color:"#64748B", marginBottom:2, textTransform:"uppercase", letterSpacing:"0.08em" }}>
                    {label}
                  </div>
                  <div style={{ fontFamily:"'Plus Jakarta Sans',sans-serif", fontSize:15, color:"#E2E8F0" }}>
                    {value}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* WhatsApp CTA */}
          <WhatsAppButton />

          {/* Redes sociales */}
          <div style={{ display:"flex", gap:10, flexWrap:"wrap", marginTop:28 }}>
            {SOCIAL_LINKS.map(({ label, href, color }) => (
              <SocialBtn key={label} label={label} href={href} color={color} />
            ))}
          </div>
        </div>

        {/* ── Formulario ── */}
        <div style={{
          opacity:visible?1:0, transform:visible?"translateY(0)":"translateY(30px)",
          transition:"all 0.7s ease 0.2s",
        }}>
          <Form />
        </div>
      </div>
    </section>
  );
}
