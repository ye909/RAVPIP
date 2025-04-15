document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    
    if (email === "admin@example.com" && password === "123456") {
        alert("Inicio de sesión exitoso");
    } else {
        alert("Credenciales incorrectas");
    }
});