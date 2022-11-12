
//create button id or submit button 

const createData = async function (){

    let id = document.getElementById("id").value;
    let location = document.getElementById("locationinput").value;
    let image = document.getElementById("image").value;
    let name = document.getElementById("name").value;
    let description = document.getElementById("description").value;
    let price = document.getElementById("price").value;
    let ratings = document.getElementById("ratings").value;
    

    let send_data ={
        id,
        location,
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
    window.location.reload();
}


//delete data from json

const deleteData = async () => {
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
        console.log('Deletedata:', data)
    }
    catch(err){
        console.log(err)
    }

}


//update data
const updateData = async() =>{

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
        console.log('Updatedata:', data)
    }
    catch(err){
        console.log(err)
    }
}