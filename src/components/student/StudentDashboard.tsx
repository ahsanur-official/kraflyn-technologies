import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { SupportRequest, RequestStatus } from '../../types';
import { 
  BookMarked, 
  Clock, 
  CheckCircle2, 
  AlertCircle, 
  FileText, 
  DollarSign, 
  MessageSquare, 
  Star, 
  Send, 
  ExternalLink, 
  Download, 
  User, 
  Copy, 
  ShieldCheck, 
  Plus,
  Calendar,
  Layers,
  Sparkles,
  Paperclip
} from 'lucide-react';

const STATUS_STAGES: { key: RequestStatus; label: string }[] = [
  { key: 'submitted', label: 'Submitted' },
  { key: 'under_review', label: 'Under Review' },
  { key: 'contacted', label: 'Contacted' },
  { key: 'confirmed', label: 'Confirmed' },
  { key: 'payment_pending', label: 'Payment Pending' },
  { key: 'in_progress', label: 'In Progress' },
  { key: 'completed', label: 'Completed' },
  { key: 'feedback_given', label: 'Feedback' }
];

export const StudentDashboard: React.FC = () => {
  const { 
    currentUser, 
    requests, 
    openBookingModal, 
    submitPayment, 
    submitReview 
  } = useApp();

  const [activeTab, setActiveTab] = useState<'requests' | 'files' | 'payments' | 'profile'>('requests');
  const [selectedRequest, setSelectedRequest] = useState<SupportRequest | null>(null);
  
  // Payment Modal State
  const [paymentModalOpen, setPaymentModalOpen] = useState(false);
  const [paymentRequest, setPaymentRequest] = useState<SupportRequest | null>(null);
  const [paymentMethod, setPaymentMethod] = useState<'bKash' | 'Nagad' | 'Bank Transfer' | 'Card'>('bKash');
  const [trxId, setTrxId] = useState('');
  const [senderNum, setSenderNum] = useState('');
  const [copiedNumber, setCopiedNumber] = useState(false);

  // Review Modal State
  const [reviewModalOpen, setReviewModalOpen] = useState(false);
  const [reviewRequest, setReviewRequest] = useState<SupportRequest | null>(null);
  const [ratingStars, setRatingStars] = useState(5);
  const [reviewComment, setReviewComment] = useState('');

  // Filter student's requests
  const studentRequests = currentUser 
    ? requests.filter(r => r.studentEmail === currentUser.email || r.studentId === currentUser.id || r.studentName.toLowerCase().includes(currentUser.name.toLowerCase().split(' ')[0]))
    : requests;

  const activeRequests = studentRequests.filter(r => !['completed', 'feedback_given'].includes(r.status));
  const pendingRequests = studentRequests.filter(r => ['submitted', 'under_review', 'payment_pending'].includes(r.status));
  const completedRequests = studentRequests.filter(r => ['completed', 'feedback_given'].includes(r.status));
  
  const totalSpent = studentRequests
    .filter(r => r.paymentStatus === 'paid' && r.agreedPrice)
    .reduce((sum, r) => sum + (r.agreedPrice || 0), 4500);

  const handleOpenPayment = (req: SupportRequest) => {
    setPaymentRequest(req);
    setTrxId('');
    setSenderNum(req.studentPhone || '');
    setPaymentModalOpen(true);
  };

  const handleSubmitPayment = (e: React.FormEvent) => {
    e.preventDefault();
    if (!paymentRequest || !trxId || !senderNum) {
      alert('Please enter Transaction ID and Sender Number.');
      return;
    }

    submitPayment(paymentRequest.id, {
      amount: paymentRequest.agreedPrice || 500,
      method: paymentMethod,
      transactionId: trxId,
      senderNumber: senderNum
    });

    setPaymentModalOpen(false);
    alert('Payment submitted! Admin will verify within 15 minutes.');
  };

  const handleOpenReview = (req: SupportRequest) => {
    setReviewRequest(req);
    setRatingStars(5);
    setReviewComment('');
    setReviewModalOpen(true);
  };

  const handleSubmitReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!reviewRequest) return;
    submitReview(reviewRequest.id, ratingStars, reviewComment);
    setReviewModalOpen(false);
    alert('Thank you! Your review has been published.');
  };

  const copyMerchantNumber = (num: string) => {
    navigator.clipboard.writeText(num);
    setCopiedNumber(true);
    setTimeout(() => setCopiedNumber(false), 2000);
  };

  const getStatusBadge = (status: RequestStatus) => {
    switch (status) {
      case 'submitted':
        return <span className="px-2.5 py-1 rounded-full text-[11px] font-bold bg-slate-100 text-slate-700">Submitted</span>;
      case 'under_review':
        return <span className="px-2.5 py-1 rounded-full text-[11px] font-bold bg-amber-50 text-amber-700 border border-amber-200">Under Review</span>;
      case 'contacted':
        return <span className="px-2.5 py-1 rounded-full text-[11px] font-bold bg-sky-50 text-sky-700 border border-sky-200">Contacted</span>;
      case 'confirmed':
        return <span className="px-2.5 py-1 rounded-full text-[11px] font-bold bg-indigo-50 text-indigo-700 border border-indigo-200">Confirmed</span>;
      case 'payment_pending':
        return <span className="px-2.5 py-1 rounded-full text-[11px] font-bold bg-orange-50 text-orange-700 border border-orange-200">Payment Pending</span>;
      case 'in_progress':
        return <span className="px-2.5 py-1 rounded-full text-[11px] font-bold bg-blue-50 text-blue-700 border border-blue-200 animate-pulse">In Progress</span>;
      case 'completed':
        return <span className="px-2.5 py-1 rounded-full text-[11px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">Completed</span>;
      case 'feedback_given':
        return <span className="px-2.5 py-1 rounded-full text-[11px] font-bold bg-purple-50 text-purple-700 border border-purple-200">Reviewed ⭐</span>;
      default:
        return <span className="px-2.5 py-1 rounded-full text-[11px] font-bold bg-slate-100 text-slate-700">{status}</span>;
    }
  };

  const getStepIndex = (status: RequestStatus) => {
    return STATUS_STAGES.findIndex(s => s.key === status);
  };

  return (
    <div className="py-8 md:py-10 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        
        {/* Header Section */}
        <div className="flex flex-col sm:flex-row justify-between sm:items-end gap-4">
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold text-slate-900">
              Welcome back, {currentUser ? currentUser.name.split(' ')[0] : 'Ehsan'} 👋
            </h1>
            <p className="text-slate-500 text-sm mt-1">
              You have {activeRequests.length || 2} requests awaiting mentor confirmation today.
            </p>
          </div>
          <button
            onClick={() => openBookingModal()}
            className="bg-indigo-600 text-white px-5 py-2.5 rounded-lg font-semibold text-sm hover:bg-indigo-700 transition-all shadow-sm shadow-indigo-200 flex items-center justify-center gap-2 cursor-pointer self-start sm:self-auto"
          >
            <Plus className="w-4 h-4" />
            <span>+ New Support Request</span>
          </button>
        </div>

        {/* Stats Row (Professional Polish 4-Card Grid) */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 shrink-0">
          <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
            <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Active Requests</p>
            <p className="text-2xl font-bold mt-1 text-indigo-600">
              {String(activeRequests.length || 2).padStart(2, '0')}
            </p>
          </div>

          <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
            <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Pending Feedback</p>
            <p className="text-2xl font-bold mt-1 text-amber-500">
              {String(pendingRequests.length || 1).padStart(2, '0')}
            </p>
          </div>

          <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
            <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Completed</p>
            <p className="text-2xl font-bold mt-1 text-emerald-600">
              {String(completedRequests.length || 7).padStart(2, '0')}
            </p>
          </div>

          <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
            <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Total Investment</p>
            <p className="text-2xl font-bold mt-1 text-slate-900">৳{totalSpent.toLocaleString()}</p>
          </div>
        </div>

        {/* Dashboard Subnav Tabs */}
        <div className="flex items-center gap-2 border-b border-slate-200 overflow-x-auto pb-1 scrollbar-none">
          {[
            { key: 'requests', label: 'Dashboard & Tracker', icon: Layers },
            { key: 'files', label: 'Uploaded Files', icon: Paperclip },
            { key: 'payments', label: 'Payment History', icon: DollarSign },
            { key: 'profile', label: 'Student Profile', icon: User }
          ].map(tab => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.key;
            return (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key as any)}
                className={`flex items-center gap-2 px-4 py-2 text-xs font-semibold rounded-lg transition-all whitespace-nowrap cursor-pointer ${
                  isActive
                    ? 'bg-white text-indigo-600 shadow-sm border border-slate-200'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* ================= TAB 1: MAIN DASHBOARD & REQUESTS ================= */}
        {activeTab === 'requests' && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            
            {/* Left Column: Problem Quick Select + Requests Table & Pipeline */}
            <div className="lg:col-span-2 flex flex-col gap-6">
              
              {/* Problem Quick Select (Indigo-900 Professional Card) */}
              <div className="bg-indigo-900 text-white p-6 rounded-2xl shadow-lg relative overflow-hidden">
                <div className="relative z-10">
                  <h2 className="text-lg font-bold mb-4">What are you struggling with today?</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <button
                      onClick={() => openBookingModal(undefined, "I don't know how to start my thesis methodology")}
                      className="bg-white/10 hover:bg-white/20 text-left p-3 rounded-lg border border-white/10 text-sm transition-all cursor-pointer"
                    >
                      "I don't know how to start my thesis"
                    </button>
                    <button
                      onClick={() => openBookingModal(undefined, "I have a viva tomorrow morning and need emergency coaching")}
                      className="bg-white/10 hover:bg-white/20 text-left p-3 rounded-lg border border-white/10 text-sm transition-all cursor-pointer"
                    >
                      "I have a viva tomorrow morning"
                    </button>
                    <button
                      onClick={() => openBookingModal(undefined, "My project code is stuck with compiler and runtime errors")}
                      className="bg-white/10 hover:bg-white/20 text-left p-3 rounded-lg border border-white/10 text-sm transition-all cursor-pointer"
                    >
                      "My project code is stuck with errors"
                    </button>
                    <button
                      onClick={() => openBookingModal(undefined, "I need urgent help with a lab report formatting & graph analysis")}
                      className="bg-white/10 hover:bg-white/20 text-left p-3 rounded-lg border border-white/10 text-sm transition-all cursor-pointer"
                    >
                      "I need help with a lab report"
                    </button>
                  </div>
                </div>
                <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/20 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none"></div>
              </div>

              {/* Recent Requests Table */}
              <div className="bg-white rounded-xl border border-slate-200 shadow-sm flex flex-col">
                <div className="px-6 py-4 border-b border-slate-100 flex justify-between items-center">
                  <h3 className="font-bold text-slate-800 text-sm">Recent Requests</h3>
                  <button 
                    onClick={() => openBookingModal()}
                    className="text-indigo-600 text-xs font-semibold hover:underline cursor-pointer"
                  >
                    + New Request
                  </button>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full text-left">
                    <thead className="bg-slate-50 text-slate-400 text-[10px] uppercase font-bold sticky top-0 border-b border-slate-100">
                      <tr>
                        <th className="px-6 py-3">ID</th>
                        <th className="px-6 py-3">Service</th>
                        <th className="px-6 py-3">Deadline</th>
                        <th className="px-6 py-3 text-right">Status</th>
                      </tr>
                    </thead>
                    <tbody className="text-sm divide-y divide-slate-100">
                      {studentRequests.map(req => {
                        const isSelected = selectedRequest?.id === req.id;
                        return (
                          <React.Fragment key={req.id}>
                            <tr 
                              onClick={() => setSelectedRequest(isSelected ? null : req)}
                              className={`hover:bg-slate-50 cursor-pointer transition-colors ${
                                isSelected ? 'bg-indigo-50/40' : ''
                              }`}
                            >
                              <td className="px-6 py-4 font-mono text-xs text-slate-500 font-semibold">{req.id}</td>
                              <td className="px-6 py-4 font-medium text-slate-900">
                                <div>{req.serviceTitle}</div>
                                <div className="text-xs text-slate-500 font-normal">{req.courseName}</div>
                              </td>
                              <td className="px-6 py-4 text-slate-500 text-xs">{req.deadline}</td>
                              <td className="px-6 py-4 text-right">
                                {req.status === 'completed' || req.status === 'feedback_given' ? (
                                  <span className="bg-emerald-50 text-emerald-700 px-2.5 py-1 rounded-full text-xs font-medium border border-emerald-100">
                                    Completed
                                  </span>
                                ) : req.status === 'in_progress' ? (
                                  <span className="bg-indigo-50 text-indigo-700 px-2.5 py-1 rounded-full text-xs font-medium border border-indigo-100">
                                    In Progress
                                  </span>
                                ) : req.status === 'payment_pending' ? (
                                  <span className="bg-amber-50 text-amber-700 px-2.5 py-1 rounded-full text-xs font-medium border border-amber-100">
                                    Payment Pending
                                  </span>
                                ) : (
                                  <span className="bg-slate-100 text-slate-700 px-2.5 py-1 rounded-full text-xs font-medium border border-slate-200">
                                    {req.status.replace('_', ' ')}
                                  </span>
                                )}
                              </td>
                            </tr>

                            {/* Expandable Lifecycle and Details */}
                            {isSelected && (
                              <tr>
                                <td colSpan={4} className="p-0">
                                  <div className="bg-slate-50/90 p-6 border-y border-indigo-100 text-xs space-y-4">
                                    
                                    {/* 8-Stage Progress Pipeline */}
                                    <div>
                                      <div className="text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-3">
                                        Live Mentorship Pipeline
                                      </div>
                                      <div className="overflow-x-auto pb-2">
                                        <div className="flex items-center justify-between min-w-[580px] relative">
                                          <div className="absolute top-3.5 left-4 right-4 h-1 bg-slate-200 z-0"></div>
                                          <div 
                                            className="absolute top-3.5 left-4 h-1 bg-indigo-600 transition-all duration-500 z-0"
                                            style={{ width: `${(Math.max(0, getStepIndex(req.status)) / (STATUS_STAGES.length - 1)) * 100}%` }}
                                          ></div>

                                          {STATUS_STAGES.map((stage, idx) => {
                                            const currentStageIdx = getStepIndex(req.status);
                                            const isDone = idx < currentStageIdx;
                                            const isCurrent = idx === currentStageIdx;
                                            return (
                                              <div key={stage.key} className="flex flex-col items-center relative z-10 text-center">
                                                <div
                                                  className={`w-7 h-7 rounded-full flex items-center justify-center font-bold text-xs transition-all ${
                                                    isCurrent
                                                      ? 'bg-indigo-600 text-white ring-4 ring-indigo-100 scale-110 shadow-sm'
                                                      : isDone
                                                      ? 'bg-emerald-600 text-white'
                                                      : 'bg-white border-2 border-slate-300 text-slate-400'
                                                  }`}
                                                >
                                                  {isDone ? <CheckCircle2 className="w-4 h-4" /> : idx + 1}
                                                </div>
                                                <span
                                                  className={`text-[10px] mt-1.5 font-medium max-w-[70px] leading-tight ${
                                                    isCurrent
                                                      ? 'text-indigo-600 font-bold'
                                                      : isDone
                                                      ? 'text-emerald-700'
                                                      : 'text-slate-400'
                                                  }`}
                                                >
                                                  {stage.label}
                                                </span>
                                              </div>
                                            );
                                          })}
                                        </div>
                                      </div>
                                    </div>

                                    {/* Problem details */}
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                                      <div className="bg-white p-4 rounded-xl border border-slate-200 space-y-2">
                                        <div className="font-bold text-indigo-700 uppercase text-[10px] tracking-wider">
                                          Problem Statement
                                        </div>
                                        <p className="text-slate-700 leading-relaxed">
                                          {req.problemStatement}
                                        </p>
                                        {req.whatDoneSoFar && (
                                          <div className="pt-2 border-t border-slate-100 text-slate-600">
                                            <span className="font-semibold text-slate-800">Done so far: </span>{req.whatDoneSoFar}
                                          </div>
                                        )}
                                      </div>

                                      <div className="bg-white p-4 rounded-xl border border-slate-200 space-y-2">
                                        <div className="font-bold text-indigo-700 uppercase text-[10px] tracking-wider">
                                          Session Details
                                        </div>
                                        <div className="space-y-1 text-slate-700">
                                          <div><span className="text-slate-500">Assigned Mentor:</span> <strong>{req.assignedMentorName || 'Specialist being assigned...'}</strong></div>
                                          <div><span className="text-slate-500">Contact Method:</span> <strong>{req.preferredContact} ({req.preferredTime})</strong></div>
                                          <div><span className="text-slate-500">Price:</span> <strong className="text-emerald-600">{req.agreedPrice ? `৳${req.agreedPrice}` : 'In review'}</strong></div>
                                          <div><span className="text-slate-500">Payment:</span> <strong className="uppercase">{req.paymentStatus}</strong></div>
                                        </div>
                                      </div>
                                    </div>

                                    {/* Action Buttons */}
                                    <div className="pt-2 flex flex-wrap items-center justify-between gap-3">
                                      <div className="flex items-center gap-2">
                                        {req.status === 'payment_pending' && req.paymentStatus === 'unpaid' && (
                                          <button
                                            onClick={(e) => { e.stopPropagation(); handleOpenPayment(req); }}
                                            className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-lg shadow-sm flex items-center gap-1.5 cursor-pointer"
                                          >
                                            <DollarSign className="w-3.5 h-3.5" />
                                            <span>Pay ৳{req.agreedPrice || 500} via bKash/Nagad</span>
                                          </button>
                                        )}

                                        {req.status === 'completed' && (
                                          <button
                                            onClick={(e) => { e.stopPropagation(); handleOpenReview(req); }}
                                            className="px-4 py-2 bg-amber-500 hover:bg-amber-600 text-white font-bold rounded-lg shadow-sm flex items-center gap-1.5 cursor-pointer"
                                          >
                                            <Star className="w-3.5 h-3.5 fill-white" />
                                            <span>Leave Mentor Review</span>
                                          </button>
                                        )}
                                      </div>

                                      <a
                                        href={`https://wa.me/8801712345678?text=Hi%20EduSolve,%20inquiring%20about%20Request%20%23${req.id}`}
                                        target="_blank"
                                        rel="noreferrer"
                                        onClick={(e) => e.stopPropagation()}
                                        className="px-3.5 py-2 bg-white hover:bg-slate-100 text-slate-700 border border-slate-200 font-semibold rounded-lg flex items-center gap-1.5"
                                      >
                                        <MessageSquare className="w-3.5 h-3.5 text-emerald-600" />
                                        <span>WhatsApp Coordinator</span>
                                      </a>
                                    </div>

                                  </div>
                                </td>
                              </tr>
                            )}
                          </React.Fragment>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>

            </div>

            {/* Right Column: Assigned Mentors + Upcoming Deadlines (Dark Widget) */}
            <div className="flex flex-col gap-6">
              
              {/* Assigned Mentors Card */}
              <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                <h3 className="font-bold text-slate-800 mb-4 text-sm">Assigned Mentors</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-4 pb-4 border-b border-slate-100">
                    <div className="w-12 h-12 rounded-lg bg-indigo-100 flex items-center justify-center text-indigo-700 font-bold">
                      RA
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-bold text-slate-900">Rakin Ahmed</p>
                      <p className="text-xs text-slate-500">Thesis Specialist</p>
                    </div>
                    <a
                      href="https://wa.me/8801712345678?text=Hi%20Rakin%20Ahmed,%20I%20have%20a%20question%20regarding%20my%20thesis."
                      target="_blank"
                      rel="noreferrer"
                      className="bg-slate-100 p-2 rounded-lg text-slate-600 hover:bg-slate-200 transition-colors"
                      title="Chat on WhatsApp"
                    >
                      <MessageSquare className="w-4 h-4 text-indigo-600" />
                    </a>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-lg bg-emerald-100 flex items-center justify-center text-emerald-700 font-bold">
                      SF
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-bold text-slate-900">Samiha Farin</p>
                      <p className="text-xs text-slate-500">Lab Guidance</p>
                    </div>
                    <a
                      href="https://wa.me/8801712345678?text=Hi%20Samiha%20Farin,%20I%20need%20help%20with%20my%20lab%20code."
                      target="_blank"
                      rel="noreferrer"
                      className="bg-slate-100 p-2 rounded-lg text-slate-600 hover:bg-slate-200 transition-colors"
                      title="Chat on WhatsApp"
                    >
                      <MessageSquare className="w-4 h-4 text-emerald-600" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Upcoming Deadlines (Dark Widget) */}
              <div className="bg-slate-900 text-white p-6 rounded-xl shadow-md">
                <h3 className="font-bold mb-4 flex items-center gap-2 text-sm">
                  <span className="w-2 h-2 bg-rose-500 rounded-full animate-pulse"></span>
                  Upcoming Deadlines
                </h3>
                
                <div className="space-y-4 text-xs">
                  <div className="border-l-2 border-indigo-500 pl-4 py-1">
                    <p className="text-slate-400 font-medium">In 3 days</p>
                    <p className="text-sm font-semibold text-white">Literature Review Draft</p>
                  </div>
                  <div className="border-l-2 border-slate-700 pl-4 py-1 opacity-75">
                    <p className="text-slate-400 font-medium">In 8 days</p>
                    <p className="text-sm font-semibold text-slate-200">Thesis Methodology V1</p>
                  </div>
                  <div className="border-l-2 border-slate-700 pl-4 py-1 opacity-75">
                    <p className="text-slate-400 font-medium">In 12 days</p>
                    <p className="text-sm font-semibold text-slate-200">Final Presentation</p>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-slate-800">
                  <p className="text-[10px] text-slate-400 mb-2 font-bold uppercase tracking-wider">Quick Connect</p>
                  <a
                    href="https://wa.me/8801712345678?text=Hi%20EduSolve,%20I%20need%20quick%20support%20from%20operations."
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-center gap-2.5 bg-[#25D366] text-white p-3 rounded-lg text-sm font-bold hover:brightness-110 transition-all shadow-sm"
                  >
                    <MessageSquare className="w-4 h-4 fill-white" />
                    <span>Chat with Operations</span>
                  </a>
                </div>
              </div>

            </div>

          </div>
        )}

        {/* ================= TAB 2: UPLOADED FILES ================= */}
        {activeTab === 'files' && (
          <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm">
            <h3 className="text-base font-bold text-slate-900 mb-1">My Academic Files & Drafts</h3>
            <p className="text-xs text-slate-500 mb-6">
              All files you uploaded with your support requests are protected with encrypted access.
            </p>

            <div className="overflow-x-auto">
              <table className="w-full text-xs text-left">
                <thead className="bg-slate-50 text-slate-500 font-bold border-b border-slate-200">
                  <tr>
                    <th className="p-3">File Name</th>
                    <th className="p-3">Request ID</th>
                    <th className="p-3">Type</th>
                    <th className="p-3">Size</th>
                    <th className="p-3">Upload Date</th>
                    <th className="p-3 text-right">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {studentRequests.flatMap(r => r.attachments.map(att => ({ ...att, reqId: r.id }))).map(file => (
                    <tr key={file.id} className="hover:bg-slate-50">
                      <td className="p-3 font-semibold text-slate-900 flex items-center gap-2">
                        <FileText className="w-4 h-4 text-indigo-600" />
                        <span>{file.name}</span>
                      </td>
                      <td className="p-3 font-mono text-indigo-600 font-bold">{file.reqId}</td>
                      <td className="p-3"><span className="px-2 py-0.5 bg-slate-100 rounded text-[10px] font-bold">{file.type}</span></td>
                      <td className="p-3 text-slate-500">{file.size}</td>
                      <td className="p-3 text-slate-500">{file.uploadedAt}</td>
                      <td className="p-3 text-right">
                        <button
                          onClick={() => alert(`Simulated downloading ${file.name}`)}
                          className="px-2.5 py-1 bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold rounded cursor-pointer"
                        >
                          Download
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* ================= TAB 3: PAYMENTS HISTORY ================= */}
        {activeTab === 'payments' && (
          <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm space-y-4">
            <div>
              <h3 className="text-base font-bold text-slate-900">Payment History & Verifications</h3>
              <p className="text-xs text-slate-500">
                Track your bKash, Nagad, or Bank transaction receipts.
              </p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-xs text-left">
                <thead className="bg-slate-50 text-slate-500 font-bold border-b border-slate-200">
                  <tr>
                    <th className="p-3">Request ID</th>
                    <th className="p-3">Service</th>
                    <th className="p-3">Amount</th>
                    <th className="p-3">Method</th>
                    <th className="p-3">Transaction ID</th>
                    <th className="p-3">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {studentRequests.filter(r => r.paymentDetails || r.paymentStatus === 'paid').map(r => (
                    <tr key={r.id} className="hover:bg-slate-50">
                      <td className="p-3 font-mono font-bold text-indigo-600">{r.id}</td>
                      <td className="p-3 text-slate-800">{r.serviceTitle}</td>
                      <td className="p-3 font-bold text-slate-900">৳{r.agreedPrice || r.paymentDetails?.amount || 500}</td>
                      <td className="p-3 font-semibold">{r.paymentDetails?.method || 'bKash'}</td>
                      <td className="p-3 font-mono text-slate-600">{r.paymentDetails?.transactionId || 'BK9A82D01F'}</td>
                      <td className="p-3">
                        <span className="px-2 py-0.5 bg-emerald-50 text-emerald-700 rounded-full font-bold border border-emerald-200">
                          {r.paymentDetails?.status === 'verified' ? 'Verified (Paid)' : r.paymentStatus}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* ================= TAB 4: PROFILE ================= */}
        {activeTab === 'profile' && (
          <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm max-w-2xl">
            <h3 className="text-base font-bold text-slate-900 mb-4">Student Profile & Settings</h3>
            
            <div className="space-y-4 text-xs">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-slate-500 font-bold mb-1">Full Name</label>
                  <div className="p-2.5 bg-slate-50 rounded-xl border border-slate-200 font-semibold">{currentUser?.name}</div>
                </div>
                <div>
                  <label className="block text-slate-500 font-bold mb-1">Email</label>
                  <div className="p-2.5 bg-slate-50 rounded-xl border border-slate-200 font-semibold">{currentUser?.email}</div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-slate-500 font-bold mb-1">Phone / WhatsApp</label>
                  <div className="p-2.5 bg-slate-50 rounded-xl border border-slate-200 font-semibold">{currentUser?.phone}</div>
                </div>
                <div>
                  <label className="block text-slate-500 font-bold mb-1">University</label>
                  <div className="p-2.5 bg-slate-50 rounded-xl border border-slate-200 font-semibold">{currentUser?.university}</div>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-3">
                <div>
                  <label className="block text-slate-500 font-bold mb-1">Department</label>
                  <div className="p-2.5 bg-slate-50 rounded-xl border border-slate-200 font-semibold">{currentUser?.department}</div>
                </div>
                <div>
                  <label className="block text-slate-500 font-bold mb-1">Student ID</label>
                  <div className="p-2.5 bg-slate-50 rounded-xl border border-slate-200 font-semibold">{currentUser?.studentId || 'CSE-2021-042'}</div>
                </div>
                <div>
                  <label className="block text-slate-500 font-bold mb-1">Batch</label>
                  <div className="p-2.5 bg-slate-50 rounded-xl border border-slate-200 font-semibold">{currentUser?.batch || 'Batch 18'}</div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Bottom Banner / Status Mini-Bar */}
        <div className="bg-white h-10 border border-slate-200 rounded-lg flex items-center justify-center px-4 text-[11px] text-slate-400 font-medium uppercase tracking-[0.2em]">
          EduSolve v1.2.0 • Academic Support Request ID: ES-20240820-0042
        </div>

      </div>

      {/* ================= PAYMENT MODAL ================= */}
      {paymentModalOpen && paymentRequest && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in">
          <div className="bg-white rounded-3xl max-w-md w-full p-6 sm:p-8 shadow-2xl border border-slate-200">
            <div className="flex justify-between items-center pb-3 border-b border-slate-100 mb-4">
              <div>
                <h3 className="text-base font-bold text-slate-900">Make Payment</h3>
                <p className="text-[11px] text-slate-500">Request #{paymentRequest.id}</p>
              </div>
              <button onClick={() => setPaymentModalOpen(false)} className="text-slate-400 hover:text-slate-700">✕</button>
            </div>

            <form onSubmit={handleSubmitPayment} className="space-y-4 text-xs">
              <div className="bg-indigo-50/70 p-3.5 rounded-2xl border border-indigo-100 flex items-center justify-between">
                <div>
                  <span className="text-[10px] text-indigo-700 uppercase font-bold block">Agreed Amount</span>
                  <span className="text-xl font-black text-indigo-950">৳{paymentRequest.agreedPrice || 500}</span>
                </div>
                <span className="text-[11px] font-semibold text-indigo-700 bg-white px-2.5 py-1 rounded-lg border border-indigo-200">
                  {paymentRequest.serviceTitle}
                </span>
              </div>

              {/* Payment Methods */}
              <div>
                <label className="block font-bold text-slate-700 mb-1.5">Select Payment Method</label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {(['bKash', 'Nagad', 'Bank Transfer', 'Card'] as const).map(m => (
                    <button
                      key={m}
                      type="button"
                      onClick={() => setPaymentMethod(m)}
                      className={`p-2 rounded-xl text-center font-bold border transition-all ${
                        paymentMethod === m
                          ? 'bg-indigo-600 text-white border-indigo-600 shadow-xs'
                          : 'bg-slate-50 text-slate-700 border-slate-200'
                      }`}
                    >
                      {m}
                    </button>
                  ))}
                </div>
              </div>

              {/* Merchant Account Details */}
              <div className="p-3.5 bg-slate-50 rounded-2xl border border-slate-200 space-y-2">
                <div className="text-[10px] font-bold uppercase text-slate-500">
                  Send Money / Merchant Payment To:
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <span className="font-bold text-slate-900 text-sm">01712-345678</span>
                    <span className="text-[10px] text-slate-500 block">Personal / Merchant ({paymentMethod})</span>
                  </div>
                  <button
                    type="button"
                    onClick={() => copyMerchantNumber('01712345678')}
                    className="px-2.5 py-1 bg-white hover:bg-slate-100 text-slate-700 border border-slate-300 rounded-lg text-[11px] font-semibold flex items-center gap-1"
                  >
                    <Copy className="w-3 h-3" />
                    <span>{copiedNumber ? 'Copied!' : 'Copy'}</span>
                  </button>
                </div>
              </div>

              <div>
                <label className="block font-bold text-slate-700 mb-1">Your Sender Mobile Number *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. 01712345678"
                  value={senderNum}
                  onChange={e => setSenderNum(e.target.value)}
                  className="w-full px-3 py-2 border border-slate-300 rounded-xl"
                />
              </div>

              <div>
                <label className="block font-bold text-slate-700 mb-1">Transaction ID (TrxID) *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. BK9A82D01F / NG771B902A"
                  value={trxId}
                  onChange={e => setTrxId(e.target.value)}
                  className="w-full px-3 py-2 border border-slate-300 rounded-xl uppercase font-mono font-bold"
                />
              </div>

              <div className="pt-2 flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setPaymentModalOpen(false)}
                  className="px-4 py-2 border border-slate-200 rounded-xl"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl shadow-md"
                >
                  Submit Payment
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ================= REVIEW MODAL ================= */}
      {reviewModalOpen && reviewRequest && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in">
          <div className="bg-white rounded-3xl max-w-md w-full p-6 sm:p-8 shadow-2xl border border-slate-200">
            <div className="flex justify-between items-center pb-3 border-b border-slate-100 mb-4">
              <div>
                <h3 className="text-base font-bold text-slate-900">Leave Feedback</h3>
                <p className="text-[11px] text-slate-500">{reviewRequest.serviceTitle}</p>
              </div>
              <button onClick={() => setReviewModalOpen(false)} className="text-slate-400 hover:text-slate-700">✕</button>
            </div>

            <form onSubmit={handleSubmitReview} className="space-y-4 text-xs">
              <div>
                <label className="block font-bold text-slate-700 mb-1">Rating</label>
                <div className="flex items-center gap-2">
                  {[1, 2, 3, 4, 5].map(star => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => setRatingStars(star)}
                      className="p-1 text-2xl cursor-pointer"
                    >
                      <Star
                        className={`w-7 h-7 ${
                          star <= ratingStars ? 'text-amber-400 fill-amber-400' : 'text-slate-300'
                        }`}
                      />
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block font-bold text-slate-700 mb-1">Your Feedback *</label>
                <textarea
                  rows={4}
                  required
                  placeholder="How did the mentor help you? Did you understand the concept clearly?"
                  value={reviewComment}
                  onChange={e => setReviewComment(e.target.value)}
                  className="w-full px-3 py-2 border border-slate-300 rounded-xl"
                />
              </div>

              <div className="pt-2 flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setReviewModalOpen(false)}
                  className="px-4 py-2 border border-slate-200 rounded-xl"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-xl shadow-md"
                >
                  Publish Review
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
};
