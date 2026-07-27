import React, { useState, useEffect } from 'react';
import { TabType } from './types';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { WhatsAppFloatingButton } from './components/WhatsAppFloatingButton';
import { QuoteCalculatorModal } from './components/QuoteCalculatorModal';
import { PrivacyNoticeModal } from './components/PrivacyNoticeModal';

import { HomeView } from './components/HomeView';
import { SolutionsView } from './components/SolutionsView';
import { MonitoringView } from './components/MonitoringView';
import { ProjectsView } from './components/ProjectsView';
import { AboutView } from './components/AboutView';
import { ContactView } from './components/ContactView';
import { SatisfiedClientsView } from './components/SatisfiedClientsView';

export default function App() {
  const [activeTab, setActiveTab] = useState<TabType>('inicio');
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [isPrivacyModalOpen, setIsPrivacyModalOpen] = useState(false);

  useEffect(() => {
    switch (activeTab) {
      case 'inicio':
        document.title = 'VONA Moçambique | Câmeras de Segurança, CCTV, Monitoramento 24 Horas';
        break;
      case 'solucoes':
        document.title = 'Soluções de Segurança & CCTV | VONA Moçambique';
        break;
      case 'monitoramento':
        document.title = 'Monitoramento Remoto 24h | VONA Moçambique';
        break;
      case 'projetos':
        document.title = 'Projetos de Instalação Concluídos | VONA Moçambique';
        break;
      case 'sobre':
        document.title = 'Sobre Nós | VONA Moçambique';
        break;
      case 'contactos':
        document.title = 'Contactos e Orçamentos | VONA Moçambique';
        break;
      case 'clientes':
        document.title = 'Clientes Satisfeitos | VONA Moçambique';
        break;
      default:
        document.title = 'VONA Moçambique | Câmeras de Segurança, CCTV, Monitoramento 24 Horas';
    }
  }, [activeTab]);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-sky-500 selection:text-white">
      
      {/* Header */}
      <Header
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onOpenQuoteModal={() => setIsQuoteModalOpen(true)}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {activeTab === 'inicio' && (
          <HomeView
            setActiveTab={setActiveTab}
            onOpenQuoteModal={() => setIsQuoteModalOpen(true)}
          />
        )}

        {activeTab === 'solucoes' && (
          <SolutionsView
            onOpenQuoteModal={() => setIsQuoteModalOpen(true)}
          />
        )}

        {activeTab === 'monitoramento' && (
          <MonitoringView
            onOpenQuoteModal={() => setIsQuoteModalOpen(true)}
          />
        )}

        {activeTab === 'projetos' && (
          <ProjectsView
            onOpenQuoteModal={() => setIsQuoteModalOpen(true)}
          />
        )}

        {activeTab === 'sobre' && (
          <AboutView
            onOpenQuoteModal={() => setIsQuoteModalOpen(true)}
            onOpenPrivacyModal={() => setIsPrivacyModalOpen(true)}
          />
        )}

        {activeTab === 'contactos' && (
          <ContactView />
        )}

        {activeTab === 'clientes' && (
          <SatisfiedClientsView
            onOpenQuoteModal={() => setIsQuoteModalOpen(true)}
          />
        )}
      </main>

      {/* Footer */}
      <Footer
        setActiveTab={setActiveTab}
        onOpenPrivacyModal={() => setIsPrivacyModalOpen(true)}
      />

      {/* Floating WhatsApp Action Button */}
      <WhatsAppFloatingButton />

      {/* Modals */}
      <QuoteCalculatorModal
        isOpen={isQuoteModalOpen}
        onClose={() => setIsQuoteModalOpen(false)}
      />

      <PrivacyNoticeModal
        isOpen={isPrivacyModalOpen}
        onClose={() => setIsPrivacyModalOpen(false)}
      />

    </div>
  );
}
