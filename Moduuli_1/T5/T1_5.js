'use strict';
let year = prompt('Enter the year');
year = parseInt(year);

if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
  document.querySelector('#leaping').innerHTML = `${year} is a leap year.`;
} else {
  document.querySelector('#leaping').innerHTML = `${year} isn't a leap year.`;
}
