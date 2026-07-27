import React, { useState } from 'react';
import { DEMO_CAMERA_FEEDS, COMPANY_INFO } from '../data/constants';
import { 
  Camera, Globe, Server, Smartphone, Eye, Bell, PlayCircle, ShieldCheck, 
  ArrowRight, Moon, Sun, AlertTriangle, Maximize2, Radio, CheckCircle2
} from 'lucide-react';

interface MonitoringViewProps {
  onOpenQuoteModal: () => void;
}

export const MonitoringView: React.FC<MonitoringViewProps> = ({ onOpenQuoteModal }) => {
  const [selectedFeedIndex, setSelectedFeedIndex] = useState(0);
  const [nightMode, setNightMode] = useState(false);
  const [zoomLevel, setZoomLevel] = useState('1x');
  const [simulatedAlert, setSimulatedAlert] = useState(false);

  const feed = DEMO_CAMERA_FEEDS[selectedFeedIndex];

  const triggerAlertSimulation = () => {
    setSimulatedAlert(true);
    setTimeout(() => setSimulatedAlert(false), 4000);
  };

  return (
    <div className="space-y-16 pb-16">
      
      {/* Header Banner */}
      <section className="text-center space-y-3 pt-6 max-w-3xl mx-auto">
        <span className="text-xs font-bold text-sky-400 uppercase tracking-widest bg-sky-500/10 px-3 py-1 rounded-full border border-sky-500/20">
          Videovigilância Conectada 24h
        </span>
        <h1 className="text-3xl sm:text-4xl font-black text-white font-display">
          MONITORAMENTO E CONTROLO EM TEMPO REAL
        </h1>
        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
          Com a VONA MOÇAMBIQUE, você pode acompanhar o seu património sem precisar estar fisicamente no local.
        </p>
      </section>

      {/* Visual Pipeline Section: CÂMERAS → INTERNET → SISTEMA DE MONITORAMENTO → SMARTPHONE / TABLET / COMPUTADOR */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900 border border-sky-500/30 rounded-3xl p-8 text-center space-y-8 tech-glow">
          <h2 className="text-xs font-bold text-sky-400 uppercase tracking-widest">
            COMO FUNCIONA A CONEXÃO DO MONITORAMENTO
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-center">
            
            {/* Step 1 */}
            <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800 flex flex-col items-center space-y-3 relative group hover:border-sky-500/50 transition-all">
              <div className="w-12 h-12 rounded-xl bg-sky-500/10 text-sky-400 border border-sky-500/30 flex items-center justify-center">
                <Camera className="w-6 h-6" />
              </div>
              <h3 className="text-xs font-bold text-white uppercase tracking-wider">1. CÂMERAS</h3>
              <p className="text-[11px] text-slate-400">Captura em alta resolução (Bullet, PTZ, IP)</p>
            </div>

            {/* Step 2 */}
            <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800 flex flex-col items-center space-y-3 relative group hover:border-sky-500/50 transition-all">
              <div className="w-12 h-12 rounded-xl bg-sky-500/10 text-sky-400 border border-sky-500/30 flex items-center justify-center">
                <Globe className="w-6 h-6" />
              </div>
              <h3 className="text-xs font-bold text-white uppercase tracking-wider">2. INTERNET</h3>
              <p className="text-[11px] text-slate-400">Transmissão segura e encriptada</p>
            </div>

            {/* Step 3 */}
            <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800 flex flex-col items-center space-y-3 relative group hover:border-sky-500/50 transition-all">
              <div className="w-12 h-12 rounded-xl bg-sky-500/10 text-sky-400 border border-sky-500/30 flex items-center justify-center">
                <Server className="w-6 h-6" />
              </div>
              <h3 className="text-xs font-bold text-white uppercase tracking-wider">3. SISTEMA DE MONITORAMENTO</h3>
              <p className="text-[11px] text-slate-400">Processamento em NVR / DVR / Nuvem</p>
            </div>

            {/* Step 4 */}
            <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800 flex flex-col items-center space-y-3 relative group hover:border-sky-500/50 transition-all">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 flex items-center justify-center">
                <Smartphone className="w-6 h-6" />
              </div>
              <h3 className="text-xs font-bold text-white uppercase tracking-wider">4. SMARTPHONE / TABLET</h3>
              <p className="text-[11px] text-slate-400">Acesso instantâneo e notificações ao vivo</p>
            </div>

          </div>
        </div>
      </section>

      {/* Interactive Live Monitor Demo Interactive Console */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-950 border border-slate-800 rounded-3xl p-6 sm:p-10 space-y-6">
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-4">
            <div>
              <div className="flex items-center space-x-2">
                <span className="w-3 h-3 rounded-full bg-red-500 animate-ping"></span>
                <h2 className="text-base font-bold text-white font-display uppercase tracking-wider">
                  Simulador de Monitoramento VONA
                </h2>
              </div>
              <p className="text-xs text-slate-400">Teste a transmissão ao vivo e altere as opções de câmeras e zoom</p>
            </div>

            <div className="flex items-center space-x-2">
              <button
                onClick={() => setNightMode(!nightMode)}
                className={`px-3 py-1.5 rounded-lg border text-xs font-bold flex items-center space-x-1.5 transition-colors ${
                  nightMode ? 'bg-indigo-950 text-indigo-300 border-indigo-700' : 'bg-slate-900 text-slate-300 border-slate-800'
                }`}
              >
                {nightMode ? <Moon className="w-3.5 h-3.5 text-indigo-400" /> : <Sun className="w-3.5 h-3.5 text-amber-400" />}
                <span>{nightMode ? 'Modo Noturno (IR)' : 'Modo Dia (Cores)'}</span>
              </button>

              <button
                onClick={triggerAlertSimulation}
                className="px-3 py-1.5 rounded-lg bg-red-950/80 hover:bg-red-900 text-red-300 border border-red-800 text-xs font-bold flex items-center space-x-1.5"
              >
                <AlertTriangle className="w-3.5 h-3.5" />
                <span>Simular Alerta de Perímetro</span>
              </button>
            </div>
          </div>

          {/* Main Feed Video Display */}
          <div className="relative aspect-video rounded-2xl overflow-hidden bg-black border border-slate-800">
            <img
              src={feed.imageUrl}
              alt={feed.name}
              loading="eager"
              decoding="async"
              className={`w-full h-full object-cover transition-all duration-700 ${
                nightMode ? 'grayscale brightness-90 contrast-125' : ''
              } ${
                zoomLevel === '2x' ? 'scale-125' : zoomLevel === '4x' ? 'scale-150' : 'scale-100'
              }`}
            />

            {/* Alert Banner Simulation */}
            {simulatedAlert && (
              <div className="absolute top-4 left-1/2 -translate-x-1/2 bg-red-600/90 text-white font-extrabold text-xs px-6 py-2 rounded-full shadow-2xl animate-bounce border border-red-400 flex items-center space-x-2">
                <Radio className="w-4 h-4 animate-spin" />
                <span>ALERTA DE INTRUSÃO DETECTADA — NOTIFICANDO PROPRIETÁRIO</span>
              </div>
            )}

            {/* OSD Info Overlay */}
            <div className="absolute top-4 left-4 bg-slate-950/80 backdrop-blur p-2.5 rounded-xl border border-slate-800 text-xs space-y-1">
              <div className="flex items-center space-x-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                <span className="font-bold text-white">{feed.name}</span>
              </div>
              <p className="text-[10px] text-slate-400 font-mono">{feed.location} | {feed.type}</p>
            </div>

            <div className="absolute top-4 right-4 bg-slate-950/80 backdrop-blur px-3 py-1.5 rounded-xl border border-slate-800 text-[10px] font-mono text-emerald-400">
              FPS: {feed.fps} | ZOOM: {zoomLevel} | {feed.resolution}
            </div>

            {/* Bottom Controls */}
            <div className="absolute bottom-4 left-4 right-4 bg-slate-950/90 backdrop-blur p-3 rounded-2xl border border-slate-800 flex items-center justify-between gap-2">
              <div className="flex items-center space-x-1">
                <span className="text-[11px] font-bold text-slate-400 mr-2">Nível de Zoom:</span>
                {['1x', '2x', '4x'].map((z) => (
                  <button
                    key={z}
                    onClick={() => setZoomLevel(z)}
                    className={`px-2.5 py-1 rounded text-xs font-bold border ${
                      zoomLevel === z ? 'bg-sky-500 text-slate-950 border-sky-400' : 'bg-slate-900 text-slate-400 border-slate-800'
                    }`}
                  >
                    {z}
                  </button>
                ))}
              </div>

              <div className="flex items-center space-x-2 text-xs">
                <span className="text-slate-400 text-[10px] hidden sm:inline">Acesso Remoto Seguro por Encriptação TLS</span>
                <div className="px-2.5 py-1 rounded bg-sky-500/20 text-sky-400 border border-sky-500/30 text-[10px] font-bold">
                  SINAL HD
                </div>
              </div>
            </div>

          </div>

          {/* Feed Selector Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {DEMO_CAMERA_FEEDS.map((f, i) => (
              <button
                key={f.id}
                onClick={() => setSelectedFeedIndex(i)}
                className={`p-3 rounded-xl border text-left transition-all ${
                  selectedFeedIndex === i
                    ? 'bg-sky-500/20 border-sky-400 text-white'
                    : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-slate-200'
                }`}
              >
                <p className="text-xs font-bold truncate">{f.name}</p>
                <p className="text-[10px] text-slate-400 truncate">{f.location}</p>
              </button>
            ))}
          </div>

        </div>
      </section>

      {/* Benefits and Features Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: 'Visualização ao Vivo',
              desc: 'Transmissão sem travamentos com visualização em alta definição no seu smartphone.'
            },
            {
              title: 'Acesso Remoto Seguro',
              desc: 'Credenciais encriptadas protegendo a privacidade das suas câmeras contra acessos indevidos.'
            },
            {
              title: 'Consulta de Gravações',
              desc: 'Acesso facilitado ao histórico gravado no NVR/DVR para revisão de ocorrências.'
            },
            {
              title: 'Notificações de Eventos',
              desc: 'Receba alertas instantâneos no seu celular quando o sistema detectar movimentação.'
            },
            {
              title: 'Acompanhamento Contínuo',
              desc: 'Garantia de gravação 24h por dia, 7 dias por semana, com discos rígidos de alta capacidade.'
            },
            {
              title: 'Monitoramento Presencial 24h',
              desc: 'Conforme o serviço contratado, disponibilizamos planos especiais de suporte e vigilância.'
            },
          ].map((item, i) => (
            <div key={i} className="bg-slate-900/80 p-6 rounded-2xl border border-slate-800 space-y-2">
              <div className="flex items-center space-x-2 text-sky-400 font-bold text-sm">
                <CheckCircle2 className="w-4 h-4 text-sky-400" />
                <span>{item.title}</span>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SPECIAL SECTION: SEMPRE CONECTADO AO SEU PATRIMÓNIO */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-sky-950 via-slate-900 to-sky-950 p-8 sm:p-12 rounded-3xl border border-sky-500/30 text-center space-y-5">
          <h2 className="text-2xl sm:text-3xl font-black text-white font-display uppercase tracking-tight">
            SEMPRE CONECTADO AO SEU PATRIMÓNIO.
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto">
            Não deixe o seu imóvel desprotegido quando estiver longe. Fale com a equipa da VONA Moçambique e instale uma solução de monitoramento profissional.
          </p>
          <div className="pt-2">
            <button
              onClick={onOpenQuoteModal}
              className="bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold text-xs uppercase px-8 py-3.5 rounded-xl shadow-xl shadow-sky-500/20 cursor-pointer"
            >
              SOLICITAR ORÇAMENTO DE MONITORAMENTO
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};
