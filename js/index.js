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
const messageForm = document.queryElementByName('leave_message');
messageForm.addEventListener('submit', function (e) {
  e.preventDefault() 
  const formFields = e.target
  console.log(formFields.name.value);
  console.log(formFields.email.value);
  console.log(formFields.message.value);
  const messageSection = document.queryElementById('messages');
  const messageList = messageSection.queryElementByTagName('ul');
  const newMessage = messageList.createElement("li");
  newMessage.innerText = <a href="mailto:email ">name</a><span>message</span>;
  const removeButton = document.createElement('button');
  removeButton.innerText('remove');

  document.getElementById('leave_message').reset();
};