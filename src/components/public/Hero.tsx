import React from 'react';
import { useApp } from '../../context/AppContext';
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
  Building2,
  Check
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
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-900 via-slate-900 to-blue-950 text-white pt-12 pb-16 sm:pt-18 sm:pb-24">
      
      {/* Dynamic Animated Background Blobs */}
      <motion.div 
        animate={{ 
          scale: [1, 1.15, 1],
          opacity: [0.2, 0.35, 0.2],
          rotate: [0, 90, 0]
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-24 left-1/4 w-96 h-96 bg-blue-600/30 rounded-full blur-3xl pointer-events-none" 
      />
      <motion.div 
        animate={{ 
          scale: [1, 1.25, 1],
          opacity: [0.15, 0.3, 0.15],
          rotate: [0, -90, 0]
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute top-1/3 right-10 w-96 h-96 bg-teal-500/20 rounded-full blur-3xl pointer-events-none" 
      />

      <div className="max-w-[1720px] w-full mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 2xl:px-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 xl:gap-16 items-center">
          
          {/* Left Column: Heading & Value Proposition */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 text-center lg:text-left space-y-6 xl:space-y-7"
          >
            
            {/* Top Badge */}
            <motion.div variants={itemVariants} className="inline-flex items-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/15 border border-blue-400/30 text-blue-300 text-xs sm:text-sm font-semibold backdrop-blur-md shadow-lg shadow-blue-500/10">
                <Sparkles className="w-4 h-4 text-amber-300 shrink-0 animate-pulse" />
                <span>{t.heroBadge}</span>
                <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
              </div>
            </motion.div>

            {/* Main Headline */}
            <motion.h1 
              variants={itemVariants} 
              className="text-3xl sm:text-5xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-black tracking-tight text-white leading-[1.12]"
            >
              {t.heroTitle1} <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-teal-300 drop-shadow-xs">
                {t.heroTitleHighlight}
              </span> <br />
              {t.heroTitle2}
            </motion.h1>

            {/* Sub-description */}
            <motion.p 
              variants={itemVariants} 
              className="text-sm sm:text-base xl:text-lg text-slate-300 max-w-3xl mx-auto lg:mx-0 leading-relaxed font-normal"
            >
              {t.heroSubtitle}
            </motion.p>

            {/* Primary Action Buttons */}
            <motion.div 
              variants={itemVariants} 
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2"
            >
              <motion.button
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => openOrderModal()}
                className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-blue-500 via-blue-600 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white font-black text-sm sm:text-base rounded-2xl shadow-xl shadow-blue-600/30 flex items-center justify-center gap-2.5 cursor-pointer"
              >
                <Sparkles className="w-5 h-5 text-amber-300 shrink-0" />
                <span>{t.heroDirectOrderBtn}</span>
                <ArrowRight className="w-4 h-4" />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.02, backgroundColor: "rgba(255, 255, 255, 0.15)" }}
                whileTap={{ scale: 0.98 }}
                onClick={scrollToServices}
                className="w-full sm:w-auto px-7 py-4 bg-white/10 border border-white/20 text-white font-bold text-sm sm:text-base rounded-2xl backdrop-blur-md flex items-center justify-center gap-2 cursor-pointer transition-colors"
              >
                <ShoppingBag className="w-5 h-5 text-blue-300 shrink-0" />
                <span>{t.heroBrowseBtn}</span>
              </motion.button>
            </motion.div>

            {/* Live Stats Row with scroll & entrance animation */}
            <motion.div 
              variants={itemVariants} 
              className="grid grid-cols-2 sm:grid-cols-4 gap-3.5 pt-6 border-t border-slate-800 text-center sm:text-left"
            >
              <motion.div 
                whileHover={{ scale: 1.03, y: -2 }}
                className="p-3.5 sm:p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-blue-400/30 backdrop-blur-xs transition-colors"
              >
                <div className="text-xl sm:text-2xl xl:text-3xl font-black text-white">{t.heroStatStudents}</div>
                <div className="text-xs text-slate-400 font-medium mt-0.5">{t.heroStatStudentsLabel}</div>
              </motion.div>

              <motion.div 
                whileHover={{ scale: 1.03, y: -2 }}
                className="p-3.5 sm:p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-emerald-400/30 backdrop-blur-xs transition-colors"
              >
                <div className="text-xl sm:text-2xl xl:text-3xl font-black text-emerald-400">{t.heroStatSatisfaction}</div>
                <div className="text-xs text-slate-400 font-medium mt-0.5">{t.heroStatSatisfactionLabel}</div>
              </motion.div>

              <motion.div 
                whileHover={{ scale: 1.03, y: -2 }}
                className="p-3.5 sm:p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-sky-400/30 backdrop-blur-xs transition-colors"
              >
                <div className="text-xl sm:text-2xl xl:text-3xl font-black text-sky-400">{t.heroStatUniversities}</div>
                <div className="text-xs text-slate-400 font-medium mt-0.5">{t.heroStatUniversitiesLabel}</div>
              </motion.div>

              <motion.div 
                whileHover={{ scale: 1.03, y: -2 }}
                className="p-3.5 sm:p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-amber-400/30 backdrop-blur-xs transition-colors"
              >
                <div className="text-xl sm:text-2xl xl:text-3xl font-black text-amber-300">{t.heroStatTurnaround}</div>
                <div className="text-xs text-slate-400 font-medium mt-0.5">{t.heroStatTurnaroundLabel}</div>
              </motion.div>
            </motion.div>

          </motion.div>

          {/* Right Column: Workflow snapshot card with smooth floating motion */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.92, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 relative"
          >
            {/* Ambient Backlight Glow */}
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-teal-400/20 rounded-3xl blur-2xl -z-10" />

            <div className="bg-gradient-to-b from-slate-800/95 to-slate-900/95 border border-slate-700/80 rounded-3xl p-6 sm:p-7 shadow-2xl backdrop-blur-xl space-y-5">
              
              <div className="flex items-center justify-between pb-3 border-b border-slate-700/80">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-xl bg-blue-500/20 border border-blue-400/30 flex items-center justify-center text-blue-400">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-white leading-none">Edu Quest Process</h3>
                    <span className="text-[11px] text-emerald-400 font-medium">100% Confidential Delivery</span>
                  </div>
                </div>

                <div className="flex items-center gap-1 bg-amber-400/10 border border-amber-400/20 px-2.5 py-1 rounded-full text-xs text-amber-300 font-bold">
                  <Star className="w-3.5 h-3.5 fill-amber-300" />
                  <span>4.9 ★ (850+)</span>
                </div>
              </div>

              {/* 3 Step Snapshot with Staggered Visual Rhythm */}
              <div className="space-y-3">
                <motion.div 
                  whileHover={{ x: 4, transition: { duration: 0.2 } }}
                  className="bg-slate-800/70 border border-slate-700/60 rounded-2xl p-3.5 flex items-start gap-3 transition-colors hover:border-blue-500/40"
                >
                  <div className="w-7 h-7 rounded-xl bg-blue-600/30 text-blue-400 font-black text-xs flex items-center justify-center shrink-0 mt-0.5 border border-blue-500/30">
                    1
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-white">{t.step1Title}</h4>
                    <p className="text-[11px] text-slate-400 mt-0.5">{t.step1Desc}</p>
                  </div>
                </motion.div>

                <motion.div 
                  whileHover={{ x: 4, transition: { duration: 0.2 } }}
                  className="bg-slate-800/70 border border-slate-700/60 rounded-2xl p-3.5 flex items-start gap-3 transition-colors hover:border-emerald-500/40"
                >
                  <div className="w-7 h-7 rounded-xl bg-emerald-600/30 text-emerald-400 font-black text-xs flex items-center justify-center shrink-0 mt-0.5 border border-emerald-500/30">
                    2
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-white">{t.step2Title}</h4>
                    <p className="text-[11px] text-slate-400 mt-0.5">{t.step2Desc}</p>
                  </div>
                </motion.div>

                <motion.div 
                  whileHover={{ x: 4, transition: { duration: 0.2 } }}
                  className="bg-slate-800/70 border border-slate-700/60 rounded-2xl p-3.5 flex items-start gap-3 transition-colors hover:border-indigo-500/40"
                >
                  <div className="w-7 h-7 rounded-xl bg-indigo-600/30 text-indigo-400 font-black text-xs flex items-center justify-center shrink-0 mt-0.5 border border-indigo-500/30">
                    3
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-white">{t.step3Title}</h4>
                    <p className="text-[11px] text-slate-400 mt-0.5">{t.step3Desc}</p>
                  </div>
                </motion.div>
              </div>

              {/* Real-time Order Tracker Trigger */}
              <div className="pt-2">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => openOrderTracker()}
                  className="w-full py-3 px-3 bg-slate-800 hover:bg-slate-700/90 border border-slate-600 text-slate-200 rounded-xl text-xs font-bold flex items-center justify-center gap-2 transition-colors cursor-pointer"
                >
                  <Search className="w-3.5 h-3.5 text-blue-400" />
                  <span>{t.trackOrderStatus}</span>
                </motion.button>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
