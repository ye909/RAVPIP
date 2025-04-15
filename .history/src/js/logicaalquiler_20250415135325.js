
 document.getElementById("rental-form").addEventListener("submit",formulario)
  const formgroup = document.getElementById("form-group") 
  const formOpciones = document.getElementById("")
 formOpciones.innerHTML=`


`


  function formulario() {
    const tipo = document.getElementById("tipo")
    if (tipo) {
        console.log(tipo.value)
    }
 
  }