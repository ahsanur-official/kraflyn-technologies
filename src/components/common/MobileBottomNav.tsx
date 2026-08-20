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
    <motion.div 
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
      className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200/90 px-3 py-2 flex items-center justify-around shadow-2xl safe-area-inset-bottom"
    >
      {/* Home */}
      <motion.button
        whileTap={{ scale: 0.9 }}
        onClick={() => handleTabClick('home')}
        className={`flex flex-col items-center gap-0.5 py-1 px-2 rounded-lg text-[10px] font-bold transition-colors ${
          activeNavTab === 'home' ? 'text-blue-600 font-extrabold' : 'text-slate-500 hover:text-slate-800'
        }`}
      >
        <Home className="w-5 h-5" />
        <span>{t.home}</span>
      </motion.button>

      {/* Services */}
      <motion.button
        whileTap={{ scale: 0.9 }}
        onClick={() => handleTabClick('services', 'services-section')}
        className={`flex flex-col items-center gap-0.5 py-1 px-2 rounded-lg text-[10px] font-bold transition-colors ${
          activeNavTab === 'services' ? 'text-blue-600 font-extrabold' : 'text-slate-500 hover:text-slate-800'
        }`}
      >
        <Layers className="w-5 h-5" />
        <span>{t.services}</span>
      </motion.button>

      {/* Center Cart / Order Now Button */}
      <motion.button
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.92 }}
        onClick={openCart}
        className="relative -top-3 bg-gradient-to-tr from-blue-600 to-indigo-600 text-white w-12 h-12 rounded-full flex flex-col items-center justify-center shadow-lg shadow-blue-500/40 ring-4 ring-white"
        aria-label="Open Cart"
      >
        <ShoppingBag className="w-5 h-5" />
        {cartCount > 0 && (
          <motion.span 
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="absolute -top-1 -right-1 bg-amber-400 text-slate-950 text-[10px] font-black w-4.5 h-4.5 rounded-full flex items-center justify-center border-2 border-white shadow-xs"
          >
            {cartCount}
          </motion.span>
        )}
      </motion.button>

      {/* Customer Reviews */}
      <motion.button
        whileTap={{ scale: 0.9 }}
        onClick={() => handleTabClick('reviews', 'reviews-section')}
        className={`flex flex-col items-center gap-0.5 py-1 px-2 rounded-lg text-[10px] font-bold transition-colors ${
          activeNavTab === 'reviews' ? 'text-blue-600 font-extrabold' : 'text-slate-500 hover:text-slate-800'
        }`}
      >
        <Star className="w-5 h-5 fill-amber-400 text-amber-400" />
        <span>{t.reviews}</span>
      </motion.button>

      {/* Track Order */}
      <motion.button
        whileTap={{ scale: 0.9 }}
        onClick={() => openOrderTracker()}
        className="flex flex-col items-center gap-0.5 py-1 px-2 rounded-lg text-[10px] font-bold text-slate-500 hover:text-blue-600 transition-colors"
      >
        <Search className="w-5 h-5 text-blue-500" />
        <span>{t.trackOrder}</span>
      </motion.button>

    </motion.div>
  );
};
