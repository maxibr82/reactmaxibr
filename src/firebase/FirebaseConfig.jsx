import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Tu configuración de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyC6RSQJ82LKEv0_vdkfBZ7ZqGhopFdKkZU",
  authDomain: "reactmaxibr.firebaseapp.com",
  projectId: "reactmaxibr",
  storageBucket: "reactmaxibr.firebasestorage.app",
  messagingSenderId: "621453526313",
  appId: "1:621453526313:web:9f88d0d31bec92e0f06338"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);