'use strict';

let confirmation = confirm('Should I calculate the square root?');

if (confirmation) {
  let number = parseFloat(prompt('Enter a number'));
  let square_root = Math.sqrt(number);
  document.querySelector('#sqrt').innerHTML = `The square root of ${number} is ${square_root};`;

} else {
  document.querySelector('#sqrt').innerHTML = 'The square root is not calculated.';
}

