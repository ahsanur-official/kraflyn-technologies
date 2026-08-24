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
import { AcademicOrder, Review, ContactInquiry, MentorProfile, Service } from '../types';

// Collections
const ORDERS_COLLECTION = 'orders';
const REVIEWS_COLLECTION = 'reviews';
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
