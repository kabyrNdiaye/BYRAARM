// ============================================
// NAVIGATION FUNCTIONALITY
// ============================================

const navbar = document.getElementById('navbar');
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');
const navLinks = document.querySelectorAll('.nav-link');
const backToTop = document.getElementById('backToTop');

// Navbar scroll effect
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }

    // Show/hide back to top button
    if (window.scrollY > 300) {
        backToTop.classList.add('visible');
    } else {
        backToTop.classList.remove('visible');
    }

    // Update active nav link
    updateActiveNav();
});

// Mobile menu toggle
hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    hamburger.classList.toggle('active');
    
    // Animate hamburger
    const spans = hamburger.querySelectorAll('span');
    if (hamburger.classList.contains('active')) {
        spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
        spans[1].style.opacity = '0';
        spans[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';
    } else {
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
    }
});

// Close mobile menu when clicking on a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
        const spans = hamburger.querySelectorAll('span');
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
    });
});

// Smooth scroll for navigation links
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
            const offsetTop = targetSection.offsetTop - 70;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Update active navigation link based on scroll position
function updateActiveNav() {
    const sections = document.querySelectorAll('section[id]');
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
}

// ============================================
// BACK TO TOP BUTTON
// ============================================

backToTop.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// ============================================
// SCROLL ANIMATIONS
// ============================================

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
    const animateElements = document.querySelectorAll(
        '.product-card, .value-card, .info-card, .step-item, .stat-item, .gallery-item'
    );
    
    animateElements.forEach(el => {
        observer.observe(el);
    });
});

// ============================================
// CONTACT FORM HANDLING
// ============================================

// Initialize EmailJS when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    if (typeof emailjs !== 'undefined') {
        // Remplacez "YOUR_PUBLIC_KEY" par votre clé publique EmailJS
        // Obtenez-la sur https://dashboard.emailjs.com/admin/integration
        emailjs.init("YOUR_PUBLIC_KEY");
    }
});

const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const message = document.getElementById('message').value;

    // Show loading state
    const submitButton = contactForm.querySelector('button[type="submit"]');
    const originalText = submitButton.textContent;
    submitButton.disabled = true;
    submitButton.textContent = 'Envoi en cours...';

    // Solution: Utiliser Web3Forms (gratuit, fonctionne même en local)
    // IMPORTANT: Obtenez votre clé API gratuite sur https://web3forms.com
    // C'est gratuit, sans limite, et fonctionne immédiatement !
    const web3formsAccessKey = 'YOUR_WEB3FORMS_ACCESS_KEY';
    
    if (web3formsAccessKey !== 'YOUR_WEB3FORMS_ACCESS_KEY') {
        // Utiliser Web3Forms
        sendViaWeb3Forms(web3formsAccessKey, name, email, phone, message, submitButton, originalText);
        return;
    }
    
    // Si Web3Forms n'est pas configuré, afficher un message avec instructions
    showNotification('⚠️ Configuration requise: Allez sur web3forms.com, obtenez une clé API gratuite (2 minutes), et mettez-la dans script.js ligne 179. Voir INSTRUCTIONS_RAPIDES.md', 'error');
    submitButton.disabled = false;
    submitButton.textContent = originalText;
});

// Fonction pour envoyer via Web3Forms (RECOMMANDÉ - Plus simple)
function sendViaWeb3Forms(accessKey, name, email, phone, message, submitButton, originalText) {
    const formData = {
        access_key: accessKey,
        name: name,
        email: email,
        phone: phone,
        message: message,
        subject: 'Nouveau message depuis BYFAARM - ' + name,
        from_name: name,
        to_email: 'byfaag@gmail.com'
    };

    fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify(formData)
    })
    .then(async (response) => {
        const json = await response.json();
        if (response.ok && json.success) {
            showNotification('Message envoyé avec succès! Nous vous répondrons bientôt.', 'success');
            document.getElementById('contactForm').reset();
        } else {
            throw new Error(json.message || 'Erreur lors de l\'envoi');
        }
    })
    .catch(error => {
        console.error('Error:', error);
        showNotification('Erreur lors de l\'envoi. Veuillez vérifier votre configuration Web3Forms ou nous contacter directement à byfaag@gmail.com', 'error');
    })
    .finally(() => {
        submitButton.disabled = false;
        submitButton.textContent = originalText;
    });
}

