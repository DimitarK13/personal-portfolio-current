'use strict';

const projectCarousel = document.querySelector('.project-carousel');
let isPressed = false;
let startPos, scrollLeft;

projectCarousel.addEventListener('mousedown', (e) => {
  projectCarousel.classList.add('grabbed');

  isPressed = true;
  startPos = e.pageX - projectCarousel.offsetLeft;
  scrollLeft = projectCarousel.scrollLeft;
});

projectCarousel.addEventListener('mouseup', () => {
  projectCarousel.classList.remove('grabbed');

  isPressed = false;
});

projectCarousel.addEventListener('mouseleave', () => {
  projectCarousel.classList.remove('grabbed');

  isPressed = false;
});

projectCarousel.addEventListener('mousemove', (e) => {
  if (!isPressed) return;
  e.preventDefault();
  const x = e.pageX - projectCarousel.offsetLeft;
  const walk = (x - startPos) * 2;

  projectCarousel.scrollLeft = scrollLeft - walk;
});
