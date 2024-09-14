// Array con datos de proyectos (puedes agregar más)
const projects = [
    {
        image: 'images/project1.png',  // Reemplaza con la ruta de tu captura
        description: 'Descripción del Proyecto 1...'
    },
    {
        image: 'images/project2.png',
        description: 'Descripción del Proyecto 2...'
    },
    {
        image: 'images/project3.png',
        description: 'Descripción del Proyecto 3...'
    }
];

// Agregar evento a los botones de proyecto
document.addEventListener('DOMContentLoaded', function() {
    const projects = [
        {
            image: 'images/project1.png',
            description: 'Descripción del Proyecto 1...'
        }
        // Agrega más proyectos si lo necesitas
    ];

    // Selecciona todos los botones de proyecto
    document.querySelectorAll('.project-button').forEach(button => {
        button.addEventListener('click', function() {
            const projectIndex = this.getAttribute('data-project') - 1;
            const project = projects[projectIndex];

            // Mostrar la imagen y la descripción
            const projectImage = document.getElementById('project-image');
            const projectDescription = document.getElementById('project-description');

            if (project) {
                projectImage.src = project.image;
                projectImage.style.display = 'block';
                projectDescription.textContent = project.description;
                projectDescription.style.display = 'block';
            }
        });
    });
});
