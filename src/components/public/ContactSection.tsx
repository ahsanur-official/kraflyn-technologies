import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { 
  Phone, 
  Mail, 
  MessageSquare, 
  Clock, 
  Send, 
  CheckCircle2, 
  Sparkles 
} from 'lucide-react';
import { motion } from 'motion/react';

export const ContactSection: React.FC = () => {
  const { language, t } = useApp();
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'General Academic Inquiry',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <div className="py-16 md:py-24 bg-slate-50">
      <div className="max-w-[1920px] w-full mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 2xl:px-20">
        
        {/* Header with Scroll Animation */}
        <motion.div 
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-bold mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{language === 'bn' ? 'আমরা আছি সার্বক্ষণিক পাশে' : "We're Here For You"}</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            {language === 'bn' ? 'Edu Quest সাপোর্টের সাথে যোগাযোগ করুন' : 'Get In Touch With Edu Quest'}
          </h1>
          <p className="mt-3 text-xs sm:text-sm text-slate-600">
            {language === 'bn' 
              ? 'যেকোনো একাডেমিক জিজ্ঞাসা, কাস্টম রিকোয়ারমেন্ট অথবা জরুরি সহায়তার জন্য সরাসরি যোগাযোগ করুন।' 
              : 'Have an urgent question, custom requirements, or feedback? Reach our academic coordinators directly.'}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Contact Details Cards */}
          <div className="space-y-4">
            
            {/* WhatsApp Direct Card */}
            <motion.a
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
              whileHover={{ scale: 1.02, y: -2 }}
              href="https://wa.me/8801712345678?text=Hello%20Edu%20Quest,%20I%20have%20an%20academic%20inquiry."
              target="_blank"
              rel="noreferrer"
              className="p-5 bg-emerald-600 text-white rounded-3xl flex items-start gap-4 shadow-md hover:bg-emerald-700 transition-all block cursor-pointer"
            >
              <div className="w-10 h-10 rounded-2xl bg-white/20 flex items-center justify-center shrink-0">
                <MessageSquare className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="text-sm font-bold">{t.hotlineText}</h3>
                <div className="text-xs text-emerald-100 mt-0.5">+880 1712-345678</div>
                <div className="text-[11px] text-emerald-200 mt-2 font-semibold">
                  {language === 'bn' ? 'সবচেয়ে দ্রুত রেসপন্স (১৫-৩০ মিনিট) ↗' : 'Fastest response (Usually under 15 mins) ↗'}
                </div>
              </div>
            </motion.a>

            {/* Phone */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 }}
              whileHover={{ y: -2 }}
              className="p-5 bg-white rounded-3xl border border-slate-200 flex items-start gap-4 shadow-xs"
            >
              <div className="w-10 h-10 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-slate-900">{language === 'bn' ? 'সরাসরি ফোন কল' : 'Direct Phone Support'}</h3>
                <div className="text-xs text-slate-600 mt-0.5">+880 1712-345678</div>
                <div className="text-[11px] text-slate-400 mt-1">{language === 'bn' ? 'সকাল ৮:০০ – রাত ১১:৩০ (প্রতিদিন)' : 'Available 8:00 AM – 11:30 PM (Daily)'}</div>
              </div>
            </motion.div>

            {/* Email */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.3 }}
              whileHover={{ y: -2 }}
              className="p-5 bg-white rounded-3xl border border-slate-200 flex items-start gap-4 shadow-xs"
            >
              <div className="w-10 h-10 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-slate-900">{language === 'bn' ? 'ইমেইল সাপোর্ট' : 'Email Inquiries'}</h3>
                <div className="text-xs text-slate-600 mt-0.5">support@eduquest.ac</div>
                <div className="text-[11px] text-slate-400 mt-1">{language === 'bn' ? 'একাডেমিক ও সমন্বয় সহায়তা' : 'Academic & Mentor Coordination'}</div>
              </div>
            </motion.div>

            {/* Operating Hours */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.4 }}
              whileHover={{ y: -2 }}
              className="p-5 bg-white rounded-3xl border border-slate-200 flex items-start gap-4 shadow-xs"
            >
              <div className="w-10 h-10 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-slate-900">{language === 'bn' ? 'সাপোর্ট সময়সূচি' : 'Support Schedule'}</h3>
                <div className="text-xs text-slate-600 mt-0.5">{language === 'bn' ? 'সপ্তাহে ৭ দিন: ২৪/৭ সক্রিয়' : '7 Days a Week: 24/7 Active Coordination'}</div>
                <div className="text-[11px] text-slate-400 mt-1">{language === 'bn' ? 'পরীক্ষার সময়ে ইমার্জেন্সি সাপোর্ট' : 'Emergency support available during exams'}</div>
              </div>
            </motion.div>

          </div>

          {/* Interactive Form with Motion */}
          <motion.div 
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-2 bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-md"
          >
            {formSubmitted ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12 space-y-4"
              >
                <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">
                  {language === 'bn' ? 'আপনার মেসেজটি সফলভাবে গৃহীত হয়েছে!' : 'Message Received!'}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto">
                  {language === 'bn'
                    ? `ধন্যবাদ ${formData.name}। আমাদের সাপোর্ট টিম শীঘ্রই আপনার WhatsApp বা ইমেইলে যোগাযোগ করবে।`
                    : `Thank you for reaching out, ${formData.name}. Our academic support team will review your inquiry and reply via WhatsApp or email shortly.`}
                </p>
                <button
                  onClick={() => {
                    setFormSubmitted(false);
                    setFormData({ name: '', email: '', phone: '', subject: 'General Academic Inquiry', message: '' });
                  }}
                  className="px-5 py-2 text-xs font-semibold text-blue-600 border border-blue-200 rounded-xl hover:bg-blue-50 cursor-pointer"
                >
                  {language === 'bn' ? 'আরেকটি বার্তা পাঠান' : 'Send Another Inquiry'}
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  {language === 'bn' ? 'আমাদের সরাসরি বার্তা পাঠান' : 'Send Us a Direct Message'}
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      {t.fullName} <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder={t.fullNamePlaceholder}
                      value={formData.name}
                      onChange={e => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-xs border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      {language === 'bn' ? 'ইমেইল ঠিকানা' : 'Email Address'} <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="student@university.edu"
                      value={formData.email}
                      onChange={e => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-xs border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      {t.phone} <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder={t.phonePlaceholder}
                      value={formData.phone}
                      onChange={e => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-xs border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      {language === 'bn' ? 'বিষয় / টপিক' : 'Topic / Subject'}
                    </label>
                    <select
                      value={formData.subject}
                      onChange={e => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-xs border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 bg-white"
                    >
                      <option>{language === 'bn' ? 'সাধারণ একাডেমিক তথ্য' : 'General Academic Inquiry'}</option>
                      <option>{language === 'bn' ? 'জরুরি অ্যাসাইনমেন্ট / ল্যাব সাপোর্ট' : 'Urgent Assignment / Lab Support'}</option>
                      <option>{language === 'bn' ? 'থিসিস ও রিসার্চ প্ল্যানিং' : 'Thesis & Research Planning'}</option>
                      <option>{language === 'bn' ? 'ভাইভা ও প্রজেক্ট ডিফেন্স কোচিং' : 'Viva & Project Defense Coaching'}</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    {t.requirements} <span className="text-rose-500">*</span>
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder={t.requirementsPlaceholder}
                    value={formData.message}
                    onChange={e => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-xs border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold rounded-xl shadow-md shadow-blue-500/20 flex items-center gap-2 transition-colors cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>{language === 'bn' ? 'মেসেজ পাঠান' : 'Send Message'}</span>
                </motion.button>
              </form>
            )}
          </motion.div>

        </div>

      </div>
    </div>
  );
};
