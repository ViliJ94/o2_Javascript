'use strict';

let inu = []

for (let i = 0; i < 6; i++) {
  let name = prompt(`Enter the name of six dogs. Dog ${i + 1}:`);
  inu.push(name);
}

inu.sort();
inu.reverse();

let ul = document.getElementById("doggenstein");

inu.forEach(doggo => {
    let li = document.createElement("li");
    li.textContent = doggo;
    ul.appendChild(li);
});