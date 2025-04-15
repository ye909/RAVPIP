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
  const containerformulario= document.querySelector(".container")
  containerformulario.style.visibility = "visible";
}

document.getElementById("rental-form").addEventListener("submit",productoFormulario)

function productoFormulario(event) {
  event.preventDefault()
  const productoid = document.getElementById("producto-id").value
  const tipo = document.getElementById("tipo").value
  const marca = document.getElementById("marca").value
  const modelo = document.getElementById("modelo").value
  const fecha = document.getElementById("fecha").value
  const Precio = document.getElementById(" Precio").value
  const cantidad = document.getElementById("cantidad").value
  const diaPrestamo = document.getElementById("diaPrestamo").value
 

console.log(productoid,tipo,marca,modelo,fecha,Precio,cantidad,diaPrestamo)
}