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

let wrapMarg = document.querySelector('.wrapper')
let gutter = document.querySelector('.gutter')
let marg = window.getComputedStyle(wrapMarg);
console.log(marg.marginLeft)
// let marginLeft = parseInt(marg.marginLeft);
let marginRight = parseInt(marg.marginRight);
let marginTop = parseInt(marg.marginTop);
let marginBottom = parseInt(marg.marginBottom);




let windowCheck = () =>{
	window.addEventListener('resize', function () {
		let marginLeft = (marg.marginLeft) ;
		
		gutter.style.width = marginLeft;


	
	});
	window.addEventListener('load', function(){
		let marginLeft = (marg.marginLeft) ;
		gutter.style.width = marginLeft;
	})
}

// gutter.style.width = marginLeft+'px';
windowCheck();
setTimeout(() => {windowCheck()}, 1000);