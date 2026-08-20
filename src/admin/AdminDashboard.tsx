import React, { useState, useEffect } from 'react';
import { useApp } from '../context/AppContext';
import { AdminNavbar } from './components/AdminNavbar';
import { AdminOverview } from './components/AdminOverview';
import { OrdersManager } from './components/OrdersManager';
import { ReviewsManager } from './components/ReviewsManager';
import { MentorsManager } from './components/MentorsManager';
import { ServicesPricingManager } from './components/ServicesPricingManager';
import { AdminLogin } from './components/AdminLogin';
import { motion, AnimatePresence } from 'motion/react';

export const AdminDashboard: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(() => {
    return sessionStorage.getItem('eduquest_admin_session') === 'authenticated';
  });
  
  const [activeTab, setActiveTab] = useState<'overview' | 'orders' | 'reviews' | 'mentors' | 'services'>('overview');

  const handleLogout = () => {
    sessionStorage.removeItem('eduquest_admin_session');
    setIsAuthenticated(false);
  };

  if (!isAuthenticated) {
    return <AdminLogin onAuthenticated={() => setIsAuthenticated(true)} />;
  }

  return (
    <div className="min-h-screen bg-slate-100 flex flex-col font-sans text-slate-800">
      
      {/* Decoupled Admin Header with Live Status & Switchers */}
      <AdminNavbar 
        activeTab={activeTab} 
        setActiveTab={setActiveTab} 
        onLogout={handleLogout} 
      />

      {/* Main Admin Content Container */}
      <main className="flex-1 max-w-[1920px] w-full mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 2xl:px-20 py-6 sm:py-8">
        <AnimatePresence mode="wait">
          {activeTab === 'overview' && (
            <motion.div
              key="overview"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.25 }}
            >
              <AdminOverview 
                onGoToOrders={() => setActiveTab('orders')} 
                onGoToReviews={() => setActiveTab('reviews')} 
              />
            </motion.div>
          )}

          {activeTab === 'orders' && (
            <motion.div
              key="orders"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.25 }}
            >
              <OrdersManager />
            </motion.div>
          )}

          {activeTab === 'reviews' && (
            <motion.div
              key="reviews"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.25 }}
            >
              <ReviewsManager />
            </motion.div>
          )}

          {activeTab === 'mentors' && (
            <motion.div
              key="mentors"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.25 }}
            >
              <MentorsManager />
            </motion.div>
          )}

          {activeTab === 'services' && (
            <motion.div
              key="services"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.25 }}
            >
              <ServicesPricingManager />
            </motion.div>
          )}
        </AnimatePresence>
      </main>

    </div>
  );
};

export default AdminDashboard;
