class PresentationApp {
    constructor() {
        this.currentSlide = 1;
        this.totalSlides = 7;
        this.isAnimating = false;
        
        this.systemData = {
            'basic-checklist': {
                title: 'Basic Checklist System',
                what: 'Digital task management and quality control checklists',
                why: 'Ensures consistency and eliminates human errors in processes',
                growth: 'Reduces defects by 70% and improves operational efficiency'
            },
            'auto-reminder': {
                title: 'Auto Reminder System',
                what: 'Automated notifications via WhatsApp and email for deadlines',
                why: 'Prevents missed deadlines and improves team coordination',
                growth: 'Increases project completion rate by 85%'
            },
            'inventory': {
                title: 'Inventory Management System',
                what: 'Real-time stock tracking and automated reorder points',
                why: 'Prevents stockouts and reduces carrying costs',
                growth: 'Optimizes inventory by 40% and reduces waste by 60%'
            },
            'supplier': {
                title: 'Supplier Management System',
                what: 'Vendor database, performance tracking, and payment management',
                why: 'Streamlines procurement and improves supplier relationships',
                growth: 'Reduces procurement costs by 25% and delivery delays by 50%'
            },
            'production': {
                title: 'Production Management System',
                what: 'Manufacturing planning, scheduling, and quality control',
                why: 'Optimizes production flow and resource utilization',
                growth: 'Increases production efficiency by 45% and reduces downtime'
            },
            'sales-crm': {
                title: 'Sales CRM System',
                what: 'Customer relationship management and sales pipeline tracking',
                why: 'Improves customer retention and accelerates sales cycles',
                growth: 'Boosts sales conversion by 65% and customer satisfaction'
            },
            'hrms': {
                title: 'HRMS System',
                what: 'Complete human resource management and payroll automation',
                why: 'Streamlines HR processes and improves employee experience',
                growth: 'Reduces HR admin time by 80% and improves compliance'
            },
            'attendance': {
                title: 'Attendance System',
                what: 'Biometric and digital attendance tracking with analytics',
                why: 'Accurate time tracking and automated payroll calculation',
                growth: 'Eliminates time theft and improves payroll accuracy by 100%'
            },
            'directory': {
                title: 'Employee Directory System',
                what: 'Centralized employee database with skills and contact info',
                why: 'Improves internal communication and team collaboration',
                growth: 'Enhances team productivity and reduces communication gaps'
            },
            'mis': {
                title: 'MIS Scoring System',
                what: 'Performance analytics and business intelligence dashboard',
                why: 'Data-driven decision making and performance monitoring',
                growth: 'Improves decision accuracy by 75% and strategic planning'
            },
            'flow': {
                title: 'Custom Flow Management System',
                what: 'Workflow automation and process optimization tools',
                why: 'Standardizes processes and eliminates bottlenecks',
                growth: 'Speeds up processes by 60% and reduces operational costs'
            },
            'tracker': {
                title: 'System Tracker',
                what: 'Real-time monitoring of all integrated systems and alerts',
                why: 'Ensures system reliability and prevents downtime',
                growth: 'Achieves 99.9% system uptime and rapid issue resolution'
            }
        };
        
        this.companySequence = ['manufacturing-comparison', 'service-comparison', 'multinational-comparison'];
        this.currentComparisonIndex = 0;
        
        this.init();
    }

    init() {
        this.setupEventListeners();
        this.updateSlideCounter();
        this.initializeSlide1();
    }

    setupEventListeners() {
        // Navigation buttons
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
        // Remove active class from all slides
        document.querySelectorAll('.slide').forEach(slide => slide.classList.remove('active'));
        
        // Add active class to current slide
        const currentSlideElement = document.getElementById(`slide-${slideNumber}`);
        currentSlideElement.classList.add('active');
        
        // Initialize slide-specific animations
        setTimeout(() => {
            this.initializeSlide(slideNumber);
            this.updateSlideCounter();
            this.isAnimating = false;
        }, 300);
    }

    initializeSlide(slideNumber) {
        switch (slideNumber) {
            case 1:
                this.initializeSlide1();
                break;
            case 2:
                this.initializeSlide2();
                break;
            case 3:
                this.initializeSlide3();
                break;
            case 4:
                this.initializeSlide4();
                break;
            case 5:
                this.initializeSlide5();
                break;
            case 6:
                this.initializeSlide6();
                break;
            case 7:
                this.initializeSlide7();
                break;
        }
    }

    initializeSlide1() {
        // Hero slide animations
        const elements = document.querySelectorAll('#slide-1 .main-title, #slide-1 .subtitle, #slide-1 .cta-button');
        elements.forEach((el, index) => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(30px)';
            setTimeout(() => {
                el.style.transition = 'all 0.6s ease';
                el.style.opacity = '1';
                el.style.transform = 'translateY(0)';
            }, index * 200);
        });

        // Stats animation
        setTimeout(() => {
            document.querySelectorAll('#slide-1 .stat').forEach((stat, index) => {
                stat.style.opacity = '0';
                stat.style.transform = 'translateY(20px)';
                setTimeout(() => {
                    stat.style.transition = 'all 0.5s ease';
                    stat.style.opacity = '1';
                    stat.style.transform = 'translateY(0)';
                }, index * 150);
            });
        }, 800);
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

