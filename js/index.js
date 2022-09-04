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

// Using AJAX
/*let githubRequest = new XMLHttpRequest();
githubRequest.open("GET", "https://api.github.com/users/pramotesuewiroj/repos", true);
githubRequest.send();
githubRequest.onload = function() {
  const repositories = JSON.parse(this.responseText);
  let projectSection = document.getElementById('projects');
  let projectList = projectSection.getElementsByTagName('ul')[0];
  for (let i=0; i < repositories.length; i++) {
    const project = document.createElement('li');
    project.innerHTML = `<a href=${repositories[i].html_url}>${repositories[i].html_url}</a><span> Description: ${repositories[i].description} </span><span> Created Date: ${repositories[i].created_at} </span>`;
    projectList.appendChild(project);
  }
};
*/

//Using Fetch API
fetch("https://api.github.com/users/pramotesuewiroj/repos")
  .then((response) => response.json())
  .then((repositories) => {
    let projectSection = document.getElementById('projects');
    let projectList = projectSection.getElementsByTagName('ul')[0];
    for (let i=0; i < repositories.length; i++) {
      const project = document.createElement('li');
      project.innerHTML = `<a href=${repositories[i].html_url}>${repositories[i].html_url}</a><span> ; Description: ${repositories[i].description} </span><span> ; Created Date: ${repositories[i].created_at} </span>`;
      projectList.appendChild(project);
    }
  })
  .catch((error) => {
    console.error('Error:', error);
  });