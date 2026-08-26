import React, { createContext, useContext, useState, useEffect, useMemo } from 'react';
import { 
  Service, 
  Review, 
  CartItem, 
  AcademicOrder, 
  AttachmentFile,
  NotificationItem,
  UserProfile,
  ContactInquiry,
  MentorProfile,
  ProjectItem,
  SiteSettings
} from '../types';
import { 
  SERVICES, 
  REVIEWS, 
  INITIAL_ORDERS,
  INITIAL_PROJECTS,
  DEFAULT_SITE_SETTINGS 
} from '../data/mockData';
import { 
  Language, 
  TRANSLATIONS, 
  TranslationDictionary,
  BILINGUAL_SERVICES,
  BilingualService 
} from '../data/translations';
import { 
  subscribeToOrders, 
  saveOrderToFirestore, 
  updateOrderStatusInFirestore, 
  deleteOrderFromFirestore,
  subscribeToReviews,
  saveReviewToFirestore,
  deleteReviewFromFirestore,
  subscribeToProjects,
  saveProjectToFirestore,
  deleteProjectFromFirestore,
  subscribeToSiteSettings,
  saveSiteSettingsToFirestore,
  subscribeToMentors,
  saveMentorToFirestore,
  deleteMentorFromFirestore,
  subscribeToServices,
  saveServiceToFirestore,
  deleteServiceFromFirestore,
  subscribeToInquiries,
  saveInquiryToFirestore,
  deleteInquiryFromFirestore
} from '../lib/firestoreService';

export const INITIAL_MENTORS: MentorProfile[] = [
  {
    id: 'm-1',
    name: 'Md. Ahsanur Rahaman',
    institution: 'Kraflyn Technologies',
    degree: 'Co-Founder & Lead Full-Stack Architect',
    roleTitle: 'Co-Founder & Lead Full-Stack Architect',
    specialization: ['React / Next.js 14', 'Node.js & TypeScript', 'PostgreSQL / Prisma', 'Cloud Architecture'],
    activeAssignedOrders: 3,
    completedOrders: 98,
    rating: 5.0,
    contactPhone: '+880 1712-345678',
    status: 'available'
  },
  {
    id: 'm-2',
    name: 'Md. Masjidul Islam',
    institution: 'Kraflyn Technologies',
    degree: 'Lead Data Scientist & AI Systems Specialist',
    roleTitle: 'Lead Data Scientist & AI Systems Specialist',
    specialization: ['Python / Pandas', 'Power BI & Tableau', 'Machine Learning & LLM', 'SQL Analytics'],
    activeAssignedOrders: 2,
    completedOrders: 85,
    rating: 4.98,
    contactPhone: '+880 1611-778899',
    status: 'available'
  },
  {
    id: 'm-3',
    name: 'Md. Atikur Rahman',
    institution: 'Kraflyn Technologies',
    degree: 'Senior Web Architect & CMS Specialist',
    roleTitle: 'Senior Web Architect & CMS Specialist',
    specialization: ['Custom WordPress', 'WooCommerce Architecture', 'PHP 8 / React', 'Speed & Security'],
    activeAssignedOrders: 4,
    completedOrders: 92,
    rating: 4.97,
    contactPhone: '+880 1933-445566',
    status: 'available'
  },
  {
    id: 'm-4',
    name: 'Mst. Somaiya Alom Asha',
    institution: 'Kraflyn Technologies',
    degree: 'Lead UI/UX Designer & Product Strategist',
    roleTitle: 'Lead UI/UX Designer & Product Strategist',
    specialization: ['Figma Prototyping', 'Design Systems & Tokens', 'Mobile App UI/UX', 'User Journey Design'],
    activeAssignedOrders: 2,
    completedOrders: 89,
    rating: 4.99,
    contactPhone: '+880 1822-998877',
    status: 'available'
  }
];

export const DEFAULT_USER_PROFILE: UserProfile = {
  name: '',
  phone: '',
  whatsapp: '',
  email: '',
  companyOrOrg: '',
  industry: 'SaaS & Cloud Platforms',
  university: 'Tech Startup & Innovation Lab',
  customUni: '',
  department: 'Full-Stack Web Engineering',
  batchOrSemester: 'Web / SaaS Project',
  preferredContact: 'WhatsApp'
};

interface AppContextType {
  // Language & i18n
  language: Language;
  setLanguage: (lang: Language) => void;
  t: TranslationDictionary;
  bilingualServices: BilingualService[];

  // View Switcher (Student Web vs Admin Web)
  currentView: 'student' | 'admin';
  setCurrentView: (view: 'student' | 'admin') => void;

  // Navigation within Student Web
  activeNavTab: string;
  setActiveNavTab: (tab: string) => void;

  // User Profile Cached in LocalStorage
  userProfile: UserProfile;
  updateUserProfile: (profile: Partial<UserProfile>) => void;

  // Projects / Portfolio Showcase (A-to-Z Admin Management)
  projects: ProjectItem[];
  addProject: (project: Omit<ProjectItem, 'id' | 'createdAt'>) => string;
  updateProject: (project: ProjectItem) => void;
  deleteProject: (projectId: string) => void;

  // Site Settings & Notices (A-to-Z Admin Management)
  siteSettings: SiteSettings;
  updateSiteSettings: (settings: Partial<SiteSettings>) => void;

  // Services & Catalog (Full CRUD A-to-Z)
  services: Service[];
  addService: (service: Omit<Service, 'id'>) => string;
  updateService: (service: Service) => void;
  deleteService: (serviceId: string) => void;
  updateServicePrice: (serviceId: string, newPrice: number) => void;
  serviceDetailModalService: Service | null;
  openServiceDetail: (service: Service | null) => void;
  closeServiceDetail: () => void;

  // Saved / Favorites
  favoriteServiceIds: string[];
  toggleFavoriteService: (serviceId: string) => void;

