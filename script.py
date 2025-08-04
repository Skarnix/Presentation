# Create updated data structure for the modified presentation
import json

# Updated systems data with detailed explanations
systems_detailed = [
    {
        "name": "HRMS",
        "category": "HR & Employee Management",
        "what": "Complete human resource management system",
        "why": "Streamlines all HR processes from hiring to exit",
        "growth": "Reduces HR costs by 40% and improves employee satisfaction"
    },
    {
        "name": "Attendance System", 
        "category": "HR & Employee Management",
        "what": "Automated employee time tracking and attendance",
        "why": "Eliminates manual attendance errors and buddy punching",
        "growth": "Saves 15 hours per week in attendance management"
    },
    {
        "name": "Employee Directory",
        "category": "HR & Employee Management", 
        "what": "Centralized employee information database",
        "why": "Quick access to employee details and organizational structure",
        "growth": "Improves internal communication by 60%"
    },
    {
        "name": "Employee Central MIS Scoring System",
        "category": "HR & Employee Management",
        "what": "Performance tracking and analytics dashboard",
        "why": "Data-driven employee performance evaluation",
        "growth": "Increases productivity by 25% through better performance insights"
    },
    {
        "name": "Inventory Management System",
        "category": "Operations & Inventory",
        "what": "Real-time stock tracking and inventory control",
        "why": "Prevents stockouts and reduces carrying costs",
        "growth": "Reduces inventory costs by 30% and improves cash flow"
    },
    {
        "name": "Supplier Management System",
        "category": "Operations & Inventory", 
        "what": "Vendor relationship and procurement management",
        "why": "Streamlines supplier communication and procurement",
        "growth": "Reduces procurement costs by 20% and improves supplier relations"
    },
    {
        "name": "Production Management System",
        "category": "Operations & Inventory",
        "what": "Manufacturing process monitoring and control",
        "why": "Optimizes production efficiency and quality",
        "growth": "Increases production efficiency by 35% and reduces waste"
    },
    {
        "name": "Sales CRM",
        "category": "Sales & Customer",
        "what": "Customer relationship and sales pipeline management", 
        "why": "Tracks leads, customers, and sales performance",
        "growth": "Increases sales conversion by 45% and customer retention by 30%"
    },
    {
        "name": "Custom Flow Management System",
        "category": "Workflow & Automation",
        "what": "Automated business process workflows",
        "why": "Eliminates manual approvals and reduces processing time",
        "growth": "Reduces process time by 70% and eliminates bottlenecks"
    },
    {
        "name": "System Tracker",
        "category": "Workflow & Automation",
        "what": "Real-time system monitoring and performance tracking",
        "why": "Ensures all systems are running optimally",
        "growth": "Reduces system downtime by 90% and improves reliability"
    },
    {
        "name": "Basic Checklist",
        "category": "Workflow & Automation", 
        "what": "Digital task and process checklist management",
        "why": "Ensures consistent process execution and compliance",
        "growth": "Improves process compliance by 95% and reduces errors"
    },
    {
        "name": "Auto Reminder System",
        "category": "Workflow & Automation",
        "what": "Automated notifications via WhatsApp and Email",
        "why": "Keeps teams informed and ensures timely actions",
        "growth": "Reduces missed deadlines by 85% and improves communication"
    }
]

# Implementation timeline
implementation_plan = [
    {
        "week": 1,
        "category": "HR & Employee Management",
        "systems": ["HRMS", "Attendance System", "Employee Directory", "Employee Central MIS Scoring System"],
        "focus": "Foundation - People & Performance"
    },
    {
        "week": 2, 
        "category": "Operations & Inventory",
        "systems": ["Inventory Management System", "Supplier Management System", "Production Management System"],
        "focus": "Operations - Efficiency & Control"
    },
    {
        "week": 3,
        "category": "Sales & Customer", 
        "systems": ["Sales CRM"],
        "focus": "Revenue - Growth & Customer Success"
    },
    {
        "week": 4,
        "category": "Workflow & Automation",
        "systems": ["Custom Flow Management System", "System Tracker", "Basic Checklist", "Auto Reminder System"],
        "focus": "Automation - Intelligence & Monitoring"
    },
    {
        "week": "5-8",
        "category": "Support & Training",
        "systems": ["User Training", "System Integration", "Performance Optimization", "Ongoing Support"],
        "focus": "Success - Training & Continuous Improvement"
    }
]

# Growth projection data
growth_data = {
    "investment": 59999,
    "currency": "INR",
    "months": [
        {"month": 1, "growth_percentage": 0, "description": "Implementation & Setup Phase"},
        {"month": 2, "growth_percentage": 15, "description": "Initial Process Improvements"},
        {"month": 3, "growth_percentage": 35, "description": "Workflow Optimization Kicks In"}, 
        {"month": 4, "growth_percentage": 55, "description": "Data-Driven Decision Making"},
        {"month": 5, "growth_percentage": 75, "description": "Full System Integration Benefits"},
        {"month": 6, "growth_percentage": 100, "description": "Complete Digital Transformation"}
    ]
}

# Manufacturing company comparison
manufacturing_comparison = [
    {
        "aspect": "Production Planning",
        "before": "Manual scheduling on whiteboards and Excel sheets",
        "after": "Automated production scheduling with real-time adjustments",
        "impact": "40% reduction in production delays"
    },
    {
        "aspect": "Inventory Control", 
        "before": "Physical stock counting and paper-based tracking",
        "after": "Real-time inventory monitoring with automated reordering",
        "impact": "30% reduction in inventory costs"
    },
    {
        "aspect": "Quality Control",
        "before": "Manual quality checks with paper documentation",
        "after": "Digital quality control with automated reporting",
        "impact": "50% reduction in quality issues"
    },
    {
        "aspect": "Employee Management",
        "before": "Paper attendance and manual payroll processing",
        "after": "Biometric attendance with automated payroll integration",
        "impact": "60% reduction in HR processing time"
    }
]

# Service company comparison  
service_comparison = [
    {
        "aspect": "Client Management",
        "before": "Excel sheets and email threads for client tracking",
        "after": "Comprehensive CRM with automated follow-ups",
        "impact": "45% increase in client retention"
    },
    {
        "aspect": "Project Management",
        "before": "Manual project tracking and status updates",
        "after": "Automated project workflows with real-time dashboards", 
        "impact": "35% faster project delivery"
    },
    {
        "aspect": "Resource Allocation",
        "before": "Manual resource planning and scheduling",
        "after": "AI-powered resource optimization and scheduling",
        "impact": "25% improvement in resource utilization"
    },
    {
        "aspect": "Performance Tracking",
        "before": "Monthly manual reports and reviews",
        "after": "Real-time performance dashboards and analytics",
        "impact": "70% faster decision making"
    }
]

print("Updated presentation data structure created successfully!")
print(f"Systems count: {len(systems_detailed)}")
print(f"Implementation weeks: {len(implementation_plan)}")
print(f"Growth projection months: {len(growth_data['months'])}")