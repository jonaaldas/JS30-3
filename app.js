//get the root elements
let r = document.querySelector(':root');
// get the DOM elements
let hl = document.querySelector('.hl');
let spacing = document.querySelector('#spacing');
let blur = document.querySelector('#blur');
let color = document.querySelector('#base');
let img = document.querySelector('img');



function changeSpacing(){
  let spacingValue = spacing.value;
  img.style.padding = r.style.setProperty('--spacing', `${spacingValue}px`);
}

function changeBlur(){
  let blurValue = blur.value;
  img.style.padding = r.style.setProperty('--blur', `${blurValue}px`);
}

function changeColor(){
  let colorValue = color.value;
  img.style.padding = r.style.setProperty('--base', `${colorValue}`);
}