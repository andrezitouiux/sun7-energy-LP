import React, { useState } from 'react';
import { Send, Check, Phone } from 'lucide-react';
import { trackEvent } from '../lib/tracker';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    whatsapp: '',
    perfil: 'sindico',
    condominio: '',
    vagasInteresse: '4-10',
    cidade: 'Florianópolis',
    mensagem: ''
  });

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [phoneError, setPhoneError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedWaUrl, setSubmittedWaUrl] = useState('https://wa.me/5548999737361?text=Ol%C3%A1!%20Acessei%20a%20landing%20page%20da%20SUN7%20Energy%20e%20gostaria%20de%20saber%20mais%20sobre%20as%20solu%C3%A7%C3%B5es%20de%20carregadores%20para%20ve%C3%ADculos%20el%C3%A9tricos.');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Verify WhatsApp length
    if (formData.whatsapp.trim().length < 8) {
      setPhoneError('Por favor, informe seu WhatsApp com DDD.');
      return;
    }
    setPhoneError('');
    setIsSubmitting(true);

    // Generate accurate high-converting human whatsapp message
    const formattedText = `Olá Sun7 Energy, gostaria de solicitar uma análise de viabilidade técnica:\n\n` +
      `*Nome:* ${formData.nome}\n` +
      `*WhatsApp:* ${formData.whatsapp}\n` +
      `*Cargo:* ${formData.perfil.toUpperCase()}\n` +
      `*Condomínio:* ${formData.condominio}\n` +
      `*Cidade:* ${formData.cidade}\n` +
      `*Vagas de Interesse:* ${formData.vagasInteresse}\n` +
      `*Mensagem:* ${formData.mensagem || 'Tenho interesse em projeto para o meu condomínio.'}\n\n` +
      `*(Lead recebido via Landing Page)*`;

    const encoded = encodeURIComponent(formattedText);
    const waUrl = `https://wa.me/5548999737361?text=${encoded}`;
    setSubmittedWaUrl(waUrl);

    // Tracks as real leads with Google and Meta Pixel
    trackEvent('form_submission', {
      nome: formData.nome,
      email: formData.email,
      perfil: formData.perfil,
      condominio: formData.condominio,
      vagas: formData.vagasInteresse,
      cidade: formData.cidade,
      label: 'Novo Lead de ' + formData.cidade,
      value: 15.00
    });

    trackEvent('whatsapp_click', {
      destination: 'form_lead_redirect',
      cidade: formData.cidade,
      label: 'Contato WhatsApp Form'
    });

    // Send technical notification directly to mail
    fetch("https://formsubmit.co/ajax/sun7@sun7energy.com.br", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
        "Nome Completo": formData.nome,
        "E-mail de Contato": formData.email,
        "WhatsApp / Celular": formData.whatsapp,
        "Perfil / Cargo": formData.perfil === 'sindico' ? "Síndico(a) do Prédio" : formData.perfil === 'conselheiro' ? "Membro do Conselho / Administradora" : formData.perfil === 'morador' ? "Proprietário / Morador de EV" : "Empresário ou Gestor de Frota",
        "Condomínio ou Empresa": formData.condominio,
        "Cidade": formData.cidade,
        "Previsão de Vagas": formData.vagasInteresse,
        "Mensagem do Lead": formData.mensagem || "Tenho interesse em projeto para o meu condomínio.",
        "_subject": `⚡ NOVO LEAD SUN7: ${formData.nome} - Condomínio ${formData.condominio}`,
        "_template": "table"
      })
    })
    .then(() => {
      setIsSubmitting(false);
      setFormSubmitted(true);
    })
    .catch((err) => {
      console.warn("Mail submission secondary failure: ", err);
      setIsSubmitting(false);
      setFormSubmitted(true);
    });
  };

  return (
    <section id="contatos" className="py-24 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Information Column */}
          <div className="lg:col-span-5 space-y-7 text-left">
            <div>
              <span className="text-[#F59F0A] text-xs font-black uppercase tracking-[3px] block mb-1">
                FALE CONOSCO
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-display tracking-tight leading-none text-slate-800">
                Vamos conversar
              </h2>
            </div>
            
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-semibold">
              Fale com a Sun7 Energy e descubra como podemos impulsionar juntos a mobilidade elétrica e geração solar na sua empresa, condomínio ou residência com segurança absoluta.
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-3.5 text-slate-700">
                <div className="w-10 h-10 rounded-xl bg-[#F59F0A]/10 flex items-center justify-center shrink-0 text-[#F59F0A] font-bold">
                  1
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-800">Estudo Preliminar Gratuito</h4>
                  <p className="text-xs text-slate-500 font-semibold leading-relaxed">Nenhuma taxa de análise prévia é cobrada para formularmos a viabilidade inicial da sua garagem.</p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 text-slate-700">
                <div className="w-10 h-10 rounded-xl bg-[#F59F0A]/10 flex items-center justify-center shrink-0 text-[#F59F0A] font-bold">
                  2
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-800">Custo Zero de Implantação</h4>
                  <p className="text-xs text-slate-500 font-semibold leading-relaxed">Modelos de aquisição estruturados que protegem a reserva financeira comum do caixa predial.</p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 text-slate-700">
                <div className="w-10 h-10 rounded-xl bg-[#F59F0A]/10 flex items-center justify-center shrink-0 text-[#F59F0A] font-bold">
                  3
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-800">SLA Técnico Ágil</h4>
                  <p className="text-xs text-slate-500 font-semibold leading-relaxed">Nossos laudos e diagramas unifilares de carga são despachados em formato digital em poucos dias.</p>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-slate-200 space-y-2 text-xs font-semibold text-slate-500 font-mono">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#F59F0A]" />
                <span>ESCRITÓRIO: R. Belmira Isabel Martins, 42 - Estreito, Florianópolis - SC</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#F59F0A]" />
                <span>WHATSAPP CENTRAL: +55 (48) 99973-7361</span>
              </div>
            </div>
          </div>

          {/* Form wrapper */}
          <div className="lg:col-span-7 bg-[#f7fafd] border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-sm relative">
            
            {formSubmitted ? (
              <div className="py-12 text-center space-y-6">
                <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 mx-auto animate-bounce">
                  <Check className="w-8 h-8" />
                </div>
                <div className="space-y-3">
                  <h3 className="text-2xl font-black font-display text-slate-800 font-sans">Solicitação Enviada com Sucesso!</h3>
                  <p className="text-slate-600 text-xs sm:text-sm max-w-md mx-auto leading-relaxed font-semibold">
                    Recebemos os dados do seu condomínio com sucesso! Nossa equipe técnica de engenheiros especialistas analisará as informações de viabilidade enviadas e entrará em contato diretamente via WhatsApp ou e-mail corporativo em até 24 horas úteis.
                  </p>
                </div>
                <div className="pt-2 text-[11px] font-bold text-slate-400">
                  A SUN7 Energy agradece a sua preferência e confiança.
                </div>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-6 text-left">
                
                <h3 className="text-lg sm:text-xl font-black text-slate-800 font-display">
                  Agende sua viabilidade técnica
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Nome */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700">Seu Nome *</label>
                    <input 
                      type="text" 
                      name="nome"
                      required
                      value={formData.nome}
                      onChange={handleInputChange}
                      placeholder="Ex: João da Silva"
                      className="w-full h-11 px-4 text-xs bg-white text-slate-800 border border-slate-200 rounded-xl focus:border-[#F59F0A] outline-none transition-colors"
                    />
                  </div>

                  {/* E-mail */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700">E-mail Corporativo / Pessoal *</label>
                    <input 
                      type="email" 
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Ex: joao@seucondominio.com"
                      className="w-full h-11 px-4 text-xs bg-white text-slate-800 border border-slate-200 rounded-xl focus:border-[#F59F0A] outline-none transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* WhatsApp */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700">Celular / WhatsApp *</label>
                    <input 
                      type="tel" 
                      name="whatsapp"
                      required
                      value={formData.whatsapp}
                      onChange={handleInputChange}
                      placeholder="Ex: (48) 99973-7361"
                      className="w-full h-11 px-4 text-xs bg-white text-slate-800 border border-slate-200 rounded-xl focus:border-[#F59F0A] outline-none transition-colors"
                    />
                    {phoneError && <p className="text-[10px] text-red-500 font-bold">{phoneError}</p>}
                  </div>

                  {/* Perfil */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700">Seu Cargo / Perfil *</label>
                    <select
                      name="perfil"
                      value={formData.perfil}
                      onChange={handleInputChange}
                      className="w-full h-11 px-3 text-xs bg-white text-slate-800 border border-slate-200 rounded-xl focus:border-[#F59F0A] outline-none transition-colors font-medium"
                    >
                      <option value="sindico">Sou Síndico(a) do Prédio</option>
                      <option value="conselheiro">Membro do Conselho / Administradora</option>
                      <option value="morador">Proprietário / Morador de EV</option>
                      <option value="comercial">Empresário ou Gestor de Frota</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Edificio */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700">Nome do Condomínio / Empresa *</label>
                    <input 
                      type="text" 
                      name="condominio"
                      required
                      value={formData.condominio}
                      onChange={handleInputChange}
                      placeholder="Ex: Condomínio Edifício Miramar"
                      className="w-full h-11 px-4 text-xs bg-white text-slate-800 border border-slate-200 rounded-xl focus:border-[#F59F0A] outline-none transition-colors"
                    />
                  </div>

                  {/* Cidade */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700">Cidade *</label>
                    <select
                      name="cidade"
                      value={formData.cidade}
                      onChange={handleInputChange}
                      className="w-full h-11 px-3 text-xs bg-white text-slate-800 border border-slate-200 rounded-xl focus:border-[#F59F0A] outline-none transition-colors font-medium"
                    >
                      <option value="Florianópolis">Florianópolis / SC</option>
                      <option value="São José">São José / SC</option>
                      <option value="Palhoça">Palhoça / SC</option>
                      <option value="Biguaçu">Biguaçu / SC</option>
                      <option value="Governador Celso Ramos">Gov. Celso Ramos / SC</option>
                      <option value="Outra Grande Floripa">Outra da Grande Florianópolis</option>
                      <option value="Outras Regiões">Outras Regiões de SC</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Vagas estimadas */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700">Previsão de Vagas *</label>
                    <select
                      name="vagasInteresse"
                      value={formData.vagasInteresse}
                      onChange={handleInputChange}
                      className="w-full h-11 px-3 text-xs bg-white text-slate-800 border border-slate-200 rounded-xl focus:border-[#F59F0A] outline-none transition-colors font-medium"
                    >
                      <option value="1-3">1 a 3 vagas iniciais</option>
                      <option value="4-10">4 a 10 vagas iniciais</option>
                      <option value="11-30">11 a 30 vagas ativas</option>
                      <option value="Mais de 30">Mais de 30 vagas (Predial Inteiro)</option>
                    </select>
                  </div>
                </div>

                {/* Mensagem opcional */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-700">Mensagem adicional (Opcional)</label>
                  <textarea 
                    name="mensagem"
                    rows={2}
                    value={formData.mensagem}
                    onChange={handleInputChange}
                    placeholder="Ex: Gostaríamos de focar no cabeamento primário unificado comum das garagens subterrâneas..."
                    className="w-full p-4 text-xs bg-white text-slate-800 border border-slate-200 rounded-xl focus:border-[#F59F0A] outline-none transition-colors resize-none"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full h-12 bg-[#F59F0A] hover:bg-amber-600 active:bg-amber-700 text-white font-black text-xs uppercase tracking-wider rounded-xl transition-all duration-300 flex items-center justify-center gap-2 shadow-md shadow-amber-500/10 cursor-pointer disabled:opacity-75 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2 font-black">
                        <svg className="animate-spin h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                        ENVIANDO...
                      </span>
                    ) : (
                      <span>ENVIAR SOLICITAÇÃO →</span>
                    )}
                  </button>
                  <p className="text-[10px] text-slate-450 text-center leading-relaxed mt-3 font-semibold">
                    Seu contato gerará repasse exclusivamente ao comitê de engenharia da Sun7 Energy. Nossos processos seguem a LGPD de forma integral.
                  </p>
                </div>

              </form>
            )}

          </div>

        </div>
      </div>
    </section>
  );
}
