/**
 * Footer Component
 * This script handles the footer functionality across all pages
 */

document.addEventListener('DOMContentLoaded', function() {
    // Current year for copyright
    const currentYear = new Date().getFullYear();
    const yearElements = document.querySelectorAll('.current-year');
    
    // Update all elements with current year
    yearElements.forEach(element => {
        element.textContent = currentYear;
    });

    // Add smooth scrolling for anchor links in the footer
    document.querySelectorAll('footer a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#' || targetId.startsWith('#!')) return;
            
            e.preventDefault();
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80, // Adjust for fixed header
                    behavior: 'smooth'
                });
                
                // Update URL without page jump
                if (history.pushState) {
                    history.pushState(null, null, targetId);
                } else {
                    location.hash = targetId;
                }
            }
        });
    });

    // Add noopener and noreferrer to external links for security
    document.querySelectorAll('footer a[target="_blank"]').forEach(link => {
        if (!link.rel.includes('noopener')) {
            link.rel = (link.rel ? link.rel + ' ' : '') + 'noopener';
        }
        if (!link.rel.includes('noreferrer')) {
            link.rel = (link.rel ? link.rel + ' ' : '') + 'noreferrer';
        }
    });
});
