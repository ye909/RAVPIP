
 document.getElementById("rental-form").addEventListener("submit",formulario)
  


  function formulario() {
    const tipo = document.getElementById("tipo")
    if (tipo) {
        console.log(tipo.value)
    }
 
  }