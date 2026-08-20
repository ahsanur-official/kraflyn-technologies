import React, { useState, useEffect } from 'react';
import { useApp } from '../../context/AppContext';
import { SERVICES, UNIVERSITIES, DEPARTMENTS } from '../../data/mockData';
import { AttachmentFile, Service } from '../../types';
import confetti from 'canvas-confetti';
import { 
  X, 
  ArrowRight, 
  ArrowLeft, 
  CheckCircle2, 
  Upload, 
  File, 
  Trash2, 
  Sparkles, 
  Calendar, 
  Clock, 
  MessageCircle, 
  DollarSign, 
  GraduationCap, 
  User, 
  BookOpen, 
  AlertCircle,
  ExternalLink
} from 'lucide-react';

export const BookingWizardModal: React.FC = () => {
  const { 
    bookingModalOpen, 
    closeBookingModal, 
    selectedServiceForBooking, 
    problemTriageDraft,
    currentUser,
    submitSupportRequest,
    setActiveNavTab
  } = useApp();

  const [currentStep, setCurrentStep] = useState<number>(1);
  const [submittedRequestId, setSubmittedRequestId] = useState<string | null>(null);

  // Form State
  const [formData, setFormData] = useState({
    // Step 1: Personal
    studentName: '',
    studentEmail: '',
    studentPhone: '',
    studentWhatsApp: '',
    studentFacebook: '',
    university: UNIVERSITIES[0],
    department: DEPARTMENTS[0],
    studentUniId: '',
    batch: '',
    semester: '',
    
    // Step 2: Academic
    serviceId: SERVICES[0].id,
    serviceTitle: SERVICES[0].title,
    courseName: '',
    courseCode: '',
    teacherName: '',
    academicLevel: '3rd Year' as '1st Year' | '2nd Year' | '3rd Year' | '4th Year' | 'Masters' | 'Other',

    // Step 3: Problem Details
    problemStatement: '',
    whatDoneSoFar: '',
    expectedOutcome: '',
    deadline: '',
    attachments: [] as AttachmentFile[],

    // Step 4: Preferred Contact & Budget
    preferredContact: 'WhatsApp' as 'WhatsApp' | 'Facebook Messenger' | 'Phone Call' | 'Email' | 'Google Meet' | 'Zoom',
    preferredTime: 'Evening' as 'Morning' | 'Afternoon' | 'Evening' | 'Night',
    expectedBudget: '৳500 – ৳1,000' as '৳200 – ৳500' | '৳500 – ৳1,000' | '৳1,000 – ৳3,000' | '৳3,000+' | 'Not Sure',
    
    agreeTerms: false
  });

  // Prefill when modal opens or user logged in
  useEffect(() => {
    if (bookingModalOpen) {
      setSubmittedRequestId(null);
      setCurrentStep(1);

      const defaultService = selectedServiceForBooking || SERVICES[0];
      
      setFormData(prev => ({
        ...prev,
        studentName: currentUser?.name || prev.studentName || '',
        studentEmail: currentUser?.email || prev.studentEmail || '',
        studentPhone: currentUser?.phone || prev.studentPhone || '',
        studentWhatsApp: currentUser?.whatsapp || currentUser?.phone || prev.studentWhatsApp || '',
        studentFacebook: currentUser?.facebook || prev.studentFacebook || '',
        university: currentUser?.university || prev.university || UNIVERSITIES[0],
        department: currentUser?.department || prev.department || DEPARTMENTS[0],
        studentUniId: currentUser?.studentId || prev.studentUniId || '',
        batch: currentUser?.batch || prev.batch || '',
        semester: currentUser?.semester || prev.semester || '',
        serviceId: defaultService.id,
        serviceTitle: defaultService.title,
        problemStatement: problemTriageDraft?.problemText ? `I am struggling with: ${problemTriageDraft.problemText}. ` : prev.problemStatement,
        expectedOutcome: problemTriageDraft?.defaultExpectation || prev.expectedOutcome,
        deadline: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000).toISOString().slice(0, 10)
      }));
    }
  }, [bookingModalOpen, selectedServiceForBooking, problemTriageDraft, currentUser]);

  if (!bookingModalOpen) return null;

  // File Upload Handlers (Client Simulation)
  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const files: globalThis.File[] = Array.from(e.target.files);
      const newAttachments: AttachmentFile[] = files.map(file => ({
        id: `att-${Date.now()}-${Math.random().toString(36).substr(2, 4)}`,
        name: file.name,
        size: `${(file.size / (1024 * 1024)).toFixed(2)} MB`,
        type: file.name.split('.').pop()?.toUpperCase() || 'FILE',
        uploadedAt: new Date().toLocaleDateString()
      }));

      setFormData(prev => ({
        ...prev,
        attachments: [...prev.attachments, ...newAttachments]
      }));
    }
  };

  const removeAttachment = (id: string) => {
    setFormData(prev => ({
      ...prev,
      attachments: prev.attachments.filter(a => a.id !== id)
    }));
  };

  const handleNextStep = () => {
    if (currentStep === 1) {
      if (!formData.studentName || !formData.studentEmail || !formData.studentPhone) {
        alert('Please fill in your Name, Email, and Phone number.');
        return;
      }
    }
    if (currentStep === 2) {
      if (!formData.courseName) {
        alert('Please enter your Course Name.');
        return;
      }
    }
    if (currentStep === 3) {
      if (!formData.problemStatement || !formData.deadline) {
        alert('Please describe your problem and select a deadline.');
        return;
      }
    }
    setCurrentStep(prev => Math.min(prev + 1, 5));
  };

  const handlePrevStep = () => {
    setCurrentStep(prev => Math.max(prev - 1, 1));
  };

  const handleFinalSubmit = () => {
    if (!formData.agreeTerms) {
      alert('Please agree to the Terms & Conditions.');
      return;
    }

    const generatedId = submitSupportRequest(formData);
    setSubmittedRequestId(generatedId);

    // Trigger celebration confetti
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 }
      });
    } catch (e) {
      console.log('Confetti trigger', e);
    }
  };

  const whatsappMessageUrl = `https://wa.me/8801712345678?text=${encodeURIComponent(
    `Hi EduSolve Support! I just submitted an academic support request (ID: ${submittedRequestId || 'NEW'}).\n\nName: ${formData.studentName}\nUniversity: ${formData.university}\nCourse: ${formData.courseName}\nService: ${formData.serviceTitle}\nDeadline: ${formData.deadline}`
  )}`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-900/70 backdrop-blur-xs animate-in fade-in overflow-y-auto">
      <div className="bg-white rounded-3xl max-w-3xl w-full max-h-[92vh] flex flex-col shadow-2xl border border-slate-200 overflow-hidden my-auto">
        
        {/* Top Header */}
        <div className="px-6 py-4 bg-slate-900 text-white flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center text-white">
              <GraduationCap className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-base font-bold">Academic Support Request Wizard</h2>
              <p className="text-[11px] text-slate-400">Step {currentStep} of 5 • Personalized University Mentorship</p>
            </div>
          </div>
          <button
            onClick={closeBookingModal}
            className="p-1.5 text-slate-400 hover:text-white rounded-lg bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Step Progress Indicators */}
        {!submittedRequestId && (
          <div className="bg-slate-50 px-6 py-2.5 border-b border-slate-200 shrink-0">
            <div className="flex items-center justify-between max-w-xl mx-auto">
              {[
                { num: 1, label: 'Personal' },
                { num: 2, label: 'Academic' },
                { num: 3, label: 'Problem' },
                { num: 4, label: 'Budget' },
                { num: 5, label: 'Review' }
              ].map((step) => {
                const isActive = currentStep === step.num;
                const isPassed = currentStep > step.num;
                return (
                  <div key={step.num} className="flex items-center gap-1.5 text-xs">
                    <div
                      className={`w-6 h-6 rounded-full flex items-center justify-center font-bold text-[11px] transition-colors ${
                        isActive
                          ? 'bg-indigo-600 text-white ring-2 ring-indigo-200'
                          : isPassed
                          ? 'bg-emerald-600 text-white'
                          : 'bg-slate-200 text-slate-600'
                      }`}
                    >
                      {isPassed ? <CheckCircle2 className="w-3.5 h-3.5" /> : step.num}
                    </div>
                    <span className={`hidden sm:inline font-medium ${isActive ? 'text-indigo-600 font-bold' : 'text-slate-500'}`}>
                      {step.label}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Modal Scrollable Body */}
        <div className="p-6 overflow-y-auto flex-1">
          
          {/* ================= SUCCESS SCREEN ================= */}
          {submittedRequestId ? (
            <div className="text-center py-8 space-y-6 max-w-lg mx-auto">
              <div className="w-18 h-18 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto ring-8 ring-emerald-50">
                <CheckCircle2 className="w-10 h-10" />
              </div>

              <div>
                <span className="inline-block px-3 py-1 bg-emerald-50 text-emerald-700 text-xs font-bold rounded-full mb-2 border border-emerald-200">
                  🎉 Request Submitted Successfully!
                </span>
                <h3 className="text-2xl font-black text-slate-900">
                  Request ID: <span className="text-indigo-600">{submittedRequestId}</span>
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 mt-2">
                  Our academic coordinator is currently reviewing your request. We will reach out to you on <strong>{formData.preferredContact}</strong> ({formData.studentWhatsApp || formData.studentPhone}) within <strong>45 minutes</strong>.
                </p>
              </div>

              {/* Summary Box */}
              <div className="bg-slate-50 rounded-2xl p-4 text-left text-xs border border-slate-200/80 space-y-2">
                <div className="flex justify-between">
                  <span className="text-slate-500">Service:</span>
                  <span className="font-bold text-slate-900">{formData.serviceTitle}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Course / Topic:</span>
                  <span className="font-bold text-slate-900">{formData.courseName}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Target Deadline:</span>
                  <span className="font-bold text-indigo-600">{formData.deadline}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Budget Range:</span>
                  <span className="font-bold text-emerald-600">{formData.expectedBudget}</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3 pt-2">
                <a
                  href={whatsappMessageUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full py-3.5 px-4 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs rounded-xl shadow-md flex items-center justify-center gap-2 transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Contact Us Directly on WhatsApp Now</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>

                <button
                  onClick={() => {
                    closeBookingModal();
                    setActiveNavTab('dashboard');
                  }}
                  className="w-full py-3 px-4 bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold text-xs rounded-xl transition-colors"
                >
                  Track Status in Student Dashboard
                </button>
              </div>
            </div>
          ) : (
            <div>
              {/* ================= STEP 1: PERSONAL INFO ================= */}
              {currentStep === 1 && (
                <div className="space-y-4 animate-in fade-in">
                  <div className="border-b border-slate-100 pb-3">
                    <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                      <User className="w-4 h-4 text-indigo-600" />
                      <span>Step 1: Personal & Contact Information</span>
                    </h3>
                    <p className="text-xs text-slate-500">
                      So our academic coordinator can contact you regarding your mentorship request.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Full Name *</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Md. Ehsanur Rahaman"
                        value={formData.studentName}
                        onChange={e => setFormData({ ...formData, studentName: e.target.value })}
                        className="w-full px-3.5 py-2 text-xs border border-slate-300 rounded-xl focus:ring-2 focus:ring-indigo-500"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Email Address *</label>
                      <input
                        type="email"
                        required
                        placeholder="e.g. student@pundra.edu.bd"
                        value={formData.studentEmail}
                        onChange={e => setFormData({ ...formData, studentEmail: e.target.value })}
                        className="w-full px-3.5 py-2 text-xs border border-slate-300 rounded-xl focus:ring-2 focus:ring-indigo-500"
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
                        value={formData.studentPhone}
                        onChange={e => setFormData({ ...formData, studentPhone: e.target.value, studentWhatsApp: formData.studentWhatsApp || e.target.value })}
                        className="w-full px-3.5 py-2 text-xs border border-slate-300 rounded-xl focus:ring-2 focus:ring-indigo-500"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">WhatsApp Number (For Quick Triage)</label>
                      <input
                        type="tel"
                        placeholder="e.g. +880 1712-345678"
                        value={formData.studentWhatsApp}
                        onChange={e => setFormData({ ...formData, studentWhatsApp: e.target.value })}
                        className="w-full px-3.5 py-2 text-xs border border-slate-300 rounded-xl focus:ring-2 focus:ring-indigo-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Facebook Profile Link / ID (Optional)</label>
                    <input
                      type="text"
                      placeholder="e.g. https://facebook.com/your.profile"
                      value={formData.studentFacebook}
                      onChange={e => setFormData({ ...formData, studentFacebook: e.target.value })}
                      className="w-full px-3.5 py-2 text-xs border border-slate-300 rounded-xl focus:ring-2 focus:ring-indigo-500"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">University / Institute *</label>
                      <select
                        value={formData.university}
                        onChange={e => setFormData({ ...formData, university: e.target.value })}
                        className="w-full px-3.5 py-2 text-xs border border-slate-300 rounded-xl focus:ring-2 focus:ring-indigo-500"
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
                        className="w-full px-3.5 py-2 text-xs border border-slate-300 rounded-xl focus:ring-2 focus:ring-indigo-500"
                      >
                        {DEPARTMENTS.map(d => (
                          <option key={d} value={d}>{d}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-3">
                    <div>
                      <label className="block text-[11px] font-bold text-slate-700 mb-1">Student ID (Optional)</label>
                      <input
                        type="text"
                        placeholder="e.g. CSE-21-042"
                        value={formData.studentUniId}
                        onChange={e => setFormData({ ...formData, studentUniId: e.target.value })}
                        className="w-full px-3 py-2 text-xs border border-slate-300 rounded-xl"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-bold text-slate-700 mb-1">Batch</label>
                      <input
                        type="text"
                        placeholder="e.g. Batch 18"
                        value={formData.batch}
                        onChange={e => setFormData({ ...formData, batch: e.target.value })}
                        className="w-full px-3 py-2 text-xs border border-slate-300 rounded-xl"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-bold text-slate-700 mb-1">Semester</label>
                      <input
                        type="text"
                        placeholder="e.g. 7th Sem"
                        value={formData.semester}
                        onChange={e => setFormData({ ...formData, semester: e.target.value })}
                        className="w-full px-3 py-2 text-xs border border-slate-300 rounded-xl"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* ================= STEP 2: ACADEMIC INFO ================= */}
              {currentStep === 2 && (
                <div className="space-y-4 animate-in fade-in">
                  <div className="border-b border-slate-100 pb-3">
                    <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                      <GraduationCap className="w-4 h-4 text-indigo-600" />
                      <span>Step 2: Academic & Course Information</span>
                    </h3>
                    <p className="text-xs text-slate-500">
                      Specify the course or subject domain so we match you with a specialized mentor.
                    </p>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Selected Service *</label>
                    <select
                      value={formData.serviceId}
                      onChange={e => {
                        const s = SERVICES.find(srv => srv.id === e.target.value);
                        setFormData({
                          ...formData,
                          serviceId: e.target.value,
                          serviceTitle: s?.title || 'Course Support'
                        });
                      }}
                      className="w-full px-3.5 py-2.5 text-xs font-semibold text-slate-800 border border-indigo-200 bg-indigo-50/50 rounded-xl focus:ring-2 focus:ring-indigo-500"
                    >
                      {SERVICES.map(s => (
                        <option key={s.id} value={s.id}>{s.title} ({s.category})</option>
                      ))}
                    </select>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Course Name / Topic *</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Digital Signal Processing / Algorithms"
                        value={formData.courseName}
                        onChange={e => setFormData({ ...formData, courseName: e.target.value })}
                        className="w-full px-3.5 py-2 text-xs border border-slate-300 rounded-xl focus:ring-2 focus:ring-indigo-500"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Course Code (Optional)</label>
                      <input
                        type="text"
                        placeholder="e.g. CSE-3101 / EEE-205"
                        value={formData.courseCode}
                        onChange={e => setFormData({ ...formData, courseCode: e.target.value })}
                        className="w-full px-3.5 py-2 text-xs border border-slate-300 rounded-xl focus:ring-2 focus:ring-indigo-500"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Teacher / Faculty Name (Optional)</label>
                      <input
                        type="text"
                        placeholder="e.g. Dr. Shah Alam"
                        value={formData.teacherName}
                        onChange={e => setFormData({ ...formData, teacherName: e.target.value })}
                        className="w-full px-3.5 py-2 text-xs border border-slate-300 rounded-xl focus:ring-2 focus:ring-indigo-500"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Academic Level *</label>
                      <select
                        value={formData.academicLevel}
                        onChange={e => setFormData({ ...formData, academicLevel: e.target.value as any })}
                        className="w-full px-3.5 py-2 text-xs border border-slate-300 rounded-xl focus:ring-2 focus:ring-indigo-500"
                      >
                        <option>1st Year</option>
                        <option>2nd Year</option>
                        <option>3rd Year</option>
                        <option>4th Year</option>
                        <option>Masters</option>
                        <option>Other</option>
                      </select>
                    </div>
                  </div>
                </div>
              )}

              {/* ================= STEP 3: PROBLEM DETAILS ================= */}
              {currentStep === 3 && (
                <div className="space-y-4 animate-in fade-in">
                  <div className="border-b border-slate-100 pb-3">
                    <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                      <BookOpen className="w-4 h-4 text-indigo-600" />
                      <span>Step 3: Problem Description & Files</span>
                    </h3>
                    <p className="text-xs text-slate-500">
                      The more detail you share, the faster and more accurately we can assist you.
                    </p>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      What do you need help with? *
                    </label>
                    <textarea
                      rows={4}
                      required
                      placeholder="Please describe your problem in detail (e.g. 'I am getting segmentation faults on AVL tree balancing, or need thesis methodology review for NLP...')"
                      value={formData.problemStatement}
                      onChange={e => setFormData({ ...formData, problemStatement: e.target.value })}
                      className="w-full px-3.5 py-2 text-xs border border-slate-300 rounded-xl focus:ring-2 focus:ring-indigo-500 leading-relaxed"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">What have you done so far?</label>
                      <textarea
                        rows={2}
                        placeholder="e.g. Read textbook chapter, wrote baseline code, gathered 500 samples..."
                        value={formData.whatDoneSoFar}
                        onChange={e => setFormData({ ...formData, whatDoneSoFar: e.target.value })}
                        className="w-full px-3.5 py-2 text-xs border border-slate-300 rounded-xl focus:ring-2 focus:ring-indigo-500"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">What exactly do you expect from us?</label>
                      <textarea
                        rows={2}
                        placeholder="e.g. 1-on-1 code walkthrough, proofreading, mock viva questions..."
                        value={formData.expectedOutcome}
                        onChange={e => setFormData({ ...formData, expectedOutcome: e.target.value })}
                        className="w-full px-3.5 py-2 text-xs border border-slate-300 rounded-xl focus:ring-2 focus:ring-indigo-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Submission Deadline / Viva Date *
                    </label>
                    <input
                      type="date"
                      required
                      value={formData.deadline}
                      onChange={e => setFormData({ ...formData, deadline: e.target.value })}
                      className="w-full sm:w-1/2 px-3.5 py-2 text-xs border border-slate-300 rounded-xl focus:ring-2 focus:ring-indigo-500"
                    />
                  </div>

                  {/* Attachment Upload */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Upload Files / Code / Assignment Prompt (PDF, DOCX, ZIP, Images, CPP, PY)
                    </label>
                    
                    <div className="border-2 border-dashed border-slate-300 hover:border-indigo-500 rounded-2xl p-4 text-center bg-slate-50/60 transition-colors">
                      <input
                        type="file"
                        multiple
                        onChange={handleFileUpload}
                        className="hidden"
                        id="wizard-file-upload"
                      />
                      <label
                        htmlFor="wizard-file-upload"
                        className="cursor-pointer flex flex-col items-center justify-center space-y-1"
                      >
                        <Upload className="w-7 h-7 text-indigo-500" />
                        <span className="text-xs font-bold text-slate-700">Click to browse or drag files here</span>
                        <span className="text-[10px] text-slate-400">Max size 25MB per file • Strictly confidential</span>
                      </label>
                    </div>

                    {/* Uploaded Files list */}
                    {formData.attachments.length > 0 && (
                      <div className="mt-3 space-y-2">
                        {formData.attachments.map((att) => (
                          <div
                            key={att.id}
                            className="flex items-center justify-between p-2.5 bg-white rounded-xl border border-slate-200 text-xs"
                          >
                            <div className="flex items-center gap-2">
                              <File className="w-4 h-4 text-indigo-600" />
                              <span className="font-semibold text-slate-800">{att.name}</span>
                              <span className="text-[10px] text-slate-400">({att.size})</span>
                            </div>
                            <button
                              onClick={() => removeAttachment(att.id)}
                              className="text-rose-500 hover:text-rose-700 p-1"
                            >
                              <Trash2 className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* ================= STEP 4: CONTACT & BUDGET ================= */}
              {currentStep === 4 && (
                <div className="space-y-5 animate-in fade-in">
                  <div className="border-b border-slate-100 pb-3">
                    <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                      <DollarSign className="w-4 h-4 text-emerald-600" />
                      <span>Step 4: Preferred Communication & Budget Range</span>
                    </h3>
                    <p className="text-xs text-slate-500">
                      Help us coordinate with you at the ideal time and within your comfortable budget.
                    </p>
                  </div>

                  {/* Preferred Contact Method */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-2">Preferred Contact Method *</label>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                      {['WhatsApp', 'Facebook Messenger', 'Phone Call', 'Email', 'Google Meet', 'Zoom'].map((method) => (
                        <button
                          key={method}
                          type="button"
                          onClick={() => setFormData({ ...formData, preferredContact: method as any })}
                          className={`p-3 rounded-xl border text-xs font-semibold text-left transition-all ${
                            formData.preferredContact === method
                              ? 'bg-indigo-50 border-indigo-600 text-indigo-900 shadow-xs'
                              : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-50'
                          }`}
                        >
                          <div className="flex items-center justify-between">
                            <span>{method}</span>
                            {formData.preferredContact === method && (
                              <CheckCircle2 className="w-3.5 h-3.5 text-indigo-600" />
                            )}
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Preferred Contact Time */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-2">Preferred Contact Time Slot *</label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      {[
                        { time: 'Morning', sub: '9 AM - 12 PM' },
                        { time: 'Afternoon', sub: '12 PM - 5 PM' },
                        { time: 'Evening', sub: '5 PM - 8 PM' },
                        { time: 'Night', sub: '8 PM - 11 PM' }
                      ].map((slot) => (
                        <button
                          key={slot.time}
                          type="button"
                          onClick={() => setFormData({ ...formData, preferredTime: slot.time as any })}
                          className={`p-3 rounded-xl border text-xs text-left transition-all ${
                            formData.preferredTime === slot.time
                              ? 'bg-indigo-50 border-indigo-600 text-indigo-900 shadow-xs'
                              : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-50'
                          }`}
                        >
                          <div className="font-bold">{slot.time}</div>
                          <div className="text-[10px] text-slate-400">{slot.sub}</div>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Expected Budget */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-2">Your Expected Budget Range *</label>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                      {['৳200 – ৳500', '৳500 – ৳1,000', '৳1,000 – ৳3,000', '৳3,000+', 'Not Sure'].map((budget) => (
                        <button
                          key={budget}
                          type="button"
                          onClick={() => setFormData({ ...formData, expectedBudget: budget as any })}
                          className={`p-3 rounded-xl border text-xs font-semibold text-left transition-all ${
                            formData.expectedBudget === budget
                              ? 'bg-emerald-50 border-emerald-600 text-emerald-900 shadow-xs'
                              : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-50'
                          }`}
                        >
                          <div className="flex items-center justify-between">
                            <span>{budget}</span>
                            {formData.expectedBudget === budget && (
                              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                            )}
                          </div>
                        </button>
                      ))}
                    </div>
                    <p className="text-[11px] text-slate-400 mt-2">
                      * Transparent discussion: Exact price is confirmed after understanding your scope. No upfront payment required to submit request.
                    </p>
                  </div>
                </div>
              )}

              {/* ================= STEP 5: REVIEW & SUBMIT ================= */}
              {currentStep === 5 && (
                <div className="space-y-5 animate-in fade-in">
                  <div className="border-b border-slate-100 pb-3">
                    <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-indigo-600" />
                      <span>Step 5: Review Your Academic Request</span>
                    </h3>
                    <p className="text-xs text-slate-500">
                      Please double-check your information before submitting.
                    </p>
                  </div>

                  <div className="bg-slate-50 rounded-2xl p-5 border border-slate-200/80 space-y-3 text-xs">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pb-3 border-b border-slate-200">
                      <div>
                        <span className="text-slate-400 block text-[10px] uppercase font-bold">Student Name</span>
                        <span className="font-bold text-slate-900">{formData.studentName}</span>
                      </div>
                      <div>
                        <span className="text-slate-400 block text-[10px] uppercase font-bold">University & Dept</span>
                        <span className="font-bold text-slate-900">{formData.university} ({formData.department})</span>
                      </div>
                      <div>
                        <span className="text-slate-400 block text-[10px] uppercase font-bold">Phone / WhatsApp</span>
                        <span className="font-bold text-slate-900">{formData.studentPhone} ({formData.studentWhatsApp})</span>
                      </div>
                      <div>
                        <span className="text-slate-400 block text-[10px] uppercase font-bold">Preferred Contact</span>
                        <span className="font-bold text-indigo-600">{formData.preferredContact} ({formData.preferredTime})</span>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pb-3 border-b border-slate-200">
                      <div>
                        <span className="text-slate-400 block text-[10px] uppercase font-bold">Service Category</span>
                        <span className="font-bold text-indigo-700">{formData.serviceTitle}</span>
                      </div>
                      <div>
                        <span className="text-slate-400 block text-[10px] uppercase font-bold">Course / Subject</span>
                        <span className="font-bold text-slate-900">{formData.courseName}</span>
                      </div>
                      <div>
                        <span className="text-slate-400 block text-[10px] uppercase font-bold">Target Deadline</span>
                        <span className="font-bold text-rose-600">{formData.deadline}</span>
                      </div>
                      <div>
                        <span className="text-slate-400 block text-[10px] uppercase font-bold">Expected Budget</span>
                        <span className="font-bold text-emerald-600">{formData.expectedBudget}</span>
                      </div>
                    </div>

                    <div>
                      <span className="text-slate-400 block text-[10px] uppercase font-bold mb-1">Problem Description</span>
                      <p className="text-slate-700 bg-white p-3 rounded-xl border border-slate-200 text-xs leading-relaxed">
                        {formData.problemStatement}
                      </p>
                    </div>

                    {formData.attachments.length > 0 && (
                      <div>
                        <span className="text-slate-400 block text-[10px] uppercase font-bold mb-1">
                          Attachments ({formData.attachments.length})
                        </span>
                        <div className="flex flex-wrap gap-2">
                          {formData.attachments.map(att => (
                            <span key={att.id} className="px-2.5 py-1 bg-white rounded-lg border border-slate-200 text-[11px] font-medium text-slate-700">
                              📄 {att.name}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Terms agreement checkbox */}
                  <label className="flex items-start gap-2.5 p-3 rounded-xl bg-indigo-50/50 border border-indigo-100 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formData.agreeTerms}
                      onChange={e => setFormData({ ...formData, agreeTerms: e.target.checked })}
                      className="mt-0.5 rounded text-indigo-600 focus:ring-indigo-500 w-4 h-4"
                    />
                    <span className="text-xs text-slate-700">
                      I agree to the <strong>EduSolve Academic Terms & Integrity Policy</strong>. I understand that EduSolve mentors provide conceptual coaching and guidance.
                    </span>
                  </label>
                </div>
              )}
            </div>
          )}

        </div>

        {/* Modal Bottom Footer Navigation */}
        {!submittedRequestId && (
          <div className="px-6 py-4 bg-slate-50 border-t border-slate-200 flex items-center justify-between shrink-0">
            {currentStep > 1 ? (
              <button
                type="button"
                onClick={handlePrevStep}
                className="px-4 py-2 text-xs font-semibold text-slate-700 hover:text-slate-900 border border-slate-300 rounded-xl hover:bg-white flex items-center gap-1.5 transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Back</span>
              </button>
            ) : (
              <div></div>
            )}

            {currentStep < 5 ? (
              <button
                type="button"
                onClick={handleNextStep}
                className="px-6 py-2.5 bg-indigo-600 hover:bg-indigo-700 active:bg-indigo-800 text-white text-xs font-bold rounded-xl shadow-md flex items-center gap-2 transition-colors cursor-pointer"
              >
                <span>Continue</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            ) : (
              <button
                type="button"
                onClick={handleFinalSubmit}
                className="px-7 py-2.5 bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 text-white text-xs font-bold rounded-xl shadow-md flex items-center gap-2 transition-colors cursor-pointer"
              >
                <CheckCircle2 className="w-4 h-4" />
                <span>Submit Support Request</span>
              </button>
            )}
          </div>
        )}

      </div>
    </div>
  );
};
