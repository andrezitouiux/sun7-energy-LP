import React from 'react';
import { 
  FileText, Zap, Home, Building, ShieldCheck, Activity, CreditCard 
} from 'lucide-react';

export default function Solutions() {
  const solutionsList = [
    {
      icon: <Building className="w-5 h-5 text-[#F59F0A]" />,
      title: "Infraestrutura Geral (Síndicos)",
      description: "Viabilizamos o projeto elétrico estrutural, eletrocalhas e aprovação técnica para que o condomínio esteja 100% pronto e seguro para recarga veicular inteligente."
    },
    {
      icon: <Home className="w-5 h-5 text-[#F59F0A]" />,
      title: "Vagas Individuais (Condôminos)",
      description: "Instalação técnica de carregadores wallbox individuais direto na vaga privativa do morador que comprou ou planeja comprar um carro elétrico."
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-[#F59F0A]" />,
      title: "Ligação Direta (Sem Rateio)",
      description: "Conexão física da estação de carregamento diretamente no medidor elétrico do próprio apartamento do morador. Sem rateio de conta de luz entre vizinhos."
    },
    {
      icon: <Zap className="w-5 h-5 text-[#F59F0A]" />,
      title: "Eletropostos e Recarga Pública",
      description: "Infraestrutura de carregamento de alto desempenho para comércios, mercados, hotéis e shoppings. Excelente para atrair clientes e reter público."
    },
    {
      icon: <FileText className="w-5 h-5 text-[#F59F0A]" />,
      title: "Projeto de Engenharia Elétrica",
      description: "Desenvolvimento de diagramas unifilares detalhados, cálculos de barramento e emissão obrigatória de ART por engenheiro elétrico credenciado."
    },
    {
      icon: <Activity className="w-5 h-5 text-[#F59F0A]" />,
      title: "Análise de Carga & CELESC",
      description: "Processamento completo da homologação e consulta de acesso para aumento de demanda junto à concessionária de energia de Santa Catarina."
    }
  ];

  return (
    <section id="solucoes" className="py-24 bg-[#f7fafd] border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl text-left space-y-3">
            <span className="text-[#F59F0A] text-xs font-black uppercase tracking-[3px] block">
              Projetos e Equipamentos Certificados
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-display tracking-tight leading-tight text-slate-800">
              Soluções completas de recarga de carros elétricos para condomínios.
            </h2>
          </div>
          <div className="shrink-0 text-left lg:text-right font-sans">
            <p className="text-slate-600 text-xs sm:text-sm max-w-md mb-4 leading-relaxed font-semibold">
              Da engenharia elétrica e homologação CELESC à instalação segura de carregadores wallbox com controle individual de consumo pelo aplicativo.
            </p>
            <a 
              href="#contatos" 
              className="inline-flex items-center justify-center text-xs font-black uppercase tracking-wider text-white bg-[#F59F0A] hover:bg-amber-600 px-6 h-12 rounded-full transition-all duration-200 shadow-md shadow-amber-500/10"
            >
              Falar com um especialista
            </a>
          </div>
        </div>

        {/* Outer Flex/Grid Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-11 items-stretch">
          
          {/* Left Column: 6-Grid Cards */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {solutionsList.map((sol, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl p-6 border border-slate-200 hover:border-[#F59F0A]/35 hover:shadow-lg hover:shadow-amber-500/5 transition-all duration-300 group flex flex-col justify-start text-left space-y-4"
              >
                <div className="w-10 h-10 rounded-xl bg-[#F59F0A]/10 border border-[#F59F0A]/20 flex items-center justify-center transform group-hover:scale-105 transition-all duration-300">
                  {sol.icon}
                </div>
                <h3 className="text-base sm:text-lg font-black font-display text-slate-800 leading-snug">
                  {sol.title}
                </h3>
                <p className="text-xs sm:text-[13px] text-slate-500 leading-relaxed font-semibold">
                  {sol.description}
                </p>
              </div>
            ))}
          </div>

          {/* Right Column: Syndic's Partner Card Design */}
          <div className="lg:col-span-4 flex flex-col justify-between bg-slate-900 text-white rounded-3xl p-8 border border-slate-800 shadow-xl relative overflow-hidden group min-h-[440px]">
            {/* Spotlight Accent */}
            <div className="absolute top-0 right-0 w-36 h-36 bg-[#F59F0A]/20 rounded-full blur-[40px] pointer-events-none" />
            <div className="absolute -bottom-10 -left-10 w-44 h-44 bg-blue-500/10 rounded-full blur-[50px] pointer-events-none" />

            <div className="relative z-10 space-y-6">
              <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-[#F59F0A]/30 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider text-[#F59F0A]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#F59F0A] animate-pulse" />
                <span>Parceiro do Síndico</span>
              </div>
              <h3 className="text-2xl font-black font-display text-white leading-tight">
                Paz de espírito do início ao fim: parceria definitiva.
              </h3>
              <p className="text-xs sm:text-[13px] text-slate-400 font-medium leading-relaxed">
                Assumimos toda a complexidade técnica: homologação da concessionária, elaboração do projeto elétrico, execução segura e operação automática das cobranças. O síndico sem qualquer dor de cabeça na gestão de recarga.
              </p>
            </div>

            {/* Simulated Totem Device with Image reference overlay inside high-end card */}
            <div className="relative mt-8 group-hover:scale-[1.01] transition-transform duration-300">
              <div className="w-full h-44 rounded-2xl overflow-hidden border border-slate-700/60 relative bg-slate-850">
                <img 
                  src="/src/assets/images/step_03_execution_1781535304970.jpg" 
                  className="w-full h-full object-cover filter brightness-[0.80]" 
                  alt="Sun7 Energy Projetos Condomínios" 
                  loading="lazy"
                  width="400"
                  height="176"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute bottom-3 left-3 bg-slate-900/85 backdrop-blur border border-slate-700 mx-auto px-3 py-1.5 rounded-lg text-[9.5px] space-y-0.5">
                  <span className="block text-slate-300 font-extrabold uppercase leading-none text-[8px] tracking-wider">CONDOMÍNIO PROTEGIDO</span>
                  <span className="block text-white font-black font-mono">SUPORTE &amp; GESTÃO DIÁRIA</span>
                </div>
              </div>
            </div>

            <div className="relative z-10 pt-6 mt-6 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
              <span className="font-extrabold text-[10px] uppercase tracking-wider">Zero Custo de Caixa Predial</span>
              <a href="#contatos" className="text-[#F59F0A] font-black tracking-wider uppercase text-[10px] hover:underline flex items-center gap-1">
                Falar Conosco →
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
