document.getElementById('buscar-input').addEventListener('input', () => {
    const busqueda = document.getElementById('buscar-input').value.toLowerCase();
    const procesosFiltrados = procesos.filter(p => p.id.includes(busqueda));
    actualizarProgresos(procesosFiltrados);
});