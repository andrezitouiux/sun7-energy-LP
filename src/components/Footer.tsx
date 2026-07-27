import React, { useState } from 'react';
import { Share2, Clock, MapPin, ShieldCheck, Mail, Phone, ExternalLink, Linkedin, Youtube, Instagram, X } from 'lucide-react';
import { trackEvent } from '../lib/tracker';

export default function Footer() {
  const [modalType, setModalType] = useState<'terms' | 'privacy' | null>(null);

  const openModal = (type: 'terms' | 'privacy') => {
    setModalType(type);
    trackEvent('footer_modal_open', { type });
  };

  const closeModal = () => {
    setModalType(null);
  };

  return (
    <footer className="bg-slate-900 text-slate-400 py-16 border-t border-slate-800 relative z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 pb-12 border-b border-slate-800 text-left">
          
          {/* Logo element */}
          <div className="space-y-5 md:col-span-1">
            <a href="#" className="flex items-center gap-2 group">
              <img 
                src="https://lh3.googleusercontent.com/d/1MH1TpFF13ZloYmdIMN-Z-UWEV3HMkug3" 
                alt="SUN7 Energy Logo"
                className="h-14 w-auto object-contain max-w-[220px]"
                referrerPolicy="no-referrer"
                loading="lazy"
                width="220"
                height="56"
              />
            </a>
            <p className="text-xs text-slate-400 leading-relaxed font-semibold">
              Especialistas em energia solar fotovoltaica e carregadores elétricos turnkey, do projeto de engenharia elétrica à homologação de recarga na CELESC na Grande Florianópolis.
            </p>
            
            {/* Social Icons row (clickable icons only) */}
            <div className="flex items-center gap-3 pt-2">
              <a 
                href="https://www.instagram.com/sun7energy/" 
                target="_blank" 
                rel="noopener noreferrer" 
                onClick={() => trackEvent('social_click', { platform: 'instagram' })}
                className="w-9 h-9 rounded-xl bg-slate-800 text-slate-400 hover:bg-[#F59F0A] hover:text-slate-950 transition-all duration-200 flex items-center justify-center shadow-lg border border-slate-700/50"
                title="Instagram"
                aria-label="Instagram SUN7 Energy"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a 
                href="https://www.linkedin.com/company/sun7-energy/about/" 
                target="_blank" 
                rel="noopener noreferrer" 
                onClick={() => trackEvent('social_click', { platform: 'linkedin' })}
                className="w-9 h-9 rounded-xl bg-slate-800 text-slate-400 hover:bg-[#F59F0A] hover:text-slate-950 transition-all duration-200 flex items-center justify-center shadow-lg border border-slate-700/50"
                title="LinkedIn"
                aria-label="LinkedIn SUN7 Energy"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a 
                href="https://www.youtube.com/@SUN7ENERGYBRASIL" 
                target="_blank" 
                rel="noopener noreferrer" 
                onClick={() => trackEvent('social_click', { platform: 'youtube' })}
                className="w-9 h-9 rounded-xl bg-slate-800 text-slate-400 hover:bg-[#F59F0A] hover:text-slate-950 transition-all duration-200 flex items-center justify-center shadow-lg border border-slate-700/50"
                title="YouTube"
                aria-label="YouTube SUN7 Energy"
              >
                <Youtube className="w-4 h-4" />
              </a>
              <a 
                href="https://www.tiktok.com/@sun7energy" 
                target="_blank" 
                rel="noopener noreferrer" 
                onClick={() => trackEvent('social_click', { platform: 'tiktok' })}
                className="w-9 h-9 rounded-xl bg-slate-800 text-slate-400 hover:bg-[#F59F0A] hover:text-slate-950 transition-all duration-200 flex items-center justify-center shadow-lg border border-slate-700/50"
                title="TikTok"
                aria-label="TikTok SUN7 Energy"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.17-2.86-.6-4.12-1.31a6.47 6.47 0 0 1-1.87-1.5c-.02 1.51-.02 3.01-.03 4.52-.08 3.51-2.02 6.91-5.4 8.01-3.66 1.19-7.91-.45-9.63-3.92C-.32 13.9 1.12 9.22 4.96 7.68c1.01-.4 2.1-.55 3.19-.51v4.07c-1.28-.17-2.73.17-3.63 1.09-1.12 1.15-1.15 3.14-.11 4.41 1.08 1.32 3.12 1.51 4.43.47.78-.62 1.15-1.61 1.16-2.58l.05-14.62Z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Links 1 */}
          <div className="space-y-4">
            <h4 className="text-xs uppercase font-extrabold tracking-wider text-white">Acesso Rápido</h4>
            <ul className="space-y-2 text-xs font-semibold">
              <li><a href="#" className="hover:text-white transition-colors">Início</a></li>
              <li><a href="#solucoes" className="hover:text-white transition-colors">Soluções</a></li>
              <li><a href="#diferenciais" className="hover:text-white transition-colors">Diferenciais Técnicos</a></li>
              <li><a href="#custos" className="hover:text-white transition-colors">Simulador de Economia</a></li>
              <li><a href="#contatos" className="hover:text-white transition-colors">Fale com Engenheiro</a></li>
            </ul>
          </div>

          {/* Links 2 - SEO Keywords Optimized Recarga Segura */}
          <div className="space-y-4">
            <h4 className="text-xs uppercase font-extrabold tracking-wider text-white">Recarga Segura SC</h4>
            <ul className="space-y-2 text-xs font-semibold">
              <li>
                <a href="#solucoes" className="text-slate-400 hover:text-white transition-colors block">
                  Instalação de Wallbox Predial Certificada
                </a>
              </li>
              <li>
                <a href="#solucoes" className="text-slate-400 hover:text-white transition-colors block">
                  Estação de Recarga Rápida BYD, BMW &amp; GWM
                </a>
              </li>
              <li>
                <a href="#diferenciais" className="text-slate-400 hover:text-white transition-colors block">
                  Projeto de Proteção Elétrica e Aterramento
                </a>
              </li>
              <li>
                <a href="#solucoes" className="text-slate-400 hover:text-white transition-colors block">
                  Medição Individualizada com Software OCPP
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="space-y-4">
            <h4 className="text-xs uppercase font-extrabold tracking-wider text-white">Fale Conosco</h4>
            <ul className="space-y-2.5 text-xs font-semibold">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#F59F0A] shrink-0" />
                <span>R. Belmira Isabel Martins, 42 - Estreito, Florianópolis - SC</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#F59F0A] shrink-0" />
                <span>(48) 99973-7361</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#F59F0A] shrink-0" />
                <span>comercial@sun7energy.com.br</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Closing details with required copyright from screenshot */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[10.5px] text-slate-500 text-left font-medium">
          <div>
            <p>© {new Date().getFullYear()} SUN7 Energy. Todos os direitos reservados. CNPJ: 37.395.997/0001-36</p>
            <p className="mt-1 flex flex-wrap items-center gap-3 text-[10px]">
              <a href="https://www.sun7energy.com.br/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center gap-1">
                <span>Website Oficial da Empresa</span>
                <ExternalLink className="w-3 h-3 text-slate-600" />
              </a>
            </p>
          </div>
          <div className="flex gap-4">
            <button 
              onClick={() => openModal('terms')} 
              className="hover:text-white transition-colors cursor-pointer text-[11px] font-bold text-slate-400 bg-transparent border-none appearance-none"
            >
              Termos de Uso
            </button>
            <button 
              onClick={() => openModal('privacy')} 
              className="hover:text-white transition-colors cursor-pointer text-[11px] font-bold text-slate-400 bg-transparent border-none appearance-none"
            >
              Políticas de Privacidade
            </button>
          </div>
        </div>

      </div>

      {/* Legally robust & SEO optimized Modal Overlay */}
      {modalType && (
        <div className="fixed inset-0 bg-slate-950/80 backdrop-blur-sm z-[9999] flex items-center justify-center p-4">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl max-w-2xl w-full max-h-[80vh] flex flex-col shadow-2xl relative text-left">
            {/* Modal Header */}
            <div className="p-6 border-b border-slate-800 flex items-center justify-between">
              <h3 className="text-base font-black text-white uppercase tracking-wider">
                {modalType === 'terms' ? 'Termos de Uso - SUN7 Energy' : 'Políticas de Privacidade - SUN7 Energy'}
              </h3>
              <button 
                onClick={closeModal}
                className="p-1.5 rounded-lg bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition-colors"
                aria-label="Fechar modal"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Modal Scrollable Content */}
            <div className="p-6 overflow-y-auto space-y-4 text-xs text-slate-300 leading-relaxed font-medium separator">
              {modalType === 'terms' ? (
                <>
                  <p className="font-bold text-sm text-[#F59F0A] mb-2 font-display">
                    TERMOS DE SERVIÇO E USO DE CARREGADORES VEICULARES EM CONDOMÍNIOS
                  </p>
                  <p>
                    Bem-vindo aos Termos de Uso da <strong>SUN7 Energy</strong>. Este documento regulamenta a utilização dos nossos serviços de consultoria, desenvolvimento de projetos de engenharia elétrica, venda, instalação e posterior uso técnico das estações inteligentes de carregamento para veículos elétricos (VE) nos condomínios atendidos em Santa Catarina.
                  </p>
                  <h5 className="font-bold text-white text-[13px] pt-2">1. Objeto e Serviços Adquiridos</h5>
                  <p>
                    A SUN7 Energy executa serviços integrados no modelo <i>turnkey</i> para viabilização de infraestruturas elétricas de recarga veicular em áreas comuns e garagens de condomínios residenciais e comerciais. Nossos serviços englobam: vistorias de barramento, cálculos de demanda, instalação técnica de painéis de segurança com disjuntores magnéticos dedicados, emissão de ART assinada por engenheiro elétrico registrado no CREA-SC e processamento de anuência regulatória frente à concessionária CELESC.
                  </p>
                  <h5 className="font-bold text-white text-[13px] pt-2">2. Normas de Segurança Obrigatórias</h5>
                  <p>
                    O morador e o condomínio entendem que cargas elétricas de fluxo contínuo de alta amperagem (como carregadores de 7.4 kW, 11 kW ou 22 kW) exigem estrito respeito às normas brasileiras da ABNT. É terminantemente proibido o uso de adaptadores não compatíveis, fiações improvisadas tipo "extensão de tomada" ou qualquer modificação manual no circuito entregue pela SUN7 Energy. O uso indevido anula imediatamente as garantias e isenta a SUN7 Energy de responsabilidades cíveis ou criminais sobre sinistros.
                  </p>
                  <h5 className="font-bold text-white text-[13px] pt-2">3. Rateio Tarifário e Medição Inteligente</h5>
                  <p>
                    O sistema de cobrança por uso se apoia em medição inteligente padronizada (pelas diretrizes OCPP quando aplicável). A SUN7 Energy se isenta de erros operacionais causados pela rede de internet interna do condomínio fornecida por terceiros, a qual é responsável por transmitir as atualizações de kWh para a plataforma. O rateio tarifário obedece rigorosamente às tarifas atuais homologadas pela CELESC (inclusive bandeiras tarifárias em vigor no estado de Santa Catarina).
                  </p>
                  <h5 className="font-bold text-white text-[13px] pt-2">4. Atualizações Legais</h5>
                  <p>
                    Reservamo-nos o direito de alterar estes termos unilateralmente para adequá-los a novas instruções técnicas do Corpo de Bombeiros Militar de Santa Catarina (CBMSC) ou novas normativas de recarga veicular em garagens coletivas expedidas pela ANEEL.
                  </p>
                </>
              ) : (
                <>
                  <p className="font-bold text-sm text-[#F59F0A] mb-2 font-display">
                    POLÍTICA DE PRIVACIDADE E PROTEÇÃO DE DADOS (LGPD) PARA RECARGA VEICULAR
                  </p>
                  <p>
                    A <strong>SUN7 Energy</strong> (inscrita sob o CNPJ 37.395.997/0001-36 em Florianópolis/SC) possui o absoluto compromisso com a confidencialidade e segurança dos dados pessoais dos moradores, síndicos e administradoras de condomínio em conformidade com a <strong>Lei Geral de Proteção de Dados (Lei nº 13.709/2018 - LGPD)</strong>.
                  </p>
                  <h5 className="font-bold text-white text-[13px] pt-2">1. Informações que Coletamos de Forma Legítima</h5>
                  <p>
                    Para permitir o mapeamento de carga e a divisão automatizada de custos de recarga por apartamento, coletamos informações operacionais cruciais como:
                  </p>
                  <ul className="list-disc pl-5 space-y-1.5">
                    <li>Nome completo dos moradores usuários das estações de recarga elétrica;</li>
                    <li>Identificação da unidade de moradia (bloco, apartamento ou vaga privativa);</li>
                    <li>Registro de consumo em kWh e histórico timestamp de início e fim da sessão de carregamento;</li>
                    <li>Dados de contato (e-mail e telefone celular WhatsApp) fornecidos voluntariamente via formulários web.</li>
                  </ul>
                  <h5 className="font-bold text-white text-[13px] pt-2">2. Finalidade Exclusiva do Tratamento dos Dados</h5>
                  <p>
                    Os dados são processados com a única finalidade de realizar de forma automatizada o cálculo e divisão financeira do consumo de energia no barramento comum, evitando atritos e injustiças de rateio entre vizinhos. Os dados brutos de energia consumida são transmitidos para a administradora do condomínio ou exibidos no relatório do síndico para lançamento das cobranças individuais nas faturas mensais do condomínio.
                  </p>
                  <h5 className="font-bold text-white text-[13px] pt-2">3. Proteção das Fontes de Dados</h5>
                  <p>
                    Trabalhamos com bancos de dados criptografados hospedados localmente ou em em nuvens de extrema segurança informática, prevenindo vazamentos cibernéticos. O acesso aos bancos de consumo de cada morador é limitado à equipe interna de suporte da SUN7 Energy e ao corpo diretivo autorizado do condomínio (síndico ou conselheiros).
                  </p>
                  <h5 className="font-bold text-white text-[13px] pt-2">4. Direitos sob a LGPD</h5>
                  <p>
                    Nos termos da legislação nacional aplicável, todo usuário ou morador tem o direito de solicitar a correção de dados incorretos, interrupção na coleta ou exclusão integral de seus registros pessoais ao se deparar com a rescisão ou encerramento do contrato de uso do carregador enviando e-mail para <span className="text-[#F59F0A]">comercial@sun7energy.com.br</span>.
                  </p>
                </>
              )}
            </div>

            {/* Modal Footer */}
            <div className="p-4 border-t border-slate-800 flex justify-end bg-slate-950/25 rounded-b-2xl">
              <button 
                onClick={closeModal}
                className="px-5 py-2.5 rounded-lg bg-[#F59F0A] text-slate-950 font-extrabold hover:bg-amber-500 transition-colors text-xs uppercase tracking-wider"
              >
                Compreendi e Aceito
              </button>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
}
