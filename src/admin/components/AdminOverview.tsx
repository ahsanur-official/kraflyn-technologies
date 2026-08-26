import React from 'react';
import { useApp } from '../../context/AppContext';
import { 
  ShoppingBag, 
  Clock, 
  CheckCircle2, 
  DollarSign, 
  Users, 
  Star, 
  Sparkles, 
  ArrowUpRight, 
  Calendar,
  AlertCircle,
  GraduationCap
} from 'lucide-react';
import { motion } from 'motion/react';

interface AdminOverviewProps {
  onGoToOrders: () => void;
  onGoToReviews: () => void;
}

export const AdminOverview: React.FC<AdminOverviewProps> = ({ onGoToOrders, onGoToReviews }) => {
  const { orders, reviews, language, t } = useApp();

  const totalOrders = orders.length;
  const newOrders = orders.filter(o => o.status === 'order_received').length;
  const inProgressOrders = orders.filter(o => ['mentor_assigned', 'contacted_student', 'in_progress'].includes(o.status)).length;
  const deliveredOrders = orders.filter(o => o.status === 'delivered_completed').length;
  const totalRevenue = orders.reduce((sum, o) => sum + (o.totalAmount || 0), 0);
  const avgOrderValue = totalOrders > 0 ? Math.round(totalRevenue / totalOrders) : 0;
  const avgRating = (reviews.reduce((s, r) => s + r.rating, 0) / (reviews.length || 1)).toFixed(1);

  const kpis = [
    {
      id: 'revenue',
      title: language === 'bn' ? 'মোট সংগৃহীত রেভিনিউ' : 'Total Revenue',
      value: `৳${totalRevenue.toLocaleString()}`,
      subtitle: `${language === 'bn' ? 'গড় অর্ডার মান' : 'Avg order'}: ৳${avgOrderValue}`,
      icon: DollarSign,
      color: 'from-emerald-500 to-teal-600',
      bg: 'bg-emerald-50',
      border: 'border-emerald-200',
      textColor: 'text-emerald-700'
    },
    {
      id: 'new_orders',
      title: language === 'bn' ? 'নতুন ক্লায়েন্ট অর্ডার' : 'New Client Orders',
      value: newOrders,
      subtitle: language === 'bn' ? 'স্পেশালিস্ট বরাদ্দের অপেক্ষায়' : 'Needs specialist triage',
      icon: AlertCircle,
      color: 'from-amber-500 to-orange-600',
      bg: 'bg-amber-50',
      border: 'border-amber-200',
      textColor: 'text-amber-700',
      pulse: newOrders > 0
    },
    {
      id: 'in_progress',
      title: language === 'bn' ? 'চলমান স্প্রিন্ট ও ডেলিভারি' : 'In Progress Sprints',
      value: inProgressOrders,
      subtitle: language === 'bn' ? 'টিম কাজ করছে' : 'Active development',
      icon: Clock,
      color: 'from-blue-500 to-indigo-600',
      bg: 'bg-blue-50',
      border: 'border-blue-200',
      textColor: 'text-blue-700'
    },
    {
      id: 'delivered',
      title: language === 'bn' ? 'সম্পন্ন সফল ডেলিভারি' : 'Delivered & Completed',
      value: deliveredOrders,
      subtitle: language === 'bn' ? '১০০% ক্লায়েন্ট সন্তুষ্টি' : '100% Client satisfaction',
      icon: CheckCircle2,
      color: 'from-indigo-500 to-purple-600',
      bg: 'bg-indigo-50',
      border: 'border-indigo-200',
      textColor: 'text-indigo-700'
    }
  ];

  return (
    <div className="space-y-4 sm:space-y-6">
      
      {/* 4 Animated KPI Stat Cards - 2 cols on mobile, 4 on desktop */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-4 sm:gap-6">
        {kpis.map((kpi, idx) => {
          const Icon = kpi.icon;
          return (
            <motion.div
              key={kpi.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.05, duration: 0.3 }}
              whileHover={{ y: -2, transition: { duration: 0.2 } }}
              className={`p-3.5 sm:p-5 rounded-2xl sm:rounded-3xl bg-white border ${kpi.border} shadow-xs relative overflow-hidden flex flex-col justify-between`}
            >
              {kpi.pulse && (
                <span className="absolute top-3 right-3 sm:top-4 sm:right-4 flex h-2.5 w-2.5 sm:h-3 sm:w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 sm:h-3 sm:w-3 bg-amber-500"></span>
                </span>
              )}

              <div>
                <div className="flex items-center justify-between mb-2 sm:mb-3">
                  <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-slate-500 truncate max-w-[80px] sm:max-w-none">
                    {kpi.title}
                  </span>
                  <div className={`w-7 h-7 sm:w-9 sm:h-9 rounded-xl ${kpi.bg} ${kpi.textColor} flex items-center justify-center shrink-0`}>
                    <Icon className="w-3.5 h-3.5 sm:w-5 sm:h-5" />
                  </div>
                </div>

                <div className="text-xl sm:text-3xl font-black text-slate-900 tracking-tight">
                  {kpi.value}
                </div>

                <div className="text-[10px] sm:text-xs text-slate-500 mt-1 truncate font-medium">
                  <span>{kpi.subtitle}</span>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Two Column Grid: Recent Orders Quick Queue & Reviews Snapshot */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
        
        {/* Left 2 Cols: Recent Active Orders */}
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="lg:col-span-2 bg-white rounded-2xl sm:rounded-3xl border border-slate-200 p-4 sm:p-6 shadow-xs flex flex-col justify-between"
        >
          <div>
            <div className="flex items-center justify-between mb-3 sm:mb-4">
              <div>
                <h3 className="text-sm sm:text-base font-bold text-slate-900">
                  {language === 'bn' ? 'সাম্প্রতিক অর্ডার কিউ' : 'Recent Incoming Orders Queue'}
                </h3>
                <p className="text-[11px] text-slate-500">
                  {language === 'bn' ? 'সর্বশেষ প্রাপ্ত অর্ডারসমূহের দ্রুত ট্রায়াজ' : 'Quick triage for the latest incoming requests'}
                </p>
              </div>

              <button
                onClick={onGoToOrders}
                className="text-xs font-bold text-blue-600 hover:text-blue-700 flex items-center gap-1 cursor-pointer py-1"
              >
                <span>{language === 'bn' ? 'সবগুলো' : 'View All'}</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>

            <div className="divide-y divide-slate-100">
              {orders.slice(0, 4).map((order) => (
                <div key={order.id} className="py-2.5 sm:py-3 flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 sm:gap-3 text-xs">
                  <div className="min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="font-mono font-bold text-blue-700">{order.id}</span>
                      <span className="font-bold text-slate-900 truncate">{order.customerName}</span>
                    </div>
                    <div className="text-slate-500 text-[11px] mt-0.5 truncate">
                      {order.university} • <strong className="text-slate-700 font-medium">{order.courseName}</strong>
                    </div>
                  </div>

                  <div className="flex items-center justify-between sm:justify-end gap-2 text-right shrink-0 pt-1 sm:pt-0">
                    <div className="font-bold text-slate-900 text-xs sm:text-sm">৳{order.totalAmount}</div>
                    <span className="inline-block text-[10px] font-bold px-2 py-0.5 rounded-full bg-blue-50 text-blue-700">
                      {order.status.replace(/_/g, ' ')}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between">
            <span className="text-[11px] text-slate-500 font-medium hidden sm:inline">
              ⚡ {language === 'bn' ? '১৫ মিনিটের মধ্যে সাড়া প্রদান নিশ্চিত করুন' : 'Ensure fast triage for incoming requests'}
            </span>
            <button
              onClick={onGoToOrders}
              className="w-full sm:w-auto px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold text-xs shadow-xs cursor-pointer min-h-[36px]"
            >
              {language === 'bn' ? 'অর্ডার পরিচালনা করুন' : 'Manage Orders'}
            </button>
          </div>
        </motion.div>

        {/* Right 1 Col: Client Feedback & Quick Stats */}
        <motion.div
          initial={{ opacity: 0, x: 10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.25 }}
          className="bg-white rounded-2xl sm:rounded-3xl border border-slate-200 p-4 sm:p-6 shadow-xs flex flex-col justify-between"
        >
          <div>
            <div className="flex items-center justify-between mb-3 sm:mb-4">
              <div>
                <h3 className="text-sm sm:text-base font-bold text-slate-900">
                  {language === 'bn' ? 'ক্লায়েন্ট সন্তুষ্টি' : 'Client Satisfaction'}
                </h3>
                <p className="text-[11px] text-slate-500">
                  {reviews.length} {language === 'bn' ? 'যাচাইকৃত রিভিউ' : 'verified client testimonials'}
                </p>
              </div>

              <div className="flex items-center gap-1 text-amber-500 bg-amber-50 px-2 py-0.5 rounded-lg font-black text-xs">
                <Star className="w-3.5 h-3.5 fill-amber-400" />
                <span>{avgRating}</span>
              </div>
            </div>

            <div className="space-y-2.5">
              {reviews.slice(0, 3).map((r) => (
                <div key={r.id} className="p-2.5 sm:p-3 bg-slate-50 rounded-xl border border-slate-100 text-xs">
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-bold text-slate-800 text-[11px] sm:text-xs truncate">{r.studentName || r.clientName}</span>
                    <span className="text-amber-500 font-bold text-[11px] shrink-0">★ {r.rating}.0</span>
                  </div>
                  <p className="text-slate-600 text-[10px] sm:text-[11px] line-clamp-2 italic">
                    "{r.comment}"
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-4 pt-3 border-t border-slate-100">
            <button
              onClick={onGoToReviews}
              className="w-full py-2 bg-slate-100 hover:bg-slate-200 text-slate-800 rounded-xl font-bold text-xs transition-colors cursor-pointer min-h-[36px]"
            >
              {language === 'bn' ? 'রিভিউ মডারেশন প্যানেল' : 'Moderate Reviews'}
            </button>
          </div>
        </motion.div>

      </div>

    </div>
  );
};
