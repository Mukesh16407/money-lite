
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCra04TmdU-LWpXvW65SmSdktykIBhXpI4",
  authDomain: "money-lite-56b2c.firebaseapp.com",
  projectId: "money-lite-56b2c",
  storageBucket: "money-lite-56b2c.appspot.com",
  messagingSenderId: "902860937055",
  appId: "1:902860937055:web:1d338bf5219b06841248ea",
  measurementId: "G-T7S46GXL7T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const fireDb = getFirestore(app);

export { fireDb, app };