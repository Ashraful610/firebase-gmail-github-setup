// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDUh9v3-xKOGUaUGc31H-wRSt3WDSuDD9M",
  authDomain: "practise-firebase-setup.firebaseapp.com",
  projectId: "practise-firebase-setup",
  storageBucket: "practise-firebase-setup.appspot.com",
  messagingSenderId: "1039081765237",
  appId: "1:1039081765237:web:0f9a403d0821a3f29a7b3c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app