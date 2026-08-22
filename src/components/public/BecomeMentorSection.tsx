import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { UNIVERSITIES, DEPARTMENTS } from '../../data/mockData';
import { KraflynLogo } from '../common/KraflynLogo';
import { 
  Sparkles, 
  CheckCircle2, 
  DollarSign, 
  Calendar, 
  BookOpen, 
  Award, 
  Send, 
  ShieldCheck,
  Palette,
  Code2,
  GraduationCap
} from 'lucide-react';

export const BecomeMentorSection: React.FC = () => {
  const { registerMentor, setActiveNavTab, language } = useApp();
  const [submitted, setSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    whatsapp: '',
    roleCategory: 'Student Support Mentor',
    university: UNIVERSITIES[0],
    department: DEPARTMENTS[0],
    qualification: '',
    expertise: '',
    experience: '',
    portfolio: '',
    linkedIn: '',
    facebook: '',
    availableTime: 'Evenings & Weekends (7 PM - 11 PM)',
    expectedRate: '৳500 - ৳1500 / project',
    bio: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const expertiseArray = formData.expertise.split(',').map(s => s.trim()).filter(Boolean);
    registerMentor({
      name: formData.name,
      institution: `${formData.university} (${formData.department})`,
      degree: formData.qualification || `${formData.roleCategory} Specialist`,
      specialization: expertiseArray.length ? expertiseArray : ['Design', 'Development', 'Mentorship'],
      contactPhone: formData.phone || formData.whatsapp,
      status: 'available'
    });
    setSubmitted(true);
  };

  return (
    <div className="py-16 md:py-24 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-800 text-xs font-semibold mb-3 shadow-xs">
            <KraflynLogo size="xs" variant="emblem" />
            <span>{language === 'bn' ? 'Kraflyn Technologies স্পেশালিস্ট ও মেন্টর নেটওয়ার্ক' : 'Join Kraflyn Technologies Specialist & Mentor Network'}</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            {language === 'bn' 
              ? 'Kraflyn Technologies স্পেশালিস্ট বা মেন্টর হিসেবে যুক্ত হোন' 
              : 'Join as a Kraflyn Technologies Specialist or Academic Mentor'}
          </h1>
          <p className="mt-3 text-sm sm:text-base text-slate-600">
            {language === 'bn'
              ? 'ডিজাইন, ওয়েব/সফটওয়্যার ডেভেলপমেন্ট বা একাডেমিক গবেষণায় আপনার দক্ষতা কাজে লাগিয়ে শিক্ষার্থীদের সাহায্য করুন এবং আকর্ষণীয় আয় করুন।'
              : 'Empower students and clients across Graphic Design, Web/Software Engineering, or Academic Mentorship, and earn competitive payouts on your schedule.'}
          </p>
        </div>

        {/* 3 Pillar Specialty Selection */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-14">
          <div className="p-5 bg-fuchsia-50/50 rounded-2xl border border-fuchsia-200/80">
            <div className="w-10 h-10 rounded-xl bg-fuchsia-600 text-white flex items-center justify-center mb-3 shadow-xs">
              <Palette className="w-5 h-5" />
            </div>
            <h3 className="text-sm font-bold text-slate-900 mb-1">
              {language === 'bn' ? '১. ক্রিয়েটিভ ডিজাইনার' : '1. Creative Designers'}
            </h3>
            <p className="text-xs text-slate-600">
              {language === 'bn'
                ? 'পোস্টার, ব্যানার, প্রেজেন্টেশন, সিভি, ইউআই/ইউএক্স ও ব্র্যান্ডিং প্রজেক্টে কাজ করুন।'
                : 'Posters, flyers, pitch decks, Figma UI/UX, branding, and academic graphics.'}
            </p>
          </div>

          <div className="p-5 bg-cyan-50/50 rounded-2xl border border-cyan-200/80">
            <div className="w-10 h-10 rounded-xl bg-cyan-600 text-white flex items-center justify-center mb-3 shadow-xs">
              <Code2 className="w-5 h-5" />
            </div>
            <h3 className="text-sm font-bold text-slate-900 mb-1">
              {language === 'bn' ? '২. ওয়েব ও সফটওয়্যার ইঞ্জিনিয়ার' : '2. Software Engineers'}
            </h3>
            <p className="text-xs text-slate-600">
              {language === 'bn'
                ? 'ওয়েবসাইট, ফুলস্ট্যাক অ্যাপ, মোবাইল অ্যাপ, এপিআই ও বাগ ফিক্সিং সল্যুশন প্রদান করুন।'
                : 'React, Node, Python, Flutter, Mobile apps, SaaS systems, and API integrations.'}
            </p>
          </div>

          <div className="p-5 bg-emerald-50/50 rounded-2xl border border-emerald-200/80">
            <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center mb-3 shadow-xs">
              <GraduationCap className="w-5 h-5" />
            </div>
            <h3 className="text-sm font-bold text-slate-900 mb-1">
              {language === 'bn' ? '৩. একাডেমিক ও থিসিস মেন্টর' : '3. Academic Mentors'}
            </h3>
            <p className="text-xs text-slate-600">
              {language === 'bn'
                ? 'ফাইনাল ইয়ার প্রজেক্ট (FYP), ল্যাটেক্স ফরম্যাটিং, ডাটা এনালাইসিস ও কোডিং গাইডেন্সে সহায়তা করুন।'
                : 'FYP guidance, IEEE/LaTeX paper formatting, SPSS/Python analysis, and SOP writing.'}
            </p>
          </div>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-14">
          <div className="p-5 bg-slate-50 rounded-2xl border border-slate-200/80">
            <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center mb-3">
              <DollarSign className="w-5 h-5" />
            </div>
            <h3 className="text-sm font-bold text-slate-900 mb-1">
              {language === 'bn' ? 'নিশ্চিত ও আকর্ষণীয় পেমেন্ট' : 'Competitive Rates (৳ BDT)'}
            </h3>
            <p className="text-xs text-slate-600">
              {language === 'bn'
                ? 'সরাসরি bKash / Nagad / Bank একাউন্টে প্রতি সপ্তাহের পেমেন্ট নিশ্চয়তা।'
                : 'Guaranteed timely payouts directly via bKash / Nagad / Bank transfers.'}
            </p>
          </div>

          <div className="p-5 bg-slate-50 rounded-2xl border border-slate-200/80">
            <div className="w-10 h-10 rounded-xl bg-indigo-100 text-indigo-700 flex items-center justify-center mb-3">
              <Calendar className="w-5 h-5" />
            </div>
            <h3 className="text-sm font-bold text-slate-900 mb-1">
              {language === 'bn' ? '১০০% ফ্লেক্সিবল সময়' : '100% Flexible Schedule'}
            </h3>
            <p className="text-xs text-slate-600">
              {language === 'bn'
                ? 'আপনার অবসর সময়ে বা ছুটির দিনে নিজের সুবিধাজনক শিডিউলে কাজ করুন।'
                : 'Work completely remotely during your spare evenings and weekends.'}
            </p>
          </div>

          <div className="p-5 bg-slate-50 rounded-2xl border border-slate-200/80">
            <div className="w-10 h-10 rounded-xl bg-purple-100 text-purple-700 flex items-center justify-center mb-3">
              <Award className="w-5 h-5" />
            </div>
            <h3 className="text-sm font-bold text-slate-900 mb-1">
              {language === 'bn' ? 'প্রফেশনাল পোর্টফোলিও বৃদ্ধি' : 'Build Your Portfolio'}
            </h3>
            <p className="text-xs text-slate-600">
              {language === 'bn'
                ? 'বাস্তব প্রজেক্টে কাজ করার অভিজ্ঞতা এবং অভিজ্ঞ নেটওয়ার্কের সাথে যুক্ত হওয়ার সুযোগ।'
                : 'Gain verifiable project experience and expand your professional network.'}
            </p>
          </div>
        </div>

        {/* Application Form */}
        <div className="bg-slate-50 rounded-3xl border border-slate-200/80 p-6 sm:p-10 shadow-xs">
          {submitted ? (
            <div className="text-center py-12 space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900">
                {language === 'bn' ? 'আবেদন সফলভাবে গৃহীত হয়েছে!' : 'Application Submitted for Review!'}
              </h3>
              <p className="text-sm text-slate-600 max-w-md mx-auto">
                {language === 'bn'
                  ? `ধন্যবাদ ${formData.name}! আমাদের কোয়ালিটি টিম আপনার প্রোফাইল যাচাই করে ২৪ ঘণ্টার মধ্যে আপনার সাথে যোগাযোগ করবে।`
                  : `Thank you for applying, ${formData.name}! Our Quality team will review your qualifications and contact you within 24 hours.`}
              </p>
              <div className="pt-4 flex justify-center gap-3">
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setActiveNavTab('mentor-dashboard');
                  }}
                  className="px-6 py-2.5 bg-blue-600 text-white text-xs font-bold rounded-xl shadow-md hover:bg-blue-700 cursor-pointer"
                >
                  {language === 'bn' ? 'স্পেশালিস্ট প্যানেল দেখুন' : 'Go to Specialist Panel'}
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="border-b border-slate-200 pb-4">
                <h3 className="text-lg font-bold text-slate-900">
                  {language === 'bn' ? 'Kraflyn Technologies স্পেশালিস্ট ও মেন্টর আবেদন ফর্ম' : 'Kraflyn Technologies Specialist & Mentor Form'}
                </h3>
                <p className="text-xs text-slate-500">
                  {language === 'bn'
                    ? 'অনুগ্রহ করে সঠিক তথ্য দিন। আমাদের টিম প্রতিটি আবেদন গুরুত্বের সাথে যাচাই করে।'
                    : 'Please provide accurate details. Our team verifies every expert profile.'}
                </p>
              </div>

              {/* Role Pillar Category */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  {language === 'bn' ? 'আপনার মূল ক্ষেত্র নির্বাচন করুন *' : 'Select Primary Domain *'}
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                  {[
                    { id: 'Design Specialist', label: '🎨 Graphic & UI/UX Design' },
                    { id: 'Software Developer', label: '💻 Web & Mobile Development' },
                    { id: 'Student Support Mentor', label: '🎓 Academic & Thesis Support' }
                  ].map(role => (
                    <button
                      type="button"
                      key={role.id}
                      onClick={() => setFormData({ ...formData, roleCategory: role.id })}
                      className={`p-3 rounded-xl text-xs font-bold text-left border transition-all cursor-pointer ${
                        formData.roleCategory === role.id
                          ? 'bg-blue-600 text-white border-blue-600 shadow-xs'
                          : 'bg-white text-slate-700 border-slate-300 hover:border-blue-400'
                      }`}
                    >
                      {role.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Personal Info */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    {language === 'bn' ? 'পূর্ণ নাম *' : 'Full Name *'}
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Tanvir Ahmed"
                    value={formData.name}
                    onChange={e => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3.5 py-2 text-xs border border-slate-300 rounded-xl bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    {language === 'bn' ? 'ইমেইল অ্যাড্রেস *' : 'Email Address *'}
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="e.g. name@domain.com"
                    value={formData.email}
                    onChange={e => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3.5 py-2 text-xs border border-slate-300 rounded-xl bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    {language === 'bn' ? 'মোবাইল নম্বর *' : 'Phone Number *'}
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g. +880 1712-345678"
                    value={formData.phone}
                    onChange={e => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3.5 py-2 text-xs border border-slate-300 rounded-xl bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    {language === 'bn' ? 'হোয়াটসঅ্যাপ নম্বর' : 'WhatsApp Number'}
                  </label>
                  <input
                    type="tel"
                    placeholder="e.g. +880 1712-345678"
                    value={formData.whatsapp}
                    onChange={e => setFormData({ ...formData, whatsapp: e.target.value })}
                    className="w-full px-3.5 py-2 text-xs border border-slate-300 rounded-xl bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
              </div>

              {/* Skills & Portfolio */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    {language === 'bn' ? 'দক্ষতার বিষয়সমূহ (কমা দিয়ে লিখুন) *' : 'Core Skills (Comma separated) *'}
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Photoshop, Illustrator, Figma, React, LaTeX, Python"
                    value={formData.expertise}
                    onChange={e => setFormData({ ...formData, expertise: e.target.value })}
                    className="w-full px-3.5 py-2 text-xs border border-slate-300 rounded-xl bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    {language === 'bn' ? 'পোর্টফোলিও / গিটহাব / বেহান্স লিংক' : 'Portfolio / GitHub / Behance Link'}
                  </label>
                  <input
                    type="url"
                    placeholder="https://..."
                    value={formData.portfolio}
                    onChange={e => setFormData({ ...formData, portfolio: e.target.value })}
                    className="w-full px-3.5 py-2 text-xs border border-slate-300 rounded-xl bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
              </div>

              {/* Submit */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600 hover:from-cyan-700 hover:to-indigo-700 text-white font-black text-xs sm:text-sm rounded-xl shadow-md shadow-blue-500/25 flex items-center justify-center gap-2 cursor-pointer transition-all"
                >
                  <Send className="w-4 h-4" />
                  <span>{language === 'bn' ? 'আবেদন জমা দিন' : 'Submit Specialist Application'}</span>
                </button>
              </div>
            </form>
          )}
        </div>

      </div>
    </div>
  );
};
