// Sticky Header Effect
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.style.padding = '0.5rem 0';
        header.style.background = 'rgba(12, 27, 51, 0.98)';
    } else {
        header.style.padding = '1rem 0';
        header.style.background = 'rgba(12, 27, 51, 0.9)';
    }
});

// Mobile menu toggle (simplified for now)
// In a real app, you'd add a hamburger menu here.

// Scroll Reveal Animation (Simple Implementation)
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

document.querySelectorAll('.service-card, .feature-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'all 0.6s ease-out';
    observer.observe(el);
});

// Form submission handling
const form = document.querySelector('form');
if (form) {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Talebiniz başarıyla alındı. En kısa sürede size dönüş yapacağız!');
        form.reset();
    });
}
