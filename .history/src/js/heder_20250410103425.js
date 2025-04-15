
    fetch("/src/js/datos.json")
      .then(response => response.json())
      .then(data =>{
        const centrado = document.getElementById("centrado")

        const tablaComputador =document.createElement("table")
        tablaComputador.setAttribute("id","tablaComponentes") 
        tablaComputador.classList.add("tablaComponentes")
        tablaComputador.innerHTML= `
        
<thead>
    <tr>
        <th>Procesador</th>
        <th>Memoria RAM</th>
        <th>Disco Duro</th>
     

    </tr>
</thead>
        `
        centrado.appendChild(tablaComputador)
      })
   






 
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