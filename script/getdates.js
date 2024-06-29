document.addEventListener('DOMContentLoaded', (event) => {
    // Set the current year dynamically
    document.getElementById('2024').textContent = new Date().getFullYear();

    // Set the last modified date dynamically
    document.getElementById('lastModified').textContent = 'Last Modified: ' + document.lastModified;
});
