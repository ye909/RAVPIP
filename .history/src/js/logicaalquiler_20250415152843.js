


async function a() {
    const res= await fetch("/src/js/produtosAlquiler.json")
    const data= await res.json()

  
    data.forEach((item,idex) => {
       
        const rentalform= document.getElementById("rental-form")
        const formcontainer = document.createElement("div")
        formcontainer.classList.add("form-group")
        formcontainer.setAttribute("id","form-group")

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
                                 <option value="${item.frecuencia_turbo}">${item.frecuencia_turbo}</option>
                                  <option value="${item.pulgadas}">${item.pulgadas}</option>
                                   <option value="${item.tasa_refresco}">${item.tasa_refresco}</option>
                                    <option value="${item.resolucion}">${item.resolucion}</option>
                                     <option value="${item.tipo_pantalla}">${item.tipo_pantalla}</option>
                                     <option value="${item.graficos}">${item.graficos}</option>
                                    <option value="${item.procesador}">${item.procesador}</option>
                                     <option value="${item.almacenamiento}">${item.almacenamiento}</option>
                                    <option value="${item.memoria_ram}">${item.memoria_ram}</option>
                                        <option value="${item.capacidad}">${item.capacidad}</option>
                                         <option value="${item.tipo_memoria}">${item.tipo_memoria}</option>
                                <option value="${item.nucleos} ">${item.nucleos} </option>
                                <option value="${item.hilos}">${item.hilos}</option>
                                    <option value="${item.frecuencia}">${item.frecuencia}</option>
                                     <option value="${item.}">${item.}</option>
                                   <option value="${item.}">${item.}</option>
                                                    <option value="${item.}">${item.}</option>
                                                    <option value="${item.}">${item.}</option>
                                <option value="${item.frecuencia_base}">${item.frecuencia_base}</option>
                            </select>
                        
`

rentalform.appendChild(formcontainer)
        console.log(rentalform) 
        console.log(formcontainer)


    });

}
a()
