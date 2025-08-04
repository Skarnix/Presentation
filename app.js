// Professional JavaScript with Manual Controls and Proper Animations

// System Data in Clockwise Order
const systemsData = [
    {
        name: "Basic Checklist",
        category: "Workflow & Automation",
        what: "Digital task and process checklist management",
        why: "Ensures consistent process execution and compliance",
        growth: "Improves process compliance by 95% and reduces errors",
        color: "#8b5cf6"
    },
    {
        name: "Auto Reminder System",
        category: "Workflow & Automation",
        what: "Automated notifications via WhatsApp and Email",
        why: "Keeps teams informed and ensures timely actions",
        growth: "Reduces missed deadlines by 85% and improves communication",
        color: "#8b5cf6"
    },
    {
        name: "Inventory Management System",
        category: "Operations & Inventory",
        what: "Real-time stock tracking and inventory control",
        why: "Prevents stockouts and reduces carrying costs",
        growth: "Reduces inventory costs by 30% and improves cash flow",
        color: "#10b981"
    },
    {
        name: "Supplier Management System",
        category: "Operations & Inventory", 
        what: "Vendor relationship and procurement management",
        why: "Streamlines supplier communication and procurement",
        growth: "Reduces procurement costs by 20% and improves supplier relations",
        color: "#10b981"
    },
    {
        name: "Production Management System",
        category: "Operations & Inventory",
        what: "Manufacturing process monitoring and control",
        why: "Optimizes production efficiency and quality",
        growth: "Increases production efficiency by 35% and reduces waste",
        color: "#10b981"
    },
    {
        name: "Sales CRM",
        category: "Sales & Customer",
        what: "Customer relationship and sales pipeline management", 
        why: "Tracks leads, customers, and sales performance",
        growth: "Increases sales conversion by 45% and customer retention by 30%",
        color: "#f59e0b"
    },
    {
        name: "HRMS",
        category: "HR & Employee Management",
        what: "Complete human resource management system",
        why: "Streamlines all HR processes from hiring to exit",
        growth: "Reduces HR costs by 40% and improves employee satisfaction",
        color: "#3b82f6"
    },
    {
        name: "Attendance System", 
        category: "HR & Employee Management",
        what: "Automated employee time tracking and attendance",
        why: "Eliminates manual attendance errors and buddy punching",
        growth: "Saves 15 hours per week in attendance management",
        color: "#3b82f6"
    },
    {
        name: "Employee Directory",
        category: "HR & Employee Management", 
        what: "Centralized employee information database",
        why: "Quick access to employee details and organizational structure",
        growth: "Improves internal communication by 60%",
        color: "#3b82f6"
    },
    {
        name: "Employee Central MIS Scoring System",
        category: "HR & Employee Management",
        what: "Performance tracking and analytics dashboard",
        why: "Data-driven employee performance evaluation",
        growth: "Increases productivity by 25% through better performance insights",
        color: "#3b82f6"
    },
    {
        name: "Custom Flow Management System",
        category: "Workflow & Automation",
        what: "Automated business process workflows",
        why: "Eliminates manual approvals and reduces processing time",
        growth: "Reduces process time by 70% and eliminates bottlenecks",
        color: "#8b5cf6"
    },
    {
        name: "System Tracker",
        category: "Workflow & Automation",
        what: "Real-time system monitoring and performance tracking",
        why: "Ensures all systems are running optimally",
        growth: "Reduces system downtime by 90% and improves reliability",
        color: "#8b5cf6"
    }
];

class PresentationController {
    constructor() {
        this.currentSlide = 1;
        this.totalSlides = 7;
        this.currentSystem = 0;
        this.currentCompanyType = 0; // 0: traditional, 1: partial, 2: automated
        this.currentWeek = 0;
        this.currentROISection = 0; // 0: investment, 1: growth, 2: benefits
        this.currentStory = 'manufacturing';
        
        this.initializeElements();
        this.bindEvents();
        this.updateProgress();
        this.initializeSlide();
    }

    initializeElements() {
        this.slides = document.querySelectorAll('.slide');
        this.indicators = document.querySelectorAll('.indicator');
        this.progressFill = document.querySelector('.progress-fill');
        this.prevBtn = document.querySelector('.prev-btn');
        this.nextBtn = document.querySelector('.next-btn');
    }

    bindEvents() {
        // Navigation buttons
        if (this.prevBtn) this.prevBtn.addEventListener('click', () => this.previousSlide());
        if (this.nextBtn) this.nextBtn.addEventListener('click', () => this.nextSlide());
        
        // Slide indicators
        this.indicators.forEach((indicator, index) => {
            indicator.addEventListener('click', () => this.goToSlide(index + 1));
        });
        
        // Keyboard navigation
        document.addEventListener('keydown', (e) => this.handleKeypress(e));
    }

