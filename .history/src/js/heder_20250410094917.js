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

const itemEstado=document.getElementById('itemEstado');
const containerProgreso=document.getElementById('containerProgreso');


itemEstado.addEventListener('click',(e)=>{
    e.preventDefault();
    containerProgreso.style.display='inline';
    containerProgreso.style.display='flex';
});


// Si deseas agregar una funcionalidad adicional como redirigir al usuario al hacer clic en los botones, puedes usar este código.

const buttons = document.querySelectorAll('.card button');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    alert('Serás redirigido a la página del producto.');
    // Aquí puedes redirigir al usuario a la página del producto
    // window.location.href = 'producto.html'; // Por ejemplo
  });
});

