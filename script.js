document.addEventListener('DOMContentLoaded', () => {
    const tabs = document.querySelectorAll('.tab');
    const contents = document.querySelectorAll('.project-content');

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            // Remove active class from all tabs
            tabs.forEach(t => t.classList.remove('active'));
            // Hide all project contents
            contents.forEach(content => content.classList.remove('active'));

            // Add active class to the clicked tab
            tab.classList.add('active');
            // Show the content related to the clicked tab
            const target = tab.getAttribute('data-target');
            document.getElementById(target).classList.add('active');
        });
    });
});


// evento de click sobre las secciones del aside 
const navLinks = document.querySelectorAll('nav ul li a');
navLinks.forEach(link => {
    link.addEventListener('click', function() {
        navLinks.forEach(link => link.classList.remove('active'));
        this.classList.add('active');
    })
})


//Evento de scroll
// Obtener todas las secciones y enlaces de navegación
const sections = document.querySelectorAll("section");

// Función que verifica la sección en pantalla
window.addEventListener("scroll", () => {
  let current = "";

  // Iterar sobre las secciones y verificar cuál está visible
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;

    if (pageYOffset >= sectionTop - sectionHeight / 3) {
      current = section.getAttribute("id"); // Obtener el id de la sección visible
    }
  });

  // Quitar la clase active de todos los enlaces y agregarla al correspondiente
  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
});
