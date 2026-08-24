import React, { useEffect } from 'react';
import { useApp } from '../../context/AppContext';
import { 
  CheckCircle, 
  MessageSquare, 
  Copy, 
  Check, 
  Clock, 
  Search
} from 'lucide-react';
import confetti from 'canvas-confetti';

export const OrderSuccessModal: React.FC = () => {
  const { 
    orderSuccessModalOpen, 
    closeOrderSuccessModal, 
    lastPlacedOrder,
    openOrderTracker,
    showToast,
    language,
    t 
  } = useApp();

  const [copied, setCopied] = React.useState(false);

  useEffect(() => {
    if (orderSuccessModalOpen) {
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 }
        });
      } catch (e) {
        // Safe fallback
      }
    }
  }, [orderSuccessModalOpen]);

  if (!orderSuccessModalOpen || !lastPlacedOrder) return null;

  const handleCopyOrderId = () => {
    navigator.clipboard.writeText(lastPlacedOrder.id);
    setCopied(true);
    showToast(t.copied);
    setTimeout(() => setCopied(false), 2000);
  };

  // Pre-filled WhatsApp message
  const waMessage = encodeURIComponent(
    `Hello Kraflyn Technologies Support Team!\nI just placed an order on your website.\n\n*Order ID:* ${lastPlacedOrder.id}\n*Customer Name:* ${lastPlacedOrder.customerName}\n*University / Org:* ${lastPlacedOrder.university}\n*Course / Project:* ${lastPlacedOrder.courseName}\n*Services:* ${lastPlacedOrder.items.map(i => i.serviceTitle).join(', ')}\n*Deadline:* ${lastPlacedOrder.deadline}\n\nPlease let me know the next steps for specialist assignment and confirmation.`
  );

  const whatsappUrl = `https://wa.me/8801712345678?text=${waMessage}`;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/70 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 animate-in fade-in">
      <div className="bg-white rounded-3xl shadow-2xl border border-slate-200 max-w-xl w-full overflow-hidden animate-in zoom-in-95 duration-200">
        
        {/* Success Header with Green Gradient */}
        <div className="bg-gradient-to-br from-emerald-600 to-teal-700 text-white p-6 text-center relative">
          <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center mx-auto mb-3 border-2 border-white/40 shadow-inner">
            <CheckCircle className="w-9 h-9 text-white" />
          </div>

          <span className="inline-block px-3 py-0.5 bg-white/20 text-emerald-100 rounded-full text-xs font-bold uppercase tracking-wider mb-1">
            {t.orderSuccessBadge}
          </span>

          <h2 className="text-2xl font-black text-white">
            {t.orderSuccessHeading}, {lastPlacedOrder.customerName}!
          </h2>
          <p className="text-xs text-emerald-100 mt-1 max-w-sm mx-auto">
            {t.orderSuccessSubtitle}
          </p>
        </div>

        {/* Order ID & Details Card */}
        <div className="p-6 space-y-5 text-slate-800">
          
          {/* Order ID Pill */}
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-3.5 flex items-center justify-between">
            <div>
              <div className="text-[11px] font-bold uppercase text-slate-400">
                {t.orderIdLabel}
              </div>
              <div className="text-base font-black text-blue-700 font-mono">
                {lastPlacedOrder.id}
              </div>
            </div>

            <button
              onClick={handleCopyOrderId}
              className="flex items-center gap-1 px-3 py-1.5 bg-white hover:bg-slate-100 border border-slate-200 rounded-lg text-xs font-semibold text-slate-700 transition-colors cursor-pointer"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                  <span className="text-emerald-600">{t.copied}</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>{t.copyId}</span>
                </>
              )}
            </button>
          </div>

          {/* Quick Summary Grid */}
          <div className="grid grid-cols-2 gap-3 text-xs bg-blue-50/50 border border-blue-100 rounded-2xl p-4">
            <div>
              <span className="text-slate-400 block text-[11px]">{t.universityName}</span>
              <strong className="text-slate-800 block truncate">{lastPlacedOrder.university}</strong>
              <span className="text-slate-600 text-[11px] block">{lastPlacedOrder.department}</span>
            </div>

            <div>
              <span className="text-slate-400 block text-[11px]">{t.courseName}</span>
              <strong className="text-slate-800 block truncate">{lastPlacedOrder.courseName}</strong>
              <span className="text-emerald-700 font-semibold text-[11px] block">
                {t.deadline}: {lastPlacedOrder.deadline}
              </span>
            </div>

            <div className="col-span-2 pt-2 border-t border-blue-100 flex items-center justify-between">
              <div>
                <span className="text-slate-400 text-[11px] block">{t.selectedServices}</span>
                <span className="font-bold text-slate-800">
                  {lastPlacedOrder.items.map(i => i.serviceTitle).join(', ')}
                </span>
              </div>
              <div className="text-right">
                <span className="text-slate-400 text-[11px] block">{t.contactMethod}</span>
                <span className="font-bold text-emerald-700">{lastPlacedOrder.preferredContact}</span>
              </div>
            </div>
          </div>

          {/* WhatsApp Direct Action Button */}
          <div className="space-y-2.5">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3.5 px-4 bg-emerald-600 hover:bg-emerald-700 text-white rounded-2xl font-bold text-sm flex items-center justify-center gap-2 shadow-md shadow-emerald-500/20 transition-all hover:scale-[1.01]"
            >
              <MessageSquare className="w-5 h-5 fill-white/20" />
              <span>{t.whatsappOutreachBtn}</span>
            </a>

            <button
              onClick={() => {
                closeOrderSuccessModal();
                openOrderTracker(lastPlacedOrder.id);
              }}
              className="w-full py-2.5 px-4 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl font-semibold text-xs flex items-center justify-center gap-2 transition-colors cursor-pointer"
            >
              <Search className="w-4 h-4" />
              <span>{t.trackOrderStatus}</span>
            </button>
          </div>

          {/* What happens next timeline */}
          <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-4 space-y-2 text-xs">
            <div className="font-bold text-slate-700 flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-blue-600" />
              {t.nextStepsTitle}:
            </div>
            <ul className="space-y-1.5 text-slate-600 text-[11px] pl-4 list-disc">
              <li>{t.nextStep1}</li>
              <li>{t.nextStep2}</li>
              <li>{t.nextStep3}</li>
            </ul>
          </div>

          {/* Close modal button */}
          <button
            onClick={closeOrderSuccessModal}
            className="w-full py-2 text-center text-xs font-semibold text-slate-400 hover:text-slate-600 cursor-pointer"
          >
            {t.backToSite}
          </button>

        </div>

      </div>
    </div>
  );
};
