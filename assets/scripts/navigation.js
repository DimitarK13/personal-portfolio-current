'use strict';

const navToggle = document.querySelector('#toggle-nav');
const icon = navToggle.querySelector('span');
const nav = document.querySelector('.nav-list');

navToggle.addEventListener('click', () => {
  const attr = nav.getAttribute('active');

  if (attr === 'true') {
    openNav();
  } else {
    closeNav();
  }
});

function openNav() {
  nav.setAttribute('active', 'false');
  icon.textContent = 'menu';
}

function closeNav() {
  nav.setAttribute('active', 'true');
  icon.textContent = 'close';
}
