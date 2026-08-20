import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { AcademicOrder } from '../../types';
import { 
  Search, 
  Filter, 
  ExternalLink, 
  Edit3, 
  Trash2, 
  MessageSquare, 
  Sparkles, 
  Paperclip, 
  UserCheck, 
  Calendar,
  Layers,
  GraduationCap,
  ArrowUpDown
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { OrderActionDrawer } from './OrderActionDrawer';

export const OrdersManager: React.FC = () => {
  const { orders, deleteOrder, showToast, language, t } = useApp();

  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState<string>('All');
  const [universityFilter, setUniversityFilter] = useState<string>('All');
  const [selectedOrderForDrawer, setSelectedOrderForDrawer] = useState<AcademicOrder | null>(null);

  const universitiesList = Array.from(new Set(orders.map(o => o.university).filter(Boolean)));

  const filteredOrders = orders.filter(order => {
    const matchesSearch = 
      order.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
      order.customerName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      order.phone.includes(searchQuery) ||
      order.whatsapp.includes(searchQuery) ||
      order.university.toLowerCase().includes(searchQuery.toLowerCase()) ||
      order.courseName.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesStatus = statusFilter === 'All' || order.status === statusFilter;
    const matchesUni = universityFilter === 'All' || order.university === universityFilter;

    return matchesSearch && matchesStatus && matchesUni;
  });

  const getStatusBadge = (status: AcademicOrder['status']) => {
    switch (status) {
      case 'order_received':
        return <span className="px-2.5 py-1 rounded-full text-[11px] font-bold bg-amber-100 text-amber-800 border border-amber-200">🟡 Order Received</span>;
      case 'mentor_assigned':
        return <span className="px-2.5 py-1 rounded-full text-[11px] font-bold bg-blue-100 text-blue-800 border border-blue-200">🔵 Mentor Assigned</span>;
      case 'contacted_student':
        return <span className="px-2.5 py-1 rounded-full text-[11px] font-bold bg-purple-100 text-purple-800 border border-purple-200">🟣 Contacted</span>;
      case 'in_progress':
        return <span className="px-2.5 py-1 rounded-full text-[11px] font-bold bg-indigo-100 text-indigo-800 border border-indigo-200">⏳ In Progress</span>;
      case 'delivered_completed':
        return <span className="px-2.5 py-1 rounded-full text-[11px] font-bold bg-emerald-100 text-emerald-800 border border-emerald-200">✅ Delivered</span>;
      case 'cancelled':
        return <span className="px-2.5 py-1 rounded-full text-[11px] font-bold bg-rose-100 text-rose-800 border border-rose-200">❌ Cancelled</span>;
      default:
        return <span className="px-2.5 py-1 rounded-full text-[11px] font-bold bg-slate-100 text-slate-700">{status}</span>;
    }
  };

  const handleDelete = (orderId: string) => {
    if (confirm(language === 'bn' ? `আপনি কি অর্ডার ${orderId} ডিলিট করতে চান?` : `Are you sure you want to delete order ${orderId}?`)) {
      deleteOrder(orderId);
      showToast(language === 'bn' ? `অর্ডার ${orderId} মুছে ফেলা হয়েছে` : `Order ${orderId} deleted`);
    }
  };

  return (
    <div className="space-y-5">
      
      {/* Search & Filter Header Toolbar */}
      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white p-4 sm:p-5 rounded-3xl border border-slate-200 shadow-xs flex flex-col md:flex-row items-center justify-between gap-3"
      >
        <div className="relative w-full md:w-80">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={language === 'bn' ? 'অর্ডার আইডি, শিক্ষার্থী, ফোন বা বিশ্ববিদ্যালয়...' : 'Search by ID, student, phone, course...'}
            className="w-full pl-10 pr-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm focus:outline-hidden focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="flex items-center gap-2.5 w-full md:w-auto overflow-x-auto">
          {/* Status Filter */}
          <div className="flex items-center gap-1.5 shrink-0">
            <Filter className="w-3.5 h-3.5 text-slate-400" />
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold text-slate-700 focus:ring-2 focus:ring-blue-500"
            >
              <option value="All">{language === 'bn' ? 'সকল স্ট্যাটাস' : 'All Statuses'}</option>
              <option value="order_received">Order Received</option>
              <option value="mentor_assigned">Mentor Assigned</option>
              <option value="contacted_student">Contacted</option>
              <option value="in_progress">In Progress</option>
              <option value="delivered_completed">Delivered</option>
            </select>
          </div>

          {/* University Filter */}
          <select
            value={universityFilter}
            onChange={(e) => setUniversityFilter(e.target.value)}
            className="px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold text-slate-700 focus:ring-2 focus:ring-blue-500 shrink-0"
          >
            <option value="All">{language === 'bn' ? 'সকল বিশ্ববিদ্যালয়' : 'All Universities'}</option>
            {universitiesList.map(u => (
              <option key={u} value={u}>{u}</option>
            ))}
          </select>
        </div>
      </motion.div>

      {/* Orders Table Container */}
      <motion.div 
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="bg-white rounded-3xl border border-slate-200 shadow-xs overflow-hidden"
      >
        <div className="p-4 sm:p-5 border-b border-slate-100 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <h3 className="font-bold text-slate-900 text-sm sm:text-base">
              {language === 'bn' ? 'অর্ডার তালিকা ও রিয়েলটাইম স্ট্যাটাস' : 'Active Orders Queue'}
            </h3>
            <span className="px-2.5 py-0.5 rounded-full text-xs font-black bg-blue-100 text-blue-800">
              {filteredOrders.length}
            </span>
          </div>

          <div className="text-xs text-slate-400">
            {language === 'bn' ? 'ক্লিক করে স্ট্যাটাস ও মেন্টর আপডেট করুন' : 'Click order row to update details'}
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs sm:text-sm text-slate-700">
            <thead className="bg-slate-50/80 border-b border-slate-200 text-slate-500 font-bold uppercase text-[10px] tracking-wider">
              <tr>
                <th className="py-3 px-4">Order ID & Date</th>
                <th className="py-3 px-4">Student & Contact</th>
                <th className="py-3 px-4">University & Course</th>
                <th className="py-3 px-4">Services & Fee</th>
                <th className="py-3 px-4">Deadline</th>
                <th className="py-3 px-4">Assigned Mentor</th>
                <th className="py-3 px-4">Status</th>
                <th className="py-3 px-4 text-right">Actions</th>
              </tr>
            </thead>

            <tbody className="divide-y divide-slate-100">
              {filteredOrders.length > 0 ? (
                filteredOrders.map((order, idx) => (
                  <motion.tr
                    key={order.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.03 }}
                    className="hover:bg-blue-50/40 transition-colors group cursor-pointer"
                    onClick={() => setSelectedOrderForDrawer(order)}
                  >
                    {/* Order ID */}
                    <td className="py-3.5 px-4">
                      <div className="font-mono font-black text-blue-700">
                        {order.id}
                      </div>
                      <div className="text-[11px] text-slate-400 mt-0.5">
                        {order.createdAt.slice(0, 10)}
                      </div>
                    </td>

                    {/* Student Info */}
                    <td className="py-3.5 px-4">
                      <div className="font-bold text-slate-900">
                        {order.customerName}
                      </div>
                      <div className="text-[11px] text-slate-500 font-mono">
                        📞 {order.phone}
                      </div>
                    </td>

                    {/* University & Course */}
                    <td className="py-3.5 px-4 max-w-[200px]">
                      <div className="font-semibold text-slate-800 truncate" title={order.university}>
                        {order.university}
                      </div>
                      <div className="text-[11px] text-blue-600 truncate font-medium" title={order.courseName}>
                        {order.courseName}
                      </div>
                    </td>

                    {/* Service & Fee */}
                    <td className="py-3.5 px-4">
                      <div className="font-bold text-slate-900">
                        ৳{order.totalAmount}
                      </div>
                      <div className="text-[11px] text-slate-500 truncate max-w-[140px]">
                        {order.items.map(i => i.serviceTitle).join(', ')}
                      </div>
                    </td>

                    {/* Deadline */}
                    <td className="py-3.5 px-4">
                      <div className="flex items-center gap-1 font-semibold text-slate-700">
                        <Calendar className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                        <span>{order.deadline}</span>
                      </div>
                    </td>

                    {/* Mentor */}
                    <td className="py-3.5 px-4">
                      <div className="flex items-center gap-1.5">
                        <UserCheck className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                        <span className="font-semibold text-slate-800 text-xs">
                          {order.assignedMentorName || (
                            <span className="text-amber-600 italic">Unassigned</span>
                          )}
                        </span>
                      </div>
                    </td>

                    {/* Status Badge */}
                    <td className="py-3.5 px-4">
                      {getStatusBadge(order.status)}
                    </td>

                    {/* Actions */}
                    <td className="py-3.5 px-4 text-right" onClick={(e) => e.stopPropagation()}>
                      <div className="flex items-center justify-end gap-1.5">
                        {/* WhatsApp Direct */}
                        <a
                          href={`https://wa.me/${order.whatsapp.replace(/[^0-9]/g, '')}?text=Hello%20${encodeURIComponent(order.customerName)},%20regarding%20your%20Edu%20Quest%20order%20${order.id}...`}
                          target="_blank"
                          rel="noreferrer"
                          title="Message on WhatsApp"
                          className="p-1.5 bg-emerald-50 hover:bg-emerald-100 text-emerald-700 rounded-lg transition-colors"
                        >
                          <MessageSquare className="w-4 h-4" />
                        </a>

                        {/* Edit Button */}
                        <button
                          onClick={() => setSelectedOrderForDrawer(order)}
                          title="Manage Order"
                          className="p-1.5 bg-blue-50 hover:bg-blue-100 text-blue-700 rounded-lg transition-colors cursor-pointer"
                        >
                          <Edit3 className="w-4 h-4" />
                        </button>

                        {/* Delete Button */}
                        <button
                          onClick={() => handleDelete(order.id)}
                          title="Delete Order"
                          className="p-1.5 bg-rose-50 hover:bg-rose-100 text-rose-600 rounded-lg transition-colors cursor-pointer"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </motion.tr>
                ))
              ) : (
                <tr>
                  <td colSpan={8} className="py-12 text-center text-slate-400">
                    {language === 'bn' ? 'কোনো অর্ডার খুঁজে পাওয়া যায়নি।' : 'No orders matched your search criteria.'}
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </motion.div>

      {/* Slide-in Order Action Drawer */}
      <OrderActionDrawer 
        order={selectedOrderForDrawer} 
        onClose={() => setSelectedOrderForDrawer(null)} 
      />

    </div>
  );
};
