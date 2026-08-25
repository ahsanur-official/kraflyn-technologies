import React, { createContext, useContext, useState, useEffect } from 'react';
import { 
  Service, 
  Review, 
  CartItem, 
  AcademicOrder, 
  AttachmentFile,
  NotificationItem,
  UserProfile,
  ContactInquiry,
  MentorProfile
} from '../types';
import { 
  SERVICES, 
  REVIEWS, 
  INITIAL_ORDERS 
} from '../data/mockData';
import { 
  Language, 
  TRANSLATIONS, 
  TranslationDictionary,
  BILINGUAL_SERVICES 
} from '../data/translations';
import { 
  subscribeToOrders, 
  saveOrderToFirestore, 
  updateOrderStatusInFirestore, 
  deleteOrderFromFirestore,
  subscribeToReviews,
  saveReviewToFirestore,
  deleteReviewFromFirestore
} from '../lib/firestoreService';

export const INITIAL_MENTORS: MentorProfile[] = [
  {
    id: 'm-1',
    name: 'Engr. Tanvir Ahmed',
    institution: 'BUET (CSE 17)',
    degree: 'B.Sc in Computer Science & Engineering',
    specialization: ['Data Structures', 'Algorithms', 'Web & Mobile Systems', 'C/C++/Java'],
    activeAssignedOrders: 3,
    completedOrders: 48,
    rating: 4.9,
    contactPhone: '+880 1711-000111',
    status: 'available'
  },
  {
    id: 'm-2',
    name: 'Dr. Shahriar Hasan',
    institution: 'Dhaka University (Applied Statistics & DS)',
    degree: 'M.Sc & Ph.D in Applied Statistics',
    specialization: ['Research Methodology', 'SPSS/R/Stata Analysis', 'Thesis Guidance', 'Econometrics'],
    activeAssignedOrders: 2,
    completedOrders: 62,
    rating: 5.0,
    contactPhone: '+880 1711-000222',
    status: 'available'
  },
  {
    id: 'm-3',
    name: 'Nusrat Jahan, M.Eng',
    institution: 'SUST (SWE)',
    degree: 'B.Sc in Software Engineering',
    specialization: ['Python / AI / ML', 'Database (SQL/NoSQL)', 'Fullstack Projects', 'React/Node'],
    activeAssignedOrders: 4,
    completedOrders: 39,
    rating: 4.8,
    contactPhone: '+880 1711-000333',
    status: 'busy'
  },
  {
    id: 'm-4',
    name: 'Arif Chowdhury, MBA',
    institution: 'IBA, University of Dhaka',
    degree: 'MBA in Finance & Supply Chain',
    specialization: ['Business Case Studies', 'Financial Modeling', 'Report Writing', 'Economics'],
    activeAssignedOrders: 1,
    completedOrders: 55,
    rating: 4.9,
    contactPhone: '+880 1711-000444',
    status: 'available'
  }
];

export const DEFAULT_USER_PROFILE: UserProfile = {
  name: '',
  phone: '',
  whatsapp: '',
  email: '',
  university: 'Pundra University of Science and Technology (PUB)',
  customUni: '',
  department: 'Computer Science & Engineering (CSE)',
  batchOrSemester: '',
  preferredContact: 'WhatsApp'
};

interface AppContextType {
  // Language & i18n
  language: Language;
  setLanguage: (lang: Language) => void;
  t: TranslationDictionary;
  bilingualServices: typeof BILINGUAL_SERVICES;

  // View Switcher (Student Web vs Admin Web)
  currentView: 'student' | 'admin';
  setCurrentView: (view: 'student' | 'admin') => void;

  // Navigation within Student Web
  activeNavTab: string;
  setActiveNavTab: (tab: string) => void;

  // User Profile Cached in LocalStorage
  userProfile: UserProfile;
  updateUserProfile: (profile: Partial<UserProfile>) => void;

  // Services & Catalog
  services: Service[];
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

  // Mentors
  mentors: MentorProfile[];
  registerMentor: (mentorData: Omit<MentorProfile, 'id' | 'rating' | 'completedOrders' | 'activeAssignedOrders'>) => string;
  updateMentorStatus: (mentorId: string, status: MentorProfile['status']) => void;

