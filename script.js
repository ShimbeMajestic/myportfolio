document.addEventListener('DOMContentLoaded', function() {
    let header = document.querySelector('header');
    let images = [
        './Images/back1.png',
        './Images/back2.png',
        './Images/back3.png',
        './Images/back4.png'
    ];
    let currentIndex = 0;

    // Function to change the background every 5 seconds
    function changeBackground() {
        header.style.backgroundImage = `url(${images[currentIndex]})`;
        currentIndex = (currentIndex + 1) % images.length;
    }

    // Initial background change
    changeBackground();
    
    // Set interval for auto background change
    setInterval(changeBackground, 5000);
});
