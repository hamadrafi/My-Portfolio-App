// Advanced animations and interactions
document.addEventListener('DOMContentLoaded', function() {
    initializeScrollReveal();
    initializeParallaxEffects();
    initializeMagneticButtons();
    initializeTextAnimations();
    initializeIntersectionObserver();
});

// Scroll reveal animations
function initializeScrollReveal() {
    const revealElements = document.querySelectorAll('.scroll-reveal');
    
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
                revealObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    revealElements.forEach(element => {
        revealObserver.observe(element);
    });
}

// Parallax effects
function initializeParallaxEffects() {
    const parallaxElements = document.querySelectorAll('.parallax');
    
    function updateParallax() {
        const scrollTop = window.pageYOffset;
        
        parallaxElements.forEach(element => {
            const rect = element.getBoundingClientRect();
            const speed = element.dataset.speed || 0.5;
            const yPos = -(scrollTop * speed);
            
            if (rect.bottom >= 0 && rect.top <= window.innerHeight) {
                element.style.transform = `translateY(${yPos}px)`;
            }
        });
    }
    
    window.addEventListener('scroll', throttle(updateParallax, 16));
}

// Magnetic button effects
function initializeMagneticButtons() {
    const magneticButtons = document.querySelectorAll('.btn-magnetic');
    
    magneticButtons.forEach(button => {
        button.addEventListener('mousemove', function(e) {
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            
            this.style.transform = `translate(${x * 0.1}px, ${y * 0.1}px)`;
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = 'translate(0, 0)';
        });
    });
}

// Text animations
function initializeTextAnimations() {
    // Typewriter effect
    const typewriterElements = document.querySelectorAll('.text-typewriter');
    
    typewriterElements.forEach(element => {
        const text = element.textContent;
        element.textContent = '';
        
        let i = 0;
        const typeInterval = setInterval(() => {
            if (i < text.length) {
                element.textContent += text.charAt(i);
                i++;
            } else {
                clearInterval(typeInterval);
            }
        }, 50);
    });
    
    // Text reveal on scroll
    const textRevealElements = document.querySelectorAll('.text-reveal');
    
    const textObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
                textObserver.unobserve(entry.target);
            }
        });
    });
    
    textRevealElements.forEach(element => {
        textObserver.observe(element);
    });
}

// Enhanced intersection observer for various animations
function initializeIntersectionObserver() {
    const animatedElements = document.querySelectorAll('[data-animate]');
    
    const animationObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const animationType = entry.target.dataset.animate;
                entry.target.classList.add(`animate-${animationType}`);
                animationObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    animatedElements.forEach(element => {
        animationObserver.observe(element);
    });
}

// Add dynamic cursor effects
function initializeCursorEffects() {
    const cursor = document.createElement('div');
    cursor.className = 'custom-cursor';
    document.body.appendChild(cursor);
    
    const cursorFollower = document.createElement('div');
    cursorFollower.className = 'cursor-follower';
    document.body.appendChild(cursorFollower);
    
    let mouseX = 0;
    let mouseY = 0;
    let followerX = 0;
    let followerY = 0;
    
    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        
        cursor.style.left = mouseX + 'px';
        cursor.style.top = mouseY + 'px';
    });
    
    function animateFollower() {
        followerX += (mouseX - followerX) * 0.1;
        followerY += (mouseY - followerY) * 0.1;
        
        cursorFollower.style.left = followerX + 'px';
        cursorFollower.style.top = followerY + 'px';
        
        requestAnimationFrame(animateFollower);
    }
    
    animateFollower();
    
    // Cursor interactions
    const interactiveElements = document.querySelectorAll('a, button, .btn');
    
    interactiveElements.forEach(element => {
        element.addEventListener('mouseenter', () => {
            cursor.classList.add('cursor-hover');
            cursorFollower.classList.add('cursor-hover');
        });
        
        element.addEventListener('mouseleave', () => {
            cursor.classList.remove('cursor-hover');
            cursorFollower.classList.remove('cursor-hover');
        });
    });
}

// Initialize cursor effects only on desktop
if (window.innerWidth > 768) {
    initializeCursorEffects();
}

