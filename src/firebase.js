// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCmI5T6l-Ze-IRbZQdHWPmvam-g-ZHbIVQ",
  authDomain: "tracker-13441.firebaseapp.com",
  projectId: "tracker-13441",
  storageBucket: "tracker-13441.appspot.com",
  messagingSenderId: "511926998265",
  appId: "1:511926998265:web:22781098d42ad4c9edfe28"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
