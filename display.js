
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


//display section

let key=`tripData`;

let tripData = JSON.parse(localStorage.getItem(key));
let hreserve= document.querySelectorAll('.price-box>div');

window.onload = ()=>{
     document.title= tripData.name;
    let himage = document.querySelector("#main-image");
    himage.src= tripData.image;
    
};
for(let j=0;j<hreserve.length;j++)
{
hreserve[j].onclick = ()=>{
    let hotel_key=`hotelData`;
    let hotelData = JSON.parse(localStorage.getItem(hotel_key)) ||[];
    hotelData.push(tripData);
    localStorage.setItem(hotel_key,JSON.stringify(hotelData));
};
}


let hname= document.querySelector("#hotel-name");
hname.textContent= tripData.name;

let hrating= document.querySelector("#rating-box");
hrating.textContent= tripData.ratings;

let hprice = document.querySelectorAll(".card-price");
for(let i=0;i<hprice.length;i++)
{
hprice[i].textContent= `₹${tripData.price}`;
}







//import barcode
import barcode from './components/barcode.js';
let barcode_div = document.getElementById("barcode");
barcode_div.innerHTML= barcode();


//import of footer
import footer from './components/footer.js';
let footer_div = document.querySelector("footer");
footer_div.innerHTML = footer();




