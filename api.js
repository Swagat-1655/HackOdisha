// API Service for CampusXchange

const API_BASE_URL = 'http://localhost:3000/api';

// Helper function to handle fetch requests
async function fetchAPI(endpoint, options = {}) {
    const url = `${API_BASE_URL}${endpoint}`;
    
    // Default headers
    const headers = {
        'Content-Type': 'application/json',
        ...options.headers
    };
    
    // Add authorization token if available
    const token = localStorage.getItem('token');
    if (token) {
        headers['Authorization'] = token;
    }
    
    // Prepare fetch options
    const fetchOptions = {
        ...options,
        headers
    };
    
    try {
        const response = await fetch(url, fetchOptions);
        
        // Handle non-2xx responses
        if (!response.ok) {
            const errorData = await response.json().catch(() => ({
                message: 'An error occurred while processing your request'
            }));
            throw new Error(errorData.message || 'Request failed');
        }
        
        // Parse JSON response if available
        const contentType = response.headers.get('content-type');
        if (contentType && contentType.includes('application/json')) {
            return await response.json();
        }
        
        return await response.text();
    } catch (error) {
        console.error('API request failed:', error);
        throw error;
    }
}

// Authentication API
const AuthAPI = {
    // Register a new user
    register: async (userData) => {
        return await fetchAPI('/register', {
            method: 'POST',
            body: JSON.stringify(userData)
        });
    },
    
    // Login user
    login: async (credentials) => {
        const response = await fetchAPI('/login', {
            method: 'POST',
            body: JSON.stringify(credentials)
        });
        
        // Store token in localStorage
        if (response.token) {
            localStorage.setItem('token', response.token);
            localStorage.setItem('user', JSON.stringify(response.user));
        }
        
        return response;
    },
    
    // Logout user
    logout: () => {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
    },
    
    // Get current user profile
    getProfile: async () => {
        return await fetchAPI('/profile');
    },
    
    // Check if user is authenticated
    isAuthenticated: () => {
        return !!localStorage.getItem('token');
    },
    
    // Get current user data
    getCurrentUser: () => {
        const user = localStorage.getItem('user');
        return user ? JSON.parse(user) : null;
    }
};

// Listings API
const ListingsAPI = {
    // Get all listings
    getAll: async () => {
        return await fetchAPI('/listings');
    },
    
    // Get a specific listing by ID
    getById: async (id) => {
        return await fetchAPI(`/listings/${id}`);
    },
    
    // Create a new listing
    create: async (listingData) => {
        // Handle file uploads with FormData
        const formData = new FormData();
        
        // Add all text fields
        Object.keys(listingData).forEach(key => {
            if (key !== 'images') {
                formData.append(key, listingData[key]);
            }
        });
        
        // Add images if available
        if (listingData.images && listingData.images.length > 0) {
            listingData.images.forEach(image => {
                formData.append('images', image);
            });
        }
        
        return await fetchAPI('/listings', {
            method: 'POST',
            headers: {}, // Let browser set content-type for FormData
            body: formData
        });
    },
    
    // Update a listing
    update: async (id, listingData) => {
        // Handle file uploads with FormData
        const formData = new FormData();
        
        // Add all text fields
        Object.keys(listingData).forEach(key => {
            if (key !== 'image') {
                formData.append(key, listingData[key]);
            }
        });
        
        // Add image if available
        if (listingData.image) {
            formData.append('image', listingData.image);
        }
        
        return await fetchAPI(`/listings/${id}`, {
            method: 'PUT',
            headers: {}, // Let browser set content-type for FormData
            body: formData
        });
    },
    
    // Delete a listing
    delete: async (id) => {
        return await fetchAPI(`/listings/${id}`, {
            method: 'DELETE'
        });
    },
    
    // Get user's own listings
    getMyListings: async () => {
        return await fetchAPI('/mylistings');
    },
    
    // Search listings
    search: async (params) => {
        const queryParams = new URLSearchParams();
        
        // Add search parameters
        if (params.title) queryParams.append('title', params.title);
        if (params.minPrice) queryParams.append('minPrice', params.minPrice);
        if (params.maxPrice) queryParams.append('maxPrice', params.maxPrice);
        
        return await fetchAPI(`/listings/search?${queryParams.toString()}`);
    }
};

