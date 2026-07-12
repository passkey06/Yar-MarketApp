import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

import {
getFirestore,
collection,
addDoc,
getDocs
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const firebaseConfig = {

apiKey:"AIzaSyClZ4vbfNnWPQi6uTwbJH_6d1TRM_OoBqE",

authDomain:"deneme-a4c1e.firebaseapp.com",

projectId:"deneme-a4c1e",

storageBucket:"deneme-a4c1e.firebasestorage.app",

messagingSenderId:"582311785485",

appId:"1:582311785485:web:42c688aa9ca5de4bead144"

};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

const ad = document.getElementById("ad");
const kategori = document.getElementById("kategori");
const fiyat = document.getElementById("fiyat");
const resim = document.getElementById("resim");

const ekleBtn = document.getElementById("ekleBtn");

const urunListesi = document.getElementById("urunListesi");

async function urunleriYukle(){

urunListesi.innerHTML="";

const snapshot = await getDocs(collection(db,"urunler"));

snapshot.forEach((doc)=>{

const urun = doc.data();

urunListesi.innerHTML += `

<div class="urunKart">

<img src="${urun.resim}">

<div class="bilgiler">

<h3>${urun.ad}</h3>

<p>${urun.kategori}</p>

<div class="fiyat">${urun.fiyat} ₺</div>

</div>

</div>

`;

});

}

ekleBtn.addEventListener("click",async()=>{

await addDoc(collection(db,"urunler"),{

ad:ad.value,

kategori:kategori.value,

fiyat:Number(fiyat.value),

resim:resim.value

});

ad.value="";
kategori.value="";
fiyat.value="";
resim.value="";

urunleriYukle();

});

urunleriYukle();
