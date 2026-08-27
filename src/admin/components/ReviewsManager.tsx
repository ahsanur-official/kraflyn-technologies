import React from 'react';
import { useApp } from '../../context/AppContext';
import { Star, Trash2, CheckCircle2, MessageSquare, Plus, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';

export const ReviewsManager: React.FC = () => {
  const { reviews, deleteReview, openWriteReviewModal, showToast, language } = useApp();

  const handleDeleteReview = (id: string) => {
    if (confirm(language === 'bn' ? 'আপনি কি এই রিভিউ মুছে ফেলতে চান?' : 'Are you sure you want to delete this review?')) {
      deleteReview(id);
      showToast(language === 'bn' ? 'রিভিউ মুছে ফেলা হয়েছে' : 'Review deleted');
    }
  };

  return (
    <div className="space-y-4 sm:space-y-6">
      
      {/* Header with quick stats & add review */}
      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white p-3.5 sm:p-5 rounded-2xl sm:rounded-3xl border border-slate-200 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-3"
      >
        <div>
          <h3 className="font-bold text-sm sm:text-base text-slate-900">
            {language === 'bn' ? 'ক্লায়েন্ট রিভিউ ও ফিডব্যাক মডারেশন' : 'Client Reviews & Feedback Moderation'}
          </h3>
          <p className="text-[11px] text-slate-500 mt-0.5">
            {language === 'bn' ? 'ওয়েবসাইটে প্রদর্শিত সকল ক্লায়েন্ট ও পার্টনার রিভিউ পরিচালনা করুন' : 'Manage verified client reviews, ratings, and project testimonials'}
          </p>
        </div>

        <button
          onClick={openWriteReviewModal}
          className="w-full sm:w-auto px-4 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold text-xs flex items-center justify-center gap-1.5 shadow-md shadow-blue-500/20 cursor-pointer min-h-[40px]"
        >
          <Plus className="w-4 h-4" />
          <span>{language === 'bn' ? 'নতুন রিভিউ যুক্ত করুন' : 'Add Testimonial'}</span>
        </button>
      </motion.div>

      {/* Reviews Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-4">
        {reviews.map((r, idx) => (
          <motion.div
            key={r.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.04 }}
            whileHover={{ y: -2, transition: { duration: 0.2 } }}
            className="bg-white p-4 sm:p-5 rounded-2xl sm:rounded-3xl border border-slate-200 shadow-xs flex flex-col justify-between space-y-3"
          >
            <div>
              <div className="flex items-start justify-between gap-2 mb-1.5">
                <div className="min-w-0">
                  <h4 className="font-bold text-slate-900 text-sm truncate">{r.clientName || r.studentName}</h4>
                  <div className="text-[11px] text-slate-500 truncate">{r.companyOrOrg || r.university}</div>
                  <div className="text-[11px] text-blue-600 font-semibold truncate">{r.serviceTitle}</div>
                </div>

                <div className="flex items-center gap-0.5 text-amber-500 bg-amber-50 px-2 py-0.5 rounded-lg text-xs font-bold shrink-0">
                  <Star className="w-3.5 h-3.5 fill-amber-400" />
                  <span>{r.rating}.0</span>
                </div>
              </div>

              {(r.courseSolved || r.impactOutcome || r.gradeOutcome) && (
                <div className="my-2 px-2.5 py-1 bg-slate-50 border border-slate-100 rounded-xl text-[11px] font-semibold text-slate-700 flex items-center justify-between">
                  <span className="truncate">🎯 {r.courseSolved || r.serviceTitle}</span>
                  {(r.impactOutcome || r.gradeOutcome) && (
                    <span className="text-emerald-600 font-bold ml-1 shrink-0 text-[10px] bg-emerald-50 px-1.5 py-0.5 rounded">
                      {r.impactOutcome || r.gradeOutcome}
                    </span>
                  )}
                </div>
              )}

              <p className="text-xs text-slate-600 leading-relaxed italic my-2">
                "{r.comment}"
              </p>
            </div>

            <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
              <span className="text-[11px] text-slate-400">
                {r.date}
              </span>

              <button
                onClick={() => handleDeleteReview(r.id)}
                className="p-1.5 text-rose-500 hover:bg-rose-50 rounded-lg transition-colors cursor-pointer min-h-[36px] min-w-[36px] flex items-center justify-center"
                title="Delete review"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        ))}
      </div>

    </div>
  );
};
