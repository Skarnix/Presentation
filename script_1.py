# Create the enhanced CSS file with modern animations and styling
css_content = '''/* Reset and Base Styles */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

:root {
    --primary-color: #2563eb;
    --primary-dark: #1d4ed8;
    --secondary-color: #10b981;
    --accent-color: #f59e0b;
    --text-primary: #1f2937;
    --text-secondary: #6b7280;
    --text-light: #9ca3af;
    --bg-primary: #ffffff;
    --bg-secondary: #f8fafc;
    --bg-gradient: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    --border-color: #e5e7eb;
    --shadow-sm: 0 1px 2px 0 rgb(0 0 0 / 0.05);
    --shadow-md: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
    --shadow-lg: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
    --shadow-xl: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);
    --transition-fast: all 0.2s ease;
    --transition-normal: all 0.3s ease;
    --transition-slow: all 0.5s ease;
}

body {
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    line-height: 1.6;
    color: var(--text-primary);
    background: var(--bg-primary);
    overflow-x: hidden;
}

.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
}

/* Animation Classes */
@keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translateY(30px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

@keyframes slideInRight {
    from {
        opacity: 0;
        transform: translateX(30px);
    }
    to {
        opacity: 1;
        transform: translateX(0);
    }
}

@keyframes float {
    0%, 100% { transform: translateY(0) rotate(0deg); }
    50% { transform: translateY(-20px) rotate(180deg); }
}

@keyframes pulse {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.5; }
}

@keyframes spin {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
}

@keyframes bounce {
    0%, 20%, 53%, 80%, 100% { transform: translateY(0); }
    40%, 43% { transform: translateY(-10px); }
    70% { transform: translateY(-5px); }
    90% { transform: translateY(-2px); }
}

/* Fade-in animations */
.fade-in-up {
    opacity: 0;
    transform: translateY(30px);
    animation: fadeInUp 0.6s ease forwards;
}

.fade-in-section {
    opacity: 0;
    transform: translateY(50px);
    transition: var(--transition-slow);
}

.fade-in-section.visible {
    opacity: 1;
    transform: translateY(0);
}

.slide-in-right {
    opacity: 0;
    transform: translateX(30px);
    animation: slideInRight 0.6s ease forwards;
}

/* Hover effects */
.hover-lift {
    transition: var(--transition-normal);
}

.hover-lift:hover {
    transform: translateY(-8px);
    box-shadow: var(--shadow-xl);
}

.hover-scale {
    transition: var(--transition-normal);
}

.hover-scale:hover {
    transform: scale(1.05);
}

/* Hero Section */
.hero {
    position: relative;
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--bg-gradient);
    color: white;
    overflow: hidden;
}

.hero-bg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0.1;
    z-index: 1;
}

.floating-elements {
    position: absolute;
    width: 100%;
    height: 100%;
}

.float-element {
    position: absolute;
    width: 60px;
    height: 60px;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 50%;
    animation: float 6s ease-in-out infinite;
}

.float-element:nth-child(1) {
    top: 20%;
    left: 10%;
    animation-delay: -2s;
    animation-duration: 8s;
}

.float-element:nth-child(2) {
    top: 60%;
    left: 80%;
    animation-delay: -4s;
    animation-duration: 7s;
}

.float-element:nth-child(3) {
    top: 80%;
    left: 20%;
    animation-delay: -1s;
    animation-duration: 9s;
}

.float-element:nth-child(4) {
    top: 10%;
    left: 70%;
    animation-delay: -3s;
    animation-duration: 6s;
}

.float-element:nth-child(5) {
    top: 40%;
    left: 50%;
    animation-delay: -5s;
    animation-duration: 10s;
}

.hero-content {
    position: relative;
    z-index: 2;
    text-align: center;
    max-width: 800px;
}

.hero-title {
    font-size: 3.5rem;
    font-weight: 800;
    margin-bottom: 1rem;
    background: linear-gradient(45deg, #fff, #e2e8f0);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
}

.hero-subtitle {
    font-size: 1.5rem;
    font-weight: 300;
    margin-bottom: 3rem;
    opacity: 0.9;
}

.progress-journey {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    margin: 3rem 0;
    flex-wrap: wrap;
}

.journey-step {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
    transition: var(--transition-normal);
}

.journey-step.active {
    transform: scale(1.1);
}

.step-circle {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.2);
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 700;
    font-size: 1.2rem;
    border: 3px solid rgba(255, 255, 255, 0.3);
    transition: var(--transition-normal);
}

.journey-step.active .step-circle {
    background: var(--secondary-color);
    border-color: var(--secondary-color);
    box-shadow: 0 0 20px rgba(16, 185, 129, 0.5);
}

.step-label {
    font-size: 0.9rem;
    opacity: 0.8;
}

.journey-arrow {
    font-size: 2rem;
    opacity: 0.6;
    animation: pulse 2s infinite;
}

.cta-buttons {
    display: flex;
    gap: 1rem;
    justify-content: center;
    flex-wrap: wrap;
}

.btn-primary,
.btn-secondary {
    padding: 1rem 2rem;
    font-size: 1.1rem;
    font-weight: 600;
    border: none;
    border-radius: 12px;
    cursor: pointer;
    transition: var(--transition-normal);
    text-transform: uppercase;
    letter-spacing: 0.5px;
}

.btn-primary {
    background: var(--secondary-color);
    color: white;
    box-shadow: var(--shadow-lg);
}

.btn-primary:hover {
    background: #059669;
    transform: translateY(-2px);
    box-shadow: var(--shadow-xl);
}

.btn-secondary {
    background: transparent;
    color: white;
    border: 2px solid rgba(255, 255, 255, 0.3);
}

.btn-secondary:hover {
    background: rgba(255, 255, 255, 0.1);
    border-color: rgba(255, 255, 255, 0.5);
}

.btn-primary.large {
    padding: 1.2rem 3rem;
    font-size: 1.2rem;
}

.scroll-indicator {
    position: absolute;
    bottom: 2rem;
    left: 50%;
    transform: translateX(-50%);
    z-index: 2;
}

.scroll-arrow {
    width: 30px;
    height: 30px;
    border: 2px solid rgba(255, 255, 255, 0.5);
    border-top: none;
    border-right: none;
    transform: rotate(-45deg);
    animation: bounce 2s infinite;
}

/* Section Styles */
.section-wrapper {
    padding: 5rem 0;
}

.section-header {
    text-align: center;
    margin-bottom: 4rem;
}

.section-title {
    font-size: 2.5rem;
    font-weight: 700;
    margin-bottom: 1rem;
    color: var(--text-primary);
}

.section-subtitle {
    font-size: 1.2rem;
    color: var(--text-secondary);
    max-width: 600px;
    margin: 0 auto;
}

.maturity-section {
    margin-bottom: 6rem;
}

.problems-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
}

.problem-card {
    background: white;
    padding: 2rem;
    border-radius: 16px;
    box-shadow: var(--shadow-md);
    border: 1px solid var(--border-color);
    text-align: center;
    transition: var(--transition-normal);
}

.problem-card:hover {
    border-color: var(--primary-color);
}

.problem-icon {
    font-size: 3rem;
    margin-bottom: 1rem;
}

.problem-card h3 {
    font-size: 1.3rem;
    font-weight: 600;
    margin-bottom: 1rem;
    color: var(--text-primary);
}

.problem-card p {
    color: var(--text-secondary);
}

/* Success Section */
.success-section {
    background: var(--bg-secondary);
    padding: 4rem 0;
    border-radius: 24px;
    margin: 2rem 0;
}

.success-content {
    display: flex;
    align-items: center;
    gap: 4rem;
    flex-wrap: wrap;
    justify-content: center;
}

.success-circle {
    flex-shrink: 0;
}

.progress-ring {
    position: relative;
    width: 150px;
    height: 150px;
}

.progress-svg {
    width: 100%;
    height: 100%;
    transform: rotate(-90deg);
}

.progress-circle {
    transition: stroke-dashoffset 2s ease-in-out;
}

.progress-text {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 2rem;
    font-weight: 700;
    color: var(--secondary-color);
}

.success-achievements {
    flex: 1;
    min-width: 300px;
}

.achievement-item {
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 1rem 0;
    border-bottom: 1px solid var(--border-color);
    opacity: 0;
    transform: translateX(30px);
}

.achievement-item:last-child {
    border-bottom: none;
}

.achievement-item i {
    color: var(--secondary-color);
    font-size: 1.2rem;
}

.achievement-item span {
    font-weight: 500;
}

/* Potential Section */
.potential-section {
    background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
    padding: 4rem 0;
    border-radius: 24px;
}

.potential-visual {
    margin: 3rem 0;
}

.potential-bars {
    max-width: 400px;
    margin: 0 auto;
}

.bar {
    margin-bottom: 2rem;
}

.bar-fill {
    height: 60px;
    border-radius: 30px;
    position: relative;
    overflow: hidden;
    background: var(--border-color);
    transition: var(--transition-slow);
}

.bar-fill::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 0;
    background: var(--primary-color);
    border-radius: 30px;
    transition: width 2s ease-in-out;
}

.bar-fill.potential::after {
    background: var(--secondary-color);
}

.bar-label {
    text-align: center;
    margin-top: 0.5rem;
    font-weight: 600;
}

.benefits-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;
    margin-top: 3rem;
}

.benefit-card {
    background: white;
    padding: 2rem;
    border-radius: 16px;
    box-shadow: var(--shadow-md);
    text-align: center;
    transition: var(--transition-normal);
}

.benefit-icon {
    font-size: 2.5rem;
    margin-bottom: 1rem;
}

.benefit-card h3 {
    font-size: 1.2rem;
    font-weight: 600;
    margin-bottom: 1rem;
}

/* Solutions Section */
.solutions-section {
    background: var(--bg-secondary);
    padding: 5rem 0;
}

.solutions-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 2rem;
}

.solution-card {
    background: white;
    padding: 2rem;
    border-radius: 16px;
    box-shadow: var(--shadow-md);
    text-align: center;
    border: 1px solid var(--border-color);
    transition: var(--transition-normal);
}

.solution-card:hover {
    border-color: var(--primary-color);
    box-shadow: var(--shadow-lg);
}

.solution-icon {
    font-size: 2.5rem;
    margin-bottom: 1rem;
}

.solution-card h3 {
    font-size: 1.2rem;
    font-weight: 600;
    margin-bottom: 1rem;
    color: var(--text-primary);
}

.solution-card p {
    color: var(--text-secondary);
    margin-bottom: 1rem;
}

.solution-metric {
    padding: 0.5rem 1rem;
    background: var(--primary-color);
    color: white;
    border-radius: 20px;
    font-size: 0.9rem;
    font-weight: 500;
    display: inline-block;
}

/* Growth Path Section */
.growth-path-section {
    padding: 5rem 0;
}

.growth-timeline {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    flex-wrap: wrap;
    margin-top: 3rem;
}

.timeline-step {
    text-align: center;
    max-width: 250px;
    padding: 2rem;
    background: white;
    border-radius: 16px;
    box-shadow: var(--shadow-md);
    transition: var(--transition-normal);
}

.timeline-step.active {
    background: var(--primary-color);
    color: white;
    transform: scale(1.05);
}

.step-number {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background: var(--border-color);
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 700;
    margin: 0 auto 1rem;
    transition: var(--transition-normal);
}

.timeline-step.active .step-number {
    background: white;
    color: var(--primary-color);
}

.timeline-step h3 {
    font-size: 1.2rem;
    font-weight: 600;
    margin-bottom: 1rem;
}

.timeline-step ul {
    list-style: none;
    text-align: left;
}

.timeline-step li {
    padding: 0.3rem 0;
    position: relative;
    padding-left: 1rem;
}

.timeline-step li::before {
    content: '•';
    position: absolute;
    left: 0;
    color: var(--secondary-color);
}

.timeline-step.active li::before {
    color: rgba(255, 255, 255, 0.8);
}

.timeline-connector {
    font-size: 2rem;
    color: var(--text-light);
    animation: pulse 2s infinite;
}

/* Metrics Section */
.metrics-section {
    background: var(--bg-secondary);
    padding: 5rem 0;
}

.metrics-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;
}

.metric-card {
    background: white;
    padding: 2rem;
    border-radius: 16px;
    box-shadow: var(--shadow-md);
    text-align: center;
    transition: var(--transition-normal);
    position: relative;
    overflow: hidden;
}

.metric-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: var(--primary-color);
}

.metric-icon {
    font-size: 2.5rem;
    margin-bottom: 1rem;
}

.metric-value {
    font-size: 3rem;
    font-weight: 700;
    color: var(--primary-color);
    display: inline;
}

.metric-unit {
    font-size: 1.5rem;
    font-weight: 600;
    color: var(--primary-color);
}

.metric-label {
    font-size: 1.1rem;
    font-weight: 600;
    margin: 0.5rem 0;
}

.metric-description {
    color: var(--text-secondary);
    font-size: 0.9rem;
}

/* Comparison Section */
.comparison-section {
    padding: 5rem 0;
}

.comparison-container {
    display: flex;
    align-items: center;
    gap: 3rem;
    margin-top: 3rem;
    flex-wrap: wrap;
}

.comparison-side {
    flex: 1;
    min-width: 300px;
    padding: 2rem;
    border-radius: 16px;
    text-align: center;
}

.comparison-side.before {
    background: linear-gradient(135deg, #fee2e2, #fecaca);
    border: 2px solid #f87171;
}

.comparison-side.after {
    background: linear-gradient(135deg, #d1fae5, #a7f3d0);
    border: 2px solid #34d399;
}

.comparison-side h3 {
    font-size: 1.3rem;
    font-weight: 600;
    margin-bottom: 2rem;
}

.comparison-metrics {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

.comparison-metric {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    background: rgba(255, 255, 255, 0.7);
    border-radius: 8px;
}

.metric-value.negative {
    color: #dc2626;
    font-weight: 600;
}

.metric-value.positive {
    color: #059669;
    font-weight: 600;
}

.vs-divider {
    display: flex;
    align-items: center;
    justify-content: center;
}

.vs-text {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background: var(--primary-color);
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 700;
    font-size: 1.2rem;
    animation: pulse 2s infinite;
}

/* Calculator Section */
.calculator-section {
    background: var(--bg-secondary);
    padding: 5rem 0;
}

.calculator-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 3rem;
    margin-top: 3rem;
}

.calculator-inputs,
.calculator-results {
    background: white;
    padding: 2rem;
    border-radius: 16px;
    box-shadow: var(--shadow-md);
}

.input-group {
    margin-bottom: 1.5rem;
}

.input-group label {
    display: block;
    margin-bottom: 0.5rem;
    font-weight: 500;
    color: var(--text-primary);
}

.input-group input {
    width: 100%;
    padding: 1rem;
    border: 2px solid var(--border-color);
    border-radius: 8px;
    font-size: 1rem;
    transition: var(--transition-normal);
}

.input-group input:focus {
    outline: none;
    border-color: var(--primary-color);
    box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.1);
}

.calculator-results {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
}

.result-card {
    padding: 1.5rem;
    background: var(--bg-secondary);
    border-radius: 12px;
    text-align: center;
    border-left: 4px solid var(--secondary-color);
}

.result-card h3 {
    font-size: 1rem;
    font-weight: 500;
    color: var(--text-secondary);
    margin-bottom: 0.5rem;
}

.result-value {
    font-size: 1.8rem;
    font-weight: 700;
    color: var(--secondary-color);
}

/* Testimonials Section */
.testimonials-section {
    padding: 5rem 0;
}

.testimonials-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    gap: 2rem;
}

.testimonial-card {
    background: white;
    padding: 2rem;
    border-radius: 16px;
    box-shadow: var(--shadow-md);
    border: 1px solid var(--border-color);
    transition: var(--transition-normal);
    position: relative;
}

.testimonial-card::before {
    content: '"';
    position: absolute;
    top: -10px;
    left: 20px;
    font-size: 4rem;
    color: var(--primary-color);
    opacity: 0.2;
}

.testimonial-quote {
    font-size: 1.1rem;
    line-height: 1.6;
    margin-bottom: 1.5rem;
    color: var(--text-primary);
    font-style: italic;
}

.testimonial-author {
    margin-bottom: 1rem;
}

.testimonial-author strong {
    display: block;
    font-weight: 600;
    color: var(--text-primary);
}

.testimonial-author span {
    color: var(--text-secondary);
    font-size: 0.9rem;
}

.testimonial-metrics {
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
}

.testimonial-metrics .metric {
    padding: 0.3rem 0.8rem;
    background: var(--bg-secondary);
    border-radius: 12px;
    font-size: 0.8rem;
    font-weight: 500;
    color: var(--primary-color);
}

/* CTA Section */
.cta-section {
    background: var(--bg-gradient);
    color: white;
    padding: 5rem 0;
    position: relative;
    overflow: hidden;
}

.cta-section::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="grain" width="100" height="100" patternUnits="userSpaceOnUse"><circle cx="50" cy="50" r="1" fill="rgba(255,255,255,0.1)"/></pattern></defs><rect width="100" height="100" fill="url(%23grain)"/></svg>');
    opacity: 0.1;
}

.cta-content {
    position: relative;
    z-index: 2;
    text-align: center;
}

.cta-features {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;
    margin: 3rem 0;
}

.cta-feature {
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 1rem;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 12px;
    backdrop-filter: blur(10px);
    transition: var(--transition-normal);
}

.cta-feature:hover {
    background: rgba(255, 255, 255, 0.15);
    transform: translateY(-2px);
}

.cta-feature i {
    font-size: 1.5rem;
    color: var(--secondary-color);
}

.cta-social-proof {
    font-size: 1.1rem;
    margin: 2rem 0;
    opacity: 0.9;
}

.cta-offer {
    margin-top: 1rem;
    font-size: 0.9rem;
    opacity: 0.8;
}

/* Responsive Design */
@media (max-width: 768px) {
    .container {
        padding: 0 1rem;
    }
    
    .hero-title {
        font-size: 2.5rem;
    }
    
    .hero-subtitle {
        font-size: 1.2rem;
    }
    
    .progress-journey {
        gap: 1rem;
    }
    
    .journey-arrow {
        display: none;
    }
    
    .cta-buttons {
        flex-direction: column;
        align-items: center;
    }
    
    .calculator-container {
        grid-template-columns: 1fr;
    }
    
    .comparison-container {
        flex-direction: column;
    }
    
    .vs-divider {
        order: 2;
    }
    
    .comparison-side.after {
        order: 3;
    }
    
    .growth-timeline {
        flex-direction: column;
    }
    
    .timeline-connector {
        transform: rotate(90deg);
        margin: 1rem 0;
    }
    
    .success-content {
        flex-direction: column;
        text-align: center;
    }
    
    .potential-bars {
        max-width: 300px;
    }
    
    .cta-features {
        grid-template-columns: 1fr;
    }
}

@media (max-width: 480px) {
    .hero-title {
        font-size: 2rem;
    }
    
    .section-title {
        font-size: 2rem;
    }
    
    .step-circle {
        width: 60px;
        height: 60px;
        font-size: 1rem;
    }
    
    .metric-value {
        font-size: 2.5rem;
    }
    
    .btn-primary,
    .btn-secondary {
        padding: 0.8rem 1.5rem;
        font-size: 1rem;
    }
}

/* Dark mode support */
@media (prefers-color-scheme: dark) {
    :root {
        --text-primary: #f9fafb;
        --text-secondary: #d1d5db;
        --text-light: #9ca3af;
        --bg-primary: #111827;
        --bg-secondary: #1f2937;
        --border-color: #374151;
    }
    
    .problem-card,
    .solution-card,
    .testimonial-card,
    .calculator-inputs,
    .calculator-results,
    .metric-card,
    .timeline-step {
        background: var(--bg-secondary);
        border-color: var(--border-color);
    }
    
    .success-section,
    .potential-section,
    .solutions-section,
    .metrics-section,
    .calculator-section {
        background: #0f172a;
    }
}

/* Print styles */
@media print {
    .hero,
    .cta-section {
        background: white !important;
        color: black !important;
    }
    
    .floating-elements,
    .scroll-indicator {
        display: none;
    }
    
    .hover-lift:hover,
    .hover-scale:hover {
        transform: none;
    }
}'''

# Save CSS file
with open('styles.css', 'w', encoding='utf-8') as f:
    f.write(css_content)
print("CSS file created successfully!")