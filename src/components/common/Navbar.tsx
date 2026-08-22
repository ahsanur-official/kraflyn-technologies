import React, { useState, useEffect, useRef } from 'react';
import { useApp } from '../../context/AppContext';
import { KraflynLogo } from './KraflynLogo';
import { 
  ShoppingBag, 
  Search, 
  MessageSquare, 
  Menu, 
  X, 
  Star, 
  Sparkles,
  ShieldCheck,
  Languages,
  Home,
  Layers,
  HelpCircle,
  Phone,
  Info,
  ArrowRight,
  CheckCircle2
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export const Navbar: React.FC = () => {
  const { 
    activeNavTab, 
    setActiveNavTab, 
    cartCount, 
    cartTotal, 
    openCart, 
    openOrderModal, 
    openOrderTracker,
    language,
    setLanguage,
    setCurrentView,
    t 
  } = useApp();

  const [menuOpen, setMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    let ticking = false;

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const currentScrollY = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
          
          if (currentScrollY <= 40) {
            setIsVisible(true);
            setIsScrolled(false);
          } else {
            setIsScrolled(true);
            const delta = currentScrollY - lastScrollY.current;

            // User scrolling UP
            if (delta < -3) {
              setIsVisible(true);
            } 
            // User scrolling DOWN
            else if (delta > 6 && currentScrollY > 100) {
              setIsVisible(false);
            }
          }

          lastScrollY.current = currentScrollY;
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    document.addEventListener('scroll', onScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', onScroll);
      document.removeEventListener('scroll', onScroll);
    };
  }, []);

  const handleNavClick = (tab: string, sectionId?: string) => {
    setActiveNavTab(tab);
    setMenuOpen(false);
    
    // Smooth scroll with transition
    if (sectionId) {
      const el = document.getElementById(sectionId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const navMenuItems = [
    { key: 'home', label: t.home, icon: Home, sectionId: undefined },
    { key: 'services', label: t.services, icon: Layers, sectionId: 'services-section' },
    { key: 'how-it-works', label: t.howItWorks, icon: Sparkles, sectionId: 'how-it-works-section' },
    { key: 'reviews', label: t.reviews, icon: Star, sectionId: 'reviews-section', badge: '4.9 ★' },
    { key: 'faq', label: t.faq, icon: HelpCircle, sectionId: 'faq-section' },
    { key: 'about', label: t.aboutUs || t.about || (language === 'bn' ? 'আমাদের সম্পর্কে' : 'About Us'), icon: Info, sectionId: undefined },
    { key: 'contact', label: t.contact, icon: Phone, sectionId: undefined }
  ];

  return (
    <>
      <motion.header
        initial={{ y: 0 }}
        animate={{ 
          y: isVisible || menuOpen ? 0 : -140
        }}
        transition={{ duration: 0.28, ease: 'easeInOut' }}
        style={{
          boxShadow: isScrolled 
            ? '0 10px 25px -5px rgba(15, 23, 42, 0.08), 0 4px 6px -4px rgba(15, 23, 42, 0.03)' 
            : 'none'
        }}
        className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200/90 transition-[box-shadow]"
      >
        
        {/* Top Mini Banner */}
        <div className="bg-slate-950 text-slate-300 text-xs py-1.5 px-3 sm:px-6 md:px-8 lg:px-10 xl:px-12 border-b border-slate-800">
          <div className="max-w-[1920px] w-full mx-auto flex justify-between items-center gap-2">
            
            <div className="flex items-center gap-1.5 sm:gap-2 min-w-0">
              <span className="inline-block w-2 h-2 shrink-0 rounded-full bg-cyan-400 animate-pulse"></span>
              <span className="truncate text-[10px] sm:text-xs text-slate-300">
                {t.hotlineText}
              </span>
            </div>

            <div className="flex items-center gap-2 sm:gap-3 text-xs shrink-0">
              {/* Language Switcher */}
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                onClick={() => setLanguage(language === 'bn' ? 'en' : 'bn')}
                className="flex items-center gap-1 px-2.5 py-0.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white font-bold text-[10px] sm:text-[11px] border border-slate-700 transition-colors cursor-pointer shrink-0"
                title="Switch between বাংলা / English"
              >
                <Languages className="w-3 h-3 text-cyan-400 shrink-0" />
                <span>{language === 'bn' ? 'English' : 'বাংলা'}</span>
              </motion.button>

              {/* WhatsApp Quick link */}
              <a
                href="https://wa.me/8801712345678"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden xs:flex text-emerald-400 hover:text-emerald-300 font-semibold items-center gap-1 transition-colors text-[10px] sm:text-xs shrink-0"
              >
                <MessageSquare className="w-3 h-3 shrink-0" />
                <span className="hidden sm:inline">{t.directWhatsApp}</span>
                <span className="sm:hidden">WhatsApp</span>
              </a>
            </div>

          </div>
        </div>

        {/* Main Navbar */}
        <div className="max-w-[1920px] w-full mx-auto px-2.5 sm:px-6 md:px-8 lg:px-10 xl:px-12">
          <div className="flex items-center justify-between h-14 sm:h-16 md:h-20 gap-1.5 sm:gap-2">
            
            {/* Kraflyn Technologies Official Logo */}
            <motion.button 
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
              onClick={() => handleNavClick('home')}
              className="text-left focus:outline-hidden cursor-pointer shrink-0 min-w-0"
            >
              <KraflynLogo size="md" showSlogan={true} />
            </motion.button>

            {/* Right Action Controls: Cart Pill + Direct Order + Menu Hamburger */}
            <div className="flex items-center gap-1.5 sm:gap-3 md:gap-4 shrink-0">
              
              {/* Cart Pill Button - Responsive, prominent, and proportional on mobile */}
              <motion.button
                whileHover={{ scale: 1.03, y: -1 }}
                whileTap={{ scale: 0.96 }}
                onClick={openCart}
                className="relative flex items-center gap-1.5 xs:gap-2 sm:gap-3 px-2.5 xs:px-3.5 sm:px-5 py-1.5 sm:py-2 md:py-2.5 rounded-xl sm:rounded-2xl bg-gradient-to-b from-slate-50 to-slate-100 hover:from-blue-50/80 hover:to-indigo-50/80 border border-slate-200 hover:border-blue-300 text-slate-900 transition-all cursor-pointer shadow-2xs hover:shadow-md group shrink-0"
                title={language === 'bn' ? 'কার্ট দেখুন' : 'View Cart'}
              >
                <div className="relative shrink-0 flex items-center justify-center p-1 xs:p-1.5 sm:p-2 rounded-lg sm:rounded-xl bg-white group-hover:bg-blue-600/10 border border-slate-200/80 group-hover:border-blue-300/60 shadow-2xs transition-colors">
                  <ShoppingBag className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-slate-800 group-hover:text-blue-600 transition-colors" />
                  {cartCount > 0 && (
                    <motion.span 
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="absolute -top-1.5 -right-1.5 min-w-[16px] h-[16px] sm:min-w-[20px] sm:h-[20px] px-1 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-[9px] sm:text-xs font-black rounded-full flex items-center justify-center border-2 border-white shadow-xs"
                    >
                      {cartCount}
                    </motion.span>
                  )}
                </div>

                <div className="flex flex-col text-left">
                  <span className="text-[9px] xs:text-[10px] sm:text-xs font-extrabold text-slate-500 group-hover:text-blue-600 transition-colors uppercase tracking-wider leading-none">
                    {language === 'bn' ? 'কার্ট' : 'Cart'}
                  </span>
                  <span className="text-xs xs:text-sm sm:text-base font-black text-slate-900 leading-tight mt-0.5">
                    {cartCount > 0 ? `৳${cartTotal}` : '৳০'}
                  </span>
                </div>
              </motion.button>

              {/* Direct Order Primary Pill Button - hidden on small mobile, visible on tablet/desktop */}
              <motion.button
                whileHover={{ scale: 1.03, y: -1 }}
                whileTap={{ scale: 0.96 }}
                onClick={() => openOrderModal()}
                className="hidden md:flex px-4 sm:px-6 py-2.5 sm:py-3 bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600 hover:from-cyan-700 hover:to-indigo-700 text-white text-xs sm:text-sm font-black rounded-2xl shadow-md shadow-blue-500/25 transition-all items-center gap-2 cursor-pointer active:scale-95 shrink-0"
              >
                <Sparkles className="w-4 h-4 text-amber-300 fill-amber-300/30" />
                <span className="tracking-tight whitespace-nowrap">{t.directOrder}</span>
              </motion.button>

              {/* Menu Hamburger Toggle Button */}
              <motion.button
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.92 }}
                onClick={() => setMenuOpen(true)}
                className="p-1.5 xs:p-2 sm:p-2.5 text-slate-800 hover:text-blue-600 hover:bg-slate-100/90 rounded-xl sm:rounded-2xl border border-slate-200/80 transition-colors cursor-pointer flex items-center justify-center shrink-0"
                title={language === 'bn' ? 'মেনু খুলুন' : 'Open Menu'}
                aria-label="Open Navigation Menu"
              >
                <Menu className="w-5 h-5 sm:w-6 sm:h-6 stroke-[2.2]" />
              </motion.button>

            </div>

          </div>
        </div>
      </motion.header>

      {/* Smooth Animated Navigation Drawer */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Backdrop Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setMenuOpen(false)}
              className="fixed inset-0 z-50 bg-slate-950/60 backdrop-blur-xs cursor-pointer"
            />

            {/* Slide-in Drawer Container */}
            <motion.aside
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 28, stiffness: 280 }}
              className="fixed top-0 right-0 bottom-0 z-50 w-full sm:w-[380px] bg-white shadow-2xl flex flex-col justify-between overflow-y-auto border-l border-slate-200"
            >
              <div>
                {/* Drawer Header */}
                <div className="p-5 sm:p-6 border-b border-slate-100 flex items-center justify-between bg-slate-50/70">
                  <div>
                    <KraflynLogo size="sm" showSlogan={true} />
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.1, rotate: 90 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setMenuOpen(false)}
                    className="p-2 rounded-xl text-slate-500 hover:text-slate-800 hover:bg-slate-200 transition-colors cursor-pointer"
                    aria-label="Close menu"
                  >
                    <X className="w-5 h-5" />
                  </motion.button>
                </div>

                {/* Quick Track Order Search Box */}
                <div className="p-4 sm:p-5 border-b border-slate-100">
                  <motion.button
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                    onClick={() => {
                      setMenuOpen(false);
                      openOrderTracker();
                    }}
                    className="w-full p-3 bg-blue-50/80 hover:bg-blue-100/80 border border-blue-200 text-blue-800 rounded-2xl text-xs font-bold flex items-center justify-between gap-2 transition-all cursor-pointer group"
                  >
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-xl bg-blue-600 text-white flex items-center justify-center shadow-xs">
                        <Search className="w-4 h-4" />
                      </div>
                      <div className="text-left">
                        <div className="font-black text-xs text-blue-950">{t.trackOrder}</div>
                        <div className="text-[10px] text-blue-600 font-normal">
                          {language === 'bn' ? 'অর্ডার আইডি দিয়ে স্ট্যাটাস জানুন' : 'Check status with your Order ID'}
                        </div>
                      </div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-blue-600 group-hover:translate-x-1 transition-transform" />
                  </motion.button>
                </div>

                {/* Navigation Links with Stagger Transition */}
                <div className="p-4 sm:p-5 space-y-1.5">
                  <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider px-3 mb-2">
                    {language === 'bn' ? 'পেজ সমূহ' : 'Main Menu'}
                  </div>

                  {navMenuItems.map((item, idx) => {
                    const Icon = item.icon;
                    const isActive = activeNavTab === item.key;

                    return (
                      <motion.button
                        key={item.key}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.04 }}
                        whileHover={{ x: 4 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => handleNavClick(item.key, item.sectionId)}
                        className={`w-full p-3 rounded-2xl text-left text-xs sm:text-sm font-bold flex items-center justify-between transition-all cursor-pointer ${
                          isActive
                            ? 'bg-blue-600 text-white shadow-md shadow-blue-500/20'
                            : 'text-slate-700 hover:bg-slate-50 hover:text-blue-600'
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <div className={`p-2 rounded-xl ${
                            isActive ? 'bg-white/20 text-white' : 'bg-slate-100 text-slate-600'
                          }`}>
                            <Icon className="w-4 h-4" />
                          </div>
                          <span>{item.label}</span>
                        </div>

                        {item.badge && (
                          <span className={`text-[10px] px-2 py-0.5 rounded-full font-bold ${
                            isActive ? 'bg-white text-blue-800' : 'bg-amber-100 text-amber-900'
                          }`}>
                            {item.badge}
                          </span>
                        )}
                      </motion.button>
                    );
                  })}
                </div>
              </div>

              {/* Drawer Footer & Quick Controls */}
              <div className="p-5 border-t border-slate-100 bg-slate-50/70 space-y-3">
                
                {/* Language Switch */}
                <div className="flex items-center justify-between p-2.5 bg-white border border-slate-200 rounded-2xl">
                  <span className="text-xs font-bold text-slate-700 flex items-center gap-2">
                    <Languages className="w-4 h-4 text-blue-600" />
                    <span>{language === 'bn' ? 'ভাষা নির্বাচন' : 'Language'}</span>
                  </span>

                  <button
                    onClick={() => setLanguage(language === 'bn' ? 'en' : 'bn')}
                    className="px-3 py-1 bg-slate-100 hover:bg-blue-50 text-slate-800 hover:text-blue-700 font-black text-xs rounded-xl border border-slate-200 transition-colors cursor-pointer"
                  >
                    {language === 'bn' ? 'Switch to English' : 'বাংলায় দেখুন'}
                  </button>
                </div>

                {/* WhatsApp Help */}
                <a
                  href="https://wa.me/8801712345678"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-emerald-50 hover:bg-emerald-100 text-emerald-800 border border-emerald-200 rounded-2xl text-xs font-bold flex items-center justify-between transition-colors block cursor-pointer"
                >
                  <div className="flex items-center gap-2">
                    <MessageSquare className="w-4 h-4 text-emerald-600" />
                    <span>WhatsApp Support</span>
                  </div>
                  <span className="text-[11px] text-emerald-700 font-mono">+880 1712-345678</span>
                </a>

                {/* Primary Order Now Button */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => {
                    setMenuOpen(false);
                    openOrderModal();
                  }}
                  className="w-full py-3.5 bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600 text-white rounded-2xl font-black text-xs sm:text-sm shadow-md shadow-blue-500/25 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Sparkles className="w-4 h-4 text-amber-300" />
                  <span>{t.heroDirectOrderBtn}</span>
                </motion.button>

              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
};
