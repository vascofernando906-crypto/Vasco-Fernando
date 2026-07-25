import React from 'react';
import { COMPANY_INFO } from '../data/constants';
import { MessageSquare } from 'lucide-react';

export const WhatsAppFloatingButton: React.FC = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center group">
      {/* Hover Tooltip for Desktop */}
      <div className="hidden sm:block mr-3 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0 pointer-events-none">
        <div className="bg-slate-900 border border-emerald-500/40 text-slate-100 text-xs font-semibold px-3 py-1.5 rounded-lg shadow-xl whitespace-nowrap flex items-center space-x-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
          <span>Falar com VONA Moçambique</span>
        </div>
      </div>

      {/* Floating Action Button */}
      <a
        href={COMPANY_INFO.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar no WhatsApp com VONA Moçambique"
        className="relative flex items-center justify-center w-14 h-14 bg-emerald-500 hover:bg-emerald-400 text-slate-950 rounded-full shadow-2xl shadow-emerald-500/40 border-2 border-emerald-300 hover:scale-105 active:scale-95 transition-all duration-300"
      >
        <span className="absolute -top-1 -right-1 flex h-4 w-4">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-300 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-4 w-4 bg-emerald-400 border border-slate-950"></span>
        </span>
        <MessageSquare className="w-7 h-7 text-slate-950 fill-slate-950" />
      </a>
    </div>
  );
};
