// Example JavaScript to hide the loader and disable the loader CSS once the page is fully loaded
window.addEventListener('load', () => {
    const loader = document.getElementById('loader');
    const loaderCss = document.getElementById('loader-css');
    
    // Hide the loader
    loader.style.display = 'none';
    
    // Disable the loader CSS
    if (loaderCss) {
        loaderCss.disabled = true;
    }
});