import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyClZ4vbfNnWPQi6uTwbJH_6d1TRM_OoBqE",
  authDomain: "deneme-a4c1e.firebaseapp.com",
  projectId: "deneme-a4c1e",
  storageBucket: "deneme-a4c1e.firebasestorage.app",
  messagingSenderId: "582311785485",
  appId: "1:582311785485:web:42c688aa9ca5de4bead144"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

console.log("Firebase bağlantısı başarılı.");
