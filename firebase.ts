// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAh9JWfOBmrSM-e-iPN_Ers2NsgHWDlV20",
  authDomain: "mimiapp-bfbfe.firebaseapp.com",
  projectId: "mimiapp-bfbfe",
  storageBucket: "mimiapp-bfbfe.firebasestorage.app",
  messagingSenderId: "626073365874",
  appId: "1:626073365874:web:5a1bf2455626cc384741eb",
  measurementId: "G-WJ4170YPNB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);