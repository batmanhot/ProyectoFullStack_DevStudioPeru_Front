// Layout compartido para páginas internas — visual idéntico a la landing
import { useScrollY } from "../hooks/useInView";
import Navbar from "../componentes/Navbar";
import Footer from "../componentes/Footer";

export default function PageLayout({ children }) {
  const scrollY = useScrollY();

  return (
    <div style={{ background: "#07091A", minHeight: "100vh" }}>
      <Navbar scrollY={scrollY} />

      {/* Fondo visual idéntico a la landing */}
      <div style={{ position: "fixed", inset: 0, pointerEvents: "none", zIndex: 0 }}>
        <div style={{
          position: "absolute", inset: 0,
          backgroundImage: "linear-gradient(rgba(59,130,246,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,0.04) 1px, transparent 1px)",
          backgroundSize: "70px 70px"
        }} />
        <div style={{
          position: "absolute", width: "55vw", height: "55vw", borderRadius: "50%",
          background: "radial-gradient(circle, rgba(37,99,235,0.07) 0%, transparent 65%)",
          top: "-10%", right: "-10%"
        }} />
        <div style={{
          position: "absolute", width: "45vw", height: "45vw", borderRadius: "50%",
          background: "radial-gradient(circle, rgba(56,189,248,0.05) 0%, transparent 65%)",
          bottom: "10%", left: "-10%"
        }} />
        <div style={{
          position: "absolute", inset: 0,
          background: "radial-gradient(ellipse 80% 60% at 50% 50%, transparent 40%, rgba(7,9,26,0.7) 100%)"
        }} />
      </div>

      <main style={{ position: "relative", zIndex: 1 }}>
        {children}
      </main>

      <Footer />
    </div>
  );
}
