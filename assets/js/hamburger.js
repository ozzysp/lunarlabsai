// assets/js/hamburger.js
document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('nav-links');
    const body = document.body;

    const alignNavLinks = () => {
        const links = navLinks.querySelectorAll('a');
        let maxWidth = 0;

        // Reset styles to measure natural width
        links.forEach(link => {
            link.style.width = 'auto';
        });

        // Find the maximum width
        links.forEach(link => {
            if (link.offsetWidth > maxWidth) {
                maxWidth = link.offsetWidth;
            }
        });

        // Set all links to the maximum width
        links.forEach(link => {
            link.style.width = `${maxWidth}px`;
        });
    };

    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            const isActive = navLinks.classList.contains('active');
            
            navLinks.classList.toggle('active');
            hamburger.classList.toggle('is-active');
            
            // Prevenir scroll quando menu está aberto
            if (!isActive) {
                body.classList.add('menu-open');
                // Align links when menu is opened
                setTimeout(alignNavLinks, 50); // Use a small timeout to allow for rendering
            } else {
                body.classList.remove('menu-open');
            }
        });
        
        // Fechar menu ao clicar em um link
        const navLinksItems = navLinks.querySelectorAll('a');
        navLinksItems.forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                hamburger.classList.remove('is-active');
                body.classList.remove('menu-open');
            });
        });
        
        // Fechar menu com tecla ESC
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
                hamburger.classList.remove('is-active');
                body.classList.remove('menu-open');
            }
        });
     }
});