async function a() {
  const res = await fetch("/src/js/produtosAlquiler.json");
  const data = await res.json();

  data.forEach((item, idex) => {
    const rentalform = document.getElementById("rental-form");
    const formcontainer = document.createElement("div");
    formcontainer.classList.add("form-group");
    formcontainer.setAttribute("id", "form-group");

    console.log(formcontainer);
    formcontainer.innerHTML = `<div> <label for="producto-id">ID del Producto:${idex + 1} </label>
               
                        
                            <label for="Precio">Precio:</label>
                            <input type="number" id="Precio">
                            <label for="days">Días de alquiler:</label>
                            <input type="number" id="diaPrestamo" /><br><br>
                            <h3>Total del alquiler: <span id="total">$0</span></h3>
                        </div>
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
                                    <option value="${item.resolucion}">${item.resolucion}</option
                                     <option value="${item.tipo_pantalla}">${ item.tipo_pantalla}</option>
                                     <option value="${item.graficos}">${item.graficos}</option>
                                    <option value="${item.procesador}">${item.procesador}</option>
                                     <option value="${item.almacenamiento}">${item.almacenamiento}</option>
                                    <option value="${item.memoria_ram}">${item.memoria_ram}</option>
                                        <option value="${item.capacidad}">${item.capacidad}</option>
                                         <option value="${item.tipo_memoria}">${item.tipo_memoria}</option>
                                <option value="${item.nucleos} ">${item.nucleos} </option>
                                <option value="${item.hilos}">${item.hilos}</option>
                                    <option value="${item.frecuencia}">${item.frecuencia}</option>
                                     <option value="${item.cantidad}">${item.cantidad}</option>
                                   <option value="${item.tipo_almacenamiento}">${item.tipo_almacenamiento}</option>
                                   <option value="${ item.velocidad_lectura}">${item.velocidad_lectura}</option>
                                <option value="${ item.velocidad_escritura}">${item.velocidad_escritura}</option>
                                <option value="${item.frecuencia_base}">${item.frecuencia_base}</option>
                            </select>
                             
                        
`;

    rentalform.appendChild(formcontainer);
  });
}

a();

function formulariocpu() {
  alert("cpu");
}
