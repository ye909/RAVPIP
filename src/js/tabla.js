const tabla = document.getElementById("tabla");
const ventasForm= document.getElementById("ventasForm");
const  serial =  document.getElementById("serial");
const fabricante  =document.getElementById("fabricante");
const indentificar = document.getElementById("indentificaor");



const serialData = document.getElementById("serialData");
const fabricanteData = document.getElementById("fabricanteData");

ventasForm.addEventListener("submit", (e) => {
    e.preventDefault();

    if (serial!= "" || fabricante != "" || indentificaor != "") {
        serialData.innerText=serial.value 
        fabricanteData.innerText=fabricante.value
        indentificaData.innerText=indentificar.value
    }else{
        alert("Por favor llena los campos")
    }
   
    
})