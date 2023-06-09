import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  // Add your Firebase configuration object here

  apiKey: "AIzaSyDV1s4GKYIJSuqLi0LDGEzqux9_F5FxROI",
  authDomain: "august-5eadb.firebaseapp.com",
  projectId: "august-5eadb",
  storageBucket: "august-5eadb.appspot.com",
  messagingSenderId: "378653768754",
  appId: "1:378653768754:web:952f484cd67bef04c1902b",
  measurementId: "G-Z5QS7HPRVP"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;