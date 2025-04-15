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
    const containerthead =document.createElement("thead")
    containerthead.innerHTML =`

              
                <thead>
                    <tr>
                        <th>Procesador</th>
                        <th>Memoria RAM</th>
                        <th>Disco Duro</th>
                        <th>SSD</th>
                        <th>Placa Base</th>
                        <th>Fuente de Poder</th>
                        <th>Tarjeta Gráfica</th>
                        <th>Ventilador</th>
                        <th>Gabinete</th>
                        <th>Monitor</th>
                        
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Procesador</td>
                        <td>Intel Core i5</td>
                        <td>SSD 250</td>
                    </tr>
</tbody>
    `
   

    
    sudcontainer.classList.add("product")
    sudcontainer.innerHTML=`
 

    `
    
   
})   })  
