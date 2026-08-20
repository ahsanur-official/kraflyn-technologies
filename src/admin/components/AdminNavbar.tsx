import React from 'react';
import { useApp } from '../../context/AppContext';
import { 
  ShieldCheck, 
  ArrowLeft, 
  Languages, 
  Sparkles,
  ShoppingBag,
  Clock,
  CheckCircle2,
  Users,
  LogOut,
  ExternalLink
} from 'lucide-react';
import { motion } from 'motion/react';

interface AdminNavbarProps {
  activeTab: 'overview' | 'orders' | 'reviews' | 'mentors' | 'services';
  setActiveTab: (tab: 'overview' | 'orders' | 'reviews' | 'mentors' | 'services') => void;
  onLogout?: () => void;
}

export const AdminNavbar: React.FC<AdminNavbarProps> = ({ activeTab, setActiveTab, onLogout }) => {
  const { 
    orders, 
    setCurrentView, 
    language, 
    setLanguage, 
    t 
  } = useApp();

  const newOrdersCount = orders.filter(o => o.status === 'order_received').length;
  const inProgressCount = orders.filter(o => ['mentor_assigned', 'contacted_student', 'in_progress'].includes(o.status)).length;

  const navItems = [
    { id: 'overview' as const, label: language === 'bn' ? 'ড্যাশবোর্ড ওভারভিউ' : 'Overview', icon: Sparkles },
    { id: 'orders' as const, label: language === 'bn' ? 'অর্ডার ট্রায়াজ ও ম্যানেজমেন্ট' : 'Orders Management', icon: ShoppingBag, badge: newOrdersCount },
    { id: 'reviews' as const, label: language === 'bn' ? 'রিভিউ ও ফিডব্যাক' : 'Reviews & Feedback', icon: Users },
    { id: 'mentors' as const, label: language === 'bn' ? 'মেন্টর রোস্টার' : 'Mentor Roster', icon: CheckCircle2 },
    { id: 'services' as const, label: language === 'bn' ? 'সার্ভিস ও প্রাইসিং' : 'Services & Pricing', icon: Clock },
  ];

  return (
    <header className="bg-slate-900 border-b border-slate-800 text-white sticky top-0 z-30 shadow-xl">
      <div className="max-w-[1920px] w-full mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 2xl:px-20">
        
        {/* Top Tier: Brand, Live Badge & Global Controls */}
        <div className="py-3.5 flex items-center justify-between gap-4 border-b border-slate-800/80">
          
          <div className="flex items-center gap-3.5">
            <motion.div 
              whileHover={{ rotate: 10, scale: 1.05 }}
              className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-500 flex items-center justify-center text-white shadow-lg shadow-blue-500/30 font-black text-lg border border-blue-400/30"
            >
              <ShieldCheck className="w-5 h-5" />
            </motion.div>

            <div>
              <div className="flex items-center gap-2">
                <span className="font-extrabold text-base tracking-tight bg-gradient-to-r from-white via-blue-100 to-blue-300 bg-clip-text text-transparent">
                  Edu Quest
                </span>
                <span className="px-2 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider bg-rose-500/20 text-rose-300 border border-rose-500/30 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-rose-400 animate-ping"></span>
                  ADMIN CONSOLE
                </span>
              </div>
              <p className="text-[11px] text-slate-400 hidden sm:block">
                {language === 'bn' ? 'কেন্দ্রীয় অর্ডার ব্যবস্থাপনা ও মেন্টর সমন্বয় প্যানেল' : 'Central Academic Order Management & Mentor Coordination Engine'}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2.5 sm:gap-3">
            {/* Live stats summary pills */}
            <div className="hidden lg:flex items-center gap-2 text-xs">
              <div className="px-3 py-1 bg-amber-500/15 border border-amber-500/30 rounded-xl text-amber-300 flex items-center gap-1.5 font-medium">
                <span className="w-2 h-2 rounded-full bg-amber-400"></span>
                <span>{newOrdersCount} {language === 'bn' ? 'নতুন অর্ডার' : 'New Orders'}</span>
              </div>

              <div className="px-3 py-1 bg-blue-500/15 border border-blue-500/30 rounded-xl text-blue-300 flex items-center gap-1.5 font-medium">
                <span className="w-2 h-2 rounded-full bg-blue-400"></span>
                <span>{inProgressCount} {language === 'bn' ? 'চলমান কাজ' : 'Active In-Progress'}</span>
              </div>
            </div>

            {/* Language Switcher */}
            <button
              onClick={() => setLanguage(language === 'bn' ? 'en' : 'bn')}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-slate-200 border border-slate-700 transition-colors cursor-pointer"
              title="Switch Language"
            >
              <Languages className="w-3.5 h-3.5 text-blue-400" />
              <span>{language === 'bn' ? 'EN' : 'বাংলা'}</span>
            </button>

            {/* View Live Public Site */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setCurrentView('student')}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white text-xs font-semibold border border-slate-700 transition-colors cursor-pointer"
              title="Open Public Student Website"
            >
              <ExternalLink className="w-3.5 h-3.5 text-blue-400" />
              <span className="hidden sm:inline">{language === 'bn' ? 'পাবলিক সাইট' : 'Public Site'}</span>
            </motion.button>

            {/* Logout / Exit */}
            {onLogout && (
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={onLogout}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-rose-600/20 hover:bg-rose-600/30 text-rose-300 border border-rose-500/30 text-xs font-bold transition-colors cursor-pointer"
                title="Lock / Sign Out of Admin Console"
              >
                <LogOut className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">{language === 'bn' ? 'লগআউট' : 'Sign Out'}</span>
              </motion.button>
            )}
          </div>

        </div>

        {/* Bottom Tier: Tab Navigation */}
        <div className="flex items-center gap-1 overflow-x-auto py-2.5 scrollbar-none">
          {navItems.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;

            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`relative px-3.5 py-1.5 rounded-xl text-xs font-bold flex items-center gap-2 transition-all shrink-0 cursor-pointer ${
                  isActive
                    ? 'text-white bg-blue-600 shadow-md shadow-blue-600/30'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{tab.label}</span>

                {tab.badge !== undefined && tab.badge > 0 && (
                  <span className={`px-1.5 py-0.2 rounded-full text-[10px] font-black ${
                    isActive ? 'bg-white text-blue-900' : 'bg-rose-500 text-white'
                  }`}>
                    {tab.badge}
                  </span>
                )}

                {isActive && (
                  <motion.div 
                    layoutId="admin-tab-indicator"
                    className="absolute -bottom-2.5 left-2 right-2 h-0.5 bg-blue-400 rounded-full" 
                  />
                )}
              </button>
            );
          })}
        </div>

      </div>
    </header>
  );
};
