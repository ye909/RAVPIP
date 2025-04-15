 const fechaheder = document.getElementById("fecha")
const fecha= new Date()
const fechatotal=fecha.toLocaleDateString()
fechaheder.innerText=fechatotal
fechaheder.style.color="rgb(7, 247, 7)"

document.addEventListener("DOMContentLoaded", () => {
    fetch("/src/js/datos.json")
      .then(response => {
        if (!response.ok) {
          throw new Error(`Error al cargar el archivo JSON: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        // Verificar si el contenedor "centrado" existe
        const centrado = document.getElementById("centrado");
        if (!centrado) {
          throw new Error("El contenedor #centrado no existe en el DOM.");
        }
  
        // Crear una sola tabla
        const tablaComputador = document.createElement("table");
        tablaComputador.setAttribute("id", "tablaComponentes");
        tablaComputador.classList.add("tablaComponentes");
  
        // Crear el encabezado de la tabla
        tablaComputador.innerHTML = `
          <thead>
            <tr>
              <th>Id</th>
              <th>Producto</th>
              <th>Precio</th>
              <th>Imagen</th>
            </tr>
          </thead>
          <tbody></tbody>
        `;
  
        // Agregar la tabla al contenedor
        centrado.appendChild(tablaComputador);
  
        // Obtener el cuerpo de la tabla
        const tbody = tablaComputador.querySelector("tbody");
  
        // Iterar sobre los datos y agregar filas al tbody
        data.forEach((item, index) => {
          const row = document.createElement("tr");
          row.innerHTML = `
            <td>${index + 1}</td>
            <td>${item.name}</td>
            <td>$${item.price}</td>
            <td><img src="${item.image}" alt="${item.name}" style="max-width: 100px;"></td>
          `;
          tbody.appendChild(row); // Agregar la fila al tbody
        });
      })
      .catch(error => {
        console.error("Error:", error);
      });
  });
const cajaverde = document.getElementById("cajaverde");
const inventario = document.getElementById("inventario");
const itemEstado = document.getElementById("itemEstado");
const containerformulario= document.querySelector(".container")

cajaverde.addEventListener("click", () => {
  const sudmenu = document.getElementById("sudmenu");
  sudmenu.style.visibility = "visible";
  cajaverde.remove();
});
inventario.addEventListener("click", (e) => {
  e.preventDefault();
  const tablaComponentes = document.getElementById("tablaComponentes");
  tablaComponentes.style.visibility = "visible";
});
itemEstado.addEventListener("click", (e) => {
  e.preventDefault();
  const containerProgreso = document.getElementById("containerProgreso");
  containerProgreso.style.visibility = "visible";
});

// alquiler formulario
document.getElementById("alquilerlink").addEventListener("click",productoAlquiler)

function productoAlquiler() {
  
  containerformulario.style.visibility = "visible";
}

document.getElementById("rental-form").addEventListener("submit",productoFormulario)

function productoFormulario(event) {
  event.preventDefault()
  // localStorage.setItem("","")
  const mensajeFormulario = document.getElementById("mensajeFormulario")
  const productoid = document.getElementById("producto-id").value
const tipo = document.getElementById("tipo").value
   const marca = document.getElementById("marca").value
   const modelo = document.getElementById("modelo").value
   const fecha = document.getElementById("fecha").value
   const Precio = document.getElementById("Precio").value
   const Cantidad = document.getElementById("Cantidad").value
   const diaPrestamo = document.getElementById("diaPrestamo").value
   const detalles = document.getElementById("detalles")
 
if (productoid && tipo && marca && modelo && fecha && Precio && Cantidad && diaPrestamo && detalles) {
  console.log("listo")
   containerformulario.style.visibility = "hidden";
   Swal.fire({
    title: "En hora buena  prestamo realizado",
    icon: "success",
    draggable: true
  });
  
}else{
  mensajeFormulario.textContent="Lo sentimo hay campos vacios"
 mensajeFormulario.style.fontSize="20px"
 mensajeFormulario.style.color="red"
 mensajeFormulario.style.textAlign="center"
setTimeout(()=>{
  mensajeFormulario.innerText=""
},2500)
}
// esta informacion debe almacenar
console.log(productoid,tipo,marca,modelo,fecha,Precio , Cantidad ,diaPrestamo,detalles)
}

const menuHistoria1 = document.querySelector(".menuHistoria1")
const contenedornav1 = document.querySelector("contenedornav1")
document.getElementById("Historial").addEventListener("click",hitorialAlquiler)

function hitorialAlquiler() {
  menuHistoria1.style.display = "none";

  const submenuHistoria = document.createElement("ul")
 submenuHistoria.innerHTML= ` 
 <> </>
   `
   contenedornav1.appendChild(submenuHistoria)

  
 

}
{/* <li><a href="">Historial Ventas</a></li>
<li><a href="./src/templei/historiaAlquiler.html">Historial Alquiler</a></li> 
    <li><a href="">Historial Reparación</a></li>  
     <li><a href="">Historial Bajas</a></li */}
     