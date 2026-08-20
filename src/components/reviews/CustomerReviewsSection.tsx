import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { 
  Star, 
  CheckCircle2, 
  GraduationCap, 
  Quote, 
  PlusCircle, 
  Sparkles, 
  ShieldCheck, 
  ThumbsUp,
  Building,
  Filter
} from 'lucide-react';

export const CustomerReviewsSection: React.FC = () => {
  const { reviews, openWriteReviewModal } = useApp();
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [helpfulCounts, setHelpfulCounts] = useState<Record<string, number>>({});

  const categories = [
    'All',
    'Course Support',
    'Programming & Lab',
    'Thesis Mentorship',
    'Presentation & Viva',
    'Research Support',
    'Lab Report Support',
    'Final Year Project (FYP)'
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
    <section id="reviews-section" className="py-16 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-800 text-xs font-bold uppercase tracking-wider mb-2">
              <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
              <span>Customer Satisfaction & Reviews</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              শিক্ষার্থীদের বাস্তব অভিজ্ঞতা ও মূল্যায়ন
            </h2>
            <p className="text-sm text-slate-600 mt-1 max-w-xl">
              বিভিন্ন পাবলিক ও প্রাইভেট বিশ্ববিদ্যালয়ের শিক্ষার্থীরা কীভাবে Edu Quest এর সহায়তায় একাডেমিক সাফল্য অর্জন করেছে।
            </p>
          </div>

          {/* Action to Write Review */}
          <div className="flex items-center gap-3">
            <button
              onClick={openWriteReviewModal}
              className="px-5 py-2.5 bg-white hover:bg-slate-100 border border-slate-300 text-slate-800 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-2 shadow-xs transition-colors cursor-pointer"
            >
              <PlusCircle className="w-4 h-4 text-blue-600" />
              <span>আপনার অভিজ্ঞতা জানান (Write a Review)</span>
            </button>
          </div>
        </div>

        {/* Aggregate Ratings Scoreboard */}
        <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 mb-8 shadow-xs">
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
                ৮৫০+ ভেরিফাইড শিক্ষার্থী ও অর্ডারের গড় রেটিং
              </p>
            </div>

            {/* Metrics */}
            <div className="grid grid-cols-3 col-span-1 md:col-span-3 gap-4 text-center">
              <div className="bg-slate-50 rounded-2xl p-4 border border-slate-100">
                <div className="text-xl sm:text-2xl font-black text-blue-600">
                  98.4%
                </div>
                <div className="text-xs font-semibold text-slate-700 mt-0.5">
                  সময়মতো ডেলিভারি
                </div>
                <div className="text-[10px] text-slate-400">On-Time Completion</div>
              </div>

              <div className="bg-slate-50 rounded-2xl p-4 border border-slate-100">
                <div className="text-xl sm:text-2xl font-black text-emerald-600">
                  50+
                </div>
                <div className="text-xs font-semibold text-slate-700 mt-0.5">
                  বিশ্ববিদ্যালয় কভারেজ
                </div>
                <div className="text-[10px] text-slate-400">BUET, DU, NSU, BRAC & More</div>
              </div>

              <div className="bg-slate-50 rounded-2xl p-4 border border-slate-100">
                <div className="text-xl sm:text-2xl font-black text-indigo-600">
                  100%
                </div>
                <div className="text-xs font-semibold text-slate-700 mt-0.5">
                  গোপনীয়তা ও সততা
                </div>
                <div className="text-[10px] text-slate-400">Verified Mentorship</div>
              </div>
            </div>

          </div>
        </div>

        {/* Category Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 scrollbar-none mb-6">
          <span className="text-xs font-bold text-slate-400 uppercase tracking-wider shrink-0 flex items-center gap-1">
            <Filter className="w-3 h-3" /> ফিল্টার:
          </span>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-blue-600 text-white shadow-xs'
                  : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-100'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Reviews Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredReviews.map((rev) => (
            <div
              key={rev.id}
              className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs hover:shadow-md transition-all flex flex-col justify-between group"
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
                    <CheckCircle2 className="w-3 h-3" /> Verified Student
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
                  <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-blue-600 to-indigo-600 text-white font-bold flex items-center justify-center text-xs shrink-0">
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
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
