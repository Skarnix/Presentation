class PresentationApp {
    constructor() {
        this.currentSlide = 1;
        this.totalSlides = 7;
        this.isAnimating = false;
        
        this.systemData = {
            'basic-checklist': {
                title: 'Basic Checklist System',
                what: 'Digital task management and quality control checklists for daily operations',
                why: 'Ensures consistency and eliminates human errors in critical processes',
                growth: 'Reduces operational defects by 70% and improves efficiency significantly'
            },
            'auto-reminder': {
                title: 'Auto Reminder System',
                what: 'Automated notifications via WhatsApp and email for deadlines and tasks',
                why: 'Prevents missed deadlines and improves team coordination across departments',
                growth: 'Increases project completion rate by 85% and reduces delays'
            },
            'inventory': {
                title: 'Inventory Management System',
                what: 'Real-time stock tracking with automated reorder points and alerts',
                why: 'Prevents stockouts, reduces carrying costs, and optimizes inventory levels',
                growth: 'Optimizes inventory costs by 40% and reduces waste by 60%'
            },
            'supplier': {
                title: 'Supplier Management System',
                what: 'Vendor database with performance tracking and automated payment management',
                why: 'Streamlines procurement processes and improves supplier relationships',
                growth: 'Reduces procurement costs by 25% and delivery delays by 50%'
            },
            'production': {
                title: 'Production Management System',
                what: 'Manufacturing planning, scheduling, and real-time quality control',
                why: 'Optimizes production flow and maximizes resource utilization',
                growth: 'Increases production efficiency by 45% and minimizes downtime'
            },
            'sales-crm': {
                title: 'Sales CRM System',
                what: 'Complete customer relationship management with sales pipeline tracking',
                why: 'Improves customer retention and accelerates sales conversion cycles',
                growth: 'Boosts sales conversion by 65% and enhances customer satisfaction'
            },
            'hrms': {
                title: 'HRMS System',
                what: 'Complete human resource management with automated payroll processing',
                why: 'Streamlines HR processes and significantly improves employee experience',
                growth: 'Reduces HR administrative time by 80% and improves compliance'
            },
            'attendance': {
                title: 'Attendance System',
                what: 'Biometric and digital attendance tracking with comprehensive analytics',
                why: 'Ensures accurate time tracking and automated payroll calculations',
                growth: 'Eliminates time theft completely and achieves 100% payroll accuracy'
            },
            'directory': {
                title: 'Employee Directory System',
                what: 'Centralized employee database with skills mapping and contact information',
                why: 'Improves internal communication and enhances team collaboration',
                growth: 'Enhances team productivity and eliminates communication gaps'
            },
            'mis': {
                title: 'MIS Scoring System',
                what: 'Advanced performance analytics and business intelligence dashboard',
                why: 'Enables data-driven decision making and real-time performance monitoring',
                growth: 'Improves decision accuracy by 75% and strategic planning effectiveness'
            },
            'flow': {
                title: 'Custom Flow Management System',
                what: 'Workflow automation and process optimization with custom business rules',
                why: 'Standardizes business processes and eliminates operational bottlenecks',
                growth: 'Speeds up business processes by 60% and reduces operational costs'
            },
            'tracker': {
                title: 'System Tracker',
                what: 'Real-time monitoring of all integrated systems with proactive alerts',
                why: 'Ensures system reliability and prevents costly downtime incidents',
                growth: 'Achieves 99.9% system uptime and enables rapid issue resolution'
            }
        };
        
        this.systemKeys = Object.keys(this.systemData);
        this.currentSystemIndex = 0;
        this.rotationInterval = null;
        
        this.companySequence = ['manufacturing-comparison', 'service-comparison', 'multinational-comparison'];
        this.currentComparisonIndex = 0;
        
        this.timelineCurrentIndex = 0;
        
        this.init();
    }

    init() {
        this.setupEventListeners();
        this.updateSlideCounter();
        this.updateProgressBar();
        this.initializeSlide1();
    }

    setupEventListeners() {
        // Main navigation
        document.getElementById('prev-btn').addEventListener('click', () => this.previousSlide());
        document.getElementById('next-btn').addEventListener('click', () => this.nextSlide());
        
        // Keyboard navigation
        document.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowRight' || e.key === ' ') {
                e.preventDefault();
                this.nextSlide();
            } else if (e.key === 'ArrowLeft') {
                e.preventDefault();
                this.previousSlide();
            }
        });

        // Contact buttons
        document.getElementById('discover-btn').addEventListener('click', () => this.sendEmail());
        document.getElementById('email-btn').addEventListener('click', () => this.sendEmail());
        document.getElementById('schedule-btn').addEventListener('click', () => this.sendEmail());
        document.getElementById('call-btn').addEventListener('click', () => {
            window.open('tel:+918434507008');
        });

        // System navigation controls (will be added dynamically)
        this.setupSystemControls();
    }

    setupSystemControls() {
        // Wait for slide 3 to be initialized
        setTimeout(() => {
            const prevBtn = document.getElementById('prev-system-btn');
            const nextBtn = document.getElementById('next-system-btn');
            
            if (prevBtn && nextBtn) {
                prevBtn.addEventListener('click', () => this.rotateSystem(-1));
                nextBtn.addEventListener('click', () => this.rotateSystem(1));
            }
        }, 100);
    }

    nextSlide() {
        if (this.isAnimating || this.currentSlide >= this.totalSlides) return;
        
        this.isAnimating = true;
        this.currentSlide++;
        this.switchToSlide(this.currentSlide);
    }

    previousSlide() {
        if (this.isAnimating || this.currentSlide <= 1) return;
        
        this.isAnimating = true;
        this.currentSlide--;
        this.switchToSlide(this.currentSlide);
    }

    switchToSlide(slideNumber) {
        // Stop any ongoing intervals
        if (this.rotationInterval) {
            clearInterval(this.rotationInterval);
            this.rotationInterval = null;
        }
        
        // Remove active class from all slides
        document.querySelectorAll('.slide').forEach(slide => slide.classList.remove('active'));
        
        // Add active class to current slide
        const currentSlideElement = document.getElementById(`slide-${slideNumber}`);
        currentSlideElement.classList.add('active');
        
        // Initialize slide-specific animations
        setTimeout(() => {
            this.initializeSlide(slideNumber);
            this.updateSlideCounter();
            this.updateProgressBar();
            this.isAnimating = false;
        }, 400);
    }

    initializeSlide(slideNumber) {
        switch (slideNumber) {
            case 1: this.initializeSlide1(); break;
            case 2: this.initializeSlide2(); break;
            case 3: this.initializeSlide3(); break;
            case 4: this.initializeSlide4(); break;
            case 5: this.initializeSlide5(); break;
            case 6: this.initializeSlide6(); break;
            case 7: this.initializeSlide7(); break;
        }
    }

    initializeSlide1() {
        const elements = document.querySelectorAll('#slide-1 .main-title, #slide-1 .subtitle, #slide-1 .cta-button');
        elements.forEach((el, index) => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(30px)';
            setTimeout(() => {
                el.style.transition = 'all 0.6s ease';
                el.style.opacity = '1';
                el.style.transform = 'translateY(0)';
            }, index * 300);
        });

        setTimeout(() => {
            document.querySelectorAll('#slide-1 .stat').forEach((stat, index) => {
                stat.style.opacity = '0';
                stat.style.transform = 'translateY(20px)';
                setTimeout(() => {
                    stat.style.transition = 'all 0.5s ease';
                    stat.style.opacity = '1';
                    stat.style.transform = 'translateY(0)';
                }, index * 200);
            });
        }, 1000);
    }

    initializeSlide2() {
        this.currentCompanyIndex = 0;
        this.companyTypes = ['company-0', 'company-40', 'company-100'];
        
        // Reset all cards
        this.companyTypes.forEach(type => {
            const card = document.getElementById(type);
            card.classList.remove('active');
            card.querySelector('.company-description').classList.add('hidden');
        });

        // Setup manual click listeners
        this.companyTypes.forEach((type, index) => {
            document.getElementById(type).onclick = () => {
                this.showCompanyType(index);
            };
        });

        // Start with first company type
        setTimeout(() => this.showCompanyType(0), 500);
    }

    showCompanyType(index) {
        // Hide all descriptions first
        this.companyTypes.forEach(type => {
            const card = document.getElementById(type);
            card.classList.remove('active');
            card.querySelector('.company-description').classList.add('hidden');
        });

        // Show selected company type
        setTimeout(() => {
            const currentCard = document.getElementById(this.companyTypes[index]);
            currentCard.classList.add('active');
            currentCard.querySelector('.company-description').classList.remove('hidden');
        }, 300);

        this.currentCompanyIndex = index;
    }

    initializeSlide3() {
        this.currentSystemIndex = 0;
        this.showSystemInfo();
        
        // Setup manual controls
        this.setupSystemControls();
        
        // Setup pie slice click listeners
        document.querySelectorAll('.pie-slice').forEach((slice, index) => {
            slice.onclick = () => {
                this.stopAutoRotation();
                this.currentSystemIndex = index;
                this.showSystemInfo();
            };
        });

        // Start slower auto rotation (8 seconds per system for explanation time)
        this.startAutoRotation();
    }

    startAutoRotation() {
        this.rotationInterval = setInterval(() => {
            this.currentSystemIndex = (this.currentSystemIndex + 1) % this.systemKeys.length;
            this.showSystemInfo();
        }, 8000); // 8 seconds per system for proper explanation time
    }

    stopAutoRotation() {
        if (this.rotationInterval) {
            clearInterval(this.rotationInterval);
            this.rotationInterval = null;
        }
    }

    rotateSystem(direction) {
        this.stopAutoRotation();
        this.currentSystemIndex = (this.currentSystemIndex + direction + this.systemKeys.length) % this.systemKeys.length;
        this.showSystemInfo();
    }

    showSystemInfo() {
        // Update active pie slice
        document.querySelectorAll('.pie-slice').forEach(slice => slice.classList.remove('active'));
        const currentSlice = document.querySelectorAll('.pie-slice')[this.currentSystemIndex];
        currentSlice.classList.add('active');

        // Rotate circles with smooth animation
        const rotationAngle = this.currentSystemIndex * 30; // 360 / 12 = 30 degrees
        
        const outerCircle = document.getElementById('outer-circle');
        const innerCircle = document.getElementById('inner-circle');
        
        if (outerCircle && innerCircle) {
            outerCircle.style.transform = `rotate(${-rotationAngle}deg)`;
            innerCircle.style.transform = `translate(-50%, -50%) rotate(${rotationAngle}deg)`;
        }

        // Update system information
        const systemKey = this.systemKeys[this.currentSystemIndex];
        const systemInfo = this.systemData[systemKey];

        document.getElementById('system-title').textContent = systemInfo.title;
        document.getElementById('what-text').textContent = systemInfo.what;
        document.getElementById('why-text').textContent = systemInfo.why;
        document.getElementById('growth-text').textContent = systemInfo.growth;
        
        // Update counter
        document.getElementById('current-system').textContent = this.currentSystemIndex + 1;
    }

    initializeSlide4() {
        this.timelineCurrentIndex = 0;
        const items = document.querySelectorAll('.timeline-item');
        
        // Reset all items
        items.forEach(item => item.classList.remove('active'));
        
        // Setup controls
        const nextBtn = document.getElementById('timeline-next-btn');
        const resetBtn = document.getElementById('timeline-reset-btn');
        
        if (nextBtn) {
            nextBtn.disabled = false;
            nextBtn.onclick = () => this.showNextTimelineItem();
        }
        
        if (resetBtn) {
            resetBtn.onclick = () => this.resetTimeline();
        }

        // Show first item automatically
        setTimeout(() => this.showNextTimelineItem(), 500);
    }

    showNextTimelineItem() {
        const items = document.querySelectorAll('.timeline-item');
        const nextBtn = document.getElementById('timeline-next-btn');
        
        if (this.timelineCurrentIndex < items.length) {
            items[this.timelineCurrentIndex].classList.add('active');
            this.timelineCurrentIndex++;
            
            if (this.timelineCurrentIndex >= items.length && nextBtn) {
                nextBtn.disabled = true;
                nextBtn.innerHTML = '<i class="fas fa-check"></i> Complete';
            }
        }
    }

    resetTimeline() {
        this.timelineCurrentIndex = 0;
        const items = document.querySelectorAll('.timeline-item');
        const nextBtn = document.getElementById('timeline-next-btn');
        
        items.forEach(item => item.classList.remove('active'));
        
        if (nextBtn) {
            nextBtn.disabled = false;
            nextBtn.innerHTML = '<i class="fas fa-play"></i> Next Week';
        }
    }

    initializeSlide5() {
        const roiSections = document.querySelectorAll('.roi-section');
        
        roiSections.forEach((section, index) => {
            section.classList.remove('active');
            setTimeout(() => {
                section.classList.add('active');
            }, index * 700);
        });

        // Animate growth bars with delay
        setTimeout(() => {
            document.querySelectorAll('.growth-bar').forEach((bar, index) => {
                setTimeout(() => {
                    bar.style.height = bar.style.height;
                }, index * 300);
            });
        }, 2100);
    }

    initializeSlide6() {
        this.currentComparisonIndex = 0;
        this.showComparisonSection();
    }

    showComparisonSection() {
        // Hide all comparison sections
        document.querySelectorAll('.comparison-section').forEach(section => {
            section.classList.add('hidden');
        });

        // Show current section
        setTimeout(() => {
            const currentSection = document.getElementById(this.companySequence[this.currentComparisonIndex]);
            currentSection.classList.remove('hidden');
            
            // Animate comparison points with longer delays for explanation
            const points = currentSection.querySelectorAll('.comparison-point');
            points.forEach((point, index) => {
                point.classList.remove('active');
                setTimeout(() => {
                    point.classList.add('active');
                }, index * 1000); // 1 second per point for explanation
            });
        }, 300);

        // Auto advance after sufficient time (40 seconds for manufacturing, 30 for others)
        const timeDelay = this.currentComparisonIndex === 0 ? 12000 : 10000;
        setTimeout(() => {
            this.currentComparisonIndex = (this.currentComparisonIndex + 1) % this.companySequence.length;
            this.showComparisonSection();
        }, timeDelay);
    }

    initializeSlide7() {
        const contactCards = document.querySelectorAll('.contact-card');
        
        contactCards.forEach((card, index) => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(30px)';
            setTimeout(() => {
                card.style.transition = 'all 0.6s ease';
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }, index * 300);
        });

        // Animate final CTA
        setTimeout(() => {
            const finalCta = document.querySelector('.final-cta');
            finalCta.style.opacity = '0';
            finalCta.style.transform = 'translateY(20px)';
            finalCta.style.transition = 'all 0.6s ease';
            setTimeout(() => {
                finalCta.style.opacity = '1';
                finalCta.style.transform = 'translateY(0)';
            }, 100);
        }, 1200);
    }

    sendEmail() {
        const subject = encodeURIComponent('Digital Transformation Inquiry - 12 System Package');
        const body = encodeURIComponent(`Hello,

I am interested in learning more about your digital transformation solutions and the complete 12-system package for ₹59,999.

Please provide more information about:
- Implementation timeline
- Training and support
- System customization options
- ROI projections for my business

Looking forward to discussing how we can transform our business operations.

Best regards`);
        window.open(`mailto:sudarshankarn@gmail.com?subject=${subject}&body=${body}`);
    }

    updateSlideCounter() {
        document.getElementById('current-slide').textContent = this.currentSlide;
        document.getElementById('total-slides').textContent = this.totalSlides;
        
        const prevBtn = document.getElementById('prev-btn');
        const nextBtn = document.getElementById('next-btn');
        
        prevBtn.disabled = this.currentSlide === 1;
        nextBtn.disabled = this.currentSlide === this.totalSlides;
    }

    updateProgressBar() {
        const progressBar = document.getElementById('progress-bar');
        const progressPercentage = (this.currentSlide / this.totalSlides) * 100;
        progressBar.style.width = `${progressPercentage}%`;
    }
}

// Initialize the presentation
document.addEventListener('DOMContentLoaded', () => {
    new PresentationApp();
});

// Prevent accidental refresh during presentation
window.addEventListener('beforeunload', (e) => {
    e.preventDefault();
    e.returnValue = 'Are you sure you want to leave the presentation?';
});
