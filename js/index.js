
//SELECTING FOOTER AND PARAGRAPH ELEMENT USING DOM

const today = new Date();
const thisYear = today.getFullYear();


const Footer = document.querySelector('footer');

const copyrightFooter = document.createElement("p");

// USING DOM MANIPULATION
Footer.appendChild(copyrightFooter);

copyrightFooter.innerHTML = `&copy; Geeta Turumella ${thisYear}`


 
//SKILLS SECTION
 const skillsArray = ['HTML', 'CSS','JavaScript', 'UX Design(Enrolled, Coursera)', 'SQL', 'Medical Terminology'];
	// GET HTML ELEMENT BY USING DOM
	const skillsSection = document.getElementById('#skillSec');
	const orderedList = document.querySelector('ol');
    for (let i = 0; i < skillsArray.length; i++) {
		 
        // CREATION OF LIST ITEM THROUGH DOM
        const listItem = document.createElement('li');
        listItem.innerHTML = skillsArray[i];
	orderedList.appendChild(listItem);
     }
// FORM SECTION
     const messageForm = document.querySelector('form[name=leave_message]');
   messageForm.addEventListener('submit', (event) => {
   event.preventDefault();
   const name = event.target.name;
   const email = event.target.email;
   const message = event.target.message;
   console.log(name);
   console.log(email);
   console.log(message);

   const messageSection = document.querySelector('#messages');
     const messageList = messageSection.querySelector('ul');
     const newMessage = document.createElement('li');
     newMessage.classList.add('list__item');
     messageList.appendChild(newMessage);
     newMessage.innerHTML =`<div><a href="mailto:${email.value}">${name.value}</a> &nbsp <span>${message.value}</span></div>`
     messageForm.reset();
     
   // Creation of Remove Button
     const removeButton = document.createElement('button');
       removeButton.innerText = 'Remove';
       removeButton.type = 'button';
       removeButton.classList.add('button');
       newMessage.appendChild(removeButton);
   });
   //To remove the entry: This not working
     removeButton.addEventListener('click', (event) => {
       const entry = event.target.parentNode;
       entry.remove();
     });
