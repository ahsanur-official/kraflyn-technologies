import React from 'react';
import { useApp } from '../../context/AppContext';
import { 
  ArrowRight, 
  ShoppingBag, 
  Sparkles, 
  Star, 
  ShieldCheck, 
  Clock, 
  GraduationCap, 
  MessageSquare, 
  CheckCircle2,
  Users,
  Search
} from 'lucide-react';

export const Hero: React.FC = () => {
  const { openOrderModal, openCart, cartCount, openOrderTracker } = useApp();

  const scrollToServices = () => {
    const el = document.getElementById('services-section');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-900 via-slate-900 to-blue-950 text-white pt-12 pb-20 sm:pt-16 sm:pb-28">
      {/* Subtle Background Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-tr from-blue-600/20 via-indigo-500/10 to-teal-400/20 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Heading & Value Proposition */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-6">
            
            {/* Top Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-400/30 text-blue-300 text-xs font-semibold backdrop-blur-md">
              <Sparkles className="w-3.5 h-3.5 text-amber-300" />
              <span>Edu Quest • Your Academic Problems, One Solution</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.15]">
              আপনার যেকোনো <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-teal-300">
                একাডেমিক সমস্যার
              </span> <br />
              নির্ভরযোগ্য সমাধান।
            </h1>

            {/* Sub-description in Bangla + English */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              কোর্স সাপোর্ট, ল্যাব রিপোর্ট, প্রোগ্রামিং ডিবাগিং, ভাইভা প্রিপারেশন কিংবা থিসিস গাইডেন্স — সার্ভিস সিলেক্ট করে অর্ডার করুন, আমাদের বিষয়ভিত্তিক মেন্টর টিম সরাসরি যোগাযোগ করে সময়ে ডেলিভারি দেবে।
            </p>

            {/* Primary Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-2">
              <button
                onClick={() => openOrderModal()}
                className="w-full sm:w-auto px-7 py-4 bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white font-black text-sm sm:text-base rounded-2xl shadow-xl shadow-blue-600/30 flex items-center justify-center gap-2.5 transition-all hover:scale-[1.02] cursor-pointer"
              >
                <Sparkles className="w-5 h-5 text-amber-300" />
                <span>সরাসরি অর্ডার করুন (Order Now)</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={scrollToServices}
                className="w-full sm:w-auto px-6 py-4 bg-white/10 hover:bg-white/15 border border-white/20 text-white font-bold text-sm sm:text-base rounded-2xl backdrop-blur-md flex items-center justify-center gap-2 transition-all cursor-pointer"
              >
                <ShoppingBag className="w-5 h-5 text-blue-300" />
                <span>সার্ভিসসমূহ দেখুন (Browse Catalog)</span>
              </button>
            </div>

            {/* Quick Guarantees Grid */}
            <div className="grid grid-cols-3 gap-2 pt-4 border-t border-slate-800 text-slate-300 text-xs">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>কোনো অগ্রিম পেমেন্ট নেই</span>
              </div>
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-blue-400 shrink-0" />
                <span>100% গোপনীয়তা রক্ষা</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-amber-400 shrink-0" />
                <span>সময়মতো নিশ্চিত ডেলিভারি</span>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Order Preview Card */}
          <div className="lg:col-span-5 relative">
            <div className="bg-gradient-to-b from-slate-800/90 to-slate-900/95 border border-slate-700/80 rounded-3xl p-6 shadow-2xl backdrop-blur-xl space-y-5">
              
              <div className="flex items-center justify-between pb-3 border-b border-slate-700/80">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-xl bg-blue-500/20 border border-blue-400/30 flex items-center justify-center text-blue-400">
                    <GraduationCap className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-white leading-none">Edu Quest Process</h3>
                    <span className="text-[11px] text-emerald-400 font-medium">How Support is Delivered</span>
                  </div>
                </div>

                <div className="flex items-center gap-1 bg-amber-400/10 border border-amber-400/20 px-2.5 py-1 rounded-full text-xs text-amber-300 font-bold">
                  <Star className="w-3.5 h-3.5 fill-amber-300" />
                  <span>4.9 / 5.0 (850+)</span>
                </div>
              </div>

              {/* 3 Step Snapshot */}
              <div className="space-y-3">
                <div className="bg-slate-800/60 border border-slate-700/50 rounded-xl p-3 flex items-start gap-3">
                  <div className="w-6 h-6 rounded-lg bg-blue-600/30 text-blue-400 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                    1
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-white">Select Academic Need</h4>
                    <p className="text-[11px] text-slate-400">Add course support, lab, or thesis to your cart</p>
                  </div>
                </div>

                <div className="bg-slate-800/60 border border-slate-700/50 rounded-xl p-3 flex items-start gap-3">
                  <div className="w-6 h-6 rounded-lg bg-emerald-600/30 text-emerald-400 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                    2
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-white">We Contact on WhatsApp</h4>
                    <p className="text-[11px] text-slate-400">Our academic team reaches out to verify deadlines</p>
                  </div>
                </div>

                <div className="bg-slate-800/60 border border-slate-700/50 rounded-xl p-3 flex items-start gap-3">
                  <div className="w-6 h-6 rounded-lg bg-indigo-600/30 text-indigo-400 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                    3
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-white">Expert Mentor Delivery</h4>
                    <p className="text-[11px] text-slate-400">1-on-1 explanation & step-by-step resolution</p>
                  </div>
                </div>
              </div>

              {/* Real-time Order Tracker trigger */}
              <div className="pt-2">
                <button
                  onClick={() => openOrderTracker()}
                  className="w-full py-2.5 px-3 bg-slate-800 hover:bg-slate-700 border border-slate-600 text-slate-200 rounded-xl text-xs font-semibold flex items-center justify-center gap-2 transition-colors cursor-pointer"
                >
                  <Search className="w-3.5 h-3.5 text-blue-400" />
                  <span>পূর্বে অর্ডার করেছেন? ডেলিভারির অবস্থা ট্র্যাক করুন</span>
                </button>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
