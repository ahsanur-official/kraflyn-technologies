import { 
  collection, 
  doc, 
  setDoc, 
  getDocs, 
  onSnapshot, 
  updateDoc, 
  deleteDoc, 
  query, 
  orderBy,
  where 
} from 'firebase/firestore';
import { db } from './firebase';
import { AcademicOrder, Review, ContactInquiry, MentorProfile, Service, ProjectItem, SiteSettings } from '../types';

// Collections
const ORDERS_COLLECTION = 'orders';
const REVIEWS_COLLECTION = 'reviews';
const PROJECTS_COLLECTION = 'projects';
const SERVICES_COLLECTION = 'services';
const SETTINGS_COLLECTION = 'settings';
const INQUIRIES_COLLECTION = 'inquiries';
const MENTORS_COLLECTION = 'mentors';

/**
 * Real-time listener for all Academic Orders
 */
export const subscribeToOrders = (callback: (orders: AcademicOrder[]) => void) => {
  try {
    const q = query(collection(db, ORDERS_COLLECTION), orderBy('createdAt', 'desc'));
    return onSnapshot(q, (snapshot) => {
      const orders: AcademicOrder[] = [];
      snapshot.forEach((docSnap) => {
        orders.push({ ...(docSnap.data() as AcademicOrder), id: docSnap.id });
      });
      callback(orders);
    }, (error) => {
      console.warn('Firestore orders subscription notice:', error.message);
    });
  } catch (error) {
    console.error('Error creating orders subscription:', error);
    return () => {};
  }
};

/**
 * Save / Create an order in Cloud Firestore
 */
export const saveOrderToFirestore = async (order: AcademicOrder): Promise<void> => {
  try {
    const docRef = doc(db, ORDERS_COLLECTION, order.id);
    await setDoc(docRef, {
      ...order,
      timestamp: Date.now()
    }, { merge: true });
  } catch (error) {
    console.error('Failed to save order to Firestore:', error);
  }
};

/**
 * Update Order status in Firestore
 */
export const updateOrderStatusInFirestore = async (
  orderId: string, 
  status: AcademicOrder['status'], 
  note?: string,
  assignedMentorName?: string,
  newTotal?: number
): Promise<void> => {
  try {
    const docRef = doc(db, ORDERS_COLLECTION, orderId);
    const updates: Record<string, any> = {
      status,
      updatedAt: 'Just now',
      lastModifiedTimestamp: Date.now()
    };
    if (assignedMentorName) {
      updates.assignedMentorName = assignedMentorName;
    }
    if (newTotal !== undefined) {
      updates.totalAmount = newTotal;
    }
    await updateDoc(docRef, updates);
  } catch (error) {
    console.error(`Failed to update order ${orderId} in Firestore:`, error);
  }
};

/**
 * Delete Order from Firestore
 */
export const deleteOrderFromFirestore = async (orderId: string): Promise<void> => {
  try {
    const docRef = doc(db, ORDERS_COLLECTION, orderId);
    await deleteDoc(docRef);
  } catch (error) {
    console.error(`Failed to delete order ${orderId} in Firestore:`, error);
  }
};

/**
 * Real-time listener for Reviews
 */
export const subscribeToReviews = (callback: (reviews: Review[]) => void) => {
  try {
    const q = query(collection(db, REVIEWS_COLLECTION));
    return onSnapshot(q, (snapshot) => {
      const reviews: Review[] = [];
      snapshot.forEach((docSnap) => {
        reviews.push({ ...(docSnap.data() as Review), id: docSnap.id });
      });
      callback(reviews);
    }, (error) => {
      console.warn('Firestore reviews subscription notice:', error.message);
    });
  } catch (error) {
    console.error('Error creating reviews subscription:', error);
    return () => {};
  }
};

/**
 * Save review to Firestore
 */
export const saveReviewToFirestore = async (review: Review): Promise<void> => {
  try {
    const docRef = doc(db, REVIEWS_COLLECTION, review.id);
    await setDoc(docRef, review, { merge: true });
  } catch (error) {
    console.error('Failed to save review to Firestore:', error);
  }
};

/**
 * Delete review from Firestore
 */
export const deleteReviewFromFirestore = async (reviewId: string): Promise<void> => {
  try {
    const docRef = doc(db, REVIEWS_COLLECTION, reviewId);
    await deleteDoc(docRef);
  } catch (error) {
    console.error('Failed to delete review from Firestore:', error);
  }
};

/**
 * Real-time listener for Projects / Portfolio Showcase
 */
export const subscribeToProjects = (callback: (projects: ProjectItem[]) => void) => {
  try {
    const q = query(collection(db, PROJECTS_COLLECTION));
    return onSnapshot(q, (snapshot) => {
      const projects: ProjectItem[] = [];
      snapshot.forEach((docSnap) => {
        projects.push({ ...(docSnap.data() as ProjectItem), id: docSnap.id });
      });
      callback(projects);
    }, (error) => {
      console.warn('Firestore projects subscription notice:', error.message);
    });
  } catch (error) {
    console.error('Error creating projects subscription:', error);
    return () => {};
  }
};

/**
 * Save project to Firestore
 */
export const saveProjectToFirestore = async (project: ProjectItem): Promise<void> => {
  try {
    const docRef = doc(db, PROJECTS_COLLECTION, project.id);
    await setDoc(docRef, {
      ...project,
      lastModified: Date.now()
    }, { merge: true });
  } catch (error) {
    console.error('Failed to save project to Firestore:', error);
  }
};

