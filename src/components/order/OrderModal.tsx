import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { AttachmentFile } from '../../types';
import { 
  X, 
  Send, 
  UploadCloud, 
  Trash2, 
  FileText, 
  Phone, 
  MessageSquare, 
  Briefcase, 
  Layers, 
  Calendar, 
  CheckCircle2, 
  Sparkles,
  Info,
  ShieldCheck,
  Building2
} from 'lucide-react';

const PROJECT_CATEGORIES = [
  'Custom Web Application (React / Next.js / Node.js)',
  'UI/UX Design & Design Systems (Figma)',
  'WordPress & WooCommerce E-Commerce Solution',
  'Cross-Platform Mobile App (React Native / Flutter)',
  'Business Intelligence & Data Analytics (Power BI / Python)',
  'API Development & Cloud Infrastructure (AWS / GCP)',
  'Website Speed Optimization & Security Hardening',
  'Custom Software / Enterprise Solution'
];

const INDUSTRIES = [
  'Tech & SaaS Startup',
  'E-Commerce & Retail',
  'Corporate & Enterprise',
  'Healthcare & Medical',
  'Finance & FinTech',
  'Real Estate & Construction',
  'Media, News & Publishing',
  'Other / Personal Brand'
];

export const OrderModal: React.FC = () => {
  const { 
    orderModalOpen, 
    closeOrderModal, 
    quickOrderService, 
    cartItems, 
    cartTotal, 
    placeOrder,
    userProfile,
    language,
    t 
  } = useApp();

  const [customerName, setCustomerName] = useState(userProfile.name || '');
  const [phone, setPhone] = useState(userProfile.phone || '');
  const [whatsapp, setWhatsapp] = useState(userProfile.whatsapp || '');
  const [email, setEmail] = useState(userProfile.email || '');
  const [companyOrOrg, setCompanyOrOrg] = useState(userProfile.companyOrOrg || '');
  const [sameAsPhone, setSameAsPhone] = useState(true);
  const [projectCategory, setProjectCategory] = useState(PROJECT_CATEGORIES[0]);
  const [industry, setIndustry] = useState(INDUSTRIES[0]);
  const [projectTitle, setProjectTitle] = useState('');
  const [techStack, setTechStack] = useState('');
  const [requirements, setRequirements] = useState('');
  const [deadline, setDeadline] = useState('');
  const [preferredContact, setPreferredContact] = useState<'WhatsApp' | 'Phone Call' | 'Google Meet' | 'Email'>(userProfile.preferredContact || 'WhatsApp');
  const [attachments, setAttachments] = useState<AttachmentFile[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  // Sync state when userProfile or modal opens
  React.useEffect(() => {
    if (orderModalOpen) {
      if (!customerName && userProfile.name) setCustomerName(userProfile.name);
      if (!phone && userProfile.phone) setPhone(userProfile.phone);
      if (!whatsapp && userProfile.whatsapp) setWhatsapp(userProfile.whatsapp);
      if (!email && userProfile.email) setEmail(userProfile.email);
      if (!companyOrOrg && userProfile.companyOrOrg) setCompanyOrOrg(userProfile.companyOrOrg);
      if (userProfile.preferredContact) setPreferredContact(userProfile.preferredContact);
    }
  }, [orderModalOpen, userProfile]);

  if (!orderModalOpen) return null;

  // Active items being ordered
  const isDirectServiceOrder = Boolean(quickOrderService);
  const itemsToOrder = isDirectServiceOrder && quickOrderService
    ? [{
        id: 'direct-item',
        serviceId: quickOrderService.id,
        serviceTitle: quickOrderService.title,
        category: quickOrderService.category,
        basePrice: quickOrderService.startingPrice,
        packageTier: 'Standard Delivery' as const,
        urgencyFee: 0,
        totalPrice: quickOrderService.startingPrice,
        quantity: 1
      }]
    : cartItems.length > 0
    ? cartItems
    : [{
        id: 'custom-project-inquiry',
        serviceId: 'custom-software',
        serviceTitle: 'Custom Software & Digital Solution',
        category: 'Development Services' as const,
        basePrice: 5000,
        packageTier: 'Standard Delivery' as const,
        urgencyFee: 0,
        totalPrice: 5000,
        quantity: 1
      }];

  const orderEstimatedTotal = isDirectServiceOrder && quickOrderService
    ? quickOrderService.startingPrice
    : cartItems.length > 0
    ? cartTotal
    : 5000;

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;
    const files: File[] = Array.from(e.target.files);
    
    const newAttachments: AttachmentFile[] = files.map((file: File) => {
      const sizeInMB = (file.size / (1024 * 1024)).toFixed(2);
      const ext = (file.name || '').split('.').pop()?.toUpperCase() || 'FILE';
      return {
        id: `att-${Date.now()}-${Math.random().toString(36).substr(2, 4)}`,
        name: file.name,
        size: `${sizeInMB} MB`,
        type: ext,
        uploadedAt: new Date().toISOString().slice(0, 10)
      };
    });

    setAttachments(prev => [...prev, ...newAttachments]);
  };

  const removeAttachment = (id: string) => {
    setAttachments(prev => prev.filter(a => a.id !== id));
  };

  const validateForm = () => {
    const errs: Record<string, string> = {};
    if (!customerName.trim()) {
      errs.customerName = language === 'bn' ? 'আপনার নাম বা প্রতিষ্ঠানের কন্ট্যাক্ট পার্সনের নাম লিখুন' : 'Please provide your name or contact person';
    }
    if (!phone.trim()) {
      errs.phone = language === 'bn' ? 'সচল মোবাইল বা WhatsApp নম্বর প্রদান করুন' : 'Please provide a valid phone/WhatsApp number';
    }
    if (!projectTitle.trim()) {
      errs.projectTitle = language === 'bn' ? 'প্রজেক্টের নাম বা বিষয় সংক্ষেপে লিখুন' : 'Please enter project name or headline';
    }
    if (!requirements.trim() || requirements.trim().length < 10) {
      errs.requirements = language === 'bn' 
        ? 'আপনার প্রজেক্টের রিকোয়ারমেন্ট, ফিচার বা বিবরণ বিস্তারিত লিখুন (কমপক্ষে ১০ অক্ষর)' 
        : 'Please describe your project requirements, features or specifications (min 10 chars)';
    }
    if (!deadline) {
      errs.deadline = language === 'bn' ? 'সম্ভাব্য ডেলিভারির তারিখ বা ডেডলাইন উল্লেখ করুন' : 'Please select your target deadline';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmitOrder = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    const finalWhatsapp = sameAsPhone ? phone : (whatsapp || phone);

    setTimeout(() => {
      placeOrder({
        customerName,
        phone,
        whatsapp: finalWhatsapp,
        email,
        companyOrOrg,
        industry,
        university: companyOrOrg || 'Corporate / Client',
        department: projectCategory,
        courseName: projectTitle,
        projectTitle,
        techStack,
        requirements,
        deadline,
        preferredContact,
        attachments
      });
      setIsSubmitting(false);
    }, 600);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/75 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 animate-in fade-in">
      <div className="bg-white rounded-3xl shadow-2xl border border-slate-200 max-w-3xl w-full max-h-[92vh] flex flex-col overflow-hidden animate-in zoom-in-95 duration-200">
        
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-700 via-blue-800 to-indigo-900 text-white p-5 sm:p-6 shrink-0">
          <div className="flex items-start justify-between gap-4">
            <div className="flex items-center gap-3 min-w-0">
              <div className="w-10 h-10 rounded-xl bg-white/15 border border-white/20 flex items-center justify-center text-cyan-300 shrink-0">
                <Briefcase className="w-5 h-5" />
              </div>
              <div className="min-w-0">
                <h2 className="text-lg sm:text-xl font-bold tracking-tight">
                  {language === 'bn' ? 'প্রজেক্ট অর্ডার ও কোটেশন ফর্ম' : 'Project Order & Quotation Form'}
                </h2>
                <p className="text-xs text-blue-100 mt-0.5 leading-normal">
                  {language === 'bn' 
                    ? 'তথ্যগুলো পূরণ করুন। অর্ডার সাবমিট হওয়ামাত্রই টেক লিড সরাসরি WhatsApp-এ যোগাযোগ করবেন।' 
                    : 'Fill in the project brief. A technical lead will reach out via WhatsApp immediately to finalize milestones.'}
                </p>
              </div>
            </div>

            <button
              onClick={closeOrderModal}
              aria-label="Close"
              className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer shrink-0"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Reassurance pill */}
          <div className="mt-3.5 inline-flex items-center gap-2 bg-emerald-500/20 border border-emerald-400/40 text-emerald-100 text-xs px-3 py-1 rounded-full">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-300 shrink-0" />
            <span>{language === 'bn' ? '১০০% কোড ও ডিজাইন মালিকানা • সরাসরি WhatsApp কনসালটেশন' : '100% NDA & Code Ownership • Direct WhatsApp Architecture Consultation'}</span>
          </div>
        </div>

        {/* Form Body */}
        <form onSubmit={handleSubmitOrder} className="overflow-y-auto custom-scrollbar p-5 sm:p-7 space-y-6 flex-1 text-slate-800 text-sm">
          
          {/* 1. Selected Services Summary */}
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-bold uppercase text-slate-500 tracking-wider flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-blue-600" />
                {language === 'bn' ? 'নির্বাচিত সার্ভিসসমূহ' : 'Selected Capabilities'} ({itemsToOrder.length})
              </span>
              <span className="text-xs font-semibold text-blue-600">
                {language === 'bn' ? 'আনুমানিক রেট' : 'Estimated Starting'}: ৳{orderEstimatedTotal}
              </span>
            </div>

            <div className="divide-y divide-slate-200/80">
              {itemsToOrder.map((item, idx) => (
                <div key={idx} className="py-2 first:pt-0 last:pb-0 flex items-center justify-between">
                  <div>
                    <div className="font-bold text-slate-800 text-xs sm:text-sm">
                      {item.serviceTitle}
                    </div>
                    <div className="text-[11px] text-slate-500">
                      {item.category} • {item.packageTier}
                    </div>
                  </div>
                  <div className="text-xs font-black text-slate-900">
                    ৳{item.totalPrice * item.quantity}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 2. Client & Contact Information */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-1.5">
              <Phone className="w-3.5 h-3.5 text-blue-600" />
              {language === 'bn' ? 'ক্লায়েন্ট ও যোগাযোগের বিবরণ' : 'Client & Contact Information'}
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  {language === 'bn' ? 'আপনার পূর্ণ নাম / কন্ট্যাক্ট পার্সন' : 'Your Full Name / Contact Person'} <span className="text-rose-500">*</span>
                </label>
                <input
                  type="text"
                  value={customerName}
                  onChange={(e) => setCustomerName(e.target.value)}
                  placeholder={language === 'bn' ? 'উদা: মোঃ এহসানুর রহমান' : 'e.g. Alex Miller'}
                  className={`w-full px-3.5 py-2.5 rounded-xl border ${
                    errors.customerName ? 'border-rose-400 bg-rose-50/40' : 'border-slate-300'
                  } focus:outline-hidden focus:ring-2 focus:ring-blue-500 text-xs sm:text-sm`}
                />
                {errors.customerName && <p className="text-[11px] text-rose-500 mt-1">{errors.customerName}</p>}
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  {language === 'bn' ? 'ফোন নম্বর' : 'Phone Number'} <span className="text-rose-500">*</span>
                </label>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="01XXXXXXXXX"
                  className={`w-full px-3.5 py-2.5 rounded-xl border ${
                    errors.phone ? 'border-rose-400 bg-rose-50/40' : 'border-slate-300'
                  } focus:outline-hidden focus:ring-2 focus:ring-blue-500 text-xs sm:text-sm`}
                />
                {errors.phone && <p className="text-[11px] text-rose-500 mt-1">{errors.phone}</p>}
              </div>

              {/* Company & Email */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  {language === 'bn' ? 'কোম্পানি / ব্র্যান্ডের নাম (ঐচ্ছিক)' : 'Company / Brand Name (Optional)'}
                </label>
                <input
                  type="text"
                  value={companyOrOrg}
                  onChange={(e) => setCompanyOrOrg(e.target.value)}
                  placeholder={language === 'bn' ? 'উদা: Kraflyn Retail Ltd.' : 'e.g. Apex Software Inc.'}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-hidden focus:ring-2 focus:ring-blue-500 text-xs sm:text-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  {language === 'bn' ? 'ইমেইল এড্রেস (ঐচ্ছিক)' : 'Email Address (Optional)'}
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@company.com"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-hidden focus:ring-2 focus:ring-blue-500 text-xs sm:text-sm"
                />
              </div>

              {/* WhatsApp Option */}
              <div className="sm:col-span-2 bg-blue-50/60 border border-blue-100 rounded-xl p-3">
                <div className="flex items-center justify-between">
                  <label className="text-xs font-semibold text-blue-900 flex items-center gap-2">
                    <MessageSquare className="w-4 h-4 text-emerald-600" />
                    {language === 'bn' ? 'হোয়াটসঅ্যাপ নম্বর' : 'WhatsApp Number for Quick Discussions'}
                  </label>
                  <label className="flex items-center gap-1.5 text-xs text-slate-600 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={sameAsPhone}
                      onChange={(e) => setSameAsPhone(e.target.checked)}
                      className="rounded-sm text-blue-600 focus:ring-blue-500"
                    />
                    <span>{language === 'bn' ? 'ফোন নম্বরের সাথে অভিন্ন' : 'Same as Phone Number'}</span>
                  </label>
                </div>

                {!sameAsPhone && (
                  <input
                    type="tel"
                    value={whatsapp}
                    onChange={(e) => setWhatsapp(e.target.value)}
                    placeholder="01XXXXXXXXX"
                    className="w-full mt-2 px-3.5 py-2 bg-white rounded-lg border border-blue-200 text-xs focus:ring-2 focus:ring-blue-500"
                  />
                )}
              </div>
            </div>
          </div>

          {/* 3. Project Requirements & Scope */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-1.5">
              <Layers className="w-3.5 h-3.5 text-blue-600" />
              {language === 'bn' ? 'প্রজেক্ট বিবরণ ও টেকনিক্যাল স্পেসিফিকেশন' : 'Project Scope & Technical Details'}
            </h3>

            <div className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    {language === 'bn' ? 'প্রজেক্ট ক্যাটাগরি' : 'Primary Project Domain'}
                  </label>
                  <select
                    value={projectCategory}
                    onChange={(e) => setProjectCategory(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 bg-white text-xs sm:text-sm focus:ring-2 focus:ring-blue-500"
                  >
                    {PROJECT_CATEGORIES.map(cat => (
                      <option key={cat} value={cat}>{cat}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    {language === 'bn' ? 'ইন্ডাস্ট্রি / সেক্টর' : 'Industry / Business Sector'}
                  </label>
                  <select
                    value={industry}
                    onChange={(e) => setIndustry(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 bg-white text-xs sm:text-sm focus:ring-2 focus:ring-blue-500"
                  >
                    {INDUSTRIES.map(ind => (
                      <option key={ind} value={ind}>{ind}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    {language === 'bn' ? 'প্রজেক্টের নাম / হেডলাইন' : 'Project Title / Name'} <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={projectTitle}
                    onChange={(e) => setProjectTitle(e.target.value)}
                    placeholder={language === 'bn' ? 'উদা: Multi-Vendor E-Commerce Platform' : 'e.g. Next.js SaaS Dispatch Dashboard'}
                    className={`w-full px-3.5 py-2.5 rounded-xl border ${
                      errors.projectTitle ? 'border-rose-400 bg-rose-50/40' : 'border-slate-300'
                    } text-xs sm:text-sm focus:ring-2 focus:ring-blue-500`}
                  />
                  {errors.projectTitle && <p className="text-[11px] text-rose-500 mt-1">{errors.projectTitle}</p>}
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    {language === 'bn' ? 'পছন্দের টেক স্ট্যাক (ঐচ্ছিক)' : 'Preferred Tech Stack (Optional)'}
                  </label>
                  <input
                    type="text"
                    value={techStack}
                    onChange={(e) => setTechStack(e.target.value)}
                    placeholder="React, Next.js, Node.js, Tailwind, Power BI..."
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs sm:text-sm focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>

              {/* Requirements */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  {language === 'bn' ? 'প্রজেক্টের ফিচার, উদ্দেশ্য ও বিস্তারিত বিবরণ' : 'Project Scope, Features & Specific Requirements'} <span className="text-rose-500">*</span>
                </label>
                <textarea
                  rows={4}
                  value={requirements}
                  onChange={(e) => setRequirements(e.target.value)}
                  placeholder={language === 'bn' 
                    ? 'আপনার প্রজেক্টের কী কী ফিচার প্রয়োজন, কোনো রেফারেন্স ওয়েবসাইট/অ্যাপ আছে কি না, বা বিশেষ কোনো রিকোয়ারমেন্ট বিস্তারিত লিখুন...' 
                    : 'Describe the key functionalities, API integrations, page layouts, design references, or specific deliverables you require...'}
                  className={`w-full px-3.5 py-2.5 rounded-xl border ${
                    errors.requirements ? 'border-rose-400 bg-rose-50/40' : 'border-slate-300'
                  } text-xs sm:text-sm focus:ring-2 focus:ring-blue-500 leading-relaxed`}
                />
                {errors.requirements && <p className="text-[11px] text-rose-500 mt-1">{errors.requirements}</p>}
              </div>

              {/* Deadline & Contact Preference */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1 flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-blue-600" />
                    {language === 'bn' ? 'টার্গেট ডেলিভারি ডেট / ডেডলাইন' : 'Target Delivery Date / Deadline'} <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="date"
                    value={deadline}
                    min={new Date().toISOString().slice(0, 10)}
                    onChange={(e) => setDeadline(e.target.value)}
                    className={`w-full px-3.5 py-2.5 rounded-xl border ${
                      errors.deadline ? 'border-rose-400 bg-rose-50/40' : 'border-slate-300'
                    } text-xs sm:text-sm focus:ring-2 focus:ring-blue-500`}
                  />
                  {errors.deadline && <p className="text-[11px] text-rose-500 mt-1">{errors.deadline}</p>}
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    {language === 'bn' ? 'পছন্দের যোগাযোগ মাধ্যম' : 'Preferred Communication Channel'}
                  </label>
                  <select
                    value={preferredContact}
                    onChange={(e) => setPreferredContact(e.target.value as any)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 bg-white text-xs sm:text-sm focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="WhatsApp">{language === 'bn' ? 'WhatsApp (দ্রুততম রেসপন্স)' : 'WhatsApp (Fastest Direct Response)'}</option>
                    <option value="Google Meet">{language === 'bn' ? 'Google Meet (লাইভ আলোচনা)' : 'Google Meet (Technical Call)'}</option>
                    <option value="Phone Call">{language === 'bn' ? 'সরাসরি ফোন কল' : 'Direct Phone Call'}</option>
                    <option value="Email">{language === 'bn' ? 'অফিসিয়াল ইমেইল' : 'Official Email'}</option>
                  </select>
                </div>
              </div>

              {/* File Attachment Uploader */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                  {language === 'bn' ? 'প্রজেক্ট ব্রিফ, ডকস বা ওয়্যারফ্রেম ফাইল সংযুক্ত করুন' : 'Attach Brief, Wireframes, Specs or Assets'}
                </label>
                <div className="border-2 border-dashed border-slate-200 hover:border-blue-400 rounded-2xl p-4 text-center bg-slate-50/60 transition-colors">
                  <input
                    type="file"
                    multiple
                    id="order-file-upload"
                    onChange={handleFileUpload}
                    className="hidden"
                  />
                  <label htmlFor="order-file-upload" className="cursor-pointer block">
                    <UploadCloud className="w-7 h-7 text-blue-500 mx-auto mb-1" />
                    <span className="text-xs font-bold text-blue-600 hover:underline">
                      {language === 'bn' ? 'ফাইল সিলেক্ট করতে ক্লিক করুন' : 'Click to upload files'}
                    </span>
                    <span className="text-[11px] text-slate-400 block mt-0.5">
                      PDF, DOCX, ZIP, PNG, JPG, Figma export (Max 25MB)
                    </span>
                  </label>
                </div>

                {attachments.length > 0 && (
                  <div className="mt-2.5 space-y-1.5">
                    {attachments.map((file) => (
                      <div key={file.id} className="flex items-center justify-between bg-blue-50/80 border border-blue-200 px-3 py-1.5 rounded-lg text-xs">
                        <div className="flex items-center gap-2 truncate">
                          <FileText className="w-4 h-4 text-blue-600 shrink-0" />
                          <span className="font-semibold text-slate-800 truncate">{file.name}</span>
                          <span className="text-[10px] text-slate-500">({file.size})</span>
                        </div>
                        <button
                          type="button"
                          onClick={() => removeAttachment(file.id)}
                          className="text-rose-500 hover:text-rose-700 p-1 cursor-pointer"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>

            </div>
          </div>

          {/* Delivery Note Box */}
          <div className="bg-emerald-50/80 border border-emerald-200 rounded-2xl p-3.5 flex items-start gap-2.5 text-xs text-emerald-950">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
            <div className="leading-relaxed">
              <strong>{language === 'bn' ? 'ক্র্যাফলিন ইঞ্জিনিয়ারিং প্রসেস: ' : 'Kraflyn Engineering Velocity: '}</strong>
              {language === 'bn' 
                ? 'অর্ডার সাবমিট হওয়ার ১৫-৩০ মিনিটের মধ্যে আমাদের সিনিয়র সফটওয়্যার আর্কিটেক্ট WhatsApp এ নক করে বিস্তারিত আলোচনা ও টাইমলাইন চূড়ান্ত করবেন।' 
                : 'Within 15-30 minutes of submission, a dedicated Senior Architect will connect with you via WhatsApp to align milestones and kickoff sprint.'}
            </div>
          </div>

          {/* Footer Submit Button */}
          <div className="pt-2 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3">
            <div className="text-xs text-slate-500 text-center sm:text-left flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>{language === 'bn' ? '১০০% সোর্স কোড ও আইপি ওনারশিপ নিশ্চিত' : '100% Source Code & IP Ownership Guaranteed'}</span>
            </div>

            <div className="flex items-center gap-3 w-full sm:w-auto">
              <button
                type="button"
                onClick={closeOrderModal}
                className="w-1/3 sm:w-auto px-4 py-2.5 border border-slate-300 text-slate-700 hover:bg-slate-100 rounded-xl text-xs font-semibold cursor-pointer"
              >
                {language === 'bn' ? 'বাতিল' : 'Cancel'}
              </button>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-2/3 sm:w-auto px-6 py-2.5 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold text-xs sm:text-sm rounded-xl shadow-md shadow-blue-500/20 flex items-center justify-center gap-2 cursor-pointer transition-all disabled:opacity-50"
              >
                {isSubmitting ? (
                  <span>{language === 'bn' ? 'প্রজেক্ট সাবমিট হচ্ছে...' : 'Submitting Project...'}</span>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>{language === 'bn' ? 'অর্ডার সাবমিট করুন' : 'Submit Project Order'}</span>
                  </>
                )}
              </button>
            </div>
          </div>

        </form>

      </div>
    </div>
  );
};
