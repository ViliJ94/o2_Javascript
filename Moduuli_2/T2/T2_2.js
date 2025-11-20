'use strict';

let Participants = parseInt(prompt("How many participants?"));

    let persons = [];
    for (let i = 0; i < Participants; i++) {
      let name = prompt("Enter the name of a participant " + (i + 1));
      persons.push(name);
    }
persons.sort();

document.querySelector('#alpha').innerHTML = `${persons}`;