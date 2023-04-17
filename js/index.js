const today = new Date();

const thisYear = today.getFullYear();

const footer = document.querySelector('footer');
const copyright = document.createElement('p');
copyright.textContent = `James H. Nguyen ${thisYear}`;
footer.appendChild(copyright);


const skills = ["HTML", "CSS", "JS", "REACT"];
const skillsSection = document.getElementById('skills');
const skillsList = skillsSection.querySelector('ul');

for(let i = 0; i < skills.length; i++) {
  const skill = document.createElement('li');
  skill.textContent=skills[i];
  skillsList.appendChild(skill);
  
};

// v3 works
const messageForm = document.querySelector('[name="leave_message"]');

// add event listner on submit and capture 3 values in the form
messageForm.addEventListener("submit", function(e) {
  // console.log(e);
  
  e.preventDefault();
  
  // log the value of the form fields
  const nameValue = e.target.name.value;
  console.log(nameValue);
  const emailValue = e.target.email.value;
  console.log(emailValue);
  const messageValue = e.target.message.value;
  console.log(messageValue);

  // validate forms
  if(nameValue === ''  || emailValue === '' || messageValue === '') {
    alert("Please fill out all fields");
    return false;      
  };

  const messageSection = document.querySelector('#messages');
  const messageList = messageSection.querySelector('ul');
  const meessageHeader = document.querySelector('#messages-header');
  console.log(meessageHeader);

  // hide messages by default
  meessageHeader.style.display = 'none';
 
  // show emailto link using name, and show the message
  const newMessage = document.createElement('li');
  // moved span after "wrote" to restrict prevent it from being editable  
  newMessage.innerHTML=`<a style="color:#00bcd4; font-weight:bold;" href="mailto:${emailValue}">${nameValue}</a> wrote: <span> ${messageValue}</span>`; 
  
  // create removeButton
  const removeButton = document.createElement('button');
  removeButton.innerText = "remove";
  removeButton.type = "button";

  // add the remove button to newMessage
  newMessage.appendChild(removeButton);

  // add newMessage to messageList
  messageList.appendChild(newMessage);
  // document.getElementById("messages-header").classList.remove("hide");  works

  // click remove Button to delete each newMessage
  removeButton.addEventListener('click', function (){
    // button's parent element
    const entry = removeButton.parentNode; 
    entry.remove();

    // if it's the last message, hide "Messages h2"
    if(messageList.hasChildNodes() === false) {
      // document.getElementById("messages-header").classList.add("hide"); works
      meessageHeader.style.display = 'none';
      
    };
  })  
  
  // add edit button
  const editButton = document.createElement('button');
  editButton.innerText = "edit message";
  editButton.type = "button";
  
  // add edit button to newMessage
  newMessage.appendChild(editButton);
  
  // v.1 click editButton to repopulate the 3 message fields with the same values and possibly remove the existing submitted message
  // v.2 edit using contentEditable instead

  editButton.addEventListener('click', function() {
    const textToEdit = this.parentNode.querySelector('span')
    textToEdit.contentEditable = 'true';
    textToEdit.style.border = "1px dashed white";  
	});

   // add save button
   const saveButton = document.createElement('button');
   saveButton.innerText = "save";
   saveButton.type = "button";
   
   // add edit button to newMessage
   newMessage.appendChild(saveButton);

   saveButton.addEventListener('click', function() {
    const textToEdit = this.parentNode.querySelector('span')
    textToEdit.contentEditable = 'false';
    textToEdit.style.border = "none";  
	});


  // check if messageSection is empty, hidden by default in index.html below 
  // messageSection.style.display =  messageList.hasChildNodes() ? "block": "none"; doesn't work because I chose the parent element instead of the H2 element
  
  meessageHeader.style.display =  messageList.hasChildNodes() ? "block": "none";
  console.log(meessageHeader);  

  messageForm.reset();

});


// get my github repos

const projectSections = document.querySelector('#projects');
const gitHubProjectUrl = 'https://api.github.com/users/curiousBellyButton/repos'

fetch(gitHubProjectUrl)
  .then((response) => {
    return response.json();    
  })
  .then((data) => {
    const repositories = data;
    for(let i = 1; i < repositories.length; i++) {  
      let createdDate = new Date(repositories[i].created_at);
      const formatDate = createdDate.toDateString(createdDate);  
      const projectList = projectSections.querySelector('ul');
      const projectListItems = document.createElement('li');
      projectListItems.innerHTML = `<a href="${repositories[i].html_url}" target="_blank"> ${repositories[i].name}: ${formatDate} </a>`;  
      projectList.appendChild(projectListItems);
    }
  })
  .catch((err) => {
    console.table(err.stack)    
  })
  

