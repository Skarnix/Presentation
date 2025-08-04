class PresentationApp {
    constructor() {
        this.currentSlide = 0;
        this.totalSlides = document.querySelectorAll('.slide').length;
        this.slides = document.querySelectorAll('.slide');
        this.slideIndicator = document.getElementById('slideIndicator');
        this.prevBtn = document.getElementById('prevBtn');
        this.nextBtn = document.getElementById('nextBtn');
        
        this.init();
    }

    init() {
        this.updateSlideIndicator();
        this.updateNavigationButtons();
        this.bindEvents();
        this.initAnimations();
        this.initROICalculator();
        this.initHoverEffects();
        
        // Trigger animations for the first slide
        setTimeout(() => {
            this.triggerSlideAnimations(0);
        }, 500);
    }

    bindEvents() {
        // Navigation button events - Fix the binding issue
        if (this.prevBtn) {
            this.prevBtn.addEventListener('click', (e) => {
                e.preventDefault();
                this.previousSlide();
            });
        }
        
        if (this.nextBtn) {
            this.nextBtn.addEventListener('click', (e) => {
                e.preventDefault();
                this.nextSlide();
            });
        }
        
        // Keyboard navigation
        document.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
                e.preventDefault();
                this.previousSlide();
            } else if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
                e.preventDefault();
                this.nextSlide();
            }
        });

        // CTA button events - Fix the notification system
        setTimeout(() => {
            const ctaPrimary = document.querySelector('.cta-primary');
            if (ctaPrimary) {
                ctaPrimary.addEventListener('click', (e) => {
                    e.preventDefault();
                    this.handleCTAClick('consultation');
                });
            }

            const ctaSecondary = document.querySelector('.cta-buttons .btn--outline');
            if (ctaSecondary) {
                ctaSecondary.addEventListener('click', (e) => {
                    e.preventDefault();
                    this.handleCTAClick('download');
                });
            }
        }, 1000);

        // ROI Calculator input events - Fix the automatic calculation
        setTimeout(() => {
            const roiInputs = document.querySelectorAll('#monthlyRevenue, #currentCost, #softwareInvestment');
            roiInputs.forEach(input => {
                if (input) {
                    input.addEventListener('input', (e) => {
                        this.calculateROI();
                    });
                    input.addEventListener('change', (e) => {
                        this.calculateROI();
                    });
                    input.addEventListener('keyup', (e) => {
                        this.calculateROI();
                    });
                }
            });
        }, 1000);
    }

    initHoverEffects() {
        // Initialize hover effects for cards
        setTimeout(() => {
            const cards = document.querySelectorAll('.solution-card, .metric-card, .challenge-card, .testimonial-card');
            
            cards.forEach(card => {
                card.addEventListener('mouseenter', function() {
                    this.style.transform = 'translateY(-8px) scale(1.02)';
                    this.style.transition = 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)';
                    this.style.boxShadow = 'var(--shadow-lg)';
                });
                
                card.addEventListener('mouseleave', function() {
                    this.style.transform = 'translateY(0) scale(1)';
                    this.style.boxShadow = 'var(--shadow-sm)';
                });
            });
        }, 500);
    }

    nextSlide() {
        console.log('Next slide clicked, current:', this.currentSlide, 'total:', this.totalSlides);
        if (this.currentSlide < this.totalSlides - 1) {
            this.goToSlide(this.currentSlide + 1);
        }
    }

    previousSlide() {
        console.log('Previous slide clicked, current:', this.currentSlide);
        if (this.currentSlide > 0) {
            this.goToSlide(this.currentSlide - 1);
        }
    }

    goToSlide(slideIndex) {
        console.log('Going to slide:', slideIndex);
        
        // Remove active class from current slide
        if (this.slides[this.currentSlide]) {
            this.slides[this.currentSlide].classList.remove('active');
        }
        
        // Update current slide index
        this.currentSlide = slideIndex;
        
        // Add active class to new slide
        if (this.slides[this.currentSlide]) {
            this.slides[this.currentSlide].classList.add('active');
        }
        
        // Update UI
        this.updateSlideIndicator();
        this.updateNavigationButtons();
        
        // Trigger animations for the new slide
        setTimeout(() => {
            this.triggerSlideAnimations(this.currentSlide);
        }, 300);
    }

    updateSlideIndicator() {
        if (this.slideIndicator) {
            this.slideIndicator.textContent = `${this.currentSlide + 1} / ${this.totalSlides}`;
        }
    }

    updateNavigationButtons() {
        if (this.prevBtn) {
            this.prevBtn.disabled = this.currentSlide === 0;
        }
        if (this.nextBtn) {
            this.nextBtn.disabled = this.currentSlide === this.totalSlides - 1;
        }
    }

    triggerSlideAnimations(slideIndex) {
        const slide = this.slides[slideIndex];
        if (!slide) return;
        
        // Trigger specific animations based on slide content
        switch(slideIndex) {
            case 2: // Achievement slide with progress circle
                this.animateProgressCircle();
                break;
            case 6: // Metrics slide with counters
                this.animateCounters();
                break;
            case 7: // Before/After comparison
                this.animateComparisonBars();
                break;
            case 8: // ROI Calculator
                setTimeout(() => {
                    this.calculateROI();
                }, 500);
                break;
        }

        // Animate cards and elements with stagger effect
        this.animateSlideElements(slide);
    }

    animateSlideElements(slide) {
        const cards = slide.querySelectorAll('.challenge-card, .solution-card, .metric-card, .testimonial-card, .benefit-card');
        
        cards.forEach((card, index) => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(30px)';
            
            setTimeout(() => {
                card.style.transition = 'all 0.6s cubic-bezier(0.16, 1, 0.3, 1)';
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }, index * 150);
        });
    }

    animateProgressCircle() {
        const progressFill = document.querySelector('.progress-fill');
        if (progressFill) {
            const targetProgress = parseInt(progressFill.dataset.progress) || 40;
            progressFill.style.background = `conic-gradient(var(--color-success) ${targetProgress}%, var(--color-secondary) ${targetProgress}%)`;
        }
    }

    animateCounters() {
        const counters = document.querySelectorAll('.metric-value');
        
        counters.forEach(counter => {
            const target = parseInt(counter.dataset.target) || 0;
            const duration = 2000; // 2 seconds
            const increment = target / (duration / 16); // 60fps
            let current = 0;
            
            const updateCounter = () => {
                current += increment;
                if (current < target) {
                    counter.textContent = Math.floor(current);
                    requestAnimationFrame(updateCounter);
                } else {
                    counter.textContent = target;
                }
            };
            
            // Start animation after a delay
            setTimeout(() => {
                updateCounter();
            }, 500);
        });
    }

    animateComparisonBars() {
        const beforeBars = document.querySelectorAll('.before-bar');
        const afterBars = document.querySelectorAll('.after-bar');
        
        // Animate before bars (showing problems)
        beforeBars.forEach((bar, index) => {
            setTimeout(() => {
                bar.style.width = '80%';
                bar.style.transition = 'width 1s ease-out';
            }, index * 200);
        });
        
        // Animate after bars (showing improvements)
        afterBars.forEach((bar, index) => {
            setTimeout(() => {
                bar.style.width = '30%';
                bar.style.transition = 'width 1s ease-out';
            }, 1000 + index * 200);
        });
    }

    initAnimations() {
        // Initialize CSS custom properties for animations
        const root = document.documentElement;
        
        // Set up progress bar animations
        const progressBars = document.querySelectorAll('.current-progress, .missing-progress');
        progressBars.forEach(bar => {
            const width = bar.style.width || '0%';
            root.style.setProperty('--progress-width', width);
        });
    }

    initROICalculator() {
        // Set initial values and calculate
        setTimeout(() => {
            this.calculateROI();
        }, 1000);
    }

    calculateROI() {
        const monthlyRevenueEl = document.getElementById('monthlyRevenue');
        const currentCostEl = document.getElementById('currentCost');
        const softwareInvestmentEl = document.getElementById('softwareInvestment');
        
        if (!monthlyRevenueEl || !currentCostEl || !softwareInvestmentEl) {
            console.log('ROI calculator elements not found');
            return;
        }
        
        const monthlyRevenue = parseFloat(monthlyRevenueEl.value) || 500000;
        const currentCost = parseFloat(currentCostEl.value) || 50000;
        const softwareInvestment = parseFloat(softwareInvestmentEl.value) || 200000;
        
        console.log('Calculating ROI with values:', { monthlyRevenue, currentCost, softwareInvestment });
        
        // Calculate savings (50% reduction in current costs)
        const monthlySavings = currentCost * 0.5;
        
        // Calculate additional revenue (10% increase due to efficiency)
        const additionalRevenue = monthlyRevenue * 0.1;
        
        // Total monthly benefit
        const totalMonthlyBenefit = monthlySavings + additionalRevenue;
        
        // Payback period in months
        const paybackPeriod = Math.ceil(softwareInvestment / totalMonthlyBenefit);
        
        // Annual ROI
        const annualBenefit = totalMonthlyBenefit * 12;
        const annualROI = ((annualBenefit - softwareInvestment) / softwareInvestment) * 100;
        
        // Update display
        const monthlySavingsEl = document.getElementById('monthlySavings');
        const paybackPeriodEl = document.getElementById('paybackPeriod');
        const annualROIEl = document.getElementById('annualROI');
        
        if (monthlySavingsEl) {
            monthlySavingsEl.textContent = `₹${this.formatNumber(totalMonthlyBenefit)}`;
        }
        if (paybackPeriodEl) {
            paybackPeriodEl.textContent = `${paybackPeriod} months`;
        }
        if (annualROIEl) {
            annualROIEl.textContent = `${Math.round(annualROI)}%`;
        }
        
        // Animate the values
        this.animateROIValues();
    }

    animateROIValues() {
        const roiValues = document.querySelectorAll('.roi-value');
        roiValues.forEach(value => {
            value.style.transform = 'scale(1.1)';
            value.style.transition = 'transform 0.3s ease';
            value.style.color = 'var(--color-primary)';
            
            setTimeout(() => {
                value.style.transform = 'scale(1)';
            }, 300);
        });
    }

    formatNumber(num) {
        if (num >= 100000) {
            return (num / 100000).toFixed(1) + 'L';
        } else if (num >= 1000) {
            return (num / 1000).toFixed(1) + 'K';
        }
        return num.toLocaleString();
    }

    handleCTAClick(type) {
        console.log('CTA clicked:', type);
        
        if (type === 'consultation') {
            this.showNotification('🎉 Thank you for your interest! We will contact you within 24 hours to schedule your free consultation.', 'success');
        } else if (type === 'download') {
            this.showNotification('📥 Case studies download started! Check your downloads folder.', 'info');
        }
    }

    showNotification(message, type = 'info') {
        console.log('Showing notification:', message, type);
        
        // Remove any existing notifications
        const existingNotifications = document.querySelectorAll('.notification');
        existingNotifications.forEach(n => n.remove());
        
        // Create notification element
        const notification = document.createElement('div');
        notification.className = `notification notification--${type}`;
        
        // Set base styles
        const baseStyles = {
            position: 'fixed',
            top: '100px',
            right: '20px',
            background: 'var(--color-surface)',
            border: '2px solid var(--color-border)',
            borderRadius: 'var(--radius-lg)',
            padding: 'var(--space-20)',
            boxShadow: 'var(--shadow-lg)',
            zIndex: '1001',
            maxWidth: '400px',
            minWidth: '300px',
            transform: 'translateX(100%)',
            transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
            fontSize: 'var(--font-size-base)',
            fontFamily: 'var(--font-family-base)',
            color: 'var(--color-text)'
        };
        
        // Apply type-specific styles
        if (type === 'success') {
            baseStyles.borderColor = 'var(--color-success)';
            baseStyles.backgroundColor = 'var(--color-bg-3)';
        } else if (type === 'info') {
            baseStyles.borderColor = 'var(--color-primary)';
            baseStyles.backgroundColor = 'var(--color-bg-1)';
        }
        
        // Apply styles
        Object.assign(notification.style, baseStyles);
        
        // Set content
        notification.innerHTML = `
            <div style="display: flex; align-items: flex-start; gap: 12px;">
                <div style="font-size: 20px; line-height: 1;">${this.getNotificationIcon(type)}</div>
                <div style="flex: 1; line-height: 1.5;">${message}</div>
                <button class="notification-close" style="
                    background: none; 
                    border: none; 
                    font-size: 20px; 
                    cursor: pointer; 
                    color: var(--color-text-secondary);
                    padding: 0;
                    width: 24px;
                    height: 24px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    border-radius: 50%;
                    transition: all 0.2s ease;
                ">&times;</button>
            </div>
        `;
        
        // Add to DOM
        document.body.appendChild(notification);
        
        // Animate in
        setTimeout(() => {
            notification.style.transform = 'translateX(0)';
        }, 100);
        
        // Add close functionality
        const closeBtn = notification.querySelector('.notification-close');
        if (closeBtn) {
            closeBtn.addEventListener('mouseenter', function() {
                this.style.backgroundColor = 'var(--color-secondary)';
                this.style.color = 'var(--color-text)';
            });
            
            closeBtn.addEventListener('mouseleave', function() {
                this.style.backgroundColor = 'transparent';
                this.style.color = 'var(--color-text-secondary)';
            });
            
            closeBtn.addEventListener('click', () => {
                this.closeNotification(notification);
            });
        }
        
        // Auto-close after 6 seconds
        setTimeout(() => {
            this.closeNotification(notification);
        }, 6000);
    }

    getNotificationIcon(type) {
        switch(type) {
            case 'success': return '✅';
            case 'info': return 'ℹ️';
            case 'warning': return '⚠️';
            case 'error': return '❌';
            default: return 'ℹ️';
        }
    }

    closeNotification(notification) {
        if (notification && notification.parentNode) {
            notification.style.transform = 'translateX(100%)';
            notification.style.opacity = '0';
            setTimeout(() => {
                if (notification.parentNode) {
                    notification.parentNode.removeChild(notification);
                }
            }, 400);
        }
    }
}

