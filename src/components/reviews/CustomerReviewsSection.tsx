import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { 
  Star, 
  CheckCircle2, 
  PlusCircle, 
  Sparkles, 
  ThumbsUp, 
  Filter 
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export const CustomerReviewsSection: React.FC = () => {
  const { reviews, openWriteReviewModal, language, t } = useApp();
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [helpfulCounts, setHelpfulCounts] = useState<Record<string, number>>({});

  const categories = [
    { key: 'All', label: { bn: 'সকল রিভিউ', en: 'All Reviews' } },
    { key: 'Course Support', label: { bn: 'কোর্স সাপোর্ট', en: 'Course Support' } },
    { key: 'Programming', label: { bn: 'প্রোগ্রামিং ও ল্যাব', en: 'Programming & Lab' } },
    { key: 'Thesis', label: { bn: 'থিসিস মেন্টরশিপ', en: 'Thesis Mentorship' } },
    { key: 'Presentation', label: { bn: 'প্রেজেন্টেশন ও ডিফেন্স', en: 'Presentation & Defense' } },
    { key: 'Lab Report', label: { bn: 'ল্যাব রিপোর্ট', en: 'Lab Report' } }
  ];

  const filteredReviews = selectedCategory === 'All'
    ? reviews
    : reviews.filter(r => r.serviceTitle.toLowerCase().includes(selectedCategory.toLowerCase()) || selectedCategory.toLowerCase().includes(r.serviceTitle.toLowerCase()));

  const handleHelpfulClick = (revId: string) => {
    setHelpfulCounts(prev => ({
      ...prev,
      [revId]: (prev[revId] || 0) + 1
    }));
  };

  return (
    <section id="reviews-section" className="py-16 sm:py-24 bg-slate-50 border-t border-slate-200">
      <div className="max-w-[1720px] w-full mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 2xl:px-20">
        
        {/* Section Header with Scroll Reveal */}
        <motion.div 
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6"
        >
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-800 text-xs font-bold uppercase tracking-wider mb-2">
              <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
              <span>{t.reviewsBadge}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight">
              {t.reviewsHeading}
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-2 max-w-xl">
              {t.reviewsSubtitle}
            </p>
          </div>

          {/* Action to Write Review */}
          <div className="flex items-center gap-3">
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={openWriteReviewModal}
              className="px-5 py-2.5 bg-white hover:bg-slate-100 border border-slate-300 text-slate-800 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-2 shadow-xs transition-colors cursor-pointer"
            >
              <PlusCircle className="w-4 h-4 text-blue-600" />
              <span>{t.writeReviewBtn}</span>
            </motion.button>
          </div>
        </motion.div>

        {/* Aggregate Ratings Scoreboard */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 mb-8 shadow-xs"
        >
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 items-center">
            
            {/* Main Score */}
            <div className="text-center md:text-left md:border-r md:border-slate-100 md:pr-6">
              <div className="text-4xl sm:text-5xl font-black text-slate-900 leading-none">
                4.9<span className="text-2xl text-slate-400 font-normal">/5.0</span>
              </div>
              <div className="flex items-center justify-center md:justify-start gap-1 text-amber-400 my-2">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star key={s} className="w-4 h-4 fill-amber-400" />
                ))}
              </div>
              <p className="text-xs text-slate-500">
                {t.basedOnReviews}
              </p>
            </div>

            {/* Metrics */}
            <div className="grid grid-cols-3 col-span-1 md:col-span-3 gap-4 text-center">
              <div className="bg-slate-50 rounded-2xl p-4 border border-slate-100">
                <div className="text-xl sm:text-2xl font-black text-blue-600">
                  99.4%
                </div>
                <div className="text-xs font-semibold text-slate-700 mt-0.5">
                  {language === 'bn' ? 'সময়মতো ডেলিভারি' : 'On-Time Completion'}
                </div>
                <div className="text-[10px] text-slate-400">Strict Schedule</div>
              </div>

              <div className="bg-slate-50 rounded-2xl p-4 border border-slate-100">
                <div className="text-xl sm:text-2xl font-black text-emerald-600">
                  25+
                </div>
                <div className="text-xs font-semibold text-slate-700 mt-0.5">
                  {language === 'bn' ? 'বিশ্ববিদ্যালয় কভারেজ' : 'Universities Covered'}
                </div>
                <div className="text-[10px] text-slate-400">BUET, DU, NSU, BRAC & More</div>
              </div>

              <div className="bg-slate-50 rounded-2xl p-4 border border-slate-100">
                <div className="text-xl sm:text-2xl font-black text-indigo-600">
                  100%
                </div>
                <div className="text-xs font-semibold text-slate-700 mt-0.5">
                  {language === 'bn' ? 'গোপনীয়তা সংরক্ষিত' : 'Confidential Mentorship'}
                </div>
                <div className="text-[10px] text-slate-400">Verified Mentors</div>
              </div>
            </div>

          </div>
        </motion.div>

        {/* Category Filter Pills */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-2 overflow-x-auto pb-4 scrollbar-none mb-6"
        >
          <span className="text-xs font-bold text-slate-400 uppercase tracking-wider shrink-0 flex items-center gap-1">
            <Filter className="w-3 h-3" /> {language === 'bn' ? 'ফিল্টার:' : 'Filter:'}
          </span>
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setSelectedCategory(cat.key)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                selectedCategory === cat.key
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-500/20'
                  : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-100'
              }`}
            >
              {cat.label[language]}
            </button>
          ))}
        </motion.div>

        {/* Reviews Cards Grid with Cascading Stagger */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          <AnimatePresence>
            {filteredReviews.map((rev, idx) => (
              <motion.div
                layout
                key={rev.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: (idx % 3) * 0.08 }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs hover:shadow-lg transition-all flex flex-col justify-between group"
              >
                <div>
                  {/* Header with rating & verified tag */}
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <div className="flex items-center gap-1 text-amber-400">
                      {Array.from({ length: rev.rating }).map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                      ))}
                    </div>

                    <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-emerald-50 border border-emerald-200 text-emerald-700 text-[10px] font-bold rounded-md">
                      <CheckCircle2 className="w-3 h-3" /> {t.verifiedStudent}
                    </span>
                  </div>

                  {/* Service Tag & Outcome Pill */}
                  <div className="flex flex-wrap items-center gap-1.5 mb-3">
                    <span className="px-2 py-0.5 bg-blue-50 text-blue-700 text-[11px] font-bold rounded-md">
                      {rev.serviceTitle}
                    </span>
                    {rev.gradeOutcome && (
                      <span className="px-2 py-0.5 bg-amber-50 text-amber-800 text-[10px] font-semibold rounded-md">
                        🎯 {rev.gradeOutcome}
                      </span>
                    )}
                  </div>

                  {/* Review Text */}
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic relative">
                    "{rev.comment}"
                  </p>
                </div>

                {/* Student Footer */}
                <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-blue-600 to-indigo-600 text-white font-bold flex items-center justify-center text-xs shrink-0 shadow-xs">
                      {rev.studentName.slice(0, 2).toUpperCase()}
                    </div>
                    <div>
                      <h5 className="font-bold text-slate-900 text-xs leading-none">
                        {rev.studentName}
                      </h5>
                      <div className="text-[10px] text-slate-500 mt-0.5 truncate max-w-[150px]">
                        {rev.university}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 text-slate-400">
                    <span className="text-[10px]">{rev.date}</span>
                    <button
                      onClick={() => handleHelpfulClick(rev.id)}
                      className="p-1 hover:text-blue-600 flex items-center gap-1 text-[10px] cursor-pointer"
                      title="Mark as helpful"
                    >
                      <ThumbsUp className="w-3 h-3" />
                      <span>{helpfulCounts[rev.id] || 4}</span>
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
};
