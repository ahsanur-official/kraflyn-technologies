import React from 'react';
import { AppProvider, useApp } from './context/AppContext';
import { Navbar } from './components/common/Navbar';
import { MobileBottomNav } from './components/common/MobileBottomNav';
import { Footer } from './components/common/Footer';

// Public Landing Components
import { Hero } from './components/public/Hero';
import { ProblemTriage } from './components/public/ProblemTriage';
import { ServiceCardGrid } from './components/public/ServiceCardGrid';
import { HowItWorks } from './components/public/HowItWorks';
import { CustomerReviewsSection } from './components/reviews/CustomerReviewsSection';
import { FaqSection } from './components/public/FaqSection';
import { ContactSection } from './components/public/ContactSection';
import { AboutUs } from './components/public/AboutUs';

// Admin Dashboard
import { AdminDashboard } from './admin/AdminDashboard';

// Modals & Drawers
import { CartDrawer } from './components/cart/CartDrawer';
import { OrderModal } from './components/order/OrderModal';
import { OrderSuccessModal } from './components/order/OrderSuccessModal';
import { OrderTrackerModal } from './components/order/OrderTrackerModal';
import { WriteReviewModal } from './components/reviews/WriteReviewModal';
import { ServiceDetailModal } from './components/public/ServiceDetailModal';
import { CheckCircle2 } from 'lucide-react';

const ToastNotification: React.FC = () => {
  const { toastMessage } = useApp();
  if (!toastMessage) return null;

  return (
    <div className="fixed bottom-20 md:bottom-6 right-4 z-50 animate-in slide-in-from-bottom duration-300">
      <div className="bg-slate-900 text-white px-4 py-3 rounded-2xl shadow-2xl border border-slate-700 flex items-center gap-3 text-xs sm:text-sm font-medium">
        <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
        <span>{toastMessage}</span>
      </div>
    </div>
  );
};

const AppContent: React.FC = () => {
  const { currentView, activeNavTab } = useApp();

  // If Admin Panel is selected, render isolated Admin Operations Dashboard
  if (currentView === 'admin') {
    return (
      <div className="min-h-screen bg-slate-100 font-sans selection:bg-blue-600 selection:text-white">
        <AdminDashboard />
        <ToastNotification />
      </div>
    );
  }

  // Student-Facing Web Application
  const renderActiveView = () => {
    switch (activeNavTab) {
      case 'home':
        return (
          <>
            <Hero />
            <ProblemTriage />
            <ServiceCardGrid />
            <HowItWorks />
            <CustomerReviewsSection />
            <FaqSection />
          </>
        );

      case 'services':
        return (
          <div className="py-6">
            <ServiceCardGrid />
            <ProblemTriage />
            <HowItWorks />
            <CustomerReviewsSection />
            <FaqSection />
          </div>
        );

      case 'how-it-works':
        return (
          <div className="py-6">
            <HowItWorks />
            <ServiceCardGrid />
            <CustomerReviewsSection />
            <FaqSection />
          </div>
        );

      case 'reviews':
        return (
          <div className="py-6">
            <CustomerReviewsSection />
            <ServiceCardGrid />
            <HowItWorks />
            <FaqSection />
          </div>
        );

      case 'about':
        return (
          <>
            <AboutUs />
            <CustomerReviewsSection />
          </>
        );

      case 'contact':
        return <ContactSection />;

      default:
        return (
          <>
            <Hero />
            <ProblemTriage />
            <ServiceCardGrid />
            <HowItWorks />
            <CustomerReviewsSection />
            <FaqSection />
          </>
        );
    }
  };

  return (
    <div className="min-h-screen w-full overflow-x-hidden flex flex-col bg-white text-slate-900 font-sans selection:bg-blue-600 selection:text-white pb-16 md:pb-0">
      {/* Navigation Header */}
      <Navbar />

      {/* Main Dynamic View */}
      <main className="flex-1 w-full overflow-x-hidden">
        {renderActiveView()}
      </main>

      {/* Global Footer */}
      <Footer />

      {/* Mobile Bottom Fixed Nav */}
      <MobileBottomNav />

      {/* Modals, Drawers & Toast */}
      <CartDrawer />
      <OrderModal />
      <OrderSuccessModal />
      <OrderTrackerModal />
      <WriteReviewModal />
      <ServiceDetailModal />
      <ToastNotification />
    </div>
  );
};

export default function App() {
  return (
    <AppProvider>
      <AppContent />
    </AppProvider>
  );
}
