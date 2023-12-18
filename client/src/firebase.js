// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-architecture.firebaseapp.com",
  projectId: "mern-architecture",
  storageBucket: "mern-architecture.appspot.com",
  messagingSenderId: "759993435066",
  appId: "1:759993435066:web:d903b6d7c0bab3b2289383"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);