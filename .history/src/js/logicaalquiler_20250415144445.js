
 const rentalform= document.getElementById("rental-form")

async function a() {
    const res= await fetch("/src/js/produtosAlquiler.json")
    const data= await res.json()
    data.forEach(item => {
        const formcontainer = document.createElement("div")
        formcontainer.classList.add("form-group")
        formcontainer.setAttribute("id","form-group")
        
 formcontainer.innerHTML=`
 <div>
                            <label for="producto-id">ID del Producto: ${item.id} </label>
                            <input type="number" id="producto-id">
                            <label for="tipo">Tipo:</label>
                            <select id="tipo">
                                <option value="">Seleccione el producto</option>
                                <option value="CPU">CPU</option>
                                <option value="Monitor">Monitor</option>
                                <option value="Computadora">Computadora</option>
                                <option value="Memoria RAM">Memoria RAM</option>
                                <option value="Almacenamiento">Almacenamiento</option>
                                <option value="Tarjeta Gráfica">Tarjeta Gráfica</option>
                                <option value="Refrigeración">Refrigeración</option>
                                <option value="Fuente de Poder">Fuente de Poder</option>
                                <option value="Placa Madre">Placa Madre</option>
                                <option value="Periférico">Periférico</option>
                                <option value="Gabinete">Gabinete</option>
                            </select>`
                            rentalform.appendChild(formcontainer)
        console.log(rentalform) 

    });
   

   


                   

                



}
