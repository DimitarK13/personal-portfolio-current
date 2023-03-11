const years = document.querySelectorAll('.years-slider-item');
const textOutput_El = document.getElementById('year-info');
const yearTexts = {
  '019': 'Mid December, started my web development journey.',
  '020':
    'Perfected semantic HTML and responsive CSS, also started learning basic JavaScript.',
  '021':
    'Started Strax Designs. Focused more on JavaScript and interactive web development. Enrolled in a 6-months course for full-stack development.',
  '022':
    'Started learning React. Built one application with React, NodeJS and MongoDB. ',
  '023':
    'Collaborated with SMX Academy - started working on courses for Web Development.',
};

years.forEach((year) => {
  year.addEventListener('click', () => {
    let id = year.getAttribute('id');
    let yearText = yearTexts[id];
    let i = 0;

    textOutput_El.textContent = '';

    const spellFunc = () => {
      if (i < yearText.length) {
        textOutput_El.textContent += yearText.charAt(i);
        i++;
        setTimeout(spellFunc, 50);
      }
    };

    spellFunc();
  });
});
