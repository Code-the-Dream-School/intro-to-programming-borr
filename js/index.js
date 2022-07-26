document.body.style.backgroundColor = "lightblue";
const today = new Date();
const thisYear = today.getFullYear();
const footer = document.querySelector("footer");
const copyright = document.createElement("p");
copyright.innerHTML = `KJ Loving ${thisYear}`;
footer.appendChild(copyright);
footer.style.fontSize = "large";
footer.style.textAlign = "center";
footer.style.fontWeight = "bold";
footer.style.textDecoration = "underline";

const skills = ["JS", "HTML", "CSS"];
const skillsSection = document.getElementById("mySkills");
const skillsList = skillsSection.querySelector("ul");
skills.forEach((skill) => {
    const skillItem = document.createElement("li")
    skillItem.innerText= skill
    skillsList.appendChild(skillItem)
})

