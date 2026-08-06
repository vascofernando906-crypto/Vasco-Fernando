import React, { useState } from 'react';
import { TabType } from '../types';
import { COMPANY_INFO } from '../data/constants';
import { Shield, Phone, Facebook, Instagram, Menu, X, Camera, MessageSquare, ChevronRight } from 'lucide-react';

interface HeaderProps {
  activeTab: TabType;
  setActiveTab: (tab: TabType) => void;
  onOpenQuoteModal: () => void;
}

export const Header: React.FC<HeaderProps> = ({ activeTab, setActiveTab, onOpenQuoteModal }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems: { id: TabType; label: string }[] = [
    { id: 'inicio', label: 'INÍCIO' },
    { id: 'solucoes', label: 'SOLUÇÕES' },
    { id: 'monitoramento', label: 'MONITORAMENTO' },
    { id: 'projetos', label: 'PROJETOS' },
    { id: 'sobre', label: 'SOBRE NÓS' },
    { id: 'contactos', label: 'CONTACTOS' },
  ];

  const handleNavClick = (tab: TabType) => {
    setActiveTab(tab);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-slate-950/90 backdrop-blur-md border-b border-slate-800/80 shadow-lg">
      {/* Top Bar for Contacts & Facebook */}
      <div className="hidden md:block bg-slate-900/90 border-b border-slate-800/50 py-1.5 text-xs text-slate-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <div className="flex items-center space-x-6">
            <a 
              href={`tel:${COMPANY_INFO.phoneRaw}`} 
              className="flex items-center space-x-2 hover:text-sky-400 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-sky-400" />
              <span>{COMPANY_INFO.phone}</span>
            </a>
            <span className="text-slate-700">|</span>
            <span className="text-slate-400 font-medium">
              {COMPANY_INFO.field}
            </span>
          </div>

          <div className="flex items-center space-x-3">
            <a
              href={COMPANY_INFO.facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-1.5 bg-blue-900/40 hover:bg-blue-800/60 text-blue-300 hover:text-white px-2.5 py-0.5 rounded border border-blue-700/40 transition-colors"
              title="Página Oficial do Facebook"
            >
              <Facebook className="w-3.5 h-3.5" />
              <span className="font-semibold text-[11px]">{COMPANY_INFO.facebookButtonText}</span>
            </a>
            <a
              href={COMPANY_INFO.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-1.5 bg-pink-950/40 hover:bg-pink-900/60 text-pink-300 hover:text-white px-2.5 py-0.5 rounded border border-pink-700/40 transition-colors"
              title="Página Oficial do Instagram"
            >
              <Instagram className="w-3.5 h-3.5 text-pink-400" />
              <span className="font-semibold text-[11px]">{COMPANY_INFO.instagramButtonText}</span>
            </a>
            <a
              href={COMPANY_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-1.5 bg-emerald-950/50 text-emerald-400 hover:text-emerald-300 px-2.5 py-0.5 rounded border border-emerald-800/40 transition-colors"
            >
              <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
              <span className="font-semibold text-[11px]">WhatsApp 24h</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo Section */}
          <button 
            onClick={() => handleNavClick('inicio')} 
            className="flex items-center space-x-3 group text-left focus:outline-none"
            aria-label="VONA Moçambique - Ir para início"
          >
            <img 
              src="/vona-logo.png" 
              alt="Logótipo Oficial VONA Moçambique" 
              className="w-11 h-11 sm:w-12 sm:h-12 object-contain rounded-full border border-sky-500/40 shadow-lg shadow-sky-500/10 group-hover:border-sky-400 group-hover:scale-105 transition-all shrink-0 bg-slate-950"
            />
            <div>
              <div className="flex items-center space-x-1">
                <span className="text-xl sm:text-2xl font-black tracking-tight text-white font-display">VONA</span>
                <span className="text-[10px] sm:text-xs font-bold px-1.5 py-0.5 rounded bg-sky-500/20 text-sky-400 border border-sky-500/30">MOÇAMBIQUE</span>
              </div>
              <p className="text-[10px] tracking-wider text-slate-400 font-semibold uppercase">
                Segurança Eletrónica & Presencial
              </p>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`px-3.5 py-2 rounded-lg text-xs font-bold tracking-wider transition-all ${
                  activeTab === item.id
                    ? 'bg-sky-500/10 text-sky-400 border border-sky-500/30 shadow-sm'
                    : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Desktop Action Buttons */}
          <div className="hidden lg:flex items-center space-x-3">
            <button
              onClick={onOpenQuoteModal}
              className="bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-400 hover:to-blue-500 text-white font-bold text-xs uppercase px-5 py-2.5 rounded-lg shadow-lg shadow-sky-500/20 border border-sky-400/30 transition-all hover:scale-102 cursor-pointer"
            >
              SOLICITAR ORÇAMENTO
            </button>
          </div>

          {/* Mobile Menu Hamburger Button */}
          <div className="lg:hidden flex items-center space-x-2">
            <button
              onClick={onOpenQuoteModal}
              className="bg-sky-500 text-slate-950 font-bold text-[11px] px-3 py-1.5 rounded-md uppercase"
            >
              Orçamento
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-white"
              aria-label="Abrir Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6 text-sky-400" /> : <Menu className="w-6 h-6 text-slate-200" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-slate-950 border-b border-slate-800 px-4 pt-4 pb-6 space-y-4 animate-in slide-in-from-top-2 duration-200">
          
          {/* Mobile Drawer Brand Header */}
          <div className="flex items-center space-x-3 pb-3 border-b border-slate-800">
            <img 
              src="/vona-logo.png" 
              alt="Logótipo VONA Moçambique" 
              className="w-10 h-10 object-contain rounded-full border border-sky-500/40 shrink-0 bg-slate-900"
            />
            <div>
              <div className="flex items-center space-x-1">
                <span className="text-lg font-black text-white font-display">VONA</span>
                <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-sky-500/20 text-sky-400 border border-sky-500/30">MOÇAMBIQUE</span>
              </div>
              <p className="text-[9px] text-slate-400 uppercase font-semibold">Segurança Eletrónica & Presencial</p>
            </div>
          </div>

          <div className="space-y-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`w-full flex items-center justify-between px-4 py-3 rounded-lg text-sm font-bold tracking-wider ${
                  activeTab === item.id
                    ? 'bg-sky-500/20 text-sky-400 border border-sky-500/40'
                    : 'text-slate-300 hover:bg-slate-900'
                }`}
              >
                <span>{item.label}</span>
                <ChevronRight className="w-4 h-4 text-slate-500" />
              </button>
            ))}
          </div>

          <div className="pt-3 border-t border-slate-800/80 space-y-2.5">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenQuoteModal();
              }}
              className="w-full bg-gradient-to-r from-sky-500 to-blue-600 text-white font-bold text-xs uppercase py-3 rounded-lg shadow-md text-center"
            >
              SOLICITAR ORÇAMENTO
            </button>

            <div className="grid grid-cols-2 gap-2">
              <a
                href={COMPANY_INFO.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center space-x-2 bg-blue-900/50 hover:bg-blue-800/70 text-blue-200 py-2.5 rounded-lg border border-blue-700/50 text-xs font-bold transition-colors"
              >
                <Facebook className="w-4 h-4 text-blue-400" />
                <span>Facebook</span>
              </a>

              <a
                href={COMPANY_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center space-x-2 bg-pink-950/50 hover:bg-pink-900/70 text-pink-200 py-2.5 rounded-lg border border-pink-700/50 text-xs font-bold transition-colors"
              >
                <Instagram className="w-4 h-4 text-pink-400" />
                <span>Instagram</span>
              </a>
            </div>

            <a
              href={`tel:${COMPANY_INFO.phoneRaw}`}
              className="w-full flex items-center justify-center space-x-2 bg-slate-900 text-slate-300 py-2.5 rounded-lg border border-slate-800 text-xs font-bold"
            >
              <Phone className="w-4 h-4 text-sky-400" />
              <span>{COMPANY_INFO.phone}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
