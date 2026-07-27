import React from 'react';
import { Check, ShieldCheck, Award, Zap, HeartHandshake } from 'lucide-react';

export default function Management() {
  return (
    <section id="sobre" className="py-24 bg-[#0f172a] border-t border-slate-800 text-white relative overflow-hidden">
      {/* Background glowing amber spotlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[50%] rounded-full bg-[#F59F0A]/5 pointer-events-none blur-[120px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Side: Brand Concept & Text */}
          <div className="lg:col-span-6 space-y-8 text-left">
            <div className="space-y-3">
              <span className="text-[#F59F0A] text-xs font-black uppercase tracking-[3px] block">
                ESPECIALISTAS EM INFRAESTRUTURA EV
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-display tracking-tight leading-tight text-white">
                Engenharia de recarga veicular na Grande Florianópolis.
              </h2>
            </div>

            <p className="text-slate-350 text-sm sm:text-base leading-relaxed font-semibold">
              Especializada em energia solar fotovoltaica e projetos de infraestrutura de carregadores para carros elétricos em condomínios residenciais e comerciais. A Sun7 Energy entrega a solução completa no modelo turnkey (da vistoria à homologação CELESC). Garantimos eficiência, segurança e total controle financeiro para o condomínio.
            </p>

            {/* Structured Bullet List */}
            <div className="space-y-4 pt-2">
              <div className="flex items-start gap-3.5 text-xs sm:text-[13.5px] text-slate-300 font-bold">
                <div className="w-6 h-6 rounded-lg bg-[#F59F0A]/20 flex items-center justify-center text-[#F59F0A] shrink-0">
                  <Check className="w-4 h-4 stroke-[3]" />
                </div>
                <span><strong>Engenharia e Normas:</strong> Projetos técnicos com total segurança jurídica, elétrica e conformidade ao CREA.</span>
              </div>
              <div className="flex items-start gap-3.5 text-xs sm:text-[13.5px] text-slate-300 font-bold">
                <div className="w-6 h-6 rounded-lg bg-[#F59F0A]/20 flex items-center justify-center text-[#F59F0A] shrink-0">
                  <Check className="w-4 h-4 stroke-[3]" />
                </div>
                <span><strong>Estética e Padronização:</strong> Pintura de solo qualificada, sinalização, demarcação e organização das vagas.</span>
              </div>
              <div className="flex items-start gap-3.5 text-xs sm:text-[13.5px] text-slate-300 font-bold">
                <div className="w-6 h-6 rounded-lg bg-[#F59F0A]/20 flex items-center justify-center text-[#F59F0A] shrink-0">
                  <Check className="w-4 h-4 stroke-[3]" />
                </div>
                <span><strong>Infraestrutura:</strong> Instalação completa de quadros elétricos blindados, fiação estruturada e carregadores eficientes.</span>
              </div>
              <div className="flex items-start gap-3.5 text-xs sm:text-[13.5px] text-slate-300 font-bold">
                <div className="w-6 h-6 rounded-lg bg-[#F59F0A]/20 flex items-center justify-center text-[#F59F0A] shrink-0">
                  <Check className="w-4 h-4 stroke-[3]" />
                </div>
                <span><strong>Gestão de Consumo:</strong> Monitoramento ativo para garantir que quem carrega é quem paga, sem onerar o caixa do condomínio.</span>
              </div>
            </div>

            {/* Mini logo-badge bar */}
            <div className="pt-6 border-t border-slate-800">
              <span className="text-[10px] text-slate-400 font-bold tracking-widest uppercase block mb-3">
                ENGENHARIA COMPATÍVEL PARA TODOS CARROS ELÉTRICOS DO MERCADO
              </span>
              <div className="flex flex-wrap gap-4 items-center opacity-80">
                <span className="text-xs font-mono font-black text-slate-400">BYD AUTO</span>
                <span className="text-xs font-mono font-black text-slate-400">VOLVO EV</span>
                <span className="text-xs font-mono font-black text-slate-400">GWM ELECT</span>
                <span className="text-xs font-mono font-black text-slate-400">TESLA INT</span>
              </div>
            </div>

          </div>

          {/* Right Side: Trust Visual Cards Grid (Bento columns replacing interactive app simulation) */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
            
            {/* Trust Card 1: Installations */}
            <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 text-left space-y-4">
              <div className="w-10 h-10 rounded-xl bg-[#F59F0A]/10 flex items-center justify-center text-[#F59F0A]">
                <Zap className="w-5 h-5" />
              </div>
              <div>
                <span className="block text-3xl font-black font-display text-white tracking-tight">+ de 100</span>
                <span className="block text-xs text-slate-400 font-bold uppercase mt-1">Carregadores Ativos</span>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed font-semibold">
                Estações de recarga implantadas com sucesso em todo o território nacional.
              </p>
            </div>

            {/* Trust Card 2: Support */}
            <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 text-left space-y-4">
              <div className="w-10 h-10 rounded-xl bg-[#F59F0A]/10 flex items-center justify-center text-[#F59F0A]">
                <HeartHandshake className="w-5 h-5" />
              </div>
              <div>
                <span className="block text-3xl font-black font-display text-white tracking-tight">24H / 7</span>
                <span className="block text-xs text-slate-400 font-bold uppercase mt-1">Monitoramento</span>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed font-semibold">
                Nossa matriz de suporte assegura atendimento imediato contra quedas ou anormalidades elétricas.
              </p>
            </div>

            {/* Trust Card 3: Quality Certification */}
            <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 text-left space-y-4">
              <div className="w-10 h-10 rounded-xl bg-[#F59F0A]/10 flex items-center justify-center text-[#F59F0A]">
                <Award className="w-5 h-5" />
              </div>
              <div>
                <span className="block text-3xl font-black font-display text-white tracking-tight">100%</span>
                <span className="block text-xs text-slate-400 font-bold uppercase mt-1">Selo CREA-SC</span>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed font-semibold">
                Todos os engenheiros parceiros e laudos de viabilidade possuem registro ativo e ART homologada.
              </p>
            </div>

            {/* Trust Card 4: Uptime SLA */}
            <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 text-left space-y-4">
              <div className="w-10 h-10 rounded-xl bg-[#F59F0A]/10 flex items-center justify-center text-[#F59F0A]">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <span className="block text-3xl font-black font-display text-white tracking-tight">98%</span>
                <span className="block text-xs text-slate-400 font-bold uppercase mt-1">Uptime Operacional</span>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed font-semibold">
                Hardware e software integrados garantem disponibilidade contínua sem quebras de energia.
              </p>
            </div>

          </div>

        </div>

        {/* High Converting Action CTA */}
        <div className="mt-14 text-center text-white">
          <a 
            href="#contatos"
            className="inline-flex items-center justify-center gap-2 text-xs sm:text-sm font-black uppercase tracking-wider text-slate-950 bg-[#F59F0A] hover:bg-amber-500 px-8 py-4.5 rounded-full hover:shadow-lg transition-all duration-300"
          >
            Clique aqui e fale com a nossa equipe
          </a>
        </div>

      </div>
    </section>
  );
}
