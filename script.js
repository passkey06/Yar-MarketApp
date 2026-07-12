import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

import {
getFirestore,
collection,
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

const app=initializeApp(firebaseConfig);

const db=getFirestore(app);

let cart=[];

const productsDiv=document.getElementById("products");

const cartCount=document.getElementById("cartCount");

async function urunleriYukle(){

productsDiv.innerHTML="";

const snapshot=await getDocs(collection(db,"urunler"));

snapshot.forEach((doc)=>{

const urun=doc.data();

productsDiv.innerHTML+=`

<div class="product">

<img src="${urun.resim}" alt="${urun.ad}">

<div class="productInfo">

<h2>${urun.ad}</h2>

<p>${urun.kategori}</p>

<div class="price">${urun.fiyat} ₺</div>

</div>

<button
class="addButton"
onclick="sepeteEkle('${doc.id}','${urun.ad}',${urun.fiyat},'${urun.resim}')">

+

</button>

</div>

`;

});

}

urunleriYukle();

function sepeteEkle(id, ad, fiyat, resim) {

    const urun = cart.find(item => item.id === id);

    if (urun) {
        urun.adet++;
    } else {
        cart.push({
            id: id,
            ad: ad,
            fiyat: fiyat,
            resim: resim,
            adet: 1
        });
    }

    localStorage.setItem("cart", JSON.stringify(cart));

    cartCount.innerText = cart.reduce((toplam, item) => toplam + item.adet, 0);

}
