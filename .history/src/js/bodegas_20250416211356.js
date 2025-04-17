const close =document.getElementById("close").addEventListener("click",cerrar)

function cerrar() {
 window.close("../templei/bodegas.html")
}



const inventarios = {
    bodega1: [],
    bodega2: [],
    bodega3: [],
  };
  
  const bodegaSelect = document.getElementById('bodega');
  const tablaBody = document.querySelector('#tabla-inventario tbody');
  const form = document.getElementById('form-agregar');
  
  function renderTabla() {
    const bodegaActual = bodegaSelect.value;
    tablaBody.innerHTML = '';
    inventarios[bodegaActual].forEach((pc, index) => {
      const fila = document.createElement('tr');
      fila.innerHTML = `
        <td>${pc.serial}</td>
        <td>${pc.marca}</td>
        <td>${pc.modelo}</td>
        <td>${pc.estado}</td>
      `;
      tablaBody.appendChild(fila);
    });
  }
  
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const serial = document.getElementById('serial').value;
    const marca = document.getElementById('marca').value;
    const modelo = document.getElementById('modelo').value;
    const estado = document.getElementById('estado').value;
    const bodegaActual = bodegaSelect.value;
  
    const nuevoPC = { serial, marca, modelo, estado };
    inventarios[bodegaActual].push(nuevoPC);
  
    form.reset();
    renderTabla();
  });
  
  bodegaSelect.addEventListener('change', renderTabla);
  
  // Mostrar al inicio
  renderTabla();
  const infobodega = document.getElementById("infobodega").addEventListener("click", mostrarInfoBodega)
  function mostrarInfoBodega() {
    const containertabla= document.getElementById("containertabla")
    containertabla.style.visibility="visible"
  }