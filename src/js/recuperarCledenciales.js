document.addEventListener('DOMContentLoaded', function() {
    const recoveryForm = document.getElementById('recoveryForm');
    const notification = document.getElementById('notification');
    
    recoveryForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const email = document.getElementById('email').value;
        
        // Validación simple del email
        if (!validateEmail(email)) {
            alert('Por favor ingresa un correo electrónico válido.');
            return;
        }
        
        // Simular envío de correo (en un caso real aquí harías una petición al servidor)
        console.log(`Solicitud de recuperación enviada a: ${email}`);
        
        // Mostrar notificación
        notification.style.display = 'block';
        
        // Ocultar el formulario
        recoveryForm.style.display = 'none';
        
        // Opcional: Ocultar la notificación después de 5 segundos
        setTimeout(() => {
            notification.style.display = 'none';
            recoveryForm.style.display = 'block';
        }, 5000);
    });
    
    // Función para validar email
    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }
});