// Orders API
const OrdersAPI = {
    // Create a new order
    create: async (listingId) => {
        return await fetchAPI('/orders', {
            method: 'POST',
            body: JSON.stringify({ listingId })
        });
    },
    
    // Get user's orders
    getMyOrders: async () => {
        return await fetchAPI('/orders');
    }
};

// Services API
const ServicesAPI = {
    // Get all services
    getAll: async () => {
        return await fetchAPI('/services');
    },
    
    // Get a specific service by ID
    getById: async (id) => {
        return await fetchAPI(`/services/${id}`);
    },
    
    // Create a new service
    create: async (serviceData) => {
        return await fetchAPI('/services', {
            method: 'POST',
            body: JSON.stringify(serviceData)
        });
    }
};

// Wishlist API
const WishlistAPI = {
    // Add item to wishlist
    add: async (listingId) => {
        return await fetchAPI(`/wishlist/${listingId}`, {
            method: 'POST'
        });
    },
    
    // Get user's wishlist
    getAll: async () => {
        return await fetchAPI('/wishlist');
    },
    
    // Remove item from wishlist
    remove: async (listingId) => {
        return await fetchAPI(`/wishlist/${listingId}`, {
            method: 'DELETE'
        });
    }
};

// Reviews API
const ReviewsAPI = {
    // Add a review
    add: async (listingId, reviewData) => {
        return await fetchAPI(`/reviews/${listingId}`, {
            method: 'POST',
            body: JSON.stringify(reviewData)
        });
    },
    
    // Get reviews for a listing
    getForListing: async (listingId) => {
        return await fetchAPI(`/reviews/${listingId}`);
    }
};

// Messages API
const MessagesAPI = {
    // Socket.io instance
    socket: null,
    
    // Initialize socket connection
    init: function() {
        if (this.socket) return; // Already initialized
        
        // Create socket connection
        this.socket = io('http://localhost:3000');
        
        // Handle connection events
        this.socket.on('connect', () => {
            console.log('Socket connected:', this.socket.id);
            
            // Join user's room if authenticated
            const user = AuthAPI.getCurrentUser();
            if (user) {
                const userId = user.userId || user.id;
                if (userId) {
                    this.socket.emit('join', userId);
                }
            }
        });
        
        this.socket.on('disconnect', () => {
            console.log('Socket disconnected');
        });
        
        this.socket.on('error', (error) => {
            console.error('Socket error:', error);
        });
        
        return this.socket;
    },
    
    // Send a message to another user
    sendMessage: async (receiverId, message) => {
        const user = AuthAPI.getCurrentUser();
        if (!user) {
            throw new Error('User not authenticated');
        }
        
        const userId = user.userId || user.id;
        if (!userId) {
            throw new Error('User ID not found');
        }
        
        // Send message via socket
        MessagesAPI.socket.emit('message', {
            sender: userId,
            receiver: receiverId,
            message: message
        });
        
        // Also save via API for redundancy
        return await fetchAPI(`/messages/${receiverId}`, {
            method: 'POST',
            body: JSON.stringify({ message })
        });
    },
    
    // Register message listener
    onMessage: function(callback) {
        if (!this.socket) {
            this.init();
        }
        
        this.socket.on('message', (message) => {
            callback(message);
        });
    },
    
    // Get conversation with a user
    getConversation: async (userId) => {
        return await fetchAPI(`/messages/${userId}`);
    },
    
    // Get all conversations
    getAllConversations: async () => {
        return await fetchAPI('/conversations');
    }
};

// Export all API services
const API = {
    Auth: AuthAPI,
    Listings: ListingsAPI,
    Orders: OrdersAPI,
    Services: ServicesAPI,
    Wishlist: WishlistAPI,
    Reviews: ReviewsAPI,
    Messages: MessagesAPI
};

// Make API available globally
window.API = API;