    handleKeypress(e) {
        switch(e.key) {
            case 'ArrowLeft':
                if (this.currentSlide === 2) {
                    this.previousCompanyType();
                } else if (this.currentSlide === 3) {
                    this.previousSystem();
                } else if (this.currentSlide === 4) {
                    this.previousWeek();
                } else if (this.currentSlide === 5) {
                    this.previousROISection();
                } else {
                    this.previousSlide();
                }
                break;
            case 'ArrowRight':
            case ' ':
                e.preventDefault();
                if (this.currentSlide === 2) {
                    this.nextCompanyType();
                } else if (this.currentSlide === 3) {
                    this.nextSystem();
                } else if (this.currentSlide === 4) {
                    this.nextWeek();
                } else if (this.currentSlide === 5) {
                    this.nextROISection();
                } else {
                    this.nextSlide();
                }
                break;
            case 'ArrowUp':
                this.previousSlide();
                break;
            case 'ArrowDown':
                this.nextSlide();
                break;
        }
    }

    goToSlide(slideNumber) {
        if (slideNumber < 1 || slideNumber > this.totalSlides) return;
        
        // Remove active class from current slide
        if (this.slides[this.currentSlide - 1]) {
            this.slides[this.currentSlide - 1].classList.remove('active');
        }
        if (this.indicators[this.currentSlide - 1]) {
            this.indicators[this.currentSlide - 1].classList.remove('active');
        }
        
        // Set new current slide
        this.currentSlide = slideNumber;
        
        // Add active class to new slide
        if (this.slides[this.currentSlide - 1]) {
            this.slides[this.currentSlide - 1].classList.add('active');
        }
        if (this.indicators[this.currentSlide - 1]) {
            this.indicators[this.currentSlide - 1].classList.add('active');
        }
        
        this.updateProgress();
        this.initializeSlide();
    }

    nextSlide() {
        const nextSlide = this.currentSlide >= this.totalSlides ? 1 : this.currentSlide + 1;
        this.goToSlide(nextSlide);
    }

    previousSlide() {
        const prevSlide = this.currentSlide <= 1 ? this.totalSlides : this.currentSlide - 1;
        this.goToSlide(prevSlide);
    }

    updateProgress() {
        const progressPercent = (this.currentSlide / this.totalSlides) * 100;
        if (this.progressFill) {
            this.progressFill.style.width = progressPercent + '%';
        }
    }

    initializeSlide() {
        switch(this.currentSlide) {
            case 2:
                this.initializeCompanyTypes();
                break;
            case 3:
                this.initializeSystemsChart();
                break;
            case 4:
                this.initializeTimeline();
                break;
            case 5:
                this.initializeROI();
                break;
            case 6:
                this.initializeSuccessStories();
                break;
        }
    }

    // Slide 2: Company Types
    initializeCompanyTypes() {
        this.currentCompanyType = 0;
        this.showCompanyType();
    }

    showCompanyType() {
        // Hide all explanations
        document.querySelectorAll('.company-explanation').forEach(el => {
            el.style.display = 'none';
        });
        
        // Hide summary initially
        const companySummary = document.getElementById('company-summary');
        if (companySummary) {
            companySummary.style.display = 'none';
        }
        
        // Show current company type explanation
        const types = ['traditional', 'partial', 'automated'];
        const currentType = types[this.currentCompanyType];
        const explanation = document.getElementById(currentType + '-explanation');
        if (explanation) {
            explanation.style.display = 'block';
        }
        
        // Update active card
        document.querySelectorAll('.company-type-card').forEach((card, index) => {
            card.classList.toggle('active', index === this.currentCompanyType);
        });
    }

    nextCompanyType() {
        if (this.currentCompanyType < 2) {
            this.currentCompanyType++;
            this.showCompanyType();
        } else {
            // Show summary and move to next slide
            this.showCompanySummary();
        }
    }

    previousCompanyType() {
        if (this.currentCompanyType > 0) {
            this.currentCompanyType--;
            this.showCompanyType();
        }
    }

    showCompanySummary() {
        document.querySelectorAll('.company-explanation').forEach(el => {
            el.style.display = 'none';
        });
        
        const companySummary = document.getElementById('company-summary');
        if (companySummary) {
            companySummary.style.display = 'grid';
        }
        
        // Reset active states
        document.querySelectorAll('.company-type-card').forEach(card => {
            card.classList.remove('active');
        });
    }

