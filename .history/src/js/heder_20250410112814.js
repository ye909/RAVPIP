fetch("/src/js/datos.json")
  .then((response) => response.json())
  .then((data) => {
    const centrado = document.getElementById("centrado");

    const tablaComputador = document.createElement("table");
    tablaComputador.setAttribute("id", "tablaComponentes");
    tablaComputador.classList.add("tablaComponentes");
    tablaComputador.innerHTML = `
        
<thead>
    <tr>
        <th>Id</th>
        <th>Producto</th>
        <th>Precio</th>
        <th>Imagen</th>

      <tbody></tbody>

    </tr>
</thead>
        `;
    centrado.appendChild(tablaComputador);
    const tablabody = document.querySelector("tbody");
    data.forEach((item ,index)=> {
        tablabody.innerHTML = `
        <tr>
            <td>${index + 1} </td>
            <td>${item.name} </td>
            <td>${item.price} </td>
            <td>${item.image} </td>
        </tr>

`;
tablaComputador.appendChild(tablabody)
console.log(centrado);
console.log(tablaComputador);  
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
