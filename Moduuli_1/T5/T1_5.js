'use strict';
let year = prompt('Enter the year');
year = parseInt(year);

let isLeap = false
if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
  isLeap = true
} else {
  isLeap = false
}
if (isLeap)
{
  document.querySelector('#leaping').innerHTML = `${year} is a leap year.`;
} else {
  document.querySelector('#leaping').innerHTML = `${year} isn't a leap year.`;
}