const navToggle = document.querySelector('#toggle-nav');
const image = navToggle.querySelector('img');
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
  image.setAttribute('src', 'assets/images/nav-toggle.png');
}

function closeNav() {
  nav.setAttribute('active', 'true');
  image.setAttribute('src', 'assets/images/nav-toggle-close.png');
}
