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

