import { initializeApp } from "firebase/app";
import { authentication } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD_csb12NMusiY36GiELVTjCJm1XKp4nBs",
  authDomain: "authentication-practice-c5a1f.firebaseapp.com",
  projectId: "authentication-practice-c5a1f",
  storageBucket: "authentication-practice-c5a1f.appspot.com",
  messagingSenderId: "276023611911",
  appId: "1:276023611911:web:20da52981c3dc588b9d0a2",
  measurementId: "G-6HYZHP2W3S"
};

const app = initializeApp(firebaseConfig);