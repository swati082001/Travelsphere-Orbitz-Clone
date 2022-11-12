let key=`tripData`;
let  hotelData= JSON.parse(localStorage.getItem(key));
window.onload = ()=>{
    let himage = document.querySelector("#main-image");
    himage.setAttribute("src","hotelData.image");
};




