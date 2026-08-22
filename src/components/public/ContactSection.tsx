import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { KraflynLogo } from '../common/KraflynLogo';
import { 
  Phone, 
  Mail, 
  MessageSquare, 
  Clock, 
  Send, 
  CheckCircle2, 
  Sparkles,
  Palette,
  Code2,
  GraduationCap
} from 'lucide-react';
import { motion } from 'motion/react';

export const ContactSection: React.FC = () => {
  const { userProfile, submitInquiry, showToast, language, t } = useApp();
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [ticketId, setTicketId] = useState('');
  const [formData, setFormData] = useState({
    name: userProfile.name || '',
    email: userProfile.email || '',
    phone: userProfile.phone || '',
    subject: 'Creative Design & Branding',
    message: ''
  });

  // Sync with userProfile when available
  React.useEffect(() => {
    if (userProfile.name && !formData.name) {
      setFormData(prev => ({
        ...prev,
        name: userProfile.name,
        email: userProfile.email || prev.email,
        phone: userProfile.phone || prev.phone
      }));
    }
  }, [userProfile]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const id = submitInquiry({
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      subject: formData.subject,
      message: formData.message
    });
    setTicketId(id);
    setFormSubmitted(true);
    showToast(language === 'bn' ? 'আপনার বার্তা সফলভাবে জমা হয়েছে' : 'Inquiry submitted successfully');
  };

  return (
    <div className="py-16 md:py-24 bg-slate-50">
      <div className="max-w-[1920px] w-full mx-auto px-3 sm:px-6 md:px-8 lg:px-10 xl:px-12">
        
        {/* Header with Scroll Animation */}
        <motion.div 
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-blue-200 text-blue-800 text-xs font-bold mb-3 shadow-xs">
            <KraflynLogo size="xs" variant="emblem" />
            <span>{language === 'bn' ? 'আমরা আছি সার্বক্ষণিক পাশে' : "We're Here For You"}</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            {language === 'bn' ? 'Kraflyn Technologies সাপোর্টের সাথে যোগাযোগ করুন' : 'Get In Touch With Kraflyn Technologies'}
          </h1>
          <p className="mt-3 text-xs sm:text-sm text-slate-600">
            {language === 'bn' 
              ? 'ডিজাইন, ডেভেলপমেন্ট বা স্টুডেন্ট সাপোর্ট সংক্রান্ত যেকোনো কাস্টম রিকোয়ারমেন্ট অথবা সহায়তার জন্য আমাদের সাথে যোগাযোগ করুন।' 
              : 'Have an urgent project, custom requirement, or special inquiry? Connect directly with our coordinators.'}
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
              href="https://wa.me/8801712345678?text=Hello%20Kraflyn%20Technologies,%20I%20have%20an%20inquiry."
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
                <h3 className="text-sm font-bold text-slate-900">{language === 'bn' ? 'অফিসিয়াল ইমেইল' : 'Official Email'}</h3>
                <div className="text-xs text-slate-600 mt-0.5">support@kraflyn.com</div>
                <div className="text-[11px] text-slate-400 mt-1">{language === 'bn' ? 'প্রজেক্ট কো-অর্ডিনেশন ও সাপোর্ট' : 'Project Coordination & Support'}</div>
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
                <h3 className="text-sm font-bold text-slate-900">{language === 'bn' ? 'কাজের সময়' : 'Working Hours'}</h3>
                <div className="text-xs text-slate-600 mt-0.5">{language === 'bn' ? '২৪/৭ ইমার্জেন্সি সাপোর্ট' : '24/7 Priority Assistance'}</div>
                <div className="text-[11px] text-emerald-600 font-semibold mt-1">● Online & Ready</div>
              </div>
            </motion.div>

          </div>

          {/* Contact Inquiry Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-10 shadow-xs">
              {formSubmitted ? (
                <div className="text-center py-12 space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-black text-slate-900">
                    {language === 'bn' ? 'আপনার বার্তা গৃহীত হয়েছে!' : 'Inquiry Received!'}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto">
                    {language === 'bn' 
                      ? `ধন্যবাদ! আপনার ইনকোয়ারি আইডি: ${ticketId}। আমাদের কো-অর্ডিনেটর খুব শীঘ্রই আপনার দেওয়া ইমেইল ও ফোনে যোগাযোগ করবেন।`
                      : `Thank you! Your ticket ID is: ${ticketId}. Our coordinator will get back to you shortly.`}
                  </p>
                  <div className="pt-4">
                    <button
                      onClick={() => {
                        setFormSubmitted(false);
                        setFormData({
                          name: '',
                          email: '',
                          phone: '',
                          subject: 'Creative Design & Branding',
                          message: ''
                        });
                      }}
                      className="px-6 py-2.5 bg-blue-600 text-white text-xs font-bold rounded-xl shadow-xs hover:bg-blue-700 cursor-pointer"
                    >
                      {language === 'bn' ? 'অন্য একটি বার্তা পাঠান' : 'Send Another Inquiry'}
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <h3 className="text-lg font-black text-slate-900">
                      {language === 'bn' ? 'সরাসরি মেসেজ পাঠান' : 'Send a Direct Message'}
                    </h3>
                    <p className="text-xs text-slate-500 mt-0.5">
                      {language === 'bn'
                        ? 'আপনার প্রজেক্টের বিস্তারিত জানিয়ে নিচে লিখুন।'
                        : 'Fill in your project details and we will get back to you promptly.'}
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        {language === 'bn' ? 'আপনার নাম *' : 'Full Name *'}
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Tanvir Ahmed"
                        value={formData.name}
                        onChange={e => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-xs bg-slate-50 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all"
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
                        className="w-full px-3.5 py-2.5 text-xs bg-slate-50 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        {language === 'bn' ? 'মোবাইল / হোয়াটসঅ্যাপ *' : 'Phone / WhatsApp *'}
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="e.g. +880 1712-345678"
                        value={formData.phone}
                        onChange={e => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-xs bg-slate-50 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        {language === 'bn' ? 'সার্ভিস ক্যাটাগরি *' : 'Service Category *'}
                      </label>
                      <select
                        value={formData.subject}
                        onChange={e => setFormData({ ...formData, subject: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-xs bg-slate-50 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all cursor-pointer font-medium text-slate-700"
                      >
                        <option value="Creative Design & Branding">🎨 Creative Design & Branding</option>
                        <option value="Web & Software Development">💻 Web & Software Development</option>
                        <option value="FYP & Academic Mentorship">🎓 FYP & Student Support</option>
                        <option value="Research Paper & LaTeX">📄 Research Paper & LaTeX</option>
                        <option value="Urgent Custom Milestone">⚡ Urgent Custom Milestone</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      {language === 'bn' ? 'আপনার রিকোয়ারমেন্ট / বার্তা *' : 'Project Details / Message *'}
                    </label>
                    <textarea
                      required
                      rows={5}
                      placeholder={language === 'bn' ? 'আপনার প্রজেক্টের রিকোয়ারমেন্ট, ডেডলাইন ও যেকোনো নির্দিষ্ট তথ্য এখানে লিখুন...' : 'Describe your project scope, turnaround deadline, or specific requirements...'}
                      value={formData.message}
                      onChange={e => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-xs bg-slate-50 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600 hover:from-cyan-700 hover:to-indigo-700 text-white font-black text-xs sm:text-sm rounded-xl shadow-md shadow-blue-500/25 flex items-center justify-center gap-2 cursor-pointer transition-all"
                  >
                    <Send className="w-4 h-4" />
                    <span>{language === 'bn' ? 'বার্তা পাঠান' : 'Send Message'}</span>
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
