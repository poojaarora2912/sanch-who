const dropbtn = document.querySelector(".dropbtn");

function myFunction(){
    console.log("triggered");
    document.getElementById("myDropdown").classList.toggle("show");
}

dropbtn.addEventListener("click", myFunction);