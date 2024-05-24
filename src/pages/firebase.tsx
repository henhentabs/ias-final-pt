// src/firebase.tsx
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBjT0TTWyhc7y8LTIZaWRkUJshC0tRPYeE",
  authDomain: "final-pt-f3af7.firebaseapp.com",
  projectId: "final-pt-f3af7",
  storageBucket: "final-pt-f3af7.appspot.com",
  messagingSenderId: "1010079629577",
  appId: "1:1010079629577:web:ca70877e6bc5c2bb5c53d8",
  measurementId: "G-WPHMHXCSKW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app); // Initialize Authentication
const db = getFirestore(app); // Initialize Firestore

export { auth, db }; // Export Auth and Firestore instances
