


async function a() {
    const res= await fetch("/src/js/produtosAlquiler.json")
    const data= await res.json()
   
    data.forEach(item => {
        const rentalform= document.getElementById("rental-form")
        const formcontainer = document.createElement("div")
        formcontainer.classList.add("form-group")
        formcontainer.setAttribute("id","form-group")
        
 formcontainer.innerHTML=`
 <div>
                            <label for="producto-id">ID del Producto: ${item.id} </label>
                            <input type="number" id="producto-id">
                             </div>
                                `
                            rentalform.appendChild(formcontainer)
        console.log(rentalform) 

    });
   

   


                   

                



}
