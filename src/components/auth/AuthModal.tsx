import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { UserRole } from '../../types';
import { UNIVERSITIES, DEPARTMENTS } from '../../data/mockData';
import { 
  X, 
  User, 
  GraduationCap, 
  ShieldCheck, 
  Sparkles, 
  ArrowRight, 
  Mail, 
  Lock, 
  CheckCircle2,
  Phone
} from 'lucide-react';

export const AuthModal: React.FC = () => {
  const { 
    authModalOpen, 
    closeAuthModal, 
    authModalMode, 
    openAuthModal, 
    login, 
    registerUser,
    switchRole 
  } = useApp();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [university, setUniversity] = useState(UNIVERSITIES[0]);
  const [department, setDepartment] = useState(DEPARTMENTS[0]);
  const [role, setRole] = useState<UserRole>('student');

  if (!authModalOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (authModalMode === 'login') {
      login(email || 'student@pundra.edu.bd', password || 'password');
    } else {
      registerUser({
        name,
        email,
        phone,
        university,
        department,
        role
      });
    }
  };

  const handleQuickLogin = (quickRole: UserRole) => {
    switchRole(quickRole);
    closeAuthModal();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in overflow-y-auto">
      <div className="bg-white rounded-3xl max-w-md w-full p-6 sm:p-8 shadow-2xl border border-slate-200 overflow-hidden relative">
        
        {/* Close Button */}
        <button
          onClick={closeAuthModal}
          className="absolute top-5 right-5 p-1.5 text-slate-400 hover:text-slate-700 rounded-lg hover:bg-slate-100 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="text-center mb-6">
          <div className="w-12 h-12 rounded-2xl bg-blue-600 text-white flex items-center justify-center mx-auto mb-3 shadow-md shadow-blue-600/20">
            <User className="w-6 h-6" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">
            {authModalMode === 'login' ? 'Client & Partner Login' : 'Create a Client Account'}
          </h2>
          <p className="text-xs text-slate-500 mt-1">
            {authModalMode === 'login'
              ? 'Access your active project dashboard, invoices, and direct specialist communication'
              : 'Register to manage your software deliverables, design requests, and business solutions'}
          </p>
        </div>

        {/* Traditional Form */}
        <form onSubmit={handleSubmit} className="space-y-3.5 text-xs">
          {authModalMode === 'register' && (
            <>
              <div>
                <label className="block font-bold text-slate-700 mb-1">Full Name *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Md. Ahsanur Rahaman"
                  value={name}
                  onChange={e => setName(e.target.value)}
                  className="w-full px-3.5 py-2.5 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-hidden"
                />
              </div>

              <div>
                <label className="block font-bold text-slate-700 mb-1">Phone Number / WhatsApp *</label>
                <input
                  type="tel"
                  required
                  placeholder="e.g. +880 1712-345678"
                  value={phone}
                  onChange={e => setPhone(e.target.value)}
                  className="w-full px-3.5 py-2.5 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-hidden"
                />
              </div>

              <div>
                <label className="block font-bold text-slate-700 mb-1">Company / Organization / Brand</label>
                <input
                  type="text"
                  placeholder="e.g. Acme Tech Innovations"
                  value={university}
                  onChange={e => setUniversity(e.target.value)}
                  className="w-full px-3.5 py-2.5 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-hidden"
                />
              </div>
            </>
          )}

          <div>
            <label className="block font-bold text-slate-700 mb-1">Email Address *</label>
            <input
              type="email"
              required
              placeholder="e.g. client@company.com"
              value={email}
              onChange={e => setEmail(e.target.value)}
              className="w-full px-3.5 py-2.5 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-hidden"
            />
          </div>

          <div>
            <label className="block font-bold text-slate-700 mb-1">Password *</label>
            <input
              type="password"
              required
              placeholder="••••••••"
              value={password}
              onChange={e => setPassword(e.target.value)}
              className="w-full px-3.5 py-2.5 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-hidden"
            />
          </div>

          <button
            type="submit"
            className="w-full py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl shadow-md transition-colors cursor-pointer text-xs sm:text-sm"
          >
            {authModalMode === 'login' ? 'Sign In Securely' : 'Create Account'}
          </button>
        </form>

        {/* Toggle Mode */}
        <div className="mt-4 pt-4 border-t border-slate-100 text-center text-xs text-slate-500">
          {authModalMode === 'login' ? (
            <div>
              Don't have an account?{' '}
              <button
                onClick={() => openAuthModal('register')}
                className="text-indigo-600 font-bold hover:underline"
              >
                Register Now
              </button>
            </div>
          ) : (
            <div>
              Already have an account?{' '}
              <button
                onClick={() => openAuthModal('login')}
                className="text-indigo-600 font-bold hover:underline"
              >
                Sign In
              </button>
            </div>
          )}
        </div>

      </div>
    </div>
  );
};
