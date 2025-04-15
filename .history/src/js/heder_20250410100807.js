

fetch("../js/datos.json")
  .then(response => response.json())
  .then(data =>{

  data.forEach((item)=>{
    const centrado = document.getElementById("centrado")
    const containerTabla =document.createElement("table")
    containerTabla.classList.add("tablaComponentes")
    containerTabla.setAttribute("id","tablaComponentes")
    containerthead.innerHTML =`<thead>
                    <tr>

                        <th>Id</th>
                        <th>Imagen</th>
                        <th>Titulo</th>
                        <th>Precio</th>
                       

                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>  <img src="${item.image}" alt="Smartphone X"></td>
                        <td>${item.name}</td>
                        <td>$ ${item.price}</td>
                    </tr>
                </tbody>

    `
    centrado.appendChild(containerTabla)
   
})   })  
