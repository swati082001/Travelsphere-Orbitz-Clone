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





