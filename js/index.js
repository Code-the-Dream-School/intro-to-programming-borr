
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
