import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { UNIVERSITIES, DEPARTMENTS } from '../../data/mockData';
import { 
  Sparkles, 
  CheckCircle2, 
  DollarSign, 
  Calendar, 
  BookOpen, 
  Award, 
  Send, 
  ShieldCheck 
} from 'lucide-react';

export const BecomeMentorSection: React.FC = () => {
  const { registerMentor, setActiveNavTab } = useApp();
  const [submitted, setSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    whatsapp: '',
    university: UNIVERSITIES[0],
    department: DEPARTMENTS[0],
    qualification: '',
    expertise: '',
    experience: '',
    portfolio: '',
    linkedIn: '',
    facebook: '',
    availableTime: 'Evenings & Weekends (7 PM - 11 PM)',
    expectedRate: '৳500 - ৳1000 / session',
    bio: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const expertiseArray = formData.expertise.split(',').map(s => s.trim()).filter(Boolean);
    registerMentor({
      name: formData.name,
      institution: `${formData.university} (${formData.department})`,
      degree: formData.qualification || 'Academic Mentor',
      specialization: expertiseArray.length ? expertiseArray : ['Course Coaching', 'Problem Solving'],
      contactPhone: formData.phone || formData.whatsapp,
      status: 'available'
    });
    setSubmitted(true);
  };

  return (
    <div className="py-16 md:py-24 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Join Our Academic Network</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Become an EduSolve Academic Mentor
          </h1>
          <p className="mt-3 text-sm sm:text-base text-slate-600">
            Guide university juniors, share your expertise in programming, thesis research, or exam prep, and earn competitive income on your own schedule.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-14">
          <div className="p-5 bg-slate-50 rounded-2xl border border-slate-200/80">
            <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center mb-3">
              <DollarSign className="w-5 h-5" />
            </div>
            <h3 className="text-sm font-bold text-slate-900 mb-1">Competitive Rates (৳ BDT)</h3>
            <p className="text-xs text-slate-600">
              Set your own hourly rate or project milestones. Guaranteed weekly payouts directly via bKash / Bank.
            </p>
          </div>

          <div className="p-5 bg-slate-50 rounded-2xl border border-slate-200/80">
            <div className="w-10 h-10 rounded-xl bg-indigo-100 text-indigo-700 flex items-center justify-center mb-3">
              <Calendar className="w-5 h-5" />
            </div>
            <h3 className="text-sm font-bold text-slate-900 mb-1">100% Flexible Schedule</h3>
            <p className="text-xs text-slate-600">
              Choose your convenient hours (evenings, nights, weekends) and accept only requests matching your domain.
            </p>
          </div>

          <div className="p-5 bg-slate-50 rounded-2xl border border-slate-200/80">
            <div className="w-10 h-10 rounded-xl bg-purple-100 text-purple-700 flex items-center justify-center mb-3">
              <Award className="w-5 h-5" />
            </div>
            <h3 className="text-sm font-bold text-slate-900 mb-1">Empower University Juniors</h3>
            <p className="text-xs text-slate-600">
              Build your teaching credentials, mentoring portfolio, and inspire the next batch of engineers and scholars.
            </p>
          </div>
        </div>

        {/* Application Form */}
        <div className="bg-slate-50 rounded-3xl border border-slate-200/80 p-6 sm:p-10 shadow-xs">
          {submitted ? (
            <div className="text-center py-12 space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900">Application Submitted for Review!</h3>
              <p className="text-sm text-slate-600 max-w-md mx-auto">
                Thank you for applying, {formData.name}! Our Academic Quality team will review your qualifications and contact you on WhatsApp (+880 {formData.phone}) within 24 hours for mentor verification.
              </p>
              <div className="pt-4 flex justify-center gap-3">
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setActiveNavTab('mentor-dashboard');
                  }}
                  className="px-6 py-2.5 bg-emerald-600 text-white text-xs font-bold rounded-xl shadow-md hover:bg-emerald-700"
                >
                  Go to Mentor Panel
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="border-b border-slate-200 pb-4">
                <h3 className="text-lg font-bold text-slate-900">Mentor Application Form</h3>
                <p className="text-xs text-slate-500">
                  Please provide accurate academic details. Our team verifies every mentor profile.
                </p>
              </div>

              {/* Personal Info */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Full Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Engr. Tanvir Ahmed"
                    value={formData.name}
                    onChange={e => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3.5 py-2 text-xs border border-slate-300 rounded-xl bg-white focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Email Address *</label>
                  <input
                    type="email"
                    required
                    placeholder="e.g. mentor@buet.ac.bd"
                    value={formData.email}
                    onChange={e => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3.5 py-2 text-xs border border-slate-300 rounded-xl bg-white focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Phone Number *</label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g. +880 1712-345678"
                    value={formData.phone}
                    onChange={e => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3.5 py-2 text-xs border border-slate-300 rounded-xl bg-white focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">WhatsApp Number</label>
                  <input
                    type="tel"
                    placeholder="e.g. +880 1712-345678"
                    value={formData.whatsapp}
                    onChange={e => setFormData({ ...formData, whatsapp: e.target.value })}
                    className="w-full px-3.5 py-2 text-xs border border-slate-300 rounded-xl bg-white focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                  />
                </div>
              </div>

              {/* University & Dept */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">University / Institution *</label>
                  <select
                    value={formData.university}
                    onChange={e => setFormData({ ...formData, university: e.target.value })}
                    className="w-full px-3.5 py-2 text-xs border border-slate-300 rounded-xl bg-white focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                  >
                    {UNIVERSITIES.map(u => (
                      <option key={u} value={u}>{u}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Department *</label>
                  <select
                    value={formData.department}
                    onChange={e => setFormData({ ...formData, department: e.target.value })}
                    className="w-full px-3.5 py-2 text-xs border border-slate-300 rounded-xl bg-white focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                  >
                    {DEPARTMENTS.map(d => (
                      <option key={d} value={d}>{d}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Qualification & Expertise */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Academic Qualification *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. B.Sc in CSE (BUET), M.Sc Ongoing"
                    value={formData.qualification}
                    onChange={e => setFormData({ ...formData, qualification: e.target.value })}
                    className="w-full px-3.5 py-2 text-xs border border-slate-300 rounded-xl bg-white focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Areas of Expertise (Comma Separated) *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Machine Learning, Data Structures, DSP, Thesis Writing"
                    value={formData.expertise}
                    onChange={e => setFormData({ ...formData, expertise: e.target.value })}
                    className="w-full px-3.5 py-2 text-xs border border-slate-300 rounded-xl bg-white focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                  />
                </div>
              </div>

              {/* Experience & Links */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Teaching / Research / Industry Experience *</label>
                <textarea
                  rows={2}
                  required
                  placeholder="Describe your mentoring or relevant project/research background..."
                  value={formData.experience}
                  onChange={e => setFormData({ ...formData, experience: e.target.value })}
                  className="w-full px-3.5 py-2 text-xs border border-slate-300 rounded-xl bg-white focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">LinkedIn Profile</label>
                  <input
                    type="url"
                    placeholder="https://linkedin.com/in/..."
                    value={formData.linkedIn}
                    onChange={e => setFormData({ ...formData, linkedIn: e.target.value })}
                    className="w-full px-3.5 py-2 text-xs border border-slate-300 rounded-xl bg-white"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Portfolio / GitHub</label>
                  <input
                    type="url"
                    placeholder="https://github.com/..."
                    value={formData.portfolio}
                    onChange={e => setFormData({ ...formData, portfolio: e.target.value })}
                    className="w-full px-3.5 py-2 text-xs border border-slate-300 rounded-xl bg-white"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Expected Rate (৳ BDT)</label>
                  <input
                    type="text"
                    placeholder="e.g. ৳500 - ৳1000 / session"
                    value={formData.expectedRate}
                    onChange={e => setFormData({ ...formData, expectedRate: e.target.value })}
                    className="w-full px-3.5 py-2 text-xs border border-slate-300 rounded-xl bg-white"
                  />
                </div>
              </div>

              {/* Submit */}
              <div className="pt-4 border-t border-slate-200 flex items-center justify-between">
                <div className="flex items-center gap-1 text-xs text-slate-500">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>Applications are reviewed within 24 hours.</span>
                </div>

                <button
                  type="submit"
                  className="px-8 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs rounded-xl shadow-md flex items-center gap-2 transition-colors cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Submit Mentor Application</span>
                </button>
              </div>
            </form>
          )}
        </div>

      </div>
    </div>
  );
};
