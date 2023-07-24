'use strict';

const projectsContainer = document.querySelector('.projects');
const projectPreviewContainer = document.querySelector('.project-preview');
const projectPrevieImage = projectPreviewContainer.querySelector('img');

projectsContainer.addEventListener('click', (e) => {
  const image = e.target.closest('.project');
  if (!image) return;

  const imageSrc = image.getAttribute('src');
  projectPrevieImage.setAttribute('src', imageSrc);

  projectPreviewContainer.setAttribute('aria-expanded', 'true');

  document.documentElement.style.overflow = 'hidden';
});

projectPreviewContainer.addEventListener('click', () => {
  projectPreviewContainer.setAttribute('aria-expanded', 'false');
  document.documentElement.style.overflow = 'auto';
});
