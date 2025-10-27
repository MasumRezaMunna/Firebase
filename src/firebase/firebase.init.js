// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCrefMM9qWUU7wfhl6iQMKJ1QsY0IatSAc",
  authDomain: "simple-firebase-auth-5efad.firebaseapp.com",
  projectId: "simple-firebase-auth-5efad",
  storageBucket: "simple-firebase-auth-5efad.firebasestorage.app",
  messagingSenderId: "357355073589",
  appId: "1:357355073589:web:bcd6ec5e52c87bf13b817c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);