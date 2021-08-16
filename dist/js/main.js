"use strict";

console.log("Hello World from main.js! \nChange this message, and make sure it changes in the browser \nto verify that you're working in the right files.");
var uniButton = document.querySelector('.uniButton');
var navList = document.querySelector('nav'); // let closeBtn = document.querySelector('.close');

var toggleNav = function toggleNav() {
  navList.classList.toggle('showing');
};

uniButton.addEventListener('click', toggleNav);
//# sourceMappingURL=main.js.map
