'use strict';

let nmbrs = [];
    while (true) {
    let input = prompt("Enter numbers you want sorted and when you want to stop enter a previously given number.");
    let temp =parseFloat(input);
      if (nmbrs.includes(temp)) {
            break;
        }
    nmbrs.push(temp);
    }
console.log(nmbrs.sort(function (a, b) {return a - b}));