// Additional utility functions for enhanced interactivity
class AnimationUtils {
    static observeElements() {
        // Intersection Observer for elements coming into view
        if (typeof IntersectionObserver !== 'undefined') {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('animate-in');
                    }
                });
            }, {
                threshold: 0.1,
                rootMargin: '0px 0px -50px 0px'
            });

            // Observe all animated elements
            const animatedElements = document.querySelectorAll('.solution-card, .metric-card, .challenge-card, .testimonial-card');
            animatedElements.forEach(el => observer.observe(el));
        }
    }

    static addHoverEffects() {
        // Enhanced hover effects for cards
        const cards = document.querySelectorAll('.solution-card, .metric-card, .challenge-card');
        
        cards.forEach(card => {
            card.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-8px) scale(1.02)';
                this.style.transition = 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)';
                this.style.boxShadow = 'var(--shadow-lg)';
            });
            
            card.addEventListener('mouseleave', function() {
                this.style.transform = 'translateY(0) scale(1)';
                this.style.boxShadow = 'var(--shadow-sm)';
            });
        });
    }
}

// Initialize the application when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM loaded, initializing app...');
    
    // Initialize main presentation app
    const app = new PresentationApp();
    
    // Initialize utility features
    AnimationUtils.observeElements();
    AnimationUtils.addHoverEffects();
    
    // Add loading animation
    document.body.classList.add('loaded');
    
    // Add custom CSS for enhanced animations
    const style = document.createElement('style');
    style.textContent = `
        body.loaded {
            opacity: 1;
        }
        
        body {
            opacity: 0;
            transition: opacity 0.3s ease;
        }
        
        .animate-in {
            animation: fadeInUp 0.6s cubic-bezier(0.16, 1, 0.3, 1);
        }
        
        .solution-card:hover {
            transform: translateY(-8px) scale(1.02) !important;
            box-shadow: var(--shadow-lg) !important;
            border-color: var(--color-primary) !important;
        }
        
        .metric-card:hover {
            transform: translateY(-5px) scale(1.01) !important;
            box-shadow: var(--shadow-md) !important;
        }
        
        .challenge-card:hover {
            transform: translateY(-5px) !important;
            box-shadow: var(--shadow-lg) !important;
        }
        
        .testimonial-card:hover {
            transform: translateY(-5px) !important;
            box-shadow: var(--shadow-md) !important;
        }
        
        @media (prefers-reduced-motion: reduce) {
            *, *::before, *::after {
                animation-duration: 0.01ms !important;
                animation-iteration-count: 1 !important;
                transition-duration: 0.01ms !important;
            }
        }
    `;
    document.head.appendChild(style);
    
    console.log('App initialization complete');
});

// Export for potential module usage
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { PresentationApp, AnimationUtils };
}