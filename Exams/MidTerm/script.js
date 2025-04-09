document.addEventListener('DOMContentLoaded', function() {
    console.log("DOM loaded"); // Check if script loads
    
    const previousTasksBtn = document.getElementById('previousTasksBtn');
    const megaMenu = document.getElementById('megaMenu');
    
    if (!previousTasksBtn || !megaMenu) {
      console.error("Elements not found!");
      return;
    }
  
    console.log("Elements found"); // Verify elements exist
    
    previousTasksBtn.addEventListener('click', function(e) {
      e.preventDefault();
      e.stopPropagation();
      console.log("Button clicked"); // Verify click event
      
      document.querySelectorAll('.mega-menu.active').forEach(menu => {
        if (menu !== megaMenu) menu.classList.remove('active');
      });
      
      megaMenu.classList.toggle('active');
      console.log("Menu toggled. Current state:", megaMenu.classList.contains('active'));
    });
    
    document.addEventListener('click', function(e) {
      if (!megaMenu.contains(e.target) && !previousTasksBtn.contains(e.target)) {
        megaMenu.classList.remove('active');
      }
    });
    
    megaMenu.addEventListener('click', function(e) {
      e.stopPropagation();
    });
  });


  