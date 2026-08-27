export type UserRole = 'client' | 'specialist' | 'admin' | 'student' | 'mentor';

export interface User {
  id: string;
  name: string;
  email: string;
  phone: string;
  whatsapp: string;
  facebook?: string;
  companyOrOrg?: string;
  role: UserRole;
  avatar?: string;
  createdAt: string;
}

export type ServiceCategory = 
  | 'Design Services'
  | 'Development Services'
  | 'WordPress Services'
  | 'Data Analysis';

export interface SubService {
  id: string;
  title: string;
  price: number; // in USD
  turnaround: string;
  deliverables: string[];
  recommendedFor?: string;
}

export interface Service {
  id: string;
  title: string;
  iconName: string;
  shortDesc: string;
  fullDesc: string;
  category: ServiceCategory;
  startingPrice: number; // in USD
  deliverables: string[];
  subServices?: SubService[];
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
  id: string; // e.g. KT-PRJ-2026-00125
  studentId?: string;
  studentName?: string;
  studentEmail?: string;
  studentPhone?: string;
  studentWhatsApp?: string;
  studentFacebook?: string;
  clientName?: string;
  clientEmail?: string;
  clientPhone?: string;
  clientWhatsApp?: string;
  companyOrOrg?: string;
  industry?: string;
  university?: string;
  department?: string;
  studentUniId?: string;
  batch?: string;
  semester?: string;
  serviceId: string;
  serviceTitle: string;
  courseName?: string;
  projectTitle?: string;
  courseCode?: string;
  techStack?: string;
  problemStatement: string;
  whatDoneSoFar?: string;
  expectedOutcome?: string;
  deadline: string;
  preferredContact: 'WhatsApp' | 'Facebook Messenger' | 'Phone Call' | 'Email' | 'Google Meet' | 'Zoom';
  preferredTime?: 'Morning' | 'Afternoon' | 'Evening' | 'Night';
  expectedBudget?: string;
  agreedPrice?: number;
  attachments: AttachmentFile[];
  assignedMentorId?: string;
  assignedMentorName?: string;
  assignedSpecialistName?: string;
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
  userId?: string;
  name: string;
  email: string;
  phone: string;
  whatsapp?: string;
  roleTitle?: string; // e.g. Senior Full-Stack Engineer, Lead UI/UX Designer
  roleTitleEn?: string;
  roleTitleBn?: string;
  university?: string;
  department?: string;
  domain?: string;
  companyOrOrg?: string;
  qualification?: string;
  expertise: string[];
  skills?: string[];
  experience: string;
  portfolio?: string;
  linkedIn?: string;
  github?: string;
  facebook?: string;
  availableTime: string;
  expectedRate?: string;
  verificationStatus?: 'pending' | 'approved' | 'rejected' | 'suspended';
  rating: number;
  totalCompletedSessions?: number;
  completedProjects?: number;
  earnings?: number;
  avatar?: string;
  bio: string;
  bioEn?: string;
  bioBn?: string;
  achievements?: string[];
  badge?: string;
  featured?: boolean;
  location?: string;
}

export interface Review {
  id: string;
  requestId?: string;
  studentName?: string;
  clientName?: string;
  companyOrOrg?: string;
  university?: string;
  department?: string;
  serviceTitle: string;
  rating: number;
  comment: string;
  date: string;
  gradeOutcome?: string;
  impactOutcome?: string;
  verified?: boolean;
  avatar?: string;
}

export interface CartItem {
  id: string;
  serviceId: string;
  serviceTitle: string;
  category: ServiceCategory;
  basePrice: number;
  packageTier: 'Standard Support' | 'Express 24h Support' | 'VIP 1-on-1 Mentorship' | 'Standard Delivery' | 'Priority Sprint' | 'Dedicated Enterprise';
  urgencyFee: number;
  totalPrice: number;
  courseName?: string;
  projectScope?: string;
  specificNotes?: string;
  quantity: number;
}

export interface AcademicOrder {
  id: string; // e.g. KT-ORD-2026-8841
  items: CartItem[];
  totalAmount: number;
  customerName: string;
  phone: string;
  whatsapp: string;
  email?: string;
  companyOrOrg?: string;
  industry?: string;
  university?: string;
  department?: string;
  batchOrSemester?: string;
  courseName?: string;
  projectTitle?: string;
  courseCode?: string;
  techStack?: string;
  requirements: string;
  deadline: string;
  preferredContact: 'WhatsApp' | 'Phone Call' | 'Google Meet' | 'Email';
  attachments: AttachmentFile[];
  status: 'order_received' | 'mentor_assigned' | 'contacted_student' | 'in_progress' | 'delivered_completed' | 'cancelled';
  assignedMentorName?: string;
  assignedSpecialistName?: string;
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
  companyOrOrg?: string;
  industry?: string;
  university?: string;
  customUni?: string;
  department?: string;
  batchOrSemester?: string;
  preferredContact: 'WhatsApp' | 'Phone Call' | 'Google Meet' | 'Email';
}

export interface ContactInquiry {
  id: string;
  name: string;
  email: string;
  phone: string;
  companyOrOrg?: string;
  serviceCategory?: string;
  subject: string;
  message: string;
  submittedAt: string;
  status: 'new' | 'contacted' | 'reviewed' | 'resolved';
}

export interface MentorProfile {
  id: string;
  name: string;
  institution?: string;
  companyOrOrg?: string;
  degree?: string;
  roleTitle?: string;
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

export type ProjectCategory = 
  | 'Creative Design' 
  | 'Web & Software' 
  | 'WordPress Wing' 
  | 'Data Analytics' 
  | 'Academic & FYP' 
  | 'Mobile Apps'
  | 'Academic'
  | 'Full-Stack'
  | 'AI & Machine Learning'
  | 'Mobile App'
  | 'Data Science'
  | 'Thesis & Research'
  | 'UI/UX Design'
  | 'IoT & Robotics'
  | 'Cybersecurity'
  | string;

export interface ProjectItem {
  id: string;
  title: string;
  category: ProjectCategory;
  clientOrStudentName?: string;
  studentOrClient?: string;
  universityOrOrg?: string;
  description: string;
  technologies: string[];
  deliverables?: string[];
  imageUrl?: string;
  liveDemoUrl?: string;
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
  completionDate?: string;
  rating?: number;
  gradeOutcome?: string;
  price?: number;
  serviceIdRef?: string;
  createdAt?: string;
}

export interface SiteNotice {
  enabled: boolean;
  badge?: string;
  text?: string;
  messageBn?: string;
  messageEn?: string;
  type?: 'promo' | 'warning' | 'info' | 'success';
  linkText?: string;
  linkUrl?: string;
  actionText?: string;
  actionLink?: string;
  discountCode?: string;
  discountPercent?: number;
}

export interface SiteSettings {
  notice: SiteNotice;
  whatsappNumber: string;
  helplinePhone: string;
  supportEmail: string;
  officeLocation: string;
  facebookUrl?: string;
  telegramUrl?: string;
  isOrderingPaused?: boolean;
  pauseNoticeText?: string;
  heroStats?: {
    totalProjectsCompleted?: number;
    completedProjects?: number;
    satisfactionRate?: number;
    successRate?: number;
    partnerUniversities?: number;
    activeMentors?: number;
    happyStudents?: number;
  };
  socialLinks?: {
    facebook?: string;
    whatsapp?: string;
    telegram?: string;
    github?: string;
    linkedin?: string;
    youtube?: string;
  };
}

