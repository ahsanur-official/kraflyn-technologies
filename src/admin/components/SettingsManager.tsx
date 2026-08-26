import React, { useState, useEffect } from 'react';
import { useApp } from '../../context/AppContext';
import { SiteSettings, SiteNotice } from '../../types';
import { 
  Settings, 
  Megaphone, 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Globe, 
  Sparkles, 
  Save, 
  CheckCircle2, 
  AlertTriangle,
  Building,
  BarChart2,
  Share2,
  Lock,
  Power
} from 'lucide-react';
import { motion } from 'motion/react';

export const SettingsManager: React.FC = () => {
  const { siteSettings, updateSiteSettings, language } = useApp();

  const [formData, setFormData] = useState<SiteSettings>(siteSettings);
  const [isSaving, setIsSaving] = useState(false);
  const [activeSubTab, setActiveSubTab] = useState<'notice' | 'general' | 'contact' | 'stats' | 'social'>('notice');

  // Keep local state in sync when siteSettings change
  useEffect(() => {
    setFormData(siteSettings);
  }, [siteSettings]);

  const handleNoticeChange = (field: keyof SiteNotice, value: any) => {
    setFormData(prev => ({
      ...prev,
      notice: {
        ...prev.notice,
        [field]: value
      }
    }));
  };

  const handleHeroStatsChange = (field: keyof SiteSettings['heroStats'], value: number | string) => {
    setFormData(prev => ({
      ...prev,
      heroStats: {
        ...prev.heroStats,
        [field]: value
      }
    }));
  };

  const handleSocialLinksChange = (field: keyof SiteSettings['socialLinks'], value: string) => {
    setFormData(prev => ({
      ...prev,
      socialLinks: {
        ...prev.socialLinks,
        [field]: value
      }
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSaving(true);
    updateSiteSettings(formData);
    setTimeout(() => {
      setIsSaving(false);
    }, 600);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-white rounded-2xl p-5 md:p-6 border border-slate-200/80 shadow-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="p-2 rounded-xl bg-indigo-50 text-indigo-600 border border-indigo-100">
              <Settings className="w-5 h-5" />
            </span>
            <h1 className="text-xl md:text-2xl font-black text-slate-900">
              {language === 'bn' ? 'সিস্টেম ও সাইট কন্ট্রোল (A to Z)' : 'Global System & Site Settings'}
            </h1>
          </div>
          <p className="text-xs md:text-sm text-slate-500 mt-1">
            {language === 'bn' 
              ? 'ওয়েবসাইটের নোটিশ বার, কন্টাক্ট ইনফো, সোশ্যাল লিংক ও লাইভ স্ট্যাটাস কেন্দ্রীয়ভাবে পরিবর্তন করুন।' 
              : 'Control announcement banners, live contacts, operational stats, and public branding across the app.'}
          </p>
        </div>

        <button
          onClick={handleSubmit}
          disabled={isSaving}
          className="flex items-center gap-2 px-5 py-2.5 bg-indigo-600 hover:bg-indigo-700 disabled:opacity-50 text-white text-sm font-bold rounded-xl shadow-md shadow-indigo-500/20 transition-all cursor-pointer"
        >
          {isSaving ? (
            <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
          ) : (
            <Save className="w-4 h-4" />
          )}
          <span>{language === 'bn' ? 'সেটিংস সেভ করুন' : 'Save Changes'}</span>
        </button>
      </div>

      {/* Sub Tabs */}
      <div className="flex overflow-x-auto gap-2 p-1.5 bg-slate-200/80 rounded-2xl scrollbar-none">
        {[
          { id: 'notice' as const, label: language === 'bn' ? 'ঘোষণা ও নোটিশ বার' : 'Notice & Announcement', icon: Megaphone },
          { id: 'general' as const, label: language === 'bn' ? 'সাধারণ ব্র্যান্ডিং' : 'Brand & Operations', icon: Building },
          { id: 'contact' as const, label: language === 'bn' ? 'যোগাযোগ ও সাপোর্ট' : 'Contact & Support', icon: Phone },
          { id: 'stats' as const, label: language === 'bn' ? 'লাইভ পরিসংখ্যান' : 'Live Metrics', icon: BarChart2 },
          { id: 'social' as const, label: language === 'bn' ? 'সোশ্যাল লিংকস' : 'Social Profiles', icon: Share2 }
        ].map(tab => {
          const Icon = tab.icon;
          const isActive = activeSubTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveSubTab(tab.id)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold transition-all shrink-0 cursor-pointer ${
                isActive
                  ? 'bg-white text-indigo-700 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-white/50'
              }`}
            >
              <Icon className="w-4 h-4" />
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* Forms Content */}
      <form onSubmit={handleSubmit} className="space-y-6">
        
        {/* TAB 1: Announcement Banner */}
        {activeSubTab === 'notice' && (
          <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-xs space-y-6">
            <div className="flex items-center justify-between border-b border-slate-100 pb-4">
              <div>
                <h3 className="font-extrabold text-base text-slate-900 flex items-center gap-2">
                  <Megaphone className="w-5 h-5 text-indigo-600" />
                  {language === 'bn' ? 'শীর্ষ জরুরি ঘোষণা ও নোটিশ বার' : 'Top Announcement / Urgent Notice Bar'}
                </h3>
                <p className="text-xs text-slate-500 mt-0.5">
                  {language === 'bn' 
                    ? 'ওয়েবসাইটের একেবারে শীর্ষে ব্যানার হিসেবে শিক্ষার্থীদের জন্য জরুরি মেসেজ দিন।' 
                    : 'Shows an alert banner at the very top of the student website.'}
                </p>
              </div>

              {/* Master Toggle */}
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={formData.notice.enabled}
                  onChange={(e) => handleNoticeChange('enabled', e.target.checked)}
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-indigo-600"></div>
                <span className="ml-2 text-xs font-bold text-slate-700">
                  {formData.notice.enabled ? (language === 'bn' ? 'সক্রিয়' : 'Active') : (language === 'bn' ? 'বন্ধ' : 'Disabled')}
                </span>
              </label>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  {language === 'bn' ? 'নোটিশ বার্তা (বাংলায়) *' : 'Notice Message (Bengali)'}
                </label>
                <textarea
                  rows={3}
                  value={formData.notice.messageBn}
                  onChange={(e) => handleNoticeChange('messageBn', e.target.value)}
                  placeholder="যেমন: স্পেশাল অফার! ফাইনাল সেমিস্টার ক্যাপস্টন প্রজেক্টে ৩০% ডিসকাউন্ট চলছে।"
                  className="w-full px-3 py-2 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:bg-white focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  {language === 'bn' ? 'নোটিশ বার্তা (ইংরেজিতে) *' : 'Notice Message (English)'}
                </label>
                <textarea
                  rows={3}
                  value={formData.notice.messageEn}
                  onChange={(e) => handleNoticeChange('messageEn', e.target.value)}
                  placeholder="e.g. Special Discount: 30% OFF on Final Semester CSE Capstone Projects!"
                  className="w-full px-3 py-2 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:bg-white focus:outline-none"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  {language === 'bn' ? 'নোটিশের ধরন' : 'Notice Type'}
                </label>
                <select
                  value={formData.notice.type}
                  onChange={(e) => handleNoticeChange('type', e.target.value)}
                  className="w-full px-3 py-2 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:bg-white focus:outline-none"
                >
                  <option value="promo">Promo / Discount (Indigo/Purple)</option>
                  <option value="info">General Info (Blue)</option>
                  <option value="warning">Warning / Deadline (Amber)</option>
                  <option value="success">Success / Verified (Green)</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  {language === 'bn' ? 'বাটন টেক্সট (ঐচ্ছিক)' : 'Action Button Text'}
                </label>
                <input
                  type="text"
                  value={formData.notice.linkText || ''}
                  onChange={(e) => handleNoticeChange('linkText', e.target.value)}
                  placeholder="e.g. অর্ডার করুন / Claim Offer"
                  className="w-full px-3 py-2 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:bg-white focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  {language === 'bn' ? 'বাটন অ্যাকশন লিংক (ঐচ্ছিক)' : 'Action URL'}
                </label>
                <input
                  type="text"
                  value={formData.notice.linkUrl || ''}
                  onChange={(e) => handleNoticeChange('linkUrl', e.target.value)}
                  placeholder="e.g. #services or https://..."
                  className="w-full px-3 py-2 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:bg-white focus:outline-none"
                />
              </div>
            </div>

            {/* Live Preview Box */}
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-2">
                Live Banner Preview:
              </span>
              {formData.notice.enabled ? (
                <div className={`py-2 px-4 rounded-lg text-xs font-bold flex items-center justify-between gap-2 shadow-xs ${
                  formData.notice.type === 'promo' 
                    ? 'bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white' 
                    : formData.notice.type === 'warning'
                    ? 'bg-amber-500 text-slate-950'
                    : formData.notice.type === 'success'
                    ? 'bg-emerald-600 text-white'
                    : 'bg-blue-600 text-white'
                }`}>
                  <span>{formData.notice.messageBn || formData.notice.messageEn || 'Sample Notice'}</span>
                  {formData.notice.linkText && (
                    <span className="px-2 py-0.5 rounded bg-white/20 hover:bg-white/30 text-[11px] font-black underline cursor-pointer">
                      {formData.notice.linkText} →
                    </span>
                  )}
                </div>
              ) : (
                <p className="text-xs text-slate-400 italic">Notice banner is currently disabled.</p>
              )}
            </div>
          </div>
        )}

        {/* TAB 2: General Brand & Operation Status */}
        {activeSubTab === 'general' && (
          <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-xs space-y-6">
            <h3 className="font-extrabold text-base text-slate-900 border-b border-slate-100 pb-3 flex items-center gap-2">
              <Building className="w-5 h-5 text-indigo-600" />
              {language === 'bn' ? 'ব্র্যান্ড ও প্ল্যাটফর্মের সাধারণ সেটিংস' : 'Brand & Operational Status'}
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  {language === 'bn' ? 'কোম্পানির নাম' : 'Platform / Brand Name'}
                </label>
                <input
                  type="text"
                  value={formData.brandName}
                  onChange={(e) => setFormData({ ...formData, brandName: e.target.value })}
                  className="w-full px-3 py-2 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:bg-white focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  {language === 'bn' ? 'অপারেটিং স্লোগান (ট্যাগলাইন)' : 'Brand Tagline'}
                </label>
                <input
                  type="text"
                  value={formData.tagline}
                  onChange={(e) => setFormData({ ...formData, tagline: e.target.value })}
                  className="w-full px-3 py-2 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:bg-white focus:outline-none"
                />
              </div>
            </div>

            {/* Order Acceptance Switch */}
            <div className="p-4 bg-indigo-50/60 rounded-xl border border-indigo-100 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className={`p-2 rounded-xl ${formData.acceptingOrders ? 'bg-emerald-100 text-emerald-700' : 'bg-rose-100 text-rose-700'}`}>
                  <Power className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">
                    {language === 'bn' ? 'নতুন শিক্ষার্থী অর্ডার গ্রহণ' : 'Accepting New Student Orders'}
                  </h4>
                  <p className="text-xs text-slate-500">
                    {formData.acceptingOrders 
                      ? (language === 'bn' ? 'সিস্টেমে নতুন অর্ডার ফর্ম সক্রিয় রয়েছে।' : 'Students can place orders without restrictions.') 
                      : (language === 'bn' ? 'অর্ডার সাময়িক স্থগিত থাকবে।' : 'Shows high-capacity waitlist notice.')}
                  </p>
                </div>
              </div>

              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={formData.acceptingOrders}
                  onChange={(e) => setFormData({ ...formData, acceptingOrders: e.target.checked })}
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-emerald-600"></div>
              </label>
            </div>
          </div>
        )}

        {/* TAB 3: Contact & Support Numbers */}
        {activeSubTab === 'contact' && (
          <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-xs space-y-6">
            <h3 className="font-extrabold text-base text-slate-900 border-b border-slate-100 pb-3 flex items-center gap-2">
              <Phone className="w-5 h-5 text-indigo-600" />
              {language === 'bn' ? 'অফিসিয়াল কন্টাক্ট ও সাপোর্ট চ্যানেল' : 'Official Contact Channels'}
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1 flex items-center gap-1.5">
                  <Phone className="w-3.5 h-3.5 text-emerald-600" />
                  {language === 'bn' ? 'অফিসিয়াল WhatsApp নম্বর (ফরমেট সহ) *' : 'WhatsApp Number *'}
                </label>
                <input
                  type="text"
                  required
                  value={formData.contactPhone}
                  onChange={(e) => setFormData({ ...formData, contactPhone: e.target.value })}
                  placeholder="+880 1762-817887"
                  className="w-full px-3 py-2 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:bg-white focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1 flex items-center gap-1.5">
                  <Mail className="w-3.5 h-3.5 text-blue-600" />
                  {language === 'bn' ? 'অফিসিয়াল সাপোর্ট ইমেইল *' : 'Support Email Address *'}
                </label>
                <input
                  type="email"
                  required
                  value={formData.contactEmail}
                  onChange={(e) => setFormData({ ...formData, contactEmail: e.target.value })}
                  placeholder="kraflyn@gmail.com"
                  className="w-full px-3 py-2 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:bg-white focus:outline-none"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1 flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-rose-600" />
                  {language === 'bn' ? 'অফিস / ক্যাম্পাস লোকেশন' : 'Campus / Office Location'}
                </label>
                <input
                  type="text"
                  value={formData.location}
                  onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                  placeholder="Gokul, Bogura (Adjacent to PUB Campus)"
                  className="w-full px-3 py-2 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:bg-white focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1 flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-amber-600" />
                  {language === 'bn' ? 'সাপোর্ট অ্যাক্টিভিটি টাইম' : 'Working / Support Hours'}
                </label>
                <input
                  type="text"
                  value={formData.workingHours}
                  onChange={(e) => setFormData({ ...formData, workingHours: e.target.value })}
                  placeholder="24/7 Academic Support Active"
                  className="w-full px-3 py-2 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:bg-white focus:outline-none"
                />
              </div>
            </div>
          </div>
        )}

        {/* TAB 4: Live Metrics / Stats */}
        {activeSubTab === 'stats' && (
          <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-xs space-y-6">
            <h3 className="font-extrabold text-base text-slate-900 border-b border-slate-100 pb-3 flex items-center gap-2">
              <BarChart2 className="w-5 h-5 text-indigo-600" />
              {language === 'bn' ? 'হোমপেজে প্রদর্শিত অর্জনের পরিসংখ্যান' : 'Homepage Hero Metrics'}
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  {language === 'bn' ? 'সম্পন্ন প্রজেক্ট সংখ্যা' : 'Completed Projects'}
                </label>
                <input
                  type="number"
                  value={formData.heroStats.completedProjects}
                  onChange={(e) => handleHeroStatsChange('completedProjects', parseInt(e.target.value) || 0)}
                  className="w-full px-3 py-2 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:bg-white focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  {language === 'bn' ? 'অভিজ্ঞ মেন্টর সংখ্যা' : 'Expert Mentors'}
                </label>
                <input
                  type="number"
                  value={formData.heroStats.activeMentors}
                  onChange={(e) => handleHeroStatsChange('activeMentors', parseInt(e.target.value) || 0)}
                  className="w-full px-3 py-2 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:bg-white focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  {language === 'bn' ? 'সফল শিক্ষার্থী সংখ্যা' : 'Happy Students'}
                </label>
                <input
                  type="number"
                  value={formData.heroStats.happyStudents}
                  onChange={(e) => handleHeroStatsChange('happyStudents', parseInt(e.target.value) || 0)}
                  className="w-full px-3 py-2 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:bg-white focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  {language === 'bn' ? 'সফলতার হার' : 'Success Rate'}
                </label>
                <input
                  type="text"
                  value={formData.heroStats.successRate}
                  onChange={(e) => handleHeroStatsChange('successRate', e.target.value)}
                  placeholder="99.4%"
                  className="w-full px-3 py-2 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:bg-white focus:outline-none"
                />
              </div>
            </div>
          </div>
        )}

        {/* TAB 5: Social Profiles */}
        {activeSubTab === 'social' && (
          <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-xs space-y-6">
            <h3 className="font-extrabold text-base text-slate-900 border-b border-slate-100 pb-3 flex items-center gap-2">
              <Share2 className="w-5 h-5 text-indigo-600" />
              {language === 'bn' ? 'সোশ্যাল মিডিয়া প্রোফাইল লিংক' : 'Social Media & Community Links'}
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Facebook Page / Group URL</label>
                <input
                  type="url"
                  value={formData.socialLinks.facebook || ''}
                  onChange={(e) => handleSocialLinksChange('facebook', e.target.value)}
                  placeholder="https://facebook.com/..."
                  className="w-full px-3 py-2 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:bg-white focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">GitHub Organization URL</label>
                <input
                  type="url"
                  value={formData.socialLinks.github || ''}
                  onChange={(e) => handleSocialLinksChange('github', e.target.value)}
                  placeholder="https://github.com/..."
                  className="w-full px-3 py-2 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:bg-white focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">LinkedIn Page URL</label>
                <input
                  type="url"
                  value={formData.socialLinks.linkedin || ''}
                  onChange={(e) => handleSocialLinksChange('linkedin', e.target.value)}
                  placeholder="https://linkedin.com/..."
                  className="w-full px-3 py-2 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:bg-white focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">YouTube Channel URL</label>
                <input
                  type="url"
                  value={formData.socialLinks.youtube || ''}
                  onChange={(e) => handleSocialLinksChange('youtube', e.target.value)}
                  placeholder="https://youtube.com/..."
                  className="w-full px-3 py-2 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:bg-white focus:outline-none"
                />
              </div>
            </div>
          </div>
        )}

        {/* Global Save Button Bottom */}
        <div className="flex items-center justify-end">
          <button
            type="submit"
            disabled={isSaving}
            className="flex items-center gap-2 px-6 py-3 bg-indigo-600 hover:bg-indigo-700 disabled:opacity-50 text-white font-bold rounded-xl shadow-lg shadow-indigo-500/25 transition-all cursor-pointer"
          >
            {isSaving ? (
              <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
            ) : (
              <Save className="w-5 h-5" />
            )}
            <span>{language === 'bn' ? 'সকল পরিবর্তন সেভ করুন' : 'Save All Settings'}</span>
          </button>
        </div>

      </form>
    </div>
  );
};
