
document.getElementById("close").addEventListener("click",cerrar)

function cerrar() {
 
 window.location.href="/index.html"
}

document.getElementById("infobodega").addEventListener("click", mostrarInfoBodega)
function mostrarInfoBodega() {
  
  const containertabla= document.getElementById("containertabla")
  containertabla.style.visibility="visible"
}

const selectEstado = document.getElementById("estado").addEventListener("change", mostrarReparicion ) 
    
function mostrarReparicion() {
  alert("ya")
  if (selectEstado.value === "En reparación") {
  }
} 

const inventarios = {
    bodega1: [],
    bodega2: [],
    bodega3: [],
  };
  
  const bodegaSelect = document.getElementById('bodega');
  const tablaBody = document.querySelector('#tabla-inventario tbody');
  const form = document.getElementById('form-agregar');
  
  function renderTabla() {
    const bodegaActual = bodegaSelect.value;
    tablaBody.innerHTML = '';
    inventarios[bodegaActual].forEach((pc, index) => {
      const fila = document.createElement('tr');
      fila.innerHTML = `
        <td>${pc.serial}</td>
        <td>${pc.marca}</td>
        <td>${pc.modelo}</td>
        <td>${pc.estado}</td>
      `;
      tablaBody.appendChild(fila);
    });
  }
  
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const serial = document.getElementById('serial').value;
    const marca = document.getElementById('marca').value;
    const modelo = document.getElementById('modelo').value;
    const estado = document.getElementById('estado').value;
    const bodegaActual = bodegaSelect.value;
  
    const nuevoPC = { serial, marca, modelo, estado };
    inventarios[bodegaActual].push(nuevoPC);
  
    form.reset();
    renderTabla();
  });
  
  bodegaSelect.addEventListener('change', renderTabla);
  
  // Mostrar al inicio
  renderTabla();
 
//   <form id="form-agregar" class="form-agregar">
//   <!-- <div><label for="">
//     <input type="number"placeholder="Codigo">
//   </label></div> -->
//   <div><label for="serial">Ingrese el seria
//       <input type="text" id="serial" placeholder="Serial" required />
//     </label></div>
//   <div><label for="marca">Ingrese tipo de marca
//       <input type="text" id="marca" placeholder="Marca" required />
//     </label>
//   </div>
//   <div><label for="modelo">Ingrese el modelo
//       <input type="text" id="modelo" placeholder="Modelo" required />
//     </label></div>
//   <div>
//     <label for="cantidad">Ingrese la cantidad
//       <input type="number" id="cantidad" placeholder="Cantidad" required />
//     </label>
//   </div>
//   <div><input type="number" id="serial" placeholder="Stock" required /> </div>
//   <div><input type="number" id="modelo" placeholder="Precio" required /></div>
//   <div><input type="text" id="serial" placeholder="" required /> </div>
//   <div><input type="date" id="marca" placeholder="facha" required /></div>

//   <!--  -->
//   <div class="btnacciones">
//     <div> <button type="submit">Agregar</button></div>
//     <div> <button type="">Editar</button></div>
//     <div> <button type="reset">Borrar</button></div>
//     <div> <button type="">Mostrar</button></div>
//   </div>
// </form>