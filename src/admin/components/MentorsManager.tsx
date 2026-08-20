import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
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
  Award
} from 'lucide-react';
import { motion } from 'motion/react';

interface MentorProfile {
  id: string;
  name: string;
  institution: string;
  degree: string;
  specialization: string[];
  activeAssignedOrders: number;
  completedOrders: number;
  rating: number;
  contactPhone: string;
  status: 'available' | 'busy' | 'on_leave';
}

const INITIAL_MENTORS: MentorProfile[] = [
  {
    id: 'm-1',
    name: 'Engr. Tanvir Ahmed',
    institution: 'BUET (CSE 17)',
    degree: 'B.Sc in Computer Science & Engineering',
    specialization: ['Data Structures', 'Algorithms', 'Web & Mobile Systems', 'C/C++/Java'],
    activeAssignedOrders: 3,
    completedOrders: 48,
    rating: 4.9,
    contactPhone: '+880 1711-000111',
    status: 'available'
  },
  {
    id: 'm-2',
    name: 'Dr. Shahriar Hasan',
    institution: 'Dhaka University (Applied Statistics & DS)',
    degree: 'M.Sc & Ph.D in Applied Statistics',
    specialization: ['Research Methodology', 'SPSS/R/Stata Analysis', 'Thesis Guidance', 'Econometrics'],
    activeAssignedOrders: 2,
    completedOrders: 62,
    rating: 5.0,
    contactPhone: '+880 1711-000222',
    status: 'available'
  },
  {
    id: 'm-3',
    name: 'Nusrat Jahan, M.Eng',
    institution: 'SUST (SWE)',
    degree: 'B.Sc in Software Engineering',
    specialization: ['Python / AI / ML', 'Database (SQL/NoSQL)', 'Fullstack Projects', 'React/Node'],
    activeAssignedOrders: 4,
    completedOrders: 39,
    rating: 4.8,
    contactPhone: '+880 1711-000333',
    status: 'busy'
  },
  {
    id: 'm-4',
    name: 'Arif Chowdhury, MBA',
    institution: 'IBA, University of Dhaka',
    degree: 'MBA in Finance & Supply Chain',
    specialization: ['Business Case Studies', 'Financial Modeling', 'Report Writing', 'Economics'],
    activeAssignedOrders: 1,
    completedOrders: 55,
    rating: 4.9,
    contactPhone: '+880 1711-000444',
    status: 'available'
  }
];

export const MentorsManager: React.FC = () => {
  const { language, showToast } = useApp();
  const [mentors, setMentors] = useState<MentorProfile[]>(INITIAL_MENTORS);
  const [filterSpecialty, setFilterSpecialty] = useState('All');

  return (
    <div className="space-y-6">
      
      {/* Header Bar */}
      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white p-5 rounded-3xl border border-slate-200 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-4"
      >
        <div>
          <h3 className="font-bold text-base text-slate-900 flex items-center gap-2">
            <GraduationCap className="w-5 h-5 text-blue-600" />
            <span>{language === 'bn' ? 'বিশেষজ্ঞ মেন্টর রোস্টার ও অ্যাসাইনমেন্ট ট্র্যাক' : 'Specialized Subject Mentors Roster'}</span>
          </h3>
          <p className="text-xs text-slate-500 mt-0.5">
            {language === 'bn' ? 'BUET, DU, SUST ও শীর্ষ বিশ্ববিদ্যালয়ের বিশেষজ্ঞ মেন্টর প্যানেল' : 'Expert alumni and researchers across Engineering, Data Science & Business'}
          </p>
        </div>

        <button
          onClick={() => showToast(language === 'bn' ? 'নতুন মেন্টর অনবোর্ডিং ফর্ম ওপেন করা হয়েছে' : 'Mentor onboarding form opened')}
          className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold text-xs flex items-center gap-1.5 shadow-md shadow-blue-500/20 cursor-pointer"
        >
          <Plus className="w-4 h-4" />
          <span>{language === 'bn' ? 'নতুন মেন্টর যোগ করুন' : 'Add New Mentor'}</span>
        </button>
      </motion.div>

      {/* Mentors Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {mentors.map((mentor, idx) => (
          <motion.div
            key={mentor.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.08 }}
            whileHover={{ y: -3, transition: { duration: 0.2 } }}
            className="bg-white p-6 rounded-3xl border border-slate-200 shadow-xs flex flex-col justify-between"
          >
            <div>
              <div className="flex items-start justify-between gap-3 mb-3">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-blue-600 to-indigo-600 text-white font-black flex items-center justify-center text-lg shadow-md shadow-blue-500/20">
                    {mentor.name.split(' ').pop()?.[0] || 'M'}
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm sm:text-base flex items-center gap-1.5">
                      <span>{mentor.name}</span>
                      <Award className="w-4 h-4 text-blue-600 shrink-0" />
                    </h4>
                    <div className="text-xs text-blue-700 font-semibold">{mentor.institution}</div>
                    <div className="text-[11px] text-slate-500">{mentor.degree}</div>
                  </div>
                </div>

                <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider ${
                  mentor.status === 'available'
                    ? 'bg-emerald-100 text-emerald-800 border border-emerald-200'
                    : 'bg-amber-100 text-amber-800 border border-amber-200'
                }`}>
                  {mentor.status === 'available' ? '🟢 Available' : '🟡 Active Load'}
                </span>
              </div>

              {/* Specialization Tags */}
              <div className="mt-3">
                <span className="text-[10px] font-bold uppercase text-slate-400 block mb-1.5">
                  {language === 'bn' ? 'দক্ষতা ও বিষয়সমূহ' : 'Specialization & Subjects'}
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {mentor.specialization.map((spec, sIdx) => (
                    <span key={sIdx} className="px-2 py-0.5 bg-slate-100 text-slate-700 rounded-lg text-[11px] font-medium">
                      {spec}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Performance Stats & Actions */}
            <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-xs">
              <div className="flex items-center gap-4">
                <div>
                  <span className="text-slate-400 text-[10px] block">{language === 'bn' ? 'চলমান কাজ' : 'Active Orders'}</span>
                  <span className="font-black text-blue-700 text-sm">{mentor.activeAssignedOrders}</span>
                </div>
                <div>
                  <span className="text-slate-400 text-[10px] block">{language === 'bn' ? 'সম্পন্ন কাজ' : 'Completed'}</span>
                  <span className="font-black text-slate-800 text-sm">{mentor.completedOrders}</span>
                </div>
                <div>
                  <span className="text-slate-400 text-[10px] block">{language === 'bn' ? 'রেটিং' : 'Rating'}</span>
                  <span className="font-black text-amber-600 text-sm flex items-center gap-0.5">
                    ★ {mentor.rating}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <a
                  href={`tel:${mentor.contactPhone}`}
                  className="p-2 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl transition-colors cursor-pointer"
                  title="Direct Call"
                >
                  <Phone className="w-4 h-4" />
                </a>
              </div>
            </div>

          </motion.div>
        ))}
      </div>

    </div>
  );
};
