// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBdwlOo_pv-ZlDnRROYsi58hkgeIpw5YPk",
  authDomain: "ifund-ecommerce.firebaseapp.com",
  projectId: "ifund-ecommerce",
  storageBucket: "ifund-ecommerce.appspot.com",
  messagingSenderId: "60807605044",
  appId: "1:60807605044:web:0d64e29b79f101af7b9361",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

// https://firebase.google.com/docs/firestore/quickstart?authuser=0&hl=en#web-modular-api
