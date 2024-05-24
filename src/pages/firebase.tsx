// src/firebase.tsx
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAMxYa2Gv6Pz_kUNXdzzHGTvPKuZQzHPcE",
  authDomain: "final-pt-c32da.firebaseapp.com",
  projectId: "final-pt-c32da",
  storageBucket: "final-pt-c32da.appspot.com",
  messagingSenderId: "581550682323",
  appId: "1:581550682323:web:d07de780cf6264279b2426",
  measurementId: "G-Z614HZ69EK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app); // Initialize Authentication
const db = getFirestore(app); // Initialize Firestore

export { auth, db }; // Export Auth and Firestore instances
