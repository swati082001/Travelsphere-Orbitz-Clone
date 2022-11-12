


//import of navbar
import navbar from "./components/navbar.js";
let navbar_div = document.getElementById("navbar");
navbar_div.innerHTML=navbar();

let user_details=JSON.parse(localStorage.getItem("user"));
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


//import of footer
import footer from './components/footer.js';
let footer_div = document.querySelector("footer");
footer_div.innerHTML = footer();


// //validate user details
// let form_firstname = document.getElementById("pay-firstname").value;
// let form_lastname = document.getElementById("pay-lastname").value;
// let form_phone = document.getElementById("pay-phone").value;

// if(form_firstname==null || form_lastname==null || form_phone==null){
//     alert("Please fill all the details")
// }

//validate payment
const payment_btn = document.getElementById("complete-booking");
payment_btn.onclick = ()=>{
    let card_name = document.getElementById("payname").value;
    let cardnum = document.getElementById("cardnum").value;
    let card_month =  document.getElementById("card_month").value;
    let card_year = document.getElementById("card_year").value;
    let cvv = document.getElementById("cvv").value;
    let zip = document.getElementById("zipcode").value;


    if(card_name=="" || cardnum=="" || card_month=="" || card_year=="" || cvv=="" || zip==""){
        alert("Please fill all the details");
    }
    else{
        alert("OTP Sent Successfully");
        window.location.href="./otp.html";
        
    }
}

//append room details
let search_data = JSON.parse(localStorage.getItem("searchData"));
console.log(search_data);


let room_details=document.getElementById("room-details");

room_details.textContent="Room 1: "+search_data.adultPer+"Adults, 1 King-Bed, Non-smoking";



//hotel details
let hotel_details = JSON.parse(localStorage.getItem("tripData"));
console.log(hotel_details);
let pay_sidebar = document.getElementById("pay-sidebar");
let pay_image = document.createElement("img");
pay_image.src = hotel_details.image;

let pay_title = document.createElement("h3");
pay_title.innerText = hotel_details.name;

let pay_rating = document.createElement("p");
pay_rating.innerText = hotel_details.ratings+" " + "Excellent(114 views)";

let room = document.createElement("p");
 room.innerText = "Room 1: "+search_data.adultPer+"Adults, 1 King-Bed, Non-smoking";

 let room_checkin = document.createElement("p");
 room_checkin.innerText ="CHECK-IN :"+" "+ search_data.checkin;

 let room_checkout = document.createElement("p");
 room_checkout.innerText ="CHECK-OUT :"+" "+ search_data.checkout;

 pay_sidebar.append(pay_image,pay_title,pay_rating,room,room_checkin,room_checkout);

 let price_perNight = document.getElementById("price_perNight");
 price_perNight.innerText = "₹"+ hotel_details.price;

 let tax = document.getElementById("tax");
 tax.innerText ="₹" +Number(372);

 let total = document.getElementById("total");
 total.innerText = hotel_details.price+372;

 let coupon = document.getElementById("coupon");
 coupon.onclick = ()=>{
    let coupon_data=window.prompt("Enter the coupon code here")
    event.preventDefault();
    if(coupon_data=="ROOM123"){
        alert("Your code was entered successfully! Enjoy.");
        total.innerText = hotel_details.price+372-500;

    }
    else{
        alert("Invalid Coupon code");
    }
 }

