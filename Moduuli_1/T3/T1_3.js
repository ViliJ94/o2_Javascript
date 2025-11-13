'use strict';
  let num1 = prompt("Enter the first number:");
  let num2 = prompt("Enter the second number:");
  let num3 = prompt("Enter the third number:");
  let sum = parseInt(num1) + parseInt(num2) + parseInt(num3);
document.querySelector('#sum').innerHTML ='The sum is: ' + sum + '.';

  let product = parseInt(num1) * parseInt(num2) * parseInt(num3);
 document.querySelector('#product').innerHTML = 'The product is: ' + product + '.';

  let avg = sum / 3;
 document.querySelector('#average').innerHTML = 'The average is: ' + avg + '.';
