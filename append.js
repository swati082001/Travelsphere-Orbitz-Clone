//import of navbar
import navbar from "./components/navbar.js";
let navbar_div = document.getElementById("navbar");
navbar_div.innerHTML=navbar();

const key= `searchData`;
const tripData= JSON.parse(localStorage.getItem(key));


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
            let p4= document.createElement('p');
            p4.textContent=`${el.ratings}/5 Wonderful(325 reviews)`;
            let p5= document.createElement('p');
            p5.textContent=`₹${el.price}`;
            p5.style.marginLeft='80%';
            p5.style.fontSize='25px';
            p5.style.fontWeight='bold';
            p5.style.marginTop='0px';
            item2.append(h1,p1,p2,p3,p4,p5);


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

