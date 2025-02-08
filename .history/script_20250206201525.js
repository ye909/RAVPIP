// script.js
document.addEventListener('DOMContentLoaded', function () {
    // Inicializar porcentajes en localStorage si no existen
    if (!localStorage.getItem('porcentajes')) {
        localStorage.setItem('porcentajes', JSON.stringify([0, 0, 0, 0, 0]));
    }

    // Obtener los porcentajes actuales
    let porcentajes = JSON.parse(localStorage.getItem('porcentajes'));

    // Función para actualizar los contadores en la página principal
    function actualizarContadores() {
        const contadores = [
            document.getElementById('contadorProgreso1'),
            document.getElementById('contadorProgreso2'),
            document.getElementById('contadorProgreso3'),
            document.getElementById('contadorProgreso4'),
            document.getElementById('contadorProgreso5')
        ];

        if (contadores[0]) { // Solo si los contadores existen en la página
            contadores.forEach((contador, index) => {
                contador.innerHTML = `<span class="tituloProceso">${contador.querySelector('.tituloProceso').textContent}</span> <br> ${porcentajes[index]}%`;
            });
        }
    }

    // Función para aumentar un porcentaje
    function aumentarPorcentaje(index, cantidad) {
        if (porcentajes[index] + cantidad <= 100) {
            porcentajes[index] += cantidad;
            localStorage.setItem('porcentajes', JSON.stringify(porcentajes));
            actualizarContadores();
        } else {
            alert('El porcentaje no puede superar el 100%.');
        }
    }

    // Evento para el enlace "Estado"
    const enlaceEstado = document.getElementById('itemEstado');
    if (enlaceEstado) {
        enlaceEstado.addEventListener('click', function (event) {
            event.preventDefault();
            // alert(`Estado actual:\nHistorial: ${porcentajes[0]}%\nReparado: ${porcentajes[1]}%\nNuevo: ${porcentajes[2]}%\nDisponible: ${porcentajes[3]}%\nStock: ${porcentajes[4]}%`);
        });
    }

    // Eventos para los botones en las páginas secundarias
    const botones = {
        aumentarRegistro: document.getElementById('aumentarRegistro'),
        aumentarVentas: document.getElementById('aumentarVentas'),
        aumentarPrestamo: document.getElementById('aumentarPrestamo'),
        aumentarReparacion: document.getElementById('aumentarReparacion'),
        aumentarBajas: document.getElementById('aumentarBajas')
    };

    if (botones.aumentarRegistro) {
        botones.aumentarRegistro.addEventListener('click', () => aumentarPorcentaje(0, 10));
    }
    if (botones.aumentarVentas) {
        botones.aumentarVentas.addEventListener('click', () => aumentarPorcentaje(1, 10));
    }
    if (botones.aumentarPrestamo) {
        botones.aumentarPrestamo.addEventListener('click', () => aumentarPorcentaje(2, 10));
    }
    if (botones.aumentarReparacion) {
        botones.aumentarReparacion.addEventListener('click', () => aumentarPorcentaje(3, 10));
    }
    if (botones.aumentarBajas) {
        botones.aumentarBajas.addEventListener('click', () => aumentarPorcentaje(4, 10));
    }

    // Actualizar contadores al cargar la página
    actualizarContadores();
});