'use strict';

let nmbrs = [];
    while (true) {
    let input = prompt("Please enter numbers that you want sorted and you can stop by entering 0");
    let temp =parseFloat(input);
    if (temp === 0) break;
    nmbrs.push(temp);
    }


console.log(nmbrs.sort(function (a, b) {return b - a}));