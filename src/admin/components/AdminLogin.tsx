import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { ShieldCheck, Lock, Key, ArrowRight, ArrowLeft, CheckCircle2, AlertCircle, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';
import { KraflynLogo } from '../../components/common/KraflynLogo';

interface AdminLoginProps {
  onAuthenticated: () => void;
}

export const AdminLogin: React.FC<AdminLoginProps> = ({ onAuthenticated }) => {
  const { setCurrentView, language, setLanguage } = useApp();
  const [pin, setPin] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    setTimeout(() => {
      const normalizedPin = pin.trim().toLowerCase().replace(/\s+/g, ' ');
      // Support 'Allah Vorsa' and common variations + emergency fallbacks
      const isAllowed = 
        normalizedPin === 'allah vorsa' || 
        normalizedPin === 'allahvorsa' ||
        normalizedPin === 'allah bharosa' ||
        normalizedPin === 'allahbharosa' ||
        normalizedPin === 'allah vorosa' ||
        normalizedPin === 'allahvorosa' ||
        normalizedPin === 'admin123' ||
        normalizedPin === 'admin' ||
        normalizedPin === 'kraflyn' ||
        normalizedPin === '2026';

      if (isAllowed) {
        sessionStorage.setItem('kraflyn_admin_session', 'authenticated');
        sessionStorage.setItem('eduquest_admin_session', 'authenticated');
        onAuthenticated();
      } else {
        setError(language === 'bn' ? 'ভুল পাসকোড! সঠিক এডমিন পাসকোড "Allah Vorsa" দিন।' : 'Invalid Admin Passcode! Please use "Allah Vorsa".');
        setIsLoading(false);
      }
    }, 350);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col justify-between selection:bg-blue-600 selection:text-white relative overflow-hidden">
      
      {/* Ambient background glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />

      {/* Top Header */}
      <header className="max-w-7xl w-full mx-auto px-4 sm:px-6 py-4 sm:py-6 flex items-center justify-between z-10">
        <div className="flex items-center gap-2.5">
          <div className="bg-slate-900/90 p-2 rounded-2xl border border-slate-800 backdrop-blur-xs">
            <KraflynLogo size="sm" showSlogan={false} theme="dark" />
          </div>
          <span className="hidden sm:inline-block px-2.5 py-1 rounded-full text-[10px] font-black uppercase tracking-wider bg-rose-500/20 text-rose-300 border border-rose-500/30">
            Operations Portal
          </span>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setLanguage(language === 'bn' ? 'en' : 'bn')}
            className="px-2.5 py-1.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-xs font-semibold text-slate-300 border border-slate-800 transition-colors cursor-pointer min-h-[36px]"
          >
            {language === 'bn' ? 'English' : 'বাংলা'}
          </button>

          <button
            onClick={() => setCurrentView('student')}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white text-xs font-semibold border border-slate-800 transition-colors cursor-pointer min-h-[36px]"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span className="hidden xs:inline sm:inline">{language === 'bn' ? 'মূল ওয়েবসাইট' : 'Public Site'}</span>
            <span className="xs:hidden sm:hidden">{language === 'bn' ? 'সাইট' : 'Site'}</span>
          </button>
        </div>
      </header>

      {/* Main Form Center Card */}
      <main className="max-w-md w-full mx-auto px-4 z-10 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="bg-slate-900/90 border border-slate-800 backdrop-blur-md rounded-3xl p-6 sm:p-8 shadow-2xl shadow-black/50"
        >
          {/* Header Icon */}
          <div className="text-center mb-6">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-blue-600 to-indigo-600 text-white mx-auto flex items-center justify-center shadow-lg shadow-blue-500/20 mb-4 border border-blue-400/20">
              <ShieldCheck className="w-8 h-8" />
            </div>
            <h1 className="text-xl sm:text-2xl font-black text-white tracking-tight">
              {language === 'bn' ? 'ক্র্যাফলিন টেকনোলজিস এডমিন পোর্টাল' : 'Kraflyn Technologies Admin Portal'}
            </h1>
            <p className="text-xs text-slate-400 mt-1.5">
              {language === 'bn' 
                ? 'শুধুমাত্র ক্র্যাফলিন টেকনোলজিস (Kraflyn Technologies) অপারেশন্স ও ম্যানেজমেন্ট টিমের জন্য' 
                : 'Restricted to Kraflyn Technologies operations & management team'}
            </p>
          </div>

          {error && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              className="mb-5 p-3 rounded-2xl bg-rose-500/15 border border-rose-500/30 text-rose-300 text-xs flex items-center gap-2"
            >
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span>{error}</span>
            </motion.div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-bold text-slate-300 mb-1.5">
                {language === 'bn' ? 'এডমিন সিকিউরিটি পাসকোড' : 'Admin Passcode'}
              </label>
              <div className="relative">
                <input
                  type="password"
                  value={pin}
                  onChange={(e) => setPin(e.target.value)}
                  placeholder={language === 'bn' ? 'পাসকোড লিখুন' : 'Enter passcode'}
                  className="w-full pl-10 pr-4 py-3 bg-slate-950/80 border border-slate-700 rounded-2xl text-sm text-white placeholder-slate-500 focus:outline-hidden focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  autoFocus
                />
                <Key className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
              </div>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-3.5 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-black text-sm rounded-2xl shadow-lg shadow-blue-500/25 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
            >
              {isLoading ? (
                <span className="inline-block w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              ) : (
                <>
                  <Lock className="w-4 h-4" />
                  <span>{language === 'bn' ? 'লগইন করুন' : 'Unlock Admin Portal'}</span>
                </>
              )}
            </button>
          </form>
        </motion.div>
      </main>

      {/* Footer info */}
      <footer className="py-6 text-center text-xs text-slate-600 z-10 border-t border-slate-900">
        <p>© {new Date().getFullYear()} Kraflyn Technologies (ক্র্যাফলিন টেকনোলজিস) Operations Console. All actions are logged.</p>
      </footer>

    </div>
  );
};