  // Cart
  cartItems: CartItem[];
  isCartOpen: boolean;
  cartCount: number;
  cartTotal: number;
  addToCart: (
    service: Service, 
    options?: { 
      packageTier?: 'Standard Support' | 'Express 24h Support' | 'VIP 1-on-1 Mentorship';
      urgencyFee?: number;
      courseName?: string;
      specificNotes?: string;
      customPrice?: number;
    }
  ) => void;
  removeFromCart: (cartItemId: string) => void;
  updateCartItem: (cartItemId: string, updates: Partial<CartItem>) => void;
  clearCart: () => void;
  openCart: () => void;
  closeCart: () => void;

  // Ordering & Checkout
  orderModalOpen: boolean;
  quickOrderService: Service | null;
  openOrderModal: (service?: Service | null) => void;
  closeOrderModal: () => void;
  placeOrder: (orderData: {
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
    attachments?: AttachmentFile[];
  }) => string;
  
  // Order Success & Tracking
  lastPlacedOrder: AcademicOrder | null;
  orderSuccessModalOpen: boolean;
  closeOrderSuccessModal: () => void;
  orders: AcademicOrder[];
  orderTrackerOpen: boolean;
  selectedOrderIdForTracking: string | null;
  openOrderTracker: (orderId?: string) => void;
  closeOrderTracker: () => void;
  recentTrackedIds: string[];
  addRecentTrackedId: (orderId: string) => void;

  // Admin Order & System Management
  updateOrderStatus: (orderId: string, status: AcademicOrder['status'], note?: string) => void;
  assignMentorToOrder: (orderId: string, mentorName: string) => void;
  updateOrderPrice: (orderId: string, newTotal: number) => void;
  deleteOrder: (orderId: string) => void;

  // Mentors (Full CRUD A-to-Z)
  mentors: MentorProfile[];
  registerMentor: (mentorData: Omit<MentorProfile, 'id' | 'rating' | 'completedOrders' | 'activeAssignedOrders'>) => string;
  addMentor: (mentorData: Omit<MentorProfile, 'id' | 'completedOrders' | 'activeAssignedOrders'>) => string;
  updateMentor: (mentor: MentorProfile) => void;
  deleteMentor: (mentorId: string) => void;
  updateMentorStatus: (mentorId: string, status: MentorProfile['status']) => void;

  // Contact Inquiries (A-to-Z Management)
  inquiries: ContactInquiry[];
  submitInquiry: (inquiryData: Omit<ContactInquiry, 'id' | 'submittedAt' | 'status'>) => string;
  updateInquiryStatus: (inquiryId: string, status: ContactInquiry['status']) => void;
  deleteInquiry: (inquiryId: string) => void;

  // Reviews (Full CRUD A-to-Z)
  reviews: Review[];
  writeReviewModalOpen: boolean;
  openWriteReviewModal: () => void;
  closeWriteReviewModal: () => void;
  addCustomerReview: (reviewData: {
    studentName: string;
    university: string;
    department: string;
    serviceTitle: string;
    rating: number;
    gradeOutcome?: string;
    comment: string;
  }) => void;
  addReviewDirect: (review: Omit<Review, 'id' | 'date'>) => string;
  updateReview: (review: Review) => void;
  deleteReview: (reviewId: string) => void;

