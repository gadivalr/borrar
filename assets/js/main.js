
(() => {
  // Theme switch
  const body = document.body;
  const lamp = document.getElementById("mode");

  const toggleTheme = (state) => {
    if (state === "dark") {
      localStorage.setItem("theme", "light");
      body.removeAttribute("data-theme");
    } else if (state === "light") {
      localStorage.setItem("theme", "dark");
      body.setAttribute("data-theme", "dark");
    } else {
      initTheme(state);
    }

    // Actualizar Disqus después de cambiar el tema
    
  };

  lamp.addEventListener("click", () =>
    toggleTheme(localStorage.getItem("theme"))
  );

  // Blur the content when the menu is open
  const cbox = document.getElementById("menu-trigger");

  cbox.addEventListener("change", function () {
    const area = document.querySelector(".wrapper");
    this.checked
      ? area.classList.add("blurry")
      : area.classList.remove("blurry");
  });
})();

// Obtén la casilla de verificación del menú
var menuTrigger = document.getElementById('menu-trigger');

// Obtén todos los enlaces del menú
var menuLinks = document.querySelectorAll('.menu-link');

// Agrega un controlador de eventos a cada enlace del menú
menuLinks.forEach(function(link) {
  link.addEventListener('click', function() {
    // Desmarca la casilla de verificación del menú
    menuTrigger.checked = false;
  });
});

