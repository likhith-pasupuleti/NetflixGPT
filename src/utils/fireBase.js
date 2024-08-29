// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCm70CfbU0KbQ3qomChppoVQqN4qpdOlNM",
  authDomain: "netflixgpt-117ea.firebaseapp.com",
  projectId: "netflixgpt-117ea",
  storageBucket: "netflixgpt-117ea.appspot.com",
  messagingSenderId: "154107261517",
  appId: "1:154107261517:web:6382bef686fd587e5ae204",
  measurementId: "G-8E4QFN5RHE",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
