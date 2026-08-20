import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { UNIVERSITIES, DEPARTMENTS } from '../../data/mockData';
import { AttachmentFile } from '../../types';
import { 
  X, 
  Send, 
  UploadCloud, 
  Trash2, 
  FileText, 
  Phone, 
  MessageSquare, 
  Building2, 
  GraduationCap, 
  BookOpen, 
  Calendar, 
  CheckCircle2, 
  ShieldCheck,
  Clock,
  Sparkles,
  Info
} from 'lucide-react';

export const OrderModal: React.FC = () => {
  const { 
    orderModalOpen, 
    closeOrderModal, 
    quickOrderService, 
    cartItems, 
    cartTotal, 
    placeOrder 
  } = useApp();

  const [customerName, setCustomerName] = useState('');
  const [phone, setPhone] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [sameAsPhone, setSameAsPhone] = useState(true);
  const [university, setUniversity] = useState(UNIVERSITIES[0]);
  const [customUni, setCustomUni] = useState('');
  const [department, setDepartment] = useState(DEPARTMENTS[0]);
  const [batchOrSemester, setBatchOrSemester] = useState('3rd Year / 6th Semester');
  const [courseName, setCourseName] = useState('');
  const [courseCode, setCourseCode] = useState('');
  const [requirements, setRequirements] = useState('');
  const [deadline, setDeadline] = useState('');
  const [preferredContact, setPreferredContact] = useState<'WhatsApp' | 'Phone Call' | 'Google Meet' | 'Email'>('WhatsApp');
  const [attachments, setAttachments] = useState<AttachmentFile[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

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
        packageTier: 'Standard Support' as const,
        urgencyFee: 0,
        totalPrice: quickOrderService.startingPrice,
        quantity: 1
      }]
    : cartItems.length > 0
    ? cartItems
    : [{
        id: 'general-support',
        serviceId: 'general',
        serviceTitle: 'Academic Guidance & Problem Solving',
        category: 'Academic Support' as const,
        basePrice: 500,
        packageTier: 'Standard Support' as const,
        urgencyFee: 0,
        totalPrice: 500,
        quantity: 1
      }];

  const orderEstimatedTotal = isDirectServiceOrder && quickOrderService
    ? quickOrderService.startingPrice
    : cartItems.length > 0
    ? cartTotal
    : 500;

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;
    const files: File[] = Array.from(e.target.files);
    
    const newAttachments: AttachmentFile[] = files.map((file: File) => {
      const sizeInMB = (file.size / (1024 * 1024)).toFixed(2);
      const ext = file.name.split('.').pop()?.toUpperCase() || 'FILE';
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
    if (!customerName.trim()) errs.customerName = 'আপনার নাম উল্লেখ করুন';
    if (!phone.trim()) errs.phone = 'সচল মোবাইল নম্বর প্রদান করুন';
    if (!courseName.trim()) errs.courseName = 'কোর্সের নাম বা বিষয়ের নাম লিখুন';
    if (!requirements.trim() || requirements.trim().length < 10) {
      errs.requirements = 'আপনার কী কী বিষয়ে সহায়তা প্রয়োজন তা বিস্তারিত লিখুন (কমপক্ষে ১০ অক্ষর)';
    }
    if (!deadline) errs.deadline = 'সম্ভাব্য ডেলিভারির তারিখ বা ডেডলাইন উল্লেখ করুন';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmitOrder = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);

    const finalUniversity = university === 'Other / International University' && customUni 
      ? customUni 
      : university;

    const finalWhatsapp = sameAsPhone ? phone : (whatsapp || phone);

    setTimeout(() => {
      placeOrder({
        customerName,
        phone,
        whatsapp: finalWhatsapp,
        university: finalUniversity,
        department,
        batchOrSemester,
        courseName,
        courseCode,
        requirements,
        deadline,
        preferredContact,
        attachments
      });
      setIsSubmitting(false);
    }, 600);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/70 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 animate-in fade-in">
      <div className="bg-white rounded-2xl shadow-2xl border border-slate-200 max-w-3xl w-full max-h-[92vh] flex flex-col overflow-hidden animate-in zoom-in-95 duration-200">
        
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-700 via-blue-800 to-indigo-900 text-white p-5 sm:p-6 shrink-0 relative">
          <button
            onClick={closeOrderModal}
            className="absolute top-5 right-5 p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-white/15 border border-white/20 flex items-center justify-center text-amber-300">
              <GraduationCap className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-xl font-bold tracking-tight">
                Academic Support Order
              </h2>
              <p className="text-xs text-blue-100 mt-0.5">
                আপনার প্রয়োজনীয় বিবরণ দিন — আমাদের টিম সরাসরি যোগাযোগ করে ডেলিভারি কনফার্ম করবে
              </p>
            </div>
          </div>

          {/* Reassurance pill */}
          <div className="mt-3.5 inline-flex items-center gap-2 bg-emerald-500/20 border border-emerald-400/40 text-emerald-100 text-xs px-3 py-1 rounded-full">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-300" />
            <span>অগ্রিম কোনো পেমেন্ট প্রয়োজন নেই • সরাসরি WhatsApp এ যোগাযোগ</span>
          </div>
        </div>

        {/* Form Body */}
        <form onSubmit={handleSubmitOrder} className="overflow-y-auto p-5 sm:p-7 space-y-6 flex-1 text-slate-800 text-sm">
          
          {/* 1. Selected Services Summary */}
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-bold uppercase text-slate-500 tracking-wider flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-blue-600" />
                অর্ডারকৃত সার্ভিসসমূহ ({itemsToOrder.length})
              </span>
              <span className="text-xs font-semibold text-blue-600">
                আনুমানিক ফি: ৳{orderEstimatedTotal}
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

          {/* 2. Personal & Contact Details */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-1.5">
              <Phone className="w-3.5 h-3.5 text-blue-600" />
              আপনার ব্যক্তিগত ও যোগাযোগের তথ্য
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  আপনার পূর্ণ নাম (Full Name) <span className="text-rose-500">*</span>
                </label>
                <input
                  type="text"
                  value={customerName}
                  onChange={(e) => setCustomerName(e.target.value)}
                  placeholder="যেমন: মোঃ এহসানুর রহমান"
                  className={`w-full px-3.5 py-2.5 rounded-xl border ${
                    errors.customerName ? 'border-rose-400 bg-rose-50/40' : 'border-slate-300'
                  } focus:outline-hidden focus:ring-2 focus:ring-blue-500 text-xs sm:text-sm`}
                />
                {errors.customerName && <p className="text-[11px] text-rose-500 mt-1">{errors.customerName}</p>}
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  সচল মোবাইল নম্বর (Phone Number) <span className="text-rose-500">*</span>
                </label>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="017XXXXXXXX"
                  className={`w-full px-3.5 py-2.5 rounded-xl border ${
                    errors.phone ? 'border-rose-400 bg-rose-50/40' : 'border-slate-300'
                  } focus:outline-hidden focus:ring-2 focus:ring-blue-500 text-xs sm:text-sm`}
                />
                {errors.phone && <p className="text-[11px] text-rose-500 mt-1">{errors.phone}</p>}
              </div>

              {/* WhatsApp Option */}
              <div className="sm:col-span-2 bg-blue-50/60 border border-blue-100 rounded-xl p-3">
                <div className="flex items-center justify-between">
                  <label className="text-xs font-semibold text-blue-900 flex items-center gap-2">
                    <MessageSquare className="w-4 h-4 text-emerald-600" />
                    হোয়াটসঅ্যাপ (WhatsApp) নম্বর
                  </label>
                  <label className="flex items-center gap-1.5 text-xs text-slate-600 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={sameAsPhone}
                      onChange={(e) => setSameAsPhone(e.target.checked)}
                      className="rounded-sm text-blue-600 focus:ring-blue-500"
                    />
                    <span>মোবাইল নম্বরের মতোই</span>
                  </label>
                </div>

                {!sameAsPhone && (
                  <input
                    type="tel"
                    value={whatsapp}
                    onChange={(e) => setWhatsapp(e.target.value)}
                    placeholder="WhatsApp নম্বর লিখুন (01XXXXXXXXX)"
                    className="w-full mt-2 px-3.5 py-2 bg-white rounded-lg border border-blue-200 text-xs focus:ring-2 focus:ring-blue-500"
                  />
                )}
              </div>

              {/* University & Department */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  বিশ্ববিদ্যালয় / কলেজ (University) <span className="text-rose-500">*</span>
                </label>
                <select
                  value={university}
                  onChange={(e) => setUniversity(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 bg-white text-xs sm:text-sm focus:ring-2 focus:ring-blue-500"
                >
                  {UNIVERSITIES.map(u => (
                    <option key={u} value={u}>{u}</option>
                  ))}
                </select>
                {university === 'Other / International University' && (
                  <input
                    type="text"
                    value={customUni}
                    onChange={(e) => setCustomUni(e.target.value)}
                    placeholder="আপনার বিশ্ববিদ্যালয়ের নাম লিখুন"
                    className="w-full mt-2 px-3 py-2 border border-slate-300 rounded-lg text-xs"
                  />
                )}
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  বিভাগ / বিষয় (Department) <span className="text-rose-500">*</span>
                </label>
                <select
                  value={department}
                  onChange={(e) => setDepartment(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 bg-white text-xs sm:text-sm focus:ring-2 focus:ring-blue-500"
                >
                  {DEPARTMENTS.map(d => (
                    <option key={d} value={d}>{d}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* 3. Academic Requirements */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-1.5">
              <BookOpen className="w-3.5 h-3.5 text-blue-600" />
              কোর্স ও সাপোর্টের বিস্তারিত বিবরণ
            </h3>

            <div className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    কোর্সের নাম (Course Name) <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={courseName}
                    onChange={(e) => setCourseName(e.target.value)}
                    placeholder="যেমন: Data Structures / DSP / Thesis"
                    className={`w-full px-3.5 py-2.5 rounded-xl border ${
                      errors.courseName ? 'border-rose-400 bg-rose-50/40' : 'border-slate-300'
                    } text-xs sm:text-sm focus:ring-2 focus:ring-blue-500`}
                  />
                  {errors.courseName && <p className="text-[11px] text-rose-500 mt-1">{errors.courseName}</p>}
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    কোর্স কোড (ঐচ্ছিক)
                  </label>
                  <input
                    type="text"
                    value={courseCode}
                    onChange={(e) => setCourseCode(e.target.value)}
                    placeholder="যেমন: CSE-225 / EEE-4103"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs sm:text-sm focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>

              {/* Problem statement / requirements */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  কী কী বিষয়ে সহায়তা লাগবে? (বিস্তারিত লিখুন) <span className="text-rose-500">*</span>
                </label>
                <textarea
                  rows={4}
                  value={requirements}
                  onChange={(e) => setRequirements(e.target.value)}
                  placeholder="যেমন: ল্যাব অ্যাসাইনমেন্টের কোডে সেগমেন্টেশন এরর হচ্ছে, বা থিসিসের চ্যাপ্টার ৩ রিসার্চ মেথডলজি বুঝতে পারছি না, অথবা পরীক্ষার আগে ১-অন-১ লাইভ সেশন প্রয়োজন..."
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
                    কাঙ্ক্ষিত ডেলিভারির সময় / ডেডলাইন <span className="text-rose-500">*</span>
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
                    যোগাযোগের পছন্দের মাধ্যম (Contact Channel)
                  </label>
                  <select
                    value={preferredContact}
                    onChange={(e) => setPreferredContact(e.target.value as any)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 bg-white text-xs sm:text-sm focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="WhatsApp">WhatsApp (সবচেয়ে দ্রুত রেসপন্স)</option>
                    <option value="Phone Call">সরাসরি ফোন কল</option>
                    <option value="Google Meet">Google Meet (লাইভ আলোচনা)</option>
                    <option value="Email">ইমেইল</option>
                  </select>
                </div>
              </div>

              {/* File Attachment Uploader */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                  প্রশ্নপত্র, অ্যাসাইনমেন্ট ড্রাফট বা কোড ফাইল আপলোড (ঐচ্ছিক)
                </label>
                <div className="border-2 border-dashed border-slate-200 hover:border-blue-400 rounded-xl p-4 text-center bg-slate-50/60 transition-colors">
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
                      ক্লিক করে ফাইল সিলেক্ট করুন
                    </span>
                    <span className="text-[11px] text-slate-400 block mt-0.5">
                      PDF, DOCX, CPP, PY, ZIP বা ছবি ফাইল সংযুক্ত করা যাবে
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
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-3.5 flex items-start gap-2.5 text-xs text-amber-900">
            <Info className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
            <div className="leading-relaxed">
              <strong>ডেলিভারি প্রসেস:</strong> অর্ডার সম্পন্ন হওয়ার পর আমাদের একাডেমিক টিম ১৫-৩০ মিনিটের মধ্যে আপনার WhatsApp/ফোনে কল বা মেসেজ দিয়ে বিস্তারিত শুনে কাজ বুঝিয়ে দিবে।
            </div>
          </div>

          {/* Footer Submit Button */}
          <div className="pt-2 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3">
            <div className="text-xs text-slate-500 text-center sm:text-left">
              🔒 গোপনীয়তা ও একাডেমিক সততা বজায় রাখা হবে
            </div>

            <div className="flex items-center gap-3 w-full sm:w-auto">
              <button
                type="button"
                onClick={closeOrderModal}
                className="w-1/3 sm:w-auto px-4 py-2.5 border border-slate-300 text-slate-700 hover:bg-slate-100 rounded-xl text-xs font-semibold cursor-pointer"
              >
                বাতিল করুন
              </button>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-2/3 sm:w-auto px-6 py-2.5 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold text-xs sm:text-sm rounded-xl shadow-md shadow-blue-500/20 flex items-center justify-center gap-2 cursor-pointer transition-all disabled:opacity-50"
              >
                {isSubmitting ? (
                  <span>অর্ডার প্রসেসিং হচ্ছে...</span>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>অর্ডার কনফার্ম করুন (Place Order)</span>
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
