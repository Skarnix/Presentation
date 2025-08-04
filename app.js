// System Data
const systemsData = [
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
    },
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
    }
];

class PresentationController {
    constructor() {
        this.currentSlide = 1;
        this.totalSlides = 7;
        this.isPlaying = true;
        this.slideInterval = null;
        this.slideDuration = 12000; // 12 seconds per slide
        this.currentSystem = 0;
        this.systemInterval = null;
        this.comparisonStep = 0;
        
        this.initializeElements();
        this.bindEvents();
        this.updateProgress();
        
        // Start auto-play after a short delay
        setTimeout(() => {
            this.startAutoPlay();
        }, 1000);
    }

    initializeElements() {
        this.slides = document.querySelectorAll('.slide');
        this.indicators = document.querySelectorAll('.indicator');
        this.progressFill = document.querySelector('.progress-fill');
        this.prevBtn = document.querySelector('.prev-btn');
        this.nextBtn = document.querySelector('.next-btn');
        this.playPauseBtn = document.querySelector('.play-pause-btn');
    }

    bindEvents() {
        // Navigation buttons
        this.prevBtn.addEventListener('click', () => this.previousSlide());
        this.nextBtn.addEventListener('click', () => this.nextSlide());
        
        // Play/Pause button
        this.playPauseBtn.addEventListener('click', () => this.togglePlayPause());
        
        // Slide indicators
        this.indicators.forEach((indicator, index) => {
            indicator.addEventListener('click', () => this.goToSlide(index + 1));
        });
        
        // Keyboard navigation
        document.addEventListener('keydown', (e) => this.handleKeypress(e));
        
        // Pause on hover over navigation elements
        const navElements = [this.prevBtn, this.nextBtn, ...this.indicators, this.playPauseBtn];
        navElements.forEach(element => {
            element.addEventListener('mouseenter', () => this.pauseAutoPlay());
            element.addEventListener('mouseleave', () => {
                if (this.isPlaying) this.startAutoPlay();
            });
        });
    }

    handleKeypress(e) {
        switch(e.key) {
            case 'ArrowLeft':
                this.previousSlide();
                break;
            case 'ArrowRight':
            case ' ':
                e.preventDefault();
                this.nextSlide();
                break;
            case 'Escape':
                this.togglePlayPause();
                break;
        }
    }

    startAutoPlay() {
        this.pauseAutoPlay();
        this.slideInterval = setInterval(() => {
            this.nextSlide();
        }, this.slideDuration);
    }

    pauseAutoPlay() {
        if (this.slideInterval) {
            clearInterval(this.slideInterval);
            this.slideInterval = null;
        }
        if (this.systemInterval) {
            clearInterval(this.systemInterval);
            this.systemInterval = null;
        }
    }

    togglePlayPause() {
        this.isPlaying = !this.isPlaying;
        this.playPauseBtn.textContent = this.isPlaying ? '⏸' : '▶';
        
        if (this.isPlaying) {
            this.startAutoPlay();
        } else {
            this.pauseAutoPlay();
        }
    }

    goToSlide(slideNumber) {
        if (slideNumber < 1 || slideNumber > this.totalSlides) return;
        
        // Remove active class from current slide
        this.slides[this.currentSlide - 1].classList.remove('active');
        this.indicators[this.currentSlide - 1].classList.remove('active');
        
        // Set new current slide
        this.currentSlide = slideNumber;
        
        // Add active class to new slide
        this.slides[this.currentSlide - 1].classList.add('active');
        this.indicators[this.currentSlide - 1].classList.add('active');
        
        this.updateProgress();
        this.handleSlideSpecificLogic();
        
        // Restart auto-play if playing
        if (this.isPlaying) {
            this.startAutoPlay();
        }
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
        this.progressFill.style.width = progressPercent + '%';
    }

    handleSlideSpecificLogic() {
        switch(this.currentSlide) {
            case 2:
                this.startCompanyTypeAnimation();
                break;
            case 3:
                this.startSystemsAnimation();
                break;
            case 5:
                this.initializeGrowthChart();
                break;
            case 6:
                this.startComparisonAnimation();
                break;
        }
    }

    startCompanyTypeAnimation() {
        // Reset any existing animations
        document.querySelectorAll('.company-explanation').forEach(el => {
            el.style.display = 'none';
        });
        document.getElementById('company-summary').style.display = 'grid';
        
        // Sequence: Traditional -> Partial -> Automated -> Summary
        setTimeout(() => this.showExplanation('traditional'), 1000);
        setTimeout(() => this.showExplanation('partial'), 5000);
        setTimeout(() => this.showExplanation('automated'), 9000);
        setTimeout(() => this.showSummary(), 13000);
    }

