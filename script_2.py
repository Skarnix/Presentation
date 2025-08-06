# Create the enhanced JavaScript file with interactive animations and functionality
js_content = '''// Enhanced JavaScript with modern animations and interactions

// Global variables
let isAnimationEnabled = true;
let observerOptions = {
    threshold: 0.1,
    rootMargin: '50px'
};

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeAnimations();
    initializeProgressBars();
    initializeCounters();
    initializeROICalculator();
    initializeScrollEffects();
    initializeHoverEffects();
    initializeParallax();
});

// Animation initialization
function initializeAnimations() {
    // Fade-in animations with delay
    const fadeElements = document.querySelectorAll('.fade-in-up, .slide-in-right');
    fadeElements.forEach((element, index) => {
        const delay = element.dataset.delay || index * 100;
        element.style.animationDelay = `${delay}ms`;
    });

    // Intersection Observer for scroll-triggered animations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                
                // Trigger specific animations based on element
                if (entry.target.classList.contains('progress-ring')) {
                    animateProgressRing(entry.target);
                }
                
                if (entry.target.classList.contains('bar-fill')) {
                    animateProgressBar(entry.target);
                }
                
                if (entry.target.classList.contains('metric-card')) {
                    animateCounter(entry.target);
                }
            }
        });
    }, observerOptions);

    // Observe all animation elements
    const animationElements = document.querySelectorAll('.fade-in-section, .progress-ring, .bar-fill, .metric-card');
    animationElements.forEach(el => observer.observe(el));
}

// Progress ring animation
function animateProgressRing(element) {
    const circle = element.querySelector('.progress-circle');
    if (!circle) return;
    
    const radius = 50;
    const circumference = 2 * Math.PI * radius;
    const progress = 40; // 40% progress
    const offset = circumference - (progress / 100) * circumference;
    
    circle.style.strokeDasharray = circumference;
    circle.style.strokeDashoffset = circumference;
    
    setTimeout(() => {
        circle.style.strokeDashoffset = offset;
    }, 500);
}

// Progress bar animations
function initializeProgressBars() {
    const progressBars = document.querySelectorAll('.bar-fill');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateProgressBar(entry.target);
            }
        });
    }, observerOptions);
    
    progressBars.forEach(bar => observer.observe(bar));
}

function animateProgressBar(bar) {
    const width = bar.dataset.width || 40;
    
    setTimeout(() => {
        bar.style.setProperty('--progress-width', `${width}%`);
        bar.querySelector('::after') && (bar.querySelector('::after').style.width = `${width}%`);
        
        // Alternative method for better browser support
        const afterElement = bar.querySelector('::after');
        if (!afterElement) {
            const progressFill = document.createElement('div');
            progressFill.style.cssText = `
                position: absolute;
                top: 0;
                left: 0;
                height: 100%;
                background: inherit;
                border-radius: inherit;
                transition: width 2s ease-in-out;
                width: ${width}%;
            `;
            bar.appendChild(progressFill);
        }
    }, 200);
}

// Counter animations
function initializeCounters() {
    const counters = document.querySelectorAll('.metric-value[data-target]');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounter(entry.target.closest('.metric-card'));
            }
        });
    }, observerOptions);
    
    counters.forEach(counter => observer.observe(counter));
}

function animateCounter(metricCard) {
    const counter = metricCard.querySelector('.metric-value[data-target]');
    if (!counter || counter.classList.contains('animated')) return;
    
    counter.classList.add('animated');
    const target = parseInt(counter.dataset.target);
    const duration = 2000;
    const increment = target / (duration / 16);
    let current = 0;
    
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            current = target;
            clearInterval(timer);
        }
        counter.textContent = Math.floor(current);
    }, 16);
}

// ROI Calculator
function initializeROICalculator() {
    const inputs = document.querySelectorAll('#monthlyRevenue, #currentCost, #softwareInvestment');
    const results = {
        savings: document.getElementById('monthlySavings'),
        payback: document.getElementById('paybackPeriod'),
        roi: document.getElementById('annualROI')
    };
    
    inputs.forEach(input => {
        input.addEventListener('input', debounce(calculateROI, 300));
    });
    
    function calculateROI() {
        const monthlyRevenue = parseFloat(document.getElementById('monthlyRevenue').value) || 0;
        const currentCost = parseFloat(document.getElementById('currentCost').value) || 0;
        const softwareInvestment = parseFloat(document.getElementById('softwareInvestment').value) || 0;
        
        // Calculations
        const monthlySavings = currentCost * 0.5; // Assume 50% savings
        const paybackMonths = softwareInvestment / monthlySavings;
        const annualROI = ((monthlySavings * 12) / softwareInvestment) * 100;
        
        // Update UI with animations
        updateResult(results.savings, formatCurrency(monthlySavings));
        updateResult(results.payback, `${Math.ceil(paybackMonths)} months`);
        updateResult(results.roi, `${Math.round(annualROI)}%`);
    }
    
    function updateResult(element, value) {
        if (!element) return;
        
        element.style.transform = 'scale(1.1)';
        element.style.opacity = '0.7';
        
        setTimeout(() => {
            element.textContent = value;
            element.style.transform = 'scale(1)';
            element.style.opacity = '1';
        }, 150);
    }
    
    function formatCurrency(amount) {
        if (amount >= 100000) {
            return `₹${(amount / 100000).toFixed(1)}L`;
        } else if (amount >= 1000) {
            return `₹${(amount / 1000).toFixed(1)}K`;
        } else {
            return `₹${amount.toFixed(0)}`;
        }
    }
    
    // Initial calculation
    calculateROI();
}

// Scroll effects
function initializeScrollEffects() {
    let ticking = false;
    
    function updateScrollEffects() {
        const scrolled = window.pageYOffset;
        const parallaxElements = document.querySelectorAll('.float-element');
        
        parallaxElements.forEach((element, index) => {
            const speed = 0.5 + (index * 0.1);
            const yPos = -(scrolled * speed);
            element.style.transform = `translate3d(0, ${yPos}px, 0) rotate(${scrolled * 0.1}deg)`;
        });
        
        ticking = false;
    }
    
    function requestScrollUpdate() {
        if (!ticking) {
            requestAnimationFrame(updateScrollEffects);
            ticking = true;
        }
    }
    
    window.addEventListener('scroll', requestScrollUpdate);
}

// Enhanced hover effects
function initializeHoverEffects() {
    // Card tilt effect
    const cards = document.querySelectorAll('.problem-card, .solution-card, .testimonial-card');
    
    cards.forEach(card => {
        card.addEventListener('mouseenter', function(e) {
            this.style.transition = 'all 0.3s ease';
            this.style.transform = 'translateY(-8px) rotateY(5deg) rotateX(5deg)';
        });
        
        card.addEventListener('mouseleave', function(e) {
            this.style.transform = 'translateY(0) rotateY(0) rotateX(0)';
        });
        
        card.addEventListener('mousemove', function(e) {
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = (y - centerY) / 10;
            const rotateY = (centerX - x) / 10;
            
            this.style.transform = `translateY(-8px) rotateY(${rotateY}deg) rotateX(${rotateX}deg)`;
        });
    });
    
    // Button pulse effect
    const buttons = document.querySelectorAll('.btn-primary, .btn-secondary');
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            let ripple = document.createElement('span');
            ripple.classList.add('ripple');
            this.appendChild(ripple);
            
            let x = e.clientX - e.target.offsetLeft;
            let y = e.clientY - e.target.offsetTop;
            
            ripple.style.left = `${x}px`;
            ripple.style.top = `${y}px`;
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });
}

// Parallax effect
function initializeParallax() {
    const parallaxElements = document.querySelectorAll('.hero-bg, .floating-elements');
    
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const rate = scrolled * -0.5;
        
        parallaxElements.forEach(element => {
            element.style.transform = `translate3d(0, ${rate}px, 0)`;
        });
    });
}

// Smooth scrolling utility
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// Utility functions
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Performance optimization
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
    }
}

// Enhanced scroll indicator
document.addEventListener('scroll', throttle(function() {
    const scrolled = window.pageYOffset;
    const maxHeight = document.body.scrollHeight - window.innerHeight;
    const progress = (scrolled / maxHeight) * 100;
    
    // Update scroll progress (if you want to add a progress bar)
    const progressBar = document.querySelector('.scroll-progress');
    if (progressBar) {
        progressBar.style.width = `${progress}%`;
    }
}, 16));

// Achievement items animation
function animateAchievements() {
    const achievements = document.querySelectorAll('.achievement-item');
    achievements.forEach((item, index) => {
        const delay = (item.dataset.delay || index * 100);
        
        setTimeout(() => {
            item.style.opacity = '1';
            item.style.transform = 'translateX(0)';
            item.style.transition = 'all 0.6s ease';
        }, delay);
    });
}

// Initialize achievement animation when section is visible
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && entry.target.classList.contains('success-section')) {
            animateAchievements();
        }
    });
}, observerOptions);

document.querySelectorAll('.success-section').forEach(section => {
    observer.observe(section);
});

// Enhanced testimonial interactions
function initializeTestimonials() {
    const testimonialCards = document.querySelectorAll('.testimonial-card');
    
    testimonialCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
            this.style.boxShadow = '0 20px 40px rgba(0,0,0,0.1)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
            this.style.boxShadow = '0 4px 6px -1px rgb(0 0 0 / 0.1)';
        });
    });
}

// Call testimonial initialization
document.addEventListener('DOMContentLoaded', initializeTestimonials);

// Add CSS for ripple effect
const rippleCSS = `
.ripple {
    position: absolute;
    border-radius: 50%;
    background-color: rgba(255, 255, 255, 0.6);
    transform: scale(0);
    animation: ripple-animation 0.6s linear;
    pointer-events: none;
}

@keyframes ripple-animation {
    to {
        transform: scale(4);
        opacity: 0;
    }
}
`;

// Inject ripple CSS
const style = document.createElement('style');
style.textContent = rippleCSS;
document.head.appendChild(style);

// Loading animation
function showLoadingAnimation() {
    const loader = document.createElement('div');
    loader.className = 'page-loader';
    loader.innerHTML = `
        <div class="loader-content">
            <div class="loader-spinner"></div>
            <p>Loading your digital transformation...</p>
        </div>
    `;
    
    const loaderCSS = `
        .page-loader {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 9999;
            opacity: 1;
            transition: opacity 0.5s ease;
        }
        
        .loader-content {
            text-align: center;
            color: white;
        }
        
        .loader-spinner {
            width: 50px;
            height: 50px;
            border: 3px solid rgba(255, 255, 255, 0.3);
            border-top: 3px solid white;
            border-radius: 50%;
            animation: spin 1s linear infinite;
            margin: 0 auto 1rem;
        }
        
        @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
        }
    `;
    
    const loaderStyle = document.createElement('style');
    loaderStyle.textContent = loaderCSS;
    document.head.appendChild(loaderStyle);
    document.body.appendChild(loader);
    
    setTimeout(() => {
        loader.style.opacity = '0';
        setTimeout(() => {
            document.body.removeChild(loader);
            document.head.removeChild(loaderStyle);
        }, 500);
    }, 1500);
}

// Show loading animation on page load
window.addEventListener('load', showLoadingAnimation);

// Error handling and fallbacks
window.addEventListener('error', function(e) {
    console.warn('Animation error caught:', e.error);
    // Disable animations if there are issues
    isAnimationEnabled = false;
});

// Reduced motion support
if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    isAnimationEnabled = false;
    document.documentElement.style.setProperty('--transition-fast', 'none');
    document.documentElement.style.setProperty('--transition-normal', 'none');
    document.documentElement.style.setProperty('--transition-slow', 'none');
}

// Touch device optimizations
if ('ontouchstart' in window) {
    document.body.classList.add('touch-device');
    
    // Optimize hover effects for touch
    const touchCSS = `
        .touch-device .hover-lift:hover {
            transform: none;
        }
        
        .touch-device .hover-scale:hover {
            transform: none;
        }
    `;
    
    const touchStyle = document.createElement('style');
    touchStyle.textContent = touchCSS;
    document.head.appendChild(touchStyle);
}

console.log('Enhanced website animations and interactions initialized successfully!');'''

# Save JavaScript file
with open('script.js', 'w', encoding='utf-8') as f:
    f.write(js_content)
print("JavaScript file created successfully!")
print("\nAll files have been created:")
print("1. index.html - Enhanced HTML structure with modern elements")
print("2. styles.css - Advanced CSS with animations and responsive design") 
print("3. script.js - Interactive JavaScript with smooth animations and effects")
print("\nFeatures added:")
print("- Smooth scroll animations and parallax effects")
print("- Interactive progress bars and counters")
print("- Hover effects with 3D transforms")
print("- ROI calculator with real-time updates")
print("- Responsive design for all devices")
print("- Loading animations and transitions")
print("- Performance optimizations")
print("- Dark mode support")
print("- Reduced motion accessibility"))