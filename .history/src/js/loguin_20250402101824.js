document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const mensaje= document.getElementById("mensaje")

    if (email === "alexyesid711@gmail.com" && password === "123") {
        mensaje.textContent="Inicio de sesión exitoso"
        if (email === "" && password === "") {
            mensaje.textContent="Ingresa los datos solicitados"
            mensaje.style.color="red"
        }
    } else {
        mensaje.textContent="Contraseña o Correo incorecto"
        mensaje.style.color="red"
    }
   
});