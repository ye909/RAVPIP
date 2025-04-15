


async function a() {
    const res= await fetch("/src/js/produtosAlquiler.json")
    const data= await res.json()

    const rentalform= document.getElementById("rental-form")
    data.forEach(item => {
      
        const formcontainer = document.createElement("div")
        formcontainer.classList.add("form-group")
        formcontainer.setAttribute("id","form-group")

        console.log(formcontainer)
        formcontainer.innerHTML=  ` <label for="producto-id">ID del Producto:     <p>${item.id}</p>  </label>
        <label for="tipo">Tipo:</label>
                            <select id="tipo">
                                <option value="">Seleccione el producto</option>
                                <option value="${item.nombre} ">${item.nombre} </option>
                                <option value="${item.tipo} ">${item.tipo} </option>
                                <option value="Computadora">Computadora</option>
                                <option value="Memoria RAM">Memoria RAM</option>
                                <option value="Almacenamiento">Almacenamiento</option>
                                <option value="Tarjeta Gráfica">Tarjeta Gráfica</option>
                                <option value="Refrigeración">Refrigeración</option>
                                <option value="Fuente de Poder">Fuente de Poder</option>
                                <option value="Placa Madre">Placa Madre</option>
                                <option value="Periférico">Periférico</option>
                                <option value="Gabinete">Gabinete</option>
                            </select>
                        
`

rentalform.appendChild(formcontainer)
        console.log(rentalform) 
        console.log(formcontainer)


    });

}
a()
