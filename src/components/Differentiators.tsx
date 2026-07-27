import React from 'react';
import { ShieldCheck, Wrench, TrendingUp, AlertTriangle, ChevronRight } from 'lucide-react';

export default function Differentiators() {
  return (
    <section id="diferenciais" className="py-20 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
          <span className="text-xs uppercase tracking-[3px] text-[#F59F0A] font-bold block">POR QUE ESCOLHER A SUN7 ENERGY</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-display leading-tight text-slate-800">
            Instalação profissional homologada de carregadores elétricos prediais
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Evite incêndios, sobrecarga no barramento comum ou multas da concessionária. Projetamos infraestruturas elétricas blindadas e certificadas com ART nos condomínios de Santa Catarina.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* Bento Box 1 - Wide Box */}
          <div className="lg:col-span-8 bg-[#f7fafd] rounded-3xl p-8 sm:p-10 border border-slate-200 flex flex-col justify-between hover:border-[#F59F0A]/35 transition-all duration-300 group">
            <div className="space-y-4">
              <div className="w-11 h-11 rounded-2xl bg-[#F59F0A]/10 flex items-center justify-center text-[#F59F0A]">
                <Wrench className="w-5 h-5" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold font-display text-slate-800 mt-4">
                Execução de Ponta a Ponta (Zero Dor de Cabeça para a Gestão)
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed max-w-2xl mt-2">
                Instalar por conta própria exige que o condomínio encontre um engenheiro credenciado para o laudo de carga, contrate eletricistas autônomos para fiação, e enfrente burocracias pesadas na concessionária de energia. Escolhendo a Sun7 Energy, você apenas assina o contrato e nós entregamos o sistema funcionando, 100% homologado pela Engenharia.
              </p>
              <div className="bg-white border border-slate-200 p-4 rounded-xl text-xs text-[#F59F0A] font-bold flex items-center gap-2 max-w-xl shadow-sm">
                <span>✦ Nós realizamos: Vistoria Técnica + Emissão de ART + Diagramas Unifilares + Acoplamento Físico.</span>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-baseline sm:items-center justify-between gap-4 text-xs text-slate-500">
              <span className="font-semibold text-slate-400">INCLUSO: SUPORTE TÉCNICO PERMANENTE</span>
              <span className="text-[#F59F0A] flex items-center gap-1 group-hover:translate-x-1 transition-transform font-bold">
                Consultar Engenheiro Parceiro <ChevronRight className="w-3.5 h-3.5" />
              </span>
            </div>
          </div>

          {/* Bento Box 2 - Tall Box */}
          <div className="lg:col-span-4 bg-[#f7fafd] rounded-3xl p-8 border border-slate-200 flex flex-col justify-between hover:border-[#F59F0A]/35 transition-all duration-300 group">
            <div className="space-y-4">
              <div className="w-11 h-11 rounded-2xl bg-[#F59F0A]/10 flex items-center justify-center text-[#F59F0A]">
                <ShieldCheck className="w-5 h-5 text-glow-orange" />
              </div>
              <h3 className="text-xl font-bold font-display text-slate-800 mt-4">
                Segurança Patrimonial Extrema
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mt-2">
                O veículo elétrico é um bem de alto valor, bem como a segurança da garagem habitacional. Nós instalamos quadros blindados de barramento individual com sistemas anti-centelhamento, DPS integrados e disjuntores de alta performance calibrados conforme normas técnicas nacionais.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-200">
              <div className="text-xs text-[#78350f] font-bold flex items-center gap-2 bg-amber-500/10 p-3.5 rounded-xl border border-amber-500/20">
                <AlertTriangle className="w-4 h-4 text-[#F59F0A] shrink-0" />
                <span className="leading-snug text-left">O barato sai caro em instalações elétricas de alta potência.</span>
              </div>
            </div>
          </div>

          {/* Bento Box 3 */}
          <div className="lg:col-span-4 bg-[#f7fafd] rounded-3xl p-8 border border-slate-200 flex flex-col justify-between hover:border-[#F59F0A]/35 transition-all duration-300 group">
            <div className="space-y-4">
              <div className="w-11 h-11 rounded-2xl bg-[#F59F0A]/10 flex items-center justify-center text-[#F59F0A]">
                <TrendingUp className="w-5 h-5 text-glow-orange" />
              </div>
              <h3 className="text-xl font-bold font-display text-slate-800 mt-4">
                Valorização Imediata do Imóvel
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mt-2">
                Preparar preventivamente o seu condomínio de residência ou negócio para receber moradores ou frotas com carros elétricos valoriza o metro quadrado em até 12%. Proteja o seu edifício contra a obsolescência nos próximos anos.
              </p>
            </div>

            <div className="mt-8 pt-4 border-t border-slate-200 text-xs text-slate-400 font-semibold uppercase">
              ✦ Selo de Condomínio Moderno e Inteligente
            </div>
          </div>

          {/* Bento Box 4 */}
          <div className="lg:col-span-8 bg-[#f7fafd] rounded-3xl p-8 border border-slate-200 flex flex-col justify-between hover:border-[#F59F0A]/35 transition-all duration-300 group">
            <div className="space-y-4">
              <div className="w-11 h-11 rounded-2xl bg-[#F59F0A]/10 flex items-center justify-center text-[#F59F0A]">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold font-display text-[#1e293b] mt-4">
                Custo Zero do Caixa Predial para Infraestrutura Básica
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed max-w-2xl mt-1 font-semibold">
                Temos modelos inovadores de contratação onde a infraestrutura básica e as calhas principais da tubulação comum nas garagens subterrâneas podem ser implementadas sem necessidade de rateio inicial ou esvaziamento das reservas financeiras do condomínio.
              </p>
            </div>

            <div className="mt-8 pt-4 border-t border-slate-200 flex items-center justify-between text-xs text-slate-500">
              <span className="font-semibold">Opções estruturadas sob análise do perfil predial</span>
              <span className="text-[#F59F0A] font-bold">Fale com Nossos Consultores ✦</span>
            </div>
          </div>

        </div>

        {/* Action CTA Button */}
        <div className="mt-14 text-center">
          <a 
            href="#contatos"
            className="inline-flex items-center justify-center gap-2 text-xs sm:text-sm font-black uppercase tracking-wider text-white bg-[#F59F0A] hover:bg-amber-600 px-8 py-4.5 rounded-full hover:shadow-lg transition-all duration-300"
          >
            Fale com um de nossos especialistas
          </a>
        </div>

      </div>
    </section>
  );
}
