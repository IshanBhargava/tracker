// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBkzqFbqkjbS8rLACDKPjZ5UFei6Mk-SME",
  authDomain: "test-proj-fe929.firebaseapp.com",
  projectId: "test-proj-fe929",
  storageBucket: "test-proj-fe929.appspot.com",
  messagingSenderId: "446576905670",
  appId: "1:446576905670:web:c1946c8be921c3b49736c7",
  measurementId: "G-7KVPQBWYY8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
