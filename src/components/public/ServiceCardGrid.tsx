import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { Service } from '../../types';
import { 
  BookOpen, 
  FileText, 
  Code, 
  FlaskConical, 
  Mic, 
  Microscope, 
  GraduationCap, 
  Layers,
  Clock, 
  CheckCircle2, 
  ArrowRight, 
  ShoppingBag, 
  Sparkles,
  Search,
  Filter,
  Plus,
  Info
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export const ServiceCardGrid: React.FC = () => {
  const { 
    services, 
    bilingualServices, 
    addToCart, 
    openOrderModal, 
    openServiceDetail,
    language, 
    t 
  } = useApp();

  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { key: 'All', label: { bn: 'সকল সার্ভিস', en: 'All Services' } },
    { key: 'Academic Support', label: { bn: 'একাডেমিক সাপোর্ট', en: 'Academic Support' } },
    { key: 'Technical Support', label: { bn: 'টেকনিক্যাল ও ল্যাব', en: 'Technical & Lab' } },
    { key: 'Communication', label: { bn: 'প্রেজেন্টেশন ও ডিফেন্স', en: 'Presentation' } },
    { key: 'Research', label: { bn: 'রিসার্চ ও পেপার', en: 'Research' } },
    { key: 'Final Year', label: { bn: 'থিসিস ও FYP', en: 'Thesis & FYP' } }
  ];

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'BookOpen': return <BookOpen className="w-5 h-5" />;
      case 'Code': return <Code className="w-5 h-5" />;
      case 'FileText': return <FileText className="w-5 h-5" />;
      case 'FlaskConical': return <FlaskConical className="w-5 h-5" />;
      case 'Mic': return <Mic className="w-5 h-5" />;
      case 'Microscope': return <Microscope className="w-5 h-5" />;
      case 'Layers': return <Layers className="w-5 h-5" />;
      case 'GraduationCap':
      default:
        return <GraduationCap className="w-5 h-5" />;
    }
  };

  const filteredServices = bilingualServices.filter(item => {
    const matchesCat = selectedCategory === 'All' || item.category === selectedCategory;
    const titleText = item.title[language].toLowerCase();
    const descText = item.shortDesc[language].toLowerCase();
    const query = searchQuery.toLowerCase();

    return matchesCat && (titleText.includes(query) || descText.includes(query));
  });

  const handleAddToCart = (bilingualItem: typeof bilingualServices[0]) => {
    const rawService = services.find(s => s.id === bilingualItem.id) || {
      id: bilingualItem.id,
      title: bilingualItem.title[language],
      iconName: bilingualItem.iconName,
      shortDesc: bilingualItem.shortDesc[language],
      fullDesc: bilingualItem.fullDesc[language],
      category: bilingualItem.category as any,
      startingPrice: bilingualItem.startingPrice,
      deliverables: bilingualItem.deliverables[language],
      typicalTurnaround: bilingualItem.typicalTurnaround
    };

    addToCart(rawService, { 
      packageTier: 'Standard Support',
      customPrice: bilingualItem.startingPrice
    });
  };

  const handleOrderDirectly = (bilingualItem: typeof bilingualServices[0]) => {
    const rawService = services.find(s => s.id === bilingualItem.id) || {
      id: bilingualItem.id,
      title: bilingualItem.title[language],
      iconName: bilingualItem.iconName,
      shortDesc: bilingualItem.shortDesc[language],
      fullDesc: bilingualItem.fullDesc[language],
      category: bilingualItem.category as any,
      startingPrice: bilingualItem.startingPrice,
      deliverables: bilingualItem.deliverables[language],
      typicalTurnaround: bilingualItem.typicalTurnaround
    };

    openOrderModal(rawService);
  };

  return (
    <section id="services-section" className="py-16 sm:py-24 bg-white border-b border-slate-200">
      <div className="max-w-[1920px] w-full mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 2xl:px-20">
        
        {/* Section Header with Scroll Reveal */}
        <motion.div 
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4"
        >
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-800 text-xs font-bold uppercase tracking-wider mb-2">
              <Sparkles className="w-3.5 h-3.5 text-blue-600 shrink-0" />
              <span>{t.servicesBadge}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight">
              {t.servicesHeading}
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-2xl">
              {t.servicesSubtitle}
            </p>
          </div>

          {/* Search Bar */}
          <div className="w-full md:w-80 relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={language === 'bn' ? 'সার্ভিস খুঁজুন (যেমন: ল্যাব, থিসিস, কোড)...' : 'Search services (e.g. Lab, Code, Thesis)...'}
              className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-xs sm:text-sm focus:outline-hidden focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all shadow-xs"
            />
          </div>
        </motion.div>

        {/* Category Tabs with Animated Pill */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center gap-2 overflow-x-auto pb-4 scrollbar-none mb-8"
        >
          <span className="text-xs font-bold text-slate-400 uppercase tracking-wider shrink-0 flex items-center gap-1">
            <Filter className="w-3 h-3" /> {t.filterByDept}
          </span>
          {categories.map((cat) => {
            const isSelected = selectedCategory === cat.key;

            return (
              <button
                key={cat.key}
                onClick={() => setSelectedCategory(cat.key)}
                className={`relative px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all duration-300 cursor-pointer ${
                  isSelected
                    ? 'text-white bg-blue-600 shadow-md shadow-blue-500/30'
                    : 'bg-slate-50 text-slate-600 border border-slate-200 hover:bg-slate-100 hover:border-slate-300'
                }`}
              >
                <span>{cat.label[language]}</span>
              </button>
            );
          })}
        </motion.div>

        {/* 8 Services Grid with Scroll Cascading Animation */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          <AnimatePresence>
            {filteredServices.map((item, idx) => {
              const hasTag = item.tag;

              return (
                <motion.div
                  layout
                  key={item.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.45, delay: (idx % 4) * 0.07, ease: [0.16, 1, 0.3, 1] }}
                  whileHover={{ y: -7, scale: 1.012, transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] } }}
                  className="bg-white rounded-3xl border border-slate-200 hover:border-blue-300 p-5 shadow-xs hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden smooth-card-transition"
                >
                  {/* Top Accent bar */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  <div>
                    {/* Icon & Category Badge */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="w-11 h-11 rounded-2xl bg-blue-50 border border-blue-100 text-blue-600 flex items-center justify-center group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 shadow-xs shrink-0">
                        {getIcon(item.iconName)}
                      </div>

                      {hasTag ? (
                        <span className="px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider bg-amber-100 text-amber-900 border border-amber-300">
                          {item.tag}
                        </span>
                      ) : (
                        <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-slate-100 text-slate-600">
                          {item.category}
                        </span>
                      )}
                    </div>

                    {/* Title & Description */}
                    <h3 className="text-base font-bold text-slate-900 group-hover:text-blue-600 transition-colors duration-200 leading-snug">
                      {item.title[language]}
                    </h3>
                    <p className="text-xs text-slate-600 mt-2 leading-relaxed line-clamp-3">
                      {item.shortDesc[language]}
                    </p>

                    {/* Deliverables checklist */}
                    <div className="mt-4 pt-3 border-t border-slate-100 space-y-1.5">
                      {item.deliverables[language].slice(0, 3).map((dItem, dIdx) => (
                        <div key={dIdx} className="flex items-center gap-1.5 text-[11px] text-slate-600">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                          <span className="truncate">{dItem}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Price & Action Buttons */}
                  <div className="mt-6 pt-4 border-t border-slate-100 space-y-3">
                    <div className="flex items-baseline justify-between">
                      <div>
                        <span className="text-[10px] text-slate-400 block font-medium">{t.startingPrice}</span>
                        <div className="text-lg font-black text-slate-900">
                          ৳{item.startingPrice}
                        </div>
                      </div>
                      <div className="text-[11px] text-slate-500 flex items-center gap-1">
                        <Clock className="w-3 h-3 text-blue-500" />
                        <span>{item.typicalTurnaround}</span>
                      </div>
                    </div>

                    {/* Action Buttons: Add to Cart + Order Now */}
                    <div className="grid grid-cols-2 gap-2">
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.95 }}
                        transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                        onClick={() => handleAddToCart(item)}
                        className="py-2.5 px-3 bg-slate-100 hover:bg-blue-50 text-slate-700 hover:text-blue-700 border border-slate-200 hover:border-blue-300 rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 transition-all duration-200 cursor-pointer"
                        title="Add to cart"
                      >
                        <Plus className="w-3.5 h-3.5" />
                        <span>{t.addToCart}</span>
                      </motion.button>

                      <motion.button
                        whileHover={{ scale: 1.03, y: -1 }}
                        whileTap={{ scale: 0.95 }}
                        transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                        onClick={() => handleOrderDirectly(item)}
                        className="py-2.5 px-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs font-bold flex items-center justify-center gap-1 shadow-md shadow-blue-500/20 hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-200 cursor-pointer"
                      >
                        <span>{t.directOrder}</span>
                        <ArrowRight className="w-3 h-3" />
                      </motion.button>
                    </div>
                  </div>

                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
};
