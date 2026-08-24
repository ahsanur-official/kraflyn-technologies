import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { AcademicOrder } from '../../types';
import { 
  X, 
  Search, 
  Package, 
  CheckCircle2, 
  MessageSquare, 
  UserCheck, 
  Calendar, 
  AlertCircle 
} from 'lucide-react';

export const OrderTrackerModal: React.FC = () => {
  const { 
    orderTrackerOpen, 
    closeOrderTracker, 
    orders, 
    selectedOrderIdForTracking,
    recentTrackedIds,
    addRecentTrackedId,
    language,
    t 
  } = useApp();

  const [searchQuery, setSearchQuery] = useState(selectedOrderIdForTracking || '');
  const [searchedOrder, setSearchedOrder] = useState<AcademicOrder | null>(() => {
    if (selectedOrderIdForTracking) {
      return orders.find(o => o.id === selectedOrderIdForTracking) || null;
    }
    return orders[0] || null;
  });
  const [errorMsg, setErrorMsg] = useState('');

  // Synchronize when selectedOrderIdForTracking or modal opens
  React.useEffect(() => {
    if (orderTrackerOpen) {
      if (selectedOrderIdForTracking) {
        setSearchQuery(selectedOrderIdForTracking);
        const match = orders.find(o => o.id === selectedOrderIdForTracking);
        if (match) {
          setSearchedOrder(match);
          setErrorMsg('');
        }
      } else if (orders.length > 0 && !searchedOrder) {
        setSearchedOrder(orders[0]);
      }
    }
  }, [orderTrackerOpen, selectedOrderIdForTracking, orders]);

  if (!orderTrackerOpen) return null;

  const handleSelectRecent = (orderId: string) => {
    setSearchQuery(orderId);
    setErrorMsg('');
    const found = orders.find(o => o.id.toLowerCase() === orderId.toLowerCase());
    if (found) {
      setSearchedOrder(found);
      addRecentTrackedId(found.id);
    } else {
      setErrorMsg(language === 'bn' ? 'অর্ডারটি সিস্টেমে পাওয়া যায়নি।' : 'Order not found.');
    }
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');
    const query = searchQuery.trim().toLowerCase();
    if (!query) {
      setErrorMsg(language === 'bn' ? 'অনুগ্রহ করে আপনার Order ID অথবা মোবাইল নম্বর লিখুন' : 'Please enter your Order ID or phone number');
      return;
    }

    const found = orders.find(
      o => o.id.toLowerCase().includes(query) || 
           o.phone.replace(/[^0-9]/g, '').includes(query.replace(/[^0-9]/g, '')) ||
           o.whatsapp.replace(/[^0-9]/g, '').includes(query.replace(/[^0-9]/g, ''))
    );

    if (found) {
      setSearchedOrder(found);
      addRecentTrackedId(found.id);
      setErrorMsg('');
    } else {
      setErrorMsg(language === 'bn' ? 'কোনো অর্ডার পাওয়া যায়নি। সঠিক Order ID বা ফোন নম্বর দিন।' : 'No order found with this ID or phone number.');
      setSearchedOrder(null);
    }
  };

  const steps = [
    { 
      key: 'order_received', 
      title: language === 'bn' ? 'অর্ডার গ্রহণ করা হয়েছে' : 'Order Received', 
      desc: language === 'bn' ? 'অর্ডার সিস্টেমে গৃহীত হয়েছে' : 'Order placed and logged in system' 
    },
    { 
      key: 'mentor_assigned', 
      title: language === 'bn' ? 'মেন্টর নিযুক্ত' : 'Mentor Assigned', 
      desc: language === 'bn' ? 'কোর্স অনুযায়ী বিশেষজ্ঞ মেন্টর নির্ধারিত' : 'Specialized mentor allocated' 
    },
    { 
      key: 'contacted_student', 
      title: language === 'bn' ? 'শিক্ষার্থীর সাথে যোগাযোগ' : 'Contacted Student', 
      desc: language === 'bn' ? 'WhatsApp এ রিকোয়ারমেন্ট কনফার্মেশন' : 'Requirements aligned via WhatsApp' 
    },
    { 
      key: 'in_progress', 
      title: language === 'bn' ? 'ডেলিভারি প্রস্তুত হচ্ছে' : 'Delivery In Progress', 
      desc: language === 'bn' ? 'সাপোর্ট সেশন / ডেলিভারি তৈরি হচ্ছে' : 'Solving, mentoring, and code drafting' 
    },
    { 
      key: 'delivered_completed', 
      title: language === 'bn' ? 'ডেলিভারি সম্পন্ন' : 'Delivered & Support', 
      desc: language === 'bn' ? 'ডেলিভারি সম্পন্ন ও ফ্রি রিভিশন' : 'Delivered with post-delivery revisions' 
    }
  ];

  const getStepIndex = (status: AcademicOrder['status']) => {
    switch (status) {
      case 'order_received': return 0;
      case 'mentor_assigned': return 1;
      case 'contacted_student': return 2;
      case 'in_progress': return 3;
      case 'delivered_completed': return 4;
      default: return 0;
    }
  };

  const currentStepIdx = searchedOrder ? getStepIndex(searchedOrder.status) : 0;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/70 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 animate-in fade-in">
      <div className="bg-white rounded-3xl shadow-2xl border border-slate-200 max-w-2xl w-full overflow-hidden animate-in zoom-in-95 duration-200 max-h-[90vh] flex flex-col">
        
        {/* Modal Header */}
        <div className="bg-slate-900 text-white p-4 sm:p-5 flex items-center justify-between shrink-0 border-b border-slate-800 gap-3">
          <div className="flex items-center gap-3 min-w-0 flex-1">
            <div className="w-10 h-10 rounded-xl bg-blue-600/30 border border-blue-500/40 flex items-center justify-center text-blue-400 shrink-0">
              <Package className="w-5 h-5" />
            </div>
            <div className="min-w-0 flex-1">
              <h3 className="text-base sm:text-lg font-bold text-white leading-snug">
                {t.trackOrderHeading || (language === 'bn' ? 'অর্ডার স্ট্যাটাস ট্র্যাকার' : 'Live Order Tracker')}
              </h3>
              <p className="text-xs text-slate-400 leading-normal mt-0.5">
                {t.trackOrderSubtitle || (language === 'bn' ? 'আপনার অর্ডার আইডি বা ফোন নম্বর দিয়ে লাইভ অগ্রগতি দেখুন' : 'Track your project status in real-time with Order ID or Phone')}
              </p>
            </div>
          </div>

          <button
            onClick={closeOrderTracker}
            aria-label="Close"
            className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-slate-300 hover:text-white transition-all cursor-pointer shrink-0"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Search Bar */}
        <div className="p-5 border-b border-slate-100 bg-slate-50">
          <form onSubmit={handleSearch} className="flex gap-2">
            <div className="relative flex-1">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={t.orderIdOrPhonePlaceholder}
                className="w-full pl-10 pr-3.5 py-2.5 bg-white border border-slate-300 rounded-xl text-xs sm:text-sm focus:outline-hidden focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <button
              type="submit"
              className="px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-xs sm:text-sm font-bold rounded-xl shadow-xs transition-colors cursor-pointer"
            >
              {t.searchBtn}
            </button>
          </form>

          {/* Quick Select Recent Orders */}
          {recentTrackedIds.length > 0 && (
            <div className="mt-3 flex items-center gap-1.5 flex-wrap">
              <span className="text-[11px] font-bold text-slate-500">
                {language === 'bn' ? 'সম্প্রতি দেখা অর্ডার:' : 'Recent Orders:'}
              </span>
              {recentTrackedIds.slice(0, 4).map((id) => (
                <button
                  key={id}
                  type="button"
                  onClick={() => handleSelectRecent(id)}
                  className={`px-2 py-0.5 rounded-lg text-[11px] font-mono font-bold transition-all cursor-pointer ${
                    searchedOrder?.id === id
                      ? 'bg-blue-600 text-white shadow-xs'
                      : 'bg-white text-slate-700 border border-slate-200 hover:border-blue-300 hover:bg-blue-50'
                  }`}
                >
                  {id}
                </button>
              ))}
            </div>
          )}

          {errorMsg && (
            <div className="mt-2 text-xs text-rose-600 flex items-center gap-1.5">
              <AlertCircle className="w-4 h-4" />
              <span>{errorMsg}</span>
            </div>
          )}
        </div>

        {/* Order Details Body */}
        <div className="overflow-y-auto custom-scrollbar p-5 sm:p-6 space-y-6 flex-1 text-slate-800 text-xs sm:text-sm">
          {searchedOrder ? (
            <>
              {/* Order Info Banner */}
              <div className="bg-blue-50/80 border border-blue-200/80 rounded-2xl p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-blue-600">
                    {language === 'bn' ? 'সক্রিয় একাডেমিক অর্ডার' : 'Active Academic Order'}
                  </span>
                  <h4 className="text-base font-black text-slate-900 font-mono">
                    {searchedOrder.id}
                  </h4>
                  <p className="text-xs text-slate-600 mt-0.5">
                    {searchedOrder.customerName} • {searchedOrder.university}
                  </p>
                </div>

                <div className="text-left sm:text-right">
                  <span className="text-[10px] text-slate-400 block">{t.deadline}</span>
                  <span className="text-xs font-bold text-slate-800 flex items-center sm:justify-end gap-1">
                    <Calendar className="w-3.5 h-3.5 text-blue-600" />
                    {searchedOrder.deadline}
                  </span>
                </div>
              </div>

              {/* Progress Stepper */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4">
                  {t.deliveryProgress}
                </h4>

                <div className="relative pl-6 space-y-6 before:absolute before:left-2.5 before:top-2 before:bottom-2 before:w-0.5 before:bg-slate-200">
                  {steps.map((step, idx) => {
                    const isCompleted = idx < currentStepIdx;
                    const isCurrent = idx === currentStepIdx;

                    return (
                      <div key={step.key} className="relative flex items-start gap-3">
                        {/* Step Marker */}
                        <div 
                          className={`absolute -left-6 w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold transition-all ${
                            isCompleted 
                              ? 'bg-emerald-500 text-white' 
                              : isCurrent 
                              ? 'bg-blue-600 text-white ring-4 ring-blue-100 animate-pulse' 
                              : 'bg-slate-200 text-slate-500'
                          }`}
                        >
                          {isCompleted ? <CheckCircle2 className="w-3.5 h-3.5" /> : idx + 1}
                        </div>

                        <div>
                          <div className={`font-bold text-xs sm:text-sm ${
                            isCurrent ? 'text-blue-600 font-extrabold' : isCompleted ? 'text-slate-800' : 'text-slate-400'
                          }`}>
                            {step.title}
                          </div>
                          <div className="text-[11px] text-slate-500 mt-0.5">
                            {step.desc}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Assigned Mentor & Deliverables Card */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="border border-slate-200 rounded-2xl p-3.5 bg-slate-50">
                  <span className="text-[10px] font-bold uppercase text-slate-400 block mb-1">
                    {t.courseName} & {t.selectedServices}
                  </span>
                  <div className="font-bold text-slate-800 text-xs">
                    {searchedOrder.courseName}
                  </div>
                  <div className="text-[11px] text-blue-700 mt-0.5">
                    {searchedOrder.items.map(i => i.serviceTitle).join(', ')}
                  </div>
                </div>

                <div className="border border-slate-200 rounded-2xl p-3.5 bg-slate-50">
                  <span className="text-[10px] font-bold uppercase text-slate-400 block mb-1">
                    {t.assignedMentor}
                  </span>
                  <div className="font-bold text-slate-800 text-xs flex items-center gap-1.5">
                    <UserCheck className="w-4 h-4 text-emerald-600" />
                    <span>{searchedOrder.assignedMentorName || (language === 'bn' ? 'একাডেমিক টিম সমন্বয় করছে' : 'Mentorship Team Coordinating')}</span>
                  </div>
                  <div className="text-[11px] text-slate-500 mt-0.5">
                    Academic Quality Lead
                  </div>
                </div>
              </div>

              {/* Direct WhatsApp Contact CTA */}
              <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-4 flex items-center justify-between gap-3">
                <div className="text-xs text-emerald-900">
                  <strong className="block font-bold">{language === 'bn' ? 'জরুরি আপডেট প্রয়োজন?' : 'Need urgent status update?'}</strong>
                  {language === 'bn' ? 'আমাদের সাপোর্ট টিম WhatsApp এ সার্বক্ষণিক সক্রিয়।' : 'Our support team is available 24/7 on WhatsApp.'}
                </div>
                <a
                  href={`https://wa.me/8801712345678?text=Hello%20Kraflyn%20Technologies%20Team,%20checking%20status%20for%20order%20${searchedOrder.id}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shrink-0 px-3.5 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl font-bold text-xs flex items-center gap-1.5 transition-colors"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>WhatsApp Chat</span>
                </a>
              </div>
            </>
          ) : (
            <div className="py-12 text-center text-slate-400">
              <Package className="w-12 h-12 mx-auto mb-2 opacity-50" />
              <p>{t.orderNotFound}</p>
            </div>
          )}
        </div>

      </div>
    </div>
  );
};
