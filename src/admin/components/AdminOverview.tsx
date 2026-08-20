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
      title: language === 'bn' ? 'নতুন অর্ডার (অ্যাসাইন বাকি)' : 'New Orders Awaiting',
      value: newOrders,
      subtitle: language === 'bn' ? 'অবিলম্বে মেন্টর বরাদ্দ দিন' : 'Needs mentor triage',
      icon: AlertCircle,
      color: 'from-amber-500 to-orange-600',
      bg: 'bg-amber-50',
      border: 'border-amber-200',
      textColor: 'text-amber-700',
      pulse: newOrders > 0
    },
    {
      id: 'in_progress',
      title: language === 'bn' ? 'চলমান ডেলিভারি ও সেশন' : 'In Progress Workflow',
      value: inProgressOrders,
      subtitle: language === 'bn' ? 'মেন্টর কাজ করছেন' : 'Active solutions',
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
      subtitle: language === 'bn' ? '১০০% সন্তুষ্টির সাথে' : '100% Student satisfaction',
      icon: CheckCircle2,
      color: 'from-indigo-500 to-purple-600',
      bg: 'bg-indigo-50',
      border: 'border-indigo-200',
      textColor: 'text-indigo-700'
    }
  ];

  return (
    <div className="space-y-8">
      
      {/* 4 Animated KPI Stat Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {kpis.map((kpi, idx) => {
          const Icon = kpi.icon;
          return (
            <motion.div
              key={kpi.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.08, duration: 0.4 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className={`p-5 rounded-3xl bg-white border ${kpi.border} shadow-xs relative overflow-hidden`}
            >
              {kpi.pulse && (
                <span className="absolute top-4 right-4 flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-amber-500"></span>
                </span>
              )}

              <div className="flex items-center justify-between mb-3">
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
                  {kpi.title}
                </span>
                <div className={`w-9 h-9 rounded-xl ${kpi.bg} ${kpi.textColor} flex items-center justify-center`}>
                  <Icon className="w-5 h-5" />
                </div>
              </div>

              <div className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                {kpi.value}
              </div>

              <div className="text-xs text-slate-500 mt-1 flex items-center gap-1 font-medium">
                <span>{kpi.subtitle}</span>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Two Column Grid: Recent Orders Quick Queue & Reviews Snapshot */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Left 2 Cols: Recent Active Orders */}
        <motion.div
          initial={{ opacity: 0, x: -15 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          className="lg:col-span-2 bg-white rounded-3xl border border-slate-200 p-5 sm:p-6 shadow-xs flex flex-col justify-between"
        >
          <div>
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-base font-bold text-slate-900">
                  {language === 'bn' ? 'সাম্প্রতিক অর্ডার কিউ' : 'Recent Incoming Orders Queue'}
                </h3>
                <p className="text-xs text-slate-500">
                  {language === 'bn' ? 'সর্বশেষ প্রাপ্ত অর্ডারসমূহের দ্রুত ট্রায়াজ' : 'Quick triage for the latest incoming requests'}
                </p>
              </div>

              <button
                onClick={onGoToOrders}
                className="text-xs font-bold text-blue-600 hover:text-blue-700 flex items-center gap-1 cursor-pointer"
              >
                <span>{language === 'bn' ? 'সবগুলো দেখুন' : 'View All'}</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>

            <div className="divide-y divide-slate-100">
              {orders.slice(0, 4).map((order) => (
                <div key={order.id} className="py-3 flex items-center justify-between gap-3 text-xs">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-mono font-bold text-blue-700">{order.id}</span>
                      <span className="font-bold text-slate-900">{order.customerName}</span>
                    </div>
                    <div className="text-slate-500 text-[11px] mt-0.5">
                      {order.university} • <strong className="text-slate-700">{order.courseName}</strong>
                    </div>
                  </div>

                  <div className="text-right shrink-0">
                    <div className="font-bold text-slate-900">৳{order.totalAmount}</div>
                    <span className="inline-block mt-0.5 text-[10px] font-bold px-2 py-0.5 rounded-full bg-blue-50 text-blue-700">
                      {order.status.replace(/_/g, ' ')}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-4 pt-4 border-t border-slate-100 flex items-center justify-between">
            <span className="text-xs text-slate-500 font-medium">
              ⚡ {language === 'bn' ? '১৫ মিনিটের মধ্যে সাড়া প্রদান নিশ্চিত করুন' : 'Ensure fast triage for incoming requests'}
            </span>
            <button
              onClick={onGoToOrders}
              className="px-4 py-1.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold text-xs shadow-xs cursor-pointer"
            >
              {language === 'bn' ? 'অর্ডার পরিচালনা করুন' : 'Manage Orders'}
            </button>
          </div>
        </motion.div>

        {/* Right 1 Col: Student Feedback & Quick Stats */}
        <motion.div
          initial={{ opacity: 0, x: 15 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-white rounded-3xl border border-slate-200 p-5 sm:p-6 shadow-xs flex flex-col justify-between"
        >
          <div>
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-base font-bold text-slate-900">
                  {language === 'bn' ? 'শিক্ষার্থী সন্তুষ্টি' : 'Student Satisfaction'}
                </h3>
                <p className="text-xs text-slate-500">
                  {reviews.length} {language === 'bn' ? 'যাচাইকৃত রিভিউ' : 'verified student reviews'}
                </p>
              </div>

              <div className="flex items-center gap-1 text-amber-500 bg-amber-50 px-2.5 py-1 rounded-xl font-black text-xs">
                <Star className="w-3.5 h-3.5 fill-amber-400" />
                <span>{avgRating} / 5.0</span>
              </div>
            </div>

            <div className="space-y-3">
              {reviews.slice(0, 3).map((r) => (
                <div key={r.id} className="p-3 bg-slate-50 rounded-2xl border border-slate-100 text-xs">
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-bold text-slate-800">{r.studentName}</span>
                    <span className="text-amber-500 font-bold">★ {r.rating}.0</span>
                  </div>
                  <p className="text-slate-600 text-[11px] line-clamp-2 italic">
                    "{r.comment}"
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-4 pt-4 border-t border-slate-100">
            <button
              onClick={onGoToReviews}
              className="w-full py-2 bg-slate-100 hover:bg-slate-200 text-slate-800 rounded-xl font-bold text-xs transition-colors cursor-pointer"
            >
              {language === 'bn' ? 'রিভিউ মডারেশন প্যানেল' : 'Moderate Reviews'}
            </button>
          </div>
        </motion.div>

      </div>

    </div>
  );
};
