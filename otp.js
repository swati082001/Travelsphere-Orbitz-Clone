



//import of navbar
import navbar from "./components/navbar.js";
let navbar_div = document.getElementById("navbar");
navbar_div.innerHTML=navbar();


//import of footer
import footer from './components/footer.js';
let footer_div = document.querySelector("footer");
footer_div.innerHTML = footer();



//otp details
let otp_btn=document.getElementById("otp-btn");
otp_btn.onclick=()=>{
    let otp_box = document.getElementById("otp-input").value;

if(otp_box==1234){
    alert("Booking Successful!!");
    window.location.href="./index.html";
}else{
    alert("Oops! Invalid Otp!")
}

}
