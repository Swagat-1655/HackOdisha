// Mobile menu toggle and navigation
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const navLinks = document.querySelector('.nav-links');

// Toggle mobile menu
function toggleMobileMenu() {
    const isOpen = navLinks.style.display === 'flex';
    navLinks.style.display = isOpen ? 'none' : 'flex';
    
    // Toggle menu icon between bars and times
    const icon = mobileMenuBtn.querySelector('i');
    if (icon) {
        icon.className = isOpen ? 'fas fa-bars' : 'fas fa-times';
    }
    
    // Toggle body scroll
    document.body.style.overflow = isOpen ? '' : 'hidden';
}

if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        toggleMobileMenu();
    });

    // Close menu when clicking on a link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth <= 768) {
                toggleMobileMenu();
            }
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.nav-links') && !e.target.closest('.mobile-menu-btn')) {
            if (window.innerWidth <= 768 && navLinks.style.display === 'flex') {
                toggleMobileMenu();
            }
        }
    });
}

// Smooth scrolling for anchor links with offset for fixed header
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const targetId = this.getAttribute('href');
        if (targetId === '#' || targetId.startsWith('#!')) return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            e.preventDefault();
            
            // Calculate the header offset
            const headerHeight = document.querySelector('nav').offsetHeight;
            const elementPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
            const offsetPosition = elementPosition - headerHeight - 20; // 20px extra spacing
            
            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
            
            // Update URL without jumping (for single page applications)
            if (history.pushState) {
                history.pushState(null, null, targetId);
            } else {
                location.hash = targetId;
            }
            
            // Close mobile menu if open
            if (window.innerWidth <= 768 && navLinks.style.display === 'flex') {
                toggleMobileMenu();
            }
        }
    });
});

// Add shadow and background transition to navbar on scroll
const navbar = document.querySelector('.navbar');
if (navbar) {
    let lastScroll = 0;
    
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        
        // Add/remove shadow based on scroll position
        if (currentScroll > 10) {
            navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.2)';
            navbar.style.background = 'rgba(30, 30, 30, 0.95)';
            navbar.style.backdropFilter = 'blur(10px)';
            navbar.style.webkitBackdropFilter = 'blur(10px)';
            
            // Hide/show navbar on scroll direction
            if (currentScroll > lastScroll && currentScroll > 100) {
                // Scrolling down
                navbar.style.transform = 'translateY(-100%)';
            } else {
                // Scrolling up
                navbar.style.transform = 'translateY(0)';
            }
        } else {
            navbar.style.boxShadow = 'none';
            navbar.style.background = 'var(--surface)';
            navbar.style.backdropFilter = 'none';
            navbar.style.webkitBackdropFilter = 'none';
            navbar.style.transform = 'translateY(0)';
        }
        
        lastScroll = currentScroll;
    });
    
    // Add transition for smooth effect
    navbar.style.transition = 'all 0.3s ease-in-out';
}

// Animation on scroll with Intersection Observer for better performance
const animateOnScroll = () => {
    const animateElements = document.querySelectorAll('.feature-card, .animate-on-scroll');
    
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    animateElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        observer.observe(element);
    });
    
    // Add animation class when element is in view
    document.addEventListener('DOMContentLoaded', () => {
        const style = document.createElement('style');
        style.textContent = `
            .feature-card.animate, 
            .animate-on-scroll.animate {
                opacity: 1 !important;
                transform: translateY(0) !important;
            }
        `;
        document.head.appendChild(style);
    });
};

// Initialize animations
window.addEventListener('load', () => {
    // Initial check
    animateOnScroll();
    
    // Check on scroll
    window.addEventListener('scroll', animateOnScroll);
});

// Form submission handling (for future implementation)
const reportForm = document.getElementById('report-form');
if (reportForm) {
    reportForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(reportForm);
        const data = Object.fromEntries(formData);
        
        try {
            // Here you would typically send the data to your backend
            console.log('Form submitted:', data);
            
            // Show success message
            alert('Thank you for your report! We will review it shortly.');
            reportForm.reset();
            
        } catch (error) {
            console.error('Error submitting form:', error);
            alert('There was an error submitting your report. Please try again.');
        }
    });
}

// Initialize tooltips with improved styling and positioning
const initTooltips = () => {
    // Add styles for tooltips
    const style = document.createElement('style');
    style.textContent = `
        [data-tooltip] {
            position: relative;
            cursor: help;
        }
        
        [data-tooltip]::before,
        [data-tooltip]::after {
            position: absolute;
            visibility: hidden;
            opacity: 0;
            pointer-events: none;
            transition: all 0.3s ease;
            z-index: 1000;
        }
        
        [data-tooltip]::before {
            content: attr(data-tooltip);
            background: var(--surface);
            color: var(--text-primary);
            padding: 8px 12px;
            border-radius: 6px;
            font-size: 0.85rem;
            white-space: nowrap;
            text-align: center;
            border: 1px solid var(--border);
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
            bottom: 100%;
            left: 50%;
            transform: translateX(-50%) translateY(-10px);
        }
        
        [data-tooltip]::after {
            content: '';
            border: 6px solid transparent;
            border-top-color: var(--surface);
            margin-bottom: -12px;
            bottom: 100%;
            left: 50%;
            transform: translateX(-50%) translateY(-10px);
        }
        
        [data-tooltip]:hover::before,
        [data-tooltip]:hover::after {
            visibility: visible;
            opacity: 1;
            transform: translateX(-50%) translateY(0);
        }
    `;
    document.head.appendChild(style);
    
    // Initialize tooltips for all elements with data-tooltip attribute
    document.querySelectorAll('[data-tooltip]').forEach(element => {
        // Add aria-label for accessibility
        if (!element.hasAttribute('aria-label')) {
            element.setAttribute('aria-label', element.getAttribute('data-tooltip'));
        }
    });
};

// Initialize components when DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    // Initialize tooltips
    initTooltips();
    
    // Add smooth scroll behavior for anchor links
    if ('scrollBehavior' in document.documentElement.style === false) {
        // Polyfill for smooth scroll behavior in unsupported browsers
        import('smoothscroll-polyfill').then(module => {
            module.polyfill();
        }).catch(err => {
            console.warn('Failed to load smoothscroll polyfill:', err);
        });
    }
    
    // Add loading class to body and remove it when everything is loaded
    document.body.classList.add('is-loading');
    
    window.addEventListener('load', () => {
        // Remove loading class with a small delay for better UX
        setTimeout(() => {
            document.body.classList.remove('is-loading');
            document.body.classList.add('is-loaded');
            
            // Initialize animations after page load
            animateOnScroll();
        }, 300);
    });
    
    // Handle page transitions
    const handlePageTransition = (e) => {
        e.preventDefault();
        const target = e.currentTarget.getAttribute('href');
        
        // Add fade out class
        document.body.classList.add('page-transition-out');
        
        // Navigate after animation completes
        setTimeout(() => {
            window.location.href = target;
        }, 300);
    };
    
    // Add transition to internal links
    document.querySelectorAll('a[href^="/"], a[href^="./"]').forEach(link => {
        // Skip if it's a hash link or has a specific class to skip transition
        if (!link.getAttribute('href').startsWith('#') && !link.classList.contains('no-transition')) {
            link.addEventListener('click', handlePageTransition);
        }
    });
});