    // Slide 3: Systems Portfolio
    initializeSystemsChart() {
        this.currentSystem = 0;
        this.drawSystemsChart();
        this.updateSystemDetails();
    }

    drawSystemsChart() {
        const canvas = document.getElementById('systemsChart');
        if (!canvas) return;
        
        const ctx = canvas.getContext('2d');
        const centerX = canvas.width / 2;
        const centerY = canvas.height / 2;
        const radius = 200;
        
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        // Draw sectors
        const anglePerSystem = (2 * Math.PI) / systemsData.length;
        let currentAngle = -Math.PI / 2; // Start from top
        
        systemsData.forEach((system, index) => {
            ctx.beginPath();
            ctx.moveTo(centerX, centerY);
            ctx.arc(centerX, centerY, radius, currentAngle, currentAngle + anglePerSystem);
            ctx.closePath();
            
            // Highlight current system
            if (index === this.currentSystem) {
                ctx.fillStyle = system.color;
                ctx.globalAlpha = 1;
            } else {
                ctx.fillStyle = system.color;
                ctx.globalAlpha = 0.3;
            }
            
            ctx.fill();
            ctx.globalAlpha = 1;
            
            // Draw border
            ctx.strokeStyle = '#ffffff';
            ctx.lineWidth = 2;
            ctx.stroke();
            
            // Draw system name
            const textAngle = currentAngle + anglePerSystem / 2;
            const textRadius = radius * 0.75;
            const textX = centerX + Math.cos(textAngle) * textRadius;
            const textY = centerY + Math.sin(textAngle) * textRadius;
            
            ctx.fillStyle = '#ffffff';
            ctx.font = 'bold 12px Arial';
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            
            // Split long names
            const words = system.name.split(' ');
            if (words.length > 2) {
                ctx.fillText(words.slice(0, 2).join(' '), textX, textY - 8);
                ctx.fillText(words.slice(2).join(' '), textX, textY + 8);
            } else if (words.length === 2) {
                ctx.fillText(words[0], textX, textY - 8);
                ctx.fillText(words[1], textX, textY + 8);
            } else {
                ctx.fillText(system.name, textX, textY);
            }
            
            currentAngle += anglePerSystem;
        });
        
        // Draw center circle
        ctx.beginPath();
        ctx.arc(centerX, centerY, 60, 0, 2 * Math.PI);
        ctx.fillStyle = '#ffffff';
        ctx.fill();
        ctx.strokeStyle = 'rgba(33, 128, 141, 1)';
        ctx.lineWidth = 4;
        ctx.stroke();
    }

    updateSystemDetails() {
        const system = systemsData[this.currentSystem];
        
        const elements = {
            systemName: document.getElementById('systemName'),
            systemCategory: document.getElementById('systemCategory'),
            systemWhat: document.getElementById('systemWhat'),
            systemWhy: document.getElementById('systemWhy'),
            systemGrowth: document.getElementById('systemGrowth'),
            currentSystemIndex: document.getElementById('currentSystemIndex')
        };
        
        if (elements.systemName) elements.systemName.textContent = system.name;
        if (elements.systemCategory) elements.systemCategory.textContent = system.category;
        if (elements.systemWhat) elements.systemWhat.textContent = system.what;
        if (elements.systemWhy) elements.systemWhy.textContent = system.why;
        if (elements.systemGrowth) elements.systemGrowth.textContent = system.growth;
        if (elements.currentSystemIndex) elements.currentSystemIndex.textContent = this.currentSystem + 1;
    }

    nextSystem() {
        this.currentSystem = (this.currentSystem + 1) % systemsData.length;
        this.drawSystemsChart();
        this.updateSystemDetails();
    }

    previousSystem() {
        this.currentSystem = (this.currentSystem - 1 + systemsData.length) % systemsData.length;
        this.drawSystemsChart();
        this.updateSystemDetails();
    }

    // Slide 4: Timeline
    initializeTimeline() {
        this.currentWeek = 0;
        this.showTimelineWeek();
    }

    showTimelineWeek() {
        const timelineItems = document.querySelectorAll('.timeline-item');
        timelineItems.forEach((item, index) => {
            if (index <= this.currentWeek) {
                item.style.opacity = '1';
                item.style.transform = 'translateY(0)';
                item.style.animationDelay = (index * 0.1) + 's';
            } else {
                item.style.opacity = '0.3';
                item.style.transform = 'translateY(30px)';
            }
        });
    }

    nextWeek() {
        if (this.currentWeek < 4) {
            this.currentWeek++;
            this.showTimelineWeek();
        }
    }

    previousWeek() {
        if (this.currentWeek > 0) {
            this.currentWeek--;
            this.showTimelineWeek();
        }
    }