    showExplanation(type) {
        // Hide summary
        document.getElementById('company-summary').style.display = 'none';
        
        // Hide all explanations
        document.querySelectorAll('.company-explanation').forEach(el => {
            el.style.display = 'none';
        });
        
        // Show specific explanation
        document.getElementById(type + '-explanation').style.display = 'block';
    }

    showSummary() {
        // Hide all explanations
        document.querySelectorAll('.company-explanation').forEach(el => {
            el.style.display = 'none';
        });
        
        // Show summary
        document.getElementById('company-summary').style.display = 'grid';
    }

    startSystemsAnimation() {
        this.currentSystem = 0;
        this.initializeSystemsChart();
        this.updateSystemDetails();
        
        // Auto-rotate through systems every 3 seconds
        this.systemInterval = setInterval(() => {
            this.currentSystem = (this.currentSystem + 1) % systemsData.length;
            this.updateSystemDetails();
            this.updateChart();
        }, 3000);
    }

    initializeSystemsChart() {
        const canvas = document.getElementById('systemsChart');
        const ctx = canvas.getContext('2d');
        
        // Store canvas context for animation
        this.chartCtx = ctx;
        this.chartCanvas = canvas;
        
        this.drawSystemsChart();
    }

    drawSystemsChart() {
        const ctx = this.chartCtx;
        const canvas = this.chartCanvas;
        const centerX = canvas.width / 2;
        const centerY = canvas.height / 2;
        const radius = 150;
        
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
                ctx.globalAlpha = 0.8;
            } else {
                ctx.fillStyle = system.color;
                ctx.globalAlpha = 0.3;
            }
            
            ctx.fill();
            ctx.globalAlpha = 1;
            
            // Draw system name
            const textAngle = currentAngle + anglePerSystem / 2;
            const textRadius = radius * 0.7;
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
            } else {
                ctx.fillText(system.name, textX, textY);
            }
            
            currentAngle += anglePerSystem;
        });
        
        // Draw center circle
        ctx.beginPath();
        ctx.arc(centerX, centerY, 50, 0, 2 * Math.PI);
        ctx.fillStyle = '#ffffff';
        ctx.fill();
        ctx.strokeStyle = '#e5e7eb';
        ctx.lineWidth = 2;
        ctx.stroke();
        
        // Draw center text
        ctx.fillStyle = '#374151';
        ctx.font = 'bold 14px Arial';
        ctx.textAlign = 'center';
        ctx.fillText('Digital', centerX, centerY - 8);
        ctx.fillText('Systems', centerX, centerY + 8);
    }

    updateChart() {
        this.drawSystemsChart();
    }

    updateSystemDetails() {
        const system = systemsData[this.currentSystem];
        
        document.getElementById('systemName').textContent = system.name;
        document.getElementById('systemCategory').textContent = system.category;
        document.getElementById('systemWhat').textContent = system.what;
        document.getElementById('systemWhy').textContent = system.why;
        document.getElementById('systemGrowth').textContent = system.growth;
    }

    initializeGrowthChart() {
        const canvas = document.getElementById('growthChart');
        const ctx = canvas.getContext('2d');
        
        const months = ['Month 1', 'Month 2', 'Month 3', 'Month 4', 'Month 5', 'Month 6'];
        const growthData = [0, 15, 35, 55, 75, 100];
        const colors = ['#ef4444', '#f59e0b', '#10b981', '#10b981', '#10b981', '#10b981'];
        
        // Clear canvas
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        // Chart dimensions
        const padding = 60;
        const chartWidth = canvas.width - 2 * padding;
        const chartHeight = canvas.height - 2 * padding;
        
        // Draw axes
        ctx.strokeStyle = '#e5e7eb';
        ctx.lineWidth = 2;
        
        // Y-axis
        ctx.beginPath();
        ctx.moveTo(padding, padding);
        ctx.lineTo(padding, canvas.height - padding);
        ctx.stroke();
        
        // X-axis
        ctx.beginPath();
        ctx.moveTo(padding, canvas.height - padding);
        ctx.lineTo(canvas.width - padding, canvas.height - padding);
        ctx.stroke();
        
        // Draw bars
        const barWidth = chartWidth / months.length * 0.8;
        const barSpacing = chartWidth / months.length * 0.2;
        
        growthData.forEach((value, index) => {
            const barHeight = (value / 100) * chartHeight;
            const x = padding + index * (barWidth + barSpacing) + barSpacing / 2;
            const y = canvas.height - padding - barHeight;
            
            // Draw bar
            ctx.fillStyle = colors[index];
            ctx.fillRect(x, y, barWidth, barHeight);
            
            // Draw value label
            ctx.fillStyle = '#374151';
            ctx.font = 'bold 14px Arial';
            ctx.textAlign = 'center';
            ctx.fillText(value + '%', x + barWidth / 2, y - 10);
            
            // Draw month label
            ctx.font = '12px Arial';
            ctx.fillText(months[index], x + barWidth / 2, canvas.height - padding + 20);
        });
        
        // Draw Y-axis labels
        ctx.fillStyle = '#6b7280';
        ctx.font = '12px Arial';
        ctx.textAlign = 'right';
        ctx.textBaseline = 'middle';
        
        for (let i = 0; i <= 100; i += 20) {
            const y = canvas.height - padding - (i / 100) * chartHeight;
            ctx.fillText(i + '%', padding - 10, y);
        }
    }

    startComparisonAnimation() {
        this.comparisonStep = 0;
        
        // Show manufacturing first
        document.getElementById('manufacturingComparison').style.display = 'block';
        document.getElementById('serviceComparison').style.display = 'none';
        document.getElementById('multinationalVision').style.display = 'none';
        
        // Animate manufacturing items
        this.animateComparisonItems('manufacturingComparison');
        
        // Switch to service after 8 seconds
        setTimeout(() => {
            document.getElementById('manufacturingComparison').style.display = 'none';
            document.getElementById('serviceComparison').style.display = 'block';
            this.animateComparisonItems('serviceComparison');
        }, 8000);
        
        // Switch to multinational vision after 16 seconds
        setTimeout(() => {
            document.getElementById('serviceComparison').style.display = 'none';
            document.getElementById('multinationalVision').style.display = 'block';
        }, 16000);
    }

    animateComparisonItems(containerId) {
        const container = document.getElementById(containerId);
        const items = container.querySelectorAll('.comparison-item');
        
        items.forEach((item, index) => {
            setTimeout(() => {
                item.classList.add('animate');
            }, index * 2000); // 2 second delay between items
        });
    }
}

