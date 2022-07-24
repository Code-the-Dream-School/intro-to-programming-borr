const today = new Date();
let thisYear = today.getFullYear();
const container = document.querySelector('#container');
const footer = document.querySelector('footer');
const copyright = document.createElement('copyright');
copyright.innerHTML = 'Pramote'+thisYear;
document.footer.appendChild(copyright);
const skills = ['financial analyst', 'risk management'];
const skillsSection = getElementById('skills');
const skillsList = document.querySelector("h2");
for (let num in skills) {
  document.createElement(skills[num]);
}