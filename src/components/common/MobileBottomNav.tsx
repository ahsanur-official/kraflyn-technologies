import React from 'react';
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
      initial={{ y: 80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200 px-3 py-2 flex items-center justify-around shadow-2xl"
    >
      {/* Home */}
      <motion.button
        whileTap={{ scale: 0.9 }}
        onClick={() => handleTabClick('home')}
        className={`flex flex-col items-center gap-0.5 py-1 px-2 rounded-lg text-[10px] font-bold ${
          activeNavTab === 'home' ? 'text-blue-600' : 'text-slate-500'
        }`}
      >
        <Home className="w-5 h-5" />
        <span>{t.home}</span>
      </motion.button>

      {/* Services */}
      <motion.button
        whileTap={{ scale: 0.9 }}
        onClick={() => handleTabClick('services', 'services-section')}
        className={`flex flex-col items-center gap-0.5 py-1 px-2 rounded-lg text-[10px] font-bold ${
          activeNavTab === 'services' ? 'text-blue-600' : 'text-slate-500'
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
        className="relative -top-3 bg-gradient-to-tr from-blue-600 to-indigo-600 text-white w-12 h-12 rounded-full flex flex-col items-center justify-center shadow-lg shadow-blue-500/40"
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
        className={`flex flex-col items-center gap-0.5 py-1 px-2 rounded-lg text-[10px] font-bold ${
          activeNavTab === 'reviews' ? 'text-blue-600' : 'text-slate-500'
        }`}
      >
        <Star className="w-5 h-5 fill-amber-400 text-amber-400" />
        <span>{t.reviews}</span>
      </motion.button>

      {/* Track Order */}
      <motion.button
        whileTap={{ scale: 0.9 }}
        onClick={() => openOrderTracker()}
        className="flex flex-col items-center gap-0.5 py-1 px-2 rounded-lg text-[10px] font-bold text-slate-500 hover:text-blue-600"
      >
        <Search className="w-5 h-5 text-blue-500" />
        <span>{t.trackOrder}</span>
      </motion.button>

    </motion.div>
  );
};
