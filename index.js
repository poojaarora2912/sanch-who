const orderNow = document.querySelector(".order-now");

function myFunction(){
    console.log("triggered");
    location.href = "payment.html";
    // document.getElementById("myDropdown").classList.toggle("show");
}

orderNow.addEventListener("click", myFunction);