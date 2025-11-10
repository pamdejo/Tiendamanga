document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.getElementById("menuToggle");
  const navMenu = document.getElementById("navMenu");
  const body = document.body;

  if (menuToggle && navMenu) {
    menuToggle.addEventListener("click", () => {
      menuToggle.classList.toggle("active");
      navMenu.classList.toggle("open");
      body.classList.toggle("no-scroll");
    });

    // Cerrar menú al hacer clic en un enlace
    document.querySelectorAll(".nav a").forEach((link) => {
      link.addEventListener("click", () => {
        navMenu.classList.remove("open");
        menuToggle.classList.remove("active");
        body.classList.remove("no-scroll");
      });
    });
  }
});