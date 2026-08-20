import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { SupportRequest, RequestStatus, Mentor } from '../../types';
import { 
  ShieldCheck, 
  Users, 
  Inbox, 
  DollarSign, 
  Clock, 
  CheckCircle2, 
  AlertCircle, 
  Search, 
  Filter, 
  ExternalLink, 
  Edit3, 
  UserPlus, 
  Trash2, 
  Plus, 
  Send, 
  MessageSquare,
  Sparkles,
  Paperclip
} from 'lucide-react';

export const AdminDashboard: React.FC = () => {
  const { 
    requests, 
    mentors, 
    updateRequestStatus, 
    assignMentorToRequest, 
    setRequestPrice, 
    verifyPayment, 
    updateMentorStatus,
    resetToDemoData
  } = useApp();

  const [activeTab, setActiveTab] = useState<'requests' | 'mentors' | 'payments'>('requests');
  const [selectedRequest, setSelectedRequest] = useState<SupportRequest | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState<string>('All');

  // Edit Drawer States
  const [targetStatus, setTargetStatus] = useState<RequestStatus>('submitted');
  const [selectedMentorId, setSelectedMentorId] = useState<string>('');
  const [customPrice, setCustomPrice] = useState<number>(1000);
  const [adminNoteInput, setAdminNoteInput] = useState<string>('');

  // Top Metrics
  const totalStudents = 142;
  const newRequests = requests.filter(r => r.status === 'submitted').length;
  const activeOrders = requests.filter(r => ['under_review', 'contacted', 'confirmed', 'payment_pending', 'in_progress'].includes(r.status)).length;
  const completedOrders = requests.filter(r => ['completed', 'feedback_given'].includes(r.status)).length;
  const totalRevenue = requests
    .filter(r => r.paymentStatus === 'paid')
    .reduce((sum, r) => sum + (r.agreedPrice || 1200), 245000);
  const pendingPayments = requests.filter(r => r.paymentStatus === 'pending_verification').length;

  const filteredRequests = requests.filter(r => {
    const matchesSearch = 
      r.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
      r.studentName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      r.university.toLowerCase().includes(searchQuery.toLowerCase()) ||
      r.courseName.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesStatus = statusFilter === 'All' || r.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const handleSelectRequest = (req: SupportRequest) => {
    setSelectedRequest(req);
    setTargetStatus(req.status);
    setSelectedMentorId(req.assignedMentorId || (mentors[0]?.id || ''));
    setCustomPrice(req.agreedPrice || 1000);
    setAdminNoteInput('');
  };

  const handleSaveRequestChanges = () => {
    if (!selectedRequest) return;

    // Update status & note
    updateRequestStatus(selectedRequest.id, targetStatus, adminNoteInput ? `Admin Note: ${adminNoteInput}` : undefined);

    // Update Mentor if changed
    if (selectedMentorId) {
      const m = mentors.find(item => item.id === selectedMentorId);
      if (m) {
        assignMentorToRequest(selectedRequest.id, m.id, m.name);
      }
    }

    // Update Price if changed
    if (customPrice) {
      setRequestPrice(selectedRequest.id, customPrice);
    }

    alert(`Request #${selectedRequest.id} successfully updated!`);
    setSelectedRequest(null);
  };

  return (
    <div className="py-8 md:py-12 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Admin Header */}
        <div className="bg-slate-900 text-white rounded-3xl p-6 sm:p-8 shadow-xl mb-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-purple-600 to-indigo-600 text-white flex items-center justify-center text-2xl font-black shadow-md">
                <ShieldCheck className="w-8 h-8" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h1 className="text-xl sm:text-2xl font-black">
                    EduSolve Admin Operations Center
                  </h1>
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-purple-500/20 text-purple-300 border border-purple-500/30">
                    Live Operations
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-slate-400 mt-1">
                  Manage incoming student requests, mentor assignments, pricing & bKash payment verifications.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={resetToDemoData}
                className="px-3.5 py-2 bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold rounded-xl border border-slate-700 transition-colors"
                title="Reset local changes back to default demo state"
              >
                Reset Demo Data
              </button>
            </div>
          </div>

          {/* Top 6 Executive Metrics */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mt-8 pt-6 border-t border-slate-800">
            <div className="p-3.5 bg-slate-800/60 rounded-2xl border border-slate-700/60">
              <div className="text-[10px] font-bold uppercase text-slate-400">Total Students</div>
              <div className="text-xl font-black text-white mt-1">{totalStudents}</div>
              <div className="text-[10px] text-indigo-400">Registered users</div>
            </div>

            <div className="p-3.5 bg-slate-800/60 rounded-2xl border border-slate-700/60">
              <div className="text-[10px] font-bold uppercase text-slate-400">New Requests</div>
              <div className="text-xl font-black text-amber-400 mt-1">{newRequests}</div>
              <div className="text-[10px] text-amber-300">Needs triage</div>
            </div>

            <div className="p-3.5 bg-slate-800/60 rounded-2xl border border-slate-700/60">
              <div className="text-[10px] font-bold uppercase text-slate-400">Active Orders</div>
              <div className="text-xl font-black text-sky-400 mt-1">{activeOrders}</div>
              <div className="text-[10px] text-sky-300">In pipeline</div>
            </div>

            <div className="p-3.5 bg-slate-800/60 rounded-2xl border border-slate-700/60">
              <div className="text-[10px] font-bold uppercase text-slate-400">Completed Orders</div>
              <div className="text-xl font-black text-emerald-400 mt-1">{completedOrders}</div>
              <div className="text-[10px] text-emerald-300">Successful defenses</div>
            </div>

            <div className="p-3.5 bg-slate-800/60 rounded-2xl border border-slate-700/60">
              <div className="text-[10px] font-bold uppercase text-slate-400">Pending Payments</div>
              <div className="text-xl font-black text-rose-400 mt-1">{pendingPayments}</div>
              <div className="text-[10px] text-rose-300">TrxID verification</div>
            </div>

            <div className="p-3.5 bg-slate-800/60 rounded-2xl border border-slate-700/60">
              <div className="text-[10px] font-bold uppercase text-slate-400">Total Revenue</div>
              <div className="text-xl font-black text-purple-300 mt-1">৳{(totalRevenue / 1000).toFixed(0)}k</div>
              <div className="text-[10px] text-purple-400">BDT Gross Volume</div>
            </div>
          </div>
        </div>

        {/* Tab Controls */}
        <div className="flex items-center gap-2 border-b border-slate-200 mb-6">
          <button
            onClick={() => setActiveTab('requests')}
            className={`px-4 py-2.5 text-xs font-bold rounded-xl transition-all ${
              activeTab === 'requests' ? 'bg-purple-700 text-white shadow-xs' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            All Student Requests ({requests.length})
          </button>
          <button
            onClick={() => setActiveTab('mentors')}
            className={`px-4 py-2.5 text-xs font-bold rounded-xl transition-all ${
              activeTab === 'mentors' ? 'bg-purple-700 text-white shadow-xs' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Mentors & Applications ({mentors.length})
          </button>
          <button
            onClick={() => setActiveTab('payments')}
            className={`px-4 py-2.5 text-xs font-bold rounded-xl transition-all ${
              activeTab === 'payments' ? 'bg-purple-700 text-white shadow-xs' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Payment Verification Queue ({pendingPayments})
          </button>
        </div>

        {/* ================= TAB 1: REQUEST MANAGEMENT ================= */}
        {activeTab === 'requests' && (
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-xs space-y-6">
            
            {/* Search & Filter bar */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="relative w-full sm:w-80">
                <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Search by Request ID, Student, University, Course..."
                  value={searchQuery}
                  onChange={e => setSearchQuery(e.target.value)}
                  className="w-full pl-9.5 pr-4 py-2 text-xs border border-slate-300 rounded-xl focus:ring-2 focus:ring-purple-500"
                />
              </div>

              <div className="flex items-center gap-2 w-full sm:w-auto overflow-x-auto">
                <span className="text-xs font-bold text-slate-500 shrink-0">Filter Status:</span>
                <select
                  value={statusFilter}
                  onChange={e => setStatusFilter(e.target.value)}
                  className="px-3 py-2 text-xs font-semibold border border-slate-300 rounded-xl bg-white focus:ring-2 focus:ring-purple-500"
                >
                  <option value="All">All Statuses</option>
                  <option value="submitted">Submitted</option>
                  <option value="under_review">Under Review</option>
                  <option value="contacted">Contacted</option>
                  <option value="confirmed">Confirmed</option>
                  <option value="payment_pending">Payment Pending</option>
                  <option value="in_progress">In Progress</option>
                  <option value="completed">Completed</option>
                </select>
              </div>
            </div>

            {/* Table of Requests */}
            <div className="overflow-x-auto">
              <table className="w-full text-xs text-left">
                <thead className="bg-slate-50 text-slate-500 font-bold border-b border-slate-200">
                  <tr>
                    <th className="p-3">Request ID</th>
                    <th className="p-3">Student</th>
                    <th className="p-3">University / Dept</th>
                    <th className="p-3">Service & Course</th>
                    <th className="p-3">Deadline</th>
                    <th className="p-3">Mentor</th>
                    <th className="p-3">Price</th>
                    <th className="p-3">Status</th>
                    <th className="p-3 text-right">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {filteredRequests.map(req => (
                    <tr key={req.id} className="hover:bg-slate-50">
                      <td className="p-3 font-mono font-bold text-purple-700">{req.id}</td>
                      <td className="p-3">
                        <div className="font-bold text-slate-900">{req.studentName}</div>
                        <div className="text-[11px] text-slate-500">{req.studentPhone}</div>
                      </td>
                      <td className="p-3">
                        <div className="font-semibold text-slate-800 truncate max-w-[140px]">{req.university}</div>
                        <div className="text-[10px] text-slate-500">{req.department}</div>
                      </td>
                      <td className="p-3">
                        <div className="font-bold text-indigo-700">{req.serviceTitle}</div>
                        <div className="text-[11px] text-slate-600 truncate max-w-[150px]">{req.courseName}</div>
                      </td>
                      <td className="p-3 font-semibold text-rose-600">{req.deadline}</td>
                      <td className="p-3 text-slate-700">
                        {req.assignedMentorName ? req.assignedMentorName.split(' ')[0] : <span className="text-amber-600 font-bold">Unassigned</span>}
                      </td>
                      <td className="p-3 font-bold text-emerald-700">
                        {req.agreedPrice ? `৳${req.agreedPrice}` : <span className="text-slate-400 font-normal">{req.expectedBudget}</span>}
                      </td>
                      <td className="p-3">
                        <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-slate-100 text-slate-800 uppercase">
                          {req.status.replace('_', ' ')}
                        </span>
                      </td>
                      <td className="p-3 text-right">
                        <button
                          onClick={() => handleSelectRequest(req)}
                          className="px-3 py-1.5 bg-purple-100 hover:bg-purple-200 text-purple-800 font-bold rounded-lg transition-colors cursor-pointer"
                        >
                          Manage ✏️
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

          </div>
        )}

        {/* ================= TAB 2: MENTOR APPLICATIONS ================= */}
        {activeTab === 'mentors' && (
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-xs space-y-6">
            <h3 className="text-base font-bold text-slate-900">Registered Mentors & Verification Queue</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {mentors.map(mentor => (
                <div key={mentor.id} className="p-5 rounded-2xl border border-slate-200 bg-slate-50/60 space-y-3 text-xs">
                  <div className="flex items-start justify-between">
                    <div>
                      <h4 className="font-bold text-sm text-slate-900">{mentor.name}</h4>
                      <p className="text-slate-500">{mentor.qualification} • {mentor.university}</p>
                    </div>
                    <span
                      className={`px-2.5 py-1 rounded-full text-[10px] font-bold uppercase ${
                        mentor.verificationStatus === 'approved'
                          ? 'bg-emerald-100 text-emerald-800'
                          : mentor.verificationStatus === 'pending'
                          ? 'bg-amber-100 text-amber-800'
                          : 'bg-rose-100 text-rose-800'
                      }`}
                    >
                      {mentor.verificationStatus}
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-1">
                    {mentor.expertise.map((exp, i) => (
                      <span key={i} className="px-2 py-0.5 bg-white rounded border border-slate-200 text-[10px] text-slate-700">
                        {exp}
                      </span>
                    ))}
                  </div>

                  <div className="text-slate-600">
                    <strong>Experience:</strong> {mentor.experience}
                  </div>

                  <div className="pt-2 border-t border-slate-200 flex items-center justify-between">
                    <span className="font-bold text-emerald-700">{mentor.expectedRate}</span>
                    <div className="flex gap-2">
                      {mentor.verificationStatus !== 'approved' && (
                        <button
                          onClick={() => updateMentorStatus(mentor.id, 'approved')}
                          className="px-3 py-1 bg-emerald-600 text-white font-bold rounded-lg hover:bg-emerald-700"
                        >
                          Approve Mentor
                        </button>
                      )}
                      {mentor.verificationStatus !== 'rejected' && (
                        <button
                          onClick={() => updateMentorStatus(mentor.id, 'rejected')}
                          className="px-3 py-1 bg-rose-100 text-rose-700 font-bold rounded-lg hover:bg-rose-200"
                        >
                          Reject
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ================= TAB 3: PAYMENT VERIFICATION ================= */}
        {activeTab === 'payments' && (
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-xs space-y-6">
            <h3 className="text-base font-bold text-slate-900">Pending bKash / Nagad Transaction Verifications</h3>

            <div className="overflow-x-auto">
              <table className="w-full text-xs text-left">
                <thead className="bg-slate-50 text-slate-500 font-bold border-b border-slate-200">
                  <tr>
                    <th className="p-3">Request ID</th>
                    <th className="p-3">Student Name</th>
                    <th className="p-3">Method</th>
                    <th className="p-3">Sender Number</th>
                    <th className="p-3">TrxID</th>
                    <th className="p-3">Amount</th>
                    <th className="p-3 text-right">Verification Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {requests.filter(r => r.paymentDetails && r.paymentDetails.status === 'pending_verification').map(req => (
                    <tr key={req.id} className="hover:bg-slate-50">
                      <td className="p-3 font-mono font-bold text-purple-700">{req.id}</td>
                      <td className="p-3 font-bold text-slate-900">{req.studentName}</td>
                      <td className="p-3 font-semibold">{req.paymentDetails?.method}</td>
                      <td className="p-3 font-mono text-slate-700">{req.paymentDetails?.senderNumber}</td>
                      <td className="p-3 font-mono font-bold text-emerald-700">{req.paymentDetails?.transactionId}</td>
                      <td className="p-3 font-bold text-slate-900">৳{req.agreedPrice || req.paymentDetails?.amount}</td>
                      <td className="p-3 text-right space-x-2">
                        <button
                          onClick={() => verifyPayment(req.id, true)}
                          className="px-3 py-1 bg-emerald-600 text-white font-bold rounded-lg hover:bg-emerald-700"
                        >
                          Verify & Approve
                        </button>
                        <button
                          onClick={() => verifyPayment(req.id, false)}
                          className="px-3 py-1 bg-rose-100 text-rose-700 font-bold rounded-lg hover:bg-rose-200"
                        >
                          Reject TrxID
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

      </div>

      {/* ================= ADMIN REQUEST EDIT DRAWER MODAL ================= */}
      {selectedRequest && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in overflow-y-auto">
          <div className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl border border-slate-200 max-h-[90vh] overflow-y-auto space-y-6">
            
            {/* Header */}
            <div className="flex justify-between items-center pb-4 border-b border-slate-100">
              <div>
                <span className="text-xs font-mono font-bold text-purple-700">{selectedRequest.id}</span>
                <h3 className="text-lg font-bold text-slate-900">Manage Request</h3>
                <p className="text-xs text-slate-500">{selectedRequest.serviceTitle} • {selectedRequest.courseName}</p>
              </div>
              <button onClick={() => setSelectedRequest(null)} className="text-slate-400 hover:text-slate-700">✕</button>
            </div>

            {/* Student & Contact Profile */}
            <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 text-xs space-y-2">
              <div className="grid grid-cols-2 gap-2">
                <div><span className="text-slate-500">Student:</span> <strong>{selectedRequest.studentName}</strong></div>
                <div><span className="text-slate-500">Phone:</span> <strong>{selectedRequest.studentPhone}</strong></div>
                <div><span className="text-slate-500">WhatsApp:</span> <strong>{selectedRequest.studentWhatsApp}</strong></div>
                <div><span className="text-slate-500">University:</span> <strong>{selectedRequest.university}</strong></div>
                <div><span className="text-slate-500">Department:</span> <strong>{selectedRequest.department}</strong></div>
                <div><span className="text-slate-500">Deadline:</span> <strong className="text-rose-600">{selectedRequest.deadline}</strong></div>
              </div>

              {selectedRequest.studentFacebook && (
                <div className="pt-1">
                  <span className="text-slate-500">Facebook: </span>
                  <a href={selectedRequest.studentFacebook} target="_blank" rel="noreferrer" className="text-indigo-600 hover:underline">
                    {selectedRequest.studentFacebook}
                  </a>
                </div>
              )}

              {/* Direct WhatsApp button for Admin */}
              <div className="pt-2">
                <a
                  href={`https://wa.me/${selectedRequest.studentWhatsApp.replace(/[^0-9]/g, '')}?text=Hi%20${encodeURIComponent(selectedRequest.studentName)},%20this%20is%20EduSolve%20Operations%20regarding%20request%20%23${selectedRequest.id}.`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg font-semibold text-xs"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>Contact Student via WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Problem Details */}
            <div className="bg-white p-4 rounded-2xl border border-slate-200 text-xs space-y-1.5">
              <div className="font-bold text-slate-900 uppercase text-[10px] text-purple-700">Problem Description</div>
              <p className="text-slate-700 leading-relaxed">{selectedRequest.problemStatement}</p>
            </div>

            {/* Admin Controls */}
            <div className="space-y-4 text-xs">
              
              {/* 1. Change Status */}
              <div>
                <label className="block font-bold text-slate-700 mb-1">Pipeline Status</label>
                <select
                  value={targetStatus}
                  onChange={e => setTargetStatus(e.target.value as RequestStatus)}
                  className="w-full px-3 py-2 border border-slate-300 rounded-xl font-semibold bg-white"
                >
                  <option value="submitted">1. Submitted</option>
                  <option value="under_review">2. Under Review</option>
                  <option value="contacted">3. Contacted</option>
                  <option value="confirmed">4. Confirmed</option>
                  <option value="payment_pending">5. Payment Pending</option>
                  <option value="in_progress">6. In Progress</option>
                  <option value="completed">7. Completed</option>
                  <option value="feedback_given">8. Feedback Given</option>
                </select>
              </div>

              {/* 2. Assign Mentor */}
              <div>
                <label className="block font-bold text-slate-700 mb-1">Assign Academic Mentor</label>
                <select
                  value={selectedMentorId}
                  onChange={e => setSelectedMentorId(e.target.value)}
                  className="w-full px-3 py-2 border border-slate-300 rounded-xl font-semibold bg-white"
                >
                  <option value="">-- Select Verified Mentor --</option>
                  {mentors.map(m => (
                    <option key={m.id} value={m.id}>
                      {m.name} ({m.university} • {m.expertise.slice(0, 2).join(', ')})
                    </option>
                  ))}
                </select>
              </div>

              {/* 3. Set Price */}
              <div>
                <label className="block font-bold text-slate-700 mb-1">Set Agreed Price (৳ BDT)</label>
                <input
                  type="number"
                  value={customPrice}
                  onChange={e => setCustomPrice(Number(e.target.value))}
                  className="w-full px-3 py-2 border border-slate-300 rounded-xl font-bold text-slate-900"
                />
              </div>

              {/* 4. Add Coordination Note */}
              <div>
                <label className="block font-bold text-slate-700 mb-1">Add Admin Note / Coordination Update</label>
                <input
                  type="text"
                  placeholder="e.g. Discussed scope on WhatsApp, scheduled 1-on-1 Meet session for Friday 8PM..."
                  value={adminNoteInput}
                  onChange={e => setAdminNoteInput(e.target.value)}
                  className="w-full px-3 py-2 border border-slate-300 rounded-xl"
                />
              </div>

            </div>

            {/* Footer Buttons */}
            <div className="pt-4 border-t border-slate-200 flex items-center justify-end gap-3">
              <button
                onClick={() => setSelectedRequest(null)}
                className="px-4 py-2 border border-slate-200 text-slate-700 rounded-xl text-xs font-semibold"
              >
                Cancel
              </button>
              <button
                onClick={handleSaveRequestChanges}
                className="px-6 py-2 bg-purple-700 hover:bg-purple-800 text-white font-bold rounded-xl text-xs shadow-md"
              >
                Save & Update Request
              </button>
            </div>

          </div>
        </div>
      )}

    </div>
  );
};
