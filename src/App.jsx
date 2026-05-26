// ─────────────────────────────────────────────────────────────
//  src/App.jsx  — Raíz con React Router
// ─────────────────────────────────────────────────────────────
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider, Helmet } from "react-helmet-async";
import ScrollToTop from "./hooks/useScrollToTop";
import { useScrollY } from "./hooks/useInView";

import Navbar          from "./componentes/Navbar";
import HeroSection     from "./componentes/HeroSection";
import ProblemSection  from "./componentes/ProblemSection";
import ServicesSection from "./componentes/ServicesSection";
import BenefitsSection from "./componentes/BenefitsSection";
import Portfolio       from "./componentes/Portfolio";
import Testimonials    from "./componentes/Testimonials";
import ProcessSection  from "./componentes/ProcessSection";
import TechStack       from "./componentes/TechStack";
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
      <Helmet>
        <title>DevStudio Perú | Software Empresarial y Transformación Digital en Lima</title>
        <meta name="description" content="Automatizamos procesos y desarrollamos software empresarial a medida en Lima, Perú. Web, apps móviles e IA para empresas que buscan crecer, reducir costos y ganar eficiencia. Resultados reales." />
      </Helmet>
      <Navbar scrollY={scrollY} />
      <main>
        <HeroSection />
        <ProblemSection />
        <ServicesSection />
        <BenefitsSection />
        <Portfolio />
        <Testimonials />
        <ProcessSection />
        <TechStack />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <HelmetProvider>
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
    </HelmetProvider>
  );
}
