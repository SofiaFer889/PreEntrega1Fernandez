import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDDR7gYDHNCPiclBuErnxnXVZLVbEwbKyU",
  authDomain: "tienda-d40f5.firebaseapp.com",
  projectId: "tienda-d40f5",
  storageBucket: "tienda-d40f5.appspot.com",
  messagingSenderId: "250107142582",
  appId: "1:250107142582:web:69dc10ddecfb808150a117"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);