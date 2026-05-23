import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { useInView } from "../hooks/useInView";
import PageLayout from "./PageLayout";

const CASOS = [
  {
    categoria: "Web · Punto de Venta",
    titulo: "POSMarket",
    cliente: "Retail peruano · 2024",
    metrica: "+180%",
    metrica_label: "ventas en 6 meses",
    desc: "El cliente operaba con herramientas separadas para ventas, caja e inventario, perdiendo control y velocidad en horas pico. Diseñamos una sola plataforma POS con inventario multi-almacén, ventas rápidas y reportes en tiempo real. Resultado: más ventas, menos errores operativos y decisiones comerciales más rápidas.",
    color: "#3B82F6",
  },
  {
    categoria: "Móvil · Transporte",
    titulo: "Moto GO",
    cliente: "Startup de movilidad · 2024",
    metrica: "2x",
    metrica_label: "lanzamiento más rápido iOS+Android",
    desc: "Necesitaban competir contra apps grandes con presupuesto limitado y salir al mercado en semanas, no meses. Construimos una app móvil única para iOS y Android con matching en tiempo real, GPS y cobros digitales. Resultado: lanzamiento simultáneo, menor costo de desarrollo y validación comercial inmediata.",
    color: "#38BDF8",
  },
  {
    categoria: "Web · Logística",
    titulo: "StockPro",
    cliente: "Operación logística PYME · 2023",
    metrica: "−40%",
    metrica_label: "tiempo de despacho",
    desc: "La operación sufría retrasos diarios por procesos manuales y sistemas desconectados entre inventario y despacho. Implementamos una suite logística unificada con trazabilidad, tableros por proceso y auditoría operativa. Resultado: despachos más ágiles, menos retrabajo y control total de punta a punta.",
    color: "#A78BFA",
  },
  {
    categoria: "CRM · Ventas y Call Center",
    titulo: "CallSys Pro",
    cliente: "Equipo comercial B2B · 2024",
    metrica: "+35%",
    metrica_label: "tasa de conversión",
    desc: "El equipo comercial gestionaba leads en canales dispersos y perdía oportunidades por falta de seguimiento. Centralizamos ventas en un CRM omnicanal con pipeline visual, automatizaciones y trazabilidad de cada contacto. Resultado: más cierres, ciclos comerciales más cortos y mayor productividad del equipo.",
    color: "#10B981",
  },
  {
    categoria: "Cloud · DevOps",
    titulo: "InfraScale",
    cliente: "Fintech (confidencial) · 2025",
    metrica: "−40%",
    metrica_label: "costos de infraestructura",
    desc: "La fintech operaba con infraestructura on‑premise costosa y con riesgo de caída en picos de carga. Ejecutamos migración progresiva a AWS con CI/CD, observabilidad y arquitectura multi-zona sin detener operación. Resultado: menor costo mensual, más estabilidad y base lista para escalar.",
    color: "#F59E0B",
  },
  {
    categoria: "Web + Móvil · Restaurantes",
    titulo: "FastFood Doña Nella",
    cliente: "Cadena gastronómica local · 2024",
    metrica: "3x",
    metrica_label: "pedidos por canal digital",
    desc: "Dependían del teléfono para tomar pedidos, generando demoras y pérdida de ventas en horas punta. Creamos una plataforma digital de pedidos y delivery con carta interactiva, pagos online y seguimiento en tiempo real. Resultado: más pedidos, menos fricción para el cliente y operación mucho más ordenada.",
    color: "#EC4899",
  },
];

function Badge({ children }) {
  return (
    <div
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 10,
        background: "rgba(59,130,246,0.08)",
        border: "1px solid rgba(59,130,246,0.2)",
        borderRadius: 100,
        padding: "8px 22px",
        marginBottom: 28,
      }}
    >
      <span
        style={{
          width: 7,
          height: 7,
          borderRadius: "50%",
          background: "#3B82F6",
          boxShadow: "0 0 10px #3B82F6",
        }}
      />
      <span
        style={{
          fontFamily: "'Space Grotesk', sans-serif",
          fontSize: 12,
          color: "#93C5FD",
          letterSpacing: "0.18em",
          textTransform: "uppercase",
          fontWeight: 700,
        }}
      >
        {children}
      </span>
    </div>
  );
}

