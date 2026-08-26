import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { ProjectItem, ProjectCategory } from '../../types';
import { 
  FolderGit2, 
  Plus, 
  Search, 
  Trash2, 
  Edit3, 
  ExternalLink, 
  Github, 
  Star, 
  Check, 
  X, 
  Tag, 
  Image as ImageIcon, 
  Calendar,
  Layers,
  Sparkles,
  Award
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const CATEGORIES: ProjectCategory[] = [
  'Full-Stack Web',
  'Design & UI/UX',
  'WordPress Solutions',
  'Data Analysis & BI',
  'Academic',
  'Full-Stack',
  'Mobile App',
  'AI & Machine Learning',
  'Data Science',
  'Thesis & Research'
];

export const ProjectsManager: React.FC = () => {
  const { projects, addProject, updateProject, deleteProject, language } = useApp();
  
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingProject, setEditingProject] = useState<ProjectItem | null>(null);
  const [deleteConfirmId, setDeleteConfirmId] = useState<string | null>(null);

  // Form State
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState<ProjectCategory>('Full-Stack Web');
  const [description, setDescription] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [technologies, setTechnologies] = useState<string[]>([]);
  const [techInput, setTechInput] = useState('');
  const [liveUrl, setLiveUrl] = useState('');
  const [githubUrl, setGithubUrl] = useState('');
  const [studentOrClient, setStudentOrClient] = useState('');
  const [completionDate, setCompletionDate] = useState('');
  const [featured, setFeatured] = useState(false);
  const [gradeOutcome, setGradeOutcome] = useState('Client Verified & Production Ready');

  const openCreateModal = () => {
    setEditingProject(null);
    setTitle('');
    setCategory('Full-Stack Web');
    setDescription('');
    setImageUrl('https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&auto=format&fit=crop&q=60');
    setTechnologies(['Next.js', 'TypeScript', 'Tailwind CSS', 'PostgreSQL']);
    setTechInput('');
    setLiveUrl('');
    setGithubUrl('');
    setStudentOrClient('Enterprise SaaS Client');
    setCompletionDate(new Date().toLocaleDateString('en-US', { month: 'short', year: 'numeric' }));
    setFeatured(true);
    setGradeOutcome('100% Production Live');
    setIsModalOpen(true);
  };

  const openEditModal = (proj: ProjectItem) => {
    setEditingProject(proj);
    setTitle(proj.title);
    setCategory(proj.category);
    setDescription(proj.description);
    setImageUrl(proj.imageUrl);
    setTechnologies(proj.technologies || []);
    setTechInput('');
    setLiveUrl(proj.liveUrl || '');
    setGithubUrl(proj.githubUrl || '');
    setStudentOrClient(proj.studentOrClient || '');
    setCompletionDate(proj.completionDate || '');
    setFeatured(!!proj.featured);
    setGradeOutcome(proj.gradeOutcome || 'A+ Grade Output');
    setIsModalOpen(true);
  };

  const handleAddTech = (e?: React.KeyboardEvent | React.MouseEvent) => {
    if (e && 'key' in e && e.key !== 'Enter') return;
    if (e) e.preventDefault();
    const clean = techInput.trim();
    if (clean && !technologies.includes(clean)) {
      setTechnologies([...technologies, clean]);
      setTechInput('');
    }
  };

  const handleRemoveTech = (tech: string) => {
    setTechnologies(technologies.filter(t => t !== tech));
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim() || !description.trim()) return;

    if (editingProject) {
      updateProject({
        ...editingProject,
        title,
        category,
        description,
        imageUrl: imageUrl.trim() || 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&auto=format&fit=crop&q=60',
        technologies,
        liveUrl: liveUrl.trim() || undefined,
        githubUrl: githubUrl.trim() || undefined,
        studentOrClient: studentOrClient.trim() || undefined,
        completionDate: completionDate.trim() || undefined,
        featured,
        gradeOutcome: gradeOutcome.trim() || undefined
      });
    } else {
      addProject({
        title,
        category,
        description,
        imageUrl: imageUrl.trim() || 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&auto=format&fit=crop&q=60',
        technologies,
        liveUrl: liveUrl.trim() || undefined,
        githubUrl: githubUrl.trim() || undefined,
        studentOrClient: studentOrClient.trim() || undefined,
        completionDate: completionDate.trim() || undefined,
        featured,
        gradeOutcome: gradeOutcome.trim() || undefined
      });
    }

    setIsModalOpen(false);
  };

  const filteredProjects = projects.filter(p => {
    const matchSearch = p.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                        p.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                        p.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
                        p.technologies.some(t => t.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchCat = selectedCategory === 'all' || p.category === selectedCategory;
    return matchSearch && matchCat;
  });

  return (
    <div className="space-y-6">
      {/* Header & Controls */}
      <div className="bg-white rounded-2xl p-5 md:p-6 border border-slate-200/80 shadow-xs flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="p-2 rounded-xl bg-blue-50 text-blue-600 border border-blue-100">
              <FolderGit2 className="w-5 h-5" />
            </span>
            <h1 className="text-xl md:text-2xl font-black text-slate-900">
              {language === 'bn' ? 'প্রজেক্ট ও পোর্টফোলিও কন্ট্রোল' : 'Project Portfolio Management'}
            </h1>
          </div>
          <p className="text-xs md:text-sm text-slate-500 mt-1">
            {language === 'bn' 
              ? 'ওয়েবসাইটে প্রদর্শিত সকল প্রজেক্ট সরাসরি অ্যাড, এডিট, ফিচারড ও ডিলিট করুন।' 
              : 'Add, edit, feature, and delete showcase projects directly on the live platform.'}
          </p>
        </div>

        <div className="flex items-center gap-2 w-full md:w-auto">
          <button
            onClick={openCreateModal}
            className="flex-1 md:flex-none flex items-center justify-center gap-2 px-4 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-sm font-bold rounded-xl shadow-md shadow-blue-500/20 transition-all cursor-pointer"
          >
            <Plus className="w-4 h-4" />
            <span>{language === 'bn' ? 'নতুন প্রজেক্ট যোগ করুন' : 'Add New Project'}</span>
          </button>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="bg-white rounded-2xl p-4 border border-slate-200/80 shadow-xs flex flex-col sm:flex-row items-center gap-3">
        <div className="relative flex-1 w-full">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder={language === 'bn' ? 'প্রজেক্টের নাম, টেকনোলজি বা ক্যাটাগরি দিয়ে সার্চ করুন...' : 'Search by title, tech stack, or description...'}
            className="w-full pl-10 pr-4 py-2 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all"
          />
          {searchTerm && (
            <button 
              onClick={() => setSearchTerm('')} 
              className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        <div className="w-full sm:w-auto overflow-x-auto flex items-center gap-1.5 pb-1 sm:pb-0 scrollbar-none">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-colors shrink-0 cursor-pointer ${
              selectedCategory === 'all'
                ? 'bg-slate-900 text-white'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            {language === 'bn' ? 'সকল' : 'All'} ({projects.length})
          </button>
          {CATEGORIES.map(cat => {
            const count = projects.filter(p => p.category === cat).length;
            if (count === 0 && selectedCategory !== cat) return null;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-colors shrink-0 cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-blue-600 text-white shadow-xs'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {cat} ({count})
              </button>
            );
          })}
        </div>
      </div>

      {/* Projects Grid */}
      {filteredProjects.length === 0 ? (
        <div className="bg-white rounded-2xl p-12 text-center border border-dashed border-slate-300">
          <FolderGit2 className="w-12 h-12 text-slate-300 mx-auto mb-3" />
          <h3 className="text-base font-bold text-slate-700">
            {language === 'bn' ? 'কোনো প্রজেক্ট পাওয়া যায়নি' : 'No projects found'}
          </h3>
          <p className="text-xs text-slate-500 mt-1 max-w-md mx-auto">
            {language === 'bn' 
              ? 'আপনার ফিল্টারের সাথে মিল রেখে কোনো প্রজেক্ট পাওয়া যায়নি অথবা কোনো প্রজেক্ট যুক্ত করা হয়নি।' 
              : 'Try clearing your search or add your first portfolio showcase project.'}
          </p>
          <button
            onClick={openCreateModal}
            className="mt-4 inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-xl text-xs font-bold hover:bg-blue-700"
          >
            <Plus className="w-4 h-4" />
            {language === 'bn' ? 'প্রথম প্রজেক্ট যোগ করুন' : 'Add First Project'}
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              layout
              className="bg-white rounded-2xl border border-slate-200/80 shadow-xs overflow-hidden flex flex-col hover:shadow-md transition-shadow group"
            >
              {/* Image & Badges */}
              <div className="relative aspect-video w-full bg-slate-100 overflow-hidden">
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&auto=format&fit=crop&q=60';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />

                {/* Category badge */}
                <span className="absolute top-3 left-3 px-2.5 py-1 rounded-lg bg-slate-900/80 backdrop-blur-md text-white text-[11px] font-bold border border-white/10">
                  {project.category}
                </span>

                {/* Featured indicator */}
                {project.featured && (
                  <span className="absolute top-3 right-3 px-2.5 py-1 rounded-lg bg-amber-500 text-slate-950 text-[10px] font-black flex items-center gap-1 shadow-md">
                    <Star className="w-3 h-3 fill-current" />
                    FEATURED
                  </span>
                )}

                {/* Outcome badge */}
                {project.gradeOutcome && (
                  <span className="absolute bottom-3 left-3 px-2.5 py-1 rounded-lg bg-emerald-600/90 backdrop-blur-md text-white text-[10px] font-bold flex items-center gap-1">
                    <Award className="w-3 h-3" />
                    {project.gradeOutcome}
                  </span>
                )}
              </div>

              {/* Content */}
              <div className="p-4 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-extrabold text-base text-slate-900 line-clamp-1 group-hover:text-blue-600 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs text-slate-600 mt-1.5 line-clamp-2 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tech stack chips */}
                  {project.technologies && project.technologies.length > 0 && (
                    <div className="flex flex-wrap gap-1 mt-3">
                      {project.technologies.map(tech => (
                        <span 
                          key={tech}
                          className="px-2 py-0.5 rounded-md bg-slate-100 text-slate-700 text-[10px] font-semibold"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                {/* Bottom details & Actions */}
                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="p-1.5 rounded-lg bg-blue-50 text-blue-600 hover:bg-blue-100 transition-colors"
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
                        className="p-1.5 rounded-lg bg-slate-100 text-slate-700 hover:bg-slate-200 transition-colors"
                        title="Source Code"
                      >
                        <Github className="w-3.5 h-3.5" />
                      </a>
                    )}
                    <span className="text-[10px] text-slate-400">
                      {project.completionDate || 'Recent'}
                    </span>
                  </div>

                  <div className="flex items-center gap-1.5">
                    <button
                      onClick={() => openEditModal(project)}
                      className="flex items-center gap-1 px-2.5 py-1.5 bg-slate-100 hover:bg-blue-50 text-slate-700 hover:text-blue-600 rounded-lg text-xs font-bold transition-colors cursor-pointer"
                    >
                      <Edit3 className="w-3.5 h-3.5" />
                      <span>{language === 'bn' ? 'এডিট' : 'Edit'}</span>
                    </button>
                    
                    <button
                      onClick={() => setDeleteConfirmId(project.id)}
                      className="p-1.5 text-rose-500 hover:bg-rose-50 rounded-lg transition-colors cursor-pointer"
                      title="Delete Project"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      )}

      {/* Add / Edit Project Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/60 backdrop-blur-sm overflow-y-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              className="bg-white rounded-2xl w-full max-w-2xl border border-slate-200 shadow-2xl overflow-hidden my-auto"
            >
              <div className="px-6 py-4 bg-slate-900 text-white flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <FolderGit2 className="w-5 h-5 text-blue-400" />
                  <h3 className="font-extrabold text-base">
                    {editingProject 
                      ? (language === 'bn' ? 'প্রজেক্ট এডিট করুন' : 'Edit Project Details') 
                      : (language === 'bn' ? 'নতুন প্রজেক্ট যোগ করুন' : 'Add New Project')}
                  </h3>
                </div>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <form onSubmit={handleSave} className="p-6 space-y-4 max-h-[80vh] overflow-y-auto">
                {/* Title & Category */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      {language === 'bn' ? 'প্রজেক্টের শিরোনাম *' : 'Project Title *'}
                    </label>
                    <input
                      type="text"
                      required
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                      placeholder="e.g. AI-Powered Blood Bank Network"
                      className="w-full px-3 py-2 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:bg-white focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      {language === 'bn' ? 'ক্যাটাগরি *' : 'Category *'}
                    </label>
                    <select
                      value={category}
                      onChange={(e) => setCategory(e.target.value as ProjectCategory)}
                      className="w-full px-3 py-2 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:bg-white focus:outline-none"
                    >
                      {CATEGORIES.map(cat => (
                        <option key={cat} value={cat}>{cat}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Description */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    {language === 'bn' ? 'বিস্তারিত বিবরণ *' : 'Project Description *'}
                  </label>
                  <textarea
                    rows={3}
                    required
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Provide a clear, engaging summary of the project, features, and academic scope..."
                    className="w-full px-3 py-2 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:bg-white focus:outline-none"
                  />
                </div>

                {/* Image URL with quick preview */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1 flex items-center justify-between">
                    <span>{language === 'bn' ? 'ছবি / থাম্বনেইল URL' : 'Image / Thumbnail URL'}</span>
                    <span className="text-[10px] text-slate-400">Unsplash or Cloud URL</span>
                  </label>
                  <div className="flex gap-2">
                    <input
                      type="url"
                      value={imageUrl}
                      onChange={(e) => setImageUrl(e.target.value)}
                      placeholder="https://images.unsplash.com/..."
                      className="flex-1 px-3 py-2 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:bg-white focus:outline-none"
                    />
                    {imageUrl && (
                      <div className="w-10 h-10 rounded-lg overflow-hidden border border-slate-200 shrink-0 bg-slate-100">
                        <img src={imageUrl} alt="preview" className="w-full h-full object-cover" />
                      </div>
                    )}
                  </div>
                </div>

                {/* Tech stack adder */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    {language === 'bn' ? 'ব্যবহৃত টেকনোলজি (ট্যাগ)' : 'Technologies & Tech Stack'}
                  </label>
                  <div className="flex gap-2 mb-2">
                    <input
                      type="text"
                      value={techInput}
                      onChange={(e) => setTechInput(e.target.value)}
                      onKeyDown={handleAddTech}
                      placeholder="Type e.g. 'Flutter', 'Firebase', 'Python' & press Enter"
                      className="flex-1 px-3 py-2 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:bg-white focus:outline-none"
                    />
                    <button
                      type="button"
                      onClick={handleAddTech}
                      className="px-3 py-2 bg-slate-800 text-white rounded-xl text-xs font-bold hover:bg-slate-700"
                    >
                      {language === 'bn' ? 'যুক্ত করুন' : 'Add Tech'}
                    </button>
                  </div>
                  <div className="flex flex-wrap gap-1.5 min-h-[32px] p-2 bg-slate-50 rounded-xl border border-slate-100">
                    {technologies.length === 0 && (
                      <span className="text-xs text-slate-400 italic">No tags added yet</span>
                    )}
                    {technologies.map(tech => (
                      <span
                        key={tech}
                        className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-blue-100 text-blue-800 text-xs font-bold"
                      >
                        {tech}
                        <button
                          type="button"
                          onClick={() => handleRemoveTech(tech)}
                          className="text-blue-600 hover:text-blue-900"
                        >
                          <X className="w-3 h-3" />
                        </button>
                      </span>
                    ))}
                  </div>
                </div>

                {/* External Links */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      {language === 'bn' ? 'লাইভ ডেমো লিংক (ঐচ্ছিক)' : 'Live Demo URL (Optional)'}
                    </label>
                    <input
                      type="url"
                      value={liveUrl}
                      onChange={(e) => setLiveUrl(e.target.value)}
                      placeholder="https://myproject.com"
                      className="w-full px-3 py-2 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:bg-white focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      {language === 'bn' ? 'গিটহাব রিপো লিংক (ঐচ্ছিক)' : 'GitHub Repo URL (Optional)'}
                    </label>
                    <input
                      type="url"
                      value={githubUrl}
                      onChange={(e) => setGithubUrl(e.target.value)}
                      placeholder="https://github.com/..."
                      className="w-full px-3 py-2 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:bg-white focus:outline-none"
                    />
                  </div>
                </div>

                {/* Student Info, Completion Date & Grade Output */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      {language === 'bn' ? 'শিক্ষার্থী / ক্লায়েন্ট' : 'Client / University'}
                    </label>
                    <input
                      type="text"
                      value={studentOrClient}
                      onChange={(e) => setStudentOrClient(e.target.value)}
                      placeholder="e.g. CSE Student, PUB"
                      className="w-full px-3 py-2 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:bg-white focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      {language === 'bn' ? 'সম্পন্নের সময়কাল' : 'Completion Date'}
                    </label>
                    <input
                      type="text"
                      value={completionDate}
                      onChange={(e) => setCompletionDate(e.target.value)}
                      placeholder="e.g. Feb 2026"
                      className="w-full px-3 py-2 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:bg-white focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      {language === 'bn' ? 'ফলাফল / ব্যাজ' : 'Grade / Outcome'}
                    </label>
                    <input
                      type="text"
                      value={gradeOutcome}
                      onChange={(e) => setGradeOutcome(e.target.value)}
                      placeholder="e.g. A+ Grade Output"
                      className="w-full px-3 py-2 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:bg-white focus:outline-none"
                    />
                  </div>
                </div>

                {/* Featured Checkbox */}
                <div className="pt-2">
                  <label className="flex items-center gap-3 p-3 bg-amber-50 rounded-xl border border-amber-200/60 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={featured}
                      onChange={(e) => setFeatured(e.target.checked)}
                      className="w-4 h-4 text-amber-600 rounded-md focus:ring-amber-500"
                    />
                    <div>
                      <span className="text-xs font-bold text-amber-900 block">
                        {language === 'bn' ? 'ওয়েবসাইটের শীর্ষে ফিচারড প্রজেক্ট হিসেবে প্রদর্শন করুন' : 'Highlight as Featured Showcase Project'}
                      </span>
                      <span className="text-[10px] text-amber-700">
                        {language === 'bn' ? 'এটি হোমপেজের শোকেসে গোল্ডেন ব্যাজ সহ সবার আগে দেখাবে।' : 'Will be displayed prominently on the student homepage portfolio section.'}
                      </span>
                    </div>
                  </label>
                </div>

                {/* Form Buttons */}
                <div className="pt-4 border-t border-slate-100 flex items-center justify-end gap-3">
                  <button
                    type="button"
                    onClick={() => setIsModalOpen(false)}
                    className="px-4 py-2 text-sm font-bold text-slate-600 hover:bg-slate-100 rounded-xl transition-colors"
                  >
                    {language === 'bn' ? 'বাতিল' : 'Cancel'}
                  </button>
                  <button
                    type="submit"
                    className="px-5 py-2 text-sm font-bold bg-blue-600 hover:bg-blue-700 text-white rounded-xl shadow-md shadow-blue-500/20 transition-colors"
                  >
                    {editingProject 
                      ? (language === 'bn' ? 'পরিবর্তন সেভ করুন' : 'Update Project') 
                      : (language === 'bn' ? 'প্রজেক্ট প্রকাশ করুন' : 'Publish Project')}
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Delete Confirmation Modal */}
      <AnimatePresence>
        {deleteConfirmId && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-white rounded-2xl max-w-md w-full p-6 border border-slate-200 shadow-2xl text-center"
            >
              <div className="w-12 h-12 rounded-full bg-rose-100 text-rose-600 flex items-center justify-center mx-auto mb-4">
                <Trash2 className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-black text-slate-900">
                {language === 'bn' ? 'প্রজেক্টটি কি নিশ্চিত মুছে ফেলবেন?' : 'Confirm Project Deletion?'}
              </h3>
              <p className="text-xs text-slate-500 mt-2">
                {language === 'bn' 
                  ? 'এই প্রজেক্টটি ডাটাবেজ এবং ওয়েবসাইট থেকে স্থায়ীভাবে মুছে যাবে।' 
                  : 'This project will be permanently removed from Firestore and the public website.'}
              </p>
              <div className="flex items-center justify-center gap-3 mt-6">
                <button
                  onClick={() => setDeleteConfirmId(null)}
                  className="px-4 py-2 text-xs font-bold text-slate-600 hover:bg-slate-100 rounded-xl"
                >
                  {language === 'bn' ? 'বাতিল' : 'Cancel'}
                </button>
                <button
                  onClick={() => {
                    deleteProject(deleteConfirmId);
                    setDeleteConfirmId(null);
                  }}
                  className="px-4 py-2 text-xs font-bold bg-rose-600 hover:bg-rose-700 text-white rounded-xl shadow-md shadow-rose-500/20"
                >
                  {language === 'bn' ? 'হ্যাঁ, মুছে ফেলুন' : 'Yes, Delete'}
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};
