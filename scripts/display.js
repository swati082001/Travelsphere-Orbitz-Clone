let key=`tripData`;

let tripData = JSON.parse(localStorage.getItem(key));
let hreserve= document.querySelector('#book-hotel');
let  hotelData= JSON.parse(localStorage.getItem(key));
window.onload = ()=>{
     document.title= tripData.name;
    let himage = document.querySelector("#main-image");
    himage.setAttribute("src","hotelData.image");
};
hreserve.onclick = ()=>{
    let hotel_key=`hotelData`;
    localStorage.setItem(hotel_key,JSON.stringify(tripData));
};


let hname= document.querySelector("#hotel-name");
hname.textContent= tripData.name;

let hrating= document.querySelector("#rating-box");
hrating.textContent= tripData.price;

let hprice = document.querySelector(".card-price");
hprice.textContent= `₹${tripData.price}`;





