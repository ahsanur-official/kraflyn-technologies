import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { 
  ArrowRight, 
  CheckCircle2, 
  Sparkles, 
  ShoppingBag,
  Code,
  GraduationCap,
  Palette,
  FileText,
  Clock,
  Globe,
  BarChart3
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export const ProblemTriage: React.FC = () => {
  const { services, bilingualServices, addToCart, openOrderModal, language, t } = useApp();
  const [selectedIssueId, setSelectedIssueId] = useState<string>('issue-1');

  const commonIssues = [
    {
      id: 'issue-1',
      matchedServiceId: 'poster-banner-flyer',
      category: {
        bn: '১. ডিজাইন সার্ভিস',
        en: '1. Design Services'
      },
      title: {
        bn: 'ক্লাব ইভেন্ট, ফেস্টের ব্যানার বা ডিজিটাল পোস্টার প্রয়োজন?',
        en: 'Need Club Event, Fest Banner, or High-Impact Poster?'
      },
      description: {
        bn: 'এইচডি প্রিন্ট-রেডি ভেক্টর ব্যানার, ফেসবুক কভার, ফেস্ট প্রমোশন ও আর্টওয়ার্ক সল্যুশন।',
        en: 'HD print-ready vector banners, social graphics, and custom event branding.'
      },
      icon: Palette,
      color: 'text-fuchsia-600 bg-fuchsia-50'
    },
    {
      id: 'issue-2',
      matchedServiceId: 'portfolio-website',
      category: {
        bn: '২. ডেভেলপমেন্ট সার্ভিস',
        en: '2. Development Services'
      },
      title: {
        bn: 'প্রফেশনাল পোর্টফোলিও বা প্রজেক্ট শোকেস ওয়েবসাইট তৈরি',
        en: 'Build Responsive Developer Portfolio or Showcase Website'
      },
      description: {
        bn: 'মডার্ন রিঅ্যাক্ট/টেইলউইন্ড ডিজাইন, লাইভ ডোমেইন ডিপ্লয়মেন্ট এবং রেসপনসিভ ইউজার ইন্টারফেস।',
        en: 'Modern React/Tailwind frontend, fast loading speeds, and one-click GitHub hosting.'
      },
      icon: Code,
      color: 'text-cyan-600 bg-cyan-50'
    },
    {
      id: 'issue-3',
      matchedServiceId: 'wordpress-development',
      category: {
        bn: '৩. ওয়ার্ডপ্রেস সার্ভিস',
        en: '3. WordPress Services'
      },
      title: {
        bn: 'বিজনেস ওয়েবসাইট, ই-কমার্স স্টোর বা স্পিড অপ্টিমাইজেশন প্রয়োজন?',
        en: 'Need Custom WordPress Website, E-Commerce, or Speed Optimization?'
      },
      description: {
        bn: 'ফুল কাস্টম এলিমেন্টর/উ-কমার্স ডিজাইন, সিকিউরিটি অডিট ও ৯৫+ গুগল পেজস্পিড স্কোর।',
        en: 'Custom Elementor/WooCommerce setups, malware cleanup, and 95+ PageSpeed scores.'
      },
      icon: Globe,
      color: 'text-indigo-600 bg-indigo-50'
    },
    {
      id: 'issue-4',
      matchedServiceId: 'data-analysis',
      category: {
        bn: '৪. ডাটা অ্যানালাইসিস',
        en: '4. Data Analysis'
      },
      title: {
        bn: 'থিসিসের জন্য SPSS, পাইথন বা পাওয়ার বিআই ডাটা অ্যানালাইসিস প্রয়োজন?',
        en: 'Need SPSS, Python, or Power BI Data Analysis for Thesis / Research?'
      },
      description: {
        bn: 'রিগ্রেশন, ANOVA, হাইপোথিসিস টেস্ট, ভিজ্যুয়াল ড্যাশবোর্ড ও মেথডলজি ইন্টারপ্রিটেশন।',
        en: 'Regression, ANOVA, statistical hypothesis testing, and publication charts.'
      },
      icon: BarChart3,
      color: 'text-orange-600 bg-orange-50'
    },
    {
      id: 'issue-5',
      matchedServiceId: 'fyp-guidance',
      category: {
        bn: '৫. স্টুডেন্ট সাপোর্ট',
        en: '5. Student Support'
      },
      title: {
        bn: 'ফাইনাল ইয়ার প্রজেক্ট (FYP) বা থিসিস মেথডলজিতে আটকে আছেন?',
        en: 'Stuck in Final Year Project (FYP) or Thesis Methodology?'
      },
      description: {
        bn: 'প্রজেক্ট আর্কিটেকচার, রিসার্চ গ্যাপ সিলেকশন, কোড মডিউল ও ডিফেন্স প্রেজেন্টেশন গাইডেন্স।',
        en: 'Architecture design, systematic methodology, literature review, and defense prep.'
      },
      icon: GraduationCap,
      color: 'text-emerald-600 bg-emerald-50'
    },
    {
      id: 'issue-6',
      matchedServiceId: 'research-paper-formatting',
      category: {
        bn: '৫. স্টুডেন্ট সাপোর্ট',
        en: '5. Student Support'
      },
      title: {
        bn: 'IEEE / Springer / LaTeX রিসার্চ পেপার ফরম্যাটিং ও ক্যামেরা-রেডি',
        en: 'IEEE / Springer / LaTeX Research Paper Formatting'
      },
      description: {
        bn: 'কনফারেন্স ও জার্নাল স্ট্যান্ডার্ড টু-কলাম ফরম্যাট, বিবটেক্স রেফারেন্স ও ফিগার এলাইনমেন্ট।',
        en: 'Camera-ready template conversion, BibTeX citation syncing, and margin optimization.'
      },
      icon: FileText,
      color: 'text-blue-600 bg-blue-50'
    }
  ];

  const currentIssue = commonIssues.find(i => i.id === selectedIssueId) || commonIssues[0];
  const bilingualData = bilingualServices.find(s => s.id === currentIssue.matchedServiceId) || bilingualServices[0];
  const matchedService = services.find(s => s.id === currentIssue.matchedServiceId) || {
    id: bilingualData.id,
    title: bilingualData.title[language],
    iconName: bilingualData.iconName,
    shortDesc: bilingualData.shortDesc[language],
    fullDesc: bilingualData.fullDesc[language],
    category: bilingualData.category as any,
    startingPrice: bilingualData.startingPrice,
    deliverables: bilingualData.deliverables[language],
    typicalTurnaround: bilingualData.typicalTurnaround
  };

  const localizedTitle = bilingualData.title[language];
  const localizedDesc = bilingualData.shortDesc[language];
  const localizedDeliverables = bilingualData.deliverables[language];

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
                      ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white border-blue-600 shadow-xl shadow-blue-500/25'
                      : 'bg-white text-slate-700 border-slate-200 hover:border-blue-300 hover:bg-blue-50/30 shadow-xs hover:shadow-md'
                  }`}
                >
                  <div className="flex items-start gap-3.5">
                    <div className={`p-2.5 rounded-xl shrink-0 transition-colors duration-300 ${
                      isSelected ? 'bg-white/20 text-white' : issue.color
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
                  <span>{language === 'bn' ? 'প্রস্তাবিত Kraflyn Technologies সল্যুশন' : 'Recommended Kraflyn Technologies Solution'}</span>
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
                    {language === 'bn' ? 'Kraflyn Technologies থেকে যা যা পাবেন:' : 'Included in this service:'}
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
                      ৳{bilingualData.startingPrice.toLocaleString()}
                    </div>
                    <div className="text-[11px] text-slate-500 flex items-center gap-1 mt-0.5">
                      <Clock className="w-3 h-3 text-blue-500" />
                      <span>{bilingualData.typicalTurnaround}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <motion.button
                      whileHover={{ scale: 1.03, y: -1 }}
                      whileTap={{ scale: 0.97 }}
                      transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                      onClick={() => addToCart(matchedService)}
                      className="px-4 py-3 bg-slate-100 hover:bg-blue-50 text-slate-800 hover:text-blue-700 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all duration-200 cursor-pointer shadow-xs border border-slate-200"
                    >
                      <ShoppingBag className="w-4 h-4" />
                      <span>{t.addToCart}</span>
                    </motion.button>

                    <motion.button
                      whileHover={{ scale: 1.03, y: -1 }}
                      whileTap={{ scale: 0.97 }}
                      transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                      onClick={() => openOrderModal(matchedService)}
                      className="px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white rounded-xl text-xs font-bold flex items-center gap-1.5 shadow-md shadow-blue-500/25 transition-all duration-200 cursor-pointer"
                    >
                      <span>{t.orderNow}</span>
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
