// configure FOOTER
let currentYear = new Date().getFullYear();
const footer = document.querySelector('footer');
const copyright = document.createElement('p');
copyright.textContent = `Aleksey Kabishau ${currentYear}`;
footer.appendChild(copyright);


// configure Skills Section
const skills = ['Skill 1', 'Skill 2', 'Skill 3', 'Skill 4'];
const skillsSection = document.querySelector('#skills');
const skillsList = skillsSection.querySelector('ul');
for (item of skills) {
    const skill = document.createElement('li');
    skill.textContent = item;
    skillsList.appendChild(skill);

}

// handle message form submit
const messageForm = document.getElementsByName('leave_message')[0]; // is this the best way to do it?
messageForm.addEventListener('submit', (event) => {
    
    event.preventDefault(); // event or event.target? why this is needed at all?

    // local const
    const name = event.target.name;
    const email = event.target.email;
    const message = event.target.message;

    // select elements
    const messageSection = document.getElementById('messages');
    const messageList = messageSection.querySelector('ul');

    // remove button
    const removeButton = document.createElement('button');
    removeButton.textContent = "remove";
    removeButton.type = "button";
    removeButton.addEventListener('click', (event) => {
        event.target.parentNode.remove();
    });

    // new message
    const newMessage = document.createElement('li');    
    newMessage.insertAdjacentHTML(
        'afterbegin',
        `<a href="mailto:${email.value}">${name.value}</a> wrote: <span>${message.value} </span>`
    )

    newMessage.append(removeButton);
    messageList.appendChild(newMessage);
   
    event.target.reset(); // why event target in this case?
})
