document.addEventListener('DOMContentLoaded', () => {
    // Revelar ao scroll
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

    // Navbar dinâmico
    const nav = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            nav.style.padding = '12px 0';
            nav.style.background = 'rgba(8, 8, 8, 0.98)';
        } else {
            nav.style.padding = '20px 0';
            nav.style.background = 'rgba(8, 8, 8, 0.9)';
        }
    });
});
