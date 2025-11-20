'use strict';

let nmbrs = [];
    for (let i = 0; i < 5; i++) {
        let num = prompt("Enter a number:");
        nmbrs.push(num);
    }

    for (let i = nmbrs.length - 1; i >= 0; i--) {
        console.log(nmbrs[i]);
    }
