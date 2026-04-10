document.addEventListener("DOMContentLoaded", () => {

    // ========== SCROLL REVEAL ==========
    const animElements = document.querySelectorAll('.anim-up');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, i) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add('visible');
                }, i * 80);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    animElements.forEach(el => observer.observe(el));

    // ========== MOBILE MENU ==========
    const menuToggle = document.getElementById('menuToggle');
    const navLinks = document.getElementById('navLinks');

    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('open');
    });

    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('open');
        });
    });

    // ========== FORM HANDLER ==========
    const form = document.getElementById('contactForm');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const btn = form.querySelector('button');
            const original = btn.innerHTML;

            btn.innerHTML = 'Sending... <i class="fas fa-spinner fa-spin"></i>';
            btn.disabled = true;

            setTimeout(() => {
                btn.innerHTML = 'Sent! <i class="fas fa-check"></i>';
                btn.style.background = '#28a745';
                form.reset();

                setTimeout(() => {
                    btn.innerHTML = original;
                    btn.style.background = '';
                    btn.disabled = false;
                }, 3000);
            }, 1500);
        });
    }
});