/**
 * Delete project from Firestore
 */
export const deleteProjectFromFirestore = async (projectId: string): Promise<void> => {
  try {
    const docRef = doc(db, PROJECTS_COLLECTION, projectId);
    await deleteDoc(docRef);
  } catch (error) {
    console.error('Failed to delete project from Firestore:', error);
  }
};

/**
 * Real-time listener for Site Settings
 */
export const subscribeToSiteSettings = (callback: (settings: SiteSettings) => void) => {
  try {
    const docRef = doc(db, SETTINGS_COLLECTION, 'global_config');
    return onSnapshot(docRef, (docSnap) => {
      if (docSnap.exists()) {
        callback(docSnap.data() as SiteSettings);
      }
    }, (error) => {
      console.warn('Firestore settings subscription notice:', error.message);
    });
  } catch (error) {
    console.error('Error creating settings subscription:', error);
    return () => {};
  }
};

/**
 * Save Site Settings to Firestore
 */
export const saveSiteSettingsToFirestore = async (settings: SiteSettings): Promise<void> => {
  try {
    const docRef = doc(db, SETTINGS_COLLECTION, 'global_config');
    await setDoc(docRef, settings, { merge: true });
  } catch (error) {
    console.error('Failed to save settings to Firestore:', error);
  }
};

/**
 * Real-time listener for Mentors
 */
export const subscribeToMentors = (callback: (mentors: MentorProfile[]) => void) => {
  try {
    const q = query(collection(db, MENTORS_COLLECTION));
    return onSnapshot(q, (snapshot) => {
      const mentors: MentorProfile[] = [];
      snapshot.forEach((docSnap) => {
        mentors.push({ ...(docSnap.data() as MentorProfile), id: docSnap.id });
      });
      callback(mentors);
    }, (error) => {
      console.warn('Firestore mentors subscription notice:', error.message);
    });
  } catch (error) {
    console.error('Error creating mentors subscription:', error);
    return () => {};
  }
};

/**
 * Save Mentor to Firestore
 */
export const saveMentorToFirestore = async (mentor: MentorProfile): Promise<void> => {
  try {
    const docRef = doc(db, MENTORS_COLLECTION, mentor.id);
    await setDoc(docRef, mentor, { merge: true });
  } catch (error) {
    console.error('Failed to save mentor to Firestore:', error);
  }
};

/**
 * Delete Mentor from Firestore
 */
export const deleteMentorFromFirestore = async (mentorId: string): Promise<void> => {
  try {
    const docRef = doc(db, MENTORS_COLLECTION, mentorId);
    await deleteDoc(docRef);
  } catch (error) {
    console.error('Failed to delete mentor from Firestore:', error);
  }
};

/**
 * Real-time listener for Services
 */
export const subscribeToServices = (callback: (services: Service[]) => void) => {
  try {
    const q = query(collection(db, SERVICES_COLLECTION));
    return onSnapshot(q, (snapshot) => {
      const services: Service[] = [];
      snapshot.forEach((docSnap) => {
        services.push({ ...(docSnap.data() as Service), id: docSnap.id });
      });
      callback(services);
    }, (error) => {
      console.warn('Firestore services subscription notice:', error.message);
    });
  } catch (error) {
    console.error('Error creating services subscription:', error);
    return () => {};
  }
};

/**
 * Save Service to Firestore
 */
export const saveServiceToFirestore = async (service: Service): Promise<void> => {
  try {
    const docRef = doc(db, SERVICES_COLLECTION, service.id);
    await setDoc(docRef, service, { merge: true });
  } catch (error) {
    console.error('Failed to save service to Firestore:', error);
  }
};

/**
 * Delete Service from Firestore
 */
export const deleteServiceFromFirestore = async (serviceId: string): Promise<void> => {
  try {
    const docRef = doc(db, SERVICES_COLLECTION, serviceId);
    await deleteDoc(docRef);
  } catch (error) {
    console.error('Failed to delete service from Firestore:', error);
  }
};

/**
 * Real-time listener for Contact Inquiries
 */
export const subscribeToInquiries = (callback: (inquiries: ContactInquiry[]) => void) => {
  try {
    const q = query(collection(db, INQUIRIES_COLLECTION));
    return onSnapshot(q, (snapshot) => {
      const inquiries: ContactInquiry[] = [];
      snapshot.forEach((docSnap) => {
        inquiries.push({ ...(docSnap.data() as ContactInquiry), id: docSnap.id });
      });
      callback(inquiries);
    }, (error) => {
      console.warn('Firestore inquiries subscription notice:', error.message);
    });
  } catch (error) {
    console.error('Error creating inquiries subscription:', error);
    return () => {};
  }
};

/**
 * Save Inquiry to Firestore
 */
export const saveInquiryToFirestore = async (inquiry: ContactInquiry): Promise<void> => {
  try {
    const docRef = doc(db, INQUIRIES_COLLECTION, inquiry.id);
    await setDoc(docRef, inquiry, { merge: true });
  } catch (error) {
    console.error('Failed to save inquiry to Firestore:', error);
  }
};

/**
 * Delete Inquiry from Firestore
 */
export const deleteInquiryFromFirestore = async (inquiryId: string): Promise<void> => {
  try {
    const docRef = doc(db, INQUIRIES_COLLECTION, inquiryId);
    await deleteDoc(docRef);
  } catch (error) {
    console.error('Failed to delete inquiry from Firestore:', error);
  }
};
