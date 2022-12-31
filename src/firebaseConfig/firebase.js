import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDDgPrhQp_iBzZRA9eqC5JVDmZAIaU5rW4",
  authDomain: "movies-2fec4.firebaseapp.com",
  projectId: "movies-2fec4",
  storageBucket: "movies-2fec4.appspot.com",
  messagingSenderId: "208095264051",
  appId: "1:208095264051:web:826e2a83d579f123629246",
  measurementId: "G-CR1TZV41BC"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);