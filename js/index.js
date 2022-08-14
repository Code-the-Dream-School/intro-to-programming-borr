
//let today = new Date();
let currentYear = new Date().getFullYear();
//console.log(today);
console.log(currentYear);

// configure FOOTER
const footer = document.querySelector('footer');
const copyright = document.createElement('p');
copyright.textContent = `Aleksey Kabishau ${currentYear}`;
footer.appendChild(copyright);


// configure Skills Section
const skills = ['Skill 1', 'Skill 2', 'Skill 3', 'Skill 4'];
const skillsSection = document.querySelector('#skills');
const skillsList = skillsSection.querySelector('ul');
for (item of skills) {
    console.log(item);
    const skill = document.createElement('li');
    skill.textContent = item;
    skillsList.appendChild(skill);

}
