import React from 'react';
import { Mentor } from '../../types';
import { useApp } from '../../context/AppContext';
import { 
  X, 
  Star, 
  CheckCircle2, 
  Award, 
  Briefcase, 
  Clock, 
  Globe, 
  MessageSquare, 
  Github, 
  Linkedin, 
  Sparkles, 
  Layers, 
  Mail, 
  Phone,
  ShieldCheck,
  Code2,
  Palette,
  BarChart3,
  ExternalLink,
  MapPin,
  GraduationCap
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface TeamMemberModalProps {
  member: Mentor | null;
  isOpen: boolean;
  onClose: () => void;
}

export const TeamMemberModal: React.FC<TeamMemberModalProps> = ({
  member,
  isOpen,
  onClose
}) => {
  const { language, openOrderModal, t } = useApp();

  if (!member || !isOpen) return null;

  const roleTitle = language === 'bn' 
    ? (member.roleTitleBn || member.roleTitle) 
    : (member.roleTitleEn || member.roleTitle);

  const bioText = language === 'bn'
    ? (member.bioBn || member.bio)
    : (member.bioEn || member.bio);

  const getDomainIcon = (domain?: string) => {
    if (domain?.includes('Design') || domain?.includes('UI/UX')) {
      return <Palette className="w-4 h-4 text-pink-500" />;
    }
    if (domain?.includes('WordPress')) {
      return <Globe className="w-4 h-4 text-teal-500" />;
    }
    if (domain?.includes('Data')) {
      return <BarChart3 className="w-4 h-4 text-amber-500" />;
    }
    return <Code2 className="w-4 h-4 text-blue-500" />;
  };

  const handleHireSpecialist = () => {
    onClose();
    openOrderModal();
  };

  const whatsappMessage = encodeURIComponent(
    `Hello Kraflyn Technologies! I saw ${member.name}'s profile (${roleTitle}) and would like to consult or collaborate on a project.`
  );

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-3 sm:p-4 md:p-6">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          onClick={onClose}
          className="fixed inset-0 bg-slate-950/70 backdrop-blur-xs cursor-pointer"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden z-10 my-auto"
        >
          {/* Header Banner */}
          <div className="relative h-32 sm:h-40 bg-gradient-to-r from-slate-900 via-blue-950 to-indigo-950 p-6 flex justify-between items-start">
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 rounded-full text-xs font-bold bg-blue-500/20 text-blue-200 border border-blue-400/30 backdrop-blur-md flex items-center gap-1.5">
                {getDomainIcon(member.domain)}
                <span>{member.domain || 'Digital Engineering'}</span>
              </span>
              {member.badge && (
                <span className="hidden sm:inline-flex px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-amber-400/20 text-amber-300 border border-amber-400/30">
                  {member.badge}
                </span>
              )}
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Profile Card Body */}
          <div className="px-5 sm:px-8 pb-8 pt-0 relative">
            {/* Avatar & Key Stats Row */}
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 -mt-16 sm:-mt-20 mb-6">
              <div className="relative inline-block">
                <img
                  src={member.avatar}
                  alt={member.name}
                  className="w-24 h-24 sm:w-32 sm:h-32 rounded-3xl object-cover border-4 border-white shadow-xl bg-slate-100"
                />
                <span className="absolute bottom-2 right-2 w-4 h-4 bg-emerald-500 border-2 border-white rounded-full shadow-xs" title="Available for projects"></span>
              </div>

              {/* Quick Stat Pills */}
              <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                <div className="px-3 py-1.5 rounded-2xl bg-slate-50 border border-slate-200/90 text-center">
                  <div className="flex items-center justify-center gap-1 text-amber-500 font-black text-sm">
                    <Star className="w-4 h-4 fill-amber-400" />
                    <span>{member.rating.toFixed(2)}</span>
                  </div>
                  <span className="text-[10px] text-slate-500 font-semibold block">{t.specialistRating || 'Rating'}</span>
                </div>

                <div className="px-3 py-1.5 rounded-2xl bg-slate-50 border border-slate-200/90 text-center">
                  <div className="font-black text-sm text-slate-900">
                    {member.completedProjects}+
                  </div>
                  <span className="text-[10px] text-slate-500 font-semibold block">{t.specialistProjects || 'Projects'}</span>
                </div>

                <div className="px-3 py-1.5 rounded-2xl bg-slate-50 border border-slate-200/90 text-center">
                  <div className="font-black text-sm text-blue-600">
                    {member.experience ? member.experience.split(' ')[0] : '4+'}
                  </div>
                  <span className="text-[10px] text-slate-500 font-semibold block">{t.specialistExperience || 'Experience'}</span>
                </div>
              </div>
            </div>

            {/* Name & Title */}
            <div className="mb-5">
              <div className="flex flex-wrap items-center gap-2 mb-1">
                <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
                  {member.name}
                </h2>
                <ShieldCheck className="w-5 h-5 text-blue-600 shrink-0" title="Verified Kraflyn Lead Specialist" />
              </div>
              <p className="text-sm font-bold text-blue-700">
                {roleTitle}
              </p>
              <div className="flex flex-wrap items-center gap-4 text-xs text-slate-500 mt-2 font-medium">
                {member.location && (
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-slate-400" />
                    <span>{member.location}</span>
                  </span>
                )}
                {member.qualification && (
                  <span className="flex items-center gap-1">
                    <GraduationCap className="w-3.5 h-3.5 text-slate-400" />
                    <span>{member.qualification}</span>
                  </span>
                )}
                <span className="flex items-center gap-1 text-emerald-600 font-semibold">
                  <Clock className="w-3.5 h-3.5" />
                  <span>{member.availableTime}</span>
                </span>
              </div>
            </div>

            {/* Bio */}
            <div className="mb-6 bg-slate-50/80 p-4 rounded-2xl border border-slate-100">
              <h3 className="text-xs font-black uppercase tracking-wider text-slate-400 mb-1.5">
                {language === 'bn' ? 'বিশেষজ্ঞের বিবরণ ও দর্শন' : 'Specialist Overview & Mission'}
              </h3>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                {bioText}
              </p>
            </div>

            {/* Key Achievements */}
            {member.achievements && member.achievements.length > 0 && (
              <div className="mb-6">
                <h3 className="text-xs font-black uppercase tracking-wider text-slate-400 mb-2">
                  {language === 'bn' ? 'উল্লেখযোগ্য মাইলস্টোন' : 'Key Achievements & Track Record'}
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {member.achievements.map((ach, aIdx) => (
                    <div key={aIdx} className="flex items-center gap-2 p-2.5 rounded-xl bg-blue-50/60 border border-blue-100 text-blue-950 text-xs font-semibold">
                      <Award className="w-4 h-4 text-blue-600 shrink-0" />
                      <span>{ach}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Tech Stack / Skills */}
            <div className="mb-6">
              <h3 className="text-xs font-black uppercase tracking-wider text-slate-400 mb-2">
                {language === 'bn' ? 'দক্ষতা ও টেকনোলজি স্ট্যাক' : 'Core Technologies & Toolsets'}
              </h3>
              <div className="flex flex-wrap gap-1.5">
                {member.expertise.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="px-2.5 py-1 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold border border-slate-200/80 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Social & Contact Bar */}
            <div className="flex flex-wrap items-center justify-between gap-3 pt-5 border-t border-slate-200">
              <div className="flex items-center gap-2">
                {member.github && (
                  <a
                    href={member.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl bg-slate-100 hover:bg-slate-900 hover:text-white text-slate-700 transition-colors"
                    title="GitHub"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                )}
                {member.linkedIn && (
                  <a
                    href={member.linkedIn}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl bg-slate-100 hover:bg-blue-600 hover:text-white text-slate-700 transition-colors"
                    title="LinkedIn"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                )}
                {member.whatsapp && (
                  <a
                    href={`https://wa.me/${member.whatsapp.replace(/[^0-9]/g, '')}?text=${whatsappMessage}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl bg-emerald-50 hover:bg-emerald-600 hover:text-white text-emerald-700 border border-emerald-200 transition-colors"
                    title="Chat on WhatsApp"
                  >
                    <MessageSquare className="w-4 h-4" />
                  </a>
                )}
              </div>

              {/* Hire / Consult Button */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleHireSpecialist}
                className="px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white text-xs sm:text-sm font-black rounded-2xl shadow-md shadow-blue-500/25 flex items-center gap-2 cursor-pointer transition-all"
              >
                <Sparkles className="w-4 h-4 text-amber-300" />
                <span>{t.bookSpecialist || (language === 'bn' ? 'স্পেশালিস্ট বুক করুন' : 'Start Project with Specialist')}</span>
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
