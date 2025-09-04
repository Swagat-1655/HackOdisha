// Application Data
const appData = {
    "categories": [
      {"name": "Books & Notes", "icon": "📚", "count": 245},
      {"name": "Electronics", "icon": "💻", "count": 132},
      {"name": "Lab Equipment", "icon": "🔬", "count": 89},
      {"name": "Bicycles", "icon": "🚲", "count": 67},
      {"name": "Furniture", "icon": "🪑", "count": 156},
      {"name": "Hostel Items", "icon": "🏠", "count": 203},
      {"name": "Club Kits", "icon": "🎽", "count": 78},
      {"name": "Calculators", "icon": "🔢", "count": 45}
    ],
    "freelanceCategories": [
      {"name": "Video Editing", "icon": "🎬", "count": 23},
      {"name": "Content Writing", "icon": "✍️", "count": 45},
      {"name": "Graphic Design", "icon": "🎨", "count": 34},
      {"name": "Web Development", "icon": "💻", "count": 19},
      {"name": "Tutoring", "icon": "👨‍🏫", "count": 67},
      {"name": "Photography", "icon": "📸", "count": 28},
      {"name": "Data Entry", "icon": "📊", "count": 31},
      {"name": "Translation", "icon": "🌐", "count": 16}
    ],
    "freelanceServices": [
      {
        "id": 201,
        "title": "Professional Video Editing for Events",
        "description": "I'll edit your college event videos with transitions, effects, and music. High-quality output with professional touch.",
        "freelancer": "Rohit Kumar",
        "rating": 4.9,
        "reviews": 23,
        "deliveryTime": "2-3 days",
        "category": "Video Editing",
        "skills": ["Premiere Pro", "After Effects", "DaVinci Resolve"],
        "experience": "3+ years"
      },
      {
        "id": 202,
        "title": "SEO Content Writing & Blog Posts",
        "description": "High-quality articles and blog posts for your projects or websites. SEO optimized and engaging content that converts.",
        "freelancer": "Priya Sharma",
        "rating": 4.8,
        "reviews": 41,
        "deliveryTime": "1-2 days",
        "category": "Content Writing",
        "skills": ["SEO", "Research", "Creative Writing"],
        "experience": "2+ years"
      },
      {
        "id": 203,
        "title": "Logo & Brand Identity Design",
        "description": "Create stunning logos and complete brand identity for your startup or project. Modern and professional designs that stand out.",
        "freelancer": "Arjun Design Studio",
        "rating": 4.7,
        "reviews": 18,
        "deliveryTime": "3-5 days",
        "category": "Graphic Design",
        "skills": ["Illustrator", "Photoshop", "Brand Strategy"],
        "experience": "4+ years"
      }
    ],
    "sampleListings": [
      {
        "id": 1,
        "title": "Engineering Physics Textbook - R.K. Gaur",
        "price": 450,
        "originalPrice": 800,
        "image": "📚",
        "seller": "Priya Sharma",
        "year": "3rd Year",
        "branch": "CSE",
        "condition": "Good",
        "location": "Hostel A, Room 205",
        "posted": "2 days ago",
        "category": "Books & Notes"
      },
      {
        "id": 2,
        "title": "Gaming Laptop - ASUS ROG Strix",
        "price": 35000,
        "originalPrice": 65000,
        "image": "💻",
        "seller": "Arjun Patel",
        "year": "4th Year",
        "branch": "ECE",
        "condition": "Excellent",
        "location": "Off-campus",
        "posted": "1 day ago",
        "category": "Electronics"
      },
      {
        "id": 3,
        "title": "Lab Coat - White Cotton",
        "price": 200,
        "originalPrice": 400,
        "image": "🔬",
        "seller": "Sneha Singh",
        "year": "2nd Year",
        "branch": "BIOTECH",
        "condition": "Like New",
        "location": "Hostel B, Room 312",
        "posted": "3 hours ago",
        "category": "Lab Equipment"
      },
      {
        "id": 4,
        "title": "Mountain Bike - Hero Sprint",
        "price": 8500,
        "originalPrice": 15000,
        "image": "🚲",
        "seller": "Raj Kumar",
        "year": "Final Year",
        "branch": "MECH",
        "condition": "Good",
        "location": "Main Gate Parking",
        "posted": "5 days ago",
        "category": "Bicycles"
      },
      {
        "id": 5,
        "title": "Study Table with Chair",
        "price": 2500,
        "originalPrice": 4000,
        "image": "🪑",
        "seller": "Amit Verma",
        "year": "3rd Year",
        "branch": "EEE",
        "condition": "Good",
        "location": "Hostel C, Room 108",
        "posted": "1 week ago",
        "category": "Furniture"
      },
      {
        "id": 6,
        "title": "Scientific Calculator - Casio fx-991ES",
        "price": 600,
        "originalPrice": 1200,
        "image": "🔢",
        "seller": "Ravi Kumar",
        "year": "2nd Year",
        "branch": "CIVIL",
        "condition": "Like New",
        "location": "Academic Block",
        "posted": "4 days ago",
        "category": "Calculators"
      }
    ],
    "aiRecommendations": [
      {
        "title": "Data Structures & Algorithms Book",
        "reason": "Popular among CSE 2nd years",
        "price": 380,
        "match": "95%"
      },
      {
        "title": "Scientific Calculator - Casio fx-991ES",
        "reason": "Essential for your upcoming exams",
        "price": 600,
        "match": "88%"
      },
      {
        "title": "Programming Notes - Java & Python",
        "reason": "From seniors in your branch",
        "price": 150,
        "match": "92%"
      }
    ]
  };
  
  // Chat data
  const chatData = [
    {
      id: 1,
      name: "Priya Sharma",
      lastMessage: "Is the textbook still available?",
      time: "2m ago",
      messages: [
        { text: "Hi! Is the Engineering Physics textbook still available?", sent: false, time: "2:30 PM" },
        { text: "Yes, it's still available! Are you interested?", sent: true, time: "2:32 PM" },
        { text: "Great! Can we meet tomorrow?", sent: false, time: "2:35 PM" }
      ]
    },
    {
      id: 2,
      name: "Arjun Patel",
      lastMessage: "Thanks for your interest!",
      time: "1h ago",
      messages: [
        { text: "Hi, I'm interested in your gaming laptop", sent: false, time: "1:15 PM" },
        { text: "Thanks for your interest! It's in excellent condition.", sent: true, time: "1:18 PM" },
        { text: "Can I see it this evening?", sent: false, time: "1:20 PM" }
      ]
    },
    {
      id: 3,
      name: "Sneha Singh",
      lastMessage: "When can we meet for the lab coat?",
      time: "30m ago",
      messages: [
        { text: "Hi! I saw your lab coat listing. Is it still available?", sent: false, time: "3:45 PM" },
        { text: "Yes! It's in perfect condition.", sent: true, time: "3:50 PM" },
        { text: "When can we meet for the lab coat?", sent: false, time: "3:55 PM" }
      ]
    }
  ];
  
  // Application State
  let currentPage = 'home';
  let currentChat = null;
  let filteredProducts = [...appData.sampleListings];
  let currentTheme = 'light';
  let detectedLocation = null;
  let isSignedIn = false; // Start with not signed in
  let currentUser = null;
  
  // Auto-scroll state
  let autoScrollInterval = null;
  let isAutoScrolling = false;
  let scrollSpeed = 'normal';
  
  // New state for enhanced features
  let wishlist = JSON.parse(localStorage.getItem('wishlist') || '[]');
  let uploadedImages = [];
  let notifications = [];
  let searchSuggestions = [];
  let fabMenuOpen = false;
  
  // DOM Elements
  const pages = document.querySelectorAll('.page');
  const navButtons = document.querySelectorAll('.nav-btn');
  const modal = document.getElementById('productModal');
  const successMessage = document.getElementById('successMessage');
  const themeToggle = document.getElementById('themeToggle');
  const accountAvatar = document.getElementById('accountAvatar');
  const accountDropdown = document.getElementById('accountDropdown');
  const signInModal = document.getElementById('signInModal');
  
  // New DOM elements for enhanced features
  const fabBtn = document.getElementById('fabBtn');
  const fabMenu = document.getElementById('fabMenu');
  const searchModal = document.getElementById('searchModal');
  const imageInput = document.getElementById('imageInput');
  const uploadArea = document.getElementById('uploadArea');
  const imagePreviewContainer = document.getElementById('imagePreviewContainer');
  const notificationContainer = document.getElementById('notificationContainer');
  
  // Initialize Application
  document.addEventListener('DOMContentLoaded', function() {
      console.log('Initializing CampusXchange App...');
      initializeApp();
      setupEventListeners();
      renderCategories();
      renderFeaturedProducts();
      renderRecommendations();
      renderBrowseProducts();
      renderServicesPage();
      setupChat();
      initializeTheme();
      updateAccountUI();
      setupEnhancedFeatures();
      setupImageUpload();
      setupFAB();
      setupNotifications();
      setupAdvancedSearch();
      setupProfilePage();
      setupServicePosting();
      updateLoginState();
      
      console.log('App initialized successfully');
  });
  
  function initializeApp() {
      // Set initial active nav button
      const homeBtn = document.querySelector(`[data-page="${currentPage}"]`);
      if (homeBtn) {
          homeBtn.classList.add('active');
      }
      
      // Populate category selectors
      populateCategorySelectors();
      
      console.log('App initialization complete');
  }
  
  function setupEventListeners() {
      console.log('Setting up event listeners...');
      
      // Navigation
      navButtons.forEach(btn => {
          btn.addEventListener('click', (e) => {
              e.preventDefault();
              const targetPage = e.target.dataset.page;
              console.log('Navigation clicked:', targetPage);
              navigateToPage(targetPage);
          });
      });
  
      // Logo click to home
      const logoElement = document.querySelector('.header__logo');
      if (logoElement) {
          logoElement.addEventListener('click', (e) => {
              e.preventDefault();
              console.log('Logo clicked - navigating to home');
              navigateToPage('home');
          });
          
          logoElement.style.cursor = 'pointer';
          logoElement.setAttribute('role', 'button');
          logoElement.setAttribute('tabindex', '0');
      }
  
      // Theme toggle
      if (themeToggle) {
          themeToggle.addEventListener('click', (e) => {
              e.preventDefault();
              toggleTheme();
          });
      }
  
      // Account dropdown
      if (accountAvatar) {
          accountAvatar.addEventListener('click', (e) => {
              e.preventDefault();
              e.stopPropagation();
              toggleAccountDropdown();
          });
      }
  
      // Close dropdown when clicking outside
      document.addEventListener('click', (e) => {
          if (!accountDropdown.contains(e.target) && !accountAvatar.contains(e.target)) {
              closeAccountDropdown();
          }
      });
  
      // Hero buttons
      document.querySelectorAll('[data-page]').forEach(btn => {
          if (!btn.classList.contains('nav-btn') && !btn.classList.contains('header__logo')) {
              btn.addEventListener('click', (e) => {
                  e.preventDefault();
                  const targetPage = e.target.dataset.page;
                  navigateToPage(targetPage);
              });
          }
      });
  
      // Search functionality
      const searchBtn = document.getElementById('searchBtn');
      const searchInput = document.getElementById('searchInput');
      
      if (searchBtn) {
          searchBtn.addEventListener('click', performSearch);
      }
      if (searchInput) {
          searchInput.addEventListener('keypress', (e) => {
              if (e.key === 'Enter') performSearch();
          });
      }
  
      // Filter functionality
      const categoryFilter = document.getElementById('categoryFilter');
      const conditionFilter = document.getElementById('conditionFilter');
      const priceFilter = document.getElementById('priceFilter');
      
      if (categoryFilter) categoryFilter.addEventListener('change', applyFilters);
      if (conditionFilter) conditionFilter.addEventListener('change', applyFilters);
      if (priceFilter) priceFilter.addEventListener('input', applyFilters);
  
      // Modal controls
      const closeModal = document.getElementById('closeModal');
      const saveItem = document.getElementById('saveItem');
      const contactSeller = document.getElementById('contactSeller');
      
      if (closeModal) closeModal.addEventListener('click', closeModalHandler);
      if (saveItem) saveItem.addEventListener('click', saveItemHandler);
      if (contactSeller) contactSeller.addEventListener('click', contactSellerHandler);
  
      // Sign in modal controls
      const closeSignInModal = document.getElementById('closeSignInModal');
      if (closeSignInModal) {
          closeSignInModal.addEventListener('click', () => {
              signInModal.classList.add('hidden');
          });
      }
  
      // Post form
      const postForm = document.getElementById('postForm');
      if (postForm) {
          postForm.addEventListener('submit', handlePostSubmit);
      }
  
      // Location detection
      const detectLocationBtn = document.getElementById('detectLocationBtn');
      if (detectLocationBtn) {
          detectLocationBtn.addEventListener('click', (e) => {
              e.preventDefault();
              detectLocation();
          });
      }
  
      // Upload area
      const uploadArea = document.querySelector('.upload-area');
      if (uploadArea) {
          uploadArea.addEventListener('click', () => {
              const fileInput = document.querySelector('.upload-area input');
              if (fileInput) fileInput.click();
          });
      }
  
      // Chat functionality
      const sendBtn = document.getElementById('sendBtn');
      const messageInput = document.getElementById('messageInput');
      
      if (sendBtn) sendBtn.addEventListener('click', sendMessage);
      if (messageInput) {
          messageInput.addEventListener('keypress', (e) => {
              if (e.key === 'Enter') sendMessage();
          });
      }
  
      // Close modal on backdrop click
      if (modal) {
          modal.addEventListener('click', (e) => {
              if (e.target === modal) closeModalHandler();
          });
      }
  
      // Close sign in modal on backdrop click
      if (signInModal) {
          signInModal.addEventListener('click', (e) => {
              if (e.target === signInModal) signInModal.classList.add('hidden');
          });
      }
  
      // Keyboard shortcuts
      document.addEventListener('keydown', handleKeyboardShortcuts);
      
      console.log('Event listeners setup complete');
  }
  
  function handleKeyboardShortcuts(e) {
      if (e.key === 'Escape') {
          if (modal && !modal.classList.contains('hidden')) {
              closeModalHandler();
          }
          if (signInModal && !signInModal.classList.contains('hidden')) {
              signInModal.classList.add('hidden');
          }
          closeAccountDropdown();
      }
      if (e.ctrlKey && e.key === 'd') {
          e.preventDefault();
          toggleTheme();
      }
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
          e.preventDefault();
          const searchInput = document.getElementById('searchInput');
          if (searchInput) searchInput.focus();
      }
      if ((e.ctrlKey || e.metaKey) && e.key === 'h') {
          e.preventDefault();
          navigateToPage('home');
      }
  }
  
  // Account Management Functions
  function updateAccountUI() {
      if (isSignedIn && currentUser) {
          // Update avatar with user initials
          const avatarCircle = document.querySelector('.avatar-circle');
          const avatarLarge = document.querySelector('.avatar-large');
          const userName = document.querySelector('.user-name');
          const userEmail = document.querySelector('.user-email');
          
          if (avatarCircle) avatarCircle.textContent = currentUser.initials;
          if (avatarLarge) avatarLarge.textContent = currentUser.initials;
          if (userName) userName.textContent = currentUser.name;
          if (userEmail) userEmail.textContent = currentUser.email;
      }
  }
  
  function toggleAccountDropdown() {
      if (accountDropdown) {
          const isHidden = accountDropdown.classList.contains('hidden');
          if (isHidden) {
              accountDropdown.classList.remove('hidden');
          } else {
              accountDropdown.classList.add('hidden');
          }
      }
  }
  
  function closeAccountDropdown() {
      if (accountDropdown) {
          accountDropdown.classList.add('hidden');
      }
  }
  
  // Global function for account actions
  window.handleAccountAction = function(action) {
      closeAccountDropdown();
      
      switch(action) {
          case 'manage':
              showSuccessMessage('Account management coming soon!');
              break;
          case 'listings':
              showSuccessMessage('My listings feature coming soon!');
              break;
          case 'orders':
              showSuccessMessage('My orders feature coming soon!');
              break;
          case 'add-account':
              showSuccessMessage('Add account feature coming soon!');
              break;
          case 'sign-out':
              handleSignOut();
              break;
          default:
              console.log('Unknown action:', action);
      }
  };
  
  // Global functions for sign in/out
  window.handleSignIn = function() {
      // Simulate login with demo user
      isSignedIn = true;
      currentUser = {
          name: "John Doe",
          email: "john.doe@college.edu",
          initials: "JD"
      };
      signInModal.classList.add('hidden');
      updateAccountUI();
      showSuccessMessage('Successfully signed in!');
      
      // Update UI to show logged in state
      updateLoginState();
  };
  
  window.handleUseAnotherAccount = function() {
      showSuccessMessage('Use another account feature coming soon!');
  };
  
  function handleSignOut() {
      isSignedIn = false;
      currentUser = null;
      showSuccessMessage('Successfully signed out!');
      
      // Update UI to show logged out state
      updateLoginState();
      
      // Navigate to home page
      navigateToPage('home');
  }
  
  // Update login state UI
  function updateLoginState() {
      const accountAvatar = document.getElementById('accountAvatar');
      const userSection = document.getElementById('userSection');
      const headerSignInBtn = document.getElementById('headerSignInBtn');
      
      if (isSignedIn && currentUser) {
          // Show account avatar
          if (accountAvatar) {
              accountAvatar.style.display = 'flex';
              const avatarCircle = accountAvatar.querySelector('.avatar-circle');
              if (avatarCircle) avatarCircle.textContent = currentUser.initials;
          }
          
          // Show user section in dropdown
          if (userSection) {
              userSection.style.display = 'block';
          }
          
          // Hide sign in button
          if (headerSignInBtn) {
              headerSignInBtn.style.display = 'none';
          }
      } else {
          // Hide account avatar, show sign in button
          if (accountAvatar) {
              accountAvatar.style.display = 'none';
          }
          
          // Hide user section in dropdown
          if (userSection) {
              userSection.style.display = 'none';
          }
          
          // Show sign in button
          if (headerSignInBtn) {
              headerSignInBtn.style.display = 'flex';
          }
      }
  }
  
  // Theme Management
  function initializeTheme() {
      document.documentElement.setAttribute('data-theme', currentTheme);
      updateThemeIcon();
      console.log('Theme initialized:', currentTheme);
  }
  
  function toggleTheme() {
      currentTheme = currentTheme === 'light' ? 'dark' : 'light';
      document.documentElement.setAttribute('data-theme', currentTheme);
      updateThemeIcon();
      
      console.log('Theme switched to:', currentTheme);
      showSuccessMessage(`Switched to ${currentTheme} mode`);
  }
  
  function updateThemeIcon() {
      const themeIcon = document.querySelector('.theme-icon');
      if (themeIcon) {
          themeIcon.textContent = currentTheme === 'light' ? '🌙' : '☀️';
      }
  }
  
  // Navigation functions
  window.navigateToHome = function() {
      navigateToPage('home');
  };
  
  function navigateToPage(pageName) {
      console.log('Navigating to page:', pageName);
      
      // Check if page requires authentication
      const protectedPages = ['post', 'profile', 'chat'];
      if (protectedPages.includes(pageName) && !isSignedIn) {
          showSignInModal(`Please sign in to access ${pageName === 'post' ? 'posting' : pageName} features`);
          return;
      }
      
      // Update navigation
      navButtons.forEach(btn => btn.classList.remove('active'));
      const activeBtn = document.querySelector(`[data-page="${pageName}"]`);
      if (activeBtn) {
          activeBtn.classList.add('active');
      }
  
      // Update pages
      pages.forEach(page => page.classList.remove('active'));
      const targetPage = document.getElementById(`${pageName}Page`);
      if (targetPage) {
          targetPage.classList.add('active');
          console.log('Page activated:', pageName);
      } else {
          console.error('Page not found:', pageName);
      }
  
      currentPage = pageName;
      window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  
  // Show sign in modal with custom message
  function showSignInModal(message = 'Please sign in to continue') {
      const signInModal = document.getElementById('signInModal');
      if (signInModal) {
          // Update modal message
          const modalBody = signInModal.querySelector('.modal-body');
          if (modalBody) {
              const existingMessage = modalBody.querySelector('.sign-in-message');
              if (existingMessage) {
                  existingMessage.textContent = message;
              } else {
                  const messageEl = document.createElement('div');
                  messageEl.className = 'sign-in-message';
                  messageEl.style.cssText = 'text-align: center; margin-bottom: 20px; color: var(--color-text-secondary); font-size: 14px;';
                  messageEl.textContent = message;
                  modalBody.insertBefore(messageEl, modalBody.firstChild);
              }
          }
          
          signInModal.classList.remove('hidden');
      }
  }
  
  function renderCategories() {
      const container = document.getElementById('categoriesGrid');
      if (container) {
          container.innerHTML = appData.categories.map(category => `
              <div class="category-card" onclick="filterByCategory('${category.name}')">
                  <div class="category-icon">${category.icon}</div>
                  <div class="category-name">${category.name}</div>
                  <div class="category-count">${category.count} items</div>
              </div>
          `).join('');
      }
  }
  
  function renderFeaturedProducts() {
      const container = document.getElementById('featuredProducts');
      if (container) {
          // Show all available listings in recent listings (scrollable)
          const featuredItems = [...appData.sampleListings];
          container.innerHTML = featuredItems.map(product => createProductCard(product)).join('');
          updateWishlistButtons();
          
          // Restart auto-scroll if it was running
          if (isAutoScrolling) {
              setTimeout(() => {
                  startAutoScroll();
              }, 100);
          }
      }
  }
  
  function renderBrowseProducts() {
      const container = document.getElementById('browseProducts');
      if (container) {
          container.innerHTML = filteredProducts.map(product => createProductCard(product)).join('');
          updateWishlistButtons();
      }
  }
  
  function renderRecommendations() {
      const container = document.getElementById('recommendationsGrid');
      if (container) {
          container.innerHTML = appData.aiRecommendations.map(rec => `
              <div class="recommendation-card">
                  <div class="recommendation-match">${rec.match}</div>
                  <div class="recommendation-title">${rec.title}</div>
                  <div class="recommendation-reason">${rec.reason}</div>
                  <div class="recommendation-price">₹${rec.price}</div>
              </div>
          `).join('');
      }
  }
  
  function renderServicesPage() {
      // Render services categories
      const servicesCategoriesContainer = document.getElementById('servicesCategoriesGrid');
      if (servicesCategoriesContainer) {
          servicesCategoriesContainer.innerHTML = appData.freelanceCategories.map(category => `
              <div class="category-card">
                  <div class="category-icon">${category.icon}</div>
                  <div class="category-name">${category.name}</div>
                  <div class="category-count">${category.count} services</div>
              </div>
          `).join('');
      }
  
      // Render featured services
      const servicesContainer = document.getElementById('servicesGrid');
      if (servicesContainer) {
          servicesContainer.innerHTML = appData.freelanceServices.map(service => `
              <div class="service-card">
                  <div class="service-header">
                      <div>
                          <div class="service-title">${service.title}</div>
                          <div class="service-rating">
                              ⭐ ${service.rating} (${service.reviews} reviews)
                          </div>
                      </div>
                  </div>
                  <div class="service-description">${service.description}</div>
                  <div class="service-footer">
                      <div>
                          <div class="service-freelancer">${service.freelancer}</div>
                          <div class="service-delivery">Delivery: ${service.deliveryTime}</div>
                      </div>
                  </div>
              </div>
          `).join('');
      }
  }
  
  function createProductCard(product) {
      return `
          <div class="product-card" onclick="showProductModal(${product.id})">
              <div class="product-image">${product.image}</div>
              <div class="product-content">
                  <div class="product-title">${product.title}</div>
                  <div class="product-price">
                      <span class="price-current">₹${product.price.toLocaleString()}</span>
                      ${product.originalPrice ? `<span class="price-original">₹${product.originalPrice.toLocaleString()}</span>` : ''}
                  </div>
                  <div class="product-seller">
                      <span class="seller-info">${product.seller || 'You'} ${product.year ? '• ' + product.year : ''}</span>
                      <span class="product-condition">${product.condition}</span>
                  </div>
                  <div style="color: var(--color-text-secondary); font-size: var(--font-size-sm); margin-top: var(--space-4);">
                      📍 ${product.location || 'Campus'} • ${product.posted}
                  </div>
              </div>
          </div>
      `;
  }
  
  // Location Detection
  async function detectLocation() {
      const btn = document.getElementById('detectLocationBtn');
      const input = document.getElementById('locationInput');
      const status = document.getElementById('locationStatus');
      
      console.log('Location detection started');
      
      if (!navigator.geolocation) {
          showLocationStatus('Geolocation is not supported by this browser.', 'error');
          return;
      }
      
      btn.disabled = true;
      btn.innerHTML = '<span class="loading"></span> Detecting...';
      showLocationStatus('Detecting your location...', 'loading');
      
      try {
          const position = await getCurrentPosition();
          const { latitude, longitude } = position.coords;
          
          console.log('Location obtained:', { latitude, longitude });
          
          const mockAddress = await simulateReverseGeocode(latitude, longitude);
          
          input.value = mockAddress;
          detectedLocation = { lat: latitude, lng: longitude, address: mockAddress };
          
          showLocationStatus('✅ Location detected successfully!', 'success');
          
          setTimeout(() => {
              const statusEl = document.getElementById('locationStatus');
              if (statusEl) statusEl.style.display = 'none';
          }, 3000);
          
      } catch (error) {
          console.error('Location detection error:', error);
          let message = 'Location detection failed. ';
          switch(error.code) {
              case error.PERMISSION_DENIED:
                  message += 'Please allow location access and try again.';
                  break;
              case error.POSITION_UNAVAILABLE:
                  message += 'Location information is unavailable.';
                  break;
              case error.TIMEOUT:
                  message += 'Location request timed out.';
                  break;
              default:
                  message += 'An unknown error occurred.';
                  break;
          }
          showLocationStatus(message, 'error');
      } finally {
          resetLocationButton();
      }
  }
  
  function getCurrentPosition() {
      return new Promise((resolve, reject) => {
          navigator.geolocation.getCurrentPosition(resolve, reject, {
              enableHighAccuracy: true,
              timeout: 10000,
              maximumAge: 60000
          });
      });
  }
  
  function simulateReverseGeocode(lat, lng) {
      return new Promise((resolve) => {
          setTimeout(() => {
              const mockAddresses = [
                  'Academic Block A, IIT Campus',
                  'Hostel B, Room 205',
                  'Library Complex, Main Campus',
                  'Student Activity Center',
                  'Engineering Building, Block C',
                  'Cafeteria Complex',
                  'Sports Complex',
                  'Administrative Block'
              ];
              const randomAddress = mockAddresses[Math.floor(Math.random() * mockAddresses.length)];
              console.log('Mock address generated:', randomAddress);
              resolve(randomAddress);
          }, 1500);
      });
  }
  
  function showLocationStatus(message, type) {
      const status = document.getElementById('locationStatus');
      if (status) {
          status.textContent = message;
          status.className = `location-status ${type}`;
          status.style.display = 'block';
      }
  }
  
  function resetLocationButton() {
      const btn = document.getElementById('detectLocationBtn');
      if (btn) {
          btn.disabled = false;
          btn.innerHTML = '<span class="location-icon">📍</span> Auto-detect';
      }
  }
  
  // Global functions for onclick handlers
  window.filterByCategory = function(categoryName) {
      navigateToPage('browse');
      const categoryFilter = document.getElementById('categoryFilter');
      if (categoryFilter) {
          categoryFilter.value = categoryName;
          applyFilters();
      }
  };
  
  window.showProductModal = function(productId) {
      const allProducts = [...appData.sampleListings];
      const product = allProducts.find(p => p.id === productId);
      if (!product) return;
  
      document.getElementById('modalTitle').textContent = product.title;
      document.getElementById('modalBody').innerHTML = `
          <div style="display: grid; grid-template-columns: 1fr 2fr; gap: var(--space-24); margin-bottom: var(--space-20);">
              <div style="font-size: 8rem; text-align: center; background: var(--color-bg-1); padding: var(--space-32); border-radius: var(--radius-lg);">
                  ${product.image}
              </div>
              <div>
                  <div style="font-size: var(--font-size-2xl); font-weight: 700; color: var(--color-primary); margin-bottom: var(--space-8);">
                      ₹${product.price.toLocaleString()}
                      ${product.originalPrice ? `<span style="font-size: var(--font-size-lg); color: var(--color-text-secondary); text-decoration: line-through; margin-left: var(--space-8);">₹${product.originalPrice.toLocaleString()}</span>` : ''}
                  </div>
                  <div class="status status--success" style="margin-bottom: var(--space-16);">${product.condition}</div>
                  <div style="margin-bottom: var(--space-12);"><strong>Seller:</strong> ${product.seller}</div>
                  ${product.year ? `<div style="margin-bottom: var(--space-12);"><strong>Year:</strong> ${product.year}</div>` : ''}
                  ${product.branch ? `<div style="margin-bottom: var(--space-12);"><strong>Branch:</strong> ${product.branch}</div>` : ''}
                  <div style="margin-bottom: var(--space-12);"><strong>Location:</strong> ${product.location}</div>
                  <div style="margin-bottom: var(--space-12);"><strong>Posted:</strong> ${product.posted}</div>
                  ${product.category ? `<div style="margin-bottom: var(--space-12);"><strong>Category:</strong> ${product.category}</div>` : ''}
              </div>
          </div>
          <div style="background: var(--color-bg-1); padding: var(--space-16); border-radius: var(--radius-base);">
              <strong>Description:</strong><br>
              This ${product.title.toLowerCase()} is in ${product.condition.toLowerCase()} condition and perfect for students. Well-maintained and comes with all necessary accessories. Serious buyers only.
          </div>
      `;
  
      if (modal) {
          modal.classList.remove('hidden');
      }
  };
  
  window.selectChat = function(chatId) {
      currentChat = chatData.find(chat => chat.id === chatId);
      if (!currentChat) return;
  
      document.querySelectorAll('.chat-item').forEach(item => item.classList.remove('active'));
      event.target.closest('.chat-item').classList.add('active');
  
      const chatPartnerEl = document.getElementById('chatPartner');
      if (chatPartnerEl) {
          chatPartnerEl.textContent = currentChat.name;
      }
  
      const messagesContainer = document.getElementById('chatMessages');
      if (messagesContainer) {
          messagesContainer.innerHTML = currentChat.messages.map(message => `
              <div class="message ${message.sent ? 'sent' : ''}">
                  <div class="message-bubble">
                      ${message.text}
                      <div style="font-size: var(--font-size-xs); opacity: 0.7; margin-top: var(--space-4);">
                          ${message.time}
                      </div>
                  </div>
              </div>
          `).join('');
  
          messagesContainer.scrollTop = messagesContainer.scrollHeight;
      }
  };
  
  function applyFilters() {
      const categoryFilter = document.getElementById('categoryFilter');
      const conditionFilter = document.getElementById('conditionFilter');
      const priceFilter = document.getElementById('priceFilter');
      
      const categoryValue = categoryFilter ? categoryFilter.value : '';
      const conditionValue = conditionFilter ? conditionFilter.value : '';
      const priceValue = priceFilter ? parseFloat(priceFilter.value) || Infinity : Infinity;
  
      filteredProducts = appData.sampleListings.filter(product => {
          const matchesCategory = !categoryValue || product.category === categoryValue;
          const matchesCondition = !conditionValue || product.condition === conditionValue;
          const matchesPrice = product.price <= priceValue;
          
          return matchesCategory && matchesCondition && matchesPrice;
      });
  
      renderBrowseProducts();
  }
  
  function performSearch() {
      const searchInput = document.getElementById('searchInput');
      if (!searchInput) return;
      
      const query = searchInput.value.toLowerCase().trim();
      if (!query) return;
  
      filteredProducts = appData.sampleListings.filter(product => 
          product.title.toLowerCase().includes(query) ||
          product.category.toLowerCase().includes(query) ||
          product.seller.toLowerCase().includes(query)
      );
  
      navigateToPage('browse');
      renderBrowseProducts();
      showSuccessMessage(`Found ${filteredProducts.length} results for "${query}"`);
  }
  
  function closeModalHandler() {
      if (modal) {
          modal.classList.add('hidden');
      }
  }
  
  function saveItemHandler() {
      showSuccessMessage('Item saved to your wishlist!');
      closeModalHandler();
  }
  
  function contactSellerHandler() {
      if (!isSignedIn) {
          showSignInModal('Please sign in to contact sellers');
          return;
      }
      navigateToPage('chat');
      closeModalHandler();
      showSuccessMessage('Redirected to chat. Start your conversation!');
  }
  
  function setupChat() {
      const chatList = document.getElementById('chatList');
      if (chatList) {
          chatList.innerHTML = chatData.map(chat => `
              <div class="chat-item" onclick="selectChat(${chat.id})">
                  <div style="font-weight: 600; margin-bottom: var(--space-4);">${chat.name}</div>
                  <div style="font-size: var(--font-size-sm); color: var(--color-text-secondary);">${chat.lastMessage}</div>
                  <div style="font-size: var(--font-size-xs); color: var(--color-text-secondary); margin-top: var(--space-2);">${chat.time}</div>
              </div>
          `).join('');
      }
  }
  
  function sendMessage() {
      if (!isSignedIn) {
          showSignInModal('Please sign in to send messages');
          return;
      }
      
      const messageInput = document.getElementById('messageInput');
      if (!messageInput || !currentChat) return;
      
      const text = messageInput.value.trim();
      if (!text) return;
  
      currentChat.messages.push({
          text: text,
          sent: true,
          time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      });
  
      selectChat(currentChat.id);
      messageInput.value = '';
  
      setTimeout(() => {
          if (currentChat) {
              currentChat.messages.push({
                  text: "Thanks for your message! I'll get back to you soon.",
                  sent: false,
                  time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
              });
              selectChat(currentChat.id);
          }
      }, 2000);
  }
  
  function handlePostSubmit(e) {
      e.preventDefault();
      
      if (!isSignedIn) {
          showSignInModal('Please sign in to post items');
          return;
      }
      
      console.log('Form submitted');
      
      const submitBtn = e.target.querySelector('button[type="submit"]');
      const originalText = submitBtn.textContent;
      
      submitBtn.innerHTML = '<span class="loading"></span> Posting...';
      submitBtn.disabled = true;
  
      setTimeout(() => {
          // Create new item and add to listings
          const newItem = {
              id: Date.now(),
              title: e.target.querySelector('input[type="text"]').value,
              price: parseInt(e.target.querySelector('input[type="number"]').value),
              originalPrice: parseInt(e.target.querySelector('input[type="number"]:nth-of-type(2)').value) || null,
              image: '📦', // Default image for new items
              seller: currentUser.name,
              year: 'Current',
              branch: 'Various',
              condition: e.target.querySelector('select').value,
              location: document.getElementById('locationInput').value || 'Campus',
              posted: 'Just now',
              category: document.getElementById('postCategory').value
          };
          
          // Add to the beginning of sample listings
          appData.sampleListings.unshift(newItem);
          
          // Update filtered products
          filteredProducts = [...appData.sampleListings];
          
          // Update recent listings
          renderFeaturedProducts();
          
          showSuccessMessage('Item posted successfully! It will be reviewed and published soon.');
          e.target.reset();
          
          const locationStatus = document.getElementById('locationStatus');
          if (locationStatus) {
              locationStatus.style.display = 'none';
          }
          detectedLocation = null;
          
          submitBtn.textContent = originalText;
          submitBtn.disabled = false;
          navigateToPage('home');
      }, 2000);
  }
  
  function populateCategorySelectors() {
      const selectors = [
          document.getElementById('categoryFilter'),
          document.getElementById('postCategory')
      ];
  
      selectors.forEach(selector => {
          if (selector) {
              const options = appData.categories.map(cat => 
                  `<option value="${cat.name}">${cat.name}</option>`
              ).join('');
              selector.innerHTML += options;
          }
      });
  }
  
  function showSuccessMessage(message) {
      const successText = document.getElementById('successText');
      if (successText && successMessage) {
          successText.textContent = message;
          successMessage.classList.remove('hidden');
          
          setTimeout(() => {
              successMessage.classList.add('hidden');
          }, 3000);
      }
      
      // Also show enhanced notification
      showNotification(message, 'success');
  }
  
  // Enhanced Interactive Effects
  document.addEventListener('mouseover', (e) => {
      if (e.target.classList.contains('product-card') || e.target.closest('.product-card')) {
          const card = e.target.classList.contains('product-card') ? e.target : e.target.closest('.product-card');
          card.style.transform = 'translateY(-2px)';
      }
      
      if (e.target.classList.contains('category-card') || e.target.closest('.category-card')) {
          const card = e.target.classList.contains('category-card') ? e.target : e.target.closest('.category-card');
          card.style.transform = 'translateY(-4px)';
      }
      
      if (e.target.classList.contains('service-card') || e.target.closest('.service-card')) {
          const card = e.target.classList.contains('service-card') ? e.target : e.target.closest('.service-card');
          card.style.transform = 'translateY(-2px)';
      }
  });
  
  document.addEventListener('mouseout', (e) => {
      if (e.target.classList.contains('product-card') || e.target.closest('.product-card')) {
          const card = e.target.classList.contains('product-card') ? e.target : e.target.closest('.product-card');
          card.style.transform = 'translateY(0)';
      }
      
      if (e.target.classList.contains('category-card') || e.target.closest('.category-card')) {
          const card = e.target.classList.contains('category-card') ? e.target : e.target.closest('.category-card');
          card.style.transform = 'translateY(0)';
      }
      
      if (e.target.classList.contains('service-card') || e.target.closest('.service-card')) {
          const card = e.target.classList.contains('service-card') ? e.target : e.target.closest('.service-card');
          card.style.transform = 'translateY(0)';
      }
  });
  
  // Initialize on load with smooth entrance animation
  window.addEventListener('load', () => {
      console.log('Window loaded');
      document.body.style.opacity = '0';
      document.body.style.transition = 'opacity 0.5s ease';
      
      setTimeout(() => {
          document.body.style.opacity = '1';
          showSuccessMessage('Welcome to CampusXchange! 🎓');
      }, 100);
  });
  
  // Add intersection observer for animations
  const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
  };
  
  const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              entry.target.style.opacity = '1';
              entry.target.style.transform = 'translateY(0)';
          }
      });
  }, observerOptions);
  
  // Observe elements for scroll animations
  setTimeout(() => {
      const animatedElements = document.querySelectorAll('.product-card, .category-card, .recommendation-card, .service-card');
      animatedElements.forEach(el => {
          el.style.opacity = '0';
          el.style.transform = 'translateY(20px)';
          el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
          observer.observe(el);
      });
  }, 500);

  // ===== ENHANCED FEATURES =====

  // Setup Enhanced Features
  function setupEnhancedFeatures() {
      console.log('Setting up enhanced features...');
      
      // Add scroll reveal animations
      const scrollRevealElements = document.querySelectorAll('.hero, .categories-section, .featured-section, .recommendations-section');
      scrollRevealElements.forEach(el => {
          el.classList.add('scroll-reveal');
      });
      
      // Setup scroll reveal observer
      const scrollRevealObserver = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
              if (entry.isIntersecting) {
                  entry.target.classList.add('revealed');
              }
          });
      }, { threshold: 0.1 });
      
      document.querySelectorAll('.scroll-reveal').forEach(el => {
          scrollRevealObserver.observe(el);
      });
      
      // Add loading states
      addLoadingStates();
      
      console.log('Enhanced features setup complete');
  }

  // Image Upload Functionality
  function setupImageUpload() {
      if (!uploadArea || !imageInput) return;
      
      // Click to upload
      uploadArea.addEventListener('click', () => {
          imageInput.click();
      });
      
      // Drag and drop
      uploadArea.addEventListener('dragover', (e) => {
          e.preventDefault();
          uploadArea.classList.add('dragover');
      });
      
      uploadArea.addEventListener('dragleave', () => {
          uploadArea.classList.remove('dragover');
      });
      
      uploadArea.addEventListener('drop', (e) => {
          e.preventDefault();
          uploadArea.classList.remove('dragover');
          const files = Array.from(e.dataTransfer.files);
          handleImageFiles(files);
      });
      
      // File input change
      imageInput.addEventListener('change', (e) => {
          const files = Array.from(e.target.files);
          handleImageFiles(files);
      });
  }

  function handleImageFiles(files) {
      const imageFiles = files.filter(file => file.type.startsWith('image/'));
      
      if (imageFiles.length + uploadedImages.length > 5) {
          showNotification('Maximum 5 images allowed', 'warning');
          return;
      }
      
      imageFiles.forEach(file => {
          const reader = new FileReader();
          reader.onload = (e) => {
              const imageData = {
                  id: Date.now() + Math.random(),
                  file: file,
                  url: e.target.result
              };
              uploadedImages.push(imageData);
              renderImagePreview(imageData);
          };
          reader.readAsDataURL(file);
      });
  }

  function renderImagePreview(imageData) {
      const preview = document.createElement('div');
      preview.className = 'image-preview';
      preview.innerHTML = `
          <img src="${imageData.url}" alt="Preview">
          <button class="remove-btn" onclick="removeImage(${imageData.id})">&times;</button>
      `;
      imagePreviewContainer.appendChild(preview);
  }

  window.removeImage = function(imageId) {
      uploadedImages = uploadedImages.filter(img => img.id !== imageId);
      const previews = imagePreviewContainer.querySelectorAll('.image-preview');
      previews.forEach(preview => {
          if (preview.querySelector(`button[onclick="removeImage(${imageId})"]`)) {
              preview.remove();
          }
      });
  };

  // FAB (Floating Action Button) Setup
  function setupFAB() {
      if (!fabBtn || !fabMenu) return;
      
      fabBtn.addEventListener('click', toggleFABMenu);
      
      // FAB menu items
      document.querySelectorAll('.fab-item').forEach(item => {
          item.addEventListener('click', (e) => {
              const action = e.currentTarget.dataset.action;
              handleFABAction(action);
              closeFABMenu();
          });
      });
      
      // Close FAB menu when clicking outside
      document.addEventListener('click', (e) => {
          if (!fabBtn.contains(e.target) && !fabMenu.contains(e.target)) {
              closeFABMenu();
          }
      });
  }

  function toggleFABMenu() {
      fabMenuOpen = !fabMenuOpen;
      if (fabMenuOpen) {
          fabMenu.classList.remove('hidden');
          fabBtn.innerHTML = '×';
      } else {
          closeFABMenu();
      }
  }

  function closeFABMenu() {
      fabMenuOpen = false;
      fabMenu.classList.add('hidden');
      fabBtn.innerHTML = '+';
  }

  function handleFABAction(action) {
      switch(action) {
          case 'post':
              navigateToPage('post');
              break;
          case 'search':
              openSearchModal();
              break;
          case 'chat':
              navigateToPage('chat');
              break;
      }
  }

  // Notification System
  function setupNotifications() {
      // Request notification permission
      if ('Notification' in window && Notification.permission === 'default') {
          Notification.requestPermission();
      }
  }

  function showNotification(message, type = 'info', title = 'CampusXchange') {
      // Browser notification
      if ('Notification' in window && Notification.permission === 'granted') {
          new Notification(title, {
              body: message,
              icon: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="%230466c8"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>'
          });
      }
      
      // In-app notification
      const notification = document.createElement('div');
      notification.className = `notification ${type}`;
      notification.innerHTML = `
          <div class="notification-header">
              <div class="notification-title">${title}</div>
              <button class="notification-close" onclick="this.parentElement.parentElement.remove()">&times;</button>
          </div>
          <div class="notification-message">${message}</div>
      `;
      
      notificationContainer.appendChild(notification);
      
      // Auto remove after 5 seconds
      setTimeout(() => {
          if (notification.parentElement) {
              notification.remove();
          }
      }, 5000);
  }

  // Advanced Search
  function setupAdvancedSearch() {
      const searchBtn = document.getElementById('searchBtn');
      const searchInput = document.getElementById('searchInput');
      const advancedSearchInput = document.getElementById('advancedSearchInput');
      
      if (searchBtn) {
          searchBtn.addEventListener('click', openSearchModal);
      }
      
      if (searchInput) {
          searchInput.addEventListener('click', openSearchModal);
      }
      
      // Advanced search modal
      const closeSearchModal = document.getElementById('closeSearchModal');
      const performAdvancedSearch = document.getElementById('performAdvancedSearch');
      const clearSearchBtn = document.getElementById('clearSearchBtn');
      
      if (closeSearchModal) {
          closeSearchModal.addEventListener('click', () => {
              searchModal.classList.add('hidden');
          });
      }
      
      if (performAdvancedSearch) {
          performAdvancedSearch.addEventListener('click', performAdvancedSearchAction);
      }
      
      if (clearSearchBtn) {
          clearSearchBtn.addEventListener('click', clearAdvancedSearch);
      }
      
      // Search suggestions
      if (advancedSearchInput) {
          advancedSearchInput.addEventListener('input', handleSearchSuggestions);
      }
  }

  function openSearchModal() {
      searchModal.classList.remove('hidden');
      const input = document.getElementById('advancedSearchInput');
      if (input) input.focus();
  }

  function handleSearchSuggestions(e) {
      const query = e.target.value.toLowerCase();
      if (query.length < 2) {
          document.getElementById('searchSuggestions').innerHTML = '';
          return;
      }
      
      const suggestions = appData.sampleListings
          .filter(item => item.title.toLowerCase().includes(query))
          .slice(0, 5)
          .map(item => `<div class="suggestion-item" onclick="selectSuggestion('${item.title}')">${item.title}</div>`)
          .join('');
      
      document.getElementById('searchSuggestions').innerHTML = suggestions;
  }

  window.selectSuggestion = function(suggestion) {
      document.getElementById('advancedSearchInput').value = suggestion;
      document.getElementById('searchSuggestions').innerHTML = '';
  };

  function performAdvancedSearchAction() {
      const searchTerm = document.getElementById('advancedSearchInput').value;
      const category = document.getElementById('advancedCategoryFilter').value;
      const minPrice = document.getElementById('minPrice').value;
      const maxPrice = document.getElementById('maxPrice').value;
      const condition = document.getElementById('advancedConditionFilter').value;
      
      filteredProducts = appData.sampleListings.filter(product => {
          const matchesSearch = !searchTerm || product.title.toLowerCase().includes(searchTerm.toLowerCase());
          const matchesCategory = !category || product.category === category;
          const matchesMinPrice = !minPrice || product.price >= parseFloat(minPrice);
          const matchesMaxPrice = !maxPrice || product.price <= parseFloat(maxPrice);
          const matchesCondition = !condition || product.condition === condition;
          
          return matchesSearch && matchesCategory && matchesMinPrice && matchesMaxPrice && matchesCondition;
      });
      
      navigateToPage('browse');
      renderBrowseProducts();
      searchModal.classList.add('hidden');
      showNotification(`Found ${filteredProducts.length} results`, 'success');
  }

  function clearAdvancedSearch() {
      document.getElementById('advancedSearchInput').value = '';
      document.getElementById('advancedCategoryFilter').value = '';
      document.getElementById('minPrice').value = '';
      document.getElementById('maxPrice').value = '';
      document.getElementById('advancedConditionFilter').value = '';
      document.getElementById('searchSuggestions').innerHTML = '';
  }

  // Profile Page Setup
  function setupProfilePage() {
      const tabBtns = document.querySelectorAll('.tab-btn');
      const tabContents = document.querySelectorAll('.tab-content');
      
      tabBtns.forEach(btn => {
          btn.addEventListener('click', () => {
              const tab = btn.dataset.tab;
              
              // Update active tab button
              tabBtns.forEach(b => b.classList.remove('active'));
              btn.classList.add('active');
              
              // Update active tab content
              tabContents.forEach(content => content.classList.remove('active'));
              document.getElementById(`${tab}Tab`).classList.add('active');
              
              // Load tab content
              loadTabContent(tab);
          });
      });
      
      // Load initial content
      loadTabContent('listings');
  }

  function loadTabContent(tab) {
      switch(tab) {
          case 'listings':
              renderUserListings();
              break;
          case 'wishlist':
              renderWishlist();
              break;
          case 'reviews':
              renderReviews();
              break;
      }
  }

  function renderUserListings() {
      const container = document.getElementById('userListings');
      if (!container) return;
      
      const userListings = appData.sampleListings.filter(item => item.seller === currentUser.name);
      container.innerHTML = userListings.map(product => createProductCard(product)).join('');
  }

  function renderWishlist() {
      const container = document.getElementById('wishlistItems');
      if (!container) return;
      
      const wishlistItems = appData.sampleListings.filter(item => wishlist.includes(item.id));
      container.innerHTML = wishlistItems.map(product => createProductCard(product)).join('');
  }

  function renderReviews() {
      const container = document.getElementById('reviewsContainer');
      if (!container) return;
      
      const reviews = [
          {
              reviewer: 'Sarah Johnson',
              rating: 5,
              date: '2 days ago',
              text: 'Great seller! Item was exactly as described and delivered quickly.'
          },
          {
              reviewer: 'Mike Chen',
              rating: 4,
              date: '1 week ago',
              text: 'Good communication and fair pricing. Would buy again.'
          },
          {
              reviewer: 'Emily Davis',
              rating: 5,
              date: '2 weeks ago',
              text: 'Excellent condition and fast response. Highly recommended!'
          }
      ];
      
      container.innerHTML = reviews.map(review => `
          <div class="review-card">
              <div class="review-header">
                  <div class="reviewer-info">
                      <div class="reviewer-avatar">${review.reviewer.split(' ').map(n => n[0]).join('')}</div>
                      <div>
                          <div class="reviewer-name">${review.reviewer}</div>
                          <div class="review-date">${review.date}</div>
                      </div>
                  </div>
                  <div class="review-rating">
                      ${'★'.repeat(review.rating)}${'☆'.repeat(5 - review.rating)}
                  </div>
              </div>
              <div class="review-text">${review.text}</div>
          </div>
      `).join('');
  }

  // Wishlist Functionality
  function toggleWishlist(productId) {
      const index = wishlist.indexOf(productId);
      if (index > -1) {
          wishlist.splice(index, 1);
          showNotification('Removed from wishlist', 'info');
      } else {
          wishlist.push(productId);
          showNotification('Added to wishlist', 'success');
      }
      
      localStorage.setItem('wishlist', JSON.stringify(wishlist));
      updateWishlistButtons();
  }

  function updateWishlistButtons() {
      document.querySelectorAll('.wishlist-btn').forEach(btn => {
          const productId = parseInt(btn.dataset.productId);
          if (wishlist.includes(productId)) {
              btn.classList.add('active');
              btn.innerHTML = '❤️';
          } else {
              btn.classList.remove('active');
              btn.innerHTML = '🤍';
          }
      });
  }

  // Enhanced Product Card with Wishlist
  function createProductCard(product) {
      const isWishlisted = wishlist.includes(product.id);
      return `
          <div class="product-card hover-lift" onclick="showProductModal(${product.id})">
              <button class="wishlist-btn ${isWishlisted ? 'active' : ''}" 
                      data-product-id="${product.id}" 
                      onclick="event.stopPropagation(); toggleWishlist(${product.id})">
                  ${isWishlisted ? '❤️' : '🤍'}
              </button>
              <div class="product-image">${product.image}</div>
              <div class="product-content">
                  <div class="product-title">${product.title}</div>
                  <div class="product-price">
                      <span class="price-current">₹${product.price.toLocaleString()}</span>
                      ${product.originalPrice ? `<span class="price-original">₹${product.originalPrice.toLocaleString()}</span>` : ''}
                  </div>
                  <div class="product-seller">
                      <span class="seller-info">${product.seller || 'You'} ${product.year ? '• ' + product.year : ''}</span>
                      <span class="product-condition">${product.condition}</span>
                  </div>
                  <div style="color: var(--color-text-secondary); font-size: var(--font-size-sm); margin-top: var(--space-4);">
                      📍 ${product.location || 'Campus'} • ${product.posted}
                  </div>
              </div>
          </div>
      `;
  }

  // Loading States
  function addLoadingStates() {
      // Add loading skeleton to product grids
      const productGrids = document.querySelectorAll('.products-grid');
      productGrids.forEach(grid => {
          if (grid.children.length === 0) {
              grid.innerHTML = Array(6).fill(0).map(() => `
                  <div class="product-card">
                      <div class="skeleton-image loading-skeleton"></div>
                      <div class="product-content" style="padding: var(--space-16);">
                          <div class="skeleton-text loading-skeleton"></div>
                          <div class="skeleton-text loading-skeleton" style="width: 40%;"></div>
                          <div class="skeleton-text loading-skeleton" style="width: 60%;"></div>
                      </div>
                  </div>
              `).join('');
          }
      });
  }

  // Enhanced Mobile Touch Interactions
  function setupMobileInteractions() {
      // Touch feedback for mobile
      document.querySelectorAll('.product-card, .category-card, .btn, .nav-btn').forEach(element => {
          element.addEventListener('touchstart', function() {
              this.style.transform = 'scale(0.98)';
          });
          
          element.addEventListener('touchend', function() {
              this.style.transform = '';
          });
      });
      
      // Swipe gestures for mobile navigation
      let startX = 0;
      let startY = 0;
      
      document.addEventListener('touchstart', (e) => {
          startX = e.touches[0].clientX;
          startY = e.touches[0].clientY;
      });
      
      document.addEventListener('touchend', (e) => {
          if (!startX || !startY) return;
          
          const endX = e.changedTouches[0].clientX;
          const endY = e.changedTouches[0].clientY;
          
          const diffX = startX - endX;
          const diffY = startY - endY;
          
          // Horizontal swipe
          if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > 50) {
              if (diffX > 0) {
                  // Swipe left - next page
                  const currentIndex = Array.from(navButtons).findIndex(btn => btn.classList.contains('active'));
                  if (currentIndex < navButtons.length - 1) {
                      navButtons[currentIndex + 1].click();
                  }
              } else {
                  // Swipe right - previous page
                  const currentIndex = Array.from(navButtons).findIndex(btn => btn.classList.contains('active'));
                  if (currentIndex > 0) {
                      navButtons[currentIndex - 1].click();
                  }
              }
          }
          
          startX = 0;
          startY = 0;
      });
  }

  // Initialize mobile interactions
  setupMobileInteractions();

  // Service Posting Functionality
  function setupServicePosting() {
      const servicePostModal = document.getElementById('servicePostModal');
      const closeServicePostModal = document.getElementById('closeServicePostModal');
      const cancelServicePost = document.getElementById('cancelServicePost');
      const submitServicePost = document.getElementById('submitServicePost');
      
      if (closeServicePostModal) {
          closeServicePostModal.addEventListener('click', () => {
              servicePostModal.classList.add('hidden');
          });
      }
      
      if (cancelServicePost) {
          cancelServicePost.addEventListener('click', () => {
              servicePostModal.classList.add('hidden');
          });
      }
      
      if (submitServicePost) {
          submitServicePost.addEventListener('click', handleServicePostSubmit);
      }
      
      // Close modal on backdrop click
      if (servicePostModal) {
          servicePostModal.addEventListener('click', (e) => {
              if (e.target === servicePostModal) {
                  servicePostModal.classList.add('hidden');
              }
          });
      }
  }

  window.openServicePostModal = function() {
      if (!isSignedIn) {
          showSignInModal('Please sign in to offer services');
          return;
      }
      
      const servicePostModal = document.getElementById('servicePostModal');
      if (servicePostModal) {
          servicePostModal.classList.remove('hidden');
      }
  };

  function handleServicePostSubmit() {
      const form = document.getElementById('servicePostForm');
      const formData = new FormData(form);
      
      const serviceData = {
          title: document.getElementById('serviceTitle').value,
          category: document.getElementById('serviceCategory').value,
          description: document.getElementById('serviceDescription').value,
          skills: document.getElementById('serviceSkills').value.split(',').map(s => s.trim()),
          experience: document.getElementById('serviceExperience').value,
          deliveryTime: document.getElementById('serviceDelivery').value,
          portfolio: document.getElementById('servicePortfolio').value,
          freelancer: currentUser.name,
          rating: 0,
          reviews: 0
      };
      
      // Validate required fields
      if (!serviceData.title || !serviceData.category || !serviceData.description || 
          !serviceData.skills.length || !serviceData.experience || !serviceData.deliveryTime) {
          showNotification('Please fill in all required fields', 'error');
          return;
      }
      
      // Add to services data
      const newService = {
          id: Date.now(),
          ...serviceData
      };
      
      appData.freelanceServices.unshift(newService);
      
      // Close modal and reset form
      document.getElementById('servicePostModal').classList.add('hidden');
      form.reset();
      
      // Update services display
      renderServicesPage();
      
      // Navigate to services page to show the new service
      navigateToPage('services');
      
      showNotification('Service posted successfully!', 'success');
  }

  // Initialize service posting
  setupServicePosting();
  
  // Initialize auto-scroll
  setupAutoScroll();
  
  // Auto-scroll functionality
  function setupAutoScroll() {
      const pauseBtn = document.getElementById('pauseScrollBtn');
      const playBtn = document.getElementById('playScrollBtn');
      const speedSelect = document.getElementById('scrollSpeed');
      const productsScroll = document.getElementById('featuredProducts');
      const scrollContainer = document.querySelector('.products-scroll-container');
      
      if (!pauseBtn || !playBtn || !speedSelect || !productsScroll) return;
      
      // Start auto-scroll by default
      startAutoScroll();
      
      // Pause button
      pauseBtn.addEventListener('click', () => {
          pauseAutoScroll();
          pauseBtn.style.display = 'none';
          playBtn.style.display = 'flex';
      });
      
      // Play button
      playBtn.addEventListener('click', () => {
          startAutoScroll();
          playBtn.style.display = 'none';
          pauseBtn.style.display = 'flex';
      });
      
      // Speed control
      speedSelect.addEventListener('change', (e) => {
          scrollSpeed = e.target.value;
          if (isAutoScrolling) {
              pauseAutoScroll();
              startAutoScroll();
          }
      });
      
      // Pause on hover
      if (scrollContainer) {
          scrollContainer.addEventListener('mouseenter', pauseAutoScroll);
          scrollContainer.addEventListener('mouseleave', () => {
              if (pauseBtn.style.display !== 'none') {
                  startAutoScroll();
              }
          });
      }
      
      // Pause on touch (mobile)
      if (scrollContainer) {
          scrollContainer.addEventListener('touchstart', pauseAutoScroll);
          scrollContainer.addEventListener('touchend', () => {
              setTimeout(() => {
                  if (pauseBtn.style.display !== 'none') {
                      startAutoScroll();
                  }
              }, 2000); // Resume after 2 seconds
          });
      }
  }
  
  function startAutoScroll() {
      const productsScroll = document.getElementById('featuredProducts');
      if (!productsScroll) return;
      
      pauseAutoScroll(); // Clear any existing interval
      
      // Add auto-scroll class
      productsScroll.classList.add('auto-scroll');
      productsScroll.classList.remove('paused');
      
      // Set speed class
      productsScroll.classList.remove('slow', 'normal', 'fast');
      productsScroll.classList.add(scrollSpeed);
      
      isAutoScrolling = true;
      
      // Add smooth scrolling indicator
      const container = document.querySelector('.products-scroll-container');
      if (container) {
          container.classList.add('auto-scrolling');
      }
  }
  
  function pauseAutoScroll() {
      const productsScroll = document.getElementById('featuredProducts');
      if (!productsScroll) return;
      
      productsScroll.classList.add('paused');
      isAutoScrolling = false;
      
      // Remove smooth scrolling indicator
      const container = document.querySelector('.products-scroll-container');
      if (container) {
          container.classList.remove('auto-scrolling');
      }
  }