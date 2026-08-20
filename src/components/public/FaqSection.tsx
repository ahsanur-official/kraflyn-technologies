import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { BILINGUAL_FAQS } from '../../data/translations';
import { ChevronDown, HelpCircle, MessageCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export const FaqSection: React.FC = () => {
  const { language, t } = useApp();
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section id="faq-section" className="py-16 md:py-24 bg-slate-50 border-t border-slate-200">
      <div className="max-w-5xl lg:max-w-6xl mx-auto px-4 sm:px-8 lg:px-12">
        
        {/* Header with Scroll Animation */}
        <motion.div 
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-semibold mb-3">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>{t.faqBadge}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight">
            {t.faqHeading}
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-slate-600">
            {t.faqSubtitle}
          </p>
        </motion.div>

        {/* Accordion list with Animated Expansions */}
        <div className="space-y-3">
          {BILINGUAL_FAQS.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="bg-white rounded-2xl border border-slate-200 overflow-hidden transition-all shadow-xs"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 hover:bg-slate-50 transition-colors cursor-pointer"
                >
                  <span className="text-sm font-bold text-slate-900 leading-snug">
                    {faq.q[language]}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-slate-500 shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 text-blue-600' : ''
                    }`}
                  />
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-4 sm:px-5 pb-5 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3 bg-slate-50/50">
                        {faq.a[language]}
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
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-8 text-center text-xs text-slate-500 flex flex-wrap items-center justify-center gap-2"
        >
          <MessageCircle className="w-4 h-4 text-emerald-500" />
          <span>{language === 'bn' ? 'আরও কোনো প্রশ্ন আছে? সরাসরি আমাদের WhatsApp টিমে কথা বলুন:' : 'Still have questions? Chat with our Academic Team on'}</span>
          <a
            href="https://wa.me/8801712345678"
            target="_blank"
            rel="noreferrer"
            className="text-emerald-600 font-bold hover:underline"
          >
            WhatsApp (+880 1712-345678)
          </a>
        </motion.div>

      </div>
    </section>
  );
};
