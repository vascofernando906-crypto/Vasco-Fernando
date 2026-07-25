import React from 'react';
import { TabType } from '../types';
import { COMPANY_INFO } from '../data/constants';
import { Shield, Camera, Phone, Facebook, MessageSquare, ArrowUpRight, Lock } from 'lucide-react';

interface FooterProps {
  setActiveTab: (tab: TabType) => void;
  onOpenPrivacyModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ setActiveTab, onOpenPrivacyModal }) => {
  const handleNav = (tab: TabType) => {
    setActiveTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 border-t border-slate-800 text-slate-300 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-slate-800/80">
          
          {/* Column 1: Company Profile */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-slate-900 border border-sky-500/40 text-sky-400">
                <Shield className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xl font-black text-white font-display tracking-tight">VONA</span>
                <span className="ml-1 text-[11px] font-bold text-sky-400 bg-sky-500/10 px-1.5 py-0.5 rounded border border-sky-500/30">MOÇAMBIQUE</span>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed">
              Empresa especializada em soluções completas de segurança eletrónica residencial, comercial, corporativa e institucional em Moçambique.
            </p>

            <div className="pt-2 space-y-2">
              <p className="text-[11px] font-semibold text-sky-400 italic">
                "{COMPANY_INFO.mainSlogan}"
              </p>
              <p className="text-xs text-slate-400">
                {COMPANY_INFO.secondarySlogan}
              </p>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-3">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider font-display border-b border-slate-800 pb-2">
              Navegação Rápida
            </h3>
            <ul className="space-y-2 text-xs">
              {([
                { id: 'inicio', label: 'INÍCIO' },
                { id: 'solucoes', label: 'SOLUÇÕES DE SEGURANÇA' },
                { id: 'monitoramento', label: 'MONITORAMENTO REMOTO' },
                { id: 'projetos', label: 'PROJETOS CONCLUÍDOS' },
                { id: 'sobre', label: 'SOBRE NÓS' },
                { id: 'contactos', label: 'CONTACTOS & ORÇAMENTO' },
                { id: 'clientes', label: 'CLIENTES SATISFEITOS' },
              ] as const).map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => handleNav(item.id)}
                    className="hover:text-sky-400 transition-colors flex items-center space-x-1.5 text-left"
                  >
                    <span className="text-sky-500 text-[10px]">▸</span>
                    <span>{item.label}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services */}
          <div className="space-y-3">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider font-display border-b border-slate-800 pb-2">
              Nossos Serviços
            </h3>
            <ul className="space-y-2 text-xs text-slate-400">
              <li className="flex items-center space-x-2">
                <Camera className="w-3.5 h-3.5 text-sky-400" />
                <span>Câmeras IP, Bullet & PTZ</span>
              </li>
              <li className="flex items-center space-x-2">
                <Shield className="w-3.5 h-3.5 text-sky-400" />
                <span>Monitoramento Remoto no Celular</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="w-1.5 h-1.5 rounded-full bg-sky-400"></span>
                <span>Sistemas NVR / DVR</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="w-1.5 h-1.5 rounded-full bg-sky-400"></span>
                <span>Instalação Profissional</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="w-1.5 h-1.5 rounded-full bg-sky-400"></span>
                <span>Manutenção & Assistência Técnica</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="w-1.5 h-1.5 rounded-full bg-sky-400"></span>
                <span>Segurança Residencial</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="w-1.5 h-1.5 rounded-full bg-sky-400"></span>
                <span>Segurança Corporativa</span>
              </li>
            </ul>
          </div>

          {/* Column 4: Direct Contacts & Facebook */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider font-display border-b border-slate-800 pb-2">
              Canais Oficiais
            </h3>

            <div className="space-y-3 text-xs">
              <div className="flex items-start space-x-3 bg-slate-900/80 p-3 rounded-lg border border-slate-800">
                <Phone className="w-4 h-4 text-sky-400 mt-0.5" />
                <div>
                  <p className="text-[10px] text-slate-400 font-medium">Telefone & WhatsApp:</p>
                  <a href={`tel:${COMPANY_INFO.phoneRaw}`} className="font-bold text-white hover:text-sky-400 transition-colors text-sm">
                    {COMPANY_INFO.phone}
                  </a>
                </div>
              </div>

              <div className="space-y-2">
                <p className="text-[11px] text-slate-400">Siga e visite a nossa página oficial:</p>
                <a
                  href={COMPANY_INFO.facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-between bg-blue-900/50 hover:bg-blue-800/80 text-white font-bold text-xs px-4 py-2.5 rounded-lg border border-blue-700/50 transition-all group"
                >
                  <div className="flex items-center space-x-2">
                    <Facebook className="w-4 h-4 text-blue-300" />
                    <span>{COMPANY_INFO.facebookButtonText}</span>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-blue-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </div>

              <a
                href={COMPANY_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center space-x-2 bg-emerald-950/60 hover:bg-emerald-900/80 text-emerald-300 font-bold text-xs py-2.5 rounded-lg border border-emerald-800/60 transition-colors"
              >
                <MessageSquare className="w-4 h-4 text-emerald-400" />
                <span>Conversar no WhatsApp</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© VONA MOÇAMBIQUE — TODOS OS DIREITOS RESERVADOS.</p>
          
          <div className="flex items-center space-x-6">
            <button 
              onClick={onOpenPrivacyModal}
              className="flex items-center space-x-1.5 hover:text-slate-300 transition-colors"
            >
              <Lock className="w-3.5 h-3.5 text-sky-400" />
              <span>Privacidade & Proteção de Dados</span>
            </button>
            <span className="text-slate-800">|</span>
            <span>Moçambique</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
