import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  "projectId": "peliculas-22804",
  "appId": "1:721496642600:web:45c66fbcbe0616a68a911d",
  "storageBucket": "peliculas-22804.appspot.com",
  "locationId": "us-central",
  "apiKey": "AIzaSyAEEtPpBdXKzuDbLVijlbS8hCNAXHcxV0o",
  "authDomain": "peliculas-22804.firebaseapp.com",
  "messagingSenderId": "721496642600"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);