        // Start the sequence
        setTimeout(() => this.showCompanyType(), 500);
    }

    showCompanyType() {
        if (this.currentCompanyIndex >= this.companyTypes.length) {
            this.currentCompanyIndex = 0;
        }

        // Hide all descriptions first
        this.companyTypes.forEach(type => {
            const card = document.getElementById(type);
            card.classList.remove('active');
            card.querySelector('.company-description').classList.add('hidden');
        });

        // Show current company type
        setTimeout(() => {
            const currentCard = document.getElementById(this.companyTypes[this.currentCompanyIndex]);
            currentCard.classList.add('active');
            currentCard.querySelector('.company-description').classList.remove('hidden');
        }, 300);

        // Setup click listeners for manual control
        this.companyTypes.forEach((type, index) => {
            document.getElementById(type).onclick = () => {
                this.currentCompanyIndex = index;
                this.showCompanyType();
            };
        });

        // Auto advance every 5 seconds
        setTimeout(() => {
            this.currentCompanyIndex++;
            this.showCompanyType();
        }, 5000);
    }

    initializeSlide3() {
        this.currentSystemIndex = 0;
        this.systemKeys = Object.keys(this.systemData);
        
        // Setup pie chart rotation and system selection
        this.setupSystemsWheel();
    }

    setupSystemsWheel() {
        const pieSlices = document.querySelectorAll('.pie-slice');
        
        pieSlices.forEach((slice, index) => {
            slice.addEventListener('click', () => {
                this.currentSystemIndex = index;
                this.showSystemInfo();
            });
        });

        // Start automatic rotation
        this.startSystemRotation();
    }

    startSystemRotation() {
        this.showSystemInfo();
        
        // Auto rotate every 3 seconds
        this.systemRotationInterval = setInterval(() => {
            this.currentSystemIndex = (this.currentSystemIndex + 1) % this.systemKeys.length;
            this.showSystemInfo();
        }, 3000);
    }

    showSystemInfo() {
        // Remove active class from all slices
        document.querySelectorAll('.pie-slice').forEach(slice => slice.classList.remove('active'));
        
        // Add active class to current slice
        const currentSlice = document.querySelectorAll('.pie-slice')[this.currentSystemIndex];
        currentSlice.classList.add('active');
        
        // Update system information
        const systemKey = this.systemKeys[this.currentSystemIndex];
        const systemInfo = this.systemData[systemKey];
        
        document.getElementById('system-title').textContent = systemInfo.title;
        document.getElementById('what-text').textContent = systemInfo.what;
        document.getElementById('why-text').textContent = systemInfo.why;
        document.getElementById('growth-text').textContent = systemInfo.growth;
    }

    initializeSlide4() {
        // Timeline animation
        const timelineItems = document.querySelectorAll('.timeline-item');
        
        timelineItems.forEach((item, index) => {
            item.classList.remove('active');
            setTimeout(() => {
                item.classList.add('active');
            }, index * 800);
        });
    }

    initializeSlide5() {
        // ROI sections animation
        const roiSections = document.querySelectorAll('.roi-section');
        
        roiSections.forEach((section, index) => {
            section.classList.remove('active');
            setTimeout(() => {
                section.classList.add('active');
            }, index * 600);
        });

        // Animate growth bars
        setTimeout(() => {
            document.querySelectorAll('.growth-bar').forEach((bar, index) => {
                setTimeout(() => {
                    bar.style.height = bar.style.height;
                }, index * 200);
            });
        }, 1800);
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
            
            // Animate comparison points
            const points = currentSection.querySelectorAll('.comparison-point');
            points.forEach((point, index) => {
                point.classList.remove('active');
                setTimeout(() => {
                    point.classList.add('active');
                }, index * 400);
            });
        }, 300);

        // Auto advance every 10 seconds
        setTimeout(() => {
            this.currentComparisonIndex = (this.currentComparisonIndex + 1) % this.companySequence.length;
            this.showComparisonSection();
        }, 10000);
    }

    initializeSlide7() {
        // Contact cards animation
        const contactCards = document.querySelectorAll('.contact-card');
        
        contactCards.forEach((card, index) => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(30px)';
            setTimeout(() => {
                card.style.transition = 'all 0.6s ease';
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }, index * 200);
        });
    }

    sendEmail() {
        const subject = encodeURIComponent('Digital Transformation Inquiry');
        const body = encodeURIComponent('Hello,\n\nI am interested in learning more about your digital transformation solutions. Please provide more information about the 12-system package.\n\nBest regards');
        window.open(`mailto:sudarshankarn@gmail.com?subject=${subject}&body=${body}`);
    }

    updateSlideCounter() {
        document.getElementById('current-slide').textContent = this.currentSlide;
        document.getElementById('total-slides').textContent = this.totalSlides;
        
        // Update navigation button states
        const prevBtn = document.getElementById('prev-btn');
        const nextBtn = document.getElementById('next-btn');
        
        prevBtn.disabled = this.currentSlide === 1;
        nextBtn.disabled = this.currentSlide === this.totalSlides;
    }
}

// Initialize the presentation when the page loads
document.addEventListener('DOMContentLoaded', () => {
    new PresentationApp();
});

// Add smooth scroll behavior
document.documentElement.style.scrollBehavior = 'smooth';

// Prevent accidental page refresh
window.addEventListener('beforeunload', (e) => {
    e.preventDefault();
    e.returnValue = '';
});
