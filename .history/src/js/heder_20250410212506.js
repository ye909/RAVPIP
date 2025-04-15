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
// alquiler
// app.js

// Cargar productos desde el archivo JSON
fetch('productos.json')
    .then(response => response.json())
    .then(productos => {
        const listaProductos = document.getElementById('productos-lista');
        productos.forEach(producto => {
            const div = document.createElement('div');
            div.className = 'producto';
            div.innerHTML = `
                <strong>ID:</strong> ${producto.id} |
                <strong>Nombre:</strong> ${producto.nombre} |
                <strong>Tipo:</strong> ${producto.tipo} |
                <strong>Disponibles:</strong> ${producto.cantidad_disponible} |
                <strong>Precio/Día:</strong> $${producto.precio_por_dia}
            `;
            listaProductos.appendChild(div);
        });
    });

// Manejar el formulario de alquiler
document.getElementById('alquiler-form').addEventListener('submit', function (event) {
    event.preventDefault();

    const productoId = parseInt(document.getElementById('producto-id').value);
    const dias = parseInt(document.getElementById('dias').value);
    const mensaje = document.getElementById('mensaje');

    fetch('productos.json')
        .then(response => response.json())
        .then(productos => {
            const producto = productos.find(p => p.id === productoId);

            if (!producto) {
                mensaje.textContent = 'Producto no encontrado.';
                mensaje.style.color = 'red';
                return;
            }

            if (producto.cantidad_disponible <= 0) {
                mensaje.textContent = 'No hay stock disponible para este producto.';
                mensaje.style.color = 'red';
                return;
            }

            const costoTotal = producto.precio_por_dia * dias;
            mensaje.innerHTML = `
                <strong>Alquiler realizado:</strong> ${producto.nombre} (${producto.tipo})<br>
                <strong>Días:</strong> ${dias}<br>
                <strong>Costo Total:</strong> $${costoTotal}
            `;
            mensaje.style.color = 'green';

            // Actualizar la cantidad disponible (simulación)
            producto.cantidad_disponible -= 1;
        });
});