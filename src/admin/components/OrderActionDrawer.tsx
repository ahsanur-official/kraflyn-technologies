import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { AcademicOrder } from '../../types';
import { 
  X, 
  UserCheck, 
  MessageSquare, 
  Paperclip, 
  Edit3, 
  DollarSign, 
  Save, 
  Phone
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface OrderActionDrawerProps {
  order: AcademicOrder | null;
  onClose: () => void;
}

export const OrderActionDrawer: React.FC<OrderActionDrawerProps> = ({ order, onClose }) => {
  const { 
    updateOrderStatus, 
    assignMentorToOrder, 
    updateOrderPrice, 
    mentors,
    showToast,
    language 
  } = useApp();

  const [targetStatus, setTargetStatus] = useState<AcademicOrder['status']>(order?.status || 'order_received');
  const [mentorInput, setMentorInput] = useState<string>(order?.assignedMentorName || '');
  const [priceInput, setPriceInput] = useState<number>(order?.totalAmount || 500);
  const [adminNoteInput, setAdminNoteInput] = useState<string>('');

  // Update states whenever selected order changes
  React.useEffect(() => {
    if (order) {
      setTargetStatus(order.status);
      setMentorInput(order.assignedMentorName || '');
      setPriceInput(order.totalAmount || 500);
      setAdminNoteInput('');
    }
  }, [order]);

  if (!order) return null;

  const handleSaveAll = () => {
    updateOrderStatus(
      order.id, 
      targetStatus, 
      adminNoteInput.trim() ? `Admin Note: ${adminNoteInput.trim()}` : undefined
    );

    if (mentorInput.trim() !== (order.assignedMentorName || '')) {
      assignMentorToOrder(order.id, mentorInput.trim());
    }

    if (priceInput !== order.totalAmount) {
      updateOrderPrice(order.id, Number(priceInput) || order.totalAmount);
    }

    showToast(language === 'bn' ? `অর্ডার ${order.id} আপডেট সম্পন্ন হয়েছে` : `Order ${order.id} updated successfully`);
    onClose();
  };

  const getWhatsappQuickMsg = (type: 'welcome' | 'mentor_assigned' | 'delivery') => {
    const cleanPhone = order.whatsapp.replace(/[^0-9]/g, '');
    let text = '';

    if (type === 'welcome') {
      text = `Hello ${order.customerName}! Greetings from Kraflyn Technologies. We have received your project order (${order.id}) for "${order.courseName}". Our engineering & design lead is reviewing your requirements and will reach out with sprint milestones shortly.`;
    } else if (type === 'mentor_assigned') {
      text = `Hi ${order.customerName}, great news! Specialist lead "${mentorInput || 'Project Specialist'}" from Kraflyn Technologies has been assigned to your order ${order.id}. We are actively developing your solution with target delivery: ${order.deadline}.`;
    } else {
      text = `Hello ${order.customerName}! Your deliverable for order ${order.id} (${order.courseName}) from Kraflyn Technologies is ready for review and deployment. Please inspect the deliverables and let us know if you need any adjustments.`;
    }

    return `https://wa.me/${cleanPhone.startsWith('88') ? cleanPhone : '88' + cleanPhone}?text=${encodeURIComponent(text)}`;
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 overflow-hidden bg-slate-900/70 backdrop-blur-xs flex justify-end">
        <motion.div 
          initial={{ opacity: 0, x: '100%' }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: '100%' }}
          transition={{ type: 'spring', damping: 25, stiffness: 250 }}
          className="bg-white w-full max-w-xl h-full shadow-2xl flex flex-col overflow-hidden text-slate-800 text-xs sm:text-sm"
        >
          {/* Drawer Header */}
          <div className="bg-slate-900 text-white p-4 sm:p-5 flex items-center justify-between shrink-0">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-blue-600/30 border border-blue-500/40 flex items-center justify-center text-blue-400 font-mono font-black shrink-0">
                <Edit3 className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
              <div className="min-w-0">
                <h3 className="font-bold text-sm sm:text-base truncate">
                  {language === 'bn' ? 'অর্ডার পরিচালনা ও অ্যাকশন' : 'Order Triage & Actions'}
                </h3>
                <p className="text-[10px] sm:text-[11px] text-slate-400 font-mono truncate">
                  ID: {order.id} • {order.customerName}
                </p>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-slate-300 hover:text-white transition-colors cursor-pointer min-h-[40px] min-w-[40px] flex items-center justify-center"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Drawer Scrollable Body */}
          <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-4 sm:space-y-6">
            
            {/* Quick Summary Card */}
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-3.5 sm:p-4 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-bold uppercase text-slate-400">
                  {language === 'bn' ? 'ক্লায়েন্ট বিবরণ' : 'Client Information'}
                </span>
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase bg-blue-100 text-blue-800">
                  {order.status.replace(/_/g, ' ')}
                </span>
              </div>

              <div className="grid grid-cols-2 gap-2.5 sm:gap-3 text-xs">
                <div>
                  <span className="text-slate-400 text-[10px] sm:text-[11px] block">{language === 'bn' ? 'নাম' : 'Name'}</span>
                  <span className="font-bold text-slate-800 truncate block">{order.customerName}</span>
                </div>
                <div>
                  <span className="text-slate-400 text-[10px] sm:text-[11px] block">{language === 'bn' ? 'যোগাযোগ' : 'Contact'}</span>
                  <div className="flex items-center gap-1.5 mt-0.5">
                    <a href={`tel:${order.phone}`} className="text-blue-600 font-bold hover:underline font-mono text-[11px]">
                      📞 {order.phone}
                    </a>
                  </div>
                </div>
                <div>
                  <span className="text-slate-400 text-[10px] sm:text-[11px] block">{language === 'bn' ? 'প্রতিষ্ঠান / সেক্টর' : 'Company / Organization'}</span>
                  <span className="font-semibold text-slate-800 truncate block">{order.companyOrOrg || order.university}</span>
                  <span className="text-[10px] sm:text-[11px] text-slate-500 truncate block">{order.department}</span>
                </div>
                <div>
                  <span className="text-slate-400 text-[10px] sm:text-[11px] block">{language === 'bn' ? 'প্রজেক্ট ও ডেডলাইন' : 'Project & Deadline'}</span>
                  <span className="font-bold text-slate-800 block truncate">{order.courseName}</span>
                  <span className="text-[10px] sm:text-[11px] text-blue-600 font-bold">📅 {order.deadline}</span>
                </div>
              </div>
            </div>

            {/* Status Update Control */}
            <div className="space-y-1.5">
              <label className="text-xs font-bold uppercase tracking-wider text-slate-600 block">
                {language === 'bn' ? 'স্ট্যাটাস আপডেট করুন' : 'Update Delivery Workflow Status'}
              </label>
              <select
                value={targetStatus}
                onChange={(e) => setTargetStatus(e.target.value as any)}
                className="w-full px-3.5 py-3 bg-white border border-slate-300 rounded-xl font-bold text-base sm:text-sm text-slate-800 focus:ring-2 focus:ring-blue-500"
              >
                <option value="order_received">1. Order Received (অর্ডার গৃহীত)</option>
                <option value="mentor_assigned">2. Specialist Assigned (স্পেশালিস্ট নিযুক্ত)</option>
                <option value="contacted_student">3. Contacted Client (ক্লায়েন্টের সাথে যোগাযোগ)</option>
                <option value="in_progress">4. In Progress (কাজ চলমান)</option>
                <option value="delivered_completed">5. Delivered & Completed (ডেলিভারি সম্পন্ন)</option>
                <option value="cancelled">6. Cancelled (বাতিলকৃত)</option>
              </select>
            </div>

            {/* Specialist Assignment */}
            <div className="space-y-1.5">
              <div className="flex items-center justify-between">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-600 flex items-center gap-1.5">
                  <UserCheck className="w-3.5 h-3.5 text-blue-600" />
                  <span>{language === 'bn' ? 'স্পেশালিস্ট নিযুক্ত করুন' : 'Assign / Reassign Lead Specialist'}</span>
                </label>
                {mentors.length > 0 && (
                  <select
                    onChange={(e) => {
                      if (e.target.value) setMentorInput(e.target.value);
                    }}
                    className="text-[10px] sm:text-[11px] font-bold text-blue-600 bg-blue-50 border border-blue-200 rounded-lg px-2 py-1"
                    defaultValue=""
                  >
                    <option value="" disabled>{language === 'bn' ? 'টিম রোস্টার থেকে বাছাই' : 'Select from Team'}</option>
                    {mentors.map(m => (
                      <option key={m.id} value={`${m.name} (${m.roleTitle || m.degree || 'Specialist'})`}>
                        {m.name} - {m.roleTitle || m.degree} ({m.status})
                      </option>
                    ))}
                  </select>
                )}
              </div>
              <input
                type="text"
                value={mentorInput}
                onChange={(e) => setMentorInput(e.target.value)}
                placeholder="e.g. Md. Ahsanur Rahaman (Principal Architect)"
                className="w-full px-3.5 py-2.5 bg-white border border-slate-300 rounded-xl text-base sm:text-sm focus:ring-2 focus:ring-blue-500 font-semibold"
              />
            </div>

            {/* Price Adjustment */}
            <div className="space-y-1.5">
              <label className="text-xs font-bold uppercase tracking-wider text-slate-600 flex items-center gap-1.5">
                <DollarSign className="w-3.5 h-3.5 text-emerald-600" />
                <span>{language === 'bn' ? 'মোট পেমেন্ট ফি (টাকা)' : 'Total Agreed Fee (BDT ৳)'}</span>
              </label>
              <input
                type="number"
                value={priceInput}
                onChange={(e) => setPriceInput(Number(e.target.value))}
                className="w-full px-3.5 py-2.5 bg-white border border-slate-300 rounded-xl text-base sm:text-sm font-black text-slate-900 focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Admin Note / Activity Log */}
            <div className="space-y-1.5">
              <label className="text-xs font-bold uppercase tracking-wider text-slate-600 block">
                {language === 'bn' ? 'ইন্টারনাল অ্যাডমিন নোট' : 'Internal Operational Note'}
              </label>
              <textarea
                rows={2}
                value={adminNoteInput}
                onChange={(e) => setAdminNoteInput(e.target.value)}
                placeholder="e.g. Client requested initial Figma prototype by Tuesday. Team notified."
                className="w-full px-3.5 py-2.5 bg-white border border-slate-300 rounded-xl text-base sm:text-xs focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Client Requirements Content */}
            <div className="space-y-1.5 bg-blue-50/60 border border-blue-100 rounded-2xl p-3.5 sm:p-4">
              <span className="text-[11px] font-bold uppercase text-blue-900 block">
                {language === 'bn' ? 'ক্লায়েন্টের রিকোয়ারমেন্ট' : 'Client Requirements & Specs'}
              </span>
              <p className="text-xs text-slate-700 whitespace-pre-wrap leading-relaxed">
                {order.requirements}
              </p>
            </div>

            {/* Attachments Section */}
            {order.attachments && order.attachments.length > 0 && (
              <div className="space-y-1.5">
                <span className="text-[11px] font-bold uppercase text-slate-400 flex items-center gap-1.5">
                  <Paperclip className="w-3.5 h-3.5 text-blue-600" />
                  <span>{language === 'bn' ? 'সংযুক্ত ফাইলসমূহ' : 'Uploaded Files'} ({order.attachments.length})</span>
                </span>
                <div className="space-y-1.5">
                  {order.attachments.map((att) => (
                    <div key={att.id} className="p-2.5 bg-slate-50 border border-slate-200 rounded-xl flex items-center justify-between text-xs">
                      <div className="flex items-center gap-2 truncate">
                        <span className="px-1.5 py-0.5 bg-blue-100 text-blue-800 rounded font-mono font-bold text-[10px]">
                          {att.type}
                        </span>
                        <span className="font-semibold text-slate-800 truncate">{att.name}</span>
                        <span className="text-slate-400 text-[10px]">({att.size})</span>
                      </div>
                      <span className="text-[10px] text-emerald-600 font-bold bg-emerald-50 px-2 py-0.5 rounded shrink-0">
                        Available
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* 1-Click WhatsApp Quick Outreach */}
            <div className="space-y-2 pt-1">
              <span className="text-[11px] font-bold uppercase text-slate-500 block flex items-center gap-1.5">
                <MessageSquare className="w-3.5 h-3.5 text-emerald-600" />
                <span>{language === 'bn' ? '১-ক্লিক WhatsApp টেমপ্লেট' : '1-Click WhatsApp Direct Outreach'}</span>
              </span>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                <a
                  href={getWhatsappQuickMsg('welcome')}
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 text-emerald-800 rounded-xl text-center font-bold text-xs transition-colors block min-h-[44px] flex items-center justify-center"
                >
                  💬 Welcome Ack
                </a>
                <a
                  href={getWhatsappQuickMsg('mentor_assigned')}
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 bg-blue-50 hover:bg-blue-100 border border-blue-200 text-blue-800 rounded-xl text-center font-bold text-xs transition-colors block min-h-[44px] flex items-center justify-center"
                >
                  👨‍💻 Specialist Update
                </a>
                <a
                  href={getWhatsappQuickMsg('delivery')}
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 bg-purple-50 hover:bg-purple-100 border border-purple-200 text-purple-800 rounded-xl text-center font-bold text-xs transition-colors block min-h-[44px] flex items-center justify-center"
                >
                  🚀 Delivery Ready
                </a>
              </div>
            </div>

          </div>

          {/* Drawer Footer Actions with safe-area spacing */}
          <div className="p-4 bg-slate-50 border-t border-slate-200 flex items-center justify-between gap-3 shrink-0">
            <button
              onClick={onClose}
              className="px-4 py-3 border border-slate-300 text-slate-700 hover:bg-slate-200 rounded-xl text-xs sm:text-sm font-bold cursor-pointer min-h-[44px]"
            >
              {language === 'bn' ? 'বন্ধ করুন' : 'Cancel'}
            </button>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={handleSaveAll}
              className="flex-1 sm:flex-none px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-md shadow-blue-500/20 cursor-pointer min-h-[44px]"
            >
              <Save className="w-4 h-4" />
              <span>{language === 'bn' ? 'সংরক্ষণ করুন' : 'Save Changes'}</span>
            </motion.button>
          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
};
