document.addEventListener('DOMContentLoaded', () => {
    console.log("Landing page de Asesorías Millán cargada correctamente.");

    // Efecto de aparición suave (fade-in) para las tarjetas al hacer scroll
    const cards = document.querySelectorAll('.pillar-card, .problem-card, .service-box, .personal-image-container');

    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        observer.observe(card);
    });

    // Interactividad para los botones de contacto y navegación
    const actionButtons = document.querySelectorAll('.btn-whatsapp, .btn-cta-nav, .nav-logo');
    actionButtons.forEach(button => {
        button.addEventListener('click', () => {
            console.log("Interacción de conversión registrada hacia WhatsApp.");
        });
    });
});