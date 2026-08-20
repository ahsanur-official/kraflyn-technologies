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
    <div className="space-y-6">
      
      {/* Header with quick stats & add review */}
      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white p-5 rounded-3xl border border-slate-200 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-4"
      >
        <div>
          <h3 className="font-bold text-base text-slate-900">
            {language === 'bn' ? 'শিক্ষার্থী ফিডব্যাক ও রিভিউ মডারেশন' : 'Student Feedback & Review Moderation'}
          </h3>
          <p className="text-xs text-slate-500 mt-0.5">
            {language === 'bn' ? 'ওয়েবসাইটে প্রদর্শিত সকল যাচাইকৃত রিভিউ পরিচালনা করুন' : 'Manage student reviews, ratings, and course testimonials'}
          </p>
        </div>

        <button
          onClick={openWriteReviewModal}
          className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold text-xs flex items-center gap-1.5 shadow-md shadow-blue-500/20 cursor-pointer"
        >
          <Plus className="w-4 h-4" />
          <span>{language === 'bn' ? 'নতুন রিভিউ যুক্ত করুন' : 'Add Testimonial'}</span>
        </button>
      </motion.div>

      {/* Reviews Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {reviews.map((r, idx) => (
          <motion.div
            key={r.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.05 }}
            whileHover={{ y: -3, transition: { duration: 0.2 } }}
            className="bg-white p-5 rounded-3xl border border-slate-200 shadow-xs flex flex-col justify-between"
          >
            <div>
              <div className="flex items-start justify-between gap-2 mb-2">
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">{r.studentName}</h4>
                  <div className="text-[11px] text-slate-500">{r.university}</div>
                  <div className="text-[11px] text-blue-600 font-semibold">{r.department}</div>
                </div>

                <div className="flex items-center gap-0.5 text-amber-500 bg-amber-50 px-2 py-0.5 rounded-lg text-xs font-bold">
                  <Star className="w-3.5 h-3.5 fill-amber-400" />
                  <span>{r.rating}.0</span>
                </div>
              </div>

              {r.courseSolved && (
                <div className="my-2 px-2.5 py-1 bg-slate-50 border border-slate-100 rounded-xl text-[11px] font-semibold text-slate-700 truncate">
                  🎯 {r.courseSolved}
                </div>
              )}

              <p className="text-xs text-slate-600 leading-relaxed italic my-2">
                "{r.comment}"
              </p>
            </div>

            <div className="pt-3 mt-2 border-t border-slate-100 flex items-center justify-between text-xs">
              <span className="text-[11px] text-slate-400">
                {r.date}
              </span>

              <button
                onClick={() => handleDeleteReview(r.id)}
                className="p-1.5 text-rose-500 hover:bg-rose-50 rounded-lg transition-colors cursor-pointer"
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
