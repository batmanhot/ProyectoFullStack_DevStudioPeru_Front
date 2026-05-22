// ─────────────────────────────────────────────────────────────
//  src/App.jsx  — Raíz con React Router
// ─────────────────────────────────────────────────────────────
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./hooks/useScrollToTop";
import { useScrollY } from "./hooks/useInView";

import Navbar          from "./componentes/Navbar";
import HeroSection     from "./componentes/HeroSection";
import ServicesSection from "./componentes/ServicesSection";
import TechStack       from "./componentes/TechStack";
import Portfolio       from "./componentes/Portfolio";
import Testimonials    from "./componentes/Testimonials";
import ContactForm     from "./componentes/ContactForm";
import Footer          from "./componentes/Footer";

import Nosotros        from "./paginas/Nosotros";
import ComoTrabajamos  from "./paginas/ComoTrabajamos";
import CasosDeExito    from "./paginas/CasosDeExito";
import Carreras        from "./paginas/Carreras";

function LandingPage() {
  const scrollY = useScrollY();
  return (
    <div style={{ background: "#07091A", minHeight: "100vh" }}>
      <Navbar scrollY={scrollY} />
      <main>
        <HeroSection />
        <ServicesSection />
        <TechStack />
        <Portfolio />
        <Testimonials />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/"                 element={<LandingPage />} />
        <Route path="/nosotros"         element={<Nosotros />} />
        <Route path="/como-trabajamos"  element={<ComoTrabajamos />} />
        <Route path="/casos-de-exito"   element={<CasosDeExito />} />
        <Route path="/carreras"         element={<Carreras />} />
      </Routes>
    </BrowserRouter>
  );
}
