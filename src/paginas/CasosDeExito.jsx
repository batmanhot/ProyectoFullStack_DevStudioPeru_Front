import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { useInView } from "../hooks/useInView";
import PageLayout from "./PageLayout";
import { PROJECTS } from "../data/content";

function Badge({ children }) {
  return (
    <div style={{
      display: "inline-flex", alignItems: "center", gap: 10,
      background: "rgba(59,130,246,0.08)", border: "1px solid rgba(59,130,246,0.2)",
      borderRadius: 100, padding: "8px 22px", marginBottom: 28,
    }}>
      <span style={{
        width: 7, height: 7, borderRadius: "50%",
        background: "#3B82F6", boxShadow: "0 0 10px #3B82F6",
      }} />
      <span style={{
        fontFamily: "'Space Grotesk', sans-serif",
        fontSize: 12, color: "#93C5FD",
        letterSpacing: "0.18em", textTransform: "uppercase", fontWeight: 700,
      }}>
        {children}
      </span>
    </div>
  );
}

function SectionLabel({ label, color }) {
  return (
    <div style={{
      display: "inline-flex", alignItems: "center", gap: 8,
      marginBottom: 10,
    }}>
      <span style={{
        width: 3, height: 14, borderRadius: 2,
        background: color, flexShrink: 0,
      }} />
      <span style={{
        fontFamily: "'Space Grotesk', sans-serif",
        fontSize: 11, fontWeight: 800,
        letterSpacing: "0.14em", textTransform: "uppercase",
        color: color,
      }}>
        {label}
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
        <title>Casos de Éxito | DevStudio Perú — Transformaciones Empresariales Reales</title>
        <meta
          name="description"
          content="Historias reales de transformación operativa: +180% en ventas, −40% tiempo de despacho, +35% tasa de conversión. Descubre cómo DevStudio Perú automatiza y digitaliza empresas en Lima."
        />
      </Helmet>

      {/* ── HERO ── */}
      <section ref={refHero} style={{ padding: `clamp(100px,12vh,140px) ${pad} 80px` }}>
        <div style={{
          maxWidth: 900, margin: "0 auto", textAlign: "center",
          opacity: visHero ? 1 : 0,
          transform: visHero ? "none" : "translateY(40px)",
          transition: "all 1s cubic-bezier(0.23,1,0.32,1)",
        }}>
          <Badge>Casos de éxito</Badge>
          <h1 style={{
            fontFamily: "'Space Grotesk', sans-serif", fontWeight: 900,
            fontSize: "clamp(36px,5.5vw,68px)", lineHeight: 1.05,
            color: "#F8FAFC", letterSpacing: "-0.04em", marginBottom: 24,
          }}>
            Transformaciones empresariales{" "}
            <span style={{
              background: "linear-gradient(135deg, #60A5FA, #38BDF8)",
              WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
            }}>
              con resultados medibles.
            </span>
          </h1>
          <p style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            color: "#64748B", fontSize: "clamp(17px,2vw,20px)",
            lineHeight: 1.75, maxWidth: 680, margin: "0 auto",
          }}>
            No somos una agencia de webs. Somos el equipo técnico que resuelve problemas operativos reales — y estos son los resultados que generamos para nuestros clientes.
          </p>
        </div>
      </section>

      {/* ── CASOS ── */}
      <section ref={refCasos} style={{ padding: `0 ${pad} 110px` }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gap: 24 }}>
          {PROJECTS.map((p, i) => (
            <article
              key={p.title}
              style={{
                background: "rgba(255,255,255,0.025)",
                border: "1px solid rgba(255,255,255,0.07)",
                borderLeft: `4px solid ${p.accentColor}`,
                borderRadius: 22,
                padding: "clamp(28px,3.5vw,44px)",
                backdropFilter: "blur(12px)",
                opacity: visCasos ? 1 : 0,
                transform: visCasos ? "none" : "translateY(28px)",
                transition: `all 0.8s cubic-bezier(0.23,1,0.32,1) ${i * 0.1}s`,
              }}
            >
              {/* ── Cabecera: categoria + métrica ── */}
              <div style={{
                display: "flex", justifyContent: "space-between",
                alignItems: "flex-start", gap: 20, flexWrap: "wrap",
                marginBottom: 20,
              }}>
                {/* Categoria badge */}
                <div style={{
                  display: "inline-flex", alignItems: "center", gap: 8,
                  background: `${p.accentColor}12`, border: `1px solid ${p.accentColor}26`,
                  borderRadius: 999, padding: "6px 14px",
                }}>
                  <span style={{
                    width: 6, height: 6, borderRadius: "50%",
                    background: p.accentColor, boxShadow: `0 0 10px ${p.accentColor}`,
                  }} />
                  <span style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontSize: 11, letterSpacing: "0.12em",
                    textTransform: "uppercase", color: p.accentColor, fontWeight: 700,
                  }}>
                    {p.category}
                  </span>
                </div>

                {/* Métrica box */}
                <div style={{
                  background: `${p.accentColor}0F`, border: `1px solid ${p.accentColor}2E`,
                  borderRadius: 16, padding: "14px 20px", textAlign: "center", minWidth: 130,
                }}>
                  <div style={{
                    fontFamily: "'Space Grotesk', sans-serif", fontWeight: 900,
                    fontSize: "clamp(22px,2.5vw,30px)", lineHeight: 1,
                    color: p.accentColor, letterSpacing: "-0.03em",
                  }}>
                    {p.metricValue}
                  </div>
                  <div style={{
                    marginTop: 6,
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    color: "#94A3B8", fontSize: 12,
                  }}>
                    {p.metricContext}
                  </div>
                </div>
              </div>

              {/* ── Título + subtitle + cliente ── */}
              <h2 style={{
                fontFamily: "'Space Grotesk', sans-serif", fontWeight: 800,
                fontSize: "clamp(22px,2.5vw,32px)", letterSpacing: "-0.02em",
                color: "#F8FAFC", marginBottom: 8,
                display: "flex", alignItems: "center", gap: 12, flexWrap: "wrap",
              }}>
                {p.title}
                {p.nda && (
                  <span style={{
                    fontFamily: "'Space Grotesk', sans-serif", fontSize: 10, fontWeight: 700,
                    color: p.accentColor, background: `${p.accentColor}15`,
                    border: `1px solid ${p.accentColor}30`,
                    borderRadius: 6, padding: "3px 8px", letterSpacing: "0.08em",
                    textTransform: "uppercase",
                  }}>
                    Confidencial
                  </span>
                )}
              </h2>
              <p style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontSize: 15.5, color: "#CBD5E1", lineHeight: 1.6,
                marginBottom: 6,
              }}>
                {p.subtitle}
              </p>
              <div style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                color: "#475569", fontSize: 13, marginBottom: 28,
              }}>
                {p.cliente}
              </div>

              {/* ── Divider ── */}
              <div style={{ borderTop: "1px solid rgba(255,255,255,0.06)", marginBottom: 28 }} />

              {/* ── Desafío ── */}
              <div style={{ marginBottom: 22 }}>
                <SectionLabel label="Desafío" color={p.accentColor} />
                <p style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  color: "#94A3B8", fontSize: 15, lineHeight: 1.75, margin: 0,
                }}>
                  {p.challenge}
                </p>
              </div>

              {/* ── Solución ── */}
              <div style={{ marginBottom: 26 }}>
                <SectionLabel label="Solución" color={p.accentColor} />
                <p style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  color: "#94A3B8", fontSize: 15, lineHeight: 1.75, margin: 0,
                }}>
                  {p.solution}
                </p>
              </div>

              {/* ── Resultados ── */}
              <div>
                <SectionLabel label="Resultados" color={p.accentColor} />
                <div style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
                  gap: "10px 24px",
                  marginTop: 4,
                }}>
                  {p.results.map((r, ri) => (
                    <div key={ri} style={{
                      display: "flex", alignItems: "flex-start", gap: 10,
                    }}>
                      <span style={{
                        color: p.accentColor, fontWeight: 800,
                        fontSize: 14, flexShrink: 0, lineHeight: 1.6,
                      }}>
                        ✓
                      </span>
                      <span style={{
                        fontFamily: "'Plus Jakarta Sans', sans-serif",
                        fontSize: 14, color: "#94A3B8", lineHeight: 1.6,
                      }}>
                        {r}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <section ref={refCta} style={{ padding: `0 ${pad} 120px` }}>
        <div style={{
          maxWidth: 1100, margin: "0 auto",
          background: "rgba(255,255,255,0.02)",
          border: "1px solid rgba(59,130,246,0.2)",
          borderRadius: 28, padding: "clamp(40px,5vw,64px)",
          display: "flex", justifyContent: "space-between",
          alignItems: "center", flexWrap: "wrap", gap: 32,
          backdropFilter: "blur(16px)",
          opacity: visCta ? 1 : 0,
          transform: visCta ? "none" : "translateY(30px)",
          transition: "all 0.9s cubic-bezier(0.23,1,0.32,1)",
          boxShadow: "0 0 80px rgba(59,130,246,0.05)",
        }}>
          <div>
            <h2 style={{
              fontFamily: "'Space Grotesk', sans-serif", fontWeight: 900,
              fontSize: "clamp(24px,3.5vw,40px)", color: "#F8FAFC",
              letterSpacing: "-0.03em", marginBottom: 10,
            }}>
              ¿Tu empresa podría ser el próximo caso?
            </h2>
            <p style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              color: "#475569", fontSize: 16, margin: 0,
            }}>
              Cuéntanos qué necesitas automatizar y te diseñamos una ruta clara para ejecutarlo.
            </p>
          </div>

          <Link
            to="/#contacto"
            style={{
              display: "inline-flex", alignItems: "center", gap: 10,
              background: "linear-gradient(135deg, #2563EB, #3B82F6)",
              color: "#fff", textDecoration: "none",
              padding: "18px 36px", borderRadius: 16,
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 800, fontSize: 15, whiteSpace: "nowrap",
              boxShadow: "0 10px 30px rgba(37,99,235,0.35)",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={e => {
              e.currentTarget.style.transform = "translateY(-3px)";
              e.currentTarget.style.boxShadow = "0 16px 40px rgba(37,99,235,0.45)";
            }}
            onMouseLeave={e => {
              e.currentTarget.style.transform = "none";
              e.currentTarget.style.boxShadow = "0 10px 30px rgba(37,99,235,0.35)";
            }}
          >
            Solicitar diagnóstico empresarial →
          </Link>
        </div>
      </section>
    </PageLayout>
  );
}