// Scroll-based animations
function initializeScrollAnimations() {
    const scrollElements = document.querySelectorAll('.scroll-animate');
    
    function checkScroll() {
        const scrollTop = window.pageYOffset;
        const windowHeight = window.innerHeight;
        
        scrollElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top + scrollTop;
            const elementHeight = element.offsetHeight;
            
            if (scrollTop > elementTop - windowHeight + 100) {
                element.classList.add('scrolled');
            }
        });
    }
    
    window.addEventListener('scroll', throttle(checkScroll, 16));
    checkScroll(); // Initial check
}

// Initialize scroll animations
initializeScrollAnimations();

// Add smooth scrolling for all anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        
        if (targetElement) {
            const offsetTop = targetElement.getBoundingClientRect().top + window.pageYOffset - 100;
            
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Add page transition effects
function initializePageTransitions() {
    const pageLinks = document.querySelectorAll('a[href$=".html"]');
    
    pageLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const href = this.getAttribute('href');
            
            // Add page transition effect
            document.body.classList.add('page-transition');
            
            setTimeout(() => {
                window.location.href = href;
            }, 300);
        });
    });
}

// Initialize page transitions
initializePageTransitions();

// Utility function for throttling
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

// Add animation styles
const animationStyles = document.createElement('style');
animationStyles.textContent = `
    /* Custom cursor */
    .custom-cursor {
        position: fixed;
        width: 10px;
        height: 10px;
        background: var(--primary-color);
        border-radius: 50%;
        pointer-events: none;
        z-index: 9999;
        transition: transform 0.1s ease;
    }
    
    .cursor-follower {
        position: fixed;
        width: 40px;
        height: 40px;
        border: 2px solid var(--primary-color);
        border-radius: 50%;
        pointer-events: none;
        z-index: 9998;
        opacity: 0.3;
        transition: transform 0.2s ease;
    }
    
    .cursor-hover {
        transform: scale(1.5);
    }
    
    .cursor-follower.cursor-hover {
        transform: scale(2);
        opacity: 0.6;
    }
    
    /* Text reveal animations */
    .text-reveal {
        opacity: 0;
        transform: translateY(30px);
        transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    }
    
    .text-reveal.revealed {
        opacity: 1;
        transform: translateY(0);
    }
    
    /* Scroll animations */
    .scroll-animate {
        opacity: 0;
        transform: translateY(50px);
        transition: all 0.6s ease;
    }
    
    .scroll-animate.scrolled {
        opacity: 1;
        transform: translateY(0);
    }
    
    /* Page transition */
    .page-transition {
        opacity: 0;
        transform: scale(0.95);
        transition: all 0.3s ease;
    }
    
    /* Animation classes */
    .animate-fadeIn {
        animation: fadeIn 0.8s ease forwards;
    }
    
    .animate-slideUp {
        animation: slideUp 0.8s ease forwards;
    }
    
    .animate-slideDown {
        animation: slideDown 0.8s ease forwards;
    }
    
    .animate-slideLeft {
        animation: slideLeft 0.8s ease forwards;
    }
    
    .animate-slideRight {
        animation: slideRight 0.8s ease forwards;
    }
    
    .animate-zoomIn {
        animation: zoomIn 0.8s ease forwards;
    }
    
    .animate-rotateIn {
        animation: rotateIn 0.8s ease forwards;
    }
    
    @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
    }
    
    @keyframes slideUp {
        from { 
            opacity: 0;
            transform: translateY(50px);
        }
        to { 
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    @keyframes slideDown {
        from { 
            opacity: 0;
            transform: translateY(-50px);
        }
        to { 
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    @keyframes slideLeft {
        from { 
            opacity: 0;
            transform: translateX(50px);
        }
        to { 
            opacity: 1;
            transform: translateX(0);
        }
    }
    
    @keyframes slideRight {
        from { 
            opacity: 0;
            transform: translateX(-50px);
        }
        to { 
            opacity: 1;
            transform: translateX(0);
        }
    }
    
    @keyframes zoomIn {
        from { 
            opacity: 0;
            transform: scale(0.8);
        }
        to { 
            opacity: 1;
            transform: scale(1);
        }
    }
    
    @keyframes rotateIn {
        from { 
            opacity: 0;
            transform: rotate(-45deg) scale(0.8);
        }
        to { 
            opacity: 1;
            transform: rotate(0deg) scale(1);
        }
    }
    
    /* Hide cursor on mobile */
    @media (max-width: 768px) {
        .custom-cursor,
        .cursor-follower {
            display: none;
        }
    }
`;
document.head.appendChild(animationStyles);