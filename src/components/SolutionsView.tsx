import React, { useState } from 'react';
import { SOLUTIONS_LIST } from '../data/constants';
import { SecuritySolution } from '../types';
import { Camera, Video, Globe, Cpu, HardDrive, ShieldCheck, FileText, Wrench, CheckCircle2, ArrowRight } from 'lucide-react';

interface SolutionsViewProps {
  onOpenQuoteModal: () => void;
}

export const SolutionsView: React.FC<SolutionsViewProps> = ({ onOpenQuoteModal }) => {
  const [selectedSolution, setSelectedSolution] = useState<SecuritySolution>(SOLUTIONS_LIST[0]);

  const getIcon = (name: string) => {
    switch (name) {
      case 'Video': return Video;
      case 'Camera': return Camera;
      case 'Globe': return Globe;
      case 'Cpu': return Cpu;
      case 'HardDrive': return HardDrive;
      case 'ShieldCheck': return ShieldCheck;
      case 'FileText': return FileText;
      default: return Wrench;
    }
  };

  return (
    <div className="space-y-12 pb-16">
      
      {/* Page Banner */}
      <section className="text-center space-y-3 pt-6 max-w-3xl mx-auto">
        <span className="text-xs font-bold text-sky-400 uppercase tracking-widest bg-sky-500/10 px-3 py-1 rounded-full border border-sky-500/20">
          Catálogo Técnico Completo
        </span>
        <h1 className="text-3xl sm:text-4xl font-black text-white font-display">
          NOSSAS SOLUÇÕES DE SEGURANÇA
        </h1>
        <p className="text-base font-semibold text-sky-300">
          Tecnologia, proteção e controlo para o seu património.
        </p>
        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
          Oferecemos equipamentos e serviços de segurança eletrónica de alta precisão para residências, escritórios, estabelecimentos comerciais, armazéns e instituições em todo o Moçambique.
        </p>
      </section>

      {/* Solutions Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left Side: Category Selector List */}
        <div className="lg:col-span-4 space-y-2">
          <p className="text-xs font-bold text-slate-400 uppercase tracking-wider px-2 mb-3">
            Selecione uma Solução
          </p>
          {SOLUTIONS_LIST.map((sol) => {
            const IconComp = getIcon(sol.iconName);
            const isSelected = selectedSolution.id === sol.id;
            return (
              <button
                key={sol.id}
                onClick={() => setSelectedSolution(sol)}
                className={`w-full p-4 rounded-xl border text-left flex items-center justify-between transition-all ${
                  isSelected
                    ? 'bg-sky-500/15 border-sky-400 text-white shadow-lg'
                    : 'bg-slate-900/80 border-slate-800 text-slate-400 hover:border-slate-700 hover:text-slate-200'
                }`}
              >
                <div className="flex items-center space-x-3">
                  <div className={`p-2 rounded-lg border ${
                    isSelected ? 'bg-sky-500 text-slate-950 border-sky-400' : 'bg-slate-950 border-slate-800 text-sky-400'
                  }`}>
                    <IconComp className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold font-display">{sol.title}</h3>
                    <p className="text-[10px] text-slate-400">{sol.subtitle}</p>
                  </div>
                </div>
                {isSelected && <div className="w-2 h-2 rounded-full bg-sky-400 animate-ping"></div>}
              </button>
            );
          })}
        </div>

        {/* Right Side: Detailed Solution View Card */}
        <div className="lg:col-span-8 bg-slate-900 border border-sky-500/30 rounded-3xl p-6 sm:p-8 space-y-8 tech-glow">
          
          {/* Header info */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-6">
            <div>
              <div className="inline-block text-[10px] font-bold text-sky-400 bg-sky-500/10 px-2.5 py-1 rounded-full border border-sky-500/20 mb-2">
                {selectedSolution.badge || 'Solução Especializada'}
              </div>
              <h2 className="text-2xl font-black text-white font-display">
                {selectedSolution.title}
              </h2>
              <p className="text-xs text-sky-300 font-semibold">{selectedSolution.subtitle}</p>
            </div>

            <button
              onClick={onOpenQuoteModal}
              className="bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold text-xs uppercase px-5 py-3 rounded-xl shadow-lg shadow-sky-500/20 flex items-center justify-center space-x-2 shrink-0 cursor-pointer"
            >
              <span>SOLICITAR ESTA SOLUÇÃO</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Image & Description */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            <div className="rounded-2xl overflow-hidden border border-slate-800 h-56 bg-slate-950">
              <img
                src={selectedSolution.imageUrl}
                alt={selectedSolution.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="space-y-3">
              <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Descrição Técnica</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                {selectedSolution.description}
              </p>
              <div className="pt-2">
                <span className="text-[11px] font-bold text-sky-400">Suporte técnico e instalação incluídos.</span>
              </div>
            </div>
          </div>

          {/* Features */}
          <div className="space-y-3 pt-2">
            <h3 className="text-xs font-bold text-sky-400 uppercase tracking-wider">Recursos & Benefícios Principais</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {selectedSolution.features.map((feat, idx) => (
                <div key={idx} className="bg-slate-950/70 p-3 rounded-xl border border-slate-800/80 flex items-start space-x-2.5 text-xs text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Specs & Scenarios */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2 border-t border-slate-800/80">
            <div className="space-y-2">
              <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Especificações</h4>
              <ul className="space-y-1.5 text-xs text-slate-300">
                {selectedSolution.specs.map((spec, idx) => (
                  <li key={idx} className="flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-sky-400"></span>
                    <span>{spec}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-2">
              <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Aplicações Recomendadas</h4>
              <div className="flex flex-wrap gap-1.5">
                {selectedSolution.idealFor.map((ideal, idx) => (
                  <span key={idx} className="text-[11px] bg-slate-950 border border-slate-800 px-2.5 py-1 rounded-lg text-slate-300 font-medium">
                    {ideal}
                  </span>
                ))}
              </div>
            </div>
          </div>

        </div>

      </div>

    </div>
  );
};
