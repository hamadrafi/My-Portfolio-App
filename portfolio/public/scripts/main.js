// Main JavaScript functionality
document.addEventListener('DOMContentLoaded', function() {
    // Initialize all components
    // initializeTheme();
    initializeNavigation();
    initializeScrollEffects();
    initializeAnimations();
    initializeContactForm();
    initializeParticles();
    
    // Initialize AOS (Animate On Scroll)
    if (typeof AOS !== 'undefined') {
    AOS.init({
        duration: 600, // much faster (300ms)
        once: true,
        offset: 80    // trigger a bit earlier
    });
}
});

// Navigation
// function initializeNavigation() {
//     const navbar = document.getElementById('navbar');
//     const mobileToggle = document.getElementById('mobile-menu-toggle');
//     const navMenu = document.getElementById('nav-menu');
    
//     // Handle navbar scroll effect
//     window.addEventListener('scroll', function() {
//         if (window.scrollY > 50) {
//             navbar.classList.add('scrolled');
//         } else {
//             navbar.classList.remove('scrolled');
//         }
//     });
    
//     // Mobile menu toggle
//     if (mobileToggle) {
//         mobileToggle.addEventListener('click', function() {
//             navMenu.classList.toggle('active');
//             mobileToggle.classList.toggle('active');
//         });
//     }
    
//     // Close mobile menu when clicking on a link
//     const navLinks = document.querySelectorAll('.nav-link');
//     navLinks.forEach(link => {
//         link.addEventListener('click', function() {
//             navMenu.classList.remove('active');
//             mobileToggle.classList.remove('active');
//         });
//     });
    
//     // Smooth scrolling for anchor links
//     document.querySelectorAll('a[href^="#"]').forEach(anchor => {
//         anchor.addEventListener('click', function(e) {
//             e.preventDefault();
//             const target = document.querySelector(this.getAttribute('href'));
//             if (target) {
//                 target.scrollIntoView({
//                     behavior: 'smooth',
//                     block: 'start'
//                 });
//             }
//         });
//     });
// }
function initializeNavigation() {
    const navbar       = document.getElementById('navbar');
    const mobileToggle = document.getElementById('mobile-menu-toggle');
    const navMenu      = document.getElementById('nav-menu');

    if (!navbar || !mobileToggle || !navMenu) return;

    window.addEventListener('scroll', () => {
        navbar.classList.toggle('scrolled', window.scrollY > 50);
    });

    mobileToggle.addEventListener('click', e => {
        e.stopPropagation();
        navMenu.classList.toggle('active');
        mobileToggle.classList.toggle('active');
    });

    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            mobileToggle.classList.remove('active');
        });
    });

    document.addEventListener('click', e => {
        if (!navbar.contains(e.target) && navMenu.classList.contains('active')) {
            navMenu.classList.remove('active');
            mobileToggle.classList.remove('active');
        }
    });

    window.addEventListener('resize', () => {
        if (window.innerWidth > 768 && navMenu.classList.contains('active')) {
            navMenu.classList.remove('active');
            mobileToggle.classList.remove('active');
        }
    });

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', e => {
            const target = document.querySelector(anchor.getAttribute('href'));
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });
}


// Scroll Effects
function initializeScrollEffects() {
    const scrollIndicator = document.querySelector('.scroll-indicator');
    
    if (scrollIndicator) {
        scrollIndicator.addEventListener('click', function() {
            window.scrollBy({
                top: window.innerHeight,
                behavior: 'smooth'
            });
        });
    }
    
    // Parallax effect for hero section
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const hero = document.querySelector('.hero');
        
        if (hero) {
            const heroHeight = hero.offsetHeight;
            const scrollPercent = scrolled / heroHeight;
            
            // Apply parallax effect to hero background
            const heroGradient = hero.querySelector('.hero-gradient');
            if (heroGradient) {
                heroGradient.style.transform = `translateY(${scrolled * 0.5}px)`;
            }
        }
    });
}

