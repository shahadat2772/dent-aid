// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA85m8m8lKQVv0Q9NA2dO-defasmtF0teY",
  authDomain: "dentaid-bc9ec.firebaseapp.com",
  projectId: "dentaid-bc9ec",
  storageBucket: "dentaid-bc9ec.appspot.com",
  messagingSenderId: "203246152577",
  appId: "1:203246152577:web:0e3fe693e34641ed931680",
  measurementId: "G-D77ELM59C8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);
