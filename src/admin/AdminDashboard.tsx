import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { AdminNavbar, AdminTab } from './components/AdminNavbar';
import { AdminOverview } from './components/AdminOverview';
import { OrdersManager } from './components/OrdersManager';
import { ProjectsManager } from './components/ProjectsManager';
import { ReviewsManager } from './components/ReviewsManager';
import { TeamManager } from './components/TeamManager';
import { ServicesPricingManager } from './components/ServicesPricingManager';
import { InquiriesManager } from './components/InquiriesManager';
import { SettingsManager } from './components/SettingsManager';
import { AdminLogin } from './components/AdminLogin';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Sparkles, 
  ShoppingBag, 
  Users, 
  CheckCircle2, 
  Layers,
  FolderGit2,
  Inbox,
  Settings
} from 'lucide-react';

export const AdminDashboard: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(() => {
    return (
      sessionStorage.getItem('kraflyn_admin_session') === 'authenticated' ||
      sessionStorage.getItem('eduquest_admin_session') === 'authenticated'
    );
  });
  
  const [activeTab, setActiveTab] = useState<AdminTab>('overview');
  const { orders, inquiries, projects, mentors, language } = useApp();

  const handleLogout = () => {
    sessionStorage.removeItem('kraflyn_admin_session');
    sessionStorage.removeItem('eduquest_admin_session');
    setIsAuthenticated(false);
  };

  if (!isAuthenticated) {
    return <AdminLogin onAuthenticated={() => setIsAuthenticated(true)} />;
  }

  const newOrdersCount = orders.filter(o => o.status === 'order_received').length;
  const newInquiriesCount = inquiries.filter(i => i.status === 'new').length;

  const mobileNavItems = [
    { id: 'overview' as const, label: language === 'bn' ? 'ওভারভিউ' : 'Overview', icon: Sparkles },
    { id: 'orders' as const, label: language === 'bn' ? 'অর্ডারস' : 'Orders', icon: ShoppingBag, badge: newOrdersCount },
    { id: 'projects' as const, label: language === 'bn' ? 'প্রজেক্টস' : 'Projects', icon: FolderGit2, badge: projects.length },
    { id: 'services' as const, label: language === 'bn' ? 'সার্ভিস' : 'Services', icon: Layers },
    { id: 'team' as const, label: language === 'bn' ? 'টিম' : 'Team', icon: Users, badge: mentors.length },
    { id: 'inquiries' as const, label: language === 'bn' ? 'ইনকোয়ারি' : 'Inquiries', icon: Inbox, badge: newInquiriesCount },
    { id: 'settings' as const, label: language === 'bn' ? 'সেটিংস' : 'Settings', icon: Settings },
  ];

  return (
    <div className="min-h-screen bg-slate-100 flex flex-col font-sans text-slate-800 antialiased pb-20 md:pb-8">
      
      {/* Decoupled Admin Header with Live Status & Switchers */}
      <AdminNavbar 
        activeTab={activeTab} 
        setActiveTab={setActiveTab} 
        onLogout={handleLogout} 
      />

      {/* Main Admin Content Container with responsive padding */}
      <main className="flex-1 max-w-[1920px] w-full mx-auto px-3 sm:px-6 md:px-8 lg:px-10 xl:px-12 py-4 sm:py-6 md:py-8">
        <AnimatePresence mode="wait">
          {activeTab === 'overview' && (
            <motion.div
              key="overview"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.2 }}
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
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.2 }}
            >
              <OrdersManager />
            </motion.div>
          )}

          {activeTab === 'projects' && (
            <motion.div
              key="projects"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.2 }}
            >
              <ProjectsManager />
            </motion.div>
          )}

          {activeTab === 'services' && (
            <motion.div
              key="services"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.2 }}
            >
              <ServicesPricingManager />
            </motion.div>
          )}

          {activeTab === 'team' && (
            <motion.div
              key="team"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.2 }}
            >
              <TeamManager />
            </motion.div>
          )}

          {activeTab === 'reviews' && (
            <motion.div
              key="reviews"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.2 }}
            >
              <ReviewsManager />
            </motion.div>
          )}

          {activeTab === 'inquiries' && (
            <motion.div
              key="inquiries"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.2 }}
            >
              <InquiriesManager />
            </motion.div>
          )}

          {activeTab === 'settings' && (
            <motion.div
              key="settings"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.2 }}
            >
              <SettingsManager />
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Mobile Fixed Bottom Navigation Bar for Native-App Feel */}
      <nav aria-label="Mobile Navigation" className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-slate-900/95 backdrop-blur-md border-t border-slate-800 text-white shadow-2xl px-2 py-1.5 flex items-center justify-around overflow-x-auto scrollbar-none safe-area-inset-bottom">
        {mobileNavItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.id;
          return (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`relative flex flex-col items-center justify-center py-1.5 px-2 rounded-xl text-[10px] font-bold transition-all min-w-[50px] min-h-[48px] shrink-0 cursor-pointer ${
                isActive 
                  ? 'text-blue-400 bg-blue-500/10' 
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <div className="relative">
                <Icon className={`w-5 h-5 ${isActive ? 'text-blue-400' : 'text-slate-400'}`} />
                {item.badge !== undefined && item.badge > 0 && (
                  <span className="absolute -top-1.5 -right-2 min-w-[16px] h-4 px-1 rounded-full bg-rose-500 text-white text-[9px] font-black flex items-center justify-center shadow-xs">
                    {item.badge}
                  </span>
                )}
              </div>
              <span className="mt-1 font-semibold truncate max-w-[56px]">{item.label}</span>
              {isActive && (
                <motion.div 
                  layoutId="mobile-active-dot" 
                  className="w-1 h-1 bg-blue-400 rounded-full mt-0.5" 
                />
              )}
            </button>
          );
        })}
      </nav>

    </div>
  );
};

export default AdminDashboard;
