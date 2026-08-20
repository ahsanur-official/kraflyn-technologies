import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { EduQuestLogo } from './EduQuestLogo';
import { 
  ShoppingBag, 
  Search, 
  MessageSquare, 
  PhoneCall, 
  Menu, 
  X, 
  Star, 
  HelpCircle, 
  Sparkles,
  Layers,
  CheckCircle2,
  Clock
} from 'lucide-react';

export const Navbar: React.FC = () => {
  const { 
    activeNavTab, 
    setActiveNavTab, 
    cartCount, 
    cartTotal, 
    openCart, 
    openOrderModal, 
    openOrderTracker 
  } = useApp();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (tab: string) => {
    setActiveNavTab(tab);
    setMobileMenuOpen(false);
    
    // Smooth scroll to section if present
    if (tab === 'services') {
      const el = document.getElementById('services-section');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    } else if (tab === 'how-it-works') {
      const el = document.getElementById('how-it-works-section');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    } else if (tab === 'reviews') {
      const el = document.getElementById('reviews-section');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    } else if (tab === 'faq') {
      const el = document.getElementById('faq-section');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 shrink-0">
      {/* Top Hotline Bar */}
      <div className="bg-slate-900 text-slate-300 text-xs py-1.5 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>
              Academic Support Hotline: <strong className="text-white">+880 1712-345678</strong> (WhatsApp Active 8AM - 11:30PM)
            </span>
          </div>

          <div className="hidden md:flex items-center gap-4 text-xs">
            <button
              onClick={() => openOrderTracker()}
              className="hover:text-blue-300 transition-colors flex items-center gap-1 cursor-pointer font-medium"
            >
              <Search className="w-3 h-3 text-blue-400" />
              <span>Track Order Status</span>
            </button>
            <span className="text-slate-600">|</span>
            <a
              href="https://wa.me/8801712345678"
              target="_blank"
              rel="noopener noreferrer"
              className="text-emerald-400 hover:text-emerald-300 font-semibold flex items-center gap-1"
            >
              <MessageSquare className="w-3 h-3" />
              <span>Direct WhatsApp Help</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18">
          
          {/* Official Edu Quest Logo */}
          <button 
            onClick={() => handleNavClick('home')}
            className="text-left focus:outline-hidden cursor-pointer"
          >
            <EduQuestLogo size="md" showSlogan={true} />
          </button>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-semibold text-slate-600">
            <button
              onClick={() => handleNavClick('home')}
              className={`hover:text-blue-600 transition-colors cursor-pointer ${
                activeNavTab === 'home' ? 'text-blue-600 font-bold' : ''
              }`}
            >
              Home
            </button>

            <button
              onClick={() => handleNavClick('services')}
              className={`hover:text-blue-600 transition-colors cursor-pointer ${
                activeNavTab === 'services' ? 'text-blue-600 font-bold' : ''
              }`}
            >
              Academic Services (8)
            </button>

            <button
              onClick={() => handleNavClick('how-it-works')}
              className={`hover:text-blue-600 transition-colors cursor-pointer ${
                activeNavTab === 'how-it-works' ? 'text-blue-600 font-bold' : ''
              }`}
            >
              How It Works
            </button>

            <button
              onClick={() => handleNavClick('reviews')}
              className={`hover:text-blue-600 transition-colors cursor-pointer flex items-center gap-1 ${
                activeNavTab === 'reviews' ? 'text-blue-600 font-bold' : ''
              }`}
            >
              <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
              <span>Customer Reviews</span>
            </button>

            <button
              onClick={() => openOrderTracker()}
              className="hover:text-blue-600 transition-colors cursor-pointer text-slate-600 flex items-center gap-1"
            >
              <Search className="w-3.5 h-3.5 text-blue-500" />
              <span>Track Order</span>
            </button>

            <button
              onClick={() => handleNavClick('faq')}
              className="hover:text-blue-600 transition-colors cursor-pointer text-slate-600"
            >
              FAQ
            </button>
          </nav>

          {/* Right Action Controls: Cart Button & Order Now CTA */}
          <div className="flex items-center gap-3">
            
            {/* Cart Trigger Button with badge & subtotal */}
            <button
              onClick={openCart}
              className="relative flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-100 hover:bg-blue-50 border border-slate-200 hover:border-blue-200 text-slate-800 transition-all cursor-pointer group"
              title="View Support Cart"
            >
              <div className="relative">
                <ShoppingBag className="w-5 h-5 text-slate-700 group-hover:text-blue-600 transition-colors" />
                {cartCount > 0 && (
                  <span className="absolute -top-2 -right-2 w-4.5 h-4.5 bg-blue-600 text-white text-[10px] font-black rounded-full flex items-center justify-center animate-in zoom-in">
                    {cartCount}
                  </span>
                )}
              </div>

              <div className="hidden sm:flex flex-col text-left">
                <span className="text-[10px] font-bold uppercase text-slate-400 leading-none">
                  Cart
                </span>
                <span className="text-xs font-black text-slate-900 leading-tight">
                  {cartCount > 0 ? `৳${cartTotal}` : 'Empty'}
                </span>
              </div>
            </button>

            {/* Direct Order Now Primary Button */}
            <button
              onClick={() => openOrderModal()}
              className="px-5 py-2.5 bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-700 hover:from-blue-700 hover:to-indigo-800 text-white text-xs sm:text-sm font-bold rounded-xl shadow-md shadow-blue-500/25 transition-all flex items-center gap-1.5 cursor-pointer hover:shadow-lg active:scale-95"
            >
              <Sparkles className="w-4 h-4 text-amber-300" />
              <span>Order Now (সরাসরি অর্ডার)</span>
            </button>

            {/* Mobile Hamburger Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-slate-700 hover:text-blue-600 hover:bg-slate-100 rounded-xl"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>

          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-2 shadow-xl animate-in slide-in-from-top duration-200">
          <button
            onClick={() => handleNavClick('home')}
            className="w-full text-left px-3 py-2.5 text-sm font-semibold text-slate-800 hover:bg-slate-50 rounded-xl"
          >
            Home
          </button>
          <button
            onClick={() => handleNavClick('services')}
            className="w-full text-left px-3 py-2.5 text-sm font-semibold text-slate-800 hover:bg-slate-50 rounded-xl"
          >
            All Academic Services
          </button>
          <button
            onClick={() => handleNavClick('how-it-works')}
            className="w-full text-left px-3 py-2.5 text-sm font-semibold text-slate-800 hover:bg-slate-50 rounded-xl"
          >
            How Ordering & Delivery Works
          </button>
          <button
            onClick={() => handleNavClick('reviews')}
            className="w-full text-left px-3 py-2.5 text-sm font-semibold text-slate-800 hover:bg-slate-50 rounded-xl flex items-center justify-between"
          >
            <span className="flex items-center gap-1.5">
              <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
              <span>Customer Reviews</span>
            </span>
            <span className="text-xs bg-amber-100 text-amber-900 px-2 py-0.5 rounded-full font-bold">4.9 ★</span>
          </button>
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              openOrderTracker();
            }}
            className="w-full text-left px-3 py-2.5 text-sm font-semibold text-blue-700 bg-blue-50/60 rounded-xl flex items-center gap-2"
          >
            <Search className="w-4 h-4" />
            <span>Track Order Status</span>
          </button>

          <div className="pt-3 border-t border-slate-100 flex gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                openOrderModal();
              }}
              className="w-full py-2.5 bg-blue-600 text-white rounded-xl font-bold text-xs shadow-xs"
            >
              Order Academic Support
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
