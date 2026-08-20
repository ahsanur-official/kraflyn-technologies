import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { Layers, Edit3, DollarSign, Clock, CheckCircle2, Save, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';

export const ServicesPricingManager: React.FC = () => {
  const { services, updateServicePrice, showToast, language } = useApp();
  const [editingId, setEditingId] = useState<string | null>(null);
  const [tempPrice, setTempPrice] = useState<number>(500);

  const handleStartEdit = (id: string, currentPrice: number) => {
    setEditingId(id);
    setTempPrice(currentPrice);
  };

  const handleSavePrice = (id: string) => {
    updateServicePrice(id, tempPrice);
    setEditingId(null);
    showToast(language === 'bn' ? 'সার্ভিস প্রাইস আপডেট হয়েছে' : 'Service price updated successfully');
  };

  return (
    <div className="space-y-6">
      
      {/* Header */}
      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white p-5 rounded-3xl border border-slate-200 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-4"
      >
        <div>
          <h3 className="font-bold text-base text-slate-900 flex items-center gap-2">
            <Layers className="w-5 h-5 text-blue-600" />
            <span>{language === 'bn' ? 'সার্ভিস ক্যাটালগ ও প্রাইসিং কনফিগারেটর' : 'Services Catalog & Pricing Config'}</span>
          </h3>
          <p className="text-xs text-slate-500 mt-0.5">
            {language === 'bn' ? 'সার্ভিসের বেস প্রাইস এবং আনুমানিক ডেলিভারি সময় সমন্বয় করুন' : 'Adjust starting prices, package baselines, and estimated delivery turnarounds'}
          </p>
        </div>
      </motion.div>

      {/* Services Pricing Table */}
      <motion.div 
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white rounded-3xl border border-slate-200 shadow-xs overflow-hidden"
      >
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs sm:text-sm text-slate-700">
            <thead className="bg-slate-50 border-b border-slate-200 text-slate-500 font-bold uppercase text-[10px] tracking-wider">
              <tr>
                <th className="py-3 px-4">Service Category & Name</th>
                <th className="py-3 px-4">Estimated Turnaround</th>
                <th className="py-3 px-4">Starting Price (BDT ৳)</th>
                <th className="py-3 px-4 text-right">Actions</th>
              </tr>
            </thead>

            <tbody className="divide-y divide-slate-100">
              {services.map((service, idx) => (
                <tr key={service.id} className="hover:bg-slate-50/80 transition-colors">
                  
                  {/* Category & Title */}
                  <td className="py-3.5 px-4">
                    <div className="font-bold text-slate-900 text-sm">
                      {service.title}
                    </div>
                    <div className="text-[11px] text-blue-600 font-medium">
                      {service.category}
                    </div>
                  </td>

                  {/* Turnaround */}
                  <td className="py-3.5 px-4">
                    <div className="flex items-center gap-1.5 text-slate-600 font-medium">
                      <Clock className="w-3.5 h-3.5 text-blue-500" />
                      <span>{service.turnaround}</span>
                    </div>
                  </td>

                  {/* Starting Price */}
                  <td className="py-3.5 px-4">
                    {editingId === service.id ? (
                      <div className="flex items-center gap-2">
                        <span className="text-slate-500 font-bold">৳</span>
                        <input
                          type="number"
                          value={tempPrice}
                          onChange={(e) => setTempPrice(Number(e.target.value))}
                          className="w-24 px-2 py-1 bg-white border border-blue-400 rounded-lg text-xs font-bold text-slate-900 focus:ring-2 focus:ring-blue-500"
                        />
                      </div>
                    ) : (
                      <span className="font-black text-slate-900 text-sm">
                        ৳{service.startingPrice}
                      </span>
                    )}
                  </td>

                  {/* Actions */}
                  <td className="py-3.5 px-4 text-right">
                    {editingId === service.id ? (
                      <div className="flex items-center justify-end gap-1.5">
                        <button
                          onClick={() => handleSavePrice(service.id)}
                          className="px-3 py-1.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg font-bold text-xs flex items-center gap-1 shadow-xs cursor-pointer"
                        >
                          <Save className="w-3.5 h-3.5" />
                          <span>{language === 'bn' ? 'সংরক্ষণ' : 'Save'}</span>
                        </button>
                        <button
                          onClick={() => setEditingId(null)}
                          className="px-3 py-1.5 border border-slate-300 text-slate-600 rounded-lg text-xs font-semibold hover:bg-slate-100 cursor-pointer"
                        >
                          {language === 'bn' ? 'বাতিল' : 'Cancel'}
                        </button>
                      </div>
                    ) : (
                      <button
                        onClick={() => handleStartEdit(service.id, service.startingPrice)}
                        className="px-3 py-1.5 bg-blue-50 hover:bg-blue-100 text-blue-700 rounded-lg font-bold text-xs flex items-center gap-1 ml-auto cursor-pointer"
                      >
                        <Edit3 className="w-3.5 h-3.5" />
                        <span>{language === 'bn' ? 'মূল্য এডিট' : 'Edit Price'}</span>
                      </button>
                    )}
                  </td>

                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>

    </div>
  );
};
