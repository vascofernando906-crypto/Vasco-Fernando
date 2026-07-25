import React, { useState } from 'react';
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