// Animations
function initializeAnimations() {
    // Animate skill bars when they come into view
    const skillBars = document.querySelectorAll('.skill-bar');
    
    if (skillBars.length > 0) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const skillBar = entry.target;
                    const width = skillBar.style.width;
                    skillBar.style.width = '0%';
                    
                    setTimeout(() => {
                        skillBar.style.width = width;
                    }, 100);
                }
            });
        });
        
        skillBars.forEach(bar => observer.observe(bar));
    }
    
    // Animate counters
    const counters = document.querySelectorAll('.stat-number');
    counters.forEach(counter => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateCounter(counter);
                    observer.unobserve(counter);
                }
            });
        });
        
        observer.observe(counter);
    });
}

function animateCounter(element) {
    const target = parseInt(element.textContent);
    const increment = target / 100;
    let current = 0;
    
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            current = target;
            clearInterval(timer);
        }
        element.textContent = Math.floor(current) + (element.textContent.includes('+') ? '+' : '');
    }, 20);
}

// Contact Form
function initializeContactForm() {
    const contactForm = document.getElementById('contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(contactForm);
            const data = Object.fromEntries(formData);
            
            // Validate form
            if (validateForm(data)) {
                // Show loading state
                const submitButton = contactForm.querySelector('.btn-primary');
                const originalText = submitButton.innerHTML;
                submitButton.innerHTML = '<span class="spinner"></span> Sending...';
                submitButton.disabled = true;
                
                // Simulate form submission (replace with actual API call)
                setTimeout(() => {
                    // Reset form
                    contactForm.reset();
                    
                    // Show success message
                    showToast('Message sent successfully!', 'success');
                    
                    // Reset button
                    submitButton.innerHTML = originalText;
                    submitButton.disabled = false;
                }, 2000);
            }
        });
    }
}

function validateForm(data) {
    const errors = [];
    
    if (!data.name || data.name.trim().length < 2) {
        errors.push('Name must be at least 2 characters long');
    }
    
    if (!data.email || !isValidEmail(data.email)) {
        errors.push('Please enter a valid email address');
    }
    
    if (!data.message || data.message.trim().length < 10) {
        errors.push('Message must be at least 10 characters long');
    }
    
    if (errors.length > 0) {
        showToast(errors.join('<br>'), 'error');
        return false;
    }
    
    return true;
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Toast Notifications
function showToast(message, type = 'info') {
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.innerHTML = message;
    
    document.body.appendChild(toast);
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        toast.remove();
    }, 5000);
    
    // Remove on click
    toast.addEventListener('click', () => {
        toast.remove();
    });
}

// Particles Animation
function initializeParticles() {
    const particlesContainer = document.getElementById('particles');
    
    if (particlesContainer) {
        createParticles(particlesContainer);
    }
}

function createParticles(container) {
    // Reduce particles on mobile for faster load
    const particleCount = window.innerWidth < 768 ? 75 : 150;
    
    const fragment = document.createDocumentFragment();
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.cssText = `
            position: absolute;
            width: 2px;
            height: 2px;
            background: var(--primary-color);
            border-radius: 50%;
            opacity: 0.3;
            animation: float ${Math.random() * 10 + 10}s linear infinite;
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
            animation-delay: ${Math.random() * -10}s;
            will-change: transform;
        `;
        
        fragment.appendChild(particle);
    }
    
    container.appendChild(fragment);
}

// Utility functions
function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

function debounce(func, wait, immediate) {
    let timeout;
    return function() {
        const context = this;
        const args = arguments;
        const later = function() {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        const callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
}

// Add CSS for particles animation
const style = document.createElement('style');
style.textContent = `
    @keyframes float {
        0% {
            transform: translateY(100vh) rotate(0deg);
            opacity: 0;
        }
        10% {
            opacity: 0.3;
        }
        90% {
            opacity: 0.3;
        }
        100% {
            transform: translateY(-100vh) rotate(360deg);
            opacity: 0;
        }
    }
    
    .particle {
        pointer-events: none;
        z-index: 0;
    }
`;
document.head.appendChild(style);
  document.querySelectorAll('.project-image video').forEach(video => {
    const parent = video.closest('.project-card');

    parent.addEventListener('mouseenter', () => {
      video.currentTime = 0; // restart from beginning
      video.play();
    });

    parent.addEventListener('mouseleave', () => {
      video.pause();
    });
  });
