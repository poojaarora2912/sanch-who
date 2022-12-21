const fillDetails = document.querySelector(".fill-details");

function myFunction(){
    console.log("triggered");
    location.href = "https://forms.gle/zGNE787mfmpRh9QL6";
    // document.getElementById("myDropdown").classList.toggle("show");
}

fillDetails.addEventListener("click", myFunction);