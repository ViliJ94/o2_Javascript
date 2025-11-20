'use strict';

const targetElement = document.querySelector('#target');

const uno =  document.createElement('li');
uno.innerHTML = 'First item';
const dos = document.createElement('li');
dos.innerHTML = 'Second item';
const tres = document.createElement('li');
tres.innerHTML = 'Third item';

dos.classList.add = 'my-list';

targetElement.appendChild(uno);
targetElement.appendChild(dos);
targetElement.appendChild(tres);

