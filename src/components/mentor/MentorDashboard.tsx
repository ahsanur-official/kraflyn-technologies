import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { SupportRequest, Mentor } from '../../types';
import { 
  Briefcase, 
  CheckCircle2, 
  Clock, 
  DollarSign, 
  Star, 
  MessageSquare, 
  FileText, 
  Calendar, 
  ExternalLink, 
  UserCheck, 
  XCircle, 
  Check, 
  Send,
  AlertCircle
} from 'lucide-react';

export const MentorDashboard: React.FC = () => {
  const { 
    currentUser, 
    requests, 
    mentors, 
    updateRequestStatus, 
    reviews 
  } = useApp();

  const [filterTab, setFilterTab] = useState<'assigned' | 'completed' | 'profile'>('assigned');
  const [selectedReq, setSelectedReq] = useState<SupportRequest | null>(null);

  // Find mentor profile
  const currentMentor: Mentor | undefined = mentors.find(m => 
    m.email === currentUser?.email || 
    m.name.toLowerCase().includes(currentUser?.name.toLowerCase().split(' ')[0] || 'tanvir')
  ) || mentors[0];

  // Filter mentor's assigned requests
  const assignedRequests = requests.filter(r => 
    r.assignedMentorId === currentMentor.id || 
    r.assignedMentorName?.toLowerCase().includes(currentMentor.name.toLowerCase().split(' ')[0])
  );

  const activeAssigned = assignedRequests.filter(r => !['completed', 'feedback_given'].includes(r.status));
  const completedAssigned = assignedRequests.filter(r => ['completed', 'feedback_given'].includes(r.status));

  const handleMarkCompleted = (reqId: string) => {
    if (confirm('Mark this mentorship session as completed?')) {
      updateRequestStatus(reqId, 'completed', `Mentor ${currentMentor.name} marked session completed.`);
    }
  };

  const handleAcceptRequest = (reqId: string) => {
    updateRequestStatus(reqId, 'in_progress', `Mentor ${currentMentor.name} accepted the request.`);
  };

  return (
    <div className="py-8 md:py-12 bg-slate-50 min-h-screen">
      <div className="max-w-[1720px] w-full mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 2xl:px-20">
        
        {/* Mentor Header */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-xs mb-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-emerald-600 to-teal-800 text-white flex items-center justify-center text-2xl font-black shadow-md shadow-emerald-600/20">
                {currentMentor.name.charAt(0)}
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h1 className="text-xl sm:text-2xl font-black text-slate-900">
                    {currentMentor.name}
                  </h1>
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-emerald-100 text-emerald-800 flex items-center gap-1">
                    <UserCheck className="w-3 h-3" /> Verified Mentor
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-slate-500 mt-1">
                  {currentMentor.qualification} • {currentMentor.university}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <div className="px-3.5 py-2 rounded-xl bg-slate-100 text-xs font-semibold text-slate-700">
                Availability: <strong className="text-emerald-700">{currentMentor.availableTime}</strong>
              </div>
            </div>
          </div>

          {/* Mentor Top Metric Cards */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-8 pt-6 border-t border-slate-100">
            <div className="p-4 bg-emerald-50/50 rounded-2xl border border-emerald-100/80">
              <div className="text-[11px] font-bold uppercase tracking-wider text-emerald-700">Assigned Requests</div>
              <div className="text-2xl font-black text-emerald-950 mt-1">{activeAssigned.length || 1}</div>
              <div className="text-[10px] text-emerald-600 mt-0.5">Active students waiting</div>
            </div>

            <div className="p-4 bg-indigo-50/50 rounded-2xl border border-indigo-100/80">
              <div className="text-[11px] font-bold uppercase tracking-wider text-indigo-700">Completed Sessions</div>
              <div className="text-2xl font-black text-indigo-950 mt-1">{currentMentor.totalCompletedSessions || 84}</div>
              <div className="text-[10px] text-indigo-600 mt-0.5">Thesis & lab coaching</div>
            </div>

            <div className="p-4 bg-amber-50/50 rounded-2xl border border-amber-100/80">
              <div className="text-[11px] font-bold uppercase tracking-wider text-amber-700">Student Rating</div>
              <div className="text-2xl font-black text-amber-950 mt-1 flex items-center gap-1">
                <Star className="w-5 h-5 fill-amber-400 text-amber-400" />
                <span>{currentMentor.rating || 4.9}</span>
              </div>
              <div className="text-[10px] text-amber-600 mt-0.5">100% positive reviews</div>
            </div>

            <div className="p-4 bg-purple-50/50 rounded-2xl border border-purple-100/80">
              <div className="text-[11px] font-bold uppercase tracking-wider text-purple-700">Total Earnings</div>
              <div className="text-2xl font-black text-purple-950 mt-1">৳{(currentMentor.earnings || 68500).toLocaleString()}</div>
              <div className="text-[10px] text-purple-600 mt-0.5">Disbursed via bKash</div>
            </div>
          </div>
        </div>

        {/* Tab Controls */}
        <div className="flex items-center gap-2 border-b border-slate-200 mb-6">
          <button
            onClick={() => setFilterTab('assigned')}
            className={`px-4 py-2.5 text-xs font-bold rounded-xl transition-all ${
              filterTab === 'assigned' ? 'bg-emerald-600 text-white shadow-xs' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Assigned Student Requests ({activeAssigned.length})
          </button>
          <button
            onClick={() => setFilterTab('completed')}
            className={`px-4 py-2.5 text-xs font-bold rounded-xl transition-all ${
              filterTab === 'completed' ? 'bg-emerald-600 text-white shadow-xs' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Completed History ({completedAssigned.length})
          </button>
          <button
            onClick={() => setFilterTab('profile')}
            className={`px-4 py-2.5 text-xs font-bold rounded-xl transition-all ${
              filterTab === 'profile' ? 'bg-emerald-600 text-white shadow-xs' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Mentor Profile & Rates
          </button>
        </div>

        {/* ================= ASSIGNED REQUESTS LIST ================= */}
        {filterTab === 'assigned' && (
          <div className="space-y-4">
            {activeAssigned.length === 0 ? (
              <div className="bg-white rounded-3xl p-12 text-center border border-slate-200 text-slate-500">
                <CheckCircle2 className="w-12 h-12 text-emerald-500 mx-auto mb-3" />
                <h3 className="text-base font-bold text-slate-900">All caught up!</h3>
                <p className="text-xs mt-1">No pending active student requests assigned right now.</p>
              </div>
            ) : (
              activeAssigned.map(req => (
                <div
                  key={req.id}
                  className="bg-white rounded-3xl border border-slate-200/90 p-6 shadow-xs hover:border-emerald-500 transition-colors"
                >
                  {/* Top Bar */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-slate-100 gap-3">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-mono font-bold text-emerald-600">{req.id}</span>
                        <span className="text-slate-300">•</span>
                        <span className="text-xs font-bold text-slate-900">{req.serviceTitle}</span>
                        <span className="text-slate-300">•</span>
                        <span className="text-xs text-slate-500">{req.courseName}</span>
                      </div>
                      <div className="text-sm font-bold text-slate-900 mt-1">
                        Student: {req.studentName} ({req.university}, {req.department})
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="px-3 py-1 bg-amber-50 text-amber-700 rounded-full text-xs font-bold border border-amber-200">
                        Deadline: {req.deadline}
                      </span>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="py-4 space-y-3 text-xs">
                    <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200/80">
                      <span className="font-bold text-slate-900 block mb-1 text-[11px] uppercase tracking-wider text-emerald-700">
                        Student Problem Statement:
                      </span>
                      <p className="text-slate-700 leading-relaxed">{req.problemStatement}</p>
                      {req.expectedOutcome && (
                        <div className="mt-2 text-slate-600">
                          <strong>Expectations:</strong> {req.expectedOutcome}
                        </div>
                      )}
                    </div>

                    {/* Attachments */}
                    {req.attachments.length > 0 && (
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="font-bold text-slate-700">Attachments:</span>
                        {req.attachments.map(att => (
                          <span key={att.id} className="px-2.5 py-1 bg-indigo-50 text-indigo-700 rounded-lg font-medium flex items-center gap-1">
                            <FileText className="w-3.5 h-3.5" />
                            <span>{att.name} ({att.size})</span>
                          </span>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Mentor Actions Footer */}
                  <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
                    <div className="flex items-center gap-3">
                      <div>
                        <span className="text-slate-400">Preferred Contact:</span>{' '}
                        <strong className="text-slate-900">{req.preferredContact} ({req.preferredTime})</strong>
                      </div>
                      <div>
                        <span className="text-slate-400">Payout:</span>{' '}
                        <strong className="text-emerald-700 font-bold">৳{req.agreedPrice || 1200}</strong>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <a
                        href={`https://wa.me/${req.studentWhatsApp.replace(/[^0-9]/g, '')}?text=Hi%20${encodeURIComponent(req.studentName)},%20I%20am%20your%20EduSolve%20mentor%20${encodeURIComponent(currentMentor.name)}%20for%20${encodeURIComponent(req.serviceTitle)}.`}
                        target="_blank"
                        rel="noreferrer"
                        className="px-3.5 py-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl shadow-xs flex items-center gap-1.5"
                      >
                        <MessageSquare className="w-4 h-4" />
                        <span>Chat on WhatsApp</span>
                      </a>

                      <button
                        onClick={() => handleMarkCompleted(req.id)}
                        className="px-3.5 py-2 bg-slate-900 hover:bg-slate-800 text-white font-bold rounded-xl shadow-xs flex items-center gap-1.5 cursor-pointer"
                      >
                        <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                        <span>Mark Completed</span>
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        )}

        {/* ================= COMPLETED SESSIONS ================= */}
        {filterTab === 'completed' && (
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-xs space-y-4">
            <h3 className="text-base font-bold text-slate-900">Completed Mentorship Records</h3>
            
            <div className="overflow-x-auto">
              <table className="w-full text-xs text-left">
                <thead className="bg-slate-50 text-slate-500 font-bold border-b border-slate-200">
                  <tr>
                    <th className="p-3">Request ID</th>
                    <th className="p-3">Student</th>
                    <th className="p-3">Service</th>
                    <th className="p-3">Course</th>
                    <th className="p-3">Agreed Rate</th>
                    <th className="p-3">Rating</th>
                    <th className="p-3">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {completedAssigned.map(req => (
                    <tr key={req.id} className="hover:bg-slate-50">
                      <td className="p-3 font-mono font-bold text-emerald-600">{req.id}</td>
                      <td className="p-3 font-semibold text-slate-900">{req.studentName}</td>
                      <td className="p-3 text-slate-700">{req.serviceTitle}</td>
                      <td className="p-3 text-slate-600">{req.courseName}</td>
                      <td className="p-3 font-bold text-emerald-700">৳{req.agreedPrice || 800}</td>
                      <td className="p-3 font-bold text-amber-500">⭐ {req.rating || 5}/5</td>
                      <td className="p-3"><span className="px-2 py-0.5 bg-emerald-50 text-emerald-700 rounded-full font-bold border border-emerald-200">Completed</span></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* ================= MENTOR PROFILE TAB ================= */}
        {filterTab === 'profile' && (
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-xs max-w-2xl">
            <h3 className="text-base font-bold text-slate-900 mb-4">Mentor Profile & Rate Settings</h3>
            
            <div className="space-y-4 text-xs">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-slate-500 font-bold mb-1">Mentor Name</label>
                  <div className="p-2.5 bg-slate-50 rounded-xl border border-slate-200 font-semibold">{currentMentor.name}</div>
                </div>
                <div>
                  <label className="block text-slate-500 font-bold mb-1">Email</label>
                  <div className="p-2.5 bg-slate-50 rounded-xl border border-slate-200 font-semibold">{currentMentor.email}</div>
                </div>
              </div>

              <div>
                <label className="block text-slate-500 font-bold mb-1">Areas of Expertise</label>
                <div className="flex flex-wrap gap-1.5 p-2 bg-slate-50 rounded-xl border border-slate-200">
                  {currentMentor.expertise.map((exp, i) => (
                    <span key={i} className="px-2 py-1 bg-emerald-100 text-emerald-800 rounded-md font-semibold text-[11px]">
                      {exp}
                    </span>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-slate-500 font-bold mb-1">Expected Rate</label>
                  <div className="p-2.5 bg-slate-50 rounded-xl border border-slate-200 font-semibold">{currentMentor.expectedRate}</div>
                </div>
                <div>
                  <label className="block text-slate-500 font-bold mb-1">Available Hours</label>
                  <div className="p-2.5 bg-slate-50 rounded-xl border border-slate-200 font-semibold">{currentMentor.availableTime}</div>
                </div>
              </div>

              <div>
                <label className="block text-slate-500 font-bold mb-1">Mentor Bio</label>
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-slate-700 leading-relaxed">
                  {currentMentor.bio}
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
