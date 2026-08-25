import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { 
  X, 
  CheckCircle2, 
  Clock, 
  ShieldCheck, 
  ArrowRight, 
  Sparkles, 
  Plus,
  Layers,
  ChevronRight
} from 'lucide-react';

export const ServiceDetailModal: React.FC = () => {
  const { 
    serviceDetailModalService, 
    closeServiceDetail, 
    addToCart, 
    openOrderModal,
    bilingualServices,
    language,
    t 
  } = useApp();

  const [selectedSubServiceId, setSelectedSubServiceId] = useState<string | null>(null);

  if (!serviceDetailModalService) return null;

  const rawService = serviceDetailModalService;
  const bilingualData = bilingualServices.find(s => s.id === rawService.id);

  const title = bilingualData ? bilingualData.title[language] : rawService.title;
  const description = bilingualData ? bilingualData.fullDesc[language] : rawService.description;
  const deliverables = bilingualData ? bilingualData.deliverables[language] : rawService.deliverables;

  // SubServices support
  const subServices = bilingualData?.subServices || rawService.subServices;
  const activeSubService = subServices && selectedSubServiceId 
    ? subServices.find(sub => sub.id === selectedSubServiceId)
    : null;

  const displayPrice = activeSubService 
    ? activeSubService.price 
    : rawService.startingPrice;

  const displayTurnaround = activeSubService 
    ? activeSubService.turnaround 
    : (bilingualData?.typicalTurnaround || rawService.turnaround || '24 - 48 Hours');

  const handleAddToCart = () => {
    const serviceToOrder = activeSubService 
      ? {
          ...rawService,
          id: `${rawService.id}__${activeSubService.id}`,
          title: typeof activeSubService.title === 'object' ? activeSubService.title[language] : activeSubService.title,
          startingPrice: activeSubService.price,
          turnaround: activeSubService.turnaround
        }
      : rawService;

    addToCart(serviceToOrder as any);
    closeServiceDetail();
  };

  const handleOrderDirectly = () => {
    const serviceToOrder = activeSubService 
      ? {
          ...rawService,
          id: `${rawService.id}__${activeSubService.id}`,
          title: typeof activeSubService.title === 'object' ? activeSubService.title[language] : activeSubService.title,
          startingPrice: activeSubService.price,
          turnaround: activeSubService.turnaround
        }
      : rawService;

    closeServiceDetail();
    openOrderModal(serviceToOrder as any);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in">
      <div className="bg-white rounded-3xl max-w-3xl w-full max-h-[90vh] shadow-2xl border border-slate-200 flex flex-col overflow-hidden">
        
        {/* Header Banner (Fixed Header) */}
        <div className="relative bg-gradient-to-r from-blue-700 via-blue-800 to-indigo-900 text-white p-5 sm:p-7 shrink-0">
          <button
            onClick={closeServiceDetail}
            aria-label="Close"
            className="absolute top-4 right-4 p-2 text-slate-300 hover:text-white rounded-full bg-slate-800/60 hover:bg-slate-800 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-2 mb-2">
            <span className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-white/20 text-white border border-white/20">
              {rawService.category}
            </span>
            {rawService.tag && (
              <span className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-amber-400 text-slate-950">
                {rawService.tag}
              </span>
            )}
          </div>

          <h2 className="text-xl sm:text-2xl font-extrabold text-white mt-1 pr-8">
            {title}
          </h2>
          <p className="text-xs sm:text-sm text-blue-100 mt-1 leading-relaxed">
            {description}
          </p>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-5 sm:p-7 space-y-6 overflow-y-auto flex-1 custom-scrollbar">
          
          {/* Sub-Services / Specialized Packages (If Available) */}
          {subServices && subServices.length > 0 && (
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Layers className="w-4 h-4 text-blue-600" />
                  <h3 className="text-sm font-bold text-slate-900">
                    {language === 'bn' ? 'কাস্টম প্যাকেজ ও স্পেশাল সাব-সার্ভিস বেছে নিন:' : 'Choose Sub-Service / Package Variant:'}
                  </h3>
                </div>
                {selectedSubServiceId && (
                  <button 
                    onClick={() => setSelectedSubServiceId(null)}
                    className="text-xs text-blue-600 hover:underline font-semibold cursor-pointer"
                  >
                    {language === 'bn' ? 'ডিফল্ট দেখুন' : 'Reset Selection'}
                  </button>
                )}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {subServices.map((sub: any) => {
                  const isSelected = selectedSubServiceId === sub.id;
                  const subTitle = typeof sub.title === 'object' ? sub.title[language] : sub.title;
                  const subRecommended = sub.recommendedFor 
                    ? (typeof sub.recommendedFor === 'object' ? sub.recommendedFor[language] : sub.recommendedFor)
                    : null;
                  const subDeliverables = Array.isArray(sub.deliverables)
                    ? sub.deliverables
                    : sub.deliverables?.[language] || [];

                  return (
                    <div
                      key={sub.id}
                      onClick={() => setSelectedSubServiceId(isSelected ? null : sub.id)}
                      className={`p-4 rounded-2xl border text-left cursor-pointer transition-all duration-200 flex flex-col justify-between ${
                        isSelected
                          ? 'border-blue-600 bg-blue-50/50 shadow-md ring-2 ring-blue-500/20'
                          : 'border-slate-200 hover:border-blue-300 hover:bg-slate-50/80 bg-white'
                      }`}
                    >
                      <div>
                        <div className="flex items-start justify-between gap-2">
                          <h4 className="font-bold text-xs sm:text-sm text-slate-900 leading-snug">
                            {subTitle}
                          </h4>
                          <span className={`text-xs font-black shrink-0 px-2 py-0.5 rounded-md ${
                            isSelected ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-800'
                          }`}>
                            ৳{sub.price}
                          </span>
                        </div>

                        {subRecommended && (
                          <div className="text-[11px] text-blue-700 bg-blue-100/50 px-2 py-0.5 rounded-md inline-block mt-1.5 font-medium">
                            {subRecommended}
                          </div>
                        )}

                        <div className="mt-2.5 space-y-1">
                          {subDeliverables.slice(0, 3).map((d: string, dIdx: number) => (
                            <div key={dIdx} className="flex items-start gap-1.5 text-[11px] text-slate-600">
                              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                              <span className="line-clamp-1">{d}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="mt-3 pt-2.5 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3 text-blue-500" />
                          {sub.turnaround}
                        </span>
                        <span className="font-semibold text-blue-600 flex items-center gap-0.5">
                          {isSelected ? (language === 'bn' ? '✓ সিলেক্টেড' : '✓ Selected') : (language === 'bn' ? 'সিলেক্ট করুন' : 'Select')}
                          <ChevronRight className="w-3 h-3" />
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
          
          {/* Deliverables / Scope of Work */}
          <div className="bg-slate-50 p-4 sm:p-5 rounded-2xl border border-slate-200/80">
            <div className="flex items-center gap-2 mb-3">
              <Sparkles className="w-4 h-4 text-blue-600" />
              <h3 className="text-sm font-bold text-slate-900">
                {selectedSubServiceId 
                  ? (language === 'bn' ? 'সিলেক্টেড প্যাকেজের অন্তর্ভুক্ত সুবিধাসমূহ:' : 'What You Receive in Selected Package:')
                  : (language === 'bn' ? 'সার্ভিসের অন্তর্ভুক্ত বিষয়সমূহ:' : 'What You Receive in this Service:')
                }
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {(activeSubService 
                ? (Array.isArray(activeSubService.deliverables) ? activeSubService.deliverables : (activeSubService.deliverables as any)?.[language] || [])
                : deliverables
              ).map((item: string, idx: number) => (
                <div key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Turnaround & Guarantee */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
            <div className="p-3.5 bg-blue-50/80 rounded-2xl border border-blue-100 flex items-center gap-3">
              <Clock className="w-5 h-5 text-blue-600 shrink-0" />
              <div>
                <div className="font-bold text-slate-900">{language === 'bn' ? 'সম্ভাব্য সময়সীমা' : 'Estimated Turnaround'}</div>
                <div className="text-slate-600">{displayTurnaround}</div>
              </div>
            </div>

            <div className="p-3.5 bg-emerald-50/80 rounded-2xl border border-emerald-100 flex items-center gap-3">
              <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0" />
              <div>
                <div className="font-bold text-slate-900">{t.confidentialMentorship}</div>
                <div className="text-slate-600">100% Student Privacy & Quality Assurance</div>
              </div>
            </div>
          </div>
        </div>

        {/* Pricing & Sticky CTA Footer */}
        <div className="p-4 sm:p-6 bg-white border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4 shrink-0">
          <div>
            <span className="text-xs text-slate-400 uppercase font-bold block">
              {selectedSubServiceId ? (language === 'bn' ? 'প্যাকেজ মূল্য' : 'Package Price') : t.startingPrice}
            </span>
            <div className="flex items-baseline gap-1">
              <span className="text-2xl font-black text-slate-900">৳{displayPrice.toLocaleString()}</span>
            </div>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={handleAddToCart}
              className="w-full sm:w-auto px-4 py-2.5 text-xs font-bold text-slate-700 hover:text-blue-700 bg-slate-100 hover:bg-blue-50 border border-slate-200 rounded-xl flex items-center justify-center gap-1.5 cursor-pointer transition-colors"
            >
              <Plus className="w-4 h-4" />
              <span>{t.addToCart}</span>
            </button>

            <button
              onClick={handleOrderDirectly}
              className="w-full sm:w-auto px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold rounded-xl shadow-md shadow-blue-600/20 flex items-center justify-center gap-2 transition-all cursor-pointer"
            >
              <span>{t.directOrder}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
