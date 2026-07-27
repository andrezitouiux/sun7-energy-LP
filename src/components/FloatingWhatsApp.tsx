import React, { useState, useEffect } from 'react';
import { MessageSquare } from 'lucide-react';

export default function FloatingWhatsApp() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    // Show after scrolling down 300px
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const waUrl = "https://wa.me/5548999737361?text=Ol%C3%A1!%20Acessei%20a%20landing%20page%20da%20SUN7%20Energy%20e%20gostaria%20de%20saber%20mais%20sobre%20as%20solu%C3%A7%C3%B5es%20de%20carregadores%20para%20ve%C3%ADculos%20el%C3%A9tricos.";

  if (!showButton) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-fade-in group">
      {/* Tooltip text bubble */}
      <div className="absolute right-0 bottom-16 bg-slate-900 text-white text-[10px] font-black uppercase tracking-wider py-1.5 px-3 rounded-lg border border-slate-850 shadow-lg pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
        Conversar no WhatsApp ✦
      </div>

      <a 
        href={waUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Fale conosco no WhatsApp"
        className="w-14 h-14 bg-[#25D366] hover:bg-[#20ba5a] active:bg-[#1ca34f] text-white rounded-full flex items-center justify-center shadow-[0_4px_20px_rgba(37,211,102,0.35)] transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer relative"
      >
        {/* Radar pulsing ring */}
        <span className="absolute -inset-1 rounded-full bg-[#25D366]/20 animate-ping pointer-events-none" />
        
        {/* Custom Whatsapp icon with fine SVG curves or MessageSquare */}
        <svg className="w-7 h-7 text-white fill-white" viewBox="0 0 24 24" fill="currentColor">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.513 2.262 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.457L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.97C16.48 2.01 14.016 1.01 11.997 1.01c-5.433 0-9.851 4.372-9.855 9.801-.001 1.748.475 3.447 1.38 4.957l-.998 3.645 3.766-.976zm12.181-4.733c-.33-.165-1.954-.964-2.251-1.074-.298-.109-.516-.165-.732.165-.216.331-.837 1.053-1.026 1.272-.189.219-.378.247-.708.082-1.049-.524-1.815-.968-2.531-2.08-.182-.284-.28-.516-.082-.731.189-.2.33-.33.495-.496.165-.165.247-.275.33-.44.083-.165.041-.33-.021-.496-.062-.165-.516-1.24-.707-1.701-.186-.447-.375-.386-.516-.393-.133-.007-.285-.007-.438-.007-.152 0-.401.057-.611.285-.21.228-.801.782-.801 1.908s.818 2.213.931 2.362c.114.152 1.611 2.46 3.902 3.45.545.235.97.375 1.302.48.548.174 1.047.15 1.442.09.44-.067 1.954-.798 2.23-1.57.275-.77.275-1.43.193-1.57-.083-.14-.298-.222-.628-.387z"/>
        </svg>
      </a>
    </div>
  );
}
