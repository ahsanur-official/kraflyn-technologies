import React, { useState, useMemo } from 'react';
import { useApp } from '../../context/AppContext';
import { DynamicIcon } from '../common/DynamicIcon';
import { 
  Clock, 
  CheckCircle2, 
  ArrowRight, 
  ShoppingBag, 
  Sparkles,
  Search,
  Filter,
  Plus,
  X,
  Palette,
  Code2,
  GraduationCap,
  Layers,
  SlidersHorizontal,
  ChevronRight,
  Zap,
  Star,
  Flame,
  LayoutGrid,
  List,
  RotateCcw,
  Check,
  Tag
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

  const [selectedPillar, setSelectedPillar] = useState<string>('All');
  const [selectedTag, setSelectedTag] = useState<string>('All');
  const [selectedPriceRange, setSelectedPriceRange] = useState<string>('All');
  const [sortBy, setSortBy] = useState<'featured' | 'price-asc' | 'price-desc' | 'fastest'>('featured');
  const [searchQuery, setSearchQuery] = useState('');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  // Primary 3 Pillars of Kraflyn Technologies
  const pillars = [
    {
      key: 'All',
      icon: Layers,
      count: 45,
      label: { bn: 'সকল সার্ভিস (৪৫)', en: 'All Services (45)' },
      subtext: { bn: 'সম্পূর্ণ ক্যাটালগ', en: 'Complete Catalog' },
      accent: 'from-blue-600 to-indigo-600',
      activeColor: 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-blue-500/25 ring-2 ring-blue-500',
      badgeBg: 'bg-blue-100 text-blue-800'
    },
    {
      key: 'Design Services',
      icon: Palette,
      count: 15,
      label: { bn: '১. ডিজাইন সার্ভিস', en: '1. Design Services' },
      subtext: { bn: '১৫টি ক্রিয়েটিভ সল্যুশন', en: '15 Creative Solutions' },
      accent: 'from-fuchsia-600 to-pink-600',
      activeColor: 'bg-gradient-to-r from-fuchsia-600 to-pink-600 text-white shadow-fuchsia-500/25 ring-2 ring-fuchsia-500',
      badgeBg: 'bg-fuchsia-100 text-fuchsia-800',
      description: {
        bn: 'পোস্টার, ব্যানার, প্রেজেন্টেশন স্লাইড, লোগো, সিভি, ইউআই/ইউএক্স এবং রিসার্চ পোস্টার ডিজাইন সহ ১৫টি প্রফেশনাল ক্রিয়েটিভ সল্যুশন।',
        en: '15 High-impact visual design services: Posters, PPT decks, Brand identity, CV/Resume, UI/UX, and Research posters.'
      }
    },
    {
      key: 'Development Services',
      icon: Code2,
      count: 15,
      label: { bn: '২. ডেভেলপমেন্ট সার্ভিস', en: '2. Development Services' },
      subtext: { bn: '১৫টি সফটওয়্যার সেবা', en: '15 Tech Solutions' },
      accent: 'from-cyan-600 to-blue-600',
      activeColor: 'bg-gradient-to-r from-cyan-600 to-blue-600 text-white shadow-cyan-500/25 ring-2 ring-cyan-500',
      badgeBg: 'bg-cyan-100 text-cyan-800',
      description: {
        bn: 'পোর্টফোলিও, ক্লাব ওয়েবসাইট, ই-কমার্স, মোবাইল অ্যাপ, ব্যাকএন্ড, এপিআই ও বাগ ফিক্সিং সহ ১৫টি মডার্ন সফটওয়্যার সেবা।',
        en: '15 Scalable development services: Portfolio, Web apps, Mobile apps, APIs, Bug fixes, and Custom software systems.'
      }
    },
    {
      key: 'Student Support',
      icon: GraduationCap,
      count: 15,
      label: { bn: '৩. স্টুডেন্ট সাপোর্ট', en: '3. Student Support' },
      subtext: { bn: '১৫টি একাডেমিক সেবা', en: '15 Academic Supports' },
      accent: 'from-emerald-600 to-teal-600',
      activeColor: 'bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-emerald-500/25 ring-2 ring-emerald-500',
      badgeBg: 'bg-emerald-100 text-emerald-800',
      description: {
        bn: 'ফাইনাল ইয়ার প্রজেক্ট (FYP), রিসার্চ পেপার ফরম্যাটিং (IEEE/LaTeX), কোডিং গাইডেন্স ও টার্নিটিন চেক সহ ১৫টি একাডেমিক সল্যুশন।',
        en: '15 Dedicated student mentorship services: FYP guidance, Research formatting, Programming help, and Turnitin assistance.'
      }
    }
  ];

  // Sub-tag quick filters
  const tagFilters = [
    { key: 'All', label: { bn: 'সকল', en: 'All' } },
    { key: 'Popular', icon: Star, label: { bn: '⭐ জনপ্রিয়', en: '⭐ Popular' } },
    { key: 'Fast', icon: Zap, label: { bn: '⚡ দ্রুত ডেলিভারি', en: '⚡ Fast (<24h)' } },
    { key: 'High Demand', icon: Flame, label: { bn: '🔥 হাই ডিমান্ড', en: '🔥 High Demand' } },
    { key: 'Budget', label: { bn: '💰 সাশ্রয়ী (≤ ৳১,০০০)', en: '💰 Budget (≤ ৳1k)' } }
  ];

  // Price range filters
  const priceRanges = [
    { key: 'All', label: { bn: 'সকল বাজেট', en: 'All Budgets' } },
    { key: 'under-1000', label: { bn: '৳১,০০০ এর নিচে', en: 'Under ৳1,000' } },
    { key: '1000-3000', label: { bn: '৳১,০০০ - ৳৩,০০০', en: '৳1,000 - ৳3,000' } },
    { key: 'above-3000', label: { bn: '৳৩,০০০+', en: '৳3,000+' } }
  ];

  // Quick suggestion chips
  const quickSearchSuggestions = [
    { label: 'Poster', bn: 'পোস্টার' },
    { label: 'Portfolio', bn: 'পোর্টফোলিও' },
    { label: 'FYP', bn: 'এফওয়াইপি' },
    { label: 'LaTeX', bn: 'ল্যাটেক্স' },
    { label: 'Figma UI', bn: 'ফিগুমা ইউআই' },
    { label: 'Turnitin', bn: 'টার্নিটিন' },
    { label: 'Bug Fix', bn: 'বাগ ফিক্স' }
  ];

  const filteredAndSortedServices = useMemo(() => {
    return bilingualServices
      .filter((item) => {
        // Pillar match
        const matchesPillar = selectedPillar === 'All' || item.category === selectedPillar;

        // Tag match
        let matchesTag = true;
        if (selectedTag === 'Popular') {
          matchesTag = item.tag === 'Popular' || item.tag === 'Flagship' || item.tag === 'Core Service';
        } else if (selectedTag === 'Fast') {
          matchesTag = item.typicalTurnaround.toLowerCase().includes('hour') || item.typicalTurnaround.toLowerCase().includes('hours');
        } else if (selectedTag === 'High Demand') {
          matchesTag = item.tag === 'High Demand' || item.tag === 'Essential' || item.tag === 'Flagship';
        } else if (selectedTag === 'Budget') {
          matchesTag = item.startingPrice <= 1000;
        }

        // Price range match
        let matchesPrice = true;
        if (selectedPriceRange === 'under-1000') {
          matchesPrice = item.startingPrice < 1000;
        } else if (selectedPriceRange === '1000-3000') {
          matchesPrice = item.startingPrice >= 1000 && item.startingPrice <= 3000;
        } else if (selectedPriceRange === 'above-3000') {
          matchesPrice = item.startingPrice > 3000;
        }

        // Search match
        const query = searchQuery.trim().toLowerCase();
        let matchesSearch = true;
        if (query) {
          const titleBn = item.title.bn.toLowerCase();
          const titleEn = item.title.en.toLowerCase();
          const descBn = item.shortDesc.bn.toLowerCase();
          const descEn = item.shortDesc.en.toLowerCase();
          const delivBn = item.deliverables.bn.join(' ').toLowerCase();
          const delivEn = item.deliverables.en.join(' ').toLowerCase();
          matchesSearch =
            titleBn.includes(query) ||
            titleEn.includes(query) ||
            descBn.includes(query) ||
            descEn.includes(query) ||
            delivBn.includes(query) ||
            delivEn.includes(query);
        }

        return matchesPillar && matchesTag && matchesPrice && matchesSearch;
      })
      .sort((a, b) => {
        if (sortBy === 'price-asc') return a.startingPrice - b.startingPrice;
        if (sortBy === 'price-desc') return b.startingPrice - a.startingPrice;
        if (sortBy === 'fastest') {
          const aIsHours = a.typicalTurnaround.toLowerCase().includes('hour');
          const bIsHours = b.typicalTurnaround.toLowerCase().includes('hour');
          if (aIsHours && !bIsHours) return -1;
          if (!aIsHours && bIsHours) return 1;
          return a.startingPrice - b.startingPrice;
        }
        return 0; // default featured order
      });
  }, [bilingualServices, selectedPillar, selectedTag, selectedPriceRange, sortBy, searchQuery]);

  const activePillarObj = pillars.find((p) => p.key === selectedPillar);

  const hasActiveFilters = selectedPillar !== 'All' || selectedTag !== 'All' || selectedPriceRange !== 'All' || searchQuery !== '';

  const handleResetFilters = () => {
    setSelectedPillar('All');
    setSelectedTag('All');
    setSelectedPriceRange('All');
    setSearchQuery('');
    setSortBy('featured');
  };

  const handleAddToCart = (bilingualItem: (typeof bilingualServices)[0]) => {
    const rawService = services.find((s) => s.id === bilingualItem.id) || {
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

  const handleOrderDirectly = (bilingualItem: (typeof bilingualServices)[0]) => {
    const rawService = services.find((s) => s.id === bilingualItem.id) || {
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
    <section id="services-section" className="py-16 sm:py-24 bg-slate-50/70 border-b border-slate-200">
      <div className="max-w-[1920px] w-full mx-auto px-3 sm:px-6 md:px-8 lg:px-10 xl:px-12">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4"
        >
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-blue-500/10 via-indigo-500/10 to-fuchsia-500/10 border border-blue-200 text-blue-900 text-xs font-black uppercase tracking-wider mb-2.5 shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-blue-600 shrink-0 animate-pulse" />
              <span>{t.servicesBadge}</span>
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-black text-slate-900 tracking-tight leading-tight">
              {t.servicesHeading}
            </h2>
            <p className="text-xs sm:text-sm md:text-base text-slate-600 mt-2 max-w-3xl leading-relaxed">
              {t.servicesSubtitle}
            </p>
          </div>

          {/* Quick Stats Pill + View Mode Toggle */}
          <div className="flex items-center gap-2 shrink-0 self-start md:self-auto">
            <div className="flex items-center gap-2 text-xs font-bold text-slate-700 bg-white px-3.5 py-2 rounded-2xl border border-slate-200 shadow-xs">
              <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span>
                {language === 'bn'
                  ? `${filteredAndSortedServices.length} / ৪৫টি সার্ভিস`
                  : `${filteredAndSortedServices.length} / 45 Services`}
              </span>
            </div>

            <div className="bg-white p-1 rounded-2xl border border-slate-200 shadow-xs flex items-center gap-1">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-1.5 rounded-xl transition-all cursor-pointer ${
                  viewMode === 'grid'
                    ? 'bg-blue-600 text-white shadow-xs'
                    : 'text-slate-500 hover:text-slate-800 hover:bg-slate-100'
                }`}
                title={language === 'bn' ? 'গ্রিড ভিউ' : 'Grid View'}
              >
                <LayoutGrid className="w-4 h-4" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-1.5 rounded-xl transition-all cursor-pointer ${
                  viewMode === 'list'
                    ? 'bg-blue-600 text-white shadow-xs'
                    : 'text-slate-500 hover:text-slate-800 hover:bg-slate-100'
                }`}
                title={language === 'bn' ? 'লিস্ট ভিউ' : 'List View'}
              >
                <List className="w-4 h-4" />
              </button>
            </div>
          </div>
        </motion.div>

        {/* Premium Interactive Filter Control Box */}
        <div className="bg-white rounded-3xl border border-slate-200/90 shadow-sm p-4 sm:p-6 mb-10 space-y-5">
          
          {/* Level 1: Primary 3 Pillars + All Tab */}
          <div className="space-y-2">
            <div className="flex items-center justify-between text-xs font-bold text-slate-500 uppercase tracking-wider">
              <span className="flex items-center gap-1.5">
                <Filter className="w-3.5 h-3.5 text-blue-600" />
                {language === 'bn' ? 'প্রধান ক্যাটাগরি বা পিলার নির্বাচন করুন' : 'Select Service Pillar'}
              </span>
              {hasActiveFilters && (
                <button
                  onClick={handleResetFilters}
                  className="text-blue-600 hover:text-blue-700 normal-case font-bold text-xs flex items-center gap-1 cursor-pointer transition-colors"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>{language === 'bn' ? 'সকল ফিল্টার রিসেট' : 'Reset All Filters'}</span>
                </button>
              )}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {pillars.map((pillar) => {
                const Icon = pillar.icon;
                const isSelected = selectedPillar === pillar.key;

                return (
                  <motion.button
                    key={pillar.key}
                    whileHover={{ scale: 1.015, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setSelectedPillar(pillar.key)}
                    className={`relative p-3.5 sm:p-4 rounded-2xl text-left border transition-all duration-200 cursor-pointer flex items-center justify-between gap-3 ${
                      isSelected
                        ? `${pillar.activeColor} border-transparent shadow-lg`
                        : 'bg-slate-50 hover:bg-slate-100/90 text-slate-700 border-slate-200 hover:border-slate-300'
                    }`}
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <div
                        className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-all ${
                          isSelected
                            ? 'bg-white/20 text-white'
                            : 'bg-white text-slate-700 shadow-xs border border-slate-200'
                        }`}
                      >
                        <Icon className="w-5 h-5" />
                      </div>
                      <div className="min-w-0">
                        <div className="font-extrabold text-xs sm:text-sm truncate">
                          {pillar.label[language]}
                        </div>
                        <div className={`text-[11px] font-medium truncate ${isSelected ? 'text-white/80' : 'text-slate-500'}`}>
                          {pillar.subtext[language]}
                        </div>
                      </div>
                    </div>

                    <span
                      className={`text-xs px-2.5 py-1 rounded-full font-black shrink-0 ${
                        isSelected
                          ? 'bg-white text-slate-900 shadow-xs'
                          : 'bg-slate-200/80 text-slate-700'
                      }`}
                    >
                      {pillar.count}
                    </span>
                  </motion.button>
                );
              })}
            </div>
          </div>

          {/* Contextual Pillar Detail Banner */}
          {activePillarObj && activePillarObj.description && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className={`p-4 rounded-2xl bg-gradient-to-r ${activePillarObj.accent} text-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 shadow-md`}
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-white/20 backdrop-blur-md flex items-center justify-center shrink-0">
                  <activePillarObj.icon className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="font-extrabold text-sm sm:text-base">
                    {activePillarObj.label[language]}
                  </h4>
                  <p className="text-xs text-white/90 mt-0.5 leading-relaxed">
                    {activePillarObj.description[language]}
                  </p>
                </div>
              </div>

              <span className="text-[11px] font-bold bg-white text-slate-900 px-3 py-1 rounded-full shrink-0 shadow-xs">
                {language === 'bn' ? '১৫টি ডেডিকেটেড সার্ভিস' : '15 Dedicated Services'}
              </span>
            </motion.div>
          )}

          {/* Level 2: Search Bar + Quick Tag Chips + Price Filters + Sort Control */}
          <div className="pt-3 border-t border-slate-100 space-y-3">
            
            {/* Search Input Row */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5">
              <div className="relative flex-1">
                <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder={
                    language === 'bn'
                      ? 'সার্ভিস খুঁজুন (যেমন: পোস্টার, ফ্লায়ার, রিঅ্যাক্ট, ল্যাটেক্স, টার্নিটিন, এপিআই, প্রেজেন্টেশন)...'
                      : 'Search any service (e.g. Poster, UI/UX, Portfolio, LaTeX, Turnitin, API, Presentation)...'
                  }
                  className="w-full pl-10 pr-9 py-2.5 bg-slate-50 border border-slate-200 hover:border-slate-300 rounded-xl text-xs sm:text-sm focus:outline-hidden focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all shadow-xs"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-slate-400 hover:text-slate-600 rounded-md cursor-pointer"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>

              {/* Sort Selector */}
              <div className="flex items-center gap-1.5 shrink-0">
                <span className="text-xs text-slate-500 font-bold whitespace-nowrap hidden sm:inline">
                  <SlidersHorizontal className="w-3.5 h-3.5 inline mr-1 text-blue-600" />
                  {language === 'bn' ? 'সর্ট:' : 'Sort:'}
                </span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as any)}
                  className="px-3 py-2 bg-slate-50 border border-slate-200 hover:border-slate-300 rounded-xl text-xs font-bold text-slate-700 focus:outline-hidden focus:ring-2 focus:ring-blue-500 cursor-pointer shadow-xs"
                >
                  <option value="featured">
                    {language === 'bn' ? 'প্রস্তাবিত (Featured)' : 'Featured'}
                  </option>
                  <option value="price-asc">
                    {language === 'bn' ? 'মূল্য: কম থেকে বেশি' : 'Price: Low to High'}
                  </option>
                  <option value="price-desc">
                    {language === 'bn' ? 'মূল্য: বেশি থেকে কম' : 'Price: High to Low'}
                  </option>
                  <option value="fastest">
                    {language === 'bn' ? 'দ্রুত ডেলিভারি' : 'Fastest Turnaround'}
                  </option>
                </select>
              </div>
            </div>

            {/* Quick Suggestion Chips */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none text-[11px]">
              <span className="text-slate-400 font-bold whitespace-nowrap mr-1 flex items-center gap-1">
                <Tag className="w-3 h-3 text-slate-400" />
                {language === 'bn' ? 'পরামর্শ:' : 'Suggestions:'}
              </span>
              {quickSearchSuggestions.map((sug, sIdx) => (
                <button
                  key={sIdx}
                  onClick={() => setSearchQuery(language === 'bn' ? sug.bn : sug.label)}
                  className="px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-blue-600 text-slate-600 font-medium transition-colors cursor-pointer whitespace-nowrap border border-slate-200/60"
                >
                  {language === 'bn' ? sug.bn : sug.label}
                </button>
              ))}
            </div>

            {/* Sub-Tag Chips + Budget Filter Row */}
            <div className="flex flex-wrap items-center justify-between gap-3 pt-2 border-t border-slate-100">
              {/* Tag Chips */}
              <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
                {tagFilters.map((tItem) => {
                  const isSelected = selectedTag === tItem.key;
                  return (
                    <button
                      key={tItem.key}
                      onClick={() => setSelectedTag(tItem.key)}
                      className={`px-3 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all cursor-pointer border ${
                        isSelected
                          ? 'bg-slate-900 text-white border-slate-900 shadow-xs'
                          : 'bg-slate-50 hover:bg-slate-100 text-slate-600 border-slate-200'
                      }`}
                    >
                      {tItem.label[language]}
                    </button>
                  );
                })}
              </div>

              {/* Price Range Pills */}
              <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
                {priceRanges.map((pItem) => {
                  const isSelected = selectedPriceRange === pItem.key;
                  return (
                    <button
                      key={pItem.key}
                      onClick={() => setSelectedPriceRange(pItem.key)}
                      className={`px-2.5 py-1 rounded-lg text-[11px] font-bold whitespace-nowrap transition-all cursor-pointer border ${
                        isSelected
                          ? 'bg-blue-50 text-blue-700 border-blue-300 shadow-xs'
                          : 'bg-white text-slate-500 border-slate-200 hover:bg-slate-50'
                      }`}
                    >
                      {pItem.label[language]}
                    </button>
                  );
                })}
              </div>
            </div>

          </div>
        </div>

        {/* Empty State */}
        {filteredAndSortedServices.length === 0 && (
          <div className="text-center py-16 bg-white rounded-3xl border border-slate-200 p-8 space-y-4">
            <div className="w-16 h-16 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mx-auto">
              <Search className="w-8 h-8 opacity-60" />
            </div>
            <h3 className="text-lg font-bold text-slate-900">
              {language === 'bn' ? 'কোনো সার্ভিস পাওয়া যায়নি' : 'No Services Found'}
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 max-w-md mx-auto">
              {language === 'bn'
                ? `আপনার ফিল্টার অনুযায়ী কোনো ফলাফল পাওয়া যায়নি। ফিল্টার রিসেট করে আবার চেষ্টা করুন।`
                : `No services matching your active filters. Try searching with different keywords or reset filters.`}
            </p>
            <button
              onClick={handleResetFilters}
              className="px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold rounded-xl shadow-xs transition-colors cursor-pointer inline-flex items-center gap-2"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>{language === 'bn' ? 'ফিল্টার রিসেট করুন' : 'Reset All Filters'}</span>
            </button>
          </div>
        )}

        {/* View Mode: Grid vs List */}
        {viewMode === 'grid' ? (
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            <AnimatePresence>
              {filteredAndSortedServices.map((item, idx) => {
                const isDesign = item.category === 'Design Services';
                const isDev = item.category === 'Development Services';
                const isStudent = item.category === 'Student Support';

                const categoryBadge = isDesign
                  ? 'bg-fuchsia-50 text-fuchsia-700 border-fuchsia-200'
                  : isDev
                  ? 'bg-cyan-50 text-cyan-700 border-cyan-200'
                  : 'bg-emerald-50 text-emerald-700 border-emerald-200';

                const iconBoxBg = isDesign
                  ? 'bg-fuchsia-50 text-fuchsia-600 group-hover:bg-fuchsia-600 group-hover:text-white border-fuchsia-100'
                  : isDev
                  ? 'bg-cyan-50 text-cyan-600 group-hover:bg-cyan-600 group-hover:text-white border-cyan-100'
                  : 'bg-emerald-50 text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white border-emerald-100';

                const topBarGradient = isDesign
                  ? 'from-fuchsia-500 to-pink-500'
                  : isDev
                  ? 'from-cyan-500 to-blue-500'
                  : 'from-emerald-500 to-teal-500';

                return (
                  <motion.div
                    layout
                    key={item.id}
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-40px' }}
                    transition={{ duration: 0.4, delay: (idx % 4) * 0.05, ease: [0.16, 1, 0.3, 1] }}
                    whileHover={{ y: -6, scale: 1.012, transition: { duration: 0.25, ease: [0.16, 1, 0.3, 1] } }}
                    className="bg-white rounded-3xl border border-slate-200/90 hover:border-slate-300 p-5 sm:p-6 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between group relative overflow-hidden smooth-card-transition"
                  >
                    {/* Top Accent Strip on Hover */}
                    <div
                      className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${topBarGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                    />

                    <div>
                      {/* Top Meta: Icon + Category Badge + Tag */}
                      <div className="flex items-start justify-between gap-2 mb-4">
                        <div
                          className={`w-12 h-12 rounded-2xl border flex items-center justify-center transition-all duration-300 shadow-xs shrink-0 group-hover:scale-105 ${iconBoxBg}`}
                        >
                          <DynamicIcon name={item.iconName} className="w-5 h-5" />
                        </div>

                        <div className="flex flex-col items-end gap-1">
                          {item.tag && (
                            <span className="px-2 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider bg-amber-100 text-amber-900 border border-amber-300">
                              {item.tag}
                            </span>
                          )}
                          <span
                            className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold border truncate max-w-[130px] ${categoryBadge}`}
                          >
                            {item.category === 'Design Services'
                              ? (language === 'bn' ? 'ডিজাইন' : 'Design')
                              : item.category === 'Development Services'
                              ? (language === 'bn' ? 'ডেভেলপমেন্ট' : 'Dev')
                              : (language === 'bn' ? 'স্টুডেন্ট সাপোর্ট' : 'Support')}
                          </span>
                        </div>
                      </div>

                      {/* Title */}
                      <h3
                        onClick={() => openServiceDetail(services.find((s) => s.id === item.id) || (item as any))}
                        className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors duration-200 leading-snug cursor-pointer flex items-center justify-between"
                      >
                        <span>{item.title[language]}</span>
                      </h3>

                      {/* Short Description */}
                      <p className="text-xs text-slate-600 mt-2 leading-relaxed line-clamp-3">
                        {item.shortDesc[language]}
                      </p>

                      {/* Deliverables Checklist Preview */}
                      <div className="mt-4 pt-3 border-t border-slate-100 space-y-1.5">
                        {item.deliverables[language].slice(0, 3).map((dItem, dIdx) => (
                          <div key={dIdx} className="flex items-start gap-1.5 text-[11px] text-slate-600">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                            <span className="truncate">{dItem}</span>
                          </div>
                        ))}
                        {item.deliverables[language].length > 3 && (
                          <button
                            onClick={() => openServiceDetail(services.find((s) => s.id === item.id) || (item as any))}
                            className="text-[10.5px] font-semibold text-blue-600 hover:text-blue-800 hover:underline flex items-center gap-0.5 cursor-pointer pt-0.5"
                          >
                            <span>
                              +{item.deliverables[language].length - 3}{' '}
                              {language === 'bn' ? 'আরো ফিচার দেখুন' : 'more deliverables'}
                            </span>
                            <ChevronRight className="w-3 h-3" />
                          </button>
                        )}
                      </div>
                    </div>

                    {/* Pricing, Turnaround & Action Buttons */}
                    <div className="mt-6 pt-4 border-t border-slate-100 space-y-3">
                      <div className="flex items-baseline justify-between">
                        <div>
                          <span className="text-[10px] text-slate-400 block font-semibold uppercase tracking-wider">
                            {t.startingPrice}
                          </span>
                          <div className="text-lg sm:text-xl font-black text-slate-900 tracking-tight">
                            ৳{item.startingPrice.toLocaleString()}
                          </div>
                        </div>
                        <div className="text-[11px] font-semibold text-slate-500 bg-slate-50 px-2.5 py-1 rounded-xl border border-slate-200 flex items-center gap-1">
                          <Clock className="w-3 h-3 text-blue-500" />
                          <span>{item.typicalTurnaround}</span>
                        </div>
                      </div>

                      {/* Action Buttons: Add to Cart + Direct Order */}
                      <div className="grid grid-cols-2 gap-2">
                        <motion.button
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.96 }}
                          transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                          onClick={() => handleAddToCart(item)}
                          className="py-2.5 px-3 bg-slate-100 hover:bg-blue-50 text-slate-800 hover:text-blue-700 border border-slate-200 hover:border-blue-300 rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 transition-all duration-200 cursor-pointer"
                          title={language === 'bn' ? 'কার্টে যোগ করুন' : 'Add to cart'}
                        >
                          <Plus className="w-3.5 h-3.5" />
                          <span>{t.addToCart}</span>
                        </motion.button>

                        <motion.button
                          whileHover={{ scale: 1.03, y: -1 }}
                          whileTap={{ scale: 0.96 }}
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
        ) : (
          /* List / Table Mode */
          <div className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead className="bg-slate-50 border-b border-slate-200 text-slate-500 font-bold uppercase tracking-wider">
                  <tr>
                    <th className="p-4">{language === 'bn' ? 'সার্ভিস' : 'Service'}</th>
                    <th className="p-4">{language === 'bn' ? 'ক্যাটাগরি' : 'Category'}</th>
                    <th className="p-4">{language === 'bn' ? 'ডেলিভারি সময়' : 'Turnaround'}</th>
                    <th className="p-4">{language === 'bn' ? 'শুরুর মূল্য' : 'Starting Price'}</th>
                    <th className="p-4 text-right">{language === 'bn' ? 'অ্যাকশন' : 'Action'}</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {filteredAndSortedServices.map((item) => {
                    const isDesign = item.category === 'Design Services';
                    const isDev = item.category === 'Development Services';
                    const categoryBadge = isDesign
                      ? 'bg-fuchsia-50 text-fuchsia-700 border-fuchsia-200'
                      : isDev
                      ? 'bg-cyan-50 text-cyan-700 border-cyan-200'
                      : 'bg-emerald-50 text-emerald-700 border-emerald-200';

                    return (
                      <tr key={item.id} className="hover:bg-slate-50/80 transition-colors group">
                        <td className="p-4">
                          <div className="flex items-center gap-3">
                            <div className="w-9 h-9 rounded-xl bg-slate-100 border border-slate-200 flex items-center justify-center shrink-0">
                              <DynamicIcon name={item.iconName} className="w-4 h-4 text-slate-700" />
                            </div>
                            <div>
                              <div
                                onClick={() => openServiceDetail(services.find((s) => s.id === item.id) || (item as any))}
                                className="font-bold text-slate-900 group-hover:text-blue-600 cursor-pointer text-xs sm:text-sm"
                              >
                                {item.title[language]}
                              </div>
                              <div className="text-[11px] text-slate-500 line-clamp-1 mt-0.5">
                                {item.shortDesc[language]}
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="p-4">
                          <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold border ${categoryBadge}`}>
                            {item.category === 'Design Services'
                              ? (language === 'bn' ? 'ডিজাইন' : 'Design')
                              : item.category === 'Development Services'
                              ? (language === 'bn' ? 'ডেভেলপমেন্ট' : 'Dev')
                              : (language === 'bn' ? 'স্টুডেন্ট সাপোর্ট' : 'Support')}
                          </span>
                        </td>
                        <td className="p-4 text-slate-600 font-medium">
                          <div className="flex items-center gap-1">
                            <Clock className="w-3.5 h-3.5 text-blue-500" />
                            <span>{item.typicalTurnaround}</span>
                          </div>
                        </td>
                        <td className="p-4 font-black text-slate-900 text-sm">
                          ৳{item.startingPrice.toLocaleString()}
                        </td>
                        <td className="p-4 text-right">
                          <div className="flex items-center justify-end gap-2">
                            <button
                              onClick={() => handleAddToCart(item)}
                              className="px-3 py-1.5 bg-slate-100 hover:bg-blue-50 text-slate-800 hover:text-blue-700 rounded-lg font-bold border border-slate-200 text-xs transition-colors cursor-pointer"
                            >
                              <Plus className="w-3 h-3 inline mr-1" />
                              <span>{t.addToCart}</span>
                            </button>
                            <button
                              onClick={() => handleOrderDirectly(item)}
                              className="px-3 py-1.5 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-bold text-xs shadow-xs transition-colors cursor-pointer"
                            >
                              <span>{t.orderNow}</span>
                            </button>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
