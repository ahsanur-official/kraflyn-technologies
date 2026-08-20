import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { 
  ArrowRight, 
  CheckCircle2, 
  Sparkles, 
  ShoppingBag,
  Code,
  BookOpen,
  GraduationCap,
  Mic,
  FileText
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export const ProblemTriage: React.FC = () => {
  const { services, bilingualServices, addToCart, openOrderModal, language, t } = useApp();
  const [selectedIssueId, setSelectedIssueId] = useState<string>('issue-1');

  const commonIssues = [
    {
      id: 'issue-1',
      matchedServiceId: 'programming-lab',
      category: {
        bn: 'প্রোগ্রামিং ও ল্যাব কোড',
        en: 'Programming & Lab'
      },
      title: {
        bn: 'ল্যাব অ্যাসাইনমেন্টের কোডে বাগ / সেগমেন্টেশন এরর',
        en: 'Lab Assignment Code Bug / Segmentation Fault'
      },
      description: {
        bn: 'কোড রান হচ্ছে না, লজিক মিলছে না বা অ্যালগরিদমের টাইম কমপ্লেক্সিটি অপ্টিমাইজেশন প্রয়োজন।',
        en: 'Code is failing test cases, runtime errors, or recursion/DP logic needs optimization.'
      },
      icon: Code
    },
    {
      id: 'issue-2',
      matchedServiceId: 'course-support',
      category: {
        bn: 'কোর্স সাপোর্ট ও এক্সাম',
        en: 'Course Support & Exam'
      },
      title: {
        bn: 'মিডটার্ম বা ফাইনালের আগে কনসেপ্ট ক্লিয়ার নেই',
        en: 'Unclear Concepts Before Midterms or Finals'
      },
      description: {
        bn: 'ডিএসপি, ইলেকট্রিক্যাল সার্কিট বা স্ট্যাটিস্টিক্সের কঠিন থিওরি ও ম্যাথ প্রশ্ন সলভিং এ সমস্যা।',
        en: 'Stuck with DSP, circuits, discrete math formulas, or previous exam solutions.'
      },
      icon: BookOpen
    },
    {
      id: 'issue-3',
      matchedServiceId: 'thesis-mentorship',
      category: {
        bn: 'থিসিস ও রিসার্চ',
        en: 'Thesis & Research'
      },
      title: {
        bn: 'থিসিসের রিসার্চ গ্যাপ বা মেথডলজিতে আটকে আছেন?',
        en: 'Stuck in Thesis Research Gap or Methodology?'
      },
      description: {
        bn: 'লিটারেচার রিভিউ গোছানো, রিসার্চ প্রপোজাল তৈরি বা এআই/এমএল মডেল ইমপ্লিমেন্টেশন গাইডেন্স।',
        en: 'Structuring systematic literature review, thesis book chapters, and research modeling.'
      },
      icon: GraduationCap
    },
    {
      id: 'issue-4',
      matchedServiceId: 'presentation-viva',
      category: {
        bn: 'প্রেজেন্টেশন ও ডিফেন্স',
        en: 'Presentation & Defense'
      },
      title: {
        bn: 'ফাইনাল ডিফেন্স ও ভাইভার প্রশ্নে নার্ভাসনেস',
        en: 'Anxiety Over Strict Faculty Defense & Viva Questions'
      },
      description: {
        bn: 'স্লাইড ডেক তৈরি, প্রজেক্ট প্রেজেন্টেশন ও এক্সটার্নাল ফ্যাকাল্টির ট্রিকি প্রশ্ন হ্যান্ডলিং প্রস্তুতি।',
        en: 'Slide balance, elevator pitch rehearsal, and mock viva against strict counter-questions.'
      },
      icon: Mic
    }
  ];

  const currentIssue = commonIssues.find(i => i.id === selectedIssueId) || commonIssues[0];
  const matchedService = services.find(s => s.id === currentIssue.matchedServiceId) || services[0];
  const bilingualData = bilingualServices.find(s => s.id === currentIssue.matchedServiceId);

  const localizedTitle = bilingualData ? bilingualData.title[language] : matchedService.title;
  const localizedDesc = bilingualData ? bilingualData.shortDesc[language] : matchedService.shortDesc;
  const localizedDeliverables = bilingualData ? bilingualData.deliverables[language] : matchedService.deliverables;

  return (
    <section className="py-16 sm:py-24 bg-slate-50 border-b border-slate-200 relative overflow-hidden">
      <div className="max-w-[1920px] w-full mx-auto px-3 sm:px-6 md:px-8 lg:px-10 xl:px-12">
        
        {/* Section Header with Scroll Reveal */}
        <motion.div 
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-bold uppercase tracking-wider mb-2">
            <Sparkles className="w-3.5 h-3.5 text-blue-600 shrink-0" />
            <span>{t.triageBadge}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight">
            {t.triageHeading}
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-2">
            {t.triageSubtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Issue Selector Buttons */}
          <div className="lg:col-span-6 space-y-3">
            {commonIssues.map((issue, idx) => {
              const Icon = issue.icon;
              const isSelected = selectedIssueId === issue.id;

              return (
                <motion.button
                  key={issue.id}
                  initial={{ opacity: 0, x: -25 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
                  whileHover={{ scale: 1.015, x: 5 }}
                  whileTap={{ scale: 0.99 }}
                  onClick={() => setSelectedIssueId(issue.id)}
                  className={`w-full p-4.5 rounded-2xl text-left border flex items-start justify-between gap-3 cursor-pointer smooth-card-transition ${
                    isSelected
                      ? 'bg-blue-600 text-white border-blue-600 shadow-xl shadow-blue-500/25'
                      : 'bg-white text-slate-700 border-slate-200 hover:border-blue-300 hover:bg-blue-50/30 shadow-xs hover:shadow-md'
                  }`}
                >
                  <div className="flex items-start gap-3.5">
                    <div className={`p-2.5 rounded-xl shrink-0 transition-colors duration-300 ${
                      isSelected ? 'bg-white/20 text-white' : 'bg-blue-50 text-blue-600'
                    }`}>
                      <Icon className="w-5 h-5" />
                    </div>

                    <div>
                      <span className={`text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded-md inline-block mb-1.5 transition-colors duration-300 ${
                        isSelected ? 'bg-white/20 text-white' : 'bg-slate-100 text-slate-600'
                      }`}>
                        {issue.category[language]}
                      </span>
                      <h4 className="font-bold text-sm leading-snug">
                        {issue.title[language]}
                      </h4>
                      <p className={`text-xs mt-1 line-clamp-1 transition-colors duration-300 ${
                        isSelected ? 'text-blue-100' : 'text-slate-500'
                      }`}>
                        {issue.description[language]}
                      </p>
                    </div>
                  </div>

                  <div className={`p-2 rounded-xl shrink-0 mt-1 transition-all duration-300 ${
                    isSelected ? 'bg-white/20 text-white translate-x-1' : 'bg-slate-100 text-slate-400'
                  }`}>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </motion.button>
              );
            })}
          </div>

          {/* Solution Preview Card with Motion Transition */}
          <motion.div 
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6"
          >
            <AnimatePresence mode="wait">
              <motion.div 
                key={selectedIssueId}
                initial={{ opacity: 0, y: 15, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -15, scale: 0.98 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                className="bg-white rounded-3xl border border-slate-200 hover:border-blue-200 p-6 sm:p-8 shadow-xl relative overflow-hidden smooth-card-transition"
              >
                <div className="absolute top-0 right-0 w-36 h-36 bg-blue-500/10 rounded-full blur-2xl pointer-events-none" />

                <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-50 text-emerald-700 border border-emerald-200 rounded-full text-xs font-bold mb-4">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  <span>{language === 'bn' ? 'প্রস্তাবিত সাপোর্ট সল্যুশন' : 'Recommended Solution'}</span>
                </span>

                <h3 className="text-xl sm:text-2xl font-black text-slate-900 leading-snug">
                  {localizedTitle}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                  {localizedDesc}
                </p>

                {/* Deliverable benefits */}
                <div className="mt-5 p-4 bg-slate-50 rounded-2xl border border-slate-100 space-y-2">
                  <div className="text-xs font-bold text-slate-700">
                    {language === 'bn' ? 'Edu Quest থেকে যা যা পাবেন:' : 'Included in this service:'}
                  </div>
                  {localizedDeliverables.slice(0, 3).map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-slate-600">
                      <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                {/* Price & Actions */}
                <div className="mt-6 pt-4 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <span className="text-[10px] text-slate-400 font-semibold block">{t.startingPrice}</span>
                    <div className="text-2xl sm:text-3xl font-black text-slate-900">
                      ৳{matchedService.startingPrice}
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <motion.button
                      whileHover={{ scale: 1.03, y: -1 }}
                      whileTap={{ scale: 0.97 }}
                      transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                      onClick={() => addToCart(matchedService)}
                      className="px-4 py-3 bg-slate-100 hover:bg-slate-200 text-slate-800 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all duration-200 cursor-pointer shadow-xs"
                    >
                      <ShoppingBag className="w-4 h-4" />
                      <span>{t.addToCart}</span>
                    </motion.button>

                    <motion.button
                      whileHover={{ scale: 1.03, y: -1 }}
                      whileTap={{ scale: 0.97 }}
                      transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                      onClick={() => openOrderModal(matchedService)}
                      className="px-5 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs font-bold flex items-center gap-1.5 shadow-md shadow-blue-500/20 hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-200 cursor-pointer"
                    >
                      <span>{t.directOrder}</span>
                      <ArrowRight className="w-4 h-4" />
                    </motion.button>
                  </div>
                </div>

              </motion.div>
            </AnimatePresence>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
