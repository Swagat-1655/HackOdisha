// Initialize the map and global variables
let map;
let marker;
let userLocation = null;
let selectedLocation = null;
let uploadedFiles = [];
let maxFileSize = 5 * 1024 * 1024; // 5MB max file size
let maxFiles = 5; // Maximum number of files allowed

// Initialize the report page when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize components
    initMap();
    initPhotoUpload();
    initFormValidation();
    initLocationSearch();
    initDescriptionBox();
    
    // Set up form validation
    setupFormValidation();
    
    // Initialize description box functionality
    function initDescriptionBox() {
        const descriptionTextarea = document.getElementById('description');
        const charCount = document.getElementById('char-count');
        const suggestionTags = document.querySelectorAll('.suggestion-tag');
        const maxLength = descriptionTextarea ? parseInt(descriptionTextarea.getAttribute('maxlength')) || 500 : 500;
        
        // Character counter
        if (descriptionTextarea && charCount) {
            // Update counter on page load
            updateCharCount(descriptionTextarea, charCount, maxLength);
            
            // Add input event listener
            descriptionTextarea.addEventListener('input', function() {
                updateCharCount(this, charCount, maxLength);
            });
        }
        
        // Suggestion tags
        suggestionTags.forEach(tag => {
            tag.addEventListener('click', function() {
                if (!descriptionTextarea) return;
                
                const textToAdd = this.getAttribute('data-text');
                const start = descriptionTextarea.selectionStart;
                const end = descriptionTextarea.selectionEnd;
                const text = descriptionTextarea.value;
                const beforeText = text.substring(0, start);
                const afterText = text.substring(end, text.length);
                
                // Add comma if there's text before and it doesn't end with a space or newline
                let prefix = '';
                if (beforeText.length > 0 && !/\s$/.test(beforeText)) {
                    prefix = ', ';
                } else if (beforeText.length > 0) {
                    // If it ends with a space, just add a space
                    prefix = ' ';
                }
                
                const newText = beforeText + prefix + textToAdd + ' ' + afterText;
                
                // Ensure we don't exceed max length
                if (newText.length <= maxLength) {
                    descriptionTextarea.value = newText;
                    
                    // Set cursor position after the inserted text
                    const newCursorPos = start + prefix.length + textToAdd.length + 1;
                    descriptionTextarea.selectionStart = descriptionTextarea.selectionEnd = newCursorPos;
                    
                    // Trigger input event to update character count
                    const event = new Event('input');
                    descriptionTextarea.dispatchEvent(event);
                } else {
                    // Show error if adding text would exceed max length
                    const remaining = maxLength - text.length;
                    alert(`Cannot add text. You only have ${remaining} characters remaining.`);
                }
                
                // Focus back on the textarea
                descriptionTextarea.focus();
            });
        });
        
        // Helper function to update character count
        function updateCharCount(textarea, counter, max) {
            const currentLength = textarea.value.length;
            counter.textContent = currentLength;
            
            // Update counter color based on length
            counter.className = '';
            if (currentLength > max * 0.8) {
                counter.classList.add('warning');
                if (currentLength > max * 0.9) {
                    counter.classList.add('error');
                }
            }
            
            // Update word count class for styling
            const wordCountElement = textarea.closest('.description-box')?.querySelector('.word-count');
            if (wordCountElement) {
                wordCountElement.className = 'word-count';
                if (currentLength > max * 0.8) {
                    wordCountElement.classList.add('warning');
                    if (currentLength > max * 0.9) {
                        wordCountElement.classList.add('error');
                    }
                }
            }
        }
    }
    
    // Add loading state to the form
    const form = document.getElementById('report-form');
    if (form) {
        form.classList.add('form-loading');
        
        // Simulate loading (remove in production)
        setTimeout(() => {
            form.classList.remove('form-loading');
        }, 1000);
    }
    
    // Add animation to form elements
    animateFormElements();
});

