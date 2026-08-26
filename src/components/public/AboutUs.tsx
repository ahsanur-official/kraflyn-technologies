import React from 'react';
import { useApp } from '../../context/AppContext';
import { KraflynLogo } from '../common/KraflynLogo';
import { KRAFLYN_PILLARS } from '../../data/mockData';
import { TeamSection } from './TeamSection';
import { 
  GraduationCap, 
  ShieldCheck, 
  Target, 
  Award,
  Sparkles,
  Palette,
  Code2,
  Globe,
  BarChart3,
  CheckCircle2,
  Users,
  Layers,
  Heart,
  Eye,
  Diamond,
  ArrowRight
} from 'lucide-react';
import { motion } from 'motion/react';

export const AboutUs: React.FC = () => {
  const { openOrderModal, language, t } = useApp();

  const getPillarIcon = (iconName: string) => {
    switch (iconName) {
      case 'Target': return <Target className="w-6 h-6" />;
      case 'Eye': return <Eye className="w-6 h-6" />;
      case 'Diamond': return <Diamond className="w-6 h-6" />;
      case 'Heart':
      default:
        return <Heart className="w-6 h-6" />;
    }
  };

  return (
    <div className="py-16 md:py-24 bg-white border-b border-slate-200">
      <div className="max-w-[1920px] w-full mx-auto px-3 sm:px-6 md:px-8 lg:px-10 xl:px-12">
        
        {/* Top Header with Scroll Reveal */}
        <motion.div 
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-3xl mx-auto mb-16 space-y-4"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10 border border-blue-200 text-blue-900 text-xs font-bold shadow-xs">
            <KraflynLogo size="xs" variant="emblem" />
            <span>{language === 'bn' ? 'আমাদের পরিচয় ও দর্শন' : 'About Kraflyn Technologies — Mission & Vision'}</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            {language === 'bn' 
              ? 'ডিজিটাল উদ্ভাবন, আধুনিক ইঞ্জিনিয়ারিং ও প্রিমিয়াম ডিজাইন স্টুডিও' 
              : 'Empowering Businesses & Creators with Modern Design, Web Tech & Data Intelligence'}
          </h1>
          
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl mx-auto">
            {language === 'bn'
              ? 'Kraflyn Technologies আধুনিক UI/UX ক্রিয়েটিভ ডিজাইন, স্কেলেবল ওয়েব ও সফটওয়্যার ডেভেলপমেন্ট, হাই-পারফরম্যান্স ওয়ার্ডপ্রেস এবং বিজনেস ডাটা অ্যানালাইসিস সেবা প্রদান করে।'
              : 'Kraflyn Technologies is a premier full-service digital studio delivering high-converting UI/UX design, custom full-stack web applications, dedicated WordPress architectures, and actionable data analytics.'}
          </p>
        </motion.div>

        {/* 4 Brand Pillars (Mission, Vision, Values, Why Kraflyn Technologies) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {KRAFLYN_PILLARS.map((pillar, idx) => (
            <motion.div
              key={pillar.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.45, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -6, scale: 1.015 }}
              className="p-6 rounded-3xl bg-slate-50 border border-slate-200/90 hover:border-blue-300 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-12 h-12 rounded-2xl bg-gradient-to-r ${pillar.color} text-white flex items-center justify-center shadow-md shadow-blue-500/20 group-hover:scale-110 transition-transform`}>
                    {getPillarIcon(pillar.iconName)}
                  </div>
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-white text-slate-700 border border-slate-200 shadow-xs">
                    {pillar.badge}
                  </span>
                </div>

                <h3 className="text-lg font-black text-slate-900 mb-1">
                  {pillar.title}
                </h3>
                <span className="text-[11px] font-bold text-blue-600 block mb-2">
                  {pillar.subtitle}
                </span>
                
                <p className="text-xs text-slate-600 leading-relaxed">
                  {pillar.content}
                </p>

                {pillar.points && (
                  <div className="mt-4 pt-3 border-t border-slate-200/80 space-y-1.5">
                    {pillar.points.map((pt, pIdx) => (
                      <div key={pIdx} className="flex items-center gap-1.5 text-xs text-slate-700 font-medium">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                        <span>{pt}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* 4 Main Offering Wings Overview */}
        <div className="mb-16">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
              {language === 'bn' ? 'Kraflyn Technologies-এর ৪টি প্রধান সার্ভিস উইং' : 'The 4 Core Pillars of Kraflyn Technologies'}
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              {language === 'bn' ? 'ডিজাইন, ডেভেলপমেন্ট, ওয়ার্ডপ্রেস ও ডাটা অ্যানালাইসিসে পূর্ণাঙ্গ সমাধান' : 'Tailored digital solutions across Design, Development, WordPress & Data Analysis'}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            
            {/* 1. Design Services */}
            <div className="p-6 rounded-3xl bg-gradient-to-b from-fuchsia-50/60 to-white border border-fuchsia-200/80 hover:shadow-lg transition-all flex flex-col justify-between">
              <div>
                <div className="w-11 h-11 rounded-2xl bg-fuchsia-600 text-white flex items-center justify-center mb-3.5 shadow-md shadow-fuchsia-500/20">
                  <Palette className="w-5 h-5" />
                </div>
                <h3 className="text-base font-black text-slate-900 mb-1">
                  {language === 'bn' ? '১. ডিজাইন ও UI/UX' : '1. Design & UI/UX'}
                </h3>
                <span className="text-[11px] font-bold text-fuchsia-600 block mb-2">
                  {language === 'bn' ? 'ফিগুমা, ব্র্যান্ডিং ও প্রোটোটাইপ' : 'Figma, Branding & Prototyping'}
                </span>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {language === 'bn'
                    ? 'ফিগুমা UI/UX প্রোটোটাইপ, ডিজাইন সিস্টেম, কনভার্সন-ফোকাসড ল্যান্ডিং পেজ ও কর্পোরেট ব্র্যান্ড আইডেন্টিটি।'
                    : 'Interactive Figma UI/UX, scalable design systems, high-converting landing pages, and complete brand identity.'}
                </p>
              </div>
            </div>

            {/* 2. Development Services */}
            <div className="p-6 rounded-3xl bg-gradient-to-b from-cyan-50/60 to-white border border-cyan-200/80 hover:shadow-lg transition-all flex flex-col justify-between">
              <div>
                <div className="w-11 h-11 rounded-2xl bg-cyan-600 text-white flex items-center justify-center mb-3.5 shadow-md shadow-cyan-500/20">
                  <Code2 className="w-5 h-5" />
                </div>
                <h3 className="text-base font-black text-slate-900 mb-1">
                  {language === 'bn' ? '২. ওয়েব ও সফটওয়্যার দেব' : '2. Web & Software Dev'}
                </h3>
                <span className="text-[11px] font-bold text-cyan-600 block mb-2">
                  {language === 'bn' ? 'Next.js, React, Node.js ও APIs' : 'Next.js, React, Node.js & APIs'}
                </span>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {language === 'bn'
                    ? 'কাস্টম ফুল-স্ট্যাক ওয়েব অ্যাপ্লিকেশন, REST/GraphQL এপিআই, মাইক্রোসার্ভিসেস, ডেটাবেস ডিজাইন ও ক্লাউড ডিপ্লয়মেন্ট।'
                    : 'Custom full-stack web applications, REST/GraphQL APIs, microservices, database architecture, and cloud deployment.'}
                </p>
              </div>
            </div>

            {/* 3. WordPress Services */}
            <div className="p-6 rounded-3xl bg-gradient-to-b from-indigo-50/60 to-white border border-indigo-200/80 hover:shadow-lg transition-all flex flex-col justify-between">
              <div>
                <div className="w-11 h-11 rounded-2xl bg-indigo-600 text-white flex items-center justify-center mb-3.5 shadow-md shadow-indigo-500/20">
                  <Globe className="w-5 h-5" />
                </div>
                <h3 className="text-base font-black text-slate-900 mb-1">
                  {language === 'bn' ? '৩. ওয়ার্ডপ্রেস সলিউশনস' : '3. WordPress Solutions'}
                </h3>
                <span className="text-[11px] font-bold text-indigo-600 block mb-2">
                  {language === 'bn' ? 'কাস্টম থিম ও উ-কমার্স' : 'Custom Themes & WooCommerce'}
                </span>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {language === 'bn'
                    ? 'কাস্টম পিএইচপি থিম কোডিং, উ-কমার্স ই-শপ + বিকাশ/নগদ গেটওয়ে, স্পিড অপ্টিমাইজেশন (90+ PageSpeed) ও সিকিউরিটি।'
                    : 'Custom PHP theme development, turnkey WooCommerce stores with payment gateways, sub-second speed, and security.'}
                </p>
              </div>
            </div>

            {/* 4. Data Analysis */}
            <div className="p-6 rounded-3xl bg-gradient-to-b from-orange-50/60 to-white border border-orange-200/80 hover:shadow-lg transition-all flex flex-col justify-between">
              <div>
                <div className="w-11 h-11 rounded-2xl bg-orange-600 text-white flex items-center justify-center mb-3.5 shadow-md shadow-orange-500/20">
                  <BarChart3 className="w-5 h-5" />
                </div>
                <h3 className="text-base font-black text-slate-900 mb-1">
                  {language === 'bn' ? '৪. ডাটা অ্যানালাইসিস ও BI' : '4. Data Analysis & BI'}
                </h3>
                <span className="text-[11px] font-bold text-orange-600 block mb-2">
                  {language === 'bn' ? 'Power BI, পাইথন ও ML' : 'Power BI, Python & ML'}
                </span>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {language === 'bn'
                    ? 'ইন্টারঅ্যাক্টিভ Power BI ড্যাশবোর্ড, পাইথন EDA, স্ট্যাটিস্টিক্যাল ইনসাইটস, প্রেডিক্টিভ মেশিন লার্নিং ও ওয়েব স্ক্র্যাপিং।'
                    : 'Interactive Power BI/Tableau dashboards, Python statistical EDA, predictive machine learning models, and automated ETL.'}
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* Dedicated Team Section */}
        <div className="mb-16 -mx-3 sm:-mx-6 md:-mx-8 lg:-mx-10 xl:-mx-12">
          <TeamSection />
        </div>

        {/* Global Client Satisfaction & CTA Banner */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.96, y: 25 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-slate-950 via-slate-900 to-blue-950 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl border border-slate-800"
        >
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <KraflynLogo size="sm" variant="emblem" />
              <h3 className="text-xl sm:text-2xl font-black">
                {language === 'bn' ? '৩৫০+ সফল প্রজেক্ট ও সন্তুষ্ট ক্লায়েন্ট' : 'Trusted for High-Impact Digital Execution'}
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-slate-300 max-w-xl">
              {language === 'bn'
                ? 'স্টার্টআপ, এন্টারপ্রাইজ ও ব্যবসা প্রতিষ্ঠানের জন্য আধুনিক ডিজাইন, স্কেলেবল সফটওয়্যার ও নির্ভরযোগ্য ডাটা সল্যুশন।'
                : 'Delivering modern digital solutions for startups, enterprises, and innovators across fintech, e-commerce, and cloud platforms.'}
            </p>
          </div>

          <motion.button
            whileHover={{ scale: 1.03, y: -1 }}
            whileTap={{ scale: 0.96 }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
            onClick={() => openOrderModal()}
            className="px-8 py-4 bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 hover:from-cyan-400 hover:to-indigo-700 text-white text-xs sm:text-sm font-black rounded-2xl shadow-xl shadow-cyan-600/30 transition-all duration-200 shrink-0 cursor-pointer flex items-center gap-2"
          >
            <Sparkles className="w-4 h-4 text-amber-300" />
            <span>{t.orderNow}</span>
            <ArrowRight className="w-4 h-4" />
          </motion.button>
        </motion.div>

      </div>
    </div>
  );
};
