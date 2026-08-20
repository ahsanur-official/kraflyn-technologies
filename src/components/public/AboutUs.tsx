import React from 'react';
import { useApp } from '../../context/AppContext';
import { 
  GraduationCap, 
  ShieldCheck, 
  Target, 
  Users, 
  Sparkles, 
  CheckCircle, 
  Award,
  BookOpen
} from 'lucide-react';

export const AboutUs: React.FC = () => {
  const { openBookingModal } = useApp();

  return (
    <div className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-100 text-indigo-800 text-xs font-semibold mb-3">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Our Purpose & Academic Mission</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
            Bridging the Academic Mentorship Gap in Bangladesh & Beyond
          </h1>
          <p className="mt-4 text-base text-slate-600 leading-relaxed">
            EduSolve was founded on a simple truth: every university student faces moments of academic confusion. Our mission is to provide accessible, ethical, and high-impact 1-on-1 mentorship whenever you need it.
          </p>
        </div>

        {/* 3 Value Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80">
            <div className="w-12 h-12 rounded-xl bg-indigo-100 text-indigo-700 flex items-center justify-center mb-4">
              <Target className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">
              Concept Over Shortcuts
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              We do not believe in spoon-feeding or ghostwriting. We teach you the underlying logic, debug code with you, and coach you to defend your thesis with genuine mastery.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80">
            <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center mb-4">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">
              Strict Academic Ethics
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Your assignments, project source codes, and thesis manuscripts remain strictly confidential and protected by rigorous privacy standards.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80">
            <div className="w-12 h-12 rounded-xl bg-purple-100 text-purple-700 flex items-center justify-center mb-4">
              <Award className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">
              Elite Peer Mentors
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Our mentors are top university alumni, competitive programmers, published researchers, and seasoned software engineers who understand faculty expectations.
            </p>
          </div>
        </div>

        {/* University Recognition */}
        <div className="p-8 rounded-2xl bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 text-white flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2">
            <h3 className="text-xl font-bold">Serving Students From Across 30+ Universities</h3>
            <p className="text-xs sm:text-sm text-slate-300">
              BUET, Dhaka University, NSU, BRAC University, Pundra University (PUB), SUST, IUT, RUET, CUET, AIUB, UIU and more.
            </p>
          </div>
          <button
            onClick={() => openBookingModal()}
            className="px-6 py-3 bg-indigo-500 hover:bg-indigo-400 text-white text-xs font-bold rounded-xl shadow-md transition-colors shrink-0 cursor-pointer"
          >
            Get Personalized Mentorship
          </button>
        </div>

      </div>
    </div>
  );
};