  // Contact Inquiries
  inquiries: ContactInquiry[];
  submitInquiry: (inquiryData: Omit<ContactInquiry, 'id' | 'submittedAt' | 'status'>) => string;

  // Reviews
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
  deleteReview: (reviewId: string) => void;

  // Toast / Feedback
  toastMessage: string | null;
  showToast: (msg: string) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

const STORAGE_KEYS = {
  LANGUAGE: 'eduquest_lang_v2',
  VIEW: 'eduquest_view_v2',
  CART: 'eduquest_cart_v2',
  ORDERS: 'eduquest_orders_v2',
  REVIEWS: 'eduquest_reviews_v2',
  USER_PROFILE: 'eduquest_user_profile_v2',
  SERVICES: 'eduquest_services_v2',
  MENTORS: 'eduquest_mentors_v2',
  INQUIRIES: 'eduquest_inquiries_v2',
  RECENT_TRACKED: 'eduquest_recent_tracked_ids_v2',
  FAVORITES: 'eduquest_favorites_v2',
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

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Language State
  const [language, setLanguageState] = useState<Language>(() => {
    const saved = localStorage.getItem(STORAGE_KEYS.LANGUAGE);
    return (saved === 'en' || saved === 'bn') ? saved : 'bn';
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
    // Check environment variable (used for separate Netlify deployment: VITE_APP_MODE=admin)
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

  // Services Catalog State with LocalStorage Persistence & Auto-merging of new services
  const [services, setServices] = useState<Service[]>(() => {
    const cached = safeParse<Service[]>(STORAGE_KEYS.SERVICES, []);
    if (!cached || cached.length === 0) return SERVICES;
    
    // Ensure all default services (e.g. figma-design, wordpress-development, data-analysis) exist
    const existingIds = new Set(cached.map(s => s.id));
    const missing = SERVICES.filter(s => !existingIds.has(s.id));
    if (missing.length > 0) {
      const merged = [...cached, ...missing];
      try {
        localStorage.setItem(STORAGE_KEYS.SERVICES, JSON.stringify(merged));
      } catch (e) {
        console.error(e);
      }
      return merged;
    }
    return cached;
  });

  const updateServicePrice = (serviceId: string, newPrice: number) => {
    setServices(prev => {
      const next = prev.map(s => s.id === serviceId ? { ...s, startingPrice: newPrice } : s);
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
    return safeParse<string[]>(STORAGE_KEYS.RECENT_TRACKED, ['EQ-ORD-2608-8841', 'EQ-ORD-2608-4192']);
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
    return id;
  };

  const updateMentorStatus = (mentorId: string, status: MentorProfile['status']) => {
    setMentors(prev => {
      const next = prev.map(m => m.id === mentorId ? { ...m, status } : m);
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
    // Also cache basic user info
    updateUserProfile({
      name: inquiryData.name,
      email: inquiryData.email,
      phone: inquiryData.phone
    });
    return id;
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

    return () => {
      unsubscribeOrders();
      unsubscribeReviews();
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
    const urgencyFee = options?.urgencyFee || (tier === 'Express 24h Support' ? 200 : tier === 'VIP 1-on-1 Mentorship' ? 500 : 0);
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
        serviceId: 'custom-academic-support',
        serviceTitle: 'Custom Academic Support',
        category: 'Academic Support',
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
        'Academic Coordinator will contact via WhatsApp shortly.'
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
    showToast(language === 'bn' ? `অর্ডার মূল্য ৳${newTotal} তে আপডেট করা হয়েছে!` : `Order price updated to ৳${newTotal}!`);
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
        bilingualServices: BILINGUAL_SERVICES,
        currentView,
        setCurrentView,
        activeNavTab,
        setActiveNavTab,
        userProfile,
        updateUserProfile,
        services,
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
        updateMentorStatus,
        inquiries,
        submitInquiry,
        reviews,
        writeReviewModalOpen,
        openWriteReviewModal,
        closeWriteReviewModal,
        addCustomerReview,
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
