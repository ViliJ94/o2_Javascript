'use strict';

let name = prompt("Kuka nää oot");
let elementti = document.querySelector('#kissa');
elementti.innerHTML = 'Good morning, ' + name + '!';