const cajaverde = document.getElementById("cajaverde")
const inventario = document.getElementById("inventario")
const itemEstado = document.getElementById("itemEstado")
cajaverde.addEventListener("click",()=>{
    const sudmenu = document.getElementById("sudmenu")
    sudmenu.style.visibility="visible"
    cajaverde.remove()
}) 
inventario.addEventListener("click",(e)=>{
    e.preventDefault()
    const tablaComponentes  =document.getElementById("tablaComponentes")
    tablaComponentes.style.visibility="visible"

})
itemEstado.addEventListener("click",(e)=>{
    e.preventDefault()
    const containerProgreso  =document.getElementById("containerProgreso")
    containerProgreso.style.visibility="visible"

})

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
   

    
    sudcontainer.classList.add("product")
    sudcontainer.innerHTML=`
 

    `
    
   
})   })  
