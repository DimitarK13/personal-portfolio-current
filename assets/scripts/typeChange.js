'use strict';

const text_El = document.querySelector('#change-text');
const texts = [
  'Developer',
  'Designer',
  'Innovative',
  'Brilliant',
  'Charming',
  'Obdurate',
  'Persistent',
];
let counter = 0;

setInterval(() => {
  for (let i = 0; i < texts.length; i++) {
    text_El.textContent = texts[counter];
  }
  counter++;
  if (counter > texts.length - 1) {
    counter = 0;
  }
}, 2000);
