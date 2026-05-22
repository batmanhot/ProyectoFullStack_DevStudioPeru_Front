import { Link } from "react-router-dom";
import PageLayout from "./PageLayout";

const CASOS = [
  {
    categoria: "Retail · POS",
    titulo: "MARKET PRO",
    cliente: "ZZ Albertos · 2024",
    metrica: "+312%",
    metrica_label: "ventas en 6 meses",
    desc: "Sistema POS para supermercados con gestión de inventario multi-almacén, ventas rápidas, cuadre de caja y reportes en tiempo real. Reemplazó tres herramientas separadas.",
  },
  {
    categoria: "Salud · App móvil",
    titulo: "MedConnect",
    cliente: "Dr. Andrés Torres · 2024",
    metrica: "15k+",
    metrica_label: "consultas mes 1",
    desc: "App de telemedicina con citas en vivo, historial clínico y prescripción digital. Disponible en iOS y Android desde el lanzamiento.",
  },
  {
    categoria: "Logística · SaaS",
    titulo: "StockPro",
    cliente: "2023",
    metrica: "−40%",
    metrica_label: "tiempo de despacho",
    desc: "Gestión logística de almacenes inteligente, con capacidad para múltiples bodegas y alto tráfico de artículos. Dashboard de gestión en cada proceso.",
  },
  {
    categoria: "Fintech · Infraestructura",
    titulo: "Migración Cloud · Fintech Andina",
    cliente: "2025",
    metrica: "−40%",
    metrica_label: "costos mensuales",
    desc: "Migración de infraestructura on-premise a AWS con cero paradas. Pipelines CI/CD, observabilidad y alta disponibilidad multi-zona.",
  },
];

export default function CasosDeExito() {
  return (
    <PageLayout title="Casos de éxito">

      <section className="shell-page-hero">
        <span className="shell-pill"><span className="shell-dot" />Casos de éxito</span>
        <h1>Productos que <em>movieron números</em>.</h1>
        <p className="shell-lead">
          Una selección de proyectos donde el código se tradujo en resultados medibles.
          Más allá del "se ve bonito" — métricas reales de negocio.
        </p>
      </section>

      <section className="shell-section">
        <div style={{ display: "grid", gap: 18 }}>
          {CASOS.map(c => (
            <div key={c.titulo} className="shell-card">
              <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 12, marginBottom: 14 }}>
                <div>
                  <div className="shell-eyebrow">{c.categoria}</div>
                  <h2 style={{ fontSize: 24, marginBottom: 0 }}>{c.titulo}</h2>
                  <div style={{ color: "var(--ink-3)", fontSize: 13, marginTop: 2 }}>{c.cliente}</div>
                </div>
                <div style={{ textAlign: "right" }}>
                  <div className="shell-display" style={{ fontSize: 32, fontWeight: 700, color: "var(--accent-2)" }}>{c.metrica}</div>
                  <div style={{ color: "var(--ink-3)", fontSize: 12 }}>{c.metrica_label}</div>
                </div>
              </div>
              <p style={{ marginBottom: 0 }}>{c.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="shell-cta-bar">
        <h3>¿Tu caso podría ser el <em>siguiente</em>?</h3>
        <Link to="/#contacto" className="shell-btn">Cuéntanos qué necesitas →</Link>
      </div>

    </PageLayout>
  );
}