// Initialize the map with Leaflet.js
function initMap() {
    // Default coordinates (Bhubaneswar, India)
    const defaultLat = 20.2961;
    const defaultLng = 85.8245;
    const defaultZoom = 13;
    
    // Set initial location
    selectedLocation = {
        lat: defaultLat,
        lng: defaultLng,
        address: 'Bhubaneswar, Odisha, India'
    };
    
    // Initialize the map with dark theme
    map = L.map('map', {
        center: [defaultLat, defaultLng],
        zoom: defaultZoom,
        zoomControl: false,
        attributionControl: false
    }).setView([defaultLat, defaultLng], defaultZoom);
    
    // Add custom zoom control
    L.control.zoom({
        position: 'bottomright'
    }).addTo(map);
    
    // Add dark theme tile layer
    L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
        attribution: '© OpenStreetMap contributors © CartoDB',
        maxZoom: 19,
        subdomains: 'abcd',
        noWrap: true
    }).addTo(map);
    
    // Add scale control
    L.control.scale({
        imperial: false,
        metric: true,
        position: 'bottomleft'
    }).addTo(map);
    
    // Add a custom draggable marker with pulsing effect
    const pulsingIcon = L.divIcon({
        className: 'pulsing-marker',
        iconSize: [32, 32],
        iconAnchor: [16, 32],
        popupAnchor: [0, -32],
        html: `
            <div class="pulse"></div>
            <div class="marker-icon">
                <i class="fas fa-map-marker-alt"></i>
            </div>
        `
    });
    
    // Create marker with custom icon
    marker = L.marker([defaultLat, defaultLng], {
        draggable: true,
        icon: pulsingIcon,
        zIndexOffset: 1000
    }).addTo(map);
    
    // Update hidden form fields when marker is moved
    marker.on('dragend', function(e) {
        updateLocationFields(marker.getLatLng().lat, marker.getLatLng().lng);
    });
    
    // Update marker position when clicking on the map
    map.on('click', async function(e) {
        const { lat, lng } = e.latlng;
        marker.setLatLng(e.latlng);
        
        // Get address from coordinates (reverse geocoding)
        try {
            const response = await fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}&addressdetails=1`);
            const data = await response.json();
            
            if (data.display_name) {
                selectedLocation.address = data.display_name;
                updateLocationFields(lat, lng, data.display_name);
            } else {
                updateLocationFields(lat, lng);
            }
        } catch (error) {
            console.error('Error getting address:', error);
            updateLocationFields(lat, lng);
        }
    });
    
    // Initialize location fields with default values
    updateLocationFields(defaultLat, defaultLng);
    
    // Set up the "Use My Location" button
    document.getElementById('use-location').addEventListener('click', function() {
        if (navigator.geolocation) {
            const button = this;
            const originalText = button.innerHTML;
            
            // Show loading state
            button.disabled = true;
            button.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Locating...';
            
            navigator.geolocation.getCurrentPosition(
                function(position) {
                    const userLat = position.coords.latitude;
                    const userLng = position.coords.longitude;
                    
                    // Update map view and marker
                    map.setView([userLat, userLng], 16);
                    marker.setLatLng([userLat, userLng]);
                    updateLocationFields(userLat, userLng);
                    
                    // Store user location for future use
                    userLocation = { lat: userLat, lng: userLng };
                    
                    // Restore button
                    button.disabled = false;
                    button.innerHTML = originalText;
                },
                function(error) {
                    console.error('Error getting location:', error);
                    alert('Unable to retrieve your location. Please make sure location services are enabled.');
                    
                    // Restore button
                    button.disabled = false;
                    button.innerHTML = originalText;
                },
                {
                    enableHighAccuracy: true,
                    timeout: 10000,
                    maximumAge: 0
                }
            );
        } else {
            alert('Geolocation is not supported by your browser.');
        }
    });
    
    // Set up the search location button
    document.getElementById('search-location').addEventListener('click', function() {
        const query = prompt('Enter a location to search:');
        if (query) {
            searchLocation(query);
        }
    });
}

// Update the hidden form fields with latitude, longitude, and address
function updateLocationFields(lat, lng, address = '') {
    document.getElementById('latitude').value = lat;
    document.getElementById('longitude').value = lng;
    
    // Update the location display if address is provided
    const locationDisplay = document.getElementById('location-display');
    if (locationDisplay) {
        locationDisplay.textContent = address || `Lat: ${lat.toFixed(6)}, Lng: ${lng.toFixed(6)}`;
    }
    
    // Update selected location
    selectedLocation = { lat, lng, address };
    
    // Validate location
    validateLocation();
}

// Search for a location using OpenStreetMap Nominatim
function searchLocation(query) {
    const button = document.getElementById('search-location');
    const originalText = button.innerHTML;
    
    // Show loading state
    button.disabled = true;
    button.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Searching...';
    
    // Use Nominatim for geocoding
    fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(query)}`)
        .then(response => response.json())
        .then(data => {
            if (data && data.length > 0) {
                const result = data[0];
                const lat = parseFloat(result.lat);
                const lng = parseFloat(result.lon);
                
                // Update map view and marker
                map.setView([lat, lng], 16);
                marker.setLatLng([lat, lng]);
                updateLocationFields(lat, lng);
            } else {
                alert('Location not found. Please try a different search term.');
            }
        })
        .catch(error => {
            console.error('Error searching for location:', error);
            alert('An error occurred while searching for the location. Please try again.');
        })
        .finally(() => {
            // Restore button
            button.disabled = false;
            button.innerHTML = originalText;
        });
}

