console.log(`Hello World from main.js! 
Change this message, and make sure it changes in the browser 
to verify that you're working in the right files.`);
let uniButton = document.querySelector('.uniButton');
let navList = document.querySelector('nav');
// let closeBtn = document.querySelector('.close');

let toggleNav = function () {
	navList.classList.toggle('showing');
};

uniButton.addEventListener('click', toggleNav);
