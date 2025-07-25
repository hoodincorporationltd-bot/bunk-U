// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCwk--JN91Qu4clLwq-7oZXNus3NwQXcrw",
  authDomain: "bunk-u.firebaseapp.com",
  projectId: "bunk-u",
  storageBucket: "bunk-u.firebasestorage.app",
  messagingSenderId: "1093144919119",
  appId: "1:1093144919119:web:1f7a82803ff1300143be3a",
  measurementId: "G-44B7FLLXN2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);