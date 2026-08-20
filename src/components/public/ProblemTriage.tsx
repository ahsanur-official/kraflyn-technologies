import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { 
  AlertCircle, 
  ArrowRight, 
  CheckCircle2, 
  HelpCircle, 
  Sparkles, 
  BookOpen, 
  Terminal, 
  GraduationCap, 
  FileText, 
  ShoppingBag,
  Zap
} from 'lucide-react';

export const ProblemTriage: React.FC = () => {
  const { services, addToCart, openOrderModal } = useApp();
  const [selectedIssueId, setSelectedIssueId] = useState<string>('issue-1');

  const commonIssues = [
    {
      id: 'issue-1',
      title: 'ল্যাব অ্যাসাইনমেন্টের কোডে বাগ / সেগমেন্টেশন এরর',
      category: 'Programming & Lab',
      matchedServiceId: 'programming-lab',
      description: 'কোড রান হচ্ছে না, লজিক মিলছে না বা অ্যালগরিদমের টাইম কমপ্লেক্সিটি অপ্টিমাইজেশন প্রয়োজন।',
      benefit: 'লাইন বাই লাইন কোড রিভিউ ও লাইভ ডিবাগ সেশন।'
    },
    {
      id: 'issue-2',
      title: 'মিডটার্ম বা ফাইনালের আগে কনসেপ্ট ক্লিয়ার নেই',
      category: 'Course Support',
      matchedServiceId: 'course-support',
      description: 'ডিএসপি, ইলেকট্রিক্যাল সার্কিট বা স্ট্যাটিস্টিক্সের কঠিন থিওরি ও ম্যাথ প্রশ্ন সলভিং এ সমস্যা।',
      benefit: 'বিগত ৩ বছরের প্রশ্ন সলভ ও ১-অন-১ লাইভ মেন্টর ক্লাস।'
    },
    {
      id: 'issue-3',
      title: 'থিসিসের রিসার্চ গ্যাপ বা ডেটাসেট মেথডলজিতে আটকা',
      category: 'Thesis Mentorship',
      matchedServiceId: 'thesis-mentorship',
      description: 'লিটারেচার রিভিউ গোছানো, রিসার্চ প্রপোজাল তৈরি বা এআই/এমএল মডেল ইমপ্লিমেন্টেশন গাইডেন্স।',
      benefit: 'বুয়েট/পাবলিক ভার্সিটির রিসার্চারদের দিয়ে সরাসরি সুপারভিশন।'
    },
    {
      id: 'issue-4',
      title: 'ফাইনাল ডিফেন্স ও ভাইভার প্রশ্নে নার্ভাসনেস',
      category: 'Presentation & Viva',
      matchedServiceId: 'presentation-viva',
      description: 'স্লাইড ডেক তৈরি, প্রজেক্ট প্রেজেন্টেশন ও এক্সটার্নাল ফ্যাকাল্টির ট্রিকি প্রশ্ন হ্যান্ডলিং প্রস্তুতি।',
      benefit: 'রিয়েল-টাইম মক ভাইভা ও ফিডব্যাক সেশন।'
    }
  ];

  const currentIssue = commonIssues.find(i => i.id === selectedIssueId) || commonIssues[0];
  const matchedService = services.find(s => s.id === currentIssue.matchedServiceId) || services[0];

  return (
    <section className="py-14 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-bold uppercase tracking-wider mb-2">
            <Sparkles className="w-3.5 h-3.5 text-blue-600" />
            <span>Problem Matcher</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
            আপনি বর্তমানে কোন সমস্যায় পড়েছেন?
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-1">
            আপনার একাডেমিক চ্যালেঞ্জটি সিলেক্ট করুন — আমরা সঠিক সমাধান ও মেন্টর সাজেস্ট করছি।
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Issue Selector Pills */}
          <div className="lg:col-span-6 space-y-3">
            {commonIssues.map((issue) => (
              <button
                key={issue.id}
                onClick={() => setSelectedIssueId(issue.id)}
                className={`w-full p-4 rounded-2xl text-left transition-all border flex items-start justify-between gap-3 cursor-pointer ${
                  selectedIssueId === issue.id
                    ? 'bg-blue-600 text-white border-blue-600 shadow-md shadow-blue-500/20 scale-[1.01]'
                    : 'bg-white text-slate-700 border-slate-200 hover:border-slate-300 hover:bg-slate-50'
                }`}
              >
                <div>
                  <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md inline-block mb-1 ${
                    selectedIssueId === issue.id ? 'bg-white/20 text-white' : 'bg-slate-100 text-slate-600'
                  }`}>
                    {issue.category}
                  </span>
                  <h4 className="font-bold text-sm leading-snug">
                    {issue.title}
                  </h4>
                  <p className={`text-xs mt-1 line-clamp-1 ${
                    selectedIssueId === issue.id ? 'text-blue-100' : 'text-slate-500'
                  }`}>
                    {issue.description}
                  </p>
                </div>

                <div className={`p-2 rounded-xl shrink-0 mt-1 ${
                  selectedIssueId === issue.id ? 'bg-white/20 text-white' : 'bg-slate-100 text-slate-400'
                }`}>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </button>
            ))}
          </div>

          {/* Solution Preview Card */}
          <div className="lg:col-span-6">
            <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-lg relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-full blur-2xl pointer-events-none" />

              <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-50 text-emerald-700 border border-emerald-200 rounded-full text-xs font-bold mb-4">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>প্রস্তাবিত সমাধান (Recommended Support)</span>
              </span>

              <h3 className="text-xl font-black text-slate-900 leading-snug">
                {matchedService.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                {matchedService.description}
              </p>

              {/* Deliverable benefits */}
              <div className="mt-5 p-4 bg-slate-50 rounded-2xl border border-slate-100 space-y-2">
                <div className="text-xs font-bold text-slate-700">Edu Quest থেকে যা যা পাবেন:</div>
                {matchedService.deliverables.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs text-slate-600">
                    <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              {/* Price & Actions */}
              <div className="mt-6 pt-4 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <span className="text-[10px] text-slate-400 font-semibold block">আনুমানিক ফি</span>
                  <div className="text-2xl font-black text-slate-900">
                    ৳{matchedService.startingPrice}
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => addToCart(matchedService)}
                    className="px-4 py-3 bg-slate-100 hover:bg-slate-200 text-slate-800 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-colors cursor-pointer"
                  >
                    <ShoppingBag className="w-4 h-4" />
                    <span>Add to Cart</span>
                  </button>

                  <button
                    onClick={() => openOrderModal(matchedService)}
                    className="px-5 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs font-bold flex items-center gap-1.5 shadow-md shadow-blue-500/20 transition-all cursor-pointer"
                  >
                    <span>Order Now</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