  // Toast / Feedback
  toastMessage: string | null;
  showToast: (msg: string) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

const STORAGE_KEYS = {
  LANGUAGE: 'kraflyn_lang_v3',
  VIEW: 'kraflyn_view_v3',
  CART: 'kraflyn_cart_v3',
  ORDERS: 'kraflyn_orders_v3',
  REVIEWS: 'kraflyn_reviews_v3',
  USER_PROFILE: 'kraflyn_user_profile_v3',
  SERVICES: 'kraflyn_services_v4',
  MENTORS: 'kraflyn_team_v3',
  INQUIRIES: 'kraflyn_inquiries_v3',
  RECENT_TRACKED: 'kraflyn_recent_tracked_ids_v3',
  FAVORITES: 'kraflyn_favorites_v3',
  PROJECTS: 'kraflyn_projects_v3',
  SETTINGS: 'kraflyn_settings_v3',
};

// Safe JSON parser helper
function safeParse<T>(key: string, fallback: T): T {
  try {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : fallback;
  } catch (err) {
    console.error(`Error reading ${key} from localStorage:`, err);
    return fallback;
  }
}

const VALID_SERVICE_CATEGORIES = new Set([
  'Design Services',
  'Development Services',
  'WordPress Services',
  'Data Analysis'
]);

function sanitizeServicesList(rawList: any[]): Service[] {
  if (!Array.isArray(rawList) || rawList.length === 0) return SERVICES;
  // Keep only services that belong to the 4 digital pillars (exclude legacy academic items)
  const valid = rawList.filter(item => 
    item && 
    typeof item.id === 'string' && 
    typeof item.title === 'string' && 
    VALID_SERVICE_CATEGORIES.has(item.category)
  );

  if (valid.length === 0) return SERVICES;

  // Ensure all base 30 services are present
  const existingIds = new Set(valid.map(s => s.id));
  const missing = SERVICES.filter(s => !existingIds.has(s.id));
  return [...valid, ...missing];
}

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Language State (Default: English 'en', with instant switch to Bengali 'bn')
  const [language, setLanguageState] = useState<Language>(() => {
    const saved = localStorage.getItem(STORAGE_KEYS.LANGUAGE);
    return (saved === 'en' || saved === 'bn') ? saved : 'en';
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    try {
      localStorage.setItem(STORAGE_KEYS.LANGUAGE, lang);
    } catch (e) {
      console.error(e);
    }
  };

  const t = TRANSLATIONS[language];

  // Helper to check if current URL or environment specifies Admin Portal
  const checkIsAdminRoute = (): boolean => {
    if (import.meta.env.VITE_APP_MODE === 'admin') return true;
    if (typeof window === 'undefined') return false;
    const path = window.location.pathname.toLowerCase();
    const hash = window.location.hash.toLowerCase();
    const search = window.location.search.toLowerCase();
    const hostname = window.location.hostname.toLowerCase();
    return (
      hostname.startsWith('admin') ||
      path === '/admin' || 
      path.startsWith('/admin/') || 
      hash === '#admin' || 
      hash === '#/admin' || 
      hash.includes('admin') || 
      search.includes('view=admin') || 
      search.includes('admin=true')
    );
  };

  // View Switcher (Student Web vs Isolated Admin Web)
  const [currentView, setCurrentViewState] = useState<'student' | 'admin'>(() => {
    if (checkIsAdminRoute()) {
      return 'admin';
    }
    const saved = localStorage.getItem(STORAGE_KEYS.VIEW);
    return saved === 'admin' ? 'admin' : 'student';
  });

  const setCurrentView = (view: 'student' | 'admin') => {
    setCurrentViewState(view);
    try {
      localStorage.setItem(STORAGE_KEYS.VIEW, view);
    } catch (e) {
      console.error(e);
    }
    if (typeof window !== 'undefined') {
      if (view === 'admin') {
        if (!window.location.hash.includes('admin') && window.location.pathname !== '/admin') {
          window.location.hash = '#admin';
        }
      } else {
        if (window.location.hash.includes('admin')) {
          history.replaceState(null, '', window.location.pathname + window.location.search);
        }
      }
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Listen for hash & popstate URL changes
  useEffect(() => {
    const handleUrlChange = () => {
      if (checkIsAdminRoute()) {
        setCurrentViewState('admin');
      } else {
        const saved = localStorage.getItem(STORAGE_KEYS.VIEW);
        if (saved !== 'admin') {
          setCurrentViewState('student');
        }
      }
    };

    window.addEventListener('popstate', handleUrlChange);
    window.addEventListener('hashchange', handleUrlChange);
    return () => {
      window.removeEventListener('popstate', handleUrlChange);
      window.removeEventListener('hashchange', handleUrlChange);
    };
  }, []);

  const [activeNavTab, setActiveNavTab] = useState<string>('home');

  // User Profile Cached in LocalStorage
  const [userProfile, setUserProfile] = useState<UserProfile>(() => {
    return safeParse<UserProfile>(STORAGE_KEYS.USER_PROFILE, DEFAULT_USER_PROFILE);
  });

  const updateUserProfile = (updates: Partial<UserProfile>) => {
    setUserProfile(prev => {
      const next = { ...prev, ...updates };
      try {
        localStorage.setItem(STORAGE_KEYS.USER_PROFILE, JSON.stringify(next));
      } catch (e) {
        console.error(e);
      }
      return next;
    });
  };

  // -------------------------------------------------------------
  // PROJECTS / PORTFOLIO SHOWCASE (A-to-Z Admin Management)
  // -------------------------------------------------------------
  const [projects, setProjects] = useState<ProjectItem[]>(() => {
    const cached = safeParse<ProjectItem[]>(STORAGE_KEYS.PROJECTS, []);
    return cached && cached.length > 0 ? cached : INITIAL_PROJECTS;
  });

  const addProject = (projectData: Omit<ProjectItem, 'id' | 'createdAt'>): string => {
    const id = `proj-${Date.now()}`;
    const newProject: ProjectItem = {
      ...projectData,
      id,
      createdAt: new Date().toISOString()
    };
    setProjects(prev => {
      const next = [newProject, ...prev];
      try {
        localStorage.setItem(STORAGE_KEYS.PROJECTS, JSON.stringify(next));
      } catch (e) {
        console.error(e);
      }
      return next;
    });
    // Sync to Cloud Firestore
    saveProjectToFirestore(newProject);
    showToast(language === 'bn' ? `প্রজেক্ট "${newProject.title}" যুক্ত হয়েছে!` : `Project "${newProject.title}" added!`);
    return id;
  };

  const updateProject = (project: ProjectItem) => {
    setProjects(prev => {
      const next = prev.map(p => p.id === project.id ? project : p);
      try {
        localStorage.setItem(STORAGE_KEYS.PROJECTS, JSON.stringify(next));
      } catch (e) {
        console.error(e);
      }
      return next;
    });
    // Sync to Cloud Firestore
    saveProjectToFirestore(project);
    showToast(language === 'bn' ? `প্রজেক্ট "${project.title}" আপডেট হয়েছে!` : `Project "${project.title}" updated!`);
  };

  const deleteProject = (projectId: string) => {
    const target = projects.find(p => p.id === projectId);
    setProjects(prev => {
      const next = prev.filter(p => p.id !== projectId);
      try {
        localStorage.setItem(STORAGE_KEYS.PROJECTS, JSON.stringify(next));
      } catch (e) {
        console.error(e);
      }
      return next;
    });
    // Sync to Cloud Firestore
    deleteProjectFromFirestore(projectId);
    showToast(language === 'bn' ? `প্রজেক্ট মুছে ফেলা হয়েছে!` : `Project deleted!`);
  };

  // -------------------------------------------------------------
  // SITE SETTINGS & ANNOUNCEMENTS (A-to-Z Admin Management)
  // -------------------------------------------------------------
  const [siteSettings, setSiteSettings] = useState<SiteSettings>(() => {
    return safeParse<SiteSettings>(STORAGE_KEYS.SETTINGS, DEFAULT_SITE_SETTINGS);
  });

  const updateSiteSettings = (settingsUpdate: Partial<SiteSettings>) => {
    setSiteSettings(prev => {
      const next: SiteSettings = {
        ...prev,
        ...settingsUpdate,
        notice: settingsUpdate.notice ? { ...prev.notice, ...settingsUpdate.notice } : prev.notice
      };
      try {
        localStorage.setItem(STORAGE_KEYS.SETTINGS, JSON.stringify(next));
      } catch (e) {
        console.error(e);
      }
      // Sync to Cloud Firestore
      saveSiteSettingsToFirestore(next);
      return next;
    });
    showToast(language === 'bn' ? 'সাইট সেটিংস সফলভাবে সেভ হয়েছে!' : 'Site settings saved successfully!');
  };

  // -------------------------------------------------------------
  // SERVICES & CATALOG (Full CRUD A-to-Z)
  // -------------------------------------------------------------
  const [services, setServices] = useState<Service[]>(() => {
    const cached = safeParse<Service[]>(STORAGE_KEYS.SERVICES, []);
    const sanitized = sanitizeServicesList(cached);
    try {
      localStorage.setItem(STORAGE_KEYS.SERVICES, JSON.stringify(sanitized));
    } catch (e) {
      console.error(e);
    }
    return sanitized;
  });

  // Dynamically synchronized bilingual services that reflect live Admin price & service changes
  const bilingualServices = useMemo<BilingualService[]>(() => {
    const bilingualLookup = new Map<string, BilingualService>();
    BILINGUAL_SERVICES.forEach(bs => bilingualLookup.set(bs.id, bs));

    return services.map(service => {
      const existing = bilingualLookup.get(service.id);
      if (existing) {
        return {
          ...existing,
          startingPrice: service.startingPrice,
          typicalTurnaround: service.typicalTurnaround || existing.typicalTurnaround,
          tag: service.tag !== undefined ? service.tag : existing.tag,
          category: service.category,
          title: {
            en: service.title || existing.title.en,
            bn: (service as any).titleBn || existing.title.bn || service.title,
          },
          shortDesc: {
            en: service.shortDesc || existing.shortDesc.en,
            bn: (service as any).shortDescBn || existing.shortDesc.bn || service.shortDesc,
          },
          fullDesc: {
            en: service.fullDesc || existing.fullDesc.en,
            bn: (service as any).fullDescBn || existing.fullDesc.bn || service.fullDesc,
          },
          deliverables: {
            en: service.deliverables || existing.deliverables.en,
            bn: (service as any).deliverablesBn || existing.deliverables.bn || service.deliverables,
          },
          subServices: service.subServices ? service.subServices.map(ss => ({
            id: ss.id,
            price: ss.price,
            turnaround: ss.turnaround,
            title: typeof ss.title === 'object' ? ss.title : { en: ss.title, bn: ss.title },
            deliverables: Array.isArray(ss.deliverables) ? { en: ss.deliverables, bn: ss.deliverables } : (ss.deliverables as any),
            recommendedFor: ss.recommendedFor ? (typeof ss.recommendedFor === 'object' ? ss.recommendedFor : { en: ss.recommendedFor, bn: ss.recommendedFor }) : undefined
          })) : existing.subServices
        };
      }

      // Dynamic custom service added via Admin Panel
      return {
        id: service.id,
        iconName: service.iconName || 'Sparkles',
        category: service.category,
        startingPrice: service.startingPrice,
        typicalTurnaround: service.typicalTurnaround || '2 - 4 Days',
        tag: service.tag,
        title: {
          en: service.title,
          bn: (service as any).titleBn || service.title,
        },
        shortDesc: {
          en: service.shortDesc,
          bn: (service as any).shortDescBn || service.shortDesc,
        },
        fullDesc: {
          en: service.fullDesc,
          bn: (service as any).fullDescBn || service.fullDesc,
        },
        deliverables: {
          en: service.deliverables || [],
          bn: (service as any).deliverablesBn || service.deliverables || [],
        },
        subServices: service.subServices ? service.subServices.map(ss => ({
          id: ss.id,
          price: ss.price,
          turnaround: ss.turnaround,
          title: typeof ss.title === 'object' ? ss.title : { en: ss.title, bn: ss.title },
          deliverables: Array.isArray(ss.deliverables) ? { en: ss.deliverables, bn: ss.deliverables } : (ss.deliverables as any),
          recommendedFor: ss.recommendedFor ? (typeof ss.recommendedFor === 'object' ? ss.recommendedFor : { en: ss.recommendedFor, bn: ss.recommendedFor }) : undefined
        })) : undefined
      };
    });
  }, [services]);

  const addService = (serviceData: Omit<Service, 'id'>): string => {
    const id = `srv-${Date.now()}-${Math.random().toString(36).substr(2, 4)}`;
    const newService: Service = {
      ...serviceData,
      id
    };
    setServices(prev => {
      const next = [newService, ...prev];
      try {
        localStorage.setItem(STORAGE_KEYS.SERVICES, JSON.stringify(next));
      } catch (e) {
        console.error(e);
      }
      return next;
    });
    saveServiceToFirestore(newService);
    showToast(language === 'bn' ? `নতুন সার্ভিস "${newService.title}" যুক্ত হয়েছে!` : `New service "${newService.title}" added!`);
    return id;
  };

  const updateService = (service: Service) => {
    setServices(prev => {
      const next = prev.map(s => s.id === service.id ? service : s);
      try {
        localStorage.setItem(STORAGE_KEYS.SERVICES, JSON.stringify(next));
      } catch (e) {
        console.error(e);
      }
      return next;
    });
    saveServiceToFirestore(service);
    showToast(language === 'bn' ? `সার্ভিস "${service.title}" আপডেট হয়েছে!` : `Service "${service.title}" updated!`);
  };

  const deleteService = (serviceId: string) => {
    setServices(prev => {
      const next = prev.filter(s => s.id !== serviceId);
      try {
        localStorage.setItem(STORAGE_KEYS.SERVICES, JSON.stringify(next));
      } catch (e) {
        console.error(e);
      }
      return next;
    });
    deleteServiceFromFirestore(serviceId);
    showToast(language === 'bn' ? 'সার্ভিস ডিলিট করা হয়েছে!' : 'Service deleted!');
  };

  const updateServicePrice = (serviceId: string, newPrice: number) => {
    setServices(prev => {
      const next = prev.map(s => s.id === serviceId ? { ...s, startingPrice: newPrice } : s);
      const target = next.find(s => s.id === serviceId);
      if (target) saveServiceToFirestore(target);
      try {
        localStorage.setItem(STORAGE_KEYS.SERVICES, JSON.stringify(next));
      } catch (e) {
        console.error(e);
      }
      return next;
    });
  };

  const [serviceDetailModalService, setServiceDetailModalService] = useState<Service | null>(null);

  // Favorites / Saved Services
  const [favoriteServiceIds, setFavoriteServiceIds] = useState<string[]>(() => {
    return safeParse<string[]>(STORAGE_KEYS.FAVORITES, []);
  });

  const toggleFavoriteService = (serviceId: string) => {
    setFavoriteServiceIds(prev => {
      const isFav = prev.includes(serviceId);
      const next = isFav ? prev.filter(id => id !== serviceId) : [...prev, serviceId];
      try {
        localStorage.setItem(STORAGE_KEYS.FAVORITES, JSON.stringify(next));
      } catch (e) {
        console.error(e);
      }
      showToast(
        isFav 
          ? (language === 'bn' ? 'বুকমার্ক থেকে সরানো হয়েছে' : 'Removed from bookmarks')
          : (language === 'bn' ? 'বুকমার্কে যুক্ত করা হয়েছে' : 'Saved to bookmarks')
      );
      return next;
    });
  };

  // Cart State
  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    return safeParse<CartItem[]>(STORAGE_KEYS.CART, []);
  });
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);

