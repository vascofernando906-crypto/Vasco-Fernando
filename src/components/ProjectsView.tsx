import React, { useState } from 'react';
import { SAMPLE_PROJECT_CARDS } from '../data/constants';
import { ProjectCard } from '../types';
import { MapPin, Calendar, CheckCircle2, Eye, X, ChevronLeft, ChevronRight, Layers, ArrowRight } from 'lucide-react';

interface ProjectsViewProps {
  onOpenQuoteModal: () => void;
}

export const ProjectsView: React.FC<ProjectsViewProps> = ({ onOpenQuoteModal }) => {
  const [activeCategory, setActiveCategory] = useState<string>('Todos');
  const [activeModalProject, setActiveModalProject] = useState<ProjectCard | null>(null);
  const [modalImageIndex, setModalImageIndex] = useState(0);

  const categories = ['Todos', 'Residencial', 'Comercial', 'Corporativo', 'Institucional'];

  const filteredProjects = activeCategory === 'Todos'
    ? SAMPLE_PROJECT_CARDS
    : SAMPLE_PROJECT_CARDS.filter(p => p.category === activeCategory);

  const openLightbox = (project: ProjectCard, index: number = 0) => {
    setActiveModalProject(project);
    setModalImageIndex(index);
  };

  return (
    <div className="space-y-12 pb-16">
      
      {/* Header Banner */}
      <section className="text-center space-y-3 pt-6 max-w-3xl mx-auto">
        <span className="text-xs font-bold text-sky-400 uppercase tracking-widest bg-sky-500/10 px-3 py-1 rounded-full border border-sky-500/20">
          Trabalhos & Instalações
        </span>
        <h1 className="text-3xl sm:text-4xl font-black text-white font-display">
          PROJETOS CONCLUÍDOS
        </h1>
        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
          Demonstração de estrutura técnica, instalação de câmeras, organização de cabos e projetos executados pela VONA MOÇAMBIQUE.
        </p>
      </section>

      {/* Category Filter Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2 max-w-xl mx-auto px-4">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
              activeCategory === cat
                ? 'bg-sky-500 text-slate-950 font-extrabold shadow-lg shadow-sky-500/20'
                : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-8">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className="bg-slate-900 border border-slate-800 hover:border-sky-500/40 rounded-3xl overflow-hidden flex flex-col justify-between transition-all shadow-xl group"
          >
            <div>
              {/* Cover Image & Lightbox trigger */}
              <div 
                onClick={() => openLightbox(project, 0)}
                className="relative h-64 overflow-hidden bg-slate-950 cursor-pointer group"
              >
                <img
                  src={project.afterImageUrl}
                  alt={`Projeto ${project.title} em ${project.location}`}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-slate-950/40 group-hover:bg-slate-950/20 transition-colors"></div>
                
                <span className="absolute top-4 left-4 text-[10px] font-bold text-sky-300 bg-slate-950/90 border border-sky-500/30 px-3 py-1 rounded-full backdrop-blur">
                  {project.category}
                </span>

                <div className="absolute bottom-4 right-4 bg-slate-950/90 text-white text-xs px-3 py-1.5 rounded-lg border border-slate-800 flex items-center space-x-1.5 backdrop-blur">
                  <Eye className="w-3.5 h-3.5 text-sky-400" />
                  <span>Ver Fotos em Tela Cheia</span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 space-y-4">
                <div>
                  <h3 className="text-lg font-bold text-white font-display leading-snug">
                    {project.title}
                  </h3>
                  <p className="text-xs text-sky-400 font-semibold mt-0.5">
                    {project.solutionType}
                  </p>
                </div>

                {/* Location & Year info */}
                <div className="flex items-center space-x-4 text-xs text-slate-400 bg-slate-950 p-3 rounded-xl border border-slate-800/80">
                  <div className="flex items-center space-x-1.5">
                    <MapPin className="w-3.5 h-3.5 text-sky-400" />
                    <span>Cidade: <strong className="text-slate-200">{project.location}</strong></span>
                  </div>
                  <span className="text-slate-700">|</span>
                  <div className="flex items-center space-x-1.5">
                    <Calendar className="w-3.5 h-3.5 text-sky-400" />
                    <span>Ano: <strong className="text-slate-200">{project.year}</strong></span>
                  </div>
                </div>

                {/* Problem & Solution Breakdown */}
                <div className="space-y-2 text-xs">
                  <div className="bg-slate-950/60 p-3 rounded-xl border border-slate-800/60">
                    <p className="font-bold text-slate-300 mb-0.5">Problema Inicial:</p>
                    <p className="text-slate-400">{project.problem}</p>
                  </div>
                  <div className="bg-sky-950/20 p-3 rounded-xl border border-sky-800/30">
                    <p className="font-bold text-sky-300 mb-0.5">Solução Aplicada VONA:</p>
                    <p className="text-slate-300">{project.solutionProvided}</p>
                  </div>
                </div>

                {/* Services performed list */}
                <div className="space-y-1.5">
                  <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Serviços Realizados:</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-xs text-slate-300">
                    {project.servicesPerformed.map((srv, idx) => (
                      <div key={idx} className="flex items-center space-x-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                        <span>{srv}</span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            </div>

            {/* Card Footer */}
            <div className="p-6 pt-0">
              <button
                onClick={() => openLightbox(project, 0)}
                className="w-full bg-slate-950 hover:bg-slate-800 text-sky-400 font-bold text-xs uppercase py-3 rounded-xl border border-slate-800 flex items-center justify-center space-x-2 transition-colors cursor-pointer"
              >
                <span>VER GALERIA DO PROJETO ({project.galleryImages.length} FOTOS)</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal for Gallery Photos */}
      {activeModalProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/90 backdrop-blur-md animate-in fade-in">
          <div className="relative w-full max-w-4xl bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden shadow-2xl">
            
            <div className="flex items-center justify-between p-4 bg-slate-950 border-b border-slate-800">
              <div>
                <h3 className="text-sm font-bold text-white font-display">
                  {activeModalProject.title}
                </h3>
                <p className="text-[11px] text-slate-400">
                  Foto {modalImageIndex + 1} de {activeModalProject.galleryImages.length} • {activeModalProject.location}
                </p>
              </div>
              <button
                onClick={() => setActiveModalProject(null)}
                className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="relative aspect-video bg-black flex items-center justify-center overflow-hidden">
              <img
                src={activeModalProject.galleryImages[modalImageIndex]}
                alt={`Foto ${modalImageIndex + 1} do projeto ${activeModalProject.title}`}
                loading="lazy"
                decoding="async"
                className="max-h-full max-w-full object-contain"
              />

              {activeModalProject.galleryImages.length > 1 && (
                <>
                  <button
                    onClick={() => setModalImageIndex((modalImageIndex - 1 + activeModalProject.galleryImages.length) % activeModalProject.galleryImages.length)}
                    className="absolute left-4 p-2 rounded-full bg-slate-950/80 text-white hover:bg-sky-500 hover:text-slate-950 transition-colors"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>

                  <button
                    onClick={() => setModalImageIndex((modalImageIndex + 1) % activeModalProject.galleryImages.length)}
                    className="absolute right-4 p-2 rounded-full bg-slate-950/80 text-white hover:bg-sky-500 hover:text-slate-950 transition-colors"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </button>
                </>
              )}
            </div>

            <div className="p-4 bg-slate-950 border-t border-slate-800 flex items-center justify-between">
              <div className="flex items-center space-x-2">
                {activeModalProject.galleryImages.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setModalImageIndex(idx)}
                    className={`w-3 h-3 rounded-full transition-all ${
                      modalImageIndex === idx ? 'bg-sky-400 w-6' : 'bg-slate-700'
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={onOpenQuoteModal}
                className="bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold text-xs uppercase px-4 py-2 rounded-lg"
              >
                Solicitar Orçamento Similar
              </button>
            </div>

          </div>
        </div>
      )}

      {/* Call to Action */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-8">
        <div className="bg-slate-900 border border-slate-800 p-8 rounded-3xl space-y-4">
          <h2 className="text-xl font-bold text-white font-display">
            Quer um projeto de segurança profissional no seu imóvel?
          </h2>
          <p className="text-xs text-slate-400 max-w-md mx-auto">
            Realizamos a visita técnica no local para mapear a área e propor o melhor arranjo de câmeras e gravação.
          </p>
          <button
            onClick={onOpenQuoteModal}
            className="bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold text-xs uppercase px-8 py-3.5 rounded-xl cursor-pointer"
          >
            SOLICITAR VISITA TÉCNICA
          </button>
        </div>
      </section>

    </div>
  );
};
