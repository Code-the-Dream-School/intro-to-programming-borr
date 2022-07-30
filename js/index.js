const today = new Date();

const thisYear = today.getFullYear();

const footer = document.querySelector('footer');

const copyright = document.createElement('p');
copyright.textContent = `James H. Nguyen ${thisYear}`;
footer.appendChild(copyright);

const skills = ["HTML", "CSS", "JS", "REACT"];
const skillsSection = document.getElementById('skills');

const skillsList = skillsSection.querySelector('ul');

for(i = 0; i < skills.length; i++) {
  const skill = document.createElement('li');
  skill.textContent=skills[i];
  skillsList.appendChild(skill); 

};

console.log(skillsList);

// console.log(thisYear);

