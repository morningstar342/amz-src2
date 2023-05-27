// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBnilAJiW6oqfogfxnW6pFTflp7VTpZRKA",
    authDomain: "amz-2-84908.firebaseapp.com",
    projectId: "amz-2-84908",
    storageBucket: "amz-2-84908.appspot.com",
    messagingSenderId: "713055793273",
    appId: "1:713055793273:web:87b01fe64850ec41cca4a8",
    measurementId: "G-6C6DLZ9MH3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);