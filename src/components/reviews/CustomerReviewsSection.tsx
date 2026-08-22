import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { CountUpNumber } from '../common/CountUpNumber';
import { 
  Star, 
  CheckCircle2, 
  PlusCircle, 
  Sparkles, 
  ThumbsUp, 
  Filter,
  Palette,
  Code2,
  GraduationCap
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export const CustomerReviewsSection: React.FC = () => {
  const { reviews, openWriteReviewModal, language, t } = useApp();
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [helpfulCounts, setHelpfulCounts] = useState<Record<string, number>>({});

  const categories = [
    { key: 'All', label: { bn: 'সকল রিভিউ', en: 'All Reviews' } },
    { key: 'Design', label: { bn: '🎨 ডিজাইন সার্ভিস', en: '🎨 Design Services' } },
    { key: 'Development', label: { bn: '💻 ডেভেলপমেন্ট সার্ভিস', en: '💻 Development' } },
    { key: 'Student Support', label: { bn: '🎓 স্টুডেন্ট সাপোর্ট', en: '🎓 Student Support' } },
    { key: 'Thesis', label: { bn: 'থিসিস ও FYP', en: 'Thesis & FYP' } }
  ];

  const filteredReviews = selectedCategory === 'All'
    ? reviews
    : reviews.filter(r => {
        const cat = selectedCategory.toLowerCase();
        const srvTitle = r.serviceTitle.toLowerCase();
        if (cat === 'design') {
          return srvTitle.includes('poster') || srvTitle.includes('banner') || srvTitle.includes('design') || srvTitle.includes('ui') || srvTitle.includes('cv') || srvTitle.includes('logo') || srvTitle.includes('presentation');
        }
        if (cat === 'development') {
          return srvTitle.includes('website') || srvTitle.includes('web') || srvTitle.includes('app') || srvTitle.includes('code') || srvTitle.includes('portfolio') || srvTitle.includes('api') || srvTitle.includes('bug');
        }
        if (cat === 'student support') {
          return srvTitle.includes('fyp') || srvTitle.includes('thesis') || srvTitle.includes('support') || srvTitle.includes('paper') || srvTitle.includes('research') || srvTitle.includes('turnitin');
        }
        return srvTitle.includes(cat);
      });

  const handleHelpfulClick = (revId: string) => {
    setHelpfulCounts(prev => ({
      ...prev,
      [revId]: (prev[revId] || 0) + 1
    }));
  };

  return (
    <section id="reviews-section" className="py-16 sm:py-24 bg-slate-50 border-t border-slate-200">
      <div className="max-w-[1920px] w-full mx-auto px-3 sm:px-6 md:px-8 lg:px-10 xl:px-12">
        
        {/* Section Header with Scroll Reveal */}
        <motion.div 
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
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
              whileHover={{ scale: 1.03, y: -1 }}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
              onClick={openWriteReviewModal}
              className="px-5 py-2.5 bg-white hover:bg-slate-100 border border-slate-300 text-slate-800 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-2 shadow-xs hover:shadow-md transition-all cursor-pointer"
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
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="bg-white border border-slate-200 hover:border-slate-300 rounded-3xl p-6 sm:p-8 mb-8 shadow-xs hover:shadow-lg transition-all duration-300 smooth-card-transition"
        >
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 items-center">
            
            {/* Main Score */}
            <div className="text-center md:text-left md:border-r md:border-slate-100 md:pr-6">
              <div className="text-4xl sm:text-5xl font-black text-slate-900 leading-none">
                <CountUpNumber end={4.9} decimals={1} duration={2} isBengali={language === 'bn'} />
                <span className="text-2xl text-slate-400 font-normal">/5.0</span>
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
              <div className="bg-slate-50 rounded-2xl p-4 border border-slate-100 hover:bg-blue-50/40 transition-colors duration-200">
                <div className="text-xl sm:text-2xl font-black text-blue-600">
                  <CountUpNumber end={99.4} decimals={1} suffix="%" duration={2} isBengali={language === 'bn'} />
                </div>
                <div className="text-xs font-semibold text-slate-700 mt-0.5">
                  {language === 'bn' ? 'সময়মতো ডেলিভারি' : 'On-Time Completion'}
                </div>
                <div className="text-[10px] text-slate-400">Fast Turnaround</div>
              </div>

              <div className="bg-slate-50 rounded-2xl p-4 border border-slate-100 hover:bg-emerald-50/40 transition-colors duration-200">
                <div className="text-xl sm:text-2xl font-black text-emerald-600">
                  <CountUpNumber end={30} suffix="+" duration={1.8} isBengali={language === 'bn'} />
                </div>
                <div className="text-xs font-semibold text-slate-700 mt-0.5">
                  {language === 'bn' ? 'বিশ্ববিদ্যালয় কভারেজ' : 'Universities Covered'}
                </div>
                <div className="text-[10px] text-slate-400">BUET, DU, NSU, BRAC & More</div>
              </div>

              <div className="bg-slate-50 rounded-2xl p-4 border border-slate-100 hover:bg-indigo-50/40 transition-colors duration-200">
                <div className="text-xl sm:text-2xl font-black text-indigo-600">
                  <CountUpNumber end={100} suffix="%" duration={1.8} isBengali={language === 'bn'} />
                </div>
                <div className="text-xs font-semibold text-slate-700 mt-0.5">
                  {language === 'bn' ? 'গোপনীয়তা সংরক্ষিত' : 'Confidential Delivery'}
                </div>
                <div className="text-[10px] text-slate-400">Verified Specialists</div>
              </div>
            </div>

          </div>
        </motion.div>

        {/* Category Filter Pills */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center gap-2 overflow-x-auto pb-4 scrollbar-none mb-6"
        >
          <span className="text-xs font-bold text-slate-400 uppercase tracking-wider shrink-0 flex items-center gap-1">
            <Filter className="w-3 h-3" /> {language === 'bn' ? 'ফিল্টার:' : 'Filter:'}
          </span>
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setSelectedCategory(cat.key)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all duration-200 cursor-pointer ${
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
                transition={{ duration: 0.4, delay: (idx % 3) * 0.08, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -6, scale: 1.012, transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] } }}
                className="bg-white rounded-2xl border border-slate-200 hover:border-blue-300/80 p-5 shadow-xs hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300 flex flex-col justify-between group smooth-card-transition"
              >
                <div>
                  {/* Header with rating & verified tag */}
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <div className="flex items-center gap-1 text-amber-400">
                      {[...Array(rev.rating)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                      ))}
                    </div>
                    {rev.verified && (
                      <span className="inline-flex items-center gap-1 text-[10px] font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-full">
                        <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                        {language === 'bn' ? 'যাচাইকৃত শিক্ষার্থী' : 'Verified Order'}
                      </span>
                    )}
                  </div>

                  {/* Comment */}
                  <p className="text-xs text-slate-700 leading-relaxed italic mb-4">
                    "{rev.comment}"
                  </p>
                </div>

                {/* Footer User Info */}
                <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                  <div>
                    <div className="font-bold text-slate-900">{rev.userName}</div>
                    <div className="text-[10px] text-slate-400 truncate max-w-[170px]">{rev.serviceTitle}</div>
                  </div>

                  <button
                    onClick={() => handleHelpfulClick(rev.id)}
                    className="flex items-center gap-1 text-[11px] text-slate-400 hover:text-blue-600 cursor-pointer transition-colors p-1"
                    title="Mark as helpful"
                  >
                    <ThumbsUp className="w-3.5 h-3.5" />
                    <span>{(rev.helpfulCount || 0) + (helpfulCounts[rev.id] || 0)}</span>
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
};
