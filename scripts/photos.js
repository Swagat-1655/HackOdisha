document.addEventListener('DOMContentLoaded', function() {
    // DOM Elements
    const photosGrid = document.getElementById('photos-grid');
    const categoryFilter = document.getElementById('category');
    const sortFilter = document.getElementById('sort');
    const loadMoreBtn = document.getElementById('load-more-btn');
    let currentPage = 1;
    const photosPerPage = 9;
    let allPhotos = [];
    let filteredPhotos = [];

    // Sample photo data (in a real app, this would come from an API)
    const samplePhotos = [
        {
            id: 1,
            title: 'Garbage Dump in Park',
            image: 'https://source.unsplash.com/random/600x400/?garbage,trash',
            category: 'garbage',
            likes: 24,
            date: '2025-07-20',
            location: 'Central Park',
            status: 'reported'
        },
        {
            id: 2,
            title: 'Pothole on Main Street',
            image: 'https://source.unsplash.com/random/600x400/?pothole,road',
            category: 'road',
            likes: 15,
            date: '2025-07-19',
            location: 'Main Street',
            status: 'in-progress'
        },
        {
            id: 3,
            title: 'After Cleanup - Park Area',
            image: 'https://source.unsplash.com/random/600x400/?clean,park',
            category: 'after',
            likes: 42,
            date: '2025-07-18',
            location: 'Riverside Park',
            status: 'resolved'
        },
        {
            id: 4,
            title: 'Illegal Dumping Site',
            image: 'https://source.unsplash.com/random/600x400/?dump,waste',
            category: 'garbage',
            likes: 8,
            date: '2025-07-17',
            location: 'Industrial Area',
            status: 'reported'
        },
        {
            id: 5,
            title: 'Broken Sidewalk',
            image: 'https://source.unsplash.com/random/600x400/?sidewalk,damage',
            category: 'road',
            likes: 12,
            date: '2025-07-16',
            location: 'Downtown',
            status: 'in-progress'
        },
        {
            id: 6,
            title: 'Before Cleanup - Alley',
            image: 'https://source.unsplash.com/random/600x400/?dirty,alley',
            category: 'before',
            likes: 5,
            date: '2025-07-15',
            location: 'Market Street',
            status: 'resolved'
        },
        {
            id: 7,
            title: 'After Cleanup - Playground',
            image: 'https://source.unsplash.com/random/600x400/?playground,clean',
            category: 'after',
            likes: 31,
            date: '2025-07-14',
            location: 'Community Park',
            status: 'resolved'
        },
        {
            id: 8,
            title: 'Flooded Street',
            image: 'https://source.unsplash.com/random/600x400/?flood,street',
            category: 'road',
            likes: 18,
            date: '2025-07-13',
            location: 'Riverside Drive',
            status: 'reported'
        },
        {
            id: 9,
            title: 'Littered Beach',
            image: 'https://source.unsplash.com/random/600x400/?beach,trash',
            category: 'garbage',
            likes: 27,
            date: '2025-07-12',
            location: 'Sandy Shores',
            status: 'in-progress'
        }
    ];

    // Initialize the page
    function init() {
        allPhotos = [...samplePhotos];
        filteredPhotos = [...allPhotos];
        renderPhotos();
        setupEventListeners();
    }

    // Set up event listeners
    function setupEventListeners() {
        categoryFilter.addEventListener('change', filterAndSortPhotos);
        sortFilter.addEventListener('change', filterAndSortPhotos);
        
        if (loadMoreBtn) {
            loadMoreBtn.addEventListener('click', loadMorePhotos);
        }
    }

    // Filter and sort photos based on selected options
    function filterAndSortPhotos() {
        const category = categoryFilter.value;
        const sortBy = sortFilter.value;
        
        // Filter by category
        filteredPhotos = category === 'all' 
            ? [...allPhotos] 
            : allPhotos.filter(photo => photo.category === category);
        
        // Sort photos
        filteredPhotos.sort((a, b) => {
            switch (sortBy) {
                case 'newest':
                    return new Date(b.date) - new Date(a.date);
                case 'oldest':
                    return new Date(a.date) - new Date(b.date);
                case 'most-liked':
                    return b.likes - a.likes;
                default:
                    return 0;
            }
        });
        
        currentPage = 1;
        renderPhotos();
    }

    // Render photos to the grid
    function renderPhotos() {
        const startIndex = 0;
        const endIndex = currentPage * photosPerPage;
        const photosToShow = filteredPhotos.slice(0, endIndex);
        
        if (photosToShow.length === 0) {
            photosGrid.innerHTML = `
                <div class="no-photos">
                    <i class="fas fa-images" style="font-size: 2.5rem; margin-bottom: 15px; opacity: 0.7;"></i>
                    <h3>No photos found</h3>
                    <p>Try adjusting your filters or check back later for new uploads.</p>
                </div>
            `;
            if (loadMoreBtn) loadMoreBtn.style.display = 'none';
            return;
        }
        
        const photosHTML = photosToShow.map(photo => `
            <div class="photo-card" data-id="${photo.id}">
                <img src="${photo.image}" alt="${photo.title}" class="photo-img">
                <div class="photo-info">
                    <h3 class="photo-title">${photo.title}</h3>
                    <div class="photo-meta">
                        <span class="photo-likes">
                            <i class="fas fa-heart"></i> ${photo.likes}
                        </span>
                        <span class="photo-date">${formatDate(photo.date)}</span>
                    </div>
                </div>
            </div>
        `).join('');
        
        photosGrid.innerHTML = photosHTML;
        
        // Show/hide load more button
        if (loadMoreBtn) {
            loadMoreBtn.style.display = endIndex >= filteredPhotos.length ? 'none' : 'inline-flex';
        }
        
        // Add click event to photo cards
        document.querySelectorAll('.photo-card').forEach(card => {
            card.addEventListener('click', () => openPhotoModal(parseInt(card.dataset.id)));
        });
    }

    // Load more photos
    function loadMorePhotos() {
        currentPage++;
        renderPhotos();
        
        // Scroll to newly loaded photos
        setTimeout(() => {
            const cards = document.querySelectorAll('.photo-card');
            if (cards.length > 0) {
                cards[cards.length - 1].scrollIntoView({ behavior: 'smooth', block: 'nearest' });
            }
        }, 100);
    }

    // Open photo modal
    function openPhotoModal(photoId) {
        const photo = allPhotos.find(p => p.id === photoId);
        if (!photo) return;
        
        const modalHTML = `
            <div class="photo-modal show" id="photo-modal">
                <div class="modal-content">
                    <span class="modal-close">&times;</span>
                    <img src="${photo.image}" alt="${photo.title}" class="modal-img">
                    <div class="modal-info">
                        <h3 class="modal-title">${photo.title}</h3>
                        <div class="modal-meta">
                            <span><i class="fas fa-map-marker-alt"></i> ${photo.location}</span>
                            <span><i class="fas fa-calendar-alt"></i> ${formatDate(photo.date)}</span>
                            <span><i class="fas fa-heart"></i> ${photo.likes}</span>
                        </div>
                        <p>Status: <span class="status-${photo.status}">${formatStatus(photo.status)}</span></p>
                    </div>
                </div>
            </div>
        `;
        
        // Add modal to the page
        document.body.insertAdjacentHTML('beforeend', modalHTML);
        
        // Add event listeners to the modal
        const modal = document.getElementById('photo-modal');
        const closeBtn = modal.querySelector('.modal-close');
        
        closeBtn.addEventListener('click', closePhotoModal);
        modal.addEventListener('click', (e) => {
            if (e.target === modal) closePhotoModal();
        });
        
        // Close on Escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') closePhotoModal();
        });
    }
    
    // Close photo modal
    function closePhotoModal() {
        const modal = document.getElementById('photo-modal');
        if (modal) {
            modal.style.opacity = '0';
            setTimeout(() => {
                modal.remove();
            }, 300);
        }
    }
    
    // Format date
    function formatDate(dateString) {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(dateString).toLocaleDateString(undefined, options);
    }
    
    // Format status
    function formatStatus(status) {
        const statusMap = {
            'reported': 'Reported',
            'in-progress': 'In Progress',
            'resolved': 'Resolved'
        };
        return statusMap[status] || status;
    }

    // Initialize the page
    init();
});
