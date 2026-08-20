import React, { useState } from 'react';
import { FAQS } from '../../data/mockData';
import { ChevronDown, HelpCircle, MessageCircle } from 'lucide-react';

export const FaqSection: React.FC = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section id="faq-section" className="py-16 md:py-24 bg-slate-50 border-t border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-semibold mb-3">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Edu Quest FAQ</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
            সাধারণ জিজ্ঞাসা ও উত্তর
          </h2>
          <p className="mt-2 text-sm text-slate-600">
            মেন্টর নিয়োগ, ডেলিভারি প্রসেস, গোপনীয়তা ও অর্ডার সংক্রান্ত গুরুত্বপূর্ণ প্রশ্নের উত্তর।
          </p>
        </div>

        {/* Accordion list */}
        <div className="space-y-3">
          {FAQS.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="bg-white rounded-xl border border-slate-200/90 overflow-hidden transition-all shadow-2xs"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 hover:bg-slate-50 transition-colors"
                >
                  <span className="text-sm font-bold text-slate-900">{faq.q}</span>
                  <ChevronDown
                    className={`w-4 h-4 text-slate-500 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-indigo-600' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-4 sm:px-5 pb-5 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3 bg-slate-50/50">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Additional support link */}
        <div className="mt-8 text-center text-xs text-slate-500 flex items-center justify-center gap-2">
          <MessageCircle className="w-4 h-4 text-emerald-500" />
          <span>Still have questions? Chat directly with our Academic Team on</span>
          <a
            href="https://wa.me/8801712345678"
            target="_blank"
            rel="noreferrer"
            className="text-emerald-600 font-bold hover:underline"
          >
            WhatsApp (+880 1712-345678)
          </a>
        </div>

      </div>
    </section>
  );
};
