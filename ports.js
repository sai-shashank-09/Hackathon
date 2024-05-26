document.addEventListener('DOMContentLoaded', function () {
    const navLinks = document.querySelectorAll('.sidebar nav ul li a');
    const sections = document.querySelectorAll('section');

    navLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const sectionId = link.getAttribute('data-section');
            sections.forEach(section => {
                section.classList.remove('active');
                section.style.display = 'none'; 
            });
            setTimeout(() => {
                const selectedSection = document.getElementById(sectionId);
                selectedSection.style.display = 'block';
                setTimeout(() => {
                    selectedSection.classList.add('active');
                }, 20); 
            }, 20);
        });
    });
    const defaultSection = document.getElementById('profile');
    defaultSection.style.display = 'block';
    setTimeout(() => {
        defaultSection.classList.add('active');
    }, 20);
});
