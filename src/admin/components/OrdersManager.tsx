import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { AcademicOrder } from '../../types';
import { 
  Search, 
  Filter, 
  Edit3, 
  Trash2, 
  MessageSquare, 
  UserCheck, 
  Calendar,
  Phone,
  ArrowRight
} from 'lucide-react';
import { motion } from 'motion/react';
import { OrderActionDrawer } from './OrderActionDrawer';

export const OrdersManager: React.FC = () => {
  const { orders, deleteOrder, showToast, language } = useApp();

  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState<string>('All');
  const [universityFilter, setUniversityFilter] = useState<string>('All');
  const [selectedOrderForDrawer, setSelectedOrderForDrawer] = useState<AcademicOrder | null>(null);

  const universitiesList = Array.from(new Set(orders.map(o => o.companyOrOrg || o.university).filter(Boolean)));

  const filteredOrders = orders.filter(order => {
    const org = order.companyOrOrg || order.university || '';
    const matchesSearch = 
      order.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
      order.customerName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      order.phone.includes(searchQuery) ||
      order.whatsapp.includes(searchQuery) ||
      org.toLowerCase().includes(searchQuery.toLowerCase()) ||
      order.courseName.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesStatus = statusFilter === 'All' || order.status === statusFilter;
    const matchesUni = universityFilter === 'All' || org === universityFilter;

    return matchesSearch && matchesStatus && matchesUni;
  });

  const getStatusBadge = (status: AcademicOrder['status']) => {
    switch (status) {
      case 'order_received':
        return <span className="px-2.5 py-1 rounded-full text-[10px] sm:text-[11px] font-bold bg-amber-100 text-amber-800 border border-amber-200">🟡 {language === 'bn' ? 'অর্ডার গৃহীত' : 'Order Received'}</span>;
      case 'mentor_assigned':
        return <span className="px-2.5 py-1 rounded-full text-[10px] sm:text-[11px] font-bold bg-blue-100 text-blue-800 border border-blue-200">🔵 {language === 'bn' ? 'স্পেশালিস্ট নিযুক্ত' : 'Specialist Assigned'}</span>;
      case 'contacted_student':
        return <span className="px-2.5 py-1 rounded-full text-[10px] sm:text-[11px] font-bold bg-purple-100 text-purple-800 border border-purple-200">🟣 {language === 'bn' ? 'যোগাযোগ সম্পন্ন' : 'Client Contacted'}</span>;
      case 'in_progress':
        return <span className="px-2.5 py-1 rounded-full text-[10px] sm:text-[11px] font-bold bg-indigo-100 text-indigo-800 border border-indigo-200">⏳ {language === 'bn' ? 'কাজ চলছে' : 'In Progress'}</span>;
      case 'delivered_completed':
        return <span className="px-2.5 py-1 rounded-full text-[10px] sm:text-[11px] font-bold bg-emerald-100 text-emerald-800 border border-emerald-200">✅ {language === 'bn' ? 'ডেলিভার্ড' : 'Delivered'}</span>;
      case 'cancelled':
        return <span className="px-2.5 py-1 rounded-full text-[10px] sm:text-[11px] font-bold bg-rose-100 text-rose-800 border border-rose-200">❌ {language === 'bn' ? 'বাতিল' : 'Cancelled'}</span>;
      default:
        return <span className="px-2.5 py-1 rounded-full text-[10px] sm:text-[11px] font-bold bg-slate-100 text-slate-700">{status}</span>;
    }
  };

  const handleDelete = (orderId: string) => {
    if (confirm(language === 'bn' ? `আপনি কি অর্ডার ${orderId} ডিলিট করতে চান?` : `Are you sure you want to delete order ${orderId}?`)) {
      deleteOrder(orderId);
      showToast(language === 'bn' ? `অর্ডার ${orderId} মুছে ফেলা হয়েছে` : `Order ${orderId} deleted`);
    }
  };

  return (
    <div className="space-y-4 sm:space-y-5">
      
      {/* Search & Filter Header Toolbar */}
      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white p-3.5 sm:p-5 rounded-2xl sm:rounded-3xl border border-slate-200 shadow-xs flex flex-col md:flex-row items-stretch md:items-center justify-between gap-2.5 sm:gap-3"
      >
        <div className="relative w-full md:w-80">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={language === 'bn' ? 'অর্ডার আইডি, ক্লায়েন্ট নাম, ফোন, প্রজেক্ট...' : 'Search by ID, client, phone, project...'}
            className="w-full pl-9 pr-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm focus:outline-hidden focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="grid grid-cols-2 md:flex items-center gap-2 w-full md:w-auto">
          {/* Status Filter */}
          <div className="flex items-center gap-1 min-w-0">
            <Filter className="w-3.5 h-3.5 text-slate-400 shrink-0 hidden sm:block" />
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="w-full px-2.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold text-slate-700 focus:ring-2 focus:ring-blue-500 truncate"
            >
              <option value="All">{language === 'bn' ? 'সকল স্ট্যাটাস' : 'All Statuses'}</option>
              <option value="order_received">Order Received</option>
              <option value="mentor_assigned">Specialist Assigned</option>
              <option value="contacted_student">Client Contacted</option>
              <option value="in_progress">In Progress</option>
              <option value="delivered_completed">Delivered</option>
            </select>
          </div>

          {/* University/Domain Filter */}
          <select
            value={universityFilter}
            onChange={(e) => setUniversityFilter(e.target.value)}
            className="w-full px-2.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold text-slate-700 focus:ring-2 focus:ring-blue-500 truncate"
          >
            <option value="All">{language === 'bn' ? 'সকল প্রতিষ্ঠান / সেক্টর' : 'All Organizations'}</option>
            {universitiesList.map(u => (
              <option key={u} value={u}>{u}</option>
            ))}
          </select>
        </div>
      </motion.div>

      {/* Orders Count Header Bar */}
      <div className="flex items-center justify-between px-1">
        <div className="flex items-center gap-2">
          <h3 className="font-bold text-slate-900 text-sm sm:text-base">
            {language === 'bn' ? 'ক্লায়েন্ট অর্ডার কিউ' : 'Client Orders Queue'}
          </h3>
          <span className="px-2.5 py-0.5 rounded-full text-xs font-black bg-blue-100 text-blue-800">
            {filteredOrders.length}
          </span>
        </div>
        <span className="text-[11px] text-slate-500">
          {language === 'bn' ? 'ক্লিক করে এডিট ও অ্যাসাইন করুন' : 'Tap to manage & assign specialist'}
        </span>
      </div>

      {/* MOBILE CARDS VIEW (md:hidden) */}
      <div className="md:hidden space-y-3">
        {filteredOrders.length > 0 ? (
          filteredOrders.map((order, idx) => (
            <motion.div
              key={order.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.03 }}
              className="bg-white rounded-2xl border border-slate-200 p-4 shadow-xs space-y-3"
            >
              {/* Header: ID + Status */}
              <div className="flex items-center justify-between gap-2 pb-2.5 border-b border-slate-100">
                <div className="flex items-center gap-2">
                  <span className="font-mono font-black text-blue-700 text-xs">{order.id}</span>
                  <span className="text-[10px] text-slate-400">{order.createdAt.slice(0, 10)}</span>
                </div>
                {getStatusBadge(order.status)}
              </div>

              {/* Client & Organization */}
              <div className="space-y-1">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-slate-900 text-sm">{order.customerName}</span>
                  <span className="font-black text-slate-900 text-sm">৳{order.totalAmount}</span>
                </div>
                <div className="text-xs text-slate-600 font-medium truncate">
                  🏢 {order.companyOrOrg || order.university} • <span className="text-blue-700 font-bold">{order.courseName}</span>
                </div>
                <div className="text-[11px] text-slate-500 truncate">
                  📦 {order.items.map(i => i.serviceTitle).join(', ')}
                </div>
              </div>

              {/* Deadline & Assigned Mentor */}
              <div className="grid grid-cols-2 gap-2 text-[11px] bg-slate-50 p-2.5 rounded-xl border border-slate-100">
                <div className="flex items-center gap-1.5 text-slate-700 font-semibold truncate">
                  <Calendar className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                  <span className="truncate">{order.deadline}</span>
                </div>
                <div className="flex items-center gap-1.5 text-slate-700 font-semibold truncate">
                  <UserCheck className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span className="truncate text-slate-800">{order.assignedMentorName || 'Unassigned'}</span>
                </div>
              </div>

              {/* Action Buttons Row with 44px+ touch targets */}
              <div className="flex items-center gap-2 pt-1">
                {/* 1-tap call */}
                <a
                  href={`tel:${order.phone}`}
                  className="flex-1 min-h-[40px] flex items-center justify-center gap-1 px-3 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl text-xs font-bold transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-slate-600" />
                  <span>Call</span>
                </a>

                {/* 1-tap WhatsApp */}
                <a
                  href={`https://wa.me/${order.whatsapp.replace(/[^0-9]/g, '')}?text=Hello%20${encodeURIComponent(order.customerName)},%20regarding%20your%20Kraflyn%20Technologies%20order%20${order.id}...`}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 min-h-[40px] flex items-center justify-center gap-1 px-3 py-2 bg-emerald-50 hover:bg-emerald-100 text-emerald-700 border border-emerald-200 rounded-xl text-xs font-bold transition-colors"
                >
                  <MessageSquare className="w-3.5 h-3.5 text-emerald-600" />
                  <span>WhatsApp</span>
                </a>

                {/* Manage Order Drawer Trigger */}
                <button
                  onClick={() => setSelectedOrderForDrawer(order)}
                  className="flex-1 min-h-[40px] flex items-center justify-center gap-1 px-3 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs font-bold shadow-xs cursor-pointer"
                >
                  <Edit3 className="w-3.5 h-3.5" />
                  <span>Manage</span>
                </button>

                {/* Delete */}
                <button
                  onClick={() => handleDelete(order.id)}
                  className="w-10 min-h-[40px] flex items-center justify-center text-rose-500 hover:bg-rose-50 border border-rose-200 rounded-xl cursor-pointer"
                  title="Delete"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>

            </motion.div>
          ))
        ) : (
          <div className="bg-white rounded-2xl border border-slate-200 p-8 text-center text-slate-400 text-xs">
            {language === 'bn' ? 'কোনো অর্ডার খুঁজে পাওয়া যায়নি।' : 'No orders matched your search criteria.'}
          </div>
        )}
      </div>

      {/* DESKTOP / TABLET TABLE VIEW (hidden md:block) */}
      <motion.div 
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="hidden md:block bg-white rounded-3xl border border-slate-200 shadow-xs overflow-hidden"
      >
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs sm:text-sm text-slate-700">
            <thead className="bg-slate-50/80 border-b border-slate-200 text-slate-500 font-bold uppercase text-[10px] tracking-wider">
              <tr>
                <th className="py-3 px-4">Order ID & Date</th>
                <th className="py-3 px-4">Client & Contact</th>
                <th className="py-3 px-4">Company & Project</th>
                <th className="py-3 px-4">Services & Fee</th>
                <th className="py-3 px-4">Deadline</th>
                <th className="py-3 px-4">Assigned Specialist</th>
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

                    {/* Client Info */}
                    <td className="py-3.5 px-4">
                      <div className="font-bold text-slate-900">
                        {order.customerName}
                      </div>
                      <div className="text-[11px] text-slate-500 font-mono">
                        📞 {order.phone}
                      </div>
                    </td>

                    {/* Company & Project */}
                    <td className="py-3.5 px-4 max-w-[200px]">
                      <div className="font-semibold text-slate-800 truncate" title={order.companyOrOrg || order.university}>
                        {order.companyOrOrg || order.university}
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
                          href={`https://wa.me/${order.whatsapp.replace(/[^0-9]/g, '')}?text=Hello%20${encodeURIComponent(order.customerName)},%20regarding%20your%20Kraflyn%20Technologies%20order%20${order.id}...`}
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
