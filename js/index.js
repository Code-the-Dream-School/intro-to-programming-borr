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

// style the skills list // works
// const skillsListItems = document.querySelector('#skills').getElementsByTagName('li');  
// console.log(skillsListItems[0]);

// for(i = 0; i < skillsListItems.length; i++) {
//   skillsListItems[i].style.backgroundColor = 'white'; 
//   skillsListItems[i].style.listStyle = 'none';
//   skillsListItems[i].style.marginBottom = '.25rem';
//   skillsListItems[i].style.padding = '.40rem';
//   skillsListItems[i].style.maxWidth = 'fit-content';
//   skillsListItems[i].style.backgroundColor = 'white'; 
//   skillsListItems[i].style.borderRadius = '.5rem';
// }


// console.log(skillsList);


// v3 works
const messageForm = document.querySelector('[name="leave_message"]');

// add event listner on submit and capture 3 values in the form
messageForm.addEventListener("submit", function(e) {
  // console.log(e);
  
  e.preventDefault();
  
  // log the value of the form fields
  nameValue = e.target.name.value;
  console.log(nameValue);
  emailValue = e.target.email.value;
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
  newMessage.innerHTML=`<a style="color:#00bcd4; font-weight:bold;" href="mailto:${emailValue}">${nameValue}</a> <span> wrote: ${messageValue}</span>`; 
  // newMessage.innerText=`<span>${messageValue}</span>`; 

  // crate removeButton
  // <button type="button">Click Me!</button>
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
    // console.log(`removeButton previousSibling:` + removeButton.previousSibling);
    // console.log(`removeButton getparentNode:` + removeButton.parentNode);
    entry.remove();

    // if it's the last message, hide "Messages h2"
    if(messageList.hasChildNodes() === false) {
      // document.getElementById("messages-header").classList.add("hide"); works
      meessageHeader.style.display = 'none';
      
    };
  })  
  
  // add edit button
  const editButton = document.createElement('button');
  editButton.innerText = "edit";
  editButton.type = "button";
  
  // add edit button to newMessage
  newMessage.appendChild(editButton);
  
  // click editButton to repopulate the 3 message fields with the same values and possibly remove the existing submitted message

    editButton.addEventListener('click', function() {
      messageForm.name.value = nameValue;
      messageForm.email.value = emailValue;
      messageForm.message.value = messageValue;      
    });


  // console.log(newMessage);
  // console.log(removeButton);

  // check if messageSection is empty, hidden by default in index.html below 
  // messageSection.style.display =  messageList.hasChildNodes() ? "block": "none"; doesn't work because I chose the parent element instead of the H2 element
  
  meessageHeader.style.display =  messageList.hasChildNodes() ? "block": "none";
  console.log(meessageHeader);  

  messageForm.reset();

});



