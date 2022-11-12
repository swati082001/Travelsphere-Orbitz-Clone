
//create button id or submit button 
let add_data = document.getElementById("createAdminData");
add_data.onclick = async function (){

    let id = document.getElementById("id").value;
    let location = document.getElementById("locationinput").value;
    let image = document.getElementById("image").value;
    let name = document.getElementById("name").value;
    let description = document.getElementById("description").value;
    let price = document.getElementById("price").value;
    let ratings = document.getElementById("ratings").value;
    

    let send_data ={
        location,
        id,
        image,
        name,
        description,
        price,
        ratings,
    }

    console.log('send_data:', send_data);

    let res = await fetch(`http://localhost:3000/hotels`,{
        method:"POST",
        body: JSON.stringify(send_data),
        headers:{
            'Content-Type':'application/json'
        }
    });
    console.log('res:', res);

    let data = await res.json();
    console.log('dataCreate:', data)
    window.location.reload()
}


//delete data from json

const deletePost = async () => {
    try{
        let delete_id = document.getElementById("delete_id").value;

        let res = await fetch(`http://localhost:3000/hotels/${delete_id}`,{
            method:"DELETE",
            headers:{
                'Content-Type':'application/json'
            }
        });
        console.log('res:', res);

        let data = await res.json();
        console.log('data:', data)
    }
    catch(err){
        console.log(err)
    }

}


//update data
const updatePost = async() =>{

    try{
        let update_id = document.getElementById("update_id").value;

        let update_name = document.getElementById("update_name").value;

        let send_data = {
            name:update_name,
        }


        let res = await fetch(`http://localhost:3000/hotels/${update_id}`,{
            method:"PATCH",
            body:JSON.stringify(send_data),
            headers:{
                'Content-Type':'application/json'
            }
        });

        let data = await res.json();
        console.log('data:', data)
    }
    catch(err){
        console.log(err)
    }
}