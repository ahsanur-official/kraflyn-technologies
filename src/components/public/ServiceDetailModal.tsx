import React from 'react';
import { useApp } from '../../context/AppContext';
import { 
  X, 
  CheckCircle2, 
  Clock, 
  ShieldCheck, 
  ArrowRight, 
  Sparkles, 
  ShoppingBag,
  Plus
} from 'lucide-react';

export const ServiceDetailModal: React.FC = () => {
  const { 
    serviceDetailModalService, 
    closeServiceDetail, 
    addToCart, 
    openOrderModal 
  } = useApp();

  if (!serviceDetailModalService) return null;

  const service = serviceDetailModalService;

  const handleAddToCart = () => {
    addToCart(service);
    closeServiceDetail();
  };

  const handleOrderDirectly = () => {
    closeServiceDetail();
    openOrderModal(service);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in">
      <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-200">
        
        {/* Header Banner */}
        <div className="relative bg-gradient-to-r from-blue-700 via-blue-800 to-indigo-900 text-white p-6 sm:p-8 rounded-t-3xl">
          <button
            onClick={closeServiceDetail}
            className="absolute top-4 right-4 p-2 text-slate-300 hover:text-white rounded-full bg-slate-800/60 hover:bg-slate-800 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-2 mb-2">
            <span className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-white/20 text-white border border-white/20">
              {service.category}
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-2">
            {service.title}
          </h2>
          <p className="text-xs sm:text-sm text-blue-100 mt-1">
            {service.description}
          </p>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6">
          
          {/* Deliverables */}
          <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200">
            <div className="flex items-center gap-2 mb-3">
              <Sparkles className="w-4 h-4 text-blue-600" />
              <h3 className="text-sm font-bold text-slate-900">
                সার্ভিসের অন্তর্ভুক্ত বিষয়সমূহ (What You'll Receive):
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {service.deliverables.map((item, idx) => (
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
                <div className="font-bold text-slate-900">Estimated Turnaround</div>
                <div className="text-slate-600">{service.turnaround}</div>
              </div>
            </div>

            <div className="p-3.5 bg-emerald-50/80 rounded-2xl border border-emerald-100 flex items-center gap-3">
              <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0" />
              <div>
                <div className="font-bold text-slate-900">গোপনীয়তা ও সততা</div>
                <div className="text-slate-600">100% Student Privacy & Integrity</div>
              </div>
            </div>
          </div>

          {/* Pricing & CTA */}
          <div className="pt-4 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <span className="text-xs text-slate-400 uppercase font-bold block">Starting Price</span>
              <div className="flex items-baseline gap-1">
                <span className="text-2xl font-black text-slate-900">৳{service.startingPrice}</span>
              </div>
            </div>

            <div className="flex items-center gap-3 w-full sm:w-auto">
              <button
                onClick={handleAddToCart}
                className="w-full sm:w-auto px-4 py-2.5 text-xs font-bold text-slate-700 hover:text-blue-700 bg-slate-100 hover:bg-blue-50 border border-slate-200 rounded-xl flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <Plus className="w-4 h-4" />
                <span>Add to Cart</span>
              </button>

              <button
                onClick={handleOrderDirectly}
                className="w-full sm:w-auto px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold rounded-xl shadow-md shadow-blue-600/20 flex items-center justify-center gap-2 transition-all cursor-pointer"
              >
                <span>Order Now</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
