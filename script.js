const homePage = document.getElementById('home-page');
const quotesPage = document.getElementById('quotes-page');
const surpriseButton = document.getElementById('surprise-button');
const goBackButton = document.getElementById('go-back-button');
const slides = document.querySelectorAll('.slide');
const music = document.getElementById('background-music');

let currentSlide = 0;

// Slideshow functionality
function showNextSlide() {
  slides[currentSlide].classList.remove('active');
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].classList.add('active');
}

setInterval(showNextSlide, 3000);

// Navigation to Quotes Page
surpriseButton.addEventListener('click', () => {
  homePage.classList.add('hidden');
  quotesPage.classList.remove('hidden');
  music.play();
});

// Navigation back to Home Page
goBackButton.addEventListener('click', () => {
  quotesPage.classList.add('hidden');
  homePage.classList.remove('hidden');
  music.pause();
  music.currentTime = 0;
});
