/* creating objects */
let today = new Date();
let thisYear = today.getFullYear();

/* appending to the footer element */
const footer = document.querySelector("#footer");
const content = document.createElement("p");

content.textContent = "Alejandro " + thisYear;
footer.appendChild(content);

/* appending array of "skills" to unordered list */
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

/* message form handeling */
const messageForm = document.getElementsByName("leave_message");

messageForm[0].addEventListener("submit", (e) => {
  e.preventDefault();

  const name = e.target.name.value;
  const email = e.target.email.value;
  const message = e.target.message.value;

  console.log(name, email, message);

  /* Displaying message list */
  const messageList = document.querySelector("#messageList");
  const newMessage = document.createElement("li");
  newMessage.className = "newMessageText"; /* class name for css style */

  newMessage.innerHTML = `<a href="mailto: ${email}">${name}</a>
   <span>wrote: ${message} </span>`;

  /* button handeling */
  const removeButton = document.createElement("button");
  removeButton.className = "removeMessageButton"; /* class name for css style */
  removeButton.innerText = "remove";
  removeButton.setAttribute("type", "button");

  removeButton.addEventListener("click", () => {
    const entry = removeButton.parentNode;
    entry.remove();
  });

  newMessage.appendChild(removeButton);
  messageList.appendChild(newMessage);

  messageForm[0].reset();
});