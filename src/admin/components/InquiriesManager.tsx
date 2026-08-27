import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { ContactInquiry } from '../../types';
import { 
  Inbox, 
  Search, 
  Trash2, 
  CheckCircle2, 
  Clock, 
  Phone, 
  Mail, 
  MessageSquare, 
  Building, 
  X,
  ExternalLink
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export const InquiriesManager: React.FC = () => {
  const { inquiries, updateInquiryStatus, deleteInquiry, language, showToast } = useApp();
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState<'all' | 'new' | 'contacted' | 'resolved'>('all');
  const [selectedInquiry, setSelectedInquiry] = useState<ContactInquiry | null>(null);

  const filtered = inquiries.filter(inq => {
    const matchSearch = inq.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                        inq.phone.includes(searchTerm) ||
                        inq.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
                        inq.subject.toLowerCase().includes(searchTerm.toLowerCase()) ||
                        inq.message.toLowerCase().includes(searchTerm.toLowerCase());
    const matchStatus = statusFilter === 'all' || inq.status === statusFilter;
    return matchSearch && matchStatus;
  });

  const handleDeleteInquiry = (id: string) => {
    if (confirm(language === 'bn' ? 'আপনি কি এই ইনকোয়ারি বার্তা মুছে ফেলতে চান?' : 'Are you sure you want to delete this inquiry?')) {
      deleteInquiry(id);
      if (selectedInquiry?.id === id) {
        setSelectedInquiry(null);
      }
      showToast(language === 'bn' ? 'ইনকোয়ারি মুছে ফেলা হয়েছে' : 'Inquiry deleted');
    }
  };

  const handleStatusChange = (id: string, status: ContactInquiry['status']) => {
    updateInquiryStatus(id, status);
    if (selectedInquiry?.id === id) {
      setSelectedInquiry(prev => prev ? { ...prev, status } : null);
    }
    showToast(language === 'bn' ? `স্ট্যাটাস "${status}" তে পরিবর্তন হয়েছে` : `Status updated to "${status}"`);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-white rounded-2xl p-5 md:p-6 border border-slate-200/80 shadow-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="p-2 rounded-xl bg-teal-50 text-teal-600 border border-teal-100">
              <Inbox className="w-5 h-5" />
            </span>
            <h1 className="text-xl md:text-2xl font-black text-slate-900">
              {language === 'bn' ? 'ক্লায়েন্ট ইনকোয়ারি ও বার্তা' : 'Client Inquiries & Messages'}
            </h1>
          </div>
          <p className="text-xs md:text-sm text-slate-500 mt-1">
            {language === 'bn' 
              ? 'যোগাযোগ ফর্ম থেকে পাঠানো সকল সম্ভাব্য ক্লায়েন্টের অনুসন্ধান বার্তা পরিচালনা ও রিপ্লাই দিন।' 
              : 'Review, track and follow up on contact inquiries submitted by prospective clients and partners.'}
          </p>
        </div>
      </div>

      {/* Filter and Search */}
      <div className="bg-white rounded-2xl p-4 border border-slate-200/80 shadow-xs flex flex-col sm:flex-row items-center gap-3">
        <div className="relative flex-1 w-full">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder={language === 'bn' ? 'ক্লায়েন্টের নাম, ফোন, ইমেইল বা বিষয় দিয়ে খুঁজুন...' : 'Search by client name, phone, email or subject...'}
            className="w-full pl-10 pr-4 py-2 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500 focus:bg-white transition-all"
          />
        </div>

        <div className="flex items-center gap-1.5 w-full sm:w-auto overflow-x-auto">
          {(['all', 'new', 'contacted', 'resolved'] as const).map(st => (
            <button
              key={st}
              onClick={() => setStatusFilter(st)}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold capitalize transition-colors shrink-0 cursor-pointer ${
                statusFilter === st
                  ? 'bg-teal-600 text-white'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {st} ({st === 'all' ? inquiries.length : inquiries.filter(i => i.status === st).length})
            </button>
          ))}
        </div>
      </div>

      {/* Inquiries List */}
      {filtered.length === 0 ? (
        <div className="bg-white rounded-2xl p-12 text-center border border-dashed border-slate-300">
          <Inbox className="w-12 h-12 text-slate-300 mx-auto mb-3" />
          <h3 className="text-base font-bold text-slate-700">
            {language === 'bn' ? 'কোনো বার্তা নেই' : 'No inquiries found'}
          </h3>
          <p className="text-xs text-slate-500 mt-1">
            {language === 'bn' ? 'ক্লায়েন্ট বা কাস্টমাররা মেসেজ পাঠালে এখানে দেখতে পাবেন।' : 'Client contact inquiries will appear here.'}
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map(inq => (
            <div
              key={inq.id}
              className="bg-white rounded-2xl p-5 border border-slate-200/80 shadow-xs flex flex-col justify-between hover:shadow-md transition-shadow"
            >
              <div>
                <div className="flex items-start justify-between gap-2 mb-2">
                  <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider ${
                    inq.status === 'new'
                      ? 'bg-amber-100 text-amber-800'
                      : inq.status === 'contacted'
                      ? 'bg-blue-100 text-blue-800'
                      : 'bg-emerald-100 text-emerald-800'
                  }`}>
                    {inq.status}
                  </span>
                  <span className="text-[11px] text-slate-400 font-mono">{inq.submittedAt}</span>
                </div>

                <h3 className="font-extrabold text-slate-900 text-base">{inq.name}</h3>
                <p className="text-xs font-bold text-teal-700 mt-0.5">{inq.subject}</p>
                <p className="text-xs text-slate-600 mt-2 bg-slate-50 p-3 rounded-xl line-clamp-3 leading-relaxed border border-slate-100">
                  {inq.message}
                </p>

                <div className="mt-3 space-y-1 text-xs text-slate-500">
                  <div className="flex items-center gap-1.5">
                    <Phone className="w-3.5 h-3.5 text-slate-400" />
                    <span>{inq.phone}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Mail className="w-3.5 h-3.5 text-slate-400" />
                    <span className="truncate">{inq.email}</span>
                  </div>
                  {inq.university && (
                    <div className="flex items-center gap-1.5">
                      <Building className="w-3.5 h-3.5 text-slate-400" />
                      <span className="truncate">{inq.university}</span>
                    </div>
                  )}
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between gap-2">
                <div className="flex items-center gap-1.5">
                  <a
                    href={`https://wa.me/${inq.phone.replace(/[^0-9]/g, '')}`}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-1.5 px-3 py-1.5 bg-emerald-50 hover:bg-emerald-100 text-emerald-700 rounded-xl text-xs font-bold transition-colors"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>WhatsApp</span>
                  </a>

                  <button
                    onClick={() => setSelectedInquiry(inq)}
                    className="px-3 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl text-xs font-bold transition-colors cursor-pointer"
                  >
                    {language === 'bn' ? 'বিস্তারিত' : 'Details'}
                  </button>
                </div>

                <button
                  onClick={() => handleDeleteInquiry(inq.id)}
                  className="p-1.5 text-rose-500 hover:bg-rose-50 rounded-lg transition-colors cursor-pointer"
                  title="Delete"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Inquiry Detail Modal */}
      <AnimatePresence>
        {selectedInquiry && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-white rounded-2xl max-w-lg w-full p-6 border border-slate-200 shadow-2xl space-y-4"
            >
              <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                <div>
                  <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider ${
                    selectedInquiry.status === 'new'
                      ? 'bg-amber-100 text-amber-800'
                      : selectedInquiry.status === 'contacted'
                      ? 'bg-blue-100 text-blue-800'
                      : 'bg-emerald-100 text-emerald-800'
                  }`}>
                    {selectedInquiry.status}
                  </span>
                  <h3 className="font-extrabold text-lg text-slate-900 mt-1">
                    {selectedInquiry.subject}
                  </h3>
                </div>
                <button
                  onClick={() => setSelectedInquiry(null)}
                  className="p-1 rounded-lg text-slate-400 hover:text-slate-600 hover:bg-slate-100 cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="space-y-2 text-xs">
                <div>
                  <span className="text-slate-400">Client / Contact:</span>
                  <p className="font-bold text-slate-800 text-sm">{selectedInquiry.name}</p>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <span className="text-slate-400">Phone / WhatsApp:</span>
                    <p className="font-bold text-slate-800">{selectedInquiry.phone}</p>
                  </div>
                  <div>
                    <span className="text-slate-400">Email:</span>
                    <p className="font-bold text-slate-800">{selectedInquiry.email}</p>
                  </div>
                </div>
                {selectedInquiry.university && (
                  <div>
                    <span className="text-slate-400">Organization / Sector:</span>
                    <p className="font-bold text-slate-800">{selectedInquiry.university} {selectedInquiry.department ? `(${selectedInquiry.department})` : ''}</p>
                  </div>
                )}
                <div className="pt-2">
                  <span className="text-slate-400">Full Message:</span>
                  <div className="p-3.5 bg-slate-50 rounded-xl text-slate-800 leading-relaxed font-sans text-xs mt-1 border border-slate-100">
                    {selectedInquiry.message}
                  </div>
                </div>

                {/* Status Toggle in Modal */}
                <div className="pt-2 border-t border-slate-100">
                  <span className="text-slate-400 font-bold block mb-1.5">
                    {language === 'bn' ? 'স্ট্যাটাস পরিবর্তন করুন:' : 'Change Status:'}
                  </span>
                  <div className="flex items-center gap-2">
                    {(['new', 'contacted', 'resolved'] as const).map(st => (
                      <button
                        key={st}
                        onClick={() => handleStatusChange(selectedInquiry.id, st)}
                        className={`px-3 py-1.5 rounded-xl text-xs font-bold capitalize transition-colors cursor-pointer ${
                          selectedInquiry.status === st
                            ? 'bg-teal-600 text-white shadow-xs'
                            : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                        }`}
                      >
                        {st}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-3 border-t border-slate-100 flex items-center justify-between gap-2">
                <button
                  onClick={() => handleDeleteInquiry(selectedInquiry.id)}
                  className="px-3 py-2 text-xs font-bold text-rose-600 hover:bg-rose-50 rounded-xl flex items-center gap-1 cursor-pointer"
                >
                  <Trash2 className="w-4 h-4" />
                  <span>{language === 'bn' ? 'মুছে ফেলুন' : 'Delete'}</span>
                </button>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setSelectedInquiry(null)}
                    className="px-4 py-2 text-xs font-bold text-slate-600 hover:bg-slate-100 rounded-xl cursor-pointer"
                  >
                    {language === 'bn' ? 'বন্ধ করুন' : 'Close'}
                  </button>
                  <a
                    href={`https://wa.me/${selectedInquiry.phone.replace(/[^0-9]/g, '')}?text=Hello%20${encodeURIComponent(selectedInquiry.name)},%20thank%20you%20for%20contacting%20Kraflyn%20Technologies.`}
                    target="_blank"
                    rel="noreferrer"
                    className="px-4 py-2 text-xs font-bold bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl flex items-center gap-1.5 shadow-md shadow-emerald-500/20 cursor-pointer"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>{language === 'bn' ? 'WhatsApp-এ কথা বলুন' : 'Reply on WhatsApp'}</span>
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};
