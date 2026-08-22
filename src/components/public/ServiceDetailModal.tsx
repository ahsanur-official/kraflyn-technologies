import React from 'react';
import { useApp } from '../../context/AppContext';
import { 
  X, 
  CheckCircle2, 
  Clock, 
  ShieldCheck, 
  ArrowRight, 
  Sparkles, 
  Plus
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

  if (!serviceDetailModalService) return null;

  const rawService = serviceDetailModalService;
  const bilingualData = bilingualServices.find(s => s.id === rawService.id);

  const title = bilingualData ? bilingualData.title[language] : rawService.title;
  const description = bilingualData ? bilingualData.fullDesc[language] : rawService.description;
  const deliverables = bilingualData ? bilingualData.deliverables[language] : rawService.deliverables;

  const handleAddToCart = () => {
    addToCart(rawService);
    closeServiceDetail();
  };

  const handleOrderDirectly = () => {
    closeServiceDetail();
    openOrderModal(rawService);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in">
      <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] shadow-2xl border border-slate-200 flex flex-col overflow-hidden">
        
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
          </div>

          <h2 className="text-xl sm:text-2xl font-extrabold text-white mt-1 pr-8">
            {title}
          </h2>
          <p className="text-xs sm:text-sm text-blue-100 mt-1 leading-relaxed">
            {description}
          </p>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-5 sm:p-7 space-y-5 overflow-y-auto flex-1 custom-scrollbar">
          
          {/* Deliverables */}
          <div className="bg-slate-50 p-4 sm:p-5 rounded-2xl border border-slate-200/80">
            <div className="flex items-center gap-2 mb-3">
              <Sparkles className="w-4 h-4 text-blue-600" />
              <h3 className="text-sm font-bold text-slate-900">
                {language === 'bn' ? 'সার্ভিসের অন্তর্ভুক্ত বিষয়সমূহ:' : 'What You Receive in this Service:'}
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {deliverables.map((item, idx) => (
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
                <div className="text-slate-600">{bilingualData?.typicalTurnaround || rawService.turnaround}</div>
              </div>
            </div>

            <div className="p-3.5 bg-emerald-50/80 rounded-2xl border border-emerald-100 flex items-center gap-3">
              <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0" />
              <div>
                <div className="font-bold text-slate-900">{t.confidentialMentorship}</div>
                <div className="text-slate-600">100% Student Privacy & Integrity</div>
              </div>
            </div>
          </div>
        </div>

        {/* Pricing & Sticky CTA Footer */}
        <div className="p-4 sm:p-6 bg-white border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4 shrink-0">
          <div>
            <span className="text-xs text-slate-400 uppercase font-bold block">{t.startingPrice}</span>
            <div className="flex items-baseline gap-1">
              <span className="text-2xl font-black text-slate-900">৳{rawService.startingPrice}</span>
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
