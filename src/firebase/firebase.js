import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyD79oEKyMkfgGUKPfzrF00YJHYOzWsYC9s",
  authDomain: "metal-legends.firebaseapp.com",
  databaseURL: "https://metal-legends-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "metal-legends",
  storageBucket: "metal-legends.firebasestorage.app",
  messagingSenderId: "584914260726",
  appId: "1:584914260726:web:fd0c7b22025551ee0b92d7"
};

const app = initializeApp(firebaseConfig);
export const database = getDatabase(app);