import React from 'react';
import { useApp } from '../../context/AppContext';
import { KraflynLogo } from '../common/KraflynLogo';
import { CountUpNumber } from '../common/CountUpNumber';
import { 
  ArrowRight, 
  ShoppingBag, 
  Sparkles, 
  Star, 
  ShieldCheck, 
  Clock, 
  GraduationCap, 
  CheckCircle2,
  Search,
  Users,
  Palette,
  Code2,
  ChevronRight,
  Flame,
  Zap,
  Globe,
  BarChart3
} from 'lucide-react';
import { motion } from 'motion/react';

export const Hero: React.FC = () => {
  const { openOrderModal, openOrderTracker, language, t } = useApp();

  const scrollToServices = () => {
    const el = document.getElementById('services-section');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
    }
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-blue-950 text-white pt-10 pb-16 sm:pt-16 sm:pb-24">
      
      {/* Dynamic Animated Ambient Lights */}
      <motion.div 
        animate={{ 
          scale: [1, 1.15, 1],
          opacity: [0.25, 0.45, 0.25],
          rotate: [0, 90, 0]
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-24 left-1/4 w-96 h-96 bg-cyan-600/30 rounded-full blur-3xl pointer-events-none" 
      />
      <motion.div 
        animate={{ 
          scale: [1, 1.25, 1],
          opacity: [0.2, 0.35, 0.2],
          rotate: [0, -90, 0]
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute top-1/3 right-10 w-96 h-96 bg-fuchsia-600/25 rounded-full blur-3xl pointer-events-none" 
      />

      <div className="max-w-[1920px] w-full mx-auto px-3 sm:px-6 md:px-8 lg:px-10 xl:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 xl:gap-16 items-center">
          
          {/* Left Column: Heading & Value Proposition */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 text-center lg:text-left space-y-6 xl:space-y-7"
          >
            
            {/* Top Badge */}
            <motion.div variants={itemVariants} className="inline-flex items-center max-w-full">
              <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-full bg-gradient-to-r from-cyan-500/15 via-blue-500/15 to-fuchsia-500/15 border border-cyan-400/40 text-cyan-300 text-[11px] sm:text-sm font-semibold backdrop-blur-md shadow-lg shadow-cyan-500/10 max-w-full">
                <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-300 shrink-0 animate-pulse" />
                <span className="truncate">{t.heroBadge}</span>
                <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-emerald-400 shrink-0"></span>
              </div>
            </motion.div>

            {/* Main Headline */}
            <motion.h1 
              variants={itemVariants} 
              className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-black tracking-tight text-white leading-[1.2] sm:leading-[1.15] break-words"
            >
              <span className="block text-slate-200 font-extrabold text-xl sm:text-2xl md:text-3xl lg:text-4xl mb-1.5">
                {t.heroTitle1}
              </span>
              <span className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-fuchsia-400 drop-shadow-xs my-0.5">
                {t.heroTitleHighlight}
              </span>
              <span className="block text-lg sm:text-2xl md:text-3xl lg:text-4xl text-white font-bold mt-1.5">
                {t.heroTitle2}
              </span>
            </motion.h1>

            {/* Sub-description */}
            <motion.p 
              variants={itemVariants} 
              className="text-sm sm:text-base xl:text-lg text-slate-300 max-w-3xl mx-auto lg:mx-0 leading-relaxed font-normal"
            >
              {t.heroSubtitle}
            </motion.p>

            {/* 5 Distinct Service Wings Pills */}
            <motion.div variants={itemVariants} className="flex flex-wrap items-center justify-center lg:justify-start gap-2 pt-1">
              <span className="px-3 py-1.5 rounded-xl bg-fuchsia-500/15 border border-fuchsia-400/30 text-fuchsia-300 text-xs font-bold flex items-center gap-1.5">
                <Palette className="w-3.5 h-3.5 text-fuchsia-400" />
                <span>{language === 'bn' ? '🎨 ডিজাইন' : '🎨 Design'}</span>
              </span>
              <span className="px-3 py-1.5 rounded-xl bg-cyan-500/15 border border-cyan-400/30 text-cyan-300 text-xs font-bold flex items-center gap-1.5">
                <Code2 className="w-3.5 h-3.5 text-cyan-400" />
                <span>{language === 'bn' ? '💻 ডেভেলপমেন্ট' : '💻 Development'}</span>
              </span>
              <span className="px-3 py-1.5 rounded-xl bg-indigo-500/15 border border-indigo-400/30 text-indigo-300 text-xs font-bold flex items-center gap-1.5">
                <Globe className="w-3.5 h-3.5 text-indigo-400" />
                <span>{language === 'bn' ? '🌐 ওয়ার্ডপ্রেস উইং' : '🌐 WordPress Wing'}</span>
              </span>
              <span className="px-3 py-1.5 rounded-xl bg-orange-500/15 border border-orange-400/30 text-orange-300 text-xs font-bold flex items-center gap-1.5">
                <BarChart3 className="w-3.5 h-3.5 text-orange-400" />
                <span>{language === 'bn' ? '📊 ডাটা অ্যানালাইসিস' : '📊 Data Analysis'}</span>
              </span>
              <span className="px-3 py-1.5 rounded-xl bg-emerald-500/15 border border-emerald-400/30 text-emerald-300 text-xs font-bold flex items-center gap-1.5">
                <GraduationCap className="w-3.5 h-3.5 text-emerald-400" />
                <span>{language === 'bn' ? '🎓 স্টুডেন্ট সাপোর্ট' : '🎓 Student Support'}</span>
              </span>
            </motion.div>

            {/* Primary Action Buttons */}
            <motion.div 
              variants={itemVariants} 
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4 pt-2"
            >
              <motion.button
                whileHover={{ scale: 1.025, y: -2 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                onClick={() => openOrderModal()}
                className="w-full sm:w-auto px-6 sm:px-8 py-3.5 sm:py-4 bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 hover:from-cyan-400 hover:to-indigo-700 text-white font-black text-sm sm:text-base rounded-2xl shadow-xl shadow-cyan-600/30 flex items-center justify-center gap-2.5 cursor-pointer smooth-card-transition"
              >
                <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-amber-300 shrink-0" />
                <span>{t.heroDirectOrderBtn}</span>
                <ArrowRight className="w-4 h-4" />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.02, backgroundColor: "rgba(255, 255, 255, 0.15)", y: -1 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                onClick={scrollToServices}
                className="w-full sm:w-auto px-5 sm:px-7 py-3.5 sm:py-4 bg-white/10 border border-white/20 text-white font-bold text-sm sm:text-base rounded-2xl backdrop-blur-md flex items-center justify-center gap-2 cursor-pointer transition-all duration-300"
              >
                <ShoppingBag className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-300 shrink-0" />
                <span>{t.heroBrowseBtn}</span>
              </motion.button>
            </motion.div>

            {/* Live Stats Row with smooth hovering and scroll count-up animation */}
            <motion.div 
              variants={itemVariants} 
              className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3.5 pt-5 sm:pt-6 border-t border-slate-800 text-center sm:text-left"
            >
              <motion.div 
                whileHover={{ scale: 1.025, y: -3 }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="p-2.5 xs:p-3.5 sm:p-4 rounded-xl sm:rounded-2xl bg-white/5 border border-white/10 hover:border-cyan-400/40 hover:bg-white/8 backdrop-blur-xs transition-all duration-300 cursor-default shadow-xs hover:shadow-lg hover:shadow-cyan-500/10"
              >
                <div className="text-lg xs:text-xl sm:text-2xl xl:text-3xl font-black text-white">
                  <CountUpNumber 
                    end={5000} 
                    duration={2.2} 
                    suffix="+" 
                    formatCommas={true} 
                    isBengali={language === 'bn'} 
                  />
                </div>
                <div className="text-[10px] xs:text-xs text-slate-400 font-medium mt-0.5">{t.heroStatStudentsLabel}</div>
              </motion.div>

              <motion.div 
                whileHover={{ scale: 1.025, y: -3 }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="p-2.5 xs:p-3.5 sm:p-4 rounded-xl sm:rounded-2xl bg-white/5 border border-white/10 hover:border-emerald-400/40 hover:bg-white/8 backdrop-blur-xs transition-all duration-300 cursor-default shadow-xs hover:shadow-lg hover:shadow-emerald-500/10"
              >
                <div className="text-lg xs:text-xl sm:text-2xl xl:text-3xl font-black text-emerald-400">
                  <CountUpNumber 
                    end={99.4} 
                    decimals={1} 
                    duration={2.2} 
                    suffix="%" 
                    isBengali={language === 'bn'} 
                  />
                </div>
                <div className="text-[10px] xs:text-xs text-slate-400 font-medium mt-0.5">{t.heroStatSatisfactionLabel}</div>
              </motion.div>

              <motion.div 
                whileHover={{ scale: 1.025, y: -3 }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="p-2.5 xs:p-3.5 sm:p-4 rounded-xl sm:rounded-2xl bg-white/5 border border-white/10 hover:border-sky-400/40 hover:bg-white/8 backdrop-blur-xs transition-all duration-300 cursor-default shadow-xs hover:shadow-lg hover:shadow-sky-500/10"
              >
                <div className="text-lg xs:text-xl sm:text-2xl xl:text-3xl font-black text-sky-400">
                  <CountUpNumber 
                    end={45} 
                    duration={1.8} 
                    suffix="+" 
                    isBengali={language === 'bn'} 
                  />
                </div>
                <div className="text-[10px] xs:text-xs text-slate-400 font-medium mt-0.5">{t.heroStatUniversitiesLabel}</div>
              </motion.div>

              <motion.div 
                whileHover={{ scale: 1.025, y: -3 }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="p-2.5 xs:p-3.5 sm:p-4 rounded-xl sm:rounded-2xl bg-white/5 border border-white/10 hover:border-fuchsia-400/40 hover:bg-white/8 backdrop-blur-xs transition-all duration-300 cursor-default shadow-xs hover:shadow-lg hover:shadow-fuchsia-500/10"
              >
                <div className="text-lg xs:text-xl sm:text-2xl xl:text-3xl font-black text-fuchsia-300">
                  <CountUpNumber 
                    end={24} 
                    start={2} 
                    duration={1.8} 
                    prefix={language === 'bn' ? '২-' : '2-'} 
                    suffix={language === 'bn' ? ' ঘণ্টা' : ' Hours'} 
                    isBengali={language === 'bn'} 
                  />
                </div>
                <div className="text-[10px] xs:text-xs text-slate-400 font-medium mt-0.5">{t.heroStatTurnaroundLabel}</div>
              </motion.div>
            </motion.div>

          </motion.div>

          {/* Right Column: Kraflyn Technologies Brand Badge Showcase & Process Flow */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.94, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative flex flex-col items-center"
          >
            {/* Ambient Backlight Glow */}
            <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/20 via-blue-500/20 to-fuchsia-500/20 rounded-3xl blur-2xl -z-10" />

            <motion.div 
              whileHover={{ y: -4 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="w-full bg-gradient-to-b from-slate-900/95 to-slate-950/95 border border-slate-700/80 hover:border-cyan-500/40 rounded-3xl p-6 sm:p-7 shadow-2xl backdrop-blur-xl space-y-5 transition-all duration-300"
            >
              
              {/* Brand Top Header */}
              <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                <div className="flex items-center gap-2.5">
                  <KraflynLogo size="sm" variant="emblem" />
                  <div>
                    <h3 className="text-sm font-extrabold text-white leading-none">Kraflyn Technologies</h3>
                    <span className="text-[11px] text-cyan-400 font-medium">Create. Connect. Grow.</span>
                  </div>
                </div>

                <div className="flex items-center gap-1 bg-amber-400/10 border border-amber-400/20 px-2.5 py-1 rounded-full text-xs text-amber-300 font-bold">
                  <Star className="w-3.5 h-3.5 fill-amber-300" />
                  <span>4.9 ★ (850+)</span>
                </div>
              </div>

              {/* Large Centered Logo Emblem Visual */}
              <div className="py-2 flex justify-center">
                <KraflynLogo size="xl" variant="emblem" />
              </div>

              {/* 3 Step Snapshot */}
              <div className="space-y-2.5">
                <motion.div 
                  whileHover={{ x: 4, backgroundColor: "rgba(30, 41, 59, 0.9)" }}
                  transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                  className="bg-slate-800/60 border border-slate-700/60 rounded-2xl p-3 flex items-start gap-3 transition-colors hover:border-fuchsia-500/40 cursor-default"
                >
                  <div className="w-6 h-6 rounded-lg bg-fuchsia-600/30 text-fuchsia-400 font-black text-xs flex items-center justify-center shrink-0 mt-0.5 border border-fuchsia-500/30">
                    1
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-white">{t.step1Title}</h4>
                    <p className="text-[11px] text-slate-400 mt-0.5">{t.step1Desc}</p>
                  </div>
                </motion.div>

                <motion.div 
                  whileHover={{ x: 4, backgroundColor: "rgba(30, 41, 59, 0.9)" }}
                  transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                  className="bg-slate-800/60 border border-slate-700/60 rounded-2xl p-3 flex items-start gap-3 transition-colors hover:border-cyan-500/40 cursor-default"
                >
                  <div className="w-6 h-6 rounded-lg bg-cyan-600/30 text-cyan-400 font-black text-xs flex items-center justify-center shrink-0 mt-0.5 border border-cyan-500/30">
                    2
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-white">{t.step2Title}</h4>
                    <p className="text-[11px] text-slate-400 mt-0.5">{t.step2Desc}</p>
                  </div>
                </motion.div>

                <motion.div 
                  whileHover={{ x: 4, backgroundColor: "rgba(30, 41, 59, 0.9)" }}
                  transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                  className="bg-slate-800/60 border border-slate-700/60 rounded-2xl p-3 flex items-start gap-3 transition-colors hover:border-emerald-500/40 cursor-default"
                >
                  <div className="w-6 h-6 rounded-lg bg-emerald-600/30 text-emerald-400 font-black text-xs flex items-center justify-center shrink-0 mt-0.5 border border-emerald-500/30">
                    3
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-white">{t.step3Title}</h4>
                    <p className="text-[11px] text-slate-400 mt-0.5">{t.step3Desc}</p>
                  </div>
                </motion.div>
              </div>

              {/* Real-time Order Tracker Trigger */}
              <div className="pt-1">
                <motion.button
                  whileHover={{ scale: 1.02, y: -1 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                  onClick={() => openOrderTracker()}
                  className="w-full py-3 px-3 bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white border border-slate-600 hover:border-cyan-400 rounded-xl text-xs font-bold flex items-center justify-center gap-2 transition-all duration-300 cursor-pointer shadow-xs"
                >
                  <Search className="w-3.5 h-3.5 text-cyan-400" />
                  <span>{t.trackOrderStatus}</span>
                </motion.button>
              </div>

            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
