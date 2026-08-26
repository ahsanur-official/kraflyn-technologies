import React, { useState, useMemo } from 'react';
import { useApp } from '../../context/AppContext';
import { Mentor } from '../../types';
import { TeamMemberModal } from './TeamMemberModal';
import { CountUpNumber } from '../common/CountUpNumber';
import { 
  Users, 
  Star, 
  ShieldCheck, 
  Sparkles, 
  Search, 
  ExternalLink, 
  MessageSquare, 
  Github, 
  Linkedin, 
  ArrowRight,
  Code2,
  Palette,
  Globe,
  BarChart3,
  Layers,
  Award,
  CheckCircle2,
  Clock,
  Briefcase
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export const TeamSection: React.FC = () => {
  const { mentors, language, openOrderModal, t } = useApp();
  const [selectedDomain, setSelectedDomain] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedMember, setSelectedMember] = useState<Mentor | null>(null);

  // Available domain categories
  const domains = [
    { id: 'All', labelEn: 'All Disciplines', labelBn: 'সকল ডিপার্টমেন্ট', icon: Layers },
    { id: 'Full-Stack Web Engineering', labelEn: '💻 Web & Full-Stack', labelBn: '💻 ওয়েব ও সফটওয়্যার', icon: Code2 },
    { id: 'Design & UI/UX', labelEn: '🎨 Design & UI/UX', labelBn: '🎨 ডিজাইন ও UI/UX', icon: Palette },
    { id: 'WordPress Solutions', labelEn: '🌐 WordPress & CMS', labelBn: '🌐 ওয়ার্ডপ্রেস উইং', icon: Globe },
    { id: 'Data Analysis & BI', labelEn: '📊 Data Science & BI', labelBn: '📊 ডাটা ল্যাব ও BI', icon: BarChart3 },
    { id: 'DevOps & Architecture', labelEn: '☁️ Cloud & DevOps', labelBn: '☁️ ক্লাউড ও ডেভঅপস', icon: ShieldCheck },
  ];

  // Filtered mentors
  const filteredMentors = useMemo(() => {
    return mentors.filter((m) => {
      const matchesDomain = selectedDomain === 'All' || m.domain === selectedDomain;
      const query = searchQuery.toLowerCase().trim();
      if (!query) return matchesDomain;

      const matchesName = m.name.toLowerCase().includes(query);
      const matchesRole = (m.roleTitle || '').toLowerCase().includes(query) || (m.roleTitleEn || '').toLowerCase().includes(query) || (m.roleTitleBn || '').toLowerCase().includes(query);
      const matchesExpertise = m.expertise.some((e) => e.toLowerCase().includes(query));
      const matchesSkills = (m.skills || []).some((s) => s.toLowerCase().includes(query));

      return matchesDomain && (matchesName || matchesRole || matchesExpertise || matchesSkills);
    });
  }, [mentors, selectedDomain, searchQuery]);

  const getDomainIcon = (domain?: string) => {
    if (domain?.includes('Design') || domain?.includes('UI/UX')) {
      return <Palette className="w-3.5 h-3.5 text-pink-500" />;
    }
    if (domain?.includes('WordPress')) {
      return <Globe className="w-3.5 h-3.5 text-teal-500" />;
    }
    if (domain?.includes('Data')) {
      return <BarChart3 className="w-3.5 h-3.5 text-amber-500" />;
    }
    return <Code2 className="w-3.5 h-3.5 text-blue-500" />;
  };

  return (
    <section id="team-section" className="py-16 md:py-24 bg-slate-50/70 border-b border-slate-200">
      <div className="max-w-[1920px] w-full mx-auto px-3 sm:px-6 md:px-8 lg:px-10 xl:px-12">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-3.5"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-800 text-xs font-bold shadow-2xs">
            <Users className="w-3.5 h-3.5 text-blue-600" />
            <span>{t.teamBadge || (language === 'bn' ? 'আমাদের বিশেষজ্ঞ টিম' : 'Meet Our Specialist Team')}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            {t.teamHeading || (language === 'bn' ? 'ক্র্যাফলিন টেকনোলজিসের বিশেষজ্ঞ টিম' : 'The Minds Behind Kraflyn Technologies')}
          </h2>

          <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl mx-auto">
            {t.teamSubtitle || (language === 'bn' 
              ? 'অভিজ্ঞ ফুল-স্ট্যাক সফটওয়্যার আর্কিটেক্ট, UI/UX ডিজাইনার, ওয়ার্ডপ্রেস বিশেষজ্ঞ এবং ডাটা সায়েন্টিস্টদের সমন্বয়ে গঠিত শক্তিশালী টিম।' 
              : 'A dedicated team of senior software architects, UI/UX designers, WordPress engineers, and data scientists committed to building high-impact digital solutions.')}
          </p>
        </motion.div>

        {/* Highlight Metrics Strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 max-w-4xl mx-auto mb-10">
          <div className="p-4 rounded-2xl bg-white border border-slate-200/90 shadow-2xs text-center">
            <div className="text-2xl sm:text-3xl font-black text-slate-900">
              <CountUpNumber end={100} duration={1.5} suffix="%" isBengali={language === 'bn'} />
            </div>
            <div className="text-[11px] font-bold text-slate-500 mt-0.5">
              {language === 'bn' ? 'ইন-হাউস বিশেষজ্ঞ' : 'Dedicated Specialists'}
            </div>
          </div>
          <div className="p-4 rounded-2xl bg-white border border-slate-200/90 shadow-2xs text-center">
            <div className="text-2xl sm:text-3xl font-black text-blue-600">
              <CountUpNumber end={350} duration={2} suffix="+" isBengali={language === 'bn'} />
            </div>
            <div className="text-[11px] font-bold text-slate-500 mt-0.5">
              {language === 'bn' ? 'সম্পন্ন প্রজেক্ট' : 'Delivered Projects'}
            </div>
          </div>
          <div className="p-4 rounded-2xl bg-white border border-slate-200/90 shadow-2xs text-center">
            <div className="text-2xl sm:text-3xl font-black text-amber-500 flex items-center justify-center gap-1">
              <CountUpNumber end={4.98} duration={1.8} decimals={2} isBengali={language === 'bn'} />
              <Star className="w-5 h-5 fill-amber-400 text-amber-400" />
            </div>
            <div className="text-[11px] font-bold text-slate-500 mt-0.5">
              {language === 'bn' ? 'গড় ক্লায়েন্ট রেটিং' : 'Average Client Rating'}
            </div>
          </div>
          <div className="p-4 rounded-2xl bg-white border border-slate-200/90 shadow-2xs text-center">
            <div className="text-2xl sm:text-3xl font-black text-emerald-600">
              <CountUpNumber end={24} duration={1.5} suffix="/7" isBengali={language === 'bn'} />
            </div>
            <div className="text-[11px] font-bold text-slate-500 mt-0.5">
              {language === 'bn' ? 'WhatsApp সাপোর্ট' : 'Active Availability'}
            </div>
          </div>
        </div>

        {/* Filter & Search Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8 bg-white p-3 sm:p-4 rounded-2xl sm:rounded-3xl border border-slate-200 shadow-2xs">
          
          {/* Domain Category Filter Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none">
            {domains.map((dom) => {
              const isActive = selectedDomain === dom.id;
              const label = language === 'bn' ? dom.labelBn : dom.labelEn;

              return (
                <button
                  key={dom.id}
                  onClick={() => setSelectedDomain(dom.id)}
                  className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap cursor-pointer flex items-center gap-1.5 shrink-0 ${
                    isActive
                      ? 'bg-blue-600 text-white shadow-xs shadow-blue-500/20'
                      : 'bg-slate-100/80 hover:bg-slate-200 text-slate-700'
                  }`}
                >
                  <span>{label}</span>
                </button>
              );
            })}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={language === 'bn' ? 'নাম বা টেক স্ট্যাক দিয়ে খুঁজুন...' : 'Search by name or tech stack...'}
              className="w-full pl-9 pr-4 py-2 bg-slate-50 hover:bg-slate-100/70 focus:bg-white border border-slate-200 rounded-xl text-xs font-medium text-slate-800 placeholder:text-slate-400 focus:outline-hidden focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
            />
          </div>
        </div>

        {/* Specialists Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredMentors.map((member, idx) => {
            const roleTitle = language === 'bn' 
              ? (member.roleTitleBn || member.roleTitle) 
              : (member.roleTitleEn || member.roleTitle);

            const bioPreview = language === 'bn'
              ? (member.bioBn || member.bio)
              : (member.bioEn || member.bio);

            const whatsappMessage = encodeURIComponent(
              `Hello Kraflyn Technologies! I would like to consult with ${member.name} (${roleTitle}).`
            );

            return (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.45, delay: idx * 0.06, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-3xl border border-slate-200/90 hover:border-blue-300 shadow-2xs hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col justify-between group"
              >
                <div>
                  {/* Card Top Strip with Avatar & Status */}
                  <div className="p-6 pb-4">
                    <div className="flex items-start justify-between gap-4 mb-4">
                      <div className="relative">
                        <img
                          src={member.avatar}
                          alt={member.name}
                          className="w-18 h-18 sm:w-20 sm:h-20 rounded-2xl object-cover border-2 border-slate-100 shadow-md group-hover:scale-105 transition-transform bg-slate-100"
                        />
                        <span className="absolute -bottom-1 -right-1 w-3.5 h-3.5 bg-emerald-500 border-2 border-white rounded-full" title="Active"></span>
                      </div>

                      {/* Badges & Rating */}
                      <div className="flex flex-col items-end gap-1.5">
                        <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-blue-50 text-blue-700 border border-blue-200/80 flex items-center gap-1">
                          {getDomainIcon(member.domain)}
                          <span>{member.domain ? member.domain.split(' ')[0] : 'Tech'}</span>
                        </span>

                        <div className="flex items-center gap-1 text-amber-500 font-bold text-xs bg-amber-50 px-2 py-0.5 rounded-lg border border-amber-200/60">
                          <Star className="w-3.5 h-3.5 fill-amber-400" />
                          <span>{member.rating.toFixed(2)}</span>
                        </div>
                      </div>
                    </div>

                    {/* Specialist Name & Role */}
                    <div className="mb-3">
                      <div className="flex items-center gap-1.5">
                        <h3 className="text-lg font-black text-slate-900 group-hover:text-blue-600 transition-colors">
                          {member.name}
                        </h3>
                        <ShieldCheck className="w-4 h-4 text-blue-600 shrink-0" />
                      </div>
                      <p className="text-xs font-bold text-blue-700 mt-0.5 line-clamp-1">
                        {roleTitle}
                      </p>
                    </div>

                    {/* Bio Snippet */}
                    <p className="text-xs text-slate-600 leading-relaxed line-clamp-2 mb-4">
                      {bioPreview}
                    </p>

                    {/* Stats Pill Row */}
                    <div className="grid grid-cols-2 gap-2 p-2.5 rounded-xl bg-slate-50 border border-slate-100 mb-4 text-center">
                      <div>
                        <div className="text-xs font-black text-slate-900">{member.completedProjects}+</div>
                        <div className="text-[10px] text-slate-500 font-medium">{language === 'bn' ? 'সম্পন্ন প্রজেক্ট' : 'Projects'}</div>
                      </div>
                      <div className="border-l border-slate-200">
                        <div className="text-xs font-black text-blue-600">{member.experience ? member.experience.split(' ')[0] : '4+'} {language === 'bn' ? 'বছর' : 'Years'}</div>
                        <div className="text-[10px] text-slate-500 font-medium">{language === 'bn' ? 'অভিজ্ঞতা' : 'Experience'}</div>
                      </div>
                    </div>

                    {/* Core Tech Stack Badges */}
                    <div className="flex flex-wrap gap-1 mb-2">
                      {(member.expertise || []).slice(0, 4).map((tech, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-2 py-0.5 rounded-md bg-slate-100 text-slate-700 text-[10px] font-bold border border-slate-200/60"
                        >
                          {tech}
                        </span>
                      ))}
                      {(member.expertise || []).length > 4 && (
                        <span className="px-1.5 py-0.5 rounded-md bg-slate-100 text-slate-500 text-[10px] font-bold">
                          +{(member.expertise || []).length - 4}
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Card Action Footer */}
                <div className="p-4 pt-3 bg-slate-50/80 border-t border-slate-100 flex items-center justify-between gap-2">
                  <div className="flex items-center gap-1.5">
                    {member.whatsapp && (
                      <a
                        href={`https://wa.me/${member.whatsapp.replace(/[^0-9]/g, '')}?text=${whatsappMessage}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-xl bg-emerald-50 hover:bg-emerald-600 hover:text-white text-emerald-700 border border-emerald-200 transition-colors"
                        title="WhatsApp"
                      >
                        <MessageSquare className="w-3.5 h-3.5" />
                      </a>
                    )}
                    {member.github && (
                      <a
                        href={member.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-xl bg-white hover:bg-slate-900 hover:text-white text-slate-600 border border-slate-200 transition-colors"
                        title="GitHub"
                      >
                        <Github className="w-3.5 h-3.5" />
                      </a>
                    )}
                    {member.linkedIn && (
                      <a
                        href={member.linkedIn}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-xl bg-white hover:bg-blue-600 hover:text-white text-slate-600 border border-slate-200 transition-colors"
                        title="LinkedIn"
                      >
                        <Linkedin className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>

                  <button
                    onClick={() => setSelectedMember(member)}
                    className="px-3.5 py-2 rounded-xl bg-white hover:bg-blue-50 border border-slate-200 hover:border-blue-300 text-slate-800 hover:text-blue-700 text-xs font-bold flex items-center gap-1 cursor-pointer transition-colors"
                  >
                    <span>{t.viewProfile || (language === 'bn' ? 'বিস্তারিত প্রোফাইল' : 'View Profile')}</span>
                    <ArrowRight className="w-3 h-3 text-blue-600" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Empty State */}
        {filteredMentors.length === 0 && (
          <div className="p-12 text-center bg-white rounded-3xl border border-slate-200 max-w-md mx-auto mb-12">
            <Users className="w-10 h-10 text-slate-400 mx-auto mb-3" />
            <h4 className="text-base font-bold text-slate-800 mb-1">
              {language === 'bn' ? 'কোনো স্পেশালিস্ট পাওয়া যায়নি' : 'No specialists found'}
            </h4>
            <p className="text-xs text-slate-500 mb-4">
              {language === 'bn' ? 'অন্য ক্যাটাগরি অথবা সার্চ কিওয়ার্ড পরিবর্তন করে দেখুন।' : 'Try changing your domain filter or search query.'}
            </p>
            <button
              onClick={() => { setSelectedDomain('All'); setSearchQuery(''); }}
              className="px-4 py-2 bg-blue-600 text-white rounded-xl text-xs font-bold cursor-pointer"
            >
              {language === 'bn' ? 'সকল ফিল্টার রিসেট করুন' : 'Reset All Filters'}
            </button>
          </div>
        )}

        {/* Bottom CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-slate-900 via-blue-950 to-indigo-950 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl border border-slate-800"
        >
          <div className="space-y-2 text-center md:text-left max-w-xl">
            <span className="px-3 py-1 rounded-full text-xs font-bold bg-cyan-400/20 text-cyan-300 border border-cyan-400/30 inline-block">
              {language === 'bn' ? 'কাস্টম প্রজেক্ট কনসালটেশন' : 'Tailored Specialist Consultation'}
            </span>
            <h3 className="text-xl sm:text-2xl font-black tracking-tight">
              {language === 'bn' ? 'আপনার প্রজেক্টের জন্য সঠিক বিশেষজ্ঞ নির্বাচন করতে চান?' : 'Need the perfect technical team for your upcoming sprint?'}
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {language === 'bn'
                ? 'আমাদের টেকনিক্যাল আর্কিটেক্টদের সাথে সরাসরি কথা বলে আপনার প্রয়োজনীয় স্কোপ ও ডেডলাইন নির্ধারণ করুন।'
                : 'Connect directly with our Lead Architects on WhatsApp to define your project scope, milestones, and deliverable timelines.'}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <a
              href="https://wa.me/8801712345678?text=Hello%20Kraflyn%20Technologies%2C%20I%20would%20like%20to%20discuss%20a%20new%20project%20with%20your%20team."
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3 rounded-2xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black text-xs sm:text-sm flex items-center gap-2 transition-all shadow-md"
            >
              <MessageSquare className="w-4 h-4" />
              <span>{language === 'bn' ? 'WhatsApp-এ আলোচনা করুন' : 'WhatsApp Consultation'}</span>
            </a>

            <button
              onClick={() => openOrderModal()}
              className="px-5 py-3 rounded-2xl bg-white hover:bg-slate-100 text-slate-900 font-black text-xs sm:text-sm flex items-center gap-2 transition-all shadow-md cursor-pointer"
            >
              <Sparkles className="w-4 h-4 text-blue-600" />
              <span>{t.orderNow || (language === 'bn' ? 'প্রজেক্ট শুরু করুন' : 'Start Project Now')}</span>
            </button>
          </div>
        </motion.div>

      </div>

      {/* Team Member Detail Modal */}
      <TeamMemberModal
        member={selectedMember}
        isOpen={!!selectedMember}
        onClose={() => setSelectedMember(null)}
      />
    </section>
  );
};
