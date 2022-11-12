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

let hotels = [
    //MUMBAI
    {
        location:"Mumbai",
        id:"m1",
        image:"https://images.trvl-media.com/hotels/20000000/19460000/19458500/19458493/a7678da8.jpg?impolicy=resizecrop&rw=598&ra=fit",
        name:"The Taj Mahal Palace Mumbai",
        description:"Popular amenities:- Free WiFi,Air conditioning,Spa,Pool,Laundry,Parking included",
        discount:"₹40000",
        price:34307,
        ratings:4.7
    },

    {
        location:"Mumbai",
        id:"m2",
        image:"https://images.trvl-media.com/hotels/6000000/5310000/5301700/5301691/796fe3c1.jpg?impolicy=resizecrop&rw=1200&ra=fit",
        name:"The St. Regis Mumbai",
        description:"Popular amenities:- Free WiFi,Air conditioning,Spa,Pool,Laundry,Parking included",
        discount:"₹36000",
        price:24016,
        ratings:4.6
    },

    {
        location:"Mumbai",
        id:"m3",
        image:"https://images.trvl-media.com/hotels/2000000/1360000/1351900/1351876/1ac59945.jpg?impolicy=resizecrop&rw=1200&ra=fit",
        name:"Taj Mahal Tower Mumbai",
        description:"Popular amenities:- Free WiFi,Air conditioning,Spa,Pool,Laundry,Parking included",
        discount:"₹29000",
        price:17795,
        ratings:4.8
    },

    {
        location:"Mumbai",
        id:"m4",
        image:"https://images.trvl-media.com/hotels/1000000/10000/4800/4772/b3d8a21b.jpg?impolicy=resizecrop&rw=598&ra=fit",
        name:"The Oberoi Mumbai",
        description:"Popular amenities:- Free WiFi,Air conditioning,Spa,Pool,Laundry,Parking included",
        discount:"₹32480",
        price:22620,
        ratings:4.8
    },

    {
        location:"Mumbai",
        id:"m5",
        image:"https://images.trvl-media.com/hotels/12000000/11860000/11859400/11859338/e6ea5baa.jpg?impolicy=resizecrop&rw=1200&ra=fit",
        name:"Niranta Airport Transit Hotel & Lounge Terminal 2 Arrivals",
        description:"Popular amenities:- Free WiFi,Air conditioning,Spa,Pool,Laundry,Parking included",
        discount:"₹18700",
        price:13538,
        ratings:5
    },

    {
        location:"Mumbai",
        id:"m6",
        image:"https://images.trvl-media.com/hotels/70000000/69750000/69749000/69748910/a572e188.jpg?impolicy=resizecrop&rw=1200&ra=fit",
        name:"Lemon Tree Hotel Kalina Mumbai",
        description:"Popular amenities:- Free WiFi,Pool,Housekeeping,24/7 front desk",
        discount:"₹28340",
        price:11186,
        ratings:2.9
    },

    {
        location:"Mumbai",
        id:"m7",
        image:"https://images.trvl-media.com/hotels/10000000/9790000/9784600/9784580/0114879f.jpg?impolicy=resizecrop&rw=1200&ra=fit",
        name:"JW Marriott Mumbai Sahar",
        description:"Popular amenities:- Free WiFi,Pool,Housekeeping,24/7 front desk",
        discount:"₹27120",
        price:21171,
        ratings:4.9
    },

    {
        location:"Mumbai",
        id:"m8",
        image:"https://images.trvl-media.com/hotels/2000000/1620000/1619200/1619199/b8d2657d.jpg?impolicy=resizecrop&rw=1200&ra=fit",
        name:"Four Seasons Hotel Mumbai",
        description:"Popular amenities:- Free WiFi,Air conditioning,Spa,Laundry,Parking included,Pet friendly",
        discount:"₹26700",
        price:21600,
        ratings:3.5
    },

    {
        location:"Mumbai",
        id:"m9",
        image:"https://images.trvl-media.com/hotels/2000000/1830000/1823800/1823707/2e002832.jpg?impolicy=resizecrop&rw=1200&ra=fit",
        name:"Trident Bandra Kurla Mumbai",
        description:"Popular amenities:- Free WiFi,Air conditioning,Spa,Air conditioning,Parking included,Parking included",
        discount:"₹29400",
        price:17612,
        ratings:4.1
    },

    {
        location:"Mumbai",
        id:"m10",
        image:"https://images.trvl-media.com/hotels/1000000/800000/793900/793877/4e265244.jpg?impolicy=resizecrop&rw=1200&ra=fit",
        name:"The Orchid Hotel Mumbai Vile Parle",
        description:"Popular amenities:- Free WiFi,Air conditioning,Spa,Air conditioning,Parking included,Parking included",
        discount:"₹16900",
        price:13420,
        ratings:3.8
    },
    
    //DELHI
   
    {  
        location:"Delhi", 
        id:`d1`,
        image:`https://static.india.com/wp-content/uploads/2022/09/Leela-Ambience-gurugram-1.jpg?impolicy=Medium_Widthonly&w=700&h=467`,
        name:`Radisson Blu Plaza Delhi Airport Delhi`,
        description:`Sea-Facing Modern Palace Hotel,Book Club Rooms or Suites,enjoy exclusive Lounge access,Airpot transfers,Midday refreshments,Hightea,Cocktail hours & more.`,
        discount:"₹28900",
        price:17120,
        ratings: 4.6
    },

    {  
        location:'Delhi', 
        id:`d2`,
        image:`https://images.trvl-media.com/hotels/2000000/1530000/1528800/1528788/64515cdf.jpg?impolicy=resizecrop&rw=455&ra=fit`,
        name:`The Metropolitan Hotel and Spa  Delhi`,
        description:`Happy Hours and more at Park Hyatt, Daily Buffet Breakfast,Two Pieces of Ironing Daily,WIFI and Happy Hours from 5PM TO 8PM -One Plus offer on Beer and IMFL.`,
        discount:"₹18000",
        price:14800,
        ratings: 4.6 
    },

    {  
        location:'Delhi', 
        id:`d3`,
        image:`https://images.trvl-media.com/hotels/11000000/10220000/10210200/10210101/532d599e.jpg?impolicy=resizecrop&rw=455&ra=fit`,
        name:`Roseate House`,
        description:`A Serene and Leisure family destination, Settle into comfort with free Wi-Fi,pillow-top beds,private balconies & plunge pool in our resort suites amidst lush landscapes.`,
        discount:"₹17600",
        price:10745,
        ratings: 4.4
    },

    {
        location:'Delhi',
        id:`d4`,
       image:`https://images.trvl-media.com/hotels/2000000/1310000/1304400/1304393/f9968404.jpg?impolicy=resizecrop&rw=455&ra=fit`,
        name:`Courtyard by Marriott Delhi`,
        description:`Enjoy your admirable location. Contemporary retreat for today's business and leisure travellers located at the hub of the city , with breakfast and Wi-fi.`,
        discount:"₹29790",
        price: 19563,
        ratings: 4.1
    },

    {  
        location:'Delhi', 
        id:`d5`,
        image:`https://images.trvl-media.com/hotels/88000000/87680000/87676800/87676708/5d211aad.jpg?impolicy=resizecrop&rw=455&ra=fit`,
        name:`Hilton Delhi`,
        description:`Stay in a Comfortable and Smart hotel,Coveniently located, Relaxing stay in spacious rooms.Unwind around the infinity pool, and explore the hotel's five Restaurants.`,
        discount:"₹17400",
        price:13067,
        ratings: 4.4
    },

    {  
        location:'Delhi', 
        id:`d6`,
        image:`https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1b/a5/b5/d6/exterior.jpg?w=1200&h=-1&s=1`,
        name:`Trident`, 
        description:`Pool`,
        discount:"₹18000",
        price:13478,
        ratings: 4.5
    },

    {  
        location:'Delhi', 
        id:`d7`,
        image:`https://images.trvl-media.com/hotels/1000000/440000/437300/437268/0753ae5b.jpg?impolicy=resizecrop&rw=455&ra=fit`,
        name:`InterContinental Delhi Mahabalipuram Resort, an IHG Hotel`,
        description:`Stay With confidance at IHG hotel. Book with IHG now and take advantage of flexible booking options and IHG Clean promise . For wherever you go. For however you stay.`,
        discount:"₹17800",
        price:15689,
        ratings:4.4
    },

    {  
        location:'Delhi', 
        id:`d8`,
        image:`https://images.trvl-media.com/hotels/4000000/3860000/3851700/3851663/aaba7f62.jpg?impolicy=resizecrop&rw=455&ra=fit`,
        name:`Essentia Premier Hotel Delhi`,
        description:``,
        discount:"₹85300",
        price: 43456,
        ratings:2.5
    },

    {  
        location:'Delhi', 
        id:`d9`,
        image:`https://www.ahstatic.com/photos/b7i3_ho_00_p_1024x768.jpg`,
        name:`Novotel Delhi Chamiers Road Hotel`,
        description:`Pool available`,
        discount:"₹89000",
        price:78267,
        ratings:4.2
    },

    {  
        location:'Delhi', 
        id:`d10`,
        image:`https://images.trvl-media.com/hotels/5000000/4810000/4804200/4804148/29666e5d.jpg?impolicy=resizecrop&rw=455&ra=fit`,
        name:`The Park Delhi`,
        description:`Pool and Hot Tub available`,
        discount:"₹78900",
        price:69000,
        ratings:3.1
    },

    //CHENNAI
    
    {
        id:`c1`,
        location:'Chennai',
        image:`https://images.trvl-media.com/lodging/5000000/4800000/4791400/4791355/a225f1d8.jpg?impolicy=resizecrop&rw=598&ra=fit`,
        name:`The Leela Palace Chennai`,
        description:`Sea-Facing Modern Palace Hotel,Book Club Rooms or Suites,enjoy exclusive Lounge access,Airpot transfers,Midday refreshments,Hightea,Cocktail hours & more.`,
        discount:"₹27000",
        price:17124,
        ratings: 4.6
    },
    {
        id:`c2`,
        location:'Chennai',
        image:`https://images.trvl-media.com/lodging/6000000/5100000/5098500/5098424/9d874368.jpg?impolicy=resizecrop&rw=598&ra=fit`,
        name:`Park Hyatt Chennai`,
        description:`Happy Hours and more at Park Hyatt, Daily Buffet Breakfast,Two Pieces of Ironing Daily,WIFI and Happy Hours from 5PM TO 8PM -One Plus offer on Beer and IMFL.`,
        discount:"₹26000",
        price:14811,
        ratings: 4.6 
    },
    {
        id:`c3`,
        location:'Chennai',
        image:`https://images.trvl-media.com/lodging/24000000/23970000/23966600/23966586/cfd3dc06.jpg?impolicy=resizecrop&rw=598&ra=fit`,
        name:`Four Points by Sheraton Mahabalipuram Resort & Convention Center`,
        description:`A Serene and Leisure family destination, Settle into comfort with free Wi-Fi,pillow-top beds,private balconies & plunge pool in our resort suites amidst lush landscapes.`,
        discount:"₹16000",
        price:10724,
        ratings: 4.4
    },
    {
        id:`c4`,
        location:'Chennai',
        image:`https://images.trvl-media.com/lodging/2000000/1360000/1352800/1352722/7469f318.jpg?impolicy=resizecrop&rw=598&ra=fit`,
        name:`Courtyard by Marriott Chennai`,
        description:`Enjoy your admirable location. Contemporary retreat for today's business and leisure travellers located at the hub of the city , with breakfast and Wi-fi.`,
        discount:"₹67000",
        price: 55260,
        ratings: 4.1
    },
    {
        id:`c5`,
        location:'Chennai',
        image:`https://images.trvl-media.com/lodging/4000000/3820000/3819600/3819553/d1152cb4.jpg?impolicy=resizecrop&rw=598&ra=fit`,
        name:`Hilton Chennai`,
        description:`Stay in a Comfortable and Smart hotel,Coveniently located, Relaxing stay in spacious rooms.Unwind around the infinity pool, and explore the hotel's five Restaurants.`,
        discount:"₹28000",
        price:13090,
        ratings: 4.4
    },
    {
        id:`c6`,
        location:'Chennai',
        image:`https://images.trvl-media.com/lodging/1000000/10000/9000/8950/92aa55f4.jpg?impolicy=resizecrop&rw=598&ra=fit`,
        name:`Trident`,
        description:`Pool`,
        discount:"₹19556",
        price:13498,
        ratings: 4.5
    },
    {
        id:`c7`,
        location:'Chennai',
        image:`https://images.trvl-media.com/lodging/12000000/11920000/11918400/11918335/3c939e5d.jpg?impolicy=resizecrop&rw=598&ra=fit`,
        name:`InterContinental Chennai Mahabalipuram Resort, an IHG Hotel`,
        description:`Stay With confidance at IHG hotel. Book with IHG now and take advantage of flexible booking options and IHG Clean promise . For wherever you go. For however you stay.`,
        discount:"₹38000",
        price:15676,
        ratings:4.4
    },
    {
        id:`c8`,
        location:'Chennai',
        image:`https://images.trvl-media.com/lodging/84000000/83130000/83127300/83127212/d0a900d3.jpg?impolicy=resizecrop&rw=598&ra=fit`,
        name:`Essentia Premier Hotel Chennai`,
        description:``,
        discount:"₹67000",
        price: 43345,
        ratings:2.5
    },
    {
        id:`c9`,
        location:'Chennai',
        image:`https://images.trvl-media.com/lodging/21000000/20400000/20392300/20392248/b53065d3.jpg?impolicy=resizecrop&rw=598&ra=fit`,
        name:`Novotel Chennai Chamiers Road Hotel`,
        description:`Pool available`,
        discount:"₹89000",
        price:78673,
        ratings:4.2
    },
    {
        id:`c10`,
        location:'Chennai',
        image:`https://images.trvl-media.com/lodging/1000000/910000/905000/904967/2932302e.jpg?impolicy=resizecrop&rw=598&ra=fit`,
        description:`Pool and Hot Tub available`,
        name:`The Park Chennai`,
        discount:"₹77000",
        price:69234,
        ratings:3.1
    }
]

