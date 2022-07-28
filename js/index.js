let today = new Date();
let thisYear = today.getFullYear();
const footer = document.querySelector('footer');
const copyright = document.createElement('p');
copyright.innerHTML = `<span>Aboubacar Kaba ${thisYear}</span>`;
footer.appendChild(copyright);

const skills = ["Internal & External Audit","Digital Audit using Analytics", "SOX", "IFRS","Financial Analysis & Reporting", "Risk assessment", "Report writing", "Customer Service", "Web Development", "Programming with JavaScript, HTML, CSS", "Advanced Excel" ];
const skillsSection = document.getElementById('skills');
const skillsList = document.querySelector('.list');
for (let i = 0; i < skills.length; i++) {
    const skill = document.createElement('li');
    skill.innerHTML = skills[i];
    skillsList.appendChild(skill);
  };

 
  
