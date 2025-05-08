// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAILaIjvaJUsny0-QZ8-bhs2N2LRz4WCKA",
  authDomain: "urgenbuddhistart.firebaseapp.com",
  projectId: "urgenbuddhistart",
  storageBucket: "urgenbuddhistart.firebasestorage.app",
  messagingSenderId: "920732157429",
  appId: "1:920732157429:web:bbafc6fc0313fffefa0cbc",
  measurementId: "G-6G5QBBY8RX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);