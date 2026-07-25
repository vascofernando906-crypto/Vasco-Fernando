import React, { useState } from 'react';
import { COMPANY_INFO } from '../data/constants';
import { Phone, MessageSquare, Facebook, Send, CheckCircle2, ShieldCheck, Loader2, AlertCircle } from 'lucide-react';
import { sendContactEmail, isValidEmail } from '../services/emailService';

export const ContactView: React.FC = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [propertyType, setPropertyType] = useState('Residencial');
  const [service, setService] = useState('Câmeras');
  const [message, setMessage] = useState('');

  const [isLoading, setIsLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);
  const [fieldErrors, setFieldErrors] = useState<{ [key: string]: string }>({});

  const validateForm = () => {
    const errors: { [key: string]: string } = {};

    if (!name.trim()) {
      errors.name = 'Nome é obrigatório.';
    }

    if (!phone.trim()) {
      errors.phone = 'Telefone é obrigatório.';
    }

    if (!email.trim()) {
      errors.email = 'E-mail é obrigatório.';
    } else if (!isValidEmail(email)) {
      errors.email = 'Por favor, insira um e-mail válido.';
    }

    if (!service.trim()) {
      errors.service = 'Serviço é obrigatório.';
    }

    if (!message.trim()) {
      errors.message = 'Mensagem é obrigatória.';
    }

    setFieldErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatusMessage(null);

    if (!validateForm()) {
      return;
    }

    setIsLoading(true);

    try {
      await sendContactEmail({
        name,
        phone,
        email,
        property: propertyType,
        service,
        message,
      });

      setStatusMessage({
        type: 'success',
        text: 'Pedido enviado com sucesso. Entraremos em contacto em breve.',
      });

      // Clear all form fields
      setName('');
      setPhone('');
      setEmail('');
      setPropertyType('Residencial');
      setService('Câmeras');
      setMessage('');
      setFieldErrors({});
    } catch (error) {
      console.error('Erro ao enviar pedido via EmailJS:', error);
      setStatusMessage({
        type: 'error',
        text: 'Erro ao enviar o pedido. Tente novamente.',
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleSendViaWhatsApp = () => {
    const text = `Olá VONA Moçambique, solicito orçamento:\n\n` +
      `- *Nome:* ${name || '[Não Informado]'}\n` +
      `- *Telefone:* ${phone || '[Não Informado]'}\n` +
      `- *Email:* ${email || '[Não Informado]'}\n` +
      `- *Tipo de Imóvel:* ${propertyType}\n` +
      `- *Serviço Pretendido:* ${service}\n` +
      `- *Mensagem:* ${message || '[Sem mensagem]'}`;

    window.open(`https://wa.me/258845698458?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <div className="space-y-16 pb-16">
      
      {/* Header Banner */}
      <section className="text-center space-y-3 pt-6 max-w-3xl mx-auto">
        <span className="text-xs font-bold text-sky-400 uppercase tracking-widest bg-sky-500/10 px-3 py-1 rounded-full border border-sky-500/20">
          Contacto Direto
        </span>
        <h1 className="text-3xl sm:text-4xl font-black text-white font-display">
          FALE COM A VONA MOÇAMBIQUE
        </h1>
        <p className="text-base font-semibold text-sky-300">
          Estamos prontos para ajudar a proteger o que é importante para você.
        </p>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-10">
        
        {/* Left Column: Direct Info & Social Buttons */}
        <div className="lg:col-span-5 space-y-6">
          
          <div className="bg-slate-900 border border-slate-800 p-6 rounded-3xl space-y-6">
            <h2 className="text-base font-bold text-white font-display uppercase tracking-wider border-b border-slate-800 pb-3">
              Canais Oficiais
            </h2>

            {/* Phone & WhatsApp Card */}
            <div className="space-y-3">
              <div className="flex items-start space-x-3 bg-slate-950 p-4 rounded-2xl border border-slate-800">
                <div className="p-2.5 rounded-xl bg-sky-500/10 text-sky-400 border border-sky-500/30">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[11px] font-bold text-slate-400 uppercase">Telefone Principal</p>
                  <a href={`tel:${COMPANY_INFO.phoneRaw}`} className="text-base font-extrabold text-white hover:text-sky-400">
                    {COMPANY_INFO.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-3 bg-slate-950 p-4 rounded-2xl border border-slate-800">
                <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[11px] font-bold text-slate-400 uppercase">WhatsApp Oficial 24h</p>
                  <a href={COMPANY_INFO.whatsappUrl} target="_blank" rel="noopener noreferrer" className="text-base font-extrabold text-emerald-400 hover:underline">
                    {COMPANY_INFO.phone}
                  </a>
                </div>
              </div>
            </div>

            {/* Facebook Section */}
            <div className="p-5 bg-gradient-to-br from-blue-950/60 to-slate-950 rounded-2xl border border-blue-800/40 space-y-3">
              <div className="flex items-center space-x-2 text-blue-300">
                <Facebook className="w-5 h-5" />
                <span className="font-bold text-xs uppercase tracking-wider">VONA MOÇAMBIQUE NO FACEBOOK</span>
              </div>
              <p className="text-xs text-slate-300">
                Acompanhe nossas novidades, fotos de projetos e atualizações de segurança na nossa página oficial.
              </p>
              <a
                href={COMPANY_INFO.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center space-x-2 bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs uppercase py-3 rounded-xl shadow-lg transition-all"
              >
                <Facebook className="w-4 h-4" />
                <span>{COMPANY_INFO.facebookButtonText}</span>
              </a>
            </div>

          </div>

          <div className="bg-slate-900/60 border border-slate-800/80 p-5 rounded-2xl text-xs text-slate-400 space-y-2">
            <div className="flex items-center space-x-2 text-sky-400 font-bold">
              <ShieldCheck className="w-4 h-4" />
              <span>Garantia de Atendimento Técnico</span>
            </div>
            <p>
              Respondemos a todas as solicitações de orçamento e visita técnica com brevidade em todo o território nacional.
            </p>
          </div>

        </div>

        {/* Right Column: Contact & Quote Form */}
        <div className="lg:col-span-7">
          <div className="bg-slate-900 border border-sky-500/30 rounded-3xl p-6 sm:p-8 space-y-6 tech-glow">
            
            <div className="border-b border-slate-800 pb-4">
              <h2 className="text-lg font-bold text-white font-display uppercase tracking-wider">
                Formulário de Solicitação de Orçamento
              </h2>
              <p className="text-xs text-slate-400">Preencha os dados e entraremos em contacto com a proposta ideal.</p>
            </div>

            {/* Status Feedback Banner */}
            {statusMessage && (
              <div
                className={`p-4 rounded-xl border flex items-start space-x-3 ${
                  statusMessage.type === 'success'
                    ? 'bg-emerald-950/60 border-emerald-500/40 text-emerald-300'
                    : 'bg-rose-950/60 border-rose-500/40 text-rose-300'
                }`}
              >
                {statusMessage.type === 'success' ? (
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                ) : (
                  <AlertCircle className="w-5 h-5 text-rose-400 shrink-0 mt-0.5" />
                )}
                <div>
                  <p className="text-xs font-bold">{statusMessage.text}</p>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4" noValidate>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-bold text-slate-300 block mb-1">Nome Completo *</label>
                  <input
                    type="text"
                    placeholder="Seu nome"
                    value={name}
                    onChange={(e) => {
                      setName(e.target.value);
                      if (fieldErrors.name) setFieldErrors({ ...fieldErrors, name: '' });
                    }}
                    className={`w-full bg-slate-950 border rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none ${
                      fieldErrors.name ? 'border-rose-500 focus:border-rose-400' : 'border-slate-800 focus:border-sky-400'
                    }`}
                  />
                  {fieldErrors.name && (
                    <p className="text-[11px] text-rose-400 font-medium mt-1">{fieldErrors.name}</p>
                  )}
                </div>

                <div>
                  <label className="text-xs font-bold text-slate-300 block mb-1">Telefone / WhatsApp *</label>
                  <input
                    type="text"
                    placeholder="+258 84 000 0000"
                    value={phone}
                    onChange={(e) => {
                      setPhone(e.target.value);
                      if (fieldErrors.phone) setFieldErrors({ ...fieldErrors, phone: '' });
                    }}
                    className={`w-full bg-slate-950 border rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none ${
                      fieldErrors.phone ? 'border-rose-500 focus:border-rose-400' : 'border-slate-800 focus:border-sky-400'
                    }`}
                  />
                  {fieldErrors.phone && (
                    <p className="text-[11px] text-rose-400 font-medium mt-1">{fieldErrors.phone}</p>
                  )}
                </div>
              </div>

              <div>
                <label className="text-xs font-bold text-slate-300 block mb-1">Email *</label>
                <input
                  type="email"
                  placeholder="seu.email@exemplo.com"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (fieldErrors.email) setFieldErrors({ ...fieldErrors, email: '' });
                  }}
                  className={`w-full bg-slate-950 border rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none ${
                    fieldErrors.email ? 'border-rose-500 focus:border-rose-400' : 'border-slate-800 focus:border-sky-400'
                  }`}
                />
                {fieldErrors.email && (
                  <p className="text-[11px] text-rose-400 font-medium mt-1">{fieldErrors.email}</p>
                )}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-bold text-slate-300 block mb-1">Tipo de Imóvel</label>
                  <select
                    value={propertyType}
                    onChange={(e) => setPropertyType(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-xs font-semibold text-white focus:border-sky-400 focus:outline-none"
                  >
                    <option value="Residencial">Residencial / Casa</option>
                    <option value="Condomínio">Condomínio</option>
                    <option value="Comercial / Loja">Comercial / Loja</option>
                    <option value="Armazém / Doca">Armazém / Doca</option>
                    <option value="Escritório / Empresa">Escritório / Empresa</option>
                    <option value="Instituição / Escola / Clínica">Instituição / Escola / Clínica</option>
                  </select>
                </div>

                <div>
                  <label className="text-xs font-bold text-slate-300 block mb-1">Serviço Pretendido *</label>
                  <select
                    value={service}
                    onChange={(e) => {
                      setService(e.target.value);
                      if (fieldErrors.service) setFieldErrors({ ...fieldErrors, service: '' });
                    }}
                    className={`w-full bg-slate-950 border rounded-xl px-4 py-2.5 text-xs font-semibold text-white focus:outline-none ${
                      fieldErrors.service ? 'border-rose-500 focus:border-rose-400' : 'border-slate-800 focus:border-sky-400'
                    }`}
                  >
                    <option value="Câmeras">Câmeras de Segurança</option>
                    <option value="Monitoramento">Monitoramento Remoto</option>
                    <option value="NVR/DVR">Sistemas NVR/DVR</option>
                    <option value="Instalação">Instalação Completa</option>
                    <option value="Manutenção">Manutenção / Assistência</option>
                    <option value="Segurança residencial">Segurança Residencial</option>
                    <option value="Segurança corporativa">Segurança Corporativa</option>
                    <option value="Outro">Outro Serviço</option>
                  </select>
                  {fieldErrors.service && (
                    <p className="text-[11px] text-rose-400 font-medium mt-1">{fieldErrors.service}</p>
                  )}
                </div>
              </div>

              <div>
                <label className="text-xs font-bold text-slate-300 block mb-1">Mensagem ou Detalhes do Projeto *</label>
                <textarea
                  rows={4}
                  placeholder="Descreva brevemente a sua necessidade ou solicite uma visita técnica..."
                  value={message}
                  onChange={(e) => {
                    setMessage(e.target.value);
                    if (fieldErrors.message) setFieldErrors({ ...fieldErrors, message: '' });
                  }}
                  className={`w-full bg-slate-950 border rounded-xl p-3 text-xs text-white focus:outline-none resize-none ${
                    fieldErrors.message ? 'border-rose-500 focus:border-rose-400' : 'border-slate-800 focus:border-sky-400'
                  }`}
                ></textarea>
                {fieldErrors.message && (
                  <p className="text-[11px] text-rose-400 font-medium mt-1">{fieldErrors.message}</p>
                )}
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full sm:w-1/2 bg-sky-500 hover:bg-sky-400 disabled:bg-sky-500/50 text-slate-950 font-bold text-xs uppercase py-3.5 rounded-xl flex items-center justify-center space-x-2 cursor-pointer shadow-lg shadow-sky-500/20 transition-all"
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin text-slate-950" />
                      <span>A ENVIAR...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>SOLICITAR ORÇAMENTO</span>
                    </>
                  )}
                </button>

                <button
                  type="button"
                  onClick={handleSendViaWhatsApp}
                  className="w-full sm:w-1/2 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs uppercase py-3.5 rounded-xl flex items-center justify-center space-x-2 cursor-pointer shadow-lg shadow-emerald-500/20 transition-all"
                >
                  <MessageSquare className="w-4 h-4 fill-slate-950" />
                  <span>Enviar Direto no WhatsApp</span>
                </button>
              </div>

            </form>

          </div>
        </div>

      </div>

    </div>
  );
};

