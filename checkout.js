const cart = JSON.parse(localStorage.getItem("cart")) || [];

const whatsappBtn = document.getElementById("whatsappBtn");

whatsappBtn.addEventListener("click", () => {

const adSoyad = document.getElementById("adSoyad").value;

const telefon = document.getElementById("telefon").value;

const mahalle = document.getElementById("mahalle").value;

const sokak = document.getElementById("sokak").value;

const bina = document.getElementById("bina").value;

const daire = document.getElementById("daire").value;

const not = document.getElementById("not").value;

const odeme = document.querySelector('input[name="odeme"]:checked').value;

if(adSoyad==="" || telefon==="" || mahalle==="" || sokak===""){

alert("Lütfen zorunlu alanları doldurun.");

return;

}

let mesaj="";

mesaj+="🛒 *YARIŞ MARKET SİPARİŞİ*%0A%0A";

mesaj+="👤 Ad Soyad: "+adSoyad+"%0A";

mesaj+="📞 Telefon: "+telefon+"%0A%0A";

mesaj+="📍 Adres:%0A";

mesaj+=mahalle+" Mahallesi%0A";

mesaj+=sokak+"%0A";

mesaj+="Bina No: "+bina+"%0A";

mesaj+="Daire: "+daire+"%0A%0A";

mesaj+="💳 Ödeme: "+odeme+"%0A%0A";

mesaj+="🛍️ Siparişler%0A";

let toplam=0;

cart.forEach(item=>{

mesaj+="• "+item.ad+" x"+item.adet+" = "+(item.adet*item.fiyat)+" ₺%0A";

toplam+=item.adet*item.fiyat;

});

mesaj+="%0A";

mesaj+="🚚 Teslimat: 50 ₺%0A";

mesaj+="💰 Toplam: "+(toplam+50)+" ₺%0A%0A";

mesaj+="📝 Not:%0A"+not;

const telefonNo="905538577094";

window.open("https://wa.me/"+telefonNo+"?text="+mesaj,"_blank");

localStorage.removeItem("cart");

setTimeout(()=>{

window.location.href="index.html";

},1000);

});
