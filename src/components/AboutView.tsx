import React from 'react';
import { COMPANY_INFO } from '../data/constants';
import { Shield, Target, Eye, Award, CheckCircle2, Lock, FileText, ChevronRight } from 'lucide-react';

interface AboutViewProps {
  onOpenQuoteModal: () => void;
  onOpenPrivacyModal: () => void;
}

export const AboutView: React.FC<AboutViewProps> = ({ onOpenQuoteModal, onOpenPrivacyModal }) => {
  return (
    <div className="space-y-16 pb-16">
      
      {/* Page Header */}
      <section className="text-center space-y-4 pt-6 max-w-3xl mx-auto flex flex-col items-center">
        <div className="relative group">
          <img 
            src="/vona-logo.png" 
            alt="Logótipo Oficial VONA Moçambique" 
            className="w-24 h-24 sm:w-28 sm:h-28 object-contain rounded-full border-2 border-sky-500/40 shadow-2xl shadow-sky-500/20 bg-slate-950 p-1"
          />
        </div>

        <span className="text-xs font-bold text-sky-400 uppercase tracking-widest bg-sky-500/10 px-3 py-1 rounded-full border border-sky-500/20">
          Institucional
        </span>
        <h1 className="text-3xl sm:text-4xl font-black text-white font-display">
          VONA MOÇAMBIQUE
        </h1>
        <p className="text-base font-semibold text-sky-300">
          Soluções de Segurança Residencial & Corporativa
        </p>
        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
          A Vona Moçambique é uma empresa especializada em soluções de segurança eletrónica para residências, empresas, comércio e instituições.
        </p>
      </section>

      {/* Mission, Vision & Values Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Mission */}
          <div className="bg-slate-900 border border-slate-800 p-8 rounded-3xl space-y-4 hover:border-sky-500/40 transition-all">
            <div className="w-12 h-12 rounded-2xl bg-sky-500/10 text-sky-400 border border-sky-500/30 flex items-center justify-center">
              <Target className="w-6 h-6" />
            </div>
            <h2 className="text-lg font-bold text-white font-display uppercase tracking-wider">
              MISSÃO
            </h2>
            <p className="text-xs text-slate-300 leading-relaxed">
              Fornecer soluções modernas e confiáveis de segurança eletrónica, com instalação profissional, monitoramento e suporte técnico.
            </p>
          </div>

          {/* Vision */}
          <div className="bg-slate-900 border border-slate-800 p-8 rounded-3xl space-y-4 hover:border-sky-500/40 transition-all">
            <div className="w-12 h-12 rounded-2xl bg-sky-500/10 text-sky-400 border border-sky-500/30 flex items-center justify-center">
              <Eye className="w-6 h-6" />
            </div>
            <h2 className="text-lg font-bold text-white font-display uppercase tracking-wider">
              VISÃO
            </h2>
            <p className="text-xs text-slate-300 leading-relaxed">
              Ser uma referência em segurança residencial e corporativa em Moçambique, reconhecida pela excelência no atendimento e na qualidade técnica dos projetos.
            </p>
          </div>

          {/* Values */}
          <div className="bg-slate-900 border border-slate-800 p-8 rounded-3xl space-y-4 hover:border-sky-500/40 transition-all">
            <div className="w-12 h-12 rounded-2xl bg-sky-500/10 text-sky-400 border border-sky-500/30 flex items-center justify-center">
              <Award className="w-6 h-6" />
            </div>
            <h2 className="text-lg font-bold text-white font-display uppercase tracking-wider">
              VALORES
            </h2>
            <ul className="grid grid-cols-2 gap-2 text-xs text-slate-300">
              {['Segurança', 'Confiança', 'Profissionalismo', 'Qualidade', 'Inovação', 'Compromisso'].map((val, idx) => (
                <li key={idx} className="flex items-center space-x-1.5 font-semibold text-sky-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-sky-400"></span>
                  <span>{val}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </section>

      {/* POR QUE OS NOSSOS CLIENTES CONFIAM NA VONA MOÇAMBIQUE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 border border-sky-500/30 rounded-3xl p-8 sm:p-12 space-y-8 tech-glow">
          
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h2 className="text-2xl sm:text-3xl font-black text-white font-display">
              POR QUE OS NOSSOS CLIENTES CONFIAM NA VONA MOÇAMBIQUE
            </h2>
            <p className="text-xs sm:text-sm text-slate-300">
              Apresentamos os diferenciais práticos que tornam a VONA a escolha certa para a segurança do seu património.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { title: 'Atendimento Personalizado', desc: 'Entendimento detalhado do perfil do cliente e da rotina do imóvel.' },
              { title: 'Visita Técnica Especializada', desc: 'Análise minuciosa presencial antes de qualquer orçamento.' },
              { title: 'Planeamento Detalhado', desc: 'Mapeamento preciso de cabos, ângulos de visão e gravação.' },
              { title: 'Instalação Profissional', desc: 'Execução limpa, organizada e sem fios expostos desnecessários.' },
              { title: 'Equipamentos de Qualidade', desc: 'Câmeras IP, PTZ e gravadores das marcas mais conceituadas do mercado.' },
              { title: 'Configuração Completa', desc: 'Acesso remoto ativado e testado diretamente no seu smartphone.' },
              { title: 'Suporte Técnico', desc: 'Assistência técnica pronta para resolver qualquer atipicidade.' },
              { title: 'Manutenção Preventiva', desc: 'Verificação periódica de conectores, lentes e armazenamento.' },
            ].map((diff, i) => (
              <div key={i} className="bg-slate-950 p-5 rounded-2xl border border-slate-800/80 space-y-2">
                <div className="flex items-center space-x-2 text-sky-400 font-bold text-xs">
                  <CheckCircle2 className="w-4 h-4 shrink-0" />
                  <span>{diff.title}</span>
                </div>
                <p className="text-[11px] text-slate-400 leading-relaxed">{diff.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* PRIVACY & LEGAL RESPONSIBILITY BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900/90 border border-slate-800 p-8 rounded-3xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <div className="flex items-center space-x-2 text-sky-400 font-bold text-xs">
              <Lock className="w-4 h-4" />
              <span>PRIVACIDADE E PROTEÇÃO DE DADOS DE VIDEOVIGILÂNCIA</span>
            </div>
            <h3 className="text-base font-bold text-white font-display">
              Respeito às Normas de Privacidade e Uso Responsável de Imagens
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Trabalhamos com rigor técnico para que as gravações de câmeras pertençam unicamente ao cliente contratante, garantindo senhas encriptadas e orientação do uso adequado das imagens.
            </p>
          </div>

          <button
            onClick={onOpenPrivacyModal}
            className="bg-slate-800 hover:bg-slate-700 text-sky-300 font-bold text-xs uppercase px-5 py-3 rounded-xl border border-slate-700 flex items-center space-x-2 shrink-0 cursor-pointer"
          >
            <FileText className="w-4 h-4" />
            <span>LER DIRERETRIZES DE PRIVACIDADE</span>
          </button>
        </div>
      </section>

      {/* CTA */}
      <section className="text-center pt-4">
        <button
          onClick={onOpenQuoteModal}
          className="bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold text-xs uppercase px-8 py-4 rounded-xl shadow-xl shadow-sky-500/20 cursor-pointer"
        >
          SOLICITAR AVALIAÇÃO DO IMÓVEL
        </button>
      </section>

    </div>
  );
};
