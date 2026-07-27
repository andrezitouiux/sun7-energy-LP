import React from 'react';
import { Share2, Phone } from 'lucide-react';
import { trackEvent } from '../lib/tracker';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-slate-900/90 border-b border-slate-800/80 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Brand Logo with #F59F0A styling */}
        <a href="#" className="flex items-center gap-2 group">
          <img 
            src="https://lh3.googleusercontent.com/d/1MH1TpFF13ZloYmdIMN-Z-UWEV3HMkug3" 
            alt="SUN7 Energy Logo"
            className="h-14 sm:h-16 w-auto object-contain max-w-[220px] sm:max-w-[280px]"
            referrerPolicy="no-referrer"
            width="280"
            height="64"
            loading="eager"
          />
        </a>

        {/* Navigation Items (matched to screenshot exactly) */}
        <nav className="hidden lg:flex items-center gap-7 text-xs font-extrabold uppercase tracking-widest text-slate-300">
          <a href="#" className="hover:text-[#F59F0A] transition-colors duration-200">Início</a>
          <a href="#solucoes" className="hover:text-[#F59F0A] transition-colors duration-200">Soluções</a>
          <a href="#diferenciais" className="hover:text-[#F59F0A] transition-colors duration-200">Recarga como negócio</a>
          <a href="#sobre" className="hover:text-[#F59F0A] transition-colors duration-200">Sobre</a>
          <a href="#contatos" className="hover:text-[#F59F0A] transition-colors duration-200">Contato</a>
        </nav>

        {/* Right CTA */}
        <div className="flex items-center gap-3">
          <a 
            href="https://wa.me/5548999737361?text=Ol%C3%A1!%20Acessei%20a%20landing%20page%20da%20SUN7%20Energy%20e%20gostaria%20de%20saber%20mais%20sobre%20as%20solu%C3%A7%C3%B5es%20de%20carregadores%20para%20ve%C3%ADculos%20el%C3%A9tricos." 
            target="_blank" 
            rel="noopener noreferrer" 
            onClick={() => trackEvent('whatsapp_click', { destination: 'header_cta_button' })}
            className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-wider bg-white hover:bg-slate-50 text-slate-800 px-6 h-11 rounded-full border border-slate-200 transition-all duration-200 shadow-md"
          >
            <Phone className="w-3.5 h-3.5 text-[#F59F0A] fill-[#F59F0A]" />
            <span>WhatsApp</span>
          </a>
        </div>
      </div>
    </header>
  );
}
