document.getElementById("registroForm").addEventListener("submit", function (e) {
    e.preventDefault(); // Previene que se envíe el formulario por defecto

    const nombre = document.getElementById("nombre").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // Validación básica
    if (nombre && email && password) {
      alert("¡Registro exitoso!\n" + nombre + "\n" + email);
      // Aquí puedes enviar los datos a un servidor con fetch/AJAX
    } else {
      alert("Por favor completa todos los campos.");
    }
  });