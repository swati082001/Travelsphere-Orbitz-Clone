

//import of navbar
import navbar from "./components/navbar.js";
let navbar_div = document.getElementById("navbar");
navbar_div.innerHTML=navbar();

let show_name=document.getElementById("show_name");
let navbar_signup = document.getElementById("navbar_signup");
show_name.style.display="none";
navbar_signup.onclick=()=>{
    
    window.location.href="./register.html";
}

let user_details= JSON.parse(localStorage.getItem("user"));
console.log(user_details);
if(user_details){
    show_name.innerHTML=user_details.first_name;
    show_name.style.display="block";
    show_name.style.display="inline";
    navbar_signup.style.display="none"; 
}
else{
    navbar_signup.style.display="block";
    navbar_signup.style.display="inline";
}



//import barcode
import barcode from './components/barcode.js';
let barcode_div = document.getElementById("barcode");
barcode_div.innerHTML= barcode();


//import of footer
import footer from './components/footer.js';
let footer_div = document.querySelector("footer");
footer_div.innerHTML = footer();
