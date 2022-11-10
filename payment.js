


//import of navbar
import navbar from "./components/navbar.js";
let navbar_div = document.getElementById("navbar");
navbar_div.innerHTML=navbar();


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