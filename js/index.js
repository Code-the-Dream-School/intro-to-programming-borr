const today = new Date();

const thisYear = today.getFullYear();

const footer = document.querySelector('footer');

const copyright = document.createElement('p');
copyright.textContent = `James H. Nguyen ${thisYear}`;
footer.appendChild(copyright);


console.log(copyright);


console.log(thisYear);

