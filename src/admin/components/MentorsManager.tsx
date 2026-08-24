import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { MentorProfile } from '../../types';
import { 
  UserCheck, 
  GraduationCap, 
  BookOpen, 
  CheckCircle2, 
  Star, 
  Phone, 
  Mail, 
  Plus, 
  Sparkles,
  Layers,
  Award,
  X
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export const MentorsManager: React.FC = () => {
  const { mentors, registerMentor, updateMentorStatus, language, showToast } = useApp();
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [newMentor, setNewMentor] = useState({
    name: '',
    institution: '',
    degree: '',
    specialization: '',
    contactPhone: '',
    status: 'available' as MentorProfile['status']
  });

  const handleAddMentor = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newMentor.name || !newMentor.institution) {
      showToast(language === 'bn' ? 'দয়া করে নাম ও বিশ্ববিদ্যালয় উল্লেখ করুন' : 'Please provide name and institution');
      return;
    }

    const specs = newMentor.specialization
      .split(',')
      .map(s => s.trim())
      .filter(Boolean);

    registerMentor({
      name: newMentor.name,
      institution: newMentor.institution,
      degree: newMentor.degree || 'Academic Specialist',
      specialization: specs.length ? specs : ['Academic Mentorship', 'Problem Solving'],
      contactPhone: newMentor.contactPhone || '+880 1711-000000',
      status: newMentor.status
    });

    setIsAddModalOpen(false);
    setNewMentor({
      name: '',
      institution: '',
      degree: '',
      specialization: '',
      contactPhone: '',
      status: 'available'
    });
    showToast(language === 'bn' ? 'নতুন মেন্টর সফলভাবে যুক্ত হয়েছে' : 'New mentor added successfully');
  };

  return (
    <div className="space-y-6">
      
      {/* Header Bar */}
      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white p-3.5 sm:p-5 rounded-2xl sm:rounded-3xl border border-slate-200 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-3"
      >
        <div>
          <h3 className="font-bold text-sm sm:text-base text-slate-900 flex items-center gap-2">
            <GraduationCap className="w-5 h-5 text-blue-600" />
            <span>{language === 'bn' ? 'বিশেষজ্ঞ মেন্টর রোস্টার ও অ্যাসাইনমেন্ট ট্র্যাক' : 'Specialized Subject Mentors Roster'}</span>
          </h3>
          <p className="text-[11px] text-slate-500 mt-0.5">
            {language === 'bn' ? 'BUET, DU, SUST ও শীর্ষ বিশ্ববিদ্যালয়ের বিশেষজ্ঞ মেন্টর প্যানেল' : 'Expert alumni and researchers across Engineering, Data Science & Business'}
          </p>
        </div>

        <button
          onClick={() => setIsAddModalOpen(true)}
          className="w-full sm:w-auto px-4 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold text-xs flex items-center justify-center gap-1.5 shadow-md shadow-blue-500/20 cursor-pointer min-h-[40px]"
        >
          <Plus className="w-4 h-4" />
          <span>{language === 'bn' ? 'নতুন মেন্টর যোগ করুন' : 'Add New Mentor'}</span>
        </button>
      </motion.div>

      {/* Mentors Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 sm:gap-5">
        {mentors.map((mentor, idx) => (
          <motion.div
            key={mentor.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.05 }}
            whileHover={{ y: -2, transition: { duration: 0.2 } }}
            className="bg-white p-4 sm:p-6 rounded-2xl sm:rounded-3xl border border-slate-200 shadow-xs flex flex-col justify-between space-y-3"
          >
            <div>
              <div className="flex items-start justify-between gap-2 mb-2 sm:mb-3">
                <div className="flex items-center gap-2.5 sm:gap-3 min-w-0">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-gradient-to-tr from-blue-600 to-indigo-600 text-white font-black flex items-center justify-center text-base sm:text-lg shadow-md shadow-blue-500/20 shrink-0">
                    {mentor.name.split(' ').pop()?.[0] || 'M'}
                  </div>
                  <div className="min-w-0">
                    <h4 className="font-bold text-slate-900 text-sm sm:text-base flex items-center gap-1.5 truncate">
                      <span className="truncate">{mentor.name}</span>
                      <Award className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-blue-600 shrink-0" />
                    </h4>
                    <div className="text-xs text-blue-700 font-semibold truncate">{mentor.institution}</div>
                    <div className="text-[10px] sm:text-[11px] text-slate-500 truncate">{mentor.degree}</div>
                  </div>
                </div>

                <select
                  value={mentor.status}
                  onChange={(e) => updateMentorStatus(mentor.id, e.target.value as MentorProfile['status'])}
                  className={`px-2 sm:px-2.5 py-1 rounded-full text-[9px] sm:text-[10px] font-black uppercase tracking-wider border cursor-pointer shrink-0 ${
                    mentor.status === 'available'
                      ? 'bg-emerald-100 text-emerald-800 border-emerald-200'
                      : mentor.status === 'busy'
                      ? 'bg-amber-100 text-amber-800 border-amber-200'
                      : 'bg-slate-100 text-slate-700 border-slate-200'
                  }`}
                >
                  <option value="available">🟢 Available</option>
                  <option value="busy">🟡 Busy</option>
                  <option value="on_leave">⚪ On Leave</option>
                </select>
              </div>

              {/* Specialization Tags */}
              <div className="mt-2 sm:mt-3">
                <span className="text-[10px] font-bold uppercase text-slate-400 block mb-1">
                  {language === 'bn' ? 'দক্ষতা ও বিষয়সমূহ' : 'Specialization & Subjects'}
                </span>
                <div className="flex flex-wrap gap-1 sm:gap-1.5">
                  {mentor.specialization.map((spec, sIdx) => (
                    <span key={sIdx} className="px-2 py-0.5 bg-slate-100 text-slate-700 rounded-lg text-[10px] sm:text-[11px] font-medium">
                      {spec}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Performance Stats & Actions */}
            <div className="pt-3 sm:pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
              <div className="flex items-center gap-3 sm:gap-4">
                <div>
                  <span className="text-slate-400 text-[10px] block">{language === 'bn' ? 'চলমান' : 'Active'}</span>
                  <span className="font-black text-blue-700 text-xs sm:text-sm">{mentor.activeAssignedOrders || 0}</span>
                </div>
                <div>
                  <span className="text-slate-400 text-[10px] block">{language === 'bn' ? 'সম্পন্ন' : 'Done'}</span>
                  <span className="font-black text-slate-800 text-xs sm:text-sm">{mentor.completedOrders || 0}</span>
                </div>
                <div>
                  <span className="text-slate-400 text-[10px] block">{language === 'bn' ? 'রেটিং' : 'Rating'}</span>
                  <span className="font-black text-amber-600 text-xs sm:text-sm flex items-center gap-0.5">
                    ★ {mentor.rating || 5.0}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <a
                  href={`tel:${mentor.contactPhone}`}
                  className="p-2 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl transition-colors cursor-pointer min-h-[36px] min-w-[36px] flex items-center justify-center"
                  title="Direct Call"
                >
                  <Phone className="w-4 h-4" />
                </a>
              </div>
            </div>

          </motion.div>
        ))}
      </div>

      {/* Add Mentor Modal */}
      <AnimatePresence>
        {isAddModalOpen && (
          <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-white rounded-3xl max-w-lg w-full max-h-[90vh] overflow-y-auto p-4 sm:p-6 shadow-2xl border border-slate-200"
            >
              <div className="flex items-center justify-between pb-3 sm:pb-4 border-b border-slate-100">
                <h3 className="font-bold text-slate-900 text-sm sm:text-base">
                  {language === 'bn' ? 'নতুন মেন্টর তথ্য যুক্ত করুন' : 'Add New Mentor Profile'}
                </h3>
                <button
                  onClick={() => setIsAddModalOpen(false)}
                  className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 min-h-[36px] min-w-[36px] flex items-center justify-center"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <form onSubmit={handleAddMentor} className="space-y-3 sm:space-y-4 pt-3 sm:pt-4 text-xs">
                <div>
                  <label className="font-bold text-slate-700 block mb-1">Mentor Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Engr. Tahmidul Islam"
                    value={newMentor.name}
                    onChange={e => setNewMentor({ ...newMentor, name: e.target.value })}
                    className="w-full px-3.5 py-2.5 border border-slate-300 rounded-xl bg-slate-50 focus:bg-white focus:ring-2 focus:ring-blue-500 text-base sm:text-xs"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="font-bold text-slate-700 block mb-1">Institution *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. BUET (CSE)"
                      value={newMentor.institution}
                      onChange={e => setNewMentor({ ...newMentor, institution: e.target.value })}
                      className="w-full px-3.5 py-2.5 border border-slate-300 rounded-xl bg-slate-50 focus:bg-white focus:ring-2 focus:ring-blue-500 text-base sm:text-xs"
                    />
                  </div>
                  <div>
                    <label className="font-bold text-slate-700 block mb-1">Degree / Role</label>
                    <input
                      type="text"
                      placeholder="e.g. B.Sc in CSE"
                      value={newMentor.degree}
                      onChange={e => setNewMentor({ ...newMentor, degree: e.target.value })}
                      className="w-full px-3.5 py-2.5 border border-slate-300 rounded-xl bg-slate-50 focus:bg-white focus:ring-2 focus:ring-blue-500 text-base sm:text-xs"
                    />
                  </div>
                </div>

                <div>
                  <label className="font-bold text-slate-700 block mb-1">Specialization (Comma separated)</label>
                  <input
                    type="text"
                    placeholder="e.g. C++, Data Structures, Machine Learning, Web"
                    value={newMentor.specialization}
                    onChange={e => setNewMentor({ ...newMentor, specialization: e.target.value })}
                    className="w-full px-3.5 py-2.5 border border-slate-300 rounded-xl bg-slate-50 focus:bg-white focus:ring-2 focus:ring-blue-500 text-base sm:text-xs"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="font-bold text-slate-700 block mb-1">Phone / WhatsApp</label>
                    <input
                      type="text"
                      placeholder="+880 1711-..."
                      value={newMentor.contactPhone}
                      onChange={e => setNewMentor({ ...newMentor, contactPhone: e.target.value })}
                      className="w-full px-3.5 py-2.5 border border-slate-300 rounded-xl bg-slate-50 focus:bg-white focus:ring-2 focus:ring-blue-500 text-base sm:text-xs"
                    />
                  </div>
                  <div>
                    <label className="font-bold text-slate-700 block mb-1">Initial Status</label>
                    <select
                      value={newMentor.status}
                      onChange={e => setNewMentor({ ...newMentor, status: e.target.value as MentorProfile['status'] })}
                      className="w-full px-3.5 py-2.5 border border-slate-300 rounded-xl bg-slate-50 font-bold text-base sm:text-xs"
                    >
                      <option value="available">🟢 Available</option>
                      <option value="busy">🟡 Busy</option>
                      <option value="on_leave">⚪ On Leave</option>
                    </select>
                  </div>
                </div>

                <div className="pt-3 flex justify-end gap-2">
                  <button
                    type="button"
                    onClick={() => setIsAddModalOpen(false)}
                    className="px-4 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl font-bold min-h-[40px]"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold shadow-md shadow-blue-500/20 min-h-[40px]"
                  >
                    Save Mentor
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
};
