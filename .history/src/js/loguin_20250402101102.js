document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const mensaje= document.getElementById("mensaje")

    if (email === "admin@example.com" && password === "123456789") {
        mensaje.textContent="Inicio de sesión exitoso"
    } else {
        alert("Credenciales incorrectas");
    }
});