  // Orders State
  const [orders, setOrders] = useState<AcademicOrder[]>(() => {
    return safeParse<AcademicOrder[]>(STORAGE_KEYS.ORDERS, INITIAL_ORDERS);
  });

  // Recent Tracked Orders History
  const [recentTrackedIds, setRecentTrackedIds] = useState<string[]>(() => {
    return safeParse<string[]>(STORAGE_KEYS.RECENT_TRACKED, ['KT-ORD-2026-8841', 'KT-ORD-2026-8842']);
  });

  const addRecentTrackedId = (orderId: string) => {
    if (!orderId) return;
    setRecentTrackedIds(prev => {
      const clean = prev.filter(id => id !== orderId);
      const next = [orderId, ...clean].slice(0, 8);
      try {
        localStorage.setItem(STORAGE_KEYS.RECENT_TRACKED, JSON.stringify(next));
      } catch (e) {
        console.error(e);
      }
      return next;
    });
  };

  // Mentors Roster State
  const [mentors, setMentors] = useState<MentorProfile[]>(() => {
    return safeParse<MentorProfile[]>(STORAGE_KEYS.MENTORS, INITIAL_MENTORS);
  });

  const registerMentor = (mentorData: Omit<MentorProfile, 'id' | 'rating' | 'completedOrders' | 'activeAssignedOrders'>): string => {
    const id = `m-${Date.now()}`;
    const newMentor: MentorProfile = {
      ...mentorData,
      id,
      rating: 5.0,
      completedOrders: 0,
      activeAssignedOrders: 0
    };
    setMentors(prev => {
      const next = [newMentor, ...prev];
      try {
        localStorage.setItem(STORAGE_KEYS.MENTORS, JSON.stringify(next));
      } catch (e) {
        console.error(e);
      }
      return next;
    });
    saveMentorToFirestore(newMentor);
    return id;
  };