// const key= `searchData`;
const tripData= JSON.parse(localStorage.getItem("searchData"));


let viewData= hotels.filter(({location})=>{
    let checker= tripData.location;
    
    if(checker===location)
      return true;
      else
      return false;
 });

 window.onload = ()=>{
    console.log(viewData);
    appendData(viewData);
 };




const appendData = (data)=>{
    let card= document.querySelector("#display-box");
    card.innerHTML=null;
    data.forEach((el) => {
            let item= document.createElement("div");
            item.onclick = ()=>{
              localStorage.setItem("tripData",JSON.stringify(el));
              window.location.href="display.html";
            }


            item.setAttribute("class",'item-card');
            let item1= document.createElement("div");

            //day3
            let url= document.createElement("img");
            url.setAttribute("class",'card-image');
            url.src=el.image;
            item1.append(url);

            let item2= document.createElement("div");
            let h1= document.createElement("h1");
            h1.textContent= el.name;
            let p1= document.createElement("p");
            p1.textContent= el.location;
            p1.style.fontSize='20px';
            let p2= document.createElement('p');
            p2.textContent= el.description;
            p2.style.color='gray';
            let p3= document.createElement('p');
            p3.textContent=`Fully Refundable`;
            p3.style.color='green';
            let p4= document.createElement('h4');
            p4.textContent=`${el.ratings}/5 (325 reviews)`;
            let p5= document.createElement('p');
            p5.textContent=`₹${el.price}`;
            p5.style.marginLeft='80%';
            p5.style.fontSize='25px';
            p5.style.fontWeight='bold';
            p5.style.marginTop='0px';
            let discount = document.createElement("i");
            discount.innerText=el.discount;
            discount.setAttribute("class","discount");
            item2.append(h1,p1,p2,p3,p4,discount,p5);


            item.append(item1,item2);
            card.append(item);
    });
    
};




let sortfilter= document.querySelector("#sorter");
sortfilter.onchange= ()=>{
    if(sortfilter.value=== 'price')
    {
        let newData= hotels.map(
            (el)=>{
                return el;
            }
        );
        let sortdata= newData.sort((el1,el2)=>{
            return el1.price- el2.price;
        });
        
        appendData(sortdata);
    }
    else if(sortfilter.value =='rating')
    {
        
        let newData= hotels.map(
            (el)=>{
                return el;
            }
        );
        let sortdata= newData.sort((el1,el2)=>{
           
            return el2.ratings - el1.ratings;
        });
        
        appendData(sortdata);

    }
    else 
      {
        appendData(viewData);
      }
};

const showResult = (name,data)=>{
    
   let newData = data.filter((el)=>{
    let a=el.name;

    if(a.includes(name))
    return true;
    else 
       return false;
   });
   appendData(newData);
};

let hname= document.querySelector("#hotelfilter");
hname.oninput = ()=>{
    let input = hname.value;
    if(input==="")
    {
       appendData(viewData);
       return;
    }
    
    showResult(input,hotels);
};





//import of footer
import footer from './components/footer.js';
let footer_div = document.querySelector("footer");
footer_div.innerHTML = footer();

