
const rentalform= document.getElementById("rental-form").addEventListener("submit",formulario)



  const formcontainer = document.createElement("div")
  formcontainer.classList.add("form-group")
  formcontainer.setAttribute("id","form-group")

 formcontainer.innerHTML=`
                        <div>
                            <label for="producto-id">ID del Producto:</label>
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
                            </select>
                            <label for="quantity">Cantidad:</label>
                            <input type="number" id="Cantidad"  />
                        </div>

                        <div>
                            <label for="marca">Marca:</label>
                            <input type="text" id="marca">

                            <label for="modelo">Modelo:</label>
                            <input type="text" id="modelo">
                            <label for="fecha">fecha:</label>
                            <input type="date" id="fecha">
                        </div>
                        <div>
                            <label for="Precio">Precio:</label>
                            <input type="number" id="Precio">
                            <label for="days">Días de alquiler:</label>
                            <input type="number" id="diaPrestamo"  /><br><br>
                            <h3>Total del alquiler: <span id="total">$0</span></h3>
                        </div>
                        <div class="form-group">

                            <div>
                                <label for="detalles">Detalles Adicionales:</label>
                                <textarea name="" id="detalles" cols="70" rows="10" ></textarea>
                            </div>
                        </div>


                    </div>
                    <p id="mensajeFormulario"></p>
                    <button type="submit" >Enviar</button>
  

`
console.log(formcontainer )

  function formulario() {
    const tipo = document.getElementById("tipo")
    if (tipo) {
        console.log(tipo.value)
    }
 
  }