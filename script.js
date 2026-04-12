document.addEventListener('DOMContentLoaded', () => {
    // Revelar elementos ao rolar a página
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

    // Mudar background do menu ao rolar
    window.addEventListener('scroll', () => {
        const nav = document.querySelector('nav');
        if (window.scrollY > 50) {
            nav.style.background = 'rgba(10, 10, 10, 0.95)';
            nav.style.padding = '20px 0';
        } else {
            nav.style.background = 'linear-gradient(to bottom, rgba(10,10,10,0.8), transparent)';
            nav.style.padding = '30px 0';
        }
    });
});
