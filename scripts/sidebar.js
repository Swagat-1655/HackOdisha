document.addEventListener('DOMContentLoaded', function() {
    const body = document.body;
    const sidebar = document.getElementById('sidebar');
    const openBtn = document.querySelector('.open-sidebar');
    const closeBtn = document.querySelector('.close-sidebar');
    const overlay = document.querySelector('.sidebar-overlay');

    // Toggle sidebar
    function toggleSidebar() {
        body.classList.toggle('sidebar-open');
        document.documentElement.style.overflow = body.classList.contains('sidebar-open') ? 'hidden' : '';
    }

    // Open sidebar
    if (openBtn) {
        openBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            toggleSidebar();
        });
    }

    // Close sidebar
    function closeSidebar() {
        body.classList.remove('sidebar-open');
        document.documentElement.style.overflow = '';
    }

    if (closeBtn) {
        closeBtn.addEventListener('click', closeSidebar);
    }
    
    if (overlay) {
        overlay.addEventListener('click', closeSidebar);
    }

    // Close when clicking outside on mobile
    document.addEventListener('click', function(e) {
        if (sidebar && body.classList.contains('sidebar-open') && 
            !sidebar.contains(e.target) && 
            e.target !== openBtn) {
            closeSidebar();
        }
    });

    // Handle all navigation links
    document.querySelectorAll('.sidebar-nav a').forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // For anchor links on the same page
            if (href.startsWith('#')) {
                e.preventDefault();
                const targetId = href.substring(1);
                const targetElement = document.getElementById(targetId);
                
                if (targetElement) {
                    // Close sidebar on mobile
                    if (window.innerWidth <= 768) {
                        closeSidebar();
                    }
                    
                    // Smooth scroll to the target
                    window.scrollTo({
                        top: targetElement.offsetTop - 80, // Account for header
                        behavior: 'smooth'
                    });
                }
            }
            // For external links, let them work normally
        });
    });

    // Close sidebar when pressing Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && body.classList.contains('sidebar-open')) {
            closeSidebar();
        }
    });

    // Handle window resize
    function handleResize() {
        if (window.innerWidth > 768) {
            // On larger screens, ensure sidebar is closed
            closeSidebar();
        }
    }

    // Add resize listener
    window.addEventListener('resize', handleResize);
    
    // Initial check
    handleResize();
});
