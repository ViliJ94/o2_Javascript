'use strict';
let name = prompt("Enter thy name:");
let rndmnum = Math.floor(Math.random()*4) + 1;

let house = "";

switch (rndmnum)  {
  case 1:
    house = "Gryffindor";
    break;
  case 2:
    house = "Slytherin";
    break;
  case 3:
    house = "Hufflepuff";
    break;
  case 4:
    house = "Ravenclaw";
    break;
}
document.querySelector('#belong').innerHTML = `${name}, you are ${house}.`;


