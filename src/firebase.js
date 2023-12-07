// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyA7EGkiobbeJf1hpGMdgi5V1Jd13i8PBLA",
  authDomain: "disneyplus-clone-fe184.firebaseapp.com",
  projectId: "disneyplus-clone-fe184",
  storageBucket: "disneyplus-clone-fe184.appspot.com",
  messagingSenderId: "321345720152",
  appId: "1:321345720152:web:fb82d1e3aa1df08c1adf2d",
  measurementId: "G-P58CMKLLXV",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default app;
export { db };
