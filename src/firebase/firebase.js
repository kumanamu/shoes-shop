// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCdxrwfcLwUAIObbof-FuWNplWZHeM5b1o",
  authDomain: "react-shop-app-868cc.firebaseapp.com",
  projectId: "react-shop-app-868cc",
  storageBucket: "react-shop-app-868cc.firebasestorage.app",
  messagingSenderId: "869712781489",
  appId: "1:869712781489:web:319d3a21b83cb49c338290",
  measurementId: "G-7ZRWNHJWR8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);