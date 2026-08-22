import React from 'react';
import { useApp } from '../../context/AppContext';
import { KraflynLogo } from './KraflynLogo';
import { 
  PhoneCall, 
  MessageSquare, 
  Mail, 
  MapPin, 
  ShieldCheck, 
  ArrowUp,
  Star,
  Search,
  Languages,
  Sparkles,
  Palette,
  Code2,
  GraduationCap
} from 'lucide-react';

export const Footer: React.FC = () => {
  const { 
    setActiveNavTab, 
    openOrderTracker, 
    openOrderModal, 
    bilingualServices,
    language, 
    setLanguage,
    t 
  } = useApp();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavClick = (tab: string, sectionId?: string) => {
    setActiveNavTab(tab);
    if (sectionId) {
      const el = document.getElementById(sectionId);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-slate-950 text-slate-400 text-xs border-t border-slate-800">
      <div className="max-w-[1920px] w-full mx-auto px-3 sm:px-6 md:px-8 lg:px-10 xl:px-12 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          
          {/* Col 1 & 2: Kraflyn Technologies Brand & Mission */}
          <div className="lg:col-span-2 space-y-4">
            <div className="bg-slate-900/90 inline-block p-3 rounded-2xl border border-slate-800 shadow-sm">
              <KraflynLogo size="md" showSlogan={true} />
            </div>
            <p className="text-slate-400 text-xs leading-relaxed max-w-sm">
              {t.footerAbout}
            </p>

            {/* 3 Pillar Summary Badges */}
            <div className="flex flex-wrap gap-2 pt-1">
              <span className="px-2.5 py-1 rounded-lg bg-fuchsia-950/60 border border-fuchsia-800/60 text-fuchsia-300 text-[10.5px] font-semibold flex items-center gap-1">
                <Palette className="w-3 h-3 text-fuchsia-400" />
                <span>Design (15)</span>
              </span>
              <span className="px-2.5 py-1 rounded-lg bg-cyan-950/60 border border-cyan-800/60 text-cyan-300 text-[10.5px] font-semibold flex items-center gap-1">
                <Code2 className="w-3 h-3 text-cyan-400" />
                <span>Development (15)</span>
              </span>
              <span className="px-2.5 py-1 rounded-lg bg-emerald-950/60 border border-emerald-800/60 text-emerald-300 text-[10.5px] font-semibold flex items-center gap-1">
                <GraduationCap className="w-3 h-3 text-emerald-400" />
                <span>Student Support (15)</span>
              </span>
            </div>

            <div className="flex flex-wrap items-center gap-3 text-white pt-2">
              <a
                href="https://wa.me/8801712345678"
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 py-2 rounded-xl bg-emerald-600/20 border border-emerald-500/40 text-emerald-400 hover:bg-emerald-600 hover:text-white transition-colors flex items-center gap-1.5 font-semibold text-xs"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>WhatsApp: +880 1712-345678</span>
              </a>

              <button
                onClick={() => setLanguage(language === 'bn' ? 'en' : 'bn')}
                className="px-3 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white text-xs font-semibold flex items-center gap-1 cursor-pointer transition-colors border border-slate-700"
              >
                <Languages className="w-3.5 h-3.5 text-cyan-400" />
                <span>Language: {language === 'bn' ? 'বাংলা (Switch to EN)' : 'English (বাংলায় দেখুন)'}</span>
              </button>
            </div>
          </div>

          {/* Col 3: Quick Navigation */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              {t.quickLinks}
            </h4>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => handleNavClick('home')}
                  className="hover:text-cyan-400 transition-colors cursor-pointer"
                >
                  {t.home}
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavClick('services', 'services-section')}
                  className="hover:text-cyan-400 transition-colors cursor-pointer"
                >
                  {t.services}
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavClick('how-it-works', 'how-it-works-section')}
                  className="hover:text-cyan-400 transition-colors cursor-pointer"
                >
                  {t.howItWorks}
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavClick('reviews', 'reviews-section')}
                  className="hover:text-cyan-400 transition-colors cursor-pointer flex items-center gap-1"
                >
                  <Star className="w-3 h-3 text-amber-400 fill-amber-400" />
                  <span>{t.reviews}</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => openOrderTracker()}
                  className="hover:text-cyan-400 transition-colors cursor-pointer text-cyan-400 flex items-center gap-1"
                >
                  <Search className="w-3 h-3" />
                  <span>{t.trackOrder}</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavClick('faq', 'faq-section')}
                  className="hover:text-cyan-400 transition-colors cursor-pointer"
                >
                  {t.faq}
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Top Featured Services */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              {t.popularServices}
            </h4>
            <ul className="space-y-2">
              {bilingualServices.slice(0, 6).map((srv) => (
                <li key={srv.id}>
                  <button 
                    onClick={() => handleNavClick('services', 'services-section')}
                    className="hover:text-cyan-400 transition-colors text-left cursor-pointer truncate max-w-[200px] block"
                  >
                    {srv.title[language]}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 5: Direct Contact */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              {t.directContact}
            </h4>
            <div className="space-y-2.5 text-slate-400">
              <div className="flex items-start gap-2">
                <PhoneCall className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <span>+880 1712-345678</span>
              </div>
              <div className="flex items-start gap-2">
                <Mail className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <span>support@kraflyn.com</span>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <span>Dhaka, Bangladesh</span>
              </div>
              <div className="pt-2">
                <button
                  onClick={() => openOrderModal()}
                  className="w-full py-2.5 bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600 hover:from-cyan-500 hover:to-indigo-700 text-white rounded-xl font-bold text-xs shadow-xs transition-all cursor-pointer"
                >
                  {t.orderNow}
                </button>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-[11px] text-center sm:text-left">
            © {new Date().getFullYear()} {t.copyright}
          </p>

          <div className="flex items-center gap-4">
            <span className="text-[11px] text-slate-500 flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
              {t.confidentialMentorship}
            </span>

            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white transition-colors cursor-pointer"
              title="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
