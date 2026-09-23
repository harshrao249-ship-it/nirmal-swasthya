import React from 'react';
import { AppProvider, useApp } from './context/AppContext';
import { Header } from './components/Header';
import { AccessibilityBar } from './components/AccessibilityBar';
import { HeroSection } from './components/HeroSection';
import { FacilityLocator } from './components/FacilityLocator';
import { CoreServicesGrid } from './components/CoreServicesGrid';
import { LiveMedicineStock } from './components/LiveMedicineStock';
import { TelemedicinePortal } from './components/TelemedicinePortal';
import { GrievanceForm } from './components/GrievanceForm';
import { AshaAdminDashboard } from './components/AshaAdminDashboard';
import { Footer } from './components/Footer';
import { PhoneCall, ArrowUp } from 'lucide-react';

const MainContent: React.FC = () => {
  const { activeTab, setActiveTab, language } = useApp();

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 font-sans">
      <Header />
      <AccessibilityBar />

      <main className="flex-1">
        {activeTab === 'home' && (
          <>
            <HeroSection />
            <CoreServicesGrid />
            <FacilityLocator />
            <LiveMedicineStock />
            <GrievanceForm />
          </>
        )}

        {activeTab === 'locator' && <FacilityLocator />}

        {activeTab === 'telemed' && <TelemedicinePortal />}

        {activeTab === 'medicines' && <LiveMedicineStock />}

        {activeTab === 'grievance' && <GrievanceForm />}

        {activeTab === 'asha-admin' && <AshaAdminDashboard />}
      </main>

      <Footer />

      {/* Floating 1-Tap Emergency SOS Speed Dial for Rural Citizens & Seniors */}
      <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-2">
        <a
          href="tel:108"
          className="flex items-center gap-2 px-4 py-3 bg-red-600 hover:bg-red-700 text-white font-extrabold rounded-full shadow-2xl transition-transform hover:scale-105 active:scale-95 border-2 border-white ring-4 ring-red-500/30"
          title="Call 108 Emergency Ambulance"
        >
          <PhoneCall className="w-5 h-5 animate-pulse" />
          <span className="text-sm">
            {language === 'mr' ? '१०८ रुग्णवाहिका' : '108 Ambulance'}
          </span>
        </a>
      </div>
    </div>
  );
};

export default function App() {
  return (
    <AppProvider>
      <MainContent />
    </AppProvider>
  );
}
