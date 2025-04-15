document.addEventListener("DOMContentLoaded", () => {
    fetch("../js/datos.json")
      .then(response => response.json())
      .then(data => {
        // Verificar si el contenedor "centrado" existe
        const centrado = document.getElementById("centrado");
  
        // Crear una sola tabla
        const containerTabla = document.createElement("table");
        containerTabla.classList.add("tablaComponentes");
        containerTabla.setAttribute("id", "tablaComponentes");
  
        // Crear el encabezado de la tabla
        containerTabla.innerHTML = `
          <thead>
            <tr>
              <th>Id</th>
              <th>Imagen</th>
              <th>Título</th>
              <th>Precio</th>
            </tr>
          </thead>
          <tbody></tbody>
        `;
  
        // Agregar la tabla al contenedor
        centrado.appendChild(containerTabla);
  
        // Obtener el cuerpo de la tabla
        const tbody = containerTabla.querySelector("tbody");
  
        // Iterar sobre los datos y agregar filas al tbody
        data.forEach((item, index) => {
          const row = document.createElement("tr");
          row.innerHTML = `
            <td>${index + 1}</td>
            <td><img src="${item.image}" alt="${item.name}"></td>
            <td>${item.name}</td>
            <td>$${item.price}</td>
          `;
          tbody.appendChild(row);
        });
      })
      
  });  
const cajaverde = document.getElementById("cajaverde")
// const inventario = document.getElementById("inventario")
const itemEstado = document.getElementById("itemEstado")
cajaverde.addEventListener("click",()=>{
    const sudmenu = document.getElementById("sudmenu")
    sudmenu.style.visibility="visible"
    cajaverde.remove()
}) 
// inventario.addEventListener("click",(e)=>{
//     e.preventDefault()
//     const tablaComponentes  =document.getElementById("tablaComponentes")
//     tablaComponentes.style.visibility="visible"

// })
itemEstado.addEventListener("click",(e)=>{
    e.preventDefault()
    const containerProgreso  =document.getElementById("containerProgreso")
    containerProgreso.style.visibility="visible"

})