    // Slide 5: ROI
    initializeROI() {
        this.currentROISection = 0;
        this.showROISection();
    }

    showROISection() {
        // Hide all sections
        document.querySelectorAll('.roi-section').forEach(section => {
            section.style.display = 'none';
        });
        
        // Show current section
        const sections = ['investment-section', 'growth-section', 'benefits-section'];
        const currentSectionElement = document.getElementById(sections[this.currentROISection]);
        if (currentSectionElement) {
            currentSectionElement.style.display = 'block';
        }
        
        // Update indicators
        document.querySelectorAll('.roi-indicator').forEach((indicator, index) => {
            indicator.classList.toggle('active', index === this.currentROISection);
        });
        
        // Animate growth bars if showing growth section
        if (this.currentROISection === 1) {
            setTimeout(() => this.animateGrowthBars(), 300);
        }
    }

    animateGrowthBars() {
        const bars = document.querySelectorAll('.bar-fill');
        bars.forEach((bar, index) => {
            setTimeout(() => {
                const height = bar.getAttribute('data-height');
                bar.style.height = (height * 3) + 'px';
            }, index * 200);
        });
    }

    nextROISection() {
        if (this.currentROISection < 2) {
            this.currentROISection++;
            this.showROISection();
        }
    }

    previousROISection() {
        if (this.currentROISection > 0) {
            this.currentROISection--;
            this.showROISection();
        }
    }

    // Slide 6: Success Stories
    initializeSuccessStories() {
        this.showStory('manufacturing');
    }

    showStory(storyType) {
        this.currentStory = storyType;
        
        // Update buttons
        document.querySelectorAll('.story-btn').forEach(btn => {
            btn.classList.remove('active');
        });
        document.querySelector(`[onclick="showStory('${storyType}')"]`).classList.add('active');
        
        // Hide all stories
        document.querySelectorAll('.success-story').forEach(story => {
            story.style.display = 'none';
        });
        
        // Show selected story
        const selectedStory = document.getElementById(storyType + '-story');
        if (selectedStory) {
            selectedStory.style.display = 'block';
        }
    }
}

// Global Functions for HTML onclick handlers
function sendEmail() {
    const subject = encodeURIComponent('Digital Transformation Inquiry - Discover Your Digital Potential');
    const body = encodeURIComponent(`Hi,

I am interested in learning more about your digital transformation services for my company.

I saw your presentation and would like to discuss:
- Complete system integration (12 systems for ₹59,999)
- Implementation timeline and support
- ROI expectations and growth projections

Please contact me to discuss further.

Best regards`);
    window.location.href = `mailto:sudarshankarn@gmail.com?subject=${subject}&body=${body}`;
}

function scheduleCall() {
    const subject = encodeURIComponent('Schedule Digital Transformation Consultation');
    const body = encodeURIComponent(`Hi,

I would like to schedule a consultation call to discuss digital transformation for my company.

Areas of interest:
- Moving from 40% to 100% digitalization
- System integration roadmap
- Investment and ROI discussion
- Implementation timeline

Please let me know your available times.

Best regards`);
    window.location.href = `mailto:sudarshankarn@gmail.com?subject=${subject}&body=${body}`;
}

function showExplanation(type) {
    const presentation = window.presentationController;
    if (presentation) {
        const types = ['traditional', 'partial', 'automated'];
        presentation.currentCompanyType = types.indexOf(type);
        presentation.showCompanyType();
    }
}

function nextSystem() {
    const presentation = window.presentationController;
    if (presentation) {
        presentation.nextSystem();
    }
}

function previousSystem() {
    const presentation = window.presentationController;
    if (presentation) {
        presentation.previousSystem();
    }
}

function showNextWeek() {
    const presentation = window.presentationController;
    if (presentation) {
        presentation.nextWeek();
    }
}

function showNextROISection() {
    const presentation = window.presentationController;
    if (presentation) {
        presentation.nextROISection();
    }
}

function showStory(storyType) {
    const presentation = window.presentationController;
    if (presentation) {
        presentation.showStory(storyType);
    }
}

// Initialize the presentation when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.presentationController = new PresentationController();
});

// Handle window resize
window.addEventListener('resize', debounce(() => {
    const presentation = window.presentationController;
    if (presentation && presentation.currentSlide === 3) {
        presentation.drawSystemsChart();
    }
}, 250));

// Utility function for debouncing
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

// Add smooth loading
window.addEventListener('load', () => {
    document.body.style.opacity = '1';
    const presentation = document.querySelector('.presentation-container');
    if (presentation) {
        presentation.style.opacity = '1';
    }
});