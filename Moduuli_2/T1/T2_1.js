'use strict';

let nmbrs = [];
    for (let i = 0; i < 5; i++) {
        let num = prompt(`Enter five numbers. Number ${i + 1}:`);
        nmbrs.push(num);
    }

    for (let i = nmbrs.length - 1; i >= 0; i--) {
        console.log(nmbrs[i]);
    }
