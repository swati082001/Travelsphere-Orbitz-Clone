
//import of navbar
import navbar from "./components/navbar.js";
let navbar_div = document.getElementById("navbar");
navbar_div.innerHTML=navbar();

let show_name=document.getElementById("show_name");
let navbar_signup = document.getElementById("navbar_signup");
show_name.style.display="none";
navbar_signup.onclick=()=>{
    navbar_signup.style.display="none";
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

//main section
// let staySearch = document.getElementById("serachDisplay");
// staySearch.oninput = function(){
//     document.getElementById("cities").style.display = "block";
// }


let hotels = [
    //MUMBAI
    {
        location:"Mumbai",
        id:"m1",
        image:"https://images.trvl-media.com/hotels/20000000/19460000/19458500/19458493/a7678da8.jpg?impolicy=resizecrop&rw=598&ra=fit",
        name:"The Taj Mahal Palace Mumbai",
        description:"Popular amenities:- Free WiFi,Air conditioning,Spa,Pool,Laundry,Parking included",
        price:34307,
        ratings:4.7
    },

    {
        location:"Mumbai",
        id:"m2",
        image:"https://images.trvl-media.com/hotels/6000000/5310000/5301700/5301691/796fe3c1.jpg?impolicy=resizecrop&rw=1200&ra=fit",
        name:"The St. Regis Mumbai",
        description:"Popular amenities:- Free WiFi,Air conditioning,Spa,Pool,Laundry,Parking included",
        price:24016,
        ratings:4.6
    },

    {
        location:"Mumbai",
        id:"m3",
        image:"https://images.trvl-media.com/hotels/2000000/1360000/1351900/1351876/1ac59945.jpg?impolicy=resizecrop&rw=1200&ra=fit",
        name:"Taj Mahal Tower Mumbai",
        description:"Popular amenities:- Free WiFi,Air conditioning,Spa,Pool,Laundry,Parking included",
        price:17795,
        ratings:4.8
    },

    {
        location:"Mumbai",
        id:"m4",
        image:"https://images.trvl-media.com/hotels/1000000/10000/4800/4772/b3d8a21b.jpg?impolicy=resizecrop&rw=598&ra=fit",
        name:"The Oberoi Mumbai",
        description:"Popular amenities:- Free WiFi,Air conditioning,Spa,Pool,Laundry,Parking included",
        price:22620,
        ratings:4.8
    },

    {
        location:"Mumbai",
        id:"m5",
        image:"https://images.trvl-media.com/hotels/12000000/11860000/11859400/11859338/e6ea5baa.jpg?impolicy=resizecrop&rw=1200&ra=fit",
        name:"Niranta Airport Transit Hotel & Lounge Terminal 2 Arrivals",
        description:"Popular amenities:- Free WiFi,Air conditioning,Spa,Pool,Laundry,Parking included",
        price:13538,
        ratings:5
    },

    {
        location:"Mumbai",
        id:"m6",
        image:"https://images.trvl-media.com/hotels/70000000/69750000/69749000/69748910/a572e188.jpg?impolicy=resizecrop&rw=1200&ra=fit",
        name:"Lemon Tree Hotel Kalina Mumbai",
        description:"Popular amenities:- Free WiFi,Pool,Housekeeping,24/7 front desk",
        price:11186,
        ratings:2.9
    },

    {
        location:"Mumbai",
        id:"m7",
        image:"https://images.trvl-media.com/hotels/10000000/9790000/9784600/9784580/0114879f.jpg?impolicy=resizecrop&rw=1200&ra=fit",
        name:"JW Marriott Mumbai Sahar",
        description:"Popular amenities:- Free WiFi,Pool,Housekeeping,24/7 front desk",
        price:21171,
        ratings:4.9
    },

    {
        location:"Mumbai",
        id:"m8",
        image:"https://images.trvl-media.com/hotels/2000000/1620000/1619200/1619199/b8d2657d.jpg?impolicy=resizecrop&rw=1200&ra=fit",
        name:"Four Seasons Hotel Mumbai",
        description:"Popular amenities:- Free WiFi,Air conditioning,Spa,Laundry,Parking included,Pet friendly",
        price:21600,
        ratings:3.5
    },

    {
        location:"Mumbai",
        id:"m9",
        image:"https://images.trvl-media.com/hotels/2000000/1830000/1823800/1823707/2e002832.jpg?impolicy=resizecrop&rw=1200&ra=fit",
        name:"Trident Bandra Kurla Mumbai",
        description:"Popular amenities:- Free WiFi,Air conditioning,Spa,Air conditioning,Parking included,Parking included",
        price:17612,
        ratings:4.1
    },

    {
        location:"Mumbai",
        id:"m10",
        image:"https://images.trvl-media.com/hotels/1000000/800000/793900/793877/4e265244.jpg?impolicy=resizecrop&rw=1200&ra=fit",
        name:"The Orchid Hotel Mumbai Vile Parle",
        description:"Popular amenities:- Free WiFi,Air conditioning,Spa,Air conditioning,Parking included,Parking included",
        price:13420,
        ratings:3.8
    },
    //DELHI
    {  
        location:"Delhi", 
        id:`d1`,
        image:`https://images.trvl-media.com/hotels/2000000/1530000/1528800/1528788/64515cdf.jpg?impolicy=resizecrop&rw=455&ra=fit`,
        name:`Radisson Blu Plaza Delhi Airport Delhi`,
        description:`Sea-Facing Modern Palace Hotel,Book Club Rooms or Suites,enjoy exclusive Lounge access,Airpot transfers,Midday refreshments,Hightea,Cocktail hours & more.`,
        price:171,
        ratings: 4.6
    },

    {  
        location:'Delhi', 
        id:`d2`,
        image:`https://images.trvl-media.com/hotels/2000000/1530000/1528800/1528788/64515cdf.jpg?impolicy=resizecrop&rw=455&ra=fit`,
        name:`The Metropolitan Hotel and Spa  Delhi`,
        description:`Happy Hours and more at Park Hyatt, Daily Buffet Breakfast,Two Pieces of Ironing Daily,WIFI and Happy Hours from 5PM TO 8PM -One Plus offer on Beer and IMFL.`,
        price:148,
        ratings: 4.6 
    },

    {  
        location:'Delhi', 
        id:`d3`,
        image:`https://images.trvl-media.com/hotels/11000000/10220000/10210200/10210101/532d599e.jpg?impolicy=resizecrop&rw=455&ra=fit`,
        name:`Roseate House`,
        description:`A Serene and Leisure family destination, Settle into comfort with free Wi-Fi,pillow-top beds,private balconies & plunge pool in our resort suites amidst lush landscapes.`,
        price:107,
        ratings: 4.4
    },

    {
        location:'Delhi',
        id:`d4`,
       image:`https://images.trvl-media.com/hotels/2000000/1310000/1304400/1304393/f9968404.jpg?impolicy=resizecrop&rw=455&ra=fit`,
        name:`Courtyard by Marriott Delhi`,
        description:`Enjoy your admirable location. Contemporary retreat for today's business and leisure travellers located at the hub of the city , with breakfast and Wi-fi.`,
        price: 95,
        ratings: 4.1
    },

    {  
        location:'Delhi', 
        id:`d5`,
        image:`https://images.trvl-media.com/hotels/88000000/87680000/87676800/87676708/5d211aad.jpg?impolicy=resizecrop&rw=455&ra=fit`,
        name:`Hilton Delhi`,
        description:`Stay in a Comfortable and Smart hotel,Coveniently located, Relaxing stay in spacious rooms.Unwind around the infinity pool, and explore the hotel's five Restaurants.`,
        price:130,
        ratings: 4.4
    },

    {  
        location:'Delhi', 
        id:`d6`,
        image:`https://a.travel-assets.com/media/meso_cm/PAPI/Images/hotels/3000000/2600000/2593100/2593057/50744d35_b.jpg`,
        name:`Trident`, 
        description:`Pool`,
        price:134,
        ratings: 4.5
    },

    {  
        location:'Delhi', 
        id:`d7`,
        image:`https://images.trvl-media.com/hotels/1000000/440000/437300/437268/0753ae5b.jpg?impolicy=resizecrop&rw=455&ra=fit`,
        name:`InterContinental Delhi Mahabalipuram Resort, an IHG Hotel`,
        description:`Stay With confidance at IHG hotel. Book with IHG now and take advantage of flexible booking options and IHG Clean promise . For wherever you go. For however you stay.`,
        price:156,
        ratings:4.4
    },

    {  
        location:'Delhi', 
        id:`d8`,
        image:`https://images.trvl-media.com/hotels/4000000/3860000/3851700/3851663/aaba7f62.jpg?impolicy=resizecrop&rw=455&ra=fit`,
        name:`Essentia Premier Hotel Delhi`,
        description:``,
        price: 43,
        ratings:2.5
    },

    {  
        location:'Delhi', 
        id:`d9`,
        image:`https://images.trvl-media.com/hotels/14000000/13240000/13235700/13235605/f188ead1.jpg?impolicy=resizecrop&rw=455&ra=fit`,
        name:`Novotel Delhi Chamiers Road Hotel`,
        description:`Pool available`,
        price:78,
        ratings:4.2
    },

    {  
        location:'Delhi', 
        id:`d10`,
        image:`https://images.trvl-media.com/hotels/5000000/4810000/4804200/4804148/29666e5d.jpg?impolicy=resizecrop&rw=455&ra=fit`,
        name:`The Park Delhi`,
        description:`Pool and Hot Tub available`,
        price:69,
        ratings:3.1
    },

    //CHENNAI
    {
        id:`c1`,
        location:'Chennai',
        image:`https://images.trvl-media.com/lodging/5000000/4800000/4791400/4791355/a225f1d8.jpg?impolicy=resizecrop&rw=598&ra=fit`,
        name:`The Leela Palace Chennai`,
        description:`Sea-Facing Modern Palace Hotel,Book Club Rooms or Suites,enjoy exclusive Lounge access,Airpot transfers,Midday refreshments,Hightea,Cocktail hours & more.`,
        price:171,
        ratings: 4.6
    },
    {
        id:`c2`,
        location:'Chennai',
        image:`https://images.trvl-media.com/lodging/6000000/5100000/5098500/5098424/9d874368.jpg?impolicy=resizecrop&rw=598&ra=fit`,
        name:`Park Hyatt Chennai`,
        description:`Happy Hours and more at Park Hyatt, Daily Buffet Breakfast,Two Pieces of Ironing Daily,WIFI and Happy Hours from 5PM TO 8PM -One Plus offer on Beer and IMFL.`,
        price:148,
        ratings: 4.6 
    },
    {
        id:`c3`,
        location:'Chennai',
        image:`https://images.trvl-media.com/lodging/24000000/23970000/23966600/23966586/cfd3dc06.jpg?impolicy=resizecrop&rw=598&ra=fit`,
        name:`Four Points by Sheraton Mahabalipuram Resort & Convention Center`,
        description:`A Serene and Leisure family destination, Settle into comfort with free Wi-Fi,pillow-top beds,private balconies & plunge pool in our resort suites amidst lush landscapes.`,
        price:107,
        ratings: 4.4
    },
    {
        id:`c4`,
        location:'Chennai',
        image:`https://images.trvl-media.com/lodging/2000000/1360000/1352800/1352722/7469f318.jpg?impolicy=resizecrop&rw=598&ra=fit`,
        name:`Courtyard by Marriott Chennai`,
        description:`Enjoy your admirable location. Contemporary retreat for today's business and leisure travellers located at the hub of the city , with breakfast and Wi-fi.`,
        price: 95,
        ratings: 4.1
    },
    {
        id:`c5`,
        location:'Chennai',
        image:`https://images.trvl-media.com/lodging/4000000/3820000/3819600/3819553/d1152cb4.jpg?impolicy=resizecrop&rw=598&ra=fit`,
        name:`Hilton Chennai`,
        description:`Stay in a Comfortable and Smart hotel,Coveniently located, Relaxing stay in spacious rooms.Unwind around the infinity pool, and explore the hotel's five Restaurants.`,
        price:130,
        ratings: 4.4
    },
    {
        id:`c6`,
        location:'Chennai',
        image:`https://images.trvl-media.com/lodging/1000000/10000/9000/8950/92aa55f4.jpg?impolicy=resizecrop&rw=598&ra=fit`,
        name:`Trident`,
        description:`Pool`,
        price:134,
        ratings: 4.5
    },
    {
        id:`c7`,
        location:'Chennai',
        image:`https://images.trvl-media.com/lodging/12000000/11920000/11918400/11918335/3c939e5d.jpg?impolicy=resizecrop&rw=598&ra=fit`,
        name:`InterContinental Chennai Mahabalipuram Resort, an IHG Hotel`,
        description:`Stay With confidance at IHG hotel. Book with IHG now and take advantage of flexible booking options and IHG Clean promise . For wherever you go. For however you stay.`,
        price:156,
        ratings:4.4
    },
    {
        id:`c8`,
        location:'Chennai',
        image:`https://images.trvl-media.com/lodging/84000000/83130000/83127300/83127212/d0a900d3.jpg?impolicy=resizecrop&rw=598&ra=fit`,
        name:`Essentia Premier Hotel Chennai`,
        description:``,
        price: 43,
        ratings:2.5
    },
    {
        id:`c9`,
        location:'Chennai',
        image:`https://images.trvl-media.com/lodging/21000000/20400000/20392300/20392248/b53065d3.jpg?impolicy=resizecrop&rw=598&ra=fit`,
        name:`Novotel Chennai Chamiers Road Hotel`,
        description:`Pool available`,
        price:78,
        ratings:4.2
    },
    {
        id:`c10`,
        location:'Chennai',
        image:`https://images.trvl-media.com/lodging/1000000/910000/905000/904967/2932302e.jpg?impolicy=resizecrop&rw=598&ra=fit`,
        description:`Pool and Hot Tub available`,
        name:`The Park Chennai`,
        price:69,
        ratings:3.1
    },
]

let citySelect = document.getElementById("citySelect");
let searchcard = document.getElementById("searchcard")
citySelect.onclick = function(){
    document.getElementById("citySelect").style.backgroundColor ="white";
    searchcard.style.display = "block"
}



let searchbar = document.getElementById("searchbar");

async function searchCities(){
    let city_name = document.getElementById(`searchbar`).value;
    let p_name = document.createElement("p");
    console.log(city_name)
    let count =0;
    hotels.forEach(function(el){
        // console.log(el.location)
        if(city_name == el.location){
            count++; 
            console.log(city_name)
        }
    })

    if(count === 10){
        p_name.textContent = `Get 10 location from selected city`;
        document.getElementById("searchicon").append(p_name)
        searchcard.style.display = "none"
       
        document.getElementById("citySelect").style.color = "black"
        document.getElementById("citySelect").style.backgroundColor ="white";

        document.getElementById("citySelect").value = city_name;
       
    }else{
        p_name.textContent = `You selected wrong city`;
        document.getElementById("searchicon").append(p_name)
    }
} 

searchbar.oninput  = function(){
    document.getElementById("searchicon").innerHTML = null;
};

document.querySelector("#searchcard>button").addEventListener("click",function(){
    searchCities()
});



var checkbox = document.getElementById("addFlightcheck");
let flightSelectDiv = document.getElementById("flightSelectDiv");
let leavingCard = document.getElementById("searchcard2")


checkbox.addEventListener('change', function() {
  if (this.checked) {
    console.log("Checkbox is checked..");
    flightSelectDiv.style.display = "block";
    leavingCard.style.display = "none";
    document.getElementById("flightCitySelect").value = "";
  } else {
    console.log("Checkbox is not checked..");
    flightSelectDiv.style.display = "none"
    document.getElementById("flightCitySelect").value = "";

  }
});


let flightCitySelect = document.getElementById("flightCitySelect")
flightCitySelect.onclick = function(){
    document.getElementById("flightCitySelect").style.backgroundColor ="white";
    leavingCard.style.display = "block";
}


async function searchFlights(){
    let flightcity_name = document.getElementById(`searchbar2`).value;
    let p_name = document.createElement("p");
    console.log(flightcity_name)
    let count =0;
    hotels.forEach(function(el){
        // console.log(el.location)
        if(flightcity_name === el.location){
            count++; 
            console.log(flightcity_name)
        }
    })

    if(count === 10){
        p_name.textContent = `Get 10 location from selected city`;
        document.getElementById("searchicon2").append(p_name)
        leavingCard.style.display = "none"
       
        document.getElementById("flightCitySelect").style.color = "black"
        document.getElementById("flightCitySelect").style.backgroundColor ="white";

        document.getElementById("flightCitySelect").value = flightcity_name;
       
    }else{
        p_name.textContent = `You selected wrong city`;
        document.getElementById("searchicon2").append(p_name)
    }
} 

searchbar2.oninput  = function(){
    document.getElementById("searchicon2").innerHTML = null;
};

document.querySelector("#searchcard2>button").addEventListener("click",function(){
    searchFlights()
})


let traveler = document.getElementById("travellerSearch");

let travelersDiv = document.getElementById("travelers");
traveler.onclick = function(){
    travelersDiv.style.display = "block";
}

let maxAdults = document.getElementById("adultMax");
let add = 0;
maxAdults.addEventListener("click",function(){
    document.getElementById("adultMin").disabled = false;
    let q = document.getElementById("adultsP")
    add = Number(q.textContent)
    add++;
    let travelernum = document.getElementById("travelernum")
    q.textContent = add;
    travelernum.textContent = add +" ";
   
})


let minAdults = document.getElementById("adultMin");
let sub = 0;
minAdults.addEventListener("click",function(){
    let q = document.getElementById("adultsP")
    sub = Number(q.textContent)
    sub--;
    let travelernum = document.getElementById("travelernum")
    q.textContent = sub;
    travelernum.textContent = sub +" ";
    if(sub === 0){
        document.getElementById("adultMin").disabled = true;
    }
})


let maxChilds = document.getElementById("childMax");
let addchild = 0;
maxChilds.addEventListener("click",function(){
    document.getElementById("childMin").disabled = false;
    let q = document.getElementById("childp")
    addchild = Number(q.textContent)
    addchild++;
    q.textContent = addchild;
})


let minChild = document.getElementById("childMin");
let subchild = 0;
minChild.addEventListener("click",function(){
    let q = document.getElementById("childp")
    subchild = Number(q.textContent)
    subchild--;
    q.textContent = subchild;
    if(subchild === 0){
        document.getElementById("childMin").disabled = true;
    }
})



let done = document.getElementById("done");
let childValue =0 ,adultvalue=1,roomno;
done.onclick = function(){
    roomno = document.querySelector("#travelers>:nth-child(2)").textContent;
    console.log('roomno:', roomno)
    adultvalue = Number(document.getElementById("adultsP").textContent)
    console.log('adultvalue:', adultvalue)
    childValue = Number(document.getElementById("childp").textContent)
    console.log('childValue:', childValue);
    travelersDiv.style.display = 'none';
}


//Search button function
let staySerachBtn = document.getElementById("staySerachBtn");
staySerachBtn.onclick = function(){
   let c1 = document.getElementById("citySelect").value;
   console.log('c1:', c1)
   let checkin = document.getElementById("checkinId").value;
   console.log('checkin:', checkin)

   let checkout = document.getElementById("checkoutId").value;
   console.log('checkout:', checkout)

   console.log('roomno:', roomno)
   console.log('adultvalue:', adultvalue)
   console.log('childValue:', childValue);

   let send_data = {
     location:c1,
     checkin:checkin,
     checkout:checkout,
     roomno:roomno,
     adultPer:adultvalue,
     childPer:childValue,
   }

   console.log("send_data",send_data);
   localStorage.setItem("searchData",JSON.stringify(send_data))
   location.href = "./details.html"
}


document.onclick = function(e){
    if(e.target.id === 'citySelect' || e.target.id === 'searchbar' ||  e.target.id === 'searchcard' ){
        searchcard.style.display = 'block';  
    }else{
        searchcard.style.display = 'none';  
    }
   
    if(e.target.id === 'flightCitySelect' || e.target.id === 'searchbar2' ||  e.target.id === 'searchcard2' ){
        leavingCard.style.display = 'block';  
    }else{
        leavingCard.style.display = 'none';  
    }


    if(document.getElementById('travellerSearch').contains(e.target) ||
    document.getElementById('adultMin').contains(e.target) ||
    document.getElementById('adultMax').contains(e.target) ||
    document.getElementById('childMin').contains(e.target) ||
    document.getElementById('childMax').contains(e.target) ||
    document.getElementById('btntraveler').contains(e.target)){
        // Clicked in box
        travelersDiv.style.display = 'block';
    } else{
    // Clicked outside the box
        travelersDiv.style.display = 'none';
    }


    // if(e.target.id === 'travellerSearch'){
    //     travelersDiv.style.display = 'block';  
    //     if( e.target.id === 'adultMin'
    //     || e.target.id === 'adultMax' || e.target.id === 'childMin'
    //     || e.target.id === 'childMax' || e.target.id === 'done' 
    //     || e.target.id === "btntraveler"){
    //         travelersDiv.style.display = 'block';  
    //     }
    // }
    // else{
    //         travelersDiv.style.display = 'none';  
    // }
    // if(e.target !== document.getElementById("traveller")){
    //     travelersDiv.style.display = 'none';
    // }
};

let stays = document.getElementById("stays");
let flight = document.getElementById("flight");
let cars = document.getElementById("cars");
let packages = document.getElementById("packages");
let things = document.getElementById("things");
let cruises = document.getElementById("cruises");

stays.onclick = function(){
    stays.style.color = "#007e8f"; 
    stays.style.borderBottom = "3px solid #007e8f";
    stays.style.marginBottom ="-5px"

    flight.style.color = "#616161"; 
    flight.style.borderBottom = "none";

    cars.style.color = "#616161"; 
    cars.style.borderBottom = "none";

    packages.style.color = "#616161"; 
    packages.style.borderBottom = "none";

    things.style.color = "#616161"; 
    things.style.borderBottom = "none";

    cruises.style.color = "#616161"; 
    cruises.style.borderBottom = "none";   
    
    
    document.getElementById("FlightsDiv").style.display ="none"

    document.getElementById("staysDiv").style.display ="block"
}

flight.onclick = function(){
        stays.style.color = "#616161"; 
        stays.style.borderBottom = "none";

        flight.style.color = "#007e8f"; 
        flight.style.borderBottom = "3px solid #007e8f";
        flight.style.marginBottom ="-5px"

        cars.style.color = "#616161"; 
        cars.style.borderBottom = "none";

        packages.style.color = "#616161"; 
        packages.style.borderBottom = "none";

        things.style.color = "#616161"; 
        things.style.borderBottom = "none";

        cruises.style.color = "#616161"; 
        cruises.style.borderBottom = "none";   
        
        document.getElementById("staysDiv").style.display ="none"
        document.getElementById("FlightsDiv").style.display ="block"
}


cars.onclick = function(){
    stays.style.color = "#616161"; 
    stays.style.borderBottom = "none";

    flight.style.color = "#616161"; 
    flight.style.borderBottom = "none";

    cars.style.color = "#007e8f"; 
    cars.style.borderBottom = "3px solid #007e8f";
    cars.style.marginBottom ="-5px"

    packages.style.color = "#616161"; 
    packages.style.borderBottom = "none";

    things.style.color = "#616161"; 
    things.style.borderBottom = "none";

    cruises.style.color = "#616161"; 
    cruises.style.borderBottom = "none";  
    
    document.getElementById("FlightsDiv").style.display ="none"
    document.getElementById("staysDiv").style.display ="block"
   
}


packages.onclick = function(){
    stays.style.color = "#616161"; 
    stays.style.borderBottom = "none";

    flight.style.color = "#616161"; 
    flight.style.borderBottom = "none";

    cars.style.color = "#616161"; 
    cars.style.borderBottom = "none";
   
    packages.style.color = "#007e8f"; 
    packages.style.borderBottom = "3px solid #007e8f";
    packages.style.marginBottom ="-5px"

    things.style.color = "#616161"; 
    things.style.borderBottom = "none";

    cruises.style.color = "#616161"; 
    cruises.style.borderBottom = "none"; 

    document.getElementById("FlightsDiv").style.display ="none"
    document.getElementById("staysDiv").style.display ="block"
    
    
}

things.onclick = function(){
    stays.style.color = "#616161"; 
    stays.style.borderBottom = "none";

    flight.style.color = "#616161"; 
    flight.style.borderBottom = "none";

    cars.style.color = "#616161"; 
    cars.style.borderBottom = "none";

    packages.style.color = "#616161"; 
    packages.style.borderBottom = "none";

    things.style.color = "#007e8f"; 
    things.style.borderBottom = "3px solid #007e8f";
    things.style.marginBottom ="-5px"

    cruises.style.color = "#616161"; 
    cruises.style.borderBottom = "none";    

    document.getElementById("FlightsDiv").style.display ="none"
    document.getElementById("staysDiv").style.display ="block"
}

cruises.onclick = function(){
    stays.style.color = "#616161"; 
    stays.style.borderBottom = "none";

    flight.style.color = "#616161"; 
    flight.style.borderBottom = "none"; 

    cars.style.color = "#616161"; 
    cars.style.borderBottom = "none";

    packages.style.color = "#616161"; 
    packages.style.borderBottom = "none";

    things.style.color = "#616161"; 
    things.style.borderBottom = "none";

    cruises.style.color = "#007e8f"; 
    cruises.style.borderBottom = "3px solid #007e8f";
    cruises.style.marginBottom ="-5px"

    document.getElementById("FlightsDiv").style.display ="none"
    document.getElementById("staysDiv").style.display ="block"
}



//onclick LGBTQ
let lgbtq = document.getElementById("lgbtq")
lgbtq.onclick = function(){
    location.href ="";
}

//import barcode
import barcode from './components/barcode.js';
let barcode_div = document.getElementById("barcode");
barcode_div.innerHTML= barcode();


//import of footer
import footer from './components/footer.js';
let footer_div = document.querySelector("footer");
footer_div.innerHTML = footer();