  const addMentor = (mentorData: Omit<MentorProfile, 'id' | 'completedOrders' | 'activeAssignedOrders'>): string => {
    const id = `m-${Date.now()}`;
    const newMentor: MentorProfile = {
      ...mentorData,
      id,
      completedOrders: 0,
      activeAssignedOrders: 0
    };
    setMentors(prev => {
      const next = [newMentor, ...prev];
      try {
        localStorage.setItem(STORAGE_KEYS.MENTORS, JSON.stringify(next));
      } catch (e) {
        console.error(e);
      }
      return next;
    });
    saveMentorToFirestore(newMentor);
    showToast(language === 'bn' ? `মেন্টর "${newMentor.name}" যুক্ত হয়েছেন!` : `Mentor "${newMentor.name}" added!`);
    return id;
  };

  const updateMentor = (mentor: MentorProfile) => {
    setMentors(prev => {
      const next = prev.map(m => m.id === mentor.id ? mentor : m);
      try {
        localStorage.setItem(STORAGE_KEYS.MENTORS, JSON.stringify(next));
      } catch (e) {
        console.error(e);
      }
      return next;
    });
    saveMentorToFirestore(mentor);
    showToast(language === 'bn' ? `মেন্টর প্রোফাইল আপডেট হয়েছে!` : `Mentor profile updated!`);
  };

  const deleteMentor = (mentorId: string) => {
    setMentors(prev => {
      const next = prev.filter(m => m.id !== mentorId);
      try {
        localStorage.setItem(STORAGE_KEYS.MENTORS, JSON.stringify(next));
      } catch (e) {
        console.error(e);
      }
      return next;
    });
    deleteMentorFromFirestore(mentorId);
    showToast(language === 'bn' ? 'মেন্টর মুছে ফেলা হয়েছে!' : 'Mentor deleted!');
  };

  const updateMentorStatus = (mentorId: string, status: MentorProfile['status']) => {
    setMentors(prev => {
      const next = prev.map(m => m.id === mentorId ? { ...m, status } : m);
      const target = next.find(m => m.id === mentorId);
      if (target) saveMentorToFirestore(target);
      try {
        localStorage.setItem(STORAGE_KEYS.MENTORS, JSON.stringify(next));
      } catch (e) {
        console.error(e);
      }
      return next;
    });
  };

  // Inquiries State
  const [inquiries, setInquiries] = useState<ContactInquiry[]>(() => {
    return safeParse<ContactInquiry[]>(STORAGE_KEYS.INQUIRIES, []);
  });

