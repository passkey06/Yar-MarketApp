import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import {
  getFirestore,
  collection,
  getDocs
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

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

async function urunleriGetir() {
  const products = document.getElementById("products");

  try {
    const snapshot = await getDocs(collection(db, "urunler"));

    products.innerHTML = "";

    snapshot.forEach((doc) => {
      const urun = doc.data();

      products.innerHTML += `
        <div class="product">
          <h3>${urun.ad}</h3>
          <p>${urun.kategori}</p>
          <div class="price">${urun.fiyat} ₺</div>
        </div>
      `;
    });

    if (snapshot.empty) {
      products.innerHTML = "<p>Koleksiyon boş.</p>";
    }

  } catch (e) {
    products.innerHTML = `<p style="color:red;">${e.message}</p>`;
  }
}

urunleriGetir();
