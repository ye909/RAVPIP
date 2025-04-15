document.addEventListener('DOMContentLoaded', function() {
    const btnView = document.getElementById('btnView');
    const btnSuggestion = document.getElementById('btnSuggestion');
    const infoContainer = document.getElementById('infoContainer');
    const suggestionForm = document.getElementById('suggestionForm');
  
    btnView.addEventListener('click', function(event) {
      event.preventDefault();
      // Aquí se debe implementar la lógica para mostrar la información de los equipos reparados
      // Puede ser mediante una petición AJAX a un servidor o con datos simulados
      infoContainer.innerHTML = '<p>Información de equipos reparados...</p>';
    });
  
    btnSuggestion.addEventListener('click', function(event) {
      event.preventDefault();
      suggestionForm.style.display = 'block';
    });
  
    suggestionForm.addEventListener('submit', function(event) {
      event.preventDefault();
      const suggestionText = document.getElementById('suggestionText').value;
      // Aquí se puede implementar la lógica para enviar la sugerencia
      console.log('Sugerencia enviada:', suggestionText);
      // Limpiar formulario después de enviar
      document.getElementById('suggestionText').value = '';
      suggestionForm.style.display = 'none';
    });
  });
  