import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { ProjectCategory } from '../../types';
import { 
  FolderGit2, 
  ExternalLink, 
  Github, 
  Sparkles, 
  Award, 
  Star, 
  ArrowRight,
  Code2
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export const PortfolioSection: React.FC = () => {
  const { projects, openOrderModal, language } = useApp();
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Full-Stack Web', 'Design & UI/UX', 'WordPress Solutions', 'Data Analysis & BI'];

  const filteredProjects = projects.filter(p => {
    if (selectedCategory === 'All') return true;
    return p.category === selectedCategory;
  });

  if (!projects || projects.length === 0) return null;

  return (
    <section id="portfolio-section" className="py-16 md:py-24 bg-slate-900 text-white relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-blue-600/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-indigo-600/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1920px] w-full mx-auto px-3 sm:px-6 md:px-8 lg:px-10 xl:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/15 border border-blue-400/30 text-blue-300 text-xs font-bold">
            <Sparkles className="w-3.5 h-3.5 text-blue-400" />
            <span>{language === 'bn' ? 'সফলভাবে সম্পন্ন প্রজেক্ট শোকেস' : 'Live Showcase & Delivered Projects'}</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black tracking-tight text-white">
            {language === 'bn' ? 'আমাদের ক্লায়েন্ট প্রজেক্ট ও কেস স্টাডি পোর্টফোলিও' : 'Client Projects & Case Study Portfolio'}
          </h2>

          <p className="text-xs sm:text-sm md:text-base text-slate-400 leading-relaxed">
            {language === 'bn'
              ? 'Kraflyn Technologies এর দক্ষ ইঞ্জিনিয়ার ও ডিজাইনারদের দ্বারা সফলভাবে ডেলিভারকৃত ওয়েব, ডিজাইন, ওয়ার্ডপ্রেস এবং ডাটা অ্যানালিটিক্স প্রজেক্টসমূহ দেখুন।'
              : 'Explore scalable web apps, high-converting Figma UI systems, customized WooCommerce portals, and interactive BI dashboards built by our team.'}
          </p>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/25 scale-105'
                    : 'bg-slate-800/80 text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-700'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="bg-slate-800/60 border border-slate-700/80 hover:border-blue-500/40 rounded-3xl overflow-hidden backdrop-blur-sm flex flex-col justify-between group shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                <div>
                  {/* Thumbnail Image */}
                  <div className="relative aspect-video w-full overflow-hidden bg-slate-900">
                    <img
                      src={project.imageUrl}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&auto=format&fit=crop&q=60';
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-black/20" />

                    <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-slate-900/90 backdrop-blur-md text-white text-[11px] font-bold border border-white/10">
                      {project.category}
                    </span>

                    {project.featured && (
                      <span className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-amber-500 text-slate-950 text-[10px] font-black flex items-center gap-1 shadow-md">
                        <Star className="w-3 h-3 fill-current" />
                        FEATURED
                      </span>
                    )}

                    {project.gradeOutcome && (
                      <span className="absolute bottom-3 left-3 px-2.5 py-1 rounded-lg bg-emerald-600/90 backdrop-blur-md text-white text-[10px] font-bold flex items-center gap-1">
                        <Award className="w-3 h-3" />
                        {project.gradeOutcome}
                      </span>
                    )}
                  </div>

                  {/* Card Content */}
                  <div className="p-5 space-y-3">
                    <h3 className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors line-clamp-1">
                      {project.title}
                    </h3>
                    <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Technologies Tags */}
                    {project.technologies && project.technologies.length > 0 && (
                      <div className="flex flex-wrap gap-1.5 pt-1">
                        {project.technologies.map(tech => (
                          <span
                            key={tech}
                            className="px-2 py-0.5 rounded-md bg-slate-700/60 text-slate-300 text-[10px] font-medium border border-slate-600/40"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                {/* Card Footer Actions */}
                <div className="p-5 pt-0 border-t border-slate-700/50 mt-4 flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="p-2 rounded-xl bg-slate-700/60 hover:bg-blue-600 text-slate-300 hover:text-white transition-colors"
                        title="Live Demo"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="p-2 rounded-xl bg-slate-700/60 hover:bg-slate-600 text-slate-300 hover:text-white transition-colors"
                        title="Source Code"
                      >
                        <Github className="w-3.5 h-3.5" />
                      </a>
                    )}
                    <span className="text-[10px] text-slate-400">
                      {project.studentOrClient || project.completionDate || 'Verified'}
                    </span>
                  </div>

                  <button
                    onClick={() => openOrderModal()}
                    className="flex items-center gap-1.5 px-3 py-1.5 bg-blue-600 hover:bg-blue-500 text-white rounded-xl text-xs font-bold transition-all shadow-md shadow-blue-600/20 cursor-pointer"
                  >
                    <span>{language === 'bn' ? 'অনুরূপ প্রজেক্ট অর্ডার' : 'Order Similar'}</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
};
