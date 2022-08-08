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



document.querySelector('#submit').addEventListener('click', run)

function run() {
  const name = document.querySelector('#name').value
  const email = document.querySelector('#email').value
  const message = document.querySelector('#message').value

  document.querySelector('#displayMessage').innerText = `
  <span>
  <a href="mailto:${email}">${name}</a>
  wrote: ${message} 
  </span>`


//lesson 4.3
/*
const messageForm = document.getElementsByName('leave_message')[0]

messageForm.addEventListener("submit", (e) => {
    
    e.preventDefault()

    let {name, email, message } = e.target

    addMessageToList({
      name: name.value, 
      email: email.value,
      message: message.value
})
    
   messageForm.reset()
})

*/

/*
    const messageList = document.getElementById("message-list")

    let addMessageToList = ({ name, email, message }) => {
       const newMessage = document.createElement("li") 


       const id= addMessageToList()
       messageIds[id] = newMessage




       newMessage.innerHTML = `
        <span>
        <a href="mailto:${email}">${name}</a>
        wrote: ${message} 
        <button onclick="removeButton(${id})" type="button" id="removeButton"> Remove </button>
        </span>
        `
        const removeButton= document.getElementById("removeButton")

        messageList.appendChild(newMessage)
        document.getElementById("messages-section").classList.remove("hideSection")
    }
   // Add an event listener to the removeButton element that handles the "click" event
   // Inside the callback function, find the button's parent element using DOM Traversal (hint: parentNode property) and store it in a variable named entry
  //  Remove the entry element from the DOM (hint: remove method)
  //   Append the removeButton to the newMessage element
  //  hint: appendChild method
  //   Append the newMessage to the messageList element


  */
 

    

    

    
    
