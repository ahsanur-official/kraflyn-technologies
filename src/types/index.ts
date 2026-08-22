export type UserRole = 'student' | 'mentor' | 'admin';

export interface User {
  id: string;
  name: string;
  email: string;
  phone: string;
  whatsapp: string;
  facebook?: string;
  university: string;
  department: string;
  studentId?: string;
  batch?: string;
  semester?: string;
  role: UserRole;
  avatar?: string;
  createdAt: string;
}

export type ServiceCategory = 
  | 'Design Services'
  | 'Development Services'
  | 'Student Support'
  | 'Academic Support'
  | 'Technical Support'
  | 'Communication'
  | 'Research'
  | 'Final Year';

export interface Service {
  id: string;
  title: string;
  iconName: string;
  shortDesc: string;
  fullDesc: string;
  category: ServiceCategory;
  startingPrice: number; // in BDT
  deliverables: string[];
  tag?: string;
  typicalTurnaround: string;
  popularProblemPrompt?: string;
}

export type RequestStatus =
  | 'submitted'
  | 'under_review'
  | 'contacted'
  | 'confirmed'
  | 'payment_pending'
  | 'in_progress'
  | 'completed'
  | 'feedback_given';

export interface AttachmentFile {
  id: string;
  name: string;
  size: string;
  type: string;
  url?: string;
  uploadedAt: string;
}

export interface PaymentRecord {
  id: string;
  requestId: string;
  amount: number;
  method: 'bKash' | 'Nagad' | 'Bank Transfer' | 'Card';
  transactionId: string;
  senderNumber: string;
  status: 'pending_verification' | 'verified' | 'rejected';
  submittedAt: string;
  verifiedAt?: string;
}

export interface SupportRequest {
  id: string; // e.g. ES-20260820-00125
  studentId: string;
  studentName: string;
  studentEmail: string;
  studentPhone: string;
  studentWhatsApp: string;
  studentFacebook?: string;
  university: string;
  department: string;
  studentUniId?: string;
  batch?: string;
  semester?: string;
  serviceId: string;
  serviceTitle: string;
  courseName: string;
  courseCode?: string;
  teacherName?: string;
  academicLevel: '1st Year' | '2nd Year' | '3rd Year' | '4th Year' | 'Masters' | 'Other';
  problemStatement: string;
  whatDoneSoFar?: string;
  expectedOutcome?: string;
  deadline: string;
  preferredContact: 'WhatsApp' | 'Facebook Messenger' | 'Phone Call' | 'Email' | 'Google Meet' | 'Zoom';
  preferredTime: 'Morning' | 'Afternoon' | 'Evening' | 'Night';
  expectedBudget: '৳200 – ৳500' | '৳500 – ৳1,000' | '৳1,000 – ৳3,000' | '৳3,000+' | 'Not Sure';
  agreedPrice?: number;
  attachments: AttachmentFile[];
  assignedMentorId?: string;
  assignedMentorName?: string;
  status: RequestStatus;
  paymentStatus: 'unpaid' | 'pending_verification' | 'paid' | 'refunded';
  paymentDetails?: PaymentRecord;
  adminNotes?: string[];
  createdAt: string;
  updatedAt: string;
  rating?: number;
  reviewComment?: string;
}

export interface Mentor {
  id: string;
  userId: string;
  name: string;
  email: string;
  phone: string;
  whatsapp?: string;
  university: string;
  department: string;
  qualification: string;
  expertise: string[];
  experience: string;
  portfolio?: string;
  linkedIn?: string;
  facebook?: string;
  availableTime: string;
  expectedRate: string;
  verificationStatus: 'pending' | 'approved' | 'rejected' | 'suspended';
  rating: number;
  totalCompletedSessions: number;
  earnings: number;
  avatar?: string;
  bio: string;
}

export interface Review {
  id: string;
  requestId?: string;
  studentName: string;
  university: string;
  department: string;
  serviceTitle: string;
  rating: number;
  comment: string;
  date: string;
  gradeOutcome?: string;
  verified?: boolean;
  avatar?: string;
}

export interface CartItem {
  id: string;
  serviceId: string;
  serviceTitle: string;
  category: ServiceCategory;
  basePrice: number;
  packageTier: 'Standard Support' | 'Express 24h Support' | 'VIP 1-on-1 Mentorship';
  urgencyFee: number;
  totalPrice: number;
  courseName?: string;
  specificNotes?: string;
  quantity: number;
}

export interface AcademicOrder {
  id: string; // e.g. EQ-ORD-2024-8841
  items: CartItem[];
  totalAmount: number;
  customerName: string;
  phone: string;
  whatsapp: string;
  email?: string;
  university: string;
  department: string;
  batchOrSemester?: string;
  courseName: string;
  courseCode?: string;
  requirements: string;
  deadline: string;
  preferredContact: 'WhatsApp' | 'Phone Call' | 'Google Meet' | 'Email';
  attachments: AttachmentFile[];
  status: 'order_received' | 'mentor_assigned' | 'contacted_student' | 'in_progress' | 'delivered_completed' | 'cancelled';
  assignedMentorName?: string;
  createdAt: string;
  updatedAt: string;
  notes?: string[];
}

export interface NotificationItem {
  id: string;
  title: string;
  message: string;
  type: 'info' | 'success' | 'warning';
  timestamp: string;
  isRead: boolean;
  linkId?: string;
}

export interface UserProfile {
  name: string;
  phone: string;
  whatsapp: string;
  email?: string;
  university: string;
  customUni?: string;
  department: string;
  batchOrSemester?: string;
  preferredContact: 'WhatsApp' | 'Phone Call' | 'Google Meet' | 'Email';
}

export interface ContactInquiry {
  id: string;
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  submittedAt: string;
  status: 'new' | 'reviewed' | 'resolved';
}

export interface MentorProfile {
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

export interface ProblemTrigger {
  id: string;
  text: string;
  serviceId: string;
  icon: string;
  description: string;
  defaultCourse?: string;
  defaultExpectation?: string;
}