// Fonction pour envoyer via Formspree
function sendViaFormspree(endpoint, name, email, phone, message, submitButton, originalText) {
    fetch(endpoint, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({
            name: name,
            email: email,
            phone: phone,
            message: message,
            _replyto: email,
            _subject: 'Nouveau message depuis BYFAARM - ' + name
        })
    })
    .then(response => {
        if (response.ok) {
            showNotification('Message envoyé avec succès! Nous vous répondrons bientôt.', 'success');
            document.getElementById('contactForm').reset();
        } else {
            throw new Error('Erreur lors de l\'envoi');
        }
    })
    .catch(error => {
        console.error('Error:', error);
        showNotification('Erreur lors de l\'envoi. Veuillez vérifier votre configuration Formspree ou nous contacter directement à byfaag@gmail.com', 'error');
    })
    .finally(() => {
        submitButton.disabled = false;
        submitButton.textContent = originalText;
    });
}

// La fonction mailto a été supprimée - les emails doivent être envoyés directement via Web3Forms ou Formspree
// sans ouvrir le client email de l'utilisateur. Voir CONFIGURATION_WEB3FORMS.md pour la configuration.

// Notification function
function showNotification(message, type = 'success') {
    // Remove existing notification if any
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }

    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <i class="fas ${type === 'success' ? 'fa-check-circle' : 'fa-exclamation-circle'}"></i>
            <span>${message}</span>
        </div>
    `;

    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: ${type === 'success' ? '#28a745' : '#dc3545'};
        color: white;
        padding: 15px 25px;
        border-radius: 10px;
        box-shadow: 0 4px 20px rgba(0,0,0,0.2);
        z-index: 10000;
        animation: slideInRight 0.3s ease;
        max-width: 400px;
    `;

    document.body.appendChild(notification);

    // Remove after 5 seconds
    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.3s ease';
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, 5000);
}

// Add notification animations to CSS dynamically
const style = document.createElement('style');
style.textContent = `
    @keyframes slideInRight {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    @keyframes slideOutRight {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(100%);
            opacity: 0;
        }
    }
    .notification-content {
        display: flex;
        align-items: center;
        gap: 10px;
    }
    .notification-content i {
        font-size: 1.2rem;
    }
`;
document.head.appendChild(style);

// ============================================
// PRODUCT CARD HOVER EFFECTS
// ============================================

const productCards = document.querySelectorAll('.product-card');

productCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// ============================================
// GALLERY LIGHTBOX (Optional Enhancement)
// ============================================

const galleryItems = document.querySelectorAll('.gallery-item');

galleryItems.forEach(item => {
    item.addEventListener('click', function() {
        // Could implement a lightbox here
        console.log('Gallery item clicked');
    });
});

// ============================================
// STATS COUNTER ANIMATION
// ============================================

function animateCounter(element, target, duration = 2000) {
    let start = 0;
    const increment = target / (duration / 16);
    const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
            element.textContent = target + '+';
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(start) + '+';
        }
    }, 16);
}

// Observe stats section for counter animation
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const statNumbers = entry.target.querySelectorAll('.stat-number');
            statNumbers.forEach(stat => {
                const target = parseInt(stat.textContent);
                animateCounter(stat, target);
            });
            statsObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

const statsSection = document.querySelector('.stats');
if (statsSection) {
    statsObserver.observe(statsSection);
}

// ============================================
// PARALLAX EFFECT FOR HERO (Optional)
// ============================================
// Parallax effect désactivé pour éviter les problèmes de visibilité
// window.addEventListener('scroll', () => {
//     const scrolled = window.pageYOffset;
//     const hero = document.querySelector('.hero');
//     if (hero && scrolled < hero.offsetHeight) {
//         hero.style.transform = `translateY(${scrolled * 0.5}px)`;
//     }
// });

// ============================================
// LOADING ANIMATION (Optional)
// ============================================

window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});

// ============================================
// FORM VALIDATION ENHANCEMENT
// ============================================

const formInputs = document.querySelectorAll('.contact-form input, .contact-form textarea');

formInputs.forEach(input => {
    input.addEventListener('blur', function() {
        if (this.value.trim() !== '') {
            this.classList.add('filled');
        } else {
            this.classList.remove('filled');
        }
    });

    input.addEventListener('input', function() {
        if (this.checkValidity()) {
            this.style.borderColor = '#28a745';
        } else {
            this.style.borderColor = '#dc3545';
        }
    });
});

// ============================================
// SMOOTH SCROLL FOR ALL ANCHOR LINKS
// ============================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#' && href !== '') {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                const offsetTop = target.offsetTop - 70;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        }
    });
});

// ============================================
// CONSOLE MESSAGE
// ============================================

console.log('%c🌱 BYFAARM - Site Web Agricole', 'color: #2d5016; font-size: 20px; font-weight: bold;');
console.log('%cBienvenue sur notre site!', 'color: #4a7c2a; font-size: 14px;');

