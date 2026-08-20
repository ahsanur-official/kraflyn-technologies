import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { UNIVERSITIES, DEPARTMENTS } from '../../data/mockData';
import { 
  X, 
  Star, 
  Send, 
  Sparkles, 
  CheckCircle2, 
  MessageSquare,
  GraduationCap
} from 'lucide-react';

export const WriteReviewModal: React.FC = () => {
  const { 
    writeReviewModalOpen, 
    closeWriteReviewModal, 
    addCustomerReview, 
    services 
  } = useApp();

  const [studentName, setStudentName] = useState('');
  const [university, setUniversity] = useState(UNIVERSITIES[0]);
  const [department, setDepartment] = useState(DEPARTMENTS[0]);
  const [serviceTitle, setServiceTitle] = useState(services[0]?.title || 'Course Support');
  const [rating, setRating] = useState(5);
  const [hoverRating, setHoverRating] = useState(0);
  const [gradeOutcome, setGradeOutcome] = useState('Achieved Grade A+');
  const [comment, setComment] = useState('');
  const [errors, setErrors] = useState<Record<string, string>>({});

  if (!writeReviewModalOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs: Record<string, string> = {};
    if (!studentName.trim()) errs.studentName = 'আপনার নাম লিখুন';
    if (!comment.trim() || comment.trim().length < 10) {
      errs.comment = 'অনুগ্রহ করে আপনার অভিজ্ঞতা সম্পর্কে অন্তত ১০ অক্ষর লিখুন';
    }
    setErrors(errs);

    if (Object.keys(errs).length === 0) {
      addCustomerReview({
        studentName,
        university,
        department,
        serviceTitle,
        rating,
        gradeOutcome,
        comment
      });
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/70 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 animate-in fade-in">
      <div className="bg-white rounded-3xl shadow-2xl border border-slate-200 max-w-lg w-full overflow-hidden animate-in zoom-in-95 duration-200">
        
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white p-5 sm:p-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center text-amber-300">
              <Star className="w-5 h-5 fill-amber-300" />
            </div>
            <div>
              <h3 className="text-lg font-bold">Write a Student Review</h3>
              <p className="text-xs text-blue-100">
                Edu Quest থেকে সাপোর্ট নেওয়ার অভিজ্ঞতা শেয়ার করুন
              </p>
            </div>
          </div>

          <button
            onClick={closeWriteReviewModal}
            className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-5 sm:p-6 space-y-4 text-slate-800 text-xs sm:text-sm">
          
          {/* Rating Stars */}
          <div className="text-center py-2 bg-slate-50 border border-slate-200 rounded-2xl">
            <span className="text-xs font-bold text-slate-500 block mb-1">
              আপনার রেটিং সিলেক্ট করুন:
            </span>
            <div className="flex items-center justify-center gap-1.5">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  type="button"
                  key={star}
                  onClick={() => setRating(star)}
                  onMouseEnter={() => setHoverRating(star)}
                  onMouseLeave={() => setHoverRating(0)}
                  className="p-1 text-slate-300 transition-transform hover:scale-110 cursor-pointer"
                >
                  <Star
                    className={`w-7 h-7 ${
                      (hoverRating || rating) >= star
                        ? 'fill-amber-400 text-amber-400'
                        : 'text-slate-300'
                    }`}
                  />
                </button>
              ))}
            </div>
            <span className="text-xs font-bold text-amber-600 mt-1 block">
              {rating === 5 ? '৫/৫ - অসাধারণ সাপোর্ট ও ডেলিভারি!' : `${rating} Star Rating`}
            </span>
          </div>

          {/* Name & University */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                আপনার নাম <span className="text-rose-500">*</span>
              </label>
              <input
                type="text"
                value={studentName}
                onChange={(e) => setStudentName(e.target.value)}
                placeholder="যেমন: তানভীর আহমেদ"
                className={`w-full px-3 py-2 border rounded-xl text-xs sm:text-sm ${
                  errors.studentName ? 'border-rose-400 bg-rose-50' : 'border-slate-300'
                }`}
              />
              {errors.studentName && <p className="text-[10px] text-rose-500 mt-0.5">{errors.studentName}</p>}
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                সার্ভিস গ্রহণ করেছেন
              </label>
              <select
                value={serviceTitle}
                onChange={(e) => setServiceTitle(e.target.value)}
                className="w-full px-3 py-2 border border-slate-300 bg-white rounded-xl text-xs"
              >
                {services.map(s => (
                  <option key={s.id} value={s.title}>{s.title}</option>
                ))}
              </select>
            </div>
          </div>

          {/* University & Department */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                বিশ্ববিদ্যালয়
              </label>
              <select
                value={university}
                onChange={(e) => setUniversity(e.target.value)}
                className="w-full px-3 py-2 border border-slate-300 bg-white rounded-xl text-xs"
              >
                {UNIVERSITIES.map(u => (
                  <option key={u} value={u}>{u}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                বিভাগ
              </label>
              <select
                value={department}
                onChange={(e) => setDepartment(e.target.value)}
                className="w-full px-3 py-2 border border-slate-300 bg-white rounded-xl text-xs"
              >
                {DEPARTMENTS.map(d => (
                  <option key={d} value={d}>{d}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Outcome / Result badge */}
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              ফলাফল / ফলাফল অর্জন (Grade or Outcome)
            </label>
            <input
              type="text"
              value={gradeOutcome}
              onChange={(e) => setGradeOutcome(e.target.value)}
              placeholder="যেমন: Got Grade A+ / Viva aced / Full Lab Marks"
              className="w-full px-3 py-2 border border-slate-300 rounded-xl text-xs"
            />
          </div>

          {/* Review Text */}
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              আপনার মূল্যবান মন্তব্য ও অভিজ্ঞতা <span className="text-rose-500">*</span>
            </label>
            <textarea
              rows={3}
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              placeholder="মেন্টরের গাইডেন্স, সময়মতো ডেলিভারি ও বোঝানোর পদ্ধতি কেমন লেগেছিল..."
              className={`w-full px-3 py-2 border rounded-xl text-xs sm:text-sm ${
                errors.comment ? 'border-rose-400 bg-rose-50' : 'border-slate-300'
              }`}
            />
            {errors.comment && <p className="text-[10px] text-rose-500 mt-0.5">{errors.comment}</p>}
          </div>

          {/* Buttons */}
          <div className="pt-2 flex items-center justify-end gap-2.5">
            <button
              type="button"
              onClick={closeWriteReviewModal}
              className="px-4 py-2 border border-slate-300 rounded-xl text-xs font-semibold text-slate-600 hover:bg-slate-100"
            >
              বাতিল
            </button>
            <button
              type="submit"
              className="px-5 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs font-bold flex items-center gap-1.5 shadow-xs transition-colors"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Submit Review</span>
            </button>
          </div>

        </form>

      </div>
    </div>
  );
};
