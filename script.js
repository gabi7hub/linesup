document.addEventListener('DOMContentLoaded', () => {
    // Menu Hamburguer
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('nav-links');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        // Animação básica das linhas do hamburguer
        hamburger.children[0].style.transform = navLinks.classList.contains('active') ? 'rotate(45deg) translateY(10px)' : 'none';
        hamburger.children[2].style.transform = navLinks.classList.contains('active') ? 'rotate(-45deg) translateY(-10px)' : 'none';
        hamburger.children[1].style.opacity = navLinks.classList.contains('active') ? '0' : '1';
    });

    // Reveal on Scroll
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
});
