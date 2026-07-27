import React from 'react';
import { ArrowRight, Wrench, Zap, ShieldCheck } from 'lucide-react';

export default function Hero() {
  return (
    <div id="inicio" className="relative">
      {/* High-quality styled dynamic background container */}
      <section 
        className="relative pt-28 pb-52 text-center text-white bg-[#0f172a] overflow-hidden border-b border-slate-800"
      >
        {/* Subtle grid background overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-25 pointer-events-none" />

        {/* Ambient solar-orange spotlight */}
        <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-[70%] h-[60%] rounded-full bg-[#F59F0A]/10 pointer-events-none blur-[140px]" />
        <div className="absolute top-1/3 left-1/4 w-[250px] h-[250px] rounded-full bg-emerald-500/5 pointer-events-none blur-[100px]" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-8">
          
          {/* Top Badge */}
          <div className="inline-block animate-fade-in">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/80 border border-slate-800 text-slate-300 text-xs font-black uppercase tracking-[3px] shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[#F59F0A] animate-pulse"></span>
              Engenharia Homologada &amp; Sem Rateio
            </span>
          </div>

          {/* Centered Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-[62px] font-sans font-black tracking-tight leading-[1.1] max-w-5xl mx-auto drop-shadow-sm">
            Carregador de Carro Elétrico <span className="text-[#F59F0A] relative inline-block">direto na sua vaga<span className="absolute left-0 bottom-1 w-full h-[6px] bg-[#F59F0A]/20 -z-10"></span></span> e sem rateio.
          </h1>

          {/* Subtitle Paragraph */}
          <p className="text-slate-300 text-sm sm:text-base md:text-lg max-w-4xl mx-auto leading-relaxed font-medium">
            Instalamos a estação de recarga individual conectada diretamente ao relógio de energia do próprio morador. Cuidamos de toda a engenharia elétrica, homologação na CELESC e instalação certificada com ART na Grande Florianópolis. Uma solução limpa, segura e definitiva: o morador paga apenas o que consome em sua própria fatura e o síndico elimina qualquer risco de brigas ou divisão de conta de luz.
          </p>

          {/* CTA Buttons */}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href="#contatos" 
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 text-xs sm:text-sm font-black uppercase tracking-wider text-slate-950 bg-[#F59F0A] hover:bg-amber-500 px-10 py-5 rounded-full shadow-[0_4px_25px_rgba(245,159,10,0.25)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 cursor-pointer"
            >
              <span>Falar com um especialista</span>
              <ArrowRight className="w-5 h-5 text-slate-950" />
            </a>
            
            <a 
              href="#sobre"
              className="w-full sm:w-auto inline-flex items-center justify-center text-xs sm:text-sm font-black uppercase tracking-wider text-slate-300 hover:text-white bg-slate-900/60 hover:bg-slate-900 border border-slate-800 hover:border-slate-750 px-10 py-5 rounded-full transition-all duration-200"
            >
              Conhecer a infraestrutura
            </a>
          </div>

        </div>
      </section>

      {/* 3-Pillar Row overlapping the Hero Bottom cleanly */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-24 relative z-20">
        <div className="bg-white rounded-3xl border border-slate-200 shadow-[0_15px_40px_rgba(15,23,42,0.08)] p-8 sm:p-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-0 divide-y md:divide-y-0 md:divide-x divide-slate-100">
            
            {/* Pillar 1 */}
            <div className="flex flex-col items-start px-0 md:px-8 py-6 md:py-0 text-left space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-[#F59F0A]/10 border border-[#F59F0A]/20 flex items-center justify-center text-[#F59F0A]">
                <Wrench className="w-5 h-5 stroke-[2]" />
              </div>
              <h3 className="text-lg font-extrabold font-display text-slate-850 tracking-tight">
                Projeto e Instalação
              </h3>
              <p className="text-xs sm:text-[13.5px] text-slate-500 leading-relaxed max-w-sm">
                Projeto e instalação completos, com engenharia especializada, homologação e obra técnica certificada.
              </p>
            </div>

            {/* Pillar 2 */}
            <div className="flex flex-col items-start px-0 md:px-8 py-6 md:py-0 text-left space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-[#F59F0A]/10 border border-[#F59F0A]/20 flex items-center justify-center text-[#F59F0A]">
                <Zap className="w-5 h-5 stroke-[2]" />
              </div>
              <h3 className="text-lg font-extrabold font-display text-slate-850 tracking-tight">
                Carregadores inteligentes
              </h3>
              <p className="text-xs sm:text-[13.5px] text-slate-500 leading-relaxed max-w-sm">
                Carregadores AC e DC com conectividade total, OCPP 1.6/2.0 e compatíveis com todos os veículos elétricos.
              </p>
            </div>

            {/* Pillar 3 */}
            <div className="flex flex-col items-start px-0 md:px-8 py-6 md:py-0 text-left space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-[#F59F0A]/10 border border-[#F59F0A]/20 flex items-center justify-center text-[#F59F0A]">
                <ShieldCheck className="w-5 h-5 stroke-[2]" />
              </div>
              <h3 className="text-lg font-extrabold font-display text-slate-850 tracking-tight">
                Operação e suporte 24/7
              </h3>
              <p className="text-xs sm:text-[13.5px] text-slate-500 leading-relaxed max-w-sm">
                Suporte e manutenção dedicados Sun7 Energy, com monitoramento ativo remoto e operação estável.
              </p>
            </div>

          </div>
        </div>
      </div>

    </div>
  );
}
