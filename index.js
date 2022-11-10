
//import of navbar
import navbar from "./components/navbar.js";
let navbar_div = document.getElementById("navbar");
navbar_div.innerHTML=navbar();


//import of footer
import footer from './components/footer.js';
let footer_div = document.querySelector("footer");
footer_div.innerHTML = footer();