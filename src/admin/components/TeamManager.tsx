import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { Mentor } from '../../types';
import { 
  Users, 
  Plus, 
  Search, 
  Trash2, 
  Edit3, 
  Star, 
  Phone, 
  Mail, 
  MessageSquare, 
  Github, 
  Linkedin, 
  ShieldCheck, 
  Award, 
  CheckCircle2, 
  Layers, 
  Code2, 
  Palette, 
  Globe, 
  BarChart3, 
  X,
  Sparkles
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export const TeamManager: React.FC = () => {
  const { mentors, addMentor, updateMentor, deleteMentor, updateMentorStatus, language, showToast } = useApp();
  
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDomain, setSelectedDomain] = useState<string>('All');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingMember, setEditingMember] = useState<Mentor | null>(null);

  // Form State
  const [formData, setFormData] = useState<Partial<Mentor>>({
    name: '',
    email: '',
    phone: '',
    whatsapp: '',
    roleTitle: '',
    roleTitleEn: '',
    roleTitleBn: '',
    companyOrOrg: 'Kraflyn Technologies',
    domain: 'Full-Stack Web Engineering',
    expertise: [],
    skills: [],
    experience: '4+ Years',
    qualification: 'B.Sc. in Computer Science & Engineering',
    availableTime: '10:00 AM - 8:00 PM',
    rating: 5.0,
    completedProjects: 50,
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&auto=format&fit=crop&q=80',
    bio: '',
    bioEn: '',
    bioBn: '',
    badge: 'Specialist Lead',
    featured: true,
    location: 'Dhaka, Bangladesh',
    linkedIn: 'https://linkedin.com',
    github: 'https://github.com'
  });

  const [expertiseInput, setExpertiseInput] = useState('');

  const domains = [
    'All',
    'Full-Stack Web Engineering',
    'Design & UI/UX',
    'WordPress Solutions',
    'Data Analysis & BI',
    'DevOps & Architecture'
  ];

  const filteredMembers = mentors.filter(member => {
    const matchSearch = member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                        (member.roleTitle || '').toLowerCase().includes(searchTerm.toLowerCase()) ||
                        (member.domain || '').toLowerCase().includes(searchTerm.toLowerCase()) ||
                        member.expertise.some(e => e.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchDomain = selectedDomain === 'All' || member.domain === selectedDomain;
    return matchSearch && matchDomain;
  });

  const openCreateModal = () => {
    setEditingMember(null);
    setFormData({
      name: '',
      email: '',
      phone: '',
      whatsapp: '',
      roleTitle: 'Senior Software Engineer',
      roleTitleEn: 'Senior Software Engineer',
      roleTitleBn: 'সিনিয়র সফটওয়্যার ইঞ্জিনিয়ার',
      companyOrOrg: 'Kraflyn Technologies',
      domain: 'Full-Stack Web Engineering',
      expertise: ['React', 'Next.js', 'Node.js', 'PostgreSQL'],
      skills: ['React', 'Next.js', 'TypeScript'],
      experience: '4+ Years in Software Architecture',
      qualification: 'B.Sc. in Computer Science',
      availableTime: '10:00 AM - 8:00 PM',
      rating: 5.0,
      completedProjects: 45,
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&auto=format&fit=crop&q=80',
      bio: 'Delivering scalable digital products, high-throughput backend APIs, and modern web applications with clean architectures.',
      bioEn: 'Delivering scalable digital products, high-throughput backend APIs, and modern web applications with clean architectures.',
      bioBn: 'আধুনিক ওয়েব অ্যাপ্লিকেশন এবং ক্লিন আর্কিটেকচার তৈরিতে অভিজ্ঞ।',
      badge: 'Core Specialist',
      featured: true,
      location: 'Dhaka, Bangladesh',
      linkedIn: 'https://linkedin.com',
      github: 'https://github.com'
    });
    setExpertiseInput('');
    setIsModalOpen(true);
  };

  const openEditModal = (member: Mentor) => {
    setEditingMember(member);
    setFormData(member);
    setExpertiseInput('');
    setIsModalOpen(true);
  };

  const handleAddExpertise = (e?: React.KeyboardEvent | React.MouseEvent) => {
    if (e && 'key' in e && e.key !== 'Enter') return;
    if (e) e.preventDefault();
    const clean = expertiseInput.trim();
    if (clean && !(formData.expertise || []).includes(clean)) {
      setFormData(prev => ({
        ...prev,
        expertise: [...(prev.expertise || []), clean]
      }));
      setExpertiseInput('');
    }
  };

  const handleRemoveExpertise = (tag: string) => {
    setFormData(prev => ({
      ...prev,
      expertise: (prev.expertise || []).filter(t => t !== tag)
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.roleTitle) {
      showToast(language === 'bn' ? 'দয়া করে নাম এবং পদের নাম উল্লেখ করুন' : 'Please provide specialist name and role title');
      return;
    }

    if (editingMember) {
      updateMentor({
        ...editingMember,
        ...formData
      } as Mentor);
      showToast(language === 'bn' ? 'টিম সদস্যের তথ্য আপডেট হয়েছে' : 'Specialist profile updated successfully');
    } else {
      addMentor({
        name: formData.name || 'Specialist',
        institution: formData.companyOrOrg || 'Kraflyn Technologies',
        companyOrOrg: formData.companyOrOrg || 'Kraflyn Technologies',
        degree: formData.qualification || 'Senior Engineer',
        roleTitle: formData.roleTitle || 'Senior Specialist',
        specialization: formData.expertise || ['Full-Stack Development'],
        activeAssignedOrders: 0,
        completedOrders: formData.completedProjects || 0,
        rating: formData.rating || 5.0,
        contactPhone: formData.phone || formData.whatsapp || '+880 1711-000000',
        status: 'available',
        ...formData
      } as any);
      showToast(language === 'bn' ? 'নতুন বিশেষজ্ঞ টিম সদস্য সফলভাবে যুক্ত হয়েছে' : 'New specialist team member added successfully');
    }

    setIsModalOpen(false);
  };

  const handleDelete = (id: string, name: string) => {
    if (confirm(language === 'bn' ? `আপনি কি "${name}" কে টিম থেকে মুছে ফেলতে চান?` : `Are you sure you want to remove ${name} from the team?`)) {
      deleteMentor(id);
      showToast(language === 'bn' ? 'টিম সদস্য মুছে ফেলা হয়েছে' : 'Team member removed');
    }
  };

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
    <div className="space-y-6">
      
      {/* Header Bar */}
      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white p-4 sm:p-6 rounded-2xl sm:rounded-3xl border border-slate-200 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-4"
      >
        <div>
          <div className="flex items-center gap-2">
            <span className="p-2 rounded-xl bg-blue-50 text-blue-600 border border-blue-100">
              <Users className="w-5 h-5" />
            </span>
            <h1 className="text-xl sm:text-2xl font-black text-slate-900">
              {language === 'bn' ? 'বিশেষজ্ঞ টিম ও কনসালট্যান্ট রোস্টার' : 'Specialist Team & Consultants Roster'}
            </h1>
            <span className="px-2.5 py-0.5 rounded-full text-xs font-black bg-blue-100 text-blue-800">
              {mentors.length} {language === 'bn' ? 'জন বিশেষজ্ঞ' : 'Members'}
            </span>
          </div>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            {language === 'bn' 
              ? 'ক্র্যাফলিন টেকনোলজিসের সকল ইন-হাউস সফটওয়্যার আর্কিটেক্ট, UI/UX ডিজাইনার ও ডাটা সায়েন্টিস্টদের পরিচালনা করুন।' 
              : 'Manage our core engineers, UI/UX designers, WordPress leads, and data science specialists displayed across the public portal.'}
          </p>
        </div>

        <button
          onClick={openCreateModal}
          className="w-full sm:w-auto px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-md shadow-blue-500/20 cursor-pointer min-h-[44px]"
        >
          <Plus className="w-4 h-4" />
          <span>{language === 'bn' ? 'নতুন বিশেষজ্ঞ যোগ করুন' : 'Add Team Specialist'}</span>
        </button>
      </motion.div>

      {/* Filter and Search Bar */}
      <div className="bg-white rounded-2xl p-4 border border-slate-200 shadow-xs flex flex-col md:flex-row items-center justify-between gap-3">
        {/* Search */}
        <div className="relative w-full md:w-80">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder={language === 'bn' ? 'নাম, পদবি বা দক্ষতা দিয়ে খুঁজুন...' : 'Search by name, role, or expertise...'}
            className="w-full pl-9 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs font-medium text-slate-800 placeholder:text-slate-400 focus:outline-hidden focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Domain Tabs */}
        <div className="flex items-center gap-1.5 overflow-x-auto w-full md:w-auto pb-1 md:pb-0 scrollbar-none">
          {domains.map((dom) => {
            const isActive = selectedDomain === dom;
            return (
              <button
                key={dom}
                onClick={() => setSelectedDomain(dom)}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all whitespace-nowrap cursor-pointer shrink-0 ${
                  isActive
                    ? 'bg-blue-600 text-white shadow-xs'
                    : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                }`}
              >
                {dom}
              </button>
            );
          })}
        </div>
      </div>

      {/* Specialists Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {filteredMembers.map((member, idx) => (
          <motion.div
            key={member.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.04 }}
            className="bg-white rounded-3xl border border-slate-200 p-5 shadow-xs flex flex-col justify-between hover:shadow-md hover:border-blue-300 transition-all group"
          >
            <div>
              {/* Card Top Strip */}
              <div className="flex items-start justify-between gap-3 mb-4">
                <div className="flex items-center gap-3">
                  <img
                    src={member.avatar || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&auto=format&fit=crop&q=80'}
                    alt={member.name}
                    className="w-14 h-14 rounded-2xl object-cover border-2 border-slate-100 shadow-xs bg-slate-100"
                  />
                  <div>
                    <div className="flex items-center gap-1.5">
                      <h3 className="font-bold text-slate-900 text-base">{member.name}</h3>
                      <ShieldCheck className="w-4 h-4 text-blue-600 shrink-0" />
                    </div>
                    <p className="text-xs font-bold text-blue-700">{member.roleTitle || member.roleTitleEn}</p>
                    <span className="text-[11px] text-slate-500 font-medium">{member.experience}</span>
                  </div>
                </div>

                <div className="flex items-center gap-1 text-amber-500 bg-amber-50 px-2 py-0.5 rounded-lg text-xs font-bold shrink-0">
                  <Star className="w-3.5 h-3.5 fill-amber-400" />
                  <span>{member.rating?.toFixed(2) || '5.00'}</span>
                </div>
              </div>

              {/* Bio */}
              <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed mb-3">
                {member.bio || member.bioEn || 'Expert technical practitioner delivering robust digital architecture.'}
              </p>

              {/* Stats & Domain */}
              <div className="grid grid-cols-2 gap-2 p-2.5 rounded-xl bg-slate-50 border border-slate-100 mb-3 text-center text-xs">
                <div>
                  <div className="font-black text-slate-900">{member.completedProjects || 50}+</div>
                  <div className="text-[10px] text-slate-500">{language === 'bn' ? 'সম্পন্ন কাজ' : 'Projects Done'}</div>
                </div>
                <div className="border-l border-slate-200">
                  <div className="font-black text-blue-600">{member.location || 'Dhaka, BD'}</div>
                  <div className="text-[10px] text-slate-500">{language === 'bn' ? 'অবস্থান' : 'Location'}</div>
                </div>
              </div>

              {/* Expertise Badges */}
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

            {/* Actions Bottom Bar */}
            <div className="pt-3 border-t border-slate-100 flex items-center justify-between gap-2">
              <div className="flex items-center gap-1.5">
                {member.whatsapp && (
                  <a
                    href={`https://wa.me/${member.whatsapp.replace(/[^0-9]/g, '')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1.5 rounded-lg bg-emerald-50 text-emerald-700 hover:bg-emerald-100 transition-colors"
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
                    className="p-1.5 rounded-lg bg-slate-100 text-slate-700 hover:bg-slate-200 transition-colors"
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
                    className="p-1.5 rounded-lg bg-blue-50 text-blue-700 hover:bg-blue-100 transition-colors"
                    title="LinkedIn"
                  >
                    <Linkedin className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>

              <div className="flex items-center gap-1.5">
                <button
                  onClick={() => openEditModal(member)}
                  className="px-3 py-1.5 rounded-xl bg-blue-50 hover:bg-blue-100 text-blue-700 text-xs font-bold flex items-center gap-1 cursor-pointer transition-colors"
                >
                  <Edit3 className="w-3.5 h-3.5" />
                  <span>{language === 'bn' ? 'এডিট' : 'Edit'}</span>
                </button>
                <button
                  onClick={() => handleDelete(member.id, member.name)}
                  className="p-1.5 rounded-xl text-rose-500 hover:bg-rose-50 transition-colors cursor-pointer"
                  title="Remove specialist"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {filteredMembers.length === 0 && (
        <div className="bg-white rounded-3xl p-12 text-center border border-dashed border-slate-300">
          <Users className="w-12 h-12 text-slate-300 mx-auto mb-3" />
          <h3 className="text-base font-bold text-slate-800">
            {language === 'bn' ? 'কোনো বিশেষজ্ঞ পাওয়া যায়নি' : 'No team members matched your criteria'}
          </h3>
          <p className="text-xs text-slate-500 mt-1 mb-4">
            {language === 'bn' ? 'নতুন বিশেষজ্ঞ টিম সদস্য যোগ করতে উপরের বাটনে ক্লিক করুন।' : 'Click the button above to add a new specialist team member.'}
          </p>
          <button
            onClick={openCreateModal}
            className="px-4 py-2 bg-blue-600 text-white rounded-xl text-xs font-bold cursor-pointer"
          >
            {language === 'bn' ? 'নতুন বিশেষজ্ঞ যোগ করুন' : 'Add Specialist'}
          </button>
        </div>
      )}

      {/* Specialist Create / Edit Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-5 sm:p-7 shadow-2xl border border-slate-200 text-xs sm:text-sm"
            >
              <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                <div className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-blue-600" />
                  <h3 className="font-bold text-slate-900 text-base sm:text-lg">
                    {editingMember 
                      ? (language === 'bn' ? 'বিশেষজ্ঞ প্রোফাইল এডিট' : 'Edit Specialist Profile') 
                      : (language === 'bn' ? 'নতুন বিশেষজ্ঞ টিম সদস্য যোগ করুন' : 'Add New Team Specialist')}
                  </h3>
                </div>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 min-h-[36px] min-w-[36px] flex items-center justify-center cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4 pt-4">
                {/* Name and Role */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="font-bold text-slate-700 block mb-1">Full Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Md. Ahsanur Rahaman"
                      value={formData.name || ''}
                      onChange={e => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 border border-slate-300 rounded-xl bg-slate-50 focus:bg-white focus:ring-2 focus:ring-blue-500 font-semibold"
                    />
                  </div>
                  <div>
                    <label className="font-bold text-slate-700 block mb-1">Role Title (English) *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Principal Full-Stack Architect"
                      value={formData.roleTitle || ''}
                      onChange={e => setFormData({ ...formData, roleTitle: e.target.value, roleTitleEn: e.target.value })}
                      className="w-full px-3.5 py-2.5 border border-slate-300 rounded-xl bg-slate-50 focus:bg-white focus:ring-2 focus:ring-blue-500 font-semibold"
                    />
                  </div>
                </div>

                {/* Role Title Bn & Domain */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="font-bold text-slate-700 block mb-1">Role Title (Bengali)</label>
                    <input
                      type="text"
                      placeholder="e.g. প্রিন্সিপাল ফুল-স্ট্যাক আর্কিটেক্ট"
                      value={formData.roleTitleBn || ''}
                      onChange={e => setFormData({ ...formData, roleTitleBn: e.target.value })}
                      className="w-full px-3.5 py-2.5 border border-slate-300 rounded-xl bg-slate-50 focus:bg-white focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="font-bold text-slate-700 block mb-1">Technical Domain</label>
                    <select
                      value={formData.domain || 'Full-Stack Web Engineering'}
                      onChange={e => setFormData({ ...formData, domain: e.target.value })}
                      className="w-full px-3.5 py-2.5 border border-slate-300 rounded-xl bg-slate-50 font-bold"
                    >
                      {domains.filter(d => d !== 'All').map(dom => (
                        <option key={dom} value={dom}>{dom}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Avatar URL & Experience */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="font-bold text-slate-700 block mb-1">Avatar Image URL</label>
                    <input
                      type="text"
                      placeholder="https://images.unsplash.com/..."
                      value={formData.avatar || ''}
                      onChange={e => setFormData({ ...formData, avatar: e.target.value })}
                      className="w-full px-3.5 py-2.5 border border-slate-300 rounded-xl bg-slate-50 focus:bg-white focus:ring-2 focus:ring-blue-500 font-mono text-xs"
                    />
                  </div>
                  <div>
                    <label className="font-bold text-slate-700 block mb-1">Experience & Badge</label>
                    <input
                      type="text"
                      placeholder="e.g. 5+ Years in Software Architecture"
                      value={formData.experience || ''}
                      onChange={e => setFormData({ ...formData, experience: e.target.value })}
                      className="w-full px-3.5 py-2.5 border border-slate-300 rounded-xl bg-slate-50 focus:bg-white focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>

                {/* Contact Phone & WhatsApp */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div>
                    <label className="font-bold text-slate-700 block mb-1">Phone Number</label>
                    <input
                      type="text"
                      placeholder="+880 1712-345678"
                      value={formData.phone || ''}
                      onChange={e => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-3.5 py-2.5 border border-slate-300 rounded-xl bg-slate-50 font-mono"
                    />
                  </div>
                  <div>
                    <label className="font-bold text-slate-700 block mb-1">WhatsApp</label>
                    <input
                      type="text"
                      placeholder="+880 1712-345678"
                      value={formData.whatsapp || ''}
                      onChange={e => setFormData({ ...formData, whatsapp: e.target.value })}
                      className="w-full px-3.5 py-2.5 border border-slate-300 rounded-xl bg-slate-50 font-mono"
                    />
                  </div>
                  <div>
                    <label className="font-bold text-slate-700 block mb-1">Completed Projects</label>
                    <input
                      type="number"
                      placeholder="50"
                      value={formData.completedProjects || 50}
                      onChange={e => setFormData({ ...formData, completedProjects: Number(e.target.value) })}
                      className="w-full px-3.5 py-2.5 border border-slate-300 rounded-xl bg-slate-50 font-black"
                    />
                  </div>
                </div>

                {/* Social Links */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="font-bold text-slate-700 block mb-1">GitHub Profile</label>
                    <input
                      type="text"
                      placeholder="https://github.com/..."
                      value={formData.github || ''}
                      onChange={e => setFormData({ ...formData, github: e.target.value })}
                      className="w-full px-3.5 py-2.5 border border-slate-300 rounded-xl bg-slate-50 font-mono text-xs"
                    />
                  </div>
                  <div>
                    <label className="font-bold text-slate-700 block mb-1">LinkedIn Profile</label>
                    <input
                      type="text"
                      placeholder="https://linkedin.com/in/..."
                      value={formData.linkedIn || ''}
                      onChange={e => setFormData({ ...formData, linkedIn: e.target.value })}
                      className="w-full px-3.5 py-2.5 border border-slate-300 rounded-xl bg-slate-50 font-mono text-xs"
                    />
                  </div>
                </div>

                {/* Expertise Tag Input */}
                <div>
                  <label className="font-bold text-slate-700 block mb-1">Key Tech Stack & Expertise</label>
                  <div className="flex gap-2 mb-2">
                    <input
                      type="text"
                      placeholder="Type a skill and press Add (e.g. Next.js, Figma, Python)"
                      value={expertiseInput}
                      onChange={e => setExpertiseInput(e.target.value)}
                      onKeyDown={handleAddExpertise}
                      className="flex-1 px-3.5 py-2 border border-slate-300 rounded-xl bg-slate-50"
                    />
                    <button
                      type="button"
                      onClick={handleAddExpertise}
                      className="px-4 py-2 bg-slate-800 hover:bg-slate-900 text-white rounded-xl font-bold cursor-pointer"
                    >
                      Add
                    </button>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {(formData.expertise || []).map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 bg-blue-50 text-blue-700 border border-blue-200 rounded-lg text-xs font-bold flex items-center gap-1"
                      >
                        <span>{tag}</span>
                        <button
                          type="button"
                          onClick={() => handleRemoveExpertise(tag)}
                          className="hover:text-rose-600 cursor-pointer"
                        >
                          <X className="w-3.5 h-3.5" />
                        </button>
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bio (English) */}
                <div>
                  <label className="font-bold text-slate-700 block mb-1">Specialist Bio / Summary (English)</label>
                  <textarea
                    rows={2}
                    placeholder="Short description of technical background and achievements..."
                    value={formData.bioEn || formData.bio || ''}
                    onChange={e => setFormData({ ...formData, bio: e.target.value, bioEn: e.target.value })}
                    className="w-full px-3.5 py-2.5 border border-slate-300 rounded-xl bg-slate-50"
                  />
                </div>

                {/* Footer Buttons */}
                <div className="pt-3 border-t border-slate-100 flex items-center justify-end gap-3">
                  <button
                    type="button"
                    onClick={() => setIsModalOpen(false)}
                    className="px-5 py-2.5 border border-slate-300 text-slate-700 hover:bg-slate-100 rounded-xl font-bold cursor-pointer"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold shadow-md shadow-blue-500/20 cursor-pointer"
                  >
                    {editingMember ? 'Save Changes' : 'Create Specialist'}
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
