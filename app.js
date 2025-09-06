// Application Data
// Define activeFilters object to store filter values
const activeFilters = {
    category: '',
    condition: '',
    price: Infinity,
    query: ''
};

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
        "id": "dsa-book",
        "title": "Data Structures & Algorithms Book",
        "reason": "Popular among CSE 2nd years",
        "price": 380,
        "match": "95%",
        "rating": 4.8,
        "icon": "📚",
        "category": "Books & Notes",
        "seller": "Tech Books Store",
        "condition": "Like New"
      },
      {
        "id": "casio-calculator",
        "title": "Scientific Calculator - Casio fx-991ES",
        "reason": "Essential for your upcoming exams",
        "price": 600,
        "match": "88%",
        "rating": 4.6,
        "icon": "🧮",
        "category": "Calculators",
        "seller": "Electronics Hub",
        "condition": "Excellent"
      },
      {
        "id": "programming-notes",
        "title": "Programming Notes - Java & Python",
        "reason": "From seniors in your branch",
        "price": 150,
        "match": "92%",
        "rating": 4.9,
        "icon": "📝",
        "category": "Books & Notes",
        "seller": "Study Materials",
        "condition": "Good"
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
  let currentTheme = 'dark'; // Set dark theme as default
  let detectedLocation = null;
  let isSignedIn = false; // Start with not signed in
  let currentUser = null;
  let authToken = null; // JWT token storage
  
  // Auto-scroll state
  let autoScrollInterval = null;
  let isAutoScrolling = false;
  let scrollSpeed = 'normal';
  let mouseX = 0;
  let scrollPosition = 0;
  
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
      console.log('🚀 CampusXchange App v2.1 - All changes applied!');
      console.log('✅ Dark mode default, smaller text, infinite scroll, clickable AI recommendations, static loading');
      initializeApp();
      setupEventListeners();
      setupAuthTabs();
      setupAuthForms();
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
      setupProfilePage();
      setupServicePosting();
      updateLoginState();
      setupLazyLoading(); // Setup lazy loading for images
      
      // Initialize socket.io connection for real-time messaging
      initializeSocketConnection();
      
      // Check for existing authentication
      if (validateToken()) {
          const token = getStoredToken();
          const payload = parseJWT(token);
          if (payload) {
              isSignedIn = true;
              currentUser = {
                  name: payload.name,
                  email: payload.email,
                  college: payload.college,
                  initials: payload.name.split(' ').map(n => n[0]).join('').toUpperCase()
              };
              updateAccountUI();
              updateLoginState();
          }
      }
      
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

    // Mobile Navigation
    const hamburgerMenu = document.getElementById('hamburgerMenu');
    const mobileNavOverlay = document.getElementById('mobileNavOverlay');
    const mobileNavClose = document.getElementById('mobileNavClose');
    const mobileNavButtons = document.querySelectorAll('.mobile-nav-btn');
    const mobileSearchBtn = document.getElementById('mobileSearchBtn');
    const mobileSearchInput = document.getElementById('mobileSearchInput');
    
    if (hamburgerMenu) {
        hamburgerMenu.addEventListener('click', () => {
            mobileNavOverlay.classList.add('active');
            document.body.style.overflow = 'hidden'; // Prevent scrolling when menu is open
        });
    }
    
    if (mobileNavClose) {
        mobileNavClose.addEventListener('click', () => {
            mobileNavOverlay.classList.remove('active');
            document.body.style.overflow = ''; // Re-enable scrolling
        });
    }
    
    if (mobileNavButtons) {
        mobileNavButtons.forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                const targetPage = e.target.dataset.page;
                console.log('Mobile navigation clicked:', targetPage);
                navigateToPage(targetPage);
                mobileNavOverlay.classList.remove('active');
                document.body.style.overflow = ''; // Re-enable scrolling
            });
        });
    }
    
    // Mobile header search functionality
    const mobileHeaderSearchBtn = document.getElementById('mobileHeaderSearchBtn');
    const mobileHeaderSearchInput = document.getElementById('mobileHeaderSearchInput');
    
    if (mobileHeaderSearchBtn && mobileHeaderSearchInput) {
        mobileHeaderSearchBtn.addEventListener('click', () => {
            const searchQuery = mobileHeaderSearchInput.value.trim();
            if (searchQuery) {
                console.log('Mobile header search:', searchQuery);
                performSearch(searchQuery);
            }
        });
        
        mobileHeaderSearchInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                const searchQuery = mobileHeaderSearchInput.value.trim();
                if (searchQuery) {
                    console.log('Mobile header search (Enter):', searchQuery);
                    performSearch(searchQuery);
                }
            }
        });
    }

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
      
      // Hero action buttons
      document.querySelectorAll('.hero__actions .btn').forEach(btn => {
          btn.addEventListener('click', (e) => {
              e.preventDefault();
              const page = e.target.getAttribute('data-page');
              if (page) {
                  console.log('Hero action clicked:', page);
                  navigateToPage(page);
              }
          });
      });
  
  
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
        searchBtn.addEventListener('click', () => performSearch());
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
  async function updateAccountUI() {
      if (API.Auth.isAuthenticated()) {
          try {
              // Try to get user profile from API
              const profile = await API.Auth.getProfile();
              
              // Update avatar with user initials
              const avatarCircle = document.querySelector('.avatar-circle');
              const avatarLarge = document.querySelector('.avatar-large');
              const userName = document.querySelector('.user-name');
              const userEmail = document.querySelector('.user-email');
              
              // Calculate initials from name
              const initials = profile.name ? profile.name.split(' ').map(n => n[0]).join('') : 'U';
              
              if (avatarCircle) avatarCircle.textContent = initials;
              if (avatarLarge) avatarLarge.textContent = initials;
              if (userName) userName.textContent = profile.name || 'User';
              if (userEmail) userEmail.textContent = profile.email || '';
              
              // Update global currentUser
              currentUser = {
                  ...profile,
                  initials: initials
              };
              isSignedIn = true;
          } catch (error) {
              console.error('Error fetching user profile:', error);
              
              // Fallback to localStorage user data
              const user = API.Auth.getCurrentUser();
              if (user) {
                  // Calculate initials from name
                  const initials = user.name ? user.name.split(' ').map(n => n[0]).join('') : 'U';
                  
                  const avatarCircle = document.querySelector('.avatar-circle');
                  const avatarLarge = document.querySelector('.avatar-large');
                  const userName = document.querySelector('.user-name');
                  const userEmail = document.querySelector('.user-email');
                  
                  if (avatarCircle) avatarCircle.textContent = initials;
                  if (avatarLarge) avatarLarge.textContent = initials;
                  if (userName) userName.textContent = user.name || 'User';
                  if (userEmail) userEmail.textContent = user.email || '';
                  
                  // Update global currentUser
                  currentUser = {
                      ...user,
                      initials: initials
                  };
                  isSignedIn = true;
              } else {
                  isSignedIn = false;
                  currentUser = null;
              }
          }
      } else {
          isSignedIn = false;
          currentUser = null;
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
  
  // JWT Token Management
  function generateJWT(payload) {
      // Simple JWT simulation - in production, use a proper JWT library
      const header = btoa(JSON.stringify({ alg: "HS256", typ: "JWT" }));
      const payloadEncoded = btoa(JSON.stringify(payload));
      const signature = btoa("mock-signature-" + Date.now());
      return `${header}.${payloadEncoded}.${signature}`;
  }
  
  function parseJWT(token) {
      try {
          const parts = token.split('.');
          if (parts.length !== 3) return null;
          return JSON.parse(atob(parts[1]));
      } catch (e) {
          return null;
      }
  }
  
  function storeAuthToken(token) {
      // Use the proper API storage method
      localStorage.setItem('token', token);
      localStorage.setItem('user', JSON.stringify({
          name: parseJWT(token).name,
          email: parseJWT(token).email,
          college: parseJWT(token).college
      }));
      authToken = token;
  }
  
  function getStoredToken() {
      // Use the proper API storage key
      const token = localStorage.getItem('token');
      if (token) {
          authToken = token;
          return token;
      }
      return null;
  }
  
  function clearAuthToken() {
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      authToken = null;
  }
  
  function validateToken() {
      const token = getStoredToken();
      if (!token) return false;
      
      const payload = parseJWT(token);
      if (!payload) return false;
      
      // Check if token is expired (simple check)
      const now = Date.now() / 1000;
      if (payload.exp && payload.exp < now) {
          API.Auth.logout(); // Use the proper API method to clear authentication
          return false;
      }
      
      return true;
  }
  
  // Password Toggle Function
  window.togglePassword = function(inputId) {
      const input = document.getElementById(inputId);
      const icon = input.nextElementSibling.querySelector('.password-icon');
      
      if (input.type === 'password') {
          input.type = 'text';
          icon.textContent = '🙈';
      } else {
          input.type = 'password';
          icon.textContent = '👁️';
      }
  };
  
  // Auth Tab Switching
  function setupAuthTabs() {
      const authTabs = document.querySelectorAll('.auth-tab');
      const authForms = document.querySelectorAll('.auth-form');
      
      authTabs.forEach(tab => {
          tab.addEventListener('click', () => {
              const targetTab = tab.dataset.tab;
              
              // Update active tab
              authTabs.forEach(t => t.classList.remove('active'));
              tab.classList.add('active');
              
              // Update active form
              authForms.forEach(form => form.classList.remove('active'));
              document.getElementById(targetTab + 'Form').classList.add('active');
          });
      });
  }
  
  // Form Validation
  function validateForm(formData, isSignIn = false) {
      const errors = {};
      
      if (isSignIn) {
          if (!formData.name || formData.name.trim().length < 2) {
              errors.name = 'Name must be at least 2 characters';
          }
          
          if (!formData.college || formData.college.trim().length < 2) {
              errors.college = 'College name is required';
          }
          
          if (formData.password !== formData.confirmPassword) {
              errors.confirmPassword = 'Passwords do not match';
          }
      }
      
      if (!formData.email || !isValidEmail(formData.email)) {
          errors.email = 'Please enter a valid email address';
      }
      
      if (!formData.password || formData.password.length < 6) {
          errors.password = 'Password must be at least 6 characters';
      }
      
      return errors;
  }
  
  function isValidEmail(email) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
  }
  
  function showFieldError(fieldId, message) {
      const field = document.getElementById(fieldId);
      const errorDiv = field.parentNode.querySelector('.error-message');
      
      field.classList.add('error');
      field.classList.remove('success');
      
      if (errorDiv) {
          errorDiv.textContent = message;
      } else {
          const errorElement = document.createElement('div');
          errorElement.className = 'error-message';
          errorElement.textContent = message;
          field.parentNode.appendChild(errorElement);
      }
  }
  
  function clearFieldError(fieldId) {
      const field = document.getElementById(fieldId);
      const errorDiv = field.parentNode.querySelector('.error-message');
      
      field.classList.remove('error');
      field.classList.add('success');
      
      if (errorDiv) {
          errorDiv.remove();
      }
  }
  
  // Sign In Handler
  window.handleSignIn = function() {
      const form = document.getElementById('signInFormData');
      const formData = new FormData(form);
      
      const userData = {
          name: formData.get('signinName') || document.getElementById('signinName').value,
          email: formData.get('signinEmail') || document.getElementById('signinEmail').value,
          password: formData.get('signinPassword') || document.getElementById('signinPassword').value,
          confirmPassword: formData.get('signinConfirmPassword') || document.getElementById('signinConfirmPassword').value,
          college: formData.get('signinCollege') || document.getElementById('signinCollege').value,
          studentId: formData.get('signinStudentId') || document.getElementById('signinStudentId').value,
          terms: document.getElementById('signinTerms').checked
      };
      
      // Clear previous errors
      document.querySelectorAll('.error-message').forEach(el => el.remove());
      document.querySelectorAll('.form-control').forEach(el => {
          el.classList.remove('error', 'success');
      });
      
      // Validate form
      const errors = validateForm(userData, true);
      
      if (!userData.terms) {
          errors.terms = 'You must agree to the terms and conditions';
      }
      
      if (Object.keys(errors).length > 0) {
          Object.keys(errors).forEach(fieldId => {
              showFieldError(fieldId, errors[fieldId]);
          });
          return;
      }
      
      // Show loading state
      const submitBtn = form.querySelector('button[type="submit"]');
      submitBtn.classList.add('loading');
      submitBtn.disabled = true;
      
      // Simulate API call
      setTimeout(() => {
          // Generate JWT token
          const tokenPayload = {
              userId: Date.now(),
              email: userData.email,
              name: userData.name,
              college: userData.college,
              iat: Math.floor(Date.now() / 1000),
              exp: Math.floor(Date.now() / 1000) + (24 * 60 * 60) // 24 hours
          };
          
          const token = generateJWT(tokenPayload);
          storeAuthToken(token);
          
          // Set user data
          isSignedIn = true;
          currentUser = {
              name: userData.name,
              email: userData.email,
              college: userData.college,
              studentId: userData.studentId,
              initials: userData.name.split(' ').map(n => n[0]).join('').toUpperCase()
          };
          
          // Close modal and update UI
          signInModal.classList.add('hidden');
          updateAccountUI();
          updateLoginState();
          showNotification('Account created successfully! Welcome to CampusXchange!', 'success');
          
          // Reset form
          form.reset();
          submitBtn.classList.remove('loading');
          submitBtn.disabled = false;
      }, 2000);
  };
  
  // Login Handler
  window.handleLogin = function() {
      const form = document.getElementById('loginFormData');
      const formData = new FormData(form);
      
      const userData = {
          email: formData.get('loginEmail') || document.getElementById('loginEmail').value,
          password: formData.get('loginPassword') || document.getElementById('loginPassword').value,
          remember: document.getElementById('loginRemember').checked
      };
      
      // Clear previous errors
      document.querySelectorAll('.error-message').forEach(el => el.remove());
      document.querySelectorAll('.form-control').forEach(el => {
          el.classList.remove('error', 'success');
      });
      
      // Validate form
      const errors = validateForm(userData, false);
      
      if (Object.keys(errors).length > 0) {
          Object.keys(errors).forEach(fieldId => {
              showFieldError(fieldId, errors[fieldId]);
          });
          return;
      }
      
      // Show loading state
      const submitBtn = form.querySelector('button[type="submit"]');
      submitBtn.classList.add('loading');
      submitBtn.disabled = true;
      
      // Simulate API call
      setTimeout(() => {
          // Simulate authentication
          if (userData.email === 'demo@college.edu' && userData.password === 'password') {
              // Generate JWT token
              const tokenPayload = {
                  userId: 12345,
                  email: userData.email,
                  name: 'John Doe',
                  college: 'Demo University',
                  iat: Math.floor(Date.now() / 1000),
                  exp: Math.floor(Date.now() / 1000) + (userData.remember ? 30 * 24 * 60 * 60 : 24 * 60 * 60) // 30 days or 24 hours
              };
              
              const token = generateJWT(tokenPayload);
              storeAuthToken(token);
              
              // Set user data
              isSignedIn = true;
              currentUser = {
                  name: 'John Doe',
                  email: userData.email,
                  college: 'Demo University',
                  initials: 'JD'
              };
              
              // Close modal and update UI
              signInModal.classList.add('hidden');
              updateAccountUI();
              updateLoginState();
              showNotification('Successfully signed in!', 'success');
          } else {
              showFieldError('loginEmail', 'Invalid email or password');
              showFieldError('loginPassword', 'Invalid email or password');
          }
          
          // Reset form
          submitBtn.classList.remove('loading');
          submitBtn.disabled = false;
      }, 1500);
  };
  
  // Social Auth Handlers
  window.handleGoogleAuth = function() {
      showNotification('Google authentication coming soon!', 'info');
  };
  
  window.handleMicrosoftAuth = function() {
      showNotification('Microsoft authentication coming soon!', 'info');
  };
  
  window.handleUseAnotherAccount = function() {
      showSuccessMessage('Use another account feature coming soon!');
  };
  
  // Setup Auth Forms
  function setupAuthForms() {
      // Sign In Form
      const signInForm = document.getElementById('signInFormData');
      if (signInForm) {
          signInForm.addEventListener('submit', (e) => {
              e.preventDefault();
              handleSignIn();
          });
      }
      
      // Login Form
      const loginForm = document.getElementById('loginFormData');
      if (loginForm) {
          loginForm.addEventListener('submit', (e) => {
              e.preventDefault();
              handleLogin();
          });
      }
  }
  
  function handleSignOut() {
    isSignedIn = false;
    currentUser = null;
    
    // Clear auth token from storage
    clearAuthToken();
    
    // Call API with proper error handling
    API.Auth.logout()
        .then(() => {
            showNotification('Successfully signed out!', 'success');
        })
        .catch(error => {
            console.error('Error during sign out:', error);
            // Still proceed with local logout even if API fails
            showNotification('Signed out locally, but server sync failed', 'warning');
        })
        .finally(() => {
            // Update UI to show logged out state
            updateLoginState();
            
            // Navigate to home page
            navigateToPage('home');
        });
}
  
  // Update login state UI
  function updateLoginState() {
      const accountAvatar = document.getElementById('accountAvatar');
      const userSection = document.getElementById('userSection');
      const headerSignInBtn = document.getElementById('headerSignInBtn');
      const signInOption = document.getElementById('signInOption');
      
      // Check authentication status from API service
      const isAuthenticated = API.Auth.isAuthenticated();
      const user = API.Auth.getCurrentUser();
      
      if (isAuthenticated && user) {
          // Update global state
          isSignedIn = true;
          currentUser = {
              ...user,
              initials: user.name ? user.name.split(' ').map(n => n[0]).join('') : 'U'
          };
          
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
          
          // Hide sign in option in dropdown
          if (signInOption) {
              signInOption.style.display = 'none';
          }
          
          // Hide sign in button
          if (headerSignInBtn) {
              headerSignInBtn.style.display = 'none';
          }
      } else {
          // Update global state
          isSignedIn = false;
          currentUser = null;
          
          // Hide account avatar, show sign in button
          if (accountAvatar) {
              accountAvatar.style.display = 'none';
          }
          
          // Hide user section in dropdown
          if (userSection) {
              userSection.style.display = 'none';
          }
          
          // Show sign in option in dropdown
          if (signInOption) {
              signInOption.style.display = 'block';
          }
          
          // Show sign in button
          if (headerSignInBtn) {
              headerSignInBtn.style.display = 'flex';
          }
      }
  }
  
  // Theme Management
  function initializeTheme() {
      // Set dark theme as default and keep it fixed
      currentTheme = 'dark';
      document.documentElement.setAttribute('data-theme', currentTheme);
      document.documentElement.setAttribute('data-color-scheme', 'dark');
      console.log('Theme initialized:', currentTheme);
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
    // Redirect to the login page instead of showing modal
    window.location.href = 'login.html';
    return;
    // The code below is kept for backward compatibility but won't execute
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
  
  async function renderFeaturedProducts() {
      const container = document.getElementById('featuredProducts');
      if (container) {
          // Show loading state
          container.innerHTML = '<div class="loading-indicator">Loading listings...</div>';
          
          try {
              // Fetch listings from API with a limit to improve performance
              const listings = await API.Listings.getAll({ limit: 10 });
              
              // If no listings found, use sample data as fallback (but limit the number)
              const featuredItems = listings.length > 0 ? listings.slice(0, 10) : appData.sampleListings.slice(0, 10);
              
              // Duplicate the items for infinite scrolling (but limit the total number)
              const duplicatedItems = [...featuredItems];
              
              // Use document fragment for better performance
              const fragment = document.createDocumentFragment();
              duplicatedItems.forEach(product => {
                  const productCard = document.createElement('div');
                  productCard.innerHTML = createProductCard(product);
                  fragment.appendChild(productCard.firstElementChild);
              });
              
              container.innerHTML = '';
              container.appendChild(fragment);
              updateWishlistButtons();
              
              // Refresh lazy loading for new images
              refreshLazyLoading();
              
              // Start infinite auto-scroll with a slight delay
              setTimeout(() => {
                  startAutoScroll();
              }, 300);
          } catch (error) {
              console.error('Error fetching listings:', error);
              // Fallback to sample data if API fails (but limit the number)
              const featuredItems = appData.sampleListings.slice(0, 10);
              
              // Use document fragment for better performance
              const fragment = document.createDocumentFragment();
              featuredItems.forEach(product => {
                  const productCard = document.createElement('div');
                  productCard.innerHTML = createProductCard(product);
                  fragment.appendChild(productCard.firstElementChild);
              });
              
              container.innerHTML = '';
              container.appendChild(fragment);
              updateWishlistButtons();
              
              // Start infinite auto-scroll with a slight delay
              setTimeout(() => {
                  startAutoScroll();
              }, 300);
          }
      }
  }
  
  async function renderBrowseProducts() {
      const container = document.getElementById('browseProducts');
      if (container) {
          // Show loading state
          container.innerHTML = '<div class="loading-indicator">Loading products...</div>';
          
          try {
              // Fetch listings from API with pagination for better performance
              let products;
              
              // Get all listings with pagination
              products = await API.Listings.getAll({ limit: 20, page: 1 });
              
              // If no products found, use sample data as fallback (but limit the number)
              let filteredProducts = products.length > 0 ? products : appData.sampleListings.slice(0, 20);
              
              // Use document fragment for better performance
              const fragment = document.createDocumentFragment();
              filteredProducts.forEach(product => {
                  const productCard = document.createElement('div');
                  productCard.innerHTML = createProductCard(product);
                  fragment.appendChild(productCard.firstElementChild);
              });
              
              container.innerHTML = '';
              container.appendChild(fragment);
              updateWishlistButtons();
              
              // Refresh lazy loading for new images
              refreshLazyLoading();
          } catch (error) {
              console.error('Error fetching products:', error);
              // Fallback to sample data if API fails
              const fragment = document.createDocumentFragment();
              const sampleProducts = appData.sampleListings.slice(0, 20);
              sampleProducts.forEach(product => {
                  const productCard = document.createElement('div');
                  productCard.innerHTML = createProductCard(product);
                  fragment.appendChild(productCard.firstElementChild);
              });
              
              container.innerHTML = '';
              container.appendChild(fragment);
              updateWishlistButtons();
              
              // Refresh lazy loading for new images
              refreshLazyLoading();
          }
      }
  }
  
  function renderRecommendations() {
      const container = document.getElementById('recommendationsGrid');
      if (container) {
          container.innerHTML = appData.aiRecommendations.map((rec, index) => `
              <div class="recommendation-card" onclick="handleRecommendationClick('${rec.id || 'rec-' + index}')" style="cursor: pointer;">
                  <div class="recommendation-match">${rec.match}</div>
                  <div class="recommendation-image">${rec.icon || '🤖'}</div>
                  <div class="recommendation-content">
                      <div class="recommendation-title">${rec.title}</div>
                      <div class="recommendation-reason">${rec.reason}</div>
                      <div class="recommendation-rating">
                          <span class="rating-stars">${'★'.repeat(Math.floor(rec.rating || 4))}${'☆'.repeat(5 - Math.floor(rec.rating || 4))}</span>
                          <span class="rating-text">${rec.match} match</span>
                      </div>
                      <div class="recommendation-price">₹${rec.price}</div>
                  </div>
                  <div class="recommendation-action">
                      <button class="btn btn--primary btn--sm">View Details</button>
                  </div>
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
      // Handle both API data format and sample data format
      const id = product._id || product.id;
      const title = product.title || 'Untitled';
      const price = product.price || 0;
      const originalPrice = product.originalPrice || null;
      const seller = product.seller?.name || product.seller || 'Unknown';
      const condition = product.condition || 'New';
      const year = product.year || '';
      
      // Use image from API or fallback to emoji for sample data
      const imageUrl = product.images && product.images.length > 0 ? product.images[0] : null;
      let imageDisplay;
      
      if (imageUrl) {
          // Check if the image is a full URL, base64 data, or a relative path
          if (imageUrl.startsWith('data:')) {
              // Base64 image data
              imageDisplay = `<img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 300 200'%3E%3Crect width='300' height='200' fill='%23cccccc'/%3E%3C/svg%3E" data-src="${imageUrl}" alt="${title}" class="product-img lazy-image">`;
          } else if (imageUrl.startsWith('http')) {
              // Full URL
              imageDisplay = `<img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 300 200'%3E%3Crect width='300' height='200' fill='%23cccccc'/%3E%3C/svg%3E" data-src="${imageUrl}" alt="${title}" class="product-img lazy-image">`;
          } else {
              // Relative path - prepend API base URL
              imageDisplay = `<img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 300 200'%3E%3Crect width='300' height='200' fill='%23cccccc'/%3E%3C/svg%3E" data-src="http://localhost:3001/${imageUrl}" alt="${title}" class="product-img lazy-image">`;
          }
      } else {
          // Fallback to emoji or provided image
          imageDisplay = product.image || '📦';
      }
      
      const isWishlisted = wishlist.includes(id);
      
      return `
          <div class="product-card hover-lift" onclick="showProductModal('${id}')">
              <button class="wishlist-btn ${isWishlisted ? 'active' : ''}" 
                      data-product-id="${id}" 
                      onclick="event.stopPropagation(); toggleWishlist('${id}')">
                  ${isWishlisted ? '❤️' : '🤍'}
              </button>
              <div class="product-image">${imageDisplay}</div>
              <div class="product-content">
                  <div class="product-title">${title}</div>
                  <div class="product-price">
                      <span class="price-current">₹${typeof price === 'number' ? price.toLocaleString() : price}</span>
                      ${originalPrice ? `<span class="price-original">₹${typeof originalPrice === 'number' ? originalPrice.toLocaleString() : originalPrice}</span>` : ''}
                  </div>
                  <div class="product-seller">
                      <span class="seller-info">${seller || 'You'} ${year ? '• ' + year : ''}</span>
                      <span class="product-condition">${condition}</span>
                  </div>
                  <div style="color: var(--color-text-secondary); font-size: var(--font-size-sm); margin-top: var(--space-4);">
                      📍 ${product.location || 'Campus'} • ${product.posted || 'Recently'}
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
      btn.innerHTML = '<span class="loading-static">⏳</span> Detecting...';
      btn.style.pointerEvents = 'none';
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
          btn.style.pointerEvents = 'auto';
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
  
  window.showProductModal = async function(productId) {
      // Show loading state in modal
      document.getElementById('modalTitle').textContent = 'Loading...';
      document.getElementById('modalBody').innerHTML = `
          <div class="loading-indicator" style="text-align: center; padding: var(--space-32);">
              <div class="loading"></div>
              <p>Loading product details...</p>
          </div>
      `;
      
      if (modal) {
          modal.classList.remove('hidden');
      }
      
      try {
          // Try to fetch product from API first
          let product;
          
          try {
              product = await API.Listings.getById(productId);
          } catch (error) {
              console.error('Error fetching product from API:', error);
              // Fallback to sample data
              const allProducts = [...appData.sampleListings];
              product = allProducts.find(p => p.id == productId || p._id == productId);
          }
          
          if (!product) {
              throw new Error('Product not found');
          }
          
          // Store the current product for the contact seller button
          currentProductInModal = product;
          
          // Handle both API data format and sample data format
          const title = product.title || 'Untitled';
          const price = product.price || 0;
          const originalPrice = product.originalPrice || null;
          const condition = product.condition || 'New';
          const seller = product.seller?.name || product.seller || 'Unknown';
          const year = product.year || '';
          const branch = product.branch || '';
          const location = product.location || 'Campus';
          const posted = product.posted || 'Recently';
          const category = product.category || '';
          const description = product.description || `This ${title.toLowerCase()} is in ${condition.toLowerCase()} condition and perfect for students. Well-maintained and comes with all necessary accessories. Serious buyers only.`;
          
          // Use image from API or fallback to emoji for sample data
          const imageUrl = product.images && product.images.length > 0 ? product.images[0] : null;
          const imageDisplay = imageUrl 
              ? `<img src="${imageUrl}" alt="${title}" style="max-width: 100%; max-height: 200px;">` 
              : product.image || '📦';
          
          document.getElementById('modalTitle').textContent = title;
          document.getElementById('modalBody').innerHTML = `
              <div style="display: grid; grid-template-columns: 1fr 2fr; gap: var(--space-24); margin-bottom: var(--space-20);">
                  <div style="font-size: 8rem; text-align: center; background: var(--color-bg-1); padding: var(--space-32); border-radius: var(--radius-lg);">
                      ${imageDisplay}
                  </div>
                  <div>
                      <div style="font-size: var(--font-size-2xl); font-weight: 700; color: var(--color-primary); margin-bottom: var(--space-8);">
                          ₹${typeof price === 'number' ? price.toLocaleString() : price}
                          ${originalPrice ? `<span style="font-size: var(--font-size-lg); color: var(--color-text-secondary); text-decoration: line-through; margin-left: var(--space-8);">₹${typeof originalPrice === 'number' ? originalPrice.toLocaleString() : originalPrice}</span>` : ''}
                      </div>
                      <div class="status status--success" style="margin-bottom: var(--space-16);">${condition}</div>
                      <div style="margin-bottom: var(--space-12);"><strong>Seller:</strong> ${seller}</div>
                      ${year ? `<div style="margin-bottom: var(--space-12);"><strong>Year:</strong> ${year}</div>` : ''}
                      ${branch ? `<div style="margin-bottom: var(--space-12);"><strong>Branch:</strong> ${branch}</div>` : ''}
                      <div style="margin-bottom: var(--space-12);"><strong>Location:</strong> ${location}</div>
                      <div style="margin-bottom: var(--space-12);"><strong>Posted:</strong> ${posted}</div>
                      ${category ? `<div style="margin-bottom: var(--space-12);"><strong>Category:</strong> ${category}</div>` : ''}
                  </div>
              </div>
              <div style="background: var(--color-bg-1); padding: var(--space-16); border-radius: var(--radius-base);">
                  <strong>Description:</strong><br>
                  ${description}
              </div>
          `;
      } catch (error) {
          console.error('Error displaying product:', error);
          document.getElementById('modalTitle').textContent = 'Product Not Found';
          document.getElementById('modalBody').innerHTML = `
              <div class="error-message" style="text-align: center; padding: var(--space-32);">
                  <p>Sorry, the product you're looking for could not be found.</p>
              </div>
          `;
      }
  };
  
  window.selectChat = function(chatId) {
      currentChat = chatData.find(chat => chat.id === chatId);
      if (!currentChat) return;
  
      document.querySelectorAll('.chat-item').forEach(item => item.classList.remove('active'));
      if (event && event.target) {
          const chatItem = event.target.closest('.chat-item');
          if (chatItem) chatItem.classList.add('active');
      }
  
      const chatPartnerEl = document.getElementById('chatPartner');
      if (chatPartnerEl) {
          chatPartnerEl.textContent = currentChat.name;
      }
      
      // If this is a real chat with a sellerId, load messages from API
      if (currentChat.isReal && currentChat.sellerId && isSignedIn) {
          loadMessagesForChat(currentChat.sellerId);
      } else {
          // Display existing mock messages
          displayChatMessages(currentChat.messages);
      }
  };
  
  // Function to load messages for a specific chat
  async function loadMessagesForChat(userId) {
      try {
          const messagesContainer = document.getElementById('chatMessages');
          if (messagesContainer) {
              // Show loading indicator
              messagesContainer.innerHTML = '<div class="loading-indicator">Loading messages...</div>';
              
              // Fetch messages from API
              const messages = await API.Messages.getConversation(userId);
              console.log('Loaded messages:', messages);
              
              if (messages && messages.length > 0) {
                  // Convert API messages to our format
                  const formattedMessages = messages.map(msg => ({
                      text: msg.message,
                      sent: msg.sender === currentUser?._id,
                      time: new Date(msg.createdAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
                  }));
                  
                  // Update current chat messages
                  if (currentChat && currentChat.sellerId === userId) {
                      currentChat.messages = formattedMessages;
                      displayChatMessages(formattedMessages);
                  }
              } else {
                  // No messages yet
                  messagesContainer.innerHTML = '<div class="empty-state">No messages yet. Start the conversation!</div>';
              }
          }
      } catch (error) {
          console.error('Error loading messages:', error);
          const messagesContainer = document.getElementById('chatMessages');
          if (messagesContainer) {
              messagesContainer.innerHTML = '<div class="error-state">Failed to load messages. Please try again.</div>';
          }
      }
  }
  
  // Function to display chat messages
  function displayChatMessages(messages) {
      const messagesContainer = document.getElementById('chatMessages');
      if (messagesContainer) {
          // Ensure each message has an ID
          messages.forEach((message, index) => {
              if (!message.id) {
                  message.id = `msg_${Date.now()}_${index}`;
              }
          });
          
          messagesContainer.innerHTML = messages.map(message => {
              // Create a properly escaped version of the message text for use in attributes
              return `
              <div class="message ${message.sent ? 'sent' : ''}${message.failed ? ' failed' : ''}">
                  <div class="message-bubble">
                      ${message.text}
                      <div style="font-size: var(--font-size-xs); opacity: 0.7; margin-top: var(--space-4);">
                          ${message.time} ${message.failed ? '<span style="color: var(--color-error);">• Not delivered</span>' : ''}
                      </div>
                  </div>
                  ${message.failed ? `<button class="retry-btn" onclick="retryMessage('${message.id}')">Retry</button>` : ''}
              </div>
              `;
          }).join('');
  
          messagesContainer.scrollTop = messagesContainer.scrollHeight;
      }
  }
  
  // Function to retry sending a failed message
  window.retryMessage = function(messageId) {
      if (!currentChat) return;
      
      // Find the failed message by ID
      const failedMessage = currentChat.messages.find(msg => msg.id === messageId && msg.failed);
      if (!failedMessage) return;
      
      // Remove the failed message
      currentChat.messages = currentChat.messages.filter(msg => msg.id !== messageId);
      
      // Add a new message with the same text
      const messageInput = document.getElementById('messageInput');
      if (messageInput) {
          messageInput.value = failedMessage.text;
          sendMessage();
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
  
  function performSearch(searchQuery) {
    let query;
    
    if (searchQuery) {
        // If a search query is provided as parameter (from mobile search)
        query = searchQuery.toLowerCase().trim();
    } else {
        // Otherwise use the desktop search input
        const searchInput = document.getElementById('searchInput');
        if (!searchInput) return;
        query = searchInput.value.toLowerCase().trim();
    }
    
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
  
  // Store the current product being viewed in the modal
  let currentProductInModal = null;

  function contactSellerHandler() {
      if (!isSignedIn) {
          showSignInModal('Please sign in to contact sellers');
          return;
      }
      
      // Create a new chat or find existing one with this seller
      if (currentProductInModal) {
          const sellerId = currentProductInModal.seller?.id || currentProductInModal.seller?._id || 'unknown';
          const sellerName = currentProductInModal.seller?.name || currentProductInModal.seller || 'Unknown Seller';
          const productTitle = currentProductInModal.title || 'Item';
          
          // Check if we already have a chat with this seller
          let existingChat = chatData.find(chat => chat.sellerId === sellerId);
          
          if (!existingChat) {
              // Create a new chat
              const newChatId = chatData.length + 1;
              const newChat = {
                  id: newChatId,
                  sellerId: sellerId,
                  name: sellerName,
                  lastMessage: `About: ${productTitle}`,
                  time: 'Just now',
                  messages: [],
                  isReal: true
              };
              
              chatData.unshift(newChat);
              setupChat(); // Refresh the chat list
              currentChat = newChat;
              
              // Send initial message about the product using socket.io
              if (sellerId !== 'unknown') {
                  try {
                      // Initialize socket if not already done
                      if (!API.Messages.socket) {
                          API.Messages.init();
                      }
                      
                      // Send message through socket.io
                      API.Messages.sendMessage(sellerId, `Hi, I'm interested in your listing: ${productTitle}`)
                          .then(response => {
                              console.log('Message sent successfully:', response);
                              // Add the message to the current chat
                              if (currentChat) {
                                  currentChat.messages.push({
                                      id: `msg_${Date.now()}_${currentChat.messages.length}`,
                                      text: `Hi, I'm interested in your listing: ${productTitle}`,
                                      sent: true,
                                      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
                                  });
                                  displayChatMessages(currentChat.messages);
                              }
                          })
                          .catch(error => {
                              console.error('Error sending message:', error);
                              showNotification('Failed to send message. Please try again.', 'error');
                          });
                  } catch (error) {
                      console.error('Error sending initial message:', error);
                  }
              }
          } else {
              currentChat = existingChat;
          }
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
      
      // Load real conversations from API if user is signed in
      if (isSignedIn && currentUser) {
          loadRealConversations();
      }
  }
  
  // Function to initialize socket connection
  function initializeSocketConnection() {
      // Initialize the socket connection
      if (API.Messages) {
          try {
              // Initialize socket connection
              const socket = API.Messages.init();
              console.log('Socket connection initialized successfully');
              
              // Join user's room if authenticated
              if (isSignedIn && currentUser) {
                  // Get user ID from JWT token payload or user object
                  const userId = currentUser.userId || currentUser.id;
                  if (userId) {
                      socket.emit('join', userId);
                      console.log('Joined chat room for user:', userId);
                  }
              
              // Set up message listener
              API.Messages.onMessage(message => {
                  console.log('New message received:', message);
                  
                  // Find the chat or create a new one
                  let chat = chatData.find(c => 
                      (c.sellerId === message.sender) || 
                      (c.sellerId === message.receiver)
                  );
                  
                  if (!chat) {
                      // Create a new chat entry
                      const newChatId = chatData.length + 1;
                      const otherUserId = message.sender === currentUser?._id ? message.receiver : message.sender;
                      
                      // Try to get user info from the message object
                      let userName = 'New Contact';
                      const userId = currentUser?.userId || currentUser?.id;
                      if (message.sender === userId && message.receiver_info) {
                          userName = message.receiver_info.name || 'New Contact';
                      } else if (message.sender_info) {
                          userName = message.sender_info.name || 'New Contact';
                      }
                      
                      chat = {
                          id: newChatId,
                          sellerId: otherUserId,
                          name: userName,
                          lastMessage: message.message,
                          time: 'Just now',
                          messages: [],
                          isReal: true
                      };
                      chatData.unshift(chat);
                  }
                  
                  // Add the message to the chat
                  const userId = currentUser?.userId || currentUser?.id;
                  chat.messages.push({
                      id: `msg_${Date.now()}_${chat.messages.length}`,
                      text: message.message,
                      sent: message.sender === userId,
                      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
                  });
                  
                  // Update last message and time
                  chat.lastMessage = message.message;
                  chat.time = 'Just now';
                  
                  // Update the chat list
                  setupChat();
                  
                  // If this is the current chat, update the messages display
                  if (currentChat && currentChat.id === chat.id) {
                      selectChat(chat.id);
                  }
                  
                  // Show notification for new message if not in chat page
                  if (currentPage !== 'chat') {
                      showNotification(`New message from ${chat.name}`, 'info');
                  }
              });
          } catch (error) {
              console.error('Error initializing socket connection:', error);
          }
         } else {
          console.warn('API.Messages is not available');
      }
  }
  
  // Function to load real conversations from the API
  async function loadRealConversations() {
      try {
          const conversations = await API.Messages.getAllConversations();
          console.log('Loaded conversations:', conversations);
          
          if (conversations && conversations.length > 0) {
              // Clear mock data if we have real conversations
              if (chatData.length > 0 && !chatData[0].isReal) {
                  chatData = [];
              }
              
              // Add real conversations to the chat data
              conversations.forEach((conversation, index) => {
                  // Check if this conversation already exists
                  const existingChat = chatData.find(c => c.sellerId === conversation._id);
                  
                  if (!existingChat) {
                      chatData.push({
                          id: chatData.length + 1,
                          sellerId: conversation._id,
                          name: conversation.name || 'User ' + conversation._id.substring(0, 5),
                          lastMessage: 'Click to view conversation',
                          time: 'Recent',
                          messages: [],
                          isReal: true
                      });
                  }
              });
              
              // Update the chat list
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
      } catch (error) {
          console.error('Error loading conversations:', error);
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
      
      // Add message to UI immediately
      const currentTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
      const messageId = `msg_${Date.now()}_${currentChat.messages.length}`;
      currentChat.messages.push({
          id: messageId,
          text: text,
          sent: true,
          time: currentTime
      });
      
      // Update UI
      displayChatMessages(currentChat.messages);
      messageInput.value = '';
      
      try {
          // Send message via socket.io
          if (currentChat.sellerId) {
              console.log('Sending message to:', currentChat.sellerId);
              
              // Make sure socket is initialized
              if (!API.Messages.socket) {
                  API.Messages.init();
              }
              
              // Update chat's last message and time
              currentChat.lastMessage = text;
              currentChat.time = 'Just now';
              
              // Update chat list UI
              setupChat();
              
              // Send message through socket.io
              API.Messages.sendMessage(currentChat.sellerId, text)
                  .then(response => {
                      console.log('Message sent successfully', response);
                  })
                  .catch(error => {
                      console.error('Error sending message:', error);
                      showNotification('Failed to send message. Please try again.', 'error');
                      
                      // Mark the message as failed in UI
                      const lastMessage = currentChat.messages[currentChat.messages.length - 1];
                      if (lastMessage && lastMessage.text === text) {
                          lastMessage.failed = true;
                          // Ensure the message has an ID
                          if (!lastMessage.id) {
                              lastMessage.id = `msg_${Date.now()}_failed`;
                          }
                          displayChatMessages(currentChat.messages);
                      }
                  });
          } else {
              console.warn('No seller ID found for this chat');
              // Fallback to mock response for demo purposes
              setTimeout(() => {
                  if (currentChat) {
                      currentChat.messages.push({
                          id: `msg_${Date.now()}_response`,
                          text: "Thanks for your message! I'll get back to you soon.",
                          sent: false,
                          time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
                      });
                      displayChatMessages(currentChat.messages);
                  }
              }, 2000);
          }
      } catch (error) {
          console.error('Error in sendMessage function:', error);
          showNotification('Failed to send message. Please try again.', 'error');
      }
    }
  }
  
  async function handlePostSubmit(e) {
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
  
      try {
          // Create new item data
          const newItem = {
              title: document.getElementById('postTitle').value,
              price: parseInt(document.getElementById('postPrice').value),
              originalPrice: parseInt(document.getElementById('postOriginalPrice').value) || null,
              condition: document.getElementById('postCondition').value,
              location: document.getElementById('locationInput').value || 'Campus',
              category: document.getElementById('postCategory').value,
              description: document.getElementById('postDescription').value || `This item is in ${document.getElementById('postCondition').value.toLowerCase()} condition and perfect for students.`
          };
          
          // Create FormData for file uploads
          const formData = new FormData();
          
          // Add all form fields to FormData
          Object.keys(newItem).forEach(key => {
              formData.append(key, newItem[key]);
          });
          
          // Add uploaded images to FormData
          uploadedImages.forEach((img, index) => {
              formData.append(`images`, img.file);
          });
          
          // Submit to API
          const response = await API.Listings.create(formData);
          console.log('Listing created:', response);
          
          // Add to local data for immediate display
          const createdItem = response || {
              id: Date.now(),
              ...newItem,
              images: uploadedImages.map(img => img.url),
              seller: currentUser.name,
              year: 'Current',
              branch: 'Various',
              posted: 'Just now'
          };

          
          // Add to the beginning of sample listings
          appData.sampleListings.unshift(createdItem);
          
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
          
          navigateToPage('home');
      } catch (error) {
          console.error('Error creating listing:', error);
          showErrorMessage('Failed to post your item. Please try again.');
      } finally {
          submitBtn.textContent = originalText;
          submitBtn.disabled = false;
      }
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
      // Show enhanced notification only
      showNotification(message, 'success');
  }
  
  // Handle AI recommendation clicks
  window.handleRecommendationClick = function(recommendationId) {
      // Find the recommendation data
      const recommendation = appData.aiRecommendations.find(rec => rec.id === recommendationId);
      
      if (!recommendation) {
          showNotification('Recommendation not found', 'error');
          return;
      }
      
      // Check if user is signed in
      if (!isSignedIn) {
          showSignInModal('Please sign in to view recommendation details');
          return;
      }
      
      // Navigate to browse page and filter by recommendation
      navigateToPage('browse');
      
      // Set search filter based on recommendation
      const searchInput = document.getElementById('searchInput');
      if (searchInput) {
          searchInput.value = recommendation.title;
      }
      
      // Set category filter
      const categoryFilter = document.getElementById('categoryFilter');
      if (categoryFilter) {
          categoryFilter.value = recommendation.category;
      }
      
      // Trigger search
      setTimeout(() => {
          const searchBtn = document.getElementById('searchBtn');
          if (searchBtn) {
              searchBtn.click();
          }
      }, 100);
      
      // Show detailed notification
      showNotification(`🔍 Searching for "${recommendation.title}" in ${recommendation.category}...`, 'info');
      
      // Add to recent searches (simulate)
      const recentSearches = JSON.parse(localStorage.getItem('recentSearches') || '[]');
      if (!recentSearches.includes(recommendation.title)) {
          recentSearches.unshift(recommendation.title);
          recentSearches.splice(5); // Keep only last 5
          localStorage.setItem('recentSearches', JSON.stringify(recentSearches));
      }
  };

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

// Lazy loading images
function setupLazyLoading() {
    // Create a global observer that can be reused
    if ('IntersectionObserver' in window) {
        window.lazyImageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const lazyImage = entry.target;
                    if (lazyImage.dataset.src) {
                        lazyImage.src = lazyImage.dataset.src;
                        lazyImage.classList.remove('lazy-image');
                        lazyImage.classList.add('loaded');
                        lazyImageObserver.unobserve(lazyImage);
                    }
                }
            });
        });

        // Observe all lazy images
        observeLazyImages();
        
        // Set up a mutation observer to detect new images added to the DOM
        const mutationObserver = new MutationObserver((mutations) => {
            mutations.forEach(mutation => {
                if (mutation.type === 'childList') {
                    observeLazyImages();
                }
            });
        });
        
        // Start observing the document for added nodes
        mutationObserver.observe(document.body, { childList: true, subtree: true });
    } else {
        // Fallback for browsers that don't support IntersectionObserver
        loadAllLazyImages();
        
        // Set up a simple polling mechanism to check for new images
        setInterval(loadAllLazyImages, 2000);
    }
}

