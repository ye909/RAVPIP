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
    const productlist = document.getElementById("product-list")
    const sudcontainer=document.createElement("div")
    sudcontainer.setAttribute("data-id", item.id); // Suponiendo que el JSON tiene un campo "id"
    sudcontainer.setAttribute("data-name", item.name);
    sudcontainer.setAttribute("data-price", item.price);

    
    sudcontainer.classList.add("product")
    sudcontainer.innerHTML=`
 

    `
    
   
})   })  
