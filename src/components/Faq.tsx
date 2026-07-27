import React, { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';

export default function Faq() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqItems = [
    {
      q: "O condomínio terá despesas elétricas com as recargas dos carros?",
      a: "Não. Nós realizamos a ligação física da estação de recarga diretamente ao medidor (relógio) de energia individual de cada apartamento. Isso significa que a eletricidade consumida pelo carro elétrico vai direto para a fatura de luz mensal daquele morador específico. Não há qualquer rateio, divisão de despesas ou dor de cabeça na prestação de contas do condomínio."
    },
    {
      q: "Como é feita a homologação do carregador veicular junto à CELESC?",
      a: "A equipe de engenharia da Sun7 Energy cuida de 100% de todo o processo regulatório em Santa Catarina. Elaboramos o projeto com engenheiro especializado, avaliamos o aumento de demanda elétrica, emitimos a ART (Anotação de Responsabilidade Técnica) junto ao CREA-SC, protocolamos o processo de anuência de carga de recarga e gerenciamos até a vistoria técnica e liberação final pela CELESC."
    },
    {
      q: "E se a garagem do prédio não tiver espaço ou fiação adequada?",
      a: "Nossa engenharia analisa a viabilidade técnica e constrói uma espinha dorsal unificada (barramento blindado ou calhas aéreas). Essa infraestrutura primária inteligente atende a todas as vagas do condomínio, permitindo que cada morador instale o seu carregador privativo de forma limpa e organizada no momento de sua preferência."
    },
    {
      q: "Quais modelos de carros elétricos são compatíveis?",
      a: "Nossas estações usam conectores padrão Tipo 2 (europeu comum), homologados por órgãos de trânsito brasileiros. Isso garante 100% de compatibilidade técnica ativa com modelos BYD (Dolphin, Yuan, Song), GWM (Ora, Haval), Volvo, BMW, Audi, Porsche e Tesla."
    },
    {
      q: "Existe perigo de sobrecarga ou curto-circuito na rede predial?",
      a: "Nenhum. Nossos projetos possuem disjuntores de corte automático individual, DPS regulizados, fiação blindada antichama e medidores integrados para garantir que a carga simultânea de múltiplos carros nunca ultrapasse os limites de segurança da fiação predial contratada na concessionária."
    }
  ];

  return (
    <section id="faq" className="py-20 bg-[#f7fafd] border-t border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16 space-y-4">
          <span className="text-xs uppercase tracking-[3px] text-[#F59F0A] font-bold block">SUPORTE EXPLICATIVO</span>
          <h2 className="text-3xl font-extrabold font-display leading-tight text-slate-800">
            Dúvidas Frequentes sobre Projetos de Recarga
          </h2>
          <p className="text-slate-600 text-sm max-w-xl mx-auto">
            Tem alguma dúvida de ordem jurídica ou de engenharia? Encontre as respostas mais comuns que síndicos e condôminos costumam fazer.
          </p>
        </div>

        <div className="space-y-4">
          {faqItems.map((item, idx) => {
            const isOpen = openFaq === idx;
            return (
              <div 
                key={idx} 
                className="bg-white border border-slate-200 rounded-2xl overflow-hidden transition-all duration-300 shadow-sm"
              >
                <button
                  onClick={() => setOpenFaq(isOpen ? null : idx)}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 font-semibold text-slate-800 hover:text-[#F59F0A] transition-colors"
                >
                  <span className="font-display sm:text-base text-sm leading-snug">{item.q}</span>
                  <div className={`w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center shrink-0 border border-slate-100 ${isOpen ? 'text-[#F59F0A]' : 'text-slate-500'}`}>
                    {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-6 sm:px-6 text-sm text-slate-600 leading-relaxed border-t border-slate-50 pt-4 bg-slate-50/50">
                    {item.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center p-6 bg-white border border-slate-200 rounded-3xl max-w-2xl mx-auto shadow-sm">
          <HelpCircle className="w-7 h-7 text-[#F59F0A] mx-auto mb-2" />
          <p className="text-xs text-slate-600 font-medium">
            Sua dúvida não foi listada aqui? Fale diretamente com o nosso time técnico.
          </p>
          <a 
            href="#contatos"
            className="text-xs font-bold text-[#F59F0A] hover:underline block mt-1.5"
          >
            Fazer uma Pergunta Direta no WhatsApp ✦
          </a>
        </div>

      </div>
    </section>
  );
}
