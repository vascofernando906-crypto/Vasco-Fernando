import React, { useState } from 'react';
import { CLIENT_TESTIMONIALS } from '../data/constants';
import { Testimonial } from '../types';
import { Star, Quote, ChevronLeft, ChevronRight, CheckCircle2, MessageSquare, Send } from 'lucide-react';

interface SatisfiedClientsViewProps {
  onOpenQuoteModal: () => void;
}

export const SatisfiedClientsView: React.FC<SatisfiedClientsViewProps> = ({ onOpenQuoteModal }) => {
  const [activeTestimonialIndex, setActiveTestimonialIndex] = useState(0);
  const [newCommentName, setNewCommentName] = useState('');
  const [newCommentText, setNewCommentText] = useState('');
  const [newCommentProperty, setNewCommentProperty] = useState('Residencial');
  const [newCommentSubmitted, setNewCommentSubmitted] = useState(false);

  const activeTestimonial = CLIENT_TESTIMONIALS[activeTestimonialIndex] || CLIENT_TESTIMONIALS[0];

  const handleAddTestimonial = (e: React.FormEvent) => {
    e.preventDefault();
    setNewCommentSubmitted(true);
  };

  return (
    <div className="space-y-16 pb-16">
      
      {/* Header Banner */}
      <section className="text-center space-y-3 pt-6 max-w-3xl mx-auto">
        <span className="text-xs font-bold text-sky-400 uppercase tracking-widest bg-sky-500/10 px-3 py-1 rounded-full border border-sky-500/20">
          Avaliações & Experiência
        </span>
        <h1 className="text-3xl sm:text-4xl font-black text-white font-display">
          CLIENTES SATISFEITOS
        </h1>
        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
          A satisfação dos nossos clientes residenciais, comerciais e corporativos é o reflexo da nossa dedicação e qualidade em cada instalação.
        </p>
      </section>

      {/* Testimonials Slider Showcase */}
      <section className="max-w-4xl mx-auto px-4">
        <div className="bg-slate-900 border border-sky-500/30 rounded-3xl p-8 sm:p-12 relative overflow-hidden tech-glow">
          <Quote className="w-16 h-16 text-sky-500/10 absolute top-6 right-6 pointer-events-none" />

          <div className="space-y-6">
            <div className="flex items-center space-x-1">
              {[...Array(activeTestimonial.rating)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-amber-400 fill-amber-400" />
              ))}
            </div>

            <p className="text-base sm:text-lg font-medium text-slate-200 italic leading-relaxed">
              "{activeTestimonial.comment}"
            </p>

            <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
              <div>
                <p className="text-sm font-bold text-white font-display">
                  {activeTestimonial.clientName}
                </p>
                <p className="text-xs text-sky-400">
                  {activeTestimonial.companyName} • {activeTestimonial.propertyType} ({activeTestimonial.city})
                </p>
              </div>

              {CLIENT_TESTIMONIALS.length > 1 && (
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => setActiveTestimonialIndex((activeTestimonialIndex - 1 + CLIENT_TESTIMONIALS.length) % CLIENT_TESTIMONIALS.length)}
                    className="p-2 rounded-lg bg-slate-950 text-slate-300 hover:text-white border border-slate-800"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>

                  <button
                    onClick={() => setActiveTestimonialIndex((activeTestimonialIndex + 1) % CLIENT_TESTIMONIALS.length)}
                    className="p-2 rounded-lg bg-slate-950 text-slate-300 hover:text-white border border-slate-800"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              )}
            </div>

          </div>
        </div>
      </section>

      {/* POR QUE OS NOSSOS CLIENTES CONFIAM NA VONA MOÇAMBIQUE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900/80 border border-slate-800 p-8 sm:p-12 rounded-3xl space-y-8">
          
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h2 className="text-2xl font-bold text-white font-display">
              POR QUE OS NOSSOS CLIENTES CONFIAM NA VONA MOÇAMBIQUE
            </h2>
            <p className="text-xs text-slate-400">Trabalhamos com transparência e foco absoluto na segurança patrimonial.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              'Atendimento Personalizado',
              'Visita Técnica Especializada',
              'Planeamento Detalhado',
              'Instalação Profissional',
              'Equipamentos de Qualidade',
              'Configuração Completa',
              'Suporte Técnico',
              'Manutenção Preventiva e Corretiva'
            ].map((diff, i) => (
              <div key={i} className="bg-slate-950 p-4 rounded-xl border border-slate-800 flex items-center space-x-2.5 text-xs text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span className="font-semibold">{diff}</span>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Leave Feedback Form for Real Clients */}
      <section className="max-w-3xl mx-auto px-4">
        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-6">
          <div className="border-b border-slate-800 pb-3">
            <h3 className="text-base font-bold text-white font-display uppercase tracking-wider">
              É Cliente da VONA Moçambique? Deixe o seu depoimento
            </h3>
            <p className="text-xs text-slate-400">A sua opinião é fundamental para mantermos o padrão de excelência.</p>
          </div>

          {newCommentSubmitted ? (
            <div className="text-center py-6 space-y-2">
              <CheckCircle2 className="w-10 h-10 text-emerald-400 mx-auto" />
              <p className="text-sm font-bold text-white">Agradecemos o seu feedback!</p>
              <p className="text-xs text-slate-400">O seu depoimento será analisado e publicado em breve.</p>
            </div>
          ) : (
            <form onSubmit={handleAddTestimonial} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-bold text-slate-300 block mb-1">Seu Nome / Empresa *</label>
                  <input
                    type="text"
                    required
                    placeholder="Nome completo"
                    value={newCommentName}
                    onChange={(e) => setNewCommentName(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-sky-400"
                  />
                </div>
                <div>
                  <label className="text-xs font-bold text-slate-300 block mb-1">Tipo de Imóvel</label>
                  <select
                    value={newCommentProperty}
                    onChange={(e) => setNewCommentProperty(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs font-semibold text-white focus:outline-none focus:border-sky-400"
                  >
                    <option value="Residencial">Residencial</option>
                    <option value="Comercial">Comercial</option>
                    <option value="Corporativo">Corporativo</option>
                    <option value="Institucional">Institucional</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="text-xs font-bold text-slate-300 block mb-1">Sua Avaliação & Comentário *</label>
                <textarea
                  rows={3}
                  required
                  placeholder="Escreva sobre a sua experiência com a instalação ou suporte da VONA..."
                  value={newCommentText}
                  onChange={(e) => setNewCommentText(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3 text-xs text-white focus:outline-none focus:border-sky-400 resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold text-xs uppercase py-3 rounded-xl cursor-pointer"
              >
                ENVIAR DEPOIMENTO
              </button>
            </form>
          )}
        </div>
      </section>

    </div>
  );
};
