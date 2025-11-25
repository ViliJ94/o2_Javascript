'use strict';

const button = document.querySelector('button');

function popup(){
  alert('Yay, the button was clicked!');
}

button.onclick = popup;