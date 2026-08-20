import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { BILINGUAL_FAQS } from '../../data/translations';
import { ChevronDown, HelpCircle, MessageCircle, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export const FaqSection: React.FC = () => {
  const { language, t } = useApp();
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section id="faq-section" className="py-16 md:py-24 bg-slate-50 border-t border-slate-200">
      <div className="max-w-[1920px] w-full mx-auto px-3 sm:px-6 md:px-8 lg:px-10 xl:px-12">
        
        {/* Header with Scroll Animation */}
        <motion.div 
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-semibold mb-3 shadow-xs">
            <HelpCircle className="w-3.5 h-3.5 text-blue-600" />
            <span>{t.faqBadge}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight">
            {t.faqHeading}
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-slate-600">
            {t.faqSubtitle}
          </p>
        </motion.div>

        {/* Accordion list with Animated Expansions & Smooth Transitions */}
        <div className="max-w-4xl mx-auto space-y-3.5">
          {BILINGUAL_FAQS.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.35, delay: idx * 0.04 }}
                layout
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen 
                    ? 'bg-white border-blue-200 shadow-md shadow-blue-500/5 ring-1 ring-blue-500/20' 
                    : 'bg-white/80 hover:bg-white border-slate-200/90 shadow-xs hover:border-slate-300'
                }`}
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 transition-colors cursor-pointer group"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-3 pr-2">
                    <span className={`w-2 h-2 rounded-full shrink-0 transition-all duration-300 ${
                      isOpen ? 'bg-blue-600 scale-125' : 'bg-slate-300 group-hover:bg-slate-400'
                    }`} />
                    <span className={`text-sm sm:text-base font-bold transition-colors duration-200 leading-snug ${
                      isOpen ? 'text-blue-900 font-extrabold' : 'text-slate-800 group-hover:text-slate-900'
                    }`}>
                      {faq.q[language]}
                    </span>
                  </div>

                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ type: "spring", stiffness: 350, damping: 25 }}
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors ${
                      isOpen ? 'bg-blue-50 text-blue-600' : 'bg-slate-100 text-slate-500 group-hover:bg-slate-200/70'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </motion.div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ 
                        height: "auto", 
                        opacity: 1,
                        transition: {
                          height: { duration: 0.35, ease: [0.04, 0.62, 0.23, 0.98] },
                          opacity: { duration: 0.25, delay: 0.1 }
                        }
                      }}
                      exit={{ 
                        height: 0, 
                        opacity: 0,
                        transition: {
                          height: { duration: 0.25, ease: [0.04, 0.62, 0.23, 0.98] },
                          opacity: { duration: 0.15 }
                        }
                      }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-blue-50 bg-gradient-to-b from-blue-50/20 to-white">
                        <div className="pt-2 pl-5 sm:pl-5 border-l-2 border-blue-400">
                          {faq.a[language]}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* Additional support link */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="mt-10 text-center text-xs text-slate-500 flex flex-wrap items-center justify-center gap-2 bg-white/70 backdrop-blur-xs py-3 px-4 rounded-full max-w-xl mx-auto border border-slate-200/80 shadow-2xs"
        >
          <MessageCircle className="w-4 h-4 text-emerald-500" />
          <span>{language === 'bn' ? 'আরও কোনো প্রশ্ন আছে? সরাসরি আমাদের WhatsApp টিমে কথা বলুন:' : 'Still have questions? Chat with our Academic Team on'}</span>
          <a
            href="https://wa.me/8801712345678"
            target="_blank"
            rel="noreferrer"
            className="text-emerald-600 font-bold hover:underline inline-flex items-center gap-1"
          >
            WhatsApp (+880 1712-345678)
          </a>
        </motion.div>

      </div>
    </section>
  );
};
