// ─────────────────────────────────────────────────────────────
//  src/App.jsx
//  Componente raíz — ensambla todas las secciones.
// ─────────────────────────────────────────────────────────────

import { useScrollY } from "./hooks/useInView";

import Navbar          from "./componentes/Navbar";
import HeroSection     from "./componentes/HeroSection";
import ServicesSection from "./componentes/ServicesSection";
import TechStack       from "./componentes/TechStack";
import Portfolio       from "./componentes/Portfolio";
import Testimonials    from "./componentes/Testimonials";
import ContactForm     from "./componentes/ContactForm";
import Footer          from "./componentes/Footer";

export default function App() {
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
