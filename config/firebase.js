// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider, GithubAuthProvider } from "firebase/auth";
import { getFirestore } from 'firebase/firestore'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDPVsJ4g1dzFOK1a6wYUU53FXCc1BQWwmE",
  authDomain: "fire-src1.firebaseapp.com",
  projectId: "fire-src1",
  storageBucket: "fire-src1.appspot.com",
  messagingSenderId: "980136207371",
  appId: "1:980136207371:web:5e6b46d7fa1baef534d30e",
  measurementId: "G-T2M0LJTCC8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = app.name && typeof window !== 'undefined' ? getAnalytics(app) : null;

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const db = getFirestore(app);

export { auth, analytics, googleProvider, db }