import React from 'react';
import { useApp } from '../../context/AppContext';
import { 
  X, 
  Trash2, 
  ShoppingBag, 
  ArrowRight, 
  ShieldCheck, 
  Clock, 
  Zap,
  PhoneCall
} from 'lucide-react';

export const CartDrawer: React.FC = () => {
  const { 
    isCartOpen, 
    closeCart, 
    cartItems, 
    cartCount, 
    cartTotal, 
    removeFromCart, 
    updateCartItem, 
    clearCart,
    openOrderModal,
    language,
    t 
  } = useApp();

  if (!isCartOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div 
        onClick={closeCart}
        className="absolute inset-0 bg-slate-900/60 backdrop-blur-xs transition-opacity duration-300 animate-in fade-in"
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-white shadow-2xl flex flex-col justify-between border-l border-slate-200 animate-in slide-in-from-right duration-300">
          
          {/* Header */}
          <div className="px-6 py-5 border-b border-slate-200 bg-slate-50 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-blue-600 text-white flex items-center justify-center shadow-xs">
                <ShoppingBag className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base font-bold text-slate-900 leading-none">
                  {t.cartTitle}
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  {cartCount} {language === 'bn' ? 'টি সার্ভিস সিলেক্ট করা হয়েছে' : 'services selected'}
                </p>
              </div>
            </div>

            <button
              onClick={closeCart}
              className="p-2 text-slate-400 hover:text-slate-700 hover:bg-slate-200/60 rounded-lg transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Cart Items List */}
          <div className="flex-1 overflow-y-auto custom-scrollbar p-6 space-y-4">
            {cartItems.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12">
                <div className="w-16 h-16 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-500 mb-4">
                  <ShoppingBag className="w-8 h-8 opacity-75" />
                </div>
                <h4 className="text-base font-bold text-slate-800">
                  {t.cartEmptyTitle}
                </h4>
                <p className="text-xs text-slate-500 max-w-xs mt-1 leading-relaxed">
                  {t.cartEmptyDesc}
                </p>
                <button
                  onClick={closeCart}
                  className="mt-6 px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold rounded-xl shadow-xs transition-colors cursor-pointer"
                >
                  {t.browseServices}
                </button>
              </div>
            ) : (
              <>
                <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                  <span className="text-xs font-bold uppercase text-slate-400 tracking-wider">
                    {language === 'bn' ? `নির্বাচিত সার্ভিসসমূহ (${cartCount})` : `Selected Services (${cartCount})`}
                  </span>
                  <button
                    onClick={clearCart}
                    className="text-xs font-medium text-rose-600 hover:text-rose-700 hover:underline cursor-pointer"
                  >
                    {t.clearCart}
                  </button>
                </div>

                {cartItems.map((item) => (
                  <div 
                    key={item.id}
                    className="bg-white rounded-xl border border-slate-200 p-4 shadow-xs hover:border-blue-300 transition-colors relative group"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <span className="inline-block px-2 py-0.5 bg-blue-50 text-blue-700 text-[10px] font-bold rounded-md mb-1">
                          {item.category}
                        </span>
                        <h4 className="text-sm font-bold text-slate-900 leading-snug">
                          {item.serviceTitle}
                        </h4>
                      </div>

                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="text-slate-400 hover:text-rose-600 p-1 rounded-md transition-colors cursor-pointer"
                        title="Remove item"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>

                    {/* Tier Selection */}
                    <div className="mt-3 pt-3 border-t border-slate-100">
                      <label className="text-[11px] font-semibold text-slate-600 block mb-1.5">
                        {language === 'bn' ? 'সাপোর্টের গতি ও প্যাকেজ টিয়ার:' : 'Support Speed / Package Tier:'}
                      </label>
                      <div className="grid grid-cols-2 gap-1.5">
                        <button
                          type="button"
                          onClick={() => updateCartItem(item.id, { 
                            packageTier: 'Standard Support',
                            urgencyFee: 0 
                          })}
                          className={`px-2.5 py-1.5 rounded-lg text-xs font-semibold text-left transition-all border cursor-pointer ${
                            item.packageTier === 'Standard Support'
                              ? 'bg-blue-50 border-blue-400 text-blue-800'
                              : 'bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100'
                          }`}
                        >
                          <div className="leading-tight font-bold">{language === 'bn' ? 'স্ট্যান্ডার্ড' : 'Standard'}</div>
                          <div className="text-[10px] text-slate-500 mt-0.5">{language === 'bn' ? 'স্বাভাবিক সময়' : 'Normal Deadline'}</div>
                        </button>

                        <button
                          type="button"
                          onClick={() => updateCartItem(item.id, { 
                            packageTier: 'Express 24h Support',
                            urgencyFee: 200 
                          })}
                          className={`px-2.5 py-1.5 rounded-lg text-xs font-semibold text-left transition-all border cursor-pointer ${
                            item.packageTier === 'Express 24h Support'
                              ? 'bg-amber-50 border-amber-400 text-amber-900 font-bold'
                              : 'bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100'
                          }`}
                        >
                          <div className="leading-tight flex items-center gap-1">
                            <Zap className="w-3 h-3 text-amber-500" />
                            <span>{language === 'bn' ? 'জরুরি ২৪ ঘণ্টা' : 'Express 24h'}</span>
                          </div>
                          <div className="text-[10px] text-amber-600 mt-0.5">+৳200 Urgency</div>
                        </button>
                      </div>
                    </div>

                    {/* Price & Turnaround Footer */}
                    <div className="mt-3 pt-2 flex items-center justify-between text-xs text-slate-500">
                      <span className="flex items-center gap-1 text-[11px] text-emerald-700 font-medium">
                        <Clock className="w-3 h-3" /> {language === 'bn' ? '১-অন-১ মেন্টর গাইডেন্স' : '1-on-1 Mentor Guidance'}
                      </span>
                      <div className="text-right">
                        <span className="text-xs text-slate-400">{language === 'bn' ? 'মোট: ' : 'Total: '}</span>
                        <span className="text-sm font-black text-slate-900">
                          ৳{item.totalPrice * item.quantity}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}

                {/* Assurance Box */}
                <div className="bg-emerald-50/80 border border-emerald-200 rounded-xl p-3.5 flex items-start gap-2.5">
                  <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div className="text-xs text-emerald-900 leading-relaxed">
                    <strong className="block font-bold">{language === 'bn' ? '১০০% ডেলিভারি ও সন্তুষ্টি নিশ্চয়তা' : '100% Delivery Assurance'}</strong>
                    {language === 'bn' 
                      ? 'অর্ডার প্লেস করার পর আমাদের টিম WhatsApp এ সরাসরি যোগাযোগ করে সব বিস্তারিত জেনে কাজ শুরু করবে।' 
                      : 'After placing your order, our academic coordinator reaches out on WhatsApp within 15-30 minutes.'}
                  </div>
                </div>
              </>
            )}
          </div>

          {/* Footer & Checkout Action */}
          {cartItems.length > 0 && (
            <div className="p-6 border-t border-slate-200 bg-slate-50/80 space-y-3">
              <div className="flex items-center justify-between text-sm">
                <span className="text-slate-600 font-medium">{t.estimatedTotal}:</span>
                <span className="text-xl font-black text-blue-700">
                  ৳{cartTotal}
                </span>
              </div>

              <p className="text-[11px] text-slate-500 leading-tight">
                {language === 'bn' 
                  ? '* কোনো অগ্রিম পেমেন্টের ঝামেলা নেই। আলোচনার পর ফাইনাল হবে।' 
                  : '* No instant payment needed. Direct coordination via WhatsApp/Phone.'}
              </p>

              <button
                onClick={() => openOrderModal()}
                className="w-full py-3.5 px-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold text-sm rounded-xl shadow-md shadow-blue-500/20 flex items-center justify-center gap-2 transition-all cursor-pointer hover:shadow-lg active:scale-[0.99]"
              >
                <span>{t.proceedToOrder}</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <div className="flex items-center justify-center gap-2 pt-1 text-[11px] text-slate-500">
                <PhoneCall className="w-3 h-3 text-blue-600" />
                <span>{language === 'bn' ? 'সরাসরি হেল্পলাইন: ' : 'Direct Helpline: '}<strong>+880 1712-345678</strong></span>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};
