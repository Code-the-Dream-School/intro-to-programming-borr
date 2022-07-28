/* creating objects */
let today = new Date();
let thisYear = today.getFullYear();

/* DOM selection: appending to the footer element */
const footer = document.querySelector("#footer");
const content = document.createElement("p");

content.textContent = "Alejandro " + thisYear;
footer.appendChild(content);

/* DOM selection: appending array of "skills" to unordered list */
let skills = [
  "Bilingual",
  "Ambitious",
  "Reliabile",
  "Learning agility",
  "Punctual",
  "Open to constructive criticism",
  "Self-starter",
  "Resiliant",
];

const skillsSection = document.querySelector("#skills");
const skillsList = document.querySelector("#my-skills");

for (let i = 0; i < skills.length; i++) {
  const skill = document.createElement("li");
  skill.textContent = skills[i];
  skillsList.appendChild(skill);
}
