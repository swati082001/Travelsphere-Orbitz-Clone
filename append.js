


//import of navbar
import navbar from "./components/navbar.js";
let navbar_div = document.getElementById("navbar");
navbar_div.innerHTML=navbar();





const appendData = (data)=>{
    let card= document.querySelector("#display-box");
    card.innerHTML=null;
    data.forEach(({name,image,description,ratings,location,price}) => {
            let item= document.createElement("div");
            item.setAttribute("class",'item-card');
            let item1= document.createElement("div");
            
            let item2= document.createElement("div");

            card.append(item);
    });
    
};



//import of footer
import footer from './components/footer.js';
let footer_div = document.querySelector("footer");
footer_div.innerHTML = footer();