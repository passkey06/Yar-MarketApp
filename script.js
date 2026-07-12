const categories = document.querySelectorAll(".category");

categories.forEach(card=>{
card.addEventListener("click",()=>{

alert(card.innerText+" kategorisi yakında aktif olacak.");

});
});
