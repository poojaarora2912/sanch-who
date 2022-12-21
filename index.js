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

orderNow.addEventListener("click", myFunction);

