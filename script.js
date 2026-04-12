document.addEventListener('DOMContentLoaded', () => {
    
    // --- LÓGICA DO MENU HAMBURGUER ---
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('nav-links');

    hamburger.addEventListener('click', () => {
        // Abre/Fecha o menu
        navLinks.classList.toggle('active');
        // Transforma o ícone em "X"
        hamburger.classList.toggle('open');
    });

    // Fecha o menu ao clicar em um link (importante para mobile)
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            hamburger.classList.remove('open');
        });
    });

    // --- ANIMAÇÃO DE REVEAL (SURGIR AO SCROLL) ---
    const revealElements = document.querySelectorAll('.reveal');
    
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, { 
        threshold: 0.15 // Começa a animação quando 15% do elemento aparece
    });

    revealElements.forEach(el => revealObserver.observe(el));

    // --- HEADER DINÂMICO ---
    // Faz o menu mudar de transparência ao rolar
    window.addEventListener('scroll', () => {
        const nav = document.querySelector('nav');
        if (window.scrollY > 50) {
            nav.style.background = 'rgba(8, 8, 8, 0.95)';
            nav.style.padding = '12px 0';
        } else {
            nav.style.background = 'rgba(8, 8, 8, 0.85)';
            nav.style.padding = '18px 0';
        }
    });
});
