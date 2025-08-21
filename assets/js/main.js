let lastScrollTop = 0;
const header = document.querySelector('header');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    if (currentScroll > lastScrollTop && currentScroll > 100) {
        header.classList.add('scrolled-down');
        header.classList.remove('scrolled-up');
    } else if (currentScroll < lastScrollTop) {
        header.classList.remove('scrolled-down');
        header.classList.add('scrolled-up');
    }
    lastScrollTop = currentScroll;
});

// Lazy loading para o iframe do Spline
document.addEventListener('DOMContentLoaded', function() {
    const lazyIframe = document.querySelector('iframe[data-src]');
    if (lazyIframe) {
        const loadIframe = () => {
            if (lazyIframe.dataset.src) {
                lazyIframe.src = lazyIframe.dataset.src;
                lazyIframe.removeAttribute('data-src');
            }
        };

        // Carregar iframe quando estiver próximo da viewport
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    loadIframe();
                    observer.unobserve(entry.target);
                }
            });
        }, {
            rootMargin: '50px'
        });

        observer.observe(lazyIframe);
    }
});

// Otimização do AOS
document.addEventListener('DOMContentLoaded', function() {
    // Inicializar AOS apenas quando necessário
    const aosElements = document.querySelectorAll('[data-aos]');
    if (aosElements.length > 0) {
        AOS.init({
            duration: 800,
            easing: 'ease-out',
            once: true,
            startEvent: 'load',
            disable: window.innerWidth < 768
        });
    }
});

// Delegação de eventos otimizada
document.addEventListener('DOMContentLoaded', function() {
    // Form submission handler with debounce
    const forms = document.querySelectorAll('form');
    let isSubmitting = false;

    forms.forEach(form => {
        form.addEventListener('submit', async function(e) {
            e.preventDefault();
            if (isSubmitting) return;
            
            isSubmitting = true;
            const button = this.querySelector('button[type="submit"]');
            const originalText = button.textContent;
            button.textContent = 'Enviando...';
            
            try {
                // Aqui vai a lógica de envio do formulário
                await new Promise(resolve => setTimeout(resolve, 1000));
                
                // Feedback de sucesso
                button.textContent = 'Enviado!';
                form.reset();
            } catch (error) {
                button.textContent = 'Erro. Tente novamente.';
            } finally {
                isSubmitting = false;
                setTimeout(() => {
                    button.textContent = originalText;
                }, 2000);
            }
        });
    });
});
