


async function a() {
    const res= await fetch("/src/js/produtosAlquiler.json")
    const data= await res.json()

    const rentalform= document.getElementById("rental-form")
    const formcontainer = document.createElement("div")
    formcontainer.classList.add("form-group")
    formcontainer.setAttribute("id","form-group")
    data.forEach((item,idex) => {
       
       

        console.log(formcontainer)
        formcontainer.innerHTML=  ` <label for="producto-id">ID del Producto:     <p>${idex + 1}</p>  </label>
        <label for="tipo">Tipo:</label>
                            <select id="tipo">
                                <option value="">Seleccione el producto</option>
                                <option value="${item.nombre} ">${item.nombre} </option>
                                <option value="${item.tipo} ">${item.tipo} </option>
                                <option value="${item.precio} ">${item.precio} </option>
                                <option value="${item.marca}">${item.marca}</option>
                                <option value="${item.modelo}">${item.modelo}</option>
                               
                            </select>
                        
`

rentalform.appendChild(formcontainer)
        console.log(rentalform) 
        console.log(formcontainer)


    });

}
a()