// Initialize photo upload functionality with drag and drop
function initPhotoUpload() {
    const uploadArea = document.getElementById('upload-area');
    const fileInput = document.getElementById('photos');
    const previewContainer = document.getElementById('preview-container');
    const fileCounter = document.getElementById('file-counter');
    
    // Update file counter
    const updateFileCounter = () => {
        if (fileCounter) {
            fileCounter.textContent = `${uploadedFiles.length} of ${maxFiles} files`;
            fileCounter.style.display = uploadedFiles.length > 0 ? 'block' : 'none';
        }
    };
    
    // Initialize file counter
    updateFileCounter();
    
    // Handle drag and drop
    ['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
        uploadArea.addEventListener(eventName, preventDefaults, false);
    });
    
    function preventDefaults(e) {
        e.preventDefault();
        e.stopPropagation();
    }
    
    // Highlight drop area when item is dragged over it
    ['dragenter', 'dragover'].forEach(eventName => {
        uploadArea.addEventListener(eventName, highlight, false);
    });
    
    ['dragleave', 'drop'].forEach(eventName => {
        uploadArea.addEventListener(eventName, unhighlight, false);
    });
    
    function highlight() {
        uploadArea.classList.add('highlight');
    }
    
    function unhighlight() {
        uploadArea.classList.remove('highlight');
    }
    
    // Handle dropped files
    uploadArea.addEventListener('drop', handleDrop, false);
    
    function handleDrop(e) {
        e.preventDefault();
        e.stopPropagation();
        uploadArea.classList.remove('dragover');
        
        const dt = e.dataTransfer;
        const droppedFiles = Array.from(dt.files);
        
        // Filter only image files
        const imageFiles = droppedFiles.filter(file => file.type.startsWith('image/'));
        
        if (imageFiles.length === 0) {
            showNotification('Please upload only image files', 'error');
            return;
        }
        
        handleFiles(imageFiles);
    }
    
    // Handle file input change
    fileInput.addEventListener('change', function() {
        if (this.files.length > 0) {
            const files = Array.from(this.files);
            const imageFiles = files.filter(file => file.type.startsWith('image/'));
            
            if (imageFiles.length === 0) {
                showNotification('Please upload only image files', 'error');
                return;
            }
            
            handleFiles(imageFiles);
        }
    });
    
    // Process selected files
    async function handleFiles(selectedFiles) {
        // Check if adding these files would exceed the limit
        if (uploadedFiles.length + selectedFiles.length > maxFiles) {
            showNotification(`You can upload a maximum of ${maxFiles} photos.`, 'error');
            return;
        }
        
        // Process each file
        for (const file of selectedFiles) {
            // Check file size
            if (file.size > maxFileSize) {
                showNotification(`File ${file.name} is too large (max 5MB)`, 'error');
                continue;
            }
            
            // Create a preview of the image
            try {
                const processedFile = await processImageFile(file);
                uploadedFiles.push(processedFile);
            } catch (error) {
                console.error('Error processing file:', error);
                showNotification(`Error processing ${file.name}`, 'error');
            }
        }
        
        // Update the file input and preview
        updateFileInput();
        updatePreview();
        updateFileCounter();
    }
    
    // Process image file (resize if needed)
    function processImageFile(file) {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            
            reader.onload = function(e) {
                const img = new Image();
                img.onload = function() {
                    // Check if resizing is needed (max width: 1200px)
                    const maxWidth = 1200;
                    let width = img.width;
                    let height = img.height;
                    
                    if (width > maxWidth) {
                        height = Math.round((height * maxWidth) / width);
                        width = maxWidth;
                    }
                    
                    // Create canvas for resizing
                    const canvas = document.createElement('canvas');
                    canvas.width = width;
                    canvas.height = height;
                    const ctx = canvas.getContext('2d');
                    
                    // Draw image on canvas
                    ctx.drawImage(img, 0, 0, width, height);
                    
                    // Convert to blob
                    canvas.toBlob(blob => {
                        if (!blob) {
                            reject(new Error('Canvas to blob conversion failed'));
                            return;
                        }
                        
                        // Create a new file with the resized image
                        const resizedFile = new File(
                            [blob],
                            file.name,
                            { type: 'image/jpeg', lastModified: Date.now() }
                        );
                        
                        resolve({
                            file: resizedFile,
                            preview: URL.createObjectURL(blob),
                            name: file.name,
                            size: blob.size,
                            type: blob.type
                        });
                    }, 'image/jpeg', 0.85); // 0.85 quality for JPEG
                };
                
                img.onerror = function() {
                    reject(new Error('Failed to load image'));
                };
                
                img.src = e.target.result;
            };
            
            reader.onerror = function() {
                reject(new Error('Failed to read file'));
            };
            
            reader.readAsDataURL(file);
        });
    }
    
    // Update the file input with the current files
    function updateFileInput() {
        const dataTransfer = new DataTransfer();
        uploadedFiles.forEach(item => dataTransfer.items.add(item.file));
        fileInput.files = dataTransfer.files;
    }
    
    // Update the preview container
    function updatePreview() {
        // Clear existing previews
        previewContainer.innerHTML = '';
        
        if (uploadedFiles.length === 0) {
            previewContainer.style.display = 'none';
            return;
        }
        
        previewContainer.style.display = 'grid';
        
        // Add preview for each file
        uploadedFiles.forEach((item, index) => {
            const previewItem = document.createElement('div');
            previewItem.className = 'preview-item';
            
            const img = document.createElement('img');
            img.src = item.preview;
            img.alt = 'Preview ' + (index + 1);
            img.loading = 'lazy';
            
            const removeBtn = document.createElement('button');
            removeBtn.className = 'remove-image';
            removeBtn.setAttribute('aria-label', 'Remove image');
            removeBtn.innerHTML = '&times;';
            removeBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                removeImage(index);
            });
            
            // Add tooltip for image info
            const fileInfo = document.createElement('div');
            fileInfo.className = 'file-info';
            fileInfo.innerHTML = `
                <span>${formatFileSize(item.size)}</span>
                <span>${item.type.split('/')[1]?.toUpperCase() || 'IMAGE'}</span>
            `;
            
            previewItem.appendChild(img);
            previewItem.appendChild(removeBtn);
            previewItem.appendChild(fileInfo);
            previewContainer.appendChild(previewItem);
        });
        
        // Add click to view larger image
        document.querySelectorAll('.preview-item img').forEach((img, index) => {
            img.addEventListener('click', () => viewImage(index));
        });
    }
    
    // Format file size
    function formatFileSize(bytes) {
        if (bytes === 0) return '0 Bytes';
        const k = 1024;
        const sizes = ['Bytes', 'KB', 'MB', 'GB'];
        const i = Math.floor(Math.log(bytes) / Math.log(k));
        return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
    }
    
    // View image in a lightbox
    function viewImage(index) {
        if (!uploadedFiles[index]) return;
        
        const lightbox = document.createElement('div');
        lightbox.className = 'lightbox';
        lightbox.innerHTML = `
            <div class="lightbox-content">
                <img src="${uploadedFiles[index].preview}" alt="Preview ${index + 1}">
                <button class="close-lightbox" aria-label="Close">&times;</button>
                <button class="prev-image" aria-label="Previous image">&lsaquo;</button>
                <button class="next-image" aria-label="Next image">&rsaquo;</button>
            </div>
        `;
        
        document.body.appendChild(lightbox);
        document.body.style.overflow = 'hidden';
        
        // Close lightbox
        const closeBtn = lightbox.querySelector('.close-lightbox');
        closeBtn.addEventListener('click', () => {
            document.body.removeChild(lightbox);
            document.body.style.overflow = '';
        });
        
        // Navigation between images
        const prevBtn = lightbox.querySelector('.prev-image');
        const nextBtn = lightbox.querySelector('.next-image');
        
        if (uploadedFiles.length <= 1) {
            prevBtn.style.display = 'none';
            nextBtn.style.display = 'none';
        } else {
            // Previous image
            prevBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                document.body.removeChild(lightbox);
                viewImage((index - 1 + uploadedFiles.length) % uploadedFiles.length);
            });
            
            // Next image
            nextBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                document.body.removeChild(lightbox);
                viewImage((index + 1) % uploadedFiles.length);
            });
            
            // Keyboard navigation
            document.addEventListener('keydown', function handleKeydown(e) {
                if (e.key === 'ArrowLeft') {
                    document.body.removeChild(lightbox);
                    viewImage((index - 1 + uploadedFiles.length) % uploadedFiles.length);
                } else if (e.key === 'ArrowRight') {
                    document.body.removeChild(lightbox);
                    viewImage((index + 1) % uploadedFiles.length);
                } else if (e.key === 'Escape') {
                    document.body.removeChild(lightbox);
                    document.body.style.overflow = '';
                    document.removeEventListener('keydown', handleKeydown);
                }
            });
        }
        
        // Close when clicking outside the image
        lightbox.addEventListener('click', (e) => {
            if (e.target === lightbox) {
                document.body.removeChild(lightbox);
                document.body.style.overflow = '';
            }
        });
    }
    
    // Remove an image from the files array and update the preview
    function removeImage(index) {
        // Revoke object URL to free memory
        if (uploadedFiles[index]?.preview) {
            URL.revokeObjectURL(uploadedFiles[index].preview);
        }
        
        uploadedFiles.splice(index, 1);
        updateFileInput();
        updatePreview();
        updateFileCounter();
        
        // Show notification
        showNotification('Image removed', 'success');
    }
}

