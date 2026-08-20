import React from 'react';
import { useApp } from '../../context/AppContext';
import { 
  ShoppingBag, 
  MessageSquare, 
  UserCheck, 
  ShieldCheck, 
  ArrowRight, 
  Sparkles 
} from 'lucide-react';
import { motion } from 'motion/react';

export const HowItWorks: React.FC = () => {
  const { openOrderModal, language, t } = useApp();

  const steps = [
    {
      step: '01',
      title: t.step1Title,
      description: t.step1Desc,
      icon: ShoppingBag
    },
    {
      step: '02',
      title: t.step2Title,
      description: t.step2Desc,
      icon: MessageSquare
    },
    {
      step: '03',
      title: t.step3Title,
      description: t.step3Desc,
      icon: UserCheck
    },
    {
      step: '04',
      title: t.step4Title,
      description: t.step4Desc,
      icon: ShieldCheck
    }
  ];

  return (
    <section id="how-it-works-section" className="py-16 sm:py-24 bg-white border-t border-slate-200">
      <div className="max-w-[1920px] w-full mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 2xl:px-20">
        
        {/* Header with Scroll Animation */}
        <motion.div 
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-800 text-xs font-bold uppercase tracking-wider mb-2">
            <Sparkles className="w-3.5 h-3.5 text-blue-600" />
            <span>{t.howItWorksBadge}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight">
            {t.howItWorksHeading}
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-2">
            {t.howItWorksSubtitle}
          </p>
        </motion.div>

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -7, scale: 1.015, transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] } }}
                className="bg-slate-50 border border-slate-200 rounded-3xl p-6 relative hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-300 hover:bg-white hover:border-blue-300 group flex flex-col justify-between smooth-card-transition"
              >
                <div>
                  {/* Step badge */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-2xl bg-white border border-slate-200 text-blue-600 flex items-center justify-center font-black text-base shadow-xs group-hover:bg-blue-600 group-hover:text-white group-hover:rotate-6 transition-all duration-300">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-3xl font-black text-slate-200 group-hover:text-blue-200 transition-colors duration-300 font-mono">
                      {item.step}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-slate-900 leading-snug group-hover:text-blue-700 transition-colors duration-200">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA Banner with Entrance Animation */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.96, y: 30 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mt-14 bg-gradient-to-r from-blue-700 via-blue-800 to-indigo-900 rounded-3xl p-8 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl relative overflow-hidden"
        >
          {/* Subtle Ambient light */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl pointer-events-none" />

          <div className="space-y-1 text-center md:text-left relative z-10">
            <h3 className="text-xl sm:text-2xl font-black">
              {language === 'bn' ? 'জরুরি কোনো একাডেমিক সমস্যা আছে?' : 'Have an urgent academic problem or deadline?'}
            </h3>
            <p className="text-xs sm:text-sm text-blue-100 max-w-xl">
              {language === 'bn' ? 'এখনই আপনার রিকোয়ারমেন্ট সাবমিট করুন। আমাদের টিম দ্রুততম সময়ে আপনার সাথে যোগাযোগ করবে।' : 'Submit your course requirements now. Our academic coordinators will match the best mentor immediately.'}
            </p>
          </div>

          <motion.button
            whileHover={{ scale: 1.03, y: -2 }}
            whileTap={{ scale: 0.96 }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
            onClick={() => openOrderModal()}
            className="px-6 py-3.5 bg-white hover:bg-slate-100 text-blue-900 rounded-2xl font-black text-xs sm:text-sm shadow-xl hover:shadow-2xl flex items-center gap-2 cursor-pointer whitespace-nowrap relative z-10 transition-all duration-200"
          >
            <span>{t.heroDirectOrderBtn}</span>
            <ArrowRight className="w-4 h-4 text-blue-600" />
          </motion.button>
        </motion.div>

      </div>
    </section>
  );
};