// Helper function to observe all lazy images
function observeLazyImages() {
    if (!window.lazyImageObserver) return;
    
    document.querySelectorAll('img.lazy-image:not([data-lazy-observed])').forEach(image => {
        window.lazyImageObserver.observe(image);
        image.setAttribute('data-lazy-observed', 'true');
    });
}

// Helper function to load all lazy images without IntersectionObserver
function loadAllLazyImages() {
    const lazyImages = document.querySelectorAll('img.lazy-image:not(.loaded)');
    lazyImages.forEach(image => {
        if (image.dataset.src) {
            image.src = image.dataset.src;
            image.classList.remove('lazy-image');
            image.classList.add('loaded');
        }
    });
}

// Function to refresh lazy loading for dynamically added content
function refreshLazyLoading() {
    if ('IntersectionObserver' in window && window.lazyImageObserver) {
        observeLazyImages();
    } else {
        loadAllLazyImages();
    }
}

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
      
      // In-app notification with enhanced styling
      const notification = document.createElement('div');
      notification.className = `notification ${type}`;
      notification.innerHTML = `
          <div class="notification-header">
              <div class="notification-title">${title}</div>
              <button class="notification-close" onclick="this.parentElement.parentElement.remove()">&times;</button>
          </div>
          <div class="notification-message">${message}</div>
          <div class="notification-progress"></div>
      `;
      
      notificationContainer.appendChild(notification);
      
      // Auto remove after 5 seconds
      setTimeout(() => {
          if (notification.parentElement) {
              notification.style.animation = 'notificationSlideOut 0.3s ease-in-out forwards';
              setTimeout(() => {
                  if (notification.parentElement) {
                      notification.remove();
                  }
              }, 300);
          }
      }, 5000);
  }


  // Profile Page Setup
  function setupProfilePage() {
      const tabBtns = document.querySelectorAll('.tab-btn');
      const tabContents = document.querySelectorAll('.tab-content');
      
      // Load user profile data
      loadUserProfile();
      
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
  
  // Load user profile data from API
  async function loadUserProfile() {
      if (!API.Auth.isAuthenticated()) {
          // Redirect to home if not logged in
          navigateToPage('home');
          showSignInModal();
          return;
      }
      
      try {
          // Get profile data from API
          const profile = await API.Auth.getProfile();
          
          // Update profile UI
          document.getElementById('profileName').textContent = profile.name || 'User';
          document.getElementById('profileEmail').textContent = profile.email || '';
          
          // Set avatar initials
          const initials = profile.name ? profile.name.split(' ').map(n => n[0]).join('') : 'U';
          document.getElementById('profileAvatar').textContent = initials;
          
          // Update stats if available
          if (profile.stats) {
              document.getElementById('listingsCount').textContent = profile.stats.listings || '0';
              document.getElementById('salesCount').textContent = profile.stats.sales || '0';
              document.getElementById('ratingCount').textContent = profile.stats.rating || '0';
          }
      } catch (error) {
          console.error('Error loading profile:', error);
          // Use current user data from localStorage as fallback
          const user = API.Auth.getCurrentUser();
          if (user) {
              document.getElementById('profileName').textContent = user.name || 'User';
              document.getElementById('profileEmail').textContent = user.email || '';
              
              // Set avatar initials
              const initials = user.name ? user.name.split(' ').map(n => n[0]).join('') : 'U';
              document.getElementById('profileAvatar').textContent = initials;
          }
      }
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

  async function renderUserListings() {
      const container = document.getElementById('userListings');
      if (!container) return;
      
      // Show loading state
      container.innerHTML = '<div class="loading-indicator">Loading your listings...</div>';
      
      try {
          // Fetch user listings from API
          const userListings = await API.Listings.getMyListings();
          
          if (userListings.length > 0) {
              container.innerHTML = userListings.map(product => createProductCard(product)).join('');
              // Refresh lazy loading for new images
              refreshLazyLoading();
          } else {
              // No listings found
              container.innerHTML = '<div class="empty-state">You haven\'t posted any listings yet.</div>';
          }
      } catch (error) {
          console.error('Error fetching user listings:', error);
          
          // Fallback to sample data if API fails
          const fallbackListings = appData.sampleListings.filter(item => item.seller === currentUser?.name);
          
          if (fallbackListings.length > 0) {
              container.innerHTML = fallbackListings.map(product => createProductCard(product)).join('');
              // Refresh lazy loading for new images
              refreshLazyLoading();
          } else {
              container.innerHTML = '<div class="error-state">Could not load your listings. Please try again later.</div>';
          }
      }
  }

  async function renderWishlist() {
      const container = document.getElementById('wishlistItems');
      if (!container) return;
      
      // Show loading state
      container.innerHTML = '<div class="loading-indicator">Loading your wishlist...</div>';
      
      try {
          // Check if we have a wishlist API endpoint
          // For now, we'll use the local wishlist array and fetch each item
          if (wishlist.length > 0) {
              // Fetch each wishlist item by ID
              const wishlistPromises = wishlist.map(id => API.Listings.getById(id).catch(() => null));
              const wishlistResults = await Promise.all(wishlistPromises);
              
              // Filter out any failed requests
              const wishlistItems = wishlistResults.filter(item => item !== null);
              
              if (wishlistItems.length > 0) {
                  container.innerHTML = wishlistItems.map(product => createProductCard(product)).join('');
                  // Refresh lazy loading for new images
                  refreshLazyLoading();
              } else {
                  container.innerHTML = '<div class="empty-state">Your wishlist is empty.</div>';
              }
          } else {
              container.innerHTML = '<div class="empty-state">Your wishlist is empty.</div>';
          }
      } catch (error) {
          console.error('Error fetching wishlist:', error);
          
          // Fallback to sample data if API fails
          const fallbackItems = appData.sampleListings.filter(item => wishlist.includes(item.id));
          
          if (fallbackItems.length > 0) {
              container.innerHTML = fallbackItems.map(product => createProductCard(product)).join('');
              // Refresh lazy loading for new images
              refreshLazyLoading();
          } else {
              container.innerHTML = '<div class="error-state">Could not load your wishlist. Please try again later.</div>';
          }
      }
  }

  async function renderReviews() {
      const container = document.getElementById('reviewsContainer');
      if (!container) return;
      
      // Show loading state
      container.innerHTML = '<div class="loading-indicator">Loading reviews...</div>';
      
      try {
          // Check if we have a reviews API endpoint
          // For now, we'll use sample reviews as there's no endpoint yet
          // This would be replaced with an actual API call when available
          // const reviews = await API.Reviews.getUserReviews();
          
          // Sample reviews data
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
          
          if (reviews.length > 0) {
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
          } else {
              container.innerHTML = '<div class="empty-state">No reviews yet.</div>';
          }
      } catch (error) {
          console.error('Error fetching reviews:', error);
          container.innerHTML = '<div class="error-state">Could not load reviews. Please try again later.</div>';
      }
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

  // This function is now replaced by the main createProductCard function above
  // Keeping this comment as a reference

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
  
  // Initialize scroll to top buttons
  setupScrollToTop();
  
  // Auto-scroll functionality
  function setupAutoScroll() {
      const pauseBtn = document.getElementById('pauseScrollBtn');
      const playBtn = document.getElementById('playScrollBtn');
      const productsScroll = document.getElementById('featuredProducts');
      const scrollContainer = document.querySelector('.products-scroll-container');
      
      if (!pauseBtn || !playBtn || !productsScroll) return;
      
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
      
      // Mouse following movement
      if (scrollContainer) {
          scrollContainer.addEventListener('mousemove', (e) => {
              const rect = scrollContainer.getBoundingClientRect();
              mouseX = e.clientX - rect.left;
              updateScrollPosition();
          });
          
          scrollContainer.addEventListener('mouseenter', () => {
              // Don't pause on hover, just track mouse
          });
          
          scrollContainer.addEventListener('mouseleave', () => {
              // Continue auto-scroll when mouse leaves
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
      
      // Set speed class to normal
      productsScroll.classList.remove('slow', 'normal', 'fast');
      productsScroll.classList.add('normal');
      
      isAutoScrolling = true;
      
      // Add smooth scrolling indicator
      const container = document.querySelector('.products-scroll-container');
      if (container) {
          container.classList.add('auto-scrolling');
      }
  }
  
  function updateScrollPosition() {
      if (!isAutoScrolling) return;
      
      const scrollContainer = document.querySelector('.products-scroll-container');
      const productsScroll = document.getElementById('featuredProducts');
      
      if (!scrollContainer || !productsScroll) return;
      
      const containerWidth = scrollContainer.offsetWidth;
      const scrollWidth = productsScroll.scrollWidth;
      const maxScroll = scrollWidth - containerWidth;
      
      // Calculate scroll position based on mouse position
      const scrollPercent = mouseX / containerWidth;
      const targetScroll = scrollPercent * maxScroll;
      
      // Smooth scroll to target position
      scrollContainer.scrollTo({
          left: targetScroll,
          behavior: 'smooth'
      });
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
  
  // Scroll to Top Functionality
  function setupScrollToTop() {
      const browseScrollBtn = document.getElementById('browseScrollToTop');
      const servicesScrollBtn = document.getElementById('servicesScrollToTop');
      
      // Browse page scroll to top
      if (browseScrollBtn) {
          browseScrollBtn.addEventListener('click', () => {
              window.scrollTo({ top: 0, behavior: 'smooth' });
          });
      }
      
      // Services page scroll to top
      if (servicesScrollBtn) {
          servicesScrollBtn.addEventListener('click', () => {
              window.scrollTo({ top: 0, behavior: 'smooth' });
          });
      }
      
      // Show/hide scroll to top buttons based on scroll position
      window.addEventListener('scroll', () => {
          const scrollY = window.scrollY;
          const showThreshold = 300;
          
          // Show browse scroll to top when on browse page and scrolled down
          if (browseScrollBtn && currentPage === 'browse') {
              if (scrollY > showThreshold) {
                  browseScrollBtn.classList.add('visible');
              } else {
                  browseScrollBtn.classList.remove('visible');
              }
          } else if (browseScrollBtn) {
              browseScrollBtn.classList.remove('visible');
          }
          
          // Show services scroll to top when on services page and scrolled down
          if (servicesScrollBtn && currentPage === 'services') {
              if (scrollY > showThreshold) {
                  servicesScrollBtn.classList.add('visible');
              } else {
                  servicesScrollBtn.classList.remove('visible');
              }
          } else if (servicesScrollBtn) {
              servicesScrollBtn.classList.remove('visible');
          }
      });
  }