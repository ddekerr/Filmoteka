import {Spinner} from 'spin.js';

export {spinner};

var opts = {
  lines: 13, // The number of lines to draw
  length: 38, // The length of each line
  width: 17, // The line thickness
  radius: 45, // The radius of the inner circle
  scale: 1, // Scales overall size of the spinner
  corners: 1, // Corner roundness (0..1)
  speed: 0.7, // Rounds per second
  rotate: 0, // The rotation offset
  animation: 'spinner-line-fade-more', // The CSS animation name for the lines
  direction: 1, // 1: clockwise, -1: counterclockwise
  color: '#ff6b01', // CSS color or array of colors
  fadeColor: 'transparent', // CSS color or array of colors
  top: '50%', // Top position relative to parent
  left: '50%', // Left position relative to parent
  shadow: '0 0 1px transparent', // Box-shadow for the lines
  zIndex: 2000000000, // The z-index (defaults to 2e9)
  className: 'spinner', // The CSS class to assign to the spinner
  position: 'absolute', // Element positioning
};

// var target = document.querySelector('.wrapper');
var spinner = new Spinner(opts).spin(target);

// console.log(spinner.el)


// // Чтобы вручную вставить спиннер в DOM, вы можете вызвать метод spin()
// var spinner = new Spinner().spin();
// target.appendChild(spinner.el);

// // Чтобы спрятать спиннер, вы можете вызвать метод stop()


// const body = document.querySelector('.wrapper')
// const loadBtn = document.createElement('button')
// loadBtn.classList.add('.load')
// loadBtn.style.backgroundColor = "teal";
// loadBtn.style.padding = "24px";


// console.log(loadBtn.style);
// body.appendChild(loadBtn);

// loadBtn.addEventListener('click',  addSpinner())
// console.log(loadBtn)
// loadBtn.insertAdjacentHTML("afterbegin", addSpinner())


// function addSpinner() {
        
 
    // var target = document.querySelector('.wrapper');
// var spinner = new Spinner(opts).spin(loadBtn);
// loadBtn.insertAdjacentHTML("afterbegin", spinner.el);
// console.log(spinner.el)

// }

// function test() {
//     setTimeout(function addSpinner(){
//        var spinner = new Spinner().spin(); 

   
//     }, 1000);
// }
// test()