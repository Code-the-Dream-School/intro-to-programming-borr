//data
const skills = [
    "HTML", 
    "CSS",
    "Javascript",
    "Typescript",
    "React",
    "JSX",
    "TailWindCSS",
    "MaterialUI",
    "Redux",
    "NodeJS",
    "MongoDB",
    "AWS",
    "SQL",
    "GITHUB"
];

//variables
const bars = document.querySelector(".bars");
const navContainer = document.querySelector(".navContainer");
const navList = document.querySelectorAll(".navList")
const skillsContainer = document.querySelector(".skillsContainer");
const form = document.querySelector(".footerForm");
const name = document.querySelector(".inputName");
const email = document.querySelector(".inputEmail");
const text = document.querySelector(".inputText");
const submit = document.querySelector(".btnSubmit");
const messageList =  document.querySelector(".messageList");
const messageContainer =  document.querySelector(".messageContainer");
const copyright = document.querySelector(".copyright");
//event listeners
window.addEventListener("DOMContentLoaded", displaySkills)
window.addEventListener("DOMContentLoaded", showCopyright)
bars.addEventListener("click", showMenu)
form.addEventListener("submit", submitMessage);



//functions
function showMenu(){
   navContainer.classList.toggle("showNavList");
   navList.forEach(function(item){
    item.addEventListener("click", function(){
        navContainer.classList.remove("showNavList");
    })
   })
   if(navList.classList.contains("showNavList")){
    bars.classList.add("removeBars")
   }
}


function displaySkills(){
    skills.map((skill)=>{
    let skillList = document.createElement("li");
    skillList.classList.add("skill")
    skillList.innerText = skill;
    skillsContainer.append(skillList)
    })
}


function submitMessage(e){
    e.preventDefault();
    if(name.value != "" && email.value !== "", text.value !== ""){
    const messageSection = document.createElement("section")
    const messageId = new Date().getTime().toString();
    const attr = document.createAttribute("data-id");
    attr.value = messageId;
    messageSection.setAttributeNode(attr);
    messageSection.classList.add("messageSection");
    messageSection.innerHTML = `
    <h2>${name.value}</h2>
    <h3>${email.value}</h3>
    <p>${text.value}</p>
    <button type = "button" class = "remove">Remove</button>
    <button type = "button" class = "edit">Edit</button>
    `
    messageList.append(messageSection);
    const removeMessage = messageSection.querySelector(".remove")
    const editMessage = messageSection.querySelector(".edit");
    editMessage.addEventListener("click", editFunction); 
    removeMessage.addEventListener("click", removeItem);
    setBackToDefault()
    alert("Message Sent!")
    }else if(name.value == "" || email.value == "" || text.value == ""){
        alert("Missing fields, please fill out missing information.")
        setBackToDefault();
        messageList.forEach(function(message){
            messageList.removeChild(message);
        })
    }
   
}

function setBackToDefault(){
    name.value = ""
    email.value = ""
    text.value = ""
}


function removeItem(e){
   const item = e.currentTarget.parentElement;
   const id = item.dataset.id;
   messageList.removeChild(item);
}

function editFunction(e){
    const item = e.target.parentElement;
}




function showCopyright(){
    const todayDate = new Date().getFullYear()
    copyright.classList.add("copyright")
    copyright.innerText = `Samson Lemma | ${todayDate}`
}