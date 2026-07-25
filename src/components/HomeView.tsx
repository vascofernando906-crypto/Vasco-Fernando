import React, { useState } from 'react';
import { TabType } from '../types';
import { COMPANY_INFO, SOLUTIONS_LIST, DEMO_CAMERA_FEEDS } from '../data/constants';
import { 
  Shield, Camera, Smartphone, Eye, Bell, PlayCircle, Globe, Sliders, 
  CheckCircle2, ArrowRight, MessageSquare, Phone, MapPin, Building, Home, 
  Store, Wrench, ChevronRight, Lock, Zap, ShieldAlert
} from 'lucide-react';

interface HomeViewProps {
  setActiveTab: (tab: TabType) => void;
  onOpenQuoteModal: () => void;
}

export const HomeView: React.FC<HomeViewProps> = ({ setActiveTab, onOpenQuoteModal }) => {
  const [activeDemoCamIndex, setActiveDemoCamIndex] = useState(0);
  const activeCam = DEMO_CAMERA_FEEDS[activeDemoCamIndex];

  return (
    <div className="space-y-20 pb-16">
      
      {/* HERO SECTION */}
      <section className="relative overflow-hidden pt-12 pb-20 lg:pt-20 lg:pb-28 border-b border-slate-800/60 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
        
        {/* Glow ambient backgrounds */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-sky-600/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute -top-10 right-10 w-80 h-80 bg-blue-600/10 rounded-full blur-2xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: Typography & CTAs */}
            <div className="lg:col-span-7 space-y-6 text-left">
              
              <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-sky-500/10 border border-sky-500/30 text-sky-400 text-xs font-bold tracking-wider uppercase">
                <span className="w-2 h-2 rounded-full bg-sky-400 animate-pulse"></span>
                <span>VONA MOÇAMBIQUE — Segurança Eletrónica</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white font-display tracking-tight leading-[1.15]">
                {COMPANY_INFO.mainSlogan.split(',')[0]},
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-blue-400 to-sky-300">
                  {COMPANY_INFO.mainSlogan.split(',')[1] || ' SOB O SEU CONTROLO.'}
                </span>
              </h1>

              <p className="text-lg font-semibold text-sky-200">
                Soluções inteligentes de segurança residencial e corporativa.
              </p>

              <p className="text-sm sm:text-base text-slate-300 max-w-2xl leading-relaxed">
                Veja, acompanhe e proteja o seu património em tempo real, de onde quer que esteja. Câmeras IP, HD, Speed Dome PTZ, NVR/DVR e monitoramento remoto ao seu alcance.
              </p>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <button
                  onClick={onOpenQuoteModal}
                  className="bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-400 hover:to-blue-500 text-white font-bold text-xs uppercase px-7 py-4 rounded-xl shadow-xl shadow-sky-500/25 border border-sky-400/40 flex items-center justify-center space-x-2 transition-all hover:scale-102 cursor-pointer"
                >
                  <span>SOLICITAR ORÇAMENTO</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <a
                  href={COMPANY_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-emerald-950/70 hover:bg-emerald-900/90 text-emerald-300 font-bold text-xs uppercase px-6 py-4 rounded-xl border border-emerald-700/60 flex items-center justify-center space-x-2 transition-all hover:scale-102"
                >
                  <MessageSquare className="w-4 h-4 text-emerald-400 fill-emerald-400/30" />
                  <span>FALAR NO WHATSAPP</span>
                </a>
              </div>

              {/* Contact badge */}
              <div className="pt-2 flex items-center space-x-3 text-xs text-slate-400">
                <div className="flex items-center space-x-1.5 font-bold text-white bg-slate-900 px-3 py-1.5 rounded-lg border border-slate-800">
                  <Phone className="w-3.5 h-3.5 text-sky-400" />
                  <span>{COMPANY_INFO.phone}</span>
                </div>
                <span className="text-slate-600">•</span>
                <span>Atendimento Residencial & Corporativo</span>
              </div>

            </div>

            {/* Right Column: High-tech Visual / Live Camera Simulation Frame */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl bg-slate-900/90 p-3 border border-sky-500/30 shadow-2xl tech-glow">
                
                {/* Frame Bar */}
                <div className="flex items-center justify-between pb-3 px-2 border-b border-slate-800 text-xs">
                  <div className="flex items-center space-x-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-yellow-500"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
                    <span className="text-[11px] font-bold text-slate-300 ml-2">VONA LIVE MONITORING v2.4</span>
                  </div>
                  <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-800/40">
                    SISTEMA ATIVO
                  </span>
                </div>

                {/* Simulated Feed Viewport */}
                <div className="relative mt-3 aspect-video bg-black rounded-xl overflow-hidden border border-slate-800 group">
                  <img
                    src={activeCam.imageUrl}
                    alt={activeCam.name}
                    className="w-full h-full object-cover opacity-90 transition-all duration-500"
                  />

                  {/* Overlays */}
                  <div className="absolute top-3 left-3 bg-slate-950/80 backdrop-blur px-2.5 py-1 rounded text-[10px] font-mono text-slate-200 border border-slate-800 flex items-center space-x-2">
                    <span className="w-2 h-2 rounded-full bg-red-500 animate-ping"></span>
                    <span className="font-bold text-red-400">{activeCam.status}</span>
                    <span className="text-slate-500">|</span>
                    <span>{activeCam.resolution}</span>
                  </div>

                  <div className="absolute top-3 right-3 bg-slate-950/80 backdrop-blur px-2 py-1 rounded text-[10px] font-mono text-sky-400 border border-slate-800">
                    2026-07-25 10:38:00
                  </div>

                  <div className="absolute bottom-3 left-3 bg-slate-950/90 backdrop-blur px-3 py-1.5 rounded-lg border border-slate-800">
                    <p className="text-xs font-bold text-white">{activeCam.name}</p>
                    <p className="text-[10px] text-slate-400">{activeCam.location} • {activeCam.type}</p>
                  </div>
                </div>

                {/* Feed Selector Buttons */}
                <div className="mt-3 grid grid-cols-2 sm:grid-cols-4 gap-1.5">
                  {DEMO_CAMERA_FEEDS.map((feed, idx) => (
                    <button
                      key={feed.id}
                      onClick={() => setActiveDemoCamIndex(idx)}
                      className={`p-2 rounded-lg text-left text-[11px] font-semibold border transition-all ${
                        activeDemoCamIndex === idx
                          ? 'bg-sky-500/20 border-sky-400 text-sky-300'
                          : 'bg-slate-950/50 border-slate-800/60 text-slate-400 hover:text-slate-200'
                      }`}
                    >
                      <p className="truncate font-bold">CAM 0{idx + 1}</p>
                      <p className="text-[9px] text-slate-500 truncate">{feed.name.split('-')[1] || feed.name}</p>
                    </button>
                  ))}
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION: O SEU IMÓVEL NA PALMA DA SUA MÃO */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 rounded-3xl p-8 sm:p-12 border border-sky-500/20 shadow-2xl relative overflow-hidden">
          
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
            <span className="text-xs font-bold text-sky-400 uppercase tracking-widest bg-sky-500/10 px-3 py-1 rounded-full border border-sky-500/20">
              Acesso Remoto em Qualquer Lugar
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-white font-display">
              O SEU IMÓVEL NA PALMA DA SUA MÃO
            </h2>
            <p className="text-sm font-semibold text-sky-300">
              Controlo absoluto onde quer que esteja.
            </p>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Com as nossas soluções de acesso remoto, você pode visualizar e acompanhar as câmeras da sua casa, empresa ou instituição em tempo real pelo smartphone, tablet ou computador, de qualquer parte do mundo.
            </p>
          </div>

          {/* 6 Grid Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Eye,
                title: '1. VISUALIZAÇÃO EM TEMPO REAL',
                desc: 'Acompanhe vídeo ao vivo sem travamentos com transmissão de alta velocidade no aplicativo móvel.'
              },
              {
                icon: Smartphone,
                title: '2. ACESSO REMOTO',
                desc: 'Conectividade segura e criptografada direto do smartphone Android, iPhone, tablet ou computador.'
              },
              {
                icon: Bell,
                title: '3. NOTIFICAÇÕES DE EVENTOS',
                desc: 'Alertas em tempo real ao detectar cruzamento de linha, intrusão de perímetro ou movimento atípico.'
              },
              {
                icon: PlayCircle,
                title: '4. CONSULTA DE GRAVAÇÕES',
                desc: 'Pesquise e reveja gravações passadas por data e hora no histórico do NVR/DVR com facilidade.'
              },
              {
                icon: Sliders,
                title: '5. CONTROLO DO SISTEMA',
                desc: 'Controle o zoom de câmeras PTZ, altere configurações e gerencie acessos de utilizadores.'
              },
              {
                icon: Globe,
                title: '6. ACESSO DE QUALQUER LUGAR',
                desc: 'Esteja em casa, no trabalho ou em viagem de negócios, o seu patrimônio estará sempre ao seu alcance.'
              },
            ].map((card, i) => {
              const CardIcon = card.icon;
              return (
                <div 
                  key={i}
                  className="bg-slate-950/80 p-6 rounded-2xl border border-slate-800 hover:border-sky-500/40 transition-all hover:-translate-y-1 group"
                >
                  <div className="w-10 h-10 rounded-xl bg-sky-500/10 text-sky-400 border border-sky-500/30 flex items-center justify-center mb-4 group-hover:bg-sky-500 group-hover:text-slate-950 transition-colors">
                    <CardIcon className="w-5 h-5" />
                  </div>
                  <h3 className="text-sm font-bold text-white font-display mb-2">{card.title}</h3>
                  <p className="text-xs text-slate-400 leading-relaxed">{card.desc}</p>
                </div>
              );
            })}
          </div>

          {/* Smartphone Banner Feature */}
          <div className="mt-12 pt-8 border-t border-slate-800/80 flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="flex items-center space-x-4">
              <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400">
                <Smartphone className="w-8 h-8" />
              </div>
              <div>
                <h4 className="text-base font-bold text-white">Compatível com iOS, Android & Windows</h4>
                <p className="text-xs text-slate-400">Configuramos todo o acesso no seu celular no dia da entrega técnica.</p>
              </div>
            </div>

            <button
              onClick={() => setActiveTab('monitoramento')}
              className="bg-slate-800 hover:bg-slate-700 text-sky-300 font-bold text-xs uppercase px-5 py-3 rounded-xl border border-slate-700 flex items-center space-x-2 shrink-0 cursor-pointer"
            >
              <span>VER DEMONSTRAÇÃO DE MONITORAMENTO</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

        </div>
      </section>

      {/* SECTION: NOSSAS SOLUÇÕES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <span className="text-xs font-bold text-sky-400 uppercase tracking-widest bg-sky-500/10 px-3 py-1 rounded-full border border-sky-500/20">
            Catálogo de Equipamentos e Serviços
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-white font-display">
            NOSSAS SOLUÇÕES DE SEGURANÇA
          </h2>
          <p className="text-sm font-semibold text-sky-300">
            Tecnologia, proteção e controlo para o seu património.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SOLUTIONS_LIST.map((sol) => (
            <div
              key={sol.id}
              className="bg-slate-900 border border-slate-800 hover:border-sky-500/50 rounded-2xl overflow-hidden flex flex-col justify-between transition-all hover:shadow-xl group"
            >
              <div>
                <div className="relative h-44 overflow-hidden bg-slate-950">
                  <img
                    src={sol.imageUrl}
                    alt={sol.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
                  {sol.badge && (
                    <span className="absolute top-3 right-3 text-[10px] font-bold text-sky-300 bg-slate-950/90 border border-sky-500/40 px-2.5 py-1 rounded-full backdrop-blur">
                      {sol.badge}
                    </span>
                  )}
                </div>

                <div className="p-5 space-y-2">
                  <h3 className="text-base font-bold text-white font-display group-hover:text-sky-400 transition-colors">
                    {sol.title}
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed line-clamp-3">
                    {sol.description}
                  </p>
                </div>
              </div>

              <div className="p-5 pt-0">
                <button
                  onClick={() => setActiveTab('solucoes')}
                  className="w-full bg-slate-950 hover:bg-sky-500 hover:text-slate-950 text-slate-300 font-bold text-xs uppercase py-2.5 rounded-lg border border-slate-800 hover:border-sky-400 transition-all flex items-center justify-center space-x-1 cursor-pointer"
                >
                  <span>SAIBA MAIS</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION: SEGURANÇA RESIDENCIAL */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-slate-900/90 border border-slate-800 rounded-3xl p-8 sm:p-12 overflow-hidden">
          
          <div className="lg:col-span-6 space-y-5">
            <div className="inline-flex items-center space-x-2 text-xs font-bold text-sky-400 uppercase tracking-widest bg-sky-500/10 px-3 py-1 rounded-full border border-sky-500/20">
              <Home className="w-3.5 h-3.5" />
              <span>Proteção Familiar</span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-black text-white font-display">
              SEGURANÇA RESIDENCIAL
            </h2>

            <p className="text-sm font-semibold text-sky-300">
              Proteção para a sua casa e para a sua família.
            </p>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Tenha maior tranquilidade sabendo que pode acompanhar a sua residência mesmo quando estiver longe. Protegemos vivendas, condomínios fechados, apartamentos e propriedades rurais.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-slate-200 pt-2">
              {[
                'Monitoramento remoto no celular',
                'Visualização pelo smartphone',
                'Proteção de entradas & portões',
                'Proteção de muros & perímetros',
                'Gravação contínua de imagens',
                'Acesso às câmeras de qualquer lugar'
              ].map((b, idx) => (
                <div key={idx} className="flex items-center space-x-2 bg-slate-950/60 p-2.5 rounded-lg border border-slate-800">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>{b}</span>
                </div>
              ))}
            </div>

            <div className="pt-3">
              <button
                onClick={onOpenQuoteModal}
                className="bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold text-xs uppercase px-7 py-3.5 rounded-xl shadow-lg shadow-sky-500/20 transition-all cursor-pointer"
              >
                PROTEGER A MINHA CASA
              </button>
            </div>
          </div>

          <div className="lg:col-span-6 relative">
            <div className="rounded-2xl overflow-hidden border border-sky-500/30 shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1000"
                alt="Segurança Residencial VONA Moçambique"
                className="w-full h-80 lg:h-96 object-cover"
              />
              <div className="p-4 bg-slate-950 border-t border-slate-800 text-xs text-slate-300 flex items-center justify-between">
                <span>Soluções para Casas, Condomínios e Garagens</span>
                <span className="text-sky-400 font-bold">VONA RESIDENCIAL</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* SECTION: SEGURANÇA CORPORATIVA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 border border-slate-800 rounded-3xl p-8 sm:p-12 overflow-hidden">
          
          <div className="lg:col-span-6 order-2 lg:order-1 relative">
            <div className="rounded-2xl overflow-hidden border border-sky-500/30 shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1000"
                alt="Segurança Corporativa VONA Moçambique"
                className="w-full h-80 lg:h-96 object-cover"
              />
              <div className="p-4 bg-slate-950 border-t border-slate-800 text-xs text-slate-300 flex items-center justify-between">
                <span>Proteção para Escritórios, Lojas e Armazéns</span>
                <span className="text-sky-400 font-bold">VONA CORPORATIVO</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 order-1 lg:order-2 space-y-5">
            <div className="inline-flex items-center space-x-2 text-xs font-bold text-sky-400 uppercase tracking-widest bg-sky-500/10 px-3 py-1 rounded-full border border-sky-500/20">
              <Building className="w-3.5 h-3.5" />
              <span>Proteção Empresarial</span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-black text-white font-display">
              SEGURANÇA PARA O SEU NEGÓCIO
            </h2>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Proteja pessoas, equipamentos, mercadorias e património com soluções profissionais de segurança eletrónica. Reduza riscos operacionais e acompanhe todas as operações em tempo real.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center text-xs">
              {[
                'Escritórios', 'Lojas', 'Armazéns', 'Fábricas',
                'Escolas', 'Clínicas', 'Instituições', 'Propriedades'
              ].map((item, idx) => (
                <div key={idx} className="bg-slate-950 p-3 rounded-xl border border-slate-800 font-semibold text-white">
                  {item}
                </div>
              ))}
            </div>

            <div className="pt-3">
              <button
                onClick={onOpenQuoteModal}
                className="bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs uppercase px-7 py-3.5 rounded-xl shadow-lg shadow-blue-600/20 transition-all cursor-pointer"
              >
                PROTEGER O MEU NEGÓCIO
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* SECTION: VISITA TÉCNICA ESPECIALIZADA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900/80 rounded-3xl p-8 sm:p-12 border border-sky-500/30 text-center space-y-8">
          
          <div className="max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-bold text-sky-400 uppercase tracking-widest bg-sky-500/10 px-3 py-1 rounded-full border border-sky-500/20">
              Planeamento sem Erros
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-white font-display">
              VISITA TÉCNICA ESPECIALIZADA
            </h2>
            <p className="text-xs sm:text-sm text-slate-300">
              Antes da instalação, analisamos o local para identificar pontos cegos, áreas vulneráveis e as melhores posições para instalação das câmeras.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 text-xs font-bold text-white">
            {[
              { label: 'Análise do Imóvel', icon: Home },
              { label: 'Planeamento', icon: Sliders },
              { label: 'Pontos Cegos', icon: ShieldAlert },
              { label: 'Posicionamento', icon: Camera },
              { label: 'Cobertura 100%', icon: Eye },
              { label: 'Segurança Total', icon: Lock },
            ].map((item, i) => {
              const IconC = item.icon;
              return (
                <div key={i} className="bg-slate-950 p-4 rounded-xl border border-slate-800 flex flex-col items-center space-y-2">
                  <IconC className="w-5 h-5 text-sky-400" />
                  <span>{item.label}</span>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* SECTION: POR QUE ESCOLHER A VONA MOÇAMBIQUE? */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto space-y-2 mb-10">
          <h2 className="text-2xl sm:text-3xl font-black text-white font-display">
            POR QUE ESCOLHER A VONA MOÇAMBIQUE?
          </h2>
          <p className="text-xs sm:text-sm text-slate-400">Diferenciais que garantem a segurança e a tranquilidade do seu imóvel.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: 'ACESSO INSTANTÂNEO',
              desc: 'Veja as suas câmeras em tempo real pelo celular de onde quer que esteja.'
            },
            {
              title: 'VISITA TÉCNICA',
              desc: 'Analisamos o local antes da instalação para eliminar pontos cegos.'
            },
            {
              title: 'INSTALAÇÃO PROFISSIONAL',
              desc: 'Configuramos o sistema de acordo com as necessidades exatas do projeto.'
            },
            {
              title: 'SUPORTE CONTÍNUO',
              desc: 'Assistência técnica preventiva e corretiva permanente.'
            },
            {
              title: 'SOLUÇÕES PERSONALIZADAS',
              desc: 'Cada projeto é desenvolvido especificamente de acordo com o imóvel.'
            },
            {
              title: 'TECNOLOGIA',
              desc: 'Soluções modernas com tecnologia IP e analógica HD para uma segurança inteligente.'
            },
          ].map((item, i) => (
            <div key={i} className="bg-slate-900/70 p-6 rounded-2xl border border-slate-800 hover:border-sky-500/30 transition-all">
              <div className="w-8 h-8 rounded-lg bg-sky-500/10 text-sky-400 flex items-center justify-center font-bold text-xs mb-3 border border-sky-500/20">
                0{i + 1}
              </div>
              <h3 className="text-sm font-bold text-white font-display mb-2">{item.title}</h3>
              <p className="text-xs text-slate-400 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FINAL CALL TO ACTION SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-sky-950 via-slate-900 to-blue-950 rounded-3xl p-8 sm:p-14 border border-sky-500/40 text-center space-y-6 tech-glow-lg">
          
          <h2 className="text-3xl sm:text-4xl font-black text-white font-display uppercase tracking-tight">
            PROTEJA O QUE MAIS IMPORTA.
          </h2>

          <p className="text-lg font-bold text-sky-300">
            Sua família. Seu negócio. Seu património.
          </p>

          <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto leading-relaxed">
            Solicite uma avaliação e descubra a solução de segurança ideal para o seu imóvel residencial ou comercial.
          </p>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={onOpenQuoteModal}
              className="w-full sm:w-auto bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold text-xs uppercase px-8 py-4 rounded-xl shadow-xl shadow-sky-500/20 cursor-pointer"
            >
              SOLICITAR ORÇAMENTO
            </button>

            <a
              href={COMPANY_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs uppercase px-8 py-4 rounded-xl shadow-xl shadow-emerald-500/20 flex items-center justify-center space-x-2"
            >
              <MessageSquare className="w-4 h-4 fill-slate-950" />
              <span>FALAR NO WHATSAPP ({COMPANY_INFO.phone})</span>
            </a>
          </div>

        </div>
      </section>

    </div>
  );
};
