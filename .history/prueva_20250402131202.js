// Dropdown Menu Functionality
document.addEventListener("DOMContentLoaded", function() {
    const triggerBtn = document.getElementById("dropdownTrigger");
    const menuContent = document.getElementById("dropdownMenu");
  
    // Toggle Menu on Trigger Click
    triggerBtn.addEventListener("click", function() {
      menuContent.classList.toggle("show");
    });
  
    // Close Menu When Clicked Outside
    document.addEventListener("click", function(event) {
      if (!menuContent.contains(event.target) && event.target !== triggerBtn) {
        menuContent.classList.remove("show");
      }
    });
  });
  