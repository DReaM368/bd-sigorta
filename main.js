// Sticky Header Effect
import { inject } from '@vercel/analytics';
 
inject();

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

// Form submission handling (WhatsApp Integration)
const form = document.getElementById('insurance-form');
if (form) {
    form.addEventListener('submit', (e) => {
        e.preventDefault();

        // Verileri al
        const name = document.getElementById('name').value;
        const phone = document.getElementById('phone').value;
        const type = document.getElementById('insurance-type').value;
        const msg = document.getElementById('message').value;

        // Mesajı oluştur
        const whatsappMsg = `Merhaba BD Sigorta, teklif almak istiyorum.%0A%0A*İsim:* ${name}%0A*Telefon:* ${phone}%0A*Sigorta Türü:* ${type}${msg ? `%0A*Not:* ${msg}` : ''}`;

        // WhatsApp Numaranız (Buraya kendi numaranızı yazın, örn: 905321234567)
        const myPhoneNumber = "905322823399"; 

        // Gönder düğmesini geçici olarak değiştir
        const btn = form.querySelector('button');
        const originalText = btn.innerHTML;
        btn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Gönderiliyor...';
        btn.disabled = true;

        setTimeout(() => {
            // WhatsApp'ı aç
            window.open(`https://wa.me/${myPhoneNumber}?text=${whatsappMsg}`, '_blank');
            
            // Başarı geri bildirimi
            btn.innerHTML = '<i class="fa-solid fa-check"></i> Başarıyla Gönderildi!';
            btn.style.background = '#27ae60';
            
            form.reset();

            // 3 saniye sonra eski haline dön
            setTimeout(() => {
                btn.innerHTML = originalText;
                btn.style.background = '';
                btn.disabled = false;
            }, 3000);
        }, 1000);
    });
}
