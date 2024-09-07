const mobileMenuIcon = document.querySelector('.mobile-menu-icon');
const navLinks = document.querySelector('.nav-links');

mobileMenuIcon.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});


let currentIndex = 0;

function showSlide(index) {
    const sliderContainer = document.querySelector('.slider-container');
    const slides = document.querySelectorAll('.slide');
    const totalSlides = slides.length;

    // Ensure index is within bounds
    if (index >= totalSlides - 2) {
        currentIndex = totalSlides - 3; // Adjust for the last full set
    } else if (index < 0) {
        currentIndex = 0;
    } else {
        currentIndex = index;
    }

    // Adjust the transform value to show the right set of slides
    sliderContainer.style.transform = `translateX(-${currentIndex * (100 / 3)}%)`;
}

function nextSlide() {
    showSlide(currentIndex + 1);
}

function prevSlide() {
    showSlide(currentIndex - 1);
}

window.onload = function() {
    showSlide(currentIndex);
}


let currentIndex = 0;
const reviews = document.querySelectorAll('.review');
const totalReviews = reviews.length;

function showReview(index) {
    const offset = index * -100;
    reviews.forEach(review => {
        review.style.transform = `translateX(${offset}%)`;
    });
}

function prevReview() {
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : totalReviews - 1;
    showReview(currentIndex);
}

function nextReview() {
    currentIndex = (currentIndex < totalReviews - 1) ? currentIndex + 1 : 0;
    showReview(currentIndex);
}


// JavaScript can be added here for dynamic behavior (optional)
document.querySelector('.read-more').addEventListener('click', function(e) {
    e.preventDefault();
    alert('More content coming soon!');
  });
  