import React from 'react';
import { X, ShieldCheck, Lock, Eye, FileText } from 'lucide-react';

interface PrivacyNoticeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PrivacyNoticeModal: React.FC<PrivacyNoticeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-xl bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl overflow-hidden my-8">
        
        <div className="flex items-center justify-between p-5 bg-slate-950 border-b border-slate-800">
          <div className="flex items-center space-x-3">
            <div className="p-2 rounded-lg bg-sky-500/10 text-sky-400 border border-sky-500/30">
              <Lock className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-sm font-bold text-white font-display uppercase tracking-wider">
                Segurança, Privacidade & Proteção de Imagens
              </h2>
              <p className="text-[11px] text-slate-400">VONA MOÇAMBIQUE — Compromisso e Responsabilidade</p>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 space-y-4 text-xs text-slate-300 leading-relaxed max-h-[70vh] overflow-y-auto">
          <div className="p-3.5 bg-sky-950/30 border border-sky-800/40 rounded-xl space-y-1">
            <p className="font-bold text-sky-300 flex items-center space-x-1.5">
              <ShieldCheck className="w-4 h-4 text-sky-400" />
              <span>Compromisso Ético e Encriptação</span>
            </p>
            <p className="text-slate-400 text-[11px]">
              Como empresa de videovigilância e segurança eletrónica, a VONA Moçambique prioriza a confidencialidade das credenciais e o acesso exclusivo do cliente às suas imagens.
            </p>
          </div>

          <div className="space-y-3">
            <div className="flex items-start space-x-3">
              <Eye className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
              <div>
                <h4 className="font-bold text-white">1. Posicionamento Responsável das Câmeras</h4>
                <p className="text-slate-400 text-[11px]">
                  Durante a identificação dos pontos cegos, orientamos a instalação para focar estritamente na proteção do perímetro e património contratado, respeitando a privacidade dos transeuntes e propriedades vizinhas.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <Lock className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
              <div>
                <h4 className="font-bold text-white">2. Acesso Encriptado Remoto</h4>
                <p className="text-slate-400 text-[11px]">
                  Configuramos o aplicativo de monitoramento com encriptação avançada e orientamos a alteração de senhas padrão de fábrica no ato da entrega técnica.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <FileText className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
              <div>
                <h4 className="font-bold text-white">3. Tratamento de Dados e Ocorrências</h4>
                <p className="text-slate-400 text-[11px]">
                  Os registos de imagens e relatórios pertencem unicamente ao cliente contratante. A VONA Moçambique não compartilha dados com terceiros, exceto quando requisitado judicialmente ou sob autorização explícita.
                </p>
              </div>
            </div>
          </div>

          <div className="pt-3 border-t border-slate-800 text-center">
            <button
              onClick={onClose}
              className="bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs uppercase px-6 py-2.5 rounded-lg border border-slate-700"
            >
              Compreendido
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
