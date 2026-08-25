import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { Layers, Edit3, Clock, Save, Search, Palette, Code2, GraduationCap, RotateCcw, Globe, BarChart3 } from 'lucide-react';
import { motion } from 'motion/react';
import { DynamicIcon } from '../../components/common/DynamicIcon';
import { SERVICES } from '../../data/mockData';

export const ServicesPricingManager: React.FC = () => {
  const { services, updateServicePrice, showToast, language } = useApp();
  const [editingId, setEditingId] = useState<string | null>(null);
  const [tempPrice, setTempPrice] = useState<number>(500);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const handleStartEdit = (id: string, currentPrice: number) => {
    setEditingId(id);
    setTempPrice(currentPrice);
  };

  const handleSavePrice = (id: string) => {
    updateServicePrice(id, tempPrice);
    setEditingId(null);
    showToast(language === 'bn' ? 'সার্ভিস প্রাইস আপডেট হয়েছে' : 'Service price updated successfully');
  };

  const handleResetDefaults = () => {
    if (window.confirm(language === 'bn' ? 'আপনি কি সকল সার্ভিসের মূল্য ডিফল্ট মূল্যে রিসেট করতে চান?' : 'Do you want to reset all service pricing to default?')) {
      SERVICES.forEach(s => {
        updateServicePrice(s.id, s.startingPrice);
      });
      showToast(language === 'bn' ? 'সকল মূল্য ডিফল্টে রিসেট করা হয়েছে' : 'All service prices reset to defaults');
    }
  };

  const filteredServices = services.filter(service => {
    const matchesCategory = selectedCategory === 'All' || service.category === selectedCategory;
    const matchesSearch = searchQuery.trim() === '' || 
      service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.shortDesc.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const categories = [
    { key: 'All', label: { bn: 'সকল সার্ভিস', en: 'All Services' }, count: services.length, icon: Layers },
    { key: 'Design Services', label: { bn: 'ডিজাইন সার্ভিস', en: 'Design Services' }, count: services.filter(s => s.category === 'Design Services').length, icon: Palette },
    { key: 'Development Services', label: { bn: 'ডেভেলপমেন্ট সার্ভিস', en: 'Development Services' }, count: services.filter(s => s.category === 'Development Services').length, icon: Code2 },
    { key: 'WordPress Services', label: { bn: 'ওয়ার্ডপ্রেস সার্ভিস', en: 'WordPress Services' }, count: services.filter(s => s.category === 'WordPress Services').length, icon: Globe },
    { key: 'Data Analysis', label: { bn: 'ডাটা অ্যানালাইসিস', en: 'Data Analysis' }, count: services.filter(s => s.category === 'Data Analysis').length, icon: BarChart3 },
    { key: 'Student Support', label: { bn: 'স্টুডেন্ট সাপোর্ট', en: 'Student Support' }, count: services.filter(s => s.category === 'Student Support').length, icon: GraduationCap },
  ];

  return (
    <div className="space-y-4 sm:space-y-6">
      
      {/* Header & Controls */}
      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white p-4 sm:p-5 rounded-2xl sm:rounded-3xl border border-slate-200 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-4"
      >
        <div>
          <h3 className="font-bold text-sm sm:text-base text-slate-900 flex items-center gap-2">
            <Layers className="w-5 h-5 text-blue-600" />
            <span>{language === 'bn' ? 'সার্ভিস ক্যাটালগ ও প্রাইসিং কনফিগারেটর' : 'Services Catalog & Pricing Config'}</span>
            <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-blue-50 text-blue-700 border border-blue-100">
              {services.length} {language === 'bn' ? 'টি সার্ভিস' : 'Services'}
            </span>
          </h3>
          <p className="text-[12px] text-slate-500 mt-0.5">
            {language === 'bn' ? 'সার্ভিসের বেস প্রাইস এবং ডেলিভারি টাইমলাইন রিয়েল-টাইমে আপডেট ও ম্যানেজ করুন' : 'Manage starting prices, turnaround estimates, and live service configurations'}
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={handleResetDefaults}
            className="px-3 py-2 text-xs font-semibold text-slate-600 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 rounded-xl flex items-center gap-1.5 transition-colors cursor-pointer"
            title="Reset to default prices"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>{language === 'bn' ? 'ডিফল্ট প্রাইস' : 'Reset Defaults'}</span>
          </button>
        </div>
      </motion.div>

      {/* Filter and Search Bar */}
      <div className="flex flex-col sm:flex-row gap-3 items-stretch sm:items-center justify-between">
        {/* Category Pills */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0 scrollbar-none">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isSelected = selectedCategory === cat.key;
            return (
              <button
                key={cat.key}
                onClick={() => setSelectedCategory(cat.key)}
                className={`px-3 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all flex items-center gap-1.5 cursor-pointer ${
                  isSelected 
                    ? 'bg-blue-600 text-white shadow-xs' 
                    : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{language === 'bn' ? cat.label.bn : cat.label.en}</span>
                <span className={`px-1.5 py-0.2 rounded-full text-[10px] ${isSelected ? 'bg-blue-700 text-white' : 'bg-slate-100 text-slate-600'}`}>
                  {cat.count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Search */}
        <div className="relative min-w-[220px]">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder={language === 'bn' ? 'সার্ভিস খুঁজুন (যেমন: Figma, WordPress)...' : 'Search services (e.g. Figma, WordPress)...'}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-3 py-2 bg-white border border-slate-200 rounded-xl text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      {/* Mobile Card View (sm:hidden) */}
      <div className="sm:hidden space-y-3">
        {filteredServices.map((service) => (
          <div key={service.id} className="bg-white p-4 rounded-2xl border border-slate-200 shadow-xs space-y-3">
            <div className="flex items-start justify-between gap-2">
              <div className="flex items-start gap-2.5 min-w-0">
                <div className="w-8 h-8 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 shrink-0 mt-0.5">
                  <DynamicIcon name={service.iconName} className="w-4 h-4" />
                </div>
                <div className="min-w-0">
                  <h4 className="font-bold text-slate-900 text-sm truncate">{service.title}</h4>
                  <div className="text-[11px] text-blue-600 font-medium truncate">{service.category}</div>
                </div>
              </div>
              <div className="text-right shrink-0">
                {editingId === service.id ? (
                  <div className="flex items-center gap-1">
                    <span className="text-slate-500 font-bold text-xs">৳</span>
                    <input
                      type="number"
                      value={tempPrice}
                      onChange={(e) => setTempPrice(Number(e.target.value))}
                      className="w-20 px-2 py-1 bg-white border border-blue-400 rounded-lg text-xs font-bold text-slate-900 focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                ) : (
                  <span className="font-black text-slate-900 text-sm">
                    ৳{service.startingPrice}
                  </span>
                )}
              </div>
            </div>

            <p className="text-[11px] text-slate-600 line-clamp-2">{service.shortDesc}</p>

            <div className="flex items-center justify-between pt-2 border-t border-slate-100 text-xs">
              <div className="flex items-center gap-1.5 text-slate-500 text-[11px]">
                <Clock className="w-3.5 h-3.5 text-blue-500 shrink-0" />
                <span>{service.typicalTurnaround || (service as any).turnaround || '24 - 48 Hours'}</span>
              </div>

              {editingId === service.id ? (
                <div className="flex items-center gap-1.5">
                  <button
                    onClick={() => handleSavePrice(service.id)}
                    className="px-3 py-1.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg font-bold text-xs flex items-center gap-1 shadow-xs cursor-pointer min-h-[36px]"
                  >
                    <Save className="w-3.5 h-3.5" />
                    <span>{language === 'bn' ? 'সংরক্ষণ' : 'Save'}</span>
                  </button>
                  <button
                    onClick={() => setEditingId(null)}
                    className="px-2.5 py-1.5 border border-slate-300 text-slate-600 rounded-lg text-xs font-semibold hover:bg-slate-100 cursor-pointer min-h-[36px]"
                  >
                    {language === 'bn' ? 'বাতিল' : 'Cancel'}
                  </button>
                </div>
              ) : (
                <button
                  onClick={() => handleStartEdit(service.id, service.startingPrice)}
                  className="px-3 py-1.5 bg-blue-50 hover:bg-blue-100 text-blue-700 rounded-lg font-bold text-xs flex items-center gap-1 cursor-pointer min-h-[36px]"
                >
                  <Edit3 className="w-3.5 h-3.5" />
                  <span>{language === 'bn' ? 'মূল্য এডিট' : 'Edit Price'}</span>
                </button>
              )}
            </div>
          </div>
        ))}
        {filteredServices.length === 0 && (
          <div className="bg-white p-8 rounded-2xl border border-slate-200 text-center text-slate-500 text-xs">
            {language === 'bn' ? 'কোনো সার্ভিস পাওয়া যায়নি' : 'No services found matching your criteria'}
          </div>
        )}
      </div>

      {/* Desktop/Tablet Services Pricing Table (hidden sm:block) */}
      <motion.div 
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        className="hidden sm:block bg-white rounded-3xl border border-slate-200 shadow-xs overflow-hidden"
      >
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs sm:text-sm text-slate-700">
            <thead className="bg-slate-50 border-b border-slate-200 text-slate-500 font-bold uppercase text-[10px] tracking-wider">
              <tr>
                <th className="py-3 px-4">Service Details</th>
                <th className="py-3 px-4">Category</th>
                <th className="py-3 px-4">Estimated Turnaround</th>
                <th className="py-3 px-4">Starting Price (BDT ৳)</th>
                <th className="py-3 px-4 text-right">Actions</th>
              </tr>
            </thead>

            <tbody className="divide-y divide-slate-100">
              {filteredServices.map((service) => (
                <tr key={service.id} className="hover:bg-slate-50/80 transition-colors">
                  
                  {/* Service Details & Icon */}
                  <td className="py-3.5 px-4">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 shrink-0">
                        <DynamicIcon name={service.iconName} className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="font-bold text-slate-900 text-sm">
                          {service.title}
                        </div>
                        <div className="text-[11px] text-slate-500 max-w-sm truncate">
                          {service.shortDesc}
                        </div>
                      </div>
                    </div>
                  </td>

                  {/* Category */}
                  <td className="py-3.5 px-4">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-slate-100 text-slate-700 border border-slate-200">
                      {service.category}
                    </span>
                  </td>

                  {/* Turnaround */}
                  <td className="py-3.5 px-4">
                    <div className="flex items-center gap-1.5 text-slate-600 font-medium text-xs">
                      <Clock className="w-3.5 h-3.5 text-blue-500 shrink-0" />
                      <span>{service.typicalTurnaround || (service as any).turnaround || '24 - 48 Hours'}</span>
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
              {filteredServices.length === 0 && (
                <tr>
                  <td colSpan={5} className="py-8 text-center text-slate-500 text-xs">
                    {language === 'bn' ? 'কোনো সার্ভিস পাওয়া যায়নি' : 'No services found matching your criteria'}
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </motion.div>

    </div>
  );
};

