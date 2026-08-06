import React, { useState, useEffect } from 'react';
import { COMPANY_INFO } from '../data/constants';
import { X, CheckCircle2, Building, Home, Store, Warehouse, School, ShieldCheck, Send, MessageSquare, Loader2, AlertCircle, RotateCcw, AlertTriangle } from 'lucide-react';
import { sendContactEmail, isValidEmail } from '../services/emailService';

interface QuoteCalculatorModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const QuoteCalculatorModal: React.FC<QuoteCalculatorModalProps> = ({ isOpen, onClose }) => {
  const [propertyType, setPropertyType] = useState('Casa / Residência');
  const [selectedServices, setSelectedServices] = useState<string[]>([
    'Câmeras de Segurança (IP / HD)',
    'Acesso e Visualização no Celular'
  ]);
  const [camerasEstimate, setCamerasEstimate] = useState('4 a 8 Câmeras');
  const [needsVisit, setNeedsVisit] = useState(true);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [city, setCity] = useState('');
  const [notes, setNotes] = useState('');

  const [isLoading, setIsLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);
  const [fieldErrors, setFieldErrors] = useState<{ [key: string]: string }>({});

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submittedDataSummary, setSubmittedDataSummary] = useState<{
    name: string;
    phone: string;
    email: string;
    property: string;
    services: string;
    city: string;
    date: string;
  } | null>(null);

  // Check session storage on load or modal open
  useEffect(() => {
    if (isOpen) {
      const savedSubmission = sessionStorage.getItem('vona_quote_submitted_data');
      if (savedSubmission) {
        try {
          const parsed = JSON.parse(savedSubmission);
          setSubmittedDataSummary(parsed);
          setIsSubmitted(true);
        } catch (err) {
          console.error('Error parsing quote submission data', err);
        }
      }
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const propertyOptions = [
    { id: 'casa', label: 'Casa / Residência', icon: Home },
    { id: 'condominio', label: 'Condomínio', icon: Building },
    { id: 'loja', label: 'Loja / Comércio', icon: Store },
    { id: 'armazem', label: 'Armazém / Doca', icon: Warehouse },
    { id: 'escritorio', label: 'Escritório / Empresa', icon: Building },
    { id: 'institucional', label: 'Escola / Clínica / Outro', icon: School },
  ];

  const serviceOptions = [
    'Câmeras de Segurança (IP / HD)',
    'Speed Dome / PTZ (Grandes Áreas)',
    'Vigilância Presencial Permanente',
    'Gravação NVR / DVR',
    'Acesso e Visualização no Celular',
    'Monitoramento Remoto 24 Horas',
    'Identificação de Pontos Cegos',
    'Manutenção & Assistência Técnica'
  ];

  const toggleService = (service: string) => {
    if (isSubmitted || isLoading) return;
    if (selectedServices.includes(service)) {
      setSelectedServices(selectedServices.filter(s => s !== service));
    } else {
      setSelectedServices([...selectedServices, service]);
    }
    if (fieldErrors.service) {
      setFieldErrors({ ...fieldErrors, service: '' });
    }
  };

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

    if (selectedServices.length === 0) {
      errors.service = 'Selecione pelo menos um serviço pretendido.';
    }

    const messageText = notes.trim() || `Orçamento para ${propertyType} (${camerasEstimate}). Cidade: ${city || 'Não informada'}. Visita técnica: ${needsVisit ? 'Sim' : 'Não'}.`;
    if (!messageText.trim()) {
      errors.message = 'Mensagem é obrigatória.';
    }

    setFieldErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleWhatsAppSend = () => {
    const textMessage = `Olá VONA Moçambique, gostaria de solicitar um orçamento para:\n\n` +
      `- *Tipo de Imóvel:* ${propertyType}\n` +
      `- *Estimativa de Câmeras:* ${camerasEstimate}\n` +
      `- *Serviços Desejados:* ${selectedServices.join(', ')}\n` +
      `- *Visita Técnica:* ${needsVisit ? 'Sim, prefiro avaliação no local' : 'Apenas estimativa'}\n` +
      `- *Localização:* ${city || '[A Informar]'}\n` +
      `- *Nome:* ${name || '[Não Informado]'}\n` +
      `- *Contacto:* ${phone || '[Não Informado]'}\n` +
      `- *Email:* ${email || '[Não Informado]'}\n` +
      (notes ? `- *Observações:* ${notes}` : '');

    const encoded = encodeURIComponent(textMessage);
    window.open(`https://wa.me/258845698458?text=${encoded}`, '_blank');
  };

  const handleSubmitForm = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatusMessage(null);

    // Block duplicate submission if already submitted
    if (isSubmitted) {
      setStatusMessage({
        type: 'error',
        text: '⚠️ O seu orçamento já foi enviado. A VONA Moçambique recebeu o seu pedido e entrará em contacto consigo.'
      });
      return;
    }

    if (!validateForm()) {
      return;
    }

    setIsLoading(true);

    const fullServiceText = selectedServices.join(', ') + ` (${camerasEstimate})`;
    const fullMessageText = (notes.trim() ? `${notes.trim()}\n\n` : '') +
      `Localização/Cidade: ${city.trim() || 'Não informada'}\n` +
      `Solicitou visita técnica: ${needsVisit ? 'Sim' : 'Não'}`;

    try {
      await sendContactEmail({
        name,
        phone,
        email,
        property: propertyType,
        service: fullServiceText,
        message: fullMessageText,
      });

      const summary = {
        name: name.trim(),
        phone: phone.trim(),
        email: email.trim(),
        property: propertyType,
        services: fullServiceText,
        city: city.trim() || 'Maputo / Moçambique',
        date: new Date().toLocaleDateString('pt-MZ', {
          day: '2-digit',
          month: 'long',
          year: 'numeric',
          hour: '2-digit',
          minute: '2-digit'
        })
      };

      setSubmittedDataSummary(summary);
      setIsSubmitted(true);
      sessionStorage.setItem('vona_quote_submitted_data', JSON.stringify(summary));

      // Reset form input values
      setName('');
      setPhone('');
      setEmail('');
      setCity('');
      setNotes('');
      setFieldErrors({});
    } catch (error) {
      console.error('Erro ao enviar orçamentos via EmailJS:', error);
      setStatusMessage({
        type: 'error',
        text: 'Erro ao enviar o pedido. Tente novamente ou entre em contacto via WhatsApp.',
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleResetForm = () => {
    sessionStorage.removeItem('vona_quote_submitted_data');
    setIsSubmitted(false);
    setSubmittedDataSummary(null);
    setStatusMessage(null);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200 overflow-y-auto">
      <div className="relative w-full max-w-2xl bg-slate-900 border border-sky-500/30 rounded-2xl shadow-2xl overflow-hidden my-8">
        
        {/* Header */}
        <div className="flex items-center justify-between p-5 bg-slate-950 border-b border-slate-800">
          <div className="flex items-center space-x-3">
            <img 
              src="/vona-logo.png" 
              alt="Logótipo VONA Moçambique" 
              className="w-10 h-10 object-contain rounded-full border border-sky-500/40 bg-slate-900 shrink-0"
            />
            <div>
              <h2 className="text-base font-bold text-white font-display uppercase tracking-wider">
                Solicitar Orçamento de Segurança
              </h2>
              <p className="text-xs text-slate-400">VONA MOÇAMBIQUE — Soluções sob medida para o seu imóvel</p>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6 max-h-[80vh] overflow-y-auto">

          {/* CONFIRMATION SCREEN (Replaces form after successful submission or if already sent in session) */}
          {isSubmitted ? (
            <div className="py-6 px-4 text-center space-y-6 animate-in zoom-in-95 duration-300">
              
              {/* Success Shield / Check Badge */}
              <div className="relative inline-flex items-center justify-center">
                <div className="w-20 h-20 rounded-full bg-emerald-500/20 border-2 border-emerald-500/50 flex items-center justify-center text-emerald-400 shadow-2xl shadow-emerald-500/30">
                  <CheckCircle2 className="w-12 h-12" />
                </div>
                <div className="absolute -bottom-1 -right-1 bg-slate-950 p-1 rounded-full border border-emerald-500/40">
                  <ShieldCheck className="w-5 h-5 text-sky-400" />
                </div>
              </div>

              {/* Required Exact Messages */}
              <div className="space-y-3 max-w-lg mx-auto">
                <h3 className="text-xl sm:text-2xl font-black text-white font-display tracking-tight leading-snug">
                  ✅ Orçamento enviado com sucesso!
                </h3>
                <p className="text-sm sm:text-base text-emerald-300 font-semibold bg-emerald-950/60 p-3 rounded-xl border border-emerald-500/30">
                  Aguarde, a VONA Moçambique irá entrar em contacto consigo brevemente.
                </p>
              </div>

              {/* Already sent duplicate notice */}
              <div className="p-4 bg-amber-950/40 border border-amber-500/30 rounded-xl text-left space-y-1">
                <div className="flex items-center space-x-2 text-amber-400 font-bold text-xs">
                  <AlertTriangle className="w-4 h-4 shrink-0" />
                  <span>Aviso de Registo</span>
                </div>
                <p className="text-xs text-amber-200/90 leading-relaxed">
                  ⚠️ O seu orçamento já foi enviado. A VONA Moçambique recebeu o seu pedido e entrará em contacto consigo.
                </p>
              </div>

              {/* Submitted Details Receipt */}
              {submittedDataSummary && (
                <div className="bg-slate-950/80 rounded-xl p-4 border border-slate-800 text-left space-y-2 text-xs">
                  <p className="font-bold text-sky-400 uppercase tracking-wider text-[11px]">
                    Resumo do Pedido Registado:
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-slate-300 pt-1">
                    <div>
                      <span className="text-slate-500 block text-[10px] uppercase">Cliente:</span>
                      <span className="font-semibold text-white">{submittedDataSummary.name}</span>
                    </div>
                    <div>
                      <span className="text-slate-500 block text-[10px] uppercase">Contacto:</span>
                      <span className="font-semibold text-white">{submittedDataSummary.phone}</span>
                    </div>
                    <div>
                      <span className="text-slate-500 block text-[10px] uppercase">Email:</span>
                      <span className="font-semibold text-white">{submittedDataSummary.email}</span>
                    </div>
                    <div>
                      <span className="text-slate-500 block text-[10px] uppercase">Imóvel:</span>
                      <span className="font-semibold text-white">{submittedDataSummary.property}</span>
                    </div>
                    <div className="sm:col-span-2">
                      <span className="text-slate-500 block text-[10px] uppercase">Serviços Solicitados:</span>
                      <span className="font-semibold text-sky-300">{submittedDataSummary.services}</span>
                    </div>
                    <div className="sm:col-span-2 text-[10px] text-slate-400 pt-1 border-t border-slate-800/80">
                      Enviado em: {submittedDataSummary.date}
                    </div>
                  </div>
                </div>
              )}

              {/* Actions */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                <a
                  href={`https://wa.me/258845698458?text=${encodeURIComponent('Olá VONA Moçambique, acabei de enviar um pedido de orçamento no site e gostaria de confirmar a receção.')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-6 py-3 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs uppercase rounded-xl flex items-center justify-center space-x-2 shadow-lg shadow-emerald-500/20 transition-all"
                >
                  <MessageSquare className="w-4 h-4 fill-slate-950" />
                  <span>Falar no WhatsApp</span>
                </a>

                <button
                  type="button"
                  onClick={onClose}
                  className="w-full sm:w-auto px-6 py-3 bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs uppercase rounded-xl border border-slate-700 transition-all"
                >
                  Fechar Janela
                </button>

                <button
                  type="button"
                  onClick={handleResetForm}
                  className="w-full sm:w-auto px-4 py-3 text-slate-400 hover:text-sky-300 font-semibold text-xs flex items-center justify-center space-x-1.5 transition-colors"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Enviar Novo Orçamento</span>
                </button>
              </div>

            </div>
          ) : (

            /* STANDARD FORM VIEW */
            <>
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

              <form onSubmit={handleSubmitForm} className="space-y-6" noValidate>
                
                {/* Step 1: Property Type */}
                <div className="space-y-3">
                  <label className="text-xs font-bold text-sky-400 uppercase tracking-wider block">
                    1. Qual é o tipo de imóvel a proteger?
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                    {propertyOptions.map((item) => {
                      const IconComp = item.icon;
                      const selected = propertyType === item.label;
                      return (
                        <button
                          type="button"
                          key={item.id}
                          disabled={isLoading}
                          onClick={() => setPropertyType(item.label)}
                          className={`p-3 rounded-xl border text-left flex flex-col items-start space-y-1.5 transition-all ${
                            selected
                              ? 'bg-sky-500/15 border-sky-400 text-white shadow-md'
                              : 'bg-slate-950/60 border-slate-800 text-slate-400 hover:border-slate-700 hover:text-slate-200'
                          }`}
                        >
                          <IconComp className={`w-5 h-5 ${selected ? 'text-sky-400' : 'text-slate-500'}`} />
                          <span className="text-xs font-bold">{item.label}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Step 2: Cameras Estimate */}
                <div className="space-y-2">
                  <label className="text-xs font-bold text-sky-400 uppercase tracking-wider block">
                    2. Estimativa de quantidade de câmeras
                  </label>
                  <select
                    disabled={isLoading}
                    value={camerasEstimate}
                    onChange={(e) => setCamerasEstimate(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-xs font-semibold text-white focus:outline-none focus:border-sky-400 disabled:opacity-50"
                  >
                    <option value="1 a 3 Câmeras">1 a 3 Câmeras (Pequeno porte / Residência)</option>
                    <option value="4 a 8 Câmeras">4 a 8 Câmeras (Médio porte / Casa / Loja)</option>
                    <option value="9 a 16 Câmeras">9 a 16 Câmeras (Grande porte / Condomínio)</option>
                    <option value="Mais de 16 Câmeras">Mais de 16 Câmeras (Armazém / Corporativo)</option>
                    <option value="Preciso de avaliação na visita técnica">Não sei, preciso de avaliação na visita técnica</option>
                  </select>
                </div>

                {/* Step 3: Desired Services */}
                <div className="space-y-2">
                  <label className="text-xs font-bold text-sky-400 uppercase tracking-wider block">
                    3. Selecione os serviços pretendidos *
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {serviceOptions.map((service) => {
                      const isChecked = selectedServices.includes(service);
                      return (
                        <button
                          type="button"
                          key={service}
                          disabled={isLoading}
                          onClick={() => toggleService(service)}
                          className={`px-3 py-2 rounded-lg border text-xs font-semibold flex items-center justify-between transition-all ${
                            isChecked
                              ? 'bg-sky-500/10 border-sky-400 text-sky-300'
                              : 'bg-slate-950/40 border-slate-800/80 text-slate-400 hover:bg-slate-950'
                          }`}
                        >
                          <span>{service}</span>
                          {isChecked && <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0 ml-2" />}
                        </button>
                      );
                    })}
                  </div>
                  {fieldErrors.service && (
                    <p className="text-[11px] text-rose-400 font-medium mt-1">{fieldErrors.service}</p>
                  )}
                </div>

                {/* Step 4: Technical Visit Option */}
                <div className="bg-slate-950/80 p-3.5 rounded-xl border border-slate-800 flex items-center justify-between">
                  <div>
                    <p className="text-xs font-bold text-white">Solicitar Visita Técnica Especializada?</p>
                    <p className="text-[11px] text-slate-400">Análise presencial do imóvel para identificação de pontos cegos.</p>
                  </div>
                  <button
                    type="button"
                    disabled={isLoading}
                    onClick={() => setNeedsVisit(!needsVisit)}
                    className={`w-12 h-6 rounded-full transition-colors p-1 flex items-center ${
                      needsVisit ? 'bg-sky-500 justify-end' : 'bg-slate-800 justify-start'
                    }`}
                  >
                    <span className="w-4 h-4 rounded-full bg-slate-950"></span>
                  </button>
                </div>

                {/* Step 5: Personal Details */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  <div>
                    <label className="text-[11px] font-bold text-slate-300 block mb-1">Seu Nome *</label>
                    <input
                      type="text"
                      disabled={isLoading}
                      placeholder="Seu nome completo"
                      value={name}
                      onChange={(e) => {
                        setName(e.target.value);
                        if (fieldErrors.name) setFieldErrors({ ...fieldErrors, name: '' });
                      }}
                      className={`w-full bg-slate-950 border rounded-lg px-3 py-2 text-xs text-white focus:outline-none disabled:opacity-50 ${
                        fieldErrors.name ? 'border-rose-500 focus:border-rose-400' : 'border-slate-800 focus:border-sky-400'
                      }`}
                    />
                    {fieldErrors.name && (
                      <p className="text-[11px] text-rose-400 font-medium mt-1">{fieldErrors.name}</p>
                    )}
                  </div>

                  <div>
                    <label className="text-[11px] font-bold text-slate-300 block mb-1">Telefone / WhatsApp *</label>
                    <input
                      type="text"
                      disabled={isLoading}
                      placeholder="+258 84 000 0000"
                      value={phone}
                      onChange={(e) => {
                        setPhone(e.target.value);
                        if (fieldErrors.phone) setFieldErrors({ ...fieldErrors, phone: '' });
                      }}
                      className={`w-full bg-slate-950 border rounded-lg px-3 py-2 text-xs text-white focus:outline-none disabled:opacity-50 ${
                        fieldErrors.phone ? 'border-rose-500 focus:border-rose-400' : 'border-slate-800 focus:border-sky-400'
                      }`}
                    />
                    {fieldErrors.phone && (
                      <p className="text-[11px] text-rose-400 font-medium mt-1">{fieldErrors.phone}</p>
                    )}
                  </div>
                </div>

                <div>
                  <label className="text-[11px] font-bold text-slate-300 block mb-1">Email *</label>
                  <input
                    type="email"
                    disabled={isLoading}
                    placeholder="seu.email@exemplo.com"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      if (fieldErrors.email) setFieldErrors({ ...fieldErrors, email: '' });
                    }}
                    className={`w-full bg-slate-950 border rounded-lg px-3 py-2 text-xs text-white focus:outline-none disabled:opacity-50 ${
                      fieldErrors.email ? 'border-rose-500 focus:border-rose-400' : 'border-slate-800 focus:border-sky-400'
                    }`}
                  />
                  {fieldErrors.email && (
                    <p className="text-[11px] text-rose-400 font-medium mt-1">{fieldErrors.email}</p>
                  )}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="text-[11px] font-bold text-slate-300 block mb-1">Cidade / Localização</label>
                    <input
                      type="text"
                      disabled={isLoading}
                      placeholder="Ex: Maputo, Matola..."
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                      className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-xs text-white focus:border-sky-400 focus:outline-none disabled:opacity-50"
                    />
                  </div>
                  <div>
                    <label className="text-[11px] font-bold text-slate-300 block mb-1">Observações ou Mensagem</label>
                    <input
                      type="text"
                      disabled={isLoading}
                      placeholder="Detalhes adicionais do imóvel"
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-xs text-white focus:border-sky-400 focus:outline-none disabled:opacity-50"
                    />
                  </div>
                </div>

                {/* Action buttons */}
                <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                  <button
                    type="button"
                    disabled={isLoading}
                    onClick={handleWhatsAppSend}
                    className="w-full sm:w-1/2 bg-emerald-500 hover:bg-emerald-400 disabled:opacity-50 text-slate-950 font-bold text-xs uppercase py-3 rounded-xl flex items-center justify-center space-x-2 shadow-lg shadow-emerald-500/20 cursor-pointer"
                  >
                    <MessageSquare className="w-4 h-4 fill-slate-950" />
                    <span>Enviar pelo WhatsApp</span>
                  </button>

                  <button
                    type="submit"
                    disabled={isLoading || isSubmitted}
                    className="w-full sm:w-1/2 bg-sky-500 hover:bg-sky-400 disabled:bg-slate-700 disabled:text-slate-400 disabled:cursor-not-allowed text-slate-950 font-bold text-xs uppercase py-3 rounded-xl flex items-center justify-center space-x-2 shadow-lg shadow-sky-500/20 transition-all cursor-pointer"
                  >
                    {isLoading ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin text-slate-950" />
                        <span>Enviando orçamento...</span>
                      </>
                    ) : isSubmitted ? (
                      <>
                        <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                        <span>Orçamento Enviado ✓</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>SOLICITAR ORÇAMENTO</span>
                      </>
                    )}
                  </button>
                </div>

              </form>
            </>
          )}

        </div>

      </div>
    </div>
  );
};


