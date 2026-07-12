// Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import {
  getFirestore,
  collection,
  getDocs
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

// Firebase Ayarları
const firebaseConfig = {
  apiKey: "BURAYA_API_KEY",
  authDomain: "BURAYA_AUTH_DOMAIN",
  projectId: "BURAYA_PROJECT_ID",
  storageBucket: "BURAYA_STORAGE_BUCKET",
  messagingSenderId: "BURAYA_MESSAGING_SENDER_ID",
  appId: "BURAYA_APP_ID"
};

// Firebase Başlat
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Ürünleri Yükle
async function urunleriYukle() {
  const urunAlani = document.getElementById("urunler");

  urunAlani.innerHTML = "<p>Ürünler yükleniyor...</p>";

  try {
    const snapshot = await getDocs(collection(db, "urunler"));

    urunAlani.innerHTML = "";

    snapshot.forEach((doc) => {
      const urun = doc.data();

      urunAlani.innerHTML += `
        <div class="urun-kart">
          <img src="${urun.resim}" alt="${urun.ad}">
          <h3>${urun.ad}</h3>
          <p>${urun.fiyat} ₺</p>
          <button onclick="sepeteEkle('${doc.id}')">
            Sepete Ekle
          </button>
        </div>
      `;
    });

  } catch (err) {
    urunAlani.innerHTML = "<p>Ürünler yüklenemedi.</p>";
    console.error(err);
  }
}

// Sepet
window.sepeteEkle = function(id) {
  alert(id + " sepete eklendi.");
};

// Sayfa Açılınca
urunleriYukle();
