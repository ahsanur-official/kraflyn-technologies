import React, { createContext, useContext, useState, useEffect } from 'react';
import { 
  Service, 
  Review, 
  CartItem, 
  AcademicOrder, 
  AttachmentFile,
  NotificationItem
} from '../types';
import { 
  SERVICES, 
  REVIEWS, 
  INITIAL_ORDERS 
} from '../data/mockData';

interface AppContextType {
  // Navigation
  activeNavTab: string;
  setActiveNavTab: (tab: string) => void;

  // Services
  services: Service[];
  serviceDetailModalService: Service | null;
  openServiceDetail: (service: Service | null) => void;
  closeServiceDetail: () => void;

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

  // Toast / Feedback
  toastMessage: string | null;
  showToast: (msg: string) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

const STORAGE_KEYS = {
  CART: 'eduquest_cart_v2',
  ORDERS: 'eduquest_orders_v2',
  REVIEWS: 'eduquest_reviews_v2',
};

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [activeNavTab, setActiveNavTab] = useState<string>('home');
  const [services] = useState<Service[]>(SERVICES);
  const [serviceDetailModalService, setServiceDetailModalService] = useState<Service | null>(null);

  // Cart State
  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    const saved = localStorage.getItem(STORAGE_KEYS.CART);
    if (saved) {
      try { return JSON.parse(saved); } catch (e) { console.error(e); }
    }
    return [];
  });
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);

  // Orders State
  const [orders, setOrders] = useState<AcademicOrder[]>(() => {
    const saved = localStorage.getItem(STORAGE_KEYS.ORDERS);
    if (saved) {
      try { return JSON.parse(saved); } catch (e) { console.error(e); }
    }
    return INITIAL_ORDERS;
  });

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
    const saved = localStorage.getItem(STORAGE_KEYS.REVIEWS);
    if (saved) {
      try { return JSON.parse(saved); } catch (e) { console.error(e); }
    }
    return REVIEWS;
  });
  const [writeReviewModalOpen, setWriteReviewModalOpen] = useState<boolean>(false);

  // Toast
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Sync to LocalStorage
  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.CART, JSON.stringify(cartItems));
  }, [cartItems]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.ORDERS, JSON.stringify(orders));
  }, [orders]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.REVIEWS, JSON.stringify(reviews));
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
      showToast(`Updated "${service.title}" in your support cart!`);
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
      showToast(`Added "${service.title}" to your cart!`);
    }
  };

  const removeFromCart = (cartItemId: string) => {
    setCartItems(prev => prev.filter(item => item.id !== cartItemId));
    showToast('Removed item from cart.');
  };

  const updateCartItem = (cartItemId: string, updates: Partial<CartItem>) => {
    setCartItems(prev => prev.map(item => {
      if (item.id === cartItemId) {
        const updated = { ...item, ...updates };
        // Recalculate price if tier or fees change
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
      // General custom order
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
        'Order registered in Edu Quest queue.',
        'Academic Coordinator will contact via WhatsApp shortly.'
      ]
    };

    setOrders(prev => [newOrder, ...prev]);
    setLastPlacedOrder(newOrder);
    setOrderModalOpen(false);
    setQuickOrderService(null);
    clearCart();
    setOrderSuccessModalOpen(true);

    return orderId;
  };

  const closeOrderSuccessModal = () => {
    setOrderSuccessModalOpen(false);
  };

  const openOrderTracker = (orderId?: string) => {
    setSelectedOrderIdForTracking(orderId || null);
    setOrderTrackerOpen(true);
  };

  const closeOrderTracker = () => {
    setOrderTrackerOpen(false);
    setSelectedOrderIdForTracking(null);
  };

  // Reviews
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
    showToast('ধন্যবাদ! আপনার মূল্যবান রিভিউ যুক্ত হয়েছে।');
  };

  return (
    <AppContext.Provider
      value={{
        activeNavTab,
        setActiveNavTab,
        services,
        serviceDetailModalService,
        openServiceDetail,
        closeServiceDetail,
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
        reviews,
        writeReviewModalOpen,
        openWriteReviewModal,
        closeWriteReviewModal,
        addCustomerReview,
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
