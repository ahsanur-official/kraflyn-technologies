import React from 'react';
import { useApp } from '../../context/AppContext';
import { 
  GraduationCap, 
  ShieldCheck, 
  Target, 
  Award,
  Sparkles
} from 'lucide-react';
import { motion } from 'motion/react';

export const AboutUs: React.FC = () => {
  const { openOrderModal, language, t } = useApp();

  return (
    <div className="py-16 md:py-24 bg-white">
      <div className="max-w-[1920px] w-full mx-auto px-3 sm:px-6 md:px-8 lg:px-10 xl:px-12">
        
        {/* Top Header with Scroll Reveal */}
        <motion.div 
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-bold mb-3">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>{language === 'bn' ? 'আমাদের উদ্দেশ্য ও একাডেমি মিশন' : 'Our Mission & Vision'}</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
            {language === 'bn' 
              ? 'বাংলাদেশের শিক্ষার্থীদের নির্ভরযোগ্য একাডেমিক সল্যুশন প্ল্যাটফর্ম' 
              : 'Bridging the Academic Mentorship Gap in Bangladesh & Beyond'}
          </h1>
          <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed">
            {language === 'bn'
              ? 'Edu Quest প্রতিষ্ঠা করা হয়েছে শিক্ষার্থীদের যেকোনো একাডেমিক সমস্যা দ্রুত, শতভাগ গোপনীয়তা ও বিশ্বস্ততার সাথে সমাধান করার জন্য।'
              : 'Edu Quest was founded on a simple truth: every university student faces academic challenges. We provide accessible, ethical, and high-impact support whenever you need it.'}
          </p>
        </motion.div>

        {/* 3 Value Pillars with Staggered Scroll Entrance */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.45, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ y: -7, scale: 1.015, transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] } }}
            className="p-7 rounded-3xl bg-slate-50 border border-slate-200 hover:border-blue-300/80 shadow-xs hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300 smooth-card-transition"
          >
            <div className="w-12 h-12 rounded-2xl bg-blue-100 text-blue-700 flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110">
              <Target className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">
              {language === 'bn' ? 'কনসেপ্ট ও প্র্যাকটিকাল ডেলিভারি' : 'Concept Over Shortcuts'}
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              {language === 'bn'
                ? 'আমরা শুধু সল্যুশন দিই না, সাথে ব্যাখ্যা ও লাইভ সাপোর্টের মাধ্যমে আপনি যেন নিজে ডিফেন্ড করতে পারেন তা নিশ্চিত করি।'
                : 'We teach you the underlying logic, debug code with you, and coach you to defend your thesis and assignments with confidence.'}
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.45, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ y: -7, scale: 1.015, transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] } }}
            className="p-7 rounded-3xl bg-slate-50 border border-slate-200 hover:border-emerald-300/80 shadow-xs hover:shadow-xl hover:shadow-emerald-500/10 transition-all duration-300 smooth-card-transition"
          >
            <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">
              {language === 'bn' ? '১০০% শিক্ষার্থী গোপনীয়তা' : 'Strict Academic Ethics'}
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              {language === 'bn'
                ? 'আপনার পরিচয়, তথ্য, অ্যাসাইনমেন্ট ও কোড সম্পূর্ণ গোপন ও সুরক্ষিত থাকে। কোনো তথ্য তৃতীয় পক্ষের সাথে শেয়ার করা হয় না।'
                : 'Your assignments, project source codes, and thesis manuscripts remain strictly confidential and protected.'}
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.45, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ y: -7, scale: 1.015, transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] } }}
            className="p-7 rounded-3xl bg-slate-50 border border-slate-200 hover:border-indigo-300/80 shadow-xs hover:shadow-xl hover:shadow-indigo-500/10 transition-all duration-300 smooth-card-transition"
          >
            <div className="w-12 h-12 rounded-2xl bg-indigo-100 text-indigo-700 flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110">
              <Award className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">
              {language === 'bn' ? 'অভিজ্ঞ মেন্টর নেটওয়ার্ক' : 'Elite Subject Mentors'}
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              {language === 'bn'
                ? 'আমাদের মেন্টররা BUET, DU, SUST, NSU, BRACU সহ স্বনামধন্য বিশ্ববিদ্যালয়ের সেরা অ্যালামনাই ও প্রফেশনাল।'
                : 'Our mentors are top university alumni, researchers, and seasoned software engineers who understand faculty expectations.'}
            </p>
          </motion.div>
        </div>

        {/* University Recognition Banner */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.96, y: 25 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="p-8 rounded-3xl bg-gradient-to-r from-slate-950 via-blue-950 to-slate-900 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl"
        >
          <div className="space-y-2">
            <h3 className="text-xl font-bold">
              {language === 'bn' ? '৩০+ বিশ্ববিদ্যালয়ের শিক্ষার্থীদের আস্থা' : 'Serving Students From Across 30+ Universities'}
            </h3>
            <p className="text-xs sm:text-sm text-slate-300">
              BUET, Dhaka University, NSU, BRAC University, Pundra University (PUB), SUST, IUT, RUET, CUET, AIUB, UIU, DIU & more.
            </p>
          </div>
          <motion.button
            whileHover={{ scale: 1.03, y: -1 }}
            whileTap={{ scale: 0.96 }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
            onClick={() => openOrderModal()}
            className="px-6 py-3.5 bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold rounded-xl shadow-lg shadow-blue-600/30 transition-all duration-200 shrink-0 cursor-pointer flex items-center gap-2"
          >
            <Sparkles className="w-4 h-4 text-amber-300" />
            <span>{t.orderNow}</span>
          </motion.button>
        </motion.div>

      </div>
    </div>
  );
};
