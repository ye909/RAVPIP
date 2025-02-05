const itemEstado=document.getElementById('itemEstado');
const containerProgreso=document.getElementById('containerProgreso');


itemEstado.addEventListener('click',(e)=>{
    e.preventDefault();
    containerProgreso.style.display='inline';
    containerProgreso.style.display='flex';
});