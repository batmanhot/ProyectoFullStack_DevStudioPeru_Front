import React, { useState } from 'react';
import { Terminal, Network, Code2, CheckCircle2, Send, Menu, X, ExternalLink } from 'lucide-react';
import logo from '../assets/logoDevStudioPeru.jpg';


const LandingPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Nota: usamos el logo importado desde assets en lugar de una URL externa

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      {/* --- NAVBAR --- */}
      <nav className="fixed w-full bg-white/95 backdrop-blur-md z-50 shadow-sm border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">

            {/* LOGO AREA */}
            <div className="flex items-center gap-3">

              <img 
                src={logo} 
                alt="DevStudioPeru Logo" 
                //className="w-12 h-12 object-contain rounded-lg shadow-sm"
                className="w-12 h-12 object-contain"
              />

              <div className="flex flex-col">
                <span className="text-xl font-black tracking-tight text-slate-900 leading-none">
                  DevStudio<span className="text-cyan-600">Peru</span>
                </span>
                <span className="text-[10px] uppercase tracking-widest text-slate-400 font-bold">
                  Solutions & Tech
                </span>
              </div>
            </div>
            
            {/* DESKTOP MENU */}
            <div className="hidden md:flex items-center space-x-8 font-semibold text-sm">
              <a href="#servicios" className="text-slate-600 hover:text-cyan-600 transition">Servicios</a>
              <a href="#nosotros" className="text-slate-600 hover:text-cyan-600 transition">Nosotros</a>
              <a 
                href="https://wa.me/tu-numero-aqui" 
                className="bg-slate-900 text-white px-6 py-2.5 rounded-full hover:bg-cyan-600 transition shadow-lg shadow-cyan-900/10 flex items-center gap-2"
              >
                Cotizar Proyecto <ExternalLink size={14} />
              </a>
            </div>

            {/* MOBILE TOGGLE */}
            <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-slate-900 p-2">
                {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>

        {/* MOBILE MENU */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-slate-100 p-4 space-y-4 shadow-xl">
            <a href="#servicios" className="block text-lg font-medium py-2" onClick={() => setIsMenuOpen(false)}>Servicios</a>
            <a href="#nosotros" className="block text-lg font-medium py-2" onClick={() => setIsMenuOpen(false)}>Nosotros</a>
            <button className="w-full bg-cyan-600 text-white py-4 rounded-xl font-bold">WhatsApp Directo</button>
          </div>
        )}
      </nav>

      {/* --- HERO SECTION --- */}
      <section className="pt-40 pb-20 lg:pt-56 lg:pb-32 px-4 relative overflow-hidden bg-white">
        {/* Background Decorative Elements */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 opacity-20">
          <div className="absolute top-10 left-1/4 w-96 h-96 bg-cyan-200 rounded-full blur-[120px]"></div>
        </div>

        <div className="max-w-6xl mx-auto flex flex-col items-center text-center">
          {/* LOGO GRANDE EN HERO */}
          <div className="mb-10 ">
             <img 
                src={logo} 
                alt="Logo DevStudioPeru" 
                //className="w-32 h-32 md:w-40 md:h-40 object-contain drop-shadow-2xl border-4 border-white rounded-[2rem] bg-white p-2"
                //className="w-180 h-180 md:w-180 md:h-40 object-contain drop-shadow-2xl border-2"
              />
          </div>

          <h1 className="text-5xl md:text-7xl font-black text-slate-900 leading-[1.1] mb-8 tracking-tight">
            Transformamos tus ideas en <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-700 italic">
              soluciones reales.
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-slate-500 max-w-2xl mx-auto mb-12 leading-relaxed font-medium">
            Ingeniería de software de alto rendimiento e infraestructura técnica 
            diseñada para empresas peruanas que buscan el siguiente nivel.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-5 justify-center w-full sm:w-auto">
            <button className="bg-slate-900 text-white px-10 py-5 rounded-2xl font-bold text-lg hover:bg-cyan-600 transition-all shadow-2xl shadow-slate-900/20 active:scale-95">
              Nuestros Servicios
            </button>
            <button className="bg-white border-2 border-slate-200 text-slate-700 px-10 py-5 rounded-2xl font-bold text-lg hover:border-cyan-600 hover:text-cyan-600 transition-all flex items-center justify-center gap-2">
              WhatsApp <span className="text-green-500">●</span>
            </button>
          </div>
        </div>
      </section>

      {/* ... (El resto de las secciones se mantienen igual que el código anterior) ... */}

    </div>
  );
};

export default LandingPage;