// Email and Contact Functions
function sendEmail() {
    const subject = encodeURIComponent('Digital Transformation Inquiry');
    const body = encodeURIComponent('Hi,\n\nI am interested in learning more about your digital transformation services for my company.\n\nPlease contact me to discuss further.\n\nBest regards');
    window.location.href = `mailto:sudarshankarn@gmail.com?subject=${subject}&body=${body}`;
}

function scheduleCall() {
    const subject = encodeURIComponent('Schedule Consultation Call');
    const body = encodeURIComponent('Hi,\n\nI would like to schedule a consultation call to discuss digital transformation for my company.\n\nPlease let me know your available times.\n\nBest regards');
    window.location.href = `mailto:sudarshankarn@gmail.com?subject=${subject}&body=${body}`;
}

// Company Type Explanation Function (for slide 2 click interactions)
function showExplanation(type) {
    // This function is called when clicking on company type cards
    document.getElementById('company-summary').style.display = 'none';
    
    document.querySelectorAll('.company-explanation').forEach(el => {
        el.style.display = 'none';
    });
    
    document.getElementById(type + '-explanation').style.display = 'block';
    
    // Auto-hide after 5 seconds
    setTimeout(() => {
        document.getElementById(type + '-explanation').style.display = 'none';
        document.getElementById('company-summary').style.display = 'grid';
    }, 5000);
}

// Initialize the presentation when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new PresentationController();
});

// Add smooth scrolling and performance optimizations
window.addEventListener('load', () => {
    // Preload next slide images and content
    document.body.style.opacity = '1';
    
    // Add loading animation completion
    setTimeout(() => {
        document.querySelector('.presentation-container').classList.add('loaded');
    }, 500);
});

// Handle window resize
window.addEventListener('resize', debounce(() => {
    // Redraw charts if they exist
    const presentation = window.presentationController;
    if (presentation && presentation.chartCtx) {
        presentation.drawSystemsChart();
    }
    if (presentation && document.getElementById('growthChart')) {
        presentation.initializeGrowthChart();
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