// Initialize form submission
function initFormSubmission() {
    const form = document.getElementById('report-form');
    
    form.addEventListener('submit', async function(e) {
        e.preventDefault();
        
        // Validate required fields
        const requiredFields = form.querySelectorAll('[required]');
        let isValid = true;
        
        requiredFields.forEach(field => {
            if (!field.value.trim()) {
                field.classList.add('error');
                isValid = false;
            } else {
                field.classList.remove('error');
            }
        });
        
        // Check if at least one photo is uploaded
        const fileInput = document.getElementById('photos');
        if (fileInput.files.length === 0) {
            alert('Please upload at least one photo.');
            return;
        }
        
        if (!isValid) {
            alert('Please fill in all required fields.');
            return;
        }
        
        // Prepare form data
        const formData = new FormData(form);
        
        // Get the submit button
        const submitButton = form.querySelector('button[type="submit"]');
        const originalButtonText = submitButton.innerHTML;
        
        try {
            // Show loading state
            submitButton.disabled = true;
            submitButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Submitting...';
            
            // In a real application, you would send this data to your backend
            console.log('Form data:', Object.fromEntries(formData));
            
            // Simulate API call
            await new Promise(resolve => setTimeout(resolve, 1500));
            
            // Show success message
            alert('Thank you for your report! We will review it shortly.');
            
            // Reset the form
            form.reset();
            document.getElementById('preview-container').innerHTML = '';
            
            // Reset files array
            files = [];
            
        } catch (error) {
            console.error('Error submitting form:', error);
            alert('There was an error submitting your report. Please try again.');
        } finally {
            // Restore button
            submitButton.disabled = false;
            submitButton.innerHTML = originalButtonText;
        }
    });
    
    // Remove error class when user starts typing in a field
    form.querySelectorAll('input, textarea, select').forEach(field => {
        field.addEventListener('input', function() {
            if (this.value.trim()) {
                this.classList.remove('error');
            }
        });
    });
}