  const submitInquiry = (inquiryData: Omit<ContactInquiry, 'id' | 'submittedAt' | 'status'>): string => {
    const id = `INQ-${Date.now().toString().slice(-6)}`;
    const newInquiry: ContactInquiry = {
      ...inquiryData,
      id,
      submittedAt: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }) + ' ' + new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      status: 'new'
    };
    setInquiries(prev => {
      const next = [newInquiry, ...prev];
      try {
        localStorage.setItem(STORAGE_KEYS.INQUIRIES, JSON.stringify(next));
      } catch (e) {
        console.error(e);
      }
      return next;
    });
    saveInquiryToFirestore(newInquiry);
    // Also cache basic user info
    updateUserProfile({
      name: inquiryData.name,
      email: inquiryData.email,
      phone: inquiryData.phone
    });
    return id;
  };

  const updateInquiryStatus = (inquiryId: string, status: ContactInquiry['status']) => {
    setInquiries(prev => {
      const next = prev.map(inq => inq.id === inquiryId ? { ...inq, status } : inq);
      const target = next.find(inq => inq.id === inquiryId);
      if (target) saveInquiryToFirestore(target);
      try {
        localStorage.setItem(STORAGE_KEYS.INQUIRIES, JSON.stringify(next));
      } catch (e) {
        console.error(e);
      }
      return next;
    });
    showToast(language === 'bn' ? 'ইনকোয়ারি স্ট্যাটাস আপডেট হয়েছে!' : 'Inquiry status updated!');
  };

  const deleteInquiry = (inquiryId: string) => {
    setInquiries(prev => {
      const next = prev.filter(inq => inq.id !== inquiryId);
      try {
        localStorage.setItem(STORAGE_KEYS.INQUIRIES, JSON.stringify(next));
      } catch (e) {
        console.error(e);
      }
      return next;
    });
    deleteInquiryFromFirestore(inquiryId);
    showToast(language === 'bn' ? 'ইনকোয়ারি ডিলিট করা হয়েছে!' : 'Inquiry deleted!');
  };

  // Order Modals
  const [orderModalOpen, setOrderModalOpen] = useState<boolean>(false);
  const [quickOrderService, setQuickOrderService] = useState<Service | null>(null);
  const [lastPlacedOrder, setLastPlacedOrder] = useState<AcademicOrder | null>(null);
  const [orderSuccessModalOpen, setOrderSuccessModalOpen] = useState<boolean>(false);

  // Order Tracking Modal
  const [orderTrackerOpen, setOrderTrackerOpen] = useState<boolean>(false);
  const [selectedOrderIdForTracking, setSelectedOrderIdForTracking] = useState<string | null>(null);

  // Reviews State
  const [reviews, setReviews] = useState<Review[]>(() => {
    return safeParse<Review[]>(STORAGE_KEYS.REVIEWS, REVIEWS);
  });
  const [writeReviewModalOpen, setWriteReviewModalOpen] = useState<boolean>(false);

  // Toast
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Real-time Cloud Sync from Firebase Firestore
  useEffect(() => {
    // 1. Subscribe to Live Orders from Cloud Firestore
    const unsubscribeOrders = subscribeToOrders((cloudOrders) => {
      if (cloudOrders && cloudOrders.length > 0) {
        setOrders(cloudOrders);
      }
    });

    // 2. Subscribe to Live Reviews from Cloud Firestore
    const unsubscribeReviews = subscribeToReviews((cloudReviews) => {
      if (cloudReviews && cloudReviews.length > 0) {
        setReviews(cloudReviews);
      }
    });

    // 3. Subscribe to Projects
    const unsubscribeProjects = subscribeToProjects((cloudProjects) => {
      if (cloudProjects && cloudProjects.length > 0) {
        setProjects(cloudProjects);
      }
    });

    // 4. Subscribe to Site Settings
    const unsubscribeSettings = subscribeToSiteSettings((cloudSettings) => {
      if (cloudSettings) {
        setSiteSettings(cloudSettings);
      }
    });

    // 5. Subscribe to Mentors
    const unsubscribeMentors = subscribeToMentors((cloudMentors) => {
      if (cloudMentors && cloudMentors.length > 0) {
        setMentors(cloudMentors);
      }
    });

    // 6. Subscribe to Services
    const unsubscribeServices = subscribeToServices((cloudServices) => {
      if (cloudServices && cloudServices.length > 0) {
        setServices(cloudServices);
      }
    });

    // 7. Subscribe to Inquiries
    const unsubscribeInquiries = subscribeToInquiries((cloudInquiries) => {
      if (cloudInquiries && cloudInquiries.length > 0) {
        setInquiries(cloudInquiries);
      }
    });

    return () => {
      unsubscribeOrders();
      unsubscribeReviews();
      unsubscribeProjects();
      unsubscribeSettings();
      unsubscribeMentors();
      unsubscribeServices();
      unsubscribeInquiries();
    };
  }, []);

  // Sync to LocalStorage
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEYS.CART, JSON.stringify(cartItems));
    } catch (e) {
      console.error(e);
    }
  }, [cartItems]);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEYS.ORDERS, JSON.stringify(orders));
    } catch (e) {
      console.error(e);
    }
  }, [orders]);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEYS.REVIEWS, JSON.stringify(reviews));
    } catch (e) {
      console.error(e);
    }
  }, [reviews]);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEYS.PROJECTS, JSON.stringify(projects));
    } catch (e) {
      console.error(e);
    }
  }, [projects]);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEYS.SETTINGS, JSON.stringify(siteSettings));
    } catch (e) {
      console.error(e);
    }
  }, [siteSettings]);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEYS.MENTORS, JSON.stringify(mentors));
    } catch (e) {
      console.error(e);
    }
  }, [mentors]);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEYS.SERVICES, JSON.stringify(services));
    } catch (e) {
      console.error(e);
    }
  }, [services]);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEYS.INQUIRIES, JSON.stringify(inquiries));
    } catch (e) {
      console.error(e);
    }
  }, [inquiries]);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage((current) => (current === msg ? null : current));
    }, 3500);
  };

  // Cart Calculations
  const cartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);
  const cartTotal = cartItems.reduce((acc, item) => acc + item.totalPrice * item.quantity, 0);

  const openCart = () => setIsCartOpen(true);
  const closeCart = () => setIsCartOpen(false);

  const addToCart = (
    service: Service, 
    options?: { 
      packageTier?: 'Standard Support' | 'Express 24h Support' | 'VIP 1-on-1 Mentorship';
      urgencyFee?: number;
      courseName?: string;
      specificNotes?: string;
      customPrice?: number;
    }
  ) => {
    const tier = options?.packageTier || 'Standard Support';
    const urgencyFee = options?.urgencyFee || (tier === 'Express 24h Support' ? 150 : tier === 'VIP 1-on-1 Mentorship' ? 300 : 0);
    const basePrice = options?.customPrice !== undefined ? options.customPrice : service.startingPrice;
    const totalPrice = basePrice + urgencyFee;

    // Check if already in cart
    const existingIndex = cartItems.findIndex(
      item => item.serviceId === service.id && item.packageTier === tier
    );

    if (existingIndex > -1) {
      setCartItems(prev => {
        const next = [...prev];
        next[existingIndex].quantity += 1;
        return next;
      });
      showToast(language === 'bn' ? `"${service.title}" কার্টে আপডেট করা হয়েছে!` : `Updated "${service.title}" in cart!`);
    } else {
      const newItem: CartItem = {
        id: `cart-${Date.now()}-${Math.random().toString(36).substr(2, 5)}`,
        serviceId: service.id,
        serviceTitle: service.title,
        category: service.category,
        basePrice,
        packageTier: tier,
        urgencyFee,
        totalPrice,
        courseName: options?.courseName || '',
        specificNotes: options?.specificNotes || '',
        quantity: 1
      };
      setCartItems(prev => [newItem, ...prev]);
      showToast(language === 'bn' ? `"${service.title}" কার্টে যুক্ত হয়েছে!` : `Added "${service.title}" to cart!`);
    }
  };

  const removeFromCart = (cartItemId: string) => {
    setCartItems(prev => prev.filter(item => item.id !== cartItemId));
    showToast(language === 'bn' ? 'কার্ট থেকে আইটেম সরানো হয়েছে।' : 'Item removed from cart.');
  };

  const updateCartItem = (cartItemId: string, updates: Partial<CartItem>) => {
    setCartItems(prev => prev.map(item => {
      if (item.id === cartItemId) {
        const updated = { ...item, ...updates };
        if (updates.packageTier || updates.urgencyFee !== undefined || updates.basePrice !== undefined) {
          const uFee = updated.urgencyFee || 0;
          updated.totalPrice = updated.basePrice + uFee;
        }
        return updated;
      }
      return item;
    }));
  };

  const clearCart = () => {
    setCartItems([]);
  };

  // Service Details
  const openServiceDetail = (service: Service | null) => {
    setServiceDetailModalService(service);
  };

  const closeServiceDetail = () => {
    setServiceDetailModalService(null);
  };

  // Order Placement
  const openOrderModal = (service?: Service | null) => {
    setQuickOrderService(service || null);
    setIsCartOpen(false);
    setOrderModalOpen(true);
  };

  const closeOrderModal = () => {
    setOrderModalOpen(false);
    setQuickOrderService(null);
  };

  const placeOrder = (orderData: {
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
    attachments?: AttachmentFile[];
  }): string => {
    const today = new Date();
    const dateStr = today.getFullYear().toString().slice(2) + 
                    String(today.getMonth() + 1).padStart(2, '0') + 
                    String(today.getDate()).padStart(2, '0');
    const randomSuffix = Math.floor(1000 + Math.random() * 9000);
    const orderId = `EQ-ORD-${dateStr}-${randomSuffix}`;

    // Update and cache User Profile in localStorage automatically
    updateUserProfile({
      name: orderData.customerName,
      phone: orderData.phone,
      whatsapp: orderData.whatsapp,
      email: orderData.email,
      university: orderData.university,
      department: orderData.department,
      batchOrSemester: orderData.batchOrSemester,
      preferredContact: orderData.preferredContact
    });

    // Items for order
    let orderItems: CartItem[] = [];
    if (quickOrderService) {
      orderItems = [{
        id: `ci-quick-${Date.now()}`,
        serviceId: quickOrderService.id,
        serviceTitle: quickOrderService.title,
        category: quickOrderService.category,
        basePrice: quickOrderService.startingPrice,
        packageTier: 'Standard Support',
        urgencyFee: 0,
        totalPrice: quickOrderService.startingPrice,
        courseName: orderData.courseName,
        quantity: 1
      }];
    } else if (cartItems.length > 0) {
      orderItems = [...cartItems];
    } else {
      orderItems = [{
        id: `ci-custom-${Date.now()}`,
        serviceId: 'custom-digital-solution',
        serviceTitle: 'Custom Digital Solution & Consultation',
        category: 'Development Services',
        basePrice: 500,
        packageTier: 'Standard Support',
        urgencyFee: 0,
        totalPrice: 500,
        courseName: orderData.courseName,
        quantity: 1
      }];
    }

    const totalAmount = orderItems.reduce((sum, item) => sum + item.totalPrice * item.quantity, 0);

    const newOrder: AcademicOrder = {
      id: orderId,
      items: orderItems,
      totalAmount,
      customerName: orderData.customerName,
      phone: orderData.phone,
      whatsapp: orderData.whatsapp || orderData.phone,
      email: orderData.email || '',
      university: orderData.university,
      department: orderData.department,
      batchOrSemester: orderData.batchOrSemester || '',
      courseName: orderData.courseName,
      courseCode: orderData.courseCode || '',
      requirements: orderData.requirements,
      deadline: orderData.deadline,
      preferredContact: orderData.preferredContact,
      attachments: orderData.attachments || [],
      status: 'order_received',
      createdAt: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }) + ' ' + new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      updatedAt: 'Just now',
      notes: [
        'Order registered in Kraflyn Technologies queue.',
        'Technical Lead & Project Architect will connect via WhatsApp shortly.'
      ]
    };

    setOrders(prev => [newOrder, ...prev]);
    setLastPlacedOrder(newOrder);
    addRecentTrackedId(orderId);
    setOrderModalOpen(false);
    setQuickOrderService(null);
    clearCart();
    setOrderSuccessModalOpen(true);

    // Save order asynchronously to Cloud Firestore (cross-platform live sync)
    saveOrderToFirestore(newOrder);

    return orderId;
  };

  const closeOrderSuccessModal = () => {
    setOrderSuccessModalOpen(false);
  };

  const openOrderTracker = (orderId?: string) => {
    if (orderId) {
      addRecentTrackedId(orderId);
      setSelectedOrderIdForTracking(orderId);
    } else {
      setSelectedOrderIdForTracking(null);
    }
    setOrderTrackerOpen(true);
  };

  const closeOrderTracker = () => {
    setOrderTrackerOpen(false);
    setSelectedOrderIdForTracking(null);
  };

  // Admin Operations with Cloud Firestore Sync
  const updateOrderStatus = (orderId: string, status: AcademicOrder['status'], note?: string) => {
    setOrders(prev => prev.map(ord => {
      if (ord.id === orderId) {
        const updatedNotes = note ? [...(ord.notes || []), note] : (ord.notes || []);
        return {
          ...ord,
          status,
          updatedAt: 'Just now',
          notes: updatedNotes
        };
      }
      return ord;
    }));
    // Sync to Cloud Firestore
    updateOrderStatusInFirestore(orderId, status, note);
    showToast(language === 'bn' ? `অর্ডার #${orderId} স্ট্যাটাস আপডেট হয়েছে!` : `Order #${orderId} status updated!`);
  };

  const assignMentorToOrder = (orderId: string, mentorName: string) => {
    setOrders(prev => prev.map(ord => {
      if (ord.id === orderId) {
        return {
          ...ord,
          assignedMentorName: mentorName,
          status: ord.status === 'order_received' ? 'mentor_assigned' : ord.status,
          updatedAt: 'Just now',
          notes: [...(ord.notes || []), `Mentor ${mentorName} assigned to order.`]
        };
      }
      return ord;
    }));
    // Sync to Cloud Firestore
    updateOrderStatusInFirestore(orderId, 'mentor_assigned', `Mentor ${mentorName} assigned`, mentorName);
    showToast(language === 'bn' ? `মেন্টর ${mentorName} সফলভাবে অ্যাসাইন করা হয়েছে!` : `Mentor ${mentorName} assigned!`);
  };

  const updateOrderPrice = (orderId: string, newTotal: number) => {
    const targetOrder = orders.find(o => o.id === orderId);
    const currStatus = targetOrder ? targetOrder.status : 'order_received';
    setOrders(prev => prev.map(ord => {
      if (ord.id === orderId) {
        return {
          ...ord,
          totalAmount: newTotal,
          updatedAt: 'Just now'
        };
      }
      return ord;
    }));
    // Sync to Cloud Firestore
    updateOrderStatusInFirestore(orderId, currStatus, undefined, undefined, newTotal);
    showToast(language === 'bn' ? `অর্ডার মূল্য $${newTotal} তে আপডেট করা হয়েছে!` : `Order price updated to $${newTotal}!`);
  };

  const deleteOrder = (orderId: string) => {
    setOrders(prev => prev.filter(ord => ord.id !== orderId));
    deleteOrderFromFirestore(orderId);
    showToast(language === 'bn' ? `অর্ডার #${orderId} ডিলিট করা হয়েছে!` : `Order #${orderId} deleted!`);
  };

  // Reviews with Cloud Firestore Sync
  const openWriteReviewModal = () => setWriteReviewModalOpen(true);
  const closeWriteReviewModal = () => setWriteReviewModalOpen(false);

  const addCustomerReview = (reviewData: {
    studentName: string;
    university: string;
    department: string;
    serviceTitle: string;
    rating: number;
    gradeOutcome?: string;
    comment: string;
  }) => {
    const newRev: Review = {
      id: `rev-${Date.now()}`,
      studentName: reviewData.studentName,
      university: reviewData.university,
      department: reviewData.department,
      serviceTitle: reviewData.serviceTitle,
      rating: reviewData.rating,
      gradeOutcome: reviewData.gradeOutcome || 'Completed on Time',
      comment: reviewData.comment,
      date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
      verified: true
    };

    setReviews(prev => [newRev, ...prev]);
    setWriteReviewModalOpen(false);
    updateUserProfile({
      name: reviewData.studentName,
      university: reviewData.university,
      department: reviewData.department
    });
    // Save to Firestore
    saveReviewToFirestore(newRev);
    showToast(language === 'bn' ? 'ধন্যবাদ! আপনার মূল্যবান রিভিউ যুক্ত হয়েছে।' : 'Thank you! Your review has been added.');
  };

  const addReviewDirect = (reviewData: Omit<Review, 'id' | 'date'>): string => {
    const id = `rev-${Date.now()}`;
    const newRev: Review = {
      ...reviewData,
      id,
      date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
      verified: reviewData.verified !== undefined ? reviewData.verified : true
    };
    setReviews(prev => [newRev, ...prev]);
    saveReviewToFirestore(newRev);
    showToast(language === 'bn' ? 'রিভিউ যুক্ত হয়েছে!' : 'Review added!');
    return id;
  };

  const updateReview = (review: Review) => {
    setReviews(prev => prev.map(r => r.id === review.id ? review : r));
    saveReviewToFirestore(review);
    showToast(language === 'bn' ? 'রিভিউ আপডেট হয়েছে!' : 'Review updated!');
  };

  const deleteReview = (reviewId: string) => {
    setReviews(prev => prev.filter(r => r.id !== reviewId));
    deleteReviewFromFirestore(reviewId);
    showToast(language === 'bn' ? 'রিভিউ মুছে ফেলা হয়েছে।' : 'Review deleted.');
  };

  return (
    <AppContext.Provider
      value={{
        language,
        setLanguage,
        t,
        bilingualServices,
        currentView,
        setCurrentView,
        activeNavTab,
        setActiveNavTab,
        userProfile,
        updateUserProfile,
        projects,
        addProject,
        updateProject,
        deleteProject,
        siteSettings,
        updateSiteSettings,
        services,
        addService,
        updateService,
        deleteService,
        updateServicePrice,
        serviceDetailModalService,
        openServiceDetail,
        closeServiceDetail,
        favoriteServiceIds,
        toggleFavoriteService,
        cartItems,
        isCartOpen,
        cartCount,
        cartTotal,
        addToCart,
        removeFromCart,
        updateCartItem,
        clearCart,
        openCart,
        closeCart,
        orderModalOpen,
        quickOrderService,
        openOrderModal,
        closeOrderModal,
        placeOrder,
        lastPlacedOrder,
        orderSuccessModalOpen,
        closeOrderSuccessModal,
        orders,
        orderTrackerOpen,
        selectedOrderIdForTracking,
        openOrderTracker,
        closeOrderTracker,
        recentTrackedIds,
        addRecentTrackedId,
        updateOrderStatus,
        assignMentorToOrder,
        updateOrderPrice,
        deleteOrder,
        mentors,
        registerMentor,
        addMentor,
        updateMentor,
        deleteMentor,
        updateMentorStatus,
        inquiries,
        submitInquiry,
        updateInquiryStatus,
        deleteInquiry,
        reviews,
        writeReviewModalOpen,
        openWriteReviewModal,
        closeWriteReviewModal,
        addCustomerReview,
        addReviewDirect,
        updateReview,
        deleteReview,
        toastMessage,
        showToast
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};

