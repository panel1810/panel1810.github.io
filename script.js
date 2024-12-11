// Teks Ketikan
const typewriterText = "Hello, I'm Steven. Welcome to my Portfolio!";
let index = 0;

function typeWriter() {
  if (index < typewriterText.length) {
    document.getElementById("typewriter").innerHTML += typewriterText.charAt(index);
    index++;
    setTimeout(typeWriter, 100);
  }
}

typeWriter();

// Carousel Functionality
let carouselIndex = 0;
const carousel = document.querySelector('.carousel-container');

function moveCarousel(direction) {
  const images = document.querySelectorAll('.carousel img');
  const imageWidth = images[0].clientWidth + 20; // Include margin
  if (direction === 'next') {
    carouselIndex = (carouselIndex + 1) % images.length;
  } else {
    carouselIndex = (carouselIndex - 1 + images.length) % images.length;
  }
  carousel.style.transform = `translateX(-${carouselIndex * imageWidth}px)`;
}

setInterval(() => moveCarousel('next'), 3000); // Auto-slide
