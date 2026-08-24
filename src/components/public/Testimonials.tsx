import React from 'react';
import { useApp } from '../../context/AppContext';
import { Star, Quote, CheckCircle2, Sparkles } from 'lucide-react';

export const Testimonials: React.FC = () => {
  const { reviews } = useApp();

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Verified Student Reviews</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
            What Clients & Students Say About Kraflyn Technologies
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600">
            Real feedback from university students who conquered tricky courses, labs, and thesis defenses.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reviews.map((rev) => (
            <div
              key={rev.id}
              className="bg-slate-50/80 rounded-2xl p-6 border border-slate-200/80 flex flex-col justify-between hover:shadow-md transition-shadow"
            >
              <div>
                {/* Rating Stars */}
                <div className="flex items-center gap-1 text-amber-400 mb-3">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>

                {/* Service Tag */}
                <span className="inline-block px-2 py-0.5 rounded-md text-[10px] font-bold bg-indigo-50 text-indigo-700 mb-3">
                  {rev.serviceTitle}
                </span>

                {/* Review Text */}
                <p className="text-xs text-slate-700 leading-relaxed italic">
                  "{rev.comment}"
                </p>
              </div>

              {/* Author Info */}
              <div className="mt-6 pt-4 border-t border-slate-200 flex items-center justify-between">
                <div>
                  <div className="text-xs font-bold text-slate-900 flex items-center gap-1">
                    <span>{rev.studentName}</span>
                    <CheckCircle2 className="w-3 h-3 text-emerald-500" />
                  </div>
                  <div className="text-[11px] text-slate-500">{rev.university}</div>
                  <div className="text-[10px] text-slate-400">{rev.department}</div>
                </div>
                <span className="text-[10px] text-slate-400">{rev.date}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
