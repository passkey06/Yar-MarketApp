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

  products.innerHTML = "<p>Ürünler yükleniyor...</p>";

  try {
    const snapshot = await getDocs(collection(db, "urunler"));

    products.innerHTML = "";

    if (snapshot.empty) {
      products.innerHTML = "<p>Henüz ürün eklenmemiş.</p>";
      return;
    }

    snapshot.forEach((doc) => {
      const urun = doc.data();

      const ad = urun.ad || "";
      const kategori = urun.kategori || "";
      const fiyat = urun.fiyat || 0;
      const resim = urun.resim || "";

      products.innerHTML += `
        <div class="product">
          <div style="display:flex;align-items:center;gap:12px;">

            <img src="${resim}"
                 style="width:70px;height:70px;border-radius:12px;object-fit:cover;">

            <div>
              <h3>${ad}</h3>
              <p>${kategori}</p>
              <div class="price">${fiyat} ₺</div>
            </div>

          </div>

          <button class="add">
            Sepete Ekle
          </button>
        </div>
      `;
    });

  } catch (e) {
    console.error(e);
    products.innerHTML = `
      <p style="color:red">
        ${e.message}
      </p>
    `;
  }
}

urunleriGetir();
