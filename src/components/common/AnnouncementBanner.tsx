import React from 'react';
import { useApp } from '../../context/AppContext';
import { Megaphone, Sparkles, AlertCircle, CheckCircle2, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export const AnnouncementBanner: React.FC = () => {
  const { siteSettings, language, openOrderModal } = useApp();
  const notice = siteSettings?.notice;

  if (!notice || !notice.enabled) return null;

  const message = language === 'bn' 
    ? (notice.messageBn || notice.messageEn) 
    : (notice.messageEn || notice.messageBn);

  if (!message) return null;

  const bgClasses = {
    promo: 'bg-gradient-to-r from-indigo-900 via-blue-900 to-purple-900 border-indigo-500/30 text-white',
    warning: 'bg-amber-500 text-slate-950 border-amber-600/40',
    info: 'bg-blue-600 text-white border-blue-500',
    success: 'bg-emerald-600 text-white border-emerald-500'
  }[notice.type || 'promo'];

  const Icon = notice.type === 'promo' 
    ? Sparkles 
    : notice.type === 'warning' 
    ? AlertCircle 
    : notice.type === 'success' 
    ? CheckCircle2 
    : Megaphone;

  const handleActionClick = () => {
    if (notice.linkUrl) {
      if (notice.linkUrl.startsWith('#')) {
        const el = document.querySelector(notice.linkUrl);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      } else {
        window.open(notice.linkUrl, '_blank');
      }
    } else {
      openOrderModal();
    }
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: 'auto', opacity: 1 }}
        exit={{ height: 0, opacity: 0 }}
        className={`w-full text-xs font-bold py-2.5 px-4 relative z-40 border-b flex items-center justify-center shadow-xs ${bgClasses}`}
      >
        <div className="max-w-[1920px] w-full mx-auto flex items-center justify-center gap-2.5 flex-wrap text-center">
          <span className="p-1 rounded-md bg-white/15 shrink-0">
            <Icon className="w-3.5 h-3.5" />
          </span>
          
          <span className="tracking-wide">{message}</span>

          {notice.linkText && (
            <button
              onClick={handleActionClick}
              className="inline-flex items-center gap-1 ml-1 px-2.5 py-0.5 rounded-full bg-white/20 hover:bg-white/30 text-[11px] font-black underline tracking-tight transition-all cursor-pointer shadow-xs"
            >
              <span>{notice.linkText}</span>
              <ArrowRight className="w-3 h-3" />
            </button>
          )}
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
