import React, { useState, useEffect, useRef } from 'react';
import { useApp } from '../../context/AppContext';
import { 
  Home, 
  Layers, 
  ShoppingBag, 
  Star, 
  Search
} from 'lucide-react';
import { motion } from 'motion/react';

export const MobileBottomNav: React.FC = () => {
  const { 
    activeNavTab, 
    setActiveNavTab, 
    cartCount, 
    openCart, 
    openOrderTracker,
    t 
  } = useApp();

  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = useRef(0);
  const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const getScrollTop = () => {
      return window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    };

    let startTouchY = 0;

    const handleScroll = () => {
      const currentScrollY = getScrollTop();
      const scrollDiff = currentScrollY - lastScrollY.current;

      // Scrolling down significantly
      if (scrollDiff > 4 && currentScrollY > 40) {
        setIsVisible(false);
      } else if (scrollDiff < -4 || currentScrollY <= 20) {
        // Scrolling up or at the top
        setIsVisible(true);
      }

      lastScrollY.current = currentScrollY;

      // When user stops scrolling, automatically reveal smoothly
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
      scrollTimeoutRef.current = setTimeout(() => {
        setIsVisible(true);
      }, 450);
    };

    const handleTouchStart = (e: TouchEvent) => {
      startTouchY = e.touches[0].clientY;
    };

    const handleTouchMove = (e: TouchEvent) => {
      const currentTouchY = e.touches[0].clientY;
      const touchDiff = startTouchY - currentTouchY;

      // Swiping up (scrolling down page) -> hide bar
      if (touchDiff > 10 && getScrollTop() > 30) {
        setIsVisible(false);
      } else if (touchDiff < -10) {
        // Swiping down (scrolling up page) -> show bar
        setIsVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('touchstart', handleTouchStart, { passive: true });
    window.addEventListener('touchmove', handleTouchMove, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchmove', handleTouchMove);
      if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
    };
  }, []);

  const handleTabClick = (tab: string, sectionId?: string) => {
    setActiveNavTab(tab);
    if (sectionId) {
      const el = document.getElementById(sectionId);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <motion.nav 
      aria-label="Mobile Bottom Navigation"
      initial={{ y: 0, opacity: 1 }}
      animate={{ 
        y: isVisible ? 0 : 90, 
        opacity: isVisible ? 1 : 0,
        pointerEvents: isVisible ? 'auto' : 'none'
      }}
      transition={{ 
        type: 'spring', 
        stiffness: 280, 
        damping: 26,
        mass: 0.8
      }}
      className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-lg border-t border-slate-200/90 px-1 py-1.5 shadow-[0_-4px_20px_rgba(0,0,0,0.06)] safe-area-inset-bottom"
    >
      <div className="grid grid-cols-5 items-center justify-items-center w-full max-w-md mx-auto">
        {/* 1. Home */}
        <motion.button
          whileTap={{ scale: 0.92 }}
          onClick={() => handleTabClick('home')}
          className={`flex flex-col items-center justify-center w-full py-1 px-0.5 rounded-xl transition-all cursor-pointer ${
            activeNavTab === 'home' 
              ? 'text-blue-600 font-black' 
              : 'text-slate-500 hover:text-slate-800 font-semibold'
          }`}
        >
          <div className="relative flex items-center justify-center w-6 h-6">
            <Home className={`w-5 h-5 transition-transform ${activeNavTab === 'home' ? 'scale-110 text-blue-600' : ''}`} />
          </div>
          <span className="text-[10px] mt-0.5 tracking-tight truncate max-w-full text-center leading-tight">
            {t.home}
          </span>
          {activeNavTab === 'home' && (
            <span className="w-1 h-1 bg-blue-600 rounded-full mt-0.5" />
          )}
        </motion.button>

        {/* 2. Services */}
        <motion.button
          whileTap={{ scale: 0.92 }}
          onClick={() => handleTabClick('services', 'services-section')}
          className={`flex flex-col items-center justify-center w-full py-1 px-0.5 rounded-xl transition-all cursor-pointer ${
            activeNavTab === 'services' 
              ? 'text-blue-600 font-black' 
              : 'text-slate-500 hover:text-slate-800 font-semibold'
          }`}
        >
          <div className="relative flex items-center justify-center w-6 h-6">
            <Layers className={`w-5 h-5 transition-transform ${activeNavTab === 'services' ? 'scale-110 text-blue-600' : ''}`} />
          </div>
          <span className="text-[10px] mt-0.5 tracking-tight truncate max-w-full text-center leading-tight">
            {t.services}
          </span>
          {activeNavTab === 'services' && (
            <span className="w-1 h-1 bg-blue-600 rounded-full mt-0.5" />
          )}
        </motion.button>

        {/* 3. Cart / Bag */}
        <motion.button
          whileTap={{ scale: 0.92 }}
          onClick={openCart}
          className="flex flex-col items-center justify-center w-full py-1 px-0.5 rounded-xl transition-all cursor-pointer text-slate-700 hover:text-blue-600 font-semibold"
          aria-label="Open Cart"
        >
          <div className="relative flex items-center justify-center w-7 h-7 rounded-xl bg-blue-50 text-blue-600 border border-blue-200/80 shadow-xs">
            <ShoppingBag className="w-4 h-4" />
            {cartCount > 0 && (
              <motion.span 
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="absolute -top-1 -right-1 bg-blue-600 text-white text-[9px] font-black w-4 h-4 rounded-full flex items-center justify-center border-2 border-white shadow-xs"
              >
                {cartCount}
              </motion.span>
            )}
          </div>
          <span className="text-[10px] mt-0.5 tracking-tight truncate max-w-full text-center leading-tight font-bold text-blue-700">
            {t.cart}
          </span>
        </motion.button>

        {/* 4. Customer Reviews */}
        <motion.button
          whileTap={{ scale: 0.92 }}
          onClick={() => handleTabClick('reviews', 'reviews-section')}
          className={`flex flex-col items-center justify-center w-full py-1 px-0.5 rounded-xl transition-all cursor-pointer ${
            activeNavTab === 'reviews' 
              ? 'text-blue-600 font-black' 
              : 'text-slate-500 hover:text-slate-800 font-semibold'
          }`}
        >
          <div className="relative flex items-center justify-center w-6 h-6">
            <Star className={`w-5 h-5 transition-transform ${activeNavTab === 'reviews' ? 'scale-110 text-amber-500 fill-amber-400' : 'text-slate-400'}`} />
          </div>
          <span className="text-[10px] mt-0.5 tracking-tight truncate max-w-full text-center leading-tight">
            {t.reviews}
          </span>
          {activeNavTab === 'reviews' && (
            <span className="w-1 h-1 bg-blue-600 rounded-full mt-0.5" />
          )}
        </motion.button>

        {/* 5. Track Project */}
        <motion.button
          whileTap={{ scale: 0.92 }}
          onClick={() => openOrderTracker()}
          className="flex flex-col items-center justify-center w-full py-1 px-0.5 rounded-xl transition-all cursor-pointer text-slate-500 hover:text-blue-600 font-semibold"
        >
          <div className="relative flex items-center justify-center w-6 h-6">
            <Search className="w-5 h-5 text-slate-500 hover:text-blue-600" />
          </div>
          <span className="text-[10px] mt-0.5 tracking-tight truncate max-w-full text-center leading-tight">
            {t.trackOrder}
          </span>
        </motion.button>
      </div>
    </motion.nav>
  );
};
