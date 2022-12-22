const orderNow = document.querySelector(".order-now");
const priceperpiece = document.querySelector(".price-per-piece");

function myFunction(){
    console.log("triggered");
    location.href = "payment.html";
    // document.getElementById("myDropdown").classList.toggle("show");
}

function increaseValue() {
    var value = parseInt(document.getElementById('number').value, 10);
    value = isNaN(value) ? 0 : value;
    value++;
    document.getElementById('number').value = value;
    increasePrice(value);
  }
  
  function decreaseValue() {
    var value = parseInt(document.getElementById('number').value, 10);
    value = isNaN(value) ? 0 : value;
    value < 1 ? value = 1 : '';
    value--;
    document.getElementById('number').value = value;
    console.log(value);
    decreasePrice(value);
  
  }
 function increasePrice(price){
    var total = price * 750;
    console.log(total);
    document.getElementById("price-per-piece").value = total;
 }

 function decreasePrice(price){
    var total = price * 750;
    console.log("total price is" + total);
    var totalprice = total;
    console.log(totalprice);
    document.getElementById("price-per-piece").value = totalprice;
 }

 let slideIndex = 1;
 showSlides(slideIndex);
 
 function plusSlides(n) {
   showSlides(slideIndex += n);
 }
 
 function currentSlide(n) {
   showSlides(slideIndex = n);
 }
 
 function showSlides(n) {
   let i;
   let slides = document.getElementsByClassName("mySlides");
   let dots = document.getElementsByClassName("dot");
   if (n > slides.length) {slideIndex = 1}    
   if (n < 1) {slideIndex = slides.length}
   for (i = 0; i < slides.length; i++) {
     slides[i].style.display = "none";  
   }
   for (i = 0; i < dots.length; i++) {
     dots[i].className = dots[i].className.replace(" active", "");
   }
   slides[slideIndex-1].style.display = "block";  
   dots[slideIndex-1].className += " active";
 }
 
orderNow.addEventListener("click", myFunction);

