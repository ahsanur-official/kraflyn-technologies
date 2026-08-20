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
import { motion, AnimatePresence } from 'motion/react';

const ToastNotification: React.FC = () => {
  const { toastMessage } = useApp();

  return (
    <AnimatePresence>
      {toastMessage && (
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 15, scale: 0.95 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="fixed bottom-20 md:bottom-6 right-4 z-50 pointer-events-none"
        >
          <div className="bg-slate-900/95 backdrop-blur-md text-white px-4 py-3 rounded-2xl shadow-2xl border border-slate-700/80 flex items-center gap-3 text-xs sm:text-sm font-semibold pointer-events-auto">
            <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
            <span>{toastMessage}</span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
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
          <motion.div
            key="home"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          >
            <Hero />
            <ProblemTriage />
            <ServiceCardGrid />
            <HowItWorks />
            <CustomerReviewsSection />
            <FaqSection />
          </motion.div>
        );

      case 'services':
        return (
          <motion.div
            key="services"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="py-6"
          >
            <ServiceCardGrid />
            <ProblemTriage />
            <HowItWorks />
            <CustomerReviewsSection />
            <FaqSection />
          </motion.div>
        );

      case 'how-it-works':
        return (
          <motion.div
            key="how-it-works"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="py-6"
          >
            <HowItWorks />
            <ServiceCardGrid />
            <CustomerReviewsSection />
            <FaqSection />
          </motion.div>
        );

      case 'reviews':
        return (
          <motion.div
            key="reviews"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="py-6"
          >
            <CustomerReviewsSection />
            <ServiceCardGrid />
            <HowItWorks />
            <FaqSection />
          </motion.div>
        );

      case 'about':
        return (
          <motion.div
            key="about"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          >
            <AboutUs />
            <CustomerReviewsSection />
          </motion.div>
        );

      case 'contact':
        return (
          <motion.div
            key="contact"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          >
            <ContactSection />
          </motion.div>
        );

      default:
        return (
          <motion.div
            key="default"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          >
            <Hero />
            <ProblemTriage />
            <ServiceCardGrid />
            <HowItWorks />
            <CustomerReviewsSection />
            <FaqSection />
          </motion.div>
        );
    }
  };

  return (
    <div className="min-h-screen w-full overflow-x-hidden flex flex-col bg-white text-slate-900 font-sans selection:bg-blue-600 selection:text-white pb-16 md:pb-0">
      {/* Navigation Header */}
      <Navbar />

      {/* Main Dynamic View with AnimatePresence */}
      <main className="flex-1 w-full overflow-x-hidden">
        <AnimatePresence mode="wait">
          {renderActiveView()}
        </AnimatePresence>
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

