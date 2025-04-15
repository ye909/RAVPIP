


async function a() {
    const res= await fetch("/src/js/produtosAlquiler.json")
    const data= await res.json()

    const rentalform= document.getElementById("rental-form")
    data.forEach(item => {
      
        const formcontainer = document.createElement("div")
        formcontainer.classList.add("form-group")
        formcontainer.setAttribute("id","form-group")

        console.log(formcontainer)
        formcontainer.innerHTML=  ` <label for="producto-id">ID del Producto:   </label>
                            <p>${item.id}
`

rentalform.appendChild(formcontainer)
        console.log(rentalform) 
        console.log(formcontainer)


    });

}
a()
