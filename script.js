const products = {
  "Temel Gıda": [
    "Unlu Mamuller",
    "Bakliyat",
    "Makarna",
    "Sıvı Yağlar"
  ],
  "Manav": [
    "Domates",
    "Patates",
    "Soğan",
    "Muz",
    "Şeftali",
    "Biber"
  ],
  "Şarküteri": [
    "Tavuk",
    "Kırmızı Et"
  ],
  "İçecekler": [
    "Su",
    "Maden Suyu",
    "Kola",
    "Soğuk Çay",
    "Süt"
  ],
  "Atıştırmalık": [
    "Ülker",
    "Eti"
  ],
  "Temizlik": [
    "Çamaşır Deterjanı",
    "Bulaşık Deterjanı"
  ]
};

const cards = document.querySelectorAll(".category");
const area = document.getElementById("products");

cards.forEach(card => {

card.onclick = () => {

const category = card.querySelector("h3").innerText;

let html = `<h2>${category}</h2>`;

products[category].forEach(item => {

html += `
<div class="product">
${item}
</div>
`;

});

area.innerHTML = html;

window.scrollTo({
top:document.body.scrollHeight,
behavior:"smooth"
});

};

});
