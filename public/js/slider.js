const images = document.querySelectorAll('.container img');
const modal = document.querySelector('.modal');
const description = document.querySelector('.description');
const slider = document.querySelector('.slider');
const slide = document.querySelector('.slide');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
const close = document.querySelector('.close');

let currentSlide = 0;

images.forEach(image => {
  image.addEventListener('click', () => {
    modal.style.display = 'block';
    description.innerHTML = image.getAttribute('data-description');
    let slides = image.getAttribute('data-slider').split(',');
    slide.src = slides[currentSlide];

    prev.addEventListener('click', () => {
      currentSlide--;
      if (currentSlide < 0) {
        currentSlide = slides.length - 1;
      }
      slide.src = slides[currentSlide];
    });

    next.addEventListener('click', () => {
      currentSlide++;
      if (currentSlide > slides.length - 1) {
        currentSlide = 0;
      }
      slide.src = slides[currentSlide];
    });

    close.addEventListener('click', () => {
      modal.style.display = 'none';
      currentSlide = 0;
    });
  });
});
