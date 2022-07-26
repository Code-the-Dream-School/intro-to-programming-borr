const today = new Date()
const thisYear= today.getFullYear()

const footer = document.querySelector("footer")
const copyright = document.createElement("p")
copyright.innerText= `Jackie Vazquez ${thisYear}`
footer.appendChild(copyright)

const skills = ['HTML', 'CSS', 'Javascript']
const skillsSection = document.getElementById('skills')
const skillsList = skillsSection.querySelector('ul')


skills.forEach((skill) => {
    const skillItem = document.createElement("li")
    skillItem.innerText= skill
    skillsList.appendChild(skillItem)
})