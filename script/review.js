document.addEventListener('DOMContentLoaded', (event) => {
    // Set the current year dynamically
    document.getElementById('2024').textContent = new Date().getFullYear();

    // Set the last modified date dynamically
    document.getElementById('lastModified').textContent = 'Last Modified: ' + document.lastModified;
});
document.addEventListener('DOMContentLoaded', () => {
    const yearSpan = document.getElementById('currentYear');
    const lastModifiedSpan = document.getElementById('lastModified');

    // Set the current year
    const currentYear = new Date().getFullYear();
    yearSpan.textContent = currentYear;

    // Set the last modified date
    const lastModified = new Date(document.lastModified);
    lastModifiedSpan.textContent = `Last modified: ${lastModified.toLocaleDateString()} ${lastModified.toLocaleTimeString()}`;
});
const products = [
    { id: 'fc-1888', name: 'flux capacitor', avgRating: 4.5 },
    { id: 'fc-2050', name: 'power laces', avgRating: 4.7 },
    { id: 'fs-1987', name: 'time circuits', avgRating: 3.5 },
    { id: 'ac-2000', name: 'low voltage reactor', avgRating: 3.9 },
    { id: 'jj-1969', name: 'warp equalizer', avgRating: 5.0 }
];

document.addEventListener('DOMContentLoaded', () => {
    const productSelect = document.getElementById('product');
    products.forEach(product => {
        const option = document.createElement('option');
        option.value = product.id;
        option.textContent = product.name;
        productSelect.appendChild(option);
    });

    // Check if we are on the review.html page
    if (window.location.pathname.includes('review.html')) {
        // Increment review count in localStorage
        let reviewCount = localStorage.getItem('reviewCount');
        reviewCount = reviewCount ? parseInt(reviewCount) + 1 : 1;
        localStorage.setItem('reviewCount', reviewCount);

        // Display review count
        document.getElementById('review-count').textContent = reviewCount;
    }
});
const urlParams = new URLSearchParams(window.location.search);
const reviewDetails = document.getElementById('review-details');

const product = urlParams.get('product');
const rating = urlParams.get('rating');
const date = urlParams.get('date');
const features = urlParams.getAll('features').join(', ');
const review = urlParams.get('review');
const username = urlParams.get('username');

reviewDetails.innerHTML = `
        <p><strong>Product:</strong> ${product}</p>
        <p><strong>Rating:</strong> ${rating}</p>
        <p><strong>Date of Installation:</strong> ${date}</p>
        <p><strong>Useful Features:</strong> ${features}</p>
        <p><strong>Review:</strong> ${review}</p>
        <p><strong>Username:</strong> ${username}</p>
    `;

// Get the current review count from localStorage, or initialize it to 0 if it doesn't exist
let reviewCount = localStorage.getItem('reviewCount');
if (reviewCount === null) {
    reviewCount = 0;
} else {
    reviewCount = parseInt(reviewCount, 10);
}

// Increment the review count
reviewCount++;

// Store the new review count back to localStorage
localStorage.setItem('reviewCount', reviewCount);

// Create a new paragraph element to display the review count
const counterElement = document.createElement('p');
counterElement.textContent = `Total reviews submitted: ${reviewCount}`;

// Append the counter element to the review details section
reviewDetails.appendChild(counterElement);

