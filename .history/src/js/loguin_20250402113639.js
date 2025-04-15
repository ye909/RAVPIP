document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const mensaje= document.getElementById("mensaje")
    const  logincontainer = document.getElementById("login-container")

    if (email === "alexyesid711@gmail.com" && password === "123") {
       
        logincontainer.style.display="none"
        Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Inicio de sesión exitoso",
            showConfirmButton: false,
            timer: 1500
            
          });
          setTimeout(() => {
            window.location.href = "/index.html"; // Asigna la nueva URL como una cadena aquí
          }, 1501);
       

        if (email === "" && password === "") {
            mensaje.textContent="Ingresa los datos solicitados"
            mensaje.style.color="red"
        }
    } else {
         mensaje.textContent="Contraseña o Correo incorecto"
        mensaje.style.color="red"
      setTimeout(()=>{
          mensaje.textContent=""
      },1000)
    }
  
});