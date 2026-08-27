import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { UNIVERSITIES, DEPARTMENTS } from '../../data/mockData';
import { 
  X, 
  Star, 
  Send
} from 'lucide-react';

export const WriteReviewModal: React.FC = () => {
  const { 
    writeReviewModalOpen, 
    closeWriteReviewModal, 
    addCustomerReview, 
    bilingualServices,
    userProfile,
    language,
    t 
  } = useApp();

  const [clientName, setClientName] = useState(userProfile.name || '');
  const [companyOrOrg, setCompanyOrOrg] = useState(userProfile.companyOrOrg || userProfile.university || '');
  const [serviceTitle, setServiceTitle] = useState(bilingualServices[0]?.title[language] || 'Custom Development');
  const [rating, setRating] = useState(5);
  const [hoverRating, setHoverRating] = useState(0);
  const [impactOutcome, setImpactOutcome] = useState(language === 'bn' ? 'সময়মতো নিখুঁত ডেলিভারি' : 'Delivered on Schedule & High Quality');
  const [comment, setComment] = useState('');
  const [errors, setErrors] = useState<Record<string, string>>({});

  React.useEffect(() => {
    if (writeReviewModalOpen && userProfile.name && !clientName) {
      setClientName(userProfile.name);
      if (userProfile.companyOrOrg || userProfile.university) {
        setCompanyOrOrg(userProfile.companyOrOrg || userProfile.university || '');
      }
    }
  }, [writeReviewModalOpen, userProfile]);

  if (!writeReviewModalOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs: Record<string, string> = {};
    if (!clientName.trim()) {
      errs.clientName = language === 'bn' ? 'আপনার নাম লিখুন' : 'Please enter your name';
    }
    if (!comment.trim() || comment.trim().length < 10) {
      errs.comment = language === 'bn' 
        ? 'অনুগ্রহ করে আপনার অভিজ্ঞতা সম্পর্কে অন্তত ১০ অক্ষর লিখুন' 
        : 'Please write at least 10 characters describing your experience';
    }
    setErrors(errs);

    if (Object.keys(errs).length === 0) {
      addCustomerReview({
        clientName,
        studentName: clientName,
        companyOrOrg: companyOrOrg.trim() || 'Valued Client',
        university: companyOrOrg.trim() || 'Client Enterprise',
        serviceTitle,
        rating,
        impactOutcome,
        gradeOutcome: impactOutcome,
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
              <h3 className="text-lg font-bold">{t.writeReviewTitle}</h3>
              <p className="text-xs text-blue-100">
                {t.writeReviewSubtitle}
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
          <div className="text-center py-2.5 bg-slate-50 border border-slate-200 rounded-2xl">
            <span className="text-xs font-bold text-slate-500 block mb-1">
              {t.yourRating}
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
              {rating === 5 ? (language === 'bn' ? '৫/৫ - অসাধারণ সাপোর্ট ও ডেলিভারি!' : '5/5 - Outstanding Quality & Execution!') : `${rating} Star Rating`}
            </span>
          </div>

          {/* Name & Service */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                {t.fullName}
              </label>
              <input
                type="text"
                value={clientName}
                onChange={(e) => setClientName(e.target.value)}
                placeholder={t.fullNamePlaceholder}
                className={`w-full px-3 py-2 border rounded-xl text-xs sm:text-sm ${
                  errors.clientName ? 'border-rose-400 bg-rose-50' : 'border-slate-300'
                }`}
              />
              {errors.clientName && <p className="text-[10px] text-rose-500 mt-0.5">{errors.clientName}</p>}
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                {language === 'bn' ? 'সার্ভিস গ্রহণ করেছেন' : 'Service Received'}
              </label>
              <select
                value={serviceTitle}
                onChange={(e) => setServiceTitle(e.target.value)}
                className="w-full px-3 py-2 border border-slate-300 bg-white rounded-xl text-xs"
              >
                {bilingualServices.map(s => (
                  <option key={s.id} value={s.title[language]}>{s.title[language]}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Company / Brand */}
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              {t.universityName}
            </label>
            <input
              type="text"
              value={companyOrOrg}
              onChange={(e) => setCompanyOrOrg(e.target.value)}
              placeholder="e.g. Acme Tech / Startup Lab / E-Commerce Brand"
              className="w-full px-3 py-2 border border-slate-300 rounded-xl text-xs"
            />
          </div>

          {/* Outcome / Result badge */}
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              {language === 'bn' ? 'প্রজেক্ট ফলাফল / সাফল্য' : 'Project Outcome / Business Impact'}
            </label>
            <input
              type="text"
              value={impactOutcome}
              onChange={(e) => setImpactOutcome(e.target.value)}
              placeholder="e.g. 100% On-Time Delivery, 3x Conversion Growth"
              className="w-full px-3 py-2 border border-slate-300 rounded-xl text-xs"
            />
          </div>

          {/* Review Text */}
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              {t.reviewCommentLabel}
            </label>
            <textarea
              rows={3}
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              placeholder={t.reviewCommentPlaceholder}
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
              className="px-4 py-2 border border-slate-300 rounded-xl text-xs font-semibold text-slate-600 hover:bg-slate-100 cursor-pointer"
            >
              {t.cancelBtn}
            </button>
            <button
              type="submit"
              className="px-5 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs font-bold flex items-center gap-1.5 shadow-xs transition-colors cursor-pointer"
            >
              <Send className="w-3.5 h-3.5" />
              <span>{t.submitReviewBtn}</span>
            </button>
          </div>

        </form>

      </div>
    </div>
  );
};
