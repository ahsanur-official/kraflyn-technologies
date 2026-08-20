import React from 'react';
import { useApp } from '../../context/AppContext';
import { 
  ShoppingBag, 
  MessageSquare, 
  UserCheck, 
  ShieldCheck, 
  ArrowRight, 
  Clock, 
  CheckCircle2,
  Sparkles
} from 'lucide-react';

export const HowItWorks: React.FC = () => {
  const { openOrderModal } = useApp();

  const steps = [
    {
      step: '01',
      title: 'সার্ভিস সিলেক্ট ও বিবরণ দিন',
      subtitle: 'Select & Add to Cart',
      description: 'আপনার কোর্স, ল্যাব, থিসিস বা ভাইভা সাপোর্ট সিলেক্ট করে প্রয়োজনীয় বিষয় বিস্তারিত লিখুন।',
      icon: ShoppingBag,
      color: 'blue'
    },
    {
      step: '02',
      title: 'আমরা WhatsApp এ যোগাযোগ করব',
      subtitle: 'Instant Outreach & Discussion',
      description: 'অর্ডার পাওয়ার পর আমাদের সাপোর্ট টিম ১৫-৩০ মিনিটের মধ্যে আপনার WhatsApp/ফোনে যোগাযোগ করে নিশ্চিত করবে।',
      icon: MessageSquare,
      color: 'emerald'
    },
    {
      step: '03',
      title: 'বিষয়ভিত্তিক মেন্টর গাইডেন্স',
      subtitle: 'Specialized Mentorship',
      description: 'আপনার বিশ্ববিদ্যালয়ের সিলেবাস বোঝেন এমন শীর্ষ মেন্টর সরাসরি আপনার কাজে সমাধান ও গাইডেন্স প্রদান করবেন।',
      icon: UserCheck,
      color: 'indigo'
    },
    {
      step: '04',
      title: 'সময়মতো ডেলিভারি ও ফ্রি রিভিশন',
      subtitle: 'On-Time Delivery & Revision',
      description: 'ডেডলাইনের আগেই ডেলিভারি এবং আপনার ১০০% সন্তুষ্টি পর্যন্ত প্রয়োজনীয় রিভিশন ও বোঝানোর সাপোর্ট পাবেন।',
      icon: ShieldCheck,
      color: 'amber'
    }
  ];

  return (
    <section id="how-it-works-section" className="py-16 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-800 text-xs font-bold uppercase tracking-wider mb-2">
            <Sparkles className="w-3.5 h-3.5 text-blue-600" />
            <span>Edu Quest Process</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
            অর্ডার ও ডেলিভারি যেভাবে কাজ করে
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-1">
            কোনো জটিল অ্যাকাউন্টিং বা পেমেন্ট ঝামেলা নেই — মাত্র ৪টি সহজ ধাপে সম্পূর্ণ সাপোর্ট নিন।
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div 
                key={idx}
                className="bg-slate-50 border border-slate-200 rounded-3xl p-6 relative hover:shadow-md transition-all hover:bg-white hover:border-blue-300 group"
              >
                {/* Step badge */}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-white border border-slate-200 text-blue-600 flex items-center justify-center font-black text-base shadow-xs group-hover:bg-blue-600 group-hover:text-white transition-all">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-2xl font-black text-slate-300 group-hover:text-blue-200 transition-colors">
                    {item.step}
                  </span>
                </div>

                <h3 className="text-base font-bold text-slate-900 leading-snug">
                  {item.title}
                </h3>
                <div className="text-[11px] font-semibold text-blue-600 mt-0.5">
                  {item.subtitle}
                </div>
                <p className="text-xs text-slate-500 mt-2 leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA Banner */}
        <div className="mt-12 bg-gradient-to-r from-blue-700 via-blue-800 to-indigo-900 rounded-3xl p-8 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-1 text-center md:text-left">
            <h3 className="text-xl sm:text-2xl font-bold">
              জরুরি কোনো একাডেমিক সমস্যা আছে?
            </h3>
            <p className="text-xs sm:text-sm text-blue-100 max-w-xl">
              এখনই আপনার রিকোয়ারমেন্ট সাবমিট করুন। আমাদের টিম দ্রুততম সময়ে আপনার সাথে যোগাযোগ করবে।
            </p>
          </div>

          <button
            onClick={() => openOrderModal()}
            className="px-6 py-3.5 bg-white hover:bg-slate-100 text-blue-900 rounded-2xl font-bold text-xs sm:text-sm shadow-md flex items-center gap-2 transition-transform hover:scale-105 cursor-pointer whitespace-nowrap"
          >
            <span>অর্ডার প্লেস করুন (Place Order Now)</span>
            <ArrowRight className="w-4 h-4 text-blue-600" />
          </button>
        </div>

      </div>
    </section>
  );
};
