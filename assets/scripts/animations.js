const delay = 3.2;
let tl = gsap.timeline({ defaults: { opacity: 1, duration: 0.5 } });

tl.to('.anim-1', {
  delay,
});

tl.to(
  '.anim-stagger',
  {
    stagger: 0.25,
  },
  '<'
);
tl.to('.anim-carousel', {}, '<');
tl.to(
  '.anim-project-el',
  {
    stagger: 0.5,
  },
  '<'
);
tl.to('.anim-social-links', {
  stagger: 0.25,
});
gsap.to('.anim-nav-el', {
  opacity: 1,
  duration: 0.5,
  delay,
  stagger: 0.25,
});
