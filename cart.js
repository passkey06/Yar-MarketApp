let cart = JSON.parse(localStorage.getItem("cart")) || [];

const cartItems = document.getElementById("cartItems");
const subTotal = document.getElementById("subTotal");
const total = document.getElementById("total");

function kaydet() {
    localStorage.setItem("cart", JSON.stringify(cart));
}

function sepetiGoster() {

    cartItems.innerHTML = "";

    let araToplam = 0;

    if (cart.length === 0) {

        cartItems.innerHTML = `
        <div style="text-align:center;padding:40px;">
            <h2>🛒 Sepetiniz Boş</h2>
            <p>Alışverişe devam edebilirsiniz.</p>
        </div>
        `;

        subTotal.innerText = "0 ₺";
        total.innerText = "50 ₺";
        return;
    }

    cart.forEach((urun, index) => {

        araToplam += urun.fiyat * urun.adet;

        cartItems.innerHTML += `

<div class="cartItem">

<img src="${urun.resim}">

<div class="info">

<h2>${urun.ad}</h2>

<div class="price">${urun.fiyat} ₺</div>

<div class="qty">

<button onclick="azalt(${index})">−</button>

<span>${urun.adet}</span>

<button onclick="arttir(${index})">+</button>

</div>

<button class="remove" onclick="sil(${index})">

Sil

</button>

</div>

</div>

`;
