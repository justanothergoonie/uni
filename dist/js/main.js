"use strict";

console.log("Hello World from main.js! \nChange this message, and make sure it changes in the browser \nto verify that you're working in the right files.");
var uniButton = document.querySelector('.uniButton');
var navList = document.querySelector('nav'); // let closeBtn = document.querySelector('.close');

var toggleNav = function toggleNav() {
  navList.classList.toggle('showing');
};

uniButton.addEventListener('click', toggleNav);
var wrapMarg = document.querySelector('.wrapper');
var gutter = document.querySelector('.gutter');
var marg = window.getComputedStyle(wrapMarg);
console.log(marg.marginLeft); // let marginLeft = parseInt(marg.marginLeft);

var marginRight = parseInt(marg.marginRight);
var marginTop = parseInt(marg.marginTop);
var marginBottom = parseInt(marg.marginBottom);

var windowCheck = function windowCheck() {
  window.addEventListener('resize', function () {
    var marginLeft = marg.marginLeft;
    gutter.style.width = marginLeft;
  });
  window.addEventListener('load', function () {
    var marginLeft = marg.marginLeft;
    gutter.style.width = marginLeft;
  });
}; // gutter.style.width = marginLeft+'px';


windowCheck();
setTimeout(function () {
  windowCheck();
}, 1000);
//# sourceMappingURL=main.js.map