export default function CasosDeExito() {
  const [refHero, visHero] = useInView(0.1);
  const [refCasos, visCasos] = useInView(0.08);
  const [refCta, visCta] = useInView(0.1);

  const pad = "clamp(24px, 5vw, 80px)";

  return (
    <PageLayout>
      <Helmet>
        <title>Casos de Éxito | DevStudio Perú — Resultados Reales en LATAM</title>
        <meta
          name="description"
          content="Proyectos reales con resultados medibles: +180% en ventas, −40% tiempo de despacho, 15k+ usuarios en el primer mes. Conoce cómo DevStudio Perú transforma negocios."
        />
      </Helmet>

      {/* ── HERO ── */}
      <section ref={refHero} style={{ padding: `clamp(100px,12vh,140px) ${pad} 80px` }}>
        <div
          style={{
            maxWidth: 900,
            margin: "0 auto",
            textAlign: "center",
            opacity: visHero ? 1 : 0,
            transform: visHero ? "none" : "translateY(40px)",
            transition: "all 1s cubic-bezier(0.23,1,0.32,1)",
          }}
        >
          <Badge>Casos de éxito</Badge>
          <h1
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 900,
              fontSize: "clamp(36px,5.5vw,68px)",
              lineHeight: 1.05,
              color: "#F8FAFC",
              letterSpacing: "-0.04em",
              marginBottom: 24,
            }}
          >
            Productos que{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #60A5FA, #38BDF8)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              movieron números.
            </span>
          </h1>
          <p
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              color: "#64748B",
              fontSize: "clamp(17px,2vw,20px)",
              lineHeight: 1.75,
              maxWidth: 680,
              margin: "0 auto",
            }}
          >
            Una selección de proyectos donde el código se tradujo en resultados medibles.
            Más allá del "se ve bonito", enfocándonos en impacto real de negocio.
          </p>
        </div>
      </section>

      {/* ── LISTA DE CASOS ── */}
      <section ref={refCasos} style={{ padding: `0 ${pad} 110px` }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gap: 20 }}>
          {CASOS.map((c, i) => (
            <article
              key={c.titulo}
              style={{
                background: "rgba(255,255,255,0.025)",
                border: "1px solid rgba(255,255,255,0.07)",
                borderLeft: `4px solid ${c.color}`,
                borderRadius: 22,
                padding: "clamp(24px,3vw,34px)",
                backdropFilter: "blur(12px)",
                opacity: visCasos ? 1 : 0,
                transform: visCasos ? "none" : "translateY(28px)",
                transition: `all 0.8s cubic-bezier(0.23,1,0.32,1) ${i * 0.1}s`,
              }}
            >
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr auto",
                  gap: 18,
                  alignItems: "start",
                }}
              >
                <div>
                  <div
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 8,
                      background: `${c.color}12`,
                      border: `1px solid ${c.color}26`,
                      borderRadius: 999,
                      padding: "6px 12px",
                      marginBottom: 16,
                    }}
                  >
                    <span
                      style={{
                        width: 6,
                        height: 6,
                        borderRadius: "50%",
                        background: c.color,
                        boxShadow: `0 0 10px ${c.color}`,
                      }}
                    />
                    <span
                      style={{
                        fontFamily: "'Space Grotesk', sans-serif",
                        fontSize: 11,
                        letterSpacing: "0.12em",
                        textTransform: "uppercase",
                        color: c.color,
                        fontWeight: 700,
                      }}
                    >
                      {c.categoria}
                    </span>
                  </div>

                  <h2
                    style={{
                      fontFamily: "'Space Grotesk', sans-serif",
                      fontWeight: 800,
                      fontSize: "clamp(24px,2.8vw,34px)",
                      letterSpacing: "-0.02em",
                      color: "#F8FAFC",
                      marginBottom: 8,
                    }}
                  >
                    {c.titulo}
                  </h2>
                  <div
                    style={{
                      fontFamily: "'Plus Jakarta Sans', sans-serif",
                      color: "#64748B",
                      fontSize: 14,
                      marginBottom: 14,
                    }}
                  >
                    {c.cliente}
                  </div>
                  <p
                    style={{
                      fontFamily: "'Plus Jakarta Sans', sans-serif",
                      color: "#94A3B8",
                      fontSize: 15.5,
                      lineHeight: 1.75,
                      margin: 0,
                      maxWidth: 860,
                    }}
                  >
                    {c.desc}
                  </p>
                </div>

                <div
                  style={{
                    minWidth: 150,
                    textAlign: "right",
                    background: `${c.color}0F`,
                    border: `1px solid ${c.color}2E`,
                    borderRadius: 16,
                    padding: "14px 16px",
                  }}
                >
                  <div
                    style={{
                      fontFamily: "'Space Grotesk', sans-serif",
                      fontWeight: 900,
                      fontSize: "clamp(24px,3vw,36px)",
                      lineHeight: 1,
                      color: c.color,
                      letterSpacing: "-0.03em",
                    }}
                  >
                    {c.metrica}
                  </div>
                  <div
                    style={{
                      marginTop: 8,
                      fontFamily: "'Plus Jakarta Sans', sans-serif",
                      color: "#94A3B8",
                      fontSize: 12.5,
                    }}
                  >
                    {c.metrica_label}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <section ref={refCta} style={{ padding: `0 ${pad} 120px` }}>
        <div
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            background: "rgba(255,255,255,0.02)",
            border: "1px solid rgba(59,130,246,0.2)",
            borderRadius: 28,
            padding: "clamp(40px,5vw,64px)",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: 32,
            backdropFilter: "blur(16px)",
            opacity: visCta ? 1 : 0,
            transform: visCta ? "none" : "translateY(30px)",
            transition: "all 0.9s cubic-bezier(0.23,1,0.32,1)",
            boxShadow: "0 0 80px rgba(59,130,246,0.05)",
          }}
        >
          <div>
            <h2
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontWeight: 900,
                fontSize: "clamp(24px,3.5vw,40px)",
                color: "#F8FAFC",
                letterSpacing: "-0.03em",
                marginBottom: 10,
              }}
            >
              ¿Tu caso podría ser el siguiente?
            </h2>
            <p
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                color: "#475569",
                fontSize: 16,
                margin: 0,
              }}
            >
              Cuéntanos qué necesitas y te proponemos una ruta clara para ejecutarlo.
            </p>
          </div>

          <Link
            to="/#contacto"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 10,
              background: "linear-gradient(135deg, #2563EB, #3B82F6)",
              color: "#fff",
              textDecoration: "none",
              padding: "18px 36px",
              borderRadius: 16,
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 800,
              fontSize: 15,
              whiteSpace: "nowrap",
              boxShadow: "0 10px 30px rgba(37,99,235,0.35)",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-3px)";
              e.currentTarget.style.boxShadow = "0 16px 40px rgba(37,99,235,0.45)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "none";
              e.currentTarget.style.boxShadow = "0 10px 30px rgba(37,99,235,0.35)";
            }}
          >
            Cuéntanos qué necesitas →
          </Link>
        </div>
      </section>
    </PageLayout>
  );
}
