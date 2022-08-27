const today = new Date();
let thisYear = today.getFullYear();
const container = document.querySelector('#container');
const footer = document.querySelector('footer');
const copyright = document.createElement('copyright');
copyright.innerHTML = 'Pramote '+thisYear;
footer.appendChild(copyright);
const skills = ['financial analyst', 'risk management'];
const skillsSection = document.getElementById('skills');
const skillsList = document.querySelector("h2");
for (let num in skills) {
  const newListItem = document.createElement("li");
  newListItem.innerText = skills[num];
  skillsSection.appendChild(newListItem);
}
const messageForm = document.getElementById('leave_message');
messageForm.addEventListener('submit', function(e) {
  e.preventDefault(); 
  const formFields = e.target
  const name = formFields.name.value;
  const email = formFields.email.value;
  const message = formFields.message.value;
  console.log(formFields.name.value);
  console.log(formFields.email.value);
  console.log(formFields.message.value);
  const messageSection=document.getElementById('messages');
  const messageList = messageSection.getElementsByTagName('ul')[0];
  const newMessage = document.createElement('li');
  newMessage.innerHTML = `<a href="mailto:${email}">${name}</a><span> wrote: ${message} </span>`;
  const removeButton = document.createElement('button');
  removeButton.innerText = 'remove';
  removeButton.type = 'button';
  newMessage.appendChild(removeButton);
  messageList.append(newMessage);
  removeButton.addEventListener('click', function(e) {
   const entry = e.target.parentNode;
   entry.remove();
  });
  document.getElementById('leave_message').reset();
})

var githubRequest = new XMLHttpRequest();
githubRequest.open("GET", "https://api.github.com/users/pramotesuewiroj/repos", true);
githubRequest.send();
githubRequest.onload = function() {
  var repositories = JSON.parse(this.responseText);
  console.log(repositories);
};
var projectSection = document.getElementById('projects');
var projectList = projectSection.getElementsByTagName('ul')[0];
for (var i=0; i < repositories.length; i++) {
  var project = document.createElement('li');
  project.innerText = repositories[i];
  projectList.appendChild(project);
 }
